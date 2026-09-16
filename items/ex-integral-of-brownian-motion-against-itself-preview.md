---
id: ex-integral-of-brownian-motion-against-itself-preview
kind: example
title: "Integral of Brownian motion against itself"
status: draft
origin: pipeline
deps: [lem-adapted-continuous-processes-are-progressively-measurable, def-ito-integral-for-square-integrable-predictable-processes, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes, def-quadratic-variation-along-a-partition-sequence, thm-ito-isometry-and-linearity-in-predictable-l2, thm-density-of-elementary-predictable-processes-in-predictable-l2, def-brownian-motion, cor-law-of-the-brownian-maximum, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, equation (3.8)"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $B$ be a standard
Brownian motion [[def-brownian-motion]]. Then for every $t\ge0$
$$\int_0^tB_s\,dB_s=\frac{B_t^2-t}{2}\qquad\text{almost surely},$$
and since both sides are continuous in $t$ the two processes are
indistinguishable. In particular the integral is not centered and has mean
$0$, variance $E(B_t^2-t)^2/4=(2t^2)/4=t^2/2$; it is not a Brownian integral of
the type arising from a deterministic integrand.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a standard Brownian motion $B$ with its usual filtrations, and $t>0$ with the dyadic partition $t_k=kt/2^n$, $0\le k\le2^n$.

[F1] $B$ is adapted with continuous paths, so it is predictable and progressively measurable; and $B$ has finite energy on $[0,t]$: $E\int_0^tB_s^2ds=\int_0^ts\,ds=t^2/2<\infty$. [[lem-adapted-continuous-processes-are-progressively-measurable]] [[def-brownian-motion]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F2] The left-endpoint dyadic integrands $H^n:=\sum_{k=0}^{2^n-1}B_{t_k}1_{(t_k,t_{k+1}]}$ are elementary predictable, and $H^n\to B$ in $L^2(\mathrm dt\otimes P)$ on $[0,t]$: pointwise convergence follows from continuity and the domination $|H^n_s-B_s|\le2\sup_{u\le t}|B_u|$, whose square is integrable because each one-sided maximum of $B$ on $[0,t]$ has the law of $|B_t|$ and $E B_t^2=t$. [[def-elementary-predictable-brownian-integrand]] [[cor-law-of-the-brownian-maximum]]

[F3] Consequently $\int_0^tH^n\,dB\to\int_0^tB\,dB$ in $L^2(P)$, and the elementary sums satisfy the telescoping identity $2\sum_kB_{t_k}(B_{t_{k+1}}-B_{t_k})=B_t^2-\sum_k(B_{t_{k+1}}-B_{t_k})^2$. [[def-ito-integral-for-square-integrable-predictable-processes]] [[def-ito-integral-of-an-elementary-predictable-process]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F4] Along the dyadic partitions of $[0,t]$, $\sum_k(B_{t_{k+1}}-B_{t_k})^2\to t$ uniformly on $[0,t]$ almost surely, in the step convention of the quadratic variation. [[thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes]] [[def-quadratic-variation-along-a-partition-sequence]]

[F5] AC is declared for the ambient interfaces. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Verification

**Proof technique:** direct.

1.1 Each $H^n$ is elementary, so $\int_0^tH^n\,dB=\sum_kB_{t_k}(B_{t_{k+1}}-B_{t_k})$ is the defining sum; by [F3] these sums converge to $\int_0^tB\,dB$ in $L^2(P)$. [F2, F3, given]

1.2 The telescoping identity of [F3] writes the same sums as $\tfrac12\bigl(B_t^2-\sum_k(B_{t_{k+1}}-B_{t_k})^2\bigr)$, and by [F4] the quadratic sum converges to $t$ almost surely, so the elementary sums converge almost surely to $\tfrac12(B_t^2-t)$. [F3, F4]

2.1 Two convergent sequences in $L^2(P)$ and almost surely respectively have the same limit when their difference tends to $0$ in probability; the difference of the two candidate limits is $\int_0^tB\,dB-\tfrac12(B_t^2-t)$, which is therefore $0$ almost surely. [F3, step 1.1, step 1.2]

3.1 The identities at $t=0$ give $0=0$; the variance computation $E(B_t^2-t)^2/4=(EB_t^4-2tEB_t^2+t^2)/4=(3t^2-2t^2+t^2)/4=t^2/2$ uses the Gaussian fourth moment. AC enters only through [F5], and no use is made of the later Ito-formula page. [F1, F5, step 2.1, given] ∎

## Source notes

Lawler, equation (3.8), records $\int_0^tB\,dB=(B_t^2-t)/2$; the proof here derives it from the left-dyadic elementary sums and the dyadic quadratic variation of Brownian motion, so the example does not depend on the later Ito formula theorem, as required by the plan's forward-reference seam.
