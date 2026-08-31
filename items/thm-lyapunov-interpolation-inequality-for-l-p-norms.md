---
id: thm-lyapunov-interpolation-inequality-for-l-p-norms
kind: theorem
title: "Lyapunov interpolation inequality for $L^p$ norms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-holder-inequality-for-integrals, def-conjugate-exponents, def-calligraphic-l-p-on-a-measure-space]
proof_strategy: "If 1/p = theta/p_0 + (1 - theta)/p_1, rewrite |f|^p as |f|^(theta p)|f|^((1 - theta)p) and apply Holder with conjugate exponents p_0/(theta p) and p_1/((1 - theta)p)."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, Section 6.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $1\le p_0<p<p_1<\infty$ and let $\theta\in(0,1)$ satisfy

$$\frac1p=\frac{\theta}{p_0}+\frac{1-\theta}{p_1}.$$

If $f\in\mathcal L^{p_0}(\mu)\cap\mathcal L^{p_1}(\mu)$, then
$f\in\mathcal L^p(\mu)$ and

$$\|f\|_p\le\|f\|_{p_0}^{\theta}\|f\|_{p_1}^{1-\theta}.$$

## Facts & Assumptions

**Given:** Exponents $p_0<p<p_1$ and a function
$f\in\mathcal L^{p_0}(\mu)\cap\mathcal L^{p_1}(\mu)$.

[L1] Holder's inequality for integrals is available
([[thm-holder-inequality-for-integrals]]).

[L2] Conjugate exponents are defined in [[def-conjugate-exponents]].

[L3] Membership in $\mathcal L^s(\mu)$ means finiteness of the $s$-power integral
([[def-calligraphic-l-p-on-a-measure-space]]).

## Proof

**Proof technique:** If $1/p = \theta/p_0 + (1 - \theta)/p_1$, rewrite $|f|^p$
as the product $|f|^{\theta p}|f|^{(1-\theta)p}$ and apply Holder with
conjugate exponents $p_0/(\theta p)$ and $p_1/((1-\theta)p)$.

1.1 Put [L1, L2, L3, given, algebra]
$$a:=\frac{p_0}{\theta p},\qquad b:=\frac{p_1}{(1-\theta)p}.$$
Then
$$\frac1a+\frac1b=\frac{\theta p}{p_0}+\frac{(1-\theta)p}{p_1}=1,$$
so [L2] makes $a$ and $b$ conjugate exponents. Also
$$\left(|f|^{\theta p}\right)^a=|f|^{p_0},\qquad \left(|f|^{(1-\theta)p}\right)^b=|f|^{p_1}.$$
Applying [L1] to the factors $|f|^{\theta p}$ and $|f|^{(1-\theta)p}$
therefore yields
$$\int |f|^p\,d\mu\le\left(\int |f|^{p_0}\,d\mu\right)^{\theta p/p_0}\left(\int |f|^{p_1}\,d\mu\right)^{(1-\theta)p/p_1}=\|f\|_{p_0}^{\theta p}\|f\|_{p_1}^{(1-\theta)p}.$$

2.1 Taking $p$-th roots yields the Lyapunov interpolation inequality, and the right-hand side is finite by [L3], so $f\in\mathcal L^p(\mu)$. [step 1.1, L3] ∎
