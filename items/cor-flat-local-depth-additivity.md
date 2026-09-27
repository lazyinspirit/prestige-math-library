---
id: cor-flat-local-depth-additivity
title: Depth is additive for a flat local homomorphism
kind: corollary
status: published
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal, lem-flat-local-depth-formula-regular-sequence-split, lem-depth-quotient-by-regular-element, thm-depth-zero-associated-prime-criterion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/tag/0338
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (cor-flat-local-depth-additivity). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice. For a flat local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of
Noetherian local rings,
$$\operatorname{depth}(S)=\operatorname{depth}(R) +\operatorname{depth}(S/\mathfrak mS).$$

## Facts & Assumptions

**Given:** The Axiom of Choice and a flat local map of Noetherian local rings. All depths are finite because the three local rings/modules are nonzero Noetherian objects. Choice is used through the regular-sequence lifting and quotient-flatness theorem ([[lem-flat-local-depth-formula-regular-sequence-split]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Write $d=\operatorname{depth}(R)$ and $e=\operatorname{depth}(S/\mathfrak mS)$. Choose regular sequences of these finite maximal lengths. Under the stated Choice hypothesis, [[lem-flat-local-depth-formula-regular-sequence-split]] lifts their concatenation to an $S$-regular sequence, giving $\operatorname{depth}(S)\ge d+e$. [given, choose]

1.2 We prove the reverse inequality by induction on $d+e$, following Stacks Project, Tag `0338`. If $d=e=0$, the depth-zero criterion supplies $0\ne z\in R$ with $\mathfrak mz=0$. Flatness makes $S/\mathfrak mS\to S$, $\bar s\mapsto zs$, injective. Choose a nonzero closed-fibre element $\bar y$ annihilated by $\mathfrak n/\mathfrak mS$. Then $zy\ne0$ and $\mathfrak n(zy)=0$, so the depth-zero criterion gives $\operatorname{depth}(S)=0$. [given, algebra]

2.1 If $d>0$, choose an $R$-regular $x\in\mathfrak m$. Flatness makes $x$ $S$-regular, and the repaired split lemma gives $R/(x)\to S/(x)$ flat local with the same closed fibre. Induction and [[lem-depth-quotient-by-regular-element]] give $\operatorname{depth}(S)-1=(d-1)+e$. If instead $d=0<e$, lift a closed-fibre regular element $\bar y$ to $y\in\mathfrak n$. The split lemma makes $y$ regular on $S$ and, crucially, makes $S/(y)$ flat over $R$; its closed fibre has depth $e-1$. Induction again gives $\operatorname{depth}(S)-1=d+(e-1)$. The only use of Choice in these branches is through that split lemma. Thus in all cases $\operatorname{depth}(S)=d+e$. [step 1.2, algebra] ∎
