---
id: lem-radical-commutes-with-localisation
kind: lemma
title: "Radicals commute with localization"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radical-of-an-ideal, def-multiplicative-subset-and-localisation, thm-ideal-correspondence-for-localisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $S\subseteq R$ be a multiplicative subset, and let $I\trianglelefteq R$ be an ideal. Then
$$
S^{-1}\!\sqrt{I}=\sqrt{S^{-1}I}
$$
as ideals of $S^{-1}R$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S\subseteq R$, and an ideal $I\trianglelefteq R$.

[L1] An element lies in the radical of an ideal exactly when some positive power lies in that ideal ([[def-radical-of-an-ideal]]).

[L2] In $S^{-1}R$, one has $r/s=r'/s'$ exactly when $u(rs'-r's)=0$ for some $u\in S$ ([[def-multiplicative-subset-and-localisation]]).

[L3] The extended ideal is $S^{-1}I=\{a/u:a\in I,\ u\in S\}$ ([[thm-ideal-correspondence-for-localisation]]).

## Proof

**Proof technique:** direct.

1.1 If $a/s\in S^{-1}\!\sqrt{I}$, choose $n\ge 1$ with $a^n\in I$. Then $(a/s)^n=a^n/s^n\in S^{-1}I$, so $a/s\in\sqrt{S^{-1}I}$ by [L1]. This proves $S^{-1}\!\sqrt{I}\subseteq\sqrt{S^{-1}I}$. [L1, L3, given, algebra]

1.2 Conversely, let $r/s\in\sqrt{S^{-1}I}$. Choose $n\ge 1$ with $r^n/s^n\in S^{-1}I$, and then choose $a\in I$ and $u\in S$ with $r^n/s^n=a/u$. By [L2], some $t\in S$ satisfies $t(ur^n-as^n)=0$. Hence $(tu)r^n=tas^n\in I$, so $((tu)r)^n=(tu)^{n-1}((tu)r^n)\in I$. Thus $(tu)r\in\sqrt{I}$ by [L1], and $r/s=((tu)r)/((tu)s)$ lies in $S^{-1}\!\sqrt{I}$. [L1, L2, L3, choose, algebra]

2.1 Steps 1.1 and 1.2 prove the equality $S^{-1}\!\sqrt{I}=\sqrt{S^{-1}I}$. [step 1.1, step 1.2] ∎
