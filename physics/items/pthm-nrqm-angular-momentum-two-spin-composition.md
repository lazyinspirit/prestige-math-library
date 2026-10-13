---
id: pthm-nrqm-angular-momentum-two-spin-composition
aliases: [nrqm-angular-momentum-two-spin-composition]
kind: physics-theorem
domain: physics
title: "Composition of two spin labels: total spin operators, the Clebsch-Gordan block decomposition and the spin-half singlet"
status: draft
origin: session
dependency_level: 10
deps: [def-axiom-of-choice, def-countable-choice, def-dimension, def-hilbert-space, def-inner-product-space, def-linear-subspace, def-nrqm-angular-momentum-framework-angular-momentum-observables, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-orthogonality-and-orthogonal-complement, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-self-adjoint-positive-unitary-and-normal-operator, lem-nrqm-composites-hilbert-tensor-construction, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-state-and-composition, prop-nrqm-orbital-and-spin-finite-spin-matrices, thm-nrqm-orbital-and-spin-tensor-spin-composition]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dimension: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-orbital-and-spin-tensor-spin-composition: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The internal-factor reading of the composition of two declared spin labels s and t under the composition postulate P1, the spin assignment P6 and the locally adopted diagonal two-factor rotation action: the total spin operators on the tensor product of the two internal factors, their commutation relations and Casimir, the Clebsch-Gordan decomposition into total-spin blocks with multiplicities, and the explicit spin-half singlet. The item concerns the internal factors only; the full two-particle spatial model, statistics, interactions and any measured correlation belong to the composites pages and are not asserted here."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.5, printed pages 169-176 (PDF pages 177-184): addition of angular momenta, the coupled and uncoupled bases and the singlet and triplet of two spin-half systems"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 10 'Addition of Angular Momentum', Sections 1-2, printed pages 1-7: tensor-lifted addition of angular momenta and the spin-half triplet and singlet"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/f27e44d7b761cec0ef1d01734f0a23b8_MIT8_05F13_Chap_10.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the composition postulate P1 and the internal-factor assignment of the
spin postulate P6 in the readings of
[[post-nrqm-framework-state-and-composition]] and
[[post-nrqm-framework-identical-particles-and-spin]]
([[def-nrqm-state-geometry-framework-state-space]],
[[lem-nrqm-composites-hilbert-tensor-construction]]), and assume the Axiom of Countable
Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Fix two declared
spin labels $s,t\in\{0,\tfrac12,1,\tfrac32,\dots\}$ with internal factors
$V_{s}=\mathbb C^{2s+1}$, $V_{t}=\mathbb C^{2t+1}$ and spin matrices
$J^{(s)}_{i}$, $J^{(t)}_{i}$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]], and consider the
composite internal factor $V_{s}\otimes V_{t}$. On this composite, explicitly
adopt the diagonal internal rotation assignment
$D_{s,t}(W):=D_s(W)\otimes D_t(W)$ for $W\in SU(2)$, where each $D_s,D_t$
is the representation assigned by P6 clause (ii). This two-factor action
is a local composite model assignment, not an additional conclusion of P6.
Put
$$S^{\mathrm{tot}}_{i}:=\hbar\bigl(J^{(s)}_{i}\otimes I_{V_{t}}+I_{V_{s}}\otimes J^{(t)}_{i}\bigr),\qquad S^{\mathrm{tot}\,2}:=\sum_{i=1}^{3}\bigl(S^{\mathrm{tot}}_{i}\bigr)^{2},\qquad S^{\mathrm{tot}}_{z}:=S^{\mathrm{tot}}_{3}.$$
Write $S^{(s)}_i:=\hbar J^{(s)}_i$ and
$S^{(s)2}:=\sum_i(S^{(s)}_i)^2$, and similarly for $t$; define
$S^{\mathrm{tot}}_\pm:=S^{\mathrm{tot}}_1\pm iS^{\mathrm{tot}}_2$.
Then:

(a) each $S^{\mathrm{tot}}_{i}$ is a self-adjoint endomorphism of
$V_{s}\otimes V_{t}$ satisfying
$[S^{\mathrm{tot}}_{i},S^{\mathrm{tot}}_{j}]=i\hbar\sum_{k}\varepsilon_{ijk}S^{\mathrm{tot}}_{k}$,
$S^{\mathrm{tot}\,2}$ is self-adjoint and commutes with every
$S^{\mathrm{tot}}_{i}$, and
$$S^{\mathrm{tot}\,2}=S^{(s)2}\otimes I_{V_{t}}+I_{V_{s}}\otimes S^{(t)2}+2\sum_{i=1}^{3}S^{(s)}_{i}\otimes S^{(t)}_{i};$$

(b) there is an orthogonal decomposition
$V_{s}\otimes V_{t}=\bigoplus_{j=|s-t|}^{s+t}W_{j}$ into
$S^{\mathrm{tot}}$-invariant subspaces with $\dim W_{j}=2j+1$, on each of
which the triple $(S^{\mathrm{tot}}_{1},S^{\mathrm{tot}}_{2},S^{\mathrm{tot}}_{3})$
is unitarily equivalent to the spin-$j$ matrices of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] scaled by $\hbar$; in
particular $S^{\mathrm{tot}\,2}=\hbar^{2}j(j+1)I$ on $W_{j}$, each $j$ occurs
exactly once, and there is an orthonormal basis $(v_{j,k})$,
$0\le k\le2j$, of $W_{j}$ with
$$S^{\mathrm{tot}}_{z}v_{j,k}=\hbar(j-k)v_{j,k},\qquad S^{\mathrm{tot}}_{+}v_{j,k}=\hbar\sqrt{k(2j-k+1)}\,v_{j,k-1},\qquad S^{\mathrm{tot}}_{-}v_{j,k}=\hbar\sqrt{(k+1)(2j-k)}\,v_{j,k+1};$$
the coefficients of the $v_{j,k}$ in the product basis $(e^{(s)}_{m}\otimes e^{(t)}_{n})$
are the Clebsch-Gordan coefficients and are determined by the phase of the
top vector $u_{j}$ (a unit vector of $S^{\mathrm{tot}}_{z}$-weight $\hbar j$
orthogonal to all $W_{j'}$ with $j'>j$), with $u_{s+t}=e^{(s)}_{s}\otimes e^{(t)}_{t}$
admissible;

(c) for every $M$ the $S^{\mathrm{tot}}_{z}$-eigenspace with weight $\hbar M$
has dimension $N(M)=\#\{m\in\{-s,\dots,s\}:M-m\in\{-t,\dots,t\}\}$, and the
identity $(e^{(s)}_{m}\otimes e^{(t)}_{n})_{m,n}$ is an orthonormal basis of
$V_{s}\otimes V_{t}$ of $S^{\mathrm{tot}}_{z}$-eigenvectors with weights
$\hbar(m+n)$;

(d) for $s=t=\tfrac12$ one has $V_{1/2}\otimes V_{1/2}=W_{0}\oplus W_{1}$ with
$\dim W_{0}=1$ and $\dim W_{1}=3$; the vector
$$\Psi:=\tfrac{1}{\sqrt2}\bigl(e^{(1/2)}_{1/2}\otimes e^{(1/2)}_{-1/2}-e^{(1/2)}_{-1/2}\otimes e^{(1/2)}_{1/2}\bigr)$$
is a unit vector with $S^{\mathrm{tot}}_{i}\Psi=0$ for every $i$, and it is
the unique unit vector in the kernel of $S^{\mathrm{tot}\,2}$ up to a phase;

(e) **Scope.** The statement concerns the internal factors of a declared
composite, the assignments of P1 and P6 and the declared diagonal
two-factor action. It asserts no spatial
two-particle model, no statistics or permutation symmetry, no interaction, no
dynamics, no measurement and no empirical correlation; in particular it does
not by itself imply the singlet correlations of a separated pair, which
belong to the composites page.

## Facts & Assumptions

**Given:** The postulates P1 and P6 in the stated readings; the Axiom of
Countable Choice; the local diagonal rotation assignment $D_{s,t}$;
the spin labels $s,t$; the internal factors with their
bases $(e^{(s)}_{m})$, $(e^{(t)}_{n})$; the total spin operators; a real
number $M$.

[F1] **Finite spin matrices.** On $V_{s}$ the matrices $J^{(s)}_{i}$ are
self-adjoint with $[J^{(s)}_{i},J^{(s)}_{j}]=i\sum_{k}\varepsilon_{ijk}J^{(s)}_{k}$,
$J^{(s)2}=s(s+1)I$, $J^{(s)}_{+}e^{(s)}_{m}=\sqrt{(s-m)(s+m+1)}e^{(s)}_{m+1}$
and $J^{(s)}_{z}e^{(s)}_{m}=me^{(s)}_{m}$ (and analogously for $t$)
([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clauses (a),(b),(c),(d)).

[F2] **Tensor spin composition.** On $V_{s}\otimes V_{t}$ the operators
$J^{\mathrm{tot}}_{i}:=J^{(s)}_{i}\otimes I+I\otimes J^{(t)}_{i}$ are
self-adjoint with the angular momentum commutators,
$J^{\mathrm{tot}2}=J^{(s)2}\otimes I+I\otimes J^{(t)2}+2\sum_{i}J^{(s)}_{i}\otimes J^{(t)}_{i}$,
there is an orthogonal decomposition
$V_{s}\otimes V_{t}=\bigoplus_{j=|s-t|}^{s+t}W_{j}$ with $\dim W_{j}=2j+1$,
each $j$ occurring once, on each block the triple is unitarily equivalent to
the spin-$j$ matrices, the weight multiplicity is
$N(M)=\#\{m\in L_{s}:M-m\in L_{t}\}$ with the identity basis
$(e^{(s)}_{m}\otimes e^{(t)}_{n})$, and the block bases
$v_{j,k}=(k!(2j)\cdots(2j-k+1))^{-1/2}(J^{\mathrm{tot}}_{-})^{k}u_{j}$
satisfy the displayed ladder actions, with the phase of $u_{j}$ fixing the
Clebsch-Gordan coefficients and $u_{s+t}=e^{(s)}_{s}\otimes e^{(t)}_{t}$
admissible
([[thm-nrqm-orbital-and-spin-tensor-spin-composition]] clauses (a),(b),(c),(d),(e),
[[lem-nrqm-composites-hilbert-tensor-construction]]).

[F3] **Internal-factor reading.** P1 supplies the composite internal factor
$V_s\otimes V_t$, and P6 clause (ii) assigns $D_s,D_t$ separately. The
diagonal composite action $D_{s,t}(W)=D_s(W)\otimes D_t(W)$ is adopted in the
Statement. Its representation law and unitarity follow from tensor
composition and adjoints, and its continuity from the finite-dimensional
continuity of each factor. Along $A_i(u)$ its derivative at zero is
$-i(J_i^{(s)}\otimes I+I\otimes J_i^{(t)})$ by the product rule and the P6
coordinate generators. Thus $S_i^{\mathrm{tot}}$ are the scaled generators
of this assigned action. The model's spin observables are $S=\hbar J$ on
each factor
([[post-nrqm-framework-identical-particles-and-spin]] clause (ii),
[[post-nrqm-framework-state-and-composition]],
[[def-nrqm-kinematics-framework-massive-spin-s-model]],
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]]).

## Proof

**Proof technique:** direct; rescale the matrix composition theorem by
$\hbar$, transfer its decomposition and ladder statements to the total spin
operators, and evaluate the spin-half singlet explicitly.

**Given:** The data of the statement and [F1]-[F3].

1.1 [Operators and algebra] By [F2] the operators $J^{\mathrm{tot}}_{i}$ are self-adjoint with the angular momentum commutators and the displayed Casimir identity; multiplying by $\hbar$ and using $S^{\mathrm{tot}}_{i}=\hbar J^{\mathrm{tot}}_{i}$, $S^{(s)}_{i}=\hbar J^{(s)}_{i}$, $S^{(t)}_{i}=\hbar J^{(t)}_{i}$ and $S^{(s)2}=\hbar^{2}J^{(s)2}$ gives $[S^{\mathrm{tot}}_{i},S^{\mathrm{tot}}_{j}]=i\hbar\sum_{k}\varepsilon_{ijk}S^{\mathrm{tot}}_{k}$ and the identity of (a). Each $S^{\mathrm{tot}}_{i}$ is self-adjoint, so its square is self-adjoint; because the space is finite-dimensional, their sum $S^{\mathrm{tot}\,2}$ is self-adjoint. Its commutation with every $S^{\mathrm{tot}}_{i}$ follows from the Casimir commutation in [F2], which completes (a). [F2, algebra]

1.2 [Singlet computation] Let $s=t=\tfrac12$ and $\Psi=\tfrac1{\sqrt2}(e^{(s)}_{1/2}\otimes e^{(t)}_{-1/2}-e^{(s)}_{-1/2}\otimes e^{(t)}_{1/2})$; by [F1] $J^{(s)}_{+}e^{(s)}_{1/2}=0$, $J^{(s)}_{+}e^{(s)}_{-1/2}=e^{(s)}_{1/2}$ and $J^{(s)}_{-}e^{(s)}_{1/2}=e^{(s)}_{-1/2}$, $J^{(s)}_{-}e^{(s)}_{-1/2}=0$, and analogously for $t$; hence $J^{\mathrm{tot}}_{+}(e^{(s)}_{1/2}\otimes e^{(t)}_{-1/2})=e^{(s)}_{1/2}\otimes e^{(t)}_{1/2}=J^{\mathrm{tot}}_{+}(e^{(s)}_{-1/2}\otimes e^{(t)}_{1/2})$ and $J^{\mathrm{tot}}_{-}(e^{(s)}_{1/2}\otimes e^{(t)}_{-1/2})=e^{(s)}_{-1/2}\otimes e^{(t)}_{-1/2}=J^{\mathrm{tot}}_{-}(e^{(s)}_{-1/2}\otimes e^{(t)}_{1/2})$, so $J^{\mathrm{tot}}_{\pm}\Psi=0$, giving $J^{\mathrm{tot}}_1\Psi=J^{\mathrm{tot}}_2\Psi=0$ by $J^{\mathrm{tot}}_{\pm}=J^{\mathrm{tot}}_1\pm iJ^{\mathrm{tot}}_2$. Separately, [F1] gives $J^{\mathrm{tot}}_3(e^{(s)}_{1/2}\otimes e^{(t)}_{-1/2})=(\tfrac12-\tfrac12)e^{(s)}_{1/2}\otimes e^{(t)}_{-1/2}=0$ and $J^{\mathrm{tot}}_3(e^{(s)}_{-1/2}\otimes e^{(t)}_{1/2})=(-\tfrac12+\tfrac12)e^{(s)}_{-1/2}\otimes e^{(t)}_{1/2}=0$, hence $J^{\mathrm{tot}}_3\Psi=0$ as well; $\Psi$ is unit because the product basis is orthonormal. [F1, F2, algebra]

2.1 [Decomposition and Clebsch-Gordan data] Transferring [F2] to the total spin operators by the rescaling of step 1.1 gives the orthogonal decomposition $V_{s}\otimes V_{t}=\bigoplus_{j=|s-t|}^{s+t}W_{j}$ with $\dim W_{j}=2j+1$, the unitary equivalence with the spin-$j$ matrices on each block and hence $S^{\mathrm{tot}\,2}=\hbar^{2}j(j+1)I$ on $W_{j}$, the weight multiplicity of (c) and the identity basis; the block bases $v_{j,k}$ have the displayed ladder actions with the stated phase convention, which are (b) and (c). [step 1.1, F2, algebra]

3.1 [Uniqueness of the singlet] For $s=t=\tfrac12$ the decomposition of step 2.1 has the two blocks $j=0$ and $j=1$ with dimensions $1$ and $3$, and $S^{\mathrm{tot}\,2}=0$ on the one-dimensional block $W_{0}$ and $S^{\mathrm{tot}\,2}=\hbar^{2}\cdot2I$ on $W_{1}$; hence $\ker S^{\mathrm{tot}\,2}=W_{0}$ is one-dimensional, and since $\Psi\ne0$ satisfies $S^{\mathrm{tot}\,2}\Psi=0$ by step 1.2, it spans $W_{0}$: the kernel is the line $\mathbb C\Psi$. This is (d). [step 1.2, step 2.1, F2, algebra]

4.1 [Assembly and scope] Step 1.1 proves (a), step 2.1 proves (b),(c), and step 3.1 proves (d); only the internal factors, the assignments of [F3] and the finite matrix composition theorem were used, no spatial two-particle factor, statistics, dynamics, measurement or empirical input entered, which is the scope statement (e). [step 1.1, step 2.1, step 3.1, F3] ∎

## Remarks

- **Role of the page.** This theorem is the internal-factor supplier for the
  composites page, where the two-particle spatial factors, the preparation
  and the correlation analysis are added; no measured correlation or Bell
  statement is made here.
- **Phases.** The block vectors are determined by the phase of the top
  vector; different phases multiply all Clebsch-Gordan coefficients of a
  block by the same phase, so all outcome probabilities built from one block
  are unaffected.
