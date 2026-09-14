---
id: thm-reflexive-spaces-have-rnp
kind: theorem
title: "Reflexive spaces have the Radon--Nikodym property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-hahn-banach-dominated-extension, thm-complex-hahn-banach-norm-preserving-extension, def-reflexive-banach-space, def-separable-space, lem-rnp-is-separably-determined, lem-rnp-is-invariant-under-banach-space-isomorphism, thm-separable-dual-spaces-have-rnp, thm-closed-subspaces-of-reflexive-spaces-are-reflexive, cor-relative-hahn-banach-bidual-isometry]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Corollary 2.11, printed pp. 41--42"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. Every real or complex reflexive Banach space has
the Radon--Nikodym property.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] AC implies Countable Choice and proves the real dominated Hahn--Banach
principle; the complex norm-preserving extension theorem supplies the complex
instances
([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]],
[[thm-hahn-banach-dominated-extension]],
[[thm-complex-hahn-banach-norm-preserving-extension]]).

[L2] Under relative Hahn--Banach, closed subspaces of reflexive Banach spaces
are reflexive ([[thm-closed-subspaces-of-reflexive-spaces-are-reflexive]]) and
the canonical map into the bidual is an isometry
([[cor-relative-hahn-banach-bidual-isometry]]).

[L3] Under AC, a norm-separable dual Banach space has RNP
([[thm-separable-dual-spaces-have-rnp]]), and RNP is invariant under Banach
space isomorphism ([[lem-rnp-is-invariant-under-banach-space-isomorphism]]).

[L4] Under AC, a Banach space has RNP exactly when all its closed separable
subspaces have RNP ([[lem-rnp-is-separably-determined]]).

[L5] Reflexivity is surjectivity of the canonical evaluation map
([[def-reflexive-banach-space]]), while separability means the existence of an
at most countable norm-dense subset ([[def-separable-space]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a reflexive Banach space $X$.

1.1 Discharge the choice hypotheses of the reflexivity suppliers. By [L1], AC supplies Countable Choice and every instance of the relative Hahn--Banach principle used below. [given, A1, L1]

2.1 Reduce to one closed separable subspace. Let $Y\subseteq X$ be an arbitrary closed separable linear subspace. By [L2], $Y$ is a reflexive Banach space. Thus its canonical map $J_Y:Y\to Y^{**}$ is onto by [L5] and is an isometry by [L2]. [given, L2, L4, step 1.1]

3.1 Exhibit the bidual as a separable dual space. Choose an at most countable norm-dense subset $D\subseteq Y$. The image $J_Y[D]$ is at most countable and is dense in $Y^{**}$: if $\Phi=J_Yy$ and $d\in D$ approximates $y$, then $\|\Phi-J_Yd\|=\|y-d\|$. Hence $Y^{**}=(Y^*)^*$ is a norm-separable dual Banach space. Moreover $J_Y$ is a bounded linear bijection with bounded inverse, indeed an isometry. [L2, L5, step 2.1]

4.1 Transfer RNP from the bidual back to the subspace. The separable-dual theorem [L3] gives RNP to $Y^{**}$. Isomorphism invariance along $J_Y$ then gives RNP to $Y$. [A1, L3, step 3.1]

5.1 Apply separable determination. The closed separable subspace $Y$ was arbitrary, so every closed separable subspace of $X$ has RNP. The reverse implication in [L4] therefore gives RNP to $X$. [A1, L4, step 2.1, step 4.1]

6.1 Record the scope and degenerate cases. [A1, step 1.1, step 3.1, step 5.1] If $X=\{0\}$, its sole closed subspace, bidual, vector measures, and densities are zero, so the same proof applies. A zero subspace has the singleton dense set and its canonical map is the zero bijection. The argument works in both scalar fields because [L2] and [L3] do. AC is used exactly to supply relative Hahn--Banach and Countable Choice in steps 1.1--3.1 and through the two RNP suppliers [L3]--[L4]. No dual-reflexivity theorem or unstated canonical-map isometry is used. [A1, step 1.1, step 3.1, step 5.1] ∎