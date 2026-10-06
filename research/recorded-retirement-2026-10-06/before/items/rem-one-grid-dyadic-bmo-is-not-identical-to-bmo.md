---
id: rem-one-grid-dyadic-bmo-is-not-identical-to-bmo
kind: remark
title: "Recorded: one dyadic grid is not enough for BMO"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-bmo-seminorm-and-quotient-by-constants]
justified_by: []
aliases: []
proved_here: false
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-supplied
external_dependency:
  source_url: "https://arxiv.org/pdf/math/0304417"
  exact_statement: "For the unit circle T, with BMO(T) the classical BMO space and BMO_D(T) the dyadic BMO space of one fixed grid, for 0<delta<1 with d(delta)=inf_{m>=0,k in Z} 2^m|delta-k2^{-m}|>0, ||phi||_{BMO(T)} is comparable to ||phi||_{BMO_D(T)} + ||phi(. - 2 delta pi)||_{BMO_D(T)} for all phi in BMO(T) (Mei, C. R. Acad. Sci. Paris 336 (2003), Theorem 2.2, printed p. 2). Classical BMO(T) uses all arcs, not Euclidean cubes. Separately, Kinnunen Examples 3.5(3)-(4), printed p. 39, records strict one-grid dyadic BMO inclusion on the line, witnessed by the signed logarithm."
  local_proof_attempt: "None. The two-grid averaging/stopping argument of the cited paper is not reproduced; this page proves the classical cube-based duality directly and only records the distinction to prevent substituting a single dyadic grid's seminorm for the cube seminorm."
  necessity: "The page and several planned suppliers use dyadic stopping arguments in proofs; the remark prevents the invalid promotion of a single-grid dyadic seminorm to the adopted cube seminorm."
sources:
  references:
    - title: "Tao Mei, BMO is the intersection of two translates of dyadic BMO, C. R. Acad. Sci. Paris 336 (2003), 1003-1006 (arXiv:math/0304417)"
      url: "https://arxiv.org/pdf/math/0304417"
      locator: "Theorem 2.2 and its proof, printed p. 2; the relative-distance condition d(delta)>0 is defined on printed p. 1"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Examples 3.5(3)-(4), printed p. 39: the signed logarithm belongs to one-grid dyadic BMO on the line but not classical BMO"
    - title: "Brooke Wilson, Math 581A Classical and Multilinear Harmonic Analysis (University of Washington, Fall 2024), lecture 18"
      url: "https://sites.math.washington.edu/~blwilson/581AFall2024/Lectures/lecture18.pdf"
      locator: "the dyadic BMO definition and dyadic John-Nirenberg discussion, scanned pages 1-2"
---

## Recorded result

Recorded result (Mei 2003), not proved here. On the circle
$\mathbb T=\mathbb R/2\pi\mathbb Z$, let $\mathrm{BMO}_D(\mathbb T)$ be the
dyadic BMO space of one fixed dyadic grid and let
$\varphi\mapsto\varphi(\cdot-2\delta\pi)$ be a translate by a shift $0<\delta<1$ satisfying
$d(\delta):=\inf_{m\ge0,\,k\in\mathbb Z}2^m|\delta-k2^{-m}|>0$
(for example $\delta=1/3$). Mere non-dyadicity is insufficient for this
relative-distance condition. Then
$\|\varphi\|_{\mathrm{BMO}(\mathbb T)}\asymp\|\varphi\|_{\mathrm{BMO}_D(\mathbb T)}+\|\varphi(\cdot-2\delta\pi)\|_{\mathrm{BMO}_D(\mathbb T)}$
for all $\varphi\in\mathrm{BMO}(\mathbb T)$. Here classical BMO on the circle
uses all arcs, with arc length measure; it is distinct from the Euclidean
cube-based definition used by the page. Theorem 2.2 bounds the classical
seminorm by $4/d(\delta)$ times the maximum of the two dyadic seminorms;
the reverse bound follows because each dyadic arc is an arc.
Separately, on $\mathbb R$ one-grid dyadic BMO is strictly larger than
classical BMO: Kinnunen, Examples 3.5(3)-(4), records the witness
$f(x)=\log|x|$ for $x<0$ and $f(x)=-\log|x|$ for $x>0$, with $f(0)=0$.
Thus a single grid cannot replace arbitrary intervals on the line. Both
results are recorded here, not proved. The page works
with arbitrary cubes throughout and no item depends on this statement.

## Remarks

The page uses the Euclidean cube-based seminorm of
[[def-bmo-seminorm-and-quotient-by-constants]]. The circle comparison uses
its own arc convention, while the recorded line witness explains the
single-grid warning in the Euclidean setting. The statement is recorded rather than proved: the cited
two-grid argument is not reproduced here, and no construction or estimate on
this page uses it. Its role is negative, to prevent the substitution of one
fixed dyadic grid for the cube grid in the stopping arguments of the page and of
its suppliers.
