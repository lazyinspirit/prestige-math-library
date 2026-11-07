---
id: lem-dickman-model-symmetric-perron-inversion
kind: lemma
title: Symmetric Perron inversion for the Dickman model
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
proof_strategy: contour
axiom_use: No choice axiom is used; inversion is proved for fixed parameters by finite integrals and explicit scalar tails.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- lem-dickman-model-function-relative-approximation
- lem-dickman-entire-laplace-transform
- lem-dickman-method-of-steps-existence-uniqueness-and-positivity
- thm-riemann-zeta-continuation-to-the-right-half-plane
- thm-ftc-second-part
sources:
  references:
  - title: Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
    locator: Lemma 3.2 and equation 3.6, printed pp. 432–433. Symmetric inversion and endpoint values are proved locally.
---

## Statement

Let $y\ge e^{10}$, $x=y^u$, $u\ge2$, $v=\log y$, and let $\xi=\xi(u)>0$ satisfy $e^\xi=1+u\xi$ and $\xi\le v/2$. Put $\sigma=1-\xi/v$ and $$F_y(s)=\zeta(s)(s-1)v\widehat\rho((s-1)v).$$
For the explicitly defined model $\Lambda(x,y)$ of [[lem-dickman-model-function-relative-approximation]], the symmetric improper integral exists and
$$\lim_{T\to\infty}\frac1{2\pi i}\int_{\sigma-iT}^{\sigma+iT}F_y(s)\frac{x^s}{s}\,ds=\Lambda(x,y)-\frac12\mathbf1_{x\in\mathbb Z}.$$
No finite-$T$ remainder or smooth-number counting estimate is asserted.

## Facts & Assumptions

**Given:** The parameters and model in the Statement.

[F1] The model $\Lambda$ is the finite sum and compact integral displayed in [[lem-dickman-model-function-relative-approximation]].

[F2] $\widehat\rho(z)=\int_0^\infty\rho(t)e^{-zt}dt$ converges absolutely for all complex $z$. The Dickman function is continuous, positive, equals one on $[0,1]$, and has $\rho'(t)=-\rho(t-1)/t$ for $t>1$. [[lem-dickman-entire-laplace-transform]] [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]]

[F3] For $\operatorname{Re}s>0$, $s\ne1$, $$\zeta(s)=\frac{s}{s-1}-s\int_1^\infty\{t\}t^{-s-1}dt,$$ with the integral locally uniformly convergent. [[thm-riemann-zeta-continuation-to-the-right-half-plane]]

[F4] Finite integrals of continuous derivatives and integration by parts follow from the fundamental theorem of calculus. [[thm-ftc-second-part]]

## Proof

1.1 For $w\ge0$ set $h(w)=\{y^w\}e^{-vw}$ and $h(w)=0$ for $w<0$. Then $0\le h(w)\le e^{-vw}$. Put $f(w)=\rho(w)-h(w)-\int_0^w\rho'(w-r)h(r)dr$ for $w\ge0$ and $f(w)=0$ for $w<0$, interpreting $\rho'=0$ below $1$. Summing finite integration-by-parts identities between the finitely many jumps of $\lfloor y^w\rfloor$ gives $f(u)=\Lambda(x,y)/x$: the jump at $w=\log n/v$ has size $1/n$ in $\lfloor y^w\rfloor e^{-vw}$, including $n=1$ and an integer endpoint $n=x$. The convolution term is continuous, while $h$ has downward jump $1/x$ at $u$ exactly when $x$ is an integer. Hence $xf(u-)=\Lambda(x,y)-\mathbf1_{x\in\mathbb Z}$ and $xf(u+)=\Lambda(x,y)$. [F1, F2, F4, given, algebra]

1.2 The function $e^{\xi w}f(w)$ is integrable: [F2] gives $\int e^{\xi w}\rho(w)dw<\infty$ and $$\int_1^\infty e^{\xi w}|\rho'(w)|dw\le e^\xi\int_0^\infty e^{\xi r}\rho(r)dr<\infty,$$ while $\int_0^\infty e^{\xi w}h(w)dw\le(v-\xi)^{-1}$. Applying these explicit bounds to the convolution proves its weighted absolute integrability. On every compact interval, $\rho'$ has finitely many smooth pieces by its differential-delay relation in [F2], and $h$ has finitely many smooth pieces and jumps; therefore $f$ is locally Lipschitz separately on the two sides of each jump. [F2, given, algebra]

2.1 For $\operatorname{Re}z>-v$, the transform $H(z)=\int_0^\infty e^{-zw}h(w)dw$ exists absolutely. With $s=1+z/v$, the substitution $t=y^w$ and [F3] give $$H(z)=\frac1v\int_1^\infty\{t\}t^{-s-1}dt=\frac1z-\frac{\zeta(s)}{vs},$$ interpreted by continuity at $z=0$. Since $\rho(0)=1$, integration by parts gives $\int_0^\infty e^{-zw}\rho'(w)dw=z\widehat\rho(z)-1$. Absolute convolution estimates in step 1.2 justify the product of transforms. Thus $$\widehat f(z)=\widehat\rho(z)-H(z)-(z\widehat\rho(z)-1)H(z)=\widehat\rho(z)(1-zH(z))=\widehat\rho(z)\frac{(s-1)\zeta(s)}s.$$ All identities extend across $z=0$ by their removable values. [F2, F3, F4, step 1.2, algebra]

2.2 Put $q(w)=e^{\xi w}f(w)$. For finite $T$, interchange the compact Fourier integral and the absolutely integrable transform to obtain $$\frac1{2\pi}\int_{-T}^T e^{itu}\widehat f(-\xi+it)dt=\frac1\pi\int_{\mathbb R}q(w)\frac{\sin(T(u-w))}{u-w}dw.$$ Subtract the two constant one-sided values of $q$ on a small interval about $u$. The remaining quotient is locally bounded by the one-sided Lipschitz property and has an explicitly integrable tail; on a compact interval approximate it in integral norm by finitely many step functions, whose sine integrals tend to zero. The subtracted two sides each contribute half their one-sided value, since $\int_0^\infty\sin t\,dt/t=\pi/2$. For this last identity, differentiate $\int_0^\infty e^{-at}\sin t\,dt/t$ in $a>0$ to get $-1/(1+a^2)$ and value $\arctan(1/a)$; the sine tail is uniformly $O(1/T)$ by integration by parts. Consequently the symmetric integral tends to $(q(u-)+q(u+))/2$. [F4, step 1.1, step 1.2, construct, algebra]

3.1 Substitute $z=(s-1)v=-\xi+it$ into step 2.1, and put the Fourier frequency there equal to $v\operatorname{Im}s$. Because $x=y^u$, the equality in step 2.2 becomes the integral in the Statement after multiplying by $x$ and changing variables. Step 1.1 supplies its endpoint value $\Lambda(x,y)-\tfrac12\mathbf1_{x\in\mathbb Z}$. [step 1.1, step 2.1, step 2.2, algebra] ∎
