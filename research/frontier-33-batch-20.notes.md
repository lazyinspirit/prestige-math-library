# frontier-33 batch 20 — beta scaffold and source evidence

Only the three batch-20 artifacts are changed. CLAUDE.md, README.md, SCHEMA.md, both task files, and SET-6/SET-8 design sections were read. Spec orders 665/666/669/670 and prerequisites agree with the assignment; the design delegates absolute orders to the spec. No plan/workflow/published edits. No new item bodies or certification claims.

Conventions: weak choice is in ZF, including Foundation; set comparison means injection, not an unlicensed aleph assignment. Club theory is ZFC with regular uncountable kappa. Closure is at nonzero limit points; neither 0 nor the ambient ordinal is required in a club. Trace is restricted to ordinals of uncountable cofinality. Filter definitions below explicitly state the elementary set-family axioms because SET-8 has no filters-and-ultrafilters prerequisite. Elementary substructures are treated directly on universe kappa with finitary languages; no unbuilt H(theta), collapse, or general model-theory theorem is imported.

Published definitions of AC_omega/DC, Hartogs, countable unions, finite choice, Zorn, well ordering, cofinality, and Hessenberg are reused, not reminted. Statements of these dependencies were read. The new proved GCH theorem discharges the existing unproved rem-gch-implies-ac; it does not duplicate an existing proved theorem. In particular the triple-power Hartogs bound is supplied for arbitrary sets, while the double-power bound has its square-absorption hypothesis. MC equivalence with AC uses Foundation (ZF, not ZFA). The aleph false statement does NOT assert that an aleph equation is unexpressible in ZF or that global aleph equations are weaker than arbitrary-set GCH.

Web fetch/read verification: all URLs listed in coverage returned actual relevant document text via the web reader. Source ranges are restricted to the indicated sections/results, not entire books returned by a search. Jech and Carneiro are independent backing for weak choice; Lietz and Vasey independent full lecture-note treatments for clubs. Caicedo's corrected HTML is important: do not substitute the older combined PDF's erroneous canonical-pairing argument.

Recovery: Kanamori–Pincus https://math.bu.edu/people/aki/7.pdf was attempted with https/http, www, a query variant, and a Wayback complete-document URL; all returned web Internal Error. No text from that failed source is harvested. Caicedo's fully read Specker exposition is a DIFFERENT treatment, recorded with original_url provenance, not represented as the same document. The official Powers of 2 DOI PDF endpoint returned a one-line non-document response. Its crawl-readable ResearchGate author upload then failed the ordinary HTTP liveness gate; the batch-20 orphaned claims are instead reharvested from Morillon and alg-d below, with provenance retained. Failed Marks URLs and the unneeded Fremlin chapter are not backing sources. Local network DNS failure is distinct from the web reader's successful document retrieval; the actual URL gate result is recorded below.

## Item checkpoints

### def-choice-for-pairs-and-countable-finite-choice

Claim/conventions: AC_2 chooses from every set-indexed family of two-element sets; AC_omega,2 restricts the index to omega. AC_omega,fin chooses from countable families of nonempty finite sets. These are distinct restrictions.

Dependencies: def-countable-choice, def-axiom-of-choice

Dependency rationale and proposed proof: State quantifiers separately; finite choice does not choose from an infinite family.

Support: Jech, The Axiom of Choice (1973), §8.2, Theorem 8.3(ii), p.123 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; Morillon, Synthèse, §2.2.1 opening, printed p.6/PDF p.5, ACfin(N) — https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-multiple-and-dependent-multiple-choice

Claim/conventions: MC selects a nonempty finite subset of each member of any set family of nonempty sets. CMC restricts the family to omega. DMC: serial R on nonempty X admits finite nonempty F_n with every x in F_n having an R-successor in F_(n+1); no prescribed F_0.

Dependencies: def-dependent-choice, def-choice-for-pairs-and-countable-finite-choice

Dependency rationale and proposed proof: Record exactly the forward-successor quantifier; this is not merely one edge between each adjacent pair of finite sets.

Support: Jech, The Axiom of Choice (1973), §9.1, p.133, MC — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; alg-d, On the axiom of dependent choice, DMC definition and Proposition 6, PDF p.3 — https://alg-d.com/math/ac/dc.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-choice-implies-dependent-implies-countable-choice

Claim/conventions: ZF proves AC⇒DC⇒AC_omega and AC_omega⇒AC_omega,fin⇒AC_omega,2. AC⇒AC_2.

Dependencies: def-axiom-of-choice, def-dependent-choice, def-countable-choice, thm-recursion, lem-finite-choice, def-choice-for-pairs-and-countable-finite-choice

Dependency rationale and proposed proof: For AC⇒DC choose one successor function and recurse from prescribed a. For DC⇒AC_omega use finite partial choice tuples, beginning with the empty tuple. Do not infer DC⇒AC_2.

Support: Jech, The Axiom of Choice (1973), §2.4, pp.22–23, dependent-choice proposition — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-starting-point-free-dependent-choice

Claim/conventions: The version of DC that does not prescribe the first term implies the published prescribed-starting-point version.

Dependencies: def-dependent-choice, lem-finite-choice, thm-recursion

Dependency rationale and proposed proof: For fixed a use the set of nonempty finite R-paths beginning with a, relation one-step extension. An arbitrary infinite chain of such paths has increasing lengths; its union is an R-path beginning at a.

Support: Jech, The Axiom of Choice (1973), §2.4, dependent-choice formulation, pp.22–23 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; alg-d, On the axiom of dependent choice, Proposition 7 and complete proof, PDF pp.3–5 — https://alg-d.com/math/ac/dc.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-dependent-choice-and-finite-multiple-selections

Claim/conventions: ZF proves DC iff DMC plus AC_omega,fin; MC⇒DMC and AC_omega⇒CMC.

Dependencies: def-multiple-and-dependent-multiple-choice, def-choice-for-pairs-and-countable-finite-choice, lem-starting-point-free-dependent-choice, thm-choice-implies-dependent-implies-countable-choice, thm-recursion

Dependency rationale and proposed proof: DC gives singletons. Under finite countable choice choose a linear ordering of each finite F_n, then recursively take the least allowed successor; use the previous lemma for a prescribed start. MC chooses finite subsets of every successor set once; union them over each finite stage and recurse. CMC follows by singletons.

Support: Morillon, Synthèse, §2.1 Question 1 final sentence, printed p.6/PDF p.5, Blass observation — https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf; alg-d, On the axiom of dependent choice, Proposition 6, PDF p.3 — https://alg-d.com/math/ac/dc.pdf; Jech, The Axiom of Choice (1973), §9.1, MC definition — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-families-of-finite-character

Claim/conventions: A nonempty family F of subsets of X has finite character iff Y∈F exactly when every finite subset of Y belongs to F. Tukey asserts an inclusion-maximal member exists in every such family.

Dependencies: []; elementary ZF set constructions only.

Dependency rationale and proposed proof: Define the family and maximality explicitly; empty finite subset is included in the test.

Support: Jech, The Axiom of Choice (1973), §2.1, pp.9–10, Maximal Principle II — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-tukey-finite-character-equivalent-to-choice

Claim/conventions: In ZF, Tukey finite character and AC are equivalent.

Dependencies: def-families-of-finite-character, thm-zorn, def-axiom-of-choice, lem-finite-choice

Dependency rationale and proposed proof: A chain union remains in F since each finite subset lies in a single chain member. Conversely apply Tukey to partial choice graphs for an arbitrary family, check finite character, and extend at any omitted index. No proof of Zorn is repeated.

Support: Jech, The Axiom of Choice (1973), Theorem 2.1 and proof, §2.1, pp.10–11 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-multiple-choice-produces-maximal-antichains

Claim/conventions: MC implies every poset has an inclusion-maximal antichain (a subset of pairwise incomparable elements).

Dependencies: def-multiple-and-dependent-multiple-choice, thm-transfinite-recursion, thm-hartogs

Dependency rationale and proposed proof: Fix a finite-subset selector on all nonempty subsets of the poset. At each stage consider elements incomparable with all previous stages; take the minimal elements of its selected finite subset. These form a nonempty finite antichain. Hartogs of P(P) bounds the distinct selected stages without choosing an element at every stage.

Support: Jech, The Axiom of Choice (1973), Theorem 9.1(a), MC⇒A, pp.133–134 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-antichains-well-order-linearly-ordered-sets

Claim/conventions: If every poset has a maximal antichain, every linearly ordered set can be well ordered. Consequently, under MC the power set of every ordinal can be well ordered.

Dependencies: lem-multiple-choice-produces-maximal-antichains, thm-hartogs, thm-transfinite-recursion

Dependency rationale and proposed proof: For linear Q, order pairs (Y,y), nonempty Y⊆Q and y∈Y, only within the same Y by the given order. A maximal antichain chooses exactly one y per Y. Recursively remove this chosen element; Hartogs stops. Lexicographic least-difference order linearly orders P(alpha).

Support: Jech, The Axiom of Choice (1973), Theorem 9.1(a), A⇒L⇒P, p.134 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-bounded-hierarchy-for-the-multiple-choice-argument

Claim/conventions: For every set A there is a limit ordinal theta with A⊆V_theta, where V_0=empty, V_(beta+1)=P(V_beta), V_lambda=union_(beta<lambda)V_beta. These bounded stages exist in ZF.

Dependencies: thm-transfinite-recursion, def-axiom-of-foundation

Dependency rationale and proposed proof: Define stages by published recursion and prove monotonicity/transitivity by induction. Prove exhaustion from Foundation: if some x never occurs, a membership-minimal element of the set of bad elements in {x} plus its transitive closure has all members in stages; Replacement bounds those stages, contradiction. Construct the transitive closure as union of finite union iterates. This is a local prerequisite lemma, not a second generic rank page.

Support: Jech, The Axiom of Choice (1973), §9.1, Theorem 9.1(b), p.134, hierarchy argument — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; Caicedo, Some choiceless results (5), theorem after Homework 4: all powersets of ordinals well-orderable iff AC; hierarchy proof — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-multiple-choice-equivalent-to-choice-in-zf

Claim/conventions: In ZF, if every P(alpha) for ordinal alpha is well-orderable, then AC; consequently MC⇔AC. This conclusion is not asserted in ZFA.

Dependencies: lem-antichains-well-order-linearly-ordered-sets, lem-bounded-hierarchy-for-the-multiple-choice-argument, thm-hartogs, thm-transfinite-recursion, def-axiom-of-choice

Dependency rationale and proposed proof: Given A⊆V_theta with theta limit, put k=h(V_theta). Fix ONE well-order W of P(k). Recursively well-order all V_beta, beta<theta: successor stages transfer subsets of the previous order type (<k) into P(k) and use W; limits order by first stage of appearance, then the already specified stage order. Restrict the resulting order to A. Every family then has a choice function by minima on its union. No family of well-orders is chosen.

Support: Jech, The Axiom of Choice (1973), Theorem 9.1(b), p.134 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; Caicedo, Some choiceless results (5), powersets-of-ordinals theorem and proof — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-dedekind-infinite-set

Claim/conventions: X is Dedekind-infinite when it is equipotent with a proper subset; otherwise it is Dedekind-finite. Infinite means not finite, without assuming countable subsets.

Dependencies: []; elementary ZF set constructions only.

Dependency rationale and proposed proof: Use injective nonsurjective self-map as equivalent wording.

Support: Caicedo, Some choiceless results (3), corrected HTML, §6, definition after canonical-pairing lemma; §8 — https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-dedekind-infinite-iff-countable-subset

Claim/conventions: In ZF, X is Dedekind-infinite iff omega injects into X iff X absorbs one extra point. Equivalently X Dedekind-finite iff h(X)≤omega.

Dependencies: def-dedekind-infinite-set, thm-recursion, thm-hartogs

Dependency rationale and proposed proof: Shift an injected omega, fixing its complement. Conversely iterate an injective nonsurjective self-map from a point outside its range; distinct iterates give the injection. Interpret the Hartogs equivalence using the least nonembedding ordinal.

Support: Caicedo, Some choiceless results (3), corrected HTML, §8, first theorem and its three-step proof — https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-countable-choice-gives-countable-subsets

Claim/conventions: AC_omega implies every infinite set has a countably infinite subset.

Dependencies: def-countable-choice, thm-dedekind-infinite-iff-countable-subset, lem-finite-choice, thm-n-cross-n-countable

Dependency rationale and proposed proof: Choose one injective n-tuple for each positive n. Their coordinates are explicitly enumerated by a subset of omega squared, so their union is countable without a second choice. It is infinite since it contains arbitrarily large finite subsets; least first-occurrence indices enumerate it.

Support: Jech, The Axiom of Choice (1973), §2.4.1, p.20 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### cor-countable-choice-and-omega-one-cofinality

Claim/conventions: Under AC_omega, cf(omega_1)=omega_1.

Dependencies: thm-countable-union-of-countable, thm-cofinality-basics

Dependency rationale and proposed proof: If cf(omega_1)=omega, a countable cofinal sequence expresses omega_1 as a countable union of countable ordinals. Cofinality is an infinite cardinal, leaving no other smaller candidate. This is the weaker-choice refinement of the published ZFC successor regularity result.

Support: Jech, The Axiom of Choice (1973), §2.4.2, Corollary 2, p.21 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-dependent-choice-detects-non-well-orders

Claim/conventions: Under DC, a linear order is a well-order iff it has no infinite strictly descending sequence.

Dependencies: def-dependent-choice, def-well-order

Dependency rationale and proposed proof: From a nonempty subset with no least element use the serial smaller-element relation and DC. A well-order cannot contain a descending sequence by taking the least element of its range.

Support: Jech, The Axiom of Choice (1973), §2.4, final proposition, p.23 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-local-gch-for-arbitrary-sets

Claim/conventions: CH(X) means X is infinite and every Y with X≼Y≼P(X) is equipotent with X or P(X). Arbitrary-set GCH asserts CH(X) for every infinite X. Strict comparison is injection plus nonequinumerosity.

Dependencies: def-equinumerous, thm-cantor-powerset

Dependency rationale and proposed proof: This formulation uses only sets, injections, and power sets, even when X is not well-orderable. Seq(X) denotes the set of finite X-sequences.

Support: Carneiro, GCH implies AC, a Metamath Formalization, §1 and §2, pp.1–2 — https://arxiv.org/pdf/1506.03533; Caicedo, Some choiceless results (5), opening Specker exposition, initial discussion — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-canonical-sequence-coding-for-well-orders

Claim/conventions: There is a uniform definable construction, from each supplied infinite well-order on Y, of a bijection Seq(Y)↔Y. No arbitrary family of pairing bijections is selected.

Dependencies: thm-cantor-normal-form, thm-schroder-bernstein, thm-transfinite-recursion

Dependency rationale and proposed proof: Collapse the supplied well-order to its unique ordinal alpha. Follow corrected Caicedo CNF pairing: coefficientwise natural pairing on omega^beta; explicit leading-term/finite-remainder absorption reduces arbitrary infinite alpha to its leading indecomposable term. Iterate the pairing and encode finite lengths; use the constructive Schroder–Bernstein procedure. Mere Hessenberg existence is insufficient for this uniform construction.

Support: Caicedo, Some choiceless results (3), corrected HTML, §6, claim and corrected canonical-pairing lemma — https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/; Carneiro, GCH implies AC, a Metamath Formalization, §3 and §3.1, pp.2–4 — https://arxiv.org/pdf/1506.03533

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-halbeisen-shelah-no-powerset-sequence-injection

Claim/conventions: In ZF, if omega≼X then P(X) does not inject into Seq(X).

Dependencies: lem-canonical-sequence-coding-for-well-orders, thm-hartogs, thm-transfinite-recursion, thm-cantor-powerset

Dependency rationale and proposed proof: Given such injection and a supplied well-ordered infinite Y⊆X, canonical coding gives a diagonal subset D⊆Y whose sequence image is not wholly in Y; take the first outside coordinate. Seed the construction with the supplied omega injection and repeat this uniquely prescribed fresh-element operation through h(X), contradiction. Explain all transports in the diagonal map; no stagewise arbitrary choice.

Support: Caicedo, Some choiceless results (3), corrected HTML, §6, Halbeisen–Shelah theorem and proof — https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/; Carneiro, GCH implies AC, a Metamath Formalization, Theorem 2 and canonical construction, pp.2–4 — https://arxiv.org/pdf/1506.03533

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-local-gch-absorbs-sums-and-squares

Claim/conventions: If omega≼X and CH(X), then X⊔X≈X×X≈X; hence P(X)×P(X)≈P(X).

Dependencies: def-local-gch-for-arbitrary-sets, thm-halbeisen-shelah-no-powerset-sequence-injection, thm-dedekind-infinite-iff-countable-subset, thm-schroder-bernstein

Dependency rationale and proposed proof: X absorbs a point by the omega shift. Thus X⊔X embeds in P(X⊔1)≈P(X). Local GCH gives X or P(X); the latter would inject P(X) into Seq(X), impossible. Now X² embeds in P(X)²≈P(X⊔X)≈P(X), and the same exclusion applies. Record the explicit disjoint-union power-set bijection.

Support: Caicedo, Some choiceless results (5), opening Specker exposition, Lemma 1 and proof — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-hartogs-iterated-powerset-bounds

Claim/conventions: For any set X, h(X)≼P(P(P(X))). If X≈X², then h(X)≼P(P(X)). All comparisons are choice-free.

Dependencies: thm-hartogs, def-well-order, thm-schroder-bernstein, thm-dedekind-infinite-iff-countable-subset, lem-finite-choice

Dependency rationale and proposed proof: For the triple bound, send alpha<h(X) to the set of ALL chains of initial segments of well-orders of subsets X of type alpha, including the full subset; each chain has order type alpha+1 and distinct alpha give disjoint nonempty fibers in P(P(X)). For the double bound use all reflexive well-order relations of type alpha, as nonempty disjoint subsets of P(X²), then transfer a supplied X²≈X. Empty order gets its empty relation. Never choose representative well-orders.

Support: Caicedo, Some choiceless results (3), corrected HTML, §7, Hartogs powerset theorem and square/D-finite lemma — https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-powerset-fibres-force-well-orderability

Claim/conventions: If X×P(X) injects into X⊔alpha for an ordinal alpha, then X is well-orderable.

Dependencies: thm-cantor-powerset, def-well-order

Dependency rationale and proposed proof: For each x, the fibre {x}×P(X) cannot land wholly in X by Cantor. Its ordinal part has a least element. Disjoint fibres have different least elements, giving an injection X→alpha.

Support: Caicedo, Some choiceless results (4), §9, lemma after first Theorem and its proof — https://caicedoteaching.wordpress.com/2009/01/29/580-some-choiceless-results-4/

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-local-gch-hartogs-dichotomy

Claim/conventions: Assume omega≼X and CH(X). If h(X)≼P(X), then X is well-orderable and P(X)≈h(X). Otherwise h(P(X))=h(X).

Dependencies: lem-local-gch-absorbs-sums-and-squares, lem-powerset-fibres-force-well-orderability, thm-hartogs, thm-hessenberg, thm-schroder-bernstein

Dependency rationale and proposed proof: In the first case X<X⊔h(X)≤P(X)⊔P(X)≈P(X); CH gives X⊔h(X)≈P(X). Also X×P(X)≈P(X) by square absorption, so the fibre lemma well-orders X. Then |X|<h(X) and Hessenberg yields X⊔h(X)≈h(X). In the second case X≼P(X) gives one Hartogs inequality and h(X) not embedding into P(X) gives the other.

Support: Caicedo, Some choiceless results (5), opening Specker exposition, Lemma 2 and subsequent Hartogs-equality paragraph — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-specker-two-local-gch

Claim/conventions: In ZF, omega≼X, CH(X), and CH(P(X)) imply P(X)≈h(X); in particular X is well-orderable.

Dependencies: lem-local-gch-hartogs-dichotomy, lem-hartogs-iterated-powerset-bounds, lem-local-gch-absorbs-sums-and-squares

Dependency rationale and proposed proof: If P(X) is not well-orderable then P(P(X)) is not either, since P(X) injects into it. The dichotomy gives h(X)=h(P(X))=h(P(P(X))). But square absorption and the double-power bound embed h(X) into P(P(X)), contradicting its Hartogs number. Apply the first dichotomy branch to identify P(X) with h(X).

Support: Caicedo, Some choiceless results (5), opening Specker exposition, Specker proof through the contradiction — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/; Carneiro, GCH implies AC, a Metamath Formalization, Theorem 1, pp.1–2 — https://arxiv.org/pdf/1506.03533

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-sierpinski-arbitrary-set-gch-implies-choice

Claim/conventions: Over ZF, arbitrary-set GCH implies AC.

Dependencies: def-local-gch-for-arbitrary-sets, thm-specker-two-local-gch, def-axiom-of-choice

Dependency rationale and proposed proof: For any A apply Specker to the disjoint union X=A⊔omega, which has an explicit omega injection. GCH supplies CH(X) and CH(P(X)). Restrict the resulting well-order to A. For any given family well-order its union and take minima. No implication infinite⇒Dedekind-infinite is used in ZF.

Support: Caicedo, Some choiceless results (5), opening Specker exposition, GCH consequence of Specker theorem — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/; Carneiro, GCH implies AC, a Metamath Formalization, §2, discussion of passing from local theorem to AC — https://arxiv.org/pdf/1506.03533

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### rem-weak-choice-nonimplication-destinations

Claim/conventions: Record external relative-consistency separations only: DC need not imply AC or arbitrary-family AC_2 (Jech 8.3 with kappa=omega_1); AC_omega need not imply DC (8.12 with kappa=omega); AC_2 need not imply AC_omega (7.5 Problem 12 gives even finite-set choice). No model proof is claimed here.

Dependencies: thm-choice-implies-dependent-implies-countable-choice, thm-multiple-choice-equivalent-to-choice-in-zf, thm-dependent-choice-and-finite-multiple-selections

Dependency rationale and proposed proof: Each arrow failure has the exact source statement and destination permutation-models-and-transfer-to-zf; first/basic symmetric examples point also to symmetric-extensions-and-basic-choice-failure-models. BPI/ultrafilter equivalence is a forward orientation to boolean-algebras-stone-duality-and-the-prime-ideal-theorem. These external results are never deps targets for proofs on this pair.

Support: Jech, The Axiom of Choice (1973), §8.2 introductory statements, p.122; Theorem 8.3 statement p.123; §7.5 Problem 12 p.115 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: Model constructions and ZFA→ZF transfer are explicitly deferred to their named pages; conditional metatheory only, no unconditional consistency assertion.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### ex-weak-choice-implication-map

Claim/conventions: Draw proved arrows AC⇔MC⇒DC⇒AC_omega⇒AC_omega,fin⇒AC_omega,2; AC⇒AC_2; DC⇔DMC+AC_omega,fin. Label missing reverse arrows only by the ledger’s external model destinations.

Dependencies: thm-choice-implies-dependent-implies-countable-choice, thm-dependent-choice-and-finite-multiple-selections, thm-multiple-choice-equivalent-to-choice-in-zf, rem-weak-choice-nonimplication-destinations

Dependency rationale and proposed proof: Keep arbitrary-family AC_2 on a separate branch. Dotted model references are orientation, never logical premises.

Support: Jech, The Axiom of Choice (1973), §2.4, §8.2, §9.1 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; Keremedis–Herrlich, Powers of 2, author-uploaded full text, Definition 2.1 and Corollary 3.6 proof — https://www.researchgate.net/publication/38354968_Powers_of_2

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### ex-countable-choice-spent-on-enumerations

Claim/conventions: For a sequence of countable sets, distinguish chosen enumerations from a given family of enumerations; with the latter, the union is explicitly enumerated in ZF.

Dependencies: thm-countable-union-of-countable, def-countable-choice, thm-r-uncountable, thm-n-cross-n-countable

Dependency rationale and proposed proof: Use a fixed enumeration of omega² and skip repeated values. Empty sets handled separately. The missing data are simultaneous enumerations, not the pairing function.

Support: Jech, The Axiom of Choice (1973), §2.4.2 proof, pp.20–21 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### ex-dependent-choice-partial-tuples

Claim/conventions: Work out the serial relation on finite tuples for a countable family and on paths from a fixed a.

Dependencies: thm-choice-implies-dependent-implies-countable-choice, lem-starting-point-free-dependent-choice

Dependency rationale and proposed proof: Show first two extensions and union-domain calculation. This illustrates actual proof data, without assuming a tree theorem.

Support: Jech, The Axiom of Choice (1973), §2.4, DC⇒AC_omega proof, pp.22–23 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### ex-finite-character-partial-choice-graphs

Claim/conventions: The family of partial choice graphs for a fixed family has finite character; a violation is detected by one bad pair or two pairs sharing an index.

Dependencies: thm-tukey-finite-character-equivalent-to-choice

Dependency rationale and proposed proof: Work through those finite witnesses and the maximal-domain extension.

Support: Jech, The Axiom of Choice (1973), Theorem 2.1, maximal principle II⇒AC proof — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### ex-local-gch-at-omega-and-its-power-set

Claim/conventions: CH(omega) and CH(P(omega)) together imply P(omega)≈omega_1 in ZF.

Dependencies: thm-specker-two-local-gch, thm-hartogs, thm-omega-one-is-the-least-uncountable-ordinal

Dependency rationale and proposed proof: Calculate h(omega)=omega_1 by the published definition; display the two separate local instances and explain why the proof is not a proof from one instance alone.

Support: Carneiro, GCH implies AC, a Metamath Formalization, Theorem 1 and discussion, pp.1–2 — https://arxiv.org/pdf/1506.03533

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### fs-gch-on-alephs-is-a-choice-free-formulation

Claim/conventions: False claim: writing 2^aleph_alpha=aleph_(alpha+1) says only that there is no intermediate size and makes no assertion that P(aleph_alpha) is well-orderable.

Dependencies: def-local-gch-for-arbitrary-sets, thm-sierpinski-arbitrary-set-gch-implies-choice

Dependency rationale and proposed proof: A literal set-theoretic equation here supplies a bijection with an ordinal, and transporting that order explicitly well-orders the power set. The formula can be encoded in ZF; the error is suppressing what it asserts or assuming arbitrary X already has an aleph cardinal. No countermodel or claim that global formulations differ in strength is used.

Support: Carneiro, GCH implies AC, a Metamath Formalization, §1–2, choice-free cardinal comparison conventions — https://arxiv.org/pdf/1506.03533; Caicedo, Some choiceless results (5), opening Specker exposition, GCH and later powersets-of-ordinals theorem — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-club-subsets-of-ordinals

Claim/conventions: For a limit ordinal theta, C⊆theta is unbounded if above every beta<theta is a member; it is closed if every nonzero limit delta<theta with sup(C∩delta)=delta lies in C. Club means both. Main ambient kappa is regular uncountable.

Dependencies: def-cofinality

Dependency rationale and proposed proof: Also define acc(C); allow auxiliary theta of uncountable cofinality for reflection and splitting. Do not impose 0∈C.

Support: Lietz, Set Theory lecture notes, §5.1, Definition 5.1, p.40 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, §14, Definition 14.1, p.79 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-closure-points-on-regular-cardinals

Claim/conventions: For f:kappa→kappa with kappa regular uncountable, {alpha<kappa:f[alpha]⊆alpha} is club. For increasing f:theta→theta and cf(theta)>omega the same holds.

Dependencies: def-club-subsets-of-ordinals, thm-cofinality-basics, thm-recursion

Dependency rationale and proposed proof: Above beta iterate alpha_(n+1)=max(alpha_n,sup f[alpha_n])+1 in the regular case. In the monotone theta case use f(alpha_n)+1; the omega supremum stays below theta. Verify closure by testing each argument below a limit point.

Support: Lietz, Set Theory lecture notes, Lemmas 5.2 and 5.4 and Claim 5.3, pp.40–41 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-limit-points-of-unbounded-sets

Claim/conventions: If cf(theta)>omega and X⊆theta is unbounded, acc(X) is club in theta.

Dependencies: lem-closure-points-on-regular-cardinals

Dependency rationale and proposed proof: Use the monotone next-point map beta↦min(X above beta) and identify its nonzero limit closure points; check closure directly. This is needed for the trace-removal proof.

Support: Lietz, Set Theory lecture notes, Corollary 5.5, p.41 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-small-intersections-of-clubs

Claim/conventions: If cf(theta)>omega and mu<cf(theta), an intersection of mu clubs of theta is club. In particular the club system on regular uncountable kappa is closed under fewer than kappa intersections.

Dependencies: lem-closure-points-on-regular-cardinals, def-club-subsets-of-ordinals, thm-cofinality-basics

Dependency rationale and proposed proof: For each club use its least strict-next-point map. Their pointwise supremum is below theta and monotone. Its nonzero limit closure points belong to every club; the intersection itself is closed. Empty intersection is theta.

Support: Lietz, Set Theory lecture notes, Lemma 5.6, pp.41–42 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Theorems 14.5 and 14.8, pp.79–80 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-club-filter-and-nonstationary-ideal

Claim/conventions: For cf(theta)>omega, the club filter consists of ALL sets containing a club, not merely clubs. S is stationary iff it meets every club. NS_theta is the collection of sets disjoint from some club.

Dependencies: thm-small-intersections-of-clubs

Dependency rationale and proposed proof: Spell out filter axioms (proper, upward, finite intersections) and ideal axioms (downward, finite unions) locally. Record <cf(theta) completeness via the preceding theorem and duality by complements.

Support: Lietz, Set Theory lecture notes, §5.2, Definition 5.7, p.42 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Definitions 14.6,14.12; Corollary 14.7, pp.80–81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### prop-basic-stationary-set-calculus

Claim/conventions: Stationary subsets of theta are unbounded; every club is stationary; supersets of stationary sets are stationary; intersecting a stationary set with a club preserves stationarity. A union of <cf(theta) nonstationary sets is nonstationary.

Dependencies: def-club-filter-and-nonstationary-ideal

Dependency rationale and proposed proof: Use tails for bounded sets and small club intersections for the other assertions. These facts license removing bounded sets and selecting stationary pieces throughout splitting.

Support: Vasey, Math 145a lecture notes, Example 14.13(1)–(5), p.81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf; Lietz, Set Theory lecture notes, Definition 5.7 and Lemma 5.6 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-diagonal-club-intersection

Claim/conventions: For a kappa-sequence A_xi, diagonal intersection is {alpha<kappa: for every xi<alpha, alpha∈A_xi}; diagonal union requires some xi<alpha. These are complement-dual.

Dependencies: def-club-subsets-of-ordinals

Dependency rationale and proposed proof: State vacuity at alpha=0; it must be removed when arguing with regressive functions.

Support: Lietz, Set Theory lecture notes, Definition 5.8, p.42 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Definition 14.9, p.80 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-diagonal-intersection-of-clubs

Claim/conventions: For regular uncountable kappa, the diagonal intersection of kappa many clubs is club.

Dependencies: def-diagonal-club-intersection, thm-small-intersections-of-clubs, lem-closure-points-on-regular-cardinals

Dependency rationale and proposed proof: For each beta bound the least points above beta from clubs indexed ≤beta, and take closure points of this bounding map. Check membership and closure separately. Ordinary kappa-fold intersection is not asserted unbounded.

Support: Lietz, Set Theory lecture notes, Theorem 5.9, p.42 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Theorem 14.11, pp.80–81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-regressive-function-on-ordinals

Claim/conventions: For S⊆kappa\{0}, a map f:S→kappa is regressive if f(alpha)<alpha for every alpha∈S.

Dependencies: []; elementary ZF set constructions only.

Dependency rationale and proposed proof: If 0 was initially in S, explicitly restrict to S\{0}; no ordinal lies below zero.

Support: Lietz, Set Theory lecture notes, Definition 5.10, p.43 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Definition 15.1, p.82 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-fodor-pressing-down

Claim/conventions: A regressive map on a stationary S⊆kappa\{0}, kappa regular uncountable, is constant on a stationary subset.

Dependencies: def-regressive-function-on-ordinals, def-club-filter-and-nonstationary-ideal, thm-diagonal-intersection-of-clubs, prop-basic-stationary-set-calculus

Dependency rationale and proposed proof: If every fibre is nonstationary, choose one avoiding club for each value (ZFC), take their diagonal intersection, and take alpha∈S in it. The index f(alpha)<alpha creates a contradiction.

Support: Lietz, Set Theory lecture notes, Lemma 5.11, p.43 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Theorem 15.2, p.82 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-normal-filter-on-a-regular-cardinal

Claim/conventions: A proper filter F on regular uncountable kappa containing every tail is normal if it is closed under kappa-indexed diagonal intersections. F-positive means its complement is not in F.

Dependencies: def-diagonal-club-intersection, def-club-filter-and-nonstationary-ideal

Dependency rationale and proposed proof: Restate elementary filter axioms locally; dual F-small sets form an ideal. Do not confuse F-positive with membership in F or omit the tails hypothesis.

Support: Williams, Math 655, part 1.1, §4, Definitions 33–34 and definitions before Proposition 39, pp.11–12 — https://juliakw.net/teaching/2019/math655/part1.1.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-normality-and-positive-pressing-down

Claim/conventions: A proper tail-containing filter F on regular uncountable kappa is normal iff every regressive map on an F-positive subset of kappa\{0} has an F-positive fibre. Such F is kappa-complete.

Dependencies: def-normal-filter-on-a-regular-cardinal, def-regressive-function-on-ordinals

Dependency rationale and proposed proof: Forward proof repeats avoiding-fibres diagonal argument using F. Reverse: if diagonal of F_xi is not in F, its complement is positive; there assign the least omitted index <alpha. A positive fibre contradicts F_xi membership. For completeness, pad a <kappa family to a kappa family, then intersect its diagonal with the tail above its index length.

Support: Williams, Math 655, part 1.1, Propositions 35 and 39, pp.11–12 — https://juliakw.net/teaching/2019/math655/part1.1.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### cor-club-filter-is-least-normal-tail-filter

Claim/conventions: The club filter on regular uncountable kappa is normal and is contained in every proper normal filter containing all tails.

Dependencies: thm-diagonal-intersection-of-clubs, thm-normality-and-positive-pressing-down, def-club-filter-and-nonstationary-ideal

Dependency rationale and proposed proof: For leastness suppose the complement of a club C is F-positive; off a bounded initial segment, alpha↦sup(C∩alpha)<alpha is regressive there. Each fibre is bounded by the next point of C, hence F-small, contradiction.

Support: Williams, Math 655, part 1.1, Example 37 and Exercise 40, pp.11–12 — https://juliakw.net/teaching/2019/math655/part1.1.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-normal-ordinal-function

Claim/conventions: A function f:kappa→kappa is normal if strictly increasing and continuous at every nonzero limit below kappa. Continuity means f(lambda)=sup_(xi<lambda)f(xi).

Dependencies: def-club-subsets-of-ordinals

Dependency rationale and proposed proof: State the corresponding class-function convention only as notation; theorems below concern set domain kappa.

Support: Vasey, Math 145a lecture notes, Definition 14.3, p.79 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf; Welch, Axiomatic Set Theory, Definition 2.11, printed p.20 — https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-clubs-and-normal-enumerations

Claim/conventions: An unbounded C⊆regular uncountable kappa has increasing enumeration with domain kappa, and C is closed iff that enumeration is normal.

Dependencies: def-normal-ordinal-function, thm-cofinality-basics

Dependency rationale and proposed proof: Its order type is ≤kappa and cofinality forces it ≥kappa. Prove closure⇔continuity using least next elements.

Support: Vasey, Math 145a lecture notes, Lemma 14.4, p.79 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf; Welch, Axiomatic Set Theory, Lemma 2.12, pp.20–21 — https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-normal-function-fixed-points-form-a-club

Claim/conventions: If f:kappa→kappa is normal and kappa regular uncountable, {alpha:f(alpha)=alpha} is club.

Dependencies: def-normal-ordinal-function, thm-cofinality-basics, thm-recursion

Dependency rationale and proposed proof: Induction gives f(alpha)≥alpha. Iterate f starting above any requested bound; if the iteration stabilizes use its value, otherwise its omega-supremum is a fixed point below kappa. Continuity gives closure.

Support: Welch, Axiomatic Set Theory, Lemma 2.13, printed p.21 — https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-cofinality-strata-and-stationary-trace

Claim/conventions: E_lambda^kappa={alpha<kappa:cf(alpha)=lambda}. Tr(S)={alpha<kappa:cf(alpha)>omega and S∩alpha stationary in alpha}; S reflects at such alpha. Nonreflection means Tr(S) is empty.

Dependencies: def-club-filter-and-nonstationary-ideal, def-cofinality

Dependency rationale and proposed proof: This definition does not assert stationary sets must reflect. Relative stationarity at singular alpha uses the uncountable-cofinality convention already built.

Support: Lietz, Set Theory lecture notes, Definitions 5.12 and 5.15, pp.43–44 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Definition 15.6, p.85 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-regular-cofinality-strata-are-stationary

Claim/conventions: For infinite regular lambda<cf(theta), E_lambda^theta is stationary in theta.

Dependencies: def-cofinality-strata-and-stationary-trace, thm-cofinality-basics, thm-transfinite-recursion

Dependency rationale and proposed proof: Inside any club of theta construct a continuous strictly increasing sequence of length lambda; its supremum stays below theta, lies in the club, and has cofinality lambda. Prove the latter by pulling back a hypothetical shorter cofinal subset and using regularity of lambda.

Support: Lietz, Set Theory lecture notes, Proposition 5.13, p.43 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Example 14.13(6), p.81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-stationary-set-minus-its-trace

Claim/conventions: If S⊆regular uncountable kappa is stationary, then S\Tr(S) is stationary.

Dependencies: def-cofinality-strata-and-stationary-trace, lem-limit-points-of-unbounded-sets, prop-basic-stationary-set-calculus

Dependency rationale and proposed proof: If club C avoids the difference, choose the least alpha∈S∩acc(C). It belongs to Tr(S), so cf(alpha)>omega. Then acc(C∩alpha) is club in alpha and disjoint from S by minimality, contradiction.

Support: Lietz, Set Theory lecture notes, Lemma 5.16, p.44 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-unbounded-stationary-fibres-yield-a-partition

Claim/conventions: Suppose S⊆kappa is stationary and g is regressive on S. If {alpha∈S:g(alpha)≥beta} is stationary for every beta<kappa, S has kappa disjoint stationary subsets, hence a partition into kappa stationary pieces.

Dependencies: thm-fodor-pressing-down, prop-basic-stationary-set-calculus

Dependency rationale and proposed proof: Apply Fodor to each tail-domain to obtain a stationary fibre at a value ≥beta. Thus the set of such values is unbounded and has size kappa. Take all those fibres and absorb any leftover into one piece. No need to choose a new stationary set for each value.

Support: Lietz, Set Theory lecture notes, proof of Theorem 5.14, case 1 after Claim 5.17, p.44 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-splitting-stationary-sets-of-fixed-cofinality

Claim/conventions: Every stationary S⊆E_lambda^kappa with infinite regular lambda<kappa can be split into kappa stationary pieces.

Dependencies: thm-fodor-pressing-down, def-cofinality-strata-and-stationary-trace, thm-small-intersections-of-clubs, lem-unbounded-stationary-fibres-yield-a-partition

Dependency rationale and proposed proof: Choose cofinal increasing lambda-sequences c^alpha in alpha. If no fixed coordinate xi has stationary tails above every beta, choose a bound beta_xi and avoiding club for each coordinate. Their <kappa intersection and the bound sup beta_xi contradict cofinality for alpha high in S. The successful coordinate and preceding fibre lemma finish.

Support: Lietz, Set Theory lecture notes, Claim 5.17 and surrounding proof, p.44 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Lemma 15.7 proof, p.85 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-splitting-stationary-regular-cardinals

Claim/conventions: If the set S of regular uncountable cardinals below kappa is restricted to any stationary subset, that subset can be split into kappa stationary pieces.

Dependencies: lem-stationary-set-minus-its-trace, thm-diagonal-intersection-of-clubs, lem-closure-points-on-regular-cardinals, thm-clubs-and-normal-enumerations, lem-unbounded-stationary-fibres-yield-a-partition

Dependency rationale and proposed proof: Replace S by stationary T=S\Tr(S). For alpha∈T choose a club D_alpha⊆alpha disjoint from S and enumerate it normally as c^alpha. If every coordinate xi has a bound beta_xi beyond which its fibre-tail is nonstationary, take the diagonal of the avoiding clubs and closure points of xi↦beta_xi. Choose alpha<gamma in T, alpha a closure point, gamma in that diagonal. For xi<alpha, c^gamma_xi<beta_xi<alpha (enlarge bounds to strict); continuity and c^gamma_xi≥xi give c^gamma_alpha=alpha, contradicting D_gamma∩S=empty. A successful coordinate has domain T above xi, so its map is regressive and the fibre lemma applies. Absorb S\T afterward.

Support: Lietz, Set Theory lecture notes, Claim 5.18 and full second case, pp.44–45 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-solovay-stationary-partition

Claim/conventions: Every stationary S⊆regular uncountable kappa is the disjoint union of kappa stationary sets.

Dependencies: lem-splitting-stationary-sets-of-fixed-cofinality, lem-splitting-stationary-regular-cardinals, thm-fodor-pressing-down, prop-basic-stationary-set-calculus

Dependency rationale and proposed proof: First intersect S with the club of nonzero limit ordinals. Either cf(alpha)<alpha is stationary there, so Fodor fixes its cofinality and the first case applies, or regular-cardinal points are stationary and the second case applies. The discarded part of S is absorbed into one piece.

Support: Lietz, Set Theory lecture notes, Theorem 5.14, pp.43–45 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Fact 15.3, p.84 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### cor-club-filter-not-an-ultrafilter

Claim/conventions: For every regular uncountable kappa, the club filter does not decide every subset. There is a stationary costationary subset.

Dependencies: thm-solovay-stationary-partition, def-club-filter-and-nonstationary-ideal

Dependency rationale and proposed proof: Split kappa into stationary pieces; one piece and its complement both meet every club, so neither contains a club.

Support: Vasey, Math 145a lecture notes, Corollary 15.4, p.84 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### def-stationary-antichains-modulo-nonstationary

Claim/conventions: A stationary antichain is a family of stationary subsets with pairwise nonstationary intersection; equality modulo NS means nonstationary symmetric difference.

Dependencies: def-club-filter-and-nonstationary-ideal

Dependency rationale and proposed proof: This is only the ideal vocabulary and relation. Solovay gives an antichain of size kappa. No saturation or large-cardinal consistency theorem is proved.

Support: Lietz, Set Theory lecture notes, Definition 5.19 and following orientation, p.45 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### lem-skolem-witness-closure-on-a-cardinal

Claim/conventions: For a finitary language of size <regular uncountable kappa and a structure M of universe kappa, a family of <kappa finite-arity functions can be defined such that closure of alpha<kappa under these functions makes M restricted to alpha elementary in M.

Dependencies: thm-hessenberg, thm-recursion

Dependency rationale and proposed proof: Supply local definitions of terms, formulas, their finite recursive satisfaction clauses, and elementary restriction (all formulas with parameters agree). For each existential formula take the least ordinal witness when one exists, otherwise 0, also include language functions/constants. Induct on formulas to prove the witness criterion: atomic restrictions, Boolean clauses, existential witnesses. Count finite strings over the language using Hessenberg. This directly proves the needed special case without invoking an unbuilt general Skolemization or completeness theorem.

Support: Kamensky, Set Theory, Theorem 1.4.7 and its proof, p.7; Example 3.1.2, p.17 — https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-elementary-initial-segments-form-a-club

Claim/conventions: For M of universe regular uncountable kappa in language of size <kappa, {0<alpha<kappa:M restricted to alpha is an elementary substructure of M} is club.

Dependencies: lem-skolem-witness-closure-on-a-cardinal, lem-closure-points-on-regular-cardinals, thm-cofinality-basics

Dependency rationale and proposed proof: Bound all finitely many-argument function values on beta for all the <kappa witness functions, obtaining a bounding map kappa→kappa. Its closure points above constants give club many elementary restrictions. To show the entire set is closed, apply the locally proved existential witness criterion to a union of an increasing chain of elementary initial segments. Merely containing a club does not itself prove closedness.

Support: Kamensky, Set Theory, Theorem 1.4.7, p.7 — https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### thm-stationarity-via-elementary-initial-segments

Claim/conventions: S⊆regular uncountable kappa is stationary iff every structure on kappa in a language of size <kappa has some nonzero alpha∈S whose restriction is elementary. Countable languages already suffice.

Dependencies: thm-elementary-initial-segments-form-a-club, def-club-filter-and-nonstationary-ideal

Dependency rationale and proposed proof: Forward intersect S with the preceding club. For converse, from any club C form a countable-language structure with ordinal order, successor, constant 0 and the least-C-point-above-x function. Any nonzero elementary initial segment is a limit, closed under the next-C-point function, hence a limit point of C and belongs to C. Therefore it witnesses S∩C nonempty.

Support: Kamensky, Set Theory, Theorem 1.4.7 and Exercise 1.4.8, pp.7–8 — https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### rem-square-and-club-guessing-orientation

Claim/conventions: A C-system assigns a club C_delta⊆delta to each limit index in its domain. Club guessing asks that every club D⊆kappa contain a C_delta (often for stationarily many delta). Square imposes coherence on initial segments, with bounded-order-type/no-thread qualifications specified on SET-9.

Dependencies: def-cofinality-strata-and-stationary-trace, def-normal-ordinal-function

Dependency rationale and proposed proof: Explain the distinction between local club data and global guessing/coherence demands. Do not assert existence from normality or Fodor. Formal square definitions and constructions are deferred to set-theoretic-trees-delta-systems-and-diamond. Strong club-guessing existence and PCF applications are outside this elementary orientation.

Support: Inamdar–Rinot, A club guessing toolbox I, v1, §1.1, Fact 1.2 clauses and coherence discussion pp.1,4–5; Definition 1.8 p.5 — https://arxiv.org/pdf/2207.03969

Limits/obligations: Orientation only; no theorem on square, guessing existence, or reflection consistency is a dependency.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### ex-club-tails-limits-and-diagonal

Claim/conventions: On kappa, every tail is club and the nonzero limit ordinals form a club. For C_xi={alpha:alpha>xi}, the full intersection is empty but the diagonal intersection is kappa.

Dependencies: thm-diagonal-intersection-of-clubs, def-club-subsets-of-ordinals

Dependency rationale and proposed proof: Compute each condition, including vacuous membership of 0 in the diagonal. A superset of a club need not be closed: add successors tending to a missing limit below its first tail point.

Support: Vasey, Math 145a lecture notes, Examples 14.2 and 14.10, pp.79–80 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### ex-stationary-cofinality-strata

Claim/conventions: At omega_1 the ordinals of cofinality omega form a club. At omega_2, E_omega and E_omega1 are disjoint stationary sets; neither contains a club.

Dependencies: thm-regular-cofinality-strata-are-stationary, cor-club-filter-not-an-ultrafilter

Dependency rationale and proposed proof: Distinguish the omega_1 computation from the higher-cardinal example. Stationary need not mean closed.

Support: Vasey, Math 145a lecture notes, Example 14.13(6)–(7), p.81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### cex-unbounded-domain-does-not-suffice-for-fodor

Claim/conventions: On the successor ordinals below kappa, f(alpha+1)=alpha is regressive and injective, but its domain is nonstationary.

Dependencies: thm-fodor-pressing-down, def-regressive-function-on-ordinals

Dependency rationale and proposed proof: Every fibre is a singleton, avoided by a tail. The domain is unbounded and disjoint from the limit club, so stationarity in Fodor is essential.

Support: Vasey, Math 145a lecture notes, Example 14.13(5), p.81; Theorem 15.2, p.82 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### ex-transfinite-subway-pressing-down

Claim/conventions: At stops below omega_1 only countably many passengers board, each passenger boards once, and at every stop with passengers waiting aboard at arrival at least one leaves. The stops with nobody aboard at arrival are unbounded below omega_1; no passenger stays aboard until omega_1.

Dependencies: thm-fodor-pressing-down, prop-basic-stationary-set-calculus

Dependency rationale and proposed proof: If after a bound every arrival has someone aboard, choose one departing passenger there. On stationary limit stops above the bound, its boarding stop is strictly earlier. Fodor fixes a boarding stop on a stationary (hence uncountable) set of departures, contradicting countably many who boarded there. An unbounded empty-arrival set forces every earlier boarder to leave. State arrival/departure ordering explicitly.

Support: Vasey, Math 145a lecture notes, §15.1, pp.82–84, transfinite subway example — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### ex-reflection-of-cofinality-omega-and-omega-one

Claim/conventions: E_omega^omega2 reflects at every alpha<omega_2 with cf(alpha)=omega_1. E_omega1^omega2 does not reflect at any alpha<omega_2 of uncountable cofinality.

Dependencies: def-cofinality-strata-and-stationary-trace, thm-regular-cofinality-strata-are-stationary

Dependency rationale and proposed proof: First clause is the strata theorem. Such alpha have cf alpha=omega_1; a continuous cofinal omega_1-sequence whose successor terms are successors has at all limit indices <omega_1 values of cofinality omega. Its range is club in alpha and avoids E_omega1. This supplies a direct nonreflection example, not an independence claim.

Support: Lietz, Set Theory lecture notes, Proposition 5.13 and Definition 5.15, pp.43–44 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Example 14.13(6), p.81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### fs-countable-intersections-of-clubs-are-always-club

Claim/conventions: False without the cofinality hypothesis: for theta=omega and C_n={m∈omega:m≥n}, each C_n is club but their intersection is empty. A singular-cardinal version uses theta=aleph_omega and tails starting at aleph_n.

Dependencies: def-club-subsets-of-ordinals, thm-small-intersections-of-clubs

Dependency rationale and proposed proof: Closure of these tails is immediate at every limit below theta. Explain why neither contradicts the proved theorem: countably many is not less than cf(theta)=omega.

Support: Lietz, Set Theory lecture notes, Definition 5.7 discussion of countable cofinality, p.42 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Math 145a lecture notes, Theorem 14.8, p.80 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

### ex-normal-function-fixed-points-at-omega-one

Claim/conventions: For f:omega_1→omega_1 given by alpha↦omega·alpha, the fixed points form a club; the omega iteration from 1 reaches omega^omega.

Dependencies: thm-normal-function-fixed-points-form-a-club, thm-clubs-and-normal-enumerations, def-ordinal-multiplication, def-ordinal-exponentiation, thm-ordinal-multiplication-associative-and-left-distributive

Dependency rationale and proposed proof: Use ordinal multiplication continuity and compute f^n(1)=omega^n for finite n; the supremum is countable. This illustrates why omega-length iteration remains within the regular uncountable ambient cardinal.

Support: Welch, Axiomatic Set Theory, Definition 2.11 and Lemma 2.13, pp.20–21 — https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf

Limits/obligations: All mathematical inputs identified; full prose proof belongs to step 5. See final validation for structural blockers.

Validation: item checkpoint only; batch gates recorded below after completion. Next: continue the dependency-ordered scaffold, then validate.

## Closure and source-audit refinements

The 68 item records comprise A/B counts 26/6 and 29/7. Neither A page needs a split; no content was removed to achieve the cap. Canonical IDs and published aliases were checked for collisions. Every manifest item has an explicit deps array. Definition-only hypotheses and elementary finite constructions are expanded where needed rather than being unmentioned assumptions.

The full general X≈Y squared clause of Caicedo's Hartogs lemma is explicitly out of scope; the load-bearing X≈X squared specialization is supplied with its own proof. The D-finite case and the two cheap bound corollaries are inline in lem-hartogs-iterated-powerset-bounds: for infinite D-finite X use h(X)=omega and n↦[X]^n; for finite X use finite counting. The triple bound and Cantor give the strict fourth-power bound. No representative relation is selected. The no-descending-power-chain corollary is a separately declined extension, not silently lost.

The finite-sequence diagonal is explicit: from an assumed injection G:P(X)→Seq(X) and the supplied well-order on infinite Y, form a canonical bijection H:Y→Seq(Y). Put D={y∈Y:H(y)∈ran(G) and y∉G^{-1}(H(y))}. If G(D) were in Seq(Y), its unique H-preimage would contradict the defining membership test. Choose the first coordinate of G(D) outside Y. Start at the supplied countable subset, so no finite-stage ambiguity occurs. This closes the uniformity obligation flagged by Carneiro.

ex-countable-choice-spent-on-enumerations also carries Jech's real-line corollary using the existing thm-r-uncountable; the manifest now explicitly records that dependency. The direct cofinality-trace computation is additionally checked against Rinot's author-hosted survey, p.26, paragraph after Theorem 4.11: https://papers.assafrinot.com/jensendiamond.pdf . Its Definition 3.8, p.22, verifies the square coherence terminology in rem-square-and-club-guessing-orientation. Those exact passages are harvested without treating adjacent forcing theorems or historical open questions as established here. The normal-function example explicitly depends on the published ordinal multiplication/exponentiation statements.

Source qualifications not to repeat as errors: Lietz Claim 5.18's displayed domain suppresses S-double-prime; our formula includes it and restricts alpha>xi. Vasey's club filter is the family of sets containing clubs. Williams's completeness argument uses intersections, and the least-normal-filter claim requires every tail. For Welch's fixed-point iteration, handle early stabilization separately instead of silently treating every iteration as strictly increasing. Our closure convention excludes 0 as a required limit point throughout.

Coverage low-yield warning: the weak-choice harvest includes existing definitions/theorems, multiple explicit subclauses of a model overview, and analytic applications whose destinations the design assigns elsewhere. These are individually justified, not a size-cap workaround. Alpha should review the exact dispositions; no permission or approval is solicited in this dispatch.

## Structural blocker retained for drift adjudication

The published def-dependent-choice is homed on compactness-in-metric-spaces. That page is outside the spec's requires closure for weak-choice-principles-and-sierpinskis-theorem. The four genuine direct dependencies are retained in def-multiple-and-dependent-multiple-choice, thm-choice-implies-dependent-implies-countable-choice, lem-starting-point-free-dependent-choice, and thm-dependent-choice-detects-non-well-orders. They resolve to an established statement but induce an undeclared page edge. Fixing that boundary requires a plan/rehome decision outside the task-authorised files. No duplicate DC definition is minted and no needed dependency is suppressed. The manifest overlay gate therefore must remain failing until the driver-owned drift/plan stage resolves it.

## Final validation receipts

Commands below ran against the completed scaffold; no published content was authored.

- `node tools/coverage-checklist.mjs research/frontier-33-batch-20.coverage.json --require-destination`: exit 0; 2 pages, 166 harvest rows, 0 errors, 1 low-yield warning. Exact warning: 29/86 weak-choice harvest results are counted as included by this gate (inline/already-published dispositions are separate). Review rationale is recorded above.
- `node tools/content-policy.mjs research/frontier-33-batch-20.pages.json --manifest-only`: exit 0; 68 scoped items, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-33-batch-*.pages.json --manifest-only`: exit 1; 920 scoped items, 2 errors. Both concern another owner's `thm-kernel-range-annihilator-identities`: missing `def-weak-star-topology` and `thm-bipolar-closure-for-linear-subspaces`. No other-batch artifact was edited.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0 with existing redundant-prerequisite warnings; the baseline has 844 pages with item lists and 511 empty planned pages. This baseline success does not validate the unspliced batch.
- Scratch-only overlay of these four pages into the current spec: `node tools/validate-plan.mjs /tmp/batch20-plan.json --repo /home/lazyinspirit/Projects/prestige-math-library`: exit 1; exactly one hard error, `undeclared-prereq` from the weak-choice A page to `compactness-in-metric-spaces`, as explained above. No unresolved IDs, ordering errors, cycles, or item-cap error was reported for this overlay.
- Additional canonical/published-alias collision check: none. Every item explicitly has `deps`; all four page contracts retain their original order, category, companion, and requires.

URL sweep first ran with its default 22000ms timeout, recovery enabled, on the initial 12 reader-facing URLs: 0 live, 12 failed, all `curl: (6) Could not resolve host`, zero recoveries. Two superseded original URLs were correctly excluded. After the final Rinot supplement, the final 13-URL sweep uses `--timeout-ms 1000` for bounded retries, again with `--recover --fail-on-dead`. This does not change the host-resolution problem. Do not interpret the tool's generic “re-sourcing is justified” text as an actual absence-of-archives finding: the shell cannot reach the archive service either. The successfully read web documents are retained rather than replaced to mask an environmental failure.

Readiness: BLOCKED. The authoritative plan boundary and the shell liveness gate remain unresolved, and whole-run policy has two unrelated errors. No approval, permission, source-gate pass, certification, or workflow transition is claimed. Next action belongs to the driver: adjudicate the DC home/prerequisite boundary; rerun liveness in an environment with DNS; route the unrelated manifest errors to their owner. The batch's mathematical scaffold, source harvest, exact conventions, and proof obligations are ready for that review; step-5 prose and independent proof review remain future work.

Final URL receipt: exit 1; {"failed": 13, "live": 0, "recovered": 0, "superseded": 2, "suspect": 0, "urls": 13}. Every reader-facing URL failed with curl code 6 (host DNS resolution). The detailed source URLs are the 13 coverage source records; no URL is marked verified by this gate. Report: `/tmp/batch20-url-liveness-final.json`. The unrelated policy errors are in batch 2.

Scaffold/evidence SHA-256 at final validation:

- `frontier-33-batch-20.pages.json`: `925071ab00c6bfc82fb4b336d46db93aa97338e0b9a34cd0abff17d412de8967`
- `frontier-33-batch-20.coverage.json`: `46cef2ecaad20fad5ff4c8555645ef7806c4068de4377776d2b29370eac6ff84`

## Reharvest-2-b20 source repair — 2026-09-07

Scope is restricted to the three batch-20 reharvest work rows. No manifest, plan, workflow, or published item changed.

### Weak-choice orphaned results

Dead/replaced treatment: Keremedis–Herrlich, *Powers of 2*, ResearchGate author upload, https://www.researchgate.net/publication/38354968_Powers_of_2. Its original official provenance remains the Project Euclid DOI PDF https://projecteuclid.org/journals/notre-dame-journal-of-formal-logic/volume-40/issue-3/Powers-of-2/10.1305/ndjfl/1022615615.pdf. The web reader exposed the author-upload text, including Definition 2.1 and the final sentence of the Corollary 3.6 proof, but ordinary liveness returned HTTP 403. The DOI endpoint was read as a one-line non-document response; the author home page listed the paper without a complete PDF; the earlier recovery record supplies no complete same-document archive. Thus the two orphaned claims were not discarded and are reharvested from different treatments. The coverage preserves the ResearchGate URL in each replacement's `original_url` and records the DOI provenance here.

- Marianne Morillon, *Synthèse*, https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf. Read §2.1 from the DC definition through Question 1, printed pp. 5–6/PDF pp. 4–5, and the opening AC(N)/ACfin(N) definitions in §2.2.1, printed p. 6/PDF p. 5. Its own harvested results and dispositions are: DC (already published); BC and Theorem 4, BC implies DMC (deferred to `choice-strength-in-baire-urysohn-stone-and-tychonoff`); DMC's pruned-tree form (included in `def-multiple-and-dependent-multiple-choice`); the Blass observation DMC plus ACfin(N) implies DC (included in `thm-dependent-choice-and-finite-multiple-selections`); AC(N) (already published); and ACfin(N) (included in `def-choice-for-pairs-and-countable-finite-choice`).
- alg-d, *On the axiom of dependent choice*, https://alg-d.com/math/ac/dc.pdf. Read the DMC definition, Proposition 6, and all of Proposition 7's proof, printed/PDF pp. 3–5. The relational finite-level DMC definition is included in `def-multiple-and-dependent-multiple-choice`; Proposition 6 (DC implies DMC) is inline in `thm-dependent-choice-and-finite-multiple-selections`; Proposition 7's singleton-start reduction is included in `lem-starting-point-free-dependent-choice`.

Claim and convention constraints are unchanged: in ZF, DMC uses nonempty finite levels and the forward-successor quantifier; AC_omega,fin selects from countably indexed nonempty finite families; the theorem remains DC iff DMC plus AC_omega,fin. The planned strategy remains: DC yields singleton levels; for the converse, use finite countable choice to order each level and recursively take an allowed least successor, with the fixed-start reduction; MC implications remain separate. No separation, Baire implication, or model-theoretic assertion was imported.

### Normal-function result

The assigned Welch source does have a complete same-document archive, so no different treatment was substituted. Coverage retains https://web.archive.org/web/20230326084819if_/https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf with its direct-source `original_url`. The current direct PDF and the archive were re-read at Definition 2.11 and the contiguous Lemma 2.12, Exercise 2.5, Lemma 2.13 passage, printed pp. 20–21/PDF pp. 23–24. Lemma 2.13's complete proof iterates a normal function from gamma, takes the omega supremum below the regular uncountable ambient cardinal, obtains a fixed point by continuity, and proves closure similarly. It backs `thm-normal-function-fixed-points-form-a-club`; the claim remains exactly that the fixed points of a normal f:kappa→kappa form a club for regular uncountable kappa. Its valid immutable-archive fetch stamp is retained; the reharvest stamp command correctly skips it and attempts only the new replacement URLs.

### Reharvest validators

- `node tools/coverage-checklist.mjs research/frontier-33-batch-20.coverage.json`: exit 0; 2 pages, 161 harvested results, 0 errors, and the existing weak-choice low-yield warning (31/81 scaffolded).
- `node tools/coverage-checklist.mjs research/frontier-33-batch-20.coverage.json --require-destination`: exit 0; 2 pages, 161 harvested results, 0 errors, and the same one low-yield warning.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-20.coverage.json --stamp --timeout-sec 45`: exit 1; no new stamps. The two replacement PDFs each failed only with `EAI_AGAIN`; the other 12 of 14 sources, including the retained immutable Welch archive, have verified stamps.
- `node tools/url-sweep.mjs --coverage research/frontier-33-batch-20.coverage.json --out /tmp/frontier-33-b20-liveness.json --concurrency 16 --timeout-ms 8000 --recover --fail-on-dead`: exit 1; 0/14 live, 14 DNS failures, no archive recovery. Every failed URL reports `curl: (6) Could not resolve host`, including the archive host, so the generic recovery text is not evidence that the same document lacks an archive.
- `node tools/source-backing.mjs --coverage research/frontier-33-batch-20.coverage.json --liveness /tmp/frontier-33-b20-liveness.json --require-verified`: exit 1; 52 authored results appear unbacked only because the liveness input contains zero live URLs. It explicitly lists the three repaired weak-choice claims and Welch lemma among that environmental failure; no claim was dropped to make the gate pass.

Current blocker/next action: rerun URL liveness and fetch stamping in an environment with DNS. Until then the verifier cannot create fresh fetch stamps for the two new source URLs or the retained archive, so this reharvest is not ready for certification despite the structural coverage gate passing.

Reharvest coverage SHA-256: `d25d08adaaf55d5c0b74030572f176484304f1553e0d85faf586da592da7457a`.

## Step-3 Alpha closure repair — 2026-09-07

The scaffold review confirmed the mathematical need recorded above and applied the licensed minimal repair: `compactness-in-metric-spaces` is now an explicit backward prerequisite of `weak-choice-principles-and-sierpinskis-theorem` in the batch manifest. Its published `def-dependent-choice` is used directly by four planned items: `def-multiple-and-dependent-multiple-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `lem-starting-point-free-dependent-choice`, and `thm-dependent-choice-detects-non-well-orders`. The prerequisite page is order 120 and the new A page is order 665, so the edge is backward and introduces no reading-order change or new page. No published item, coverage row, or canonical plan record was changed; Step 4 owns plan splicing.

Current source checks used Moschovakis §§1B–1C and Problems x1.3 for formal syntax and satisfaction; Marks §§6–7 for well-founded recursion, transitive closure, rank, and the cumulative hierarchy; Jech Chapter 2 and §9 for DC and the weak-choice implications; Carneiro together with Caicedo lectures 3–5 for the local-GCH/Specker chain; Lietz §5 for Solovay splitting; Kamensky Theorem 1.4.7 for elementary clubs; and the harvested Vasey/Williams sections for κ-completeness. The exact conventions and proof obligations remain those recorded item-by-item above.

The 31 refreshed decline rows were each compared with the current manifests, SET-1/4/6/8 design scopes, source locators, and current plan destinations. All 31 dispositions stand; none requires an owner decision. The current source receipt is `14/14` fetch-verified, so the earlier DNS/fetch-stamp blocker above is historical rather than current. The repaired four-pair plan overlay passes, and this scaffold is ready for authoring. Focused validation receipts are recorded in `research/frontier-33-alpha-h-step3-scaffold-review.md`.

## Step-3 fix pass — 2026-09-07

### H-1 — applied; published dependent-choice home is an explicit backward prerequisite

Disposition: applied and reconfirmed. The required scaffold record is the A-page
`weak-choice-principles-and-sierpinskis-theorem` in
`research/frontier-33-batch-20.pages.json`; its `requires` array is
`["cardinal-arithmetic-and-cofinality", "filters-and-ultrafilters",
"compactness-in-metric-spaces"]`. The first two entries preserve the SET-6
design prerequisites, while the third is the licensed repair. It was already
present from the Alpha closure repair, so this pass made no duplicate manifest
edit and did not alter the canonical plan.

Evidence: the published `items/def-dependent-choice.md` gives the prescribed-
start relation form of DC and is homed by
`library/topology/compactness-in-metric-spaces.md`. The four planned direct
uses are `def-multiple-and-dependent-multiple-choice`,
`thm-choice-implies-dependent-implies-countable-choice`,
`lem-starting-point-free-dependent-choice`, and
`thm-dependent-choice-detects-non-well-orders`. The published home has plan
order `120`, strictly before the weak-choice A page at `665`; thus the new page
edge is backward. The weak-choice source harvest retains Jech §2.4, pp.20–23
(https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf), including the DC
formulation and implication statement, as its independent source support.

Validation on the current bytes:

- `node tools/coverage-checklist.mjs research/frontier-33-batch-20.coverage.json --require-destination` exits `0`: 2 pages, 161 harvested results, 0 errors, and the reviewed weak-choice low-yield warning (31/81 scaffolded).
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-20.coverage.json` exits `0`: 14/14 sources fetch-verified.
- Whole-run `node tools/content-policy.mjs research/frontier-33-batch-*.pages.json --manifest-only` exits `0`: 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` exits `0`: the unspliced canonical baseline has no item cycle, forward reference, B-page dependency, or unresolved ID.
- `node tools/splice-plan.mjs --run frontier-33 --batch 20 --dry-run` correctly withholds exactly the new `compactness-in-metric-spaces` `requires` edge pending the engine-owned plan splice; it does not authorize a plan edit in this batch.
- The non-writing reconciliation rehearsal `node tools/splice-plan.mjs --run frontier-33 --batch 20 --dry-run --update --accept-requires` exits `0`, staging all 4 batch pages and 68 items with that sole `requires` reconciliation. It writes neither the plan nor a workflow receipt.

## Step-5 authoring

Authoring batch 20 only. All 68 assigned item files were absent at entry; no existing proof-contract file was present. Source text is being reread through the web reader; shell curl currently fails DNS and is not source evidence. All new content remains draft; no verification judge records are supplied. Per-item checkpoints below record the actual authored claims.

### Authored `def-choice-for-pairs-and-countable-finite-choice`

Claim/conventions: Work in ZF. $\mathrm{AC}_2$ says: for every set $I$ and family $(X_i)_{i\in I}$ of two-element sets there is $c:I\to\bigcup_{i\in I}X_i$ with $c(i)\in X_i$ for every $i$. The restriction to $I=\omega$ is $\mathrm{AC}_{\omega,2}$.

$\mathrm{AC}_{\omega,\mathrm{fin}}$ says the same for every $\omega$-indexed family of **nonempty finite** sets. No ordering of the members of those finite sets is supplied. The empty index family has the empty choice function. These principles restrict the families in countable choice and AC; an arbitrary family of pairs need not be countably indexed.

Sources read: Jech, The Axiom of Choice, §8.2, Theorem 8.3(ii), p.123 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; Morillon, Synthèse, §2.2.1, printed p.6 — https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf.

Dependencies: def-countable-choice, def-axiom-of-choice. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-multiple-and-dependent-multiple-choice`

Claim/conventions: Work in ZF. **Multiple choice** (MC) asserts that every set-indexed family $(X_i)_{i\in I}$ of nonempty sets admits a function $i\mapsto F_i$ with $\varnothing\ne F_i\subseteq X_i$ finite. **Countable multiple choice** (CMC) restricts this to $I=\omega$.

**Dependent multiple choice** (DMC) asserts: if $X\ne\varnothing$ and $R\subseteq X^2$ satisfies $\forall x\in X\,\exists y\in X\ (xRy)$, there is a sequence $(F_n)_{n<\omega}$ of nonempty finite subsets of $X$ such that

$$\forall n<\omega\ \forall x\in F_n\ \exists y\in F_{n+1}\ (xRy).$$

No initial $F_0$ is prescribed. The condition requires a successor for **every** point at each level. It does not require every point of the next level to have a predecessor.

Sources read: Jech, The Axiom of Choice, §9.1, p.133 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; alg-d, On dependent choice, DMC definition and Proposition 6, PDF p.4 — https://alg-d.com/math/ac/dc.pdf.

Dependencies: def-dependent-choice, def-choice-for-pairs-and-countable-finite-choice. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-choice-implies-dependent-implies-countable-choice`

Claim/conventions: In ZF,

$$\mathrm{AC}\Longrightarrow\mathrm{DC}\Longrightarrow\mathrm{AC}_\omega\Longrightarrow\mathrm{AC}_{\omega,\mathrm{fin}}\Longrightarrow\mathrm{AC}_{\omega,2},\qquad \mathrm{AC}\Longrightarrow\mathrm{AC}_2.$$

DC here includes a prescribed initial point.

Sources read: Jech, The Axiom of Choice, §2.4, pp.22–23 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: def-axiom-of-choice, def-dependent-choice, def-countable-choice, thm-recursion, lem-finite-choice, def-choice-for-pairs-and-countable-finite-choice. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-starting-point-free-dependent-choice`

Claim/conventions: In ZF, the following implies DC with prescribed initial point: every serial relation on a nonempty set has an omega path, without specification of its first term. Thus the two versions of DC are equivalent.

Sources read: Jech, The Axiom of Choice, §2.4, pp.22–23 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; alg-d, On dependent choice, Proposition 3, PDF p.2; Proposition 7, pp.4–5 — https://alg-d.com/math/ac/dc.pdf.

Dependencies: def-dependent-choice, lem-finite-choice, thm-recursion. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-dependent-choice-and-finite-multiple-selections`

Claim/conventions: In ZF,

$$\mathrm{DC}\ \Longleftrightarrow\ (\mathrm{DMC}\ \text{and}\ \mathrm{AC}_{\omega,\mathrm{fin}}).$$

Also $\mathrm{MC}\Rightarrow\mathrm{DMC}$ and $\mathrm{AC}_\omega\Rightarrow\mathrm{CMC}$.

Sources read: Morillon, Synthèse, §2.1 Question 1 and §2.2.1, p.6 — https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf; alg-d, On dependent choice, DMC definition and Proposition 6, PDF p.4 — https://alg-d.com/math/ac/dc.pdf; Jech, The Axiom of Choice, §9.1, p.133 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: def-multiple-and-dependent-multiple-choice, def-choice-for-pairs-and-countable-finite-choice, lem-starting-point-free-dependent-choice, thm-choice-implies-dependent-implies-countable-choice, thm-recursion. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-families-of-finite-character`

Claim/conventions: A nonempty family $\mathcal F\subseteq\mathcal P(X)$ has **finite character** if, for every $Y\subseteq X$,

$$Y\in\mathcal F\quad\Longleftrightarrow\quad (\forall u\subseteq Y\text{ finite})\ u\in\mathcal F.$$

The test includes $u=\varnothing$. A member $M$ is inclusion-maximal if no strictly larger subset of $X$ belongs to $\mathcal F$. **Tukey's finite-character principle** asserts that every nonempty family of finite character has an inclusion-maximal member.

Sources read: Jech, The Axiom of Choice, §2.1, Maximal Principle II, pp.9–10 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: . Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-tukey-finite-character-equivalent-to-choice`

Claim/conventions: Over ZF, Tukey’s finite-character principle is equivalent to AC.

Sources read: Jech, The Axiom of Choice, Theorem 2.1, pp.10–11 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: def-families-of-finite-character, thm-zorn, def-axiom-of-choice, lem-finite-choice. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-multiple-choice-produces-maximal-antichains`

Claim/conventions: In ZF, MC implies that every partially ordered set has an inclusion-maximal antichain, where an antichain consists of pairwise incomparable distinct elements.

Sources read: Jech, The Axiom of Choice, Theorem 9.1(a), pp.133–134 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: def-multiple-and-dependent-multiple-choice, thm-transfinite-recursion, thm-hartogs. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-antichains-well-order-linearly-ordered-sets`

Claim/conventions: In ZF, if every poset has a maximal antichain, every linearly ordered set is well-orderable. Consequently MC implies that $\mathcal P(\alpha)$ is well-orderable for every ordinal $\alpha$.

Sources read: Jech, The Axiom of Choice, Theorem 9.1(a), p.134 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: lem-multiple-choice-produces-maximal-antichains, thm-hartogs, thm-transfinite-recursion. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-bounded-hierarchy-for-the-multiple-choice-argument`

Claim/conventions: In ZF, define $V_0=\varnothing$, $V_{\beta+1}=\mathcal P(V_\beta)$ and $V_\lambda=\bigcup_{\beta<\lambda}V_\beta$ for nonzero limit $\lambda$. These stages exist, are transitive and increasing, and for every set $A$ there is a limit ordinal $\theta$ such that $A\subseteq V_\theta$.

Sources read: Jech, The Axiom of Choice, Theorem 9.1(b), p.134; bounded hierarchy used in the proof — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; Caicedo, Some choiceless results (5), powersets-of-ordinals theorem and hierarchy proof — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/.

Dependencies: thm-transfinite-recursion, def-axiom-of-foundation. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-multiple-choice-equivalent-to-choice-in-zf`

Claim/conventions: In ZF, if $\mathcal P(\alpha)$ is well-orderable for every ordinal $\alpha$, then AC holds. In particular $\mathrm{MC}\Longleftrightarrow\mathrm{AC}$. Foundation is part of the ambient theory.

Sources read: Jech, The Axiom of Choice, Theorem 9.1, pp.133–134 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; Caicedo, Some choiceless results (5), powersets-of-ordinals theorem, complete hierarchy proof — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/.

Dependencies: lem-antichains-well-order-linearly-ordered-sets, lem-bounded-hierarchy-for-the-multiple-choice-argument, thm-hartogs, thm-transfinite-recursion, def-axiom-of-choice. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-dedekind-infinite-set`

Claim/conventions: A set $X$ is **Dedekind-infinite** if some injection $f:X\to X$ is not surjective, equivalently if $X$ is equipotent with a proper subset. It is **Dedekind-finite** otherwise. “Infinite” alone means not bijective with a natural number; it does not include an assumption that $\omega$ embeds into $X$.

Sources read: Caicedo, Some choiceless results (3), §6 definition and §8 — https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/.

Dependencies: . Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-dedekind-infinite-iff-countable-subset`

Claim/conventions: In ZF the following are equivalent: $X$ is Dedekind-infinite; $\omega\preceq X$; and $X\sqcup\{*\}\approx X$. Equivalently, $X$ is Dedekind-finite iff $h(X)\le\omega$. Here $h$ is the Hartogs number.

Sources read: Caicedo, Some choiceless results (3), §8 first theorem and proof — https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/.

Dependencies: def-dedekind-infinite-set, thm-recursion, thm-hartogs. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-countable-choice-gives-countable-subsets`

Claim/conventions: In ZF plus $\mathrm{AC}_\omega$, every infinite set contains a countably infinite subset and is Dedekind-infinite.

Sources read: Jech, The Axiom of Choice, §2.4.1, p.20 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: def-countable-choice, thm-dedekind-infinite-iff-countable-subset, lem-finite-choice, thm-n-cross-n-countable. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `cor-countable-choice-and-omega-one-cofinality`

Claim/conventions: In ZF plus $\mathrm{AC}_\omega$, $\operatorname{cf}(\omega_1)=\omega_1$.

Sources read: Jech, The Axiom of Choice, §2.4.2, Corollary 2, p.20 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: thm-countable-union-of-countable, thm-cofinality-basics. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-dependent-choice-detects-non-well-orders`

Claim/conventions: In ZF plus DC, a linear order $(X,<)$ is a well-order iff it has no sequence $(x_n)_{n<\omega}$ with $x_{n+1}<x_n$ for every $n$.

Sources read: Jech, The Axiom of Choice, §2.4 final proposition, p.23 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: def-dependent-choice, def-well-order. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-local-gch-for-arbitrary-sets`

Claim/conventions: Write $X\preceq Y$ for an injection and $X\approx Y$ for a bijection; $X\prec Y$ means $X\preceq Y$ and $X\not\approx Y$. For an infinite set $X$, **local GCH at $X$**, denoted $\mathrm{CH}(X)$, means

$$\forall Y\ (X\preceq Y\preceq\mathcal P(X)\ \Longrightarrow\ Y\approx X\text{ or }Y\approx\mathcal P(X)).$$

**Arbitrary-set GCH** asserts this for every infinite set. No well-order of $X$ is implicit. We write $\operatorname{Seq}(X)=\bigcup_{n<\omega}{}^nX$ for finite sequences, including the empty sequence, and $h(X)$ for the Hartogs number. Disjoint union is denoted $\sqcup$.

Sources read: Carneiro, GCH implies AC, §§1–2, pp.1–2 — https://arxiv.org/pdf/1506.03533; Caicedo, Some choiceless results (5), opening Specker theorem — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/.

Dependencies: def-equinumerous, thm-cantor-powerset. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-canonical-sequence-coding-for-well-orders`

Claim/conventions: In ZF there is a uniform definable rule which, from any supplied well-order $<$ of an infinite set $Y$, produces a bijection $H:Y\to\operatorname{Seq}(Y)$. The construction selects no arbitrary bijection from $Y$ to its cardinal.

Sources read: Caicedo, Some choiceless results (3), §6 corrected canonical pairing lemma — https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/; Carneiro, §§3–3.1, pp.3–4 — https://arxiv.org/pdf/1506.03533.

Dependencies: thm-cantor-normal-form, thm-schroder-bernstein, thm-transfinite-recursion. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-halbeisen-shelah-no-powerset-sequence-injection`

Claim/conventions: In ZF, if $\omega\preceq X$, there is no injection $\mathcal P(X)\to\operatorname{Seq}(X)$.

Sources read: Caicedo, Some choiceless results (3), §6 theorem and complete diagonal proof — https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/; Carneiro, Theorem 2 and canonical-construction discussion, pp.3–4 — https://arxiv.org/pdf/1506.03533.

Dependencies: lem-canonical-sequence-coding-for-well-orders, thm-hartogs, thm-transfinite-recursion, thm-cantor-powerset. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-local-gch-absorbs-sums-and-squares`

Claim/conventions: In ZF, if $\omega\preceq X$ and $\mathrm{CH}(X)$, then

$$X\sqcup X\approx X\times X\approx X,\qquad \mathcal P(X)\times\mathcal P(X)\approx\mathcal P(X).$$

Sources read: Caicedo, Some choiceless results (5), Lemma 1 and proof — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/.

Dependencies: def-local-gch-for-arbitrary-sets, thm-halbeisen-shelah-no-powerset-sequence-injection, thm-dedekind-infinite-iff-countable-subset, thm-schroder-bernstein. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-hartogs-iterated-powerset-bounds`

Claim/conventions: In ZF, for every set $X$,

$$h(X)\preceq\mathcal P^3(X).$$

If $X^2\approx X$, or if $X$ is Dedekind-finite, then $h(X)\preceq\mathcal P^2(X)$. Also $h(X)\prec\mathcal P^4(X)$ and $h(X)<h(\mathcal P^3(X))$. Superscripts on $\mathcal P$ denote iteration.

Sources read: Caicedo, Some choiceless results (3), §7 Hartogs bounds, lemma and corollaries; §8 final corollary — https://caicedoteaching.wordpress.com/2009/01/27/580-some-choiceless-results-3/.

Dependencies: thm-hartogs, def-well-order, thm-schroder-bernstein, thm-dedekind-infinite-iff-countable-subset, lem-finite-choice. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-powerset-fibres-force-well-orderability`

Claim/conventions: In ZF, if $X\times\mathcal P(X)\preceq X\sqcup\alpha$ for an ordinal $\alpha$, then $X$ is well-orderable.

Sources read: Caicedo, Some choiceless results (4), §9 fibre lemma and proof (ordinal version) — https://caicedoteaching.wordpress.com/2009/01/29/580-some-choiceless-results-4/.

Dependencies: thm-cantor-powerset, def-well-order. Provenance: ai-altered statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-local-gch-hartogs-dichotomy`

Claim/conventions: Work in ZF. Suppose $\omega\preceq X$ and $\mathrm{CH}(X)$. If $h(X)\preceq\mathcal P(X)$, then $X$ is well-orderable and $\mathcal P(X)\approx h(X)$. Otherwise $h(\mathcal P(X))=h(X)$.

Sources read: Caicedo, Some choiceless results (5), Lemma 2 and subsequent Hartogs equality — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/.

Dependencies: lem-local-gch-absorbs-sums-and-squares, lem-powerset-fibres-force-well-orderability, thm-hartogs, thm-hessenberg, thm-schroder-bernstein. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-specker-two-local-gch`

Claim/conventions: In ZF, if $\omega\preceq X$, $\mathrm{CH}(X)$ and $\mathrm{CH}(\mathcal P(X))$, then $\mathcal P(X)\approx h(X)$. In particular $X$ is well-orderable.

Sources read: Caicedo, Some choiceless results (5), Specker theorem and complete proof — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/; Carneiro, Theorem 1, p.2 — https://arxiv.org/pdf/1506.03533.

Dependencies: lem-local-gch-hartogs-dichotomy, lem-hartogs-iterated-powerset-bounds, lem-local-gch-absorbs-sums-and-squares. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-sierpinski-arbitrary-set-gch-implies-choice`

Claim/conventions: Over ZF, arbitrary-set GCH implies the Axiom of Choice.

Sources read: Caicedo, Some choiceless results (5), GCH consequence of Specker — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/; Carneiro, §2, local-to-global reduction, pp.1–2 — https://arxiv.org/pdf/1506.03533.

Dependencies: def-local-gch-for-arbitrary-sets, thm-specker-two-local-gch, def-axiom-of-choice. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `rem-weak-choice-nonimplication-destinations`

Claim/conventions: The following are **recorded relative-consistency separations, not proved here**. Conditional on the consistency of ZF, there are models of ZF satisfying:

- DC and failure of choice for an arbitrary family of pairs, hence failure of AC (Jech, Theorem 8.3 with the regular parameter $\omega_1$).
- $\mathrm{AC}_\omega$ and failure of DC (Jech, §8.2 overview of Theorem 8.12, with the countable parameter).
- Choice for every family of nonempty finite sets, but a countable family of countable nonempty sets without a choice function (Jech, §7.5, Problem 12). In particular $\mathrm{AC}_2$ need not imply $\mathrm{AC}_\omega$.

The model construction and transfer arguments belong to the planned page *Permutation Models and Transfer to ZF*; basic symmetric examples belong to *Symmetric Extensions and Basic Choice-Failure Models*. The proved positive implications on this page do not prove these separations. Boolean prime-ideal and ultrafilter equivalences belong to *Boolean Algebras, Stone Duality, and the Prime Ideal Theorem*.

Sources read: Jech, The Axiom of Choice, §8.2 overview p.122, Theorem 8.3 p.123; §7.5 Problem 12 p.115 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: thm-choice-implies-dependent-implies-countable-choice, thm-multiple-choice-equivalent-to-choice-in-zf, thm-dependent-choice-and-finite-multiple-selections. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `ex-weak-choice-implication-map`

Claim/conventions: In ZF the proved arrows are $\mathrm{AC}\iff\mathrm{MC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega\Rightarrow\mathrm{AC}_{\omega,\mathrm{fin}}\Rightarrow\mathrm{AC}_{\omega,2}$, together with $\mathrm{AC}\Rightarrow\mathrm{AC}_2$ and $\mathrm{DC}\iff(\mathrm{DMC}\text{ and }\mathrm{AC}_{\omega,\mathrm{fin}})$. The branch $\mathrm{AC}_2$ concerns arbitrary index sets.

Sources read: Jech, The Axiom of Choice, §§2.4, 8.2, 9.1 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf; Morillon, §2.1 Question 1, p.6 — https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf.

Dependencies: thm-choice-implies-dependent-implies-countable-choice, thm-dependent-choice-and-finite-multiple-selections, thm-multiple-choice-equivalent-to-choice-in-zf. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `ex-countable-choice-spent-on-enumerations`

Claim/conventions: For an omega family $(A_n)$ of at most countable sets, a **supplied family of enumerations** of the nonempty $A_n$ suffices in ZF to enumerate $\bigcup_nA_n$. Countable choice supplies those enumerations if only individual countability is given. In ZF plus countable choice, the real line cannot be a countable union of countable sets.

Sources read: Jech, The Axiom of Choice, §2.4.2 and Corollary 1, pp.20–21 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: thm-countable-union-of-countable, def-countable-choice, thm-r-uncountable, thm-n-cross-n-countable. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `ex-dependent-choice-partial-tuples`

Claim/conventions: For nonempty $(X_n)_{n<\omega}$, the extension relation on finite choice tuples produces a complete choice function from a path starting at the empty tuple. For a serial relation $R$ and prescribed $a$, finite $R$-paths starting at $a$ recover that prescribed start even if the path-of-paths starts later.

Sources read: Jech, §2.4 dependent-choice proposition, pp.22–23 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: thm-choice-implies-dependent-implies-countable-choice, lem-starting-point-free-dependent-choice. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `ex-finite-character-partial-choice-graphs`

Claim/conventions: For a family $(X_i)_{i\in I}$ of nonempty sets, graphs of partial choice functions form a family of finite character in $I\times\bigcup_iX_i$. Its maximal members are exactly total choice functions.

Sources read: Jech, Theorem 2.1, Tukey implies AC, p.11 — https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf.

Dependencies: thm-tukey-finite-character-equivalent-to-choice. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `ex-local-gch-at-omega-and-its-power-set`

Claim/conventions: In ZF, $\mathrm{CH}(\omega)$ together with $\mathrm{CH}(\mathcal P(\omega))$ implies $\mathcal P(\omega)\approx\omega_1$. These are two separate local hypotheses.

Sources read: Carneiro, Theorem 1 and local-to-global discussion, p.2 — https://arxiv.org/pdf/1506.03533.

Dependencies: thm-specker-two-local-gch, thm-hartogs, thm-omega-one-is-the-least-uncountable-ordinal. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `fs-gch-on-alephs-is-a-choice-free-formulation`

Claim/conventions: False claim: “The equation $2^{\aleph_\alpha}=\aleph_{\alpha+1}$ says only that there is no intermediate size; it makes no assertion that $\mathcal P(\aleph_\alpha)$ can be well-ordered.” Here the equation is interpreted literally as equinumerosity with the indicated initial ordinal.

Sources read: Carneiro, §§1–2, comparison and well-orderability conventions — https://arxiv.org/pdf/1506.03533; Caicedo, opening Specker theorem and powersets-of-ordinals theorem — https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/.

Dependencies: def-local-gch-for-arbitrary-sets, thm-sierpinski-arbitrary-set-gch-implies-choice. Provenance: ai-altered statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-club-subsets-of-ordinals`

Claim/conventions: For a nonzero limit ordinal $\theta$, a subset $C\subseteq\theta$ is **unbounded** if $\forall\beta<\theta\,\exists\gamma\in C\ (\beta<\gamma)$. Put

$$\operatorname{acc}_\theta(C)=\{\delta<\theta:\delta\text{ is a nonzero limit ordinal and }\sup(C\cap\delta)=\delta\}.$$

It is **closed** if $\operatorname{acc}_\theta(C)\subseteq C$, and **club** if closed and unbounded. Neither $0$ nor $\theta$ is required to belong to a club. We omit the subscript on acc when the ambient ordinal is clear. The main setting on this page is ZFC and a regular uncountable cardinal $\kappa$; some lemmas explicitly allow $\theta$ with merely uncountable cofinality.

Sources read: Lietz, §5.1 Definition 5.1, printed p.39 (PDF p.40) — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, §14 Definition 14.1, p.79 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: def-cofinality. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-closure-points-on-regular-cardinals`

Claim/conventions: Work in ZFC. If $f:\kappa\to\kappa$ and $\kappa$ is regular uncountable, then $C_f=\{\alpha<\kappa:f[\alpha]\subseteq\alpha\}$ is club. The same conclusion holds for a nondecreasing $f:\theta\to\theta$ whenever $\operatorname{cf}(\theta)>\omega$.

Sources read: Lietz, Lemma 5.2, Claim 5.3 and Lemma 5.4, pp.39–40 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf.

Dependencies: def-club-subsets-of-ordinals, thm-cofinality-basics, thm-recursion. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-limit-points-of-unbounded-sets`

Claim/conventions: In ZFC, if $\operatorname{cf}(\theta)>\omega$ and $X\subseteq\theta$ is unbounded, then $\operatorname{acc}_\theta(X)$ is club.

Sources read: Lietz, Corollary 5.5, p.40 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf.

Dependencies: lem-closure-points-on-regular-cardinals. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-small-intersections-of-clubs`

Claim/conventions: In ZFC, let $\operatorname{cf}(\theta)>\omega$ and let $(C_i)_{i<\mu}$ be clubs of $\theta$, with $\mu<\operatorname{cf}(\theta)$. Then $\bigcap_{i<\mu}C_i$ is club, taking the empty intersection to be $\theta$. In particular fewer than $\kappa$ clubs intersect to a club on regular uncountable $\kappa$.

Sources read: Lietz, Lemma 5.6, pp.40–41 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Theorems 14.5 and 14.8, pp.80–81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: lem-closure-points-on-regular-cardinals, def-club-subsets-of-ordinals, thm-cofinality-basics. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-club-filter-and-nonstationary-ideal`

Claim/conventions: In ZFC, assume $\operatorname{cf}(\theta)>\omega$. The **club filter** is $\mathcal C_\theta=\{A\subseteq\theta:\exists C\subseteq A\ (C\text{ club in }\theta)\}$. A set $S\subseteq\theta$ is **stationary** if it meets every club. It is **nonstationary** if disjoint from some club; these sets form $\mathrm{NS}_\theta$.

A proper filter contains the ambient set, excludes the empty set, is upward closed, and is closed under finite intersections. These hold for $\mathcal C_\theta$: the ambient set is club, clubs are nonempty, and the small-intersection theorem gives a club inside each finite intersection. In fact it is closed under intersections of fewer than $\operatorname{cf}(\theta)$ members: in ZFC choose a witnessing club for each member, then intersect them.

An ideal contains the empty set, is downward closed and closed under finite unions. Here $A\in\mathrm{NS}_\theta$ iff $\theta\setminus A\in\mathcal C_\theta$, so complements give these axioms and closure under unions of fewer than $\operatorname{cf}(\theta)$ members. The filter contains all **supersets of clubs**, which need not themselves be closed.

Sources read: Lietz, Definition 5.7 and Lemma 5.6, pp.40–41 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Definitions 14.6 and 14.12; Corollary 14.7, pp.80–81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: thm-small-intersections-of-clubs. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `prop-basic-stationary-set-calculus`

Claim/conventions: In ZFC, for $\operatorname{cf}(\theta)>\omega$: stationary subsets of $\theta$ are unbounded; every club is stationary; supersets of stationary sets are stationary; the intersection of a stationary set with a club is stationary; and a union of fewer than $\operatorname{cf}(\theta)$ nonstationary sets is nonstationary.

Sources read: Vasey, Example 14.13(1)–(5), p.81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf; Lietz, Lemma 5.6 and Definition 5.7 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf.

Dependencies: def-club-filter-and-nonstationary-ideal. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-diagonal-club-intersection`

Claim/conventions: For $(A_\xi)_{\xi<\kappa}$ with $A_\xi\subseteq\kappa$, define

$$\mathop{\triangle}_{\xi<\kappa} A_\xi=\{\alpha<\kappa:\forall\xi<\alpha\ (\alpha\in A_\xi)\},\qquad \mathop{\nabla}_{\xi<\kappa} A_\xi=\{\alpha<\kappa:\exists\xi<\alpha\ (\alpha\in A_\xi)\}.$$

These are the **diagonal intersection** and **diagonal union**. Complementation exchanges them, with each $A_\xi$ replaced by its complement. Zero always lies in the diagonal intersection and never in the diagonal union, by vacuity.

Sources read: Lietz, Definition 5.8, p.41 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Definition 14.9, p.81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: def-club-subsets-of-ordinals. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-diagonal-intersection-of-clubs`

Claim/conventions: In ZFC, if $\kappa$ is regular uncountable and $(C_\xi)_{\xi<\kappa}$ is a sequence of clubs of $\kappa$, then $D=\mathop{\triangle}_{\xi<\kappa}C_\xi$ is club.

Sources read: Lietz, Theorem 5.9, p.41 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Theorem 14.11, p.81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: def-diagonal-club-intersection, thm-small-intersections-of-clubs, lem-closure-points-on-regular-cardinals. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-regressive-function-on-ordinals`

Claim/conventions: For $S\subseteq\kappa\setminus\{0\}$, a map $f:S\to\kappa$ is **regressive** if $f(\alpha)<\alpha$ for every $\alpha\in S$. If an original domain contains zero, regression is asserted only after explicitly restricting to its complement: no ordinal is less than zero.

Sources read: Lietz, Definition 5.10, p.41 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Definition 15.1, p.82 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: . Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-fodor-pressing-down`

Claim/conventions: In ZFC, let $\kappa$ be regular uncountable, let $S\subseteq\kappa\setminus\{0\}$ be stationary, and let $f:S\to\kappa$ be regressive. Then some fibre $\{\alpha\in S:f(\alpha)=\xi\}$ is stationary.

Sources read: Lietz, Lemma 5.11, pp.41–42 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Theorem 15.2, p.82 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: def-regressive-function-on-ordinals, def-club-filter-and-nonstationary-ideal, thm-diagonal-intersection-of-clubs, prop-basic-stationary-set-calculus. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-normal-filter-on-a-regular-cardinal`

Claim/conventions: Let $\kappa$ be regular uncountable. A **proper tail-containing filter** $F\subseteq\mathcal P(\kappa)$ contains $\kappa$, excludes $\varnothing$, is upward closed, is closed under finite intersections, and contains every $[\beta,\kappa)$, $\beta<\kappa$. It is **normal** if the diagonal intersection of every $\kappa$-sequence of its members belongs to $F$.

A set $S$ is **$F$-positive** if $\kappa\setminus S\notin F$, equivalently if it meets every member of $F$: disjointness from $A\in F$ puts $A\subseteq\kappa\setminus S$ in the filter by upward closure, and the converse uses that complement itself. The **dual ideal** consists of sets whose complements belong to $F$; complementation proves its downward and finite-union closure. Positive need not mean membership in the filter. **$\kappa$-complete** means closed under intersections of fewer than $\kappa$ members.

Sources read: Williams, §4 Definitions 33–34, Exercise 38 and positive-set terminology, pp.11–12 — https://juliakw.net/teaching/2019/math655/part1.1.pdf.

Dependencies: def-diagonal-club-intersection, def-club-filter-and-nonstationary-ideal. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-normality-and-positive-pressing-down`

Claim/conventions: In ZFC, a proper tail-containing filter $F$ on a regular uncountable $\kappa$ is normal iff every regressive map on an $F$-positive $S\subseteq\kappa\setminus\{0\}$ has an $F$-positive fibre. Such a normal filter is $\kappa$-complete.

Sources read: Williams, Propositions 35 and 39, pp.11–12; Corollary 36 qualification — https://juliakw.net/teaching/2019/math655/part1.1.pdf.

Dependencies: def-normal-filter-on-a-regular-cardinal, def-regressive-function-on-ordinals. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `cor-club-filter-is-least-normal-tail-filter`

Claim/conventions: In ZFC, the club filter on regular uncountable $\kappa$ is normal and is contained in every proper normal filter on $\kappa$ that contains all tails.

Sources read: Williams, Exercise 37 and Exercise 40, pp.11–12, with explicit tail hypothesis — https://juliakw.net/teaching/2019/math655/part1.1.pdf.

Dependencies: thm-diagonal-intersection-of-clubs, thm-normality-and-positive-pressing-down, def-club-filter-and-nonstationary-ideal. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-normal-ordinal-function`

Claim/conventions: For a regular uncountable cardinal $\kappa$, a function $f:\kappa\to\kappa$ is **normal** if it is strictly increasing and, for each nonzero limit $\lambda<\kappa$,

$$f(\lambda)=\sup_{\xi<\lambda}f(\xi).$$

There is no requirement that $f(0)=0$. The analogous notation for a class function on all ordinals uses the same two clauses, but the theorems on this page have the set domain $\kappa$.

Sources read: Vasey, Definition 14.3, p.80 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf; Welch, Definition 2.11, printed p.20; live original reread — https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf.

Dependencies: def-club-subsets-of-ordinals. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-clubs-and-normal-enumerations`

Claim/conventions: In ZFC, any unbounded $C\subseteq\kappa$, with $\kappa$ regular uncountable, has a unique increasing enumeration $e:\kappa\to C$. The set $C$ is closed iff this enumeration is normal. Consequently the range of a strictly increasing $f:\kappa\to\kappa$ is club iff $f$ is normal.

Sources read: Vasey, Lemma 14.4, p.80 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf; Welch, Lemma 2.12 and Exercise 2.5, p.20 — https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf.

Dependencies: def-normal-ordinal-function, thm-cofinality-basics. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-normal-function-fixed-points-form-a-club`

Claim/conventions: In ZFC, if $f:\kappa\to\kappa$ is normal and $\kappa$ is regular uncountable, then $\{\alpha<\kappa:f(\alpha)=\alpha\}$ is club.

Sources read: Welch, Lemma 2.13, p.21; live original reread — https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf.

Dependencies: def-normal-ordinal-function, thm-cofinality-basics, thm-recursion. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-cofinality-strata-and-stationary-trace`

Claim/conventions: For an ordinal $\theta$ and an infinite regular cardinal $\lambda$, write $E^\theta_\lambda=\{\alpha<\theta:\operatorname{cf}(\alpha)=\lambda\}$. For $S\subseteq\kappa$, define

$$\operatorname{Tr}(S)=\{\alpha<\kappa:\operatorname{cf}(\alpha)>\omega\text{ and }S\cap\alpha\text{ is stationary in }\alpha\}.$$

We say $S$ **reflects at** $\alpha$ when $\alpha\in\operatorname{Tr}(S)$, and is **nonreflecting** when its trace is empty. Stationarity in $\alpha$ uses clubs in that ordinal; it does not require $\alpha$ to be a cardinal, but the trace definition restricts its cofinality to be uncountable.

Sources read: Lietz, Definitions 5.12 and 5.15, pp.42–43 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Definition 15.6, p.85 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: def-club-filter-and-nonstationary-ideal, def-cofinality. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-regular-cofinality-strata-are-stationary`

Claim/conventions: In ZFC, if $\lambda$ is an infinite regular cardinal with $\lambda<\operatorname{cf}(\theta)$, then $E^\theta_\lambda$ is stationary in $\theta$.

Sources read: Lietz, Proposition 5.13, p.42 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Example 14.13(6), p.82 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: def-cofinality-strata-and-stationary-trace, thm-cofinality-basics, thm-transfinite-recursion. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-stationary-set-minus-its-trace`

Claim/conventions: In ZFC, if $S\subseteq\kappa$ is stationary and $\kappa$ is regular uncountable, then $S\setminus\operatorname{Tr}(S)$ is stationary.

Sources read: Lietz, Lemma 5.16, p.43 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf.

Dependencies: def-cofinality-strata-and-stationary-trace, lem-limit-points-of-unbounded-sets, prop-basic-stationary-set-calculus. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-unbounded-stationary-fibres-yield-a-partition`

Claim/conventions: In ZFC let $\kappa$ be regular uncountable and $g:S\to\kappa$ be regressive, with stationary $S\subseteq\kappa\setminus\{0\}$. If $\{\alpha\in S:g(\alpha)\ge\beta\}$ is stationary for every $\beta<\kappa$, then $S$ has a partition into $\kappa$ stationary sets.

Sources read: Lietz, Theorem 5.14 proof, case 1 after Claim 5.17, p.44 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf.

Dependencies: thm-fodor-pressing-down, prop-basic-stationary-set-calculus. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-splitting-stationary-sets-of-fixed-cofinality`

Claim/conventions: In ZFC, if $\kappa$ is regular uncountable, $\lambda<\kappa$ is infinite regular, and $S\subseteq E^\kappa_\lambda$ is stationary, then $S$ has a partition into $\kappa$ stationary sets.

Sources read: Lietz, Claim 5.17 and first splitting case, p.44 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Lemmas 15.5–15.7, pp.84–85 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: thm-fodor-pressing-down, def-cofinality-strata-and-stationary-trace, thm-small-intersections-of-clubs, lem-unbounded-stationary-fibres-yield-a-partition. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-splitting-stationary-regular-cardinals`

Claim/conventions: In ZFC, if $\kappa$ is regular uncountable and $S$ is a stationary subset of the regular uncountable cardinals below $\kappa$, then $S$ has a partition into $\kappa$ stationary sets.

Sources read: Lietz, Theorem 5.14 case 2 and Claim 5.18, pp.44–45, with the domain restricted to the stationary set — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf.

Dependencies: lem-stationary-set-minus-its-trace, thm-diagonal-intersection-of-clubs, lem-closure-points-on-regular-cardinals, thm-clubs-and-normal-enumerations, lem-unbounded-stationary-fibres-yield-a-partition. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-solovay-stationary-partition`

Claim/conventions: In ZFC, every stationary subset $S$ of a regular uncountable cardinal $\kappa$ is the disjoint union of $\kappa$ stationary sets.

Sources read: Lietz, Theorem 5.14 and complete two-case proof, pp.43–45 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Fact 15.3 and successor-cardinal proof after Lemma 15.7, pp.83–85 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: lem-splitting-stationary-sets-of-fixed-cofinality, lem-splitting-stationary-regular-cardinals, thm-fodor-pressing-down, prop-basic-stationary-set-calculus. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `cor-club-filter-not-an-ultrafilter`

Claim/conventions: In ZFC, on every regular uncountable $\kappa$ there is a stationary costationary subset; consequently its club filter is not an ultrafilter (it does not decide every subset by membership or complement membership).

Sources read: Vasey, Corollary 15.4 and proof, pp.83–84 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: thm-solovay-stationary-partition, def-club-filter-and-nonstationary-ideal. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `def-stationary-antichains-modulo-nonstationary`

Claim/conventions: In ZFC, for regular uncountable $\kappa$, a **stationary antichain modulo $\mathrm{NS}_\kappa$** is a family $\mathcal A$ of stationary subsets of $\kappa$ such that $S\cap T$ is nonstationary whenever $S,T\in\mathcal A$ are distinct. Write $S=_{\mathrm{NS}}T$ when $S\mathbin{\triangle}T$ is nonstationary, where $\triangle$ here denotes symmetric difference, not diagonal intersection. This is an equivalence relation: transitivity follows from $S\triangle U\subseteq(S\triangle T)\cup(T\triangle U)$ and the ideal axioms.

An actually disjoint family of stationary sets is in particular such an antichain. Questions about bounds beyond the $\kappa$-sized partitions just constructed belong to the later large-cardinal and ideal theory; no saturation or consistency theorem is asserted here.

Sources read: Lietz, Definition 5.19 and following orientation, p.45 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf.

Dependencies: def-club-filter-and-nonstationary-ideal. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `lem-skolem-witness-closure-on-a-cardinal`

Claim/conventions: Work in ZFC. Let $\kappa$ be regular uncountable and $M$ a structure with universe $\kappa$ in a finitary first-order language $L$ of size less than $\kappa$. There is a family $\mathcal H$ of fewer than $\kappa$ functions of finite arity on $\kappa$ such that every nonzero $\alpha<\kappa$ closed under $\mathcal H$ is an elementary substructure of $M$ with the restricted interpretations.

Here a language has relation and function symbols of assigned finite arities (constants are arity zero). Terms are finite expressions made from variables and function symbols; formulas are finite expressions built from equality and relation atoms using negation, conjunction and existential quantification. Other connectives and universal quantifiers are abbreviations. A structure interprets each symbol on its universe. Terms are evaluated recursively; atoms test the resulting equality or relation, negation and conjunction have their usual truth conditions, and $\exists x\,\varphi$ is true iff some universe element makes $\varphi$ true. An elementary substructure is a substructure for which all formulas with parameters from its universe agree with the larger structure.

Sources read: Kamensky, Theorem 1.4.7 proof, p.7, expanded Skolem witness argument; Example 3.1.2, p.17 — https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf.

Dependencies: thm-hessenberg, thm-recursion. Provenance: ai-altered statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-elementary-initial-segments-form-a-club`

Claim/conventions: In ZFC, if $\kappa$ is regular uncountable and $M$ has universe $\kappa$ in a finitary language of size less than $\kappa$, then

$$E_M=\{0<\alpha<\kappa:M\restriction\alpha\text{ is an elementary substructure of }M\}$$

is club in $\kappa$.

Sources read: Kamensky, Theorem 1.4.7 with complete proof, p.7 — https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf.

Dependencies: lem-skolem-witness-closure-on-a-cardinal, lem-closure-points-on-regular-cardinals, thm-cofinality-basics. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `thm-stationarity-via-elementary-initial-segments`

Claim/conventions: In ZFC, for regular uncountable $\kappa$ and $S\subseteq\kappa$, the following are equivalent: (i) $S$ is stationary; (ii) every structure on universe $\kappa$ in a finitary language of size less than $\kappa$ has a nonzero $\alpha\in S$ whose restriction is elementary; (iii) the same assertion restricted to countable languages.

Sources read: Kamensky, Theorem 1.4.7 and Exercise 1.4.8, pp.7–8, expanded club coding — https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf.

Dependencies: thm-elementary-initial-segments-form-a-club, def-club-filter-and-nonstationary-ideal. Provenance: ai-altered statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `rem-square-and-club-guessing-orientation`

Claim/conventions: For a set $S$ of nonzero limit ordinals below a regular uncountable $\kappa$, a $C$-sequence on $S$ assigns a club $C_\delta\subseteq\delta$ to each $\delta\in S$. One possible **club-guessing requirement** is that for every club $D\subseteq\kappa$, the set $\{\delta\in S:C_\delta\subseteq D\}$ is stationary. This describes a requirement, not an existence assertion.

A typical **coherence requirement** is $C_\beta=C_\delta\cap\beta$ whenever $\beta$ is a nonzero limit point of $C_\delta$ (and the indices in question are in the domain). Square principles combine coherence with precisely specified domain, order-type, width, or no-thread conditions. A thread means a club $D$ whose initial segments agree with the prescribed clubs at its limit points. These qualifications are part of the principle; coherence alone is not a square principle. The later trees, delta-systems, and diamond track supplies the formal versions. No square or club-guessing existence theorem is used here.

Sources read: Inamdar–Rinot, Fact 1.2 and Definition 1.8, pp.1,5; coherence discussion pp.4–5 — https://arxiv.org/pdf/2207.03969; Rinot, Definition 3.8, p.22 — https://papers.assafrinot.com/jensendiamond.pdf.

Dependencies: def-cofinality-strata-and-stationary-trace, def-normal-ordinal-function. Provenance: literature-derived statement; definition/orientation without a proof obligation. Validation: written; focused batch checks pending. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `ex-club-tails-limits-and-diagonal`

Claim/conventions: Let $\kappa$ be regular uncountable. Each strict tail $C_\xi=\{\alpha<\kappa:\xi<\alpha\}$ and the set of nonzero limit ordinals are club. Nevertheless $\bigcap_{\xi<\kappa}C_\xi=\varnothing$, while $\mathop{\triangle}_{\xi<\kappa}C_\xi=\kappa$. A superset of a club need not be closed.

Sources read: Vasey, Examples 14.2 and 14.10, pp.79–81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: thm-diagonal-intersection-of-clubs, def-club-subsets-of-ordinals. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `ex-stationary-cofinality-strata`

Claim/conventions: In ZFC, $E^{\omega_1}_\omega$ is club, whereas $E^{\omega_2}_\omega$ and $E^{\omega_2}_{\omega_1}$ are disjoint stationary sets, neither containing a club.

Sources read: Vasey, Example 14.13(6) and Corollary 15.4, pp.82–84 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: thm-regular-cofinality-strata-are-stationary, cor-club-filter-not-an-ultrafilter. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `cex-unbounded-domain-does-not-suffice-for-fodor`

Claim/conventions: The assertion that every regressive map on an unbounded subset of a regular uncountable $\kappa$ has a stationary constant fibre is false. Let $S=\{\alpha+1:\alpha<\kappa\}$ and $f(\alpha+1)=\alpha$.

Sources read: Williams, Example 40, p.12 — https://juliakw.net/teaching/2019/math655/part1.1.pdf.

Dependencies: thm-fodor-pressing-down, def-regressive-function-on-ordinals. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `ex-transfinite-subway-pressing-down`

Claim/conventions: In ZFC a train stops at every $\alpha<\omega_1$. At most countably many passengers board at each stop; a passenger boards once and stays until disembarking. At every stop with a nonempty arrival, at least one passenger disembarks before boarding occurs. Then the empty-arrival stops contain a club, and no passenger remains aboard through all stops after boarding below $\omega_1$.

Sources read: Vasey, Example 15.2, pp.82–83 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: thm-fodor-pressing-down, prop-basic-stationary-set-calculus. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `ex-reflection-of-cofinality-omega-and-omega-one`

Claim/conventions: In ZFC, with trace restricted to ordinals of uncountable cofinality,
$$\operatorname{Tr}(E^{\omega_2}_\omega)=E^{\omega_2}_{\omega_1},\qquad \operatorname{Tr}(E^{\omega_2}_{\omega_1})=\varnothing.$$
In particular the cofinality-omega stratum reflects at every ordinal below omega-two of cofinality omega-one, while the cofinality-omega-one stratum is nonreflecting.

Sources read: Vasey, Definition 15.6 and Example 15.7, p.85 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf; Rinot, observation after Theorem 4.11 and before Question 22, p.26; expanded elementary instance — https://papers.assafrinot.com/jensendiamond.pdf.

Dependencies: def-cofinality-strata-and-stationary-trace, thm-regular-cofinality-strata-are-stationary. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `fs-countable-intersections-of-clubs-are-always-club`

Claim/conventions: False without a cofinality restriction: for every limit ordinal $\theta$, a countable intersection of clubs in $\theta$ is club.

Sources read: Lietz, Definition 5.7 and following completeness argument, pp.40–41 — https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf; Vasey, Fact 14.8, pp.80–81 — https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf.

Dependencies: def-club-subsets-of-ordinals, thm-small-intersections-of-clubs. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Authored `ex-normal-function-fixed-points-at-omega-one`

Claim/conventions: The map $f:\omega_1\to\omega_1$, $f(\alpha)=\omega\cdot\alpha$, is normal and its fixed points form a club. Iterating f from 1 gives $1,\omega,\omega^2,\ldots$, whose supremum $\omega^\omega$ is a countable fixed point. The fixed-point club has a normal increasing enumeration.

Sources read: Welch, Lemmas 2.12–2.13 and Exercise 2.5, pp.20–21 (live original reread) — https://web.archive.org/web/20230326084819if_/https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf.

Dependencies: thm-normal-function-fixed-points-form-a-club, thm-clubs-and-normal-enumerations, def-ordinal-multiplication, def-ordinal-exponentiation, thm-ordinal-multiplication-associative-and-left-distributive. Provenance: literature-derived statement; AI-expanded source proof. Validation: written; focused batch checks pending. Citation and boundary contract saved. No narrowed or dropped claim in this item. Next: continue assigned dependency order; final checks remain outstanding.

### Page composition and source-access checkpoint

Authored all four assigned pages at their planned `library/foundations/` paths, each draft. Completed all 68 items. The archive locator for Welch was unavailable; the same complete relevant section was read at the live original https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf (Definition 2.11, Lemmas 2.12–2.13, Exercise 2.5). The coverage locator is preserved. The implication-map example mentions the recorded nonimplication ledger through `external_refs`, not `deps`; that boundary correction is also in this batch manifest. Canonical phase-format repairs and all final validators are pending.

### Final mathematical and citation repairs

Expanded the fibre lemma’s pullback-order verification and Specker’s final Cantor contradiction locally. Added the exact published Hessenberg and countable-union dependencies to the cofinality-strata example, and countable-union dependency to the normal-function example; batch manifest updated to match. These justify the ZFC cardinal estimates and countability assertions, without adding planned items or changing page prerequisites. Retagged the five expanded club/reflection/normal/subway examples as AI-altered statements because their combined or strengthened formulations go beyond a verbatim source statement. Source proof provenance remains AI-altered. In particular the subway proof establishes the stronger club-of-empty-arrivals conclusion directly. Earlier per-item provenance checkpoints describe the initial drafts; these are the final dispositions. No planned item is dropped. Canonical repairs preserve the proofs with reordered independent rows and remapped citation-use and boundary step numbers.


### Final Step-5 validation

Authored scope: all 68 stable item IDs recorded in the per-item checkpoints above, and the four draft pages `page-weak-choice-principles-and-local-global-cardinal-arithmetic-a`, `page-weak-choice-principles-and-local-global-cardinal-arithmetic-b`, `page-club-stationary-and-normal-filter-calculus-a`, and `page-club-stationary-and-normal-filter-calculus-b`. The final manifest, page compositions, item files, and proof contracts agree. All authored pages and items remain `status: draft`; no `verification.judge` record is present.

Provenance rationale: source-derived statements retain the batch coverage locators and distinguish literature-derived wording from AI-altered expansions; proof provenance records whether the displayed argument follows an identified source proof or is an AI-created derivation from cited published dependencies. The final citation repairs add only the exact published cardinal-arithmetic facts used by the two affected examples. Recorded nonimplications and later-track orientation remain in their dedicated external-reference fields rather than becoming dependency targets.

Narrowed or dropped claims: none. Blockers: none.

Checks on the final bytes:

- `node tools/tsx-run.mjs tools/precheck.mts` was run with every one of the 68 explicit `items/ID.md` paths from the batch manifest: 53 proof-bearing items checked, 0 failing.
- The literal no-argument invocation of `node tools/validate-plan.mjs` reports its required argument. The executable check was therefore run as `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; declared page order acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs among the 892 pages having item lists.
- `node tools/content-policy.mjs research/frontier-33-batch-20.pages.json`: 68 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-33-batch-20.proof-contracts.json --strict`: 0 errors, 0 warnings, 53/53 items checked.

### Gate repair checkpoint

`lem-skolem-witness-closure-on-a-cardinal` keeps its claim and proof unchanged. Its stale `empty` contract row now credits steps 1.1 and 2.2: the Skolem-function family contains the constant-zero function, and nonzero `alpha` is required before elementarity. Batch-20 strict contract and the cross-batch boundary audit pass on the current record.

## Reharvest-3 source recovery receipt (2026-09-07)

The current `research/frontier-33-reharvest-plan.json` was read before repair and has `work: []` for batch 20. The required fresh source-backing check nevertheless exposed one stale URL-row failure in the retained liveness receipt: `thm-normal-function-fixed-points-form-a-club` was then carried only by Welch’s archived URL, `https://web.archive.org/web/20230326084819if_/https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf`, which returned HTTP 503 in the retained sweep.

Same-document recovery succeeded; no different treatment was chosen. The archive URL was retried and was unavailable, while the original, preserved at `https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf`, opened as the complete 88-page PDF. Its exact read range was Definition 2.11, Lemma 2.12, Exercise 2.5, and Lemma 2.13 with the complete proof (printed pp. 20–21 / PDF pp. 23–24). Lemma 2.13 states that the fixed points of a normal function on a regular uncountable cardinal form a c.u.b. set, proves unboundedness by omega-iteration and closure by continuity. Coverage now restores that original URL and retains the failed archive as `archived_fallback`; `original_url` preserves the source provenance. The affected harvest row remains `Lemma 2.13` → `thm-normal-function-fixed-points-form-a-club`. The theorem’s exact claim, ZFC/regular-uncountable convention, dependencies, proof route, and all other harvest rows are unchanged.

Validation on the repaired bytes:

- `node tools/coverage-checklist.mjs research/frontier-33-batch-20.coverage.json --require-destination --json`: 2 pages, 161 harvested results, 0 errors; 1 existing `coverage-low-yield` Alpha-review warning for the weak-choice page (31/81 rows scaffolded).
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-20.coverage.json --stamp --timeout-sec 90`: 14/14 source files fetch-verified, 0 newly stamped.
- `node tools/source-backing.mjs --coverage research/frontier-33-batch-20.coverage.json --liveness research/frontier-33-url-liveness.json --require-verified`: pass, 52 authored results all still backed.
- Fresh `url-sweep --recover --fail-on-dead` was run after recovery with its receipt confined to `/tmp/frontier-33-batch-20-url-liveness-after-recovery.json`. It failed 0/14 because this shell runner could not resolve *any* of its fourteen independent hosts (each failure was `curl: (6) Could not resolve host`), including the browser-readable Welch original. It therefore cannot establish the death of any individual source or justify another re-source. The prior retained liveness receipt was generated minutes earlier and recorded 13 reader-facing batch URLs live; its sole archive failure is the recovered URL above.

Open obligation: rerun the URL-sweep from a DNS-capable validator runner and regenerate the shared liveness receipt before treating URL liveness as clean. No coverage item is dropped or deferred, and no claim constraint changed.
