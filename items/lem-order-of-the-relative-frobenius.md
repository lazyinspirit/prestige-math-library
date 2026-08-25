---
id: lem-order-of-the-relative-frobenius
kind: lemma
title: "For a degree-$n$ extension of a field of order $q$, the $q$-power map has order exactly $n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-relative-frobenius-of-a-finite-field-extension, prop-finite-fields-are-splitting-fields-of-x-q-minus-x, thm-root-bound-for-polynomials-over-a-domain, thm-finite-fields-have-prime-power-order, thm-tower-law-for-finite-field-extensions, def-extension-degree-and-finite-extension, def-order-in-a-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields (expository blurb), Theorem 5.6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Proposition 4.20"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $\mathbb F_q$ be a finite field of order $q$ and let $E/\mathbb F_q$ be an
extension of finite fields of degree $n$ ([[def-extension-degree-and-finite-extension]]).
Then

$$|E|=q^{n},$$

and the relative Frobenius $\sigma_q$
([[def-relative-frobenius-of-a-finite-field-extension]]) has order exactly $n$ in
$\operatorname{Aut}(E/\mathbb F_q)$ ([[def-order-in-a-group]]). At $n=1$ this says
$\sigma_q$ is the identity, of order one.

## Facts & Assumptions

**Given:** Finite fields $\mathbb F_q\subseteq E$ with $|\mathbb F_q|=q$ and $[E:\mathbb F_q]=n$; the prime subfield of $E$ is $\mathbb F_p$ with $p$ the characteristic, and $\mathbb F_q$ has the same characteristic, its identity element being that of $E$.

[L1] The relative Frobenius is $\sigma_q(x)=x^{q}$, an $\mathbb F_q$-automorphism of $E$, with $\sigma_q^{\,i}(x)=x^{q^{i}}$ ([[def-relative-frobenius-of-a-finite-field-extension]]).

[L2] If $F$ is a field with $q$ elements, then every $a\in F$ satisfies $a^{q}=a$ ([[prop-finite-fields-are-splitting-fields-of-x-q-minus-x]]).

[L3] Let $D$ be an integral domain. A nonzero polynomial $f\in D[x]$ of degree $n$ has at most $n$ distinct roots in $D$ ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L4] If $F$ is a finite field, then there is a unique prime $p$ and a unique positive integer $m$ with $|F|=p^{m}$; here $p=\operatorname{char}F$ and $m=[F:\mathbb F_p]$ ([[thm-finite-fields-have-prime-power-order]]).

[L5] For fields $F\subseteq K\subseteq L$ with $K/F$ and $L/K$ finite, $L/F$ is finite and $[L:F]=[L:K][K:F]$ ([[thm-tower-law-for-finite-field-extensions]]).

## Proof

**Proof technique:** direct.

1.1 By [L4] applied to $\mathbb F_q$, $q=p^{k}$ with $k=[\mathbb F_q:\mathbb F_p]$; by [L4] applied to $E$, $|E|=p^{m}$ with $m=[E:\mathbb F_p]$. [L4, given]

2.1 The tower $\mathbb F_p\subseteq\mathbb F_q\subseteq E$ and [L5] give $m=[E:\mathbb F_q]\,[\mathbb F_q:\mathbb F_p]=nk$, so $|E|=p^{nk}=(p^{k})^{n}=q^{n}$. [step 1.1, L5, algebra]

3.1 Every $x\in E$ satisfies $x^{q^{n}}=x$, by [L2] applied to $E$, whose order is $q^{n}$ by step 2.1; by [L1] this says $\sigma_q^{\,n}=\mathrm{id}_E$. [step 2.1, L1, L2]

3.2 For an integer $j$ with $1\le j<n$ one has $\sigma_q^{\,j}\ne\mathrm{id}_E$: otherwise every one of the $q^{n}$ elements of $E$ would be a root of the nonzero polynomial $t^{q^{j}}-t\in E[t]$, whose degree $q^{j}$ is smaller than $q^{n}$ because $q\ge2$, contradicting [L3]. [step 2.1, L1, L3, algebra]

4.1 The least $j\ge1$ with $\sigma_q^{\,j}=\mathrm{id}_E$ is therefore $j=n$, that is $\operatorname{ord}(\sigma_q)=n$; for $n=1$ steps 3.1 and 3.2 say only that $\sigma_q=\mathrm{id}_E$, of order one. [step 3.1, step 3.2, L1] ∎
