---
id: "thm-lc-measurability-normal-measures-and-embeddings"
kind: "theorem"
title: "Measurability, normal measures and elementary embeddings"
deps: ["lem-lc-ultrapower-critical-point", "def-lc-scott-ultrapower-and-class-embedding-convention", "thm-ultrafilter-characterisation", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Exercises 23.9–23.10 pp.94–95; Monk Chapter 17 normalization
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, for an uncountable cardinal kappa, the following are equivalent: kappa is measurable; kappa carries a normal measure; kappa is the critical point of a definable elementary embedding $j:V\to M$ into a transitive class, under the set-restriction convention. For the ultrapower by a measure U on kappa, U is normal if and only if its collapsed identity class equals kappa. Normality is also equivalent to closure under diagonal intersections of kappa-sequences of measure-one sets.

## Facts & Assumptions

**Given:** ZFC. Derived a normal measure from the definable embedding seed kappa, checked all filter and completeness laws, and proved both identity-class and diagonal-intersection normality equivalences.

[F1] [[lem-lc-ultrapower-critical-point]]: A measurable ultrapower exists, is elementary with critical point kappa, and its collapsed identity lies between kappa and j(kappa).

[F2] [[def-lc-scott-ultrapower-and-class-embedding-convention]]: Embeddings and targets are definable with set parameters and elementarity is a formula schema.

[F3] [[thm-ultrafilter-characterisation]]: Ultrafilters decide complements and obey proper finite intersection and upward closure.

[F4] [[def-axiom-of-choice]]: ZFC is retained for ultrapower construction and cardinal comparisons.

## Proof

1.1 Suppose j has critical point kappa. Its ordinal map is increasing, fixes every alpha<kappa and has j(kappa)>kappa; since M is transitive and contains j(kappa), it contains kappa. Define $W=\{X\subseteq\kappa:\kappa\in j(X)\}$. F2 and Separation make W a set. Images of kappa and empty show it proper. Elementarity for complements and finite intersections, evaluated at kappa, proves the ultrafilter laws in F3. For singleton {alpha}, j({alpha})={alpha}, which omits kappa, so W is nonprincipal. If eta<kappa and every X_xi for xi<eta belongs to W, j fixes eta and the value of the image sequence at xi is j(X_xi). Thus kappa lies in the intersection of that image sequence, which is j of the original intersection. This proves kappa-completeness, including eta=0. [F2, F3]

2.1 If f is regressive on S in W with zero omitted, then kappa belongs to j(S) and $j(f)(\kappa)<\kappa$. Let this ordinal be beta; j fixes beta. Elementarity applied to the beta-fibre says kappa belongs to $j(\{\alpha\in S:f(\alpha)=\beta\})$. That fibre therefore belongs to W. So W is normal. A measurable kappa gives the embedding by F1 and hence a normal W by this construction; a normal measure is itself a measure, and also gives the embedding by F1. This proves all three equivalences without asserting that the original measure was already normal. F4 is inherited in F1. [F1, F2, F4, step 1.1]

3.1 Let d be the collapsed identity class for U. By F1 it is an ordinal at least kappa. If U is normal, any predecessor [f] of the identity class has, on a U-large set omitting zero, ordinal values f(alpha)<alpha. Normality makes f constant there, so its collapsed class is an ordinal beta<kappa. Every beta<kappa is already below d by F1. Thus d=kappa. Conversely suppose d=kappa and f is regressive on a U-large S omitting zero. Extend f by zero outside S. Its collapsed class belongs to d=kappa, so equals beta for some beta<kappa. F1 identifies beta with the collapsed constant-beta class. Injectivity of the collapse and Scott equality give a U-large equality fibre; intersecting it with S proves normality. [F1, step 2.1]

4.1 For normal U and A_xi in U for xi<kappa, let $D=\{\alpha<\kappa:(\forall\xi<\alpha)\ \alpha\in A_\xi\}$. If its complement were U-large, omit zero and assign to alpha the least failed xi<alpha. Normality gives a U-large constant fibre beta, disjoint from A_beta, contrary to properness. Hence D is in U. Conversely assume diagonal closure and let f be regressive on S in U, zero omitted. If no fibre were U-large, all fibre complements A_xi would belong to U. Their diagonal intersection D belongs to U, but every alpha in S fails its membership requirement at xi=f(alpha)<alpha. Thus S and D are disjoint U-members, a contradiction. This proves the stated compatibility of normality conventions. [F3, step 3.1] ∎
