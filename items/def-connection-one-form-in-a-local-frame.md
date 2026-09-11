---
id: def-connection-one-form-in-a-local-frame
kind: definition
title: "Connection one form in a local frame"
status: published
origin: pipeline
deps: ["lem-a-bundle-connection-is-local-and-restricts-to-open-sets","def-local-frame-and-global-frame-of-a-vector-bundle","prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

Let $e=(e_1,\ldots,e_r)$ be a local frame of $E$ on an open set $U$, in the sense of [[def-local-frame-and-global-frame-of-a-vector-bundle]]. Restrict a given connection to $U$ by [[lem-a-bundle-connection-is-local-and-restricts-to-open-sets]]. Its **connection one-form in the frame $e$** is the matrix $\omega=(\omega^i{}_j)$ of scalar one-forms on $U$ characterized by
$$\nabla_X e_j=\sum_i\omega^i{}_j(X)e_i.$$
For each $j$, the smooth Hom section $\nabla e_j$ has unique fibre coordinates in $e$; these coordinates are linear in the direction and smooth, hence are scalar one-forms. Smoothness may be tested in any coordinate chart and frame, using [[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]].

Our convention treats $e$ as a row and the coefficients $u$ of $s=eu$ as a column. A frame change is $e'=eA$ with a smooth invertible matrix $A$, so $u=Au'$ for the same section. Products of matrices and one-forms use ordinary matrix multiplication with scalar functions as coefficients. In a coordinate chart, $\omega^i{}_j=\sum_k\Gamma^i{}_{kj}\,dx^k$; this notation does not assert tensorial transformation for $\Gamma$.

For rank zero the frame and connection matrix are empty; for rank one $\omega$ is a scalar one-form. On a zero-dimensional base every one-form is zero. The frame is supplied locally, so this definition involves no global selection or existence theorem.
