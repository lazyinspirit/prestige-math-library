# frontier-19 · Alpha-d · step-3 scaffold review

Scope: batches 5, 6, and 10; A pages `combinatorial-classes-and-the-symbolic-method`, `permutation-statistics-inversions-and-eulerian-numbers`, `block-designs-and-finite-projective-planes`, `classical-and-loglog-erdos-hajnal-bounds`, and `polynomial-rodl-and-viral-equivalence`.

I read the governing step-3 rules in `CLAUDE.md`, `LEVELS.md`, `SCHEMA.md`, and `ARCHITECTURE.md`; the group assignment in `research/frontier-19-alpha-groups.json`; the relevant design sections in `research/plan-combinatorics-and-categories.md`; the live `research/plan-spec.json`; and the batch `pages.json`, `notes.md`, and `coverage.json` files for batches 5, 6, and 10. I also opened the cited source treatments needed to check the main declinations and scope boundaries, including Melczer chapter 5, the MIT permutation-statistics lectures, Elkies's design notes, Davidson's Steiner and Latin-square notes, Deductive Press section 16.2, Bucić-Nguyen-Scott-Seymour, Bucić-Fox-Pham, Huang-Ju-Zhou, and Nguyen's EH notes.

## Severity table

| id | severity | page | status | summary |
|---|---|---|---|---|
| B5-1 | medium | `combinatorial-classes-and-the-symbolic-method` | accepted note | The CB-15 prose design still names an impossible "same OGF, non-isomorphic classes" counterexample; the current scaffold correctly replaces it with a product-rule failure witness, so the page itself is sufficient. |
| B5-2 | low | `permutation-statistics-inversions-and-eulerian-numbers` | accepted note | The scaffold correctly reuses the published cycle-type count and keeps the alternating-permutation / Euler-number branch outside the current prerequisite closure. |
| B6-1 | medium | `block-designs-and-finite-projective-planes` | accepted note | The page is sufficient only under the step-0 CB-14a split reading; the omitted Bruck-Ryser / Hadamard / full MOLS continuation still needs an owner page-or-scope decision. |
| B6-2 | low | `classical-and-loglog-erdos-hajnal-bounds` | accepted note | The page correctly avoids the published ai-generated corollary and uses two explicit external-density remarks as the narrow honest bridge to the titled EH bounds. |
| B10-1 | low | published dependencies used by `polynomial-rodl-and-viral-equivalence` | alert only | Three published EH dependency items cite `2606.06258v2` under the wrong title; this is a real published-metadata defect but not a step-3 scaffold blocker. |

## Pair review

### `combinatorial-classes-and-the-symbolic-method`

Verdict: `sufficient`.

Evidence:
- The standard unlabelled symbolic-method spine is present: combinatorial classes and OGFs; disjoint union and Cartesian product; `SEQ`; `MSET` and `PSET` in product and exponential forms; `CYC`; substitution; pointing; and order-raising recursive specifications, with the expected cheap corollaries for binary words, compositions, partitions, trees, and necklaces.
- The harvest is faithful. Flajolet-Sedgewick Part A section I.4 really is the regular-language / rational-series continuation, so sending it to `linear-recurrences-and-rational-generating-functions` is correct. Melczer's "Set Partitions" heading really is the labelled / Stirling-number branch, and plan-spec already gives it the exact later home `set-partitions-stirling-numbers-and-exponential-generating-functions` at order 199.
- The B page is real: 11 items, including concrete examples, genuine counterexamples to the sum/product hypotheses, and two false statements with actual boundary content.
- `B5-1`: the batch scaffold already avoids the impossible design witness "same OGF but non-isomorphic". The correct witness is the current product-rule failure example, where objects are not determined by their two components.

### `permutation-statistics-inversions-and-eulerian-numbers`

Verdict: `sufficient`.

Evidence:
- The MacMahon / Foata / Eulerian core is present: Lehmer code, inversion generating function `=[n]_q!`, Foata's bijection for `maj ~ inv`, Foata's fundamental transformation for `des ~ exc`, the Eulerian recurrence, Worpitzky's identity, the Eulerian EGF, and weak/Bruhat order definitions for later pages.
- The omissions are honest. Stanley section 1.6.1 is only the alternating-permutation branch here, and the current live `requires` list does not include `the-exponential-function`, so the branch cannot be added without a prerequisite amendment. Gotti's q-binomial / finite-subspace branch has no concrete page id in `plan-spec.json` today, and the weak-order lattice theorem likewise has no later page id yet assigned on disk.
- The B page is real: 8 items with computation tables, a worked Foata example, and real boundary statements.
- `B5-2`: the current scaffold is correct to reuse the already-published cycle-type count rather than reminting a duplicate theorem, and correct to leave the alternating-permutation theorem as an owner-level scope choice.

### `block-designs-and-finite-projective-planes`

Verdict: `sufficient`.

Evidence:
- Under the step-0 drift adjudication, the governing design is the split `CB-14a` scope. Read that way, the manifest is mathematically complete: 2-designs, incidence matrices, replication/counting identities, Fisher's inequality, symmetric designs, Steiner triple systems with Bose and Skolem constructions, the projective-plane bridge through counts and `PG(2,q)`, and the finite-field MOLS construction.
- The harvest is faithful. Elkies covers Fisher and the projective-plane counting bridge; Davidson's Steiner notes cover the STS obstruction, Bose, Skolem, and existence theorem; Davidson's Latin-square notes do contain the triangle-decomposition equivalence; Deductive Press does contain the general bound `N(n) <= n-1` in addition to the finite-field MOLS construction.
- The omitted split-era material is recorded rather than hidden. The current page does not have the split CB-14b page id or the Bruck-Ryser prerequisite stack on disk, so Bruck-Ryser / Hadamard / difference-set / full MOLS-equivalence continuation cannot be made honest without a page split or an explicit spec/prerequisite change.
- The B page is real: 7 items with Fano, STS(9), `PG(2,3)`, MOLS, and two genuine counterexamples.
- `B6-1`: the page is sufficient only because the step-0 drift already interpreted order 225 as the CB-14a half plus the pre-Bruck-Ryser projective-plane bridge. That scope choice should stay explicit.

### `classical-and-loglog-erdos-hajnal-bounds`

Verdict: `sufficient`.

Evidence:
- The design row at orders 403/404 promises only the two general EH lower bounds quoted in the introduction. The A page gives exactly that: one explicit Fox-Sudakov remark and theorem, one explicit Bucić-Nguyen-Scott-Seymour remark and theorem, plus the comparison corollary.
- The route is dependency-clean. The scaffold correctly avoids the published `cor-a-restricted-set-contains-a-large-stable-set-or-clique`, whose statement provenance is `ai-generated`, and instead uses published non-generated sparse-set, complement, coloring, and clique/stable-set items plus inline extraction.
- The two `proved_here: false` remark items are the honest narrow fallback here. They are exact source statements of the quantitative density theorems that the page then uses to prove the titled EH consequences; they are not decorative external citations.
- The broader quantitative theorems remain correctly outside the page remit. In the opened source, theorem 1.7 and theorem 2.1 are stronger quantitative structural results than page 403 needs, and no exact later page on disk is currently assigned to them.
- The B page is real: 5 items, all doing actual scale and boundary work rather than padding.
- `B6-2`: I accept the non-ai-generated route and the two narrow external remarks as the honest way to make the page close at its stated scope.

### `polynomial-rodl-and-viral-equivalence`

Verdict: `sufficient`.

Evidence:
- The finite-family equivalence spine is present and properly decomposed: polynomial Rödl, viral, and `(t,k)`-homogeneous definitions; the three helper lemmas; `EH => viral`; the two easy directions; the finite-family equivalence theorem; and the singleton corollary.
- The harvest is faithful. Nguyen and Bucić-Fox-Pham both separate the close-Rödl / hereditary-family branch from the finite-family equivalence spine, and the opened Huang-Ju-Zhou source confirms theorem 1.3 is exactly the finite-family equivalence page 405 is supposed to carry.
- The declinations are real. `Lemma 1.7`, both `Lemma 15` rows, `Conjecture 10`, and `Theorem 11` all belong to the close-Rödl or edit-distance branch, which has no page owner in the current plan. `Corollary 8` and `Corollary 9` are applications to string graphs and perfect graphs, not proof-spine items for the equivalence page.
- The B page is real: 5 items with one concrete application, one vacuous boundary example, one witness that the restricted set need not be the whole graph, and two sharp negative boundary items.
- `B10-1`: the three published EH dependency items on disk cite `https://arxiv.org/html/2606.06258v2` as "Erdos-Hajnal properties in graphs and hypergraphs, introduction", but the source page opened on Tuesday, August 25, 2026 is "Erdos-Hajnal beyond the five-vertex path". This is a real published metadata defect to repair later, not a scaffold blocker for page 405.

## Final verdicts

All five owned A pages are scaffold-sufficient.

- `combinatorial-classes-and-the-symbolic-method`: sufficient
- `permutation-statistics-inversions-and-eulerian-numbers`: sufficient
- `block-designs-and-finite-projective-planes`: sufficient
- `classical-and-loglog-erdos-hajnal-bounds`: sufficient
- `polynomial-rodl-and-viral-equivalence`: sufficient

No batch file edits were needed at step 3. I wrote only the group-d artifacts and resolved all 23 scope-denial rows in `research/frontier-19-alpha-d-scope-decisions.json`.
