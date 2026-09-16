---
id: def-dependent-multiple-choice-finite-level-tree
kind: definition
title: "Dependent multiple choice in finite-level tree form"
status: draft
origin: pipeline
deps: [def-multiple-and-dependent-multiple-choice, def-natural-numbers, def-function, def-finite-cardinality]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Marianne Morillon, Axiom of Choice"
      url: "https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf"
      locator: "§2.1, pp. 5-6"
---

## Definition

Work in $\mathrm{ZF}$ ([[def-natural-numbers]]); no choice principle is used or
named in this definition beyond the one being introduced. Let $A$ be a set.

**Nodes.** A **node over $A$** is a function $t : n \to A$ whose domain is a
natural number $n$ ([[def-function]]). Its **length** is $\operatorname{dom} t = n$
and its **entries** are the values $t(0),\dots,t(n-1)$. The unique node of
length $0$ is the empty sequence $\varnothing$. For a node $t$ of length $n$, a
natural $m \le n$ and $a \in A$ write

$$t \upharpoonright m := t \cap (m \times A), \qquad t^{\frown} a := t \cup \{(n,a)\} ,$$

the **initial segment** of length $m$ and the node of length $n+1$ obtained by
**appending** $a$. A node $u$ is an **immediate successor** of $t$ when
$u = t^{\frown} a$ for some $a \in A$, and a **proper extension** of $t$ when
$t = u \upharpoonright \operatorname{dom} t$ and $\operatorname{dom} u > \operatorname{dom} t$.

**Trees.** A **tree of height $\omega$ on $A$** is a set $T$ of nodes over $A$
such that $\varnothing \in T$ and $t \upharpoonright m \in T$ whenever $t \in T$
and $m \le \operatorname{dom} t$. Its $n$-th **level** is

$$T_n := \{\, t \in T : \operatorname{dom} t = n \,\} .$$

The tree has **nonempty levels** when $T_n \ne \varnothing$ for every
$n \in \mathbb{N}$, and **finite levels** when each $T_n$ is finite
([[def-finite-cardinality]]). It is **pruned**, or **serial**, when every node
has a proper extension in $T$. A **subtree** of $T$ is a subset of $T$ that is
itself a tree of height $\omega$ on $A$.

**The $R$-chain tree.** Let $R \subseteq A \times A$ be a binary relation on $A$
and call $R$ **serial** on $A$ when every $x \in A$ has a successor: some $y \in A$
with $x \mathbin{R} y$. The **$R$-chain tree** is

$$T_R := \{\, t : t \text{ a node over } A \text{ and } t(i) \mathbin{R} t(i+1) \text{ for every } i+1 < \operatorname{dom} t \,\} .$$

It is a tree of height $\omega$ on $A$, and it is pruned exactly when $R$ is
serial on $A$: a node $t$ has a proper extension precisely when its last entry
$t(\operatorname{dom} t - 1)$ has an $R$-successor, and for the one-entry node
$(a)$ this says that $a$ has one. Its level $n$ is nonempty for every $n$ as
soon as $A \ne \varnothing$, by iterating the successor condition.

**Successor menus.** Let $R$ again be a relation on $A$. A **successor menu
sequence** for $R$ is a sequence $(F_n)_{n \in \mathbb{N}}$ of nonempty finite
subsets $F_n \subseteq A$ such that

$$\text{for every } n \text{ and every } x \in F_n \text{ there is } y \in F_{n+1} \text{ with } x \mathbin{R} y .$$

It is **coherent** when in addition every $y \in F_{n+1}$ has a predecessor in
$F_n$: some $x \in F_n$ with $x \mathbin{R} y$. Coherence is exactly the
condition that no unused element survives into the next menu, and it is what
makes the levels of a subtree of $T_R$ into a menu sequence.

**The two forms of DMC.** *Dependent multiple choice in tree form* is the
assertion

> every pruned tree of height $\omega$ on every set $A$ whose levels are
> nonempty has a subtree with nonempty finite levels;

and *dependent multiple choice in successor-menu form* is the assertion

> every serial relation on every nonempty set admits a successor menu sequence.

The menu form is the one recorded in
[[def-multiple-and-dependent-multiple-choice]]; the tree form is the one David
Fremlin writes as $\mathrm{DMC}'$ and attributes to Blass (1979). The next
theorem proves that the two assertions are equivalent over $\mathrm{ZF}$.

## Remarks

- **Pruning is a real condition.** A subtree of a pruned tree need not be
  pruned: a node of a subtree with nonempty levels may have no extension *inside*
  the subtree. That is why the tree form above asks for the levels to be
  nonempty and finite but not for the subtree to be pruned, and why the proof
  of the equivalence has to prune the menus it obtains from the other form.

- **Why the empty set is excluded from the menu form.** A serial relation on
  $A = \varnothing$ is serial vacuously, and there are no nonempty subsets of
  $A$ to serve as menus, so the menu form is stated for nonempty $A$. The tree
  form has no such exclusion: the tree consisting of the empty sequence alone
  has an empty level $1$ and is not a counterexample, because it is not pruned.

- **The name DMC.** The abbreviation is used for the principle over $\mathrm{ZF}$
  and is never asserted to be a theorem of $\mathrm{ZF}$; the strictly weaker
  position of DMC among the choice principles is recorded separately on this
  page and is not part of this definition.
