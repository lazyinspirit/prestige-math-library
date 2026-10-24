---
id: lem-kernel-of-a-direct-sum-of-representations-is-the-intersection
kind: lemma
title: "The kernel of a finite direct sum is the intersection of the kernels"
status: published
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-kernel-and-image-of-group-homomorphism, def-direct-sum-of-a-family-of-modules]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Etingof et al., Introduction to Representation Theory"
      url: "https://math.mit.edu/~etingof/reprbook.pdf"
---

## Statement

Let $(V_i,\rho_i)_{i\in I}$ be a finite family of finite-dimensional representations of a group $G$ over a field $k$. On $V=\bigoplus_{i\in I}V_i$, the formula $\rho(g)((v_i)_i)=(\rho_i(g)v_i)_i$ defines a finite-dimensional representation, and $\ker\rho=\bigcap_{i\in I}\ker\rho_i$. For $I=\varnothing$, $V=0$ and the empty intersection is understood inside $G$, so both sides are $G$.

## Facts & Assumptions

**Given:** A finite index set $I$ and homomorphisms $\rho_i:G\to\operatorname{GL}(V_i)$ with each $V_i$ finite-dimensional over $k$.

[F1] A finite-dimensional representation is a homomorphism to the group of invertible linear maps of a finite-dimensional space ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[F2] The kernel consists of elements mapped to the identity of the target group ([[def-kernel-and-image-of-group-homomorphism]]).

[F3] The direct sum consists of finitely supported tuples with coordinatewise operations and has coordinate inclusions; the empty sum is zero ([[def-direct-sum-of-a-family-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 Because $I$ is finite, every tuple has finite support, so $V=\prod_{i\in I}V_i$ with the operations in F3. Choose a finite basis of each $V_i$. This uses only finitely many existential witnesses. Their coordinate inclusions form a finite basis of $V$: they span because each coordinate has a basis expansion, and a zero combination has all coefficients zero by projecting to each coordinate and using that coordinate’s independence. Thus $V$ is finite-dimensional. Zero-dimensional coordinates contribute empty bases. [F3, given]

1.2 For $g\in G$, define $\rho(g)$ by the displayed coordinate formula. The equality $\rho_i(g)(av_i+bw_i)=a\rho_i(g)v_i+b\rho_i(g)w_i$ in every coordinate proves linearity. Also $\rho_i(g)\rho_i(g^{-1})=\operatorname{id}_{V_i}$ and the reversed product is the identity, so $\rho(g^{-1})$ is a two-sided inverse of $\rho(g)$. Hence $\rho(g)\in\operatorname{GL}(V)$. [F1, F3, given, algebra]

2.1 For every tuple $v$, the $i$-coordinate of $\rho(gh)v$ is $\rho_i(gh)v_i=\rho_i(g)\rho_i(h)v_i$, the $i$-coordinate of $\rho(g)\rho(h)v$. Similarly $\rho(e)v=v$. Therefore $\rho$ is a homomorphism and, with step 1.1, a finite-dimensional representation as in F1. [F1, step 1.1, step 1.2]

2.2 If $g\in\ker\rho$, F2 gives $\rho(g)=\operatorname{id}_V$. For any $i$ and $v_i\in V_i$, apply this equality to the coordinate inclusion $\jmath_i(v_i)$. Its $i$-coordinate yields $\rho_i(g)v_i=v_i$. Since $v_i$ was arbitrary, $\rho_i(g)=\operatorname{id}_{V_i}$, so $g\in\ker\rho_i$ for every $i$. [F2, F3, step 1.2]

3.1 Conversely, if $g\in\ker\rho_i$ for every $i$, then for every tuple $v$, $\rho(g)v=(\rho_i(g)v_i)_i=(v_i)_i=v$. Hence $\rho(g)=\operatorname{id}_V$ and $g\in\ker\rho$. This proves the intersection formula. [F2, step 1.2, step 2.2]

4.1 For $I=\varnothing$, F3 gives $V=0$. Its unique endomorphism is its identity and is invertible, so every $g$ acts identically and $\ker\rho=G$. The condition that $g$ lie in each kernel is vacuous, giving the same $G$. For a one-element family steps 2.2–3.1 give the single coordinate kernel. For a zero coordinate its kernel is $G$, so it places no further restriction on the intersection. [F2, F3, step 2.2, step 3.1] ∎

## Sources

[Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Chapter 4 opening, p. 61, supplies the representation convention. The coordinate action, its finite-dimensionality, and both kernel containments are derived locally from the direct-sum definition.
