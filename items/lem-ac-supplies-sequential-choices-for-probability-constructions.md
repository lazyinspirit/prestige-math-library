---
id: lem-ac-supplies-sequential-choices-for-probability-constructions
kind: lemma
title: AC supplies countable selections and prescribed serial paths
deps: ["def-axiom-of-choice", "def-countable-choice", "def-dependent-choice", "thm-recursion"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Jech, The Axiom of Choice, §2.4, pp22–23; elementary AC-to-DC restriction proof
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. Then countable choice holds. Moreover, if $R\subseteq X\times X$ is serial on a nonempty set X and $a\in X$, there is a sequence $(x_n)_{n\ge0}$ with $x_0=a$ and $x_n R x_{n+1}$ for every n. Thus the countable and dependent choices required by the probability-product suppliers are available under AC.

## Facts & Assumptions

[F1] AC supplies a choice function on a set of nonempty sets. [[def-axiom-of-choice]].

[F2] Countable choice is selection from an omega-indexed nonempty family. [[def-countable-choice]].

[F3] DC requires a serial path starting at a prescribed point. [[def-dependent-choice]].

[F4] A given self-map and initial point have a uniquely specified natural-number iterate sequence. [[thm-recursion]].

## Proof

**Given:** Assume AC. Then countable choice holds. Moreover, if $R\subseteq X\times X$ is serial on a nonempty set X and $a\in X$, there is a sequence $(x_n)_{n\ge0}$ with $x_0=a$ and $x_n R x_{n+1}$ for every n. Thus the countable and dependent choices required by the probability-product suppliers are available under AC.

1.1 For an omega-indexed family $(A_n)$ of nonempty sets, its image $\mathcal S=\{A_n:n\in\mathbb N\}$ is a set of nonempty sets. By [F1] choose $c$ with $c(A)\in A$ for every $A\in\mathcal S$. Then $b(n)=c(A_n)$ is a function and $b(n)\in A_n$, which is [F2]. Repeated sets use the same selected value and cause no ambiguity. For an empty index family the empty function already suffices; singleton fibers force their unique value. [F1, F2]

1.2 For the stated serial R, every fiber $R[x]=\{y\in X:xRy\}$ is nonempty. AC applied to the set of all these fibers gives c with $c(R[x])\in R[x]$. Define the self-map $s(x)=c(R[x])$ on X. No recursively changing choice is being assumed: s is now one fixed function chosen from a fixed set of nonempty fibers. It satisfies $xRs(x)$ for every x. [F1, F3]

2.1 Apply [F4] to X, the prescribed a and s to obtain $x_0=a$ and $x_{n+1}=s(x_n)$ for every natural n. The defining property of s gives $x_nRx_{n+1}$, precisely [F3]. If X has one element and R is serial, this is its constant sequence. Empty X is excluded by the prescribed a. The uses of AC are exactly the two fixed-family selections in steps 1.1 and 1.2; recursion itself requires no further choice. This proves the two implications from AC, not either converse. [step 1.1, step 1.2, F3, F4] ∎

