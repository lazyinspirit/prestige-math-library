---
id: lem-nonprincipal-dirichlet-character-partial-sums
kind: lemma
title: "Nonprincipal Dirichlet character partial sums are bounded"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-dirichlet-character-extension-well-defined, lem-nonprincipal-dirichlet-character-complete-sum]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Leonard Tomczak, Analytic Number Theory, Chapter 4"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, section 3.1"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $\chi$ be a nonprincipal Dirichlet character modulo $q$. Then for every
real $x\ge1$,

$$\left|\sum_{1\le n\le x}\chi(n)\right|\le q.$$

## Facts & Assumptions

**Given:** A nonprincipal Dirichlet character $\chi$ modulo $q$ and a real
$x\ge1$.

[L1] Dirichlet characters are periodic modulo $q$
([[lem-dirichlet-character-extension-well-defined]]).

[L2] The sum of $\chi$ over any complete residue system modulo $q$ is $0$
([[lem-nonprincipal-dirichlet-character-complete-sum]]).

## Proof

**Proof technique:** direct.

1.1 Write $\lfloor x\rfloor = mq+r$ with integers $m\ge0$ and $0\le r<q$. By [L1], the sum over $1\le n\le x$ is the sum over $1\le n\le\lfloor x\rfloor$, which breaks into $m$ complete blocks of length $q$ and one terminal block of length $r$. [L1, given, algebra]

2.1 Every complete block contributes $0$ by [L2]. Hence $\sum_{1\le n\le x}\chi(n)=\sum_{mq<n\le mq+r}\chi(n)$. The terminal block has at most $q-1$ terms, and every term has modulus at most $1$ because character values are either $0$ or roots of unity. Therefore the absolute value of the sum is at most $q-1<q$, so certainly at most $q$. [L2, step 1.1, algebra] ∎
