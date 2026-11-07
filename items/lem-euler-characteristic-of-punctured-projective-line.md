---
id: lem-euler-characteristic-of-punctured-projective-line
kind: lemma
title: "Compact-Support Euler Characteristic of a Punctured Projective Line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - thm-etale-cohomology-of-projective-line
  - def-compactly-supported-etale-cohomology
  - def-derived-direct-image-with-proper-supports
  - thm-etale-open-closed-localization-sequence-for-compact-support
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, *Lectures on Étale Cohomology*, version 2.21"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "Chapter I §14.5; compact-support long exact sequence for a curve and its proper completion"
    - title: "The Stacks Project, *Étale Cohomology*"
      url: "https://stacks.math.columbia.edu/download/etale-cohomology.pdf"
      locator: "Tag 03N8, Chapter 6, pp. 5–6; projective-line finite-coefficient computation, used only as background"
verification:
  precheck: pending
---

## Statement

Let $p$ be prime, let $\ell\ne p$, let $D\subset\mathbb P^1_{\overline{\mathbb F}_p}$ be a finite set containing $\infty$, and put $U=\mathbb P^1_{\overline{\mathbb F}_p}\setminus D$. With $\chi_c(U,\overline{\mathbb Q}_\ell):=\sum_i(-1)^i\dim_{\overline{\mathbb Q}_\ell}H_c^i(U,\overline{\mathbb Q}_\ell)$, one has
$$\chi_c(U,\overline{\mathbb Q}_\ell)=2-|D|.$$

## Statement references

[[thm-etale-cohomology-of-projective-line|Étale cohomology of the projective line]]

[[thm-etale-open-closed-localization-sequence-for-compact-support|Étale open–closed localization sequence for compact support]]

[[def-compactly-supported-etale-cohomology|Compactly supported étale cohomology]]

[J. S. Milne, *Lectures on Étale Cohomology*, Chapter I, §14.5](https://jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** The prime $p$, the prime $\ell\ne p$, the finite nonempty set $D$ containing infinity, and its open complement $U$.

[F1] [[thm-etale-cohomology-of-projective-line]]: $H^0(\mathbb P^1)=\overline{\mathbb Q}_\ell$, $H^1(\mathbb P^1)=0$, and $H^2(\mathbb P^1)=\overline{\mathbb Q}_\ell(-1)$; higher groups vanish.

[F2] [[thm-etale-open-closed-localization-sequence-for-compact-support]]: for $U\subset X$ open with closed complement $D$, compact-support cohomology has the natural long exact sequence $\cdots\to H_c^r(U)\to H_c^r(X)\to H_c^r(D)\to H_c^{r+1}(U)\to\cdots$. For the proper schemes $X=\mathbb P^1$ and $D$ used here, compact-support cohomology agrees with ordinary cohomology.

## Proof

1.1 Since $D$ is a nonempty finite disjoint union of geometric points, $H^0(D,\overline{\mathbb Q}_\ell)=\overline{\mathbb Q}_\ell^{|D|}$ and $H^i(D,\overline{\mathbb Q}_\ell)=0$ for $i>0$. Under [F1], the restriction map $H^0(\mathbb P^1)\to H^0(D)$ sends a constant to the same constant on every point, so it is injective. The long exact sequence [F2] then gives $H_c^0(U)=0$ and an exact sequence $0\to\overline{\mathbb Q}_\ell\to\overline{\mathbb Q}_\ell^{|D|}\to H_c^1(U)\to0$, whence $\dim H_c^1(U)=|D|-1$. [F1, F2, given, algebra]

2.1 The next part of [F2] is $0=H^1(\mathbb P^1)\to H^1(D)=0\to H_c^2(U)\to H^2(\mathbb P^1)=\overline{\mathbb Q}_\ell(-1)\to H^2(D)=0$. Thus $\dim H_c^2(U)=1$. Higher compact-support groups vanish by the same exact sequence and [F1]. Consequently $\chi_c(U)=0-(|D|-1)+1=2-|D|$. [F1, F2, step 1.1, algebra] ∎
