---
id: lem-herbrand-quotient-multiplicativity-in-exact-sequences
kind: lemma
title: "Herbrand quotients multiply in short exact sequences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-herbrand-quotient-for-finite-cyclic-group-modules
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter II §3, Propositions 3.6 and 3.8"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Statement

Let $G=\langle\sigma\rangle$ be finite cyclic and let
$0\to A\to B\to C\to0$ be a short exact sequence of $G$-modules. If the
Herbrand quotients of any two of $A,B,C$ are defined, then the third is
defined and $h_G(B)=h_G(A)h_G(C)$. Every finite $G$-module has Herbrand
quotient $1$.

## Statement references

[[def-herbrand-quotient-for-finite-cyclic-group-modules]]

[J. S. Milne, *Class Field Theory*, Chapter II §3, Propositions 3.6 and 3.8](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** The cyclic group $G$, the short exact sequence, and the finite Tate groups required in the Statement.

[F1] The two cyclic Tate groups are $M^G/N_GM$ and $\ker N_G/(\sigma-1)M$; the quotient is their order ratio. [[def-herbrand-quotient-for-finite-cyclic-group-modules]]

## Proof

**Proof technique:** use the six-term exact sequence of norm and augmentation quotients.

**Given:** The data above.

1.1 For $[c]\in\widehat H^0(G,C)$, choose $b\in B$ lifting an invariant $c$ and define $\delta_0[c]=[(\sigma-1)b]\in\widehat H^{-1}(G,A)$. The numerator lies in $A$ and has norm zero because $N_G(\sigma-1)=0$. Changing $b$ by $a\in A$ changes it by the augmentation $(\sigma-1)a$; changing $c$ by a norm does not change it. For $[c]\in\widehat H^{-1}(G,C)$, lift a norm-kernel element $c$ to $b\in B$ and define $\delta_{-1}[c]=[N_Gb]\in\widehat H^0(G,A)$. The norm lies in $A^G$; changing the lift changes it by a norm from $A$, and changing $c$ by an augmentation leaves it unchanged. These are well-defined connecting maps. [F1, given, construct, algebra]

2.1 The resulting cyclic sequence $$\widehat H^0(G,A)\to\widehat H^0(G,B)\to\widehat H^0(G,C)\overset{\delta_0}{\to}\widehat H^{-1}(G,A)\to\widehat H^{-1}(G,B)\to\widehat H^{-1}(G,C)\overset{\delta_{-1}}{\to}\widehat H^0(G,A)$$ is exact. At $\widehat H^0(B)$, if invariant $b$ maps to a norm $N_G\bar c$ in $C$, lift $\bar c$ to $c\in B$; then $b-N_Gc\in A$ is invariant and maps to $[b]$. At $\widehat H^0(C)$, if $\delta_0[c]=0$, then $(\sigma-1)b=(\sigma-1)a$ for some $a\in A$, so $b-a$ is an invariant lift of $c$. At $\widehat H^{-1}(A)$, if $a\in\ker N_A$ becomes an augmentation $(\sigma-1)b$ in $B$, then $\bar b\in C^G$ and $\delta_0[\bar b]=[a]$. At $\widehat H^{-1}(B)$, if norm-kernel $b$ maps to an augmentation $(\sigma-1)\bar c$ in $C$, lift $\bar c$ to $c\in B$; then $b-(\sigma-1)c\in A$ is in $\ker N_A$ and maps to $[b]$. At $\widehat H^{-1}(C)$, if $\delta_{-1}[c]=0$, then $N_Gb=N_Ga$ for some $a\in A$, so $b-a\in\ker N_B$ lifts $c$. Finally, if invariant $a\in A$ maps to zero in $\widehat H^0(B)$, write $a=N_Gb$; then $\bar b\in\ker N_C$ and $\delta_{-1}[\bar b]=[a]$. This verifies exactness at every term. [F1, step 1.1, given, algebra]

3.1 If the Tate groups for two of $A,B,C$ are finite, exactness in step 2.1 expresses each group for the third as an extension of a subgroup and quotient of finite groups, so it is finite. In a cyclic exact sequence of finite groups, each order is the product of its incoming-image order and outgoing-image order. Multiplying the orders at alternating positions cancels every image order once on each side, giving $h_G(B)=h_G(A)h_G(C)$. [F1, step 2.1, algebra]

4.1 If $M$ is finite, the endomorphism $\sigma-1$ gives $|M^G|=|M|/|(\sigma-1)M|$, and the norm endomorphism gives $|N_GM|=|M|/|\ker N_G|$. Therefore $|\widehat H^0(G,M)|=|M^G|/|N_GM|=|\ker N_G|/|(\sigma-1)M|=|\widehat H^{-1}(G,M)|$. Both Tate groups are finite, so $h_G(M)=1$. [F1, algebra] ∎ 