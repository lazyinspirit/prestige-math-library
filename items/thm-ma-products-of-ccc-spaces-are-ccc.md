---
id: thm-ma-products-of-ccc-spaces-are-ccc
kind: theorem
title: Under MA(aleph_1), arbitrary products of ccc spaces are ccc
status: published
origin: pipeline
deps: [def-martins-axiom, def-countable-chain-condition, def-product-topology, thm-regular-uncountable-finite-delta-system, def-axiom-of-choice]
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
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 7.8 and Lemma 7.9", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, $\mathrm{MA}(\aleph_1)$ implies the product of two ccc spaces is ccc and consequently every product of ccc spaces is ccc.

## Facts & Assumptions

**Given:** AC and $\mathrm{MA}(\aleph_1)$.

[F1] [[def-countable-chain-condition]] gives the topological and open-set form of ccc.

[F2] [[def-product-topology]] gives finite-support basic open rectangles.

[F3] [[thm-regular-uncountable-finite-delta-system]] thins their supports.

[F4] [[def-martins-axiom]] is used through the standard consequence that every ccc order is Knaster.

## Proof

1.1 To prove the Knaster consequence, let $\{p_\alpha:\alpha<\omega_1\}$ lie in a ccc order. Some $p_*$ has the property that every extension of $p_*$ is compatible with uncountably many $p_\alpha$. Otherwise, for each $\alpha$ choose $q_\alpha\le p_\alpha$ compatible with only countably many of the $p_\beta$, and choose a bound $b_\alpha<\omega_1$ above all their indices. Recursively select $\alpha_\xi$ above every earlier $b_{\alpha_\eta}$. Then for $\eta<\xi$, $q_{\alpha_\eta}$ is incompatible with $p_{\alpha_\xi}$ and hence with $q_{\alpha_\xi}$, producing an uncountable antichain, contrary to ccc. Below $p_*$, each $$D_\xi=\{q:\exists\alpha\ge\xi, q\le p_\alpha\}$$ is dense open. Let an MA filter meet all $D_\xi$. For each $\xi$, select $q_\xi$ in the filter and $\alpha_\xi\ge\xi$ with $q_\xi\le p_{\alpha_\xi}$. The indices $\alpha_\xi$ are unbounded, hence yield uncountably many distinct $p_{\alpha_\xi}$; any two are compatible because directedness gives a common extension of their corresponding $q_\xi$. Thus the order is Knaster. [F4]

2.1 Given uncountably many nonempty rectangles $U_\alpha\times V_\alpha$ in $X\times Y$, order the nonempty open subsets of $X$ by reverse inclusion. step 1.1 thins the $U_\alpha$ to an uncountable pairwise-intersecting family. Since $Y$ is ccc, two corresponding $V_\alpha,V_\beta$ intersect; the two rectangles then intersect. Thus binary, and by induction every finite, product is ccc. [F1, step 1.1]

3.1 In an arbitrary product, refine an alleged uncountable disjoint family to basic opens with finite supports. If one support occurs uncountably often, those opens project to an uncountable family in its finite ccc product; two projections intersect, and the corresponding basic opens intersect. Otherwise thin to $\omega_1$ opens with pairwise distinct finite supports, as required by F3, and apply F3 to obtain a delta system with finite root $r$. Their root projections form an uncountable family in the finite product over $r$, which is ccc by step 2.1, so two root projections intersect. Outside $r$ their supports are disjoint; choose points in their finitely many constrained coordinates and use an AC-chosen base point in every remaining nonempty factor to obtain a point in both basic opens, contradiction. AC supplies that base point as well as the refinements and thinning. If a factor is empty, the whole product is empty and hence ccc. [F2, F3, step 2.1] ∎
