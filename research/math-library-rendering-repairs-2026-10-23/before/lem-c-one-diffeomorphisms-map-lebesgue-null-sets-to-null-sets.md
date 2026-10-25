---
id: lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets
kind: lemma
title: "A C^1 diffeomorphism maps Lebesgue null sets to Lebesgue null sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-one-map-and-local-inverse, thm-lipschitz-images-of-null-sets-in-rn-are-null, thm-lebesgue-null-agrees-with-elementary-nullity-in-rn, thm-finite-and-countable-subadditivity-of-measures, def-countable-choice, thm-rationals-countable]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.47"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $U,V \subseteq \mathbb R^n$ be open and let $T : U \to V$ be a
$C^1$ diffeomorphism. If $N \subseteq U$ is Lebesgue null, then $T(N)$ is
Lebesgue null.

## Facts & Assumptions

**Given:** Countable Choice, open sets $U,V \subseteq \mathbb R^n$, a $C^1$ diffeomorphism $T : U \to V$, and a Lebesgue null set $N \subseteq U$.

[L1] Lipschitz self-maps of Euclidean space send closed-cube-cover null sets to closed-cube-cover null sets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]).

[L2] Under Countable Choice, a subset of $\mathbb R^n$ is Lebesgue null exactly when it is null in this closed-cube-cover sense ([[thm-lebesgue-null-agrees-with-elementary-nullity-in-rn]], [[def-countable-choice]]).

[L3] Lebesgue measure is countably subadditive ([[thm-finite-and-countable-subadditivity-of-measures]]).

[A1] The rational closed cubes of positive side length lying in $U$ form a countable family and their interiors cover $U$ ([[thm-rationals-countable]]). For each such cube $Q$, continuity of $DT$ bounds its derivative on the compact convex cube, so the mean-value inequality makes $T|_Q$ Lipschitz. The coordinatewise clamp $r_Q:\mathbb R^n\to Q$ is $1$-Lipschitz; hence $S_Q=T\circ r_Q$ is a global Lipschitz extension agreeing with $T$ on $Q$. These formulas define the extensions from the cubes without a countable selection.

## Proof

**Proof technique:** direct.

1.1 Enumerate the rational cubes of [A1] as $(Q_j)$ and write $N=\bigcup_j(N\cap Q_j)$. By [L2], each $N\cap Q_j$ is closed-cube-cover null. The global Lipschitz extension $S_{Q_j}$ from [A1] agrees with $T$ on $Q_j$, so [L1] makes $S_{Q_j}(N\cap Q_j)=T(N\cap Q_j)$ closed-cube-cover null. Applying [L2] again shows that each image is Lebesgue null. [A1, L1, L2]

2.1 Since $T(N)=\bigcup_j T(N \cap Q_j)$, [L3] implies $$\lambda_n(T(N)) \le \sum_j \lambda_n(T(N \cap Q_j)) = 0.$$ Hence $T(N)$ is Lebesgue null. [L3, step 1.1] ∎
