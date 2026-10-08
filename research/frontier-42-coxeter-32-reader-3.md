# Reader 3 — batch 3, frontier-42-coxeter-32

Independent Step 5a review of the nine assigned draft items and their A/B pair. The live engine state was `5a-read`. The manifest and proof contracts were used as evidence; the current item arguments determined the conclusions. Four item files and the assigned batch contract file were edited. No page prose, other-batch item, published item, plan, acceptance stamp, or workflow state was edited. No withdrawal is proposed.

## Opened inventory

Both pages were read in full:

- `library/hopf-hecke-algebras/generic-coxeter-hecke-algebras-and-the-standard-basis.md` (A).
- `library/hopf-hecke-algebras/generic-coxeter-hecke-algebras-and-the-standard-basis-examples.md` (B).

All nine assigned item files were read in full. The construction preceded the independent reduced-word and length-operator lemmas; those preceded the basis theorem, which preceded the bar/normalization lemma and examples:

| Assigned item | Review result |
|---|---|
| `def-hh-universal-coxeter-hecke-parameters-and-presentation` | Odd-component conjugacy, separation by class signs, presentation, and parameter universality checked. Added the explicit integer coefficient-ring prerequisite. |
| `lem-hh-reduced-word-independence-and-length-multiplication` | Braid independence, both multiplication rules, and finite-word spanning checked. No item edit. |
| `lem-hh-commuting-left-right-hecke-length-operators` | Both quadratic cases, the exchange-derived two-length lemma, all six commutation configurations, right-operator evaluation, and the braid/evaluation argument checked. No item edit. |
| `thm-hh-generic-coxeter-hecke-standard-basis` | Representation, independence by evaluation at `e_1`, faithfulness, and arbitrary base change checked. No item edit. |
| `lem-hh-hecke-anti-involution-bar-and-normalization` | Reversal of the relation ideal, explicit inverses, semilinear descent and involutivity, and multiplicative rescaling checked. No item edit. |
| `ex-hh-rank-one-hecke-multiplication-in-both-normalizations` | Both tables and inverses checked. Supplied the rank-one group/length derivation and the integer-domain prerequisite. |
| `ex-hh-s3-hecke-multiplication-table-in-both-normalizations` | All normalized entries checked; completed and checked the multiplicative table. Published supplier indexing remains an owner issue. |
| `ex-hh-unequal-parameter-dihedral-consistency` | Odd obstruction, exact product-zero condition, domain factor alternatives, and absence of exceptional configurations for even labels checked. Repaired the summary and hypothetical coefficient-ring scope. |
| `ex-hh-hecke-specialization-at-v-equals-one` | Both inverse maps, equivalence of involution-plus-braid and Coxeter relators, matching bases, necessity/sufficiency of `u_s^2=1`, and both sign specializations checked. No item edit. |

The following outside-batch draft suppliers were read in full in their original observed versions. Relevant corrected clauses were inspected again when their owners changed them during this review:

- `def-hh-coxeter-matrix-word-group-and-length`.
- `def-hh-geometric-coxeter-representation-and-roots`.
- `lem-hh-dihedral-root-recurrence-and-root-sign`.
- `thm-hh-coxeter-exchange-deletion-and-faithfulness`.
- `thm-hh-matsumoto-reduced-word-theorem`.
- `thm-hh-parabolic-minimal-representatives-and-length-additivity`.
- `lem-hh-free-associative-ring-and-relations-descent`.
- `lem-hh-finite-polynomial-and-localization-constructions`.
- `lem-hh-universal-presentations-and-base-change`.

Published background files read in full:

- `def-algebra-over-a-commutative-ring`, `def-group-homomorphism`, `def-conjugacy-class-and-centralizer`.
- `def-free-module-on-a-set-and-standard-basis`, `thm-universal-property-of-free-modules`, `def-module-homomorphism-kernel-image-and-cokernel`, `def-endomorphism-ring-of-a-module`, `prop-endomorphisms-form-a-ring`.
- `def-natural-numbers`, `thm-induction-principle`.
- `def-group-ring`, `thm-group-ring-is-a-unital-algebra-with-basis-g`.
- `thm-tensor-product-of-algebras-over-a-commutative-ring`, `thm-right-exactness-of-tensor-products`, `thm-universal-property-of-module-tensor-products`, `def-restriction-and-extension-of-scalars`.
- `prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group`, `thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity`.
- `def-finite-symmetric-group-and-permutation-notation`, `def-inversions-inversion-number-and-sign`, `thm-adjacent-transpositions-generate-the-symmetric-group`, `lem-disjoint-cycles-commute`, `def-symmetric-group`, `thm-transpositions-generate-the-symmetric-group`.
- `thm-int-comm-ring`, `lem-int-cancellation`, `lem-nat-embeds-int`, `ex-integers-are-an-integral-domain-not-a-field`.

Additional bounded background inspection: the domain definition in `def-zero-divisor-and-integral-domain`; the Statement and Facts of `thm-int-ordered-ring`; and selected statement, dependency, and proof lines of `cor-multivariate-polynomial-ring-over-a-domain-is-a-domain`. These partial inspections are not whole-item audits. A later graph traversal read frontmatter for reachability; it did not constitute mathematical review of every traversed item.

The complete assigned batch contract records were inspected, including citations, derivations, routine-step lists, and boundary evidence. The large initial contract output was truncated; bounded subsequent extracts recovered the relevant records. No rendered evidence bundle was found under the run state directory.

## Repairs and evidence

1. **Integer coefficient ring and domain prerequisites.** The Laurent construction assumes a commutative coefficient ring; its domain clause assumes that coefficient ring is a domain. It does not itself establish these facts about the integers. In the definition, added `thm-int-comm-ring` to dependencies/F2 and applied it explicitly in Verification 1.2. In the rank-one and dihedral examples, F5 now supplies the commutative ring theorem, `lem-int-cancellation`, and the injective natural-number embedding (distinguishing zero and one) before using the Laurent domain clause. These exact suppliers were opened and their new contract quotations match their statements. No integer-domain example was made a dependency.

2. **Rank-one proof prerequisite.** Former F2 attributed the entire two-element group and its lengths to a definition that presents the group and postpones generator nonidentity. Replaced F2 with the actual presentation/universal-property facts. Verification 1.1 now reduces any single-generator word using `s^2=1` and sends `s` to `-1` in the two-element sign group, proving `s!=1`, the two elements, and lengths zero and one. This closes a short omitted derivation without assuming a background classification.

3. **Dihedral scope and conclusion.** Example part 3 formerly said unequal parameters were consistent exactly across nonconjugate generators, although Verification 2.1 correctly allowed distinct units `v_t=-v_s^{-1}` on an odd edge. Part 1 also identified the class-constant assignment with the full condition. Replaced these assertions with the precise distinction: differences agree on odd components; distinct units may produce the same difference; independent differences are allowed across components. The introductory paragraph now defines the hypothetical length-operator test over an arbitrary commutative ring with arbitrary units before imposing the generic parameter rule. Added the exact Matsumoto part-3 citation for the dihedral group order. Evidence is the locally derived identity `v_t(u_t-u_s)=(v_t-v_s)(v_t+v_s^{-1})` and the six complete length expansions. Domain factor alternatives remain expressly restricted to integral domains, and general rings retain only the product-zero criterion.

4. **Complete S3 multiplicative table.** The title and B-page summary promise the complete tables in both normalizations, but the multiplicative display previously contained only the two generator rows. Added the identity and three remaining rows, using `a=Q-1`, and updated Verification 2.1 to describe the complete display. The entry for the square of the longest element expands to the original stated polynomial. An independent exact computation from permutations and inversion lengths checked all 36 normalized cells and all 36 displayed multiplicative cells, every rescaling, and the 216 basis associativity identities in each normalization. These finite checks supplement the local proof.

All affected contracts were updated in `research/frontier-42-coxeter-32-batch-3.proof-contracts.json`. The rank-one contract now cites the real presentation universal property; the dihedral contract cites the proved two-length lemma at Proof 1.3 and the exact group-order clause; the S3 contract records the complete table derivation. Also corrected misleading assigned boundary evidence: an even edge need not separate odd components; zero *differences* are permitted although parameters remain units; only the spanning step is an induction; and the generic coefficient ring is the stipulated Laurent ring, with the zero ring allowed as a specialization. Corrected the definition's no-choice locator and the S3 sign-specialization description. Contract-only corrections did not change those additional item files.

None of the four edited items had a `verification.judge` record, so there was no stale judge record to remove. All remain draft. No certification or judgment was added.

## Uneditable findings

Five original defects in four suppliers were independently observed and later corrected by their owners. They remain historical findings in the JSON because this reader was not licensed to repair them. The raw hashes recorded while those original carriers were present match the immutable producer pre-reader hashes. They are bound as `snapshot: pre`, never as corrected current source.

| Defective subject / producer | Original location and evidence | Needed correction / current observation | Assigned consumer |
|---|---|---|---|
| `lem-hh-finite-polynomial-and-localization-constructions` / batch 1 | Proof 1.6 ended the sum calculation with `(f'k+hg')(gk)`. With `(f,g,f',g')=(1,2,2,4)` and `(h,k,h',k')=(3,5,6,10)`, both equivalence premises hold but the claimed equality is `440=220`. | The correct factor is `(f'k'+h'g')`. The owner corrected it and made the field identities explicit; the corrected clause was inspected. The Laurent-ring clause used here was not refuted. | `def-hh-universal-coxeter-hecke-parameters-and-presentation` |
| `thm-hh-matsumoto-reduced-word-theorem` / batch 2 | Statement 3 and Proof 1.1 asserted a quotient action by an outside generator. In type A3, for `s=s1,t=s2,u=s3`, `sigma_u(alpha_t)=alpha_t+c_tu alpha_u` does not preserve `P=span(alpha_s,alpha_t)`. | Compare vector differences modulo P without asserting an induced quotient map. The owner made that correction, and its relevant statement/proof clauses were inspected. Braid connectivity is unchanged. | `lem-hh-reduced-word-independence-and-length-multiplication` |
| `lem-hh-universal-presentations-and-base-change` / batch 1 | Proof 1.3 called `phi(r)c_i` the coordinates of `ry` in its R-basis, mixing S-coefficients with R-coordinates. No S-action on A is given. | Coordinates are `rc_i`; balancing follows from `phi(rc_i)=phi(r)phi(c_i)`. The owner corrected this calculation; the corrected step was inspected. | `thm-hh-generic-coxeter-hecke-standard-basis` |
| `thm-hh-parabolic-minimal-representatives-and-length-additivity` / batch 2 | Proof 3.1 said inversion interchanges “left and left” cosets. Actually `(W_Ja)^(-1)=a^(-1)W_J` and conversely. | State that inversion exchanges right and left coset families. The owner corrected the sentence; the corrected final argument was inspected. The type-A clause used here is unchanged. | `ex-hh-s3-hecke-multiplication-table-in-both-normalizations` |

The original Matsumoto Proof 1.1 also inferred that `D_0` was a subgroup after checking only multiplication closure. For infinite m, inverse closure is an additional obligation. It closes immediately: `(r^k)^(-1)=r^{-k}` and `(r^ks)^2=1` by the already proved dihedral identity. This nonfatal proof omission is separately routed with the same original hash and consumer; the owner has since added the calculation, which was inspected in the corrected step.

Original raw hashes:

- Laurent supplier: `ae28d79206c9c36b145e4a9ef0ac22b33dfc1920508dd2d2d149339cbabf31ff`.
- Matsumoto supplier: `adada442748f1f8fb2bfa87f84cfa3c1bf0d43e15bab69938d50d0e209bef8ea`.
- Base-change supplier: `02dddbb3ac54d6469ff8494017ea1f63378d3069a2e21f549f3fc6e09b86bb1a`.
- Parabolic supplier: `3cd5acf790d352ef9c99845f2bf2fd9b81b31baca7f01d31bc40090beae359b9`.

A sixth finding remains in published content: `thm-adjacent-transpositions-generate-the-symmetric-group`, Statement's first paragraph, title, and Proof 1.1. The canonical finite-symmetric-group definition and the theorem's transposition supplier use `S_n=Sym({0,...,n-1})`. The adjacent-generator statement instead uses `(j j+1)` for `1<=j<n` without a relabelling. At n=2, `(1 2)` is not a permutation of `{0,1}`. Either use `0<=j<n-1` throughout or explicitly transport the theorem to `{1,...,n}`. The successor type-A item distinguishes the two labellings, but cannot amend this published subject's own statement. Exact dependency path: `ex-hh-s3-hecke-multiplication-table-in-both-normalizations -> thm-hh-parabolic-minimal-representatives-and-length-additivity -> thm-adjacent-transpositions-generate-the-symmetric-group`. No published source was edited.

The four substantive historical defects and the current published indexing defect are classified fatal under the dispatch's rule that a defective statement, computation, or ill-formed claim is not excused as a short omitted proof step. The additional historical inverse-closure omission is nonfatal: the inverse formulas follow immediately from the already proved dihedral identity. All five historical findings were corrected on disk; they do not assert that corrected suppliers still contain the defects. The sixth finding is the remaining current owner issue. The consumer reachability paths were checked against actual `deps`/`justified_by` edges.

## Sources consulted

- [Lusztig, Lectures on Hecke Algebras with Unequal Parameters](https://arxiv.org/pdf/math/0108172), version 1: complete Proposition 1.10 (PDF p. 5); Sections 3.1–3.2 and complete Proposition 3.3 including all six cases (PDF pp. 8–9); Section 3.4 and Sections 4.1–4.2 including the complete bar-operator argument (PDF p. 10). These resolve the two-length lemma, operator/evaluation route, normalization, and bar checks. Its coefficient parameters are powers of a single variable; the local proof, rather than an expanded source hypothesis, supplies the universal multivariable version.
- [Geck, Modular Representations of Hecke Algebras](https://arxiv.org/pdf/math/0511548), Section 2, PDF/printed pp. 6–7, and Sections 4/4.1, pp. 15–16: finite Coxeter groups, conjugacy-constant multiplicative parameters, and tensor specialization. No infinite-group or arbitrary-specialization theorem was inferred merely from this narrower source.
- [Björner–Brenti, Combinatorics of Coxeter Groups](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf), Section 6.1, printed p. 174 (actual PDF p. 183), with continuation on printed p. 175 (PDF p. 184): multiplicative relations, units, bar operator, and the specialization at one. The assigned source metadata's printed locator identifies the correct material; its PDF offset is one page early.

PDF screenshot requests for several Lusztig pages failed with cache errors; the complete relevant argument was recovered through the web text. The Geck and Björner–Brenti sections were read from downloaded PDFs using PyMuPDF. No source bibliography outside these sections is claimed checked.

## Validation and page verdicts

After the final edits, each of the four changed items was run individually through `tools/reflow.mts` and `tools/precheck.mts`. Reflow reported unchanged in each case; every precheck passed (one proof checked, zero failing per file). The final single batched layout command on all four explicit paths reported **4 items, 18 steps, 0 defects**. Scoped rendering passed for those same four files. Newly supplied prerequisite quotations were checked against their source files; changed items remain draft without judge records.

The final layout command was:

```text
node tools/proof-layout.mjs items/def-hh-universal-coxeter-hecke-parameters-and-presentation.md items/ex-hh-unequal-parameter-dihedral-consistency.md items/ex-hh-rank-one-hecke-multiplication-in-both-normalizations.md items/ex-hh-s3-hecke-multiplication-table-in-both-normalizations.md
```

An exploratory `rendercheck --help` unexpectedly began the default corpus scan and was interrupted (exit 130). No result is claimed from that attempt; the subsequent explicit four-file rendercheck passed. No full-run gate or mathematical acceptance stamp was run.

| Page | Reader verdict |
|---|---|
| A: `generic-coxeter-hecke-algebras-and-the-standard-basis` | Current assigned construction and proofs are coherent after the prerequisite repair. Summary matches the presentation, length operators, basis, base change, and bar/normalization results. Historical supplier corrections remain routed for the independent lead. |
| B: `generic-coxeter-hecke-algebras-and-the-standard-basis-examples` | Assigned examples are coherent after repairs, and the completed S3 table now fulfills the summary. Hold final closure for the published adjacent-generator indexing correction. B prose was read without editing. |

Remaining blocker: ownership/closure of the published adjacent-generator statement. This review does not certify the rest of its published dependency closure. The historical draft-supplier findings do not propose withdrawal of any assigned claim.

Coverage limits: both assigned pages and all nine assigned items were read, together with the explicit inventory above. This was not a recursive foundational audit or a check of every bibliography entry. Selected source sections and the finite arithmetic checks are exactly those reported here. Findings JSON is `research/frontier-42-coxeter-32-reader-findings-3.json`.
