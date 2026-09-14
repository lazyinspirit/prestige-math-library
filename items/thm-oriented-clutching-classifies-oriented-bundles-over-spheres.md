---
id: thm-oriented-clutching-classifies-oriented-bundles-over-spheres
kind: theorem
title: Oriented clutching classifies oriented bundles over spheres
status: published
origin: pipeline
deps: [thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range, def-oriented-real-vector-bundle-and-oriented-frame-bundle, prop-orientation-is-equivalent-to-an-so-n-reduction]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 1.14"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Oriented clutching, GL_n^+, SO(n), and orientation reversal, printed pp.25–27"
---

## Statement

For $n\geq1$ and $k\geq1$, orientation-preserving isomorphism classes of
oriented rank-$n$ real bundles over $S^k$ are classified by

$$[S^{k-1},\operatorname{GL}_n^+(\mathbb R)]\cong[S^{k-1},\operatorname{SO}(n)].$$

Reversing the chosen fiber orientation acts on a clutching map by conjugation
with an orientation-reversing matrix.

## Facts & Assumptions

**Given:** $n\geq1$, $k\geq1$, and an oriented rank-$n$ bundle over $S^k$.

[F1] Unoriented clutching is controlled by hemisphere trivializations,
homotopies, and disk-extending gauge maps
([[thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range]]).

[F2] Positive frames and orientation-preserving maps have transition matrices
in $\operatorname{GL}_n^+(\mathbb R)$
([[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]).

[F3] With a metric, positive orthonormal frames are the corresponding
$\operatorname{SO}(n)$ reduction
([[prop-orientation-is-equivalent-to-an-so-n-reduction]]).

## Proof

**Proof technique:** direct.

1.1 Each hemisphere disk is connected and the restriction of the oriented bundle is trivial by the finite argument in [F1]. If a chosen trivialization reverses orientation, compose it with one fixed reflection; hence both hemisphere trivializations may be chosen orientation-preserving. Their equatorial transition then lies in $\operatorname{GL}_n^+(\mathbb R)$ by [F2]. [F1, F2, construct]

2.1 Repeat the equivalence calculation of [F1] using only orientation-preserving hemisphere gauges. Such gauges take values in $\operatorname{GL}_n^+$, which is path connected, and their disk restrictions are nullhomotopic. Thus two positive clutching maps give orientation-preservingly isomorphic bundles exactly when they are homotopic, proving the first classification. This includes $k=1$: every map from $S^0$ to the path-connected group has the single unbased homotopy class. [F1, F2, step 1.1]

3.1 Polar normalization preserves determinant sign and deformation retracts $\operatorname{GL}_n^+(\mathbb R)$ onto $\operatorname{SO}(n)$. Equivalently, it orthonormalizes the positive frames in [F3]. It therefore induces the second displayed bijection on homotopy classes. [F3, step 2.1, algebra]

4.1 Fix a reflection $r\in\operatorname{GL}_n(\mathbb R)$. After reversing the chosen orientation of every fiber, the old oriented hemisphere trivializations become orientation-reversing; postcomposing both with $r$ makes them oriented again. If their old transition was $g$, the new one is $rgr^{-1}$. A different reflection differs from $r$ by positive matrices and gives the same action on the classified homotopy classes. The argument is finite and uses no choice principle. [F1, F2, step 2.1, step 3.1, algebra] ∎
