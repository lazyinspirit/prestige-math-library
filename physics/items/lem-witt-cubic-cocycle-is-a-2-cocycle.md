---
id: lem-witt-cubic-cocycle-is-a-2-cocycle
kind: lemma
title: The cubic Witt cocycle is a Lie-algebra two-cocycle
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-witt-algebra]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §2.7.1
      url: https://arxiv.org/pdf/0809.1380
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §1
      url: https://arxiv.org/pdf/1004.1287
---

## Statement

For the Witt algebra of [[def-witt-algebra]], define $\omega(d_m,d_n)=\delta_{m+n,0}(m^3-m)/12$ and extend bilinearly. Then $\omega$ is alternating and satisfies
$$\omega([x,y],z)+\omega([y,z],x)+\omega([z,x],y)=0$$
for all $x,y,z\in W$.

## Facts & Assumptions

**Given:** The basis and bracket of the Laurent-polynomial Witt algebra.

[F1] [[def-witt-algebra]]: $W$ has basis $d_m$ and $[d_m,d_n]=(m-n)d_{m+n}$.

## Proof

1.1 The scalar $m^3-m$ is odd in $m$. Therefore $\omega(d_n,d_m)=-\omega(d_m,d_n)$. If $m=n$, the Kronecker condition forces $m=0$, and $0^3-0=0$; hence $\omega(d_m,d_m)=0$. Bilinearity extends both identities to all finite sums. [F1, algebra]

2.1 By trilinearity it suffices to use $d_m,d_n,d_p$. If $m+n+p\ne0$, all three Kronecker factors vanish. If $p=-m-n$, twelve times the cyclic sum is $N=(m-n)((m+n)^3-(m+n))+(n-p)((n+p)^3-(n+p))+(p-m)((p+m)^3-(p+m)).$ The linear part is $(m-n)p+(n-p)m+(p-m)n=0$. The cubic part, after substituting $p=-m-n$, is $ (m-n)p^3+(n-p)m^3+(p-m)n^3=-(m-n)(m+n)^3+(m+2n)m^3-(2m+n)n^3=0,$ as expansion cancels the $m^4$, $m^3n$, $mn^3$, and $n^4$ terms. Thus $N=0$ in every case, proving the cocycle identity. [F1, step 1.1, algebra] ∎
