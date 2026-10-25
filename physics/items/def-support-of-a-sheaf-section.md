---
id: def-support-of-a-sheaf-section
kind: definition
title: "Support of a section of a sheaf"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-presheaf-on-topological-space, def-stalk-of-presheaf,
       def-germ-of-section, lem-section-zero-if-all-germs-zero,
       def-compact-space, thm-closed-subspace-of-a-compact-space-is-compact,
       cor-heine-borel-in-the-product-topology,
       lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "The Stacks Project, Sheaves of Modules (chapter 17); §5 Supports of modules and sections, Definition 5.1 (tag 01AT) and Lemma 5.2 (tag 01AU)"
      url: "https://stacks.math.columbia.edu/download/modules.pdf"
      locator: '§5, Definition 5.1 (tag 01AT): the support of a section s of a sheaf of modules is the set of points x with nonzero image s_x in the stalk; Lemma 5.2 (tag 01AU): the support of a local section is closed in its domain'
    - title: "Pierre Schapira, An Introduction to Categories and Sheaves, lecture notes, 2023"
      url: "https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/CatShv.pdf"
      locator: '§10.2, equation (10.2.4), printed pp. 178–179: for locally closed Z, Gamma_Z(X;F) = {s in Gamma(U;F) : supp(s) contained in Z}, with supp(s) defined through the stalk images; §11.2, printed pp. 207–210, uses the same support in the c-soft calculus'
---

## Definition

Let $X$ be a topological space, let $\mathcal F$ be a presheaf of $k$-vector
spaces (or of abelian groups) on $X$
([[def-presheaf-on-topological-space]]), let $U\subseteq X$ be open and let
$s\in\mathcal F(U)$. The **support of $s$** is
$$\operatorname{Supp}(s):=\{\,x\in U: s_x\neq 0\,\}\subseteq U,$$
where $s_x\in\mathcal F_x$ denotes the germ of $s$ at $x$ in the stalk
$\mathcal F_x$ ([[def-stalk-of-presheaf]], [[def-germ-of-section]]). A section
$s\in\mathcal F(X)$ is **compactly supported** when its support is a compact
subspace of $X$ ([[def-compact-space]]). For a subspace $Z\subseteq X$ and a
presheaf $\mathcal G$ on $Z$, the support of $t\in\mathcal G(Z)$ is defined by
the same condition using the stalks of $\mathcal G$. The support is not assumed
closed in $X$ nor compact.

When $\mathcal F$ is a **sheaf** of abelian groups (in particular of $k$-vector spaces) the following three
consistency facts hold; they are immediate consequences of the definitions
above and are recorded here because every later compact-support statement uses
them.

1. $\operatorname{Supp}(s)$ is closed in $U$. Indeed, if $x\notin
   \operatorname{Supp}(s)$ then $s_x=0$ in the stalk; equality of germs means
   that $s$ and the zero section agree on some open neighbourhood $W\subseteq U$
   of $x$ ([[def-germ-of-section]]), so $s$ vanishes on the open neighbourhood
   $W$ of $x$, and $U\setminus\operatorname{Supp}(s)$ is therefore open in $U$.
2. $\operatorname{Supp}(s)=\varnothing$ if and only if $s=0$. If every germ of
   $s$ is zero then $s=0$ by the locality axiom of a sheaf applied to the cover
   of $U$ by its open subsets ([[lem-section-zero-if-all-germs-zero]]); the
   converse is immediate, since the zero section has zero germ at every point.
3. $\operatorname{Supp}(s|_V)=\operatorname{Supp}(s)\cap V$ for every open
   $V\subseteq U$. Restriction is compatible with the germ maps, so
   $(s|_V)_x=s_x$ for every $x\in V$ ([[def-germ-of-section]]).

For a sheaf, a section whose support is contained in a compact subset
$C\subseteq U$ is compactly supported: its support is closed in $C$ by fact 1,
hence compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]).
For a global section ($U=X$), this applies to any compact subset of $X$.
For a local section, containment in a compact subset of $X$ alone does not
suffice: the constant nonzero section of the constant sheaf
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]])
on $U=(0,1)\subseteq X=[0,1]$ has
support $U$, which is not compact although it is contained in the compact $X$
([[cor-heine-borel-in-the-product-topology]], $n=1$).
The open cover $\{(1/n,1):n\ge2\}$ of $U$ has no finite subcover.
No choice principle is used: germs, stalks, supports and restrictions are elementary.

## Remarks

- For a sheaf $\mathcal F$ of abelian groups and sections $s,t\in\mathcal F(U)$
  one has $\operatorname{Supp}(s+t)\subseteq\operatorname{Supp}(s)\cup
  \operatorname{Supp}(t)$ and $\operatorname{Supp}(-s)=
  \operatorname{Supp}(s)$: if both germs vanish at $x$ then $s$ and $t$ vanish
  on a common open neighbourhood of $x$, hence so does $s+t$, and if $s$ vanishes
  on a neighbourhood of $x$ then so does $-s$. These inclusion facts are used
  silently in the patching arguments of the compact-support calculus.
