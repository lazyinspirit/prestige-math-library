---
id: cor-closed-points-of-spectrum-are-maximal-ideals
kind: corollary
title: "The closed points of the prime spectrum are exactly the maximal ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-closure-of-a-point-is-its-vanishing-set, def-prime-and-maximal-ideals]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 14.4(b)"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (13.23)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring and let $\mathfrak p\in\operatorname{Spec}(R)$. Then the singleton $\{\mathfrak p\}$ is closed in $\operatorname{Spec}(R)$ if and only if $\mathfrak p$ is a maximal ideal.

## Facts & Assumptions

**Given:** A commutative ring $R$, a prime ideal $\mathfrak p\subseteq R$, and the Axiom of Choice.

[L1] The closure of $\{\mathfrak p\}$ is $V(\mathfrak p)$ ([[lem-closure-of-a-point-is-its-vanishing-set]]).

[L2] A maximal ideal is a proper ideal contained in no strictly larger proper ideal ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 The point $\mathfrak p$ is closed exactly when $\overline{\{\mathfrak p\}}=\{\mathfrak p\}$. By [L1], this is equivalent to $V(\mathfrak p)=\{\mathfrak p\}$. [L1]

2.1 If $\mathfrak p$ is maximal, then every prime ideal containing $\mathfrak p$ equals $\mathfrak p$ by [L2]. Hence $V(\mathfrak p)=\{\mathfrak p\}$, so $\mathfrak p$ is a closed point. [L2, step 1.1]

2.2 Conversely, if $\{\mathfrak p\}$ is closed, then step 1.1 gives $V(\mathfrak p)=\{\mathfrak p\}$. If $\mathfrak p\subseteq\mathfrak q$ for a prime ideal $\mathfrak q$, then $\mathfrak q\in V(\mathfrak p)$ and therefore $\mathfrak q=\mathfrak p$. Thus no strictly larger proper ideal can contain $\mathfrak p$, so [L2] shows that $\mathfrak p$ is maximal. [L2, step 1.1]

3.1 Therefore the closed points of $\operatorname{Spec}(R)$ are exactly the maximal ideals. [step 2.1, step 2.2] ∎
