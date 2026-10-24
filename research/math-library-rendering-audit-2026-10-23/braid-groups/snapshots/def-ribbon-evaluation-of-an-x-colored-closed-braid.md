---
id: def-ribbon-evaluation-of-an-x-colored-closed-braid
kind: definition
title: "The ribbon evaluation of an $X$-colored closed braid"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [cor-an-object-of-a-braided-category-carries-canonical-braid-actions, thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor, thm-a-braided-rigid-category-has-a-drinfeld-morphism, def-the-categorical-trace-of-a-morphism-into-the-double-dual, def-braid-group-by-the-artin-presentation, def-twist-and-ribbon-structure, def-countable-choice]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.9 formula (8.30) and Proposition 8.9.3, printed pp. 213--215; §8.10 Proposition 8.10.6 and formula (8.35), printed pp. 216--218"
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I §1.5, trace of an endomorphism and its properties, printed pp. 21--22; Corollaries 2.7.1--2.7.2, printed pp. 42--44"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $\mathcal C$ be a ribbon category with chosen left duals, twist $\theta$
([[def-twist-and-ribbon-structure]]) and Drinfeld morphism
$u_X\colon X\to X^{\vee\vee}$ of
[[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]. Put

$$j_X:=u_X\,\theta_X\ \colon\ X\longrightarrow X^{\vee\vee}.$$

Then $j$ is a natural isomorphism: it is the composite of the natural
isomorphism $u$ with the natural automorphism $\theta$ of the identity. It is
**monoidal** up to the monoidal comparison $d_{X,Y}\colon
X^{\vee\vee}\otimes Y^{\vee\vee}\to(X\otimes Y)^{\vee\vee}$ of the double-dual
functor,

$$j_{X\otimes Y}=d_{X,Y}\circ(j_X\otimes j_Y),$$

which is precisely the statement that $u\theta$ is the pivotal comparison
induced by the ribbon structure; the identity follows from the tensor relation
$d_{X,Y}\circ(u_X\otimes u_Y)=u_{X\otimes Y}\circ c_{Y,X}\circ c_{X,Y}$ for
the Drinfeld morphism together with the twist axiom
$\theta_{X\otimes Y}=(\theta_X\otimes\theta_Y)\circ c_{Y,X}\circ c_{X,Y}$ and
the naturality of $\theta$. Iterating the comparison identifies
$j_{X^{\otimes n}}$ with the corresponding composite of the $j_X$ and the
coherence isomorphisms of the tensor power.

Let $n\ge1$ and $\beta\in B_n$
([[def-braid-group-by-the-artin-presentation]]), and let
$\rho_n\colon B_n\to\operatorname{Aut}_{\mathcal C}(X^{\otimes n})$ be the
canonical braid action
([[cor-an-object-of-a-braided-category-carries-canonical-braid-actions]]). The
**ribbon evaluation** of the $X$-colored closed braid is the value

$$t_n(\beta):=\operatorname{Tr}_L\!\left(j_{X^{\otimes n}}\circ\rho_n(\beta)\right)\in\operatorname{End}_{\mathcal C}(\mathbf 1),$$

in the sense of
[[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]: the composite
$j_{X^{\otimes n}}\circ\rho_n(\beta)$ is a morphism
$X^{\otimes n}\to(X^{\otimes n})^{\vee\vee}$, which is exactly the input type of
the left categorical trace. When $\operatorname{End}_{\mathcal C}(\mathbf 1)=k$
the value $t_n(\beta)$ is a scalar. For $n=1$ the group $B_1$ is trivial and
$t_1(e)=\operatorname{Tr}_L(j_X)$, the left dimension of $X$.

For $n=0$ put $t_0(e)=1_{\mathbf 1}$, the evaluation of the empty
closed tangle. This is a separate convention; no generator or dual pairing
is needed for the empty diagram.

The identification of $t_n(\beta)$ with the evaluation
$F_X(\widehat\beta^{\mathrm{fr}})$ of the blackboard-framed closure of $\beta$
under the functor of
[[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]] is
the content of the closure-comparison lemma of this page; it must be proved
before the trace is used as a link evaluation, and it is not assumed here. The
functor $F_X$ is constructed under countable choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), while the definition of $t_n$ above is choice-free
and uses neither that functor nor that principle; only the comparison, not the
trace, carries the choice cost.
