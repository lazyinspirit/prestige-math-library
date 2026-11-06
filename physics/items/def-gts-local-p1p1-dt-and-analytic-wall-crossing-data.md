---
id: def-gts-local-p1p1-dt-and-analytic-wall-crossing-data
kind: definition
title: Source data for local P1 by P1 DT and analytic wall crossing
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
deps:
  - def-derived-category-of-an-abelian-category
  - def-gts-bridgeland-stability-condition-with-support-property
  - def-gts-local-cy-threefold-total-space-of-canonical-line-bundle
  - def-gts-quiver-jacobian-king-theta-stability-data
  - def-axiom-of-choice
dependency_roles:
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  def-gts-local-cy-threefold-total-space-of-canonical-line-bundle: mathematical-premise
  def-gts-quiver-jacobian-king-theta-stability-data: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Tom Bridgeland, Fabrizio Del Monte, and Luca Giovenzana, Invariant Stability Conditions on Certain Calabi-Yau Threefolds
      url: https://arxiv.org/pdf/2412.08531v1
      locator: §§1.1–1.3 and §4.3, including Theorems 1.1–1.2 and 4.3
    - title: Maxim Kontsevich and Yan Soibelman, Analyticity and resurgence in wall-crossing formulas
      url: https://arxiv.org/pdf/2005.10651v3
      locator: §§2.2–2.4 and 3.4, 3.11; Definition 3.11.1
    - title: Maxim Kontsevich and Yan Soibelman, Stability structures, motivic Donaldson-Thomas invariants and cluster transformations
      url: https://arxiv.org/pdf/0811.2435v1
      locator: §1.4 and §§2.1–2.3, 2.5, source formal wall-crossing, support/topology and multicover conventions; the actual weighted map is specified as given data here
axiom_use: ZF + AC
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

The ambient foundational base is ZF+AC, inherited through the coherent and obstruction-theory inputs; no choice-free claim is made.

For $Z=\mathbb P^1\times\mathbb P^1$, let $X=\operatorname{Tot}(K_Z)$ and let $D^b_c(X)$ denote the full triangulated subcategory of $D^b(\operatorname{Coh}X)$ whose cohomology sheaves have compact support. Use the source quiver $Q$ with vertices $1,2,3,4$, with two arrows $X_{ij}^{(1)},X_{ij}^{(2)}:i\to j$ on each directed edge $1\to2\to3\to4\to1$, and potential
$
W=-X_{12}^{(1)}X_{23}^{(1)}X_{34}^{(1)}X_{41}^{(1)}-X_{12}^{(2)}X_{23}^{(2)}X_{34}^{(2)}X_{41}^{(2)}+X_{12}^{(2)}X_{23}^{(1)}X_{34}^{(2)}X_{41}^{(1)}+X_{12}^{(1)}X_{23}^{(2)}X_{34}^{(1)}X_{41}^{(2)},
$
where products are cyclic paths modulo cyclic permutation. The source group $G=\mathbb Z_2$ acts by a half-turn with vertex permutation $(1\ 3)(2\ 4)$ and arrow action $X_{12}^{(i)}\leftrightarrow X_{34}^{(3-i)}$, $X_{23}^{(i)}\leftrightarrow X_{41}^{(3-i)}$ for $i=1,2$. This is the character-deck action in the displayed source arrow basis; the potential is invariant. A same-index exchange would preserve the written potential but have a different quotient potential, so it is not the action used here. The source tilting-derived equivalence identifies the compact-support category with the bounded derived category of finite-dimensional representations of $J(Q,W)$. The diagram below uses arrows from source to target; the two curved parallel arrows on each side are distinguished by superscripts. The path products in $W$ read once around this directed cycle; the crossing edges in the drawing do not indicate additional arrows.

```tikz
\begin{tikzpicture}[>=stealth,baseline=-0.5ex]
  \node[circle,draw,inner sep=2pt] (v1) at (0,2) {$1$};
  \node[circle,draw,inner sep=2pt] (v2) at (2,2) {$2$};
  \node[circle,draw,inner sep=2pt] (v3) at (2,0) {$3$};
  \node[circle,draw,inner sep=2pt] (v4) at (0,0) {$4$};
  \draw[->] (v1) to[bend left=18] node[above] {$X_{12}^{(1)}$} (v2);
  \draw[->] (v1) to[bend right=18] node[below] {$X_{12}^{(2)}$} (v2);
  \draw[->] (v2) to[bend left=18] node[right] {$X_{23}^{(1)}$} (v3);
  \draw[->] (v2) to[bend right=18] node[left] {$X_{23}^{(2)}$} (v3);
  \draw[->] (v3) to[bend left=18] node[below] {$X_{34}^{(1)}$} (v4);
  \draw[->] (v3) to[bend right=18] node[above] {$X_{34}^{(2)}$} (v4);
  \draw[->] (v4) to[bend left=18] node[left] {$X_{41}^{(1)}$} (v1);
  \draw[->] (v4) to[bend right=18] node[right] {$X_{41}^{(2)}$} (v1);
\end{tikzpicture}
```

A source local-P1-by-P1 DT package consists of this noncompact target and compact-support category, the quiver-with-potential data above, its dimension-vector lattice $N=\mathbb Z^{Q_0}$, a specified invariant locally finite stability condition on the associated category, a central charge $Z:N\to\mathbb C$, and the source orientation/Behrend-weighted DT integration data. The SPECIFIED source invariant condition is the one induced from the following geometric conifold chamber. Put $Y=\operatorname{Tot}_{\mathbf P^1}(O(−1)⊕O(−1))$, let $H=\mathbb Z_2$ act by −1 on its two fibers, and identify G with its character group. On $\operatorname{Coh}_c(Y)$ use $Z_Y(O_C(n))=i−n$ and $Z_Y(O_y)=−1$, where C is the zero section and y is a point; equivalently one may use the same chamber with $Z_Y(O_C)$ in the upper half-plane and $Z_Y(O_y)$ negative real, with the consistent phase lift. The slicing is given by slope-semistable sheaves and their shifts. Induce along $\operatorname{Forget}:Dc_H(Y)→Dc(Y)$ and transport through the explicit tilting equivalence with Dc(X). The corresponding charges are $γ1=[O_C(−1)[1]⊗χ0]$, $γ2=[O_C⊗χ0]$, $γ3=[O_C(−1)[1]⊗χ1]$, $γ4=[O_C⊗χ1]$. In the displayed SOURCE arrow basis set $A_i=X_{12}^{(i)}$, $B_i=X_{23}^{(i)}$, $C_i=X_{34}^{(i)}$, and $D_i=X_{41}^{(i)}$ for $i=1,2$. The standard right-module output of RHom is converted to the declared left-module convention by the path-reversing anti-involution $\tau$: it sends $e_j$ to $e_{\pi(j)}$ for $\pi=(1\ 2)(3\ 4)$, fixes $A_i,C_i$, exchanges $B_i$ with $D_i$, and satisfies $\tau(pq)=\tau(q)\tau(p)$. Reversing each displayed cyclic monomial and cyclically rotating fixes $W$, so its cyclic-derivative ideal is preserved. The converted action is $a\cdot m=m\tau(a)$; it is covariant and exact and commutes with the stated character-deck action. This pairwise charge interchange preserves every displayed spectrum row and $\delta$. The DT formula is for this specified source chamber, not every point of the entire fixed-locus covering with the basis held fixed. Only the analytic-wall-crossing conclusion later ranges over its full connected component.

The given DT integration data have the following precise content. For every source heart and strict charge cone C, let $H_{\mathrm{sc}}=H_{\mathrm{reg}}/(L−1)$ be its regular semiclassical Hall stack-function algebra with subobject-first convolution, and let C[N∩C] have $x^γx^η=x^{(γ+η)}$ and Poisson bracket $\{x^γ,x^η\}=\langle γ,η\rangle x^{(γ+η)}$, in the fixed source quadratic-refinement convention. The actual GIVEN map is $I_ν:H_{\mathrm{sc}}→C[N∩C]$, extended to the degree completions; on a regular generator $[S→M_γ]$ it is $χ_c(S,ν_{(M_γ)}|S)x^γ$ with the source smooth-atlas sign. Regularity of the integrated semistable logarithms is part of this actual datum. There is an actual degree-completed regular semiclassical Hall integration map with Behrend weights, and the compatible framed Hall modules for a chosen rank-one framing at either character (vertices2 and4 in the declared left-module convention). The framing maps have domains the corresponding based rank-one framed Hall modules and codomains $x^{(∞_j)}$ C[[N∩C]]; they send the bare based framing to $x^{(∞_j)}$ and intertwine both Hall actions. The unframed map is Poisson for the skew Euler form, is compatible with subobject-first Hall factorization and the image-of-framing stratification, and has the source smooth-atlas normalization. It sends the regular logarithm of a semistable stack to $H=−\sum _{(γ>0)} \overline{Ω}(γ)x^γ$, where $\overline{Ω}(γ)=\sum _{(k|γ)}Ω(γ/k)/k²$; this equation defines the rational multicover normalization and its Möbius-inverted Ω. A reduced stable coarse point has Ω=+1. In the central zero-dimensional orbifold category the Euler form is zero, and write n0(sδ0+tδ1)=s and n1(sδ0+tδ1)=t. A framing at character j has pairing $n_j(γ)$ there (the vertex2 or vertex4 coordinate functional on the full lattice). Its integrated cyclic-quotient series is the Behrend-weighted Euler series of the corresponding framed scheme, with raw quotient variable $q^γ=(−1)^{(n_j(γ))}x^γ$. These are axioms of the GIVEN source integration datum; neither its existence for arbitrary categories nor any desired numerical Ω value is assumed. They must not be replaced by an unweighted Euler homomorphism. The source orientation and formal wall data include the actual continuous assignment of formal sector products, with support quadratic forms and cyclic-cover central-charge charts, on the chosen connected stability component. No analyticity or exponential coefficient bound is included in this given formal datum.

The source-normalized integer assigned to a class $d\in N$ is denoted $\Omega_\sigma(d)$; changing the compact-support category, quiver potential, orientation data, or integration convention changes the package and is not allowed silently. The symbols $\gamma_i$ denote the source basis classes indexed by the vertices, and $\delta=\gamma_1+\gamma_2+\gamma_3+\gamma_4$.

For the analytic wall-crossing clause, the charge lattice is a finite-rank free abelian group $N$ and the source Lie algebra is the corresponding graded Lie algebra of algebraic vector fields on the torus $\operatorname{Hom}(N,\mathbb C^*)$. A wall-crossing datum is analytic in the Kontsevich–Soibelman sense when the transition transformations obtained from the source stability data for every sufficiently close pair of decorated rational points are convergent holomorphic transformations on their stated torus domains. The formal support cones, support property, cyclic covers, and actual continuous source wall data are part of the input; convergence of the transition series is not. This is not a definition of an arbitrary DT theory on every Calabi–Yau threefold.

## Definition references

[[def-derived-category-of-an-abelian-category]]

[[def-gts-bridgeland-stability-condition-with-support-property]]

[[def-gts-local-cy-threefold-total-space-of-canonical-line-bundle]]

[[def-gts-quiver-jacobian-king-theta-stability-data]]

## Remarks

The arrow and chamber specifications remove two ambiguities in the earlier source-data interface. In particular, the equivariant lift of the conifold spherical twist is the product of the twists in the two character-linearized $O_C$ objects; in the declared left-module coordinates its Euler transvections change γ1 by ±2(γ2−γ4), while commuting with the character action. Mere G-invariance therefore cannot be substituted for the specified source chamber in a fixed-basis spectrum assertion. The theorem's full-component clause concerns analyticity only. The explicit constructions and coefficient calculations are on the A-page theorem; these clarifications assume no spectrum values.
