---
id: lem-cmp-chsw-quintic-free-quotient-euler
kind: lemma
title: Free CHSW action and Euler characteristic of its quintic quotient
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
deps:
  - def-axiom-of-choice
  - cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic
  - lem-cmp-finite-cover-multiplies-euler-characteristic
  - lem-cmp-smooth-quintic-tangent-chern-classes
  - thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct
  - lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite
  - lem-proj-of-finitely-generated-graded-algebra-is-projective
  - thm-lying-over
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic: mathematical-premise
  lem-cmp-finite-cover-multiplies-euler-characteristic: mathematical-premise
  lem-cmp-smooth-quintic-tangent-chern-classes: mathematical-premise
  thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle: mathematical-premise
  thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations: mathematical-premise
  thm-chinese-remainder-theorem-for-comaximal-ideals: mathematical-premise
  lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct: mathematical-premise
  lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct: mathematical-premise
  lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite: mathematical-premise
  lem-proj-of-finitely-generated-graded-algebra-is-projective: mathematical-premise
  thm-lying-over: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Philip Candelas, Gary T. Horowitz, Andrew Strominger, and Edward Witten, Vacuum Configurations for Superstrings"
      url: "https://ooguri.caltech.edu/documents/31340/Candelas_Horowitz_Strominger_Witten.pdf"
      locator: "§4, journal pp. 62–65 (PDF pp. 17–20): the Fermat quintic, free Z5×Z5 action, and quotient generation example; the freeness and Euler calculations are reconstructed below."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Chapter 2, §2.2: Euler characteristic of finite CW complexes and the cellular calculation used with the local finite-cover lemma."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Purely mathematical geometry and Euler calculation for the specified quotient; no Ricci-flat metric existence or string background is asserted."
---

## Statement

Assume the Axiom of Choice. Let $Y_0\subset\mathbb P^4_{\mathbb C}$ be the connected Fermat quintic $\sum_{i=1}^5z_i^5=0$, let $\zeta$ be a primitive fifth root of unity, and define projective transformations
$$A(z_1,z_2,z_3,z_4,z_5)=(z_5,z_1,z_2,z_3,z_4),\qquad B(z_1,z_2,z_3,z_4,z_5)=(\zeta z_1,\zeta^2z_2,\zeta^3z_3,\zeta^4z_4,z_5).$$
Then $G=\langle A,B\rangle\cong\mathbb Z_5\times\mathbb Z_5$ has order $25$ and acts freely on $Y_0$. Its quotient $Y=Y_0/G$ is a smooth connected compact projective threefold with trivial canonical bundle and an induced Kähler class. The quotient map $\pi:Y_0\to Y$ is finite and surjective. The target has an affine open cover $V=\operatorname{Spec}B$ whose inverse images are $G$-invariant affine opens $U=\operatorname{Spec}A$, with $B=A^G$ and the quotient map induced by the inclusion $A^G\hookrightarrow A$; every closed-point fiber is one $G$-orbit. The Fermat holomorphic three-form descends to a nowhere-zero holomorphic three-form on $Y$, and the complex-orientation Euler characteristic is $\chi(Y)=-8$.

## Statement references

[[lem-cmp-smooth-quintic-tangent-chern-classes]]

[[lem-cmp-finite-cover-multiplies-euler-characteristic]]

[[cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic]]

[[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]]

## Facts & Assumptions

**Given:** The Fermat equation, the displayed transformations, a primitive fifth root $\zeta$, and the Axiom of Choice.

[F1] [[lem-cmp-smooth-quintic-tangent-chern-classes]] gives the topological class $c_3(TY_0)=-40H^3$ under the degree normalization $\int_{Y_0}H^3=5$. The proof below establishes that normalization directly before using this supplier's numerical consequence.

[F2] [[lem-cmp-finite-cover-multiplies-euler-characteristic]] gives $\chi(E)=d\chi(B)$ for a compact smooth $d$-sheeted cover.

[F3] [[cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic]] identifies the top-Chern Euler number of a compact complex manifold with its topological Euler characteristic.

[F4] [[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]] gives $c_n(E)=e(E_{\mathbb R})$ in integral cohomology for a numerable complex rank-$n$ bundle over a path-connected CW complex, with its complex orientation.

[F5] [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]] supplies a finite triangulation of the compact smooth boundaryless manifold $Y_0$, under AC.

[F6] [[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]] makes a polynomial algebra in finitely many variables over $\mathbb C$ Noetherian. A quotient is Noetherian because each ideal is the image of its inverse-image ideal. [[lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct]] makes every submodule of a finite module over a commutative Noetherian ring finite.

[F7] [[lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite]] makes an algebra generated by finitely many integral elements a finite module. [[thm-lying-over]], under AC, makes the map on spectra of an injective integral ring map surjective.

[F8] [[thm-chinese-remainder-theorem-for-comaximal-ideals]] supplies simultaneous prescribed residues at finitely many distinct complex points. [[lem-proj-of-finitely-generated-graded-algebra-is-projective]], under AC, makes the Proj of a finitely generated positively graded complex algebra with degree-zero part $\mathbb C$ and finite-dimensional homogeneous pieces projective.

[A1] Connectedness of the smooth Fermat quintic is a geometric input in this lemma. The local calculation below proves smoothness and freeness but does not derive connectedness from a general projective connectedness theorem.

[A2] The quotient is the ordinary orbit quotient by the specified finite algebraic group. Its projective quotient is constructed in the proof from an equivariant very ample line bundle and the finite-group invariant homogeneous coordinate ring.

## Proof

**Given:** The connected Fermat quintic $Y_0$, $A$, $B$, $\zeta$, [F1]–[F8], and [A1]–[A2].

1.1 The point $[1:-1:0:0:0]$ lies on $Y_0$, so it is nonempty. The partial derivatives of $f=\sum z_i^5$ are $5z_i^4$; they cannot all vanish at a projective point, so $Y_0$ is smooth. Both transformations preserve $f$. The diagonal entries of $ABA^{-1}$ are $(1,\zeta,\zeta^2,\zeta^3,\zeta^4)=\zeta^4(\zeta,\zeta^2,\zeta^3,\zeta^4,1)$, hence $ABA^{-1}=\zeta^4B$ as matrices and $A,B$ commute in $\operatorname{PGL}(5,\mathbb C)$. If $A^kB^\ell$ is projectively scalar and $k\not\equiv0\pmod5$, its coordinate permutation is a nontrivial 5-cycle, a contradiction; if $k=0$ and $\ell\ne0$, the entries $\zeta^\ell,\zeta^{2\ell},\zeta^{3\ell},\zeta^{4\ell},1$ are pairwise distinct and $B^\ell$ is not scalar. Thus the 25 elements $A^kB^\ell$ are distinct and form $G\cong\mathbb Z_5^2$. [given, A1, algebra]

1.2 Let $H$ be the topological first Chern class of $\mathcal O_{\mathbb P^4}(1)|_{Y_0}$. Three coordinate hyperplanes $z_1=z_2=z_3=0$ cut $Y_0$ in the five points of $z_4^5+z_5^5=0$ on $\mathbb P^1$. In the chart $z_5=1$, these are the five distinct roots of $t^5+1$; its derivative $5t^4$ is nonzero at every root, so the intersections are transverse. Each point has positive local intersection sign because all varieties carry their complex orientations. Therefore $\int_{Y_0}H^3=5$. Now [F1] applies and gives $\int_{Y_0}c_3(TY_0)=-40\cdot5=-200$. [given, F1, algebra]

2.1 A projective fixed point of $A^kB^\ell$ is an eigenline. For $k=0$ and $\ell\ne0$, the five diagonal eigenvalues of $B^\ell$ are distinct, so its eigenlines are the coordinate axes, none of which satisfies $\sum z_i^5=0$. For $k\ne0$, $A^kB^\ell$ is a monomial matrix whose permutation is a 5-cycle and whose five nonzero coefficients have product $\zeta^{10\ell}=1$; hence $(A^kB^\ell)^5=I$. An eigenvector $z$ has all coordinates nonzero, and the eigenvector equations raised to the fifth power show that the five values $z_i^5$ are equal. Their sum is then five times a nonzero complex number, not zero. No nonidentity element fixes a point of $Y_0$, so the action is free. [given, step 1.1, algebra]

2.2 Choose a very ample line bundle $L$ on $Y_0$ and form $L'=\bigotimes_{g\in G}g^*L$. Each factor is very ample, so the product of the corresponding embeddings followed by the Segre embedding makes $L'$ very ample; permuting the factors gives a $G$-linearization. Embed $Y_0$ by the complete linear system of $L'$ and let $S$ be its homogeneous coordinate ring, generated in degree one. Put $R=S^G$. The orbit polynomial $\prod_{g\in G}(T-gs)$ is monic over $R$ for every $s\in S$, so [F7] makes $S$ a finite $R$-module. Choose module generators $m_j$, including $1$, and express each $m_im_j$ and each degree-one algebra generator of $S$ as an $R$-linear combination of them. Let $A_0$ be the complex algebra generated by the finitely many coefficients. The $A_0$-span of the $m_j$ is a subalgebra containing every generator of $S$, hence equals $S$. By [F6], $A_0$ is Noetherian and its submodule $R\subset S$ is finite. Thus $R$ is a finitely generated complex algebra. It is graded with $R_0=\mathbb C$ and finite-dimensional homogeneous pieces; taking the homogeneous parts of any finite generating list gives homogeneous generators. By [F8], $Y:=\operatorname{Proj}R$ is projective. [given, A2, F6, F7, F8, step 1.1, construct]

3.1 For any finite orbit choose $s\in S_1$ nonzero at every orbit point: each forbidden vanishing is a proper linear hyperplane and finitely many such hyperplanes do not cover a complex vector space. Its norm $N(s)=\prod_{g\in G}gs$ is homogeneous invariant and nonzero on that orbit. Hence the positive-degree invariant principal opens cover $\operatorname{Proj}S=Y_0$, and the inclusion $R\hookrightarrow S$ defines a morphism to $Y$. For each homogeneous $f\in R$ of positive degree, the inverse image of $V_f=D_+(f)\subset Y$ is $U_f=D_+(f)\subset Y_0$. These are affine with rings $B_f=(R[f^{-1}])_0$ and $A_f=(S[f^{-1}])_0$. Averaging a numerator over $G$ shows $B_f=A_f^G$. The algebra $A_f$ is finite type over $\mathbb C$: if $e=\deg f$, the fractions of monomials of degree $e$ divided by $f$ generate it, by grouping any degree-$ke$ monomial into $k$ degree-$e$ monomials. Each element of $A_f$ is integral over $B_f$ by its orbit polynomial, so [F7] makes $A_f$ finite over $B_f$ and makes $\operatorname{Spec}A_f\to\operatorname{Spec}B_f$ surjective. Since the $V_f$ cover $Y$, the morphism is finite and surjective. In each source chart distinct finite closed orbits are separated by invariant functions: prescribe values $0$ and $1$ on the two orbits by [F8], and average over $G$. Thus each closed-point fiber is exactly one orbit. The finite morphism is proper analytically, so this continuous map from compact $Y_0$ onto Hausdorff projective $Y$ realizes the ordinary topological orbit quotient. Around any free orbit choose mutually disjoint analytic neighborhoods permuted by $G$; on one neighborhood the invariant local holomorphic functions on their union identify with all holomorphic functions there. This gives local biholomorphic quotient charts. Consequently $Y$ is smooth and $Y_0\to Y$ is a 25-sheeted covering; compactness and connectedness descend from $Y_0$. [given, A1, A2, F7, F8, step 2.1, step 2.2, construct, algebra]

4.1 Let $\vartheta=\iota_{\mathcal E}(dz_1\wedge\cdots\wedge dz_5)$ on $\mathbb C^5\setminus\{0\}$, where $\mathcal E=\sum_i z_i\partial_{z_i}$ is the Euler vector field. It is horizontal for scalar multiplication and homogeneous of weight $5$, so in the affine slices $z_j=1$ it defines compatible nowhere-zero local representatives of a section of $K_{\mathbb P^4}\otimes\mathcal O(5)$: changing the slice scales the horizontal form by the fifth power of the scalar, precisely the $\mathcal O(5)$ transition factor. This explicitly trivializes that line bundle and proves $K_{\mathbb P^4}\cong\mathcal O(-5)$. The polynomial $f=\sum_i z_i^5$ is a section of $\mathcal O(5)$. Since $Y_0$ is smooth, near every point choose holomorphic coordinates $(w,u_1,u_2,u_3)$ with $Y_0=\{w=0\}$. The meromorphic form $\vartheta/f$ has a simple pole there and can be written $a(w,u)(dw/w)\wedge du_1\wedge du_2\wedge du_3+\beta$, with $a$ holomorphic and nowhere zero and $\beta$ holomorphic. Its residue is $a(0,u)du_1\wedge du_2\wedge du_3$. Under a change of such coordinates $w'=b(w,u)w$ with $b$ nowhere zero, $dw'/w'=dw/w+db/b$; the additional holomorphic term has zero residue, while the tangential form changes by the canonical Jacobian. Thus the local residues glue to a nowhere-zero holomorphic three-form $\Omega_0$ on $Y_0$, the adjunction/residue construction. The matrices defining $A$ and $B$ both have determinant $1$ ($A$ is a 5-cycle and $\det B=\zeta^{10}=1$) and both preserve $f$. Since $g^*\vartheta=\det(g)\vartheta$ for a linear transformation commuting with $\mathcal E$, they preserve $\vartheta/f$ and hence $\Omega_0$. Invariance lets $\Omega_0$ descend uniquely through the quotient charts of step 3.1 to a nowhere-zero holomorphic three-form on $Y$, so $K_Y$ is trivial. The finite-group invariant-ring construction in step 2.2 also makes $Y$ projective; an ample class on $Y$ supplies a Kähler class. [given, step 1.1, step 2.2, step 3.1, algebra, construct]

5.1 By [F5], equip $Y_0$ itself with the finite CW structure of a finite triangulation. It is path-connected because it is a connected manifold. Its complex rank-three tangent bundle is numerable: a finite trivializing cover has a subordinate partition of unity on this compact smooth base. With its complex orientation, [F4] therefore identifies its top Chern class with its Euler class; [F3] gives $\chi(Y_0)=\int_{Y_0}c_3(TY_0)=-200$. Step 3.1 gives a 25-sheeted cover $Y_0\to Y$; applying [F2] to this cover yields $\chi(Y_0)=25\chi(Y)$, so $\chi(Y)=-200/25=-8$. [given, F2, F3, F4, F5, step 3.1, step 1.2, algebra] ∎

