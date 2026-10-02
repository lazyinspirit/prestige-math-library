---
id: def-algebraic-curve-over-field
kind: definition
title: "Curves over a field"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-dimension-noetherian-topological-space
  - def-geometric-fibre
  - def-geometrically-reduced-integral-connected-fibre
  - def-integral-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-proper-morphism
  - def-separated-morphism-schemes
  - def-smooth-morphism-classical
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
---

## Definition

Let $k$ be a field. A **curve over $k$** is a $k$-scheme $C$ such that

1. $C$ is geometrically integral: the algebraic-closure fibre
   $C_{\bar k}=C\times_{\operatorname{Spec}k}\operatorname{Spec}\bar k$ of
   [[def-geometric-fibre]] is integral, that is, reduced, irreducible and
   nonempty, in the sense of
   [[def-geometrically-reduced-integral-connected-fibre]] and
   [[def-integral-scheme]];
2. $C$ is separated over $k$ ([[def-separated-morphism-schemes]]);
3. $C$ is of finite type over $k$
   ([[def-locally-finite-type-and-finite-type-morphism]]);
4. the underlying topological space of $C$ has chain dimension one
   ([[def-dimension-noetherian-topological-space]]).

A **smooth curve** is a curve $C$ whose structure morphism
$C\to\operatorname{Spec}k$ is smooth ([[def-smooth-morphism-classical]]); a
**proper curve** is a curve whose structure morphism is proper
([[def-proper-morphism]]). Smoothness and properness are extra adjectives
attached to a curve; neither is part of the meaning of the word curve, and a
curve need be neither smooth nor proper.

Chain dimension one means that the underlying space admits a strict chain
$Z_0\subsetneq Z_1$ of nonempty irreducible closed subsets and admits no
strict chain of length two; equivalently the space has Krull dimension $1$ and
is not the empty space. The empty scheme is therefore not a curve.

The scheme $C$ is a $k$-scheme of dimension one in the sense that its
irreducible components have dimension one. A curve is often written with its
field of definition omitted when no confusion arises, and a *smooth proper
curve* always means a curve that is both smooth and proper; the running
convention of this page is that a claim about curve local rings, divisors, or
genera names its hypotheses explicitly rather than hiding them in the word
curve.
