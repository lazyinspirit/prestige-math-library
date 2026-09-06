---
id: thm-projective-dimension-at-most-n-iff-higher-ext-vanishes
kind: theorem
title: "Projective dimension at most n iff higher Ext vanishes"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-ext-bifunctor, thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective, thm-ext-dimension-shifting-in-the-first-variable, prop-positive-ext-vanishes-on-a-projective-first-variable, thm-projective-object-characterisations, def-ext-via-a-projective-resolution-of-the-first-variable]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice. In an abelian category with enough
projectives and enough injectives, fix supplied projective and injective
resolution data on all objects. Let $M$ be an object and $n\ge0$. The
following are equivalent:

1. $\operatorname{pd}(M)\le n$;
2. $\operatorname{Ext}^k(M,N)=0$ for every object $N$ and every $k>n$;
3. $\operatorname{Ext}^{n+1}(M,N)=0$ for every object $N$.

## Facts & Assumptions

**Given:** The stated category and resolution data, an object $M$, and
$n\in\mathbb N_0$.

[L1] For $r\ge1$, projective dimension at most $r$ is equivalent to projectivity of the $r$th syzygy ([[thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective]]).

[L2] First-variable dimension shifting identifies the positive-degree Ext of a syzygy with the corresponding higher Ext of the original object ([[thm-ext-dimension-shifting-in-the-first-variable]]).

[L3] Positive Ext out of a projective object vanishes ([[prop-positive-ext-vanishes-on-a-projective-first-variable]]).

[L4] Direct summands of projective objects are projective ([[thm-projective-object-characterisations]]).

[L5] Projective-resolution Ext is the cohomology of the associated Hom complex ([[def-ext-via-a-projective-resolution-of-the-first-variable]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{pd}(M)\le n$. If $n=0$, then $M$ is projective and positive Ext vanishes by [L3]. If $n\ge1$, [L1] makes the $n$th syzygy projective, and repeated [L2] identifies every $\operatorname{Ext}^k(M,N)$ with $k>n$ with a positive-degree Ext group out of that syzygy, which vanishes by [L3]. Thus (1) implies (2), and (2) implies (3) by taking $k=n+1$. [L1, L2, L3, given, algebra]

2.1 Conversely, assume (3). For $n\ge1$, [L2] gives $\operatorname{Ext}^1(\Omega^nM,N)=0$ for every $N$; for $n=0$, read $\Omega^0M$ here as $M$. To see directly that an object $X$ with $\operatorname{Ext}^1(X,-)=0$ is projective, take the first stage $0\to K\xrightarrow{i}P_0\to X\to0$ of a projective resolution and factor $d_1:P_1\to P_0$ as $P_1\xrightarrow{\pi}K\xrightarrow{i}P_0$. The map $\pi$ is a cocycle representing the identity of $K$ in the usual cokernel description of $\operatorname{Ext}^1(X,K)$. By [L5] and the assumed vanishing, $\pi=r d_1=r i\pi$ for some $r:P_0\to K$. Since $\pi$ is epic, $ri=1_K$, so the sequence splits and [L4] makes $X$ projective. Apply this to $X=\Omega^nM$ (or $X=M$ when $n=0$), and use [L1] when $n\ge1$, to prove $\operatorname{pd}(M)\le n$. [L1, L2, L4, L5, given, step 1.1, algebra] ∎
