---
id: cex-no-log-discrete-dirichlet-polynomial-mean-square
kind: counterexample
title: "A Logarithmic Loss Is Necessary for Discrete Dirichlet-Polynomial Means"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps:
  - def-one-separated-dirichlet-polynomial-samples
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
aliases: []
forward_refs: []
dependency_level: 1
proof_strategy: direct
---

## Statement refuted

There is an absolute constant $C$ such that, for every integer $N\ge1$, every $T\ge2$, every Dirichlet polynomial $D(s)=\sum_{n=1}^{N}a_n n^{-s}$ with complex coefficients, and every finite 1-separated set $\{t_1,\ldots,t_R\}\subset[0,T]$, one has
$$\sum_{r=1}^{R}|D(it_r)|^2\le C(N+T)\sum_{n=1}^{N}|a_n|^2.$$

## Statement references

[[def-one-separated-dirichlet-polynomial-samples]]

## Facts & Assumptions

**Given:** Positive integers $K$ tending to infinity.

[F1] [[def-one-separated-dirichlet-polynomial-samples]] defines $n^{-it}=e^{-it\log n}$, 1-separation, and the coefficient square norm $G$.

[F2] [[thm-complex-exponential-addition-and-real-extension]] gives $e^{z+w}=e^ze^w$, and [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives $e^{i\pi}=-1$. Thus $e^{2\pi i k}=1$ for every integer $k$, by finite multiplication and inversion.

## Counterexample

**Given:** An integer $K\ge1$.

1.1 Set $N=2^K$, $h=2\pi/\log2$, $T=hN$, and $D_K(s)=\sum_{j=0}^{K}(2^j)^{-s}$. This is a Dirichlet polynomial supported on $n\le N$ with coefficients equal to one at powers of two and zero elsewhere, so $G=K+1$. Take the $R=N+1$ sample points $t_r=hr$ for $r=0,\ldots,N$. They lie in $[0,T]$ and are 1-separated because $h>1$. Also $T\ge2$. [F1, construct, algebra]

1.2 At each sample, $(2^j)^{-it_r}=\exp(-ihrj\log2)=\exp(-2\pi i rj)=1$. Hence $D_K(it_r)=K+1$ and $\sum_{r=0}^{N}|D_K(it_r)|^2=(N+1)(K+1)^2$. Dividing by $(N+T)G=N(1+h)(K+1)$ gives $((N+1)/N)(K+1)/(1+h)\to\infty$ as $K\to\infty$. Thus no absolute $C$ in the refuted assertion exists. Since $K=\log N/\log2$, the required loss is at least a constant multiple of $\log N$ along this family. [F1, F2, step 1.1, algebra] ∎

## Remarks

Taking $V=K+1$ in this same family also refutes a universal threshold estimate $R\ll(N+T)G/V^2$: the ratio $RV^2/((N+T)G)$ is exactly the unbounded ratio computed above.
