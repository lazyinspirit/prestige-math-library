---
id: def-hh-cyclotomic-murphy-elements
kind: definition
title: "Cyclotomic Murphy elements"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps:
  - def-hh-multiplicative-cyclotomic-hecke-algebra
  - def-hh-cell-datum-dominance-and-cell-ideals
  - def-hh-multipartitions-standard-tableaux-and-generic-contents
  - lem-hh-cyclotomic-commuting-jucys-murphy-generators
  - lem-hh-hecke-anti-involution-bar-and-normalization
  - lem-hh-cyclotomic-anti-involution-fixes-generators
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
  - thm-hh-generic-coxeter-hecke-standard-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
    - title: "Andrew Mathas, Hecke algebras with cyclotomic parameters, in Iwahori-Hecke Algebras and Schur Algebras of the Symmetric Group, complete preliminary lecture manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3 (2014)"
      url: "https://arxiv.org/pdf/1304.0906v3"
---

## Definition

Fix $r,n\ge1$ and work in the universal cyclotomic algebra $H_{r,n}$ of [[def-hh-multiplicative-cyclotomic-hecke-algebra]], with parameters $Q,u_1,\ldots,u_r$, commuting Jucys–Murphy generators $L_i=X_i$, and finite generators $T_i$. For an $r$-multipartition $\lambda$, put $a_c=\sum_{d<c}|\lambda^{(d)}|$ and define
$$u_\lambda=\prod_{c=2}^{r}\ \prod_{i=1}^{a_c}(L_i-u_c).$$
Let $t^\lambda$ be the row-standard initial multitableau from [[def-hh-cell-datum-dominance-and-cell-ideals]]. Let $S_\lambda$ be the subgroup of $S_n$ that permutes labels within each row of $t^\lambda$, and set $x_\lambda=\sum_{w\in S_\lambda}T_w$ and $m_\lambda=u_\lambda x_\lambda$. The anti-involution $*$ is the generator-fixing map of [[lem-hh-cyclotomic-anti-involution-fixes-generators]].

For a standard multitableau $t$, use the right entry action $t\cdot w:=w^{-1}\cdot t$, where the left action applies $w$ to every entry. Let $d(t)$ be the unique permutation with $t^\lambda\cdot d(t)=t$. Standardness implies that $d(t)$ is the distinguished minimal representative for its row-stabilizer coset. For standard $s,t$ of shape $\lambda$, define
$$m_{st}=T_{d(s)}^*m_\lambda T_{d(t)}.$$
These are specified elements of $H_{r,n}$; this definition does not assert their linear independence or cellularity.

## Facts & Assumptions

**Given:** $r,n\ge1$, the universal parameters, the presentation of $H_{r,n}$, and a multipartition $\lambda$ of $n$ with standard multitableaux $s,t$.

[F1] $L_1,\ldots,L_n$ commute, $L_i=X_i$, and for every polynomial $f$ in these variables,
$T_if(L)=f(s_iL)T_i-(Q-1)L_{i+1}(f(L)-f(s_iL))/(L_i-L_{i+1})$; the quotient is a polynomial. ([[lem-hh-cyclotomic-commuting-jucys-murphy-generators]])

[F2] The affine Hecke generators $T_i$ are units, the cyclotomic parameters are units, and the quotient relation is imposed on $L_1$ only. ([[def-hh-multiplicative-cyclotomic-hecke-algebra]])

[F3] The finite type-A elements $T_w$ are well-defined from reduced words, and parabolic row subgroups have unique distinguished coset representatives with length additivity. ([[thm-hh-generic-coxeter-hecke-standard-basis]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]])

[F4] The $R$-linear anti-involution $*$ fixes every $T_i,L_i$ and satisfies $T_w^*=T_{w^{-1}}$. ([[lem-hh-cyclotomic-anti-involution-fixes-generators]], [[lem-hh-hecke-anti-involution-bar-and-normalization]])

[F5] In component $c$, the labels of $t^\lambda$ form the consecutive interval $a_c+1,\ldots,a_c+|\lambda^{(c)}|$; each row of $t^\lambda$ is a consecutive subinterval. ([[def-hh-multipartitions-standard-tableaux-and-generic-contents]], [[def-hh-cell-datum-dominance-and-cell-ideals]])

## Verification

**Proof technique:** direct.

1.1 The commuting property in [F1] makes each product in $u_\lambda$ a defined polynomial element. The presentation [F2] supplies the coefficient ring, unit parameters, and quotient in which these polynomials live. The row subgroup $S_\lambda$ is a product of finite symmetric groups on consecutive row intervals, so every $T_w$ in $x_\lambda$ is a defined finite Hecke element by [F3]. For standard $t$, the equality $t^\lambda\cdot d(t)=t$ determines $d(t)$ uniquely because the entry action is free; row-increasing entries mean that this representative is minimal in the row-stabilizer coset, by the parabolic description in [F3]. Thus all displayed expressions are elements of $H_{r,n}$. [given, F1, F2, F3, F5, construct]

2.1 It remains to verify the stated commutation. Let $T_i$ generate a row factor belonging to component $k$, so $i,i+1$ lie in that component's label interval. For a factor with index $c\le k$, [F5] gives $a_c<i$, so every $L_j$ in $\prod_{j\le a_c}(L_j-u_c)$ is distant from $T_i$ and commutes with it by [F1]. For a factor with $c>k$, [F5] gives $a_c\ge i+1$, so the factor contains both $(L_i-u_c)$ and $(L_{i+1}-u_c)$; the entire product over $j\le a_c$ is invariant under swapping $L_i,L_{i+1}$. The divided-difference term in [F1] is then zero, and [F1] gives commutation with $T_i$. Therefore $u_\lambda$ commutes with every generator of $S_\lambda$, hence with every $T_w$ in that group and with their sum $x_\lambda$. [given, F1, F5, step 1.1, algebra]

3.1 Since the row subgroup is closed under inversion, $x_\lambda^*=\sum_{w\in S_\lambda}T_{w^{-1}}=x_\lambda$. Also $u_\lambda^*=u_\lambda$ by [F4]. The commutation proved in step 2.1 gives $m_\lambda^*=(u_\lambda x_\lambda)^*=x_\lambda u_\lambda=u_\lambda x_\lambda=m_\lambda$. Applying the anti-involution to the defining formula for $m_{st}$ now yields $m_{st}^*=T_{d(t)}^*m_\lambda T_{d(s)}=m_{ts}$. [F4, step 2.1, algebra] ∎
