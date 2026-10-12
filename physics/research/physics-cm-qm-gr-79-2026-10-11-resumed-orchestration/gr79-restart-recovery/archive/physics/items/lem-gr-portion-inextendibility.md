---
id: lem-gr-portion-inextendibility
kind: lemma
title: "A maximal connected portion of an inextendible causal curve inside an open subset is inextendible there"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, lem-gr-causal-curve-calculus, def-continuity-real, def-interval]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the step 'the corresponding curve segment in U_alpha can be considered to be an inextendible timelike curve in U_alpha' in the proof of Theorem 3.4 step 2, printed p. 14"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): inextendible causal curves and their segments, Definitions 2.2.7 and 2.9.8 and Theorem 2.9.9, printed pp. 11-13 and 45-50"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), let $V\subseteq U\subseteq M$ be open
subsets with the induced metric and time orientation, and let
$\gamma:I\to U$ be a future causal curve
([[def-gr-causal-curves-and-reachability]]) that is inextendible in the
Lorentzian manifold $U$: $\gamma$ does not converge to any point of $U$ as its
parameter tends to either end of $I$ (clause (d) of
[[def-gr-causal-curves-and-reachability]], read with ambient set $U$). Let $J$
be a connected component of
$$\gamma^{-1}[V]:=\{t\in I:\gamma(t)\in V\}.$$
Then $\gamma|_J$, regarded as a future causal curve in the Lorentzian manifold
$V$ with the restricted fields, is inextendible in $V$.

## Facts & Assumptions

**Given:** open sets $V\subseteq U\subseteq M$, a future causal curve $\gamma:I\to U$ inextendible in $U$, and a connected component $J$ of $\gamma^{-1}[V]$.

[L1] Regularity and components: a future causal curve is locally absolutely continuous, hence continuous on its interval ([[def-gr-causal-curves-and-reachability]], [[lem-gr-causal-curve-calculus]], [[def-continuity-real]], [[def-interval]]); therefore $\gamma^{-1}[V]$ is relatively open in $I$ and each of its connected components is of the form $I\cap(\alpha,\beta)$ for some $\alpha<\beta$ in $[-\infty,+\infty]$.

[L2] Inextendibility: for a future causal curve $\delta$ on an interval $K$ in a Lorentzian manifold $W$, and for a real interval $K$ with $\sup K$ (respectively $\inf K$) finite, the curve is future-inextendible (respectively past-inextendible) exactly when it does not converge to a point of $W$ as the parameter tends to that end; at an unbounded end, it is one-sided inextendible exactly when it does not converge as the parameter tends to $+\infty$ or $-\infty$ ([[def-gr-causal-curves-and-reachability]] clause (d)). Convergence to a point $y\in V$ and convergence to the same point $y\in U\supseteq V$ are the same condition, since $V$ and $U$ are open subsets of the same manifold.

No choice principle is used in this item.

## Proof

**Proof technique:** direct.

1.1 (Ends of a component.) Let $J=I\cap(\alpha,\beta)$ be the component of [L1]. If $\alpha\in I$ then $\alpha\notin J$ and $\gamma(\alpha)\notin V$: otherwise $\gamma(\alpha)\in V$ with $V$ open would make $\gamma^{-1}[V]$ contain a relative neighbourhood of $\alpha$ in $I$, so that $J$ would extend strictly to the left of $\alpha$, contradicting that $J$ is a component. Similarly, if $\beta\in I$ then $\beta\notin J$ and $\gamma(\beta)\notin V$. [L1, algebra]

2.1 (The left end.) Suppose $\alpha\in I$ (finite and in the domain). By step 1.1, $\gamma(t)\to\gamma(\alpha)\notin V$ as $t\to\alpha$ along $J$; since limits in the ambient manifold are unique, $\gamma|_J$ does not converge to any point of $V$ at its past end. Suppose instead that $\alpha=\inf I$ with $\alpha$ finite or $-\infty$, and that $\gamma|_J$ converged to some $y\in V$ as $t\to\inf I$. Then $y\in V\subseteq U$, so $\gamma$ would converge to the point $y\in U$ of its ambient manifold at its past end, contradicting the hypothesis that $\gamma$ is inextendible in $U$ by [L2]. Hence in both cases $\gamma|_J$ does not converge to a point of $V$ at its past end. [step 1.1, given, L2, contradiction]

2.2 (The right end.) The same argument with $\beta$ and $\sup I$ in place of $\alpha$ and $\inf I$, and with "past" replaced by "future", shows that $\gamma|_J$ does not converge to a point of $V$ at its future end. [step 2.1, L2, contradiction]

3.1 (Conclusion.) The restricted curve $\gamma|_J$ has image in $V$, is locally absolutely continuous, and has causal velocity almost everywhere, so it is a future causal curve of the Lorentzian manifold $V$ ([L1]); by steps 2.1 and 2.2 it converges to no point of $V$ at either end, so by [L2] it is inextendible in $V$. This is the assertion. [step 2.1, step 2.2, L1, L2] ∎

## Remarks

The conclusion fails without the hypothesis that $\gamma$ is inextendible in $U$: a curve that converges to a point of $U\setminus V$ has portions inside $V$ that converge at that point of $U$ and are extendible in $V$ (the maximal portion can be extended by a short timelike continuation inside $V$ after passing the limit, when the limit lies on the closure of $V$). This failure is exactly the case excluded in step 2.1.
