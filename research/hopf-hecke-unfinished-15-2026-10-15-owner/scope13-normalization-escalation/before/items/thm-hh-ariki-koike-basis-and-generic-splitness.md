---
id: thm-hh-ariki-koike-basis-and-generic-splitness
kind: theorem
title: "The Ariki–Koike PBW basis and generic splitness"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 3
deps: [def-hh-multiplicative-cyclotomic-hecke-algebra, lem-hh-cyclotomic-commuting-jucys-murphy-generators, lem-hh-cyclotomic-straightening-spanning, def-hh-multipartitions-standard-tableaux-and-generic-contents, thm-hh-generic-cyclotomic-seminormal-models, lem-hh-colored-permutation-rsk-and-tableau-square-count, thm-hh-generic-coxeter-hecke-standard-basis, lem-hh-universal-presentations-and-base-change, lem-hh-finite-polynomial-and-localization-constructions]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Georges Neaime, Geodesic normal forms and Hecke algebras for the complex reflection groups G(de,e,n), arXiv:1810.12053v1"
      url: "https://arxiv.org/pdf/1810.12053v1"
      locator: "§6, PDF pp. 32–38: integral spanning route for the multiplicative G(r,1,n) algebra; independence, matrix units, and base change are proved here"
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3"
      url: "https://arxiv.org/pdf/1304.0906v3"
      locator: "§3.1–3.2, PDF pp. 14–20: content separation and generic seminormal context; the density and dimension argument is proved here"
---

## Statement

Let $R=\mathbb Z[Q^{\pm1},u_1^{\pm1},\ldots,u_r^{\pm1}]$ and let $H_{r,n}$ be the multiplicative cyclotomic Hecke algebra of [[def-hh-multiplicative-cyclotomic-hecke-algebra]]. For $w\in S_n$, let $T_w$ be the finite Hecke element given by any reduced adjacent-transposition word. Then

$$ \mathcal B_{r,n}=\{X_1^{a_1}\cdots X_n^{a_n}T_w:0\le a_i<r,\ w\in S_n\} $$

is an $R$-basis of $H_{r,n}$. With $K=\mathbb Q(Q,u_1,\ldots,u_r)$ and $f^\lambda=|\operatorname{Std}(\lambda)|$, the generic algebra is split:

$$ H_{r,n}\otimes_RK\cong\prod_{\lambda\in\mathcal P_r(n)}\operatorname{Mat}_{f^\lambda}(K). $$

For every commutative $R$-algebra $S$, the algebra obtained by applying $R\to S$ to the same presentation is free over $S$ with basis the images of $\mathcal B_{r,n}$; no flatness or semisimplicity of $S$ is required.

## Facts & Assumptions

**Given:** The multiplicative cyclotomic presentation, the proved spanning family, the generic seminormal modules, and the componentwise colored RSK bijection.

[F1] The displayed PBW family spans $H_{r,n}$ over $R$. ([[lem-hh-cyclotomic-straightening-spanning]])

[F2] The standard multitableau modules $V^\lambda$ are irreducible over $K$, their joint content sequences are distinct across all shapes, and every admissible adjacent swap has a nonzero coefficient. ([[thm-hh-generic-cyclotomic-seminormal-models]], [[def-hh-multipartitions-standard-tableaux-and-generic-contents]])

[F3] The number of pairs of standard multitableaux of equal shape is $\sum_\lambda(f^\lambda)^2=r^n n!$. ([[lem-hh-colored-permutation-rsk-and-tableau-square-count]])

[F4] The ring $R$ is an integral domain with fraction field $K$. ([[lem-hh-finite-polynomial-and-localization-constructions]])

[F5] Scalar extension of a presented algebra is the algebra with the base-changed relations, and tensoring a free module carries its basis to a basis over the new coefficient ring. ([[lem-hh-universal-presentations-and-base-change]])

## Proof

**Given:** The algebra $H_{r,n}$ over $R$, the finite set $\mathcal B_{r,n}$, the modules $V^\lambda$, and the field $K$.

1.1 There are $r$ choices for each exponent $a_i$ and $n!$ choices for $w$, so $|\mathcal B_{r,n}|=r^n n!$. By [F1], these elements span $H_{r,n}$ and their images span $H_{r,n}\otimes_RK$, whose dimension is at most $r^n n!$. [F1, algebra]

1.2 Let $\mathcal T=\coprod_{\lambda\in\mathcal P_r(n)}\operatorname{Std}(\lambda)$ and, for each $j$, let $C_j=\{\operatorname{res}_s(j):s\in\mathcal T\}$. On $V=\bigoplus_\lambda V^\lambda$, the commuting $L_j$ are diagonal. For each $t\in\mathcal T$ the element $ e_t=\prod_{j=1}^n\prod_{\substack{c\in C_j\\c\ne\operatorname{res}_t(j)}}\frac{L_j-c}{\operatorname{res}_t(j)-c} $ is defined over $K$ by [F2]. It acts as $1$ on $v_t$ and $0$ on every other basis vector: a different tableau has a different content sequence, so at some coordinate its content contributes a zero factor. These are explicit joint spectral projectors in the image of $H_{r,n}\otimes_RK$. [F2, F4, algebra]

2.1 If $s_i t$ is standard, then $e_{s_it}T_ie_t$ acts as $B_i(t)$ times the matrix unit carrying $v_t$ to $v_{s_it}$ and all other basis vectors to $0$. The coefficient is nonzero by [F2], so division by it gives that matrix unit in the image. Adjacent swaps connect all linear extensions of a fixed shape; products of these edge matrix units give every matrix unit between two tableaux of that shape. The projectors separate different shapes, so the action homomorphism $ H_{r,n}\otimes_RK\longrightarrow\prod_{\lambda\in\mathcal P_r(n)}\operatorname{End}_K(V^\lambda) $ is surjective. Its target dimension is $\sum_\lambda(f^\lambda)^2=r^n n!$ by [F3], hence $\dim_K(H_{r,n}\otimes_RK)\ge r^n n!$. [F2, F3, step 1.2]

3.1 Steps 1.1 and 2.1 give opposite dimension bounds, so $H_{r,n}\otimes_RK$ has dimension exactly $r^n n!$ and its $r^n n!$ spanning monomials are a $K$-basis. The surjective action map in step 2.1 is now an isomorphism, proving the displayed generic split decomposition. [step 1.1, step 2.1]

4.1 Let $F_R$ be the free $R$-module on the symbols in $\mathcal B_{r,n}$ and map it onto $H_{r,n}$ by the spanning result [F1]. If $x$ is in its kernel, then $x\otimes1$ maps to zero in $H_{r,n}\otimes_RK$; the images of the symbols are a $K$-basis by step 3.1, so $x\otimes1=0$ in $K^{r^n n!}$. Since $R$ embeds in $K$ by [F4], the map $R^{r^n n!}\to K^{r^n n!}$ is injective and $x=0$. Thus the spanning family is $R$-linearly independent and is an $R$-basis. [F1, F4, step 3.1]

5.1 For any commutative $R$-algebra $S$, [F5] identifies $S\otimes_RH_{r,n}$ with the quotient of the free associative $S$-algebra by the same relations with coefficients mapped to $S$. Indeed the image of the two-sided relation ideal is generated by the images of its defining relators. Tensoring the free $R$-basis from step 4.1 gives the corresponding free $S$-basis, without requiring $S$ to be flat over $R$. [F5, step 4.1]

6.1 Steps 3.1–4.1 establish the universal basis, the split generic algebra, and all stated specializations. The independence proof uses the explicitly constructed generic modules and the proved square count, not the PBW theorem as its own premise. [step 3.1, step 4.1, step 5.1] ∎
