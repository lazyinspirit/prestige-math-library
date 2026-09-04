---
id: thm-compactly-supported-vector-fields-are-complete
kind: theorem
title: "Compactly supported smooth vector fields are complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, def-complete-vector-field, thm-fundamental-theorem-on-flows, def-smooth-section-local-section-and-support, prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Every compactly supported smooth vector field on a smooth manifold is complete.

## Facts & Assumptions

**Given:** A smooth vector field $X$ on $M$ with compact support $K$.

[L1] A vector field is complete if and only if its maximal flow is global ([[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]]).

[L2] The maximal flow exists on an open domain and its time slices are the maximal integral curves ([[thm-fundamental-theorem-on-flows]]).

[L3] The support of a section is the closure of the set where it is nonzero ([[def-smooth-section-local-section-and-support]]).

## Proof

**Proof technique:** direct.

1.1 Let $\gamma:I\to M$ be a maximal integral curve of $X$ through some point $p$. If $\gamma(t_0)\notin K$ for some $t_0\in I$, then $X_{\gamma(t_0)}=0$ by [L3], so the constant curve through $\gamma(t_0)$ is an integral curve of $X$. Uniqueness therefore forces $\gamma$ to be constant on the connected component of $\{t\in I:\gamma(t)\notin K\}$ containing $t_0$. Thus every nonconstant part of $\gamma$ lies in $K$. [L3, given]

2.1 Suppose $I$ had a finite right endpoint $b$. Choose times $t_n\uparrow b$. If infinitely many $\gamma(t_n)$ lie in $K$, compactness of $K$ gives a subsequence converging to some $q\in K$. Otherwise $\gamma(t_n)\notin K$ for all large $n$, and step 1.1 makes those tail values constant on a neighbourhood of $b$; hence $\gamma(t_n)\to q$ for some $q\in M\setminus K$. [step 1.1, given]

3.1 By [L2], there is a local flow through $q$ defined on some interval $(-\varepsilon,\varepsilon)$. For $n$ large, $\gamma(t_n)$ lies in its domain, so uniqueness of integral curves extends $\gamma$ past $b$ by flowing forward from $\gamma(t_n)$ for time larger than $b-t_n$. This contradicts maximality. [L2, step 2.1]

4.1 The same argument excludes a finite left endpoint. Therefore every maximal integral curve is defined on all of $\mathbb R$, and [L1] implies that $X$ is complete. [L1, step 3.1] ∎
