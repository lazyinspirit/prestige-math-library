---
id: lem-gts-ordered-multi-end-theta-period-normalization
kind: lemma
title: Ordered contacts and full-boundary theta period normalization
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
  - def-gts-log-cy-pair-toric-degeneration-and-scattering-data
  - lem-gts-adapted-log-map-atlas-and-supported-vertex-cone-comparison
  - lem-gts-divisorial-toric-pushout-regular-snc-family-model
  - lem-gts-ordinary-log-descendant-and-contact-vector-comparison
  - lem-gts-toric-local-virtual-and-scattering-comparison
dependency_roles:
  def-gts-log-cy-pair-toric-degeneration-and-scattering-data: mathematical-premise
  lem-gts-adapted-log-map-atlas-and-supported-vertex-cone-comparison: mathematical-premise
  lem-gts-divisorial-toric-pushout-regular-snc-family-model: mathematical-premise
  lem-gts-ordinary-log-descendant-and-contact-vector-comparison: mathematical-premise
  lem-gts-toric-local-virtual-and-scattering-comparison: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
---

## Statement

For the canonical enumerative theta algebra of the supplied smooth anticanonical pair, the exhaustive supported rooted-tree comparison identifies the unit trace of powers of the FULL primitive boundary potential t^-1 sum_a theta_(rho_a) with the factorial-regularized ordinary descendant period. The globally ordered label groupoid contributes d!, a fixed component allocation contributes product(d_a!), and expansion contributes d!/product(d_a!). Theta-unit trace equals the compatible chamber Laurent constant term and is chamber invariant. The multi-end potential, rather than an individual boundary theta, is necessary for disconnected D.

## Facts & Assumptions

**Given:** The actual scheme/log/trace data specified in the Statement.

[F0] The declared native dependencies supply their exact contracts. No native acceptance or published attribution is inferred for this candidate.

[F1] The local derivations written in full below establish the constituent constructions, retaining all local units, original trait parameters, source/base nilpotents and component labels. They are proved parts of this item; the companion manifest records source paths and hashes solely as provenance.

## Inline local derivations

### Inline construction 1

#### Smooth disconnected boundary: actual potential and exact comparison

Research repair offer; no production edit, native result, or acceptance claim. This supplements the ordered-root normalization proof. It corrects a distinct interface error which factorials cannot repair.

#### Actual definitions and source scope

The current source item `def-gts-log-cy-pair-toric-degeneration-and-scattering-data` permits every smooth effective anticanonical divisor, including disconnected divisors. Its scattering data are explicitly additional data. The intrinsic-algebra Definition permits an arbitrary specified theta basis and multiplication; it does not choose a distinguished primitive element. Neither definition identifies the coefficient of the unit with a Laurent constant term outside an explicitly compatible Laurent realization.

BGL arXiv:2404.16782v3 Definition 2.1 likewise says smooth projective X and smooth anticanonical D, without a connectedness clause. Definition 5.1 permits a flat degeneration to toric components glued along toric divisors, with remaining toric divisors forming D. However, §6.3 immediately after Definition 6.8 asserts that smooth D implies exactly one unbounded direction and defines theta_q from that direction. This assertion needs an additional one-end condition. Smoothness alone does not supply it. Section 5.4 also constructs non-Fano geometry from a toric model by gluing fans and explicitly says the resulting family is not globally constructed as a projective variety. Those additional restrictions cannot be silently inserted into the generic local Definition.

Johnston arXiv:2501.01408v3 Definition 5.2, equation (5.2), uses the divisorial valuation of EACH irreducible component D_i to define the corresponding theta element, and defines W_D as their SUM. This is the correct boundary-potential convention for the multi-end period target. This definition is read as provenance for the algebraic input, not as importing Johnston's Fano period theorem for non-Fano X.

Consequently write D as the finite disjoint union of smooth connected components D_1,...,D_r, supply the actual primitive divisorial indices rho_i, and put

    Theta_D(P) = sum_i theta_{rho_i}(P),  W_D(P) = t^{-1}Theta_D(P).

For r=1 this is the original primitive potential. For r>1 it is a specified sum, not an arbitrary choice of one end. A missing identification of the supplied theta algebra with the geometric divisorial-index algebra remains a genuine geometric obligation.

#### Additional non-Fano source-scope check

BGL Example 2.3 writes the negative section E of F_m with E^2=-m and -K=2E+(m+2)F, then asks for a smooth anticanonical divisor. For m>=3 this hypothesis cannot be satisfied: (-K).E=2-m<0, so every effective anticanonical divisor must contain E. If that divisor were smooth, E would be a smooth connected component. Adjunction for a smooth anticanonical component gives trivial canonical bundle and genus one, whereas E is rational. Hence the F_3 smooth-boundary example mentioned in §8.2 cannot serve as a geometric example of the actual target. F_2 is semi-Fano and its degree-zero negative rational section need not lie in a general anticanonical divisor, so this objection does not apply to it.

This observation does not justify removing non-Fano or non-nef pairs. For example blow up P^2 at ten distinct smooth points on a cubic: its strict transform D is smooth anticanonical with D^2=-1, hence -K is not nef. The elliptic-boundary normal-cone reduction continues to apply to genus-zero maps on this X. Actual toric/scattering degeneration data for such pairs must still be constructed; they are not supplied by pretending that F_3 has smooth anticanonical boundary.

#### An actual two-end example, including its descendant coefficient

Let E be a smooth elliptic curve, X=P^1 x E, and D=({0}+{infinity}) x E. Then K_X(D) is trivial and D is smooth, with two connected components. A projective semistable elliptic degeneration with central fiber a cycle of n rational curves (n>=3) gives, after taking product with P^1, a degeneration whose central components are P^1 x P^1 and whose gluings are along toric divisors. The central boundary consists of the two disjoint cycles of unused toric divisors. This fits BGL Definition 5.1. Its dual intersection complex is a cylinder with two ends; it is not the one-end picture asserted in §6.3. Existence of such a semistable elliptic degeneration is used here as this explicit standard geometric example, not claimed as a newly constructed family-moduli supplier.

Every genus-zero stable map to E is constant: normalize its rational components and apply Riemann-Hurwitz, then use connectedness. In fiber class F=[P^1 x {e}], the one-point degree-one map stack to X is P^1 x E, identified by the image of its retained marked point. A degree-one map has no nontrivial stabilizer. Any contracted subtree would need at least three special points on each component; with only one mark, the tree count makes this impossible. On the noncontracted component its pulled-back tangent bundle is O(2) direct-sum O, so H^1 vanishes. Therefore the virtual class is the ordinary fundamental class. Evaluation is the identity, d_F=D.F=2, and

    D_{0,1}(X,F)=integral_[X] ev^*[pt]=1.

The regularized period coefficient in class F is thus 2!=2.

After suppressing the common t normalization (equivalently in the algebra of the normalized boundary elements), write theta_+=x and theta_-=q/x, where q records F. Rational maps have no nonconstant E projection, so the E factor contributes no extra rational degree or wall correction to this fiber calculation. The relation theta_+ theta_-=q is also the elementary balanced degree-one two-contact count: a unique isomorphism of P^1 onto the fiber with its two prescribed boundary preimages and fixed interior evaluation point, with trivial automorphism. More generally the cylinder has no singular joints causing broken-line scattering in this fiber sector. Its unit trace is Laurent CT in x.

Then CT(theta_+^2)=0, whereas

    CT((theta_+ + theta_-)^2)=2q.

No factorial adjustment can turn the former zero into 2q. The full-potential correction is necessary to retain the original class of all smooth anticanonical boundaries. Algebraically, in every degree,

    CT((x+q/x)^m)=0 for m odd,
    CT((x+q/x)^(2n))=binom(2n,n) q^n.

These identities follow by selecting n of the 2n factors to contribute x; they do not assert an unproved all-degree descendant calculation.

#### Exact multi-end ordered-product identity

Set d_i=beta.D_i and d=sum_i d_i. The no-rational-curves argument above applies to each D_i by adjunction, so for a genus-zero stable map each d_i is nonnegative. Keep its FULL contact vector; a single height d loses the distribution among ends. For a primitive-boundary tree of class beta, there are exactly d_i primitive unbounded flags at end i. Let H_un(beta) be the actual completed rooted-tree groupoid, with d noncontracted root flags and one contracted interior mark carrying psi^(d-2), and with precisely this end distribution. Its root factor is one. The groups preserve the end decoration; labels on root flags are initially absent.

The already proved action-groupoid identity in `inline construction 2` works without changing a word: globally ordering all d root flags multiplies each unlabelled mass by d!, regardless of repeated branch types, negative weights, or internal stabilizers. An ordered expansion of Theta_D^d chooses both an end i and a completed primitive broken line at that end in each factor. Cutting at the marked root recovers those ordered choices. Provided the ACTUAL canonical disk-completion correspondence supplies exactly these trees and weights, coefficientwise local finiteness gives

    [z^beta t^d] tr(Theta_D^d) = d! sum_{h in H_un(beta)} Mult_un(h).       (1)

This statement uses unit trace; replacement by a Laurent constant term requires the actual chart/trace compatibility, not merely existence of some abstract algebra. Each end must participate. The argument also applies for d_i=0, with 0!=1 and no flags at that end.

For a second exact formulation, give the first d_1 labels end 1, the next d_2 labels end 2, and so on, and let L_beta be the logarithmic descendant virtual degree with this FIXED component assignment of labelled primitive contacts. The d-fold expansion has d!/product_i d_i! such allocations. All are isomorphic by global relabelling, so an actual labelled geometric comparison would give

    [z^beta] tr(W_D^d) = d!/product_i d_i! * L_beta.                       (2)

The smooth-boundary normal-cone reduction has, for this fixed allocation,

    D_{0,1}(X,beta) = L_beta/product_i d_i!.                              (3)

Indeed the surviving fiber leaves over D_i can be permuted only within that component, giving product_i S_{d_i}; each surviving primitive fiber has coefficient one and each primitive node weight is one. Summing over all allocations instead would define L_all=(d!/product_i d_i!)*L_beta, and would change (3) to D=L_all/d!. These are the same formula, with two distinct meanings of 'labelled'. Equations (2)-(3) give exactly

    [z^beta] tr(W_D^d)=d! D_{0,1}(X,beta).

This constructs the component bookkeeping and algebraic deduction. It does NOT certify the virtual identity (3) or the global canonical comparison (2): those remain the actual geometric supplier obligations described below. Neither is inferred from the generic POT Definition.

#### Actual chamber trace calculation under the broken-line realization

There is an elementary part of trace compatibility which can be proved without a logarithmic GW theorem. Work in an actual chamber Laurent chart with tangent exponent lattice M; keep the curve monomials as coefficients. Require the actual canonical wall function f to have tangent exponents in ker(n), where n is its wall normal. A crossing acts by z^m -> z^m f^{<n,m>}. Every term of f^{<n,m>} has exponent in ker(n), including for negative powers using the given completion. If m is not in ker(n), none of the resulting exponents can be zero. If m is in ker(n), the crossing exponent is zero, so the image is exactly z^m. Therefore CT of each monomial is preserved, and coefficientwise local finiteness extends this equality to every allowed completed series. Thus CT is invariant under each actual crossing and their compositions. Tangent support is essential; consistency alone for an arbitrary input diagram is insufficient.

For the theta basis in the actual normalized broken-line realization, take a general endpoint P off every wall. A nonconstant broken line with nonzero input cannot have final tangent exponent zero: its last segment would be constant, so its last bend would occur at P; bends lie on walls, while P does not. A line without a bend retains its nonzero input exponent. Hence CT(theta_p)=0 for every such nonunit theta basis element. The normalized zero-input element is theta_0=1 and has CT one. If these elements form the actual supplied topological theta basis and expansion is compatible with the stated completion, linearity gives CT(sum_p a_p theta_p)=a_0. This proves the desired chart trace equality for that realization, rather than assuming that any abstract basis has this property.

These arguments cover every boundary component index separately and their products. They close the Laurent-trace bookkeeping once the actual normalized broken-line basis and tangent-support hypotheses of the canonical source are checked. They do not construct that canonical basis from a pair or prove its multiplication matches logarithmic invariants.

#### Marked toric vertex and global lattice index

Mandel-Ruddat arXiv:1612.02402v3 Definition 2.8 has marked-vertex factor ov(v)!/product_j s_j!. Here total marked valence is d+1, ov(v)=d-2, and the only psi exponent is d-2, so this factor is ONE. Its Lemma/Definition 2.16 defines the remaining multiplicity by a finite-index GLOBAL incidence/matching lattice map Phi, multiplied by compact-edge weights and divided by graph automorphisms. The marked-vertex factor being one does not imply that index(Phi)=1 for an arbitrary whole tropical graph.

For the local root star alone, the only incidence is that its sole vertex is the fixed point P. There are no compact edges. The map Phi is N -> N/L_N({P})=N and is the identity. Consequently its lattice index is one. A nontrivial balanced contact list does not introduce a determinant at this fixed root. The moduli-of-curves factor is integral_[Mbar_0,d+1] psi_0^(d-2)=1, as proved in the normalization file.

Away from the root, ordinary trivalent determinant factors can arise by eliminating the global matching equations with compatible edge-weight conventions. To claim their product is the complete index requires an actual elimination/gluing proof for the chosen graph. An arbitrary trivalent resolution of the marked root does not give that proof. For example the four root directions (1,0),(0,1),(-1,0),(0,-1) can be paired into opposite directions, creating a zero internal slope and determinant zero; pairing adjacent directions instead gives determinant product one. Thus 'choose any trivalent deformation and multiply its determinants' cannot define this descendant root multiplicity.

The local toric theorem cited by BGL is Mandel-Ruddat Theorem 1.1 for a smooth projective toric target, labelled contact vectors, generic incidence, the expected-dimension equation and its non-superabundant contribution. Theorem 1.1 plus the genus-zero absence of superabundant contribution supplies a toric LOG correspondence, when its full hypotheses and actual moduli are present. Its ordinary/log comparison later in Theorem 5.1 and Corollary 5.6 is expressly for products of projective spaces; it is not an ordinary/log comparison for every non-Fano toric surface. Its appendix deformation statement assumes a PROJECTIVE log-smooth family. This distinction survives any root normalization correction.

The exact full comparison still owed is: realize every contributing canonical tropical type on an actual permitted target degeneration; establish proper finite-type log maps and the relative POT/virtual specialization on that target; match its marked-root, unmarked toric, exceptional-cover, and edge-index contributions with the actual canonical scattering coefficients; prove the full lattice and automorphism factor for its graph; rule out or account for omitted types; and identify the chart trace with the coefficient of the theta unit. Existing rank-one node/enhancement calculations and the exceptional multiple-cover calculation address local pieces. They do not construct a projective global model for BGL §5.4 or identify arbitrary consistent scattering with the canonical enumerative diagram.

#### Scalar open-map formula cannot be extended by renaming W

The existing formal Lagrange calculation uses one Laurent direction and a simple-pole input f(u)=u^-1 h(u), h(0)=1. Its actual geometric infinity expansion is an additional one-end input. These conditions must remain explicit. A collection of ends is not one asymptotic direction.

Already in the two-end example theta_+=y and W_D=y+q/y. Then CT(W_D^2)=2q, so with the retained convention

    a_W=-CT log(1+W_D)=q+O(q^2),
    Q_cl=q exp(2 a_W)=q+O(q^2),
    M_W(Q_cl)=1+Q_cl+O(Q_cl^2).

Since d_F=2, the parity substitution fixes q. But theta_+/y=1. Thus theta_+=y M_W(eta(Q_geom)) is FALSE for the full two-end potential. The missing coefficient is not a sign error. The two-point invariant with one contact on each component is nonzero (degree-one fiber through a fixed boundary point has a unique second contact), while the broken-line expansion for theta_+ cannot turn into a term initially coming from the other end. A general multi-end open mirror theorem would require different, genuinely componentwise objects; it is not supplied by the scalar formula or by contact-vector bookkeeping alone.

The necessary rich repair therefore preserves the full smooth-D PERIOD assertion using W_D, and preserves the existing scalar OPEN identity on the actual source one-end sector. This is a correction forced by an explicit failure, not a Fano/ample restriction adopted to evade the non-Fano geometry. No replacement multi-end open formula is asserted here.

#### Production offer and consumer ownership

Offered correction for the target's public Statement: replace the unspecified primitive theta by the sum of primitive divisorial theta elements over all connected components of D; specify the source identification, unit trace and primitive-degree support; retain the exact d! regularized period and every smooth-D case. Start the scalar infinity paragraph with the explicit source one-end/simple-pole hypothesis and state that for multiple ends only the period assertion is made. Retain its negative-logarithm/parity convention. The factorial normalization is proved by the ordering identity below. Its former geometric comparison holds are supplied by [[lem-gts-divisorial-toric-pushout-regular-snc-family-model]] and [[lem-gts-adapted-log-map-atlas-and-supported-vertex-cone-comparison]], whose steps 15.1, 1.4, 14.2, 1.5, 2.3, 14.3, 15.2, 16.1, 17.1, 14.4 and 18.1 construct the original-generic supported cone-to-vertex equality. They are declared native dependencies through the package contracts, rather than remaining mathematical holds.

The current generic pair/scattering Definition is valid as an input definition and need not be narrowed to connected D. The intrinsic algebra Definition is also valid: it does not promise a distinguished primitive input. The two-marked invariant Definition needs component assignments made explicit if it is to be used for disconnected D; its point class on D should specify either an actual chosen component or a sum and the corresponding normalization. Its current formulation fixes an evaluation point in unspecified D and therefore needs checking before any multi-end open assertion is made.

The direct/indirect item consumer map is recorded in `multi-end-consumers.json`, computed from current source `deps` and `justified_by`, with textual uses checked separately. At this inspection the target has no other item consumer; its current page is the only canonical textual carrier. Its plan and batch-45 manifests/contracts are mirrors requiring owner reconciliation on a future authorized native edit, not separate mathematical consumers. No protected source or metadata mirror is changed by this offer.

#### Actual reading limits

Read current target and its pair/scattering, intrinsic algebra, quantum-period and two-marked suppliers, prior normalization/cone/node research, BGL cached text at Definitions 2.1, 5.1, 6.8, Proposition 6.9, §§5.4, 8.1-8.4 and 9-10; Mandel-Ruddat cached text at Theorem 1.1, Definition 2.8, Lemma/Definition 2.16, Theorem 5.1/Corollary 5.6 and Appendix A.3; Johnston cached text at Definition 5.2/equation (5.2). No assertion of full-source reading or locally reconstructed global logarithmic correspondence is made. No production source, native result, readiness stamp or acceptance receipt is changed.

### Inline construction 2

#### Ordered roots, descendant normalization, and the missing factorial in the theta period

Research construction for the exact existing non-Fano theta-period target. No source or consumer edit. The public regularized period remains 1+Σ d_β!D_{0,1}(X,β)z^β. The negative-logarithm/parity convention of its already corrected open-map half remains unchanged. This file proves the combinatorial normalization repair, including stabilizers and the marked-vertex convention; it does not claim to have reconstructed the global logarithmic moduli/virtual-degeneration theorem.

#### 1. Distinguish three kinds of labels

Fix a class β, d=D·β≥2, and a general chamber endpoint P. A descendant-rooted tropical tree has a distinguished vertex v at P, d incident noncontracted flags, and one additional contracted interior marked leg carrying ψ^{d−2}. Its total marked valence is d+1. Distinct flags are distinct half-edges of its abstract graph even when their images or decorated branches agree. An isomorphism preserves P, all edge maps/weights, internal decorations, and the interior marked leg, but initially does not preserve any ordering of the d flags.

These are different label conventions:

(a) **Unlabelled rooted curve:** no labels on the d root flags; its automorphism group includes exchanges of identical branches.

(b) **Ordered product/root labels:** a bijection {1,…,d}→Flag(v). These labels name the factors in θ₁^d, and may run across different asymptotic directions. They remove branch permutations but do not remove automorphisms internal to one branch.

(c) **Fixed toric degree labels:** boundary marks have a previously fixed map Δ:I→N to their contact vectors, as in Mandel–Ruddat. Only permutations preserving Δ form Aut(Δ)=∏_u S_{n_u}. These are not all S_d root labels. The toric-degree assignments themselves have d!/∏_u n_u! possible global orderings. Confusing (b) and (c) loses precisely the coefficient relevant to a power of one theta function.

#### 2. A weighted groupoid identity: ordering multiplies by d!, without freeness assumptions

Let G=Aut(h) for an unlabelled rooted curve h. Let L be the d! bijections from {1,…,d} onto its root-flag set. G acts on L. Give h an isomorphism-invariant intrinsic weight w(h) (product of all local factors, before dividing by Aut). The ordered objects over h are the action groupoid [L/G]; an orbit [ℓ] has automorphism group G_ℓ. Its weighted groupoid sum is

Σ_{[ℓ]∈L/G} w(h)/|G_ℓ|
 = w(h)/|G| Σ_{[ℓ]}|G·ℓ|
 = d! w(h)/|G|.                                                              (1)

This is the orbit-stabilizer formula and uses no assumption that G acts faithfully or freely on flags. In particular, automorphisms inside branches are retained in G_ℓ, as required. With Mult_un(h)=w(h)/|Aut(h)|,

Σ_ordered lifts Mult_ord = d! Mult_un(h).                                    (2)

All sums may be signed rational weights, and coefficientwise local finiteness suffices to sum (2) over h. There is no positivity assumption.

Equivalently, decompose the root into branch isomorphism types t with repetition n_t and branch automorphism groups A_t. The subgroup fixing root flags is ∏_t A_t^{n_t}; exchanging identical branches gives ∏_t S_{n_t}. Therefore an unlabelled root contributes ∏_t a_t^{n_t}/n_t!, while the coefficient of these branches in the ordered d-fold product is d!∏_t a_t^{n_t}/n_t!. Here a_t already contains the internal automorphism denominators. This is the same identity and shows exactly where the multinomial coefficient occurs in polynomial multiplication.

#### 3. The descendant root has factor one, not an arbitrary trivalent resolution product

The psi exponent is d−2, at a single interior marking of the (d+1)-pointed rational component. The local factor is

∫_{overline M_{0,d+1}} ψ_0^{d−2}=1.                                         (3)

For completeness, let n=d+1. Forget the last marking π:overline M_{0,n}→overline M_{0,n−1}, and let E be the boundary divisor on which marking 0 and that last marking lie on a contracted twig. Set A=π*ψ_0. The cotangent-line comparison gives ψ_0=A+E and E²=−AE; E≅overline M_{0,n−1}. These equalities follow by comparing the cotangent line before and after contracting that three-special-point twig; its normal line is the dual of the retained cotangent line. Thus (A+E)^k=A^k+A^{k−1}E: expand and use Σ_{j=1}^k binom(k,j)(−1)^{j−1}=1. For k=n−3 the A^k integral is zero by the dimension of the base. The remaining integral is ∫overline M_{0,n−1}ψ_0^{n−4}. Induction ends at overline M_{0,3}=point, proving (3).

Mandel–Ruddat Definition 2.8 gives the more general marked-vertex factor ov(v)!/∏ s_i!, with ov(v)=val(v)−3. Here ov(v)=d−2 and there is exactly one exponent s_0=d−2, so that factor is one. This agrees with (3). It is not the operation of replacing the high-valence marked vertex by an arbitrarily chosen trivalent tropical tree and multiplying all its determinants. The root in a theta-product union carries no determinant at all: the product multiplies its incoming coefficients, subject only to balancing. Thus any geometric tropical correspondence used in the repaired proof must use the marked-vertex factor (3) at this root.

Away from the root retain the intended trivalent determinant factors and the bounded-leg factors (−1)^{w+1}/w², with their internal automorphism denominators. Equations (1)–(3) are insensitive to their signs or repeated isomorphic decorations. They correct both the root label convention and the interpretation of its single maximal psi insertion.

#### 4. Exact ordered theta coefficient

Work coefficientwise in the actual theta completion. Expand θ₁(P)^d as a sum over **ordered** d-tuples of broken lines with endpoint P. The unit/constant-term condition says their final tangent monomials balance at P. Complete each line by its wall-attached disks; the union is a rooted tree with the d root flags ordered by the factor numbers. Conversely cutting at the root recovers these d ordered completed branches. The weights are the products of the branch coefficients, and the root has factor one as in §3. Internal automorphism factors belong to each branch; identical whole branches are distinct factors of the ordered tuple.

One can check that disk completion respects these weights directly in the wall expansion. Write a wall function as exp(L), where L is its sum of connected attached-disk weights. Crossing with exponent r expands exp(rL)=Σ_k r^k L^k/k!. Each unordered multiset of attached components contributes its product weight divided by the factorials of equal components. This is exactly its weighted action-groupoid denominator; cutting an attached rooted tree reverses the expansion. Induction on the Novikov order constructs the finite completed-branch expansion, and the declared local finiteness passes it to the completed algebra. This argument does not require positive wall weights or a free permutation action.

Consequently, for precisely this descendant-rooted groupoid, whose unlabelled weight is Mult_un,

[z^β t^d] CT(θ₁(P)^d)=d! Σ_{h∈H^ψ_un(B,β)_P}Mult_un(h).                     (4)

Removing t by W=t^{-1}θ₁ gives

[z^β] CT(W^d)=d! Σ_h Mult_un(h).                                            (5)

Equation (4), rather than the printed unweighted equality, is the correction to BGL Proposition 9.1. Its own proof constructs an ordered tuple and then forgets the tuple's order when it passes to an unlabelled rooted tree; (1) is that omitted weighted fiber. The claim that every root branch carries one primitive unbounded leg must be supplied by the same curve-class/degree argument as in that source; if a chosen completion has additional types, they must be included explicitly rather than discarded. Equation (4) applies to the stated primitive d-branch sector and its exact completion correspondence, not to arbitrary unrelated scattering data by fiat.

If the genuine logarithmic/tropical descendant comparison is

D_{0,1}(X,β)=Σ_h Mult_un(h),                                                 (6)

then (5) gives exactly [z^β]CT(W^d)=d!D_{0,1}(X,β), and the richest original period formula is preserved. Replacing the quantum period by an unregularized series would be the wrong repair. Likewise multiplying the descendant invariant itself by d! a second time would double-count the labels.

#### 5. Exact checks beyond the single line coefficient

For the central plane potential W=x+y+q/(xy), a constant term occurs only in power 3e. It uses e copies of each monomial. Thus

CT(W^{3e})=(3e)!/(e!)³ q^e.

The corresponding unlabelled star has automorphism group S_e³, root factor one and intrinsic weight one. Its mass is 1/(e!)³, exactly the ordinary plane descendant coefficient. Equation (2) gives (3e)!/(e!)³. For e=1 this is the confirmed 6 rather than 1. For e=2 it is 90 rather than 1/8; the factor is 6!=720, confirming that the repair concerns the complete exponential/ordinary-series conversion and stabilizers, not only one exceptional example.

For a product fan with W=x+q₁/x+y+q₂/y, degree (a,b) occurs in power d=2a+2b and has ordered coefficient d!/[(a!)²(b!)²]. Its unlabelled star has automorphism group S_a²×S_b² and mass 1/[(a!)²(b!)²]. This is the same general groupoid identity with four different branch types, including cases a=0 or b=0 when the degree and stability permit it.

#### 6. The exact missing geometric supplier, with no circular normalization

The ordinary D in the actual target is the virtual integral on overline M_{0,1}(X,β). A proof of (6) cannot simply rename it as a log invariant. The correct comparison route uses the stack of basic logarithmic maps with one interior mark and d **labelled** boundary marks of contact order one. The labels are global on the one smooth divisor D. Let F forget the log structure and those boundary marks. To obtain the needed equality, one must prove on the interior-point incidence cycle:

F_*([LogMap_{0,1+d}(X,D,β;0,1^d)]^vir ∩ ψ_0^{d−2} ev_0^*[pt])
 = d! [overline M_{0,1}(X,β)]^vir ∩ ψ_0^{d−2}ev_0^*[pt].                     (7)

The open transverse locus is indeed a degree-d! label cover. Also the psi class agrees there, and a component contracted on forgetting boundary marks could carry the interior incidence mark only if its image lies on D; choosing the point in X\D excludes that locus. These two elementary facts establish the generic degree and remove the possible psi-boundary correction at the constrained mark. They **do not alone prove** the virtual pushforward (7) on a nonconvex target or prove properness of the basic log stack. An actual obstruction-theory compatibility and virtual pushforward construction is still necessary.

The logarithmic degeneration theorem must next identify the left virtual degree in (7) with the **labelled** tropical groupoid sum. Local toric components have fixed contact-vector label sets. Summing the allocations of the d global labels among those sets contributes d!/∏n_u!, while local equal-vector relabelling contributes ∏n_u! in its comparison with unlabelled maps. These factors cancel exactly to the global d!, in agreement with (1). The root local psi contribution is (3). Node-root choices contribute products of contact weights, canceled against the basic base-lattice index as in the usual log gluing degree; exceptional components must supply the signed bounded-leg multiple-cover factors. None of these analytic/geometric multiplicities may be replaced by a numerical agreement with the plane example.

Thus (7), the actual basic-stack construction, the compatible tropical degeneration/gluing virtual class, and the local exceptional multiple-cover integral are the exact remaining geometric obligations. There is no factorial obstruction once their label conventions are stated correctly. This file does not claim these global constructions follow from the generic perfect-obstruction-theory Definition or from the existing ordinary stable-map theorem.

#### Reading scope and proposed surgical target change

Actual target and its three definitions (two-marked log invariant, quantum period/mirror coordinates, toric/scattering data) were read in full. BGL arXiv:2404.16782v3 cached text was read at §§3.1–3.3, §§7.1–7.2, §8.1 discussion through §§8.3–8.4 and §9 (the exact coefficient proof). Mandel–Ruddat arXiv:1612.02402v3 was fetched, and its Definition 2.8, §5.1/Theorem 5.1/Remark 5.2 and the unlabelled correction/Corollary 5.6 were read; not its whole 40-page proof. Gräfnitz arXiv:2005.14018v4 was fetched, with its introduction and selected §4 decomposition, local exceptional integral and gluing passages read. That source proves a del-Pezzo maximal-tangency theorem and cites the additional log-degeneration machinery; it is not an already local full non-Fano descendant proof.

Proposed target proof correction: keep its entire period formula, retain the negative-logarithm sign correction, replace its [A2] by (4), define the unlabelled descendant-root convention including (3), and replace its [A5] failed-factorial claim by the proved ordering identity (1)–(5). The exact global geometric obligations in §6 remain held until constructed; they are not removed by this normalization repair. No source waiver or full-theorem closure is asserted.

## Proof

1.1 Apply the inline local derivations in their stated finite branch order, with the actual scheme, log and trace data of the Statement. The derivations preserve the entire generic pair, class and component labels, nilpotent equations and supported cone operations wherever those occur. [F1]

2.1 Their combination gives the Statement using exactly the declared native dependency contracts. Provenance paths are not logical suppliers. This is a draft source candidate; dependency levels and ordinary native review/acceptance remain owner operations. [1.1,F0] ∎
