---
id: lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets
kind: lemma
title: "A C^1 diffeomorphism maps Lebesgue null sets to Lebesgue null sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-one-map-and-local-inverse, thm-lipschitz-images-of-null-sets-in-rn-are-null, thm-finite-and-countable-subadditivity-of-measures]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.47"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $U,V \subseteq \mathbb R^n$ be open and let $T : U \to V$ be a
$C^1$ diffeomorphism. If $N \subseteq U$ is Lebesgue null, then $T(N)$ is
Lebesgue null.

## Facts & Assumptions

**Given:** Open sets $U,V \subseteq \mathbb R^n$, a $C^1$ diffeomorphism $T : U \to V$, and a null set $N \subseteq U$.

[L1] Lipschitz self-maps of Euclidean space send null sets to null sets. ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]])

[L2] Lebesgue measure is countably subadditive. ([[thm-finite-and-countable-subadditivity-of-measures]])

[A1] There are closed cubes $Q_j \subseteq U$ with $\bigcup_j Q_j=U$ such that for each $j$ there is a Lipschitz map $S_j:\mathbb R^n\to\mathbb R^n$ agreeing with $T$ on $Q_j$. This is the standard cube-and-clamp construction: choose an open cube whose closure still lies in $U$, use continuity of $DT$ there to get a derivative bound and hence a Lipschitz bound on that cube, then compose $T$ with the coordinatewise clamp onto the cube to obtain a global Lipschitz extension.

## Proof

**Proof technique:** direct.

1.1 Write $N=\bigcup_{j \ge 1}(N \cap Q_j)$ using [A1]. Each set $N \cap Q_j$ is null, and the global Lipschitz extension $S_j$ from [A1] agrees with $T$ on $Q_j$. Therefore [L1] gives $$\lambda_n(T(N \cap Q_j))=\lambda_n(S_j(N \cap Q_j))=0$$ for every $j$. [A1, L1]

2.1 Since $T(N)=\bigcup_{j \ge 1} T(N \cap Q_j)$, [L2] implies $$\lambda_n(T(N)) \le \sum_{j \ge 1} \lambda_n(T(N \cap K_j)) = 0.$$ Hence $T(N)$ is Lebesgue null. [L2, step 1.1] ∎
