---
id: lem-countable-tower-six-term-limit-sequence
kind: lemma
title: Countable tower six term limit sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-lim-one-obstruction-to-completeness, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Boardman, Conditionally Convergent Spectral Sequences, section 1
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/boardman-SS.pdf
---

## Statement

Assume AC. Write $L(A)=\ker\Delta_A$ and $R(A)=\operatorname{coker}\Delta_A$ for a countable inverse tower of modules over a fixed ring. A termwise exact sequence of towers $0\to A\to B\to C\to0$ gives a natural exact sequence
$$0\to L(A)\to L(B)\to L(C)\xrightarrow{\partial}R(A)\to R(B)\to R(C)\to0.$$
If all transitions of a tower $A$ are surjective, then $R(A)=0$ and each projection $L(A)\to A_m$ is surjective. Removing finitely many initial coordinates induces isomorphisms on both $L$ and $R$.

## Facts & Assumptions

[F1] [[def-lim-one-obstruction-to-completeness]] defines $P(A)=\prod_m A_m$, $\Delta_A(x)_m=x_m-u_mx_{m+1}$, its kernel and its cokernel.

[F2] [[def-axiom-of-choice]] permits simultaneous representatives of countably many nonempty cosets and sections of surjective transition maps. These are the uses of AC below.

## Proof

**Given:** The towers in the statement; identify $A_m$ with its submodule in $B_m$. All tower squares commute.

1.1 The map $P(B)\to P(C)$ is onto: choose a lift in each coordinate by [F2]. If $c\in L(C)$, lift it to $b\in P(B)$. Then $\Delta_Bb\in P(A)$ by commutation, so define $\partial c=[\Delta_Bb]$. Replacing $b$ by $b+a$ changes the result by $\Delta_Aa$, hence leaves its class unchanged. Sum and scalar multiple lifts establish linearity. [F1, F2]

1.2 The map $L(A)\to L(B)$ is injective coordinatewise. A compatible $B$ tuple whose image in $L(C)$ vanishes lies coordinatewise in $A$ and is still compatible. This proves exactness at $L(B)$ as well. [F1]

1.3 Suppose every $u_m$ is onto. By [F2] choose a right inverse as a set map for each $u_m$. For prescribed $y\in P(A)$ put $x_0=0$ and recursively choose $x_{m+1}$ with $u_mx_{m+1}=x_m-y_m$ using these sections. Then $\Delta_Ax=y$, proving $R(A)=0$. For prescribed $x_m\in A_m$, the same recursion with $y=0$ constructs later coordinates, while compositions of transitions determine earlier ones. This proves surjectivity of $L(A)\to A_m$. No sections are asserted linear. [F1, F2]

1.4 Restriction to $m\ge N$ gives a bijection on compatible tuples: earlier coordinates are forced by the transitions. It is surjective on Delta cokernels because a tail representative can be extended by zero. If a full representative restricts to $\Delta x$ on the tail, extend $x$ backwards by the finite recursion $x_m=y_m+u_mx_{m+1}$. The original representative is now a full Delta boundary. Hence restriction is also injective on cokernels and is linear. These identifications commute with tower morphisms. [F1]

2.1 A compatible $B$ lift of $c$ has zero connecting class. Conversely if $\partial c=0$, a lift $b$ has $\Delta_Bb=\Delta_Aa$ for some $a\in P(A)$; then $b-a$ is a compatible lift. Thus exactness holds at $L(C)$ in both directions. [step 1.1]

2.2 A connecting class becomes zero in $R(B)$. Conversely if $a\in P(A)$ represents a class becoming zero there, write $a=\Delta_Bb$. The image $c$ of $b$ is compatible and has $\partial c=[a]$. This proves exactness at $R(A)$. [F1, step 1.1]

2.3 If $b\in P(B)$ maps to $\Delta_Cc$, lift $c$ to $t\in P(B)$ as in step 1.1. Then $b-\Delta_Bt\in P(A)$ represents the same $R(B)$ class. Every image from $R(A)$ conversely maps to zero in $R(C)$. Finally any representative in $P(C)$ lifts to $P(B)$, proving surjectivity at $R(C)$. [F1, step 1.1]

3.1 A morphism of the exact tower sequences sends a selected lift to a lift and commutes with Delta. Thus it commutes with $\partial$; it plainly commutes with coordinate inclusions and quotient maps too. The entire sequence is natural, including its end terms. [F1, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3]

4.1 The exactness assertions follow from steps 1.2–2.3 and naturality from step 3.1; steps 1.3 and 1.4 prove the two additional claims. Zero modules, zero maps where exactness permits them, and repeated or constant terms cause no exceptions. A single nonzero term followed by zeros has zero $L$ and $R$ by the tail assertion. A constant identity tower has $L=A_0$ and $R=0$. The index set is the nonempty set of natural numbers; no empty tower is being claimed. All infinite selections were explicitly made in steps 1.1 and 1.3 under AC. [F1, step 1.2, step 2.1, step 2.2, step 2.3, step 3.1, step 1.3, step 1.4] ∎

## Source notes

The local coordinate chase is complete. Boardman section 1 is background for the six-term interface; its omitted chase is supplied above. The owner research argument `research/phase-2-next-20-topology-owner-delta-alternatives.md`, sections 1–2 and 5, supplied the candidate evaluated here. No source-fetch verification or independent review is inferred.
