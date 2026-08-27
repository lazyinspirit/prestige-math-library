---
id: lem-directed-union-of-amenable-subgroups-is-amenable
kind: lemma
title: "Under the ultrafilter lemma, directed unions of amenable subgroups are amenable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-folner-criterion-for-amenability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

Assume the ultrafilter lemma. Let $G=\bigcup_{i\in I}H_i$ be a directed union
of subgroups. If every $H_i$ is amenable, then $G$ is amenable.

## Facts & Assumptions

**Given:** A directed family of amenable subgroups $(H_i)_{i\in I}$ whose union is $G$, and the ultrafilter lemma.

[L1] Under the ultrafilter lemma, amenability is equivalent to the Folner condition ([[thm-folner-criterion-for-amenability]]).

## Proof

**Proof technique:** direct.

1.1 Let $S\subseteq G$ be finite and let $\varepsilon>0$. Because the family is directed and $\bigcup_i H_i=G$, some index $i$ satisfies $S\subseteq H_i$. Since $H_i$ is amenable, [L1] gives a finite nonempty set $F\subseteq H_i$ with $|sF\triangle F|<\varepsilon|F|$ for every $s\in S$. [L1, given, choose]

2.1 The set $F$ from step 1.1 is also an $(S,\varepsilon)$-Folner set when viewed inside $G$. Since $S$ and $\varepsilon$ were arbitrary, $G$ satisfies the Folner condition. Therefore [L1] makes $G$ amenable. [L1, step 1.1] ∎
