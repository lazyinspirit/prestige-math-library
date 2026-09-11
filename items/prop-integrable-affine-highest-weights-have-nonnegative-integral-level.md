---
id: prop-integrable-affine-highest-weights-have-nonnegative-integral-level
kind: proposition
title: Integrable affine highest weights have nonnegative integral level
status: draft
origin: pipeline
deps: [lem-affine-central-coroot-from-the-transpose-null-ray, def-kac-moody-integral-and-dominant-integral-weights, def-contragredient-lie-algebra-before-the-maximal-ideal-quotient]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Statement

A dominant integral weight for an indecomposable affine GCM has nonnegative integer intrinsic level. Every nonzero highest-weight module of positive intrinsic level, in particular an integrable simple at that level, is infinite dimensional over $\mathbb C$.

## Facts & Assumptions

**Given:** The affine GCM and a dominant integral weight $\lambda$ for the first assertion; a nonzero cyclic highest-weight module $V$ of positive level for the second.

[F1] The primitive positive integer transpose null vector defines $c_A=\sum_i b_i h_i$, which acts on a highest-weight module by the scalar $\lambda(c_A)$ ([[lem-affine-central-coroot-from-the-transpose-null-ray]]).

[F2] Dominant integral labels $\lambda(h_i)$ are nonnegative integers ([[def-kac-moody-integral-and-dominant-integral-weights]]).

[F3] The relations give $h_i=[e_i,f_i]$ ([[def-contragredient-lie-algebra-before-the-maximal-ideal-quotient]]).

## Proof

1.1 For dominant integral $\lambda$, its level is $k=\lambda(c_A)=\sum_i b_i\lambda(h_i)$. Each $b_i$ is a positive integer by F1 and each label is a nonnegative integer by F2. Thus the finite sum belongs to $\mathbb Z_{\geq0}$. Zero labels and $k=0$ are permitted in this assertion. [F1, F2, given]

1.2 Suppose a nonzero highest-weight module of positive level $k$ were finite dimensional, of dimension $d\geq1$. Fix a finite basis and write $E_i,F_i$ for the matrices of the simple generators. In finite indices, $\operatorname{tr}(E_iF_i)=\sum_{r,s}(E_i)_{rs}(F_i)_{sr}=\sum_{r,s}(F_i)_{rs}(E_i)_{sr}=\operatorname{tr}(F_iE_i)$, by interchanging $r,s$ and commuting scalars. Therefore F1 and F3 give $\operatorname{tr}(c_A)=\sum_i b_i\operatorname{tr}(E_iF_i-F_iE_i)=0$. Its scalar action from F1 instead gives $\operatorname{tr}(c_A)=kd\ne0$ over $\mathbb C$, a contradiction. Thus the module is infinite dimensional. This trace argument needs only nonzero level; positive level is the stated case. [F1, F3, given]

2.1 Together 1.1 and 1.2 prove both assertions, including the integrable simple specialization whenever such a module is given. The zero module was explicitly excluded; dimension one is included in the trace contradiction with $d=1$. At level zero no nonzero trace contradiction is claimed. The finite basis and finite index exchanges use finite linear algebra and no AC, loop realization, or character formula. [step 1.1, step 1.2] ∎
