---
id: "lem-conjugate-transpose-kernels-give-adjoints"
kind: "lemma"
title: "Conjugate transpose kernels give adjoints"
deps: ["lem-square-integrable-kernels-define-bounded-compact-integral-operators", "def-l-two-operator-conventions-for-weak-mixing", "thm-tonelli-and-fubini-for-completed-product-measures", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Axler Example 10.5 equations 10.6–10.9 p.282
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. For a square-integrable kernel $k$ on a completed probability square, the adjoint of its operator $K$ is the kernel operator of $k^*(x,y)=\overline{k(y,x)}$. Both are compact, $(K^*)^*=K$, and $\|K^*\|=\|K\|$.

## Facts & Assumptions

[F1] Square-integrable kernels define bounded compact operators with operator norm at most kernel norm [[lem-square-integrable-kernels-define-bounded-compact-integral-operators]].

[F2] Adjoint means the first-variable-linear pairing identity and is unique if it exists [[def-l-two-operator-conventions-for-weak-mixing]].

[F3] Completed-product Tonelli and Fubini give both iterated integrals [[thm-tonelli-and-fubini-for-completed-product-measures]].

[F4] The complex pairing is sesquilinear and satisfies Cauchy–Schwarz [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F5] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** $k$, its operator $K$, and AC as in the statement.

1.1 Factor swap is measurable on the product sigma-algebra because the inverse image of $E\times F$ is $F\times E$. For a nonnegative product-measurable $q$, Tonelli applied in both orders gives $\iint q(y,x)\,d\mu(y)d\mu(x)=\iint q(x,y)\,d\mu(y)d\mu(x)$. In particular it preserves null sets. Thus it is measurable and measure-preserving on the completion as well: a completed measurable set differs from a product-measurable set by a subset of a product-null set, whose swapped set is still null. Consequently $k^*$ is a well-defined completed $L^2$ class with $\|k^*\|_2=\|k\|_2$. F1 gives its compact bounded operator $L$. AC supplies the countable-choice hypotheses here and in F1. [F1, F3, F5]

2.1 For $f,g\in L^2$, Tonelli gives $\|f(y)\overline{g(x)}\|_{L^2(X^2)}=\|f\|_2\|g\|_2$. Product Cauchy–Schwarz bounds the absolute integral of $k(x,y)f(y)\overline{g(x)}$ by $\|k\|_2\|f\|_2\|g\|_2$. Hence Fubini applies, and conjugating the inner integral gives $\langle Kf,g\rangle=\int f(y)\overline{\int\overline{k(x,y)}g(x)\,d\mu(x)}\,d\mu(y)=\langle f,Lg\rangle$. Therefore $L=K^*$ by adjoint uniqueness. The a.e. section conventions are those of F1. [F2, F3, F4, step 1.1]

3.1 Applying the formula twice gives $(k^*)^*=k$ and hence $(K^*)^*=K$. For every $z\in L^2$, Cauchy–Schwarz gives $\sup_{\|g\|\le1}|\langle z,g\rangle|\le\|z\|$; equality follows by $g=z/\|z\|$ if $z\ne0$, and both sides are zero if $z=0$. Thus $\|Kf\|=\sup_{\|g\|\le1}|\langle f,K^*g\rangle|\le\|f\|\|K^*\|$. Taking the supremum over the unit ball gives $\|K\|\le\|K^*\|$. Apply this inequality to $K^*$ and use its double adjoint to obtain the reverse inequality. Compactness of both operators was supplied by F1 and step 1.1. [F1, F4, step 2.1] ∎
