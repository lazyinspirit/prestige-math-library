---
id: thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound
aliases: [nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]
kind: theorem
domain: mathematics
title: "Cutoff dipole relative bound"
status: draft
origin: pipeline
dependency_level: 7
deps: [thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains, thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian, thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, lem-nrqm-composites-euclidean-l2-product-unitary, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, cor-cauchy-schwarz-inequality-for-l-two, thm-cauchy-schwarz-in-an-inner-product-space, thm-kato-rellich, def-relative-boundedness-with-respect-to-an-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21), Chapter 9 Sections 9.5-9.7 pp. 139-143 (decay by emission, electromagnetic decays, dipole approximation)"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Sections 1.2-1.4 pp. 5-11 (creation and annihilation operators and their bounds)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\alpha>0$, let
$\mathfrak h$ be the transverse space and $H_f=\bigoplus_nT_n$ the free
transverse Fock Hamiltonian of
[[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]],
and let $A_\pm(g)$, $g\in\mathfrak h$, be the maximal creation and annihilation
operators on $F(\mathfrak h)$ of
[[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]]. Fix a cutoff
$\Lambda>0$ and vectors $g_1,\dots,g_J\in\mathfrak h$ ($J\ge1$) with
$$\operatorname{supp}g_j\subseteq\{k:\ 0<\varepsilon(k)\le\Lambda\}\quad\text{and}\quad \frac{g_j}{\sqrt\varepsilon}\in\mathfrak h,\qquad \varepsilon(k)=\alpha|k|,$$
and define the symmetric operator
$$\phi(g):=A_-(g)+A_+(g),\qquad D(\phi(g)):=D(H_f).$$
Let $d\ge1$, let $H_a$ be a Hermitian $d\times d$ matrix, and let
$D_1,\dots,D_J$ be Hermitian $d\times d$ matrices with operator norms
$\|D_j\|$ ([[def-operator-norm]]). Then:

(a) for every $\Psi\in D(H_f)$,
$$\|A_-(g)\Psi\|^2\le\Bigl\|\frac g{\sqrt\varepsilon}\Bigr\|^2\langle H_f\Psi,\Psi\rangle,\qquad \|A_+(g)\Psi\|^2=\|A_-(g)\Psi\|^2+\|g\|^2\|\Psi\|^2;$$
in particular $\Psi\in D(A_+(g))\cap D(A_-(g))$ and for every $\eta>0$ there is
a finite $C_\eta$ with
$$\|\phi(g)\Psi\|\le\eta\|H_f\Psi\|+C_\eta\|\Psi\| ;$$

(b) $\phi(g)$ is symmetric on $D(H_f)$ and has $H_f$-bound zero
([[def-relative-boundedness-with-respect-to-an-operator]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]);

(c) the free part $H_0:=H_a\otimes I+I\otimes H_f$ with domain
$C^d\otimes D(H_f)$ is self-adjoint on $\mathbb C^d\otimes F(\mathfrak h)$
([[def-hilbert-space]]); for every $\eta_0\in\mathbb R$ the operator
$$H:=H_0+\eta_0\sum_{j=1}^JD_j\otimes\phi(g_j),\qquad D(H):=C^d\otimes D(H_f),$$
is self-adjoint on $\mathbb C^d\otimes F(\mathfrak h)$ and bounded below
([[thm-kato-rellich]],
[[def-adjoint-of-a-densely-defined-unbounded-operator]]).

The product $D_j\otimes\phi(g_j)$ and the coupling $\eta_0$ carry the dimension
of energy in a physical normalisation; this normalisation is a model choice and
no physical statement about radiation or spontaneous emission is made here.

## Facts & Assumptions
**Given:** the cutoff $\Lambda>0$ and vectors $g_j$ with $\operatorname{supp}g_j\subseteq\{0<\varepsilon\le\Lambda\}$, the maps $A_\pm(g_j)$ and $\phi(g_j)$ on $F(\mathfrak h)$, the free Hamiltonian $H_f$ with sector multipliers $T_n$ and number projections $\Pi_n$, Hermitian matrices $H_a,D_j$ on $\mathbb C^d$, and $\Psi,\Phi\in D(H_f)$.

[F1] $A_\pm(g)$ are closed operators with $A_+(g)=A_-(g)^*$ and $A_-(g)=A_+(g)^*$; on the core $F_0$ the sector formulas $(A_+(g)\psi)_n=\sqrt nP_+^{(n)}(g\otimes\psi_{n-1})$ and $(A_-(g)\psi)_n=\sqrt{n+1}\Psi_g^{(n)}(\psi_{n+1})$ hold, where $\Psi_g^{(n)}$ is the contraction in the first tensor factor with coefficient $\langle\cdot,g\rangle$ ([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]], [[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]]).

[F2] $H_f=\bigoplus_nT_n$ is self-adjoint and positive with $T_n=\varepsilon_n|_{P_+^{(n)}}$, $\varepsilon_n(k_1,\dots,k_n)=\sum_{i\le n}\varepsilon(k_i)$, and $\langle H_f\Psi,\Psi\rangle=\sum_n\langle\varepsilon_n\Psi_n,\Psi_n\rangle<\infty$ for $\Psi\in D(H_f)$ ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]]).

[F3] Under the iterated Euclidean product unitary, $\mathfrak h^{\otimes m}$ is identified with a closed subspace of $L^2((\mathbb R^3)^m;(\mathbb C^3)^{\otimes m})$; elements of $\operatorname{ran}P_+^{(m)}$ correspond to tensor-valued functions $F$ invariant under simultaneous momentum and polarization-factor permutations, so $\|F\|$ is invariant under momentum permutations, and the energy multiplier is $\varepsilon_m(k_1,\ldots,k_m)=\sum_{i=1}^m\varepsilon(k_i)$. For $F$ in its operator domain, $\langle\varepsilon_mF,F\rangle=\sum_{i=1}^m\int\varepsilon(k_i)\|F(k_1,\ldots,k_m)\|^2$, and symmetry makes each integral equal to $m^{-1}\langle\varepsilon_mF,F\rangle$ ([[lem-nrqm-composites-euclidean-l2-product-unitary]], [[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-permutation-sector-projections]]).

[F4] Cauchy-Schwarz for the weighted $L^2$ integrals in step 1.1 follows from [[cor-cauchy-schwarz-inequality-for-l-two]]; Cauchy-Schwarz in the Fock Hilbert space, used for $\langle H_f\Psi,\Psi\rangle$, follows from [[thm-cauchy-schwarz-in-an-inner-product-space]].

[F5] For $\Psi\in F_0$ the identity $\|A_+(g)\Psi\|^2=\|A_-(g)\Psi\|^2+\|g\|^2\|\Psi\|^2$ holds ([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]] (d)).

[F6] Kato-Rellich: if $A$ is self-adjoint and $B$ is symmetric with $D(A)\subseteq D(B)$ and $A$-bound less than $1$, then $A+B$ on $D(A)$ is self-adjoint and bounded below when $A$ is ([[thm-kato-rellich]], [[def-relative-boundedness-with-respect-to-an-operator]]).


[F7] Tonelli applies to the nonnegative squared norms on the sigma-finite Lebesgue product spaces; Fubini applies to absolutely integrable scalar component pairings ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).



## Proof

1.1 [Contraction estimate] Let $\Psi\in D(H_f)$ and $n\ge0$; represent $\Psi_{n+1}\in\operatorname{ran}P_+^{(n+1)}$ by its symmetric function $F$ under [F3]. For $v\in\mathbb C^3$ define the first-factor contraction $C_v:(\mathbb C^3)^{\otimes(n+1)}\to(\mathbb C^3)^{\otimes n}$ by $C_v(a\otimes b)=\langle a,v\rangle b$, extended linearly; finite orthonormal coordinates give $\|C_v\|\le\|v\|$. The contraction is represented by the tensor-valued function $G(k')=\int C_{g(k_1)}F(k_1,k')\,dk_1$: unweighted Cauchy–Schwarz gives integrable slices almost everywhere, Fubini identifies the pairing first for elementary tensors and then by density, and the bounded contraction formula [F1] extends the identity. Weighted Cauchy–Schwarz, tested against unit vectors of the finite-dimensional target tensor space, gives $\|G(k')\|^2\le\bigl(\int\|g(k_1)\|^2/\varepsilon(k_1)\,dk_1\bigr)\bigl(\int\varepsilon(k_1)\|F(k_1,k')\|^2\,dk_1\bigr)$; the null point $k_1=0$ is omitted. Integrating over $k'$ and using the symmetry computation of [F3] gives $\|\Psi_g^{(n)}\Psi_{n+1}\|^2\le\|g/\sqrt\varepsilon\|^2\cdot\frac1{n+1}\langle\varepsilon_{n+1}F,F\rangle=\frac1{n+1}\|g/\sqrt\varepsilon\|^2\langle\varepsilon_{n+1}\Psi_{n+1},\Psi_{n+1}\rangle$. Hence $\|(A_-(g)\Psi)_n\|^2=(n+1)\|\Psi_g^{(n)}\Psi_{n+1}\|^2\le\|g/\sqrt\varepsilon\|^2\langle\varepsilon_{n+1}\Psi_{n+1},\Psi_{n+1}\rangle$; summing over $n$ and using [F2] gives $\|A_-(g)\Psi\|^2\le\|g/\sqrt\varepsilon\|^2\langle H_f\Psi,\Psi\rangle$. [F1, F2, F3, F4, F7, algebra]

1.2 [The free part] Fix the standard orthonormal basis $(u_a)_{a=1}^d$ of $\mathbb C^d$. The map $(\Psi_a)_{a=1}^d\mapsto\sum_au_a\otimes\Psi_a$ is an isometry from the finite Hilbert sum $F(\mathfrak h)^d$ onto $\mathbb C^d\otimes F(\mathfrak h)$, since elementary tensors span a dense subspace and the finite sum is complete. Under this identification $T:=I\otimes H_f$ has dense domain $D(H_f)^d$ and acts componentwise. It is symmetric by [F2]. If $\Phi\in D(T^*)$ with $T^*\Phi=Z$, testing the adjoint identity on a vector with only component $a$ nonzero gives $\Phi_a\in D(H_f^*)=D(H_f)$ and $Z_a=H_f\Phi_a$ for each $a$. Conversely symmetry gives $T\subseteq T^*$, so $T=T^*$ and $T\ge0$. The matrix amplification $R:=H_a\otimes I$ is bounded and self-adjoint: its entries act by scalar multiples of the identity, its adjoint entries are the conjugate transposed entries, and finite-dimensional Cauchy–Schwarz bounds its norm. It has $T$-bound zero; hence [F6] makes $H_0=T+R$ self-adjoint on $D(H_f)^d=C^d\otimes D(H_f)$ and bounded below by $-\|R\|$, also directly from $T\ge0$ and $|\langle R\Psi,\Psi\rangle|\le\|R\|\|\Psi\|^2$. This componentwise adjoint argument establishes the general amplification here without applying the fixed-$N$ kinetic-operator interface. [F2, F3, F4, F6, algebra]

2.1 [The norm identity on $D(H_f)$] Let $\Psi\in D(H_f)$ and let $\Psi^{(N)}$ be its truncations to sectors $\le N$. Step 1.1 gives $A_-(g)\Psi^{(N)}\to A_-(g)\Psi$ and $\Psi^{(N)}\to\Psi$. For $N>M$, $\chi:=\Psi^{(N)}-\Psi^{(M)}$ is in $F_0$, so [F5] gives $\|A_+(g)\chi\|^2=\|A_-(g)\chi\|^2+\|g\|^2\|\chi\|^2\to0$ as $M,N\to\infty$. Thus $A_+(g)\Psi^{(N)}$ is Cauchy; closedness of $A_+(g)$ from [F1] implies $\Psi\in D(A_+(g))$ and $A_+(g)\Psi^{(N)}\to A_+(g)\Psi$. Passing to the limit in [F5] for $\Psi^{(N)}$ now proves $\|A_+(g)\Psi\|^2=\|A_-(g)\Psi\|^2+\|g\|^2\|\Psi\|^2$. [F1, F5, step 1.1, algebra]

3.1 [The relative bound] From steps 1.1 and 2.1, $\|\phi(g)\Psi\|\le\|A_-(g)\Psi\|+\|A_+(g)\Psi\|\le2\|g/\sqrt\varepsilon\|\sqrt{\langle H_f\Psi,\Psi\rangle}+\|g\|\|\Psi\|$ for $\Psi\in D(H_f)$; since $\langle H_f\Psi,\Psi\rangle\le\|H_f\Psi\|\,\|\Psi\|$ by [F4], the inequality $2\sqrt{ab}\le\eta a+\eta^{-1}b$ with $a=\|H_f\Psi\|$, $b=\|g/\sqrt\varepsilon\|^2\|\Psi\|$ gives, for every $\eta>0$, $\|\phi(g)\Psi\|\le\eta\|H_f\Psi\|+C_\eta\|\Psi\|$ with $C_\eta=\eta^{-1}\|g/\sqrt\varepsilon\|^2+\|g\|$. This proves (a) and shows the $H_f$-bound zero. [F4, step 1.1, step 2.1, algebra]

4.1 [Symmetry of $\phi(g)$] For $\Psi,\Phi\in D(H_f)$, steps 1.1 and 2.1 put both vectors in the domains of the two closed operators, and the mutual adjointness $A_+(g)=A_-(g)^*$ of [F1] gives $\langle\phi(g)\Psi,\Phi\rangle=\langle A_-(g)\Psi,\Phi\rangle+\langle A_+(g)\Psi,\Phi\rangle=\langle\Psi,A_+(g)\Phi\rangle+\langle\Psi,A_-(g)\Phi\rangle=\langle\Psi,\phi(g)\Phi\rangle$. By step 3.1, $\phi(g)$ is symmetric on the dense domain $D(H_f)$ with $H_f$-bound zero, which is (b). [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 [Kato-Rellich] Let $B:=\eta_0\sum_jD_j\otimes\phi(g_j)$ with domain $C^d\otimes D(H_f)$. Since the $D_j$ are bounded and each $\phi(g_j)$ is symmetric with $H_f$-bound zero (step 4.1, step 3.1), $B$ is symmetric and for every $\eta>0$ there are finite constants with $\|B\Psi\|\le\eta\|H_f\Psi\|+C_\eta\|\Psi\|$; as $H_0$ differs from $I\otimes H_f$ by the bounded operator $H_a\otimes I$, the same estimate holds with $H_f$ replaced by $H_0$ up to constants, so the $H_0$-bound of $B$ is zero and in particular less than $1$. As $H_0$ is self-adjoint (step 1.2), [F6] gives that $H=H_0+B$ is self-adjoint on $C^d\otimes D(H_f)$ and bounded below. This proves (c). [F6, step 3.1, step 4.1, step 1.2, algebra]

6.1 [Conclusion and scope] Steps 1.1 and 2.1 prove (a), step 4.1 proves (b), and steps 1.2 and 5.1 prove (c). The final paragraph of the statement records that the normalisation of the coupling and of the dipole matrices is a model choice, and no physical radiation or emission statement is asserted. This completes the proof. [step 1.1, step 2.1, step 3.1, step 4.1, step 1.2, step 5.1, algebra] ∎
