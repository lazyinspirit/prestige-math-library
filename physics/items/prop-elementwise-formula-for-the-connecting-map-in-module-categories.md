---
id: prop-elementwise-formula-for-the-connecting-map-in-module-categories
kind: proposition
title: "Elementwise formula for the connecting map in module categories"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-connecting-morphism-in-homology,
       def-short-exact-sequence-of-complexes,
       thm-modules-over-a-ring-form-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Statement

Let $R$ be a ring and let
$$0\to A_\bullet\xrightarrow{i}B_\bullet\xrightarrow{p}C_\bullet\to0$$
be a short exact sequence of chain complexes of left $R$-modules. If $[c]\in
H_n(C)$ is represented by a cycle $c\in C_n$, choose a lift $b\in B_n$ with
$p_n(b)=c$, and let $a\in A_{n-1}$ be the unique element satisfying
$$i_{n-1}(a)=d_n^B(b).$$
Then
$$\partial_n([c])=[a]\in H_{n-1}(A).$$
This class is independent of the chosen lift $b$ and of the chosen cycle
representative $c$.

## Facts & Assumptions

**Given:** A short exact sequence of chain complexes of left $R$-modules and a class $[c]\in H_n(C)$.

[L1] The connecting morphism in homology is the unique map induced from the preconnecting arrow on cycles ([[def-connecting-morphism-in-homology]]).

[L2] A short exact sequence of complexes is exact in each degree ([[def-short-exact-sequence-of-complexes]]).

[L3] The category of left $R$-modules is abelian, so kernels, images, and cokernels are the usual module ones ([[thm-modules-over-a-ring-form-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Because $c$ is a cycle, $$p_{n-1}(d_n^B b)=d_n^C(p_n b)=d_n^C(c)=0.$$ By [L2] and [L3], $d_n^B b$ lies in the image of $i_{n-1}$, so there is a unique $a\in A_{n-1}$ with $i_{n-1}(a)=d_n^B b$. The definition in [L1] then gives $\partial_n([c])=[a]$. [L1, L2, L3, given, construct]

2.1 If $b'$ is another lift of the same cycle $c$, then $b-b'=i_n(u)$ for some $u\in A_n$ by [L2] and [L3]. Hence $$i_{n-1}(a-a')=d_n^B(b-b')=d_n^B(i_n(u))=i_{n-1}(d_n^A u).$$ Since $i_{n-1}$ is injective, $a-a'=d_n^A u$ is a boundary, so $[a]=[a']$. [L2, L3, step 1.1, algebra]

3.1 If $c'=c+d_{n+1}^C(v)$ is another cycle representative of $[c]$, choose a lift $v'\in B_{n+1}$ of $v$. Then $b+d_{n+1}^B(v')$ lifts $c'$, and its boundary differs from $d_n^B(b)$ by $$d_n^B d_{n+1}^B(v')=0.$$ Equivalently, the corresponding element of $A_{n-1}$ differs from $a$ by a boundary. So the class from step 1.1 depends only on $[c]$. [L1, L2, L3, step 1.1, algebra] ∎

