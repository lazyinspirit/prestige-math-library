---
id: lem-qsmx-trace-class-duality
kind: lemma
title: Trace-class duality and finite-rank density
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: null
deps:
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - thm-trace-is-absolutely-convergent-and-basis-independent
  - thm-singular-value-decomposition-for-compact-operators
  - lem-nuclear-series-characterizes-trace-norm
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - thm-riesz-representation-for-hilbert-space
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-space-of-bounded-linear-operators
  - def-operator-norm
  - def-bounded-linear-operator
  - thm-hilbert-adjoint-properties
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
dependency_roles:
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-singular-value-decomposition-for-compact-operators: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-space-of-bounded-linear-operators: mathematical-premise
  def-operator-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part I, §§I.8.5.3–I.8.6.2, printed pp. 43–45"
    - title: "F. Hiai, Concise lectures on selected topics of von Neumann algebras"
      url: "https://arxiv.org/pdf/2004.02383"
      locator: "§1.1, PDF p. 3, trace-class duality and the σ-weak topology"
    - title: "Claire Anantharaman and Sorin Popa, An Introduction to II1 Factors"
      url: "https://www.idpoisson.fr/anantharaman/publications/IIun.pdf"
      locator: "Chapter 7, §7.4, Theorem 7.4.5, printed pp. 114–116; tracial standard representation"
---

## Statement

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space, and let
$\mathcal S_1(H)$ be its trace-class operators with trace norm $\|\cdot\|_1$.
Write $\operatorname{Tr}:=\operatorname{tr}$ for the basis-independent trace
defined earlier. Finite-rank operators are dense in
$(\mathcal S_1(H),\|\cdot\|_1)$. For every bounded linear functional
$\Phi:\mathcal S_1(H)\to\mathbb C$, there is a unique $X\in\mathcal B(H)$ such
that
$$\Phi(T)=\operatorname{Tr}(TX)\qquad(T\in\mathcal S_1(H)),$$
and the correspondence is isometric:
$\|\Phi\|=\|X\|$.

## Statement references

[[def-trace-class-operator]]

[[def-trace-of-a-trace-class-operator]]

[[thm-trace-is-absolutely-convergent-and-basis-independent]]

[[thm-singular-value-decomposition-for-compact-operators]]

[[thm-riesz-representation-for-hilbert-space]]

[[thm-hilbert-adjoint-properties]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** [A1], a complex Hilbert space $H$, its trace-class space, trace norm and trace.

[A1] Assume the Axiom of Choice; it implies Countable Choice, the stated choice input for the imported trace-class tools ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F1] [[def-trace-class-operator]] defines $\mathcal S_1(H)$ by summability of singular values. [[thm-singular-value-decomposition-for-compact-operators]] indexes exactly the positive singular values by a finite initial segment or the positive integers and gives norm-convergent partial sums; the trace-norm characterization [[lem-nuclear-series-characterizes-trace-norm]] identifies their sum as the trace norm.

[F2] Trace class is a Banach space and a two-sided ideal: $\|AYB\|_1\le\|A\|\|Y\|_1\|B\|$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F3] The basis-independent trace equals the scalar sum of any nuclear representation and obeys $|\operatorname{Tr}(Y)|\le\|Y\|_1$ ([[def-trace-of-a-trace-class-operator]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F4] The inner product is linear in its first argument; every bounded linear functional on $H$ has a unique Riesz vector ([[def-real-and-complex-inner-product-space]], [[thm-riesz-representation-for-hilbert-space]]).

[F5] Bounded operators have Hilbert adjoints satisfying $\langle X\xi,\eta\rangle=\langle \xi,X^*\eta\rangle$ ([[thm-hilbert-adjoint-properties]]).

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F5], a bounded linear functional $\Phi$ on $\mathcal S_1(H)$, and its trace pairing.

1.1 Let $J=\{1,\ldots,r\}$ if $T$ has finite rank $r$, and $J=\mathbb N_{>0}$ otherwise, as in [F1]. Write its singular expansion $T=\sum_{j\in J}s_j\langle\,\cdot,e_j\rangle f_j$ and let $T_N=\sum_{j\in J,\,j\le N}s_j\langle\,\cdot,e_j\rangle f_j$. The SVD gives $T-T_N=\sum_{j\in J,\,j>N}s_j\langle\,\cdot,e_j\rangle f_j$ as a norm-convergent nuclear representation whose coefficient products sum to the tail $\sum_{j\in J,\,j>N}s_j\to0$. The nuclear characterization in [F1] therefore gives $\|T-T_N\|_1\le\sum_{j\in J,\,j>N}s_j\to0$. In finite rank the tail is empty once $N\ge r$. Thus finite-rank operators are trace-norm dense. [A1, F1, construct]

1.2 For $\xi,\eta\in H$, define the rank-one operator $R_{\xi,\eta}z=\langle z,\eta\rangle\xi$. Its only possible nonzero singular value is $\|\xi\|\|\eta\|$, so $\|R_{\xi,\eta}\|_1=\|\xi\|\|\eta\|$. The form $b(\xi,\eta):=\Phi(R_{\xi,\eta})$ is linear in $\xi$, conjugate-linear in $\eta$, and satisfies $|b(\xi,\eta)|\le\|\Phi\|\|\xi\|\|\eta\|$. For fixed $\xi$, the map $g_\xi(\eta):=\overline{b(\xi,\eta)}$ is bounded and linear in $\eta$. Riesz representation [F4] gives a unique vector $X\xi$ such that $g_\xi(\eta)=\langle\eta,X\xi\rangle$; conjugating gives $b(\xi,\eta)=\langle X\xi,\eta\rangle$. Uniqueness makes $X$ linear, and the bound gives $\|X\xi\|\le\|\Phi\|\|\xi\|$, so $X\in\mathcal B(H)$ and $\|X\|\le\|\Phi\|$. [F1, F4, construct]

2.1 The nuclear representation $R_{\xi,\eta}X=R_{\xi,X^*\eta}$ and [F3] give $\operatorname{Tr}(R_{\xi,\eta}X)=\langle \xi,X^*\eta\rangle =\langle X\xi,\eta\rangle$. Every finite-rank operator is a finite sum of rank-one operators, so linearity of $\Phi$ and of the trace gives $\Phi(T)=\operatorname{Tr}(TX)$ for every finite-rank $T$. [F3, F5, step 1.2, algebra]

3.1 For arbitrary $T\in\mathcal S_1(H)$, use the finite-rank approximants $T_N$ from step 1.1. Boundedness of $\Phi$ gives $\Phi(T_N)\to\Phi(T)$. Also $$|\operatorname{Tr}((T-T_N)X)| \le\|(T-T_N)X\|_1 \le\|T-T_N\|_1\|X\|\to0$$ by [F2] and [F3]. Hence the same trace identity holds for every trace-class $T$. [F2, F3, step 1.1, step 2.1]

4.1 If $H=\{0\}$, then $\mathcal S_1(H)=\mathcal B(H)=\{0\}$, so the only bounded functional and representing operator are zero and the isometry assertion holds. Otherwise the trace identity and [F2]–[F3] imply $|\Phi(T)|\le\|T\|_1\|X\|$, so $\|\Phi\|\le\|X\|$. For unit $\xi,\eta$, step 2.1 gives $|\langle X\xi,\eta\rangle|=|\Phi(R_{\xi,\eta})|\le\|\Phi\|$, since $\|R_{\xi,\eta}\|_1=1$. Taking suprema over unit $\xi,\eta$ gives $\|X\|\le\|\Phi\|$. If $Y$ also represents $\Phi$, applying the identity to each $R_{\xi,\eta}$ gives $\langle (X-Y)\xi,\eta\rangle=0$ for all $\xi,\eta$, hence $X=Y$. [F2, F3, step 1.2, step 3.1]

5.1 Steps 1.1–4.1 prove finite-rank trace-norm density and establish a unique operator $X$ with the stated pairing and norm equality for every bounded functional $\Phi$. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
