---
id: thm-reflexive-and-irreflexive-orders-correspond
kind: theorem
title: "On a set $A$, $R \\mapsto R \\setminus \\Delta_A$ and $S \\mapsto S \\cup \\Delta_A$ are mutually inverse bijections between the partial orders on $A$ and the irreflexive, transitive relations on $A$; $R \\setminus \\Delta_A$ is the strict order of $R$, and every irreflexive transitive relation is asymmetric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-properties-of-a-relation-on-a-set, def-partial-order, def-the-identity-and-membership-relations-on-a-set, def-set-difference-and-symmetric-difference, def-union-of-a-set-and-binary-union, lem-unions-and-intersections-of-small-families, def-axiom-of-extensionality, def-relation-domain-range-and-field, def-cartesian-product, def-power-set, def-axiom-schema-of-separation, def-subset-and-proper-subset]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "strict and reflexive orders correspond"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Lemma 9 and Lemma 10"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "Partially ordered set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Partially_ordered_set"
pipeline_run: null
---

## Statement

Let $A$ be a set. Write $\mathcal{R}$ for the collection of relations on $A$ that
are reflexive on $A$, antisymmetric and transitive — that is, the partial orders
on $A$ in the sense of [[def-partial-order]] — and $\mathcal{S}$ for the
collection of relations on $A$ that are irreflexive and transitive. Then:

- (i) $\mathcal{R}$ and $\mathcal{S}$ are sets, both subsets of $\mathcal{P}(A \times A)$;
- (ii) every $S \in \mathcal{S}$ is asymmetric;
- (iii) $R \setminus \Delta_A \in \mathcal{S}$ for every $R \in \mathcal{R}$;
- (iv) $S \cup \Delta_A \in \mathcal{R}$ for every $S \in \mathcal{S}$;
- (v) $(R \setminus \Delta_A) \cup \Delta_A = R$ for every $R \in \mathcal{R}$, and $(S \cup \Delta_A) \setminus \Delta_A = S$ for every $S \in \mathcal{S}$;
- (vi) for every $R \in \mathcal{R}$ and all $x, y$, the pair $(x,y)$ lies in $R \setminus \Delta_A$ if and only if $(x,y) \in R$ and $x \neq y$; that is, $R \setminus \Delta_A$ is exactly the strict order associated with the partial order $R$.

Clauses (iii) to (v) are what it means for the two assignments to be mutually
inverse bijections between $\mathcal{R}$ and $\mathcal{S}$, and clause (vi)
identifies the first assignment with the passage from a partial order to its
strict order.

## Facts & Assumptions

**Given:** a set $A$.

[L1] $R$ is **reflexive on $A$** when $(a,a) \in R$ for every $a \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L2] $R$ is **irreflexive** when $(a,a) \notin R$ for every $a \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L3] $R$ is **antisymmetric** when $(a,b) \in R$ and $(b,a) \in R$ imply $a = b$, for all $a, b \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L4] $R$ is **transitive** when $(a,b) \in R$ and $(b,c) \in R$ imply $(a,c) \in R$, for all $a, b, c \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L5] $R$ is **asymmetric** when $(a,b) \in R$ implies $(b,a) \notin R$, for all $a, b \in A$ ([[def-properties-of-a-relation-on-a-set]]).

[L6] $(a,b) \in \Delta_A$ holds if and only if $a = b$ and $a \in A$ ([[def-the-identity-and-membership-relations-on-a-set]]).

[L7] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L8] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L9] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L10] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L11] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L12] $R$ is a **relation on $A$** when $R \subseteq A \times A$ ([[def-relation-domain-range-and-field]]).

[L13] $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$ ([[def-cartesian-product]]).

[L14] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L15] A **partial order** on $P$ is a binary relation $\le$ on $P$ such that, for all $x, y, z \in P$: $x \le x$; if $x \le y$ and $y \le x$, then $x = y$; and if $x \le y$ and $y \le z$, then $x \le z$ ([[def-partial-order]]).

[L16] The **strict order** associated with a partial order $\le$ is defined by $x < y$ if and only if $x \le y$ and $x \ne y$ ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 Claim (i): a relation on $A$ is exactly an element of $\mathcal{P}(A \times A)$, so $\mathcal{R}$ and $\mathcal{S}$ are obtained by separating inside that set with the formulas expressing the three, respectively two, listed properties, with parameter $A$. [L10, L11, L12, L13, L14]

1.2 Claim (ii): let $S$ be irreflexive and transitive and suppose $(a,b) \in S$ and $(b,a) \in S$. Transitivity gives $(a,a) \in S$, which irreflexivity forbids; so $(a,b) \in S$ implies $(b,a) \notin S$. [L2, L4, L5]

1.3 Claim (vi): let $R \in \mathcal{R}$, so that $R$ is a partial order on $A$. If $(x,y) \in R$ then $x \in A$, because $R \subseteq A \times A$; so for such a pair $(x,y) \in \Delta_A$ holds exactly when $x = y$. Hence $(x,y) \in R \setminus \Delta_A$ if and only if $(x,y) \in R$ and $x \neq y$, and that is the defining condition of the strict order associated with $R$. [L6, L7, L12, L13, L15, L16]

2.1 Claim (iii): let $R \in \mathcal{R}$ and put $S := R \setminus \Delta_A$. For $a \in A$ the pair $(a,a)$ lies in $\Delta_A$, so it is not in $S$, and $S$ is irreflexive. If $(a,b) \in S$ and $(b,c) \in S$ then $(a,b),(b,c) \in R$, so $(a,c) \in R$; and $a = c$ would give $(a,b) \in R$ and $(b,a) \in R$, whence $a = b$ by antisymmetry, contradicting $(a,b) \notin \Delta_A$. So $(a,c) \notin \Delta_A$ and $(a,c) \in S$. Finally $S \subseteq R \subseteq A \times A$. [L2, L3, L4, L6, L7, L12, L14, step 1.2]

2.2 Claim (iv): let $S \in \mathcal{S}$ and put $R := S \cup \Delta_A$. Then $\Delta_A \subseteq R$, so $R$ is reflexive on $A$, and $R \subseteq A \times A$ since both parts are. If $(a,b),(b,a) \in R$ and $a \neq b$ then neither pair lies in $\Delta_A$, so both lie in $S$, contradicting asymmetry; hence $R$ is antisymmetric. If $(a,b),(b,c) \in R$, then $a = b$ or $b = c$ makes $(a,c)$ one of the two given pairs, and otherwise both lie in $S$ and transitivity of $S$ gives $(a,c) \in S \subseteq R$. [L1, L3, L4, L6, L8, L12, L14, step 1.2]

3.1 Claim (v): for $R \in \mathcal{R}$ reflexivity gives $\Delta_A \subseteq R$, so $(R \setminus \Delta_A) \cup \Delta_A$ and $R$ have the same elements; for $S \in \mathcal{S}$ irreflexivity gives that no element of $\Delta_A$ lies in $S$, so $(S \cup \Delta_A) \setminus \Delta_A$ and $S$ have the same elements. [L1, L2, L6, L7, L8, L9, step 2.1, step 2.2]

4.1 Clauses (i) to (vi) are established, so the two assignments send $\mathcal{R}$ into $\mathcal{S}$ and back and undo one another, and the first of them is the passage to the strict order, which is the statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **What the correspondence says about the vocabulary of [[def-partial-order]].** The relations collected in $\mathcal{R}$ are exactly the partial orders on $A$, and by clause (vi) the assignment $R \mapsto R \setminus \Delta_A$ is not a new construction but the one that item already performs when it passes from $\le$ to $<$. Clauses (iii) to (v) then say that nothing is lost either way: a partial order and its strict order carry the same information, and every irreflexive transitive relation arises as the strict order of exactly one partial order. Clause (ii) reconciles the definition of a strict order as irreflexive and transitive with the definition as asymmetric and transitive.

- **Connexity is untouched by the correspondence.** The extra clause that makes a partial order a total order in [[def-partial-order]] is connexity, and it is not carried across by $R \mapsto R \setminus \Delta_A$: a total order is connex on $A$, whereas an irreflexive relation relates no element of $A$ to itself, so it is connex on $A$ only when $A$ is empty. The strict counterpart of connexity is trichotomy, which is not among the properties fixed in [[def-properties-of-a-relation-on-a-set]], and the correspondence above is stated for partial orders rather than for total ones.
