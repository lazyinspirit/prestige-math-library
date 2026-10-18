# Batch 55 authoring notes

Run: non-ml-math-remaining-81-2026-10-18  
Batch: 55 · assigned page pair: cohomological-hall-algebras-and-quiver-correspondences  
Scheduling input SHA-256: 825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042

## Plan and design reconciliation

- The active plan-spec.json records the assigned A/B IDs, order 2924/2925, category, title, and page-level requires, but both item inventories were empty.
- The physics-algebras plan's CoHA scope was preserved: ordinary equivariant CoHA from the quiver exact-sequence correspondence; a distinct on-shell potential/vanishing-cycle construction with its data and shifts explicit; and source-bounded preprojective/Nakajima/Yangian reports.
- The historical splice note that no items had been minted is stale against the active Step 1 dispatch, which requires authoring. The dispatch and owner direction control; this conflict is recorded here.
- requires: finitary-ringel-hall-algebras and dg-and-homological-algebra-foundations is page reading order, not a logical dependency. The actual current Ringel–Hall draft defines count-theoretic multiplication for finitary abelian categories. The actual DG draft defines cohomological DGAs and modules. Neither supplies the geometric quotient-stack Borel–Moore operations needed by the CoHA product.
- The existing KLR equivariant-Ext item is adjacent flag geometry only. It does not supply a CoHA product or action.

## Item inventory and in-run dependency levels

Items were inventoried from the assigned carriers and their deps were recomputed from the batch-55 manifest. Supplier-before-consumer order is:

| Level | Items |
|---|---|
| 0 | lem-general-linear-quotient-stacks-are-algebraic |
| 1 | def-quiver-representation-stacks-and-exact-sequence-correspondences |
| 2 | lem-quiver-exact-sequence-correspondence-is-smooth-and-proper; def-quiver-potential-and-monodromic-vanishing-cycle-data; rem-preprojective-coha-and-nakajima-action-source-boundaries |
| 3 | def-untwisted-quiver-cohomological-hall-algebra; lem-quiver-potential-trace-is-additive-on-extensions; ex-jordan-quiver-extension-correspondence |
| 4 | thm-untwisted-quiver-coha-is-associative-and-unital; def-critical-quiver-coha-from-vanishing-cycle-data; ex-jordan-quiver-potential-critical-locus |
| 5 | thm-critical-quiver-coha-associative-under-coherence-axioms |

There are no cycles in the batch-local deps graph. Batch-41 and batch-50 page requirements do not occur as item dependencies.

## Cross-batch interface checks

- Batch 41 current bodies inspected: def-differential-graded-algebra and def-differential-graded-module. They give the cohomological grading and module conventions, but no stack-level equivariant Borel–Moore correspondence operations.
- Batch 50 current bodies inspected: def-untwisted-hall-algebra and thm-untwisted-hall-algebra-is-associative-and-unital. They count subobjects in a finitary abelian category and prove a flag-count identity; they do not define the geometric CoHA.
- These checks verify the declared reading interfaces only. They do not certify supplier acceptance or publication.

## Mathematical findings and unresolved prerequisites

The exact-sequence correspondence convention is subrepresentation first and quotient second. For an arrow h:i->j, the free off-diagonal block is Hom(C^(b_i),C^(a_j)), of total rank e=sum_h b_i a_j; the splitting-change group has dimension u=sum_i a_i b_i. Thus q has relative stack dimension e-u=-chi_Q(b,a). The forgetful map p is the invariant-subbundle incidence over a relative Grassmannian and is representable proper. Loops, repeated arrows, zero coordinates, and the empty quiver are retained.

A significant quotient-stack operation bridge is still missing locally. The published equivariant Borel–Moore definition gives its normalized groups and proper/smooth operations for scheme correspondences with one fixed acting group. Here q changes from the block-parabolic group P_(a,b) to its Levi G_a x G_b; p is a map from the parabolic quotient to the G_(a+b) quotient. The current six-functor supplier also treats fixed-group equivariant scheme maps. Neither inspected body supplies the needed nonrepresentable smooth pullback, change-of-group normalization, proper pushforward, and Cartesian/pasting coherence for these quotient-stack maps.

Affected items: def-untwisted-quiver-cohomological-hall-algebra, thm-untwisted-quiver-coha-is-associative-and-unital, def-critical-quiver-coha-from-vanishing-cycle-data, and thm-critical-quiver-coha-associative-under-coherence-axioms. Their flag and coefficient arguments are drafted, but they are not marked ready. Proposed A-page supplier: a locally proved quotient-stack equivariant Borel–Moore operation package for the parabolic-to-Levi and parabolic-to-general-linear correspondences, including degree normalization and base-change/pasting. The gap is not repaired by the Hall or DG reading prerequisites.

The critical coefficient datum explicitly requires additive value sets, monodromy, coefficient/orientation shifts, proper/smooth operations, associative and unital Thom–Sebastiani coherence, and base-change compatibility. Its conditional associativity argument does not prove that standard equivariant monodromic mixed-Hodge-module vanishing cycles realize this full package. Proposed separate owner prerequisite: prove or supply the standard realization and orientation/functoriality interface. This remains an escalation; the source report is not used as a substitute proof.

The preprojective/Nakajima/Yangian item is a source report with the narrow conditions retained: arbitrary finite Q for the cited oriented-cohomology preprojective CoHA action; no edge loops for the ordinary Kac–Moody action; and no edge loops, the stated Euler–Ringel sign twist, t1=t2=hbar/2, the specified torsion quotient, and ADE type for the Yangian isomorphism/intertwining result. No general CoHA–Yangian comparison is asserted.

## Source reading, retrieval, and disposition

Full relevant source arguments were inspected, not just abstracts:

- Kontsevich–Soibelman, https://arxiv.org/pdf/1006.2706v2: ordinary construction and associativity, §§2.1–2.3 (PDF pp. 8–11); one-loop material, §2.5; potential/critical material, §§4.7 and 7.2–7.6 (PDF pp. 43–47, 95–105).
- Joyce, https://people.maths.ox.ac.uk/joyce/AdvancedClassTT26/Week2.pdf: complete 20-page handwritten week-2 lecture note fetched and rendered; pp. 1–2 give the exact-sequence stack, projection maps, operation hypotheses and product; pp. 9–11 treat quasi-smoothness and virtual pull/push; pp. 12–15 give the two flag diagrams for associativity and the unit. All these relevant pages were inspected in full. Week 1 is also available but is not cited.
- Soibelman, https://www.math.ksu.edu/~soibel/COHA-modules-2-1.pdf: complete 28-page PDF inspected; §§1.1 and 2.1–2.4 cover the CoHA interface, the no-potential quiver CoHA and shuffle product, an A2 example, orientation-data scope, and a Jordan-quiver polynomial potential example.
- Stacks Project, https://stacks.math.columbia.edu/download/algebraic.pdf: full relevant text in §§94.10–94.12 inspected for the algebraic-stack presentation criterion and diagonal representability.
- Milne, Algebraic Groups (2022), https://www.jmilne.org/math/Books/iAG2022.pdf: relevant §2.8 inspected for affine finite-type GL_n and smoothness.
- Davison, https://arxiv.org/pdf/1311.7172v5: title/overview, §§2.2, 2.5, 2.7, 3.1–3.2, and §6.1 inspected for vanishing cycles, Thom–Sebastiani, umkehr maps, and critical CoHA conventions.
- Yang–Zhao, https://arxiv.org/pdf/1407.7994v6: §§0.1, 5.3–5.6, and 8.3 inspected for exact preprojective-action and Yangian hypotheses.
- Nakajima, https://arxiv.org/pdf/1611.10000v1: complete 19-page review opened; §§2–4 inspected. The review reports the no-edge-loop Kac–Moody action and refers its proof to the original sources.

The Edinburgh Talk11 PDF was initially listed as a source but source-fetch-check returned HTTP 403 from both maths.ed.ac.uk and its webhomes.maths.ed.ac.uk alias. After searching alternatives, the complete Oxford Week 2 lecture note and Soibelman's full paper were fetched and inspected for the ordinary CoHA operation and flag arguments; the Talk11 URL was removed from item sources. Its failed URLs and the successful alternatives are preserved in source-evidence. An exploratory Edinburgh Talk13 source (https://www.maths.ed.ac.uk/~lhenneca/Skye2023-Talk13.pdf) separately failed twice (one timeout, one inaccessible response). It is not cited and no item relies on it. Davison's full arXiv paper was inspected as an alternative source for critical-CoHA reasoning. Talk13 is not recorded as a dropped source because it was not included in the batch source inventory.

Source URLs, locators, per-item supported results, dispositions, and fetch stamps are in non-ml-math-remaining-81-2026-10-18-batch-55.coverage.json, ...batch-55.source-coverage.json, and ...batch-55.source-evidence.json.

## Step 1 readiness

The Step 1 decision records are written for all 12 items and each current item/dependency hash was rechecked. Eight items are ready: the quotient-stack lemma, representation-stack definition, exact-sequence geometry lemma, potential/coefficient-data definition, potential-trace additivity lemma, source-bounded preprojective/Nakajima remark, and both Jordan-quiver examples. Four items are escalated: the ordinary CoHA definition and theorem, and the critical CoHA definition and theorem. These completion records are authoring evidence, not independent mathematical approval.

## Final scoped checks

- Batch-55 manifest inventory: 12 items on the assigned A/B pair; manifest dependencies match current item frontmatter. The batch-local item graph is acyclic and computes levels 0–5 as listed above.
- Focused depcheck over all 12 assigned item IDs: 0 errors, 0 warnings.
- Precheck: all 7 proof-bearing items pass. Proof layout: 7 items, 27 steps, 0 defects.
- Strict proof contracts: 12/12 scoped items checked, 0 errors, 0 warnings. The author check also passed rendercheck, content policy, and proof-contract validation for the 12 items and both pages.
- Coverage checklist: 2 pages, 35 harvested results, 0 errors, 0 warnings. Source fetch check: 8/8 sources fetch-verified; 0 documented drops.
- The repository-wide item-dependency-levels check currently reports empty scaffold inventories and mismatched dependency-level labels in unrelated batches; the focused batch-55 graph above passes. The run-wide batch-dependency-levels check is blocked while resolving batch 51 item lem-hall-and-dj-borel-conventions-are-isomorphic: the diagnostic is “Invalid escape sequence \D” near its Drinfeld–Jimbo coproduct convention metadata. This item is outside batch 55 and was not edited; the owner needs to repair it and recompute the run-wide dependency snapshot.
