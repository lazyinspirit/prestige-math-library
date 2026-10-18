---
id: lem-na-graded-whitney-mesh-size-and-boundary-shifts
kind: lemma
title: Graded Whitney mesh size and inward and outward boundary shifts
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    def-matching-affine-simplicial-meshes,
    lem-smooth-bump-between-concentric-euclidean-balls,
    lem-test-function-cutoffs-and-euclidean-localization,
    thm-heine-borel-rn
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
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $\Omega\subset\mathbb R^3$ be a nonempty bounded Lipschitz polyhedron with a matching shape-regular affine tetrahedral mesh $\mathcal T_h$. There are a positive continuous piecewise affine function $g_h$, a smooth bounded vector field $b$ on a neighborhood of $\overline\Omega$, and positive constants $c,C,r,\epsilon_0$, independent of the mesh, with the following properties. On $K$, $c h_K\le g_h\le C h_K$ and $\operatorname{Lip}(g_h)\le C$, where $h_K=\operatorname{diam}K$. Put
$$F_{t,y}^{\pm}(x)=x+t g_h(x)(\pm b(x)+r y),\qquad |y|\le1,\quad 0<t\le\epsilon_0.$$
The maps are uniformly bi-Lipschitz on their domain. For the plus sign, $F_{t,y}^{+}(\overline\Omega)\subset\Omega$. For the minus sign, $F_{t,y}^{-}(\partial\Omega)\subset\mathbb R^3\setminus\overline\Omega$, at distance at least $ctg_h(x)$ from $\partial\Omega$. The same interior distance lower bound holds for the plus sign at boundary points. The images of $K$ and all homotopies $s\mapsto F_{st,y}^{\pm}(x)$, $x\in K$, lie within distance $Ct h_K$ of $K$. Their intersections with $\Omega$ are contained in a vertex patch $\omega_K$ of uniformly bounded overlap, after decreasing $\epsilon_0$ if necessary. All constants may depend on $\Omega$ and the shape-regularity bound. No ratio of global maximum to minimum mesh size occurs.

## Facts & Assumptions


**Given:** The stated polyhedron and shape-regular matching meshes. The boundary of a Lipschitz polyhedron is locally the graph of a continuous piecewise affine Lipschitz function, with a finite cover by such coordinate neighborhoods.

[F1] Compact Euclidean sets admit finite subcovers without a choice principle ([[thm-heine-borel-rn]]); the explicit concentric-ball bump and compact-set cutoff are supplied by [[lem-smooth-bump-between-concentric-euclidean-balls]] and [[lem-test-function-cutoffs-and-euclidean-localization]]. Only finitely many such cutoffs and local directions are selected below.

## Proof


1.1 Fix the shape-regularity bound $\sigma$. For a cell $K$, let $F_K(\hat x)=b_K+A_K\hat x$ be its orientation-preserving map from the reference tetrahedron. Its three columns are edge vectors, so $\|A_K\|\le\sqrt3h_K$. Since $K$ contains an inscribed ball of radius $\rho_K\ge h_K/\sigma$ and $|K|=|\det A_K|/6$, we have $|\det A_K|\ge8\pi(h_K/\sigma)^3$. If $s_1\ge s_2\ge s_3$ are the singular values of $A_K$, then $s_1,s_2\le\sqrt3h_K$ and $s_1s_2s_3=|\det A_K|$, hence $s_3\ge c_\sigma h_K$. Thus every singular value is comparable to $h_K$. Every physical edge is the image under $A_K$ of one of the six fixed reference edge vectors, whose lengths are either $1$ or $\sqrt2$; consequently all edge lengths lie between $c_\sigma h_K$ and $C h_K$. At a vertex of $K$, its three emanating edges form a matrix $E=A_KR_i$, where $R_i$ is one of four fixed invertible reference matrices. The preceding singular-value bounds therefore give $s_{\min}(E)\ge c_\sigma h_K$. Divide each column by its edge length to obtain $B$ with unit columns. Since every edge length is at most $h_K$, $s_{\min}(B)\ge a>0$ uniformly; decrease $a$ to at most one. Also $\|B\|\le\sqrt3$. Put $u_0=(1/6,1/6,1/6)$ and $p=B u_0$. Then $|p|\le1/2$. If $|z-p|<a/12$, then $|B^{-1}z-u_0|<1/12$, so all coordinates of $B^{-1}z$ are positive. Consequently the open ball $B(p,a/12)$ is contained in the open vertex cone $\{Bu:u_j>0\}$ and in the unit ball, since $|z|<1/2+a/12<1$. The open cones of distinct cells at a fixed vertex are disjoint: a point in two such cones would give a sufficiently short ray from that vertex inside both cell interiors, contrary to the matching mesh. Thus their radius-$a/12$ balls are disjoint and their centers are separated by at least $a/6$ (otherwise their midpoint lies in both balls). All centers lie in $[-1,1]^3$. Fix an integer $M>12\sqrt3/a$ and partition this cube by the coordinate grid into $M^3$ boxes of side $2/M$, assigning points on division planes to one adjacent box by a fixed half-open convention and including the outer endpoints. Each box has diameter $2\sqrt3/M<a/6$, so contains at most one center. Hence at most $M^3$ cells meet any vertex. This is a finite grid and pigeonhole argument, with no surface-area formula, measure theorem or choice principle. Their link is connected through faces containing that vertex: in an interior star the link is a triangulated sphere, and in a boundary star it is a triangulated disk, since a Lipschitz graph has a ball or half-ball neighborhood. Across a shared face the two diameters are comparable because each face edge is comparable to each incident cell diameter. A face path in the link has bounded length, so every two cells meeting a vertex have comparable diameters, with a constant depending only on shape regularity. Assign $g_h(v)=\min_{K\ni v}h_K$ at every vertex and interpolate affinely. Barycentric differentiation and $|\nabla\lambda_v|\le C/h_K$ give the asserted cellwise comparability and gradient bound. [given, construct, algebra]

1.2 In a boundary graph box choose its upward unit direction $e_j$. Shrink its support neighborhood so that every planar boundary piece meeting that neighborhood has outward normal $n$ satisfying $n\cdot e_j\le-\alpha_j<0$. This holds because for a graph $x_3=f(x')$, with the domain above it, every outward unit normal is $(\nabla f,-1)/(1+|\nabla f|^2)^{1/2}$. Refine the finite boundary cover by finitely many concentric ball pairs whose larger closures lie in the assigned graph boxes and whose smaller balls still cover the compact boundary. Use [F1] to put a bump $\beta_j$ in each larger ball, equal to one on its smaller ball. On the open collar where $S=\sum_j\beta_j>0$, put $\chi_j=\beta_j/S$ and $b_0=\sum_j\chi_j e_j$. A compact-set cutoff $\eta$ supported in that collar and equal to one on a smaller collar gives the global smooth field $b=\eta b_0$, extended by zero away from the support of $\eta$. This is an explicitly normalized finite partition; no arbitrary-index partition theorem or choice axiom is imported. At each collar point every participating $e_j$ has the strict inward inequality for every nearby boundary face, so their convex combination does too, uniformly. After shrinking the collar, there is $r>0$ such that $b(x)+r y$ is strictly inward for all nearby faces and $-b(x)+r y$ strictly outward, for every $|y|\le1$. [F1, given, construct, algebra]

2.1 A bounded connected Lipschitz polyhedron is quasiconvex: close points in one boundary graph box can be joined by two vertical segments and a horizontal segment above the graph, of total length at most a fixed multiple of their distance; interior balls have the same property. A finite smaller cover gives this assertion for sufficiently close points. For remaining pairs, join the finitely many box centers through fixed interior polygonal paths and divide their bounded length by the fixed positive distance threshold. Componentwise the same argument applies to a disconnected domain, and distinct components have positive separation. Integrating the cellwise gradient along these paths gives the mesh-independent Euclidean Lipschitz bound for $g_h$. Extend it to a neighborhood by the explicit formula $\widetilde g_h(x)=\inf_{z\in\overline\Omega}(g_h(z)+L|x-z|)$, then truncate above by $\max g_h$; this is positive and $L$-Lipschitz and agrees on $\overline\Omega$. [given, step 1.1, construct]

2.2 Here are the distance assertions, including concave corners. In any one graph box write $a=b(x)+r y$. Along the horizontal segment from $x'$ to $x'+\tau a'$, the graph is piecewise affine; on each piece the preceding normal inequality gives $a_3-\nabla f\cdot a'\ge\beta>0$. Integration along that segment gives $f(x'+\tau a')\le f(x')+\tau a_3-\beta\tau$. Thus for $x\in\overline\Omega$ the point $x+\tau a$ lies above the graph by at least $\beta\tau$, and its distance to the graph is at least $\beta\tau/(1+L^2)^{1/2}$. Replacing $b$ by $-b$ reverses the inequality and puts boundary points strictly below the graph. The finite cover supplies uniform constants and a uniform allowed $\tau$. Away from the collar, small displacements remain inside. Substitute $\tau=tg_h(x)$; the upper bound on $g_h$ is at most the domain diameter. Thus one fixed $\epsilon_0$ works for every mesh. [step 1.2, step 1.1, algebra]

3.1 Let $\omega_K$ be the union of cells sharing a vertex with $K$. The sum $\psi_K$ of the four global nodal hat functions for the vertices of $K$ is one on $K$, zero outside $\omega_K$, and has cellwise gradient at most $C/h_K$: every cell where it is nonzero shares a vertex with $K$, so step 1.1 applies. The path argument of step 2.1 gives $\operatorname{Lip}(\psi_K)\le C_\Omega/h_K$. Hence $\operatorname{dist}(K,\Omega\setminus\omega_K)\ge c_\Omega h_K$. The number of cells in each patch and the number of patches containing one cell are bounded by the vertex-incidence bound. This proves the claimed neighborhood and overlap properties for sufficiently small displacements, including on graded meshes. [step 1.1, step 2.1, construct, algebra]

4.1 The displacement field $g_h(\pm b+r y)$ has a uniformly bounded Lipschitz constant, since $g_h$, $b$ and their Lipschitz constants are uniformly bounded. Reduce $\epsilon_0$ so this constant times $\epsilon_0$ is below $1/2$. Then $\frac12|x-z|\le|F_{t,y}^{\pm}(x)-F_{t,y}^{\pm}(z)|\le\frac32|x-z|$. The displacement is at most $Ct h_K$ on $K$. Step 3.1 now proves the patch assertion, and step 2.2 proves the interior and exterior boundary assertions. [step 1.1, step 3.1, step 2.2, algebra] ∎
