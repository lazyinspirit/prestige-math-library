---
id: lem-hh-demazure-lusztig-operators-satisfy-affine-relations
kind: lemma
title: "Demazure–Lusztig operators satisfy the affine type-A relations"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-type-a-affine-bernstein-presentation, def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences, def-hh-type-a-rational-skew-group-algebra, lem-hh-finite-polynomial-and-localization-constructions]
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
      locator: "Lecture 3, Lemma 3.10 and Theorem 3.13, PDF pp. 19–20: the Bernstein–Lusztig cross-relation and the polynomial representation."
    - title: "I. G. Macdonald, Affine Hecke algebras and orthogonal polynomials, Séminaire Bourbaki 797, Astérisque 237 (1996), pp. 189–207"
      url: "https://smf.emath.fr/system/files/2017-08/smf_ast_237_189-207.pdf"
      locator: "§4.2 and §4.6, PDF pp. 8–10: divided-difference relation and the basic rational-function representation."
    - title: "Eric Opdam and Maarten Solleveld, Homological algebra for affine Hecke algebras (2007)"
      url: "https://www.math.ru.nl/~solleveld/tempered.pdf"
      locator: "§1.2, PDF pp. 10–11: Bernstein presentation for general root data."
---

## Statement

Let $n\ge2$, $R_0=\mathbb Z[Q,Q^{-1}]$, $A=R_0[X_1^{\pm1},\ldots,X_n^{\pm1}]$, and $K=\operatorname{Frac}(A)$, with $D_i$ and $K\rtimes S_n$ as in [[def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]] and [[def-hh-type-a-rational-skew-group-algebra]]. For $r_i=X_i/X_{i+1}$ define
$$
\mathcal T_i:=Q[s_i]+\frac{Q-1}{1-r_i}\bigl([1]-[s_i]\bigr)\in K\rtimes S_n.
$$
Then $\mathcal T_i$ preserves $A$, satisfies the quadratic and braid relations of [[def-hh-type-a-affine-bernstein-presentation]], and obeys
$$
\mathcal T_i f-s_i(f)\mathcal T_i=(Q-1)D_i(f)\qquad(f\in A).
$$
Consequently the assignments $X_j\mapsto X_j[1]$ and $T_i\mapsto\mathcal T_i$ define an $R_0$-algebra homomorphism from the presented affine Hecke algebra to $K\rtimes S_n$. The coefficient of $[s_i]$ in $\mathcal T_i$ is nonzero in $K$.

## Facts & Assumptions

**Given:** The universal coefficient ring $R_0$, Laurent algebra $A$, fraction field $K$, type-A action, divided differences $D_i$, and the presented algebra $H_n^{\mathrm{aff}}$.

[F1] [[def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]]: $A$ is a domain, $D_i:A\to A$, $D_i(fg)=D_i(f)g+s_i(f)D_i(g)$, and the adjacent transposition interchanges $X_i,X_{i+1}$.

[F2] [[def-hh-type-a-rational-skew-group-algebra]]: $K\rtimes S_n$ has basis $[w]$ over $K$ and multiplication $(a[w])(b[v])=a\,w(b)[wv]$.

[F3] [[def-hh-type-a-affine-bernstein-presentation]]: the defining relations are commuting invertible $X_j$, $(T_i-Q)(T_i+1)=0$, the finite type-A braid relations, and the Bernstein cross-relations on the $X_j$.

[F4] [[lem-hh-finite-polynomial-and-localization-constructions]]: $A$ has its Laurent monomial basis and embeds in the fraction field $K$.

## Proof

**Given:** The data of the Statement.

1.1 Put $c(z):=(Q-1)/(1-z)$ and $d(z):=(1-Qz)/(1-z)=Q-c(z)$. In the skew group algebra, $\mathcal T_i=c(r_i)[1]+d(r_i)[s_i]$. Both $1-r_i$ and $1-Qr_i$ are nonzero in $A$, because their two terms are distinct Laurent monomials over $R_0$ by [F4]. Hence $c(r_i),d(r_i)$ are defined in $K$ and $d(r_i)\ne0$. [given, F1, F2, F4]

2.1 For $f\in A$, multiplication in [F2] gives $\mathcal T_i f-s_i(f)\mathcal T_i=c(r_i)(f-s_i(f))=(Q-1)D_i(f)$. As an operator on $A$, $\mathcal T_i(f)=Q s_i(f)+(Q-1)D_i(f)$, which lies in $A$ by [F1]. Thus it preserves $A$ and satisfies the full Bernstein relation, not only its values on generators. [F1, F2, step 1.1]

2.2 The rational functions $c,d$ satisfy $c(z)+c(z^{-1})=Q-1$, $d(z)=Q-c(z)$, and $d(z^{-1})=1+c(z)$ by direct simplification. Expanding $(c(r_i)[1]+d(r_i)[s_i])^2$ with [F2], its $[s_i]$ coefficient is $d(r_i)(c(r_i)+c(r_i^{-1}))=(Q-1)d(r_i)$, and its $[1]$ coefficient is $c(r_i)^2+d(r_i)d(r_i^{-1})=c(r_i)^2+(Q-c(r_i))(1+c(r_i))=Q+(Q-1)c(r_i)$. Therefore $\mathcal T_i^2=(Q-1)\mathcal T_i+Q$, equivalent to $(\mathcal T_i-Q)(\mathcal T_i+1)=0$. [F2, step 1.1, algebra]

2.3 If $|i-j|>1$, the transpositions $s_i,s_j$ commute and each fixes the coefficients $c(r_j),d(r_j)$ or $c(r_i),d(r_i)$ of the other operator. Expanding their product by [F2] therefore gives $\mathcal T_i\mathcal T_j=\mathcal T_j\mathcal T_i$. [F1, F2, step 1.1]

3.1 For adjacent indices put $s=s_i$, $t=s_{i+1}$, $r=X_i/X_{i+1}$, $u=X_{i+1}/X_{i+2}$, and abbreviate $c_r=c(r)$, $c_u=c(u)$, $c_{ru}=c(ru)$ and similarly for $d$. The identities in step 2.2 give $c(r^{-1})=Q-1-c_r$, $c(u^{-1})=Q-1-c_u$, and $c_{ru}(Q-1-c_r-c_u)=-c_rc_u$, since the left side is $-(Q-1)^2/((1-r)(1-u))$. The variable permutations give $s(u)=t(r)=ru$, $st(r)=u$, and $ts(u)=r$. [F2, step 2.2, algebra]

4.1 Expanding $\mathcal T_s\mathcal T_t\mathcal T_s$ and $\mathcal T_t\mathcal T_s\mathcal T_t$ by [F2], their coefficient pairs, in the order $[1],[s],[t],[st],[ts],[sts]=[tst]$, are respectively: $[1]$: $(c_r^2c_u+d_rc_{ru}d(r^{-1}),\,c_u^2c_r+d_uc_{ru}d(u^{-1}))$; $[s]$: $(d_r(c_rc_u+c_{ru}c(r^{-1})),\,c_ud_rc_{ru})$; $[t]$: $(c_rd_uc_{ru},\,d_u(c_{ru}c(u^{-1})+c_uc_r))$; $[st]$: $(d_rd_{ru}c_u,\,c_ud_rd_{ru})$; $[ts]$: $(c_rd_ud_{ru},\,d_ud_{ru}c_r)$; and $[sts]$: $(d_rd_{ru}d_u,\,d_ud_{ru}d_r)$. The last three pairs agree by commutativity of $K$. For the $[s]$ pair, substituting $c(r^{-1})=Q-1-c_r$ reduces equality to $c_rc_u+c_{ru}(Q-1-c_r-c_u)=0$; for $[t]$ the same identity gives equality after substituting $c(u^{-1})=Q-1-c_u$. For $[1]$, using $d_r=Q-c_r$, $d(r^{-1})=1+c_r$ and their $u$ analogues, the difference of the entries is $(c_r-c_u)\bigl(c_rc_u+c_{ru}(Q-1-c_r-c_u)\bigr)=0$. Hence the adjacent braid relation holds. [F2, step 2.2, step 3.1, algebra]

5.1 The Bernstein, quadratic, distant, and adjacent braid calculations show that the operators satisfy every relation in [F3], including the commuting Laurent variables and their inverses. The universal property of the presented quotient therefore gives the asserted homomorphism. Step 1.1 established that the coefficient $d(r_i)$ of $[s_i]$ is nonzero. No Choice principle or specialization is used. [F2, F3, step 1.1, step 2.1, step 2.2, step 2.3, step 4.1] ∎

