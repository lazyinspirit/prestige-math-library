---
id: lem-hall-euler-form-is-additive
kind: lemma
title: "The hereditary Euler form is additive on the Grothendieck group"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-field-hereditary-hall-category
  - lem-yext-exact-sequences-in-both-variables
  - def-grothendieck-group-of-an-essentially-small-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.2 and §3.1, PDF pp. 6–7 and 33–34: the finite-field Euler form and its additivity on K_0."
    - title: "Barry Mitchell, Theory of Categories, Chapter VII, §5"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/mitchell.pdf"
      locator: "Theorem 5.1, printed pp. 178–179: exact Yoneda Ext sequences without projective or injective hypotheses."
verification:
  precheck: pending
---

## Statement

Let $\mathcal A$ be a finite-field hereditary Hall category. For objects
$M,N$, define
$$ \langle[M],[N]\rangle =\dim_{\mathbb F_q}\operatorname{Hom}(M,N) -\dim_{\mathbb F_q}\operatorname{YExt}^1(M,N). $$
This form is additive in short exact sequences in either variable, so it
descends to a well-defined bilinear form on $K_0(\mathcal A)$.

## Facts & Assumptions

**Given:** A finite-field hereditary Hall category and a short exact sequence
$0\to A\to B\to C\to0$.

[F1] For every pair of objects, Hom and Yoneda $\operatorname{Ext}^1$ are
finite-dimensional $\mathbb F_q$-vector spaces and Yoneda $\operatorname{Ext}^2$
vanishes ([[def-finite-field-hereditary-hall-category]]).

[F2] The covariant and contravariant low-degree Yoneda exact sequences are
exact through the $\operatorname{Ext}^2$ boundary
([[lem-yext-exact-sequences-in-both-variables]]).

[F3] $K_0$ imposes $[B]=[A]+[C]$ for every short exact sequence
([[def-grothendieck-group-of-an-essentially-small-abelian-category]]).

## Proof



**Proof technique:** direct.

1.1 Fix $X$. The covariant sequence from [F2] ends $\operatorname{Hom}(X, A)\to\operatorname{Hom}(X, B)\to \operatorname{Hom}(X, C)\to\operatorname{YExt}^1(X, A)\to \operatorname{YExt}^1(X, B)\to\operatorname{YExt}^1(X, C)\to0,$ because its next term is $\operatorname{YExt}^2(X,A)=0$ by [F1]. It is a finite exact sequence of finite-dimensional vector spaces. [F1, F2, given]

1.2 Apply the contravariant sequence in [F2]. Its finite exact segment is $\operatorname{Hom}(C, X)\to\operatorname{Hom}(B, X)\to \operatorname{Hom}(A, X)\to\operatorname{YExt}^1(C, X)\to \operatorname{YExt}^1(B, X)\to\operatorname{YExt}^1(A, X)\to0.$ Alternating dimensions give $\langle[B],[X]\rangle=\langle[A],[X]\rangle+\langle[C],[X]\rangle$. [F1, F2, algebra]

2.1 The alternating-dimension identity for the finite exact sequence of the previous step gives $\dim\operatorname{Hom}(X, B)-\dim\operatorname{YExt}^1(X, B) =\bigl(\dim\operatorname{Hom}(X, A)-\dim\operatorname{YExt}^1(X, A)\bigr) +\bigl(\dim\operatorname{Hom}(X, C)-\dim\operatorname{YExt}^1(X, C)\bigr).$ Thus $\langle[X],[B]\rangle=\langle[X],[A]\rangle+\langle[X],[C]\rangle$. [step 1.1, algebra]

3.1 The two additivity identities in steps 2.1 and 1.2 respect every defining relation of $K_0$ in [F3]. The universal property of the quotient therefore extends the formula uniquely and additively in both variables to $K_0(\mathcal A)\times K_0(\mathcal A)$. All entries are integers, proving the statement. [F3, step 2.1, step 1.2, algebra] ∎

