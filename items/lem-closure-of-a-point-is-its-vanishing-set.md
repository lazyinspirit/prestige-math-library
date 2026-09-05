---
id: lem-closure-of-a-point-is-its-vanishing-set
kind: lemma
title: "The closure of a prime is its vanishing set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-prime-spectrum-and-vanishing-sets, def-specialisation-and-generic-point, lem-every-zariski-closed-set-has-a-radical-defining-ideal]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 14.4(b)"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring and let $\mathfrak p\in\operatorname{Spec}(R)$. Then $$ \overline{\{\mathfrak p\}}=V(\mathfrak p). $$

## Facts & Assumptions

**Given:** A commutative ring $R$, a prime ideal $\mathfrak p\subseteq R$, and the Axiom of Choice.

[L1] Every Zariski-closed subset has a unique radical defining ideal ([[lem-every-zariski-closed-set-has-a-radical-defining-ideal]]).

[L2] $V(I)$ is the set of prime ideals containing $I$ ([[def-prime-spectrum-and-vanishing-sets]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathfrak p\supseteq\mathfrak p$, the point $\mathfrak p$ lies in $V(\mathfrak p)$ by [L2]. Because $V(\mathfrak p)$ is closed, the closure $\overline{\{\mathfrak p\}}$ is contained in $V(\mathfrak p)$. [L2, given]

1.2 Let $Z$ be a closed subset containing $\mathfrak p$. By [L1], write $Z=V(I)$ for its radical defining ideal $I$. Since $\mathfrak p\in Z$, fact [L2] gives $I\subseteq\mathfrak p$. Therefore every prime ideal containing $\mathfrak p$ also contains $I$, so $V(\mathfrak p)\subseteq V(I)=Z$. [L1, L2]

2.1 Step 1.2 shows that every closed set containing $\mathfrak p$ also contains $V(\mathfrak p)$. Hence $V(\mathfrak p)$ is the smallest closed set containing $\mathfrak p$, that is, $\overline{\{\mathfrak p\}}=V(\mathfrak p)$. [step 1.1, step 1.2] ∎

