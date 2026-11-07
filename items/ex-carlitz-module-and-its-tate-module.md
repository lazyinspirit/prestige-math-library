---
id: ex-carlitz-module-and-its-tate-module
kind: example
title: "Carlitz module and its rank-one Tate module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-function-field-coefficient-ring
  - def-drinfeld-module-over-an-a-field
  - def-rank-of-a-drinfeld-module
  - thm-drinfeld-tate-module-is-a-galois-representation
  - def-axiom-of-choice
  - thm-universal-property-of-a-polynomial-ring
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Introduction to Drinfeld Modules, §5 and §3.8"
      url: "https://math.mit.edu/~poonen/papers/drinfeld.pdf"
    - title: "Mihran Papikian, An Overview of the Theory of Drinfeld Modules, §§1.3 and 3.2"
      url: "https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf"
verification: {}
---

## Example

Let $q$ be a prime power, $A=\mathbb F_q[T]$, and $K=\mathbb F_q(T)$ with the identity A-field structure. Let $\phi:A\to K\{\tau\}$ be the unique unital $\mathbb F_q$-algebra map with $\phi_T=T+\tau$ and $\tau c=c^q\tau$; it is a rank-one Drinfeld $A$-module, meaning $\deg_\tau(\phi_f)=\deg f$ for every $0\ne f\in A$. Fix a separable closure $K^{\mathrm{sep}}$, set $D_{\mathfrak l}=\bigcup_{n\ge1}\phi[\mathfrak l^n](K^{\mathrm{sep}})$ with $\phi[\mathfrak l^n]=\{x:\phi_a(x)=0\text{ for every }a\in\mathfrak l^n\}$, let $A_{\mathfrak l}=\varprojlim_n A/\mathfrak l^n$ and define $T_{\mathfrak l}(\phi)=\operatorname{Hom}_{A_{\mathfrak l}}(\operatorname{Frac}(A_{\mathfrak l})/A_{\mathfrak l},D_{\mathfrak l})$. Under the Axiom of Choice, for every nonzero prime ideal $\mathfrak l\subset A$, this Tate module is free of rank one over $A_{\mathfrak l}$ and carries a continuous action of $G_K=\operatorname{Gal}(K^{\mathrm{sep}}/K)$.

## Example references

[[def-function-field-coefficient-ring]]

[[def-drinfeld-module-over-an-a-field]]

[[def-rank-of-a-drinfeld-module]]

[[thm-drinfeld-tate-module-is-a-galois-representation]]

Bjorn Poonen, *Introduction to Drinfeld Modules*, §§3.8 and 5: https://math.mit.edu/~poonen/papers/drinfeld.pdf

Mihran Papikian, *An Overview of the Theory of Drinfeld Modules*, §§1.3 and 3.2: https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf

## Facts & Assumptions

**Given:** A prime power $q$, $A=\mathbb F_q[T]$, $K=\mathbb F_q(T)$ with $A$ acting by inclusion, and the Axiom of Choice for the Tate-module conclusion.

[F1] [[def-function-field-coefficient-ring]]: $\deg_A(f)=\deg f$ for nonzero $f\in\mathbb F_q[T]$, and $|f|=q^{\deg f}$.

[F2] [[def-drinfeld-module-over-an-a-field]]: a Drinfeld A-module is an injective unital $\mathbb F_q$-algebra map with differential equal to the A-field structure.

[F3] [[def-rank-of-a-drinfeld-module]]: rank $r$ means $\deg_\tau(\phi_f)=r\deg_A(f)$ for every nonzero $f\in A$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the Tate-module statement.

[F4] [[thm-drinfeld-tate-module-is-a-galois-representation]]: under AC, for a prime ideal away from the A-characteristic, the Tate module is free of rank $r$ and has a continuous $A_{\mathfrak l}$-linear $G_K$-action.

[F5] [[thm-universal-property-of-a-polynomial-ring]]: assigning an element of a unital $\mathbb F_q$-algebra as the image of $T$ gives a unique unital $\mathbb F_q$-algebra map from $\mathbb F_q[T]$.

## Verification

1.1 By [F5], the assignment $T\mapsto T+\tau$ extends uniquely to a unital $\mathbb F_q$-algebra homomorphism $\phi:A\to K\{\tau\}$. Its differential is $T$. For $f(T)=\sum_{i=0}^m c_iT^i$ with $c_m\ne0$, the composition power $\phi_{T^i}=\phi_T^{\circ i}$ has $\tau$-degree $i$ and nonzero leading coefficient; the distinct degrees ensure $\phi_f\ne0$. Thus $\phi$ is a Drinfeld A-module by [F2]. [F2, F5, given, construct, algebra]

2.1 For every nonzero $f(T)$ of degree $m$, the top composition term gives $\deg_\tau(\phi_f)=m=\deg_A(f)$. Hence $\phi$ has rank one by [F1] and [F3]. [F1, F3, step 1.1, algebra]

3.1 The structure map $A=\mathbb F_q[T]\hookrightarrow K=\mathbb F_q(T)$ is injective, so the A-characteristic is the zero ideal and every nonzero prime $\mathfrak l$ is prime to it. Under [A1], [F4] applies with $r=1$ and gives the stated free rank-one Tate module and continuous Galois action. [A1, F2, F3, F4, given] ∎
