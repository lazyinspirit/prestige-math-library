---
id: thm-distributive-laws-for-union-and-intersection
kind: theorem
title: "$a \\cap (b \\cup c) = (a \\cap b) \\cup (a \\cap c)$ and $a \\cup (b \\cap c) = (a \\cup b) \\cap (a \\cup c)$; and for a nonempty set $F$, $a \\cap \\bigcup F = \\bigcup \\{\\, a \\cap b : b \\in F \\,\\}$ and $a \\cup \\bigcap F = \\bigcap \\{\\, a \\cup b : b \\in F \\,\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-unions-and-intersections-of-small-families, def-power-set, def-subset-and-proper-subset, def-axiom-schema-of-separation, def-axiom-of-extensionality]
justified_by: []
aliases: [thm-distributive-laws-for-sets]
landmark: false
short: "distributive laws"
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
    - title: "Union (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Union_(set_theory)"
pipeline_run: null
---

## Statement

For all sets $a$, $b$ and $c$,

$$a \cap (b \cup c) = (a \cap b) \cup (a \cap c), \qquad a \cup (b \cap c) = (a \cup b) \cap (a \cup c).$$

Let $F$ be a set with $F \neq \varnothing$. Then
$\{\, a \cap b : b \in F \,\}$ and $\{\, a \cup b : b \in F \,\}$ are nonempty
sets, and

$$a \cap \bigcup F = \bigcup \{\, a \cap b : b \in F \,\}, \qquad a \cup \bigcap F = \bigcap \{\, a \cup b : b \in F \,\}.$$

## Facts & Assumptions

**Given:** sets $a$, $b$, $c$ and a set $F$ with $F \neq \varnothing$ where the family forms are concerned.

[L1] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L2] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L3] $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$ ([[def-union-of-a-set-and-binary-union]]).

[L4] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

[L5] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L6] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L7] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L8] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Every $a \cap b$ is a subset of $a$, so the class $\{\, a \cap b : b \in F \,\}$ is the separated set $\{\, w \in \mathcal{P}(a) : \exists b\,(b \in F \wedge w = a \cap b) \,\}$, hence a set; and it has a member because $F$ does. [L2, L5, L6, L7]

1.2 Every $a \cup b$ with $b \in F$ is a subset of $a \cup \bigcup F$, since an element of $b$ lies in $\bigcup F$; so $\{\, a \cup b : b \in F \,\}$ is the separated set $\{\, w \in \mathcal{P}(a \cup \bigcup F) : \exists b\,(b \in F \wedge w = a \cup b) \,\}$, hence a set, and it has a member because $F$ does. [L1, L3, L5, L6, L7]

1.3 $z \in a \cap (b \cup c)$ holds exactly when $z \in a$, and $z \in b$ or $z \in c$; that is exactly when $z \in a$ and $z \in b$, or $z \in a$ and $z \in c$, which is $z \in (a \cap b) \cup (a \cap c)$. [L1, L2, L8]

1.4 $z \in a \cup (b \cap c)$ holds exactly when $z \in a$, or $z \in b$ and $z \in c$; that is exactly when $z \in a$ or $z \in b$, and $z \in a$ or $z \in c$, which is $z \in (a \cup b) \cap (a \cup c)$. [L1, L2, L8]

2.1 $z \in a \cap \bigcup F$ holds exactly when $z \in a$ and $z \in s$ for some $s \in F$, that is, exactly when $z \in a \cap s$ for some $s \in F$; the sets $a \cap s$ with $s \in F$ are precisely the elements of $\{\, a \cap b : b \in F \,\}$, so this holds exactly when $z$ lies in some element of that set, which is $z \in \bigcup \{\, a \cap b : b \in F \,\}$. [L2, L3, L8, step 1.1]

2.2 $z \in \bigcap \{\, a \cup b : b \in F \,\}$ holds exactly when, for every $b \in F$, $z \in a$ or $z \in b$. If $z \in a \cup \bigcap F$ then either $z \in a$, and the condition holds outright, or $z$ lies in every element of $F$, and it holds again. Conversely, if the condition holds and $z \notin a$, then $z \in b$ for every $b \in F$, so $z \in \bigcap F$; hence $z \in a \cup \bigcap F$ in both cases. [L1, L4, L8, step 1.2]

3.1 The two finite laws and the two family laws are established, which is the statement. [step 1.3, step 1.4, step 2.1, step 2.2] ∎
