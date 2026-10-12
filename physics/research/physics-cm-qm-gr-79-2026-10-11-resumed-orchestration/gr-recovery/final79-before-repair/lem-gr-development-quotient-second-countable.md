---
id: lem-gr-development-quotient-second-countable
kind: lemma
title: "Second countability of the universal development quotient from a countable dense set and exponential charts"
status: draft
origin: session
domain: mathematics
dependency_level: 37
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: constructive
deps: [lem-gr-universal-development, lem-gr-development-quotient-dense-set, thm-gr-convex-normal-neighborhoods, thm-gr-local-geodesics-and-exponential-map, def-second-countable-space, def-topology-basis-subbasis, thm-countable-union-of-countable, def-countable-choice, def-countable, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real, lem-q-and-irrationals-dense-r]
dependency_roles:
  lem-gr-universal-development: mathematical-premise
  lem-gr-development-quotient-dense-set: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-second-countable-space: mathematical-premise
  def-topology-basis-subbasis: mathematical-premise
  thm-countable-union-of-countable: mathematical-premise
  def-countable-choice: mathematical-premise
  def-countable: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuity-real: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the second countability step in the proof of Theorem 2.8, printed pp. 22-23 (the source invokes Geroch's theorem; here the countability is obtained from the explicit dense set and exponential charts)"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "D. H. Fremlin, Measure Theory, Volume 2, Chapter 4A: second countability, bases and countability of subfamilies (background for the basis argument)"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap4a.pdf"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: normal neighbourhoods and the exponential map, Theorems 2.4-2.6, printed pp. 26-27"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $Q$ and the member maps
$\pi|_{U_\alpha}:U_\alpha\to Q_\alpha\subseteq Q$ be as in
[[lem-gr-universal-development]] clauses (c)-(d): $Q$ is a Hausdorff locally
Euclidean smooth four-manifold with a smooth Lorentzian metric $\bar g$, the
open sets $Q_\alpha$ cover $Q$, and each $\pi|_{U_\alpha}$
is a diffeomorphism onto $Q_\alpha$. Let $D\subseteq Q$ be a countable dense
subset, as supplied by [[lem-gr-development-quotient-dense-set]]. Then $Q$ is
second countable ([[def-second-countable-space]]).

More precisely, the family
$$\mathcal B:=\Bigl\{\exp_x\bigl(B(0;r)\bigr):\ x\in D,\ r\in\mathbb Q_{>0},\ B(0;r)\subseteq W_x\Bigr\},$$
where $W_x$ is the star-shaped exponential domain of a strictly convex normal
chart at $x$ ([[thm-gr-convex-normal-neighborhoods]] clause (a)) and $B(0;r)$
is the coordinate ball of radius $r$ in $T_xQ$ in that chart, is a countable
basis of the topology of $Q$.

## Facts & Assumptions

**Given:** the universal development $Q$ with its member maps and a countable dense subset $D\subseteq Q$.

[L1] The structure of $Q$: $Q$ is Hausdorff, locally Euclidean of dimension four, carries a smooth atlas in which the member maps are diffeomorphisms onto open sets, and carries a smooth Lorentzian metric ([[lem-gr-universal-development]] clauses (c)-(d)).

[L2] Convex normal charts: for every $x\in Q$ and every open neighbourhood there are a chart $(U,\chi)$ with $\chi(x)=0$ and $r>0$ such that $C:=\chi^{-1}(B_r)$ lies in the neighbourhood, and for every $q\in C$ there is an open star-shaped neighbourhood $W_q$ of $0$ in $T_qQ$ with $\exp_q|_{W_q}:W_q\to C$ a diffeomorphism; moreover for all $q,q'\in C$ the two-point velocity $v(q,q')$ satisfies $\exp_q(v(q,q'))=q'$ with image in $C$ ([[thm-gr-convex-normal-neighborhoods]] clauses (a)-(b), [[thm-gr-local-geodesics-and-exponential-map]]).

[L3] Countability: the family $\mathcal B$ is a countable union over $x\in D$ of the countable families indexed by rational radii, hence countable by [[thm-countable-union-of-countable]] and [[def-countable]]; Countable Choice is used to select the charts $W_x$ for $x\in D$ ([[def-countable-choice]]).

[L4] Rational and real radii: the coordinate ball of a smaller rational radius inside an open domain is one of the members of $\mathcal B$, and rational radii are cofinal in the positive reals ([[lem-q-and-irrationals-dense-r]], [[def-topology-basis-subbasis]]).

## Proof

**Proof technique:** constructive.

1.1 (Each member of $\mathcal B$ is open.) For $x\in D$ and rational $r$ with $B(0;r)\subseteq W_x$, the restriction $\exp_x|_{W_x}$ is a diffeomorphism onto an open set ([L2]); hence $\exp_x(B(0;r))$ is open in $Q$. [L2, algebra]

2.1 ($\mathcal B$ covers every neighbourhood of every point.) Let $p\in Q$ and let $O\ni p$ be open. Apply [L2] at $p$ with the neighbourhood $O$: there is a convex normal chart $(U,\chi)$ around $p$ with $C=\chi^{-1}(B_r)\subseteq O$. Since $D$ is dense, choose $d\in D\cap C$. Then $p\in C$, so $v(d,p)$ with $\exp_d(v(d,p))=p$ exists with image in $C$ ([L2]). The set $(\exp_d|_{W_d})^{-1}(O\cap C)$ is an open neighbourhood of $v(d,p)$ in $W_d$; choose a rational $s$ with $|v(d,p)|_{\mathrm e}<s$ and $B(0;s)\subseteq(\exp_d|_{W_d})^{-1}(O\cap C)\cap W_d$ ([L4]). Then $$p\in\exp_d\bigl(B(0;s)\bigr)\subseteq O,$$ and $\exp_d(B(0;s))\in\mathcal B$ because $B(0;s)\subseteq W_d$ and $s$ is rational. [step 1.1, L2, L4, construct]

3.1 (Conclusion.) By steps 1.1 and 2.1 the family $\mathcal B$ consists of open subsets of $Q$, is countable by [L3], and for every point and every open neighbourhood of it contains a member that contains the point and is contained in the neighbourhood: $\mathcal B$ is a basis of the topology, so $Q$ is second countable ([[def-second-countable-space]]). [step 1.1, step 2.1, L1, L3, discharge-construct] ∎

## Remarks

This is the explicit replacement for the source's appeal to Geroch's theorem that a connected Hausdorff locally Euclidean manifold with a Lorentzian metric is second countable. The dense set of [[lem-gr-development-quotient-dense-set]] provides countably many base points, and each convex normal exponential chart contributes countably many rational balls; the resulting countable basis covers because every point has a convex normal chart around it and the dense set meets that chart. No conclusion about connectedness, completeness or paracompactness is used beyond the existence of the local normal charts.
