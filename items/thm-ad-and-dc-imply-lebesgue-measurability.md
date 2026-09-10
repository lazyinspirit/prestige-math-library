---
id: thm-ad-and-dc-imply-lebesgue-measurability
kind: theorem
title: "Under AD and DC every real set is Lebesgue measurable"
status: draft
origin: pipeline
deps: ["def-axiom-of-determinacy-for-natural-number-games", "def-dependent-choice", "lem-determinacy-measure-game-inner-outer-comparison", "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant", "thm-of-archimedean", "lem-dyadic-coding-coin-measure-and-lebesgue-transfer", "lem-rat-embeds-dense"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
sources:
  scraped: []
  references:
    - title: "rational-move and AD conclusion p396; complete local real-line transfer from the new dyadic interface; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally."
      url: "https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf"
---
## Statement

In ZF+AD+DC every subset of $\mathbb R$ is Lebesgue measurable. DC is separately assumed, not deduced from AD; no AC-based determinacy or analytic regularity theorem is used.

## Facts & Assumptions

[A1] Assume [[def-axiom-of-determinacy-for-natural-number-games]].

[A2] Separately assume [[def-dependent-choice]].

[F1] [[lem-determinacy-measure-game-inner-outer-comparison]] gives both rational-game strategy bounds under DC, for the closed inner and open outer envelopes.

[F2] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]] preserves Lebesgue measurability under translations.

[F3] [[thm-of-archimedean]] ensures the integer unit intervals cover $\mathbb R$.

[F4] [[lem-dyadic-coding-coin-measure-and-lebesgue-transfer]] supplies the injective dyadic map, envelope bounds, and completed Lebesgue transfer under DC.

[F5] [[lem-rat-embeds-dense]] supplies a rational strictly between two distinct real bounds.

## Proof

**Given:** ZF, A1 and A2.

1.1 Fix $E\subseteq\mathcal C$. If its closed inner and open outer bounds differed, their bounds in [0,1] give by F5 a rational $v$ strictly between them, with $0<v\leq1$. Each rational measure game has the explicit natural-number coding in F1's game convention, so A1 determines it. If I won, F1 under A2 would give $\nu_{\rm in}(E)\geq v$, a contradiction; if II won it would give $\nu_{\rm out}(E)\leq v$, also a contradiction. Thus the two envelope values agree. The dyadic interface F4 applies under the same A2 and gives $b^{-1}[E]$ Lebesgue measurable. [A1, A2, F1, F4, F5]

2.1 For any $A\subseteq[0,1)$ take E=b[A]. By F4 the dyadic $b$ is injective, so $b^{-1}[E]=A$: forward membership gives b(x)=b(a) for some a in A and therefore x=a, and reverse membership is immediate. Step 1.1 thus makes every such A measurable. [F4, step 1.1]

3.1 For arbitrary $A\subseteq\mathbb R$, set $A_m=(A\cap[m,m+1))-m$ for each integer m. These are subsets of [0,1), hence measurable by step 2.1. F2 makes each translate $A_m+m$ measurable. Enumerate the integers $0,1,-1,2,-2,\ldots$; by F3 their corresponding pieces have union A. The Lebesgue sigma-algebra under A2 (countable choice is derived from DC in F4's proof) is closed under this sequence of unions. Hence A is measurable. No choices of pieces are involved: each is defined by A and m. QED. [A2, F4, F2, F3, step 2.1]
