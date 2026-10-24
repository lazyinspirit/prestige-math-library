---
id: thm-real-complex-clifford-algebra-classification
kind: theorem
title: "Real and complex Clifford algebra classification with explicit signature"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 6
deps:
  - def-real-quaternion-matrix-algebra-notation
  - def-clifford-algebra-of-a-quadratic-space
  - thm-universal-property-of-clifford-algebra
  - lem-real-clifford-signature-recurrences-and-periodicity
  - lem-real-division-algebra-tensor-identities
  - thm-clifford-pbw-basis-and-associated-graded
  - thm-sylvesters-law-of-inertia
  - thm-every-complex-number-has-a-square-root
  - thm-complex-numbers-form-a-field
  - thm-reals-ordered-field
  - thm-universal-property-of-module-tensor-products
  - thm-symmetry-and-associativity-over-a-commutative-ring
  - thm-tensor-products-commute-with-arbitrary-direct-sums
  - thm-unit-isomorphisms-for-module-tensor-products
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.6"
      url: https://arxiv.org/pdf/0805.0311
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §4, Table 1"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §§1.4.1–1.4.2, Tables 1.1 and Corollary 1.4.10"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Let $n=p+q$, let $r$ be the residue of $p-q$ modulo $8$ in $\{0,1,\ldots,7\}$, and use $v^2=Q(v)1$ with signature ordered $(+^p,-^q)$. For every nondegenerate real form of signature $(p,q)$, the real Clifford algebra is

| $r$ | parity of $n$ | $\mathrm{Cl}_{p,q}$ |
|---:|:---:|---|
| $0$ | even | $M_{2^{n/2}}(\mathbb R)$ |
| $1$ | odd | $M_{2^{(n-1)/2}}(\mathbb R)\oplus M_{2^{(n-1)/2}}(\mathbb R)$ |
| $2$ | even | $M_{2^{n/2}}(\mathbb R)$ |
| $3$ | odd | $M_{2^{(n-1)/2}}(\mathbb C)$ |
| $4$ | even | $M_{2^{(n-2)/2}}(\mathbb H)$ |
| $5$ | odd | $M_{2^{(n-3)/2}}(\mathbb H)\oplus M_{2^{(n-3)/2}}(\mathbb H)$ |
| $6$ | even | $M_{2^{(n-2)/2}}(\mathbb H)$ |
| $7$ | odd | $M_{2^{(n-1)/2}}(\mathbb C)$ |

Only signatures with $p,q\ge0$ are considered; in the feasible rows the displayed exponents are nonnegative. For a nondegenerate complex quadratic form on dimension $n$, its Clifford algebra is

$$\mathrm{Cl}_n(\mathbb C)\cong\begin{cases}M_{2^{n/2}}(\mathbb C),&n\text{ even},\\M_{2^{(n-1)/2}}(\mathbb C)\oplus M_{2^{(n-1)/2}}(\mathbb C),&n\text{ odd}.\end{cases}$$

These matrix-algebra classifications require nondegeneracy; no such classification is asserted for degenerate forms.

## Facts & Assumptions

**Given:** A finite-dimensional nondegenerate real or complex symmetric bilinear form, with associated quadratic form $Q(v)=B(v,v)$, and the Clifford convention $v^2=Q(v)1$.

[F1] Every finite-dimensional real symmetric form is congruent to exactly one $\operatorname{diag}(I_p,-I_q,0_r)$ ([[thm-sylvesters-law-of-inertia]]).

[F2] The real pure-signature table, signature recurrences, and pure eightfold periodicity are proved in [[lem-real-clifford-signature-recurrences-and-periodicity]].

[F3] The coefficient identities include $\mathbb C\otimes_{\mathbb R}\mathbb C\cong\mathbb C\oplus\mathbb C$, $\mathbb C\otimes_{\mathbb R}\mathbb H\cong M_2(\mathbb C)$, $\mathbb H\otimes_{\mathbb R}\mathbb H\cong M_4(\mathbb R)$, and $M_s(D)\otimes_{\mathbb R}M_t(E)\cong M_{st}(D\otimes_{\mathbb R}E)$ ([[lem-real-division-algebra-tensor-identities]]).

[F4] Every complex scalar has a square root ([[thm-every-complex-number-has-a-square-root]]).

[F5] A linear isometry of quadratic spaces induces a Clifford algebra homomorphism by the universal property ([[thm-universal-property-of-clifford-algebra]]).

[F6] The Clifford algebra of an $m$-dimensional space has dimension $2^m$, with the ordered square-free monomial basis ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F7] The plus-$Q$ Clifford algebra is the quotient of the tensor algebra by the relations $\bar v^{\,2}=Q(v)1$ ([[def-clifford-algebra-of-a-quadratic-space]]).

[F8] $\mathbb C$ is a field containing the embedded real field, and $\mathbb R$ has characteristic zero, so $\mathbb C$ has characteristic zero ([[thm-complex-numbers-form-a-field]], [[thm-reals-ordered-field]]).

[F9] A real-bilinear map from two real vector spaces induces a unique linear map from their tensor product ([[thm-universal-property-of-module-tensor-products]]).

[F10] The flip of ordinary tensor factors sends $a\otimes b$ to $b\otimes a$ ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[F11] Tensoring with a fixed module commutes with direct sums ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[F12] $\mathbb R$ is a tensor unit: $\mathbb R\otimes_{\mathbb R}M\cong M$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Proof

**Proof technique:** signature reduction and scalar extension.

1.1 By [F1], a nondegenerate real form of signature $(p,q)$ has an orthogonal basis with $p$ squares $+1$ and $q$ squares $-1$. In the quotient convention [F7], the linear isometry from this standard form to the given form induces a Clifford homomorphism by [F5]; applying [F5] to the inverse isometry gives its inverse, since both composites fix every canonical generator. Thus it suffices to classify the standard $\mathrm{Cl}_{p,q}$. [given, F1, F5, F7, construct]

1.2 Let $m=\min(p,q)$. Repeatedly applying the first recurrence in [F2] removes one positive and one negative generator at a time, giving $\mathrm{Cl}_{p,q}\cong\mathrm{Cl}_{p-q,0}\otimes M_{2^q}(\mathbb R)$ when $p\ge q$, and $\mathrm{Cl}_{p,q}\cong\mathrm{Cl}_{0,q-p}\otimes M_{2^p}(\mathbb R)$ when $q>p$. If the remaining pure dimension is $8t+s$ with $0\le s<8$, [F2] replaces its $8t$-part by a factor $M_{16^t}(\mathbb R)$. [given, F2, algebra]

1.3 Let $B$ be a nondegenerate symmetric complex bilinear form on a positive-dimensional complex vector space. Some vector $v$ has $B(v,v)\ne0$: otherwise polarization, valid because $2$ is invertible by [F8], would give $B=0$, contradicting nondegeneracy. By [F4], rescale $v$ so that $B(v,v)=1$. Then every $x$ decomposes as $x=B(x,v)v+(x-B(x,v)v)$ with the second term in $v^\perp$, so $V=\mathbb Cv\oplus v^\perp$ and $\dim v^\perp=n-1$. The restriction to $v^\perp$ is nondegenerate, since a vector in its radical is orthogonal to both $v^\perp$ and $v$, hence to all of $V$. Induction therefore gives an orthogonal basis with every square $+1$, so all nondegenerate complex forms of dimension $n$ are isometric to the standard one. [given, F4, F8, choose, algebra]

1.4 If $n=0$, the PBW basis from [F6] consists only of the unit, so the scalar map $\mathbb C\to\mathrm{Cl}_0(\mathbb C)$ is an isomorphism: it is nonzero and hence injective, and both sides have complex dimension one. [F6, F8, algebra]

2.1 For $p\ge q$, the pure positive column in [F2] supplies, for residues $s=0,\ldots,7$, coefficient types $\mathbb R$, $\mathbb R\oplus\mathbb R$, $\mathbb R$, $\mathbb C$, $\mathbb H$, $\mathbb H\oplus\mathbb H$, $\mathbb H$, $\mathbb C$, with matrix-size exponents respectively $m+4t$, $m+4t$, $m+4t+1$, $m+4t+1$, $m+4t+1$, $m+4t+1$, $m+4t+2$, $m+4t+3$. Since $n=8t+s+2m$, these are exactly the exponents in the table of the Statement. For $q>p$, apply the negative pure column of [F2] with $q-p=8t+s$ and $0\le s<8$; its eight residue rows give respectively residues $r=0,7,6,5,4,3,2,1$ and matrix-size exponents $m+4t$, $m+4t$, $m+4t$, $m+4t$, $m+4t+1$, $m+4t+2$, $m+4t+3$, $m+4t+3$. Substituting $n=8t+s+2m$ again gives precisely the displayed real table, including the split rows. [F2, step 1.2, algebra]

3.1 Suppose $n>0$. The real generator map into the complex Clifford algebra satisfies the same squares, so [F5] extends it to a real-algebra homomorphism $f:\mathrm{Cl}_{n,0}(\mathbb R)\to\mathrm{Cl}_n(\mathbb C)$. The real-bilinear map $(a,z)\mapsto f(a)z$ induces by [F9] a linear map $\Psi:\mathrm{Cl}_{n,0}(\mathbb R)\otimes_{\mathbb R}\mathbb C\to\mathrm{Cl}_n(\mathbb C)$, $a\otimes z\mapsto f(a)z$. It is multiplicative because complex scalars are central in the target: $\Psi((a\otimes z)(b\otimes w))=f(ab)zw=f(a)z f(b)w$. Its image contains the complex scalars and all complex Clifford generators, so it is surjective; both sides have complex dimension $2^n$ by [F6], making it an isomorphism. For a real matrix factor, [F3] gives $M_s(D)\otimes_{\mathbb R}\mathbb C\cong M_s(D\otimes_{\mathbb R}\mathbb C)$. The coefficient algebra changes as follows: $\mathbb R\otimes\mathbb C\cong\mathbb C$ by the tensor-unit map [F12], which preserves products; $\mathbb C\otimes\mathbb C\cong\mathbb C\oplus\mathbb C$ and $\mathbb C\otimes\mathbb H\cong M_2(\mathbb C)$ by [F3]; and $\mathbb H\otimes\mathbb C\cong\mathbb C\otimes\mathbb H$ by the flip [F10], which is multiplicative since it sends $(h\otimes z)(h'\otimes z')$ to $zz'\otimes hh'=(z\otimes h)(z'\otimes h')$. The direct-sum isomorphism [F11] preserves componentwise products, so split rows remain two factors. Thus real residue rows $r=0,2$ remain single $\mathbb C$-matrix factors of the same size; rows $r=4,6$ replace each $\mathbb H$ by $M_2(\mathbb C)$, doubling the matrix size; rows $r=1,5$ remain split into two factors, with the $r=5$ matrix size doubled; and rows $r=3,7$ split because $\mathbb C\otimes\mathbb C\cong\mathbb C\oplus\mathbb C$. Substituting the real table sizes in [F2] gives one factor $M_{2^{n/2}}(\mathbb C)$ for even $n$ and two factors $M_{2^{(n-1)/2}}(\mathbb C)$ for odd $n$. Together with step 1.3, this classifies every nondegenerate complex form. [F2, F3, F5, F6, F8, F9, F10, F11, F12, step 1.3, algebra] ∎
