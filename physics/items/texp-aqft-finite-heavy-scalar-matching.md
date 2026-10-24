---
id: texp-aqft-finite-heavy-scalar-matching
kind: thought-experiment
domain: physics
library: physics
title: Finite heavy-scalar Gaussian matching
status: draft
origin: pipeline
dependency_level: 4
deps:
  - def-aqft-model-and-scale-data
  - def-aqft-wilsonian-action
  - def-aqft-derivative-expansion-and-truncation
  - def-axiom-of-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - def-qftx-heavy-gaussian-data
  - lem-qftx-finite-heavy-gaussian-square
  - thm-qftx-heavy-derivative-bound
justified_by: []
forward_refs: []
dependency_roles:
  def-aqft-model-and-scale-data: formulation-prerequisite
  def-aqft-wilsonian-action: formulation-prerequisite
  def-aqft-derivative-expansion-and-truncation: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
  lem-ac-supplies-sequential-choices-for-probability-constructions: mathematical-premise
  def-qftx-heavy-gaussian-data: mathematical-premise
  lem-qftx-finite-heavy-gaussian-square: mathematical-premise
  thm-qftx-heavy-derivative-bound: mathematical-premise
physical_scope: Exact deduction for a finite positive quadratic heavy-scalar regulator and spectrally band-limited sources; no interacting continuum theory or empirical result is asserted.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: David B. Kaplan, Five lectures on effective field theory
      url: https://arxiv.org/pdf/nucl-th/0510023
      locator: §2.2, printed pp. 20–21, low-energy contact matching and coefficient determination.
    - title: C. P. Burgess, Introduction to Effective Field Theory
      url: https://arxiv.org/pdf/hep-th/0701053
      locator: §§2.2.1–2.2.5, printed pp. 20–27, Wilson-action definition and model-specific heavy-scalar matching.
    - title: Nima Moshayedi, Quantum Field Theory and Functional Integrals
      url: https://arxiv.org/pdf/1902.08652
      locator: §11.2, printed pp. 44–47, finite-dimensional Gaussian covariance and exponential moment.
---

## Statement

Assume the Axiom of Choice and the finite-regulator model data in the definitions below. Let $d\ge1$, let $A$ be a real symmetric positive-semidefinite $d\times d$ matrix, let $M>0$, and put $K=M^2I+A$. Use natural units with $\chi$ in mass-inverse units, $A$ and $K$ in mass-squared units, and a source $J\in\mathbb R^d$ in mass units. Let $E\ge0$, let $P_E$ be the spectral projection of the complexification of $A$ onto $[0,E^2]$, and assume $J=P_EJ$. In the finite Gaussian sector, let $\gamma_{K^{-1}}=N_d(0,K^{-1})$ and define

$$ Z_H(J):=\int_{\mathbb R^d}e^{J^T\chi}\,d\gamma_{K^{-1}}(\chi) $$

$$ \Delta S_W(J):=-\log Z_H(J) $$

For each integer $N\ge0$, put

$$
S_NJ:=M^{-2}\sum_{r=0}^{N}(-A/M^2)^rJ.
$$

Then both finite Gaussian integrals are finite and

$$ Z_H(J)=\exp\!\left(\tfrac12J^TK^{-1}J\right) $$

$$ \Delta S_W(J)=-\tfrac12J^TK^{-1}J $$

The inverse-kernel and action remainders satisfy

$$
\|K^{-1}J-S_NJ\|\le M^{-2}(E^2/M^2)^{N+1}\|J\|,
$$

$$ \left|\Delta S_W(J)+\tfrac12J^TS_NJ\right| \le \frac{\|J\|^2}{2M^2}(E^2/M^2)^{N+1} $$

These are exact conditional statements for a finite positive quadratic heavy sector. The remainder is small in the stated band when $E<M$; no claim is made for unrestricted sources, arbitrary interactions, a continuum measure, or a differentiated Wilsonian flow.

## Statement references

[[def-aqft-model-and-scale-data]]

[[def-aqft-wilsonian-action]]

[[def-aqft-derivative-expansion-and-truncation]]

[[def-qftx-heavy-gaussian-data]]

[[lem-qftx-finite-heavy-gaussian-square]]

[[thm-qftx-heavy-derivative-bound]]

## Facts & Assumptions

**Given:** AC; finite $d\ge1$; real symmetric $A\ge0$; $M>0$; $E\ge0$; and $J=P_EJ$.

[A1] [[def-axiom-of-choice]]: AC is the assumption used by the finite Gaussian law and density suppliers.

[A2] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]: AC supplies countable choice, as required by the positive spectral-calculus supplier.

[F1] [[def-aqft-model-and-scale-data]]: the regulator has a finite nonempty vertex set $X$, retained coordinates $\ell\in\mathbb R^X$, integrated coordinates $\chi\in\mathbb R^X$, and a real Borel ultraviolet action with a specified Borel probability measure for $\chi$. In its positive Gaussian submodel, $A$ is real symmetric positive semidefinite and has range at most one on the regulator graph, $\sqrt{\|A\|}\le\Lambda$, $K=M^2I+A$, and a source $J(\ell)$ has mass units and is supported in the spectral band $[0,E^2]$. The positive scales $\mu_W,M,\Lambda$ and the bound $E\ge0$ are separately named and have no imposed numerical relations.

[F2] [[def-aqft-wilsonian-action]]: at fixed retained coordinates, the Wilsonian action is the negative logarithm of the finite high-coordinate integral under the specified normalized measure.

[F3] [[def-aqft-derivative-expansion-and-truncation]]: $S_NJ=M^{-2}\sum_{r=0}^N(-A/M^2)^rJ$.

[F4] [[def-qftx-heavy-gaussian-data]]: for a nonnegative self-adjoint $A$ and $M>0$, $K=M^2I+A$, $K^{-1}=(M^2+A)^{-1}$, and $\Delta S_{\rm eff}(J)=-\tfrac12\langle J,K^{-1}J\rangle$.

[F5] [[lem-qftx-finite-heavy-gaussian-square]]: for finite $d$, symmetric positive-definite $K$, and $j\in\mathbb R^d$, the normalized finite Gaussian source integral is $\exp(\tfrac12j^TK^{-1}j)$.

[F6] [[thm-qftx-heavy-derivative-bound]]: for $J=P_EJ$, the truncation above obeys the stated vector and action remainder bounds; the useful small-parameter regime is $E<M$.

[A3] For the Wilsonian interpretation, take $X=\{1,\ldots,d\}$ with the complete graph, choose $\Lambda>0$ with $\sqrt{\|A\|}\le\Lambda$ and any $\mu_W>0$, and fix the retained configuration $\ell_*=0\in\mathbb R^X$. Use the constant Borel source map $J(\ell')\equiv J$ for all $\ell'\in\mathbb R^X$, identify the integrated coordinate $h$ of the Wilsonian-action definition with $\chi$, and set the normalized Borel Gaussian probability $\nu_H=\gamma_{K^{-1}}$ and $S_{\rm UV}(\ell',\chi)=-J(\ell')^T\chi$. The complete graph makes the given matrix range at most one, and the constant-source action is real-valued and Borel; since $J=P_EJ$, this source map obeys the stated band restriction. In particular, $J=J(\ell_*)$.

## Proof

**Proof technique:** finite Gaussian source shift followed by the exact positive-spectral remainder theorem.

**Given:** The hypotheses in the Statement.

1.1 For every nonzero $x\in\mathbb R^d$, $x^TKx=M^2\|x\|^2+x^TAx>0$, so $K$ is symmetric positive definite and the finite Gaussian supplier applies. On the complexification, real symmetry makes $A$ self-adjoint; for $x,y\in\mathbb R^d$, the cross terms in $\langle x+iy,A(x+iy)\rangle$ cancel because $x^TAy=y^TAx$, leaving $x^TAx+y^TAy\ge0$. Thus the positive-operator hypotheses of [F4] also hold. [given, F1, F4, algebra]

2.1 In the model specialization [A3], $e^{-S_{\rm UV}(\ell_*,\chi)}=e^{J(\ell_*)^T\chi}=e^{J^T\chi}$ and $d\nu_H(\chi)=d\gamma_{K^{-1}}(\chi)$. Therefore the Wilsonian integral in [F2] is exactly
$$
Z_H(\ell_*)=\int_{\mathbb R^d}e^{-S_{\rm UV}(\ell_*,\chi)}\,d\nu_H(\chi)=\int_{\mathbb R^d}e^{J^T\chi}\,d\gamma_{K^{-1}}(\chi)=Z_H(J).
$$
By [F5] and step 1.1 this value is finite and strictly positive, so $\ell_*$ lies in the domain of the Wilsonian-action definition. Hence $S_W(\ell_*;\mu_W)=-\log Z_H(\ell_*)=-\log Z_H(J)=\Delta S_W(J)$. At zero source the normalized Gaussian integral is $1$, so this is also the source-induced action increment with zero baseline; no determinant factor remains. [A1, A3, F2, F5, given, step 1.1, algebra]

3.1 By [F4] and step 2.1, the heavy Gaussian effective-action contribution equals $\Delta S_W(J)$. Apply [F6] to the band-limited source $J=P_EJ$ and the positive operator verified in step 1.1; its vector and action inequalities are the two displayed remainder bounds. When the additional condition $E<M$ holds, the factor $E^2/M^2$ is less than one and the bound decreases geometrically with $N$. This conclusion is conditional and remains within the finite Gaussian sector. [A1, A2, F3, F4, F6, given, step 1.1, step 2.1] ∎
