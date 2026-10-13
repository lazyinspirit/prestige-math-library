---
id: def-split-augmented-simplicial-objects-and-matching-objects
kind: definition
title: "Split augmented simplicial schemes and matching objects"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-simplicial-object-and-simplicial-commutative-ring,
       def-fibre-product-schemes-universal-property, def-scheme,
       def-separated-morphism-schemes, def-proper-morphism,
       cor-product-schemes-over-base-exists, def-axiom-of-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge III, Publ. Math. IHES 44 (1974) 5-77, (6.2.1)-(6.2.4)"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
      locator: "(6.2.1)-(6.2.2) the N-construction and the definition of a split (scinde) simplicial object; (6.2.3)-(6.2.4) the matching-object extension data, citing SGA 4 V bis 5.1.3"
    - title: "The Stacks Project, Simplicial Methods, Sections 14.2-14.3 and 14.19"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Definition 14.18.1 (tag 017P): splitting by nondegenerate subobjects; Section 14.19: coskeleton and truncation"
---

## Definition

Fix a base scheme $S$ and work in the category of $S$-schemes
([[def-scheme]]), in which finite limits and coproducts exist
([[def-fibre-product-schemes-universal-property]],
[[cor-product-schemes-over-base-exists]]). An **augmented simplicial
$S$-scheme** is a simplicial object in this category
([[def-simplicial-object-and-simplicial-commutative-ring]]) augmented over $S$:
$S$-schemes $X_p$ for $p\ge0$ with face maps $d_i:X_p\to X_{p-1}$ and
degeneracy maps $s_i:X_p\to X_{p+1}$ satisfying the simplicial identities,
together with structure morphisms $X_p\to S$ compatible with all of them; write
$a:X_0\to S$ for the augmentation. A **$k$-truncated** such object consists of
the data in degrees $p\le k$.

For $p\ge1$ the **matching object** $M_p(X_\bullet)$ is the finite limit
over the boundary of $[p]$: there is one copy of $X_q$ for every
order-preserving injection $\theta:[q]\hookrightarrow[p]$ with $q<p$.
For $\theta=\theta'\alpha$, compatibility is imposed by the structure map
$X(\alpha):X_r\to X_q$, where $\alpha:[q]\hookrightarrow[r]$ and
$\theta':[r]\hookrightarrow[p]$. Equivalently,
$M_p(X_\bullet)=(\operatorname{cosk}_{p-1}\operatorname{sk}_{p-1}X_\bullet)_p$,
the value at $[p]$ of the right adjoint of the $(p-1)$-skeleton truncation;
set $M_0(X_\bullet)=S$. The **canonical boundary map** $X_p\to M_p(X_\bullet)$
is the morphism whose components are the structure maps of $X_\bullet$, and it
exists by the universal property of the limit.

A **splitting** consists of subobjects $N_q\hookrightarrow X_q$, called
the **nondegenerate parts**, such that the degeneracy maps induce isomorphisms
$$m_p:\coprod_{\delta:[p]\twoheadrightarrow[q],\ 0\le q\le p}N_q\xrightarrow{\ \sim\ }X_p$$
for every $p\ge0$. The surjections are order-preserving, and the identity
surjection contributes $N_p$, not the whole $X_p$. Each component map is
$N_q\hookrightarrow X_q\xrightarrow{s_\delta}X_p$; in particular $N_0=X_0$.
The object is **split** (Deligne: *s-scinde*) if it admits such a splitting;
for a $k$-truncated object the same condition is required only for $p\le k$.
For schemes these subobjects are open-and-closed coproduct summands. Thus the
$N$-construction records nondegenerate parts, rather than adding copies of
already degenerate simplices a second time.

An augmented simplicial $S$-scheme $X_\bullet\to S$ is a **proper hypercover**
of $S$ if the augmentation $X_0\to S$ and every canonical boundary map
$X_p\to M_p(X_\bullet)$, $p\ge1$, is proper and surjective
([[def-proper-morphism]]). Neither smoothness, separatedness, finiteness nor
properness of the individual terms is part of the definition; those enter as
hypotheses where they are used.

## Remarks

- **Nondegenerate parts.** Relative to the splitting, every geometric
  $p$-simplex is uniquely $s_\delta(y)$ for a nondegenerate simplex
  $y\in N_q$ and a surjection $[p]\twoheadrightarrow[q]$. Split degeneracies
  do not require an extra degeneracy or a section of the augmentation.
- **Matching objects as closed subschemes.** The limit computing $M_p$ can be
  formed from finitely many fibre products of the terms $X_q$, $q<p$.
  If all the lower terms are separated over $S$, then $M_p$ is a
  closed subscheme of a finite fibre product of the $X_q$: the conditions
  comparing two composites of structure maps are equalities into a separated
  target, hence closed
  ([[def-separated-morphism-schemes]]). In particular a matching object of a
  hypercover over a separated field-scheme $S$ with terms projective over the
  field is itself projective over that field: the fibre products over $S$
  are closed in the field-products by the closed diagonal of $S$.
- **The extension data.** A split $(p-1)$-truncated object with its specified
  splitting, its matching object $M_p$ and a
  morphism $N\to M_p$ are the data from which Deligne's proposition (SGA 4 V
  bis 5.1.3; Deligne (6.2.3)-(6.2.4)) reconstructs, up to unique isomorphism
  preserving these data, a $p$-truncated split
  extension whose degree-$p$ term restricts to $N$ on the nondegenerate part;
  the construction is carried out in the proof of the hyperresolution theorem
  on the page of this item, and no further splitting is chosen there.
