---
id: lem-emg-charged-fluid-current-conservation
kind: lemma
title: "Charged-fluid current and total stress conservation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-emg-strict-charged-barotropic-system
  - lem-emg-maxwell-stress-conservation
  - thm-ftc-first-part
dependency_roles:
  def-emg-strict-charged-barotropic-system: mathematical-premise
  lem-emg-maxwell-stress-conservation: mathematical-premise
  thm-ftc-first-part: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Yvonne Choquet-Bruhat, Introduction to General Relativity, Black Holes, and Cosmology (Oxford, 2015), Chapter IX: Relativistic fluids"
      url: "https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76"
    - title: "Daniela Pugliese and Juan A. Valiente Kroon, On the evolution equations for ideal magnetohydrodynamics in curved spacetime, arXiv:1112.1525v1 (2011)"
      url: "https://arxiv.org/pdf/1112.1525"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let smooth fields on an open Lorentzian four-manifold satisfy [[def-emg-strict-charged-barotropic-system]], with $\epsilon$ taking values in $J$. Then

$$u^a\nabla_a\epsilon+(\epsilon+p)\nabla_a u^a=0,\qquad \nabla_a(Nu^a)=0,\qquad \nabla_a j^a=0.$$

If the planned CP01 tensor [[lem-emg-maxwell-stress-conservation]] holds with its stated source sign, then the total stress also obeys

$$\nabla^a(T_{m,ab}+T_{\mathrm{EM},ab})=0.$$

## Facts & Assumptions

**Given:** The smooth fields and equations of [[def-emg-strict-charged-barotropic-system]], including $g(u,u)=-1$, antisymmetric $F$, $j^a=cNZu^a$, $u^a\nabla_aZ=0$, and $\nabla^aT_{m,ab}=F_{bc}j^c$.

[F1] [[def-emg-strict-charged-barotropic-system]]: $T_{m,ab}=(\epsilon+p)u_a u_b+p g_{ab}$, $j^a=cNZu^a$, $N=N_*\exp(\int_{\epsilon_*}^{\epsilon}(z+p(z))^{-1}dz)$, $g(u,u)=-1$, $u^a\nabla_aZ=0$, and $\nabla^aT_{m,ab}=F_{bc}j^c$.

[F2] [[thm-ftc-first-part]]: If an integrand is continuous on the interval between a base point and a variable endpoint, the derivative of its integral function at that endpoint is the integrand value.

[L1] [[lem-emg-maxwell-stress-conservation]]: The current draft CP01 statement, for smooth $F,j$ satisfying $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$, is that $T_{\mathrm{EM},ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$ satisfies $\nabla^aT_{\mathrm{EM},ab}=-F_{bc}j^c$. Its actual draft proof differentiates the quadratic tensor by the product rule, uses the cyclic identity from $dF=0$ to cancel the scalar-invariant derivative, and substitutes the stated Maxwell source sign. The supplier carrier is present but remains draft with precheck pending, so the total-stress conclusion below is used conditionally and its acceptance is not inferred here.

## Proof

**Proof technique:** direct.

1.1 Contract the matter balance in [F1] with $u^b$. Expanding the divergence gives $u^b\nabla^aT_{m,ab}=-(u^a\nabla_a\epsilon+(\epsilon+p)\nabla_a u^a)$: the term $u^a\nabla_a p$ from differentiating $(\epsilon+p)$ cancels the contraction of $\nabla_b p$, while $u_bu^a\nabla_a u^b=\tfrac12u^a\nabla_a(g(u,u))=0$. The force contraction is $u^bF_{bc}j^c=cNZ u^bF_{bc}u^c=0$, since $F_{bc}=-F_{cb}$. Hence the displayed energy equation follows. [given, F1, algebra]

2.1 By [F2], $N'(\epsilon)=N(\epsilon)/(\epsilon+p(\epsilon))$. The product and chain rules therefore give $\nabla_a(Nu^a)=N' u^a\nabla_a\epsilon+N\nabla_a u^a=\frac{N}{\epsilon+p}(u^a\nabla_a\epsilon+(\epsilon+p)\nabla_a u^a)=0$ by step 1.1. Applying the product rule to $j^a=cNZ u^a$ gives $\nabla_a j^a=cZ\nabla_a(Nu^a)+cN u^a\nabla_aZ=0$, using [F1]. [step 1.1, F1, F2, algebra]

3.1 The matter balance in [F1] and the CP01 identity in [L1] have opposite exchange terms, so addition gives $\nabla^a(T_{m,ab}+T_{\mathrm{EM},ab})=F_{bc}j^c-F_{bc}j^c=0$. This is conditional on the exact draft supplier statement in [L1]; neither its draft status nor this conditional use establishes its acceptance. [F1, L1, algebra] ∎
