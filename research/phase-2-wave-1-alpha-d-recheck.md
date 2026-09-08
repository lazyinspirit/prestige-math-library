# Group d — final scaffold adjudication

Run: phase-2-wave-1. Dispatch: scaffold-final-d-39b8e7c7f70f07ef.
Batches: 2 and 12. This report supersedes the earlier recheck, not the historical original review. No scaffold-owner decision file exists for either assigned A page. Published content, shared plan and prose were not edited in this adjudication.

| Batch | A page | Final outcome | Ordinary verdict |
| --- | --- | --- | --- |
| 2 | finite-averaging-and-character-theory-prerequisites | accept, confidence 1 | sufficient |
| 12 | galois-orbits-and-descent-of-simple-finite-group-modules | repaired, confidence 1 | sufficient |

Both outcomes include the matching B page. Inventories remain 9 A / 4 B and 5 A / 3 B respectively. No useful statement was weakened or removed, and no new pair or shared amendment is needed.

## Current dependencies and the actual repair

Read the current manifests, source records and dispositions, notes, original review and recheck, plan, algebra design III.3–III.4, representation design 15.1–15.4, the combinatorics additive-character reconciliation, and owned frontier inputs. The former shared-plan B-supplier blocker is resolved: the four algebra stages now require the corresponding earlier A pages. Each assigned A has 69 pages in its structural closure, with no B supplier, missing page or forward edge.

A current traversal of declared item deps through run manifests and published item headers gives 668 items for batch 2 and 574 for batch 12 after repair, with no missing, cyclic, forward or out-of-page-closure dependency and no same-frontier item edge. These are graph counts, not a claim that every unrelated clause on every prerequisite page has been semantically approved. Actual proof-bearing clauses and well-definedness obligations were checked separately below. Owned items have no load-bearing forward_refs or deferred-set-theory-beyond-choice use; no such catalogue reaches either inspected closure. Neither pair is a Foundations page.

The earlier recheck missed an actual batch-12 dependency problem. The finite-group specialization of `thm-galois-orbits-classify-simple-modules-after-splitting-base-change` consumed `cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order`, hence `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order`, hence `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order`. In the last item's published proof, A1 uses invertibility of the group order and A2 uses a subspace projection without proved local support. The complete-reducibility step also needs finite strict dimension decrease. This is a real use of the affected proof, unlike unused co-resident consumer defects.

Applied repair in batch-12.pages.json: replace that corollary dependency and the appeal to Maschke with a complete inline finite-dimensional argument. Extend a finite basis of U to V using `thm-dimension-of-a-linear-subspace` clause 3; retain U coordinates to obtain P. Use `lem-characteristic-and-additive-order` and `def-field` to invert the positive group order. Form Q=|G|^-1 sum_g gPg^-1 using `def-finite-sum-in-a-commutative-monoid`; finite distributivity follows by `thm-strong-induction`, and equivariance by `lem-finite-sum-reindexing-and-fubini`. Q maps into and fixes U, so V=U direct-sum ker Q. Induct on dimension, using the strict proper-subspace inequality in the same dimension theorem clause 2. Apply to the finite regular k[G]-module for k=F,E; the existing group-ring basis and module correspondence identify the regular representation. `def-semisimple-module` and the already reachable semisimple-ring definition give the required conclusion. The group-basis scalar-extension isomorphism and the given splitting-field hypothesis then provide the split matrix algebra. No existence theorem for splitting fields is assumed.

The removed published edge has no remaining mathematical use: semisimplicity over both fields is now proved in this owned theorem. Its explicit general semisimple-algebra hypothesis remains unchanged. There is no implicit dependency on batch 2. The owned cross-batch inputs remain empty arrays for this reason, not because publication of a supplier has been presumed. The coverage record adds Zheng Theorem 4.1.6, its forward proof inline to this theorem, and its modular converse as already published and unused. Historical traversal evidence remains identified as historical.

## Clause-level adjudication

Batch 2: natural-scalar invertibility is exactly the characteristic equivalence plus the inverse axiom. The projection uses finite basis extension, without Choice. The trace lemma needs only the image/kernel decomposition and identity/zero action from `cor-idempotent-endomorphisms-are-diagonalisable-projections`; its separate minimal-polynomial route is not a mathematical premise. The published trace definition proves basis independence. Orbit indicators use unique constant values on nonempty orbits, including empty X without choosing representatives. The normalized form is linear in the first argument and requires nonempty X. Complex finite-sum operations follow by induction; the real sum lemma is used only for positivity and the zero criterion. The equality proof expands n²-|sum z_i|²=sum_{i<j}|z_i-z_j|², including n=1.

For the conjugate-average lemma, finite algebraic generation constructs the cyclotomic splitting field inside C. Normality puts each conjugate in that field. The simple-root-adjunction isomorphism Q(a) to Q(b) extends to their common splitting field by `thm-isomorphisms-extend-to-splitting-fields`; this verifies the needed direction, rather than just asserting that embeddings produce conjugates. The inverse automorphism preserves exact root order. No algebraic-integrality conclusion is used. The direct-sum kernel proof includes the empty family, and singleton conjugacy uses no finiteness. The four B computations agree with these statements and are leaves.

Batch 12: balancing the tensor algebra/module actions occurs over the central field, not an illicit application of the commutative-ring scalar-change definition to a noncommutative algebra map. The inverse-pullback twist gives the stated composition and transported matrices. The finite-Galois trace-dual argument uses the separable clauses of the trace and embedding formulas, Dedekind independence, and E^Γ=F: its dual-basis identity produces invariant spanning vectors without dividing by |Γ|; a minimal relation proves injectivity. Canonical tensor fixed points follow by coefficient uniqueness.

Matrix centers identify all central idempotents with subsets of split factors. An orbit sum descends uniquely; commutators and injectivity reflect centrality. A nontrivial splitting would partition an orbit into invariant subsets. Wedderburn–Artin then identifies each descended block's unique simple type, retaining the opposite-ring convention. Scalar extension of its regular module gives precisely the orbit support. The explicit matrix-unit module decomposition supplies semisimplicity and finite multiplicities; canonical semilinear maps force equal positive multiplicities. Zero algebra is treated separately. This route uses neither character independence nor the Schur-index theorem it is intended to supply.

The C3 example computes the rational matrix, irreducible quadratic, splitting eigenlines, central idempotent and traces. The Q8 example proves the rational quaternion block is division using the positive sum-of-squares norm, exhibits a matrix basis over Q(i), and splits the other block by the invertible sign matrix. Column ideals give multiplicity two. Its Galois intertwiner is the displayed v matrix. The counterexample proves nonexistence of a rational two-dimensional model directly: anticommuting U,V with squares -I force V²=(a²+b²)I. Thus stability alone does not imply multiplicity one; no later Schur-index criterion supplies this conclusion.

## Full-text source evidence and scope

Opened complete authoritative texts on the web and read the relevant arguments, also using their full local extracted text. No source was dropped or replaced, and no fetch/read stamp was manufactured. Active sources and exact readings:

- Etingof et al., https://math.mit.edu/~etingof/reprbook.pdf : Theorem 4.1.1 pp.61–62; §§4.2–4.3 pp.63–65; Theorem 4.5.1 pp.67–68; §4.6 pp.71–72; Lemma 5.4.5 pp.100–101. Supports averaging, class functions, finite inner products and the root-of-unity argument; later representation/orthogonality/integrality conclusions retain separate destinations.
- Axler, https://linear.axler.net/LADR4e.pdf : 2.32–2.33 pp.41–42; 6.2–6.3 pp.183–184; 8.49–8.51 pp.326–327. Read complete finite basis, inner-product and trace arguments. Integral examples are outside the finite function-space interface.
- Milne, https://www.jmilne.org/math/CourseNotes/FT.pdf : characteristic pp.8–9; Proposition 2.12 and Corollary 2.13 pp.29–30; Definition 3.7 p.37. Read splitting-field extension proof and normality formulation supporting the exact conjugate-extension route.
- Judson, https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html : complete §14.2, especially Examples 14.2.1–14.2.3 and Theorem 14.2.4. Supports explicit conjugacy computations. The complexity aside and p-group theorem are not inputs.
- Zheng, https://server.mcm.ac.cn/~zheng/algebra.pdf : §§3.2–3.3 pp.117–118; Example 3.7.4(3) p.125; Theorem 3.8.1 and Example 3.8.2 pp.132–133; Theorem 4.1.6 p.139, complete forward and converse proofs; Proposition 4.3.2 and Corollaries 4.3.3–4.3.4 pp.145–146. Supports semisimple blocks, descent, quaternion example and the newly explicit averaging proof.
- Wiese, https://math.uni.lu/wiese/notes/GalRep.pdf : Definition 2.2.7 through Corollary 2.2.12 pp.28–30; Remark 2.4.2(ii) p.34; §2.5 pp.37–41; Exercise 14 p.70. Read full twist/orbit/multiplicity arguments and fields-of-definition discussion. Exercise 14 is a prompt, not a supplied proof; the manifest's explicit quaternion computation supplies the argument.

Each A has at least two independent complete treatments including a book or full lecture notes. Coverage retains every harvested disposition. Refreshed and resolved all 24 group scope rows as stands with evidence tied to the current local routes and valid destinations. The batch-12 12/42 yield warning is accepted: the extra declined index, character-field, nonsplit and indecomposable results are not needed for the split semisimple orbit proof. No theorem was weakened to achieve this yield.

## Published-consumer debt and reconciliation

The canonical published-consumer-supplier ledger already routes the batch-2 characteristic and projection lemmas to the published Maschke theorem. Keep that repair in Phase 3: replace its source-only assertions with these exact suppliers, then repair the complete-reducibility induction using `thm-dimension-of-a-linear-subspace` and `thm-strong-induction`, and recheck the regular-module corollary. These exact paths and strategy are also recorded in owned batch-12 notes for reconciliation. They no longer block the local repaired specialization.

The remaining batch-2 ledger edges (trace, indicators, Hermitian form, unit-circle equality, conjugate average, kernel intersection and singleton conjugacy) remain downstream debt. The batch-12 orbit theorem supplies `def-schur-index-of-an-irreducible-character` and `thm-schur-index-as-minimal-realization-multiplicity`, as the canonical ledger prescribes. None of those consumers is used to prove its supplier. No global semantic approval of their co-resident items is asserted.

## Checks actually run after mathematical repair

All commands below exited 0:

- `node tools/source-fetch-check.mjs --stamp --coverage research/phase-2-wave-1-batch-2.coverage.json,research/phase-2-wave-1-batch-12.coverage.json`: 6/6 fetch verified and resolved; 0 newly stamped, 0 drops.
- `node tools/source-backing.mjs --coverage research/phase-2-wave-1-batch-2.coverage.json,research/phase-2-wave-1-batch-12.coverage.json --liveness research/phase-2-wave-1-url-liveness.json --require-verified`: all 21 authored results backed.
- `node tools/coverage-checklist.mjs --require-destination research/phase-2-wave-1-batch-2.coverage.json`: 41 results, 0 errors/warnings.
- Same command for batch 12: 42 results, 0 errors, 1 reviewed yield warning.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-2.pages.json research/phase-2-wave-1-batch-12.pages.json`: 21 items, 0 errors/warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-{1..15}.pages.json`: 435 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed; 892 pages with item lists, 719 without. The latter's item dependencies are not asserted by this tool.
- `node tools/extcheck.mjs`: passed with published unproved-material notices; those notices do not certify proofs and were not used to justify either pair.
- `node tools/scope-decisions.mjs refresh --run phase-2-wave-1 --group d`, then adjudication and `check`: 24 current declines, 0 errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`: successful reconciliation; owned inputs remain empty with no hidden cross-batch use.

Whole-run checks describe the shared-tree snapshot at execution, not future concurrent edits. Ordinary verdicts are sufficient for both pairs. Terminal records distinguish unchanged acceptance of batch 2 from the applied repair to batch 12.
