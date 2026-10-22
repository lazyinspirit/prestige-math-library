---
id: ex-qftx-postselection-conditioning
kind: example
title: Bell-pair postselection changes a conditional remote expectation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-countable-choice
  - prop-qftx-local-projection-no-signal
dependency_roles:
  def-countable-choice: mathematical-premise
  prop-qftx-local-projection-no-signal: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
      locator: §2.3.1, equations 2.199–2.202; §2.3.2, partial measurement of one subsystem and conditional states, equations 2.224–2.228.
    - title: Davide Trevisan, Lecture Notes on Quantum Information Theory
      url: https://web.dm.unipi.it/trevisan/teaching/PhD/2022-qinfo/2022-Qinfo-notes.pdf
      locator: §2.2, printed pp. 5–7, projection outcome probabilities and normalized conditional states; §3.5, printed pp. 19–20, Kraus representation and normalization equations (3.5)–(3.7).
verification:
  precheck: pending
---

## Statement

Assume Countable Choice as in [[def-countable-choice]]. On $H=\mathbb C^2\otimes\mathbb C^2$, let
$$\psi=\frac{|00\rangle+|11\rangle}{\sqrt2},$$
where the first tensor factor is Alice's qubit and the second is Bob's; set
$\omega(C):=\langle\psi,C\psi\rangle$ for the initial vector state. Alice uses
the local projections
$$M_0=|0\rangle\langle0|\otimes I_2,\qquad M_1=|1\rangle\langle1|\otimes I_2,$$
and Bob's observable is $Z_B=I_2\otimes Z$, with $Z|0\rangle=|0\rangle$ and
$Z|1\rangle=-|1\rangle$. Define the branch weight $p_j:=\|M_j\psi\|^2$ and,
when $p_j>0$, the normalized branch vector
$\psi_j:=M_j\psi/\sqrt{p_j}$. Each branch weight is $1/2$; conditional on
branch $0$ Bob's $Z_B$ expectation is $+1$, and conditional on branch $1$ it
is $-1$. The initial and nonselective $Z_B$ expectations are both zero. These
are finite-dimensional mathematical state calculations, not claims about an
apparatus or observed data.
## Statement references

[[prop-qftx-local-projection-no-signal]]

## Facts & Assumptions

**Given:** The two-qubit Hilbert space with the displayed orthonormal basis, the unit vector $\psi$, Alice's projections $M_0,M_1$, and Bob's Pauli observable $Z_B$.

[A1] Assume Countable Choice as stated in [[def-countable-choice]].

[F1] [[prop-qftx-local-projection-no-signal]]: for a finite normalized family in one unital $*$-algebra commuting with a second, the sum of the unnormalized branch expectations of every observable in the second algebra equals its initial expectation.

## Proof

1.1 The four basis vectors are orthonormal, so $\|\psi\|^2=(1+1)/2=1$. The projections satisfy $M_0^*=M_0$, $M_1^*=M_1$, $M_0M_1=0$, and $M_0+M_1=I_H$. Hence $\sum_{j=0}^1M_j^*M_j=I_H$, and
$$M_0\psi=\frac{|00\rangle}{\sqrt2},\qquad M_1\psi=\frac{|11\rangle}{\sqrt2}.$$
The outcome probabilities are $p_j=\|M_j\psi\|^2=1/2$, so both normalized conditional vectors are defined. [given, algebra]

2.1 Dividing the branch vectors in step 1.1 by $\sqrt{p_j}=1/\sqrt2$ gives $\psi_0=|00\rangle$ and $\psi_1=|11\rangle$. Since $Z_B|00\rangle=|00\rangle$ and $Z_B|11\rangle=-|11\rangle$, their conditional expectations are respectively $\langle\psi_0,Z_B\psi_0\rangle=+1$ and $\langle\psi_1,Z_B\psi_1\rangle=-1$. Also
$$\langle\psi,Z_B\psi\rangle=\frac{\langle00|Z_B|00\rangle+\langle11|Z_B|11\rangle}{2}=0,$$
because the cross terms vanish by orthogonality. [step 1.1, given, algebra]

3.1 Let $\mathcal A:=\{A\otimes I_2:A\in\mathcal B(\mathbb C^2)\}$ and $\mathcal B:=\{I_2\otimes B:B\in\mathcal B(\mathbb C^2)\}$. For every elementary tensor $u\otimes v$, $(A\otimes I_2)(I_2\otimes B)(u\otimes v)=Au\otimes Bv=(I_2\otimes B)(A\otimes I_2)(u\otimes v)$; elementary tensors span $H$, so these unital $*$-algebras commute. The two projections lie in $\mathcal A$ and the normalization was checked in step 1.1. Applying [F1] to $C=Z_B$ gives the nonselective expectation $\sum_j\langle\psi,M_j^*Z_BM_j\psi\rangle=\langle\psi,Z_B\psi\rangle=0$. Equivalently, the probability-weighted conditional values from step 2.1 average to $(1/2)(+1)+(1/2)(-1)=0$. Thus post-selection changes the conditional remote expectation in either branch, while retaining and averaging the outcomes leaves the original remote marginal unchanged. [A1, F1, step 1.1, step 2.1, given, algebra] ∎

## Remarks

The branch states are conditional on the reported local outcome. Their different remote expectations do not give a nonselective signal; the outcome-averaged identity is the algebraic conclusion of [[prop-qftx-local-projection-no-signal]].
