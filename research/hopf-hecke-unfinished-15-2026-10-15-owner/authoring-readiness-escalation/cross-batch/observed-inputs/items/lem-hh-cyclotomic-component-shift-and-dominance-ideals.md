---
id: lem-hh-cyclotomic-component-shift-and-dominance-ideals
kind: lemma
title: "Cyclotomic component shift and multipartition dominance ideals"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps:
  - def-hh-cyclotomic-murphy-elements
  - def-hh-multiplicative-cyclotomic-hecke-algebra
  - def-hh-type-a-affine-bernstein-presentation
  - lem-hh-cyclotomic-commuting-jucys-murphy-generators
  - lem-hh-componentwise-initial-row-straightening
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
justified_by:
  - thm-hh-cyclotomic-murphy-basis-and-cellularity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
      locator: "§3, equations (3.1)–(3.4), Proposition 3.20 and Propositions 3.22–3.25, printed pp. 388–396: component shift, the T_0 term, and dominance ideals. Full text inspected."
---

## Statement

Let $R=\mathbb Z[Q^{\pm1},u_1^{\pm1},\ldots,u_r^{\pm1}]$, and let $L_1=X_1$, $L_{j+1}=Q^{-1}T_jL_jT_j$ be the commuting Murphy generators of the multiplicative cyclotomic algebra. For integers $0=a_1\le a_2\le\cdots\le a_r\le n$, define
$$u_{\mathbf a}=\prod_{c=1}^r\prod_{j=1}^{a_c}(L_j-u_c).$$
For $b=\mathbf a+e_k$ with $b_c\le n$ for every $c$, one has
$$u_{\mathbf a}T_{a_k}\cdots T_1X_1T_1\cdots T_{a_k}=Q^{a_k}u_k u_{\mathbf a}+Q^{a_k}u_{\mathbf b}.$$
An empty string of $T_i$'s is the identity.

For a multipartition $\lambda$, let $N^{\unrhd\lambda}$ and $N^{\triangleright\lambda}$ be the spans of standard Murphy elements whose shapes respectively dominate and strictly dominate $\lambda$. The componentwise finite-generator straightening, the displayed shift identity, and the component coset expansion imply that these spans are two-sided ideals and that multiplying $m_{s,t}$ by $X_1$ has same-shape terms with the same first index $s$, modulo $N^{\triangleright\lambda}$.

## Facts & Assumptions

**Given:** $r,n\ge1$, the universal parameters, the affine and cyclotomic relations, a cumulative vector $\mathbf a$, and the Murphy elements.

[F1] $L_1=X_1$, $L_{j+1}=Q^{-1}T_jL_jT_j$, the $L_j$ commute, $T_jL_jT_j=QL_{j+1}$, and every $T_j$ is a unit. ([[lem-hh-cyclotomic-commuting-jucys-murphy-generators]], [[def-hh-multiplicative-cyclotomic-hecke-algebra]])

[F2] The cyclotomic relation is $p(X_1)=\prod_{c=1}^r(X_1-u_c)=0$. ([[def-hh-multiplicative-cyclotomic-hecke-algebra]])

[F3] The multipartition dominance order, initial tableau, Murphy elements, and generator-fixing anti-involution are as in [[def-hh-cell-datum-dominance-and-cell-ideals]] and [[def-hh-cyclotomic-murphy-elements]].

[F4] The componentwise composition straightening gives dominance-supported expansions; for finite generators its same-shape coefficients are independent of the first tableau. ([[lem-hh-componentwise-initial-row-straightening]])

[F5] Component subgroup cosets have length-additive decompositions and their distinguished representatives preserve the order inside each component interval. ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]])

[F6] The affine type-A presentation has the multiplicative relation $T_iX_iT_i=QX_{i+1}$ and distant commutations $T_iX_1=X_1T_i$ for $i\ge2$. ([[def-hh-type-a-affine-bernstein-presentation]])

## Proof

**Given:** The affine and cyclotomic relations, the cumulative vector $\mathbf a$, and the Murphy basis candidates.

1.1 By the affine recursion in [F1],
$$T_{a_k}\cdots T_1X_1T_1\cdots T_{a_k}=Q^{a_k}L_{a_k+1},$$
including $a_k=0$. By definition $u_{\mathbf b}=u_{\mathbf a}(L_{a_k+1}-u_k)$. Since the $L_j$ commute, multiplying the first identity by $u_{\mathbf a}$ and substituting $L_{a_k+1}=u_k+(L_{a_k+1}-u_k)$ proves the displayed shift identity. [F1, given, algebra]

1.2 For a multipartition $\lambda$, let $n_c=|\lambda^{(c)}|$, $a_c=\sum_{d<c}n_d$, and $\eta=(n_1,\ldots,n_r)$. Write $d(t)=yc$ with $y\in S_\eta$ and $c$ the distinguished component-coset representative, so $t=t^\lambda\cdot y\cdot c$. The tableau $t^\lambda\cdot y$ is standard: $c$ preserves the order of labels within each component interval, so undoing $c$ preserves every row and column inequality of $t$. Let $k$ be the component containing label $1$ in $t^\lambda\cdot c$. The factorization of $c$ is $c=s_{a_k}\cdots s_1c_0$, where $c_0$ fixes $1$ and uses only $s_i$ with $i\ge2$. Because $t^\lambda\cdot y$ is standard, $y$ fixes the first label $a_k+1$ of component $k$. The element $u_{\mathbf a}$ commutes with $T_y$, and $u_{\mathbf b}=u_{\mathbf a}(L_{a_k+1}-u_k)$ also commutes with $T_y$: $y$ fixes index $a_k+1$, and its remaining simple generators are distant from $L_{a_k+1}$. Also $T_{c_0}$ commutes with $X_1$ by [F6]. [F1, F3, F5, F6, algebra]

2.1 Set $P=T_{a_k}\cdots T_1$. Multiply the identity of step 1.1 on the right by $P^{-1}T_{c_0}=T_{a_k}^{-1}\cdots T_1^{-1}T_{c_0}$. The middle factors $T_1\cdots T_{a_k}$ cancel with $P^{-1}$, and $T_{c_0}$ commutes with $X_1$, so
$$u_{\mathbf a}T_cX_1=u_{\mathbf a}h_1+u_{\mathbf b}h_2$$
for finite-Hecke elements $h_1,h_2$ (explicitly, scalar multiples of $u_kP^{-1}T_{c_0}$ and $P^{-1}T_{c_0}$). Therefore
$$m_{s,t}X_1=T_{d(s)}^*x_\lambda T_y\bigl(u_{\mathbf a}h_1+u_{\mathbf b}h_2\bigr).$$
The first summand is governed by [F4], since $u_{\mathbf a}x_\lambda=m_\lambda$. [F1, F4, F6, step 1.1, step 1.2]

2.2 If $k=1$, then $n_1\ge1$, so $a_c\ge1$ for every $c\ge2$. The vector $\mathbf b$ has $b_1=1$ and $b_c=a_c$ for $c\ge2$, hence $u_{\mathbf b}$ contains $\prod_{c=1}^r(L_1-u_c)=p(L_1)=0$ by [F2]. Thus the shifted second summand vanishes in this case. [F2, step 1.1]

2.3 Suppose $k>1$. Define the multicomposition $\nu$ by adding a final row of size $1$ to component $k-1$, reducing the first row of component $k$ by $1$, and leaving all other rows unchanged. Its cumulative component vector is $\mathbf b$. Let $l=\lambda^{(k)}_1$, let $G_1$ permute $a_k+1,\ldots,a_k+l$, and let $G_2$ fix $a_k+1$ and permute the other entries in this interval. The length-additive coset decomposition gives
$$x_\lambda=\sum_{i=1}^lT_{c_i}^*x_\nu,$$
where $c_1,\ldots,c_l$ are the distinguished representatives of $G_2\backslash G_1$ in increasing length. Each tableau $u_i=t^\nu\cdot c_i\cdot d(s)$ is row standard: the labels $(a_k+1)d(s)<\cdots<(a_k+l)d(s)$ occur increasingly in the first row of component $k$ of $s$, and $c_i$ moves exactly one of them to the new final row of component $k-1$. Consequently $\operatorname{comp}_{u_i}(j)=\operatorname{comp}_s(j)$ except on those moved entries, where the component changes from $k$ to $k-1$. Since $u_{\mathbf b}x_\nu=m_\nu$, it follows that
$$T_{d(s)}^*x_\lambda u_{\mathbf b}=\sum_{i=1}^l m^\nu_{u_i,t^\nu}.$$
The shifted summand in step 2.1 is this sum multiplied on the right by the finite element $T_yh_2$, so [F4] straightens it to standard terms. [F1, F3, F4, F5, step 1.2]

3.1 The component sizes of $\nu$ move one box from component $k$ to component $k-1$. Before component $k-1$, cumulative dominance counts agree with $\lambda$; at the final row of component $k-1$ the count increases by one. At component $k$, the previous-component increase is canceled by the decrement of its first row; at later components the total sizes agree again. Sorting the rows of each component into a partition can only increase its row-prefix sums. Thus the partition shape obtained from $\nu$ strictly dominates $\lambda$, and every straightened shape in the shifted summand strictly dominates $\lambda$. For $k=1$ the shifted summand was zero by step 2.2. The unshifted summand has the fixed-first-index finite-generator law by [F4]. Hence multiplication of any standard Murphy element by $X_1$ has only shapes $\unrhd\lambda$, with same-shape first index unchanged and coefficients independent of that first index. [F2, F3, F4, step 2.1, step 2.2, step 2.3]

3.2 The cyclotomic relation has unit constant coefficient $(-1)^r\prod_cu_c$. Writing $p(X_1)=X_1^r+c_{r-1}X_1^{r-1}+\cdots+c_1X_1+c_0$ with $c_0\in R^\times$, the relation gives
$$X_1^{-1}=-c_0^{-1}(X_1^{r-1}+c_{r-1}X_1^{r-2}+\cdots+c_2X_1+c_1).$$
Also $T_i^{-1}=Q^{-1}(T_i-(Q-1))$, and each $X_j$ is a word in $X_1,T_1,\ldots,T_{j-1}$ by the affine recursion. Therefore closure under right multiplication by $X_1$ and the $T_i$ implies closure under all algebra generators and their inverses. [F1, F2, step 3.1, algebra]

3.3 For each $\lambda$, steps 2.1–3.2 and [F4] show that $N^{\unrhd\lambda}$ is a right ideal; applying $*$ gives a left ideal. Since $N^{\triangleright\lambda}$ is the sum of $N^{\unrhd\mu}$ over the finitely many minimal shapes $\mu\triangleright\lambda$, it too is a two-sided ideal. This completes the stated component-shift route conditional on [F4]. [F3, F4, step 3.1, step 3.2] ∎

## Proof status

The algebraic shift identity and the cyclotomic vanishing at component $k=1$ are proved directly. The dominance-ideal argument depends on the [F4] componentwise dominance interface, which depends on the unresolved type-A dominance refinement identified in [[lem-hh-type-a-garnir-straightening-and-murphy-cell-law]]. This item is therefore escalated; no readiness or source acceptance is inferred.
