---
id: thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect
kind: theorem
title: "Existence criterion for universal central extensions"
status: draft
origin: pipeline
deps: [def-perfect-group, def-universal-central-extension, def-free-presentation-kernel-data]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

A group $G$ admits a universal central extension if and only if $G$ is
perfect.

## Facts & Assumptions

**Given:** First suppose $u:U\twoheadrightarrow G$ is universal.

## Proof

**Proof technique:** direct.

1.1 For every abelian group $A$ and homomorphism $\phi:G\to A$, the two maps $x\mapsto(u(x),0)$ and $x\mapsto(u(x),\phi(u(x)))$ from $U$ to the split central extension $G\times A\to G$ must agree by universality.  Since $u$ is surjective, $\phi=0$.  Taking $A=G_{\mathrm{ab}}$ and $\phi$ the quotient map gives $G_{\mathrm{ab}}=0$, so $G$ is perfect. [given, algebra]

1.2 Conversely, let $G=F/R$ be perfect.  Then $F=[F,F]R$, so $[F,F]/[F,R]\to G$ is a central surjection.  Given any central extension $E\to G$, lift the free generators of $F$ to $E$.  The resulting map $F\to E$ kills $[F,R]$ on $[F,F]$ because the kernel of $E\to G$ is central. Different choices of lifts differ by central kernel elements and hence agree on $[F,F]$, giving a canonical map $[F,F]/[F,R]\to E$ over $G$. Writing $F'=[F,F]$, the identity $F=F'R$ implies $F'=[F',F'][F,R]$, so $[F,F]/[F,R]$ is perfect.  The pointwise difference of any two maps from this group to $E$ over $G$ is therefore a homomorphism to the central abelian kernel of $E\to G$, and must vanish. Thus the canonical map is unique, proving universality. [given, construct]

2.1 Steps 1.1 and 1.2 prove the two implications. [step 1.1, step 1.2] ∎
