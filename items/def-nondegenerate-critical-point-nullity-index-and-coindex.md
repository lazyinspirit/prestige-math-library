---
id: def-nondegenerate-critical-point-nullity-index-and-coindex
kind: definition
title: "Nondegenerate critical points, nullity, index, and coindex"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-hessian-of-a-function-at-a-critical-point, def-definiteness-inertia-and-signature-data-over-the-reals]
justified_by: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Definition

Let $f:M\to\mathbb R$ be smooth and let $p$ be a critical point of $f$. The
Hessian $\operatorname{Hess}_p(f)$ is a symmetric bilinear form on the
finite-dimensional real vector space $T_pM$
([[def-hessian-of-a-function-at-a-critical-point]]).

- The **nullity** of $p$ for $f$ is
  $$\operatorname{null}_p(f):=\dim\ker\bigl(\operatorname{Hess}_p(f)\bigr).$$
- The critical point $p$ is **nondegenerate** when
  $\operatorname{null}_p(f)=0$.
- The **index** of $p$ for $f$ is the largest dimension of a subspace of $T_pM$
  on which $\operatorname{Hess}_p(f)$ is negative definite.
- The **coindex** of $p$ for $f$ is the largest dimension of a subspace of
  $T_pM$ on which $\operatorname{Hess}_p(f)$ is positive definite.

The positivity and negativity conventions are those of
[[def-definiteness-inertia-and-signature-data-over-the-reals]].
