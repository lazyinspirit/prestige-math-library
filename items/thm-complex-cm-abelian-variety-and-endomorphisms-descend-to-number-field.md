---
id: thm-complex-cm-abelian-variety-and-endomorphisms-descend-to-number-field
kind: theorem
title: "A complex CM abelian variety and all its endomorphisms descend to a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-complex-abelian-variety-with-cm-type
  - def-abelian-variety-over-a-field
  - thm-abelian-variety-is-projective
  - thm-complex-abelian-variety-uniformizes-as-complex-torus
  - lem-cm-tate-module-rank-one-over-finite-adeles
  - thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
  - thm-abelian-homomorphism-groups-finite-free-and-tate-faithful
  - lem-countable-conjugacy-orbit-projective-diagram-descends-to-algebraic-numbers
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Complex Multiplication, version0.10 (2020)"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "Proposition7.9 and Corollary7.10, printed54–55, complete proofs read; finite-diagram descent below replaces the source's specialization and finite-subgroup quotient."
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Proposition1.2, printed4–5, classification and lattice comparison; complete passage read."
verification: {}
---

## Statement

Assume AC. Let $(A,\iota)$ be a complex abelian variety with CM by any CM algebra $E$, of type $\Phi$. There are a number field $K\subset\mathbb C$, an abelian variety $A_0/K$, and an isomorphism $u:A_0\otimes_K\mathbb C\xrightarrow{\sim}A$ such that base change followed by $u$ induces an isomorphism
$$\operatorname{End}_K(A_0)\xrightarrow{\sim}\operatorname{End}_{\mathbb C}(A).$$
In particular the given action of $E$ descends to a unital injection $\iota_0:E\hookrightarrow\operatorname{End}_K^0(A_0)$. The field $K$ can be chosen to contain every value of every embedding of $E$ into $\mathbb C$, and the tangent action then has the same character set $\Phi$ over $K$. If $\iota(E)\cap\operatorname{End}(A)=\iota(O_E)$, this equality holds for the descended action as well. No assertion of good reduction at every prime or descent to the reflex field is made.

## Facts & Assumptions

**Given:** AC and the complex CM pair $(A,\iota)$, including the specified tangent type $\Phi$. No number-field model of $A$ is given.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] The CM action is a faithful unital action of a CM algebra of degree $2\dim A$ on rational endomorphisms; its tangent character set is $\Phi$. Abelian varieties are smooth proper geometrically connected group varieties, and they are projective under AC. [[def-complex-abelian-variety-with-cm-type]] [[def-abelian-variety-over-a-field]] [[thm-abelian-variety-is-projective]]

[F2] Every complex abelian variety is naturally its complex tangent space modulo a full lattice. The differential of a homomorphism preserves that lattice, and this lattice representation is faithful on endomorphisms. For a CM action the rationalized lattice is a free rank-one $E$-module. [[thm-complex-abelian-variety-uniformizes-as-complex-torus]] [[lem-cm-tate-module-rank-one-over-finite-adeles]]

[F3] A holomorphic group homomorphism between complex abelian varieties is algebraic. [[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]]

[F4] The endomorphism group of an abelian variety is a finite free abelian group. [[thm-abelian-homomorphism-groups-finite-free-and-tate-faithful]]

[F5] A smooth projective complex variety equipped with finitely many points and morphisms among finite powers has a model over a number field whenever its diagram has countably many conjugate isomorphism classes under $\operatorname{Aut}(\mathbb C/\overline{\mathbb Q})$. [[lem-countable-conjugacy-orbit-projective-diagram-descends-to-algebraic-numbers]]

## Proof

1.1 Write $k=\overline{\mathbb Q}$ inside $\mathbb C$. Every embedding of the number fields forming $E$ has algebraic values. For $\tau\in\operatorname{Aut}(\mathbb C/k)$ the tangent action on $\tau A$ is obtained by applying $\tau$ to the matrices of the tangent action on $A$. The defining eigenvalue equations are transported to the eigenvalue equations with characters $\tau\circ\varphi=\varphi$ for $\varphi\in\Phi$. Their one-dimensional eigenspaces therefore have exactly the same character set $\Phi$. The conjugate rational endomorphisms give a faithful action of the same abstract algebra $E$. Thus every conjugate is again a CM pair of precisely the given type. [A1, F1, given, algebra]

2.1 There are at most countably many isomorphism classes of complex CM pairs of this fixed type. Indeed [F2] identifies the rationalized uniformizing lattice $H$ of any such pair with $E$. Its image lattice $I\subset E$ has a finite integral basis. The set of all finite lists of elements of the countable set $E$ is countable, so there are countably many possible $I$. The real tangent representation is $E\otimes_{\mathbb Q}\mathbb R$ with the complex structure determined by $\Phi$: after complexification, $J$ acts by $i$ on the character spaces in $\Phi$ and by $-i$ on their conjugates. Hence an $E$-linear identification of rational homology induces the unique corresponding complex-linear identification of tangent spaces. Two pairs giving the same embedded lattice $I$ are consequently holomorphically isomorphic as $E$-tori. Both that map and its inverse are algebraic by [F3], so they are isomorphic as algebraic CM pairs. This proves the countability, without requiring an integral $O_E$-basis or simplicity of $A$. [F1, F2, F3, step 1.1, algebra, choose]

3.1 Choose an integral basis $f_1,\ldots,f_r$ of $\operatorname{End}_{\mathbb C}(A)$ using [F4]. Form the finite diagram consisting of the projective variety $A$, its identity point, multiplication $A^2\to A$, inversion $A\to A$, and these $r$ endomorphisms. Its conjugates have countably many isomorphism classes: by steps 1.1–2.1 there are countably many possible underlying CM pairs. On any fixed one, each endomorphism acts faithfully on a free integral lattice of rank $2\dim A$ by [F2], so its endomorphisms inject into the countable set of integral matrices of that size. There are only countably many $r$-tuples of endomorphisms. The group law and identity are already fixed by the isomorphism as a CM pair. Thus the entire specified diagram meets the countability hypothesis of [F5]. Apply it to obtain a number field $K$ and a projective smooth variety $A_0/K$ with all these maps, whose complex diagram is the one on $A$. [A1, F1, F2, F4, F5, step 1.1, step 2.1, choose, construct]

4.1 The descended maps satisfy the group axioms: their identities hold after the faithfully flat extension $K\subset\mathbb C$, so they hold on every affine chart already over $K$ (tensoring a $K$-vector space with $\mathbb C$ is injective). Smoothness, properness and geometric connectedness are likewise inherited from this projective model and its complex fibre: smoothness is detected by the Jacobian condition after field extension; disconnectedness after an algebraic closure would give a nontrivial idempotent open-and-closed decomposition and hence a disconnected complex fibre. Thus $A_0$ is an abelian variety by [F1]. Base change on its endomorphisms is injective, since equality of coordinate maps is detected by the same faithfully flat extension. It is surjective because the descended $f_j$ give every complex endomorphism as an integral linear combination. This proves the asserted endomorphism-ring isomorphism. [F1, F4, step 3.1, algebra]

5.1 Transport $\iota$ through that isomorphism after tensoring with $\mathbb Q$. This is a faithful unital $E$-action. Enlarge $K$ by the finitely many algebraic conjugates of generators of the field factors of $E$; it remains a number field. All complex endomorphisms were already defined over the smaller $K$, so the endomorphism-ring assertion persists. Since the tangent action is now a representation of the split algebra $E\otimes_{\mathbb Q}K$, its primitive idempotents give eigenspaces whose dimensions are detected after extension to $\mathbb C$. They have rank one exactly at $\Phi$ and zero at its complementary embeddings, proving the type assertion over $K$. Finally the endomorphism-ring isomorphism identifies the intersection with the given $E$ verbatim, proving the optional $O_E$ assertion. This completes every stated claim. [F1, step 1.1, step 4.1, construct, algebra] ∎

## Source-reading boundary

Milne CM Proposition7.9 and Corollary7.10, printed54–55, and Milne2007 Proposition1.2, printed4–5, were read in full in the cached texts. The source's specialization/finite-kernel quotient argument is replaced by the fully proved finite-diagram countability supplier. Number-field models, finite-generation of endomorphisms, classification, and algebraicity of holomorphic group maps are not imported as external theorems: the exact local suppliers in the Facts carry their proofs. No claim about the remaining class-field existence theorem or reflex-field reciprocity follows from this helper alone.
