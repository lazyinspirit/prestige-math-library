---
id: thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective
kind: theorem
title: "Projective dimension at most n iff the nth syzygy is projective"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-dimension-of-an-object, def-syzygy-and-cosyzygy-relative-to-a-resolution, thm-schanuel-lemma-in-an-abelian-category]
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

Let $\mathcal A$ be an abelian category with enough projectives, fix a
projective resolution $P_\bullet\to M$, and let $n\ge1$. Then
$$\operatorname{pd}(M)\le n\quad\Longleftrightarrow\quad\Omega_{P}^{n}(M)\text{ is projective}.$$
In particular, the condition is independent of the chosen projective
resolution.

## Facts & Assumptions

**Given:** The displayed hypotheses and a fixed projective resolution of $M$.

[L1] The $n$th syzygy relative to a resolution is the kernel at its $n$th stage ([[def-syzygy-and-cosyzygy-relative-to-a-resolution]]).

[L2] Projective dimension at most $n$ means the existence of a projective resolution of length at most $n$ ([[def-projective-dimension-of-an-object]]).

[L3] Schanuel's lemma compares kernels of two projective presentations ([[thm-schanuel-lemma-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 If $\Omega_P^n(M)$ is projective, truncate the fixed resolution after that object. The resulting length-$n$ projective resolution proves $\operatorname{pd}(M)\le n$. [L1, L2, given, construct]

2.1 Conversely, compare the fixed resolution with a projective resolution of length at most $n$. Iterating [L3] through their first $n$ projective presentations shows that $\Omega_P^n(M)$ plus a finite direct sum of projectives is isomorphic to the terminal projective of the short resolution plus another finite direct sum of projectives. Hence $\Omega_P^n(M)$ is a direct summand of a projective object and is projective. This also proves independence of the chosen resolution. [L2, L3, given, algebra] ∎
