---
id: lem-prikry-kappa-plus-chain-condition
kind: lemma
title: Prikry forcing is kappa-plus-cc but not ccc
status: published
origin: pipeline
deps:
  - def-prikry-forcing-and-direct-extension
  - def-lc-complete-ultrafilters-and-measurable-cardinals
  - def-kappa-closure-distributivity-and-chain-condition
  - cor-cardinal-absorption
  - def-aleph-and-beth-hierarchies
  - def-cardinal
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing lecture notes, Section 9.2, cardinal-preservation discussion"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

If $U$ is a normal measure on the uncountable cardinal $\kappa$, then Prikry
forcing $\mathbb P_U$ is $\kappa^+$-cc. It nevertheless has an antichain of
cardinality $\kappa$, and hence is not ccc.

## Facts & Assumptions

**Given:** ZFC, a normal measure $U$ on the uncountable cardinal $\kappa$, and
$\mathbb P_U$ with the stronger-below order.

[F1] [[def-prikry-forcing-and-direct-extension]]: Conditions with the same stem
are compatible after intersecting their upper parts.

[F2] [[def-lc-complete-ultrafilters-and-measurable-cardinals]]: A normal
measure is nonprincipal and $\kappa$-complete.

[F3] [[def-kappa-closure-distributivity-and-chain-condition]]: A forcing is
$\lambda$-cc exactly when every antichain has cardinality below $\lambda$; ccc
is $\aleph_1$-cc.

[F4] [[cor-cardinal-absorption]]: Products of an infinite cardinal with a
nonzero cardinal at most it, and sums with any cardinal at most it, have the
same cardinality as the infinite cardinal.

[F5] [[def-aleph-and-beth-hierarchies]]: $\kappa^+$ is the least cardinal strictly above
$\kappa$.

## Proof

1.1 There are at most $\kappa$ finite stems. To see this without hiding cardinal arithmetic, use F4 to fix a bijection $b:\kappa\times\kappa\to\kappa$, recursively code a nonempty finite sequence by repeated application of $b$, and tag the code with its length. This injects all finite sequences from $\kappa$ into $\omega\times\kappa$, whose cardinality is $\kappa$ by F4 because $0<\omega\le\kappa$. The ambient dependency [[def-axiom-of-choice]] is not used in this count: one existing bijection is fixed and the recursion is finite. [F4]

2.1 Given $\kappa^+$ conditions, if all their stems were distinct, step 1.1 would inject $\kappa^+$ into $\kappa$, contrary to F5. Two therefore have the same stem, and F1 makes them compatible. Thus no antichain has cardinality $\kappa^+$; under ZFC, any antichain of cardinality at least $\kappa^+$ contains a $\kappa^+$-sized subfamily. By F3, $\mathbb P_U$ is $\kappa^+$-cc. [F1, F3, F5, step 1.1]

3.1 For every $\alpha<\kappa$, the tail $A_\alpha=\kappa\setminus(\alpha+1)$ lies in $U$: it is the intersection of the fewer than $\kappa$ complements of the singleton points at most $\alpha$. Hence $p_\alpha=(\langle\alpha\rangle,A_\alpha)$ is a condition. If $\alpha\ne\beta$, a common extension would have a stem end-extending both distinct one-entry stems, which is impossible. Thus $\{p_\alpha:\alpha<\kappa\}$ is an antichain of size $\kappa$. Since $\kappa$ is uncountable, F3 shows that the forcing is not ccc. [F1, F2, F3] ∎
