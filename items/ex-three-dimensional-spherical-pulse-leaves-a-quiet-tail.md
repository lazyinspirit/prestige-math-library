---
id: ex-three-dimensional-spherical-pulse-leaves-a-quiet-tail
kind: example
title: "A three-dimensional spherical pulse leaves a quiet interior"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-countable-choice, thm-strong-huygens-principle-in-odd-spatial-dimensions, thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, def-support-and-compactly-supported-riemann-integral-in-rn, def-strong-huygens-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed pp. 167-172, Theorem 7.2 (Kirchhoff) and Problem 7.3 (the observation times $R-r$ and $R+r$)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #12: Kirchhoff's Formula and Minkowskian Geometry (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/940561a138578640826f762b5a57bcad_MIT18_152F11_lec_12.pdf"
      locator: "Theorem 1.1, (1.0.2)–(1.0.6) and Remark 1.0.1, printed/PDF pp. 1–2: Kirchhoff's formula including the normal derivative and sharp Huygens support"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume the Axiom of Countable Choice. Let $c>0$, $x_0\in\mathbb R^3$, $r>0$, and
let $(u_0,u_1)\in C_c^3\times C_c^2$ be supported in $\overline B_r(x_0)$
([[def-support-and-compactly-supported-riemann-integral-in-rn]]). Then the
Kirchhoff solution $u$ of [[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]]
satisfies $u(x,t)=0$ whenever $|x-x_0|>ct+r$ or (for $ct>r$)
$|x-x_0|<ct-r$; at time $t$ the pulse is carried by the spherical shell

$$ct-r\le|x-x_0|\le ct+r,$$

and the interior $B_{ct-r}(x_0)$ behind the front is quiet. This is the
concrete illustration of the strong Huygens principle in three dimensions
([[thm-strong-huygens-principle-in-odd-spatial-dimensions]](b)), and it is the
three-dimensional side of the contrast with
[[ex-two-dimensional-pulse-has-a-tail-inside-the-cone]].

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; $c>0$, $x_0\in\mathbb R^3$, $r>0$, compactly supported data $(u_0,u_1)$ with support in $\overline B_r(x_0)$; the Kirchhoff solution $u$.

[F1] Kirchhoff's formula defines the solution and evaluates it from $u_0$, its radial derivative, and $u_1$ on the sphere $\partial B_{ct}(x)$, for $t>0$. ([[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]])

[F2] Shell form of strong Huygens in odd dimensions: if the data are supported in a compact $K$ and $\partial B_{ct}(x)\cap K=\varnothing$, then $u(x,t)=0$. ([[thm-strong-huygens-principle-in-odd-spatial-dimensions]], [[def-strong-huygens-principle]])

## Verification

1.1 The support ball lies inside the sphere: if $|x-x_0|<ct-r$ (with $ct>r$) and $|y-x_0|\le r$, then $|y-x|\le|y-x_0|+|x_0-x|<r+(ct-r)=ct$, so $\overline B_r(x_0)$ is disjoint from $\partial B_{ct}(x)$ with positive distance; if $|x-x_0|>ct+r$ and $|y-x_0|\le r$, then $|y-x|\ge|x-x_0|-|y-x_0|>ct+r-r=ct$, so again the support ball is disjoint from the sphere with positive distance. [given, algebra]

2.1 Vanishing: in either case of step 1.1 the data are supported in a compact set disjoint from $\partial B_{ct}(x)$, so [F2] gives $u(x,t)=0$; hence $u(\cdot,t)$ vanishes both outside the outer sphere $|x-x_0|=ct+r$ and inside the inner sphere $|x-x_0|=ct-r$, so its support is contained in the closed shell $ct-r\le|x-x_0|\le ct+r$; the quiet interior behind the front is the case $|x-x_0|<ct-r$, and the statement is exactly the three-dimensional instance of the shell form [F2], evaluated from the data on $\partial B_{ct}(x)$ as [F1] prescribes. [given, step 1.1, F1, F2, algebra] ∎ 