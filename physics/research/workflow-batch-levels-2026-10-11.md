# Pre-construction dependency levels

Batch dependency order was already enforced by the controller’s prerequisite DAG, successful supplier coverage, authored carriers/readiness and writer-drain checks. Numeric batch levels were not recorded before construction. Planning and drift materialization now write a lightweight derived batch-level artifact; Step 1 refreshes it before dispatch and after writers drain, and the native joins check it. The graph uses current page requirements and manifest/carrier logical dependencies. External suppliers stay context; cycles stop dispatch.

Step 1 briefs now explicitly require determining the planned item graph and labels before writing item/page carriers, followed by supplier-before-consumer authoring. These item labels remain checked by the existing mechanical validator. No agent stage or workflow renumbering was introduced.

The math checkout receives the same performance and pre-construction-level changes on its separate branch. Owner requested no further tests during integration; earlier completed focused results are recorded in the supervision history, and subsequent behavior is verified by normal live workflow checks and gates. No production content acceptance is claimed.
