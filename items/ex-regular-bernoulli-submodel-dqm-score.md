---
id: ex-regular-bernoulli-submodel-dqm-score
kind: example
title: A regular Bernoulli submodel and its score
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-dqm-submodel-through-a-law
  - thm-dqm-score-mean-zero
  - def-mean-zero-square-integrable-space
  - def-axiom-of-choice
  - def-measurable-space
  - def-probability-measure
  - def-sigma-algebra
  - def-counting-measure
  - prop-counting-measure-is-a-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - thm-real-power-continuity-and-derivatives
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Under the Axiom-of-Choice density convention of [[def-dqm-submodel-through-a-law]], let $p\in(0,1)$ and choose $0<\delta<\min(p,1-p)$. On $\{0,1\}$ with the full power-set sigma-algebra and counting measure, let $P_t\{1\}=p+t$ and $P_t\{0\}=1-p-t$ for $|t|<\delta$. This two-sided regular path, restricted to $t\ge0$, is DQM at zero with score

$$s(1)=\frac1p,\qquad s(0)=-\frac1{1-p},$$

which has $Ps=0$ and $Ps^2=1/[p(1-p)]$. The densities with respect to counting measure are displayed explicitly, so the finite-path calculation makes no choice of versions.

## Facts & Assumptions

**Given:** The Axiom of Choice, $p\in(0,1)$, and $0<\delta<\min(p,1-p)$.

[A1] AC permits selecting representatives from an arbitrary family of nonempty sets ([[def-axiom-of-choice]]).

[F1] A common-dominated path is DQM when its square-root densities have an $L^2$ first-order expansion with coefficient $s/2$ ([[def-dqm-submodel-through-a-law]]).

[F2] The score is an equivalence class in $L^2(P)$ and DQM scores have mean zero ([[thm-dqm-score-mean-zero]]).

[F3] A probability measure is nonnegative and has total mass one ([[def-probability-measure]]).

[F4] The full power set is a sigma-algebra, and a measurable space is a set with a specified sigma-algebra ([[def-sigma-algebra]], [[def-measurable-space]]).

[F5] Counting measure assigns a finite set its cardinality; on the two-point sample space its total mass is two ([[def-counting-measure]]).

[F6] The counting set function is a measure, and a finite measure is sigma-finite by the one-set cover ([[prop-counting-measure-is-a-measure]], [[def-finite-sigma-finite-and-semifinite-measures]]).

[F7] For every $x>0$, the square-root function is differentiable with derivative $1/(2\sqrt{x})$ ([[thm-real-power-continuity-and-derivatives]]).

## Verification

**Proof technique:** Expand the two square-root masses on the finite sample space.

1.1 Every subset of $\{0,1\}$ and its complement lie in the full power set, and every countable union of such subsets is still a subset; thus the power set is a sigma-algebra by [F4], and with this sigma-algebra the sample set is a measurable space by [F4]. Counting measure on this two-point set is a measure of total mass two by [F5, F6], hence sigma-finite by the constant sequence of covers $E_n=\{0,1\}$ in [F6]. Its only null set is empty, so each $P_t$ is absolutely continuous with respect to it. The choice of $\delta$ ensures $p+t>0$ and $1-p-t>0$ throughout $|t|<\delta$; the displayed masses sum to one, so each $P_t$ is a probability measure. [given, F3, F4, F5, F6, algebra]

2.1 Since $p,1-p>0$, [F7] and the definition of derivative give $\sqrt{p+t}=\sqrt p+t/(2\sqrt p)+o(t)$ and $\sqrt{1-p-t}=\sqrt{1-p}-t/(2\sqrt{1-p})+o(t)$. These are exactly the two coordinates of $\sqrt{p}+(t/2)s\sqrt p+o(t)$ for the stated $s$; because counting-measure $L^2$ on two points is the Euclidean norm, the combined remainder is $o(t)$. The density versions are explicit, so the calculation uses [A1]'s convention without a selection. Thus the path is DQM with this score by [F1]. [step 1.1, F1, F7, A1, algebra]

3.1 Direct calculation gives $Ps=p(1/p)+(1-p)(-1/(1-p))=0$ and $Ps^2=p/p^2+(1-p)/(1-p)^2=1/[p(1-p)]<\infty$. Hence the score is in $L^2_0(P)$ and has the stated variance. [F2, algebra] ∎
