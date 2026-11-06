---
id: lem-gts-very-general-k3-sections-of-the-fano-ladder-have-picard-rank-one
kind: lemma
title: Very general K3 sections in the specified Fano regimes have the primitive ambient Picard group
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- lem-gts-ample-divisor-relative-handles-and-integral-restriction
- thm-bertini-smooth-hyperplane-section
- thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
- thm-gts-gaussmanin-connection-and-griffiths-transversality
- thm-gts-cattanidelignekaplan-algebraicity-of-hodge-loci
- thm-cohomological-serre-spectral-sequence
- thm-mayer-vietoris-sequence-in-singular-homology
- lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence
- thm-poincare-duality-for-oriented-topological-manifolds
- lem-local-morse-sublevel-pair-is-a-handle-pair
- thm-baire-category-locally-compact-hausdorff
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 6
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-gts-ample-divisor-relative-handles-and-integral-restriction: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  thm-gts-gaussmanin-connection-and-griffiths-transversality: mathematical-premise
  thm-gts-cattanidelignekaplan-algebraicity-of-hodge-loci: mathematical-premise
  thm-cohomological-serre-spectral-sequence: mathematical-premise
  thm-mayer-vietoris-sequence-in-singular-homology: mathematical-premise
  lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence: mathematical-premise
  thm-poincare-duality-for-oriented-topological-manifolds: mathematical-premise
  lem-local-morse-sublevel-pair-is-a-handle-pair: mathematical-premise
  thm-baire-category-locally-compact-hausdorff: mathematical-premise
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties (Harvard revision, 2021)
    url: https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf
    locator: Theorem 2.14 and Andreotti–Frankel discussion, printed pp. 20–21 (web fulltext lines 1401–1431); Theorem
      2.19 and exponential-sequence proof, printed p. 23 (lines 1515–1534); §3.2, printed pp. 38–41 (lines 2355–2583),
      Theorem 3.3, Corollaries 3.4–3.7, Theorem 3.8 and Proposition 3.9. These exact ranges were read through the
      web PDF fulltext; direct download returned HTTP 403. Weighted monodromy is constructed locally.
---

## Statement

Assume AC. In each of the following two cases, a very general smooth surface S in the specified system has $Pic(S)=Z(A|S)$, integrally. Here very general means outside a countable union of proper closed algebraic subvarieties of the smooth-member parameter space.

(i) Y is a smooth connected complex projective threefold, A is ample, $Pic(Y)=ZA$ and $H^{2,0}(Y)=0$; L is VERY AMPLE and its smooth members are K3 surfaces; the system is |L|.

(ii) Y is a smooth degree-one del Pezzo threefold in the weighted normal form $\{w^2=z^3+f_4(x)z+f_6(x)\}$ in P(1,1,1,2,3), with $Pic(Y)=ZA$, $A=O_{Y}(1)$, $−K_{Y}=2A$, and $H^0(Y,2A)=\operatorname{span}\{x_i x_j,z\}$. The system is |2A|. Its general smooth members are double-plane K3 surfaces, and $(A|S)²=2$. This system is not assumed very ample.

In particular in either case every divisor D on such S satisfies (A|S)² divides D·(A|S). Application of (i) to a high-degree Fano ladder requires the actual very-ampleness and smooth-ladder supplier; the lemma does not infer very-ampleness from a Picard-number hypothesis or include excluded double-quadric regimes.

## Facts & Assumptions

**Given:** Exactly one of the two explicit geometric regimes in the Statement. The weighted normal form, full section system and Picard group are inputs in case(ii); its K3 and monodromy assertions are proved below. No Noether–Lefschetz theorem or irreducibility theorem for vanishing cohomology is assumed.

[F1] [[lem-gts-ample-divisor-relative-handles-and-integral-restriction]] gives the actual relative handle presentation for a smooth AMPLE divisor, including π1 isomorphism in dimension at least three and primitive integral H² restriction in dimension three. Its proof works without very-ampleness of that divisor.

[F2] [[thm-bertini-smooth-hyperplane-section]] applies to arbitrary basepoint-free characteristic-zero systems. [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] supplies Hodge decomposition. [[thm-gts-gaussmanin-connection-and-griffiths-transversality]] supplies holomorphic periods for the smooth projective family. The local differentiable triviality needed below is constructed by vector-field lifting.

[F3] [[lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence]] applies to the complex oriented normal bundles over the compact base curve. [[thm-mayer-vietoris-sequence-in-singular-homology]] and [[thm-poincare-duality-for-oriented-topological-manifolds]] give the displayed gluing and intersection duality. The latter is used on closed compact oriented manifolds. [[thm-cohomological-serre-spectral-sequence]] is used only for the hypothetical smooth K3 fibration over P1, where it has no degree-two outgoing differential.

[F4] [[lem-local-morse-sublevel-pair-is-a-handle-pair]] gives the compact-band real three-handle used after the explicitly proved holomorphic quadratic normalization. Its argument is not a vanishing-cycle or Picard–Lefschetz theorem; those statements are constructed below.

[F5] [[thm-gts-cattanidelignekaplan-algebraicity-of-hodge-loci]] is the actual proved CDK theorem for smooth projective families over smooth quasi-projective complex bases, applied at weight two. Its analytic prerequisites are not re-proved or changed here. [[thm-baire-category-locally-compact-hausdorff]] supplies Baire for the complex parameter open set.

[F6] [[def-axiom-of-choice]] is the ambient choice convention and implies the dependent/countable choice in F1,F4,F5. Singular homology and cohomology coefficients are explicitly Z or Q below. H² denotes cohomology, while $H_2$ denotes homology, also when plain-text expressions spell out the distinction.

## Proof

**Proof technique:** explicit relative handles, discriminant and local quadratic monodromy, then CDK and the integral index argument.

1.1 Apply F1 to a smooth member S: its ample line bundle is L in case(i) and 2A in case(ii). It gives the integral relative cells and primitive restriction described there; very-ampleness is not needed for this step. The weighted case's smooth K3 input follows by the following direct construction. For S avoiding $λ=0$, eliminate z to obtain $w²+g6(x)=0$. Smoothness makes the sextic branch curve smooth. The ordinary sextic $T={u^6+g6(x)=0}$ in P3 is smooth by its Jacobian, and F1 gives $π1(T)=π1(P3)=0$. Scaling u by μ3 has quotient S via $w=u³$ and has a nonempty fixed curve $u=0$. Perturb a loop of S off the branch curve and lift it to T; its endpoint differs by a deck element g. A path from the starting point to a fixed point, followed by the reverse of its g-translate, projects to a backtracking contractible loop with the same endpoint deck transformation. Removing that loop makes the lift close, so it contracts in T and its projection contracts the original loop. Thus S is simply connected. The double-plane canonical formula follows directly from the residue dx∧dy/w in the local equation; its transition degree is $−3+3=0$, so $K_{S}$ is trivial. The finite algebra $O_{P2}$ direct-sum $O_{P2}(−3)$ computes $H1(O_{S})=0$ by the projective-plane Čech complex. Connectedness follows from F1. Hence S is a K3 and $h20(S)=1$, without assuming a Fano simple-connectivity theorem or a double-plane Picard theorem. In our situation $H1(S;Z)=0$, so $H1(Y;Z)=0$. The Kähler decomposition gives $H1(O_{Y})=0$, and $H^{2,0}(Y)=0$ gives $H2(O_{Y})=0$. The exponential sequence consequently identifies Pic(Y) with H2(Y;Z) in COHOMOLOGY. Thus its generator $a=c1(A)$ is primitive. The surjection on integral HOMOLOGY above shows $h=a|S$ is primitive too: the primitive cohomology character a evaluates to 1 on some homology class, which lifts from S. No Picard-group rank argument has silently omitted a possible finite index. [given, F1, F2, F3, F4, F5, F6, algebra]

2.1 For later use the intersection form on H2(S;Q) in cohomology is nondegenerate, and $h²>0$. Define $V=h$ perpendicular. It is a nondegenerate rational subspace. The ambient rational H2 of Y is one-dimensional, by $Pic(Y)=ZA$ and $H20(Y)=0$. The holomorphic two-form of the K3 lies in $V_{C}$ and is nonzero. [given, F1, F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 For a basepoint-free ample system on Y, choose a general pencil with smooth connected base curve B. Smoothness follows from two successive characteristic-zero Bertini applications; connectedness follows from Section1 on a smooth member, since B is an ample curve there. Blow up B to get p:Z→Y and a projective morphism f:Z→P1. Each original member is unchanged as a surface: blowing up its Cartier base curve is the identity. This also identifies its fibre cohomology and polarization without an auxiliary resolution of the surface. [given, F1, F2, F3, F4, F5, F6, step 2.1, algebra]

4.1 The topological facts needed about this blowup are explicit. Replace a tubular rank-two complex disk bundle over B by the disk bundle of the tautological line over its P1 bundle. Their common outer boundary is the same sphere bundle. The Thom exact sequences, or the cellular decomposition of that P1 fibre, give [given, F1, F2, F3, F4, F5, F6, step 3.1, algebra]

5.1 H2(Z;Q) in $cohomology = p$*H2(Y;Q) direct-sum Q[E], [given, F1, F2, F3, F4, F5, F6, step 4.1, algebra]

6.1 where E is the exceptional divisor; no H1(B) term occurs in degree two. On a pencil fibre S, E restricts to the base divisor B, whose class is c1(L|S). Since L is a multiple of A, the image of H2(Z;Q) on S is precisely Qh. Also $H20(Z)=H20(Y)$: a holomorphic two-form on Z restricts away from E to Y minus B and extends across B by the coefficientwise Hartogs theorem on the smooth threefold. Pullback gives the inverse extension. The same Hartogs argument follows from the two-variable Cauchy integral on a polydisc, so birational invariance of H20 is not a separate premise. [given, F1, F2, F3, F4, F5, F6, step 5.1, algebra]

7.1 Suppose the pencil's only critical fibres have one ordinary quadratic singularity. For completeness a nondegenerate holomorphic critical point has local form z1²+z2²+z3². Solve $∂F/∂z1=0$ by the implicit-function theorem, shift to its graph, factor the remaining z1² coefficient, and take its nonvanishing holomorphic square root. The residual Hessian is its nondegenerate Schur complement; repeating gives the displayed form. Thus no holomorphic Morse normal-form theorem is assumed without its argument. [given, F1, F2, F3, F4, F5, F6, step 6.1, algebra]

8.1 Choose disjoint arcs from a regular value to all critical values in a disk D containing them. Proper submersions away from the critical points are locally differentiably trivial: a metric gives lifts of coordinate vector fields; properness makes their flows exist uniformly on each compact base chart, and a boundary collar makes the same construction relative to a boundary. Cut along the arcs and contract the regular base corridors. At each critical end the real function Re $F=Σ$ $Re(z_{i})²−Σ$ $Im(z_{i})²$ has index three. Its compact-band handle has core D3 and attaching sphere the real vanishing S2 in a neighbouring fibre. Accordingly f inverse(D) is obtained, up to relative homotopy, from a regular fibre S by adjoining these three-cells. In particular the kernel of H2(S;Q)→H2(f inverse(D);Q) is the span of their vanishing spheres $δ_{i}$. [given, F1, F2, F3, F4, F5, F6, step 7.1, algebra]

9.1 Over the complementary disk the fibration is a product. In Mayer–Vietoris for $Z=f$ inverse(D) union (S times D'), the intersection is S times S1. Since $H1(S)=0$, its degree-two homology is just H2(S), mapping by (q,−identity). Its cokernel injects into H2(Z) and identifies with H2(f inverse(D)). Consequently the kernel of H2(S)→H2(Z) is exactly $span{δ_{i}}$; the additional base two-class in H2(Z) makes no new relation in H2(S). By the preceding description of the image of H2(Z) in cohomology and perfect intersection duality, that kernel is exactly V. Hence the vanishing cycles span the ENTIRE nondegenerate primitive rational space V, not an unspecified vanishing subspace. [given, F1, F2, F3, F4, F5, F6, step 8.1, algebra]

10.1 The local monodromy is also explicit. In $Σz_{i}²=t>0$ write $z=x+iy$: $x·y=0$ and $|x|²−|y|²=t$. The map (u,y)↦sqrt(t+|y|²)u+iy identifies the local fibre with a disk cotangent bundle of S2. Its zero sphere δ has self-intersection −2: J identifies its normal with its tangent, but the complex orientation differs from tangent-then-normal orientation by one interchange, so its normal Euler number is −χ(S2). As t circles zero, the square-root continuation sends δ to its antipodal sphere, of degree −1. Trivialize the family outside the Milnor ball over the full parameter disk; its monodromy is the identity there. Excision therefore makes T(x)−x a multiple of δ. Intersection preservation and $Tδ=−δ$ force that multiple to be x·δ. Thus [given, F1, F2, F3, F4, F5, F6, step 9.1, algebra]

11.1 $Tδ(x)=x+(x·δ)δ$,    δ²=−2. [given, F1, F2, F3, F4, F5, F6, step 10.1, algebra]

12.1 This derives exactly the required Picard–Lefschetz reflection and its sign from the local model. [given, F1, F2, F3, F4, F5, F6, step 11.1, algebra]

13.1 Embed Y by the COMPLETE very ample system |L| in $P^N$. Its conormal incidence $C=\{(y,H):H\text{ contains the projective tangent space at }y\}$ is a projective bundle over the irreducible Y, irreducible of dimension N−1. Its image D in the dual projective space is the discriminant, irreducible and proper by Bertini. [given, F1, F2, F3, F4, F5, F6, step 12.1, algebra]

14.1 D is a hypersurface. Otherwise a general projective line avoids it, so the preceding pencil is a smooth K3 fibration Z→P1. Its degree-two Leray calculation gives a surjection H2(Z;Q)→H2(S;Q) in cohomology: the local system is constant since P1 is simply connected; $H1(S)=0$ eliminates the possible differential to H2(P1,R1), and $H3(P1)=0$ eliminates the next one. Equivalently use the cellular two-disk cover of P1 and the same obstruction calculation. Restriction is a morphism of the Kähler Hodge decompositions, so this surjection is incompatible with $H20(Z)=0$ and $H20(S)=C$. This proves nondefect rather than importing a classification of dual-defective varieties. [given, F1, F2, F3, F4, F5, F6, step 13.1, algebra]

15.1 The generic discriminant member has one quadratic singularity. The map C→D is generically finite and separable, hence its differential is an isomorphism at a generic point. Its kernel in the y direction is the kernel of the Hessian of the hyperplane section, so that Hessian is nondegenerate. Moreover a generic smooth point of D has only one contact point: a contact at y gives tangent space to D equal to the hyperplane of variations η with $η(y)=0$. Two distinct contact points would give two different tangent hyperplanes, because the embedding separates points, making the discriminant singular there. Thus there is a dense smooth open D° of members with precisely one quadratic singularity. Its complement has codimension at least two in the whole dual projective space. A general pencil meets only D°, transversely, and has the smooth base required in Section2. [given, F1, F2, F3, F4, F5, F6, step 14.1, algebra]

16.1 All its vanishing cycles are conjugate, up to sign, under monodromy of the full smooth-member family. The smooth dense D° of an irreducible complex algebraic variety is path connected. Move a small positively oriented normal circle along such a path in its tubular neighbourhood; after joining it to a fixed smooth-member base point these meridians are conjugate. Their reflections have one-dimensional minus-one eigenspaces Qδ, so conjugation transports δ to ±δ. This proves the conjugacy assertion without assuming that a pencil's own critical values are interchangeable. [given, F1, F2, F3, F4, F5, F6, step 15.1, algebra]

17.1 Now use the separate weighted normal form in the Statement. The second-Veronese map of P(1,1,1,2) identifies it with the projective cone C over the Veronese P2, with coordinates ($x_{i}$ $x_{j},z$). The map φ:Y→C forgetting w is finite of degree two. Its vertex has a single preimage p, since at $x=0$ one has $w²=z³$. Its branch surface is the image of $R={w=0}$. [given, F1, F2, F3, F4, F5, F6, step 16.1, algebra]

18.1 R avoids the vertex: $x=0$ would give $z³=0$, impossible in projective coordinates. It is smooth, because on $w=0$ the smoothness of Y is exactly the nonvanishing of d(z³+f4z+f6) on the smooth part of the cone. It is connected and hence irreducible: it is the smooth ample divisor of the section w of 3A, so Section1 makes H0(R;Z)→H0(Y;Z) an isomorphism. The restriction φ|R is a closed embedding onto its smooth branch surface in P6; it is the explicit second-Veronese closed embedding of the weighted cone restricted away from its vertex. [given, F1, F2, F3, F4, F5, F6, step 17.1, algebra]

19.1 Also $H20(Y)=0$. The weighted polynomial Čech complex has no intermediate cohomology $H^q(P(1,1,1,2,3),O(k))$ for $0<q<4$: separate it by Laurent monomials, each of which gives the simplex complex on its negative-coordinate set and contributes only at the extremes. The hypersurface sequence $0→O(−6)→O→O_{Y}→0$ therefore gives $H1(O_{Y})=H2(O_{Y})=0$; Kähler conjugation gives $H20(Y)=0$. The anticanonical system is basepoint free and its sections are λz+q2(x). It maps Y by φ. Let $D_{v}={λ=0}$, a HYPERPLANE in its parameter P6. Every member there is singular at p. In the chart $z=1$ choose the local branch w near 1 of $w²=1+f4(x)+f6(x)$. The weighted μ2 chart interchanges w near1 and w near−1, so this branch is an honest smooth coordinate chart at p with coordinates x. The section is EXACTLY λ+q2(x). A generic member of $D_{v}$ therefore has one quadratic singularity at p. [given, F1, F2, F3, F4, F5, F6, step 18.1, algebra]

20.1 Every other singular member is a hyperplane tangent to R. Away from R and p the double cover is a local isomorphism. A hyperplane with λ≠0 has nonzero derivative along the cone's z direction, so it is smooth there. At R the differential of the double cover has image T R; the singularity condition is exactly tangency of the hyperplane to that embedded surface. Consequently the full discriminant is $D_{v}$ union $D_{R}$, where $D_{R}$ is the image of the irreducible conormal incidence of R. [given, F1, F2, F3, F4, F5, F6, step 19.1, algebra]

21.1 These are distinct. At a point of R with 3z²+f4(x)≠0, the vertical cone direction is not tangent to R, so some tangent hyperplane to R has λ≠0. Such a point exists: the irreducible polynomial defining R, cubic in z, cannot divide its nonzero degree-two z derivative in characteristic zero. Thus $D_{R}$ is not contained in $D_{v}$. [given, F1, F2, F3, F4, F5, F6, step 20.1, algebra]

22.1 $D_{R}$ is a hypersurface. If it had codimension at least two, a general pencil would avoid it and have exactly one singular fibre, its transverse intersection with $D_{v}$. That fibre has the single quadratic singularity at p just calculated. Its monodromy would be a nontrivial reflection, since $δ_{v}²=−2$. But the base P1 minus a single critical value is simply connected, so its monodromy is the identity. This contradiction proves the assertion. [given, F1, F2, F3, F4, F5, F6, step 21.1, algebra]

23.1 The generic $D_{R}$ member is again one quadratic singularity. Its conormal map is generically finite/separable, and the same tangent-space argument as in Section3 gives one contact point with nondegenerate tangential Hessian on R. Take a generic contact away from $3z²+f4=0$, and λ≠0. Locally the cover is $v=w²$ with $R={v=0}$; the coefficient of v in the hyperplane equation is nonzero, because its value on the vertical cone direction is λ. The local Hessian on Y is the nondegenerate two-variable tangential Hessian plus a nonzero w² term. Thus it is nondegenerate in three variables. The dense nodal $D_{R}°$ is irreducible/path connected, so these cycles are conjugate under the smooth-member family, exactly as before. A general $D_{v}$ member is not in $D_{R}$ and has no further singularity. [given, F1, F2, F3, F4, F5, F6, step 22.1, algebra]

24.1 A general anticanonical pencil now has smooth connected base, all critical fibres quadratic, and EXACTLY ONE critical value from $D_{v}$. All other critical values come from $D_{R}°$. Smooth members are K3 by the geometry input and adjunction; their primitive polarization is A|S, with square $2A³=2$. Section1 applies because 2A is ample, even though it is not very ample. Thus the same integral primitive restriction conclusion and the thimble spanning V from Section2 apply here. [given, F1, F2, F3, F4, F5, F6, step 23.1, algebra]

25.1 Let W be the span of the cycles $δ_{r}$ from $D_{R}°$. Each corresponding reflection acts as the identity on V/W and preserves W. The global relation of meridians in the pencil is [given, F1, F2, F3, F4, F5, F6, step 24.1, algebra]

26.1 $T_{v}$ times $product(T_{r})=identity$. [given, F1, F2, F3, F4, F5, F6, step 25.1, algebra]

27.1 It follows that $(T_{v}−identity)V⊂W$. In particular $−2δ_{v}=(T_{v}−identity)δ_{v}$ belongs to W. Thus $δ_{v}$ itself belongs to W over Q. Since ALL cycles span V by Section2, the conjugate ramification cycles ALONE span V. This is why the vertex hyperplane does not force an extra generic Picard class. Neither irreducibility of the full two-component discriminant nor an unjustified transitivity between its components is asserted. [given, F1, F2, F3, F4, F5, F6, step 26.1, algebra]

28.1 In each branch we have a set of conjugate vanishing cycles spanning the nondegenerate space V and reflections $Tδ(x)=x+(x·δ)δ$. If a nonzero rational monodromy-invariant subspace W⊂V were orthogonal to every cycle, nondegeneracy and spanning would force $W=0$. Otherwise choose w∈W with w·δ≠0. Then (Tδ−identity)w is a nonzero multiple of δ, so δ∈W. Monodromy conjugacy puts every chosen cycle in W, and they span V. Hence $W=V$. This proves irreducibility directly from the constructed reflections. [given, F1, F2, F3, F4, F5, F6, step 27.1, algebra]

29.1 Consider a flat integral class γ not in Qh on a simply connected smooth parameter chart. If it were type (1,1) on an open set, its period against a local holomorphic two-form would vanish there. The holomorphic identity theorem continues that vanishing along every path on the universal cover of the smooth parameter locus. Project γ rationally to V by subtracting (γ·h)/(h²)h. Its nonzero monodromy orbit would therefore consist of (1,1) classes at the reference fibre. Its rational span is an invariant nonzero subspace, hence V by irreducibility. This would make V entirely (1,1), contradicting its nonzero (2,0) line. No such class has an open Hodge locus. [given, F1, F2, F3, F4, F5, F6, step 28.1, algebra]

30.1 Apply the ACTUAL `thm-gts-cattanidelignekaplan-algebraicity-of-hodge-loci` to the universal smooth divisor family over this smooth quasi-projective open parameter space, with weight two and $p=1$. It makes the loci of additional integral (1,1) classes a countable union of closed algebraic subvarieties. Every component is proper by the preceding argument. Baire on the complex parameter space shows their complement is dense and nonempty; equivalently this is the very-general complement of countably many proper closed algebraic loci. At a point of that complement the rational Picard space is Qh. [given, F1, F2, F3, F4, F5, F6, step 29.1, algebra]

31.1 Finally on a K3 the exponential sequence and $H1(O)=0$ identify Pic with the integral (1,1) classes in its torsion-free H2. Since Section1 proved h primitive, Qh intersect $H2(S;Z)=Zh$. Hence $Pic(S)=Zh$, integrally. In particular every divisor D satisfies h² divides D·h, the exact divisibility interface requested by the curve-bound assembly; rank at least one alone would not have supplied it. [given, F1, F2, F3, F4, F5, F6, step 30.1, algebra] ∎
