---
id: lem-em-boost-preserves-metric
kind: lemma
title: "The explicit Lorentz boost preserves $\\eta$, has determinant $1$ and preserves the future cone"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
deps: [def-em-minkowski-affine-space, def-linear-map, def-rational-power, lem-rational-power-laws, lem-of-square-monotone, def-real-order, def-coordinate-column-and-matrix-of-a-linear-map, def-determinant-of-a-linear-operator, cor-operator-determinant-by-row-reduction, def-linear-isomorphism-and-invertible-linear-map]
dependency_roles:
  def-em-minkowski-affine-space: mathematical-premise
  def-linear-map: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-real-order: mathematical-premise
  def-coordinate-column-and-matrix-of-a-linear-map: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
  cor-operator-determinant-by-row-reduction: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Tong, Dynamics and Relativity, University of Cambridge Part IA Mathematical Tripos (Lent 2013), §7.1–§7.4.7, printed pp. 107–145"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity (arXiv:gr-qc/9712019v1), Chapter 1, printed pp. 1–30"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $0\le\beta<1$ and put $\gamma:=(1-\beta^2)^{-1/2}>0$
([[def-rational-power]], [[lem-rational-power-laws]]). Define
$\Lambda_\beta:V\to V$ by $(\Lambda_\beta v)^0=\gamma(v^0-\beta v^1)$,
$(\Lambda_\beta v)^1=\gamma(v^1-\beta v^0)$, $(\Lambda_\beta v)^2=v^2$,
$(\Lambda_\beta v)^3=v^3$. Then $\Lambda_\beta$ is linear
([[def-linear-map]]), $\Lambda_\beta$ is a proper orthochronous Lorentz map,
and more precisely: (a) $\eta(\Lambda_\beta v,\Lambda_\beta w)=\eta(v,w)$ for
all $v,w\in V$; (b) $\det\Lambda_\beta=1$; (c) $\Lambda_\beta(C^+)=C^+$;
(d) $\Lambda_\beta^{-1}=\Lambda_{-\beta}$. In particular a future causal vector
has future causal image and $\eta(\Lambda_\beta v,\Lambda_\beta v)=\eta(v,v)$
for every $v$ ([[def-real-order]], [[lem-of-square-monotone]]). The hypothesis
$0\le\beta<1$ is not removable: at $\beta=1$ the factor $\gamma$ is undefined.

## Facts & Assumptions

**Given:** A real $\beta$ with $0\le\beta<1$, the number $\gamma:=(1-\beta^2)^{-1/2}$, the map $\Lambda_\beta:V\to V$ defined in the statement, and the Minkowski space $(V,\eta)$ of [[def-em-minkowski-affine-space]].

[L1] On $V=\mathbb R^4$ the form $\eta(v,w)=-v^0w^0+v^1w^1+v^2w^2+v^3w^3$ is bilinear and symmetric with matrix $\operatorname{diag}(-1,1,1,1)$; the future causal cone is $C^+=\{v:\eta(v,v)\le0,\ v^0>0\}$; a Lorentz map is an invertible linear $L:V\to V$ with $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w$; the map $L$ is proper when $\det L=1$ and orthochronous when $L(C^+)=C^+$ ([[def-em-minkowski-affine-space]]).

[L2] For $a>0$ and rationals $r,s$ the powers of [[def-rational-power]] satisfy $a^r>0$, $a^{r+s}=a^ra^s$ and $a^{-r}=(a^r)^{-1}$ ([[lem-rational-power-laws]]). With $a:=1-\beta^2$, which is positive by the hypothesis, this gives $\gamma=a^{-1/2}>0$ and $\gamma^2=a^{-1/2}a^{-1/2}=a^{-1}=1/a$, so $\gamma^2(1-\beta^2)=1$.

[L3] For $a,b\ge0$ one has $a\le b$ exactly when $a^2\le b^2$ ([[lem-of-square-monotone]]), and the order of $\mathbb R$ is total, with $|x|=x$ for $x\ge0$ ([[def-real-order]]); in particular $0\le\beta<1$ gives $\beta^2<1$ and $1-\beta>0$.

[L4] In an ordered basis the $j$-th column of the matrix of a linear map $T$ is the coordinate column of $T(b_j)$, and the coordinate column of $v$ records the coefficients in $v=\sum_jx_jb_j$ ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L5] The determinant of an operator on a finite-dimensional space is the determinant of its coordinate matrix in any ordered basis ([[def-determinant-of-a-linear-operator]]).

[L6] If $A=[T]_{\mathcal B}$ is row-reduced to an upper triangular matrix $U$ using only row additions, then the determinant is unchanged by each addition and $\det(U)$ is the product of the diagonal entries of $U$ ([[cor-operator-determinant-by-row-reduction]]).

[L7] An invertible linear map has a unique inverse linear map $T^{-1}$ with $T^{-1}\circ T=\operatorname{id}_V$ and $T\circ T^{-1}=\operatorname{id}_V$ ([[def-linear-isomorphism-and-invertible-linear-map]]).

[L8] A map $T:V\to V$ is linear when $T(av+bw)=aT(v)+bT(w)$ for all $a,b\in\mathbb R$ and $v,w\in V$ ([[def-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 $\Lambda_\beta$ is linear: in components $(\Lambda_\beta u)^0=\gamma u^0-\gamma\beta u^1$, $(\Lambda_\beta u)^1=-\gamma\beta u^0+\gamma u^1$, $(\Lambda_\beta u)^2=u^2$, $(\Lambda_\beta u)^3=u^3$, so each component of $\Lambda_\beta u$ is a real linear combination of the components of $u$, and since addition and scalar multiplication in $V$ are pointwise, $\Lambda_\beta(au+a'u')=a\Lambda_\beta u+a'\Lambda_\beta u'$ for all reals $a,a'$; this is linearity in the sense of [L8]. [given, L8, algebra]

1.2 (a) For all $v,w\in V$ one has $\eta(\Lambda_\beta v,\Lambda_\beta w)=\eta(v,w)$, and the same computation holds with $-\beta$ in place of $\beta$: substituting the displayed components into the form of [L1] gives $\eta(\Lambda_\beta v,\Lambda_\beta w)=\gamma^2[-(v^0-\beta v^1)(w^0-\beta w^1)+(v^1-\beta v^0)(w^1-\beta w^0)]+v^2w^2+v^3w^3$, the bracket expands to $-(1-\beta^2)v^0w^0+(1-\beta^2)v^1w^1$, and $\gamma^2(1-\beta^2)=1$ by [L2], so the whole expression equals $-v^0w^0+v^1w^1+v^2w^2+v^3w^3=\eta(v,w)$; only $\beta^2$ occurs, so the computation with $-\beta$ is identical. [given, L1, L2, algebra]

1.3 (d) $\Lambda_{-\beta}\circ\Lambda_\beta=\operatorname{id}_V=\Lambda_\beta\circ\Lambda_{-\beta}$: the map $\Lambda_{-\beta}$ is given by the same formulas with $-\beta$ and is linear by the same component computation as the one displayed for $\Lambda_\beta$, and using $\gamma^2(1-\beta^2)=1$ one computes $(\Lambda_{-\beta}(\Lambda_\beta v))^0=\gamma((\Lambda_\beta v)^0+\beta(\Lambda_\beta v)^1)=\gamma(\gamma(v^0-\beta v^1)+\beta\gamma(v^1-\beta v^0))=\gamma^2(1-\beta^2)v^0=v^0$ and likewise $(\Lambda_{-\beta}(\Lambda_\beta v))^1=\gamma((\Lambda_\beta v)^1+\beta(\Lambda_\beta v)^0)=\gamma^2(1-\beta^2)v^1=v^1$, while both maps fix the last two components; the composite $\Lambda_\beta\circ\Lambda_{-\beta}$ is the same computation with $\beta$ and $-\beta$ interchanged. Hence $\Lambda_{-\beta}$ is a two-sided inverse of $\Lambda_\beta$, and by the uniqueness of the inverse in [L7], $\Lambda_\beta^{-1}=\Lambda_{-\beta}$. [given, L2, L7, algebra]

1.4 At $\beta=1$ the factor $\gamma=(1-\beta^2)^{-1/2}$ is undefined: there $1-\beta^2=0$, while $a^{-1/2}$ is defined for $a>0$ and $0^r$ only for rational $r>0$ [L2], so the hypothesis $0\le\beta<1$ cannot be dropped. [given, L2]

1.5 (b, matrix) The matrix $M$ of $\Lambda_\beta$ in the basis $(e_0,e_1,e_2,e_3)$ has first column the coordinate column $(\gamma,-\gamma\beta,0,0)$, second column $(-\gamma\beta,\gamma,0,0)$ and last two columns those of the identity matrix (the matrix is symmetric, so these are also its first two rows): by [L4] its columns are the coordinate columns of the images of the basis vectors, and the displayed component formulas give $\Lambda_\beta e_0=\gamma e_0-\gamma\beta e_1$, $\Lambda_\beta e_1=-\gamma\beta e_0+\gamma e_1$, $\Lambda_\beta e_2=e_2$, $\Lambda_\beta e_3=e_3$. [given, L4, algebra]

2.1 (b) $\det\Lambda_\beta=1$: replacing the second row of the matrix of step 1.5 by (second row) $+\beta$(first row) gives the row $(0,\gamma(1-\beta^2),0,0)$, since its first entry is $-\gamma\beta+\beta\gamma=0$ and its second entry is $\gamma-\beta^2\gamma$. The resulting matrix is upper triangular with diagonal entries $\gamma$, $\gamma(1-\beta^2)$, $1$, $1$. By [L5] and [L6], the row addition preserves the determinant and $\det\Lambda_\beta=\gamma^2(1-\beta^2)=1$ by [L2]. [step 1.5, L2, L5, L6, algebra]

2.2 (c, inclusion) Both $\Lambda_\beta(C^+)\subseteq C^+$ and $\Lambda_{-\beta}(C^+)\subseteq C^+$: if $v\in C^+$ then $v^0>0$ and $(v^1)^2\le(v^0)^2$, so $|v^1|\le v^0$ by [L3], and since $0\le\beta<1$ one has $(\Lambda_\beta v)^0=\gamma(v^0-\beta v^1)\ge\gamma(v^0-\beta|v^1|)\ge\gamma(1-\beta)v^0>0$ and $(\Lambda_{-\beta}v)^0=\gamma(v^0+\beta v^1)\ge\gamma(1-\beta)v^0>0$, while $\eta(\Lambda_{\pm\beta}v,\Lambda_{\pm\beta}v)=\eta(v,v)\le0$ by step 1.2; these are exactly the two defining conditions of $C^+$. [step 1.2, L2, L3, algebra]

3.1 (c) $\Lambda_\beta(C^+)=C^+$: step 2.2 gives the inclusion $\Lambda_\beta(C^+)\subseteq C^+$ and also $\Lambda_{-\beta}(C^+)\subseteq C^+$, which by $\Lambda_\beta^{-1}=\Lambda_{-\beta}$ from step 1.3 says $\Lambda_\beta^{-1}(C^+)\subseteq C^+$; for $u\in C^+$ the vector $v:=\Lambda_\beta^{-1}u$ then lies in $C^+$ and satisfies $u=\Lambda_\beta v$, so $C^+\subseteq\Lambda_\beta(C^+)$, and with the inclusion the two sets are equal. [step 1.3, step 2.2]

3.2 In particular every future causal vector has future causal image, namely the inclusion from step 2.2, and $\eta(\Lambda_\beta v,\Lambda_\beta v)=\eta(v,v)$ for every $v$ is step 1.2 with $w=v$. [step 1.2, step 2.2]

4.1 $\Lambda_\beta$ is a proper orthochronous Lorentz map: it is linear by step 1.1, it satisfies $\eta(\Lambda_\beta v,\Lambda_\beta w)=\eta(v,w)$ for all $v,w$ by step 1.2, and it has the two-sided inverse $\Lambda_{-\beta}$ by step 1.3, so it is a Lorentz map in the sense of [L1]; $\det\Lambda_\beta=1$ by step 2.1 makes it proper and $\Lambda_\beta(C^+)=C^+$ by step 3.1 makes it orthochronous. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, L1, L7]

5.1 All claims of the statement are established — linearity in step 1.1, (a) in step 1.2, (d) in step 1.3, the excluded endpoint in step 1.4, (b) in steps 1.5 and 2.1, (c) in steps 2.2 and 3.1, the proper orthochronous Lorentz property in step 4.1 and the consequence for future causal vectors in step 3.2 — so the hypothesis is exactly as stated. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1] ∎
