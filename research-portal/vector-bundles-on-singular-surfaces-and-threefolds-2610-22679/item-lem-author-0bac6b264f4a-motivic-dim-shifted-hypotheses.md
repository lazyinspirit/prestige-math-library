---
title: Normalizing the comparison fiber for the dimension criterion
status: published
research_item: lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses
dependency_level: 10
---

PDF p. 4: Motivic dimension vanishing

## Prerequisites

- [lem-author-0bac6b264f4a-motivic-dim-general-interface](item-lem-author-0bac6b264f4a-motivic-dim-general-interface)
- [thm-author-0bac6b264f4a-motivic-dim-relative-package-input](item-thm-author-0bac6b264f4a-motivic-dim-relative-package-input)
- [thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input](item-thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input)
- [lem-adjudicate-b9c9b8f0a8b2-coherent-cochain-shifts](item-lem-adjudicate-b9c9b8f0a8b2-coherent-cochain-shifts)
- [math:def-noetherian-ring](https://alphabetamath.cc/item/def-noetherian-ring)
- [math:def-noetherian-module](https://alphabetamath.cc/item/def-noetherian-module)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)


## Statement
Assume the Axiom of Choice and the size convention of the actual prime-field fiber interface: Grothendieck universes $U\in V\in W$ with $\omega\in U$, field and scheme data in $U$, complexes of $V$-small abelian groups, and coherent functor constructions in $W$. Universe existence is a separate assumption. For $j\geq0$ and a prime field $F$, set $W_{j,F}=F_{j,F}[j]$, with cochain shift $H^n(C[j])=H^{n+j}(C)$. Then $W_{j,F}$ satisfies every hypothesis of the dimension criterion over base ring $F$: it is finitary Nisnevich, cdh-acyclic, pro-cdh on Noetherian $F$-schemes, and has nilpotent-relative values in degrees $\leq0$ on every Noetherian local henselian $F$-algebra.

## Facts & Assumptions
**Given:** The actual coherent fiber $F_{j,F}$, the inherited Choice and universe assumptions, and the shift convention in the Statement.

**Goal:** Check the precise domain, ideal and degree hypotheses before applying the criterion.

[F1] [thm-author-0bac6b264f4a-motivic-dim-relative-package-input](item-thm-author-0bac6b264f4a-motivic-dim-relative-package-input) gives finitariness, Nisnevich descent, cdh acyclicity, pro-cdh descent, and the relative bound $\leq j$ for finitely generated nilpotent ideals.

[F2] [thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input](item-thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input) is the criterion requiring relative bound $\leq0$ for Noetherian local henselian algebras. [lem-author-0bac6b264f4a-motivic-dim-general-interface](item-lem-author-0bac6b264f4a-motivic-dim-general-interface) specifies the actual fiber, its coherent presheaf category, and its Choice and universe assumptions used here.

[F3] [lem-adjudicate-b9c9b8f0a8b2-coherent-cochain-shifts](item-lem-adjudicate-b9c9b8f0a8b2-coherent-cochain-shifts) proves that signed cochain shifts are inverse equivalences on the coherent derived target $\mathcal D(\mathbb Z)$, preserve all existing small limits and colimits, and satisfy the stated cohomology convention. All target limits, colimits and fibers here are coherent ones in the precise sense of [F2].

[F4] [math:def-noetherian-ring](https://alphabetamath.cc/item/def-noetherian-ring) defines a Noetherian ring by its Noetherian left regular module; [math:def-noetherian-module](https://alphabetamath.cc/item/def-noetherian-module) defines a Noetherian module by finite generation of every submodule. For a commutative ring, an ideal is a submodule of its regular module, and finite generation means $I=(a_1,\ldots,a_r)$ for a finite list of elements (the empty list is allowed).

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specify the inherited assumptions. Choice is used through the supplied unbounded derived enhancement in the actual fiber interface of [F2], not to select cones in this argument. The stated universes bound its scheme category, nerves, mapping spaces and functor diagrams. The shift and finite-generation arguments make no further choice assertion.

## Proof
1.1 Work in the coherent presheaf category of [F2] under [A1], and put $S=[j]$ and $T=[-j]$. By [F3] these are inverse equivalences preserving coherent limits and colimits. Thus applying $S$ to the continuity colimits and covering-sieve limits of [F2] preserves finitariness and Nisnevich descent. The same holds for cdh sheaves under both $S$ and $T$. Let $P$ be a coherent presheaf and $V$ a cdh sheaf, with $L=L_{\mathrm{cdh}}$. In the presheaf category the inverse equivalences and reflection of [F2] give $\operatorname{Map}(SLP,V)\simeq\operatorname{Map}(LP,TV)\simeq\operatorname{Map}(P,TV)\simeq\operatorname{Map}(SP,V)$. The object $SLP$ is a sheaf, so this identifies $LSP\simeq SLP$ by the reflection universal property. Apply this to $P=F_{j,F}$: [F1] gives $LW_{j,F}\simeq S0\simeq0$. The total-fiber conventions of [F1] and [F2] agree: for a coherent square $B_{00}\to B_{01}$ over $B_{10}\to B_{11}$, the iterated fiber $\operatorname{fib}(\operatorname{fib}(B_{00}\to B_{01})\to\operatorname{fib}(B_{10}\to B_{11}))$ and $\operatorname{fib}(B_{00}\to B_{01}\times_{B_{11}}B_{10})$ are the same limit, since applying $\operatorname{Map}(E,-)$ and expanding each pullback gives the same space of compatible maps and nullhomotopies. This uses the limit universal property of [F2]. Shift therefore commutes with the levelwise total fibers in either convention. Their cohomology transition maps in degree $n$ become exactly those of the original system in degree $n+j$ by [F3]; for each fixed stage a later transition is zero by [F1]. Thus the supplied degreewise pro-cdh condition is preserved. This uses no detection assertion in an unbounded pro-derived category. [A1, F1, F2, F3]

2.1 Let $A$ be any Noetherian local henselian $F$-algebra and $I$ any nilpotent ideal, with the algebra, local, henselian and nilpotent conventions of [F2]. By [F4], $I$, as a submodule of the Noetherian regular module $A$, has a finite generating list. Thus [F1] applies to this arbitrary nilpotent ideal. Write $F_{j,F}(A,I)=\operatorname{fib}(F_{j,F}(A)\to F_{j,F}(A/I))$, and use the same notation for $W_{j,F}$. Fiber preservation in [F3] gives $W_{j,F}(A,I)\simeq F_{j,F}(A,I)[j]$. For $n>0$ its cohomology is $H^n(W_{j,F}(A,I))=H^{n+j}(F_{j,F}(A,I))=0$, since $n+j>j$ and [F1] bounds the latter fiber in degrees $\leq j$. This is precisely the remaining degree-zero relative hypothesis of [F2], with no added finite-generation assumption on its ideals. Together with step 1.1, all criterion hypotheses hold over the base ring $F$. [F1, F2, F3, F4, step 1.1] ∎
