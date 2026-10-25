---
id: thm-qftx-complex-associated-bundle-realification
kind: theorem
title: Complex structure on an associated bundle by realification
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-backgrounds
deps:
  - def-smooth-principal-g-bundle
  - def-principal-g-bundle-and-associated-fiber-bundle
  - thm-associated-vector-bundle-is-well-defined
dependency_roles:
  def-smooth-principal-g-bundle: mathematical-premise
  def-principal-g-bundle-and-associated-fiber-bundle: mathematical-premise
  thm-associated-vector-bundle-is-well-defined: mathematical-premise
dependency_level: 0
axiom_base: ZF
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
      locator: "§10, Lemma 10.6 (Vector Bundle Chart Lemma), PDF pp. 270–271: complete criterion and proof that fiberwise-linear local charts with smooth transition maps define a unique smooth real vector bundle. The complex structure on the realification is proved in this item."
physical_scope: "Pure mathematical well-definedness result; it has no physical assumptions or empirical claim."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $H$ be a finite-dimensional real Lie group, let $\pi:P\to M$ be a smooth
right principal $H$-bundle, let $W$ be a finite-dimensional complex vector
space, and let $\rho:H\to\mathrm{GL}_{\mathbb C}(W)$ be a smooth complex
representation. Regard $W$ as the underlying real vector space $W_{\mathbb R}$
and $\rho$ as the real representation $\rho_{\mathbb R}$. The associated
quotient $P\times_{H,\rho_{\mathbb R}}W_{\mathbb R}$ has the smooth real
vector-bundle structure supplied by the associated-vector-bundle theorem. The
map $J[p,w]=[p,iw]$ is well-defined and smooth and satisfies $J^2=-\mathrm{id}$.
It therefore gives this real bundle a complex vector-bundle structure of rank
$\dim_{\mathbb C}W$, with transition maps $\rho(g_{ji})$ in any local principal
trivializations $s_i=s_jg_{ji}$. This assertion specifies the complex structure
induced by $J$ and makes no uniqueness claim about other possible complex
structures on the same real bundle.

## Statement references

[[def-smooth-principal-g-bundle]]

[[def-principal-g-bundle-and-associated-fiber-bundle]]

[[thm-associated-vector-bundle-is-well-defined]]

## Facts & Assumptions

**Given:** A smooth right principal $H$-bundle $P\to M$, a finite-dimensional
complex vector space $W$, and a smooth complex representation $\rho$.

[F1] [[def-principal-g-bundle-and-associated-fiber-bundle]]: the associated
quotient uses the relation $(ph,w)\sim(p,\rho(h)w)$.

[F2] [[thm-associated-vector-bundle-is-well-defined]]: for a smooth right
principal bundle and a smooth finite-dimensional real representation, this
quotient has a smooth real vector-bundle structure whose transition maps are
the representation matrices of the principal transition functions.

## Proof

1.1 The underlying real space $W_{\mathbb R}$ is finite-dimensional. In a
complex basis, the inclusion $\mathrm{GL}_{\mathbb C}(W)\hookrightarrow
\mathrm{GL}_{\mathbb R}(W_{\mathbb R})$ sends a matrix $A$ to the real block
matrix $\begin{pmatrix}\operatorname{Re}A&-\operatorname{Im}A\\
\operatorname{Im}A&\operatorname{Re}A\end{pmatrix}$; its entries depend
linearly on the real and imaginary parts of those of $A$, so the inclusion is
smooth. Therefore $\rho_{\mathbb R}$ is a smooth real representation.
Applying [F2] supplies the smooth real vector-bundle structure and the local charts
induced by sections $s_i:U_i\to P$, with transition maps $\rho_{\mathbb R}(g_{ji})$.
[F2, given, algebra]

2.1 If $(ph,w)\sim(p,\rho(h)w)$, then
$$J[ph,w]=[ph,iw]=[p,\rho(h)iw]=[p,i\rho(h)w]=J[p,\rho(h)w],$$
because $\rho(h)$ is complex-linear. Thus $J$ is well-defined on the quotient.
In the local charts from step 1.1 it acts by $(x,w)\mapsto(x,iw)$, so it is
smooth and $J^2=-\mathrm{id}$. Each fiber consequently has the complex scalar
action $(a+ib)[p,w]=[p,aw+ibw]$. The chart transitions $\rho(g_{ji})$ commute
with multiplication by $i$, so they are complex-linear; the resulting complex
bundle has rank $\dim_{\mathbb C}W$. [F1, F2, given, step 1.1, algebra] ∎
