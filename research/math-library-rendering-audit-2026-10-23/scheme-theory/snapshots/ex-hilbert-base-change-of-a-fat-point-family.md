---
id: ex-hilbert-base-change-of-a-fat-point-family
kind: example
title: "A flat fat-point family and its base changes"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-hilbert-polynomial-finite-scheme-length
  - def-hilbert-functor-of-flat-projective-subschemes
  - lem-universal-family-and-hilbert-polynomial-strata
  - def-axiom-of-choice
  - def-dependent-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-29.md; immutable carrier: research/frontier-38-owner-30-step5-hash-29-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-29 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Example

Let $A=k[t]$ and let $Z\subseteq\mathbb P^1_A$ be defined by $X^2-tY^2=0$. It is a flat family of length two, and every base change, including a nonreduced base change, is the pullback of its classifying map to the constant-polynomial Hilbert stratum.

## Verification

**Given:** AC and DC, a field $k$, and $A=k[t]$.

[F1] Finite schemes have the constant length polynomial ([[lem-hilbert-polynomial-finite-scheme-length]]). Classifying maps, universal families, and arbitrary base change are [[lem-universal-family-and-hilbert-polynomial-strata]], with the family conditions in [[def-hilbert-functor-of-flat-projective-subschemes]].

1.1 The family has no points on $Y=0$: there its equation becomes $X^2=0$ but $X$ is invertible. On $Y\ne0$ its algebra is $A[x]/(x^2-t)$, free over $A$ with basis $1,x$ by division by the monic polynomial. It is finite flat of rank two, and its closed immersion is finitely presented. Every fibre has length two and therefore constant Hilbert polynomial $2$ by [F1]. At $t=0$ it is a double point. In characteristic different from two, nonzero fibres are either two distinct rational points or a quadratic field point. In characteristic two a nonzero fibre can also be a double point: at $t=1$, $x^2-1=(x-1)^2$. Total length is always two. [F1, algebra]

2.1 For an arbitrary $A$-algebra $B$, its algebra pulls back to $B[x]/(x^2-t_B)$, still free on $1,x$. Thus the family remains finitely presented and flat after any base change. By [F1], the corresponding map to the Hilbert scheme is the composite of $\operatorname{Spec}B\to\operatorname{Spec}A$ with the original classifying map, and its scheme theoretic pulled-back family is exactly this algebra. In particular the assertion applies when $B$ has nilpotents. [F1, step 1.1, algebra] ∎
