---
id: lem-author-9415fc97ee80-contravariant-relative-hom
kind: lemma
title: Contravariant Hom reverses relative cofiber triangles
status: published
domain: mathematics
deps:
  - math:def-triangulated-category
  - math:thm-long-exact-hom-sequences-of-a-distinguished-triangle
  - thm-adjudicate-60ab133bec72-enhanced-mapping-input
  - math:def-open-immersion-schemes
  - def-cohomology-with-support
  - math:def-axiom-of-choice
dependency_roles:
  math:def-triangulated-category: mathematical-premise
  math:thm-long-exact-hom-sequences-of-a-distinguished-triangle: mathematical-premise
  thm-adjudicate-60ab133bec72-enhanced-mapping-input: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 15
---

## Statement
Let $A\xrightarrow f B\to Q\to A[1]$ be a specified distinguished triangle in a triangulated category $\mathcal T$. For any coefficient object $E$ and integer $a$, applying contravariant representable Hom gives the exact sequence containing
$$\cdots\to\operatorname{Hom}(A,E[a-1])\to\operatorname{Hom}(Q,E[a])\to\operatorname{Hom}(B,E[a])\to\operatorname{Hom}(A,E[a])\to\operatorname{Hom}(Q,E[a+1])\to\cdots.$$

For the enhanced conclusion, supply a stable infinity-category $\mathcal C$, an equivalence $h\mathcal C\simeq\mathcal T$ compatible with translation and distinguished triangles, lifts of $A,B,E,f$, and a specified cofiber square $\widetilde Q=\widetilde B\coprod_{\widetilde A}0$ whose induced triangle identifies with the entire given triangle, including its connecting map. Use the hierarchy of universes and smallness conventions of the enhanced interface. Define $R\operatorname{Hom}(-,E)$ in spectra as the left-exact spectral lift of $\operatorname{Map}_{\mathcal C}(-,\widetilde E):\mathcal C^{\mathrm{op}}\to\mathcal S$; tildes on lifted objects will now be suppressed. Then
$$R\operatorname{Hom}(Q,E)\simeq\operatorname{fib}\bigl(R\operatorname{Hom}(B,E)\to R\operatorname{Hom}(A,E)\bigr).$$
For a derived mapping-complex version, additionally supply a commutative ring $R$ and a coherent functor $K_E:\mathcal C^{\mathrm{op}}\to\operatorname{Mod}_{HR}$ whose underlying spectrum-valued functor is equivalent to this spectral Hom functor. Interpret $R\operatorname{Hom}(-,E)$ as $K_E$ under $\operatorname{Mod}_{HR}\simeq\mathcal D(R)$. The same formula is then an equivalence in $\mathcal D(R)$, hence an isomorphism in $D(R)$; it does not assert equality of chosen cochain complexes. These enhancement and linear-compatibility data are additional premises, not consequences of the Hom groups alone.

For the support application, let $U\hookrightarrow X$ be an open immersion of schemes. Suppose a covariant motive functor $M$ into the supplied enhancement is given on a category containing this immersion, and define the relative motive $M(X,U):=\operatorname{cofib}(M(U)\to M(X))$. Suppose also that a chosen cohomology theory supplies a restriction arrow $C(X)\to C(U)$ in the same derived target, together with an equivalence of coherent arrow diagrams from $R\operatorname{Hom}(M(X),E)\to R\operatorname{Hom}(M(U),E)$ to that arrow. With $C_{X\setminus U}(X):=\operatorname{fib}(C(X)\to C(U))$, one then has
$$R\operatorname{Hom}(M(X,U),E)\simeq C_{X\setminus U}(X).$$
Thus the relative motive is paired contravariantly with the coefficient object, and restriction goes from the whole scheme to the open. For the article's motivic support spectrum, additionally assume the Axiom of Choice and all domain and weight hypotheses of its support definition, and require the supplied arrow comparison to be with its specified motivic restriction arrow. The abstract triangle and conditional enhanced fiber assertions do not use this additional article-theory hypothesis. It does not construct $M$, assert an enhancement of a classical motive category, or identify support with an independently constructed quotient evaluation without that comparison.

## Statement references
[[math:def-triangulated-category]]

[[math:thm-long-exact-hom-sequences-of-a-distinguished-triangle]]

[[thm-adjudicate-60ab133bec72-enhanced-mapping-input]]

[[math:def-open-immersion-schemes]]

[[def-cohomology-with-support]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions
**Given:** The specified triangle, coefficient object and integer; the enhanced and linear conclusions use exactly the additional lifts, cofiber square and compatible mapping functor in the Statement. The support application additionally assumes the supplied motive functor and coherent comparison of restriction arrows. Hom without $R$ means a morphism group in $\mathcal T$.

**Goal:** Establish the direction, degree, enhanced mapping fiber and conditional support identification.

[F1] The translation and distinguished triangles are specified structure of [[math:def-triangulated-category]]. Contravariant representable Hom applied to a distinguished triangle gives its long exact sequence by [[math:thm-long-exact-hom-sequences-of-a-distinguished-triangle]].

[F2] The stable-category, spectral-lifting, linear-target and forgetful-limit interfaces are supplied by [[thm-adjudicate-60ab133bec72-enhanced-mapping-input]]. The corepresentable functor $\operatorname{Map}_{\mathcal C^{\mathrm{op}}}(E,-)=\operatorname{Map}_{\mathcal C}(-,E)$ preserves finite limits by that interface; this is also the mapping-space universal property of a limit. Thus its left-exact spectral lift is available.

[F3] The specified cofiber square is part of the enhancement data. The coherent linear functor, when used, carries that square to a cone of $HR$-modules, and its underlying spectral cone is the one determined by the supplied equivalence of functors.

[F4] An open immersion identifies its source with an open subscheme, as in [[math:def-open-immersion-schemes]]. The support convention is a restriction fiber; for the article's theory this is the motivic fiber in [[def-cohomology-with-support]]. The comparison of the two restriction arrows, including the homotopy making their square commute, is an additional hypothesis, not a theorem supplied by that support definition.

[F5] [[math:def-axiom-of-choice]] supplies the additional Choice assumption of the article support interface only; the formal proof makes no choice of enhancements or representing objects, which are supplied data.

## Proof
1.1 Apply contravariant Hom with target $E[a]$ to every shift of the given triangle. The part ending in $\operatorname{Hom}(B,E[a])\to\operatorname{Hom}(A,E[a])$ has preceding term $\operatorname{Hom}(Q,E[a])$ and following term $\operatorname{Hom}(Q[-1],E[a])\cong\operatorname{Hom}(Q,E[a+1])$. Its predecessor is $\operatorname{Hom}(A[1],E[a])\cong\operatorname{Hom}(A,E[a-1])$. These identifications use the translation equivalence; exactness follows from [F1], with connecting maps determined by the specified triangle's shift and rotation convention. [F1, given]

2.1 In the enhanced case the cofiber square in [F3] becomes a pullback square in $\mathcal C^{\mathrm{op}}$. By [F2] its left-exact spectral Hom image is a pullback square, with $R\operatorname{Hom}(0,E)=0$ since left-exact functors preserve terminal objects. Hence its remaining corner is precisely the fiber displayed in the Statement. In the linear case the coherent image square under $K_E$ has this underlying spectral pullback square; the module-limit criterion in [F2] makes it a pullback square of $HR$-modules as well. Transport across the equivalence with $\mathcal D(R)$ preserves this limit, giving the derived mapping-complex assertion. Finally substitute $A=M(U)$, $B=M(X)$ and $Q=M(X,U)$. The supplied equivalence of restriction-arrow diagrams extends by the zero objects to equivalent cospans defining their fibers. Their limiting objects are equivalent by the universal property of a limit. By [F4] the latter fiber is exactly $C_{X\setminus U}(X)$. For the article's support spectrum, invoke its definition only with its domain and weight hypotheses and the inherited Choice assumption [F5], and only when the comparison is with its specified restriction arrow. This proves all conclusions under their respective stated premises. [F2, F3, F4, F5, given, step 1.1] ∎
