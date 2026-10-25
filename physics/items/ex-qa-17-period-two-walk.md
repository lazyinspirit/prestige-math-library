---
id: ex-qa-17-period-two-walk
kind: example
title: "The two-vertex deterministic swap has absolute gap zero"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps:
  - def-qa-17-finite-reversible-chain
  - def-qa-17-absolute-spectral-gap
  - thm-qa-17-absolute-gap-eigenvalue-characterization
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-period-of-a-state
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §18.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §§8.1–8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Example

Let $X=\{0,1\}$ and let

$$P=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \pi=(1/2,1/2).$$

The chain alternates deterministically between the two states. The absolute spectral gap is defined by [[def-qa-17-absolute-spectral-gap]] on the mean-zero subspace.

## Facts & Assumptions

**Given:** The finite reversible chain above, the period convention [[def-period-of-a-state]], and the absolute-gap convention [[def-qa-17-absolute-spectral-gap]].

[F1] [[def-qa-17-finite-reversible-chain]]: a reversible chain has a positive stationary law satisfying row-stationarity and detailed balance.

[F2] [[def-period-of-a-state]]: the period is the gcd of the positive return times with positive transition probability.

[F3] [[def-qa-17-absolute-spectral-gap]]: $\delta_{\mathrm{abs}}(P)=1-\|P|_{H_0}\|_{2,\pi}$.

[F4] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: eigenvalues have nonzero eigenvectors and form the spectrum.

## Verification

1.1 Both rows of $P$ sum to one, $\pi P=\pi$, and $\pi_0P_{01}=\pi_1P_{10}=1/2$; the diagonal detailed-balance equations are automatic. Hence $(X,P,\pi)$ is a finite reversible chain. [F1, given, algebra]

1.2 Starting from either state, a return occurs exactly at positive even times, so the return-time set is $\{2,4,6,\ldots\}$ and its gcd is $2$. The chain is period two. [F2, given, algebra]

2.1 The constant vector $\mathbf1=(1,1)$ has eigenvalue $1$, while $h=(1,-1)$ spans $H_0$ and satisfies $Ph=-h$. Thus the restriction to $H_0$ has norm $1$, so [F3] gives $\delta_{\mathrm{abs}}(P)=0$. The eigenvalues of $P$ are exactly $1$ and $-1$. [F3, F4, step 1.1, algebra] ∎
