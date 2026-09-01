---
id: thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
kind: theorem
title: "Inverse limits of finite discrete groups are Hausdorff and totally disconnected, and compact assuming Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup, thm-tychonoff, def-compact-space, def-hausdorff-space, lem-products-preserve-t0-t1-and-hausdorff, thm-closed-subspace-of-a-compact-space-is-compact, def-inverse-limit-topology-for-finite-discrete-groups, lem-finite-choice]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

An inverse limit of finite discrete groups is Hausdorff and totally
disconnected. Assuming the Axiom of Choice, it is also compact.

## Facts & Assumptions

**Given:** An inverse system of finite discrete groups and its inverse limit $L$; for the compactness clause, also the Axiom of Choice.

[L1] The inverse limit is a closed topological subgroup of the ambient product ([[lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup]]).

[F1] Assuming the Axiom of Choice, arbitrary products of compact spaces are compact ([[thm-tychonoff]]).

[F2] Compactness and Hausdorffness are the usual topological notions ([[def-compact-space]], [[def-hausdorff-space]]).

[L2] Arbitrary products of Hausdorff spaces are Hausdorff ([[lem-products-preserve-t0-t1-and-hausdorff]]).

[L3] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[L4] Traces of finite-coordinate cylinders form a basis for the inverse-limit topology ([[def-inverse-limit-topology-for-finite-discrete-groups]]).

[F3] Finite choice is available in ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Every finite discrete group $G_i$ is Hausdorff because distinct points have disjoint singleton neighbourhoods. It is compact because an open cover has one member containing each point and [F3] makes those finitely many choices; the selected family is a finite subcover. [F2, F3, given]

2.1 By [L2] and step 1.1, the full product is Hausdorff. Intersecting two disjoint ambient neighbourhoods with $L$ shows directly that the subspace $L$ is Hausdorff. Under the Axiom of Choice, [F1] and step 1.1 make the product compact; since $L$ is closed by [L1], [L3] makes $L$ compact. [F1, L1, L2, L3, step 1.1, given]

3.1 By [L4], fixing finitely many coordinates gives a neighbourhood basis in $L$. Because every factor is discrete, each such cylinder trace is clopen. In particular, for $x\in L$ and an index $i$, the set $$C_i(x):=\{z\in L:z_i=x_i\}$$ is clopen. [L4, step 2.1, given]

4.1 If a connected subset $C\subseteq L$ contained distinct points $x\ne y$, they would differ in some coordinate $i$. Then $C\cap C_i(x)$ and $C\setminus C_i(x)$ would be disjoint nonempty subsets that are both open and closed in $C$, a contradiction. Hence every nonempty connected subset of $L$ is a singleton, so $L$ is totally disconnected. [step 3.1, contradiction: connected sets cannot be split by a clopen separation] ∎
