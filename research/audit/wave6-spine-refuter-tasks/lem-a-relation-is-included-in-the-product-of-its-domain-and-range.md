## High-blast-radius target — `lem-a-relation-is-included-in-the-product-of-its-domain-and-range`

This proof has 3 direct and 1910 transitive consumers.
Normalized current SHA-256: `5593937c8da9e58b34030bddc6a4de0c6c55abee495ad6786ff184343df91557`

The complete current target follows, including frontmatter:

````markdown
---
id: lem-a-relation-is-included-in-the-product-of-its-domain-and-range
kind: lemma
title: "Every relation $R$ satisfies $R \\subseteq \\operatorname{dom} R \\times \\operatorname{ran} R$, and $R$ is a relation from $A$ to $B$ if and only if $\\operatorname{dom} R \\subseteq A$ and $\\operatorname{ran} R \\subseteq B$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relation-domain-range-and-field, def-cartesian-product, def-subset-and-proper-subset, thm-the-characterising-property-of-ordered-pairs]
justified_by: []
aliases: []
landmark: false
short: "a relation sits in dom times ran"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
pipeline_run: null
---

## Statement

Let $R$ be a relation and let $A$ and $B$ be sets. Then

- (i) $R \subseteq \operatorname{dom} R \times \operatorname{ran} R$;
- (ii) $R \subseteq A \times B$ if and only if $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$.

## Facts & Assumptions

**Given:** a relation $R$ and sets $A$, $B$.

[L1] A **relation** is a set $R$ every element of which is an ordered pair ([[def-relation-domain-range-and-field]]).

[L2] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L3] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L4] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L5] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): let $z \in R$. Since $R$ is a relation, $z = (a,b)$ for some sets $a$ and $b$; then $a \in \operatorname{dom} R$ and $b \in \operatorname{ran} R$ by the defining conditions, so $z \in \operatorname{dom} R \times \operatorname{ran} R$. [L1, L2, L3, L5]

1.2 Claim (ii), from left to right: assume $R \subseteq A \times B$. If $a \in \operatorname{dom} R$ then $(a,b) \in R$ for some $b$, so $(a,b) \in A \times B$, so $(a,b) = (a',b')$ with $a' \in A$ and $b' \in B$, and the characterising property gives $a = a' \in A$. The argument for $\operatorname{ran} R \subseteq B$ is the same on the second coordinate. [L2, L3, L4, L5]

1.3 Claim (ii), from right to left: assume $\operatorname{dom} R \subseteq A$ and $\operatorname{ran} R \subseteq B$, and let $z \in R$. Then $z = (a,b)$ with $a \in \operatorname{dom} R \subseteq A$ and $b \in \operatorname{ran} R \subseteq B$, so $z \in A \times B$. [L1, L2, L3, L5]

2.1 Claims (i) and (ii) are established, which is the statement. [step 1.1, step 1.2, step 1.3] ∎
````

## Full text of every cited or declared item (4)

### `def-cartesian-product`

````markdown
---
id: def-cartesian-product
kind: definition
title: "The Cartesian product $A \\times B := \\{\\, z \\in \\mathcal{P}(\\mathcal{P}(A \\cup B)) : \\exists a \\in A\\ \\exists b \\in B\\ z = (a,b) \\,\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-ordered-pairs-lie-in-the-double-power-set, def-axiom-schema-of-separation, def-ordered-pair, def-power-set, def-union-of-a-set-and-binary-union]
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: [def-product-of-two-sets]
landmark: true
short: "Cartesian product"
verification:
  precheck: n/a
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 10"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.8"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets. By
[[lem-ordered-pairs-lie-in-the-double-power-set]] every ordered pair $(a,b)$ with
$a \in A$ and $b \in B$ is an element of $\mathcal{P}(\mathcal{P}(A \cup B))$, so
[[def-axiom-schema-of-separation]] applied inside that set produces the
**Cartesian product**

$$A \times B := \{\, z \in \mathcal{P}(\mathcal{P}(A \cup B)) : \exists a \in A\ \exists b \in B\ z = (a,b) \,\}.$$

Its elements are exactly the ordered pairs $(a,b)$ ([[def-ordered-pair]]) with
$a \in A$ and $b \in B$: no such pair is lost, because each such pair lies in
the ambient set being separated. Thus $z \in A \times B$ holds if and only if
$z = (a,b)$ for some $a \in A$ and some $b \in B$.

## Remarks

- **Why the ambient set is needed.** "The set of all ordered pairs with first
  coordinate in $A$ and second in $B$" is a class abbreviation, and no axiom
  turns a class abbreviation into a set on its own. The double power set is what
  supplies a set to separate inside, so the product costs
  [[def-axiom-of-power-set]] and [[def-axiom-of-union]] as well as Separation;
  [[rem-which-axiom-each-construction-uses]] keeps the account.

- **Products of nonempty sets.** Whether a product of *two* nonempty sets is
  nonempty is settled here, by exhibiting the pair
  ([[prop-cartesian-products-and-set-operations]]). The corresponding question
  for a product of an arbitrary indexed family of nonempty sets is not settled by
  the axioms on this page: it is one formulation of the Axiom of Choice, stated
  at [[def-axiom-of-choice]].
````

### `def-relation-domain-range-and-field`

````markdown
---
id: def-relation-domain-range-and-field
kind: definition
title: "Relation, $\\operatorname{dom} R$, $\\operatorname{ran} R$, $\\operatorname{fld} R$, and the specialisations \"relation from $A$ to $B$\" and \"relation on $A$\""
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-domain-and-range-of-a-relation-are-sets, def-ordered-pair, def-cartesian-product, def-union-of-a-set-and-binary-union, def-subset-and-proper-subset]
justified_by: []
aliases: [def-relation, def-domain, def-range]
landmark: true
short: "relation, domain, range, field"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 6 and Def. 11"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.9"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

A **relation** is a set $R$ every element of which is an ordered pair
([[def-ordered-pair]]). We write $a\,R\,b$ for $(a,b) \in R$.

By [[lem-the-domain-and-range-of-a-relation-are-sets]] the following two classes
are sets, so the notation is legitimate:

$$\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}, \qquad \operatorname{ran} R := \{\, b : \exists a\ (a,b) \in R \,\},$$

the **domain** and the **range** of $R$. The **field** of $R$ is
$\operatorname{fld} R := \operatorname{dom} R \cup \operatorname{ran} R$
([[def-union-of-a-set-and-binary-union]]).

$R$ is a **relation from $A$ to $B$** when $R \subseteq A \times B$
([[def-cartesian-product]], [[def-subset-and-proper-subset]]), and a **relation
on $A$** when $R \subseteq A \times A$.

## Remarks

- **Domain and range are intrinsic; the sets $A$ and $B$ are not.** A relation
  determines its own domain and range, but it is a relation from $A$ to $B$ for
  many different $A$ and $B$: any $A$ containing $\operatorname{dom} R$ and any
  $B$ containing $\operatorname{ran} R$ will do. That is the content of
  [[lem-a-relation-is-included-in-the-product-of-its-domain-and-range]], and it
  is the same distinction that makes a codomain part of the declaration
  $f : A \to B$ rather than of the set $f$ in [[def-function]].

- **The empty set is a relation.** It has no elements, so the requirement that
  every element be an ordered pair holds vacuously, and
  $\operatorname{dom} \varnothing = \operatorname{ran} \varnothing = \varnothing$.
  It is a relation on every set.
````

### `def-subset-and-proper-subset`

````markdown
---
id: def-subset-and-proper-subset
kind: definition
title: "Subset $x \\subseteq y$, proper subset $x \\subsetneq y$, and the separation notation $\\{\\, z \\in x : \\varphi(z) \\,\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-axiom-of-extensionality, def-axiom-schema-of-separation, def-language-of-set-theory]
justified_by: []
aliases: [def-subset, def-inclusion]
landmark: false
short: "subset, proper subset"
verification:
  precheck: n/a
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
    - title: "Subset (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subset"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.1"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

For sets $x$ and $y$ we write $x \subseteq y$, and say that $x$ is a **subset**
of $y$ or that $x$ is **included** in $y$, for the formula
$\forall t\,(t \in x \to t \in y)$ of the language of set theory
([[def-language-of-set-theory]]); thus $x \subseteq y$ means that every element
of $x$ is an element of $y$. We also write $y \supseteq x$ for $x \subseteq y$.

$x$ is a **proper subset** of $y$, written $x \subsetneq y$, when $x \subseteq y$
and $x \neq y$.

**Separation notation.** Let $x$ be a set, $\varphi(z,\bar p)$ a formula and
$\bar p$ parameters. [[def-axiom-schema-of-separation]] supplies a set whose
elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds,
and [[def-axiom-of-extensionality]] shows there is only one such set. It is
written

$$\{\, z \in x : \varphi(z,\bar p) \,\}$$

and every set introduced on this page by separating a condition inside a set
already in hand is written this way. Directly from the definition,
$\{\, z \in x : \varphi(z,\bar p) \,\} \subseteq x$.

## Remarks

- **$\subset$ is not used in this library.** Sources disagree about it: some write
  $\subset$ for inclusion and some for proper inclusion, so a formula containing
  it cannot be read without knowing which convention its author used.
  $\subseteq$ and $\subsetneq$ are unambiguous and are the only two symbols used
  here.

- **Membership and inclusion are different relations.** $t \in x$ says $t$ is one
  of the elements of $x$; $t \subseteq x$ says every element of $t$ is an element
  of $x$. Neither implies the other in general, and
  [[prop-basic-properties-of-the-power-set]] is where the two are systematically
  related.
````

### `thm-the-characterising-property-of-ordered-pairs`

````markdown
---
id: thm-the-characterising-property-of-ordered-pairs
kind: theorem
title: "$(a,b) = (c,d)$ if and only if $a = c$ and $b = d$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordered-pair, lem-unordered-pair-equality, def-unordered-pair-and-singleton]
justified_by: []
aliases: [thm-ordered-pair-property]
landmark: true
short: "characterising property of ordered pairs"
proof_strategy: cases
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
    - title: "Ordered pair (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_pair"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Lemma 1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Thm. 2.7"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Statement

For all sets $a$, $b$, $c$, $d$: $(a,b) = (c,d)$ if and only if $a = c$ and
$b = d$.

## Facts & Assumptions

**Given:** sets $a$, $b$, $c$, $d$.

[L1] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L2] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L3] $\{a,b\} = \{c,d\} \ \leftrightarrow\ \bigl((a = c \wedge b = d) \vee (a = d \wedge b = c)\bigr)$ ([[lem-unordered-pair-equality]]).

## Proof

**Proof technique:** cases.

1.1 Right to left: if $a = c$ and $b = d$ then $\{a\} = \{c\}$ and $\{a,b\} = \{c,d\}$, so $\{\{a\},\{a,b\}\}$ and $\{\{c\},\{c,d\}\}$ are the same set, that is $(a,b) = (c,d)$. [L1, L2]

1.2 Left to right, setting up: assume $\{\{a\},\{a,b\}\} = \{\{c\},\{c,d\}\}$. Applying the equality criterion for unordered pairs to these two sets, either $\{a\} = \{c\}$ and $\{a,b\} = \{c,d\}$, or $\{a\} = \{c,d\}$ and $\{a,b\} = \{c\}$. [L1, L3]

2.1 In the first alternative, $\{a\} = \{c\}$ reads $\{a,a\} = \{c,c\}$ and gives $a = c$. Then $\{a,b\} = \{c,d\}$ gives $a = c$ and $b = d$, or $a = d$ and $b = c$; in the second of these $b = c = a = d$, so $b = d$ holds as well. Either way $a = c$ and $b = d$. [assume-case first, step 1.2, L2, L3]

2.2 In the second alternative, $\{a,b\} = \{c\}$ reads $\{a,b\} = \{c,c\}$ and gives $a = c$ and $b = c$, while $\{a\} = \{c,d\}$ reads $\{a,a\} = \{c,d\}$ and gives $a = c$ and $a = d$. Hence $a = c$ and $b = c = a = d$. [assume-case second, step 1.2, L2, L3]

3.1 The two alternatives supplied by step 1.2 are exhaustive, so the left-to-right implication holds. [step 2.1, step 2.2, cases-exhaustive]

4.1 Both implications hold, which is the statement. [step 1.1, step 3.1] ∎
````

