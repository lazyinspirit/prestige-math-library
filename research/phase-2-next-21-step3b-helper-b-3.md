# Step 3b helper checkpoint — group b, helper 3

Run: `phase-2-next-21`  
Pair: `brauers-second-main-theorem` / examples  
Role: `alpha-high`, Sol xhigh authoring helper

## Verified start and controlling material

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the complete helper task,
  `briefs/group-author-helper.md`, the owner authoring direction, the current
  Batch-9 pages manifest, coverage, notes, cross-batch input, the complete
  RG-17 design section and conventions, and the current Step-3a scope receipt
  and report. The scope receipt is `sufficient` for this pair.
- Both owned page files and all 19 manifest-owned item files were absent at
  author start. They must be constructed from the current manifest. Shared
  manifests, coverage, contracts, decisions, plan/prose, and the group report
  remain read-only to this helper.
- Exact statements were read for all 26 external direct dependencies in the
  current manifest. The complete definitions of a splitting modular system
  and an `OG`-lattice were also read: `O` is a complete DVR, while `K` and `k`
  are splitting fields for all subgroups; algebraic closedness is not part of
  that published definition.
- Conventions: left modules; a block is represented by its primitive central
  idempotent; `c^G` always denotes local-to-global block induction; the
  `p`-part and `p'`-part commute; all lattices are finite free over `O`.

## Authoritative source passages read

- Craven, *The Brauer Correspondence*, Chapter 1 section 1.5, printed
  pp. 12–13 in the retrieved thesis (generalized decomposition numbers and
  Theorem 1.19); Chapter 2 sections 2.1 and 2.4–2.5, printed pp. 18–30
  (relative projectivity, Theorems 2.17–2.18, Theorem 2.20, Lemma 2.21, and
  Theorem 2.22); and Chapter 3 sections 3.1–3.3, printed pp. 31–36 (relative
  trace ideals, Rosenberg extraction, and Higman's criterion). Full PDF:
  <https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf>.
- Aschbacher–Kessar–Oliver, *Fusion Systems in Algebra and Topology*, Part IV,
  Proposition 4.9 and surrounding modular-system conventions, Example 4.25,
  and Theorems 5.4–5.5, printed pp. 266–278. Full PDF:
  <https://www.math.univ-paris13.fr/~bobol/ako.pdf>.
- Meierfrankenfeld, *MTH 912 Class Notes*, Definition 6.7.5 through Corollary
  6.7.17, printed pp. 167–171, including the blockwise section projection and
  coefficient proof. Archived full PDF:
  <https://web.archive.org/web/20220618221643id_/https://users.math.msu.edu/users/meierfra/Classnotes/MTH912F04/912F04master.pdf>.
- Gyujin Oh, *Basic Modular Representation Theory*, Theorem 4.1 and its
  endomorphism-ring proof, PDF pp. 6–7. Full PDF:
  <https://web.math.princeton.edu/~gyujino/Modrepthy.pdf>.

The fetched files match the Batch-9 recorded SHA-256 prefixes
`c8baed359312aced`, `71cf6d43e2ebb65d`, `f36358a3e7ebac61`, and
`49ff42ac0c90a731` respectively.

## Scaffold corrections for lead integration

1. `thm-generalized-decomposition-numbers-exist-and-are-unique` must not use
   `cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero`:
   its hypothesis says the field is algebraically closed, while the pair fixes
   only a splitting field. The scalar equation is enough: Schur gives
   `rho(u)=lambda id`, and `u` of `p`-power order gives
   `lambda^{|u|}=1`. The authored item will omit this inapplicable dependency.
2. The manifest's published Mackey and Higman dependencies are stated for
   finite-dimensional `kG`-modules, but the two consumers require finite-free
   integral `OG`-lattices. A new local lemma with unique ID
   `lem-integral-mackey-and-higman-for-og-lattices` will prove the Mackey
   decomposition, induction transitivity, the integral relative-trace
   criterion, and the needed vertex containment. It will occur on the A page
   immediately after integral Krull--Schmidt, whose local-endomorphism-ring
   clause its vertex-containment proof uses. The lead must add it to the
   Batch-9 manifest, coverage, and affected contracts.
3. `thm-nagao-decomposition-for-restriction-to-a-centralizer` also needs the
   exact published fact
   `cor-normal-p-core-lies-in-every-block-defect-group`: because
   `H <= N_G(D)`, the subgroup `D` is normal in `H`, hence lies in each local
   defect group. This makes every local induction `c^G` defined through
   centralizer containment. The authored item will add this dependency.
4. `def-generalized-decomposition-numbers` uses the scalar conclusion, while
   the exact published Schur corollary gives only a division endomorphism
   ring. The scalar conclusion comes from the separately published splitting-
   field condition. The authored definition therefore directly adds
   `def-splitting-p-modular-system-for-a-finite-group`; the lead must integrate
   this dependency.
5. The manifest statement of
   `thm-green-indecomposability-for-index-p-integral-induction` omits the
   absolute-indecomposability hypothesis in Craven and the algebraically closed
   residue-field hypothesis in Oh. A splitting field alone does not state that
   every indecomposable lattice has scalar residual endomorphism division
   algebra. The authored theorem therefore assumes that `k` is algebraically
   closed and directly adds `def-algebraically-closed-field`. Downstream items
   that invoke this theorem must carry that hypothesis unless the lead supplies
   a separate base-change argument.
6. The manifest dependencies for
   `lem-relative-projectivity-forces-p-section-character-vanishing` include a
   Mackey theorem only for finite-dimensional `kH`-modules and a Frobenius
   character theorem stated only over `C`. Neither exact statement supplies
   the needed integral `OH`-lattice argument over the fraction field `K`.
   The authored lemma instead uses the new integral Mackey supplier and proves
   the induced trace-zero calculation directly. It also propagates the
   algebraically closed residue-field hypothesis from correction 5. The lead
   must replace those two manifest dependencies, add the local supplier and
   algebraically-closed-field dependency, and propagate the hypothesis.
7. The Nagao scaffold cites the published Higman theorem for
   finite-dimensional `kH`-modules, but its statement concerns integral
   `OH`-lattices. The authored proof replaces that edge with
   `lem-integral-mackey-and-higman-for-og-lattices`. It also replaces the
   maximal-Brauer-support edge by the exact and stronger-for-this-purpose
   published `cor-normal-p-core-lies-in-every-block-defect-group`, since
   `D` is normal in `H`. Both changes are required for the displayed proof;
   the lead must integrate them.
8. The Second Main Theorem scaffold uses the local block expansion of
   generalized decomposition numbers but does not declare the exact result
   that removes cross-block ordinary decomposition entries. The authored
   theorem directly adds the published
   `prop-decomposition-matrix-is-block-diagonal-after-block-ordering`. It also
   propagates the algebraically closed residue field from corrections 5–6.
   The lead must integrate the added dependency and hypothesis.
9. The first `S3` example needs the exact local fact that the central group
   `<t>=C_G(t)` lies in every defect group of its sole block. The authored
   example directly adds
   `lem-central-p-subgroups-lie-in-every-block-defect-group`; this avoids
   silently assuming the local block has full defect before applying Brauer
   First. The lead must add this dependency.
10. The example scaffold used published examples from other B pages as direct
    dependencies. The repository dependency gate forbids those cross-B edges.
    In `ex-p-sections-and-brauer-subsections-in-a-small-finite-group`, the
    authored verification now computes the two central block idempotents of
    `kS3` directly and uses only the A-page suppliers
    `def-brauer-homomorphism-for-a-p-subgroup`,
    `thm-defect-groups-are-maximal-brauer-support`, and
    `prop-principal-block-has-sylow-defect`. In
    `ex-second-main-theorem-with-no-inducing-local-block`, the three external
    B-example dependencies are replaced by the pair's first example,
    `lem-block-idempotents-lift-uniquely-from-kh-to-oh`, and
    `thm-blocks-partition-ordinary-and-brauer-irreducible-characters`; the
    standard representation's block and transposition trace are checked
    directly. The lead must integrate these dependency replacements.

## Item checkpoint

### 1. `lem-commuting-p-and-p-prime-parts-of-a-finite-group-element`

- Claim and conventions: for `|g|=p^a m`, the unique commuting factors are
  `g^(sm)` and `g^(rp^a)` when `rp^a+sm=1`; formation is conjugation
  equivariant.
- Sources: Craven section 1.5, pp. 13–14; Aschbacher–Kessar–Oliver Part IV
  section 4.4, p. 272.
- Dependencies: `def-p-regular-and-p-singular-elements`,
  `thm-bezout-identity`.
- Proof: constructs the factors, checks their orders and product, recovers any
  competing commuting factors as powers of `g` using the two coprime orders,
  and then applies the Bezout projections. Boundary cases `a=0` and `m=1`
  are explicit. No choice principle is used.
- Checks: mathematical self-check complete; mechanical checks are deferred to
  the explicit-path batch run.

### 2. `def-p-section-of-a-p-element`

- Claim and conventions: `S_G(u)` consists of elements whose unique `p`-part
  is conjugate to `u`; it is equivalently the union of classes meeting
  `{uv : v in C_G(u) is p-regular}`.
- Sources: Meierfrankenfeld Definition 6.7.5 and Lemma 6.7.6, pp. 167–168;
  Craven section 1.5, pp. 13–14.
- Dependency: the preceding commuting-parts lemma.
- Verification: conjugate the unique factorization in one direction and use
  uniqueness for the commuting product `uv` in the other. The identity
  section is checked to be the `p`-regular set. No choice principle is used.
- Checks: mathematical self-check complete; mechanical checks deferred.

### 3. `def-generalized-decomposition-numbers`

- Claim and conventions: for `H=C_G(u)`, restrict `chi` into ordinary
  constituents, let the central element `u` act on each constituent by
  `lambda_(u,zeta)`, and define `d^u_(chi,phi)` by the finite sum of these
  scalars times ordinary decomposition numbers.
- Sources: Craven section 1.5, pp. 13–14; Aschbacher–Kessar–Oliver after
  Theorem 5.4, pp. 277–278.
- Dependencies: the manifest dependencies plus the direct splitting-system
  dependency explained in scaffold correction 4.
- Well-definedness: Maschke gives the unique finite constituent
  multiplicities; Schur plus the splitting-field condition gives the scalar;
  ordinary decomposition numbers are already defined. The coefficient is in
  `K`, need not be nonnegative integral, and its scalar factor has `p`-power
  order. No choice principle is used.
- Checks: mathematical self-check complete; mechanical checks deferred.

### 4. `thm-generalized-decomposition-numbers-exist-and-are-unique`

- Claim: the explicit coefficients give `chi(uv)=sum_phi d^u_(chi,phi)
  phi(v)` on all `p`-regular `v in C_G(u)`, and are unique; at `u=1` they
  are the ordinary decomposition numbers.
- Sources: Craven section 1.5, pp. 13–14; Aschbacher–Kessar–Oliver
  pp. 277–278.
- Dependencies: generalized-decomposition definition, Maschke, Schur,
  ordinary decomposition numbers, and the irreducible Brauer basis. The
  inapplicable algebraically-closed-field corollary was removed as recorded in
  scaffold correction 1.
- Proof: restrict and decompose by Maschke; use centrality and the splitting
  condition to obtain the scalar; apply the ordinary decomposition formula at
  `v`; collect finite sums; use Brauer-basis linear independence. The scalar's
  `p`-power order follows directly from `rho(u)^|u|=1`. The `u=1` and `v=1`
  cases are explicit. No choice principle is used.
- Checks: mathematical self-check complete; mechanical checks deferred.

### 5. `lem-block-idempotents-lift-uniquely-from-kh-to-oh`

- Claim: reduction gives a bijection on primitive central idempotents of
  `OH` and `kH`.
- Source: Aschbacher–Kessar–Oliver Proposition 4.9 and the cited lifting
  results, pp. 267–270; Craven's integral modular-system convention.
- Dependencies: splitting modular system; blocks by primitive central
  idempotents.
- Proof: proves `mOH` is radical by a convergent geometric series; performs an
  explicit Newton lift; proves centrality with the finite determinant argument
  on `eA(1-e)` and `(1-e)Ae`; proves uniqueness from central cross-idempotents
  in the radical; and proves primitivity in both directions. The trivial group
  is covered, and no Nakayama or choice principle is invoked.
- Checks: Newton error is explicitly quadratic; mathematical self-check
  complete; mechanical checks deferred.

### 6. `def-relative-projectivity-and-vertices-for-og-lattices`

- Claim and conventions: relative `Q`-projectivity is the direct-summand
  condition for `Ind_Q^H Res_Q^H M`; a vertex is an inclusion-minimal
  `p`-subgroup witness for a nonzero indecomposable lattice.
- Sources: Craven sections 2.1–2.2, pp. 19–22; Aschbacher–Kessar–Oliver
  Definition 4.1 and the Theorem 5.4 proof, pp. 264 and 276–277.
- Dependency: the published `OG`-lattice definition.
- Existence/boundaries: an explicit finite Sylow averaging section of the
  induction counit proves every lattice is relatively Sylow-projective;
  finiteness then gives a minimal witness. The lattice is required nonzero for
  the vertex notion. No arbitrary choice is used.
- Checks: mathematical self-check complete; mechanical checks deferred.

### 7. `thm-krull-schmidt-for-og-lattices`

- Claim: every finite-rank `OH`-lattice has a unique finite indecomposable
  decomposition, and a nonzero indecomposable has local endomorphism ring.
- Sources: Aschbacher–Kessar–Oliver Part IV, Propositions 1.2–1.9 and 4.9,
  pp. 228–230 and 267; Craven sections 2.1–2.2, pp. 18–22.
- Dependency: the integral lattice/relative-projectivity definition.
- Proof: for `E=End_OH(M)`, proves `mE` lies in the Jacobson radical, uses the
  quotient identity `J(E/mE)=J(E)/mE` to identify `E/J(E)` as semisimple
  Artinian, lifts idempotents first through the nilpotent residual radical and
  then by completeness, derives locality from absence of nontrivial
  idempotents, and gives the finite local-endomorphism exchange and
  cancellation argument for uniqueness. Zero and nonzero cases are separated.
  No Nakayama, DC, or AC is used.
- Checks: the final reread rejected the invalid noncommutative inference
  “`x^n in J(E)` implies `x in J(E)`” and replaced it with the proved quotient-
  radical identity above. Mathematical self-check and final mechanical checks
  are complete.

### Local supplier. `lem-integral-mackey-and-higman-for-og-lattices`

- Claim: proves the Mackey double-coset formula and induction transitivity for
  finite-free integral lattices, the integral relative-trace form of Higman's
  criterion, and containment of a vertex in a conjugate of every relative-
  projectivity subgroup.
- Source: Craven Proposition 2.3 and sections 2.1–2.2, pp. 19–22, together
  with Proposition 3.11, p. 36.
- Dependencies: the integral relative-projectivity definition and integral
  Krull--Schmidt/local-endomorphism theorem.
- Proof: constructs each Mackey summand on one double coset; extracts/rebuilds
  the coefficient of a split induction counit for Higman; multiplies two trace
  identities and regroups by diagonal orbits; locality forces one intersection
  trace ideal to contain the identity, and vertex minimality gives containment.
  Trivial subgroups are covered and every sum is finite, so no AC is used.
- Checks: unique ID confirmed before creation; mathematical self-check
  complete; mechanical checks deferred.

### 8. `thm-green-indecomposability-for-index-p-integral-induction`

- Claim: if `N` is normal of index `p` in `H`, `k` is algebraically closed,
  and `L` is a nonzero indecomposable `ON`-lattice, then `Ind_N^H L` is
  indecomposable.
- Sources: Gyujin Oh, Theorem 4.1 and proof, pp. 6–7; Craven, Theorem 2.2
  and the absolute-indecomposability use in Theorem 2.20, pp. 19 and 28–29.
- Dependencies: integral Krull--Schmidt/locality, the integral induction
  definition, and the algebraically-closed-field definition. The corrected
  extra hypothesis is recorded in scaffold correction 5.
- Proof: splits according to whether the inertia group of `L` is `N` or `H`.
  In the first case the residual endomorphism quotient is `k^p` with a cyclic
  permutation, whose invariant idempotents are only zero and one. In the
  second it is `M_p(k)`; the cyclic conjugating matrix has one size-`p`
  Jordan block in characteristic `p`, so its centralizer is the local algebra
  `k[z]/((z-mu)^p)`. Radical kernels then lift neither case to a nontrivial
  idempotent. Algebraic closedness is used exactly to identify the residual
  division algebra with `k` and take the needed `p`th root. The zero lattice
  is excluded. No choice principle is used.
- Checks: checked against the complete source proof and both inertia cases;
  mathematical self-check complete; mechanical checks deferred.

### 9. `lem-central-p-subgroups-lie-in-every-block-defect-group`

- Claim: a central `p`-subgroup `Z` of `H` is contained in every defect group
  of every block of `kH`.
- Sources: Craven, Lemma 1.2, p. 2; Meierfrankenfeld, sections 6.6–6.7,
  pp. 156–165.
- Dependencies: the coefficient-projection definition of the Brauer map,
  maximal Brauer support, and AC under the current published dependency
  contract.
- Proof: centrality gives `C_H(Z)=H`, so `Br_Z(c)=c` is nonzero. Maximal
  support puts `Z` inside a conjugate of every defect group; conjugating back
  fixes `Z` and gives the asserted containment. The trivial subgroup is
  covered. AC is used only to discharge the inherited published support
  contract; the displayed finite argument adds no choice.
- Checks: mathematical self-check complete; mechanical checks deferred.

### 10. `def-brauer-subsection`

- Claim and convention: a subsection is a simultaneous `G`-conjugacy class
  of pairs `(u,c)`, with `u` a `p`-element and `c` a block of
  `kC_G(u)`; it is a `B`-subsection precisely when the local-to-global
  induced block `c^G` equals `B`.
- Sources: Craven, section 1.5 and Theorem 1.19, pp. 13–16;
  Aschbacher–Kessar–Oliver, Theorems 5.4–5.5, pp. 276–278.
- Dependencies: the `p`-section definition, central-subgroup defect lemma,
  induced-block definition, centralizer-containment induction theorem, and AC
  under those published contracts.
- Well-definedness: every local defect group contains `<u>`, hence its
  `G`-centralizer lies in `C_G(u)` and block induction exists. Conjugation
  transports the defining bimodule summand while inner conjugation fixes each
  global central block, so `(gcg^-1)^G=c^G`. At `u=1`, the pair is `(1,B)`
  and induction is the identity. AC has no additional use beyond the inherited
  supplier contracts.
- Checks: mathematical self-check complete; mechanical checks deferred.

### 11. `lem-relative-projectivity-forces-p-section-character-vanishing`

- Claim: over a splitting system with algebraically closed residue field, a
  relatively `Q`-projective integral `OH`-lattice has character zero at an
  element whose `p`-part is not conjugate into `Q`.
- Sources: Craven, Theorem 2.20 and proof, pp. 28–29;
  Aschbacher–Kessar–Oliver, proof of Theorem 5.4, pp. 276–277.
- Dependencies: the integral relative-projectivity definition, local integral
  Mackey supplier, integral Krull--Schmidt theorem, corrected Green theorem,
  algebraically-closed-field definition, and the pair's AC contract. Scaffold
  correction 6 records the removed inapplicable `k`-module and complex-only
  dependencies.
- Proof: for `C=<x>` and its unique index-`p` subgroup `L=<x^p>`, every
  Mackey intersection with a conjugate of `Q` lies in `L`. Transitivity and
  Krull--Schmidt split the cyclic restriction into terms induced from `L`;
  Green makes those terms indecomposable, so a direct summand selects whole
  isomorphism classes rather than relying on trace cancellation. At `x`, each
  induced term has a block-permutation matrix with zero diagonal and hence
  zero trace. The zero-lattice and `t=1` boundary cases are explicit.
  Algebraic closedness is used through Green; the stronger AC assumption is
  retained for the inherited pair contract but is not used by the finite proof.
- Checks: checked against the complete source proof; mathematical self-check
  complete; mechanical checks deferred.

### 12. `thm-nagao-decomposition-for-restriction-to-a-centralizer`

- Claim: for `D C_G(D) <= H <= N_G(D)`, the restriction of a finite-free
  lattice in global block `B` splits into local block components inducing to
  `B` and an error part every one of whose vertices fails to contain `D`.
- Sources: Craven, Theorems 2.17–2.18 and sections 3.1–3.3, pp. 26–36;
  Aschbacher–Kessar–Oliver, proof of Theorem 5.4, pp. 276–277.
- Dependencies: integral block lifts, relative projectivity, integral
  Krull--Schmidt/locality, the local integral trace/Higman supplier, induced
  blocks and centralizer-containment existence, modular block-center locality,
  the normal-`p`-core defect corollary, and the inherited AC contract. Scaffold
  correction 7 records the two necessary dependency replacements.
- Proof: normality of `D` in `H` puts it in every local defect group, so every
  `c^G` is defined. Lifted local block idempotents give the actual corr/error
  splitting. For a noncorresponding `c`, the corner `c pi_H(B)` of the global
  block projection is a nonunit—and hence nilpotent—in the local center of the
  block bimodule; otherwise it would split `c` from `B`, contradicting the
  definition of `c^G`. After lifting, this gives a radical corner in the local
  endomorphism ring of an error indecomposable `U`. The remaining outside-`H`
  class sums are relative traces from `C_H(x)`, none of which contains `D`.
  Locality forces one trace ideal to contain the identity; integral Higman and
  vertex containment then place every vertex in a conjugate of such a
  centralizer. Normality of `D` rules out containment of `D`. The zero-module,
  empty-correspondent, and `D=1` cases are explicit. AC only discharges the
  inherited published contracts; all new operations are finite.
- Checks: compared with Craven's complete Nagao/G-algebra route; the authored
  proof replaces its opaque radical congruence by an explicit block corner and
  class-trace argument. Mathematical self-check complete; mechanical checks
  deferred.

### 13. `lem-nagao-error-terms-have-zero-trace-on-the-relevant-p-section`

- Claim: for `H=C_G(u)` and Nagao's decomposition at `D=<u>`, the full and
  correspondent characters agree at every `uv` with `v` `p`-regular in
  `H`, over the corrected algebraically closed residue-field setting; more
  precisely, each indecomposable error character vanishes there.
- Sources: Craven, Lemma 2.21 and proof, p. 29;
  Aschbacher–Kessar–Oliver, proof of Theorem 5.4, pp. 276–277.
- Dependencies: commuting parts, `p`-sections, relative-projectivity
  character vanishing, Nagao decomposition, algebraic closedness, and the AC
  contract.
- Proof: `<u>` is central in `H`, so a Nagao error vertex not containing
  `<u>` cannot contain an `H`-conjugate of `u`. The commuting-parts lemma
  identifies `u` as the `p`-part of `uv`; the vanishing lemma kills every
  finite indecomposable error summand and trace additivity proves the result.
  For `u=1`, Nagao's stronger “no vertex contains 1” clause forces the error
  part to be zero. Algebraic closedness and AC are used exactly through the
  two cited suppliers.
- Checks: mathematical self-check complete; mechanical checks deferred.

### 14. `lem-local-block-projection-controls-generalized-decomposition-support`

- Claim: for `chi in Irr_K(G,B)`, the character of the lifted local block
  component `hat(c) Res chi` vanishes throughout the `u`-section whenever
  `c^G != B`, with the corrected algebraically closed residue field.
- Sources: Craven, Lemma 2.21 and Theorem 2.22, pp. 29–30;
  Meierfrankenfeld, Lemmas 6.7.8–6.7.14, pp. 164–169.
- Dependencies: integral block lifts, subsections, Nagao decomposition, the
  strengthened termwise error-trace lemma, ordinary/Brauer block partition,
  algebraic closedness, and AC.
- Proof: an explicit finite orbit-span constructs a stable integral lattice
  affording `chi`; its global lifted block acts identically. The noninducing
  local component is an actual Nagao error summand, and its indecomposable
  pieces vanish termwise at `uv`. Scalar extension commutes with the central
  idempotent projection, so their trace sum is exactly `chi_c(uv)`. The zero
  component and `u=1` cases are explicit. Algebraic closedness and AC enter
  only through the cited local support contracts.
- Checks: mathematical self-check complete; mechanical checks deferred.

### 15. `thm-brauer-second-main-theorem`

- Claim: a nonzero generalized decomposition number in a local Brauer
  character column forces that local block to induce to the global block of
  the ordinary row; equivalently the generalized expansion sums only over
  inducing local blocks.
- Sources: Craven, Theorems 1.19 and 2.22, pp. 14 and 29–30;
  Meierfrankenfeld, Theorem 6.7.15 and Corollary 6.7.16, pp. 169–171;
  Aschbacher–Kessar–Oliver, Theorems 5.4–5.5, pp. 276–278.
- Dependencies: generalized-decomposition existence/uniqueness, subsections,
  local block projection, block partition, the added block-diagonal
  decomposition-matrix proposition, the Brauer basis, algebraic closedness,
  and AC. Scaffold correction 8 records the added exact dependency.
- Proof: the lifted `c`-component of `Res_H chi` is expanded using only its
  ordinary constituents. Block diagonality identifies its Brauer expansion
  coefficients exactly with `d^u_(chi,phi)` for `phi` in `c`. A
  noncorresponding component is zero by the projection lemma, so Brauer-basis
  independence kills every coefficient in that block. Partitioning the full
  basis gives the restricted formula, and subtracting the two formulas proves
  the stated equivalence. At `u=1` this is ordinary block diagonality. Empty
  sums are allowed, and no permitted coefficient is asserted nonzero.
  Algebraic closedness and AC are used through the local suppliers.
- Checks: checked against both complete source formulations; mathematical
  self-check complete; mechanical checks deferred.

### 16. `cor-generalized-decomposition-columns-have-corresponding-block-support`

- Claim: a column indexed by `phi in IBr(H,c)` can have a nonzero row only
  in the single global block `c^G`; the column is allowed to be identically
  zero.
- Sources: Craven, Theorem 2.22, pp. 29–30; Meierfrankenfeld,
  Theorem 6.7.15, pp. 169–171.
- Dependencies: the Second Main Theorem, uniqueness of ordinary block
  membership, algebraic closedness, and AC.
- Proof: apply the main theorem row by row and use unique global block
  membership. No converse/nonzero-existence assertion is made; AC and
  algebraic closedness are inherited exactly through the main theorem.
- Checks: mathematical self-check complete; mechanical checks deferred.

### 17. `ex-p-sections-and-brauer-subsections-in-a-small-finite-group`

- Claim: in `S3` at `p=2`, the identity section is the identity plus both
  `3`-cycles, the transposition section is all three transpositions, and the
  sole block of `kC_G(t)=kC2` induces to the principal `S3` block, not the
  defect-zero block. The identity subsections are also listed.
- Sources: Aschbacher–Kessar–Oliver, Example 4.25 and Theorems 5.1 and 5.4,
  pp. 274–277; Craven, sections 1.5–1.6, pp. 13–16.
- Dependencies: `p`-sections, subsections, the added central-subgroup defect
  lemma, the Brauer-map definition, maximal Brauer support, principal-block
  Sylow defect, Brauer First, and AC. Scaffold corrections 9–10 record the
  added local-defect dependency and removal of the forbidden cross-B edge.
- Verification: cycle types give both sections. Directly
  `C_G(t)=<t>` and `kC2=k[X]/((X-1)^2)` is local. The central-subgroup lemma
  makes its sole block have defect `<t>`. A direct class-sum computation finds
  exactly the global block idempotents `e=1+a+a^2` and `f=a+a^2`; augmentation
  identifies `e` as principal, and coefficient projection gives defect `1`
  for `f`. Since the normalizer is `<t>`, Brauer First identifies the induced
  block as `B0`. At `u=1`, induction is identity. This is not a generalized-
  decomposition table. AC only enters through inherited contracts.
- Checks: mathematical self-check and final mechanical checks complete.

### 18. `ex-second-main-theorem-at-u-equals-one`

- Claim: at `u=1`, generalized decomposition numbers are ordinary
  decomposition numbers and local induction is identity, so the Second Main
  Theorem is exactly block diagonality.
- Sources: Meierfrankenfeld, Theorem 6.7.15 and Corollary 6.7.16,
  pp. 169–171; Craven, section 1.5, pp. 13–14.
- Dependencies: the generalized formula, subsections, Second Main Theorem,
  the independently published block-diagonal proposition, algebraic
  closedness, and AC.
- Verification: the restriction has sole constituent `chi`, the identity
  scalar is one, and induction from `G` to itself fixes `c`. Substitution
  gives the support statement, independently checked by the published block
  diagonality theorem. No within-block nonzero assertion is made. Algebraic
  closedness and AC enter only through the main theorem.
- Checks: mathematical self-check complete; mechanical checks deferred.

### 19. `ex-second-main-theorem-with-no-inducing-local-block`

- Claim: for `S3`, `p=2`, a transposition `t`, and the defect-zero standard
  block `B1`, the only local block induces to `B0`; hence the unique local
  generalized coefficient is zero and `chi_std(t)=0`.
- Sources: Aschbacher–Kessar–Oliver, Example 4.25 and Theorem 5.4,
  pp. 274–277; Meierfrankenfeld, Theorem 6.7.15, pp. 169–171.
- Dependencies: the first `S3` subsection example, integral block lifting,
  unique ordinary block membership, the Second Main Theorem, algebraic
  closedness, and AC. The forbidden dependencies on three external B-page
  examples were removed as recorded in scaffold correction 10.
- Verification: the sole local block has `c^G=B0`, while `chi_std` lies in
  `B1`, so the main theorem kills the only coefficient. The lifted block
  idempotent `(1+a+a^2)/3` is the average over `<a>` and annihilates the
  irreducible standard plane, proving that block membership directly.
  Since `kC2` has one simple quotient and only `1` is `2`-regular, the
  generalized expansion gives `chi_std(t)=0`; the explicit transposition
  matrix on the standard plane has trace zero as an independent check. No
  larger table is claimed.
- Checks: mathematical self-check and final mechanical checks complete.

Checkpoint continuation: the next action at this point was A-page assembly;
the pages, reread, and checks are recorded as completed in the final section
below.

## Page checkpoint

- A page: `library/representation-theory/brauers-second-main-theorem.md`
  now lists all 16 manifest A items plus the prerequisite-ordered local
  integral Mackey--Higman supplier. Its prose states the section-expansion,
  Nagao, and local-to-global support route, and discloses the corrected
  algebraically closed residue-field scope of the Green branch.
- B page:
  `library/representation-theory/brauers-second-main-theorem-examples.md`
  places the three assigned examples in `examples`, with identity and empty
  local-support boundaries explicit.
- The selected pair, page titles, orders implicit in the shared manifest, and
  all promised results are preserved. No shared manifest or group-lead file
  has been edited.

Checkpoint continuation: the next action at this point was validation of the
22 owned mathematical/page files without shared record/update commands. Its
completed results are recorded below.

## Potential published defects reported to the lead

These are axiom-contract defects, not claims that the mathematical conclusions
are false. Neither published file nor the canonical defect ledger was edited.

- `thm-nakayama-lemma` is published and explicitly assumes AC in its title and
  Statement. Its proof invokes the AC-stated
  `thm-jacobson-radical-unit-characterisation`, but its `deps` omit the exact
  supplier `def-axiom-of-choice`. The local block-lift proof authored here does
  not consume this item. Recommended later repair: add and propagate that
  dependency, or replace the choice-bearing route by a genuinely finite one.
- `thm-krull-schmidt-for-finite-dimensional-kg-modules` has an unconditional
  published Statement, but its proof invokes
  `thm-composition-series-iff-noetherian-and-artinian`, whose own statement and
  dependency contract explicitly use dependent choice and
  `def-axiom-of-choice`. The integral Krull--Schmidt theorem authored here uses
  a direct finite-rank complete-local/Fitting/exchange proof and does not
  consume that published item. Recommended later repair: prove finite length
  directly from finite dimension, or state and propagate the choice contract.

## Final validation and handoff

- All 19 assigned items, the new local supplier
  `lem-integral-mackey-and-higman-for-og-lattices`, and both pages are complete
  drafts in prerequisite order. A final reread covered every owned Statement,
  Facts & Assumptions block, proof/verification step, dependency, source
  locator, boundary case, and page inventory.
- Explicit-path precheck passed all 16 proof-bearing items: `16 checked, 0
  failing — all clean`. The four definitions were correctly skipped by that
  checker.
- Explicit-path rendercheck passed all 20 item files and both page files: `OK
  — 22 file(s)`, using the renderer's YAML parser and real KaTeX.
- Explicit-path citecheck scanned all 20 item files and reported that every
  recognized elementary move cites a statement that supplies it.
- The repo-wide dependency gate initially exposed four cross-B dependency
  errors in the scaffolded examples. After correction 10, filtering its output
  for every owned item and both owned pages returned no scoped error or
  warning. The whole-worktree gate still reports 36 errors in other concurrent
  in-flight pairs; none names an owned ID or page.
- No shared manifest, coverage file, dependency input, contract JSON,
  decision, plan/prose amendment, group report, published item, or published-
  defect ledger was edited. The group lead must integrate scaffold corrections
  1–10, add the local supplier to shared records, update affected contracts and
  dependencies, and independently inspect/certify the drafts.

There is no open mathematical obligation within the helper's write scope.
The remaining work is the group lead's shared-record integration and
independent review.
