---
id: lem-rational-ball-b2-bounds-lens-l4
kind: lemma
title: "A rational homology ball bounded by L(4,1)"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-complex-projective-space-and-holomorphic-charts
  - thm-cellular-homology-computes-singular-homology
  - thm-excision-for-singular-cohomology
  - thm-thom-isomorphism-for-oriented-vector-bundles
  - def-thom-class-by-fiberwise-normalization
  - lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold
  - thm-long-exact-sequence-of-a-pair-in-singular-cohomology
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-poincare-duality-for-oriented-topological-manifolds
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-geometric-intersection-pairing-on-a-closed-oriented-manifold
  - thm-geometric-intersection-equals-the-poincare-dual-cup-pairing
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - def-local-oriented-intersection-sign
  - def-oriented-intersection-number
  - thm-self-intersection-is-the-euler-number-of-the-normal-bundle
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - def-self-intersection-number-of-an-oriented-submanifold
  - def-lens-space-surgery-orientation-convention
  - lem-cyclic-cover-linking-form-inverse-matrix
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
axiom_strength: "Assume AC through the UCT, tubular-neighbourhood, Thom, Poincare-duality, geometric-intersection, and self-intersection suppliers; AC implies the ACω hypotheses of the lens-space convention."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Hisaaki Endo and Yusuf Z. Gurtas, Lantern Relations and Rational Blowdowns"
      url: "https://arxiv.org/pdf/0808.0386v1"
      locator: "Section 3, Theorem 3.1 proof and Figure 2; the rational ball B2 and its L(4,1) boundary"
---

## Statement

Assume AC. Let $Q\subset\mathbb{CP}^2$ be the nonsingular complex conic parametrized by $[s:t]\mapsto[s^2:st:t^2]$, let $N(Q)$ be a closed tubular disk bundle, and let $B_2=\overline{\mathbb{CP}^2\setminus\operatorname{int}N(Q)}$. Then $B_2$ is a smooth compact four-manifold with $H_*(B_2;\mathbb Q)\cong H_*(\mathrm{point};\mathbb Q)$. Its boundary is the circle bundle of Euler number $4$ over $S^2$, hence is the lens space $L(4,1)$ up to orientation; orient $B_2$ so that the boundary agrees with the stated lens-space convention.

## Statement references

[[def-complex-projective-space-and-holomorphic-charts|The complex projective plane and its complex orientation]]

[[def-lens-space-surgery-orientation-convention|The oriented lens-space surgery convention]]

[[thm-self-intersection-is-the-euler-number-of-the-normal-bundle|The normal Euler number equals self-intersection]]

## Facts & Assumptions

**Given:** AC and the complex-oriented projective plane, its conic $Q$, and a closed tubular disk bundle $N(Q)$.

[A1] AC is assumed by the UCT, tubular-neighbourhood, Thom, Poincare-duality, geometric-intersection, and self-intersection suppliers; AC implies the ACω hypotheses of the lens-space convention ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] The standard filtration $\mathbb{CP}^0\subset\mathbb{CP}^1\subset\mathbb{CP}^2$ and affine charts give one cell in dimensions $0,2,4$; cellular and universal-coefficient comparison compute its integral homology and cohomology ([[def-complex-projective-space-and-holomorphic-charts]], [[thm-cellular-homology-computes-singular-homology]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[F2] Excision identifies $H^*(\mathbb{CP}^2,B_2;\mathbb Z)$ with $H^*(N(Q),\partial N(Q);\mathbb Z)$, and the normalized oriented rank-two Thom class identifies the latter with $H^{*-2}(Q;\mathbb Z)$ and evaluates $+1$ on each positive normal disk. Its relative-to-absolute image in degree two is the Poincare dual of $Q$, with sign $(-1)^{2\cdot2}=+1$ ([[thm-excision-for-singular-cohomology]], [[thm-thom-isomorphism-for-oriented-vector-bundles]], [[def-thom-class-by-fiberwise-normalization]], [[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]]).

[F3] The complex orientation supplies the fundamental class; Poincare duality identifies $H^2(\mathbb{CP}^2;\mathbb Z)$ with $H_2(\mathbb{CP}^2;\mathbb Z)$; the geometric intersection pairing equals the Poincare-dual cup pairing and depends only on homology classes; homotopic maps induce the same homology map; and the local sign of a transverse intersection is determined by the ordered tangent orientations ([[def-fundamental-class-of-a-compact-oriented-manifold]], [[thm-poincare-duality-for-oriented-topological-manifolds]], [[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]], [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]], [[def-local-oriented-intersection-sign]], [[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]], [[def-oriented-intersection-number]]).

[F4] The self-intersection of a compact oriented surface in an oriented four-manifold equals the Euler number of its oriented normal bundle ([[def-self-intersection-number-of-an-oriented-submanifold]], [[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]]).

[F5] The lens-space convention defines $L(p,1)$ by $+p$ filling of the standard unknot exterior; the nonsingular surgery matrix gives $H_1\cong\mathbb Z/p$ ([[def-lens-space-surgery-orientation-convention]], [[lem-cyclic-cover-linking-form-inverse-matrix]]). The lens-space convention assumes countable choice, which follows from AC ([[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F6] The cohomology long exact sequence of the pair $(\mathbb{CP}^2,B_2)$ computes the cohomology of the complement from the relative and absolute groups ([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]).

## Proof

1.1 Choose the filtration $\mathbb{CP}^0\subset P\subset\mathbb{CP}^2$ with $P=\{y=0\}\cong\mathbb{CP}^1$ and $\mathbb{CP}^0=[1:0:0]$. Its successive complements are $\mathbb C$ and $\mathbb C^2$, so the cellular boundary maps vanish for degree reasons and $H_2(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[P]$, $H_4(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[\mathbb{CP}^2]$; UCT gives free cohomology, and put $h=\mathrm{PD}[P]$. The projective maps $T_t([x:y:z])=[x:y+tx:z]$ ($0\le t\le1$) give a homotopy from the inclusion of $P$ to that of $P'=\{y=x\}$. The two lines meet transversely at $[0:0:1]$ with positive sign, since a complex-linear isomorphism between their tangent complex lines and the ambient complex plane has positive real determinant. By [F3], $[P]^2=1$. On the charts $s\ne0$ and $t\ne0$, the conic map $[s:t]\mapsto[s^2:st:t^2]$ has target coordinates $(u,u^2)$ with $u=t/s$ and $(v^2,v)$ with $v=s/t$, respectively; these recover the source coordinate and have injective derivatives. Its image is exactly $xz-y^2=0$: if $x\ne0$ the point is $[1:y/x:(y/x)^2]$, and if $x=0$ then $y=0$ and the point is $[0:0:1]$. The same chart descriptions show the zero set is a smooth complex-oriented sphere and the map is an embedding. The line $P$ meets it at the two simple roots $st=0$, both transversely and positively in the complex orientations. Thus [F3] gives $[Q]\cdot[P]=2$; because $[P]$ generates $H_2$, this implies $[Q]=2[P]$, hence $[Q]\cdot[Q]=4$. [A1, F1, F3, given, algebra]

2.1 The normal Euler number of $Q$ is therefore $4$ by [F4]. Its unit normal circle bundle is the boundary of its tubular disk bundle. Compute its genus-one gluing directly from the conic charts, without assuming an Euler-to-surgery identification. In the chart $x=1$ write the surface as $(y,z)=(u,u^2)$ and use normal coordinate $n=z-y^2$. In the chart $z=1$ use normal coordinate $n'=x-y^2$. Their change is $n'=(z-y^2)/z^2$; differentiating in the normal direction on the conic gives $n'=u^{-4}n$ in the normal line bundle. On the equator $u=e^{i\varphi}$ its unit normal circle transition is therefore $\theta_N=\theta_S-4\varphi$. Each closed hemisphere has its actual displayed complex normal frame, so its unit circle bundle is $D^2\times S^1$, a solid torus. On their common torus let $m$ be the equator loop at fixed $\theta_S$, and $l$ the fiber loop. The southern solid-torus meridian is $m$, and the northern meridian is $m+4l$, since holding $\theta_N$ fixed gives that exact slope. Identify the southern solid torus with the standard unknot exterior by $l=\mu_U$, $m=\lambda_U$: its fiber is the core circle, while its base disk is the exterior meridian disk. The second filling slope is therefore $4\mu_U+\lambda_U$, with the global boundary orientation determined by the product identifications. If those identifications reverse the desired global orientation, reverse the orientation of the total space; the statement permits exactly that choice. Thus [F5] identifies the total circle bundle with $L(4,1)$ up to orientation, by an actual meridian calculation. The complement has the opposite boundary orientation to its tubular neighborhood in the complex-oriented projective plane; choose the orientation of $B_2$ as allowed in the Statement so its boundary agrees with the declared lens-space convention. [A1, F4, F5, step 1.1, construct, algebra]

2.2 By [F2], the relative cohomology groups of $(\mathbb{CP}^2,B_2)$ are $\mathbb Z$ in degrees $2$ and $4$ and zero otherwise, since $Q\cong S^2$. The relative-to-absolute map in degree two sends the Thom generator to $\mathrm{PD}[Q]$: the normal-Thom sign is $(-1)^{2\cdot2}=+1$ by [F2]. By step 1.1, $[Q]=2[P]$, so this map is multiplication by $2$ under $h=\mathrm{PD}[P]$. For degree four, let $a$ be the positive generator of $H^2(Q;\mathbb Z)$, with $\langle a,[Q]\rangle=1$. The Thom image of $a$ evaluates on $[\mathbb{CP}^2]$ as $\langle a,[Q]\rangle$: excision reduces the evaluation to the normal disk fibers, and the normalized Thom class evaluates $+1$ on each such fiber by [F2]. Thus the degree-four relative-to-absolute map sends a generator to a generator and is an isomorphism. [A1, F1, F2, F3, step 1.1, algebra]

3.1 By [F6], the cohomology long exact sequence of the pair gives $H^1(B_2;\mathbb Z)=0$, $H^2(B_2;\mathbb Z)\cong\mathbb Z/2$, and $H^j(B_2;\mathbb Z)=0$ for every $j\ge3$: in degree one the map $\mathbb Z\to\mathbb Z$ is injective multiplication by $2$, in degree two its cokernel is $\mathbb Z/2$ and the next relative group is zero, and in degree four the relative-to-absolute map is an isomorphism. In degree zero, the relative group vanishes, so $H^0(\mathbb{CP}^2;\mathbb Z)\to H^0(B_2;\mathbb Z)$ is an isomorphism; hence $B_2$ is connected. Repeat the relative calculation over $\mathbb Q$: the degree-two map is multiplication by $2$ and the degree-four map is the identity, both isomorphisms, so the pair sequence gives $H^j(B_2;\mathbb Q)=0$ for $j>0$ and $H^0(B_2;\mathbb Q)=\mathbb Q$. The UCT over $\mathbb Q$ then gives the rational homology of a point. Together with step 2.1 this proves that $B_2$ is a rational homology ball bounded by $L(4,1)$. [A1, F1, F6, step 2.1, step 2.2, algebra] ∎


## Remark

The picture is the one-component surgery diagram for the boundary circle bundle. The planar circle has no crossings and represents the unknot; its integer framing is specified by the label $+4$, meaning the chosen parallel has linking number $+4$ with the core. The proof identifies this handle attachment from the normal disk bundle and does not depend on the drawing.

~~~tikz
\begin{tikzpicture}
  \draw[thick] (0,0) circle (0.7);
  \node at (0,1.05) {$+4$};
  \node at (0,-1.05) {$U$};
\end{tikzpicture}
~~~
