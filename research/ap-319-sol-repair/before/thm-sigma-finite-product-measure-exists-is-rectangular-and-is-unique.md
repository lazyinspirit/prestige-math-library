---
id: thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
kind: theorem
title: "For sigma-finite factors, the product measure exists, has the rectangle formula, is sigma-finite, and is unique"
status: published
origin: session
landmark: true
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-measure-on-sigma-finite-spaces, thm-iterated-section-measures-agree-on-product-measurable-sets, def-measure, def-pi-system, thm-measure-uniqueness-on-a-sigma-finite-pi-system, def-finite-sigma-finite-and-semifinite-measures, thm-monotone-convergence-for-the-integral, def-product-sigma-algebra-and-finite-product-sigma-algebras]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Proposition 1.7.11"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 5.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure
spaces. Then:

1. the set function $E \mapsto (\mu \times \nu)(E)$ of
   [[def-product-measure-on-sigma-finite-spaces]] is a measure on
   $\mathcal A \otimes \mathcal B$;
2. for measurable rectangles,
   $$(\mu \times \nu)(A \times B)=\mu(A)\nu(B);$$
3. the measure $\mu \times \nu$ is sigma-finite; and
4. it is the unique measure on $\mathcal A \otimes \mathcal B$ with the
   rectangle formula.

## Facts & Assumptions

**Given:** Sigma-finite measure spaces $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$.

[L1] For every product-measurable set $E$, $$ (\mu \times \nu)(E)=\int_X \nu(E_x)\,d\mu=\int_Y \mu(E^y)\,d\nu. $$ ([[def-product-measure-on-sigma-finite-spaces]])

[L2] Monotone convergence passes increasing limits through nonnegative integrals. ([[thm-monotone-convergence-for-the-integral]])

[L3] A measure is determined by its values on a sigma-finite generating pi-system. ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]])

[A1] Measurable rectangles form a pi-system that generates $\mathcal A \otimes \mathcal B$.

[A2] Since $\mu$ and $\nu$ are sigma-finite, there are measurable exhaustions $X_n \uparrow X$ and $Y_n \uparrow Y$ with $\mu(X_n),\nu(Y_n) < \infty$.

## Proof

**Proof technique:** direct.

1.1 If $E=A \times B$ is a measurable rectangle, then $$ (A \times B)_x = \begin{cases} B,& x \in A,\\ \varnothing,& x \notin A,\end{cases} $$ so $$ (\mu \times \nu)(A \times B) = \int_X \nu((A \times B)_x)\,d\mu = \int_X \nu(B)\mathbf 1_A(x)\,d\mu = \mu(A)\nu(B). $$ This is the rectangle formula. [L1]

1.2 Let $E_1,E_2,\dots$ be pairwise disjoint measurable subsets of $X \times Y$, and put $F_N:=\bigcup_{k \le N} E_k$. Then $(F_N)_x = \bigcup_{k \le N} (E_k)_x$ is a disjoint union, so $\nu((F_N)_x)=\sum_{k \le N}\nu((E_k)_x)$ for every $x$. Therefore $$ (\mu \times \nu)(F_N) = \int_X \sum_{k \le N}\nu((E_k)_x)\,d\mu. $$ Since $F_N \uparrow \bigcup_{k \ge 1} E_k$, [L2] gives $$ (\mu \times \nu)\left(\bigcup_{k \ge 1} E_k\right) = \sum_{k \ge 1} (\mu \times \nu)(E_k). $$ Thus $\mu \times \nu$ is a measure. [L1, L2]

2.1 By [A2] and step 1.1, each rectangle $X_n \times Y_n$ has finite product measure $$ (\mu \times \nu)(X_n \times Y_n)=\mu(X_n)\nu(Y_n)<\infty, $$ and $$ \bigcup_n (X_n \times Y_n)=X \times Y. $$ Hence $\mu \times \nu$ is sigma-finite. [A2, step 1.1]

3.1 Let $\rho$ be another measure on $\mathcal A \otimes \mathcal B$ with the same rectangle formula. Step 1.1 shows that $\rho$ and $\mu \times \nu$ agree on the generating pi-system of measurable rectangles, and step 2.1 gives the required sigma-finite exhaustion. Therefore [L3] implies $$ \rho=\mu \times \nu $$ on all of $\mathcal A \otimes \mathcal B$. This proves existence, the rectangle formula, sigma-finiteness, and uniqueness. [A1, L3, step 1.1, step 2.1] ∎
