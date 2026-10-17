---
id: thm-qsm-product-thermal-state-nonnormal
kind: theorem
title: Thermal product state has no normal vacuum extension
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-qsm-local-spin-algebras
  - def-qsm-vacuum-spin-representation
  - def-qsm-density-trace-state
  - lem-qsm-vacuum-representation-irreducible
  - thm-qsm-onsite-product-kms
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-vacuum-spin-representation: mathematical-premise
  def-qsm-density-trace-state: mathematical-premise
  lem-qsm-vacuum-representation-irreducible: mathematical-premise
  thm-qsm-onsite-product-kms: mathematical-premise
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.1, printed pp. 50–53 (finite-excitation spin-chain representation); §3.4, pp. 76–77 (finite Gibbs/KMS state)
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §§4–5, printed pp. 9–10 (irreducibility, commutants and normal states)
      url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement

Assume $\mathrm{AC}_\omega$, let $\Gamma=\mathbb Z^d$ with $d\ge1$, and let $q\ge2$ be a finite integer. Use energy unit J and time unit s. Let $h=h^*\in M_q(\mathbb C)$ be an on-site Hamiltonian with unit J, let $\beta>0$ have unit J$^{-1}$, fix any $\hbar>0$ with unit J s, and set
$$r:=\frac{e^{-\beta h}}{\operatorname{Tr}(e^{-\beta h})}.$$
Let $\omega_r$ be the unique onsite product $\beta$-KMS state from [[thm-qsm-onsite-product-kms]], retaining that supplier's exact finite-matrix C*-identity and positive-functional/density hypotheses [A2] and its stated conditional proof status. Its onsite dynamics restrict on each finite region $\Lambda$ to $\alpha_t(A)=e^{itH_\Lambda/\hbar}Ae^{-itH_\Lambda/\hbar}$, where $H_\Lambda=\sum_{x\in\Lambda}h_x$, $h_x$ is the copy of $h$ at site $x$, and $t$ is measured in seconds; its KMS strip has width $\beta\hbar$ seconds. Let $\pi$ be the finite-excitation vacuum representation on $\mathcal H_{\mathrm{vac}}$ from [[def-qsm-vacuum-spin-representation]]. Then $\omega_r$ has no normal extension to
$$\pi(\mathcal A)''=\mathcal B(\mathcal H_{\mathrm{vac}}).$$
By an extension we mean a state $\widetilde\omega$ on $\mathcal B(\mathcal H_{\mathrm{vac}})$ satisfying $\widetilde\omega(\pi(A))=\omega_r(A)$ for every $A\in\mathcal A$. In particular, no positive trace-class density operator $\rho$ on $\mathcal H_{\mathrm{vac}}$ satisfies $\omega_r(A)=\operatorname{Tr}(\rho\,\pi(A))$ for every $A\in\mathcal A$. Normality is representation-dependent; the statement does not rule out a normal extension in another representation.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $d\ge1$, finite integer $q\ge2$, $h=h^*\in M_q(\mathbb C)$ in J, $\beta>0$ in J$^{-1}$, $\hbar>0$ in J s, the supplier's finite-matrix hypotheses, and the finite-excitation representation.

[A1] Countable Choice $\mathrm{AC}_\omega$ is the exact completion assumption carried by [[def-countable-choice]] and the product-state supplier.

[F1] [[def-qsm-vacuum-spin-representation]]: $\mathcal H_{\mathrm{vac}}=\ell^2(S_{\mathrm{fin}})$ has basis $(e_s)$, the local algebra acts by its finite-factor matrices, and normality means preservation of suprema of bounded increasing positive nets.

[F2] [[lem-qsm-vacuum-representation-irreducible]]: $\pi$ is faithful and irreducible, so $\pi(\mathcal A)''=\mathcal B(\mathcal H_{\mathrm{vac}})$.

[F3] [[thm-qsm-onsite-product-kms]]: under $\mathrm{AC}_\omega$ and its finite-matrix hypotheses [A2], $\omega_r$ restricts on each finite region $\Lambda$ to the density $r^{\otimes\Lambda}$ and is the unique onsite $\beta$-KMS state for the specified $\hbar$ and physical-time dynamics. The retained finite-matrix interfaces assert $\|A^*A\|=\|A\|^2$ and that positive complex-linear matrix functionals are exactly trace pairings with positive matrices, with functional norm equal to the matrix trace; normalization is trace one. These are the same interfaces used by the local spin algebra supplier. The product density and the nonnormality argument are independent of the chosen positive $\hbar$. Since $h$ is finite-dimensional and Hermitian, $r$ is positive definite with trace one; for the unit reference vector $e_0$, write $p_0:=\langle r e_0,e_0\rangle$. All $q$ diagonal entries are positive and sum to one, so $0<p_0<1$ when $q\ge2$.

[F4] [[def-qsm-density-trace-state]]: a positive trace-class operator $\rho$ with $\operatorname{Tr}\rho=1$ has a finite or countable orthonormal spectral expansion $\rho=\sum_j\lambda_j|u_j\rangle\langle u_j|$ with $\lambda_j>0$, $\sum_j\lambda_j=1$, and its bounded-operator state is $A\mapsto\operatorname{Tr}(\rho A)=\sum_j\lambda_j\langle Au_j,u_j\rangle$.

## Proof

**Proof technique:** use a decreasing net of local cylinder projections for each finite-excitation vector, then the increasing net of finite-rank basis sums.

**Given:** [A1], [F1]–[F4], and the product state $\omega_r$.

1.1 For $s\in S_{\mathrm{fin}}$ and finite $F\subseteq\Gamma$, let $P_F^s\in\mathcal A_F$ be the projection onto the one-dimensional local basis vector with configuration $s|_F$. If $t\in S_{\mathrm{fin}}$, then $\pi(P_F^s)e_t=e_t$ exactly when $t|_F=s|_F$, and otherwise it is zero. Thus, as $F$ increases over finite subsets ordered by inclusion, $\pi(P_F^s)$ decreases strongly to the rank-one projection $E_s:=|e_s\rangle\langle e_s|$: each basis vector $e_t$ with $t\ne s$ eventually fails at a site where it differs from $s$, and $e_s$ remains fixed. Since all these projections have norm at most one and the finite span of the basis is dense, convergence on basis vectors extends to strong convergence on every vector. [A1, F1, F2, construct]

1.2 Let $k_s:=|\{x:s_x\ne0\}|$. Once $F$ contains this finite support, the product-state expectation is
$$\omega_r(P_F^s)=\prod_{x\in F}\langle s_x,r s_x\rangle=\left(\prod_{x:s_x\ne0}\langle s_x,r s_x\rangle\right)p_0^{\,|F|-k_s}.$$
Because $0<p_0<1$ and $\Gamma$ is infinite, this tends to zero along the directed set of finite regions: for every $N$ all sufficiently large $F$ have $|F|-k_s\ge N$. [F3, construct, algebra]

2.1 Suppose a normal state $\widetilde\omega$ on $\mathcal B(\mathcal H_{\mathrm{vac}})$ extended $\omega_r$. The complements $Q_F:=I-\pi(P_F^s)$ are increasing projections. The projection onto the closure of the union of their increasing ranges is their least upper bound: it dominates each $Q_F$, and any upper bound dominates that closed span. Strong convergence in step 1.1 identifies this supremum as $I-E_s$. Normality and step 1.2 give
$$\widetilde\omega(I-E_s)=\sup_F\widetilde\omega(I-\pi(P_F^s))=\sup_F\bigl(1-\omega_r(P_F^s)\bigr)=1,$$
so $\widetilde\omega(E_s)=0$ for every $s\in S_{\mathrm{fin}}$. For finite $J\subseteq S_{\mathrm{fin}}$, the projections $R_J:=\sum_{s\in J}E_s$ increase to $I$ as $J$ ranges over finite subsets, because $(e_s)$ is a complete orthonormal basis. Applying normality again gives
$$1=\widetilde\omega(I)=\sup_J\widetilde\omega(R_J)=0,$$
a contradiction. Therefore no normal extension exists. [F1, F2, step 1.1, step 1.2]

3.1 Suppose instead a positive trace-class density $\rho$ represented an extension. By [F4], for each $s$ and finite $F$,
$$\operatorname{Tr}(\rho\pi(P_F^s))=\sum_j\lambda_j\langle\pi(P_F^s)u_j,u_j\rangle.$$
For every fixed $N$, strong convergence in step 1.1 makes the first $N$ terms converge to $\sum_{j\le N}\lambda_j\langle E_su_j,u_j\rangle$. The tails of both the $\pi(P_F^s)$ sum and its proposed $E_s$ limit are bounded by $\sum_{j>N}\lambda_j$, because each operator is a projection. Hence their tail difference is at most $2\sum_{j>N}\lambda_j$, which tends to zero; therefore $\operatorname{Tr}(\rho\pi(P_F^s))\to\operatorname{Tr}(\rho E_s)$. Step 1.2 then gives $\operatorname{Tr}(\rho E_s)=0$ for each $s$. The same finite-tail argument applied to $R_J\uparrow I$ gives $\operatorname{Tr}(\rho I)=\sup_J\operatorname{Tr}(\rho R_J)=0$, contradicting $\operatorname{Tr}\rho=1$. Thus no such trace-class density exists. [F1, F2, F4, step 1.1, step 1.2] ∎

## Remarks

This is a representation-specific failure of normality for a full-rank product state. The argument does not say that every infinite-volume state is nonnormal, or that this state lacks a normal GNS representation.
