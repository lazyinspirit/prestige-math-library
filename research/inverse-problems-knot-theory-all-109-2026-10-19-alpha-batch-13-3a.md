# Batch 13 Step 3a adjudication

Run: inverse-problems-knot-theory-all-109-2026-10-19. Group: batch-13. Scope: batch 13 only.

## Completed theorem risk review

Independently reviewed thm-ip-flexicast-link-loss-identifiability and all three cited supplier Definitions, its contract, reader report/findings and refuter report. The six-step local proof is sound on the strict interior. Positive probe counts expose one-probe marginals. Leaf marginals and same-design split-pair joint success probabilities recover every root-path product, then every edge by a positive ratio. An uncovered leaf has an invisible terminal edge. At an unsplit nonroot vertex, choose t different from 1 in (max child-edge probability, reciprocal incoming-edge probability). Rescale the incoming edge by t and all outgoing edges by 1/t. Every design uses at most one of these child branches, so its combined incoming/child Bernoulli factor has unchanged law and remains independent of all other factors, including shared ancestors of outside receivers. This proves necessity for complete joint laws, rather than just marginals.

Checked the one-edge case, arbitrary finite root outdegree, strict-interior denominators and perturbations, all positive probe counts, both iff directions, and absence of arbitrary choice. Nonroot unary nodes and empty receiver sets are excluded by the actual Definition. No theorem diagram occurs or is needed. Risk review updated in the owning contract, retaining the prior review as history. No carrier repair is required.

Source comparison: [Xi, Michailidis and Nair](https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf), §3.2 Proposition 1 and full Appendix A.1, PDF pages 5 and 16–17 (printed 1434, 1445–1446), states the coverage/splitting criterion under positive link probabilities and positive probe counts. Its path-product recovery and inseparability arguments were read, not inherited as acceptance. The local proof supplies its own strict-interior perturbation and arbitrary-root treatment. [Lawrence, Michailidis and Nair](https://arxiv.org/pdf/0708.1079), §3.1, PDF pages 5–6 (printed 28–29), independently reports the same criterion in the homogeneous independent-link model. Reading was limited to these relevant sections and nearby model declarations; no whole-paper verification is claimed.

## Routed published findings

All nine are confirmed nonfatal presentation defects. Mathematical definitions and actual consuming uses were independently checked. The closed nonfatal-recorded ledger dispositions close these bounded review alerts only; published corrections remain pending owner maintenance. No repair confidence is asserted because no source repair was performed.

### reader:13:1 — def-statistical-experiment

Verdict: confirmed_nonfatal. Closed bounded row: `ipkt109-b13-3a-published-format-1`. Consumer: `def-ip-tree-probing-experiment`.

The measurable sample space and parameter-indexed probability laws define a valid experiment; the displayed pushforward formula retains its measurable-random-element condition. Citation-only parenthetical and supplier-title sentence fragments are still present. The finite tree law partitions its state space and needs no additional parameter measurability.

Location: ## Definition, the opening paragraph describing an experiment and the pushforward law of an observed random element. Current raw SHA256: `f6b5b03066e62fa8f71280657abad15e52a7e6a1e23a92df36271dc8ed0d7e56`. Current canonical guard matches the routed pre_sha256 `9bb566ed5b4c2cbee8150b52aa816d6e01a9c1457f2f648bbddaa765c671ea1c`; no full historical raw-byte equality is claimed.

Published status: A-P, owner maintenance pending. Strategy: Remove citation-only parenthetical and replace supplier-title sentence fragments by grammatical mathematical prose; retain the pushforward formula and all supplier references.

### reader:13:2 — def-identifiability-of-an-estimand

Verdict: confirmed_nonfatal. Closed bounded row: `ipkt109-b13-3a-published-format-2`. Consumer: `thm-ip-flexicast-link-loss-identifiability`.

The identity estimand is identifiable exactly when the parameter-to-law map is injective, including the empty parameter-set case. Three inline wikilinks interrupt the complete Definition and no Definition references section follows. The theorem uses only this correct injectivity equivalence.

Location: ## Definition, the final clause beginning “or equivalently when ψ is constant on each set of parameter values with the same sampling law”. Current raw SHA256: `2eaabf0d5035dc301f4c4aec46c555e97dfb36a5f96a13702772f4e4c14ecd4b`. Current canonical guard matches the routed pre_sha256 `5726c4c8ee6f76d463c3b975ffc643e940f6d6dbf4d4de79dba003ce274f0500`; no full historical raw-byte equality is claimed.

Published status: A-P, owner maintenance pending. Strategy: Move the three wikilinks into an immediately following Definition references section, one per line and paragraph; preserve the complete injectivity definition.

### reader:13:3 — def-parametric-statistical-model

Verdict: confirmed_nonfatal. Closed bounded row: `ipkt109-b13-3a-published-format-3`. Consumer: `thm-ip-flexicast-link-loss-identifiability`.

The model is a parameter map into probability measures on one measurable space; neither injectivity nor parameter measurability is imposed. The final Statistical experiments parenthetical is citation-only. Removing it would preserve the precise interface used through identifiability.

Location: ## Definition, final sentence: the parenthetical “(Statistical experiments)” after “parameter set and sample space”. Current raw SHA256: `8237ae00475bd1a0175bf82fdcd1d9ae2cecb258f92e0e100517536551e2efb5`. Current canonical guard matches the routed pre_sha256 `928a345f0fe7b0d211df9e4f844c3d7ca0b26cbf11db97effbd631f402ae5d96`; no full historical raw-byte equality is claimed.

Published status: A-P, owner maintenance pending. Strategy: Remove the citation-only Statistical experiments parenthetical, retaining its reference and all measurability caveats.

### reader:13:4 — def-observational-equivalence

Verdict: confirmed_nonfatal. Closed bounded row: `ipkt109-b13-3a-published-format-4`. Consumer: `thm-ip-flexicast-link-loss-identifiability`.

Equality of laws is equality on every measurable event; equivalent parameters need not be distinct. The inline model link remains inside the Definition, without a following references section. The theorem correctly uses equality of full repeated laws.

Location: ## Definition, final parenthetical following the equality-of-measures clause. Current raw SHA256: `8a4aa48bfe2ec36ac1609c0acda59dc9640375843948cb6a600ee81d20ecbf22`. Current canonical guard matches the routed pre_sha256 `b585d6a566fcb7810f3c3989738396c52b1bf32cf23e230b4a329a4cef2fe799`; no full historical raw-byte equality is claimed.

Published status: A-P, owner maintenance pending. Strategy: Move the model link to an immediately following Definition references section; preserve equality-of-measures quantification.

### reader:13:5 — def-estimand-on-a-statistical-model

Verdict: confirmed_nonfatal. Closed bounded row: `ipkt109-b13-3a-published-format-5`. Consumer: `thm-ip-flexicast-link-loss-identifiability`.

An estimand is an arbitrary specified function into a target set, with no extra measurable structure. Its inline model link remains in the complete Definition without a following references section. The identity target used in the theorem satisfies this definition.

Location: ## Definition, final parenthetical after “where T₀ is a set of target values”. Current raw SHA256: `d457c262af2717baebf9edeb1ff249f1485d070ec665bb98882521e7f7ca5759`. Current canonical guard matches the routed pre_sha256 `f9e0cb861f0fd45732b0cb74b925c8532380764ee55f4610350acecf03b351be`; no full historical raw-byte equality is claimed.

Published status: A-P, owner maintenance pending. Strategy: Move the model link to an immediately following Definition references section; preserve arbitrary target-set and measurability caveats.

### reader:13:6 — def-axiom-of-choice

Verdict: confirmed_nonfatal. Closed bounded row: `ipkt109-b13-3a-published-format-6`. Consumer: `ex-ip-independent-normal-delays-have-nonidentifiable-link-means`.

AC is explicitly assumed by the Gaussian example through its normal-law convention. The family-of-nonempty-sets formulation and product formulation include empty index families and are sound. The quoted Choice function parenthetical is citation-only and remains inside the axiom statement.

Location: ## Definition, the quoted formulation “Every family of nonempty sets has a choice function (Choice function).” Current raw SHA256: `b7ccec7b07d943518c5e392e0b3a3edd1952140776269b25dc3fd73f78475861`. Current canonical guard matches the routed pre_sha256 `c921a1f153115a7caa518137653b2b9aed18ea7cd31b51e78defe40b652cec22`; no full historical raw-byte equality is claimed.

Published status: A-P, owner maintenance pending. Strategy: Remove the citation-only Choice function parenthetical; preserve both axiom formulations and the existing supplier reference.

### reader:13:7 — def-choice-function

Verdict: confirmed_nonfatal. Closed bounded row: `ipkt109-b13-3a-published-format-7`. Consumer: `ex-ip-independent-normal-delays-have-nonidentifiable-link-means`.

The function selects an element of every member of a nonempty-member family; the empty family admits the empty function. Choice on X is choice for its nonempty subsets, including X empty. Inline function, power-set and set-difference links interrupt the Definition. This is presentation debt, not a failure of the AC interface.

Location: ## Definition, the two clauses defining a choice function for a family and a choice function on X. Current raw SHA256: `0044882bbc3fedd7c5cd56857ffbdf038ad7ec3faa0a78d05312b253e1e91d91`. Current canonical guard matches the routed pre_sha256 `35c2cf7444054e685ababa758ea1d04957d5b11ff22a29aa8d98ee6112cbd559`; no full historical raw-byte equality is claimed.

Published status: A-P, owner maintenance pending. Strategy: Move all three inline links to an immediately following Definition references section; preserve both choice-function conventions and empty-family behavior.

### reader:13:8 — def-standard-normal-and-normal-laws

Verdict: confirmed_nonfatal. Closed bounded row: `ipkt109-b13-3a-published-format-8`. Consumer: `ex-ip-independent-normal-delays-have-nonidentifiable-link-means`.

The normal law is the affine pushforward of the normalized Gaussian measure, assumes AC, and gives the Dirac mass when sigma=0. Supplier titles remain ungrammatical sentence fragments. The example needs only variance-one translates: the common independent-standard-normal coupling cancels (1,-1,-1) in both path sums, proving equality of the entire joint law.

Location: ## Definition, the sentence defining γ as a probability measure and the closing sentence identifying N(m,0). Current raw SHA256: `750719805555deda5df234ffe8348a73b4be4fb760ed32acc8b5aa4a0cb416a0`. Current canonical guard matches the routed pre_sha256 `d72bc6c9d9811eb3316699dd25866ed1d487b7ce79c1845737bffc0fa11257f4`; no full historical raw-byte equality is claimed.

Published status: A-P, owner maintenance pending. Strategy: Replace title fragments with mathematical prose; retain AC, Gaussian normalization, affine pushforward and sigma=0 clauses and all existing supplier links.

### reader:13:9 — alg-expectation-maximization

Verdict: confirmed_nonfatal. Closed bounded row: `ipkt109-b13-3a-published-format-9`. Consumer: `alg-ip-link-loss-em`.

The supplied EM algorithm specifies candidate selection, fiber admissibility, finite Q/KL conditions and stopped or infinite output; it claims no convergence. The Likelihood densities parenthetical remains citation-only. The local finite-sum algorithm explicitly avoids its generic KL/AC branch, checks positive observed-pattern probabilities and positive link probe counts, and computes expected successes divided by probe count.

Location: ## Definition, the sentence ending “not inferred from separate likelihood-density versions (Likelihood densities)”. Current raw SHA256: `f7b199150e1ea8ce1ce23a35ce21378d1e59c785acc0562139fd42b302511192`. Current canonical guard matches the routed pre_sha256 `c363894d2d33dfdd966d6f90a8b223a4ab0576b1a389105f259cd0b3195296a0`; no full historical raw-byte equality is claimed.

Published status: A-P, owner maintenance pending. Strategy: Remove the citation-only Likelihood densities parenthetical; preserve the explicit joint-measurability clarification and supplier reference.

## Consumer, diagram and scope review

The finite experiment Definition supplies normalized finite Bernoulli laws. The split/coverage Definition exactly supplies the hypothesis used by the theorem. The finite EM procedure gives its inputs, outputs, rejection branches, boundary extension and iteration cap; positive pattern probabilities define every conditional sum and each expected-success ratio is in [0,1]. Its generic published supplier's KL branch is expressly unused. The Gaussian example uses only affine normal translations with explicit AC; the unicast example's marginals are 1/4 and 1/8 for both triples, with multicast joint success 1/16 versus 3/32 and positive recovery ratios. Both example diagrams have arrows o->v->r_i, correct X_i or p_i labels, and no crossings or composition convention conflict. Their proofs are independent of diagrams; no addition is needed. The descriptive “lower vertices” wording is harmless relative to the drawing's graph hierarchy.

The nine published Definitions were read in full; this is not a transitive proof audit of all suppliers behind the published definitions. No outside mathematical supplier defect was established. No Statement/Definition was edited, so no changed-interface consumer propagation is triggered. No proposed withdrawal is removed.

The A page retains its declared batch-7 white-noise prerequisite. The current cross-batch record explicitly limits its verified status to declared-interface metadata; its preserved owner review says the six batch-13 items use finite models and no white-noise proof premise. This dispatch supplies no whole batch-7 proof acceptance or page-prerequisite closure. The reader's earlier page-level limitation remains visible for owner/engine coverage; it is not an extra routed finding or a reason to alter a sound finite-model proof.

## Hashes and checks

All six current owned item raw SHA256 values match both frozen pre and post snapshots; the reader made no item/page repair. The only contract change is the HIGH theorem risk review with prior review preserved. No touched/page/refuter/gate decision is owed; exactly reader:13:1 through reader:13:9 are decided. Original scope group e is preserved; decisions group is batch-13.

- Recomputed native status from .autopilot and read git log: live Step 3a, HEAD ace06e03bc. No engine state was changed.
- risk-report on the owning contract before updating the review: exit 0, 6 items, theorem HIGH 7.
- risk-report with --require-reviewed after the update: exit 0, 6 items, zero errors.
- Current canonical guards of all nine published subjects equal their routed pre_sha256; raw hashes above record actual current sources without inventing historical equality.
- No item/page edits or formatter were performed; the required post-edit proof-layout and precheck commands are therefore inapplicable. No judge, stamp, certification or native gate battery was initiated.

Defect-ledger append succeeded: nine schema-valid rows appended and the generated view refreshed. Focused final consistency checks passed: exactly nine owed decisions; each references exactly one current nonfatal-recorded row owned at 3a-adjudicate with matching subject; all six owned item bytes remain equal to frozen pre/post; all nine published IDs occur exactly once in the classification index. Published ledger changes were merged under an exclusively created lock and include exact declared supplier IDs. Remaining outside work is the nine nonfatal published presentation repairs. No substantial mathematical prerequisite escalation was established in this assigned scope.
