---
id: cor-central-extensions-are-classified-by-h-two-with-trivial-action
kind: corollary
title: "Central extensions are classified by H^2 with trivial action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action, cor-zero-h-two-class-is-equivalent-to-splitting]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). If $A$ is an abelian group with trivial $G$-action, then equivalence classes of
central extensions

$$1\to A\to E\to G\to1$$

are classified by $H^2(G,A)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a group $G$, and an abelian group $A$ with trivial $G$-action.

[A1] Choice supplies the normalized sections required by [L1] for arbitrary quotient surjections.

[L1] $H^2(G,M)$ classifies extensions with a fixed abelian kernel action ([[thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]]).

[L2] The zero class is the split semidirect-product class ([[cor-zero-h-two-class-is-equivalent-to-splitting]]).

## Proof

**Proof technique:** direct.

1.1 With trivial action, the condition defining an extension inducing the prescribed action says that every lift of every $g\in G$ centralizes the kernel $A$. That is exactly the statement that the kernel is central in $E$. [given, algebra]

2.1 Under [A1], [L1] applies with $M=A$ and identifies $H^2(G,A)$ with the equivalence classes of central extensions. The split class singled out by [L2] is the direct-product class because the action is trivial. [A1, L1, L2, step 1.1]

3.1 Hence central extensions are classified by $H^2(G,A)$. [step 2.1] ∎
