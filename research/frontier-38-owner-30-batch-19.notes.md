# Batch 19 scaffold notes — Jucys–Murphy Elements and Seminormal Forms

Run: `frontier-38-owner-30`. Beta batch 19, covering exactly the pair
`jucys-murphy-elements-and-seminormal-forms` (A, order 807, `representation-theory`)
and `jucys-murphy-elements-and-seminormal-forms-examples` (B, order 808). This
dispatch wrote only the batch manifest, coverage, notes, Step-1 readiness
records and the consumer cross-batch dependency input.

## Design control and plan comparison

The design section is `research/plan-symmetric-group-representations-track.md`
§5, SYMR-5 (the L36 mention is the row `| SYMR-5 | jucys-murphy-elements-and-seminormal-forms | commuting family, Gelfand–Tsetlin algebra, explicit Young forms |`);
the commissioned item inventory, exact claims, deps, proof routes and source
locators are in `research/symmetric-group-planning/proposed-inventory.md`,
SYMR-5 section at lines 126–152: A-page table lines 128–146, B-page table
lines 148–152. The run's binding
`research/frontier-38-owner-30-owner-authoring-direction.md` was read first; it
touches this pair only through the general local-prerequisite and gate rules
(no pair-specific clause), so the design is the controlling item-level text.

`research/plan-spec.json` for pages 807/808 carries the page records, the
`requires` lists and **empty `items` arrays**; it names no local additions and
no item-level conflicts. There is therefore no plan/design textual conflict to
reconcile. What the scaffold does record is that the design's *proof routes*
for rows 5-7 need correction as written (one of them would need an edge the
design itself forbids, and one dependency cycle had to be broken), and that
three extra local items are required for closure. All fifteen commissioned
A-page claims and all four B-page items are preserved verbatim in substance;
nothing was weakened or dropped.

## Route corrections recorded (all claims preserved)

1. **The one-cycle-generation gap.** The design's row 6 ("relative centralizer
   = ⟨Z(S_{n−1}), X_n⟩") and row 7 ("GZ(n) = C[X_1,…,X_n]") were planned on
   Okounkov–Vershik Theorem 2.5/2.8 and Corollary 2.6. Theorem 2.5's last step
   is the classical theorem that the one-cycle class sums generate Z(C[S_n]);
   the sources prove it through the symmetric-function/characteristic dictionary
   (Okounkov–Vershik cite Macdonald Ch. I; Garsia's own Theorem 5.10 is likewise
   derived from a Schur-function identity). The only library home of that
   dictionary is SYMR-2 `frobenius-characteristic-and-the-symmetric-group-character-dictionary`,
   which is in-run batch 18 and which the design explicitly keeps off this
   branch ("the ordinary symmetric-function/Frobenius branch and the JM branch
   meet only where a character-value theorem genuinely needs both"). A
   self-contained alternative was checked and rejected: the naive
   refinement-order triangularity for products of one-cycle class sums fails
   (for shape (4,2) in S_6 the expansion contains finer classes such as
   (2,2,1,1)), so no sound elementary proof of that generation theorem was
   found within this batch's scope.
2. **What replaces it.** (a) The diagonal-algebra theorem
   `thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis`
   (new, from Okounkov–Vershik Proposition 1.1 plus the published branching
   rule and Wedderburn decomposition) gives the Young basis and diagonalizes
   the X_k without any centre-generation input. (b) The relative-centralizer
   theorem keeps its commissioned statement and is proved by the design's own
   second half, "compare the relative-centralizer dimension with the
   multiplicity-free branching graph": the centralizer is identified with the
   algebra of functions on the Young-graph edges, Z(S_{n−1})-characters
   separate distinct predecessor shapes, X_n separates the edges over one shape
   by the distinct contents of addable nodes, and a separating unital
   subalgebra of functions on a finite set is everything. (c) "GZ(n) =
   C[X_1,…,X_n]" is proved by the path-idempotent/interpolation route: the
   recursive projector formula of Garsia Theorems 3.4–3.5 writes every path
   idempotent as a polynomial in the X_k, and those idempotents span GZ(n);
   conversely X_k = T_k − T_{k−1} lies in the generated algebra of centres. The
   design's row-7 route text already describes exactly this path-idempotent
   construction ("multiply central idempotents along a branching path … identify
   the whole diagonal algebra"), so the change is a route correction inside the
   design, not a scope change. Dependency order consequence: the spectral and
   interpolation items precede the generation theorem, and the generation
   theorem no longer depends on the relative-centralizer item (the reverse
   implication holds: the relative-centralizer equality implies
   Z(C[S_n]) ⊆ ⟨Z(C[S_{n−1}]), X_n⟩).
3. **Spectral item dependency narrowed.** Design row 9 depended on row 7
   (GZ = C[X]); Okounkov–Vershik §§4–5 use only the existence of the Young
   basis and the local H(2) algebra, not the generation theorem, so the
   dependency is retargeted to the new diagonal-algebra item. This removes the
   would-be cycle row 7 ← row 10.
4. **Commutativity row.** Design row 3 listed the local-relations lemma as its
   dependency; the commutativity proof used is the source's own induction
   through the centrality of the transposition sum C_2 = X_2 + ⋯ + X_n
   (Garsia Theorem 3.1(a)), which needs only the definition. Recorded as a
   dependency correction. The local-relations lemma is kept as its own item
   (it is used by the spectral and seminormal items).
5. **Centralizer-commutativity row.** Design row 5 listed Maschke's theorem;
   neither Okounkov–Vershik's proof (inversion anti-automorphism plus
   conjugate-to-inverse) nor the corrected proof uses it. Maschke is dropped
   from that row's deps and the new conjugation lemma is added.
6. **Source proof corrected.** Okounkov–Vershik Lemma 2.2 states that any
   h ∈ S_{n−1} conjugating the deleted permutation g′ to g′^{-1} realizes
   g^{-1} = h g h^{-1}. That is not true for an arbitrary such h (for
   g = (1 2 3 4), h = (2 3) conjugates g′ = (1 2 3) to g′^{-1} but sends g to
   (1 3 2 4) ≠ g^{-1}). The local item therefore carries the explicit
   cycle-reversal involution h (reverse the tail of the cycle containing n and
   reverse every other cycle), which does satisfy h g h^{-1} = g^{-1} and is an
   involution; the fact itself, which Theorem 2.1 needs, is correct.
7. **Elementary-symmetric row simplified.** Design row 15 listed row 14 as a
   dependency; the elementary induction E_s^(n) = E_s^(n−1) + X_n E_{s−1}^(n−1)
   with the bijection (σ,j) ↦ (j n)σ is complete on its own (and is the
   design's own stated route), so row 14 is not a dependency.
8. **Three new local prerequisites** were minted, each used before its
   consumers: `lem-symmetric-group-conjugation-to-inverse-within-the-preceding-group`
   (level 0), `thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis`
   (level 1), `lem-addable-nodes-of-a-partition-have-distinct-contents`
   (level 1). No page-level `requires` edge was added, removed or changed; all
   four `requires` suppliers are published on disk and are consumed at item
   level (Specht classification and the tabloid inner product; the complex
   restriction branching rule; restriction/extension of scalars; the Coxeter
   presentation of S_n).

## Verification work recorded at scaffold time

* Exact rational linear algebra in C[S_5] (120-dimensional, computed with
  fractions, not floating point) gives dim Z(C[S_5], C[S_4]) = 12, dim⟨Z(C[S_4]), X_5⟩ = 12,
  Z(C[S_5]) ⊆ ⟨Z(C[S_4]), X_5⟩, and dim⟨X_1,…,X_5⟩ = 26 = Σ_λ f^λ, confirming
  Okounkov–Vershik Theorems 2.5/2.8 and Corollary 2.6 at the first level where
  the centralizer is larger than p(4) + p(5) − 1. The same check verified that
  the orbit-sum count 12 equals Σ_{λ⊢5} #Rem(λ), the dimension used by the
  edge-separation proof.
* The identical computation verified the elementary-symmetric class-sum
  identity e_s(X_2,…,X_n) = Σ_{ℓ(ρ)=n−s} C_ρ for n = 4, 5 and all s, as a
  cross-check of item 18's induction.
* The S_3 projector recursion was checked by exact rational expansion. With
  X_2 = (1 2), X_3 = (1 3) + (2 3) and the addable-content sets A((1)) = {1,−1},
  A((2)) = {2,−1}, A((1,1)) = {1,−2}, A((1,1,1)) = {1}, the recursion gives
  P_row = (X_2+1)(X_3+1)/6, P_{[1 2/3]} = (X_2+1)(2−X_3)/6,
  P_{[1 3/2]} = (1−X_2)(X_3+2)/6, P_col = (1−X_2)(1−X_3)/6; these were verified
  to be idempotent, pairwise orthogonal, to sum to 1, and to act on their own
  content vectors by 1 and on the others by 0. The B-page example quotes these
  four polynomials; the printed text's displayed n = 3 instances are garbled by
  the extraction (one sign is lost), so the item relies on the recursion and
  this independent recomputation, not on the garbled line. This also confirms
  the addable-content convention used in the interpolation item and the
  (2,1) blocks on the examples page (r = 2: seminormal matrix
  [[1/2, 3/4],[1, −1/2]], orthogonal block [[1/2, √3/2],[√3/2, −1/2]]).
* Each dependency listed in the manifest was resolved against a published item
  file on disk (Specht page, branching page, tensor-products page, braided
  page, group-algebra/centre/class-sum items, Wedderburn decomposition,
  symmetric-group cycle items); none is a planned in-run supplier and none is a
  B-page item. No item in this batch uses the Axiom of Choice, dependent choice,
  or any Recorded-not-proved statement; every argument is finite and over
  characteristic zero. `def-axiom-of-choice` does not occur in the batch.
* Every item received a Step-1 record (`ready`) with its examined dependency
  list; `node tools/step1-decisions.mjs check --run frontier-38-owner-30`
  reports no open work for any batch-19 item.

## Sources

Five coverage sources, four live and one documented drop:

* Garsia, *Young Seminormal Representation, Murphy Elements and Content
  Evaluations*, UCSD lecture notes (2003), sections 3–5 (printed pp. 18–45) and
  Theorem 5.10 (pp. 51–52), read in full from the hash-authenticated cached
  copy and re-read in the relevant proof ranges for this scaffold. The
  author-hosted URL `math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf`
  could not be transport-verified in this environment: the initial attempt plus
  the five recovery retries all failed with `UNABLE_TO_VERIFY_LEAF_SIGNATURE`
  (incomplete server certificate chain; same on the `mathweb.ucsd.edu` alias).
  The document itself was obtained (HTTP 200, 374025 bytes, SHA-256
  `5942dfd8e4b03118511e66d41a84cb8b740b42db5d2ccda67a707b8af1d0d20b`, 53 PDF
  pages), byte-identical to the cached copy authenticated by the earlier
  commissioned retrieval, and the retrieval of record is the Internet Archive
  snapshot `web/20201116115428id_` of the same URL, which serves the identical
  bytes over a verifiable chain. `source_resolution` with status `dropped`,
  six recorded attempts, two searches and per-item alternatives (same argument
  and dependencies) is attached to the dropped entry; the snapshot entry is
  fetch-stamped.
* Okounkov–Vershik, *A New Approach to the Representation Theory of the
  Symmetric Groups* (Selecta Math. 2 (1996) 581–605; arXiv:math/0503040),
  sections 1–7, printed pp. 7–25: Proposition 1.1, Theorems 2.1/2.5/2.8–2.9,
  Corollaries 2.6/2.10 and Lemma 2.2; (3.2)–(3.3), H(2), Propositions 3.1–3.2
  and 4.1 with (4.2); Theorem 5.1, Lemma 5.2, Propositions/results 5.3, 5.4,
  5.8; Propositions 6.1–6.2 with (6.3)–(6.5).
* Mathas–Soriano, *Seminormal Forms and Gram Determinants for Cellular
  Algebras* (arXiv:math/0604108), sections 2.8–2.15, 3.1–3.7, Theorem 3.16,
  Corollary 3.17, Proposition 4.13 (pp. 4–21): independent separation-condition
  audit and the Hecke/modular boundary.
* James, *The Representation Theory of the Symmetric Groups* (LNM 682, 1978),
  §25 "Young's Orthogonal Form", printed pp. 114–124, including 25.1, Theorems
  25.3–25.4, Lemma 25.5 and the S^{(3,2)} computation: the textbook treatment
  of the orthogonal form.
* The Internet Archive snapshot entry above (the live retrieval of the Garsia
  document).

Two independent ordinary proof treatments (Garsia; Okounkov–Vershik) plus the
Mathas–Soriano separation check and the James textbook treatment of the
orthogonal form; every harvested heading received a disposition, with the
declines recorded in the coverage file (character-polynomial machinery, Hecke
q-contents, cellular generality, virtual permutations, Murnaghan–Nakayama).

## Checks run and results

* `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json`
  → `624 item(s), 0 normalized, 0 error(s)` at the first full-run pass and
  `714 item(s), 0 normalized, 0 error(s)` at the final pass (other batches were
  still being scaffolded in parallel; the batch-19 contribution is the same
  22 items in both).
* `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-*.pages.json`
  → `624 scoped item(s), 0 error(s), 0 warning(s)` and, at the final pass,
  `714 scoped item(s), 0 error(s), 0 warning(s)`.
* `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-19.coverage.json --require-destination`
  → `1 page(s), 63 harvested result(s), 0 error(s), 0 warning(s)`.
* `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-19.coverage.json`
  → `4/5 source(s) fetch-verified; 5/5 resolved (1 documented drop)`. Whole-run
  form: `156/159 fetch-verified; 159/159 resolved (3 documented drops)`.
* `node tools/url-sweep.mjs --coverage research/frontier-38-owner-30-batch-19.coverage.json --out /tmp/b19-sweep3.json`
  → `4/4 live; 0 failed; 0 suspect`, `5 citation decision(s) (1 documented source drop)`
  (output written to `/tmp`, no run artifact touched).
* `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
  → no error for any batch-19 item. The 14 whole-run errors are other,
  still-unscaffolded or mislabelled batches (empty inventories for batches
  4/8/9/11/13/17/20/26/27 and label mismatches in batch 7's BGG items).
* `node tools/step1-decisions.mjs check --run frontier-38-owner-30`
  → no open work for any batch-19 item (22/22 recorded `ready`); remaining
  work rows belong to other batches.
* `node tools/manifest-integrity.mjs --run frontier-38-owner-30`
  → `60 page(s) owed, 60 in the manifests; no scope drift`.
* `node tools/drift-review-check.mjs --run frontier-38-owner-30`
  → `30 page(s) reviewed, 6 spec edit(s) applied, no blocked edges`.
* `node tools/validate-plan.mjs research/plan-spec.json` → exit 0.
* `node tools/extcheck.mjs` → OK (one pre-existing note on `thm-urysohn-lemma`).
  `node tools/fwdcheck.mjs --quiet` → OK.
* `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  → refreshed and deduplicated; `research/frontier-38-owner-30-batch-19.cross-batch-dependencies.json`
  is the empty input for this batch (no cross-batch page or item edges; all
  suppliers are published out-of-run items). The `--require-reviewed` form of the
  same gate currently exits 1 run-wide on 3 unreviewed cross-batch edges
  (26→2, 11→10, 27→2); none involves batch 19, whose input is complete and
  reviewed by construction as an empty array. That residual belongs to those
  consumer batches' owners.

## Unresolved findings and authoring obligations (for Step 3/5)

* **Printed-source gaps to be repaired in the item proofs, not carried
  silently.** (i) Okounkov–Vershik Lemma 2.2's one-line choice of h is not
  sufficient as printed; the local conjugation lemma states and proves the
  corrected involution form. (ii) Okounkov–Vershik Theorem 2.8's proof asserts
  a basis of "classes of the form Σ(…)" and concludes Z(n−1,1) ⊆ ⟨Z(n−1),Z(n)⟩;
  at n = 5 the span of Z(4) and Z(5) has dimension 11 while the centralizer has
  dimension 12, so that displayed inclusion is not literally true as a linear
  span — it is the *algebra* ⟨Z(4), Z(5)⟩ that is meant, and the statement of
  Theorem 2.8 (verified at n = 5 above) is correct. The local item proves the
  statement by edge separation and avoids reproducing the loose line.
* **Phasing and path independence.** The seminormal item declares the
  triangular (last-letter-order) phasing v_T = P_T s v_{T^λ}; Step 3 must verify
  the block identities s_i² = 1 and the Coxeter braid relations and that the
  real rescaling is chain-independent, as the drift review's "path-independent
  phases and Coxeter checks" note requires. The B-page (2,1) example is the
  smallest full check; the (3,2) James computation is the independent check.
* **Orthogonal form positivity.** The unit-rescaling item takes the positive
  square root and asserts the resulting matrices are orthogonal; the proof must
  show the induced form is positive definite on each Specht module (from the
  published tabloid form) and that the chosen signs give a genuine
  representation, not merely involutions.
* **Content-multiset recovery.** Item 16's Frobenius-coordinate recovery is
  stated inline; Step 3 must make the arm/leg recovery explicit (the counts
  n_t on nonnegative and negative diagonals are the arm and leg profiles).
* **No published defect found.** Every examined published supplier used here
  (Specht classification, restriction branching rule, tabloid form, centres
  and class sums, Wedderburn decomposition, Coxeter presentation, symmetric-group
  cycle and class items) states what the design assumes; no defective supplier
  was found and no published-consumer repair is proposed.
* **No escalation required.** All prerequisites are local or published; the
  complete closure is 18 + 4 = 22 items, far below the 100-item page cap, and
  no cross-batch change is requested.

## Next action

Step 3 authors the 22 item files in dependency-level order (A levels 0…5, then
the B page), completing the recorded obligations; Step 5 readers/refuters and
the adjudicator review the mathematics against the recorded sources.

## Independent Step-3 mathematical repair — 2026-10-03

The completed author's joint-spectrum carrier contained a false F1 character normalization and a source-only transposition scalar imported through seminormal forms. The false formula would give9 for the trivial character of S3 instead of1. Repaired the same target, preserving its Statement exactly, and added one genuinely needed local A prerequisite: `lem-transposition-class-sum-acts-on-a-specht-module-by-total-content`.

The new lemma proves the scalar by the coefficient of a fixed tabloid in a polytabloid, using only earlier published Specht realization/irreducibility and scalar-endomorphism suppliers. Unique row-column intersections force the row/column factors of a transposition to fix its complement; the only contributions are row transpositions of sign+1 and column transpositions of sign−1. Their difference is the sum of node contents. Trace gives χ(transposition)=dim(Sν)·zν/binom(m,2), for m≥2; m=0,1 are explicitly separate. No seminormal input is used.

The target's full spectral/combinatorial proof is now six coherent steps: successive central scalar differences give the eigenvalues; tableau order gives the three necessary conditions; a complete direct addable-content criterion treats absent diagonals and the right/below neighbours of the last occupied diagonal node; reconstruction from the content vector is unique; this injectivity gives one-dimensional joint eigenspaces in the existing Young basis. The earlier interleaved proof and forward criterion obligations were replaced cleanly.

Inventory is now19 A and4 B items (23 total), below the100-item cap. The new lemma is homed immediately before the target on the actual A library page. Its run dependency level is0 (all suppliers earlier/published); the target's computed level remains2. The target manifest deps and strategy now match the actual repaired proof. The new lemma and target contracts are complete, and the corresponding Garsia scalar coverage row points to the lemma. Fresh complete Chan source retrieval and proof-read evidence is added; the historical Garsia recovery evidence is retained, with only the two owned proof routes updated.

Focused precheck/rendercheck and final exact-path proof-layout pass for both items (10 numbered steps,0 defects). Strict proof-contract check passes all23 batch items,0 errors/warnings; batch content policy23/23 passes; source-fetch-check resolves6/6 sources (5 fetched,1 documented drop); focused depcheck including complete global page/cycle checks passes with0 errors and0 target warnings; current whole-run dependency labels agree. Other21 manifest and contract entries are unchanged. No engine gate, model/global configuration, audit/judge stamp or publication action occurred. Mathematical/source/closure details and exact current hashes: `research/frontier-38-owner-30-jm-joint-spectrum-repair-evidence.json`; final review: `research/frontier-38-owner-30-jm-joint-spectrum-repair-review.md`.

Parent must perform ordinary stable current item-decision refresh and new-local-item addition certification/plan registration required by the workflow before final central recertification. No original interface changed, so there is no mathematical downstream statement propagation. This note supersedes the old scalar proof route for readiness, without deleting historical source attempts.

Final precision: the joint-spectrum Given/proof now names each irreducible Young basis, collectively the multiplicity-free sum of complex Specht modules. This avoids conflating rank-one Young lines with repeated copies in the regular representation; the original Statement remains unchanged. After that final edit, focused precheck/rendercheck/proof-layout and full23-item strict contracts passed again.

## Step 3 gate repair supplement

The historical author evidence above is retained. The actual inverse-coefficient centralizer and multiplicity-free ambient proofs were repaired; the joint-spectrum nonempty-family boundary is checked concretely. All13 assigned source exclusions were individually compared with exact source claims and current proof routes; the OV noncentrality and Garsia scope reasons are corrected in actual coverage. See `frontier-38-owner-30-step3-gate-repair-jm-review.md` and its decisions/evidence JSON for exact current hashes. No global/native decision file was written by this lane.
