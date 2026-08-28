---
id: lem-associated-prime-equivalent-cyclic-embedding
kind: lemma
title: "Associated primes are exactly primes of embedded cyclic residue modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-associated-prime-of-a-module, lem-annihilator-of-a-cyclic-submodule]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (17.2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.63: Associated primes"
      url: "https://stacks.math.columbia.edu/tag/00L9"
---

## Statement

Let $R$ be a commutative ring, let $M$ be a left $R$-module, and let
$\mathfrak p$ be a prime ideal of $R$. Then
$$
\mathfrak p \in \operatorname{Ass}_R(M)
$$
if and only if there exists an injective $R$-module homomorphism
$$
R/\mathfrak p \hookrightarrow M.
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, a left $R$-module $M$, and a prime ideal $\mathfrak p \subseteq R$.

[L1] A prime ideal is associated to $M$ exactly when it is the annihilator of some element of $M$ ([[def-associated-prime-of-a-module]]).

[L2] For any $m \in M$, the cyclic submodule $Rm$ is naturally isomorphic to $R/\operatorname{Ann}_R(m)$ ([[lem-annihilator-of-a-cyclic-submodule]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\mathfrak p \in \operatorname{Ass}_R(M)$. By [L1], choose $m \in M$ with $\operatorname{Ann}_R(m)=\mathfrak p$. Then [L2] gives $Rm \cong R/\mathfrak p$, and the inclusion $Rm \hookrightarrow M$ composes with this isomorphism to give an embedding $R/\mathfrak p \hookrightarrow M$. [L1, L2, choose]

1.2 Conversely, let $j:R/\mathfrak p \hookrightarrow M$ be injective, and put $m=j(1+\mathfrak p)$. Every $r \in \mathfrak p$ kills $1+\mathfrak p$, so $rm=0$. If $rm=0$, then $j(r+\mathfrak p)=0$, and injectivity gives $r+\mathfrak p=0$, hence $r \in \mathfrak p$. Therefore $\operatorname{Ann}_R(m)=\mathfrak p$, so $\mathfrak p \in \operatorname{Ass}_R(M)$ by [L1]. [L1, given, algebra]

2.1 Steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
