---
id: lem-euler-number-is-the-clutching-degree
kind: lemma
title: "Euler number of a clutched bundle as the clutching degree"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quaternionic-clutching-bundles-xi-h-j-over-s-four, def-euler-class-by-zero-section-pullback-of-the-thom-class, prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual, lem-index-sum-of-an-outward-field-is-the-gauss-degree, thm-index-of-a-nondegenerate-vector-field-zero, thm-based-sphere-maps-are-classified-by-geometric-degree, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, def-axiom-of-choice, thm-morse-sard-for-euclidean-maps]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 402, the Euler number of the bundle with clutching map g is the degree of the map a -> g(a)v_0"
    - title: "Allen Hatcher, Vector Bundles & K-Theory, section 1.2"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "clutching functions and the Euler class of a bundle over a sphere"
---

## Statement

Assume the Axiom of Choice exactly as inherited from the Euler-class and
duality suppliers. Let $E\to S^4$ be an oriented rank-four real bundle, with
the base, equatorial and fibre orientations fixed in
[[def-quaternionic-clutching-bundles-xi-h-j-over-s-four]], clutched over
$S^4=D^4_+\cup_{S^3}D^4_-$ by a smooth map $g:S^3\to SO(4)$. Then
$$\langle e(E),[S^4]\rangle=\deg\bigl(a\mapsto g(a)v_0/\lVert v_0\rVert\bigr),$$
where $v_0$ is any nonzero vector of the fibre and the degree is computed with
the equatorial orientation of the source and the fibre orientation of the
target. For the basic left and right quaternion multiplications
$g_{1,0}(a)v=av$ and $g_{0,1}(a)v=va$ this degree is $+1$.

## Facts & Assumptions

**Given:** The oriented rank-four bundle $E\to S^4$ clutched by $g:S^3\to SO(4)$, the upper-to-lower convention $(a,v)_+\sim(a,g(a)v)_-$, a unit vector $v_0$ of the fibre, and the orientations of [[def-quaternionic-clutching-bundles-xi-h-j-over-s-four]].

[A1] The Axiom of Choice is assumed, as inherited from the Euler-class and duality suppliers ([[def-axiom-of-choice]]).

[L1] The Euler class is $e(E)=s^*j^*u_E$, where $u_E$ is the normalized Thom class of $E$ and $s$ is the zero section ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[L2] Assume AC. If $s:S^4\to E$ is a smooth section transverse to the zero section with zero locus $Z$, then with the induced orientation $e(E)\cap[S^4]=(i_Z)_*[Z]$; equivalently $\langle e(E),[S^4]\rangle$ is the signed count of the zeros of $s$ ([[prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual]]).

[L3] Let $N\subseteq\mathbb R^m$ be a compact smooth $m$-submanifold with boundary and $Y$ a smooth vector field on $N$ with only isolated zeros and $Y\ne0$ on $\partial N$; then $\sum_{x:Y(x)=0}\operatorname{ind}_xY=\deg(\partial N\to S^{m-1},\ x\mapsto Y(x)/|Y(x)|)$ ([[lem-index-sum-of-an-outward-field-is-the-gauss-degree]]).

[L4] A nondegenerate zero of a vector field has index $\operatorname{sign}\det(DY_p)\in\{+1,-1\}$ ([[thm-index-of-a-nondegenerate-vector-field-zero]]).

[L5] The geometric degree is an isomorphism $\pi_3(S^3)\to\mathbb Z$ sending the identity to $+1$ ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]), and the identity, constant and reflection maps have the standard degrees ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]]).

[L6] The critical values of a smooth Euclidean map form a null set ([[thm-morse-sard-for-euclidean-maps]]), hence contain no open ball.

## Proof

**Proof technique:** direct.

1.1 Put $s_+=v_0$ on the upper hemisphere. By the upper-to-lower transition, the lower boundary value must be $s_-(a)=g(a)v_0$. Extend this value to a smooth map $F:D^4_-\to\mathbb R^4$, constant in the radial coordinate near the boundary and zero near the centre, by a smooth radial cutoff. It agrees with the constant upper section through the equatorial product charts. The base orientation on $D^4_-$ is its standard coordinate orientation, and its coordinate boundary orientation is the source orientation fixed in the statement. [L1, given, construct]

2.1 The map $F$ is nonzero on a boundary strip. Choose a smooth cutoff $\rho$ equal to one on the compact complement of that strip, supported away from the boundary, and with its transition region inside the strip. By [L6] choose a sufficiently small regular value $t$ of $F$ on the open disk. Then $F_t=F-\rho t$ has no zeros in the transition strip, while every remaining zero lies where $\rho=1$ and has invertible derivative $DF$. Thus the section with $s_+=v_0$, $s_-=F_t$ is smooth and transverse to zero, with a finite zero set in the lower open disk. [step 1.1, L6, choose]

3.1 By [L2] its signed zero count is $\langle e(E),[S^4]\rangle$. On the positively oriented lower disk each local contribution is $\operatorname{sign}\det DF_t$, the index of the coordinate vector field $Y=F_t$ by [L4]. Hence [L3] gives $\langle e(E),[S^4]\rangle=\deg(a\mapsto Y(a)/|Y(a)|)=\deg(a\mapsto g(a)v_0)$, since the boundary was fixed and $v_0$ is unit. Scaling a nonzero $v_0$ to unit length gives the displayed general formula. [step 2.1, L2, L3, L4, A1]

4.1 For either basic clutching choose $v_0=1$. Both boundary maps are then $a\mapsto a$, of degree $+1$ by [L5]. For any other unit $v_0$, a path from $1$ to $v_0$ in $S^3$ gives a homotopy of the boundary maps, so their degree is unchanged. This proves both calibrations in the stated orientation convention. [step 3.1, L5, given] ∎
