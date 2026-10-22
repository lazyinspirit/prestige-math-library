---
id: ex-tgrx-product-environment-gsl
kind: example
title: Finite product environment verifies conditional balance
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 4
deps:
  - pthm-tgrx-regulated-gsl
  - post-tgrx-regulated-horizon-balance
  - prop-tgrx-finite-modular-balance
  - def-qc-partial-trace
  - thm-natural-logarithm-laws
  - def-qc-density-operator
  - thm-non-negative-operator-characterisations
  - def-trace-of-an-endomorphism
dependency_roles:
  pthm-tgrx-regulated-gsl: physical-result
  post-tgrx-regulated-horizon-balance: physical-assumption
  prop-tgrx-finite-modular-balance: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  def-qc-density-operator: mathematical-premise
  thm-non-negative-operator-characterisations: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
justified_by: []
aliases: []
physical_scope: >
  A finite-dimensional product-state example inside the adopted nested
  horizon-balance model, including a two-dimensional worked instance. It makes
  no claim about a black-hole solution,
  continuum quantum field theory, empirical observation, or actual physical
  evolution.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references: []
---

## Example

Let $H_2,H_E$ be nonzero finite-dimensional complex inner-product spaces. Let $\rho_2,\sigma_2$ be density operators on $H_2$ and $\rho_E,\sigma_E$ density operators on $H_E$, with $\sigma_2$ and $\sigma_E$ positive definite. Set $H_1:=H_2\otimes H_E$, $\rho_1:=\rho_2\otimes\rho_E$, and $\sigma_1:=\sigma_2\otimes\sigma_E$. Put $K_E:=-\log\sigma_E$ and $\Delta_E:=\operatorname{tr}((\rho_E-\sigma_E)K_E)$. Then $D(\rho_1\|\sigma_1)-D(\rho_2\|\sigma_2)=D(\rho_E\|\sigma_E)$, and the adopted geometric balance gives $S_{\mathrm{gen},2}-S_{\mathrm{gen},1}=k_BD(\rho_E\|\sigma_E)$. In the particular case $H_2=H_E=\mathbb C^2$ with $\langle z,w\rangle=z_0\overline{w_0}+z_1\overline{w_1}$, let $I_2$ be the identity map, take $\rho_2=\sigma_2=I_2/2$ and $\sigma_E=I_2/2$, and define $\rho_E:\mathbb C^2\to\mathbb C^2$ by $\rho_E(z_0,z_1):=(z_0,0)$. Then one has $\Delta_E=0$ and $D(\rho_E\|\sigma_E)=\log2$, so $a_2=a_1$ satisfies the balance premise and $S_{\mathrm{gen},2}-S_{\mathrm{gen},1}=k_B\log2$.

## Example references

[[pthm-tgrx-regulated-gsl]]

[[post-tgrx-regulated-horizon-balance]]

[[prop-tgrx-finite-modular-balance]]

[[def-qc-partial-trace]]

[[thm-natural-logarithm-laws]]

[[def-qc-density-operator]]

[[thm-non-negative-operator-characterisations]]

[[def-trace-of-an-endomorphism]]

## Facts & Assumptions

**Given:** The finite-dimensional spaces and density operators in the Example, the product assignments $\rho_1=\rho_2\otimes\rho_E$ and $\sigma_1=\sigma_2\otimes\sigma_E$, and the specified two-qubit instance.

[F1] [[prop-tgrx-finite-modular-balance]]: for finite-dimensional density operators $\rho,\sigma$ with $\sigma$ positive definite, $D(\rho\|\sigma)=\operatorname{tr}((\rho-\sigma)(-\log\sigma))-(s(\rho)-s(\sigma))$, with $s(\tau)=-\operatorname{tr}(\tau\log\tau)$ in nats and $0\log0:=0$.

[A1] [[post-tgrx-regulated-horizon-balance]]: the geometric balance is $a_2-a_1=\Delta_1-\Delta_2$ and the model entropy is $S_{\mathrm{gen},i}=k_B[a_i+s(\rho_i)-s(\sigma_i)]$, where $k_B>0$.

[F2] [[pthm-tgrx-regulated-gsl]]: under [A1] and finite partial-trace consistency, $S_{\mathrm{gen},2}-S_{\mathrm{gen},1}=k_B[D(\rho_1\|\sigma_1)-D(\rho_2\|\sigma_2)]$.

[F3] [[def-qc-partial-trace]]: in ordered product bases, $(\operatorname{Tr}_E R)_{aa'}=\sum_bR_{(a,b),(a',b)}$.

[F4] [[thm-natural-logarithm-laws]]: for positive reals $x,y$, $\log(xy)=\log x+\log y$.

[F5] [[def-qc-density-operator]]: a density operator on a nonzero finite-dimensional complex inner-product space is non-negative and has trace one.

[F6] [[thm-non-negative-operator-characterisations]]: each finite-dimensional non-negative operator has an orthonormal eigenbasis with nonnegative eigenvalues.

[F7] [[def-trace-of-an-endomorphism]]: the trace of a finite-dimensional endomorphism is the basis-independent finite sum of its diagonal entries.

## Verification

1.1 By [F5]–[F6], each factor state has an orthonormal eigenbasis with nonnegative eigenvalues summing to one. The product matrices are diagonal in the product bases with pairwise-product eigenvalues, so they are non-negative and have trace one; $\sigma_1$ is positive definite because both reference factors are. In the ordered product basis, [F3] gives $(\operatorname{Tr}_E(\rho_2\otimes\rho_E))_{aa'}=\sum_b(\rho_2)_{aa'}(\rho_E)_{bb}=(\rho_2)_{aa'}\operatorname{tr}(\rho_E)=(\rho_2)_{aa'}$, and the same calculation gives $\operatorname{Tr}_E\sigma_1=\sigma_2$. [given, F3, F5, F6, F7, algebra]

2.1 Let $\lambda_a>0$ and $\mu_b>0$ be eigenvalues of $\sigma_2$ and $\sigma_E$. In the product eigenbasis, [F4] gives $-\log(\lambda_a\mu_b)=-\log\lambda_a-\log\mu_b$, hence $K_1=K_2\otimes I_{H_E}+I_{H_2}\otimes K_E$. For simple tensors, $(A\otimes B)(C\otimes D)=AC\otimes BD$ by evaluation on $x\otimes y$, and [F7]'s product-basis diagonal sum gives $\operatorname{tr}((A\otimes B)(C\otimes D))=\sum_{a,b}(AC)_{aa}(BD)_{bb}=\operatorname{tr}(AC)\operatorname{tr}(BD)$. It follows that $\operatorname{tr}(\rho_1K_1)=\operatorname{tr}(\rho_2K_2)\operatorname{tr}(\rho_E)+\operatorname{tr}(\rho_2)\operatorname{tr}(\rho_EK_E)=\operatorname{tr}(\rho_2K_2)+\operatorname{tr}(\rho_EK_E)$; the same expansion for $\sigma_1$ gives $\operatorname{tr}(\sigma_1K_1)=\operatorname{tr}(\sigma_2K_2)+\operatorname{tr}(\sigma_EK_E)$. Subtracting proves $\Delta_1=\Delta_2+\Delta_E$. [F4, F7, step 1.1, algebra]

3.1 If $(\lambda_a)_a$ and $(\mu_b)_b$ are the eigenvalues of $\rho_2$ and $\rho_E$, then the product state has eigenvalues $\lambda_a\mu_b$. Using [F4], trace-one of each factor, and $0\log0:=0$ from [F1], the finite sum is $s(\rho_1)=-\sum_{a,b:\lambda_a\mu_b>0}\lambda_a\mu_b(\log\lambda_a+\log\mu_b)=s(\rho_2)\sum_b\mu_b+s(\rho_E)\sum_a\lambda_a=s(\rho_2)+s(\rho_E)$. The same calculation for $\sigma_2,\sigma_E$ gives $s(\sigma_1)=s(\sigma_2)+s(\sigma_E)$. Apply [F1] to the pairs $(\rho_1,\sigma_1)$, $(\rho_2,\sigma_2)$, and $(\rho_E,\sigma_E)$; using $\Delta_1=\Delta_2+\Delta_E$ from step 2.1 gives $D(\rho_1\|\sigma_1)=D(\rho_2\|\sigma_2)+D(\rho_E\|\sigma_E)$. [F1, F4, F6, step 2.1, algebra]

4.1 The consistency in step 1.1 makes [F2] applicable, so $S_{\mathrm{gen},2}-S_{\mathrm{gen},1}=k_B[D(\rho_1\|\sigma_1)-D(\rho_2\|\sigma_2)]$. Substitute step 3.1 to obtain $S_{\mathrm{gen},2}-S_{\mathrm{gen},1}=k_BD(\rho_E\|\sigma_E)$. [F2, step 1.1, step 3.1, algebra]

5.1 In the stated instance, $K_E=(\log2)I_2$, $\operatorname{tr}(\rho_E-\sigma_E)=0$, and therefore $\Delta_E=0$. The map $\rho_E$ fixes $(1,0)$ and sends $(0,1)$ to zero, so its eigenvalues are $1,0$, while $\sigma_E=I_2/2$, so [F1] gives $D(\rho_E\|\sigma_E)=0-(-\log2)=\log2$. Also $\rho_2=\sigma_2$, hence $\Delta_2=0$; step 2.1 then gives $\Delta_1-\Delta_2=0$, so $a_2=a_1$ satisfies [A1]. Step 4.1 yields the stated growth $k_B\log2$. [given, A1, F1, step 2.1, step 4.1, algebra] ∎

## Remarks

The diagram records the operator-space map that traces out the environment. Its coordinate meaning is the supplier definition [F3]; the product-state conclusion is proved by the finite sum in step 1.1, not by the diagram.

```tikzcd
\operatorname{End}(H_2\otimes H_E) \arrow[r, "\operatorname{Tr}_E"] & \operatorname{End}(H_2)
```
