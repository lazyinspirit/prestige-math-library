---
id: lem-monotonicity-of-union-and-intersection
kind: lemma
title: "If $a \\subseteq b$ then $\\bigcup a \\subseteq \\bigcup b$; if in addition $a \\neq \\varnothing$ then $\\bigcap b \\subseteq \\bigcap a$; and $c \\subseteq \\bigcup a$ for every $c \\in a$, while $\\bigcap a \\subseteq c$ for every $c \\in a$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, def-subset-and-proper-subset, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: []
landmark: false
short: "monotonicity of union and intersection"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Union (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Union_(set_theory)"
    - title: "Intersection (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intersection_(set_theory)"
pipeline_run: null
---

## Statement

Let $a$ and $b$ be sets.

- (i) If $a \subseteq b$ then $\bigcup a \subseteq \bigcup b$.
- (ii) If $a \subseteq b$ and $a \neq \varnothing$, then $b \neq \varnothing$, both intersections are defined, and $\bigcap b \subseteq \bigcap a$.
- (iii) $c \subseteq \bigcup a$ for every $c \in a$.
- (iv) $\bigcap a \subseteq c$ for every $c \in a$.

## Facts & Assumptions

**Given:** sets $a$ and $b$.

[L1] $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$ ([[def-union-of-a-set-and-binary-union]]).

[L2] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

[L3] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L4] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): assume $a \subseteq b$ and let $z \in \bigcup a$; then $z \in s$ for some $s \in a$, and $s \in b$ because $a \subseteq b$, so $z \in \bigcup b$. [L1, L3]

1.2 Claim (ii): assume $a \subseteq b$ and $a \neq \varnothing$. Then $a$ has a member, which is also a member of $b$, so $b \neq \varnothing$ and both intersections are defined. If $z \in \bigcap b$ then $z$ lies in every member of $b$, hence in every member of $a$, so $z \in \bigcap a$. [L2, L3, L4]

1.3 Claim (iii): let $c \in a$ and $z \in c$; then $z$ lies in a member of $a$, so $z \in \bigcup a$, and therefore $c \subseteq \bigcup a$. [L1, L3]

1.4 Claim (iv): let $c \in a$; then $a \neq \varnothing$, so $\bigcap a$ is defined, and every $z \in \bigcap a$ lies in every member of $a$, in particular in $c$; therefore $\bigcap a \subseteq c$. [L2, L3, L4]

2.1 Claims (i) to (iv) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
