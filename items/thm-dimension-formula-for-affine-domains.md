---
id: thm-dimension-formula-for-affine-domains
kind: theorem
title: "The dimension formula for affine domains"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-height-equals-local-dimension, thm-affine-domain-dimension-transcendence-degree, thm-quotient-is-domain-iff-ideal-prime]
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

Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $\mathfrak p\in\operatorname{Spec}(A)$. Then
$$
\operatorname{ht}(\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}(A).
$$

## Facts & Assumptions

**Given:** A field $k$, a finite-type $k$-domain $A$, and a prime ideal $\mathfrak p\subset A$.

[F1] For a finite-type $k$-domain $S$ and a prime ideal $\mathfrak q\subset S$, the local dimension formula gives $$ \dim S=\dim(S_{\mathfrak q})+\operatorname{trdeg}_k\operatorname{Frac}(S/\mathfrak q). $$

[L1] Because $\mathfrak p$ is prime, the quotient $A/\mathfrak p$ is a domain, so its residue field at the generic point is $\operatorname{Frac}(A/\mathfrak p)$ ([[thm-quotient-is-domain-iff-ideal-prime]]).

[L2] The height of $\mathfrak p$ is the dimension of the local ring $A_{\mathfrak p}$ ([[lem-height-equals-local-dimension]]).

[L3] For affine domains, dimension equals transcendence degree of the fraction field ([[thm-affine-domain-dimension-transcendence-degree]]).

## Proof

**Proof technique:** direct.

1.1 Applying [F1] to $S=A$ and $\mathfrak q=\mathfrak p$ gives $\dim A=\dim(A_{\mathfrak p})+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)$, where [L1] identifies the residue field term with $\operatorname{Frac}(A/\mathfrak p)$. [F1, L1, given]

2.1 By [L2] and [L3], one has $\dim(A_{\mathfrak p})=\operatorname{ht}(\mathfrak p)$ and $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$. Substituting these into step 1.1 yields $\operatorname{ht}(\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}(A)$. [L2, L3, step 1.1] ∎
