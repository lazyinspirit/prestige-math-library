---
id: thm-isolated-primary-components-are-unique
kind: theorem
title: "Isolated primary components are recovered by localization and contraction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-primary-decomposition-minimal-and-isolated-components, thm-first-uniqueness-theorem-primary-decomposition, lem-localisation-of-a-primary-submodule, lem-contraction-recovers-primary-component-after-localising-away-from-radical, cor-localisation-commutes-with-finite-intersections-of-submodules]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (18.25)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 19.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, and let
$$
N=Q_1\cap\cdots\cap Q_r
$$
be a minimal primary decomposition with each $Q_i$ $\mathfrak p_i$-primary for
a prime ideal $\mathfrak p_i$. If
$\mathfrak p_i$ is isolated, then
$$
Q_i=M\cap N_{\mathfrak p_i}
$$
inside $M_{\mathfrak p_i}$. In particular, each isolated primary component is
uniquely determined by $N \subseteq M$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, and a minimal primary decomposition $N=Q_1\cap\cdots\cap Q_r$ with each $Q_i$ $\mathfrak p_i$-primary for a prime ideal $\mathfrak p_i$.

[L1] In a minimal primary decomposition, isolated means minimal under inclusion among the component radicals, and the radicals are pairwise distinct ([[def-primary-decomposition-minimal-and-isolated-components]]).

[L2] Assuming the Axiom of Choice, in the Noetherian finite-module setting, localizing a $\mathfrak p$-primary component at its prime radical keeps it primary, while localizing at a multiplicative set meeting its radical gives the whole localized module ([[lem-localisation-of-a-primary-submodule]]).

[L3] In the Noetherian finite-module setting, a $\mathfrak p$-primary component with prime radical is recovered by contracting its localization at a multiplicative set disjoint from $\mathfrak p$ ([[lem-contraction-recovers-primary-component-after-localising-away-from-radical]]).

[L4] Localisation commutes with finite intersections of submodules ([[cor-localisation-commutes-with-finite-intersections-of-submodules]]).

[L5] In the Noetherian finite-module setting, the prime component radicals of a minimal primary decomposition are intrinsic and equal the associated primes of the quotient ([[thm-first-uniqueness-theorem-primary-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 Fix an isolated component $Q_i$. By [L1], if $j \ne i$ then $\mathfrak p_j \nsubseteq \mathfrak p_i$, since otherwise minimality of $\mathfrak p_i$ would force $\mathfrak p_j=\mathfrak p_i$, contradicting the distinct-radical part of [L1]. Hence for each $j \ne i$ we may choose $a_j \in \mathfrak p_j\setminus \mathfrak p_i$. Localizing at $R \setminus \mathfrak p_i$, fact [L2] gives $(Q_j)_{\mathfrak p_i}=M_{\mathfrak p_i}$ for $j \ne i$, while $(Q_i)_{\mathfrak p_i}$ remains a proper primary submodule. Using [L4], $$ N_{\mathfrak p_i} =\bigcap_{j=1}^r(Q_j)_{\mathfrak p_i} =(Q_i)_{\mathfrak p_i}. $$ [L1, L2, L4, choose, algebra]

2.1 Fact [L3] recovers $Q_i$ by contracting $(Q_i)_{\mathfrak p_i}$ back to $M$. Since step 1.1 identifies $(Q_i)_{\mathfrak p_i}$ with $N_{\mathfrak p_i}$, this gives $$ Q_i=M\cap N_{\mathfrak p_i}. $$ By [L5], the prime $\mathfrak p_i$ depends only on $M/N$ and occurs in every minimal primary decomposition. Applying the same localization-and-contraction argument to any such decomposition recovers its $\mathfrak p_i$-component from the same right-hand side. Hence the isolated component is unique. [L3, L5, step 1.1]

3.1 Therefore every isolated component is recovered by localization and contraction. [step 2.1] ∎
