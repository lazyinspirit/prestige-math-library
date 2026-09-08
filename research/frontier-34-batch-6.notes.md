# frontier-34 batch 6 — scaffold notes

**Verdict: BLOCKED / NOT READY / UNPUBLISHABLE.** This is a preserved mathematical work inventory, not a claim of full source or dependency closure. Do not interpret a successful structural checklist as a sufficient scaffold verdict.

## Authority and run state

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md, the generated beta-6 task, beta-batch task, dispatch prompt, current plan and complete AT-6 design section. The beta-batch task permits only this batch's manifest, coverage and notes. No published item, page, prose design or canonical plan was changed by this dispatch. Temporary check outputs are under /tmp/frontier34-b6. Existing plan edits and other frontier-34 artifacts belonged to the live shared run. Read .autopilot/frontier-34/status.md and git log: HEAD at inspection was 4501527a0; historical RESUME files were not used. The status file was a stale running snapshot, not recomputed completion evidence.

## Controlling design and conflicts

L712 starts AT-6 and controls its A-page scope. L748 is the B companion within the same section and controls its examples; they are complementary, not competing designs. Read through the source list before AT-7, as well as the opening AT-7 chain-product inventory to inspect the forward dependency. The current plan controls page identity/order/requires: A 366.011 and B 366.012, algebraic-topology. Its A requirement is homology-axioms-degree-and-classical-applications-examples, unlike the prose's explicit two requirements on the preceding A page and universal-coefficients-and-kunneth-theorems. Both intended suppliers are already transitive prerequisites. Preserve the plan edge; no compromise edge was invented.

The prose assigns the Eilenberg–Zilber/Alexander–Whitney chain equivalence and external cochain product to AT-7, although AT-6's Kunneth claims need them. Earlier published singular-chain items supply the shuffle definition, boundary formula and naturality, but not its equivalence. Add specialized comparison and external-product lemmas here in proof order; use no forward AT-7 dependency. Internal multiplication, cup/cap ring laws and duality remain on AT-7/later pages. AT-7's author must reconcile overlapping interfaces with these prerequisites rather than introduce a backward cycle.

The design's broad Hatcher locator is inadequate for the homological Kunneth proof: pp.218–225 mainly concern cohomological products and applications; the homological chain argument is in section 3.B. Miller's cited sections use a different sign and some different pagination: in the fetched 115-page notes, Lecture 26 begins on printed p.69, definitions are p.71, Lecture 27 is pp.73–75, Lecture 28 p.76, Lecture 29 pp.77–79. Do not silently import its signed formulas. Hatcher 3.15 has a finite-free **cohomology** hypothesis and CW spaces, while the design asks for finite-free **homology** over a PID. The proposed chain-model proof bridges these different statements, but requires a completed source harvest before approval.

## Exact changes

Preserved all 21 original A items and all 8 original B items and their IDs. Added seven A support items (28 A / 8 B total, below the default 60-item ceiling): degreewise split restriction; finite-group Hom/Ext calculation; specialized shuffle comparison; external cochain product; finite-free homology chain model; dimension/product additivity; A-owned cellular projective/lens input. Every manifest item has an explicit deps array. Added blocked status, proposed statements, proof routes, source pointers, and component provenance. No results were dropped to clear a check. Coverage records 26 harvested headings/results from two independent treatments and explicit open obligations; it does not pretend to harvest unread ranges.

## Conventions and local interface audit

Use delta(phi)=phi boundary, nonnegative cochains, and H^n=0 for n<0. A coefficient abelian group does not supply multiplication. With a commutative ring the external cochain product uses front/back evaluation without an extra pq sign in this convention. Miller uses d_n(phi)=(-1)^(n+1)phi boundary; multiplication by (-1)^(n(n+1)/2) in degree n gives a cochain isomorphism between the conventions. This algebraic translation must be checked together with any imported product formula.

Read the full local UCT statement and proof: it applies under Choice to arbitrary-rank free complexes over a PID and gives Ext^1 in degree n-1 and Hom in degree n. Read its splitting proof: a chosen projection C_n -> Z_n yields a section by composing with Z_n -> H_n. This supports singular absolute and relative complexes (both free on simplex bases). Do not use the finite-dimensional field corollary to prove arbitrary-space duality; use the general UCT and the published field-projectivity/injectivity interface after verifying its proof closure.

Read the complete cover-small chain homotopy equivalence: its retraction and homotopy preserve small chains and the integral identities tensor with arbitrary G. This is sufficient for dualization; a homology isomorphism alone is not the proof route. Read the shuffle definition and boundary proof: differential is d(a tensor b)=da tensor b+(-1)^p a tensor db. Read the cohomological LES and five-lemma interfaces, confirming contravariant maps and degree +1 connectors. Relative restriction is surjective by zero extension only degreewise, not a cochain splitting. Mayer–Vietoris uses restriction from U minus restriction from V. Excision requires closure(Z) subset interior(A).

Retain Choice explicitly for arbitrary-rank PID freeness, splittings and product exactness. The basic simplex, relative cochain and prism constructions themselves do not need an unsupported stronger axiom. No Foundations item is authored here. The global extcheck passed with existing warnings; this is not a substitute for a complete manual Foundations-boundary audit of every inherited page.

B-only cellular RP/lens examples cannot supply a later page. Their calculations must be proved in the new A support lemma from the earlier cellular theorem, including characteristic maps and incidence signs. Field wedge cohomology is a product, not a direct sum. The Moore-space quotient in Hatcher section 3.1 Exercise 11(a) supplies a topological witness against natural UCT splitting; a group homomorphism alone is insufficient. The proposed circle example uses the field pairing unless a cellular cochain comparison is supplied. Every one of these proof routes still needs the source/dependency audit listed below.

## Fatal prerequisite finding F1 and complete proposed supplier pair

Path: prop-the-homology-kunneth-sequence-splits-nonnaturally -> required arbitrary-PID algebraic splitting. Published thm-the-kunneth-sequence-splits-nonnaturally states only **free abelian complexes**, not arbitrary free PID complexes. Its two proof rows appeal to the external theorem without constructing a section. Published thm-kunneth-theorem-for-free-complexes-over-a-pid similarly ends by applying Weibel rather than deriving full exactness locally. Read its entire proof and the complete lem-the-kunneth-tor-map proof: the latter constructs a natural surjection and identifies the Tor kernel target, providing useful local machinery, but the imported top-level proofs must not be silently certified under the present local-proof contract. These are inadequacies as suppliers for this scaffold, not an assertion that the classical mathematical conclusions are false.

The dispatch cannot edit published proofs or the prose/plan. As required, propose a new pair instead of weakening to Z:

- Title: **Kunneth Exactness and Splittings over Principal Ideal Domains**.
- Category: homological-algebra.
- A slug: kunneth-exactness-and-splittings-over-principal-ideal-domains.
- B slug: kunneth-exactness-and-splittings-over-principal-ideal-domains-examples.
- Placement: A 365.0581, B 365.0582, after universal-coefficients-and-kunneth-theorems-examples (365.058) and before group-cohomology-as-a-derived-functor (365.059). These are proposed unused orders, subject to canonical writer revalidation.
- A requires: universal-coefficients-and-kunneth-theorems (earlier A supplier).
- B requires: the new A.
- Add a backward page requirement from this batch's A to the new A when materialized. Preserve the current prior-topology requirement.

A inventory, in proof order (all under Choice, R a PID, nonnegative complexes of free R-modules):

1. lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces — lemma. deps: [lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free, thm-free-modules-are-projective-with-choice-boundary, lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid]. Choose sections onto B_(n-1), identify each C_n with Z_n plus B_(n-1); record the actual differential as the inclusion B_(n-1) -> Z_(n-1), not an unjustified splitting of boundaries inside cycles.
2. lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel — lemma. deps: [lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces, def-balanced-tor-bifunctor, def-tensor-product-total-complex-of-chain-complexes, lem-the-kunneth-tor-map]. Compute the kernels, images and cokernels on these length-one free presentations, matching the existing natural Tor quotient and cycle-tensor map including signs.
3. thm-pid-kunneth-exactness-from-cycle-boundary-presentations — theorem. deps: [lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel, lem-the-kunneth-cross-product-map-is-well-defined-and-natural, lem-the-kunneth-tor-map]. Prove locally the natural tensor/Tor short exact sequence for each degree, identifying the kernel of the existing quotient with the cycle cross-product image. No appeal to the old top-level Kunneth theorem as proof.
4. thm-pid-kunneth-splitting-from-cycle-boundary-presentations — theorem. deps: [thm-pid-kunneth-exactness-from-cycle-boundary-presentations, lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces]. Construct a section for every PID from the two-term decomposition, prove it is R-linear and right-inverse, and distinguish its noncanonical choices from natural exactness. A nonnatural decomposition is not evidence of nonexistence of all natural splittings without a witness.

B inventory:

1. ex-pid-polynomial-ring-kunneth-tor-class — example. deps: [thm-pid-kunneth-exactness-from-cycle-boundary-presentations, thm-pid-kunneth-splitting-from-cycle-boundary-presentations]. Use R=k[t], C=D=(R --t--> R) in degrees 1,0: H_0(tensor)=R/(t), H_1(tensor)=R/(t), H_2=0; compute the cycle e_1 tensor e_0 - e_0 tensor e_1 and quotient. This tests genuinely non-Z PID coefficients.
2. ex-pid-kunneth-over-a-field-has-no-tor-correction — example. deps: [thm-pid-kunneth-exactness-from-cycle-boundary-presentations, prop-modules-over-a-field-are-projective-flat-and-injective]. Compute complexes supported in degrees 0,1 with zero differential and identify every tensor generator and degree, with the Tor quotient zero.

The two consumer deps intentionally name the unmaterialized prerequisite theorems. Their failure to resolve keeps content-policy red. This pair proposal still needs a full-source proof audit; do not count it as added or proved. It must be entered by the authorized prose/plan writer before this consumer can be sufficient.

## Fatal/open source findings F2 and review finding F3

F2: Shell curl to both original URLs failed with DNS resolution errors. source-fetch-check --stamp failed EAI_AGAIN for both, leaving 0/2 verified; url-sweep independently failed DNS. Web opening returned actual PDFs (Hatcher 76 pages, Miller 115), and relevant text was read in overlapping ranges. That is useful mathematical reading evidence, but not a generated byte/hash fetch stamp. No stamp was fabricated, no URL replaced merely to clear a network failure, and no source or result removed. PDF screenshot calls returned only links here; unread diagram geometry remains unverified.

F3: The complete statement/proof audit of the large transitive prerequisite closure is unfinished. The traversal below establishes reachability, not mathematical adequacy. The remaining source ranges, especially complete RP/lens calculations and the arbitrary-PID/cohomological Kunneth proof, have not been fully read and harvested. The manifest records those obligations instead of claiming their bibliographic pointers prove them. The foundational boundary, forward edges, historical statement drift, and axiom strength must be audited throughout before a sufficient verdict. New A supporting lemmas are proposed proof routes, not approved mathematics.

## Structural closure snapshot

Traversed 234 canonical/current-run pages, 5493 item IDs and 28962 deps/justified_by/forward_refs edges. Scanned 358 historical/current batch manifests for supplier identities; historical statements were not all adjudicated. Published item metadata overrides old manifest metadata; nonempty current-run manifests override their own planned page inventories. No deps cycle found. This conservative traversal includes all forward_refs, even orientation-only ones, and does not treat justified_by reverse support as a deps cycle. It is not proof-order or statement validation.

Missing item IDs:

- thm-pid-kunneth-exactness-from-cycle-boundary-presentations
- thm-pid-kunneth-splitting-from-cycle-boundary-presentations

UCT page path:

`singular-cohomology-and-coefficient-theorems -> homology-axioms-degree-and-classical-applications-examples -> homology-axioms-degree-and-classical-applications -> cw-complexes-and-cellular-homology-examples -> cw-complexes-and-cellular-homology -> relative-homology-excision-and-mayer-vietoris-examples -> relative-homology-excision-and-mayer-vietoris -> singular-chains-and-singular-homology-examples -> singular-chains-and-singular-homology -> simplicial-complexes-and-simplicial-homology-examples -> simplicial-complexes-and-simplicial-homology -> schur-multipliers-and-universal-central-extensions-examples -> schur-multipliers-and-universal-central-extensions -> group-cohomology-as-a-derived-functor-examples -> group-cohomology-as-a-derived-functor -> universal-coefficients-and-kunneth-theorems-examples -> universal-coefficients-and-kunneth-theorems`

Empty page inventories in that snapshot (including legacy placeholder pages, not all missing mathematics):

- construction-of-r-via-cauchy-sequences
- construction-of-r-via-dedekind-cuts
- construction-of-the-natural-numbers
- double-complexes-exact-couples-and-convergence
- double-complexes-exact-couples-and-convergence-examples
- grothendieck-spectral-sequences-and-computations
- grothendieck-spectral-sequences-and-computations-examples
- spectral-sequences
- spectral-sequences-examples

## Checks actually run

- Batch coverage checklist with --require-destination: coverage-checklist: 1 page, 26 harvested results, 0 errors, 0 warnings; structural only.
- Whole-run manifest-deps: Exit 0: 284 scoped items, no missing deps arrays.
- Whole-run manifest-only content-policy: Exit 1: 6 missing dependency errors at this shared-run snapshot. Two are the intentionally blocked batch-6 supplier IDs; four belong to other batches.
- validate-plan research/plan-spec.json: Exit 0; validates the current canonical plan, whose batch-6 inventory has not been spliced. Does not validate these unmaterialized prerequisite statements.
- extcheck: Exit 0 with 63 existing warnings; no reported fatal bootstrap-boundary failure.
- source-fetch-check --stamp --timeout-sec 10: Exit 1: both sources fail EAI_AGAIN; 0/2 fetch-verified.
- url-sweep --coverage batch-6 --fail-on-dead: Exit 1: 0/2 live in this shell, DNS errors for Cornell and MIT.
- source-backing --require-verified: Failed; see full diagnostic below.
- source-fetch-check without --stamp: Exit 1; missing stamps for both sources.

### content-policy diagnostic

```text
ERROR batch-dependency-missing [ex-the-round-metric-on-the-sphere-as-an-induced-metric]: ex-the-round-metric-on-the-sphere-as-an-induced-metric depends on thm-regular-level-set-theorem, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-invariant-irrep-produces-a-projective-inertia-extension]: lem-invariant-irrep-produces-a-projective-inertia-extension depends on thm-equality-of-complex-characters-is-equivalent-to-isomorphism, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-finite-scalar-cocycles-admit-root-of-unity-representatives]: lem-finite-scalar-cocycles-admit-root-of-unity-representatives depends on thm-fundamental-theorem-of-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [ex-little-groups-for-a-finite-dihedral-group]: ex-little-groups-for-a-finite-dihedral-group depends on thm-the-nth-roots-of-unity-form-a-cyclic-group, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-topological-kunneth-short-exact-sequence-for-homology]: thm-topological-kunneth-short-exact-sequence-for-homology depends on thm-pid-kunneth-exactness-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [prop-the-homology-kunneth-sequence-splits-nonnaturally]: prop-the-homology-kunneth-sequence-splits-nonnaturally depends on thm-pid-kunneth-splitting-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
content-policy: 284 scoped item(s), 6 error(s), 0 warning(s)
```

### source-fetch-stamp diagnostic

```text
ERROR fetch-check-dead: singular-cohomology-and-coefficient-theorems: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf — EAI_AGAIN
ERROR fetch-check-dead: singular-cohomology-and-coefficient-theorems: https://math.mit.edu/~hrm/papers/notes-905.pdf — EAI_AGAIN
source-fetch-check: 0/2 source(s) fetch-verified (0 newly stamped), 2 FAILED
```

### url-liveness diagnostic

```text
url-sweep: 0/2 live; 2 failed; 0 suspect -> /tmp/frontier34-b6/url-liveness.json
FAIL 0 https://math.mit.edu/~hrm/papers/notes-905.pdf — curl: (6) Could not resolve host: math.mit.edu
FAIL 0 https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf — curl: (6) Could not resolve host: pi.math.cornell.edu
```

### source-backing diagnostic

```text
source-backing: 15 authored result(s) have no openable source left
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: def-singular-cochain-complex-with-coefficients — backed only by https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf, https://math.mit.edu/~hrm/papers/notes-905.pdf
    "Cohomology of Spaces: cochains, coboundary and cohomology, pp.197–198" via Allen Hatcher, Algebraic Topology, Chapter 3 @ Section 3.1, Cohomology of Spaces through Axioms for Cohomology, printed pp.197–202; separate Exercise 11(a), p.205. Only these passages are harvested, not all originally assigned pp.185–205,218–225.
    "Definition 26.3 and Notation 26.4, p.71" via Haynes Miller, Algebraic Topology I, Fall 2016 @ Definition 26.3 through end of Lecture 27, printed pp.71–75; separate model lifting discussion, Lemma 25.10, Theorem 25.11, Corollary 25.12, Theorem 25.13 and Corollary 25.14, printed pp.64–66. Full relevant textual proofs read; displayed diagram geometry not verified.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: lem-the-singular-coboundary-squares-to-zero — backed only by https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    "Coboundary squares to zero, p.198" via Allen Hatcher, Algebraic Topology, Chapter 3 @ Section 3.1, Cohomology of Spaces through Axioms for Cohomology, printed pp.197–202; separate Exercise 11(a), p.205. Only these passages are harvested, not all originally assigned pp.185–205,218–225.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: thm-topological-universal-coefficient-short-exact-sequence-for-cohomology — backed only by https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf, https://math.mit.edu/~hrm/papers/notes-905.pdf
    "Topological universal coefficient sequence, p.198" via Allen Hatcher, Algebraic Topology, Chapter 3 @ Section 3.1, Cohomology of Spaces through Axioms for Cohomology, printed pp.197–202; separate Exercise 11(a), p.205. Only these passages are harvested, not all originally assigned pp.185–205,218–225.
    "Theorem 27.1 and proof, pp.73–74" via Haynes Miller, Algebraic Topology I, Fall 2016 @ Definition 26.3 through end of Lecture 27, printed pp.71–75; separate model lifting discussion, Lemma 25.10, Theorem 25.11, Corollary 25.12, Theorem 25.13 and Corollary 25.14, printed pp.64–66. Full relevant textual proofs read; displayed diagram geometry not verified.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: cor-cohomology-over-a-field-is-dual-to-homology-over-that-field — backed only by https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    "Field coefficients, pp.198–199" via Allen Hatcher, Algebraic Topology, Chapter 3 @ Section 3.1, Cohomology of Spaces through Axioms for Cohomology, printed pp.197–202; separate Exercise 11(a), p.205. Only these passages are harvested, not all originally assigned pp.185–205,218–225.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: thm-long-exact-sequence-of-a-pair-in-singular-cohomology — backed only by https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    "Relative Groups and the Long Exact Sequence of a Pair, pp.199–200" via Allen Hatcher, Algebraic Topology, Chapter 3 @ Section 3.1, Cohomology of Spaces through Axioms for Cohomology, printed pp.197–202; separate Exercise 11(a), p.205. Only these passages are harvested, not all originally assigned pp.185–205,218–225.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: thm-naturality-of-the-singular-cohomology-pair-sequence — backed only by https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    "Induced Homomorphisms and relative UCT naturality, p.201" via Allen Hatcher, Algebraic Topology, Chapter 3 @ Section 3.1, Cohomology of Spaces through Axioms for Cohomology, printed pp.197–202; separate Exercise 11(a), p.205. Only these passages are harvested, not all originally assigned pp.185–205,218–225.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: thm-homotopic-maps-induce-equal-maps-in-singular-cohomology — backed only by https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    "Homotopy Invariance, p.201" via Allen Hatcher, Algebraic Topology, Chapter 3 @ Section 3.1, Cohomology of Spaces through Axioms for Cohomology, printed pp.197–202; separate Exercise 11(a), p.205. Only these passages are harvested, not all originally assigned pp.185–205,218–225.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: thm-excision-for-singular-cohomology — backed only by https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    "Excision, pp.201–202" via Allen Hatcher, Algebraic Topology, Chapter 3 @ Section 3.1, Cohomology of Spaces through Axioms for Cohomology, printed pp.197–202; separate Exercise 11(a), p.205. Only these passages are harvested, not all originally assigned pp.185–205,218–225.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms — backed only by https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf, https://math.mit.edu/~hrm/papers/notes-905.pdf
    "Axioms for Cohomology, p.202" via Allen Hatcher, Algebraic Topology, Chapter 3 @ Section 3.1, Cohomology of Spaces through Axioms for Cohomology, printed pp.197–202; separate Exercise 11(a), p.205. Only these passages are harvested, not all originally assigned pp.185–205,218–225.
    "Homotopy, excision, Milnor axiom and Mayer–Vietoris, p.75" via Haynes Miller, Algebraic Topology I, Fall 2016 @ Definition 26.3 through end of Lecture 27, printed pp.71–75; separate model lifting discussion, Lemma 25.10, Theorem 25.11, Corollary 25.12, Theorem 25.13 and Corollary 25.14, printed pp.64–66. Full relevant textual proofs read; displayed diagram geometry not verified.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: cex-the-uct-splitting-is-not-natural — backed only by https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    "Section 3.1 Exercise 11(a), p.205" via Allen Hatcher, Algebraic Topology, Chapter 3 @ Section 3.1, Cohomology of Spaces through Axioms for Cohomology, printed pp.197–202; separate Exercise 11(a), p.205. Only these passages are harvested, not all originally assigned pp.185–205,218–225.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: def-singular-cohomology-with-coefficients — backed only by https://math.mit.edu/~hrm/papers/notes-905.pdf
    "Definition 26.5, p.71" via Haynes Miller, Algebraic Topology I, Fall 2016 @ Definition 26.3 through end of Lecture 27, printed pp.71–75; separate model lifting discussion, Lemma 25.10, Theorem 25.11, Corollary 25.12, Theorem 25.13 and Corollary 25.14, printed pp.64–66. Full relevant textual proofs read; displayed diagram geometry not verified.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: def-kronecker-evaluation-pairing — backed only by https://math.mit.edu/~hrm/papers/notes-905.pdf
    "Kronecker pairing, pp.71–72" via Haynes Miller, Algebraic Topology I, Fall 2016 @ Definition 26.3 through end of Lecture 27, printed pp.71–75; separate model lifting discussion, Lemma 25.10, Theorem 25.11, Corollary 25.12, Theorem 25.13 and Corollary 25.14, printed pp.64–66. Full relevant textual proofs read; displayed diagram geometry not verified.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: def-relative-singular-cochain-complex — backed only by https://math.mit.edu/~hrm/papers/notes-905.pdf
    "Definition 26.8 and pair sequence, p.72" via Haynes Miller, Algebraic Topology I, Fall 2016 @ Definition 26.3 through end of Lecture 27, printed pp.71–75; separate model lifting discussion, Lemma 25.10, Theorem 25.11, Corollary 25.12, Theorem 25.13 and Corollary 25.14, printed pp.64–66. Full relevant textual proofs read; displayed diagram geometry not verified.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: lem-hom-and-ext-of-finitely-generated-abelian-groups-for-singular-cohomology — backed only by https://math.mit.edu/~hrm/papers/notes-905.pdf
    "Example 27.4, p.74" via Haynes Miller, Algebraic Topology I, Fall 2016 @ Definition 26.3 through end of Lecture 27, printed pp.71–75; separate model lifting discussion, Lemma 25.10, Theorem 25.11, Corollary 25.12, Theorem 25.13 and Corollary 25.14, printed pp.64–66. Full relevant textual proofs read; displayed diagram geometry not verified.
ERROR backing-lost: singular-cohomology-and-coefficient-theorems: lem-eilenberg-zilber-comparison-for-singular-coefficient-theorems — backed only by https://math.mit.edu/~hrm/papers/notes-905.pdf
    "Theorem 25.13 and Corollary 25.14, p.66; specialized model lifting in pp.64–66" via Haynes Miller, Algebraic Topology I, Fall 2016 @ Definition 26.3 through end of Lecture 27, printed pp.71–75; separate model lifting discussion, Lemma 25.10, Theorem 25.11, Corollary 25.12, Theorem 25.13 and Corollary 25.14, printed pp.64–66. Full relevant textual proofs read; displayed diagram geometry not verified.
A replacement SOURCE is the remedy, never a dropped result: find a different
treatment carrying the same definition/theorem/example, re-read the range, and
rewrite that source's contents rows faithfully.
```

### source-fetch-check diagnostic

```text
ERROR fetch-check-unstamped: singular-cohomology-and-coefficient-theorems: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
ERROR fetch-check-unstamped: singular-cohomology-and-coefficient-theorems: https://math.mit.edu/~hrm/papers/notes-905.pdf
source-fetch-check: 0/2 source(s) fetch-verified, 2 FAILED
```

## Continuation / next authorized action

Do not advance this pair to authoring. An authorized writer must materialize the proposed prerequisite pair in prose and plan, or supply an independently verified earlier local proof interface satisfying the full PID claim, without changing published content under this dispatch. Then reread this manifest, the current suppliers, sources and obligations; finish all transitive statement/proof reviews and remaining full-text harvest, obtain genuine fetch stamps, rerun the batch and whole-run checks. No authoring, rendering, proof-format or mathematical-proof pass is claimed here.

Final artifact verification: parsed both JSON artifacts; checked uniqueness of all 36 local IDs, explicit deps arrays, and every within-batch dependency's earlier placement. Passed. Exactly the two proposed prerequisite IDs remain missing on disk. Reran the coverage checklist with --require-destination: 1 page, 26 harvested results, 0 errors and 0 warnings. These checks do not change the blocked verdict.


## Policy repair policy-fix-1-b6 — 2026-09-08

**Terminal disposition: BLOCKED.** The two reported missing dependencies are
mathematical prerequisites, not stale IDs. This repair cannot close F1 because
its authorized files exclude the shared prose scaffold and plan. The complete
prerequisite pair specification above remains the requested owner-writer
handoff: four A lemmas/theorems and two B examples at 365.0581/365.0582,
with its stated category, titles, slugs, prerequisites and explicit inventories.
It has NOT been inserted, proved, or source-certified. Do not advance the consumer.

Re-read the controlling instructions, current batch inventory/coverage/notes,
AT-6 design including the AT-7 boundary, current plan interfaces, and the full
published Kunneth exactness, splitting and Tor-map items. HEAD inspected:
63957468e. Read the live run status without recomputing or modifying workflow
state; its snapshot reports frontier-34 in 1-scaffold. No historical RESUME
claim was treated as run authority.

### Exact authorized changes

Only two manifest item objects changed: the reported
`thm-topological-kunneth-short-exact-sequence-for-homology` and
`prop-the-homology-kunneth-sequence-splits-nonnaturally`. Their statements now
print Choice, PID coefficients, arbitrary spaces, nonnegative degree conventions,
the tensor/Tor indices and shuffle edge map, and the R-linear section conclusion.
These make the existing intended hypotheses explicit. Both original missing
deps and both blocked proof routes remain. No item, dependency or mathematical
scope was removed. The 28 A / 8 B inventory and order are unchanged.

Added Weibel's exact source locator to these two consumers and four harvest
dispositions to coverage. Read the complete Theorems 3.6.1–3.6.3 passages and
proofs on printed pp.87–88 in
https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
(web PDF extraction lines 670–715). The complex theorem gives flatness-based
exactness, but its stated splitting clause is for Z. Its proof refers back to
the module argument. This is evidence for the mismatch, not a completed
arbitrary-PID local proof. The original two sources and their harvests remain;
no alternate text was substituted, so original_url is not applicable.

### Dependency evidence and remaining obligations

Re-scanned the current plan and 358 historical/current batch manifests for the
two supplier declarations: neither is present. Recomputed the transitive graph
using nonempty current-run inventories and canonical item metadata: 234 pages,
5563 items, 29119 deps/justified_by/forward_refs edges, no deps cycle, and exactly
the same two missing supplier IDs. The UCT page path above is unchanged.
This graph traversal does not certify statements, proof order, axiom strength,
or adequacy of all 5563 items. The complete transitive mathematical audit (F3)
remains explicitly unfinished; no scaffold-ready verdict is issued.

Load-bearing paths remain:

- topological Kunneth exactness -> thm-pid-kunneth-exactness-from-cycle-boundary-presentations (absent);
- topological Kunneth splitting -> thm-pid-kunneth-splitting-from-cycle-boundary-presentations (absent);
- product-of-spheres and projective-product examples -> topological Kunneth exactness -> absent supplier;
- field Kunneth corollary -> topological Kunneth exactness -> absent supplier.

The published Z-only splitting cannot replace the second edge, and a source
citation cannot replace either local proof. F1's proposed new pair remains
mandatory under this scope; an authorized writer must add it and the backward
page requirement before consumer closure can be considered. F2 source-fetch
failure and all prior unread-source obligations also remain open.

### Checks actually run for this repair

Commands and outputs are retained under /tmp/frontier34-b6-policy-fix-1.
Results below supersede the earlier shared-run counts, not their historical
meaning. Other batches were concurrently populated; their failures were not edited.

| Check | Result |
|---|---|
| `node tools/coverage-checklist.mjs research/frontier-34-batch-6.coverage.json --require-destination` | Exit 0; 1 page, 30 harvested results, 0 errors/warnings |
| `node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json` | Exit 0; 876 items, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-34-batch-*.pages.json` | Exit 1; 876 items, 51 errors, 0 warnings; exactly 2 batch-6 errors, both absent PID suppliers |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit 0; canonical plan only, unspliced batch inventory not certified |
| `node tools/extcheck.mjs` | Exit 0; 63 existing unproved-consequence warnings |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-6.coverage.json --stamp --timeout-sec 10` | Exit 1; 0/3 verified, 0 stamped, all EAI_AGAIN |
| `node tools/url-sweep.mjs --coverage research/frontier-34-batch-6.coverage.json --out /tmp/frontier34-b6-policy-fix-1/liveness.json --timeout-ms 10000 --fail-on-dead` | Exit 1; 0/3 live, all curl DNS errors |
| `node tools/source-backing.mjs --coverage research/frontier-34-batch-6.coverage.json --liveness /tmp/frontier34-b6-policy-fix-1/liveness.json --require-verified` | Exit 1; 16 authored results have no verified openable source |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-6.coverage.json` | Exit 1; 0/3 stamped |

The initial coverage invocation also passed `--manifests` and the pages JSON,
as shown in that tool's header, and exited 1 with coverage-missing-page. Inspection
confirmed the implementation does not parse that documented option; it instead
reads every non-flag path as coverage. The corrected command above automatically
loads the sibling manifest and passes. No tool code was changed.

Compared the final manifest against the pre-repair copy: only `statement` and
`sources` of the two reported consumers changed. JSON parsing and preserved
inventory checks passed. The graph evidence is structural only. No new proof,
published content, plan, or workflow state was written.

## Policy repair policy-fix-2-b6 — 2026-09-08

**Terminal disposition: BLOCKED / NOT READY / UNPUBLISHABLE.** The same two
reported dependency defects persist. No authorized mathematical edit can add
the required shared-plan supplier pair. F1 above remains the complete pair
specification (category, placement, page requirements, four A items and two B
items with explicit deps). It must be inserted by the authorized writer before
these consumers can advance. Do not replace the missing IDs by the inadequate
published suppliers or delete the edges to turn the gate green.

Rechecked CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, this dispatch, beta-6
assignment, AT-6 design through its source list, current manifest and coverage,
prior findings, current plan supplier references, live frontier-34 status and
HEAD 63957468e. Status was read only, not recomputed or written. Re-read the
complete published exactness theorem, Z-only splitting theorem, and Tor-map
lemma. A search through plan-spec.json and all research/*pages.json found the
two proposed theorem IDs only as consumer references in this batch, with no
supplier declarations. This confirms the immediate fatal gap; it does not
complete the previously unfinished transitive statement/proof audit (F3).

The exact dependency paths remain:

- thm-topological-kunneth-short-exact-sequence-for-homology -> thm-pid-kunneth-exactness-from-cycle-boundary-presentations (absent).
- prop-the-homology-kunneth-sequence-splits-nonnaturally -> thm-pid-kunneth-splitting-from-cycle-boundary-presentations (absent).

The published exactness proof applies an external theorem rather than proving
its sequence locally. The published splitting statement quantifies over free
abelian complexes, whereas the consumer requires arbitrary PID coefficients.
The Tor-map proof constructs the quotient but supplies no splitting. Those
interfaces therefore do not close the two reported defects under this contract.
The prior full-closure and source obligations remain open; no fresh complete
transitive mathematical audit or Foundations-boundary proof is claimed.

### Exact changes and source evidence

Preserved the pages manifest without edits: all 28 A / 8 B items, statements,
proof routes and dependencies remain. Updated only coverage and these notes.
Reopened the same Weibel PDF URL and read complete Theorems 3.6.1–3.6.3 and
proofs, printed pp.87–88 (web extraction lines 670–715), plus the complete
Exercise 3.6.2 on printed p.90 (lines 762–767). Source:
https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf.
The exercise requests extension to hereditary rings and lists PIDs, but supplies
no proof. Added its disposition linked to the splitting consumer and updated
its exact locator/read evidence. This is proof-route orientation only, not a
new supplier or approval of the arbitrary-PID proof. No replacement source was
used and no original URL or mathematics removed. Fetch evidence remains absent.

### Checks actually run

Outputs: `/tmp/frontier34-b6-policy-fix-2/`. All commands ran from the repository
root. Final coverage/source-backing runs followed the coverage update.

| Command | Result |
|---|---|
| `node tools/coverage-checklist.mjs research/frontier-34-batch-6.coverage.json --require-destination` | Exit 0; final 1 page, 31 harvested results, 0 errors/warnings |
| `node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json` | Exit 0; 876 items, 0 normalized, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-34-batch-*.pages.json` | Exit 1; 876 items, 51 errors; exactly the two missing suppliers above belong to batch 6 |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit 0; 892 pages with item lists; 579 without; unspliced batch inventory is not certified |
| `node tools/extcheck.mjs` | Exit 0; 63 existing unproved-on-published warnings |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-6.coverage.json --timeout-sec 10` | Exit 1; all 3 sources unstamped |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-6.coverage.json --stamp --timeout-sec 10` | Exit 1; 0/3 verified, 0 newly stamped; all EAI_AGAIN |
| `node tools/url-sweep.mjs --coverage research/frontier-34-batch-6.coverage.json --out /tmp/frontier34-b6-policy-fix-2/liveness.json --timeout-ms 10000 --fail-on-dead` | Exit 1; 0/3 live; all host-resolution failures |
| `node tools/source-backing.mjs --coverage research/frontier-34-batch-6.coverage.json --liveness /tmp/frontier34-b6-policy-fix-2/liveness.json --require-verified` | Exit 1; 16 backing-lost errors, including after the coverage update |

No shared plan, published content, other batch, or workflow state was edited.
Next action remains authorized insertion and proof/source audit of F1's pair;
then finish F2/F3 and rerun the gates. Repeating this same scoped repair cannot
materialize a supplier in files this dispatch explicitly forbids writing.
