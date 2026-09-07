---
id: cor-removable-singularity-for-bounded-harmonic-functions
kind: corollary
title: "Removable singularity for bounded harmonic functions"
status: draft
origin: pipeline
deps: [lem-smooth-sphere-data-have-a-harmonic-replacement, thm-comparison-principle-for-classical-subharmonic-functions, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§8 Theorem 17, p.14"
---

## Statement

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open and $p\in\Omega$. If $u\in C^2(\Omega\setminus\{p\})$ is harmonic and bounded in some punctured neighborhood of $p$, it has a unique harmonic extension to $\Omega$. More generally the same conclusion holds under $u(x)=o(|x-p|^{2-n})$ for $n\ge3$, or $u(x)=o(\log(1/|x-p|))$ for $n=2$, as $x\to p$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Smooth real sphere data have a smooth harmonic replacement continuous on the closed ball with the prescribed boundary values. ([[lem-smooth-sphere-data-have-a-harmonic-replacement]]).

[F2] Classical comparison applies to bounded nonempty open sets and $C^2$ functions continuous on the closure when Laplacian and boundary inequalities hold. ([[thm-comparison-principle-for-classical-subharmonic-functions]]).

[F3] Harmonic functions have the ball mean-value property. ([[cor-ball-mean-value-property-for-harmonic-functions]]).

[F4] Continuous ball-mean-value functions are smooth harmonic. ([[thm-continuous-mean-value-functions-are-harmonic]]).

## Proof

**Proof technique:** direct.

1.1 Translate $p=0$ and choose $0<R<1$ so that $\overline B_R\subset\Omega$. On the punctured domain, ball mean values and the smoothness theorem make $u$ smooth; its trace on $\partial B_R$ is smooth. Let $h$ be its harmonic replacement on $B_R$, and $w=u-h$. Then $w$ is harmonic off zero and vanishes on the outer sphere. The replacement is bounded on the closed ball. [F1, F3, F4, given]

2.1 For $0<\delta<R$, put $A_\delta=\max_{|x|=\delta}|w(x)|$, a finite nonnegative number. On $\delta<r=|x|<R$ take $\phi_\delta(x)=A_\delta(\delta/r)^{n-2}$ if $n\ge3$, and $\phi_\delta(x)=A_\delta\log(R/r)/\log(R/\delta)$ if $n=2$. For radial $f$, differentiation of $\partial_i f(r)=f\prime(r)x_i/r$ gives $\Delta f=f\prime\prime+(n-1)f\prime/r$. Substitution proves $\Delta\phi_\delta=0$ in both dimensions. Each barrier equals $A_\delta$ on the inner sphere and is nonnegative on the outer sphere. [step 1.1, algebra]

3.1 Comparison on the bounded annulus applied separately to $w$ and $-w$ against $\phi_\delta$ yields $|w(x)|\le\phi_\delta(x)$. In the bounded case $A_\delta$ remains uniformly bounded for small $\delta$. At fixed $x\ne0$, the factor $\delta^{n-2}$ tends to zero for $n\ge3$, and the denominator $\log(R/\delta)$ tends to infinity for $n=2$. Thus $w(x)=0$. [F2, step 2.1, algebra]

4.1 Under the stronger stated little-o hypotheses, $A_\delta=o(\delta^{2-n})$ or $A_\delta=o(\log(1/\delta))$, because $h$ is bounded. The same barrier bound again tends to zero at each fixed nonzero $x$. Hence $u=h$ on the punctured ball in either case. Define $u(0)=h(0)$ and retain the original $u$ outside the ball; equality on their overlap proves harmonicity locally everywhere. Any continuous extension must have this value at zero, proving uniqueness. [step 1.1, step 3.1, algebra] ∎
