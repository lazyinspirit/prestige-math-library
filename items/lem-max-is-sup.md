---
id: lem-max-is-sup
kind: lemma
title: "The supremum is attained exactly when a maximum exists"
status: draft
origin: session
deps: [def-max-min, lem-sup-unique, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty.

1. If $S$ has a maximum ([[def-max-min]]), then $\sup S$ exists and
   $\sup S = \max S$.
2. If $\sup S$ exists and $\sup S \in S$, then $S$ has a maximum and
   $\max S = \sup S$.

Hence, for a set whose supremum exists, the supremum is attained (belongs to the
set) precisely when the set has a maximum, and then the two agree.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$.

[L1] Maximum: $m = \max S$ means $m \in S$ and $s \le m$ for every $s \in S$; a maximum is unique ([[def-max-min]]).

[L2] Supremum: $u = \sup S$ means $u$ is an upper bound of $S$, that is $s \le u$ for every $s \in S$, and $u \le u'$ for every upper bound $u'$ of $S$; it is unique when it exists ([[lem-sup-unique]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1 assume $S$ has a maximum $m$: then $m \in S$ and $s \le m$ for every $s \in S$, so $m$ is in particular an upper bound of $S$. [assume-hyp, L1, L2]

1.2 For claim 2 assume $\sup S$ exists and lies in $S$, and write $u := \sup S \in S$. [assume-hyp, L2]

2.1 Let $u'$ be an arbitrary upper bound of $S$; since $m \in S$, the defining property of an upper bound applied to the element $m$ gives $m \le u'$. [step 1.1, L2]

2.2 Since $u = \sup S$ is an upper bound of $S$ we have $s \le u$ for every $s \in S$, and by assumption $u \in S$; these are exactly the two requirements for $u$ to be a maximum of $S$, so $\max S$ exists and equals $u = \sup S$ by uniqueness of the maximum, proving claim 2. [step 1.2, L1, L2]

3.1 Thus $m$ is an upper bound of $S$ with $m \le u'$ for every upper bound $u'$ of $S$, which is exactly the definition of a least upper bound; hence $\sup S$ exists and, by uniqueness of the least upper bound, $\sup S = m = \max S$, proving claim 1. [step 1.1, step 2.1, L1, L2]

4.1 Combining the two claims: when $\sup S$ exists, $\sup S \in S$ holds if and only if $S$ has a maximum, and in that case $\sup S = \max S$. [step 2.2, step 3.1] ∎

## Remarks

- The dual statement, that $\inf S$ is attained exactly when $S$ has a minimum
  and then $\inf S = \min S$, is not proved above. It follows by reflection:
  $m = \max S$ if and only if $-m = \min(-S)$, and $\inf X = -\sup(-X)$
  ([[lem-reflection]], [[thm-infimum-property]]), so applying the two claims
  proved here to $-S$ and negating gives the minimum form.
- Claim 1 needs no completeness assumption: a set with a maximum has a supremum
  for free, since the maximum is already the least upper bound. Only claim 2
  presupposes that $\sup S$ exists, which for a nonempty set bounded above is
  guaranteed by the least-upper-bound property ([[def-complete-ordered-field]]).
- The converse of "the supremum exists" is not "the maximum exists": the set
  $\{x \in \mathbb{R} : 0 < x < 1\}$ has supremum $1$ and no maximum
  ([[fs-sup-belongs-to-set]]). Finiteness is what forces attainment
  ([[lem-finite-set-has-max]]).
