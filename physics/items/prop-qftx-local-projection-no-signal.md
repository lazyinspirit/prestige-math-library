---
id: prop-qftx-local-projection-no-signal
kind: proposition
title: Local trace-preserving operations preserve commuting expectations
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-countable-choice
  - def-qft-finite-bounded-kraus-instrument
  - lem-nrqm-composites-nuclear-bounded-cyclicity
  - lem-qft-finite-instrument-normalization
  - lem-qft-scalar-local-weyl-algebra
  - lem-qftx-free-locality
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-finite-bounded-kraus-instrument: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-qft-finite-instrument-normalization: mathematical-premise
  lem-qft-scalar-local-weyl-algebra: mathematical-premise
  lem-qftx-free-locality: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Bär, Nicolas Ginoux, and Frank Pfäffle, Wave Equations on Lorentzian Manifolds and Quantization
      url: https://arxiv.org/pdf/0806.1036
      locator: Chapter 4 §4.3, algebraic locality and the induced free-field net, printed pp. 127–130.
    - title: Christopher J. Fewster and Katarzyna Rejzner, Algebraic Quantum Field Theory—an introduction
      url: https://arxiv.org/pdf/1904.04051v2
      locator: §4.1 A5 and §4.2, equations (23)–(33), local algebras, covariance and free scalar Weyl generators, printed pp. 13–18.
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
      locator: §2.3.1, Kraus representations and measurements, equations 2.199–2.202; §2.3.2, partial measurements, equations 2.224–2.228.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume Countable Choice. Let $H$ be a nonzero complex Hilbert space and let $\mathcal A,\mathcal B\subseteq\mathcal B(H)$ be unital $*$-subalgebras (each contains $I_H$ and is closed under adjoints and linear combinations) such that $AC=CA$ for every $A\in\mathcal A$ and $C\in\mathcal B$. Let $M_1,\ldots,M_n\in\mathcal A$ be a finite family, $n\ge1$, satisfying
$$\sum_{r=1}^n M_r^*M_r=I_H.$$
For any state $\omega$ on $\mathcal B(H)$, meaning a complex-linear functional with $\omega(I_H)=1$ and $\omega(X^*X)\in[0,\infty)$ for every $X\in\mathcal B(H)$, define the nonselective expectation on $C\in\mathcal B$ by
$$\omega'(C):=\sum_{r=1}^n\omega(M_r^*CM_r).$$
Then $\omega'(C)=\omega(C)$ for every $C\in\mathcal B$. This is an algebraic conditional deduction; it does not assert that a physical apparatus realizes these operators.

For the finite flat scalar mass-shell representation of [[lem-qft-scalar-local-weyl-algebra]], open regions whose point differences are all spacelike have commuting local Weyl algebras, so the proposition applies to those two algebras. The proposition itself only assumes the stated commutation relation and does not require a tensor-product factorization of $H$.

## Statement references

[[lem-qft-scalar-local-weyl-algebra]]

[[def-qft-finite-bounded-kraus-instrument]]

[[lem-qft-finite-instrument-normalization]]

[[lem-nrqm-composites-nuclear-bounded-cyclicity]]

[[lem-qftx-free-locality]]

## Facts & Assumptions

**Given:** Countable Choice, a nonzero complex Hilbert space $H$, commuting unital $*$-subalgebras $\mathcal A,\mathcal B\subseteq\mathcal B(H)$, a finite normalized family $M_1,\ldots,M_n\in\mathcal A$, a state $\omega$, and $C\in\mathcal B$.

[A1] Assume $\mathrm{AC}_\omega$ as stated in [[def-countable-choice]]; it is needed for the cited Hilbert-adjoint and instrument interfaces.

[F1] [[def-qft-finite-bounded-kraus-instrument]]: a finite bounded Kraus family is normalized when $\sum_{a,r}M_{a,r}^*M_{a,r}=I_H$; for one outcome this is $\sum_rM_r^*M_r=I_H$.

[F2] [[lem-qft-finite-instrument-normalization]]: for a normalized finite bounded instrument and density operator $\rho$, the nonselective output $\sum_a\mathcal J_a(\rho)$ is a density operator, and the outcome probabilities sum to one. Thus its one-outcome case is a trace-preserving finite operation of the stated Kraus form.

[F3] [[lem-nrqm-composites-nuclear-bounded-cyclicity]]: for bounded $B$ and trace-class $T$, $BT$ and $TB$ are trace class and $\operatorname{tr}(BT)=\operatorname{tr}(TB)$.

[F4] [[lem-qft-scalar-local-weyl-algebra]]: in the flat scalar mass-shell Fock representation on open subsets of $\mathbb R^4$, the norm-closed local Weyl algebras commute when every point difference between the two open regions is spacelike. This fact is used only for the stated flat specialization.

[F5] [[lem-qftx-free-locality]]: on a Green-data background, causally disjoint open sets have commuting algebraic local Weyl subalgebras; the lemma does not assert existence of a Hilbert-space representation.

## Proof

1.1 Fix $C\in\mathcal B$. Since $\mathcal A$ and $\mathcal B$ commute elementwise and $M_r^*\in\mathcal A$, both $M_rC=CM_r$ and $M_r^*C=CM_r^*$ hold. Therefore
$$M_r^*CM_r=M_r^*M_rC.$$
Summing this equality over the finite family and using [F1] gives
$$\sum_{r=1}^nM_r^*CM_r=\left(\sum_{r=1}^nM_r^*M_r\right)C=I_HC=C.$$
This is an equality in $\mathcal B(H)$. [A1, F1, given, algebra]

2.1 By linearity of $\omega$ and the finite sum in the definition, step 1.1 yields
$$\omega'(C)=\sum_{r=1}^n\omega(M_r^*CM_r)=\omega\!\left(\sum_{r=1}^nM_r^*CM_r\right)=\omega(C).$$
When $\omega(X)=\operatorname{tr}(\rho X)$ for a density operator, put $\rho':=\sum_rM_r\rho M_r^*$. The cyclic trace identity [F3] gives $\operatorname{tr}(\rho' C)=\sum_r\operatorname{tr}(\rho M_r^*CM_r)=\omega'(C)$, and [F2] identifies $\rho'$ as the normalized one-outcome output of the finite instrument. Fact [F4] gives a flat scalar local-algebra instance of the commuting hypothesis; [F5] gives the corresponding abstract Green-background locality statement. Whenever a $*$-representation of those algebras is defined, it preserves the commutation equality because it preserves products. [A1, F2, F3, F4, F5, step 1.1, given, algebra] ∎

## Remarks

A selective outcome is conditioned on one Kraus branch and need not preserve the remote expectation. The equality proved here concerns the sum over all outcomes. No measurement postulate, apparatus model, or empirical signal is asserted.
