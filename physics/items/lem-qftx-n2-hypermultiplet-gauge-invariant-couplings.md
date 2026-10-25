---
id: lem-qftx-n2-hypermultiplet-gauge-invariant-couplings
kind: lemma
title: Gauge invariance of hypermultiplet mass and adjoint couplings
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
physical_scope: "Pure algebra over the even chiral coefficient ring; no physical model, quantum measure or empirical premise is used."
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
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§4.9, printed pp. 45–48: non-Abelian chiral-matter transformations and the gauge-covariant superspace action."
    - title: "Eric D'Hoker and D.H. Phong, Lectures on Supersymmetric Yang-Mills Theory and Integrable Systems"
      url: "https://arxiv.org/pdf/hep-th/9912271v1"
      locator: "§2.9, equation (2.60): the N=2 hypermultiplet superpotential coupling and mass term."
---

## Statement

Let $\mathscr R$ be the ring of even smooth chiral superfields on the specified flat superspace, with coefficients in the finite-dimensional supercommutative complex algebra of the superspace definition. Thus $\bar D_{\dot\alpha}f=0$ for $f\in\mathscr R$; its even elements commute. Fix an integer $n\geq1$, identify a specified based complex vector space $E$ with $\mathbb C^n$ and its dual with row vectors, and take $Q\in\mathscr R^n$, $\widetilde Q\in(\mathscr R^n)^*$ and $M\in M_n(\mathscr R)$. Suppose an invertible even chiral matrix $U\in GL_n(\mathscr R)$ acts by the explicitly supplied substitutions

$$Q'=UQ,\qquad \widetilde Q'=\widetilde Q U^{-1},\qquad M'=UMU^{-1}.$$

Then the chiral polynomials $\widetilde Q Q$ and $\widetilde Q M Q$ are invariant. In particular $\sqrt2\,\widetilde Q M Q+m\widetilde Q Q$ is invariant for every constant $m\in\mathbb C$. Assigning the formal degrees $[Q]=[\widetilde Q]=[M]=[m]=1$ makes this sum homogeneous of degree three. These are algebraic claims about the supplied action; they require no physical model or asserted supersymmetry realization. For the application $M=\rho_{R*}(\Phi)$, the same conclusion holds whenever that represented adjoint field has the stated conjugation law.

## Statement references

[[def-qftx-n1-chiral-superfield]]

[[def-qftx-superspace-grassmann-algebra]]

## Facts & Assumptions

**Given:** The based finite-dimensional space, even chiral fields, invertible matrix and three substitution laws in the Lemma.

[F1] [[def-qftx-n1-chiral-superfield]]: smooth even chiral superfields satisfy $\bar D_{\dot\alpha}f=0$ on their common classical coefficient-function domain.

[F2] [[def-qftx-superspace-grassmann-algebra]]: homogeneous coefficients satisfy the supercommutative sign rule and the odd derivatives satisfy the graded Leibniz rule; in particular even coefficients commute.

## Proof
1.1 By [F1] and [F2], sums and products of even chiral fields are even and chiral, so they form a commutative ring. From $UU^{-1}=I$, differentiating by $\bar D_{\dot\alpha}$ gives $U\bar D_{\dot\alpha}(U^{-1})=0$ since $U$ is even and chiral; multiplying by $U^{-1}$ shows its inverse is also chiral. Thus every displayed substitution is defined in the stated ring. [given, F1, F2, algebra]

2.1 Associativity and the dual inverse law give $\widetilde Q'Q'=\widetilde Q U^{-1}UQ=\widetilde Q Q$. The same calculation with the middle endomorphism gives $\widetilde Q'M'Q'=\widetilde Q U^{-1}(UMU^{-1})UQ=\widetilde Q M Q$. Both contractions are even chiral scalar fields by step 1.1. [given, step 1.1, algebra]

3.1 The constant linear combination is invariant by step 2.1. Its cubic term has formal degree $1+1+1=3$ and its mass term degree $1+1+1=3$. Substituting any represented adjoint field obeying the given conjugation law changes none of this algebra. [given, step 2.1, algebra] ∎
