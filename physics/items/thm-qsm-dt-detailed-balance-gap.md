---
id: thm-qsm-dt-detailed-balance-gap
kind: theorem
title: Faithful scalar-kernel detailed balance gives a relaxation gap
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-qsm-dt-gns-detailed-balance
  - thm-qsm-dt-gksl-sufficient
  - thm-qsm-dt-channel-duality
  - thm-qsm-dt-trace-contraction
  - lem-qsm-matrix-state-calculus
  - lem-qsm-dt-finite-trace-pairing-cyclicity
dependency_roles:
  def-qsm-dt-gns-detailed-balance: mathematical-premise
  thm-qsm-dt-gksl-sufficient: mathematical-premise
  thm-qsm-dt-channel-duality: mathematical-premise
  thm-qsm-dt-trace-contraction: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-dt-finite-trace-pairing-cyclicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §1.3.4
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: Eric A. Carlen and Jan Maas, Gradient flow and entropy inequalities for quantum Markov semigroups with detailed balance, §§2 and 7
      url: https://arxiv.org/pdf/1609.01254
---

## Statement

Let $d\geq1$, and let $G=K+D$ and the faithful density matrix $\sigma$ satisfy [[def-qsm-dt-gns-detailed-balance]], with $\ker D=\mathbb C I$. Write $\mathcal M_0=\{A\in M_d(\mathbb C):\operatorname{Tr}(\sigma A)=0\}$. If $d>1$, the restriction $D|_{\mathcal M_0}$ has only strictly negative eigenvalues. Define

$$\gamma:=\min\{-\lambda:\lambda\in\operatorname{spec}(D|_{\mathcal M_0})\}>0.$$

Then for every $A\in\mathcal M_0$ and $t\geq0$,

$$\|e^{tG}A\|_\sigma\leq e^{-\gamma t}\|A\|_\sigma.$$

For every density matrix $\rho$, let $\rho_t=e^{t\mathcal L}\rho$, where $\mathcal L$ is the Schrödinger trace-dual generator. Then

$$\|\rho_t-\sigma\|_1\leq\|\sigma^{-1/2}(\rho-\sigma)\|_2e^{-\gamma t}.$$

Here $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$ and $\|X\|_2=(\operatorname{Tr}X^*X)^{1/2}$. For centered $A,B\in\mathcal M_0$, the correlation $t\mapsto\langle e^{tG}A,B\rangle_\sigma$ is absolutely integrable. Also

$$\Gamma(A):=\operatorname{Re}\int_0^\infty\langle e^{tG}A,A\rangle_\sigma\,dt=\operatorname{Re}\langle(-G|_{\mathcal M_0})^{-1}A,A\rangle_\sigma\geq0.$$

For $d=1$, $\mathcal M_0=\{0\}$, $\rho=\sigma$, and all centered and relaxation claims are trivial; no $\gamma$ is defined. The units of $\gamma$ are seconds$^{-1}$. These are finite-dimensional conditional model results; they assert no infinite-dimensional bath limit.

## Facts & Assumptions

**Given:** The finite observable generator $G=K+D$, faithful density $\sigma$, self-adjoint dissipator $D$, $[H_{\rm s},\sigma]=0$, and $\ker D=\mathbb C I$.

[F1] [[def-qsm-dt-gns-detailed-balance]]: $D(I)=0$, $D$ is self-adjoint for $\langle A,B\rangle_\sigma=\operatorname{Tr}(\sigma B^*A)$, and $K(A)=i[H_{\rm s},A]/\hbar$ with $[H_{\rm s},\sigma]=0$.

[F2] [[thm-qsm-dt-gksl-sufficient]]: the finite Schrödinger semigroup $e^{t\mathcal L}$ is completely positive and trace-preserving for $t\geq0$.

[F3] [[thm-qsm-dt-channel-duality]]: the trace-dual of a finite channel is unital and completely positive.

[F4] [[thm-qsm-dt-trace-contraction]]: a unital completely positive map satisfies the Schwarz inequality; its proof also establishes $\|X\|_1=\sup_{\|A\|_\infty\leq1}|\operatorname{Tr}(AX)|$.

[F5] [[lem-qsm-matrix-state-calculus]]: finite self-adjoint endomorphisms have an orthonormal eigenbasis; the finite weighted inner product satisfies Cauchy–Schwarz.

[F6] [[lem-qsm-dt-finite-trace-pairing-cyclicity]]: finite matrix traces are cyclic.

## Proof

1.1 If $d=1$, then $\mathcal M_0=\{0\}$ and the only density matrix is $\sigma$, so all assertions are immediate. For the remainder assume $d>1$. By [F1], self-adjointness and $D(I)=0$ give $\operatorname{Tr}(\sigma D(A))=\langle D(A),I\rangle_\sigma=\langle A,D(I)\rangle_\sigma=0$. For the Hamiltonian part, cyclicity [F6] and $[H_{\rm s},\sigma]=0$ give $\operatorname{Tr}(\sigma K(A))=0$. Since $G$ is the trace dual of $\mathcal L$, differentiating $\operatorname{Tr}(\sigma e^{tG}A)$ now shows it is constant. Applying the same calculation with $K=0$ shows $\operatorname{Tr}(\sigma e^{tD}A)=\operatorname{Tr}(\sigma A)$. Thus $\sigma$ is stationary for both dual semigroups. [F1, F6, given, algebra]

2.1 Let $\mathcal L_D(X)=\sum_j(L_jXL_j^*-\frac12\{L_j^*L_j,X\})$, the Schrödinger GKSL generator with zero Hamiltonian and the same jump matrices. The finite trace calculation in [F1], [F6] shows its trace dual is $D$. Applying [F2] to $\mathcal L_D$ and [F3] to its channel semigroup makes $e^{tD}$ unital and completely positive. The Schwarz inequality [F4] and stationarity from step 1.1 give
$$
\|e^{tD}A\|_\sigma^2=\operatorname{Tr}(\sigma(e^{tD}A)^*e^{tD}A)\leq\operatorname{Tr}(\sigma e^{tD}(A^*A))=\|A\|_\sigma^2.
$$
Differentiating at $t=0$ yields $\operatorname{Re}\langle D(A),A\rangle_\sigma\leq0$; self-adjointness in [F1] makes this quantity real. [F1, F2, F3, F4, F6, step 1.1, algebra]

3.1 The subspace $\mathcal M_0$ is the orthogonal complement of $\mathbb C I$, and [F1] gives $D(\mathcal M_0)\subseteq\mathcal M_0$. The finite-dimensional spectral theorem [F5] applies to the self-adjoint endomorphism $D$ on $(M_d,\langle\cdot,\cdot\rangle_\sigma)$. Step 2.1 makes all eigenvalues nonpositive; $\ker D=\mathbb C I$ excludes zero on $\mathcal M_0$. Because $d>1$, $\mathcal M_0\ne\{0\}$, so its finite nonempty list of eigenvalues has maximum $-\gamma<0$, and $\langle D(A),A\rangle_\sigma\leq-\gamma\|A\|_\sigma^2$. [given, F1, F5, step 2.1, algebra]

4.1 By [F6] and $[H_{\rm s},\sigma]=0$, $K$ is anti-self-adjoint for $\langle\cdot,\cdot\rangle_\sigma$. Both $K$ and $D$ preserve $\mathcal M_0$: for $D$ this follows from step 1.1, and for $K$ from the same trace-cyclicity calculation. For $A_t=e^{tG}A$ with centered $A$, differentiating gives
$$
\frac{d}{dt}\|A_t\|_\sigma^2=2\operatorname{Re}\langle G(A_t),A_t\rangle_\sigma=2\langle D(A_t),A_t\rangle_\sigma\leq-2\gamma\|A_t\|_\sigma^2.
$$
Thus $e^{2\gamma t}\|A_t\|_\sigma^2$ is nonincreasing, proving the asserted decay. Cauchy–Schwarz [F5] then bounds each centered correlation by $e^{-\gamma t}\|A\|_\sigma\|B\|_\sigma$, an integrable function. [given, F1, F5, F6, step 1.1, step 3.1, algebra]

5.1 The decay in step 4.1 makes $Y:=\int_0^\infty e^{tG}A\,dt$ converge in the finite-dimensional space $\mathcal M_0$. Differentiating $e^{tG}A$ and integrating gives $-GY=A$. If $GZ=0$ for centered $Z$, then step 4.1 gives $\|Z\|_\sigma=\|e^{tG}Z\|_\sigma\leq e^{-\gamma t}\|Z\|_\sigma$, so $Z=0$; hence $-G|_{\mathcal M_0}$ is invertible and $Y=(-G|_{\mathcal M_0})^{-1}A$. [step 4.1, algebra]

6.1 Let $Y$ be as in step 5.1. Then $\Gamma(A)=\operatorname{Re}\langle Y,-G(Y)\rangle_\sigma$. The anti-self-adjoint $K$ contributes zero real part, while step 3.1 gives $\langle Y,-D(Y)\rangle_\sigma\geq\gamma\|Y\|_\sigma^2\geq0$. Therefore $\Gamma(A)\geq0$. [F1, step 3.1, step 5.1, algebra]

7.1 Let $X=\rho-\sigma=X^*$, and take any $A$ with $\|A\|_\infty\leq1$. Set $A_0=A-\operatorname{Tr}(\sigma A)I$. Stationarity and trace duality give $\operatorname{Tr}((\rho_t-\sigma)A)=\operatorname{Tr}(X e^{tG}A_0)$. By cyclicity [F6], the trace-norm dual formula [F4] applies to this product order. Put $C=e^{tG}A_0$. Since $\operatorname{Tr}(XC)=\operatorname{Tr}(CX)=\operatorname{Tr}((C\sigma^{1/2})(\sigma^{-1/2}X))$, the Hilbert–Schmidt trace inequality $|\operatorname{Tr}(UV)|\leq\|U\|_2\|V\|_2$ yields
$$
|\operatorname{Tr}(X e^{tG}A_0)|\leq\|\sigma^{-1/2}X\|_2\,\|e^{tG}A_0\|_\sigma\leq\|\sigma^{-1/2}X\|_2e^{-\gamma t}\|A_0\|_\sigma.
$$
The identity $\|A_0\|_\sigma^2=\operatorname{Tr}(\sigma A^*A)-|\operatorname{Tr}(\sigma A)|^2\leq\|A\|_\infty^2\leq1$ gives a bound independent of $A$. Taking the supremum in [F4] proves the stated trace-norm relaxation estimate. [F1, F4, F5, F6, step 1.1, step 4.1, algebra] ∎

## Remarks

The proof uses only finite matrices. In particular, the decay of $e^{tG}$ follows from the dissipator's gap even when $K$ and $D$ do not commute. The correlation integral is a model coefficient, not a measured transport quantity.
