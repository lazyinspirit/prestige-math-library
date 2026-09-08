---
id: thm-first-order-sentence-deduction
kind: theorem
title: "Deduction theorem for sentence assumptions"
status: draft
origin: pipeline
deps: [lem-derivation-finite-support-and-concatenation, lem-hilbert-propositional-and-equality-rules, def-set-coded-formal-derivation]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Theorem 1H.8 p37 (proof assigned as exercise); complete local three-rule induction."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF, for a sentence theory $T$, a sentence $\sigma$ and any formula $\theta$,

$$T\cup\{\sigma\}\vdash\theta\quad\Longleftrightarrow\quad T\vdash\sigma\to\theta.$$

The forward transformation also works for an open discharged assumption $\sigma$ provided every variable generalized or existentially eliminated in the given derivation is absent from $\operatorname{FV}(\sigma)$; the other assumptions remain sentences.

## Facts & Assumptions

**Given:** A derivation with final line $\theta$, and the displayed sentence or variable restrictions on $\sigma$.

[F1] Derivations have finite length; weakening and composition of proofs preserve derivability. ([[lem-derivation-finite-support-and-concatenation]])

[F2] Boolean implication, identity and composition rules are derivable in the fixed calculus. ([[lem-hilbert-propositional-and-equality-rules]])

[F3] The three inference rules and restricted universal-distribution axiom are fixed by [[def-set-coded-formal-derivation]].

## Proof

1.1 For each old line $\eta$ we construct a proof from $T$ of $\sigma\to\eta$, by induction along the finite list. If $\eta=\sigma$, use identity. If $\eta$ is an axiom or belongs to $T$, retain its one-line proof and apply the tautology $\eta\to(\sigma\to\eta)$ by MP. These include every possible first line. [F1, F2]

2.1 If $\eta$ comes by MP from $\alpha$ and $\alpha\to\eta$, the already transformed premises and the tautology $(\sigma\to\alpha)\to((\sigma\to(\alpha\to\eta))\to(\sigma\to\eta))$ give the new line by two MP applications. [F2, step 1.1]

2.2 If $\eta=\forall x\alpha$ comes by generalization, generalize the transformed $\sigma\to\alpha$ to $\forall x(\sigma\to\alpha)$, then use distribution to obtain $\sigma\to\forall x\alpha$. Its restriction holds because $x$ is not free in $\sigma$. [F3, step 1.1]

2.3 If $\eta=(\exists x\alpha\to\beta)$ comes from $\alpha\to\beta$, the transformed premise is $\sigma\to(\alpha\to\beta)$. Boolean commutation gives $\alpha\to(\sigma\to\beta)$. Eliminate $x$ to get $\exists x\alpha\to(\sigma\to\beta)$, since $x$ is free in neither $\sigma$ nor $\beta$. Commute back to $\sigma\to(\exists x\alpha\to\beta)$. [F2, F3, step 1.1]

3.1 The three rule cases exhaust the list. Concatenating each finite derived block gives a finite proof of $\sigma\to\theta$ from $T$. For a sentence $\sigma$ both variable restrictions hold automatically. Conversely, weaken a proof of $\sigma\to\theta$ to $T\cup\{\sigma\}$, append its assumption $\sigma$ and apply MP to obtain $\theta$. [F1, F3, step 1.1, step 2.1, step 2.2, step 2.3] ∎
