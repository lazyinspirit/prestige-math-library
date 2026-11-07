---
id: lem-gts-ordinary-log-descendant-and-contact-vector-comparison
kind: lemma
title: Ordinary-log descendant comparison with boundary contact vectors
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
  - lem-gts-projective-df-log-map-foundations
dependency_roles:
  lem-gts-projective-df-log-map-foundations: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
---

## Statement

For a smooth projective complex surface with nonempty smooth anticanonical divisor D=disjoint union D_a, the actual genus-zero projective log/ordinary descendant comparison is valid with component-labelled nonnegative contact vectors, without any nef or Fano assumption. In the globally ordered primitive-contact convention the point-supported maximal-descendant degree in class beta of total contact d>=2 is d! times the ordinary one-point degree. The comparison retains its original virtual cone and actual stabilizers; maps into boundary components cannot have a nonconstant rational component.

## Facts & Assumptions

**Given:** The actual scheme/log/trace data specified in the Statement.

[F0] The declared native dependencies supply their exact contracts. No native acceptance or published attribution is inferred for this candidate.

[F1] The local derivations written in full below establish the constituent constructions, retaining all local units, original trait parameters, source/base nilpotents and component labels. They are proved parts of this item; the companion manifest records source paths and hashes solely as provenance.

## Inline local derivations

### Inline construction 1

#### Smooth anticanonical boundary: the normal-cone reduction needs no Fano positivity

Research construction attached to the unchanged theta-period target. This proves the geometric vanishing and combinatorial reduction in degeneration to the normal cone. It separates the remaining actual relative/logarithmic moduli and virtual degeneration construction rather than treating that construction as a theorem supplied by a Definition.

#### 1. The boundary has no rational curves

Let X be a smooth projective complex surface and D a nonempty smooth anticanonical divisor. Its connected components are disjoint smooth projective curves. Adjunction gives K_{D_i}=(K_X+D)|_{D_i}=O_{D_i}, since the other components of D are disjoint from D_i. Thus each D_i has genus one. A nonconstant morphism P¹→D_i would be finite onto D_i and Riemann–Hurwitz would give −2=degree·0+ramification≥0, a contradiction. Every map from a connected genus-zero nodal tree to D is therefore constant: restrict to the rational normalization of each component and use equality at its connecting nodes.

In particular a nonconstant rational component of a stable map to X is not contained in D. Its intersection degree with D is nonnegative because the pullback of the defining Cartier section is a nonzero section on its normalization, with an effective zero divisor. A contracted component has pullback degree zero. Consequently f*O_X(D) has nonnegative degree on every component of every genus-zero stable map to X. On a rational tree this implies H¹(C,f*O_X(D))=0: remove a leaf and use the node normalization exact sequence, surjectivity of evaluation for a nonnegative-degree line on P¹, and induction. This holds also when D is not nef on all algebraic curves; genus-one curves contained in D are not rational components of the source.

This is the relevant genus-zero positivity, not a claim that X is Fano or that D has positive degree on every curve class.

#### 2. Geometry of the boundary component

Deform X to the normal cone of D by blowing up D×{0} in X×A¹. The central fiber is X∪_D Y with

Y=P_D(O_D⊕N_{D/X}).

The intersection is one distinguished section D₀ of Y. The family is projective and smooth away from the central crossing; its local equation at that crossing is xy=t. A generic point p∈X\D specializes to the X component, so the entire interior point condition stays on that component.

Every genus-zero map to Y projects constantly to D by §1. Its connected source therefore maps into a single fiber P¹, with some fiber degree e≥0. A nonconstant connected relative piece has e≥1. If it has k relative markings at D₀ with positive orders λ₁,…,λ_k, then Σλ_j=e and k≥1. The genus-zero relative virtual dimension is

(dim Y−3)+c₁(TY)·(e[fiber])+k−Σλ_j
 =−1+2e+k−e=e+k−1.                                                        (1)

This formula can also be obtained from log Riemann–Roch: TY(−log D₀) has degree e on the fiber, and the k relative domain markings contribute k. It requires no positivity of N_{D/X}.

The evaluation map at those k markings lands in the **small diagonal** D⊂D^k, since the entire map has one constant projection to D. Therefore the proper pushforward of its relative virtual class to D^k is zero whenever e+k−1>1: a cycle of that dimension whose image has dimension at most one has zero proper pushforward by the definition of Chow pushforward. Inserting other classes pulled back from D^k does not restore a vanished pushforward. There are no interior markings or psi insertions on this side in the one-point descendant calculation.

Since e,k≥1, a nonzero contribution is possible only when

e=k=1, λ₁=1.                                                              (2)

This kills all higher contact orders, multiple covers, and boundary components connecting two or more X-side pieces. It is a proper-pushforward dimension argument, not an assumption of enumerativity or transversality of a higher-degree cover.

#### 3. The surviving fiber has degree exactly one

For (e,k,λ)=(1,1,1), a relative map is an isomorphism from a rational component onto a fiber, with its relative point at D₀. Quotienting by source isomorphisms leaves exactly its base point in D and no stabilizer. No stable contracted twig can occur without additional markings or attachments: a terminal contracted twig would have fewer than three special points, and induction removes every possible tree of such twigs. Thus this moduli space is D and evaluation is its identity.

Its obstruction theory is unobstructed. Restricted to a degree-one fiber, the logarithmic tangent sequence has vertical term T_{P¹}(−log{0})=O(1) and horizontal term O⊗T_D|p. Since H¹(P¹,O(1))=H¹(P¹,O)=0, its H¹ vanishes. The extension splits on that fiber because Ext¹(O,O(1))=0. Consequently the relative virtual cycle is [D], and its evaluation pushforward is [D] with coefficient one. This computes the only boundary local invariant needed in this normal-cone argument, including its automorphism normalization.

#### 4. Exact descendant consequence of the relative degeneration interface

The standard relative/logarithmic virtual degeneration interface, when locally constructed with the already existing Chow/POT conventions, has the following required form: sum over connected bipartite graphs of relative maps to X and Y; match evaluations by the diagonals of D; multiply each edge by its contact order; divide by the automorphism group of the unlabelled edge data. The interior point and its cotangent-line class restrict to the X-side marked map. We do not infer this interface from the ordinary smooth-target boundary-splitting theorem.

Applying §§2–3 to that exact interface leaves a single X-side vertex and d Y-side leaves of degree one. There cannot be two distinct X-side vertices, because a connected bipartite graph joining them would need a Y vertex of valence at least two, already killed by (1). All surviving contact orders are one, so the X-side contact list is 1^d, where d=D·β. Every edge multiplicity is one. With one connected boundary component the unlabelled fiber-leaf type has permutation group S_d. If D is disconnected, use the groupoid of all assignments of global labels to the boundary components: a fixed assignment has only the component-preserving permutation group, but summing its d!/∏d_i! allocations gives the same overall factor 1/d! multiplying the globally labelled invariant. This is the weighted action-groupoid convention of the normalization file. Each leaf evaluation pushforward is [D_i] on its assigned component (or their sum [D]), so diagonal gluing imposes no further class on the X-side boundary evaluations.

Therefore this degeneration interface implies exactly

D_{0,1}(X,β)
 =1/d! ∫_[LogMap_{0,1+d}(X,D,β;0,1^d)]^vir ψ₀^{d−2}ev₀*[p].                (3)

The boundary contacts in the integral on the right are globally labelled; for disconnected D sum over all compatible assignments of those labels to its components. The point p is outside D. A domain component containing that point cannot be contracted on forgetting the relative marks through a D-supported contracted twig, so the cotangent-line comparison at that mark introduces no boundary correction. Equivalently compare the marked relative universal component before and after gluing: adding or removing the Y leaf does not change its cotangent at the retained interior mark; any destabilized twig supported in D is disjoint from that mark. This proves the stated psi convention in (3), not an unqualified equality of all descendant classes at boundary marks.

Formula (3) is precisely the missing factorial comparison identified in the ordered-root normalization file. It proves why the ordinary invariant corresponds to the unlabelled tropical mass and the ordered theta product to its d!-multiple, once the genuine relative degeneration/correspondence construction is supplied. The argument applies to every class with d≥2 under the original hypotheses. It does not discard zero-D-degree rational trees attached on the X side; such trees remain part of its relative moduli and can produce the non-Fano theta corrections.

#### 5. What has and has not been constructed

The proofs above establish: ellipticity/no rational boundary images; nonnegative pullback degree and H¹ vanishing for the boundary line on every genus-zero map; verticality of all Y-side maps; the complete virtual-dimension/pushforward vanishing criterion; the coefficient-one primitive fiber invariant; and the resulting exact normal-cone gluing reduction (3) at the specified relative degeneration interface. These remove the Fano/nef *positivity* obstacle; no smooth-boundary theorem has been replaced by a toric or ample-only theorem.

Still required to close the original full target locally are the actual proper basic/relative moduli construction and its compatible virtual degeneration formula, and the canonical-scattering/tropical correspondence for the X-side labelled invariant. Those are substantial geometric constructions. In particular the generic perfect-obstruction-theory Definition does not supply their properness or a degeneration formula; the completed ordinary stable-map source supplies relevant Čech/POT and cone/Gysin machinery but not those logarithmic moduli by itself. The normalization and the non-Fano verticality argument here do not certify them or turn them into assumptions of a new narrowed public theorem.

#### Source relation

Johnston arXiv:2501.01408v3, proof of Theorem 1.1 (cached PDF pp. 11–14), was read at its normal-cone degeneration and final label-factor calculation. That proof uses ampleness to control contributions for a general SNC boundary. The construction above instead uses the actual target's stronger smooth-anticanonical-surface condition: its boundary components have genus one and every rational boundary-side map is vertical. Its dimension argument computes and removes higher-degree vertical pieces explicitly. It is not a citation of Johnston's Fano theorem as a non-Fano theorem. The target Statement is preserved; no production edit or readiness claim has been made.

### Inline construction 2

#### Normal-cone virtual gluing and the exact labelled descendant comparison

Research construction using the frozen relative-log family files in relative-log-families/: [[lem-gts-projective-df-log-map-foundations]] SHA256 fd0708d450fa00f08d4f14a0c8a1d05785056743cd8ff559e8d60707fcf3491d and [[lem-gts-projective-df-log-map-foundations]] SHA256 5fbbc93066d7f544ec1e7a21bbd061b4d35ad470457b72dce62252b352e841be, the fixed-log-domain Čech POT, and [[lem-gts-projective-df-log-map-foundations]]. It constructs the normal-cone degeneration formula needed here rather than assuming that formula as part of “toric degeneration.” The central-only target is essential: its generic fiber is ordinary X, and its Y-side relative divisor is only D₀, not the outer section D∞.

#### 1. The two-component family and its proper basic map space

Let (X,D) be a smooth projective complex surface with smooth anticanonical divisor. Put Y=P_D(O⊕N_{D/X}). Blow up D×0 in X×A¹ and equip the result with the divisorial log structure of the central fiber only. Its target/base charts are xy=t with base log generator ρ mapping to the sum of the two central divisor generators. The generic fiber has trivial target log structure. Choose a fixed nonzero vertical class β and an interior marking constrained at p∈X\D, with ψ power d−2, d=D·β≥2.

The separate finite-DF family construction supplies the actual proper finite-type DM stack K of basic maps to this family, its universal log curve, and its finite representable map to the ordinary relative stable-map stack. In particular its ordinary framed presentation pulls back to an actual finite scheme chart with the same GL/PGL group. The supplied pre-quotient monoid charts retain ρ and all node units. They include nilpotent test families; no reduced normalization is being used for K. The Čech construction gives the universal relative POT over its actual log-domain base.

Apply the universal cone operation to the base fundamental cycle and cap with the interior evaluation and ψ insertions. Its virtual dimension over A¹ is one. The Cartier fibers t=a commute with that operation. Thus the ordinary descendant on a generic fiber is the proper degree of its virtual specialization at t=0. This is the actual Rees/Cartier identity for this family; smooth-family invariance alone would not supply its central decomposition.

#### 2. Expanded targets are a proper monoid refinement, with their family charts specified

To make the cut explicit use a finite aligned refinement of the basic monoid charts. For a pair (Z,D), an expansion of length r inserts r copies of P_D(O⊕N) in a chain. Its universal family over A^r is obtained by the successive blowups along the last boundary section over each coordinate divisor. An invertible coordinate contracts the corresponding level; the gluing transition is the actual multiplication of its normal frames. The torus (G_m)^r acts by those frame changes. For a degeneration X∪Y, the corresponding chart has parameters s₀,…,s_r, with

t=s₀s₁⋯s_r,

and frame torus (G_m)^r acting by s_i↦λ_iλ_{i−1}^{−1}s_i, with the two exterior frame values fixed. These equations and the projective-bundle charts glue along the opens s_i≠0. This constructs the expansion stack from explicit schemes and smooth torus quotients.

For a fixed bounded basic-map type, order its finitely many target-boundary heights. The loci where a particular order holds are rational polyhedral subdivisions of its ghost cone, compatible with face contraction. Insert the indicated target levels; a domain component of a given height maps into that level by its actual logarithmic normal **unit** section, viewed as a meromorphic section of the pulled-back normal line. Its zeros/poles are the prescribed nodes/marks; they give a morphism to the projective normal bundle. At an edge crossing a level insert the bivalent fully ramified fiber components required by its integral contact. Locally all formulas are monomials times the actual units of the family atlas, so their equality is valid over nilpotent rings as well as over fields. Collapse recovers the original log-map and its abstract basic graph presentation. The valuation image is not substituted for that abstract monoid.

Remove any target level with only bivalent fully ramified fibers and no map datum fixing its scaling: its combined source/target G_m automorphism makes it unstable. Every remaining level contains a stable marked/branching domain feature or a nonzero pushed-forward ample degree. The usual genus-zero tree bound and the supplied ample degree therefore bound the number of remaining levels. Thus only finitely many charts occur for fixed data. Alignment and the needed contact saturation are proper toric refinements/root-stack charts on the log-domain base, identity on the generic trivial-boundary locus. The basic-map morphism to that base is strict; use its actual fiber product with these charts, retaining all nilpotent equations. In particular never normalize a nonflat source fiber after taking roots: the length of its root equation and its residual finite stabilizer are both part of the virtual pushforward. The universal cone operation gives pushforward equality of virtual classes from this refinement. It is not an assertion that the underlying source modification has degree-one fibers on every ghost stratum.

This constructs the aligned expanded presentation needed for cutting. Disconnected relative pieces may have different expansion lengths. Synchronize them by ordering the union of their heights; this is again a proper monoid subdivision. In particular the synchronized product is a proper logarithmic modification of the ordinary product, not silently identical to it.

#### 3. A distinguished cut and the actual Cartier decomposition

In an expansion chart t=∏s_i, the divisor of t is the sum of the divisors s_i=0, with their actual primitive lattice orders after saturation. A distinguished zero parameter defines a cut of the target into its X-side and Y-side expanded pairs. Gluing the zero-divisor charts with that cut retained gives the normalization of the relevant Cartier components; a point with several zero parameters lies in the compactifications of several such components exactly as the identity div(∏s_i)=Σdiv(s_i) requires. It is not counted again as an additional independent Cartier component.

By the universal cone operation and Cartier compatibility, the virtual special fiber is the sum of these proper cut-type virtual fibers with the smoothing lattice multiplicities. Types consist of bipartite connected genus-zero graphs, their curve classes, contact orders w_e>0 and marked-point assignment. Finite ordinary graph/class bounds and the finite contact bounds make this a finite sum at each curve-class coefficient. Forgetting graph labels divides by the actual graph automorphism order in rational Chow.

For a generic fixed cut type with contacts w_e, the base relation is ρ=w_e q_e at each cut node. Its primitive base index is

l_Γ=lcm_e(w_e).

This is the valuation of the original cut parameter on the primitive saturated type ray, exactly the Cartier multiplicity. Inner expansion parameters of the two sides remain independent; their zero loci are already included in the proper relative type compactifications. The distinguished-cut divisor, rather than an arbitrary choice of a geometric central map, specifies which base parameter is being specialized.

#### 4. Cut maps and their exact degree, including compactification

Let P_Γ be the ordinary evaluation-diagonal product of the proper relative vertex map spaces. First use the synchronized fine-saturated product P_Γ^al described in §2. Its virtual class pushes to the refined diagonal class of P_Γ, by the proper base-fundamental-cycle identity in the universal cone operation.

At an outer relative marking every component of the expanded map is nondegenerate with respect to that outer boundary: the meromorphic normal unit construction puts a component in the level of its height, not in its boundary section. Thus in local normal frames the two branches at a cut node have normal unit coefficients κ_{X,e},κ_{Y,e}∈O^*. The node gluing condition is the exact unit equation

u_e^{w_e}=κ_e λ,

where κ_e is their specified nonzero ratio/product and λ is the common base-unit choice. These equations are equations of units, even on further boundary strata of the two relative compactifications; the latter strata are handled by their retained inner expansion charts. Since characteristic is zero, their derivatives w_e are invertible. They define the finite étale enhancement cover of P_Γ^al, with the minimal common base chart divided out.

The rank-one node/unit calculation gives its degree

q_Γ=∏_e w_e/l_Γ.                                                         (1)

For example normalize λ=1 after a local root choice: the raw choices are ∏μ_{w_e}, and the remaining μ_{l_Γ} acts injectively by ζ↦(ζ^{l_Γ/w_e})_e. This proves (1), not only its generic set cardinality. Unit roots are étale after arbitrary base change in characteristic zero; their transition coupons are exactly the atlas gluing, so the degree persists on this labelled proper type space. It is NOT a claim that the cut map is finite étale over the unmodified unsynchronized product.

#### 5. The obstruction theories match the evaluation diagonal

Cut the domain at the labelled nodes and normalize its logarithmic deformation cocycle. Tangential changes along D must agree at the two branches; their discrepancy is the ordinary difference of the two evaluations in T_D. The node normal-unit equations above give the other discrepancy. After fixing the common base frame, their Jacobian in the node-unit variables is diagonal with entries w_e. Therefore the normal-unit deformation complex is an actual acyclic two-term complex. This cancels the normal fiber part of the logarithmic tangent normalization sequence, leaving exactly the evaluation-diagonal term ⊕_e ev_e*T_D.

This is an identification of the **actual** obstruction maps: a square-zero lift of the cut maps fails to glue by its tangential node-value difference and by the displayed multiplicative unit equations; the logarithm of 1+j converts the latter to their Jacobian. These are the same Čech discrepancies defining the global map POT. Thus the comparison is not inferred from matching virtual ranks.

Strictify the resulting compatible complexes on a common affine torsor in the existing quotient-Chow construction. Embed the two evaluations by their graph in a smooth ambient over the domain base, and impose Δ_D⊂D×D. The conormal exact sequence adds ev*Ω_D to both the degree-(−1) obstruction model and the ambient cotangent model. Quotient its acyclic identity subcomplex to recover the cut map complex. The actual scheme bivariant cone/Gysin identity then gives

[cut type]^vir = cut^! Δ_D^!(∏_v [R_v]^vir)

on the synchronized enhancement space. Products and multiple edges use direct sums of these exact complexes and commuting diagonal Gysins. The global common-torsor pullback is injective, so this equality descends to rational Chow; it is not a Chow equality inferred merely on an étale atlas. Push the finite étale cover (1), then push the synchronization modification. The cut contribution is q_Γ times the ordinary refined diagonal product.

Finally multiply by the Cartier index l_Γ from §3. The resulting degeneration formula is

D_{0,1}(X,β)
 =Σ_Γ [∏_e w_e/|Aut Γ|]
       deg( Δ_D^!∏_v[R_v]^vir ∩ the retained ψ/interior-point insertion ).     (2)

All relative vertices, graph labels and contact orders in (2) come from the actual cut construction. No singular-target formula was inferred from the ordinary smooth-target splitting theorem, and no separate abstract virtual localization is being used.

#### 6. Evaluate this formula in the smooth-anticanonical case

Adjunction and Riemann–Hurwitz, proved in inline construction 1, show that each connected Y-side curve is vertical. If its fiber degree is e and it has k positive relative contacts, its virtual dimension is e+k−1. Its evaluation image lies in a single diagonal copy of D of dimension one. Proper pushforward is zero unless e=k=1; e,k≥1 and Σcontacts=e. The surviving moduli is D with virtual class [D], because the degree-one fiber log tangent is O(1)⊕O and H¹=0. There is no descendant or interior-point insertion on a Y vertex, since p specializes to X\D.

Consequently every surviving Y vertex of (2) is a primitive leaf, and connectedness forces exactly one X vertex. Its class is β and it has d labelled order-one relative nodes. Each contact factor is one, every fiber degree contributes one, and the indistinguishable leaves divide by d!. For disconnected D sum the global label allocations to its components before taking this quotient; the same weighted S_d identity applies. Thus (2) becomes

∫_[R_{0,1+d}(X,D,β;0,1^d)]^vir ψ₀^{d−2}ev₀*[p]
 = d! D_{0,1}(X,β).                                                        (3)

The ψ class is the one at the retained interior mark. Gluing or forgetting a Y leaf does not change its cotangent: a twig contracted by forgetting a boundary marking can contain that mark only if its image lies in D, excluded by p∈X\D. This is the exact point-incidence compatibility needed by (3), not a blanket equality for all boundary-mark descendants.

This proves the logarithmic/ordinary descendant normalization without a Fano or global-nef hypothesis. Zero-D-degree rational trees on the X side have not been discarded; they remain inside its proper relative moduli and are part of the later canonical theta corrections.

#### 7. Dependency boundary

The proper all-family basic/relative stacks and their framed presentations are supplied by the separate family construction; its central-only and central-plus-outer interfaces are deliberately distinct. The universal relative POT, cone/Gysin operation, finite unit degree and fiber vanishing are proved in the attached files. The proof above constructs the compatible normal-cone cut formula and evaluates it. The final theta comparison still needs the actual canonical toric degeneration/correspondence and its local toric vertex factors, not an assumption that an arbitrary consistent wall diagram already counts maps. No production source or readiness record has been changed.

## Proof

1.1 Apply the inline local derivations in their stated finite branch order, with the actual scheme, log and trace data of the Statement. The derivations preserve the entire generic pair, class and component labels, nilpotent equations and supported cone operations wherever those occur. [F1]

2.1 Their combination gives the Statement using exactly the declared native dependency contracts. Provenance paths are not logical suppliers. This is a draft source candidate; dependency levels and ordinary native review/acceptance remain owner operations. [1.1,F0] ∎
