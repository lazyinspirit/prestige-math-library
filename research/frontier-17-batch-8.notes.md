# Frontier 17, batch 8 — Beta-8 scaffold notes

## Scope, order, and artifact boundary

This batch owns the-identity-theorem-and-the-open-mapping-theorem at order 313 and its companion at order 314. The design and research/plan-spec.json agree on the title, category, companion, order, and sole required page analyticity-liouville-and-morera. No design/spec drift is present.

The A page has 25 items and the companion has 10. The A page is below the current 60-item ceiling, so no split is proposed.

The dispatch simultaneously requires research/frontier-17-batch-8.coverage.json and says that exactly three files may be written while omitting that required gated file from its list. The most recently completed batch-1 notes identify the same prompt defect and treat the coverage artifact as separately mandatory. This batch follows that precedent: the three listed artifacts and the required coverage artifact are the only files written.

## Source-fetch status

The canonical coverage checklist passes with 1 page, 56 harvested headings, 0 errors, and 0 warnings.

The mandatory command

    node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-8.coverage.json --stamp

was run after the harvest was written. The local Node transport returned EAI_AGAIN for all three URLs. The Lebl and Shabat URLs are byte-identical to already stamped sources in the repository, and their genuine durable receipts were copied unchanged from research/frontier-12-batch-6.coverage.json and research/frontier-16-batch-7.coverage.json respectively. The Tropp source remains unstamped. Its full 331-page mathematical body was opened and read through web research, but no fetch_verified value was fabricated. The same-source recovery attempt changed the URL from the www host to Tropp's alternate Caltech host without changing the document or locator. Exact escalation-free retry:

    node tools/source-fetch-check.mjs --coverage research/frontier-17-batch-8.coverage.json --stamp

This is a mechanical DNS blocker, not a source-content uncertainty.

## Applyable amendments to research/plan-complex-analysis-track.md

### CA6-1 — remove the stale inventory count

Recommendation: approve. The heading says 18 items while the displayed table has 20 rows even before this scaffold’s source-backed additions.

Exact old text:

    Proposed A-page inventory (dependency order; 18 items):

Exact new text:

    Proposed A-page inventory (dependency order):

If declined, the design preserves a false count that will decay again when Alpha applies the substantive amendments below.

### CA6-2 — reuse the published zero-order definition and factorization

Recommendation: approve. The live prerequisite page already publishes def-order-of-zero-holomorphic-function and thm-zero-order-factorization-holomorphic-function. Re-minting their content under def-isolated-zero-and-local-degree and cor-local-degree-factorization would violate reuse discipline.

Exact old rows:

    | def-isolated-zero-and-local-degree | def | Define an isolated zero and define the local degree of nonconstant f at a as ord_a(f-f(a)). |
    | cor-local-degree-factorization | cor | f(z)-f(a)=(z-a)^m g(z) locally, where g(a) is nonzero. |

Exact new row:

    | def-local-degree-holomorphic-map | def | For a nonconstant holomorphic f on a domain, define deg_a f=ord_a(f-f(a)); the published zero-order definition and factorization make this a positive finite natural. |

The prose sentence

    DEFS: an isolated zero; the local degree m of f at a (the order of the zero of f - f(a)); locally injective; biholomorphic.

should become

    DEFS: locally injective and biholomorphic maps, and the local degree deg_a f=ord_a(f-f(a)) of a nonconstant holomorphic map on a domain. The definition reuses the published zero-order convention and factorization rather than introducing a second notion of zero order.

If declined, Step 5 either duplicates immutable mathematical content or silently maintains two definitions of zero order.

### CA6-3 — expose the identity-theorem propagation lemma

Recommendation: approve. Shabat’s proof and the published local factorization separate the local zero analysis from the connectedness step.

Insert immediately before the identity-theorem row:

    | lem-locally-zero-locus-clopen-holomorphic-function | lem | For a holomorphic h on an open set, the points having a neighbourhood on which h vanishes form a clopen subset. |

Replace the identity-theorem prose clause

    with the clopen argument stated explicitly

by

    through the preceding clopen locally-zero-locus lemma: an accumulating zero first gives local vanishing by the published factorization, and connectedness then propagates that local identity across the domain.

If declined, the identity proof remains a multi-move monolith and its closure step is not durable in the Step-5 obligation map.

### CA6-4 — remove the local-normal-form/inverse-theorem cycle

Recommendation: approve. The design lists the local normal form before the holomorphic inverse function theorem but calls its coordinate biholomorphic. Lebl’s own proof uses the inverse theorem at exactly that point. The scaffold makes the sufficiency direction explicit from the already published Euclidean inverse function theorem and then returns later for the full equivalence.

Insert before thm-local-normal-form-holomorphic-map:

    | lem-nonzero-derivative-gives-local-biholomorphism | lem | If f'(a) is nonzero, the Euclidean inverse function theorem and the complex-linear derivative dictionary give a local biholomorphism with inverse derivative 1/f'. |

Replace the final inverse-theorem row by:

    | thm-holomorphic-inverse-function-theorem | thm | For a nonconstant holomorphic f, f'(a) nonzero, deg_a f=1, local injectivity, and local biholomorphy are equivalent; the inverse derivative is reciprocal. |

If declined, the local normal form either assumes the theorem later claimed as its consequence or silently rebuilds a real inverse theorem.

### CA6-5 — retain the harvested maximum-principle consequences and strip lemma

Recommendation: approve. Lebl’s exact range contains the boundary-and-infinity form and the constant-boundary-modulus dichotomy; Shabat contains the real-part maximum principle; Tropp’s proof contains a separately auditable strip maximum lemma.

Insert after thm-local-maximum-modulus-principle:

    | cor-maximum-principle-real-part-holomorphic-function | cor | An interior local maximum of Re f forces a holomorphic function on a domain to be constant. |

Insert after thm-boundary-maximum-modulus-principle:

    | thm-maximum-modulus-principle-with-boundary-and-infinity-control | thm | Finite-boundary control, together with control at infinity for an unbounded domain, bounds the modulus throughout. |
    | thm-minimum-modulus-principle | thm | A nowhere-zero holomorphic function cannot attain an interior local modulus minimum unless constant. |
    | cor-constant-boundary-modulus-forces-zero-or-constancy | cor | Constant boundary modulus on a bounded domain forces the function to be constant or to have an interior zero. |
    | lem-bounded-strip-maximum-principle | lem | A bounded holomorphic function on a strip with boundary modulus at most one has modulus at most one throughout. |

If declined, the harvest loses named source results and Hadamard’s proof hides its unbounded-domain regularization inside a monolith.

### CA6-6 — replace the unavailable Riesz–Thorin library pointer

Recommendation: approve. The design requires rem-riesz-thorin-is-owned-by-measure-theory to cite thm-riesz-thorin-interpolation, but neither that item nor its MT-17 page exists in research/plan-spec.json. A same-stage remark cannot truthfully link to an unplanned target.

Exact old row:

    | rem-riesz-thorin-is-owned-by-measure-theory | rem | Cite MT-17 thm-riesz-thorin-interpolation; the operator theorem is not re-minted here. |

Exact new row:

    | rem-three-lines-and-complex-interpolation | rem | Explain, from Tropp’s source, how the scalar three-lines normalization drives complex interpolation arguments, without claiming that an unavailable operator theorem is already built. |

Replace the corresponding THMS sentence with:

    Hadamard’s three-lines theorem is followed by rem-three-lines-and-complex-interpolation, which records the scalar mechanism used in complex interpolation without creating or citing an unavailable Riesz–Thorin item.

If declined, Step 5 must create a dangling link, an invalid forward reference, or a claim about content that is not available at this point in the plan.

### CA6-7 — strengthen the flat-function companion item

Recommendation: approve.

Exact old text:

    e^{-1/x^2} extended to C is not holomorphic at 0, so the real C-infinity counterexample to the identity theorem has no complex analogue

Exact new text:

    The smooth real function psi(0)=0 and psi(x)=exp(-1/x^2) for nonzero x has no holomorphic extension to any complex neighbourhood of zero: all Taylor coefficients of a hypothetical extension would vanish, while psi is positive at every nonzero real point.

If declined, the design records only that one naive complex formula fails, rather than the mathematically relevant nonexistence of any holomorphic extension.

## Web research ledger and convention decisions

1. Jiří Lebl, Guide to Cultivating Complex Analysis, version 1.9:
   https://www.jirka.org/ca/ca.pdf
   - Read the exact ranges recorded in the coverage artifact.
   - Supports the identity theorem, integral-domain corollary, local and boundary maximum principles, minimum principle, boundary-and-infinity form, constant-boundary dichotomy, disc automorphisms, logarithms and roots, local normal form, open mapping, and injective holomorphic inverse theorem.
   - Convention: Lebl defines zero order for an isolated zero as positive; the published library definition also permits order zero at a nonzero value and +infinity for a locally zero germ. The new local degree is positive because it is applied to f-f(a) for a nonconstant function on a connected domain.
   - Proof-route disagreement: Lebl’s open mapping theorem uses Rouché. This scaffold uses Lebl’s earlier local-root normal form and never cites Rouché or the argument principle.

2. B. V. Shabat, Introduction to Complex Analysis — excerpts:
   https://math.stanford.edu/~ryzhik/shabat-all.pdf
   - Read the exact ranges recorded in the coverage artifact.
   - Independently supports local factorization, uniqueness, open mapping, local multiplicity, local inversion, maximum and minimum modulus principles, and the real differentiable injective-map counterexample.
   - Convention: Shabat calls the agreement result the Uniqueness theorem and uses path-connectedness of a plane domain in the open-mapping proof. The library states the standard domain convention once and uses connectedness plus its published plane-topology dictionary.

3. Joel A. Tropp, Matrix Analysis, Lecture 7:
   https://tropp.caltech.edu/notes/Tro22-Matrix-Analysis-LN.pdf
   - Read §7.2.2 and §7.3 through Claim 7.14.
   - Supports the disc and bounded-domain maximum principles, the bounded-strip regularization, Hadamard’s three-lines theorem, and the interpolation remark.
   - Convention: the source writes analytic where this library writes holomorphic and assumes boundedness on the closed strip. The scaffold keeps exactly that bounded version and does not silently upgrade it to the weaker-growth Phragmén–Lindelöf form.

4. MIT 18.102, Introduction to Functional Analysis, Theorem 2.32:
   https://math.mit.edu/~kehle/files/Introduction_to_functional_analysis_18_102.pdf
   - Read the open mapping theorem and its completeness remark.
   - Supports only rem-complex-versus-banach-open-mapping-theorems: the Banach-space theorem concerns surjective bounded linear maps and is mathematically distinct from the complex-analytic theorem.

5. John K. Hunter, An Introduction to Real Analysis, Example 10.31 and Corollary 10.30:
   https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf
   - Supports the flat smooth function used by cex-flat-smooth-function-has-no-holomorphic-extension.
   - The no-holomorphic-extension conclusion is a local identity/Taylor consequence supplied by this pair, not text attributed to Hunter.

No source prose will be copied. Every new item will use sources.references and an empty sources.scraped list.

## Published dependency audit and closure

The manifest has 55 distinct external dependency ids after the final hidden-dependency pass. Every corresponding item file was opened from disk. Every item has status: published. Their statement provenance is literature-derived or ai-altered; none is ai-generated and none is legacy-unclassified.

All external dependencies are homed on published pages of order below 313. Two ids that are not listed in plan-spec item arrays were resolved from actual library pages: cex-smooth-function-not-equal-to-its-maclaurin-series is on the-exponential-function-examples at order 176, and thm-dedekind-complete is on foundations-of-the-real-numbers and construction-of-r-via-dedekind-cuts at orders 9 and 8.

The exact Definition, Statement, Example, or construction was read for every target. The eligible ai-altered targets whose conventions were specifically checked are:

- thm-complex-nth-roots-and-roots-of-unity: exactly n distinct roots for n at least one, with zero handled separately; source-checked against Lebl and established from knowledge.
- cor-holomorphic-functions-are-real-analytic-and-smooth, cor-jacobian-determinant-of-a-holomorphic-map, and thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann: the coordinate-plane and complex-linear derivative conventions agree exactly with the Euclidean inverse theorem.
- def-zero-divisor-and-integral-domain and def-ring-of-functions: the nonzero-ring and pointwise-operation conventions needed for H(Omega) were opened and established from knowledge.
- thm-quarter-turn-values-and-shift-formulas: the exact value sin(pi/2)=1 used by the boundary-accumulation witness was opened and established from knowledge.
- cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism: the exact cube-map bijection and derivative-zero witness was opened and source-checked against its Lebl reference.

No published load-bearing falsehood was found. No published-dependency repair is proposed.

Every load-bearing dependency is earlier on the same page, on the A page when used by its companion, or published on a page of strictly smaller order. There is no external fallback and no proved_here: false dependency.

## Planned component provenance and Step-5 source rationale

### A page

| Item | Statement | Proof | Rationale and Step-5 reference |
|---|---|---|---|
| def-locally-injective-holomorphic-map | literature-derived | not-applicable | Standard local-injectivity definition in Shabat §1.2; cite Shabat. |
| def-biholomorphic-map | literature-derived | not-applicable | Standard complex-domain definition used by Lebl §5.6; cite Lebl and Shabat. |
| lem-locally-zero-locus-clopen-holomorphic-function | ai-altered | ai-altered | Extracts the clopen subargument of Shabat Theorem 2.28 and adapts it to the published zero-order factorization; cite Shabat. |
| thm-identity-theorem-holomorphic-functions | literature-derived | ai-altered | Lebl Theorem 2.4.7 and Shabat Theorem 2.28; local factorization plus clopen propagation. |
| thm-isolated-zeros-holomorphic-function | literature-derived | ai-altered | The isolated-zero half of Lebl Theorem 2.4.7 and Shabat Theorem 2.27. |
| def-local-degree-holomorphic-map | ai-altered | not-applicable | Standard local multiplicity specialized to the published order convention; cite Lebl §5.1 and Shabat §1.2. |
| cor-holomorphic-function-ring-integral-domain | literature-derived | ai-altered | Lebl Exercise 2.4.13(a); cite Lebl. |
| lem-local-holomorphic-logarithm-nonvanishing-function-on-disc | literature-derived | ai-altered | Lebl Corollary 4.3.4, reproved from the already published star-shaped primitive. |
| cor-local-holomorphic-roots-nonvanishing-function | literature-derived | ai-altered | Lebl Corollary 4.3.5 with centre normalization made explicit. |
| lem-nonzero-derivative-gives-local-biholomorphism | literature-derived | ai-altered | Shabat Theorem 1.10 and Lebl §5.1, proved through the published Euclidean inverse theorem. |
| thm-local-normal-form-holomorphic-map | literature-derived | ai-altered | Lebl Theorem 5.1.3; exact local-root route, no Rouché. |
| cor-local-multiplicity-count-holomorphic-map | literature-derived | ai-altered | Shabat local inversion case II and Lebl Theorem 5.1.3; roots transported through the local coordinate. |
| thm-open-mapping-theorem-holomorphic-functions | literature-derived | ai-altered | Lebl Theorem 5.5.1 and Shabat Theorem 1.8; proof adapted to the local normal form. |
| rem-complex-versus-banach-open-mapping-theorems | literature-derived | not-applicable | Complex statement from Lebl/Shabat and Banach statement from MIT 18.102. |
| thm-local-maximum-modulus-principle | literature-derived | ai-altered | Lebl Theorem 3.3.6, Shabat Theorem 1.14, and Tropp Proposition 7.11; proof through open mapping. |
| cor-maximum-principle-real-part-holomorphic-function | literature-derived | ai-altered | Shabat Exercise 1.16(2); proof through open mapping. |
| thm-boundary-maximum-modulus-principle | literature-derived | ai-altered | Lebl Corollary 3.3.7, Shabat Theorem 1.15, and Tropp Theorem 7.12. |
| thm-maximum-modulus-principle-with-boundary-and-infinity-control | literature-derived | ai-altered | Lebl Exercise 3.3.19, written in an equivalent epsilon-neighbourhood form. |
| thm-minimum-modulus-principle | literature-derived | ai-altered | Lebl Exercise 3.3.18 and Shabat Theorem 1.17. |
| cor-constant-boundary-modulus-forces-zero-or-constancy | literature-derived | ai-altered | Lebl Exercise 3.3.20; proof combines maximum and minimum principles. |
| lem-bounded-strip-maximum-principle | ai-altered | ai-altered | Isolates Tropp Claim 7.14 as the regularization lemma used by Hadamard. |
| thm-hadamard-three-lines | literature-derived | ai-altered | Tropp Theorem 7.13, with zero boundary suprema and substrip rescaling explicit. |
| rem-three-lines-and-complex-interpolation | literature-derived | not-applicable | Tropp’s interpolation context, without an unavailable Riesz–Thorin link. |
| thm-holomorphic-inverse-function-theorem | literature-derived | ai-altered | Shabat Theorem 1.10 and Lebl §5.6; equivalence completed through local multiplicity. |
| cor-injective-holomorphic-derivative-nonzero | literature-derived | ai-altered | Lebl Theorem 5.6.3 and Shabat’s inverse section. |

### Companion page

| Item | Statement or construction | Proof or verification | Rationale and Step-5 reference |
|---|---|---|---|
| thm-complex-pythagorean-identity-by-identity-theorem | literature-derived | ai-altered | Classical identity, proved by the distinct identity-theorem route; cite Lebl/Shabat and cross-reference the published addition-formula route. |
| ex-local-mapping-of-complex-squaring-at-zero-and-one | literature-derived | ai-altered | Standard local model in Lebl §5.1 and Shabat §1.2. |
| ex-maximum-modulus-bound-for-a-polynomial-on-the-unit-disc | ai-generated | ai-generated | Locally chosen checkable polynomial p(z)=z^2-2z+2; generation.role is example. Direct triangle bound and equality at z=-1 verify the construction, so no concrete counterexample doubt remains. It is not a dependency target. |
| cex-boundary-accumulation-does-not-force-holomorphic-identity | literature-derived | ai-altered | Standard sin(1/z) boundary-accumulation witness from the design and uniqueness sources. |
| cex-flat-smooth-function-has-no-holomorphic-extension | ai-altered | ai-altered | Hunter’s flat function plus a new identity/Taylor nonextension conclusion. |
| cex-nonconstant-blaschke-factor-has-constant-boundary-modulus | literature-derived | ai-altered | Lebl Proposition 3.5.2. |
| fs-maximum-modulus-principle-without-connectedness | ai-altered | ai-altered | Negates the exact domain hypothesis in the sourced theorem and uses the design’s disconnected-component correction. |
| fs-minimum-modulus-principle-without-nonvanishing | literature-derived | ai-altered | Lebl Exercise 3.3.18(b) and Shabat’s explicit identity-map warning. |
| fs-injective-real-differentiable-map-has-nonzero-jacobian | literature-derived | ai-altered | Shabat Remark 1.11, with the planar map (x^3,y). |
| fs-boundary-maximum-modulus-principle-on-unbounded-domains | ai-altered | ai-altered | Tropp’s unbounded-domain warning and the design’s exact exp(-iz) witness. |

No generated Statement or construction other than the single polynomial example is planned. The generated example is non-load-bearing and has a complete arithmetic witness. There is no generated theorem, lemma, definition, false statement, or mathematical remark.

## Exact Step-5 clauses bound by same-batch proof-contract citations

The following text must occur verbatim in the authored section named by the proof contract:

- lem-locally-zero-locus-clopen-holomorphic-function: “For a holomorphic function $h$ on an open set $U$, the set of points having a neighbourhood on which $h$ vanishes is both open and closed in $U$.”
- thm-identity-theorem-holomorphic-functions: “If two holomorphic functions on a complex domain agree on a set with an accumulation point in the domain, then they agree everywhere on the domain.”
- thm-isolated-zeros-holomorphic-function: “A holomorphic function on a complex domain that is not identically zero has only isolated zeros.”
- def-local-degree-holomorphic-map: “For a nonconstant holomorphic function $f$ on a complex domain, the local degree at $a$ is $\deg_a f=\operatorname{ord}_a(f-f(a))$.”
- cor-holomorphic-function-ring-integral-domain: “The holomorphic functions on a complex domain form an integral domain under pointwise addition and multiplication.”
- lem-local-holomorphic-logarithm-nonvanishing-function-on-disc: “If $h$ is nowhere zero and holomorphic on a disc, then there is a holomorphic $L$ on that disc with $\exp L=h$.”
- cor-local-holomorphic-roots-nonvanishing-function: “For every positive natural $m$, a nowhere-zero holomorphic function on a disc has a holomorphic $m$th root.”
- lem-nonzero-derivative-gives-local-biholomorphism: “If $f$ is holomorphic near $a$ and $f'(a)\ne0$, then $f$ is biholomorphic between neighbourhoods of $a$ and $f(a)$.”
- thm-local-normal-form-holomorphic-map: “If $f$ is nonconstant and holomorphic on a complex domain and $m=\deg_a f$, then near $a$ there is a biholomorphic coordinate $\phi$ with $\phi(a)=0$ and $f(z)-f(a)=\phi(z)^m$.”
- cor-local-multiplicity-count-holomorphic-map: “After shrinking around $a$, every nearby value other than $f(a)$ has exactly $m=\deg_a f$ distinct preimages.”
- thm-open-mapping-theorem-holomorphic-functions: “Every nonconstant holomorphic function on a complex domain is an open map.”
- thm-local-maximum-modulus-principle: “If the modulus of a holomorphic function on a complex domain has an interior local maximum, then the function is constant.”
- cor-maximum-principle-real-part-holomorphic-function: “If the real part of a holomorphic function on a complex domain has an interior local maximum, then the function is constant.”
- thm-boundary-maximum-modulus-principle: “If $\Omega$ is a bounded complex domain and $f$ is continuous on $\overline\Omega$ and holomorphic on $\Omega$, then $|f|$ attains its maximum on $\partial\Omega$.”
- thm-maximum-modulus-principle-with-boundary-and-infinity-control: “Boundary control together with control at infinity bounds the modulus throughout an unbounded complex domain.”
- thm-minimum-modulus-principle: “A nowhere-zero holomorphic function on a complex domain cannot have an interior local modulus minimum unless it is constant.”
- cor-constant-boundary-modulus-forces-zero-or-constancy: “If a holomorphic function has constant modulus on the boundary of a bounded domain, then it is constant or has a zero in the domain.”
- lem-bounded-strip-maximum-principle: “A bounded function continuous on the closed strip, holomorphic inside, and of modulus at most one on both boundary lines has modulus at most one throughout the strip.”
- thm-hadamard-three-lines: “For a bounded function continuous on the closed strip and holomorphic inside, the vertical-line supremum is log-convex.”
- thm-holomorphic-inverse-function-theorem: “For a nonconstant holomorphic map, nonzero derivative, local degree one, local injectivity, and local biholomorphy are equivalent.”
- cor-injective-holomorphic-derivative-nonzero: “An injective holomorphic map on a complex domain has nowhere-zero derivative and is biholomorphic onto its open image.”

The full Statements must supply all domains, quantifiers, positive-radius and positive-index hypotheses, endpoint conventions, and the inverse derivative formula; these exact clauses are contract anchors, not licences to publish fragments.

## Exact A-page summary for Step 5

Holomorphic functions on a complex domain are analytic and therefore possess Taylor expansions, a well-defined order of vanishing, and local factorizations by their first nonzero Taylor term. The Cauchy theory on star-shaped domains supplies primitives, while the coordinate-plane dictionary connects complex derivatives to real total derivatives. Compactness and the extreme value theorem control continuous moduli on bounded closures.

Local factorization first yields the identity theorem and isolated zeros, then holomorphic logarithms and roots turn a nonconstant map into a power in a biholomorphic coordinate. This normal form gives local multiplicities and the open mapping theorem, from which maximum and minimum principles follow. Boundary and strip versions lead to Hadamard’s three-lines theorem. Local degree also characterizes nonzero derivative and local invertibility, so injective holomorphic maps have holomorphic inverses on their open images.

The B page must have no authored summary body.

## Proof-obligation and boundary closure

The version-1 proof contract contains every proof-bearing item: 30 scoped ids and 30 contracts. Each contract records exact published or future same-batch source clauses, a numbered input map, all eight boundary dispositions, and a finite_smoke array. No registered finite-smoke model applies to these analytic claims.

The long proof routes are closed as follows:

- Identity: published zero factorization establishes local vanishing or isolation; lem-locally-zero-locus-clopen-holomorphic-function supplies both topological sides; connectedness supplies global propagation.
- Local mapping: the published star-shaped primitive gives a logarithm of a nonvanishing factor; exponentiation gives roots; the published Euclidean inverse theorem makes the coordinate biholomorphic; complex root counting supplies the exact local sheets.
- Open and maximum principles: the local normal form supplies neighbourhood images; openness supplies local modulus and real-part maxima; compactness supplies the boundary theorem; compact superlevel sets supply the infinity-controlled theorem.
- Hadamard: the bounded-domain boundary theorem controls finite rectangles; the exponential regularizer controls horizontal sides; positive-base complex powers normalize the boundary suprema; delta regularization handles zero suprema; affine substrip rescaling supplies full log-convexity.
- Inverse theorem: factorization gives derivative nonzero exactly at local degree one; the Euclidean lemma gives sufficiency; local multiplicity refutes injectivity at every degree above one; the complex chain rule supplies the inverse derivative.

Boundary cases explicitly closed in the contracts include empty open subsets in the open-mapping statement, order zero versus positive local degree, local degree one, constant and zero functions, zero boundary modulus, zero boundary supremum in three-lines, strip endpoints, the central branched value, boundary versus interior accumulation, and nonempty compact maximizer choices.

## Per-pair richness report

Both required passes were performed for this pair.

Long-proof decomposition:

- The identity theorem is decomposed through lem-locally-zero-locus-clopen-holomorphic-function.
- Local mapping is decomposed through the logarithm lemma, holomorphic-root corollary, nonzero-derivative local-biholomorphism lemma, normal-form theorem, and local-multiplicity corollary.
- The maximum development separates local, bounded-boundary, boundary-and-infinity, minimum, constant-boundary, and strip principles.
- Hadamard’s theorem is separated from the bounded-strip regularization.
- The holomorphic inverse theorem reuses the sufficiency lemma and local multiplicity rather than hiding either implication.

Useful corollaries added:

- cor-holomorphic-function-ring-integral-domain;
- cor-local-holomorphic-roots-nonvanishing-function;
- cor-local-multiplicity-count-holomorphic-map;
- cor-maximum-principle-real-part-holomorphic-function;
- cor-constant-boundary-modulus-forces-zero-or-constancy;
- cor-injective-holomorphic-derivative-nonzero.

The A page has 25 items and does not approach the 60-item ceiling. No item was pruned and no split is proposed.

## Per-page item list

### the-identity-theorem-and-the-open-mapping-theorem — 25 items

1. def-locally-injective-holomorphic-map — definition — Locally injective holomorphic maps
2. def-biholomorphic-map — definition — Biholomorphic maps between complex domains
3. lem-locally-zero-locus-clopen-holomorphic-function — lemma — The locally zero locus of a holomorphic function is clopen
4. thm-identity-theorem-holomorphic-functions — theorem — Identity theorem for holomorphic functions
5. thm-isolated-zeros-holomorphic-function — theorem — Zeros of a nonzero holomorphic function are isolated
6. def-local-degree-holomorphic-map — definition — Local degree of a nonconstant holomorphic map
7. cor-holomorphic-function-ring-integral-domain — corollary — The ring of holomorphic functions on a complex domain is an integral domain
8. lem-local-holomorphic-logarithm-nonvanishing-function-on-disc — lemma — A nonvanishing holomorphic function on a disc has a holomorphic logarithm
9. cor-local-holomorphic-roots-nonvanishing-function — corollary — Holomorphic roots of a nonvanishing function on a disc
10. lem-nonzero-derivative-gives-local-biholomorphism — lemma — A nonzero complex derivative gives a local biholomorphism
11. thm-local-normal-form-holomorphic-map — theorem — Local normal form of a nonconstant holomorphic map
12. cor-local-multiplicity-count-holomorphic-map — corollary — A local degree-m holomorphic map has m nearby sheets
13. thm-open-mapping-theorem-holomorphic-functions — theorem — Open mapping theorem for holomorphic functions
14. rem-complex-versus-banach-open-mapping-theorems — remark — Complex-analytic and Banach-space open mapping theorems
15. thm-local-maximum-modulus-principle — theorem — Local maximum modulus principle
16. cor-maximum-principle-real-part-holomorphic-function — corollary — Maximum principle for the real part of a holomorphic function
17. thm-boundary-maximum-modulus-principle — theorem — Boundary maximum modulus principle on a bounded domain
18. thm-maximum-modulus-principle-with-boundary-and-infinity-control — theorem — Maximum modulus principle with boundary and infinity control
19. thm-minimum-modulus-principle — theorem — Minimum modulus principle for a nowhere-zero holomorphic function
20. cor-constant-boundary-modulus-forces-zero-or-constancy — corollary — Constant boundary modulus forces an interior zero or constancy
21. lem-bounded-strip-maximum-principle — lemma — Maximum principle on a closed strip for bounded holomorphic functions
22. thm-hadamard-three-lines — theorem — Hadamard three-lines theorem
23. rem-three-lines-and-complex-interpolation — remark — Hadamard three-lines and complex interpolation
24. thm-holomorphic-inverse-function-theorem — theorem — Holomorphic inverse function theorem and local-degree criterion
25. cor-injective-holomorphic-derivative-nonzero — corollary — An injective holomorphic map has no critical point and is biholomorphic onto its image

### the-identity-theorem-and-the-open-mapping-theorem-examples — 10 items

1. thm-complex-pythagorean-identity-by-identity-theorem — theorem — The complex Pythagorean identity by the identity theorem
2. ex-local-mapping-of-complex-squaring-at-zero-and-one — example — The local mapping of complex squaring at zero and at one
3. ex-maximum-modulus-bound-for-a-polynomial-on-the-unit-disc — example — An exact polynomial bound from the boundary maximum principle
4. cex-boundary-accumulation-does-not-force-holomorphic-identity — counterexample — Agreement accumulating only at the boundary does not force a holomorphic identity
5. cex-flat-smooth-function-has-no-holomorphic-extension — counterexample — A flat smooth real function has no holomorphic extension near zero
6. cex-nonconstant-blaschke-factor-has-constant-boundary-modulus — counterexample — A nonconstant Blaschke factor has constant boundary modulus
7. fs-maximum-modulus-principle-without-connectedness — false statement — FALSE: the local maximum modulus principle needs no connectedness
8. fs-minimum-modulus-principle-without-nonvanishing — false statement — FALSE: every interior local modulus minimum forces constancy
9. fs-injective-real-differentiable-map-has-nonzero-jacobian — false statement — FALSE: every injective real-differentiable planar map has nonzero Jacobian
10. fs-boundary-maximum-modulus-principle-on-unbounded-domains — false statement — FALSE: boundary control alone gives the maximum principle on an unbounded domain

## New-id and reuse report

The exact-id collision scan ran fixed-string searches for every final manifest id over items/ and research/plan-spec.json. Every one of the 35 final ids returned zero hits before this manifest was written.

The semantic search covered isolated zeros, zero order, local degree, holomorphic logarithms and roots, local mapping, open mapping, maximum and minimum modulus, three-lines, biholomorphisms, boundary accumulation, constant boundary modulus, and holomorphic extension. It found and reused def-order-of-zero-holomorphic-function, thm-zero-order-factorization-holomorphic-function, cor-holomorphic-mean-value-property, the published complex trigonometric items, the Euclidean inverse function theorem, and the flat smooth-function construction.

No immutable id is renamed or duplicated.

## Forward references and cross-batch dependencies

No forward reference is retained. In particular, the unavailable thm-riesz-thorin-interpolation is neither a dependency nor a forward reference. The replacement interpolation remark is self-contained and source-backed.

This batch needs no item from another frontier-17 batch, and no other current batch is assumed to depend on these ids. The next planned complex-analysis pages may use the identity, open mapping, maximum principles, and inverse theorem through their declared page prerequisite, but no cross-batch coordination is required at Step 2.

## Findings for Step-3 Alpha

1. Approve CA6-4, the explicit local-biholomorphism sufficiency lemma. The current design’s local normal form calls its coordinate biholomorphic before the inverse theorem is established; declining leaves a circular or hidden dependency.
2. Approve CA6-2, reuse of the published zero-order definition and factorization. Declining duplicates immutable mathematical content and creates two notions of order.
3. Approve CA6-6, replacement of the Riesz–Thorin pointer. The named item and its MT-17 page do not exist in plan-spec; declining forces a dangling or dishonest link.
4. Approve CA6-3, the clopen locally-zero-locus decomposition. Declining leaves the identity proof’s global propagation unstated in the durable scaffold.
5. Approve CA6-5, the source-harvested maximum, boundary, infinity, constant-modulus, and strip items. Declining drops named results actually present in the read ranges and hides Hadamard’s main regularization.
6. Approve CA6-7, the no-holomorphic-extension formulation of the flat example. Declining keeps only a weak observation about one naive complex formula.
7. Approve CA6-1, removal of the stale inventory count. Declining preserves an already false count in the design.
8. Retry source-fetch-check in an escalation-free engine context. Tropp’s full source was read through web research, but local DNS prevented the required byte/hash receipt; declining the retry leaves the liveness gate red.

These recommendations are independent and ordered by dependency correctness, immutable reuse, citation honesty, proof closure, mathematical richness, and gate mechanics.

## Confidence and unverified work

Mathematical confidence is high. I checked the clopen identity proof, local-degree well-definedness, the logarithm and root construction, the Euclidean-to-holomorphic inverse step, exact local sheet count including the central multiplicity, the open mapping proof without Rouché, bounded and unbounded maximum arguments, the zero and nonzero boundary-modulus branches, the strip regularizer on all four rectangle sides, zero boundary suprema in Hadamard, every implication in the inverse theorem, and each companion witness.

Every proposed published dependency was opened from disk. Every load-bearing dependency is internal to the pair or published earlier. No external fallback, cross-batch input, published repair, or AI-generated dependency target remains.

What was not verified: validate-plan and depsource cannot classify the new ids until Step 4 splices this manifest; proof-contract strictness cannot compare the planned steps and same-batch quotes with authored items until Step 5. No Step-6 independent read, Alpha risk review, paired judge, publication, status change, or git commit occurred.

## Final Step-2 checks

- The manifest parses as 25 A-page items and 10 companion items. Its 35 ids are unique, and every same-pair dependency is earlier on its page or on the A page.
- The proof-contract artifact parses as version 1 with 30 proof-bearing scope ids and 30 contracts. Every contract has a unique numbered input map, all eight boundary dispositions, and a finite_smoke array.
- The contract overlay found no undeclared citation source. Every quote to an existing published item matches its exact source section, and every quote to a same-batch item occurs verbatim in the durable Step-5 clause list above.
- coverage-checklist reports 1 page, 56 harvested headings, 0 errors, and 0 warnings.
- The current coverage artifact carries full-document `fetch_verified` receipts for all three sources. Tropp’s 2,914,350-byte PDF receipt supersedes the earlier EAI_AGAIN observation.
- content-policy --manifest-only reports 35 scoped items, 0 errors, and 0 warnings.
- finite-smoke reports 0 errors and 0 applicable checks over the 30 contracts; that zero check count is not evidence for the analytic claims.
- prosecheck --warnings reports 0 errors. Its count warnings occur in this required audit report and in exact old design text, not in the proposed A-page summary or item titles; it reports no positional contradiction.
- validate-plan research/plan-spec.json passes on the current unspliced plan. depsource reports 0 unresolved, 0 planned-later, 0 homeless, and 0 draft-page dependencies among the currently spliced pages. These are current-plan results, not a claim that Step 4 has classified this new manifest.
- The applied-canonical-embedding scan finds no occurrence in an owned artifact. Scoped git diff --check is clean.

## Step-3 fix pass

- **B8-1 — already correct.** `lem-nonzero-derivative-gives-local-biholomorphism` precedes `thm-local-normal-form-holomorphic-map` and derives local biholomorphy from the published Euclidean inverse function theorem plus the complex-linear derivative dictionary. The local normal form depends on that lemma, while `thm-holomorphic-inverse-function-theorem` comes afterward and uses the completed local-degree development, so the reviewed inverse-theorem cycle is absent.
- **B8-2 — already correct.** The manifest reuses the published `def-order-of-zero-holomorphic-function` and `thm-zero-order-factorization-holomorphic-function`. `rem-three-lines-and-complex-interpolation` depends only on `thm-hadamard-three-lines`; no Riesz–Thorin id occurs in the manifest, so the remark is self-contained and creates no dangling dependency or forward reference.
- **B8-3 — already correct.** `lem-locally-zero-locus-clopen-holomorphic-function` supplies the propagation step for the identity theorem. The manifest also retains `thm-boundary-maximum-modulus-principle`, `thm-maximum-modulus-principle-with-boundary-and-infinity-control`, `thm-minimum-modulus-principle`, `cor-constant-boundary-modulus-forces-zero-or-constancy`, `lem-bounded-strip-maximum-principle`, and `thm-hadamard-three-lines`, with focused strategies and proof contracts. The harvested Lebl, Shabat, and Tropp rows in the coverage artifact identify these results as included.
- **B8-4 — already correct.** The companion manifest retains separate witnesses for branching and regular local behaviour, an identity-theorem proof of the complex Pythagorean identity, an exact polynomial maximum, boundary-only zero accumulation, failure of holomorphic extension for the flat smooth function, a nonconstant Blaschke factor, and false statements isolating connectedness, nonvanishing, real versus holomorphic injectivity, and control at infinity. The corresponding proof contracts record the relevant boundary dispositions.

Step-3 fix-pass gates run from the repository root:

- `node tools/coverage-checklist.mjs research/frontier-17-batch-8.coverage.json` — pass: 1 page, 56 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-17-batch-8.pages.json` — pass: 35 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass on the current unspliced plan: declared page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved ids among pages whose item lists are present. This result does not classify the batch-8 ids before Step 4 splices the manifest.

## Step-5 authoring

### Authored pages and disposition

Authored `library/complex-analysis/the-identity-theorem-and-the-open-mapping-theorem.md` and its companion `library/complex-analysis/the-identity-theorem-and-the-open-mapping-theorem-examples.md`, both with `status: draft`. The A page has the required two-paragraph mathematical summary; the B page has no authored summary body. Every scaffold item was authored under its approved immutable id, and the page composition lists exactly those items. No planned claim was dropped, merged, renamed, narrowed, or deferred, so every `included` row in `research/frontier-17-batch-8.coverage.json` remains true of disk.

### Per-item precheck record

| Item | Result |
|---|---|
| `def-locally-injective-holomorphic-map` | n/a, definition |
| `def-biholomorphic-map` | n/a, definition |
| `lem-locally-zero-locus-clopen-holomorphic-function` | pass |
| `thm-identity-theorem-holomorphic-functions` | pass |
| `thm-isolated-zeros-holomorphic-function` | pass |
| `def-local-degree-holomorphic-map` | n/a, definition |
| `cor-holomorphic-function-ring-integral-domain` | pass |
| `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc` | pass |
| `cor-local-holomorphic-roots-nonvanishing-function` | pass |
| `lem-nonzero-derivative-gives-local-biholomorphism` | pass |
| `thm-local-normal-form-holomorphic-map` | pass |
| `cor-local-multiplicity-count-holomorphic-map` | pass |
| `thm-open-mapping-theorem-holomorphic-functions` | pass |
| `rem-complex-versus-banach-open-mapping-theorems` | n/a, remark |
| `thm-local-maximum-modulus-principle` | pass |
| `cor-maximum-principle-real-part-holomorphic-function` | pass |
| `thm-boundary-maximum-modulus-principle` | pass |
| `thm-maximum-modulus-principle-with-boundary-and-infinity-control` | pass |
| `thm-minimum-modulus-principle` | pass |
| `cor-constant-boundary-modulus-forces-zero-or-constancy` | pass |
| `lem-bounded-strip-maximum-principle` | pass |
| `thm-hadamard-three-lines` | pass |
| `rem-three-lines-and-complex-interpolation` | n/a, remark |
| `thm-holomorphic-inverse-function-theorem` | pass |
| `cor-injective-holomorphic-derivative-nonzero` | pass |
| `thm-complex-pythagorean-identity-by-identity-theorem` | pass |
| `ex-local-mapping-of-complex-squaring-at-zero-and-one` | pass |
| `ex-maximum-modulus-bound-for-a-polynomial-on-the-unit-disc` | pass |
| `cex-boundary-accumulation-does-not-force-holomorphic-identity` | pass |
| `cex-flat-smooth-function-has-no-holomorphic-extension` | pass |
| `cex-nonconstant-blaschke-factor-has-constant-boundary-modulus` | pass |
| `fs-maximum-modulus-principle-without-connectedness` | pass |
| `fs-minimum-modulus-principle-without-nonvanishing` | pass |
| `fs-injective-real-differentiable-map-has-nonzero-jacobian` | pass |
| `fs-boundary-maximum-modulus-principle-on-unbounded-domains` | pass |

The final scoped run reported 30 proof-bearing items checked and no precheck failures. Definitions and mathematical remarks carry the schema-required `precheck: n/a`; no judge verdict or audit stamp was written.

### Final component-provenance ledger

| Item | Statement / construction | Proof / verification | Source and edit history |
|---|---|---|---|
| `def-locally-injective-holomorphic-map` | literature-derived | not-applicable | Standard neighbourhood definition from Shabat §1.2, edited only to the library's neighbourhood and injection vocabulary. |
| `def-biholomorphic-map` | literature-derived | not-applicable | Standard definition from Lebl §5.6 and Shabat §1.2, with the local-neighbourhood convention stated explicitly. |
| `lem-locally-zero-locus-clopen-holomorphic-function` | ai-altered | ai-altered | Shabat's uniqueness proof was factored into a reusable clopen lemma and adapted to the published zero-order factorization and continuity results. |
| `thm-identity-theorem-holomorphic-functions` | literature-derived | ai-altered | Statement from Lebl Theorem 2.4.7 and Shabat Theorem 2.28; proof uses accumulating zeros, the local factorization, and the authored clopen propagation lemma. |
| `thm-isolated-zeros-holomorphic-function` | literature-derived | ai-altered | Statement from Lebl Theorem 2.4.7 and Shabat Theorem 2.27; proof combines identity with the published finite-order factorization. |
| `def-local-degree-holomorphic-map` | ai-altered | not-applicable | Lebl/Shabat local multiplicity specialized to the library's published order convention; the body explicitly discharges positivity and finiteness. |
| `cor-holomorphic-function-ring-integral-domain` | literature-derived | ai-altered | Lebl Exercise 2.4.13(a); rewritten in the library's function-ring, subring, and integral-domain conventions. |
| `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc` | literature-derived | ai-altered | Lebl Corollary 4.3.4; rederived from the published star-shaped primitive using the normalized primitive of $h'/h$. |
| `cor-local-holomorphic-roots-nonvanishing-function` | literature-derived | ai-altered | Lebl Corollary 4.3.5; the proof also realizes any prescribed root value at the centre. |
| `lem-nonzero-derivative-gives-local-biholomorphism` | literature-derived | ai-altered | Shabat Theorem 1.10 and Lebl §5.1, routed through the published Euclidean inverse theorem and complex-linear derivative criterion. |
| `thm-local-normal-form-holomorphic-map` | literature-derived | ai-altered | Lebl Theorem 5.1.3, using the local logarithm/root route and the preceding Euclidean local-biholomorphism lemma, with no Rouché dependency. |
| `cor-local-multiplicity-count-holomorphic-map` | literature-derived | ai-altered | Lebl Theorem 5.1.3 and Shabat's local inversion discussion; exact noncentral root counts are transported through the biholomorphic coordinate. |
| `thm-open-mapping-theorem-holomorphic-functions` | literature-derived | ai-altered | Lebl Theorem 5.5.1 and Shabat Theorem 1.8; the authored proof uses local normal form and the local multiplicity corollary rather than Rouché. |
| `rem-complex-versus-banach-open-mapping-theorems` | literature-derived | not-applicable | Lebl/Shabat supply the analytic theorem and MIT 18.102 supplies the distinct Banach-space statement; the latter is declared as a non-load-bearing external mention. |
| `thm-local-maximum-modulus-principle` | literature-derived | ai-altered | Lebl Theorem 3.3.6, Shabat Theorem 1.14, and Tropp Proposition 7.11; proof uses open mapping and an explicit larger-modulus target value. |
| `cor-maximum-principle-real-part-holomorphic-function` | literature-derived | ai-altered | Shabat Exercise 1.16(2); proof uses the explicit target value $f(a)+\rho/2$ in the open image. |
| `thm-boundary-maximum-modulus-principle` | literature-derived | ai-altered | Lebl Corollary 3.3.7, Shabat Theorem 1.15, and Tropp Theorem 7.12; compactness, the extreme value theorem, plane connectedness, and the local principle are explicit. |
| `thm-maximum-modulus-principle-with-boundary-and-infinity-control` | literature-derived | ai-altered | Lebl Exercise 3.3.19 in an equivalent epsilon-neighbourhood form; compact superlevel sets separate finite-boundary and infinity control. |
| `thm-minimum-modulus-principle` | literature-derived | ai-altered | Lebl Exercise 3.3.18 and Shabat Theorem 1.17; proof applies the local maximum principle to the reciprocal. |
| `cor-constant-boundary-modulus-forces-zero-or-constancy` | literature-derived | ai-altered | Lebl Exercise 3.3.20; boundary maximum is applied to both $f$ and $1/f$, with the $M=0$ case separate. |
| `lem-bounded-strip-maximum-principle` | ai-altered | ai-altered | Tropp Claim 7.14 was isolated as the exponential-regularizer lemma; all rectangle sides and the limit in the regularization parameter are explicit. |
| `thm-hadamard-three-lines` | literature-derived | ai-altered | Tropp Theorem 7.13; delta normalization covers zero boundary suprema and substrip rescaling gives full log-convexity. |
| `rem-three-lines-and-complex-interpolation` | literature-derived | not-applicable | Tropp's scalar interpolation mechanism is recorded without asserting or linking an unavailable operator theorem. |
| `thm-holomorphic-inverse-function-theorem` | literature-derived | ai-altered | Shabat Theorem 1.10 and Lebl §5.6; factorization, local multiplicity, and the earlier sufficiency lemma prove every branch of the four-way equivalence. |
| `cor-injective-holomorphic-derivative-nonzero` | literature-derived | ai-altered | Lebl Theorem 5.6.3 and Shabat's inverse section; continuity and openness make the image a domain and local inverses assemble uniquely. |
| `thm-complex-pythagorean-identity-by-identity-theorem` | literature-derived | ai-altered | Classical identity with the distinct identity-theorem proof; the item names but does not use the published exponential/addition-formula route. |
| `ex-local-mapping-of-complex-squaring-at-zero-and-one` | literature-derived | ai-altered | Standard branch-point and regular-point model from Lebl §5.1 and Shabat §1.2, with an explicit injective disc at $1$. |
| `ex-maximum-modulus-bound-for-a-polynomial-on-the-unit-disc` | ai-generated | ai-generated | Locally chosen witness $p(z)=z^2-2z+2$. The counterexample search checked the whole stated closed-disc scope by $|p(z)|\le5$ and the equality witness $p(-1)=5$; no contradiction was found. It is non-load-bearing and has `generation.role: example`. |
| `cex-boundary-accumulation-does-not-force-holomorphic-identity` | literature-derived | ai-altered | Standard $\sin(1/z)$ witness from the uniqueness treatments, with all points indexed from $k\ge1$ and the nonzero value at $2/\pi$. |
| `cex-flat-smooth-function-has-no-holomorphic-extension` | ai-altered | ai-altered | Hunter supplies the flat smooth function; the no-extension conclusion is added from the published coefficient formula and holomorphic Taylor expansion. |
| `cex-nonconstant-blaschke-factor-has-constant-boundary-modulus` | literature-derived | ai-altered | Lebl Proposition 3.5.2; denominator nonvanishing, boundary modulus, the case $a=0$, and the interior zero are checked directly. |
| `fs-maximum-modulus-principle-without-connectedness` | ai-altered | ai-altered | The sourced theorem's domain hypothesis is negated and the design's two-disc locally constant witness refutes the result on a disconnected open set. |
| `fs-minimum-modulus-principle-without-nonvanishing` | literature-derived | ai-altered | Lebl Exercise 3.3.18(b) and Shabat's warning; the identity map on the unit disc isolates the missing nonvanishing hypothesis. |
| `fs-injective-real-differentiable-map-has-nonzero-jacobian` | literature-derived | ai-altered | Shabat Remark 1.11, written as the planar map $(x,y)\mapsto(x^3,y)$ with determinant $3x^2$. |
| `fs-boundary-maximum-modulus-principle-on-unbounded-domains` | ai-altered | ai-altered | Tropp's unbounded-domain warning and the design's $\exp(-iz)$ witness; its modulus is $1$ on the real boundary and $e^y$ inside. |

No component was assigned `ai-generated` except the polynomial example's construction and verification. No AI-generated Statement or construction is a dependency target.

### Scaffold-difference ledger

All item ids, kinds, titles, reading order, and claim scopes match the approved scaffold. Seven dependency lists gained facts that the final prose genuinely uses:

- `lem-locally-zero-locus-clopen-holomorphic-function`: added `cor-complex-differentiability-implies-continuity` to justify shrinking around a nonzero holomorphic factor.
- `thm-isolated-zeros-holomorphic-function`: added the same continuity corollary to isolate a zero from the nonvanishing factor.
- `def-local-degree-holomorphic-map`: added `thm-zero-order-factorization-holomorphic-function`; isolatedness alone does not discharge finite Taylor order, while the published infinite-order/local-vanishing equivalence does.
- `thm-open-mapping-theorem-holomorphic-functions`: added `cor-local-multiplicity-count-holomorphic-map` so the target neighbourhood comes from an authored exact local fibre statement rather than an uncited root-existence move.
- `thm-boundary-maximum-modulus-principle`: added `cor-rn-is-polygonally-connected-and-locally-path-connected` for the connectedness argument proving a nonempty bounded domain has nonempty boundary.
- `thm-maximum-modulus-principle-with-boundary-and-infinity-control`: added the same Euclidean connectedness corollary for the bounded constant-function branch.
- `cor-injective-holomorphic-derivative-nonzero`: added `cor-complex-differentiability-implies-continuity` before using connectedness of the image.

`rem-complex-versus-banach-open-mapping-theorems` also declares `external_refs: [rem-open-mapping-theorem]` because the Banach-space theorem is mentioned for disambiguation and is not a logical dependency. No dependency was added merely to silence a checker, and none was dropped.

### Gates and blockers

- Final reflow changed no owned file.
- Final scoped precheck: 30 checked, 0 failing.
- `proof-contract --strict`: 30 contracts, 0 errors, 0 warnings.
- `citation-fidelity`: 81 direct citations; every exact excerpt found; no widening candidate.
- `boundary-audit`: 240 boundary rows; no repeated template cluster and no contradicted disposition.
- `coverage-checklist`: 1 page, 56 harvested results, 0 errors, 0 warnings.
- `content-policy`: 35 scoped items, 0 errors, 0 warnings.
- `validate-plan research/plan-spec.json`: exit 0; the declared page and item order is acyclic and consistent.
- Scoped `rendercheck`: 37 files, all frontmatter and math rendered cleanly.
- Scoped `prosecheck --warnings`: 37 files, 0 errors, 0 warnings.
- Scoped `citecheck`: 35 items, no warning. The repository-wide citecheck also exited 0; none of its heuristic warnings names a batch-8 item.
- `finite-smoke`: 0 errors and 0 applicable registered checks. This is not evidence for the analytic claims.
- `risk-report` exited 0 and routed the high/critical items for Step-6 review; no `risk_review` was written because that is Alpha's role.
- Repository-wide `fwdcheck`, `extcheck`, and `depsource` exited 0; depsource reported no unresolved dependency.
- Repository-wide `depcheck` exited 1. Its current failures are outside batch 8: YAML escaping in other frontier-17 authors' files, an unresolved PID-module dependency in another batch, and a pre-existing published `proved_here: false` remark lacking `sources_checked`. The saved depcheck log contains no batch-8 diagnostic. I did not edit those out-of-scope files and do not claim this global gate passed.

There is no mathematical, citation, source-liveness, published-dependency-repair, external-fallback, or missing-item blocker in batch 8 itself.

### Confidence and unverified work

Confidence in the authored mathematics and citation alignment is high. I reread the local-zero propagation, every local-degree boundary, the normalized logarithm/root construction, the Euclidean-to-holomorphic inverse step, the exact local sheet count, open mapping without Rouché, bounded and unbounded maximum arguments, the strip regularizer on every rectangle side, the delta limit in three-lines, all branches of the inverse-function equivalence, and each companion witness. The durable contract matches the canonical final step numbering and citations.

I did not perform an independent Step-6 reading, an Alpha risk review, a paired DeepSeek/Terra judgment, a publication status change, an owner audit, a git commit, or a push. I did not rerun web source discovery because the Step-2 source harvest and full-document fetch receipts were already complete and the final prose stayed within those sourced claims. The repository-wide depcheck remains red for the unrelated files listed above.
