---
id: thm-affine-domain-dimension-transcendence-degree
kind: theorem
title: "Affine-domain dimension equals transcendence degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-noether-normalisation-module-finiteness, cor-transcendence-degree-tower-additivity, lem-affine-domain-normalisation-dimension-lower-bound, lem-affine-domain-normalisation-dimension-upper-bound, thm-transitivity-of-algebraicity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.116: Dimension of finite type algebras over fields, reprise"
      url: "https://stacks.math.columbia.edu/tag/07NB"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $K=\operatorname{Frac}(A)$. Then
$$ \dim A=\operatorname{trdeg}_k K. $$

## Facts & Assumptions

**Given:** A field $k$, a finite-type $k$-domain $A$, and its fraction field $K$.

[L1] Noether normalization provides algebraically independent elements $z_1,\ldots,z_d\in A$ such that $A$ is module-finite over $k[z_1,\ldots,z_d]$ ([[cor-noether-normalisation-module-finiteness]]).

[L2] A finite affine extension of a polynomial ring has dimension at most, and at least, the number of polynomial variables ([[lem-affine-domain-normalisation-dimension-upper-bound]], [[lem-affine-domain-normalisation-dimension-lower-bound]]).

[L3] Algebraicity is transitive in towers of fields ([[thm-transitivity-of-algebraicity]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose algebraically independent elements $z_1,\ldots,z_d\in A$ such that $A$ is module-finite over $B=k[z_1,\ldots,z_d]$. Applying [L2] to the inclusion $B\subseteq A$ yields $\dim A=d$. [L1, L2, given, choose]

2.1 Because $A$ is integral over $B$, every element of $K=\operatorname{Frac}(A)$ is algebraic over the rational function field $k(z_1,\ldots,z_d)$. Thus [L3] shows that $K$ is algebraic over a purely transcendental extension of degree $d$, so $\operatorname{trdeg}_kK=d$. [L3, step 1.1]

3.1 Steps 1.1 and 2.1 give $\dim A=\operatorname{trdeg}_kK$. [step 1.1, step 2.1] ∎
