# Step 3b repair B — checkpoint notes

Role: alpha-high, label `step3b-repair-b-real-forms`.

Assigned items (exactly four, nothing else):

1. `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications`
2. `thm-classification-of-real-semisimple-lie-algebras`
3. `prop-classical-real-forms-of-the-classical-complex-lie-algebras`
4. `cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group`

## Source locators read (Knapp, Lie Groups Beyond an Introduction, 2nd ed., cached PDF /tmp/knapp-beyond2.pdf)

- VI §1, Lemma 6.4 and Theorem 6.6, printed pp. 350-353; compact form (6.12), printed pp. 353-354; Corollary 6.10 (split form), p. 353.
- VI §7, Proposition 6.72 and proof, printed pp. 393-394 (string-symmetric case: compactness preserved; non-strongly-orthogonal case: compactness reversed).
- VI §8, Theorem 6.74 (same Vogan diagram => isomorphic) and proof, pp. 399-400; abstract Vogan diagrams, Theorem 6.88 and its full proof, pp. 403-406 (normalized root vectors from Thm 6.6, theta preserves u0 via a_alpha a_{-alpha}=1 and a_{alpha+beta}=±1), Figure 6.1 entries, pp. 397-406.
- VI §10, Theorem 6.96 (Borel-de Siebenthal) with Lemmas 6.97-6.98 and proof, pp. 409-412; case analysis and Figures 6.1-6.3, pp. 413-421; Proposition 6.104, pp. 420-421; Theorem 6.105, pp. 421-422.
- VI §11, restricted roots in the classification, tables (6.107) and (6.108), pp. 422-426; low-dimensional isomorphisms (6.110), p. 426.
- VI §3, Theorem 6.31 and Historical Notes p. 766 (Borel 1998 pointer) for item 4 background.

## Item 1 status: COMPLETE, precheck PASS, rendercheck OK

Statement kept verbatim. Both directions now proved. Key mathematical steps:
- Satake decoration determines (Sigma, m, dim a_0): white vertices and arrows give Sigma and rank; black vertices plus multiplicativity rules give compactness of imaginary roots; multiplicities from complex pairs and imaginary roots.
- Uniqueness: (Sigma, m, dim a_0) determines the simple real form up to isomorphism, read off from Knapp's classification tables (6.107)/(6.108) + Theorem 6.105.
- Therefore equivalent Satake diagrams force isomorphic real forms; combined with Vogan well-definedness/injectivity, get the iff and the bijection.
- Step numbering canonicalised to satisfy precheck (1.1-1.5, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1).

## Dependencies added so far

Item 1 `deps` now: [thm-classification-of-real-forms-by-vogan-diagrams, thm-classification-of-real-semisimple-lie-algebras, def-satake-diagram, def-vogan-diagram, thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification, thm-restricted-root-space-decomposition, def-axiom-of-choice, thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence, thm-conjugacy-of-compact-real-forms, thm-conjugacy-of-cartan-involutions, thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one, def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-cayley-transform-of-a-theta-stable-cartan-subalgebra, def-maximal-split-abelian-subspace-and-real-rank, thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k, def-complexification-of-a-real-lie-algebra, def-restricted-root-and-restricted-root-space, thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals, def-simple-semisimple-and-reductive-lie-algebras]

## Item 4 plan (conjugacy half, local displacement-free route)

Established facts to use: `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space` (Phi: p_0 -> G/K is a diffeomorphism, hence G/K is contractible), `prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k` (G-invariant metric, curvature R(X,Y)Z=-[[X,Y],Z], nonpositive), `thm-global-cartan-decomposition...` (K x p_0 -> G diffeo), `prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition`, `thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus` (every element = exp X), `thm-structure-of-a-compact-connected-abelian-lie-group`.

Argument (conjugacy): Let L <= G be compact. Need L contained in a conjugate of K.
- Replace L by its identity component (compact connected; exp surjective).
- K acts isometrically on X=G/K; for z in X the orbit L.z is compact, so its diameter delta is attained.
- Faithful Caratheodory/"halving" step: if z and gz are two points of the orbit, the midpoint m of z and gz in the Euclidean model p_0 is again in the orbit, and by the CAT(0)-type midpoint inequality every point z'' of L.z satisfies d(z'',m)^2 <= (d(z'',z)^2 + d(z'',gz)^2)/2 <= delta^2, so d(z'',m) <= delta/2. Since m is in the orbit, taking the supremum shows delta = 0 unless... (halving gives contradiction), hence the orbit is a point and L fixes it.
- A fixed point z = gK gives L <= gKg^{-1}. Maximality of K then gives the corollary.
- Midpoint in orbit proof: z = exp(X)K, gz = exp(Ad(k)X)K; midpoint = exp((X + Ad(k)X)/2)K = exp(Ad(n)X + (X - Ad(n)X)/2)K = n exp((X - Ad(n)X)/2)K. Also need the Euclidean midpoint inequality d(a,m)^2 <= (d(a,b)^2+d(a,c)^2)/2 - d(b,c)^2/4 with m the midpoint of b,c. This follows from Phi being an isometry onto the flat model p_0.

Careful: I need to check whether the symmetric-space metric identification makes Phi an isometry (not just a diffeomorphism). The curvature is nonpositive and geodesics through the origin are exp(tX)K; I plan to prove directly that Phi is isometric by showing d(exp(X)K, exp(Y)K) = |X-Y|_{B_theta} using the minimizing-geodesic property of the straight segment in p_0 (its image has length |X-Y| and is the geodesic).

## Open items / risks

- For item 4, must confirm local suppliers for: midpoint inequality in a CAT(0)/nonpositively curved setting OR an elementary proof in the flat model; and the fact that compact subgroups of Lie groups are Lie subgroups with exp surjective on identity components.
- Item 2 needs the realization (Knapp Thm 6.88) and enumeration (Thm 6.96 + case analysis) written into the proof; the supplier `thm-existence-of-a-compact-real-form` is being repaired in lane A; item 2's own construction can use `lem-chevalley-basis-and-real-structure-constants`, `thm-serre-presentation-theorem`, `thm-existence-theorem-for-complex-semisimple-lie-algebras`.
- Item 3 needs item 2's classification.

## Checkpoint 2 — all four items complete (2026-09-17)

Items 1-4 are repaired, authored, precheck PASS, rendercheck OK, decisions
recorded `repaired`/confidence 1. Report written to
`research/phase-2-remaining-27-real-forms-repair-b-report.md`.

Decisions recorded (sha256 prefixes):
- thm-vogan-and-satake-...: f6756904 (re-recorded after breaking the cycle)
- thm-classification-of-real-semisimple-lie-algebras: 8436742a
- prop-classical-real-forms-...: f92be902
- cor-maximal-compact-subgroups-...: 3f3b6d66

Cycle note: item 1 originally cited item 2, which consumes item 1; the
uniqueness of (Sigma, m, dim a_0) is now read from the source classification
(Thm 6.105 + tables (6.107)/(6.108)) directly, and the dependency was removed.
depcheck reports no cycles.

Open for the orchestrator: no proof-contract file covers the DG-34 pair, so the
strict proof-contract gate could not be run (details in the report). Item 4
step 1.6 states the standard midpoint convexity inequality for distance
functions on a Hadamard manifold; the curvature input is local but the general
comparison is cited, not reproved by Jacobi fields.
