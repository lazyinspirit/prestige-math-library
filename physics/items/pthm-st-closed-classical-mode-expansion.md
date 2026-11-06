---
id: pthm-st-closed-classical-mode-expansion
kind: physics-theorem
title: Closed Classical Mode Expansion
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
  - lem-st-c2-periodic-fourier-expansion
  - lem-st-cauchy-schwarz-mode-estimates
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
  def-st-conformal-gauge-and-residual-symmetry: formulation-prerequisite
  pthm-st-polyakov-eom-virasoro-constraints: physical-result
  lem-st-c2-periodic-fourier-expansion: mathematical-premise
  lem-st-cauchy-schwarz-mode-estimates: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "Classical closed strings on the nondegenerate flat Lorentzian cylinder in conformal gauge; no quantization, normal ordering, or central extension."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§1.4–1.4.1, printed pp. 25–27: left/right solutions, closed-cylinder periodicity, normalized modes, and classical Virasoro constraints."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§7.5 and §§24.5–24.6, printed pp. 142–145 and 580–587: closed-string chiral motion, classical closed Virasoro modes, and Polyakov conventions; the local proof supplies the C2 Fourier convergence argument."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $X:\mathbb R\times\mathbb R/(2\pi\mathbb Z)\to\mathbb R^{1,D-1}$ be a $C^2$, nondegenerate classical closed-string solution in flat conformal gauge, so $\ddot X-X''=0$, $X(\tau,\sigma+2\pi)=X(\tau,\sigma)$, and $T_{++}=T_{--}=0$. Write $\sigma^\pm=\tau\pm\sigma$, and use the convention $T=(2\pi\alpha')^{-1}$. Then $X$ is a sum of left- and right-moving functions and has the periodic mode expansion
$$
X^\mu=x^\mu+\alpha' p^\mu\tau+i\sqrt{\frac{\alpha'}2}\sum_{n\ne0}\frac1n\left(\alpha_n^\mu e^{-in(\tau-\sigma)}+\widetilde\alpha_n^\mu e^{-in(\tau+\sigma)}\right),
$$
with $x,p\in\mathbb R^{1,D-1}$, $\alpha_0^\mu=\widetilde\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$, and $\alpha_{-n}=\alpha_n^*$, $\widetilde\alpha_{-n}=\widetilde\alpha_n^*$. The displayed series converges absolutely and uniformly; its differentiated series converge in $L^2$. The classical closed Virasoro coefficients $L_n=\frac12\sum_{m\in\mathbb Z}\alpha_{n-m}\cdot\alpha_m$ and $\widetilde L_n=\frac12\sum_{m\in\mathbb Z}\widetilde\alpha_{n-m}\cdot\widetilde\alpha_m$ converge absolutely and vanish for every $n\in\mathbb Z$. Thus the two chiral mode families share one common target-space zero mode $x,p$.


Here $x^\mu=(2\pi)^{-1}\int_0^{2\pi}X^\mu(0,\sigma)\,d\sigma$ is the initial spatial average (the center-of-mass position in this gauge), and $p^\mu=T\int_0^{2\pi}\partial_\tau X^\mu(\tau,\sigma)\,d\sigma$ is the conserved total target-translation momentum. In units $\hbar=c=1$, $x$ has length dimension, $p$ has inverse-length (energy) dimension, and $\alpha_n,\widetilde\alpha_n\in\mathbb C^D$ are dimensionless right/left oscillator amplitudes, including their zero modes. Here differentiated-series $L^2$ convergence means convergence on every compact time interval times the spatial circle, and on one period of either chiral profile.

## Statement references

[[def-st-flat-bosonic-string-model]]

[[def-st-string-tension-alpha-prime]]

[[def-st-conformal-gauge-and-residual-symmetry]]

[[pthm-st-polyakov-eom-virasoro-constraints]]

[[lem-st-c2-periodic-fourier-expansion]]

[[lem-st-cauchy-schwarz-mode-estimates]]

## Facts & Assumptions

**Given:** A $C^2$ flat-target field $X$ on the $2\pi$-periodic closed cylinder, the Lorentzian conformal-gauge equations $\ddot X-X''=0$ and $T_{++}=T_{--}=0$, and $\alpha'>0$ with $T=(2\pi\alpha')^{-1}$.

[F1] [[def-st-flat-bosonic-string-model]]: the target metric is $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$; $X$ is $C^2$, the worldsheet coordinates are dimensionless, and $\sigma$ has period $2\pi$.

[F2] [[def-st-string-tension-alpha-prime]]: $\alpha'>0$ has dimension length squared and $T=(2\pi\alpha')^{-1}$.

[F3] [[def-st-conformal-gauge-and-residual-symmetry]]: on a local conformal patch, $\sigma^\pm=\tau\pm\sigma$ are the light-cone coordinates; the closed-cylinder identification shifts them by $+2\pi$ and $-2\pi$.

[F4] [[pthm-st-polyakov-eom-virasoro-constraints]]: the classical model equations are $\partial_+\partial_-X=0$ and $T_{++}=T_{--}=0$, with $T_{\pm\pm}=\partial_\pm X\cdot\partial_\pm X$.

[F5] [[lem-st-c2-periodic-fourier-expansion]]: every $C^2$, $2\pi$-periodic scalar function has an absolutely uniformly convergent Fourier series, and its differentiated symmetric Fourier sums converge in $L^2$.

[F6] [[lem-st-cauchy-schwarz-mode-estimates]]: componentwise Euclidean norms control the Minkowski contraction; square-summable mode sequences have absolutely convergent convolution coefficients, and continuous periodic profiles satisfy $\|A\cdot B\|_1\le\|A\|_{2,E}\|B\|_{2,E}$ using normalized measure $ds/(2\pi)$.

## Proof

**Proof technique:** solve the wave equation by characteristics, apply the local C2 Fourier reconstruction to the periodic chiral remainders, and extract the stress constraints by Fourier coefficients.

1.1 Put $u=\tau+\sigma$ and $v=\tau-\sigma$, using the light-cone convention [F3]. The free wave equation in [F4] is $\partial_u\partial_vX=0$. Therefore $\partial_uX$ is independent of $v$; integrate it in $u$ to obtain $X(\tau,\sigma)=F(u)+G(v)$ for $C^2$ functions $F,G:\mathbb R\to\mathbb R^{1,D-1}$. [given, F3, F4, algebra]

2.1 Closed-string periodicity gives $F(u+2\pi)-F(u)=G(v)-G(v-2\pi)$ for every $u,v$. The left side depends only on $u$ and the right side only on $v$, so both equal one constant vector $C$. Hence each chiral function has increment $C$ over $2\pi$; subtracting its linear part of slope $C/(2\pi)$ leaves a $C^2$, $2\pi$-periodic function. Set $p=C/(\pi\alpha')$ and choose the additive constants so both chiral zero modes contain $x/2$. [given, F1, F2, step 1.1]

3.1 Apply [F5] to the two periodic remainders. Writing their Fourier series in the phases $e^{-inu}$ and $e^{-inv}$, respectively, and defining $\widetilde\alpha_n$ and $\alpha_n$ by multiplying the corresponding coefficients by $n/(i\sqrt{\alpha'/2})$, gives exactly the displayed expansion, with $\alpha_0=\widetilde\alpha_0=\sqrt{\alpha'/2}\,p$. The series are absolutely and uniformly convergent by [F5]. Since the remainders are real componentwise, their Fourier coefficients at opposite indices are conjugates, giving the stated reality conditions. The periodic remainders have zero average, so the spatial average is $x+\alpha'p\tau$ and $T\int_0^{2\pi}\dot X\,d\sigma=2\pi T\alpha'p=p$. Directly, the conformal action density is $\mathcal L=T(\dot X^2-X'^2)/2$, whose derivative with respect to $\dot X_\mu$ is $T\dot X^\mu$, identifying this integral as total target-translation momentum; its time derivative is $T[X']_0^{2\pi}=0$ by the wave equation and periodicity. Since $[X]=L$ and $[\alpha']=L^2$, the expansion gives $[x]=L$, $[p]=L^{-1}$ and dimensionless oscillator coefficients. Chiral $L^2$ convergence from [F5] also gives spacetime $L^2$ convergence on compact time slabs by periodicity and integration in time. [given, F2, F5, step 2.1, algebra]

4.1 Differentiating the partial sums in step 3.1 gives $Y(v):=\partial_-X=\sqrt{\alpha'/2}\sum_{m\in\mathbb Z}\alpha_m e^{-imv}$ in the $L^2$ limit, and analogously $\partial_+X=\sqrt{\alpha'/2}\sum_m\widetilde\alpha_m e^{-im u}$. For a component $q=Y^\mu$, the Fourier coefficient of $e^{-imv}$ is $\sqrt{\alpha'/2}\alpha_m^\mu$. For each finite $N$, the orthogonality in [F5] gives $\|q-Q_N\|_2^2=\|q\|_2^2-\frac{\alpha'}2\sum_{|m|\le N}|\alpha_m^\mu|^2\ge0$, where $Q_N$ is its symmetric coefficient sum. Summing over the finite target components bounds $(\alpha'/2)\sum_{|m|\le N,\mu}|\alpha_m^\mu|^2$ by $\|Y\|_{2,E}^2$. The same argument for $\partial_+X$ bounds $\widetilde\alpha$, so both mode sequences are componentwise square-summable. [F5, F6, step 3.1, algebra]

5.1 For fixed $n$, [F6] and step 4.1 make $\sum_m\alpha_m\cdot\alpha_{n-m}$ absolutely convergent. If $Y_N$ is the $N$-th Fourier partial sum of $Y$, then $Y_N\to Y$ in componentwise $L^2$ by [F5], and [F6] gives $Y_N\cdot Y_N\to Y\cdot Y$ in $L^1$. Each finite product has $n$-th Fourier coefficient $(\alpha'/2)\sum_{|m|,|n-m|\le N}\alpha_m\cdot\alpha_{n-m}$; absolute convergence lets $N\to\infty$. Because $T_{--}=Y\cdot Y=0$ by [F4], its every Fourier coefficient vanishes, so $L_n=0$. The same argument with $\partial_+X$ gives $\widetilde L_n=0$. [F4, F5, F6, step 4.1, algebra] ∎
