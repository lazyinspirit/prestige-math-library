---
id: thm-defect-groups-are-maximal-brauer-support
kind: theorem
title: Defect groups are maximal Brauer support
deps: [lem-block-relative-trace-characterizes-diagonal-projectivity, lem-brauer-kernel-and-relative-trace-support, lem-block-centre-locality-and-trace-ideal-sums, thm-defect-groups-of-a-block-are-conjugate]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

A $p$-subgroup $D$ is a defect group of $b$ if and only if $\operatorname{Br}_D(b)\ne0$ and $D$ is maximal among $p$-subgroups with nonzero Brauer image. Every subgroup with nonzero image is contained in a conjugate of any defect group.

## Facts & Assumptions

**Given:** A block idempotent $b$ and $p$-subgroups of $G$.

[F1] Defect groups are minimal $p$-subgroups giving $b=\operatorname{Tr}_D^G(a)$. ([[lem-block-relative-trace-characterizes-diagonal-projectivity]])

[F2] The Brauer kernel is the proper trace sum, and nonzero trace support forces subgroup containment up to conjugacy. ([[lem-brauer-kernel-and-relative-trace-support]])

[F3] A finite trace-ideal sum containing the block identity has one ideal containing it. ([[lem-block-centre-locality-and-trace-ideal-sums]])

[F4] Defect groups and their conjugates are exactly one conjugacy class. ([[thm-defect-groups-of-a-block-are-conjugate]])

## Proof

**Proof technique:** direct.

1.1 Choose a defect group $D$ and $a\in B^D$ with $b=\operatorname{Tr}_D^G(a)$. If $\operatorname{Br}_D(b)=0$, [F2] writes $b=\sum_{Q<D}\operatorname{Tr}_Q^D(u_Q)$. Multiplying by $b$ if necessary puts $u_Q$ in $B^Q$. Since $b$ is central and $a$ is $D$-fixed, trace transitivity gives $b=b^2=\operatorname{Tr}_D^G(ab)=\sum_{Q<D}\operatorname{Tr}_Q^G(au_Q)$. Each term lies in its trace ideal of $Z(B)$. By [F3], $b$ belongs to one proper-$Q$ trace ideal, contradicting minimality of $D$. Thus its image is nonzero. [F1, F2, F3]

2.1 For any $P$ with $\operatorname{Br}_P(b)\ne0$, the same trace expression for $b$ and [F2] imply $P\le gDg^{-1}$ for some $g$. A subgroup containing $D$ with nonzero image therefore has order at most $|D|$, proving maximality of $D$. Conversely a maximal $P$ with nonzero image lies in $gDg^{-1}$, whose image is nonzero since it too is a defect group by [F4] and step 1.1. Maximality gives equality, and [F4] makes $P$ a defect group. [F2, F4, step 1.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
