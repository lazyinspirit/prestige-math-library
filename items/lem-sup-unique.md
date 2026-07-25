---
id: lem-sup-unique
kind: lemma
title: "Suprema and infima are unique"
status: published
origin: session
deps: [def-complete-ordered-field, def-infimum, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$. If $u_1$ and $u_2$ are both least upper bounds of
$S$ ([[def-complete-ordered-field]]), then $u_1 = u_2$. If $\ell_1$ and $\ell_2$
are both greatest lower bounds of $S$ ([[def-infimum]]), then
$\ell_1 = \ell_2$.

Consequently a set has at most one supremum and at most one infimum, and the
notations $\sup S$ and $\inf S$ denote single, well-determined real numbers
whenever they exist.

## Facts & Assumptions

**Given:** A subset $S \subseteq \mathbb{R}$ of the complete ordered field $\mathbb{R}$, together with elements $u_1, u_2, \ell_1, \ell_2 \in \mathbb{R}$.

[L1] $u$ is a least upper bound of $S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$ ([[def-complete-ordered-field]]).

[L2] $\ell$ is a greatest lower bound of $S$ exactly when $\ell$ is a lower bound of $S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

[L3] Antisymmetry of the order: for $a, b \in \mathbb{R}$, if $a \le b$ and $b \le a$ then $a = b$. This is trichotomy in the underlying ordered field, which says that exactly one of $a < b$, $a = b$, $b < a$ holds, so, reasoning by contradiction, $a \ne b$ would put both $a < b$ and $b < a$ in force, which trichotomy forbids ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $u_1$ and $u_2$ are both least upper bounds of $S$; in particular each of them is an upper bound of $S$ and each is $\le$ every upper bound of $S$. [assume-hyp, L1]

1.2 Assume $\ell_1$ and $\ell_2$ are both greatest lower bounds of $S$; in particular each of them is a lower bound of $S$ and each is $\ge$ every lower bound of $S$. [assume-hyp, L2]

2.1 Applying the leastness of $u_1$ to the upper bound $u_2$ gives $u_1 \le u_2$, and applying the leastness of $u_2$ to the upper bound $u_1$ gives $u_2 \le u_1$. [step 1.1, L1]

2.2 Applying the greatestness of $\ell_1$ to the lower bound $\ell_2$ gives $\ell_2 \le \ell_1$, and applying the greatestness of $\ell_2$ to the lower bound $\ell_1$ gives $\ell_1 \le \ell_2$. [step 1.2, L2]

3.1 By antisymmetry $u_1 = u_2$ and $\ell_1 = \ell_2$, so a least upper bound and a greatest lower bound of $S$ are each unique when they exist, which is what licenses writing $\sup S$ and $\inf S$. [step 2.1, step 2.2, L3] ∎
