---
id: lem-the-markov-trace-of-an-inverse-hecke-generator
kind: lemma
title: "The Markov trace of an inverse Hecke generator"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [thm-the-ocneanu-markov-trace-exists-and-is-unique, def-generic-type-a-hecke-algebra,
       def-polynomial-ring-over-a-commutative-ring, def-the-laurent-polynomial-ring,
       lem-units-and-powers-of-the-laurent-polynomial-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.3 printed p. 48 (the inverse relation x_i^{-1} = t^{-1}x_i + (t^{-1}-1)) and printed p. 49 (the two stabilisation factors)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

In the Hecke tower $H(1)\subset H(2)\subset\cdots$ over
$\Lambda=\mathbb Z[v^{\pm1},z]$: (a) each generator is invertible with
$T_i^{-1}=v^{-1}T_i+(v^{-1}-1)$ and $T_i-vT_i^{-1}=v-1$; (b) for the Ocneanu
trace of [[thm-the-ocneanu-markov-trace-exists-and-is-unique]] put
$z_-:=v^{-1}(z+1-v)\in\Lambda$; then for every $n\ge1$, every $x\in H(n)$ $\operatorname{tr}_{n+1}(xT_n^{-1})=z_-\operatorname{tr}_n(x)$;
(c) $z-z_-=(1-v^{-1})(z+1)\neq0$ as an element of the domain $\Lambda$, so
the two formal generic stabilisation factors differ. Under specialization they
can agree; for example $z=-1$ gives $z_-=z$.

## Facts & Assumptions

**Given:** The Hecke tower over $\Lambda=\mathbb Z[v^{\pm1},z]$, an integer $n\ge1$, an element $x\in H(n)$ and the Ocneanu trace. No choice principle is used.

[F1] $H(n)$ is the $\Lambda$-algebra with generators $T_1,\dots,T_{n-1}$, quadratic relations $T_i^2=(v-1)T_i+v$, braid relations and distant commutations ([[def-generic-type-a-hecke-algebra]]).

[F2] The Ocneanu trace satisfies (M1)--(M4), and the two-sided form $\operatorname{tr}_{n+1}(uT_nv)=z\operatorname{tr}_n(uv)$ for $u,v\in H(n)$ ([[thm-the-ocneanu-markov-trace-exists-and-is-unique]]).

[F3] $\Lambda=\mathbb Z[v^{\pm1},z]$ is a polynomial ring over the Laurent ring $\mathbb Z[v^{\pm1}]$, hence a domain, and $v$ is a unit with inverse $v^{-1}$ ([[def-polynomial-ring-over-a-commutative-ring]], [[def-the-laurent-polynomial-ring]], [[lem-units-and-powers-of-the-laurent-polynomial-ring]]).

## Proof

1.1 **Inverses.** From $T_i^2=(v-1)T_i+v$ of [F1] multiply by $v^{-1}$: $v^{-1}T_i^2=(1-v^{-1})T_i+1$, so $T_i\bigl(v^{-1}T_i+(v^{-1}-1)\bigr)=1$; the same computation with the order reversed gives $\bigl(v^{-1}T_i+(v^{-1}-1)\bigr)T_i=1$, so $T_i$ is a unit with $T_i^{-1}=v^{-1}T_i+(v^{-1}-1)$; then $T_i-vT_i^{-1}=T_i-T_i-(1-v)=v-1$. [F1, F3, algebra]

2.1 **Traces of inverses.** By (M2) and step 1.1, $T_n^{-1}=v^{-1}T_n+(v^{-1}-1)$ in $H(n+1)$, so $\operatorname{tr}_{n+1}(xT_n^{-1})=v^{-1}\operatorname{tr}_{n+1}(xT_n)+(v^{-1}-1)\operatorname{tr}_{n+1}(x)=v^{-1}z\operatorname{tr}_n(x)+(v^{-1}-1)\operatorname{tr}_n(x)=z_-\operatorname{tr}_n(x)$, where the middle equality uses (M4) in its form $x\in H(n)$ and the two-sided form [F2]; this proves the displayed negative-stabilization identity. [F2, step 1.1, algebra]

3.1 **Distinctness of the generic factors.** Direct expansion in the domain $\Lambda$ gives $z-z_-=z-v^{-1}(z+1-v)=z(1-v^{-1})-(v^{-1}-1)=(1-v^{-1})(z+1)$; since $1-v^{-1}\neq0$ and $z+1\neq0$ in the domain $\Lambda$ of [F3], the product is nonzero. Hence the positive and negative stabilisations multiply the trace by distinct formal generic factors $z$ and $z_-$. They may coincide after specialization, as at $z=-1$. [F3, algebra] ∎
