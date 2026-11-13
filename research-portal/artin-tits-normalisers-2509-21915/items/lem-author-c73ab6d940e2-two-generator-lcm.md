---
id: lem-author-c73ab6d940e2-two-generator-lcm
kind: lemma
title: The two-generator braid element is the lcm
status: published
domain: mathematics
origin: pipeline
deps:
  - thm-spherical-artin-garside-input-artin-tits-prerequisites
  - lem-author-c73ab6d940e2-short-two-letter-rigidity
  - lem-author-c73ab6d940e2-braid-class-two-words
dependency_roles:
  thm-spherical-artin-garside-input-artin-tits-prerequisites: mathematical-premise
  lem-author-c73ab6d940e2-short-two-letter-rigidity: mathematical-premise
  lem-author-c73ab6d940e2-braid-class-two-words: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
formulation_deps:
  - thm-spherical-artin-garside-input-artin-tits-prerequisites
argument_deps:
  - thm-spherical-artin-garside-input-artin-tits-prerequisites
  - lem-author-c73ab6d940e2-short-two-letter-rigidity
  - lem-author-c73ab6d940e2-braid-class-two-words
dependency_level: 7
---

## Statement

In a spherical positive Artin monoid, for distinct standard generators $a,b$ and $m=m_{ab}$, their least common multiple for left divisibility is the element represented by the two alternating words of length $m$. These are exactly its two positive word representatives.

## Statement references

[[thm-spherical-artin-garside-input-artin-tits-prerequisites]]

[[lem-author-c73ab6d940e2-short-two-letter-rigidity]]

[[lem-author-c73ab6d940e2-braid-class-two-words]]

## Facts & Assumptions

[F1] The positive monoid is cancellative and has a left-divisibility lcm for every pair. ([[thm-spherical-artin-garside-input-artin-tits-prerequisites]])

[F2] Words on $a,b$ shorter than $m$ have only one representative. ([[lem-author-c73ab6d940e2-short-two-letter-rigidity]])

[F3] The length-$m$ braid element $d$ has exactly its two alternating representatives. ([[lem-author-c73ab6d940e2-braid-class-two-words]])

## Proof

**Given:** The hypotheses and notation in the Statement.

**Goal:** Establish the asserted conclusion.

1.1 Both $a$ and $b$ left-divide $d$, so their lcm $c$ left-divides $d$. Choose positive words $p,q$ for $c$ and its complement. Then $pq$ is one of the two alternating length-$m$ words by F3. In particular $p$ is a prefix of one of these words. [F1, F3]

2.1 If $|p|<m$, F2 makes $p$ the unique word representing $c$. But $a$ and $b$ both left-divide $c$, giving word representatives of $c$ starting with these distinct letters, a contradiction. Thus $|p|=m$ and $q$ is empty, so $c=d$. The representative count is F3. [F1, F2, F3, step 1.1] ∎
