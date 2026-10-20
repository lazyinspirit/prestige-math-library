# Independent initial reporting-context review

Read CLAUDE.md, README.md and the relevant WORKFLOW.md controls before inspection. This review uses live state and native artifacts, not retired resume handoffs. No live controls, gates, mathematical sources, reports, packs or session data were changed.

The original `impact-initial-1` unit 2 native report has 71 assigned items, 71 reviews, seven repaired dispositions, no creations or decisions, and one explicit pending consumer: `ex-empirical-risk-sgd-oracle-is-unbiased`. Its ordinary downstream list additionally names `ex-sgd-biased-direction-violates-alignment`. The explicit pending subject is outside its assignment, so the complete recovery work floor is 72 unique subjects. The successful original Sol 6.1/high result records session `01a15925-1a56-7cc0-944b-251872af1880` and `session_home: null`.

The origin is concrete: `readerConcernSession` returns no persistent home for initial lanes without typed reader ownership. `dispatch.mjs` creates an isolated temporary home in that case, extracts the actual session ID, removes the temporary home, and records a null persistent home. The initial pending-consumer route nevertheless requires the actual original result to name the persistent initial-reader home. A bare lane number or known historical session ID cannot meet this requirement.

The candidate must therefore authenticate a real paused, drained 5.2 boundary after all three successful original handoffs are collected; preserve those bytes and the complete current manifest/source vector; explicitly declare lost context; and require a genuinely new persistent native owner to review the entire 72-subject floor in dependency order. The old reviews remain historical and supply no fresh recovery coverage. No ordinary default should be broadened. Genuine typed reader ownership, full scope, subsequent interface propagation, native currency, certification, judgments, budgets and gate obligations remain mandatory.

At inspection, state was unpaused 5.2. Units 1 and 2 had completed; unit 3 was still live and the owner-gate request still named 5.1. These observations do not constitute an admission boundary. The recovery recorder must reject such state.

Baseline verification: `node --test tools/step5-reporting-owner-recovery.test.mjs` passed 40/40 tests. Candidate-specific frozen-byte review and independent adversarial results will be recorded separately.

Operational detail: a default pending-session failure occurs before progress/next-pack writes; collection may already have been produced. Do not describe an unpersisted in-memory progress object as a recorded native transition.
