# Step 3a scope review: symmetric functions, Hall pairing, and Schur bases

Run: `frontier-36-complete`  
A page: `symmetric-functions-hall-inner-product-and-schur-bases`  
B page: `symmetric-functions-hall-inner-product-and-schur-bases-examples`  
Decision: **sufficient** (scope only)

## Assessment

The SYMR-1 design assigns this pair a clear foundational role: construct the
stable graded symmetric-function ring and its integral/rational bases, define
the Hall pairing, and establish the Schur and skew-Schur identities needed by
later representation-theoretic pages. The current batch-25 manifest covers
that scope with 16 A items and five B items. It preserves all 14 A and five B
claims from the proposed inventory and adds the bidegree-completion and
skew-tableau definitions needed to state the Cauchy and skew results.

The A inventory includes the stable monomial, elementary/complete, power-sum,
and Schur bases; Jacobi–Trudi; the Hall form and Cauchy expansions; power-sum
orthogonality; omega on the ordinary bases; skew Schur adjointness, determinant
and tableau expansion; and the Kostka transition. The B page exercises the
integral-versus-rational power-sum distinction, degree-three basis changes,
the Cauchy reproducing identity, stable-versus-finite-rank specialization,
and skew factorization. This is adequate coverage for the promised SYMR-1
role; it does not need to absorb the later character dictionary or symmetric
group product theory.

## Sources, boundaries, and library role

`research/frontier-36-complete-batch-25.coverage.json` maps the relevant
Macdonald, *Symmetric Functions and Hall Polynomials*, Chapter I §§2–6
(printed pp. 17–25, 40–43, 62–73, 101–102), and Martin, *Lecture Notes on
Algebraic Combinatorics*, §§9.3–9.6, 9.8–9.10, and 9.13, to the claims. The
coverage records successful full-text fetches for both documents and gives
item-level dispositions. It sends the tabloid-character and cycle-class
dictionary to SYMR-2 and ordinary RSK/hook-length material to RG-11. Lambda
ring operations, a separate positivity/omega-isometry result, skew omega
conjugation, and the remaining general basis-transition tables are explicitly
outside this pair; none is required for the designated foundation or listed
next consumers.

The current plan agrees with the design on the page IDs, order, category,
companions, and prerequisites. A requires the published `symmetric-polynomials`
and `young-diagrams-tableaux-and-permutation-modules` pages; B is a leaf that
requires only A. The design positions SYMR-1 before the Frobenius-character
dictionary and skew-module/Littlewood–Richardson pages, so the division of
scope is coherent. The Step-1 drift report records no design-plan drift for
this pair, and the owner direction contains no SYMR-1-specific override.

No scope gap requiring enrichment or merger was identified. At review time,
the library A/B prose pages are not yet authored and the recomputed run status
still shows Step 1; this decision evaluates the design and current scaffolds,
not item proofs or a proceed decision.
