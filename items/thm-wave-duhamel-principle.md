---
id: thm-wave-duhamel-principle
kind: theorem
title: "Duhamel's principle for the wave equation"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
proof_strategy: direct
deps: [lem-wave-formulas-attain-the-cauchy-data, thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, thm-poisson-formula-for-the-two-dimensional-wave-equation, thm-odd-dimensional-wave-formula-by-spherical-means, thm-even-dimensional-wave-formula-by-descent, lem-derivative-of-an-integral-with-moving-endpoints, thm-algebra-of-derivatives, def-countable-choice, lem-spherical-means-of-smooth-data-are-smooth, lem-radial-derivative-expansion-of-the-epd-transform]
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
      locator: "§7.2, printed p. 175, Corollary 7.9 (Duhamel's principle)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.5.2, printed pp. 61–62, Proposition 2.5.1 (proof read in full); §9.1.2, printed pp. 283–284, (9.1.11)–(9.1.12)"
---


## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$, $n\ge2$, $T>0$ and let $f:\mathbb R^n\times[0,T]\to\mathbb R$ be continuous, compactly supported in $x$ for each fixed $s$, with all spatial derivatives $D_x^\alpha f$ through order $q:=\lfloor n/2\rfloor+1$ existing and jointly continuous on $\mathbb R^n\times[0,T]$. Thus every slice is in the velocity-data class, and the additional derivatives needed to differentiate the launched solution twice are jointly continuous. No time derivative of $f$ is required. For an admissible velocity datum $g$ let $W[g](x,\tau)$ be the homogeneous solution constructed from the formulas above with zero displacement and velocity datum $g$, so that, by [[lem-wave-formulas-attain-the-cauchy-data]], $W[g](x,0)=0$ and $\partial_\tau W[g](x,0)=g(x)$. Then
$$u(x,t):=\int_0^tW[f(\cdot,s)](x,t-s)\,ds\qquad(0\le t\le T)$$
is a $C^2$ function with $u(\cdot,0)=u_t(\cdot,0)=0$ and $u_{tt}=c^2\Delta u+f$ on $\mathbb R^n\times(0,T)$.

## Facts & Assumptions

**Given:** Countable Choice, $c>0$, $n\ge2$, a source $f$ of the stated class, and for each admissible $g$ the launched solution $W[g]$ with $W[g](x,0)=0$, $\partial_\tau W[g](x,0)=g(x)$.

[F1] The formulas of the page define $C^2$ solutions of the homogeneous equation on $\mathbb R^n\times(0,\infty)$ for admissible data, and the data are attained in the limit sense ([[lem-wave-formulas-attain-the-cauchy-data]]).

[F2] Let $\alpha,\beta\in C^1(I)$ with $\alpha<\beta$ and let $F$ be continuous on $I\times J$ with continuous $\partial_tF$, where $J$ contains the closure of the union of the intervals $[\alpha(t),\beta(t)]$. Then $G(t)=\int_{\alpha(t)}^{\beta(t)}F(t,y)\,dy$ is $C^1$ with $G'(t)=F(t,\beta(t))\beta'(t)-F(t,\alpha(t))\alpha'(t)+\int_{\alpha(t)}^{\beta(t)}\partial_tF(t,y)\,dy$ ([[lem-derivative-of-an-integral-with-moving-endpoints]]).

[F3] In odd dimension $n=2k+1$, a zero-displacement launch is $W[g](x,\tau)=a^{-1}\sum_{j=0}^{k-1}\alpha_{k,j}\tau^{j+1}\partial_\tau^jM_g(x,c\tau)$, $a=(2k-1)!!$, by [[lem-radial-derivative-expansion-of-the-epd-transform]]. The signed-radius mean is $C^{k+1}$ ([[lem-spherical-means-of-smooth-data-are-smooth]]). Differentiating this finite sum through total order two involves at most $k+1$ spatial derivatives of $g$ and nonnegative powers of $\tau$. For $g=f(\cdot,s)$, the uniform integral estimate in the smoothness lemma applies also with the continuous parameter $s$: the assumed joint continuity on compact spatial-time sets makes $W$ and its first two $(x,\tau)$ derivatives jointly continuous, including at $\tau=0$. In even dimension use the cylindrical launch in dimension $n+1$ from [[thm-even-dimensional-wave-formula-by-descent]], with the same derivative order $q=k+1$.

## Proof

1.1 First derivative. The launched solutions vanish at $\tau=0$ and have velocity $g$ there by [F1]: $W[g](x,0)=0$ and $\partial_\tau W[g](x,0)=g(x)$. Applying [F2] to the moving-endpoint integral $u(x,t)=\int_0^tW[f(\cdot,s)](x,t-s)\,ds$ in the form $G(t)=\int_0^tF(t,s)\,ds$ with $F(t,s)=W[f(\cdot,s)](x,t-s)$ — defined also for negative $t-s$ by the signed-radius finite sum in [F3]; extend the source slices constantly for $s<0$ and $s>T$. Then $F$ and its first two $t$-derivatives are continuous on a rectangular neighbourhood of the integration region by [F3] — gives $u_t(x,t)=\int_0^t\partial_tW[f(\cdot,s)](x,t-s)\,ds+W[f(\cdot,t)](x,0)=\int_0^t\partial_tW[f(\cdot,s)](x,t-s)\,ds$, since $W[\cdot](x,0)=0$; in particular $u(\cdot,0)=0$ and $u_t(\cdot,0)=0$. [F1, F2, F3]

1.2 Second derivative. Differentiating once more with [F2], $u_{tt}(x,t)=\partial_tW[f(\cdot,t)](x,0)+\int_0^t\partial_t^2W[f(\cdot,s)](x,t-s)\,ds=f(x,t)+\int_0^tc^2\Delta_xW[f(\cdot,s)](x,t-s)\,ds=f(x,t)+c^2\Delta_xu(x,t)$, where the last equality uses $\partial_\tau W[f(\cdot,t)](x,0)=f(x,t)$ and the homogeneous equation for every launched solution from [F1]. To justify moving $\Delta_x$ through the integral, fix any compact set of $x$-values and a compact time interval $[0,T_0]\subseteq[0,T]$. By [F3], the integrand and its first two $x$-derivatives are jointly continuous on the resulting compact $(x,s,t-s)$ parameter set; applying [F2] twice with the fixed $s$-interval endpoints therefore permits differentiating under the $s$-integral locally in $x$. The mixed derivative $u_{tx}$ is obtained similarly from the integral formula for $u_t$. These derivative integrals and their boundary terms are continuous; their bounds on local compact sets give continuous one-sided derivatives also at $t=0,T$. No common compact support of all source slices is needed. [F1, F2, F3, algebra]

2.1 Hence $u$ is $C^2$ with zero Cauchy data and $u_{tt}-c^2\Delta u=f$ on $\mathbb R^n\times(0,T)$; the constructed $u$ is a classical solution of the forced problem. [given] ∎ 
