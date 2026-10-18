---
id: cex-multipatch-trace-mismatch-not-h1
kind: counterexample
title: Matching patch geometry does not repair a field trace jump
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-isogeometric-galerkin-patch-space-and-refinement
  - lem-matching-nurbs-patch-traces-give-h1-conformity
  - def-sobolev-space-wkp-and-its-norm
  - def-weak-derivative-of-a-locally-integrable-function
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://d-nb.info/1278950273/34"
---

## Statement

Let $D=(0,2)\times(0,1)$ and take the two adjacent identity NURBS rectangles $D_L=(0,1)\times(0,1)$ and $D_R=(1,2)\times(0,1)$. They partition $D$ up to the null interface $\Gamma=\{1\}\times(0,1)$, so $D=D_L\cup\Gamma\cup D_R$. Define $v=0$ on $D_L\cup\Gamma$ and $v=1$ on $D_R$; any other value on $\Gamma$ gives the same almost-everywhere class. Then $v\in L^2(D)$ but $v\notin H^1(D)$, although the patch geometries match exactly. Thus matching physical geometry does not replace the matching-field-trace condition in [[def-isogeometric-galerkin-patch-space-and-refinement]].


## Facts & Assumptions

**Given:** The adjacent rectangles and piecewise constant function in the Statement.

[F1] [[def-isogeometric-galerkin-patch-space-and-refinement]] requires equal field traces on every shared full face for a conforming multipatch field.

[F2] [[def-sobolev-space-wkp-and-its-norm]] and [[def-weak-derivative-of-a-locally-integrable-function]]: an $H^1$ function has an $L^2$ weak derivative satisfying the distributional test identity.

[F3] Under Countable Choice, [[lem-matching-nurbs-patch-traces-give-h1-conformity]] gives sufficiency when traces match; the counterexample below uses the direct weak-derivative test [F2]. The example below verifies that a trace mismatch can fail the necessary weak-derivative condition.

## Proof

1.1 The two constants are square integrable on their bounded rectangles, hence $v\in L^2(D)$. Choose $\eta\in C_c^\infty((0,1))$ with $\int_0^1\eta(y)\,dy\ne0$, and choose $\psi\in C_c^\infty((-1,1))$ with $\psi(0)=1$. For $0<\varepsilon<1$, set $\phi_\varepsilon(x,y)=\psi((x-1)/\varepsilon)\eta(y)\in C_c^\infty(D)$. [given, F2, construct]

2.1 Since $v$ vanishes for $x<1$ and equals one for $x>1$, a change of variable $t=(x-1)/\varepsilon$ gives $\int_Dv\,\partial_x\phi_\varepsilon\,dxdy=\left(\int_0^1\eta\right)\int_1^2\varepsilon^{-1}\psi'((x-1)/\varepsilon)dx=-\psi(0)\int_0^1\eta,$ which is a fixed nonzero number. If an $L^2$ weak derivative $g=\partial_xv$ existed, [F2] and Cauchy--Schwarz would make the absolute value at most $\|g\|_2\|\phi_\varepsilon\|_2$. But $\|\phi_\varepsilon\|_2=\sqrt\varepsilon\|\psi\|_2\|\eta\|_2\to0$, contradiction. Therefore $v\notin H^1(D)$. Its two constant traces across $x=1$ are 0 and 1, violating [F1] even though the geometry is matching; the sufficient condition of [F3] does not apply. [F1, F2, F3, step 1.1, algebra] ∎
