---
id: "prop-naturality-of-the-de-rham-map"
kind: "proposition"
title: "Naturality of the de Rham map"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-the-de-rham-map-on-cohomology-is-well-defined","prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","def-de-rham-integration-cochain-map"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For every smooth map $F:M\to N$ between smooth manifolds, possibly with boundary, integration satisfies
$$I_M^k(F^*\omega)=F^*I_N^k(\omega)\qquad(\omega\in\Omega^k(N)).$$
On the right, $F^*$ is precomposition with the smooth singular chain map $F_\#$. For closed forms this identity induces
$$I_M\circ F^*=F^*\circ I_N:H^k_{\mathrm{dR}}(N)\longrightarrow H_\infty^k(M;\mathbb R).$$
Both identities hold in every degree and need no choice assumption.

## Facts & Assumptions

[F1] [[thm-the-de-rham-map-on-cohomology-is-well-defined]] supplies the induced integration map and its representative formula.

[F2] [[prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps]] defines $F_\#\sigma=F\circ\sigma$ and the cochain and cohomology pullbacks by precomposition, including boundary targets.

[F3] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] gives functorial form pullback and its well-defined quotient map for both boundaryless and boundary manifolds.

[F4] [[def-de-rham-integration-cochain-map]] defines the integration cochain on each simplex and by finite sums on chains.

## Proof

**Given:** A smooth map $F:M\to N$, an integer $k\ge0$ and a smooth $k$-form $\omega$ on $N$.

1.1 Let $\sigma$ be a smooth singular $k$-simplex in $M$. By [F2], $F\circ\sigma$ is a smooth simplex in $N$: composing $F$ with one target-valued neighbourhood extension of $\sigma$ supplies its extension. Functoriality in [F3] on that domain gives $\sigma^*(F^*\omega)=(F\circ\sigma)^*\omega$ along the simplex. Their affine coefficients, and therefore their integrals in [F4], are identical. Hence $$I_M^k(F^*\omega)(\sigma)=\int_\sigma F^*\omega=\int_{F\circ\sigma}\omega=I_N^k(\omega)(F_\#\sigma)=\bigl(F^*I_N^k(\omega)\bigr)(\sigma).$$ [F2, F3, F4, given]

2.1 Every chain is a finite linear combination of simplices, so step 1.1 gives equality of the two cochains. If $d\omega=0$, both sides represent cohomology classes by [F1]–[F3]. Passing to those classes yields $$I_M([F^*\omega])=[F^*I_N^k(\omega)]=F^*I_N([\omega]).$$ Changing $\omega$ by $d\eta$ changes its pullback by $dF^*\eta$ and its integration cochain by $\delta I_N^{k-1}(\eta)$; precomposition carries the latter to $\delta F^*I_N^{k-1}(\eta)$. Thus the identity is independent of representatives on both routes. [F1, F2, F3, step 1.1]

3.1 In degree zero step 1.1 is the equality $(\omega\circ F)(\sigma(v_0))=\omega(F(\sigma(v_0)))$. In degree one it equates the pullback integrals on the entire closed parameter interval, with no requirement on distinct endpoints. Constant and degenerate simplices, maps wholly into a boundary, and zero forms satisfy the same coefficient identity. Negative degrees have zero source, and an empty source manifold has zero target cochain groups; an empty target admits such a map only from an empty source. All formulas are defined on each supplied simplex and finite chain, so no choices of representatives or extensions are made simultaneously. [F2, F3, F4, step 1.1, step 2.1] ∎
