---
id: prop-basic-properties-of-the-power-set
kind: proposition
title: "$\\mathcal{P}(\\varnothing) = \\{\\varnothing\\}$; $\\varnothing \\in \\mathcal{P}(a)$ and $a \\in \\mathcal{P}(a)$; $a \\subseteq b$ if and only if $\\mathcal{P}(a) \\subseteq \\mathcal{P}(b)$; $\\bigcup \\mathcal{P}(a) = a$; $\\bigcap \\mathcal{P}(a) = \\varnothing$; and $\\mathcal{P}(a \\cap b) = \\mathcal{P}(a) \\cap \\mathcal{P}(b)$ while only $\\mathcal{P}(a) \\cup \\mathcal{P}(b) \\subseteq \\mathcal{P}(a \\cup b)$ holds"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-power-set, def-subset-and-proper-subset, lem-basic-laws-of-inclusion, def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-unions-and-intersections-of-small-families, thm-the-empty-set-exists-and-is-unique, def-unordered-pair-and-singleton, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "basic properties of the power set"
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
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
pipeline_run: null
---

## Statement

For all sets $a$ and $b$:

- (i) $\mathcal{P}(\varnothing) = \{\varnothing\}$;
- (ii) $\varnothing \in \mathcal{P}(a)$ and $a \in \mathcal{P}(a)$;
- (iii) $a \subseteq b$ if and only if $\mathcal{P}(a) \subseteq \mathcal{P}(b)$;
- (iv) $\bigcup \mathcal{P}(a) = a$;
- (v) $\bigcap \mathcal{P}(a) = \varnothing$;
- (vi) $\mathcal{P}(a \cap b) = \mathcal{P}(a) \cap \mathcal{P}(b)$;
- (vii) $\mathcal{P}(a) \cup \mathcal{P}(b) \subseteq \mathcal{P}(a \cup b)$;
- (viii) the inclusion in (vii) is an equality if and only if $a \subseteq b$ or $b \subseteq a$.

## Facts & Assumptions

**Given:** sets $a$ and $b$.

[L1] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L2] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L3] $\varnothing \subseteq x$ ([[lem-basic-laws-of-inclusion]]).

[L4] $x \subseteq x$ ([[lem-basic-laws-of-inclusion]]).

[L5] If $x \subseteq y$ and $y \subseteq z$ then $x \subseteq z$ ([[lem-basic-laws-of-inclusion]]).

[L6] $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$ ([[def-union-of-a-set-and-binary-union]]).

[L7] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

[L8] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L9] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L10] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L11] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L12] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): $z \in \mathcal{P}(\varnothing)$ holds exactly when $z \subseteq \varnothing$, that is, when every element of $z$ lies in $\varnothing$; since $\varnothing$ has no elements this says $z$ has no elements, hence $z = \varnothing$. So the elements of $\mathcal{P}(\varnothing)$ are exactly $\varnothing$, and $\mathcal{P}(\varnothing) = \{\varnothing\}$. [L1, L2, L10, L11, L12]

1.2 Claim (ii): $\varnothing \subseteq a$ and $a \subseteq a$, so both $\varnothing$ and $a$ are elements of $\mathcal{P}(a)$. [L1, L3, L4]

1.3 Claim (iii): if $a \subseteq b$ and $z \in \mathcal{P}(a)$, then $z \subseteq a$ and $a \subseteq b$ give $z \subseteq b$, so $z \in \mathcal{P}(b)$; conversely if $\mathcal{P}(a) \subseteq \mathcal{P}(b)$ then $a \in \mathcal{P}(a)$, since $a \subseteq a$, so $a \in \mathcal{P}(b)$, which says $a \subseteq b$. [L1, L2, L4, L5]

1.4 Claim (iv): $z \in \bigcup\mathcal{P}(a)$ holds exactly when $z$ belongs to some element of $\mathcal{P}(a)$, that is, to some $s$ with $s \subseteq a$, and any such $z$ lies in $a$; conversely if $z \in a$ then $z$ lies in the element $a$ of $\mathcal{P}(a)$. So the two sets have the same elements. [L1, L2, L4, L6, L12]

1.5 Claim (v): $\varnothing \in \mathcal{P}(a)$, so $\mathcal{P}(a) \neq \varnothing$ and $\bigcap\mathcal{P}(a)$ is defined; an element of it would have to belong to every element of $\mathcal{P}(a)$, in particular to $\varnothing$, which has no elements. So $\bigcap\mathcal{P}(a)$ has no elements and equals $\varnothing$. [L1, L3, L7, L10]

1.6 Claim (vi): $z \in \mathcal{P}(a \cap b)$ holds exactly when every element of $z$ lies in $a \cap b$, that is, lies in $a$ and in $b$; this is exactly $z \subseteq a$ together with $z \subseteq b$, that is, $z \in \mathcal{P}(a)$ and $z \in \mathcal{P}(b)$, which is $z \in \mathcal{P}(a) \cap \mathcal{P}(b)$. [L1, L2, L9, L12]

1.7 Claim (vii): if $z \in \mathcal{P}(a) \cup \mathcal{P}(b)$ then $z \subseteq a$ or $z \subseteq b$; in either case every element of $z$ lies in $a$ or in $b$, hence in $a \cup b$, so $z \in \mathcal{P}(a \cup b)$. [L1, L2, L8]

2.1 Claim (viii): if $a \subseteq b$ then the elements of $a \cup b$ are exactly those of $b$, so $z \subseteq a \cup b$ is equivalent to $z \subseteq b$ and $\mathcal{P}(a \cup b) = \mathcal{P}(b) \subseteq \mathcal{P}(a) \cup \mathcal{P}(b)$, which with the reverse inclusion gives equality; the case $b \subseteq a$ is symmetric. Conversely, if equality holds then $a \cup b \subseteq a \cup b$ puts $a \cup b$ in $\mathcal{P}(a) \cup \mathcal{P}(b)$, so $a \cup b \subseteq a$ or $a \cup b \subseteq b$, and since $b \subseteq a \cup b$ and $a \subseteq a \cup b$ these give $b \subseteq a$ and $a \subseteq b$ respectively. [L1, L2, L4, L5, L8, step 1.7]

3.1 Claims (i) to (viii) are established, which is the statement. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 2.1] ∎
