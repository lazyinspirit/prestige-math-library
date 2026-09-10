# Supercompact preparation: owner candidate and exact local suppliers

Operator candidate, 2026-09-10. Canonical forcing items/pages are read-only in this task. The binding target remains general indestructibility by every further <κ-directed-closed set forcing, in ZFC; no countable-transitive-model substitute is used. This document supplies the iteration/lifting/descent argument conditional on the explicitly listed common forcing foundation being completed by the forcing author. It is not an unconditional proof receipt for `thm-lc-supercompact-preparation-interface`, an owner scope decision, or a source waiver.

## Read evidence and the one common foundation interface

Read the complete current target, `thm-lc-laver-function-existence` (085f13681 content), `thm-lc-supercompactness-closed-embedding-characterization`, valuation definition, Boolean-semantics definition and well-definedness lemma, transitivity/rank-bound theorem, forcing-preorder definition, model-generic definition, and regular-open completion theorem. There is no existing forcing-iteration item in the inspected item inventory. The existing Boolean lemma proves definable values only; the valuation theorem expressly excludes axiom satisfaction. Neither can serve as a forcing theorem by implication.

The forcing author's parallel work should supply interface **FT**: for every set preorder with a top (adjoin one harmlessly), its forcing relation for each fixed formula is definable; the forcing/truth theorems hold; names can be mixed over maximal antichains, giving the maximum principle in ZFC; forcing preserves ZFC and ordinals; dense suborders and regular-open completion preserve forcing truth; and two-step forcing has the usual generic factorization. FT must apply internally to definable transitive class models and formula schemas, not only externally countable transitive sets. These clauses are requested interfaces, not proved by this document. The forcing author is independently working on generic Boolean filters, truth, and axiom validity; this candidate does not duplicate that work.

New primary-source consultation: Hamkins, *The Lottery Preparation*, [arXiv:math/9808012v1](https://arxiv.org/pdf/math/9808012), read the full definition/support convention and Lemmas3.1–3.2 on printed pp24–26, and the full Corollary4.6 proof on p40 (PDF page39). The latter uses extra outer forcing, a master condition, and descent of a derived normal fine measure. It is a lottery variant, not the original Laver paper, and does not replace the missing FT development. The candidate below uses explicit directed-closed Laver stages, so does not import strategic closure as directed closure. Neither original Laver nor Fremlin six-attempt history was retried or reset. No full-paper reading or canonical source stamp is claimed.

## Exact formal target

Write SC(κ) for the first-order ZFC assertion that κ is an uncountable cardinal and for every cardinal λ≥κ there is a normal fine κ-complete ultrafilter on P_κ(λ). Write DC_κ(Q) for the first-order assertion that Q is a nonempty set preorder and every nonempty downward-directed subset of cardinality less than κ has a common lower bound. All cardinalities here are computed in the model in which the assertion occurs.

The intended theorem is the ZFC theorem

    SC(κ) ⇒ ∃P [ 1_P forces
       (SC(κ) and ∀Q (DC_κ(Q) ⇒ 1_Q forces SC(κ))) ].

The second forcing relation is the internally defined relation in the P-extension. This formula is the preparation assertion itself; it is not a claim that ZFC proves its own consistency or that every model has an external generic in the current universe. Semantic notation W[G] below means a supplied generic extension or a temporary set-forcing extension. Formalization uses FT inside Boolean values. Any separate Con transfer is the forcing author's finite-proof obligation, not inferred from the existence of an externally countable transitive model.

All subsequent local lemmas are in ZFC and use FT explicitly where indicated. AC is used for maximal antichains, well-orders and name selections, coordinate lower bounds, cardinal arithmetic and normal-measure arguments. Canonical adoption must declare `def-axiom-of-choice` and the completed FT supplier(s).

## Local supplier A: small forcing and closed inner targets

Suppose M⊆W are transitive models of ZFC with the same ordinals, χ an infinite cardinal of W, and every W-function χ→M belongs to M. In particular every W-set of at most χ elements of M belongs to M, by enumerating and padding; this is also proved in the current Laver theorem. Suppose S∈M, its underlying set and order are the same in both models, and W has |S|≤χ. For a common W-generic K⊆S, we have

    (M[K])^χ ∩ W[K] ⊆ M[K].

Proof. Let f be a χ-sequence of elements of M[K] in W[K], and take a W-name for f. Below a condition forcing this assertion, for each i<χ choose a maximal antichain deciding an M-name τ for f(i). Such decisions are dense: every value has some M-name, and FT's truth and maximum principles give a condition witnessing one. If needed first bound the ranks of the witness names by Collection in W, so these are set choices. Each antichain has size at most |S|≤χ. The set of all selected pairs (condition, M-name), over all i, has size at most χ, consists of elements of M, and therefore belongs to M. Inside M mix each antichain's names and form the name for the sequence. Its evaluation is f. The same proof works below every condition, so it gives the asserted closure in the actual extension. No claim that all S-names or all antichains form a proper-class-sized set was used.

Now suppose R∈M is internally ≤χ-closed (every descending sequence of length at most χ has a lower bound). It is externally ≤χ-closed in W: the sequence of conditions belongs to M by closure, and its internal lower bound works externally. For a common W-generic L⊆R,

    (M[L])^χ ∩ W[L] ⊆ M[L]

still holds, without a size bound on R. To prove this, below any condition and for a name for a χ-sequence of M[L]-elements, recursively strengthen to decide an M-name for each entry. At limit stages and after all χ entries take a lower bound using the external closure just proved. The χ-sequence of decided M-names belongs to M, so its canonical sequence name belongs to M and the final condition forces that it evaluates to the given sequence. Such final conditions are dense. This proves closure after the common forcing. The same argument applies to a cone R below a condition in M, and to directed closure, since every descending chain is directed.

FT also gives the no-new-short-sequences consequence used later: ≤χ-closed forcing adds no new functions χ→A for any ground set A, by deciding all coordinates along such a descending recursion and taking its final lower bound. Padding covers shorter domains. Hence it adds no subsets of a ground set of size at most χ. This is an internal theorem of ZFC about its forcing relation, not a generic-countability assertion.

## Local supplier B: the exact reverse-Easton iteration

Fix the supplied Laver function ℓ:κ→V_κ. Define P_α and stage names Q_α by recursion for α≤κ. At a limit δ take the direct limit when δ is an inaccessible cardinal of the ground model and the inverse limit otherwise. Equivalently, conditions have support bounded below every ground-model inaccessible δ≤α; at an inaccessible terminal α their whole support is bounded in α. Trivial coordinates can be omitted. At a successor use the ordinary two-step order: (p,σ)≤(q,τ) iff p≤q and p forces σ≤τ. Conditions are coherent sequences of stage names with this order on every restriction.

A stage γ<κ is nontrivial only if all of the following hold:

1. γ is inaccessible in the ground model and ℓ``γ⊆V_γ;
2. ℓ(γ) is a pair (qdot,η) with η an ordinal;
3. qdot is a P_γ-name and 1 forces that it is a nonempty <γ-directed-closed preorder with a top.

Then Q_γ=qdot; otherwise use the one-point forcing. No enumeration of all forcing notions is involved. The ordinal η is a gap marker. Whenever stage γ is active and γ<δ≤η, stage δ cannot be active: the closure condition ℓ``δ⊆V_δ would require the pair containing η to have rank less than δ, which is impossible. The same argument applies in the image iteration.

**Set/name convention.** Successor conditions need only use a set of names representing members of Q_γ, closed under mixing over antichains of P_γ. Start with the first-coordinate names occurring in qdot, include the top, and take antichain mixtures. FT's membership and maximum principles show that these names give a dense presentation of the full two-step preorder. Mixing can be written directly as the union of restrictions of those names to Boolean coefficients; repeated mixing flattens to a single mixture. The set of mixtures has cardinal bounded by a power set of the product of the old condition set and the name set. Use this specific presentation throughout the recursion, so no class of all names enters P_α.

By induction |P_α|<κ and all conditions/name codes have rank below κ for α<κ: stage data have rank below κ; fewer than κ earlier sets of size less than κ have total size less than κ by regularity, and products/power sets of such sets have size less than κ by strong inaccessibility. The rank bounds follow from the same regularity and the finite-rank operations on names. At κ the direct limit is the union of κ earlier presentations, hence |P_κ|≤κ and P_κ⊆V_κ. More locally, if δ is inaccessible and ℓ``δ⊆V_δ, the same induction below δ gives |P_α|<δ for α<δ and |P_δ|≤δ.

**Factorization, including names.** The cuts needed here have a prefix of density at most a, all potentially nontrivial tail coordinates at least a, and all inaccessible support limits strictly above a still regular in the prefix extension. They include a closure-point cut α with a=α, and the cut after the anticipated stage κ with a=χ and a trivial gap through χ. Restriction is the first-coordinate projection. In a prefix extension recursively translate a name by replacing each coefficient condition with its tail when its prefix belongs to the generic, and omitting it otherwise; translate its subnames by the same rank recursion. Evaluation by a tail generic then equals evaluation of the original name by the combined generic, by induction on name rank. Successor-stage order assertions transfer by FT, giving the two-step order recursively.

Conversely let a prefix name be forced to be a tail condition. For each potentially occurring coordinate choose a name for its value, using the top when that coordinate is absent. At each ground inaccessible support limit δ>a, an antichain of at most a prefix conditions decides a bound below δ for that tail support. Regularity of δ bounds the union of these at most a possible bounds strictly below δ. Thus the set of all coordinates which can possibly occur is itself bounded below every such δ. At support limits at or below a there are no tail coordinates. This is the missing uniform support check: mixing possible coordinate values on prefix antichains cannot violate the support rule. At an inaccessible terminal stage use the same argument for its whole support. Recursively transpose the coordinate names from prefix-plus-earlier-tail names into full earlier-stage names; the rank recursion just described and the ordinary two-step name translation give this transposition at each successor. At limit stages the now-verified support bounds permit their assembly, with all coherent restrictions retained at inverse limits. The result is a full condition below the original prefix whose translated tail is the prescribed one. This proves the dense factorization at precisely the cuts used below. Its construction is definable from the iteration data, so elementarity carries it to j(P). Generic concatenation is interpreted through this dense equivalence, not as literal equality of arbitrary name encodings.

**Tail closure.** In a prefix extension in which every ground inaccessible δ above a cut a remains regular, a tail beginning at a whose stages are forced <γ-directed closed is <a-directed closed. Given a directed family D of size μ<a, union its supports. At each inaccessible δ>a, the union is bounded because δ is regular and μ<δ. At an inaccessible terminal stage the same reasoning applies. Construct a lower bound coordinate by coordinate. Having a common stronger prefix, the names for the D-coordinate values form a directed family in the forced stage order: for every two original conditions a third condition of D is below both, and the common prefix forces its coordinate to be a common stronger value. Stage directed closure gives a lower-bound name by FT. At limit coordinates use the permitted union support. The recursion therefore produces a condition below all of D. If there are no nontrivial stages at or below χ and the ground inaccessible support limits above χ remain regular, this argument works for |D|≤χ and gives ≤χ-directed closure. This proof uses directedness, not just pairwise compatibility.

In the applications the regularity premise is automatic: the prefix forcing has size at most a (or at most χ), hence preserves regular cardinals strictly above that bound. To verify this small-forcing fact, a name for a cofinal function from τ<δ into a regular δ has at each coordinate at most |S| possible ordinal values, by choosing an antichain deciding it. The union of τ·|S|<δ possible values is bounded. Thus no such cofinal function is added.

## Local supplier C: κ remains an inaccessible cardinal after P_κ

First P_κ is κ-cc. Take a hypothetical sequence of κ pairwise incompatible conditions p_α. A normal measure on κ concentrates on the inaccessible ordinals: derive it from a κ-closed supercompactness embedding; its target sees κ inaccessible, since it has the same small subsets/cardinal computations. For each inaccessible α, the direct-limit support condition makes supp(p_α)∩α bounded below α. Normality makes such a bound constant, say β, on a measure-one set. Since |P_β|<κ, κ-completeness makes p_α|α constant on a further measure-one set (a partition into fewer than κ pieces has a measure-one piece). Pick α<α' there with supp(p_α)⊂α'. Then p_α and p_α' agree on their common initial part, and the tail of p_α' above α' can be appended to p_α. Strengthening a prefix preserves every later name-order assertion, so this is a common extension. Contradiction.

A κ-cc forcing preserves regularity of κ: a name for a cofinal function τ→κ, τ<κ, has fewer than κ possible values at each coordinate, and regularity bounds their union. It also cannot identify κ with a smaller ordinal, since such a bijection would yield a cofinal map.

To verify the strong-limit clause, fix ξ<κ. If the nontrivial stages are bounded, the preparation is equivalent to a forcing of size less than κ, and its subset names for ξ have number less than κ by strong inaccessibility. Otherwise choose an active stage a>ξ. Its prefix has size at most a by supplier B, hence it adds at most (2^{a·ξ})^V<κ subsets of ξ. The tail starting at a is <a-directed closed: the prefix has size at most a and preserves every inaccessible support limit above a. Thus it adds no further subsets of ξ. Together with κ-cc and the old cardinal bound below κ, this proves 2^ξ<κ in the extension.

The same bounded-stage/unbounded-stage argument shows that any inaccessible closure point δ of ℓ remains inaccessible through P_δ: in the unbounded case use an active a between the length of a putative short cofinal map and δ. The small prefix cannot add such a cofinal map into the ground regular δ; the tail adds no sequences of that length. In the bounded case the whole prefix is small. For power sets use the identical cut argument. This local verification makes the stage test <γ-directed closure genuinely a regular-cardinal test at every active γ; it does not assume that every inaccessible below κ is Mahlo or that every P_γ is γ-cc.

## Local supplier D: lifting an embedding through set forcing

Let j:W→M be an elementary embedding with the existing definable-class/set-restriction convention. Let G⊆P be W-generic and K⊆j(P) be M-generic in a common outer universe, with j``G⊆K. Define

    j*(val_G(τ)) = val_K(j(τ)).

If val_G(τ)=val_G(σ), FT supplies p∈G forcing τ=σ. Elementarity carries this to j(p) forcing j(τ)=j(σ), and j(p)∈K; hence the displayed definition is independent of the name. For any fixed formula φ and tuple of names, truth in W[G] gives a condition in G forcing φ, which transfers and gives truth in M[K]. Applying the same argument to ¬φ gives the converse. Thus j* is elementary formula by formula. Check names show it extends j. These are definable set operations on each bounded family of names; there is no uniform truth predicate or arbitrary class quantifier. Genericity of K is indispensable and is not inferred merely from containing j``G.

## Local supplier E: master condition and bounded measure descent

Suppose in W=V[G][H] the first lift j_0:V[G]→M[J] exists in a temporary outer extension, with J containing both G and H as the κ-stage factors. Suppose Q∈V[G] is <κ-directed closed, H⊆Q generic, and M[J] contains j_0``H as a set of internal cardinality less than j(κ). Elementarity makes j_0(Q) internally <j(κ)-directed closed. Its subset j_0``H is directed because H is a filter and j_0 preserves the order. Hence there is q* below every element of j_0``H. Force over the current outer universe with the actual set preorder (j_0(Q))^{M[J]} below q*. Its generic K is M[J]-generic and contains j_0``H after upward closure. Supplier D gives the second lift. This works for arbitrary Q; no unions-of-conditions or special Cohen presentation are assumed.

The set-membership premise has an explicit proof in the application. Choose a ground bound ν and a P-name for an enumeration e:ν→Q (allow repetitions). Its name belongs to M, and the old function j``ν belongs to M by closure. In M[J] both the original e and H are present, and j_0(e) is present by evaluation of j(e)'s name. Thus

    { j_0(e)(j(α)) : α<ν and e(α)∈H }

is exactly j_0``H and has an internal enumeration of length at most ν. This avoids treating j_0 itself as a set in its target.

For descent fix λ≥κ in W and let X=(P_κ(λ))^W. Suppose the temporary forcing after W is ≤χ-closed and W has |P(X)|≤χ. Derive

    U = { A∈P(X)^W : j``λ ∈ j*(A) }.

The seed is in the target and has internal size at most λ<j(κ), by its old increasing enumeration, so it belongs to j*(X). Elementarity gives the ultrafilter laws and fineness. For a sequence of fewer than κ members of U, j fixes its index and the seed belongs to the intersection of their images, proving κ-completeness. For a selector f on a U-large subset of X with f(x)∈x, the value j*(f)(j``λ) is j(α) for some α<λ, so the corresponding constant fiber is U-large, proving normality. All these arguments concern W's sets and sequences. Finally U is a subset of the W-set P(X), whose size is at most χ; no-new-short-sequences from supplier A puts U in W. The temporary lift need not belong to W. Descending its set-sized measure, rather than asserting that an external embedding already proves SC in W, is the crucial last step.

## Conditional preparation proof from FT and the local suppliers

Let P=P_κ as in B, and let G be generic. By C, κ remains inaccessible in V[G]. Take any further <κ-directed-closed set preorder Q in V[G] and its generic H. It suffices to prove λ-supercompactness for each ordinal λ≥κ: every cardinal in the final extension is an old ordinal. Add a top to Q and use a presentation with a fixed ordinal enumeration, without changing forcing equivalence.

Choose a P-name qdot and a condition p∈G forcing the required properties. To obtain a name forced correct by 1, mix qdot below the Boolean value of p with the one-point preorder on its complement. This agrees with Q in the actual extension containing p, is everywhere <κ-directed closed, and avoids an unjustified global forcing assertion about the originally chosen name. The same mixing supplies a total enumeration of its members from one sufficiently large ground ordinal, with repetitions and a top as fallback.

Choose an infinite ground cardinal ν≥κ,λ large enough for the transitive closures of these names and a dense presentation of P*qdot of size at most ν. Such a bound exists because these are sets; after an ordinal enumeration of Q's possible name values, conditions in a dense two-step presentation are pairs of a P-condition and an enumeration index. Set

    μ=(2^ν)^V,   θ=(2^μ)^V,   χ=(θ^+)^V.

These are bounds chosen after Q's name and λ, before choosing the anticipation embedding. In W=V[G][H], all subsets of λ are evaluations of names coded by subsets of S×λ, with |S|≤ν, so there is an enumeration of P(λ)^W indexed by the ground ordinal μ. This follows by choosing antichains for the membership decisions; it does not assume the forcing has a smaller chain condition. Turn this into a surjection μ→X=(P_κ(λ))^W by retaining values of size less than κ and replacing other values by the empty set. Every subset of X is the image of its inverse image in μ. Subsets of μ in W in turn have names coded by subsets of S×μ, of which there are at most θ in V. Consequently W has |P(X)|≤θ<χ. The small forcing S preserves the regular cardinal χ. This explicit double-exponential bound includes subsets of the *new* P_κ(λ), not just old subsets of λ.

Apply the completed Laver theorem to the single target pair (qdot,χ), requesting χ-sequence closure. Obtain j:V→M with critical point κ, j(κ)>χ, M^χ∩V⊆M, and

    j(ℓ)(κ)=(qdot,χ).

The initial κ stages of j(P) agree with P: j fixes the old stage data below κ, all their condition/name codes lie in V_κ, and the closure of M includes the relevant small subsets and cardinal computations. In particular the inaccessible/support tests below κ agree. At κ, M sees κ inaccessible and j(ℓ)``κ=ℓ⊆V_κ^M. It also sees that qdot is a P-name for <κ-directed-closed forcing. For this last assertion one can check downward absoluteness explicitly: a purported M-name for a <κ-sized directed family with no lower bound evaluates in a common V-generic extension to the same family in the same set Q, with the same order and the same possible lower bounds. That would contradict V's forced closure. Names for the underlying set, order, and ordinal enumeration belong to M by the chosen hereditary-size bound and χ-closure. Thus the stage-κ test succeeds.

The gap-marker argument makes every later stage at or below χ trivial. By B the image iteration therefore factors, up to its fixed dense name presentation, as

    j(P) ≃ P * qdot * R,

where M[G][H] regards R as ≤χ-directed closed. The small prefix P*qdot has size at most ν<χ; it preserves regularity of all inaccessible support limits above χ, exactly the premise of B's tail-closure proof. Supplier A gives M[G][H] closure under χ-sequences in W and therefore makes R externally ≤χ-directed closed in W.

Temporarily force over W to add L⊆R. This is a specified set-forcing extension, not a claim that L already exists in W. The combined filter J=G*H*L is M-generic for j(P). Because every condition p of P has rank below κ, j(p)=p and its image in j(P) is its initial-segment inclusion, so j``G⊆J. Supplier D supplies

    j_0:V[G]→M[J].

Supplier A's closed-forcing clause gives (M[J])^χ∩W[L]⊆M[J]. The enumeration argument in E puts j_0``H into M[J] with internal size at most ν<j(κ), and E supplies a master condition q* in j_0(Q).

In W[L], the actual set preorder (j_0(Q))^{M[J]} below q* is externally ≤χ-closed: any descending χ-sequence of its conditions belongs to M[J] by the just-proved closure, and internal <j(κ)-directed closure supplies a lower bound. Temporarily force below q* to obtain K. The two-step temporary forcing R*(j_0(Q) below q*) is ≤χ-closed, by the coordinate lower-bound argument in B (for two steps). Supplier D now gives

    j*:W→M[J][K].

The old set j``λ and its increasing enumeration remain in this target. Since κ remains a cardinal in W (C and the no-new-short-sequences property of Q), elementarity makes j(κ) a cardinal there, and the seed's enumeration length λ<j(κ) proves that the seed belongs to j*(X). Supplier E yields a normal fine κ-complete measure U on X and, using the bound |P(X)|<χ, proves U∈W. Hence W satisfies λ-supercompactness. This holds for every λ and every further <κ-directed-closed Q, of arbitrary set size. Taking Q trivial also proves that κ is supercompact already in V[G].

This completes the preparation argument **conditional on FT**. The dependence is mathematical, not a source-access condition. It would be inaccurate to mark the canonical item complete while FT is absent, or to cite current valuation/Boolean-recursion items as though they proved it.

## Integration and remaining review

The proposed local suppliers A–E can be placed as necessary lemmas inside the existing large-cardinal A development before the preparation consumer; they do not require a new pair. They are candidate arguments rather than registered new IDs. The iteration presentation/factorization paragraph should receive an explicit author/owner check of the chosen antichain-name coding and quotient-tail conventions before canonical registration. It now includes the uniform support-bound argument at each inaccessible limit, and asserts factorization only at the cuts actually needed here. All other closure/master/descent steps have their model, support, cardinal and generic requirements spelled out above. In particular no GCH, smallness restriction on the eventual Q, syntactic global truth predicate, or CTM existence axiom has been added.

Required next action: the forcing author completes and names FT's exact clauses; root/author performs ordinary mathematical review of B's name-presentation factorization; then convert these candidates into canonical proofs/contracts and synchronize the target's dependencies and coverage. Keep the original source holds and preparation item decision open until these mathematical inputs are actually authored and checked. No canonical mutation or closure receipt is included in this candidate.
