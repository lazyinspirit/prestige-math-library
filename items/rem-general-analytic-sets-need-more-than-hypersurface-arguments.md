---
id: rem-general-analytic-sets-need-more-than-hypersurface-arguments
kind: remark
title: "The single-equation proof does not cover arbitrary analytic sets"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-analytic-hypersurface-germ-and-reduced-equation
  - thm-zero-set-has-no-isolated-points-in-several-complex-variables
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "§6.6 hypervariety germs defined by one equation (p. 188); §6.7 decomposition of hypersurface germs (pp. 193–194). The zero-set theorem used is §6.1 (p. 165 ff.)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (6.6) codimension-one germs are defined by principal ideals (pp. 106–107); Chapter III coherence of the sheaf of holomorphic functions."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Remark

The hypersurface theory on this page applies to set germs cut out by **one**
nonzero nonunit holomorphic equation
([[def-complex-analytic-hypersurface-germ-and-reduced-equation]]). It does not
extend to arbitrary analytic set germs, and the standard example shows why.

Consider the germ of the origin in $\mathbb C^2$,

$$X=(\{0\},0)=\bigl(Z(x)\cap Z(y),0\bigr).$$

It is an analytic set germ, the common zero set of the two coordinate
functions, and its vanishing ideal is the maximal ideal
$\mathfrak m_0=(x,y)$ of $\mathcal O_{\mathbb C^2,0}$: a germ vanishes on the
set germ $\{0\}$ exactly when its value at $0$ is zero. This ideal is not
principal. Indeed, suppose $(x,y)=(g)$ for a germ $g$. Then
$Z(g)=Z(x)\cap Z(y)=\{0\}$ as set germs, while $g$ is a nonzero holomorphic
germ; but by the zero-set theorem a nonzero holomorphic function on a domain in
$\mathbb C^2$ has no isolated zeros, so every point of $Z(g)$ is a limit point
of $Z(g)\setminus\{0\}$ and $Z(g)$ cannot equal the singleton germ $\{0\}$
near the origin
([[thm-zero-set-has-no-isolated-points-in-several-complex-variables]]). Hence
$\{0\}$ is not a hypersurface germ: there is no nonzero nonunit $f$ with
$(Z(f),0)=(\{0\},0)$, and the hypersurface definition, the preparation theorem
argument, the discriminant and the gradient criterion $\nabla f$ all have no
single equation to act on here.

This example shows the limit of the single-equation setup: general analytic
set germs are described by ideals, which need not be principal. The germ
$\{0\}\subset\mathbb C^2$ is itself a smooth zero-dimensional submanifold,
even though its vanishing ideal $\mathfrak m_0=(x,y)$ is not principal. General
singular-locus, resolution, and parametrisation questions for analytic set
germs require their own arguments; they do not follow from the one-equation
hypersurface proofs on this page. For a reduced hypersurface, the singular
locus is cut out locally by $f,\partial_1f,\dots,\partial_nf$ and is treated
by the gradient criterion and the results of this page.
