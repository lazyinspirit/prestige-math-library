# Agent 1 — ordinary symmetric-group textbook report

## Agent record

| field | record |
|---|---|
| canonical agent/task name | `/root/symmetric_scaffold/symr_textbook_ordinary` |
| model | `gpt-5.6-terra` |
| reasoning effort | `high` |
| exact assignment | Retrieve, validate, and read a complete authoritative textbook on ordinary representations and characters of symmetric groups; harvest character computation, induction products, and ordinary matrix methods beyond RG-8--RG-11. |
| start state | Read `CLAUDE.md`, `README.md`, `research/symmetric-group-planning.task.md`, this report contract, and the RG-8--RG-11 prose in `research/plan-representation-theory-groups-track.md`.  Those RG pages are proposed rather than published and already own tableaux/tabloids, characteristic-zero Specht classification, branching/Young's rule, hook lengths, RSK, and their stated Schur--Weyl interface. |
| completion state | One complete authoritative textbook was retrieved, validated, text-extracted, and read in the ranges recorded below.  This report is the only tracked file written by this agent; the PDF and extraction are ignored cache files. |

## Full-text evidence

### Counted source 1

* **G. D. James, _The Representation Theory of the Symmetric Groups_, Lecture Notes in Mathematics 682, Springer-Verlag, Berlin/Heidelberg/New York, 1978.**  Source type: **textbook** (the title/copyright and LNM imprint are on PDF pp. 1--2; its 26-chapter contents runs through references and index).  It is an actual course-book-length textbook, not the similarly named James--Kerber monograph, a preview, or short notes.
* Legitimate university-hosted full-text URL retrieved: <https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf>.  The source host is the University of Minnesota CSE domain.  Publisher bibliographic confirmation and the 26-chapter contents are available at [Springer Nature](https://link.springer.com/book/10.1007/BFb0067708).  The University copy delivered a complete scan; the first pages carry the Springer copyright notice, so this cache is research evidence only and is not redistributed.
* Original absolute cache path: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/ordinary-textbook/james-1978-representation-theory-symmetric-groups.pdf`.
* SHA-256: `e339ca5fb1ff9d78874c21c0dd6f7ce609ef94cc805d9921d824424c0712babc`.
* Validation: initial bytes are `%PDF-1.7`; `mutool info` reports **161 PDF pages**.  The file ends in a final `%%EOF`; the book's printed contents specifies references at pp. 153--154 and index at pp. 155--157, and the extracted terminal PDF pages contain the index entries through “Young's Rule.”  Thus the last substantive matter is present, rather than a preview stopping at a chapter boundary.
* Text inspection: `mutool draw -F txt` succeeded without OCR, producing `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/ordinary-textbook/james-1978-representation-theory-symmetric-groups.txt` (255,542 bytes; 19,265 lines).  Diagrams/matrices are imperfect in linear text, so theorem statements, page boundaries, and examples were checked against the PDF page images where the text layout was ambiguous.
* Actually read: preface and contents (printed pp. iii--v); §§4--6 (printed pp. 13--26); §9 (pp. 34--35); §§14--16 (pp. 51--64); §§18--21 (pp. 73--86); and §25 (pp. 114--124).  §§10--13 and 22--24 were inspected only enough to identify their modular scope and are not used as ordinary-theory evidence below.  The book has no Frobenius-characteristic chapter and no Jucys--Murphy terminology; that absence is recorded rather than filled in from memory.

### Retrieval decision and failures

The desired ordinary-character textbook was James 1978.  The direct complete university copy succeeded, so no replacement was necessary and there are **no counted-source retrieval failures**.  I did not count Springer’s subscription/preview page as source text.  James’s characteristic-free presentation has substantial modular chapters, but the harvested material below is restricted to its ordinary-character and real/complex matrix chapters; this does not trespass on the modular or Hecke researcher assignments.

## Conventions and overlap audit

James writes right modules and uses `G_n` for the symmetric group; this report translates it to the conventional left-action notation `S_n` only when naming a possible scaffold claim.  In James, `[λ]` is a Specht-character label and `X^λ` its ordinary irreducible character.  All ordinary claims below are over a splitting field of characteristic zero (usually `C`; §25 explicitly works over `R`).  A “skew hook” is a connected removable rim strip, and its leg length is the number of vertical steps/rows minus one in the usual convention.

| material | existing or team owner | disposition |
|---|---|---|
| tableaux/tabloids, Specht construction and complex classification | RG-8/RG-9 | **Inherited**, not re-proposed.  James §§3--5 and Theorem 4.12 corroborate them but do not create SYMR copies. |
| ordinary branching, Young’s rule, hook formula | RG-10/RG-11 | **Inherited**, not re-proposed.  James Theorems 9.2, 14.1, and 20.1 may be proof checks only. |
| Littlewood--Richardson induction product, determinantal relation, Frobenius characteristic | symmetric-functions/tableaux researcher (researcher 2), with induction-products/asymptotics researcher (researcher 7) for product/stability interfaces | **Shared/deferred.**  James §§16 and 19 support the ordinary induced-product side but do not formulate the Frobenius characteristic.  Do not make an orphan duplicate here. |
| Jucys--Murphy elements, Gelfand--Tsetlin/seminormal theory | researcher 4 | **Deferred.**  James §25 supplies Young’s orthogonal form (a compatible ordinary matrix realisation), but no JM eigenvalue construction. |
| modular Specht simples, blocks, decomposition matrices | researcher 3/5 | **Out of scope** for this report. |
| Murnaghan--Nakayama character recursion; all-character-table algorithm; Young orthogonal matrices | new symmetric-group scaffold, subject to lead integration | **Genuine ordinary extensions** beyond RG-8--RG-11.  Proposed roles below are deliberately not final IDs or pages. |

The translation from James’s right action to a left action changes `e_t(x-1,x)` to `(x-1,x)e_t` but leaves the stated eigenvalues and the two-by-two orthogonal coefficients unchanged because adjacent transpositions are self-inverse.  James’s §25 fixes the positive off-diagonal coefficient after Gram--Schmidt; a later seminormal/JM source may choose a different sign/phasing.  That is a basis convention, not a different representation.

## Mathematical harvest from sections actually read

### 1. Full character-table reconstruction from fixed-tabloid data

**Locator and heading.** James §6, “The character table of `G_n`,” printed pp. 22--26; Theorem 6.2, Corollary 6.5, Lemma 6.9, and Example 6.3.

**Precise setting and result.** Let `λ, μ, ρ ⊢ n`, ordered lexicographically; `X^λ` is the ordinary irreducible character and `M^λ` the Young permutation module.  James takes `A=(a_{λρ})` with `a_{λρ}=|S_λ∩C_ρ|`, where `S_λ` is the Young subgroup and `C_ρ` the conjugacy class of type `ρ`.  He scales the multiplicity matrix by subgroup orders: its entries are `|S_λ|⟨X^μ,1_{S_λ}^{S_n}⟩` (with the row/column placement chosen so that it is upper triangular).  Thus it has non-negative integral entries and diagonal `|S_λ|`.  Theorem 6.2 states that this triangular matrix is uniquely determined by

`Σ_μ b_{λμ}b_{νμ}=Σ_ρ z_ρa_{λρ}a_{νρ}`,  where `z_ρ=n!/|C_ρ|`,

and, after making James’s consistent character/subgroup index choice, that the character table is recovered by `C=B(A^T)^{-1}`.  Corollary 6.5 derives `det C` as the product of every part of every partition of `n`.  Lemma 6.9 gives the concrete standard character formula `X^{(n-1,1)}(π)=#Fix(π)-1`.

**Proof architecture actually exposed.** The book identifies the scaled permutation-character inner products with `B`, uses Young-subgroup/conjugacy-class intersection counts to calculate `BB^T`, then solves one triangular entry at a time from non-negativity.  The identity `B=CA^T` gives `C`.  The determinant follows from triangular determinants.  Lemma 6.9 subtracts the trivial summand from the permutation representation on `n` points.

**Worked example/boundary.** Example 6.3 explicitly computes `A`, `B`, and `C` for `S_5`; it warns that columns are in reverse of the usual character-table order because rows and columns use the same dictionary order.  Lemma 6.9 immediately produces four rows (`(n)`, `(n-1,1)`, sign, and its sign twist), but does **not** by itself supply the whole table.

**Scaffold disposition.** Proposed ordinary-character-computation A-page ingredient: a theorem for the fixed-tabloid/triangular reconstruction and a small `S_5` worked table.  It depends on inherited RG-8 permutation modules, RG-9 complex Specht classification, and the existing finite-character inner product/induction prerequisites.  It must state an ordering convention and not claim an efficient algorithm without the class fixed-point data.  It is a good alternative to, rather than duplicate of, Murnaghan--Nakayama: James explicitly distinguishes the all-table method from the “few entries” recursion.

**Independent-treatment/convention audit.** Existing RG prose cites Chan for the prerequisite permutation/Specht results, whereas James uses the same tabloid mechanism and right modules.  No independently retrieved full text was read by this agent for the reconstruction formula, so an integrator should obtain a second verification before calling its proof route two-source backed.

### 2. Outer induction product and the Littlewood--Richardson rule

**Locator and heading.** James §16, “The Littlewood-Richardson Rule,” printed pp. 60--64; Definition 16.1, Lemmas 16.2--16.3, Theorem 16.4, Corollary 16.5, and the explicit product example that continues at pp. 52--53 (Example 14.5).

**Precise setting and result.** For proper partitions `λ ⊢ n-r` and `μ ⊢ r`, `[λ][μ]` denotes the ordinary character of `(S^λ ⊠ S^μ)↑^{S_n}` expressed in irreducible labels.  Definition 16.1 counts fillings of `ν/λ` of content `μ` that are weakly increasing along rows, strictly increasing down columns, and whose right-to-left row reading word satisfies James’s good-sequence (lattice) condition.  Theorem 16.4 proves that this count is exactly the multiplicity of `[ν]` in `[λ][μ]`.  Therefore the coefficient is a non-negative integer and computes the decomposition of the outer induction product.  This is not a statement about the internal/Kronecker product.

**Proof architecture actually exposed.** James defines operators `[μ]''` on the free additive group of diagrams, proves `[0]^{[0,μ]}=[μ_1]\cdots[μ_k]` (Lemma 16.2), then shows the bad-letter replacement operator splits recursively (Lemma 16.3).  Repeated recursion expresses the relevant operators in the row-character basis; the two sides agree on all diagrams, proving Theorem 16.4.  Corollary 16.5 gives the operator composition relation and shows branching as a special case.

**Worked example/boundary.** Example 14.5 evaluates

`[3,2][2]=[5,2]+[4,3]+[4,2,1]+[3,2,1]+[3,2,2]`.

The book explicitly says the branching theorem is a special case.  This is therefore not a license to repeat RG-10 branching; it is the strictly stronger Young-subgroup induction product.  It also does not solve Kronecker coefficients.

**Scaffold disposition.** Defer main ownership to researcher 2/7.  A SYMR page may depend on their outer-product result, or house a small interface lemma identifying it with Young-subgroup induction, but must not duplicate their tableau/symmetric-function proof.  Exact prerequisites include complex semisimplicity and the classification of `S_a×S_b` simples as exterior tensor products; James states the latter before §16.

**Agreement/convention audit.** The existing RG-10 plan already owns Young’s rule, and describes `S^λ↑` under Young subgroups.  James’s `[λ][μ]` is that induced product, so the notation must not be confused with tensor/Kronecker multiplication.  A Frobenius-characteristic formulation is absent from James and must come from researcher 2 rather than be inferred here.

### 3. Determinantal character identity and hook-based character recursion

**Locator and heading.** James §§18--21, printed pp. 73--86: Definitions 18.2, Lemma 18.4; §19 “The Determinantal Form,” Theorem 19.2 and Examples 19.3--19.4; §21 Theorem 21.1 and Examples 21.2.

**Precise setting and result.** For a proper partition `λ=(λ_1,\ldots,λ_k)`, set `[m]=0` for `m<0` and `[0]` as the multiplicative identity.  James’s Theorem 19.2 proves the ordinary virtual-character identity

`[λ]=det([λ_i-i+j])_{1≤i,j≤k}`.

Here `[a_1]\cdots[a_k]` is the induced Young-subgroup permutation character, not a symmetric-function symbol.  Theorem 21.1 (Murnaghan--Nakayama) says: if `πp∈S_n`, where `p` is an `r`-cycle and `π` permutes the other `n-r` letters, then

`X^λ(πp)=Σ_{λ/ν is a removable skew r-hook}(-1)^{leg(λ/ν)}X^ν(π)`.

The sum is zero if no such hook exists.  With `r=1`, this is the character form of ordinary branching.

**Proof architecture actually exposed.** The determinantal proof inducts on nonzero parts, Laplace-expands the final column, and uses the LR description of adding a horizontal strip: all non-`λ` diagrams cancel in pairs.  For Murnaghan--Nakayama, James first proves the `n`-cycle column formula (Theorem 21.4) by constructing an alternating hook-character vector orthogonal to every other column.  Lemma 21.5 uses LR to count the multiplicity in `[ν][x,1^{r-x}]`: a union of `m` skew hooks with `c` columns gives `binom(c-x,m-1)`.  Alternating that count kills every `m≠1`, leaving exactly one rim hook and its sign.  Thus the proof does not merely assert the recursion; it exposes why connected skew hooks survive.

**Worked examples/boundaries.** For `λ=(5,4,4)`, Example 21.2 computes `X^{(5,4,4)}(5,4,3,1)=-1` by successive 5-, 4-, then 3-hook removals; it also obtains value `2` on `(7,3,3)`.  The same example shows it is zero on any class containing a cycle of length `8,9,10,11,12,13`, since no corresponding removable rim hook exists.  This demonstrates that removing an arbitrary disconnected rim set is invalid.

**Scaffold disposition.** Strong proposed new ordinary-character A-page: define removable rim hooks/leg length; prove the `n`-cycle hook-character lemma; derive the general recursion using the LR count (or cite it as a supplier if ownership remains researcher 2); then calculate a nontrivial character value and a forced-zero example.  Depend on RG-8 diagrams, RG-9 ordinary characters, RG-10 induction/branching, and an LR supplier.  Do not state it in modular characteristic, and do not repackage `r=1` as a new branching theorem.

**Agreement/convention audit.** James treats a skew hook as a connected removable rim component and defines its leg through the corresponding ordinary hook; later sources often say “border strip” and define leg as rows minus one.  These agree.  The current RG-11 hook definition has the same anchor/arm/leg convention, so it can be inherited.  Independent proof checking should use a symmetric-functions account of the power-sum multiplication rule (recommended below); James itself presents an alternate determinantal derivation only as an outline after Lemma 21.12.

### 4. A generalised r-cycle filter (useful but not a block theorem)

**Locator and heading.** James §21, Theorem 21.7 and Examples 21.8, printed pp. 83--84.

**Precise setting and result.** For `ν⊢n-r`, form the virtual ordinary character

`Θ_{ν,r}=Σ_{λ: λ/ν removable skew r-hook}(-1)^{leg(λ/ν)}X^λ`.

Theorem 21.7 proves that `Θ_{ν,r}` vanishes on every conjugacy class of `S_n` except classes whose cycle type has an `r`-cycle.  Equivalently, it is obtained by inducing `X^ν` against the alternating hook combination `[r]-[r-1,1]+\cdots+(-1)^{r-1}[1^r]` and is supported only where an `r`-cycle can occur.

**Proof architecture actually exposed.** The same binomial cancellation from Lemma 21.5 identifies the alternating hook product with the signed rim-hook sum.  The `n`-cycle special case/induction argument then forces support into the relevant Young subgroup and ultimately the r-cycle-containing classes.

**Worked example/boundary.** With `ν=(3,2)` and `r=3`, Example 21.8 gives `X^{(6,2)}-X^{(4,4)}-X^{(3,2,2,1)}+X^{(3,2,1,1,1)}`, zero on classes of `S_8` with no 3-cycle.  This is a *virtual-character support statement*, not a claim that each constituent vanishes there, nor a general block-classification theorem.

**Scaffold disposition.** Optional advanced companion/example after Murnaghan--Nakayama, or an inline lemma rather than a standalone item.  It gives a useful character-table relation and later modular applications, but its latter applications belong to researchers 3/5.  Preserve the exact `ν⊢n-r` and ordinary-character hypotheses.

**Agreement/convention audit.** The r-cycle condition is on the conjugacy class, not merely the order; a class can have order divisible by `r` without having an r-cycle.  This is the crucial boundary that should be checked against any alternate treatment.

### 5. Defect-zero-type forced zeros (ordinary character statement only)

**Locator and heading.** James §21, Corollary 21.6 and its remark, printed p. 83.

**Precise setting and result.** Let `p` be prime and `λ⊢n`.  If no entry of the hook graph of `λ` is divisible by `p`, then the ordinary irreducible character `X^λ` is zero on every permutation whose order is divisible by `p`.  The exact hypothesis is about every hook length, not merely the size of `λ` or a p-core label.

**Proof architecture actually exposed.** A p-singular permutation has a cycle of length `kp` for some `k>0`.  The hook hypothesis means there is no removable skew `kp`-hook (James’s Lemma 18.4 supplies hook/skew-hook correspondence); Murnaghan--Nakayama makes its value zero.  The remark identifies the hypothesis with `|S_n|/deg X^λ` prime to `p` through the hook formula and recognizes the general defect-zero character phenomenon.

**Worked example/boundary.** The `λ=(5,4,4)` zero boundary from Example 21.2 is a direct rim-hook test, but is not itself a p-uniform example.  The safe scaffold counterpoint is: failure of the no-divisible-hook hypothesis gives no converse; a character can still vanish on a particular p-singular class through cancellation among several removable hooks.

**Scaffold disposition.** Optional corollary after Murnaghan--Nakayama, labelled as an ordinary-character vanishing criterion.  It should not enter a modular blocks page or be misstated as a classification of defect-zero blocks.  Its proof consumes inherited hook lengths (RG-11) and the new MN recursion.

**Agreement/convention audit.** James calls the hook-length array a “hook graph”; later sources commonly say hook-length diagram.  Both mean the same set of integers.  A modular source can independently check the defect-zero interpretation, but that proof is outside this ordinary report.

### 6. Young’s orthogonal form: explicit adjacent-transposition matrices

**Locator and heading.** James §25, “Young’s Orthogonal Form,” printed pp. 114--124; preliminary action (25.1) and Example 25.2, Theorem 25.3, Young’s Orthogonal Form 25.4, and Lemma 25.5.

**Precise setting and result.** Let `λ⊢n`, work over `R`, order standard `λ`-tableaux by a total order extending James’s tabloid partial order, and Gram--Schmidt the standard-polytabloid basis to an orthonormal basis `{f_t}`.  Theorem 25.3 says this basis is independent of which such linear extension is chosen.  For adjacent `s_x=(x-1,x)`, if `x-1` is in position `(i,j)` and `x` in `(k,l)` of `t`, Young’s orthogonal form (25.4) is

`f_t s_x = a f_t+b f_{t s_x}`,  `a=(i-k+l-j)^{-1}`,  `a^2+b^2=1`,  `b>0`.

When the swapped tableau is not standard (the entries are in one row or one column), the second term is absent and `b=0`; the action is `+f_t` for a common row and `-f_t` for a common column.  The formula needs characteristic zero and the real positive-inner-product normalisation; it is not a modular seminormal assertion.

**Proof architecture actually exposed.** James starts with the three easy polytabloid action cases (25.1), proves the partial-order compatibility under swaps (Lemma 25.5), and inducts through the restriction filtration from §9.  For `x<n`, the deletion maps transport the form from `S_{n-1}` and prove the coefficients.  For `(n-1,n)`, he makes swapped standard tableaux adjacent in a compatible total order, obtains the invariant two-dimensional orthogonal span, fixes `b>0`, then uses small `S_3` character constraints in the remaining axial-distance cases to determine `a`.  This is a real proof plan, not just a formula lookup.

**Worked example/boundary.** Example 25.2 writes the matrices of `(1\ 2),(2\ 3),(3\ 4),(4\ 5)` on the five standard-polytabloid basis vectors of shape `(3,2)` (the unorthogonalized “natural” form).  It displays why the all-fields natural basis has a less pleasant same-row calculation.  In orthogonal form, a same-column pair has eigenvalue `-1` and same-row pair `+1`; treating the swapped nonstandard tableau as a second basis vector is a concrete error.

**Scaffold disposition.** Proposed ordinary-matrix-method A-page after the character recursion and only after the inherited standard-basis material.  Suggested proof atoms: tabloid partial order; Gram--Schmidt triangularity; adjacent-transposition invariant span; axial-distance coefficient; Coxeter-generator matrices.  A B-page can calculate the `(3,2)` matrices and check `s_x^2=1`.  It must cite a separate researcher-4 JM/seminormal page if it later wants content eigenvalues or simultaneous diagonalization; James’s proof here does not supply them.

**Agreement/convention audit.** In a left-module convention the displayed formula is read with `s_x` on the left.  James chooses `b>0`; replacing `f_{ts_x}` by its negative changes the off-diagonal sign but not `a` or the isomorphism class.  The axial distance used here is `i-k+l-j` (row difference plus column difference in James’s displayed positions); it should be declared rather than silently matched to a source using the reciprocal/content-difference convention.

## Results found but deliberately not proposed here

* James Theorem 9.2 is ordinary induction/restriction branching and Theorem 9.3 is its arbitrary-field Specht filtration.  RG-10 already owns both the characteristic-zero direct-sum conclusion and the filtration boundary.  The only use here is as input to §25 and the `r=1` instance of MN.
* Theorem 20.1 is the hook formula; RG-11 owns it.  It validates the degree input in §21 but receives no duplicate SYMR item.
* The characteristic-free/modular material in §§10--13 and 22--24 is substantial but intentionally not harvested as a modular theory proposal.  In particular, no claim here treats a general decomposition-number problem as solved.
* There is **no Frobenius characteristic result** and **no Jucys--Murphy/seminormal construction** in the read James ranges.  The latter phrase should not be retroactively applied to Young’s orthogonal form.  Researcher 2 and researcher 4 must supply those sources and their hypotheses.
* Nothing read asserts a positive general combinatorial Kronecker rule.  The only product calculated by §16 is outer induction from a Young subgroup.

## Closing audit

| audit question | answer |
|---|---|
| complete sources retrieved | 1 textbook |
| complete sources actually read in relevant ranges | 1 textbook, sections/pages listed in the full-text evidence |
| retrieval failures/replacements | None: the selected James textbook was fully retrieved from the University of Minnesota host.  The Springer page was treated only as bibliographic confirmation, never as text evidence. |
| principal proposed ordinary extensions | fixed-tabloid all-character-table reconstruction; Murnaghan--Nakayama recursion and its r-cycle filter/vanishing corollary; Young’s orthogonal form. |
| proof/prerequisite gaps | The MN proof uses LR/outer product machinery, so it needs an explicit supplier interface from researcher 2 or 7.  The character-table reconstruction needs a second independent proof source before a two-treatment matrix can claim coverage.  Young’s orthogonal form is not a JM construction; its connection to seminormal forms must wait for researcher 4.  Frobenius characteristic is absent from this source. |
| recommended independent checks | Bruce Sagan, _The Symmetric Group_, for ordinary character computations and tableaux; I. G. Macdonald, _Symmetric Functions and Hall Polynomials_, for the Frobenius-characteristic/power-sum proof of MN; A. Okounkov--A. Vershik, “A New Approach to Representation Theory of Symmetric Groups,” for the JM/Gelfand--Tsetlin comparison.  These are recommendations only, not retrieved/countable sources in this report. |
| exact tracked integration file | `research/symmetric-group-planning/agent-1-textbook-ordinary.md` |
