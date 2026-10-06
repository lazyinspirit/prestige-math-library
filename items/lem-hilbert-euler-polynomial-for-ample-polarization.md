---
id: lem-hilbert-euler-polynomial-for-ample-polarization
kind: lemma
title: "Euler polynomial for an arbitrary ample polarization"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-ample-powers-very-ample-proper-base
  - lem-serre-vanishing-induction-hyperplane
  - lem-ample-pullback-finite-morphism
  - lem-euler-characteristic-additive-short-exact
  - lem-proper-cohomology-field-extension
  - lem-support-dimension-preserved-field-extension
  - thm-serre-vanishing
  - thm-hilbert-polynomial-coherent-sheaf
  - def-axiom-of-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-29.md"
      - "research/frontier-38-owner-30-alpha-batch-29-5a.md"
      - "research/frontier-38-owner-30-step5-hash-29-post-5a.json"
    content_sha256: "3ade63515b91fa4716f2af308d972930a50d3b0ac443e4feb35accf1479ff357"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitsure, Section 1, Stratification by Hilbert Polynomials, page 4 (Euler polynomial; Snapper formulation)"
      url: "https://arxiv.org/pdf/math/0504590"
---

## Statement

Assume AC and DC. Let $X$ be projective over a field $k$, let $L$ be an ample invertible sheaf, and let $F$ be coherent. There is a unique polynomial $P_{F,L}\in\mathbb Q[t]$ such that $\chi(X,F\otimes L^{\otimes r})=P_{F,L}(r)$ for every integer $r$, with degree at most $\dim\operatorname{Supp}F$ when $F\ne0$. For sufficiently large $r$ this also equals $h^0(X,F\otimes L^{\otimes r})$. Therefore fibrewise eventual equality to a specified polynomial $P$ is equivalent to equality of the fibre Hilbert polynomial with $P$, and also equivalent here to the all-integer Euler-characteristic characterization. Extension of the field preserves this polynomial. No very-ampleness assumption on $L$ is imposed.

## Facts & Assumptions

**Given:** AC and DC, a projective scheme over a field, an ample invertible $L$, and coherent $F$.

[F1] All sufficiently large powers of $L$ give closed projective-space embeddings ([[thm-ample-powers-very-ample-proper-base]]). For an induced very ample polarization over an infinite field the regular-hyperplane lemma supplies an exact restriction sequence whose cokernel has support dimension one smaller, or is zero when the support has dimension zero ([[lem-serre-vanishing-induction-hyperplane]]). Ample bundles restrict to ample bundles on closed subschemes ([[lem-ample-pullback-finite-morphism]]).

[F2] Euler characteristic is additive in short exact sequences ([[lem-euler-characteristic-additive-short-exact]]). Cohomology and Euler characteristic commute with field extension ([[lem-proper-cohomology-field-extension]]), and support dimension is preserved ([[lem-support-dimension-preserved-field-extension]]). Serre vanishing for an arbitrary ample bundle is [[thm-serre-vanishing]]. For the embedding-induced polarization the all-integer Euler-polynomial assertion is also [[thm-hilbert-polynomial-coherent-sheaf]], Statement 1, whereas its eventual $h^0$ assertion is Statement 2.

## Proof

1.1 Extend to an infinite field by [F2]. Induct on $d=\dim\operatorname{Supp}F$, starting with the zero sheaf and its zero polynomial. By [F1] choose consecutive integers $a,a+1$ for which $L^a$ and $L^{a+1}$ are very ample. In each of these two embeddings choose a hyperplane avoiding the associated points of $F$. For $b=a,a+1$ the induced section of $L^b$ gives $0\to F\otimes L^{-b}\to F\to G_b\to0$, where $G_b$ is supported on the hyperplane and has support dimension $d-1$, or is zero if $d=0$. Its restricted $L$ is ample. By induction $\chi(G_b\otimes L^r)$ is a rational polynomial $g_b(r)$ of degree at most $d-1$; for $d=0$ it is zero. The exact sequence stays exact after every integer twist. [F1, F2, construct]

2.1 Put $f(r)=\chi(F\otimes L^r)$. Additivity gives $f(r)-f(r-b)=g_b(r)$ for $b=a,a+1$ and every integer $r$. Subtract the $b=a$ identity at $r-1$ from the $b=a+1$ identity at $r$ to get $f(r)-f(r-1)=g_{a+1}(r)-g_a(r-1)$, a polynomial of degree at most $d-1$. Every rational polynomial of that degree has a polynomial discrete antiderivative of degree at most $d$: in the binomial basis use $\binom{r}{j}-\binom{r-1}{j}=\binom{r-1}{j-1}$. Choose its additive constant to agree with $f(0)$. The difference from $f$ is then invariant under $r\mapsto r-1$ and zero at zero, hence zero for all integers, positive and negative. This proves the polynomial assertion and its degree bound; uniqueness follows because a polynomial vanishing on all sufficiently large integers is zero. [F2, step 1.1, algebra]

3.1 By [F2], Euler characteristics over the original field equal those over the infinite extension, so the same polynomial works there and under any further field extension. Serre vanishing makes its value equal $h^0$ in a sufficiently large tail. Equality in any such tail determines the polynomial uniquely by step 2.1, which gives precisely the claimed equivalences. The zero sheaf and empty source have zero polynomial and satisfy the same statements. [F2, step 2.1, algebra] ∎
