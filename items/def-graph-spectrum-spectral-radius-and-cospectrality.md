---
id: def-graph-spectrum-spectral-radius-and-cospectrality
kind: definition
title: "Adjacency spectrum, spectral radius, and cospectral graphs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-adjacency-matrix-of-a-finite-simple-graph, def-characteristic-polynomial-of-a-matrix,
       cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
       thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, Section 4.7"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
---

## Definition

Let $G$ be a finite simple graph, put $n:=|V(G)|$, and let $A(G)$ be an
adjacency matrix of $G$
([[def-adjacency-matrix-of-a-finite-simple-graph]]).

Because $A(G)$ is real symmetric, the real spectral theorem gives a basis of
real eigenvectors and shows that all roots of its characteristic polynomial are
real ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]],
[[def-characteristic-polynomial-of-a-matrix]],
[[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]). If $n\ge1$, we therefore list
the eigenvalues in weakly decreasing order

$$\lambda_1(G)\ge\lambda_2(G)\ge\cdots\ge\lambda_n(G).$$

If $n=0$, this list is empty. In either case, the multiset
$\{\lambda_1(G),\dots,\lambda_n(G)\}$, counted with multiplicities, is the
**adjacency spectrum** of $G$.

The **adjacency spectral radius** of $G$ is $0$ when $n=0$, and otherwise is

$$\rho(G):=\max_{1\le i\le n}|\lambda_i(G)|.$$

Two finite graphs are **cospectral** when their adjacency spectra agree as
multisets.
