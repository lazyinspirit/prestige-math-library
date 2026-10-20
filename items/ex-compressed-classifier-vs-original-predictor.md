---
id: ex-compressed-classifier-vs-original-predictor
kind: example
title: "A compressed classifier can differ from its trained predictor off the sample"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-margin-preserving-compression
  - thm-finite-description-compression-bound
  - def-feedforward-neural-network
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is assumed or used."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let $\mathcal X=\{0,1\}$ and $\mathcal Y=\{1,2\}$, both with the discrete sigma-algebra, and let $P\{(0,1)\}=P\{(1,2)\}=1/2$. Define $\rho(t)=\max\{0,t\}$ and the two-class score maps
$$f(x)=(10\rho(1-x),\rho(x)),\qquad g(x)=(10,0),\qquad x\in\mathcal X.$$
Both maps can be realized by one-hidden-layer feedforward networks with ReLU hidden activation and identity output activation. Take the training score map to be constant, $F(S,x)=f(x)$ for every length-one sample, and take a constant selector into a fixed one-code codebook with $q=1$ and $r=1$, whose decoder is $g$. For the one-point training sample $S=((0,1))$, the scores agree exactly, so $g$ is a $1/10$-score compression of $f$ on $S$. Their least-index argmax classifiers agree at the observed input $0$ and differ at the unobserved input $1$. Their population zero-one risks are $R_P(h_f)=0$ and $R_P(h_g)=1/2$. This is only a single-sample witness: the fixed code does not meet the theorem's almost-sure compression hypothesis for this $P$, because it fails on the other possible one-point sample $((1,2))$.

## Example references

[[def-feedforward-neural-network]]: a finite acyclic computation graph evaluates hidden activations in topological order and uses identity output activations in a layered MLP.

[[def-margin-preserving-compression]]: a fixed helper and codebook can be paired with a sample-dependent code whose decoded scores are close on the observed inputs.

[[thm-finite-description-compression-bound]]: its high-probability conclusion bounds the selected compressed classifier under an almost-sure compression hypothesis.

## Facts & Assumptions

**Given:** The two-point measurable classification problem, the law $P$, the one-point sample $S=((0,1))$, the constant training map $F(S,x)=f(x)$, the scores $f,g$, and the fixed one-code family described in the Example.

[F1] A feedforward computation graph is a finite directed acyclic graph evaluated in a topological order; a layered MLP has hidden activations and identity output activations. [[def-feedforward-neural-network]]

[F2] A finite score codebook is fixed independently of the sample, while its measurable selector may depend on the sample; compression on $S$ requires coordinatewise score error at most the stated tolerance on each observed input. [[def-margin-preserving-compression]]

[F3] Under the theorem's almost-sure compression hypothesis, the conclusion bounds the decoded classifier $h_{s,\alpha(S)}$, and makes no claim for the original classifier without separate all-domain loss preservation. [[thm-finite-description-compression-bound]]

## Verification

**Given:** The finite instance space $\mathcal X=\{0,1\}$, labels $\mathcal Y=\{1,2\}$, equal-mass law $P$, and score maps from the Example.

1.1 Let the two hidden ReLU units for $f$ be $u_1(x)=\rho(x)$ and $u_2(x)=\rho(1-x)$, with output coordinates $(10u_2,u_1)$. Let $g$ use one hidden unit $u_1(x)=\rho(x)$, output weights zero, and output biases $(10,0)$. These are finite one-hidden-layer graphs with hidden activation $\rho$ and identity output activation, as in [F1]. Direct evaluation gives $f(0)=g(0)=(10,0)$ and $f(1)=(0,1)$, $g(1)=(10,0)$. [given, F1, construct, algebra]

2.1 The least-index argmax rule predicts class $1$ for both maps at $x=0$; at $x=1$, $f$ predicts class $2$ and $g$ predicts class $1$. Under $P$, $f$ is correct on both support points, while $g$ errs exactly at $(1,2)$, so $R_P(h_f)=0$ and $R_P(h_g)=1/2$. Also $P^1\{S=((0,1))\}=1/2$. [given, step 1.1, algebra]

3.1 Let $\mathcal A=\{a_0\}$ with one parameter slot whose only possible value is $a_0$, fix the helper string, decode $a_0$ to $g$, and let the compressor choose $a_0$ on every sample. On $S=((0,1))$, the maximum coordinate error is $0\le1/10$, so this sample is compressed and the predictions agree on the observed point. On $S'=((1,2))$, the maximum coordinate error is $10>1/10$, so this fixed compressor fails the almost-sure premise of the theorem under $P$. Therefore this example establishes only that single-sample agreement can coexist with different off-sample predictions and population risks; it does not contradict or invoke the theorem's high-probability conclusion. [given, F2, F3, step 2.1, algebra] ∎
