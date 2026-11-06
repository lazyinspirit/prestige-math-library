---
id: lem-f4-pointed-genus-one-curve-group-law
kind: lemma
title: A pointed genus-one curve has a regular group law over its ground field
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-elliptic-genus-one-fibrations
proof_strategy: direct
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-genus-one-canonical-bundle-trivial
  - cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
  - cor-rr-exact-high-degree-formula
  - thm-principal-divisor-degree-zero-proper-curve
  - thm-cartier-weil-divisors-curves-agree
  - cor-degree-descends-picard-curve
  - thm-line-bundle-rational-section-cartier-divisor
  - lem-riemann-roch-space-finite-dimensional
  - lem-proper-flat-cohomology-perfect-complex
  - lem-fibre-injective-map-flat-cokernel-noetherian-target
  - thm-proper-quasi-finite-is-finite
  - lem-quasi-finite-morphism-fibre-characterization
  - thm-finite-flat-modules-over-local-rings-are-free
  - thm-nakayama-lemma
  - lem-regular-local-regular-quotient-ideal-is-parameter-generated
  - lem-affine-local-dimension-residue-transcendence
  - def-smooth-morphism-to-field-classical
  - thm-smooth-morphisms-stable-base-change-composition
  - lem-proper-stable-base-change
  - lem-proper-stable-composition
  - lem-closed-immersion-proper
  - def-proper-morphism
  - def-separated-morphism-schemes
  - lem-closed-immersion-affine-quotient-and-base-change
  - def-abelian-variety-over-a-field
  - thm-global-functions-proper-integral-variety
  - lem-regular-local-domain-induction
  - thm-regular-local-rings-are-normal
  - lem-support-dimension-preserved-field-extension
dependency_roles:
  def-algebraic-curve-over-field: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  thm-genus-one-canonical-bundle-trivial: mathematical-premise
  cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two: mathematical-premise
  cor-rr-exact-high-degree-formula: mathematical-premise
  thm-principal-divisor-degree-zero-proper-curve: mathematical-premise
  thm-cartier-weil-divisors-curves-agree: mathematical-premise
  cor-degree-descends-picard-curve: mathematical-premise
  thm-line-bundle-rational-section-cartier-divisor: mathematical-premise
  lem-riemann-roch-space-finite-dimensional: mathematical-premise
  lem-proper-flat-cohomology-perfect-complex: mathematical-premise
  lem-fibre-injective-map-flat-cokernel-noetherian-target: mathematical-premise
  thm-proper-quasi-finite-is-finite: mathematical-premise
  lem-quasi-finite-morphism-fibre-characterization: mathematical-premise
  thm-finite-flat-modules-over-local-rings-are-free: mathematical-premise
  thm-nakayama-lemma: mathematical-premise
  lem-regular-local-regular-quotient-ideal-is-parameter-generated: mathematical-premise
  lem-affine-local-dimension-residue-transcendence: mathematical-premise
  def-smooth-morphism-to-field-classical: mathematical-premise
  thm-smooth-morphisms-stable-base-change-composition: mathematical-premise
  lem-proper-stable-base-change: mathematical-premise
  lem-proper-stable-composition: mathematical-premise
  lem-closed-immersion-proper: mathematical-premise
  def-proper-morphism: mathematical-premise
  def-separated-morphism-schemes: mathematical-premise
  lem-closed-immersion-affine-quotient-and-base-change: mathematical-premise
  def-abelian-variety-over-a-field: mathematical-premise
  thm-global-functions-proper-integral-variety: mathematical-premise
  lem-regular-local-domain-induction: mathematical-premise
  thm-regular-local-rings-are-normal: mathematical-premise
  lem-support-dimension-preserved-field-extension: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Elliptic Curves, second edition
      url: https://www.jmilne.org/math/Books/EC2.pdf
      locator: Chapter I, Proposition 4.10 and Remark 4.11, printed pp. 32–33; perfect-field discussion printed p. 36. The relative-family regularity argument is reconstructed locally.
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
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $F$ be a field and let $E/F$ be a smooth proper geometrically integral curve of genus one, with a specified point $O\in E(F)$. There are $F$-morphisms $m:E\times_F E\to E$ and $i:E\to E$ making $E$ a commutative group variety with identity $O$. They are uniquely characterized by the following rules over every field extension $F'/F$: $m(P,Q)$ is the unique point $R$ with $[R]=[P]+[Q]-[O]$ in the divisor-class group of $E_{F'}$, and $i(P)$ is the unique point with class $2[O]-[P]$. The construction commutes with field extension and pointed isomorphisms. In particular $E(F)$ is an abelian group, and $E$ with this law is an abelian variety. No algebraic closure of $F$, Picard-scheme representability, or previously given group structure is an assumption.

## Statement references

[Milne, Chapter I, Proposition 4.10 and Remark 4.11](https://www.jmilne.org/math/Books/EC2.pdf)

## Facts & Assumptions

**Given:** $F$, $E$, $O$, and the Axiom of Choice.

[F1] [[thm-genus-one-canonical-bundle-trivial]], [[cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two]], and [[cor-rr-exact-high-degree-formula]] imply that an invertible sheaf of degree $n>0$ on a smooth proper geometrically integral genus-one curve has $h^0=n$ and $h^1=0$. These assertions hold over every ground field. [[lem-riemann-roch-space-finite-dimensional]] gives vanishing in all degrees at least two, after the divisor dictionary below. [[thm-cartier-weil-divisors-curves-agree]] identifies invertible sheaves and divisor classes on the smooth curve, and [[thm-principal-divisor-degree-zero-proper-curve]] makes the degree independent of the representative.

[F2] [[lem-proper-flat-cohomology-perfect-complex]] supplies, for proper coherent cohomology with a base-flat coefficient sheaf over a Noetherian affine base, a bounded finite-projective computing complex compatible naturally with every algebra base change. It is finite free locally on the base.

[F3] [[lem-fibre-injective-map-flat-cokernel-noetherian-target]]: a map from a finite module into a base-flat module over a Noetherian local target is injective with base-flat cokernel if its residue-field-fiber map is injective.

[F4] [[lem-quasi-finite-morphism-fibre-characterization]] and [[thm-proper-quasi-finite-is-finite]] make a proper finite-type morphism with finite geometric fibers finite. [[thm-finite-flat-modules-over-local-rings-are-free]] makes its finite flat module locally free over a Noetherian base; [[thm-nakayama-lemma]] detects surjectivity by residue fields. [[lem-proper-stable-base-change]], [[lem-proper-stable-composition]], and [[lem-closed-immersion-proper]] supply the properness operations used here.

[F5] [[def-smooth-morphism-to-field-classical]] identifies smooth finite-type schemes with geometrically regular schemes. Products remain smooth by [[thm-smooth-morphisms-stable-base-change-composition]]. At a closed immersion of smooth $F$-schemes, [[lem-regular-local-regular-quotient-ideal-is-parameter-generated]] gives local equations as part of a regular parameter system; [[lem-affine-local-dimension-residue-transcendence]] computes the number of those equations from the difference of dimensions, at arbitrary scheme points.

[F6] [[def-abelian-variety-over-a-field]] defines a group variety by regular multiplication, identity and inversion satisfying the group identities as morphisms; a proper geometrically connected group variety is an abelian variety.

[F7] [[thm-global-functions-proper-integral-variety]] gives $H^0(E,\mathcal O_E)=F$ for proper geometrically integral $E$. [[lem-regular-local-domain-induction]] makes every regular local ring a domain. [[lem-support-dimension-preserved-field-extension]], applied to the structure sheaf, preserves the dimension of finite-type schemes under field extension.

[A1] [[def-axiom-of-choice]] is assumed, and [[thm-choice-implies-dependent-implies-countable-choice]] supplies the dependent choice needed in [F2]. The other suppliers retain their stated choice assumptions.

[F8] A curve over $F$ is a separated finite-type geometrically integral $F$-scheme of dimension one, with smoothness and properness as additional conditions ([[def-algebraic-curve-over-field]]). Proper morphisms are separated; a morphism is separated when its diagonal is a closed immersion; closed immersions remain closed after base change ([[def-proper-morphism]], [[def-separated-morphism-schemes]], [[lem-closed-immersion-affine-quotient-and-base-change]]). Therefore a section of a separated morphism is a closed immersion: it is the base change of the diagonal along the map determined by the section.

[F9] For every field extension $F'/F$, the base change $E_{F'}$ is smooth, proper, geometrically integral, and one-dimensional; [F5] gives regular local rings and [[thm-regular-local-rings-are-normal]] makes them integrally closed domains. Thus $E_{F'}$ is a normal proper curve, so [[cor-degree-descends-picard-curve]] applies. A nonzero global section of an invertible sheaf $L$ on integral $E_{F'}$ has nonzero generic value; [[thm-line-bundle-rational-section-cartier-divisor]] associates to it a Cartier divisor $D$ with $\mathcal O(D)\cong L$. In local trivializations the section is regular, so its orders at closed points are nonnegative; by [[thm-cartier-weil-divisors-curves-agree]] this gives an effective Weil divisor. Conversely, an effective divisor representing $L$ supplies its canonical section. The degree-descending corollary gives $\deg D=\deg L$.

## Proof

**Given:** [F1]–[F9], [A1], and the pointed curve.

1.1 The hypotheses needed after field extension follow from the available suppliers, rather than an assumption that the new field is algebraically closed. By [F7], $H^0(E,\mathcal O_E)=F$. Apply [F2] to $\mathcal O_E$ over $\operatorname{Spec}F$. Its computing complex and flatness of field extension imply $H^0(E_{F'},\mathcal O)=F'$ and $h^1(E_{F'},\mathcal O)=1$ for every field $F'/F$. By [F5] these extensions remain smooth. Over an algebraic closure $A$ of $F'$, their local rings are regular domains by [F7], so different irreducible components cannot meet. There are finitely many such components, since these schemes are Noetherian, so they are open and closed. But $H^0(E_A,\mathcal O)=A$ has no nontrivial idempotent, which excludes a nontrivial open-and-closed decomposition. Thus $E_A$ is integral. Its dimension is one by [F7], and properness is preserved by [F4]. Hence $E_{F'}$ is again a smooth proper geometrically integral genus-one curve, for every extension $F'/F$. [F2, F4, F5, F7, A1, algebra]

2.1 Over any such field $F'$, a degree-one invertible sheaf $L$ on $E_{F'}$ has a one-dimensional section space and no first cohomology by [F1]. By [F9], a nonzero section determines an effective divisor of degree one representing $L$. In the degree formula $\sum_x n_x[\kappa(x):F']=1$, all terms are nonnegative integers and each residue degree is a positive integer, so exactly one coefficient is $1$ at a point with residue field $F'$. This is one reduced $F'$-rational point. Multiplying the section by a nonzero scalar does not change its divisor; since $h^0(L)=1$, every nonzero section is such a scalar multiple. Hence each degree-one class has exactly one effective representative. [F1, F9, step 1.1, algebra]

3.1 We need a family version to obtain regularity, not only an operation on points. Let $T$ be a Noetherian $F$-scheme and $p:E_T\to T$ the projection. Let $L$ be invertible of degree one on every geometric fiber. It is coherent and flat over $T$, since $p$ is smooth. On an affine neighbourhood of any point of $T$, apply [F2] to $L$ and make its computing complex finite free. Over the local residue field its cohomology has dimension one in degree zero and vanishes in all other degrees by step 2.1. If any differential matrix has a unit entry, change bases and split off the two-term identity summand; the complex relation makes all entries to and from that summand zero after these operations. Repeat finitely until all remaining differential entries lie in the maximal ideal. The residual fiber complex has zero differentials, so its terms outside degree zero have rank zero and its degree-zero term has rank one. The same elementary cancellations hold on a neighbourhood of the chosen point. Thus $p_*L$ is invertible, higher cohomology vanishes, and $p_*L$ commutes with every base change, because the local computing complex is now a single free rank-one term. These identifications use the natural cohomology maps in [F2], so agree on overlaps. [F1, F2, F5, step 1.1, step 2.1, algebra, construct]

4.1 Consider evaluation $p^*p_*L\to L$. On any geometric fiber it is the nonzero section spanning the one-dimensional space from step 2.1, and hence multiplication by a nonzerodivisor on that integral fiber. Faithful scalar extension to an algebraic closure detects injectivity over the residue-field fiber. Apply [F3] to evaluation at every source stalk, with the base local ring at its image: the source is a rank-one finite module over the Noetherian target stalk and the target line bundle is base-flat. Evaluation is injective with base-flat cokernel. Tensor it with $L^{-1}$; its image is a locally principal ideal generated by a nonzerodivisor, so defines an effective Cartier divisor $D\subset E_T$. Its structure sheaf is flat over $T$, since it is locally a line-bundle twist of that cokernel. Every geometric fiber of $D$ is the degree-one zero divisor, hence one reduced rational point. The projection $D\to T$ is proper by [F4], is finite type, and has finite geometric fibers, so is finite by [F4]. Its finite flat algebra is locally free of rank one. Its unit map from $\mathcal O_T$ is an isomorphism on every residue field, and Nakayama makes it surjective. In rank-one local frames it is multiplication by a unit, hence an isomorphism. Therefore $D\to T$ is an isomorphism and $D$ is the graph of a unique morphism $T\to E$. This construction commutes with base change: the evaluation map does by step 3.1, and its flat cokernel makes its zero divisor commute with base change as well. [F3, F4, step 2.1, step 3.1, algebra, construct]

5.1 Take $T=E\times_F E$ and denote its two projection points by $P,Q$. The projection $E_T\to T$ is proper by base change from $E\to\operatorname{Spec}F$ [F4], hence separated by [F8]. Each of $P,Q,O$ defines a section of this projection. For any section $s:T\to E_T$, its image is the base change of the diagonal of $E_T/T$ along $(s\circ p,\operatorname{id}_{E_T})$, so it is a closed immersion by [F8]. These graphs are closed immersions of smooth $F$-schemes, with the same residue field in source and target at corresponding points. Their dimensions differ by one; [F5] gives local regular rings whose dimensions differ by one even at nonclosed points, and then gives a single regular parameter generating each graph ideal. Thus $L=\mathcal O_{E_T}(\Gamma_P+\Gamma_Q-\Gamma_O)$ is an actual invertible sheaf, of degree one on each geometric fiber. Steps 3.1–4.1 produce an $F$-morphism $m:T\to E$ with the required class rule. On $T=E$, use $\mathcal O_{E_T}(2\Gamma_O-\Gamma_P)$ to obtain an $F$-morphism $i:E\to E$ with the inverse class rule. The base-change property in step 4.1 shows that these are exactly the stated operations on points over every field extension. In particular, their construction takes place over $F$ itself. [F4, F5, F8, step 2.1, step 3.1, step 4.1, construct]

6.1 For every field extension, the map $P\mapsto[P]-[O]$ into the group of divisor classes of degree zero is injective. If $[P]-[Q]$ were principal for $P\ne Q$, a defining nonconstant rational function would belong to $H^0(E,\mathcal O(Q))$, which has dimension one by [F1] and contains the constants, a contradiction. The class formulas of step 5.1 give $[m(P,Q)]-[O]=([P]-[O])+([Q]-[O])$ and $[i(P)]-[O]=-([P]-[O])$. Associativity and commutativity of divisor-class addition, with this injection, prove associativity, commutativity, identity $O$, and both inverse identities on all points valued in all field extensions. No prior group law on $E$ is used. [F1, step 2.1, step 5.1, algebra]

7.1 The preceding identities are identities of scheme morphisms. To see this without any assumption about density of $F$-rational points, two morphisms from a reduced scheme $X$ to a separated scheme have a closed equalizer. If they agree on every residue-field point $\operatorname{Spec}\kappa(x)\to X$, the ideal of that equalizer maps to zero in every residue field. On each affine open its sections lie in every prime ideal, and hence are nilpotent; reducedness makes them zero. Thus the equalizer is all of $X$. Apply this argument to the products of $E$ occurring in the group identities. They are smooth and therefore geometrically regular and reduced by [F5]. Step 6.1 proves agreement at every field-valued point, including each residue-field point. The class rules also characterize $m$ and $i$ uniquely by the same argument. A pointed isomorphism preserves divisor classes, so intertwines the laws; field extension does too by step 4.1. Consequently [F6] makes $E$ a group variety, proper and geometrically connected, and hence an abelian variety. Its $F$-points form the asserted abelian group. [F5, F6, step 4.1, step 5.1, step 6.1, algebra] ∎
