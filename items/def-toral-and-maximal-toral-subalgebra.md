---
id: def-toral-and-maximal-toral-subalgebra
kind: definition
title: Toral and maximal toral subalgebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-subalgebra-ideal-and-center, def-semisimple-and-nilpotent-endomorphisms, def-derivation-of-a-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, §19.2"
landmark: false
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex Lie algebra. A Lie subalgebra $\mathfrak
t\subseteq\mathfrak g$ ([[def-lie-subalgebra-ideal-and-center]]) is
**toral** if it is abelian and $\operatorname{ad}_x$ is a semisimple
endomorphism of $\mathfrak g$ for every $x\in\mathfrak t$, semisimplicity
being understood in the sense of
[[def-semisimple-and-nilpotent-endomorphisms]]
([[def-derivation-of-a-lie-algebra]] supplies the notation
$\operatorname{ad}_x(y)=[x,y]$). Because $\mathfrak t$ is abelian,
$\operatorname{ad}_x|_{\mathfrak t}$ is the zero endomorphism of
$\mathfrak t$ and is therefore semisimple automatically: the requirement
must be placed on $\mathfrak g$ itself, and requiring only that
$\operatorname{ad}_x|_{\mathfrak t}$ be semisimple would merely repeat
abelianness.

The coordinates on $\mathfrak g$ are irrelevant to this notion: the choice of
an algebraic closure in [[def-semisimple-and-nilpotent-endomorphisms]] makes
semisimplicity of an endomorphism a basis-free property, and restricting a
semisimple endomorphism to an invariant subspace is again semisimple. A toral
subalgebra is **maximal toral** if it is maximal by inclusion among toral
subalgebras of $\mathfrak g$.
