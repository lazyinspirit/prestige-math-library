---
id: prop-cartesian-products-and-set-operations
kind: proposition
title: "$A \\times (B \\cup C) = (A \\times B) \\cup (A \\times C)$, $A \\times (B \\cap C) = (A \\times B) \\cap (A \\times C)$, $A \\times (B \\setminus C) = (A \\times B) \\setminus (A \\times C)$, $(A \\cap B) \\times (C \\cap D) = (A \\times C) \\cap (B \\times D)$; $A \\times B = \\varnothing$ if and only if $A = \\varnothing$ or $B = \\varnothing$; and for nonempty $A$ and $B$, $A \\times B \\subseteq C \\times D$ if and only if $A \\subseteq C$ and $B \\subseteq D$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cartesian-product, thm-the-characterising-property-of-ordered-pairs, def-ordered-pair, def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-unions-and-intersections-of-small-families, def-set-difference-and-symmetric-difference, def-subset-and-proper-subset, thm-the-empty-set-exists-and-is-unique, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "products and set operations"
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
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
pipeline_run: null
---

## Statement

For all sets $A$, $B$, $C$, $D$:

- (i) $A \times (B \cup C) = (A \times B) \cup (A \times C)$;
- (ii) $A \times (B \cap C) = (A \times B) \cap (A \times C)$;
- (iii) $A \times (B \setminus C) = (A \times B) \setminus (A \times C)$;
- (iv) $(A \cap B) \times (C \cap D) = (A \times C) \cap (B \times D)$;
- (v) $A \times B = \varnothing$ if and only if $A = \varnothing$ or $B = \varnothing$;
- (vi) if $A \neq \varnothing$ and $B \neq \varnothing$, then $A \times B \subseteq C \times D$ if and only if $A \subseteq C$ and $B \subseteq D$.

## Facts & Assumptions

**Given:** sets $A$, $B$, $C$, $D$.

[L1] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L2] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L3] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L5] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L6] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L7] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L8] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L9] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L10] $a \cup b := \bigcup\{a,b\}$, and $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$ ([[def-union-of-a-set-and-binary-union]]).

[L11] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

## Proof

**Proof technique:** direct.

1.1 Membership criterion: for all sets $a$ and $b$, $(a,b) \in A \times B$ holds if and only if $a \in A$ and $b \in B$. Indeed, an element of $A \times B$ is a pair $(a',b')$ with $a' \in A$ and $b' \in B$, and $(a,b) = (a',b')$ forces $a = a'$ and $b = b'$; the converse is immediate from the description of $A \times B$. Every element of a product is a pair, so it suffices in each identity below to compare pairs. [L1, L2, L9]

2.1 Claim (i): $(a,t) \in A \times (B \cup C)$ holds exactly when $a \in A$ and $t \in B$ or $t \in C$, that is, exactly when $(a,t) \in A \times B$ or $(a,t) \in A \times C$. [L3, L8, L10, step 1.1]

2.2 Claim (ii): $(a,t) \in A \times (B \cap C)$ holds exactly when $a \in A$, $t \in B$ and $t \in C$, that is, exactly when $(a,t) \in A \times B$ and $(a,t) \in A \times C$. [L4, L8, L11, step 1.1]

2.3 Claim (iii): $(a,t) \in A \times (B \setminus C)$ holds exactly when $a \in A$, $t \in B$ and $t \notin C$. On the other side, $(a,t) \in (A \times B) \setminus (A \times C)$ holds exactly when $a \in A$, $t \in B$, and it is not the case that $a \in A$ and $t \in C$; given $a \in A$, that last condition is $t \notin C$. [L5, L8, step 1.1]

2.4 Claim (iv): $(u,v) \in (A \cap B) \times (C \cap D)$ holds exactly when $u \in A$, $u \in B$, $v \in C$ and $v \in D$, that is, exactly when $(u,v) \in A \times C$ and $(u,v) \in B \times D$. [L4, L8, L11, step 1.1]

2.5 Claim (v): if $A = \varnothing$ or $B = \varnothing$ then no pair satisfies the membership criterion, so $A \times B$ has no elements and equals $\varnothing$; conversely if both are nonempty, fix $a \in A$ and $b \in B$, and then $(a,b) \in A \times B$. [L7, step 1.1]

2.6 Claim (vi): assume $A \neq \varnothing$ and $B \neq \varnothing$. If $A \times B \subseteq C \times D$, fix $b_{0} \in B$; for any $a \in A$ the pair $(a,b_{0})$ lies in $A \times B$, hence in $C \times D$, so $a \in C$, and $A \subseteq C$ follows; fixing $a_{0} \in A$ and running the same argument on the second coordinate gives $B \subseteq D$. Conversely, if $A \subseteq C$ and $B \subseteq D$, then any $(a,b) \in A \times B$ has $a \in C$ and $b \in D$, so it lies in $C \times D$. [L6, L7, step 1.1]

3.1 Claims (i) to (vi) are established, which is the statement. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 2.6] ∎
