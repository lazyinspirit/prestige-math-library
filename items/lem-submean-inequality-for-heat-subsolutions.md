---
id: lem-submean-inequality-for-heat-subsolutions
kind: lemma
title: Submean inequality for heat subsolutions on heat balls
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-countable-choice
  - def-heat-ball-and-its-slices
  - lem-heat-ball-representation-formula
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: '§6.3, printed pp. 156–158: the submean property used in the proof of Theorem 6.15, obtained from Lemma 6.12 with $f\le0$'
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2, printed pp. 334–335, Theorem 10.6 (an alternative maximum-principle argument; the heat-ball submean inequality here is derived from the preceding representation lemma)."
---

## Statement

Assume Countable Choice. Let $u$ be of class $C^{2,1}$ on a neighbourhood of the
closed heat ball $E_r(t,x)$ of [[def-heat-ball-and-its-slices]] and suppose
$u_t-\Delta u\le0$ there. Then
$$u(x,t)\le\frac{1}{2r^n}\int_{t-r^2/4\pi}^{t}\frac{\rho_n(t-s)}{t-s}\int_{|y-x|=\rho_n(t-s)}u(y,s)\,dS(y)\,ds .$$
In particular, if $u\le M$ on $E_r(t,x)$ then $u(x,t)\le M$.

## Facts & Assumptions

**Given:** Countable Choice, a $C^{2,1}$ function $u$ on a neighbourhood of the closed heat ball $E_r(t,x)$ with $u_t-\Delta u\le0$ there.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] On the heat ball below its top point, the defining inequality gives $\Gamma(x-y,t-s)-r^{-n}\ge0$; the single top point is irrelevant to the volume integral. The slice radius is $\rho_n(\tau)=\sqrt{2n\tau\log\frac{r^2}{4\pi\tau}}>0$ for $0<\tau<r^2/(4\pi)$ ([[def-heat-ball-and-its-slices]]).

[F2] Representation formula: for $u$ of class $C^{2,1}$ near $E_r(t,x)$ and
$f=u_t-\Delta u$,
$$u(x,t)=\iint_E\bigl(\Gamma(x-y,t-s)-r^{-n}\bigr)f(y,s)\,dy\,ds+\frac{1}{2r^n}\int_{t-r^2/4\pi}^{t}\frac{\rho_n(t-s)}{t-s}\int_{|y-x|=\rho_n(t-s)}u(y,s)\,dS(y)\,ds,$$
all integrals absolutely convergent ([[lem-heat-ball-representation-formula]]).

## Proof

**Given:** Countable Choice, $u$ of class $C^{2,1}$ near the closed heat ball $E_r(t,x)$ with $u_t-\Delta u\le0$ there, and a constant $M$ with $u\le M$ on $E_r(t,x)$.

1.1 Put $f:=u_t-\Delta u$; by hypothesis $f\le0$ on $E_r(t,x)$, while [F1] gives $\Gamma(x-y,t-s)-r^{-n}\ge0$ there, so its integrand is nonpositive almost everywhere and the double integral in the representation formula of [F2] is $\le0$. [A1, F1, F2, given]

2.1 Applying [F2] and discarding the nonpositive double integral by step 1.1 gives $u(x,t)\le\frac{1}{2r^n}\int_{t-r^2/4\pi}^{t}\frac{\rho_n(t-s)}{t-s}\int_{|y-x|=\rho_n(t-s)}u(y,s)\,dS(y)\,ds$, which is the submean inequality. [step 1.1, F2, given]

3.1 If in addition $u\le M$ on $E_r(t,x)$, then the averaging kernel $\frac{\rho_n(t-s)}{2r^n(t-s)}$ is nonnegative by [F1] and the sphere integrals of the constant $M$ satisfy $\frac{1}{2r^n}\int_{t-r^2/4\pi}^{t}\frac{\rho_n(t-s)}{t-s}\int_{|y-x|=\rho_n(t-s)}M\,dS(y)\,ds=M$, because the representation formula [F2] applied to the constant function $u\equiv M$ (whose forcing vanishes) reduces to that identity; hence step 2.1 gives $u(x,t)\le M$. [step 2.1, F1, F2, given] ∎ 