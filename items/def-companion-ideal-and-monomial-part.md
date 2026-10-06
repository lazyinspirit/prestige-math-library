---
id: def-companion-ideal-and-monomial-part
kind: definition
title: The monomial part, the non-monomial part and the companion ideal
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
- def-axiom-of-choice
- def-equivalence-of-marked-ideals
- def-ideal-sheaf
- def-marked-ideal
- def-maximal-order-and-tangent-directions
- def-order-of-an-ideal-sheaf-at-a-point
- lem-addition-and-multiplication-of-marked-ideals
- lem-order-semicontinuity-and-snc-strata
- thm-associated-graded-ring-of-a-regular-local-ring
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
---

## Definition

Let $(\mathcal I,E,\mu)$ be a marked ideal on the smooth $K$-scheme $X$, $\mathcal I$ generically nonzero on every irreducible component and $\mu\ge1$ ([[def-marked-ideal]]).
Factoring out the monomial part, write $\mathcal I=M(\mathcal I)\cdot N(\mathcal I)$, where $M(\mathcal I)$ is the monomial part of $\mathcal I$ with respect to $E$, i.e. the product of powers of the invertible ideal sheaves of the components of the members of $E$ that divide $\mathcal I$, and $N(\mathcal I)$ is the complementary part, divisible by no component of a member of $E$; for $E=\varnothing$ one has $M(\mathcal I)=\mathcal O_X$ and $N(\mathcal I)=\mathcal I$.
If $\operatorname{supp}(\mathcal I,E,\mu)=\varnothing$, the marked ideal is already resolved in Step 2, and no companion ideal is assigned. Otherwise put
$$\operatorname{ord}_N(\mathcal I):=\max\{\operatorname{ord}_x(N(\mathcal I)) : x\in\operatorname{supp}(\mathcal I,E,\mu)\}.$$
If $\operatorname{ord}_N(\mathcal I)=0$, then $N(\mathcal I)$ is a unit in a neighborhood of the support, so $(\mathcal I,\mu)$ is locally the monomial marked ideal $(M(\mathcal I),\mu)$ there. Route this case directly to Step 2b; it has no non-monomial companion. When $(\mathcal I,\mu)$ is of maximal order, $(M(\mathcal I),\mu)$ is an equivalent maximal-order input for Step 1; for arbitrary inputs this is the monomial branch, without a claim that it is a maximal-order companion.

Write $r=\operatorname{ord}_N(\mathcal I)$. It is finite in the characteristic-zero setting of this page: the closed order-superlevel sets on the Noetherian $X$ stabilize, and their intersection is empty because $N(\mathcal I)$ is generically nonzero on each smooth component ([[lem-order-semicontinuity-and-snc-strata]], [[def-order-of-an-ideal-sheaf-at-a-point]]). Work on the open neighbourhood $X\setminus\{x:\operatorname{ord}_x N(\mathcal I)>r\}$ of the support. Here $\operatorname{ord}_x N(\mathcal I)\le r$ everywhere; outside this neighbourhood there are no support points to resolve. This restriction is needed when the maximum was taken only over the support.

If $r>0$, define the companion ideal $O(\mathcal I,\mu)$ by
$$O(\mathcal I,\mu):=\bigl(N(\mathcal I),\operatorname{ord}_N(\mathcal I)\bigr)+\bigl(M(\mathcal I),\mu-\operatorname{ord}_N(\mathcal I)\bigr)\quad\text{when }\operatorname{ord}_N(\mathcal I)<\mu,$$
and to $O(\mathcal I,\mu):=(N(\mathcal I),\operatorname{ord}_N(\mathcal I))$ when $\operatorname{ord}_N(\mathcal I)\ge\mu$; the sum is that of [[lem-addition-and-multiplication-of-marked-ideals]]. In the sum case, $0<\operatorname{ord}_N(\mathcal I)<\mu$, so both marks are positive; the sum clause uses AC ([[def-axiom-of-choice]]).
On this neighbourhood the companion is of maximal order: in the sum case its $N^{\mu-r}$ summand has order at most $r(\mu-r)$, which is the sum marking, and in the other case $N$ has order at most $r$. Its support is
$$\operatorname{supp}(O(\mathcal I,\mu))=\operatorname{supp}(\mathcal I,E,\mu)\cap\{x:\operatorname{ord}_x(N(\mathcal I))=\operatorname{ord}_N(\mathcal I)\}.$$
The support formula follows from the marked-sum intersection rule and exact additivity $\operatorname{ord}(MN)=\operatorname{ord}(M)+\operatorname{ord}(N)$ in the regular-local associated graded domain ([[thm-associated-graded-ring-of-a-regular-local-ring]]). A companion selects the maximal residual-order part of the support and need not be equivalent to the original input, even if that input is of maximal order. For example, on $\mathbb A^2\amalg\mathbb A^2$ take $I=(x^2)$ on the first component and $I=(u,v)^2$ on the second, mark $2$, and boundary $V(x)$ on the first component. The original maximal-order support is $V(x)\amalg\{(0,0)\}$; its companion has support only $\{(0,0)\}$ on the second component.
Resolving $O(\mathcal I,\mu)$ lowers the maximal order of the non-monomial part (Step 2a of the algorithm below).
