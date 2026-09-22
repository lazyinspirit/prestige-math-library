---
id: thm-a-transverse-banach-bundle-section-has-a-split-zero-submanifold
kind: theorem
title: A transverse Banach bundle section has a split zero submanifold
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-smooth-banach-vector-bundle-and-section, thm-regular-value-theorem-for-banach-manifolds, def-split-banach-submanifold, def-axiom-of-choice, def-countable-base-banach-manifold-and-smooth-map, def-tangent-space-and-differential-on-a-banach-manifold, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, def-complemented-subspace, lem-banach-manifold-differentials-are-chart-independent]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.12"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\pi : \mathcal E \to M$
be a smooth Banach vector bundle over a Banach manifold $M$
([[def-smooth-banach-vector-bundle-and-section]]), assume that the specified
smooth atlas of $M$ is maximal among compatible smooth charts, and let
$s : M \to \mathcal E$
be a smooth section which is **transverse to the zero section**, meaning that at
every zero $p$ of $s$ the vertical derivative
$D^vs(p) : T_pM \to \mathcal E_p$ is surjective with complemented kernel.
Then the zero set $s^{-1}(0)$ is a split smooth submanifold of $M$ and

$$T_p\bigl(s^{-1}(0)\bigr) = \ker D^vs(p) \qquad \text{for every } p \in s^{-1}(0).$$

## Facts & Assumptions

**Given:** AC, a smooth Banach vector bundle $\pi : \mathcal E \to M$, a maximal specified smooth atlas on $M$, and a smooth section $s$ whose vertical derivative is onto with complemented kernel at every zero.

[L1] The definition of the vertical derivative and its independence of the trivialization, including the transformation $D\sigma_\Psi(p) = g(p)D\sigma_\Phi(p)$ at a zero ([[def-smooth-banach-vector-bundle-and-section]]).

[L2] Regular value theorem for Banach manifolds ([[thm-regular-value-theorem-for-banach-manifolds]]), applied under the assumed AC and its maximal-domain-atlas hypothesis: a $C^k$ map, $k\ge1$ (including $k=\infty$), whose derivative at every point of a level set is onto with complemented kernel has that level set as a split $C^k$ submanifold with tangent equal to the kernel.

[L3] Split submanifolds and their local character ([[def-split-banach-submanifold]]); tangents of open subsets of a Banach space are identified with the model space ([[def-tangent-space-and-differential-on-a-banach-manifold]]); tensor and operator calculus as used for the transformation in [L1] ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]).



## Proof

**Proof technique:** direct.

1.1 Let $p$ be a zero of $s$ and let $\Phi$ be a smooth local trivialization over an open neighbourhood $U$ of $p$; then $\sigma:=\operatorname{pr}_2\circ\Phi\circ s:U\to F$ is smooth and $\sigma^{-1}(0)=s^{-1}(0)\cap U$. For every $q\in\sigma^{-1}(0)$, [L1] identifies $D\sigma(q):T_qU\to F$ with $D^vs(q)$ followed by the fibre isomorphism $\Phi_q:\mathcal E_q\to F$. Thus $D\sigma(q)$ is surjective with complemented kernel for every point of this local zero set. The atlas on $U$ formed by restrictions of charts of the maximal smooth atlas on $M$ is itself maximal: every compatible smooth chart on $U$ is also compatible with the atlas of $M$ (charts not meeting its domain are automatically compatible), and hence already belongs to that atlas. [L1, L3]

2.1 Apply [L2] with $k=\infty$ to the smooth map $\sigma:U\to F$ at the value $0$. The domain carries the maximal smooth atlas verified in [step 1.1], and every point of $\sigma^{-1}(0)$ has derivative onto with complemented kernel. Therefore $\sigma^{-1}(0)$ is a split smooth submanifold of $U$ and $T_q(\sigma^{-1}(0))=\ker D\sigma(q)$ for every $q\in\sigma^{-1}(0)$. [step 1.1, L2]

3.1 Since $U$ is open in $M$, the set $\sigma^{-1}(0) = s^{-1}(0) \cap U$ is a split submanifold of $M$ as well, with the same tangent spaces: splitness is local by [L3] and the local charts of $U$ are charts of $M$. [step 2.1, L3]

4.1 The zeros of $s$ are covered by such neighbourhoods $U$ as $p$ ranges over $s^{-1}(0)$; by [step 3.1] each point of $s^{-1}(0)$ has a split chart in $M$, so $s^{-1}(0)$ is a split smooth submanifold of $M$. [step 3.1, L3]

4.2 For the tangent description, fix a zero $p$ and two trivializations $\Phi$ over $U$ and $\Psi$ over $V$ with $p \in U \cap V$, and let $\sigma_\Phi, \sigma_\Psi$ be the corresponding local representatives; [L1] gives $D\sigma_\Psi(p) = g(p)D\sigma_\Phi(p)$, where $g(p)$ is the invertible fibre isomorphism of the cocycle. Hence the kernels of $D\sigma_\Psi(p)$ and $D\sigma_\Phi(p)$ coincide, and the kernel of $D^vs(p)$ is intrinsically characterised as the set of $\xi \in T_pM$ with $D\sigma_\Phi(p)\xi = 0$ for one, equivalently every, trivialization around $p$. [step 3.1, L1, L3]

5.1 Combining [step 2.1] with [step 4.2]: for a zero $p$, $T_p(s^{-1}(0)) = \ker D\sigma_\Phi(p) = \ker D^vs(p)$, the first equality because $\sigma^{-1}(0)$ is the zero set of the local representative and the tangent of a split submanifold is computed in its charts, the second by the trivialization-independence just proved. [step 2.1, step 4.2, L1, L3] ∎
