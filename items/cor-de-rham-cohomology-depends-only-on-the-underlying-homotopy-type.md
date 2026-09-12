---
id: "cor-de-rham-cohomology-depends-only-on-the-underlying-homotopy-type"
kind: "corollary"
title: "De Rham cohomology depends only on the underlying homotopy type"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology","cor-singular-cohomology-is-homotopy-invariant","thm-de-rham-cohomology-is-smooth-homotopy-invariant","lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds","def-countable-choice"]
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

Assume $\mathrm{AC}_\omega$. Homotopy-equivalent underlying spaces of smooth manifolds, possibly with boundary, have isomorphic real de Rham cohomology groups in every degree. In particular this holds for homeomorphic underlying spaces. A specified continuous homotopy equivalence $f:M\to N$ induces the comparison-transported isomorphism $T_f=J_M^{-1}f^*_{\mathrm{sing}}J_N$. When $f$ is smooth, this is its usual de Rham pullback. For smooth homotopies the resulting equality of endpoint maps agrees with the direct de Rham homotopy formula.

## Facts & Assumptions

[F1] [[cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology]] gives the degreewise natural linear isomorphisms $J_M$, with smooth-map naturality and boundary manifolds included.

[F2] [[cor-singular-cohomology-is-homotopy-invariant]] proves that homotopic continuous maps induce equal real singular cohomology maps and that a supplied homotopy equivalence gives inverse pullbacks.

[F3] [[thm-de-rham-cohomology-is-smooth-homotopy-invariant]] proves the direct smooth-homotopy-equivalence result in the earlier boundaryless de Rham theory.

[F4] [[lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds]] gives $H_1^*-H_0^*=dL_H+L_Hd$ in the locally extendible boundary convention.

[F5] [[def-countable-choice]] is the assumption inherited by [F1].

## Proof

**Given:** A continuous homotopy equivalence $f:M\to N$ of the underlying spaces, with a supplied inverse $g:N\to M$ and the two continuous inverse homotopies, and $\mathrm{AC}_\omega$.

1.1 Define $T_f=J_M^{-1}f^*_{\mathrm{sing}}J_N$ and $T_g=J_N^{-1}g^*_{\mathrm{sing}}J_M$. These are linear maps in the required contravariant directions by [F1] and [F2]. Cancelling the adjacent comparisons and applying [F2] gives $$T_fT_g=J_M^{-1}(gf)^*_{\mathrm{sing}}J_M=1,\qquad T_gT_f=J_N^{-1}(fg)^*_{\mathrm{sing}}J_N=1.$$ Thus $T_f$ is an isomorphism in every degree with the displayed inverse. A homeomorphism and its actual inverse meet the hypothesis with constant inverse homotopies. [F1, F2, F5, given]

2.1 For any two homotopic continuous maps $f_0,f_1:M\to N$, [F2] gives $f_0^*{}_{\mathrm{sing}}=f_1^*{}_{\mathrm{sing}}$, hence $T_{f_0}=T_{f_1}$ by the same conjugation formula. If $f$ is smooth, the naturality equation $J_M f^*_{\mathrm{dR}}=f^*_{\mathrm{sing}}J_N$ in [F1] gives $T_f=f^*_{\mathrm{dR}}$ after applying $J_M^{-1}$. No pullback of a form by a merely continuous map has been defined. [F1, F2, step 1.1]

3.1 For a smooth homotopy $H$ and a closed form $\omega$, [F4] gives the actual exact-form identity $H_1^*\omega-H_0^*\omega=d(L_H\omega)$, so the usual endpoint pullbacks are equal on de Rham cohomology. By step 2.1 these usual pullbacks are exactly the transported endpoint maps. Thus the direct homotopy-operator equality and the comparison-transported equality concern the same maps. On boundaryless smooth homotopy equivalences this also recovers [F3], and on boundary manifolds [F4] supplies the direct formula for smooth homotopies. Merely continuous inverse homotopies are handled only by the singular comparison in steps 1.1--2.1; no smooth pullback or direct de Rham homotopy formula is asserted for them. [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 A homotopy equivalence with an empty space forces both spaces empty, so both maps in step 1.1 are the maps on zero groups. Degree zero, degree one, dimension-zero manifolds, negative degrees and the top form degree are included in [F1] and [F2]. Constant homotopies and both time endpoints are included in [F4]. The only choice use is that of [F5] in the global comparisons [F1]; [F2] and [F4] themselves are choice-free, and the inverse in step 1.1 uses the supplied $g$ and unique inverses of isomorphisms. [F1, F2, F4, F5, step 1.1, step 2.1, step 3.1] ∎
