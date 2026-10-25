---
id: lem-induced-modules-from-finite-dimensional-b-modules-have-type-the-weights
kind: lemma
title: Induced modules from finite-dimensional B-modules have type their weights
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-verma-type-of-a-module-with-a-standard-filtration, lem-finite-lie-triangularization-and-rank-one-complete-reducibility, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra, def-one-dimensional-borel-module-of-weight-lambda, thm-universal-property-of-verma-modules, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item lem-induced-modules-from-finite-dimensional-b-modules-have-type-the-weights; evidence research/frontier-38-owner-30-reader-8.md, research/frontier-38-owner-30-reader-findings-8.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 5.1, Lemma 9.5 and Fact 9.3, pp. 29-30"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "J. van Ekeren, Topics in representation theory (IMPA 2024), Sec. 29, pp. 122-123"
      url: "https://w3.impa.br/~jethro/2024-0/georep.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $N$ be a finite-dimensional $\mathfrak b$-module which is $\mathfrak h$-semisimple, with weight multiset $\operatorname{Wt}N$. Then the induced module $U(\mathfrak g)\otimes_{U(\mathfrak b)}N$ is Verma-filtered with $\operatorname{Typ}\bigl(U(\mathfrak g)\otimes_{U(\mathfrak b)}N\bigr)=\operatorname{Wt}N$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional $\mathfrak h$-semisimple $\mathfrak b$-module $N$ with weight multiset $\operatorname{Wt}N$.

[F1] Lie's theorem: a finite-dimensional representation of the solvable Lie algebra $\mathfrak b$ has a $\mathfrak b$-stable flag $0=N_0\subset N_1\subset\cdots\subset N_n=N$ with one-dimensional quotients; because $\mathfrak h$ acts semisimply these can be chosen compatibly with the weight decomposition, and since $[\mathfrak b,\mathfrak b]=\mathfrak n^+$ acts by zero on a one-dimensional module, each quotient is the Borel module $\mathbb C_{\mu_j}$ of [[def-one-dimensional-borel-module-of-weight-lambda]] for a weight $\mu_j$ of $N$ ([[lem-finite-lie-triangularization-and-rank-one-complete-reducibility]], [[def-one-dimensional-borel-module-of-weight-lambda]]).

[F2] $U(\mathfrak g)$ is free as a right $U(\mathfrak b)$-module: the PBW monomials with negative-root factors before the Borel factors form a $U(\mathfrak b)$-basis ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]). Hence $U(\mathfrak g)\otimes_{U(\mathfrak b)}(-)$ is an exact functor.

[F3] $U(\mathfrak g)\otimes_{U(\mathfrak b)}\mathbb C_\mu\cong M(\mu)$ is the Verma module, and the isomorphisms are compatible with the universal property of Verma modules ([[thm-universal-property-of-verma-modules]], [[def-verma-type-of-a-module-with-a-standard-filtration]]).

## Proof

1.1 Apply the exact functor $U(\mathfrak g)\otimes_{U(\mathfrak b)}(-)$ of [F2] to the flag of [F1]. The images $U(\mathfrak g)\otimes_{U(\mathfrak b)}N_j$ form an increasing filtration of $U(\mathfrak g)\otimes_{U(\mathfrak b)}N$, and exactness identifies the successive quotients: $U(\mathfrak g)\otimes_{U(\mathfrak b)}N_j\big/U(\mathfrak g)\otimes_{U(\mathfrak b)}N_{j-1}\cong U(\mathfrak g)\otimes_{U(\mathfrak b)}(N_j/N_{j-1})$. [F1, F2, algebra]

2.1 By [F1] and [F3] each quotient is $U(\mathfrak g)\otimes_{U(\mathfrak b)}\mathbb C_{\mu_j}\cong M(\mu_j)$, and as $j$ runs from $1$ to $n$ the weights $\mu_j$ run through $\operatorname{Wt}N$ with multiplicity. Therefore the displayed filtration is a Verma filtration of $U(\mathfrak g)\otimes_{U(\mathfrak b)}N$ with type $\operatorname{Wt}N$. [F1, F3, step 1.1] ∎
