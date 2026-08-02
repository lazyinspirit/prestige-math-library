---
id: def-clique-and-independence-numbers
kind: definition
title: "Cliques, independent sets, clique number and independence number"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-finite-cardinality,
       cor-cardinality-of-the-power-set, thm-subset-of-a-finite-set,
       thm-induction-principle]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Bondy and Murty, Graph Theory, Stable Sets and Cliques"
      url: "https://link.springer.com/book/10.1007/978-1-4471-7621-3"
pipeline_run: null
---

## Definition

Let $G=(V,E)$ be a finite simple graph. A subset $S\subseteq V$ is
**independent**, or **stable**, when no two distinct elements of $S$ are
adjacent. A subset $K\subseteq V$ is a **clique** when every two distinct
elements of $K$ are adjacent.

The **independence number** and **clique number** are

$$\alpha(G):=\max\{\,|S|:S\subseteq V\text{ is independent}\,\},\qquad \omega(G):=\max\{\,|K|:K\subseteq V\text{ is a clique}\,\}.$$ 

These maxima are well-defined. Every subset of the finite set $V$ is finite and
has cardinality at most $|V|$ ([[thm-subset-of-a-finite-set]]). Thus the sizes
occurring in either display form a subset of $\{0,\ldots,|V|\}$ that contains
$0$, since the empty subset is both
independent and a clique. A short induction on $|V|$ shows that every such
subset has a largest element: either its top element occurs, or it is a subset
of the preceding finite ordinal and the induction hypothesis applies
([[thm-induction-principle]]). In particular, for the null graph one has
$\alpha(G)=\omega(G)=0$; for every nonnull graph both values are at least $1$.
