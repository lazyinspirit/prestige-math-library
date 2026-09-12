---
id: "lem-square-integrable-kernels-define-bounded-compact-integral-operators"
kind: "lemma"
title: "Square integrable kernels define bounded compact integral operators"
deps: ["def-l-two-operator-conventions-for-weak-mixing", "lem-product-rectangle-kernels-are-dense-in-complex-l-two", "thm-completion-measurable-functions-have-base-measurable-representatives", "thm-tonelli-and-fubini-for-completed-product-measures", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "thm-complex-lp-completeness-and-almost-everywhere-subsequences", "thm-bolzano-weierstrass", "def-axiom-of-choice"]
sources:
  references:
    - title: Axler Example 10.5 p.282; 10.67–10.70 pp.312–314
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
verification:
  audited: 2026-09-12
---

## Statement

Assume AC. Let $(X,\mathcal A,\mu)$ be a probability space and $k\in L^2$ of its completed square. The formula $Kf(x)=\int k(x,y)f(y)\,d\mu(y)$, interpreted a.e., defines a representative-independent bounded compact linear operator on complex $L^2(\mu)$, with $\|K\|\le\|k\|_2$. It is an operator-norm limit of finite-rank rectangle-kernel operators. If $K=0$, then $k=0$ as an $L^2$ class. For incomplete factors the integrals can first be computed with product-measurable representatives and then interpreted as classes on the original factors.

## Facts & Assumptions

[F1] Rectangle combinations are dense in the completed product $L^2$, and zero pairing against every rectangle forces the zero class [[lem-product-rectangle-kernels-are-dense-in-complex-l-two]].

[F2] Completed-product Tonelli and Fubini apply to sigma-finite factors, with a.e. section assertions [[thm-tonelli-and-fubini-for-completed-product-measures]].

[F3] Cauchy–Schwarz holds for the complex $L^2$ pairing [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F4] Complex $L^2$ is complete under countable choice [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]].

[F5] Every bounded real sequence has a convergent subsequence [[thm-bolzano-weierstrass]].

[F6] Compactness means subsequential norm convergence on bounded sequences [[def-l-two-operator-conventions-for-weak-mixing]].

[F7] Assume AC [[def-axiom-of-choice]].

[F8] Under countable choice, a real function measurable for a completed measure has a base-measurable almost-everywhere representative [[thm-completion-measurable-functions-have-base-measurable-representatives]].

[F9] On an uncompleted sigma-finite product, Fubini gives integrable section-integral functions on the original factors after zero extension on exceptional parameter sets [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

## Proof

**Given:** The probability space, kernel and AC in the statement.

1.1 Apply F8 separately to the real and imaginary parts of k on the completed product. Replacing their infinite values on the resulting measurable null sets by zero and recombining gives a finite product-measurable representative of k. Tonelli on $|k|^2$ gives square-integrable sections for almost every x. For such x, Cauchy–Schwarz gives $|Kf(x)|^2\le(\int|k(x,y)|^2\,d\mu(y))\|f\|_2^2$. Also the product-square function $f(y)$ has norm $\|f\|_2$, since $\mu(X)=1$; hence $\iint|k(x,y)f(y)|\le\|k\|_2\|f\|_2<\infty$. Apply F9 to the product-measurable integrable function $k(x,y)f(y)$, using an original-factor measurable representative of $f$. It gives an original-factor measurable section integral after assigning zero on its measurable null exceptional parameter set. Integrating the squared inequality proves $\|Kf\|_2\le\|k\|_2\|f\|_2$. Thus the output is a class on the original factor even when that factor is incomplete. [F2, F3, F7, F8, F9]

2.1 Changing $k$ on a product-null set changes its sections only on factor-null sets for a.e. $x$, by Tonelli on a measurable null cover. Changing $f$ on a factor-null set likewise leaves the integrals unchanged for a.e. $x$. Thus $K$ is well-defined on classes; integral linearity gives complex linearity. Applied to $k-l$, step 1.1 gives $\|K_k-K_l\|\le\|k-l\|_2$. [F2, step 1.1]

3.1 A rectangle kernel $\sum_{j=1}^m a_j\mathbf1_{E_j}(x)\mathbf1_{F_j}(y)$ maps $f$ to $\sum_j a_j\mathbf1_{E_j}\int_{F_j}f$, so its range lies in the span of finitely many indicators. Delete dependent vectors from this finite list. Successively subtract from each remaining vector its components along previous normalized vectors, then normalize the nonzero residual. Pairing expansion gives a finite orthonormal basis of that span. For a bounded sequence of images each basis coefficient is bounded by Cauchy–Schwarz. Apply real Bolzano–Weierstrass successively to their finitely many real and imaginary coordinates. The resulting common subsequence has all coordinates convergent, hence its finite basis sum converges in norm. In dimension zero every image is zero. Thus every rectangle-kernel operator is compact. [F3, F5, F6, step 2.1]

4.1 By F1 and AC choose rectangle kernels $k_m$ with $\|k-k_m\|_2<2^{-m}$. For a sequence $\|f_n\|\le B$, successively extract nested subsequences whose $K_{k_m}$ images converge, using step 3.1 and AC. The diagonal subsequence, with strictly increasing original indices, is eventually a subsequence of every chosen one. For two sufficiently late diagonal terms $u,v$, step 2.1 gives $\|Ku-Kv\|\le2B2^{-m}+\|K_{k_m}u-K_{k_m}v\|$. First fix $m$ to make the first term small, then choose the two indices large to make the second small. The images are Cauchy and converge in $L^2$ by completeness. This proves compactness and the claimed finite-rank norm approximation; if $B=0$, all terms were zero already. [F1, F4, F7, step 2.1, step 3.1]

5.1 Finally, if $K=0$, then for each measurable $E,F$, Fubini gives $0=\langle K\mathbf1_F,\mathbf1_E\rangle=\int_{E\times F}k=\langle k,\mathbf1_{E\times F}\rangle$. The zero-pairing conclusion of rectangle density gives $k=0$. Each test is a separate equality of integrals; no common exceptional set for all tests is required. [F1, F2, step 4.1] ∎
