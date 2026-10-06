---
id: rem-domain-classes-for-the-mean-zero-poincare-inequality
kind: remark
title: "Domain classes covered by the mean-zero Poincare inequality"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-john-domain-and-john-constant, thm-poincare-wirtinger-on-bounded-john-domains, cor-poincare-wirtinger-on-convex-domains]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 5 §5.4, Remark 5.32(1)-(2), printed p. 141."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Theorem 3.29 and proof, printed pp. 78–79, for the bounded connected C^1 case; the John/cone comparison is Kinnunen Remark 5.32."
---

## Remark

This page proves the mean-zero Poincare-Wirtinger inequality directly for bounded John domains [[thm-poincare-wirtinger-on-bounded-john-domains]] and for bounded convex domains [[cor-poincare-wirtinger-on-convex-domains]], both on the same page. Bounded $C^1$ and bounded Lipschitz domains satisfy the uniform interior cone condition, and every nonempty bounded connected open set satisfying that uniform condition is a John domain (Kinnunen, Remark 5.32(1)); hence the inequality applies to those classes as well. The John-class hypothesis $1\le p<\infty$ is the one used by the direct proof; no Sobolev exponent and no compactness input enter it. The bounded connected extension-domain Sobolev-Poincare form $1<p<n$ is a separate statement on this page, proved from the local mean-zero estimate and the extension-domain embedding, and it does not supersede the John-domain result.

## Source notes

The class inclusions and the "twisted cones" picture are Kinnunen's Remark 5.32, printed p. 141, with Laugesen's Theorem 3.29 supplying the bounded connected smooth-domain Poincare comparison. This remark records scope only: it asserts no inequality of its own, and the two direct John and convex results together with the separate extension-domain statement are proved elsewhere on this page.
