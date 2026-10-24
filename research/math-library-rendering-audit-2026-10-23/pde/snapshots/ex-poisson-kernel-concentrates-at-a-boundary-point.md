---
id: ex-poisson-kernel-concentrates-at-a-boundary-point
kind: example
title: Quantitative concentration of the ball Poisson kernel
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-surface-integral-on-a-compact-c-one-hypersurface, lem-ball-poisson-kernel-is-positive-and-normalised, lem-poisson-kernel-boundary-cap-and-complement-estimate, lem-sphere-and-ball-measures-scale, thm-poisson-kernel-for-a-ball-in-rn]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 49–50, cap/complement estimate"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4.1, printed pp. 33–34, Theorem 2.13"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.6, printed pp. 133–134, Theorem 5.25 proof"
---

## Example

Assume Countable Choice and $n\ge3$. For $p\in\partial B_R(a)$, $\delta>0$ and $x\in B_R(a)$ with $|x-p|<\delta/2$, the Poisson kernel mass outside the cap $\{|y-p|<\delta\}$ is at most $C_{n,R}\delta^{-n}(R^2-|x-a|^2)$, with $C_{n,R}=2^nR^{n-2}$, hence tends to zero as $x\to p$ from inside. The cap mass consequently tends to one.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, a centre $a\in\mathbb R^n$, a radius $R>0$, a boundary point $p\in\partial B_R(a)$, a number $\delta>0$ and an interior point $x\in B_R(a)$ with $|x-p|<\delta/2$.

[F1] The kernel is $P_{R,a}(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$, positive and continuous on $B_R(a)\times\partial B_R(a)$, and $\int_{\partial B_R(a)}P_{R,a}(x,y)\,dS_y=1$ ([[thm-poisson-kernel-for-a-ball-in-rn]], [[lem-ball-poisson-kernel-is-positive-and-normalised]]).

[F2] $\partial B_R(a)$ is a compact $C^1$ hypersurface; the surface integral of bounded Borel functions is finite, additive over a Borel partition and monotone ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-sphere-and-ball-measures-scale]]).

[F3] For data $g\in C(\partial B_R(a);\mathbb C)$ and $|x-p|<\delta/2$ one has $|U_g(x)-g(p)|\le\omega_{g,p}(\delta)+2^{n+1}R^{n-2}\delta^{-n}\lVert g\rVert_\infty(R^2-|x-a|^2)$, where $U_g$ is the Poisson integral of $g$ ([[lem-poisson-kernel-boundary-cap-and-complement-estimate]]).

[F4] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 Work under [F4], put $\kappa:=R^2-|x-a|^2$ (positive because $x$ is interior) and $C:=\{y\in\partial B_R(a):|y-p|<\delta\}$, $D:=\partial B_R(a)\setminus C$. By [F2] the two masses $M_C:=\int_CP_{R,a}(x,\cdot)\,dS$ and $M_D:=\int_DP_{R,a}(x,\cdot)\,dS$ are finite and add to $\int_{\partial B_R(a)}P_{R,a}(x,\cdot)\,dS=1$ by [F1]. [given, F1, F2, F4]

2.1 For $y\in D$ one has $|y-p|\ge\delta$, hence $|x-y|\ge|y-p|-|x-p|>\delta/2$ and $1/|x-y|^n\le2^n\delta^{-n}$; therefore $P_{R,a}(x,y)\le\kappa2^n/(R\omega_{n-1}\delta^n)$ by [F1]. [step 1.1, F1, algebra]

3.1 Integrating the bound of step 2.1 over $D$ and using [F2] with $|\partial B_R(a)|=\omega_{n-1}R^{n-1}$ gives $M_D\le\bigl(\kappa2^n/(R\omega_{n-1}\delta^n)\bigr)\omega_{n-1}R^{n-1}=2^nR^{n-2}\delta^{-n}\kappa=C_{n,R}\delta^{-n}\kappa$. [step 2.1, F2, algebra]

4.1 Hence $M_C=1-M_D\ge1-C_{n,R}\delta^{-n}\kappa$ by step 1.1, and $M_C\le1$ by the unit-mass identity of [F1]; as $\kappa=R^2-|x-a|^2\to0$ when $x\to p$ (because $|p-a|=R$), the cap mass tends to one and the mass $M_D$ outside the cap tends to zero. [step 3.1, F1, algebra]

5.1 This computation is the mass-split content of the cap/complement estimate [F3] read on constant data: for $g\equiv1$ one has $\omega_{g,p}=0$, $\lVert g\rVert_\infty=1$ and $U_g(x)=1$ by [F1], so [F3] reduces to the trivial inequality $0\le 2^{n+1}R^{n-2}\delta^{-n}\kappa$; the genuine concentration information for kernel mass alone is exactly the bound of step 3.1 and the limit of step 4.1. Both assertions of the statement are therefore proved. [step 3.1, step 4.1, F1, F3] ∎
