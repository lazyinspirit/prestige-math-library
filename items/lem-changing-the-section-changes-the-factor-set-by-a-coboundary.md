---
id: lem-changing-the-section-changes-the-factor-set-by-a-coboundary
kind: lemma
title: "Changing the section changes the factor set by a coboundary"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normalized-two-cocycle-and-two-coboundary, def-normalized-set-theoretic-section-and-factor-set, lem-factor-set-of-a-section-is-a-normalized-two-cocycle]
proof_strategy: direct
verification:
  audited: 2026-09-05
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

If $s$ and $s'$ are normalized sections of the same abelian-kernel extension,
then there is a normalized one-cochain $u:G\to M$ such that

$$f_{s'}=f_s+\delta u.$$

## Facts & Assumptions

**Given:** Two normalized sections $s,s':G\to E$ of the same extension.

[F1] Two-coboundaries have the form
$(\delta u)(g,h)=g\cdot u(h)-u(gh)+u(g)$
([[def-normalized-two-cocycle-and-two-coboundary]]).

[F2] Factor sets are defined by the section formula
([[def-normalized-set-theoretic-section-and-factor-set]]).

[L1] Each factor set is a normalized two-cocycle
([[lem-factor-set-of-a-section-is-a-normalized-two-cocycle]]).

## Proof

**Proof technique:** direct.

1.1 Since $\pi(s'(g)s(g)^{-1})=1$, each quotient $s'(g)s(g)^{-1}$ lies in the kernel. So there is a unique $u(g)\in M$ with $s'(g)=i(u(g))s(g)$. The normalization $s'(1)=s(1)=1$ gives $u(1)=0$. [F2, given, choose, algebra]

2.1 Substitute $s'(g)=i(u(g))s(g)$ into the factor-set formula of [F2]. After moving kernel terms past lifts by the prescribed action, the result is $$f_{s'}(g,h)=u(g)+g\cdot u(h)-u(gh)+f_s(g,h)=f_s(g,h)+(\delta u)(g,h).$$ [F1, F2, step 1.1, algebra]

3.1 Thus the two factor sets differ by a coboundary; [L1] shows that both are indeed cocycles. [L1, step 2.1] ∎
