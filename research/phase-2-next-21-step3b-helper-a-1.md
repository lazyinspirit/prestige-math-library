# Step 3b helper a-1 checkpoint — phase-2-next-21

Pair: `lie-subgroups-actions-and-homogeneous-spaces` / companion examples  
Exclusive owner: helper a-1; group lead: a

## Controlling inputs and conventions

- The complete DG-26 section in `research/plan-differential-geometry-track.md`
  lines 6654–6891 controls. The dispatch's second locator is its B-page
  subsection, not a competing design. The current plan and Batch 8 manifest
  add now-published `covering-spaces-and-lifting`, put the action definition
  before the homogeneous-space definition, and retain the selected A52/B12
  inventory.
- `research/phase-2-next-21-batch-8.pages.json` is the current pair manifest.
  The A and B page files were absent at author start and have now been created
  with exactly its 52 and 12 IDs.
- Lie subgroups mean injectively immersed subgroups with their intrinsic
  manifold structures. Closed and embedded are separate adjectives. Quotients
  use left cosets and left $G$-actions. Principal actions are right actions.
  For a left action, $X_M(x)=\left.\frac d{dt}\right|_0
  \exp(-tX)\cdot x$, so $X\mapsto X_M$ has the positive bracket sign.
- The subgroup--subalgebra theorem assumes $\mathrm{AC}_\omega$ exactly
  because its published maximal-leaf supplier spends it on a countable flat
  chart cover and countable unions. No stronger choice principle is used.

## Authoritative source passages read

- John M. Lee, *Introduction to Smooth Manifolds*, 2nd ed., Theorem 19.26 and
  proof (printed pp. 506–507); Theorem 20.12 and proof (pp. 523–525);
  Theorem 20.18 (pp. 529–530); Theorem 21.10 and proof (pp. 544–547);
  Theorems 21.17–21.18 and proofs (pp. 551–553); Theorems 21.26–21.29
  (pp. 555–557), full PDF at
  <https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf>.
- Pavel Etingof, *MIT 18.745 Lie Groups and Lie Algebras I*, §§3.2–3.4 and
  §§4.1–4.5 (printed pp. 25–32), including Proposition 3.5, Theorem 3.13,
  Theorem 4.1, Proposition 4.7, and Proposition 4.12, full official notes at
  <https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf>.

## Provisional cross-pair supplier blockers

The exact Batch 7 manifest statements and the interface evidence in
`research/phase-2-next-21-batch-8.cross-batch-dependencies.json` were read.
At final handoff, two root supplier files are still absent:

- `thm-the-differential-of-adjoint-is-ad`. Its own declared Batch 7 suppliers
  `prop-adjoint-is-a-smooth-lie-group-representation` and
  `def-adjoint-representation-of-a-lie-algebra` are also absent. This blocks
  the ideal-normality and fundamental-field-bracket chains.
- `thm-baker-campbell-hausdorff`. This blocks the declared Cartan
  closed-subgroup proof, hence transitively the closed-subgroup, kernel/image,
  homogeneous-quotient, stabilizer/orbit, associated-bundle, and nine
  remaining B-example chains.

The other relevant Batch 7 files have appeared:
`def-exponential-map-of-a-lie-group`, `def-local-logarithm-on-a-lie-group`,
`prop-exponential-scales-one-parameter-subgroups`,
`cor-the-exponential-map-is-a-local-diffeomorphism-at-zero`,
`thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism`,
`prop-exponential-map-is-natural-for-lie-group-homomorphisms`, and
`def-conjugation-and-the-adjoint-representation-of-a-lie-group`.

The supplier
`thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism`
has now also appeared. Its complete proof was inspected: it relates the two
left-invariant extensions through the homomorphism, applies naturality of Lie
brackets of related vector fields, and evaluates at the identity. It explicitly
assumes $\mathrm{AC}_\omega$ through the current invariant-field suppliers and
passes precheck. The subgroup-algebra proposition below therefore propagates
that assumption; the lead must reflect this contract delta because its manifest
statement omitted it.

The exponential-naturality item was also inspected in full: it composes a
smooth homomorphism with a one-parameter subgroup, computes its initial
velocity by the chain rule, and invokes uniqueness of exponential
one-parameter subgroups. It explicitly propagates $\mathrm{AC}_\omega$ and
passes precheck. The new conjugation/adjoint definition has also been read in
full and passes precheck; it correctly defines
$\operatorname{Ad}_g=d(C_g)_e$ but deliberately leaves smooth representation
and differential claims to still-absent later Batch 7 items.

## Scaffold corrections found

- `ex-an-irrational-line-as-a-dense-immersed-lie-subgroup-of-a-torus`:
  compactness of the ambient torus versus noncompactness of $\mathbb R$ does
  not by itself disprove embedding, because the dense image is not compact.
  The complete argument will use integers $n_j\to\infty$ with
  $e^{2\pi i\alpha n_j}\to1$: their images converge to the identity while
  their preimages do not.
- `thm-continuous-homomorphisms-between-lie-groups-are-smooth`: equal
  dimensions of the graph and source plus topological bijectivity do not alone
  make the projection differential invertible (a smooth homeomorphism can have
  critical points). The proof also needs exponential naturality to show that
  the projection's trivial kernel forces an injective identity differential.
  Proposed contract adds
  `prop-exponential-map-is-natural-for-lie-group-homomorphisms`.
- `cor-transitive-smooth-actions-identify-m-with-g-mod-h`: the scaffold phrase
  “the orbit dimension equals $\dim M$” needs proof. The intended complete
  route is the equivariant-rank/Baire argument (or a local lemma supplying
  submersivity of orbit maps). This remains an open local obligation.
- `prop-compact-lie-group-actions-are-proper`: the compact second projection
  requires `thm-compactness-under-continuous-maps`, and closedness of a compact
  subset of $M\times M$ requires the finite-product Hausdorff lemma. Both were
  added to the item dependencies; the lead must reconcile these additions with
  the shared manifest/contract.
- `thm-a-connected-covering-space-of-a-connected-lie-group-carries-a-unique-lifted-lie-group-structure`:
  pulling back charts does not by itself verify the repository's
  second-countability convention for manifolds. I added the local supplier
  `lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure`,
  including a countable-sheet argument for connected covers, and inserted it
  on the A page immediately before the covering-group theorem. The lead must
  add this new local item and the theorem's extra explicit topology dependencies
  to the shared manifest/contract.
- `thm-universal-covering-lie-group`: “unique up to a unique
  basepoint-preserving isomorphism” is false unless the isomorphism is required
  to commute with the projections to $G$ (for instance, $\mathbb R$ has many
  identity-preserving Lie-group automorphisms). The authored statement says
  “over $G$,” as the scaffold strategy and universal-cover supplier require.
- `cex-a-proper-action-with-stabilizers-whose-quotient-is-not-a-principal-bundle`:
  the manifest did not name the existing generic principal-bundle definition,
  although the refutation needs its free-fibre clause. Added
  `def-principal-g-bundle-and-associated-fiber-bundle` directly; the lead must
  reconcile that contract edge.
- `def-fundamental-vector-field-of-a-left-action`: smoothness of the field as a
  section uses smoothness, not merely the definition, of the exponential map.
  Added
  `thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero`
  and the inherited `def-countable-choice` assumption; the lead must reconcile
  those edges with the shared contract.
- `lem-no-small-subgroups-in-a-lie-group`: the scaffold's exponential proof
  inherits $\mathrm{AC}_\omega$ from the current Batch 7 exponential suppliers,
  while the promised theorem is unconditional. I replaced that route by the
  standard coordinate squaring-map estimate $s(v)=2v+o(\lVert v\rVert)$,
  which proves the exact statement in ZF. Added
  `def-differential-of-a-smooth-map`; retained the three manifest dependencies
  as an explicitly unused alternative route. The lead must reconcile the
  proof-strategy and dependency delta.
- `lem-local-slice-for-a-free-proper-action`: the manifest routes through the
  not-yet-sound stabilizer infinitesimal-kernel proposition, but freeness plus
  the constant-rank normal form already makes the orbit differential injective.
  I used that independent argument and added the constant-rank, local
  compactness, finite-dimensional complement, and closed-compact suppliers.
  The lead must replace the provisional cross-chain edge in the contract.
- `thm-free-proper-action-quotient-manifold`: the authored Hausdorff proof
  expands the missing “proper maps are closed” interface directly using local
  compactness. Added the exact compactness/product/constant-rank suppliers used;
  the lead must reconcile them.
- `thm-a-free-proper-action-makes-m-to-m-mod-g-a-principal-g-bundle`: added the
  existing generic principal-bundle definition, which supplies the freeness and
  equivariant-chart clauses not present in the manifest's ordinary smooth
  fibre-bundle definition.
- `prop-tangent-space-of-a-free-proper-quotient`: the slice product computes the
  kernel directly, so the provisional infinitesimal-orbit supplier was replaced
  by `lem-local-slice-for-a-free-proper-action`.
- `prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients`: added
  the constant-rank theorem for the local-section step that proves the
  continuous quotient factor is smooth.
- The first dependency audit exposed an A-to-B page cycle: the A-page
  false statements about immersed subgroups and free actions had been routed
  through the B-page irrational-flow counterexample. B pages must be leaves.
  I added the local A-page supplier
  `lem-irrational-torus-flow-is-free-with-dense-orbits`, moved the finite
  pigeonhole density argument there, and rerouted both A refutations and the B
  counterexample through it. The lead must add this local item and reconcile
  the three altered contracts.
- `fs-a-free-action-always-has-a-manifold-orbit-space`: the refutation now
  uses the local irrational-flow lemma and the library's Hausdorff manifold
  convention, neither of which appeared in the manifest dependencies.
- `ex-the-free-proper-integer-translation-action-on-the-line`: the compact-set
  verification of properness uses continuous compact images, metric
  boundedness, finite compact products, and closed-subspace compactness. Added
  those exact suppliers and `def-lie-group`; the lead must reconcile these
  edges with the shared contract.
- `fs-every-lie-subalgebra-integrates-to-a-closed-lie-subgroup`: the scaffold
  mentions only the connected integral winding. To refute the literal
  existence of any closed, possibly disconnected, integral subgroup, the proof
  passes to its open-and-closed identity component and applies uniqueness.
  Added the checked winding and exact component suppliers, and propagated the
  correspondence theorem's $\mathrm{AC}_\omega$ assumption.

## Item checkpoint

The following item bodies are authored. Source locator `Lee 19.24–19.26`
means printed pp. 506–507; `Etingof 8.3` means printed p. 50.

| Item | Claim/proof and dependencies | Boundaries, checks, obligations |
| --- | --- | --- |
| `def-lie-subalgebra-and-ideal` | Bracket-closed subspaces and ambient-bracket-stable ideals; depends on the exact finite-dimensional Lie-algebra and linear-subspace definitions. | Includes zero/full subspaces and complex bilinearity inherited from the supplier. Lee/Etingof conventions checked. Rendercheck pass. |
| `def-immersed-embedded-and-closed-lie-subgroup` | Separates intrinsic immersed topology, embedding, and closed image. | Includes disconnected and zero-dimensional cases; makes no closed-implies-given-structure claim. Lee 19.25 and Etingof 3.10/4.5. Rendercheck pass. |
| `prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra` | Immersion makes $di_e$ injective; the now-present differential-homomorphism theorem makes it bracket preserving, so its image is a Lie subalgebra and $di_e$ identifies the intrinsic tangent algebra with that image. | Propagates the supplier's explicit $\mathrm{AC}_\omega$ assumption, which the manifest omitted. Zero/full-dimensional cases included. Lee Def. 19.25, p. 506; Kirillov Prop. 3.12(1), p. 32. Explicit precheck/rendercheck pass. |
| `def-left-translated-distribution-associated-to-a-lie-subalgebra` | Defines $\mathcal D_g=dL_g(\mathfrak h)$ through the supplied smooth tangent trivialization. | Rank zero/full included. Records inherited $\mathrm{AC}_\omega$ cost without adding a new choice. Lee 19.24. Rendercheck pass. |
| `lem-a-lie-subalgebra-distribution-is-involutive` | A finite basis gives a global invariant frame; bracket closure keeps all frame brackets in the distribution. | Empty basis handled. Depends on the authored Batch 7 invariant-bracket proposition inspected in full. Explicit precheck and rendercheck pass. |
| `thm-lie-subgroup-lie-subalgebra-correspondence` | Maximal Frobenius leaf through $e$ is a subgroup; flat-leaf factorization makes division smooth; any connected integral subgroup maps locally diffeomorphically and openly onto it. | Zero/full algebra cases handled. $\mathrm{AC}_\omega$ is spent exactly by the published maximal-leaf supplier. Added necessary `thm-smooth-inverse-function-theorem-on-manifolds` dependency to justify the open-image uniqueness step; lead must reconcile the shared manifest/contract. Explicit precheck/rendercheck pass. The manifest-only `prop-exponential-map-is-natural-for-lie-group-homomorphisms` file is still absent, so final dependency inspection remains open even though the proof does not use that redundant edge. |
| `cor-connected-lie-subgroups-with-the-same-lie-algebra-are-equal-as-immersed-subgroups` | Applies uniqueness, including equality of intrinsic structures rather than only images. | Inherits $\mathrm{AC}_\omega$ through the theorem. Explicit precheck/rendercheck pass; final closure follows the preceding supplier obligation. |
| `thm-lie-group-homomorphisms-have-constant-rank` | Differentiates $F\circ L_g=L_{F(g)}\circ F$ and conjugates $dF_g$ to $dF_e$ by translation isomorphisms. | No connectedness or choice. Explicit precheck/rendercheck pass. |
| `def-smooth-left-action-of-a-lie-group` | Jointly smooth left action with identity and associativity laws. | Does not substitute separate smoothness. Etingof 4.8. Rendercheck pass. |
| `def-homogeneous-space-of-a-lie-group` | Smooth transitive $G$-manifold; $G/H$ is left cosets with quotient topology. | Explicitly makes no manifold claim for nonclosed $H$. Lee pp. 550–551/Etingof 4.1. Rendercheck pass. |
| `def-orbit-stabilizer-and-orbit-map-of-a-smooth-action` | Defines $G_x$, $G\cdot x$, and $\Phi_x(g)=g\cdot x$. | No orbit embeddedness is built in. Lee p. 541/Etingof 4.4. Rendercheck pass. |
| `def-free-and-proper-lie-group-actions` | Freeness is trivial stabilizers; properness uses the action-graph map. | Records equivalent coordinate order and independence of the two hypotheses. Lee pp. 542–543. Rendercheck pass. |
| `def-equivariant-map-and-equivariant-vector-bundle` | Equivariant maps; jointly smooth total-space action by fibrewise-linear bundle maps. | Projection equivariance and fibre linearity explicit. Rendercheck pass. |
| `def-covering-homomorphism-of-lie-groups` | Requires both a smooth group homomorphism and an underlying covering map. | No inference of either clause from the other. Etingof 3.2. Rendercheck pass. |
| `cor-fundamental-group-of-a-connected-lie-group-is-abelian` | Applies the published Eckmann–Hilton theorem for topological groups. | Connectedness is stronger than needed but retained for the promised covering context. Explicit precheck/rendercheck pass. |
| `lem-irrational-torus-flow-is-free-with-dense-orbits` (new local supplier) | The irrational $\mathbb R$-flow is a smooth free action; finite pigeonhole produces arbitrarily small positive irrational rotations, which makes every orbit dense; the identity orbit map is an injective immersion and homomorphism. | Added on A immediately before its false statements so the B page remains a dependency leaf. No countable choice: the only subdivision is finite. Lee Ex. 21.3, p. 542; Etingof Ex. 3.14(2), p. 26, and Ex. 4.6(1), p. 29. Explicit precheck/rendercheck pass. |
| `prop-compact-lie-group-actions-are-proper` | For compact $K\subseteq M^2$, its second projection $D$ is compact; $\Theta^{-1}(K)$ is closed in compact $G\times D$. | Continuous actions suffice; local compactness is retained but unused. Added the two missing dependencies recorded above. Lee Cor. 21.6, p. 544. Explicit precheck/rendercheck pass. |
| `lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure` (new local supplier) | Pulls back sheet charts and proves Hausdorffness, local Euclideanity, and second countability; uniqueness follows from the forced pullback atlas. | Connectedness is used to get path connectedness and a countable collection of sheets via finite transition codes. The least-code construction avoids countable choice. Etingof Prop. 3.5, p. 26, with the repository's second-countability convention supplied explicitly. Explicit precheck/rendercheck pass. |
| `thm-a-connected-covering-space-of-a-connected-lie-group-carries-a-unique-lifted-lie-group-structure` | Lifts multiplication and inversion by the fundamental-group criterion; uniqueness of lifts proves all group laws; covering charts prove smoothness and uniqueness. | The chosen point over $e$ is the identity and the only selection. Product-cover, homotopy-lifting, and abelianity edges from the manifest are retained, though the stronger based lifting criterion and subgroup closure do the logical work. Added direct loop-product, connected-product, path-connectedness, and local smooth-structure dependencies. Etingof Prop. 3.5, p. 26. Explicit precheck/rendercheck pass. |
| `thm-universal-covering-lie-group` | Coordinate balls give the universal-cover hypotheses; the preceding theorem lifts the Lie structure; based universal-cover uniqueness gives the unique smooth group isomorphism over $G$. | The uniqueness clause explicitly says “over $G$”; without it the promised uniqueness is false. Lee Thm. 21.32, p. 558; Etingof Prop. 3.5/Cor. 3.6, p. 26. Explicit precheck/rendercheck pass. |
| `cex-an-irrational-real-action-on-the-torus-that-is-free-but-not-proper` | The irrational flow is free; a pigeonhole/rotation argument proves every orbit dense; compactness of $\mathbb T^2$ and noncompactness of $\mathbb R$ disprove properness; a proper dense orbit disproves Hausdorffness of the quotient. | The proof treats the quotient topology, not only the failure of a smooth quotient. Added explicit compactness dependencies. Lee Ex. 21.3, p. 542. Explicit precheck/rendercheck pass. |
| `cex-a-proper-action-with-stabilizers-whose-quotient-is-not-a-principal-bundle` | The compact group $SO(2)$ acts properly on $\mathbb R^2$, but the origin has stabilizer $SO(2)$, contradicting the free-fibre clause of a principal bundle. | Uses the equivalent right action $x\cdot g=g^{-1}x$; the origin remains fixed. Added the generic principal-bundle definition dependency recorded above. Lee Ex. 21.2(e), pp. 541–542 and Cor. 21.6, p. 544. Explicit precheck/rendercheck pass. |
| `def-fundamental-vector-field-of-a-left-action` | Defines $X_M(x)=\frac d{dt}|_0\exp(-tX)\cdot x$ and verifies smooth dependence on $x$ from the smooth two-variable orbit curve. | Assumes the same $\mathrm{AC}_\omega$ as the exponential supplier. The minus sign is explicit; $X=0$, disconnected groups/manifolds, and noneffective actions are allowed. Lee (20.11)/Thm. 20.18, pp. 529–530, with sign translated. Rendercheck pass; bracket theorem awaits the missing adjoint supplier. |
| `fs-every-lie-subgroup-is-an-embedded-closed-subset` | The irrational winding is an injective immersion and homomorphism with proper dense image; an explicit unbounded integer sequence converges to the identity in the image. | Corrects the scaffold's insufficient “compact ambient/noncompact source” shortcut. Least approximation witnesses avoid countable choice. Uses the new A-page irrational-flow lemma, not the B counterexample. Lee Ex. 21.3, p. 542. Explicit precheck/rendercheck pass. |
| `fs-every-lie-subalgebra-integrates-to-a-closed-lie-subgroup` | The irrational line $\mathbb R(1,\alpha)\subset\operatorname{Lie}(\mathbb T^2)$ integrates to the connected dense winding. If any closed Lie subgroup had this algebra, its open identity component would have the same tangent algebra, so correspondence uniqueness would identify that closed component with the nonclosed winding. | Treats possibly disconnected candidate subgroups, closing a gap in the scaffold sketch. Propagates $\mathrm{AC}_\omega$ from the correspondence theorem and uses exact component-open/component-closed suppliers. Lee Thm. 19.26, pp. 506–507, and Ex. 21.3, p. 542. Explicit precheck/rendercheck pass. |
| `lem-no-small-subgroups-in-a-lie-group` | In identity coordinates, squaring has derivative $2I$; on a small ball it expands norms by at least $3/2$, so a nonidentity subgroup contained there would have iterated squares with unbounded coordinate norm. | Covers dimension zero. This direct ZF proof avoids the conditional exponential suppliers and adds the differential definition as recorded above. Lee Ch. 20 multiplication/exponential setting, especially Prop. 20.8, pp. 519–521. Explicit precheck/rendercheck pass. |
| `lem-local-slice-for-a-free-proper-action` | Constant rank and freeness make the orbit differential injective; a tangent complement and IFT give a local product; compactness of the transporter and a finite exclusion cover rule out every nonidentity return to a smaller slice. | Proves the stronger $G\times S\cong G\cdot S$ over an open saturated neighborhood. No sequence selection or global metric; no choice. Lee Prop. 21.5/Thm. 21.10, pp. 543–547. Explicit precheck/rendercheck pass. |
| `thm-free-proper-action-quotient-manifold` | The quotient is open; properness makes the orbit relation closed; slices give Hausdorff, second-countable product charts, the dimension formula, and submersivity; local sections prove uniqueness. | Includes a direct locally compact proof that the action-graph map is closed. No hidden sequential choice. Lee Prop. 21.4/Thm. 21.10, pp. 543–547. Explicit precheck/rendercheck pass. |
| `thm-a-free-proper-action-makes-m-to-m-mod-g-a-principal-g-bundle` | Converts the left action to $x\cdot g=g^{-1}\cdot x$ and turns each slice into the equivariant chart $(u,g)\mapsto g^{-1}s(u)$. | Checks the order in the right-action law and chart equivariance. Added the generic principal-bundle definition. Explicit precheck/rendercheck pass. |
| `prop-tangent-space-of-a-free-proper-quotient` | In $G\times S$ coordinates, $q$ is projection to $S$; its kernel is the orbit tangent, and the linear quotient universal property gives the canonical isomorphism. | Zero-dimensional groups included; no choice. Replaced the provisional infinitesimal-orbit dependency by the checked slice lemma. Explicit precheck/rendercheck pass. |
| `prop-equivariant-maps-descend-to-smooth-maps-on-free-proper-quotients` | Equivariance makes $q_Nf$ constant on $q_M$-fibres; quotient universality gives the factor; local sections of the submersion $q_M$ prove smoothness. | Uniqueness is set-theoretic/continuous before smoothness. Added constant-rank local-section supplier. Explicit precheck/rendercheck pass. |
| `fs-a-free-action-always-has-a-manifold-orbit-space` | Uses the local irrational-flow lemma: the action is free but its dense proper orbits give a non-Hausdorff quotient, hence no manifold quotient under the library convention. | Isolates properness as the missing hypothesis without an A-to-B edge. Added the local lemma and manifold-convention dependencies recorded above. Lee Ex. 21.3, p. 542, and Thm. 21.10, pp. 544–547. Explicit precheck/rendercheck pass. |
| `ex-the-free-proper-integer-translation-action-on-the-line` | The discrete Lie group $\mathbb Z$ acts freely; a compact set in the action graph permits only finitely many integer differences, proving properness; $x\mapsto e^{2\pi i x}$ has exactly the orbits as fibres and local smooth argument branches, so $\mathbb R/\mathbb Z\cong S^1$; the free-proper theorem supplies the principal bundle. | Checks the left-action/right-principal-action conversion $x\cdot n=x-n$. The compact inverse-image proof is topological rather than sequential and uses no choice. Lee p. 557 and Etingof Prop. 3.5/Ex. 3.7, pp. 26–27. Explicit precheck/rendercheck pass. |

## Final handoff

- The A page contains all 52 manifest IDs plus two necessary local lemmas. Of
  those 54 files, 30 are now present and fully authored (28 manifest items and
  the two local lemmas). The B page contains its exact 12 manifest IDs, of
  which three are fully authored. Thus 31 of the 64 promised manifest items
  are complete in this helper scope.
- No manifest-missing item has all its declared prerequisites present. A
  direct manifest/file audit shows that all 33 unfinished promised items are
  transitively blocked by the two root suppliers above. No incomplete strategy
  has been written as a proof.
- The A-to-B dependency cycle found during checking has been removed. The B
  page is again a leaf; the local irrational-flow lemma on A supplies both A
  refutations and the B counterexample.
- The two page files and every completed item were checked by explicit path.
  The final command outputs are recorded below after the last validation run.
- Next item: as soon as
  `thm-the-differential-of-adjoint-is-ad` is present and its complete supplier
  chain checks out, author
  `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup`. In
  parallel, once `thm-baker-campbell-hausdorff` is sound, author
  `thm-cartans-closed-subgroup-theorem` and then proceed in the manifest order.

## Final validation

- Explicit-path precheck over all 33 present pair-owned item files examined
  the 23 proof-bearing files and returned `23 checked, 0 failing — all clean`.
- Explicit-path rendercheck over those 33 item files, the two page files, and
  this helper report returned `OK — 36 file(s)` with real KaTeX and renderer
  YAML parsing.
- A repository dependency check filtered to this pair now reports no
  `b-leaf-content` violation and no page cycle. Its remaining pair diagnostics
  are exactly `page-item-missing` for the 33 deliberately unwritten blocked
  manifest items listed transitively in the blocker audit above.
- No shared manifest, coverage, dependency input, proof-contract JSON,
  decision, plan, prose amendment, group report, published item, or published
  defect ledger was edited, and no lead-only record/update command was run.

## Continuation checkpoints — 2026-09-13

### `prop-an-ideal-integrates-to-a-connected-immersed-normal-subgroup`

- Claim and conventions: under $\mathrm{AC}_\omega$, the connected integral
  subgroup of an ideal is normal in $G^0$; full $\operatorname{Ad}(G)$-stability
  gives normality in $G$. Lie subgroups retain their intrinsic immersed
  structures, and no closedness is claimed.
- Sources checked: Lee, Theorem 20.28 and complete proof, printed pp. 535–536;
  Knapp, Proposition 1.91, printed pp. 80–81. The complete local suppliers
  `thm-the-differential-of-adjoint-is-ad` and
  `prop-adjoint-exponential-identity` were reread and their signs agree.
- Dependencies and contract delta: retained the four manifest dependencies;
  added `def-countable-choice`,
  `prop-adjoint-is-a-smooth-lie-group-representation`,
  `prop-adjoint-exponential-identity`,
  `cor-the-exponential-map-is-a-local-diffeomorphism-at-zero`, and
  `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`.
  These supply the actual invariant-subspace ODE and the proof that the
  adjoint stabilizer contains an identity neighborhood.
- Proof and cases: an ideal is invariant under $e^{t\operatorname{ad}X}$ by
  uniqueness of the restricted linear ODE; hence it is invariant under
  $\operatorname{Ad}_{\exp X}$. Its adjoint stabilizer is an open-and-closed
  subgroup containing $G^0$, and correspondence uniqueness identifies each
  conjugate integral subgroup. Zero/full ideals and disconnected $G$ are
  explicit. Open obligations: validation after the first dependency batch.
  Next item: `thm-cartans-closed-subgroup-theorem`.

### `thm-cartans-closed-subgroup-theorem`

- Claim and conventions: under $\mathrm{AC}_\omega$, every topologically
  closed subgroup has a unique embedded Lie-subgroup structure. This is an
  assumption correction to the unconditional scaffold: both current Batch-7
  exponential/BCH suppliers assume countable choice, and the Lee transverse
  contradiction also selects a countable witness sequence.
- Sources checked: Lee, Theorem 20.12 and complete proof, printed pp. 523–525;
  the complete local BCH theorem, its Dynkin definition, and its convergence
  lemma; Knapp, Chapter I §10, printed p. 77. The proof uses the BCH linear
  term to establish addition in the logarithmic tangent set and Lee's complete
  transverse-limit argument to obtain the slice equality.
- Dependencies and contract delta: added `def-countable-choice`, the BCH
  definition/convergence lemma, exponential scaling, the manifold IFT, the
  finite-dimensional complement lemma, ZF Bolzano–Weierstrass, and the
  subgroup-tangent proposition. The manifest's
  `lem-no-small-subgroups-in-a-lie-group` is retained as an unused alternative
  local route; it is not presented as proving the slice equality by itself.
- Proof and cases: constructs the logarithmic linear space, proves
  $H\cap\exp U=\exp(\mathfrak h\cap U)$ by normalized transverse elements,
  translates one slice chart, checks restricted group operations, and proves
  uniqueness from the common embedded/subspace charts. Trivial/full,
  zero-dimensional, and disconnected cases are explicit. Open obligations:
  validation with the current pair batch. Next item:
  `cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups`.

### `cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups`

- Claim/source/dependencies: under $\mathrm{AC}_\omega$, subspace-discrete is
  equivalent to closed embedded zero-dimensional; Lee Proposition 21.28,
  printed p. 556. Added `def-countable-choice` to propagate Cartan's current
  contract; retained the no-small-subgroups manifest edge as unused.
- Proof/checks: a small symmetric neighborhood shows each translate contains
  at most one subgroup point, so any closure point is that point; Cartan and
  the discrete embedded topology give dimension zero. Trivial/discrete
  ambient cases are covered. Validation pending with this batch. Next item:
  `thm-continuous-homomorphisms-between-lie-groups-are-smooth`.

### `thm-continuous-homomorphisms-between-lie-groups-are-smooth`

- Claim/source: under $\mathrm{AC}_\omega$, continuous homomorphisms are
  smooth; Knapp Chapter I §10, printed p. 77, and Lee Theorem 20.12,
  pp. 523–525.
- Contract/proof: added `def-countable-choice` and
  `prop-exponential-map-is-natural-for-lie-group-homomorphisms`. The graph is
  a closed embedded subgroup; its first projection is a topological
  homeomorphism between equal-dimensional manifolds. Exponential naturality,
  not homeomorphism alone, proves the identity differential injective; IFT
  then makes the inverse smooth. Zero-dimensional/disconnected cases are
  covered. Validation pending. Next item: kernel theorem.

### `thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup`

- Claim/source: under $\mathrm{AC}_\omega$, the kernel is closed, embedded,
  normal, and has algebra $\ker dF_e$; Lee Theorem 21.27, printed p. 556;
  Etingof Corollary 9.5, pp. 53–54.
- Contract/proof: added `def-countable-choice` and
  `thm-constant-rank-theorem-for-manifolds`. The manifest regular-level
  proposition is retained but cannot handle a non-surjective homomorphism;
  the constant-rank slice computes the tangent kernel correctly. Rank-zero,
  full-rank, trivial-kernel, and disconnected cases are explicit. Validation
  pending. Next item: image theorem.

### `thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup`

- Claim/source: under $\mathrm{AC}_\omega$, the image has the unique intrinsic
  immersed structure making the corestriction a surjective submersion and has
  algebra $\operatorname{im}dF_e$; Lee Theorem 21.27, p. 556; Etingof
  Proposition 4.7/Corollary 9.5, pp. 29 and 53–54.
- Contract/proof: added `def-countable-choice`, quotient-topology/universal-
  property, and open-quotient dependencies. The proof constructs $G/\ker F$
  directly: closed relation gives Hausdorffness, the open quotient gives
  second countability, constant-rank slices give the atlas/submersion, and
  local sections give smooth group operations and uniqueness. It expressly
  does not use the later homogeneous quotient theorem. Validation pending.
  Next item: first-isomorphism factorization.

### `prop-first-isomorphism-factorization-for-lie-group-homomorphisms`

- Claim/source/dependencies: under $\mathrm{AC}_\omega$, the canonical
  corestriction/inclusion factorization has a surjective-submersion first map,
  and fibres are kernel cosets; Lee Theorem 21.27, p. 556; Etingof Proposition
  4.7/Corollary 9.5, pp. 29 and 53–54. Added only
  `def-countable-choice` to propagate its suppliers.
- Proof/cases: the factorization is the image theorem's universal structure;
  a direct group calculation identifies fibres. Trivial kernel/image,
  nonclosed image, and disconnected groups are covered. Validation pending.
  Next item: `thm-quotient-manifold-by-a-closed-lie-subgroup`.

### `thm-quotient-manifold-by-a-closed-lie-subgroup`

- Claim/source: under $\mathrm{AC}_\omega$, a closed subgroup gives the unique
  quotient smooth structure for which $q$ is a surjective submersion and the
  left action is smooth, of dimension $\dim G-\dim H$; Lee Theorem 21.17 and
  complete proof, printed pp. 551–552; Etingof Theorem 4.1, printed p. 28.
- Contract/proof: added `def-countable-choice` and the smooth exponential
  supplier. The manifest's choice-free projection lemma supplies the finite
  complement. The proof checks local-product injectivity, openness,
  Hausdorffness from the closed orbit relation, second countability, smooth
  overlaps/action, submersivity, and uniqueness by local sections. Trivial,
  full, disconnected, and zero-dimensional cases are covered. Validation
  pending. Next item: complement independence.

### `lem-the-smooth-structure-on-g-mod-h-is-independent-of-the-local-complement`

- Claim/source/dependencies: any two local complements give compatible quotient
  atlases; Lee Theorem 21.17, pp. 551–552. Added `def-countable-choice` to
  propagate the quotient theorem; retained the manifest IFT edge.
- Proof/cases: a transition is the first component of one local-product inverse
  composed with the other exponential slice; reversing the complements gives
  its smooth inverse. Translated, zero-dimensional, full, and trivial subgroup
  cases are explicit. Validation pending. Next item: quotient tangent space.

### `prop-tangent-space-of-a-homogeneous-quotient`

- Claim/source: $dq_e$ induces the canonical linear isomorphism
  $\mathfrak g/\mathfrak h\cong T_{eH}(G/H)$ and equivariance transports it;
  Etingof Theorem 4.1, p. 28.
- Contract/proof: added `def-countable-choice`. Since the quotient map is a
  submersion, the regular-fibre proposition legitimately gives
  $\ker dq_e=T_eH$; quotient-module universality and translation finish the
  proof. Boundary subgroup cases are explicit. Validation pending. Next item:
  isotropy action.

### `prop-isotropy-action-on-g-mod-h-is-induced-by-adjoint-mod-h`

- Claim/source: the isotropy differential of $h\in H$ is the action of
  $\operatorname{Ad}_h$ modulo $\mathfrak h$; Etingof §§4.1 and 9.1, printed
  pp. 28 and 53.
- Contract/proof: added `def-countable-choice`. Conjugation by $h$ preserves
  $H$, and differentiating $qC_h=L_hq$ gives the exact intertwining identity.
  No normality is assumed; the identity element is checked. Validation
  pending. Next item: normal quotient Lie group.

### `thm-quotient-by-a-closed-normal-subgroup-is-a-lie-group`

- Claim/source: the closed normal quotient has the unique Lie-group structure
  with quotient algebra $\mathfrak g/\mathfrak n$; Lee Theorem 21.26 and
  complete proof, pp. 555–556; Etingof Proposition 4.7, p. 29.
- Contract/proof: added `def-countable-choice`, `def-quotient-lie-algebra`,
  the differential-homomorphism theorem, and
  `thm-the-differential-of-adjoint-is-ad`. Normality supplies well-defined group
  laws and adjoint invariance of $\mathfrak n$; quotient local sections prove
  smoothness, and $dq_e$ gives the bracket-preserving isomorphism. Normality's
  two exact uses and $N=G,\{e\}$ are explicit. Validation pending. Next item:
  principal-bundle definition.

### `def-principal-h-bundle-g-to-g-mod-h`

- Claim/conventions: under $\mathrm{AC}_\omega$, fixes the candidate
  $q:G\to G/H$, right action $g\cdot h=gh$, and product action
  $(x,h)\cdot k=(x,hk)$; Lee Theorem 21.17, pp. 551–552.
- Contract delta/checks: added `def-countable-choice` and the existing generic
  principal-bundle definition. Freeness and the fibre/orbit equality are
  checked algebraically, but existence of principal charts is honestly
  deferred to the next theorem. Render validation pending. Next item: the
  principal-bundle theorem.

### `thm-g-to-g-mod-h-is-a-smooth-principal-h-bundle`

- Claim/source: local quotient sections yield smooth equivariant
  $U\times H$ trivializations; Lee Theorem 21.17, pp. 551–552; Etingof Theorem
  4.1, p. 28.
- Contract/proof: added `def-countable-choice`. The map
  $(x,h)\mapsto s(x)h$ has the explicit smooth inverse
  $g\mapsto(q(g),s(q(g))^{-1}g)$, whose $H$-smoothness is verified in the local
  product chart; translates cover all cosets. Full/trivial subgroup cases and
  the right-action order are explicit. Validation pending. Next item:
  associated-bundle definition.

### `def-associated-bundle-to-a-principal-bundle-and-representation`

- Claim/conventions: for a smooth right principal bundle and smooth left
  representation, defines $(p,v)h=(ph,\rho(h)^{-1}v)$ and hence
  $[ph,v]=[p,\rho(h)v]$, with quotient topology and projection. Lee Chapter 10
  vector/fibre-bundle conventions, especially pp. 249–250 and 267–268.
- Contract delta/checks: added the generic principal-bundle definition,
  quotient topology, and quotient universality. The manifest homogeneous
  principal theorem is retained only as an example; the definition is general
  and choice-free. Projection well-definedness and the inverse convention are
  explicit. Render validation pending. Next item: associated vector bundle.

### `thm-associated-vector-bundle-is-well-defined`

- Claim/source: the quotient has the unique smooth rank-$\dim V$ vector-bundle
  structure, with $i$-to-$j$ transition $\rho(g_{ji})$ when
  $s_i=s_jg_{ji}$; Lee Vector Bundle Chart Lemma 10.6, pp. 252–253.
- Contract/proof: added the vector-chart and smooth-fibre definitions. The
  manifest cocycle theorem requires a supplied countable cover, so it is
  retained as a cross-check rather than used to hide a refinement choice. A
  direct open-quotient proof establishes the actual quotient topology,
  Hausdorffness, second countability, representative independence, smooth
  linear transitions, and uniqueness. Empty base, zero fibre, trivial group,
  and ineffective representation are covered. Validation pending. Next item:
  `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism`.

### `thm-fundamental-vector-fields-form-a-lie-algebra-homomorphism`

- Claim/convention/source: with $X_M=\frac d{dt}|_0\exp(-tX)\cdot x$,
  $[X_M,Y_M]=[X,Y]_M$; Lee Theorem 20.18 and complete proof, pp. 529–530,
  and Etingof Proposition 9.1, p. 53, with both source signs translated.
- Contract/proof: added `def-countable-choice`,
  `prop-right-invariant-fields-carry-the-opposite-lie-bracket`, and
  `prop-related-vector-fields-have-related-lie-brackets`. The plus generator is
  orbit-map-related to the ordinary right-invariant field; its opposite bracket
  and the two field minus signs give the required positive sign. The manifest
  adjoint theorem remains an independently checked alternative. Ineffective,
  nonfree, zero-field, and zero-dimensional cases are covered. Validation
  pending. Next item: stabilizers.

### `thm-stabilizers-are-closed-embedded-lie-subgroups`

- Claim/source: under $\mathrm{AC}_\omega$, stabilizers on Hausdorff manifolds
  are closed embedded; Lee pp. 541 and 551; Etingof Definition 4.5 and
  Proposition 4.7, p. 29.
- Contract/proof: added `def-countable-choice`. The stabilizer is the inverse
  image of a closed singleton under the smooth orbit map, then Cartan applies.
  Trivial/free actions and absence of properness/transitivity hypotheses are
  explicit. Validation pending. Next item: infinitesimal orbit kernel.

### `prop-kernel-of-the-infinitesimal-orbit-map-at-a-point-is-the-stabilizer-lie-algebra`

- Claim/source: the pointwise map $X\mapsto X_M(x)$ has kernel
  $\operatorname{Lie}(G_x)$ and image the immersed-orbit tangent; Etingof
  Proposition 9.1, p. 53; Lee Equivariant Rank Theorem 7.25, pp. 165–166.
- Contract/proof: added `def-countable-choice` and the orbit-map definition.
  Equivariance proves constant rank, the identity differential is
  $-X_M(x)$, and the constant-rank fibre/image plaques compute kernel and image.
  The distinction from the kernel of the global field assignment is recorded.
  Validation pending. Next item: orbit homogeneous space.

### `thm-every-orbit-is-an-injectively-immersed-homogeneous-space`

- Claim/source: $G/G_x$ maps equivariantly and injectively immersively onto
  the orbit, giving its intrinsic homogeneous structure; Etingof Proposition
  4.12, pp. 30–31; Lee Theorems 7.25 and 21.18, pp. 165–166 and 552–553.
- Contract/proof: added `def-countable-choice` and quotient universality.
  Algebra identifies orbit fibres with right stabilizer cosets, local quotient
  sections prove smoothness, and equality of the two differential kernels
  proves immersion. Dense/nonclosed orbits are explicitly not called embedded.
  Validation pending. Next item: transitive action corollary.

### `cor-transitive-smooth-actions-identify-m-with-g-mod-h`

- Claim/source: a transitive action induces a $G$-equivariant diffeomorphism
  $G/G_x\cong M$; Lee Theorem 21.18, pp. 552–553, and Etingof Proposition 4.12,
  pp. 30–31.
- Contract/proof: added `def-countable-choice`, Morse–Sard, the dense-complement
  consequence for null sets, and the manifold IFT. This repairs the scaffold's
  unsupported dimension assertion: if the injective immersion had smaller
  source dimension, surjectivity would make all of positive-dimensional $M$
  critical values. Equal dimensions then give a bijective local
  diffeomorphism. The zero-dimensional case is separate. Validation pending.
  Next item: `fs-the-image-of-a-lie-group-homomorphism-is-always-embedded`.

### `fs-the-image-of-a-lie-group-homomorphism-is-always-embedded`

- Claim/source: refutes universal embeddedness with the irrational winding;
  Lee Example 21.3, p. 542; Etingof Examples 3.14(2) and 4.6(1), pp. 26 and
  29.
- Contract/proof: added the existing irrational-flow lemma and the intrinsic
  Lie-subgroup definition. A least-witness sequence $q_j\to\infty$ has images
  converging to the torus identity, contradicting continuity of the inverse
  required by embeddedness. This corrects the insufficient compact/noncompact
  shortcut and uses no choice. The conditional image theorem is retained to
  identify the canonical structure under $\mathrm{AC}_\omega$. Validation
  pending. Next item: false quotient-group claim.

### `fs-g-mod-h-is-a-quotient-lie-group-for-every-closed-subgroup-h`

- Claim/source: $S_3/\{e,(12)\}$ is a smooth zero-dimensional homogeneous
  quotient but cannot make its coset projection a homomorphism; Lee Theorem
  21.26, pp. 555–556; Etingof Theorem 4.1 and Proposition 4.7, pp. 28–29.
- Contract/proof: added `def-countable-choice`. The subgroup is closed in the
  finite discrete Lie group but conjugation by $(123)$ sends $(12)$ outside it;
  if the quotient projection were a homomorphism this nonnormal subgroup would
  be its kernel. The normal quotient theorem records the exact missing
  hypothesis. Validation pending. Next item: false plus-sign convention.

### `fs-the-exp-tx-fundamental-field-convention-is-a-bracket-homomorphism-for-left-actions`

- Claim/source: the plus-sign convention is generally an antihomomorphism, not
  a homomorphism; Lee Theorem 20.18, pp. 529–530; Etingof Proposition 9.1,
  p. 53.
- Contract/proof: added `def-countable-choice` and the opposite-bracket theorem
  for right-invariant fields. For left translation of $GL_2(\mathbb R)$ the
  plus fields are right-invariant; $E_{12},E_{21}$ have nonzero commutator, so
  the two signs differ. Abelian/commutator-annihilating boundary cases explain
  why a nonabelian witness is required. Validation pending. Next item:
  `ex-an-irrational-line-as-a-dense-immersed-lie-subgroup-of-a-torus`.

### `ex-an-irrational-line-as-a-dense-immersed-lie-subgroup-of-a-torus`

- Claim/source: under $\mathrm{AC}_\omega$, the irrational winding is a dense,
  proper, nonclosed, nonembedded one-dimensional immersed image; Lee Examples
  7.19 and 21.3, pp. 159 and 542; Etingof Examples 3.14(2) and 4.6(1), pp. 26
  and 29.
- Contract/proof: added `def-countable-choice`, the existing irrational-flow
  lemma, and the intrinsic/embedded subgroup definition. Irrationality proves
  a displayed point is absent; a least-approximation integer sequence proves
  nonembeddedness without countable choice. The general image theorem supplies
  the canonical intrinsic structure. Validation pending. Next item: special
  linear group.

### `ex-special-linear-as-a-closed-lie-subgroup-of-general-linear`

- Claim/source: for $\mathbb F=\mathbb R,\mathbb C$ and $n\ge1$,
  $SL_n(\mathbb F)$ is closed embedded normal with Lie algebra the trace-zero
  matrices; Lee Example 7.18(c),(e), pp. 158–159, and Theorem 21.27, p. 556;
  Etingof matrix examples and Corollary 9.5, pp. 25–26 and 53–54.
- Contract/proof: added countable choice, determinant/trace definitions, and
  the Lie-group definition. The determinant is a smooth homomorphism;
  the Leibniz expansion proves $d\det_I=\operatorname{tr}$ and its
  surjectivity, so both kernel and regular-level suppliers apply. The complex
  case is interpreted as a real Lie group, and $n=1$ is explicit. Validation
  pending. Next item: determinant kernel and image.

### `ex-the-kernel-and-image-of-the-determinant-homomorphism`

- Claim/source: real determinant has kernel $SL_n$, full image
  $\mathbb R^\times$, and positive image $\mathbb R_{>0}$ on $GL_n^+$; Lee
  Examples 7.3(b), 7.18(c), pp. 153 and 158, and Theorem 21.27, p. 556.
- Contract/proof: added `def-countable-choice` and the determinant definition.
  Diagonal matrices realize every target scalar; the first-isomorphism theorem
  identifies fibres and intrinsic quotients. The $n=1$ and disconnected-image
  cases are explicit. Validation pending. Next item: spheres.

### `ex-spheres-as-so-n-plus-one-mod-so-n`

- Claim/source: for $n\ge1$, $S^n\cong SO(n+1)/SO(n)$; Lee sphere example,
  p. 553; Etingof Example 4.17(1), p. 31.
- Contract/proof: added `def-countable-choice`. Oriented orthonormal basis
  extension proves transitivity and the fixed-last-vector block calculation
  gives the exact stabilizer. The $n=1$ boundary is explicit. Validation
  pending. Next item: projective spaces.

### `ex-real-and-complex-projective-spaces-as-homogeneous-spaces`

- Claim/source: $\mathbb{RP}^n$ and $\mathbb{CP}^n$ have the displayed
  orthogonal/unitary homogeneous quotient descriptions; Lee p. 553 and Problem
  21-10, p. 561; Etingof Section 4, pp. 29–31.
- Contract/proof: added `def-countable-choice`. Adapted orthonormal bases prove
  transitivity; block preservation gives
  $S(O(1)\times O(n))$ and $U(1)\times U(n)$, with the real determinant-one
  condition stated explicitly. Standard projective charts verify smoothness.
  The point case $n=0$ is recorded. Validation pending. Next item:
  Grassmannians and flags.

### `ex-grassmannians-and-flag-manifolds-as-homogeneous-spaces`

- Claim/source: real/complex Grassmannians and flags are orthogonal/unitary
  quotients by the corresponding block subgroups; Lee Examples 21.21–21.22,
  pp. 554–555; Etingof flag discussion, pp. 31–32.
- Contract/proof: added `def-countable-choice`. Orthonormal bases adapted to a
  subspace or every stage of a flag prove transitivity and identify the exact
  block stabilizers. $k=0,n$ and positive flag-block conventions are explicit.
  Validation pending. Next item: the $SU(2)$ cover.

### `ex-su-two-to-so-three-as-a-covering-homomorphism`

- Claim/source: quaternion conjugation is a surjective two-sheeted covering
  $SU(2)\to SO(3)$ with kernel $\{\pm1\}$; Lee Problem 21-21, p. 562;
  Etingof Exercise 3.9, pp. 26–27, and Proposition 6.7, p. 40.
- Contract/proof: added `def-countable-choice` and the manifold IFT. The proof
  checks the unit-quaternion identification, orthogonality/orientation,
  homomorphism, exact kernel, axis-angle surjectivity via Rodrigues' formula,
  and $d\pi_1(A)(x)=2A\times x$. A local inverse plus the two kernel elements
  gives explicit evenly covered neighborhoods, repairing the scaffold's
  compactness shortcut. Angle $\pi$ is covered. Validation pending. Next item:
  the Möbius line bundle.

### `ex-the-mobius-line-bundle-as-an-associated-bundle`

- Claim/source: the sign representation associated to $z\mapsto z^2$ produces
  the Möbius bundle; Lee Example 10.3, pp. 251–252, and Problem 21-9,
  pp. 560–561.
- Contract/proof: the manifest dependency suffices. Local square roots prove
  the double cover is principal; the quotient relation is
  $(z,t)\sim(-z,-t)$. Two explicit square-root sections give transition $+1$
  on one overlap component and $-1$ on the other, and the mapping-torus formula
  identifies the half-twisted strip. No choice is used. Validation pending.
  Next item: tangent bundle of $G/H$.

### `ex-the-tangent-bundle-of-g-mod-h-as-an-associated-bundle`

- Claim/source: under $\mathrm{AC}_\omega$,
  $T(G/H)\cong G\times_H(\mathfrak g/\mathfrak h)$ for the adjoint-modulo-
  $\mathfrak h$ representation; Etingof Sections 4 and 9, pp. 28–31 and 53;
  Lee Theorems 21.17–21.18, pp. 551–553.
- Contract/proof: added `def-countable-choice` and the explicit homogeneous
  principal-bundle theorem. The map sends $[g,v]$ to
  $dL_g\overline{dq_e}(v)$; the isotropy identity proves representative
  independence, and principal charts give a smooth fibrewise-linear inverse.
  The $H=G$, $H=\{e\}$, and nonnormal cases are explicit. Validation pending.
  Next action: validate all 33 continuation files and reconcile any live
  concurrent edits before final handoff.

## Continuation final validation checkpoint

- Scope completed: all 33 dispatch-listed item files are present, remain
  `status: draft`, and are the only item files written in this continuation.
  The first seven files were normalized to record
  `pipeline_run: phase-2-next-21`; no shared manifest, page, decision,
  dependency input, proof-contract JSON, group report, published file, or
  defect ledger was edited.
- Supplier verification: the complete proofs in
  `thm-the-differential-of-adjoint-is-ad` and
  `thm-baker-campbell-hausdorff` were reread before use, together with the BCH
  definition/convergence and exponential/adjoint-exponential dependencies.
  Their bracket sign and local-convergence hypotheses agree with the uses in
  the ideal, Cartan, normal-quotient, and fundamental-field items. No missing
  Batch-7 supplier remains in the proof paths used by these 33 items.
- Mathematical contract correction: the Cartan theorem and every actual
  downstream consumer explicitly assume `def-countable-choice`. This is the
  honest delta from the unconditional scaffold: the present exponential/BCH
  chain already carries that hypothesis, and the transverse proof selects a
  countable witness sequence. The group lead must retain this dependency when
  integrating manifests and proof contracts.
- Final audit repairs: corrected the two missing backslashes before `\qquad`
  in `def-principal-h-bundle-g-to-g-mod-h`; in
  `ex-su-two-to-so-three-as-a-covering-homomorphism`, made the tangent-space
  calculation explicit by differentiating $R^TR=I$ and using the
  three-dimensional skew-symmetric space before applying the inverse function
  theorem. The latter item's actual contract includes
  `cor-discrete-subgroups-of-lie-groups-are-closed-embedded-zero-dimensional-subgroups`
  as [F5], as well as `def-countable-choice`, Cartan, the regular-level theorem,
  the manifold inverse function theorem, quaternion, determinant/transpose,
  trigonometric, and covering-homomorphism interfaces.
- Explicit-path precheck result after those repairs: 31 proof-bearing files
  checked, 31 passed, 0 failed. The two definition files were correctly
  skipped by precheck.
- Explicit-path rendercheck result after those repairs: all 33 files passed
  using the real KaTeX renderer and renderer YAML parser; no bad wikilink,
  delimiter, multiline display, math parse, or frontmatter parse was reported.
- Boundary/choice reconciliation: the individual checkpoints above record
  the zero/full subgroup, disconnected, nonnormal, nonembedded, zero-fibre,
  point-space, angle-$\pi$, and sign-convention cases. No additional
  mathematical blocker or published-item defect was found in this scoped
  audit. Remaining work is owner integration and independent review, not an
  open proof obligation. Next item: none in helper scope.
