---
id: cor-distributive-and-de-morgan-laws-for-indexed-families
kind: corollary
title: "For a nonempty index set $I$: $B \\cap \\bigcup_{i \\in I} A_i = \\bigcup_{i \\in I} (B \\cap A_i)$, $B \\cup \\bigcap_{i \\in I} A_i = \\bigcap_{i \\in I} (B \\cup A_i)$, $X \\setminus \\bigcup_{i \\in I} A_i = \\bigcap_{i \\in I} (X \\setminus A_i)$, and $X \\setminus \\bigcap_{i \\in I} A_i = \\bigcup_{i \\in I} (X \\setminus A_i)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-indexed-union-and-intersection, thm-de-morgan-laws, thm-distributive-laws-for-union-and-intersection, def-indexed-family, def-set-difference-and-symmetric-difference, def-axiom-of-extensionality, def-relation-domain-range-and-field, def-power-set, def-axiom-schema-of-separation, def-cartesian-product, def-function]
justified_by: []
aliases: []
landmark: false
short: "indexed distributive and De Morgan laws"
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
    - title: "Indexed family (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indexed_family"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $(A_i)_{i \in I}$ be an indexed family with $I \neq \varnothing$ and let $B$
and $X$ be sets. Then $(B \cap A_i)_{i \in I}$, $(B \cup A_i)_{i \in I}$ and
$(X \setminus A_i)_{i \in I}$ are indexed families with index set $I$, and

$$B \cap \bigcup_{i \in I} A_i = \bigcup_{i \in I} (B \cap A_i), \qquad B \cup \bigcap_{i \in I} A_i = \bigcap_{i \in I} (B \cup A_i),$$

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i).$$

## Facts & Assumptions

**Given:** an indexed family $(A_i)_{i \in I}$ with $I \neq \varnothing$, and sets $B$ and $X$.

[L1] $\bigcup_{i \in I} A_i \;:=\; \bigcup \{A_i : i \in I\}$ ([[def-indexed-union-and-intersection]]).

[L2] An **indexed family** with **index set** $I$ is a function $A$ with $\operatorname{dom} A = I$ ([[def-indexed-family]]).

[L3] $\{A_i : i \in I\} \;:=\; \operatorname{ran} A$ ([[def-indexed-family]]).

[L4] $a \cap \bigcup F = \bigcup \{\, a \cap b : b \in F \,\}, \qquad a \cup \bigcap F = \bigcap \{\, a \cup b : b \in F \,\}$ for a set $F$ with $F \neq \varnothing$ ([[thm-distributive-laws-for-union-and-intersection]]).

[L5] $X \setminus \bigcup F = \bigcap \{\, X \setminus a : a \in F \,\}, \qquad X \setminus \bigcap F = \bigcup \{\, X \setminus a : a \in F \,\}$ for a set $F$ with $F \neq \varnothing$ ([[thm-de-morgan-laws]]).

[L6] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L7] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L8] $\operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L9] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L10] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L11] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L12] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

## Proof

**Proof technique:** direct.

1.1 The three derived families exist. Each $B \cap A_i$ is a subset of $B$, so separating inside $I \times \mathcal{P}(B)$ with the formula $\exists i\,\exists w\,(z = (i,w) \wedge i \in I \wedge w = B \cap A_i)$ gives a set; it is a function, since the value at each $i$ is determined, and its domain is $I$. The same construction inside $I \times \mathcal{P}(B \cup \bigcup_{i \in I} A_i)$ and inside $I \times \mathcal{P}(X)$ gives $(B \cup A_i)_{i \in I}$ and $(X \setminus A_i)_{i \in I}$. [L2, L9, L10, L11, L12]

2.1 Write $F := \{A_i : i \in I\}$, which is $\operatorname{ran} A$ and is nonempty because $I$ is. The range of $(B \cap A_i)_{i \in I}$ is exactly $\{\, B \cap b : b \in F \,\}$, since the values of the derived family are the sets $B \cap A_i$ with $i \in I$ and the elements of $F$ are exactly the $A_i$ with $i \in I$; the same holds for the other two derived families. [L2, L3, L8, step 1.1]

3.1 Substituting into the family laws for $F$ therefore gives all four identities: the indexed operations are by definition the primitive $\bigcup$ and $\bigcap$ applied to the range of the family concerned, and step 2.1 identifies those ranges with the sets appearing in the laws. [L1, L4, L5, L6, L7, step 2.1]

4.1 The derived families exist and the four identities hold, which is the statement. [step 1.1, step 2.1, step 3.1] ∎
