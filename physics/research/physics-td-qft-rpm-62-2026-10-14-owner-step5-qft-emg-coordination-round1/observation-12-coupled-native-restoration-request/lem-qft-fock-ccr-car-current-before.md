---
id: lem-qft-fock-ccr-car
kind: lemma
title: Bosonic and fermionic Fock operators with exact domains
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - def-separable-space
  - def-orthogonality-and-orthogonal-complement
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-bounded-tensor-maps
  - lem-nrqm-composites-permutation-sector-projections
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-separable-space: mathematical-premise
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jan Dereziński, Mathematical Introduction to Quantum Field Theory, lecture notes, §§5.4–5.5 and 5.8 (Fock sectors and creation/annihilation)
      url: https://www.fuw.edu.pl/~derezins/qft-lectures.pdf
      locator: Full 136-page author-hosted notes; PDF pp. 35–39.
    - title: David Tong, Quantum Field Theory, §§2.2–2.4 (free-field modes, multi-particle states and Fock space)
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted lecture notes; printed pp. 23–25 and 29–30.
---

## Statement

Assume Countable Choice [[def-countable-choice]] and let $H$ be a separable
complex Hilbert space, with separability taken in its Hilbert norm topology
as defined in [[def-separable-space]], and with the second-variable-linear convention of
[[def-qft-fock-and-test-spaces]]. On $\mathcal D_{\rm fin}$ define the bosonic
creation and annihilation maps $a^\dagger(h)$ and $a(h)$ and the fermionic maps
$c^\dagger(h)$ and $c(h)$ as in
[[def-qft-fock-and-test-spaces]]. Write $a_n(h)$ and $a_n^\dagger(h)$ for
their restrictions to the $n$th bosonic sector. For bosons set

$$D(a(h))=\{\Psi\in\mathcal F_s(H):\sum_{n\ge1}\|a_n(h)\Psi_n\|^2<\infty\},\qquad D(a^\dagger(h))=\{\Psi\in\mathcal F_s(H):\sum_{n\ge0}\|a_n^\dagger(h)\Psi_n\|^2<\infty\}.$$

Then $\mathcal F_s(H)$ and $\mathcal F_a(H)$ are Hilbert spaces,
$\mathcal D_{\rm fin}$ is dense, and it is a graph core for both maximal
bosonic sector maps. The bosonic operators on their displayed domains are
closed and mutually adjoint, and on $\mathcal D_{\rm fin}$ satisfy

$$[a(h),a^\dagger(k)]=\langle h,k\rangle_2I,\qquad [a(h),a(k)]=[a^\dagger(h),a^\dagger(k)]=0.$$

The fermionic $c(h)$ and $c^\dagger(h)$ extend to bounded operators on the
whole Fock space, with norms $\|h\|$, and satisfy on the whole space

$$\{c(h),c^\dagger(k)\}=\langle h,k\rangle_2I,\qquad \{c(h),c(k)\}=\{c^\dagger(h),c^\dagger(k)\}=0.$$

This is a mathematical construction of the two Fock representations; it does
not assign particle statistics to a physical species.

## Facts & Assumptions

**Given:** Countable Choice; a separable complex Hilbert space $H$; the
symmetric and antisymmetric sectors, finite-particle domain, creation and
annihilation formulas from [[def-qft-fock-and-test-spaces]].

[A1] The Axiom of Countable Choice is the only choice principle assumed by the
Hilbert tensor suppliers used below. [[def-countable-choice]]

[F1] Completed Hilbert tensor products use the product inner product, and
elementary tensors have dense span.
[[lem-nrqm-composites-hilbert-tensor-construction]]

[F2] Permutations act unitarily on each tensor power; the averaging operators
$P_{s,n}$ and $P_{a,n}$ are orthogonal projections onto the symmetric and
antisymmetric sectors.
[[lem-nrqm-composites-permutation-sector-projections]]

[F3] The sector creation, annihilation, and contraction maps are given by the
formulas in [[def-qft-fock-and-test-spaces]]: creation inserts $h$ and applies
the symmetric or antisymmetric projection with the factor $\sqrt{n+1}$;
annihilation contracts the first factor with $C_h$ and the factor $\sqrt n$.

[F4] A bounded map $S$ induces $S\otimes I$ on a completed tensor product
with norm at most $\|S\|$; orthogonal complements use the Hilbert orthogonality
convention. [[lem-nrqm-composites-bounded-tensor-maps]]
[[def-orthogonality-and-orthogonal-complement]]

[F5] The graph norm, closedness, core and adjoint-domain terms have the
definitions in [[def-unbounded-linear-operator-domain-and-graph]],
[[def-densely-defined-closed-and-closable-operator]],
[[def-adjoint-of-a-densely-defined-unbounded-operator]], and
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]].

## Proof

1.1 Each sector $H_s^{(n)}$ or $H_a^{(n)}$ is a closed subspace of its Hilbert tensor power, being the range of the corresponding orthogonal projection [F2]. The square-summable direct sum of these sectors is complete: for a Cauchy sequence, each coordinate converges in its complete sector; finite partial sums of squared coordinate norms are bounded by the common sequence bound, so the coordinate limits are square-summable; taking coordinate limits in the Cauchy estimate over each finite set of coordinates and then the supremum proves convergence in the direct-sum norm. Truncating a square-summable sequence after sector $N$ converges in norm, so $\mathcal D_{\rm fin}$ is dense. [A1, F1, F2, construct, algebra]

1.2 On sector $n$, creation and contraction have norms at most $\sqrt{n+1}\|h\|$ and $\sqrt n\|h\|$, respectively: the contraction has norm at most $\|h\|$ on its first factor by Cauchy–Schwarz and extends to the tensor product with the same bound [F4]; each symmetrizer or antisymmetrizer has norm at most one [F2]. For $\Phi\in H_s^{(n)}$ and $\Psi\in H_s^{(n+1)}$, use $P_{s,n+1}\Psi=\Psi$ and self-adjointness of $P_{s,n+1}$ to compute $\langle a_n^\dagger(h)\Phi,\Psi\rangle_2 =\sqrt{n+1}\langle h\otimes\Phi,\Psi\rangle_2 =\sqrt{n+1}\langle\Phi,(C_h\otimes I^{\otimes n})\Psi\rangle_2 =\langle\Phi,a_{n+1}(h)\Psi\rangle_2$; the tensor product pairing gives the middle equality because $C_h(v)=\langle h,v\rangle_2$. The same calculation with $P_{a,n+1}$ proves the fermionic relation. [F1, F2, F3, F4, algebra]

2.1 The maximal bosonic direct-sum maps are closed. For example, if $\Phi^{(j)}\to\Phi$ and $a(h)\Phi^{(j)}\to\Theta$ in Fock norm, boundedness of each sector map gives coordinatewise $\Theta_{n-1}=a_n(h)\Phi_n$; since $\Theta$ is square-summable, the defining sum for $D(a(h))$ is finite and $a(h)\Phi=\Theta$. The same coordinate argument applies to $a^\dagger(h)$. Truncating a vector and its image after sector $N$ shows $\mathcal D_{\rm fin}$ is a graph core for each. For the adjoint, testing against vectors supported in sector $n+1$ forces the adjoint output coordinate in sector $n+1$ to be $a_n^\dagger(h)\Phi_n$; square-summability of these coordinates is exactly the displayed domain of $a^\dagger(h)$. Conversely, if that sum is finite, the sector pairing of step 1.2 and Cauchy–Schwarz in the direct sum give the adjoint identity for every vector in $D(a(h))$. Thus $a(h)^*=a^\dagger(h)$ with the displayed maximal domains. [step 1.1, step 1.2, F1, F3, F5, algebra]

2.2 For a symmetric elementary tensor $v_1\vee\cdots\vee v_n:=P_{s,n}(v_1\otimes\cdots\otimes v_n)$, contraction and creation give $a(h)(v_1\vee\cdots\vee v_n)=n^{-1/2}\sum_{j=1}^n\langle h,v_j\rangle_2 \,v_1\vee\cdots\widehat{v_j}\cdots\vee v_n$ and $a^\dagger(k)(v_1\vee\cdots\vee v_n)=\sqrt{n+1}\, P_{s,n+1}(k\otimes v_1\otimes\cdots\otimes v_n)$, by expanding the permutation averages [F2]. In the composition $a(h)a^\dagger(k)$, the contraction term for the newly inserted $k$ is $\langle h,k\rangle_2(v_1\vee\cdots\vee v_n)$; each of the other $n$ contraction terms is exactly the corresponding term of $a^\dagger(k)a(h)$. Hence their difference is $\langle h,k\rangle_2I$. Symmetry of $P_{s,n}$ makes two creations commute; two contractions commute because contracting distinct tensor slots in either order gives the same sum. Finite elementary symmetric tensors are dense in each sector and the sector maps are bounded there, so the identities hold on all of $\mathcal D_{\rm fin}$. [F1, F2, step 1.2, algebra]

3.1 For a unit vector $h$, put $K=h^\perp$. In the $n$th antisymmetric sector, every $v\in H$ decomposes as $v=\langle h,v\rangle_2h+(v-\langle h,v\rangle_2h)$ with the second term in $K$, so $H=\mathbb Ch\oplus K$. Tensors split orthogonally into those with no $h$ factor and those with exactly one: expand each tensor factor in $\mathbb Ch\oplus K$; terms with two $h$ factors vanish under antisymmetrization, and different placements of the single $h$ are orthogonal. The map $\sqrt{n+1}P_{a,n+1}(h\otimes\cdot)$ is an isometry from the no-$h$ part of sector $n$ onto the one-$h$ part of sector $n+1$, since the $n+1$ placements are orthogonal and each has coefficient $1/(n+1)$ in the antisymmetrizer. It vanishes on the one-$h$ part. Its adjoint $c(h)$ reverses this isometry and vanishes on the no-$h$ part. Thus $c(h)c^\dagger(h)+c^\dagger(h)c(h)=I$ and both maps have norm one. Scaling gives $\{c(h),c^\dagger(h)\}=\|h\|^2I$ and norms $\|h\|$ for $h\ne0$; for $h=0$ these statements hold because both operators vanish. Antisymmetry gives $c^\dagger(h)^2=0$; taking adjoints gives $c(h)^2=0$. Polarizing the diagonal anticommutator at $h+k$ and $h+ik$, using that $c(\cdot)$ is conjugate-linear and $c^\dagger(\cdot)$ is linear, yields $\{c(h),c^\dagger(k)\}=\langle h,k\rangle_2I$: if $q(u)=\{c(u),c^\dagger(u)\}$, then the sesquilinear polarization identity is $B(h,k)=\tfrac14(q(h+k)-q(h-k)-i q(h+ik)+i q(h-ik))$, where $B(h,k)=\{c(h),c^\dagger(k)\}$; substituting $q(u)=\|u\|^2I$ gives the claimed scalar. Polarizing $c(u)^2=0$ and $c^\dagger(u)^2=0$ gives the two same-type anticommutators. All fermionic maps are bounded, so these identities hold on the whole Fock space. [F1, F2, F4, step 1.2, algebra] ∎
