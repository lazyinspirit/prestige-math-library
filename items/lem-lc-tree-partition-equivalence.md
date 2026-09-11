---
id: "lem-lc-tree-partition-equivalence"
kind: "lemma"
title: "Tree and partition characterizations at an inaccessible"
deps: ["def-lc-weakly-compact-cardinal", "lem-lc-inaccessible-size-and-rank-bounds", "thm-transfinite-recursion", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Theorem 17.23 pp.356–358 and preceding linear-order/tree lemma
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, at an inaccessible kappa, the tree property is equivalent to $\kappa\longrightarrow(\kappa)^2_2$, and equivalent to $\kappa\longrightarrow(\kappa)^2_\mu$ for every nonzero cardinal $\mu<\kappa$.

## Facts & Assumptions

**Given:** ZFC. Replaced the scaffold insertion strategy by the explicit tree of coloring columns; verified lexicographic codes including limit splitting, and proved stabilization of small-level monotone projections.

[F1] [[def-lc-weakly-compact-cardinal]]: Tree property and the partition notation have their stated height, width and color conventions.

[F2] [[lem-lc-inaccessible-size-and-rank-bounds]]: Inaccessibility bounds each function level and provides regular small-union bounds.

[F3] [[thm-transfinite-recursion]]: Transfinite recursion forms the recursively specified increasing sequence.

[F4] [[def-axiom-of-choice]]: AC selects nodes at each level and well-orders each small level for the reverse coloring.

## Proof

1.1 Assume the tree property and fix $c:[\kappa]^2\to\mu$, where 0<mu<kappa. Form a tree whose alpha-level consists of the functions $c(\cdot,\beta)\restriction\alpha$ for alpha<=beta<kappa. Restriction to gamma<alpha is realized by the same beta, so these levels form a tree under proper extension, with heights exactly their domains. Each level is nonempty and has at most $\mu^{|\alpha|}<\kappa$ members by F2. Thus a cofinal branch yields a function $h:\kappa\to\mu$ whose every initial segment occurs in the tree. [F1, F2]

2.1 Recursively for xi<kappa let alpha_xi be the supremum of the ordinals beta_eta+1 for eta<xi (zero at xi=0). Regularity makes alpha_xi<kappa. Let beta_xi be the least beta>=alpha_xi realizing $h\restriction\alpha_\xi=c(\cdot,\beta)\restriction\alpha_\xi$; such beta exists by step 1.1. F3 gives this strictly increasing sequence. For eta<xi, $c(\beta_\eta,\beta_\xi)=h(\beta_\eta)$. One color is taken by h(beta_xi) for kappa many xi: otherwise the union of mu<kappa sets of size below kappa would have size below kappa by regularity and F2. The corresponding beta_xi form a homogeneous set of size kappa. This proves all the asserted nonzero-color arrows, in particular the two-color arrow. [F2, F3, step 1.1]

3.1 Conversely assume the two-color arrow and let T be a kappa-tree. By F4 choose t_alpha at each level alpha, and give each level an injective labeling into an ordinal of size below kappa. Code a node t of height alpha by the sequence of labels of its unique ancestor at each gamma<=alpha, including t itself at gamma=alpha. Two distinct nodes have distinct codes: if their heights differ and all common coordinates agree the shorter node is an ancestor; if heights coincide their own labels differ. Order codes lexicographically, with a proper prefix smaller. For distinct codes the first differing coordinate exists by ordinal well-ordering, unless one is a proper prefix. This gives a linear order: transitivity follows by comparing the earliest coordinate at which any of three codes differ, with an ended code considered smaller than every next label. Including each node's own level label distinguishes distinct nodes at a limit level even when all earlier ancestors coincide. [F1, F4, step 2.1]

4.1 Color alpha<beta by whether the code of t_alpha is smaller or larger than that of t_beta. A homogeneous H of size kappa gives a strictly monotone sequence of codes, indexed in the increasing order of H, which has order type kappa by regularity. Fix gamma<kappa and discard the bounded initial part at heights below gamma. Restriction of lexicographically ordered codes to the common length gamma+1 preserves their weak order, so their gamma-ancestor codes form a monotone sequence with fewer than kappa possible values. Such a sequence is eventually constant: for each value that occurs, take its first occurrence, and regularity bounds these fewer than kappa occurrence indices below some delta<kappa; after delta a change would either introduce a new value or revisit a departed value, the latter impossible for a monotone sequence. Let u_gamma be the eventual ancestor. For gamma<eta, a node sufficiently far out has both eventual ancestors u_gamma and u_eta, so u_gamma is the gamma-ancestor of u_eta. Thus the u_gamma form a cofinal branch. This proves the tree property and completes the equivalences. [F1, F2, F4, step 3.1] ∎
