---
id: pthm-st-open-neumann-classical-mode-expansion
kind: physics-theorem
title: Open Neumann Classical Mode Expansion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - def-st-string-tension-alpha-prime
  - def-st-conformal-gauge-and-residual-symmetry
  - pthm-st-polyakov-eom-virasoro-constraints
  - pthm-st-open-string-boundary-variation
  - lem-st-c2-periodic-fourier-expansion
  - lem-st-cauchy-schwarz-mode-estimates
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
  def-st-conformal-gauge-and-residual-symmetry: formulation-prerequisite
  pthm-st-polyakov-eom-virasoro-constraints: physical-result
  pthm-st-open-string-boundary-variation: physical-result
  lem-st-c2-periodic-fourier-expansion: mathematical-premise
  lem-st-cauchy-schwarz-mode-estimates: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "Classical Neumann open strings on the flat Lorentzian strip in conformal gauge; no D-brane dynamics, quantization, or quantum spectrum."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§1.4 and Chapter 3, printed pp. 25–26 and 50–52: chiral solutions, open endpoint variation, and the Neumann mode relation."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§6.5, §9.4, and §24.2, printed pp. 112–115, 183–186, and 570–572: endpoint variation, Neumann open modes, and classical constraint modes."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

On the flat open strip $\mathbb R\times[0,\pi]$, let $X$ be a $C^2$ conformal-gauge solution of the free wave equation with Neumann data $\partial_\sigma X|_{\sigma=0,\pi}=0$ and with the metric constraints $T_{++}=T_{--}=0$. With $\alpha'>0$ and $T=(2\pi\alpha')^{-1}$, it has one common center-of-mass zero mode and a single cosine oscillator family:
$$
X^\mu=x^\mu+2\alpha'p^\mu\tau+i\sqrt{2\alpha'}\sum_{n\ne0}\frac{\alpha_n^\mu}{n}e^{-in\tau}\cos(n\sigma),\qquad \alpha_0^\mu=\sqrt{2\alpha'}\,p^\mu .
$$
The series converges absolutely and uniformly, and its differentiated symmetric partial sums converge in $L^2$. The reality conditions are $\alpha_{-n}=\alpha_n^*$; the metric constraints impose the open classical Virasoro conditions $L_n=\frac12\sum_{m\in\mathbb Z}\alpha_{n-m}\cdot\alpha_m=0$ for all $n\in\mathbb Z$, with each convolution absolutely convergent.


Here $x,p\in\mathbb R^{1,D-1}$, with $x^\mu=\pi^{-1}\int_0^\pi X^\mu(0,\sigma)\,d\sigma$ the initial spatial average (center-of-mass position in this gauge) and $p^\mu=T\int_0^\pi\partial_\tau X^\mu(\tau,\sigma)\,d\sigma$ the conserved total target-translation momentum. In units $\hbar=c=1$, $x$ has length dimension, $p$ has inverse-length (energy) dimension, and $\alpha_n\in\mathbb C^D$ are dimensionless oscillator amplitudes, including $\alpha_0$. Differentiated-series $L^2$ convergence means convergence on every compact time interval times $[0,\pi]$, and on one period of the common chiral profile.

## Statement references

[[def-st-flat-bosonic-string-model]]

[[def-st-string-tension-alpha-prime]]

[[def-st-conformal-gauge-and-residual-symmetry]]

[[pthm-st-polyakov-eom-virasoro-constraints]]

[[pthm-st-open-string-boundary-variation]]

[[lem-st-c2-periodic-fourier-expansion]]

[[lem-st-cauchy-schwarz-mode-estimates]]

## Facts & Assumptions

**Given:** A $C^2$ flat-target field on $\mathbb R\times[0,\pi]$ satisfying the conformal-gauge wave equation, the classical metric constraints, and Neumann endpoint conditions.

[F1] [[def-st-flat-bosonic-string-model]]: $X$ maps the Lorentzian open strip to $\mathbb R^{1,D-1}$, with $\sigma\in[0,\pi]$ and dimensionless coordinates.

[F2] [[def-st-string-tension-alpha-prime]]: $\alpha'>0$, $T=(2\pi\alpha')^{-1}$, and $X$ has length dimension.

[F3] [[def-st-conformal-gauge-and-residual-symmetry]]: $\sigma^\pm=\tau\pm\sigma$ and $\partial_\pm=\frac12(\partial_\tau\pm\partial_\sigma)$ on a Lorentzian conformal-gauge patch.

[F4] [[pthm-st-polyakov-eom-virasoro-constraints]]: the equations are $\partial_+\partial_-X=0$ and $T_{++}=T_{--}=0$.

[F5] [[pthm-st-open-string-boundary-variation]]: on a flat conformal-gauge strip, Neumann endpoint data are $\partial_\sigma X^\mu=0$ at $\sigma=0,\pi$.

[F6] [[lem-st-c2-periodic-fourier-expansion]]: every $C^2$, $2\pi$-periodic scalar function has an absolutely uniformly convergent Fourier series, and its differentiated symmetric Fourier sums converge in $L^2$.

[F7] [[lem-st-cauchy-schwarz-mode-estimates]]: componentwise Euclidean norms control the Minkowski contraction; square-summable mode sequences have absolutely convergent convolution coefficients, and continuous periodic profiles satisfy $\|A\cdot B\|_1\le\|A\|_{2,E}\|B\|_{2,E}$ using normalized measure $ds/(2\pi)$.

## Proof

**Proof technique:** solve the wave equation by characteristics, use the endpoint conditions to identify the chiral profiles, and apply the local C2 Fourier reconstruction to their common periodic part.

1.1 Put $u=\tau+\sigma$, $v=\tau-\sigma$ on the flat target strip [F1], using the light-cone convention [F3]. As in the direct integration of $\partial_u\partial_vX=0$ from [F4], every $C^2$ solution is $X=F(u)+G(v)$ for $C^2$ functions $F,G$. Its spatial derivative is $X'=F'(u)-G'(v)$. [given, F1, F3, F4, algebra]

2.1 At $\sigma=0$, [F5] gives $F'(\tau)=G'(\tau)$ for every $\tau$, so these derivatives are one function $P:\mathbb R\to\mathbb R^{1,D-1}$. At $\sigma=\pi$, [F5] gives $P(\tau+\pi)=P(\tau-\pi)$; replacing $\tau-\pi$ by $s$ proves $P(s+2\pi)=P(s)$. Thus $F'$ and $G'$ are the same $2\pi$-periodic function. [given, F5, step 1.1]

3.1 Let $A=(2\pi)^{-1}\int_{-\pi}^{\pi}P(s)\,ds$ and define $p=A/\alpha'$. Then $F(u)-\alpha'pu$ and $G(v)-\alpha'pv$ are $C^2$, $2\pi$-periodic, and have the same derivative; hence they differ only by a constant. Choose constants $x/2$ so the periodic remainders coincide. Their sum has zero mode $x+2\alpha'p\tau$. [given, F2, step 2.1, algebra]

4.1 Apply [F6] to the common periodic remainder $U$ and write $U(s)=\sum_{n\ne0}a_ne^{-ins}$, after placing its constant Fourier mode into $x$. Define $\alpha_n:=n a_n/(i\sqrt{\alpha'/2})$. Then $F(u)=x/2+\alpha'pu+U(u)$ and $G(v)=x/2+\alpha'pv+U(v)$. The periodic terms sum to $2\sum_{n\ne0}a_ne^{-in\tau}\cos(n\sigma)$. Since $i\sqrt{2\alpha'}\,\alpha_n/n=2a_n$, this is exactly the stated oscillator series. The series is absolutely uniformly convergent by [F6], and real $X$ gives $\alpha_{-n}=\alpha_n^*$. Each nonconstant cosine has zero spatial average, so the mean is $x+2\alpha'p\tau$ and $T\int_0^\pi\dot X\,d\sigma=2\pi T\alpha'p=p$. In conformal gauge the action density is $\mathcal L=T(\dot X^2-X'^2)/2$, so its derivative with respect to $\dot X_\mu$ is $T\dot X^\mu$, identifying this integral as total target-translation momentum. Its time derivative is $T[X']_0^\pi=0$ by the wave equation and Neumann data. The dimensions $[X]=L$ and $[\alpha']=L^2$ then give $[x]=L$, $[p]=L^{-1}$ and dimensionless $\alpha_n$. The chiral derivative convergence from [F6] gives $L^2$ convergence on compact time slabs after restriction to the strip. [given, F2, F6, step 3.1, algebra]

5.1 Differentiating the mode partial sums in [F6] in $L^2$ yields the common chiral derivative $P(u)=\sqrt{\alpha'/2}\sum_{m\in\mathbb Z}\alpha_me^{-imu}$, with $\alpha_0=\sqrt{2\alpha'}\,p$. For a component $q=P^\mu$, the coefficient of $e^{-imu}$ is $\sqrt{\alpha'/2}\alpha_m^\mu$. For every finite $N$, orthogonality from [F6] gives $\|q-Q_N\|_2^2=\|q\|_2^2-\frac{\alpha'}2\sum_{|m|\le N}|\alpha_m^\mu|^2\ge0$, where $Q_N$ is its symmetric coefficient sum. Summing over target components bounds $(\alpha'/2)\sum_{|m|\le N,\mu}|\alpha_m^\mu|^2$ by $\|P\|_{2,E}^2$. Hence the mode sequence is componentwise square-summable. [F2, F6, F7, step 4.1, algebra]

6.1 For fixed $n$, [F7] and step 5.1 make $\sum_m\alpha_m\cdot\alpha_{n-m}$ absolutely convergent. The $L^2$ partial sums $P_N$ satisfy $P_N\cdot P_N\to P\cdot P$ in $L^1$ by [F6] and [F7]. Hence the $n$-th Fourier coefficient of $P\cdot P$ is $(\alpha'/2)\sum_m\alpha_m\cdot\alpha_{n-m}=\alpha' L_n$. Because $T_{++}=P\cdot P=0$ by [F4], $L_n=0$ for every $n$. The other metric constraint gives the same condition for the identical chiral profile. [F4, F6, F7, step 5.1, algebra] ∎
