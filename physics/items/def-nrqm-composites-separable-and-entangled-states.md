---
id: def-nrqm-composites-separable-and-entangled-states
aliases:
- nrqm-composites-separable-and-entangled-states
kind: definition
domain: mathematics
title: Product vectors, separable states and entangled states of a two-factor composite
status: draft
origin: session
dependency_level: 5
deps:
- def-countable-choice
- def-hilbert-space
- def-trace-class-operator
- lem-nrqm-composites-density-and-scalar-spectral-probability
- lem-nrqm-composites-hilbert-tensor-construction
- lem-nrqm-composites-rank-one-operator-calculus
- lem-nrqm-state-geometry-density-set-convex-and-complete
- thm-trace-class-is-a-two-sided-banach-operator-ideal
- lem-nrqm-composites-pure-state-separability-criterion
- thm-heine-borel-rn
- thm-continuous-image-of-a-compact-space-is-compact
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-trace-class-operator: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-state-geometry-density-set-convex-and-complete: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  lem-nrqm-composites-pure-state-separability-criterion: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: 'J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1,
      printed pages 105-111 (PDF pages 113-119): composite systems, product and non-product
      states, and the definition of entanglement'
    url: https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf
  - title: 'B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 ''Multiparticle
      States and Tensor Products'', Section 2 ''Entangled States'', chapter pages
      8-9: entangled vectors as non-product vectors and the basis independence of
      entanglement'
    url: https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf
verification:
  precheck: n/a
---
## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H,K$ be
nonzero complex Hilbert spaces ([[def-hilbert-space]]) and let
$H\widehat\otimes K$ be their completed tensor product with inclusion $\kappa$
([[lem-nrqm-composites-hilbert-tensor-construction]]). Density operators are
the self-adjoint positive trace-class operators of trace one
([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a),
[[def-trace-class-operator]]), and for $u,u'\in H$, $v,v'\in K$ the rank-one
operator $T_{u\otimes v,\,u'\otimes v'}$ is the one of
[[lem-nrqm-composites-rank-one-operator-calculus]].

**(a) Product vectors and pure product states.** A vector $\Psi\in
H\widehat\otimes K$ is a **product vector** when $\Psi=\kappa(u\otimes v)$ for
some $u\in H$, $v\in K$. A **pure product state** of the composite is a
density operator of the form
$$T_{\Psi,\Psi},\qquad \Psi=\kappa(u\otimes v),\quad \|u\|=\|v\|=1 .$$
A vector is **non-product** when it is not a product vector.

**(b) Separable states.** Write $\mathcal P$ for the set of all pure product
states, a subset of the set $D(H\widehat\otimes K)$ of density operators. The
**separable states** are the elements of the trace-norm closed convex hull
$$\mathcal S(H,K):=\overline{\operatorname{conv}}\,\mathcal P \ \subseteq\ D(H\widehat\otimes K),$$
where $\operatorname{conv}$ denotes the set of finite convex combinations and
the closure is taken in the trace norm $\|\cdot\|_{1}$ of
[[thm-trace-class-is-a-two-sided-banach-operator-ideal]]. A state
$\rho\in D(H\widehat\otimes K)$ is **entangled** (with respect to the
declared splitting $H,K$) when $\rho\notin\mathcal S(H,K)$.

**(c) Conventions and elementary consequences of the form of the definition.**
The set $\operatorname{conv}\mathcal P$ consists exactly of the finite sums
$\sum_{j=1}^{n}w_{j}T_{\Psi_{j},\Psi_{j}}$ with $n\ge1$, weights $w_{j}\ge0$,
$\sum_{j}w_{j}=1$ and unit product vectors $\Psi_{j}$: such sums are convex
combinations of density operators and hence density operators
([[lem-nrqm-state-geometry-density-set-convex-and-complete]] clause (a);
the finite-dimensional case of that clause is the
[[lem-nrqm-composites-density-and-scalar-spectral-probability]] expansion
applied to orthogonal pure states).
Every element of $\operatorname{conv}\mathcal P$ is a density operator, and
$\mathcal S(H,K)$ is a convex subset of $D(H\widehat\otimes K)$: if $\rho,\sigma$
are limits of convex combinations $\rho_{n}\to\rho$, $\sigma_{n}\to\sigma$ and
$t\in[0,1]$, then $t\rho+(1-t)\sigma$ is the trace-norm limit of the convex
combinations $t\rho_{n}+(1-t)\sigma_{n}$. Separability of a state is a
property of the declared splitting $(H,K)$; no assertion is made here about
its behaviour under a different factorization of a larger space.

**(d) Finite dimension.** When $H$ and $K$ are finite dimensional,
$\mathcal P$ is compact and $\operatorname{conv}\mathcal P$ is already closed
in the trace norm (it is a compact, hence closed, convex set in the
finite-dimensional space of endomorphisms of $H\widehat\otimes K$), so
$\mathcal S(H,K)=\operatorname{conv}\mathcal P$ and no closure convention is
needed. In the general case the closure in clause (b) is declared explicitly
and is part of the definition.

**(e) Pure-state specialization and status.** A pure state $T_{\Psi,\Psi}$ with $\|\Psi\|=1$ is separable in the precise trace-norm closed-convex-hull sense of clause (b) exactly when $\Psi$ is a product vector of clause (a); otherwise it is entangled. This is the proved mathematical specialization of [[lem-nrqm-composites-pure-state-separability-criterion]], whose locally defined $\mathcal P,\mathcal S$ are exactly those above. Clauses (a)-(e) fix mathematical vocabulary and adopt no physical assumption, dynamics, measurement or probability law. Whether a laboratory preparation realizes a separable or entangled state for the declared splitting remains a tested identification with uncertainty, not a consequence about nature of this definition.

## Remarks

- **Why the closure is explicit.** In infinite dimension the convex hull of
  the pure product states need not be trace-norm closed, and different authors
  complete it differently. Clause (b) declares the trace-norm closure, which
  is the convention used by this category; the mathematical results of the
  page are stated for this declared class.
- **Entanglement is relative to a splitting.** The same vector of a
  three-factor space may be a product vector with respect to one grouping of
  the factors and non-product with respect to another, so a separability or
  entanglement statement without the declared pair $(H,K)$ is incomplete;
  the definition above always carries that pair.

- **Finite-dimensional closed convex hull.** Suppose $H$ and $K$ have complex
  dimensions $h,k\ge1$, put $L=H\widehat\otimes K$ and $N=hk$, and let
  $W=\{T\in\mathcal B(L):T=T^{*}\}$, regarded as a real vector space. In
  orthonormal coordinates, $W$ has real dimension $d=N^{2}$: there are $N$
  real diagonal entries and $N(N-1)/2$ free complex entries above the
  diagonal. The product of the unit spheres of $H$ and $K$ is a closed
  bounded subset of $\mathbb R^{2h+2k}$, hence compact by
  [[thm-heine-borel-rn]]. The map $(u,v)\mapsto\kappa(u\otimes v)$ is
  continuous by the tensor norm formula, and $q\mapsto T_{q,q}$ is
  trace-norm continuous by
  [[lem-nrqm-composites-rank-one-operator-calculus]] clause (f).
  Therefore $\mathcal P$ is compact by
  [[thm-continuous-image-of-a-compact-space-is-compact]].

  Every finite convex combination of more than $d+1$ members
  $P_1,\ldots,P_m\in\mathcal P$ with positive weights $w_i$ can be reduced.
  The vectors $(P_i,1)$ in $W\times\mathbb R$, a real vector space of
  dimension $d+1$, are linearly dependent; hence there are real $c_i$, not
  all zero, with $\sum_i c_iP_i=0$ and $\sum_i c_i=0$. The $c_i$ have both
  signs. Set $t=\min_{c_i>0}w_i/c_i$ and $w_i'=w_i-tc_i$. Then every
  $w_i'\ge0$, $\sum_iw_i'=1$, $\sum_iw_i'P_i=\sum_iw_iP_i$, and at least
  one $w_i'$ is zero. Removing zero weights and repeating leaves at most
  $d+1$ terms. Since $\mathcal P$ is nonempty, shorter combinations can be
  padded with zero weights. Thus $\operatorname{conv}\mathcal P$ is the
  image of $\mathcal P^{d+1}\times\Delta_d$ under the continuous map
  $((P_i),(w_i))\mapsto\sum_iw_iP_i$, where
  $\Delta_d=\{(w_1,\ldots,w_{d+1}):w_i\ge0,\ \sum_iw_i=1\}$.
  In finite coordinates $\mathcal P$ is closed and bounded because it is
  compact; the simplex $\Delta_d$ is also closed and bounded. Therefore
  $\mathcal P^{d+1}\times\Delta_d$ is closed and bounded in a Euclidean
  space, hence compact by [[thm-heine-borel-rn]]. Its image is
  compact and therefore closed in the trace-norm space. Finally,
  $\operatorname{conv}\mathcal P\subseteq D(L)$ by
  [[lem-nrqm-state-geometry-density-set-convex-and-complete]] clause (a),
  and its trace-norm closure remains in $D(L)$ by that lemma's clause (d).
  This proves the finite-dimensional assertion of clause (d); clause (b)'s
  trace-norm closure remains the declared convention in every dimension.
