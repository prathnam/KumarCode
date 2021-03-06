module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        files: [
        "web/lib/jquery/jquery-2.1.4.min.js",
        "web/lib/angular/angular.min.js",
        "web/lib/angular/angular-animate.min.js",
        "web/lib/angular/angular-route.min.js",
        "web/lib/angular/angular-mocks.js",
        "gulp/requirenoop.js",
        "web/lib/bootstrap/js/bootstrap.min.js",
        "web/lib/angular/angular-route.min.js",
        "web/lib/wix-angular-tree-control/angular-tree-control.js",
        "web/lib/angular-ui/ui-bootstrap-tpls-1.2.4.min.js",
        "web/lib/log4javascript/log4javascript.min.js",
        "web/lib/lodash/lodash.min.js",
        "web/lib/uitk/uitk-navigable.js",
        "web/lib/uitk/components/calendar/js/uitk-calendar.js",
        "web/lib/uitk/components/dynamic-table/js/uitk-dynamic-table.js",
        "web/lib/uitk/components/tabs/js/tabs.js",
        "web/lib/uitk/components/label/js/uitk-label.js",
        "web/lib/uitk/uitk-slide-animation.js",
        "web/lib/uitk/components/accordion/js/uitk-accordion.js",
        "web/lib/uitk/components/button/js/uitk-button.js",
        "web/lib/uitk/components/textfield/js/uitk-text-field.js",
        "web/lib/uitk/components/tree/js/uitk-tree.js",
        "web/lib/ui-mask/mask.js",
        "web/lib/ui-grid/ui-grid.min.js",
        "web/dist/config.js",
        "web/dist/templates.js",

        "App/Shared/shared.module.js",
        "App/Shared/Patient/patient-codes.service.js",
        "App/Shared/Patient/medical-code.service.js",
        "App/Shared/Patient/procedure-code.service.js",
        "App/Shared/Patient/diagnosis-code.service.js",
        "App/Shared/Patient/hcpcs-code.service.js",
        "App/Shared/LocalStorage/localstorage.service.js",
        "App/Shared/LocalStorage/localstorage-manager.service.js",
        "App/Shared/LocalStorage/windows-manager.service.js",
        "App/Shared/LaunchPads/external-windows.service.js",
        "App/Shared/LocalStorage/localstorage-watcher.service.js",
        "App/Shared/LaunchPads/encoder-launcher.service.js",
        "App/Shared/i9i10-state.service.js",
        "App/Shared/auth-interceptor.service.js",
        "App/Shared/LocalStorage/child-window-manager.service.js",
        "App/Shared/kc-splitter/kc-splitter.js",
        "App/Shared/Labels/label.service.js",
        "App/Shared/Directives/quick-repeat.directive.js",
        "App/Shared/Directives/scroll-if.directive.js",
        "App/Shared/Directives/stopwatch.directive.js",
        "App/Shared/Directives/on-finish-render.directive.js",
        "App/Shared/Directives/scroll-to-top-when.js",
        "App/Shared/Directives/link-or-text.js",
        "App/Shared/Directives/focus-on-me.controller.js",
        "App/Shared/Directives/focus-on-me.directive.js",
        "App/Shared/Directives/next-focus.directive.js",
        "App/Shared/Directives/on-enter.directive.js",
        "App/Shared/Directives/is-number.directive.js",
        "App/Shared/Directives/auto-capitalize.directive.js",
        "App/Shared/Directives/cursor-position.directive.js",
        "App/Shared/Templates/template.service.js",
        "App/Shared/recursion-helper.service.js",
        "App/Shared/Directives/progress-bar.directive.js",
        "App/Shared/system-admin-settings.service.js",
        "App/Shared/shared.enums.js",
        "App/Shared/Patient/patient-demographics.service.js",
        "App/Shared/Patient/patient-case.service.js",
        "App/Shared/Patient/patient-record.service.js",
        "App/Shared/Patient/add-code.service.js",
        "App/Shared/EditGroupPrice/import-patient-claim-conversion.service.js",
        "App/Shared/EditGroupPrice/export-patient-claim-conversion.service.js",
        "App/Shared/EditGroupPrice/edit-group-price.service.js",
        "App/Shared/retryer.service.js",
        "App/Shared/modal-instance.controller.js",


        "App/Demographics/demographics.module.js",
        "App/Demographics/demographics-service.js",
        "App/Demographics/demographics-validations.js",
        "App/Demographics/age.service.js",
        "App/Demographics/demographics.controller.js",
        "App/Demographics/demographics.directive.js",


        "App/CodeSummary/code-summary.module.js",
        "App/CodeSummary/UiGridDecorators/get-rowcol.decorator.js",
        "App/CodeSummary/UiGridDecorators/get-direction.decorator.js",
        "App/CodeSummary/Settings/code-summary-settings.service.js",
        "App/CodeSummary/EditTemplateDirectives/code-summary-date-picker.directive.js",
        "App/CodeSummary/poa.filter.js",
        "App/CodeSummary/code-summary.controller.js",
        "App/CodeSummary/code-summary.directive.js",


        "App/Encoder/CodingBook/TabularNotes/tabular-notes.module.js",
        "App/Encoder/CodingBook/TabularNotes/tabular-notes.service.js",
        "App/Encoder/CodingBook/TabularNotes/tabular-notes.controller.js",
        "App/Encoder/CodingBook/Neoplasm/neoplasm.module.js",
        "App/Encoder/CodingBook/Neoplasm/neoplasm.service.js",
        "App/Encoder/CodingBook/Neoplasm/neoplasm.controller.js",
        "App/Encoder/CodingBook/Modifier/modifier.module.js",
        "App/Encoder/CodingBook/Modifier/modifier.service.js",
        "App/Encoder/CodingBook/Modifier/modifier.controller.js",
        "App/Encoder/CodingBook/Appendices/appendices.module.js",
        "App/Encoder/CodingBook/Appendices/appendices.service.js",
        "App/Encoder/CodingBook/Appendices/appendices.controller.js",
        "App/Encoder/CodingBook/Drugs/drugs.module.js",
        "App/Encoder/CodingBook/Drugs/drugs.service.js",
        "App/Encoder/CodingBook/Drugs/drugs.controller.js",
        "App/Encoder/CodingBook/CustomTree/custom-tree.module.js",
        "App/Encoder/CodingBook/CustomTree/custom-tree.controller.js",
        "App/Encoder/CodingBook/CustomTree/custom-tree.directive.js",
        "App/Encoder/CodingBook/CustomTree/process-description.controller.js",
        "App/Encoder/CodingBook/CustomTree/process-description.directive.js",
        "App/Encoder/CodingBook/Crosswalk/crosswalk.module.js",
        "App/Encoder/CodingBook/Crosswalk/crosswalk.service.js",
        "App/Encoder/CodingBook/Crosswalk/crosswalk.controller.js",
        "App/Encoder/CodingBook/Appendices/appendices-tree-container.directive.js",
        "App/Encoder/CodingBook/coding-book.module.js",
        "App/Encoder/CodingBook/coding-book.config.js",
        "App/Encoder/encoder.module.js",
        "App/Encoder/CodingBook/Index/AdditionalInfo/additional-info.controller.js",
        "App/Encoder/CodingBook/Index/AdditionalInfo/additional-info.service.js",
        "App/Encoder/CodingBook/Tabular/tabular.directive.js",
        "App/Encoder/CodingBook/Tabular/tabular.service.js",
        "App/Encoder/Tools/storage.controller.js",
        "App/Encoder/CodingLogic/logic.service.js",
        "App/Encoder/CodingLogic/initial-terminology.service.js",
        "App/Encoder/CodingLogic/process-workflow.service.js",
        "App/Encoder/CodingLogic/subdictionary.service.js",
        "App/Encoder/CodingLogic/logic.controller.js",
        "App/Encoder/CodingBook/book.service.js",
        "App/Encoder/CodingBook/TabularI10Pcs/tabulari10pcs.service.js",
        "App/Encoder/CodingBook/TabularI10Pcs/tabulari10pcs.controller.js",
        "App/Encoder/CodingBook/TabularI10Pcs/tabulari10pcs.directive.js",
        "App/Encoder/CodingBook/Tabular/tabular.controller.js",
        "App/Encoder/CodingBook/Index/index.service.js",
        "App/Encoder/CodingBook/Index/TermTracker/term-tracker.directive.js",
        "App/Encoder/CodingBook/Index/PartialWords/partial-words.directive.js",
        "App/Encoder/CodingBook/Index/BreadcrumbTrail/breadcrumb-trail.directive.js",
        "App/Encoder/CodingBook/Index/Tree/index-tree.controller.js",
        "App/Encoder/CodingBook/Index/Tree/index-tree.directive.js",
        "App/Encoder/CodingBook/Index/Autocomplete/index-autocomplete.controller.js",
        "App/Encoder/CodingBook/Index/Autocomplete/index-autocomplete.directive.js",
        "App/Encoder/CodingBook/Index/index.controller.js",
        "App/Encoder/CodingBook/book.controller.js",
        "App/Encoder/encoder.service.js",
        "App/Encoder/encoder.controller.js",
        "App/Encoder/encoder.directive.js",


        "App/CACTester/cac-tester.module.js",


        "App/UnitTests/unit-test.helper.js",


        "app/**/*.spec-sup.js",
        "app/**/*.spec.js"
        ],

        reporters: ['progress','junit','coverage'],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        junitReporter: {
            outputDir: 'test_results/reports',
            useBrowserName: true,
            outputFile: 'junit.xml'
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'test_results',
            subdir: 'coverage'
        },
        preprocessors: {
            'App/**/!(*spec).js': 'coverage'
        },
        port: 9876,
        runnerPort: 9100,
        colors: true,
        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['PhantomJS'],

        singleRun: true
    });
};
