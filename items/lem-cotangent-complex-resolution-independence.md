---
id: lem-cotangent-complex-resolution-independence
kind: lemma
title: "Independence of the cotangent complex from the chosen simplicial resolution"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-cotangent-complex-of-a-ring-map
  - def-standard-resolution-of-a-ring-map
  - def-simplicial-object-and-simplicial-commutative-ring
  - def-derived-category-of-an-abelian-category
  - def-quasi-isomorphism
  - def-homology-object-of-a-chain-complex
  - def-shift-of-a-chain-complex
  - def-axiom-of-choice
  - def-derived-tensor-product-in-the-bounded-above-setting
  - prop-homology-of-the-derived-tensor-product-is-tor
  - def-polynomial-factorization-category-and-cotangent-diagram
  - lem-trivial-simplicial-fibration-fibres-products-and-contraction
  - lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - lem-standard-polynomial-resolution-admissibility
  - lem-contractible-cosimplicial-evaluation-computes-derived-colimit
  - lem-derived-colimit-coefficient-and-category-change
  - lem-differentials-base-change
  - def-simplicial-set-homotopy-and-trivial-kan-fibration
  - def-commutative-ring
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Chapter 92 (The Cotangent Complex), Sections 92.4-92.6 and Lemma 92.8.1"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Proposition 92.5.2 (tag 08PX), Remark 92.5.5, Lemmas 92.6.2 and 92.8.1 (tags 08PS-08QU, 08QZ), printed 9-12 and 17-18"
    - title: "The Stacks Project, Cohomology on Sites, Section 39"
      url: "https://stacks.math.columbia.edu/download/sites-cohomology.pdf"
      locator: "Lemmas 39.1-39.3 and 39.6-39.8 (tags 08PF-08QA), printed 93-96"
---

## Statement

Assume the Axiom of Choice for the published derived-tensor and
resolution-comparison suppliers ([[def-axiom-of-choice]]). Let $A\to B$ be a
map of commutative unital rings ([[def-commutative-ring]]). Let
$P_\bullet\to B$ and $Q_\bullet\to B$ be polynomial simplicial $A$-algebra
resolutions with augmentations that are trivial Kan fibrations of simplicial
sets, in the sense of
[[def-simplicial-set-homotopy-and-trivial-kan-fibration]]; the standard
resolution is one such resolution
([[def-standard-resolution-of-a-ring-map]],
[[def-simplicial-object-and-simplicial-commutative-ring]]). Their complexes
$\Omega_{P_\bullet/A}\otimes_{P_\bullet}B$ and
$\Omega_{Q_\bullet/A}\otimes_{Q_\bullet}B$ have canonical identifications
with $L_{B/A}$ in $D(B)$
([[def-cotangent-complex-of-a-ring-map]],
[[def-derived-category-of-an-abelian-category]],
[[def-quasi-isomorphism]]); hence they are canonically isomorphic there. The
canonical comparison is in the derived category and need not be a
distinguished direct chain map between the two chosen complexes.

For any commutative square of ordinary ring maps $A\to B$, $A'\to B'$,
$A\to A'$ and $B\to B'$, functoriality gives a canonical comparison
$L_{B/A}\otimes_B^{\mathbf L}B'\to L_{B'/A'}$. If the square induces a
quasi-isomorphism $B\otimes_A^{\mathbf L}A'\to B'$, this comparison is an
isomorphism in $D(B')$. Equivalently, for the ordinary pushout
$B'=B\otimes_AA'$ it suffices that $\operatorname{Tor}_i^A(B,A')=0$ for all
$i>0$ ([[prop-homology-of-the-derived-tensor-product-is-tor]]); in particular
flat $A\to A'$ suffices
([[def-derived-tensor-product-in-the-bounded-above-setting]]). If one writes
$B'=B\otimes_A^{\mathbf L}A'$, this ordinary-ring statement applies when that
derived tensor product is concentrated in degree zero. There is also the
valid same-target special case: for composable maps $A\to A'\to B$ such that
the canonical map $B\otimes_A^{\mathbf L}A'\to B$ is a quasi-isomorphism,
$L_{B/A}\cong L_{B/A'}$ in $D(B)$, for example for a localization
$A'=S^{-1}A$ through which $A\to B$ factors. Cohomology and degree shifts are
those of [[def-homology-object-of-a-chain-complex]] and
[[def-shift-of-a-chain-complex]].

## Facts & Assumptions

**Given:** AC; a map $A\to B$ of commutative unital rings; admissible polynomial resolutions $P_\bullet,Q_\bullet\to B$ with trivial Kan fibrations as augmentations.

[F1] The bounded polynomial-factorization category $\mathcal C^\kappa_{B/A}$ has as objects the polynomial presentations $A[E]\to B$ and carries the contravariant cotangent diagram $F(P\to B)=\Omega_{P/A}\otimes_PB$; the standard resolution is one of its simplicial resolutions ([[def-polynomial-factorization-category-and-cotangent-diagram]], [[def-standard-resolution-of-a-ring-map]], [[def-cotangent-complex-of-a-ring-map]]).

[F2] A trivial Kan fibration lifts every degreewise injective map and has nonempty contractible fibres, and every set-indexed product of such fibres is nonempty and contractible; the standard resolution is admissible ([[lem-trivial-simplicial-fibration-fibres-products-and-contraction]], [[lem-standard-polynomial-resolution-admissibility]]).

[F3] If $\operatorname{Hom}_C(U_\bullet,V)$ is contractible for all $V$, then evaluation $F(U_\bullet)$ computes $L\operatorname{colim}_{C^{\mathrm{op}}}F$ canonically; coefficient change and admissible category change preserve the derived colimit ([[lem-contractible-cosimplicial-evaluation-computes-derived-colimit]], [[lem-derived-colimit-coefficient-and-category-change]]).

[F4] Differential base change: for a polynomial presentation $P\to B$ and a ring square, the module of differentials base changes canonically, $\Omega_{P\otimes_AA'/A'}\cong\Omega_{P/A}\otimes_AA'$ ([[lem-differentials-base-change]]).

[F5] The derived tensor product of bounded-above complexes is represented by tensoring a bounded-above projective or flat replacement, and its homology is computed by Tor when the input is discrete ([[def-derived-tensor-product-in-the-bounded-above-setting]], [[prop-homology-of-the-derived-tensor-product-is-tor]]).

[F6] A termwise surjective homomorphism of simplicial abelian groups inducing a quasi-isomorphism of associated complexes is a trivial Kan fibration, and a homomorphism that is a homotopy equivalence of underlying simplicial sets induces a quasi-isomorphism ([[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]).



## Proof

1.1 A common factorization category and contractibility. Choose a bounded small polynomial-factorization category as in [F1] containing the standard resolution together with the specified $P_\bullet$ and $Q_\bullet$. For an object $V=(A[E]\to B)$ and an admissible resolution $P_\bullet$, the required simplicial set is $\operatorname{Hom}_{\mathcal C^\kappa_{B/A}}(P_\bullet,V)=\operatorname{Hom}_{A\text{-}\mathrm{Alg}/B}(A[E],P_\bullet)$, since $\mathcal C^\kappa_{B/A}$ is the opposite of the presentation category. It is the product over $e\in E$ of the augmentation fibres over the prescribed images of the variables, and these fibres together with all their set-indexed products are nonempty and contractible by [F2]. Hence the hypothesis of the contractible-evaluation lemma [F3] is satisfied for the standard resolution and for both $P_\bullet$ and $Q_\bullet$. [F1, F2, F3]

1.2 Canonical identification of the three complexes. Apply [F3] to the cotangent diagram $F$ of [F1]. Evaluation on the standard resolution is the definition of $L_{B/A}$, while evaluation on $P_\bullet$ and on $Q_\bullet$ is $\Omega_{P_\bullet/A}\otimes_{P_\bullet}B$ and $\Omega_{Q_\bullet/A}\otimes_{Q_\bullet}B$; the canonical augmentation roofs from these three evaluations into the same diagram-derived-colimit therefore give canonical isomorphisms of all three complexes in $D(B)$. The standard resolution is genuinely admissible by [F2], and enlarging the bound is harmless by the category-change half of [F3] using the shared standard resolution. This proves the first assertion, including that the comparison lives in $D(B)$ and need not be a direct chain map. [F1, F2, F3]

2.1 Base change of the comparison. For a commutative ordinary ring square, the functor $u\colon P\mapsto P\otimes_AA'$ between bounded factorization categories sends a nested variable $[p]$ to the nested variable of its image, giving the canonical map of standard simplicial algebras and hence the canonical cotangent comparison. By the coefficient-change half of [F3], extending coefficients turns $L\operatorname{colim}_BF$ into $L\operatorname{colim}_{B'}(F\otimes_B^{\mathbf L}B')$; every value of $F$ is a free $B$-module because polynomial differentials are free, so this coefficient tensor is ordinary, and by [F4] it is identified with $u^*F_{B'/A'}$. [F3, F4, step 1.1]

3.1 The isomorphism criterion. Assume the canonical derived tensor map $B\otimes_A^{\mathbf L}A'\to B'$ is a quasi-isomorphism. The associated $A$-module complex of the standard resolution is bounded above and free by [F2], so its tensor with $A'$ computes this derived tensor product by [F5]; therefore the tensored augmentation $P_\bullet\otimes_AA'\to B'$ is a quasi-isomorphism. It is termwise surjective: in degree zero the augmentation maps onto $B\otimes_AA'$, whose canonical map to $B'$ is an isomorphism on $H^0$, and the degeneracies supply the higher termwise surjections. The normalized additive lifting criterion of [F6] then makes it a trivial Kan fibration, so both the source standard resolution and its image under $u$ satisfy the contractibility hypothesis of step 1.2. The category-change half of step 2.1 identifies $L\operatorname{colim}_{\mathrm{old}}u^*F_{\mathrm{new}}$ with $L\operatorname{colim}_{\mathrm{new}}F_{\mathrm{new}}$, and composing with the coefficient identification shows that the canonical cotangent map $L_{B/A}\otimes_B^{\mathbf L}B'\to L_{B'/A'}$ is an isomorphism in $D(B')$. [F2, F3, F5, F6, step 1.2, step 2.1]

4.1 Tor criterion and the same-target case. For the ordinary pushout $B'=B\otimes_AA'$, the canonical derived tensor map is a quasi-isomorphism precisely when $\operatorname{Tor}_i^A(B,A')=0$ for all $i>0$, by the Tor identification of [F5] under AC (which implies the supplier's Dependent Choice); a flat $A\to A'$ gives this vanishing. If $B'=B\otimes_A^{\mathbf L}A'$ is concentrated in degree zero, the ordinary statement applies to that discrete algebra. Finally, for composable maps $A\to A'\to B$ with $B\otimes_A^{\mathbf L}A'\to B$ a quasi-isomorphism, take $B'=B$ and the identity on $B$ in the square of step 2.1; the criterion of step 3.1 gives $L_{B/A}\cong L_{B/A'}$ in $D(B)$, which applies in particular to a localization $A'=S^{-1}A$ through which $A\to B$ factors. [F5, step 3.1] ∎ 