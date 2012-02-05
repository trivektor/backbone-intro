!SLIDE transition=uncover
<h1>Intro to Backbone JS</h1>
<span>Andrew Kim & Tri Vuong</span>

!SLIDE transition=uncover
<h1 class="slide_title">Back...what?</h1>
<ul>
<li>emerging Javascript framework</li>
<li>Javascript front-end heavy applications</li>
<li>used by major applications (LinkedIn, Basecamp, Foursquare, Pandora, Flow etc)</li>
</ul>

!SLIDE transition=uncover
<h1 class="slide_title">Current problems</h1>
<img src="img/callback_soup.jpg" />

!SLIDE transition=uncover
<h1 class="slide_title">Current problems</h1>
<img src="img/spaghetti-bolognese.jpg" />
<h3>Spaghetti code</h3>

!SLIDE transition=uncover
<h1 class="slide_title">Advantages</h1>
<h2>Modular code</h2>
<pre class="sh_javascript_dom">
  window.Category = Backbone.Model.extend({
    validateOnCreate: function() {
      ...
    },
    save: function() {
      ...
    },
    fetch: function() {
      ...
    },
    findByNumber: function() {
      ...
    }
  })
</pre>

!SLIDE transition=uncover
<h1 class="slide_title">Advantages</h1>
<h2>Reusable code components</h2>
<pre class="sh_javascript_dom">
Placeholder  
</pre>

!SLIDE transition=uncover
<h1 class="slide_title">Advantages</h1>
<h2>Testable</h2>
<pre class="sh_javascript_dom">
Placeholder  
</pre>

!SLIDE transition=uncover
<h1 class="slide_title">Advantages</h1>
<h2>Support and Documentation</h2>