---
id: def-one-point-compactification
kind: definition
title: "The one-point (Alexandroff) compactification $X^{*} = X \\cup \\{\\infty\\}$, whose open sets are the open sets of $X$ together with the complements in $X^{*}$ of the closed compact subsets of $X$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space, def-topological-space, def-subspace-topology-top, thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: [thm-one-point-compactification-properties]
aliases: [def-alexandroff-compactification]
landmark: true
short: "one-point compactification"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Alexandroff extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexandroff_extension"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 090A"
      url: "https://stacks.math.columbia.edu/tag/090A"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

**A point outside $X$, named rather than assumed.** Put

$$\infty \;:=\; \{\, y \in X : y \notin y \,\},$$

a set by Separation. Then $\infty \notin X$: were $\infty \in X$, the defining
condition applied to $\infty$ itself would give
$\infty \in \infty \iff \infty \notin \infty$. So no hypothesis about $X$ is
needed to obtain a point outside it, and the construction below is available for
every space.

**The space.** Put $X^{*} := X \cup \{\infty\}$ and

$$\mathcal{T}^{*} \;:=\; \mathcal{T} \;\cup\; \{\, X^{*} \setminus C \;:\; C \subseteq X,\ C \text{ closed in } X \text{ and a compact subset of } X \,\} .$$

The pair $(X^{*}, \mathcal{T}^{*})$ is the **one-point compactification**, or
**Alexandroff compactification**, of $X$. Members of $\mathcal{T}$ are said to be
of the **first kind** and the sets $X^{*} \setminus C$ of the **second kind**; a
set of the second kind is exactly an open set of $\mathcal{T}^{*}$ containing
$\infty$, since a member of $\mathcal{T}$ is a subset of $X$, and the set $C$ is
recovered from it as $C = X^{*} \setminus (X^{*} \setminus C)$.

**$\mathcal{T}^{*}$ is a topology on $X^{*}$, and this is discharged here.**
Throughout, "closed" and "compact" without qualification mean closed in $X$ and a
compact subset of $X$ ([[def-compact-space]]); two facts about such sets are used
and both are [[thm-closed-subspace-of-a-compact-space-is-compact]]: a subset of a
compact $C$ that is closed in $X$ is closed in the subspace $C$
([[def-subspace-topology-top]]) and hence compact, and a union of two compact
subsets is compact.

*(T1).* $\varnothing \in \mathcal{T}$, and $X^{*} = X^{*} \setminus \varnothing$
is of the second kind, $\varnothing$ being closed in $X$ and compact.

*(T2).* Let $\mathcal{S} \subseteq \mathcal{T}^{*}$, let $\mathcal{S}_1$ be the
members of $\mathcal{S}$ lying in $\mathcal{T}$ and $\mathcal{S}_2$ the rest, so
that every member of $\mathcal{S}_2$ is of the second kind. If
$\mathcal{S}_2 = \varnothing$ then $\bigcup \mathcal{S} = \bigcup \mathcal{S}_1$
lies in $\mathcal{T}$ by (T2) in $X$. Otherwise put
$U := \bigcup \mathcal{S}_1 \in \mathcal{T}$ and
$\mathcal{D} := \{\, X^{*} \setminus O : O \in \mathcal{S}_2 \,\}$, a nonempty
family of closed compact subsets of $X$, and $C_0 := \bigcap \mathcal{D}$. Then
$C_0$ is closed by (C2) of [[def-topological-space]], and it is a closed subset of
any one member of $\mathcal{D}$, hence compact. Now

$$\bigcup \mathcal{S} \;=\; U \cup (X^{*} \setminus C_0) \;=\; X^{*} \setminus (C_0 \setminus U),$$

and $C_0 \setminus U = C_0 \cap (X \setminus U)$ is closed in $X$ and a subset of
the compact $C_0$, hence compact; so $\bigcup \mathcal{S}$ is of the second kind.

*(T3).* For $U, V \in \mathcal{T}$ the intersection lies in $\mathcal{T}$ by (T3)
in $X$. For two sets of the second kind,
$(X^{*} \setminus C) \cap (X^{*} \setminus D) = X^{*} \setminus (C \cup D)$, and
$C \cup D$ is closed in $X$ and compact as a union of two compact subsets. For one
of each, $\infty \notin U$ gives
$U \cap (X^{*} \setminus C) = U \cap (X \setminus C)$, an intersection of two
members of $\mathcal{T}$.

**Why the compact sets are also required to be closed.** The complement of a
compact set that is not closed in $X$ would not make $\infty$'s neighbourhoods
behave: the union computation in (T2) uses that an intersection of the discarded
sets is again closed, and the intersection of arbitrary compact subsets of a
non-Hausdorff space need not be compact. When $X$ is Hausdorff every compact
subset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]) and the
two descriptions agree, which is why many texts state the definition without the
word "closed" and silently assume the Hausdorff case.

## Remarks

**What the name promises is proved, not assumed.** That $X^{*}$ is compact, that
$X$ sits inside it as an open subspace carrying its own topology, and the exact
conditions under which $X$ is dense in $X^{*}$ or $X^{*}$ is Hausdorff, are
[[thm-one-point-compactification-properties]]. Nothing above uses any of them.

**The added point is a genuine construction and not a choice.** The set $\infty$
above is determined by $X$; no appeal to any principle of choice is made, and no
"take a point not in $X$" is left unexplained.

**$X^{*}$ is Hausdorff exactly when $X$ is locally compact and Hausdorff**
([[def-locally-compact-space]]), which is the reason local compactness and this
construction always appear together.
