---
id: "lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive"
kind: "lemma"
title: "The metric projection onto a closed convex set is nonexpansive"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 1
deps:
  - "def-countable-choice"
  - "def-hilbert-space"
  - "def-real-and-complex-inner-product-space"
  - "lem-hilbert-projection-characterisation-by-a-variational-inequality"
  - "thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces"
  - "thm-projection-onto-a-nonempty-closed-convex-set"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. T. Oden and N. Kikuchi, Theory of variational inequalities with applications to problems of flow through porous media, International Journal of Engineering Science 18 (1980), 1173-1284"
      url: "https://jtoden.oden.utexas.edu/wp-content/uploads/2013/06/1980-001.TheoryofVariationalInequalitieswithApplicationstoProblemsofFlowThroughPorousMedia.pdf"
      locator: "Chapter 1 Sections 1.2-1.5, printed pp. 1180-1189 (projections onto closed convex sets; construction of the contraction T(w)=P_K(I-pA)w and its constant (3.15))"
    - title: "Anna Nagurney, Variational Inequalities, University of Massachusetts Amherst lecture notes (2002)"
      url: "https://supernet.isenberg.umass.edu/austria_lectures/fvisli.pdf"
      locator: "printed pp. 5-33 (projection Theorem 2; nonexpansiveness Corollary 1; fixed-point equivalence Theorem 3)"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a real Hilbert space ([[def-hilbert-space]]) and let $K\subseteq H$ be nonempty, closed and convex, with metric projection $P_K:H\to K$, the unique nearest point map of [[thm-projection-onto-a-nonempty-closed-convex-set]]. Then for all $x,y\in H$
$$\|P_Kx-P_Ky\|\le\|x-y\|,$$
and $P_K$ is firmly nonexpansive in the equivalent forms
$$\langle P_Kx-P_Ky,\,x-y\rangle\ge\|P_Kx-P_Ky\|^2,\qquad \langle (x-P_Kx)-(y-P_Ky),\,P_Kx-P_Ky\rangle\ge0 .$$

## Facts & Assumptions

**Given:** A real Hilbert space $H$, a nonempty closed convex set $K\subseteq H$, and points $x,y\in H$; Countable Choice is available.

[A1] [[def-countable-choice]]: Countable Choice, consumed by the existence-and-uniqueness theorem for nearest points.

[F1] [[thm-projection-onto-a-nonempty-closed-convex-set]]: under Countable Choice the nearest point $P_Kz$ of $K$ to $z$ exists and is unique for every $z\in H$.

[F2] [[lem-hilbert-projection-characterisation-by-a-variational-inequality]]: for $u\in K$ one has $u=P_Kz$ if and only if $\langle u-z,v-u\rangle\ge0$ for every $v\in K$.

[F3] [[def-real-and-complex-inner-product-space]]: the inner product is real-valued on a real inner product space, symmetric and linear in each argument, with $\|w\|^2=\langle w,w\rangle$.

[F4] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle u,v\rangle|\le\|u\|\|v\|$ for all vectors $u,v$ of a real or complex inner product space.

## Proof

**Proof technique:** direct.

**Given:** A real Hilbert space $H$, a nonempty closed convex set $K\subseteq H$, and points $x,y\in H$, with Countable Choice available.

1.1 Put $u:=P_Kx$ and $v:=P_Ky$, both well defined by [F1]. By [F2] applied to $u=P_Kx$ with the admissible point $v\in K$ one has $\langle u-x,v-u\rangle\ge0$, and applied to $v=P_Ky$ with the admissible point $u\in K$ one has $\langle v-y,u-v\rangle\ge0$. [A1, F1, F2]

2.1 Adding the two inequalities of step 1.1 and using $u-v=-(v-u)$ twice gives $0\le\langle u-x,v-u\rangle+\langle v-y,u-v\rangle=\langle u-x,v-u\rangle-\langle v-y,v-u\rangle=\langle (u-x)-(v-y),v-u\rangle=\langle (u-v)-(x-y),v-u\rangle=-\|u-v\|^2-\langle x-y,v-u\rangle=-\|u-v\|^2+\langle x-y,u-v\rangle$, that is $\langle P_Kx-P_Ky,x-y\rangle=\langle u-v,x-y\rangle\ge\|u-v\|^2$ by symmetry of the real inner product, the first firmly nonexpansive form. [step 1.1, F3, algebra]

3.1 If $u=v$ the nonexpansiveness inequality is trivial; otherwise [F4] gives $\|u-v\|^2\le\langle u-v,x-y\rangle\le\|u-v\|\,\|x-y\|$, and division by the positive number $\|u-v\|$ yields $\|P_Kx-P_Ky\|=\|u-v\|\le\|x-y\|$. [step 2.1, F3, F4, algebra]

4.1 Finally, $\langle(x-u)-(y-v),u-v\rangle=\langle x-y,u-v\rangle-\|u-v\|^2$ [F3], so the inequality of step 2.1 is exactly the equivalent form $\langle(x-P_Kx)-(y-P_Ky),P_Kx-P_Ky\rangle\ge0$; this completes the proof of both nonexpansiveness statements for arbitrary $x,y$ and arbitrary admissible $K$, with Countable Choice used only through the existence of the projections [A1]. [step 2.1, A1, F3, algebra] ∎ 