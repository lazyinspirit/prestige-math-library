---
id: ex-positive-type-functions-on-a-discrete-group
kind: example
title: "Positive type on a discrete group: the identity mass, characters, and the regular GNS model"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - cor-inner-product-induces-a-norm
  - def-axiom-of-choice
  - def-banach-space
  - def-completion-of-a-normed-space
  - def-complex-numbers-and-arithmetic
  - def-continuous-function-of-positive-type
  - def-continuous-map-top
  - def-coordinate-column-and-matrix-of-a-linear-map
  - def-countable-choice
  - def-dimension
  - def-hilbert-space
  - def-linear-map
  - def-nat-addition
  - def-nat-order
  - def-natural-numbers
  - def-ordered-field
  - def-product-topology
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-standard-topologies
  - def-strongly-continuous-unitary-representation
  - def-topological-group
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
  - lem-complex-conjugation-and-modulus-laws
  - lem-diagonal-unitary-coefficients-have-positive-type
  - lem-group-homomorphism-basic-properties
  - lem-nat-nonzero-is-successor
  - lem-of-add-order
  - lem-of-inverse-positive
  - lem-of-naturals-positive
  - lem-of-sign-rules
  - lem-of-square-positive
  - lem-of-zero-mult
  - lem-positive-type-functions-define-a-pre-hilbert-form
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-completion-of-an-inner-product-space-is-hilbert
  - thm-completion-universal-property-for-bounded-linear-maps
  - thm-complex-numbers-form-a-field
  - thm-metric-completion-carries-a-unique-banach-space-structure
  - thm-metric-completion-exists
  - thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set
  - thm-reals-ordered-field
axiom_audit: "The positive-type and normalization claims are choice-free. AC is used only through ACω for the Hilbert completion, unique bounded extensions, and the standard ℓ² coordinate realization in the left-regular GNS model; these uniqueness and coordinate constructions use no further choice."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters, §1.B"
      url: https://arxiv.org/pdf/1912.07262
      locator: "Chapter 1 §1.B, Definition 1.B.1, Construction 1.B.5 and Example 1.B.7(3), printed pp. 26–29"
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Appendix C"
      url: https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf
      locator: "Appendix C §C.4, Proposition C.4.3, printed pp. 374–375, for diagonal matrix coefficients of positive type; Example C.4.12, printed p. 377, for the δ_e GNS/regular-representation claim"
---

## Example

For a group $\Gamma$ with the discrete topology, let $\delta_e$ be the
characteristic function of its identity. It is continuous and of positive type,
with $\delta_e(e)=1$. If $\sigma:\Gamma\to U(V)$ is a unitary representation
on a nonzero finite-dimensional complex Hilbert space, its normalized character
$$
\chi_\sigma(g):=\frac{\operatorname{tr}(\sigma(g))}{\dim_{\mathbb C}V}
$$
is continuous and of positive type, with $\chi_\sigma(e)=1$.

Assuming AC for the Hilbert-completion and standard $\ell^2$ identification
clause, the GNS representation of $\delta_e$ is unitarily equivalent to the
left regular representation on $\ell^2(\Gamma)$, with cyclic vector $\delta_e$.

## Facts & Assumptions

**Given:** A group $\Gamma$ with the discrete topology and identity $e$; a
nonzero finite-dimensional complex Hilbert space $V$; and a group homomorphism
$\sigma:\Gamma\to U(V)$ into its bijective complex-linear isometries.

[F1] A function $\varphi:G\to\mathbb C$ is of positive type when it is
continuous and for every $n\ge1$, $g_1,\ldots,g_n\in G$ and
$c_1,\ldots,c_n\in\mathbb C$,
$$
\sum_{i,j=1}^n\overline{c_i}c_j\varphi(g_i^{-1}g_j)\ge0.
$$
Repetitions are permitted ([[def-continuous-function-of-positive-type]]).

[F2] For finitely supported $f,h$ on $G$, the positive-type form is
$$
B_\varphi(f,h)=\sum_{x,y\in G}f(x)\overline{h(y)}\varphi(y^{-1}x),
$$
and it induces the GNS inner product after quotienting its null space
([[lem-positive-type-functions-define-a-pre-hilbert-form]]).

[F3] Every map from a discrete space is continuous; the product of two discrete
spaces is discrete, so a group with its discrete topology is a topological group
([[def-standard-topologies]], [[def-continuous-map-top]],
[[def-product-topology]], [[def-topological-group]]).

[F4] Strong continuity of a unitary representation means that each orbit map
$g\mapsto\sigma(g)v$ is continuous in the norm topology
([[def-strongly-continuous-unitary-representation]]).

[F5] For a strongly continuous unitary representation and each $v\in V$,
$g\mapsto\langle\sigma(g)v,v\rangle$ is continuous and of positive type
([[lem-diagonal-unitary-coefficients-have-positive-type]]).

[F6] Every finite-dimensional inner-product space has a finite orthonormal
basis, empty only in dimension zero ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).
The dimension $d=\dim_{\mathbb C}V$ is the natural number equinumerous with a
basis, and dimension zero is equivalent to $V=\{0\}$ ([[def-dimension]]).

[F7] If $T(e_k)=\sum_\ell a_{\ell k}e_\ell$ in an ordered basis, the
$(\ell,k)$ matrix entry is $a_{\ell k}$
([[def-coordinate-column-and-matrix-of-a-linear-map]]). The trace of an
endomorphism is the trace of its matrix in any ordered basis, and matrix trace
is the sum of diagonal entries
([[def-trace-of-an-endomorphism]], [[def-trace-of-a-square-matrix]]).

[F8] A group homomorphism sends the identity to the identity
([[lem-group-homomorphism-basic-properties]]).

[F9] A nonzero natural is a successor; with $1=\sigma(0)$, the recursive
addition law and natural order give $1\le d$ for a nonzero dimension $d$
([[def-natural-numbers]], [[lem-nat-nonzero-is-successor]],
[[def-nat-addition]], [[def-nat-order]]). The canonical real image of every
natural $n\ge1$ is positive, its reciprocal is positive, and finite sums of
nonnegative reals remain nonnegative; multiplying a nonnegative real by a
positive real preserves nonnegativity. These order facts follow from the real
ordered-field structure and the cited sign, zero-product and addition rules
([[thm-reals-ordered-field]], [[def-ordered-field]],
[[lem-of-naturals-positive]], [[lem-of-inverse-positive]],
[[lem-of-sign-rules]], [[lem-of-zero-mult]], [[lem-of-add-order]]).

[F10] The constant-class map embeds $\mathbb R$ as a subfield of $\mathbb C$
and preserves its arithmetic ([[def-complex-numbers-and-arithmetic]],
[[thm-complex-numbers-form-a-field]]). For $z\in\mathbb C$,
$z\overline z=|z|^2$, $|z|\ge0$, and $|z|=0$ exactly when $z=0$
([[lem-complex-conjugation-and-modulus-laws]]); nonzero real squares are
positive ([[lem-of-square-positive]]).

[F11] AC implies Countable Choice
([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]],
[[def-countable-choice]]).

[F12] Under Countable Choice every metric space has a norm-metric completion;
the published completion of a normed space has a compatible Banach structure,
and the completion of an inner-product space is Hilbert with the extended
inner product ([[thm-metric-completion-exists]],
[[thm-metric-completion-carries-a-unique-banach-space-structure]],
[[def-completion-of-a-normed-space]], [[thm-completion-of-an-inner-product-space-is-hilbert]],
[[def-hilbert-space]], [[cor-inner-product-induces-a-norm]]).

[F13] Under Countable Choice, a bounded linear map into a Banach space extends
uniquely across a completion with the same norm bound
([[def-linear-map]], [[def-banach-space]],
[[thm-completion-universal-property-for-bounded-linear-maps]]).

[F14] Under Countable Choice, the Fourier coefficient map of a Hilbert space
with a complete orthonormal family indexed by $I$ is a unitary isomorphism onto
the standard square-summable family space $\ell^2(I,\mathbb C)$
([[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]],
[[def-square-summable-family-on-an-arbitrary-index-set]]).

## Verification

Bekka and de la Harpe state in Example 1.B.7(3) that $\delta_e$ is of positive
type and that its GNS representation is equivalent to the left regular
representation (Chapter 1 §1.B, printed p. 29). Bekka–de la Harpe–Valette's
Proposition C.4.3 gives the diagonal-coefficient positivity used for the
character calculation (Appendix C §C.4, printed pp. 374–375). The calculations
below supply the finite-matrix witness and the completion model explicitly.

**Proof technique:** direct.

1.1 For $n\ge1$, $g_i^{-1}g_j=e$ exactly when $g_i=g_j$; partitioning the finite list by its distinct values gives $\sum_{i,j=1}^n\overline{c_i}c_j\delta_e(g_i^{-1}g_j)=\sum_{h\in\{g_1,\ldots,g_n\}}\left|\sum_{j:g_j=h}c_j\right|^2\ge0$. This includes repeated group elements and zero coefficients. [F1, F9, F10, algebra]

1.2 Every orbit map $g\mapsto\sigma(g)v$ is continuous because its domain is discrete, so $\sigma$ is strongly continuous. Choose an orthonormal basis $(e_k)_{k<d}$ of $V$. Since $V\ne\{0\}$, its dimension $d$ is nonzero; write $d=\operatorname{succ}(m)$. From $1=\operatorname{succ}(0)$ and the recursive addition law, induction gives $1+m=\operatorname{succ}(m)$, so $1\le d$ by the natural-order definition. Its canonical real scalar $d_{\mathbb R}$ is positive, and its image $d_{\mathbb C}$ in $\mathbb C$ is nonzero. [F3, F4, F6, F9, F10, choose]

2.1 The function $\delta_e$ is continuous because $\Gamma$ is discrete, and $\delta_e(e)=1$. Step 1.1 proves its finite-matrix test, so $\delta_e$ is of positive type. [F1, F3, step 1.1, algebra]

2.2 For $k<d$ set $\phi_k(g)=\langle\sigma(g)e_k,e_k\rangle$. By [F5], each $\phi_k$ is continuous and of positive type. If $\sigma(g)e_k=\sum_{\ell<d}a_{\ell k}(g)e_\ell$, orthonormality gives $\phi_k(g)=a_{kk}(g)$; the trace definitions in [F7] consequently give $\operatorname{tr}(\sigma(g))=\sum_{k<d}\phi_k(g)$. [F5, F6, F7, step 1.2, algebra]

2.3 By [F8], $\sigma(e)=I_V$; its matrix in this basis is the $d$ by $d$ identity, so [F6, F7] give $\operatorname{tr}(\sigma(e))=d$. Hence $\chi_\sigma(e)=d_{\mathbb C}/d_{\mathbb C}=1$ by the field embedding [F10]. Also $\chi_\sigma$ is continuous, since it is a function from a discrete domain. [F3, F6, F7, F8, F10, step 1.2, algebra]

3.1 For any finite test $(g_i,c_i)_{i=1}^n$ with $n\ge1$, step 2.2 gives $\sum_{i,j=1}^n\overline{c_i}c_j\chi_\sigma(g_i^{-1}g_j)=d_{\mathbb R}^{-1}\sum_{k<d}\left(\sum_{i,j=1}^n\overline{c_i}c_j\phi_k(g_i^{-1}g_j)\right)$. Each parenthesized value is a nonnegative real by [F5]; their finite sum is nonnegative, and $d_{\mathbb R}^{-1}>0$ by [F9]. The embedding in [F10] identifies this real nonnegative value with the displayed complex quadratic form, so [F1] shows that $\chi_\sigma$ is of positive type. [F1, F5, F9, F10, step 2.2, algebra]

3.2 For finitely supported $f,h:\Gamma\to\mathbb C$, [F2] gives $B_{\delta_e}(f,h)=\sum_{x,y}f(x)\overline{h(y)}\delta_e(y^{-1}x)=\sum_x f(x)\overline{h(x)}$. This is positive definite: if $f\ne0$, a nonzero coordinate contributes a strictly positive squared modulus while every other term is nonnegative. Hence the GNS null space is $\{0\}$, and the quotient is this finite-support inner-product space. [F2, F9, F10, step 2.1, algebra]

4.1 Assume AC. By [F11], Countable Choice holds; [F12] gives a Hilbert completion $\widehat E$ of the inner-product space in step 3.2, with the finite-support functions embedded densely. On that dense subspace define $L_gf(x)=f(g^{-1}x)$. This is linear, and reindexing $x=gy$ gives $\langle L_gf,L_gh\rangle=\sum_xf(g^{-1}x)\overline{h(g^{-1}x)}=\sum_yf(y)\overline{h(y)}=\langle f,h\rangle$. Thus $L_g$ is bounded with norm bound one; by [F13] it extends uniquely to a linear contraction $\lambda_\Gamma(g)$ on $\widehat E$. This is the completion stage in the GNS construction for $\delta_e$. [F11, F12, F13, step 3.2, construct]

5.1 On the dense finite-support subspace, $L_gL_h=L_{gh}$ and $L_gL_{g^{-1}}=L_{g^{-1}}L_g=I$. The continuous extensions obey the same identities on $\widehat E$; since each extension and its inverse are contractions, each is an isometry and hence unitary. Therefore $g\mapsto\lambda_\Gamma(g)$ is strongly continuous because $\Gamma$ is discrete. The point masses $(\delta_x)_{x\in\Gamma}$ are orthonormal and their span is dense in $\widehat E$, so they form a complete orthonormal family. By [F14] the Fourier coefficient map $U:\widehat E\to\ell^2(\Gamma,\mathbb C)$ is unitary and sends $\delta_x$ to the standard coordinate vector $e_x$. For each $g,x$, $U\lambda_\Gamma(g)\delta_x=e_{gx}$, which is the standard left translation of $e_x$; density and continuity imply that $U$ intertwines $\lambda_\Gamma$ with the left regular representation on $\ell^2(\Gamma)$. Finally $\lambda_\Gamma(g)\delta_e=\delta_g$ and $\langle\lambda_\Gamma(g)\delta_e,\delta_e\rangle=\langle\delta_g,\delta_e\rangle=\delta_e(g)$; the orbit spans a dense subspace, so $\delta_e$ is cyclic and this is its GNS representation. [F3, F12, F13, F14, step 3.2, step 4.1, algebra]

6.1 The positivity and normalization proofs in steps 1.1–3.1 use no choice. AC is used only through Countable Choice in [F12]–[F14] for the Hilbert completion, bounded extensions, and the standard $\ell^2$ coordinate identification. The extensions and Fourier coefficient map are unique, so the action and unitary equivalence require no further choice. All three claims are established. [F11, F12, F13, F14, step 1.1, step 2.1, step 2.3, step 3.1, step 5.1] ∎
