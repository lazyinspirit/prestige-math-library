---
id: def-the-reverse-and-the-opposite-of-a-monoidal-category
kind: definition
title: "The reverse and the opposite of a monoidal category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category, def-opposite-category]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter XI"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Definition

Let $(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$ be a monoidal
category ([[def-monoidal-category]]).

Its **reverse monoidal category** $\mathcal C^{\mathrm{rev}}$ has the same
underlying category and unit object, but tensor

$$X\otimes^{\mathrm{rev}}Y:=Y\otimes X.$$

On morphisms, $f:X\to X'$ and $g:Y\to Y'$ are sent to
$$f\otimes^{\mathrm{rev}}g:=g\otimes f:Y\otimes X\longrightarrow Y'\otimes X'.$$

The associator of $\mathcal C^{\mathrm{rev}}$ is

$$\alpha^{\mathrm{rev}}_{X,Y,Z}:((X\otimes^{\mathrm{rev}}Y)\otimes^{\mathrm{rev}}Z)=Z\otimes(Y\otimes X)\xrightarrow{\alpha^{-1}_{Z,Y,X}}(Z\otimes Y)\otimes X=X\otimes^{\mathrm{rev}}(Y\otimes^{\mathrm{rev}}Z),$$

and its unit constraints are

$$\lambda^{\mathrm{rev}}_X:=\rho_X,\qquad \rho^{\mathrm{rev}}_X:=\lambda_X.$$

Its **opposite monoidal category** $\mathcal C^{\mathrm{op}}$ is the opposite
category ([[def-opposite-category]]) with the same objects, the same unit
object, and tensor bifunctor defined on morphisms by
$$f^{\mathrm{op}}\otimes g^{\mathrm{op}}:=(f\otimes g)^{\mathrm{op}}.$$
Its structure maps are obtained from the inverse original isomorphisms:

$$\alpha^{\mathrm{op}}_{X,Y,Z}:=((\alpha^{-1}_{X,Y,Z})^{\mathrm{op}}):((X\otimes Y)\otimes Z)\to X\otimes(Y\otimes Z),$$

$$\lambda^{\mathrm{op}}_X:=((\lambda_X^{-1})^{\mathrm{op}}):(\mathbf 1\otimes X)\to X,\qquad \rho^{\mathrm{op}}_X:=((\rho_X^{-1})^{\mathrm{op}}):(X\otimes\mathbf 1)\to X,$$

where passage to $\mathcal C^{\mathrm{op}}$ reverses the direction of the
original inverse isomorphisms.

These two constructions are different: reversing the tensor order is not the
same operation as reversing all morphisms.
