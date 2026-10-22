---
id: lem-knot-function-germs-with-matched-critical-models-are-relatively-isotopic
kind: lemma
title: "Knot function germs with matched critical models are relatively isotopic"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Let $M$ be a compact closed smooth manifold with a specified smooth Riemannian metric, let $K\subset M$ be a smooth embedded circle, and let $W$ be an open neighborhood of $K$. Suppose $F_0,F_1:W\to\mathbb R$ are smooth, their restrictions to $K$ agree with the same function $f$, the critical set $P$ of $f:K\to\mathbb R$ is finite, and $F_0=F_1$ on an open neighborhood of $P$ in $W$. For every open $W_0$ with $K\subset W_0\subset W$ there are a smooth ambient isotopy $\Phi_t$ of $M$, $0\le t\le1$, and an open neighborhood $U$ of $K$ such that $\Phi_0=\mathrm{id}$, every $\Phi_t$ fixes $K$ pointwise, the isotopy is the identity outside a compact subset of $W_0$ and on a neighborhood of $P$, and
$$F_1(\Phi_1(p))=F_0(p)\qquad(p\in U).$$
In particular the maps in this identity are defined throughout the indicated neighborhood. This is a normalization of two given germs whose restrictions and critical models are already matched; it does not construct either germ from a Heegaard diagram or assert any generic family or move-generation theorem.

## Facts & Assumptions

**Given:** The manifold, metric, knot, functions and neighborhoods in the Statement.

[F1] Smooth bumps equal to one near a compact set and supported in a prescribed open neighborhood exist. ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]])

[F2] A smooth time-dependent vector field whose supports lie in one compact subset has a smooth global evolution on a compact time interval, with inverse given by the reversed evolution. ([[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]])

[A1] Countable Choice is allowed; the additional neighborhood and bump selections below are finite compactness constructions. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 Choose open neighborhoods $V_1,V_2$ of the finite set $P$ with $\overline V_1\subset V_2$ and $\overline V_2\subset W_0$, and with $F_0=F_1$ on a neighborhood of $\overline V_2$. These follow by finitely many nested coordinate neighborhoods inside the given agreement set. Put $G_t=(1-t)F_0+tF_1$ and $D=F_1-F_0$. For every $p\in K\setminus V_1$, the tangential differential of $G_t$ is $df_p\ne0$, independently of $t$. Hence $dG_t(p)\ne0$ for all $t$. Compactness of $[0,1]\times(K\setminus V_1)$ and continuity give an open neighborhood $O$ of $K\setminus V_1$, with closure contained in $W_0\setminus P$, on which $dG_t\ne0$ for every $t\in[0,1]$. To see the uniform neighborhood directly, the nonvanishing set is open in the product and contains that compact product; a finite product-neighborhood refinement gives the required spatial neighborhood, which can then be shrunk inside $W_0\setminus P$. [A1, given, construct, choose]

2.1 The compact set $K\setminus V_2$ lies in $O$. Choose by [F1] a smooth $\chi:M\to[0,1]$ equal to one on a neighborhood $O_1$ of this compact set, with support compactly contained in $O$. On $O$ define $$Y_t=-\chi D\frac{\operatorname{grad}G_t}{|\operatorname{grad}G_t|^2},$$ and extend it by zero to $M\setminus O$. The denominator is nonzero on $O$, the metric is given, and the support of $\chi$ lies in its interior; therefore the extension is a smooth time-dependent vector field. It vanishes near $P$, outside a compact subset of $W_0$, and at every point of $K$, since $D|_K=0$. On the neighborhood $U_0=O_1\cup V_2$ of $K$ one has $$\partial_tG_t+dG_t(Y_t)=D(1-\chi)=0.$$ Here the equality on $O_1$ uses $\chi=1$, and on $V_2$ uses $D=0$; wherever the field was extended by zero inside $V_2$ both sides are still zero. [F1, step 1.1, construct, algebra]

3.1 Let $\Phi_t$ be the global evolution of $Y_t$ from time zero, supplied by [F2]. Each $\Phi_t$ is a diffeomorphism with the reverse-time evolution as inverse. The constant trajectories at points of $K$ and near $P$, and outside the fixed compact support, show by uniqueness that the isotopy fixes these sets as asserted. There is an open neighborhood $U$ of $K$ for which $\Phi_t(U)\subset U_0$ for ALL $t\in[0,1]$: the inverse image of $U_0$ under the continuous map $(t,p)\mapsto\Phi_t(p)$ is open and contains $[0,1]\times K$, because every point of $K$ is fixed. The compact-interval tube lemma gives a spatial neighborhood of each point of $K$ valid for the whole interval; taking their union gives $U$. That lemma itself uses just a finite subcover of the time interval by product neighborhoods. Thus every trajectory from $U$ stays in $W$, where both functions are defined and step2.1's identity holds. [F2, step 2.1, construct]

4.1 For $p\in U$ the chain rule and step2.1 give $$\frac{d}{dt}G_t(\Phi_t(p))=\partial_tG_t(\Phi_t(p))+dG_t(Y_t)(\Phi_t(p))=0.$$ Integrating from zero to one yields $F_1(\Phi_1(p))=F_0(p)$. The evolution properties in step3.1 give all support, pointwise-fixing and isotopy clauses. No assumptions about either function away from the indicated neighborhood, no critical-point cancellation and no generic path theorem were used. [step 2.1, step 3.1, algebra] ∎
