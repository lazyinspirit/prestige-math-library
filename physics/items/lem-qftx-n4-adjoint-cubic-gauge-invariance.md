---
id: lem-qftx-n4-adjoint-cubic-gauge-invariance
kind: lemma
title: Gauge invariance of the adjoint cubic superpotential
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-extended-actions
deps:
  - def-qftx-n1-chiral-superfield
  - def-qftx-superspace-grassmann-algebra
dependency_roles:
  def-qftx-n1-chiral-superfield: mathematical-premise
  def-qftx-superspace-grassmann-algebra: mathematical-premise
physical_scope: "Pure matrix algebra over the even chiral coefficient ring with a specified conjugation action and trace form; no physical premise is used."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "Eric D'Hoker and D.H. Phong, Lectures on Supersymmetric Yang-Mills Theory and Integrable Systems"
      url: "https://arxiv.org/pdf/hep-th/9912271v1"
      locator: "§§2.4 and 2.9–2.10: N=4 adjoint field content, the renormalizable action, and its cubic invariant."
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§4.9, printed pp. 45–48: non-Abelian gauge transformations and gauge-invariant chiral field-strength terms."
---

## Statement

Let $\mathscr R$ be the commutative ring of even smooth chiral superfields on the specified flat superspace, with the supercommutative complex coefficient algebra of the superspace definition. Let $\Phi_1,\Phi_2,\Phi_3$ be traceless $2\times2$ matrices over $\mathscr R$. Use $[X,Y]=XY-YX$ and the complex-bilinear trace form $\kappa_{\mathbb C}(X,Y)=-2\operatorname{Tr}_2(XY)$, where $\operatorname{Tr}_2 A=\sum_{j=1}^2 A_{jj}$. Suppose a supplied invertible even chiral matrix $U\in GL_2(\mathscr R)$ acts simultaneously by $\Phi_i'=U\Phi_iU^{-1}$. Then the even chiral cubic polynomial $\kappa_{\mathbb C}(\Phi_1,[\Phi_2,\Phi_3])$ and every constant multiple are invariant. This includes the substitution $U=e^{i\Lambda}$ whenever the given even chiral parameter defines that invertible chiral matrix. The trace form restricts to the real form $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$ on the explicitly defined real Lie algebra of anti-Hermitian traceless complex $2\times2$ matrices. No physical model, gauge measure or extended-supersymmetry premise is used.

## Statement references

[[def-qftx-n1-chiral-superfield]]

[[def-qftx-superspace-grassmann-algebra]]

## Facts & Assumptions

**Given:** The even chiral matrices, inverse and simultaneous conjugation action in the Lemma, together with the displayed definitions of bracket and trace form.

[F1] [[def-qftx-n1-chiral-superfield]]: even smooth chiral superfields obey $\bar D_{\dot\alpha}f=0$ on the classical coefficient-function domain.

[F2] [[def-qftx-superspace-grassmann-algebra]]: the coefficients are supercommutative and the odd derivatives obey the graded Leibniz rule; even coefficients commute without signs.

## Proof

1.1 Products and sums of even chiral entries remain even and chiral by [F1] and the Leibniz rule in [F2]. Differentiating $UU^{-1}=I$ and using $\bar D U=0$ gives $\bar D(U^{-1})=0$. Thus the substitutions and all polynomial products are defined in the commutative even chiral ring. For matrices $A,B$ over that ring, index expansion gives $\operatorname{Tr}_2(AB)=\sum_{i,j}A_{ij}B_{ji}=\sum_{j,i}B_{ji}A_{ij}=\operatorname{Tr}_2(BA)$. In particular $\operatorname{Tr}_2(UAU^{-1})=\operatorname{Tr}_2(A)$, so tracelessness is preserved. [given, F1, F2, algebra]

2.1 Associativity and inverse cancellation give $[U\Phi_2U^{-1},U\Phi_3U^{-1}]=U[\Phi_2,\Phi_3]U^{-1}$. Hence the transformed cubic is $-2\operatorname{Tr}_2(U\Phi_1[\Phi_2,\Phi_3]U^{-1})=-2\operatorname{Tr}_2(\Phi_1[\Phi_2,\Phi_3])$ by step 1.1. Every constant multiple is likewise invariant. Restricting the same formula to anti-Hermitian traceless ordinary complex matrices gives exactly the stated real trace form; no physical supplier is needed for this restriction. [given, step 1.1, algebra] ∎
