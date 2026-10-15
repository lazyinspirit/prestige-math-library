---
id: thm-hh-affine-type-a-center
kind: theorem
title: "The center of the universal affine Hecke algebra of type A"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [thm-hh-affine-type-a-bernstein-pbw, lem-hh-demazure-lusztig-operators-satisfy-affine-relations, def-hh-type-a-affine-bernstein-presentation, def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences, def-hh-type-a-rational-skew-group-algebra]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander A. Kirillov, Jr., Lectures on the affine Hecke algebras and Macdonald conjectures (Harvard lectures, 1994; arXiv:math/9501219v1)"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 3, Theorem 3.12, PDF p. 20: the center is the Weyl-invariant part of the Laurent group algebra."
    - title: "I. G. Macdonald, Affine Hecke algebras and orthogonal polynomials, Séminaire Bourbaki 797, Astérisque 237 (1996), pp. 189–207"
      url: "https://smf.emath.fr/system/files/2017-08/smf_ast_237_189-207.pdf"
      locator: "§4.5, PDF p. 9: the center of the affine Hecke algebra is the Weyl-invariant Laurent subalgebra."
    - title: "Eric Opdam and Maarten Solleveld, Homological algebra for affine Hecke algebras (2007)"
      url: "https://www.math.ru.nl/~solleveld/tempered.pdf"
      locator: "§1.2, Theorem 1.3(c), PDF pp. 10–11: the center is the invariant subalgebra."
---

## Statement

Let $H_n^{\mathrm{aff}}$ be the universal algebra over $R_0=\mathbb Z[Q,Q^{-1}]$ from [[def-hh-type-a-affine-bernstein-presentation]], and let $A=R_0[X_1^{\pm1},\ldots,X_n^{\pm1}]$. Write $Z(H_n^{\mathrm{aff}}):=\{z\in H_n^{\mathrm{aff}}:zh=hz\text{ for every }h\in H_n^{\mathrm{aff}}\}$ and $A^{S_n}:=\{f\in A:w(f)=f\text{ for every }w\in S_n\}$. Then, over this universal coefficient ring,
$$
Z(H_n^{\mathrm{aff}})=A^{S_n}.
$$
This theorem is stated only over $R_0$; it makes no assertion that the center of an arbitrary scalar specialization is the scalar extension of this center.

## Facts & Assumptions

**Given:** The universal affine algebra, its Bernstein generators, its PBW basis, and the rational skew group representation.

[F1] [[thm-hh-affine-type-a-bernstein-pbw]]: every element of $H_n^{\mathrm{aff}}$ has a unique finite expansion $\sum_{w\in S_n}f_wT_w$ with $f_w\in A$, and the coefficient map $A\to H_n^{\mathrm{aff}}$ is injective.

[F2] [[lem-hh-demazure-lusztig-operators-satisfy-affine-relations]]: the map $\rho:H_n^{\mathrm{aff}}\to K\rtimes S_n$ is an algebra homomorphism, with each simple operator of the form $c_i[1]+d_i[s_i]$ and $d_i\ne0$.

[F3] [[def-hh-type-a-rational-skew-group-algebra]]: $K\rtimes S_n$ has basis $[u]$ over $K$ and multiplication $(a[u])(b[v])=a\,u(b)[uv]$; in particular $[u]X_j=u(X_j)[u]$.

[F4] [[def-hh-type-a-affine-bernstein-presentation]]: $T_if-s_i(f)T_i=(Q-1)D_i(f)$ for $f\in A$, and $D_i(f)=(f-s_i(f))/(1-X_i/X_{i+1})$.

[F5] [[def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]]: $A$ is an integral domain with Laurent monomial basis $(X^\lambda)_{\lambda\in\mathbb Z^n}$ and embeds injectively in its fraction field $K$.

## Proof

**Given:** The data of the Statement.

1.1 Let $z\in Z(H_n^{\mathrm{aff}})$ and write its unique PBW expansion $z=\sum_w f_wT_w$ using [F1]. Its image $p=\rho(z)$ commutes with each $X_j[1]$. Write $p=\sum_{u\in S_n}g_u[u]$ in the skew-group basis of [F3]. The coefficient of $[u]$ in $pX_j-X_jp$ is $g_u(u(X_j)-X_j)$ by [F3]. Since this is zero for every $j$, any $u$ with $g_u\ne0$ fixes each Laurent variable. The variables are distinct basis monomials in $A$ and remain distinct in its fraction field $K$ by [F5], so a permutation fixing them all is the identity. Therefore $p=g_1[1]\in K[1]$. [F1, F3, F5, given, algebra]

2.1 Suppose some $f_w\ne0$ for a nonidentity permutation. Choose the maximum $L>0$ among lengths of such $w$. For a reduced expression $w=s_{i_1}\cdots s_{i_L}$, expansion of the factors $c_{i_k}[1]+d_{i_k}[s_{i_k}]$ from [F2] shows that every term in $\rho(T_w)$ has length at most $L$, and its coefficient at $[w]$ is the nonzero product $b_w=\prod_{k=1}^{L}(s_{i_1}\cdots s_{i_{k-1}})(d_{i_k})$: omitting any reflection factor leaves fewer than $L$ simple transpositions, so cannot produce $w$. A different $v$ of length $L$ contributes to $[w]$ only if $v=w$, and one of smaller length cannot contribute. But step 1.1 shows $p$ has no nonidentity permutation coefficient. Thus $f_wb_w=0$ in $K$, and since $b_w\ne0$ and $A\hookrightarrow K$ by [F5], every such $f_w=0$, contradicting the choice of $L$. It follows that $z=f_1\in A$. [F1, F2, F5, step 1.1, algebra]

3.1 Since $z$ is central and $z\in A$ by step 2.1, [F4] gives $0=T_iz-zT_i=(s_i(z)-z)T_i+(Q-1)D_i(z)$. The PBW basis of [F1] is an $A$-basis, so the coefficients of $T_{s_i}=T_i$ and $T_{\mathrm{id}}=1$ vanish separately. Thus $s_i(z)=z$ for each $i$, and the adjacent transpositions generate $S_n$, so $z\in A^{S_n}$. [F1, F4, step 2.1, algebra]

4.1 If $f\in A^{S_n}$, then $s_i(f)=f$ and $D_i(f)=0$ for every $i$ by [F4], so the Bernstein relation gives $T_if=fT_i$. Since $A$ is commutative and the algebra is generated by $A$ and the $T_i$, $f$ commutes with every generator and is central. This reverse inclusion with step 3.1 proves $Z(H_n^{\mathrm{aff}})=A^{S_n}$ over $R_0$. No specialization or Choice principle is used. [F1, F4, step 3.1] ∎

