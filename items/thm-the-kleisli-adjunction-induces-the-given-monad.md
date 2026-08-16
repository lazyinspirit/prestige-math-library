---
id: thm-the-kleisli-adjunction-induces-the-given-monad
kind: theorem
title: "The Kleisli adjunction induces the given monad"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-kleisli-category, def-adjunction-by-unit-counit-and-triangle-identities]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.2.12"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Corollary 6.3.6 and Remark 6.3.7"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

For a monad $(T,\eta,\mu)$ on $\mathcal C$, there is an adjunction

$$F_T:\mathcal C\rightleftarrows\mathcal C_T:U_T$$

whose induced monad is $(T,\eta,\mu)$ on the nose.

## Facts & Assumptions

**Given:** The Kleisli category $\mathcal C_T$ of [[def-kleisli-category]] and the monad $(T,\eta,\mu)$ used to define it.

## Proof

**Proof technique:** direct.

1.1 Define $F_TA=A$ and $F_T(f)=\eta_B\circ f:A\to TB$. Define $U_TA=TA$, and for a Kleisli arrow $g:A\to TB$ put $U_T(g)=\mu_B\circ T(g):TA\to TB$. [given]

2.1 The Kleisli identity and associativity laws show that both assignments preserve identities and composition. Moreover $\mathcal C_T(F_TA,B)=\mathcal C(A,TB)=\mathcal C(A,U_TB)$ naturally in $A$ and $B$, so they form an adjunction. [step 1.1, given]

3.1 The unit is $\eta$. The counit at a Kleisli object $B$ is represented by $1_{TB}:TB\to TB$, and applying $U_T$ gives $\mu_B$; the Kleisli unit laws are the triangle identities. Thus $U_TF_T=T$ and the induced unit and multiplication are $\eta$ and $\mu$. [step 1.1, step 2.1] ∎
