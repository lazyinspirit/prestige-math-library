---
id: thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes
kind: theorem
title: Naturality, stability, and mod-two reduction of Pontryagin classes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-pontryagin-classes-by-complexification, thm-naturality-normalization-and-whitney-sum-for-chern-classes, thm-mod-two-reduction-of-chern-classes, thm-whitney-sum-formula-for-stiefel-whitney-classes, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the Chern-class and Stiefel-Whitney suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Milnor and Stasheff, Characteristic Classes, section 15"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Naturality, stability and mod 2 reduction of Pontryagin classes, printed pp.175-181"
---

## Statement

Assume AC. Let $E,F\to B$ be numerable real bundles over a path-connected CW
base (or CW-type base), and let $\rho_2$ denote reduction mod two. Then

1. **Naturality:** $p_i(f^*E)=f^*p_i(E)$ for every pullback;
2. **Stability:** $p_i(E\oplus\varepsilon^r)=p_i(E)$ for the trivial bundle
   $\varepsilon^r$, and $p_i(E)=0$ whenever $2i>\operatorname{rank}E$;
3. **Mod-two reduction:** $\rho_2p_i(E)=w_{2i}(E)^2$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the Chern-class and Stiefel-Whitney suppliers ([[def-axiom-of-choice]]).

[F1] $p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$ with $p_0=1$ and $p_i=0$ for $2i>\operatorname{rank}E$ ([[def-pontryagin-classes-by-complexification]]).

[F2] Chern classes are natural, multiplicative over Whitney sums, and the trivial bundle has total Chern class $1$ ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F3] For a complex bundle $V$ one has $w_{2i}(V_{\mathbb R})=\rho_2c_i(V)$ and $w_{2i+1}(V_{\mathbb R})=0$ ([[thm-mod-two-reduction-of-chern-classes]]).

[F4] Total Stiefel-Whitney classes are multiplicative over Whitney sums ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]]).

[F5] The complexification of a real bundle commutes with pullback and with direct sums: $(f^*E)_{\mathbb C}\cong f^*(E_{\mathbb C})$ and $(E\oplus F)_{\mathbb C}\cong E_{\mathbb C}\oplus F_{\mathbb C}$; the underlying real bundle of $E_{\mathbb C}$ is canonically isomorphic to $E\oplus E$ ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a numerable real bundle $E\to B$ over a path-connected CW base.

1.1 Naturality: by [F5] the complexification of $f^*E$ is the pullback of $E_{\mathbb C}$, so [F1] and naturality of Chern classes [F2] give $p_i(f^*E)=(-1)^ic_{2i}(f^*(E_{\mathbb C}))=(-1)^if^*c_{2i}(E_{\mathbb C})=f^*p_i(E)$. [F1, F2, F5]

1.2 Stability: by [F5] one has $(E\oplus\varepsilon^r)_{\mathbb C}\cong E_{\mathbb C}\oplus(\varepsilon^r)_{\mathbb C}$, and the Chern class of the trivial complex bundle is $1$ by [F2], so multiplicativity gives $c_{2i}((E\oplus\varepsilon^r)_{\mathbb C})=c_{2i}(E_{\mathbb C})$ and hence $p_i(E\oplus\varepsilon^r)=p_i(E)$; the rank cutoff is part of the definition [F1]. [F1, F2, F5]

1.3 Mod two: for the complex bundle $E_{\mathbb C}$, [F3] gives $\rho_2c_{2i}(E_{\mathbb C})=w_{4i}((E_{\mathbb C})_{\mathbb R})$; the canonical real isomorphism $(E_{\mathbb C})_{\mathbb R}\cong E\oplus E$ of [F5] and multiplicativity [F4] give $w((E_{\mathbb C})_{\mathbb R})=w(E)^2$. In $\mathbb F_2$ coefficients the square of a sum is the sum of squares, so $w(E)^2=\sum_jw_j(E)^2$ and its degree-$4i$ component is $w_{2i}(E)^2$. [F3, F4, F5]

2.1 Combining steps 1.2 and 1.3 with the definition [F1]: $\rho_2p_i(E)=(-1)^i\rho_2c_{2i}(E_{\mathbb C})=(-1)^iw_{2i}(E)^2=w_{2i}(E)^2$, because $(-1)^i$ is $\pm1$ and the target has exponent two. [F1, step 1.2, step 1.3]

3.1 Boundary cases. For $i=0$ all three assertions read $1=1$; for the zero bundle $p(0)=1$, $w(0)=1$ and the identity is $1=1$. The rank cutoff makes $p_i(E)=0$ for $2i>n$ while the right side $w_{2i}(E)^2$ vanishes for $2i>n$ as well, so no mismatch occurs. The empty base is excluded by the path-connected hypothesis and $\mathbb F_2$ is a field, so no zero-ring issue arises. AC is used only through [A1]. [A1, F1, step 1.2, step 2.1] ∎

## Source notes

Milnor-Stasheff section 15 states the naturality, stability and mod-two reduction of the Pontryagin classes; the proof above reads the mod-two identity from the Chern-class comparison $w_{2i}=\rho_2c_i$ and the real isomorphism $(E_{\mathbb C})_{\mathbb R}\cong E\oplus E$.
