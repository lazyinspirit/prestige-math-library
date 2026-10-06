---
id: cor-classical-wave-solutions-are-locally-determined-by-cauchy-data
kind: corollary
title: "The constructed classical solutions are locally determined by the Cauchy data"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
proof_strategy: direct
deps: [thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, thm-poisson-formula-for-the-two-dimensional-wave-equation, thm-odd-dimensional-wave-formula-by-spherical-means, thm-even-dimensional-wave-formula-by-descent, thm-forced-three-dimensional-kirchhoff-duhamel-formula, lem-wave-formulas-attain-the-cauchy-data, def-countable-choice, lem-spherical-means-of-smooth-data-are-smooth, def-spherical-mean-of-space-dependent-data, thm-linear-change-of-variables-for-lebesgue-measure, thm-dominated-convergence, cor-mean-value-theorem, cor-euclidean-closed-balls-and-spheres-are-compact, thm-extreme-value-metric, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
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
      locator: "§7.1, printed pp. 172–173: the three- and two-dimensional formulas and their domains of dependence"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.2, printed p. 284, the time-delayed potential over the ball $B(x,ct)$"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed p. 212: domains of influence and dependence for the wave equation"
---


## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$ and let $u$ be a free solution constructed by the formulas of [[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]], [[thm-poisson-formula-for-the-two-dimensional-wave-equation]], [[thm-odd-dimensional-wave-formula-by-spherical-means]] or [[thm-even-dimensional-wave-formula-by-descent]] from compactly supported admissible data. Then for every $(x,t)$ with $t>0$ the value $u(x,t)$ is determined by the data restricted to $\overline B_{ct}(x)$: two admissible data pairs agreeing there produce the same value at $(x,t)$. For the forced solution of [[thm-forced-three-dimensional-kirchhoff-duhamel-formula]], the value is determined by the source on the backward cone $\{(y,s):0\le s\le t,\ |y-x|\le c(t-s)\}$; two sources agreeing there produce the same value at $(x,t)$.

## Facts & Assumptions

**Given:** Countable Choice, $c>0$, a point $(x,t)$ with $t>0$, and two admissible configurations agreeing on the stated set.

[F1] The four free formulas express $u(x,t)$ through the spherical means $M_{u_j}(x,ct)$ and their $r$-derivatives (odd case) or through $W_{u_j}(x,ct)$ and its $t$-derivatives with the substitution $y=x+ctz$ (even case), and the forced solution is the retarded potential ([[thm-odd-dimensional-wave-formula-by-spherical-means]], [[thm-even-dimensional-wave-formula-by-descent]], [[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]], [[thm-poisson-formula-for-the-two-dimensional-wave-equation]], [[thm-forced-three-dimensional-kirchhoff-duhamel-formula]]).

[F2] For $m\ge1$ and $h\in C^m(\mathbb R^n)$, the spherical mean $M_h$ and its derivatives are obtained by differentiating $h$ under the sphere integral ([[lem-spherical-means-of-smooth-data-are-smooth]]).

[F3] For even $n$, writing $w(z)=(1-|z|^2)^{-1/2}$ on $B_1\subset\mathbb R^n$ gives $W_h(x,ct)=(n!!V_n)^{-1}(ct)^{n-1}\int_{B_1}h(x+ctz)w(z)\,dz$, and $w$ is integrable ([[def-spherical-mean-of-space-dependent-data]], [[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F4] Difference quotients converging pointwise almost everywhere under one integrable majorant have convergent integrals ([[thm-dominated-convergence]]).

[F5] A scalar function continuous on a closed interval and differentiable on its interior has a difference quotient equal to one of its derivatives on the interior ([[cor-mean-value-theorem]]).

[F6] Continuous derivatives are bounded on compact Euclidean balls ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-extreme-value-metric]]).

## Proof

1.1 Free case. Let $(u_0,u_1)$ and $(\tilde u_0,\tilde u_1)$ be admissible data agreeing on $\overline B_{ct}(x)$ and put $\delta_j:=u_j-\tilde u_j$. Each $\delta_j$ vanishes on the open ball, so all its derivatives through the orders in the formulas vanish on the closed ball by continuity. In the odd-dimensional formula, every sphere-average ingredient is an average of a derivative of $\delta_j$ evaluated on $\partial B_{ct}(x)$, hence is zero by [F1, F2]. For even $n$, put $G_{\delta_j}(t'):=\int_{B_1}\delta_j(x+ct'z)w(z)\,dz$. Fix a compact interval $J$ about $t$ and a closed ball containing all $x+ct'z$ for $t'\in J$, $|z|\le1$. For each derivative order $0\le m<k$, the difference quotients in $t'$ of $c^mD^m\delta_j(x+ct'z)[z,\ldots,z]w(z)$ are bounded by $c^{m+1}C_{m+1}w(z)$ on $J$, where $C_{m+1}$ bounds the next derivative on that ball by [F5, F6]. This is an integrable majorant independent of $t'$; [F4] therefore justifies differentiating under the integral successively through order $k$. At $t'=t$, all integrand derivatives vanish because $x+ctz\in\overline B_{ct}(x)$, so $G_{\delta_j}^{(m)}(t)=0$ for $m\le k$. By [F3] the even-formula terms are finite combinations of these derivatives and hence vanish. Thus replacing the data by $(\tilde u_0,\tilde u_1)$ changes no term of the formula and leaves $u(x,t)$ unchanged. [F1, F2, F3, F4, F5, F6, algebra]

2.1 Forced case and conclusion. The retarded potential of the forced three-dimensional formula is an integral of the source over the backward cone $|y-x|\le c(t-s)$, $0\le s\le t$; sources agreeing there give equal integrals, hence equal values at $(x,t)$. This proves the local determination of the constructed solutions by the stated data or source; no uniqueness claim for arbitrary $C^2$ solutions is made, that being the energy statement of the wave-energy page. [F1, given] ∎ 
