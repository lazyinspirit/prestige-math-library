---
dependency_level: 0
id: lem-sl-unipotent-fixed-vector-is-group-fixed
kind: lemma
title: "Elementary unipotent invariance forces special linear invariance"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-strongly-continuous-unitary-representation
  - lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups
proof_strategy: direct
sources:
  references:
    - title: "Dave Witte Morris, Introduction to Arithmetic Groups, §11.2; general Mautner corollary is context, while the complete required elementary-root argument is supplied here"
      url: "https://arxiv.org/pdf/math/0106063"
---

## Statement

Let $d\ge2$, let $\rho$ be a strongly continuous unitary representation of $\mathrm{SL}_d(\mathbb R)$ on a Hilbert space, and let $v$ be a vector. If $\rho(I+t e_{ij})v=v$ for every $t\in\mathbb R$ for one pair $i\ne j$, then $\rho(g)v=v$ for every $g\in\mathrm{SL}_d(\mathbb R)$. No choice principle is required.

## Statement references

[Morris, Introduction to Arithmetic Groups, §11.2, Mautner phenomenon context](https://arxiv.org/pdf/math/0106063)

## Facts & Assumptions

**Given:** The dimension, strongly continuous unitary representation, vector and elementary root subgroup in the Statement.

[F1] Every special linear real matrix is a finite product of elementary transvections. ([[lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups]])

[F2] Unitaries preserve norms, and strong continuity means $\|\rho(g_s)w-\rho(g)w\|\to0$ when $g_s\to g$. ([[def-strongly-continuous-unitary-representation]])

## Proof

1.1 Relabel the two specified coordinates as $1,2$, write $u(t)=I+t e_{12}$, $l(s)=I+s e_{21}$, and fix $a>0$. In their two-dimensional block, direct multiplication gives $u(t)l((a-1)/t)u(-t/a)=\begin{pmatrix}a&0\\(a-1)/t&a^{-1}\end{pmatrix}$ for $t\ne0$. Since $v$ is fixed by the two outer $u$ factors, unitarity gives $\|\rho(u(t)l((a-1)/t)u(-t/a))v-v\|=\|\rho(l((a-1)/t))v-v\|\to0$ as $t\to\infty$. Strong continuity therefore shows that $v$ is fixed by $D(a)=\operatorname{diag}(a,a^{-1},1,\ldots,1)$. [given, F2, algebra]

2.1 If a subgroup element $h$ is contracted to the identity by powers of an element $D$ fixing $v$, then $\|\rho(h)v-v\|=\|\rho(D^{-k}hD^k)v-v\|\to0$, so $h$ fixes $v$. For $D=D(2)$ or its inverse, this applies to every $I+t e_{ij}$ whose two indices have distinct diagonal weights among $2,1/2,1$. In particular it gives both roots between $1$ and $2$, and all roots having exactly one index in $\{1,2\}$. [step 1.1, F2, algebra]

3.1 If $i\ne j$ both lie outside $\{1,2\}$, the identity $[I+s e_{i1},I+t e_{1j}]=I+st e_{ij}$ follows by matrix multiplication. Both commutator factors fix $v$ by step 2.1, so every such remaining root fixes $v$ as well. For $d=2$ or $3$ there are no missing pairs of this type. Thus every elementary transvection fixes $v$; [F1] now shows that every element of $\mathrm{SL}_d(\mathbb R)$ fixes $v$. [step 2.1, F1, algebra] ∎
