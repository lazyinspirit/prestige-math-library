---
id: prop-algebra-of-union-intersection-and-difference
kind: proposition
title: "Union and intersection are commutative, associative, idempotent and absorptive; $a \\cup \\varnothing = a$, $a \\cap \\varnothing = \\varnothing$, $a \\setminus \\varnothing = a$, $a \\setminus a = \\varnothing$; and $a \\subseteq b$ if and only if $a \\cup b = b$, if and only if $a \\cap b = a$, if and only if $a \\setminus b = \\varnothing$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-unions-and-intersections-of-small-families, def-set-difference-and-symmetric-difference, def-subset-and-proper-subset, def-axiom-of-extensionality, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: [prop-boolean-laws-for-sets]
landmark: false
short: "algebra of the binary operations"
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
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Complement (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complement_(set_theory)"
pipeline_run: null
---

## Statement

For all sets $a$, $b$ and $c$:

- (i) $a \cup b = b \cup a$ and $a \cap b = b \cap a$;
- (ii) $(a \cup b) \cup c = a \cup (b \cup c)$ and $(a \cap b) \cap c = a \cap (b \cap c)$;
- (iii) $a \cup a = a$ and $a \cap a = a$;
- (iv) $a \cup (a \cap b) = a$ and $a \cap (a \cup b) = a$;
- (v) $a \cup \varnothing = a$, $a \cap \varnothing = \varnothing$, $a \setminus \varnothing = a$ and $a \setminus a = \varnothing$;
- (vi) $a \subseteq b$, $a \cup b = b$, $a \cap b = a$ and $a \setminus b = \varnothing$ are equivalent.

## Facts & Assumptions

**Given:** sets $a$, $b$ and $c$.

[L1] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L2] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L3] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L4] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L5] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L6] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): $z \in a \cup b$ holds exactly when $z \in a$ or $z \in b$, which is the same condition as $z \in b$ or $z \in a$, so $a \cup b$ and $b \cup a$ have the same elements; the same argument with "and" in place of "or" gives $a \cap b = b \cap a$. [L1, L2, L5]

1.2 Claim (ii): $z \in (a \cup b) \cup c$ holds exactly when $z \in a$ or $z \in b$ or $z \in c$, in either bracketing, so the two sides have the same elements; replacing "or" by "and" throughout gives the statement for intersection. [L1, L2, L5]

1.3 Claim (iii): $z \in a \cup a$ holds exactly when $z \in a$ or $z \in a$, and $z \in a \cap a$ exactly when $z \in a$ and $z \in a$; both conditions are $z \in a$. [L1, L2, L5]

1.4 Claim (iv): $z \in a \cup (a \cap b)$ holds exactly when $z \in a$, or $z \in a$ and $z \in b$, which holds exactly when $z \in a$; and $z \in a \cap (a \cup b)$ exactly when $z \in a$, and $z \in a$ or $z \in b$, which again holds exactly when $z \in a$. [L1, L2, L5]

1.5 Claim (v): $z \in a \cup \varnothing$ exactly when $z \in a$ or $z \in \varnothing$, and the second alternative never holds, so this is $z \in a$; $z \in a \cap \varnothing$ requires $z \in \varnothing$, so $a \cap \varnothing$ has no elements; $z \in a \setminus \varnothing$ exactly when $z \in a$ and $z \notin \varnothing$, and the second condition always holds; $z \in a \setminus a$ requires $z \in a$ and $z \notin a$, so $a \setminus a$ has no elements. [L1, L2, L3, L5, L6]

1.6 Claim (vi), that $a \subseteq b$ and $a \cup b = b$ are equivalent: if $a \subseteq b$ then $z \in a \cup b$, which says $z \in a$ or $z \in b$, holds exactly when $z \in b$, so $a \cup b = b$; conversely if $a \cup b = b$ and $z \in a$, then $z \in a \cup b = b$. [L1, L4, L5]

1.7 Claim (vi), that $a \subseteq b$ and $a \cap b = a$ are equivalent: if $a \subseteq b$ then $z \in a \cap b$, which says $z \in a$ and $z \in b$, holds exactly when $z \in a$, so $a \cap b = a$; conversely if $a \cap b = a$ and $z \in a$, then $z \in a \cap b$, so $z \in b$. [L2, L4, L5]

1.8 Claim (vi), that $a \subseteq b$ and $a \setminus b = \varnothing$ are equivalent: if $a \subseteq b$ then no $z$ satisfies $z \in a$ and $z \notin b$, so $a \setminus b$ has no elements; conversely if $a \setminus b = \varnothing$ and $z \in a$, then $z \notin b$ is impossible, so $z \in b$. [L3, L4, L6]

2.1 Claims (i) to (vi) are established, and the four conditions of (vi) are equivalent because each of the last three was shown equivalent to the first. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 1.8] ∎
