---
id: lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition
kind: lemma
title: Pullback and composition of the cdh generating families
status: published
domain: mathematics
deps:
  - def-cdh-topology-interface
  - def-nisnevich-covering-interface
  - math:def-etale-morphism-schemes
dependency_roles:
  def-cdh-topology-interface: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
---

## Statement
On this finite-type site, Nisnevich families and singleton completely decomposed proper (cdp) morphisms contain identities and are stable under arbitrary base change. Finite compositions of such families are stable under base change and composition. Every resulting composite family is completely decomposed in the pointwise sense: each target point has a lift with identical residue field. Finite disjoint unions of Nisnevich maps forming a cover give a Nisnevich covering morphism; finite disjoint unions over the disjoint union of their targets of cdp morphisms give a cdp morphism.

## Facts & Assumptions
**Given:** The pointwise definitions from [[def-nisnevich-covering-interface]] and [[def-cdh-topology-interface]].

**Goal:** Verify the closure properties used for a finite pretopology.

[F1] Étale and proper morphisms are preserved by base change and composition; finite disjoint unions have those same properties componentwise. Properness means separated, finite type, universally closed, and these conditions verify the stated proper assertions directly. The corresponding closure properties for étale morphisms are those of [[math:def-etale-morphism-schemes]].

## Proof
1.1 If $y\in Y$ over $x\in X$ has $\kappa(y)=\kappa(x)$, then over any $x'\in X'$ above $x$, the fiber of $Y\times_X X'$ contains the point specified by the $\kappa(x')$-valued base change of $y$. Its residue field is exactly $\kappa(x')$. Thus complete decomposition survives every base change. Combining this with [F1] proves base-change stability of both sorts of generating families. Identity maps plainly have the lifting property. [F1, given]

2.1 To lift a point through a composite family, lift it through the first family with unchanged residue field, then through the covering family above that chosen object, again with unchanged residue field. Composing the two residue-field isomorphisms proves complete decomposition of the composite. A pullback of such a composite is the composite of its pulled-back families by the fiber-product associativity isomorphism. This proves the asserted finite-composition and pullback closure. [step 1.1, given]

3.1 A point of a finite disjoint union lies in exactly one component. For covers over disjoint target components apply the required lifting property on that component. For a Nisnevich family over a common target apply its lifting property to one summand of its source coproduct. Étaleness and properness are supplied by [F1]; for the proper assertion the targets are disjoint, so properness is checked on those open-and-closed pieces. This proves the stated coproduct assertions. [F1, step 1.1, step 2.1] ∎
