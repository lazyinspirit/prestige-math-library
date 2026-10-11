---
id: def-split-augmented-simplicial-objects-and-matching-objects
kind: definition
title: "Split augmented simplicial schemes and matching objects"
status: draft
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
      locator: "The simplex category, face and degeneracy maps, and the coskeleton and skeleton constructions"
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

For $p\ge1$ the **matching object** $M_p(X_\bullet)$ is the limit of the
diagram of $S$-morphisms
$$X_q\xrightarrow{\ \phi\ }X_r\qquad\text{for }[p]\xrightarrow{\ \phi\ }[q]\ \text{with}\ q<p,$$
indexed by all structure maps out of degrees below $p$ (equivalently,
$M_p(X_\bullet)=(\operatorname{cosk}_{p-1}\operatorname{sk}_{p-1}X_\bullet)_p$,
the value at $[p]$ of the right adjoint of the $(p-1)$-skeleton truncation);
set $M_0(X_\bullet)=S$. The **canonical boundary map** $X_p\to M_p(X_\bullet)$
is the morphism whose components are the structure maps of $X_\bullet$, and it
exists by the universal property of the limit.

The **$N$-construction** attaches to $X_\bullet$ the $S$-schemes
$$N_p(X_\bullet)=\coprod_{\delta:[p]\twoheadrightarrow[q],\ q<p}X_q^{(\delta)}\ \sqcup\ X_p,$$
a disjoint union with one summand a copy of $X_p$ and one copy of $X_q$ for each
order-preserving surjection $\delta$ ([[cor-product-schemes-over-base-exists]]),
together with the **multiplication**
$$m_p:N_p(X_\bullet)\longrightarrow X_p$$
which is the identity on the $X_p$-summand and the degeneracy map $s_\delta$ on
the summand indexed by $\delta$. The object $X_\bullet$ is **split**
(Deligne: *scinde*) if $m_p$ is an isomorphism for every $p$; a $k$-truncated
object is split if $m_p$ is an isomorphism for all $p\le k$.

An augmented simplicial $S$-scheme $X_\bullet\to S$ is a **proper hypercover**
of $S$ if the augmentation $X_0\to S$ and every canonical boundary map
$X_p\to M_p(X_\bullet)$, $p\ge1$, is proper and surjective
([[def-proper-morphism]]). Neither smoothness, separatedness, finiteness nor
properness of the individual terms is part of the definition; those enter as
hypotheses where they are used.

## Remarks

- **Nondegenerate parts.** If $X_\bullet$ is split, $m_p$ identifies $X_p$ with
  the displayed coproduct, so every $p$-simplex is uniquely either an element of
  the image of the $X_p$-summand — the **nondegenerate part**, itself a
  coproduct summand of $X_p$ — or a degeneracy $s_\delta(y)$ of a simplex of
  strictly smaller degree. Equivalently, as in Deligne (6.2.1)-(6.2.2), a split
  augmented simplicial object admits a **splitting**: morphisms
  $\sigma_p:X_p\to X_{p+1}$ for $p\ge-1$ (with $X_{-1}=S$) satisfying the
  simplicial identities together with the extra index; the existence of the
  splitting is the classical equivalent formulation of splitness (SGA 4 V bis
  5.1.3), and conversely the splitting makes every simplex a degeneracy of a
  lower one in exactly the way encoded by $m_p$.
- **Matching objects as closed subschemes.** The limit computing $M_p$ can be
  formed from finitely many fibre products of the terms $X_q$, $q<p$, by the
  epi-mono factorisation in the simplex category. If the base $S$ is separated
  over a field and all terms are $S$-schemes of finite type, then $M_p$ is a
  closed subscheme of a finite fibre product of the $X_q$: the conditions
  comparing two composites of structure maps are equalities into a separated
  target, hence closed
  ([[def-separated-morphism-schemes]]). In particular a matching object of a
  hypercover with projective terms is itself projective.
- **The extension data.** The truncated object, its matching object $M_p$ and a
  morphism $N\to M_p$ are the data from which Deligne's proposition (SGA 4 V
  bis 5.1.3; Deligne (6.2.3)-(6.2.4)) reconstructs a unique $p$-truncated split
  extension whose degree-$p$ term restricts to $N$ on the nondegenerate part;
  the construction is carried out in the proof of the hyperresolution theorem
  on the page of this item, and no further splitting is chosen there.
