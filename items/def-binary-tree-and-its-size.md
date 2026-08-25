---
id: def-binary-tree-and-its-size
kind: definition
title: "Binary trees, defined recursively, and their size"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-words-factor-avoidance-and-prefix-states, def-finite-cardinality, def-natural-numbers, def-power-set, thm-sum-rule, thm-product-rule, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Definition

Let $\{0,1\}^{*}:=\bigcup_{\ell\in\mathbb{N}}\{0,1\}^{\ell}$ be the set of all
finite words over $\{0,1\}$ ([[def-finite-words-factor-avoidance-and-prefix-states]],
[[def-natural-numbers]]), written $\varepsilon$ for the empty word and $wb$ for
the word $w$ followed by the letter $b$. A word $u$ is a **prefix** of $w$ when
$w=uz$ for some $z$.

**Definition.** A **binary tree** is a finite set $T\subseteq\{0,1\}^{*}$
([[def-finite-cardinality]]) such that

1. $\varepsilon\in T$;
2. $T$ is closed under prefixes: if $wb\in T$ with $b\in\{0,1\}$ then $w\in T$;
3. for every $w\in T$: $w0\in T$ if and only if $w1\in T$.

Its elements are **nodes**; a node $w$ is **internal** when $w0\in T$, and a
**leaf** otherwise. The **size** of $T$ is the number of internal nodes,
$$\operatorname{size}(T):=\lvert\{\,w\in T : w0\in T\,\}\rvert,$$
a natural number because $T$ is finite ([[thm-subset-of-a-finite-set]]). Write
$\mathcal{T}$ for the set of binary trees, a subset of
$\mathcal{P}(\{0,1\}^{*})$ ([[def-power-set]]), and
$\mathcal{T}_n:=\{\,T\in\mathcal{T} : \operatorname{size}(T)=n\,\}$.

**The trees of size $0$.** If $\operatorname{size}(T)=0$ then no node of $T$ is
internal, so no node has a child; a nonempty word $wb$ in $T$ would put $w$ in $T$
by clause 2 with $wb$ a child of it, so $T=\{\varepsilon\}$. Conversely
$\{\varepsilon\}$ is a binary tree of size $0$. Hence
$\mathcal{T}_0=\{\{\varepsilon\}\}$, a one-element set: the tree with no internal
node at all.

**The recursion, proved here because everything below uses it.** Let
$T\in\mathcal{T}$ with $T\ne\{\varepsilon\}$; then $\varepsilon$ is internal, so
$0\in T$ and, by clause 3, $1\in T$. Put

$$L:=\{\, w : 0w\in T \,\}, \qquad R:=\{\, w : 1w\in T \,\}.$$

Both are binary trees: each contains $\varepsilon$, each is prefix-closed because
$T$ is, each satisfies clause 3 because $T$ does, and each is finite because
$w\mapsto 0w$ and $w\mapsto 1w$ inject them into $T$. The internal nodes of $T$
are $\varepsilon$ together with the words $0w$ for $w$ internal in $L$ and $1w$
for $w$ internal in $R$, and these three families are pairwise disjoint, so
[[thm-sum-rule]] gives

$$\operatorname{size}(T)=1+\operatorname{size}(L)+\operatorname{size}(R).$$

Conversely, for binary trees $L$ and $R$ the set
$T:=\{\varepsilon\}\cup\{0w:w\in L\}\cup\{1w:w\in R\}$ is a binary tree with those
two sets recovered as above, and with size $1+\operatorname{size}(L)+\operatorname{size}(R)$.
The two constructions undo one another, so for every $n\in\mathbb{N}$ the map
$T\mapsto(\operatorname{size}(L),L,R)$ is a bijection

$$\mathcal{T}_{n+1}\longrightarrow \{\,(i,L,R) : i\le n,\ L\in\mathcal{T}_i,\ R\in\mathcal{T}_{n-i}\,\}.$$

**Small cases.** $\mathcal{T}_1$ has the single member
$\{\varepsilon,0,1\}$, and $\mathcal{T}_2$ has exactly two members, obtained by
attaching the size-one tree on the left or on the right.

## Remarks

- **No graph theory is used, and none is available at this point in the reading
  order.** A binary tree here is a set of node addresses: a finite prefix-closed
  set of binary words in which a node has two children or none. The usual picture,
  with a root drawn at the top and two subtrees hanging from it, is an
  illustration of the recursion clause above and is not a hypothesis anywhere.

- **Size counts internal nodes, not nodes.** A tree of size $n$ has $n$ internal
  nodes and, by the recursion clause and induction, $n+1$ leaves; the count that
  matches the Catalan numbers is the one above. A statement about trees with $n$
  nodes would be a different statement.

- **Why the addresses and not ordered pairs.** Defining a tree as $\bullet$ or an
  ordered pair of trees would need a recursion whose values are sets and whose
  ambient collection is not a set at this point in the development. The address
  encoding puts every tree inside the fixed set $\mathcal{P}(\{0,1\}^{*})$, so the
  definition is a condition rather than a construction, and the recursion clause
  above is then a theorem about it.
