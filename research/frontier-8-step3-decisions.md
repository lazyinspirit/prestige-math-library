# Frontier 8 — Step 3 scaffold adjudication

**Decision maker:** orchestrator, 2026-08-02. This record was checked against
the five manifests, their source/dependency ledgers and proof-contract maps,
and the cited published items on disk. It approves scaffolds, not un-authored
proof prose. All five manifests pass:

```text
node tools/content-policy.mjs --manifest-only research/frontier-8-batch-{1,2,3,4,5}.pages.json
# 227 scoped items, 0 errors, 0 warnings
```

## Batch 1 — group homomorphisms; ideals and quotient rings

| recommendation | decision | rationale |
|---|---|---|
| Drop the requested bijective monoid-homomorphism counterexample. | approved — fatal pre-authoring false witness removed | A bijective unital monoid homomorphism has a multiplicative, identity-preserving inverse, so the proposed witness cannot exist. |
| Add group homomorphisms, integer primes, and Zorn to the ideals page requirements. | approved | Their exact published results are direct load-bearing inputs to kernel/factorization, prime-ideal examples, and maximal-ideal existence. |
| Leave the characteristic-of-an-integral-domain theorem at its planned later home. | approved | Moving it would duplicate a statement already intentionally deferred by the machine scaffold, without supporting an item retained here. |
| State coset-product well-definedness only for an additive subgroup, and use the unital second-isomorphism theorem. | approved — fatal overstatement and convention drift avoided | An arbitrary subset has no additive quotient structure, and the library’s ring convention requires an identity. |
| Use the zero ideal of $\mathbb Z$ rather than $(x)\subseteq\mathbb Z[x]$ for prime-not-maximal. | approved | The first witness is dependency-closed; the second requires the later polynomial-ring page. |

## Batch 2 — fundamental identities; complex exponential

| recommendation | decision | rationale |
|---|---|---|
| Add finite counting to the trigonometric page and the trigonometric, real-logarithm, completeness, and Euclidean prerequisites to the complex page. | approved | These pages directly supply the binomial, identity, real-extension, convergence, and metric clauses actually used by the approved scaffolds. |
| Retain domain and sign conditions on quotient and half-angle identities. | approved — fatal missing-hypothesis errors prevented | The formulas are false or undefined without their natural-domain and quadrant restrictions. |
| Retain the minimax Chebyshev statement only for $n\ge1$, exact-degree monic polynomials; defer orthogonality and the integration substitution. | approved | This preserves the dependency-closed algebraic theorem and avoids unbuilt improper-integration machinery. |
| Defer complex differentiation, exact-sequence terminology, and path-integral assertions. | approved | No complex derivative or path-integration spine is built at this order. |

## Batch 3 — approximation in $C(K)$; mixed partials

| recommendation | decision | rationale |
|---|---|---|
| Define only the metric $C(K,\mathbb R)$ form of equicontinuity locally. | approved | The general function-space definition is later in the plan. A narrow sourced definition avoids a forward dependency. |
| Keep real Arzelà–Ascoli, Bernstein/real Stone–Weierstrass, Baire, and Takagi in the dependency-closed scope; defer complex Stone–Weierstrass and trig/moment examples. | approved | The retained results have source-led proof designs and earlier dependencies; the omitted complex/trig routes do not. |
| Keep Peano, Young, Clairaut–Schwarz, Taylor, the Hessian test, and parametrized/graph Lagrange rules; defer Morse and arbitrary regular-level-set Lagrange multipliers. | approved — fatal hidden-IFT use avoided | Morse and the full multiplier theorem need the later inverse/implicit-function machinery. |
| Keep semidefinite Hessian cases explicitly inconclusive. | approved | A classification claim there would be false; the B page gives concrete zero-Hessian witnesses. |

## Batch 4 — matchings, covers, Menger, flows

| recommendation | decision | rationale |
|---|---|---|
| Replace stale requirements with Eulerian/Hamiltonian graphs and incidence algebras/Möbius inversion. | approved | Those pages contain the actual published graph and finite-set surface used by the retained dependencies; the earlier filter/infinite-matching requirement is dropped with its theorem. |
| Build the finite core: Berge, finite Hall/SDR/deficiency, König, Gallai edge covers, integer max-flow/min-cut, finite Menger forms, and Whitney. | approved | Each has a decomposed proof route with integer termination and explicit finite endpoint conditions. |
| Use labelled residual arcs. | approved — fatal graph-model mismatch prevented | The current digraph representation cannot distinguish a reverse residual copy from an antiparallel original arc unless the residual arcs are labelled. |
| Defer Tutte/Tutte–Berge, infinite marriage/BPI, arbitrary capacities, and a duplicate combinatorial Menger proof. | approved | Their needed blossom/factor-critical, choice-strength, or non-terminating-flow machinery is outside the published closure. |

## Batch 5 — uniform completeness and Samuel compactification

| recommendation | decision | rationale |
|---|---|---|
| Reconstruct a narrow source-grounded scope because no dedicated prose block exists. | approved | The scope is derived from the published Uniform Spaces and Stone–Čech pages, and its sources are recorded. |
| Use the $[0,1]$-valued uniformly continuous gauge, with an affine-rescaling argument for bounded real functions. | approved | This is a well-defined sourced convention and is stated in the contract. |
| State topology recovery under DC and compactness under the ultrafilter lemma; distinguish Hausdorff completion/reflection from a compactification. | approved — fatal choice-scope and nonseparated-space errors prevented | The textbook ZFC formulation cannot be imported unqualified into this library. |
| Retain only the local compact-target extension property, totally bounded agreement, and Stone–Čech surjection. | approved | The broad Samuel/Gelfand/proximity catalogue and unrestricted completion equivalence lack a locally closed proof route. |

## Global Step-3 decision and mechanism repair

1. The approved scope is 227 items across eight A/B pairs. No author may add a
   cross-batch dependency without a new recorded Step-3 decision.
2. Every author must carry the component provenance, source URL, exact contract
   clauses, generation roles, and choice hypotheses recorded in its own notes.
3. `tools/audit-manifest.mjs` had a fatal coverage bug: with `--json` and no
   `--output`, its argument parser discarded the first manifest. The parser now
   excludes an output value only when `--output` is present. The regression call
   over all five Frontier 8 manifests reports all five batches and 227
   pre-authoring source rows. This repair is required before Alpha’s receipt
   can honestly claim complete scope coverage.

## Step-3.5 post-splice closure repairs

The manifest-only policy gate passed throughout, but the authoritative plan
validator then found nine pre-authoring closure defects. No item or library
page existed at the time, so the affected manifests and contracts were repaired
before Step 4 was allowed to complete:

| batch | defect | repair |
|---|---|---|
| 2 | Three complex-page dependencies reached the later incidence-algebra page, and minimum-modulus cited the later Euclidean-topology page. | Replaced finite reindexing with earlier monoid finite-product/associativity results plus explicit inline obligations; rebased compactness on earlier Heine–Borel and metric EVT, and added the already-published compactness page prerequisite. |
| 3 | Bernstein used finite counting without a declared page prerequisite; two lemmas cited later function-space/Euclidean-topology results. | Added the earlier finite-counting and compactness prerequisites; replaced the closedness dependency by a direct uniform-limit argument and rebuilt sphere compactness from earlier Heine–Borel plus metric EVT. |
| 5 | Three B examples cited published B items, violating the B-leaf rule. | Replaced them with direct finite-grid and zero-one-discrete-metric arguments, including singleton $1/2$-ball non-total-boundedness. |

After re-splicing all corrected manifests, `validate-plan` reports no item-level
cycles, forward references, B-page dependencies, or unresolved ids. The
coverage manifest has five batches, 227 rows, and 227 expected pre-authoring
`missing-source` rows.
