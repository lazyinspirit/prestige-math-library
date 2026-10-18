---
id: lem-pe03-euler-llf-split-state-positive
kind: lemma
title: Ideal-gas Euler states remain positive under Lax–Friedrichs flux splitting
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-ideal-gas-euler-state-and-pressure]
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Part II, Euler equation of state and HLLE wave-speed branch, complete chapter inspected"
    - title: "X. Zhang and C.-W. Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "§2, sufficient Euler positivity condition and Lax–Friedrichs/HLL flux discussion, PDF pp. 5–9; complete article read"
---

## Statement

Fix $\gamma>1$. For $U=(\rho,m,E)\in\mathcal G_\gamma$, let
$e=E-m^2/(2\rho)$, $p=(\gamma-1)e$, $u=m/\rho$, and
$c=\sqrt{\gamma p/\rho}$. If $a\ge |u|+c$, then both split states
$$U_\delta=U+\delta F(U),\qquad \delta\in\{-1/a,1/a\},$$
belong to $\mathcal G_\gamma$, where $F(U)=(m,m^2/\rho+p,u(E+p))$.
More precisely, with $x=1+\delta u$ their density and internal-energy density are
$$\rho_\delta=\rho x,\qquad e_\delta=e x-\frac{\delta^2p^2}{2\rho x}>0.$$

## Facts & Assumptions

**Given:** An ideal-gas state $U\in\mathcal G_\gamma$, $\gamma>1$, and a speed $a\ge|u|+c$. Prove positivity of both split states.

[F1] [[def-ideal-gas-euler-state-and-pressure]]: $\rho>0$, $e=E-m^2/(2\rho)>0$, $p=(\gamma-1)e$, $u=m/\rho$, $c^2=\gamma p/\rho$, and $F=(m,m^2/\rho+p,u(E+p))$.

## Proof

1.1 Fix $\delta\in\{-1/a,1/a\}$. From [F1], direct substitution in $U+\delta F(U)$ gives $\rho_\delta=\rho(1+\delta u)=\rho x$, $m_\delta=\rho u(1+\delta u)+\delta p$, and $E_\delta=E+\delta u(E+p)$. Expanding $E_\delta-m_\delta^2/(2\rho_\delta)$ and using $E=e+\rho u^2/2$ yields $e_\delta=e x-\delta^2p^2/(2\rho x)$. [given, F1, algebra]

2.1 Since $a\ge|u|+c$ and $c>0$, $x\ge1-|u|/a\ge c/a>0$, so $\rho_\delta>0$. Also $|\delta|/x\le1/c$, hence $\frac{\delta^2p^2}{2\rho e x^2}\le\frac{p^2}{2\rho e c^2}=\frac{\gamma-1}{2\gamma}<1$. Therefore $e_\delta=e x\left(1-\frac{\delta^2p^2}{2\rho e x^2}\right)>0$, so $U_\delta\in\mathcal G_\gamma$. The argument covers both signs of $\delta$ and the equality case $a=|u|+c$. [given, F1, step 1.1, algebra] ∎

