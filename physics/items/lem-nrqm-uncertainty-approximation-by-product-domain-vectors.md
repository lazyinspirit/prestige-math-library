---
id: lem-nrqm-uncertainty-approximation-by-product-domain-vectors
aliases: [nrqm-uncertainty-approximation-by-product-domain-vectors]
kind: lemma
domain: mathematics
title: "Approximation of Q-P graph-domain vectors by product-domain vectors"
status: published
origin: pipeline
dependency_level: 6
deps: [def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-schwartz-space-and-its-seminorms, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-uncertainty-product-domain-commutator-identity, lem-schwartz-cutoffs-from-the-standard-smooth-step, lem-weak-leibniz-rule-with-a-smooth-factor, thm-dominated-convergence]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-uncertainty-product-domain-commutator-identity: mathematical-premise
  lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1, printed pages 55-58 (PDF pages 67-70): dense domains, approximation by smooth vectors and the canonical commutation relation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables', Section 2, printed pages 3-6: the domain-qualified derivation of the uncertainty inequality and its saturation"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Fix integers $d\ge1$,
$r\ge1$ and $\hbar>0$, and let $H^{(r)}=L^{2}(\mathbb R^{d};\mathbb C^{r})$
with the componentwise position and momentum operators $Q_{j},P_{j}$ of
[[lem-nrqm-kinematics-componentwise-position-and-momentum]]. Let
$\psi\in D(Q_{j})\cap D(P_{j})$ with $\psi\ne0$ be a class and let
$D_{P}:=D(Q_{j}P_{j})\cap D(P_{j}Q_{j})$ be the product domain characterized in
[[lem-nrqm-uncertainty-product-domain-commutator-identity]] clause (b). Then
there is a sequence $(\varphi_{n})_{n\ge1}\subseteq D_{P}$ with
$$\varphi_{n}\to\frac{\psi}{\|\psi\|},\qquad Q_{j}\varphi_{n}\to\frac{Q_{j}\psi}{\|\psi\|},\qquad P_{j}\varphi_{n}\to\frac{P_{j}\psi}{\|\psi\|},\qquad \|\varphi_{n}\|=1$$
in $H^{(r)}$. In particular, if $\psi$ is a unit vector, then
$\varphi_{n}\to\psi$, $Q_{j}\varphi_{n}\to Q_{j}\psi$ and
$P_{j}\varphi_{n}\to P_{j}\psi$ in norm, and consequently
$$\langle Q_{j}\varphi_{n},\varphi_{n}\rangle\to\langle Q_{j}\psi,\psi\rangle,\qquad \|Q_{j}\varphi_{n}\|\to\|Q_{j}\psi\|,\qquad \langle P_{j}\varphi_{n},\varphi_{n}\rangle\to\langle P_{j}\psi,\psi\rangle,\qquad \|P_{j}\varphi_{n}\|\to\|P_{j}\psi\| .$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice; integers $d,r\ge1$; $\hbar>0$; the operators $Q_{j},P_{j}$ with their maximal componentwise domains; a class $\psi\in D(Q_{j})\cap D(P_{j})$ with $\psi\ne0$.

[F1] **Componentwise operators and weak Leibniz.** $Q_{j}f=x_{j}f$ and $P_{j}f=-i\hbar D_{j}f$ componentwise on their maximal domains, and $D(P_{j})=\{f:\ \xi_{j}\mathcal F_{2}^{(r)}f\in L^{2}\}$ ([[lem-nrqm-kinematics-componentwise-position-and-momentum]]). For every smooth $\eta$ and every $u\in L^{1}_{\mathrm{loc}}$ whose weak $j$-derivative lies in $L^{1}_{\mathrm{loc}}$, one has $D_{j}(\eta u)=(D_{j}\eta)u+\eta D_{j}u$ in $L^{1}_{\mathrm{loc}}$ ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F2] **Cutoffs.** There is $\chi\in C^{\infty}_{c}(\mathbb R)$ with $0\le\chi\le1$, $\chi=1$ on $[-1,1]$, $\chi=0$ outside $[-2,2]$; for $\chi_{n}(t):=\chi(t/n)$ and $n\ge1$ one has $\chi_{n}=1$ on $[-n,n]$, $\chi_{n}=0$ outside $[-2n,2n]$, $\|\chi_{n}\|_{\infty}\le1$, and $\sup_{t}|t\chi_{n}'(t)|=\sup_{s}|s\chi'(s)|=:C_{\chi}<\infty$ ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F3] **Dominated convergence.** If $g_{n}\to g$ pointwise and $|g_{n}|\le G$ with $\int G<\infty$, then $\int g_{n}\to\int g$ ([[thm-dominated-convergence]]).

[F4] **The product domain.** $D_{P}=\{f\in H^{(r)}:\ D_{j}f,\ x_{j}f,\ x_{j}D_{j}f\in L^{2}(\mathbb R^{d};\mathbb C^{r})\}$ and on $D_{P}$ the product rule $D_{j}(x_{j}f)=f+x_{j}D_{j}f$ holds ([[lem-nrqm-uncertainty-product-domain-commutator-identity]] clauses (a) and (b)).

[F5] **Inner-product continuity.** The inner product and the norm of $H^{(r)}$ are continuous for norm convergence ([[def-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** cut the vector off in the $j$-th coordinate by a smooth cutoff with bounded logarithmic derivative, verify the product-domain memberships with the weak Leibniz rule, and pass to the limit by dominated convergence before normalizing.

**Given:** The data of the statement and [F1]-[F5].

1.1 [The truncated vector] For $n\ge1$ put $\widetilde\varphi_{n}:=\chi_{n}(x_{j})\psi$, the componentwise product of the class $\psi$ with the bounded smooth function $\chi_{n}(x_{j})$. Since $|\chi_{n}|\le1$ and $\psi\in L^{2}$, the class $\widetilde\varphi_{n}\in H^{(r)}$ satisfies $\|\widetilde\varphi_{n}\|\le\|\psi\|$. [given, F2]

2.1 [Membership in the product domain] Since $\psi\in D(P_{j})$, [F1] with $\eta=\chi_{n}$ gives $D_{j}\widetilde\varphi_{n}=\chi_{n}'\psi+\chi_{n}D_{j}\psi$, a sum of two $L^{2}$ classes because $\chi_{n}'$ and $\chi_{n}$ are bounded; hence $\widetilde\varphi_{n}\in D(P_{j})$. Next $x_{j}D_{j}\widetilde\varphi_{n}=x_{j}\chi_{n}'\psi+x_{j}\chi_{n}D_{j}\psi$: the first summand is bounded in modulus by $C_{\chi}|\psi|$ pointwise by [F2], and the second by $2n|D_{j}\psi|$ because $|x_{j}\chi_{n}(x_{j})|\le2n$ on the support of $\chi_{n}$ and $D_{j}\psi\in L^{2}$ since $\psi\in D(P_{j})$; hence $x_{j}D_{j}\widetilde\varphi_{n}\in L^{2}$. Also $x_{j}\widetilde\varphi_{n}=x_{j}\chi_{n}\psi\in L^{2}$ because $|x_{j}\chi_{n}(x_{j})|\le2n$ is bounded. By [F4] the three memberships place $\widetilde\varphi_{n}$ in $D_{P}$. [given, step 1.1, F1, F2, F4, algebra]

2.2 [Convergence of the truncated sequence] As $n\to\infty$ one has $\chi_{n}(x_{j})\to1$, $\chi_{n}(x_{j})'\to0$ and $x_{j}\chi_{n}'(x_{j})\to0$ pointwise, with the uniform bounds $|\chi_{n}|\le1$, $|\chi_{n}'|\le\|\chi'\|_{\infty}/n$ and $|x_{j}\chi_{n}'|\le C_{\chi}$. Apply [F3] componentwise to the squared moduli: $|\chi_n\psi-\psi|^2\le|\psi|^2$ gives $\widetilde\varphi_n\to\psi$ in $H^{(r)}$, and $|x_j(\chi_n-1)\psi|^2\le|x_j\psi|^2$ gives $Q_j\widetilde\varphi_n\to Q_j\psi$. Both majorants are integrable by $\psi\in D(Q_j)$. For the momentum, $\|\chi_n'\psi\|_2\le\|\chi'\|_\infty\|\psi\|_2/n\to0$, while $| (\chi_n-1)D_j\psi|^2\le|D_j\psi|^2$ and pointwise convergence give $\chi_nD_j\psi\to D_j\psi$ in $L^2$ by [F3]; the last majorant is integrable because $\psi\in D(P_j)$. Therefore $$Q_{j}\widetilde\varphi_{n}=x_{j}\chi_{n}\psi\to x_{j}\psi=Q_{j}\psi,\qquad P_{j}\widetilde\varphi_{n}=-i\hbar\bigl(\chi_{n}'\psi+\chi_{n}D_{j}\psi\bigr)\to-i\hbar D_{j}\psi=P_{j}\psi$$ in $H^{(r)}$. In particular $\|\widetilde\varphi_{n}\|\to\|\psi\|>0$. [step 1.1, F1, F2, F3, algebra]

3.1 [Normalization] Since $\|\widetilde\varphi_{n}\|\to\|\psi\|>0$, choose $n_{0}$ such that $\widetilde\varphi_{n}\ne0$ for every $n\ge n_{0}$. Reindex this tail by setting $\varphi_{n}:=\widetilde\varphi_{n+n_{0}-1}/\|\widetilde\varphi_{n+n_{0}-1}\|$ for every $n\ge1$. Since $D_{P}$ is a linear subspace by [F4], $\varphi_{n}\in D_{P}$ and $\|\varphi_{n}\|=1$. Dividing the convergences of step 2.2 by $\|\widetilde\varphi_{n+n_{0}-1}\|\to\|\psi\|$ gives $\varphi_{n}\to\psi/\|\psi\|$, $Q_{j}\varphi_{n}\to Q_{j}\psi/\|\psi\|$ and $P_{j}\varphi_{n}\to P_{j}\psi/\|\psi\|$. If $\psi$ is a unit vector, these are the convergences $\varphi_{n}\to\psi$, $Q_{j}\varphi_{n}\to Q_{j}\psi$ and $P_{j}\varphi_{n}\to P_{j}\psi$. [step 2.2, F4, algebra]

4.1 [Means and second moments] Assume $\psi$ is a unit vector. By [F5], $\langle Q_{j}\varphi_{n},\varphi_{n}\rangle\to\langle Q_{j}\psi,\psi\rangle$ and $\|Q_{j}\varphi_{n}\|=\|Q_{j}\varphi_{n}-0\|\to\|Q_{j}\psi\|$ from the convergence $Q_{j}\varphi_{n}\to Q_{j}\psi$; the same two limits hold with $Q_{j}$ replaced by $P_{j}$. This completes the statement. [step 3.1, F5, algebra] ∎
