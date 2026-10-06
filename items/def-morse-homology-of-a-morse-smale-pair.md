---
id: def-morse-homology-of-a-morse-smale-pair
kind: definition
title: "Morse homology of a Morse--Smale pair"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morse-smale-pair, def-mod-two-morse-chain-group, def-mod-two-morse-differential, thm-mod-two-morse-differential-squares-to-zero, def-orientation-line-of-a-morse-critical-point, def-signed-morse-differential-over-the-integers, thm-integral-morse-differential-squares-to-zero, def-homology-object-of-a-chain-complex, def-chain-complex-in-an-abelian-category, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-axiom-of-choice, def-integers, def-integers-modulo-n, def-left-and-right-modules, def-nondegenerate-critical-point-nullity-index-and-coindex, lem-metric-morse-smale-end-counts-form-chain-complexes]
justified_by: []
dependency_level: 8
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 4 Sec. 4.1: definition of HM_*(V;Z/2), HM_*(V;Z) and the relative version, printed pp. 83-85, PDF pp. 93-95"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19, Sec. 6.1: the Morse complex and MH_* = ker(d)/im(d), PDF pp. 86-87"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.5: the Thom--Smale complex C_k = H_k(M_k,M_{k-1};Z) and its boundary, read at PDF pp. 72-74"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f,X)$ be a Morse--Smale pair on a closed manifold $M$
([[def-morse-smale-pair]]), so that the critical set is finite
([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).
Let $\operatorname{ind}$ denote the Morse index
([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

Over $\mathbb Z/2$: the **mod-two Morse complex** is the chain complex of
[[def-mod-two-morse-chain-group]] with differential
[[def-mod-two-morse-differential]], which satisfies
$\partial_{k-1}\circ\partial_k=0$ by
[[thm-mod-two-morse-differential-squares-to-zero]]
([[def-chain-complex-in-an-abelian-category]]). Its **mod-two Morse homology**
is
$$HM_k(f,X;\mathbb Z/2):=H_k\bigl(CM_*(f,X;\mathbb Z/2),\partial\bigr)=\ker\partial_k/\operatorname{im}\partial_{k+1}$$
([[def-homology-object-of-a-chain-complex]],
[[def-integers-modulo-n]]); this branch needs no orientation or ambient orientability. The choice
hypothesis is inherited from the finiteness and squaring-to-zero suppliers;
taking homology of an already supplied finite complex makes no further choice.

Over $\mathbb Z$: fix
an orientation $or_p$, that is, a positive ray in the orientation line of
$W^u(p)$, for every critical point $p$
([[def-orientation-line-of-a-morse-critical-point]]). The **integral Morse
complex** is the free $\mathbb Z$-module of
[[def-signed-morse-differential-over-the-integers]] with basis
$\operatorname{Crit}(f)$ and differential the signed trajectory count, which
satisfies $\partial_{k-1}\circ\partial_k=0$ by
[[thm-integral-morse-differential-squares-to-zero]]; its **integral Morse
homology** is
$$HM_k(f,X;\mathbb Z):=\ker\partial_k/\operatorname{im}\partial_{k+1}$$
([[def-integers]], [[def-left-and-right-modules]]). Reversing a chosen orientation
ray multiplies the corresponding basis element by $-1$ and conjugates the
differential by the diagonal isomorphism of the complex
([[def-orientation-line-of-a-morse-critical-point]]), so the isomorphism class
of $HM_k(f,X;\mathbb Z)$ is independent of the orientation choices.

The notation records $X$ because the complex depends on the trajectory moduli
of the field; that the resulting homology depends only on $M$ and not on the
choice of $f$ and $X$ is proved later on this page by continuation, and the
relative notation $HM_*(W,M_0;\Lambda)$ is introduced with the relative
complex of an adapted cobordism.

For an arbitrary Morse--Smale metric pair $(f,g)$, use instead the finite
metric-end complex of [[lem-metric-morse-smale-end-counts-form-chain-complexes]]
and write $HM_k(f,g;\Lambda)$ for its homology. Its critical basis and
chosen orientation-ray conventions are the same; the new supplier proves finiteness
and the squared-zero differential for the actual gradient without requiring
normalized local coordinates. When that gradient also satisfies the normalized
field convention, the two complexes and their homology agree.
