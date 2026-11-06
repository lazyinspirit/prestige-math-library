---
id: lem-gts-finite-group-induction-of-invariant-stability
kind: lemma
title: Finite-group induction of invariant stability conditions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
  - def-derived-category-of-an-abelian-category
  - def-gts-bridgeland-stability-condition-with-support-property
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-serre-finiteness-projective-cohomology
  - def-axiom-of-choice
dependency_roles:
  def-derived-category-of-an-abelian-category: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  thm-coherent-sheaves-abelian-noetherian-scheme: mathematical-premise
  thm-serre-finiteness-projective-cohomology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Bridgeland, Del Monte and Giovenzana, Invariant Stability Conditions on Certain Calabi-Yau Threefolds
      url: https://arxiv.org/pdf/2412.08531v1
      locator: "Section 2.2; the finite-group lifting and charge-quotient support proof are reconstructed below."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 1
---

## Statement

Assume the Axiom of Choice. Let V be a smooth quasi-projective complex variety and G a finite group acting on it. Write $D=D^b_c(\operatorname{Coh}V)$ and $D_G=D^b_c(\operatorname{Coh}_G V)$, the full bounded subcategories with compactly supported coherent cohomology (equal to the whole bounded coherent category when V is projective), where an equivariant coherent sheaf is a coherent sheaf with isomorphisms $g*E→E$ satisfying the group cocycle. Suppose $σ=(Z,P)$ is a G-invariant locally finite stability condition on D with support bound on a G-stable finite-rank charge quotient $v:K(D)→Γ$. Then
$$P_G(φ)=\{E\in D_G:\operatorname{Forget}E\in P(φ)\},\qquad Z_G(E)=Z(v(\operatorname{Forget}E))$$
defines a locally finite stability condition, with support on the finite-rank group $Γ_G=\operatorname{im}(v \operatorname{Forget})$ with its inherited norm. A support property on a larger prescribed equivariant lattice is a separate assertion. An induced stable object's underlying object is polystable with a transitive G-orbit of stable factors and irreducible (possibly projective) stabilizer multiplicity representation; the converse holds. Any actual triangulated equivalence to $D_G$ transports this condition and its proved axioms.

## Facts & Assumptions

**Given:** The data of the Statement. Work in ZF+AC; finite and countable choices used below are included in this ambient base.

[F1] [[def-derived-category-of-an-abelian-category]] fixes bounded derived localization and roofs; [[thm-coherent-sheaves-abelian-noetherian-scheme]] supplies the abelian coherent category over the locally Noetherian variety. [[thm-serre-finiteness-projective-cohomology]] gives finite-dimensional Hom/Ext on proper coherent support: a proper subvariety of a quasi-projective variety is projective, and its coherent local Ext sheaves are computed by finite locally free resolutions and a finite affine Cech cover. Quasicoherent sheaves below mean sheaves obtained by module localization on affine charts; coherent ones are finitely presented there.

[F2] [[def-gts-bridgeland-stability-condition-with-support-property]] fixes the slicing, specified finite HN filtrations, local-finiteness interval, and support inequality.

[F3] [[def-axiom-of-choice]] is the actual ambient premise, inherited through the coherent interfaces; no choice-free assertion is made.

## Proof

1.1 Equivariant induction. The slicing itself gives the bounded t-structure used below: set $D^{\le0}=P(>0)$, $D^{\ge1}=P(\le0)$. Shift closure follows from $P(φ+1)=P(φ)[1]$, orthogonality from phase vanishing, and splitting a finite HN filtration at phase0 gives the truncation triangle for every object. The two truncations are functorial by their orthogonality characterizations. Boundedness follows from the finite largest and smallest HN phases. Their heart is $A=P((0,1])$; its kernels and cokernels are the two heart truncations of the cone of a heart morphism, and the cone triangle/its truncation verify the abelian exactness axioms. HN triangles of a heart object consequently give subobject filtrations there, and phase vanishing proves their uniqueness by factoring the maximal-phase subobject through the maximal-phase term of any other filtration and then descending to the quotient. This establishes the canonical truncation and HN terminology rather than assuming a lifting theorem. [F1, F2, F3, given, algebra]

2.1 Here are the derived and filtration details, including the lifting issue. Ind(F)=⊕_(g∈G)g*F is exact and is both adjoints to Forget. On equivariant objects the counit Ind Forget E→E has an equivariant section divided by |G|. The exact adjunctions descend to the bounded derived categories. They give the invariant-morphism formula directly, without an unspecified injective resolution: lift a morphism Forget E→Forget F using Ind⊣Forget, then compose with the averaging section E→Ind Forget E; its forgotten image is the average of the original morphism. Thus every invariant morphism lifts. Conversely an equivariant morphism with zero underlying morphism is zero, since it is its own composition through the split Ind–Forget counit. Consequently [F1, F2, F3, step 1.1, algebra]

3.1 $\operatorname{Hom}_{(D_G)}(E,F[k]) = \operatorname{Hom}_D(\operatorname{Forget} E,\operatorname{Forget} F[k])^G$. [F1, F2, F3, step 2.1, algebra]

4.1 An equivariant object in D with its coherent action is realized in $D_G$ as a retract of Ind of its underlying object: the action gives the matrix averaging idempotent on Ind. Idempotents split here. To see this without imposing a nonexistent strict action on a chosen complex, split it in the unbounded quasicoherent derived category by the mapping telescope of $E→eE→eE→…$; the telescope cohomology is the image of the idempotent on cohomology. It is bounded coherent, so belongs to $D^b(\operatorname{Coh}_G V)$. The same construction for 1−e gives the complementary summand. Thus functorial, canonically equivariant truncation objects or HN factors really lie in the indicated bounded equivariant category. [F1, F2, F3, step 3.1, algebra]

5.1 The heart $A=P((0,1])$ is G-invariant. Its canonical bounded truncation functors give a bounded heart $A_G$ in $D_G$ by the preceding lifting argument; forgetting is exact and conservative on these hearts. For $E∈A_G$ the ordinary HN filtration of Forget E is unique: its maximal-phase first term is characterized by the vanishing of maps from larger-phase objects and its maximal possible phase, and uniqueness is iterated on the quotient. Every action map $g^*\operatorname{Forget}E\to\operatorname{Forget}E$ therefore preserves each HN term and induces compatible actions on all terms and quotients. They lift to $A_G$. This proves a FINITE HN filtration in $D_G$ with the same phases. For arbitrary bounded complexes first take the finitely many $A_G$ cohomology objects and concatenate/reorder their HN triangles; the usual phase-vanishing argument merges equal phases and gives the required decreasing filtration. Alternatively lift the canonical slicing truncations directly. The Hom-vanishing and shift axioms follow immediately from Forget, and the central-charge ray condition is inherited. [F1, F2, F3, step 4.1, algebra]

6.1 Fix the η witnessing local finiteness of P. An infinite strict subobject or quotient chain of a fixed object in $P_G((φ−η,φ+η))$ would forget to such a strict chain in the underlying interval category; conservativity ensures that a nonzero strict quotient cannot become zero. The latter has finite length. Hence the same η proves local finiteness. Finally any semistable E forgets to a semistable object, so $||v_G(E)||=||v(\operatorname{Forget} E)||≤C|Z_G(E)|$. [F1, F2, F3, step 5.1, algebra]

7.1 This proves the claimed support bound. No averaging of arbitrary stability conditions was used: G-invariance of the INPUT is indispensable. [F1, F2, F3, step 6.1, algebra]

8.1 If a triangulated equivalence $Φ:D\prime →D_G$ is constructed, transporting the slicing and composing the charge map with Φ transports all these verified axioms. This transport step is elementary; existence of Φ is a separate geometric/algebraic proof obligation. [F1, F2, F3, step 7.1, algebra]

9.1 For later classification, fix its semistable phase φ. Local finiteness makes P(φ) a finite-length abelian category: its exact chains are strict chains in a sufficiently short locally finite phase interval. Hom finiteness from F1 makes End(S)=C for every stable simple S, since every element of a finite-dimensional complex division algebra is scalar (apply its split minimal polynomial). The socle of an object is a finite direct sum of simples: finite sums stabilize in a finite-length category, and adding a simple not already contained has zero intersection with the existing semisimple sum. In particular a nonzero object has a nonzero socle. Every exact phase-preserving autoequivalence takes this canonical sum to the corresponding socle. These facts justify all uses of socles and Schur multiplicity spaces below. An induced stable E has a POLYSTABLE underlying object. Indeed its finite-length semistable underlying phase category has a nonzero socle (sum of its stable simple subobjects). That canonical socle is G-invariant, so stable simplicity in the equivariant phase forces it to be all E. Its stable summands form one G-orbit, and their multiplicity representation of the stabilizer is irreducible, with the usual projective cocycle if the stable object has no chosen linearization. Conversely these transitive irreducible equivariant polystable objects are equivariantly stable. For objects with specified honest linearizations the cocycle is trivial. This follows directly by taking any nonzero equivariant subobject and projecting onto the stable isotypic summands; Schur's lemma makes the surviving multiplicity spaces a stabilizer subrepresentation. [F1, F2, F3, step 8.1, algebra] ∎
