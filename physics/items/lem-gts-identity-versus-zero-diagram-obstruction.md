---
id: lem-gts-identity-versus-zero-diagram-obstruction
kind: lemma
title: Identity and zero transitions obstruct a diagram comparison
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories-examples
dependency_level: 1
deps:
  - def-natural-isomorphism
  - def-localization-of-a-category-at-a-class-of-morphisms
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
dependency_roles:
  def-natural-isomorphism: mathematical-premise
  def-localization-of-a-category-at-a-class-of-morphisms: mathematical-premise
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Categories, Section 4.2, Definitions
      url: https://stacks.math.columbia.edu/tag/0013
      locator: Definitions 4.2.4, 4.2.8 and 4.2.15; the obstruction is the elementary consequence of the naturality equation proved here, not a separately quoted HMS theorem.
proof_strategy: direct
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $I$ be the category with objects $0,1$, identities, and one further arrow $u:0\to1$. In any category $\mathcal D$, fix an object $c$ and an endomorphism $z:c\to c$. Define functors $A,B:I\to\mathcal D$ with both object values $c$, with $A(u)=\operatorname{id}_c$ and $B(u)=z$. There is a natural isomorphism $A\Rightarrow B$ if and only if $z$ is invertible. Here a natural isomorphism has invertible components $F_i$ satisfying $B(u)F_0=F_1A(u)$.

In particular, let $\mathscr D$ be the localization of small $\mathbb C$-linear dg categories at quasi-equivalences, in a fixed ambient size convention. A quasi-equivalence induces quasi-isomorphisms on all morphism complexes and an essentially surjective functor on $H^0$; $H^0$ retains the objects and takes degree-zero cohomology of each morphism complex. Let $c$ be the dg category of bounded complexes of finite-dimensional coordinate vector spaces $\mathbb C^n$, with the usual differential on morphisms, and let $z$ be its zero dg functor, sending every complex to the zero complex. The two diagrams just specified have identical fibres and admit no natural isomorphism in $\mathscr D$. This is an obstruction for arbitrary transition diagrams, with no assertion about which transitions arise from geometric mirror families.

## Statement references

[[def-natural-isomorphism]]

[[def-localization-of-a-category-at-a-class-of-morphisms]]

[[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]

## Facts & Assumptions

**Given:** The walking-arrow category, object, endomorphism and size convention in the Statement.

[F1] A natural isomorphism has a two-sided inverse natural transformation. Evaluating the inverse equations at an object makes its components inverse morphisms. Naturality is the equation displayed in the Statement. Exact supplier: [[def-natural-isomorphism]].

[F2] A functor that sends all inverted arrows to isomorphisms factors through the specified localization. Exact supplier: [[def-localization-of-a-category-at-a-class-of-morphisms]].

[F3] Small dg categories have sets of objects, cochain morphism complexes and closed degree-zero identities. For complexes $V,W$, the morphism complex has degree-$r$ part $\prod_i\operatorname{Hom}(V^i,W^{i+r})$ and differential $d(f)=d_W f-(-1)^r f d_V$. Exact supplier: [[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]].

## Proof

**Proof technique:** direct.

1.1 If $F:A\Rightarrow B$ is a natural isomorphism, its components are invertible by [F1]. Naturality on $u$ says $zF_0=F_1$, hence $z=F_1F_0^{-1}$ is invertible. Conversely, if $z$ is invertible, choose $F_0=\operatorname{id}_c$ and $F_1=z$. The only nonidentity naturality equation is then satisfied, and the inverse components $\operatorname{id}_c,z^{-1}$ satisfy the reverse equation. Thus these components give inverse natural transformations. [F1, given, construct, algebra]

1.2 For a small dg category $\mathcal C$, let $S(\mathcal C)$ be the set of isomorphism classes of objects of $H^0(\mathcal C)$. A dg functor induces a function on these sets, preserving identities and composition, so $S$ is a functor to sets in the ambient larger size convention. A quasi-equivalence induces a bijection: essential surjectivity gives surjectivity, and an isomorphism between two image objects lifts by fullness on $H^0$ to inverse arrows, whose inverse equations follow by faithfulness. Therefore [F2] factors $S$ through $\mathscr D$. In particular an invertible arrow of $\mathscr D$ must induce a bijection on $S$. [F2, F3, given, construct, algebra]

2.1 The complex $\mathbb C$ concentrated in degree zero and the zero complex have distinct classes in $S(c)$: its degree-zero endomorphism cohomology is $\mathbb C$, with nonzero identity, whereas every map to or from the zero complex is zero. The map $S(z)$ sends both classes to the zero-complex class, so it is not injective. Step 1.2 shows that $z$ is not invertible in $\mathscr D$. The two diagrams are genuine functors since the only compositions to check involve identities; their fibres agree literally. Step 1.1 now rules out a natural isomorphism, as claimed. [F3, step 1.1, step 1.2, given, algebra] ∎
