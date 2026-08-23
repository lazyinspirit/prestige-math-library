---
id: ex-hall-burnside-detects-a-nontrivial-coprime-automorphism
kind: example
title: "Inversion on $C_3$ is detected on its Frattini quotient"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [ex-frattini-subgroup-of-a-cyclic-p-group, thm-hall-burnside-automorphism-theorem, thm-automorphisms-of-a-finite-cyclic-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Generating Sets, Example 6.9"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
pipeline_run: null
---

## Example

Inversion on $C_3$ is a nontrivial automorphism of order two, and its action on the Frattini quotient is nontrivial. Thus Hall–Burnside detects it; the theorem does not assert that coprime automorphisms are absent.

## Facts & Assumptions

**Given:** The cyclic group $C_3=\langle g\rangle$.

[L1] If $P=\langle g\rangle$ has order $p^n$ with $n\ge1$, then $\Phi(P)=\langle g^p\rangle$ and $d(P)=1$ ([[ex-frattini-subgroup-of-a-cyclic-p-group]]).

[L2] If a $p'$-subgroup of $\operatorname{Aut}(P)$ acts trivially on $P/\Phi(P)$, then it is trivial ([[thm-hall-burnside-automorphism-theorem]]).

[L3] For $C_n=\langle g\rangle$, every unit class $[a]\in(\mathbb Z/n)^\times$ defines the automorphism $g\mapsto g^a$ ([[thm-automorphisms-of-a-finite-cyclic-group]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\Phi(C_3)=\langle g^3\rangle=1$. The unit $[-1]_3$ gives inversion by [L3]; it sends $g$ to $g^{-1}=g^2\ne g$ and its square is the identity, so it is a nonidentity automorphism of order two. [given, L1, L3, algebra]

2.1 Since the Frattini subgroup is trivial, the induced quotient action is the same nontrivial inversion. This is consistent with [L2], which forbids this order-two subgroup from acting trivially because $2$ is coprime to $3$. [step 1.1, L2] ∎
