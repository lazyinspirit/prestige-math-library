---
id: def-properties-of-a-relation-on-a-set
kind: definition
title: "Reflexive, irreflexive, symmetric, asymmetric, antisymmetric, transitive, and connex relations on a set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-relation-domain-range-and-field, def-cartesian-product, def-the-identity-and-membership-relations-on-a-set, def-subset-and-proper-subset]
justified_by: []
forward_refs: []
aliases: [def-reflexive, def-symmetric, def-transitive, def-antisymmetric, def-connex]
landmark: true
short: "properties of a relation"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §3.1 and §3.3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
pipeline_run: null
---

## Definition

Let $A$ be a set and let $R$ be a relation on $A$, that is
$R \subseteq A \times A$ ([[def-relation-domain-range-and-field]],
[[def-cartesian-product]]). Then $R$ is:

- **reflexive on $A$** when $(a,a) \in R$ for every $a \in A$;
- **irreflexive** when $(a,a) \notin R$ for every $a \in A$;
- **symmetric** when $(a,b) \in R$ implies $(b,a) \in R$, for all $a, b \in A$;
- **asymmetric** when $(a,b) \in R$ implies $(b,a) \notin R$, for all $a, b \in A$;
- **antisymmetric** when $(a,b) \in R$ and $(b,a) \in R$ imply $a = b$, for all $a, b \in A$;
- **transitive** when $(a,b) \in R$ and $(b,c) \in R$ imply $(a,c) \in R$, for all $a, b, c \in A$;
- **connex on $A$** when, for all $a, b \in A$, $(a,b) \in R$ or $(b,a) \in R$.

Reflexivity and irreflexivity have short forms in terms of the identity relation
$\Delta_A$ of [[def-the-identity-and-membership-relations-on-a-set]], because the
elements of $\Delta_A$ are exactly the pairs $(a,a)$ with $a \in A$: $R$ is
reflexive on $A$ if and only if $\Delta_A \subseteq R$
([[def-subset-and-proper-subset]]), and irreflexive if and only if $R$ and
$\Delta_A$ have no common element.

## Remarks

- **Reflexivity and connexity mention $A$; the others do not.** Whether $R$ is
  symmetric, asymmetric, antisymmetric or transitive depends on $R$ alone,
  whereas "reflexive on $A$" and "connex on $A$" depend on the ambient set: the
  empty relation is reflexive on $\varnothing$ and on no other set. The qualifier
  is therefore kept in the name of those two.

- **"Total" is ambiguous, "connex" is not.** The connex property above is also
  called *total* in much of the literature, but "total relation" is used
  elsewhere for the unrelated condition that every element of $A$ is related to
  something. Only "connex" is used here for the property defined above.

- **The named combinations, and the exact agreement with
  [[def-partial-order]].** That item names its structures in terms of a relation
  $\le$ on a set $P$, and each of its clauses is one of the properties above
  applied to $\le$, so the two vocabularies describe one set of conditions and
  not two:

  - a **partial order** on $P$ is a relation on $P$ satisfying its clauses (R),
    (A) and (T), which are reflexivity on $P$, antisymmetry and transitivity as
    defined above, quantified over the same set $P$;
  - the **strict order** $x < y :\Longleftrightarrow x \le y$ and $x \ne y$
    associated there with a partial order $\le$ is the relation
    $\le \setminus \Delta_P$ of the properties above, and it is irreflexive and
    transitive; that identification and the fact that nothing is lost in passing
    between the two presentations are proved in
    [[thm-reflexive-and-irreflexive-orders-correspond]], whose clause on
    asymmetry also reconciles the two usual definitions of a strict order;
  - two elements $x, y \in P$ are **comparable** there when $x \le y$ or
    $y \le x$, so a relation on $A$ is connex on $A$ exactly when every two
    elements of $A$ are comparable;
  - consequently what that item calls a **total order** — a partial order in
    which every two elements are comparable — is a relation on $P$ that is
    reflexive on $P$, antisymmetric, transitive and connex on $P$. "Connex"
    here and "total order" there are therefore the same condition read twice:
    connexity is the single extra clause that turns a partial order into a
    total one, and it is the connex reading of the word *total*, never the
    left-total one warned against above.

  Reflexive on $A$, symmetric and transitive is what
  [[def-equivalence-relation]] calls an equivalence relation.
