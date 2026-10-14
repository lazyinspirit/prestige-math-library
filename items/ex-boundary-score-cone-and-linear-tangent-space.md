---
id: ex-boundary-score-cone-and-linear-tangent-space
kind: example
title: A boundary score cone differs from its tangent space
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-dqm-submodel-through-a-law
  - thm-dqm-score-mean-zero
  - def-mean-zero-square-integrable-space
  - def-axiom-of-choice
  - def-countable-choice
  - def-tangent-set
  - def-tangent-space
  - def-measurable-space
  - def-probability-measure
  - def-sigma-algebra
  - def-counting-measure
  - prop-counting-measure-is-a-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - thm-real-power-continuity-and-derivatives
  - thm-mean-zero-square-integrable-space-is-hilbert
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

Assume the general DQM density-version convention uses AC and the mean-zero Hilbert-space convention uses Countable Choice; the two-point densities below are explicit, so this proof itself makes no choice. Let $\mathcal X=\{-1,+1\}$ with all subsets measurable and let $P_\theta\{x\}=(1+\theta x)/2$ for $\theta\in[0,1]$. At the boundary law $P_0$, consider allowed one-sided paths $t\mapsto P_{\theta(t)}$ with $\theta(0)=0$, $\theta(t)\in[0,1]$, and an existing right derivative at zero. Their DQM score set is the cone $\{aX:a\ge0\}$, while its closed linear tangent space is all of $L^2_0(P_0)=\{bX:b\in\mathbb R\}$. Thus the score set and its linear tangent space are distinct.

## Facts & Assumptions

**Given:** AC and Countable Choice, the restricted model $\{P_\theta:0\le\theta\le1\}$ on the two-point sample space, based at $P_0$.

[A1] AC is the axiom that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] Countable Choice gives a choice function for every countable family of nonempty sets ([[def-countable-choice]]).

[F1] A one-sided DQM score satisfies $\sqrt{p_t}=\sqrt p+(t/2)s\sqrt p+o_{L^2}(t)$ ([[def-dqm-submodel-through-a-law]]).

[F2] Such a score has mean zero and is unique $P_0$-almost surely ([[thm-dqm-score-mean-zero]]).

[F3] The tangent set records the scores of allowed paths; the tangent space is the closure of their linear span ([[def-tangent-set]], [[def-tangent-space]]).

[F4] The full power set is a sigma-algebra, and a measurable space is a set with a specified sigma-algebra ([[def-sigma-algebra]], [[def-measurable-space]]).

[F5] Counting measure assigns a finite set its cardinality; on this two-point sample space its total mass is two ([[def-counting-measure]]).

[F6] Counting measure is a measure, and a finite measure is sigma-finite ([[prop-counting-measure-is-a-measure]], [[def-finite-sigma-finite-and-semifinite-measures]]).

[F7] For every $x>0$, the square-root function is differentiable with derivative $1/(2\sqrt{x})$ ([[thm-real-power-continuity-and-derivatives]]).

[F8] Under Countable Choice, $L^2_0(P_0)$ is closed in $L^2(P_0)$ ([[thm-mean-zero-square-integrable-space-is-hilbert]]).

## Verification

**Proof technique:** Identify every one-sided score and compare its cone with its real linear span.

1.1 Every subset of $\{-1,+1\}$ and its complement lie in the full power set, and every countable union of such subsets is still a subset; thus the power set is a sigma-algebra by [F4], and with this sigma-algebra the sample set is a measurable space by [F4]. Counting measure on the two-point set is a measure of total mass two by [F5, F6], hence sigma-finite by the constant sequence of covers $E_n=\{-1,+1\}$; its only null set is empty. For every $\theta\in[0,1]$, the masses $(1+\theta)/2$ and $(1-\theta)/2$ are nonnegative and sum to one, so $P_\theta$ is a probability measure dominated by counting measure. At $\theta=0$ both masses are $1/2$, so $\sqrt{p_0(x)}=1/\sqrt2$. [given, F4, F5, F6, algebra]

2.1 If a one-sided DQM path has score $s$, [F1] on each atom gives $\sqrt{P_{\theta(t)}\{x\}}=1/\sqrt2+t s(x)/(2\sqrt2)+o(t)$. Squaring each expansion yields $P_{\theta(t)}\{x\}=1/2+t s(x)/2+o(t)$. [F1, step 1.1, algebra]

2.2 Conversely, for each $a\ge0$, take $\theta(t)=at$ for sufficiently small $t\ge0$. Then $P_{\theta(t)}\{x\}=(1+atx)/2$, and [F7] at $1/2$ gives $\sqrt{P_{\theta(t)}\{x\}}=1/\sqrt2+t ax/(2\sqrt2)+o(t)$ on each atom. The two-coordinate counting-measure $L^2$ remainder is $o(t)$, so this path has score $aX$. Its densities are explicit, so [A1] requires no selection in this construction. Thus every vector on the nonnegative ray is an allowed score. [given, A1, F1, F7, step 1.1, algebra]

3.1 Subtract the two mass expansions from step 2.1. Since $\theta(t)=P_{\theta(t)}\{+1\}-P_{\theta(t)}\{-1\}$, we get $\theta(t)/t\to(s(+1)-s(-1))/2$. By [F2], $P_0s=(s(+1)+s(-1))/2=0$, so this limit equals $s(+1)$. The constraints $\theta(t)\ge0$ and $t>0$ force the limit $a:=s(+1)$ to be nonnegative, and $s(-1)=-a$; hence every score is $s(x)=ax$ with $a\ge0$. [step 2.1, F2, algebra]

4.1 The real span of $\{aX:a\ge0\}$ is $\{bX:b\in\mathbb R\}$, and every mean-zero function on the equiprobable two-point space has values $(b,-b)$, so this span is $L^2_0(P_0)$. This space is closed in $L^2(P_0)$ by [F8], hence its closure—and therefore the tangent space by [F3]—is $L^2_0(P_0)$. It strictly contains the non-linear score cone because $X$ is in the cone but $-X$ is not. [A2, F3, F8, step 2.2, algebra] ∎
