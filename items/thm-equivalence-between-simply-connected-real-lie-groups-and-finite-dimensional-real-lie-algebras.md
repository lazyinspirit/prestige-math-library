---
id: thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras
kind: theorem
title: Equivalence of simply connected Lie groups and real Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-lie-second-fundamental-theorem, thm-lie-third-fundamental-theorem, def-countable-choice]
landmark: false
proof_strategy: categorical
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
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Corollary 3.39"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§3.8, Corollary 3.39, printed p. 39"
---

## Statement

Assume countable choice. The Lie functor from connected simply connected real
Lie groups to finite-dimensional real Lie algebras is an equivalence of
categories.

## Facts & Assumptions

**Given:** Countable choice.

[A1] Countable choice is [[def-countable-choice]].

[L1] If $G$ is connected and simply connected, every Lie-algebra homomorphism
$\operatorname{Lie}(G)\to\operatorname{Lie}(H)$ to the Lie algebra of a real
Lie group $H$ integrates uniquely to a Lie-group homomorphism $G\to H$
([[thm-lie-second-fundamental-theorem]]).

[L2] Every finite-dimensional real Lie algebra has a connected simply
connected integration ([[thm-lie-third-fundamental-theorem]]).

## Proof

**Proof technique:** verify essential surjectivity and full faithfulness.

1.1 By [L2], every object in the Lie-algebra category is isomorphic to the Lie algebra of an object in the group category. Thus the Lie functor is essentially surjective. [A1, L2]
1.2 For connected simply connected $G$ and any target $H$ in the group category, [L1] says differentiation maps smooth homomorphisms $G\to H$ bijectively onto Lie-algebra homomorphisms $\operatorname{Lie}(G)\to\operatorname{Lie}(H)$. Existence is fullness and uniqueness is faithfulness. [A1, L1]
2.1 Differentiation respects identities and composition by the chain rule, while uniqueness in [L1] shows that integration does too. Thus steps 1.1–1.2 give an equivalence. The one-point group and zero algebra correspond, so the zero-dimensional endpoint is included. Countable choice is inherited exactly through [L1] and [L2]. [A1, L1, L2, step 1.1, 1.2] ∎
