# Step 1 notes — `phase-2-remaining-27`, Batch 4

## Scope and outcome

Role `beta` owns exactly the two dispatched A/B pairs. The completed scaffold contains 91 items in prerequisite order:

- `banach-algebras-spectrum-and-holomorphic-functional-calculus`: 31 A items; its examples page: 9 B items.
- `gelfand-theory-and-commutative-c-star-algebras`: 37 A items; its examples page: 14 B items.

All 91 owned items have current `ready` scaffold decisions. Three are explicitly deferred, non-load-bearing orientation remarks: `rem-nagata-cp-theorem-remains-topological`, `rem-gerlits-nagy-remains-selection-principle-theory`, and `rem-linear-dugundji-extension-remains-topological`. A ready Step-1 receipt for these remarks certifies only that each deferral is stated completely, sourced honestly, has no dependencies, and is isolated from proof paths; it does not certify the recorded external theorem as proved. Decisions were refreshed in manifest order with the exact examined dependency arrays after the mathematical repair. This is Step 1 readiness only; owner/operator reconciliation and Step 3 mathematical review remain independent gates.

## Controlling design and plan conflicts

The run-specific owner direction was read before construction and is binding. It makes `research/plan-functional-analysis-track.md` §§14.4–14.5 the controlling design for both pairs. In particular, the amendment requires the stable helper IDs `lem-submultiplicative-root-limit` and `lem-admissible-cycle-around-a-compact-plane-set`, the complexification/canonical-independence route and Banach-valued contour integral for FA-17, and the exact historical 37-item A inventory (including the closed-ideal quotient, `C(K)` evaluation characters, GKZ growth lemma, exact dual-ball extreme-point lemma, zero-set filter machinery, and Boolean-ultrafilter extension) for FA-18.

All dispatched design locations were read in their complete surrounding sections. The Fourier-analysis and representation-theory plans mention these pages only as prerequisites for later consumers and do not provide competing item inventories or proof routes. The functional-analysis amendment controls because the owner direction expressly selects it and because it supplies the complete mathematical contract.

The current `research/plan-spec.json` controls placement and page requirements. Conflicts with older design text were resolved as follows:

- The older FA-17 section gives broad shorthand prerequisites through FA-1, FA-2, and FA-12 plus the complex-analysis chain. The current plan requires exactly `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `complex-power-series-and-analytic-functions`, `contour-integration`, `goursat-and-cauchys-theorem-in-a-convex-domain`, `analyticity-liouville-and-morera`, and `the-winding-number-and-the-global-cauchy-theorem`; those are the manifest page requirements. Necessary lower-level facts are explicit item dependencies.
- The older FA-18 section names FA-5, FA-9, FA-13, FA-17, MT-20, Tychonoff, and a future Stone–Weierstrass page. The current plan requires exactly FA-17 and `tychonoff-embedding-and-stone-cech`; the manifest uses those two requirements, while actual lower-level prerequisites are declared item by item. No future supplier is treated as published.
- The older FA-17 presentation places the spectral-radius formula before polynomial spectral mapping, but the selected proof of the radius formula uses polynomial spectral mapping. The manifest therefore puts `thm-polynomial-spectral-mapping` first.
- The plan entries have empty `items` arrays. That is an unauthored-plan state, not permission to thin the binding inventories. The current titles and orders 288.079/288.080 and 288.081/288.082 were preserved exactly.

The two binding helper lemmas and the local canonical-complexification comparison result were added before their consumers under stable unused IDs. The comparison result now states the correct bounded complex-linear equivalence for arbitrary compatible complete norms, reserving isometry for the common rotation-supremum norm. No selected pair was changed and no page split was required.

## Proof and dependency audit

Every declared dependency was checked against its current statement and available proof, or against its current in-run supplier scaffold when not yet published. Hypotheses, direction, conventions, well-definedness, and axiom strength were checked independently of page membership and publication status. Material audit results include:

- Complexification carries an explicit rotation-supremum norm, completeness argument, same-norm operator extension, and bounded canonical-conjugacy proof before real-operator spectrum is used. It does not assert false isometric uniqueness among arbitrary compatible norms. The contour construction first proves Banach-valued Riemann integration and agreement with the repository's Bochner integral. The resolvent convention is consistently `R(z,a)=(z1-a)^{-1}`, with derivative `R'(z,a)=-R(z,a)^2`.
- Spectrum nonemptiness, polynomial mapping, the root-limit lemma, the quantitative dual-norm step in the spectral-radius formula, and the holomorphic calculus are ordered by their actual proof dependencies. The admissible-cycle lemma and compact-spectrum theorem supply the contour needed for the AC-costed calculus; homomorphism and spectral mapping each declare the analytic and topological input actually used. Riesz projections are stated for operators, with zero summands handled without inventing a normalized zero algebra, and the Calkin definition declares operator-space completeness, compact-ideal closedness, and noncompactness of the identity.
- The character definition now builds associative complex-algebra data directly from a complex vector space and associative bilinear multiplication, with no identity assumed and no import of the library's unital R-algebra convention. The C-star definition likewise records the complete possibly nonunital complex Banach-algebra data and defines bounded, not-necessarily-unital star-homomorphisms, with the unital qualifier separate. Approximate-unit properness and locally compact Gelfand duality use exactly that nonunital morphism convention, while compact Gelfand duality retains unital arrows and its exceptional empty-space/zero-algebra convention. Automatic continuity and star preservation are kept choice-free in the unital case by direct spectral/Neumann arguments. Character existence, compactness of the character space, Gelfand–Naimark, and Stone duality expose their full-AC dependencies rather than smuggling maximal-ideal choice into earlier lemmas.
- The `C(K)` character theorem uses a direct codimension-one evaluation kernel and the declared Urysohn supplier, not an undeclared maximal-ideal argument. The dual-ball extreme-point lemma first excludes interior points, then proves both directions of the unimodular-Dirac characterization through Riesz–Markov. Banach–Stone declares the transpose and evaluation-embedding suppliers. GKZ uses an explicit two-variable exponential argument and a bounded entire coefficient function, rather than a named undeclared algebraic identity.
- The zero-set/filter/ultrafilter chain defines each object before use and proves extension, maximality, convergence, and reconstruction separately. The published ultrafilter extension supplier is correctly treated as a full-AC/Zorn result; it is not relabelled as BPI-only.
- The `c_0`, unitization, finite Boolean, matrix, unilateral-shift, multiplication-operator, group-algebra, Calkin/Atkinson, and analytic-calculus examples use direct arguments or explicit adequate suppliers. In particular, essential range is defined inline, sigma-finiteness produces finite-measure approximate eigenvectors, and the `ell^1(Z)` convolution proof declares Tonelli/Fubini regrouping. Quotient representatives and countable sums expose Countable Choice where used. Infinite-dimensional, complex, nonzero, sigma-finite, and unital conventions are stated where needed.

Five cross-batch consumer edges are recorded in `research/phase-2-remaining-27-batch-4.cross-batch-dependencies.json`: the FA-17 page requirement on Batch 3's compact self-adjoint page; `def-calkin-algebra` on Batch 2's norm-closedness and two-sided ideal lemmas for compact operators; and `cor-atkinson-in-calkin-algebra-language` on `thm-atkinson`. The owned rows match the current unified derived ledger exactly.

No defective published result is an actual prerequisite of an owned proof. The global external-reference audit still reports 55 previously known published warnings outside this batch; they are unrelated consumer debt and do not block these new suppliers.

The three deferred orientation remarks record exact draft targets and repair obligations:

- `rem-nagata-cp-theorem-remains-topological` points to draft `rem-nagata-theorem-cp`. Its exact `C_p` reconstruction formulation has not been verified from a complete authoritative proof. Repair: verify the stated form, hypotheses, and topology from the original theorem or a complete modern proof, then recertify the external item.
- `rem-gerlits-nagy-remains-selection-principle-theory` points to draft `rem-gerlits-nagy`. The inspected survey states the result but sends the proof to the original literature, leaving the exact convention/proof chain unresolved. Repair: obtain and inspect the full original proof or an equivalent complete treatment and align the selection-principle conventions.
- `rem-linear-dugundji-extension-remains-topological` points to draft `rem-dugundji-extension-linear`. Dugundji's 1951 paper proves the convex-valued extension theorem and bounded simultaneous scalar extension, but the exact stronger compact-open continuous linear-operator formulation in the draft target was not established by the inspected text. Repair: narrow the target to the proved formulation or supply a complete source/proof of the stronger operator statement.

These remarks are orientation-only: no owned theorem depends on them. Their ready scaffold status certifies the explicit deferral and isolation, not a proof of the external theorem.

## Choice audit

Choice use is explicit in statements, strategies, and dependency arrays. The chosen repository route to spectrum nonemptiness, the spectral-radius formula, and the holomorphic calculus uses full AC through dual separation and the relevant functional-analysis suppliers. The Calkin quotient construction declares Countable Choice for quotient completeness in the repository's convention; finite spectral subdivisions and sequential selections keep Countable Choice and Dependent Choice separate.

Automatic continuity of unital characters, star preservation, the explicit `c_0` transform, the unitization example, and the finite Boolean example retain direct choice-free proofs. Character existence, compactness of the character space, commutative Gelfand–Naimark, and Stone representation declare full AC where used. The `C(K)` evaluation proof declares the Dependent Choice cost inherited from the published Urysohn supplier. Incompatible or weaker-choice branches were not collapsed. No proof consumes a Recorded result to prove its replacement, and no owned proof or prerequisite path sends Foundations to `deferred-set-theory-beyond-choice`.

## Source evidence

Two independent complete treatments were inspected for each A page:

- Banach algebras and holomorphic calculus: Theo Bühler and Dietmar Salamon, *Functional Analysis* (complete 452-page text; Banach-algebra, spectrum, resolvent, and holomorphic-calculus sections), and Vahid Shirbisheh, *Lectures on C-star Algebras* v2 (complete 179-page arXiv text; Chapters 2–3 and the holomorphic functional-calculus development).
- Gelfand and commutative C-star theory: the same two complete books for characters, the Gelfand transform, and commutative Gelfand–Naimark, supplemented by Dana Williams's complete spectral-theorem notes for the C-star representation route, Marcus Tressl's complete Stone-duality notes, Gabriyelyan–Osipov material on `C_p` orientation, and James Dugundji's original extension paper for the precise topological extension result.

The original Bühler–Salamon author URL returned HTTP 403; a complete university-hosted 452-page copy was recovered, fetched, stamped, and inspected, so this is recorded as successful recovery rather than a source drop.

The Gillman–Henriksen–Jerison endpoint is retained as source history with `source_resolution.status: dropped`. The initial URL and all five permitted recovery attempts returned HTTP 403. Search history, timestamps, outcomes, and complete alternative arguments with dependencies for all five affected zero-set results are recorded in the coverage file. The declared Stone–Čech/Urysohn suppliers and direct local zero-set proofs replace its mathematical use; the drop waives only those inaccessible endpoints, not coverage.

All 102 harvested results have an included/inline, deferred-with-destination, or specific out-of-scope disposition. The three external orientation results above remain explicitly deferred and isolated rather than being represented as proved or source-complete.

## Checks run

- Batch coverage checklist: 2 A pages, 102 harvested results, 0 errors and 0 warnings.
- Source fetch verification: 9/10 sources fetch-stamped; 10/10 source decisions resolved, including one documented drop.
- URL sweep: 7/7 current URLs live, 0 failures; eight citation decisions and one documented historical drop.
- Source backing: 45 authored proof-bearing results, all backed by an openable source or a documented complete alternative.
- Whole-run manifest dependencies: 781 items, 0 normalized and 0 errors.
- Whole-run manifest content policy: 781 scoped items, 0 errors and 0 warnings.
- Plan validation: exit 0; declared page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs. It notes 481 unrelated planned pages still have empty item lists.
- Manifest integrity: 54 pages owed and 54 represented, with no scope drift.
- Forward-reference check: exit 0; all forward references are declared, strictly forward, closed, and acyclic.
- External-reference check: exit 0; its 55 warnings are pre-existing published Recorded dependencies outside this batch.
- No splice or workflow-engine command was run during this repair; no content files or engine state were touched.
- Owned readiness: 91/91 current decisions are ready, with 0 stale, missing, or escalated Batch 4 records. After the broad repair, the narrow unitality/morphism correction refreshed its 30 changed or transitively affected records in manifest order; the other 61 Batch 4 records remained current.
- The whole-run readiness command currently reports 781/781 item decisions ready and exits 1 only for ten empty pages outside Batch 4; filtering the same canonical check to Batch 4 gives 91/91 closed.
- Cross-batch ledger comparison: 5 owned rows and 5 Batch-4 rows in the unified derived ledger, with exact kind/consumer/supplier agreement.

No workflow-engine state was inspected or edited during the repair pass.
