---
id: pthm-tgrx-noether-charge-decomposition
kind: physics-theorem
title: Noether charge decomposition for algebraic-curvature Lagrangians
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-tgrx-noether-horizon-data
  - def-lie-derivative-of-a-tensor-field
  - def-lie-derivative-of-a-differential-form
  - thm-cartans-magic-formula
dependency_roles:
  def-tgrx-noether-horizon-data: formulation-prerequisite
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  def-lie-derivative-of-a-differential-form: mathematical-premise
  thm-cartans-magic-formula: mathematical-premise
physical_scope: >
  Local covariant Noether-potential decomposition for smooth classical metric
  theories with finite covariant matter jets and algebraic dependence on
  curvature. The result fixes the derivative-of-generator coefficient in the
  canonical local charge representative; it is not an entropy law or a
  thermodynamic identification.
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §§3–4, equations (23)–(60)"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §§1.3.1–1.3.3"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §§2.2–2.4"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Use the metric, tensor fields, covariant first-variation decomposition, and
Noether current of the preceding Definition. Suppose the Lagrangian is
$$\mathcal L=\ell(g_{ab},R_{abcd},\psi,\nabla\psi,\ldots,\nabla_{(a_1}\cdots\nabla_{a_m)}\psi)\,\boldsymbol\epsilon_g,$$
where $m<\infty$, all fields and coefficients are smooth, and the curvature
argument is algebraic (there are no covariant derivatives of $R_{abcd}$).
Use the curvature convention
$$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z,$$
and write $R_{abcd}:=g(R(e_c,e_d)e_b,e_a)$ in any local frame. Square
brackets denote weight-one antisymmetrization.
Define the Riemann-symmetric derivative $P^{abcd}$ by
$$\delta\ell\big|_{g,\psi,\nabla\psi,\ldots}=P^{abcd}\delta R_{abcd},$$
with $P^{abcd}=-P^{bacd}=-P^{abdc}=P^{cdab}$ and $P^{a[bcd]}=0$.

Use the covariant first-variation potential produced by the finite covariant
integration-by-parts construction on the field jets, up to the stated
potential ambiguities. For each smooth vector field $\zeta$, use the local
Noether potential obtained by covariantly integrating the derivatives of
$\zeta$ in $J_\zeta=\theta(\phi;\mathcal L_\zeta\phi)-\iota_\zeta\mathcal L$
by parts.
Call this the **canonical local representative**: it is defined on a
neighborhood of the fields and generators, is a local covariant primitive of
$J_\zeta$ on shell, and has no independent closed-form addition. The permitted
representative changes are exactly those induced by
$$\mathcal L\mapsto\mathcal L+d\mu,\qquad \theta\mapsto\theta+\delta\mu+d\mathbf Y,$$
and by an exact charge change; here $\mu$ is a covariant $(n-1)$-form and
$\mathbf Y(\phi;\eta)$ is a covariant $(n-2)$-form linear in $\eta$.
Assume the chosen representative is globally compatible on the integration
region. Then it has the form
$$Q_\zeta=W^c\zeta_c+X^{cd}\nabla_{[c}\zeta_{d]} +\mathbf Y(\phi;\mathcal L_\zeta\phi)+dZ,$$
where $W^c$ and $X^{cd}$ are local covariant form-valued coefficients,
$Z$ is a local covariant $(n-3)$-form (the exact term is absent when $n=2$),
and
$$(X^{cd})_{a_3\ldots a_n} =-P^{abcd}(\boldsymbol\epsilon_g)_{ab a_3\ldots a_n}.$$
For the canonical representative before the permitted changes one may take
$\mathbf Y=0$ and $Z=0$.

## Statement references

[[def-tgrx-noether-horizon-data]]

## Facts & Assumptions

**Given:** The covariant metric theory, its chosen first-variation potential, and Noether current from the Definition, with the additional algebraic curvature and canonical-representative hypotheses in the Statement.

[A1] [[def-tgrx-noether-horizon-data]]: $\delta\mathcal L=E_\phi[\delta\phi]+d\theta(\phi;\delta\phi)$, $J_\zeta=\theta(\phi;\mathcal L_\zeta\phi)-\iota_\zeta\mathcal L$, and the selected on-shell potential is a globally compatible local covariant primitive.

[A2] [[def-tgrx-noether-horizon-data]]: the Lagrangian is diffeomorphism-covariant, so pullback of the fields pulls back the Lagrangian, and the chosen first-variation decomposition is covariant.

[F1] [[def-lie-derivative-of-a-tensor-field]]: the Lie derivative of a tensor is the derivative of its pullback by the local flow; in covariant components it contains the directional term $\zeta^e\nabla_eT$ and one $\nabla\zeta$ term for each tensor index.

[F2] [[def-lie-derivative-of-a-differential-form]]: the Lie derivative of a differential form is the derivative of its pullback by the local flow.

[F3] [[thm-cartans-magic-formula]]: $\mathcal L_\zeta\alpha=d(\iota_\zeta\alpha)+\iota_\zeta(d\alpha)$.

## Proof

1.1 Differentiating the coordinate curvature tensor and using that the
variation of a connection is a tensor gives
$$\delta R^a{}_{bcd}=2\nabla_{[c}\delta\Gamma^a{}_{d]b},\qquad \delta\Gamma^a{}_{bc}=\tfrac12g^{ae} (\nabla_b\delta g_{ec}+\nabla_c\delta g_{eb}-\nabla_e\delta g_{bc}).$$
Substitute these identities into $P^{abcd}\delta R_{abcd}$, use the
Riemann symmetries of $P$, and apply the product rule to move derivatives
off $\delta g$. The part of the resulting potential that contains a
derivative of $\delta g$ is
$$2(\mathbf E_R^{bcd})\nabla_d\delta g_{bc},\qquad (\mathbf E_R^{bcd})_{a_2\ldots a_n} :=P^{abcd}(\boldsymbol\epsilon_g)_{a a_2\ldots a_n};$$
all other curvature terms have no derivative of $\delta g$. For each finite
matter-jet term the repeated identity
$$A^a\nabla_a(\delta T)=\nabla_a(A^a\delta T) -(\nabla_aA^a)\delta T$$
moves its finitely many derivatives off the varied tensor slots. Iterating
that identity $r$ times writes a term with $r$ derivatives of a variation as
a divergence whose coefficients multiply variations of covariant jets of
orders $0$ through $r-1$, plus an Euler term with no derivative on the
variation. The connection-variation terms are included when those jets are
varied as tensors. This supplies a covariant first-variation potential
linear in the variations of covariant tensor slots. [A1, algebra]

2.1 By [A2], covariance and the first-variation identity with variation $\mathcal L_\zeta\phi$ give $\mathcal L_\zeta\mathcal L=E_\phi[\mathcal L_\zeta\phi]+d\theta(\phi;\mathcal L_\zeta\phi)$. By [F2], $\mathcal L_\zeta\mathcal L=d(\iota_\zeta\mathcal L)+\iota_\zeta(d\mathcal L)$; since $\mathcal L$ is an $n$-form on an $n$-manifold, $d\mathcal L=0$. Subtracting gives $dJ_\zeta=-E_\phi[\mathcal L_\zeta\phi]$, so the current is closed on a solution and the assumed canonical local primitive is compatible with the on-shell identity. For a tensor $T$, [F1] gives $$(\mathcal L_\zeta T)^{a_1\ldots a_p}{}_{b_1\ldots b_q}=\zeta^e\nabla_eT^{a_1\ldots a_p}{}_{b_1\ldots b_q}-\sum_{i=1}^p(\nabla_e\zeta^{a_i})T^{a_1\ldots e\ldots a_p}{}_{b_1\ldots b_q}+\sum_{j=1}^q(\nabla_{b_j}\zeta^e)T^{a_1\ldots a_p}{}_{b_1\ldots e\ldots b_q}.$$ For each $r\ge1$ let $D^r\psi:=\nabla_{(a_1}\cdots\nabla_{a_r)}\psi$, and set $D^0\psi:=\psi$. Naturality of the Levi-Civita connection gives $D^r\psi[\Phi_t^*g,\Phi_t^*\psi]=\Phi_t^*(D^r\psi[g,\psi])$ along the local flow $\Phi_t$ of $\zeta$. Differentiating shows that the total variation of this jet, including the variation of the connection, is $\mathcal L_\zeta(D^r\psi)$; applying [F1] to the whole jet tensor shows that it contains only $\zeta$ and $\nabla\zeta$. Thus every covariant tensor-slot contribution to $\theta(\phi;\mathcal L_\zeta\phi)$ contains only $\zeta$ and $\nabla\zeta$, even when the finite matter-jet order exceeds one. The metric slot contributes $2\mathbf E_R^{bcd}\nabla_d(\nabla_b\zeta_c+\nabla_c\zeta_b)$. Since $\mathbf E_R^{bcd}$ is antisymmetric in $c,d$, $\mathbf E_R^{bcd}\nabla_d\nabla_c\zeta_b=\tfrac12\mathbf E_R^{bcd}[\nabla_d,\nabla_c]\zeta_b$, a curvature-times-$\zeta$ term. Therefore the sole second-derivative term in $J_\zeta$ is $2\mathbf E_R^{bcd}\nabla_d\nabla_b\zeta_c$; $-\iota_\zeta\mathcal L$ contains only $\zeta$. [A1, A2, F1, F2, F3, algebra, step 1.1]

3.1 Apply the defining integration-by-parts construction of the canonical
local representative to the term in step 2.1. The product rule gives
$$2\mathbf E_R^{bcd}\nabla_d\nabla_b\zeta_c =2\nabla_d(\mathbf E_R^{bcd}\nabla_b\zeta_c) -2(\nabla_d\mathbf E_R^{bcd})\nabla_b\zeta_c.$$
In form components, the second-derivative part of
$(d(X^{cd}\nabla_{[c}\zeta_{d]}))_{a_2\ldots a_n}$ is
$$-(n-1)P^{pqcd}(\boldsymbol\epsilon_g)_{pq[a_3\ldots a_n} \nabla_{a_2]}\nabla_{[c}\zeta_{d]}.$$
Antisymmetrizing $p,q$, $c,d$, and the form slots, then exchanging the
curvature-derivative index pairs of $P$, gives
$$2P^{abcd}(\boldsymbol\epsilon_g)_{a a_2\ldots a_n} \nabla_d\nabla_b\zeta_c,$$
which is the second-derivative term in step 2.1. Thus the coefficient and
sign of $X$ are fixed as stated. For the remaining terms set $Q^{(1)}_\zeta:=X^{cd}\nabla_{[c}\zeta_{d]}$ and write the residual current uniquely as $J_\zeta-dQ^{(1)}_\zeta=\iota_{j_\zeta}\boldsymbol\epsilon_g$. The second-jet terms just matched cancel, so there are smooth local covariant coefficients, independent of $\zeta$, with
$$j^a_\zeta=A^{ab}{}_c\nabla_b\zeta^c+B^a{}_c\zeta^c.$$
Fix any solution. Step 2.1 and $d^2=0$ give $\nabla_a j^a_\zeta=0$ for every smooth vector field $\zeta$. At each point, a coordinate polynomial times a smooth cutoff equal to one near that point realizes arbitrary vector-field jets. Taking $\zeta=0$ and $\nabla\zeta=0$ there while varying its symmetric second jet gives $A^{(ab)}{}_c=0$. Next take $\zeta=0$ and vary $\nabla_b\zeta^c$ arbitrarily. The antisymmetric second-derivative term is $\tfrac12A^{ab}{}_c[\nabla_a,\nabla_b]\zeta^c$, which vanishes at that point because it is curvature times $\zeta$. The first-jet coefficient therefore gives
$$\nabla_aA^{ab}{}_c+B^b{}_c=0,\qquad B^a{}_c=\nabla_bA^{ab}{}_c,\qquad j^a_\zeta=\nabla_b(A^{ab}{}_c\zeta^c).$$
Define a local covariant $(n-2)$-form on the field neighborhood by
$$(Q^{(0)}_\zeta)_{a_3\ldots a_n}:=\tfrac12A^{[ab]}{}_c\zeta^c(\boldsymbol\epsilon_g)_{ab a_3\ldots a_n}.$$
Since $\nabla\boldsymbol\epsilon_g=0$, direct antisymmetrization of its form indices gives
$$(dQ^{(0)}_\zeta)_{a_2\ldots a_n}=\nabla_b(A^{[ab]}{}_c\zeta^c)(\boldsymbol\epsilon_g)_{a a_2\ldots a_n}.$$
On the solution $A^{[ab]}{}_c=A^{ab}{}_c$, so $dQ^{(0)}_\zeta=J_\zeta-dQ^{(1)}_\zeta$. Thus $Q^{(0)}_\zeta+Q^{(1)}_\zeta$ is the desired on-shell primitive. The first summand is linear in $\zeta$ with no derivatives; raising the contracted generator index writes it as $W^c\zeta_c$. This explicit construction introduces no independent closed-form addition and proves the canonical formula.
The stipulated Lagrangian and potential changes contribute respectively
$\iota_\zeta\mu$ and $\mathbf Y(\phi;\mathcal L_\zeta\phi)$ to the charge;
an exact charge change contributes $dZ$. This gives the full stated class.
[A1, A2, F1, F2, F3, algebra, step 2.1] ∎

## Remarks

The global-compatibility condition is separate from the local integration by parts: the result does not assert that an arbitrary closed global charge shift is exact. The entropy-variation theorem uses only this representative class. Higher-derivative curvature terms require replacing $P$ by the full curvature Euler derivative and a separate statement.
