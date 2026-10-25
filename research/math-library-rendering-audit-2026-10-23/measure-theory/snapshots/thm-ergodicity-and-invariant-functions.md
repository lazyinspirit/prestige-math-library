---
id: thm-ergodicity-and-invariant-functions
kind: theorem
title: Equivalent invariant-set and invariant-function criteria for ergodicity
deps: [def-ergodic-measure-preserving-system, lem-mod-null-invariant-sets-have-strictly-invariant-representatives, def-measurable-function-between-measurable-spaces,
  def-complex-lp-and-euclidean-test-function-conventions, thm-finite-and-countable-subadditivity-of-measures, lem-integer-part,
  cor-archimedean-reciprocal]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: E–W Proposition 2.14 pp.23–25; Sarig Proposition 1.1
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For a measure-preserving probability system the following are equivalent: (i) ergodicity; (ii) every $E\in\mathcal I'$ is null or conull; (iii) every measurable real-valued function satisfying $f\circ T=f$ everywhere is constant a.e.; (iv) every measurable real-valued function satisfying $f\circ T=f$ a.e. is constant a.e. Replacing real-valued by complex-valued in either (iii) or (iv) gives equivalent conditions. All functions take finite values.

## Facts & Assumptions

[F1] Ergodicity means every strictly invariant measurable set is null or conull [[def-ergodic-measure-preserving-system]].

[F2] A modulo-null invariant measurable set has a strict invariant representative modulo a measurable null set [[lem-mod-null-invariant-sets-have-strictly-invariant-representatives]].

[F3] Inverse images of Borel sets under measurable real functions are measurable [[def-measurable-function-between-measurable-spaces]].

[F4] Countable unions of null sets are null [[thm-finite-and-countable-subadditivity-of-measures]].

[F5] A complex function is measurable when its real and imaginary components are measurable [[def-complex-lp-and-euclidean-test-function-conventions]].

[F6] Every real number lies in a unique interval [k,k+1) with integer k; applying this to n times the value gives the partition used below [[lem-integer-part]].

[F7] For every positive real epsilon some positive integer n satisfies 1/n<epsilon [[cor-archimedean-reciprocal]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 If the system is ergodic, a set in $\mathcal I'$ has by F2 a strict invariant representative differing by a null set, hence has measure zero or one. Conversely (ii) applies to strictly invariant sets. Thus (i) and (ii) are equivalent. [F1, F2]

2.1 Assume (ii) and let $f:X\to\mathbb R$ be measurable and a.e. invariant. For $n\ge1$, $k\in\mathbb Z$, let $E_{n,k}=f^{-1}([k/n,(k+1)/n))$. Measurability follows from F3. Its pullback differs from it only where $f\circ T\ne f$, so it is in $\mathcal I'$. For each n these fibers partition X. Their measures are zero or one; countable subadditivity excludes all zero, and disjointness and total mass one exclude two fibers of measure one. There is therefore a unique k(n) with $\mu(E_{n,k(n)})=1$. [F3, F4, step 1.1, given, F6]

3.1 The set $Y=\bigcap_{n\ge1}E_{n,k(n)}$ is conull by countable subadditivity. It is nonempty since $\mu(Y)=1$. Fix one $x_0\in Y$. For any $x\in Y$, $|f(x)-f(x_0)|<1/n$ for every n, so $f(x)=f(x_0)$ by the Archimedean property of the real numbers. Thus (ii) implies (iv). The uniquely determined k(n) require no countable choice. [F4, step 2.1, F7]

4.1 For a complex a.e. invariant f, its real and imaginary parts are measurable and a.e. invariant by F5. Apply the preceding argument to both, and intersect the two conull sets; f is constant there. This proves both real and complex versions of (iv), and each implies the corresponding version of (iii). [F5, step 3.1]

5.1 If either version of (iii) holds and E is strictly invariant, then $\mathbf1_E$ is an everywhere invariant measurable function. A constant indicator on a conull nonempty set must have constant value zero or one, so E is null or conull. Thus (iii) implies (i). Also (iv) directly implies (ii) by the same argument applied to an indicator invariant a.e. All listed implications are now closed. [F1, step 4.1, given] ∎
