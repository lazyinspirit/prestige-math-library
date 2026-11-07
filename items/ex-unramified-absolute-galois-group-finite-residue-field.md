---
id: ex-unramified-absolute-galois-group-finite-residue-field
kind: example
title: "The unramified quotient is the procyclic residue-field Galois group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-absolute-galois-group-of-a-local-field
  - def-absolute-galois-group-of-a-field
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-local-inertia-subgroup-of-absolute-galois-group
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
  - thm-local-inertia-fixed-field-is-maximal-unramified-extension
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-splitting-fields-exist-for-nonzero-polynomials
  - def-polynomials-that-split-and-splitting-fields
  - def-polynomial-degree-leading-coefficient-and-monic
  - thm-root-bound-for-polynomials-over-a-domain
  - def-algebraic-and-transcendental-elements
  - thm-simple-algebraic-extension-quotient-power-basis-and-degree
  - thm-tower-law-for-finite-field-extensions
  - thm-algebraic-embedding-extension
  - def-algebraic-closure
  - def-separable-closure-in-an-algebraic-extension
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - def-profinite-group-by-inverse-limit
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-compact-subset-of-a-hausdorff-space-is-closed
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Lemma 7.57 and Theorem 7.58"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IV, Sections 8.2–8.3"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, version 5.10, Chapters IV and VII"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice. Let $K$ be a nonarchimedean local field with
residue field $k=\mathbb F_q$. Fix an algebraic closure $\Omega$ of $K$ and
its relative separable closure $K_s$. For every finite Galois subextension
$E/K$ in $K_s$, use the unique extension of the normalized absolute value of
$K$ to $E$, and write $k_E$ for its residue field. These absolute values and
residue-field inclusions are compatible under inclusion of extensions. Put
$$\overline{k}:=\bigcup_{E/K\text{ finite Galois}} k_E.$$
For each such $E$, let $G_0(E/K)$ be the kernel of the residue action
$\operatorname{Gal}(E/K)\to\operatorname{Gal}(k_E/k)$, and put
$$I_K:=\varprojlim_{E/K}G_0(E/K),$$
the absolute inertia subgroup. The field $\overline{k}$ is an algebraic
closure of $k$, and the compatible residue actions define a continuous
homomorphism
$\rho:G_K\to\operatorname{Gal}(\overline{k}/k)$. It is surjective with
kernel $I_K$, and hence induces a topological isomorphism
$$G_K/I_K\cong\operatorname{Gal}(\overline{k}/k)\cong\widehat{\mathbb Z}, \qquad \widehat{\mathbb Z}:=\varprojlim_{n\mid m}\mathbb Z/n\mathbb Z.$$
Here the inverse limit ranges over positive integers ordered by divisibility,
with transition maps given by reduction. The unique coset in $G_K/I_K$ whose
residue action is the arithmetic Frobenius $x\mapsto x^q$ is a topological
generator.

## Example references

[[def-absolute-galois-group-of-a-local-field|Absolute Galois group of a nonarchimedean local field]]

[[def-absolute-galois-group-of-a-field|Absolute Galois group of a field]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field|Nonarchimedean local field and its residue field]]

[[thm-unique-extension-of-a-nonarchimedean-absolute-value|Unique extension of a nonarchimedean absolute value]]

[[def-local-inertia-subgroup-of-absolute-galois-group|Absolute inertia subgroup]]

[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree|Finite local extensions have finite residue degree]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions|Finite unramified extensions correspond to residue-field extensions]]

[[thm-local-inertia-fixed-field-is-maximal-unramified-extension|Finite inertia is the kernel of residue reduction]]

[[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective|Restriction from the absolute Galois group to a finite Galois subextension is surjective]]

[[thm-algebraic-embedding-extension|Embeddings extend to algebraic extensions]]

[[thm-splitting-fields-exist-for-nonzero-polynomials|Every nonzero polynomial over a field has a splitting field]]

[[thm-absolute-galois-group-of-finite-field-is-procyclic|The absolute Galois group of a finite field is procyclic]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, Lemma 7.57 and Theorem 7.58, printed pp. 130–131](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter IV, Sections 8.2–8.3, printed pp. 168–170](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[J. S. Milne, *Fields and Galois Theory*, Chapter VII, Proposition 7.7, printed p. 95](https://www.jmilne.org/math/Books/FT0.pdf)

## Facts & Assumptions

**Given:** Choice, a nonarchimedean local field $K$ with finite residue field
$k=\mathbb F_q$, an algebraic closure $\Omega/K$, its relative separable
closure $K_s$, and the absolute Galois and inertia groups from the A-page.

[A1] The Axiom of Choice applies to every family of nonempty sets
([[def-axiom-of-choice]]).

[F1] [[thm-choice-implies-dependent-implies-countable-choice]]: Choice implies
Countable Choice, the principle required by the finite local-extension
suppliers.

[F2] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: $K$ is
complete and discretely valued with finite residue field $k$.

[F3] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: every finite
extension of $K$ has a unique extending absolute value, is complete for it,
and every $K$-embedding between finite extensions preserves the absolute
values. Uniqueness makes these values compatible along inclusions.

[F4] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]:
under Countable Choice, every finite extension $E/K$ has finite residue
degree. Thus each finite Galois $E/K$ in the argument is a nonarchimedean
local extension with finite residue field.

[F5] [[def-absolute-galois-group-of-a-field]] and
[[def-absolute-galois-group-of-a-local-field]]: $G_K$ is the inverse limit of
the finite Galois groups of subextensions of $K_s/K$; its elements are
compatible families of finite-level automorphisms. The inverse-limit topology
has finite restriction maps as continuous coordinate maps.

[F6] [[def-local-inertia-subgroup-of-absolute-galois-group]]: $I_K$ is the
inverse limit of the finite inertia groups $G_0(E/K)$; each $G_0(E/K)$ is the
kernel of residue reduction.

[F7] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]:
under Countable Choice, every finite extension $\ell/k$ is the residue field
of a finite unramified extension $L/K$, and such $L/K$ is Galois.

[F8] [[thm-local-inertia-fixed-field-is-maximal-unramified-extension]]:
under Countable Choice, for every finite Galois extension of local fields
$E/K$ with finite residue fields, reduction
$\operatorname{Gal}(E/K)\to\operatorname{Gal}(k_E/k)$ is surjective with
kernel $G_0(E/K)$.

[F9] [[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]:
under Choice, restriction from $G_K$ onto $\operatorname{Gal}(E/K)$ is
surjective for every finite Galois $E/K$ in $K_s$.

[F10] [[thm-algebraic-embedding-extension]] and
[[def-algebraic-closure]]: under Choice, a finite separable extension of $K$
embeds over $K$ into $\Omega$, and its image lies in $K_s$.

[F11] [[thm-splitting-fields-exist-for-nonzero-polynomials]]:
every nonzero polynomial over a field has a splitting field.
[[def-polynomials-that-split-and-splitting-fields]]: a splitting field is
generated by the set of all roots.
[[def-polynomial-degree-leading-coefficient-and-monic]]: every nonconstant
polynomial has a finite degree.
[[thm-root-bound-for-polynomials-over-a-domain]]: viewed as a polynomial over
the field $\overline{k}$, a degree-$d$ nonzero polynomial has at most $d$
roots there.

[F12] [[def-algebraic-and-transcendental-elements]]: a root of a nonzero
polynomial over $k$ is algebraic over $k$.

[F13] [[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]: if
$a$ is algebraic over $F$, then $F(a)/F$ is finite.

[F14] [[thm-tower-law-for-finite-field-extensions]]: a finite tower of finite
field extensions has finite total degree.

[F15] [[thm-absolute-galois-group-of-finite-field-is-procyclic]]: for a finite
field of order $q$, its absolute Galois group is topologically generated by
$x\mapsto x^q$ and is isomorphic to $\widehat{\mathbb Z}$ by the unique
isomorphism carrying that Frobenius to $1$.

[F16] [[def-profinite-group-by-inverse-limit]] and
[[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]:
under Choice, $G_K$ is compact; the target absolute Galois group of
$\overline{k}/k$ is Hausdorff in its inverse-limit topology.

[F17] [[thm-closed-subspace-of-a-compact-space-is-compact]] and
[[thm-compact-subset-of-a-hausdorff-space-is-closed]]: closed subsets of
compact $G_K$ are compact, and their continuous images in the Hausdorff target
are closed.

## Verification

**Given:** The data in the Example, including Choice.






1.1 Finite Galois subextensions $E/K$ are directed by compositum. By [F3], the unique absolute values restrict compatibly, and their residue fields embed compatibly; by [F4], each residue field is a finite extension of $k$. Hence $\overline{k}$ is a field algebraic over $k$. Given any finite extension $\ell/k$, [F7] supplies a finite unramified Galois extension $L/K$ with residue field $k$-isomorphic to $\ell$. The extension $L/K$ is separable, so [F10] embeds it into $\Omega$ over $K$ with image in $K_s$. The embedding preserves the unique absolute values [F3], so the residue field of its image is a copy of $\ell$ inside $\overline{k}$. Every nonconstant polynomial over $k$ has a splitting field by [F11]. Its root set is finite by [F11], and it is generated by that set. Each root is algebraic by [F12], adjoining each root gives a finite extension by [F13], and the finite tower remains finite by [F14]. It is therefore an $\ell$ to which [F7] applies; all roots then lie in $\overline{k}$. Thus $\overline{k}$ is an algebraic closure of $k$. [A1, F1, F2, F3, F4, F7, F10, F11, F12, F13, F14, given, construct]

1.2 Fix $\gamma\in\operatorname{Gal}(\overline{k}/k)$. For each finite Galois $E/K$, let $C_E$ be the set of $\sigma\in G_K$ whose action on $k_E$ is $\gamma|_{k_E}$. This is closed because its defining finite action coordinate is continuous. It is nonempty: [F8] lifts $\gamma|_{k_E}$ to $\operatorname{Gal}(E/K)$, and [F9] lifts that automorphism to $G_K$. For finitely many $E_1,\ldots,E_r$, their compositum $E$ is finite Galois and $k_E$ contains every $k_{E_i}$; any member of $C_E$ lies in all the $C_{E_i}$. Thus the family $(C_E)$ has the finite-intersection property. Compactness [F16] gives a $\sigma$ in their intersection, and this $\sigma$ acts as $\gamma$ on every residue field. Therefore $\rho$ is surjective. [A1, F1, F2, F4, F8, F9, F16, given, construct]

2.1 For each $\sigma\in G_K$, its finite-level automorphisms preserve the unique absolute values [F3] and induce compatible automorphisms of the residue fields $k_E$. They therefore define a homomorphism $\rho:G_K\to\operatorname{Gal}(\overline{k}/k)$. An element is in its kernel exactly when every $E$-coordinate acts trivially on $k_E$; by [F8], this means every coordinate lies in $G_0(E/K)$, and [F6] identifies these compatible families with $I_K$. Thus $\ker\rho=I_K$. For every finite subextension $\ell/k$ of $\overline{k}$, its action coordinate factors through some finite $k_E$ containing $\ell$ and the continuous restriction map to $\operatorname{Gal}(E/K)$. Hence every finite coordinate of $\rho$ is continuous, so $\rho$ is continuous in the inverse-limit topology. [F1, F2, F3, F4, F5, F6, F8, step 1.1, construct]

3.1 By steps 2.1 and 1.2, $\rho$ induces a continuous bijection $\bar\rho:G_K/I_K\to\operatorname{Gal}(\overline{k}/k)$. The map $\rho$ is closed: every closed subset of compact $G_K$ is compact by [F17], and its continuous image is compact and therefore closed in the Hausdorff target by [F17]. Hence $\rho$ is a quotient map, so the induced bijection $\bar\rho$ is a homeomorphism. [F16, F17, step 2.1, step 1.2]

4.1 The finite-field isomorphism [F15] identifies $\operatorname{Gal}(\overline{k}/k)$ with $\widehat{\mathbb Z}$ and sends the arithmetic Frobenius $x\mapsto x^q$ to $1$. Composing it with $\bar\rho$ gives the claimed topological isomorphism $G_K/I_K\cong\widehat{\mathbb Z}$ and identifies the unique coset whose residue action is $x\mapsto x^q$ as a topological generator. [F15, step 3.1, algebra] ∎