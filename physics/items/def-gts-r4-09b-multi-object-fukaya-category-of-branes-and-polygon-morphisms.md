---
id: def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms
kind: definition
title: Blocked construction interface for multi-object Fukaya categories and polygon morphisms
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 11
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-relatively-spin-lagrangian-data
  - def-gts-stable-j-holomorphic-disks-with-boundary-markings
  - def-gts-lagrangian-intersection-and-hamiltonian-chord-data
  - def-gts-universal-novikov-completion
  - lem-gts-relative-disk-area-invariant
  - lem-gts-novikov-completion-is-filtered-ring
  - lem-gts-tame-j-holomorphic-area-is-dirichlet-energy
  - def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-relatively-spin-lagrangian-data: mathematical-premise
  def-gts-stable-j-holomorphic-disks-with-boundary-markings: mathematical-premise
  def-gts-lagrangian-intersection-and-hamiltonian-chord-data: mathematical-premise
  def-gts-universal-novikov-completion: mathematical-premise
  lem-gts-relative-disk-area-invariant: mathematical-premise
  lem-gts-novikov-completion-is-filtered-ring: mathematical-premise
  lem-gts-tame-j-holomorphic-area-is-dirichlet-energy: mathematical-premise
  def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Fukaya, Oh, Ohta, and Ono, Lagrangian Floer Theory on Compact Toric Manifolds I, arXiv:0802.1703v3
      url: https://arxiv.org/pdf/0802.1703v3
      locator: §3, printed pp. 19–20, Theorem 3.9 and Proposition 3.10 give pairwise A-infinity bimodules for transverse pairs; no category-level composition theorem
    - title: Maxim Kontsevich, Homological Algebra of Mirror Symmetry, arXiv:alg-geom/9411018v1
      url: https://arxiv.org/pdf/alg-geom/9411018v1
      locator: pp. 16–18, early candidate Fukaya operations and explicitly preliminary analytic/categorical claims
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

This item records a blocked construction interface, not an assertion that a general Fukaya category has been constructed. Choose a smooth symplectic manifold $(M,\omega)$, not assumed compact or boundaryless here, a smooth $\omega$-tame almost-complex structure $J$, a coefficient field $\Bbbk$, and a set of compact branes. The analytic regime and its compactness-at-infinity or boundary hypotheses must be stated for the selected target; this interface selects no universal regime. A brane here is an oriented compact embedded Lagrangian with a chosen relative-spin structure; it may also carry a declared finite-rank $\Bbbk$-local system and a grading datum. A local system means a locally constant sheaf of finite-dimensional $\Bbbk$-vector spaces with isomorphisms as parallel transports. For an integer grading, let $\operatorname{Lag}(TM,\omega)$ be the bundle whose fiber at $p$ is the set of Lagrangian subspaces of $(T_pM,\omega_p)$, choose a covering $\widetilde{\operatorname{Lag}}\to\operatorname{Lag}(TM,\omega)$, and require a grading to be a lift of the Gauss map $p\mapsto T_pL$; a different convention, including a $\mathbb Z/2$ grading, must be stated explicitly.

For a transverse pair $L_0,L_1$, use the intersection-point generator model from [[def-gts-lagrangian-intersection-and-hamiltonian-chord-data]]. Fix the morphism convention that an intersection generator $x\in L_0\cap L_1$ carries the fiber factor $\operatorname{Hom}_{\Bbbk}(E_{0,x},E_{1,x})$, where $E_{j,x}$ is the fiber of the chosen local system on $L_j$ at $x$; a chord from $L_0$ to $L_1$ carries $\operatorname{Hom}_{\Bbbk}(E_{0,\gamma(0)},E_{1,\gamma(1)})$. Over a field of characteristic different from two, choose for each generator a rank-one graded $\Bbbk$-module $o_x$ as its orientation line and coherent identifications of these lines under polygon gluing; in characteristic two take $o_x=\Bbbk$ in degree zero and suppress signs. Thus each generator summand includes its Hom factor tensor $o_x$, and its degree is fixed by the declared brane grading and orientation convention. Polygon coefficients use the boundary parallel transports of the local systems. A Hamiltonian-chord model requires its own perturbation convention. Complete the candidate morphism modules in the energy filtration of $\Lambda^0_{\nu,\Bbbk}$ from [[def-gts-universal-novikov-completion]], whose convolution ring and filtration are checked in [[lem-gts-novikov-completion-is-filtered-ring]]; the selected regime must make this completion and its energy weights well-defined. For an ordered sequence $L_0,\ldots,L_k$ with $k\ge1$, the intended operations have type
$$m_k:CF(L_0,L_1)\otimes_{\Lambda^0_{\nu,\Bbbk}}\cdots\otimes_{\Lambda^0_{\nu,\Bbbk}}CF(L_{k-1},L_k)\longrightarrow CF(L_0,L_k),$$
and each object has curvature element $m_0^{L}\in CF(L,L)$. For each fixed cyclic sequence $L_0,\ldots,L_k$, the candidate polygon moduli use the stable disk domains and evaluation maps from [[def-gts-stable-j-holomorphic-disks-with-boundary-markings]]: the boundary arcs have their specified Lagrangian labels; in the local convention, inputs at $z_i$ for $1\le i\le k$ lie in $L_{i-1}\cap L_i$, and the output at $z_0$ lies in $L_k\cap L_0$. For each relative class $\beta$ on a fixed combinatorial domain, as defined in the stable-disk item, a proposed count is weighted by its symplectic area in the selected Novikov convention; sums over classes must converge in the energy filtration. The local relative-area lemma [[lem-gts-relative-disk-area-invariant]] proves homotopy invariance only on a fixed combinatorial domain, so compatibility across changing domain types remains an obligation. A chosen regularization would define the operation maps $m_k$. The category bar module is the algebraic direct sum of composable finite words in the shifted morphism modules, with length-zero summands indexed by objects; each $m_k$ extends by insertion to a degree-one coderivation $\widehat m_k$. The category-level A-infinity identities are the components of $D^2=0$ for $D=\sum_{k\ge0}\widehat m_k$, with $m_0$ retained for a curved model. In the $k=2$ diagram, the arrow indicates the output direction from $m_2(x_1,x_2)$ to $x_0$; the diagram supplies no regularity or gluing argument.
```tikz
\begin{tikzpicture}[scale=1]
  \coordinate (z0) at (0,-1.25);
  \coordinate (z1) at (1.5,1.25);
  \coordinate (z2) at (-1.5,1.25);
  \draw[thick] (z0) -- (z1) -- (z2) -- cycle;
  \draw[->] (0.48,-0.45) -- (z0);
  \node[below] at (z0) {$z_0:x_0$};
  \node[right] at (z1) {$z_1:x_1$};
  \node[left] at (z2) {$z_2:x_2$};
  \node[right] at (0.95,0.05) {$L_0$};
  \node[above] at (0,1.25) {$L_1$};
  \node[left] at (-0.95,0.05) {$L_2$};
  \node at (0,0.05) {$m_2(x_1,x_2)$};
\end{tikzpicture}
```

Here the positive boundary order is $z_0,z_1,z_2$: $x_1\in L_0\cap L_1$, $x_2\in L_1\cap L_2$, and $x_0\in L_2\cap L_0$ is the output generator in $CF(L_0,L_2)$. This is a labeling convention only.

Write $C(L)=CF(L,L)$ for a chosen self-Floer chain model, including the perturbation needed to define it. A cohomological unit is a class $[e_L]\in\ker(m_1)/\operatorname{im}(m_1)$ in this self-Floer model, defined only when $m_1^2=0$, that acts as an identity for the induced $m_2$. In the shifted source convention, a strict unit $e_L\in C(L)[1]^{-1}$ satisfies $m_{k+1}(x_1,\ldots,e_L,\ldots,x_k)=0$ for $k\ge2$ or $k=0$, and $m_2(e_L,x)=(-1)^{d(x)}m_2(x,e_L)=x$; here $d(x)$ is the unshifted cohomological degree, so its shifted degree is $d(x)-1$ and the equivalent shifted exponent is $|x|+1$. A multi-object strict-unit system is additional data.

A claimed category must state the selected analytic regime, all brane/orientation/grading/local-system conventions, coefficient field and energy filtration, polygon domains and compactification, regularization or perturbations, convergence of operation sums, units, and coherent gluing. A one-dimensional compactified polygon moduli space must have its codimension-one boundary identified with the signed broken-polygon configurations that give the A-infinity identities; over $\mathbb F_2$ signs may be suppressed, but regularity, compactness, and gluing are still required. The FOOO source also states pairwise filtered A-infinity bimodule structures for transverse pairs (Theorem 3.9 and Proposition 3.10), but these do not provide coherent composition operations for every sequence of objects or the category-level polygon identities required here. Kontsevich's cited 1994 discussion is preliminary historical motivation and is not used as a construction proof. No such general multi-object construction is proved here; compactness, transversality or virtual regularization, orientations, convergence, units, and composition remain explicit unresolved obligations.

For the generator factors above, take the orientation line $o_x$ to be a chosen rank-one graded $\Bbbk$-module with coherent gluing identifications; over a field of characteristic two take $o_x=\Bbbk$ in degree zero. Thus in the intersection model
$$CF(L_0,L_1)=\bigoplus_{x\in L_0\cap L_1}\Lambda^0_{\nu,\Bbbk}\otimes_{\Bbbk}\operatorname{Hom}_{\Bbbk}(E_{0,x},E_{1,x})\otimes_{\Bbbk}o_x.$$
This direct sum is finite: transversality makes $L_0\cap L_1$ discrete, while compactness of the embedded Lagrangians makes it compact. In the chord model use the analogous direct sum over the selected nondegenerate chords, with the endpoint fibers stated above; finiteness and energy control for that generator set are part of the chosen analytic regime. The displayed algebraic tensor products in the operation type must extend continuously to the energy-filtered completed tensor products selected by that regime.

For a stable map $u$ with normalized components $u_C$, define its total symplectic area by $E_\omega(u)=\sum_C\int_Cu_C^*\omega$. For a fixed combinatorial relative class $\beta$, this value is homotopy-invariant by [[lem-gts-relative-disk-area-invariant]]. A proposed count in class $\beta$ is weighted by a declared Novikov monomial $q^{\gamma(\beta)}$ whose valuation obeys $\nu(\gamma(\beta))=E_\omega(\beta)$; sums over classes must converge in the energy filtration. The class-to-exponent map and any grading convention must be specified, and compatibility of relative classes across changing domain types remains an obligation.

## Definition references

[[def-gts-symplectic-and-almost-complex-curve-data]]

[[def-gts-relatively-spin-lagrangian-data]]

[[def-gts-stable-j-holomorphic-disks-with-boundary-markings]]

[[def-gts-lagrangian-intersection-and-hamiltonian-chord-data]]

[[def-gts-universal-novikov-completion]]

[[lem-gts-relative-disk-area-invariant]]

[[lem-gts-novikov-completion-is-filtered-ring]]

[[lem-gts-tame-j-holomorphic-area-is-dirichlet-energy]]

[[def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations]]
