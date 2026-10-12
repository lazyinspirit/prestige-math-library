---
id: lem-nrqm-photons-fixed-mode-number-isometry
kind: lemma
title: "The fixed-mode isometry of Fock space and the transfer of number and ladder operators"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 8
deps: [thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-fock-sector-projections, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains, thm-nrqm-fock-and-equilibrium-number-operator-domain, thm-nrqm-fock-and-equilibrium-fixed-mode-number-law, thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-hilbert-orthogonal-projection, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-real-and-complex-inner-product-space, cor-cauchy-schwarz-inequality-for-l-two, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Chapter 1 Sections 1.1-1.2 printed pages 3-6 (PDF pages 4-7): Fock space, occupation-number states and the oscillator algebra of a single mode"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21), Chapter 9 Section 9.2 printed pages 135-138: creation and destruction operators in coordinate space and their mode expansions"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $H$ be a complex
Hilbert space ([[def-hilbert-space]],
[[def-real-and-complex-inner-product-space]]) with completed tensor powers
$H^{\otimes n}$, symmetric projections $P_+^{(n)}$, Fock space $F(H)$, sector
projections $\Pi_n$, number operator $N$ and maximal creation and annihilation
operators $A_\pm(f)$ as in
[[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]],
[[lem-nrqm-fock-and-equilibrium-fock-sector-projections]],
[[thm-nrqm-fock-and-equilibrium-number-operator-domain]] and
[[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]]. Fix a unit
vector $\varphi\in H$. Write $\varphi^{\otimes0}:=1\in\mathbb C$ and
$\varphi^{\otimes n}:=\varphi\otimes\cdots\otimes\varphi\in H^{\otimes n}$ for
$n\ge1$, and define
$$U_\varphi:F(\mathbb C)\to F(H),\qquad U_\varphi e_n:=(0,\dots,0,\varphi^{\otimes n},0,\dots)$$
with the entry in coordinate $n$, extended linearly. Then:

(a) each $\varphi^{\otimes n}$ is a unit vector of
$\operatorname{ran}P_+^{(n)}$; the family $(\varphi^{\otimes n})_{n\in\mathbb N}$
is orthonormal in $F(H)$, and $U_\varphi$ is a linear isometry of
$F(\mathbb C)$ onto the closed subspace
$\overline{\operatorname{span}}\{\varphi^{\otimes n}:n\in\mathbb N\}$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]],
[[thm-parseval-equivalences-for-a-complete-orthonormal-family]],
[[def-bounded-linear-operator]]);

(b) for every $\psi=(\psi_n)_{n\in\mathbb N}\in F(\mathbb C)$ and every $n$,
$$\Pi_nU_\varphi\psi=U_\varphi\Pi_n'\psi,\qquad \|U_\varphi\psi\|^{2}=\sum_{n\in\mathbb N}|\psi_n|^{2}=\|\psi\|^{2},$$
where $\Pi_n'$ is the Fock sector projection of $F(\mathbb C)$; and for every
$\psi\in D(N')$ one has $U_\varphi\psi\in D(N)$ with
$$NU_\varphi\psi=U_\varphi N'\psi ;$$

(c) for every $\psi\in D(A_\pm(1))$ one has $U_\varphi\psi\in D(A_\pm(\varphi))$
and
$$A_\pm(\varphi)U_\varphi\psi=U_\varphi A_\pm(1)\psi ;$$
in particular for every $z\in\mathbb C$ the coherent vector
$\psi_z=e^{-|z|^{2}/2}\sum_n\frac{z^{n}}{\sqrt{n!}}e_n$ of
[[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]] satisfies
$U_\varphi\psi_z\in D(A_-(\varphi))$ and $A_-(\varphi)U_\varphi\psi_z=z\,U_\varphi\psi_z$;

(d) for the transverse case $H=\mathfrak h$ of
[[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]]
with $\varepsilon(k)=\hbar c|k|$, $H_f=\bigoplus_nT_n$, and a unit
$\varphi\in\mathfrak h\cap D(\varepsilon_{\mathfrak h})$ (so that
$\varepsilon\varphi\in\mathfrak h$), one has
$$\langle H_fU_\varphi e_n,U_\varphi e_n\rangle=n\,\langle\varepsilon\varphi,\varphi\rangle\qquad(n\in\mathbb N),$$
and for every $\psi\in F(\mathbb C)$ with $\sum_nn^{2}|\psi_n|^{2}<\infty$
$$\langle H_fU_\varphi\psi,U_\varphi\psi\rangle=\Bigl(\sum_{n\in\mathbb N}n|\psi_n|^{2}\Bigr)\langle\varepsilon\varphi,\varphi\rangle=\langle N'\psi,\psi\rangle\,\langle\varepsilon\varphi,\varphi\rangle ;$$
Already under $\varphi\in D(\varepsilon_{\mathfrak h})$, writing $\bar\varepsilon=\langle\varepsilon\varphi,\varphi\rangle$, the finite spectral second moment is
$$\|T_n\varphi^{\otimes n}\|^2=n\|\varepsilon\varphi\|^2+n(n-1)\bar\varepsilon^2.$$
If moreover $\varphi\in D(\varepsilon_{\mathfrak h}^{2})$, the vector lies in $D(T_n^2)$ and this norm square equals the literal operator pairing below; then
$$\langle T_n\varphi^{\otimes n},\varphi^{\otimes n}\rangle=n\,\langle\varepsilon\varphi,\varphi\rangle,\qquad \langle T_n^{2}\varphi^{\otimes n},\varphi^{\otimes n}\rangle=n\,\langle\varepsilon^{2}\varphi,\varphi\rangle+n(n-1)\,\langle\varepsilon\varphi,\varphi\rangle^{2}.$$

No physical interpretation of the isometry, of the vectors
$U_\varphi e_n$, or of the transferred operators is asserted.

## Facts & Assumptions

**Given:** the complex Hilbert space $H$, its Fock space $F(H)$ with sectors $\operatorname{ran}P_+^{(n)}$, projections $\Pi_n$, number operator $N$ and maximal operators $A_\pm(f)$, the unit vector $\varphi\in H$, the map $U_\varphi$, a vector $\psi=(\psi_n)\in F(\mathbb C)$, and in part (d) the transverse space $\mathfrak h$, the energy multiplier $\varepsilon$ and the operator $H_f=\bigoplus_nT_n$.

[F1] **Sectors and coordinate embeddings.** For $n\ge1$ the vector $\iota_n(u):=(0,\dots,0,u,0,\dots)$ with $u\in\operatorname{ran}P_+^{(n)}$ lies in $F(H)$, $\|\iota_n(u)\|=\|u\|$, and the ranges of distinct $\iota_n$ are orthogonal; the same formula with $n=0$ and $\operatorname{ran}P_+^{(0)}=\mathbb C$ gives the vacuum embedding, so the embedding is defined for every $n\in\mathbb N$; for $x,y\in F(H)$ one has $\langle x,y\rangle=\sum_n\langle x_n,y_n\rangle$ and $\|x\|^{2}=\sum_n\|x_n\|^{2}$ ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] clauses (a),(c),(d), [[lem-nrqm-fock-and-equilibrium-fock-sector-projections]] clauses (a),(b)).

[F2] **Symmetric tensors.** $P_+^{(n)}$ is the orthogonal projection onto $\operatorname{ran}P_+^{(n)}$; for $u\in H$ the elementary tensor $u^{\otimes n}=u\otimes\cdots\otimes u$ satisfies $P_+^{(n)}u^{\otimes n}=u^{\otimes n}$, $\|u^{\otimes n}\|=\|u\|^{n}$, and $\langle u^{\otimes n},v^{\otimes n}\rangle=\langle u,v\rangle^{n}$ ([[lem-nrqm-composites-permutation-sector-projections]] clause (c), [[lem-nrqm-composites-hilbert-tensor-construction]] clause (b)).

[F3] **Number operator.** $N$ is self-adjoint with $D(N)=\{\psi:\sum_nn^{2}\|\psi_n\|^{2}<\infty\}$ and $N\Pi_n=n\Pi_n$ on the sector, i.e. $(Nx)_n=nx_n$; the Fock space is the orthogonal direct sum of the sector ranges ([[thm-nrqm-fock-and-equilibrium-number-operator-domain]] clauses (a),(b), [[lem-nrqm-fock-and-equilibrium-fock-sector-projections]] clause (c)).

[F4] **Maximal creation and annihilation operators.** $A_+(f)$ and $A_-(f)$ are closed linear operators in the state vector; creation is linear and annihilation conjugate-linear in the mode parameter, with domains $D(A_+(f))=\{\psi:\sum_n(n+1)\|P_+^{(n+1)}(f\otimes\psi_n)\|^{2}<\infty\}$ and $D(A_-(f))=\{\psi:\sum_n(n+1)\|\Psi_f^{(n)}(\psi_{n+1})\|^{2}<\infty\}$, and on them $(A_+(f)\psi)_n=\sqrt nP_+^{(n)}(f\otimes\psi_{n-1})$, $(A_-(f)\psi)_n=\sqrt{n+1}\Psi_f^{(n)}(\psi_{n+1})$; the contraction maps satisfy $\Psi_f^{(n)}(u_1\otimes\cdots\otimes u_{n+1})=\langle u_1,f\rangle u_2\otimes\cdots\otimes u_{n+1}$ ([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]], [[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]] clauses (a),(b)).

[F5] **Fixed-mode oscillator coefficients.** For $F(\mathbb C)$ with orthonormal basis $(e_n)$ and the operators $A_\pm(1)$ one has $A_+(1)e_n=\sqrt{n+1}e_{n+1}$, $A_-(1)e_n=\sqrt n\,e_{n-1}$ for $n\ge1$ and $A_-(1)e_0=0$; for every $z\in\mathbb C$ the vector $\psi_z=e^{-|z|^{2}/2}\sum_n\frac{z^{n}}{\sqrt{n!}}e_n$ is unit and satisfies $A_-(1)\psi_z=z\psi_z$ ([[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]] clauses (a),(b)).

[F6] **Transverse Fock data.** For the transverse space $\mathfrak h$ and $\varepsilon=\hbar c|k|$, the operators $T_n$ on $\operatorname{ran}P_+^{(n)}$ are self-adjoint with $T_n\psi=\varepsilon_n\psi$, $\varepsilon_n(k_1,\dots,k_n)=\sum_{i=1}^{n}\varepsilon(k_i)$, and $H_f=\bigoplus_nT_n$ is self-adjoint with domain $\{\psi:\sum_n\|T_n\psi_n\|^{2}<\infty\}$; under the Euclidean identification of $\mathfrak h^{\otimes n}$ with a subspace of $L^{2}((\mathbb R^{3})^{n};(\mathbb C^{3})^{\otimes n})$, the multiplier $\varepsilon_n$ is symmetric and commutes with all permutation unitaries, so $\varepsilon_n$ preserves $\operatorname{ran}P_+^{(n)}$ ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]] clauses (a),(b),(c), [[lem-nrqm-composites-permutation-sector-projections]] clause (c), [[lem-nrqm-composites-hilbert-tensor-construction]] clause (b)).

## Proof

**Proof technique:** direct; identify $F(\mathbb C)$ inside $F(H)$ along the coefficient expansion in the single mode $\varphi$, check the isometry and the sectorially diagonal operators coefficientwise, and evaluate the energy expectation on the mode sector by symmetry of the tensor integrals.

**Given:** The data of the statement and [F1]-[F6].

1.1 [The powers of $\varphi$ are orthonormal sector vectors] For $n\ge0$ put $\Phi_n:=\varphi^{\otimes n}$, with $\Phi_0:=1$. By [F2] with $u=\varphi$ and $\|\varphi\|=1$ one has $\|\Phi_n\|=1$ for every $n$, $P_+^{(n)}\Phi_n=\Phi_n$, and $\langle\Phi_n,\Phi_n\rangle=\prod_{i=1}^{n}\langle\varphi,\varphi\rangle=1$; for $m\ne n$ the pairing $\langle\Phi_m,\Phi_n\rangle$ vanishes because $\Phi_m$ is supported in the direct-sum coordinate $m$ and $\Phi_n$ in coordinate $n$, and the inner product of $F(H)$ is the sum of the coordinate pairings by [F1]. Hence $(\Phi_n)_{n\in\mathbb N}$ is an orthonormal family with $\Phi_n\in\operatorname{ran}P_+^{(n)}$ for every $n$. [F1, F2, algebra]

2.1 [The isometry] Define $U_\varphi$ on the finite linear span of $(e_n)$ by $U_\varphi e_n=\Phi_n$ and extend by linearity; by step 1.1, $\|U_\varphi\psi\|^{2}=\sum_n|\psi_n|^{2}=\|\psi\|^{2}$ for every finite combination, so $U_\varphi$ is isometric on the dense finite-particle subspace $F_0(\mathbb C)$ of [[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] clause (c) and extends uniquely to an isometry $U_\varphi:F(\mathbb C)\to F(H)$ with the same norm identity for all $\psi\in F(\mathbb C)$ ([[def-bounded-linear-operator]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]). Its range is the closed linear span of $(\Phi_n)$, since an isometry maps the closed span of an orthonormal family onto the closed span of its image and the image family is orthonormal; this proves (a). [F1, F2, algebra]

2.2 [Ladder transfer on the exact domains] Write $\psi=\sum_n\psi_ne_n$. By [F4] and [F5], $\psi\in D(A_+(1))$ exactly when $\sum_n(n+1)|\psi_n|^2<\infty$, while $\psi\in D(A_-(1))$ exactly when $\sum_n(n+1)|\psi_{n+1}|^2=\sum_{m\ge1}m|\psi_m|^2<\infty$. For the unit mode $\varphi$, [F2] gives $P_+^{(n+1)}(\varphi\otimes\psi_n\Phi_n)=\psi_n\Phi_{n+1}$ and [F4] gives $\Psi_\varphi^{(n)}(\psi_{n+1}\Phi_{n+1})=\psi_{n+1}\Phi_n$. Therefore the two exact domain sums for $U_\varphi\psi$ equal the respective scalar sums, without any extra weighted output assumption. On these domains, $(A_+(\varphi)U_\varphi\psi)_n=\sqrt n\psi_{n-1}\Phi_n=(U_\varphi A_+(1)\psi)_n$ for $n\ge1$, with zero vacuum coordinate, and $(A_-(\varphi)U_\varphi\psi)_n=\sqrt{n+1}\psi_{n+1}\Phi_n=(U_\varphi A_-(1)\psi)_n$. This proves (c), including its coherent-vector specialization by [F5]. [F2, F4, F5, step 1.1, algebra]

2.3 [Energy expectation] Assume now $H=\mathfrak h$ and $\varphi$ unit with $\varepsilon\varphi\in\mathfrak h$; write $\bar\varepsilon:=\langle\varepsilon\varphi,\varphi\rangle$. For fixed $n$, $\Phi_n=\varphi^{\otimes n}\in\operatorname{ran}P_+^{(n)}$ and, by [F6], $T_n\Phi_n=\varepsilon_n\Phi_n$; using the Euclidean identification and the symmetry of $\varepsilon_n$ under the permutation action, the iterated $L^{2}$ integral gives $$\langle T_n\Phi_n,\Phi_n\rangle=\int_{(\mathbb R^{3})^{n}}\Bigl(\sum_{i=1}^{n}\varepsilon(k_i)\Bigr)\prod_{i=1}^{n}\|\varphi(k_i)\|_{\mathbb C^{3}}^{2}\,d^{3}k_1\cdots d^{3}k_n=n\,\bar\varepsilon\,\|\varphi\|^{2(n-1)}=n\,\bar\varepsilon,$$ each of the $n$ summands contributing the same product $\bar\varepsilon\|\varphi\|^{2(n-1)}$ by Tonelli's theorem, the product measure being $\sigma$-finite and the integrand nonnegative; this is finite because $\varepsilon\varphi\in L^{2}$ and $\varphi\in L^{2}$ give $\int\varepsilon\|\varphi\|^{2}\le\|\varepsilon\varphi\|\,\|\varphi\|<\infty$. The actual domain is also justified: by the triangle inequality on the product space, $\|T_n\Phi_n\|\le n\|\varepsilon\varphi\|$, since each factor multiplier has that norm and all other factors have norm one. Hence $\sum_n|\psi_n|^2\|T_n\Phi_n\|^2\le\|\varepsilon\varphi\|^2\sum_n n^2|\psi_n|^2<\infty$, so $U_\varphi\psi\in D(H_f)$ and its finite-sector truncations converge in the graph norm: the squared graph-tail norms are the tails of these two convergent nonnegative series. Therefore for a finite combination the sector-diagonal form of $H_f$ (clause (c) of [F6]) gives $\langle H_fU_\varphi\psi,U_\varphi\psi\rangle=\sum_n|\psi_n|^{2}\,n\bar\varepsilon$; the general case $\sum_nn^{2}|\psi_n|^{2}<\infty$ follows by approximation with truncations in the graph norm of $H_f$ (both sides are continuous under this approximation, the left because $H_f$ is closed and self-adjoint, the right by dominated convergence). This proves the first two displays of (d). [F3, F6, step 1.1, algebra]

3.1 [Sector and number transfer] For $\psi=\sum_m\psi_me_m$ in the dense span and fixed $n$, $\Pi_nU_\varphi\psi=\psi_n\Phi_n=U_\varphi(\psi_ne_n)=U_\varphi\Pi_n'\psi$; since both sides are bounded in $\psi$ and the span is dense, the identity extends to all $\psi\in F(\mathbb C)$, and the norm identity is step 2.1. For $\psi\in F(\mathbb C)$ the coefficient vector of $U_\varphi\psi$ is again $(\psi_n)$, so $\sum_nn^{2}\|(U_\varphi\psi)_n\|^{2}=\sum_nn^{2}|\psi_n|^{2}$: $U_\varphi\psi\in D(N)$ exactly when $\psi\in D(N')$, and then $(NU_\varphi\psi)_n=n\psi_n\Phi_n=(U_\varphi N'\psi)_n$ for every $n$ by [F3]. This proves (b). [F1, F3, step 2.1, algebra]

4.1 [Spectral second moment and literal square domain] For $\varphi\in D(\varepsilon)$, expand $\varepsilon_n^2=\sum_i\varepsilon(k_i)^2+\sum_{i\ne j}\varepsilon(k_i)\varepsilon(k_j)$ and integrate against $\prod_i\|\varphi(k_i)\|^2$. Tonelli gives $\|T_n\Phi_n\|^2=n\|\varepsilon\varphi\|^2+n(n-1)\bar\varepsilon^2$, finite by the stated domain and Cauchy-Schwarz. This is the spectral second moment and requires no $T_n^2\Phi_n$. If $\varphi\in D(\varepsilon^2)$, the inequality $(\sum_{i=1}^n\varepsilon(k_i))^4\le n^3\sum_i\varepsilon(k_i)^4$ gives $\|T_n^2\Phi_n\|^2\le n^4\|\varepsilon^2\varphi\|^2<\infty$, so $\Phi_n\in D(T_n^2)$; self-adjointness then gives $\langle T_n^2\Phi_n,\Phi_n\rangle=\|T_n\Phi_n\|^2$, exactly the original operator-square display. The vacuum has energy zero and all its moments vanish, handled separately when $n=0$. [F6, step 1.1, algebra] ∎

## Remarks

- **Scope.** The lemma is a coefficientwise statement about an orthonormal
  family in a Fock space; it does not assert that a fixed mode is an energy
  eigenstate. In fact the energy transfer is only an expectation statement:
  $H_f$ does not preserve the span of the $\varphi^{\otimes n}$ unless
  $\varepsilon\varphi$ is a multiple of $\varphi$, which for the transverse
  continuum fails for every nonzero $\varphi$ by
  [[lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers]]
  clause (c).
- **Choice hypotheses.** Only the Axioms of Countable Choice and of Choice
  inherited from the cited Fock space items are used; no further choice is
  introduced.
