---
id: def-primary-component-and-generalised-eigenspace
kind: definition
title: "Primary components $\\ker q(T)^e$ and generalised eigenspaces $G_\\lambda^{(e)}(T)=\\ker(T-\\lambda I)^e$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-evaluation-at-an-endomorphism, def-eigenvalue-eigenvector-eigenspace-and-spectrum, lem-polynomial-kernels-and-images-are-invariant]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §§8A–8B'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Anthony W. Knapp, Basic Algebra, 2nd ed., Ch. V, §5'
      url: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'
pipeline_run: null
---

## Definition

Let $T:V\to V$ be an endomorphism. For an irreducible polynomial $q\in F[x]$ and an integer $e\ge1$, the subspace

$$V_{q,e}(T):=\ker(q(T)^e)=\ker((q^e)(T))$$

is the **$q^e$-primary component** of $T$ when $q^e$ is the corresponding factor of $\mu_T$.

Here $q(T)$ uses polynomial evaluation at an endomorphism ([[def-polynomial-evaluation-at-an-endomorphism]]).

For $\lambda\in F$, the **generalised eigenspace of exponent $e$** is

$$G_\lambda^{(e)}(T):=\ker(T-\lambda I)^e.$$

Its first term is the ordinary eigenspace $G_\lambda^{(1)}(T)=E_\lambda(T)$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]). These kernels are $T$-invariant by [[lem-polynomial-kernels-and-images-are-invariant]].
