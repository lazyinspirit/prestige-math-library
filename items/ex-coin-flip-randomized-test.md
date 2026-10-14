---
id: ex-coin-flip-randomized-test
kind: example
title: "A coin-flip randomized test"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistical-experiment
  - def-randomized-procedure-as-a-markov-kernel
  - def-randomized-test
  - lem-procedure-action-law-is-measurable
  - def-measurable-space
  - def-sigma-algebra
  - def-probability-measure
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
---

## Example

Let the data space be the one-point space $\mathcal X=\{x_0\}$ with its full
sigma-algebra, let $\Theta=\{\theta_0\}$, and take
$P_{\theta_0}=\delta_{x_0}$. For any $p\in[0,1]$, define a binary procedure by
$$K(x_0,B)=p\,1_{\{1\in B\}}+(1-p)\,1_{\{0\in B\}},\qquad B\subseteq\{0,1\}.$$
It is a randomized test with rejection probability $p$.

## Facts & Assumptions

**Given:** The one-point experiment above, the full power set on the binary action space, and a real number $p\in[0,1]$.

[F1] A Dirac set function is a probability measure on every sigma-algebra ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]).

[F2] An experiment supplies a family of probability measures on its data measurable space ([[def-statistical-experiment]]).

[F3] A randomized procedure is a pointwise probability kernel from data to the action measurable space ([[def-randomized-procedure-as-a-markov-kernel]]).

[F4] A binary randomized procedure is a randomized test, with rejection function $x\mapsto K(x,\{1\})$ ([[def-randomized-test]]).

[F5] The marginal action law satisfies $Q_\theta(B)=\int K(x,B)P_\theta(dx)$ ([[lem-procedure-action-law-is-measurable]]).

[F6] The nonnegative integral of a simple function is the sum of its values times the measures of its disjoint level sets, and the Lebesgue integral agrees with that simple integral ([[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F7] A full power set is a sigma-algebra ([[def-sigma-algebra]]).

[A1] $0\le p\le1$.

## Verification

**Given:** The data above.

1.1 The full power set on the one-point data space is a sigma-algebra by [F7], and $P_{\theta_0}=\delta_{x_0}$ is a probability measure by [F1]. Hence the stated family is a statistical experiment by [F2]. [given, F1, F2, F7]

1.2 The full power set on $\{0,1\}$ is a sigma-algebra by [F7]. The action section assigns masses $0$, $1-p$, $p$, and $1$ to $\varnothing$, $\{0\}$, $\{1\}$, and $\{0,1\}$, respectively. They are nonnegative and have total mass one by [A1]. For any disjoint sequence of subsets of $\{0,1\}$, each of the two points occurs in at most one member, so the mass of the union equals the sum of the assigned masses. Thus $K(x_0,\cdot)$ is a probability measure. [given, A1, F7]

2.1 The data space has one point, so for every action event $B$ the evaluation $x\mapsto K(x,B)$ is constant; its preimages are empty or the whole data space, both measurable. Step 1.2 and this measurability verify that $K$ is a probability kernel and hence a randomized procedure. [given, F2, F3, F7, step 1.2]

3.1 By [F4], the test function is $\varphi(x_0)=K(x_0,\{1\})=p$. The action-law identity [F5] gives $Q_{\theta_0}(\{1\})=\int K(x,\{1\})P_{\theta_0}(dx)$. The integrand is the simple function $p1_{\mathcal X}$, whose integral is $pP_{\theta_0}(\mathcal X)=p$ by [F1] and [F6]. This includes both endpoints $p=0$ and $p=1$. [A1, F1, F4, F5, F6] ∎
