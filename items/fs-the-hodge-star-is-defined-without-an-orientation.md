---
id: "fs-the-hodge-star-is-defined-without-an-orientation"
kind: "false-statement"
title: "The hodge star is defined without an orientation"
deps: ["def-riemannian-hodge-star", "thm-hodge-star-is-a-smooth-bundle-isomorphism"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The ordinary Hodge star is determined by the Riemannian metric without any orientation.

## Facts & Assumptions

**Given:** The same Euclidean metric $dx^2$ on $\mathbb R$, with the two possible orientations.

[F1] [[def-riemannian-hodge-star]]: On an oriented Riemannian $n$-manifold, for $0\le k\le n$ the **Hodge star** is the fibrewise map $*:\bigwedge^kT^*M\to\bigwedge^{n-k}T^*M$ characterized by $\alpha\wedge*\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g$ for every pair of $k$-covectors. The pairing is the determinant-normalized one of prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles, and the positive unit volume form is prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form. This is the ordinary, orientation-dependent star, with no orientation-line twist. Existence, uniqueness and smoothness are proved in thm-hodge-star-is-a-smooth-bundle-isomorphism. For $n=k=0$, it multiplies by the chosen orientation sign.

[F2] [[thm-hodge-star-is-a-smooth-bundle-isomorphism]]: The Hodge star exists uniquely and is a smooth bundle isomorphism in every degree $0\le k\le n$.

## Refutation

**Proof technique:** direct.

1.1 With positive orientation the volume form is $dx$; with negative orientation it is $-dx$. In degree zero, $\langle1,1\rangle=1$, so the defining identity $1\wedge *1=\langle1,1\rangle\operatorname{vol}$ gives $*_+1=dx$ and $*_-1=-dx$. Both are the stars for their respective oriented metrics. [F1, F2, given]

2.1 The one-form $dx$ is nonzero, so the two results differ, although the underlying metric is identical. Hence that metric alone cannot specify the ordinary Hodge star; the claimed orientation independence fails already in dimension one. [step 1.1] ∎

## Source locator

Lee, Problem 16-18(a–c), pp. 437–438, Hodge star on oriented inner-product spaces; the one-dimensional orientation reversal is calculated above.
