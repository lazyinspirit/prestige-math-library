---
id: thm-de-morgan-laws
kind: theorem
title: "$X \\setminus (a \\cup b) = (X \\setminus a) \\cap (X \\setminus b)$ and $X \\setminus (a \\cap b) = (X \\setminus a) \\cup (X \\setminus b)$; and for a nonempty set $F$, $X \\setminus \\bigcup F = \\bigcap \\{\\, X \\setminus a : a \\in F \\,\\}$ and $X \\setminus \\bigcap F = \\bigcup \\{\\, X \\setminus a : a \\in F \\,\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-set-difference-and-symmetric-difference, def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-unions-and-intersections-of-small-families, def-power-set, def-subset-and-proper-subset, def-axiom-schema-of-separation, def-axiom-of-extensionality]
justified_by: []
aliases: [thm-de-morgan]
landmark: false
short: "De Morgan laws"
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
    - title: "De Morgan's laws (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/De_Morgan%27s_laws"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

For all sets $X$, $a$ and $b$,

$$X \setminus (a \cup b) = (X \setminus a) \cap (X \setminus b), \qquad X \setminus (a \cap b) = (X \setminus a) \cup (X \setminus b).$$

Let $F$ be a set with $F \neq \varnothing$. Then
$\{\, X \setminus a : a \in F \,\}$ is a nonempty set and

$$X \setminus \bigcup F = \bigcap \{\, X \setminus a : a \in F \,\}, \qquad X \setminus \bigcap F = \bigcup \{\, X \setminus a : a \in F \,\}.$$

## Facts & Assumptions

**Given:** sets $X$, $a$, $b$, and a set $F$ with $F \neq \varnothing$ where the family forms are concerned.

[L1] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L2] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L3] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$ ([[def-union-of-a-set-and-binary-union]]).

[L5] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

[L6] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L7] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L8] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L9] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Proof

**Proof technique:** direct.

1.1 Every $X \setminus a$ is a subset of $X$, so the class $\{\, X \setminus a : a \in F \,\}$ is the separated set $\{\, w \in \mathcal{P}(X) : \exists a\,(a \in F \wedge w = X \setminus a) \,\}$, hence a set; and it has a member because $F$ does. [L1, L6, L7, L8]

1.2 $z \in X \setminus (a \cup b)$ holds exactly when $z \in X$ and neither $z \in a$ nor $z \in b$, that is, exactly when $z \in X$ and $z \notin a$, and $z \in X$ and $z \notin b$; this is $z \in (X \setminus a) \cap (X \setminus b)$. [L1, L2, L3, L9]

1.3 $z \in X \setminus (a \cap b)$ holds exactly when $z \in X$ and not both $z \in a$ and $z \in b$, that is, exactly when $z \in X$ and $z \notin a$, or $z \in X$ and $z \notin b$; this is $z \in (X \setminus a) \cup (X \setminus b)$. [L1, L2, L3, L9]

2.1 $z \in X \setminus \bigcup F$ holds exactly when $z \in X$ and no member $s$ of $F$ has $z \in s$, that is, exactly when $z \in X \setminus a$ for every $a \in F$; the sets $X \setminus a$ with $a \in F$ are precisely the elements of $\{\, X \setminus a : a \in F \,\}$, which is nonempty, so this is $z \in \bigcap \{\, X \setminus a : a \in F \,\}$. [L1, L4, L5, L9, step 1.1]

2.2 $z \in X \setminus \bigcap F$ holds exactly when $z \in X$ and $z$ fails to lie in some member $a$ of $F$, that is, exactly when $z \in X \setminus a$ for some $a \in F$; this is $z \in \bigcup \{\, X \setminus a : a \in F \,\}$. [L1, L4, L5, L9, step 1.1]

3.1 The two finite laws and the two family laws are established, which is the statement. [step 1.2, step 1.3, step 2.1, step 2.2] ∎
