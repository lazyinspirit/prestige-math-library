---
id: fs-hopfs-formula-is-obviously-independent-of-the-presentation
kind: false-statement
title: "FALSE: the numerator in Hopf's formula is presentation-independent"
status: published
origin: pipeline
deps: [def-hopf-formula-quotient, thm-reduced-words-form-the-free-group, cor-hopf-formula-is-independent-of-the-free-presentation]
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
---

## Statement

For every pair of free presentations $G=F/R=F'/R'$ of the same group, the
numerator subgroups $R\cap[F,F]$ and $R'\cap[F',F']$ in Hopf's formula are
isomorphic.

## Facts & Assumptions

**Given:** The trivial group has free presentations $1=\mathbb Z/\mathbb Z$
and $1=F(a,b)/F(a,b)$.

[F1] Hopf's quotient for $F/R$ has numerator $R\cap[F,F]$ and denominator
$[F,R]$ ([[def-hopf-formula-quotient]]).

[F2] Reduced words distinguish the nonempty commutator word
$aba^{-1}b^{-1}$ from the identity in $F(a,b)$
([[thm-reduced-words-form-the-free-group]]).

[L1] With dependent choice and supplied resolution data, the *quotients*
$(R\cap[F,F])/[F,R]$ from two free presentations are isomorphic through
$M(G)$ ([[cor-hopf-formula-is-independent-of-the-free-presentation]]).

## Refutation

**Proof technique:** direct.

1.1 In the first presentation $F=R=\mathbb Z$, so the numerator $R\cap[F,F]=[\mathbb Z,\mathbb Z]$ is trivial. [given, F1, algebra]

2.1 In the second presentation $F=R=F(a,b)$, so the numerator is $[F(a,b),F(a,b)]$. It contains the commutator $aba^{-1}b^{-1}$, which is a nonempty reduced word and hence nonidentity by [F2]. The two numerator groups are therefore not isomorphic. [given, F1, F2, step 1.1]

3.1 The denominators are respectively trivial and $[F(a,b),F(a,b)]$, so both Hopf *quotients* are trivial. This agrees with the qualified invariant comparison in [L1]; it does not make their numerators isomorphic. [F1, L1, step 1.1, step 2.1] ∎
