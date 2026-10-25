---
id: thm-hilberts-theorem-90
kind: theorem
title: "Hilbert's theorem 90 for a finite cyclic extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclic-extension, def-field-norm-and-trace, thm-field-norm-and-trace-by-embeddings, thm-dedekind-linear-independence-of-characters]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 5.23 and Corollary 5.25"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "S. R. Ghorpade, Lectures on Field Theory and Ramification Theory, Section 1.3"
      url: "https://web.archive.org/web/20100705005645if_/http://www.math.iitb.ac.in:80/~srg/Lecnotes/isant.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite cyclic extension of degree $n$ with
$\operatorname{Gal}(K/F)=\langle\sigma\rangle$. For $b\in K^\times$, the
following are equivalent:

1. $N_{K/F}(b)=1$.
2. There exists $\beta\in K^\times$ with
   $$b=\frac{\beta}{\sigma(\beta)}.$$

## Facts & Assumptions

**Given:** A finite cyclic extension $K/F$ of degree $n$, a generator $\sigma$ of its Galois group, and an element $b\in K^\times$.

[F1] A cyclic extension is a finite Galois extension with cyclic Galois group ([[def-cyclic-extension]]).

[L1] In a finite Galois extension, the norm is the product over the distinct $F$-embeddings ([[thm-field-norm-and-trace-by-embeddings]]).

[L2] Distinct characters of a group into a field are linearly independent ([[thm-dedekind-linear-independence-of-characters]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction from 2 to 1, suppose $b=\beta/\sigma(\beta)$ for some $\beta\in K^\times$. Since the embeddings of $K/F$ are $1,\sigma,\dots,\sigma^{n-1}$, [L1] gives $$N_{K/F}(b)=\prod_{i=0}^{n-1}\frac{\sigma^i(\beta)}{\sigma^{i+1}(\beta)}=1,$$ the numerator and denominator cancelling cyclically because $\sigma^n=1$. [F1, L1]

1.2 For the converse, assume $N_{K/F}(b)=1$. For $0\le i<n$, set $$c_i:=\prod_{j=0}^{i-1}\sigma^j(b),$$ with the empty product $c_0=1$. Then the distinct automorphisms $1,\sigma,\dots,\sigma^{n-1}$ restrict to distinct characters $K^\times\to K^\times$, so [L2] implies that the $K$-linear operator $$T(x):=\sum_{i=0}^{n-1} c_i\,\sigma^i(x)$$ is not identically zero. Choose $x\in K$ with $\beta:=T(x)\ne0$. [F1, L2, choose]

2.1 The coefficients satisfy $c_{i+1}=c_i\sigma^i(b)$ for $0\le i<n-1$, and $c_n=N_{K/F}(b)=1$. Therefore $$\sigma(c_i)=b^{-1}c_{i+1}\qquad(0\le i<n-1),\qquad \sigma(c_{n-1})=b^{-1}.$$ Applying $\sigma$ to $\beta=T(x)$ and re-indexing the sum gives $$\sigma(\beta)=b^{-1}\beta.$$ Hence $b=\beta/\sigma(\beta)$. [step 1.2, algebra]

3.1 Steps 1.1 and 2.1 prove the equivalence. [step 1.1, step 2.1] ∎

## Remarks

- **The proof uses only Dedekind independence.** No cohomological language is needed here, although this is the classical vanishing of $H^1$ for a finite cyclic extension.
