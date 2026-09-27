# Step 3a scope review — `finite-abelian-characters-for-combinatorics`

- Run `frontier-35-ten-categories`; role alpha; label
  `step3a-pair-finite-abelian-characters-for-combinatorics-71972c0024860a29`.
- Pair: A `finite-abelian-characters-for-combinatorics` / B
  `finite-abelian-characters-for-combinatorics-examples`, batch 1, orders
  222.1 / 222.2, category `combinatorics`. Owned pair only; no scaffold, item,
  page or owner record edited. Reviewed 2026-09-24.
- Decision: **sufficient** for the interface subject the design fixes (see
  "Boundary of this decision"): the planned definition, results and example
  cover it, and every consumer-critical fact is either on the pair or is
  published/reachable from the declared prerequisites. Three source-coverage
  record defects (F1–F3 below) are reported for the owner and Step 5; none of
  them requires a scope change under my reading of the design, but F1 is a
  false `already-published` claim and should be corrected before Step 3b closes.
- Scope receipt: `research/frontier-35-ten-categories-step3a-review-finite-abelian-characters-for-combinatorics.json`
  (recorded by the command at the end of this report). No owner scope receipt
  and no earlier reviewer receipt existed for this page.

## Evidence read

- **Design (controlling).** `research/plan-combinatorics-and-categories.md`
  L10253–10283, `### Additive-character correction and new interface pair` in
  §III.6: the A page mints, **in this order**,
  `def-additive-character-of-a-finite-abelian-group`,
  `lem-additive-characters-are-one-dimensional-complex-representations`,
  `lem-additive-character-orthogonality-from-representation-orthogonality`
  (L10264–10267); the B page "requires only its A companion, writes out the
  characters of $\mathbb Z/5\mathbb Z$, and is a leaf" (L10268–10269); the
  three A suppliers have zero published consumers, CB-14c/CB-31/CB-27 are later
  consumers that "must name the exact items they use" (L10271–10275); the
  published inputs are strictly earlier than 222.1 (L10277–10283).
  Cross-reference `research/plan-algebra-track.md` L4977–4985 (Combinatorics
  owns this pair; the algebra track supplies only finite-averaging and
  representation-character lemmas). Consumer seam: L8625–8634.
- **Manifests.** `research/frontier-35-ten-categories-batch-1.pages.json`
  (A: 3 items; B: 1 item) and `research/plan-spec.json` agree exactly on
  `order`, `kind`, `category`, `title`, `companion`, `requires` for both pages
  (checked field-by-field; no diffs). `requires` = the four A pages named in the
  design: `characters-and-the-orthogonality-relations` (order 147),
  `cyclic-groups-and-direct-products` (38),
  `the-complex-exponential-and-eulers-formula` (189),
  `finite-counting-and-binomial-coefficients` (20); the B page requires only its
  A companion. All four prerequisite pages are `status: published`
  (`library/abstract-algebra/…`, `library/real-analysis/…`,
  `library/combinatorics/…`) and strictly earlier than 222.1.
- **Dependencies.** Every external id in the four scaffolds resolves to a
  published item on a page earlier than 222.1: `def-group-homomorphism`,
  `def-order-in-a-group` (24); `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `lem-complex-conjugation-and-modulus-laws` (54);
  `def-character-of-a-complex-representation`, `def-irreducible-complex-character`,
  `def-standard-inner-product-on-complex-class-functions`,
  `thm-first-orthogonality-relation-for-irreducible-complex-characters` (147);
  `def-finite-dimensional-representation-of-a-group-over-a-field`,
  `def-splitting-field-for-a-finite-group`,
  `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars`,
  `thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional`
  (143); `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`,
  `thm-kernel-and-fibres-of-complex-exponential`,
  `thm-complex-exponential-addition-and-real-extension` (189);
  `def-sum-over-a-finite-index-set` (20); `lem-finite-sum-laws` (16);
  `def-integers-modulo-n` (30). No forward reference was found in the pair.
- **Owner decisions.** `research/frontier-35-ten-categories-owner-authoring-direction.md`
  contains no pair-specific instruction (batch-8 deferral and the Easton
  pseudointersection item only); `…-deferred-pairs.json` and
  `…-deferred-items.json` do not list this pair; `…-scope-ledger.json` lists
  both pages in batch 1 with no amendment. Step-1 record
  `…-step1-def-additive-character-of-a-finite-abelian-group.json` is a `ready`
  owner receipt (scaffold readiness, not scope). Batch notes
  `…-batch-1.notes.md` record the Step-1 repair history for this pair.
- **Tools re-run (2026-09-24).** `node tools/coverage-checklist.mjs
  research/frontier-35-ten-categories-batch-1.coverage.json` → 2 pages,
  24 harvested results, 0 errors, 2 warnings (for this page: "2/8 harvested
  results scaffolded; confirm the declines with Alpha" — the deliberate
  `inline`/`already-published`/`out-of-scope` declines, F1–F3 below).
  `node tools/source-fetch-check.mjs --coverage
  research/frontier-35-ten-categories-batch-1.coverage.json` → 4/4 sources
  fetch-verified.
- **Sources re-verified directly.** Re-downloaded both PDFs and compared to the
  coverage `fetch_verified` stamps: Webb, *A Course in Finite Group
  Representation Theory*, 1 322 988 bytes,
  `sha256_16 = 3053d04310d37984` (exact match); Etingof et al., *Introduction to
  Representation Theory*, 1 403 098 bytes, `sha256_16 = 7008168dd9222197`
  (exact match). Read at the cited locators: Webb printed p. 30 (PDF p. 37) =
  Theorem 3.2.3 row orthogonality; Webb printed pp. 50–52 (PDF pp. 57–59) =
  Proposition 4.1.1, Theorem 4.1.2, Example 4.1.3 (and Corollary 4.1.4 /
  Theorem 4.1.5 immediately after); Etingof PDF p. 35 = §3.3 Example 1; PDF
  p. 37 = Theorem 3.8; PDF p. 38 = Theorem 3.9.

## Inventory against the design

- A, item 1: definition of an additive character $G \to \mathbb C^\times$ for
  finite abelian $G$ written additively, Ĝ the set of such maps, explicitly
  distinguished from the trace character of an arbitrary representation and
  without choosing an isomorphism $G \cong \hat G$. Matches design L10264–10265;
  cites `def-character-of-a-complex-representation` (L10277).
- A, item 2: dictionary — every additive character gives a unique one-dimensional
  complex representation with that trace character, every one-dimensional
  representation gives an additive character independent of basis, every
  irreducible complex representation arises this way up to equivalence, values
  have modulus one, distinct characters give inequivalent irreducibles. Matches
  design L10266 and L10278–10279; supplies the exhaustiveness clause that makes
  the pair usable as an interface.
- A, item 3: normalized row orthogonality
  $|G|^{-1}\sum_g \chi(g)\overline{\psi(g)} = \delta_{\chi\psi}$ with the
  trivial-character zero-sum clause and the published linear-first convention.
  Matches design L10267 and L10280–10281. An independent finite-sum proof route
  is recorded in the scaffold in addition to the representation route.
- B: the five characters $\chi_r([s]) = \zeta^{rs}$ of $\mathbb Z/5\mathbb Z$
  with $\zeta = e^{2\pi i/5}$, the 5×5 table and its orthogonality, plus
  exhaustiveness. Matches design L10268–10269; leaf with the A companion as its
  only page prerequisite.
- The three A items are, item for item, exactly the ids the design names, in the
  design's order; the B page has exactly the one example the design names. No
  design item is missing, duplicated or reordered, and no scaffold item exceeds
  the design.

## Source coverage

- Faithful dispositions (verified against the fetched PDFs): Webb Thm 3.2.3
  (row orthogonality) `inline` → the A orthogonality lemma; Webb Prop 4.1.1
  (cyclic characters $\chi_r(x^s)=\zeta_n^{rs}$, all of them) `inline` → the B
  example; Etingof Thm 3.8 (row orthogonality via intertwiners) `inline` → the
  A orthogonality lemma; Etingof Thm 3.9 (column orthogonality) →
  `thm-second-column-orthogonality-relation-for-irreducible-complex-characters`
  (published, order 147) — a correct `already-published` mapping; canonical
  additive-notation definition `included` → A item 1.
- **F1 (defect, reported).** Webb Example 4.1.3 is the character table of
  $C_2 \times C_2$ (Webb printed p. 52: the two $C_2$ tables and their tensor
  product). The coverage disposes it `already-published` as
  `ex-the-character-table-of-a-four`; that item is
  `items/ex-the-character-table-of-a-four.md`, title "The character table of
  $A_4$", content the alternating group with classes $1,(12)(34),(123),(132)$ —
  a different group. I searched every published character-table item on disk
  (titles: cyclic group, $A_4$, $\operatorname{Dih}(C_4)$, $Q_8$, $S_4$, $S_3$;
  plus Dirichlet-character tables) and found no published $C_2\times C_2$ /
  Klein-four character table. The claim is false. Consequence: a harvested
  source result is recorded as already built when it is nowhere in the library.
  Recommended owner action (record-level, not a scope demand): either re-dispose
  this result honestly (`out-of-scope`/`deferred` with a written reason tied to
  this pair's interface role) or approve enrichment of the B page with the small
  $C_2\times C_2$ table — the second is a scope change and needs an owner
  `proceed` for the changed scope. The pair's Step-3b author and the Step-5a
  reader should both see this finding; I did not edit the coverage record.
- **F2 (defect, reported).** Etingof §3.3 Example 1 is disposed `included` as
  A item 2. The source result contains more than the item's statement: that
  $G^{*}$ is an abelian group under pointwise multiplication and inversion,
  that $\mathbb Z_n^{*} = \{\delta_k\} \cong \mathbb Z_n$, that
  $(\prod G_i)^{*} \cong \prod G_i^{*}$ and hence $G^{*} \cong G$
  noncanonically, and the canonical identification $G \cong (G^{*})^{*}$. The
  scaffolded lemma states the dictionary, unit modulus and injectivity, but not
  the group structure, the product formula or the order consequence. The base
  facts remain available in the published library: the group structure of the
  set of degree-one representations/homomorphisms $G \to k^{\times}$ is
  `thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group`
  (published), and $|\hat G| = |G|$ follows from A item 2 plus the published
  `thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order`
  (abelian conjugacy classes are singletons). So this is an over-claiming record
  entry, not an interface gap: the pair does not block CB-14c, CB-27 or CB-31,
  both of which (a) cite the exact items the design names and (b) mint their own
  transform machinery (CB-27's design defines its own dual notation and mints
  Fourier inversion/Parseval). Recommended owner action: split the source result
  into its clauses and dispose the group-structure/order clauses explicitly
  (e.g. `already-published` to the two ids above, or `out-of-scope` with a
  reason), or approve a one-item enrichment of the A page. I did not edit the
  record.
- **F3 (minor, reported).** Webb Corollary 4.1.4 (the character table of a direct
  product is the tensor product of the tables) sits immediately after Example
  4.1.3 on printed p. 52 and receives no disposition; the locator range is
  self-consistent ("Proposition 4.1.1 through Example 4.1.3"), so this is a
  boundary observation rather than a missing disposition. Webb Theorem 4.1.2
  (simple characters of a direct product are the products, complete list) is
  disposed `out-of-scope` with the reason "the general tensor-product
  classification is already treated in representation theory and is not needed
  here". That reason is substantially accurate — the library does treat
  irreducibles of a direct product (published
  `ex-gallagher-correspondence-for-a-direct-product` with
  `thm-gallagher-correspondence-for-an-extendible-character`) — but that
  treatment lives on `clifford-theory-over-normal-subgroups-examples`, order
  510.037, i.e. after 222.1 and therefore not citable from this pair. The
  consequence to record honestly: the product classification and the
  $C_2\times C_2$ table are *not available in the reading order at 222.1*; the
  pair relies on consumers using explicit coordinates (CB-27's
  $\omega^{r\cdot x}$ indexing) or on the dictionary plus the published count
  theorem.
- **F4 (observation, no action required).** The A page's declared prerequisite
  `cyclic-groups-and-direct-products` is named by the design (L10262) but no
  scaffolded item spends it (its items supply cyclic classification and direct
  products; the pair's items use `def-order-in-a-group` and `def-integers-modulo-n`
  instead). It is a design-mandated page edge and legitimate background for the
  A-page prose (finite abelian groups as direct products of cyclic groups) — not
  a scope defect.

## Role in the library

- No in-run consumer: no other page in the run's 17 batch manifests lists this
  pair in `requires`, and `research/frontier-35-ten-categories-batch-1.cross-batch-dependencies.json`
  is an empty edge list (run-level edges: 21, none touching this pair). The B
  page requires only its A companion.
- No published consumer, matching the design (L10271–10275). The three items are
  a declared shared interface for later runs (CB-14c MacWilliams, CB-31
  quasirandomness/Cayley eigenvalues, CB-27 finite Fourier), each of which the
  design obliges to name the exact items it uses. Verified that those consumers'
  needs are met or reachable: definition, dictionary (all irreducibles, hence
  the index set) and orthogonality are on this pair; the order
  $|\hat G| = |G|$ and the dual-group structure come from the two published
  items in F2; Fourier inversion and Parseval are minted by CB-27 itself; the
  direct-product classification lives in the later representation-theory track.
- Residual uncertainty (honest statement): if the owner intends this page to be
  the library's full treatment of "characters of finite abelian groups" rather
  than the declared minimal interface, then the missing $|\hat G| = |G|$ /
  dual-group clause and the absence of any non-cyclic abelian example
  ($C_2\times C_2$) would be omissions, and enrichment of the A page (one lemma)
  and B page (one example) would be the remedy. I did not record `insufficient`
  because the controlling design fixes the pair as a small shared interface and
  enumerates exactly the three A items and the one B example that the scaffold
  now contains; F1–F2 are record-accuracy defects, not omissions of the planned
  subject. That boundary is the substance of this decision, and the owner may
  overrule it with an explicit `proceed`/`enrich` decision.

## Decision and receipt

```bash
node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories \
  --page finite-abelian-characters-for-combinatorics --decision sufficient \
  --reason "Designed interface pair matches design L10264-10269 item-for-item; four prerequisites published and earlier (orders 20/38/147/189 < 222.1); all external deps published/earlier, no forward references; both sources re-fetched with matching sha256_16 and cited locators read; no in-run or published consumers. Coverage-record defects reported for correction: F1 false already-published mapping (Webb Ex 4.1.3 C2xC2 -> ex-the-character-table-of-a-four, which is A4), F2 over-claimed included (Etingof 3.3 Ex 1 dual-group/order clauses absent from the dictionary lemma). Report: research/frontier-35-ten-categories-step3a-pair-finite-abelian-characters-for-combinatorics.md"
```

Receipt written to
`research/frontier-35-ten-categories-step3a-review-finite-abelian-characters-for-combinatorics.json`
(reviewer role only; no owner record, no item approval).
