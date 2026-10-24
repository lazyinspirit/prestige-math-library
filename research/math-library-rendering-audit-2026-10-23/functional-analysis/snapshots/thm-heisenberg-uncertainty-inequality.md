---
id: thm-heisenberg-uncertainty-inequality
kind: theorem
title: Heisenberg uncertainty and Gaussian equality
deps: ["thm-parseval-pairing-on-schwartz-space", "thm-fourier-transform-maps-schwartz-space-continuously-to-itself", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "lem-complex-lp-completeness-density-and-inner-product", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "def-countable-choice", "thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space", "lem-schwartz-functions-and-all-derivatives-are-integrable", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "ex-gaussians-and-polynomials-times-gaussians-are-schwartz"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Theorem 14.15, pp.385–386; radial sum and equality conditions expanded
---

## Statement

Assume countable choice and let $n\ge1$. For $f\in\mathcal S(\mathbb R^n)$ and $a,b\in\mathbb R^n$,
$$\big\||x-a|f\big\|_2\big\||\xi-b|\widehat f\big\|_2\ge\frac n{4\pi}\|f\|_2^2.$$
For nonzero $f$, equality holds exactly for
$$f(x)=c\exp(-\lambda|x-a|^2/2)\exp(2\pi ib\cdot x),\qquad c\in\mathbb C\setminus\{0\},\quad\lambda>0.$$
The zero function also gives equality.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and [[def-countable-choice]].

[F1] Schwartz Parseval preserves norms ([[thm-parseval-pairing-on-schwartz-space]]).

[F2] Fourier transforms derivatives to multiplication by $2\pi i\xi$ ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]).

[F3] Translation and modulation have the stated Fourier covariance laws ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]]).

[F4] Complex finite-tuple Cauchy–Schwarz has equality exactly for one common scalar multiple when the second tuple is nonzero ([[lem-complex-lp-completeness-density-and-inner-product]]).

[F5] Complex line integration by parts and interval FTC hold ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F6] The basic operations preserve Schwartz space ([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]]), and weighted derivatives are integrable in all required exponents ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

[F7] Absolute-integrable product functions admit Fubini ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F8] Positive-parameter Gaussians are Schwartz ([[ex-gaussians-and-polynomials-times-gaussians-are-schwartz]]).

## Proof

**Proof technique:** direct.

1.1 Put $g(y)=e^{-2\pi ib\cdot(y+a)}f(y+a)$. By [F6] it is Schwartz, and [F3] gives $\widehat g(\eta)=e^{2\pi ia\cdot\eta}\widehat f(\eta+b)$. Translation substitution and unit modulus therefore identify $\|g\|_2=\|f\|_2$, $\||y|g\|_2=\||x-a|f\|_2$, and $\||\eta|\widehat g\|_2=\||\xi-b|\widehat f\|_2$. It suffices to prove the zero-centre assertion for $g$. [F3, F6, given] 

2.1 For each coordinate $j$, apply [F5] along that line to $u=x_jg$ and $v=\overline g$. The endpoint product $x_j|g|^2$ tends to zero at both ends by rapid decay, and both differentiated products are line-integrable. Their full-space integrability follows from [F6] and [F4], so [F7] permits integrating the identity in the other coordinates. It yields $\|g\|_2^2=-2\operatorname{Re}\int x_jg\overline{\partial_jg}$. Sum over $j$ and define tuples $A=(x_jg)_j$, $B=(\partial_jg)_j$. Then $$n\|g\|_2^2=-2\operatorname{Re}\langle A,B\rangle\le2|\langle A,B\rangle|\le2\|A\|\|B\|.$$ By [F1] and [F2], $\|B\|^2=4\pi^2\int|\xi|^2|\widehat g(\xi)|^2\,d\xi$, while $\|A\|=\||x|g\|_2$. This proves the inequality with the claimed constant. [step 1.1, F1, F2, F4, F5, F6, F7] 

3.1 Suppose $g\ne0$ and equality holds. Step 2.1 gives $n\|g\|_2^2>0$, so both tuple norms are nonzero. Equality in [F4] makes $B=dA$ for one complex scalar $d$. Equality in the real-part bound, together with $\langle A,B\rangle=\overline d\|A\|^2$, forces $d$ to be a negative real number. Write $d=-\lambda$, $\lambda>0$. The identities $\partial_jg=-\lambda x_jg$ hold a.e., hence everywhere by continuity and the positive measure of nondegenerate boxes. Thus every partial derivative of $G(x)=e^{\lambda|x|^2/2}g(x)$ is zero. Applying the interval FTC [F5] along successive coordinate segments shows $G(x)=G(0)=c$, so $g(x)=ce^{-\lambda|x|^2/2}$. Nonzero $g$ forces $c\ne0$. Undoing step 1.1 gives exactly the displayed form for $f$. [step 1.1, step 2.1, F4, F5] 

4.1 Conversely let $g(x)=ce^{-\lambda|x|^2/2}$ with $\lambda>0$, $c\ne0$. By [F8] it is Schwartz, and direct differentiation gives $B=-\lambda A$. Thus both inequalities in step 2.1 are equalities, giving equality in the uncertainty inequality. By step 1.1 the translated and modulated functions have the same equality property. If $f=0$, both sides are zero directly. The common scalar across all coordinates is essential to the radial equality assertion proved here. [step 1.1, step 2.1, F8, given] ∎
