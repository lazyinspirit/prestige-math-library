---
id: cor-height-plus-quotient-dimension-affine-domain
kind: corollary
title: "Height plus quotient dimension equals ambient dimension in an affine domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-axiom-of-choice, thm-affine-domain-dimension-transcendence-degree, thm-dimension-formula-for-affine-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $\mathfrak p\in\operatorname{Spec}(A)$. Then
$$ \operatorname{ht}(\mathfrak p)+\dim(A/\mathfrak p)=\dim A. $$

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), a field $k$, a finite-type $k$-domain $A$, and a prime ideal $\mathfrak p\subset A$.

[L1] Under Choice, the affine-domain dimension formula identifies $$ \operatorname{ht}(\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}(A). $$ ([[thm-dimension-formula-for-affine-domains]]).

[L2] For affine domains, dimension equals transcendence degree of the fraction field ([[thm-affine-domain-dimension-transcendence-degree]]).

## Proof

**Proof technique:** direct.

1.1 Replace the two transcendence degrees in [L1] using [L2], once for $A$ and once for the quotient domain $A/\mathfrak p$. [L1, L2, given]

2.1 The result is exactly $\operatorname{ht}(\mathfrak p)+\dim(A/\mathfrak p)=\dim A$. [step 1.1] ∎
