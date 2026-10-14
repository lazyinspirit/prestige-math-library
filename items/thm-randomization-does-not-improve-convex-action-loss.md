---
id: thm-randomization-does-not-improve-convex-action-loss
kind: theorem
title: Randomization does not improve convex action loss
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-loss-function-and-risk
  - def-statistical-experiment
  - def-randomized-procedure-as-a-markov-kernel
  - lem-finite-dimensional-integral-jensen-for-convex-loss
  - thm-measurability-of-integration-against-a-kernel
  - def-convex-and-strictly-convex-functionals-on-a-banach-space
  - def-convex-subset-of-euclidean-space
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-axiom-of-choice
  - def-countable-choice
  - def-euclidean-inner-product
  - def-measurable-space
  - def-metric-interior-closure-boundary
  - cor-integral-over-a-null-set-vanishes
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.2, PDF pp. 102–104"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§4–5, PDF pp. 7–13"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\geq1$ and let the
statistical experiment be
$\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$,
([[def-statistical-experiment]]), with a nonempty closed convex action set
$\mathsf D\subseteq\mathbb R^d$,
with its Borel sigma-algebra ([[def-measurable-space]]). Closedness is in the
Euclidean topology ([[def-metric-interior-closure-boundary]]) and convexity
uses [[def-convex-subset-of-euclidean-space]]. Let $\delta(x,da)$ be a
randomized decision rule, and let $L(\theta,\cdot):\mathsf D\to[0,+\infty]$
be a nonnegative Borel loss convex in the extended-functional sense of
[[def-convex-and-strictly-convex-functionals-on-a-banach-space]]. On its
convex finite-valued domain this inequality agrees with the real-valued Euclidean
convention of
[[def-convex-and-strictly-convex-functions-on-euclidean-sets]], used in the
Jensen proof's subgradient step. Define
$$m_\delta(x)=\int_\mathsf D\|a\|_2\,\delta(x,da),\qquad E_0=\{x:m_\delta(x)<\infty\}.$$
For $x\in E_0$, define the coordinatewise barycenter
$$b_\delta(x)=\left(\int_\mathsf D a_j\,\delta(x,da)\right)_{j=1}^d.$$
Assume that for every $\theta\in\Theta$,
$$P_\theta\bigl(\{x\in E_0:b_\delta(x)\in\mathsf D\}\bigr)=1.$$
Then there is a measurable deterministic rule $d$ such that
$$R(\theta,d)\leq R(\theta,\delta)\qquad(\theta\in\Theta).$$
On $E_0$, finite first moment in the Euclidean norm of
[[def-euclidean-inner-product]] makes each coordinate integral finite. No claim
is made for nonconvex action sets or when the parameterwise almost-sure
barycenter condition fails.

## Facts & Assumptions

**Given:** The action set, loss, randomized rule, and parameterwise almost-sure moment and barycenter conditions in the statement.

[A1] Assume AC and Countable Choice, used by the finite-dimensional integral Jensen supplier ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] A randomized procedure is a probability kernel, and its risk is the iterated loss integral ([[def-randomized-procedure-as-a-markov-kernel]], [[def-loss-function-and-risk]]).

[F2] Nonnegative and signed integrals against a probability kernel are measurable; the signed integral is defined on the set of finite absolute integral ([[thm-measurability-of-integration-against-a-kernel]]).

[F3] For a probability measure on a closed convex finite-dimensional action set, an extended-valued convex loss has integral at least its value at the barycenter; the lemma uses the extended-functional convexity convention and its finite-valued Euclidean restriction ([[lem-finite-dimensional-integral-jensen-for-convex-loss]]).

[F4] A nonnegative measurable function has integral zero on a measurable null set ([[cor-integral-over-a-null-set-vanishes]]).

[F5] The nonnegative integral is additive on finite sums and monotone ([[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** direct.

1.1 Let $m(x)=\int_\mathsf D\|a\|_2\,\delta(x,da)$. By [F2], $m$ is measurable. For each coordinate $j$, $|a_j|\leq\|a\|_2$, so the signed integral $b_j(x)=\int a_j\,\delta(x,da)$ is measurable on $E_0=\{x:m(x)<\infty\}$ by [F2]; hence $b=(b_1,\ldots,b_d)$ is measurable on $E_0$. [F2, algebra]

1.2 The set $E=\{x\in E_0:b(x)\in\mathsf D\}$ is measurable because $\mathsf D$ is closed and therefore Borel. Fix one $a_0\in\mathsf D$ and define $d(x)=b(x)$ on $E$ and $d(x)=a_0$ off $E$. This is a measurable map into $\mathsf D$; the hypotheses give $P_\theta(E)=1$ for every $\theta$. [given, F2, construct]

2.1 For each $\theta$ and every $x\in E$, the section $a\mapsto L(\theta,a)$ is nonnegative Borel convex, $\delta(x,\cdot)$ is a probability measure with finite first moment, and its barycenter $b(x)$ belongs to $\mathsf D$. Applying [F3] gives $L(\theta,d(x))=L(\theta,b(x))\leq\int_\mathsf D L(\theta,a)\,\delta(x,da)$. [A1, F1, F3, step 1.2]

3.1 Put $g_\theta(x)=L(\theta,d(x))$ and $h_\theta(x)=\int_\mathsf D L(\theta,a)\,\delta(x,da)$. Both are nonnegative measurable functions by [F1], [F2], and measurability of $d$. Step 2.1 gives $g_\theta1_E\leq h_\theta1_E$, so monotonicity [F5] gives $\int g_\theta1_E\,dP_\theta\leq\int h_\theta1_E\,dP_\theta$. Since $P_\theta(E^c)=0$, [F4] gives zero integrals on $E^c$; additivity [F5] then yields $\int g_\theta\,dP_\theta\leq\int h_\theta\,dP_\theta$. This is $R(\theta,d)\leq R(\theta,\delta)$, and it holds for every $\theta$. [F1, F2, F4, F5, step 2.1] ∎
