---
id: def-finite-morphism-classical-affine-local
kind: definition
title: Finite morphisms of classical varieties
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 0
justified_by: []
aliases: []
deps: [def-classical-algebraic-prevariety-regular-maps-and-varieties, def-morphism-classical-varieties, def-classical-integral-affine-atlas-and-chartwise-morphism, def-affine-variety-classical, def-finite-type-and-module-finite-algebras, def-generated-cyclic-finitely-generated-and-free-modules, def-affine-open-subset-classical-variety, thm-affine-morphisms-coordinate-ring-anti-equivalence]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §c: Definition 8.17, Lemma 8.19, Proposition 8.21 and Summary 8.22"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Definition

Let $k$ be an algebraically closed field and let $f\colon X\to Y$ be a morphism
of classical varieties over $k$ in the reduced, separated, finite-type register of [[def-classical-algebraic-prevariety-regular-maps-and-varieties]], allowing reducible and empty varieties. Here an affine open means an open subspace isomorphic to a reduced affine algebraic set with its regular-function sheaf; it need not be irreducible or be one particular principal open. In the irreducible case this agrees with [[def-classical-integral-affine-atlas-and-chartwise-morphism]] and [[def-morphism-classical-varieties]]. The empty affine model has the zero coordinate ring and is allowed as an inverse image.

An affine open subset $U\subseteq Y$ is **finite for $f$** when $f^{-1}(U)$ is
affine and the pullback homomorphism of regular functions
$k[U]\to k[f^{-1}(U)]$ presents the coordinate ring $k[f^{-1}(U)]$ as a finite
$k[U]$-module
([[def-affine-open-subset-classical-variety]], [[def-affine-variety-classical]],
[[thm-affine-morphisms-coordinate-ring-anti-equivalence]],
[[def-finite-type-and-module-finite-algebras]],
[[def-generated-cyclic-finitely-generated-and-free-modules]]).

The morphism $f$ is **finite** when $Y$ admits a finite cover by affine open
subsets $U_1,\dots,U_n$ that are finite for $f$.

**Affine-locality, recorded with the definition.** The condition does not
depend on the chosen cover: if some finite affine cover consists of subsets
finite for $f$, then *every* affine open subset $U\subseteq Y$ is finite for
$f$. On an affine target $\operatorname{Spm}(A)$ this is the affine-communication
computation of Milne's Lemma 8.19: if $B$ is a $k$-algebra and the localisations
$B_{a_1},\dots,B_{a_n}$ are finite modules over $A_{a_1},\dots,A_{a_n}$ for
elements $a_1,\dots,a_n$ generating the unit ideal, then finitely many of those
local generators, cleared of denominators, generate $B$ as an $A$-module. The
passage to an arbitrary affine open of a general $Y$ is Milne's Proposition
8.21, whose proof embeds $\Gamma(f^{-1}(U),\mathcal O_X)$ into a product of
finitely many affine coordinate rings and compares the canonical morphism with
$\operatorname{Spm}\Gamma(f^{-1}(U),\mathcal O_X)$ over the members of the
cover. Consequently finiteness is affine-local on the target: it may be tested
on the members of any one finite affine cover of $Y$ by affine opens.

**Restriction.** Finiteness is preserved by restriction to open subvarieties of
the target: if $f\colon X\to Y$ is finite and $V\subseteq Y$ is open, then the
restriction $f^{-1}(V)\to V$ is finite, because an affine open subset of $V$ is
an affine open subset of $Y$.
