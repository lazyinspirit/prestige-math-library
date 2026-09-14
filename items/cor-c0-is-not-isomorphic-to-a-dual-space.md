---
id: cor-c0-is-not-isomorphic-to-a-dual-space
kind: corollary
title: "$c_0$ is not isomorphic to a dual space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-c-zero-and-ell-infinity, lem-finite-truncations-are-dense-in-c0-and-ell-one, def-separable-space, lem-countable-iff-surjection-from-n, thm-rationals-countable, lem-q-and-irrationals-dense-r, thm-product-of-countable, thm-countable-union-of-countable, def-topological-isomorphism-of-normed-spaces, lem-rnp-is-invariant-under-banach-space-isomorphism, thm-separable-dual-spaces-have-rnp, thm-c0-fails-the-radon-nikodym-property]
justified_by: []
forward_refs: []
aliases: []
landmark: false
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
      locator: "Chapter 2, Corollary 2.11 and remarks following it, printed pp. 41--42"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. Over either $\mathbb R$ or $\mathbb C$, the Banach
space $c_0$ is not topologically isomorphic to the continuous dual of any
normed space.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]), hence so does
Countable Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[L1] The finite truncations of every $c_0$ sequence converge in the supremum
norm ([[def-c-zero-and-ell-infinity]],
[[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[L2] Rational finite spans are countable under Countable Choice
([[lem-countable-iff-surjection-from-n]], [[thm-rationals-countable]],
[[thm-product-of-countable]], [[thm-countable-union-of-countable]]), the
rationals are dense in the reals ([[lem-q-and-irrationals-dense-r]]), and a
space with a countable dense subset is separable ([[def-separable-space]]).

[L3] A topological isomorphism is a bounded linear bijection with bounded
inverse, and RNP is invariant under such isomorphisms between Banach spaces
([[def-topological-isomorphism-of-normed-spaces]],
[[lem-rnp-is-invariant-under-banach-space-isomorphism]]).

[L4] Under AC every norm-separable dual space has RNP
([[thm-separable-dual-spaces-have-rnp]]), whereas $c_0$ fails RNP
([[thm-c0-fails-the-radon-nikodym-property]]).

## Proof

**Proof technique:** direct.

**Given:** AC and $\mathbb K=\mathbb R$ or $\mathbb C$.

1.1 Exhibit a countable dense subset of $c_0(\mathbb K)$. Let $\mathbb K_0=\mathbb Q$ in the real case and $\mathbb K_0=\mathbb Q+i\mathbb Q$ in the complex case, and let $D$ be the set of sequences with finite support and all coordinates in $\mathbb K_0$. For each support contained in $\{0,\ldots,N\}$ its members form a finite product of a countable set; [L2], followed by the countable union over $N$, makes $D$ countable. Given $x\in c_0$ and $\varepsilon>0$, [L1] gives a finite truncation within $\varepsilon/2$ of $x$. Approximate its finitely many real coordinates, or both real and imaginary parts, by elements of $\mathbb Q$ within $\varepsilon/2$ in the maximum norm. The resulting member of $D$ is within $\varepsilon$ of $x$. Thus $D$ is dense and $c_0$ is norm separable. [given, A1, L1, L2, construct]

2.1 Transfer separability to a hypothesized dual. Suppose toward a contradiction that a topological isomorphism $T:Y^*\to c_0$ exists for some normed space $Y$. Since $T^{-1}$ is continuous, $T^{-1}(D)$ is countable. It is dense in $Y^*$: for a nonempty norm-open set $U\subseteq Y^*$, the homeomorphism $T$ makes $T(U)$ a nonempty open subset of $c_0$, which meets $D$, and hence $U$ meets $T^{-1}(D)$. Therefore $Y^*$ is norm separable. [L2, L3, step 1.1]

3.1 Derive the RNP contradiction. By [L4], AC and norm separability give RNP to the dual $Y^*$. Isomorphism invariance [L3] then gives RNP to $c_0$, contradicting the second assertion of [L4]. Hence no such $Y$ and $T$ exist. [A1, L3, L4, step 2.1]

4.1 Close the scalar and degenerate cases. [A1, L1, L2, L3, L4, step 1.1, step 3.1] The Gaussian-rational choice in step 1.1 handles the complex norm without restricting scalars, and the real case uses ordinary rationals. The space $c_0$ is nonzero, so it cannot be isomorphic to the zero dual; if $Y^*=\{0\}$, the hypothesized bijection already fails. AC is used in [L4] and supplies the countability principles invoked in step 1.1. [A1, step 3.1] ∎