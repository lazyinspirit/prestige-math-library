---
id: thm-gts-r4-08b-general-virtual-hamiltonian-floer-differential-and-continuation
kind: theorem
title: General virtual Hamiltonian Floer differential and continuation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 9
deps:
  - def-gts-rational-capped-hamiltonian-floer-module
  - lem-gts-filtered-finite-matrix-completion-extension
  - def-gts-r4-06c-pardon-implicit-atlas-specialization-to-floer-cylinder-moduli
  - lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts
dependency_roles:
  def-gts-rational-capped-hamiltonian-floer-module: mathematical-premise
  lem-gts-filtered-finite-matrix-completion-extension: mathematical-premise
  def-gts-r4-06c-pardon-implicit-atlas-specialization-to-floer-cylinder-moduli: mathematical-premise
  lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John Pardon, An algebraic approach to virtual fundamental cycles on moduli spaces of pseudo-holomorphic curves
      url: https://arxiv.org/pdf/1309.2370v6
      locator: Convention 7.0.1, equations 7.5.1 and 7.6.1, Definitions 7.7.2–7.7.6, Proposition 7.7.4 and §§10.1–10.4; local completion extension stated separately
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $(M,\omega)$ be a closed smooth symplectic manifold, with no asphericity, monotonicity or semipositivity assumption. At every vertex choose a smooth one-periodic Hamiltonian, its smooth evolution through time one, and a compatible almost-complex structure; assume all one-periodic orbits of every vertex Hamiltonian are nondegenerate. Use the rational capped modules, with positive energy weight $a=-\mathcal A_H$, degree $|q^Ax|=\mu_{\mathrm{CZ}}(x,w_x)-2c_1(A)$ in the local cap convention, and the cohomological virtual dimension convention $\operatorname{vdim}\mathcal M(\sigma,p,q)=|q|-|p|+\dim\sigma-1$.

Suppose a Pardon Floer implicit-atlas package and coherent virtual chain realization as specified in the preceding definition are supplied for the vertex, edge and triangle parameter families under consideration. In particular assume the compact Hausdorff trajectory spaces including broken cylinders and sphere bubbles, coherent orientations, exact signed product/face boundary identity, energy finiteness and lower bounds, and degenerate-edge normalization. For the continuation-equivalence conclusion, include coherently shared edge data and triangle fillings for the forward/reverse comparisons with degenerate edges. These are geometric and virtual-chain hypotheses, not conclusions of the coefficient definitions.

Evaluating the virtual-dimension-zero unparametrized trajectory chains defines a continuous degree-$+1$ differential $d$ with $d^2=0$ on the full rational energy-completed capped module. Evaluating edge chains defines degree-zero continuation chain maps. If $F_{ij}$ denotes an edge map and $K_{012}$ its triangle operator, then
$$d_jF_{ij}=F_{ij}d_i,\qquad F_{12}F_{01}-F_{02}=d_2K_{012}+K_{012}d_0.$$
Here $K_{012}$ has degree $-1$. Forward and reverse continuation maps are chain homotopy inverses using the supplied fillings and normalization. All these conclusions hold first on the graded rational submodules and extend to the full energy completion, and then to any specified characteristic-zero field by coefficientwise scalar extension. Integer degrees on the full completion mean completed grading; the ordinary parity grading is also available.

The source theorem is Pardon's closed-target rational theory in its own deck-grading convention; the algebraic implication above uses the local capped-module convention $\delta(A)=-2c_1(A)$ fixed by the cap-concatenation supplier. Applying the source construction to this module requires a deck-group identification compatible with both energy and degree; it is not inferred from the shared $c_1$ notation. The same algebraic implication applies to a separately supplied coefficient-compatible virtual chain realization over another field, including $\mathbb F_2$, using the same capped series formula with that field in place of $\mathbb Q$, and with its exact identities and filtration hypotheses. No such characteristic-two realization, or specialization of rational virtual weights to it, is asserted here.

## Statement references

[[def-gts-rational-capped-hamiltonian-floer-module]]

[[lem-gts-filtered-finite-matrix-completion-extension]]

[[def-gts-r4-06c-pardon-implicit-atlas-specialization-to-floer-cylinder-moduli]]

## Facts & Assumptions

**Given:** Exactly the closed-target, nondegeneracy, coherent virtual chain realization, filtration, parameter filling and normalization hypotheses in the Statement. Work componentwise in the reduced recapping group.

[F1] The capped modules have the local recapping degree $-2c_1$ from the cap convention in [[lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts]], positive weight $a=-\mathcal A_H$, and rational coefficients. Their full energy completion is distinguished from the finite-grading-support submodule. [[def-gts-rational-capped-hamiltonian-floer-module]]

[F2] The nondegenerate closed-target data have finitely many orbit labels and components. Finite matrices extend continuously from the graded Novikov ring to the full completion, preserving degrees, finite identities and characteristic-zero coefficient changes. [[lem-gts-filtered-finite-matrix-completion-extension]]

[A1] Supply the compactified cylinder/family atlas and coherent virtual chains of the specified package, including equivariance, the two filtered finiteness requirements, evaluation $\epsilon$ with $\epsilon\partial=0$, multiplicative product evaluation, compatible face evaluation, and the exact signed boundary identity for $\partial\lambda$. These are geometric/virtual-chain assumptions. [[def-gts-r4-06c-pardon-implicit-atlas-specialization-to-floer-cylinder-moduli]]

[A2] For the chosen forward and reverse edges, supply triangle chains with those same edge choices and the relevant degenerate edges. At each vertex the degenerate edge evaluates to $I+d_iB_i+B_id_i$ for a continuous graded-completion matrix $B_i$ of degree $-1$, as required in the package. This normalization is additional to the product/face identity. [[def-gts-r4-06c-pardon-implicit-atlas-specialization-to-floer-cylinder-moduli]]

## Proof

1.1 For a parameter simplex $\sigma$ of dimension $n$, define on capped generators $$f_\sigma(p)=\sum_q\epsilon(\lambda_{\sigma,p,q})q.$$ The evaluation is zero unless $|q|-|p|+n-1=0$, so $f_\sigma$ has cohomological degree $1-n$. By [A1], only finitely many nonzero terms occur below each weight cutoff, and their weights are bounded below relative to $a(p)$; thus each output is an energy-finite series. Simultaneous-recapping equivariance makes this map linear over the component's graded Novikov ring. For each fixed reference input/output orbit label its coefficient series is supported only on the single deck degree forced by $|q|=|p|+1-n$, so it belongs to the finite-grading-support subring. There are finitely many reference orbit labels by [F2]. Therefore $f_\sigma$ is a finite matrix over that graded ring and is bounded and continuous there, and has a unique continuous extension to the full completion. In particular vertex chains with $n=0$ count virtual-dimension-zero unparametrized trajectories; the one-dimensional virtual chains furnish the relations. [F1, F2, A1, construct, algebra]

2.1 Apply $\epsilon\partial=0$ to $\lambda_{\sigma,p,r}$. The signed boundary identity in [A1], product multiplicativity and face compatibility give $$0=\sum_{k=0}^n\sum_q(-1)^k\epsilon(\lambda_{\sigma|[0,\ldots,k],p,q})\epsilon(\lambda_{\sigma|[k,\ldots,n],q,r})-\sum_{k=1}^{n-1}(-1)^k\epsilon(\lambda_{\sigma|[0,\ldots,\widehat k,\ldots,n],p,r}).$$ The common factor $(-1)^{|p|}$ has been cancelled. The given boundary chains have finite product/face sums. The induced coefficient convolutions also have only finitely many contributors to any fixed coefficient by [F2], so the displayed expression is precisely the coefficient of $r$ in $$\sum_{k=0}^n(-1)^kf_{\sigma|[k,\ldots,n]}f_{\sigma|[0,\ldots,k]}-\sum_{k=1}^{n-1}(-1)^kf_{\sigma|[0,\ldots,\widehat k,\ldots,n]}.$$ Every coefficient is zero, proving the operator identity on the graded modules. This uses virtual Stokes and the prescribed face maps; it does not treat singular virtual moduli as ordinary compact one-manifolds or omit sphere strata by a naive dimension count. [F2, A1, step 1.1, algebra]

3.1 For $n=0$ the identity in step 2.1 is $f_i^2=0$. Set $d_i=f_i$. For $n=1$ it is $f_{ij}d_i-d_jf_{ij}=0$; set $F_{ij}=f_{ij}$. For $n=2$ it is $f_{012}d_0-F_{12}F_{01}+d_2f_{012}+F_{02}=0$. Setting $K_{012}=f_{012}$ and rearranging gives exactly $F_{12}F_{01}-F_{02}=d_2K_{012}+K_{012}d_0$. Step 1.1 gives the respective degrees $+1,0,-1$. These are the cohomological signs; negating all generator and deck degrees changes to the homological convention with differential degree $-1$ and homotopies degree $+1$. [step 1.1, step 2.1, algebra]

4.1 Let $F:C_i^{\mathrm{gr}}\to C_j^{\mathrm{gr}}$ and $G:C_j^{\mathrm{gr}}\to C_i^{\mathrm{gr}}$ be the chosen forward and reverse edges. The comparison triangle at $i$ gives $GF-F_{ii}=d_iK_i+K_id_i$. By [A2], $F_{ii}-I=d_iB_i+B_id_i$, so $GF-I=d_i(K_i+B_i)+(K_i+B_i)d_i$. The triangle at $j$ gives the corresponding identity $FG-I=d_j(K_j+B_j)+(K_j+B_j)d_j$. The same chosen $F,G$ appear on the shared edges by [A2]. Thus they are chain homotopy inverses on the graded modules. Chain homotopic maps induce the same cohomology map because their difference on a cycle is a boundary, so these inverse maps induce cohomology isomorphisms. [A2, step 3.1, algebra]

5.1 The differentials, edge operators, triangle homotopies and normalizing matrices are finite matrices over the graded completion by step 1.1 and [A2]. Applying [F2] to the identities in steps 3.1 and 4.1 extends all of them to the full energy-completed modules, with the same cohomological degrees and filtration bounds. The coefficientwise embedding $\mathbb Q\to k$ for any characteristic-zero field $k$ preserves the same identities and their convergence, again by [F2]. This proves the rational and characteristic-zero conclusions without replacing the full completion by the source's smaller graded completion. [F2, A2, step 1.1, step 3.1, step 4.1, algebra]

6.1 If a virtual chain realization over another field is independently supplied with these same hypotheses, steps 1.1, 2.1, 3.1, 4.1 and 5.1 use only those hypotheses and the corresponding coefficient ring algebra, so give the same differential and continuation implication in that field. It cannot be obtained by a unital coefficient map from the rational completion to a nonzero characteristic-two ring: restricting such a map $\phi$ to constants would give $1=\phi(2\cdot\frac12)=\phi(2)\phi(\frac12)=0$. Moreover, Pardon Convention 7.0.1 requires invertibility of every atlas group order, and his marked-intersection atlas uses permutation groups, whose orders cannot generally be inverted in $\mathbb F_2$. No characteristic-two geometric realization is provided by this argument. The rational coefficient repair and the conditional construction conclusions are therefore exactly as stated. [F1, A1, A2, step 5.1, algebra] ∎

## Proof status and remaining geometric suppliers

The algebraic construction from the explicit virtual chain package, the finite-orbit argument and the full-completion extension are supplied locally. The named rational Hamiltonian Floer theory for general closed symplectic targets is an established result of Pardon §§7 and 10. The supplied hypotheses are not a local reconstruction of that source construction.

Local construction still requires: compactness and Hausdorffness for the noncompact-cylinder and parameter-family moduli, asymptotic convergence and breaking, sphere extraction with neck energy and class conservation, the Novikov finiteness bounds; the compatible implicit-atlas charts and weighted gluing estimates; an explicit deck-group identification reconciling the source and local energy/grading characters; the actual virtual-chain evaluations with product/face identities and degenerate-edge normalization; and coherent Fredholm determinant orientations with recapping, obstruction-space and boundary-sign compatibility. The fixed-source closed-domain sphere theorem supplies none of the missing cylinder-breaking or parameter-family arguments. A complex sphere-node smoothing parameter alone does not establish the required virtual boundary formula. The source scope and orientation-reading limits are recorded in the package definition. These established-theory local construction obligations remain on hold after the coefficient repair. No local proof of the general geometric package, independent acceptance, readiness approval, or differential on the original $\mathbb F_2$ module is asserted.
