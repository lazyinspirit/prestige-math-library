---
id: "thm-lc-los-schema-for-universe-ultrapowers"
kind: "theorem"
title: "Los schema for the universe ultrapower"
deps: ["lem-lc-scott-quotients-are-sets-and-membership-is-setlike", "thm-lc-los-for-set-ultraproducts", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Theorem 17.3 and following extensionality proof pp.341–342
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, for each fixed first-order membership formula $\varphi$ and set functions $f_1,\ldots,f_n:I\to V$, the Scott ultrapower satisfies

$$\varphi^E([f_1]_U,\ldots,[f_n]_U)\quad\Longleftrightarrow\quad\{i\in I:\varphi(f_1(i),\ldots,f_n(i))\}\in U.$$

Here the left side is the fixed formula relativized to the definable Scott domain, with E replacing membership. Thus the ultrapower is extensional and the constant map preserves and reflects every fixed first-order formula. This is a schema, not a uniform truth predicate for V.

## Facts & Assumptions

**Given:** ZFC. Formula induction is proved with both existential directions; minimum witness ranks and Separation reduce coordinate class witnesses to a set family before AC.

[F1] [[lem-lc-scott-quotients-are-sets-and-membership-is-setlike]]: Equality and E are exactly their coordinate U-large predicates.

[F2] [[thm-lc-los-for-set-ultraproducts]]: The finite Boolean and existential induction pattern applies; the universe witness bound is supplied below.

[F3] [[def-axiom-of-choice]]: AC selects from a set family of bounded-rank witness sets.

## Proof

1.1 Fix the formula externally. Atomic equality and membership are the coordinate clauses of F1. Negation complements the truth set, and conjunction intersects two truth sets. A proper ultrafilter contains exactly one of a set and its complement, and contains an intersection exactly when it contains both factors. These prove the Boolean induction steps, as in F2, without using satisfaction for a proper-class structure. [F1, F2]

2.1 Suppose the coordinate truth set $A=\{i:\exists x\,\psi(x,f_1(i),\ldots,f_n(i))\}$ lies in U. For each i in A there is a least ordinal $\rho_i$ which is the rank of a witness: first bound the search by the rank of any one witness, then minimize ordinals. This defines rho_i uniquely, so Replacement collects these ordinals. For each i in A, Separation in $V_{\rho_i+1}$ gives the nonempty set $W_i$ of witnesses of rank rho_i. Replacement collects the family of W_i, and F3 supplies choices g(i) in W_i. Set g(i) to empty outside A. This is a set function on I. Its matrix truth set contains A, so the induction hypothesis gives a Scott-domain witness [g]. The choices were from sets, not proper classes. [F3, step 1.1]

3.1 Conversely a Scott-domain existential witness has the form [g] for a set function g. The matrix induction hypothesis says its coordinate matrix truth set belongs to U. This set is contained in the existential truth set, which therefore belongs to U by upward closure. Together with step 2.1 this completes the formula induction. For constant parameters the coordinate truth set is I or empty according to the ambient formula's truth; properness gives preservation and reflection by the constant map. Apply the proved schema to the single axiom of Extensionality, true in V: its coordinate truth set is I, so the Scott structure is extensional. No simultaneous truth definition over all formulas was used. [F1, step 2.1] ∎
