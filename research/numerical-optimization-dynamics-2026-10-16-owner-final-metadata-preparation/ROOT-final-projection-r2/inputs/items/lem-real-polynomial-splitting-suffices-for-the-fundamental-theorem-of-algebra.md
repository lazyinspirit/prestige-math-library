---
id: lem-real-polynomial-splitting-suffices-for-the-fundamental-theorem-of-algebra
kind: lemma
title: "To prove the fundamental theorem of algebra, it suffices to split every real polynomial over $\\mathbb C$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraically-closed-field, def-polynomials-that-split-and-splitting-fields, thm-complex-numbers-form-a-field, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
    - title: "Keith Conrad, Applications of Galois Theory, Theorem 2.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoisappn.pdf"
pipeline_run: frontier-20
---

## Statement

Assume every nonconstant polynomial in $\mathbb R[x]$ splits over $\mathbb C$.
Then $\mathbb C$ is algebraically closed.

## Facts & Assumptions

**Given:** Every nonconstant polynomial in $\mathbb R[x]$ splits over $\mathbb C$, and a nonconstant polynomial $g \in \mathbb C[x]$.

[L1] A field is algebraically closed exactly when every nonconstant polynomial over it has a root in the field ([[def-algebraically-closed-field]]).

[L2] A nonzero polynomial splits over a field extension when it is a nonzero scalar times a product of linear factors there ([[def-polynomials-that-split-and-splitting-fields]]).

[F1] The complex numbers form a field, and complex conjugation is a real-field automorphism of $\mathbb C$ ([[thm-complex-numbers-form-a-field]], [[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Write $g=u+iv$ with $u,v \in \mathbb R[x]$, and put $\overline g:=u-iv$. Then $$ g\overline g = u^2+v^2 \in \mathbb R[x]. $$ Because $g$ is nonconstant, so is $g\overline g$. [given, F1, algebra]

2.1 By the standing hypothesis and [L2], the real polynomial $g\overline g$ splits over $\mathbb C$, so it has a complex root $z$. In particular, $$ 0=(g\overline g)(z)=g(z)\overline g(z). $$ [given, L2, step 1.1]

3.1 Since $\mathbb C$ is a field by [F1], step 2.1 implies either $g(z)=0$ or $\overline g(z)=0$. [F1, step 2.1]

4.1 If $g(z)=0$ then $g$ already has a root in $\mathbb C$. If $\overline g(z)=0$, then conjugating that equality and using the conjugation law from [F1] gives $g(\overline z)=0$. Thus $g$ has a root in $\mathbb C$ in either case. [F1, step 3.1, algebra]

5.1 The polynomial $g \in \mathbb C[x]$ was arbitrary. Therefore every nonconstant polynomial over $\mathbb C$ has a root in $\mathbb C$, and [L1] makes $\mathbb C$ algebraically closed. [L1, step 4.1] ∎
