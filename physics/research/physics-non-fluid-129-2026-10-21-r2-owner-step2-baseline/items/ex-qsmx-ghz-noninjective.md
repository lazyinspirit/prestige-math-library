---
id: ex-qsmx-ghz-noninjective
kind: example
title: GHZ transfer has persistent connected correlations
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsmx-mps-and-transfer
  - def-qsmx-transfer-infinite-state
  - def-countable-choice
dependency_roles:
  def-qsmx-mps-and-transfer: mathematical-premise
  def-qsmx-transfer-infinite-state: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: D. Pérez-García, F. Verstraete, M. M. Wolf, and J. I. Cirac, Matrix Product State Representations, §2.3
      url: https://arxiv.org/pdf/quant-ph/0608197
    - title: Grégoire Misguich, Introduction to matrix-product states and tensor networks, §§2.3.1 and 2.5.3
      url: https://arxiv.org/pdf/2606.24803
---

## Example

Assume Countable Choice. Use the standard inner product on $\mathbb C^2$ and its ordered basis $|0\rangle,|1\rangle$. For each integer $N\ge2$, index the factors cyclically modulo $N$ and let $A^0=|0\rangle\langle0|=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $A^1=|1\rangle\langle1|=\begin{pmatrix}0&0\\0&1\end{pmatrix}$. The periodic trace contraction has amplitude $\operatorname{tr}(A^{i_1}\cdots A^{i_N})$ on basis vector $|i_1\cdots i_N\rangle$ and equals $|0^N\rangle+|1^N\rangle$; after normalization it is the GHZ vector $(|0^N\rangle+|1^N\rangle)/\sqrt2$. The transfer map fixes both diagonal matrix units and annihilates both off-diagonal matrix units. With $\rho=I_2/2$ and $\ell=I_2$, the associated infinite transfer state has $\omega(Z_1)=0$ and $\omega(Z_1I^{\otimes g}Z_{g+2})=1$ for every integer gap $g\ge0$, where $Z=|0\rangle\langle0|-|1\rangle\langle1|$ acts on one site. Thus its connected $Z$ correlation is exactly $1$ at every gap and does not decay.

## Example references

[[def-qsmx-mps-and-transfer]]

[[def-qsmx-transfer-infinite-state]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, the two matrices $A^0,A^1$, a ring length $N\ge2$, the one-site observable $Z$, and the positive matrices $\rho=I_2/2$, $\ell=I_2$.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice function, as assumed by the infinite transfer-state construction.

[F1] [[def-qsmx-mps-and-transfer]]: the tensor matrices have finite dimension and their transfer map is $\mathcal E(X)=\sum_{i=0}^1A^iXA^{i*}$.

[F2] [[def-qsmx-transfer-infinite-state]]: the state is defined by $\omega(O)=\operatorname{tr}(\ell\mathcal E_O(\rho))$, and insertions on separated blocks compose with $\mathcal E^g$ for a gap of $g$ identity sites.

## Verification

1.1 Each $A^i$ is the diagonal projection $E_{ii}$. A product $A^{i_1}\cdots A^{i_N}$ is zero if the word contains both $0$ and $1$, and is $E_{00}$ or $E_{11}$ for the two constant words. Its trace is therefore one exactly for those two words and zero otherwise, proving the unnormalized periodic vector formula. The two basis vectors $|0^N\rangle$ and $|1^N\rangle$ are orthonormal, so its squared norm is $2$ and the stated normalization follows. [given, F1, algebra]

2.1 On the matrix-unit basis, $\mathcal E(E_{00})=E_{00}$, $\mathcal E(E_{11})=E_{11}$, and $\mathcal E(E_{01})=\mathcal E(E_{10})=0$; hence its eigenvalue $1$ has algebraic multiplicity exactly two. Also $\mathcal E(\rho)=\rho$, $\mathcal E^*(\ell)=\ell$, and $\operatorname{tr}(\ell\rho)=1$, so [F2] applies under [A1]. The insertion for $Z$ is $\mathcal E_Z(X)=A^0XA^{0*}-A^1XA^{1*}$, whence $\mathcal E_Z(\rho)=(E_{00}-E_{11})/2$, $\mathcal E^g\mathcal E_Z(\rho)=\mathcal E_Z(\rho)$, and $\mathcal E_Z\mathcal E^g\mathcal E_Z(\rho)=I_2/2$. Therefore $\omega(Z_1)=\operatorname{tr}(\ell\mathcal E_Z(\rho))=0$ and $\omega(Z_1I^{\otimes g}Z_{g+2})=\operatorname{tr}(\ell I_2/2)=1$ for every $g\ge0$. Subtracting the product of the one-point expectations gives connected correlation $1$. [given, A1, F1, F2, step 1.1, algebra] ∎
