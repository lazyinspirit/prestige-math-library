---
id: ex-aqft-operator-basis-reduction
kind: example
title: A dimension-six scalar operator reduced by integration by parts and the leading equation
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
proof_strategy: direct
deps:
  - def-aqft-local-operator-and-dimension
  - def-aqft-operator-basis-quotient
  - prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy
  - def-axiom-of-choice
dependency_roles:
  def-aqft-local-operator-and-dimension: mathematical-premise
  def-aqft-operator-basis-quotient: mathematical-premise
  prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
    - title: "Matthias Neubert, Effective Field Theory and Heavy Quark Physics (2004 TASI Lectures)"
      url: "https://arxiv.org/pdf/hep-ph/0512222"
    - title: "Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in effective theories at higher orders"
      url: "https://arxiv.org/pdf/1811.09413"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Example

Let $M=\mathbb R^{1,3}$ have metric $\eta=\operatorname{diag}(-1,1,1,1)$ and use natural units $c=\hbar=1$. Let $\phi:M\to\mathbb R$ be a smooth compactly supported real scalar field of engineering dimension one. Let $m\geq0$ and $\Lambda>0$ have mass dimension one, let $g,C\in\mathbb R$ be dimensionless, and let $\epsilon$ be a dimensionless formal parameter with $\epsilon^2=0$. For dimension bookkeeping, adjoin a central formal scalar $M_s$ of engineering weight one and specialize $M_s=m$ only after forming homogeneous expressions. Let $\widehat W_6$ be the finite complex vector space of polynomials of weight six in $M_s$ and the scalar field jets, with derivative cutoff two and field-degree cutoff six; take the symmetry group to be trivial. Let $\widehat R_6$ be spanned by its total divergences and the density $\phi^3\widehat{\mathcal E}_0$, where $\widehat{\mathcal E}_0=\Box\phi-M_s^2\phi-(g/6)\phi^3$, and write $\widehat{\mathcal Q}_6=\widehat W_6/\widehat R_6$. For compactly supported densities define $\mathcal I[f]=\int_M f\,d^4x$ and impose $\mathcal I(\partial_\mu J^\mu)=0$ for every compactly supported current. Write $\Box=\eta^{\mu\nu}\partial_\mu\partial_\nu$ and set

$$
S_0[\phi]=\mathcal I\!\left[-\frac12\partial_\mu\phi\,\partial^\mu\phi-\frac12m^2\phi^2-\frac{g}{4!}\phi^4\right],\qquad \mathcal O_6=\phi^2\partial_\mu\phi\,\partial^\mu\phi,
$$

with $S_\epsilon=S_0+\epsilon(C/\Lambda^2)\mathcal I(\mathcal O_6)$. After specializing $M_s=m$, the leading Euler derivative is $\mathcal E_0=\Box\phi-m^2\phi-(g/6)\phi^3$. In $\widehat{\mathcal Q}_6$,

$$
[\mathcal O_6]= -\frac{1}{3}[M_s^2\phi^4]-\frac{g}{18}[\phi^6].
$$

The identity-leading local change of variables $\phi\mapsto\phi+\epsilon C\phi^3/(3\Lambda^2)$ transforms the action through this order to

$$
S_\epsilon\!\left[\phi+\epsilon\frac{C\phi^3}{3\Lambda^2}\right] = S_0[\phi]-\epsilon\frac{Cm^2}{3\Lambda^2}\mathcal I(\phi^4)-\epsilon\frac{Cg}{18\Lambda^2}\mathcal I(\phi^6).
$$

The mass spurion gives each term in the quotient identity weight six. Give the formal coefficient $\Lambda^{-1}$ weight $-1$; multiplying the identity by $C/\Lambda^2$ then places every term in a finite weight-four action-density space, and $F[\phi]\mathcal E_0$ lies in that space for $F[\phi]=-C\phi^3/(3\Lambda^2)$. The map uses the convention $\Psi(\phi)=\phi-\epsilon F[\phi]$, and $\epsilon F$ has the units of $\phi$. This is a formal scalar-action calculation under the stated boundary convention; it asserts neither a physical realization nor an on-shell scattering result.

## Example references

[[def-aqft-local-operator-and-dimension|Finite-jet local operators and engineering dimension]]

[[def-aqft-operator-basis-quotient|Finite-order invariant operator-basis quotient]]

[[prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy|Fixed-order integration-by-parts and leading-equation field-redefinition relations]]

[Burgess, §2.1, equations (25)–(26)](https://arxiv.org/pdf/hep-th/0701053)

[Neubert, §2](https://arxiv.org/pdf/hep-ph/0512222)

[Criado–Pérez-Victoria, §§3 and 5.1](https://arxiv.org/pdf/1811.09413)

## Facts & Assumptions

**Given:** the field, couplings, dimensions, cutoff and degree bounds, formal parameter, action, and boundary convention in the Example.

[A1] [[def-axiom-of-choice]]: full AC is adopted in the current A-page prerequisite chain.

[F1] [[def-aqft-local-operator-and-dimension]]: fixed derivative, polynomial-degree and engineering-weight bounds define a finite jet-polynomial operator space, with derivative weight one and field weight given by its declared engineering dimension; the example adjoins the explicitly declared finite-degree mass spurion.

[F2] [[def-aqft-operator-basis-quotient]]: an invariant operator quotient is the invariant vector space modulo its specified relation subspace, and it records precisely that declared relation space.

[F3] [[prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy]]: under a compact-support no-boundary convention and the displayed variational-derivative convention, the identity-leading map $\Psi_k(\phi)=\phi-\epsilon^kF[\phi]$ is formally invertible through the retained order and changes $S_\epsilon$ by $-\epsilon^k\mathcal I(F^a\mathcal E_a^{(0)})+O(\epsilon^{k+1})$.

## Verification

1.1 For a compactly supported variation $h$, the kinetic variation is $-\mathcal I(\partial_\mu h\,\partial^\mu\phi)=\mathcal I(h\Box\phi)$, since $\partial_\mu(h\partial^\mu\phi)$ integrates to zero. The potential variation is $\mathcal I(h(-m^2\phi-g\phi^3/6))$. Thus $DS_0[\phi](h)=\mathcal I(h\mathcal E_0)$ with the displayed $\mathcal E_0$. [given, algebra]

1.2 The field has weight one and each derivative has weight one, so $\mathcal O_6$ has weight six; $M_s^2\phi^4$ and $g\phi^6$ also have weight six. Their derivative orders and field degrees lie within the stated cutoffs, so the displayed identity concerns elements of the declared finite operator space. [given, F1, algebra]

1.3 The product rule gives $\partial_\mu(\phi^3\partial^\mu\phi)=3\phi^2\partial_\mu\phi\partial^\mu\phi+\phi^3\Box\phi$. The boundary convention therefore yields $\mathcal I(\phi^3\Box\phi)=-3\mathcal I(\mathcal O_6)$. [given, algebra]

2.1 Before specialization, substituting $\widehat{\mathcal E}_0=\Box\phi-M_s^2\phi-g\phi^3/6$ into step 1.3 gives $\mathcal I(\phi^3\widehat{\mathcal E}_0)=-3\mathcal I(\mathcal O_6)-\mathcal I(M_s^2\phi^4)-(g/6)\mathcal I(\phi^6)$. Each density has weight six, and the relation subspace contains this leading-equation density and the divergence from step 1.3. The quotient definition [F2] therefore gives the displayed class identity. [given, F2, step 1.3, algebra]

2.2 Put $a=C/(3\Lambda^2)$ and use [F3] with $k=1$ and $F[\phi]=-a\phi^3$, so its map $\phi-\epsilon F[\phi]$ is $\phi+\epsilon a\phi^3$. Its units are those of $\phi$, and its first-order action change is $-\epsilon\mathcal I(F\mathcal E_0)=\epsilon a\mathcal I(\phi^3\mathcal E_0)$, as also follows from step 1.1. Since $\epsilon^2=0$, substituting the shifted field into the order-$\epsilon$ term changes that term only by zero in the truncated ring. [given, A1, F3, step 1.1, algebra]

3.1 Specialize $M_s=m$ in step 2.1, insert that identity into step 2.2, and add the original $+\epsilon(C/\Lambda^2)\mathcal I(\mathcal O_6)$ term. Its coefficient cancels because $3a=C/\Lambda^2$, leaving exactly the quartic and sextic shifts displayed in the Example. [given, step 2.1, step 2.2, algebra] ∎
