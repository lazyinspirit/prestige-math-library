---
id: lem-regular-sequence-koszul-acyclicity-induction
kind: lemma
title: "Regular Sequence Koszul Acyclicity Induction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-basic-koszul-homology, lem-koszul-mapping-cone-homology-exact-sequence]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

If $H_i(K(\mathbf x;M))=0$ for every $i>0$ and multiplication by $y$ is injective on $M/(\mathbf x)M$, then all positive homology of $K(\mathbf x,y;M)$ vanishes.

## Facts & Assumptions

**Given:** The ring, finite sequence, module, and element stated in the claim. The declared prerequisites used here are [[thm-basic-koszul-homology]] and [[lem-koszul-mapping-cone-homology-exact-sequence]].

## Proof

**Proof technique:** direct.

1.1 Put $C=K(\mathbf x;M)$. By hypothesis $H_i(C)=0$ for $i>0$, while $H_0(C)=M/(\mathbf x)M$ by the basic Koszul-homology calculation. [given, algebra]

2.1 The mapping-cone exact sequence for $K(\mathbf x,y;M)$ identifies its $H_1$ with the kernel of multiplication by $y$ on $H_0(C)$, because $H_1(C)=0$; this kernel is zero by hypothesis. For $i>1$, the adjacent groups $H_i(C)$ and $H_{i-1}(C)$ both vanish, so exactness gives $H_i(K(\mathbf x,y;M))=0$. [step 1.1, algebra] ∎
