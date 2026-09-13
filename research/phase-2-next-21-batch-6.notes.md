# Batch 6 Step 1 scaffold notes — phase-2-next-21

Role: beta  
Owned batch: 6  
Owned pages: `spectra-and-stable-homotopy-groups`, its examples page, `obstruction-theory-postnikov-towers-and-classifying-spaces`, and its examples page.

## Result

The owned manifest now contains 50 items in prerequisite order: 16+4 for spectra and 23+7 for obstruction/Postnikov/classifying spaces. Two local prerequisites were added before their consumers:

- `def-homotopy-group-local-system-along-a-cellular-map`, before the cellular obstruction cochain;
- `def-milnor-infinite-join-model-of-eg`, before the theorem about the join model.

Initial construction decisions were recorded in order with `tools/step1-decisions.mjs`: 33 `ready` and 17 `escalated`. Eight ready hashes were re-recorded after correcting the Milnor numeration strategy to match the inspected source; unchanged ready records and every escalation were preserved. An escalation was never overwritten when Batch 5 became populated later in this dispatch; owner/operator reconciliation remains required.

No published content, shared plan, engine state, or verdict was edited.

## Controlling design and current-plan conflicts

For spectra, the full AT-21 A section beginning at `research/plan-algebraic-topology-track.md:1717` controls the A inventory and proof route; the B section beginning at line 1777 controls the four examples. The later binding amendment §13.3(11) controls conflicts because it explicitly labels the AT-21/DT seam as binding. The current `research/plan-spec.json` agrees with the old design on all four direct prerequisites: higher homotopy/cofibers, Hurewicz–Whitehead–Freudenthal/CW approximation, subspaces/products/quotients, and limits/colimits. No spectra prerequisite conflict was found.

For obstruction theory, the full AT-13 A section beginning at line 1872 controls the A inventory and proof route; the B section beginning at line 1908 controls the examples. The later binding amendment §13.3(5), the final prerequisite table at line 2759, and the current plan control because they expressly amend the earlier prose. Conflict recorded: the old AT-13 prose lists only `hurewicz-whitehead-freudenthal-and-cw-approximation` and `bocksteins-steenrod-squares-and-cohomology-operations`; the current plan adds five direct prerequisites—`singular-cohomology-and-coefficient-theorems`, `higher-homotopy-groups-and-cofiber-sequences`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `local-coefficients-twisted-homology-and-duality`, and `applications-of-the-fundamental-group`. The current seven-page list is preserved.

The binding amendment also controls these mathematical corrections: arbitrary groups occur only in `K(G,1)`; `K(A,n)` uses abelian `A` for `n>=2`; nontrivial fundamental-group action uses the AT-23 local system; and `G -> Omega BG` is stated first as a based weak equivalence, upgraded by Whitehead only under AC and CW-type hypotheses.

## Proof-dependency audit

Published statements and proofs examined for the exact clauses used include:

- `def-compactly-generated-conventions-for-based-homotopy`, `lem-compact-test-exponential-law-and-products-of-quotients`, `def-higher-homotopy-group-by-based-cubes`, `prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant`, `def-relative-homotopy-group`, `def-cofibration-and-homotopy-extension-property`, and `prop-loop-suspension-adjunction-on-based-homotopy-classes`;
- `thm-freudenthal-suspension-theorem`, including its exact isomorphism/surjection range and based two-cone convention;
- `def-limit-and-colimit-of-a-diagram` and `thm-set-has-all-small-colimits`, including the explicit quotient model used for cofinal-tail independence;
- `def-fiber-transport-and-monodromy-action`, `def-hurewicz-and-serre-fibrations`, `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration`, `thm-numerable-fiber-bundles-are-hurewicz-fibrations`, and `def-principal-g-bundle-and-associated-fiber-bundle`;
- `def-singular-cohomology-with-coefficients`, `def-relative-singular-cochain-complex`, `thm-whitehead-theorem`, `def-axiom-of-choice`, and `thm-based-sphere-maps-are-classified-by-geometric-degree`.

The stable-group construction uses only degrees where the published cubical groups exist, then proves finite-tail independence explicitly. The suspension of a sequential prespectrum is the right-shifted object `(sE)_0=*`, `(sE)_{n+1}=E_n`; the manifest deliberately does not claim that levelwise suspension gives a homotopy-group isomorphism for an arbitrary prespectrum. Ring products print the two structure compatibilities and account for the sphere-coordinate permutation producing the Koszul sign.

For obstruction theory, the coefficient stalk, transport direction, cell orientation, group-ring incidence, prism orientation, both directions of the extension criterion, and the section/lift pullback were checked. AC is explicit in arbitrary simultaneous cell modifications, arbitrary CW killing constructions, Whitehead's arbitrary-CW clause, and the chosen principal-bundle classification route. The finite-cell clauses use only finite choice. No dependent-choice or partition-of-unity theorem is consumed: the classification theorem is restricted to numerable bundles, while the paracompact-to-numerable implication is expressly left to a separate supplier.

Batch 5 became populated after the readiness records were written. Its current `def-stable-natural-cohomology-operation`, `def-local-system-of-r-modules-and-its-pullback`, `def-singular-and-cellular-chain-complexes-with-local-coefficients`, `def-homology-and-cohomology-with-local-coefficients`, `thm-cellular-chains-compute-homology-with-local-coefficients`, and newly added `thm-cellular-cochains-compute-cohomology-with-local-coefficients` were then read. Their exact item edges are now marked `verified` in the batch dependency input, with explicit notice that these suppliers are scaffolded and not published. The two cross-batch page edges remain `open`.

## Sources and full-text evidence

Every active URL was fetched by `source-fetch-check --stamp` and the relevant arguments were inspected from the complete PDFs, not previews:

- May, *A Concise Course in Algebraic Topology*: Chapter 22 §2 and Chapter 25 §§3,6–7; 1,715,976 bytes, 251 pages, SHA-256 prefix `6724f02748ed1f2f`.
- Hatcher, *Spectral Sequences in Algebraic Topology*, Chapter 2 §2.1; 211,604 bytes, 26 pages, prefix `773185bc627639d7`.
- Davis–Kirk, *Lecture Notes in Algebraic Topology*, Chapter 7 and §8.6; 1,794,704 bytes, 382 pages, prefix `0441b5c1059cac27`.
- Miller, MIT 18.906 notes, Lectures 12–15 and 17–21; 1,467,813 bytes, 162 pages, prefix `6fb68a6d53af20b4`.
- Husemöller et al., *Basic Bundle Theory and K-Cohomology Invariants*, Chapter 4 §§9–12 (numerability, Milnor construction, and classification); 8,849,909 bytes, 376 pages, prefix `46440b2ae7843cfb`.

The coverage file gives exact locators and a disposition for every harvested topic. Brown representability, the stable homotopy category, Adams calculations, and cobordism/Thom computations are not smuggled into this batch.

## Initial findings and current owner disposition

All 50 current Batch-6 Step-1 item records are `ready`; the initial
escalations below were resolved by owner reconciliation before Step 3. They
still require complete authored proofs and Step-3 decisions.

1. `cex-an-unstable-homotopy-class-need-not-yet-be-stable`: the initial
   `2\eta` witness required unavailable unstable homotopy calculations. The
   current manifest instead uses the nonzero commutator in
   $\pi_1(S^1\vee S^1)$, which maps to zero in the abelian group
   $\pi_2(\Sigma(S^1\vee S^1))$. The owner recorded `ready` at
   2026-09-12T20:58Z after checking the published free-group and suspension
   suppliers.

2. `cex-cellwise-vanishing-obstructions-with-incompatible-choices-need-not-give-a-global-extension`:
   the false fixed-skeleton reading was removed. The current two-cell example
   attaches along $ab$ and $ab^2$; fixing degree one on $b$ requires the
   incompatible choices $k=-1$ and $k=-2$ on $a$. For one fixed map on the
   whole 1-skeleton, cellwise zero still glues. The owner recorded `ready` at
   2026-09-12T20:54Z for this exact corrected claim and five dependencies.

3. `cex-principal-bundle-classification-can-fail-without-numerability`:
   the current manifest specifies the frame bundle of the smooth long line's
   tangent line bundle. A numerable trivialization would yield a continuous
   positive tangent metric and metrize the nonmetrizable long line. The owner
   read Nyikos's complete paper, checked the numerability argument, and
   recorded `ready` at 2026-09-12T22:02Z after recertifying the Milnor
   supplier. The base is explicitly outside the library's second-countable
   manifold convention.

4. Batch 5 added `thm-cellular-cochains-compute-cohomology-with-local-coefficients`
   after its cellular-chain comparison and before AT-13. Its current Step-1
   record is `ready`; Batch 6 still waits for its Step-3 authored file before
   using it as a proved supplier. The comparison must cover relative pairs,
   naturality, and constant systems from Davis–Kirk Chapter 5 §§2–3 and
   Hatcher §3.H.

5. The stable ID `ex-k-z-one-as-the-infinite-complex-projective-space` remains,
   while its current title and claim correctly identify
   $\mathbb{CP}^{\infty}$ as $K(\mathbb Z,2)$. Its Step-1 record is `ready`.

No Foundations item reaches `deferred-set-theory-beyond-choice`; only the published AC definition is used. No incompatible axiom branch was consumed.

## Cross-batch input

`research/phase-2-next-21-batch-6.cross-batch-dependencies.json` contains both declared page edges and all actual item edges into Batch 5. The unified ledger was refreshed after creation and after the late Batch 5 inspection. Planned suppliers are never described as published.

## Validation results

- Coverage gate with deferred-destination checking: exit 0; 2 A pages, 43 harvested results, 0 errors, 0 warnings. An obsolete deferred destination slug found by the first run was corrected to the current planned page `leray-hirsch-thom-isomorphism-and-gysin-sequences` before this final result.
- Full-text source gate: exit 0; 5/5 sources fetch-verified and 5/5 resolved, with 0 documented drops. The earlier `--stamp` run also succeeded for all five sources and wrote the byte/page/hash evidence recorded above.
- Batch manifest dependencies: exit 0; 50 items, 0 normalized, 0 errors.
- Whole-run manifest dependencies: exit 0; 745 items, 0 normalized, 0 errors.
- Isolated batch manifest-only content policy: exit 1 with exactly six cross-batch supplier IDs reported absent from disk (`def-local-system-of-r-modules-and-its-pullback`, `def-singular-and-cellular-chain-complexes-with-local-coefficients`, `thm-cellular-chains-compute-homology-with-local-coefficients`, `thm-cellular-cochains-compute-cohomology-with-local-coefficients`, `def-stable-natural-cohomology-operation`, and `def-homology-and-cohomology-with-local-coefficients`). This checker sees only the one supplied manifest and published disk items; every edge is present in Batch 5 and recorded in the cross-batch ledger.
- Whole-run manifest-only content policy: exit 0; 745 scoped items, 0 errors, 0 warnings. Thus all six owned cross-batch references resolve when the mandated whole-run scope is supplied.
- Current-plan validation: exit 0; declared page order acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs among pages carrying item lists. It notes 563 planned pages without item lists, a whole-plan incompleteness rather than an owned-batch failure.
- Scope integrity: exit 0; 42 pages owed, 42 present, no scope drift.
- External-reference audit: exit 0; 17,725 published items examined, 164 recorded-not-proved, 55 consumers resting on them. The tool reports 55 existing repository warnings and concludes that every recorded-not-proved statement is a cited unproved remark and every consequence is marked; none of the warnings names an owned Batch 6 item.
- Readiness consistency: 50 owned items, 33 current ready records, 17 preserved escalations, and no stale or missing ready record.
- JSON parse check passed for the manifest, coverage, dependency input, and run readiness records. The unified `research/phase-2-next-21-cross-batch-dependencies.json` was regenerated only through the authorized refresh command and contains the verified Batch 6 -> Batch 5 cochain-comparison edge.
