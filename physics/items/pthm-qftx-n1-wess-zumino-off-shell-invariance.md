---
id: pthm-qftx-n1-wess-zumino-off-shell-invariance
kind: physics-theorem
title: Off-shell N=1 supersymmetry of the Wess–Zumino sigma-model action
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions
axiom_base: "ZF; the proof uses finite Grassmann coefficient algebra and smooth calculus, with no choice principle."
deps:
  - post-qftx-n1-wess-zumino-model
  - def-qftx-n1-chiral-superfield
  - lem-qftx-n1-chiral-superspace-identities
  - def-qftx-superspace-grassmann-algebra
dependency_roles:
  post-qftx-n1-wess-zumino-model: physical-assumption
  def-qftx-n1-chiral-superfield: mathematical-premise
  lem-qftx-n1-chiral-superspace-identities: mathematical-premise
  def-qftx-superspace-grassmann-algebra: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional classical supersymmetry and off-shell closure for the adopted rigid N=1 chiral sigma-model action on flat four-dimensional Minkowski spacetime, for smooth compactly supported component fields and the stated Kähler patch. No gauge, supergravity, quantum, continuum-limit, or empirical conclusion is asserted."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§3.1, §3.2, §§4.1–4.2, and §4.7, printed pp. 18–24 and 31–42: auxiliary-field off-shell closure, chiral interactions, Berezin total derivatives, superspace translations, and chiral-superfield actions."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§4.3, printed pp. 21–22, equations (4.26)–(4.28), and §7.1, printed pp. 43–46: superspace total-derivative invariance and the Kähler sigma-model action."
verification:
  precheck: pending
---

## Statement

Use the rigid N=1 Wess–Zumino sigma-model postulate on $M=\mathbb R^{1,3}$ with $\eta=\operatorname{diag}(-1,1,1,1)$, Kähler coordinate patch $U\subseteq\mathbb C^n$, smooth positive metric $g_{i\bar j}=\partial_i\partial_{\bar j}K$, holomorphic superpotential $W$, and full formal components $a^i,\mathcal F^i:M\to\mathcal G_{\bar0}$ and $\psi^i_\alpha:M\to\mathcal G_{\bar1}$ with coefficientwise compact support on $M$, using the involution and parameter conventions of the postulate. The scalar body lies in $U$. Under the global supersymmetry variation $\delta\Phi^i=(\epsilon^\alpha Q_\alpha+\bar\epsilon^{\dot\alpha}\bar Q_{\dot\alpha})\Phi^i$ with constant Grassmann-odd parameters and the fixed chiral-superfield supercharges, the variation of the adopted superspace Lagrangian is a spacetime divergence; consequently $\delta S_{\mathrm{WZ}}=0$. The supercharges satisfy $\{Q_\alpha,Q_\beta\}=0$, $\{\bar Q_{\dot\alpha},\bar Q_{\dot\beta}\}=0$, and $\{Q_\alpha,\bar Q_{\dot\beta}\}=2i\sigma^\mu_{\alpha\dot\beta}\partial_\mu$. Their induced transformations on the scalar, Weyl-fermion, and auxiliary components close on translations without using equations of motion, with the auxiliary fields retained.

## Statement references

[Stephen P. Martin, *A Supersymmetry Primer*, §3.1, §3.2, §§4.1–4.2, and §4.7](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §4.3 and §7.1](https://arxiv.org/pdf/hep-th/0101055).

[[post-qftx-n1-wess-zumino-model]]

[[def-qftx-n1-chiral-superfield]]

[[lem-qftx-n1-chiral-superspace-identities]]

[[def-qftx-superspace-grassmann-algebra]]

## Facts & Assumptions

**Given:** The adopted action, Kähler patch, holomorphic superpotential, and compactly supported component fields from the Statement.

[A1] [[post-qftx-n1-wess-zumino-model]]: $S_{\mathrm{WZ}}=\int d^4x\{[K(\bar\Phi,\Phi)]_D+[W(\Phi)]_F+\mathrm{h.c.}\}$ with physical brackets $[U]_D=-I_D(U)/4$, $[Y]_F=I_F(Y)/2$, and Hermitian conjugation only on the F action; the full components are smooth coefficient maps with compact support on spacetime, and the explicitly defined involution reverses products; the supersymmetry parameters are constant and odd, with the conjugation-compatible real convention as specified there.

[F1] [[def-qftx-n1-chiral-superfield]]: a chiral superfield is a smooth element of $C^\infty(\mathbb R^{1,3},\mathcal A\otimes\Lambda_4)$ with unique component expansion in the nilpotently shifted coordinate $y=x+i\theta\sigma\bar\theta$; $Q_\alpha=\partial^L_{\theta^\alpha}-i\sigma^\mu_{\alpha\dot\beta}\bar\theta^{\dot\beta}\partial_\mu$ and $\bar Q_{\dot\alpha}=-\partial^L_{\bar\theta^{\dot\alpha}}+i\theta^\beta\sigma^\mu_{\beta\dot\alpha}\partial_\mu$.

[F2] [[lem-qftx-n1-chiral-superspace-identities]]: the chiral constraint is $\bar D_{\dot\alpha}\Phi=0$; in $(y,\theta,\bar\theta)$ coordinates this is independence of $\bar\theta$, and the supercharges anticommute with $\bar D$, so the supersymmetry variation preserves chirality.

[F3] [[def-qftx-superspace-grassmann-algebra]]: the four ordered odd generators form a finite basis, left derivatives obey the odd Leibniz rule, and the ordered Berezin measures extract the corresponding top coefficients.

## Proof
**Given:** [A1] and the superfield, differential-operator, and Berezin conventions in [F1]–[F3].

1.1 For any even smooth superspace function $X$, substitute the operators from [F1] into $\delta X$. Since the odd parameters are constant, the odd Leibniz rule gives $\epsilon^\alpha\partial^L_{\theta^\alpha}X=-\partial^L_{\theta^\alpha}(\epsilon^\alpha X)$ and $-\bar\epsilon^{\dot\alpha}\partial^L_{\bar\theta^{\dot\alpha}}X=\partial^L_{\bar\theta^{\dot\alpha}}(\bar\epsilon^{\dot\alpha}X)$. The remaining terms are ordinary spacetime derivatives, so $\delta X=-\partial^L_{\theta^\alpha}(\epsilon^\alpha X)+\partial^L_{\bar\theta^{\dot\alpha}}(\bar\epsilon^{\dot\alpha}X)+\partial_\mu(-i\epsilon^\alpha\sigma^\mu_{\alpha\dot\beta}\bar\theta^{\dot\beta}X+i\bar\epsilon^{\dot\alpha}\theta^\beta\sigma^\mu_{\beta\dot\alpha}X)$. [A1, F1, F3, algebra]

1.2 For a chiral superfield $X(y,\theta)$, use $y=x+i\theta\sigma\bar\theta$ and the left-derivative rules in [F1]–[F3]. The chain rule gives $Q_\alpha=\partial^L_{\theta^\alpha}|_y$ and $\bar Q_{\dot\alpha}=-\partial^L_{\bar\theta^{\dot\alpha}}|_y+2i\theta^\beta\sigma^\mu_{\beta\dot\alpha}\partial_{y^\mu}$. Since $X$ is independent of $\bar\theta$, $\delta X=\epsilon^\alpha\partial^L_{\theta^\alpha}X+2i\bar\epsilon^{\dot\alpha}\theta^\beta\sigma^\mu_{\beta\dot\alpha}\partial_\mu X$. [F1, F2, F3, algebra]

1.3 Expand the supercharge anticommutators from [F1]. The only nonzero terms in $\{Q_\alpha,\bar Q_{\dot\beta}\}$ are $\{\partial^L_{\theta^\alpha},i\theta^\gamma\sigma^\mu_{\gamma\dot\beta}\partial_\mu\}=i\sigma^\mu_{\alpha\dot\beta}\partial_\mu$ and $\{-i\sigma^\mu_{\alpha\dot\gamma}\bar\theta^{\dot\gamma}\partial_\mu,-\partial^L_{\bar\theta^{\dot\beta}}\}=i\sigma^\mu_{\alpha\dot\beta}\partial_\mu$. Terms with two odd coordinates cancel under symmetrization, and derivatives in distinct generators anticommute by [F3]. Hence $\{Q_\alpha,\bar Q_{\dot\beta}\}=2i\sigma^\mu_{\alpha\dot\beta}\partial_\mu$ and both same-chirality anticommutators are zero. [F1, F3, algebra]

2.1 Apply step 1.1 to the even D-term integrand $X=K(\bar\Phi,\Phi)$, whose finite nilpotent Taylor expansion is smooth. Each odd-coordinate derivative has zero top coefficient in the ordered Grassmann basis from [F3], so its Berezin integral vanishes. The spacetime-divergence term integrates to zero because the field-dependent part of $K$ is compactly supported and its constant exterior value has zero supersymmetry variation. The fixed physical factor $-1/4$ multiplies zero, so the D-term action is invariant. [A1, F3, step 1.1]

3.1 The first term in step 1.2 integrates to zero under $d^2\theta$ by the same coefficient-extraction calculation as step 2.1. The second is the spacetime divergence $\partial_\mu(2i\bar\epsilon^{\dot\alpha}\theta^\beta\sigma^\mu_{\beta\dot\alpha}X)$; compact support removes its boundary term. For the finite Taylor extension in the postulate, holomorphicity $\partial_{\bar i}W=0$ and the odd derivation rule give the chain identity $\bar D_{\dot\alpha}W(\Phi)=\sum_i W_i(\Phi)\bar D_{\dot\alpha}\Phi^i=0$, because each $\Phi^i$ is chiral; hence $W(\Phi)$ is chiral. Complex conjugation gives the corresponding antichirality of its conjugate. The fixed physical factor $1/2$ and its conjugate preserve this zero variation, so the F-term action is invariant. [A1, F1, F2, F3, step 1.2, algebra]

4.1 By [F2], the transformations preserve the chiral constraint, so the transformed field has the unique component expansion in [F1]. Coefficient extraction is linear; therefore the operator identities in step 1.3 induce the same translation algebra on every full formal component, including the independent even auxiliary coefficient $\mathcal F^i$. Products of odd parameters and odd component maps remain in $\mathcal G_{\bar0}$, and derivatives preserve coefficientwise compact support; thus this argument does not restrict the auxiliary coefficient to $\mathbb C$ or assert closure on the bosonic slice. No Euler–Lagrange equation was used, proving off-shell closure. [F1, F2, step 1.3] ∎
