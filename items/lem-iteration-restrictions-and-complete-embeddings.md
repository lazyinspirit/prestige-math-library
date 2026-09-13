---
id: lem-iteration-restrictions-and-complete-embeddings
kind: lemma
title: Restriction maps and complete embeddings in an iteration
status: draft
origin: pipeline
deps: [def-finite-support-forcing-iteration, thm-two-step-generic-factorization-and-ccc, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Definition 6.11 (initial segments and restrictions) with Theorem 6.4", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, for $\alpha\le\beta$, restriction sends $p$ to $p\restriction\alpha$, and top-padding embeds $P_\alpha$ completely into $P_\beta$. Incompatibility of two $P_\alpha$-conditions is preserved and reflected by this embedding; no such claim is made for arbitrary restrictions of $P_\beta$-conditions. A $P_\beta$-generic restricts to $P_\alpha$-generic, the stages form an increasing chain, and successor quotients are the evaluated iterands.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-finite-support-forcing-iteration]] gives coherent restrictions and finite support.

[F2] [[thm-two-step-generic-factorization-and-ccc]] gives successor-stage factorization.

[F3] [[thm-transfinite-recursion]] supports induction on $\beta$.

## Proof

1.1 Induct on $\beta$. Top-padding preserves order. Given $p\in P_\beta$ and $r\le p\restriction\alpha$, amalgamate $r$ with the tail of $p$: at each tail coordinate use the name selected by $p$, strengthening it only when the earlier amalgam requires a deciding extension. Successors use the two-step order; at limits the union has support contained in the union of two finite supports. Thus $p\restriction\alpha$ is a reduction of $p$. [F1, F3]

2.1 A reduction proves completeness: every maximal antichain of $P_\alpha$ remains predense after top-padding, and two padded conditions are compatible in $P_\beta$ exactly when they were compatible in $P_\alpha$. This assertion is restricted to padded conditions; two arbitrary long conditions may have compatible restrictions and incompatible tails. [step 1.1]

3.1 The inverse image of any dense subset of $P_\alpha$ is predense in $P_\beta$, so a $P_\beta$-generic restricts to a $P_\alpha$-generic. Padded stages form the increasing chain. At a successor, F2 identifies the quotient over the restricted generic with $(\dot Q_\alpha)_{G_\alpha}$. [F2, step 2.1] ∎
