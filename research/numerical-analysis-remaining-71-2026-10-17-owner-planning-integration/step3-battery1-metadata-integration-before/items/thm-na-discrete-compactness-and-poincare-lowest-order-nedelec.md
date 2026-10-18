---
id: thm-na-discrete-compactness-and-poincare-lowest-order-nedelec
kind: theorem
title: Discrete compactness and uniform Poincare inequality for Nedelec fields
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  [
    lem-na-discrete-gradient-lift-gap-estimate,
    thm-na-uniformly-bounded-commuting-cochain-projection,
    lem-na-full-dirichlet-hcurl-regular-decomposition,
    lem-na-relative-curl-kernel-is-zero-boundary-gradients,
    thm-rellich-compactness-from-w-one-p-zero-to-lp,
    thm-projection-onto-a-nonempty-closed-convex-set,
    thm-hilbert-projection-variational-characterization,
    def-axiom-of-choice,
    def-countable-choice,
    def-dependent-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element
        exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture
        notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
verification:
  precheck: pass
---

## Statement

Assume AC, including its CC and DC consequences. Let $\Omega\subset\mathbb R^3$ be a nonempty bounded contractible Lipschitz polyhedron and let $\{\mathcal T_h\}$ be a shape-regular family of matching affine tetrahedral meshes with $h=\max_K\operatorname{diam}K\to0$. Set $V_h=N_h^1\cap H_0(\operatorname{curl};\Omega)$ and $S_h=W_h^0\cap H_0^1(\Omega)$, and define
$$X_h=\{v_h\in V_h:(v_h,\nabla q_h)_{L^2}=0\text{ for every }q_h\in S_h\}.$$
Every sequence $v_h\in X_h$ bounded in $H(\operatorname{curl};\Omega)$ has a subsequence converging strongly in $L^2(\Omega;\mathbb R^3)$. Moreover there is $C$ independent of $h$ such that $\|v_h\|_2\le C\|\operatorname{curl}v_h\|_2$ for all $v_h\in X_h$.

The precise harmonic-quotient version is as follows. On any bounded Lipschitz polyhedron for which the regular decomposition and relative commuting projections below are proved, put $K=\ker(\operatorname{curl}|_{H_0(\operatorname{curl})})$, $K_h=\ker(\operatorname{curl}|_{V_h})$ and
$$\mathcal H=K\cap(\nabla H_0^1)^\perp,\qquad\mathcal H_h=K_h\cap(\nabla S_h)^\perp.$$
Both harmonic spaces are finite dimensional. Discrete compactness still holds on $X_h$, while the uniform curl Poincare inequality holds on $Z_h=V_h\cap K_h^\perp=X_h\cap\mathcal H_h^\perp$. A nonzero vector of $\mathcal H_h$ prevents that inequality on all of $X_h$. These are the harmonic spaces of the relative boundary complex; the full-space absolute cohomology dimensions do not identify them.

## Facts & Assumptions


**Given:** AC, the stated domains and mesh family, and the following local supplier statements, with the separate homogeneous cochain family used in [F1].

[F1] A relative cochain projection in degrees zero, one and two: $\Pi_h^0:H_0^1\to S_h$, $\Pi_h^1:H_0(\operatorname{curl})\to V_h$, and $\Pi_h^2$ on the relative next-degree space, identity on their finite element spaces, with $\nabla\Pi_h^0=\Pi_h^1\nabla$, $\operatorname{curl}\Pi_h^1=\Pi_h^2\operatorname{curl}$, $\sup_h\|\Pi_h^1\|_{L^2\to L^2}=M<\infty$, and $\Pi_h^1f\to f$ in $L^2$ for every fixed $f\in H_0(\operatorname{curl})$. ([[thm-na-uniformly-bounded-commuting-cochain-projection]])

[F2] Every $u\in H_0(\operatorname{curl})$ admits $u=z+\nabla q$, $z\in H_0^1(\Omega;\mathbb R^3)$, $q\in H_0^1(\Omega)$, with $\|z\|_{H^1}\le C_R\|u\|_{H(\operatorname{curl})}$. This is the separate strong zero-boundary scalar supplier. The original regular-decomposition theorem retains its public $p\in H^1$ Statement and is not used as this stronger interface. ([[lem-na-full-dirichlet-hcurl-regular-decomposition]])

[F3] On a bounded contractible Lipschitz polyhedron, $K=\nabla H_0^1$. The supplier includes the proof that contractibility forces connected boundary, so this uses no additional boundary hypothesis. ([[lem-na-relative-curl-kernel-is-zero-boundary-gradients]])

[F4] On any bounded open subset of $\mathbb R^n$, for every $n\ge1$ and $1\le p<\infty$, $W_0^{1,p}\hookrightarrow L^p$ is compact under AC; here apply this with $n=3,p=2$ componentwise. This is the zero-boundary Rellich theorem, so no unrestricted-$H^1$ extension theorem is invoked. ([[thm-rellich-compactness-from-w-one-p-zero-to-lp]], [[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]])

[F5] The closed gradient space, orthogonal lift, gap estimate and its vanishing for a convergent sequence of lifts are supplied by [[lem-na-discrete-gradient-lift-gap-estimate]]. Closed-subspace projections also follow from [[thm-projection-onto-a-nonempty-closed-convex-set]] and [[thm-hilbert-projection-variational-characterization]].

## Proof


1.1 Put $B=\nabla H_0^1$, closed by [F5]. For a graph-bounded sequence $v_h\in X_h$, choose the decompositions $v_h=z_h+\nabla q_h$ from [F2], using AC on this countable family of nonempty decomposition sets. The sequence $z_h$ is bounded in $H_0^1$. By [F4], extract a subsequence on which all three components converge in $L^2$, using three successive subsequences. On this subsequence the lifts $w_h=(I-P_B)v_h=(I-P_B)z_h$ converge in $L^2$, since $I-P_B$ is a contraction. [F2, F4, F5, given, choose]


1.2 The continuous kernel $K$ is closed in $L^2$: if $k_j\in K$ converges in $L^2$, it is Cauchy in the curl graph norm, its graph limit lies in $H_0(\operatorname{curl})$ by the closure definition, and its curl remains zero. Let $P_K$ be its orthogonal projection. A graph-bounded sequence $u_j\in Y:=H_0(\operatorname{curl})\cap K^\perp$ satisfies $u_j=(I-P_K)z_j$ by [F2], since $\nabla q_j\in K$. Therefore the same componentwise Rellich argument proves compactness of $Y\hookrightarrow L^2$. If no continuous curl Poincare constant existed on $Y$, choose $u_j\in Y$ with $\|u_j\|_2=1$ and $\|\operatorname{curl}u_j\|_2<1/j$. Compactness gives $u_j\to u$ in $L^2$ along a subsequence; their curls tend to zero, so graph closure puts $u\in K$, while the closed orthogonality conditions put $u\in K^\perp$ and $\|u\|_2=1$. This contradiction proves $\|u\|_2\le C_\Omega\|\operatorname{curl}u\|_2$ on $Y$. [F2, F4, F5, given, choose]


2.1 The gap estimate [F5], using the relative degree-zero commutation in [F1], gives $\|v_h-w_h\|_2\le\|\Pi_h^1w_h-w_h\|_2\to0$. For clarity, this last limit uses both strong convergence on each fixed field and the uniform $L^2$ operator bound; it does not follow from pointwise convergence alone on a moving sequence. The strong limit of $w_h$ need only lie in $L^2$: the bounded extensions converge on all $L^2$ by density, as proved in [F5]. Hence $v_h$ converges strongly along the same subsequence. This proves discrete compactness without any topological exactness assumption. [F1, F5, step 1.1]


2.2 For $v_h\in Z_h$, set $w=(I-P_K)v_h\in Y$. Its curl equals that of $v_h$. This curl belongs to the next relative graph space: approximate $v_h$ by compactly supported smooth fields in the curl graph norm; their curls converge in $L^2$, have zero divergence, and are compactly supported, hence converge also in the divergence graph norm. Since the finite element spaces form the relative subcomplex, $\operatorname{curl}v_h$ belongs to its discrete degree-two target. Commutation and identity on that discrete next-degree space therefore imply $e=v_h-\Pi_h^1w\in K_h$. Hence $(v_h,e)=0$, and $\|v_h\|_2^2=(v_h,\Pi_h^1w)\le M\|v_h\|_2\|w\|_2\le MC_\Omega\|v_h\|_2\|\operatorname{curl}v_h\|_2$. Division when $v_h\ne0$ proves the mesh-uniform inequality on $Z_h$; the zero case is immediate. No limit in $h$ or finite-coarse-mesh exception is required for this inequality. [F1, step 1.2, algebra]


3.1 On the original contractible domain, [F3] implies $K_h=V_h\cap B$. If $v_h=\nabla p\in K_h$ with $p\in H_0^1$, then on every tetrahedron $v_h=a+b\times x$ has curl $2b=0$, so it is constant. The scalar function $p-a\cdot x$ has zero weak gradient on the connected open tetrahedron; [[thm-zero-weak-gradient-implies-componentwise-constancy]], whose AC hypothesis is included here, makes it constant almost everywhere there, so $p$ is affine on that cell. We establish the face values directly, without using a trace characterization. On an interior face $F$, integration by parts on its two adjacent cells shows that the distributional gradient of the piecewise-affine representative is its piecewise constant gradient plus the jump $[p]n_F$ times surface measure on $F$. A nonzero jump cannot be represented by an $L^2$ function: choose a smooth tangential bump $\eta$ supported in the relative interior of $F$ with $\int_F[p]\eta\ne0$, choose a coordinate $i$ with $(n_F)_i\ne0$, and test that component with $\eta(x')\chi(s/\delta)e_i$, where $s$ is signed normal distance and $\chi$ is smooth with $\chi(0)=1$. The face pairing is a fixed nonzero number, while the pairing with any $L^2$ function tends to zero as $O(\sqrt\delta)$ because the test support has volume $O(\delta)$. Since $p\in H^1$, its distributional gradient is $L^2$, so $[p]=0$ on $F$. For a boundary face, the closure definition of $H_0^1$ gives compactly supported smooth $p_j\to p$ in $H^1(\Omega)$; their zero extensions are Cauchy in $H^1(\mathbb R^3)$ and, by the completeness of $H^1(\mathbb R^3)$ under AC ([[thm-sobolev-spaces-are-banach-spaces]]), converge to a zero extension $P$ of $p$. Apply the same face argument to $P$, whose exterior value is zero, to conclude $p|_F=0$. These traces are affine polynomials, so their almost-everywhere equalities hold everywhere, including face vertices.  At each mesh vertex, choose a sufficiently small neighborhood meeting only cells incident to that vertex. The matching tetrahedra triangulate this neighborhood in the closure of a Lipschitz three-manifold, whose local model is a ball at an interior vertex and a half-ball at a boundary vertex. Each incident tetrahedron is the cone from the vertex over its opposite face, so the cross-section of the star by a sufficiently small sphere is its simplicial link. The local ball or half-ball model makes that link a connected triangulated sphere or disk. Join interior points of any two link triangles by a path in that link, perturbing the path to avoid the finitely many link vertices and to cross edges transversely. Each successive pair of triangles shares a link edge, hence the corresponding tetrahedra share a face containing the original vertex. This establishes the required face chain. Equality of the affine values therefore propagates to every tetrahedron incident at the vertex. The common nodal values assemble a continuous piecewise affine function on $\overline\Omega$, equal to $p$ almost everywhere, hence in $W_h^0$. The zero boundary-face values just proved imply all boundary nodal values vanish, so the assembled function belongs to $S_h$. Conversely $\nabla S_h\subset K_h$. Consequently $K_h=B_h$, $Z_h=X_h$, and step 2.2 is the asserted inequality on $X_h$. [F3, step 2.2, algebra]


4.1 In general topology $B\subset K$ and $B_h\subset K_h$. Closedness of $B$ gives $K=B\oplus\mathcal H$, while finite-dimensional orthogonal decomposition gives $K_h=B_h\oplus\mathcal H_h$ and $Z_h=X_h\cap\mathcal H_h^\perp$. The unit ball of $\mathcal H$ is graph bounded and lies in $B^\perp$; [F2] and [F4] make it relatively compact by the argument in step 1.1. A Hilbert space with compact unit ball is finite dimensional: otherwise choose successive unit vectors orthogonal to their predecessors, obtaining pairwise distance $\sqrt2$ and contradicting compactness. The discrete harmonic space is finite dimensional as a subspace of $V_h$. Nonzero $a_h\in\mathcal H_h$ has $\|a_h\|_2>0$ but curl zero, disproving a curl Poincare bound on all $X_h$ whenever such a mode exists. Steps 1.1 and 2.1 still prove compactness of $X_h$ and step 2.2 proves the quotient inequality. The proof uses AC for selections and imported analytic suppliers, CC for the projection/Poincare interfaces, and CC/DC through the exact Rellich supplier; it asserts no choice-free version. [F2, F4, F5, step 1.1, step 2.1, step 2.2, algebra] ∎

