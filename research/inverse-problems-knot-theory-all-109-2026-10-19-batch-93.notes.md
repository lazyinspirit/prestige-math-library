# Batch 93 authoring record

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Pair: KT-40, beta batch 93  
Scheduling input: research/inverse-problems-knot-theory-all-109-2026-10-19-batch-dependency-levels.json  
Scheduling input SHA-256: c58a9043b3c100ded18e8f15d6656f101912146b584f3b069458aa00878ec176

## Scope and plan resolution

The controlling design is research/plan-knot-theory-track.md §KT-40, lines 1180–1207. It controls the abbreviated task design because the task explicitly directs us to read the complete section; the current research/plan-spec.json agrees on page IDs, titles, order, category, companion, and required pages, while its empty item arrays are preauthoring placeholders. The design's primary items and local modules are retained. The assigned page pair is order 3182/3183, category knot-theory; A requires smooth-and-topological-knot-concordance, khovanov-homology-and-jones-categorification, and grid-homology-and-combinatorial-knot-floer-theory.

The planning prerequisite map is treated as context, not as authority over logical dependencies. Its cycle/order error placing def-knot-floer-cobordism-map before def-decorated-link-cobordism-and-floer-target is corrected. The map's edge from the Bar-Natan theorem to the combined scope theorem is reversed because the scope theorem cites the Bar-Natan theorem. Several inherited page-context edges (concordance group, slice genus, reduced Kh, grid equivalence) are omitted from item-level dependencies when the item claim does not use them. The smooth/topological concordance page requirement remains at page level even though its group theorem is not needed for either cobordism-map construction.

## Supplier inspection and current limitations

Actual current bodies were inspected for the batch-74 proper-surface/collar and smooth/topological concordance items, the batch-90 Khovanov algebra, cube, chain homotopy, Reidemeister, and homology-invariance items, and the batch-92 pointed Heegaard, grid, and holomorphic disk items. The batch-90 Step 1 decision records now mark the Khovanov core suppliers ready with owner integration evidence; this is not independent approval or publication. The current batch-90 notes saying RII/RIII homotopies are incomplete are stale relative to the current bodies and current decision records. The current body of thm-khovanov-homology-is-an-oriented-link-invariant assumes AC_omega through the oriented Reidemeister theorem; no full Axiom of Choice is introduced here.

The current batch-92 decision records mark lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing and thm-grid-homology-independent-of-grid-and-equals-knot-floer escalated. The disk supplier concerns pointed disks and does not settle the full marked-pointed triangle regularity, compactness, boundary strata, and gluing needed by a cobordism map. The grid-to-HFK theorem is a separate combinatorial identification and is not used as a supplier of the decorated cobordism map. The smooth-and-topological-knot-concordance required page currently does not exist; its proper-surface and concordance draft items are present, while its topological concordance-group theorem has an unresolved local proof. This missing page requirement is recorded for reconciliation.

## Sources read and scope

- Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, full 57-page PDF, https://arxiv.org/pdf/math/0410495v2: §§3–4 and Proposition 7.2, printed pp.1450–1471; §§8.1–8.3 and Theorems 4–5, printed pp.1472–1480. The Frobenius TQFT's S, T, and 4Tu checks were read. The movie-move proof groups MM1–5, MM6–10, and MM11–15; the final five require local calculations, and the source leaves specific checks as exercises. It is not treated as a self-contained proof in our carriers.
- Magnus Jacobsson, An invariant of link cobordisms from Khovanov homology, full 41-page PDF, https://arxiv.org/pdf/math/0206303: §§3.2–3.3 and §§4.2–5, printed pp.1220–1237 and onward through the proof's movie-move calculations. Its theorem states equivalence up to sign only for ambient isotopies fixing the boundary setwise. It quotes Carter–Saito's theorem rather than proving it.
- Louis H. Kauffman, An Introduction to Khovanov Homology, full 39-page notes, https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf: §§4–6, PDF pp.14–25; the state cobordism category, 4Tu relation, and tube-cutting/Frobenius calculations.
- Ian Zemke, Link cobordisms and functoriality in link Floer homology, full 112-page PDF, https://arxiv.org/pdf/1610.05207v3: §§1–3, 5–9, 11–13. The decorated cobordism/coloring conventions, curved-complex definitions, two-variable specialization, elementary handle/band maps, Theorem 11.5 and its Cerf proof (§11.7), Theorem A0 and the full fourteen-move proof (§12.4), puncturing and Lemma 12.9 (§12.5), and the Spin-c composition theorem (§13) were read in full relevant chunks. The source invokes numerous auxiliary results (including quasi-stabilization/band relations and triangle-count computations); those are not all local proof carriers in this pair, so no complete local proof is claimed.
- Andras Juhasz, Cobordisms of sutured manifolds and the functoriality of link Floer homology, full 82-page PDF, https://arxiv.org/pdf/0910.4382v5: §§4, 8, and 11.3, especially Definitions 4.4–4.5, §8.11, and Corollary 11.17. This is a hat-version treatment and is not substituted for Zemke's colored minus target.
- Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, https://web.math.princeton.edu/~petero/GridHomologyBook.pdf: Chapter 16, printed pp.325–338, reused for the pointed Heegaard/disk-count conventions. Existing batch-92 fetch stamp is reusable.
- Existing batch-90 full-text Khovanov source evidence and fetch stamps are reusable for the Khovanov algebra, chain complex, and link invariance supplier.
- Carter–Saito, Reidemeister moves for surface isotopies and their interpretations as moves to movies, official publisher PDF URL https://www.worldscientific.com/doi/pdf/10.1142/S0218216593000167. Publisher web retrieval failed at the direct PDF/EPDF/PDFPLUS URLs during prior attempts. Search alternatives found a thesis that states the result but points to Carter–Saito for its proof, and later papers that cite the classical result without reproving it. The authorized source-fetch checker will be run on the official URL; absent a verified full text, the theorem remains escalated rather than dropped.

## Item checkpoints

### def-barnatan-tangle-cobordism-category — level 0 — authored

Defines crossingless planar circle objects, collared orientable surface cobordisms, composition, additive morphism groups, and exact S/T/4Tu relations. No in-run dependency. Supports the local TQFT-relation calculation and movie-move formalism. Sources: Bar-Natan §§3–4 and Kauffman §5. The relation conventions still need scoped schema/layout checks.

### def-generic-movie-of-an-oriented-knot-cobordism — level 1 — authored

Defines a smooth oriented surface in S3×[0,1], generic slice diagrams, distinct exceptional levels, and the birth/death/saddle/Reidemeister event conventions. In-run dependencies: def-locally-flat-proper-surface-and-concordance-collars (batch 74, actual body inspected) and def-oriented-link-in-s-three-and-ambient-isotopy (published body inspected). The movie-move equivalence theorem is not included in this definition.

### def-decorated-link-cobordism-and-floer-target — level 1 — authored

Defines a decorated knot surface with dividing arcs and fixes the two-color target F2[U,V], disk weights, curvature-zero specialization for one w,z pair, and the Z2 filtration. In-run dependencies: def-admissible-pointed-heegaard-floer-data (batch 92, actual definition body inspected; level 0), def-locally-flat-proper-surface-and-concordance-collars (batch 74, level 0), and the published oriented-link definition. Source locator: Zemke §§1–3, PDF pp.1–14; Juhasz §§4 and 8 as the independent hat comparison. The actual batch-92 target is one-variable data; the two-color convention is explicitly extended here, not attributed to that supplier.

### lem-khovanov-frobenius-tqft-respects-barnatan-relations — level 2 — proof authored

Checks the sphere evaluation εη=0, torus evaluation εmΔη=2, and the four-tube identity on the four local tensor factors. In-run dependencies: the Bar-Natan category definition and batch-90 def-khovanov-frobenius-algebra-and-cube-of-resolutions (current body and ready record inspected). Sources: Bar-Natan Proposition 7.2, printed pp.1470–1471, and Kauffman §5. The full 4Tu equality is expanded in the carrier rather than imported from a source citation.

## Further item checkpoints

### thm-carter-saito-movie-move-equivalence — level 2 — escalated

States the fifteen-move classification for boundary-fixed movies of knot cobordisms in \(S^3\times[0,1]\). In-run dependency: def-generic-movie-of-an-oriented-knot-cobordism. Primary source: Carter–Saito, official URL https://www.worldscientific.com/doi/pdf/10.1142/S0218216593000167, full article pp.251–284. Secondary statements: Jacobsson §4.2, printed p.1235; Hunt §5.2, pp.42–44, which explicitly refers the proof back to Carter–Saito. The official URL returned HTTP 403 on the initial fetch and five retries. Search alternatives did not yield a complete proof. Coverage records six exact attempts, six searches, and source_resolution status owner-escalation; no source is dropped.

### def-khovanov-cobordism-map-up-to-sign — level 8 — authored

Defines the map for a fixed movie by composing the unit, counit, merge, split, planar-isotopy, and Reidemeister maps, and explicitly does not claim movie-independence. In-run dependencies: def-countable-choice, def-generic-movie-of-an-oriented-knot-cobordism, def-khovanov-frobenius-algebra-and-cube-of-resolutions, lem-khovanov-reidemeister-chain-homotopies, and thm-khovanov-homology-is-an-oriented-link-invariant. The current batch-90 link-invariance statement and its AC_omega branch were inspected. Sources: Khovanov §§5 and 7; Jacobsson §§3.2–5; Bar-Natan §§7–8. Definition references and source coverage are present.

### def-decorated-link-cobordism-and-floer-target — level 2 — escalated

Defines a smooth oriented decorated link cobordism in a four-manifold between closed oriented three-manifolds, the dividing arcs and w/z regions, strongly admissible doubly pointed diagrams, the Spin-c summand, and the two-color \(\mathbb F_2[U,V]\) target with \(UV+VU=0\). Direct in-run dependencies: def-admissible-pointed-heegaard-floer-data (batch 92, actual body and ready record inspected), lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing (batch 92, actual body and escalated record inspected), def-locally-flat-proper-surface-and-concordance-collars (batch 74), and def-oriented-link-in-s-three-and-ambient-isotopy (published). External published dependency: def-given-spin-and-spinc-structures-and-associated-spinor-bundles. Zemke §§1–3, PDF pp.1–14, supplies the exact colored conventions; Juhasz Definitions 4.4–4.5 and §8.11 provide an independent hat-version decorated-surface convention. The two-color differential and curvature cancellation are stated, but the marked disk count and \(\partial^2=0\) proof are not supplied locally, so this item is escalated.

### def-knot-floer-cobordism-map — level 3 — escalated

Defines one Spin-c-indexed representative from a parametrized Kirby decomposition, with triangle-count formula for 2-handle/band pieces and the stated handle/basepoint maps for other pieces. Direct in-run dependencies: def-admissible-pointed-heegaard-floer-data (batch 92, ready body inspected) and def-decorated-link-cobordism-and-floer-target (level 2, escalated analytic interface); external: def-countable-choice and def-given-spin-and-spinc-structures-and-associated-spinor-bundles. Source: Zemke §§1–9 and 12, PDF pp.1–97; Juhasz §§8 and 11.3 for the hat-only comparison. The representative is not claimed to be a chain map or independent of data until the analytic/naturality suppliers are complete.

### lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing — level 4 — escalated

States regularity, finite counts, compactification, boundary-degeneration cancellation, and gluing for marked, two-color triangle moduli spaces in a fixed Spin-c class. In-run dependencies: def-admissible-pointed-heegaard-floer-data and lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing (batch 92; latter actual body and escalated decision inspected), plus def-knot-floer-cobordism-map (level 3) and def-countable-choice. Source locators: Zemke §§3 and 5–9, PDF pp.11–68; Ozsvath–Szabo §§3.2–3.8, printed pp.19–33; Grid Homology Chapter 16, pp.325–338. The disk supplier is a necessary analytic interface but does not prove the triangle claim. No complete triangle proof is supplied.

### lem-knot-floer-cobordism-naturality-and-movie-invariance — level 5 — escalated

States filtered \(\mathbb F_2[U,V]\)-equivariant chain-homotopy independence and the composition law summing over Spin-c extensions; for \(S^3\times[0,1]\), the Spin-c extension set has one element. In-run dependencies: def-decorated-link-cobordism-and-floer-target, def-knot-floer-cobordism-map, and the escalated triangle lemma; external: def-countable-choice. Source: Zemke Theorems A/B, §§10–13, PDF pp.68–97; Juhasz §§8 and 11.3 only for hat theory. Zemke §12.4 uses fourteen Cerf-move checks, §12.5 proves independence under puncturing, and §13 proves the extension sum. The full source argument was inspected; its referenced auxiliary identities and analytic lemmas are not locally established here.

### lem-barnatan-carter-saito-movie-moves-up-to-sign — level 9 — escalated

States that each individual Carter–Saito move and distant-critical-point swap preserves the integral even Khovanov map up to one global sign. In-run dependencies: def-barnatan-tangle-cobordism-category, def-generic-movie-of-an-oriented-knot-cobordism, def-khovanov-cobordism-map-up-to-sign, lem-khovanov-frobenius-tqft-respects-barnatan-relations, and batch-90 lem-khovanov-reidemeister-chain-homotopies (current body and ready record inspected); external def-countable-choice. Sources: Bar-Natan §8.3, pp.1475–1480; Jacobsson Lemmas 5.1–5.2, pp.1236–1244; Khovanov §7. The local checks for all fifteen moves, their signs, and homotopies are not reproduced, so the item remains escalated.

### thm-barnatan-khovanov-cobordism-functoriality-up-to-sign — level 10 — escalated

States the boundary-fixed isotopy-invariant map of bidegree \((0,\chi(\Sigma))\) for a smooth oriented knot cobordism and functoriality after quotient by overall sign. In-run dependencies: def-khovanov-cobordism-map-up-to-sign, thm-carter-saito-movie-move-equivalence, and the local movie-move lemma; external def-countable-choice. Sources: Bar-Natan Theorems 4–5/§8.3, pp.1472–1480; Jacobsson Theorem 2/§5, pp.1235–1244. Both exact blockers are retained in the carrier; no proof is claimed.

### thm-khovanov-and-knot-floer-cobordism-map-scope — level 11 — escalated

States the two separate map scopes, exact coefficient rings, decorations, and equivalence relations for Khovanov and decorated link Floer theory; no comparison map is claimed. In-run dependencies: def-decorated-link-cobordism-and-floer-target, def-knot-floer-cobordism-map, lem-knot-floer-cobordism-naturality-and-movie-invariance, and thm-barnatan-khovanov-cobordism-functoriality-up-to-sign; external def-countable-choice. Sources: Bar-Natan Theorems 4–5 and Zemke Theorems A/B; Jacobsson §4.2 for boundary-fixed scope. Both branches remain escalated.

### ex-knot-kt-40-worked-cases — level 2 — ready candidate

Computes \(m(\mathrm{id}\otimes\eta)=\mathrm{id}_{\mathcal A}\) on the basis \(1,X\) for a birth followed by a merging saddle. Direct in-run dependency: def-khovanov-frobenius-algebra-and-cube-of-resolutions (batch 90; current formula and ready record inspected). Sources: Khovanov §7.1; Bar-Natan §§7–8; Kauffman §5. Proof contract steps 1.1–1.2 match the carrier.

### cex-knot-kt-40-boundary-case — level 2 — ready candidate

Computes \(\epsilon\eta=0\) and hence \(\mathrm{id}\otimes(\epsilon\eta)=0\neq\pm\mathrm{id}_{\mathcal A}\) for a birth followed by death on a disjoint circle. Direct in-run dependency: def-khovanov-frobenius-algebra-and-cube-of-resolutions (batch 90; current formulas and ready record inspected). Sources: Khovanov §7.1; Bar-Natan §§7–8; Kauffman §5. The finite calculation is choice-free.

## Source retrieval and remaining scoped work

source-fetch-check --stamp verified 10 of 11 distinct source records in the new coverage file; Bar-Natan, Jacobsson, Khovanov, Kauffman notes, Zemke, Juhasz, and the Grid Homology book all have inspected full-text stamps. The Carter–Saito official URL returned HTTP 403 for the initial request and five retries; searches and alternative source dispositions are recorded under source_resolution with status owner-escalation, not dropped.

The batch manifest and cross-batch dependency ledger include all 14 items, corrected logical dependencies, and levels: A levels 0, 1, 2, 2, 2, 3, 4, 5, 8, 9, 10, 11; B levels 2, 2. The 14 item dependency labels independently recomputed from the current run manifests all match.

## Final scoped checks and readiness records

- Source fetch check: 10/11 source records fetched and stamped. The Carter–Saito publisher URL returned HTTP 403 on six exact attempts (initial plus five retries); alternatives did not provide a complete proof. Coverage records one intentional owner-escalation blocker and no source drop.
- Coverage checklist: 2 pages, 32 harvested results, zero warnings, one error for the unresolved Carter–Saito source-resolution escalation.
- Strict proof contracts: 14/14 items checked, zero errors, zero warnings.
- Proof layout: 14 changed items checked, 8 numbered proof steps found, zero defects.
- Manifest dependencies: 14 items checked, zero missing or malformed dependency arrays.
- Item/manifest consistency: all 14 item frontmatter dependency sets and levels match the batch manifest.
- Uninterrupted-statement audit: 14/14 complete statements have no inline hyperlinks, and each is followed by the required reference section.
- Scoped page inventory: A page has 12 items; B page has 2 examples; both are frontmatter-only with empty bodies and their required-page metadata preserved.
- Scoped dependency-level recomputation: 14/14 item labels match. The run-wide item-level command still reports 68 unrelated errors (empty scaffold inventories and six stale labels on other items). The run-wide batch-level command reports the existing cycle 67 → 75 → 67. Neither error involves batch 93.
- Step 1 records: all 14 assigned items have hash-current records with owner=false: 6 ready (the two local definitions, the TQFT relation proof, the fixed-movie Khovanov map definition, and the two complete finite examples) and 8 escalated (two-color Floer target, Carter–Saito classification, Floer map/analysis/naturality, local Khovanov movie-move checks, Khovanov functoriality theorem, and combined scope theorem). No escalation was overwritten or marked with --owner.
- Global Step 1 check reports 841 run items, 497 ready, and closed=false. Unrelated items and empty scaffold inventories remain, and batch 93 has the documented page/source/proof escalations. The assigned 14 records are hash-current. Completion of these authoring records is not independent approval.

No repo tests were added or run. Only assigned draft items/pages and batch-93 evidence were edited.
