---
id: thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor
kind: theorem
title: "A ribbon object defines a unique framed-tangle evaluation functor"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [def-the-framed-oriented-tangle-category, lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation, def-twist-and-ribbon-structure, def-braiding, def-left-dual-and-right-dual-object, thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one, thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation, def-countable-choice, thm-a-braided-rigid-category-has-a-drinfeld-morphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I Theorem I.2.5 with values (2.5.a)--(2.5.e), printed pp. 39--40, and its deduction in §§3.5 and 4.8, printed pp. 53--70; relations (3.2.a)--(3.2.h), printed pp. 50--51"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10 Definition 8.10.1 and Remark 8.10.3, printed pp. 216--217; §8.9 Lemma 8.9.1, formulas (8.28)--(8.29), printed p. 214"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $\mathcal C$ be a
ribbon category ([[def-twist-and-ribbon-structure]]) with
chosen left duals ([[def-left-dual-and-right-dual-object]]), braiding $c$
([[def-braiding]]) and twist $\theta$, and let $X\in\mathcal C$. Write
$X_{+1}:=X$ and $X_{-1}:=X^{\vee}$. In a strict model of $\mathcal C$
([[thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]])
there is a unique strict monoidal functor

$$F_X\colon\mathcal T\longrightarrow\mathcal C$$

from the framed oriented tangle category $\mathcal T$ with

$$F_X(+)=X,\qquad F_X(-)=X^{\vee},$$

$$F_X\bigl(X^{+}_{\varepsilon,\varepsilon'}\bigr)=c_{X_\varepsilon,X_{\varepsilon'}},\qquad F_X\bigl(X^{-}_{\varepsilon,\varepsilon'}\bigr)=(c_{X_{\varepsilon'},X_\varepsilon})^{-1},\qquad F_X(\cup_{+1})=\operatorname{coev}_X,\qquad F_X(\cap_{+1})=\operatorname{ev}_X,\qquad F_X(\varphi^{\pm1}_{+1})=\theta_X^{\pm1},$$

where the cup and cap are the coevaluation and evaluation maps attached to the
chosen left duals and the signs are the blackboard conventions of
[[def-the-framed-oriented-tangle-category]]. The remaining elementary tangles
of $\mathcal T$, those carrying a negative sign at a cup, cap or twist, receive
the values forced by these data through the relations. Explicitly put
$j_X=u_X\theta_X:X\to X^{\vee\vee}$, with $u$ as in
[[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]. Then

$$F_X(\cup_-)=(1_{X^\vee}\otimes j_X^{-1})\operatorname{coev}_{X^\vee},\qquad F_X(\cap_-)=\operatorname{ev}_{X^\vee}(j_X\otimes1_{X^\vee}),\qquad F_X(\varphi_-^{\pm1})=\theta_{X^\vee}^{\pm1}.$$

These are the right coevaluation and evaluation on $X$ induced by the ribbon
structure; they need no identification $X^{\vee\vee}=X$ on objects. For a general ribbon
category the same assignment determines a strong monoidal functor, unique up to
the canonical coherence isomorphisms of the strictification. Isotopic framed
tangles are equal morphisms of $\mathcal T$, so $F_X$ is an invariant of framed
tangles. Uniqueness needs no choice.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a ribbon category $\mathcal C$ with chosen left duals, braiding $c$, twist $\theta$ and an object $X$.

[L1] The reduced and redundant generator presentation, including its crossing sign dictionary, is [[lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation]].

[L2] Braided strictification is [[thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one]]. A strong monoidal equivalence transports evaluation, coevaluation and twist along its tensor constraints; applying its faithful underlying functor checks the zig-zag, balancing and ribbon-duality equations in the target.

[L3] The left-dual zig-zags, braiding hexagons, and natural dual-compatible twist are those of [[def-left-dual-and-right-dual-object]], [[def-braiding]] and [[def-twist-and-ribbon-structure]]. The Drinfeld composite is [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]].

[F1] Turaev, Chapter I Theorem 2.5, printed pp. 39--40, and its deduction §3.5, printed pp. 53--55, construct the strict monoidal evaluator and prove uniqueness. The reduction to one color and the crossing dictionary are [L1]. The proof checks the Yang--Baxter, zig-zag, inverse and slide relations, proves the bent-crossing formulas from hexagons and evaluation naturality, and proves (3.2.h) from balancing and dual-compatibility. Formulas (2.5.d)--(2.5.e) are the reversed cups and caps; after expansion of $u\theta$ they are exactly the displayed right-dual maps.

## Proof

**Proof technique:** direct.

1.1 **Transport the structure.** Use [L2] to work in a strict braided model and transport the chosen duals and twist by its strong monoidal constraints. The equations in [L3] are preserved by that transport. Send a signed word to the ordered tensor product of $X$ and $X^\vee$, with the empty word sent to the unit, and use the displayed generator values. Their sources and targets agree with the elementary tangles; in particular $\cap_-$ has input $X\otimes X^\vee$ and $\cup_-$ has output $X^\vee\otimes X$. [L1, L2, L3, given, construct]

2.1 **Check the exact presentation.** In the dictionary of [L1], the reduced crossing $Z^+$ receives $(c_{X^\vee,X})^{-1}$, rather than $c_{X,X^\vee}$; this is the mixed-orientation value of [F1]. The reduced generator assignment is consequently precisely [F1] under the same axioms [L3]. Its complete algebraic check therefore proves every reduced relation, and its formulas for the redundant generators give all remaining values. For clarity, the twist-square check begins with $(\theta_X^2\otimes1_{X^\vee})\operatorname{coev}_X=c_{X,X^\vee}^{-1}c_{X^\vee,X}^{-1}\operatorname{coev}_X$: naturality of $\theta$ at coevaluation gives balancing on $X\otimes X^\vee$, and dual-compatibility moves the second twist to the first factor. Tensor with $1_X$, apply a cap and use the zig-zag and bent-crossing identities, as in [F1], to obtain exactly the twist-square relation in [L1]. [L1, L3, F1, step 1.1, algebra]

3.1 **Extend and prove uniqueness.** Since the values satisfy a complete presentation, they define a strict monoidal functor on all words. Two such functors agree on reduced generators, hence on every word; the redundant values are forced by their defining expressions. Thus the strict-model evaluator exists and is unique. [L1, F1, step 1.1, step 2.1, construct]

4.1 **Return to the original category.** Compose with the strong monoidal quasi-inverse in [L2], identify its strand values with $X$ and $X^\vee$ using the unit of the equivalence, and transport generator values along those isomorphisms. The resulting functor has the anchor values interpreted through its tensor and unit constraints. Any other strong monoidal evaluator with these normalized values is compared on each signed word by its iterated tensor constraint; those comparisons commute with each generator and therefore with every word by [L1]. They form the canonical monoidal natural isomorphism identifying the two evaluators. Finally, equal framed tangles are equal morphisms in $\mathcal T$, so their evaluations agree. Countable choice enters through the presentation [L1]; uniqueness and the generator computations introduce no further choice. [L1, L2, step 3.1] ∎
