---
id: lem-factor-set-of-a-section-is-a-normalized-two-cocycle
kind: lemma
title: "The factor set of a section is a normalized two-cocycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normalized-two-cocycle-and-two-coboundary, def-normalized-set-theoretic-section-and-factor-set]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

If $s$ is a normalized section of an abelian-kernel extension, then its factor
set $f_s$ is a normalized two-cocycle.

## Facts & Assumptions

**Given:** An extension $1\to M\to E\to G\to1$ with abelian kernel, and a
normalized section $s:G\to E$.

[F1] Normalized two-cocycles are characterized by the cocycle and normalization
equations
([[def-normalized-two-cocycle-and-two-coboundary]]).

[F2] The factor set of a normalized section is defined by
$s(g)s(h)s(gh)^{-1}=i(f_s(g,h))$
([[def-normalized-set-theoretic-section-and-factor-set]]).

## Proof

**Proof technique:** direct.

1.1 Because $s(1)=1$, [F2] gives $i(f_s(1,g))=s(1)s(g)s(g)^{-1}=1$ and likewise $i(f_s(g,1))=1$. The kernel map $i$ is injective, so $f_s(1,g)=f_s(g,1)=0$. [F2, given, algebra]

1.2 Compute $(s(g)s(h))s(k)$ and $s(g)(s(h)s(k))$ using [F2]. The left-associated expansion is $$i(f_s(g,h))\,i(f_s(gh,k))\,s(ghk),$$ while the right-associated expansion is $$s(g)\,i(f_s(h,k))\,s(g)^{-1}\,i(f_s(g,hk))\,s(ghk).$$ Translating the conjugation term by the given $G$-action yields $$g\cdot f_s(h,k)-f_s(gh,k)+f_s(g,hk)-f_s(g,h)=0.$$ [F2, algebra]

2.1 Steps 1.1 and 1.2 are exactly the conditions of [F1], so $f_s\in Z^2(G,M)$. [F1, step 1.1, step 1.2] ∎
