---
id: ex-one-color-quiver-full-flags-need-not-be-semismall
kind: example
title: "One-color quiver full flags need not be semismall"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-axiom-of-choice,
       lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "M. Varagnolo, E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992v2, Sec. 1.1"
      url: "https://arxiv.org/pdf/0901.3992"
      locator: "the representation space $E_V$, the flag variety of type $y$, the incidence variety of $x$-stable flags and its proper first projection; the source uses decreasing flags and the empty-arrow case $E_V=0$"
    - title: "J. S. Milne, Algebraic Geometry, Secs. 6.m-6.n"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "printed pp. 149-152: the flag variety as a closed subset of a product of Grassmannians and its dimension"
---

## Example

Assume the Axiom of Choice as inherited from the cited geometry suppliers. Take
the loopless quiver with a single vertex and no arrows, $\dim V=n\ge2$, and its
unique word. Then $E_V=0$ and $X_\nu=\operatorname{Flag}(V)$. The proper
incidence map to the point need not be semismall: in this example its defect
$2\dim(\text{fiber})+\dim(\text{image})-\dim X_\nu$ is positive.

## Verification

**Given:** the loopless one-vertex quiver with no arrows, the space $V$ of
dimension $n\ge2$, the unique word $\nu$ of content $n$, and the choice
assumption of the Example.

1.1 There are no arrows, so $E_V=0$, and the stability conditions of the incidence lemma [[lem-quiver-full-flag-incidence-has-a-smooth-projective-compactification]] are vacuous; the lemma gives $X_\nu=\operatorname{Flag}(V)$ as the total space of the rank-zero subbundle, of dimension $n(n-1)/2$, and the map $\pi_\nu$ is the constant map to the point $E_V=0$, which is proper since it is projective. [given, algebra]

2.1 The image of $\pi_\nu$ is the single point, and its single fiber is all of $X_\nu$, so the defect $2\dim(\text{fiber})+\dim(\text{image})-\dim X_\nu$ equals $2\cdot n(n-1)/2+0-n(n-1)/2=n(n-1)/2$, which is positive for $n\ge2$; hence this proper incidence map is not semismall. For $n=0$ or $n=1$ the flag space is a point and the defect is zero, so the non-semismall boundary is exactly $n\ge2$, and a general quiver-flag decomposition proof must allow this case. [step 1.1, algebra] ∎
