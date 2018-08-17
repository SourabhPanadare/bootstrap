# Classes

	Lead Text: Make a paragraph stand out(Make text bold).

		   <p class="lead">...</p>

	Small Text: set text at 85% the size of the parent

		  <p class="small">...</p>

	Bold & italic :

		  <strong>rendered as bold text</strong>
		  <em>rendered as italicized text</em>

	Strike Through: For indicating blocks of text that are no longer relevant

		    <s>This line of text is meant to be treated as no longer accurate.</s>

	Alignment Classes:

		  .text-left, .text-center, .text-right, .text-justify, .text-nowrap

	Transformation Classes:

		  .text-lowercase, .text-uppercase, .text-capitalize

	BlockQuotes: Add vertical Dash before and after text(after and before dash styling)

		  <blockquote>
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
		  </blockquote>

		  <blockquote class="blockquote-reverse">
		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
		  </blockquote>

	Lists:

		  <ul class="list-unstyled">
		    <li>...</li>
		  </ul>

		  <ul class="list-inline">
		    <li>...</li>
		  </ul>
	Close:
		<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>

	Caret:
		<span class="caret"></span>

	Floats:

	      .pull-left, .pull-right, .center-block

	Clearfix:

	      .clearfix

	Hide Show:

	      .show, .hidden-xs, .hidden-sm, .hidden-md, .hidden-lg

	Responsive Embed: Responsive audio video container

	      <div class="embed-responsive embed-responsive-16by9">
		    <iframe class="embed-responsive-item" src="..."></iframe>
	      </div>


# Javascript Component


	Scroll Spy: changes navigation color on scroll(active)

		  <body data-spy="scroll" data-target="#navbar-example">
		    <div id="navbar-example">

		    </div>
		  </body>

		  or  $('body').scrollspy({ target: '#navbar-example' });

	Tabs: Provides navigation tabs with content(hide show)

		  <ul class="nav nav-tabs" role="tablist">
		      <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
		      <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
		      <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
		      <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
		  </ul>

	<!-- Tab panes -->
		<div class="tab-content">
		      <div role="tabpanel" class="tab-pane active" id="home">...</div>
		      <div role="tabpanel" class="tab-pane" id="profile">...</div>
		      <div role="tabpanel" class="tab-pane" id="messages">...</div>
		      <div role="tabpanel" class="tab-pane" id="settings">...</div>
		</div>

		$('#someTab').tab('show')

	ToolTips: Shows little tooltip

	      <!-- HTML to write -->
	      <a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

	      <!-- Generated markup by the plugin -->
	      <div class="tooltip top" role="tooltip">
		<div class="tooltip-arrow"></div>
		<div class="tooltip-inner">
		    Some tooltip text!
		</div>
	      </div>

	      $('#element').tooltip('show')

	Popover: Similar to tooltip (a box with content inside it)

	      <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing 			content. It's very engaging. Right?">Click to toggle popover</button>

	      $('#example').popover('show')

	Collapse: A collapsable div

		<a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false"  aria- 			controls="collapseExample">Link with href
		</a>

		<div class="collapse" id="collapseExample">
		  <div class="well">

		  </div>
		</div>

		$('.collapse').collapse('toogle')

	Affix:  Used for position fixed (sticky element)

		  <div data-spy="affix" data-offset-top="60" data-offset-bottom="200">
		  ...
		  </div>

		  $('#myAffix').affix({
		    offset: 15
		  })
