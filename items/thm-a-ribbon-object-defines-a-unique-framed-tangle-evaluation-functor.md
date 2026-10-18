---
id: thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor
kind: theorem
title: "A ribbon object defines a unique framed-tangle evaluation functor"
status: published
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
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/published-receipts/thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor.json
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

[F1] The notation is compared with Turaev I §§2.5, 3.2 and 3.5, printed pp. 39–40 and 50–56. The following checks use the categorical axioms, not the cited evaluator theorem.

## Proof

**Proof technique:** direct.

1.1 **Transport the structure.** Use [L2] to work in a strict braided model and transport the chosen duals and twist by its strong monoidal constraints. The equations in [L3] are preserved by that transport. Send a signed word to the ordered tensor product of $X$ and $X^\vee$, with the empty word sent to the unit, and use the displayed generator values. Their sources and targets agree with the elementary tangles; in particular $\cap_-$ has input $X\otimes X^\vee$ and $\cup_-$ has output $X^\vee\otimes X$. [L1, L2, L3, given, construct]

2.1 **Yang–Baxter, snakes, inverses and slide.** Use the notation $A=X$, $B=X^\vee$, $b=\operatorname{coev}_X$, $d=\operatorname{ev}_X$, $p=\theta_X$, $q=\theta_X^{-1}$, $x_+=c_{A,A}$, $x_-=c_{A,A}^{-1}$, $z_+=c_{B,A}^{-1}$ and $z_-=c_{A,B}$ for the reduced relations explicitly displayed in [L1]. The first equation is the braided Yang–Baxter equation: apply naturality of $c_{A,A\otimes A}$ to $c_{A,A}$ and expand its hexagon on both sides to get $(1_A\otimes c_{A,A})(c_{A,A}\otimes1_A)(1_A\otimes c_{A,A})=(c_{A,A}\otimes1_A)(1_A\otimes c_{A,A})(c_{A,A}\otimes1_A)$. The next two equations are precisely the chosen left-dual snakes. The inverse equations follow from the definitions of $x_-$ and $q$. Naturality gives $c_{A,A}(1_A\otimes p)=(p\otimes1_A)c_{A,A}$; invert $c$ in this identity to obtain its negative-crossing version. Thus all relations except the bent inverse and twist square have already been checked directly. [L1, L3, step 1.1, algebra]

2.2 **Bent inverses, including both orders and signs.** For arbitrary $V,W$ with left dual $W^\vee$, put $$M_{V,W}=(\operatorname{ev}_W\otimes1_V\otimes1_{W^\vee})(1_{W^\vee}\otimes c_{V,W}\otimes1_{W^\vee})(1_{W^\vee}\otimes1_V\otimes\operatorname{coev}_W).$$ We check $M_{V,W}=c_{V,W^\vee}^{-1}$. Naturality at coevaluation and the hexagon give $$(1_W\otimes c_{V,W^\vee})(c_{V,W}\otimes1_{W^\vee})(1_V\otimes\operatorname{coev}_W)=\operatorname{coev}_W\otimes1_V.$$ Tensor on the left with $1_{W^\vee}$ and apply $\operatorname{ev}_W$ to the first two factors. Interchange and the $W^\vee$ snake give $c_{V,W^\vee}M_{V,W}=1_{W^\vee\otimes V}$. For the other order use naturality at evaluation, expanded by the other hexagon: $$(\operatorname{ev}_W\otimes1_V)(1_{W^\vee}\otimes c_{V,W})(c_{V,W^\vee}\otimes1_W)=1_V\otimes\operatorname{ev}_W.$$ Tensor on the right with $1_{W^\vee}$, insert $\operatorname{coev}_W$ and apply the $W$ snake. This gives $M_{V,W}c_{V,W^\vee}=1_{V\otimes W^\vee}$. Replacing everywhere $c_{U,V}$ by the opposite braiding $c_{V,U}^{-1}$ is legitimate: its two hexagons follow by inverting those of $c$, and its naturality follows by inverting the naturality squares. It gives the companion identity with $c_{V,W}$ replaced by $c_{W,V}^{-1}$ and $c_{V,W^\vee}^{-1}$ replaced by $c_{W^\vee,V}$. For $V=W=A$ these say $y_+=c_{A,B}^{-1}$ and $y_-=c_{B,A}$ for the abbreviation in [L1]. Hence $z_\delta y_{-\delta}=1_{BA}$ and $y_{-\delta}z_\delta=1_{AB}$ for both signs, which are the full two-sided bent inverse relations. [L1, L3, step 1.1, algebra]

3.1 **The twist-square relation.** Naturality of $\theta$ at $b$, the balancing identity and $\theta_{\mathbf1}=1$ give $$b=c_{B,A}c_{A,B}(p\otimes\theta_B)b.$$ The dual-morphism coevaluation identity $(1_A\otimes p^\vee)b=(p\otimes1_B)b$, together with $p^\vee=\theta_B$, therefore gives $$(p^2\otimes1_B)b=c_{A,B}^{-1}c_{B,A}^{-1}b.$$ Tensor on the right with $1_A$ and compose with $1_A\otimes d$. On the left the snake leaves $p^2$. On the right use the following instance of evaluation naturality and the hexagon: $$(1_A\otimes d)(c_{A,B}^{-1}\otimes1_A)=(d\otimes1_A)(1_B\otimes c_{A,A}).$$ For verification, expand $c_{A,B\otimes A}=(1_B\otimes c_{A,A})(c_{A,B}\otimes1_A)$ in $(d\otimes1_A)c_{A,B\otimes A}=1_A\otimes d$ and multiply by $c_{A,B}^{-1}\otimes1_A$. Thus the right side is exactly $(d\otimes1_A)(1_B\otimes x_+)(z_+\otimes1_A)(b\otimes1_A)$, proving the last reduced relation with its actual crossing signs. [L1, L3, step 2.1, step 2.2, algebra]

4.1 **Redundant cups, caps, crossings and negative twists.** The formulas for $b',d'$ in [L1] evaluate to $$b'=(1_B\otimes p^{-1})c_{B,A}^{-1}b,\qquad d'=dc_{A,B}(p\otimes1_B).$$ Put $e'=dc_{A,B}$ and $h'=c_{B,A}^{-1}b$. The two bending identities proved in step 2.2 retract their crossing pairs, leaving the two ordinary snakes, so $(A,e',h')$ is a left dual of $B$. The dual comparison with the chosen left dual $B^\vee$ is $u_A$, by its defining composite; explicitly the comparison identities are $$\operatorname{ev}_B(u_A\otimes1_B)=e',\qquad(1_B\otimes u_A)h'=\operatorname{coev}_B.$$ They follow either by inserting the definition of $u_A$ and retracting its adjacent cup–cap, or by the unique-dual comparison in [L3]. With $j_A=u_Ap$ this gives exactly $$d'=\operatorname{ev}_B(j_A\otimes1_B),\qquad b'=(1_B\otimes j_A^{-1})\operatorname{coev}_B.$$ This proves the advertised right-dual formulas without identifying double duals on objects. The negative twist is the mate of $p$ across a bend. Since $p^\vee=\theta_B$, it has value $\theta_B$, and inverse twists have inverse values. For the last crossing variant insert $y_+=c_{A,B}^{-1}$ and $y_-=c_{B,A}$ in the formula for $t_\delta$ in [L1]; apply the same bent identity of step 2.2 with $V=B,W=A$. It yields $t_+=c_{B,B}$ and $t_-=c_{B,B}^{-1}$. Together with $y_\delta,z_\delta$ this checks all four orientation pairs, with each overpass and underpass, against the dictionary. [L1, L3, step 2.2, step 3.1, algebra]

5.1 **Extend and prove uniqueness.** Since the values satisfy a complete presentation, they define a strict monoidal functor on all words. Two such functors agree on reduced generators, hence on every word; the redundant values are forced by their defining expressions. Thus the strict-model evaluator exists and is unique. [L1, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, construct]

6.1 **Return to the original category.** Compose with the strong monoidal quasi-inverse in [L2], identify its strand values with $X$ and $X^\vee$ using the unit of the equivalence, and transport generator values along those isomorphisms. The resulting functor has the anchor values interpreted through its tensor and unit constraints. Any other strong monoidal evaluator with these normalized values is compared on each signed word by its iterated tensor constraint; those comparisons commute with each generator and therefore with every word by [L1]. They form the canonical monoidal natural isomorphism identifying the two evaluators. Finally, equal framed tangles are equal morphisms in $\mathcal T$, so their evaluations agree. Countable choice enters through the presentation [L1]; uniqueness and the generator computations introduce no further choice. [L1, L2, step 5.1] ∎
