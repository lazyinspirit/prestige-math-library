# Two-collar stretching with Countable Choice

This is the global assembly operation after the new finite two-collar coverage lemma. It proves no finite engulfing theorem. Its finite input is stated explicitly so the dimension range remains exactly that of the adopted finite lemma.

Let M be a second-countable metrizable manifold with boundary B. Suppose U₁,U₂ are parametrized open collars of B, each written B×[0,∞). Assume the following finite operation for every pair of ambient images of partial collars: given open collars Vᵢ of B and standard closed subcollars Dᵢ⊂Vᵢ, and compact K⊂M, there are compactly supported ambient homeomorphisms lᵢ, isotopic to the identity, fixing Dᵢ pointwise, with K⊂l₁(V₁)∪l₂(V₂). The finite operation may fix a neighborhood of Dᵢ; only pointwise fixing is needed below.

Then there are open embeddings eᵢ:Uᵢ→M fixing B with

    M=e₁(U₁)∪e₂(U₂).

Both images remain open collars; any PL structure on U₂ is transported by e₂. This conclusion needs Countable Choice, not Dependent Choice.

## Ambient-closed source collars, chosen once

Constant levels of an arbitrary nonproper collar need not be closed in M. First make the following deterministic ray reparametrization. A proper compatible metric exists here under Countable Choice. Indeed take a bounded compatible metric d₀ and a compact exhaustion Kⱼ⊂int Kⱼ₊₁ from a countable relatively compact coordinate cover. Define continuous cutoffs

    χⱼ(x)=dist(x,M\int Kⱼ₊₁)/(dist(x,Kⱼ)+dist(x,M\int Kⱼ₊₁)).

They equal 1 on Kⱼ and 0 outside int Kⱼ₊₁. The sum ρ(x)=Σⱼ(1−χⱼ(x)) is locally a finite sum and is proper: outside K_N₊₁ it is at least N. Thus d(x,y)=d₀(x,y)+|ρ(x)−ρ(y)| is compatible and proper, since a closed d-ball is a closed subset of a compact sublevel set of ρ. The compact exhaustion needs at most a countable atlas/finite-cover table under Countable Choice; the subsequent formulas make no choices.

For each original collar cᵢ(b,t) put

    Rᵢ(b,t)=t+max_{0≤s≤t}d(cᵢ(b,s),b).

This is continuous: write s=ut with u∈[0,1] and take the maximum of a jointly continuous function over that fixed compact interval. On each ray it is strictly increasing, starts at zero, and tends to infinity, since Rᵢ≥t. Its fiberwise inverse is jointly continuous: at any fixed (b,t), the strict inequalities at t−ε and t+ε persist for nearby b, bracketing the inverse; at t=0 use the one-sided bracket. Thus Rᵢ gives a new continuous collar coordinate r∈[0,∞).

Let Aᵢʲ be its r≤j region. This is CLOSED IN M. If xₙ=cᵢ(bₙ,tₙ)∈Aᵢʲ converges in M, then tₙ≤j and d(xₙ,bₙ)≤j. Properness of d confines the bases bₙ to a compact subset; B is closed in M. A subsequence of (bₙ,tₙ) converges to (b,t), and continuity gives x=cᵢ(b,t) with Rᵢ(b,t)≤j. Metric closedness follows. These collars are strictly nested, Aᵢʲ⊂int_M Aᵢ^{j+1}, and their source interiors exhaust Uᵢ. All are standard parallel collars in the single new parametrization. No recursive choice of a new shield is needed.

## Predetermined countable tables

Use Aᵢʲ=B×[0,j], j≥1, in these new fixed source parametrizations, and Aᵢ⁰=B×{0}. Let Gᵢʲ be the subgroup of compactly supported ambient homeomorphisms of M which are isotopic to the identity and fix Aᵢʲ pointwise. Give it the topology induced by the compact-open topology on maps and inverse maps. This is a second-countable subspace: for locally compact second-countable metrizable M the compact-open map space C(M,M) is second countable, by compact coordinate exhaustions and a countable target basis. The same holds for the product of map and inverse-map spaces and its homeomorphism subspace. No separability of a space of arbitrary germs is asserted.

For each i,j choose a point in every nonempty member of a fixed countable basis of Gᵢʲ. Countable Choice, applied once to the countable family indexed by i,j and basis index, gives countable dense sets Dᵢʲ⊂Gᵢʲ. Include identity. These are actual homeomorphisms, rather than rational encodings of arbitrary homeomorphisms. All subsequent choices will be least indices in these fixed tables.

## Finite stages and protected ledgers

Fix a compact exhaustion Kⱼ of M. Start with Fᵢ⁰=idM. At stage j≥1 put Fᵢ,old=Fᵢ^{j−1} and let

    Vᵢ=Fᵢ,old(int Aᵢ^{j+1}),    Dᵢ=Fᵢ,old(Aᵢʲ).

These are actual ambient images of the predetermined partial collars. Apply the finite operation to Vᵢ,Dᵢ,Kⱼ. Conjugating its outputs by Fᵢ,old gives right increments rᵢ=Fᵢ,old⁻¹ lᵢ Fᵢ,old fixing Aᵢʲ, such that

    Kⱼ⊂F₁,old r₁(int A₁^{j+1}) ∪ F₂,old r₂(int A₂^{j+1}).

This coverage condition is open in the pair of homeomorphisms with the map-and-inverse topology. Indeed the inverse images of the compact Kⱼ are covered by the two open sets; a finite compact shrinking of that cover gives finitely many compact containment tests on inverse maps. Therefore a pair from the dense tables D₁ʲ,D₂ʲ satisfies it. Choose its least pair of indices and set Fᵢʲ=Fᵢ,old rᵢ. This is deterministic recursion on fixed countable tables.

Every later right increment fixes Aᵢ^{j+1}. Thus the coverage of Kⱼ is preserved at all later stages: its two covering pieces already lie in the images of int Aᵢ^{j+1}. This is the protected compact ledger; coverage by the whole Uᵢ alone would not suffice.

## Actual limit embeddings and surjectivity of the union

For x∈Uᵢ choose j with x∈int Aᵢʲ. The values Fᵢʳ(x) are identical for all r≥j, since every later right increment fixes Aᵢʲ. Define eᵢ(x) to be this eventual value. On the entire open set int Aᵢʲ, eᵢ equals the restriction of the actual ambient homeomorphism Fᵢʲ. These sets exhaust Uᵢ. Hence eᵢ is continuous, locally an open embedding, and globally injective: any two source points lie in one such set and are separated by Fᵢʲ. It is therefore an open embedding. It fixes B.

The protected coverage of every Kⱼ passes unchanged to e₁(U₁)∪e₂(U₂), so that union is M. There is no convergence assertion about arbitrary ambient homeomorphisms on all of M and no unsupported limit of time slices. Only exact stabilization on predetermined source-open sets is used.

