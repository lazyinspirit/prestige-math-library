---
id: lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra
kind: lemma
title: Representative functions form a self-adjoint translation-invariant algebra
deps:
- def-axiom-of-choice
- def-representative-function-on-a-compact-group
- lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations
- def-matrix-coefficient-of-a-unitary-representation
- def-self-adjoint-complex-function-algebra
- def-ring-of-functions
- def-function-space
- def-strongly-continuous-unitary-representation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-11; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"d7895b5ce56731eca1fd6f3ff4624faf77aaddd538b5c0e7f1c4490a8ee36963","evidence":["research/frontier-38-owner-30-reader-11.md","research/frontier-38-owner-30-reader-findings-11.json","research/frontier-38-owner-30-dispatch/reader-reader-11.result.json","research/frontier-38-owner-30-step5-hash-11-post-5a.json","research/frontier-38-owner-30-alpha-batch-11-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-11.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra.md","historical_raw_sha256":"29f2d469507f856bdc94dfaebca603e761ec856b4fc0b59b116c07b856dfc681","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:37:53.223Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 5 §5.4, printed pp. 230–231
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: (2.12) and the following paragraph, printed p. 8 (the K-finite functions form a subalgebra)
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff topological group. The set $R(K)$ of representative functions ([[def-representative-function-on-a-compact-group]]) contains every constant function and is closed under pointwise addition, pointwise multiplication, complex conjugation, and left and right translation: for $f\in R(K)$ and $g\in K$ the functions $k\mapsto f(g^{-1}k)$ and $k\mapsto f(kg)$ again lie in $R(K)$. In particular $R(K)$ is a self-adjoint unital complex function algebra on $K$ ([[def-self-adjoint-complex-function-algebra]]).

## Facts & Assumptions

[F1] $R(K)$ is the linear span of the matrix coefficients $c^{\pi}_{v,w}(k)=\langle\pi(k)v,w\rangle$ of the finite-dimensional continuous unitary representations of $K$, with the pointwise convention of [[def-representative-function-on-a-compact-group]], and its elements are continuous complex functions on $K$. ([[def-representative-function-on-a-compact-group]], [[def-matrix-coefficient-of-a-unitary-representation]])

[F2] For finite-dimensional continuous unitary representations $\pi,\sigma$: the trivial one-dimensional representation has constant matrix coefficient $1$; the tensor product is a finite-dimensional continuous unitary representation with $c^{\pi\otimes\sigma}_{v\otimes v',w\otimes w'}=c^{\pi}_{v,w}c^{\sigma}_{v',w'}$; and the complex conjugate of a matrix coefficient is again a matrix coefficient of a finite-dimensional continuous unitary representation. ([[lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations]])

[F3] A self-adjoint unital complex function algebra on $K$ is a complex linear subspace of the complex functions on $K$ containing the constants and closed under pointwise multiplication and complex conjugation. ([[def-self-adjoint-complex-function-algebra]], [[def-ring-of-functions]], [[def-function-space]])

[F4] Each $\pi(k)$ is unitary with $\pi(k)^{-1}=\pi(k^{-1})$, so $\langle\pi(k)^{-1}x,y\rangle=\langle x,\pi(k)y\rangle$ for all $x,y$ and $k$. ([[def-strongly-continuous-unitary-representation]], [[def-matrix-coefficient-of-a-unitary-representation]])

## Proof

**Given:** AC, A compact Hausdorff topological group $K$ and its representative functions $R(K)$.

1.1 The trivial representation $1_K$ is a finite-dimensional continuous unitary representation whose matrix coefficient at a unit vector is the constant function $1$, so every constant function lies in $R(K)$ by [F1]; $R(K)$ is closed under pointwise addition and scalar multiplication because it is by definition a linear span of coefficient functions, and pointwise addition of representatives computed at each $k$ agrees with the sum in the function space of [F3]. [F1, F2, F3]

1.2 If $f=c^{\pi}_{v,w}$ and $f'=c^{\sigma}_{v',w'}$ are matrix coefficients of finite-dimensional continuous unitary representations, then [F2] gives $f(k)f'(k)=c^{\pi}_{v,w}(k)c^{\sigma}_{v',w'}(k)=c^{\pi\otimes\sigma}_{v\otimes v',w\otimes w'}(k)$ for every $k$, a matrix coefficient of the finite-dimensional continuous unitary representation $\pi\otimes\sigma$, hence an element of $R(K)$; general products in $R(K)$ follow by bilinear expansion of finite linear combinations of coefficients, so $R(K)$ is closed under pointwise multiplication. [F1, F2, F3]

1.3 If $f=c^{\pi}_{v,w}$, then [F2] exhibits $\overline{f}$ as a matrix coefficient of a finite-dimensional continuous unitary representation of $K$, hence $\overline{f}\in R(K)$; since conjugation is additive and conjugate-linear, $\overline{f}\in R(K)$ for every finite linear combination $f$ of matrix coefficients, so $R(K)$ is closed under complex conjugation. [F1, F2]

1.4 If $f=c^{\pi}_{v,w}$ and $g\in K$, then for every $k\in K$ the unitarity [F4] and the homomorphism property give $f(g^{-1}k)=\langle\pi(g)^{-1}\pi(k)v,w\rangle=\langle\pi(k)v,\pi(g)w\rangle=c^{\pi}_{v,\pi(g)w}(k)$ and $f(kg)=\langle\pi(k)\pi(g)v,w\rangle=c^{\pi}_{\pi(g)v,w}(k)$, so the left translate $k\mapsto f(g^{-1}k)$ and the right translate $k\mapsto f(kg)$ are again matrix coefficients of $\pi$; by linearity of translation on functions the same holds for every $f\in R(K)$, so $R(K)$ is closed under left and right translation. [F1, F4]

2.1 Collecting steps 1.1, 1.2, 1.3 and 1.4: $R(K)$ is a complex linear subspace of the continuous complex functions on $K$ containing the constants and closed under pointwise multiplication, complex conjugation and translation, so it is a self-adjoint unital complex function algebra on $K$ by [F3]. [F3, step 1.1, step 1.2, step 1.3, step 1.4] ∎
