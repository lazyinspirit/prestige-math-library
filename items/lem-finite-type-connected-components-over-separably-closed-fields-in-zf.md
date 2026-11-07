---
id: lem-finite-type-connected-components-over-separably-closed-fields-in-zf
kind: lemma
title: Finite-type connected components are stable over separably closed fields in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-separable-elements-and-separable-extensions
  - def-finite-type-and-module-finite-algebras
  - def-connected-component-and-quasicomponent
  - def-irreducible-component-of-a-topological-space
proof_strategy: direct
axiom_use: No choice principle or arbitrary algebraic closure is assumed. Perfect closures are explicitly constructed from unique p-power roots.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Fundamental Groups of Schemes, Section 9
      url: https://stacks.math.columbia.edu/download/pione.pdf
      locator: The local AC-qualified finite-étale-specialization source gives the algebraically closed component argument; the finite-basis and canonical perfect-closure proof below is reconstructed locally.
---

## Statement

In ZF, let $k\subseteq K$ be specified separably closed fields and let $Z$ be a finite-type $k$-scheme. Then pullback gives a bijection between the connected components of $Z$ and those of $Z_K$. Equivalently, every open-and-closed subscheme of $Z_K$ is the base change of a unique open-and-closed subscheme of $Z$. The empty scheme is included. No arbitrary algebraic closure, choice of geometric points, smoothness or properness hypothesis is assumed.

## Statement references

[[def-separable-elements-and-separable-extensions]]

[[def-finite-type-and-module-finite-algebras]]

[[def-connected-component-and-quasicomponent]] [[def-irreducible-component-of-a-topological-space]]

## Facts & Assumptions

**Given:** The two specified separably closed fields and the finite-type scheme.

[F1] Finite type over a field means a finite affine cover by finitely generated algebras. [[def-finite-type-and-module-finite-algebras]]

[F2] A connected component is a maximal connected subset. A finite union of irreducible closed sets is connected exactly when its intersection graph is connected: a graph partition gives disjoint closed unions, and the converse follows by joining connected sets along nonempty overlaps. [[def-connected-component-and-quasicomponent]] [[def-irreducible-component-of-a-topological-space]]

## Proof

**Proof technique:** finite specialization over algebraically closed fields, then canonical purely inseparable perfection.

1.1 Let $k$ be algebraically closed. A nonzero finite-type $k$-algebra, even after adjoining inverses of finitely many specified nonzero elements, has a $k$-point. Indeed, a finite triangular substitution gives an injective polynomial subalgebra over which it is finite; the fibre at the origin is nonzero by the determinant trick. A maximal ideal of the resulting finite-dimensional $k$-algebra exists by maximal vector-space dimension. Its residue field is finite over $k$, hence equals $k$. This uses only finite choices for the one given algebra. [F1, given, construct, algebra]

2.1 Let $B$ be a finite-type integral $k$-algebra and $L/k$ any field extension. Suppose $f,g\in B\otimes_kL$ are nonzero and $fg=0$. Choose a basis of the finite-dimensional $k$-span of the finitely many coefficients appearing in $f$ and $g$, and include the finitely many products needed to express their product. Their scalar coefficients lie in a finitely generated $k$-domain $D\subset L$. The tensor map $B\otimes_kD\to B\otimes_kL$ is injective: for any specified finite relation, choose a basis of the finite-dimensional span of its $B$-coefficients and compare scalar coefficients. Choose one nonzero scalar coefficient of each of $f,g$ and use step 1.1 to specialize $D$ to $k$ with their product nonzero. The resulting nonzero elements of $B$ have zero product, contradicting integrality. Thus $B\otimes_kL$ is a domain. No basis of the entire possibly infinite-dimensional $B$ is selected. [F1, step 1.1, given, construct, algebra]

3.1 For a finite-type $k$-scheme $Z$, finite Noetherian induction gives finitely many irreducible components and their reduced structures. By step 2.1 each component remains integral after extension to $L$. It remains a maximal irreducible component: a nonempty open subset of it disjoint from the other finitely many components remains nonempty after field extension, because a specified nonzero finite-type field algebra stays nonzero after tensoring with $L$ and then has a point by the finite-field-algebra argument of step 1.1, whose finite-residue-field part works over any field. Intersections are nonempty before extension exactly when they are nonempty after it. By [F2], the finite intersection graph has the same connected components on both sides. Hence the open-and-closed subschemes of $Z_L$ are precisely the base changes of those of $Z$, uniquely. [F1, F2, step 2.1, given, construct, algebra]

4.1 Now let $k\subseteq K$ be separably closed. In characteristic zero both are algebraically closed. In characteristic $p>0$, construct the perfect closure $k^{\mathrm{perf}}$ as the set of equivalence classes of pairs $(a,n)$, $a\in k$, identifying pairs whose sufficiently high $p$-powers agree. Addition and multiplication are given after raising to a common finite power. The analogous construction for $K$ gives a canonical embedding $k^{\mathrm{perf}}\subseteq K^{\mathrm{perf}}$. These perfect fields are algebraically closed: a finite irreducible polynomial is separable after passing to the perfect closure, its finitely many coefficients descend to some $k^{1/p^n}$, and raising a root equation to a common $p^n$-power reduces it to a finite separable polynomial over the separably closed field $k$. The same applies to $K$. This constructs the needed extensions from the given fields rather than choosing algebraic closures. [F1, step 3.1, given, construct, algebra]

5.1 A purely inseparable field extension induces a homeomorphism on the spectrum of every finite-type algebra: for a finite purely inseparable step, every element has a $p^n$-power in the original algebra, so a prime above a specified prime is uniquely determined by those powers; the quotient by the specified prime is nonzero and finite over its fraction field, giving that prime by finite linear algebra. Passing to the directed union gives the same statement for the explicitly constructed perfect closure. Thus $Z$ and $Z_{k^{\mathrm{perf}}}$, and $Z_K$ and $Z_{K^{\mathrm{perf}}}$, have the same connected components. Apply step 3.1 to the algebraically closed extension $k^{\mathrm{perf}}\subseteq K^{\mathrm{perf}}$ and compose these canonical bijections. The empty case is immediate. [F1, F2, step 3.1, step 4.1, given, construct, algebra] ∎
