---
id: thm-noetherian-ring-has-noetherian-spectrum
kind: theorem
title: "The spectrum of a Noetherian ring is a Noetherian topological space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-noetherian-topological-space, lem-every-zariski-closed-set-has-a-radical-defining-ideal, thm-noetherian-ring-ideal-characterisations]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 14.4(a)"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 5.9 and Section 10.17"
      url: "https://stacks.math.columbia.edu/tag/0050"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring. Then $\operatorname{Spec}(R)$ is a Noetherian topological space.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and the Axiom of Choice.

[L1] A topological space is Noetherian exactly when every descending chain of closed subsets stabilizes ([[def-noetherian-topological-space]]).

[L2] Every Zariski-closed subset has a unique radical defining ideal ([[lem-every-zariski-closed-set-has-a-radical-defining-ideal]]).

[L3] In a Noetherian ring, every ascending chain of ideals stabilizes ([[thm-noetherian-ring-ideal-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 Let $Z_0\supseteq Z_1\supseteq Z_2\supseteq\cdots$ be a descending chain of closed subsets of $\operatorname{Spec}(R)$. By [L2], each $Z_n$ has a unique radical defining ideal $\mathfrak a_n$ with $Z_n=V(\mathfrak a_n)$. [L2, given, choose]

2.1 Since $Z_{n+1}\subseteq Z_n$, every prime ideal in $Z_{n+1}$ also lies in $Z_n$. Therefore $$ \mathfrak a_n=\bigcap_{\mathfrak p\in Z_n}\mathfrak p \subseteq \bigcap_{\mathfrak p\in Z_{n+1}}\mathfrak p=\mathfrak a_{n+1}. $$ Thus $\mathfrak a_0\subseteq\mathfrak a_1\subseteq\mathfrak a_2\subseteq\cdots$ is an ascending chain of ideals. [L2, step 1.1, algebra]

3.1 By [L3], the ideal chain from step 2.1 stabilizes: there is $N$ such that $\mathfrak a_n=\mathfrak a_N$ for all $n\ge N$. Then $Z_n=V(\mathfrak a_n)=V(\mathfrak a_N)=Z_N$ for all $n\ge N$. Hence the closed chain stabilizes. [L3, step 2.1]

4.1 By [L1], stabilization of every descending closed chain means that $\operatorname{Spec}(R)$ is Noetherian. [L1, step 3.1] ∎
