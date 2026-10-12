---
id: thm-nrqm-orbital-and-spin-tsirelson-bound
aliases: [nrqm-orbital-and-spin-tsirelson-bound]
kind: theorem
domain: mathematics
title: "Tsirelson bound"
status: draft
origin: pipeline
dependency_level: 2
deps: [prop-nrqm-orbital-and-spin-finite-spin-matrices, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-chsh-and-finite-sampling-law, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-hilbert-space-adjoint, thm-hilbert-adjoint-properties, cor-operator-norm-submultiplicative-and-t-star-t-identity, def-linear-isometry-and-orthogonal-or-unitary-operator, def-inner-product-space, def-adjoint-of-a-linear-map-between-inner-product-spaces, cor-inner-product-induces-a-norm, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-countable-choice, lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form, def-self-adjoint-positive-unitary-and-normal-operator]
dependency_roles:
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-chsh-and-finite-sampling-law: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  cor-operator-norm-submultiplicative-and-t-star-t-identity: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani, S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014) 419, Section II.C.1.a (equation (31) and the operator identity S^2 = 4 + [A1,A2][B1,B2], giving ||S|| <= 2 sqrt 2) and Section II (CHSH inequality (4) and the classical bound S <= 2)"
      url: "https://arxiv.org/pdf/1303.2849"
    - title: "L. J. Landau, 'On the violation of Bell's inequality in quantum theory', Physics Letters A 120 (1987) 54-56 (operator derivation of the CHSH quantum bound), as reported and used in the review above; the operator square identity used here is verified directly in the proof"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H,K$ be complex Hilbert spaces
([[def-hilbert-space]]) and let $A_0,A_1\in\mathcal B(H)$, $B_0,B_1\in\mathcal B(K)$ be bounded self-adjoint
operators ([[def-bounded-linear-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]]) with
$A_i^2=I_H$ and $B_j^2=I_K$ ([[def-hilbert-space-adjoint]]). Let $H\widehat\otimes K$ be the completed tensor
product of [[lem-nrqm-composites-hilbert-tensor-construction]] and put

$$C:=A_0\otimes(B_0+B_1)+A_1\otimes(B_0-B_1)\in\mathcal B(H\widehat\otimes K).$$

Then:

(a) $C$ is self-adjoint and
$$C^2=4\,I_{H\widehat\otimes K}-[A_0,A_1]\otimes[B_0,B_1];$$

(b) $\|C^2\|\le8$ and $\|C\|\le2\sqrt2$ in the operator norm
([[def-operator-norm]], [[thm-hilbert-adjoint-properties]]);

(c) for all $\psi,\psi'\in H\widehat\otimes K$, $|\langle C\psi,\psi'\rangle|\le2\sqrt2\,\|\psi\|\,\|\psi'\|$
(this is the Tsirelson bound for the stated pair of binary sharp models); consequently the absolute value of the
CHSH combination of the four expectations $\langle(A_i\otimes B_j)\psi,\psi\rangle$ of a unit vector $\psi$ is at
most $2\sqrt2$;

(d) the bound is attained on $H=K=\mathbb C^2$: let $\sigma_x,\sigma_y,\sigma_z$ be the Pauli matrices of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]], let
$\Psi:=\frac1{\sqrt2}(e_+\otimes e_--e_-\otimes e_+)$ with the orthonormal basis $(e_+,e_-)$ of $\mathbb C^2$, put
$\sigma_a:=a_x\sigma_x+a_y\sigma_y+a_z\sigma_z$ for a unit vector $a\in\mathbb R^3$, and take
$A_0:=\sigma_z$, $A_1:=\sigma_x$, $B_0:=\sigma_{(z+x)/\sqrt2}$, $B_1:=\sigma_{(z-x)/\sqrt2}$; then
$\langle\sigma_a\otimes\sigma_b\Psi,\Psi\rangle=-a\cdot b$ for all unit $a,b$, and
$\langle C\Psi,\Psi\rangle=-2\sqrt2$, so $|\langle C\Psi,\Psi\rangle|=2\sqrt2$;

(e) a comparison with the stated local model: if in addition $A_0,A_1,B_0,B_1$ are four $\pm1$-valued random
variables on one probability space, then the absolute value of their CHSH combination is at most $2$
([[lem-nrqm-composites-chsh-and-finite-sampling-law]] (a)); this is a statement about that explicitly specified
common-outcome model, not about all theories, and it is not compared here with any reported experiment.

The theorem is a mathematical statement about bounded operators; no measurement, preparation or empirical claim
is asserted.

## Facts & Assumptions

**Given:** Countable Choice; complex Hilbert spaces $H,K$; self-adjoint involutions $A_0,A_1\in\mathcal B(H)$, $B_0,B_1\in\mathcal B(K)$; the completed tensor product $H\widehat\otimes K$; the operator $C$.

[F1] The completed tensor product is a complex Hilbert space containing the algebraic tensor product densely, and the elementary tensors $u\otimes v$ have inner products $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle\langle v,v'\rangle$; $\|u\otimes v\|=\|u\|\,\|v\|$ ([[lem-nrqm-composites-hilbert-tensor-construction]], [[def-hilbert-space]]).

[F2] For bounded $S,S'\in\mathcal B(H)$, $T,T'\in\mathcal B(K)$: $(S\otimes T)(S'\otimes T')=(SS')\otimes(TT')$, $S\otimes I_K$ and $I_H\otimes T$ commute, $(S\otimes T)^*=S^*\otimes T^*$, and $\|S\otimes T\|\le\|S\|\,\|T\|$; the identity operator on $H\widehat\otimes K$ is $I_H\otimes I_K$ ([[lem-nrqm-composites-bounded-tensor-maps]]).

[F3] For bounded operators on Hilbert spaces: the adjoint is additive and conjugate-linear, $(TS)^*=S^*T^*$, $T^{**}=T$, $\|T^*\|=\|T\|$ and $\|T^*T\|=\|T\|^2$; the operator norm is submultiplicative; and for a self-adjoint $T$ one has $\|T\|=\sup\{|\langle Tx,x\rangle|:\|x\|=1\}$ ([[thm-hilbert-adjoint-properties]], [[cor-operator-norm-submultiplicative-and-t-star-t-identity]], [[lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form]], [[def-operator-norm]]).

[F4] For a self-adjoint operator $T$ and all $\psi$, $|\langle T\psi,\psi'\rangle|\le\|T\|\,\|\psi\|\,\|\psi'\|$ by Cauchy–Schwarz; a self-adjoint operator with $T^2=I$ is a unitary involution ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[F5] The Pauli matrices are self-adjoint, $\sigma_i^2=I_2$, $\sigma_x\sigma_y=i\sigma_z$ and cyclically, and $\sigma_a$ for a unit vector $a$ is self-adjoint with $\sigma_a^2=I_2$, because $\sigma_a^2=\sum_{i,j}a_ia_j\sigma_i\sigma_j=\sum_i a_i^2I_2+\sum_{i\ne j}a_ia_j\sigma_i\sigma_j=\|a\|^2I_2$ by the anticommutation relations $\sigma_i\sigma_j+\sigma_j\sigma_i=2\delta_{ij}I_2$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]]).

[F6] If $A_0,A_1,B_0,B_1:\Omega\to\{-1,1\}$ are random variables on a probability space, then $|\mathbb E[A_0B_0]+\mathbb E[A_0B_1]+\mathbb E[A_1B_0]-\mathbb E[A_1B_1]|\le2$, with no choice principle used ([[lem-nrqm-composites-chsh-and-finite-sampling-law]] (a)).

[F7] A bounded self-adjoint involution is unitary, so $\|A_i\|=\|B_j\|=1$, and $\|A_0A_1\|\le\|A_0\|\|A_1\|=1$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).



## Proof

1.1 [Self-adjointness and the square identity] By [F2] and [F3], $(S\otimes T)^*=S^*\otimes T^*$ for the four tensor products entering $C$, so every summand is self-adjoint and $C^*=C$. Expanding the square with [F2] and [F7] (all operators below are bounded, so products may be reassociated), $C^2=\bigl(A_0\otimes(B_0+B_1)\bigr)^2+\bigl(A_1\otimes(B_0-B_1)\bigr)^2+\bigl(A_0\otimes(B_0+B_1)\bigr)\bigl(A_1\otimes(B_0-B_1)\bigr)+\bigl(A_1\otimes(B_0-B_1)\bigr)\bigl(A_0\otimes(B_0+B_1)\bigr)$; using $A_i^2=I$ and $B_j^2=I$ together with $(B_0+B_1)^2=2I+\{B_0,B_1\}$, $(B_0-B_1)^2=2I-\{B_0,B_1\}$, $(B_0+B_1)(B_0-B_1)=[B_1,B_0]$ and $(B_0-B_1)(B_0+B_1)=[B_0,B_1]$, the first two summands total $I_H\otimes(2I_K+\{B_0,B_1\})+I_H\otimes(2I_K-\{B_0,B_1\})=4I_{H\widehat\otimes K}$, while the cross terms total $-A_0A_1\otimes[B_0,B_1]+A_1A_0\otimes[B_0,B_1]=-[A_0,A_1]\otimes[B_0,B_1]$; hence $C^2=4I-[A_0,A_1]\otimes[B_0,B_1]$. [F1, F2, F3, F7, algebra]

1.2 [The singlet correlations] On $\mathbb C^2$ with orthonormal basis $(e_+,e_-)$ define $\Psi:=\frac1{\sqrt2}(e_+\otimes e_--e_-\otimes e_+)$; then $\|\Psi\|=1$ by [F1]. Direct computation with the displayed Pauli matrices gives $\sigma_xe_+=e_-$, $\sigma_xe_-=e_+$, $\sigma_ye_+=ie_-$, $\sigma_ye_-=-ie_+$, $\sigma_ze_+=e_+$ and $\sigma_ze_-=-e_-$. Hence $\sigma_i\otimes\sigma_i\Psi=-\Psi$ for $i=x,y,z$ (the two elementary tensors of the difference receive the same sign change), while for $i\ne j$ the two elementary tensors of $\sigma_i\otimes\sigma_j\Psi$ receive coefficients $c$ and $-c$ with $c\in\{\pm1,\pm i\}$, whose pairings with $\Psi$ cancel; therefore $\langle\sigma_i\otimes\sigma_j\Psi,\Psi\rangle=-\delta_{ij}$, and for unit vectors $a,b$, $\langle\sigma_a\otimes\sigma_b\Psi,\Psi\rangle=\sum_{i,j}a_ib_j(-\delta_{ij})=-a\cdot b$, with $\sigma_a,\sigma_b$ self-adjoint involutions by [F5]. [F1, F5, algebra]

2.1 [The norm bound] By [F3] and [F7], $\|[A_0,A_1]\|\le\|A_0A_1\|+\|A_1A_0\|\le2$ and $\|[B_0,B_1]\|\le2$, so [F2] gives $\|[A_0,A_1]\otimes[B_0,B_1]\|\le4$; hence $\|C^2\|\le4+4=8$ from step 1.1 and the triangle inequality. Since $C$ is self-adjoint by step 1.1, [F3] gives $\|C\|^2=\|C^*C\|=\|C^2\|\le8$, so $\|C\|\le2\sqrt2$. [step 1.1, F2, F3, F7, algebra]

2.2 [Attainment] Take $A_0=\sigma_z$, $A_1=\sigma_x$, $B_0=\sigma_{(z+x)/\sqrt2}$, $B_1=\sigma_{(z-x)/\sqrt2}$, all self-adjoint involutions by [F5]. By step 1.2 the four expectations are $E_{00}=-z\cdot\frac{z+x}{\sqrt2}=-\frac1{\sqrt2}$, $E_{01}=-z\cdot\frac{z-x}{\sqrt2}=-\frac1{\sqrt2}$, $E_{10}=-x\cdot\frac{z+x}{\sqrt2}=-\frac1{\sqrt2}$ and $E_{11}=-x\cdot\frac{z-x}{\sqrt2}=+\frac1{\sqrt2}$, because $x\cdot z=0$ and $x\cdot x=z\cdot z=1$. The CHSH combination of the operator $C$ is $E_{00}+E_{01}+E_{10}-E_{11}=-\frac4{\sqrt2}=-2\sqrt2$, so $|\langle C\Psi,\Psi\rangle|=2\sqrt2$ and the bound (c) is attained. [step 1.2, F5, algebra]

3.1 [The quadratic-form bound] For all $\psi,\psi'$, [F4] and step 2.1 give $|\langle C\psi,\psi'\rangle|\le\|C\|\,\|\psi\|\,\|\psi'\|\le2\sqrt2\|\psi\|\|\psi'\|$; for a unit vector this is clause (c), and writing $A_i\otimes B_j$ as self-adjoint operators with the CHSH combination equal to $C$ expresses the four-term combination as $\langle C\psi,\psi\rangle$. [step 2.1, F4, algebra]

4.1 [Local comparison] Clause (e) is exactly [F6] applied to the four $\pm1$-valued random variables of the stated common-outcome model; no relation between that model and the operators of this theorem is asserted. [F6] ∎
