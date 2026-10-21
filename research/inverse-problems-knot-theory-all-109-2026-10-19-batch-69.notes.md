# Batch 69 authoring notes — Three-manifold surgery presentations and Kirby moves

Run: inverse-problems-knot-theory-all-109-2026-10-19; batch 69; assigned pair: three-manifold-surgery-presentations-and-kirby-moves / three-manifold-surgery-presentations-and-kirby-moves-examples.

## Controlling plan and live inputs

- Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md, the generated batch task, the dependency-order task, and the owner-authoring direction. The owner direction requires draft status, statement-first prose, compact frontmatter-only pages, and no publication or push.
- The KT-14 section at research/plan-knot-theory-track.md L477–L479 controls item scope and proof route. research/plan-spec.json and the batch-69 scaffold manifest agree with the task on page IDs, titles, category, order 3134/3135, and requires; the plan spec has empty item arrays, so the KT-14 design supplies the three named A claims and two B items. Additional A-page definitions and lemmas below are local prerequisites required to prove those claims, not scope reductions.
- The batch-dependency input hash is a01ad0599f0865ce0072a50b1b0f05caedae7edd714cb6f3f6a0efce40ef1d05: batch 69 is level 2 and requires batches 57 and 68. The item manifest initially had empty inventories.
- Recomputed live status using the native command: the run is at 1-scaffold, 23/109 covered, no workers in flight; a prior owner-repair blocker is present. No run state, plan, or verdict was changed.

## Supplier interfaces examined

- Batch 57 actual carriers read: def-knot-exterior, def-knot-meridian-and-preferred-longitude, lem-knot-exterior-has-peripheral-torus, and thm-knot-exterior-homology-and-longitude. The longitude definition alone asserts neither existence nor uniqueness; the homology theorem proves both under full AC. The new framed-link definition therefore states AC and depends on that theorem.
- Batch 68 actual carriers read: def-oriented-slope-and-knot-dehn-filling, lem-knot-surgery-first-homology-mayer-vietoris, thm-framed-knot-surgery-trace-boundary, and def-lens-space-surgery-orientation-convention, plus ex-knot-kt-13-worked-cases. The slope convention is n[mu]+[lambda]; the slope/filling interface assumes AC-omega, while the longitude existence theorem above assumes full AC. The lens-space convention defines L(p,q)=E_U(p/q) only for p>0. The knot trace is draft; no new claim will cite it as an accepted supplier.
- Published handle interfaces examined: lem-handle-slides-preserve-the-relative-diffeomorphism-type applies to a 2-handle slide in dimension 4 under AC-omega, and thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold identifies a surgery-trace boundary under the same axiom. rem-elementary-moves-do-not-constitute-full-cerf-theory-here explicitly limits its local handle results.
- The actual lem-finite-relative-mixed-handle-movies-give-marked-kirby-moves requires a supplied finite marked movie and does not assert that diffeomorphic two-handlebodies are connected by one. The published relative Morse-path supplier states a function-path result and explicitly supplies no descending-field or surgery-move theorem. These boundaries control the Kirby-classification escalation below.

## Source reading and harvest

- Saveliev, Lectures on the Topology of 3-Manifolds, full PDF https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf: read Lecture 2 §2.2, Theorem 2.1 and Lemma 2.2 (printed pp. 33–34), Lecture 2 §2.4, Theorem 2.4 (pp. 39–40), and Lecture 3 §§3.1–3.2 (pp. 43–46). The Lickorish–Wallace proof uses Heegaard splittings and Dehn twists. The Kirby theorem section defines both moves and proves only invariance, explicitly leaving the converse to Kirby.
- Kirby, “A Calculus for Framed Links in S3,” full scanned PDF https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf: visually inspected the complete relevant text and figures, printed pp. 35–45 (§§1–3), including the 5-dimensional Cerf proof. Its local argument requires the 5-dimensional cobordism step recorded below.
- Calegari, Notes on 3-Manifolds, full PDF https://sschleimer.warwick.ac.uk/Teach/2021_3MFDS/References/2014notes_on_three-manifolds.pdf: read §3.21–3.22 (printed p. 23) for the triangulation/dual-graph Heegaard construction.
- Qiang E, Lei, and Li, “A Proof of Lickorish and Wallace’s Theorem,” full PDF https://arxiv.org/pdf/1306.1376: read all four pages. This is a second, independent Lickorish–Wallace treatment; its genus-reduction route is not used because the controlling design requires the Heegaard/Dehn-twist route. The harvested result is retained as a deferred alternative, not as a proof supplier.
- Retrieval/fetch stamps: `source-fetch-check --stamp` verified all 4/4 sources (0 newly stamped on the final pass; 0 documented drops). No retrieval failure occurred.

## Item-by-item progress

### def-heegaard-splitting-of-closed-oriented-three-manifold

- Claim/convention: defines a genus-$g$ handlebody explicitly as a $3$-ball with $g$ orientation-compatible smooth $1$-handles; then defines a Heegaard splitting as two such handlebodies glued along one common genus-$g$ surface. No undefined regular-neighbourhood shorthand remains in the definition.
- Dependencies: def-oriented-smooth-manifold-and-oriented-chart, def-smooth-embedding; no in-run item suppliers; item level 0.
- Source: Calegari, §3.20–3.21, printed pp. 22–23, full PDF above.
- Decision: complete definition, placed on the A page; final scoped validation passed.

### def-dehn-twist-on-oriented-surface

- Claim/convention: fixes positive orientation by requiring product annular coordinates to agree with the surface orientation, gives the explicit angular-coordinate formula, and defines the mapping class via smooth isotopy through orientation-preserving diffeomorphisms. The annulus, coordinates, and cutoff remain representative data.
- Dependencies: def-oriented-smooth-manifold-and-oriented-chart, def-smooth-embedding; no in-run item suppliers; item level 0.
- Source: Kirby, “A Calculus for Framed Links in S3,” §2, printed pp. 36–37; the complete proof section was visually inspected.
- Decision: complete definition, placed on the A page; final scoped validation passed.

### thm-closed-oriented-smooth-three-manifold-admits-heegaard-splitting

- Claim: every nonempty closed connected oriented smooth 3-manifold has a Heegaard splitting. The proof uses the published finite-triangulation theorem under its stated full-AC branch, then explicitly thickens the primal and dual graphs by vertex balls and edge tubes; the spanning-tree argument counts the handles and identifies the common surface.
- Dependencies: def-axiom-of-choice, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations, def-heegaard-splitting-of-closed-oriented-three-manifold. The only in-run supplier is the definition at level 0, so this item is level 1.
- Source: Calegari, Notes on 3-Manifolds, Proposition 3.22, §3, printed p. 23; full relevant proof read.
- Proof-contract alignment: final step labels follow the dependency-layer repair (1.1, 2.1, 2.2, 3.1, 4.1); the dual-handlebody step cites both the primal thickening and dual graph.
- Decision: complete proof and contract, placed on the A page; final scoped validation passed.

### lem-dehn-twist-of-heegaard-gluing-is-integral-surgery

- Claim/convention: a positive or negative annular twist of the Heegaard gluing is surgery on the pushed-in curve with slope mu plus or minus its annular parallel; the sign follows the chosen twist.
- Dependencies: def-heegaard-splitting-of-closed-oriented-three-manifold, def-dehn-twist-on-oriented-surface, def-p-surgery-on-a-smooth-m-manifold, def-countable-choice. The in-run definition suppliers have level 0, so this item is level 1.
- Source: Saveliev, Lecture 2 §2.2, Lemma 2.2 and proof, printed pp. 33–34; the annulus cut/reglue and meridian change were read in full.
- Decision: complete proof and contract, placed on the A page; final scoped validation passed. The formula is independent of the diagrammatic picture.

### def-integral-framed-link-surgery-diagram

- Claim/convention: a finite oriented link in the fixed oriented S3, with one integer per component measured by the KT-13 slope convention n mu + lambda; the empty link is S3. Preferred longitudes are defined in each component exterior and their uniqueness/existence is supplied by the actual KT-02 theorem.
- Dependencies: def-oriented-link-in-s-three-and-ambient-isotopy, def-knot-exterior, def-knot-meridian-and-preferred-longitude, thm-knot-exterior-homology-and-longitude, def-oriented-slope-and-knot-dehn-filling, def-countable-choice, def-axiom-of-choice. In-run supplier maximum is level 3, so this definition is level 4.
- Sources: Saveliev, Lecture 2 §2.2, printed pp. 32–34; Kirby, §1, printed pp. 35–36; both relevant passages were read.
- Decision: complete definition, placed on the A page; final scoped validation passed.

### thm-lickorish-wallace-framed-link-presentation

- Claim: every nonempty closed connected oriented smooth 3-manifold is an oriented integral surgery on a finite framed link in S3, using the fixed slope n mu + lambda convention.
- Dependencies in the carrier: def-integral-framed-link-surgery-diagram, the local Heegaard definition/existence supplier, the local Dehn-twist definition/surgery supplier, and full AC. The maximum in-run supplier level is 4, so the item label is 5.
- Source route read: Saveliev, Lecture 2 §2.2, Theorem 2.1/Lemma 2.2; the full argument uses a Heegaard splitting and the Dehn–Lickorish generation theorem. The four-page E–Lei–Li paper gives an independent alternate proof, but the controlling plan selects the Heegaard/Dehn-twist route.
- Exact blocker: no local proved supplier for thm-dehn-twists-generate-mapping-class-group-for-closed-oriented-surface is available. The Lickorish–Wallace claim is retained in full with proof provenance not-supplied and is recorded escalated; a citation or the alternate source does not close the planned proof.

### def-kirby-moves-on-integral-framed-links

- Claim/convention: defines ambient isotopy, framed band slide over a framed parallel, and split ±1-unknot stabilization/destabilization on the A page.
- Dependencies: def-integral-framed-link-surgery-diagram (level 4) and the published oriented-link interface; item level 5.
- Sources: Saveliev, Lecture 3 §3.2, printed pp. 45–46; Kirby, §1, printed pp. 35–36. Both move definitions were read from full text.
- Diagram: added an explicitly schematic band-slide illustration; the text supplies all move data.
- Decision: complete definition and diagram, placed on the A page; final scoped validation passed.

### lem-kirby-moves-preserve-surgery-manifold

- Claim: each isotopy, framed handle slide, and split ±1 stabilization preserves the oriented surgery manifold. The slide argument uses the published k=2, n=4 relative handle-slide result and the published surgery-trace boundary theorem; the split unknot calculation is given explicitly by a solid-torus shear.
- Dependencies: def-integral-framed-link-surgery-diagram (level 4), def-kirby-moves-on-integral-framed-links (level 5), KT-13 slope convention, full AC and its locally derived AC-omega interface, plus the published handle-slide and surgery-trace interfaces. Item level 6.
- Sources: Saveliev, Lecture 3 §3.2, printed pp. 46–47, and Kirby, §§1–2, printed pp. 35–37; both forward-move arguments read.
- Proof-contract alignment: final dependency-layer labels are 1.1 (isotopy), 1.2 (slide), 1.3 (stabilization), and 2.1 (finite composition). The countable-choice reference remains visible under Statement references and all proof-fact wikilinks remain in Facts & Assumptions.
- Decision: complete forward-direction proof and contract, placed on the A page; final scoped validation passed. It does not close the converse in thm-kirby-moves-classify-framed-link-presentations.

### thm-kirby-moves-classify-framed-link-presentations

- Claim: two integral surgery diagrams in S3 give orientation-preservingly diffeomorphic manifolds exactly when related by isotopy, framed handle slides, and split ±1 stabilization/destabilization.
- Dependencies: the integral-link and Kirby-move definitions, the complete forward-invariance lemma, and the published surgery-trace/handle/Cerf interfaces inspected above. The maximum in-run supplier level is 6, so this item is level 7.
- Exact unresolved reverse-direction obligation: Kirby §2–3 constructs a 5-dimensional cobordism after an index/signature adjustment, then uses a Cerf handle movie. The local relative-movie supplier requires a supplied marked movie; it does not establish that arbitrary diffeomorphic surgery boundaries yield one. The relative Morse-path supplier is only a function-path result. Proposed missing prerequisites/placement are an oriented 4-dimensional null-bordism result with exact hypotheses and a complete marked 5-dimensional Cerf-to-framed-link-movie argument on this A page. The claim remains whole and escalated; no source excerpt or approval is inferred.

### ex-knot-kt-14-worked-cases

- Claim: empty surgery is S3; zero surgery on the standard unknot is S1 x S2; positive p surgery on the standard unknot is L(p,1) in the KT-13 orientation convention.
- Dependencies: the integral diagram definition, slope convention, lens-space convention, and actual KT-02 peripheral definition/theorem. In-run maximum level 4 gives item level 5.
- Source: Saveliev, Lecture 1 §1.5 and Lecture 2 §§2.2–2.3, printed pp. 24–25, 32–37. Exact p>0 scope follows the current def-lens-space-surgery-orientation-convention; no negative-p lens notation is invented.
- Proof-contract alignment: final dependency-layer labels are 1.1 (choice interface), 1.2 (empty diagram), 1.3 (zero surgery), and 2.1 (positive surgery).
- Decision: complete coordinate verification and contract, placed on the B page; final scoped validation passed.

### cex-knot-kt-14-boundary-case

- Refuted claim: oriented-diffeomorphic surgery results force framed-link ambient isotopy.
- Witness: the empty diagram and a split +1-framed standard unknot; both results are explicitly identified with S3, while their component counts differ. The diagrams are related by the allowed +1 stabilization.
- Dependencies: integral diagram convention, Kirby move definition, actual oriented-link/component-count definition, knot peripheral convention, and full-AC interface; maximum in-run supplier level 5 gives item level 6.
- Sources: Saveliev, Lecture 2 §2.2 and Lecture 3 §3.2; Kirby, §1. Both the meridian/longitude and O1 passages were read.
- Decision: complete counterexample argument and contract, placed on the B page; final scoped validation passed.

## Unresolved proof obligations and proposed placement

- thm-lickorish-wallace-framed-link-presentation: the design’s chosen proof route needs the Dehn–Lickorish generation theorem for the mapping class group of a closed oriented genus-g surface. No local proved supplier currently provides it. The source states the result but the citation cannot replace its proof. Proposed local supplier: thm-dehn-twists-generate-mapping-class-group-for-closed-oriented-surface, on this A page, before the Lickorish–Wallace theorem. Required hypotheses: closed connected oriented surface, orientation-preserving mapping class, finite product of twists about simple closed curves. The Lickorish–Wallace item remains present with its full claim and is escalated until this supplier has a complete proof.
- thm-kirby-moves-classify-framed-link-presentations: the move-invariance direction is proved locally below. The converse requires the marked 5-dimensional Cerf comparison in Kirby’s §2–3 proof, including the 5-dimensional cobordism step after the index/signature adjustment and a complete passage from its handle movie to the framed-link moves. The local published handle-slide and surgery-trace interfaces prove only the forward/local moves; the published finite-movie lemma assumes the movie as input. Proposed A-page suppliers: an oriented 4-dimensional bordism/null-bordism lemma with its exact hypotheses, followed by a marked 5-dimensional Cerf-to-Kirby-movie lemma. These are significant prerequisite theories; the classification theorem remains present with its full claim and is escalated.

No content outside this pair and its batch evidence has been edited. The Lickorish–Wallace proof and Kirby-classification converse remain explicit owner escalations; all other assigned items have complete local statements/arguments and recorded readiness.

## Current inventory

The batch-69 manifest now contains 9 A-page items and the 2 designed B-page items. The extra A items are the explicit Heegaard/twist definitions and suppliers plus the move-equivalence definition and its forward-invariance lemma. The two designed classification theorems remain intact and escalated for their named missing proofs. A/B library pages are authored as frontmatter only.

## Final validation and readiness

- Statement-first inspection: 11/11 assigned items pass; every statement/definition/example description is uninterrupted and references follow in the matching references section. Both A/B page bodies are empty. The run's mechanical page-layout stage is responsible for adding `page_layout: compact-v1`; no engine or page-layout state was edited here.
- `manifest-deps`: 11 items, 0 normalized, 0 errors. `depcheck` focused scope: 0 errors and 0 warnings across the 11 assigned items, 2 selected pages, and their prerequisite closure (2,183 items and 509 pages).
- `item-dependency-levels` scoped projection: all 11 Batch-69 labels equal their recomputed in-run levels (0, 0, 1, 1, 4, 5, 5, 6, 7, 5, 6); no Batch-69 cycles or label errors. The native run-wide command failed on unrelated batches with empty inventories/stale labels; its output contained no Batch-69 error. Other batches were actively changing during this audit, so their aggregate error counts are not treated as stable evidence.
- `proof-layout`: 11 items, 20 numbered steps, 0 defects. `precheck`: all 5 completed proof-bearing items pass. The strict proof-contract checker: 5/5 complete proof contracts, 0 errors, 0 warnings. The two escalated classification statements remain whole and have no invented proof contract.
- `rendercheck`: 13 assigned item/page files pass the renderer's KaTeX and YAML checks. `content-policy`: 11/11 items, 0 errors/warnings. `coverage-checklist`: 13 harvested results, 0 errors/warnings. Final `source-fetch-check --stamp`: all 4/4 sources fetch-verified and resolved, 0 documented drops.
- Readiness records were written without `--owner`: 9 items `ready`, 2 items `escalated`. The native run-wide `step1-decisions check` remains open because of those two owner escalations plus other batches' unfinished records and empty page inventories; it reported no stale Batch-69 ready record.
- Exact unresolved items: `thm-lickorish-wallace-framed-link-presentation` needs a complete local Dehn–Lickorish mapping-class-generation supplier; `thm-kirby-moves-classify-framed-link-presentations` needs the oriented four-dimensional bordism/null-bordism prerequisite and the full marked five-dimensional Cerf-to-Kirby-movie proof. Required hypotheses, supplier placement, and source limits are recorded above.
