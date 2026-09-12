---
id: "lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis"
kind: "lemma"
title: "Convolution of distributions is well defined under the support hypothesis"
deps: ["def-convolution-of-distributions-when-one-has-compact-support", "thm-tensor-product-distributions-and-iterated-pairings", "lem-test-function-cutoffs-and-euclidean-localization", "thm-local-finite-order-characterization-of-distributions", "def-support-of-a-distribution", "thm-distributions-form-a-sheaf"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For an integer $n\ge1$ and distributions $u,v$ on $\mathbb R^n$, if at least one has compact support, the convolution candidate is cutoff-independent and defines a distribution. It is bilinear, commutative, and $\operatorname{supp}(u*v)\subseteq\operatorname{supp}u+\operatorname{supp}v$. These claims hold in ZF.

## Facts & Assumptions

[F1] The candidate pairs $u\otimes v$ with $\chi(x,y)\psi(x+y)$; the relevant support intersection is compact ([[def-convolution-of-distributions-when-one-has-compact-support]]).

[F2] Tensor products are distributions with product support and interchangeable pairing orders ([[thm-tensor-product-distributions-and-iterated-pairings]]).

[F3] Compact sets admit smooth compact cutoffs equal to one on neighborhoods ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F4] A distribution vanishes on tests supported outside its support, by the support definition and locality ([[def-support-of-a-distribution]], [[thm-distributions-form-a-sheaf]]).

[F5] Compactwise finite-order bounds characterize distributions ([[thm-local-finite-order-characterization-of-distributions]]).

## Proof

**Given:** an integer $n\ge1$, $u,v$ on $\mathbb R^n$, and supports $S,T$, with one compact.

1.1 Two allowed cutoffs have difference zero near $E_\psi$ of F1. At every point of $S\times T$ outside $E_\psi$, the function $\psi(x+y)$ vanishes on a neighborhood. Thus the compact test $(\chi-\widetilde\chi)\psi(x+y)$ has support disjoint from $S\times T$. F2 and F4 make its pairing zero. This proves independence; if $E_\psi$ is empty the zero cutoff gives zero. [given, F1, F2, F4]

2.1 Fix compact $K\subset\mathbb R^n$. F1 and F3 give one cutoff for $E_K=(S\times T)\cap a^{-1}(K)$, valid for every test supported in $K$. The compact support $L$ of this cutoff is fixed. F5 gives an order $m$ tensor estimate there. The ordinary product and chain rules give $p_m(\chi\,\psi\circ a)\le A_{\chi,m}p_m(\psi)$: each mixed derivative of $\psi(x+y)$ is a derivative of $\psi$ of the same total order, and the finite Leibniz sum has bounded cutoff coefficients. The candidate is linear in $\psi$ by using this same cutoff for a finite sum, and F5 proves continuity. Bilinearity in the distributions follows similarly from one cutoff for the finite union of their relevant support intersections whenever each convolution is defined under the compact-factor condition. [step 1.1, F1, F2, F3, F5]

3.1 Reflection of the two coordinate blocks sends an allowed cutoff to an allowed cutoff for $v*u$. By F2 the tensor values agree after this interchange. One may verify the coordinate interchange first on product tests and then on their dense span, as in F2. Hence $u*v=v*u$. [step 2.1, F1, F2]

4.1 Suppose $S$ is compact and both sets are nonempty. If $z\notin S+T$, the continuous function $s\mapsto\operatorname{dist}(z-s,T)$ is positive on $S$, hence has positive minimum $d$. Every $z'$ with $|z'-z|<d/2$ remains outside $S+T$. Thus $S+T$ is closed. The case of compact $T$ follows by interchange, and empty summands give the empty closed set. A test supported in its complement has $E_\psi=\varnothing$, so step 1.1 gives zero. F4 proves the support inclusion. Zero factors give the zero distribution; no lower bound or equality of convolution supports is asserted. $\square$ [step 3.1, step 1.1, given, F4]
