---
id: ex-emg-nonzero-parallel-field-data
kind: example
title: "Nonzero parallel Maxwell fields satisfy torus constraints with isotropic initial curvature"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-emg-electrovacuum-cauchy-system
  - def-emg-periodic-high-sobolev-state
  - thm-emg-gauss-codazzi-maxwell-constraints
  - thm-emg-local-high-sobolev-electrovacuum
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-periodic-high-sobolev-state: mathematical-premise
  thm-emg-gauss-codazzi-maxwell-constraints: mathematical-premise
  thm-emg-local-high-sobolev-electrovacuum: mathematical-premise
sources:
  references:
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), §II, printed pp. 3–8."
      url: "https://arxiv.org/pdf/0907.1151"
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), §1.6, printed pp. 23–25."
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
verification:
  precheck: pending
---

## Example

Fix $L_0>0$ and dimensionless periodic coordinates $\theta^i\in\mathbb R/(2\pi\mathbb Z)$, with length coordinates $X^i=L_0\theta^i$ as in [[def-emg-periodic-high-sobolev-state]]. Let $h=\sum_i dX^i\otimes dX^i=L_0^2\sum_i d\theta^i\otimes d\theta^i$ on the flat periodic torus $\mathbb T^3_{2\pi}$ (thus $h_{ij}=\delta_{ij}$ in the length-coordinate frame), take $\Lambda=0$, and choose two nonzero vectors with constant components $e,b\in\mathbb R^3$ in its oriented orthonormal frame $\partial_{X^i}$ parallel to one another. In the SI convention $e=E/c$ and $b=B$, set
$$H:=\sqrt{\frac{\kappa}{6\mu_0}\bigl(|e|^2+|b|^2\bigr)},\qquad K_{ij}:=Hh_{ij},$$
where $x^0=ct$ is a length coordinate. Then $(h,K,e,b)$ satisfies the source-free Einstein–Maxwell Hamiltonian, momentum and Gauss constraints with $K(X,Y)=g(\nabla_Xn,Y)$. Consequently, conditional on the local theorem's stated CP01 suppliers, these data have a nontrivial smooth source-free local Einstein–Maxwell development.

## Facts & Assumptions

**Given:** The flat torus, $\Lambda=0$, constant parallel $e,b$, and the fixed positive constants $\kappa,\mu_0$.

[L1] Draft constraint interface [[thm-emg-gauss-codazzi-maxwell-constraints]] is
$$D_ie^i=D_ib^i=0,\quad R(h)+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+\frac\kappa{\mu_0}(|e|_h^2+|b|_h^2),\quad D^jK_{ji}-D_i\operatorname{tr}_hK=-\frac\kappa{\mu_0}(e\times_h b)_i.$$
Its file is listed in batch 6, but its status is draft and verification precheck is pending, so this constraint use remains conditional.

[F1] [[thm-emg-local-high-sobolev-electrovacuum]] gives a smooth full local solution from smooth constrained data, conditional on the model, stress and hyperbolic suppliers identified in that item's Facts & Assumptions. The inspected current GR Sobolev suppliers used there are published with precheck pending.

## Verification

1.1 The flat torus has $R(h)=0$ and zero Christoffel symbols. Constant $e,b$ therefore have $D_ie^i=D_ib^i=0$; their collinearity gives $e\times_h b=0$. Since $K=Hh$ with constant $H$, $D K=0$, $\operatorname{tr}_hK=3H$, and $|K|_h^2=3H^2$. Hence the Hamiltonian left side is $0+9H^2-3H^2=6H^2$, which by the definition of $H$ equals $\kappa\mu_0^{-1}(|e|^2+|b|^2)$, exactly the right side of [L1] for $\Lambda=0$. The momentum left side and right side both vanish. Thus all four constraints hold. The scalar under the square root is positive since both fields are nonzero, and $H$ is finite and real. [given, L1, algebra]

2.1 The data are smooth and $h$ is uniformly positive on the compact torus. For any integer $s\ge5$ they belong to the Sobolev classes in [F1]; their verified constraints meet its hypotheses. Applying [F1] yields a smooth local full source-free solution. The reconstructed initial two-form has nonzero electric and magnetic components because $e,b\ne0$, so the solution is nontrivial. The argument is a model deduction, not an empirical claim. [step 1.1, F1, algebra]

3.1 (A nonzero magnetic period.) The initial spatial two-form is $\omega_b=\tfrac12\epsilon_{ijk}b_k\,dX^i\wedge dX^j=\tfrac12L_0^2\epsilon_{ijk}b_k\,d\theta^i\wedge d\theta^j$. Write the development from step 2.1 as $M=(-T,T)\times\mathbb T^3_{2\pi}$ with initial embedding $\iota_\Sigma(\theta)=(0,\theta)$. For each $i$, choose the cyclic pair $(j,k)$ with $\epsilon_{ijk}=1$ and orient the coordinate two-torus $\mathbb T^2_{jk}=\{\theta^i=0\}$ by $d\theta^j\wedge d\theta^k$. Its magnetic period, the integral of the restricted two-form, is $\int_{\mathbb T^2_{jk}}\omega_b=(2\pi L_0)^2b_i$. Since $b\ne0$ and $L_0>0$, some such period is nonzero. If $F=dA$ for a globally defined smooth one-form on a neighborhood of the full initial torus, then $\omega_b=d(\iota_\Sigma^*A)$. Write $\iota_\Sigma^*A=\sum_\ell A_\ell(\theta)d\theta^\ell$ with smooth periodic coefficients. Integrating $\partial_j A_k-\partial_k A_j$ over the coordinate two-torus gives zero by periodicity in each variable, contradicting its nonzero period. Thus no such global potential exists. [given, step 2.1, algebra] ∎

## Remarks

If instead $K=0$ while $h=\delta$, $\Lambda=0$, and either field is nonzero, the Hamiltonian constraint fails: its left side is zero and its right side is strictly positive. This obstruction distinguishes coupled initial data from a test Maxwell field placed on a fixed Minkowski background. No later isotropy or long-time behavior is claimed for the development above.
