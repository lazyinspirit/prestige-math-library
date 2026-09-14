# Step 3b checkpoint — minimal walks, oscillation, and L- and S-spaces

- Run: `phase-2-next-18`
- Role: `alpha-high`
- Pair: `minimal-walks-oscillation-and-l-and-s-spaces` / `minimal-walks-oscillation-and-l-and-s-spaces-examples`
- Shared batch: 9; the Prikry/Gitik pair is outside this dispatch and is preserved.
- State: scaffold and source audit complete; authoring in prerequisite order.

## Evidence read

- Repository instructions: `CLAUDE.md`, `README.md`, `SCHEMA.md`, and `WORKFLOW.md`.
- Assigned design and run records: SET-29 in `research/plan-set-theory-completion-track.md`; the current manifest, coverage, proof contracts, batch notes, dependency ledger/input, plan spec, Step 3a review, and owner `proceed` receipt.  No `research/phase-2-next-18-owner-authoring-direction.md` exists.
- Moore, *A solution to the L space problem*: complete 27-page paper, with the full arguments in Sections 2, 4, 5, and 7 checked from `/tmp/moore-l-space.txt`.
- Hart--Kunen, *Ultra Strong S-Spaces*: Sections 1--4 through Corollary 4.18, including the recursive refinement and closure-transfer arguments, checked from `/tmp/hart-kunen-ultra.txt`.
- Abraham, *Lecture notes on the P-ideal dichotomy*: web-rendered complete notes, lines 15--225 for the two forcing forms and no-S-space application; and *Three applications of ideal dichotomy*, all slides, checked from `/tmp/abraham-pid-iii.txt`.
- Every currently available published prerequisite statement used below.  The four same-run proper-forcing suppliers are provisional until their owning pair has files and a completed claim.

## Scaffold audit retained in the workload

1. `lem-minimal-walk-trace-concatenation-and-limit-control` has a false second scaffold sentence.  Moore's Fact 2 is $\min L(\xi,\delta)\to\delta$ for a limit target $\delta$; it is not the asserted fixed-upper-endpoint statement $\min L(\xi,\beta)\to\alpha$ for $\alpha<\beta$.  The authored item will state and prove the exact Fact 1/Fact 2 interface.  The owner-hashed manifest statement is retained for now and this is a pre-splice owner/Step 4 mismatch, not an invented owner ruling.
2. `lem-moore-club-extension-for-minimal-walks` and `thm-moore-oscillation-block-lemma` must replace their informal “prescribed relation” descriptions by the exact coordinatewise Lemma 4.2 and Lemma 4.1 quantifiers before use.
3. `thm-moore-oscillation-colouring-pattern` is read as Moore's exact Theorem 5.3: a map $\pi:k\to l$ and a bit function $\chi:k\to2$ are realized at the pairs $(a(i),b(\pi(i)))$.  No arbitrary $k\times l$ binary matrix is promised.
4. `def-ordered-fundamental-space-and-nice-refinement` must distinguish the original clopen bases $W_n^\alpha$ from the refined compact tails $V_n^\alpha$; the former are not “below $\alpha$.”  The model-guided approximation condition belongs to the selected nice refinement, not to the raw definition of a fundamental space.
5. The hereditary-Lindelöf proof will be given directly from a right-separated sequence, Delta-system thinning, and the exact colouring theorem.  This closes the argument rather than treating Moore's one-line Corollary 7.8 reduction as proof text.
6. AC is removed from raw definitions that make no selections.  It is stated at the model, thinning, recursive-choice, PFA, and consistency uses and propagated through their consumers.

The immutable pre-author baseline lists all 27 owned IDs but records that none
of their item files existed.  Consequently these are auditor-authored items:
they receive the engine's post-dispatch certification and are not sent through
a Step 3 self-review or an author-created `record-item` loop.

## Item checkpoints

### `def-set-theoretic-l-and-s-spaces`

- Claim/conventions: exact hereditary quantifiers; regular and Hausdorff are separate under the library convention; an S-space is itself non-Lindelöf; a strong S-space has every nonempty finite power an S-space.  The alternate “not hereditarily Lindelöf” wording has the same existence content but is not made the definition.
- Sources: Moore Section 7, printed p. 21; Hart--Kunen Section 1, printed p. 1.
- Dependencies examined: `def-regular-and-t3-spaces`, `def-hausdorff-space`, `def-separable-space`, `def-compactness-variants`, and `def-hereditary-property`.
- Choice/boundaries: the definition is choice-free; empty spaces and empty subspaces are covered by the universal hereditary clauses; the first power gives the strong-to-ordinary implication; the zeroth power is explicitly excluded.
- Checks: explicit-path definition precheck clean (zero proof bodies), rendercheck pass, and selected strict proof-contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: define the fixed $C$-sequence and prove walk termination.

### `def-c-sequences-and-minimal-walk-traces-on-omega-one`

- Claim/conventions: a locally finite cofinal $C$-sequence containing 0; successor sets $\{0,\eta\}$; finite minimal walks; upper traces excluding the terminal target; and lower traces formed from running maxima.  The $\alpha=0$ lower trace is defined directly, so $\max\varnothing$ is never written.
- Source: Moore Section 2, printed pp. 6--8.
- Dependencies examined: `def-cofinality`, `def-ordinal`, and `def-axiom-of-choice`.
- AC/boundaries: AC selects one ladder simultaneously at every countable limit; after the sequence is fixed, walk and trace formation are choice-free.  Diagonal, zero-target, one-step, successor, limit, and repeated-maximum cases are explicit.
- Scaffold/pre-splice mismatch: the scoped successor clause $C_{\eta+1}=\{\eta\}$ is incompatible with the same scaffold's required $0\in C_\gamma$ convention and leaves some raw maxima empty.  The authored item uses Moore's harmless $0$-adjoined normalization.  The owner-hashed statement remains unchanged for Step 4/owner reconciliation.
- Checks: explicit-path definition precheck clean, rendercheck pass after reflowing four display formulas to renderer-safe single lines, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: prove exact trace concatenation and Moore's limit-target Fact 2.

### lem-minimal-walk-trace-concatenation-and-limit-control

- Claim: under $L(\beta,\gamma)<L(\alpha,\beta)$, both walks and running-max lower traces concatenate through $\beta$; for a nonzero limit target $\delta$, $\min L(\xi,\delta)=\max(C_\delta\cap\xi)\to\delta$.
- Actual proof: the separation inequality rules out every $C_\zeta$ point in $[\alpha,\beta)$ on the first segment, forcing identical walk choices; its running maxima remain below the second segment.  Cofinality of $C_\delta$ gives the exact eventual-tail inequality for every $\eta<\delta$.
- Source: Moore Section 2, Facts 1--2, printed pp. 7--8.
- Dependency examined: the immediately preceding normalized C-sequence/trace definition.
- Choice/boundaries: choice-free after the fixed C-sequence; both empty splice endpoints, one-step walks, target zero, repeated maxima, and the strict limit endpoint are explicit.
- Scaffold repair: the false fixed-$\beta$ limit was not proved or hidden; the authored statement explicitly rejects it and proves Moore's exact limit-target fact.  This is the first pre-splice statement mismatch identified above.
- Checks: explicit-path precheck pass after canonical stratification of the independent concatenation and limit branches; rendercheck pass; regenerated exact citation/derivation rows; selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: define Moore's weights, labelled trace, and stationary bookkeeping.

### def-minimal-walk-weights-and-coherent-functions

- Claim/conventions: stationary repetition of every continuous $2^\omega\to\omega$ map, distinct real parameters, first-occurrence labels on repeated running maxima, evaluated labelled traces, maximal local $C$-weights, and $e_\beta(\alpha)=\rho_1(\alpha,\beta)$.
- Actual well-definedness: continuous maps into discrete omega have finite image and finite clopen fibers, so the family is countable; Solovay splitting gives stationary repetition.  Cantor plus AC gives the distinct-real sequence.  Every weight maximum is over a finite trace.
- Source: Moore Section 2, definitions preceding Facts 3--5, printed pp. 8--9.
- Dependencies examined and added: the trace definition, thm-solovay-stationary-partition, thm-cantor-powerset, and def-axiom-of-choice.
- Choice/boundaries: exact selections are the stationary bookkeeping and one injection of omega-one into Cantor space.  Empty, zero, one-node, duplicate-maximum, recursive, and evaluation cases are explicit.
- Checks: explicit definition precheck clean, rendercheck pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: coherence and finite-to-one behavior are deliberately proved next.

### lem-minimal-walk-functions-are-coherent-and-finite-to-one

- Claim: every $e_\beta$ is finite-to-one and any two functions agree except on a finite part of their common domain.
- Actual proof: for fixed $n$, the union of the low-weight and disagreement sets has no limit point.  Near a candidate limit $\delta$, finitely many upper-trace intersections stabilize while $|C_\delta\cap\alpha|$ eventually dominates both their sizes and $n$; all three weights become $e_\delta(\alpha)>n$.  An infinite subset of a countable ordinal has a limit point, so the exceptional set is finite.
- Source: Moore Section 2, Fact 5 and proof, printed p. 9.
- Dependencies examined: the exact trace splice and the maximal-weight definition.
- Choice/boundaries: no new choice; least-element recursion on a single well-order handles the infinite-set contradiction.  Empty domains, $n=0$, one-node traces, equal endpoints, and $\delta=\beta$ are explicit.
- Checks: explicit precheck pass after canonical phase stratification, rendercheck pass, exact citation/derivation regeneration, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: define oscillation and Moore's modular colouring precursor.

### def-oscillation-on-minimal-walk-lower-traces

- Claim/conventions: adjacent downward crossings on a finite ordered domain; their lower-trace specialization; the finite-support modular sum $o$; and the least-nondividing-prime transform $o^*$.  A later source check corrected the provisional notation: Moore's topology uses the separate binary colouring $c=o\bmod2$, not $o^*$.
- Source: Moore Sections 4--5, printed pp. 10 and 15.
- Dependencies examined: coherence/finite-to-one and the labelled-trace definition.
- Well-definedness/boundaries: empty and singleton domains never request a predecessor; the lower trace lies below alpha; only finitely many labels contribute; modulus zero is excluded, modulus one contributes zero, and every positive integer has a least prime not dividing it.  No new choice is used.
- Checks: explicit definition precheck clean, rendercheck pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: author the exact elementary-model extension lemma in both comparison branches.

### lem-moore-club-extension-for-minimal-walks

- Claim: Moore's exact positive-arity Lemma 4.2, with a club quantified before the later $a,b,R$ choices and all five coordinatewise conclusions: first-disagreement bounds, one common nonempty trace block, equality/strict comparison, old-label restriction, and the $w_\delta$ label at the new minimum.
- Actual proof: club many elementary-model cuts; a reflected finite-type set for the equality branch; and, for the strict branch, Moore's uncountable set $E$ of limit cuts together with finite-to-one domination before reflecting the $b$-block and choosing a dominating $a$-block.
- Source: Moore Section 4, Lemma 4.2 and Facts 6--9, printed pp. 10--13, reread in full before authoring.
- Dependencies examined and repaired: trace concatenation/limit control, coherence and finite-to-one behavior (added as a direct dependency), labelled traces, countable elementary models, clubs, and AC.
- Boundaries: $k,l$ are positive so all trace maxima and coordinate bounds are typed; the auxiliary finite $K$ may be empty; $\Delta$ uses the common-domain endpoint when there is no disagreement; both allowed relations are proved separately; the new trace is nonempty because $\delta<\delta^+$.
- Checks: explicit-path precheck pass after canonical dependency stratification, rendercheck pass, regenerated exact citations/derivations, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: derive the exact finite oscillation-block lemma by iterating the two extension branches.

### thm-moore-oscillation-block-lemma

- Claim: Moore's exact Lemma 4.1: one sequence $b_m$ is fixed first; for each $n$ a single $a$ realizes, at every coordinate pair, the first $m$ marked oscillations and their common label $w$ for all $m\leq n$.  There is no coordinate-map parameter.
- Actual proof: choose a model cut in the club extension set where $w_\delta=w$; at each recursive stage an equality block resets the comparison and a following strict block creates exactly one downward crossing; then reflect $a$ below the cut so its lower trace splices uniformly into the first $n$ stages.
- Source: Moore Section 4, Lemma 4.1 and its full proof, printed pp. 10--14.
- Dependencies examined and added: the exact club extension lemma, oscillation definition, stationary $w$ bookkeeping, elementary models, and AC.
- Boundaries: positive coordinate lengths; $n=0$ has an empty marked list; $k=l=1$ is literal; both trace-block junctions and the strict quantifier order were checked.
- Scaffold/pre-splice mismatch: the scoped statement mentions a coordinate map and a single $n$-witness.  The source theorem instead has the stronger all-coordinate conclusion and fixes the entire $b_m$ sequence before $n$; the authored statement is exact and the owner-hashed manifest statement remains for Step 4 reconciliation.
- Checks: explicit-path induction precheck pass after canonical phase numbering, rendercheck pass, regenerated exact citations/derivations, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: derive Moore's exact Theorem 5.3 functional-coordinate binary pattern theorem.

### thm-moore-oscillation-colouring-pattern

- Claim: exact Theorem 5.3 for $o^*$ on the graph of a function $\pi:k\to l$, plus its immediate binary-topology consequence for the distinct colouring $c=o\bmod2$.  The realized $c$-pattern is the complement of the realized $o^*$ bit, so every desired functional binary pattern follows by complementing the input.
- Actual proof: thin to one continuous $w$ sending coordinate reals to distinct primes $q_i>8$; use a block of length $6\prod q_i$; solve $x+h_i\equiv6-r_i+2^{\chi(i)}\pmod {q_i}$ by CRT; then $o=2^{\chi(i)}+6(y+1)$, which gives the exact least-nondividing-prime index and parity.
- Source: Moore Section 5, Theorem 5.3 and full proof, printed pp. 15--16.  The typeset PDF page was inspected directly because text extraction lost the exponent in $2^{\chi(i)}$; the exponent resolves the apparent parity contradiction.
- Dependencies examined and repaired: block lemma, precise $o/o^*$ definition, finite CRT, and AC for countable thinning.
- Boundaries: positive arities, formal empty CRT list, modulus zero excluded, both bit cases computed, residues lie in $[2,8]$ below $q_i$, representative $x<Q<6Q$, and functional rather than arbitrary-matrix domain.
- Scaffold/pre-splice mismatch: the broad phrase “every coordinate assignment and finite binary pattern” is false if read as an arbitrary $k\times l$ matrix.  The exact source allows one selected column $\pi(i)$ per row.  The authored statement records this qualification; the owner-hashed manifest statement remains for Step 4 reconciliation.
- Checks: explicit-path direct precheck pass after canonical phase numbering, rendercheck pass, the corrected oscillation definition re-rendered, regenerated exact citations/derivations, and selected strict contracts for both items pass with 0 errors and 0 warnings.
- Open gap: none.  Next: define Moore's clopen topology using $c=o\bmod2$.

### def-moore-l-space-topology

- Claim/conventions: $W_\alpha=\{\alpha\}\cup\{\beta>\alpha:c(\alpha,\beta)=1\}$ for $c=o\bmod2$; $\tau[X]$ is generated only by $W_\xi\cap X$ for $\xi\in X$; its finite Boolean base, zero-dimensional regular Hausdorff property, point-countability and product embedding are explicit.
- Actual product check: coordinates in $X$ are characteristic signs of the generators and coordinates outside $X$ are constant; the $y$-coordinate separates $x<y$.  Both inclusions between the generated and product-induced topologies are stated.
- Source: Moore Section 7, definition before Theorem 7.6, printed p. 22; the product representation is a direct local verification of the scoped addition.
- Dependencies examined: the corrected binary colouring and the L-space convention.
- Boundaries: empty and singleton $X$, ordinal zero, empty finite intersection, endpoints in $W_\alpha$, coordinate padding, both topology inclusions, and absence of new choice.
- Scaffold/pre-splice mismatch: the scoped embedding formula at every $\xi<\omega_1$ would add undeclared generators when $\xi\notin X$.  The authored embedding pads those coordinates constantly and exactly recovers Moore's topology.  This qualification remains for Step 4 reconciliation.
- Checks: explicit definition precheck clean with zero proof bodies, rendercheck pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: prove nonseparability for every uncountable $X$.

### lem-moore-topology-is-nonseparable

- Claim/proof: every countable $D\subseteq X$ is missed by the clopen neighborhood $W_\beta\cap X$ for any $\beta\in X$ above $\sup D$; hence uncountable $X$ is nonseparable.
- Source: Moore Section 7, printed p. 22.
- Dependencies examined: the exact topology definition and separability.
- Boundaries: empty candidate $D$, countable supremum, endpoint $\beta\in W_\beta$, and the explicitly excluded empty/singleton spaces.
- Checks: explicit-path direct/actual direct precheck pass, rendercheck pass, regenerated citations/derivations, and selected strict contract pass after regeneration with 0 errors and 0 warnings.
- Open gap: none.  Next: prove the no-cross-injection theorem.

### lem-moore-no-cross-injection

- Claim: if $X\cap Y$ is countable, no uncountable subspace of $(X,\tau[X])$ continuously injects into $(Y,\tau[Y])$.
- Actual proof: remove domain points and images in the countable overlap; choose finite Boolean neighborhoods carried into $W_{f(\alpha)}$; Delta-system-thin roots, petals, bit strings, orientations and insertion positions; then use the functional coloring pattern on the petal-with-image rows and ordered graph-pair columns to put $\beta$ in $U_\alpha$ while keeping $f(\beta)$ out of $W_{f(\alpha)}$.
- Source: Moore Section 7, Theorem 7.7 and full proof, printed pp. 23--24.
- Dependencies examined and added: topology, exact functional coloring theorem, the published uncountable finite Delta-system lemma, and AC.
- Boundaries: countable intersection removal, petal avoidance of the overlap, positive petal size, zero-bit nonmembership, root-bit transfer, and both orientations handled by the two column indices.
- Checks: explicit-path contradiction precheck pass after canonical phase numbering, rendercheck pass, regenerated exact citations/derivations, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: derive hereditary Lindelofness without relying on the source's compressed discrete-subspace sentence.

### lem-moore-topology-is-hereditarily-lindelof

- Claim: every subspace of every $(X,\tau[X])$ is Lindelöf.
- Actual proof: a cover with no countable subcover yields, by recursion, a strictly ordinal-increasing right-separated sequence because each uncovered remainder must be uncountable and hence unbounded.  Finite Boolean neighborhoods are Delta-system-thinned; the functional coloring theorem realizes one petal's bits at a later singleton, while that singleton's own neighborhood transfers all root bits, placing it in an earlier forbidden neighborhood.
- Source: Moore Section 7, Corollary 7.8, printed p. 24; the paper's one-sentence reduction was not used as proof text.  The complete item-specific argument is supplied locally.
- Dependencies examined and repaired: Lindelöfness, the clopen base, finite Delta systems, the binary functional-pattern theorem, and AC.  The no-cross-injection theorem remains an independently authored stronger neighboring result but is not smuggled in as a discrete-space shortcut.
- Boundaries: empty/countable subspaces, the countable-remainder subcover calculation, unboundedness of the remaining set, nonempty petals, root below the later point, the sole singleton column, and strict earlier/later indices.
- Checks: explicit-path contradiction precheck pass, rendercheck pass, regenerated exact citations/derivations, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: assemble the ZFC L-space theorem with the exact AC propagation.

### thm-moore-zfc-l-space

- Claim: $(\omega_1,\tau[\omega_1])$ is zero-dimensional regular Hausdorff, hereditarily Lindelöf and nonseparable in ZFC, hence an L-space.
- Actual proof: direct assembly; the whole nonseparable space itself witnesses failure of hereditary separability.
- Source: Moore Theorem 1.3 and Section 7, printed pp. 2 and 21--24.
- Dependencies examined: exact L-space definition, topology, nonseparability, hereditary Lindelöfness, and AC.
- AC: the assembly makes no new choice but explicitly propagates the choices in the C-sequence bookkeeping, elementary-model and thinning suppliers.
- Boundaries: regular and Hausdorff are checked separately; the underlying set is exactly $\omega_1$; empty and singleton spaces are inapplicable to the nonseparable witness; ordinal zero remains a valid point.
- Checks: explicit-path direct precheck pass, rendercheck pass, regenerated exact citations/derivations, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: begin the CH S-space construction with Hart--Kunen's exact fundamental-space and nice-refinement definitions.

### lem-moore-topology-is-nonseparable

- Claim: every uncountable $(X,\tau[X])$ is nonseparable.
- Actual proof: for an arbitrary countable $D\subseteq X$, choose $\beta\in X$ above $\sup D$; the clopen neighborhood $W_\beta\cap X$ contains $\beta$ and no member of $D$.
- Source: Moore Section 7, printed p. 22.
- Dependencies examined: the exact $W_\beta$ endpoint convention and the definition of separability.
- Boundaries: empty candidate $D$, countable supremum, endpoint $\beta$, and exclusion of empty/singleton $X$ from the theorem hypothesis.
- Checks: explicit-path direct precheck pass, rendercheck pass, regenerated exact citations/derivations, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  This repeated checkpoint is superseded by the complete entry above.

### def-ordered-fundamental-space-and-nice-refinement

- Claim/conventions: Hart--Kunen's exact fundamental and ordered fundamental spaces; the intermediate topologies $\mathring{\mathcal T}_\alpha$; the local closed/open maximum conditions; nice-refinement ring pieces; compatible model/metric data; and the approximation condition $(\star_\alpha)$.
- Source: Hart--Kunen, Definitions 4.1, 4.4, 4.7, and 4.10--4.11, printed pp. 95--100, reread with Lemma 4.5 for the exact intermediate-topology role.
- Dependencies examined: the L/S convention, countable elementary-submodel supplier, and AC.  The definition explicitly says that "ordered" does not put $W_n^\alpha$ below $\alpha$; $W_0^\alpha=\omega_1$.
- Well-definedness/boundaries: $K(Y)$ is restricted to nonempty compacta; $S$ and either $\Gamma$-set may be empty; $\nu=0$ imposes no ring condition; $\nu=\omega$ imposes all of them; the Hausdorff metric is attached to the declared compatible $d_\alpha$; countable means finite or countably infinite.
- AC: the raw fundamental-space definition uses no extra choice, while the model chain, compatible metrics and recursive selections are explicitly identified as the construction data responsible for the AC dependency.
- Checks: explicit definition precheck clean with zero proof bodies, rendercheck pass after putting the cases display on one source line, JSON parse pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: recursively build a nice refinement satisfying $(\star)$ and prove that it is separable, locally compact, locally countable, regular, and not Lindelöf.

### lem-nice-refinement-exists-and-is-not-lindelof

- Claim: every ordered fundamental space has, in ZFC, a nice refinement satisfying every $(\star_\alpha)$; it is separable, locally compact, locally countable, zero-dimensional regular Hausdorff, and not Lindelöf.
- Actual construction: at stage $\alpha$, schedule every relevant countable compact family in $M_{\alpha+1}$ infinitely often.  For each $\nu$, the old compact ring pieces are totally bounded and the remaining $W_\nu^\alpha$-tail has diameter $2^{-\nu}$, giving a finite Hausdorff net $P_\nu$.  The next compact clopen ring piece absorbs every earlier net member's trace, hence $P_\nu\subseteq\Gamma_\alpha(S_\nu,\omega)$ and $(\star_\alpha)$ follows.
- Source: Hart--Kunen Lemmas 4.5, 4.8 and 4.12, printed pp. 96--100; the complete finite-net and absorption argument was reread before authoring.
- Dependencies examined and repaired: ordered/nice-refinement definitions, compactness, locally compactness, total boundedness of compact metric spaces, regularity, Lindelöfness, and AC.  The manifest's Lindelöf-degree dependency was replaced by the actual compactness-variant definition and the missing compact/local-compact/total-bounded suppliers were added.
- Remaining properties: each $V_m^\alpha$ is proved compact first in the intermediate topology and then in the final topology; it is countable because it lies in $\alpha+1$; nonempty ring pieces preserve density of $\omega$; clopen bases give regularity; and the cover by proper initial segments has no countable subcover.
- Boundaries/choice: $S=\varnothing$, empty $\Gamma$, $\nu=0$, finite ordinals, nonempty ring pieces, both intermediate/final compactness, maximum endpoints and countable suprema are explicit.  AC supplies the model chain and the simultaneous metric, net and ring selections.
- Checks: explicit-path induction precheck pass after canonical dependency stratification, rendercheck pass, regenerated exact citations/derivations, JSON parse pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: prove the CH hereditary-separability theorem using the exact closure-transfer chain of Hart--Kunen Lemmas 4.13--4.15 and Theorem 4.17.

### lem-ch-nice-refinement-is-strongly-hereditarily-separable

- Claim: under CH, every nonempty finite power of a star-satisfying nice refinement of a second-countable ordered fundamental space is hereditarily separable.
- Actual closure machinery: both directions of the standard Vietoris reduction are proved; the danger-free stage case uses $(\star_\beta)$ and Hausdorff-metric approximation; finitely many bad rings are removed and restored by the reduction; induction on the compactum's maximum gives the model-coded transfer; and Hart--Kunen's separate induction on finite cardinality removes the model condition for the finite targets actually used.
- Actual CH argument: each intermediate topology and its compact hyperspace are second countable.  Closure ordinals and compact maxima give a club of dense initial segments.  CH identifies $|H(\aleph_1)|=\aleph_1$ and places one countable segment into a later model; pairwise-disjoint free parts permit a still later finite compactum avoiding the intervening interval.  Equality of its two intermediate point-bases and finite-target closure transfer contradict left separation.
- Passage to powers: a Delta-system supplies pairwise-disjoint parts above its bounded root, so every fixed-size finite hyperspace is HS.  The original second-countable regular Hausdorff topology is a coarser metric topology; fixed coordinate-equality patterns and disjoint metric cells convert any left-separated finite-product sequence into a left-separated sequence of finite sets.
- Sources: Hart--Kunen Lemmas 2.7, 2.9, 2.14--2.15, 4.13--4.15 and 4.22, Theorem 4.17 and Corollary 4.18, printed pp. 91--106.  The later Lemma 4.22 was added to the source locator because it is what makes the authored statement independent of an implicit countable-base normalization of the assigned $W$-sets.
- Dependencies examined and repaired: nice-refinement definition/existence, L/S conventions, CH, second countability, Urysohn metrization, finite products, Delta systems, clubs, and AC.  The model-guided definition was repaired before this consumer to place the global $W$-assignment in $M_1$, as required by the source recursion.
- Boundaries/choice: nonempty finite size, singleton finite-target induction, empty Delta root, repeated product coordinates, all three maximum-vs-stage cases, both endpoints of the avoided interval, both closure equivalences, and the excluded zeroth power are explicit.  CH is used only for model capture; all other selections propagate AC.
- Checks: explicit-path direct precheck pass, rendercheck pass for the amended definition and theorem, regenerated exact citations/derivations, JSON parse pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: build an ordered second-countable fundamental space from Cantor space under CH and assemble the strong S-space.

### thm-ch-implies-an-s-space-exists

- Claim: ZFC plus CH constructs a strong S-space, so every positive finite power is regular Hausdorff, hereditarily separable, and not Lindelöf.
- Actual construction: finite-support binary sequences form a countable dense set in Cantor space; CH identifies the complement and the whole space with $\omega_1$, permitting a reindexing that sends that dense set to $\omega$.  Pulled-back cylinders are strict clopen local bases, and prefixing proves every nonempty cylinder has size $\aleph_1$, so this is a second-countable ordered fundamental space.
- Assembly: the nice-refinement theorem supplies regular Hausdorffness and non-Lindelöfness, while the CH closure theorem supplies hereditary separability of every positive finite power.  Product preservation gives regular Hausdorffness of each power; if a positive power were Lindelöf, its continuous surjective first-coordinate projection would make the original space Lindelöf.
- Source: Hart--Kunen, Definition 4.1 discussion and Corollary 4.18, printed pp. 95 and 103.  The complete cylinder and projection arguments are supplied locally.
- Dependencies examined and repaired: ordered fundamental spaces, Cantor sequence coding, CH, both refinement suppliers, product topology, product preservation of regularity and Hausdorffness, L/S conventions, and AC.
- Boundaries/choice: zero support, root cylinder, strict successor cylinders, singleton intersections, $n=1$, exclusion of $n=0$, nonempty products, and surjectivity of the first projection are explicit.  AC supplies the reindexing bijection and is propagated from the refinement constructions.
- Checks: explicit-path direct precheck pass after adopting canonical dependency layers, rendercheck pass, regenerated exact citations/derivations, JSON parse pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: define the exact simple dichotomy for ideals generated modulo finite by $\omega_1$ members.

### def-simple-dichotomy-for-omega-one-generated-ideals

- Claim/conventions: an ideal consists only of countable subsets and contains the finite sets; generation modulo finite is by finite unions of $\omega_1$ selected generators, equivalently by one increasing generator sequence.  Inside means every countable subset lies in the ideal; outside means finite intersection with every ideal member, equivalently with every selected generator.
- Dichotomy quantifiers: for every uncountable ground set and generated ideal there is an uncountable inside witness or an uncountable outside witness.  The existential “or” is inclusive; what is proved exclusive is that one uncountable witness cannot be both.
- Sources: Abraham, *Three applications of ideal dichotomy*, slides 2--4; and the definitions preceding Theorems 1.3--1.4 in the complete rendered lecture notes.
- Dependencies examined: cardinal and countability conventions and AC.  No algebraic ideal definition was reused: the set-ideal axioms are stated locally.
- Boundaries/choice: the empty generator index set, singleton generator, finite error, endpoint in the increasing normalization, empty/finite local witnesses and uncountable dichotomy witnesses are explicit.  AC is used only in this definitional discussion to extract a countably infinite subset of an uncountable witness for the exclusivity check.
- Checks: definition precheck clean with zero proof bodies, rendercheck pass, JSON parse pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: prove from PFA the simple dichotomy without assuming the ideal is a P-ideal.

### thm-pfa-implies-the-simple-ideal-dichotomy

- Claim: PFA proves Abraham's two stronger forms for every ideal of countable sets generated modulo finite by $\omega_1$ members, hence the simple inside/outside dichotomy.  No P-ideal hypothesis is used.
- Form 1 proof: after separating the outside generator-free remainder, the side-condition forcing has finite point and generator coordinates plus a finite membership chain of countable models.  Points above a model avoid every inside set in it, and recorded generators freeze intersections.  Adding $M\cap H(\aleph_2)$ gives a master: a backward definable-fibre induction yields nested non-inside candidate sets, countable nonideal witnesses in $M$ supply replacement points outside the finitely many remote generators, and the union condition is checked in both freezing directions.
- Form 2 proof: failure of an uncountable inside set and Form 1 imply that every uncountable subset contains an uncountable outside subset.  The finite-colouring forcing freezes old colours on recorded generators.  Delta-system thinning of domains and side sets, coordinatewise outside thinning, and a second Delta-system on the finite bad sets yield ccc.  PFA makes the union total and every colour class outside.
- Sources: Abraham, complete rendered lecture notes lines 44--207 (First Form through Theorem 1.4), cross-checked with *Three applications of ideal dichotomy*, slides 1--4.
- Dependencies examined and repaired: the local simple-dichotomy definition; the completed same-run PFA, master-condition, and ccc-implies-proper suppliers; countable elementary models; uncountable Delta systems; countable unions; infinite-cardinal absorption; and AC.  The same-run proper-forcing report records completed claims and clean focused gates for every supplier used here.
- Boundaries/choice: arbitrary ground sets, an uncountable generator-free remainder, countable or empty generator union, empty finite coordinates and Delta roots, singleton outside pieces, colour $0$, newly introduced colours, both filter-directedness uses, and both directions of generator/outside equivalence are explicit.  AC supplies generator enumerations, models, nested witnesses, thinnings, and the uncountable-piece inference.
- Checks: explicit-path direct precheck pass after canonical dependency layering, rendercheck pass, regenerated exact citations/derivations, JSON parse pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: extract the right-separated topological witness and prove that both ideal outcomes are nonseparable.

### lem-regular-nonhereditarily-lindelof-space-yields-ideal-witness

- Claim: every regular Hausdorff non-hereditarily-Lindelöf space contains an $\omega_1$-long right-separated subspace with countable closed neighbourhood generators; every uncountable inside witness is nonseparable, and every uncountable outside witness is discrete and nonseparable.
- Actual construction: an open cover with no countable subcover recursively supplies $x_\alpha$ outside all earlier chosen cover members.  Their traces make inclusive initial segments open.  Hereditary regularity shrinks at each $x_\alpha$ to an open $U_\alpha$ whose $S$-closure is contained in that countable initial segment.
- Ideal outcomes: a countable subset of an inside $D$ is contained in a finite union of closed generators plus its finite error, a countable closed set missing a point and a nonempty open part of $D$.  An outside $D$ meets each $\overline{U_\alpha}$ finitely; removing the other finitely many closed points from $U_\alpha$ isolates $x_\alpha$.
- Sources: Abraham, slides 2--4, and the complete Theorem 1.5 proof in the rendered lecture notes, lines 208--226.  The cover recursion and both topology arguments are supplied in full locally.
- Dependencies examined and repaired: L/S and hereditary conventions, exact simple-ideal predicates, hereditary regular/Hausdorff preservation, closed-neighbourhood regularity, and AC.
- Boundaries/choice: the empty initial cover, $\alpha=0$, inclusive initial endpoints, empty finite generator lists/errors, uncountable witnesses, finite closed removal and all recursion choices are explicit.
- Checks: explicit-path direct precheck pass, rendercheck pass, regenerated exact citations/derivations, JSON parse pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: combine the completed with the PFA dichotomy.

### thm-pfa-implies-there-are-no-s-spaces

- Claim: under PFA, every regular Hausdorff hereditarily separable space is hereditarily Lindelöf; hence no S-space exists.
- Actual proof: failure of hereditary Lindelöfness supplies the local ideal.  The PFA dichotomy gives an uncountable inside or outside witness, and the preceding lemma makes either a nonseparable subspace, contradicting hereditary separability.  Applying the result to a hypothetical S-space contradicts its own non-Lindelöf clause.
- Sources: Abraham Theorem 1.5 with complete proof, rendered lines 208--226; Moore Theorem 7.5, printed p. 22.
- Dependencies examined and repaired: the completed simple-dichotomy theorem, the completed topological witness, exact S-space convention, and AC propagation.
- Boundaries/choice: empty and singleton spaces are excluded because they are Lindelöf; the dichotomy witness is explicitly uncountable; the assembly makes no new choice and carries the suppliers' AC uses.
- Checks: explicit-path contradiction precheck pass, rendercheck pass, regenerated exact citations/derivations, JSON parse pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: verify the completed supercompact-to-PFA consistency supplier and derive the conditional consistency of no S-spaces.

### cor-supercompact-consistency-of-no-s-spaces — completed after supplier recheck

- Claim: for fixed effective presentations, formal consistency of ZFC plus a supercompact implies formal consistency of ZFC plus no S-spaces; no countable-transitive-model inference, model extraction, or ZFC proof of PFA is asserted.
- Actual local argument: a contradiction proof from ZFC plus the no-S-space sentence is transformed primitive-recursively by replacing each occurrence of that extra axiom with the fixed ZFC+PFA proof of `thm-pfa-implies-there-are-no-s-spaces`.  The verified proof-reduction theorem therefore gives $\operatorname{Con}(\mathrm{ZFC}+\mathrm{PFA})\to\operatorname{Con}(\mathrm{ZFC}+\text{no S-spaces})$; the promised same-run formal PFA consistency supplier would supply the first implication.
- Sources/dependencies examined: Moore Theorem 7.5, printed p. 22; Cummings Theorem 24.11, printed pp. 99--101; `thm-pfa-implies-there-are-no-s-spaces`; `thm-formal-relative-consistency-from-verified-proof-reduction`; `lem-primitive-recursive-syntax-and-proof-checking`; and the exact supercompactness definition.
- Cross-pair supplier recheck: `lem-formal-pfa-iteration-verification-compiler`
  and `cor-formal-consistency-of-pfa-from-a-supercompact` are now fully
  authored.  Their current items, complete batch-6 contracts, confidence-1
  `repaired`/`accept` author decisions, exact PA proof-reduction orientation,
  and no-countable-transitive-model qualification were reread before closing
  this consumer.  The semantic forcing theorem alone was not substituted for
  the formal compiler.
- Boundaries: zero or one uses of the extra axiom, malformed proof codes, empty/singleton spaces, the absence of any new set-theoretic choice, and both non-model-extraction and no-reverse-implication qualifications are explicit.
- Checks: explicit-path direct precheck and rendercheck pass; regenerated F1
  from the completed supplier's exact Statement; selected strict contract pass
  with 0 errors and 0 warnings; risk review is complete.
- Open gap: none.  Next: close the qualified asymmetry theorem against this
  completed consistency corollary.

### thm-l-and-s-space-existence-is-asymmetric — completed after inherited supplier closure

- Exact claim: ZFC proves an L-space exists; ZFC+CH and ZFC+$V=L$ prove a strong S-space exists, with the latter route explicitly $V=L\Rightarrow\diamondsuit\Rightarrow\mathrm{CH}$; ZFC+PFA proves that no S-space exists.  These are separate, incompatible branches.  Only under $\operatorname{Con}(\mathrm{ZFC}+\text{a supercompact})$ is the metatheoretic conclusion drawn that S-space existence is not a ZFC theorem.
- Dependencies examined and repaired: the three local existence/nonexistence theorems; published `thm-v-equals-l-implies-diamond`; published `prop-diamond-implies-continuum-hypothesis`; AC; and `cor-supercompact-consistency-of-no-s-spaces`, newly added because the manifest's unqualified final slogan otherwise had no consistency premise supporting nonprovability in ZFC.
- Axiom separation: CH and $V=L$ never enter the PFA branch, PFA never enters either construction branch, and the supercompact occurs only inside a formal source-consistency assumption.
- Boundaries: nonempty $\omega_1$ witnesses, first versus zeroth power, empty/singleton nonexamples, AC propagation, and absence of any reverse consistency claim are explicit.
- Checks: explicit-path direct precheck pass after canonical branch numbering, rendercheck pass, regenerated exact citations/derivations, JSON parse pass, and selected strict contract pass with 0 errors and 0 warnings.
- Supplier closure: the preceding consistency corollary now has its exact
  formal supplier, complete contract, and clean focused checks, so the
  qualified nonprovability conclusion no longer inherits an open edge.  Its
  own contract was regenerated and its risk review is complete.
- Open gap: none.
- Pre-splice mismatch for Step 4: the owner-hashed manifest phrase “The existence questions are not dual ZFC theorems” needs the authored relative-consistency qualification and the added consistency-corollary dependency.
- Next: compute the finite minimal-walk example independently of the open forcing supplier.

### ex-a-finite-minimal-walk-and-its-lower-trace

- Data: normalized successor sets, $C_\omega=\{0,2,4,\ldots\}$, and $(\alpha,\beta,\gamma)=(5,\omega,\omega+2)$.
- Calculation: the full walk is $(\omega+2,\omega+1,\omega,6,5)$; the two segments are $(\omega+2,\omega+1,\omega)$ and $(\omega,6,5)$.  The running lower-max lists are $(0,0,4,4)$, $(0,0)$, and $(4,4)$, so $\{0\}<\{4\}$ and both trace concatenation identities hold exactly.
- Dependencies examined: the local exact walk/trace definition and the repaired concatenation lemma.  The example retains running-max multiplicities until converting to the lower-trace sets.
- Boundaries: local finiteness of $C_\omega$, every least-point choice, terminal-point deletion, ordinal zero, nonempty maxima, strict target endpoints and duplicate lower values are explicit.
- Checks: explicit-path direct precheck pass after canonical dependency-layer numbering, rendercheck pass, regenerated exact citations/derivations, JSON parse pass, and selected strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: realize a two-row binary functional colouring pattern and calculate the induced clopen membership/nonmembership.

### ex-oscillation-pattern-controls-clopen-membership

- Data/claim: the uncountable disjoint block families
  $a_\xi=\{3\xi,3\xi+1\}$ and $b_\xi=\{3\xi+2\}$ have arities two and
  one.  The functional colouring theorem is applied with the constant map
  $\pi:2\to1$ and input bits $(0,1)$, whose parity complements are $(1,0)$.
- Calculation: the selected $a<b$ satisfies
  $c(a(0),b(0))=1$ and $c(a(1),b(0))=0$, so
  $b(0)\in W_{a(0)}\setminus W_{a(1)}$.  Thus the displayed finite Boolean
  combination is a nonempty clopen basic neighbourhood of $b(0)$.
- Dependencies examined: the exact functional-graph conclusion of
  `thm-moore-oscillation-colouring-pattern` and the endpoint/subbasic-set
  clauses of `def-moore-l-space-topology`.
- Boundaries: both input and complementary bits, the singleton shared column,
  positive arities, strict block order, nonempty neighbourhood, and the
  functional-not-arbitrary-matrix limitation are explicit.  No new choice is
  made after the theorem supplies its witnesses.
- Repair: restored the omitted TeX backslash in `\qquad`; this was a confirmed
  notation defect in the interrupted draft, not a mathematical change.
- Checks: explicit-path direct precheck pass, rendercheck pass, and selected
  strict contract pass with 0 errors and 0 warnings after the repair.
- Open gap: none.  Next: author and refute the promised false duality statement.

### fs-l-space-and-s-space-existence-are-dual-zfc-theorems

- Refuted claim: ZFC proves both kinds of space to exist by arguments obtained
  from one another by interchanging separability and Lindelöfness.
- Actual refutation: the completed asymmetry theorem gives a ZFC L-space, a CH
  strong S-space, and PFA nonexistence of S-spaces in separate branches.  Under
  consistency of ZFC plus a supercompact, it also proves that S-space existence
  is not a ZFC theorem.  This refutes parallel ZFC provability with exactly the
  available qualification and makes no absolute-independence or converse
  consistency claim.
- Dependencies/source locators: the immediately preceding asymmetry theorem;
  Moore Theorem 1.3 and Section 7; Hart--Kunen Corollary 4.18; Abraham's
  *Three applications of ideal dichotomy*, slides 1--4.
- Provenance repair: a `false-statement` is not an allowed AI-generated leaf
  kind.  The manifest's provisional `ai-generated`/`generation.role: example`
  record was replaced by source-backed `ai-altered` statement and proof
  provenance with reader-visible references; the ID, kind, promised claim and
  page placement are unchanged.
- Boundaries: empty and singleton nonwitnesses, the first positive power in the
  strong S-space conclusion, separate incompatible axiom branches, no new
  choice, and absence of either iff direction are explicit.
- Checks: explicit-path direct precheck pass, rendercheck pass, batch-scoped
  content-policy pass, regenerated citation/derivation rows, and selected
  strict contract pass with 0 errors and 0 warnings.
- Open gap: none.  Next: author both A/B pages, refresh pair scope evidence and
  the shared dependency input, then run the required explicit-path batch gates.

### A/B pages

- A page: lists all 24 assigned spine items in manifest prerequisite order and
  explains the minimal-walk/oscillation construction, the product embedding,
  the ZFC L-space conclusion, the separate CH strong-S-space construction, the
  PFA nonexistence branch, and the qualified formal consistency conclusion.
- B page: lists exactly the two examples and one false statement, and records
  what each calculation establishes without broadening the functional
  colouring theorem or the metamathematical qualification.
- Assumptions/boundaries: the page prose keeps CH, $V=L$, PFA and the
  supercompact consistency assumption in separate branches and identifies the
  actual AC uses rather than attaching Choice to raw definitions.
- Checks: explicit-path rendercheck passes for both pages; an independent list
  comparison found exact manifest order and cardinalities 24/24 and 3/3.
- Open gap: none.  Next: refresh coverage, cross-batch review states and the
  sufficient-scope evidence, then run the full owned explicit-path gate set.

## Dependency and scope refresh before final gates

- The four completed PFA/master/ccc item suppliers and the completed formal
  consistency supplier are now `verified` in the batch-9 consumer input after
  rereading their current Statements, contracts and confidence-1 author
  decisions.  The repaired direct edge to
  `thm-ccc-and-countably-closed-forcings-are-proper` was added; the earlier
  three PFA edges and consistency edge were preserved and updated rather than
  duplicated.
- The declared page edge to
  `proper-forcing-countable-support-iterations-and-pfa` remains `open` because
  that sibling A/B handoff is still in progress.  Its A/B page files appeared
  during this final check, but the owner's current checkpoint still lists page
  handoff and batch gates as unfinished and no batch-6 author-check artifact
  exists.  No example or page prose supplies a proof step here, and every
  actual item interface used by this pair has been completed and rechecked.
- The unified frontier dependency ledger was refreshed successfully after the
  input change.  The Prikry/Gitik sibling row in the shared batch input was
  preserved byte-for-byte.
- The Step-3a owner `proceed` decision remains the operative baseline scope
  ruling.  No new ID or pair was added.  The false-statement provenance repair
  changes neither its promised claim nor scope hash; statement-level scaffold
  repairs remain listed below as pre-splice mismatches for Step 4 rather than
  invented owner rulings.

## Final handoff

### Completed IDs

All 24 A-page IDs are fully authored:

- `def-set-theoretic-l-and-s-spaces`
- `def-c-sequences-and-minimal-walk-traces-on-omega-one`
- `lem-minimal-walk-trace-concatenation-and-limit-control`
- `def-minimal-walk-weights-and-coherent-functions`
- `lem-minimal-walk-functions-are-coherent-and-finite-to-one`
- `def-oscillation-on-minimal-walk-lower-traces`
- `lem-moore-club-extension-for-minimal-walks`
- `thm-moore-oscillation-block-lemma`
- `thm-moore-oscillation-colouring-pattern`
- `def-moore-l-space-topology`
- `lem-moore-topology-is-nonseparable`
- `lem-moore-no-cross-injection`
- `lem-moore-topology-is-hereditarily-lindelof`
- `thm-moore-zfc-l-space`
- `def-ordered-fundamental-space-and-nice-refinement`
- `lem-nice-refinement-exists-and-is-not-lindelof`
- `lem-ch-nice-refinement-is-strongly-hereditarily-separable`
- `thm-ch-implies-an-s-space-exists`
- `def-simple-dichotomy-for-omega-one-generated-ideals`
- `thm-pfa-implies-the-simple-ideal-dichotomy`
- `lem-regular-nonhereditarily-lindelof-space-yields-ideal-witness`
- `thm-pfa-implies-there-are-no-s-spaces`
- `cor-supercompact-consistency-of-no-s-spaces`
- `thm-l-and-s-space-existence-is-asymmetric`

All three B-page IDs are fully authored:

- `ex-a-finite-minimal-walk-and-its-lower-trace`
- `ex-oscillation-pattern-controls-clopen-membership`
- `fs-l-space-and-s-space-existence-are-dual-zfc-theorems`

Both owned pages are authored and list these IDs in exact manifest order.  No
new item ID beyond the immutable 27-ID inventory was needed.  The needed local
suppliers are the earlier A-page definitions and lemmas listed above; the
scaffold repair also added the exact existing suppliers
`thm-ccc-and-countably-closed-forcings-are-proper` and
`cor-supercompact-consistency-of-no-s-spaces` to their consumers.  Every owned
item has a complete contract.  Because all 27 files were absent at the
immutable pre-author baseline, no author-created `record-item` decision was
made; the documented auditor-authored-item exception applies.

### Checks actually run

- Owned explicit-path precheck: 20 proof-bearing owned items, 0 failures.
- Owned explicit-path rendering: all 27 items and both pages clean.
- Batch author check: `ok: true`; 41 proof-bearing items prechecked, 54 files
  rendered, 50 items passed content policy, and 50/50 strict contracts passed;
  fingerprint
  `267920c16ea3990a285e25928471717f915f1f96807d2f922103fc9d61b6a233`.
- Batch content policy: 50 items, 0 errors, 0 warnings.
- Batch strict proof contracts: 50/50, 0 errors, 0 warnings.
- Coverage checklist: 2 pages, 41 harvested results, 0 errors, 0 warnings.
- Source fetch check: 8/8 sources resolved; 7 fetch-verified and one documented
  drop supported by complete alternatives.
- Manifest dependencies: 566 items, 0 normalized, 0 errors.
- Plan validation: exit 0; all 1098 pages with item lists are valid and the
  remaining 521 page-level plans are reported explicitly by the validator.
- Global dependency, forward-reference, external-result, citation-fidelity,
  boundary, and risk checks passed for the relevant authored scope.  The
  external-result check continues to print unrelated pre-existing published
  debt, not an owned failure.
- The batch-9 dependency input has review evidence for all seven rows: six are
  verified and the page-level PFA row is honestly open.  The unified ledger
  refresh without `--require-reviewed` passes.  Its current run-wide
  `--require-reviewed` invocation is blocked outside this batch by four
  batch-3-to-4 item edges with no review rows; those files are not owned here.

### Pre-splice plan mismatches for Step 4

1. `def-c-sequences-and-minimal-walk-traces-on-omega-one`: the scaffold's
   successor clause $C_{\eta+1}=\{\eta\}$ conflicts with its requirement that
   every $C_\gamma$ contain 0.  The item uses $C_{\eta+1}=\{0,\eta\}$, with
   the zero successor interpreted as $\{0\}$.
2. `lem-minimal-walk-trace-concatenation-and-limit-control`: the fixed-upper-
   endpoint convergence sentence is false.  The item proves Moore's exact
   limit-target Fact 2, $\min L(\xi,\delta)\to\delta$ for nonzero limit
   $\delta$, together with Fact 1.
3. `lem-moore-club-extension-for-minimal-walks`: the informal prescribed-
   relation wording must be spliced to the exact club-first quantifiers and
   five coordinatewise conclusions of Moore's Lemma 4.2.
4. `thm-moore-oscillation-block-lemma`: the scaffold's coordinate-map and
   single-witness wording does not match Lemma 4.1.  The authored theorem fixes
   the entire $b_m$ sequence first and gives the common all-coordinate
   conclusion for every $m\leq n$.
5. `thm-moore-oscillation-colouring-pattern`: an arbitrary finite binary
   matrix is not supplied.  Moore's theorem realizes bits only on the graph of
   a map $\pi:k\to l$; the item also distinguishes $o^*$ from the topology's
   colouring $c=o\bmod2$.
6. `def-moore-l-space-topology`: coordinates outside $X$ must be padded by a
   constant in the product embedding.  Otherwise the scoped formula adds
   generators not present in $\tau[X]$.
7. `def-ordered-fundamental-space-and-nice-refinement`: the original clopen
   $W_n^\alpha$ are not all below $\alpha$; that tail property belongs to the
   refined $V_n^\alpha$.  The model-guided approximation condition also
   belongs to a selected nice refinement, not the raw fundamental-space
   definition.
8. `thm-l-and-s-space-existence-is-asymmetric`: the slogan that the questions
   are not dual ZFC theorems requires the authored relative-consistency
   qualification and the dependency on
   `cor-supercompact-consistency-of-no-s-spaces`; no unconditional
   independence assertion is justified.

The local manifest and contracts already reflect the authored statements and
dependencies.  These are reported so that the serial reconciler can splice the
shared plan/prose accurately rather than restoring the provisional wording.

### Open obligations and published concerns

- The declared page dependency on
  `proper-forcing-countable-support-iterations-and-pfa` remains open only
  because that owner has not yet recorded a completed page handoff or produced
  a batch-6 author-check artifact.  Its final false statement and the two page
  files now exist, but the owner's current checkpoint still lists page
  authoring and batch gates as the next action.  Every load-bearing item
  supplier used here is authored, contracted, has a confidence-1 author
  decision, and was rechecked.  No example or page prose from that pair is used
  mathematically.
- The engine's Step-3 final decision check will continue to request mechanical
  audit records for these 27 newly created files until it consumes this
  successful dispatch.  Recording self-review decisions here would violate
  the immutable-baseline exception.
- No suspected or confirmed defect in a published item was found during this
  dispatch.  In particular, `rem-l-spaces-and-s-spaces` is the intentionally
  `proved_here: false` Recorded replacement target; it was read but never used
  as a premise.  No update to the published-consumer-supplier ledger is
  requested.

There is no unresolved mathematical or source qualification in the owned
pair.  AC is declared exactly at the simultaneous ladder/bookkeeping choices,
model chains, recursive selections, thinning arguments, PFA use, CH
reindexing, and formal consistency source branch, and is propagated to their
consumers; definitions and post-selection calculations that need no choice
remain choice-free.
