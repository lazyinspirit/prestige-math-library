---
id: thm-complex-holder-minkowski-and-the-quotient-norm
kind: theorem
title: "Complex Holder, Minkowski, and the quotient norm"
status: published
origin: pipeline
landmark: false
deps: [def-complex-lp-and-euclidean-test-function-conventions, lem-complex-conjugation-and-modulus-laws, thm-holder-inequality-for-integrals, thm-minkowski-inequality-for-integrals, thm-integral-triangle-inequality, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-the-lebesgue-integral-respects-almost-everywhere-equality, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-essential-supremum-with-respect-to-a-measure, thm-finite-and-countable-subadditivity-of-measures]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Reduce to real inequalities for moduli and prove quotient and endpoint assertions directly."
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "\u00a710.1; \u00a710.2, Theorem 10.4, Corollary 10.8, pp.285\u2013287."
---

## Statement

On any measure space, if $p,p^{\prime}\in[1,\infty]$ are conjugate, $f\in L^p(\mu;\mathbb C)$ and $g\in L^{p^{\prime}}(\mu;\mathbb C)$, then
$$\int|fg|\,d\mu\le\|f\|_p\|g\|_{p^{\prime}},\qquad \left|\int fg\,d\mu\right|\le\|f\|_p\|g\|_{p^{\prime}}.$$
For every $1\le p\le\infty$, complex vector operations and $\|[f]\|_p=N_p(f)$ are well-defined on the a.e. quotient and give a norm, with
$$\|f+g\|_p\le\|f\|_p+\|g\|_p,\qquad \|\overline f\|_p=\|f\|_p,$$
$$\|\operatorname{Re}f\|_p,\|\operatorname{Im}f\|_p\le\|f\|_p\le\|\operatorname{Re}f\|_p+\|\operatorname{Im}f\|_p.$$

## Facts & Assumptions

**Given:** A measure space, finite-valued measurable representatives, and the exponents and finite norms stated above.

[F1] Complex measurability, moduli and the set quotient have the stated conventions ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F2] $|zw|=|z||w|$, $|z+w|\le|z|+|w|$ and $z\overline z=|z|^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F3] Real Hölder holds for conjugate exponents, including both endpoints ([[thm-holder-inequality-for-integrals]]).

[F4] Real Minkowski holds for finite exponents ([[thm-minkowski-inequality-for-integrals]]).

[F5] For complex integrable $h$, $|\int h|\le\int|h|$ ([[thm-integral-triangle-inequality]]).

[F6] A nonnegative measurable function has integral zero exactly when it is zero a.e. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F7] Integrable a.e.-equal functions have equal integrals ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F8] Nonnegative integration is monotone and positively homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F9] The essential norm is the infimum of nonnegative essential bounds ([[def-essential-supremum-with-respect-to-a-measure]]).

[F10] Countable unions of measurable null sets are null ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

**Proof technique:** Reduce to real inequalities for moduli and prove quotient and endpoint assertions directly.

1.1 By F1 the real functions $|f|,|g|$ are measurable with finite respective norms. Applying F3 to these functions and using $|fg|=|f||g|$ gives $\int|fg|\le N_p(f)N_{p^{\prime}}(g)<\infty$, for $1<p<\infty$ and also $(p,p^{\prime})=(1,\infty),(\infty,1)$. Thus $fg$ is complex integrable and F5 gives the asserted integral bound. [F1, F2, F3, F5, given]

1.2 For finite $p$, F2 and F8 give $N_p(f+g)\le N_p(|f|+|g|)$. Real Minkowski on the two real nonnegative functions gives $N_p(f+g)\le N_p(f)+N_p(g)$, so addition preserves the finite-functional class. [F2, F4, F8]

1.3 For $p=\infty$ put $a=N_\infty(f)$ and $b=N_\infty(g)$. Every $a+\eta$ and $b+\eta$ with $\eta>0$ is an essential bound: an essential bound smaller than it exists by the infimum property. Off the union of two null sets, $|f+g|\le a+b+2\eta$. Taking infima and then $\eta\downarrow0$ gives $N_\infty(f+g)\le a+b$. [F2, F9, F10]

1.4 If $f=f_1$ a.e. and $g=g_1$ a.e., then $\alpha f+\beta g=\alpha f_1+\beta g_1$ off the union of their measurable disagreement sets. For finite $p$, $|f|^p=|f_1|^p$ a.e., so F7 makes their integrals equal. At infinity the sets of essential bounds agree. Thus both operations and $N_p$ descend. Pointwise complex vector identities descend as well; scalar closure and $N_p(cf)=|c|N_p(f)$ follow from F2 and F8 for finite $p$, and scaling essential bounds for infinity. For $c=0$ this equality is immediate without dividing by $c$. [F1, F2, F7, F8, F9, F10]

1.5 For finite $p$, $N_p(f)=0$ iff $|f|^p=0$ a.e. by F6, iff $f=0$ a.e. by F2. For infinity, if $N_\infty(f)=0$, each measurable set $E_m=\{|f|>1/m\}$ is null by F9. Since $\{f\ne0\}=\bigcup_{m\ge1}E_m$, F10 gives $f=0$ a.e. The converse follows since zero is then an essential bound. This proves positive definiteness, including zero measure spaces. [F2, F6, F9, F10]

2.1 Finally $|\overline f|=|f|$, and pointwise $|\operatorname{Re}f|,|\operatorname{Im}f|\le|f|\le|\operatorname{Re}f|+|\operatorname{Im}f|$. Monotonicity of finite integrals or of essential bounds gives the two lower component bounds; the triangle inequality applied to $f=\operatorname{Re}f+i\operatorname{Im}f$ gives the upper bound. Together with homogeneity, definiteness and the descended operations, this proves all norm assertions. [F1, F2, F8, F9, step 1.2, step 1.3, step 1.4, step 1.5] ∎
