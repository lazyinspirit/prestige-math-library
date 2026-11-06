---
id: thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities
kind: theorem
title: Algebraic stable-map descendants and deformation/splitting identities
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor
  - def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone
  - def-gts-chow-groups-and-zero-section-gysin
  - def-gts-classical-dm-stack-cotangent-complex
  - thm-gts-proper-algebraic-dm-stack-of-stable-maps-to-a-projective-target
  - lem-gts-cotangent-marked-algebra-and-sheaf-extension-classification
  - lem-gts-cotangent-scheme-effectivity-and-artin-flatness
  - thm-gts-global-cotangent-complex-obstruction-and-lifting-torsor
  - def-axiom-of-choice
  - def-bivariant-chow-operations
  - def-dependent-choice
  - lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex
  - lem-chow-localization-and-vector-bundle-homotopy
  - lem-cohomology-base-change-finite-free-criterion
  - lem-cotangent-complex-h0-and-polynomial-case
  - lem-cotangent-complex-resolution-independence
  - lem-cotangent-complex-truncation-and-smooth-case
  - lem-gysin-specialization-bivariant-and-base-change
  - lem-operational-chern-classes-and-whitney-formula
  - lem-proper-flat-fp-cohomology-perfect-complex
  - lem-refined-gysin-commutation-and-composition
  - lem-vector-bundle-chow-homotopy-invariance
  - lem-zero-section-gysin-and-excess-vector-subbundle
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-full-riemann-roch-divisor
  - thm-h0-structure-sheaf-proper-curve
  - thm-projective-bundle-formula-for-chow-groups
  - thm-proper-pushforward-coherent
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - thm-serre-duality-curves-line-bundles
  - thm-serre-vanishing
dependency_roles:
  def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor: mathematical-premise
  def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone: mathematical-premise
  def-gts-chow-groups-and-zero-section-gysin: mathematical-premise
  def-gts-classical-dm-stack-cotangent-complex: mathematical-premise
  thm-gts-proper-algebraic-dm-stack-of-stable-maps-to-a-projective-target: mathematical-premise
  lem-gts-cotangent-marked-algebra-and-sheaf-extension-classification: mathematical-premise
  lem-gts-cotangent-scheme-effectivity-and-artin-flatness: mathematical-premise
  thm-gts-global-cotangent-complex-obstruction-and-lifting-torsor: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-bivariant-chow-operations: mathematical-premise
  def-dependent-choice: mathematical-premise
  lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex: mathematical-premise
  lem-chow-localization-and-vector-bundle-homotopy: mathematical-premise
  lem-cohomology-base-change-finite-free-criterion: mathematical-premise
  lem-cotangent-complex-h0-and-polynomial-case: mathematical-premise
  lem-cotangent-complex-resolution-independence: mathematical-premise
  lem-cotangent-complex-truncation-and-smooth-case: mathematical-premise
  lem-gysin-specialization-bivariant-and-base-change: mathematical-premise
  lem-operational-chern-classes-and-whitney-formula: mathematical-premise
  lem-proper-flat-fp-cohomology-perfect-complex: mathematical-premise
  lem-refined-gysin-commutation-and-composition: mathematical-premise
  lem-vector-bundle-chow-homotopy-invariance: mathematical-premise
  lem-zero-section-gysin-and-excess-vector-subbundle: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  thm-full-riemann-roch-divisor: mathematical-premise
  thm-h0-structure-sheaf-proper-curve: mathematical-premise
  thm-projective-bundle-formula-for-chow-groups: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  thm-qc-sheaf-affine-higher-cohomology-vanishes: mathematical-premise
  thm-serre-duality-curves-line-bundles: mathematical-premise
  thm-serre-vanishing: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "William Fulton and Rahul Pandharipande, Notes on Stable Maps and Quantum Cohomology"
      url: "https://arxiv.org/pdf/alg-geom/9608011v2"
      locator: "§§1–5; the notes define stable maps, construct the stable-map stack and prove properness for projective-space targets over C, but do not supply the required general obstruction theory and splitting package."
    - title: "Kai Behrend and Yuri Manin, Stacks of Stable Maps and Gromov–Witten Invariants"
      url: "https://arxiv.org/pdf/alg-geom/9506023v2"
      locator: "Corrected v2, Definitions 3.2/3.13 and Theorem 3.14 for the stable-map stack; the later virtual-class and descendant package is not constructed by that theorem."
axiom_use: "AC and DC are inherited from the actual cotangent, curve-cohomology and Chow suppliers. The proof constructs the required obstruction and cone/Gysin comparisons locally. No external-input waiver is used."
---

## Statement

Let $V$ be a smooth projective complex variety of dimension $d$, let $g,n\ge0$ satisfy $2g-2+n>0$, and let $\beta$ be an effective curve class. Write $M=\overline{\mathcal M}_{g,n}(V,\beta)$, $P=\mathfrak M_{g,n}$ for the Artin stack of connected nodal prestable pointed curves, and $p:M\to P$ for the domain morphism. The universal curve $\pi:C\to M$, universal map $f:C\to V$ and sections $s_i$ give the relative perfect obstruction theory $E_{\mathrm{rel}}=(R\pi_*f^*T_V)^\vee\to L_{M/P}$. Its absolute theory is $E=\operatorname{fib}(E_{\mathrm{rel}}\to p^*L_P[1])\to L_M$; it has amplitude $[-1,0]$, rank $v=(1-g)(d-3)+c_1(T_V)\cdot\beta+n$, and rational virtual class $[M]^{\mathrm{vir}}\in A_v(M)_{\mathbb Q}$.

Set $\mathrm{ev}_i=f\circ s_i$, $L_i=s_i^*\omega_\pi$ and $\psi_i=c_1(L_i)$. The canonical domain stabilization is $\mathrm{st}:M\to\overline{\mathcal M}_{g,n}$. For $\gamma_i\in A^{c_i}(V)_{\mathbb Q}$, integers $a_i\ge0$, and $\theta\in A^b(\overline{\mathcal M}_{g,n})_{\mathbb Q}$, define the algebraic descendant by the rational stack degree of $(\prod_i\psi_i^{a_i}\mathrm{ev}_i^*\gamma_i)\mathrm{st}^*\theta\cap[M]^{\mathrm{vir}}$ when $\sum_i(a_i+c_i)+b=v$, and define its numerical value to be zero otherwise. These are operational Chow actions. A closed residual gerbe contributes the reciprocal of its finite automorphism-group order to the degree.

The following two comparison identities are asserted. For a smooth projective family $\mathcal V\to S$ over a smooth connected complex variety, take a proper open-and-closed fixed-class component $\mathcal M$ of its finite-type relative stable-map stack with locally constant fibre class $\beta$, and the relative obstruction theory formed with $T_{\mathcal V/S}$. For each closed point $s\in S$, refined base pullback gives $s^![\mathcal M]^{\mathrm{vir}}=[M_s]^{\mathrm{vir}}$. Descendants with insertions extending as operational classes on the family have constant degree. Here $s^!$ is the refined operation of the regular base embedding; the map-stack fibre inclusion need not be regular.

For a labelled separating node fix $g_1+g_2=g$, a partition $I\sqcup J=\{1,\ldots,n\}$ and $\beta_1+\beta_2=\beta$. Put $M_1=\overline{\mathcal M}_{g_1,|I|+1}(V,\beta_1)$, $M_2=\overline{\mathcal M}_{g_2,|J|+1}(V,\beta_2)$ and $D=M_1\times_V M_2$, using the last evaluations. The induced obstruction theory on the stack of maps with this designated node satisfies $[D]^{\mathrm{vir}}=\Delta_V^!([M_1]^{\mathrm{vir}}\times[M_2]^{\mathrm{vir}})$. For a nonseparating node use the two last evaluations on $\overline{\mathcal M}_{g-1,n+2}(V,\beta)$ and the same refined diagonal. These formulas also allow stable-map factors whose pointed domains are outside the stable-curve range; only the factors that are nonempty as stable-map stacks contribute. The designated-node pullback is the refined boundary operation over the prestable-domain base. Old evaluation and cotangent-line insertions restrict to those on the branches. Proper pushforward along the labelled clutching map gives the boundary contribution; forgetting graph labels uses the actual generic degree. Pullback of a boundary on the stabilized domain is the sum over designated cuts, labelled partitions and effective class distributions, including all cuts in contracted positive-degree bridge chains, with local smoothing equation $t=u\prod_j t_j$ and multiplicity one for each cut. A dual-basis expansion is asserted only if an actual Chow decomposition $[\Delta_V]=\sum_\mu\gamma_\mu\boxtimes\gamma^\mu$ is supplied.

No singular-target degeneration identity, equivariant virtual localization identity, or comparison with an analytic virtual class is a conclusion of this theorem. Such an identity requires a separate theorem specifying its moduli, compatible obstruction theories and comparison operation; the nonequivariant construction above supplies no fixed/moving Euler-class calculation.

## Statement references

[[thm-gts-proper-algebraic-dm-stack-of-stable-maps-to-a-projective-target]]

[[def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone]]

## Facts & Assumptions

**Given:** smooth projective V over C, effective β and stable (g,n), with the inherited AC/DC. The proof constructs the required POT, rational virtual cycle and formula comparisons; no missing POT or gluing theorem is assumed.

[F1] [[thm-gts-proper-algebraic-dm-stack-of-stable-maps-to-a-projective-target]] supplies the actual separated proper DM stable-map stack over C and its framed presentation. Its proved full-section-algebra forgetting and universal direct-image constructions are used for the domain stabilization; they are not a citation to an unproved broad stable-curve provider. [[def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor]] fixes the domain convention.

[F2] [[def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone]], [[def-gts-classical-dm-stack-cotangent-complex]] and [[def-gts-chow-groups-and-zero-section-gysin]] fix the cotangent, POT and rational Chow/refined-intersection/proper-degree conventions. The needed intrinsic-cone and comparison constructions are supplied in the proof; an external common-resolution or virtual-pullback theorem is not assumed.

[F3] [[lem-gts-cotangent-marked-algebra-and-sheaf-extension-classification]] classifies square-zero algebra extensions for ANY ring map and every coefficient module, including nonflat moduli charts. [[lem-gts-cotangent-scheme-effectivity-and-artin-flatness]] and [[thm-gts-global-cotangent-complex-obstruction-and-lifting-torsor]] supply the exact marked Artin scheme lifting/effectivity used for the prestable curve base. These are existing locally proved suppliers, not assertions of publication status.

[F4] The actual published scheme/curve interfaces used at their stated hypotheses are: [[def-axiom-of-choice]]; [[def-bivariant-chow-operations]]; [[def-dependent-choice]]; [[lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex]]; [[lem-chow-localization-and-vector-bundle-homotopy]]; [[lem-cohomology-base-change-finite-free-criterion]]; [[lem-cotangent-complex-h0-and-polynomial-case]]; [[lem-cotangent-complex-resolution-independence]]; [[lem-cotangent-complex-truncation-and-smooth-case]]; [[lem-gysin-specialization-bivariant-and-base-change]]; [[lem-operational-chern-classes-and-whitney-formula]]; [[lem-proper-flat-fp-cohomology-perfect-complex]]; [[lem-refined-gysin-commutation-and-composition]]; [[lem-vector-bundle-chow-homotopy-invariance]]; [[lem-zero-section-gysin-and-excess-vector-subbundle]]; [[thm-cohomology-projective-space-twisting-sheaves]]; [[thm-full-riemann-roch-divisor]]; [[thm-h0-structure-sheaf-proper-curve]]; [[thm-projective-bundle-formula-for-chow-groups]]; [[thm-proper-pushforward-coherent]]; [[thm-qc-sheaf-affine-higher-cohomology-vanishes]]; [[thm-serre-duality-curves-line-bundles]]; [[thm-serre-vanishing]]. Their cohomology, Koszul and Rees calculations are applied in the concrete constructions below. The relative curve-duality extension to singular atlas bases is proved here rather than inferred from a regular-base-only theorem.

## Proof

1.1 **Part 1: Construction overview and the Artin-base correction.** Let $P=𝔐_{g,n}$ be the stack of connected nodal prestable n-pointed curves, including unstable domains, and let $M=M̄_{g,n}(V,β)$ for a smooth projective complex V. Write U→P for the universal curve, $C=M×_P$ U, π:C→M and f:C→V. The fixed-domain relative morphism M→P is representable; stable-map automorphisms inject into domain automorphisms. [F1, F2, F3, F4, given, construct, algebra]

2.1 Put $F=f*T_V$ and $E_{\mathrm{rel}}=(Rπ_*F)^∨$. The **actual morphism** is obtained from the universal differential, not selected from its fibre groups. The canonical comparisons give [F1, F2, F3, F4, given, construct, algebra, step 1.1]

3.1 $f*Ω_V$ → $L_{C/P}$ → $L_{C/U}$ ≅ $π*L_{M/P}$. [F1, F2, F3, F4, given, construct, algebra, step 2.1]

4.1 The final identification is the Tor-independent cotangent base-change identification, since U→P is flat. Tensor with ω_π[1], push by π and use trace. This gives [F1, F2, F3, F4, given, construct, algebra, step 3.1]

5.1 $Rπ_*(f*Ω_V⊗ω_π)[1]$ → $Rπ_*(π*L_{M/P}⊗ω_π)[1]$ → $L_{M/P}$. [F1, F2, F3, F4, given, construct, algebra, step 4.1]

6.1 Relative nodal-curve duality identifies the source canonically with $E_{\mathrm{rel}}$. Thus it constructs $φ_{\mathrm{rel}}:E_{\mathrm{rel}}→L_{M/P}$, with its atlas and base-change compatibility forced by the universal differential and trace. [F1, F2, F3, F4, given, construct, algebra, step 5.1]

7.1 The relative duality must apply over singular atlas bases. The existing regular-local-base projective-duality Statement is **not** sufficient by itself. part 4 below uses the universal finite Čech residue pairing for projective space over an arbitrary Noetherian ring, its diagonal Koszul resolution for perfect complexes, and the regular-immersion Koszul self-duality of a nodal family embedding. This constructs the trace rather than assuming a fieldwise duality glues. [F1, F2, F3, F4, given, construct, algebra, step 6.1]

8.1 The prestable base is smooth **Artin**, not Deligne–Mumford. Its cotangent complex has amplitude [0,1]. The absolute obstruction complex is the fibre [F1, F2, F3, F4, given, construct, algebra, step 7.1]

9.1 $E_{\mathrm{abs}}=fib(E_{\mathrm{rel}} → p*L_P[1])$, [F1, F2, F3, F4, given, construct, algebra, step 8.1]

10.1 where the arrow is $φ_{\mathrm{rel}}$ followed by the cotangent connecting morphism. It sits in $p*L_P→E_{\mathrm{abs}}→E_{\mathrm{rel}}→p*L_P[1]$ and maps canonically to $L_M$. Initially its amplitude bound is [−1,1]. Stable-map infinitesimal automorphism vanishing over C kills degree +1 and gives the actual [−1,0] perfect complex; merely adding a smooth-scheme cotangent bundle in degree zero would be incorrect here. [F1, F2, F3, F4, given, construct, algebra, step 9.1]

11.1 The following sections supply the relative duality, smooth-prestable-base construction, square-zero comparison proving the cohomology conditions, absolute degree-one cancellation and virtual-rank calculation. The following internal constructions supply the virtual-cycle and gluing conclusions. [F1, F2, F3, F4, given, construct, algebra, step 10.1]

12.1 **Part 2: Smooth prestable base, including unstable domains.** Here is the actual base construction and the part of its cotangent theory needed below. [F1], specialized to target Spec C and sufficiently many markings, supplies the algebraic DM stack $Q_r$ of stable (n+r)-pointed genus-g curves. Forget only the last r labels, without contracting any component. For a prestable family C/S the fibre of $Q_r$ over it is the open in $(C^{\mathrm{sm}}/S)^r$ consisting of disjoint new sections, avoiding the old sections, for which the augmented curve is stable. This stable condition is open: at a stable fibre its fourth marked-dualizing power has zero H¹ and is very ample; the completed cohomology/relative-embedding argument gives an embedding after shrinking the base, forcing the same positive component degrees nearby. Thus $Q_r→P$ is representable and smooth of relative dimension r. [F1, F2, F3, F4, given, construct, algebra, step 11.1]

13.1 Every geometric prestable curve admits finitely many such extra smooth markings: on each rational component add enough to give three special points and on each unmarked genus-one component add one. Existing node branches count as special points. This covers all g,n, including $g=0,n=0$ and $g=1,n=0$. Let P be the fppf curve stack with these charts. Equivalently take scheme étale atlases $A_r→Q_r$ and the groupoid of isomorphisms of their underlying n-pointed curves. The fibre of $A_r×_P$ $Q_s$ over $A_r$ is exactly the open of s-tuples just described; pulling back an atlas of $Q_s$ gives an algebraic-space groupoid with smooth source and target. Its quotient is the required algebraic Artin stack, locally of finite presentation. The universal curve descends as an algebraic space; on these charts it is the usual proper projective nodal scheme. Thus no assertion that an arbitrary abstract descent datum of schemes is automatically projective is used. Stable-map families, which are schemes, have their ordinary forgetful map to this base. [F1, F2, F3, F4, given, construct, algebra, step 12.1]

14.1 The base is smooth over C. On a nodal geometric curve the cotangent complex is locally the hypersurface complex [I/I²→Ω] in degrees [−1,0]. At a node xy=0 its internal Ext¹ into O is one copy of the residue field, and higher internal Ext vanishes. On the smooth locus internal Ext¹ is zero. A finite affine Čech resolution therefore gives $\operatorname{Ext}²(L_C,O_C)=0$: the only possible contributions are H² of the tangent sheaf and H¹ of the finite node skyscraper, both zero. The same two-row calculation applies over any local Artin base to a nodal family: the local equation is xy=a, the node Ext sheaf has finite underlying support, and the relevant higher Čech groups still vanish. The existing global cotangent extension-classification/effectivity construction therefore lifts the curve over every small Artin extension. The marked points lift because the lifted family is smooth near each old section; disjointness, stability and nodality persist over a nilpotent thickening. Properness persists, and an ample line bundle lifts: lift its transition units; their triple-overlap failure is an additive square-zero Čech 2-cocycle, which can be killed because $H²(O_C⊗I)=0$. The lifted line remains ample on the nilpotent thickening, so the lift is again projective. A scheme étale atlas of $Q_r$ is consequently formally smooth over C, and finite presentation plus the infinitesimal smoothness criterion makes it smooth. The smooth surjective charts above imply that P is smooth. [F1, F2, F3, F4, given, construct, algebra, step 13.1]

15.1 For clarity, P is not DM: unstable curves have positive-dimensional automorphism groups. Its cotangent complex is constructed on a smooth groupoid atlas by the standard two-term groupoid complex $[Ω_A→Lie(R/A)^∨]$, in degrees [0,1], with the map dual to the infinitesimal groupoid action. The identity and composition identities give its descent maps; on changing atlas their cotangent transitivity triangles give the same complex. In particular $L_P$ is perfect of amplitude [0,1]. The scheme cotangent complexes used in these triangles are the actual functorial simplicial sheaf-ring complexes of the existing cotangent suppliers, not a collection of unrelated affine complexes. [F1, F2, F3, F4, given, construct, algebra, step 14.1]

16.1 Its virtual rank is 3g−3+n. To verify this at an arbitrary nodal point, normalize into components of genera $h_j$ and put $v=\#\mathrm{components}$, $q=\#\mathrm{nodes}$. Vector fields preserving the original marks are exactly vector fields on the normalization vanishing at all markings and node branches; the local equation xy=0 proves this by yD(x)+xD(y)=0. The sheaf of local smoothing parameters has dimension q. If $s_j$ is the number of markings and branches on component j, its tangent-line Euler characteristic is $3−3h_j−s_j$. Hence [F1, F2, F3, F4, given, construct, algebra, step 15.1]

17.1 (dim deformations)−(dim automorphisms) $=−\sum _j(3−3h_j−s_j)+q$ =3g−3+n, [F1, F2, F3, F4, given, construct, algebra, step 16.1]

18.1 using $\sum s_j=n+2q$ and $g=\sum h_j+q−v+1$. This also computes the virtual rank of the groupoid cotangent complex, even when the automorphism dimension jumps. [F1, F2, F3, F4, given, construct, algebra, step 17.1]

19.1 **Part 3: Proper curve pushforward is a perfect two-term object.** Let $B=\operatorname{Spec}$ A be a Noetherian scheme chart of M, with pulled-back projective flat nodal curve $π_B:C_B→B$, and let G be a vector bundle on $C_B$. The actual pinned proper-flat finite-presentation cohomology theorem gives a finite perfect A-complex representing $Rπ_B G$, compatible with arbitrary base change. [F1, F2, F3, F4, given, construct, algebra, step 18.1]

20.1 Its Tor-amplitude is [0,1]. Locally near a chosen base point, choose two hyperplane sections of a relatively very ample bundle with no common zero on that fibre. Properness removes their common-zero locus after shrinking the base. Their two nonvanishing opens, and their intersection, are affine over the base, so their Čech complex computes cohomology in degrees 0 and 1 after every affine base change. Tensoring by any A-module J computes G⊗π*J, because $C_B$ is A-flat and G is locally free. Thus there is a natural projection formula [F1, F2, F3, F4, given, construct, algebra, step 19.1]

21.1 $Rπ_B G$ $⊗^L_A$ J ≅ $Rπ_B(G⊗π*J)$, [F1, F2, F3, F4, given, construct, algebra, step 20.1]

22.1 with no flatness assumption on J. A bounded finite-free model for the perfect pushforward contracts locally to degrees [0,1]: starting at its highest degree, fibrewise vanishing above degree one makes the last differential surjective and split near the point; remove that acyclic summand and repeat. The dual is therefore perfect of amplitude [−1,0]. These constructions respect chart pullbacks and give $K=Rπ_*f*T_V$ and $E_{\mathrm{rel}}=K^∨$ on M. [F1, F2, F3, F4, given, construct, algebra, step 21.1]

23.1 This supplies the perfect object. The affine strictification and global Chow construction are supplied in the following parts. [F1, F2, F3, F4, given, construct, algebra, step 22.1]

24.1 **Part 4: Relative duality over an arbitrary Noetherian atlas base.** We supply the missing all-base duality used to define the morphism. Let π:C→Spec A be projective, flat and nodal, with A any Noetherian complex algebra, possibly singular and nonreduced. Choose a relative projective embedding $i:C→P=P^N_A$. It is a regular immersion of codimension N−1. Indeed its fibre ideal is a complete-intersection ideal for a nodal curve; choose actual fibre ideal generators by conormal/Nakayama after faithful-flat completion, lift them using flatness, and use Nakayama to generate the family ideal. The sequence remains regular because the ambient and quotient are A-flat and the fibre sequence is regular; the kernel argument used in the completed nodal-locus proof proves this one generator at a time. The adjunction line is [F1, F2, F3, F4, given, construct, algebra, step 23.1]

25.1 ω_π=i*ω_{P/A}⊗det(I/I²)^∨. [F1, F2, F3, F4, given, construct, algebra, step 24.1]

26.1 It is the nodal dualizing line, with local generator dx/x=−dy/y. Its formation commutes with arbitrary base change by this regular Koszul resolution. [F1, F2, F3, F4, given, construct, algebra, step 25.1]

27.1 First prove projective-space duality in the precise range needed. The standard finite affine Čech complex for P computes RΓ(P,O(m)). Its Laurent monomial decomposition contracts all the simplex summands except the ordinary homogeneous monomials in degree zero and the all-negative monomials in degree N. This contraction uses only coefficients 0,1,−1 and therefore works over every ring A. The coefficient of $x₀⁻¹⋯x_N⁻¹$ defines [F1, F2, F3, F4, given, construct, algebra, step 26.1]

28.1 tr_P:RΓ(P,ω_{P/A}[N])→A. [F1, F2, F3, F4, given, construct, algebra, step 27.1]

29.1 Evaluation and this coefficient give a natural perfect duality for every O(m), and after tensoring with any finite perfect A-complex. Complementary monomials pair to 1 and all other pairs to 0. The ordered volume form and the determinant factor in ω_P change together, so the trace is independent of projective coordinates; diagonal rescalings, permutations and elementary coordinate changes verify this directly by coefficient extraction. [F1, F2, F3, F4, given, construct, algebra, step 28.1]

30.1 Here is why this suffices for $i_*G$ rather than merely for line bundles. The diagonal $Δ⊂P×_A$ P is the zero locus of the tautological rank-N section, whose affine equations are $y_j−x_j$. These are a regular sequence over any A. Its finite Koszul resolution has terms [F1, F2, F3, F4, given, construct, algebra, step 29.1]

31.1 $O_P(−j)$ ⊠ $Ω_P^j(j)$, 0≤j≤N. [F1, F2, F3, F4, given, construct, algebra, step 30.1]

32.1 Tensor this resolution with the second pullback of $i_*G$ and push by the first projection. This tensor still resolves the diagonal restriction, including over singular A: on a common affine projective chart the successive equations are $x_j−y_j$, with $x_j$ the first-factor variables. On a polynomial module $M[x_1,…,x_N]$ each $x_j−y_j$ is injective, by comparison of the highest $x_j$ coefficient, and its quotient is evaluation $x_j=y_j$. Repeating proves regularity of the entire sequence on the second-factor module, without flatness of G over the second projective space. These affine calculations glue to the global Koszul tensor comparison. The result therefore expresses $i_*G$, rather than an object with additional diagonal Tor, as a finite iterated cone of [F1, F2, F3, F4, given, construct, algebra, step 31.1]

33.1 $O_P(−j)⊗^L_A$ $RΓ(P,i_*G⊗Ω_P^j(j))$. [F1, F2, F3, F4, given, construct, algebra, step 32.1]

34.1 Each coefficient is perfect over A by the existing proper-flat cohomology theorem: i_*G⊗Ω_P^j(j) is finitely presented and A-flat. Thus the finite-cone argument extends the line-bundle duality to i_*G, and to bounded complexes of vector bundles on C, without any regularity assumption on A. Evaluation followed by tr_P gives the actual natural quasi-isomorphism [F1, F2, F3, F4, given, construct, algebra, step 33.1]

35.1 RΓ(P,RHom_P(i_*G,ω_{P/A}[N])) ≅ RHom_A(RΓ(C,G),A). [F1, F2, F3, F4, given, construct, algebra, step 34.1]

36.1 The Koszul resolution of the regular immersion i is self-dual. Applying Hom and taking its top exterior term gives [F1, F2, F3, F4, given, construct, algebra, step 35.1]

37.1 RHom_P(i_*G,ω_{P/A}[N]) ≅ i_*(G^∨⊗ω_π)[1]. [F1, F2, F3, F4, given, construct, algebra, step 36.1]

38.1 The signs and determinant changes are those of exterior multiplication in the same Koszul complex; changes of the local regular generators act by their determinant and cancel in the displayed adjunction line. We obtain [F1, F2, F3, F4, given, construct, algebra, step 37.1]

39.1 Rπ_*(G^∨⊗ω_π)[1] ≅ (Rπ_*G)^∨. [F1, F2, F3, F4, given, construct, algebra, step 38.1]

40.1 In particular this gives the trace $tr_π:Rπ_*ω_π[1]→O_B$ and its perfect evaluation pairing. It is canonical, not chosen separately on fibres. The same argument for every perfect complex on C identifies $ω_π[1]$ by the representing property [F1, F2, F3, F4, given, construct, algebra, step 39.1]

41.1 RHom_C(H,ω_π[1]) ≅ RHom_A(Rπ_*H,A). [F1, F2, F3, F4, given, construct, algebra, step 40.1]

42.1 The representing object lies in the category of perfect complexes, so Yoneda gives the unique comparison for two embeddings preserving this pairing. This proves independence of the embedding and the cocycle identity, including over nonreduced bases. On overlapping charts these unique comparisons glue the traces. [F1, F2, F3, F4, given, construct, algebra, step 41.1]

43.1 The Čech coefficient operations, diagonal Koszul complex and regular-immersion Koszul resolution all commute with base change. Flatness of C/A preserves the regular sequence under an arbitrary base change. Consequently the trace, pairing and displayed duality commute with the chart pullbacks used here. For a coefficient module J the same finite Čech/perfect-complex calculation gives [F1, F2, F3, F4, given, construct, algebra, step 42.1]

44.1 RHom_B((Rπ_*G)^∨,J) ≅ Rπ_*(G⊗π*J). [F1, F2, F3, F4, given, construct, algebra, step 43.1]

45.1 One may compute an arbitrary J by a free resolution; the finite Čech and finite perfect complexes commute with its totalization. The same argument applies to the bounded-above quasi-coherent complex $π*L_{M/P}$ used in the universal differential: its free resolution may be unbounded below, but the Čech direction and the perfect-complex directions are bounded, so each total degree involves only finitely many terms from those directions. Thus the coefficient comparison extends to this cotangent complex and the trace composition defining $φ_{\mathrm{rel}}$ is an actual derived map. No assertion that a fibrewise trace glues is needed. This is the precise adjunction needed below. The proof has not applied the old regular-local-base-only duality theorem to a singular atlas. [F1, F2, F3, F4, given, construct, algebra, step 44.1]

46.1 **Part 5: The actual relative morphism and its obstruction comparison.** Let U→P be the universal prestable curve and $C=M×_P$ U as above. Since U→P is flat, the functorial cotangent base-change map identifies $L_{C/U}$ with $π*L_{M/P}$. The universal map f:C→V gives, over P, the canonical differential [F1, F2, F3, F4, given, construct, algebra, step 45.1]

47.1 $f*Ω_V→L_{C/P}→L_{C/U}=π*L_{M/P}$. [F1, F2, F3, F4, given, construct, algebra, step 46.1]

48.1 Tensor with $ω_π[1]$, push forward and compose with $tr_π$. By part 4 its source is canonically $E_{\mathrm{rel}}$. This defines [F1, F2, F3, F4, given, construct, algebra, step 47.1]

49.1 $φ_{\mathrm{rel}}:E_{\mathrm{rel}}=(Rπ_*f*T_V)^∨→L_{M/P}$. [F1, F2, F3, F4, given, construct, algebra, step 48.1]

50.1 On an atlas $B→M×_P$ A with B étale and A→P smooth, the formula is the identical scheme formula with the universal curve $U_A$: $f_B*Ω_V→L_{C_B/U_A}=π_B*L_{B/A}$. On overlap atlases the functorial simplicial cotangent resolutions, flat base change and canonical trace give the same map and its homotopies. Thus the morphism descends in the derived category of quasi-coherent sheaves. This is construction of a global morphism, not a demand that arbitrary affine derived isomorphisms glue without data. [F1, F2, F3, F4, given, construct, algebra, step 49.1]

51.1 We prove that it is an obstruction theory on these relative scheme charts. Fix $B=\operatorname{Spec}$ B₀ mapping to the chart, a square-zero extension B₀'→B₀ with finite kernel J over its fixed base A, and the resulting prescribed flat family C' over B₀'. We must lift f:C→V, with this domain fixed. Cover C by finitely many affine opens whose images lie in smooth affine opens of V. Smoothness of V gives local lifts $f_i'$. Their pairwise differences are derivations, hence sections of $f*T_V⊗π*J$ on overlaps. Their additive differences satisfy the Čech cocycle identity because J²=0. Its class [F1, F2, F3, F4, given, construct, algebra, step 50.1]

52.1 $o(f,C')∈H¹(C,f*T_V⊗π*J)$ [F1, F2, F3, F4, given, construct, algebra, step 51.1]

53.1 vanishes exactly when the local lifts adjust and glue. When it vanishes, all global lifts form the torsor $H⁰(C,f*T_V⊗π*J)$. There are no additional relative automorphisms: the domain and its identification are fixed. The resulting family map remains stable and has class β because those conditions concern the unchanged geometric fibres of a nilpotent thickening. [F1, F2, F3, F4, given, construct, algebra, step 52.1]

54.1 The comparison with $φ_{\mathrm{rel}}$ is exact. The square-zero extension class of the prescribed domain is pulled back along the universal differential $f*Ω_V→L_{C/U}$; evaluating the corresponding local algebra extensions gives precisely the differences $f_i'−f_j'$ just described. The trace adjunction of part 4 identifies this pullback with the obstruction obtained by composing the cotangent extension class with $φ_{\mathrm{rel}}$. The same calculation for a split extension identifies the difference action on lifts. These identifications use the actual natural extension-classification theorem for cotangent complexes, so they hold for every finite coefficient module J, not only for residue-field tangent vectors. [F1, F2, F3, F4, given, construct, algebra, step 53.1]

55.1 For completeness here is the algebraic infinitesimal criterion, rather than a named BF criterion as an unproved premise. On an affine relative chart let $φ:E→L_{B₀/A}$, with E perfect in degrees [−1,0]. Its split square-zero lifting comparison identifies Hom(L,J)→Hom(E,J) for every finite J; hence h⁰(φ) is an isomorphism. Every class in Ext¹(L,J) is an actual square-zero A-algebra extension of B₀ by the existing cotangent extension classification. Lifting the identity B₀→B₀ to that extension is a splitting and occurs exactly when its class is zero. The proved obstruction comparison therefore makes Ext¹(L,J)→Ext¹(E,J) injective. If $D=Cone(φ)$, its degree-zero cohomology is already zero, and the long exact Hom sequence injects Ext¹(D,J)=Hom(h⁻¹D,J) into this kernel. Thus $h⁻¹D=0$, by taking $J=h⁻¹D$ locally; it is finite over the Noetherian chart. Therefore D has cohomology only in degrees ≤−2. This is exactly h⁰(φ) an isomorphism and h⁻¹(φ) surjective. The criterion applies to the morphism constructed above, proving that $φ_{\mathrm{rel}}$ is a relative perfect obstruction theory. [F1, F2, F3, F4, given, construct, algebra, step 54.1]

56.1 **Part 6: Absolute theory and cancellation of the Artin degree.** Write p:M→P. Use actual functorial dg models of the cotangent triangle [F1, F2, F3, F4, given, construct, algebra, step 55.1]

57.1 $p*L_P→L_M→L_{M/P}→p*L_P[1]$. [F1, F2, F3, F4, given, construct, algebra, step 56.1]

58.1 Compose $φ_{\mathrm{rel}}$ with its connecting map. Define $E_{\mathrm{abs}}$ as the homotopy fibre of $E_{\mathrm{rel}}→p*L_P[1]$; equivalently it is the homotopy pullback of $E_{\mathrm{rel}}→L_{M/P}←L_M$. The latter description constructs its canonical morphism $φ_{\mathrm{abs}}:E_{\mathrm{abs}}→L_M$. The fibre construction gives the triangle [F1, F2, F3, F4, given, construct, algebra, step 57.1]

59.1 $p*L_P→E_{\mathrm{abs}}→E_{\mathrm{rel}}→p*L_P[1]$. [F1, F2, F3, F4, given, construct, algebra, step 58.1]

60.1 Both outer perfect objects are known, so $E_{\mathrm{abs}}$ is perfect, initially in degrees [−1,1]. The comparison of this triangle with the cotangent triangle identifies $Cone(φ_{\mathrm{abs}})$ with $Cone(φ_{\mathrm{rel}})$. Hence the absolute cohomology conditions already follow from part 5: $h⁰(φ_{\mathrm{abs}})$ is an isomorphism and $h⁻¹(φ_{\mathrm{abs}})$ is surjective. [F1, F2, F3, F4, given, construct, algebra, step 59.1]

61.1 It remains essential to prove its actual Tor-amplitude [−1,0]. At a geometric point $(C,p_i,f)$, the degree-one fibre of $p*L_P$ is the dual of the infinitesimal domain automorphisms. The degree-zero fibre of $E_{\mathrm{rel}}$ is $H⁰(C,f*T_V)^∨$. The map between them is dual to [F1, F2, F3, F4, given, construct, algebra, step 60.1]

62.1 $H⁰(C,T_C(−\sum p_i))→H⁰(C,f*T_V)$,   D↦df(D). [F1, F2, F3, F4, given, construct, algebra, step 61.1]

63.1 This follows directly by differentiating reparametrization f∘(1+εD); it is the same differential used in part 5. Its kernel is the Lie algebra of stable-map automorphisms and is zero over C. Explicitly a derivation lifts to normalized components and vanishes at node branches and markings. On contracted components it lies in a negative-degree tangent line bundle by stability. On nonconstant components it is zero generically because the finite function-field extension is separable in characteristic zero. Thus it is zero everywhere. [F1, F2, F3, F4, given, construct, algebra, step 62.1]

64.1 The dual map $H⁰(C,f*T_V)^∨→Aut(C,p_i)^∨$ is therefore surjective. The fibre long exact sequence gives $H¹(E_{\mathrm{abs}}⊗^Lκ)=0$ at every geometric point. A local finite vector-bundle representative in [−1,1] consequently has a fibrewise surjective top differential; split and remove that acyclic summand near the point. This proves Tor-amplitude [−1,0], rather than merely vanishing of a single cohomology sheaf. Therefore [F1, F2, F3, F4, given, construct, algebra, step 63.1]

65.1 $φ_{\mathrm{abs}}:E_{\mathrm{abs}}→L_M$ [F1, F2, F3, F4, given, construct, algebra, step 64.1]

66.1 is an absolute perfect obstruction theory. The construction works also where the underlying n-pointed domain is unstable. Replacing the Artin base by a smooth scheme or omitting its degree-one term would not prove this assertion. [F1, F2, F3, F4, given, construct, algebra, step 65.1]

67.1 **Part 7: Virtual dimension and exact output.** Let $d=\operatorname{dim}$ V and $F=f*T_V$. On a normalized smooth curve, any vector bundle has a filtration by line bundles after taking a rational line and saturating it; torsion-free quotients on a smooth curve are locally free. Line-bundle Riemann–Roch then gives χ(F)=rank(F)(1−h)+deg det F. For a nodal curve the normalization sequence for a rank-d vector bundle subtracts d for each node. Thus [F1, F2, F3, F4, given, construct, algebra, step 66.1]

68.1 $χ(C,f*T_V)=(1−g)d+c₁(T_V)·β$. [F1, F2, F3, F4, given, construct, algebra, step 67.1]

69.1 This proves the vector-bundle Euler-characteristic formula from the actual line-bundle RR supplier, rather than assuming a separate vector-bundle RR theorem. The class of the absolute triangle gives [F1, F2, F3, F4, given, construct, algebra, step 68.1]

70.1 $rk(E_{\mathrm{abs}})=rk(E_{\mathrm{rel}})+rk(L_P)$ $=(1−g)d+c₁(T_V)·β+(3g−3+n)$ $=(1−g)(d−3)+c₁(T_V)·β+n$. [F1, F2, F3, F4, given, construct, algebra, step 69.1]

71.1 The dimension is constant on the fixed (g,n,β) stack. All objects, morphisms, obstruction comparisons and base-change identifications above are induced by the universal curve/map, cotangent functoriality and the constructed trace. In particular evaluation maps, changes of target family and node-normalization exact sequences compare these complexes by their actual universal maps; no fibrewise tangent-group identification is substituted for this functorial construction. [F1, F2, F3, F4, given, construct, algebra, step 70.1]

72.1 The output is the specified relative perfect object and morphism, and the absolute amplitude-[−1,0] perfect obstruction theory of this virtual rank. The following parts use this actual obstruction-theory morphism and its naturality to construct the rational Chow class and prove the node/target-family refined-Gysin identities. [F1, F2, F3, F4, given, construct, algebra, step 71.1]

73.1 We first supply the equivariant projective presentation used below. In the framed Hilbert and full-frame construction of [F1], $H$ is the determinant open in the isomorphism-section open of an affine section scheme $J\to B$, where $B$ is the marked Hilbert parameter. Its functorial full frame identifies $M=[H/G]$ with $G=GL_s$; scalar matrices act on the retained line isomorphism, so they are not discarded. The parameter $B$ is locally closed in the product of the projective Hilbert scheme of $\mathbb P^{s-1}\times V$ with its $n$ marking factors. The Hilbert Plücker line (from the finite-degree homogeneous-ideal Grassmannian construction) and the marking $\mathcal O(1)$ lines have their natural $G$-linearizations, since change of coordinates acts on those homogeneous ideals and marked points. Their exterior tensor product restricts to a $G$-linearized ample line $A_B$ on $B$. The section functor defining $J$ is the relative spectrum of the symmetric algebra of the coherent module presenting sections; the evaluation, adjunction and direct-image maps in [F1] are functorial under $G$, so this relative spectrum and $J\to B$ are equivariant. Pullback of an ample line along an affine finite-type morphism is ample: on affine nonvanishing opens of powers of $A_B$, finitely many relative algebra generators, after clearing denominators by powers of those sections, give the required affine nonvanishing basis upstairs. Restriction to the invariant opens $I$ and $H$ preserves ampleness. Hence $A_H=A_B|H$ is a $G$-linearized ample line. Choose a power and finitely many sections giving a locally closed immersion of the quasi-projective $H$ into projective space. Each section belongs to a finite-dimensional $G$-stable space: the action and linearization give a coaction into $\mathcal O(G)\otimes H^0(H,A_H^m)$, and the coaction of a single section is a finite sum; coassociativity places it in a finite-dimensional subcomodule. The tensor identification for these global sections follows from a finite affine cover of the separated $H$ and flatness over $\mathbb C$. Taking the sum of the resulting finite subcomodules yields a finite-dimensional representation $W$ containing all chosen sections. Enlarging an embedding linear system preserves its locally closed immersion, as is checked on each nonvanishing section chart by retaining the old coordinate generators. Thus $H\hookrightarrow\mathbb P(W^\vee)$ is equivariant. Associated to the tautological $G$-frame torsor on $Gr(s,N)$ this gives the projective-bundle immersion used in the following matrix construction, with a relatively ample line; twisting by a sufficiently high power of the Grassmannian Plücker line makes it ample over $\mathbb C$. This supplies the claimed quasi-projectivity of $M_N$, rather than inferring it from properness of $M$. [F1, F4, step 72.1, construct, algebra]

73.2 **Part 8: Matrix replacements and their dimension convention.** Put $W_N=\operatorname{Hom}(C^s,C^N)$, $a_N=Ns$, and $U_N$ the full-rank matrices. The complement has codimension $c_N=N−s+1$ (on rank-r strata choose image and kernel, or use the standard nonzero minor charts and their determinantal dimensions). G acts freely by change of basis. The quotient $U_N/G$ is Gr(s,N), with its usual frame torsor; its nonzero Plücker charts trivialize that torsor. Thus [F1, F2, F3, F4, given, construct, algebra, step 72.1]

74.1 $M_N=(H×U_N)/G$ [F1, F2, F3, F4, given, construct, algebra, step 73.2]

75.1 is an actual scheme: over every such chart it is the product of H with the chart, and the transition maps are the given G-action. The equivariant immersion of H in P(V) gives $M_N$ as a locally closed subscheme of the associated projective bundle over the Grassmannian. In particular $M_N$ is quasi-projective. The map $p_N:M_N→M$ is representable smooth of relative dimension $a_N$, NOT $a_N−\operatorname{dim}$ G. Consequently stack dimension-d classes correspond to $A_{d+a_N}(M_N)$. The equivariant grading based on dim H differs by dim G; it must not be used as the stack dimension convention. [F1, F2, F3, F4, given, construct, algebra, step 74.1]

76.1 Define the quotient group in degree d by $A_d^q(M)=A_{d+a_N}(M_N)_Q$ for sufficiently large $c_N$. This stabilizes. For two indices N,L, the scheme $(H×U_N×W_L)/G$ is a rank-$a_L$ vector bundle over $M_N$. Its open $(H×U_N×U_L)/G$ has complement of codimension $c_L$. If $c_L>\operatorname{dim}$ M−d, localization has zero group in dimension $d+a_N+a_L$ on that complement, so restriction is an isomorphism in this degree. Vector-bundle Chow homotopy identifies the other group with $A_{d+a_N}(M_N)$. Interchanging N and L gives the comparison, and the triple-product comparison gives its cocycle. Every finite list of classes and operations is handled by taking both codimensions larger than the finitely many dimension bounds involved. [F1, F2, F3, F4, given, construct, algebra, step 75.1]

77.1 Chern classes, smooth/flat pullback, regular-embedding Gysin and their commutation identities are therefore defined on these groups by the actual scheme operations. All their identities follow on a common sufficiently large scheme replacement from the published scheme Rees/specialization and zero-section lemmas. This is an explicit construction; it is not descent of a Chow equality from an atlas. [F1, F2, F3, F4, given, construct, algebra, step 76.1]

78.1 **Part 9: Two actual affine-bundle torsors.** Every quasi-projective scheme Y has the following explicit two-step affine replacement. Embed Y locally closed in $P^m$. The incidence complement $J=\{(x,l):l(x)≠0\}$ in $P^m×P^{m,dual}$ is affine: under the Segre embedding the incidence equation is a hyperplane, whose complement is affine. $J→P^m$ is the torsor of retractions $C^{m+1}\to$ the tautological line, under Hom(Q,tautological line), so is an affine-space bundle of rank m. Its pullback $J_Y$ is locally closed in affine J, hence is open in its affine scheme-theoretic closure Spec A. Let $f_1,…,f_r$ generate the ideal of the closed complement. Then [F1, F2, F3, F4, given, construct, algebra, step 77.1]

79.1 $T=\operatorname{Spec}$ $A[t_1,…,t_r]/(\sum f_i t_i−1)$ [F1, F2, F3, F4, given, construct, algebra, step 78.1]

80.1 is affine and maps into $J_Y$. It is the torsor of splittings of the surjection $O_{J_Y}^r→O_{J_Y}$, $(t_i)↦\sum f_i t_i$, under its locally free kernel. Thus $T→J_Y→Y$ are two vector-bundle torsors; no unnamed Jouanolou theorem is required. [F1, F2, F3, F4, given, construct, algebra, step 79.1]

81.1 Their Chow pullbacks are isomorphisms. A torsor under V is the affine hyperplane in the extension 0→V→W→O→0 given by its Čech translation cocycle. It is P(W) minus P(V), with the appropriate line convention. The actual projective-bundle formula `thm-projective-bundle-formula-for-chow-groups`, Whitney formula and Chow localization identify this quotient with the Chow group of the base shifted by rank V: P(V) is the hyperplane class, its successive powers remove all the other projective-bundle summands. This calculation also proves the asserted pullback is the isomorphism, by restricting the projective projection. It commutes with proper, flat and refined Gysin operations by their scheme formulas. Two such replacements have an affine common refinement: their fibre product is an iterated affine-bundle torsor over either affine total space, hence affine. We can therefore compare calculations after injective pullback to an actual affine scheme. [F1, F2, F3, F4, given, construct, algebra, step 80.1]

82.1 **Part 10: Pulling an absolute POT to an affine smooth replacement.** Let $E→L_M$ be the actual absolute perfect obstruction theory from the companion construction, with Tor-amplitude[-1,0]. Let p:T→M be one of the affine replacements above (including its matrix replacement); it is smooth of some relative dimension e and $Ω_p$ is locally free. Since T is affine, the module $Ω_p$ is projective. The cotangent sequence splits in the derived category: the connecting map $Ω_p→p*L_M[1]$ vanishes, because $L_M$ has cohomology in degrees≤0, $Ω_p$ is projective and higher coherent cohomology on T is zero. Choose a section of $L_T→Ω_p$ and set [F1, F2, F3, F4, given, construct, algebra, step 81.1]

83.1 $E_T=p*E⊕Ω_p$ → $L_T$. [F1, F2, F3, F4, given, construct, algebra, step 82.1]

84.1 This has amplitude[-1,0], h0 is an isomorphism and h−1 is surjective, by the split cotangent sequence. Its virtual rank is rk E+e. Any two sections differ by a map $Ω_p→p*L_M$. On the affine scheme this lifts through p*E uniquely in degree zero, since the cone of $E→L_M$ has cohomology≤−2. The resulting triangular automorphism identifies the two POTs. Thus the induced theory is well-defined up to the required isomorphism, without assuming a global splitting on the nonaffine $M_N$. [F1, F2, F3, F4, given, construct, algebra, step 83.1]

85.1 The intrinsic-cone smooth-pullback identity is a CONE identity, checked on étale charts: after a smooth-coordinate presentation it is the product normal-cone chart, and the additional tangent directions are precisely $T_p$. Thus $C_T$ is the quotient of the pulled-back cone chart by those extra tangent directions. In a vector-bundle presentation this says that the cone used for $E_T$ is the pulled-back cone used for E, with the rank-e tangent directions placed in degree zero. These identifications agree on overlaps because they are induced by the conormal maps and their tangent actions. Equality of closed cones and their coordinate algebras is fpqc local; no assertion that Chow classes are an étale sheaf is made. Consequently the zero-section cycle for $E_T$ is the smooth pullback of that for E, wherever the latter already has a global resolution. [F1, F2, F3, F4, given, construct, algebra, step 84.1]

86.1 **Part 11: Strict conormal presentation on the affine replacement.** A perfect complex of Tor-amplitude[-1,0] over affine T=Spec A has a two-term presentation by finitely generated projective A-modules. Indeed resolve a bounded finite-module representative by a bounded-above finite-projective complex. The cokernel at degree−1 is finitely presented and flat: its Tor_1 with every module is the degree−2 cohomology of the derived tensor of E, which is zero. It is therefore projective. Truncating there gives [E−1→E0]. Maps from this complex to the truncated cotangent complex are strict chain maps, since its terms are projective. [F1, F2, F3, F4, given, construct, algebra, step 85.1]

87.1 Embed T as a closed subscheme of a smooth scheme P, with ideal I; P may be $P_0×V²$ for the diagonal argument, since $Ω_P|T$ is a finite projective module on affine T. Write the POT as φ:[E−1→E0]→[I/I²→Ω]. Lift the surjection Ω→h0(E) to k:Ω→E0. Then [F1, F2, F3, F4, given, construct, algebra, step 86.1]

88.1 δ:E−1⊕Ω→E0,   $(u,w)↦d_E u+kw$ [F1, F2, F3, F4, given, construct, algebra, step 87.1]

89.1 is surjective. Set $F=\operatorname{ker}δ$, a finitely generated projective module. The complex [F→Ω], with differential projection to w, is quasi-isomorphic to E by (u,w)↦−u in degree−1 and k in degree zero. The map φ0k−id has image in $im(d_I)$; projectivity of Ω gives h:Ω→I/I² with $d_I h=φ0k−id$. Define the new map in degree zero to be $id_Ω$ and in degree−1 by [F1, F2, F3, F4, given, construct, algebra, step 88.1]

90.1 (u,w)↦−φ−1u−hw. [F1, F2, F3, F4, given, construct, algebra, step 89.1]

91.1 Its differential is w, using $d_E u=−kw$, so it is the desired strict chain map. The h0 and h−1 conditions prove F→I/I² surjective: first match $d_I z$ by a differential from F; the remaining element lies in ker $d_I$ and is supplied by h−1-surjectivity. Therefore Sym $F→\operatorname{gr}_I$ $O_P$ is a surjection and $C_{T/P}$ embeds as a closed cone in F∨. The local virtual class is precisely [F1, F2, F3, F4, given, construct, algebra, step 90.1]

92.1 $0_{F∨}^![C_{T/P}]=c(T,P,F∨)[P]$. [F1, F2, F3, F4, given, construct, algebra, step 91.1]

93.1 This is the actual conormal operation of the published scheme specialization lemma. It is the interface used in the companion diagonal/gluing calculation. [F1, F2, F3, F4, given, construct, algebra, step 92.1]

94.1 **Part 12: Independence without an unproved common-resolution proposition.** On an affine scheme let f:F→H be a quasi-isomorphism between two two-term projective presentations, representing the specified identity of the perfect object. Such a strict map exists because bounded projective complexes compute derived morphisms. Its cone gives the split exact sequence [F1, F2, F3, F4, given, construct, algebra, step 93.1]

95.1 0→F⁻¹→H⁻¹⊕F⁰→H⁰→0, [F1, F2, F3, F4, given, construct, algebra, step 94.1]

96.1 with maps $u↦(f^{-1}u,d_F u)$ and $(h,x)↦d_H h−f^0x$. Set $K=H⊕[F⁰ --id→ F⁰]$. Embed H by the first summands, and embed F by [F1, F2, F3, F4, given, construct, algebra, step 95.1]

97.1 $u↦(f^{-1}u,d_F u)$,   x↦(f0x,x). [F1, F2, F3, F4, given, construct, algebra, step 96.1]

98.1 Both maps are degreewise split injections of complexes. Their quotient complexes are respectively [F⁰ --id→ F⁰] and [H⁰ --id→ H⁰]. Thus they are actual common refinements, constructed by these matrices rather than assumed from BF Proposition5.3. After dualization the corresponding cone presentations differ by the smooth vector-bundle directions from an acyclic summand. The scheme vector-bundle homotopy and zero-section identities give equal zero-section cone classes. Homotopic POT maps induce the same cone-stack embedding; on the strict conormal charts their homotopy is translation by the corresponding tangent direction, which is already quotiented. This verifies compatibility with the specified morphism to L, not just an abstract isomorphism of ranks. [F1, F2, F3, F4, given, construct, algebra, step 97.1]

99.1 Apply this comparison on the affine common refinement in part 9. Its Chow pullback is injective, so the class on $M_N$ is independent of the affine replacement, its cotangent splitting, its projective presentation and its smooth ambient embedding. For two matrix indices use their common product replacement and repeat the same calculation. This produces a well-defined class in $A_{\mathrm{rk}}(E)^q(M)$. It agrees with the stated zero-section BF construction whenever a global resolution already exists, by the cone smooth-pullback identity in part 10 and the same injective pullbacks. No external common-refinement or virtual-pullback theorem is a premise. [F1, F2, F3, F4, given, construct, algebra, step 98.1]

100.1 **Part 13: The exact comparison with the declared rational Chow convention.** Only the following comparison is needed; no new proper-pushforward theory for all stacks is asserted. Retain the rational cycle/rational-equivalence and refined-intersection convention of `def-gts-chow-groups-and-zero-section-gysin`. In this convention localization has the elementary cycle proof: cycles on an open lift by closure, and a rational function relation lifts by the same rational function on the closure, its extra divisor supported on the complement. Thus $A_d(Z)→A_d(X)→A_d(X\Z)→0$ is exact for the closed substacks used here. [F1, F2, F3, F4, given, construct, algebra, step 99.1]

101.1 Vector-bundle homotopy holds in this convention for a finite-type DM quotient stack, as can be proved by the usual cycle-moving argument with its only stack step made explicit. Project an integral cycle in a vector bundle to its integral closed image Y in the base. Over the generic residual gerbe of Y choose a finite étale neutralizing cover Spec F′: a finite-type étale atlas has a closed point finite separable over the function field, its pullback kills the gerbe and splits its finite étale stabilizer after a further finite separable extension. Over this finite cover the vector bundle is affine space. The actual scheme homotopy theorem moves the pulled-back cycle to a multiple of the whole affine-space fibre, or to zero in every other dimension. Push this finite relation back and divide by the finite cover degree. On cycles, finite push-pull is that degree; for rational functions the same assertion is the elementary divisor-of-norm formula, checked by the discrete valuation orders. All the finite equations and rational functions in this calculation spread over a dense open of Y: lift the finite algebra and its multiplication table and invert its finitely many denominators, discriminant and projectivity minors; the finite étale descent equations also spread because they are finitely many equalities. The resulting relation is a genuine rational equivalence there. Localization leaves a cycle whose image lies in a proper closed subset of Y. Induction on the dimension of that image proves surjectivity of bundle pullback on all cycle classes. [F1, F2, F3, F4, given, construct, algebra, step 100.1]

102.1 Injectivity is supplied by the zero-section normalization, without a claim of étale-local Chow equality. For every integral closed Y in the base, the intersection computing 0_E^!p^*[Y] has the GLOBAL normal cone E|Y, with its identity map to the normal bundle: the ideal of the zero section is the degree-positive symmetric ideal and its associated graded is Sym(E∨|Y). The refined-intersection/zero-section normalization therefore gives exactly [Y], with multiplicity one. This is the same zero-section calculation as in the published scheme regular-section proof, now an identity of the global graded algebras on the stack. Consequently 0_E^!p^*=id, so the already surjective p^* is an isomorphism. Nothing is inferred merely from equality after an étale cover. [F1, F2, F3, F4, given, construct, algebra, step 101.1]

103.1 Apply this result to the representation vector bundle $W_N,M$ over M. Its full-rank open is precisely the SCHEME $M_N$. The complement has codimension $c_N$, so localization and the dimension inequality in part 8 give the actual comparison [F1, F2, F3, F4, given, construct, algebra, step 102.1]

104.1 $p_N^*:A_d(M)_Q$ ≅ $A_{d+a_N}(M_N)_Q$ [F1, F2, F3, F4, given, construct, algebra, step 103.1]

105.1 in the declared convention, for the needed sufficiently large N. This identifies $A_d^q(M)$ with the existing rational Chow group in every degree used by the finite construction. It is not necessary to identify every possible presentation or rebuild unrelated Vistoli operations. The affine-torsor isomorphisms of part 9 are likewise comparisons in this convention by their projective-bundle/localization calculation. Thus the virtual class defined in part 12 is an actual element of the rational group in the original Statement. [F1, F2, F3, F4, given, construct, algebra, step 104.1]

106.1 For descendant numbers use the DECLARED proper degree $A_0(M)_Q→Q$, after the actual properness theorem. On a closed residual gerbe over C it is deg[Spec $C/G_x]=1/|G_x|$; this is exactly the rational-stack convention, not the unweighted degree of a coarse point. We are not introducing a second degree map on $M_N$: the class is first transported through the proved isomorphism into $A_0(M)$, then its existing proper degree is applied. Hence no unidentified equivariant-integration functional or unrelated nonrepresentable pushforward is needed for this use. Rational-equivalence invariance is the one in the standing degree convention. Likewise the cone identities in the companion proof are first proved on a common scheme replacement and then transported through these injective comparisons. [F1, F2, F3, F4, given, construct, algebra, step 105.1]

107.1 **Part 14: The intrinsic cone comparison used in these calculations.** For clarity, the required cone gluing has an explicit construction. On a scheme chart U closed in a smooth P, take $[C_{U/P}/T_P|U]$. Compare embeddings in P and Q by their product. After an étale refinement, a map from U to smooth Q extends to a neighbourhood in P: lift its étale affine coordinates and take the corresponding étale base change. The resulting conormal sequence identifies the product normal-cone chart with $C_{U/P}$ times the extra smooth tangent directions. Different extensions differ modulo the square of the ideal by the corresponding derivation. Its translation is exactly the tangent action already quotiented. Thus the two quotient cones are canonically identified. Triple products give the same identifications, since the conormal maps and the addition of tangent derivations are associative. This proves the cocycle and glues the intrinsic cone, not just its geometric fibres. [F1, F2, F3, F4, given, construct, algebra, step 106.1]

108.1 For a POT the affine conormal construction in part 11 gives a closed immersion of each normal cone into F∨. These embeddings are compatible with the same product refinements and tangent translations because they are induced by the specified morphism of cotangent complexes. They therefore glue to $C_M→h1/h0(E∨)$. The normal cone of a closed subscheme of a smooth pure-dimension-a scheme has pure dimension a in its fundamental cycle: its Rees deformation is integral on each ambient component, flat over the deformation parameter, and every special component has codimension one; the affine finite-type dimension formula gives the assertion, including its scheme multiplicities. Quotienting by rank-a tangent directions gives intrinsic virtual dimension zero. This verifies the rank used in the zero-section construction. The product calculation also proves the smooth-cone identity in part 10 and the zero-section compatibility needed in part 12. All Chow identities are still transported from the scheme calculations through the proved comparisons of part 13. [F1, F2, F3, F4, given, construct, algebra, step 107.1]

109.1 **Part 15: The universal normalization triangle and its actual map.** Let V be smooth projective of dimension d over C. Over T take stable-map families $(C_i,p_i,f_i)$, with selected smooth sections $p_i$ and $f_1p_1=f_2p_2=e:T→V$. Glue these sections to form C and its designated node j:T→C. Write $ν:C_1⊔C_2→C$ for normalization at that node. For self-gluing use two distinct sections of one family; its partial normalization remains connected. The affine pinch, pairs of functions with equal section value, gives the exact sequence [F1, F2, F3, F4, given, construct, algebra, step 108.1]

110.1 $0→O_C→ν_*O_{C_1⊔C_2}→j_*O_T→0$, [F1, F2, F3, F4, given, construct, algebra, step 109.1]

111.1 whose last map is value on branch 1 minus value on branch 2. This is exact before completion, by the defining fibre-product algebra. Tensor with the locally free f*TV and apply derived π_*: [F1, F2, F3, F4, given, construct, algebra, step 110.1]

112.1 $Rπ_*f*TV$ → $Rπ_1*f_1*TV$ ⊕ $Rπ_2*f_2*TV$ → e*TV → $Rπ_*f*TV[1]$.       (N) [F1, F2, F3, F4, given, construct, algebra, step 111.1]

113.1 Here $Rπ_i*$ means $R(π_i)_*$, and the middle arrow is the difference of evaluation differentials. With square-zero coefficients J, use the derived tensor of this exact sequence with π*J. The quotient $j_*O_T$ is flat over T, so there is no extra Tor term in its structure sequence; projection formula gives the coefficient version of (N). Thus a pair of first-order map deformations glues precisely when the values agree. Their discrepancy is the element of e*TV⊗J mapping to the obstruction group H¹(C,f*TV⊗π*J). This determines the map, not just the dimensions. [F1, F2, F3, F4, given, construct, algebra, step 112.1]

114.1 The actual relative POT construction in the internal construction beginning in part 1 supplies $E_i=(Rπ_i*f_i*TV)^∨$ and $E_C=(Rπ_*f*TV)^∨$, in degrees [-1,0]. Dualizing gives [F1, F2, F3, F4, given, construct, algebra, step 113.1]

115.1 $e*Ω_V$ → $E_1⊕E_2$ → $E_C$ → $e*Ω_V[1]$.                              (N∨) [F1, F2, F3, F4, given, construct, algebra, step 114.1]

116.1 The first map is the difference of the evaluation cotangent maps. Its compatibility with the POT arrows follows at the chain level, as well as on square-zero obstruction groups. Compute the structure sequence on affine branch covers and its Čech resolution: its augmentation is literally $(a,b)↦a(p_1)−b(p_2)$. Applying the universal differential gives the same difference on $f*Ω_V$, by the Leibniz rule and restriction of functions to the two sections. In the dual residue complexes of part 4 the trace on the pinched curve restricts to the sum of the traces on the normalization: at the node the generator is $dx/x=−dy/y$, so the two boundary residues cancel. Thus tensoring, taking the finite Čech total complexes and applying trace sends the augmentation to the difference of the two evaluation cotangent maps, with the displayed sign. All restrictions and augmentations are actual maps of these complexes; their commuting squares give the homotopy-coherent morphism to the cotangent triangle of the evaluation fibre square. Changing a branch cover uses its common refinement and natural restriction, while the trace comparison is the unique one preserving evaluation from part 4, so these compatibilities descend. This is stronger than identifying only the ranks or geometric tangent maps of (N∨). Its coefficient version is exactly the node-value discrepancy in step 113.1, for every square-zero module. [F1, F2, F3, F4, given, construct, algebra, step 115.1]

117.1 **Part 16: The actual scheme-level cone lemma.** Let B be smooth, P smooth over B, X⊂P closed with ideal I, and F a vector bundle on X (extension to a neighbourhood is unnecessary: the conormal operation only uses its restriction on the centre). Assume the relative POT has the strict model [F1, F2, F3, F4, given, construct, algebra, step 116.1]

118.1 [F^∨ → Ω_{P/B}|X] → [I/I² → Ω_{P/B}|X], [F1, F2, F3, F4, given, construct, algebra, step 117.1]

119.1 with the first map surjective and the right map the identity. Its virtual cycle, including the dimension of B, is [F1, F2, F3, F4, given, construct, algebra, step 118.1]

120.1 $v_X=c(X,P,F)[P]=0_F^![C_{X/P}]$. [F1, F2, F3, F4, given, construct, algebra, step 119.1]

121.1 Let a:P→W be smooth, let W'⊂W be a regular immersion, and put $P'=P×_W$ W', $D=X×_W$ W', F'=F|D. Then [F1, F2, F3, F4, given, construct, algebra, step 120.1]

122.1 $W'^!v_X=c(D,P',F')[P']$.                                          (G) [F1, F2, F3, F4, given, construct, algebra, step 121.1]

123.1 Proof: smoothness makes W'^![P]=[P']. The exact local proved supplier lem-gysin-specialization-bivariant-and-base-change applies: its ambient schemes and all the present base changes are locally of finite type over the fixed field C, its bundle N is this F on the centre, and the required conormal surjection is exactly the first map in step 118.1. Its c operation is the zero-section inverse of bundle pullback after pushing cone specialization into F; it requires neither an ambient extension of F nor flatness of X→W. Its bivariant refined-Gysin commutation gives [F1, F2, F3, F4, given, construct, algebra, step 122.1]

124.1 W'^!(c(X,P,F)[P])=c(D,P',F')(W'^![P]). [F1, F2, F3, F4, given, construct, algebra, step 123.1]

125.1 Its c operation is defined after EVERY base change by the surjection $Sym(F'^∨)→\operatorname{gr}_{I O_{P'}}O_{P'}$. The published commutation proof explicitly establishes the equality after cone specialization and pushforward into F', using its saturated deformation charts and Cartier commutation. It does not assume that normal cones commute with a nonflat base change; that assertion would be false in general. Thus (G) retains all scheme multiplicities and uses the existing local double-deformation proof, not a named BF/Costello functoriality theorem. [F1, F2, F3, F4, given, construct, algebra, step 124.1]

126.1 The actual map X→W need not be smooth: embed its graph in $P=M×W$, with M a smooth ambient over B, and use projection to W. [F1, F2, F3, F4, given, construct, algebra, step 125.1]

127.1 **Part 17: Why the node theory is exactly this refined diagonal theory.** For $X=M_1×M_2$, use the two node evaluations $X→W=V²$ and $W'=Δ_V(V)$. The fibre product $D=M_1×_V M_2$ carries the glued family. Relative to the product B of prestable-domain bases, choose graph ambient $P=M×V²$ and P'=M×V. The conormal sequence is [F1, F2, F3, F4, given, construct, algebra, step 126.1]

128.1 0→e*Ω_V→Ω_{P/B}|D→Ω_{P'/B}|D→0. [F1, F2, F3, F4, given, construct, algebra, step 127.1]

129.1 Adjoining diagonal equations to the strict model of $E_1⊕E_2$ gives [F1, F2, F3, F4, given, construct, algebra, step 128.1]

130.1 [F^∨|D ⊕ e*Ω_V → Ω_{P/B}|D].                                    (A) [F1, F2, F3, F4, given, construct, algebra, step 129.1]

131.1 Quotienting its acyclic subcomplex e*Ω_V→e*Ω_V identifies it with [F^∨|D→Ω_{P'/B}|D]. Its derived triangle is exactly (N∨). Compatibility with the actual POT maps was checked by the common square-zero discrepancy in part 15; matching virtual rank alone would not suffice. Applying (G) therefore gives [F1, F2, F3, F4, given, construct, algebra, step 130.1]

132.1 $[D,E_C]^{\mathrm{vir}}=Δ_V^!([M_1,E_1]^{\mathrm{vir}}×[M_2,E_2]^{\mathrm{vir}})$.                   (S) [F1, F2, F3, F4, given, construct, algebra, step 131.1]

133.1 For self-gluing the same formula uses the two extra evaluations on $M_{g−1,n+2}(V,β)$. The product cycle uses product ambient embeddings and direct-sum obstruction bundles; the two zero-section operations commute by the same published refined-Gysin lemma. The dimension decreases by d. There is no additional smoothing-line Euler factor in (S). [F1, F2, F3, F4, given, construct, algebra, step 132.1]

134.1 **Part 18: Global strictification and passage from schemes to stacks.** A global two-term resolution alone does NOT guarantee the strict ambient model above: a global lift of $Ω_P$ into E⁰ can be obstructed. The preceding parts supply the following actual construction in the shared Chow root. For a $GL_s$-framed quotient, full-rank matrix good pairs $U_N$ give quasi-projective scheme quotients $H_N=(H×U_N)/GL_s$. Bundle homotopy plus localization outside the increasing-codimension bad locus identifies their fixed-degree Chow groups in a stable range. The equivariant ample line gives quasi-projectivity on $H_N$ by its associated projective bundle over the Grassmannian. [F1, F2, F3, F4, given, construct, algebra, step 133.1]

135.1 For each such quasi-projective scheme X, the incidence-complement construction followed by an elementary affine torsor yields an affine scheme T→X that is a composite of two vector-bundle torsors. Explicitly embed X locally closed in $P^m$. The nonincidence scheme $J⊂P^m×(P^m)^∨$ is affine (the complement of the Segre hyperplane), and $J→P^m$ is a vector-bundle torsor. Its pullback $J_X$ is quasi-affine. Write $J_X$ open in its affine closure Spec A with complement $V(f_1,…,f_r)$. Then [F1, F2, F3, F4, given, construct, algebra, step 134.1]

136.1 $T=\operatorname{Spec}$ $A[t_1,…,t_r]/(\sum  f_i t_i−1)$ [F1, F2, F3, F4, given, construct, algebra, step 135.1]

137.1 is affine and maps onto $J_X$; on the open $J_X$ this is a torsor under $\operatorname{ker}(O^r→O)$. Pullbacks on Chow groups are isomorphisms for these torsors, by the proved projective compactification proof: an affine bundle associated to 0→V→W→O→0 is P(W) minus P(V), and projective-bundle formula plus localization gives its homotopy isomorphism. [F1, F2, F3, F4, given, construct, algebra, step 136.1]

138.1 Here is an explicit affine strictification. Write the ambient cotangent truncation as [I/I²→Ω], $Ω=Ω_{P/B}|T$, and represent the POT by $E=[E⁻¹→E⁰]$ with chain map φ to it. Lift Ω→h⁰E to k:Ω→E⁰; projectivity of Ω over the affine T permits this. Then δ:E⁻¹⊕Ω→E⁰, $δ(u,ω)=d_E u+kω$, is surjective, since k surjects onto h⁰E. Its kernel F is projective because E⁰ is projective. The complex [F→Ω], with differential projection to Ω, maps quasi-isomorphically to E by (u,ω)↦−u in degree −1 and k in degree zero. Since φ⁰k−id has image in $im(d_I)$, lift it to h:Ω→I/I². Subtract the homotopy h. The new map to the cotangent truncation has degree zero the identity and degree −1 [F1, F2, F3, F4, given, construct, algebra, step 137.1]

139.1 (u,ω)↦−φ⁻¹u−hω. [F1, F2, F3, F4, given, construct, algebra, step 138.1]

140.1 Its differential is ω: use $d_E u=−kω$ and $d_I h=φ⁰k−id$. The h⁰-isomorphism and h⁻¹-surjection imply that this F→I/I² is surjective: for z∈I/I², first match $d_I z$ using a vector of F, then lift the remaining element of ker $d_I$ by the h⁻¹-surjection. Thus [F→Ω] is the actual strict conormal model. This construction does not assume that the original lift k was split or that a homotopy on Ω extended to E⁰. [F1, F2, F3, F4, given, construct, algebra, step 139.1]

141.1 Apply (G) on a COMMON affine torsor replacement for all complexes in (N∨), so that its compatibility is retained. Smooth torsor pullback adds the ordinary relative cotangent bundle in degree zero; on the affine replacement this extension splits because that bundle is projective and E has no positive cohomology. Include these smooth directions in the ambient and in the strictification. The torsor Chow pullback is injective, hence the equality descends to $H_N$. Passing to the proved stable range gives (S) in rational Chow of the stack. There is no assertion that equality on an étale atlas implies Chow equality. The full quotient-Chow and torsor proof is the internal construction beginning in part 8, not merely an asserted existence of abstract two-term resolutions. [F1, F2, F3, F4, given, construct, algebra, step 140.1]

142.1 **Part 19: Boundary pullback and descendants.** Use the prestable marked-domain stack as deformation base; mapped rational components need not themselves be stable as domains. The labelled designated-node stratum is the gluing product of domain stacks. Locally its normal deformation is xy=t and the labelled boundary is $t=0$, with normal line the tensor product of the two branch tangent lines. Thus it is a regular codimension-one morphism, locally an immersion. Labelling retains the chosen branch when the global boundary image self-intersects. [F1, F2, F3, F4, given, construct, algebra, step 141.1]

143.1 The fibre product of the map stack with this labelled domain boundary is D: a map from a pinched curve is exactly two branch maps with equal evaluation. The domain-base instance of (G), together with (S), gives [F1, F2, F3, F4, given, construct, algebra, step 142.1]

144.1 $j^![M]^{\mathrm{vir}}=Δ_V^!([M_1]^{\mathrm{vir}}×[M_2]^{\mathrm{vir}})$ [F1, F2, F3, F4, given, construct, algebra, step 143.1]

145.1 on that labelled gluing fibre product. Pushforward gives the corresponding boundary contribution. When graph labels are forgotten, use the actual finite generic degree, equivalently the specified graph automorphism order; rational Chow coefficients allow its inverse. No unlabelled factor of two is inserted without first fixing these conventions. Sum effective decompositions β=β_1+β_2 only over the actual components of the gluing fibre product. [F1, F2, F3, F4, given, construct, algebra, step 144.1]

146.1 Old-mark evaluation and cotangent lines pull back to those on their branch: neither its smooth marked neighbourhood nor the dualizing restriction at that mark changes on gluing. Therefore algebraic descendant insertions $γ_i∈A^*(V)_Q$ and their cotangent-line powers commute with (S). The refined-diagonal identity is the full basis-independent Chow splitting formula. A finite basis expansion is available only under the EXTRA specified Chow–Künneth hypothesis that $[Δ_V]=\sum _μ$ $γ_μ⊠γ^μ$ in $A^d(V×V)_Q$. No such decomposition is asserted for a general smooth projective V, and no unproved comparison with cohomological stack integration is used. [F1, F2, F3, F4, given, construct, algebra, step 145.1]

147.1 **Part 20: Smooth target deformation and scope.** For a smooth projective family V→S over a smooth base, take $E_{/S}=(Rπ_*f*T_{V/S})^∨$ over the prestable-domain stack times S. At a regular fibre s→S the POT root's base-change comparison identifies its restriction with the stable-map theory of $V_s$. The same ambient-scheme lemma gives [F1, F2, F3, F4, given, construct, algebra, step 146.1]

148.1 $s^![M(V/S),E_{/S}]^{\mathrm{vir}}=[M(V_s),E_s]^{\mathrm{vir}}$. [F1, F2, F3, F4, given, construct, algebra, step 147.1]

149.1 Evaluation, cotangent lines and insertions that extend across the family commute with this pullback. Proper pushforward compatibility gives deformation constancy for those insertions and a locally constant effective class. A singular-target degeneration formula requires its own expanded/logarithmic moduli and matching obstruction theory; it does not follow from this smooth-family formula. Equivariant virtual localization likewise requires its own fixed/moving POT and Euler-class proof. [F1, F2, F3, F4, given, construct, algebra, step 148.1]

150.1 **Part 21: All-base stabilization of the domain.** Assume $2g−2+n>0$. A stable map's domain need not be stable as an n-pointed curve. Nevertheless there is a canonical all-base stabilization st(C), constructed from the full-section-algebra forgetting construction proved in [F1], without assuming the full proper stable-curve provider. [F1, F2, F3, F4, given, construct, algebra, step 149.1]

151.1 Work fppf locally on its base T. On a chosen geometric fibre add three distinct unmarked smooth points on each component. The relative smooth locus and its finite fibre products are smooth over T, so after an étale (hence fppf) neighbourhood these points lift to disjoint auxiliary sections, disjoint from the old sections. The resulting marked fibre is stable. This property holds on a neighbourhood: its fourth marked-dualizing power has H¹=0 and is very ample on that fibre by normalized-component interpolation; the nonnegative cohomology complex, evaluation/Nakayama, and the finite closed-immersion criterion give the corresponding open neighbourhood on which it is a complete embedding. Its positive component degrees imply stability there. This construction also applies on non-Noetherian bases by the actual proper-flat-finite-presentation/coherent-sheaf approximation interface and its finite matrix minors, as in the uniform presentation proof. Thus these neighbourhoods form an fppf cover, with an actual stable auxiliary-marked family. [F1, F2, F3, F4, given, construct, algebra, step 150.1]

152.1 Forget the auxiliary labels one at a time by the full-section-algebra construction proved in [F1]. Every intermediate type remains in the stable range. It gives a stable n-pointed family $S_α$ and a proper contraction $q_α:C→S_α$, universally satisfying $(q_α)_*O_C=O_{S_α}$. Its fibre contracts exactly the unstable rational tails and bridges after the labels have been forgotten. This description includes nonconstant mapped components; the map to V is not being factored through this domain stabilization. [F1, F2, F3, F4, given, construct, algebra, step 151.1]

153.1 Here is independence of auxiliary choices over ALL bases. Stabilizing the marked dual graph is confluent: deletion of a rational tail with at most one retained mark transfers that mark to its attachment, and deletion of an unmarked rational bridge joins its two remaining branches. Disjoint deletions commute. For adjacent deletions, deleting either first contracts the same connected chain or tree and transfers the same retained marked endpoint; their result after both deletions agrees. Iterating proves the unique stable marked graph and the same equivalence classes of points on each fibre. Equivalently retain the minimal connected core supporting positive-genus vertices and marked ends, and suppress its unmarked genus-zero valence-two vertices. The excluded whole rational two-pointed and whole unmarked genus-one cases are precisely excluded by $2g−2+n>0$. [F1, F2, F3, F4, given, construct, algebra, step 152.1]

154.1 For two choices α and β choose a third finite auxiliary set γ disjoint from both, after another fppf cover, and use the stable families with auxiliary sets α∪γ and β∪γ. Their successive forgettings show that the resulting q_α and q_β contract the same geometric fibre equivalence relation, by this graph confluence. No density of generic points is used. [F1, F2, F3, F4, given, construct, algebra, step 153.1]

155.1 The required factorization is scheme-theoretic. If q:C→S is one such proper contraction with $q_*O_C=O_S$ universally, and h:C→Z is constant on its geometric fibres, with Z separated, fix a point s∈S and an affine neighbourhood W⊂Z of that fibre's image. Properness makes $q(C\setminus h^{-1}W)$ closed and disjoint from s. On its complementary neighbourhood $S_0$, h has image in W. The ring map to $Γ(q^{-1}S_0,O_C)=Γ(S_0,O_S)$ defines the unique factor $S_0→W$. These factors glue uniquely on overlaps. Apply this to $h=q_β$ and $q=q_α$, and conversely. The two composites are identities by the same uniqueness, since they become the identity after composition with $q_α$ or $q_β$. This proves a unique isomorphism $S_α≅S_β$ commuting with their maps from C. It proves the cocycle identity and compatibility with arbitrary base change. The stable families and their maps therefore descend from the fppf cover, by the actual projective embedded-ideal descent used in the stable-family presentation. Thus st is a canonical all-base morphism to the stable-curve moduli functor. [F1, F2, F3, F4, given, construct, algebra, step 154.1]

156.1 **Part 22: Pullback of a stable boundary is a sum of node cuts.** Let a labelled stable boundary designate one stable node after the stabilization in part 21. In the prestable domain its inverse image is a chain of rational bridges between the two surviving branches; the chain can have length zero. Its components can carry positive map degree, so must NOT be discarded in the map gluing formula. [F1, F2, F3, F4, given, construct, algebra, step 155.1]

157.1 The smoothing parameter is the product of the node parameters along that chain, up to a unit. For one bridge this follows from the actual plumbing equations [F1, F2, F3, F4, given, construct, algebra, step 156.1]

158.1 xz=a,   wy=b,   zw=1, [F1, F2, F3, F4, given, construct, algebra, step 157.1]

159.1 on its two branch charts and overlap: multiply to obtain xy=ab. Thus contracting the bridge changes the two smoothing parameters a,b into the stable node parameter $t=uab$, where u is an invertible coordinate-change factor. Iterate along the chain to obtain $t=u∏_{i=1}^r$ $t_i$. The tensor factors are the appropriate branch tangent lines, so this identity also identifies the smoothing line with their tensor product; it is invariant under changing the local coordinates. Local deformation parameters exist on a smooth versal prestable-domain chart by the nodal hypersurface deformation calculation. On that chart the $t_i$ are independent smoothing parameters; the calculation is an equality of effective Cartier divisors with multiplicity ONE on each designated-node branch. [F1, F2, F3, F4, given, construct, algebra, step 158.1]

160.1 Consequently the pullback of the stable boundary Cartier divisor to the prestable-domain stack is the sum of the designated-node divisors for these cuts. This is a global Cartier-divisor identity: local equations have the displayed product, hence their principal ideals and transition units give the same Cartier divisor on overlaps. We do not infer Chow equality merely from equality on an étale chart. The Cartier-divisor identity itself glues, and its bivariant Cartier operation is additive. For an arbitrary base change, even if some $t_i$ vanish identically or are zero divisors, use that bivariant operation on the universal divisor; no claim that its scheme-theoretic pullback is still regularly embedded is needed. [F1, F2, F3, F4, given, construct, algebra, step 159.1]

161.1 Apply the labelled-node identity of parts 17–19 separately to each summand and then push forward along its gluing morphism. This gives the stable-boundary splitting formula as the SUM over all designated cuts, effective class decompositions, and prescribed labelled partitions (or graph automorphism degrees after labels are forgotten). In particular it includes cuts on either side of a positive-degree bridge and every intermediate degree distribution in a longer chain. The fibre product with the stable boundary is not asserted to be a disjoint union of the two-component gluing spaces: intersections and multiplicities are controlled by the Cartier pullback identity $t=u∏t_i$. The nonseparating boundary has the same local calculation, with the two surviving branches on the same stabilized component. [F1, F2, F3, F4, given, construct, algebra, step 160.1]

162.1 **Part 23: Universal curve, POT and virtual cycle.** Let V/C be smooth projective of dimension d, β effective, and $2g−2+n>0$. The proper stable-map theorem supplies the separated proper DM stack $M=\overline{M}_{g,n}(V,β)$, its actual $GL_s$ frame quotient, universal nodal curve π:C→M, sections $s_i$, and universal f:C→V. Its domain need not be stable as an n-pointed curve. The prestable Artin stack P and the relative/absolute construction in the internal construction beginning in part 1 therefore apply, rather than replacing P by $\overline{M}_{g,n}$. [F1, F2, F3, F4, given, construct, algebra, step 161.1]

163.1 The relative morphism is $φ_{\mathrm{rel}}:(Rπ_*f*T_V)^∨→L_{M/P}$, defined by the universal differential and the constructed all-base curve trace. The absolute perfect object is the homotopy fibre of $E_{\mathrm{rel}}→p*L_P[1]$, with its actual morphism to $L_M$. Its degree +1 vanishes because stable-map infinitesimal automorphisms vanish over C, so it has Tor-amplitude[-1,0]. Its rank is [F1, F2, F3, F4, given, construct, algebra, step 162.1]

164.1 $v=(1−g)(d−3)+c1(T_V)·β+n$. [F1, F2, F3, F4, given, construct, algebra, step 163.1]

165.1 All infinitesimal comparisons were proved for every finite square-zero coefficient module, not just for geometric tangent spaces. [F1, F2, F3, F4, given, construct, algebra, step 164.1]

166.1 Use the explicit quotient-Chow construction. Pull the actual POT to a matrix scheme replacement and then its two affine-bundle torsors. On the affine total scheme the induced absolute POT has a strict two-term projective presentation and a strict surjective conormal model. Its cycle is zero-section Gysin of the actual embedded normal cone. The explicit common-resolution matrices prove independence of the presentation; the cone product/translation comparisons prove independence of the smooth ambient, torsor and smooth splitting. The comparisons with the declared rational Chow convention are injective isomorphisms in the relevant dimension. Transporting the cycle back defines [F1, F2, F3, F4, given, construct, algebra, step 165.1]

167.1 $[M]^{\mathrm{vir}}∈A_v(M)_Q$. [F1, F2, F3, F4, given, construct, algebra, step 166.1]

168.1 This is the global class for this actual moduli stack. It is not a local collection of classes asserted to glue in Chow. It agrees with the zero-section BF convention when a global resolution is used, by the proved common-refinement/affine replacement calculation; BF Proposition5.3 is not an external input. [F1, F2, F3, F4, given, construct, algebra, step 167.1]

169.1 **Part 24: Evaluation, cotangent lines and algebraic descendant integrals.** Define $ev_i=f∘s_i:M→V$ and $L_i=s_i*ω_π$. The relative dualizing line is invertible and has arbitrary base-change compatibility by the nodal hypersurface/trace construction. Since each $s_i$ lies in the relative smooth locus, $L_i$ is the cotangent line of that marking. Set $ψ_i=c1(L_i)$ in operational rational Chow. The all-base domain-stabilization construction in the node-gluing proof gives $st:M→\overline{M}_{g,n}$ when a stabilized-domain insertion is desired; the construction does not factor the map f through a positive-degree component that the domain stabilization contracts. [F1, F2, F3, F4, given, construct, algebra, step 168.1]

170.1 For $γ_i∈A^{c_i}(V)_Q$, integers $a_i≥0$, and any additional stated algebraic insertion θ on the domain stack, define [F1, F2, F3, F4, given, construct, algebra, step 169.1]

171.1 $⟨ ∏ τ_{a_i}(γ_i); θ ⟩_{g,β} =deg_M((∏ ψ_i^{a_i} ev_i*γ_i) · st*θ · [M]^{\mathrm{vir}})$ [F1, F2, F3, F4, given, construct, algebra, step 170.1]

172.1 when the total codimension is v, and set the corresponding numerical invariant to zero when the dimension does not match. For θ=1 no stabilization insertion is required. Smoothness of V identifies its Chow cohomology with operational Chow, so pullback along every evaluation is defined; the line Chern operators are also operational. The product therefore acts on the actual virtual cycle. Properness of M gives the rational degree in the declared stack convention, including weight 1/|Aut(x)| at a closed residual gerbe. This uses the class transported into $A_0(M)$, not an undefined integration map on a nonproper matrix approximation. The result is independent of all cone/resolution/atlas choices already eliminated in the construction. [F1, F2, F3, F4, given, construct, algebra, step 171.1]

173.1 **Part 25: The exact smooth-family deformation formula.** Let V→S be smooth projective with S smooth connected, a chosen relatively very ample line, and a proper open-and-closed fixed-class component of the relative finite-type map stack whose fibre class is the specified locally constant β. This is the exact family/class hypothesis. The same relative universal-differential construction uses $T_{V/S}$ and the domain Artin stack times S. Its restriction to every fibre is the constructed fibre theory by the actual trace/base-change comparisons. Include the ordinary S directions for the total absolute theory. The normal-cone/conormal Rees identity in the gluing root proves, for a regular fibre s→S, [F1, F2, F3, F4, given, construct, algebra, step 172.1]

174.1 $s^![M(V/S)]^{\mathrm{vir}}=[M(V_s)]^{\mathrm{vir}}$. [F1, F2, F3, F4, given, construct, algebra, step 173.1]

175.1 This is a REFINED base pullback; the singular moduli fibre inclusion itself is not asserted regular. If the $γ_i$ and any θ extend as operational algebraic classes on this family, evaluation, cotangent and domain insertions commute with this pullback. Apply proper pushforward. In matching relative virtual dimension the pushed class lies in $A_{\dim S}(S)$, so it is a constant rational multiple of [S]; fibre Gysin gives that same coefficient. Thus the stated algebraic descendants are constant in the smooth family. No singular-target degeneration or arbitrary specialization theorem was assumed to obtain this identity. [F1, F2, F3, F4, given, construct, algebra, step 174.1]

176.1 **Part 26: The exact labelled-node and stable-boundary splitting formula.** For a separating designated node, fix the labelled partition and genera/classes. Put $M_i=\overline{M}_{g_i,n_i+1}(V,β_i)$, use the two last evaluations, and $D=M_1×_V M_2$. The fibre product carries the actual pinched universal map. Relative to the product prestable-domain bases, its dual obstruction triangle is [F1, F2, F3, F4, given, construct, algebra, step 175.1]

177.1 $e*Ω_V→E_1⊕E_2→E_D→e*Ω_V[1]$. [F1, F2, F3, F4, given, construct, algebra, step 176.1]

178.1 Its first arrow and its compatibility with the cotangent arrows were proved by the square-zero discrepancy of the two node values. The strict conormal/diagonal Rees calculation then gives [F1, F2, F3, F4, given, construct, algebra, step 177.1]

179.1 $[D]^{\mathrm{vir}}=Δ_V^!([M_1]^{\mathrm{vir}}×[M_2]^{\mathrm{vir}})$. [F1, F2, F3, F4, given, construct, algebra, step 178.1]

180.1 The dimension drop is d; no extra smoothing-line Euler factor occurs in this identity. For nonseparating gluing use the two distinguished sections on Mbar_g−1,n+2(V,β) and the same refined diagonal. These are Chow identities before choosing insertions, not equalities inferred from virtual dimensions. [F1, F2, F3, F4, given, construct, algebra, step 179.1]

181.1 The domain-boundary normal parameter is xy=t. Its regular Cartier operation on the prestable-domain base, refined after base change to map stacks, gives the designated-node boundary pullback of [M]^vir as the displayed diagonal class. The map-stack fibre inclusion need not itself be regular. Old evaluation and cotangent lines restrict to those on the corresponding branch, so all the algebraic descendant insertions commute with the identity. Push along the actual proper labelled gluing map to get the boundary contribution; when labels are forgotten, use its actual finite generic degree (or the prescribed graph automorphism order), with rational coefficients. [F1, F2, F3, F4, given, construct, algebra, step 180.1]

182.1 For a boundary on the STABILIZED domain, do not identify its whole fibre product with a disjoint union of the D. The all-base stabilization proof and the explicit bridge equations xz=a, wy=b, zw=1 give $t=u∏t_j$ along its contracted bridge chain. Hence its Cartier operation pulls back as the SUM of the designated-node operations, each with multiplicity one. Apply the labelled formula to each cut and push forward. This is the stable-boundary splitting identity, summed over the labelled partitions, actual effective class distributions and all cuts in a positive-degree bridge chain. Only finitely many nonempty class components occur in each bounded-degree moduli presentation. The same calculation handles nonseparating boundary branches. [F1, F2, F3, F4, given, construct, algebra, step 181.1]

183.1 These formulas are basis-independent in Chow and hold for every smooth projective V. A sum over a finite dual Chow basis is equivalent only when the EXTRA actual decomposition [Δ_V]=Σγ_μ⊠γ^μ has been specified in Chow; no such decomposition is claimed for a general V. This does not replace the refined-diagonal identity by a false general Chow–Künneth assertion. [F1, F2, F3, F4, given, construct, algebra, step 182.1]

184.1 **Part 27: Scope of the construction.** The full algebraic stable-map, compatible POT, rational virtual cycle, evaluation/cotangent line and algebraic descendant construction is now supplied. The smooth target-family and labelled/stabilized boundary formulas have the exact hypotheses and actual cone/Gysin proofs above. As the original Statement says, singular-target degeneration and equivariant localization are SEPARATE assertions: they require their own expanded/logarithmic matching theory or fixed/moving equivariant theory. They are not asserted by this theorem merely by naming a POT. No analytic pseudoholomorphic virtual-class identification is made. [F1, F2, F3, F4, given, construct, algebra, step 183.1] ∎

## Remarks

The proof gives the algebraic obstruction theory, Chow class, descendants, smooth-target-family formula and refined-diagonal boundary splitting with their exact hypotheses. The original Statement keeps singular-target degeneration and equivariant virtual localization as separate assertions; neither is claimed from this construction alone. No general Chow–Künneth decomposition or analytic virtual-class comparison is assumed. The universal-differential construction is adapted from Behrend–Fantechi, The Intrinsic Normal Cone, arXiv:alg-geom/9601010v1, Spaces of Morphisms, Proposition 6.2 and the beginning of Section 7; the all-base trace, absolute Artin-degree cancellation, affine conormal/common-resolution and required refined-Gysin comparisons are proved internally.
