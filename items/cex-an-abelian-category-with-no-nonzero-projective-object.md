---
id: cex-an-abelian-category-with-no-nonzero-projective-object
kind: counterexample
title: "The abelian category of finite abelian groups has no nonzero projective object"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-projective-object-characterisations, def-a-category-with-enough-projectives-and-with-enough-injectives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Appendix A.4"
      url: "https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf"
pipeline_run: frontier-22
---

## Statement refuted

Every abelian category has a nonzero projective object.

## Facts & Assumptions

**Given:** The abelian category $\mathbf{FinAb}$ of finite abelian groups.

[L1] Projective objects are exactly those for which every epimorphism onto them
splits ([[thm-projective-object-characterisations]]).

[L2] Enough projectives would require, in particular, some nonzero projective
object ([[def-a-category-with-enough-projectives-and-with-enough-injectives]]).

## Counterexample

1.1 The category $\mathbf{FinAb}$ is abelian: kernels, cokernels, and finite biproducts of homomorphisms of finite abelian groups are again finite abelian groups. Let $P$ be a nonzero finite abelian group, and fix a prime $p$ for which $P$ has a nonzero $p$-primary quotient. Among all cyclic quotients of $P$ of the form $\mathbb Z/p^m$, choose one with maximal $m$, say $u:P\twoheadrightarrow \mathbb Z/p^m$. [L2, choose]

2.1 Let $q:\mathbb Z/p^{m+1}\twoheadrightarrow \mathbb Z/p^m$ be the canonical quotient map. If $P$ were projective, [L1] would lift $u$ to $g:P\to \mathbb Z/p^{m+1}$ with $q g=u$. Since $u$ is surjective, so is $g$. Thus $\mathbb Z/p^{m+1}$ would be a quotient of $P$, contradicting maximality of $m$. Therefore no nonzero object of $\mathbf{FinAb}$ is projective. So $\mathbf{FinAb}$ is an abelian category with no nonzero projective object. [L1, step 1.1] ∎
