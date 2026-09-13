---
id: ex-equivalent-dedekind-finiteness-tests-in-basic-cohen-model
kind: example
title: Equivalent Dedekind-finiteness tests in the basic Cohen model
status: draft
origin: pipeline
deps: [thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals, thm-dedekind-infinite-iff-countable-subset]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, discussion after Theorem 10.25, p. 51", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

For the basic Cohen set $A$, the following are equivalent in ZF: $A$ has a countably infinite subset, there is an injection $\omega\to A$, and $A$ is in bijection with a proper subset. Their negations all hold in the basic Cohen model.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals]] proves that $A$ is infinite and Dedekind-finite.

[F2] [[thm-dedekind-infinite-iff-countable-subset]] gives the choice-free equivalence between Dedekind infinitude, an injection from $\omega$, and a countably infinite subset.

## Proof

1.1 If $B\subseteq A$ is countably infinite, a displayed bijection $b:\omega\to B$ followed by inclusion is an injection $\omega\to A$. Conversely, the range of an injection $i:\omega\to A$ is a subset of $A$ bijective with $\omega$. These are explicit maps and require no simultaneous choices. [F2]

1.2 From an injection $i:\omega\to A$, define $h:A\to A\setminus\{i(0)\}$ by $h(i(n))=i(n+1)$ and $h(x)=x$ off $i[\omega]$. The two pieces are disjoint, and the inverse sends $i(n+1)$ to $i(n)$ and fixes the complement, so $h$ is a bijection onto a proper subset. [F2]

1.3 Conversely, if $h:A\to B\subsetneq A$ is a bijection, choose the single witness $x_0\in A\setminus B$ and recursively put $x_{n+1}=h(x_n)$. Injectivity of $h$ and the fact that $x_0$ is not in its range show by cancellation that the $x_n$ are distinct. Thus $n\mapsto x_n$ injects $\omega$ into $A$. This uses one existential witness and recursion, not Countable Choice. [F2]

2.1 F1 rules out the proper-subset bijection. By step 1.1, step 1.2, step 1.3 it therefore rules out an $\omega$-injection and a countably infinite subset as well. Both implications of every equivalence have been accounted for in ZF. [F1, step 1.1, step 1.2, step 1.3] ∎