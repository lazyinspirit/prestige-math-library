---
id: thm-integral-closure-is-integrally-closed
kind: theorem
title: "The integral closure of a domain in a field extension is integrally closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-closure-and-integrally-closed-domain, thm-transitivity-of-integrality, cor-integral-elements-form-a-subring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (10.32)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 6.8 and Definition 6.9"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $A$ be a domain, let $K$ be a field extension of $\operatorname{Frac}(A)$, and let $\overline A$ be the integral closure of $A$ in $K$. Then $\overline A$ is an integrally closed domain.

## Facts & Assumptions

**Given:** A domain $A$, a field extension $K/\operatorname{Frac}(A)$, and the integral closure $\overline A$ of $A$ in $K$.

[L1] The integral closure of $A$ in $K$ is the set of elements of $K$ integral over $A$, and a domain is integrally closed when every element of its field of fractions integral over it already lies in the domain ([[def-integral-closure-and-integrally-closed-domain]]).

[L2] In a nonzero integral extension, the elements integral over the base form a subring ([[cor-integral-elements-form-a-subring]]).

[L3] Integral maps are transitive ([[thm-transitivity-of-integrality]]).

[A1] Any subring of a field is a domain, so its field of fractions embeds into that field.

## Proof

**Proof technique:** direct.

1.1 Because $A$ is a domain, it is nonzero, so [L2] applies to the inclusion $A\subseteq K$. Therefore [L1] implies that $\overline A$ is a subring of the field $K$ containing $A$, and [A1] makes $\overline A$ a domain. [L1, L2, A1, given]

1.2 Let $x\in\operatorname{Frac}(\overline A)$ be integral over $\overline A$. By [A1] we may regard $x$ as an element of $K$. Then [L3] shows that $x$ is integral over $A$. [L3, A1, given]

2.1 Since $\overline A$ is, by [L1], exactly the set of elements of $K$ integral over $A$, step 1.2 gives $x\in\overline A$. Thus every element of $\operatorname{Frac}(\overline A)$ integral over $\overline A$ already lies in $\overline A$, so $\overline A$ is integrally closed. [L1, step 1.1, step 1.2] ∎
