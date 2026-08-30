---
id: def-lax-strong-and-strict-monoidal-functor
kind: definition
title: "Lax, strong, and strict monoidal functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category, def-functor-and-contravariant-functor, def-natural-transformation, def-natural-isomorphism]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definitions 2.4.1 and 2.4.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter XI.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Definition

Let
$(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$ and
$(\mathcal D,\boxtimes,\mathbf 1',\alpha',\lambda',\rho')$
be monoidal categories ([[def-monoidal-category]]).

A **lax monoidal functor** is a functor
$F:\mathcal C\to\mathcal D$ ([[def-functor-and-contravariant-functor]])
together with natural transformations ([[def-natural-transformation]])

$$F_{2;X,Y}:F(X)\boxtimes F(Y)\longrightarrow F(X\otimes Y),$$

and

the morphism

$$F_0:\mathbf 1'\longrightarrow F(\mathbf 1),$$

such that, for all $X,Y,Z$,

$$F(\alpha_{X,Y,Z})\circ F_{2;X\otimes Y,Z}\circ(F_{2;X,Y}\boxtimes1_{F(Z)})=F_{2;X,Y\otimes Z}\circ(1_{F(X)}\boxtimes F_{2;Y,Z})\circ\alpha'_{F(X),F(Y),F(Z)},$$

$$F(\lambda_X)\circ F_{2;\mathbf 1,X}\circ(F_0\boxtimes1_{F(X)})=\lambda'_{F(X)},$$

$$F(\rho_X)\circ F_{2;X,\mathbf 1}\circ(1_{F(X)}\boxtimes F_0)=\rho'_{F(X)}.$$

A lax monoidal functor is **strong monoidal** when the natural transformation
$F_2$ is a natural isomorphism ([[def-natural-isomorphism]])—equivalently,
every component $F_{2;X,Y}$ is an isomorphism—and $F_0$ is an isomorphism.

A strong monoidal functor is **strict monoidal** when the functor preserves the
unit and tensor on the nose and every structure map above is an identity.
