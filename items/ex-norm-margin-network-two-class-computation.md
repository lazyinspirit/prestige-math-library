---
id: ex-norm-margin-network-two-class-computation
kind: example
title: "A two-class one-layer spectral-margin calculation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-spectral-network-complexity
  - def-multiclass-margin-ramp-loss
  - thm-spectral-margin-bound-for-multiclass-networks
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Bartlett, Foster, and Telgarsky, Spectrally-normalized margin bounds for neural networks, Definition (1.2) and Theorem 1.1"
      url: "https://arxiv.org/pdf/1706.08498"
---

## Example

Assume the axiom of choice. Take one layer with input width $1$, output width $2$, identity activation with Lipschitz constant $\rho_1=1$, reference matrix $M_1=0$, and layer matrix $A_1=(1,-1)^\top$. Let the input distribution be the point mass at $(x,y)=(1,1)$, so a sample of size $n=1$ always has $X=(1)$ and label $1$. At margin level $\gamma=1$ and confidence $\delta=1/10$, the score vector is $(1,-1)$, its margin is $2$, its empirical margin loss and population error are both zero, and the spectral network complexity is $R_A=2$. The simultaneous theorem's right-hand side is $8+3\sqrt{Q/2}$, where
$$Q=\log60+2\log3+2\log3+2\log4+2\log(2+\sqrt2)\approx13.72,$$
so the bound evaluates to approximately $15.86$. The example records the exact margin and complexity and shows the small-sample bound is valid but loose.

## Example references

[[def-spectral-network-complexity]]: defines the spectral complexity formula and induced operator norm.

[[def-multiclass-margin-ramp-loss]]: defines multiclass margin, empirical margin loss, and population error.

[[thm-spectral-margin-bound-for-multiclass-networks]]: supplies the simultaneous probability bound and its confidence expression.

## Facts & Assumptions

**Given:** The one-layer network, point-mass distribution, sample size, margin level, and confidence parameter in the Example.

[F1] The spectral norm is the induced Euclidean operator norm, the transpose-difference mixed norm sums its column Euclidean norms, and $R_A$ is their prescribed spectral-complexity expression. [[def-spectral-network-complexity]]

[F2] The margin is true-label score minus the largest competing score; empirical margin loss counts examples with margin at most the threshold, and population error is zero-one classification error. [[def-multiclass-margin-ramp-loss]]

[F3] Under the stated iid and choice assumptions, the simultaneous theorem has an additive $8/n$ term, a leading term proportional to $\log n$, and confidence term $3\sqrt{Q/(2n)}$. [[thm-spectral-margin-bound-for-multiclass-networks]]

## Verification

**Proof technique:** direct.

1.1 The only column of $A_1$ has Euclidean norm $\sqrt2$, so its induced operator norm is $\sqrt2$. The transpose $A_1^\top=(1,-1)$ has two scalar columns of absolute values $1$ and $1$, so $\lVert A_1^\top-M_1^\top\rVert_{2,1}=2$. Also $\lVert X\rVert_F=1$. [F1, given, algebra]

2.1 Applying the network map to $x=1$ gives scores $(1,-1)$; [F2] therefore gives margin $1-(-1)=2$, empirical margin loss $\mathbf1\{2\le1\}=0$, and zero population error under the point-mass law. [F2, given, step 1.1, algebra]

3.1 Substitution into the spectral-complexity definition yields $R_A=\sqrt2\left((2/\sqrt2)^{2/3}\right)^{3/2}=2.$ For $n=1$ the leading term in [F3] vanishes because $\log1=0$, and $8/n=8$. Substituting $\delta=1/10$, $\gamma=1$, $\lVert X\rVert_F=1$, $L=1$, $\lVert A_1^\top-M_1^\top\rVert_{2,1}=2$, and $\lVert A_1\rVert_\sigma=\sqrt2$ into the theorem's $Q$ gives the displayed expression. The inequality is $0\le8+3\sqrt{Q/2}\approx15.86$. [F1, F3, step 1.1, step 2.1, algebra] ∎
