---
id: "lem-characteristic-functions-under-affine-maps-and-independent-sums"
kind: "lemma"
title: "Characteristic functions under affine maps and independent sums"
deps: ["def-characteristic-function-of-a-real-random-variable", "thm-complex-exponential-addition-and-real-extension", "thm-factorization-of-expectations-for-independent-variables", "thm-linearity-of-the-lebesgue-integral-on-l-one"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For real $a,b,t$, $\varphi_{aX+b}(t)=e^{itb}\varphi_X(at)$. For a finite mutually independent family $(X_j)_{j=1}^n$ of real random variables, $\varphi_{\sum_jX_j}(t)=\prod_j\varphi_{X_j}(t)$. The empty sum has characteristic function one.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The characteristic function is the expectation of the exponential. [[def-characteristic-function-of-a-real-random-variable]].

[F2] The exponential of a sum is a product. [[thm-complex-exponential-addition-and-real-extension]].

[F3] Real integrable Borel coordinate functions factor over independent variables. [[thm-factorization-of-expectations-for-independent-variables]].

[F4] Finite complex linear combinations commute with integration. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

## Proof

**Proof technique:** direct.

1.1 The addition law gives $e^{it(aX+b)}=e^{itb}e^{i(at)X}$. Both random exponentials are bounded and integrable. Pulling out the constant $e^{itb}$ gives the affine identity, including $a=0$ and $b=0$. [F1, F2, F4]

1.2 For $n\ge1$ put $c_j=\cos(tX_j)$ and $s_j=\sin(tX_j)$. Expand $$e^{it\sum_jX_j}=\prod_j(c_j+is_j)=\sum_{A\subseteq\{1,\ldots,n\}}i^{|A|}\prod_{j\in A}s_j\prod_{j\notin A}c_j.$$ Each real factor is a bounded Borel function of its own coordinate, so the real factorization theorem applies to each of these finitely many products. Complex linearity then gives $$\mathbb E e^{it\sum_jX_j}=\sum_A i^{|A|}\prod_{j\in A}\mathbb E s_j\prod_{j\notin A}\mathbb E c_j=\prod_j(\mathbb E c_j+i\mathbb E s_j)=\prod_j\varphi_{X_j}(t).$$ [F1, F2, F3, F4]

2.1 For $n=0$ the sum is zero, its exponential is one, and the empty product is one. For $n=1$ the asserted identity is the defining expectation itself. [F1] ∎
