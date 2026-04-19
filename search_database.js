// This is your master database for the search bar.
// Whenever you write a new article, just add one new line here!

const searchData = [
    // Practice Tests
    { title: "Start PPDT Mock Test", url: "/Test?test=PPDT", type: "Test", keywords: "practice ppdt picture perception test day 1 screening" },
    { title: "Start TAT Mock Test", url: "/Test?test=TAT", type: "Test", keywords: "practice tat thematic apperception test psychology pictures" },
    { title: "Start WAT Mock Test", url: "/Test?test=WAT", type: "Test", keywords: "practice wat word association test psychology words 15 seconds" },
    { title: "Start SRT Mock Test", url: "/Test?test=SRT", type: "Test", keywords: "practice srt situation reaction test psychology 30 minutes" },
    { title: "Start Full Mock Test", url: "/Test?test=full", type: "Test", keywords: "practice full mock test psychology tat wat srt battery" },
    { title: "Start SD (Self Description) Test", url: "/test2?test=SD&set=1", type: "Test", keywords: "practice sd sdt self description test psychology 15 minutes paragraph parents teachers friends" },
    // Core Guides
    { title: "SSB Interview Complete Guide", url: "/ssb_complete_guide", type: "Guide", keywords: "ssb process 5 days screening psychology gto interview conference olq" },
    { title: "Why Candidates Fail in SSB", url: "/why_candidates_fail", type: "Guide", keywords: "rejection failure mistakes screened out conference out fake" },
    { title: "How to Maximize Prep on this Platform", url: "/how_to_utilize_platform", type: "Guide", keywords: "platform tutorial timer practice notebook mock test" },
    { title: "OIR Test Complete Guide", url: "/oir_test_guide", type: "Guide", keywords: "oir officer intelligence rating reasoning verbal non-verbal screening" },
    { title: "50-Day SSB Preparation Strategy", url: "/50_day_ssb_preparation_strategy", type: "Guide", keywords: "50 day ssb preparation strategy without coaching daily routine fitness psychology" },
    { title: "Top 50 Negative Words in WAT", url: "/top_50_negative_words_in_wat", type: "Guide", keywords: "negative words in wat top 50 list examples death murder defeat psychology" },
    { title: "The Blank Slide in TAT", url: "/the_blank_slide_in_tat", type: "Guide", keywords: "blank slide tat 12th story examples psychology trap" },
    { title: "Time Management in SSB Psych Test: The Ultimate Guide", url: "/time_management_in_ssb_psych_test", type: "Guide", keywords: "time management ssb psychology test tat 4 minutes wat 15 seconds srt 30 minutes dipr testing hall clear ssb strategy tricks fast writing speed" },
    { title: "The 'Weekend Warrior' SSB Strategy for Working Professionals", url: "/weekend_warrior_ssb_strategy", type: "Guide", keywords: "working professional college student weekend strategy micro habits time management ssb preparation mock tests dipr drop year study plan" },
    { title: "The Ultimate SSB Repeater Strategy", url: "/ssb_repeater_strategy", type: "Guide", keywords: "repeater strategy bounce back unlearn coaching fail pass interview ppdt fish market previous attempt" },
    { title: "TAT Pictures with PDF Download & Analysis", url: "/articles/tat_practice_set_1", type: "Guide", keywords: "download tat pictures pdf practice offline images slides psychological test set 1" },
    { title: "Stays Near SSB Boards: The Ultimate Guide", url: "/articles/nearby_ssb_stays", type: "Guide", keywords: "ssb stay nearby accommodation hotel dormitory allahabad bhopal mysore dehradun afsb reporting" },
    // Psychology Deep Dives
    { title: "What is TAT? A Complete Guide", url: "/what_is_tat", type: "Guide", keywords: "tat thematic apperception test story formula hero blank slide" },
    { title: "How Psych Tests Decide Your Result", url: "/how_psych_tests_decide_result", type: "Guide", keywords: "psychology hidden truth manasa vacha karmana assessment evaluation" },
    { title: "Psychological Test Detailed Analysis", url: "/ssb_psychological_test_detailed_analysis", type: "Guide", keywords: "psych test deep analysis tat wat srt good bad examples" },
    { title: "PPDT Complete Guide", url: "/ppdt_complete_guide", type: "Guide", keywords: "ppdt screening narration gd group discussion fish market action" },
    { title: "WAT Complete Guide", url: "/wat_complete_guide", type: "Guide", keywords: "wat word association test negative words rules 15 seconds examples" },
    { title: "SRT Complete Guide", url: "/srt_complete_guide", type: "Guide", keywords: "srt situation reaction test time management practical reactions examples" },
    { title: "SDT Complete Guide", url: "/self_description_test_guide", type: "Guide", keywords: "sdt self description test psychology weaknesses strengths parents friends" },
    // Military Lifestyle
    { title: "Salary of Armed Forces Officer", url: "/salary_of_armed_forces_officer", type: "Guide", keywords: "salary pay scale allowances perks money nda cds ima msp" },
    { title: "Strict Social Media Rules", url: "/social_media_rules_armed_forces", type: "Guide", keywords: "social media instagram whatsapp ban rules opsec smartphone mobile" }
];
