---
id: thm-root-of-unity-outside-alcove-tiltings-are-negligible
kind: theorem
title: Outside-alcove indecomposable tiltings are negligible
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - lem-finite-weyl-closed-chambers-and-stabilizers
  - lem-root-of-unity-integral-weyl-specialization
  - thm-root-of-unity-indecomposable-tiltings-exist-and-are-classified
  - thm-root-of-unity-tilting-modules-are-tensor-stable
  - lem-root-of-unity-weyl-flags-summands-and-orthogonality
  - thm-root-of-unity-affine-weyl-linkage
  - thm-root-of-unity-strong-affine-linkage-for-weyl-and-tilting-modules
  - lem-root-of-unity-weyl-quantum-dimensions-and-affine-signs
  - lem-root-of-unity-closed-bottom-alcove-weyl-modules-are-simple
  - lem-integral-alcove-facet-displacements-lie-in-closed-bottom-alcove
  - lem-affine-closest-pairs-and-downward-facet-translation
  - thm-negligible-morphisms-form-a-tensor-ideal-on-root-of-unity-tiltings
  - thm-steinberg-tensor-product-multiplicity-formula
  - prop-tensor-product-multiplicities-are-character-structure-constants
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - lem-highest-weight-modules-have-weights-below-the-top-weight
  - prop-characters-of-finite-dimensional-modules-are-weyl-invariant
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity
      url: https://arxiv.org/pdf/math/0308281v2
      locator: Section 4, Theorem 2 and Lemmas 7–11; the wall construction here uses the actual strong-linkage supplier and the corrected integral facet-displacement supplier, including E8.
---

## Statement

Assume the inherited Axiom of Choice. Work with the full weight lattice of a simple simply-laced root system, roots of squared length two, odd $\ell>h$, and $\operatorname{ord}(\zeta^2)=\ell$ in the actual full toral-weight Lusztig category. Allow both $\operatorname{ord}(\zeta)=\ell$ and $2\ell$. Put
$$A_\ell=\{\nu\in P^+:(\nu+\rho,\theta)<\ell\}.$$
For every dominant $\mu\notin A_\ell$, the indecomposable tilting $T_\zeta(\mu)$ has zero quantum dimension and negligible identity morphism. For every $\nu\in A_\ell$, $T_\zeta(\nu)=\Delta_\zeta(\nu)$ is simple and has nonzero quantum dimension. Thus the nonnegligible indecomposable tiltings have exactly the labels $A_\ell$.

## Facts & Assumptions

**Given:** These root data, parameters and actual Weyl families; all affine actions below are on shifted coordinates.

[F1] Weyl modules have the ordinary classical Weyl characters; tiltings have finite Weyl flags, are tensor and summand closed, and have the uniquely classified indecomposables $T_\zeta(\lambda)$ with top Weyl section $\lambda$ once ([[lem-root-of-unity-integral-weyl-specialization]], [[thm-root-of-unity-indecomposable-tiltings-exist-and-are-classified]], [[thm-root-of-unity-tilting-modules-are-tensor-stable]], [[lem-root-of-unity-weyl-flags-summands-and-orthogonality]]).

[F2] Every Weyl section of an indecomposable tilting lies in its affine dot orbit; it is obtained from its highest label by a downward affine-reflection chain ([[thm-root-of-unity-affine-weyl-linkage]], [[thm-root-of-unity-strong-affine-linkage-for-weyl-and-tilting-modules]]).

[F3] Weyl quantum dimensions vanish exactly at affine-singular labels. The closed-bottom Weyl modules are simple tiltings, with nonzero dimension in the open bottom alcove ([[lem-root-of-unity-weyl-quantum-dimensions-and-affine-signs]], [[lem-root-of-unity-closed-bottom-alcove-weyl-modules-are-simple]]).

[F4] For a regular integral point of an alcove and any facet there is a relative-interior integral facet point whose displacement has dominant representative $\gamma$ in the closed bottom alcove. An internal dominant facet yields a dominant integral facet label. Closest orbit pairs and their equality case, and the downward lower-facet order conclusion, hold as stated in [[lem-integral-alcove-facet-displacements-lie-in-closed-bottom-alcove]] and [[lem-affine-closest-pairs-and-downward-facet-translation]].

[F5] Negligible identities of indecomposable tiltings are exactly their zero-dimension identities; negligibles form a tensor and composition ideal ([[thm-negligible-morphisms-form-a-tensor-ideal-on-root-of-unity-tiltings]]).

[F6] Classical finite highest-weight modules are simple, their highest line is one dimensional and their weights are below their highest label. Characters are Weyl invariant, tensor characters multiply and their Weyl-character coefficients are classical tensor multiplicities. Finite closed chambers give the dominant orbit representatives; the finite Weyl Racah formula holds ([[lem-finite-weyl-closed-chambers-and-stabilizers]], [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[lem-highest-weight-modules-have-weights-below-the-top-weight]], [[prop-characters-of-finite-dimensional-modules-are-weyl-invariant]], [[prop-tensor-product-multiplicities-are-character-structure-constants]], [[thm-steinberg-tensor-product-multiplicity-formula]]).

[A1] Choice is inherited from the actual highest-weight constructions ([[def-axiom-of-choice]]).

## Proof
**Given:** Write $W_\ell=W\ltimes\ell Q$, $d_M=\operatorname{qdim}M$, and use ordinary classical modules $L(a)$ solely for character calculations.

1.1 Every weight $\eta$ of $L(\gamma)$ has norm at most $\|\gamma\|$. Indeed its dominant Weyl conjugate $\eta^+$ is a weight by [F6], so $\beta=\gamma-\eta^+\in Q_+$. Then $\|\gamma\|^2-\|\eta^+\|^2=(\beta,\gamma+\eta^+)\ge0$, by dominance of both labels. Every extremal weight $w\gamma$ has multiplicity one, by Weyl invariance and the one-dimensional highest line. Also, if $L(b)$ occurs in $L(a)\otimes L(\gamma)$, then $b-a$ is a weight of $L(\gamma)$. To prove this last assertion, project a highest vector to first-factor weight spaces, and take a maximal first weight $\eta$ in its support. For each simple raising operator its first-factor contribution at $\eta+\alpha_i$ cannot cancel a second-factor contribution, because that first weight is absent. Thus the component at $\eta$ lies in the simultaneous raising kernel in the first factor. Simplicity of $L(a)$ makes that kernel precisely its highest line: any other highest vector would generate a proper highest submodule. Consequently $\eta=a$, and the highest vector has nonzero projection to $L(a)_a\otimes L(\gamma)_{b-a}$. This proves the assertion and the tensor bound $\|b-a\|\le\|\gamma\|$. [F6, A1, algebra]

1.2 Suppose $\mu$ is regular and outside the bottom alcove, and put $y=\mu+\rho$. Its alcove $C$ is inside the strict finite dominant chamber. Choose a point $p$ in the bottom alcove, sufficiently close to a small positive multiple of $\rho$, so that $(p,\alpha)<\ell$ for every positive root. Perturb $p$ within that open set so that the segment from $p$ to the regular point $y$ crosses no codimension-two intersection of walls. Such a perturbation exists because only finitely many walls meet the bounded segment neighborhood, and each forbidden intersection imposes a proper affine condition on $p$. The segment stays in the strict dominant chamber by convexity and crosses at least one wall because $C$ is not the bottom alcove. Its last crossing enters $C$ through a facet $F$. A crossed wall has positive-root equation $(z,\alpha)=m\ell$ with $m\ge1$; the linear pairing on the segment crosses this level upwards, since its initial value is below $\ell$. Thus $F$ is a lower facet of $C$. Its relative interior is internal to the strict dominant chamber: it is a facet of an alcove in that chamber and is not one of the finite chamber walls. [F4, construct, algebra]

2.1 Apply [F4] to choose a dominant integral label $\lambda$ with $x=\lambda+\rho$ in the relative interior of $F$, and with $\gamma$ the ordinary dominant representative of $\mu-\lambda$ in the closed bottom alcove. Put $\delta=\mu-\lambda\in W\gamma$, so $\|x-y\|=\|\gamma\|$. By [F3], $\Delta_\zeta(\gamma)$ is tilting. The tensor $M=T_\zeta(\lambda)\otimes\Delta_\zeta(\gamma)$ is therefore tilting by [F1]. The label $\lambda$ is affine singular. Every Weyl section of $T_\zeta(\lambda)$ is singular by [F2] and has zero dimension by [F3]. Additivity gives $d_{T_\zeta(\lambda)}=0$, so its identity, and then $1_M$, are negligible by [F5]. [F1, F2, F3, F4, F5, step 1.2, algebra]

3.1 The classical multiplicity of $L(\mu)$ in $L(\lambda)\otimes L(\gamma)$ is one. The Racah formula of [F6] is $$c^\mu_{\lambda\gamma}=\sum_{v\in W}\det(v)\dim L(\gamma)_{v(y)-x}.$$ The identity term equals one since $y-x=\delta\in W\gamma$, by step 1.1. For $v\ne1$, strict finite dominance of both $x$ and $y$ gives $(x,y-vy)>0$: $y-vy$ is a nonzero nonnegative root combination, as follows by a reduced reflection word from the dominant $y$. Hence $\|vy-x\|^2-\|y-x\|^2=2(x,y-vy)>0$. Step 1.1 makes the other weight multiplicities zero. This proves the claimed coefficient without assuming that every extremal tensor label occurs. [F6, step 1.1, step 2.1, algebra]

4.1 Let $\lambda'$ be a Weyl section label of $T_\zeta(\lambda)$, and suppose a classical tensor constituent $L(\nu)$ occurs in $L(\lambda')\otimes L(\gamma)$ with $\nu$ in the affine dot orbit of $\mu$. Put $x'=\lambda'+\rho$, $y'=\nu+\rho$. Step 1.1 gives $\|y'-x'\|\le\|\gamma\|=\|y-x\|$. By [F2], $x'$ is obtained from $x$ by a downward chain. The lower-facet conclusion of [F4] therefore gives $\nu\le\mu$. If $\nu=\mu$, the closest-pair equality case provides a common affine isometry $\tau$ with $(x',y)=(\tau x,\tau y)$. Regularity of $y$ forces $\tau=1$, so $\lambda'=\lambda$. Weyl flags tensor to Weyl flags and their section multiplicities are exactly the classical coefficients by [F1] and [F6]. The top $\lambda$ occurs once in $T_\zeta(\lambda)$; step 3.1 and the exclusion just proved imply $(M:\Delta_\zeta(\mu))=1$, and no Weyl section in the $\mu$ orbit is strictly above $\mu$. [F1, F2, F4, F6, step 1.1, step 2.1, step 3.1, algebra]

5.1 Decompose $M$ into indecomposable tiltings by [F1]. Its $\mu$ Weyl section belongs to some $T_\zeta(\tau)$. This forces $\tau\ge\mu$ by highest-weight dominance and places $\tau$ in the same affine orbit by [F2]. The last assertion of step 4.1 forces $\tau=\mu$. Thus $T_\zeta(\mu)$ is a direct summand of the negligible object $M$, and its identity is negligible by composing $1_M$ with the inclusion and projection. Its dimension is zero by [F5]. If $\mu$ is singular instead, [F2] and [F3] directly give dimension zero for all its Weyl sections, hence for $T_\zeta(\mu)$, and [F5] applies. This covers every label outside $A_\ell$, including its upper boundary. For labels inside $A_\ell$ the final assertion is exactly [F3]. [F1, F2, F3, F5, step 2.1, step 4.1, algebra] ∎
