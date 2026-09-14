---
id: lem-halpern-lauchli-word-calculus-rearrangement
kind: lemma
title: "Finite word-calculus rearrangement"
status: draft
origin: pipeline
deps: [def-halpern-lauchli-finite-word-calculus]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Halpern–Läuchli, A partition theorem (1966), Lemma 1, pp. 364–365"
      url: https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf
    - title: "Monk, Set theory following Jech (2024), endpoint-word derivation in Theorem 29.28, pp. 662–664"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: induction
---

## Statement

For every positive integer $d$,

$$\forall a_1\cdots\forall a_d\exists x_1\cdots\exists x_d \ \vdash_d\ \exists A_1\cdots\exists A_d\forall x_1\cdots\forall x_d.$$

## Facts & Assumptions

**Given:** A positive integer $d$ and the two displayed endpoint words.

[F1] The language $L_d$, elementary commutations, matched-pair replacement,
finite block permutation, and $\vdash_d$ are exactly the finite calculus in
the preceding definition. [[def-halpern-lauchli-finite-word-calculus]]

## Proof

**Proof technique:** induction on $d$.

1.1 Write $U_m=\forall a_1\cdots\forall a_m$, $X_m=\exists x_1\cdots\exists x_m$, $E_m=\exists A_1\cdots\exists A_m$, and $V_m=\forall x_1\cdots\forall x_m$.  For $d>1$ there is a bridge $\forall a_dE_{d-1}V_{d-1}\exists x_d\vdash_d\exists A_dU_{d-1}X_{d-1}\forall x_d$: Rule 3 moves $E_{d-1}$ left of $\forall a_d$; Rule 1 rearranges the middle as $(\exists A_i\forall x_i)_{i=1}^{d-1}\forall a_d\exists x_d$; Rule 2 changes all $d$ matched pairs to $(\forall a_i\exists x_i)_{i=1}^{d-1}\exists A_d\forall x_d$; Rule 1 moves each earlier $\exists x_i$ past later universal $a$-symbols and commutes the existential symbols to give $U_{d-1}\exists A_dX_{d-1}\forall x_d$; and Rule 3 moves $\exists A_d$ left of $U_{d-1}$. [F1]

1.2 Derivations in $L_{d-1}$ lift through either outside matched pair: $W\vdash_{d-1}W'$ implies both $\forall a_dW\exists x_d\vdash_d\forall a_dW'\exists x_d$ and $\exists A_dW\forall x_d\vdash_d\exists A_dW'\forall x_d$.  It suffices to lift one rule step.  Rules 1 and 2 apply unchanged inside the context.  For Rule 3, Rule 1 first rearranges its adjacent prefix of $a$- and $A$-symbols into a universal block followed by an existential block, Rule 3 exchanges the blocks, and Rule 1 restores the required order.  The outside coordinate remains a complete ordered pair; induction on the finite derivation length proves both implications. [F1]

1.3 If $d=1$, the asserted derivation is exactly $\forall a_1\exists x_1\vdash_1\exists A_1\forall x_1$, an instance of Rule 2. [F1, base]

2.1 Suppose $d>1$ and the result holds in dimension $d-1$.  Rule 1 gives $U_dX_d\vdash_d\forall a_dU_{d-1}X_{d-1}\exists x_d$.  Lift the induction hypothesis by the first implication in step 1.2, apply the bridge from step 1.1, and lift the induction hypothesis by the second implication in step 1.2; thus $\forall a_dU_{d-1}X_{d-1}\exists x_d\vdash_d\forall a_dE_{d-1}V_{d-1}\exists x_d\vdash_d\exists A_dU_{d-1}X_{d-1}\forall x_d\vdash_d\exists A_dE_{d-1}V_{d-1}\forall x_d$.  Rule 1 finally commutes the $A$-symbols and the $x$-symbols to obtain $E_dV_d$. [F1, step 1.1, step 1.2, ih]

3.1 Every intermediate word lies in $L_d$: elementary commutation changes no coordinate's selected pair, Rule 2 replaces one legal ordered pair by the other, and Rule 3 is invoked only with its result in $L_d$.  Steps 1.3 and 2.1 therefore prove the assertion for every positive $d$. [F1, step 1.3, step 2.1, discharge-induction] ∎
