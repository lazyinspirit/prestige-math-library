---
id: ex-qftx-postselection-conditioning
kind: example
title: Bell-pair postselection changes a conditional remote expectation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
deps:
  - cor-finite-dimensional-normed-spaces-are-banach
  - def-countable-choice
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-hilbert-space-adjoint
  - def-space-of-bounded-linear-operators
  - prop-qftx-local-projection-no-signal
dependency_roles:
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-space-of-bounded-linear-operators: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume Countable Choice as in [[def-countable-choice]]. On $H=\mathbb C^2\otimes\mathbb C^2$, let
$$\psi=\frac{|00\rangle+|11\rangle}{\sqrt2},$$
where $e_0=(1,0)$ and $e_1=(0,1)$ are the standard orthonormal basis of $\mathbb C^2$, $j,a,b,c,d\in\{0,1\}$, $|j\rangle:=e_j$, and $|ab\rangle:=e_a\otimes e_b$. Give $H$ the inner product linear in the first argument and conjugate-linear in the second determined by $\langle e_a\otimes e_b,e_c\otimes e_d\rangle=1$ if $a=c$ and $b=d$, and $0$ otherwise, extended by these sesquilinearity rules. Let $I_H$ be the identity on $H$. For either $K=H$ or $K=\mathbb C^2$, write $\mathcal B(K)$ for the bounded complex-linear maps $K\to K$, with boundedness measured by the induced norm. Define the initial vector functional $\omega:\mathcal B(H)\to\mathbb C$ by $\omega(C):=\langle C\psi,\psi\rangle$. For $j\in\{0,1\}$ let $P_jx:=\langle x,e_j\rangle e_j$ for $x\in\mathbb C^2$; Alice uses the local projections
$$M_0=P_0\otimes I_2,\qquad M_1=P_1\otimes I_2,$$
where $I_2$ is the identity on $\mathbb C^2$. Bob's observable is $Z_B=I_2\otimes Z$, with $Z$ the linear operator determined by $Z|0\rangle=|0\rangle$ and
$Z|1\rangle=-|1\rangle$. Define the branch weight $p_j:=\|M_j\psi\|^2$ and,
when $p_j>0$, the normalized branch vector
$\psi_j:=M_j\psi/\sqrt{p_j}$. Each branch weight is $1/2$; conditional on
branch $0$ Bob's $Z_B$ expectation $\omega_j(Z_B):=\langle Z_B\psi_j,\psi_j\rangle$ is $+1$, and conditional on branch $1$ it is $-1$. The initial and nonselective $Z_B$ expectations are both zero. These
are finite-dimensional mathematical state calculations, not claims about an
apparatus or observed data.
## Statement references

[[prop-qftx-local-projection-no-signal]]

## Facts & Assumptions

**Given:** The two-factor Hilbert space with the displayed orthonormal basis and inner-product convention, the vector $\psi$, the projections $M_0,M_1$, and the operator $Z_B$.

[A1] Assume Countable Choice as stated in [[def-countable-choice]].

[F1] [[def-real-and-complex-inner-product-space]]: the inner product is linear in its first argument, conjugate-linear in its second, and induces the norm $\|x\|=\sqrt{\langle x,x\rangle}$.

[F2] [[prop-qftx-local-projection-no-signal]]: for a nonzero complex Hilbert space $H$, a state on $\mathcal B(H)$ is a complex-linear functional $\omega$ with $\omega(I_H)=1$ and $\omega(X^*X)\in[0,\infty)$ for every bounded $X$; for commuting unital $*$-subalgebras and a finite normalized family in one of them, the nonselective expectation of every element of the other equals its initial expectation.

[F3] [[def-hilbert-space]] and [[cor-finite-dimensional-normed-spaces-are-banach]]: a complex Hilbert space is a complex inner-product space complete in its induced norm; the four displayed orthonormal basis vectors make $H$ finite-dimensional, so the induced norm is complete and $H$ is a nonzero Hilbert space. The same argument with $e_0,e_1$ makes $\mathbb C^2$ a Hilbert space.

[F4] [[def-space-of-bounded-linear-operators]]: $\mathcal B(K)$ is the set of bounded complex-linear operators $K\to K$ for each of the finite-dimensional Hilbert spaces $K=H,\mathbb C^2$ used here.

[F5] [[def-hilbert-space-adjoint]]: for bounded $X$ on a Hilbert space with the linear-first convention, $\langle Xx,y\rangle=\langle x,X^*y\rangle$.

## Proof

1.1 The four vectors $|ab\rangle$ are orthonormal, so $\|\psi\|^2=(1+1)/2=1$. By [F1], $\omega$ is complex-linear and $\omega(I_H)=1$. For every $X\in\mathcal B(H)$, adjointness [F5] and conjugate symmetry give $\omega(X^*X)=\langle X^*X\psi,\psi\rangle=\overline{\langle\psi,X^*X\psi\rangle}=\overline{\langle X\psi,X\psi\rangle}=\|X\psi\|^2\ge0$, so $\omega$ is a state in the sense of [F2]. The projections satisfy $M_0^*=M_0$, $M_1^*=M_1$, $M_0M_1=0$, and $M_0+M_1=I_H$. Hence $\sum_{j=0}^1M_j^*M_j=I_H$, and
$$M_0\psi=\frac{|00\rangle}{\sqrt2},\qquad M_1\psi=\frac{|11\rangle}{\sqrt2}.$$
The outcome probabilities are $p_j=\|M_j\psi\|^2=1/2$, so both normalized conditional vectors are defined. [F1, F2, F3, F4, F5, given, algebra]

2.1 Dividing the branch vectors in step 1.1 by $\sqrt{p_j}=1/\sqrt2$ gives $\psi_0=|00\rangle$ and $\psi_1=|11\rangle$. Since $Z_B|00\rangle=|00\rangle$ and $Z_B|11\rangle=-|11\rangle$, their conditional expectations are respectively $\omega_0(Z_B)=\langle Z_B\psi_0,\psi_0\rangle=+1$ and $\omega_1(Z_B)=\langle Z_B\psi_1,\psi_1\rangle=-1$. Also
$$Z_B\psi=\frac{|00\rangle-|11\rangle}{\sqrt2},\qquad \omega(Z_B)=\langle Z_B\psi,\psi\rangle=\left\langle\frac{|00\rangle-|11\rangle}{\sqrt2},\frac{|00\rangle+|11\rangle}{\sqrt2}\right\rangle=0,$$
because the cross terms vanish by orthogonality. [F1, step 1.1, given, algebra]

3.1 Let $\mathcal A:=\{A\otimes I_2:A\in\mathcal B(\mathbb C^2)\}$ and $\mathcal B:=\{I_2\otimes B:B\in\mathcal B(\mathbb C^2)\}$. For every elementary tensor $u\otimes v$, $(A\otimes I_2)(I_2\otimes B)(u\otimes v)=Au\otimes Bv=(I_2\otimes B)(A\otimes I_2)(u\otimes v)$; elementary tensors span $H$, so these unital $*$-algebras commute. The two projections lie in $\mathcal A$ and the normalization was checked in step 1.1. Applying [F2] to the state proved in step 1.1 and $C=Z_B$ gives the nonselective expectation $\sum_j\omega(M_j^*Z_BM_j)=\sum_j\langle M_j^*Z_BM_j\psi,\psi\rangle=\omega(Z_B)=\langle Z_B\psi,\psi\rangle=0$. Equivalently, the probability-weighted conditional values from step 2.1 average to $(1/2)(+1)+(1/2)(-1)=0$. Thus post-selection changes the conditional remote expectation in either branch, while retaining and averaging the outcomes leaves the original remote marginal unchanged. [A1, F1, F2, F4, step 1.1, step 2.1, given, algebra] ∎

## Remarks

The branch states are conditional on the reported local outcome. Their different remote expectations do not give a nonselective signal; the outcome-averaged identity is the algebraic conclusion of [[prop-qftx-local-projection-no-signal]].
