---
id: ex-one-dimensional-wave-from-a-compactly-supported-velocity
kind: example
title: "A compactly supported velocity datum produces an expanding interval"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
proof_strategy: direct
deps: [thm-dalembert-formula]
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
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #10: Introduction to the Wave Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ccd4ae63858e855c18c96ce96a797b9b_MIT18_152F11_lec_10.pdf"
      locator: "§4, printed pp. 4–5: d'Alembert's formula and the finite-speed reading of Remark 4.0.4"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed p. 211: travelling-wave superposition for compactly supported data"
---


## Example

Let $c>0$, $a>0$, $u_0=0$ and $u_1=\mathbf 1_{[-a,a]}$. Although this indicator is not in the classical data class of [[thm-dalembert-formula]], its displayed integral expression extends directly to this bounded datum and gives
$$u(x,t)=\frac{1}{2c}\,\bigl|[x-ct,x+ct]\cap[-a,a]\bigr|,\qquad t\ge0,$$
i.e. the length over $2c$ of the overlap of the moving interval with the data interval. For $t>0$ the nonzero set is exactly $\{x:|x|<a+ct\}$ and its topological support is the closed interval $[-a-ct,a+ct]$; at $t=0$ the profile is identically zero and its support is empty. Once $ct\ge a$, the profile equals $a/c$ throughout $\{|x|\le ct-a\}$; the two wavefronts travel outward at speed $c$ and the disturbance never reaches $|x|>a+ct$.

## Facts & Assumptions

**Given:** a speed $c>0$, a half-width $a>0$, the data $u_0=0$, $u_1=\mathbf 1_{[-a,a]}$, and the displayed function $u$.

[F1] For admissible data, the d'Alembert expression is the unique classical solution ([[thm-dalembert-formula]]); its velocity integral is well defined for the bounded compactly supported indicator used here as well.

## Verification

1.1 Substituting $u_0=0$ into the velocity integral gives $u(x,t)=\frac{1}{2c}\int_{x-ct}^{x+ct}\mathbf 1_{[-a,a]}(y)\,dy=\frac{1}{2c}\bigl|[x-ct,x+ct]\cap[-a,a]\bigr|$, since the integral of the indicator is the overlap length. For smooth admissible approximations, the same d'Alembert expression is a classical solution by [F1]. [F1, algebra]

1.2 Nonzero set and plateau. For $t>0$, the overlap has positive length exactly when $x-ct<a$ and $x+ct>-a$, that is $|x|<a+ct$; its closure, the topological support, is $[-a-ct,a+ct]$. At $t=0$ the moving interval is a singleton, so the overlap has length zero for every $x$ and the support is empty. The overlap is the full data interval, of length $2a$, when $|x|\le ct-a$ (which requires $ct\ge a$), giving value $a/c$ there. [algebra]

2.1 The formula therefore has expanding nonzero set $(-a-ct,a+ct)$ for $t>0$, closed support $[-a-ct,a+ct]$, zero support at $t=0$, and the stated full-data plateau when $ct\ge a$. [algebra] ∎
