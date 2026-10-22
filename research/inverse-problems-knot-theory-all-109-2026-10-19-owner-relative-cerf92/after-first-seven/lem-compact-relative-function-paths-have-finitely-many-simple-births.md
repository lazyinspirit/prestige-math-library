---
id: lem-compact-relative-function-paths-have-finitely-many-simple-births
kind: lemma
title: "Compact relative function paths have finitely many simple births"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - thm-parametric-transversality
  - thm-transverse-preimage-theorem
  - prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Sections4.5–4.7: finite polynomial jet perturbations, Lemma4.5.4, printed106–107; multitransversality, printed111–112; corank-one and cubic calculations, Theorem4.7.2, printed115–116. The relative compact function-path argument is proved here without a residual-set selection."
---

## Statement

Assume Countable Choice. Let $M$ be a compact smooth $n$-manifold, $n\ge1$, possibly with boundary, and let $A\subset M$ be closed and contain $\partial M$. Let $F:M\times[0,1]\to\mathbb R$ be smooth, constant in the parameter near both endpoints, with Morse endpoint functions $f_0,f_1$. Suppose that $d_xF$ never vanishes on a neighborhood of $A\times[0,1]$. Then $F$ admits arbitrarily small smooth perturbations $G$, supported away from a neighborhood of $A\times[0,1]$ and the parameter endpoints, with the following properties.

The spatial critical locus $C=\{(x,t):d_xG_t=0\}$ is a compact smooth one-manifold, with boundary only over $t=0,1$. The restriction $t:C\to[0,1]$ has finitely many critical points, all nondegenerate, with distinct critical parameter values in $(0,1)$. At all other parameters $G_t$ is Morse. Near each exceptional point there are coordinates $(u,y,t)$, $y\in\mathbb R^{n-1}$, in which the equations for a spatial critical point reduce to
$$y=Y(u,t),\qquad t=T(u),\qquad T'(0)=0,\quad T''(0)\ne0.$$
On one side of this parameter there are no critical points in that neighborhood and on the other there are exactly two; both are Morse, with indices $\lambda,\lambda+1$ for some $0\le\lambda\le n-1$. In dimension three these are exactly the possible pairs $(0,1),(1,2),(2,3)$.

For example, if $f_0,f_1$ agree with a common noncritical function on a neighborhood of $A$, their linear interpolation with a parameter cutoff constant at the endpoints supplies the initial $F$. This lemma constructs function paths and their local births. It does not assert any gradient-trajectory genericity, attaching-disk completeness, or a translation of births into marked diagram moves.

## Facts & Assumptions

**Given:** The compact manifold, closed fixed set, smooth path, noncritical fixed neighborhood, and Morse endpoints.

[F1] For a smooth finite-dimensional family transverse to an embedded submanifold, the parameters whose slices fail transversality form a null set under Countable Choice ([[thm-parametric-transversality]]). A null set has dense complement in a positive-dimensional parameter ball ([[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

[F2] Smooth compact-set bump functions with prescribed open support exist ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F3] Transverse inverse images are smooth manifolds of the expected dimension ([[thm-transverse-preimage-theorem]]). Smooth implicit equations with invertible partial derivative have smooth local solutions with parameters ([[thm-parametrized-implicit-function-theorem-with-higher-regularity]]).

## Proof

1.1 Work in finitely many spatial charts, with parameter $t$ kept separate. A spatial second jet is the list $(v,p,H)$ of a value, a covector and a symmetric Hessian matrix. At $p=0$, changes of spatial coordinates transform $H$ by congruence, so the condition $p=0$, $\operatorname{corank}H=r$ defines a coordinate-independent smooth stratum $Z_r$. Its codimension is $n+r(r+1)/2$. Indeed, after a fixed linear coordinate change, any symmetric matrix of rank $n-r$ has an invertible principal $(n-r)$-block $B$. Write it as $\left(\begin{smallmatrix}B&D\\D^T&E\end{smallmatrix}\right)$. Its rank is $n-r$ precisely when the symmetric Schur complement $E-D^TB^{-1}D$ vanishes. These are $r(r+1)/2$ independent equations, since their derivatives in the entries of $E$ form the identity. Include also the smooth stratum $Z=\{p=0\}$ of codimension $n$. The jet values form a finite-dimensional smooth bundle in these coordinates; the preceding equations agree on overlaps. [given, construct, algebra]

2.1 All possible non-Morse points of sufficiently small perturbations lie in one compact subset $L$ of $\operatorname{Int}M\times(0,1)$ disjoint from a neighborhood of $A\times[0,1]$. To verify this, first remove a smaller closed neighborhood of the fixed set, where the spatial differential has a uniform positive lower bound in a finite chart cover. The remaining spatial region is compact. Near each parameter endpoint, the given path is constant Morse; on its critical-point neighborhoods its Hessians are uniformly invertible, and on their compact complement the differentials have a positive lower bound. These conditions persist for sufficiently small $C^2$ changes. What remains is a compact interior slab $L$. Cover $L$ by finitely many coordinate products with closures disjoint from the prescribed fixed neighborhoods. By [F2] choose smooth bumps equal to one on smaller products covering $L$. For each bump include as perturbation functions its product with every spatial monomial of degree at most two. Their finite coefficient vector $a$ defines $F_a=F+\sum a_j\phi_j$. At every point of an open neighborhood $O$ of $L$, one such bump is identically one, and its spatial polynomials prescribe arbitrary values, first derivatives and symmetric second derivatives there. Consequently the partial jet evaluation $(x,t,a)\mapsto j_x^2F_a$ is a submersion on $O$ for every sufficiently small coefficient vector. All perturbations vanish near the fixed set and the parameter endpoints. [F2, step 1.1, construct]

3.1 Apply [F1] to this evaluation map and each of $Z,Z_1,\ldots,Z_n$, on $O$. There are finitely many strata. The union of their bad parameter sets is null, since a finite union of null sets is null, so choose $a$ arbitrarily close to zero outside this union. On the complementary fixed region the only spatial critical points are already Morse, where transversality to $Z$ holds automatically and all $Z_r$, $r\ge1$, are absent. Thus the new path, denoted $G$, is transverse to $Z$ everywhere. By [F3], $C$ is a one-manifold; compactness follows because it is a closed subset of $M\times[0,1]$, and its only possible boundary lies over the parameter endpoints. For $r\ge2$, the codimension of $Z_r$ is at least $n+3>n+1$, so transversality implies that its inverse image is empty. The inverse image of $Z_1$ is zero-dimensional. It is finite: within compact $C$, its accumulation points must still have singular Hessian; higher corank was excluded, so they lie in $Z_1$, where transversality makes each point isolated. An infinite subset of a compact finite-chart metric space would have an accumulation point. [F1, F3, step 1.1, step 2.1, construct]

4.1 At a point with invertible Hessian $H$, the equation for a tangent vector $(v,s)$ to $C$ is $Hv+\partial_t(d_xG)s=0$. It determines $v$ uniquely for any $s$, so $t|_C$ is regular there. At a corank-one point take $u$ in the kernel and complementary coordinates $y$ so $H=\operatorname{diag}(0,B)$, with $B$ invertible, and put $a=G_{ut}$ and $b=G_{uuu}$ at that point. The normal equations of $Z_1$ are $G_u=0$, $G_y=0$, and the scalar Schur complement of $G_{yy}$. Their derivative in the $y$ directions has the invertible block $B$. Modulo these directions, their derivatives in $u,t$ have the two by two matrix $\left(\begin{smallmatrix}0&a\\b&*\end{smallmatrix}\right)$. The first entry is zero because $u$ is a Hessian-kernel direction; the lower-left entry is $G_{uuu}$ because the mixed Hessian block vanishes at the point. Transversality to $Z_1$ therefore says precisely that $ab\ne0$. [F3, step 1.1, step 3.1, algebra]

5.1 Translate this point to $(u,y,t)=(0,0,0)$. By [F3] solve $G_y=0$ uniquely as $y=Y(u,t)$, and set $g(u,t)=G(u,Y(u,t),t)$. Since $G_{uy}=0$ at the event, the chain rule gives $g_u=0$, $g_{uu}=0$, $g_{ut}=a\ne0$, and $g_{uuu}=b\ne0$ there. A second application of [F3] solves $g_u=0$ uniquely as $t=T(u)$. Differentiation gives $T'(0)=0$ and $T''(0)=-b/a\ne0$. Thus $t|_C$ has a nondegenerate critical point. On sufficiently short negative and positive $u$ intervals, $T'$ has opposite nonzero signs and $T(u)-T(0)$ has the fixed sign of $T''(0)$. Shrink the parameter interval so its two inverse branches remain within these intervals. Each parameter on the occupied side has exactly two preimages, and each on the other side has none. The implicit-function neighborhoods exclude any further critical points there. [F3, step 4.1, construct, algebra]

6.1 At a critical point near the event, symmetric block elimination makes the full spatial Hessian congruent to $\operatorname{diag}(G_{yy},g_{uu})$. The index of the first block is constant near the event because its eigenvalues remain separated from zero. Along the critical locus, Taylor expansion gives $g_{uu}(u,T(u))=bu+O(u^2)$, since $T(u)=O(u^2)$. The two branches consequently have opposite nonzero last eigenvalues. Their indices are $\lambda$ and $\lambda+1$, where $\lambda$ is the index of the $(n-1)$-dimensional block. In particular $0\le\lambda\le n-1$. The empty $y$ block when $n=1$ has index zero and the same argument applies. [step 5.1, algebra]

7.1 Finally separate exceptional parameter values without a multijet or residual-set argument. There are finitely many exceptional spacetime points. Choose pairwise disjoint small spacetime neighborhoods, each containing just its one exceptional point, with compact smaller neighborhoods inside them. In the $i$th neighborhood choose by [F2] a bump $\chi_i$ equal to one on the smaller neighborhood. Replace $G(x,t)$ there by $G(x,t-\delta_i\chi_i(x,t))$, and leave it unchanged elsewhere. All $\delta_i$ can be arbitrarily small. Where $\chi_i=1$ this is an exact parameter translation, moving the event from $t_i$ to $t_i+\delta_i$. On the compact transition regions the old path has no degenerate critical point, and that property persists for sufficiently small $C^2$ changes, by the same compact differential/Hessian bounds as in step2.1. Hence no new exceptional point appears; near the original event the translated function has exactly the already proved fold. Choose the finitely many shifts so their shifted times are distinct and remain interior; each shift excludes only finitely many values previously chosen. The critical locus remains transverse by its local fold description and the unchanged Morse regions. All perturbations remain arbitrarily small in any prescribed smooth neighborhood, since on a compact domain such a neighborhood imposes only finitely many derivative bounds and the finite parameter maps are smooth. This proves the claim with Countable Choice used in [F1] and [F3], and only finite geometric and parameter choices. [F1, F2, F3, step 2.1, step 3.1, step 5.1, step 6.1, construct] ∎
