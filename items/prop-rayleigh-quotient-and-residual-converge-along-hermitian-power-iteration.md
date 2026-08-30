---
id: prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration
kind: proposition
title: "For Hermitian matrices, the Rayleigh quotient and residual converge with the expected rates along power iteration"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-power-iteration,
       def-self-adjoint-and-normal-endomorphism,
       thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue,
       cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
       thm-complex-spectral-theorem-for-normal-endomorphisms]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
    - title: "Per-Olof Persson, The QR Algorithm I"
      url: "https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/f1ce20d2c382d61127d8948b42dd0c86_MIT18_335JS19_lec16_reading.pdf"
---

## Statement

Let $A$ be Hermitian with simple dominant eigenvalue $\lambda_1$, let $q_1$ be
a unit eigenvector, and let $(x_k)$ be the power iteration from a start vector
with nonzero $q_1$-component. Put

$$\mu_k:=\langle Ax_k,x_k\rangle,\qquad r_k:=Ax_k-\mu_k x_k.$$

Then

$$|\mu_k-\lambda_1|=O\!\left(\left|\frac{\lambda_2}{\lambda_1}\right|^{2k}\right),\qquad \|r_k\|_2=O\!\left(\left|\frac{\lambda_2}{\lambda_1}\right|^{k}\right).$$

In particular, $\mu_k\to\lambda_1$ and $r_k\to0$.

## Facts & Assumptions

**Given:** A Hermitian matrix $A$ with simple dominant eigenpair $(\lambda_1,q_1)$ and a valid power iteration $(x_k)$.

[L1] Power iteration converges projectively to the dominant eigendirection at rate $O(|\lambda_2/\lambda_1|^k)$ ([[thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue]]).

[L2] Hermitian means $A^*=A$, so if $z\perp q_1$ then $\langle Az,q_1\rangle=\langle z,Aq_1\rangle=\lambda_1\langle z,q_1\rangle=0$ ([[def-self-adjoint-and-normal-endomorphism]]).

[L3] The power iteration is the normalised recurrence $x_{k+1}=Ax_k/\|Ax_k\|_2$, with Rayleigh estimates from the same iterates ([[def-power-iteration]]).

[L4] A real self-adjoint or complex Hermitian matrix has an orthonormal
eigenbasis and is therefore diagonalisable
([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]],
[[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 Let $\rho:=|\lambda_2/\lambda_1|<1$. By [L4], the Hermitian matrix is diagonalisable, so [L1] applies. After choosing phases $\alpha_k$ of modulus one, one has $$\|\alpha_kx_k-q_1\|_2=O(\rho^k).$$ Write
$$\alpha_kx_k=c_kq_1+z_k$$ with $z_k\perp q_1$. Then
$|c_k-1|+\|z_k\|_2=O(\rho^k)$. [L1, L4, algebra]

2.1 By [L2], the orthogonal complement $q_1^\perp$ is $A$-invariant. Since $x_k$ is unit and $\mu_k=\langle A(\alpha_kx_k),\alpha_kx_k\rangle$, the cross terms vanish: $$\mu_k=|c_k|^2\lambda_1+\langle Az_k,z_k\rangle.$$ Using $|c_k|^2+\|z_k\|_2^2=1$, this becomes $$\mu_k-\lambda_1=\langle Az_k,z_k\rangle-\lambda_1\|z_k\|_2^2.$$ Therefore $$|\mu_k-\lambda_1|\le(\|A\|_2+|\lambda_1|)\|z_k\|_2^2=O(\rho^{2k}).$$ [L2, step 1.1, algebra]

3.1 Using $Aq_1=\lambda_1q_1$, one has $$\alpha_k r_k=A(\alpha_kx_k)-\mu_k(\alpha_kx_k)=c_k(\lambda_1-\mu_k)q_1+(A-\mu_k I)z_k.$$ Since $|\alpha_k|=1$, $$\|r_k\|_2\le |c_k|\,|\lambda_1-\mu_k|+(\|A\|_2+|\mu_k|)\|z_k\|_2.$$ Step 2.1 and step 1.1 give $$\|r_k\|_2=O(\rho^k).$$ [step 1.1, step 2.1, algebra]

4.1 The displayed bounds force $\mu_k\to\lambda_1$ and $r_k\to0$. [step 2.1, step 3.1, L3] ∎
