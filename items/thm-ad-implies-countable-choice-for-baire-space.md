---
id: thm-ad-implies-countable-choice-for-baire-space
kind: theorem
title: "AD implies countable choice for subsets of Baire space"
status: published
origin: pipeline
deps: ["def-axiom-of-determinacy-for-natural-number-games"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Proposition 10.14, printed p101; full proof read"
      url: "https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf"
---
## Statement

In ZF+AD, every sequence $(A_n)_{n\in\mathbb N}$ of nonempty subsets of $\mathbb N^{\mathbb N}$ has a sequence $(a_n)_n$ with $a_n\in A_n$. This asserts countable choice for Baire reals, not unrestricted dependent choice.

## Facts & Assumptions

[A1] Assume AD as in [[def-axiom-of-determinacy-for-natural-number-games]]; it determines every payoff on the full natural-number tree.

## Proof

**Given:** The sequence of nonempty Baire subsets in the statement, in ZF+AD.

1.1 In a natural-number game let I's initial move be $n$, and let II's successive moves form $x\in\mathbb N^{\mathbb N}$. Ignore all later I moves. Declare II the winner exactly when $x\in A_n$, so the complementary condition defines I's payoff as a subset of the full play space. For any particular I strategy its first move is some $n$; nonemptiness of that single $A_n$ gives one $x\in A_n$. Playing its coordinates defeats that strategy regardless of later I moves. Thus no I strategy wins; this argument has made no simultaneous choice from the family. [given]

2.1 By A1 the game is determined, and step 1.1 excludes I, so fix a winning II strategy $\tau$. For each $n$ simulate the unique play beginning with I's move $n$ and having all later I moves zero, with II following $\tau$. Recursion on length uniquely defines this play, and Replacement over $n$ forms the sequence of its II subsequences $a_n$. Since every simulated play follows the winning $\tau$, its II subsequence belongs to $A_n$. Hence $(a_n)$ is the promised selection. This includes $n=0$ and singleton $A_n$ without any extra choice. QED. [A1, step 1.1]
