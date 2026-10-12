# Draft local proof: finite charged-abacus content connectivity

This is construction evidence for the same NEW native24 first repair. It supplies the formerly open F combinatorial input, with an explicit proof of the Fayers tight-multiset lemma and a shorter energy argument in place of the remaining Fayers weight theory. The final Jantzen-connectivity assertion still requires the explicitly separate Q/J and actual level-one block supplier contracts. Nothing here certifies a native item or consumer.

## 1. Charged abacuses, hubs and normalized core matrices

Fix e≥2, ℓ≥1 and integer charges c₁,…,cℓ. A component λ^(a) has beta set Bₐ={λ_i^(a)+cₐ−i:i≥1}. It contains all sufficiently negative integers and no sufficiently positive integers, and for large N it has N+cₐ elements ≥−N. Conversely every such set gives a partition: order its elements β₁>β₂>⋯ and put λ_i=β_i−cₐ+i. These integers are decreasing, eventually zero, and therefore nonnegative.

A bead move u→u−h, where u∈B and u−h∉B, unwraps a rim hook of length h with foot residue u−h+1 modulo e. This can be checked directly: if β_i=u and β_j<u−h<β_(j−1), the rows i through j−1 change by the shifted boundary between those two beta positions; the lost border strip has h boxes. Its lowest row is j−1 and its leftmost lost column there is (u−h)−cₐ+j, so its foot content is u−h+1. Reversing the move wraps the hook with foot residue its starting beta position plus one. In particular moving a bead upward one position on its runner removes an e-hook. Repeating packs every runner upwards. The result is independent of removal order because the number of beads relative to the negative reference tail on each runner is preserved. The packed component is its e-core. Every e-hook contains one node of each residue, so hook removal leaves the hub invariant and subtracts the all-one vector from the residue counts.

Let Cᵢ(λ) be node residue counts and mᵢ=#{a:cₐ≡i mod e}. Set δᵢ=number of removable i-nodes minus number of addable i-nodes. We have

δᵢ=2Cᵢ−Cᵢ₋₁−Cᵢ₊₁−mᵢ, with cyclic indices (the two neighboring terms coincide and occur twice if e=2).

One direct proof is induction while adjoining nodes: the empty multipartition has δᵢ=−mᵢ; adjoining a node of residue j changes the boundary count by +2 at j and −1 at each of j−1,j+1, counted twice when e=2. These changes follow by recording the occupied/vacant beta positions before and after the one-position bead move; all other adjacent occupancies cancel. The residue-count expression changes in exactly the same way. This also derives Fayers weight-paper Lemmas 2.3 and 3.1 without a Lie-theoretic assumption.

If two multipartitions have equal hubs, their residue-count difference d satisfies 2dᵢ−dᵢ₋₁−dᵢ₊₁=0. Thus the first differences dᵢ−dᵢ₋₁ are all equal; summing them around the cycle makes this common difference zero. Therefore d is constant. Consequently equal hub and equal size imply equal content; equal hubs imply sizes congruent modulo e.

For a component core let bᵢₐ be the largest bead on runner i, 0≤i<e, and define the integer

tᵢₐ=(bᵢₐ−i)/e.

The packed beta set on runner i is {i+ek:k≤tᵢₐ}. The column sums satisfy Σᵢtᵢₐ=cₐ−e, by counting beads ≥−eL for large L. Writing Rᵢ=Σₐtᵢₐ, the hub satisfies δᵢ=Rᵢ−Rᵢ₋₁ for 1≤i<e and δ₀=R₀−R_(e−1)−ℓ. Since ΣᵢRᵢ=Σₐcₐ−eℓ is fixed, equal hub is equivalent to equal row sums. Thus cores of a fixed hub and charges are exactly integer e×ℓ matrices with fixed row and column sums.

If κ,η are such cores, then

|η|−|κ|=(e/2)(Σᵢₐtᵢₐ(η)²−Σᵢₐtᵢₐ(κ)²).

To prove it, count beta numbers ≥−eL in each component. Their number is eL+cₐ, the same for both cores. Their sum changes by Σᵢ i Δtᵢₐ+(e/2)ΣᵢΔ(tᵢₐ²+tᵢₐ). From β_j=λ_j+cₐ−j, the change in this sum equals the change in partition size. Sum over a: equal row sums kill Σᵢ iΣₐΔtᵢₐ, and equal margins kill the linear ΣΔt term. This proves the formula. In particular the squared-norm difference is even, so the displayed expression is an integer multiple of e.

## 2. Full tight-multiset lemma

Work in L_r=Z^r/Z(1,…,1). A finite multiset X is tight if

(x_k−x_l)−(y_k−y_l)≤2 for every x,y∈X and every k,l.

A zero exchange replaces x,y by x−e_k+e_l and y+e_k−e_l when the displayed difference equals 2. This relation is symmetric; call X ultra-tight if every multiset obtainable by finitely many zero exchanges is tight. These notions do not depend on representatives in Z^r.

**Lemma.** X is ultra-tight iff there are integers s₁,…,s_r such that x_k−x_l≤s_k−s_l+1 for every x∈X and every k,l.

The reverse implication has a short direct proof. After replacing x by x−s, every row has maximum minus minimum at most one. A zero exchange must have x_k−x_l=1 and y_k−y_l=−1, so it merely swaps the high and low values in these two coordinates of each row. The row spread remains at most one. The property is preserved by every zero exchange and implies tightness.

Here is a full proof of the forward implication, adapted from the actual proof of Fayers Proposition 2.2 and its induction step Proposition 2.3 (author PDF pp.11–15). We induct on r. The r=1 case is trivial. Projection forgetting the last coordinate takes an ultra-tight multiset to one in L_(r−1): every zero exchange in the projection lifts using the same pair of coordinate indices and the same labeled multiset occurrences. Hence the induction hypothesis supplies potentials for the first r−1 coordinates. It remains to extend them to coordinate r, preserving all previous bounds.

Write a_kl=s_k−s_l. Suppose bounds |(x_k−x_l)−a_kl|≤1 are known whenever k,l≤r−1 or k,l≥t+1, with 1≤t≤r−1. We show how to obtain such bounds also for k,l≥t. For t=r−1, tightness says the integer differences x_(r−1)−x_r have range at most two, so choose their integer midpoint for s_(r−1)−s_r; the potentials on the first r−1 coordinates stay fixed.

For t<r−1, if the current potentials already bound x_t−x_r, nothing is needed. Otherwise, after replacing every row x and every potential s by its negative if necessary, choose x∈X with x_t−x_r≥a_tr+2. For t<u<r, the old bounds imply x_t−x_u≤a_tu+1 and x_u−x_r≤a_ur+1. Thus x_t−x_r=a_tr+2, and both inequalities are equalities for every u. Tightness implies, for every y∈X,

a_tr≤y_t−y_r≤a_tr+2.

Form a directed graph on {1,…,r}, with an edge k→l when some y∈X has y_k−y_l=a_kl−1.

If no path leads from t to r, let T be the vertices reachable from t and let R be the complement. Change potentials to s'_k=s_k+1 for k∈T and s'_k=s_k for k∈R. Then a'_tr=a_tr+1, giving the new (t,r) bound. Any other previously controlled difference with a'_kl≥a_kl retains its upper bound. If a'_kl=a_kl−1, then k∈R,l∈T. The reverse pair has no edge T→R, so its old lower bound y_l−y_k≥a_lk−1 improves to ≥a_lk; hence y_k−y_l≤a_kl=a'_kl+1. Apply this to ordered pairs and their reverses. All required bounds hold.

If a path does lead from t to r, choose a shortest path t=k₁→k₂→⋯→k_s=r and labeled occurrences y₁,…,y_(s−1) witnessing its edges. Its vertices are distinct. Write z=y−s for each witness. On the first r−1 coordinates every such z has spread at most one, by the old bounds. Therefore one occurrence cannot witness two edges both ending before r: their low-to-high values would give the shortcut k_m→k_(n+1) for m<n. Nor can it witness an earlier edge and the last edge: a last-edge witness has z_(k_(s−1))=z_r−1; tightness against the chosen x gives z_k−z_r≥−1 for every k<r, while spread at most one on the first r−1 coordinates gives z_k−z_r≤0. An earlier edge witnessed by the same row would thus start at z_r−1, giving a shortcut from its starting vertex directly to r. Hence all edge witnesses are distinct occurrences.

For each k<r, x_k−x_r≥a_kr+1: for k≥t this was proved above, and for k<t use x_k−x_t≥a_kt−1 and x_t−x_r=a_tr+2. Put x^(m)=x−e_(k_(m+1))+e_r for 1≤m<s. At m=s−1 this is x itself. We first note why none of the edge witnesses can be the chosen occurrence x. If y_p=x, choose such a p (at most one, since edge witnesses are distinct). It cannot be the last witness, since its edge to r would have x_(k_(s−1))−x_r=a_(k_(s−1),r)−1, contradicting the preceding lower bound. Run the following downward exchange induction using only witnesses with index >p, all distinct from x and from each other. It yields x_(k_(p+1))−x_r=a_(k_(p+1),r)+1. Combining this with x_(k_p)−x_r≥a_(k_p,r)+1 gives x_(k_p)−x_(k_(p+1))≥a_(k_p,k_(p+1)), incompatible with y_p=x witnessing the value a_(k_p,k_(p+1))−1. Thus no witness equals x. This use of the induction is valid on the shorter tail because it needs only its current distinguished row and the tail witnesses, whose occurrences survive all earlier tail exchanges.

Here is that downward induction in full. We prove that some multiset equivalent to X contains x^(m) and the unchanged witnesses y₁,…,y_m, and that x_(k_m)−x_r=a_(k_m,r)+1. The base uses the original X: tightness between x and y_(s−1) says their (k_(s−1),r) differences, which differ by at least two, differ by exactly two, forcing the claimed equality and giving a permitted zero exchange for the next stage. For the induction step, perform the zero exchange between x^(m+1) and y_(m+1) in coordinates k_(m+1),k_(m+2). It creates x^(m) and leaves all earlier witnesses unchanged because their occurrences are distinct. For m≤s−2 neither k_m nor k_(m+1) is r. The already proved equality at k_(m+1), and the lower bound at k_m, give

x^(m)_(k_m)−x^(m)_(k_(m+1)) ≥ a_(k_m,k_(m+1))+1 = (y_m,_(k_m)−y_m,_(k_(m+1)))+2.

The resulting multiset is tight by ultra-tightness. Therefore equality holds, supplying the next zero exchange and forcing x_(k_m)−x_r=a_(k_m,r)+1. This completes the induction.
At m=1 the conclusion is x_t−x_r=a_tr+1, contradicting x_t−x_r=a_tr+2. Therefore an ultra-tight multiset cannot fall in this second case.

This extends the bounds at each t=r−1,r−2,…,1. The r induction proves the lemma. The proof uses only finite multisets and integer arithmetic.

## 3. Matrix energy descent and minimum connectivity

Let T=(tᵢₐ) be an integer e×ℓ matrix with fixed margins. A switch in distinct rows i,j and distinct columns a,b replaces

(tᵢₐ,tᵢ_b,tⱼₐ,tⱼ_b) by (tᵢₐ−1,tᵢ_b+1,tⱼₐ+1,tⱼ_b−1).

Put γ=tᵢₐ−tᵢ_b−tⱼₐ+tⱼ_b. Its squared-norm change is 4−2γ. Hence γ=2 is a zero-energy switch and γ≥3 strictly decreases energy. Regard the e labeled rows of T as a multiset in L_ℓ. They are tight exactly when every γ≤2; switches with γ=2 are exactly zero exchanges.

If the row multiset is not ultra-tight, a finite sequence of zero switches leads to a non-tight matrix. There γ≥3 for some rows and columns, giving a strict descent. Every intermediate matrix has the same margins, and the descent lowers core size by e(γ−2), while zero switches preserve it.

If it is ultra-tight, the lemma provides a column potential sₐ such that each row of U=(tᵢₐ−sₐ) has maximum minus minimum at most one. For a fixed integer row sum, such a row minimizes the sum of squares over all integer rows: if entries differ by ≥2, transferring one from the larger to the smaller lowers the square sum by at least two; repeated transfers terminate. Its minimum is achieved exactly by rows whose entries differ by at most one. Column potentials do not affect comparisons of total squared norm between matrices with the same column sums, since

Σ(tᵢₐ−sₐ)²=Σtᵢₐ²−2ΣₐsₐΣᵢtᵢₐ+eΣₐsₐ².

Thus T is a global minimum among matrices of its margins. Conversely a global minimum cannot admit a strict descent after zero switches, so its row multiset is ultra-tight. Starting from any T, repeated zero-path/strict-descent steps reach a global minimum: all matrices represent genuine cores of nonnegative integer size, and strict descent lowers that size by at least e.

Now let T,V be two global minima of the same margins. Use the column potential s of T. Every row of U=T−s is balanced, say its entries are uᵢ or uᵢ+1. Since V−s has the same row sums and the same total energy, each of its rows also attains the row minimum and therefore has entries uᵢ or uᵢ+1. Subtract uᵢ from row i. We obtain two binary e×ℓ matrices A,B with identical row and column sums.

Here is a complete binary-switch connectivity proof (Fayers Proposition 2.4, author PDF pp.15–16). If A≠B, write D=A−B. Its nonzero entries are ±1, with all row and column sums zero. Starting at a +1, alternate a −1 in its row and a +1 in that column. A repeated location gives an alternating cycle. Choose a shortest such cycle, with distinct rows i₀,…,i_(t−1) and columns j₀,…,j_(t−1), where D_(i_k,j_k)=+1 and D_(i_k,j_(k+1))=−1, cyclically. If t=2, switch its rectangle in A to agree with B there. If t>2 inspect A_(i₀,j_(t−1)) and B_(i₀,j_(t−1)). If A there is 0, switching the rectangle with rows i₀,i_(t−1) and columns j₀,j_(t−1) gives a binary A' and strictly fewer discrepancies with B. If B there is 1, the reverse switch on B gives a binary B' with strictly fewer discrepancies with A. If neither condition holds, D there is +1 and a shorter alternating cycle exists, contradicting minimality. Induct on the discrepancy count; every binary switch preserves margins. Hence A and B are connected by binary switches.

Lifting these binary switches to T gives switches with γ=2 and thus preserves core size and hub. Therefore any two minimum-size cores of a given hub and fixed charges are connected by equal-size elementary core switches. Any nonminimum core admits a core-switch path that preserves hub, never increases size, and ends at strictly smaller size. These are exactly the finite-e descent and reduced-core connectivity facts consumed by the Lyle–Mathas max-weight argument. This proves F locally without Fayers' weight nonnegativity, pairwise-weight formula, or matrix-alignment Proposition 2.5 as additional inputs.

## 4. The exact one-hook lift of a core switch

This section is a local combinatorial proof; only its interpretation as a Jantzen edge needs J's coefficient formula.

Let κ' be obtained from κ by the oriented switch in rows i,j and components a,b above, with γ≥2. Then |κ'|=|κ|−eD, D=γ−2≥0. Write

u=i+etᵢₐ, v=j+e(tⱼₐ+1), v'=j+etⱼ_b, u'=i+e(tᵢ_b+1).

In component a, the core switch removes bead u and inserts v. In component b it removes bead v' and inserts u'. Let w=(n−|κ|)/e≥0. Form λ by moving the lowest bead u of κ's i-runner in component a to u+ew (adding w e-hooks on this runner). Form μ from κ' by moving its lowest bead v on the j-runner in component a to v+e(w+D). Both have size n, the same hub, and hence equal content.

Their beta sets in component a differ only by replacing u+ew with v+e(w+D); those in component b differ only by replacing v' with u'. Since

(v−u)+(u'−v')=−eD,

we have v+e(w+D)−(u+ew)=v'−u'. Thus the two components exchange a single rim hook of length |v'−u'|. This length is nonzero because i≠j modulo e. If v'−u'>0, component b unwraps and a wraps a hook with foot residue i+1 modulo e; if it is negative, a unwraps and b wraps a hook with foot residue j+1 modulo e. In both cases the hook feet have equal residues. The hook pair is uniquely determined because distinct components change, so J's signed valuation is a nonzero integer; there is no cancellation. Hence λ and μ are Jantzen-connected by one edge. This supplies the detail abbreviated in Lyle–Mathas Lemma 3.11.

## 5. K from the actual level-one clause, and full fixed-content connectivity

Let H₁(m,q) be the level-one Hecke algebra. The exact existing native21 clause

`cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core`

states same-block iff same-e-core over any F with invertible q and quantum characteristic e, at every rank m. Its Dipper–James/Murphy convention change by conjugate-dual preserves equality of e-cores. Parent inspected and confirmed this field/rank/convention applicability on current physical scaffold; that confirmation does not assert its future authored proof/audit is complete.

Once that existing clause is actually proved, Q's level-one Schur block bridge and J's generic Jantzen↔standard-block lemma imply that partitions of fixed rank m with equal e-core are connected by level-one Jantzen coefficients. For two ℓ-multipartitions that differ only in component a, the full-level coefficient equals the corresponding level-one coefficient: every contributing hook pair lies in a; in the deformed residues their common factor Qₐt^(na) is a valuation unit; the remaining residue difference is (qt)^p−(qt)^q exactly as at level one. Therefore level-one Jantzen paths insert into component a unchanged. Changing one component at a time proves K at fixed component sizes and component cores. No Carter-partition classification is required.

If two multipartitions have the same component cores but different distributions of total e-hook weight, use K within a component and move one e-hook from a component with excess weight to a deficient component, matching the foot residue by moving a lowest bead down the desired runner. A distinct-component hook transfer has a unique signed nonzero Jantzen contribution. The sum of squares of component-weight discrepancies strictly decreases, so the procedure terminates; then K connects the fixed-size components. Thus all size-n lifts of a fixed multicore are Jantzen-connected.

Fix now a content class α of size n. Its component cores share a hub. Among all core matrices with that hub and charges, a minimum-size core exists, and its size is at most n because the class has at least one member. The matrix descent starts from any such core and passes only through sizes ≤n and congruent to n mod e. Each intermediate core can be lifted to size n by adding e-hooks, and equal hub/equal size imply the lifted content is α. Section 4 connects chosen lifts across every core switch; the preceding paragraph permits arbitrary redistribution of hook weight before/after each switch. Thus any member of α is connected to a lift of a minimum core. Section 3 connects the minimum cores by zero switches, and their lifts are connected by Section 4. Hence every pair of multipartitions of content α is Jantzen-connected.

This is the required finite-e content-connectivity supplier. Only Q, J, and the actually proved existing native21 level-one clause remain upstream for its Jantzen conclusion. The charged-abacus, tight-multiset, energy and switch proofs themselves are fully local above.

## Source, scope and checking caveat

Authoritative full source read: Fayers, Core blocks of Ariki–Koike algebras, author PDF pp.2–24, particularly Proposition 2.2/2.3 (pp.12–15 including the graph induction), Proposition 2.4 (pp.15–16), Theorem 3.1 (pp.19–22) and Proposition 3.7 (p.24). Fayers weight-paper Lemma 2.3 and Lemma 3.1/Proposition 3.2/Lemma 3.3 were additionally read on PDF pp.9,11–13. Unrelated remainder pages are not claimed read. Exact hashes are recorded separately. Normalize row vectors by (bᵢₐ−i)/e; this makes γ=2 correspond to the unit-coordinate zero exchange. An unnormalized beta-height vector must not be substituted into the tight lemma's unit-coordinate moves.

This is a proof draft and local construction self-check only. Its tight-lemma graph induction and binary switches should be checked as mathematics during the ordinary owning supplier review. Q/J are not established by these combinatorial proofs or by the supplied citations.
