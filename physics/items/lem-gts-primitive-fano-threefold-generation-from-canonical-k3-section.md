---
id: lem-gts-primitive-fano-threefold-generation-from-canonical-k3-section
kind: lemma
title: Primitive Fano threefold generation from a canonical K3 section
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
- lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution
- thm-grothendieck-riemann-roch-for-projective-morphisms
- thm-riemann-roch-for-smooth-projective-surfaces
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- thm-hodge-index-theorem-for-smooth-projective-surfaces
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- thm-bertini-smooth-hyperplane-section
- thm-riemann-roch-euler-characteristic-curve
- thm-serre-duality-curves-vector-bundles
- lem-normalization-lowers-arithmetic-genus-delta
- thm-integral-closure-finite-finite-type-domain-over-field
- thm-auslander-buchsbaum-formula
- thm-auslander-buchsbaum-serre-regularity-criterion
- def-axiom-of-choice
dependency_roles:
  lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-riemann-roch-for-smooth-projective-surfaces: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-riemann-roch-euler-characteristic-curve: mathematical-premise
  thm-serre-duality-curves-vector-bundles: mathematical-premise
  lem-normalization-lowers-arithmetic-genus-delta: mathematical-premise
  thm-integral-closure-finite-finite-type-domain-over-field: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Mella, Existence of good divisors on Mukai varieties
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 2.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 3
---

## Statement

Assume AC. Let $Y$ be a smooth connected projective complex threefold, let $A$ be ample Cartier with $-K_Y=A$ and $\operatorname{Pic}(Y)=\mathbb ZA$, and suppose that a general member $S\in|A|$ is an integral normal canonical surface. Here canonical means that the pullback of a local generator of its invertible dualizing sheaf has nonnegative exceptional divisor orders on a resolution. Then $A$ is globally generated, so a general fundamental surface is smooth. Its degree $A^3$ is a positive even integer; the conclusion includes degree two and makes no low-degree Picard-one assertion for its K3 surfaces.

## Facts & Assumptions

**Given:** Exactly the smooth Fano threefold, primitive Picard group and canonical general-section hypothesis of the Statement. This is an implication from the exact canonical-entry supplier; it does not assume a smooth K3 section in advance.

[F1] [[thm-grothendieck-riemann-roch-for-projective-morphisms]], [[thm-riemann-roch-for-smooth-projective-surfaces]] and [[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]] give all line/bundle Euler and duality identities. [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] gives the negative-definite orthogonal subspace and degree-square bounds.

[F2] [[lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution]] gives the actual crepant projective minimal resolution of a Cartier canonical surface and R1piO=0. [[lem-gts-log-adjoint-vanishing-on-snc-pairs]] supplies empty-boundary nef-big adjoint vanishing. These prove the K3 resolution hypotheses below.

[F3] [[thm-bertini-smooth-hyperplane-section]] is used only after actual generation is proved. [[thm-riemann-roch-euler-characteristic-curve]] and [[thm-serre-duality-curves-vector-bundles]] give fibre Riemann–Roch. [[lem-normalization-lowers-arithmetic-genus-delta]] shows an integral singular curve has arithmetic genus at least one. [[thm-integral-closure-finite-finite-type-domain-over-field]] supplies the finite image normalization used in the tangent-section argument.

[F4] [[thm-auslander-buchsbaum-formula]] and [[thm-auslander-buchsbaum-serre-regularity-criterion]] make saturated rank-one kernels locally free on a smooth surface. [[def-axiom-of-choice]] is inherited from these suppliers. The point-Serre extension, nef reflections and image argument are constructed here.

## Proof

1.1 Choose a general canonical S as in the hypothesis. Cartier adjunction gives $K_S=O_S$. Empty-boundary adjoint vanishing on Y gives $H1(O_Y)=H2(O_Y)=0$; the sequence $0→K_Y→O_Y→O_S→0$ and Serre duality give $H1(O_S)=0$. F2 therefore supplies a projective crepant resolution pi:T→S with $K_T=O_T$ and $H1(O_T)=0$. Set $L=\pi *(A|S)$, $d=L²=A³$. It is a nef-big pullback with negative-definite exceptional null curves. Surface RR makes d positive and even, hence $d\ge 2$. The following construction applies on this actual smooth resolution. [F1, F2, F3, F4, given, construct]

2.1 Let T be a smooth projective surface with $K_T=O_T$ and $H1(O_T)=0$. Let L be nef and big Cartier, $d=L²\ge 2$. Assume L is the pullback of an ample line bundle on a normal surface under a birational contraction π. Thus its degree-zero curves are precisely finitely many exceptional curves, with negative-definite intersection matrix. The empty-boundary nef-big vanishing supplier gives H1(L)=0. The surface RR identity and Serre duality imply that every line bundle N satisfies χ(N)=2+N²/2. In particular squares are even and a square-zero class of positive L-degree is effective: χ=2 and the negative class cannot be effective. [F1, F2, F3, F4, step 1.1, construct]

3.1 If evaluation fails at a point z of T, the exact sequence $0→I_z L→L→L_z→0$ and H1(L)=0 yield a nonzero Serre extension $0→O_T→V→I_z$ L→0. Its local extension class generates $\operatorname{Ext}1(I_z,O_T)$, so its middle term is a bundle: in regular parameters (u,v), the presentation a e0+v e1−u e2=0 has a a unit. It has rank two, c1(V)=L and c2(V)=1. [F1, F2, F3, F4, step 2.1, construct]

4.1 Define ordinary L-slope using the nef Cartier intersection. If V were stable for this slope, the kernel/image slope argument would give Hom(V,V)=C; $K_T=O$ gives h2(End V)=1 and hence $χ(\operatorname{End}V)\le2$. But RR gives $χ(\operatorname{End}V)=8+d-4=d+4\ge6$. Thus there is a saturated rank-one subsheaf M of L-slope at least the slope of V. On a smooth surface this saturated subsheaf is a line bundle, with torsion-free quotient $I_W$ N and $N=L−M$. [F1, F2, F3, F4, step 3.1, construct]

5.1 The map M→V cannot land in $O_T$, because $LM\ge d/2>0$ and L nef excludes a nonzero section of −M. Projection gives a nonzero section of $I_z$ N. Hence N is a nonzero effective divisor containing z. Put $a=LN\ge 0$ and $q=N²$. Chern additivity and Hodge index give $q\ge a−1$,       $q\le a²/d$,       $a\le d/2$. [F1, F2, F3, F4, step 4.1, construct]

6.1 If $a=0$, negative definiteness on the exceptional locus makes $q<0$, while the first inequality and evenness give $q\ge 0$. This is impossible. If $0<a<d/2$, then $q<a/2$, so $a−1<a/2$, giving $a=1$ and $q=0$. If $a=d/2$, then $d/2−1\le q\le d/4$; for $d\ge 4$ there is no even integer in this interval; at $d=2$ the only possibility is again $a=1$ and $q=0$. Thus necessarily LN=1,       N²=0,       N effective. [F1, F2, F3, F4, step 5.1, construct]

7.1 We next turn N into a nef divisor without changing its L-degree or square. If an exceptional irreducible curve E has $NE<0$, then E²=−2: $K_T=0$ and adjunction give E²=2p_a(E)−2, and negative definiteness forces $p_a(E)=0$. Reflect N to N'=N+(NE)E. This has square zero and L-degree one. RR and the positive L-degree make N' effective. Its intersection with any fixed ample divisor drops by the positive integer −(NE)(ample·E). Repeat until all exceptional intersections are nonnegative. The process terminates since all resulting effective nonzero divisors have positive integral ample degree. [F1, F2, F3, F4, step 6.1, construct]

8.1 Call the result D. Every nonexceptional component has positive integral L-degree, and LD=1. Thus there is exactly one such component C, with coefficient one; write $D=C+B$, B effective exceptional. If $DC<0$, adjunction and Hodge give C²=−2 and BC=0 or1. But D²=0 would then give $B²=2−2BC\ge 0$, impossible for nonzero exceptional B, and $B=0$ would give D²=−2. Thus $DC\ge 0$. A curve not in D has nonnegative intersection with D, and every exceptional component was treated by the reflection process. Therefore D is nef, D²=0 and LD=1. [F1, F2, F3, F4, step 7.1, construct]

9.1 RR gives $h0(D)\ge 2$. Write the complete system as movable part P plus fixed part B. Nefness gives DP=DB=0; two general members of |P| give $P²\ge 0$, while Hodge in the orthogonal complement to a nef isotropic vector gives P numerically proportional to D, and hence P²=PB=B²=0. Since P is nonzero and movable, LP is a positive integer: LP=0 would put its class in the negative-definite exceptional subspace despite $P²\ge 0$. Thus LP=1=LD and LB=0. The effective exceptional B has B²=0, so negative definiteness forces $B=0$. Thus there is no fixed part. Two general members have intersection zero, so there are no base points. The connected-fibre factorization gives a morphism f:T→P1, because $H1(O_T)=0$ excludes positive genus for its base. Its primitive fibre E is nef of square zero. Since LD=1, $D=E$ and LE=1. [F1, F2, F3, F4, step 8.1, construct]

10.1 We have proved the exact criterion needed below: failure of global generation of a nef-big pullback L of positive square (necessarily at least two) gives a nef elliptic pencil of L-degree one. No length-two criterion or classification of canonical K3 singularities is used. [F1, F2, F3, F4, step 9.1, construct]

11.1 For f:T→P1 and LE=1, the generic fibre is a smooth genus-one curve and L has degree one on it, so its space of sections has dimension one by curve RR/Serre. Hence $f_*L$ is a rank-one torsion-free sheaf on the smooth curve P1, and so is $O_P1(a)$ for an integer a. All sections of L come from this sheaf. The complete rational map |L| therefore factors through f and the complete system |O(a)|. Since nef-big vanishing and RR give h0(L)=d/2+2, we have $a=d/2+1\ge 2$. Its image is the rational normal curve of degree a in $P^{a}$. This conclusion allows fixed exceptional divisors; it does not require their classification. [F1, F2, F3, F4, step 10.1, construct]

12.1 Now assume Pic(Y)=ZA and $d=A³\ge 2$. Every member of |A| is integral and reduced: any prime divisor has class kA with $k>0$ by intersection with A², so a decomposition of a member would express 1 as a sum of at least two positive integers. The same argument excludes a fixed divisorial component as soon as dim|A|>0. [F1, F2, F3, F4, step 11.1, construct]

13.1 The exact sequence for S and $H1(O_Y)=0$ identifies H0(Y,A)/C s with H0(S,A|S)=H0(T,L). Suppose |A| has a base point. If its restriction to a general S were generated, that point would not be a base point upstairs, since every base point lies on S and restriction is surjective. Thus L fails generation, and section 3 applies. Put $a=d/2+1$; the rational image Z of Y under the complete |A| lies in $P^{a+1}$, and its general hyperplane section is the rational normal curve of degree a supplied by S. [F1, F2, F3, F4, step 12.1, construct]

14.1 Here dim $Z=2$. Dimension three would make the image of a general divisor S a surface, contrary to section 3. Dimension one would make a general hyperplane inverse image a sum of at least two nonempty fibres because a nondegenerate curve in $P^{a+1}$ has degree at least $a+1>1$, contradicting integrality of every member of |A|. [F1, F2, F3, F4, step 13.1, construct]

15.1 We record the elementary geometric contradiction for such a surface image. Let ν:Zbar→Z be its normalization and $Q=ν_*O_{\overline Z}/O_Z$. A general hyperplane avoids the finite singular set of the normal surface Zbar and all zero-dimensional associated points of Q, and its equation is a nonzerodivisor on every one-dimensional component of Q. Restricting the normalization exact sequence then embeds its hyperplane section into the smooth hyperplane section of Zbar. In particular that section is reduced. Its support is the rational normal curve, hence it is exactly that smooth normal curve; its normalization is an isomorphism. The restricted Q is zero. Consequently Q has zero-dimensional support, and Z is normal away finitely many points. Normal surfaces are Cohen–Macaulay. Every hyperplane avoiding those finitely many nonnormal points therefore cuts a pure one-dimensional scheme without embedded components. The hyperplane Euler polynomial is constant in the choice of hyperplane, so every such section has arithmetic genus zero. [F1, F2, F3, F4, step 14.1, construct]

16.1 Choose a hyperplane tangent to Z at a general smooth point. It cuts a curve singular at that point. We may choose it to contain no fixed curve omitted by the rational image of Y: a dominant rational image contains a nonempty open subset, and there are only finitely many irreducible curves in its complement. No fixed curve lies in every tangent hyperplane of a nondegenerate nonplanar surface. Indeed its linear span would contain a line lying in every tangent plane; projection from that line would have zero differential everywhere and hence be constant in characteristic zero, forcing the surface into a plane. [F1, F2, F3, F4, step 15.1, construct]

17.1 We may also choose the tangent hyperplane to avoid every nonnormal point. The only possible obstruction would be a point o lying in every tangent hyperplane. In that case Z is a cone with vertex o: in coordinates $o=[1:0:...:0]$, all tangent spaces contain the radial direction, so the homogeneous ideal is stable under ∂/∂x0; in characteristic zero its coefficient polynomials in x0 also lie in the ideal, and the ideal is extended from the other variables. A general hyperplane section identifies its base with the rational normal curve. Its cone is normal and Cohen–Macaulay: the homogeneous coordinate ring is the a-th Veronese subring of C[u,v], with one polynomial vertex variable; the semigroup of nonnegative pairs with sum divisible by a is saturated in its group, so the ring is integrally closed. Thus such a point is not nonnormal after all. [F1, F2, F3, F4, step 16.1, construct]

18.1 The chosen tangent section has no embedded points and arithmetic genus zero. It cannot be integral and reduced, since normalization of an integral singular curve gives arithmetic genus at least one. It therefore has at least two curve components or a component of multiplicity at least two. None of these components is omitted from the rational image, by the choice just made. On the graph of the rational map, their inverse images give distinct effective divisors on Y, or a divisor occurring with multiplicity at least two. The corresponding member of |A| is therefore not integral and reduced, the required contradiction. [F1, F2, F3, F4, step 17.1, construct]

19.1 Hence |A| is globally generated. Ordinary characteristic-zero Bertini gives a smooth integral general S∈|A|. For $d\ge 6$ the existing primitive-K3 embedding bridge and normal-generation lift then give the required ambient very ample system. For $d=2$ or4 global generation and the smooth ladder already suffice for the classical BN arithmetic; no low-degree K3 Picard-one assertion is used. [F1, F2, F3, F4, step 18.1, construct] ∎

## Remarks

Research-only source candidate. The canonical general-section premise must come from the actual lc-centre/threshold proof. No Saint-Donat, minimal-degree classification, ambient Fano classification, Weil-factoriality or Noether–Lefschetz theorem is invoked. Full retained Mella9705012v1 was read for the problem; the present proof does not claim additional external reading or mathematical acceptance.
