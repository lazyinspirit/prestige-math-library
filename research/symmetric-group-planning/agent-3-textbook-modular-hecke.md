# Agent 3 — modular / Hecke textbook report

## Agent record

| field | record |
|---|---|
| canonical agent/task name | `/root/symmetric_scaffold/symr_textbook_modular_hecke` |
| model | `gpt-5.6-terra` |
| reasoning effort | `high` |
| exact assignment | Retrieve and inspect a complete authoritative textbook focused on modular symmetric-group / Iwahori--Hecke representation theory, then harvest modular Specht, cellular, block, decomposition, JM, and interface material without claiming unsolved decomposition problems solved. |
| start state | Read `CLAUDE.md`, `README.md`, the symmetric-group commission, the report contract, and the completed reports of agents 1 and 2.  Read the existing proposed RG-8--RG-11 and RG-13 prose and searched the published `library/` and `items/` tree.  RG-8--RG-11 are planned characteristic-zero pages, not published modular suppliers; RG-13 is planned finite-`GL_n` principal-series material and owns generic type-A Hecke standard basis/specialisation/Tits deformation in that setting. |
| completion state | One complete, self-contained prepublication textbook manuscript was retrieved from a university host, byte-validated, text-extracted, and read in every substantive chapter.  The related final AMS edition was audited through the official publisher front/end matter but not counted as retrieved full text.  This report is the only tracked file written. |

## Full-text evidence

### Counted source 1

* **Andrew Mathas, _Hecke algebras and Schur algebras of the symmetric group_, complete prepublication manuscript, 1998; published in expanded form as _Iwahori--Hecke Algebras and Schur Algebras of the Symmetric Group_, University Lecture Series 15, American Mathematical Society, 1999.**  Source type: **textbook (complete prepublication manuscript)**.  This is not being passed off as a copy of the longer published edition: its own title, abstract, five-chapter contents, bibliography, and index are present, and its author calls it a concise, complete, self-contained work.  The 1999 AMS edition is a 188-page expansion with a sixth chapter and appendices.  The manuscript is the complete version actually retrieved and read here; see the candid retrieval note below.
* Legitimate university-hosted full-text URL retrieved: <https://web.math.ucsb.edu/~bigelow/books/mathas.pdf>.  The University of California, Santa Barbara mathematics host serves the complete manuscript.  The author's University of Sydney publication page identifies the later AMS textbook and describes its scope: <https://www.maths.usyd.edu.au/u/mathas/>.  Publisher bibliographic/edition confirmation is at <https://bookstore.ams.org/ulect-15>.
* Original absolute cache path: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/modular-hecke-textbook/mathas-1999-ihaschur.pdf`.
* SHA-256 of the original: `8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0`.
* Validation: `file` identifies PDF 1.3; `mutool info` reports **79 PDF pages**.  The manuscript's printed pp. iii--73 comprise introduction, Chapters 1--5, notational index (pp. 67--70), bibliography (pp. 71--72), and index (p. 73).  The extracted final substantive page ends at the index entry “Young's seminormal form,” followed only by the ResearchGate upload stamp and PDF EOF.  Thus this is a complete document, not a chapter sample or preview.
* Text extraction: `mutool draw -F txt` succeeded without OCR, creating `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/modular-hecke-textbook/mathas-1999-ihaschur.txt`.  Its older embedded fonts make some characters and display formulae ragged in linear text; theorem labels, printed page boundaries, hypotheses, and the complete contents/index were checked against PDF pages as needed.
* Actually read: introduction and contents (printed pp. iii--iv); Chapter 1, §§1--3 (pp. 1--7); Chapter 2, §§1--2 (pp. 9--16); Chapter 3, §§1--4 (pp. 17--34); Chapter 4, §§1--3 (pp. 36--44); Chapter 5, §§1--4 (pp. 46--65); notes, bibliography, and index (pp. 65--73).  In particular, I read the proofs surrounding Theorems 1.11, 2.13, 3.18, 3.21--3.34, 4.10--4.20, 5.29--5.40, rather than inferring them from the contents.

### Retrieval decision, edition boundary, and failures

The desired source was Mathas's modular Hecke/q-Schur textbook because it directly supplies the cellular Murphy-basis route, roots-of-unity simples, blocks, and a careful account of what the Jantzen formula does *not* determine.

* The official AMS full book is **xiii + 188 pp.**, with Chapter 6 and three appendices.  The AMS access page exposes only `ulect-15-prev.pdf`; the official `ulect015-endmatter.pdf` (locally cached, ignored) is 29 pages of title/front matter, contents, bibliography/index/end matter, not a full book.  Its SHA-256 is `c783e45a6a743da1fa93883636606022b7bb621d59380156c82783b6fcf16d4b`.  I did not count it as source text.  The official contents place the later Chapter 6 at pp. 95--135, so no claim below uses its canonical-basis, adjustment-matrix, or modular-branching details.
* The UCSB university copy is a different, complete earlier manuscript with all of *its* last pages.  It supplies a textbook-scale, self-contained proof route for the material harvested here, but it is shorter than the published edition.  This report deliberately records the version change and does not cite later-book theorem numbers as if read.
* I also tried the author's historical University of Sydney `Books/ihaschur*.pdf` paths; they are now 404.  The AMS storefront and University of Sydney author page confirm the published book but provide no legal full PDF.  The source above is therefore the complete accessible version used rather than a preview, abstract, or an unlabelled short lecture handout.  No second book was counted; a second independently retrieved treatment remains a real integration gap for the high-risk decomposition-number material.

## Conventions, scope, and ownership audit

Mathas uses **right** modules and writes `H=H_{R,q}(S_n)` with generators `T_i` satisfying

`T_i^2=(q-1)T_i+q`, equivalently `(T_i-q)(T_i+1)=0`.

Here `R` is a commutative ring with 1 and `q∈R^×`, until the statement explicitly makes `R` a field or PID.  `e` is the least positive integer with `[e]_q=1+q+...+q^{e-1}=0`, and is infinity if none exists.  Thus at `q=1` over a field of characteristic `p>0`, `e=p`; if `q≠1` and `e<∞`, `q` is a primitive `e`th root in the stated convention.  A partition is `e`-restricted when consecutive parts differ by less than `e` (with Mathas's *dual-Specht* labelling convention).  Translate to another source with care: Mathas warns on printed p. 25 that his `S^λ` is dual to the Dipper--James Specht module indexed by `λ'`.

| topic | audited owner/status | disposition for SYMR |
|---|---|---|
| Young diagrams, tableaux, dominance, tabloid permutation modules | planned RG-8; basic symmetric-group content is published in abstract algebra/combinatorics, but no published modular Specht sequence was found | inherit notation only; re-state coefficient-field and `e` restrictions in any modular item |
| complex Specht construction/classification, ordinary branching, hook formula, RSK | planned RG-9--RG-11, all explicitly characteristic zero once modules occur | do **not** duplicate.  The modular track begins with a warning/counterexample and constructs Hecke cellular Spechts separately. |
| generic type-A Hecke standard basis, specialisation, Tits deformation | planned RG-13, attached to `GL_n(F_q)` principal series, not a published supplier | inherit only as planned interface after it states its base ring and semisimplicity hypotheses.  SYMR adds Murphy/cellular bases and non-semisimple representation theory. |
| group blocks / Brauer theory | proposed RG-14 onward; existing `items/ex-p-regular-classes-of-s-three.md` is a small published example, not a modular symmetric-group block theorem | a SYMR `e`-core block page is a genuine type-A extension; do not claim general block equivalence/derived theory. |
| JM/seminormal forms | agent 4 owns broader seminormal/JM research | use Mathas's `e>n` Hecke seminormal result only as a narrow interface; defer general JM and KLR development to agents 4/6. |
| modular branching, canonical bases, KLR/cyclotomic theory | agents 5/6 own direct research | not supplied by the retrieved manuscript.  It cannot be silently supplied by the unseen longer-book Chapter 6. |

No published `library/` or `items/` page found by the text audit supplies a type-A Hecke cellular basis, modular Specht simple classification, `e`-core block theorem, or general decomposition-number algorithm.  The nonempty RG planning pages are **planned**, not published content.

## Mathematical harvest from actually read chapters

### 1. Type-A Hecke basis and exact specialisation boundary

**Locator.** Chapter 1 §2, printed pp. 3--5: Theorem 1.11, Corollaries 1.12--1.13.

**Hypotheses and conclusion.** For a commutative ring `R` and unit `q`, `H_{R,q}(S_n)` is the `R`-algebra generated by `T_i` with braid relations and `(T_i-q)(T_i+1)=0`.  For a reduced expression of `w∈S_n`, `T_w` is well-defined, and Theorem 1.11 makes `{T_w | w∈S_n}` an `R`-basis, with

`T_wT_s = T_{ws}` if `ℓ(ws)>ℓ(w)`, and `qT_{ws}+(q-1)T_w` otherwise.

Corollary 1.12 says base change along a ring map carrying `q̂` to `q` gives the corresponding specialised Hecke algebra.  At `q=1`, this is `R S_n`; it does not say that arbitrary specialisation preserves semisimplicity.  Corollary 1.13 supplies the one-dimensional trivial and sign Hecke characters `T_w↦q^{ℓ(w)}` and `T_w↦(-1)^{ℓ(w)}`.

**Proof route actually read.** Matsumoto's reduced-word theorem gives well-defined `T_w`; the multiplication follows by stripping a final descent.  For independence, Mathas passes to the generic `Z[q̂]` algebra, assumes a primitive coefficient relation, then specialises `q̂↦1`.  The group-algebra basis forces every coefficient to vanish at 1, contradicting primitivity.  Base change then proves the claimed arbitrary-`R` result.

**Example/boundary.** At `q=1`, `T_i^2=1`; at a root of unity, the same free basis persists but semisimplicity can fail.  The root-of-unity failure is therefore a module-theoretic issue, not loss of the `n!` basis.

**Likely scaffold disposition.** Inherit generic presentation/specialisation from planned RG-13, but add a small interface lemma identifying its convention with `(T_i-q)(T_i+1)=0`.  A SYMR page should state the base-change proof route before using Murphy bases.  It must never obtain modular simples merely by specialising the ordinary list.

### 2. Cellular algebras: radicals of cell forms classify all simples

**Locator.** Chapter 2 §§1--2, printed pp. 9--16: Definition 2.1, Corollary 2.3, Proposition 2.7, Proposition 2.9, Lemma 2.12, Theorem 2.13 (Graham--Lehrer), Corollary 2.14.

**Hypotheses and conclusion.** Let `A` be a finite-dimensional algebra over a field `R`, with a cellular basis `{c^λ_{st}}`, poset `Λ`, anti-involution exchanging `s,t`, and triangular multiplication modulo higher cells.  The cell module `C^λ` has the associative symmetric cell form determined modulo higher cells by

`c^λ_{us}c^λ_{tv} = <c^λ_s,c^λ_t> c^λ_{uv}`.

Then `D^λ=C^λ/rad C^λ` is absolutely irreducible if nonzero, and the nonzero `D^λ` form a complete pairwise non-isomorphic list of simple `A`-modules (Theorem 2.13).  The decomposition matrix is unitriangular in the cellular poset: `D^λ` occurs once at the diagonal of `C^λ`, and an off-diagonal factor `D^μ` can occur only in the source's order-compatible direction (Corollary 2.14).  It is a dominance restriction, not a formula for the entries.

**Proof route actually read.** Corollary 2.3 turns cellular multiplication into two-sided ideals and the key rank-one product modulo higher cells.  Proposition 2.7 proves symmetry/associativity of the form; its radical is a submodule.  For `x` outside the radical choose `y` with `<x,y>=1`; cellular basis elements built from `y` send `x` to every basis vector, so the quotient is simple (Proposition 2.9).  Theorem 2.13 orders the cellular ideals, observes their successive quotients are cell modules, and combines this with the Hom-vanishing/order lemma to exhaust all composition factors.

**Example/boundary.** Example 2.2(ii) explicitly gives a cellular basis of `H_{R,q}(S_3)`, indexed by `(3),(2,1),(1^3)`, already showing one cell with two tableau indices.  A degenerate cell form yields `D^λ=0`; cellularity does not promise a simple for every label.

**Likely scaffold disposition.** Proposed proof-leaf cluster: definition of a cellular basis; form/radical lemma; cellular-simple classification and dominance corollary.  This is reusable infrastructure for both Hecke and q-Schur modules.  It needs finite-dimensionality over a field at the classification step; do not state it for arbitrary rings.

### 3. Murphy cellular basis and modular Specht classification

**Locator.** Chapter 3 §§1--4, printed pp. 17--34: Corollary 3.17, Theorem 3.18 (Murphy Basis Theorem), Proposition 3.20, Theorem 3.21 (Dipper--James), Definition 3.28, and the classification discussion in §4.

**Hypotheses and conclusion.** For every commutative `R` and `q∈R^×`, the elements

`m_{st}=T_{d(s)}^* m_λ T_{d(t)}`, where `s,t` are standard `λ`-tableaux and `m_λ=Σ_{w∈S_λ}T_w`,

are a cellular basis of `H` ordered by dominance (Theorem 3.18).  The associated `S^λ` is free with Murphy basis `{m_t | t∈Std(λ)}` (Proposition 3.20); its radical quotient `D^λ` gives exactly all non-isomorphic simples for a field, after omitting zero quotients (Theorem 3.21).  The later classification in §4 is: `D^λ≠0` exactly for `e`-restricted `λ` in these conventions.  Thus the simple labels are not all partitions at finite quantum characteristic.

**Proof route actually read.** Row-standard coset representatives give a spanning set.  A straightening induction plus the `S_n` tableau count proves it is a basis.  Proposition 3.16 is the critical column exclusion: multiplication by a row symmetrizer cannot introduce a Murphy term whose corresponding entries lie in one column.  This converts lexicographic triangularity to dominance ideals; the anti-involution and triangular action prove cellularity.  Apply the Chapter 2 form/radical theorem, rather than assuming a modular Specht is irreducible.

**Worked example/boundary.** The Chapter 2 `S_3` cell basis is the smallest fully explicit example.  The source's p. 25 warning matters: a source using the Dipper--James Specht indexing needs conjugation/duality translation.  At `q=1` in characteristic `p`, `e=p`; e-restricted labels are therefore the source's dual convention for the usual `p`-regular labelling.  Never merge the two without saying which Specht convention is used.

**Likely scaffold disposition.** Proposed A-page core: Murphy basis -> cell form -> `D^λ` classification, then a B-page `S_3`/small-root-of-unity calculation and a convention counterexample.  It extends RG-9 exactly by replacing its `C` hypothesis with a field plus finite `e`, and by weakening “every Specht is irreducible” to a radical-quotient theorem.

### 4. JM triangularity and the strictly semisimple `e>n` seminormal range

**Locator.** Chapter 3 §3, printed pp. 26--31: Example 3.23, Proposition 3.24, Corollary 3.25, Theorem 3.30, Lemma 3.32, Proposition 3.33, Theorem 3.34 (Dipper--James).

**Hypotheses and conclusion.** The JM elements are

`L_k=q^{-1}T_{(k-1,k)}+q^{-2}T_{(k-2,k)}+...+q^{1-k}T_{(1,k)}`.

They commute pairwise; symmetric polynomials in them are central (Proposition 3.24 and Corollary 3.25).  For every ring `R`, every `λ⊢n`, and standard tableau `t`, Theorem 3.30 gives an upper-triangular action on the Murphy basis with diagonal eigenvalue `[res_t(k)]_q`:

`m_tL_k=[res_t(k)]_q m_t + Σ_{v ▷ t}a_vm_v`.

If `R` is a field **and `e>n`**, the residue sequences distinguish standard tableaux.  The interpolation idempotents `F_t` give an orthogonal seminormal basis `f_t`; Theorem 3.34 gives explicit `T_i` formulas (same row: `q`; same column: `-1`; otherwise a two-by-two formula).  This is not an arbitrary root-of-unity construction.

**Proof route actually read.** Proposition 3.24 is direct braid/quadratic-relation calculation and induction.  Theorem 3.30 inducts by deleting rows/entries, transports diagonal terms across adjacent swaps using the JM--`T_i` relations, and uses a Garnir tableau for the final first-column case.  Under `e>n`, Lemma 3.32 proves removable nodes have distinct residues; products of spectral projectors annihilate all higher tableaux.  Unitary triangular transition plus associativity of the cell form proves orthogonality, then commuting JM eigenvalues reduce each `T_i` action to at most the two tableaux `s` and `s(i,i+1)`.

**Worked example/boundary.** Example 3.23 lists, for `n=4`, `L_1=0`, `L_2=q^{-1}T_{(1,2)}`, `L_3=q^{-1}T_{(2,3)}+q^{-2}T_{(1,3)}`, and similarly `L_4`.  Example 3.29 has `e=3`, `λ=(4,2)` and a standard tableau with displayed residues.  At `e≤n`, distinct standard tableaux can share residue data, denominators in `F_t` need not be units, and Theorem 3.34 is unavailable; do not call it a modular seminormal form.

**Likely scaffold disposition.** Give agent 4 the main JM/seminormal page.  This report supports one precisely limited Hecke lemma and example, dependent on cellular Spechts and explicitly requiring `e>n`.  General modular branching/KLR should remain agent 5/6 territory.

### 5. q-Schur lift: semistandard basis, Specht filtrations, and dominance of decomposition numbers

**Locator.** Chapter 4 §§1--3, printed pp. 36--44: Theorem 4.8, Theorem 4.10 (Murphy), Corollary 4.11, Theorem 4.14 (R. Green), Theorem 4.16 (Dipper--James), Corollary 4.18, Proposition 4.19, Theorem 4.20.

**Hypotheses and conclusion.** For compositions of `n` with at most `d` parts, `S(d,n)=End_H(⊕_μM^μ)`.  Theorem 4.10 gives a basis of `M^μ` indexed by a semistandard tableau `S` of type `μ` and a standard tableau `t`; Corollary 4.11 filters `M^μ` by Spechts, with multiplicity the number of semistandard tableaux of the relevant shape/type.  Theorem 4.14 gives the cellular semistandard basis `{φ_{ST}}` of `S(d,n)`.  Over a field, Weyl cell modules `W^λ` have nonzero simple heads `L^λ` and all simples of `S(d,n)` occur so (Theorem 4.16).  Corollary 4.18 states

`[W^λ:L^λ]=1`, and `[W^λ:L^μ]>0` implies `λ ▷ μ` (dominance in the source convention).

When `d≥n`, the Schur functor sends `W^λ` to `S^λ` and `L^λ` to `D^λ`; for `e`-restricted `λ`, it identifies the corresponding diagonal-column decomposition multiplicities (Proposition 4.19).  Theorem 4.20 supplies the double-centralizer property.

**Proof route actually read.** The Hom-basis/double-coset calculation gives the semistandard basis.  Summing Murphy elements over standard tableaux of a fixed type gives a triangular spanning argument, hence the Specht filtration.  The cellular theorem turns the semistandard basis into Weyl forms and simple heads.  The dominance assertion is the Chapter 2 cellular triangularity.  The Schur-functor comparison is an idempotent/corner calculation followed by deleting zero non-`e`-restricted simple factors from a composition series.

**Example/boundary.** The Specht filtration is a filtration, not generally a direct sum.  When `d<n`, the exact Schur-functor comparison stated in Proposition 4.19 is unavailable; do not quote it without `d≥n`.  Likewise, dominance only zeros out forbidden positions—it does not compute the remaining decomposition numbers.

**Likely scaffold disposition.** Keep a minimal q-Schur/Schur-functor interface as an advanced dependency leaf, useful for the Jantzen proof and explaining why Hecke decomposition matrices inherit dominance.  Do not make general polynomial `GL_d` representation theory a prerequisite for elementary modular Specht pages.

### 6. Gram determinants, Jantzen filtration, and what the sum formula can and cannot compute

**Locator.** Chapter 5 §§1--2, printed pp. 46--60: Theorem 5.27 (Gram determinant), Lemma 5.29 (Jantzen), Lemma 5.30, Theorem 5.31 (Jantzen Sum Formula), Corollary 5.32 (q-Schaper Theorem), Example 5.33.

**Hypotheses and conclusion.** Let `R` be a PID, `p` a prime, `F=R/pR`, `q=\hat q+pR`, and assume `[n]!_{\hat q}≠0` in `R`.  A free module with nondegenerate symmetric form has Jantzen filtration `M_F(i)` and Lemma 5.29 says the `p`-valuation of its Gram determinant equals `Σ_{i>0}dim_F M_F(i)`.  Theorem 5.31 expresses the virtual sum `Σ_{i>0}W_F^λ(i)` through rim-hook moves weighted by differences of valuations of quantum hook lengths.  Corollary 5.32 applies the Schur functor to give the analogous virtual identity for Spechts.

**Proof route actually read.** Theorem 5.27 first orthogonalises a generic semistandard basis, rewrites the determinant using beta numbers/rim-hook moves, then specialises.  Smith-normal-form diagonalisation of the pairing proves the valuation lemma.  Weight-space dimensions form a unitriangular semistandard-tableau matrix (Lemma 5.30), so equality of all those dimensions forces equality in the Grothendieck group.  The Schur idempotent transports the Weyl formula to Spechts.

**Worked example/boundary.** Example 5.33 treats `λ=(3,2)` at `q=-1` (`e=2`).  Its Jantzen calculation eventually yields `d_{(3,2),(2,2,1)}=1`; before the extra dimension/filtration arguments, the formula only bounds an entry by `1` or `2`.  This is the required warning: a Jantzen sum is a **virtual radical-layer identity and upper-bound device**, not a general closed solution of modular decomposition numbers.

**Likely scaffold disposition.** Advanced optional A-page: define the filtration and prove the valuation lemma; state the q-Schaper formula with all PID/lift assumptions; work the `(3,2), e=2` example; include an explicit “not a general decomposition algorithm” remark.  It relies on q-Schur material and should not be a prerequisite for simple classification.

### 7. `e`-cores, blocks, and the open general irreducible-Specht problem

**Locator.** Chapter 5 §§3--4, printed pp. 60--65: Lemma 5.34, Theorem 5.36, Corollary 5.37, Proposition 5.38, Theorems 5.39--5.40 and the printed discussion immediately before Theorem 5.40.

**Hypotheses and conclusion.** Remove rim `e`-hooks from `λ`; Lemma 5.34 proves the resulting `e`-core is well-defined by the `e`-runner abacus.  If `F` is a field and **`d≥n`**, Weyl modules `W_F^λ,W_F^μ` lie in the same q-Schur block iff `λ,μ` have the same `e`-core (Theorem 5.36).  For every rank `r`, Specht modules `S_F^λ,S_F^μ` for the type-A Hecke algebra lie in the same block iff their labels have the same `e`-core (Corollary 5.37); at `q=1` this is the symmetric-group Nakayama block theorem in the source's labelling convention.

For a weight-one `e`-core block, Proposition 5.38 gives exactly `e` partitions `λ_1 ▷ ... ▷ λ_e` and adjacent decomposition pattern `d_{λ_j,λ_k}=δ_{jk}+δ_{j+1,k}`.  Theorem 5.39 gives a hook-valuation criterion for Weyl irreducibility.  Theorem 5.40 gives the matching criterion for `S_F^λ` **only when `λ` is e-restricted** and under the PID/lift condition `[n]!_{\hat q}≠0`.

**Proof route actually read.** The abacus turns removing an `e`-hook into lifting one bead; pushing all beads as high as possible is order-independent.  The forward block implication uses nonzero Jantzen terms, which move `e`-hooks and preserve core.  The converse repeatedly moves a removable `e`-rim hook to the first row, producing a nonzero Jantzen linkage and inducting.  The Hecke statement uses the double centralizer to rule out a lost block.  The irreducibility test makes the radical vanish if every relevant valuation difference vanishes; conversely choose a dominance-minimal nonzero Jantzen term to force a lower simple factor.

**Worked example/boundary.** For `e=3`, the source reduces `(4,3,2,1)` to 3-core `(1)` and displays this on an abacus (p. 61).  Weight zero has one partition: its Weyl/projective/indecomposable projective are simple; this is a block-size statement, not an assertion about arbitrary positive weight.  The source explicitly says just before Theorem 5.40 that classification of irreducible Specht modules, even for symmetric groups, is an **open problem** except characteristic 2 at the time; its theorem supplies the e-restricted case only.  Therefore no scaffold may advertise a universal irreducible-Specht criterion or a solved general decomposition-number problem.

**Likely scaffold disposition.** Proposed block A-page: e-abacus/core definition and proof; q-Schur/Hecke block theorem; weight-zero and weight-one worked leaves.  A later irreducibility page must separate the full Weyl criterion from the restricted Specht criterion, preserve the lifting hypotheses, and flag the general classification as open/deferred.

## Cross-source/convention checks

* Agent 1's James 1978 report uses right modules too, but covers ordinary character methods.  Its characteristic-zero classification cannot be transported to the `q=1`, characteristic-`p` line here: the latter has `e=p`, cellular radicals, and a restricted simple labelling.  Both sources use dominance triangularity, but here it constrains composition factors rather than character-table reconstruction.
* Agent 2's symmetric-functions report owns tableaux/Littlewood--Richardson conventions.  Mathas uses semistandard tableaux to index q-Schur bases and Specht filtrations, compatible with row-weak/column-strict conventional tableaux, but its actual theorem is an endomorphism-algebra/cellular statement—not an LR outer-product rule.  Keep those ownership lines separate.
* Mathas's dual-Specht warning (printed p. 25) is a necessary convention translation for any James/Dipper--James citation.  We should choose one scaffold convention once and put the conjugation translation directly beside it.
* The narrow `e>n` seminormal statement agrees in spirit with agent 4's proposed JM material, but it is deliberately not evidence for arbitrary modular/JM theory.  The KLR/cyclotomic and modular-branching interfaces require agent 5/6 sources.

## Closing audit

| audit field | result |
|---|---|
| complete sources retrieved and validated | 1 complete prepublication textbook manuscript |
| sources actually read in relevant ranges | 1, all five substantive chapters plus back matter |
| retrieval failures/replacements | Full 188-page AMS edition not legally retrievable from author/publisher endpoints; official preview/end matter was not counted.  University-hosted complete earlier manuscript used with its edition gap recorded. |
| key proof/prerequisite gaps | No independently retrieved second full treatment for cellular/q-Schur proofs; no full-source evidence here for Chapter 6 canonical bases, adjustment matrices, or modular branching; no KLR/cyclotomic proof route. |
| explicit unresolved boundary | General modular decomposition numbers and general irreducible-Specht classification are not solved.  Jantzen/Schaper supplies constraints and special calculations, not a universal positive formula. |
| recommended independent proof checks | The published Mathas 1999 edition (especially its Ch. 6/appendices) if lawful access is available; Dipper--James for the original Specht convention; a modern Kleshchev/Brundan--Kleshchev or KLR source from agents 5--6 for modular branching, canonical bases, and graded/cyclotomic upgrades. |
| files for integration | `research/symmetric-group-planning/agent-3-textbook-modular-hecke.md` only; ignored PDFs, extraction, and retrieval-audit artifacts remain under `scratchpad/source-cache/symmetric-groups/modular-hecke-textbook/`. |

