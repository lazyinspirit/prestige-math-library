---
id: thm-locally-uniform-harmonic-convergence-is-c-infinity-local
kind: theorem
title: Locally uniform limits of harmonic functions are smooth, with all derivatives converging
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, cor-harmonic-cauchy-estimates-in-supremum-norm, lem-relative-compact-closed-sets-have-a-positive-distance-gap, thm-harmonic-functions-are-real-analytic, thm-heine-borel-rn, thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, convergence of derivatives from the interior estimates"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A: Partial Differential Equations (2023)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§4.4, printed pp. 71–72, corollaries of the ball Poisson theorem"
---

## Statement

Assume Countable Choice and $n\ge2$. Let $\Omega\subseteq\mathbb R^n$ be open and let $u_j:\Omega\to\mathbb R$ or $\mathbb C$ be harmonic with $u_j\to u$ locally uniformly on $\Omega$. Then $u$ is smooth and harmonic, and for every compact $K\subset\Omega$ and every multi-index $\alpha$,
$$\sup_{x\in K}\bigl|D^\alpha u_j(x)-D^\alpha u(x)\bigr|\longrightarrow0.$$

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, an open set $\Omega\subseteq\mathbb R^n$, harmonic functions $u_j$ on $\Omega$ converging locally uniformly to $u$, a compact set $K\subset\Omega$ and a multi-index $\alpha$.

[F1] A locally uniform limit of harmonic functions is harmonic ([[thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic]]).

[F2] Every harmonic function is real analytic and hence $C^\infty$, so all derivatives $D^\alpha u$ exist ([[thm-harmonic-functions-are-real-analytic]]).

[F3] Supremum Cauchy estimates: for harmonic $v$ on an open set containing $\overline{B_\rho(x)}$, $|D^\alpha v(x)|\le C'_{n,\alpha}\rho^{-|\alpha|}\sup_{B_\rho(x)}|v|$ ([[cor-harmonic-cauchy-estimates-in-supremum-norm]]).

[F4] A compact set and a disjoint closed set in a normed space keep a positive distance ([[lem-relative-compact-closed-sets-have-a-positive-distance-gap]]), and a closed bounded subset of $\mathbb R^n$ is compact ([[thm-heine-borel-rn]]).

[F5] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F5]. By [F1] the limit $u$ is harmonic, and hence $C^\infty$ with all derivatives existing, by [F2]. [given, F1, F2, F5]

2.1 If $K=\varnothing$, the uniform-convergence assertion on $K$ is vacuous, so assume $K\ne\varnothing$. If $\Omega\ne\mathbb R^n$, its complement is nonempty, closed and disjoint from $K$, so [F4] gives $\delta:=\operatorname{dist}(K,\mathbb R^n\setminus\Omega)>0$; put $\rho:=\delta/2$. If $\Omega=\mathbb R^n$, put $\rho:=1$. In either case let $K_\rho:=\{x\in\mathbb R^n:\operatorname{dist}(x,K)\le\rho\}$. Since $K$ is compact, it is bounded; the distance function is continuous, so $K_\rho$ is closed and bounded and hence compact by [F4]. In the first case $K_\rho\subseteq\Omega$, since every point of the complement has distance at least $\delta$ from $K$; in the second case this inclusion is automatic. By local uniform convergence, $\varepsilon_j:=\sup_{K_\rho}|u_j-u|\to0$. [step 1.1, F4, cases]

3.1 The difference $u_j-u$ is harmonic on $\Omega\supseteq\overline{B_\rho(x)}$ for every $x\in K$, so [F2] and [F3] give $|D^\alpha u_j(x)-D^\alpha u(x)|\le C'_{n,\alpha}\rho^{-|\alpha|}\sup_{B_\rho(x)}|u_j-u|\le C'_{n,\alpha}\rho^{-|\alpha|}\varepsilon_j$, a bound independent of $x\in K$. [step 1.1, step 2.1, F2, F3]

4.1 Taking the supremum over $x\in K$ in step 3.1 gives $\sup_K|D^\alpha u_j-D^\alpha u|\le C'_{n,\alpha}\rho^{-|\alpha|}\varepsilon_j\to0$ as $j\to\infty$, for the arbitrary compact $K$ and multi-index $\alpha$; this proves the derivative convergence. [step 3.1, algebra]

5.1 Complex-valued $u_j$ are handled by applying the argument to real and imaginary parts, whose differences are harmonic and whose absolute values control $|D^\alpha u_j-D^\alpha u|\le|D^\alpha\mathrm{Re}(u_j-u)|+|D^\alpha\mathrm{Im}(u_j-u)|$; the constant is doubled. Together with step 1.1 this proves that $u$ is smooth harmonic and that every derivative converges uniformly on compacta. [step 1.1, step 4.1, cases] ∎
