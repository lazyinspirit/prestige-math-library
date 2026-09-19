---
id: ex-integral-of-brownian-motion-against-itself-preview
kind: example
title: "Integral of Brownian motion against itself"
status: draft
origin: pipeline
deps: [lem-adapted-continuous-processes-are-progressively-measurable, def-progressively-measurable-and-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes, def-quadratic-variation-along-a-partition-sequence, thm-ito-isometry-and-linearity-in-predictable-l2, thm-density-of-elementary-predictable-processes-in-predictable-l2, def-brownian-motion, thm-dominated-convergence, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
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
indistinguishable. In particular the integral has mean $0$ and variance
$E(B_t^2-t)^2/4=(2t^2)/4=t^2/2$; it is not a Brownian integral of the type
arising from a deterministic integrand.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a standard Brownian motion $B$ with its usual filtrations, and $t>0$ with the dyadic partition $t_k=kt/2^n$, $0\le k\le2^n$.

[F1] $B$ is adapted with continuous paths, so it is predictable and progressively measurable; and $B$ has finite energy on $[0,t]$: $E\int_0^tB_s^2ds=\int_0^ts\,ds=t^2/2<\infty$. [[lem-adapted-continuous-processes-are-progressively-measurable]] [[def-brownian-motion]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F2] The left-endpoint dyadic integrands $H^n:=\sum_{k=0}^{2^n-1}B_{t_k}1_{(t_k,t_{k+1}]}$ are predictable and square-integrable, though their unbounded coefficients mean that they need not be elementary in the bounded-coefficient convention. Moreover $E\int_0^t|H^n_s-B_s|^2ds=\sum_k\int_{t_k}^{t_{k+1}}(s-t_k)ds=t^2/2^{n+1}\to0$. [[def-progressively-measurable-and-predictable-process]] [[def-brownian-motion]]

[F3] Consequently $\int_0^tH^n\,dB\to\int_0^tB\,dB$ in $L^2(P)$. For $r>0$, truncate each coefficient by $B_{t_k}^{(r)}=(-r)\vee(B_{t_k}\wedge r)$ and write $H^{n,r}:=\sum_kB_{t_k}^{(r)}1_{(t_k,t_{k+1}]}$. Then $H^{n,r}$ is elementary, $H^{n,r}\to H^n$ in predictable $L^2$ as $r\to\infty$, and the elementary integral formula plus the Ito isometry gives
$$\int_0^tH^n\,dB=\lim_{r\to\infty}\sum_k B_{t_k}^{(r)}(B_{t_{k+1}}-B_{t_k})=\sum_kB_{t_k}(B_{t_{k+1}}-B_{t_k})$$
in $L^2(P)$. The last finite sum satisfies $2\sum_kB_{t_k}(B_{t_{k+1}}-B_{t_k})=B_t^2-\sum_k(B_{t_{k+1}}-B_{t_k})^2$. [[def-ito-integral-for-square-integrable-predictable-processes]] [[def-ito-integral-of-an-elementary-predictable-process]] [[def-elementary-predictable-brownian-integrand]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-dominated-convergence]]

[F4] Along the dyadic partitions of $[0,t]$, $\sum_k(B_{t_{k+1}}-B_{t_k})^2\to t$ uniformly on $[0,t]$ almost surely, in the step convention of the quadratic variation. [[thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes]] [[def-quadratic-variation-along-a-partition-sequence]]

[F5] AC is declared for the ambient interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 By the truncation argument in [F3], the general integral of $H^n$ equals $\sum_kB_{t_k}(B_{t_{k+1}}-B_{t_k})$ in $L^2(P)$; since $H^n\to B$ in predictable $L^2$ by [F2], these sums converge to $\int_0^tB\,dB$ in $L^2(P)$. [F2, F3, given]

1.2 The telescoping identity of [F3] writes the same sums as $\tfrac12\bigl(B_t^2-\sum_k(B_{t_{k+1}}-B_{t_k})^2\bigr)$, and by [F4] the quadratic sum converges to $t$ almost surely, so the elementary sums converge almost surely to $\tfrac12(B_t^2-t)$. [F3, F4]

2.1 Two convergent sequences in $L^2(P)$ and almost surely respectively have the same limit when their difference tends to $0$ in probability; the difference of the two candidate limits is $\int_0^tB\,dB-\tfrac12(B_t^2-t)$, which is therefore $0$ almost surely. [F3, step 1.1, step 1.2]

3.1 The identities at $t=0$ give $0=0$; the variance computation $E(B_t^2-t)^2/4=(EB_t^4-2tEB_t^2+t^2)/4=(3t^2-2t^2+t^2)/4=t^2/2$ uses the Gaussian fourth moment. AC enters only through [F5], and no use is made of the later Ito-formula page. [F1, F5, step 2.1, given] ∎

## Source notes

Lawler, equation (3.8), records $\int_0^tB\,dB=(B_t^2-t)/2$; the proof here derives it from the left-dyadic elementary sums and the dyadic quadratic variation of Brownian motion, so the example does not depend on the later Ito formula theorem, as required by the plan's forward-reference seam.
