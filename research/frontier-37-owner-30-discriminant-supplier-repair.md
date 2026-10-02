# Discriminant criterion supplier repair

Date: 2026-10-01

## Scope and file evidence

This repair changes only `items/thm-ramified-primes-and-the-number-field-discriminant.md` and this report. The published Statement remains byte-for-byte unchanged, and no consumer, page, plan, ledger, receipt, certification, or gate file was edited here.

| Evidence | Before (`HEAD`) | After repair |
| --- | --- | --- |
| Item bytes | 1,178 | 12,727 |
| Item SHA-256 | `d77fc57440656a972011f5214eaa842d5ef5af806120ddf4dfc86c3e4843c669` | `c15fa5ef3985b1f7674a83413ec2db52e3618a837c8f701a78d8cf9f16d5e316` |
| Statement-section SHA-256 | `82aff0bb78d8e07bf51372a89c32e515efcb615eb40d751c7c9fbd174ac1437c` | `82aff0bb78d8e07bf51372a89c32e515efcb615eb40d751c7c9fbd174ac1437c` |

The statement hash is SHA-256 of the exact text following `## Statement` up to the next level-two heading. The status, statement, direct criterion, and unqualified choice-free interface are preserved. The prior proof's `verification.audited` and judge stamps were removed because that proof was replaced; the item now records only the selected `precheck: pass` result pending independent re-audit.

## Defect repaired

The former two-step proof asserted, without constructing or justifying the equivalence, that the trace-pairing radical modulo (p) is nontrivial exactly when the residue algebra is not a product of separable fields, and that this is equivalent to ramification. That line omitted the finite CRT decomposition, the ramified-factor nilpotent argument, the finite-field trace-pairing argument, and the reduction of the trace Gram determinant.

## Replacement argument

The proof now fixes an integral basis of (O_K) and sets (A=O_K/pO_K). It obtains the finite factorization (pO_K=\prod_i P_i^{e_i}) from the ZF factorization theorem. Each quotient (O_K/P_i) is a finite domain and hence a field. For distinct maximal (P_i,P_j), the binomial expansion of ((u+v)^{e_i+e_j-1}), with (u+v=1), proves (P_i^{e_i}+P_j^{e_j}=O_K); CRT then identifies (A) with the product of the prime-power quotients.

For a finite extension (E/F_p) of degree (f), the proof uses the (f) Frobenius automorphisms supplied by the finite-field Galois theorem. It forms the matrix (C=(\sigma^j(b_k))) for an (F_p)-basis (b_k). A row relation vanishing on the basis vanishes on all of (E^\times); Dedekind independence of the distinct characters (\sigma^j|_{E^\times}) makes (C) invertible. Conjugating each multiplication matrix by (C) proves directly that the field trace is (z+z^p+\cdots+z^{p^{f-1}}). The nonzero trace functional follows from the root bound: this polynomial is nonzero of degree (p^{f-1}<|E|=p^f). For every (x\ne0), pairing with (x^{-1}w), where the trace of (w) is nonzero, proves nondegeneracy. This handles (f=1) and (p=2) and does not use an infinite algebraic closure.

If every (e_i=1), the CRT product consists of finite fields over (F_p), so the trace pairing is the orthogonal direct sum of the nondegenerate finite-field pairings. If some (e_i>1), uniqueness of ideal factorization gives (P_i^{e_i}\subsetneq P_i). A class in (P_i/P_i^{e_i}) outside zero is nilpotent, and its CRT image gives a nonzero nilpotent η in (A). For every (y\in A), multiplication by ηy is nilpotent. The proof computes its trace using the finite filtration (V_j=\ker(T^j)): extend bases of consecutive (V_j)'s using the finite-dimensional subspace theorem, order by layers, and the matrix is strictly triangular. Thus η is in the trace-pairing radical.

Finally, multiplication matrices of integral elements on (O_K) have integer entries; their reductions are the multiplication matrices on (A). The direct trace-integrality supplier establishes that every entry of the integral-basis trace Gram matrix is an integer. Its reduction is the Gram matrix of (A), and its determinant is (d_K\bmod p). Nondegeneracy is therefore equivalent to (p\nmid d_K). Combining this with the two ramification cases proves the stated criterion.

## Assumptions, Choice, and dependencies

No Choice qualifier was added to the Statement or to the item. The replacement proof explicitly uses the ZF ideal-factorization theorem, finite quotient and finite-field arguments, and the finite-dimensional basis-extension theorem, whose statement supplies basis extension without a choice principle. The local trace argument uses neither algebraic closure nor eigenvalues. The finite Frobenius supplier gives the exact cyclic group of order (f), and the character-independence supplier is applied only to the finite family on (E^\times).

One transitive-supplier note for integration: the direct supplier `thm-ring-of-integers-free-of-rank-degree` is unqualified and supplies the finite integral basis used here, but its proof depends on `lem-trace-pairing-for-a-finite-separable-extension`, whose proof invokes embeddings into an algebraic closure. The repaired criterion proof itself does not use that route. This repair leaves the existing finite-free supplier unchanged; root was notified so it can determine whether the no-closure constraint is intended to cover a supplier's internal proof path as well.

The 32 direct item dependencies now exactly match the 32 wikilinked supplier IDs in the repaired item:

```text
def-number-field
def-ring-of-integers-of-a-number-field
cor-integral-elements-form-a-subring
cor-trace-and-norm-of-an-algebraic-integer
thm-ring-of-integers-free-of-rank-degree
def-prime
thm-z-mod-p-is-a-field
prop-integers-modulo-n-as-a-quotient-ring
def-finite-field-and-its-order
def-field-norm-and-trace
def-trace-of-an-endomorphism
def-discriminant-of-a-number-field-basis-and-order
thm-number-field-integral-ideal-factorisation-in-zf
def-ramification-index
def-prime-above-and-residue-degree
def-split-inert-ramified-and-unramified-prime
lem-nonzero-number-field-ideal-has-finite-quotient
thm-subset-of-a-finite-set
thm-quotient-is-domain-iff-ideal-prime
thm-quotient-is-field-iff-ideal-maximal
def-prime-and-maximal-ideals
prop-canonical-quotient-ring-map
thm-chinese-remainder-theorem-for-comaximal-ideals
thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
def-relative-frobenius-of-a-finite-field-extension
thm-dedekind-linear-independence-of-characters
cor-trace-is-invariant-under-similarity
lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field
thm-root-bound-for-polynomials-over-a-domain
thm-dimension-of-a-linear-subspace
def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form
cor-square-matrix-invertible-iff-determinant-is-a-unit
```

Direct consumers remain unchanged:

- `cor-no-nontrivial-number-field-is-unramified-over-q` cites the criterion as F13.
- `ex-no-everywhere-unramified-extension-of-q` cites it as F1.
- `cex-frobenius-cycle-type-needs-good-reduction` cites it as F3.

The sole page home is `library/number-theory/prime-ideal-decomposition-ramification-and-the-different.md`. The statement and interface did not change, so no consumer or home edit was needed. The current plan row and shared consumer ledger still describe the former compressed proof; their integration update belongs to root and was not made in this repair.

## Selected checks

- Target-only `tools/precheck.mts`: pass with no auto-repair.
- Target-only `tools/rendercheck.mjs`: pass; KaTeX math, YAML, and delimiter checks clean.
- Target-only dependency/link comparison: 32 direct deps, 32 cited IDs, no missing or unused entry.
- No whole-library gate, receipt, certification, or consumer refresh was run.

## Root integration — 2026-09-30 16:47 UTC

Root read the full replacement and all32 direct supplier interfaces, corrected the Frobenius matrix index to 0≤j<f, 1≤k≤f, and synchronized the selected plan row, prose and canonical ledger. The only supplier home absent from the prior prerequisite closure was the finite-vector-space cardinality lemma; its published order223 home is now an explicit earlier prerequisite of this order365.913 page. Page content/inventory and the unchanged Statement remain intact. This is a local owner review; helper focused checks are reused without another gate or recertification. Final item SHA256: `12257848944ef8aa24393416bda3904ccebf09828be22f73c18ec5c5c8bf8629`. The rank-degree supplier follow-up remains outstanding before consumer audit closure.
