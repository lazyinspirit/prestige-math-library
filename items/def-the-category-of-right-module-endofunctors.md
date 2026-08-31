---
id: def-the-category-of-right-module-endofunctors
kind: definition
title: "The category of right-module endofunctors"
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
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, displays (2.38) and (2.39)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Definition

Let $(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$ be a monoidal category
([[def-monoidal-category]]).

The **category of right-module endofunctors** $\mathcal C'$ has:

- objects given by pairs $(F,c)$ where $F:\mathcal C\to\mathcal C$ is a functor
  ([[def-functor-and-contravariant-functor]]) and
  $$c_{X,Y}:F(X)\otimes Y\longrightarrow F(X\otimes Y)$$
  is a natural isomorphism ([[def-natural-isomorphism]]) in $X$ and $Y$ such
  that
  $$F(\alpha_{X,Y,Z})\circ c_{X\otimes Y,Z}\circ(c_{X,Y}\otimes1_Z)=c_{X,Y\otimes Z}\circ\alpha_{F(X),Y,Z}$$
  and
  $$F(\rho_X)\circ c_{X,\mathbf 1}=\rho_{F(X)};$$
- morphisms $(F,c)\to(G,d)$ given by natural transformations
  $\theta:F\Rightarrow G$ ([[def-natural-transformation]]) satisfying
  $$\theta_{X\otimes Y}\circ c_{X,Y}=d_{X,Y}\circ(\theta_X\otimes1_Y)$$
  for all objects $X,Y$.

Identities and composition are inherited from natural transformations: the
identity transformation satisfies the compatibility equation immediately, and
if $\theta:(F,c)\Rightarrow(G,d)$ and $\eta:(G,d)\Rightarrow(H,e)$ are
compatible, then substituting their two equations shows that
$\eta\circ\theta$ is compatible as well. Associativity and the identity laws
are therefore inherited from vertical composition of natural transformations.

Thus an object of $\mathcal C'$ is an endofunctor equipped with a coherent way
to slide a tensor factor on the right through the functor.
