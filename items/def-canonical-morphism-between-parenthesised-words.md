---
id: def-canonical-morphism-between-parenthesised-words
kind: definition
title: "Canonical morphisms between parenthesised tensor words"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-parenthesised-tensor-word, def-monoidal-category, def-natural-transformation]
landmark: true
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2.9"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Definition

Let $u$ and $v$ be parenthesised tensor words on the same ordered letters
$x_1,\dots,x_n$ ([[def-parenthesised-tensor-word]]) and let
$E_u,E_v:\mathcal C^n\to\mathcal C$ be their evaluation functors in a monoidal
category $\mathcal C$ ([[def-monoidal-category]]).

A **canonical morphism** from $u$ to $v$ is a natural transformation
$E_u\Rightarrow E_v$ ([[def-natural-transformation]]) belonging to the smallest
class closed under:

- identities $1_{E_u}$;
- the associator, left unitor, and right unitor of $\mathcal C$, together with
  their inverses, whenever their source and target are evaluation functors of
  parenthesised words;
- tensoring a canonical morphism with an identity natural transformation on the
  left or right, whenever the resulting source and target still come from
  parenthesised words;
- vertical composition of canonical morphisms.

Thus a canonical morphism is built only from the structural isomorphisms
$\alpha,\lambda,\rho$, their inverses, identities, tensoring with identities,
and composition. No arbitrary morphism of $\mathcal C$ is canonical merely
because its source and target happen to be tensor products of the same objects.
