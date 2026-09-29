# Batch 6 refuter supplemental review

The initial batch 6 refuter artifact omitted `lem-etale-stable-base-change-composition` from both coverage lists. An independent supplemental reviewer opened that item (SHA-256 `3233c78c2efe33ce04d2ea554e038bb72679f8fcf3d25c049f649c49cbff0baa`) and its direct dependencies: `def-etale-morphism-schemes`, `def-smooth-morphism-schemes`, `thm-smooth-morphisms-stable-base-change-composition`, `def-relative-dimension-smooth-morphism`, `lem-fibre-after-base-change`, `def-base-change-morphism-schemes`, `def-geometric-fibre`, and `def-axiom-of-choice`. The reviewer also checked Stacks Project sections 29.36–29.37, including tags 02G3 and 02GH.

The reviewer found a nonfatal `unlicensed-inference` in Facts & Assumptions [F2] and Proof 1.1, 2.2, and 3.1. The cited smooth stability fact is stated globally, while these proof passages use pointwise smoothness hypotheses. Relative-dimension additivity at points does not itself establish smoothness of the base change or composite, which étaleness requires. The pointwise claims are true, but the proof needs a pointwise smooth stability fact or local standard smooth chart argument. The global clauses and boundary cases showed no further defects.

This finding is recorded in `frontier-36-complete-refute-6.json` for the Step 5a adjudicator. No mathematical item was edited during this supplemental review.
