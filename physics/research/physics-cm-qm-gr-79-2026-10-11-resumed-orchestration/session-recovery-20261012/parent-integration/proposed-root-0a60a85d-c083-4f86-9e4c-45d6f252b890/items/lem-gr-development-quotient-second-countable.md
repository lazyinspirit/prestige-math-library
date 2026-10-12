---
id: lem-gr-development-quotient-second-countable
kind: lemma
title: "Second countability of the universal development quotient from a countable dense set and exponential charts"
status: draft
origin: session
domain: mathematics
dependency_level: 39
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: constructive
deps: [lem-gr-joint-exponential-diffeomorphism, lem-gr-universal-development, lem-gr-development-quotient-dense-set, thm-gr-convex-normal-neighborhoods, thm-gr-local-geodesics-and-exponential-map, def-second-countable-space, def-topology-basis-subbasis, thm-countable-union-of-countable, def-countable-choice, def-countable, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real, lem-q-and-irrationals-dense-r]
dependency_roles:
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
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

More precisely, choose one basis at each $d\in D$. In these coordinates let
$B_d(a,r)\subseteq T_dQ$ be the Euclidean open ball centered at
$a\in\mathbb Q^4$ with radius $r\in\mathbb Q_{>0}$, and let
$\mathcal E_d$ be the maximal exponential domain. Then
$$\mathcal B:=\{\exp_d(B_d(a,r)):d\in D, a\in\mathbb Q^4, r\in\mathbb Q_{>0}, B_d(a,r)\subseteq\mathcal E_d, \exp_d|_{B_d(a,r)}\text{ is a diffeomorphism onto an open subset of }Q\}$$
is a countable basis of the topology of $Q$.

## Facts & Assumptions

**Given:** the universal development $Q$ with its member maps and a countable dense subset $D\subseteq Q$.

[L1] The member images are open and cover $Q$, and the member maps are diffeomorphisms preserving the metric ([[lem-gr-universal-development]] clauses (c)-(d)). Exponential maps agree with their member counterparts whenever the corresponding segment stays in the member, by uniqueness of the geodesic ODE ([[thm-gr-local-geodesics-and-exponential-map]]).

[L2] Inside a member containing a prescribed point $p$, the joint exponential map $(q,v)\mapsto(q,\exp_qv)$ has a diffeomorphic restriction near $(p,0)$ with image containing a product neighborhood of $(p,p)$. Its smooth inverse gives $v(q,p)$ for every $q$ in a sufficiently small neighborhood of $p$. For each such $q$, its open fiber domain $H_q$ maps diffeomorphically onto an open subset of the member containing $p$ ([[lem-gr-joint-exponential-diffeomorphism]] clauses (a)-(c)). This argument can be performed entirely inside the member, even without using second countability of $Q$.

[L3] Countable Choice supplies one basis at each $d\in D$. Rational translated balls form a basis of the resulting Euclidean tangent space, and $D\times\mathbb Q^4\times\mathbb Q_{>0}$ is countable; every subfamily and image of this set is countable ([[def-countable-choice]], [[def-countable]], [[thm-countable-union-of-countable]], [[lem-q-and-irrationals-dense-r]], [[def-topology-basis-subbasis]]).

## Proof

**Proof technique:** constructive.

1.1 (Countability and openness.) Use [L3] to choose the tangent bases. The family $\mathcal B$ is the image of a subset of the countable indexing set $D\times\mathbb Q^4\times\mathbb Q_{>0}$ and hence countable. Each member is open by the defining diffeomorphism condition. No arbitrary small exponential domain is fixed at a dense center. [L3, construct]

2.1 (The basis criterion.) Let $p\in O\subseteq Q$ with $O$ open. Choose a member containing $p$ and the product neighborhood of $(p,p)$ supplied by [L2]. Its first factor is an open neighborhood $V$ of $p$ in $Q$. Choose $d\in D\cap V$ by density. The inverse velocity $v(d,p)$ lies in $H_d$, where $\exp_d$ is a diffeomorphism onto an open subset of this member. Thus $H_d\cap\exp_d^{-1}(O)$ is an open neighborhood of $v(d,p)$ in $T_dQ$. In the chosen basis at $d$, select a rational translated ball $B_d(a,r)$ containing $v(d,p)$ and contained in this neighborhood by [L3]. By [L1]-[L2], the quotient exponential on this ball agrees with the member exponential and restricts to a diffeomorphism onto an open subset of $Q$, so its image belongs to $\mathcal B$ and satisfies $p\in\exp_d(B_d(a,r))\subseteq O$. [L1, L2, L3, step 1.1, construct]

3.1 (Conclusion.) Steps 1.1 and 2.1 show that $\mathcal B$ is a countable family of open sets satisfying the basis criterion. Therefore it is a countable basis and $Q$ is second countable ([[def-second-countable-space]]). [step 1.1, step 2.1, discharge-construct] ∎

## Remarks

Translated balls are necessary in this construction: after one selects arbitrarily small normal domains at dense centers, their centered subballs need not cover any prescribed point outside $D$. The family above uses all rational translated balls on which the exponential is a diffeomorphism, rather than one selected normal domain per center. The proof gives a general local-exponential countability criterion and does not invoke the conclusion of second countability from the universal-development lemma.
