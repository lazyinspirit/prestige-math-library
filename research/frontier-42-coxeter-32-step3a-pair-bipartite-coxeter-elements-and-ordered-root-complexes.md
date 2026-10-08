# Step 3a scope review — bipartite-coxeter-elements-and-ordered-root-complexes

- Run: `frontier-42-coxeter-32` (batch 19), role alpha, label
  `step3a-pair-bipartite-coxeter-elements-and-ordered-root-complexes-2e7477416e47edfe`.
- A page: `bipartite-coxeter-elements-and-ordered-root-complexes` (order 1754,
  `coxeter-groups`, 6 items: 2 definitions
  `def-cg-bipartite-coxeter-element-and-root-recursion`,
  `def-cg-brady-watt-ordered-spherical-root-complex`; 3 lemmas
  `lem-cg-steinberg-bipartite-root-enumeration`,
  `lem-cg-ordered-root-pairings-and-simple-systems`,
  `lem-cg-ordered-root-complex-is-geometric-simplicial`; 1 theorem
  `thm-cg-root-complex-convex-cones-and-facet-induction`).
- B page: `bipartite-coxeter-elements-and-ordered-root-complexes-examples`
  (order 1755, 3 examples `ex-cg-ordered-roots-and-mu-matrix-in-i2-5`,
  `ex-cg-ordered-roots-and-mu-matrix-in-a3`,
  `ex-cg-cone-intersection-versus-moved-space-meet-in-a3`). Companion pointers
  agree A<->B; the B page's only `requires` is the A page; the B page is a
  dependency leaf.
- Decision: **sufficient** at the current pair scope hash (recorded with
  `tools/step3-decisions.mjs record-scope` as a non-owner review; see
  Recording below). Scope only: no item approval, no owner record, no
  scaffold, plan, manifest, coverage or page edit.

## Evidence read

- `research/frontier-42-coxeter-32-batch-19.pages.json` (all 6 A + 3 B items:
  full statements, strategies, sources, deps/justified_by),
  `...-batch-19.coverage.json` (4 sources, 52 harvested rows),
  `...-batch-19.notes.md` (scaffold record with the ten applied corrections,
  dependency levels, checks), `...-batch-19.cross-batch-dependencies.json`
  (86 rows: 84 item + 2 page, all `open`).
- Prose design and binding inputs: `research/plan-coxeter-groups-track.md`
  §CG-25 (lines 370-388; six A contracts and the B companion text), the native
  prose pages `library/coxeter-groups/bipartite-coxeter-elements-and-ordered-root-complexes{,-examples}.md`,
  `research/plan-spec.json` orders 1754/1755 (empty item arrays; ids,
  companion and `requires` equal the manifests),
  `research/coxeter-scaffold/inventory.json` CG-25,
  `research/coxeter-scaffold/definition-justifications.json` (both definitions'
  recorded justifiers are exactly `lem-cg-steinberg-bipartite-root-enumeration`
  and `thm-cg-root-complex-convex-cones-and-facet-induction`, as declared),
  `research/coxeter-scaffold/independent-audit.md` (the facet-normal transport
  and separating-root repair row), `research/coxeter-scaffold/combinatorial-source-report.md`
  CG16/CG17 items 1-8 (the selected route).
- Owner inputs: `research/frontier-42-coxeter-32-owner-scope.json` (this pair is
  a selected Coxeter pair), `research/frontier-42-coxeter-32-owner-authoring-direction.md`,
  `research/frontier-42-coxeter-32-alpha-step1-drift.md` §this page (verdict
  `no-drift`, "No prerequisite gap"), and all nine step-1 readiness records
  `research/frontier-42-coxeter-32-step1-<item>.json` (all `decision: ready`).
- Consumer-side records: the cross-batch rows of batches 20 and 31 that name
  this pair's items as suppliers (18 item edges: 6 in batch 20, 12 in batch 31)
  and the page edges B->A, batch-20->A, batch-31->A.
- Sources re-verified by me: Brady-Watt, *Lattices in finite real reflection
  groups*, arXiv:math/0501502 — downloaded fresh (532,448 bytes, matching the
  coverage stamp) and read in the extracted text: §3 definitions of `rho_i`,
  `mu_i` (cyclic `alpha`/`beta`/`R`), Theorem 3.2/Corollary 3.3/Note 3.4,
  Theorem 3.7(a)-(d), Corollary 3.8, Lemma 3.9, Definition 4.1 with Note 4.2,
  §5-§6 (Theorem 5.1, Note 5.2, Theorem 5.4, Lemmas 5.5-5.6, Note 5.7,
  Corollary 6.12, Examples 6.13-6.14), §7 (Propositions 7.1-7.2, Definition
  7.3, Theorems 7.4 and 7.6, Corollary 7.7, Theorem 7.8) and §8's opening.
  For the three non-primary treatments (Steinberg, Casselman, Fomin-Reading) I
  relied on the current fetch stamps and the pair's own locators; I did not
  re-read their full texts.
- Checks I ran: `tools/source-fetch-check.mjs --coverage ...-batch-19.coverage.json`
  (4/4 fetch-verified, 0 drops); `tools/coverage-checklist.mjs ... --require-destination`
  (1 page, 52 rows, 0 errors, 0 warnings); `tools/manifest-deps.mjs ...-batch-19.pages.json`
  (9 items, 0 normalized, 0 errors); my own recursive closure of the nine
  items' `deps`+`justified_by` (207 ids: 9 own, 38 in-run, 160 published,
  0 unresolved); a scan of all 32 run manifests for consumers of the nine ids.

## Scope against the prose design

All six CG-25 A contracts are present with their exact ids, kinds and order,
and each manifest statement carries the design's clauses:

1. `def-cg-bipartite-coxeter-element-and-root-recursion` — the tree
   classification gives the bipartition, the commuting ordered colour classes
   with `c=s_1...s_n`, cyclic `alpha_i,s_i,R_i`, the prefix roots `rho_i`, the
   dual family `beta_i` with `B(beta_i,alpha_j)=delta_ij`, the vertices `mu_i`,
   `h=ord(c)`, and `mu(a)=-2(c-id)^{-1}a` defined **only conditionally** on
   invertibility of `c-id`, proved by the recorded justifier. Rank one is
   explicit (`c=s_1`, `h=2`) and reducible systems are handled componentwise
   with `lcm` of component orders and the explicit disclaimer of a uniform
   `nh/2`; clause (6) abstains from every claim that belongs to the later
   items. This is the design contract, including the conditional construction.
2. `lem-cg-steinberg-bipartite-root-enumeration` — the `A=2(I-B)`
   Perron-Frobenius maximisation, the invariant plane with `B(u,u)=B(v,v)=d`,
   `B(u,v)=-lambda d/2`, the dihedral action, the sector `C cap P` of angle
   `theta=pi/h`, "the intersections `H_alpha cap P` are precisely these `h`
   lines", the enumeration `Phi_+=(rho_1,...,rho_{nh/2})`, the `w_0`
   identification (`c^{h/2}` resp. `c^{(h-1)/2}a`) and invertibility of `c-id`
   with `mu(rho_i)=mu_i` for all `i>=1`; rank one and reducible systems
   componentwise. Matches the design, including the "root wall meets the plane"
   clause and the explicit count `|Phi_+|=|T|=nh/2`.
3. `lem-cg-ordered-root-pairings-and-simple-systems` — the basic identities
   `(c-id)mu_i=-2rho_i`, `mu_i·rho_i=1`, uniqueness in the line
   `F(R(rho_i)c)`; the sign/vanishing identities (antisymmetry,
   `mu_i·rho_j>=0` for `i<=j`, `mu_{i+t}·rho_i=0` for `1<=t<n`, `<=0` below the
   diagonal); separation of `rho_k` from earlier positive cones; and the
   canonical simple systems `P_sigma` by the reverse-selection procedure with
   existence, independence, spanning, the `sigma` factorisation, the positive
   roots `epsilon_i`, commuting out-of-order factors, the global reordering
   `theta` with the lexicographically-first clause (Corollary 6.12), the
   complete rank-two factorisation/positivity analysis (Theorem 5.4 and Lemma
   5.6), and the `tau_{i_j}>=theta_j` domination clause. This is the design's
   clause list in content.
4. `def-cg-brady-watt-ordered-spherical-root-complex` — `X(c)` with vertex set
   the ordered positive unit roots and simplices the increasing tuples with
   `R(rho_{i_k})...R(rho_{i_1})<=_T c` (equivalently
   `l_T(R(rho_{i_1})...R(rho_{i_k})c)=n-k`); the full subcomplexes `X(sigma)`
   on `P_sigma` and the `X(sigma,rho)`; the positive cones `c[F]`, `c[Y]` and
   the realisations `|Y|=c[Y] cap S^{n-1}`; clause (4) explicitly abdicates
   sphericity/embedding/convexity/dimension to the following lemma and the
   recorded justifier. Matches the design.
5. `lem-cg-ordered-root-complex-is-geometric-simplicial` — the factorisation
   criterion `l_T(R(a_1)...R(a_k)c)=n-k <=> mu(a_i)·a_j=0 (i>j)`, linear
   independence and the common open halfspace, `X(sigma)` a complex of
   dimension `l_T(sigma)-1` with the ordered attachment cones over the
   `mu(tau)^perp` faces, and `c[F] cap c[F']=c[F cap F']` with the induced
   equality of realisations. Matches the design.
6. `thm-cg-root-complex-convex-cones-and-facet-induction` — the
   separating-root lemma, the facet induction `c[X(sigma,tau_i)]=Y=Z` with the
   exact halfspace description, the spherical convexity
   `|X(sigma)|=S^{n-1} cap M(sigma) cap bigcap mu(theta_j)^+` and the explicit
   limits clause (nothing about arbitrary moved-space intersections, the
   lattice property, or `sigma` not below `c`). Matches the design, including
   the required "both inclusions, not an unexpanded similar argument"
   formulation.

The B page carries exactly the three commissioned checks, one item each: the
I2(5) ordered roots and `mu`-matrix, the A3 ordered roots and `mu`-matrix with
the doubled-word negative half, and the A3 moved-space-versus-cone example
(the correct cone intersection is exhibited symbolically as
`c[X(alpha)] cap c[X(beta)]={0}`; no drawing is promised by the text library
format). Nothing designed was dropped, weakened or moved; no item beyond the
six contracts plus the three companion checks was added.

The ten corrections recorded in the batch notes replace false clauses of a
prior manifest by exact source statements without dropping any contracted
claim. I re-verified the load-bearing ones against the fetched Brady-Watt text:
Corollary 6.12 ("the simplex `<theta_1,...,theta_k>` is the first top
dimensional simplex of `X(sigma)` in the lexicographic order") and Example 6.13
in full (`Delta={tau_1,tau_7,tau_9}` while the `epsilon`'s are
`{tau_1,tau_2,tau_4}` — the false "equal as sets" clause is correctly gone);
Theorem 5.4 and Lemma 5.6 (`tau_1·tau_t<=0`, `tau_i·tau_{i+1}>=0`, and the
dual `i<j => rho_i·rho_j<=0`, `i>j => rho_i·rho_j>=0` with the correct
hypothesis `R(rho_i)R(rho_j)<=gamma`); Note 5.7 (the geometric edge criterion);
Definition 4.1 with Note 4.2 (the `n-k` criterion) and the A3 moved-space
motivation in §4. I also re-derived the I2(5) data (the displayed five roots
have `B`-norm one, `mu_3=mu_1-2rho_1`, `mu_4=mu_2-2rho_2`,
`mu_5=mu_3-2rho_3`, the `c`-cyclicity of the displayed 5x5 matrix and
`rho_{i+5}=-rho_i`) and the A3 model (`c=(1 2 4 3)=(1 4)alpha=beta(1 4)`,
`alpha=(1 2)(3 4)`, `beta=(1 3)(2 4)`).

## Source coverage

The coverage names four fetch-verified treatments (4/4 stamps current) and 52
harvested rows: 25 `included` (Brady-Watt §3-§7 results -> the six A items;
Steinberg 3.1/Theorem 4.2/Corollaries 4.4-4.5 -> the enumeration; Casselman
Theorem 3.11 -> the rotation angle; Fomin-Reading §2.5 -> the bipartition and
the plane), 15 `inline` (e.g. Theorems 3.2/7.4/7.6 and Corollaries 3.3/7.5/7.7
inlined into the items that state them), 1 `deferred` (Brady-Watt Theorem 7.8,
the lattice property, to `noncrossing-partition-lattices-and-kreweras-complements`,
batch 31 — a live scaffold page whose manifest carries
`thm-cg-noncrossing-finite-lattice-and-conjugacy-independence` and
`lem-cg-convex-root-subcomplex-intersection-and-purity`), and 11 `out-of-scope`
with individual reasons (Petrie-vertex packaging; Casselman's alternative
tree/numbering/commutation/conjugacy/eigenvalue/matrix routes replaced by the
direct dual-basis and trace routes; Fomin-Reading's A5 and A3/B3 figures;
Brady-Watt §8/EX(gamma)/associahedra).

The two coverage cautions that mattered are handled correctly and not
imported: the F4 Example 6.13 counterexample (a stronger "equal sets" clause
was rejected rather than imported) and the A3 interleaved-convention example
(the pair uses its own bipartite labelling and the conjugate pair under the
relabelling `(3 4)`, recomputed in the manifest). The deferred Theorem 7.8
needs the intersection embedding and convexity supplied here; its destination
page is live and declares those suppliers. §8/EX(gamma) belongs to the later
Cambrian/noncrossing development of the track and is consumed by no claim of
this pair.

## Dependencies, consumers and unmet prerequisites

- All 48 distinct declared supplier ids resolve: 24 cross-batch in-run
  suppliers (batches 2, 4, 7, 8, 13, 17, 18 — all complete) plus 7 same-pair
  items plus 17 published `items/*.md`; 0 unresolved. The full transitive
  closure spans 207 ids (9 own, 38 in-run, 160 published). The batch's own
  ledger reviews all 86 cross-batch edges (84 item + 2 page), all `open`
  (Step-3 supplier proof work), none removed; the two page rows are the
  declared prerequisites `finite-lattice-projections-and-coxeter-chain-labels`
  (batch 5) and `finite-reflection-length-and-orthogonal-moved-spaces`
  (batch 18), both live with populated manifests.
- I read the cited clauses of the load-bearing in-run suppliers and found the
  consumed claims present with matching hypotheses and conventions:
  `lem-cg-positive-definite-diagram-exclusions` (2) no cycles;
  `thm-cg-finite-chamber-tiling-and-coset-face-identification` (1)-(3)
  tiling, simplicial chambers, point stabilisers;
  `thm-cg-finite-parabolic-longest-element-and-opposition` (1)(ii)
  `l(w_0)=|N(w_0)|=|Phi_+|`;
  `thm-cg-carter-reflection-length-and-absolute-order` (1) `l_T=dim M`,
  (2) prefix form, (3) moved-space rigidity under a common upper bound;
  `lem-cg-orthogonal-wall-form-and-subspace-restriction` (1)-(3) Wall form and
  restriction; `def-cg-geometric-inversion-set` (3) and
  `thm-cg-root-inversion-formulas-and-strong-exchange` (1)-(2) prefix roots
  `=N(w^{-1})`, `|N(w)|=l(w)`;
  `lem-cg-reflection-form-invariance-and-rank-two-orders` (2)-(3) reflection
  identities and the rank-two product order, with
  `lem-cg-dual-action-and-chamber-faces-exist` (3)(i) supplying the dihedral
  identification `W_{s,t}` of order `2m` for finite `m`;
  `thm-cg-root-sign-and-simple-reflection-positivity` (1)-(3) sign partition
  and simple-reflection positivity;
  `def-cg-spherical-gram-simplex-and-angular-link` and
  `lem-cg-spherical-simplex-existence-and-link-gram-formula` for the
  realisation conventions;
  `lem-cg-diagram-products-and-invariant-form-comparison` (1)-(4) for the
  componentwise reducible clause;
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` (4) for the
  A3 permutation model.
- Consumers: 6 item edges in batch 20
  (`finite-coxeter-invariants-and-coinvariant-gradings`: the classical and
  exceptional spectra lemmas and the eigenvector theorem use the bipartite
  element, the cyclic indexing and the plane/enumeration/`c-id` invertibility)
  and 12 item edges in batch 31
  (`noncrossing-partition-lattices-and-kreweras-complements`: the noncrossing
  poset definition, the reversed-product/face-span lemma, the convex
  subcomplex purity lemma and the lattice theorem use `X(c)`, the subcomplexes,
  the factorisation criterion, the simple systems `P_sigma`, the facet
  induction and convexity). The consumer-side ledger rows declare only clauses
  the pair supplies; I found no consumer needing a clause outside the six
  contracts. The B page is consumed only by the A page (dependency leaf).
- **No confirmed unmet prerequisite.** Every prerequisite named by the pair's
  statements is present either in the published library (`items/*.md`) or in
  the current scaffold (in-run batches), and the page-level reading
  prerequisites are live. The two boundary cases I examined and set aside:
  (i) the "dihedral group of order `2m`" identification needed by the Steinberg
  lemma and the I2(5) example is genuinely supplied
  (`lem-cg-dual-action-and-chamber-faces-exist` (3)(i)); (ii) the lattice
  property of `[1,c]` and the purity/span lemma are deliberately not supplied
  here but are homed on the live batch-31 page that consumes this pair,
  matching the design's split.

## Flagged findings for the owner (non-blocking; scope unaffected)

1. **Cyclic indexing of `beta_i` omitted in the definition (statement-level,
   for Step-3b).** `def-cg-bipartite-coxeter-element-and-root-recursion` (2)
   declares cyclic indexing only "of `s_i`, `alpha_i`, `R_i`", yet (3) defines
   `mu_i := R_1...R_{i-1} beta_i` "for every integer `i>=1`" and (3) asserts
   the recursion `mu_{i+n}=rho(c)mu_i` as an assertion of the justifier, while
   the justifier's statement proves the recursion for `rho` only and clause (4)
   states `mu(rho_i)=mu_i` "for every `i>=1`". Brady-Watt (p. 4: "the `beta`'s
   and the `R`'s are again indexed cyclically modulo `n`") fixes the intended
   convention. Recommended owner/Step-3b repair: add `beta_{i+n}:=beta_i` to
   clause (2) (or define `mu_i` for `i>n` by the recursion); this is a
   well-definedness bookkeeping fix, not a scope change.
2. **Item source ranges versus coverage dispositions (bookkeeping).**
   `lem-cg-ordered-root-pairings-and-simple-systems` cites "Corollary 6.12,
   Examples 6.13-6.14" among its Brady-Watt loci and
   `ex-cg-ordered-roots-and-mu-matrix-in-a3` cites Fomin-Reading Example 2.17 /
   Figure 2.6, while the coverage disposes Examples 6.13-6.14 and Examples
   2.17-2.18 as `out-of-scope` illustrations not needed by a contracted claim.
   Both readings are defensible (6.13 was consulted to falsify a rejected
   clause; 2.17 is corroborative), but the two records should be reconciled at
   Step 3b if the coverage dispositions are meant to be exhaustive.
3. **Known in-run supplier defect not consumed here.** Batch 4's
   `lem-cg-dual-action-and-chamber-faces-exist` (3)(ii) (the `m=infinity` union
   sentence) is the defect already routed by the batch-9/batch-17 reviews. The
   pair is finite-type throughout and consumes only the finite-`m` clause
   (3)(i); no clause of this pair is affected, and no new action is needed from
   this review.

## Unresolved uncertainty

None material to the scope decision. I did not re-read the Steinberg,
Casselman and Fomin-Reading full texts (their role is corroborative for the
bipartition, the angle `pi/h` and the plane); their fetch stamps are current.
I did not verify the proof strategies line by line (Step 3b's task) or entries
of the displayed matrices beyond the I2(5) and A3 spot checks described above.

## Recording

Decision **sufficient** recorded with
`node tools/step3-decisions.mjs record-scope --run frontier-42-coxeter-32 --page bipartite-coxeter-elements-and-ordered-root-complexes --decision sufficient`
at pair scope hash `4063d0c8434c49c0569f3711eee8fe2db785044b665fe386143b1173c303b618`;
the reason names this report, the clause-for-clause design match, the coverage
dispositions, the dependency resolution and finding 1 above. Receipt:
`research/frontier-42-coxeter-32-step3a-review-bipartite-coxeter-elements-and-ordered-root-complexes.json`.
