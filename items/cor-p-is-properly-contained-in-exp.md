---
id: cor-p-is-properly-contained-in-exp
kind: corollary
title: "P is properly contained in EXP"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-machine-time-and-space-constructibility, thm-deterministic-time-hierarchy, def-p, def-exp-and-nexp]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (cor-p-is-properly-contained-in-exp). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Sebastiaan Terwijn, Complexity Theory, §2.2"
      url: "https://www.math.ru.nl/~terwijn/teaching/complexitytheory.pdf"
---

## Statement

$$ P\subsetneq EXP. $$

## Facts & Assumptions

**Given:** $f(n)=\max\{n+1,2^{\lceil\sqrt n\rceil}\}$ and $g(n)=2^n$, with time constructibility understood in the output-constructor sense of [[def-machine-time-and-space-constructibility]]. The hierarchy theorem is [[thm-deterministic-time-hierarchy]], and the class conventions are [[def-p]] and [[def-exp-and-nexp]].

## Proof

**Proof technique:** direct.

1.1 A fixed transducer reads $1^n$, counts $n$, finds $k=\lceil\sqrt n\rceil$ by integer search for the least $k$ with $k^2\ge n$, and writes the binary word $1$ followed by $k$ zeros. For the finitely many lengths where $n+1>2^k$, a literal branch instead writes $\operatorname{bin}(n+1)$. Its time is polynomial in $n$ plus $O(k)$, hence $O(f(n))$, since every fixed polynomial in $n$ is eventually below $2^{\sqrt n}$. A second transducer reads $1^n$ and writes $1$ followed by $n$ zeros in $O(n+1)=O(2^n)$ time. Both fully read the input and $f,g\ge n+1$, so they are time constructible in the stated output sense. Every polynomial is $O(f)$ because $d\log_2 n=o(\sqrt n)$ for each fixed exponent $d$, and $f\log f=o(g)$ because $\sqrt n+\log_2(\sqrt n+1)=o(n)$. [given, algebra, construct]

2.1 The deterministic time hierarchy applied to step 1.1 gives $\mathrm{DTIME}(f)\subsetneq\mathrm{DTIME}(g)$. Since $P\subseteq\mathrm{DTIME}(f)$ and $\mathrm{DTIME}(g)\subseteq EXP$, it supplies a language in $EXP\setminus P$. [step 1.1, given] ∎
