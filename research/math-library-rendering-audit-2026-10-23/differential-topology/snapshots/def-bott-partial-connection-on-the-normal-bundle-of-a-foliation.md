---
id: def-bott-partial-connection-on-the-normal-bundle-of-a-foliation
kind: definition
title: "The Bott partial connection on the normal bundle of a foliation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quotient-vector-bundle-by-a-subbundle, thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle, prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map, def-regular-foliation-atlas, def-smooth-vector-field-as-a-tangent-bundle-section, def-smooth-section-local-section-and-support, def-countable-choice-principle-for-foliation-pair]
justified_by: [lem-the-bott-partial-connection-is-well-defined-and-flat-in-leaf-directions]
aliases: []
landmark: false
dependency_level: 0
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Raoul Bott, Lectures on Characteristic Classes and Foliations (Lecture Notes in Mathematics 279; complete scan of the 178-page volume)"
      url: "https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf"
      locator: "§6, printed pp. 32-34"
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a codimension-$q$ regular foliation of a smooth manifold $M$, with
tangent distribution $E=TF$, and let $\nu:=TM/E$ be the normal bundle of $F$
([[def-quotient-vector-bundle-by-a-subbundle]],
[[thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]]).
For a leaf-tangent vector field $X\in\Gamma(E)$ and a section
$s\in\Gamma(\nu)$ the **Bott partial connection** is

$$\nabla^{B}_X s:=\pi[X,\tilde s],$$

where on each bundle chart $\tilde s$ is a smooth local representative of $s$ and
$\pi:TM\to\nu$ is the quotient map
([[prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map]]). Local representatives exist by lifting the components of $s$ in a quotient-bundle frame; their projected brackets agree on overlaps by the next lemma and therefore define a global section. The
derivation is along leaf directions only: $X$ is a section of the involutive
distribution $E$ ([[def-regular-foliation-atlas]]).

This defines a map $\nabla^{B}:\Gamma(E)\times\Gamma(\nu)\to\Gamma(\nu)$ that is
$C^\infty(M)$-linear in the vector-field variable $X$, $\mathbb R$-linear in
$s$, and satisfies the Leibniz rule $\nabla^B_X(fs)=X(f)s+f\nabla^B_X s$ for
$f\in C^\infty(M)$. The well-definedness of the formula and its flatness along
each leaf are established in the next result. In the terminology of this page
$\nabla^B$ is a partial connection along the leaves; it is not a connection on
all of $TM$, and no splitting of $TM\to\nu$ is chosen.
