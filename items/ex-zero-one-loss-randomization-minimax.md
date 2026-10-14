---
id: ex-zero-one-loss-randomization-minimax
kind: example
title: Randomization lowers worst-case risk under zero-one loss
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-loss-function-and-risk
  - def-bayes-and-minimax-risk
  - def-randomized-procedure-as-a-markov-kernel
  - def-probability-measure
  - cor-expectation-agrees-with-the-finite-weighted-sum
justified_by: []
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
sources: {}
---

## Example

Let $\Theta=\{0,1\}$, let the data space contain one point with the same
sampling law at both parameters, and let the action space be $\{0,1\}$.
Under zero-one loss $L(\theta,a)=1_{\{a\ne\theta\}}$, the deterministic rule
that always chooses $0$ has risks $0$ and $1$, hence worst-case risk $1$.
The randomized rule that chooses each action with probability $1/2$ has risk
$1/2$ at both parameters and is minimax with value $1/2$.

## Facts & Assumptions

**Given:** The finite two-parameter decision problem and loss in the Example.

[F1] A probability measure has total mass one ([[def-probability-measure]]).

[F2] A randomized decision rule is a probability kernel from data to actions ([[def-randomized-procedure-as-a-markov-kernel]]).

[F3] Risk is expected loss; worst-case risk and minimax value use a supremum and infimum over rules ([[def-loss-function-and-risk]], [[def-bayes-and-minimax-risk]]).

[F4] Finite expectations are probability-weighted sums ([[cor-expectation-agrees-with-the-finite-weighted-sum]]).

## Verification

**Proof technique:** direct finite verification.

1.1 The one-point data law assigns mass one to its only point under either parameter, so it is a probability measure by [F1]. For each $q\in[0,1]$, define $\delta_q(*,B)=q1_{\{1\in B\}}+(1-q)1_{\{0\in B\}}$ for $B\subseteq\{0,1\}$; its two singleton masses are nonnegative and sum to one, hence it is a probability measure. Evaluations are measurable on the one-point data space, so $\delta_q$ is a probability kernel by [F2]. Deterministic rules are the cases $q=0$ and $q=1$. [given, F1, F2]

1.2 By the finite expectation formula [F4] and the loss-risk definition [F3], the rule with probability $q$ of action $1$ has risks $R(0)=q$ and $R(1)=1-q$. Its worst-case risk is therefore $\max(q,1-q)\geq(q+1-q)/2=1/2$, with equality at $q=1/2$. [F3, F4, algebra]

2.1 The two deterministic rules have $q=0$ or $q=1$, so each has worst-case risk $1$. The fair randomized rule has worst-case risk $1/2$, and step 1.2 shows no rule can do better. Thus the minimax value is $1/2$ and randomization strictly improves worst-case risk over every deterministic rule. [step 1.2, algebra] ∎
