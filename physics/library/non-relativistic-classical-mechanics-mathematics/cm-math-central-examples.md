---
page: cm-math-central-examples
title: Cm Math Central — Examples
status: published
items: []
examples:
  - ex-cm-harmonic-oscillator-action-derivative
  - ex-cm-kepler-ellipse-data-check
  - ex-cm-rutherford-cross-section-check
  - cex-cm-radial-kepler-collision
requires:
  - cm-math-central
  - the-logarithm-and-general-powers
---

The ellipse/period and cross-section checks inherit countable choice from their mathematical suppliers. The companion page to [[cm-math-central]] records explicit worked checks of its
reduction, Kepler and scattering results. Everything here is mathematics: the
examples and the counterexample carry `domain: mathematics`, depend only on the
mathematical items of the parent page and on mathematical suppliers, and make
no physical or empirical claim.

[[ex-cm-harmonic-oscillator-action-derivative]] instantiates
[[thm-cm-action-variable-derivative]] at $U(q)=\frac12kq^2$: the substitution
$q=\sqrt{2E/k}\,\sin\vartheta$ gives
$J_{\mathrm a}(E)=\frac{\sqrt{2mE}}{\pi}\sqrt{2E/k}\int_{-\pi/2}^{\pi/2}
\cos^2\vartheta\,\mathrm d\vartheta=E/\omega$ with
$\omega=\sqrt{k/m}$, the time quadrature gives $T(E)=2\pi/\omega$, and
differentiation confirms $J_{\mathrm a}'(E)=1/\omega=T(E)/(2\pi)$ exactly.
[[ex-cm-kepler-ellipse-data-check]] evaluates
[[thm-cm-kepler-conic-and-eccentricity]] and
[[thm-cm-kepler-orbit-period]] at $\mu=\kappa=J=1$, $e=\frac12$, obtaining
$p=1$, $1-e^2=\frac34$, $a=\frac43$, $b=\frac{2\sqrt3}{3}$,
$E=-\frac38$, and the same value $T^2=\frac{256\pi^2}{27}$ from both
$T=2\pi\mu ab/J$ and $T^2=4\pi^2\mu a^3/\kappa$.
[[ex-cm-rutherford-cross-section-check]] evaluates
[[thm-cm-rutherford-cross-section]] at $\kappa=E=b=1$:
$\theta_{\rm def}(1)=2\arctan\frac12$,
$b(\theta_{\rm def}(1))=\frac12\cot(\arctan\frac12)=1$, and
$\mathrm d\sigma/\mathrm d\Omega=(1/4)^2\csc^4(\arctan(1/2))=\frac{25}{16}$,
using $\csc^2(\arctan\frac12)=1+\cot^2(\arctan\frac12)=5$.

[[cex-cm-radial-kepler-collision]] is the counterexample that marks the
excluded radial degenerate case of the Kepler layer: the curve
$r(t)=A(1-t)^{2/3}e_1$ on $(-\infty,1)$ solves the attractive inverse-square
equation $\mu r''=-\kappa r/|r|^3$ with angular momentum $j\equiv0$, reaches
the force centre at $t=1$ in finite time and has no extension to an interval
containing $1$; it refutes the claim that every attractive inverse-square
trajectory is global, collision-free and a conic, and it shows why the
non-radial hypothesis $J>0$ of the positive results is not removable.
