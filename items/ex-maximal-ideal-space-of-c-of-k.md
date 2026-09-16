---
id: ex-maximal-ideal-space-of-c-of-k
kind: example
title: Maximal ideal space of C(K)
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-characters-of-continuous-functions-are-evaluations, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Remark 3.1.36 and §3.1, printed pp. 54–67"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $K$ be a
nonempty compact Hausdorff space. Then the evaluation map

$$e : K \longrightarrow \Delta(C(K)), \qquad e(x) := \mathrm{ev}_x,\quad \mathrm{ev}_x(f) = f(x),$$

is a homeomorphism onto the character space of the complex Banach algebra
$C(K) = C(K,\mathbb C)$ with the supremum norm. In particular, for
$K = [0,1]$ the characters of $C([0,1])$ are exactly the evaluations
$f \mapsto f(t)$ at points $t \in [0,1]$, and each occurs exactly once.

## Facts & Assumptions

**Given:** Dependent Choice, a nonempty compact Hausdorff space $K$, and the algebra $C(K)$ with the supremum norm and pointwise operations.

[L1] For a nonempty compact Hausdorff space, every character of $C(K)$ is an evaluation at a unique point and the evaluation map is a homeomorphism onto $\Delta(C(K))$ ([[lem-characters-of-continuous-functions-are-evaluations]], [[def-dependent-choice]]).

[L2] $[0,1]$ is a nonempty compact Hausdorff space with its subspace topology from $\mathbb R$. [algebra]

## Verification

**Proof technique:** direct.

1.1 By [L1] the map $e$ is a homeomorphism for every nonempty compact Hausdorff $K$, so in particular every character of $C(K)$ is $\mathrm{ev}_x$ for a unique $x$, and the topology on $\Delta(C(K))$ is the transported topology of $K$; no computation beyond [L1] is needed. [L1]

2.1 For $K = [0,1]$ the hypotheses of [L1] hold by [L2], so the description of the characters of $C([0,1])$ follows; explicitly, $\mathrm{ev}_s = \mathrm{ev}_t$ would give $f(s) = f(t)$ for all continuous $f$, and the coordinate function $f(u) = u$ then forces $s = t$. [1.1, L2, algebra] ∎

## Remarks

- **The example is the extreme case of the maximal-ideal description**: for a compact space the maximal ideals are exactly the fixed ideals $\{f : f(x) = 0\}$, in contrast with [[ex-gelfand-kolmogorov-recovers-beta-x-not-x]].
- **Dependent Choice is inherited** from the Urysohn input of [L1] and is used only there.
