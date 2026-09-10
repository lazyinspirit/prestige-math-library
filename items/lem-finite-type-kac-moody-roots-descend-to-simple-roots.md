---
id: lem-finite-type-kac-moody-roots-descend-to-simple-roots
kind: lemma
title: "Finite-type Kac–Moody roots descend to simple roots"
status: published
origin: pipeline
deps: ["thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms", "thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra", "prop-the-weyl-group-preserves-roots-and-root-multiplicities", "prop-kac-moody-root-spaces-are-finite-dimensional", "prop-real-root-spaces-are-one-dimensional-sl2-roots"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Proposition 4.3.2, pp.63–64; local height descent and explicit dual-basis lattice bound"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

For a finite-type GCM (all indecomposable blocks finite), every root is Weyl-conjugate to a simple root. There are finitely many roots, every root space is one-dimensional, and $\dim\mathfrak g(A)=n+|\Delta|<\infty$.

## Facts & Assumptions

**Given:** A finite-type GCM with its finite nonempty simple-root family.

[F1] Finite blocks have positive definite symmetrizations and are invertible. ([[thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms]]).

[F2] The root form has entries d_i a_ij. ([[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]]).

[F3] Weyl reflection preserves roots, multiplicities and the symmetrized form. ([[prop-the-weyl-group-preserves-roots-and-root-multiplicities]]).

[F4] Roots have one sign and no higher pure simple multiples. ([[prop-kac-moody-root-spaces-are-finite-dimensional]]).

[F5] Real root spaces have dimension one. ([[prop-real-root-spaces-are-one-dimensional-sl2-roots]]).

## Proof

1.1 Choose a positive symmetrizer on each finite block and combine them into $D$. F1 makes $DA$ blockwise positive definite and therefore positive definite on the full real root span. For a positive root $\beta=\sum m_i\alpha_i$, F2 gives $0<(\beta,\beta)=\sum_i m_i d_i\beta(h_i)$. Thus some $i$ with $m_i>0$ has the positive integer $\beta(h_i)>0$. [F1, F2, given]

2.1 If $\beta$ is not simple, F4 implies there is some $j\ne i$ with $m_j>0$. F3 makes $s_i\beta=\beta-\beta(h_i)\alpha_i$ a root; its unchanged coefficient at $j$ is positive, so F4 forces this root to be positive. Its height has strictly decreased by the positive integer $\beta(h_i)$. Induction on positive height therefore reaches a simple root. Negative roots reduce to this case by sign, and $s_i\alpha_i=-\alpha_i$ handles the final sign. [F3, F4, step 1.1]

3.1 Put $C=\max_i 2d_i$. By step 2.1 and form invariance, every root has squared length in $\{2d_i\}_i$, hence at most $C$. The positive definite matrix gives a real dual basis $v_i$ to the $\alpha_i$ under this form by finite elimination. For $v\ne0$, the nonnegative quadratic $(x-tv,x-tv)$ at $t=(x,v)/(v,v)$ gives $(x,v)^2\le(x,x)(v,v)$. If $\beta=\sum m_i\alpha_i$, then $|m_i|^2=|(\beta,v_i)|^2\le C(v_i,v_i)$. Each integer coordinate therefore belongs to a fixed finite interval. There are only finitely many such tuples, proving $|\Delta|<\infty$. [F2, F3, step 1.1, step 2.1]

4.1 Every root is real by step 2.1, so F5 gives dimension one. Each finite block is invertible by F1; hence $\operatorname{rank}A=n$ and the minimal Cartan has dimension $n$. Summing the root decomposition of F4 gives $\dim\mathfrak g=n+|\Delta|$, finite by step 3.1. [F1, F4, F5, step 2.1, step 3.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Proposition 4.3.2, pp.63–64; local height descent and explicit dual-basis lattice bound.
