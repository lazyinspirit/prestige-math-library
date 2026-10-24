---
id: "thm-lc-weakly-compact-stationary-reflection-and-mahlo"
kind: "theorem"
title: "Weak compactness implies stationary reflection and Mahloness"
deps: ["def-lc-weakly-compact-cardinal", "lem-lc-nonreflection-regressive-injection", "lem-lc-inaccessible-size-and-rank-bounds", "thm-fodor-pressing-down", "def-axiom-of-choice", "prop-basic-stationary-set-calculus"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Lemma 17.26 and Theorem 17.27 pp.362–363
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, if kappa is weakly compact and S is stationary in kappa, then S reflects to some uncountable regular cardinal rho<kappa: S intersect rho is stationary in rho. Consequently kappa is Mahlo and the inaccessible cardinals below kappa form a stationary set.

## Facts & Assumptions

**Given:** ZFC. Added the actual stationary-calculus supplier, built the restriction tree of regressive injections with all level bounds, then derived regular reflection, Mahloness and stationary inaccessibles.

[F1] [[def-lc-weakly-compact-cardinal]]: Kappa is inaccessible and has the tree property.

[F2] [[lem-lc-nonreflection-regressive-injection]]: A set of infinite cardinals with no regular stationary initial segment has a regressive injection.

[F3] [[lem-lc-inaccessible-size-and-rank-bounds]]: There is a club of infinite strong-limit cardinals, and small powers below kappa remain small.

[F4] [[thm-fodor-pressing-down]]: A regressive map on a stationary subset of regular uncountable kappa has a stationary fibre.

[F5] [[def-axiom-of-choice]]: AC propagates from the injection lemma, cardinal estimates and Fodor.

[F6] [[prop-basic-stationary-set-calculus]]: Clubs are stationary, stationary sets are unbounded, and intersection with a club preserves stationarity.

## Proof

1.1 Suppose, towards a contradiction, that S has no stationary initial segment at an uncountable regular rho<kappa. By F3 choose a club C of infinite strong-limit cardinals below kappa. Then A=S intersect C is a stationary set of infinite cardinals by F6. For each alpha<kappa, A intersect alpha satisfies F2's hypotheses: below kappa its initial segments are subsets of the assumed nonstationary S initial segments, and at any regular rho>=kappa it is bounded, hence nonstationary by F6. Thus every A intersect alpha admits a regressive injection. [F1, F2, F3, F6]

2.1 At level alpha take all pairs (alpha,f), where f is an injective regressive function on A intersect alpha with values in alpha. This level is nonempty by step 1.1; at alpha=0 it contains the empty function. Its size is at most $2^{|\alpha\times\alpha|}<\kappa$ by F3 (the finite cases also satisfy the bound). Order nodes by restriction at earlier levels. Restrictions remain injective and regressive and have values in the earlier alpha because f(beta)<beta, so every node has the required full chain of predecessors. This is a kappa-tree. F1 supplies a cofinal branch whose union is a regressive injection on A. F4 makes some fibre stationary, whereas injectivity makes it have at most one element, impossible by F6. This contradiction proves reflection for every S. The argument retains F5 through its cited suppliers. [F1, F3, F4, F5, F6, step 1.1]

3.1 Let D be any club in kappa. It is stationary by F6, so step 2.1 gives an uncountable regular rho<kappa with D intersect rho stationary, hence unbounded in rho. Since D is closed and rho is a nonzero limit ordinal, rho belongs to D. Therefore every club meets the uncountable regular cardinals below kappa, proving Mahloness under F1's inherited definition. Finally intersect this stationary set with the strong-limit club C from F3. Every element of the intersection is uncountable, regular and strong limit, hence inaccessible, and the intersection is stationary by F6. This proves the last assertion. [F1, F3, F6, step 2.1] ∎
