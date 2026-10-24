---
id: ex-kirchhoff-formula-for-constant-initial-velocity
kind: example
title: "Constant initial velocity in three dimensions"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
proof_strategy: direct
deps: [thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, lem-wave-formulas-attain-the-cauchy-data, def-spherical-mean-of-space-dependent-data, def-countable-choice]
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
      locator: "§7.1, printed pp. 168–169, (7.10): the sphere average normalisation tested on constants"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.1, printed p. 281: the unnormalised form (9.1.4) and the sphere area $4\\pi c^2t^2$"
---


## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$, let $u_1\equiv v_0\in\mathbb R$ and $u_0\equiv g_0\in\mathbb R$ be constant. Then the Kirchhoff expression of [[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]] is
$$u(x,t)=\frac{\partial}{\partial t}\bigl[t\,g_0\bigr]+t\,v_0=g_0+t\,v_0 ,$$
since a constant has spherical mean itself. This satisfies $u_{tt}=0=c^2\Delta u$, $u(\cdot,0)=g_0$ and $u_t(\cdot,0)=v_0$, and the spherical means $M_{g_0}\equiv g_0$, $M_{v_0}\equiv v_0$ use the normalisation $\frac1{4\pi}\int_{S^2}d\sigma=1$ of [[def-spherical-mean-of-space-dependent-data]]. Replacing the average by an unnormalised integral of the data over the sphere would multiply by $4\pi c^2t^2$, so the check pins the factor in the constant.

## Facts & Assumptions

**Given:** Countable Choice, $c>0$, constants $g_0,v_0\in\mathbb R$, and the means $M_{g_0}$, $M_{v_0}$.

[F1] The spherical mean of a constant $g_0$ is $M_{g_0}(x,r)=g_0$ for every $x,r$, because the defining integral is normalised by $\omega_2=\sigma(S^2)$, and likewise for $v_0$ ([[def-spherical-mean-of-space-dependent-data]]).

[F2] The Kirchhoff expression defines a $C^2$ solution of $u_{tt}=c^2\Delta u$ on $\mathbb R^3\times(0,\infty)$ ([[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]]).

[F3] The Kirchhoff expression attains its data in the limit sense ([[lem-wave-formulas-attain-the-cauchy-data]]); uniqueness in the class of $C^2$ solutions is left to the energy statement of the wave-energy page.

## Verification

1.1 Means and expression. By [F1] the means are constant, $M_{g_0}\equiv g_0$ and $M_{v_0}\equiv v_0$, so the Kirchhoff expression becomes $\partial_t[t\,g_0]+t\,v_0=g_0+t\,v_0$; this is $C^\infty$, satisfies $\partial_t^2u=0=c^2\Delta u$ and has the prescribed values $u(\cdot,0)=g_0$, $\partial_tu(\cdot,0)=v_0$. [F1, F2, algebra]

2.1 Normalisation check. A constant has mean itself on the sphere, so any unnormalised sphere integral $\int_{\partial B_{ct}(x)}u_0\,dS$ would equal $4\pi c^2t^2$ times the mean for $u_0$ constant on the sphere of radius $ct$; the constant-data check therefore detects exactly that factor, confirming the normalisation $1/(4\pi)$ in the Kirchhoff expression. [F1, F3, algebra] ∎ 