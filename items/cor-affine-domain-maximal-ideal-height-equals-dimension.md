---
id: cor-affine-domain-maximal-ideal-height-equals-dimension
kind: corollary
title: "Maximal ideals of an affine domain have full height"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-height-plus-quotient-dimension-affine-domain, lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
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

Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $\mathfrak m$ be a maximal ideal of $A$. Then
$$
\operatorname{ht}(\mathfrak m)=\dim A.
$$

## Facts & Assumptions

**Given:** A field $k$, a finite-type $k$-domain $A$, and a maximal ideal $\mathfrak m\subset A$.

[L1] The residue field $A/\mathfrak m$ is a finite extension of $k$ ([[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]).

[L2] In an affine domain,
$$
\operatorname{ht}(\mathfrak m)+\dim(A/\mathfrak m)=\dim A
$$
([[cor-height-plus-quotient-dimension-affine-domain]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the quotient $A/\mathfrak m$ is a field. Hence $\dim(A/\mathfrak m)=0$. [L1, given]

2.1 Applying [L2] now yields $\operatorname{ht}(\mathfrak m)=\dim A$. [L2, step 1.1]

3.1 Thus every maximal ideal of an affine domain has full height. [step 2.1] ∎
