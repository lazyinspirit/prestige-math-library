# Step 3b checkpoint — the Serre spectral sequence and applications

- Run: `phase-2-next-18`
- Role: `alpha-high`
- Pair: `the-serre-spectral-sequence-and-applications` / `the-serre-spectral-sequence-and-applications-examples`
- Shared batch: 3 (the Leray–Hirsch rows and files are outside this dispatch and must be preserved)
- State: scaffold audit, all 32 owned items, both owned pages, contracts, coverage, and final owned-path checks complete; post-dispatch engine certification remains as recorded below

## Evidence read

- Repository instructions: `CLAUDE.md`, `README.md`, `SCHEMA.md`.
- Assigned design: `research/plan-algebraic-topology-track.md`, AT-14, lines 1959–2015.
- Current run records: batch-3 manifest, coverage, notes, prose, plan, Step 3a reports and owner proceed receipt, and the frontier dependency ledger/input.
- Hatcher, *Spectral Sequences*, Chapter 5: Theorem 5.3 and proof, Examples 5.4–5.6, Proposition 5.14 and proof, Theorem 5.15 and the multiplicative discussion, Proposition 5.21 and proof. Cached text locator: `/tmp/phase-2-next-18-b3-sources/hatcher-ch5.txt`, principally lines 730–1325, 1920–2510, and 2800–2915.
- Miller, MIT 18.906 notes: Lecture 26 through the edge/transgression discussion and Lecture 30, Definition 30.1 through Corollary 30.10. Cached text locator: `/tmp/phase-2-next-18-b3-sources/miller-18906.txt`, principally lines 1050–1490 and 2535–2860.
- All declared published prerequisites for the owned pair, including fibration replacement, homotopy fibers, fiber transport/local systems, cellular local coefficients, relative product comparison, filtered-complex convergence, the cohomological construction, Eilenberg–Zilber/Alexander–Whitney, UCT, and the short five lemma.

## Inventory and conventions

The immutable pre-author inventory contains 31 owned items: 24 on A and 7 on B. No owned item file or A/B page exists yet. The current owner scope decision is `proceed`; its hash covers item identity, kind, title, and manifest statement. Repairs will therefore retain those fields and alter only dependencies, strategies, axiom audits, and the authored formulations needed to make the claims precise. Any material authored qualification of a vague scaffold claim is a pre-splice mismatch for owner/Step 4 rather than an invented owner ruling.

The final owned inventory contains 32 items: 25 on A and 7 on B. The one addition is the fully authored local supplier `lem-circle-and-path-loop-models-for-eilenberg-maclane-induction`, inserted immediately before its rational-cohomology consumer. Both reader-facing pages now exist and their frontmatter inventories match the manifest exactly and in order. The addition changes the scope digest; the immutable-baseline certification consequence is recorded in the final handoff rather than being disguised as a new owner ruling.

Homological indexing is first-quadrant, with
\[
E^2_{p,q}=H_p(B;\mathcal H_q(F;R))\Longrightarrow H_{p+q}(E;R),
\qquad d_r:E^r_{p,q}\to E^r_{p-r,q+r-1}.
\]
Cohomological indexing is
\[
E_2^{p,q}=H^p(B;\mathcal H^q(F;R))\Longrightarrow H^{p+q}(E;R),
\qquad d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}.
\]
The homological construction is to remain choice-free. The cohomological branch explicitly assumes AC where the dual/coefficient comparison uses it.

## Scaffold repairs retained in the workload

1. **Strict fiber versus homotopy fiber.** The mapping-path replacement gives a Hurewicz fibration homotopy equivalent over the base, but the strict-fiber comparison and its compatibility with transport must actually be proved. The completed proof uses finite relative straightening on cubical representatives, followed by a local coefficientwise finite-chain weak-equivalence argument. It does not infer arbitrary-`R` homology from the published integral theorem through UCT, which would import AC.
2. **Relative cell calculation.** The published relative product supplier assumes CW pairs, while an arbitrary strict fiber need not be a CW complex. The owned lemma must use the disk/hemisphere excision argument and a relative Eilenberg–Zilber map valid with an arbitrary fiber. Any literal chain-homotopy claim needs an explicit relative chain contraction, not the inapplicable CW-pair theorem.
3. **Convergence.** For the filtration `p^{-1}(B^p)`, singular chains are exhaustive but not degreewise finitely filtered: an `n`-simplex can meet cells of dimension greater than `n`. The finite-filtered-complex convergence theorem is therefore not applicable as stated. Strong convergence will be proved representative-by-representative using compact support in finitely many CW cells together with first-quadrant vanishing. The cohomological completion argument will state AC explicitly.
4. **Products.** Hatcher’s displayed multiplicative discussion leaves the later-page derivation verification unproved. The owned filtered-DGA lemma must close that gap directly from the `Z_r/B_r` formulas, including signs, well-definedness, and passage to `E_{r+1}`.
5. **Edges and transgression.** The fiber edge is the map from coinvariants `H_0(B;\mathcal H_n)` into total homology, and the base edge maps total homology to `H_n(B;\mathcal H_0)`; it is not an interchangeable “invariants or coinvariants” statement. The transgression is the precisely specified relative connecting relation/map under the usual vanishing hypotheses.
6. **Serre classes.** A Serre ring/ideal must include both tensor and `Tor` closure (Miller, Lecture 30). The spectral-sequence transfer theorem will state the exact range/neighbor hypotheses rather than rely on the scaffold phrase “relevant terms.” Fibration transfer will author the two precise clauses of Miller Propositions 30.7 and 30.8.
7. **Choice.** Any use of the repository’s PID UCT propagates AC. In particular the cohomological spectral sequence, Serre-class coefficient comparisons, and the PID finite-generation transfer must declare and depend on `def-axiom-of-choice`. Choice-free arguments will not route through UCT.
8. **Examples.** The finite complex/quaternionic Hopf calculations require `n>=1`; the abstract nonsplit-extension counterexample requires `n>=2`; the odd-sphere loop calculation uses `m>=1`. The Klein-bottle local-coefficient row gives coinvariants `Z/(T-1)Z=Z/2`, which is exactly the missing torsion summand.

## Published concerns for the owner

### Confirmed defect: hidden AC in homological UCT

- Item: `thm-universal-coefficient-theorem-for-homology-over-a-pid`.
- Evidence: its statement does not assume AC, but its proof depends on `lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free`; that supplier’s statement explicitly assumes AC. The UCT item neither depends directly on `def-axiom-of-choice` nor propagates the assumption.
- Confidence: high.
- Required supplier/repair: add AC to the theorem statement and dependency closure and propagate it to consumers, or replace the freeness step with explicitly supplied choice-free submodule data. This dispatch will not edit the published item.

### Confirmed dependency omission: transport local-system lemma

- Item: `lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems`.
- Evidence: Fact F1 attributes path-homotopy independence, composition, and inverses to `def-fiber-transport-and-monodromy-action`, but that definition delegates those facts to `prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent`; the lemma omits the proposition from its dependencies.
- Confidence: high.
- Required supplier/repair: add the proposition as a direct dependency (or move and prove the functorial assertions in the definition and update dependency propagation). This dispatch will depend on both published records and will not edit either.

## Item checkpoints

### `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence`

- Claim/convention: from `E_2` onward the cohomological Serre sequence is a natural multiplicative spectral sequence; the `E_2` product is the local-coefficient cup product with sign $(-1)^{bc}$, every $d_r$ is a total-degree derivation, and the stable product is the associated-graded cup product.
- Actual proof: the raw annihilator cochain filtration is explicitly shown not to be multiplicative. After mapping-path replacement, a cellular approximation to the base diagonal and a lifted homotopy give a filtered diagonal. Relative external products pair the skeletal exact couple; an explicit derived-couple representative calculation proves the Leibniz rule, choice independence, and algebra compatibility of $E_{r+1}\cong H(E_r,d_r)$ on every page.
- Dependencies examined: all fifteen declared dependencies, including the Hurewicz replacement and lift, cellular approximation, relative external-product and connector suppliers, exact-couple/page-transition suppliers, fiber/local-coefficient cup products, and AC.
- AC/boundaries: AC is used exactly by the cohomological Serre comparison and arbitrary-CW cellular approximation. Empty fibers, the zero ring, units, zero base/fiber degrees, one base cell, degenerate simplices, both representative changes, both stable quotient directions, and the absence of an iff are checked.
- Sources: Hatcher, Chapter 5, §5.1, multiplicative-structure discussion, printed pp. 543–546; Miller, Lecture 29, printed pp. 100–101. The previously listed McCleary locator was removed because it was not needed or independently verified in this dispatch.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none mathematical. The repaired receipt (confidence 1, SHA `22041feb32f6be1da654fbd2cb313693cfeb9e8fa22c3a53cd3b9d9412f37fb2`) is superseded only by the final correction of its Hatcher section locator from “§10.1” to §5.1; refresh it after the engine creates the post-addition scope certification.
- Next action: author `prop-degree-and-parity-criteria-for-serre-collapse`.

### `prop-degree-and-parity-criteria-for-serre-collapse`

- Claim/convention: at page $r\geq2$, support disjoint from every translate by a later differential bidegree forces collapse; a single row or column and support in one total-degree parity are exact corollaries. Collapse yields only the associated graded.
- Actual proof: persistence of page-zero terms reduces every later differential to an endpoint check in both indexing conventions. Total degree changes by one, so one-parity support kills one endpoint. The published filtered $\mathbb Z/4$ supplies the nonsplitting witness.
- Dependencies examined: both authored Serre sequences, the published bounded-region, one-row/one-column, and nonsplitting propositions, and AC.
- AC/boundaries: the homological argument is choice-free; AC appears only in the cohomological Serre supplier. Empty and singleton support, zero coefficients, degree-zero axes, degenerate representatives, both endpoints, both parities, and the deliberately absent converse are explicit.
- Sources: Hatcher, Chapter 5, printed pp. 532–538; the complete proof is internal from the page bidegrees.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `0ef2c127eb456700f00a7b741987e94620793814c43d3ebd99ca1f91435f08ed`.
- Next action: author `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence` after rereading the full two-row argument.

### `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence`

- Claim/convention: for an $R$-oriented $R$-cohomology $n$-sphere fibration with $n\geq1$, $e=d_{n+1}(u)$ and the natural sequence has arrows cup $e$, $p^*$, and the upper-edge map $p_!$; the raw Leibniz convention is $d(au)=(-1)^{|a|}ae$.
- Actual proof: the two-row support leaves only $d_{n+1}$. Its kernels and cokernels are computed, the two stable terms are placed into the finite two-piece filtration of $H^k(E)$, and the resulting short exact sequences are spliced in adjacent degrees. Naturality against the identity fibration identifies the bottom edge with $p^*$.
- Dependencies examined: the cohomological and multiplicative Serre theorems, authored collapse criterion, cohomological transgression and abstract edge definitions, derived exact-couple theorem, and AC. The manifest dependency list was repaired accordingly without changing its scoped claim.
- AC/boundaries: AC is used only through the cohomological suppliers. The proof covers $n=1$, the zero ring/class, unit, negative-degree endpoints, both rows and filtration ends, all adjacent exactness claims, and does not claim a split sequence.
- Sources: Miller, Lecture 29, printed pp. 101–103; Miller's fiber dimension is $n-1$, so the authored indices replace his $n$ by $n+1$.
- Pre-splice qualification: the scoped phrase “$S^n$-fibration” must have $n\geq1$ for the asserted two-row calculation; $S^0$ has both reduced pieces in row zero and is not covered.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none under the stated $n\geq1$ orientation hypotheses. Item decision: repaired, confidence 1, evidence SHA `313f11275e986cb9a686db837d40823fb3f2a7886e336e39ef43f98d898852aa`.
- Next action: author `thm-wang-sequence-for-a-fibration-over-the-circle`.

### `thm-wang-sequence-for-a-fibration-over-the-circle`

- Claim/convention: the positive one-cell orientation gives cellular boundary $1-T_q$ and the natural Wang sequence; reversing orientation gives $T_q-1$.
- Actual proof: the cellular local-coefficient complex is $M_q\xrightarrow{1-T_q}M_q$. Its homology occupies the two Serre columns, all later differentials vanish, and the finite abutment filtration yields $0\to\operatorname{coker}(1-T_q)\to H_q(E)\to\ker(1-T_{q-1})\to0$. The quotient and inclusion maps splice to the claimed long exact sequence.
- Dependencies examined: homological Serre, the authored $d_1$/cellular-boundary lemma, abstract edge maps, and exact-couple page construction. The edge dependency was added to the manifest.
- AC/boundaries: choice-free. Empty and zero fibers/modules, $q=0$, negative degrees, identity monodromy, one vertex/edge, both edge endpoints, both orientations, and all exactness positions are checked; no splitting is claimed.
- Source: Hatcher, Theorem 5.3, printed pp. 526–532, specialized to the standard CW circle; the kernel-cokernel splice is fully authored locally.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `d417ad2b2b0174603aa9cd50e4b2b8f76c2acc6bffc68c110adb9162b445ed8c`.
- Next action: author `def-serre-class-ring-ideal-and-mod-c-morphism`, repairing the omitted `Tor` closure.

### `def-serre-class-ring-ideal-and-mod-c-morphism`

- Claim/convention: a Serre ring is closed under both tensor and $\operatorname{Tor}_1^{\mathbb Z}$ when both factors lie in the class; an ideal has the same closure when either factor lies in the class. Modulo-$\mathcal C$ mono/epi/iso and $A=0\pmod{\mathcal C}$ are all defined.
- Actual content: the seven-term kernel-cokernel sequence proves composition and two-out-of-three. Finite and finitely generated groups are rings but not ideals; torsion and $p$-primary torsion groups are ideals; explicit infinite direct sums witness the failed ideal claims.
- Dependencies examined: the snake lemma and the tensor-product construction. Tor is treated as supplied standard resolution data; the definition selects no resolutions and invokes no choice comparison.
- Scaffold repair/pre-splice mismatch: the scoped manifest statement mentions tensor but omits the source-required Tor clause. Its strategy and axiom audit were repaired, and the authored definition includes Tor. The stable manifest statement was not rewritten because that would invalidate the owner-held scope hash; Step 4/owner must splice the exact authored wording.
- Boundaries: zero and all-groups classes, zero maps/endpoints, empty and one-summand direct sums, $n=1$, all two-out-of-three positions, and both directions of the short-exact characterization are recorded.
- Source: Miller, Lecture 30, printed pp. 104–107.
- Checks: explicit-path definition precheck clean; explicit-path rendercheck pass; strict definition contract pass.
- Open gaps: no mathematical gap in the authored definition; the manifest-statement pre-splice mismatch remains for serial reconciliation. Item decision: repaired, confidence 1, evidence SHA `b5a045c20ad92a3c9fdebfcabc9c7e55b897a45edf90835d8bacc2b2f54abc94`.
- Next action: author `lem-serre-classes-are-stable-under-finite-filtrations`.

### `lem-serre-classes-are-stable-under-finite-filtrations`

- Claim/convention: finite associated-graded membership implies membership of the total group; a filtered morphism that is a $\mathcal C$-isomorphism on every graded piece is a $\mathcal C$-isomorphism.
- Actual proof: induction through the consecutive short exact sequences handles objects. For maps, the snake sequence expresses each new kernel and cokernel as extensions of subquotients of the preceding kernel/cokernel and the current graded kernel/cokernel.
- Dependencies examined: the authored Serre-class definition and the published snake lemma; the latter was added directly to the manifest.
- AC/boundaries: finite and choice-free. Empty-length, zero, one-step and repeated filtrations, zero maps and endpoints, both kernel/cokernel halves, and the terminal total groups are explicit.
- Source: Miller, Lecture 30, printed p. 106; the filtered-map refinement is proved locally.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `1c3e724c2af267d0b3594fd02a147d154a22c070080c86d1ba05eac89dbfab38`.
- Next action: author `thm-first-quadrant-spectral-sequence-transfer-modulo-a-serre-class` with an exact differential-closure range for morphisms.

### `thm-first-quadrant-spectral-sequence-transfer-modulo-a-serre-class`

- Claim/convention: $E_2$ membership in total degrees $\leq N$ transfers to the abutment. For a morphism, the required $E_2$ range is the explicitly defined finite backward differential closure $T_2$ of the target triangle, with stabilization page $R=N+2$.
- Actual proof: page terms remain subquotients for object membership. A separate three-term comparison proves that componentwise $\mathcal C$-isomorphisms induce one on homology; backward induction over $T_s$ then reaches the stable page. The finite filtered-morphism lemma reconstructs the abutment map.
- Dependencies examined: finite-filtration transfer, strong convergence, and the snake lemma. The snake dependency and exact closure strategy were added to the manifest.
- AC/boundaries: choice-free finite sets and inductions. $N=0$, empty/singleton support, zero groups and differentials, repeated filtration pieces, both incident differential neighbors, both kernel/cokernel directions, both page endpoints, and the cohomological coordinate reversal are checked.
- Source: Miller, Lecture 30, printed p. 106; the bounded morphism refinement is fully derived locally.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `97380991f1b30d2b7131ab68894e76d4a854f886adf46a5a574fd70ce15fffca`.
- Next action: author `thm-serre-class-fibration-transfer` from the exact statements and proofs of Miller Propositions 30.7–30.8.

### `thm-serre-class-fibration-transfer`

- Claim/convention: clause 1 is the bounded Vietoris–Begle result for a Serre ideal and trivial homology action; clause 2 is Miller's relative comparison $H_i(E,F)\to H_i(B,*)$ for a Serre ring, simply connected base, and the exact ranges $0<s<n$, $0<t<n-1$, $i\leq n$.
- Actual proof: UCT puts the required absolute $E_2$ terms in the ideal and a finite bottom-edge analysis controls both kernel and cokernel. For clause 2 the quotient skeletal filtration of $C_*(E,F)$ is constructed locally, its relative cellular $E_2$ and finite-support convergence are proved, columns zero and one vanish, and the remaining off-bottom terms lie in the ring by both tensor and Tor closure.
- Dependencies examined: homological Serre and bounded transfer, PID UCT, the authored Serre class definition, projection edge identification, skeletal filtration/cell/$d_1$ suppliers, and AC. All actual inputs were added to the manifest.
- AC: explicit and used exactly because the published PID UCT consumes an AC-bearing freeness theorem. The spectral-sequence and finite filtration arguments add no choice.
- Boundaries: $N=0$, $n=2$, one basepoint cell and extra zero-cells, zero groups/classes, degenerate relative chains, both ring/ideal branches, both tensor/Tor terms, both edge kernels/cokernels, and all finite endpoints are explicit.
- Source: Miller, Proposition 30.7 and Proposition 30.8 with proofs, printed pp. 107–108.
- Pre-splice mismatch: the scoped manifest statement mentions only a simply-connected Serre-ideal transfer. The source and authored theorem distinguish the weaker trivial-action ideal clause from the relative Serre-ring clause and explicitly assume AC; Step 4/owner must splice this exact formulation without losing either clause.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none in the authored bounded claims. Item decision: repaired, confidence 1, evidence SHA `7c222498ae412120d24c1eed078e2b2a9ac64f78e897e24f54287c67fc820478`.
- Next action: author `cor-serre-finite-generation-torsion-and-p-primary-transfer` with exact ring/ideal specializations.

### `cor-serre-finite-generation-torsion-and-p-primary-transfer`

- Claim/convention: all four classes—finite, finitely generated, torsion, and $p$-primary torsion—propagate from bounded positive-degree base and fiber homology to bounded total-space homology. Only the latter two support the ideal/Vietoris–Begle edge clause; all four support the relative ring clause.
- Actual proof: subgroup/quotient/extension, cyclic tensor/Tor, and finite-decomposition calculations establish the exact ring/ideal statuses. UCT controls every interior $E_2$ term, the axes use the hypotheses directly, and the bounded transfer theorem reconstructs total homology. Infinite direct sums witness both failed ideal claims.
- Dependencies examined: the general fibration transfer and Serre definition, homological Serre and bounded transfer, PID UCT, finitely generated abelian decomposition, cyclic Tor, and AC. The manifest dependency and axiom records were repaired.
- AC/boundaries: AC is used by cyclic balanced Tor and PID UCT. $N=0$, $n=2$, empty decompositions/ranges, zero group, one cyclic summand, both axes, both coefficient terms, both edge endpoints, and all four properties are explicit.
- Source: Miller, Examples 30.2–30.5 and the ring/ideal paragraph, printed pp. 104–107; Propositions 30.7–30.8, pp. 107–108.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `4a53bfc80c52c5dfb5fdb40fc59234713dab45d3c6fafb42c8512cc473f47d21`.
- Next action: author `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber`, repairing its kind and AC metadata without changing the scoped manifest identity fields.

### `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber`

- Claim/convention: under AC, finite generation of `H_p(B;R)` and `H_q(F;R)` through degree `N` over a commutative PID transfers to `H_n(E;R)` through degree `N` for a simply connected base and fiber. Fields and `Z` are the stated special cases.
- Actual proof: the PID invariant-factor decomposition and Noetherianity show that both `M tensor_R G` and `Tor_1^R(M,G)` are finitely generated for finitely generated inputs. The PID homological UCT therefore makes every triangular `E^2` term finitely generated; page terms are Noetherian subquotients, and finite induction along the abutment filtration reconstructs the total homology group.
- Dependencies examined: homological Serre, the PID homological UCT, PID invariant factors and Noetherianity, finite modules over Noetherian rings, and AC.
- AC/boundaries: AC is stated and used exactly through the published PID UCT's AC-dependent freeness input. The proof covers `N=0`, zero modules and homology, empty torsion decompositions, one generator and one cyclic summand, free and field cases, both tensor/Tor terms, both page axes, and both filtration endpoints. Simple connectivity excludes empty base and fiber.
- Source: Miller, Lecture 30, printed pp. 106–108. The extension from abelian-group Serre classes to a direct PID-module argument is fully derived in the item.
- Scaffold repair/pre-splice mismatch: the `thm-` ID and theorem title conflict with the carrier's scoped `kind: corollary`; the authored frontmatter correctly uses `kind: theorem`. The carrier statement also omits the required AC hypothesis. These identity/statement repairs remain owner-held for serial reconciliation because changing them during Step 3b would invalidate the active scope receipt.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none in the authored theorem. Item decision: repaired, confidence 1, evidence SHA `f75e75d33b164281c3efd9387d6027eac94364939ab40e6f581cc696fc3b8a56`.
- Next action: supply the hidden loop-fiber CW-type prerequisite before authoring the rational computation.

### `lem-circle-and-path-loop-models-for-eilenberg-maclane-induction` (new local supplier)

- Claim/convention: the marked quotient circle is a CW `K(Z,1)`; for `n>=2`, the based mapping-path fibration of a marked CW `K(A,n)` has contractible total space and a strict loop fiber of CW homotopy type, marked-homotopy-equivalent to the chosen `K(A,n-1)` through the connecting isomorphism.
- Actual proof: the universal circle cover and its Hurewicz fibration LES give the circle's higher homotopy vanishing. The mapping-path contraction and LES compute the loop fiber's components and all positive homotopy groups. Schön Proposition 3 applies because the total path space and base have CW homotopy type; a CW representative is therefore an actual marked Eilenberg–Mac Lane model, and marked uniqueness gives the required homotopy equivalence.
- Dependencies examined: mapping-path factorization, the fibration LES, marked Eilenberg–Mac Lane existence/uniqueness, the universal circle cover and covering HLP, the fundamental group of the circle, contractibility of the real line, and AC.
- AC/boundaries: the circle and path formulas are choice-free. AC is used to select a CW representative of the loop fiber and through marked uniqueness. The proof covers `A=0`, `n=2`, one loop component, the constant path, zero higher groups, and the component and positive-group LES endpoints.
- Sources: Schön, Proposition 3 and complete proof, printed pp. 165–166; Hatcher's path-fibration convention is supplied by the local mapping-path theorem. The three-page Schön scan was fetched, read completely, and registered in batch coverage.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Certification: this item was created and fully authored during Step 3b, so under the dispatch's immutable-baseline exception it is registered normally but is not sent through a Step 3 self-review/item-decision loop; the engine supplies its current certifications after successful dispatch.
- Open gaps: none. Next action: author `thm-rational-cohomology-of-eilenberg-maclane-spaces-in-one-generator` using this supplier.

### `thm-rational-cohomology-of-eilenberg-maclane-spaces-in-one-generator`

- Claim/convention: under AC, a marked CW `K(Z,n)` has rational cohomology `Q[x_n]` for even `n` and the exterior algebra on `x_n` for odd `n`, with `x_n` dual to the marked homotopy generator and changing sign with that generator.
- Actual proof: `K(Z,1)` is compared with the marked circle. For `j>=2`, the new path-loop supplier identifies the strict fiber with `K(Z,j-1)` before the multiplicative Serre sequence is used. Absolute Hurewicz and cohomological UCT give the first nonzero base column. When `j` is even, the two-row differential makes multiplication by the transgression an isomorphism in every residue class, producing the polynomial algebra. When `j` is odd, `d_j(y^k)=k y^(k-1)x_j` and `x_j^2=0`; a full least-extra-column argument shows that any additional bottom class could be hit by neither `d_j` nor a later differential and hence would contradict the contractible abutment.
- Dependencies examined: the new circle/path-loop supplier, marked Eilenberg–Mac Lane uniqueness, absolute Hurewicz, the multiplicative cohomological Serre sequence, sphere and contractible-space homology, cohomological UCT, homotopy invariance and cup naturality, and AC.
- AC/boundaries: AC is propagated through the loop-model supplier, marked uniqueness, Hurewicz, UCT, and the cohomological Serre theorem. The finite Koszul calculations add none. The proof covers `n=1`, `n=2`, zero groups/classes/differentials, the unit and first powers, both parities, every possible incoming and outgoing differential, and both algebra-identification directions.
- Sources: Hatcher Proposition 5.21 and complete proof, printed p. 550; Schön Proposition 3 and proof, printed pp. 165–166, through the preceding local supplier.
- Scaffold repair: the original strategy's phrase “the homotopy exact sequence and Eilenberg–Mac Lane uniqueness identify the fiber” omitted the CW-type hypothesis. The new local supplier closes that gap before this consumer. The odd case also expands Hatcher's short minimal-column argument so later possible differential lengths are checked explicitly.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none mathematical. The earlier repaired receipt (confidence 1, SHA `5f44104f5ee49d234ef8b2311180dee13e697da53fb3873e977d00978692239a`) predates final registration of the new direct supplier and is therefore superseded; refresh this consumer after the engine creates the post-addition scope and new-item certifications.
- Next action: author the seven B-page items in manifest order, beginning with the path-loop computation of `CP^infinity`.

### `ex-path-loop-serre-computation-of-cp-infinity`

- Claim/convention: under AC and the finite-join identification `BS1=CP^infinity`, the strict based path fibration has circle homotopy type as fiber and contractible total space; the integral transgression `c=d_2(u)` generates `H^*(CP^infinity;Z)=Z[c]` in degree two.
- Actual proof: the Milnor loop comparison first proves that the weak CW colimit is a marked `K(Z,2)`, so the new strict-loop CW-type supplier applies. The two-row multiplicative sequence has only `d_2`; vanishing of the positive-degree contractible abutment makes multiplication by `c` injective and surjective in every base degree. This forces zero odd groups, one primitive generator in degree two, every positive power, and no extension ambiguity.
- Dependencies examined: finite join and Milnor models, loop-space comparison, the new strict path-loop supplier, multiplicative cohomological Serre sequence, transgression convention, sphere and contractible-space homology, cohomological UCT, and AC. The four missing computation/model suppliers were added to the carrier dependency list.
- AC/boundaries: AC is propagated through the loop, strict path-loop, UCT, and cohomological Serre suppliers. Nonempty spaces, zero/degree-one groups, the unit and first differential, both rows and differential endpoints, both ring-isomorphism directions, and generator reversal are explicit.
- Source: Hatcher Example 5.4 and complete calculation, printed pp. 527–528. Hatcher's additive calculation is upgraded locally using the authored multiplicative theorem.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none mathematical. The earlier repaired receipt (confidence 1, SHA `10386762f467ffb68b15240d2054ffc4c8b33bc71f6ac628dd28ebe87e7cf277`) predates final registration of the new transitive supplier and is therefore superseded; refresh this consumer after the engine creates the post-addition scope and new-item certifications.
- Next action: author `ex-serre-spectral-sequence-of-the-complex-hopf-fibration`, including the finite affine-chart bundle construction and the top survivor.

### `ex-serre-spectral-sequence-of-the-complex-hopf-fibration`

- Claim/convention: for `n>=1`, the standard scalar-phase Hopf bundle has integral transgression `d_2(u)=x` and `H^*(CP^n;Z)=Z[x]/(x^(n+1))`, with the generator sign fixed by the fiber generator.
- Actual proof: explicit affine sections and the functions `max(|z_j|^2-1/(2(n+1)),0)` supply a support-subordinate finite numeration, so the quotient is a Serre fibration. The characteristic disks build one base cell in each even dimension through `2n`; cellular homology and UCT give the additive groups. In the two-row sequence, the total sphere forces every interior `d_2` to be an isomorphism. The derivation rule makes the transgression powers the primitive generators, dimension kills `x^(n+1)`, and the upper-right class is exactly the top sphere survivor.
- Dependencies examined: bundle definition and numerable-bundle fibration theorem, cellular-to-singular homology, sphere homology and cohomological UCT, multiplicative Serre sequence, transgression convention, and AC. Cellular homology was added as a previously omitted direct dependency.
- AC/boundaries: AC is propagated through the fibration, UCT, and cohomological Serre suppliers; the finite charts and computations add none. `n=1`, the unit, zero groups, first/last columns, both rows/endpoints, the last zero target, generator reversal, and both ring-map directions are explicit.
- Sources: Hatcher, Examples 4.44–4.45 and Proposition 4.48, printed pp. 377–380, and Example 5.16, printed pp. 546–547. The local item writes out the finite numeration and terminal survivor.
- Pre-splice qualification: the carrier statement omits `n>=1`; at `n=0` its phrase `d_2(u)=x` cannot mean a primitive degree-two generator. The authored statement has the necessary bound, as required by the dispatch direction.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `5ffef70957c3df27f459cff154e019bac48b7968db9b3bca421be33bd43d8fde`.
- Next action: author the quaternionic Hopf analogue with noncommutative chart coordinates checked explicitly.

### `ex-serre-spectral-sequence-of-the-quaternionic-hopf-fibration`

- Claim/convention: for `n>=1`, the right-quaternionic Hopf bundle has `d_4(u)=x` and `H^*(HP^n;Z)=Z[x]/(x^(n+1))`, with `|x|=4` and sign fixed by the oriented `S^3` generator.
- Actual proof: explicit charts normalize the chosen quaternionic coordinate on the right, so no commutativity is smuggled into the transition formulas. The same norm-square cutoff gives a finite support-subordinate numeration. One cell in each dimension `0,4,...,4n` gives the base additively; the two-row sequence and total sphere force every interior `d_4` to be an isomorphism. The derivation rule produces all powers and the upper-right survivor accounts for the unique top class.
- Dependencies examined: bundle definition and numerable-bundle fibration theorem, cellular homology, sphere homology, cohomological UCT, multiplicative Serre sequence, transgression convention, and AC. Cellular homology was added to the carrier.
- AC/boundaries: AC is propagated only through the fibration, UCT, and cohomological Serre suppliers. The proof checks `n=1`, the unit, zero groups, chart denominators and multiplication order, first/last columns, both rows and endpoints, orientation reversal, both ring directions, and the absent terminal target.
- Sources: Hatcher, Example 4.46, printed p. 378, and the multiplicative two-row method in Example 5.16, printed pp. 546–547.
- Pre-splice qualification: as for the complex example, the carrier needs `n>=1`; at `n=0` its asserted transgression generator is not available.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `15283f240f86434b7653942cdba3ffcc5157270542c728e773483e3b2cce4d0f`.
- Next action: author the additive path-loop computation of `H_*(Omega S^(2m+1);Z)` without importing AC or a Pontryagin product.

### `ex-homology-of-the-loop-space-of-an-odd-sphere`

- Claim/convention: for `m>=1`, `H_k(Omega S^(2m+1);Z)` is `Z` precisely in degrees divisible by `2m`, and zero otherwise; this is additive and choice-free, with no Pontryagin-ring claim.
- Actual proof: the explicit based path space contracts by rescaling paths, and simple connectivity makes its loop fiber connected. Sphere homology leaves only base columns zero and `N=2m+1`. Every possible differential is therefore `d_N:G_q→G_(q+2m)`. Vanishing of the contractible abutment makes each such map both injective and surjective, while the untargeted groups in degrees `1,...,2m-1` vanish; quotient-remainder induction gives the formula.
- Dependencies examined: mapping-path factorization, simple connectivity of higher spheres, the homological Serre theorem, sphere homology, and contractible-space homology. The simple-connectivity and contractible-abutment suppliers were added; the unused edge/transgression definition was removed.
- Choice/boundaries: the proof is choice-free. It checks `m=1`, `H_0`, zero groups and columns, the initial gap, first recurrence, both differential endpoints, and every residue class.
- Source: Hatcher Example 5.5 and complete calculation, printed p. 528.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `7f1f7dca614bafd9b9883e0edf6335b1d6092fe0db08f3084a884a2e26870e02`.
- Next action: author the mapping-torus Wang calculation, identifying the monodromy and deriving the unsplit kernel-cokernel short exact sequence.

### `ex-wang-sequence-of-a-mapping-torus`

- Claim/convention: for a homeomorphism `f:F→F`, the positive loop in its mapping-torus bundle has monodromy `f_*`, so Wang gives the natural short exact sequence from the cokernel in degree `q` to `H_q(T_f)` to the kernel in degree `q-1`, with no splitting claim.
- Actual proof: product charts away from the seam and the `f/f^(-1)` seam transition verify the mapping-torus bundle. A positive circuit sends `x` at time zero to the class of `(x,1)=(f(x),0)`, hence transport is `f`. In the five-term Wang segment, exactness makes the first map descend injectively from the cokernel and the connecting map corestrict surjectively to the kernel.
- Dependencies examined: the Wang theorem and fiber-transport/monodromy definition; both are used exactly.
- Choice/boundaries: choice-free. The proof checks `q=0` with `H_(-1)=0`, empty fiber, identity monodromy, zero maps, both exactness endpoints, and both orientation signs. No splitting is selected.
- Source: Hatcher Theorem 5.3 and its base-circle specialization, printed pp. 526–532; the local Wang supplier contains the derived exact sequence.
- Pre-splice qualification: the carrier did not say that `f` is a homeomorphism. The ordinary mapping-torus projection is the asserted fiber bundle under this hypothesis; the authored statement adds it explicitly.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `0ed1537fa8fafbb7204a3d654e99307a9719affff0f7629153c2f0fdf4550ee8`.
- Next action: author the nonsplit-abutment counterexample and verify the actual filtration and its two stable pieces directly.

### `cex-serre-page-collapse-does-not-split-the-abutment`

- Claim/convention: under AC and for `n>=2`, the homotopy fiber of the quotient-induced `BZ→BC_n` produces the actual total-degree-one filtration `0⊂nZ⊂Z`, with stable pieces `nZ` and `Z/n`, but this extension does not split.
- Actual proof: the mapping-path total is homotopy equivalent to `BZ`. The fibration LES makes the fiber connected, identifies its fundamental group with the kernel `nZ`, and kills its higher homotopy. Degree-one Hurewicz and naturality turn the fiber inclusion into `nZ→Z`; the authored fiber-edge theorem identifies its image with `F_0H_1`. Strong convergence then gives the two stable quotients from the actual filtration. A splitting would embed a nonzero order-`n` element in torsion-free `Z`.
- Dependencies examined: discrete-group classifying spaces, mapping paths, the fibration homotopy LES, degree-one Hurewicz, homological Serre convergence, the exact fiber-edge identification, and AC. The unused generic nonsplitting proposition was removed.
- AC/boundaries: AC occurs only in the classifying-space supplier. The proof checks connectedness, zero higher groups, both total-degree-one positions and filtration endpoints, `n=2`, and explains the exclusion of `n=1`.
- Source: Hatcher's stable-term extension warning, printed p. 527. The item realizes Hatcher's abstract nonsplit integer extension as a concrete Serre filtration.
- Pre-splice qualification: the carrier omitted `n>=2`; it is necessary for a nonzero quotient and a nonsplit extension.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `709272848ea08b456fdff46448d060db4471c4247b38b641badebb3b6617048c`.
- Next action: author the Klein-bottle monodromy counterexample and compute both the correct local-coefficient row and the full first homology.

### `cex-ignoring-monodromy-gives-the-wrong-serre-e-two-page`

- Claim/convention: the reflection mapping torus has degree-one monodromy `-1`, so its correct fiber-degree-one local row is `(Z/2,0)` in base degrees `(0,1)`, while the false constant row is `(Z,Z)`; the actual Klein-bottle first homology is `Z⊕Z/2`.
- Actual proof: reflection reverses the fundamental/Hurewicz generator. The one-cell local boundary is therefore `1-(-1)=2`, with cokernel `Z/2` and zero kernel; falsely setting monodromy to one makes the boundary zero. Wang in total degree one gives `0→Z/2→H_1(K)→Z→0`, and the fixed point `[0]` of reflection supplies an explicit mapping-torus section that splits this particular extension.
- Dependencies examined: the preceding authored mapping-torus Wang example, the first Serre differential/local cellular boundary lemma, the fundamental group of the circle, and degree-one Hurewicz. The redundant direct Wang dependency was removed from the carrier.
- Choice/boundaries: choice-free. The item checks degree zero, multiplication-by-two kernel and cokernel, one vertex/edge, both orientations, both local-row positions, the base-dimension-one stable page, and the fixed-point splitting.
- Source: Miller Lectures 24–25, printed pp. 80–87, for Serre local systems and their cellular second page; the reflection and Wang calculations are local.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `df668a9debd9662bc51274d2f8c520e92d7367566bac756ee4c6f8a791b7da0d`.
- Next action: restore the new local supplier to the final A manifest, author both A/B pages, then run pair-wide and batch-wide gates.

### `lem-serre-fibration-replacement-preserves-fiber-homology-transport`

- Claim/convention: for every basepoint, the constant-path strict-fiber map into the mapping-path fiber is a weak equivalence and a natural homology isomorphism for every supplied abelian coefficient group; the integral claim is the promised special case. Strict-fiber transport is the conjugate of Hurewicz transport in the replacement.
- Actual proof: finite relative straightening of each cubical representative and nullhomotopy, including components; a full coefficientwise finite-cycle mapping-cylinder compression; functorial mapping-path formula for naturality.
- Sources: Miller Lectures 24 and 28; exact library suppliers and quotations are recorded in the batch-3 proof contract.
- Dependencies examined: all seventeen frontmatter dependencies, including the finite-cycle compression suppliers and the direct justifier `prop-fibers-over-one-path-component-are-fiber-homotopy-equivalent` that the published transport-local-system lemma omits.
- Scaffold repair: replaced an asserted strict-fiber comparison by the complete finite relative-lifting argument and supplied arbitrary coefficients locally without UCT; added the missing lifting, finite-cycle, continuity, transport, and justifier dependencies and a choice audit.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass. The batch content-policy check was also run and, as expected before authoring, reported only the 55 other missing current-batch files; it did not report this item.
- Open gaps: none in this item. The repaired item decision is refreshed after the coefficientwise strengthening, confidence 1, evidence SHA `891ac2082f34a926114e54404fe183a591e09d8d204e245f745d99d9a58f5174`.
- Next action: author `def-fiber-homology-local-system-of-a-serre-fibration`.

### `def-fiber-homology-local-system-of-a-serre-fibration`

- Claim/convention: homology transport over a commutative ring is conjugated through the coefficientwise strict-fiber comparison; cohomology transport uses the reversed base path and the contravariant comparison map.
- AC: the homology local system is choice-free. The cohomology local system explicitly assumes AC for the natural cohomological UCT over `Z`; no choice-free cohomology comparison is claimed.
- Dependencies examined: the replacement lemma, fundamental groupoid/local-system definitions, Hurewicz transport lemma and its omitted direct justifier, cohomological UCT, and AC.
- Boundaries: empty fibers and the zero ring give zero stalks; point fibers, `q=0`, constant paths, and arrow endpoints are explicit.
- Checks: explicit-path precheck clean (definition, so zero proof bodies checked); explicit-path rendercheck pass; strict definition contract pass.
- Scaffold repair: separated the choice-free homology branch from the AC-dependent cohomology branch and supplied typed conjugation formulas in both variances.
- Open gaps: none. Item decision: repaired, confidence 1.
- Next action: author `lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid`.

### `lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid`

- Claim/convention: first-path-first concatenation gives `T_(gamma*eta)=T_eta T_gamma`; homology transports covariantly by conjugation, while reversed paths plus cohomological contravariance produce the same covariant law.
- Actual proof: explicit cancellation of the comparison isomorphisms and the Hurewicz transport identities, including the reversed-concatenation calculation.
- Dependencies examined: the preceding strict-fiber definition, Hurewicz local-system lemma, its direct transport justifier, the abstract local-system definition, and AC.
- AC/boundaries: homology is choice-free; cohomology inherits precisely the declared AC comparison. Empty/point fibers, zero ring, `q=0`, constants, inverses, and both arrow endpoints are explicit.
- Checks: explicit-path precheck pass after canonical reflow; explicit-path rendercheck pass; strict proof-contract pass.
- Scaffold repair: added the explicit cohomological AC hypothesis and the omitted direct transport justifier.
- Open gaps: none. Item decision: repaired, confidence 1.
- Next action: author `def-serre-filtration-of-the-total-space-over-base-skeleta`.

### `def-serre-filtration-of-the-total-space-over-base-skeleta`

- Claim/convention: `F_a C_n=C_n(p^{-1}(B^a);R)`, `F^a C^n=ker(C^n(E)->C^n(E_(a-1)))`, with the displayed homological and cohomological differential bidegrees.
- Actual content: proves representativewise exhaustivity from the published choice-free compact-CW-image lemma and explicitly denies the false uniform claim `F_n C_n=C_n`.
- Dependencies examined: filtered chains, singular cochains, the CW definition, and choice-free compact finite-cell support.
- Boundaries: negative/zero filtration endpoints, empty total space, zero ring, zero and degenerate chains, and single simplices are explicit.
- Checks: explicit-path precheck clean (definition); explicit-path rendercheck pass; strict definition contract pass.
- Scaffold repair: added the missing compact-support supplier and recorded that the raw singular filtration is not degreewise finite, preventing misuse of the finite-filtration convergence theorem.
- Open gaps: convergence is intentionally deferred to the Serre theorem, where it must be proved by first-quadrant/finite-support stabilization. Item decision: repaired, confidence 1.
- Next action: author `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology`.

### `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology`

- Claim/convention: for every oriented $p$-cell, iterated hemisphere connecting maps and excision identify its relative group in degree $p+q$ with the degree-$q$ homology of the strict fiber at the cell center; summing gives $E^1_{p,q}=C_p^{\mathrm{cell}}(B;\mathcal H_q)$.
- Actual proof: finite relative Serre lifting first proves inverse-image homology invariance for a strong deformation retract; the proof then performs the full disk/hemisphere triple calculation, transports from the terminal flag point to the center, and uses a uniform radial CW collar plus arbitrary additivity to separate all cells.
- Chain-level repair: the oriented cellular contribution is explicitly $K_e=R\{o_e\}[p]\otimes C_*(F_{b_e};R)$ and is chain-isomorphic to the signed shifted fiber complex. The item does not falsely promote ordinary excision to a chain-homotopy equivalence from the raw singular relative quotient.
- Pre-splice mismatch for Step 4: the manifest's phrase “relative chain contribution” must mean the oriented cellular model. If it was intended to mean the raw quotient $C_*(E_p,E_{p-1};R)$, that stronger claim lacks a supplier and is not proved by the cited excision theorem or the published relative-product theorem.
- Dependencies examined: all nine repaired dependencies, including finite relative Serre lifting, the coefficientwise weak-equivalence argument, pair exactness, excision, arbitrary additivity, strict-fiber transport, and cellular local coefficients. The published CW-pair product theorem was removed because an arbitrary strict fiber need not be CW.
- AC/boundaries: choice-free; fixed standard-disk flags, paths, and collars replace indexed selections. The proof checks $p=0$, $p=1$, $q<0$, $q=0$, empty fibers/cell sets, one cell, the zero ring, degenerate singular simplices, endpoints, orientations, and infinite cell families with finite-support chains.
- Sources: Hatcher, proof of Theorem 5.3, printed pp. 529–530; exact library quotations and uses are in the batch-3 proof contract.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none in the choice-free relative-homology/E1 claim or the declared cellular chain model. The raw-singular interpretation remains a reported pre-splice wording mismatch, not a consumed theorem. Item decision: repaired, confidence 1.
- Next action: author `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients`.

### `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients`

- Claim/convention: under the preceding $E^1$ isomorphism, $d_1$ is exactly the intrinsic cellular boundary with coefficients in $\mathcal H_q$, of bidegree $(-1,0)$ and with covariant transport from a $p$-cell center to an incident $(p-1)$-cell center.
- Actual proof: the filtered exact couple gives $d_1=jk$ with the positive pair-connector sign. Naturality of the cell-excision and hemisphere maps reduces each matrix component to an attaching incidence; the reflected interval calculation gives the negative orientation sign, and additivity gives the full finite signed group-ring coefficient acting through transport.
- Dependencies examined: the cell calculation, exact-couple construction/comparison, elementwise connector, intrinsic cellular local-chain convention, lift/orientation basis-change lemma, cellular local-coefficient comparison, and compact finite-cell support.
- AC/boundaries: choice-free and intrinsic. Conditional lift coordinates use only finite data; basis changes conjugate both matrices and coefficients. The proof checks $p=0$, $p=1$, $q=0$, empty/zero stalks, zero ring/incidence, one positive or negative incidence, cancellation, degenerate singular representatives, transport endpoints, and finite support.
- Sources: Hatcher, proof of Theorem 5.3, printed pp. 530–532; exact supplier excerpts and uses are recorded in the strict contract.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1.
- Next action: author `thm-homological-serre-spectral-sequence` and repair its convergence argument for the non-degreewise-finite raw singular filtration.

### `thm-homological-serre-spectral-sequence`

- Claim/convention: the skeletal filtration gives the natural first-quadrant sequence with local-coefficient `E2`, explicit bidegree, strong convergence to the finite image filtration, and the constant-system specialization for a simply connected base.
- Actual proof: first-quadrant support proves pointwise two-sided stationarity. The `Z^r/B^r` formulas and a filtration bound chosen only for one boundary primitive identify the stable term with actual filtered cycles modulo lower cycles and filtered boundaries. That quotient is proved, in both directions, to be the associated graded of the image filtration.
- Convergence repair: the proof does not use the false raw-chain assertion `F_n C_n=C_n`. Each finite singular homology representative is realized on a finite face CW complex; cellular approximation of its projection and one finite-CW Serre lift replace it by a homologous cycle over `B^n`, proving `F_nH_n=H_n`. The target filtration is therefore finite, separated, exhaustive, and complete.
- Naturality: for a square of fibrations over a cellular base map, the total map is filtered. Filtered-complex functoriality gives all page maps, and the natural pair/excision/transport constructions identify the `E2` map with local-coefficient homology. Identity and composite laws come from the published filtered-chain-map supplier.
- Simply connected clause: explicit loop cancellation proves uniqueness of the fundamental-groupoid path class between two points, after which a single stalk identification makes the homology local system constant.
- Scaffold repairs/dependencies: added direct dependencies on the Serre filtration, the exact `r`-cycle/boundary formulas, filtered spectral-sequence functoriality, and local-coefficient functoriality. These were actual proof inputs hidden by the original scaffold.
- AC/boundaries: choice-free. All cellular approximations, lifts, and filtration bounds belong to one finite representative. Empty spaces/fibers, zero ring, degree and filtration zero, axes, one-cell face complexes, degenerate simplices, both stationary bounds, and both associated-graded directions are explicit.
- Sources: Hatcher Theorem 5.3 and proof, printed pp. 526–532; Miller Lectures 24–25. Exact library excerpts and uses are in the batch-3 proof contract.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `c06ffbe83f138e7665e713b940254ec3db1ab762db1385d853bf4caf8ccebab6`.
- Next action: author `thm-naturality-of-the-homological-serre-spectral-sequence`, including the precise meaning of “homotopic maps over the base.”

### `thm-naturality-of-the-homological-serre-spectral-sequence`

- Claim/convention: a strictly commuting square of Serre fibrations over a supplied cellular base map induces functorial page maps; `E2` is the map for the forward strict-fiber homology coefficient morphism, and `E∞` is the associated graded of the filtered total-homology map.
- Homotopy qualification: “over the base” now explicitly means that both total maps lie over the same `f:B→B'` and the entire homotopy projects constantly to `f p`. This makes the singular prism filtration-preserving.
- Actual proof: filtered-chain functoriality supplies every page map and its identity/composition laws. The natural cellwise relative/excision/transport comparison identifies the second page. A stable cycle representative proves compatibility with the associated graded. For a homotopy over `f`, the two terms `P∂x` and `∂Px` are placed in the two exact `B^r` denominator summands, proving equality on every page `r≥1`, stronger than the promised `E2`-onward equality.
- Scaffold repairs/dependencies: added the Serre filtration, exact `Z^r/B^r` formulas, and singular prism theorem as direct proof inputs. No cellular approximation is used because the base map is supplied cellular.
- AC/boundaries: choice-free. Empty bases/total spaces/fibers, zero ring/maps, degree/filtration zero, axes, identities, composites, constant homotopies, degenerate simplices, both stable directions, both boundary summands, and `r=1` are explicit.
- Sources: Hatcher, naturality following Theorem 5.3, printed pp. 532–533; exact supplier excerpts and uses are in the batch-3 proof contract.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `7e8b4c00551f1ef3342574261e6c38386675df8a3e039dcab385a80f47d84567`.
- Next action: author `def-serre-edge-homomorphisms-and-transgression`, preserving the axis directions and the correct restricted domain of transgression.

### `def-serre-edge-homomorphisms-and-transgression`

- Edge conventions: the homological fiber edge is `H_0(B;H_n)→H_n(E)`, hence begins with the coinvariant-type local-coefficient group, while the base edge is `H_n(E)→H_n(B;H_0)`. Neither axis is silently replaced by invariants or ordinary coefficients.
- Homological transgression: for `n≥2`, `D_n=E^n_{n,0}` is the surviving subgroup of the base axis and `Q_{n-1}=E^n_{0,n-1}` is the fiber-axis quotient by earlier incoming images. The transgression is exactly `d_n:D_n→Q_{n-1}` with no added sign.
- Scaffold ambiguity/pre-splice note: with the declared homological bidegree, the across-the-page differential runs from a surviving base-axis class to the fiber axis, not from a fiber class to the base. To preserve the intended fiber-class wording without reversing that differential, the definition separately records the conditional dual cohomological convention `d_n:E_n^{0,n-1}→E_n^{n,0}`.
- Boundaries/choice: `n=2`, empty earlier-differential lists, zero groups/ring, empty axes, and nonsurviving classes are explicit. The construction uses canonical subobjects and quotients and is choice-free.
- Sources: Miller Lecture 26, printed pp. 88–91; Hatcher Proposition 5.14, printed pp. 539–541.
- Checks: explicit-path precheck clean (definition); explicit-path rendercheck pass; strict definition contract pass.
- Open gaps: none in the authored conventions. The repaired receipt (confidence 1, SHA `add54c6dab817ac14a8e918400006bef15a870b919f60e3d7738753e62da5f2c`) is superseded only by a final audit-wording change from “not an iff assertion” to “does not state a biconditional,” which removes a literal-token false positive; refresh it after the engine creates the post-addition scope certification.
- Next action: author `prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion`, repairing its nontrivial-monodromy and disconnected-fiber wording.

### `prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion`

- Fiber edge: for a supplied zero-cell `b`, naturality against `F_b→{b}` proves `epsilon_F kappa_b=(i_b)_*`. The degree-zero local-chain relations prove `kappa_b:H_n(F_b)→H_0(B;H_n)` is epic, so the edge is uniquely induced from fiber inclusion through coinvariants.
- Base edge: naturality against the identity fibration proves `a_* epsilon_B=p_*`, where `a_*` is induced by the fiberwise augmentation `H_0(F_x)→R`. If the fibers are nonempty and path connected this augmentation is canonically invertible, and only then is the base edge literally `p_*` under ordinary coefficients.
- Pre-splice mismatch for Step 4: the manifest shorthand “induced by p and i, with invariants or coinvariants” suppresses two necessary qualifications. Homology uses coinvariants, not invariants; and the base edge has target `H_n(B;H_0)` before augmentation. The exact reader-facing statement is in the item and should replace the shorthand during serial reconciliation. The cohomological invariants slogan is retained only as a conditional dual remark.
- Dependencies examined: the authored edge definition and naturality theorem, published edge naturality, and the intrinsic local-chain/local-homology definitions.
- AC/boundaries: the homological proof is choice-free, using a path only for one generator. It covers empty fibers/basepoint absence, zero ring/maps, `n=0`, point/identity fibrations, constant monodromy and paths, degenerate simplices, and both edge identities.
- Sources: Miller Propositions 26.2–26.3, printed pp. 88–90; exact supplier excerpts and uses are in the strict contract.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none in the qualified proposition. Item decision: repaired, confidence 1, evidence SHA `3c92bb0bef7ba15e50b4e4f3561d71cb91162cacac29df9ecab76abcf2e22b33`.
- Next action: author `prop-serre-transgression-agrees-with-the-relative-connecting-construction` from the homological base-to-fiber convention.

### `prop-serre-transgression-agrees-with-the-relative-connecting-construction`

- Claim/convention: a class in `D_n=E^n_(n,0)` has a representative `x∈C_n(E_n)` with `∂x∈C_(n-1)(E_0)`. Its positive pair connector for `(E_n,E_0)` is `[∂x]`, and the vertical-axis quotient sends this to exactly `d_n(x)`.
- Actual proof: the pair connector and filtered differential are compared on the same chain, so there is no hidden sign. If two `E^n` representatives differ by `a+∂y`, the boundary difference `∂a` lies in the precise second summand `∂A^(n-1)_(n-1,n)` of the target `B^n`; changes by an `E_0` chain or ordinary boundary also vanish. This proves both page and relative independence.
- Scaffold repair/pre-splice note: the homological transgressive input is a surviving base-axis class. The item explicitly contrasts the later dual cohomological fiber-axis convention instead of calling the homological input a fiber class.
- Dependencies examined: the edge/transgression definition, Serre filtration, exact `A^r/B^r` formulas, pair LES and cycle-level connector, and quotient descent.
- AC/boundaries: choice-free. It covers `n=2`, empty/zero targets, zero ring/class, a class killed earlier, one representative, relative boundaries, constant/degenerate simplices, both endpoints, both ambiguity sources, and the positive sign.
- Sources: Hatcher Proposition 5.14 and complete proof, printed pp. 539–542; exact supplier excerpts and uses are in the strict contract.
- Checks: explicit-path precheck pass; explicit-path rendercheck pass; strict proof-contract pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `7dd554aa8e1329aff078617cbe8e467c4cde56bb4226492e5a1565bfa3954112`.
- Next action: author `thm-cohomological-serre-spectral-sequence`, propagating AC and proving its actual convergence filtration.

### `thm-cohomological-serre-spectral-sequence`

- Claim/convention: under explicit AC, the decreasing skeletal filtration gives the natural first-quadrant cohomological sequence with reversed-path fiber-cohomology local coefficients, differential of bidegree `(r,1-r)`, the finite image filtration on total cohomology, and specified stable associated-graded identifications.
- Actual cell proof: reversed hemisphere connectors give the cell suspension isomorphism and the reflected interval fixes its sign. A uniform radial collar and excision reduce the relative skeleton pair to a disjoint union of pulled-back cell pairs. Relative chains are then a direct sum and relative cochains a product; AC is used exactly to assemble componentwise primitives, while the reversed fiber path supplies the correct contravariant local coefficient map. The first differential is consequently the cellular local-coefficient coboundary.
- Convergence repair: the raw cochain filtration is not treated as degreewise finite. A finite relative cycle realization, cellular approximation, HEP, finite Serre lifting, and the singular prism prove `H_k(E,E_m;Z)=0` for `k<=m`. The explicitly AC-dependent cohomological UCT gives the matching relative cohomology range. For total degree `n`, the quotient by `F^(2n+3)` has a genuinely finite filtration and the same total cohomology/image filtration; the exact finite-window formula compares it with the raw sequence through the two-sided stationary page. This proves the actual associated graded and both target endpoints.
- Dependencies examined: all nineteen frontmatter dependencies, including the cohomological local system, relative cell geometry, pair connectors/excision, relative cochain model, finite relative CW/lifting/prism suppliers, cohomological UCT and AC, finite-page window, strong-convergence definition, and local-coefficient functoriality.
- AC/boundaries: AC is declared and used only for simultaneous product primitives, the strict-fiber cohomology comparison inherited from the local-system definition, and cohomological UCT. Empty/zero cases, one cell and one finite representative, degree and total degree zero, degenerate simplices, both incident stationary bounds, both filtration endpoints, and both associated-graded directions are explicit.
- Sources: Hatcher Theorem 5.15 and complete proof, printed pp. 542–543. Hatcher supplies the cellwise cohomological translation and reflected-interval sign but not the repaired raw-filtration convergence proof; exact local supplier quotations and uses are in the batch-3 strict contract.
- Checks: explicit-path precheck pass after canonical step ordering; explicit-path rendercheck pass; strict proof-contract pass; contract JSON parse pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `8b81152cd88d316825eba657b4ec885c97cdd1a60637867db8594ebb03ff9308`.
- Next action: author `lem-multiplicative-filtered-cochains-induce-products-on-all-spectral-sequence-pages`, proving the later-page derivation and quotient well-definedness directly.

### `lem-multiplicative-filtered-cochains-induce-products-on-all-spectral-sequence-pages`

- Claim/convention: an explicitly defined associative unital cochain DGA with a multiplicative decreasing filtration gives unital associative products on every cohomological page, the total-degree signed `d_r` Leibniz rule, algebra isomorphisms `E_(r+1) ≅ H(E_r,d_r)`, inherited graded commutativity when present, and the associated-graded abutment product under degreewise-finite convergence.
- Actual quotient proof: after the published cohomological reindexing, the Leibniz rule puts a product of two `A^r` representatives in the target `A^r`. Separate computations show that a lower-filtration `A^(r-1)` change in either variable lands in the first target `B^r` summand, while a differential-boundary change is the sum of one target differential boundary and one target lower-filtration approximate cycle. This establishes well-definedness on `Z^r/B^r` without treating an asserted strategy as proof.
- Later pages and signs: the representative differential gives `d_r(xy)=(d_rx)y+(-1)^(a+b)x(d_ry)` after reindexing. For a page-cycle, the actual lower-filtration correction from the published next-page comparison multiplies with the correction of the second factor to a valid correction of the product; hence the specified next-page comparison is an algebra map. Hatcher explicitly notes that its own later-page derivation argument was inadequate, so this local calculation closes rather than cites that gap.
- Stable product: beyond both endpoints of a degreewise-finite filtration, the numerator is the actual filtered cycles and the denominator is lower-filtered cycles plus actual boundaries landing in the filtration. Multiplication of actual cocycles therefore agrees literally with multiplication on the associated graded of the image filtration, in both quotient directions.
- Scaffold/dependency repair: removed the unused singular-cup-specific Leibniz theorem; added the direct `r`-page quotient and representative differential suppliers. The DGA and multiplicative-filtration hypotheses are written out in the item instead of depending on an absent generic DGA definition. The manifest strategy and axiom audit now record the actual proof.
- AC/boundaries: choice-free. The proof uses only finite expressions in supplied representatives and the canonical quotient maps. It checks the zero DGA/ring/input/differential, unit, page zero, first transition, repeated filtration terms, both denominator variables, both finite endpoints, and both stable quotient directions.
- Sources: Miller Lecture 29, printed pp. 100–101, for the multiplicative spectral-sequence interface; Hatcher Chapter 5, printed pp. 543–546, including its explicit notice that the later-page derivation proof was missing. Exact library supplier excerpts and uses are in the strict contract.
- Checks: explicit-path precheck pass after canonical step ordering; explicit-path rendercheck pass; strict proof-contract pass; contract JSON parse pass.
- Open gaps: none. Item decision: repaired, confidence 1, evidence SHA `ab716d45c5b4fe873511e699a641a5cf91d8c3b433aee8f9e27898413aa90402`.
- Next action: author `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence`, including the local-coefficient product pairing and exact `E_2` Koszul sign.

## Final pair checkpoint and handoff

### Completed inventory

All assigned items and both pages are fully authored. The A page contains, in final manifest order:

1. `lem-serre-fibration-replacement-preserves-fiber-homology-transport`
2. `def-fiber-homology-local-system-of-a-serre-fibration`
3. `lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid`
4. `def-serre-filtration-of-the-total-space-over-base-skeleta`
5. `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology`
6. `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients`
7. `thm-homological-serre-spectral-sequence`
8. `thm-naturality-of-the-homological-serre-spectral-sequence`
9. `def-serre-edge-homomorphisms-and-transgression`
10. `prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion`
11. `prop-serre-transgression-agrees-with-the-relative-connecting-construction`
12. `thm-cohomological-serre-spectral-sequence`
13. `lem-multiplicative-filtered-cochains-induce-products-on-all-spectral-sequence-pages`
14. `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence`
15. `prop-degree-and-parity-criteria-for-serre-collapse`
16. `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence`
17. `thm-wang-sequence-for-a-fibration-over-the-circle`
18. `def-serre-class-ring-ideal-and-mod-c-morphism`
19. `lem-serre-classes-are-stable-under-finite-filtrations`
20. `thm-first-quadrant-spectral-sequence-transfer-modulo-a-serre-class`
21. `thm-serre-class-fibration-transfer`
22. `cor-serre-finite-generation-torsion-and-p-primary-transfer`
23. `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber`
24. `lem-circle-and-path-loop-models-for-eilenberg-maclane-induction`
25. `thm-rational-cohomology-of-eilenberg-maclane-spaces-in-one-generator`

The B page contains, in final manifest order:

1. `ex-path-loop-serre-computation-of-cp-infinity`
2. `ex-serre-spectral-sequence-of-the-complex-hopf-fibration`
3. `ex-serre-spectral-sequence-of-the-quaternionic-hopf-fibration`
4. `ex-homology-of-the-loop-space-of-an-odd-sphere`
5. `ex-wang-sequence-of-a-mapping-torus`
6. `cex-serre-page-collapse-does-not-split-the-abutment`
7. `cex-ignoring-monodromy-gives-the-wrong-serre-e-two-page`

The new local supplier is `lem-circle-and-path-loop-models-for-eilenberg-maclane-induction`. It proves the circle and strict path-loop models, including the CW-homotopy-type input needed before Eilenberg–Mac Lane uniqueness can be applied. It is registered in the manifest, A-page inventory, coverage, contract file, and both consumers' dependencies. As required for an item first created and fully authored in this dispatch, no Step 3 self-review receipt was fabricated.

### Checks actually run

- Explicit-path precheck over the 32 owned item files: 28 proof-bearing files checked, 28 passed, 0 failed; the four definitions were parsed but are not proof-body targets.
- Explicit-path renderer check over 32 items and the two owned pages: 34/34 passed using the real KaTeX and renderer YAML parser.
- Strict proof-contract check restricted to the owned IDs: 32/32 checked, 0 errors, 0 warnings.
- Citation and boundary checks: `citecheck` scanned all 32 items cleanly; `citation-fidelity` checked 223 citations over all 32 items, with no missing quotation and no widening candidate. `boundary-audit --fail-on-contradicted` exits cleanly after the literal-token wording repair; its remaining two template-reuse clusters were inspected and are accurate no-biconditional/no-converse dispositions for the named items.
- Coverage and source checks: two pages and 45 harvested results, 0 errors and 0 warnings; 7/7 sources are fetch-verified and resolved; all 28 source-backed authored results remain backed. The short Schön publication has a full-document receipt for all three scan pages with SHA-256 `99559a8563e63621da79e086b94229ffca5b25026428d7ae0b9b5da220b9e013`.
- `finite-smoke` found no configured finite-model obligation among these 32 items; this is a zero-scope result, not mathematical evidence. `risk-report` produced 32 structural review routes and 0 errors; no independent-review stamp was added.
- Manifest checks: all 565 run items have explicit dependency arrays; manifest integrity reports 36/36 owed pages with no scope drift. The two owned page frontmatter lists match their manifest lists exactly and in order (25 A, 7 B). Every owned item file and contract entry is present.
- `validate-plan research/plan-spec.json --repo . --max-items 60` exits successfully: the global page/item graph is acyclic, with no unresolved ID, item cycle, forbidden B dependency, or declared-order violation among pages carrying item lists.
- Repository dependency check with the pending-audit allowance now reports 19,011 items, 0 errors, and only existing warnings. Repository forward-reference check still reports six unrelated `forward-undeclared` errors: two in `ex-brownian-finite-dimensional-density`, two in `thm-blass-model-has-only-principal-ultrafilters`, and two in `thm-small-forcing-does-not-create-measurable-cardinals`. None names or is caused by an owned file.
- The required batch content-policy check was run over all 57 batch items. Its only 25 errors are missing item files for the concurrently owned Leray–Hirsch/Thom pair; it names no owned Serre item and emits no warning. This pair does not edit or certify those sibling files.

### Dependency input and plan reconciliation

`research/phase-2-next-18-batch-3.cross-batch-dependencies.json` retains all eight sibling Leray–Hirsch rows unchanged. A full comparison of the owned manifest dependency closures against the current run finds zero owned cross-batch rows, so no owned row needed adding and no sibling row was removed.

The pre-splice plan mismatch is exact: `research/plan-spec.json` carries zero item records on each of these pages, while the final batch manifest carries 25 A items and 7 B items. Page IDs, kinds, ordering, companion relation, category, and page-level `requires` agree. Step 4 must splice the item lists rather than treating the successful graph validation as proof that the plan already contains them.

The serial reconciler must also preserve these authored qualifications when replacing scaffold prose:

- `def-serre-class-ring-ideal-and-mod-c-morphism`: add the source-required `Tor_1^Z` closure alongside tensor closure.
- `thm-serre-class-fibration-transfer`: retain both the trivial-action Serre-ideal Vietoris–Begle clause and the simply-connected relative Serre-ring clause, their exact ranges, and explicit AC.
- `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber`: reconcile the carrier's `kind: corollary` with its `thm-` ID, theorem title, and authored theorem frontmatter; add explicit AC.
- `def-serre-edge-homomorphisms-and-transgression` and its two consumers: homological edge terms use zeroth local homology/coinvariants and the homological transgression runs from the surviving base axis to the fiber-axis quotient; the dual cohomological direction is separately stated.
- `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology`: “relative chain contribution” means the authored oriented cellular model, not an unsupported chain-homotopy equivalence from the raw singular relative quotient.
- `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence`, both finite Hopf examples, the nonsplit counterexample, and the mapping-torus example: retain respectively `n>=1`, `n>=1`, `n>=1`, `n>=2`, and the hypothesis that the gluing map is a homeomorphism.
- The homological convergence prose must retain the finite-representative argument; the raw singular filtration is exhaustive but not degreewise finite. The rational Eilenberg–Mac Lane computation must retain the new loop-fiber CW-type supplier.

### Certification and open obligations

There is no unresolved mathematical claim in the owned items and no owner-held mathematical escalation. The final administrative check is intentionally not forged: registering the new supplier changes the A-page scope digest, while only the owner/engine can create the corresponding current scope certification. The immutable-baseline exception in this dispatch requires the engine, after successful dispatch, to certify the post-author scope and the new supplier. Until that happens, `step3-decisions check --phase final` short-circuits the pair as requiring a current owner scope and current item audits.

After the engine creates those certifications, rerun the final decision check. The original items have hash-bound repaired receipts, but four require deliberate post-certification refresh: `thm-rational-cohomology-of-eilenberg-maclane-spaces-in-one-generator` and `ex-path-loop-serre-computation-of-cp-infinity` because the first has a new direct dependency and the second a new transitive dependency; `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence` because its final source locator was corrected from the erroneous “§10.1” to Hatcher §5.1 after the earlier receipt; and `def-serre-edge-homomorphisms-and-transgression` because its final audit sentence was reworded to remove the boundary checker's literal-token false positive. Verify that the remaining 27 original receipts revalidate under the current scope. Do not use `--owner` and do not reinterpret the earlier substantive owner `proceed` as authority to fabricate the changed-scope receipt.

The two confirmed published concerns remain exactly those reported above: hidden AC in `thm-universal-coefficient-theorem-for-homology-over-a-pid`, and the omitted direct transport justifier in `lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems`. Both have high confidence, exact suppliers, and proposed repairs; neither was edited or consumed without its missing qualification.
