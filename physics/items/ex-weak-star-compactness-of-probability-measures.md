---
id: ex-weak-star-compactness-of-probability-measures
kind: example
title: Weak-star compactness of probability measures
status: published
origin: pipeline
deps: ["def-dependent-choice", "thm-banach-alaoglu", "lem-positive-c-zero-functionals-have-finite-regular-representing-measures", "thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals", "def-regular-borel-measure-on-an-lch-space", "def-locally-compact-space", "def-compact-support-c-c-and-c-zero-on-an-lch-space", "thm-closed-subspace-of-a-compact-space-is-compact"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (ex-weak-star-compactness-of-probability-measures). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.2.2, invariant-probability application, pp. 133–134, and §3.2.3, Theorem 3.33, pp. 134–135"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§5.3, Theorem 5.10, p. 147"
proof_strategy: direct
---

## Statement

**Assume the ultrafilter lemma and Dependent Choice**
([[def-dependent-choice]]). If $K$ is compact Hausdorff, the regular
Borel probability measures on $K$ form a compact space for convergence against
continuous real- or complex-valued functions, using the corresponding real or
complex dual of $C(K)$.

## Facts & Assumptions

**Given:** The ultrafilter lemma, Dependent Choice, and a compact Hausdorff space $K$.

[F1] Under the ultrafilter lemma, the closed dual unit ball is weak-star compact ([[thm-banach-alaoglu]]).

[F2] Under Dependent Choice, every bounded positive functional on real $C_0(K)$ has a unique finite regular representing measure whose mass is its norm ([[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]]).

[F3] Under Dependent Choice, bounded complex functionals on $C_0(K)$ are uniquely the integrals against finite regular complex Borel measures, with norm equal to total variation ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]]).

[F4] Regular Borel measures are inner regular on every Borel set ([[def-regular-borel-measure-on-an-lch-space]]).

[F5] Every compact space is locally compact ([[def-locally-compact-space]]).

[F6] The spaces $C_c$ and $C_0$ are defined by compact support and compact superlevel sets ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[F7] A closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

## Proof

**Proof technique:** identify probabilities with a weak-star closed slice.

1.1 If $K=\varnothing$, no measure can have total mass one, so the probability space is empty and compact.  Hence assume $K\ne\varnothing$.  By [F5], compactness makes $K$ locally compact, and it is Hausdorff by hypothesis.  Every continuous function on compact $K$ has compact support and compact closed superlevel sets, so [F6] gives $C_c(K)=C_0(K)=C(K)$. [F5, F6, given]

2.1 A regular Borel probability $\mu$ defines $L_\mu(g)=\int_Kg\,d\mu$.  For real or complex $g$, $|L_\mu(g)|\leq\lVert g\rVert_\infty\mu(K)=\lVert g\rVert_\infty$, while $L_\mu(1)=1$; hence $L_\mu\in B_{C(K)^*}$ and $\lVert L_\mu\rVert=1$.  It is positive on nonnegative real-valued $g$. [F3, step 1.1]

2.2 Conversely, let $L\in B_{C(K)^*}$ satisfy $L(1)=1$ and $L(g)\in[0,\infty)$ for every nonnegative real-valued $g\in C(K)$. In the real case [F2] represents $L$ by a finite regular measure $\mu$ in the sense of [F4], and $\mu(K)=L(1)=1$. In the complex case restrict $L$ to real-valued functions, apply [F2], and use complex linearity to recover $L(g+ih)=\int g\,d\mu+i\int h\,d\mu$; uniqueness in [F3] identifies this same positive probability measure. This is the use of Dependent Choice; the ultrafilter lemma is used separately in [F1]. [F2, F3, F4, step 1.1]

3.1 Thus probabilities correspond exactly to the slice $S$ of $B_{C(K)^*}$ cut out by $L(1)=1$ and by $L(g)\in[0,\infty)$ for all nonnegative real-valued $g$.  Each condition is weak-star closed because it is the inverse image of the closed set $\{1\}$ or $[0,\infty)$ under one evaluation; arbitrary intersections remain closed. [step 2.1, step 2.2]

4.1 By [F1], the dual ball is weak-star compact under the ultrafilter lemma.  Hence its closed subset $S$ is compact by [F7].  Under the two representation directions above, the weak-star topology is exactly convergence of $\int g\,d\mu$ for every continuous test function $g$, so the probability measures are compact in the asserted topology. [F1, F7, step 2.1, step 2.2, step 3.1]

5.1 The initial reduction proves the empty case, and the closed-slice construction proves both scalar-field cases for nonempty compact Hausdorff $K$. [step 1.1, step 4.1] ∎
