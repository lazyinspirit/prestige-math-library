---
id: thm-qsmx-primitive-transfer-clustering
kind: theorem
title: Certified transfer gap gives exponential MPS clustering
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsmx-mps-and-transfer
  - def-qsmx-transfer-infinite-state
  - def-countable-choice
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - thm-jordan-canonical-form-from-pid-module-structure
  - lem-qsm-matrix-state-calculus
dependency_roles:
  def-qsmx-mps-and-transfer: mathematical-premise
  def-qsmx-transfer-infinite-state: mathematical-premise
  def-countable-choice: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  thm-fundamental-theorem-of-algebra-minimum-modulus-proof: mathematical-premise
  thm-jordan-canonical-form-from-pid-module-structure: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: D. Pérez-García, F. Verstraete, M. M. Wolf, and J. I. Cirac, Matrix Product State Representations, §3.2.4, Eq. (6)
      url: https://arxiv.org/pdf/quant-ph/0608197
    - title: Grégoire Misguich, Introduction to matrix-product states and tensor networks, §2.5.3, Eqs. (27)–(30), and Appendix B.1
      url: https://arxiv.org/pdf/2606.24803
---

## Statement

Assume Countable Choice. Fix integers $d,D\ge1$, matrices $A^i\in M_D(\mathbb C)$, and the transfer map $\mathcal E(X)=\sum_{i=1}^dA^iXA^{i*}$. Let $\rho,\ell\in M_D(\mathbb C)$ be Hermitian and satisfy $\langle\rho v,v\rangle>0$ and $\langle\ell v,v\rangle>0$ for every nonzero $v\in\mathbb C^D$, together with $\operatorname{tr}\rho=1$, $\mathcal E(\rho)=\rho$, $\mathcal E^*(\ell)=\ell$, and $\operatorname{tr}(\ell\rho)=1$. Assume that $1$ is a root of multiplicity one of the characteristic polynomial of $\mathcal E$, and define

$$q:=\max\bigl(\{ |\lambda|: \lambda\in\sigma_{\mathbb C}(\mathcal E),\ \lambda\ne1\}\cup\{0\}\bigr)<1.$$

Let $a,b\ge1$ and fix local observables $O_A\in M_{d^a}(\mathbb C)$ and $O_B\in M_{d^b}(\mathbb C)$. For each integer $g\ge0$, place $O_A$ on sites $1,\ldots,a$, place $O_B$ on sites $a+g+1,\ldots,a+g+b$, and place identities on the $g$ intervening sites. The transfer-generated infinite-chain state determined by $A^i,\rho,\ell$ has connected correlation

$$C_g:=\operatorname{tr}\bigl(\ell\,\mathcal E_{O_A}\mathcal E^g\mathcal E_{O_B}(\rho)\bigr)-\operatorname{tr}\bigl(\ell\,\mathcal E_{O_A}(\rho)\bigr)\operatorname{tr}\bigl(\ell\,\mathcal E_{O_B}(\rho)\bigr).$$

For every real $r$ with $q<r<1$, there is a finite constant $C=C(A,\rho,\ell,O_A,O_B,r)\ge0$, independent of $g$, such that $|C_g|\le Cr^g$ for every $g\ge0$. The multiplicity-one hypothesis is algebraic simplicity; no diagonalizability assumption is made.

## Statement references

[[def-qsmx-mps-and-transfer]]

[[def-qsmx-transfer-infinite-state]]

[[def-countable-choice]]

[[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]

[[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]

[[thm-jordan-canonical-form-from-pid-module-structure]]

[[lem-qsm-matrix-state-calculus]]

## Facts & Assumptions

**Given:** Countable Choice, the finite tensor, positive definite fixed matrices with the stated normalization, the algebraic simplicity of eigenvalue $1$, and the strict spectral bound $q<1$.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice function; this is the exact set-theoretic hypothesis carried by the transfer-state construction.

[F1] [[def-qsmx-mps-and-transfer]]: $\mathcal E(X)=\sum_iA^iXA^{i*}$ is the completely positive transfer map associated with the translation invariant tensor.

[F2] [[def-qsmx-transfer-infinite-state]]: $\mathcal E^*(Y)=\sum_iA^{i*}YA^i$ is the trace-pairing adjoint of $\mathcal E$, and for a block observable $O$, $\mathcal E_O(X)=\sum_{I,J}O_{I,J}A^JX(A^I)^*$ with local expectation $\operatorname{tr}(\ell\mathcal E_O(\rho))$; consecutive block insertions compose in physical order.

[F3] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: $\sigma_{\mathbb C}(\mathcal E)$ is the set of complex eigenvalues of the finite-dimensional complex-linear endomorphism $\mathcal E$.

[F4] [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]: every nonconstant complex polynomial has a complex root; repeated division by linear factors gives complete splitting in finite degree.

[F5] [[thm-jordan-canonical-form-from-pid-module-structure]]: when the characteristic polynomial splits over the field, the finite-dimensional endomorphism has a Jordan basis with one block $J_s(\lambda)=\lambda I+N$ for each elementary divisor, where $N^s=0$.

[F6] [[lem-qsm-matrix-state-calculus]]: a finite Hermitian matrix has an orthonormal eigenbasis with real eigenvalues, and the finite trace is basis independent and cyclic.

## Proof

1.1 Define the linear functional $\varphi(X):=\operatorname{tr}(\ell X)$ and the rank-one map $P(X):=\rho\,\varphi(X)$. The normalization $\varphi(\rho)=1$ gives $P^2=P$. The fixed-point equations give $\mathcal EP=P$ and $P\mathcal E=P$, since $\varphi(\mathcal E(X))=\operatorname{tr}(\mathcal E^*(\ell)X)=\varphi(X)$. Hence $M_D(\mathbb C)=\mathbb C\rho\oplus\ker\varphi$ is an $\mathcal E$-invariant direct sum, $\mathcal E$ is the identity on $\mathbb C\rho$, and $P$ is zero on $\ker\varphi$. The restriction of $\mathcal E$ to $\ker\varphi$ has no eigenvalue $1$: such an eigenvector together with $\rho$ would give two independent eigenvectors for $1$, contradicting algebraic simplicity. Therefore $\mathcal E^g-P$ is zero on $\mathbb C\rho$ and equals $(\mathcal E|_{\ker\varphi})^g$ on the invariant complement. [given, F1, F6, algebra]

2.1 Use $\|X\|_{\mathrm{op}}:=\sup_{\|v\|=1}\|Xv\|$ on $M_D(\mathbb C)$ and the induced norm $\|\Phi\|:=\sup_{\|X\|_{\mathrm{op}}=1}\|\Phi(X)\|_{\mathrm{op}}$ on its linear maps. If $\ker\varphi=\{0\}$, then $\mathcal E=P$ and $\mathcal E^g-P=0$ for every $g\ge1$, with the $g=0$ value absorbed into a constant. Otherwise the restriction is a finite-dimensional complex endomorphism. Its characteristic polynomial splits by [F4], so [F5] gives a similarity to finitely many Jordan blocks $J_s(\lambda)=\lambda I+N$ with $N^s=0$. Every such $\lambda$ belongs to $\sigma_{\mathbb C}(\mathcal E)\setminus\{1\}$, so $|\lambda|\le q$. If $q=0$, all blocks are nilpotent and their powers vanish beyond their finite sizes; finitely many earlier powers are bounded. If $q>0$, fix $r>q$. For a block with $\lambda\ne0$ and $g\ge s$, the binomial expansion gives $J_s(\lambda)^g=\sum_{j=0}^{s-1}\binom gj\lambda^{g-j}N^j$. For every fixed $j$, $g^j(|\lambda|/r)^g$ is bounded because the ratio of consecutive terms tends to $|\lambda|/r<1$; hence each summand is bounded by a constant times $r^g$. Blocks with $\lambda=0$ vanish for $g\ge s$, and all finitely many smaller $g$ are absorbed into the constant. The fixed similarity matrix and its inverse have finite induced matrix norms; submultiplicativity follows from the definition of the induced norm. Thus $\|\mathcal E^g-P\|\le K_r r^g$ in the stated superoperator norm for a finite $K_r$ and all $g\ge0$. [F3, F4, F5, step 1.1, algebra]

2.2 By [F1]–[F2], the transfer contraction for the two blocks with a gap of $g$ identities is $\operatorname{tr}(\ell\mathcal E_{O_A}\mathcal E^g\mathcal E_{O_B}(\rho))$. The product of the separate expectations equals $\operatorname{tr}(\ell\mathcal E_{O_A}P\mathcal E_{O_B}(\rho))$, since $P(X)=\rho\operatorname{tr}(\ell X)$. Subtracting gives $C_g=\operatorname{tr}(\ell\mathcal E_{O_A}(\mathcal E^g-P)\mathcal E_{O_B}(\rho))$. [given, A1, F1, F2, step 1.1, algebra]

3.1 Diagonalize $\ell\ge0$ using [F6] as $\ell=\sum_j t_j|u_j\rangle\langle u_j|$ with $t_j>0$. For every matrix $X$, $|\operatorname{tr}(\ell X)|=|\sum_jt_j\langle Xu_j,u_j\rangle|\le\operatorname{tr}(\ell)\|X\|_{\mathrm{op}}$. The block insertion maps are finite sums of matrix multiplications, so their induced norms in step 2.1 are finite; submultiplicativity gives $|C_g|\le\operatorname{tr}(\ell)\,\|\mathcal E_{O_A}\|\,K_r\,\|\mathcal E_{O_B}(\rho)\|_{\mathrm{op}}\,r^g$. All factors before $r^g$ are finite and independent of $g$, so their product is an admissible $C$. This proves the claimed exponential clustering bound, including Jordan blocks and the case $q=0$. [given, F6, step 2.1, step 2.2, algebra] ∎
