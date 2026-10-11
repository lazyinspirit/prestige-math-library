---
id: lem-restriction-to-two-block-subgroup-has-lr-multiplicities
kind: lemma
title: "Restriction to the two-block Young subgroup has LR multiplicities"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [thm-outer-littlewood-richardson-rule,
       cor-frobenius-reciprocity-for-complex-characters,
       def-outer-induction-product-for-symmetric-group-characters,
       def-littlewood-richardson-tableau-and-coefficient,
       def-young-subgroup-tabloid-and-permutation-module,
       def-external-direct-product-of-groups,
       def-tensor-product-of-complex-representations,
       lem-character-ring-of-a-direct-product-is-the-tensor-product,
       def-induced-character-of-a-complex-representation,
       def-finite-symmetric-group-and-permutation-notation,
       thm-first-orthogonality-relation-for-irreducible-complex-characters,
       def-column-antisymmetrizer-polytabloid-and-specht-module,
       thm-complex-specht-modules-are-irreducible,
       thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions,
       thm-character-inner-product-computes-intertwiner-dimension,
       def-virtual-character-and-character-ring-of-a-finite-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example 3, printed p. 116: the restriction of s_λ to S_m × S_n splits as a sum of skew Schur functions, obtained from the outer product by Frobenius reciprocity"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§16, printed pp. 60–64: the Littlewood–Richardson rule in outer-product form, whose restriction form is used here"
---

## Statement

Let $0\le r\le n$ and let $K\le S_n$ be the subgroup preserving each of the
two blocks $B_1=\{0,\dots,n-r-1\}$ and $B_2=\{n-r,\dots,n-1\}$ of the
underlying set $\{0,\dots,n-1\}$
([[def-finite-symmetric-group-and-permutation-notation]]); equivalently, under
the order-preserving relabelling $i\mapsto i-1$ of $\{1,\dots,n\}$ onto
$\{0,\dots,n-1\}$, $K$ is the image of the standard Young subgroup
$S_{(n-r,r)}$ of type $(n-r,r)$ ([[def-young-subgroup-tabloid-and-permutation-module]]);
it is the image of the external direct product $S_{n-r}\times S_r$ acting on
$B_1$ and $B_2$ ([[def-external-direct-product-of-groups]]). Identify the
complex character ring $R(K)$ with $R(S_{n-r})\otimes_{\mathbb Z}R(S_r)$ by
external tensor products $\chi\boxtimes\psi$ of characters
([[def-tensor-product-of-complex-representations]],
[[lem-character-ring-of-a-direct-product-is-the-tensor-product]]). For a
partition $\lambda\vdash n$ let $\chi^\lambda$ be the character of the complex
Specht module $S^\lambda$, an irreducible character of $S_n$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]],
[[thm-complex-specht-modules-are-irreducible]]), and let $c^\lambda_{\nu\mu}$
be the Littlewood–Richardson coefficient
([[def-littlewood-richardson-tableau-and-coefficient]]). Then, in $R(K)$,
$$\chi^\lambda\big|_{K}=\sum_{\nu\vdash n-r}\ \sum_{\mu\vdash r}c^\lambda_{\nu\mu}\,(\chi^\nu\boxtimes\chi^\mu).$$

In particular the multiplicity of the irreducible character
$\chi^\nu\boxtimes\chi^\mu$ in the restricted character $\chi^\lambda|_K$
equals $c^\lambda_{\nu\mu}$; for $r=n$ this says that the multiplicity is $1$
if $\mu=\lambda$ and $0$ otherwise. No choice principle is used.

## Facts & Assumptions

**Given:** Integers $0\le r\le n$, the symmetric group $S_n=\operatorname{Sym}(\{0,\dots,n-1\})$ with the composition and cycle conventions of [[def-finite-symmetric-group-and-permutation-notation]], the two blocks $B_1=\{0,\dots,n-r-1\}$ and $B_2=\{n-r,\dots,n-1\}$ (so $B_1=\varnothing$ when $r=n$), and the subgroup $K$ of $S_n$ preserving each block.

[F1] Under the relabelling $i\mapsto i-1$ the subgroup $K$ is the standard Young subgroup $S_{(n-r,r)}$ of [[def-young-subgroup-tabloid-and-permutation-module]]; concretely $K=\operatorname{Sym}(B_1)\times\operatorname{Sym}(B_2)$ consists of the permutations acting on each block and fixing the other block pointwise, and it is the image of the external direct product $S_{n-r}\times S_r$ under an injective homomorphism ([[def-external-direct-product-of-groups]]). The relabelling is an isomorphism of groups that preserves cycle types, hence preserves all character values used below.

[F2] External tensor products: for characters $\chi'$ of $S_{n-r}$ and $\psi'$ of $S_r$ the assignment $(\sigma,\tau)\mapsto\chi'(\sigma)\psi'(\tau)$ defines the character $\chi'\boxtimes\psi'$ of $S_{n-r}\times S_r$ on the tensor product of the underlying representations ([[def-tensor-product-of-complex-representations]]); the map $R(S_{n-r})\otimes_{\mathbb Z}R(S_r)\to R(K)$, $\chi'\otimes\psi'\mapsto\chi'\boxtimes\psi'$, is an isomorphism of rings, and as $\chi',\psi'$ range over irreducible characters the products $\chi'\boxtimes\psi'$ are pairwise distinct, orthonormal, and form a $\mathbb Z$-basis of $R(K)$ ([[lem-character-ring-of-a-direct-product-is-the-tensor-product]]).

[F3] For a finite group $G$ the irreducible complex characters are orthonormal, $\langle\chi_i,\chi_j\rangle=\delta_{ij}$ ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]), and they form an orthonormal basis of the space of class functions ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]); every irreducible character lies in $R(G)$, the $\mathbb Z$-span of the irreducible characters ([[def-virtual-character-and-character-ring-of-a-finite-group]]); and $\langle\chi_V,\chi_W\rangle=\dim\operatorname{Hom}_G(W,V)$ for finite-dimensional complex representations $V,W$ ([[thm-character-inner-product-computes-intertwiner-dimension]]).

[F4] Frobenius reciprocity: for $H\le G$, a complex character $\theta$ of $H$ and a complex character $\psi$ of $G$, $\langle\operatorname{Ind}_H^G\theta,\psi\rangle_G=\langle\theta,\operatorname{Res}_H^G\psi\rangle_H$ ([[cor-frobenius-reciprocity-for-complex-characters]], [[def-induced-character-of-a-complex-representation]]).

[F5] For $\nu\vdash n-r$ and $\mu\vdash r$, the outer induction product $\chi^\nu\circ\chi^\mu$ is $\operatorname{Ind}_{S_{n-r}\times S_r}^{S_n}(\chi^\nu\boxtimes\chi^\mu)$ under the identification of [F1], and the outer Littlewood–Richardson rule gives $\chi^\nu\circ\chi^\mu=\sum_{\lambda\vdash n}c^\lambda_{\nu\mu}\,\chi^\lambda$ in $R(S_n)$ ([[def-outer-induction-product-for-symmetric-group-characters]], [[thm-outer-littlewood-richardson-rule]], [[def-littlewood-richardson-tableau-and-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 For $\nu\vdash n-r$ and $\mu\vdash r$ put $\theta_{\nu\mu}:=\chi^\nu\boxtimes\chi^\mu\in R(K)$; by [F2] it is an honest character of $K$, and the family $(\theta_{\nu\mu})_{\nu,\mu}$ is orthonormal and $\mathbb Z$-spans $R(K)$. By [F5] its induction to $S_n$ is the outer product $\chi^\nu\circ\chi^\mu=\sum_{\lambda\vdash n}c^\lambda_{\nu\mu}\chi^\lambda$. [F2, F5, given]

2.1 Fix $\lambda\vdash n$. Applying [F1] and [F4] to the character $\theta_{\nu\mu}$ of $K$ and the character $\chi^\lambda$ of $S_n$, and then using [F5] and the orthonormality of the irreducible characters $\chi^{\lambda'}$ from [F3], gives $\langle\theta_{\nu\mu},\chi^\lambda|_K\rangle_K=\langle\operatorname{Ind}_{S_{n-r}\times S_r}^{S_n}\theta_{\nu\mu},\chi^\lambda\rangle_{S_n}=\sum_{\lambda'\vdash n}c^{\lambda'}_{\nu\mu}\langle\chi^{\lambda'},\chi^\lambda\rangle=c^\lambda_{\nu\mu}$. [step 1.1, F1, F3, F4, F5, algebra]

2.2 The characters $\theta_{\nu\mu}$ are exactly the irreducible characters of $K$. Indeed, every irreducible character $\chi_i$ of $K$ lies in $R(K)$ by [F3] and hence is a finite integral combination $\chi_i=\sum_{\nu,\mu}n_{\nu\mu}\theta_{\nu\mu}$ because the $\theta_{\nu\mu}$ form a $\mathbb Z$-basis of $R(K)$ by [F2]. Computing the norm with [F3] and the orthonormality of the $\theta_{\nu\mu}$ gives $1=\langle\chi_i,\chi_i\rangle=\sum_{\nu,\mu}n_{\nu\mu}^2$, so exactly one coefficient equals $\pm1$ and the others are $0$, that is, $\chi_i=\pm\theta_{\nu\mu}$ for a single pair $(\nu,\mu)$; a character has positive degree, so $\chi_i=\theta_{\nu\mu}$. Hence the irreducible characters of $K$ form a subfamily of the orthonormal family $(\theta_{\nu\mu})$; the irreducibles are an orthonormal basis of the class functions by [F3], so their number is $\dim\mathrm{cf}(K)$, while an orthonormal family in $\mathrm{cf}(K)$ has at most $\dim\mathrm{cf}(K)$ elements; the numbers are therefore equal and the two families coincide. [step 1.1, F2, F3, algebra]

3.1 The restricted character $\chi^\lambda|_K$ is a class function on $K$, and by [F3] it expands in the orthonormal basis of irreducible characters, which is the family $(\theta_{\nu\mu})$ by step 2.2, with coefficients their inner products against it: $\chi^\lambda|_K=\sum_{\nu\vdash n-r}\sum_{\mu\vdash r}\langle\theta_{\nu\mu},\chi^\lambda|_K\rangle_K\,\theta_{\nu\mu}$. Substituting the value $c^\lambda_{\nu\mu}$ from step 2.1 into each coefficient gives the displayed identity of the statement. [step 2.1, step 2.2, F2, F3]

4.1 The coefficient of the irreducible character $\theta_{\nu\mu}=\chi^\nu\boxtimes\chi^\mu$ in the expansion of step 3.1 is $c^\lambda_{\nu\mu}$, so this is the multiplicity of $\chi^\nu\boxtimes\chi^\mu$ in $\chi^\lambda|_K$. If $r=n$ then $K=S_n$ and the only partition of $n-r=0$ is $\nu=\varnothing$, so the identity reads $\chi^\lambda=\sum_{\mu\vdash n}c^\lambda_{\varnothing\mu}\chi^\mu$; comparing with the orthonormal-basis expansion $\chi^\lambda=\sum_{\mu}\delta_{\lambda\mu}\chi^\mu$ from [F3] gives $c^\lambda_{\varnothing\mu}=\delta_{\lambda\mu}$, so the multiplicity is $1$ for $\mu=\lambda$ and $0$ otherwise. [step 3.1, F2, F3, algebra] ∎
