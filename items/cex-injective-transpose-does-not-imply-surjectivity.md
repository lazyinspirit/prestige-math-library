---
id: cex-injective-transpose-does-not-imply-surjectivity
kind: counterexample
title: "Injective transpose does not imply surjectivity"
status: published
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "cor-ell-p-duality-by-counting-measure", "rem-ell-p-is-l-p-of-counting-measure"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Example 4.9, p.174; Brezis Remark 20, p.48"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Finite sequences belong to the range and approximate every ell-two vector by tails. The target y_n=1/(n+1) lies in ell-two, but its forced preimage (1,1,...) does not. Bound the sum of 1/(n+1)^2 by telescoping for n>=1. Compute the transpose by the real pairing."
---

## Statement refuted

An injective transpose does not force surjectivity of the original bounded operator. On real $\ell^2$, define $$(Tx)_n=\frac{x_n}{n+1}\qquad(n\ge0).$$ Under the real counting-measure dual identification, $T^*=T$. Both maps are injective with dense nonclosed range, and neither is onto.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F2] From [[cor-ell-p-duality-by-counting-measure]], with its stated hypotheses: Let $1 \le p < \infty$ and let $q$ be conjugate to $p$. Every bounded linear functional $\Lambda:\ell^p\to\mathbb R$ is of the form $\Lambda(a)=\sum_{n=0}^\infty a_nb_n$ for a unique sequence $b \in \ell^q$. Moreover, $\|\Lambda\|=\|b\|_{\ell^q}.$

[F3] From [[rem-ell-p-is-l-p-of-counting-measure]], with its stated hypotheses: On $(\mathbb N,\mathcal P(\mathbb N),\#)$ with counting measure, every function $f:\mathbb N\to\mathbb R$ is measurable. Writing $a_k:=f(k)$, one has $\int |f|^p\,d\#=\sum_{k=0}^\infty |a_k|^p\qquad(0<p<\infty),$ by the counting-measure integral dictionary, so $\mathcal L^p(\#)$ is exactly the usual sequence class $\ell^p$. Also $\|f\|_\infty=\sup_{k\in\mathbb N}|a_k|,$ because a subset of $\mathbb N$ has counting measure zero only when it is empty. Hence the quotient by almost-everywhere equality does nothing: for counting measure on $\mathbb N$, equality almost everywhere means equality everywhere.

## Counterexample

1.1 The real counting-measure model has $\|x\|_2^2=\sum_n|x_n|^2$. Thus $\|Tx\|_2\le\|x\|_2$ and $T$ is linear and injective. Every finite-support $y$ has the finite-support preimage $x_n=(n+1)y_n$; truncating a square-summable sequence approximates it because the squared tail sums tend to zero. Therefore the range is dense. [F3]

2.1 For $a,x\in\ell^2$, the pairing is $\sum_na_nx_n$. Absolute convergence follows, for example, from $2|a_nx_n|\le|a_n|^2+|x_n|^2$. Hence $(T^*a)(x)=\sum_na_nx_n/(n+1)=\sum_n(Ta)_nx_n$, and uniqueness in the real duality theorem at $p=2$ gives $T^*=T$. [F1, F2, step 1.1]

3.1 The sequence $y_n=1/(n+1)$ lies in $\ell^2$: the zeroth squared term is one and for $n\ge1$, $1/(n+1)^2\le1/n-1/(n+1)$, whose sums telescope. A preimage would satisfy $x_n=1$ for all $n$, which is not square summable. Thus $T$ is not onto and its dense range is proper, hence nonclosed. By step 2.1 the same is true of $T^*$. The formula is defined at index zero, and zero is in both ranges. [step 1.1, step 2.1] ∎
