---
id: cor-every-complex-polynomial-splits-into-linear-factors
kind: corollary
title: "Every nonconstant polynomial in $\\mathbb C[x]$ splits into linear factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-algebraically-closed-splitting-and-finite-extension-criteria, thm-the-complex-numbers-are-algebraically-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Corollary 5.7"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
    - title: "Keith Conrad, Applications of Galois Theory, Theorem 2.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoisappn.pdf"
pipeline_run: frontier-20
---

## Statement

Every nonconstant polynomial in $\mathbb C[x]$ splits over $\mathbb C$.

## Facts & Assumptions

**Given:** A nonconstant polynomial $f \in \mathbb C[x]$.

[L1] The field $\mathbb C$ is algebraically closed ([[thm-the-complex-numbers-are-algebraically-closed]]).

[L2] A field is algebraically closed exactly when every nonconstant polynomial over it splits ([[prop-algebraically-closed-splitting-and-finite-extension-criteria]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the field $\mathbb C$ is algebraically closed. [L1]

2.1 Applying [L2] to the field $\mathbb C$ and the given polynomial $f$ shows that $f$ splits over $\mathbb C$. [step 1.1, L2]

3.1 Since $f$ was arbitrary, every nonconstant polynomial in $\mathbb C[x]$ splits over $\mathbb C$. [step 2.1] ∎
