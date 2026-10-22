---
id: ex-ip-invisible-wedge-null-function
kind: example
title: A nonzero Schwartz function invisible to a limited-angle Radon transform
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-visible-covector-for-limited-angle-data
  - def-ip-schwartz-radon-transform
  - lem-ip-schwartz-radon-well-defined
  - lem-ip-fourier-slice-identity-on-schwartz
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-fourier-transform-on-l-one-of-rn
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-fourier-inversion-on-schwartz-space
  - lem-schwartz-functions-and-all-derivatives-are-integrable
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
  - def-metric-space
  - thm-ip-kernel-directions-preclude-unrestricted-recovery
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.3.2, pp. 13–14, Theorem 3 and its proof: a nonzero Schwartz null function for limited-angle data."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–5: line-normal convention and Fourier-slice identity."
---

## Example

Assume the Axiom of Countable Choice. Let $\Theta\subset S^1$ be a nonempty proper open antipodally symmetric set such that $S^1\setminus\overline\Theta$ contains a nonempty open arc. Choose an open arc $J$ with $\overline J\subset S^1\setminus\overline\Theta$, put $V=\{r\omega:1<r<2,\ \omega\in J\}$, choose a nonzero smooth function $q\in C_c^\infty(V;\mathbb C)$, and define $f(x)=\int_{\mathbb R^2}q(\xi)e^{2\pi i x\cdot\xi}\,d\xi$. For $\theta=(\theta_1,\theta_2)$ write $\theta^\perp=(-\theta_2,\theta_1)$ and, for a Schwartz function $g$, define $R_{\mathcal S}g(\theta,s)=\int_{\mathbb R}g(s\theta+t\theta^\perp)\,dt$ using Lebesgue measure $dt$. Let $Y=L^2(\Theta\times\mathbb R,d\theta\,ds)$, where $d\theta$ is arc-length measure and $ds$ is Lebesgue measure. Then $f$ is a nonzero Schwartz function in $L^2(\mathbb R^2)$ with Lebesgue measure, its Fourier transform is $q$, and $R_{\mathcal S}f(\theta,s)=0$ for every $\theta\in\Theta$ and $s\in\mathbb R$, so both $0$ and $f$ give datum $0$ in $Y$ without either truth being required to have compact support. For the two-truth class $\{0,f\}$ with target loss $\|g-h\|_{L^2(\mathbb R^2)}$, every deterministic estimator $\Phi:Y\to L^2(\mathbb R^2)$ satisfies $\max\{\|\Phi(0)\|_2,\|\Phi(0)-f\|_2\}\ge \|f\|_2/2>0$.

## Example references

[[def-ip-visible-covector-for-limited-angle-data|Measured Fourier wedge and blind directions]]

[[lem-ip-fourier-slice-identity-on-schwartz|Fourier-slice identity for Schwartz inputs]]

[[thm-ip-kernel-directions-preclude-unrestricted-recovery|Two-truth lower bound for deterministic estimators]]

[Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography, §1.3.2](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf)

[Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the normal set $\Theta$, the blind arc $J$, the annular sector $V$, and the nonzero smooth function $q$ supported in $V$ from the Example.

[F1] [[def-ip-visible-covector-for-limited-angle-data]]: $W_\Theta=\{\sigma\theta:\theta\in\Theta,\ \sigma\ne0\}$, while the directions in $S^1\setminus\overline\Theta$ are unmeasured.

[F2] [[lem-smooth-bump-between-concentric-euclidean-balls]]: every nonempty open ball contains a nonzero smooth compactly supported function, by translating and rescaling a concentric bump.

[F3] [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]: under Countable Choice the negative-sign, $2\pi$-normalized Fourier transform maps Schwartz functions to Schwartz functions.

[F4] [[thm-fourier-inversion-on-schwartz-space]]: under Countable Choice, $g(x)=\int\widehat g(\xi)e^{2\pi i x\cdot\xi}\,d\xi$ for every Schwartz function $g$.

[F5] [[def-fourier-transform-on-l-one-of-rn]]: $\widehat g(\eta)=\int g(x)e^{-2\pi i x\cdot\eta}\,dx$ for integrable $g$.

[F6] [[cor-c-one-change-of-variables-for-l-one-functions]]: under Countable Choice, the reflection $x\mapsto-x$ preserves Lebesgue integrals because its absolute determinant is one.

[F7] [[lem-schwartz-functions-and-all-derivatives-are-integrable]]: under Countable Choice every Schwartz function belongs to $L^p$ for each $1\le p\le\infty$.

[F8] [[lem-ip-fourier-slice-identity-on-schwartz]]: under Countable Choice, $\widehat{R_{\mathcal S}g}(\theta,\sigma)=\widehat g(\sigma\theta)$ for Schwartz $g$.

[F9] [[lem-ip-schwartz-radon-well-defined]]: for fixed $\theta$, $R_{\mathcal S}g(\theta,\cdot)$ is a Schwartz function.

[F10] [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]: the $L^2$ quotient norm is a norm and gives the triangle inequality and separation.

[F11] [[thm-ip-kernel-directions-preclude-unrestricted-recovery]]: if two truths share one exact datum, every deterministic data-only estimator has maximum target loss at least half their target distance.

[F12] [[def-metric-space]]: a metric satisfies separation (M1), symmetry (M2), and the triangle inequality (M3); the metric induced by an $L^2$ norm here is $d(g,h)=\|g-h\|_2$.


[A1] [[def-countable-choice]]: Countable Choice is assumed by the Fourier transform, inversion, Lp integrability, Fourier-slice, and Lebesgue substitution suppliers [F3], [F4], [F6]–[F9].

## Verification

**Proof technique:** direct.

1.1 The sector $V$ is a nonempty open subset of $\mathbb R^2$ because $(r,\omega)\mapsto r\omega$ maps the open parameter set $(1,2)\times J$ to an open polar-coordinate sector. It therefore contains a ball; [F2] supplies a nonzero $q\in C_c^\infty(V)$. This establishes the required bump choice. [F2, given, construct]

1.2 By the Fourier definition [F5], the function in the Example is $f(x)=\widehat q(-x)$. Since $q$ is smooth with compact support, every Schwartz seminorm of $q$ is bounded, so $q\in\mathcal S$. By [F3] its transform is Schwartz, and reflection preserves each Schwartz seminorm up to sign, hence $f$ is Schwartz; [F7] gives $f\in L^2\cap L^1$. The reflection substitution [F6] and inversion [F4] give $\widehat f(\eta)=\int\widehat q(-x)e^{-2\pi i x\cdot\eta}\,dx=\int\widehat q(y)e^{2\pi i y\cdot\eta}\,dy=q(\eta)$. Since $q\ne0$, this identity implies $f$ is nonzero as an $L^1$ and $L^2$ class. [F3, F4, F5, F6, F7, A1, given, algebra]

1.3 For $\theta\in\Theta$ and $\sigma\ne0$, the point $\sigma\theta$ is outside the support of $q$ because every frequency in $V$ has direction in $J$ and $\overline J$ is disjoint from $\overline\Theta$; also $q(0)=0$ since $V$ avoids the origin. Thus [F8] gives $\widehat{R_{\mathcal S}f}(\theta,\sigma)=q(\sigma\theta)=0$ for all real $\sigma$. By [F9], the offset function is Schwartz, so Fourier inversion [F4] in one dimension gives $R_{\mathcal S}f(\theta,s)=0$ for every $s$. [A1, F1, F4, F8, F9, given]

2.1 Let the parameter and target metric spaces both be $L^2(\mathbb R^2)$ with distance $d(g,h)=\|g-h\|_2$, let the admissible truth class be $U=\{0,f\}$, and let the target map $q:U\to L^2(\mathbb R^2)$ be inclusion. Give the data space $Y=L^2(\Theta\times\mathbb R)$ its norm metric and define $F:U\to Y$ by the restricted line integrals. The normed-space result [F10] and the metric axioms [F12] give the parameter, target, and data metrics used here. Theorem [F11] applies directly to this truth class and target map. Step 1.3 gives $F(0)=F(f)=0$, while step 1.2 gives $d(q(0),q(f))=\|f\|_2>0$. Apply [F11] with shared datum $0$ and radius $0$ to any deterministic estimator $\Phi:Y\to L^2(\mathbb R^2)$; its maximum target loss is at least $\|f\|_2/2$. This proves the asserted lower bound on the stated two-truth class. [F10, F11, F12, step 1.2, step 1.3] ∎
