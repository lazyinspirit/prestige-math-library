---
id: thm-every-oracle-is-strictly-below-its-jump
kind: theorem
title: "Every oracle is strictly below its jump"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-jump, def-oracle-turing-machine]
proof_strategy: contradiction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Proposition 6.3"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

For every $A\subseteq\mathbb N$, $A<_TA'$.

## Facts & Assumptions

**Given:** an oracle $A\subseteq\mathbb N$ and the acceptable numbering used in [[def-turing-jump]].

## Proof

**Proof technique:** contradiction.

1.1 Let $Q_n$ be the oracle program that queries $A$ at $n$ and halts exactly when the answer is yes. Inserting the numeral $n$ into this fixed program template gives, by the hardwiring compiler in [[def-turing-jump]], a total computable index map $q(n)$. Hence $$n\in A\iff \Phi_{q(n)}^A(q(n))\downarrow\iff q(n)\in A',$$ so $A\le_TA'$. [given, construct]

1.2 Suppose toward contradiction that an $A$-oracle program $D$ decides $A'$. Build an oracle program $Q$ that, on input $z$, runs $D^A(z)$ and halts exactly when $D$ rejects. Let $e$ be the fixed index of $Q$ in the enumeration of [[def-turing-jump]]. Since $D$ is correct, $$e\in A'\iff \Phi_e^A(e)\downarrow \iff D^A(e)=0\iff e\notin A',$$ a contradiction. [given, assume-contra, construct]

2.1 Thus $A'\not\le_TA$, while step 1.1 gives $A\le_TA'$; therefore $A<_TA'$. [step 1.1, step 1.2, discharge-contradiction] ∎
