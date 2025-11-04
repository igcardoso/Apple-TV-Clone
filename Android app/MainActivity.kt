package com.example.webvideocast

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import com.example.webvideocast.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    
    private lateinit var binding: ActivityMainBinding
    private lateinit var webView: WebView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        
        supportActionBar?.hide()
        setupWebView()
        loadInitialUrl()
    }
    
    private fun setupWebView() {
        webView = binding.webView
        
        // Configurações do WebView
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.settings.mediaPlaybackRequiresUserGesture = false
        webView.settings.javaScriptCanOpenWindowsAutomatically = false
        
        // WebViewClient simplificado - apenas bloqueia outros domínios
        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(
                view: WebView?,
                request: android.webkit.WebResourceRequest?
            ): Boolean {
                val url = request?.url.toString()
                val allowedDomains = arrayOf(
                    "stream-os.netlify.app",
                    "netlify.app"
                )
                
                val isAllowed = allowedDomains.any { domain -> 
                    url.contains(domain) 
                }
                
                if (isAllowed) {
                    return false // Permite carregar
                } else {
                    return true // Bloqueia outros domínios
                }
            }
            
            @Deprecated("Usar a versão nova")
            override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
                if (url == null) return true
                
                val allowedDomains = arrayOf(
                    "stream-os.netlify.app", 
                    "netlify.app"
                )
                
                val isAllowed = allowedDomains.any { domain -> 
                    url.contains(domain) 
                }
                
                return !isAllowed
            }
        }
    }
    
    private fun loadInitialUrl() {
        webView.loadUrl("https://stream-os.netlify.app")
    }
}