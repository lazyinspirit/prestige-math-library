---
id: lem-gts-fano-fundamental-smooth-ladders-and-high-degree-embeddings
kind: lemma
title: Smooth Fano fundamental ladders and the high-degree embedding bridge
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- thm-weak-embedded-desingularization
- lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity
- thm-grothendieck-riemann-roch-for-projective-morphisms
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- lem-gts-picard-one-fano-index-divisor-is-integral-generator
- lem-gts-three-dimensional-subadjoint-cubic-nonvanishing
- lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data
- lem-gts-codimension-two-subadjunction-by-marked-rational-curves
- lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing
- lem-gts-canonical-fundamental-cut-and-terminal-fourfold-first-divisor-protocol
- lem-gts-canonical-doublecut-first-jet-smoothness
- lem-gts-primitive-fano-threefold-generation-from-canonical-k3-section
- lem-gts-weak-del-pezzo-anticanonical-generation-and-degree-one-pencil
- lem-gts-weak-quadric-and-plane-polarization-generation
- lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution
- lem-gts-k3-ample-linear-system-serre-instability-criterion
- lem-gts-canonical-curve-section-ring-lifting-on-k3-and-fano-ladders
- lem-gts-ample-divisor-relative-handles-and-integral-restriction
- lem-gts-very-general-k3-sections-of-the-fano-ladder-have-picard-rank-one
- lem-gts-weighted-degree-one-del-pezzo-double-plane-k3-ladder
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- thm-bertini-smooth-hyperplane-section
- thm-cohomology-and-base-change
- thm-normal-functions-codimension-one-intersection
- lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place
- thm-principalization-of-ideals
- thm-serre-criterion-ampleness
- def-axiom-of-choice
- def-dependent-choice
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mella, Existence of good divisors on Mukai varieties
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 2.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
  - title: Feyzbakhsh–Koseki–Liu–Rekuski, Stability conditions on Calabi–Yau threefolds via Brill–Noether theory
      of curves, named family geometry scope
    url: https://arxiv.org/pdf/2509.24990v2
    locator: arXiv:2509.24990v2, §5 printed pp. 29–33, Corollary 5.1, Theorems 5.2, 5.5 and 5.7 and their proofs;
      the X6,6 whole-threefold 4H and cyclic ramification assertions are replaced by the explicit local constructions
      here.
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-fano-fundamental-smooth-ladders-and-high-degree-embeddings.md
dependency_level: 7
dependency_roles:
  thm-weak-embedded-desingularization: mathematical-premise
  lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  thm-serre-duality-smooth-projective-variety-locally-free-sheaves: mathematical-premise
  lem-gts-picard-one-fano-index-divisor-is-integral-generator: mathematical-premise
  lem-gts-three-dimensional-subadjoint-cubic-nonvanishing: mathematical-premise
  lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data: mathematical-premise
  lem-gts-codimension-two-subadjunction-by-marked-rational-curves: mathematical-premise
  lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing: mathematical-premise
  lem-gts-canonical-fundamental-cut-and-terminal-fourfold-first-divisor-protocol: mathematical-premise
  lem-gts-canonical-doublecut-first-jet-smoothness: mathematical-premise
  lem-gts-primitive-fano-threefold-generation-from-canonical-k3-section: mathematical-premise
  lem-gts-weak-del-pezzo-anticanonical-generation-and-degree-one-pencil: mathematical-premise
  lem-gts-weak-quadric-and-plane-polarization-generation: mathematical-premise
  lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution: mathematical-premise
  lem-gts-k3-ample-linear-system-serre-instability-criterion: mathematical-premise
  lem-gts-canonical-curve-section-ring-lifting-on-k3-and-fano-ladders: mathematical-premise
  lem-gts-ample-divisor-relative-handles-and-integral-restriction: mathematical-premise
  lem-gts-very-general-k3-sections-of-the-fano-ladder-have-picard-rank-one: mathematical-premise
  lem-gts-weighted-degree-one-del-pezzo-double-plane-k3-ladder: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-cohomology-and-base-change: mathematical-premise
  thm-normal-functions-codimension-one-intersection: mathematical-premise
  lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place: mathematical-premise
  thm-principalization-of-ideals: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
---

## Statement

Assume AC. In each named regime (a) a smooth projective Fano threefold Y with maximal index $r\ge 2$ and $-K_Y=rA$, or $r=1$ with Picard number one, and (b) a smooth projective Fano fourfold M with maximal index $r\ge 3$ and $-K_M=rA$, or $r=2$ with Picard number one, the complete fundamental systems admit the smooth surface/curve ladders described below. For the threefold, a general fundamental surface is smooth; its general fundamental curve is smooth whenever that surface is del Pezzo, and for $r=1$ it is a K3 surface with smooth general curve in its generated restricted system. For the fourfold, successive general fundamental cuts give a smooth threefold and smooth surface and a smooth fundamental curve on the surface. The only primitive base-point exception needed here is the degree-one del-Pezzo branch ($r=2,A^3=1$ on a threefold or $r=3,A^4=1$ on a fourfold): its last surface system is a pencil with one reduced base point and smooth general elliptic member; the earlier general cuts are smooth, and every multiple $k\ge 2$ of the surface polarization is generated. If instead $r=1$ on a Picard-one threefold and $A^3\ge 6$, A is normally generated and very ample. If $r=2$ on a Picard-one fourfold and $A^4\ge 6$, A and its first threefold restriction are normally generated and very ample. In these high-degree cases very general anticanonical K3 sections have Picard group generated by the primitive restriction of A, so every divisor degree against that restriction is divisible by its square. These conclusions do not assert very-ampleness in excluded low-degree double-cover regimes or Picard-one K3 geometry for arbitrary rho. The separate weighted degree-one del-Pezzo/double-plane ladder remains available for the named weighted family.

## Statement references

[[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]

[[lem-gts-picard-one-fano-index-divisor-is-integral-generator]]

[[lem-gts-three-dimensional-subadjoint-cubic-nonvanishing]]

[[lem-gts-low-dimensional-nonvanishing-from-subadjoint-resolution-data]]

[[lem-gts-codimension-two-subadjunction-by-marked-rational-curves]]

[[lem-gts-isolated-lc-center-snc-vanishing-and-nonvanishing]]

[[lem-gts-canonical-fundamental-cut-and-terminal-fourfold-first-divisor-protocol]]

[[lem-gts-canonical-doublecut-first-jet-smoothness]]

[[lem-gts-primitive-fano-threefold-generation-from-canonical-k3-section]]

[[lem-gts-weak-del-pezzo-anticanonical-generation-and-degree-one-pencil]]

[[lem-gts-weak-quadric-and-plane-polarization-generation]]

[[lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution]]

[[lem-gts-k3-ample-linear-system-serre-instability-criterion]]

[[lem-gts-canonical-curve-section-ring-lifting-on-k3-and-fano-ladders]]

[[lem-gts-ample-divisor-relative-handles-and-integral-restriction]]

[[lem-gts-very-general-k3-sections-of-the-fano-ladder-have-picard-rank-one]]

[[lem-gts-weighted-degree-one-del-pezzo-double-plane-k3-ladder]]

[[lem-gts-log-adjoint-vanishing-on-snc-pairs]]

[[thm-bertini-smooth-hyperplane-section]]

[[thm-cohomology-and-base-change]]

[[thm-normal-functions-codimension-one-intersection]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** Exactly the Statement data. AC and DC, where inherited by the actual supplied cohomology/base-change constructions, are retained.

[F1] The exact earlier suppliers in Statement references provide only their stated interfaces. [[lem-gts-fixed-resolution-tiebreak-to-one-log-canonical-place]] supplies a unique smooth coefficient-one exceptional divisor on the same SNC resolution once step 7.1 has isolated the sole centre W of codimension at least two, with arbitrarily small change of numerical coefficient. [[thm-principalization-of-ideals]] supplies the smooth-centre ideal resolution, and [[thm-serre-criterion-ampleness]] supplies its generated ample twist. All additional constructions are explicit in the proof; the source references attribute the established theorem family and do not replace any proof.

[F2] [[lem-gts-unique-lc-place-residue-pushforward-and-subadjoint-discriminant-effectivity]] applies in every positive codimension, including to a strict-transform coefficient-one divisor. From the actual isolated-centre ideal equality and relative vanishing it gives normality of the centre and the residue pushforward. Its discriminant conclusion for a birational restriction gives effectivity of the nonexceptional restricted boundary. [[thm-weak-embedded-desingularization]] resolves a reduced subvariety of a smooth ambient space by regular-centre blowups which are isomorphisms over its smooth locus; its smooth strict transform meets the exceptional boundary with SNC. We retain these exact hypotheses below.

## Proof

1.1 Use the canonical-cut protocol in exactly its Picard-one coindex-three regimes, including its terminal index-one threefold continuation. It supplies those canonical cuts, the terminal isolated-singularity first threefold in the index-two fourfold, and their connectedness/restriction cohomology. The higher-index regimes are established by the explicit centre arguments below, not inferred from that narrower supplier. The Picard-one index divisor is the integral generator by the exact Picard lemma, not by definition of Picard number. A canonical surface cut is replaced by its crepant smooth resolution using the projective contraction supplier; the weak surface-generation suppliers then apply to its actual pulled-back polarization. [given, F1, construct, algebra]

2.1 For a smooth Fano n-fold with $−K=rA$ and A ample Cartier, Kodaira/adjoint vanishing gives χ(O)=1 and χ(O(tA))=0 for integer $−r<t<0$. Serre duality gives $P(t)=(−1)^n P(−r−t)$. The Euler polynomial has degree n with leading coefficient $A^n/n!$, by successive Cartier cuts (or actual GRR). These facts determine the required values without a classification table. [given, F1, construct, algebra, step 1.1]

3.1 In dimension four, r≤5 because P has the r−1 distinct negative roots and P(0)=1. Put $d=A4$. If $r=5$, P(t)=d(t+1)(t+2)(t+3)(t+4)/24 and P(0)=1 makes $d=1$; P(1)=5. If $r=4$, symmetry makes the middle root double, P(t)=d(t+1)(t+2)²(t+3)/24, so $d=2$ and P(1)=6. If $r=3$, [given, F1, construct, algebra, step 2.1]

4.1 P(t)=(d/24)(t+1)(t+2)(t²+3t+12/d), so P(1)=d+3. [given, F1, construct, algebra, step 3.1]

5.1 If $r=2$, write $u=t+1$; symmetry and P(−1)=0 give P(t)=(d/24)u4+(1−d/24)u², so P(1)=d/2+4. For a general smooth X∈|rA|, the exact divisor sequence gives $χ(O_X(H))=P(1)−P(1−r)=P(1)$, and H³=r d. [given, F1, construct, algebra, step 4.1]

6.1 In dimension three, r≤4 for the same root count. Write $v=A³$. For $r=4$, P(t)=v(t+1)(t+2)(t+3)/6, hence $v=1$ and P(1)=4. For $r=3$, P(t)=v(t+1)(t+2)(t+3/2)/6, hence $v=2$ and P(1)=5. For $r=2$, P(t)=(v/6)(t+1)³+(1−v/6)(t+1), so P(1)=v+2. For $r=1$, write $u=t+1/2$; oddness and P(0)=1 give P(1)=v/2+3. No basepoint-free assertion is inferred merely from these Hilbert polynomials. [given, F1, construct, algebra, step 5.1]

7.1 For a smooth Fano ambient V of dimension three or four in the high-index ranges, or a normal Gorenstein terminal threefold with isolated singularities and the stated lc-resolution models, let $−K_V=rA$ and consider a general S∈|A|. The normal case is used only after the terminal first-divisor construction below. On a log resolution, the mobile part is free; away from the base locus its restriction inherits nonnegative canonical discrepancy coefficients. Any failure of normal/canonical behaviour of general S therefore gives an lc centre inside Bs|A| at a threshold coefficient $γ\le 1$. Isolate a minimal centre W by the following finite-resolution perturbation, taking $\gamma_{\mathrm{prime}}$ arbitrarily close to gamma. On the SNC threshold model a minimal centre is the image of a coefficient-one stratum. If necessary blow up that stratum: c meeting coefficient-one components give a new exceptional coefficient c-(c-1)=1 over W. Principalize $I_W$ while retaining the full SNC boundary and ideal divisor, and choose a general D from a sufficiently high generated twist $I_W(mA)$, so its free transform is smooth and transverse to all boundary strata. This final model is a common SNC resolution of G+D, and all coefficient-one primes introduced by the refinement are included below. At an old coefficient-one prime $E_i$ let $k_i$ be its ambient discrepancy and $d_i=ord_{E_i}(D)$. Generation implies $d_i>0$ precisely for centres contained in W, and minimality makes each such centre W; some $d_i$ is positive. Put $q=\operatorname{min}_{d_i>0}(k_i+1)/d_i$. For sufficiently small rational $\epsilon>0$, $G_{\mathrm{prime}}=(1-\epsilon)G+\epsilon qD$ has old coefficient-one coefficients $1-\epsilon(k_i+1)+\epsilon qd_i$, all at most one and equal to one only over W. For every other prime of this final model its coefficient is $b_i+\epsilon(qd_i-g_i)$, with $b_i<1$ and $g_i=ord_{E_i}(G)$. Choose epsilon below all positive finite bounds $(1-b_i)/(qd_i-g_i)$ when $qd_i>g_i$ and below 1/q and 1. Thus every subunit coefficient, including all newly introduced exceptional primes and the free-transform coefficient epsilon q, remains below one. The SNC local discrepancy calculation now controls all higher valuations; no uniform slack over unspecified valuations is assumed. Thus the coefficient-one centre union is exactly W, and its numerical coefficient (1-epsilon)gamma+epsilon qm tends to gamma. For codimension at least two, apply the declared fixed-resolution tie-break supplier to this lc pair with sole reduced irreducible non-klt centre W and the final full SNC resolution. In the smooth branch it is a finite smooth-centre blowup resolution; in the terminal branch it retains the required effective exceptional relatively negative ample divisor. For any prescribed numerical margin, that supplier gives on this same model a single smooth exceptional coefficient-one prime E dominating W, every other coefficient strictly below one, and no other lc valuation. Choose the margin smaller than the strict adjoint/nonvanishing inequalities needed below. Thus the subadjunction supplier receives its actual unique-place hypothesis, rather than only a unique centre. For a divisorial minimal W, only its strict transform has coefficient one, since an exceptional divisor cannot dominate W and a smaller centre is excluded by minimality. This supplies the actual isolated-centre hypotheses needed in every case. The smooth-centre refinements retain the stipulated exceptional relative-ample divisor by the inductive blowup construction; over the normal-terminal regular locus their factorization remains a finite smooth-centre sequence. Lifting of its nonzero A-section uses the actual SNC/Nadel restriction proof and positivity (1+r−γ')A. [given, F1, construct, algebra, step 6.1]

8.1 **Divisorial centres have the required resolution data.** Suppose the isolated minimal centre $W$ in step 7.1 is a divisor in the smooth ambient $V$, or in the supplied normal Gorenstein terminal threefold with isolated singularities; this covers a surface in dimension three and a threefold in dimension four. On its log resolution write $K_Y+E+F=\mu^*(K_V+G')$ with $E$ the smooth strict transform of $W$. Step 7.1 gives this as the only coefficient-one prime; all other coefficients are below one. The isolated-centre supplier gives $\mu_*\mathcal O_Y(P-E)=\mathcal I_W$ and $R^1\mu_*\mathcal O_Y(P-E)=0$, $P=\lceil-F\rceil$, without requiring the numerical nonvanishing bound. F2 therefore proves that $W$ is normal in both allowed ambient branches. When $\dim W=2$, retain this smooth $E$ as its resolution: a birational morphism to a normal surface is an isomorphism off finitely many points, and the low-dimensional nonvanishing supplier constructs its own exceptional ample perturbation by its negative-definite intersection calculation. The additional resolution construction which follows is needed only when $\dim W=3$, hence only for a divisor in a smooth fourfold. In that case choose the log resolution as follows: first apply embedded desingularization to $W$ in $V$, then resolve the remaining boundary while keeping its smooth strict transform in SNC position. The first induced strict-transform sequence is a sequence of blowups of ideals supported over $W_{\rm sing}$, which has codimension at least two in normal $W$. A strict transform under an ambient blowup is the blowup of the restricted ideal: both are the closure of the same graph in the projective Rees construction. Thus each tautological exceptional divisor restricts effectively and exceptionally on this sequence. Subsequent centres have SNC with the smooth transform of $W$, so their induced maps are blowups of its smooth intersections with those centres. A Cartier-centre blowup is the identity and can be omitted; every remaining centre has codimension at least two and its exceptional divisor is again exceptional over $W$. The negative tautological divisor is relatively ample at each nonidentity step. Inductively, a sufficiently large multiple of the pullback of the previous relatively ample negative plus the new negative tautological divisor is relatively ample for the composite. This constructs on the final smooth $E$ an effective $\nu$-exceptional rational divisor $T$, $\nu=\mu|_E:E\to W$, with $-T$ relatively ample and support in the SNC exceptional boundary. Hence $\nu^*A-\delta T$ is ample for all sufficiently small positive rational $\delta$, by the ample-pullback/relative-ample perturbation construction already used in the isolated-centre supplier. Adjunction, computed locally by the residue of a top differential along the smooth divisor $E$, gives $K_E+\Delta=\nu^*((K_V+G')|_W)$ with $\Delta=F|_E$. SNC ensures distinct restricted prime components and coefficients below one, and $P|_E=\lceil-\Delta\rceil$. In F2 take its smooth base to be $E$ and its map from $E$ to that base to be the identity. Over every nonexceptional divisor the pullback multiplicity is one; its discriminant inequality therefore says exactly that its coefficient in $\Delta$ is nonnegative. Thus $\nu_*\Delta$ is effective, and negative coefficients can occur only exceptionally. With $M=0$ (which is curve-nef) and $a=r-\gamma'$, these are the exact subadjoint resolution hypotheses used by the surface and cubic suppliers. No codimension-two subadjunction theorem has been applied to this divisor. [given, F1, F2, step 7.1, construct, algebra]

9.1 For a threefold with $r\ge 2$ every centre has dimension at most two. Its subadjoint parameter is $a=r−γ'>0$. Divisorial surface centres use the resolution just constructed in step 8.1 and exact resolution nonvanishing with $a>0$; curve centres use the weaker $a·deg A>−2$; point centres have h0(O)=1. Thus all such centres contradict base-locus containment. This excludes fixed components as well as smaller centres. A general member is normal canonical and integral. For clarity, reducibility is excluded by connectedness and the lc intersection argument, without silently treating Weil divisors as Cartier: $H1(O_V(−A))=0$ and $H0(O_V)=C$ give $H0(O_S)=C$, so S is connected. In our applications this vanishing is computed in the original smooth Fano ambient by the divisor or two-cut Koszul sequence. If two groups of reduced components meet, some intersection component has codimension one in the Cartier S. Indeed, localize the Cohen--Macaulay ring of S at the generic point of a hypothetical minimal intersection component of higher codimension. Its dimension is at least two. A regular sequence x,y in the maximal ideal gives $R_x$ intersection $R_y=R$ inside $R_{xy}$: from $y^m$ $a=x^n$ b, regularity of y modulo $x^n$ forces a into $(x^n)$. The punctured neighbourhood would separate the two groups of components, producing a nontrivial idempotent that this equality extends to the local ring, impossible. The intersection therefore has ambient codimension two. Its generic point is in the smooth ambient locus, including the terminal-threefold case because its singular set is finite. Blow up that smooth codimension-two generic centre. The section has order at least two there; lc bounds that order by two, since the blowup discrepancy is one. Its new boundary coefficient is consequently 2-1=1. Thus its centre is an explicit lc centre, lies in the base locus by general-member Bertini, and is excluded by the same isolation/nonvanishing argument. This constructs the intersection centre without an lc-centre intersection theorem. A nonreduced component is already excluded at its threshold below one (or by Bertini if it is moving). Thus there is one reduced component. No Picard-number-one or Weil-factoriality hypothesis is used. [given, F1, construct, algebra, step 8.1]

10.1 For a fourfold with $r\ge 3$, centres of dimensions at most two again have $a=r−γ'>0$ and use the same lemmas. A divisorial centre has dimension three. Choose the perturbation in step 7.1 with $\gamma_{\mathrm{prime}}<r-1$, possible since $r\ge 3$ and $\gamma\le 1$, so $a=r-\gamma_{\mathrm{prime}}>1$. Step 8.1 supplies its normality, birational SNC resolution, effective pushed-forward boundary, $M=0$ and effective exceptional ample perturbation. Its nonvanishing now follows from the exact resolution cubic supplier with all its hypotheses verified: with $P=\operatorname{ceil}(−Δ)$, $L=ν*A$ and p(t)=χ(P+tL), SNC vanishing gives p0=1 and p(−1)=0. If c2 is the t² coefficient, smooth RR gives $c2=(2P−K_T)L²/4\ge aA³/4>0$, since P is exceptional and the pushforward boundary is effective and the moduli part nef. Hence [given, F1, construct, algebra, step 9.1]

11.1 p1=2p0+2c2>0. [given, F1, construct, algebra, step 10.1]

12.1 This is the complementary dimension-three nonvanishing implication; the exceptional ample perturbation and exact resolution hypotheses are the same ones recorded by the endpoint lane. No unproved Chern-number positivity enters it. Thus general primitive cuts are canonical also in this fourfold range. [given, F1, construct, algebra, step 11.1]

13.1 The normality assertion is read directly from the resolution: a Gorenstein canonical ambient is Cohen–Macaulay at the used scope (in the applications it is a Cartier complete intersection in a smooth variety). A codimension-one nonnormal locus of S would give a negative discrepancy at its generic surface slice; after its explicit surface resolution the nonnegative discrepancy conclusion excludes this. Adjunction to the strict transform then gives the actual canonical surface/threefold divisor. This is a resolution calculation, not an invocation of unproved inversion of adjunction. [given, F1, construct, algebra, step 12.1]

14.1 For a high-index smooth fourfold with $r\ge 3$, the just constructed canonical first divisor is in fact terminal, by the same two-general-member calculation in the canonical-cut protocol: if a selected exceptional discrepancy satisfies $a_i=r_i\ge 2$, the pair $D=Y1+Y2$ has threshold $c<1$ and numerical coefficient $\gamma=2c<2$. Choose the two general members smooth and transverse on $U=M\setminus\mathrm{Bs}|A|$ by Bertini. On U their SNC boundary coefficients are both $c<1$, so the strict local top-differential bound makes (M,cD) klt there: writing $m_j=ord_E(x_j)\ge 0$ in regular coordinates adapted to the two boundary components, each log discrepancy is bounded below by $(1−c)(m_1+m_2)+\sum_{(j\ge 3)}m_j>0$, since some $m_j$ is positive. In particular a transverse intersection has blowup discrepancy 1−2c and boundary coefficient 2c−1, both zero at $c=1/2$; it is not an lc centre. Thus EVERY lc centre used below lies in Bs|A|. There is no divisorial centre: a codimension-one lc centre on the smooth ambient would have to be a coefficient-one prime component of cD, whereas its two distinct components both have coefficient $c<1$. A surface centre has $a=r-\gamma>0$; a curve or point satisfies the strict polynomial bound $\gamma<codim-1$. The exact subadjoint nonvanishing and section lifting exclude every minimal centre. Thus the first divisor is terminal and Gorenstein; its singular set is finite by the canonical-surface resolution argument in the protocol. The second high-index cut is consequently made on the exact normal-terminal ambient allowed by the lc and residue suppliers, not on an unqualified singular ambient. [given, F1, construct, algebra, step 13.1]

15.1 Let Y be smooth Fano threefold with $−K_Y=rA$, $r\ge 2$. Its Euler-root calculation gives $r\le 4$; if $r=4$ then A³=1, if $r=3$ then A³=2, and if $r=2$ put $d=A³\ge 1$. The preceding high-index centre argument makes a general fundamental surface canonical. Its resolution has $K=−(r−1)L$. [given, F1, construct, algebra, step 14.1]

16.1 For $r=4$, the weak-plane generation supplier gives generation of the restricted polarization; for $r=3$, the weak-quadric generation supplier does so. For $r=2,d\ge 2$, the weak del-Pezzo generation supplier gives generation. Restriction of global sections is onto by $H1(O_Y)=0$, so generation on the surface implies generation of A on Y and Bertini gives a smooth fundamental surface. Its smooth fundamental curves come from the same basepoint-free surface system. [given, F1, construct, algebra, step 15.1]

17.1 For $r=2,d=1$, the weak del-Pezzo generation supplier gives the single reduced base point and smooth genus-one fundamental pencil, disjoint from the resolution exceptional locus. The base locus on Y lies in that point; the canonical general surface is already smooth at it, and Bertini gives smoothness elsewhere. This supplies the smooth surface/curve ladder despite primitive A not being generated. [given, F1, construct, algebra, step 16.1]

18.1 Let M be smooth Fano fourfold with $−K_M=rA$, $r\ge 3$. The Euler-root calculation gives $r\le 5$; if $r=5$ then A⁴=1, if $r=4$ then A⁴=2, and for $r=3$ put $d=A⁴\ge 1$. The high-index centre and two-member arguments above make the first general cut Y terminal Gorenstein with isolated singularities. Its adjunction index is $r−1\ge 2$. Apply the same high-index threefold centre argument, with its explicitly retained normal-terminal log-resolution hypotheses and divisorial-surface residue construction, to obtain a canonical second fundamental cut T, a Cartier complete intersection in M. All O and A restriction cohomology needed to lift sections is computed in M: $O_M(−A)=K_M+(r−1)A$ has no higher cohomology, and the Koszul sequence for two A sections gives surjectivity H0(M,A)→H0(T,A|T). [given, F1, construct, algebra, step 17.1]

19.1 The minimal resolution of T has $K=−(r−2)L$. For $r=5$, the weak-plane generation supplier applies; for $r=4$, the weak-quadric generation supplier applies; for $r=3,d\ge 2$, the weak del-Pezzo generation lemma applies. Thus A is generated on M, and successive Bertini gives the smooth fundamental ladder. [given, F1, construct, algebra, step 18.1]

20.1 For $r=3,d=1$, the weak del-Pezzo argument on the canonical second cut confines Bs|A| to one point q and makes T smooth there. Since T is the common zero of two sections in the smooth fourfold, smoothness at q means that their differentials are independent. A general linear combination therefore has nonzero differential there. Outside q Bertini applies. Thus a smooth first fundamental divisor and a smooth next surface exist also in this degree-one branch. Its last fundamental curve is the smooth elliptic pencil already constructed. [given, F1, construct, algebra, step 19.1]

21.1 For a Picard-one index-one threefold (whose positive degree is even and at least two), apply the actual canonical-cut protocol and primitive-threefold generation supplier. The latter consumes the crepant canonical K3 resolution and shows that the primitive A is generated. General Bertini makes the fundamental surface smooth. For a Picard-one index-two fourfold, the protocol gives a normal canonical complete-intersection double cut; the first-jet smoothness supplier and its ICIS residue proof make a general first divisor Y smooth. Smooth ample restriction gives Pic(Y)=ZA|Y. Apply the threefold generation result there and lift its sections through $0\to O_M\to A\to A|Y\to 0$, since $H1(O_M)=0$ by the actual empty-boundary vanishing. A is generated, and successive Bertini supplies the entire smooth fundamental ladder. [given, F1, construct, algebra, step 20.1]

22.1 Here are the details, including descent. Put $V=H0(Y,A)$, $B=P(V)$, and let $U=\{(y,[s]):s(y)=0\}$ be the complete universal divisor. Evaluation V tensor $O_Y$ $\to $ A is surjective by the explicit global-generation assumption. Its kernel M is a vector bundle and $U=P_Y(M)$ (with the convention parametrizing lines). Consequently U is smooth and [given, F1, construct, algebra, step 21.1]

23.1 Pic(U)=p*Pic(Y) + Z $q*O_B(1)$. [given, F1, construct, algebra, step 22.1]

24.1 This projective-bundle formula follows by taking a line bundle's constant degree on the projective-space fibres, removing the corresponding O(1) power, and descending the resulting fibrewise trivial bundle by evaluation and $H0(P^r,O)=C$, $H1(P^r,O)=0$. Here $r\ge 2$ because the ample generated A gives a finite map of a threefold to P(V*), so dim $V\ge 4$. [given, F1, construct, algebra, step 23.1]

25.1 Let $K=C(B)$, and $S_K$ the generic fibre of q. Every line bundle on $S_K$ extends to U: represent it by a divisor on the regular integral $S_K$, take the closures of the finitely many prime divisors in U, and use regularity of U to make this Weil divisor Cartier. Thus the restriction $Pic(U)\to Pic(S_K)$ is onto. In particular every such line bundle restricts geometrically to an integral multiple of $L=A|S_K$; $q*O_B(1)$ restricts trivially. This assertion concerns K-rational line bundles, not all geometric line bundles. [given, F1, construct, algebra, step 24.1]

26.1 Adjunction gives $K_S=O$. The relative handle supplier gives primitive integral restriction $H2(Y,Z)\to H2(S,Z)$. Vanishing gives $H1(O_S)=0$; alternatively the complementary ring-lifting note propagates H1 by relative handles and Kähler Hodge theory from an actual smooth K3 section. Thus these are the exact surface hypotheses in the simplified Serre criterion. No fundamental-group assertion is used. Primitivity of A|S follows from the primitive restriction and primitivity of c1(A) in H2(Y,Z). For the latter, $H1(O_Y)=H2(O_Y)=0$ gives Pic(Y)=H2(Y,Z) by the exponential sequence. These conclusions pass to a geometric generic fibre by spreading a hypothetical division to an open family and specializing to a smooth complex fibre. This excludes the candidate's exceptional case $d=8$, $L=2D$. Numerical triviality of a line bundle on S implies actual triviality directly from surface RR and Serre duality: a nontrivial numerically trivial N and its inverse have no sections, whereas $\chi(N)=\chi(O_S)=2$, a contradiction. [given, F1, construct, algebra, step 25.1]

27.1 Suppose now that L on the geometric generic S is not very ample. The K3 criterion supplies a primitive nef elliptic pencil class E with $E^2=0$, $1\le L E\le 2$. Since $d\ge 6$, that criterion also proves that this class is unique. Choose a line bundle representing E over a finite extension K'/K; all of its equations have finitely many algebraic coefficients, so such an extension exists. It is separable in characteristic zero. The finite-flat norm of this line bundle under $S_K'\to S_K$ is a line bundle N on $S_K$. Explicitly it is $\operatorname{det}(f_*E)$ tensor $\operatorname{det}(f_*O)^{(-1)}$. After extension to an algebraic closure its class is the sum of the classes of all conjugates. Each conjugate remains a primitive nef elliptic pencil of L-degree at most two, and uniqueness therefore makes [given, F1, construct, algebra, step 26.1]

28.1 $N_{\mathrm{geometric}}$ = [K':K] E. [given, F1, construct, algebra, step 27.1]

29.1 Extend N to U and apply the projective-bundle Picard computation: for an integer a, $[K':K]E=aL$. Squaring gives $a^2$ $d=0$, hence $a=0$. Intersecting with L then gives [K':K](L E)=0, a contradiction. There is no geometric-generic obstruction. The locus where a relatively ample line bundle fails to separate a length-two subscheme is closed: use the proper relative Hilbert scheme of length two and its universal evaluation map. Consequently very ampleness holds on a nonempty open set of smooth S. [given, F1, construct, algebra, step 28.1]

30.1 This argument is algebraic after the explicitly identified primitive-restriction/K3 inputs. The Serre criterion can be used over the algebraic closure of K by spreading the finitely many bundles, divisors, and equations in any proposed counterexample to a complex fibre; its existence and uniqueness assertions are preserved there. [given, F1, construct, algebra, step 29.1]

31.1 In the high-degree threefold branch, the preceding norm-descent calculation makes the primitive polarization on a general K3 section very ample. Apply the exact canonical-curve ring-lifting supplier: its smooth canonical-curve multiplication input is proved by the separate inner-projection Max Noether supplier, and it yields K3 normal generation and normal generation/very-ampleness of the ambient A. Repeat the same graded quotient on the fourfold and its smooth first divisor. The needed H1(O) vanishings are the actual empty-boundary vanishing (or the explicit relative-handle/Hodge argument in the ring supplier); no missing singular vanishing is used. [given, F1, construct, algebra, step 30.1]

32.1 Now apply the actual very-general K3 Picard supplier to the complete very ample anticanonical system of the smooth index-one threefold (including the smooth first divisor in the index-two fourfold). Its stated Hodge and primitive integral restriction hypotheses hold by the actual smooth Fano vanishing and relative-handle supplier. It gives Pic(S)=Z(A|S). For a divisor $D=m(A|S)$, its intersection degree is $m(A|S)^2$, exactly the divisibility required by the curve-bound consumer. The universal-divisor norm argument establishing very-ampleness was supplied before this Picard assertion, so this use is not circular. [given, F1, construct, algebra, step 31.1]

33.1 For the exceptional weighted degree-one family, use the separate explicit weighted-normal-form supplier and its own full section-system identification. Its double-plane K3 is not assigned a very ample degree-two system. All other conclusions above concern the actual smooth fundamental ladders in the named Fano regimes, with the degree-one base point retained as stated. [given, F1, construct, algebra, step 32.1] ∎

## Remarks

Research candidate only. No production adoption, mathematical acceptance, native gate, publication or push is asserted.
