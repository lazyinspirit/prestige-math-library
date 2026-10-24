---
id: lem-adhm-stable-quotient-and-torus-lift
kind: lemma
title: "Stable ADHM quotient charts, properness and torus lifts"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-linear-data-and-framed-monads
dependency_level: 1
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - def-axiom-of-choice
  - thm-holomorphic-implicit-function-theorem
  - def-free-and-proper-lie-group-actions
  - thm-free-proper-action-quotient-manifold
  - prop-tangent-space-of-a-free-proper-quotient
  - thm-heine-borel-rn
  - thm-gluing-affine-schemes
  - thm-jacobian-criterion-smooth-morphism
  - def-categorical-and-geometric-quotients-of-classical-varieties
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-holomorphic-implicit-function-theorem: mathematical-premise
  def-free-and-proper-lie-group-actions: mathematical-premise
  thm-free-proper-action-quotient-manifold: mathematical-premise
  prop-tangent-space-of-a-free-proper-quotient: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-gluing-affine-schemes: mathematical-premise
  thm-jacobian-criterion-smooth-morphism: mathematical-premise
  def-categorical-and-geometric-quotients-of-classical-varieties: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
verification:
  precheck: pass
---

## Statement

Assume AC. Fix $N\ge1$, $k\ge0$, $V=\mathbb C^k$ and $W=\mathbb C^N$ with their standard bases. Let $X$ be the stable locus in the complex ADHM equation $[B_1,B_2]+IJ=0$, where $B_i\in\operatorname{End}(V)$, $I:W\to V$, $J:V\to W$, and stability means that the vectors $B_{i_1}\cdots B_{i_m}I(w)$ span $V$. At a datum $x=(B_1,B_2,I,J)$, put $C^0=C^2=\operatorname{End}_{\mathbb C}(V)$ and $C^1=\operatorname{End}_{\mathbb C}(V)^2\oplus\operatorname{Hom}_{\mathbb C}(W,V)\oplus\operatorname{Hom}_{\mathbb C}(V,W)$. Define $d_0:C^0\to C^1$ by $d_0(\xi)=([\xi,B_1],[\xi,B_2],\xi I,-J\xi)$ and $d_1:C^1\to C^2$ by $d_1(\dot B_1,\dot B_2,\dot I,\dot J)=[\dot B_1,B_2]+[B_1,\dot B_2]+\dot I J+I\dot J$. These are the infinitesimal ADHM deformation maps at $x$. The action $g\cdot(B_1,B_2,I,J)=(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$ of $GL(V)$ on $X$ is free and proper. Its orbit quotient with quotient topology is a Hausdorff second-countable complex manifold of complex dimension $2kN$, with tangent space $\ker d_1/\operatorname{im}d_0$ for the infinitesimal ADHM deformation maps.

For $k>0$, a word frame $C(x)$ is a matrix whose columns are $k$ fixed words in $B_1,B_2$ applied to fixed standard framing basis vectors. The opens $U_C=\{x:\det C(x)\ne0\}$ cover $X$; words of length at most $k-1$ suffice. Each slice $S_C=\{x\in U_C:C(x)=I_V\}$ gives quotient coordinates, with $GL(V)\times S_C\to U_C$ a biholomorphism. Slice changes are holomorphic, in fact given by matrix inversion and polynomial operations on their domains. The quotient is also a separated smooth finite-type complex algebraic variety with a finite $T$-invariant affine atlas of these slices, and the map from $X$ is a geometric quotient in the regular-function sense.

Let $T=(S^1)^2\times(S^1)^N$ act by $(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$, with $h$ acting on the $\alpha$th standard framing vector by $e_\alpha^{-1}$. This descends to a smooth holomorphic action. At any fixed quotient point represented by $x$, there is a unique $g(t)\in GL(V)$ with $t\cdot x=g(t)\cdot x$. If column $\ell$ of $C(x)$ uses framing color $\alpha_\ell$ and contains $a_\ell,b_\ell$ letters $B_1,B_2$, then

$$g(t)=C(x)\operatorname{diag}(e_{\alpha_\ell}t_1^{a_\ell}t_2^{b_\ell})C(x)^{-1}.$$

Thus the lift is a smooth character representation, without assuming Zariski density or a GIT linearization theorem. For $k=0$ the quotient is a point and these matrices and tangent spaces have their empty-dimensional interpretations. No correspondence with a real moment-map quotient, sheaf moduli or ASD connections is asserted.

## Statement references

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[Nakajima–Yoshioka, §3.1: framed ADHM setting and fixed-point character conventions](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** AC and the stable complex ADHM data and actions in the Statement. [[def-axiom-of-choice]]

[F1] The complex equation, stability and action conventions are precisely the preceding raw matrix definitions, including $N=1$. The real and complex quotient presentations are distinct definitions until a correspondence is proved. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] A holomorphic map with a nonsingular derivative block has a holomorphic local graph for its zero locus. [[thm-holomorphic-implicit-function-theorem]]

[F3] A free proper smooth Lie-group action has a Hausdorff second-countable manifold quotient; its tangent space is the tangent space upstairs modulo the orbit tangent. Properness means compact inverse images under $(g,x)\mapsto(gx,x)$. [[def-free-and-proper-lie-group-actions]], [[thm-free-proper-action-quotient-manifold]], [[prop-tangent-space-of-a-free-proper-quotient]]

[F4] Closed bounded subsets of a finite-dimensional real Euclidean space are compact. [[thm-heine-borel-rn]]

[F5] Compatible affine schemes glue along open isomorphisms. A finite-presentation polynomial quotient with an invertible full equation-Jacobian minor is smooth of the corresponding relative dimension. A geometric quotient has orbit fibers, quotient topology and regular functions equal to invariant regular functions upstairs. [[thm-gluing-affine-schemes]], [[thm-jacobian-criterion-smooth-morphism]], [[def-categorical-and-geometric-quotients-of-classical-varieties]]

## Proof

**Given:** The stable equation locus $X$ and its $GL(V)$ action.

1.1 Let $V_m$ be the span of words of length at most $m$ applied to the standard framing vectors. If $V_m=V_{m+1}$, then $V_m$ is invariant under both $B_i$ and contains $I(W)$, so stability forces $V_m=V$. For $k>0$, stability gives $V_0\ne0$ and strict dimension growth continues until $V$ is reached; hence $V_{k-1}=V$. There are finitely many such words and framing colors, so finitely many possible word frames cover the stable locus by the opens $U_C$. Also $C(gx)=gC(x)$; a stabilizer fixing $x$ fixes every spanning word vector, and is therefore the identity. [given, F1, algebra]

2.1 For the complex equation $\mu=[B_1,B_2]+IJ$, its derivative is $d_1(\dot B_1,\dot B_2,\dot I,\dot J)=[\dot B_1,B_2]+[B_1,\dot B_2]+\dot I J+I\dot J$. If $\Theta\in\operatorname{End}(V)$ annihilates its image under the nondegenerate bilinear pairing $\operatorname{tr}(\Theta\,\cdot)$, variation of $\dot J$ gives $\Theta I=0$, and variation of the $\dot B_i$ gives $[\Theta,B_i]=0$. Thus $\Theta$ kills the spanning word vectors, and $\Theta=0$. Finite-dimensional duality makes $d_1$ surjective. Choose $k^2$ independent derivative columns and apply [F2]; the stable zero set is a complex manifold of dimension $k^2+2kN$ and tangent $\ker d_1$. Stability is open by the word-frame cover in step 1.1. The infinitesimal orbit map is $d_0(\xi)=([\xi,B_1],[\xi,B_2],\xi I,-J\xi)$; the same spanning argument makes it injective. [F1, F2, step 1.1, algebra]

3.1 To prove properness in [F3], let $K\subset X\times X$ be compact. At each pair $(y,x)\in K$, choose word frames $C$ and $D$ invertible at $x$ and $y$, respectively. Their frame charts are open in the finite-dimensional complex manifold $X$ from step 2.1, so local compactness gives neighborhoods $U\ni x$ and $V\ni y$ whose closures are compact and satisfy $\overline U\subset U_C$ and $\overline V\subset U_D$. The product neighborhoods $V\times U$ cover $K$, so compactness gives a finite subcover. Whenever $y'=g x'$ with $(y',x')\in V\times U$, equivariance of word frames gives $g=C(y')C(x')^{-1}$ and $g^{-1}=D(x')D(y')^{-1}$. The matrix-valued maps $C$ on $\overline V$, $C^{-1}$ on $\overline U$, $D$ on $\overline U$, and $D^{-1}$ on $\overline V$ are continuous on compact sets, hence bounded. Taking a maximum over the finite subcover bounds both $\|g\|$ and $\|g^{-1}\|$ by one constant $A\ge1$ throughout the action-graph inverse image. The matrix set $L=\{g:\|g\|\le A,\ \|gv\|\ge A^{-1}\|v\|\text{ for every }v\in V\}$ is closed and bounded in the real space of complex matrices, hence compact by [F4]; its elements are invertible. The desired inverse image is a closed subset of $L\times\operatorname{pr}_2K$, since the action is continuous and $K$ is closed in the Hausdorff space $X\times X$. That product is compact, proving properness. Thus [F3] supplies a Hausdorff second-countable smooth quotient and its tangent quotient. [F3, F4, step 1.1, step 2.1, construct]

4.1 On $U_C$, define $s(x)=C(x)^{-1}\cdot x$. Then $C(s(x))=I$, and $(g,s)\mapsto g\cdot s$ is bijective from $GL(V)\times S_C$ to $U_C$, with holomorphic inverse $x\mapsto(C(x),s(x))$. To see $S_C$ is a complex submanifold, differentiate $C$ along the orbit through a point of $S_C$: $dC(\xi\cdot s)=\xi$, so $C$ is a submersion there and [F2] applies in the complex charts from step 2.1. These product charts identify the smooth quotient with $S_C$. On overlaps the transition is $s\mapsto D(s)^{-1}\cdot s$, holomorphic wherever $\det D(s)\ne0$. They define the asserted complex structure and complex dimension $2kN$. Its tangent is $\ker d_1/\operatorname{im}d_0$ by [F3]. The torus action commutes with gauge transformations, preserves the equation and stability, and in these charts is the holomorphic map obtained by torus transformation followed by word-frame normalization. Thus it descends smoothly and holomorphically. [F2, F3, step 1.1, step 2.1, step 3.1, construct]

5.1 At a fixed quotient point, existence of $g(t)$ is the definition of equality of orbits and uniqueness follows from freeness. Under the torus action, the column $B_{i_1}\cdots B_{i_m}I(w_\alpha)$ is multiplied by $e_\alpha t_1^a t_2^b$, where $a,b$ count the two letters. Hence $C(t x)=C(x)\operatorname{diag}(e_{\alpha_\ell}t_1^{a_\ell}t_2^{b_\ell})$, while $C(g(t)x)=g(t)C(x)$. Equality gives precisely the displayed formula. Its diagonal entries are characters, so it is a smooth representation and all subsequent weight comparisons are comparisons of actual characters on the compact torus. No complexification argument is required. If $k=0$, $X$ and its quotient are a point and $GL(0)$ is the one-element group; all claims follow directly. This proves the lift and zero-dimensional assertions. [F1, step 1.1, step 4.1, algebra]


6.1 Each $S_C$ is the affine scheme cut out in the original matrix space by $\mu=0$ and $C=I$. These equations have jointly surjective derivative: $d\mu=d_1$ is onto by step 2.1, and on its kernel the orbit directions map under $dC$ onto every matrix. Thus the $2k^2$ equation-Jacobian rows are independent and [F5] makes each slice smooth of dimension $2kN$. The transition $s\mapsto D(s)^{-1}\cdot s$ is regular on the principal open $\det D(s)\ne0$; its inverse and the cocycle identities follow from uniqueness of the word normalization. Glue the finitely many affine slices by [F5]. To check separatedness, in $S_C\times S_D$ write the two data as $x,y$, and set $G=C(y)$, $H=D(x)$. They represent the same orbit exactly when $GH=HG=I$, $B_i(y)=GB_i(x)H$, $I(y)=GI(x)$ and $J(y)=J(x)H$. Necessity follows from $C(x)=D(y)=I$ and word-frame equivariance; sufficiency follows because these equations make $G$ invertible with inverse $H$ and give $y=Gx$. These polynomial equations cut out the diagonal in every product of affine charts, hence the glued scheme is separated. In each word-frame product $GL(V)\times S_C$, an invariant regular function is exactly its restriction to $\{I\}\times S_C$ pulled back by projection. Projection is Zariski open: for a principal open in the product, multiply its defining regular function by a power of $\det g$ and expand the resulting polynomial in the matrix entries of $g$; its image is the union of the nonvanishing loci of the resulting coefficient functions on $S_C$. Such functions vanish on all invertible matrices only when that polynomial is zero. Thus the product charts identify invariant regular functions with regular functions on the slice and identify the quotient Zariski topology. These identifications glue on overlaps. This proves the geometric-quotient condition in [F5]. Finally $U_C$ is torus invariant because $\det C(t x)$ is the nonzero character $\det D_C(t)$ times $\det C(x)$. On its slice the torus action is $s\mapsto D_C(t)^{-1}\cdot(t s)$, where $D_C(t)=\operatorname{diag}(e_{\alpha_\ell}t_1^{a_\ell}t_2^{b_\ell})$. Every matrix coordinate transforms by a fixed Laurent character, so this is an algebraic action of $(\mathbb C^*)^{N+2}$ and the finite slice atlas is invariant. The case $k=0$ is the point scheme. [F5, step 1.1, step 2.1, step 4.1, step 5.1, algebra] ∎
