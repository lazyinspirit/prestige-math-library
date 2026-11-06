---
id: lem-gts-finite-derived-target-diagram-actual-map-extraction
kind: lemma
title: Finite derived target diagrams recover actual maps with selected etale coverage
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps: []
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
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
sources:
  references:
  - title: Gross and Siebert, Logarithmic Gromov-Witten invariants
    url: https://arxiv.org/abs/1102.4322
    locator: Log-map and obstruction-theory context only; the constructions below
      are explicitly inlined and are not attributed to an imported representability
      theorem.
  - title: Chen, Stable logarithmic maps to Deligne-Faltings pairs I
    url: https://arxiv.org/abs/1008.3090
    locator: Rank-one graph and valuative-chart context; no external algebraicity
      or properness theorem is used.
dependency_level: 0
---

## Statement

Let Q be a noetherian regular separated algebraic space of finite type over a fixed affine characteristic-zero base. Supply a finite affine etale cover with finite normal Zariski-main closures, together with finite polynomial presentations over the fixed base for its affine charts and their closed fibre-product relations. There is a finite coherent perfect target diagram, with fixed boundary multiplication and bounded derived-annihilator witnesses, having this property. For any proper flat finitely presented curve C→S, any connective perfect model of the specified diagram with its products, commutator/unit homotopies and actual polynomial/witness identities defines a unique actual map C→Q whenever its J-unit TOTAL classical etale loci jointly cover C. This construction commutes with arbitrary scheme base change and retains nilpotents. Every actual map's canonical derived pullback diagram satisfies that coverage condition. The diagram and witness exponents are selected on Q before any source map.

This is conditional only on the supplied closures, finite presentations and stated model data. It does not assert finite equation representability or formal smoothness of arbitrary model choices. Canonical whole-source roof rigidification can be imposed only AFTER the actual map has been extracted.

## Facts & Assumptions

**Given:** Exactly the target cover/closures and the stated finite homotopy-coherent model data. Target perfection follows from regularity. No representability of a Q-map stack is assumed. No external research file is a logical supplier.

## Proof

1.1 Select finite coordinate and overlap-polynomial monomial lattices in the finite closures, with their actual inclusions, products and inverse-up-to-boundary maps as constructed in annex §1. [given, construct]

2.1 Use bounded Postnikov filtrations over REGULAR $O_{Q}$ to produce finite tensor-power boundary-action null witnesses on the overlap comparison cones. The construction and independence from source nilpotence order are in annex §2. [step 1.1, construct]

3.1 Homotopy products, commutators and units give actual finite commutative $H^{0}$ algebras. On their boundary-unit TOTAL etale loci invert the lattice inclusions. Coordinate polynomials give maps to the affine target charts, and overlap cone witnesses give maps into their actual fibre-product relation, on entire nonreduced overlap schemes. Etale sheaf descent gives the unique map. Annex §§3–4 records each algebra and equation. [step 1.1, step 2.1, construct]

4.1 For a canonical pullback, isolate the selected etale fibre factor by an etale-locally lifted idempotent. It splits the PERFECT derived object. Its fibre amplitude zero implies that summand is a vector bundle in degree zero, hence its finite algebra is flat and actually etale near the selected point. Annex §5 proves coverage without the false fibre-etale $H^{0}$ shortcut. [step 3.1, construct]

5.1 The construction commutes with arbitrary base change. Extract the map before forming its canonical whole-source diagram and imposing roofs; no pole bound or unknown mapping-stack representability enters. Annex §6 states the precise remaining model/roof boundary. [step 3.1, step 4.1, construct] ∎

## Inline proof annex

## 1. Scope and fixed target data

Let Q be a noetherian regular separated algebraic space, of finite type over the fixed affine characteristic-zero base used for the target. Choose finitely many affine separated etale charts $V_{j}\to Q$ covering Q. Use finite normal Zariski-main closures $V_{j}\subset Z_{j}\to Q$; their existence and finiteness are the finite-closure input, not a consequence of this note. Put $F_{j}=(Z_{j}\to Q)_*O_{Zj}$. These are coherent finite $O_{Q}$-algebras. Work componentwise if Q is disconnected. Let $J_{j}\subset F_{j}$ be a coherent ideal with $V_{j}=Z_{j}\setminus V(J_{j})$. Such an ideal exists because the complement of this quasi-compact open is closed in the noetherian finite space. All sheaves below live on Q; a module over $F_{j}$ is also an $O_{Q}$-module.

Use the supplied finite polynomial presentations: fix their finite algebra generators $a_{jl}$ for each affine $V_{j}$ over the fixed affine base and their finite defining polynomial relations. Finite type over an arbitrary affine base alone does not supply finite defining ideals. As rational functions on the normal closure, these lie in its product of function fields. Include only finitely many monomial lattices

    $M_{j},S$ $=$ $\sum _{\beta  \in  S}$ $F_{j}$ $a_{j}^{\beta }$,

where S contains 0 and the exponent vectors needed for the chosen equations, their partial products, and the overlap equations below. Include the inclusions $F_{j}\to M_{j},S$, distinguished sections representing the monomials, and the finitely many multiplication maps to lattices large enough to contain the products actually used. There is no demand that a finite set be closed under all iterated products. Polynomial equations are recorded as actual equalities of module maps $O_{Q}\to M$, not just as equalities at geometric points.

Every lattice is coherent: it is a finite sum of cyclic $F_{j}$-modules in the rational function sheaf. Its inclusion from $F_{j}$ is an isomorphism on the $J_{j}$-unit open. A finite power $I_{j}=J_{j}^{N}$ kills the cokernels of all these finitely many inclusions. Include the actual multiplication maps

    $\theta $: $I_{j}$ $\otimes_{F_{j}}$ M → $F_{j}$.

They exist because $I_{j}$ $M\subset F_{j}$ in the rational function sheaf. If $\iota :F_{j}\to M$ is the inclusion, the two compositions are multiplication by the same ideal element: $\iota (\theta (i,m))=i$ m and $\theta (i,\iota (f))=i$ f. Include those identities. They identify M with $F_{j}$ whenever $I_{j}$, equivalently $J_{j}$, generates the unit ideal. A localization can use finitely many generators of $I_{j}$ and their linear combination equal to 1; it does not require $I_{j}$ to be principal.

Regularity makes each of these coherent target modules perfect, locally with bounded connective finite locally free resolutions. The finite list has a common bound on a finite cover. No global resolution property for Q is asserted.

## 2. Actual overlap data and finite boundary witnesses

The space $R_{jk}=V_{j}\times _{Q}$ $V_{k}$ is an affine scheme: separatedness makes it a closed subscheme of the affine product over the fixed affine base. Use the supplied finite defining equations for this closed immersion. Include their finitely many monomial lattices as above.

For the comparison with the two finite closures set $G_{jk}=F_{j}$ $\otimes_{O_{Q}}$ $F_{k}$ and let $N_{jk}$ be its image in the product of generic function fields of $Z_{j}\times _{Q}$ $Z_{k}$. Its kernel is coherent and supported off the simultaneous $J_{j},J_{k}$-unit open; there $G_{jk}$ is an etale algebra over regular Q and is reduced. Include $G_{jk}\to N_{jk}$ and enough monomial lattices in the latter to express the chosen $R_{jk}$ equations. Ideals acting here mean the images of the two boundary ideals in $G_{jk}$; use their product. Powers kill the finitely many kernels and cokernels supported on this boundary. Include multiplication and inverse-up-to-boundary maps just as in §1. Equations for $R_{jk}$ vanish as actual rational-function maps because $R_{jk}$ is dense in each relevant component of its closure.

One must additionally control the DERIVED comparison

    $F_{j}$ $\otimes^{L}_{O_{Q}}$ $F_{k}$ → $G_{jk}$ → $N_{jk}$.

Its cone K is bounded coherent perfect and restricts to zero on the simultaneous unit open. Include it, its defining maps, and a fixed finite boundary tensor-power action null-homotopy. Here is why such a witness exists. Tensor products in this assertion are over regular $O_{Q}$, NOT over a possibly singular finite algebra $G_{jk}$. If I is a coherent boundary ideal with a central action and I kills every $H^{q}(K)$, its action on a single cohomology module M is zero in the derived category: I $\otimes^{L}$ M is connective, and maps from it to the discrete module M factor through $H^{0}$, where multiplication is zero. For a Postnikov extension of two objects, tensor-power exponents add. Indeed an action zero on the quotient factors through the subobject; applying an action zero on that subobject kills the composite. Induction over the finitely many nonzero cohomology groups proves that

    I $\otimes^{L}$ ... $\otimes^{L}$ I $\otimes^{L}$ K → K

with finitely many factors is zero. A power of the boundary ideal kills all the cohomology sheaves by noetherianity and quasi-compactness. This gives a finite exponent independent of every later test-base nilpotence order.

This is an equality in the derived category. On finite local perfect representatives it is an actual chain null-homotopy; include these finitely many homotopies and their compatibility data in the target diagram. On Q itself one can retain the derived equality and choose representatives on the finite chart cover. This does not posit a single global chain homotopy between globally chosen vector-bundle resolutions. Derived pullback preserves the equality and the supplied coherent witnesses. Once a boundary ideal becomes the unit ideal, its tensor-power action is the identity, so the cone becomes zero.

Thus all comparisons needed for overlaps become quasi-isomorphisms after the specified simultaneous localization. No unbounded family of annihilator exponents is selected after pulling back to a source.

## 3. What a model parameter must carry

Let C→S be a proper flat finitely presented source curve. A model parameter consists of connective perfect complexes $E_{D}$ for the finite target diagram, with the specified finite homotopy-coherent maps, central module actions, products, unit, and recorded polynomial and boundary-witness identities. Require in particular an associativity homotopy AND a commutator homotopy for multiplication. On $H^{0}$ this produces actual finite commutative $O_{C}$-algebras $A_{j}=H^{0}(E_{Fj})$, their actual modules and maps, and all the stated identities. An A-infinity associative algebra without commutator data would not suffice.

For each j form $Spec_{C}$ $A_{j}$. Inside it take the $J_{j}$-unit open and the actual etale locus of the classical morphism $Spec_{C}$ $A_{j}\to C$; denote their intersection by $W_{j}$. Here the J-unit condition uses the image of the model boundary module in $A_{j}$. Restrict to model parameters for which the $W_{j}$ jointly cover C. This is an open condition: etale morphisms are open, so the complement of their images is closed in C, and properness of C→S makes its image closed in S. All constructions use finite presentation. They are classical constructions over S with its nilpotents intact.

$H^{0}$ of a connective complex is the cokernel of its last differential and commutes with arbitrary classical base change when the complex is derived-pulled back. This observation permits base change of the displayed algebras; it is NOT a claim that their $H^{0}$ modules are flat. The actual etale locus in the definition of $W_{j}$ supplies the flatness required for descent.

## 4. Extraction on arbitrary test schemes

On $W_{j}$ the ideal-unit identities in §1 invert iota. Consequently the distinguished coordinate sections give actual elements of $O_{Wj}$. The recorded module polynomial identities give all the defining equations of $V_{j}$. There is therefore an actual morphism $u_{j}:W_{j}\to V_{j}$, with no choice of a power-series expansion or reduced-base passage.

On $W_{j}\times _{C}$ $W_{k}$ the two boundary ideals generate the unit ideal. The cone witnesses in §2 make the derived tensor comparison an isomorphism there. In particular $H^{0}$ identifies the corresponding overlap algebra and lattices with the actual tensor product of the localized $A_{j}$ and $A_{k}$. The recorded $R_{jk}$ equations now imply that $(u_{j},u_{k})$ factors through the CLOSED relation $R_{jk}\subset V_{j}\times V_{k}$. Thus the two maps to Q agree as morphisms on the entire overlap scheme, including nilpotents. A test on geometric points would not suffice for this step.

The $W_{j}$ are an etale jointly surjective cover of C. Since Q is an algebraic space, its etale sheaf property glues these maps to a unique actual map f:C→Q. Triple compatibility needs no extra relation choice: $R_{jk}$ is the actual fibre-product relation, and equality of the maps to Q is transitive; equivalently the relation map is a monomorphism into the product. This proves extraction without assuming representability of a Q-map stack. It is compatible with arbitrary change of S because every displayed algebra, identity and resulting map is.

## 5. Canonical coverage: the derived selected-factor argument

Given an actual map f:C→Q, use the canonical diagram $Lf^*D$. Fix a geometric point c of C. Choose a point q in some $V_{j}$ above f(c). In the derived fibre of $Lf^*F_{j}$ at c, localizing at the selected etale factor q gives a finite separable field factor in degree 0 and no negative cohomology: the closure is actually etale near q. Other factors of that same derived fibre may have negative Tor and are not discarded by an unjustified flatness assertion.

Etale-locally on C an idempotent separating this fibre factor lifts in the finite classical algebra $A_{j}=H^{0}(Lf^*F_{j})$. One can see this over the henselization, where finite-algebra idempotents lift uniquely, and descend the finitely many equations $e^{2}=e$ and their solution to an etale neighborhood. Multiplication by the idempotent splits the perfect derived algebra as an object of D(C); perfect complexes are idempotent complete. The selected summand has derived fibre in degree 0 only. Local cancellation of invertible differential entries in a bounded finite free representative then shows it is a vector bundle in degree 0 near c. Hence its $H^{0}$ algebra is flat and finitely presented there. Its selected geometric fibre is etale; the vanishing of the module of differentials near that point, together with flatness, gives actual etaleness near q. The boundary ideal is a unit there because q belongs to $V_{j}$.

It follows that the canonical diagram satisfies the $W_{j}$ coverage condition. The same argument applies to a deformation of connective perfect model data whenever its selected derived fibre has this property. It does not replace the hypothesis by mere fibre-etaleness of an arbitrary $H^{0}$ algebra. This selected-summand argument is exactly what prevents a nonflat-fibre shortcut.

## 6. Noncircular canonical rigidification and limits

The target diagram, lattices and witness exponents are fixed BEFORE any unknown source map is used. A finite coefficient presentation of model parameters, if supplied, first gives an actual universal map by §4. Only after that extraction may one form its canonical diagram $Lf^*D$ and impose positive-resolution roofs $E_{D}\simeq Lf^*D$ on the WHOLE proper source, with the finite diagram compatibilities. Restricting those roofs merely to the etale opens is inadequate: it leaves the polar-boundary deformations responsible for the free-monic counterexample.

Sections §§4–5 prove actual extraction and canonical coverage. They do not prove that arbitrary strict complex models have smooth choices, that roofs are represented by a finite equation scheme, or that a model atlas has a perfect obstruction theory. Those are the positive-resolution/roof and source-complex inputs owned by the adapted-atlas construction. No new publication, native registration, accepted supplier ID or gate result is asserted here.
