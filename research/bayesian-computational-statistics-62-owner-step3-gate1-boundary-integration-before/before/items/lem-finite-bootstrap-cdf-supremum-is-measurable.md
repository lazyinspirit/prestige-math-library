---
id: lem-finite-bootstrap-cdf-supremum-is-measurable
kind: lemma
title: Measurability of the finite-bootstrap CDF supremum
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-iid-empirical-bootstrap-sample
  - thm-cardinality-of-a-set-of-functions
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - prop-indicator-function-is-measurable-iff-its-set-is-measurable
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-cumulative-distribution-function-of-a-random-variable
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §2"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
      locator: "Complete 28-page chapter inspected. §2, PDF pp. 4–7, supplies the empirical bootstrap setup only; the measurable-supremum formula and proof are local."
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §§1–2"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
      locator: "Complete 35-page article inspected. §§1–2 give empirical-law and IID resampling context only; the measurable-supremum result is proved locally."
---

## Statement

Let $n,d\ge1$, let $(X_1,\ldots,X_n)$ be a measurable $(\mathbb R^d)^n$-valued random vector, and fix $a\in\mathbb R^d$. For each finite index tuple $\omega=(i_1,\ldots,i_n)\in\mathsf I_n=\{1,\ldots,n\}^n$, define the projected centered bootstrap-mean value
$$R_{n,\omega}=\sqrt n\,a^T\!\left(\frac1n\sum_{\ell=1}^n X_{i_\ell}-\bar X_n\right),\qquad \bar X_n=\frac1n\sum_{i=1}^nX_i.$$
The finite-index conditional bootstrap CDF is
$$F_n^*(t)=n^{-n}\sum_{\omega\in\mathsf I_n}1\{R_{n,\omega}\le t\}.$$
For every fixed continuous cumulative distribution function $G:\mathbb R\to[0,1]$, the supremum
$$D_n=\sup_{t\in\mathbb R}|F_n^*(t)-G(t)|$$
is a measurable real random variable.

## Facts & Assumptions

**Given:** A measurable sample vector, finite $n,d\ge1$, fixed $a$, the finite-index bootstrap in the statement, and a fixed continuous CDF $G$.

[F1] The bootstrap index set has $n^n$ tuples, each with mass $n^{-n}$, and the conditional law is their finite uniform average. [[def-iid-empirical-bootstrap-sample]] [[thm-cardinality-of-a-set-of-functions]]

[F2] Finite coordinate sums and scalar multiples of measurable real-valued maps are measurable; measurable indicators of measurable events and finite lattice maxima are measurable. [[def-measurable-function-between-measurable-spaces]] [[def-borel-sigma-algebra]] [[prop-indicator-function-is-measurable-iff-its-set-is-measurable]] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F3] The CDF $G$ is nondecreasing, and by assumption it is continuous. [[def-cumulative-distribution-function-of-a-random-variable]]

[F4] A continuous real-valued map is Borel measurable. [[thm-continuous-preimages-of-borel-sets-are-borel]]

## Proof

1.1 Fix an outcome and let $u_1<\cdots<u_m$ be the distinct values among the finite list $(R_{n,\omega})_{\omega\in\mathsf I_n}$. Write $F_n^*(u_j^-)=n^{-n}\#\{\eta:R_{n,\eta}<u_j\}$. On $[u_j,u_{j+1})$, $F_n^*$ is constant at $F_n^*(u_j)$ and $G$ is nondecreasing, so the absolute difference is bounded by the larger of its two endpoint errors, $|F_n^*(u_j)-G(u_j)|$ and $|F_n^*(u_{j+1}^-)-G(u_{j+1})|$. For $t<u_1$, the error is at most $|F_n^*(u_1^-)-G(u_1)|$; for $t\ge u_m$, it is at most $|F_n^*(u_m)-G(u_m)|$. Each left-limit error is approached as $t\uparrow u_j$, and each right-value error occurs at $u_j$. Therefore $D_n=\max_{\omega\in\mathsf I_n}\max\{|F_n^*(R_{n,\omega})-G(R_{n,\omega})|,\ |F_n^*(R_{n,\omega}^-)-G(R_{n,\omega})|\}$, where $F_n^*(r^-)=n^{-n}\#\{\eta:R_{n,\eta}<r\}$. [F1, F3, given, algebra]

2.1 For each fixed tuple $\omega$, $R_{n,\omega}$ is a finite linear combination of measurable coordinates, hence measurable by [F2]. Thus each comparison event $\{R_{n,\eta}\le R_{n,\omega}\}$ or $\{R_{n,\eta}<R_{n,\omega}\}$ is measurable by applying [F2] to the measurable difference and its Borel half-line. Consequently $F_n^*(R_{n,\omega})$ and $F_n^*(R_{n,\omega}^-)$ are measurable finite sums; $G(R_{n,\omega})$ is measurable by [F4]. The finite maximum in step 1.1 is measurable by [F2], so $D_n$ is measurable. [F1, F2, F3, F4, step 1.1, algebra] ∎
