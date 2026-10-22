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
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
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

[F5] For a smooth slice disk the hypersurface supplier now constructs the entire smooth Seifert three-manifold with the actual two-sided product and positive-push alignment. Its proof also retains the pre-collar-push model meeting the outer sphere in $F$, with product corners at $K$. [[lem-locally-flat-slice-surface-bounds-seifert-hypersurface]]

[F6] Smooth chains compute continuous real homology, including for a manifold with boundary; finite relative simplex smoothing preserves compatible faces. [[thm-smooth-singular-chains-compute-singular-homology]]

[L1] For an arbitrary locally flat TOP disk the same hypersurface existence and aligned product remain unproved. The smooth result in [F5] is not used as a TOP premise. [[lem-locally-flat-slice-surface-bounds-seifert-hypersurface]]

## Proof

1.1 First assume the given disk is smooth. Construct $R$ by [F5], and write $\Sigma=\partial R=F\cup D$ after matching collars. The Axiom of Choice [A1] is the hypothesis under which the supplied Seifert-pairing and duality interfaces are invoked. Capping the sole boundary circle of $F$ by a disk does not change $H_1$ because that circle is already the boundary of the oriented fundamental $2$-chain of $F$; hence $H_1(F;\mathbb Q)\cong H_1(\Sigma;\mathbb Q)$ has dimension $2g$. In the pair sequence, $H_0(\Sigma;\mathbb Q)\to H_0(R;\mathbb Q)$ is an isomorphism because both are connected. Exactness therefore makes $H_1(R;\mathbb Q)\to H_1(R,\Sigma;\mathbb Q)$ surjective. By [F2], the target has dimension $b_2(R)$, so the image of $H_1(\Sigma;\mathbb Q)\to H_1(R;\mathbb Q)$ has dimension $b_1(R)-b_2(R)$. [A1, F2, F5, given, construct, algebra]

1.2 The double of $R$ along $\Sigma$ is a closed $3$-manifold and has Euler characteristic zero; Mayer–Vietoris gives $2\chi(R)-\chi(\Sigma)=0$. Since $\chi(\Sigma)=2-2g$, this yields $\chi(R)=1-g$. Also [F2] gives $H_3(R;\mathbb Q)\cong H^0(R,\Sigma;\mathbb Q)=0$. With $b_0(R)=1$, the Euler-characteristic identity implies $b_1(R)-b_2(R)=g$. Thus the kernel $L=\ker(H_1(\Sigma;\mathbb Q)\to H_1(R;\mathbb Q))$, identified with a subspace of $H_1(F;\mathbb Q)$, has dimension $2g-g=g$. [F2, step 1.1, algebra]

2.1 Let $x,y\in L$, represented by finite rational smooth cycles on $F$ away from $K$. Their rational bounding chains in $R$ can be taken smooth. Indeed [F6] first supplies finite smooth real bounding chains; their boundary equations are one finite rational linear system on the real coefficients of finitely many smooth simplices, so rational Gaussian elimination supplies rational coefficients solving the same equations. Use the pre-collar-push model in [F5] to place the boundary cycles back on the actual $F\subset S^3$. A finite intrinsic collar push moves the interiors of their bounding chains off the boundary of $R$, fixing the prescribed boundary collars, so the chains miss the product corner $K$. The model is smooth on a neighborhood of these compact supports. Its positive normal field is tangent to $S^3$ along $F$ and points in the positive Seifert direction; extend it by finitely many bumps to an ambient field tangent to $S^3$ there. Its small-time flow pushes the first bounding chain $X$ off $R$, with boundary exactly $x^+$ in $S^3$, while the second chain $Y$ stays in $R$ with boundary $y$. Compactness and the product neighborhood keep the two supports disjoint. Their common standard end collars and empty intersection make them admissible for [F3], so $\operatorname{lk}(x^+,y)=X^+\mathbin\cdot Y=0$. By [F1] this is $V_{\mathbb Q}(x,y)$. Hence $L$ is a rational Seifert-isotropic subspace. [F1, F3, F5, F6, step 1.2, construct, algebra]

2.2 By [F4], $M=H_1(F;\mathbb Z)\cap L$ is a rank-$g$ direct summand and $V|_{M\times M}=0$. The definition of a metabolic Seifert lattice then makes $M$ a metabolizer. This proves the entire metabolic conclusion whenever the supplied slice disk is smooth. [F4, step 1.2, step 2.1, algebra]

3.1 The full locally flat TOP branch still requires [L1]. The global TOP normal-disk and collar-compatible regular-fiber constructions are not consequences of the complement meridian class, and the smooth ODE/regular-value proof of [F5] is not substituted for them. The complete original locally flat Statement is retained; steps 1.1–2.2 prove its smooth branch and do not assert completion of the TOP branch. [L1, step 1.1, step 1.2, step 2.1, step 2.2]
