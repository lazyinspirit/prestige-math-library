---
id: thm-integral-morse-differential-squares-to-zero
kind: theorem
title: "The integral Morse differential squares to zero"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-countable-choice, def-signed-morse-differential-over-the-integers, lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli, thm-index-two-compactification-is-a-compact-one-manifold-with-boundary, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, lem-breaking-length-is-bounded-by-index-drop, def-chain-complex-in-an-abelian-category, def-integers, def-broken-morse-trajectory, def-morse-smale-pair]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., complete PDF"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Corollary 2.5.2 and Remark 2.5.3(a), printed pp. 64-66 (the signed boundary operator satisfies $\\partial^2=0$)"
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex for Infinite-Dimensional Manifolds, complete PDF"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
      locator: "Theorem 2.11, printed pp. 69-73 (identification with the cellular boundary)"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, 2016, supervised by C. Wendl), complete PDF"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Sec. 8, printed pp. 70-72 (opposite signs at the two ends of each component give $B^2=0$)"
dependency_level: 7
---

## Statement

Assume the Axiom of Choice. Let $(f,X)$ be Morse--Smale on a closed manifold and fix an orientation of every unstable manifold. Then the signed Morse differential of [[def-signed-morse-differential-over-the-integers]] satisfies $\partial_{k-1}\circ\partial_k=0$ for every $k$. Equivalently, the integral Morse complex is a chain complex over $\mathbb Z$, whose homology is the integral Morse homology of $(f,X)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Morse--Smale pair $(f,X)$ on a closed manifold, orientations of all unstable manifolds, and an integer $k$.

[A1] The Axiom of Choice; the finiteness of the index-one moduli spaces and the oriented boundary-count lemma are supplied through it, the latter with $\mathrm{AC}_\omega$ via the bridge ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F1] On a basis element the signed differential is $\partial_kp=\sum_{q\in\operatorname{Crit}_{k-1}(f)}\bigl(\sum_{\gamma\in\mathcal M(p,q)}\epsilon(\gamma)\bigr)q$, with finite inner and outer sums and signs supplied by the unstable orientations ([[def-signed-morse-differential-over-the-integers]], [[def-integers]]).

[F2] For $\lambda(p)-\lambda(q)=2$ the compactification $\overline{\mathcal M}(p,q)$ is a compact oriented one-manifold with boundary whenever the unstable orientations are fixed, and its boundary is the disjoint union of the products $\mathcal M(p,r)\times\mathcal M(r,q)$ over $r$ of index $\lambda(p)-1$; every such boundary point is once-broken ([[thm-index-two-compactification-is-a-compact-one-manifold-with-boundary]], [[lem-breaking-length-is-bounded-by-index-drop]], [[def-broken-morse-trajectory]]).

[F3] With the orientation of the compactification restricting to the flow-first orientation of the interior and the outward-normal-first orientation on the boundary, the boundary sign of a once-broken point is $-\epsilon(\gamma_1)\epsilon(\gamma_2)$ ([[lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli]]).

[F4] Under $\mathrm{AC}_\omega$, the sum of the outward-normal-first boundary signs of a compact oriented smooth one-manifold vanishes; on each interval component the two endpoints carry opposite signs and circle components contribute nothing ([[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]).

[F5] A chain complex over $\mathbb Z$ is a family of $\mathbb Z$-modules with degree $-1$ endomorphisms squaring to zero ([[def-chain-complex-in-an-abelian-category]]).

## Proof

**Proof technique:** direct, by evaluating on basis elements.

1.1 Let $p\in\operatorname{Crit}_k(f)$ and $q\in\operatorname{Crit}_{k-2}(f)$. Expanding [F1], the coefficient of $q$ in $\partial_{k-1}(\partial_kp)$ is the finite sum $\sum_{r\in\operatorname{Crit}_{k-1}(f)}\sum_{\gamma_1\in\mathcal M(p,r),\ \gamma_2\in\mathcal M(r,q)}\epsilon(\gamma_1)\epsilon(\gamma_2)$: only intermediate points of index $k-1$ can contribute, both index drops are equal to one, and the two inner sums are finite by [F1]. [F1, algebra]

2.1 The terms of that sum are indexed by the once-broken trajectories $(\gamma_1,\gamma_2)$ with $\lambda(p)-\lambda(r)=\lambda(r)-\lambda(q)=1$, which by [F2] are exactly the boundary points of the compact oriented one-manifold $\overline{\mathcal M}(p,q)$; and by [F3] the summand attached to $(\gamma_1,\gamma_2)$ is the negative of its outward-normal-first boundary sign. Hence the coefficient of $q$ in $\partial^2p$ is the negative total signed boundary count of $\overline{\mathcal M}(p,q)$. [F2, F3, step 1.1]

3.1 By [F4] the total signed boundary count of a compact oriented one-manifold vanishes; hence the coefficient of $q$ in $\partial^2p$ is zero. For a critical point not of index $k-2$ the coefficient is zero by the definition of the chain groups, so $\partial_{k-1}\circ\partial_k=0$ on basis elements and hence on all of $CM_k(f,X;\mathbb Z)$ by linearity. [A1, F4, step 2.1]

4.1 Since this holds for every $k$, the integral Morse complex satisfies the defining condition of a chain complex over $\mathbb Z$ by [F5]; its homology is the integral Morse homology of $(f,X)$ by definition. [F5, step 3.1] ∎
