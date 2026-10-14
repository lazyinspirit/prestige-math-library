---
id: ex-bounded-scores-generate-unrestricted-tangent-space
kind: example
title: Bounded mean-zero scores generate the unrestricted tangent space
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-dqm-submodel-through-a-law
  - thm-dqm-score-mean-zero
  - def-mean-zero-square-integrable-space
  - def-countable-choice
  - thm-mean-zero-square-integrable-space-is-hilbert
  - def-tangent-set
  - def-tangent-space
  - thm-dominated-convergence
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-axiom-of-choice
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

Assume the library's Axiom-of-Choice density convention in [[def-dqm-submodel-through-a-law]] and Countable Choice for [[thm-mean-zero-square-integrable-space-is-hilbert]]. Let $P$ be any probability law and take the unrestricted dominated model $\mathcal M=\{Q:Q\ll P\}$. Its allowed paths are all one-sided DQM paths through $P$ with common dominator $P$. Every bounded mean-zero $s\in L^2_0(P)$ is such a path score, and the tangent space is all of $L^2_0(P)$. All densities constructed below are explicit, so the example's proof makes no density-selection choice.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, a probability measure $P$, and a bounded measurable representative $s$ with $Ps=0$.

[A1] The Axiom of Choice permits selecting from an arbitrary family of nonempty sets ([[def-axiom-of-choice]]).

[A2] Countable Choice permits selecting from a countable family of nonempty sets ([[def-countable-choice]]).

[F1] A DQM path with common dominator $P$ has root-density expansion $\sqrt{p_t}=1+(t/2)s+o_{L^2(P)}(t)$ ([[def-dqm-submodel-through-a-law]]).

[F2] Every DQM score is in $L^2_0(P)$ ([[thm-dqm-score-mean-zero]]).

[F3] $L^2_0(P)$ is the mean-zero subspace of the quotient $L^2(P)$ ([[def-mean-zero-square-integrable-space]]).

[F4] The tangent space is the $L^2(P)$-norm closure of the finite linear span of allowed scores ([[def-tangent-space]]).

[F5] Dominated convergence applies to pointwise-convergent functions dominated by an integrable function ([[thm-dominated-convergence]]).

[F6] On a probability space, $|Pg|\le\|g\|_2$ for $g\in L^2(P)$ by Cauchy–Schwarz against $1$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F7] Under Countable Choice, $L^2_0(P)$ is closed in $L^2(P)$ ([[thm-mean-zero-square-integrable-space-is-hilbert]]).

[F8] The Lebesgue integral is linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Verification

**Proof technique:** Construct normalized square-root perturbations, then use centered truncations.

1.1 Every allowed score is in $L^2_0(P)$ by [F2]; because $L^2_0(P)$ is closed in $L^2(P)$ by [F7] under [A2], its closed tangent space is contained in $L^2_0(P)$. [F2, F3, F7, A2]

1.2 Let $M=\sup_{x\in\mathcal X}|s(x)|<\infty$ for the bounded representative in Given, and choose $0<\epsilon<(1+M)^{-1}$. For $0\le t<\epsilon$, let $a_t=1+ts/2$, $c_t=P(a_t^2)=1+t^2Ps^2/4$, and $p_t=a_t^2/c_t$. The bound on $t$ makes $a_t\ge0$; $c_t>0$ and $Pp_t=1$, so $p_t$ is a probability density with respect to $P$. [given, F3, algebra]

1.3 Let $f\in L^2_0(P)$ and choose a measurable representative. Define $u_m=(-m)\vee(f\wedge m)$. Then $|u_m-f|^2\le f^2\mathbf 1_{\{|f|>m\}}$, whose right side tends pointwise to zero and is dominated by the integrable $f^2$. By [F5], $\|u_m-f\|_2\to0$. Put $s_m=u_m-Pu_m$; it is bounded and $Ps_m=0$ by [F8] and $P1=1$. Also [F6] and [F8] give $|Pu_m|=|P(u_m-f)|\le\|u_m-f\|_2$. Therefore $\|s_m-f\|_2\le2\|u_m-f\|_2\to0$. [F3, F5, F6, F8, algebra]

2.1 Since $\|a_t\|_2=\sqrt{c_t}$, $\|\sqrt{p_t}-1-(t/2)s\|_2=\|a_t/\sqrt{c_t}-a_t\|_2=|1-\sqrt{c_t}|=O(t^2)=o(t)$. The density family is explicit, so it fits [A1]'s general convention without any selection. Thus $P_t=p_tP$ is an allowed DQM path with score $s$, and every bounded mean-zero score lies in the tangent set. [step 1.2, F1, A1, algebra]

3.1 Each $s_m$ is a tangent score by step 2.1, and the sequence converges to the arbitrary $f\in L^2_0(P)$ by step 1.3. Hence the tangent space contains $L^2_0(P)$ by [F4]; step 1.1 gives the reverse inclusion. Thus the tangent space is exactly $L^2_0(P)$. [F4, step 1.1, step 2.1, step 1.3] ∎
