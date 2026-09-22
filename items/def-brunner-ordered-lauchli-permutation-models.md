---
id: def-brunner-ordered-lauchli-permutation-models
kind: definition
title: "Brunner's ordered Läuchli permutation models"
status: draft
origin: pipeline
deps: [thm-fraenkel-mostowski-permutation-model, def-countable-choice, def-order-topology-on-a-linearly-ordered-set, def-subspace-topology-top, def-compact-space, def-permutation-support-system-and-normal-filter, def-symmetric-and-hereditarily-symmetric-sets, def-zfa-universe-atoms-and-kernel, def-axiom-of-choice, def-continuous-map-top, def-connected-space, def-hausdorff-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§§1-3, printed pp. 67-73"
    - title: "Philipp Kleppmann, Free Groups and the Axiom of Choice"
      url: "https://www.repository.cam.ac.uk/bitstream/1810/253759/1/thesis.pdf"
      locator: "Chapter 2, §2.1, pp. 16-20"
---

## Definition

Work internally in a model $M$ of $\mathrm{ZFA} + \mathrm{AC}$
([[def-zfa-universe-atoms-and-kernel]], [[def-axiom-of-choice]]). No external
well-foundedness or transitivity of $M$ is assumed. All order types, compact
supports and support ideals in the following construction are computed in
$M$, and the associated permutation model is the hereditarily symmetric
submodel as computed there. When a concrete transitive ground is available,
this internal presentation agrees with the usual external one. AC is a
ground-model assumption, not an assertion about the resulting permutation
model.

**The permutation system.** Let $A$ be the set of atoms, carrying a linear order
$\le$. Let $G$ be the group of all increasing bijections of $A$. A **support ideal**
$\mathcal{I}$ is a family of subsets of $A$ that contains every singleton, is
closed under subsets and finite unions, and is $G$-invariant:
$e\in\mathcal I$ implies $g[e]\in\mathcal I$ for every $g\in G$. The filter it
generates consists of the subgroups of $G$ that contain the pointwise
stabiliser $\operatorname{fix}(e)$ of some $e\in\mathcal I$. It is a normal
filter: finite intersections use
$\operatorname{fix}(e\cup f)\subseteq\operatorname{fix}(e)\cap
\operatorname{fix}(f)$, conjugation uses
$g\operatorname{fix}(e)g^{-1}=\operatorname{fix}(g[e])$, and the singleton
clause supplies every atom stabiliser. The associated **ordered
permutation model**
$\mathcal{P}(A,G,\mathcal{I})$ is the hereditarily symmetric interpretation of
[[def-symmetric-and-hereditarily-symmetric-sets]] for that filter
([[def-permutation-support-system-and-normal-filter]]). For a transitive ground this is precisely the construction in
[[thm-fraenkel-mostowski-permutation-model]]. For the internal convention
here, its axiom argument is interpreted inside $M$, as follows. The action
and hereditary-symmetry predicate are definable by the rank recursion of
$M$. Conjugation makes that predicate invariant. Atoms and pure sets are
hereditarily symmetric; membership closure gives inherited Extensionality
and Foundation. Intersections of finitely many stabilisers support pairing,
union, and a subset defined by any fixed formula with hereditarily symmetric
parameters, all quantifiers of that formula being restricted to hereditary
symmetry. The internal power set of $x$ is the set of hereditarily symmetric
members of $\mathcal P^M(x)$; every permutation fixing $x$ preserves this
set. For Replacement, apply $M$-Replacement to the relativised formula:
uniqueness makes its image invariant under every permutation fixing the
domain and parameters, and every value is hereditarily symmetric. Thus the
image is hereditarily symmetric too. Infinity is witnessed by the pure
$\omega^M$. These arguments verify each instance of Separation and
Replacement and the remaining ZFA axioms in the interpreted substructure;
they use internal rank induction, not external well-foundedness of $M$.

**The two instances.** Two choices are used below and they are not
interchangeable.

1. **Real-ordered, countable compact supports.** $(A,<)$ is order-isomorphic
   to $(\mathbb R,<)$ in the ground model. The ideal consists of all subsets
   of countable compact subsets of $A$, where compactness uses the order
   topology and the intrinsic subspace convention of [[def-compact-space]]
   and [[def-subspace-topology-top]]. Equivalently it is the ideal generated
   by countable compact subsets. Finite unions of such compact sets are
   compact and countable, and increasing bijections preserve this property:
   they and their inverses preserve order intervals and hence are continuous.
   Thus this ideal has the required closure and invariance properties.
2. **Rational-ordered, finite supports.** $(A,<)$ is order-isomorphic to
   $(\mathbb Q,<)$ in the ground model, and $\mathcal I$ consists of all finite
   subsets of $A$. This ideal also contains singletons and is invariant under
   $G$.

**The interval and the terminology.** Fix atoms $a<b$ and put
$$L=[a,b]_A=\{c\in A:a\le c\le b\}.$$
Equip $L$ with its order topology as computed inside
$\mathcal P(A,G,\mathcal I)$
([[def-order-topology-on-a-linearly-ordered-set]]). This is an actual object
of that model: $L$ and its restricted order have support $\{a,b\}$, and
atoms and finite tuples of atoms are hereditarily symmetric. The topology is
then formed internally from the interval basis. Its open sets and its open
covers are internal sets; ambient subsets of $L$ need not be in the model.
The distinct endpoints are the atoms $a,b$. Their singletons are closed,
since their complements are order rays.

A space is **strongly connected** in Brunner's terminology if every
continuous function from it to $\mathbb R$ is constant
([[def-continuous-map-top]]). An **ordered Läuchli continuum** means a
linearly ordered space with its order topology that is compact, Hausdorff,
connected and strongly connected
([[def-compact-space]], [[def-hausdorff-space]], [[def-connected-space]]).
All these quantifiers, including the quantifier over continuous functions,
are interpreted in the symmetric model when applied to $L$.

## Remarks

Brunner §1.2(c) uses the closed atom interval in the rational finite-support
model; §3.4(b) specifies the real-ordered model and its countable compact
supports. The Läuchli and choice properties of these constructions are
results to be justified in the subsequent items, not extra axioms in this
definition. In particular countable choice ([[def-countable-choice]]) is
not inferred from the closure of the support ideal under finite unions.

There is no assertion that the ambient Dedekind completion of $A$ belongs to
the symmetric model. In the rational case an ambient irrational cut has no
finite support: for any finite $e\subseteq A$, that cut lies in a component
of $A\setminus e$, and an increasing automorphism fixing $e$ can move the
cut inside that component. Such a cut is not symmetric. Internal order
completeness, when established for $L$, concerns only internal bounded sets.
