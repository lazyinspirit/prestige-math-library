---
id: lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs
kind: lemma
title: "A nonreal root of a real polynomial comes with its complex conjugate"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-real-automorphisms-of-the-complex-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Statement

Let $f \in \mathbb R[x]$ and let $z \in \mathbb C \setminus \mathbb R$. If
$f(z)=0$, then $f(\overline z)=0$.

## Facts & Assumptions

**Given:** A real polynomial $f \in \mathbb R[x]$ and a nonreal complex number $z$ with $f(z)=0$.

[L1] Complex conjugation is a field automorphism of $\mathbb C$ that fixes $\mathbb R$ pointwise ([[thm-real-automorphisms-of-the-complex-numbers]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], complex conjugation fixes every coefficient of $f$. [L1]

1.2 Apply conjugation to the equality $f(z)=0$. Because conjugation is a field automorphism and fixes the coefficients of $f$, this gives $$ 0=\overline{f(z)}=f(\overline z). $$ [L1, given, algebra]

2.1 Therefore $\overline z$ is also a root of $f$. Since $z \notin \mathbb R$, one has $\overline z \ne z$, so the two roots form a conjugate pair. [step 1.2, algebra] ∎
