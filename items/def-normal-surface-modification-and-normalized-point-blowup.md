---
id: def-normal-surface-modification-and-normalized-point-blowup
kind: definition
title: Normal scheme modifications and normalized point blowups
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
- def-normal-noetherian-ring
- def-integral-scheme
- def-locally-noetherian-and-noetherian-scheme
- def-proper-morphism
- def-blowup-scheme-along-ideal
- thm-integrality-commutes-with-localisation
- lem-relative-spec-glues-affine-algebras
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Definitions 54.5.1, 54.14.1-54.14.2 and Lemma 54.5.3 (tag
      0BBU, 0BGP, 0BGQ)
    url: https://stacks.math.columbia.edu/download/resolve.pdf
  - title: The Stacks Project, Normalization, Section 29.54 (tag 035E)
    url: https://stacks.math.columbia.edu/download/normalization.pdf
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice as inherited from the blowup and scheme-construction suppliers.

**Normal schemes.** A locally Noetherian scheme is *normal* if every local
ring $\mathcal O_{X,x}$ is an integrally closed domain
([[def-normal-noetherian-ring]]). This is a local condition on the local
rings and is checked on an affine open cover; it does not require the global
section ring to be a domain. The empty scheme is normal vacuously.

**Normalization of an integral scheme.** Let $S$ be an integral scheme with
function field $K=K(S)$ ([[def-integral-scheme]]), and let
$\operatorname{Spec}A\subseteq S$ be a nonempty affine open subset. Write
$\overline A$ for the integral closure of $A$ in $K$, that is, the subring of
elements of $K$ that are integral over $A$. The *normalization* of $S$ is the
$S$-scheme

$$\nu\colon S^\nu\longrightarrow S$$

obtained by gluing the affine schemes $\operatorname{Spec}\overline A$ over
the nonempty affine open subsets $\operatorname{Spec}A\subseteq S$, inside
the common function field $K$. This is well defined: by
[[thm-integrality-commutes-with-localisation]] the formation of $\overline A$
commutes with localization, so for a principal open
$D(f)\subseteq\operatorname{Spec}A$ the canonical map
$(\overline A)_f\to\overline{A_f}$ is an isomorphism onto the integral closure
of $A_f$ in $K$; the affine integral-closure algebras therefore identify on
overlaps inside $K$ and satisfy the cocycle identity, and
[[lem-relative-spec-glues-affine-algebras]] constructs the glued scheme and
its canonical morphism to $S$. The scheme $S^\nu$ is integral, $\nu$ is
affine, and $K(S^\nu)=K$; the normalization is characterized up to unique
isomorphism over $S$ by this construction. *Finiteness of the normalization*
— that $S^\nu\to S$ is a finite morphism — is an additional assertion about
$S$ and is never part of the definition; it is proved separately on this
page for the surfaces that occur below.

**Modifications.** Let $S$ and $X$ be integral schemes. A *modification* of
$S$ is a proper morphism $f\colon X\to S$ ([[def-proper-morphism]]) that
induces an isomorphism $K(S)\to K(X)$ of function fields, so that $f$ is
birational. A *regular resolution* of $S$ is a modification $f\colon X\to S$
whose source $X$ is regular (all local rings regular). The modulus here is a
property of the morphism $f$, not of the source alone: the same scheme $X$
may occur as source of modifications of several different integral schemes.

**Point blowups and their normalization.** Let $S$ be a locally Noetherian
integral scheme ([[def-locally-noetherian-and-noetherian-scheme]]) and let
$s\in S$ be a closed point whose ideal sheaf $\mathcal I_s\subseteq\mathcal O_S$
is coherent and nonzero. The *point blowup of $S$ at $s$* is the blowup
$\operatorname{Bl}_s(S)\to S$ of $S$ along $\mathcal I_s$
([[def-blowup-scheme-along-ideal]]). It is locally projective, hence proper, over $S$; a single global
projective-space embedding is asserted only when the additional
global-generation or projective-base hypotheses are available. The *normalized point blowup of $S$ at $s$* is the composite

$$\operatorname{Bl}_s(S)^\nu\longrightarrow\operatorname{Bl}_s(S)\longrightarrow S ,$$

that is, the point blowup followed by normalization of its source. It is a
morphism of integral schemes. It is proper when the normalization morphism
$\operatorname{Bl}_s(S)^\nu\to\operatorname{Bl}_s(S)$ is finite; no
properness assertion is made when that finiteness has not been established.
The finite-normalization results below verify this condition in the surface
classes used in the resolution arguments.

**Resolution by normalized point blowups.** A *resolution of $S$ by
normalized point blowups* is a morphism
$X=S_n\to S_{n-1}\to\cdots\to S_0=S^\nu\to S$ obtained as follows: start with the
normalization $S_0:=S^\nu$ of $S$; choose
closed points $s_i\in S_i$ for $i=0,\dots,n-1$, each with nonzero coherent
point ideal, and let $S_{i+1}$ be the normalized point blowup of $S_i$ at
$s_i$; require that each normalization in the sequence, including the
initial normalization $S^\nu\to S$, be finite, and that the terminal scheme
$S_n$ be regular. Each arrow $S_{i+1}\to S_i$ is then a modification, the
composite is proper, and the terminal scheme is a regular resolution of
$S$. If $S$ is already normal, the initial normalization
$S^\nu\to S$ is an isomorphism, so the definition then starts effectively at
$S$ itself; if $S$ is regular, the empty sequence $n=0$ with
$S_0=S^\nu=S$ exhibits the identity as a resolution by normalized point
blowups.

## Remarks

- The definition does not assert that a resolution by normalized point
  blowups exists for a given integral scheme $S$: it names the shape of the
  object. Existence for surfaces is proved later on this page, under the
  hypotheses stated there.
- Blowing up a regular point on a regular surface is generally not an
  isomorphism: its exceptional fibre is a projective line. The blowup remains
  regular, so its normalization is the identity and the map is still a proper
  birational modification. On a regular one-dimensional integral scheme,
  a closed-point ideal is invertible and its blowup is an isomorphism: at
  the point its stalk is the principal maximal ideal of a DVR, and away
  from the point it is the unit ideal. This need not hold on a singular
  curve. The resolution arguments below
  choose singular centres when they need to alter the regularity.
- The phrase *modification* is used here only for integral schemes, so that
  function fields are defined and the birationality condition makes sense.
  No separatedness hypothesis beyond properness is imposed.
- The normalization is defined by gluing over the *nonempty* affine opens of
  an integral scheme; on the empty scheme there is no function field and no
  normalization is defined.
