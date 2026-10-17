---
id: cex-qsm-global-spin-thermal-trace-diverges
kind: counterexample
title: Infinite spin thermal trace diverges despite a unique KMS state
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-qsm-local-spin-algebras
  - def-qsm-vacuum-spin-representation
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - thm-qsm-onsite-product-kms
  - thm-qsm-product-thermal-state-nonnormal
dependency_roles:
  def-countable-choice: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-vacuum-spin-representation: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-qsm-onsite-product-kms: mathematical-premise
  thm-qsm-product-thermal-state-nonnormal: mathematical-premise
dependency_level: 12
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.1, printed pp. 50–53 (finite-excitation spin-chain representation); §3.4, pp. 76–77 (finite Gibbs/KMS state)
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §5, printed p. 10 (normal states); Chapter 2 §6, pp. 24–25 (Gibbs/KMS framework)
      url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement refuted

For an infinite spin lattice, a unique onsite $\beta$-KMS state implies that the global onsite Gibbs operator in the finite-excitation vacuum representation has finite trace. The statement is false even for one-dimensional two-level spins.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $\Gamma=\mathbb Z$, $q=2$, $\epsilon>0$ in J, $\beta>0$ in J$^{-1}$, and $\hbar>0$ in J s.

[A1] Countable Choice and the finite-excitation Hilbert basis are as in [[def-countable-choice]] and [[def-qsm-vacuum-spin-representation]].

[F1] [[def-qsm-local-spin-algebras]] and [[def-qsm-vacuum-spin-representation]]: $\Gamma=\mathbb Z$ has finite two-state local algebras, and $\mathcal H_{\mathrm{vac}}=\ell^2(S_{\mathrm{fin}})$ has the specified orthonormal basis $(e_s)$.

[F2] [[def-adjoint-of-a-densely-defined-unbounded-operator]]: $y\in D(T^*)$ exactly when $x\mapsto\langle Tx,y\rangle$ is bounded on $D(T)$; then $T^*y$ is characterized by $\langle Tx,y\rangle=\langle x,T^*y\rangle$ for all $x\in D(T)$.

[F3] [[def-trace-class-operator]] and [[def-trace-of-a-trace-class-operator]]: a trace-class operator has an absolutely summable diagonal family in every supplied Hilbert basis, and its trace is that finite absolutely convergent sum.

[F4] [[thm-qsm-onsite-product-kms]]: the finite onsite Hamiltonian $h=\epsilon|1\rangle\langle1|$ has a unique quasi-local $\beta$-KMS product state with one-site density $r=e^{-\beta h}/\operatorname{Tr}(e^{-\beta h})$.

[F5] [[thm-qsm-product-thermal-state-nonnormal]]: this full-rank product KMS state has no normal extension to $\mathcal B(\mathcal H_{\mathrm{vac}})$.

## Counterexample
For $s\in S_{\mathrm{fin}}$, let $N(s):=|\{x\in\mathbb Z:s_x=1\}|<\infty$. Define the diagonal operator
$$H_{\mathrm{vac}}e_s=\epsilon N(s)e_s,\qquad D(H_{\mathrm{vac}}):=\left\{\psi\in\ell^2(S_{\mathrm{fin}}):\sum_{s\in S_{\mathrm{fin}}}\epsilon^2N(s)^2|\psi_s|^2<\infty\right\}.$$
For $\beta>0$, define the bounded positive diagonal Gibbs weight $G_\beta e_s:=e^{-\beta\epsilon N(s)}e_s$. Its extended vacuum-basis partition sum is defined by
$$Z_{\mathrm{vac}}(\beta):=\sup_{\substack{J\subseteq S_{\mathrm{fin}}\\J\ \mathrm{finite}}}\ \sum_{s\in J}\langle G_\beta e_s,e_s\rangle=\sup_{\substack{J\subseteq S_{\mathrm{fin}}\\J\ \mathrm{finite}}}\ \sum_{s\in J}e^{-\beta\epsilon N(s)}\in[0,\infty].$$

1.1 The finite linear span of $(e_s)$ is contained in $D(H_{\mathrm{vac}})$ and is dense, so $H_{\mathrm{vac}}$ is densely defined. Its diagonal eigenvalues $\epsilon N(s)$ are real, hence $\langle H_{\mathrm{vac}}\psi,\varphi\rangle=\langle\psi,H_{\mathrm{vac}}\varphi\rangle$ for $\psi,\varphi\in D(H_{\mathrm{vac}})$ by Cauchy–Schwarz. Thus it is symmetric. [A1, F1, construct]

1.2 Define $U_t e_s=e^{it\epsilon N(s)/\hbar}e_s$; this is unitary because every diagonal coefficient has modulus one. A local matrix coefficient between $e_s$ and $e_t$ can be nonzero only if $s$ and $t$ agree outside its finite support $\Lambda$. In that case $N(t)-N(s)=\sum_{x\in\Lambda}(\mathbf 1_{\{t_x=1\}}-\mathbf 1_{\{s_x=1\}})$, so conjugation by $U_t$ multiplies the coefficient by the same phase as conjugation by the finite onsite Hamiltonian $H_\Lambda=\epsilon\sum_{x\in\Lambda}|1\rangle\langle1|_x$. Thus $U_t\pi(A)U_t^*=\pi(\alpha_t(A))$ for every local $A$; this operator identity extends to $\mathcal A$ by norm continuity. [F1, F4, algebra]

1.3 For each $x\in\mathbb Z$, the one-excitation configuration $s^{(x)}$ with $s_x^{(x)}=1$ and all other labels $0$ contributes $e^{-\beta\epsilon}$ to $Z_{\mathrm{vac}}(\beta)$. These configurations are distinct, so for any $m$ distinct sites the finite subsum is $m e^{-\beta\epsilon}$. Since $\epsilon,\beta>0$, this grows without bound as $m\to\infty$, and $Z_{\mathrm{vac}}(\beta)=+\infty$. [F1, construct, algebra]

2.1 If $\varphi\in D(H_{\mathrm{vac}}^*)$, then by [F2] there is $\eta\in\ell^2(S_{\mathrm{fin}})$ such that $\langle H_{\mathrm{vac}}\psi,\varphi\rangle=\langle\psi,\eta\rangle$ for every $\psi\in D(H_{\mathrm{vac}})$. Taking $\psi=e_s$ gives $\eta_s=\epsilon N(s)\varphi_s$ for every $s$, so $(\epsilon N(s)\varphi_s)_s\in\ell^2(S_{\mathrm{fin}})$ and $\varphi\in D(H_{\mathrm{vac}})$. Conversely, if $\varphi\in D(H_{\mathrm{vac}})$, the diagonal sums satisfy $\langle H_{\mathrm{vac}}\psi,\varphi\rangle=\langle\psi,H_{\mathrm{vac}}\varphi\rangle$ for all $\psi\in D(H_{\mathrm{vac}})$, hence $H_{\mathrm{vac}}^*\varphi=H_{\mathrm{vac}}\varphi$. Therefore $D(H_{\mathrm{vac}}^*)=D(H_{\mathrm{vac}})$ and the two operators agree: $H_{\mathrm{vac}}$ is self-adjoint. [F2, step 1.1, algebra]

3.1 If $G_\beta$ were trace class, [F3] applied to the supplied basis $(e_s)$ would make the nonnegative diagonal sum defining $Z_{\mathrm{vac}}(\beta)$ finite, contrary to step 1.3. Thus no normalized trace-class Gibbs density is obtained from $G_\beta$. Yet [F4] gives a unique quasi-local KMS state, and [F5] confirms that it has no normal vacuum-representation extension. [F3, F4, F5, step 1.3] ∎

