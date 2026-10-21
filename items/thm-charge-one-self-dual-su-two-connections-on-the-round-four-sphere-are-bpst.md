---
id: thm-charge-one-self-dual-su-two-connections-on-the-round-four-sphere-are-bpst
kind: theorem
title: Charge-one self-dual SU(2) connections on the round four-sphere are BPST connections
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-sharp-four-dimensional-sobolev-constant-from-triangular-transport
  - lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - thm-strong-maximum-principle-for-classical-subharmonic-functions
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-path-lifting-for-covering-maps
  - thm-homotopy-lifting-for-covering-maps
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gursky, Kelleher and Streets, A Conformally Invariant Gap Theorem in Yang–Mills Theory
      url: https://arxiv.org/pdf/1708.01157
      locator: complete §§2–3, especially refined Kato, curvature algebra and equality parallelism; sharp sphere inequality is supplied locally
    - title: Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: §I.4, printed284–285, the required charge-one classification interface; its citation is not used as a proof
---

## Statement

Assume full AC. Give the unit round $S^4$ its oriented metric and an $SU(2)$ bundle with second Chern number $-1$. Every smooth connection satisfying $F_A^-=0$ is gauge-equivalent to a BPST connection. More explicitly, fix an oriented stereographic identification $S^4\setminus\{\infty\}=\mathbb H$; after a smooth bundle isomorphism the connection on this chart has the form
$$A_{z,\lambda}=\frac{\operatorname{Im}((q-z)\,d\overline{(q-z)})}{\lambda^2+|q-z|^2},\qquad z\in\mathbb H,\quad\lambda>0.$$
These parameters are unique for its unbased gauge class. The statement includes a smooth comparison isomorphism of the given bundle with the model bundle, rather than only an identification of curvature norms. It does not assert an inverse gluing theorem on another four-manifold.

## Statement references

[Gursky–Kelleher–Streets, §§2–3](https://arxiv.org/pdf/1708.01157)

[Donaldson, §I.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

[F1] The sharp round-sphere inequality is $\int(6|du|^2+12u^2)\ge8\sqrt6\pi(\int|u|^4)^{1/2}$. Its full proof is [[lem-sharp-four-dimensional-sobolev-constant-from-triangular-transport]].

[F2] Compact Sobolev spaces have smooth density, weak compactness and the stated elliptic regularity; $H^3$ in dimension four is an algebra. [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] [[lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections]]

[F3] With $|v|^2=-\operatorname{tr}_{\mathbb C^2}(v^2)$ on $\mathfrak{su}(2)$ and the ordinary exterior-power metric on two-forms, Chern–Weil gives $\int|F_A|^2=-8\pi^2c_2(E)[S^4]=8\pi^2$ for this self-dual connection. [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

[F4] A classical Euclidean subharmonic function attaining an interior maximum is constant; $S^4$ is simply connected, and covering paths lift uniquely. [[thm-strong-maximum-principle-for-classical-subharmonic-functions]] [[thm-higher-dimensional-spheres-are-simply-connected]] [[thm-path-lifting-for-covering-maps]] [[thm-homotopy-lifting-for-covering-maps]]

[F5] Integral Cauchy–Schwarz and polynomial product estimates use [[thm-holder-inequality-for-integrals]]. Full AC is inherited through [F1]–[F3]. [[def-axiom-of-choice]]

## Proof

**Given:** Full AC, the unit round metric, the fixed determinant-one bundle and the smooth self-dual charge-one connection. Write $\Delta=\operatorname{div}\nabla$ for the scalar Laplacian, so $-\Delta$ is nonnegative.

1.1 **The exact curvature identity and algebra.** Put $f=|F_A|$. The Bianchi identity and self-duality give $d_AF_A=d_A^*F_A=0$. Expanding $d_Ad_A^*+d_A^*d_A$ at a normal orthonormal frame gives, on a bundle-valued two-form $\omega$, the principal term $-\nabla_k\nabla_k\omega_{ij}$ and commutators $[\nabla_k,\nabla_i]\omega_{kj}-[\nabla_k,\nabla_j]\omega_{ki}$. Only conformally flat metrics are needed. Diagonalize their Ricci tensor at the point, with eigenvalues $r_i$. Their sectional curvature entries are $R_{ijij}=(r_i+r_j)/2-s/6$, so the tangent contribution on $\omega_{ij}$ is $(r_i+r_j-2R_{ijij})\omega_{ij}=(s/3)\omega_{ij}$; the other entries vanish in this frame. This proves the required tangent curvature term directly. The gauge term at $\omega=F_A$ is $2\sum_k[F_{ki},F_{kj}]$. Choose an oriented orthonormal self-dual basis $e_1=(dx^{01}+dx^{23})/\sqrt2$, $e_2=(dx^{02}-dx^{13})/\sqrt2$, $e_3=(dx^{03}+dx^{12})/\sqrt2$, and the adjoint basis $T_1=i/\sqrt2,T_2=j/\sqrt2,T_3=k/\sqrt2$, so $[T_a,T_b]=\sqrt2\epsilon_{abc}T_c$. Write $F=M_{ab}e_aT_b$. For a signed diagonal $M=\operatorname{diag}(a,b,c)$, the $01$ component of the gauge term is $2\sqrt2bcT_1$, and the analogous other five components give total pairing $12abc$. Orthogonal changes in the two oriented three-dimensional bases reduce any $M$ to this signed diagonal form; thus that pairing is $12\det M$. On a conformally flat metric the Bochner formula is consequently $\frac12\Delta f^2=|\nabla_AF|^2+(s/3)f^2-\mathcal C(F)$, where $\mathcal C(F)=-12\det M$. The singular-value arithmetic-geometric-mean inequality gives $\mathcal C(F)\le12|\det M|\le(4/\sqrt3)f^3$. Equality for $F\ne0$ forces its three singular values equal and its determinant negative. Set $C=4/\sqrt3$. These formulas apply to every conformally flat metric used below, not only to the round one. [F2, F3, given, construct, algebra]

2.1 **Refined Kato with its conformal calculation.** On the open set $f>0$ replace the metric $g$ by $\widehat g=f g$. The star on two-forms is unchanged, so $F$ is still closed and co-closed; its new norm is one. For any conformal change $\widehat g=v^2g$, the connection formula $\widehat\Gamma^k_{ij}=\Gamma^k_{ij}+\delta_i^k\partial_j\log v+\delta_j^k\partial_i\log v-g_{ij}\partial^k\log v$ gives $s_{\widehat g}=v^{-3}(-6\Delta v+s_gv)$ by contraction. Insert $v=\sqrt f$ into the norm-one Bochner formula of step 1.1. The curvature cubic scales by $f^{-3}$, and scalar curvature contributes $f^{-3}((s/3)f^2-f\Delta f+\frac12|df|^2)$. Comparison with the original identity $f\Delta f+|df|^2=|\nabla_AF|^2+(s/3)f^2-\mathcal C(F)$ therefore gives $f^3|\widehat\nabla_AF|_{\widehat g}^2=|\nabla_AF|^2-\frac32|df|^2$. In particular the right side is nonnegative. On the round sphere step 1.1 now implies $\Delta f\ge\frac12|df|^2/f+4f-Cf^2$ wherever $f>0$. No assertion about smoothness of $f$ at its zero set has been used. [step 1.1, construct, algebra]

3.1 **The zeros and the sharp equality are justified.** Let $u_\varepsilon=(f^2+\varepsilon^2)^{1/4}$, a positive smooth function. Differentiating it and using step 2.1 gives $(-6\Delta+12-3Cf)u_\varepsilon\le12\varepsilon^{1/2}$. Indeed the remaining gradient term in $\Delta u_\varepsilon$ has coefficient $3\varepsilon^2(f^2+\varepsilon^2)^{-7/4}/4\ge0$, and the error is $(12-3Cf)\varepsilon^2(f^2+\varepsilon^2)^{-3/4}\le12\varepsilon^{1/2}$. This inequality extends across the zero set by continuity: at an interior zero region it is immediate, and elsewhere take a sequence with $f>0$. Multiplication by $u_\varepsilon$ and integration bounds its $H^1$ norm uniformly. It converges uniformly to $u=\sqrt f$, so weak compactness [F2] and the inequality give $E(u):=\int(6|du|^2+12u^2)\le3C\int f^2$. By smooth density [F2], [F1] also holds for this $H^1$ limit. Since $\int f^2=8\pi^2$ by [F3] and $8\sqrt6\pi=3C\sqrt{8\pi^2}$, both sides coincide: $E(u)=8\sqrt6\pi(\int u^4)^{1/2}=3C\int u^4$. Thus $u$ is an actual nonzero minimizer of that sharp Sobolev quotient, not merely a formal power of the curvature. [F1, F2, F3, F5, step 2.1, construct, algebra]

4.1 **Smoothness and positivity of the minimizing factor.** Variation of the quotient in smooth directions, using Hölder to differentiate $\int u^4$, gives $-6\Delta u+12u=3Cu^3$ weakly. The function $u$ is bounded. Smooth bounded mollification in charts proves the weak chain rule $d(u^3)=3u^2du$, so $u^3\in H^1$. The compact elliptic estimate [F2] gives $u\in H^3$. Its algebra property then gives successively $u\in H^5,H^7,\ldots$, hence $u$ is smooth. For positivity, use any stereographic chart, with $g=\Omega^2\delta$ and $\Omega=2/(1+|y|^2)$. The scalar conformal formula from step 2.1 gives $-6\Delta_{\mathbb R^4}(\Omega u)=3C(\Omega u)^3$. Thus $-\Omega u\le0$ is subharmonic. If it has an interior zero, [F4] makes it identically zero on that chart, and then $u=0$ globally by continuity, contradicting [F3]. A chart containing any specified point exists, so $u>0$ everywhere. Consequently $g'=u^2g$ is a smooth global metric, with scalar curvature $s'=3C$ and $|F|_{g'}=1$. The norm-one Bochner formula and step 1.1 give $0=|\nabla'_AF|^2+C-\mathcal C_{g'}(F)$, a sum of nonnegative terms. Therefore $\nabla'_AF=0$ and the three curvature singular values are equal, nonzero, with negative determinant. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 **Parallel full-rank curvature forces the conformal metric to be round.** The parallel curvature identifies $\Lambda^+_{g'}$ with $\operatorname{ad}E$ by a constant scalar times an orthogonal map. Under this parallel identification the induced connection on $\Lambda^+$ has the curvature of the adjoint connection, namely $\operatorname{ad}F$, which is self-dual in its base two-form variable. The anti-self-dual base part of the curvature of $\Lambda^+$ is exactly the trace-free Ricci block of the Riemann curvature operator. To check its vanishing directly, diagonalize the trace-free Ricci tensor at a point, with eigenvalues $r_0,r_1,r_2,r_3$ of sum zero. The conformally flat curvature formula gives the three cross-block entries proportional to $r_0+r_1$, $r_0+r_2$, $r_0+r_3$; if they vanish, all four eigenvalues vanish. Thus $g'$ is Einstein. Put $w=1/u$. The trace-free part of the conformal Ricci formula obtained from the Christoffel formula in step 2.1 is $2w^{-1}(\operatorname{Hess}_g w)_0$. Hence $\operatorname{Hess}_g w=(\Delta_gw/4)g$. Taking divergence on the unit sphere gives $d(\Delta w+4w)=0$, so for a constant $a$ the function $h=w-a$ satisfies $\operatorname{Hess}h=-hg$. Restriction to every unit-speed great circle solves $h''=-h$; its value and gradient at one point determine the solution on all those circles. Comparing with the coordinate functions on $S^4\subset\mathbb R^5$ gives $w=a+b\cdot x$, with $a>|b|$ because $w>0$. [step 1.1, step 2.1, step 4.1, construct, algebra]

6.1 **The actual conformal parameters.** In the fixed stereographic coordinates write $b=(b',b_4)$, $x=(2y/(1+|y|^2),(|y|^2-1)/(1+|y|^2))$. Then $g'=4\delta/((a+b_4)|y|^2+2b'\cdot y+a-b_4)^2$. Set $A=a+b_4>0$, $z=-b'/A$ and $\lambda=\sqrt{a^2-|b|^2}/A>0$. Completing the square gives $g'=(a^2-|b|^2)^{-1}\Phi^*g$, where $\Phi(y)=(y-z)/\lambda$ extends to an orientation-preserving conformal diffeomorphism of the sphere. Its scalar curvature is $12(a^2-|b|^2)=3C$, hence $a^2-|b|^2=1/\sqrt3$. It follows that, after this actual coordinate transport and an irrelevant constant metric scaling, the original connection has parallel full-rank self-dual curvature for the unit round metric. This derives the conformal normal form without invoking a Yamabe equality-classification or space-form theorem. [step 4.1, step 5.1, construct, algebra]

7.1 **The model and its connection, not only its norm.** Let $I=\operatorname{Im}(q\,d\bar q)/(1+|q|^2)$. Writing $q=r v$, $|v|=1$, gives $I=t v\,d\bar v$, $t=r^2/(1+r^2)$, and $d(v\,d\bar v)=-(v\,d\bar v)\wedge(v\,d\bar v)$. Differentiation gives $F_I=(1+|q|^2)^{-2}\operatorname{Im}(dq\wedge d\bar q)=-2(1+|q|^2)^{-2}\sum_a\omega_a q_a$, where $\omega_a=\sqrt2e_a$ and $(q_1,q_2,q_3)=(i,j,k)$. In the orthonormal round coframe $\theta^i=\Omega dy^i$ this is $F_I=-\sum_a e'_aT_a$. The Levi-Civita connection forms are $\omega_{ij}=2(y_i\,dy_j-y_j\,dy_i)/(1+|y|^2)$; their induced action on the three self-dual forms is the adjoint action of $I$, as follows by substituting $I_a=-(\omega_{0a}+\omega_{bc})/2$ with the cyclic signs of the displayed $e_a$. Thus $F_I$ is parallel. Gauge transformation by $v$ gives $I^v=(1+r^2)^{-1}\bar v\,dv$, which under inversion becomes $\operatorname{Im}(\bar y\,dy)/(1+|y|^2)$ and extends smoothly at infinity. This constructs a smooth model bundle and connection on the whole sphere. Its curvature has norm square $48(1+|y|^2)^{-4}$ in the Euclidean chart, and [F3]'s curvature integral gives its Chern number $-1$. Translation and dilation pullback give exactly the forms $A_{z,\lambda}$ in the Statement. [F3, step 1.1, step 6.1, construct, algebra]

8.1 **A smooth gauge comparison and uniqueness.** After the transport of step 6.1, compare the given connection with $I$. Both have parallel full-rank curvature, with equal singular values and the same determinant sign by step 4.1 and step 7.1. Therefore $F_I\circ F_A^{-1}$ is a parallel orientation-preserving isometry between their adjoint bundles, intertwining their connections. An orientation-preserving isometry of the three-dimensional adjoint fibers preserves the bracket $[T_a,T_b]=\sqrt2\epsilon_{abc}T_c$. Its lifts to determinant-one unitary bundle isomorphisms form a two-sheeted covering of $S^4$: locally $SU(2)\to SO(3)$ is the quaternionic conjugation map with kernel $\{\pm1\}$, and its differential is an isomorphism. Choose one lift at a point; [F4] and simple connectivity extend it uniquely over all paths, with path independence by lifting a contracting homotopy. Local covering charts show this lift is smooth. It intertwines the connections because its adjoint differential does so, and the Lie algebra map $\mathfrak{su}(2)\to\mathfrak{so}(3)$ is injective. This is the required actual bundle/gauge identification. Finally the Euclidean curvature density of $A_{z,\lambda}$ is $48\lambda^4/(\lambda^2+|y-z|^2)^4$. Its unique maximum locates $z$, and its maximum value $48\lambda^{-4}$ locates $\lambda$. Gauge-equivalent forms have the same density, so these parameters are unique. This proves the full classification without assuming charge-one energy already implies the model. [F3, F4, step 1.1, step 4.1, step 6.1, step 7.1, construct, algebra] ∎

## Source notes

The complete eleven-page Gursky–Kelleher–Streets paper was read, including every preliminary inequality and its full main proof. Its tensor norm on two-forms is twice the exterior-power norm used here, so its charge-one energy $16\pi^2$ and cubic constant $4/\sqrt6$ become $8\pi^2$ and $4/\sqrt3$ here. The Bochner contraction and determinant algebra have been recalculated in this convention. The sharp sphere constant is independently supplied by the finite triangular-transport proof. The argument replaces an imported Yamabe theorem by an actual $H^1$ minimizer obtained from the given curvature, proves positivity and smoothness, and derives the conformal round factor directly from its Hessian equation. Donaldson §I.4 was read as the required application interface, not as an imported classification proof.
