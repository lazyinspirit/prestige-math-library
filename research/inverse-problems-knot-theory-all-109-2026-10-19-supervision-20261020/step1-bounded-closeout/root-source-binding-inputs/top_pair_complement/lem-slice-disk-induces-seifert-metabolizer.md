---
id: lem-slice-disk-induces-seifert-metabolizer
kind: lemma
title: "A slice disk induces a Seifert metabolizer"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-pairing-well-defined
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-smooth-knot-concordance
  - def-locally-flat-topological-knot-concordance
  - lem-rational-isotropic-subspace-saturates-to-integral-metabolizer
  - lem-locally-flat-slice-surface-bounds-seifert-hypersurface
  - lem-linking-number-equals-four-dimensional-intersection-number
  - thm-linking-number-equals-signed-intersection
  - thm-poincare-lefschetz-duality
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-poincare-duality-for-oriented-topological-manifolds
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - def-axiom-of-choice
  - thm-smooth-singular-chains-compute-singular-homology
  - thm-compact-topological-three-manifolds-admit-finite-pl-triangulations
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, proof of Theorem 2.6, printed p. 323"
    - title: "Arunima Ray, Slice Knots and Knot Concordance"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "Course II, §3, printed pp. 11–12"
---

## Statement

Assume full AC. Let $K$ be a smooth oriented knot in the oriented standard $3$-sphere, let $F\subset S^3$ be a connected compact smooth oriented Seifert surface of genus $g$, and let $D\subset B^4$ be a locally flat properly embedded disk with oriented boundary $K$. Then the positive-push Seifert lattice $(H_1(F;\mathbb Z),V)$ is metabolic: it has a rank-$g$ primitive direct summand on which $V$ vanishes identically.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert pairing on integral first homology]]

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|The rank-half primitive direct-summand definition of a metabolizer]]

## Facts & Assumptions

**Given:** Full AC, a Seifert surface $F$ of genus $g$, and a locally flat slice disk $D$ with the same oriented boundary knot.

[A1] Full AC is the family-of-nonempty-sets choice axiom used by the Seifert-pairing convention. [[def-axiom-of-choice]]

[F1] For an ordered integral basis of $H_1(F;\mathbb Z)$, the matrix entries are $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, and $V$ is bilinear on homology. [[def-knot-seifert-pairing-and-matrix]], [[lem-seifert-pairing-well-defined]]

[F2] Poincaré–Lefschetz duality for a compact oriented $3$-manifold $R$ with boundary $\Sigma$ identifies $H_i(R,\Sigma;\mathbb Q)$ with $H^{3-i}(R;\mathbb Q)$. [[thm-poincare-lefschetz-duality]]

[F3] The linking number of disjoint rational boundary cycles in $S^3=\partial B^4$ is the signed intersection number of collared rational $2$-chains in $B^4$ that bound them. [[lem-linking-number-equals-four-dimensional-intersection-number]]

[F4] A $g$-dimensional rational subspace on which $V$ vanishes saturates to a rank-$g$ direct summand of the integral lattice, still with vanishing restriction. [[lem-rational-isotropic-subspace-saturates-to-integral-metabolizer]]

[F5] For the given locally flat slice disk the hypersurface supplier constructs the compact oriented locally flat Seifert three-manifold with an actual two-sided product and positive-push alignment. Its pre-collar-push model meets the outer sphere in $F$, with the stated product corners at $K$. Its smooth branch remains the previously supplied smooth construction; its TOP branch explicitly imports separate relative normal-bundle and microbundle-transversality theorems. [[lem-locally-flat-slice-surface-bounds-seifert-hypersurface]]

[F6] Smooth chains compute continuous real homology, including for a smooth manifold with boundary. This is invoked below only in smooth ambient neighborhoods, not by treating a locally flat $R$ as an already smooth submanifold. [[thm-smooth-singular-chains-compute-singular-homology]]

[F7] Under full AC a compact TOP three-manifold has a finite compatible PL triangulation, with boundary a subcomplex. In particular its Betti numbers and Euler characteristic are finite. This is intrinsic to the three-manifold and does not smooth its embedding in the four-ball. [[thm-compact-topological-three-manifolds-admit-finite-pl-triangulations]]

## Proof

1.1 First assume the given disk is smooth. Construct $R$ by [F5], and write $\Sigma=\partial R=F\cup D$ after matching collars. The Axiom of Choice [A1] is the hypothesis under which the supplied Seifert-pairing and duality interfaces are invoked. Capping the sole boundary circle of $F$ by a disk does not change $H_1$ because that circle is already the boundary of the oriented fundamental $2$-chain of $F$; hence $H_1(F;\mathbb Q)\cong H_1(\Sigma;\mathbb Q)$ has dimension $2g$. In the pair sequence, $H_0(\Sigma;\mathbb Q)\to H_0(R;\mathbb Q)$ is an isomorphism because both are connected. Exactness therefore makes $H_1(R;\mathbb Q)\to H_1(R,\Sigma;\mathbb Q)$ surjective. By [F2], the target has dimension $b_2(R)$, so the image of $H_1(\Sigma;\mathbb Q)\to H_1(R;\mathbb Q)$ has dimension $b_1(R)-b_2(R)$. [A1, F2, F5, given, construct, algebra]

1.2 The double of $R$ along $\Sigma$ is a closed $3$-manifold and has Euler characteristic zero; Mayer–Vietoris gives $2\chi(R)-\chi(\Sigma)=0$. Since $\chi(\Sigma)=2-2g$, this yields $\chi(R)=1-g$. Also [F2] gives $H_3(R;\mathbb Q)\cong H^0(R,\Sigma;\mathbb Q)=0$. With $b_0(R)=1$, the Euler-characteristic identity implies $b_1(R)-b_2(R)=g$. Thus the kernel $L=\ker(H_1(\Sigma;\mathbb Q)\to H_1(R;\mathbb Q))$, identified with a subspace of $H_1(F;\mathbb Q)$, has dimension $2g-g=g$. [F2, step 1.1, algebra]

2.1 Let $x,y\in L$, represented by finite rational smooth cycles on $F$ away from $K$. Their rational bounding chains in $R$ can be taken smooth. Indeed [F6] first supplies finite smooth real bounding chains; their boundary equations are one finite rational linear system on the real coefficients of finitely many smooth simplices, so rational Gaussian elimination supplies rational coefficients solving the same equations. Use the pre-collar-push model in [F5] to place the boundary cycles back on the actual $F\subset S^3$. A finite intrinsic collar push moves the interiors of their bounding chains off the boundary of $R$, fixing the prescribed boundary collars, so the chains miss the product corner $K$. The model is smooth on a neighborhood of these compact supports. Its positive normal field is tangent to $S^3$ along $F$ and points in the positive Seifert direction; extend it by finitely many bumps to an ambient field tangent to $S^3$ there. Its small-time flow pushes the first bounding chain $X$ off $R$, with boundary exactly $x^+$ in $S^3$, while the second chain $Y$ stays in $R$ with boundary $y$. Compactness and the product neighborhood keep the two supports disjoint. Their common standard end collars and empty intersection make them admissible for [F3], so $\operatorname{lk}(x^+,y)=X^+\mathbin\cdot Y=0$. By [F1] this is $V_{\mathbb Q}(x,y)$. Hence $L$ is a rational Seifert-isotropic subspace. [F1, F3, F5, F6, step 1.2, construct, algebra]

2.2 By [F4], $M=H_1(F;\mathbb Z)\cap L$ is a rank-$g$ direct summand and $V|_{M\times M}=0$. The definition of a metabolic Seifert lattice then makes $M$ a metabolizer. This proves the entire metabolic conclusion whenever the supplied slice disk is smooth. [F4, step 1.2, step 2.1, algebra]

3.1 For the arbitrary locally flat disk use the TOP $R$ and its actual product from [F5]. The duality and pair-sequence computation of steps1.1–1.2 applies to this compact oriented TOP three-manifold: [F7] supplies finite homology and Euler characteristic, [F2] applies in the TOP category, and the double has Euler characteristic zero by oriented odd-dimensional Poincaré duality. Thus, without putting a smooth structure on the embedding, the rational kernel $L=\ker(H_1(F;\mathbb Q)\to H_1(R;\mathbb Q))$ has dimension $g$. [A1, F2, F5, F7, step 1.1, step 1.2, algebra]

3.2 Represent $x,y\in L$ by finite rational smooth cycles in the given $F$, away from $K$, and choose finite rational CONTINUOUS bounding chains in $R$. Use its pre-collar-push model and the actual positive normal product of [F5]. Push the first chain into the positive complementary side, with boundary the actual positive Seifert push $x^+$; leave the second chain in $R$ with boundary $y$. An intrinsic boundary-collar push of their interiors and the common product near $F$ give the usual collared bounding chains in $B^4$, missing the corner $K$. Their supports are disjoint compact sets by the actual two-sided product. Choose disjoint relatively open smooth ambient neighborhoods $U,V\subset B^4$ of those supports, including their boundary cycles; these are smooth manifolds with boundary as open subsets of the standard smooth ball. In $U$, [F6] makes the smooth cycle $x^+$ bound a finite smooth real chain, since it bounds continuously there; likewise $y$ bounds in $V$. In each finite set of occurring simplices the equations for the boundary coefficients are rational, so rational Gaussian elimination replaces the real coefficients by rational ones without enlarging support. Near $S^3$, move the interiors inward and attach the standard product of the fixed boundary cycle with the collar interval. This puts both chains in common standard end collars, still in disjoint $U,V$. They therefore have empty interior intersection, and [F3] gives $V_{\mathbb Q}(x,y)=\operatorname{lk}(x^+,y)=0$. The smoothing here concerns only chains in the disjoint SMOOTH ambient regions; it assumes no smooth structure on $R$ or its TOP normal chart. [F1, F3, F5, F6, step 3.1, construct, algebra]

3.3 Apply the unchanged integral-saturation result [F4] to this $g$-dimensional rational isotropic subspace: $M=H_1(F;\mathbb Z)\cap L$ is a primitive rank-$g$ direct summand with $V|_{M\times M}=0$. This proves the full locally flat Statement, with the external geometric inputs explicitly located in [F5]'s hypersurface supplier and the resolved smooth/rank/saturation arguments retained. [F4, step 3.1, step 3.2, algebra] ∎
