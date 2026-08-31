---
id: thm-krull-principal-ideal-theorem
kind: theorem
title: "Krull's principal ideal theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-principal-ideal-theorem-associated-prime-step, lem-principal-ideal-theorem-reduction-to-local-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §21"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.60: Dimension"
      url: "https://stacks.math.columbia.edu/tag/00KD"
pipeline_run: null
---


## Statement

Let $R$ be a Noetherian commutative ring, let $x\in R$, and let $\mathfrak p$ be a prime ideal minimal over $(x)$. Then $\operatorname{ht}(\mathfrak p)\le1$.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an element $x\in R$, and a prime ideal $\mathfrak p$ minimal over $(x)$.

[L1] The principal-ideal bound reduces to the case of a Noetherian local domain whose maximal ideal is minimal over one nonzero element ([[lem-principal-ideal-theorem-reduction-to-local-domain]]).

[L2] In that reduced local-domain situation, every prime properly below the maximal ideal is zero, so the maximal ideal has height at most $1$ ([[lem-principal-ideal-theorem-associated-prime-step]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a minimal prime $\mathfrak q\subseteq\mathfrak p$ and pass to the Noetherian local domain $A=(R/\mathfrak q)_{\mathfrak p/\mathfrak q}$ whose maximal ideal is minimal over the image of $x$. [L1, given, choose]

2.1 Fact [L2] applies to $A$, so its maximal ideal has height at most $1$. [L2, step 1.1]

3.1 The reduction packaged in [L1] identifies this with the desired bound $\operatorname{ht}(\mathfrak p)\le1$ upstairs in $R$. [L1, step 2.1] ∎
