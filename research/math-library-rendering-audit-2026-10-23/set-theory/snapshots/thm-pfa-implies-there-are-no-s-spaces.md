---
id: thm-pfa-implies-there-are-no-s-spaces
kind: theorem
title: PFA implies there are no S-spaces
status: published
origin: pipeline
deps:
  - thm-pfa-implies-the-simple-ideal-dichotomy
  - lem-regular-nonhereditarily-lindelof-space-yields-ideal-witness
  - def-set-theoretic-l-and-s-spaces
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contradiction
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Abraham, Lecture notes on the P-ideal dichotomy, Theorem 1.5 and complete proof, rendered lines 208–226"
      url: https://paperzz.com/doc/7877075/lecture-notes-on-the-p-ideal-dichotomy
    - title: "Moore, A solution to the L space problem, Theorem 7.5, printed p. 22"
      url: https://arxiv.org/pdf/math/0501524
---

## Statement

Under PFA, every regular Hausdorff hereditarily separable space is
hereditarily Lindelöf.  Consequently no S-space exists.

## Facts & Assumptions

**Given:** ZFC plus PFA and a regular Hausdorff hereditarily separable space $X$.

[F1] [[lem-regular-nonhereditarily-lindelof-space-yields-ideal-witness]] turns failure of hereditary Lindelöfness into a right-separated subspace $S$, an $\omega_1$-generated ideal $\mathcal I$, and proves that every uncountable inside or outside witness is a nonseparable subspace.

[F2] PFA gives an uncountable inside or outside witness for every such ideal ([[thm-pfa-implies-the-simple-ideal-dichotomy]]).

[F3] [[def-set-theoretic-l-and-s-spaces]] defines hereditary separability and hereditary Lindelöfness over all subspaces, and defines an S-space as regular Hausdorff, hereditarily separable, and not Lindelöf.

[F4] [[def-axiom-of-choice]] is the ambient axiom used by both witness suppliers; this assembly makes no additional selection.

## Proof

**Proof technique:** contradiction.

1.1 Assume for contradiction that $X$ is not hereditarily Lindelöf.  By [F1] it has a subspace $S$ and an $\omega_1$-generated ideal $\mathcal I$ of countable subsets of $S$ with the stated witness properties. [F1, F3, assume-contra]

2.1 By [F2], some uncountable $D\subseteq S$ is inside or outside $\mathcal I$.  In either case [F1] says that $D$, with its subspace topology, is nonseparable. [F1, F2, step 1.1]

3.1 But $D$ is also a subspace of $X$, so hereditary separability of $X$ says that $D$ is separable, contradicting step 2.1.  Therefore $X$ is hereditarily Lindelöf. [F3, step 2.1, contradiction]

4.1 If an S-space existed, [F3] would make it regular Hausdorff and hereditarily separable, so step 3.1 would make it hereditarily Lindelöf and hence Lindelöf.  This contradicts the defining non-Lindelöf clause.  Thus no S-space exists under PFA.  No empty or singleton space can be an S-space because both are Lindelöf; the uncountable witness in step 2.1 is nonempty; and [F4] propagates the exact AC uses of [F1] and [F2]. [F3, F4, step 3.1, discharge-contradiction] ∎
