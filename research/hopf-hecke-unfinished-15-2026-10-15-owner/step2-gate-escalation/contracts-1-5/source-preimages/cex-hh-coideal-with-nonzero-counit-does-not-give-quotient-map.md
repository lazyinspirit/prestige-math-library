---
id: cex-hh-coideal-with-nonzero-counit-does-not-give-quotient-map
kind: counterexample
title: "A coproduct coideal with nonzero counit does not give a quotient coalgebra map"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-group-like-and-primitive-elements, def-hh-subcoalgebras-coideals-and-quotient-coalgebras, thm-universal-property-of-free-modules, def-field]
aliases: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "UCSD Math 207A, Hopf Algebras lecture notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Chapter 1, Definition 1.19 and Proposition 1.21, printed pp. 15–16."
    - title: "Benedikt Stufler, Hopf Algebras lecture notes, University of Zurich course, 2018"
      url: "https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf"
      locator: "§3.1, Definition 3.19 and the quotient-coalgebra discussion, printed pp. 16–17."
---

## Statement refuted

The condition $\varepsilon(I)=0$ can be omitted: every subspace $I$ satisfying only $\Delta_C(I)\subseteq\operatorname{im}(I\otimes C\to C\otimes C)+\operatorname{im}(C\otimes I\to C\otimes C)$ has a quotient coalgebra structure on $C/I$ for which the canonical projection $q:C\to C/I$ is a coalgebra map.

## Facts & Assumptions

**Given:** A field $k$, a vector space $C$ with basis $e,f$, the linear maps defined by $\Delta(e)=e\otimes e$, $\Delta(f)=f\otimes f$, and $\varepsilon(e)=\varepsilon(f)=1$, and the subspace $I=ke$.

[F1] A coalgebra is a vector space with coassociative comultiplication and a two-sided counit; a coalgebra map must preserve counits ([[def-hh-coalgebra-and-coalgebra-map]]).

[F2] A vector $g$ with $\Delta(g)=g\otimes g$ and $\varepsilon(g)=1$ is group-like ([[def-hh-group-like-and-primitive-elements]]).

[F3] A quotient coalgebra by $I$ is a coalgebra structure on $C/I$ for which the canonical projection is a coalgebra map ([[def-hh-subcoalgebras-coideals-and-quotient-coalgebras]]).

[F4] The coproduct-only condition uses the images of the tensor maps induced by inclusion, without identifying them as subspaces unless the maps are injective ([[def-hh-subcoalgebras-coideals-and-quotient-coalgebras]]).

[F5] A map specified on a vector-space basis extends linearly ([[thm-universal-property-of-free-modules]]).

[F6] A field has distinct zero and unit, $0\ne1$ ([[def-field]]).

## Counterexample

1.1 By [F5], the specified maps extend linearly. On each basis vector $e,f$, coassociativity and both counit identities hold directly from the formulas; linearity then gives those identities on all of $C$. Thus $C$ is a coalgebra by [F1], and both $e$ and $f$ are group-like by [F2]. [given, F1, F2, F5, algebra]

1.2 For $I=ke$, $\Delta(\lambda e)=\lambda e\otimes e$ is the image of $(\lambda e)\otimes e\in I\otimes C$ under the inclusion-induced tensor map, so it lies in the coproduct-only image sum of [F4]. But $\varepsilon(\lambda e)=\lambda$, so $\varepsilon(I)=k\ne0$ by [F6]. The quotient is nonzero because $f\notin I$, and its projection $q$ satisfies $q(e)=0$. [given, F1, F4, F6, algebra]

2.1 If any counit $\overline{\varepsilon}$ on $C/I$ made $q$ a coalgebra map, [F1] would give $\overline{\varepsilon}(q(e))=\varepsilon(e)=1$. But $q(e)=0$, so linearity gives $\overline{\varepsilon}(q(e))=0$, contradicting $0\ne1$ by [F6]. Therefore no quotient coalgebra structure can make the canonical projection a coalgebra map; in particular the formula $\overline{\varepsilon}(c+I)=\varepsilon(c)$ is not well-defined. [step 1.1, step 1.2, F1, F3, F6, algebra] ∎

