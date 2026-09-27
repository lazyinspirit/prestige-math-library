---
id: "ex-cech-sign-degree-two-three-opens"
kind: "example"
title: "Three-open Čech sign cancellation"
status: published
origin: pipeline
deps: [def-cech-cochain-complex-open-cover, lem-cech-differential-squares-zero, def-cech-cohomology-open-cover, lem-sheaf-section-over-empty-set-terminal, def-sheaf-on-topological-space, def-topological-space, def-section-restriction-and-global-section]
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
verification:
  audited: 2026-09-27
---

## Example

Let $X$ be a topological space ([[def-topological-space]]), let
$\mathcal F$ be a sheaf of abelian groups on $X$, and let
$\mathcal U=(U_0,U_1,U_2)$ be an open cover of $X$ indexed by the three-element
linearly ordered set $\{0<1<2\}$, with ordered Čech cochains
$C^\bullet(\mathcal U,\mathcal F)$
([[def-cech-cochain-complex-open-cover]]). Write $U_{ij}:=U_i\cap U_j$ and
$U_{012}:=U_0\cap U_1\cap U_2$. Then $$C^0=\mathcal F(U_0)\oplus\mathcal F(U_1)\oplus\mathcal F(U_2),\qquad C^1=\mathcal F(U_{01})\oplus\mathcal F(U_{02})\oplus\mathcal F(U_{12}),\qquad C^2=\mathcal F(U_{012}),\qquad C^p=0\ (p\ge3),$$
the differentials are
$$\delta^0(s_0,s_1,s_2)=\bigl(s_1|_{U_{01}}-s_0|_{U_{01}},\ s_2|_{U_{02}}-s_0|_{U_{02}},\ s_2|_{U_{12}}-s_1|_{U_{12}}\bigr),$$
acting componentwise on the three direct summands of $C^1$, and
$$\delta^1(c_{01},c_{02},c_{12})=c_{12}|_{U_{012}}-c_{02}|_{U_{012}}+c_{01}|_{U_{012}}\in\mathcal F(U_{012}),$$
while $\delta^p=0$ for $p\ge2$. For every $0$-cochain
$s=(s_0,s_1,s_2)$ the two differentials compose to zero by term-by-term
cancellation,
$$\bigl(\delta^1(\delta^0s)\bigr)_{012}=(s_2-s_1)\big|_{U_{012}}-(s_2-s_0)\big|_{U_{012}}+(s_1-s_0)\big|_{U_{012}}=0,$$
each of $s_0,s_1,s_2$ occurring twice with opposite signs; consequently
$\check H^2(\mathcal U,\mathcal F)=\mathcal F(U_{012})/\operatorname{im}\delta^1$,
and the identity is the $p=0$ case of
$\delta^{p+1}\circ\delta^p=0$
([[lem-cech-differential-squares-zero]]).

## Facts & Assumptions

[F1] The ordered $p$-cochains are $C^p(\mathcal U,\mathcal F)=\prod_{i_0<\cdots<i_p}\mathcal F(U_{i_0}\cap\cdots\cap U_{i_p})$, and the differential is $(\delta^ps)_{i_0\cdots i_{p+1}}=\sum_{j=0}^{p+1}(-1)^js_{i_0\cdots\widehat{i_j}\cdots i_{p+1}}|_{U_{i_0}\cap\cdots\cap U_{i_{p+1}}}$ ([[def-cech-cochain-complex-open-cover]]).

[F2] For every $p$ one has $\delta^{p+1}\circ\delta^p=0$, so the cochains form a cochain complex ([[lem-cech-differential-squares-zero]]).

[F3] The Čech cohomology of the fixed cover is $\check H^p(\mathcal U,\mathcal F)=\ker\delta^p/\operatorname{im}\delta^{p-1}$ ([[def-cech-cohomology-open-cover]]).

[F4] For a sheaf of sets the group $\mathcal F(\varnothing)$ is a singleton, so for a sheaf of abelian groups the sections over an empty intersection form the zero group ([[lem-sheaf-section-over-empty-set-terminal]]).

## Verification

**Given:** A topological space $X$, a sheaf of abelian groups $\mathcal F$ on $X$, the open cover $\mathcal U=(U_0,U_1,U_2)$ indexed by $\{0<1<2\}$ and a $0$-cochain $s=(s_0,s_1,s_2)\in\mathcal F(U_0)\oplus\mathcal F(U_1)\oplus\mathcal F(U_2)$.

**Proof technique:** direct.

1.1 The increasing tuples of the linearly ordered set $\{0<1<2\}$ are the three singletons $(0),(1),(2)$ in degree $0$, the three pairs $(0,1),(0,2),(1,2)$ in degree $1$, the triple $(0,1,2)$ in degree $2$, and no increasing $(p+1)$-tuples for $p\ge3$. Evaluating the product formula of [F1] on these tuples gives the four groups displayed in the statement, the product over an empty set of tuples being the zero group. [F1, F4]

2.1 For $s=(s_0,s_1,s_2)\in C^0$ and the pair $(0,1)$ the formula of [F1] reads $(\delta^0s)_{01}=\sum_{j=0}^{1}(-1)^js_{0\cdots\widehat{j}\cdots1}=s_1|_{U_{01}}-s_0|_{U_{01}}$, and the same computation for the pairs $(0,2)$ and $(1,2)$ gives $(\delta^0s)_{02}=s_2|_{U_{02}}-s_0|_{U_{02}}$ and $(\delta^0s)_{12}=s_2|_{U_{12}}-s_1|_{U_{12}}$, that is, the three components of $\delta^0$ displayed in the statement with the signs $+,-$ attached to the second and first index respectively. For $c=(c_{01},c_{02},c_{12})\in C^1$ and the triple $(0,1,2)$ the formula reads $(\delta^1c)_{012}=\sum_{j=0}^{2}(-1)^jc_{0\cdots\widehat{j}\cdots2}=c_{12}|_{U_{012}}-c_{02}|_{U_{012}}+c_{01}|_{U_{012}}$, the alternating signs $+,-,+$ attaching to the omission of $j=0,1,2$. Since $C^3=0$ by [step 1.1], the differential $\delta^2$ and all higher differentials are the zero maps, since their targets are zero. [F1, step 1.1]

3.1 Composing the two computations of [step 2.1] gives $\bigl(\delta^1(\delta^0s)\bigr)_{012}=(s_2-s_1)|_{U_{012}}-(s_2-s_0)|_{U_{012}}+(s_1-s_0)|_{U_{012}}$, all three terms lying in $\mathcal F(U_{012})$, the restrictions of the three components of $\delta^0s$ to the triple intersection. Expanding, the terms $s_2,s_1$ and $s_0$ each occur twice, once with each sign: $s_2-s_2=0$, $-s_1+s_1=0$ and $+s_0-s_0=0$ after collecting, so the sum is $0$ for every $0$-cochain $s$. This is the cancellation announced in the statement and the case $p=0$ of the general identity [F2]. [F2, step 2.1]

4.1 The displayed groups of [step 1.1] and differentials of [step 2.1] are those of the ordered Čech complex of the three-open cover, and [step 3.1] verifies $\delta^1\circ\delta^0=0$ explicitly, in agreement with the general theorem [F2]; the vanishing of $\delta^2$ and of all higher differentials is [step 2.1], so all the remaining composites are zero as well and the cochain groups indeed form a complex. Applying the definition of fixed-cover cohomology [F3] in degree two, where $\delta^2=0$ and $\delta^1$ is displayed in [step 2.1], gives $\check H^2(\mathcal U,\mathcal F)=\ker\delta^2/\operatorname{im}\delta^1=\mathcal F(U_{012})/\operatorname{im}\delta^1$, and the groups in degrees zero and one are $\check H^0=\ker\delta^0$ and $\check H^1=\ker\delta^1/\operatorname{im}\delta^0$. No choice principle is used: the tuples are finite and enumerated, the complex is finite and the cancellation is a finite computation in the abelian group $\mathcal F(U_{012})$. ∎ [F3, step 3.1, step 1.1, step 2.1]
