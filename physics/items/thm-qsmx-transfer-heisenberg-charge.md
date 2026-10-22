---
id: thm-qsmx-transfer-heisenberg-charge
kind: theorem
title: Logarithmic derivative is periodic exchange
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsmx-rational-monodromy
  - lem-qsmx-transfer-regular-point
  - thm-qsmx-transfer-commutativity
dependency_roles:
  def-qsmx-rational-monodromy: mathematical-premise
  lem-qsmx-transfer-regular-point: mathematical-premise
  thm-qsmx-transfer-commutativity: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "Section 3, PDF pp. 9–10, equations (61)–(65): logarithmic derivative and spin-half Heisenberg Hamiltonian."
    - title: "Classical and Quantum Integrable Systems, Lecture 15: The algebraic Bethe ansatz"
      url: "https://vu-ff.github.io/integrability/en/lectures/15/"
      locator: "Section 15.2, Proposition 15.3: logarithmic derivative gives the periodic exchange operator and commutes with the transfer family."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Use the periodic convention $P_{N,N+1}:=P_{N,1}$. The rational transfer
matrix satisfies
$$i\,t'(0)t(0)^{-1}=\sum_{j=1}^N P_{j,j+1}.$$
Consequently, for real $J,c$, the finite matrix
$$H_N:=J\sum_{j=1}^N P_{j,j+1}+cI$$
is Hermitian and commutes with every $t(u)$. If $H_N$ is interpreted as a
physical energy in the stated QSM convention, $J$ and $c$ are in joules.
For the Pauli matrices
$$X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},$$
the adjacent swap on $V\otimes V$ is
$$P=\frac{I+X\otimes X+Y\otimes Y+Z\otimes Z}{2}.$$

## Statement references

[Faddeev, §3, equations (61)–(65)](https://arxiv.org/pdf/hep-th/9605187)

[Classical and Quantum Integrable Systems, Lecture 15, §15.2](https://vu-ff.github.io/integrability/en/lectures/15/)

## Facts & Assumptions

**Given:** $N\ge3$, real scalars $J,c$, and the ordered monodromy of
[[def-qsmx-rational-monodromy]]. A real scalar multiple of a matrix is taken
over $\mathbb C$.

[F1] [[def-qsmx-rational-monodromy]]: $P_{jk}$ swaps sites $j,k$ on
$V_N$; the definition of $P_{aj}$ is the flip of the auxiliary factor and
site $j$.

[F2] [[lem-qsmx-transfer-regular-point]]: $t(0)$ is invertible and
$i\,t'(0)t(0)^{-1}=\sum_{j=1}^N P_{j,j+1}$ with periodic bonds.

[F3] [[thm-qsmx-transfer-commutativity]]: $[t(u),t(v)]=0$ for every
$u,v\in\mathbb C$.

## Proof

1.1 Fix $u\in\mathbb C$. Differentiate $[t(u),t(v)]=0$ from [F3] with
respect to $v$ at $v=0$; the entries are polynomials, so this gives
$[t(u),t'(0)]=0$. Also $[t(u),t(0)]=0$. Since $t(0)$ is invertible by [F2],
multiplying $t(u)t(0)=t(0)t(u)$ on the left and right by $t(0)^{-1}$ shows
$[t(u),t(0)^{-1}]=0$. Therefore $t(u)$ commutes with
$t'(0)t(0)^{-1}$. [given, F2, F3, algebra]

2.1 Substitute [F2] into step 1.1 and multiply by the scalar $iJ$. The sum
$\sum_jP_{j,j+1}$ therefore commutes with every $t(u)$, and so does
$H_N=J\sum_jP_{j,j+1}+cI$, since scalar multiples of the identity commute
with all endomorphisms. [given, F2, step 1.1, algebra]

3.1 Each $P_{j,j+1}$ is a real permutation matrix with $P_{j,j+1}^2=I$;
therefore $P_{j,j+1}^*=P_{j,j+1}^{-1}=P_{j,j+1}$, so the real linear
combination $H_N$ is Hermitian. On the ordered basis
$|\uparrow\uparrow\rangle,|\uparrow\downarrow\rangle,
|\downarrow\uparrow\rangle,|\downarrow\downarrow\rangle$ of $V\otimes V$,
the swap $P$ fixes the first and fourth vectors and exchanges the middle two.
Direct multiplication of the displayed Pauli matrices gives
$$\begin{aligned} \tfrac12(I+X\otimes X+Y\otimes Y+Z\otimes Z)|\uparrow\uparrow\rangle&=|\uparrow\uparrow\rangle,\\ \tfrac12(I+X\otimes X+Y\otimes Y+Z\otimes Z)|\downarrow\downarrow\rangle&=|\downarrow\downarrow\rangle,\\ \tfrac12(I+X\otimes X+Y\otimes Y+Z\otimes Z)|\uparrow\downarrow\rangle&=|\downarrow\uparrow\rangle,\\ \tfrac12(I+X\otimes X+Y\otimes Y+Z\otimes Z)|\downarrow\uparrow\rangle&=|\uparrow\downarrow\rangle. \end{aligned}$$
These four vectors form a basis, so the displayed Pauli operator equals $P$.
[given, F1, algebra] ∎

