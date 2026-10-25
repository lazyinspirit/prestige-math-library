---
id: thm-omega-two-iteration-forces-ma-and-not-ch
kind: theorem
title: The omega_2 iteration forces MA and continuum aleph_2
status: published
origin: pipeline
deps: [def-omega-two-ma-bookkeeping-iteration, thm-finite-support-iterations-preserve-ccc, lem-bounded-stage-capture-in-finite-support-iterations, lem-finite-support-iteration-size-bound, lem-ma-reduction-to-small-ccc-orders, def-cohen-collapse-and-levy-collapse-forcings, thm-chain-condition-preserves-cofinalities-and-cardinals, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 7.10", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

Over a ZFC+GCH ground model, the $\omega_2$ bookkeeping iteration is ccc and forces MA together with $2^{\aleph_0}=\aleph_2$, hence not CH.

## Facts & Assumptions

**Given:** AC, ground GCH, and the iteration of [[def-omega-two-ma-bookkeeping-iteration]].

[F1] [[thm-finite-support-iterations-preserve-ccc]] gives ccc.

[F2] [[thm-chain-condition-preserves-cofinalities-and-cardinals]] preserves cardinals.

[F3] [[lem-finite-support-iteration-size-bound]] and nice names bound the final forcing and real names by $\aleph_2$.

[F4] [[lem-bounded-stage-capture-in-finite-support-iterations]] captures small coded final objects.

[F5] [[lem-ma-reduction-to-small-ccc-orders]] reduces MA instances to small orders.

[F6] [[def-cohen-collapse-and-levy-collapse-forcings]] gives the finite-function Cohen order used at the cofinally many selected stages.

## Proof

1.1 F1 makes $P_{\omega_2}$ ccc, and F2 preserves $\omega_1,\omega_2$. F3 and GCH give at most $\aleph_2^{\aleph_0}=\aleph_2$ real names. At every selected Cohen stage, the coordinate-domain dense sets make the union a total real, and for each real in the preceding intermediate model the dense set requiring disagreement at a fresh coordinate makes the new real different from it. Hence Cohen reals added at distinct selected stages are distinct. There are cofinally, thus $\aleph_2$, many such stages, giving the reverse inequality. Therefore the final continuum is $\aleph_2$. [F1, F2, F3, F6]

1.2 In the final extension fix $\kappa<\aleph_2$, a ccc order $Q$, and at most $\kappa$ dense subsets. By F5 replace $Q$ by a coded dense order of size at most $\kappa$, and code it and the family by a set of ground ordinals of size at most $\aleph_1$. F4 places that code in some intermediate $V[G_\alpha]$. [F4, F5]

2.1 The earlier model sees $Q$ as ccc: otherwise it contains an $\omega_1$-antichain, and the ccc tail preserves both that set and its incompatibility, contradicting final ccc. Bookkeeping therefore selects the name at a later stage $\beta$. Its coordinate generic is a filter on $Q$ meeting every dense set already coded at stage $\alpha$, hence the original family. Since $\kappa<\aleph_2$ was arbitrary, MA holds. [F1, F2, step 1.2]

3.1 step 1.1 gives $2^{\aleph_0}=\aleph_2>\aleph_1$, so CH fails. AC is used in coding, bookkeeping, cardinal arithmetic, and the preservation/name arguments. [step 1.1, step 2.1] ∎
