---
id: thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes
kind: theorem
title: Naturality, stability, and mod-two reduction of Pontryagin classes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-pontryagin-classes-by-complexification", "thm-naturality-normalization-and-whitney-sum-for-chern-classes", "thm-mod-two-reduction-of-chern-classes", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "def-axiom-of-choice", "thm-singular-cohomology-is-graded-commutative", "def-stiefel-whitney-classes-from-the-projective-bundle-relation"]
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

Assume AC. Let $E\to B$ be a numerable real bundle over a nonempty path-connected
paracompact Hausdorff CW base, and let $\rho_2$ denote reduction mod two. Then

1. **Naturality:** $p_i(f^*E)=f^*p_i(E)$ for every continuous $f:B'\to B$ with $B'$ a nonempty path-connected paracompact Hausdorff CW complex;
2. **Stability:** $p_i(E\oplus\varepsilon^r)=p_i(E)$ for the trivial bundle
   $\varepsilon^r$, and $p_i(E)=0$ whenever $2i>\operatorname{rank}E$;
3. **Mod-two reduction:** $\rho_2p_i(E)=w_{2i}(E)^2$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the Chern-class and Stiefel-Whitney suppliers ([[def-axiom-of-choice]]).

[F1] $p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$ with $p_0=1$ and $p_i=0$ for $2i>\operatorname{rank}E$ ([[def-pontryagin-classes-by-complexification]]).

[F2] On the stated CW bases Chern classes are natural for continuous maps between such bases, multiplicative over Whitney sums, and the trivial bundle has total Chern class $1$ ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F3] For a numerable complex bundle $V$ over a path-connected paracompact Hausdorff CW base one has $w_{2i}(V_{\mathbb R})=\rho_2c_i(V)$ and $w_{2i+1}(V_{\mathbb R})=0$ ([[thm-mod-two-reduction-of-chern-classes]]).

[F4] Total Stiefel-Whitney classes are multiplicative over Whitney sums ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]]).

[F5] Whitney sums have block-diagonal transition functions, and pullback precomposes transition functions by the base map. The underlying real bundle regards complex transition functions as real-linear maps. ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F6] Singular cohomology over a commutative coefficient ring is graded commutative. The Stiefel–Whitney conventions are $w_0=1$, $w_j=0$ above the real rank and $w(0)=1$. ([[thm-singular-cohomology-is-graded-commutative]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a numerable real bundle $E\to B$ over the nonempty path-connected paracompact Hausdorff CW base, and a continuous $f:B'\to B$ between bases of this kind.

1.1 Tensoring the transition functions of $E$ with $\mathbb C$ before or after pulling them back gives the same cocycle, using the same real transition matrices as complex matrices for complexification, so $(f^*E)_{\mathbb C}\cong f^*(E_{\mathbb C})$. Thus [F1] and naturality of Chern classes [F2] give $p_i(f^*E)=(-1)^ic_{2i}(f^*(E_{\mathbb C}))=(-1)^if^*c_{2i}(E_{\mathbb C})=f^*p_i(E)$. [F1, F2, F5]

1.2 The fiberwise map obtained by distributing the tensor product gives $(E\oplus\varepsilon^r)_{\mathbb C}\cong E_{\mathbb C}\oplus(\varepsilon^r)_{\mathbb C}$ and is compatible with all transition functions. The Chern class of the trivial complex bundle is $1$ by [F2], so multiplicativity gives stability; the rank cutoff is part of [F1]. [F1, F2, F5]

1.3 For each real fiber, $v\otimes(a+ib)\mapsto(av,bv)$ is a real-linear isomorphism from $(E_b\otimes_{\mathbb R}\mathbb C)_{\mathbb R}$ to $E_b\oplus E_b$; its inverse is $(x,y)\mapsto x\otimes1+y\otimes i$, as is checked on simple tensors and their linear combinations; both formulas are continuous in every bundle chart and compatible with real transition functions and hence defines $(E_{\mathbb C})_{\mathbb R}\cong E\oplus E$. For the complex bundle $E_{\mathbb C}$, [F3] now gives $\rho_2c_{2i}(E_{\mathbb C})=w_{4i}((E_{\mathbb C})_{\mathbb R})$, while multiplicativity [F4] gives $w((E_{\mathbb C})_{\mathbb R})=w(E)^2$. By [F6], in $\mathbb F_2$ coefficients all homogeneous classes commute (the sign becomes 1), so the cross terms in the finite square cancel in pairs and the square of a sum is the sum of squares, whose degree-$4i$ component is $w_{2i}(E)^2$. [F3, F4, F5, F6]

2.1 Combining steps 1.2 and 1.3 with the definition [F1]: $\rho_2p_i(E)=(-1)^i\rho_2c_{2i}(E_{\mathbb C})=(-1)^iw_{2i}(E)^2=w_{2i}(E)^2$, because $(-1)^i$ is $\pm1$ and the target has exponent two. [F1, step 1.2, step 1.3]

3.1 Boundary cases. For $i=0$ all three assertions read $1=1$; for the zero bundle $p(0)=1$, $w(0)=1$ and the identity is $1=1$. The rank cutoff makes $p_i(E)=0$ for $2i>n$ while the right side $w_{2i}(E)^2$ vanishes for $2i>n$ as well, so no mismatch occurs. The empty base is excluded explicitly and $\mathbb F_2$ is a field, so no zero-ring issue arises. AC is used only through [A1]. [A1, F1, F6, step 1.2, step 2.1] ∎

## Source notes

Milnor-Stasheff section 15 states the naturality, stability and mod-two reduction of the Pontryagin classes; the proof above reads the mod-two identity from the Chern-class comparison $w_{2i}=\rho_2c_i$ and the real isomorphism $(E_{\mathbb C})_{\mathbb R}\cong E\oplus E$.
