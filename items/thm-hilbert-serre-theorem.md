---
id: thm-hilbert-serre-theorem
kind: theorem
title: "A finite graded module over a standard graded algebra has rational Hilbert series and eventual polynomial growth"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-hilbert-function-and-hilbert-series, def-graded-ring-and-graded-module, cor-length-is-additive-in-short-exact-sequences, thm-artinian-ring-is-noetherian, thm-artinian-ring-has-finite-length, cor-finite-variable-polynomial-ring-noetherian, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Stacks Project, Proposition 10.58.7"
      url: "https://stacks.math.columbia.edu/tag/00JV"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Corollary (20.8)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be an Artinian commutative ring, let
$$ S=A[x_1,\ldots,x_r]/J $$
be a standard graded $A$-algebra with $\deg x_i=1$, and let
$M=\bigoplus_{n\in\mathbb Z}M_n$ be a finite graded $S$-module. Then:

1. the Hilbert series $\operatorname{HS}_M(t)$ is a rational function of the
   form
   $$    \operatorname{HS}_M(t)=\frac{p(t)}{(1-t)^r}    $$
   for some Laurent polynomial $p(t)\in\mathbb Z[t,t^{-1}]$;
2. the Hilbert function $n\mapsto \ell_A(M_n)$ agrees for all sufficiently
   large $n$ with a polynomial in $n$ with rational coefficients.

## Facts & Assumptions

**Given:** The Axiom of Choice, an Artinian ring $A$, a standard graded $A$-algebra $S=A[x_1,\ldots,x_r]/J$ with $\deg x_i=1$, and a finite graded $S$-module $M=\bigoplus M_n$.

[L1] A twist satisfies $M(-1)_n=M_{n-1}$, hence $$ \operatorname{HS}_{M(-1)}(t)=t\operatorname{HS}_M(t) $$ ([[def-graded-ring-and-graded-module]], [[def-hilbert-function-and-hilbert-series]]).

[L2] Length is additive in short exact sequences of finite-length modules ([[cor-length-is-additive-in-short-exact-sequences]]).

[L3] Under the assumed AC, $A$ is Noetherian and has finite length as an $A$-module ([[thm-artinian-ring-is-noetherian]], [[thm-artinian-ring-has-finite-length]]).

[L4] A polynomial ring in finitely many variables over a Noetherian ring is Noetherian, as are its quotients; a finite module over a Noetherian ring is Noetherian, so its submodules are finitely generated ([[cor-finite-variable-polynomial-ring-noetherian]], [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]).

## Proof

**Proof technique:** direct.


1.1 Induct on $r$. If $r=0$, the standard grading makes $S=A$ concentrated in degree zero. Choose a finite homogeneous generating list for $M$ by splitting any finite generating list into its finitely many homogeneous components. Only the finitely many degrees of those generators occur in $M$, and each such degree piece is finite over $A$, hence has finite length by [L3]. Therefore $\operatorname{HS}_M(t)$ is a Laurent polynomial and its coefficients are zero for all sufficiently large $n$. Both conclusions hold in this base case. [L3, given, base]


1.2 Assume $r>0$ and the assertion for standard graded algebras presented using $r-1$ variables. By [L3] and [L4], $S$ is Noetherian; hence the kernel of multiplication by $x_r$ on the finite module $M(-1)$ is finite, as is its cokernel. Write $S'=A[x_1,\ldots,x_{r-1}]/(J\cap A[x_1,\ldots,x_{r-1}])$. Multiplication by the degree-one class of $x_r$ gives an exact sequence of graded $S$-modules $ 0\to K\to M(-1)\xrightarrow{x_r} M\to C\to0. $ Both $K$ and $C$ are annihilated by $x_r$ and are therefore finite graded modules over the $r-1$-variable algebra $S'$: split their finite $S$-generating lists into homogeneous components, and the same lists generate after the action factors through $S/(x_r)$, a quotient of $S'$. [L3, L4, given, ih]


2.1 Every degree piece of $M$, $K$, and $C$ is a finite $A$-module: finite homogeneous generators and finitely many monomials of any fixed degree suffice. By [L3], it has finite length. Taking degree-$n$ pieces in the exact sequence of step 1.2 and using [L2] yields $ \ell_A(C_n)-\ell_A(K_n)=\ell_A(M_n)-\ell_A(M_{n-1}) $ for every $n$. In Hilbert-series form this is $ (1-t)\operatorname{HS}_M(t)=\operatorname{HS}_C(t)-\operatorname{HS}_K(t) $ by [L1]. [L1, L2, L3, step 1.2]


3.1 The induction hypothesis applies to the finite graded $S'$-modules $K$ and $C$ from step 1.2. Their series have Laurent-polynomial numerators over $(1-t)^{r-1}$. Equation 2.1 therefore writes $\operatorname{HS}_M(t)$ with a Laurent-polynomial numerator over $(1-t)^r$. [ih, step 1.2, step 2.1]


4.1 Write the numerator from step 3.1 as $p(t)=\sum_{j=a}^b c_jt^j$ with finite integers $c_j$. For $r>0$, the coefficient of $t^n$ in $t^j(1-t)^{-r}$ is $\binom{n-j+r-1}{r-1}$ for $n\ge j$. For all $n\ge b$, the Hilbert function is therefore $\sum_{j=a}^b c_j\binom{n-j+r-1}{r-1}$, a polynomial in $n$ with rational coefficients. [step 3.1, algebra]


5.1 The base case is step 1.1, and steps 1.2 through 4.1 prove the induction step. Thus both claims hold for every finite number of variables. [step 1.1, step 1.2, step 3.1, step 4.1, discharge-induction] ∎
