---
id: rem-d4-normaliser-action-wording-artin-tits-normalisers
kind: remark
title: Normaliser-action wording in the D4 exposition
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-normaliser-quotients-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - thm-chamber-labelling-artin-tits-normalisers
  - lem-normaliser-linear-action-artin-tits-normalisers
  - prop-tits-domain-interface-artin-tits-prerequisites
  - def-d4-example-data-artin-tits-normalisers
  - ex-d4-labelled-chamber-graph-artin-tits-normalisers
dependency_roles:
  def-normaliser-quotients-artin-tits-normalisers: mathematical-premise
  def-chamber-labels-artin-tits-normalisers: mathematical-premise
  thm-chamber-labelling-artin-tits-normalisers: mathematical-premise
  lem-normaliser-linear-action-artin-tits-normalisers: mathematical-premise
  prop-tits-domain-interface-artin-tits-prerequisites: mathematical-premise
  def-d4-example-data-artin-tits-normalisers: mathematical-premise
  ex-d4-labelled-chamber-graph-artin-tits-normalisers: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 29, §7.2.1, paragraph beginning ‘By Theorem 4.7’
      statement: The paragraph says that the action of each element of the normaliser
        is free on the chamber set, and that chambers with the same second label
        lie in the same orbit; it describes four orbits of eight chambers in the
        D4 example.
      hypotheses: The D4 example with central vertex 2 and J={2}, using the article's
        chamber labels and normaliser notation.
      reading_limits: Read the frozen extracted paragraph and visually inspected PDF
        page 29. This citation attributes the wording; the argument below uses
        the declared suppliers rather than the article assertion.
dependency_level: 18
---

## Statement

In the $D_4$ example, vertex $2$ is central, $J=\{2\}$, and $W_J=\langle s_2\rangle$. The normaliser is $\operatorname{Norm}_W(W_J)=\{g\in W:gW_Jg^{-1}=W_J\}$ and $N(W,J)=\operatorname{Norm}_W(W_J)/W_J$. A relative chamber has a unique label $(x,I)$ satisfying $W_Jx=xW_I$ and with $x$ of minimum length in $xW_I$; it is the face translate $xC_I$.

The induced action of $N(W,J)$ on these chambers is free: a quotient element fixing a chamber is the identity. Two chambers are in the same orbit, meaning that one is the image of the other under a quotient element, exactly when their second labels agree. There are four orbits, indexed by $I=\{1\},\{2\},\{3\},\{4\}$, each containing eight chambers.

The article's paragraph instead says that the action of each $g\in\operatorname{Norm}_W(W_J)$ is free. The quotient formulation above makes the intended freeness precise: the nonidentity element $s_2$ acts trivially on every relative chamber.

## Statement references

[[def-d4-example-data-artin-tits-normalisers]]

[[def-normaliser-quotients-artin-tits-normalisers]]

[[def-chamber-labels-artin-tits-normalisers]]

[[thm-chamber-labelling-artin-tits-normalisers]]

[[lem-normaliser-linear-action-artin-tits-normalisers]]

[[ex-d4-labelled-chamber-graph-artin-tits-normalisers]]

## Facts & Assumptions


[F1] The quotient action is induced by the normaliser action on the relative dual space; its kernel before quotienting is $W_J$, and a lift $g$ sends $xC_I$ to $(gx)C_I$. [[lem-normaliser-linear-action-artin-tits-normalisers]] [[def-normaliser-quotients-artin-tits-normalisers]]

[F2] Labels $(x,I)$ satisfy $xW_Ix^{-1}=W_J$ and correspond bijectively to chambers $xC_I$. [[def-chamber-labels-artin-tits-normalisers]] [[thm-chamber-labelling-artin-tits-normalisers]]

[F3] Each orbit in the Tits cone meets the closed fundamental chamber in exactly one point, and the stabiliser of every point of $C_I$ is $W_I$. [[prop-tits-domain-interface-artin-tits-prerequisites]]

[F4] In the completed $D_4$ chamber list, each of the singleton second labels $1,2,3,4$ occurs exactly eight times and there are no other labels. [[def-d4-example-data-artin-tits-normalisers]] [[ex-d4-labelled-chamber-graph-artin-tits-normalisers]]

## Proof


**Given:** The $D_4$ data and $J$ in the Statement. Write $C_I$ for the fundamental face with zero simple-root coordinates exactly at $I$.

**Proof technique:** direct.

**Goal:** Establish freeness, the orbit criterion and the stated correction to the normaliser wording.

1.1 Suppose a normaliser element $g$ sends the chamber $xC_I$ to $yC_K$. Choose $f\in C_I$. Then $h f\in C_K$, where $h=y^{-1}gx$. Both $f$ and $hf$ lie in the closed fundamental chamber and in the same orbit. By [F3], $hf=f$; their zero coordinates therefore give $I=K$, and [F3] also gives $h\in W_I$. In particular, if $y=x$ and $K=I$, then $g\in xW_Ix^{-1}=W_J$ by [F2]. Hence a quotient element fixing a chamber is the identity, proving freeness. [F1, F2, F3, given]

2.1 Conversely, let $(x,I)$ and $(y,I)$ be labels with the same second component. By [F2], both $xW_Ix^{-1}$ and $yW_Iy^{-1}$ equal $W_J$. Thus $g=yx^{-1}$ normalises $W_J$, and [F1] sends $xC_I$ to $yC_I$. Together with step 1.1, this proves the orbit criterion. Counting the labels in [F4] gives four orbits of eight chambers. [F1, F2, F4, step 1.1]

3.1 The reflection formula in the $D_4$ data gives $s_2\alpha_2=-\alpha_2$, so $s_2\ne1$. It belongs to $W_J$ and hence acts trivially on the relative space and its chambers by [F1]. Therefore the normaliser action itself is not free, whereas its quotient action is free by step 1.1. This completes the clarification. [F1, F4, step 1.1] ∎

## Source notes

The article reference attributes the wording in its $D_4$ discussion. The proof uses the listed completed suppliers and does not take that wording as a premise.
