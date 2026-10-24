---
id: lem-stably-trivial-bundles-over-spheres-below-the-rank-are-trivial
kind: lemma
title: Stably trivial bundles over spheres below the rank are trivial
deps:
- def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
- cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame
- lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range
- thm-gram-schmidt-orthonormalisation
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proposition 10.24 and its proof, printed p. 210 ($\nu_g=-g^*\nu_M$, and $\nu_g=0$ iff $(\nu_M)_*(x)=0$;
      the classification of rank-$(m-n)$ bundles over $S^n$ by $\pi_n(BO(m-n))$)
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (complete lecture notes, ICTP/Münster)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 3 §3.4, printed pp. 72-74 (the framing/normal-bundle bookkeeping for the surgery step)
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $0\le p<q$ and let $E\to S^p$ be a smooth rank-$q$ real vector bundle. If $E$ is stably trivial, i.e. $E\oplus\epsilon^k$ is a trivial bundle for some $k\ge0$, then $E$ is trivial. Under the additional classifying-space identifications of rank-$q$ bundles with maps to $BO(q)$ and stable bundles with maps to $BO$, the equivalent reformulation is that the classifying map $S^p\to BO(q)$ of $E$ is null-homotopic whenever its image in $BO$ is null-homotopic, and the natural map $\pi_p(BO(q))\to\pi_p(BO)$ is injective for $p<q$.

## Facts & Assumptions

[F1] Part (i) gives choice-free Stiefel connectivity through complement rank minus one; part (ii) extends an admissible partial frame before choosing its orthogonal complement. [[lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range]]

[F2] Gram–Schmidt orthonormalizes a finite independent list and preserves its successive spans. [[thm-gram-schmidt-orthonormalisation]]

[F3] A global vector-bundle frame gives a bundle trivialization and conversely. [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]

## Proof


**Given:** Integers $0\le p<q$ and a smooth rank-$q$ real bundle $E$ with a supplied stable trivialization $E\oplus\varepsilon^k\cong\varepsilon^{q+k}$.

1.1 If $p=0$, the base consists of two points and one finite basis choice in each fibre trivializes $E$. If $k=0$, the stable trivialization is already a trivialization. Otherwise equip the total trivial bundle with its Euclidean metric and orthonormalize the supplied $k$-frame spanning the added trivial summand. It gives a map $T:S^p\to V_k(\mathbb R^{q+k})$, and its orthogonal complement is isomorphic to $E$ by projection along the given direct sum. Since $p<q=(q+k)-k$, the choice-free part (i) of the preceding Stiefel frame-fields lemma makes $T$ nullhomotopic; choose a continuous extension over $D^{p+1}$. [given, construct, F1, F2]

2.1 The projection $P=I-TT^T$ has constant rank $q$ over this ball. Its explicit finite-subdivision projection-and-Gram–Schmidt transport from the centre, given in that lemma, supplies a continuous complementary frame throughout. Restricting to the boundary trivializes $E$ continuously. To obtain a smooth frame, approximate its columns on the compact sphere by smooth ambient columns using a finite cover of sufficiently small round balls: choose smooth nonnegative bumps positive on smaller balls covering the sphere, normalize their finite sum, and form weighted averages of the column values at the finitely many centres. Uniform continuity makes these averages uniformly as close as desired to the original columns. Project them into the smooth complementary subbundle on the sphere. For sufficiently close approximations the Gram determinant remains positive by compactness, so Gram–Schmidt yields a smooth global frame. This is a finite construction and needs no countable choice. [step 1.1, construct, algebra, F1, F2]

3.1 A global smooth frame gives a smooth bundle trivialization. If the classifying-space identifications stated in the reformulation are supplied, stable triviality corresponds to a zero stable class and this implication gives injectivity of $\pi_p(BO(q))\to\pi_p(BO)$ in the stated range. Only injectivity is claimed; the stronger isomorphism at the endpoint would require an additional surjectivity argument. The cases $p=0$ and $k=0$ were handled separately and no choice principle was used. [step 2.1, construct, F3] ∎
