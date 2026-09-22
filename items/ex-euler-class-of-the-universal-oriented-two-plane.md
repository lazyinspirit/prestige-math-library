---
id: ex-euler-class-of-the-universal-oriented-two-plane
kind: example
title: Euler class of the universal oriented two-plane
status: draft
origin: pipeline
deps: ["def-oriented-grassmannian-and-tautological-oriented-bundle", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "thm-oriented-real-vector-bundles-are-classified-by-bso", "lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type", "thm-subordinate-partitions-of-unity-exist", "def-dependent-choice", "thm-recursion", "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "def-thom-class-by-fiberwise-normalization", "def-fundamental-class-of-a-compact-oriented-manifold", "thm-excision-for-singular-cohomology", "cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms", "def-kronecker-evaluation-pairing", "thm-mod-two-euler-class-is-the-top-stiefel-whitney-class", "lem-mod-two-cohomology-rings-of-complex-projective-spaces", "prop-singular-cohomology-is-contravariantly-functorial", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "def-axiom-of-choice"]
forward_refs: [lem-cohomology-ring-of-infinite-complex-projective-space, def-chern-classes-from-the-projective-bundle-relation, prop-first-chern-class-of-tensor-dual-and-conjugate-lines]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§3.2 Euler class of the universal oriented two-plane, printed pp.88–94"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 35, printed pp.130–132"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§9 the oriented two-plane, printed pp.115–124"
---

## Example

Assume AC. Put $B=B\operatorname{SO}(2)=\operatorname{Gr}_2^+(\mathbb R^\infty)$ and $C=\mathbb{CP}^\infty$. There is a homotopy equivalence $f:C\to B$ with $f^*\gamma_2^+\cong\gamma_{\mathbb R}$ as oriented bundles, where $\gamma$ is the tautological complex line. Consequently
$$H^2(B;\mathbb Z)=\mathbb Z\cdot e(\gamma_2^+),\qquad f^*e(\gamma_2^+)=u:=e(\gamma_{\mathbb R}).$$
The fiber orientation here is the complex orientation. To specify the sign on the base, if $x$ is the positive generator on the standard complex-oriented $\mathbb{CP}^1$, then $u|_{\mathbb{CP}^1}=-x$. Moreover
$$\rho_2(e(\gamma_2^+))=w_2(\gamma_2^+)\ne0.$$

## Facts & Assumptions

**Given:** The stable oriented real rank-two tautological bundle and the stable complex tautological line, with their Euclidean and Hermitian metrics.

[F1] The oriented Grassmannian is the double cover of the real Grassmannian, and its tautological bundle is the oriented pullback of the real tautological bundle ([[def-oriented-grassmannian-and-tautological-oriented-bundle]]). Stable real and complex Grassmannians carry the Schubert CW structures ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]).

[F2] Over paracompact Hausdorff CGWH bases, maps to these Grassmannians classify numerable real or complex bundles, and maps to the oriented Grassmannian classify numerable oriented real bundles ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[thm-oriented-real-vector-bundles-are-classified-by-bso]]).

[F3] Under AC, numerable compact-fiber bundle totals over paracompact Hausdorff bases are paracompact Hausdorff and have CW type when base and fiber have CW type ([[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]]). Partitions subordinate to open covers exist under AC and DC ([[thm-subordinate-partitions-of-unity-exist]]). For any entire relation, AC selects one successor globally and natural-number recursion from the prescribed initial point produces the DC sequence ([[def-dependent-choice]], [[thm-recursion]]).

[F4] Euler classes are natural under oriented pullback between bases in the Thom scope ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]). The class $u=e(\gamma_{\mathbb R})$ generates $H^2(C;\mathbb Z)$ ([[lem-cohomology-ring-of-infinite-complex-projective-space]]).

[F5] For complex lines $c_1(L)=e(L_{\mathbb R})$ and $c_1(L^*)=-c_1(L)$ ([[def-chern-classes-from-the-projective-bundle-relation]], [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]). The Euler class is the zero-section pullback of the absolute image of the fiber-normalized Thom class; excision identifies the corresponding local class, and the fundamental class restricts to the positive local orientation generator ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]], [[def-thom-class-by-fiberwise-normalization]], [[thm-excision-for-singular-cohomology]], [[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]], [[def-fundamental-class-of-a-compact-oriented-manifold]], [[def-kronecker-evaluation-pairing]]).

[F6] Reduction of the integral Euler class is the top Stiefel–Whitney class on admissible bases ([[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]]). In mod-two cohomology the degree-two generator of $C$ restricts to the nonzero reduction of the integral generator of $\mathbb{CP}^1$ ([[lem-mod-two-cohomology-rings-of-complex-projective-spaces]]).

[F7] Cohomology is functorial, coefficient changes commute with pullbacks, and homotopic maps induce equal maps for every coefficient group ([[prop-singular-cohomology-is-contravariantly-functorial]], [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[A1] Assume AC ([[def-axiom-of-choice]]).

## Verification
1.1 Base hypotheses. The real Grassmannian and $C$ are CW complexes by [F1]. The double cover $B\to\operatorname{Gr}_2(\mathbb R^\infty)$ is numerable by a partition subordinate to evenly covered neighborhoods. Its fiber is the compact two-point CW complex, and the CW base is paracompact Hausdorff and CGWH. The separate paracompactness, compact-generation, and CW-type clauses of [F3] therefore make $B$ paracompact Hausdorff CGWH of CW type; Hausdorff also makes it weak Hausdorff. Thus both $B$ and $C$ satisfy the classification and Thom base hypotheses. Partitions subordinate to the tautological linear charts make their bundles numerable; the same holds for their pullbacks. These are the uses of AC and its consequence DC. [F1, F3, A1]

1.2 Complex structures on planes. On an oriented Euclidean plane let $J$ be the positive quarter turn. In each positive orthonormal frame it has the same matrix, which commutes with every transition rotation in $\operatorname{SO}(2)$; hence $J$ is continuous and makes $\gamma_2^+$ a complex line $\eta$. If $T$ is any orientation-preserving real isomorphism between complex lines, its complex-linear part is $T^{1,0}=(T-J_{\rm target}TJ_{\rm source})/2$. In complex coordinates $T(z)=az+b\bar z$, and $\det_{\mathbb R}T=|a|^2-|b|^2>0$ implies $a\ne0$. Therefore $T^{1,0}$ is a complex-linear isomorphism. This formula is continuous and independent of frames, so it also applies to bundle isomorphisms. [F1]

2.1 Classifying maps. By [F2], choose $f:C\to B$ classifying $\gamma_{\mathbb R}$ with its complex orientation, and $g:B\to C$ classifying $\eta$. The complex charts of $\eta$ constructed in step 1.2 admit a subordinate partition by step 1.1. The composite $fg$ classifies $\eta_{\mathbb R}=\gamma_2^+$, so $fg\simeq1_B$. The oriented isomorphism $f^*\eta_{\mathbb R}\cong\gamma_{\mathbb R}$ yields a complex isomorphism $f^*\eta\cong\gamma$ by step 1.2; therefore $gf\simeq1_C$. Composition of pullbacks is identified fiberwise by $(x,(f(x),v))\mapsto(x,v)$. Thus $f$ is a homotopy equivalence, without asserting a homeomorphism between the chosen Grassmannian models. [F2, step 1.1, step 1.2]

3.1 Integral generator. By [F7], $f^*:H^2(B;\mathbb Z)\to H^2(C;\mathbb Z)$ is an isomorphism. Naturality [F4] gives $f^*e(\gamma_2^+)=e(\gamma_{\mathbb R})=u$, which generates the target by [F4]. Hence $e(\gamma_2^+)$ generates the source. [F4, F7, step 2.1]

4.1 Sign on $\mathbb{CP}^1$. Put $M=\mathbb{CP}^1$, $L=\gamma^*|_M$, and $p=[1:0]$. The functional $(z_0,z_1)\mapsto z_1$ restricts on each line to a section $s$ of $L$, vanishing only at $p$. In the affine coordinate $w=z_1/z_0$ and the dual tautological frame $e(w)$, this section is $s(w)=w e(w)$. Choose a small closed coordinate disk $D=\{|w|\leq\varepsilon\}$ and write $a(w)=\|e(w)\|>0$. Define a section $\widetilde s$ of the unit disk bundle by $\widetilde s(q)=s(q)/(\varepsilon a(q))$ for $q\in D$ and $\widetilde s(q)=s(q)/\|s(q)\|$ for $q\notin\operatorname{int}D$. The two formulas agree on $\partial D$, where $\|s(w)\|=\varepsilon a(w)$, so $\widetilde s$ is continuous; it is sphere-valued on $A=M\setminus\operatorname{int}D$. Hence it is a genuine map of pairs $(M,A)\to(D(L),S(L))$ and pulls the normalized Thom class $U$ back to $\alpha\in H^2(M,A;\mathbb Z)$. The absolute image of $\alpha$ is $\widetilde s^*j^*U=e(L_{\mathbb R})=c_1(L)$ by [F5]: as maps to $D(L)$, $\widetilde s$ and the zero section are joined by the fiberwise straight-line homotopy $(1-t)\widetilde s$. Excision (equivalently the quotient identification $M/A\cong D/\partial D$) restricts $\alpha$ to the class induced on $(D,\partial D)$ by $w\mapsto w/(\varepsilon a(w))$ in the frame $e(w)$. The positive scalar factor preserves the complex orientation and the boundary map has degree $+1$, so this is the positive local orientation class. The complex-oriented fundamental class restricts to that generator, and the evaluation pairing gives $\langle c_1(L),[M]\rangle=+1$. Thus the positive generator is $x=c_1(\gamma^*)$, while [F5] gives $u|_M=c_1(\gamma)=-x$. Complex orientation of the bundle fiber therefore does not make its Euler number positive on the complex-oriented base. [F5, step 3.1]

5.1 Reduction and boundary. The admissibility and numerability checked in step 1.1 allow [F6] to give $\rho_2(e(\gamma_2^+))=w_2(\gamma_2^+)$. Its pullback and then restriction to $\mathbb{CP}^1$ is the nonzero reduction of $-x$ by [F6] and [F7], proving nonvanishing. This is a positive-rank computation on a nonempty base. For comparison, the trivial oriented two-plane over a point has Euler class zero since $H^2(\mathrm{pt};\mathbb Z)=0$ (its normalized singular cochain complex has no positive degrees); the rank-zero Euler unit lies instead in degree zero. [F6, F7, step 1.1, step 3.1, step 4.1] ∎
