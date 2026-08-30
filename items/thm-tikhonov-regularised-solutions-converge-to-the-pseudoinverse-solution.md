---
id: thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution
kind: theorem
title: "As $\\lambda\\downarrow0$, the Tikhonov minimisers converge to the Moore--Penrose solution $A^+b$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-tikhonov-regularisation-has-singular-filter-factors,
       thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution,
       thm-moore-penrose-pseudoinverse-exists-and-is-unique]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Stanford CS205L, Unit 12: Regularization"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_12_regularization.pdf"
---

## Statement

Let $x_\lambda$ be the Tikhonov minimiser for $Ax=b$. Then

$$\lim_{\lambda\downarrow0}x_\lambda=A^+b.$$

## Facts & Assumptions

**Given:** A matrix $A$, a vector $b$, and the Tikhonov minimisers $x_\lambda$.

[L1] In singular-value coordinates,

$$ x_\lambda =\sum_{\sigma_i>0}\frac{\sigma_i}{\sigma_i^2+\lambda}\,\langle b,u_i\rangle v_i $$

([[prop-tikhonov-regularisation-has-singular-filter-factors]]).

[L2] $A^+b$ is the minimum-norm least-squares solution ([[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]).

[L3] The Moore--Penrose pseudoinverse exists ([[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 In the same SVD coordinates as [L1], define $B:=V\Sigma^+U^*$ by reciprocating each positive singular value and leaving the
zero block fixed. Direct diagonal multiplication verifies all four Penrose
equations, so uniqueness in [L3] gives $B=A^+$. Consequently
$$ A^+b=\sum_{\sigma_i>0}\frac{1}{\sigma_i}\,\langle b,u_i\rangle v_i. $$
[L1, L3, algebra]

2.1 Step 1.1 and [L1] show that the coefficient of $v_i$ in $x_\lambda-A^+b$ is $$ \left(\frac{\sigma_i}{\sigma_i^2+\lambda}-\frac{1}{\sigma_i}\right) \langle b,u_i\rangle =-\frac{\lambda}{\sigma_i(\sigma_i^2+\lambda)}\langle b,u_i\rangle $$ for each nonzero singular value, while the zero-singular-value coefficients are $0$ in both vectors. [L1, step 1.1, algebra]

3.1 For each fixed nonzero $\sigma_i$, $\sigma_i/(\sigma_i^2+\lambda)\to 1/\sigma_i$ as $\lambda\downarrow0$, so every coefficient from step 2.1 tends to $0$. Because there are only finitely many singular directions, $\|x_\lambda-A^+b\|_2\to0$. [step 2.1, algebra]

4.1 Therefore $x_\lambda\to A^+b$, the Moore--Penrose minimum-norm least-squares solution from [L2]. [L2, step 3.1] ∎
