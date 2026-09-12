---
id: "prop-compactly-supported-de-rham-cohomology-is-contravariant-for-proper-smooth-maps"
kind: "proposition"
title: "Compactly supported de Rham cohomology is contravariant for proper smooth maps"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-proper-smooth-maps-pull-back-compactly-supported-forms","thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","def-compactly-supported-de-rham-cochain-complex-and-cohomology"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For proper smooth maps of smooth manifolds, possibly with boundary, compactly supported de Rham cohomology is contravariant. A proper smooth map $F:M\to N$ induces a linear map
$$F_c^*:H_c^k(N)\longrightarrow H_c^k(M),\qquad F_c^*[\omega]=[F^*\omega],$$
with $(G\circ F)_c^*=F_c^*G_c^*$ and $(\operatorname{id}_M)_c^*=\operatorname{id}$ in every integer degree. Forgetting compact support commutes with these pullbacks. No choice axiom is required.

## Facts & Assumptions

[F1] [[prop-proper-smooth-maps-pull-back-compactly-supported-forms]] proves that proper smooth pullback preserves compact support, with the precise support containment.

[F2] [[thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology]] gives the ordinary boundaryless quotient pullback by the same formula.

[F3] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] gives linearity, $dF^*=F^*d$, composition and identity laws, and ordinary quotient pullbacks also at a boundary.

[F4] [[def-compactly-supported-de-rham-cochain-complex-and-cohomology]] defines $H_c^k$ and its compactly supported primitives.

## Proof

**Given:** Proper smooth $F:M\to N$ and $G:N\to P$, and closed compactly supported forms on their respective targets.

1.1 By [F1] and [F3], pullback restricts to a linear cochain map on compactly supported forms. If $\omega$ is closed, then $d(F^*\omega)=F^*(d\omega)=0$. If another compactly supported closed representative is $\omega+d\eta$ with $\eta$ compactly supported, [F1] makes $F^*\eta$ compactly supported and [F3] gives $$F^*(\omega+d\eta)-F^*\omega=d(F^*\eta).$$ Thus the displayed rule is independent of representatives in precisely the quotient [F4], and real linearity follows by applying linear pullback to linear combinations of representatives. [F1, F3, F4, given]

2.1 The identity map is proper since its inverse image of a compact set is that set. The composite $G\circ F$ is proper since $(G\circ F)^{-1}(K)=F^{-1}(G^{-1}(K))$, and each successive inverse image is compact by the respective hypothesis. Their smoothness and pullback equations follow from [F3]. On a representative class, $$ (G\circ F)_c^*[\omega]=[(G\circ F)^*\omega]=[F^*G^*\omega]=F_c^*G_c^*[\omega].$$ The identity equality follows from $\operatorname{id}^*\omega=\omega$. Step 1.1 makes these equalities well defined on every class, proving the claimed contravariant functor. [F1, F3, step 1.1, given]

2.2 Inclusion of compactly supported forms into all forms commutes with $d$ and sends every compactly supported primitive to an ordinary primitive. It therefore induces $j_M:H_c^k(M)\to H^k_{\mathrm{dR}}(M)$, without claiming that $j_M$ is injective. Both $j_MF_c^*[\omega]$ and $F^*j_N[\omega]$ are the ordinary class of the same form $F^*\omega$, with ordinary pullback supplied by [F2] in the boundaryless case and [F3] in the boundary case. Hence $j_MF_c^*=F^*j_N$. [F2, F3, F4, step 1.1]

3.1 Empty manifolds give zero cohomology. In degree zero no negative-degree primitive exists, and step 1.1 is ordinary composition of closed compactly supported functions. In degree one the changed representative uses a compactly supported function primitive; in top degree it still requires a compactly supported incoming primitive. Negative degrees are zero. Identity maps and constant maps are covered whenever they meet the stated properness hypothesis, and boundaries use [F3]. Only the given representatives and their given compact primitives occur, so there is no choice of a family of representatives or primitives and no AC. [F1, F3, F4, step 1.1, step 2.1, step 2.2] ∎
