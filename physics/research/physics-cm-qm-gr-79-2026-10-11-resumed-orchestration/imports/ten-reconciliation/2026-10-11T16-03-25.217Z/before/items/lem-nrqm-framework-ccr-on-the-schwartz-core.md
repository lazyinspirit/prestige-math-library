---
id: lem-nrqm-framework-ccr-on-the-schwartz-core
kind: lemma
title: "Canonical commutation relations of position and momentum on the Schwartz core"
status: draft
origin: session
domain: mathematics
dependency_level: 2
deps: [def-nrqm-magnetic-and-detection-position-and-momentum-operators, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, lem-nrqm-magnetic-and-detection-weak-product-rule, def-schwartz-space-and-its-seminorms, lem-classical-derivatives-are-weak-derivatives, def-countable-choice]
dependency_roles:
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  lem-nrqm-magnetic-and-detection-weak-product-rule: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1, printed pages 55-57 (PDF pages 67-69): position and momentum operators and the canonical commutation relation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 3 'Linear Algebra: Vector Spaces and Operators', printed pages 5-8 (PDF pages 6-9): linear operators and the commutator [X,Y]=XY-YX"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349e84d74129eef504498472_MIT8_05F13_Chap_03.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix $d\ge1$ and $\hbar>0$, let $Q_{j},P_{k}$ be the position and momentum operators on $L^{2}(\mathbb R^{d};\mathbb C)$ of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], and let

$$\mathcal S:=\mathcal S(\mathbb R^{d};\mathbb C)$$

be the Schwartz space of [[def-schwartz-space-and-its-seminorms]]. Then:

(a) $\mathcal S\subseteq D(Q_{j})\cap D(P_{k})$ for all $j,k$, and $Q_{j}f\in\mathcal S$ and $P_{k}f\in\mathcal S$ for every $f\in\mathcal S$.
(b) for every $f\in\mathcal S$ the products $Q_{j}P_{k}$ and $P_{k}Q_{j}$ are defined at $f$ and
$$(Q_{j}P_{k}-P_{k}Q_{j})f=i\hbar\,\delta_{jk}f,\qquad \delta_{jk}=\begin{cases}1,&j=k,\\0,&j\ne k;\end{cases}$$
that is, the canonical commutation relation holds on the common core $\mathcal S$.

No statement is made about products of $Q_{j}$ and $P_{k}$ outside $\mathcal S$: the relation is asserted on the Schwartz core only, not as an identity of unbounded products on all of $L^{2}$.

## Facts & Assumptions

**Given:** $d\ge1$, $\hbar>0$, the operators $Q_{j},P_{k}$ of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]] with the domains $D(Q_{j})=\{f:x_{j}f\in L^{2}\}$ and $D(P_{k})=\{f:D_{k}f$ exists in $L^{2}\}$, and a class $f\in\mathcal S$.

[L1] Definition and domains: $Q_{j}f=x_{j}f$ and $P_{k}f=-i\hbar D_{k}f$, where $D_{k}$ is the weak $k$-th derivative; for $f\in\mathcal S$ the classical partial derivative $\partial_{k}f$ is locally integrable and is the weak derivative $D_{k}f$, and $f\in W^{1,2}(\mathbb R^{d};\mathbb C)$, so $f\in D(P_{k})$ and $P_{k}f=-i\hbar\,\partial_{k}f$ as an $L^{2}$ class ([[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], [[lem-classical-derivatives-are-weak-derivatives]], [[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]]).

[L2] $\mathcal S$ consists of the classes whose representatives are smooth and rapidly decreasing, and multiplication of a Schwartz class by a polynomial and application of a partial derivative map $\mathcal S$ into itself; $\mathcal S\subseteq L^{2}(\mathbb R^{d};\mathbb C)$ and $\mathcal S\subseteq W^{1,2}(\mathbb R^{d};\mathbb C)$ ([[def-schwartz-space-and-its-seminorms]]).

[L3] Weak product rule with a bounded coefficient: if $a\in L^{\infty}(\mathbb R^{d};\mathbb R)$ has weak first derivatives $D_{j}a\in L^{\infty}$ for all $j$ and $u\in W^{1,2}(\mathbb R^{d};\mathbb C)$, then $au\in W^{1,2}$ and $D_{j}(au)=(D_{j}a)u+aD_{j}u$ for every $j$ ([[lem-nrqm-magnetic-and-detection-weak-product-rule]]).

## Proof

**Proof technique:** direct.

1.1 [Membership] Let $f\in\mathcal S$. Since $x_{j}f$ is a Schwartz class by [L2], $Q_{j}f=x_{j}f\in\mathcal S\subseteq L^{2}$, so $f\in D(Q_{j})$; and since $\partial_{k}f\in\mathcal S\subseteq L^{2}$ is the weak derivative of $f$ by [L1], $f\in D(P_{k})$ with $P_{k}f=-i\hbar\,\partial_{k}f\in\mathcal S$. In particular $P_{k}f\in\mathcal S\subseteq D(Q_{j})$ and $Q_{j}f\in\mathcal S\subseteq D(P_{k})$, so both products $Q_{j}P_{k}$ and $P_{k}Q_{j}$ are defined at $f$, and this proves clause (a). [L1, L2, algebra]

1.2 [First product] Take $a:=x_{j}$, so $a\in L^{\infty}$ is not asserted but its restriction to the support of $f$ is bounded and $D_{l}a=\delta_{jl}$ is bounded; the weak product rule [L3] applies to $u:=f\in W^{1,2}$ with the coefficient $x_{j}$ reading $D_{l}(x_{j}f)=\delta_{jl}f+x_{j}D_{l}f$ as an identity of $L^{2}$ classes for every $l$. Hence $P_{k}Q_{j}f=-i\hbar\,D_{k}(x_{j}f)=-i\hbar\bigl(\delta_{jk}f+x_{j}\partial_{k}f\bigr)$, because $D_{k}f=\partial_{k}f$ by [L1]. [L1, L2, L3, algebra]

2.1 [Commutator] By [L1], $Q_{j}P_{k}f=x_{j}\bigl(-i\hbar\,\partial_{k}f\bigr)=-i\hbar\,x_{j}\partial_{k}f$. Subtracting the value of $P_{k}Q_{j}f$ computed in step 1.2 gives $(Q_{j}P_{k}-P_{k}Q_{j})f=-i\hbar\,x_{j}\partial_{k}f+i\hbar\bigl(\delta_{jk}f+x_{j}\partial_{k}f\bigr)=i\hbar\,\delta_{jk}f$, which is clause (b). [step 1.2, L1, algebra] ∎
