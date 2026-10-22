---
id: lem-ptfa-subgroup-scalar-extension-preserves-blanchfield-self-pairings
kind: lemma
title: PTFA subgroup extension preserves nonzero Blanchfield self-pairings
status: draft
origin: session
deps: [lem-subgroup-group-ring-extension-is-faithfully-flat-and-preserves-fraction-quotients, lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions, lem-ore-localization-is-flat-and-detects-module-torsion, lem-involutive-twisted-chain-duals-realize-local-coefficient-duality, lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction, lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds, thm-compact-oriented-manifold-local-coefficient-duality-in-zf, def-poly-torsion-free-abelian-group]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Equation4.6 and the self-pairing comparison, printed page15
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and L2-signatures
      url: https://arxiv.org/pdf/math/9908117
      locator: Section2.1, coefficient Bockstein-duality linking form
---

## Statement

Let $k$ be a commutative field, let $G$ be PTFA and let $H\le G$. Put $A=k[H]$, $B=k[G]$ and let $F\subseteq K$ be their Ore fraction division rings, with the compatible standard involutions fixing $k$. Let $M$ be a closed oriented three-manifold, with a supplied homomorphism $\pi_1(M_j)\to H$ on each component. Use the canonical based coefficient systems, with base vector $1$ and the standard transported Hermitian structure. Suppose $H_1(M;F)=0$.

Then $H_1(M;K)=0$, and there is the natural isomorphism
$$H_1(M;B)\cong H_1(M;A)\otimes_A B.$$
The maps $x\mapsto x\otimes1$ are injective. The coefficient Bockstein, oriented duality and evaluation define linking pairings $B_A$ with target $F/A$ and $B_B$ with target $K/B$, and their values satisfy
$$B_B(x\otimes1,y\otimes1)=j(B_A(x,y)),\qquad j:F/A\hookrightarrow K/B.$$
In particular a nonzero self-pairing remains nonzero after subgroup extension. Neither pairing is asserted nonsingular without its additional coefficient hypotheses. No choice principle is assumed.

## Facts & Assumptions

**Given:** The field, groups, closed oriented manifold, based coefficient homomorphisms and vanishing in the Statement.

[F1] Subgroup group-ring extension is exact and faithful, commutes with arbitrary chain homology, and has a split unit on modules. Its division-fraction inclusion has $F\cap B=A$, so $j:F/A\to K/B$ is an injective $A$-bimodule map. [[lem-subgroup-group-ring-extension-is-faithfully-flat-and-preserves-fraction-quotients]]

[F2] PTFA group rings over $k$ have their two-sided Ore fractions and compatible standard involutions. Ore localization is exact on arbitrary chain complexes and annihilates precisely the elements having a nonzero right annihilator. [[lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions]], [[lem-ore-localization-is-flat-and-detects-module-torsion]]

[F3] Intrinsic dual cochains have the unitary conjugate-chain model. Closed cap duality identifies their degree-two cohomology with conjugate degree-one homology. The one-vertex model and exact natural low-degree Bockstein require no infinite quotient-fiber lifting. [[lem-involutive-twisted-chain-duals-realize-local-coefficient-duality]], [[thm-compact-oriented-manifold-local-coefficient-duality-in-zf]], [[lem-compact-manifold-twisted-singular-chains-admit-one-vertex-reduction]], [[lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds]]

[F4] A finite subnormal series is the defining PTFA data. [[def-poly-torsion-free-abelian-group]]

## Proof

1.1 Intersect a PTFA series of $G$ with $H$. Each successive intersection is normal in the next, and its quotient embeds in the corresponding torsion-free abelian quotient of $G$. Subgroups of a torsion-free abelian group are torsion-free and abelian, directly from the definitions. Thus $H$ is PTFA, without choosing a global transversal. By [F2] both group rings have the asserted fractions and involutions. Apply [F1] to identify $F$ with its subring in $K$ and obtain the injective map $j$. The inclusions preserve involution because they agree on every group element and on $k$, and the inverse of a fraction denominator is forced in both rings. [F1, F2, F4, given, construct, algebra]

2.1 On a connected component use the finite-atlas based paths in [F3] for compatible fiber frames of all four coefficient systems. Their singular complexes are literally related by tensor base change on those generators. Hence [F1] gives $H_1(M;B)=H_1(M;A)\otimes_A B$, with the split injective unit asserted there. By [F2], vanishing over $F$ means that every $x\in H_1(M;A)$ has $xa=0$ for some nonzero $a\in A$. The composite functor $-\otimes_A B\otimes_B K$ is exact by [F1, F2], and therefore commutes with chain homology. Every such $x$ dies after tensoring with $K$, since $x\otimes z=(xa)\otimes a^{-1}z=0$. Thus $H_1(M;K)=0$. The same localization criterion says both first homology modules in the Statement are entirely torsion over their respective coefficient rings. [F1, F2, F3, step 1.1, construct, algebra]

3.1 For either pair $(A,F)$ or $(B,K)$, the coefficient Bockstein $\beta:H^1(\operatorname{Hom}(C,F/A))\to H^2(\operatorname{Hom}(C,A))$ is an isomorphism, with the analogous notation for $(B,K)$. Indeed degree-two cohomology with values in the division ring is zero by closed duality and the proved first-homology vanishing. Its degree-one cohomology is zero by the one-vertex model: over the division ring $d_1$ has image zero or the whole degree-zero term. In the first case every degree-one cycle is a boundary; in the second split $d_1$ using one preimage of $1$, and a dual cocycle is a coboundary because it vanishes on $\ker d_1=\operatorname{im}d_2$. The exact coefficient segment in [F3] then proves $\beta$ is an isomorphism. Define $B_A$ by inverse duality, then $\beta_A^{-1}$, then evaluation, and define $B_B$ by the same procedure. This requires no inverse evaluation map, and hence asserts no unjustified general nonsingularity. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 Coefficient inclusion gives actual morphisms between the two cochain coefficient sequences $A\to F\to F/A$ and $B\to K\to K/B$. On dual cochains the extension is explicit: if $f:C_A\to F/A$, set $f_B(c\otimes b)=j(f(c))b$, and use the identical formula for $A\to B$ and $F\to K$. Right-linearity of $f$ and the $A$-bimodule identity for $j$ make it balanced; the formula commutes with all differentials. The local cochain version is the same map on supplied simplex frames. The Bockstein is natural by [F3], so these maps commute with $\beta_A,\beta_B$. Cap duality also commutes with coefficient inclusion, by its finite simplex-and-transport formula using the same orientation class. Its unitary dual identifications commute because the base vector and standard form are the specified extensions of each other. No independent arbitrary gauge change is made. [F1, F3, step 1.1, step 3.1, construct, algebra]

5.1 If $\nu_A$ is the inverse-Bockstein class associated by duality to $\bar x$, step 4.1 sends it to the inverse-Bockstein class associated to $\overline{x\otimes1}$, because $\beta_B$ is an isomorphism. Evaluating that cochain class on $y\otimes1$ gives exactly $j(\nu_A(y))$ by the displayed extension formula. This proves the stated value identity. Setting $y=x$ and using the injectivity of $j$ shows that a nonzero self-pairing cannot become zero. No nonsingularity theorem has entered this argument. [F1, F3, step 3.1, step 4.1, construct, algebra]

6.1 A compact manifold has finitely many connected components, so apply the construction to each with only finitely many base-fiber data. Chains, Bockstein maps and cap classes split over that finite list, and the linking pairings are their orthogonal sum. Empty $M$ gives zero modules and the unique zero pairing. All potentially infinite cochain constructions above are actual formula maps on supplied whole cochains; the only Bockstein lifting is the already proved finite-generator construction of [F3]. The Ore annihilator and denominator arguments use one finite expression at a time. Thus all stated subgroup, field and topological scopes are proved without a choice axiom. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
