---
id: thm-jacobson-radical-unit-characterisation
kind: theorem
title: "Assuming the Axiom of Choice, an element lies in the Jacobson radical exactly when one minus any multiple is a unit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobson-radical-of-a-ring, thm-proper-ideal-contained-in-maximal-ideal, def-prime-and-maximal-ideals]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 10.11"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.19.1"
      url: "https://stacks.math.columbia.edu/tag/0AMD"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

For a commutative ring $R$ and an element $x \in R$,
$$
x \in J(R) \quad \Longleftrightarrow \quad 1-rx \text{ is a unit for every } r \in R.
$$

## Facts & Assumptions

**Given:** A commutative ring $R$ and an element $x \in R$.

[L1] The Jacobson radical is the intersection of the maximal ideals, with $J(0)=0$ ([[def-jacobson-radical-of-a-ring]]).

[L2] In a nonzero commutative ring, every proper ideal is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[L3] A maximal ideal is a maximal proper ideal under inclusion ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 If $R=0$, then $J(R)=0$ by [L1], the only element is $x=0$, and $1-rx=0$ is the identity element of the zero ring, hence a unit. So the statement holds in this case. [L1, given]

1.2 Assume $R \neq 0$ and first suppose $x \in J(R)$. Fix $r \in R$. If $1-rx$ lay in a maximal ideal $\mathfrak m$, then [L1] gives $x \in \mathfrak m$, hence also $rx \in \mathfrak m$, so $1=(1-rx)+rx \in \mathfrak m$, impossible. Thus $1-rx$ lies in no maximal ideal. [L1, L3, algebra]

1.3 Conversely, suppose $1-rx$ is a unit for every $r \in R$ and that $x \notin J(R)$. By [L1], choose a maximal ideal $\mathfrak m$ with $x \notin \mathfrak m$. Then the ideal $\mathfrak m+(x)$ strictly contains $\mathfrak m$, so maximality from [L3] gives $\mathfrak m+(x)=R$. Thus $1=a+rx$ for some $a \in \mathfrak m$ and $r \in R$, so $1-rx=a \in \mathfrak m$. But an element of a proper ideal cannot be a unit, contradicting the hypothesis. Therefore $x \in J(R)$. [L1, L3, algebra]

2.1 Still under the hypothesis of step 1.2, if $1-rx$ were not a unit, then the principal ideal it generates would be proper, so [L2] would place it in a maximal ideal, contradicting step 1.2. Hence $1-rx$ is a unit for every $r$. [step 1.2, L2]

3.1 Steps 1.1, 2.1, and 1.3 prove the equivalence. [step 1.1, step 2.1, step 1.3] ∎
