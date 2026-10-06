---
id: cor-a-proper-injective-immersion-is-an-embedding
kind: corollary
title: "A proper injective immersion is an embedding"
status: published
origin: session
dependency_level: 4
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [prop-a-proper-injective-immersion-is-a-smooth-embedding,
       lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m,
       def-smooth-embedding,
       def-immersion-submersion-and-constant-rank-map,
       def-countable-choice,
       def-compact-space,
       def-smooth-manifold,
       prop-smooth-maps-are-continuous,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2, 6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)"
      url: "https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf"
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1, article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems 2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only for the recorded knotting boundary"
      url: "https://arxiv.org/pdf/math/0604045"
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
---

## Statement

A proper injective immersion between smooth manifolds is a smooth embedding; this general criterion is choice-free. Assume $\mathrm{AC}_\omega$ for the following high-codimension consequences. If $f:M^m\to X^n$ is a proper self-transverse immersion with $n>2m$, then $f$ is a smooth embedding; if in addition $M$ is closed, self-transversality with $n>2m$ alone suffices, properness being automatic.

## Facts & Assumptions

**Given:** The published criterion for proper injective immersions, and (for the stated consequences) countable choice and a self-transverse immersion $f:M^m\to X^n$ with $n>2m$.

[F1] A proper injective immersion between smooth manifolds is a smooth embedding ([[prop-a-proper-injective-immersion-is-a-smooth-embedding]]).

[F2] A smooth embedding is an injective immersion that is a homeomorphism onto its image with the subspace topology ([[def-smooth-embedding]]); the phrase is therefore exactly what [F1] concludes for such a map ([[def-immersion-submersion-and-constant-rank-map]]).

[L1] A self-transverse immersion $f:M^m\to X^n$ with $n>2m$ has empty double point locus and is injective ([[lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m]]).

[L2] A compact subset of a Hausdorff space is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[L3] A closed subset of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L4] A smooth map of smooth manifolds is continuous ([[prop-smooth-maps-are-continuous]]).

[L5] A subset is compact when it is compact as a subspace in its own right ([[def-compact-space]]); a smooth manifold is in particular a Hausdorff topological manifold ([[def-smooth-manifold]]).

[A1] Countable choice is the hypothesis of [L1] and is inherited by the second and third sentences of the statement; the first sentence and the properness computation select nothing ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 The general criterion of [F1] is the published proposition cited in [F2]; its conclusion is precisely that a proper injective immersion satisfies the three clauses of [F2] and hence is a smooth embedding. [F1, F2]

1.2 Suppose $M$ is closed, that is, compact without boundary. Every compact subset $K\subseteq X$ is closed by [L2], since a smooth manifold is Hausdorff by [L5]; the preimage $f^{-1}(K)$ is closed in $M$ because $f$ is continuous by [L4], and a closed subset of the compact space $M$ is compact by [L3]. Hence preimages of compact sets under $f$ are compact, that is, $f$ is proper. [L2, L3, L4, L5, A1]

2.1 Assume $\mathrm{AC}_\omega$ and let $f:M^m\to X^n$ be a proper self-transverse immersion with $n>2m$. By [L1] the map $f$ is injective, and $f$ is an immersion and proper by hypothesis, so step 1.1 makes $f$ a smooth embedding. [L1, A1, step 1.1]

3.1 With $f$ now proper by step 1.2, injective by [L1] and an immersion by hypothesis, step 1.1 applies and shows that a self-transverse immersion $M^m\to X^n$ with $n>2m$ and closed $M$ is a smooth embedding, with no separate properness hypothesis. [L1, A1, step 2.1, step 1.2]

4.1 The three assertions of the statement are step 1.1, step 2.1 and step 3.1 respectively. [step 1.1, step 2.1, step 3.1] ∎
