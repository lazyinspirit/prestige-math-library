---
id: lem-qsmx-von-neumann-predual
kind: lemma
title: Trace-class quotient predual and normal functionals
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: null
deps:
  - def-qsmx-von-neumann-algebra
  - def-von-neumann-algebra-and-commutant
  - def-strong-and-weak-operator-topologies
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - thm-trace-is-absolutely-convergent-and-basis-independent
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - lem-qsmx-trace-class-duality
  - lem-qsmx-monotone-bounded-positive-net
  - def-quotient-seminorm
  - def-quotient-vector-space-coset-notation
  - def-dual-space-of-a-normed-space
  - def-annihilator-and-preannihilator
  - thm-quotient-of-banach-by-closed-subspace-is-banach
  - thm-dual-of-a-quotient-is-the-annihilator
  - thm-banach-alaoglu
  - thm-ultrafilter-lemma
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-von-neumann-algebra: mathematical-premise
  def-von-neumann-algebra-and-commutant: mathematical-premise
  def-strong-and-weak-operator-topologies: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  lem-qsmx-trace-class-duality: mathematical-premise
  lem-qsmx-monotone-bounded-positive-net: mathematical-premise
  def-quotient-seminorm: mathematical-premise
  def-quotient-vector-space-coset-notation: mathematical-premise
  def-dual-space-of-a-normed-space: mathematical-premise
  def-annihilator-and-preannihilator: mathematical-premise
  thm-quotient-of-banach-by-closed-subspace-is-banach: mathematical-premise
  thm-dual-of-a-quotient-is-the-annihilator: mathematical-premise
  thm-banach-alaoglu: mathematical-premise
  thm-ultrafilter-lemma: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "F. Hiai, Concise lectures on selected topics of von Neumann algebras"
      url: "https://arxiv.org/pdf/2004.02383"
      locator: "§1.1–1.3, PDF pp. 3–4; §2.1, PDF pp. 10–16"
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part I, §§I.8.5.3–I.8.6.2, PDF pp. 43–45"
    - title: "Claire Anantharaman and Sorin Popa, An Introduction to II1 Factors"
      url: "https://www.idpoisson.fr/anantharaman/publications/IIun.pdf"
      locator: "Chapter 7, §7.4, Theorem 7.4.5, PDF pp. 114–116, tracial standard representation"
---

## Statement

Assume the Axiom of Choice. Let $M\subseteq\mathcal B(H)$ be a concrete von
Neumann algebra on a complex Hilbert space $H$, and define
$$M_\perp:=\{T\in\mathcal S_1(H):\operatorname{Tr}(Tx)=0 \text{ for every }x\in M\}.$$
Equip the coset space $Q:=\mathcal S_1(H)/M_\perp$ with the quotient norm.
Then the trace pairing
$$\Psi:M\to Q^*,\qquad (\Psi(x))([T])=\operatorname{Tr}(Tx),$$
is a well-defined isometric bijection, and $Q$ is a Banach space. Thus $Q$ is
an isometric predual of $M$, and its dual unit ball is weak-star compact.
Every vector functional $x\mapsto\langle x\xi,\xi\rangle$ and every positive
functional in $Q$ preserves suprema of bounded increasing positive nets in
$M$.

## Statement references

[[def-qsmx-von-neumann-algebra]]

[[def-trace-class-operator]]

[[def-quotient-seminorm]]

[[thm-dual-of-a-quotient-is-the-annihilator]]

[[thm-banach-alaoglu]]

[[thm-ultrafilter-lemma]]

## Facts & Assumptions

**Given:** [A1], a concrete von Neumann algebra $M\subseteq\mathcal B(H)$,
the trace-class space $\mathcal S_1(H)$, its trace pairing, and the quotient
space in the Statement.

[A1] Assume the Axiom of Choice, including the ultrafilter lemma needed for
the Banach–Alaoglu compactness conclusion
([[def-axiom-of-choice]], [[thm-ultrafilter-lemma]]).

[F1] Trace class is Banach, is an ideal under multiplication by bounded
operators, and $|\operatorname{Tr}(T)|\le\|T\|_1$
([[thm-trace-class-is-a-two-sided-banach-operator-ideal]],
[[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F2] Finite-rank operators are dense in trace norm, and every bounded linear
functional on $\mathcal S_1(H)$ is uniquely $\operatorname{Tr}(\,\cdot\,X)$
for $X\in\mathcal B(H)$, isometrically
([[lem-qsmx-trace-class-duality]]).

[F3] A quotient of a Banach space by a closed subspace is Banach, and its dual
is isometrically the annihilator of that subspace
([[thm-quotient-of-banach-by-closed-subspace-is-banach]],
[[thm-dual-of-a-quotient-is-the-annihilator]],
[[def-quotient-seminorm]],
[[def-quotient-vector-space-coset-notation]],
[[def-dual-space-of-a-normed-space]],
[[def-annihilator-and-preannihilator]]).

[F4] A bounded increasing positive net in $M$ has a supremum in $M$ and
converges strongly to it
([[lem-qsmx-monotone-bounded-positive-net]]).

[F5] The dual unit ball of a normed space is weak-star compact under the
ultrafilter lemma, and Choice supplies that lemma
([[thm-banach-alaoglu]], [[thm-ultrafilter-lemma]],
[[def-axiom-of-choice]]).

[F6] Since $M=M''$ and commutants are weak-operator closed, $M$ is
weak-operator closed; weak-operator neighborhoods are finite conditions on
matrix coefficients ([[def-qsmx-von-neumann-algebra]],
[[def-von-neumann-algebra-and-commutant]],
[[def-strong-and-weak-operator-topologies]]).

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F5], the trace pairing, and the concrete algebra $M$.

1.1 For every $x\in M$, the functional $T\mapsto\operatorname{Tr}(Tx)$ on $\mathcal S_1(H)$ is bounded by $|\operatorname{Tr}(Tx)|\le\|T\|_1\|x\|$, using [F1]. Therefore $M_\perp$ is an intersection of closed kernels and is a closed linear subspace. The quotient $Q=\mathcal S_1(H)/M_\perp$ is Banach by [F1] and [F3]. The formula $\Psi(x)([T])=\operatorname{Tr}(Tx)$ is independent of the representative because every element of $M_\perp$ annihilates $x$. [F1, F3, given, construct]

1.2 By [F3], $Q^*$ is isometrically identified with $M_\perp^\perp\subseteq\mathcal S_1(H)^*$. By [F2], $\mathcal S_1(H)^*$ is isometrically $\mathcal B(H)$ under the trace pairing. Under this identification, $M_\perp^\perp$ consists exactly of the bounded operators $X$ satisfying $\operatorname{Tr}(TX)=0$ for all $T\in M_\perp$. It remains to identify this double annihilator with $M$. [F2, F3]

1.3 Every $x\in M$ belongs to $M_\perp^\perp$ by the definition of $M_\perp$. Conversely, let $X\in\mathcal B(H)\setminus M$. By [F6], there is a basic weak-operator neighborhood of $X$, defined by finitely many pairs $(\xi_j,\eta_j)$ and tolerances, that is disjoint from $M$. The coordinate map $\theta(Y)=(\langle Y\xi_j,\eta_j\rangle)_{j=1}^m$ has $\theta(X)\notin\theta(M)$; $\theta(M)$ is a linear subspace of $\mathbb C^m$ and hence is closed. Finite-dimensional linear algebra supplies a linear functional $\ell(z)=\sum_{j=1}^m c_jz_j$ that vanishes on $\theta(M)$ but not on $\theta(X)$. Set $T=\sum_{j=1}^m c_jR_{\xi_j,\eta_j}$, where $R_{\xi,\eta}z=\langle z,\eta\rangle\xi$. Then $T$ is finite-rank trace class and $\operatorname{Tr}(TY)=\ell(\theta(Y))$ for every $Y\in\mathcal B(H)$. Thus $T\in M_\perp$ but $\operatorname{Tr}(TX)\ne0$, so $X\notin M_\perp^\perp$. Therefore $M_\perp^\perp=M$. [F2, F6, given, algebra, construct]

2.1 Steps 1.2 and 1.3 identify the canonical map $\Psi$ with the isometric duality identification of [F2]–[F3], so $\Psi$ is an isometric bijection $M\to Q^*$. The Banach–Alaoglu theorem [F5] applied to $Q$ then makes the closed dual unit ball of $Q^*$ weak-star compact. [A1, F2, F3, F5, step 1.2, step 1.3]

2.2 Let $(x_i)$ be a bounded increasing positive net in $M$ with supremum $x$. By [F4], $x_i\to x$ strongly; the statement gives $\|x_i\|\le C$, and step 1.1 gives $\|x\|\le C$. For each $T\in\mathcal S_1(H)$, choose finite-rank $T_n\to T$ in trace norm by [F2]. Strong convergence gives $\operatorname{Tr}(T_nx_i)\to\operatorname{Tr}(T_nx)$ for each fixed $n$, since $T_n$ is a finite sum of rank-one operators. Uniformly in $i$, $$|\operatorname{Tr}((T-T_n)x_i)| \le C\|T-T_n\|_1,\qquad |\operatorname{Tr}((T-T_n)x)| \le C\|T-T_n\|_1.$$ Given $\varepsilon>0$, first fix $n$ so that the sum of these two uniform errors is less than $\varepsilon/2$, then choose a net index after which the finite-rank trace difference is less than $\varepsilon/2$. This proves $\operatorname{Tr}(Tx_i)\to\operatorname{Tr}(Tx)$. Hence every $\phi=[T]\in Q$ is continuous along this net. If $\phi$ is positive, then $\phi(x_i)$ increases and converges to $\phi(x)$, so $\phi(x)=\sup_i\phi(x_i)$. In particular, for $\xi\in H$ the vector functional is represented by $[R_{\xi,\xi}]$, since $\operatorname{Tr}(R_{\xi,\xi}x)=\langle x\xi,\xi\rangle$; it is positive and therefore normal as well. [F1, F2, F4, F6, step 1.1, algebra]

3.1 Steps 1.1–1.3 and 2.1–2.2 prove the quotient predual, its weak-star compact dual ball, normality of positive functionals in the quotient, and normality of vector functionals. The positive-functional normality proof uses trace-norm approximation by finite-rank operators; it does not assume a positive trace-class lift for every positive functional on $M$. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎
