# Frontier 13 — Step 6a independent reader 3

## Scope and method

I opened and read all **88/88 assigned items**: 26 + 12 + 34 + 16 in the four dispatched pages. I also opened every cited item needed to check the `[F#]`/`[A#]`/`[L#]` restatements, including **51 distinct cited dependencies outside this batch**. I checked all 224 numbered derivation steps in the 76 proof-bearing contracts, both directions of each biconditional, the stated boundary cases, titles and Statements against their proofs, and the provenance fields.

The strict mechanical checks agree on shape: `proof-contract.mjs --strict` checked 76/76 contracts with no mechanical errors or warnings, and `content-policy.mjs --audit --manifest-only` checked all 88 manifest items with no errors or warnings. The findings below are semantic defects those checks do not detect.

All 88 mathematical-content items have both `provenance.statement` and `provenance.proof`. Eleven Statements are labelled `ai-generated`; all eleven are B-page leaves, none is used as a `deps` target anywhere on disk, and I checked their displayed witnesses/calculations directly. I found no doubtful AI-generated claim or counterexample to one.

## Findings

### `diagonalisation-and-the-minimal-polynomial` (26/26 opened)

1. **Page summary, second paragraph, final clause (page line 36): missing hypothesis — fatal.** The summary says that the page yields “simultaneous diagonalisation of a commuting family.” The proved theorem is only for a commuting family **whose members are each diagonalisable**. Pairwise commutativity alone is insufficient: the companion item `cex-commuting-endomorphisms-need-not-be-diagonalisable` gives the commuting pair $J,I$ with $J$ a non-diagonalisable Jordan block. The summary therefore states a false overstrengthening by omitting a load-bearing hypothesis.

2. **`thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`, `[L7]` and proof step 1.1 (item lines 48 and 54): cited domain enlarged — fatal.** `[L7]` restates `thm-determinant-of-a-triangular-matrix` without its explicit hypothesis $n\geq1$. The cited Statement is only for triangular matrices in $M_n(R)$ with $n\geq1$, while this theorem explicitly includes $V=0$ and step 1.1 is written for every diagonalisable $T$. Step 3.1 correctly states the empty-basis case, so the theorem is true, but it does not make the `[L7]` restatement accurate or license the use of `[L7]` at dimension zero. Step 1.1 must be restricted to $\dim V>0$ (with step 3.1 handling zero), or the empty-determinant case must be supplied from a source that states it.

3. **`thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`, proof step 1.2 (item line 56): one input omitted — polish.** From “$\chi_T$ splits,” the step counts all its linear factors as algebraic multiplicities of eigenvalues. That needs the explicit fact that the roots of $\chi_T$ are exactly the eigenvalues. None of `[L1]`, `[L4]`, or `[L6]` states that link; the on-disk item `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial` does. This is a standard sub-30-second bridge, so it is polish rather than fatal, but it is a fact absent from the step's declared inputs.

No other defect was found in the remaining 25 items on this page.

### `diagonalisation-and-the-minimal-polynomial-examples` (12/12 opened)

No finding. I checked every displayed matrix/polynomial witness and every verification step, including the rational primary-decomposition calculation and both directions implicit in the false-statement examples.

### `inner-product-spaces-and-orthogonality` (34/34 opened)

4. **`thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `[L2]` and proof step 1.1 (item lines 40 and 50): inaccurate citation — fatal.** `[L2]` claims that coordinates in an orthonormal basis are inner products and cites `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`. The cited Statement says only that every finite-dimensional real or complex inner-product space has an orthonormal basis (empty in dimension zero); it says nothing about coordinate coefficients. Thus the citation does not state the fact used in step 1.1. The coefficient identity is available from the coordinate expansion in `thm-bessel-inequality-and-finite-parseval-identity`, or can be derived explicitly from orthonormality and the coordinate definition, but the current cited restatement is inflated.

5. **`thm-gram-determinant-detects-linear-independence`, `[L4]`, `[L7]`, and proof step 2.1 (item lines 38, 44, and 54): cited domains enlarged — fatal.** Both `thm-determinant-multiplicative` and `thm-determinant-of-transpose` explicitly assume $n\geq1$, as does `thm-determinant-of-a-triangular-matrix`; `[L4]` and `[L7]` omit those restrictions. Step 2.1 begins under “the list is independent,” which includes the empty list, and applies all three results. Step 3.1 later handles $r=0$ correctly, so the theorem remains true, but the cited statements do not license step 2.1 as written at $r=0$. State $r>0$ in steps 1.2/2.1 and reserve the empty case for step 3.1, or cite determinant results that include $0\times0$ matrices.

6. **`cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`, `[L5]` and proof step 1.2 (item lines 44 and 52): cited domain enlarged — fatal.** `[L5]` says without qualification that transposition preserves determinant, but its cited target `thm-determinant-of-transpose` states the result only for $n\geq1$. The corollary and step 1.2 include a zero-dimensional space; step 2.1 separately gives the correct empty determinant. As above, that later case split preserves the mathematical conclusion but does not preserve the cited theorem's domain in `[L5]` or explicitly restrict step 1.2 to positive dimension.

No other defect was found in the remaining 31 items on this page.

### `inner-product-spaces-and-orthogonality-examples` (16/16 opened)

7. **`ex-weighted-inner-product-on-finite-coordinate-space`, `[L3]` and verification step 2.1 (item lines 40 and 50): omitted one-line derivation — polish.** The cited `prop-orthogonal-projection-formula-and-linearity` states the formula $P_Wv=\sum_i\langle v,e_i\rangle e_i$ for an **orthonormal basis** $(e_i)$ of $W$. `[L3]` instead presents the formula for the line generated by an arbitrary nonzero $u$ as though it were the cited Statement. The cited proposition is sufficient after setting $e=u/\lVert u\rVert$ and simplifying $\langle v,e\rangle e=\langle v,u\rangle\langle u,u\rangle^{-1}u$, so this is a sub-30-second bridge and not a fatal gap. The normalization should nevertheless be written rather than folded into the citation restatement.

No other defect was found in the remaining 15 items on this page.

## Per-page verdicts

| Page | Opened | Verdict |
|---|---:|---|
| `diagonalisation-and-the-minimal-polynomial` | 26/26 | **Fails independent read:** 2 fatal findings, 1 polish finding. |
| `diagonalisation-and-the-minimal-polynomial-examples` | 12/12 | **Clean independent read:** no findings. |
| `inner-product-spaces-and-orthogonality` | 34/34 | **Fails independent read:** 3 fatal findings. |
| `inner-product-spaces-and-orthogonality-examples` | 16/16 | **Pass with polish:** 1 polish finding, no fatal finding. |

**Assigned items actually opened: 88/88.**
