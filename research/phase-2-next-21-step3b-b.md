# Step 3b group b authoring checkpoint

- Run: `phase-2-next-21`
- Dispatch: `step3b-b-92488f9d9edc8072`
- Role: `alpha-high`
- Owned batches: 5, 6, 9
- Owned page pairs: `bocksteins-steenrod-squares-and-cohomology-operations`, `local-coefficients-twisted-homology-and-duality`, `spectra-and-stable-homotopy-groups`, `obstruction-theory-postnikov-towers-and-classifying-spaces`, and `brauers-second-main-theorem` (including every companion B page)

## Controlling audit

Read in full: `CLAUDE.md`, `README.md`, `SCHEMA.md`, the controlling AT-9,
AT-21, AT-23, AT-13, and RG-17 design sections, their binding amendments,
`research/plan-spec.json`, all three owned page manifests, coverage files, batch
notes, local dependency inputs, the current unified frontier ledger, Step 3a
reviews and decisions, and the owner repair for stable weak equivalence.
`research/phase-2-next-21-owner-authoring-direction.md` was subsequently added
and read in full. Its current runtime handoff assigns the local-
coefficient pair to host helper b-1, both Batch-6 pairs to host helper b-2,
and the Brauer pair to host helper b-3; those writers retain exclusive item
and page ownership until their final handoffs. The lead retains the shared
manifests, coverage, dependency inputs, proof contracts, decisions, and this
report. The earlier sentence saying that no owner direction existed records
only the initial inspection and is superseded by this paragraph.

The worktree already contains extensive unrelated edits and untracked run
artifacts. They are treated as user/other-worker state and will not be modified.

## Repair workload retained

- Batch 5: repair missing provenance on the three owner-added cyclic-power
  suppliers at their item positions; repair the invalid `ai-original`
  provenance and add permitted counterexample generation metadata to
  `cex-the-top-square-formula-does-not-define-all-lower-squares`.
- Batch 6: preserve the owner's all-stable-groups definition of stable weak
  equivalence. At `prop-loop-space-of-bg-recovers-g-up-to-homotopy`, declare
  `def-axiom-of-choice` and isolate its use to the Whitehead-upgrade clause.
- Batch 9: propagate AC on the second half of the A page and the B page as the
  scaffold promises; do not replace the determinant proof of the integral
  Nakayama step by the defective published supplier.

## Published concerns for owner reconciliation

Confirmed, not edited here:

1. `thm-nakayama-lemma` invokes and states AC but omits
   `def-axiom-of-choice` from its dependencies. Confidence: high. Required
   supplier: `def-axiom-of-choice`. Repair: add the dependency and propagate it
   to consumers that use the AC-bearing branch.
2. `thm-krull-schmidt-for-finite-dimensional-kg-modules` is unconditional but
   its proof cites `thm-composition-series-iff-noetherian-and-artinian`, whose
   current proof declares DC/AC. Confidence: high as a dependency defect (the
   theorem itself is valid choice-free by finite-dimensional chain arguments).
   Repair: replace that citation with the finite-dimensional ACC/DCC proof, or
   declare and propagate the assumption.

Potential downstream impact, not independently established as false: the
published items `thm-defect-groups-are-maximal-brauer-support`,
`def-induced-block-from-a-subgroup`,
`lem-block-induction-exists-under-centralizer-containment`,
`lem-relative-projectivity-mackey-intersections-for-finite-modules`,
`thm-higman-criterion-for-relative-projectivity`,
`lem-block-centre-locality-and-trace-ideal-sums`,
`thm-brauer-first-main-theorem`, and
`ex-blocks-and-defect-groups-of-s3` reach an AC-stated supplier. Confidence:
medium pending serial dependency reconciliation. Strategy: audit whether each
proof actually uses the affected branch; add and propagate AC exactly where it
does. These concerns do not block a sound local supplier.

## Item checkpoints

### 1. `def-stable-natural-cohomology-operation` — complete

- Exact claim/conventions: a type-$n$, degree-$r$ operation is a natural
  transformation on reduced cohomology of based CW complexes; stability is the
  displayed degreewise suspension equation. Additivity is deliberately not a
  defining condition.
- Source read: May, *A Concise Course in Algebraic Topology*, Chapter 22
  section 5, printed pages 184--186 (PDF pages 192--194), including the complete
  definition and surrounding Yoneda argument.
- Dependencies examined: `def-natural-transformation`,
  `def-functor-and-contravariant-functor`, and
  `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`.
- Choice/boundaries: choice-free; reduced degree zero and the one-point based
  space are explicit; no iff is asserted.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: `accept`, confidence 1, recorded with the three examined
  dependency IDs.
- Open gap: none.

Current item: `def-bockstein-connecting-operation`. Next action: reread the
general coefficient-sequence construction and the exact AC expenditure, author
the definition and contract, run explicit checks, and only then record its
decision.

### 2. `def-bockstein-connecting-operation` — complete

- Exact claim/conventions: for a short exact coefficient sequence
  $0\to A\xrightarrow{i}B\xrightarrow{q}C\to0$, lift a $C$-cocycle $c$ to
  $b$, solve uniquely $i_*a=\delta b$, and set $\beta[c]=[a]$. The integral
  and mod-$m$ sequences are named separately, with $m\geq1$.
- Source read: Hatcher, *Algebraic Topology*, section 3.E, printed pages
  303--306 (PDF pages 312--315), including the coefficient long exact
  sequence, both cyclic Bocksteins, their comparison, and the full cochain
  derivation calculation on page 304.
- Dependencies examined: `def-singular-cochain-complex-with-coefficients`,
  `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`, and
  `def-axiom-of-choice`.
- Choice/boundaries: AC is spent exactly on selecting a lift in
  $q^{-1}(c(s))$ for every singular simplex; canonical least-residue lifts in
  the cyclic cases are choice-free. Empty, negative-degree, and $m=1$ cases
  are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: `accept`, confidence 1, recorded with all three dependency IDs.
- Open gap: none.

Current item:
`lem-the-bockstein-is-independent-of-lift-and-cocycle-representative`. Next
action: reread the completed Bockstein definition and prove both independence
claims by explicit cochain differences before checking and recording.

### 3. `lem-the-bockstein-is-independent-of-lift-and-cocycle-representative` — content complete

- Exact claim/conventions: under AC and the short exact coefficient sequence,
  the pulled-back cochain is a cocycle; replacing either the $B$-lift or the
  $C$-cocycle changes it by an $A$-coboundary.
- Source reread: Hatcher section 3.E, printed page 303, together with the
  complete authored Bockstein definition.
- Dependencies examined: `def-bockstein-connecting-operation` and, after local
  repair, direct `def-axiom-of-choice`.
- Repair: the preserved claim's proof lifts the cochain $u$ when
  $c'=c+\delta u$, so its manifest and item now declare AC directly. This does
  not alter the claim or inventory.
- Proof: step 1.1 verifies cocyclicity; step 2.1 proves lift independence;
  step 3.1 lifts $u$ and proves representative independence; step 4.1 combines
  them.
- Choice/boundaries: AC is used only for the lift of $u$ (the original lift is
  part of the Bockstein construction); empty, zero, degree-zero, and degenerate
  coefficient cases are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: the required `repaired`, confidence-1 receipt was attempted but
  the tool refused it because concurrent groups currently have stale Step 3a
  scope hashes for `martingale-inequalities-and-convergence` and
  `stopping-times-and-optional-stopping`. This is a transient global workflow
  gate, not a mathematical escalation. Their records are not owned here and
  were not edited. Retry immediately when the global scope gate closes.
- Open gap: decision receipt only.

Current item: `prop-bocksteins-are-natural-and-commute-with-suspension`. Next
action: reread its exact naturality supplier and prove both the space/coefficient
naturality and reduced-suspension square, with the AC-bearing general sequence
declared explicitly.

### 4. `prop-bocksteins-are-natural-and-commute-with-suspension` — content complete

- Exact claim/conventions: under AC, Bocksteins are contravariantly natural in
  spaces, covariantly natural in coefficient-sequence morphisms, and commute
  with the stable suspension convention
  $\sigma_n=(-1)^n\partial_{(CX,X)}$.
- Source reread: May Chapter 22 section 5, definition and Problems 2 and 4,
  printed pages 184--186; also Hatcher section 3.E, printed page 303.
- Dependencies examined: `def-stable-natural-cohomology-operation`, direct
  `def-bockstein-connecting-operation`,
  `lem-the-bockstein-is-independent-of-lift-and-cocycle-representative`,
  `thm-naturality-of-the-singular-cohomology-pair-sequence`, and direct
  `def-axiom-of-choice`.
- Repairs: declared the actual Bockstein definition directly; propagated AC
  directly. The stable suspension sign is explicit because the two unsigned
  connecting maps anticommute: the proof calculates
  $\delta(\delta\bar b-i_*\bar a)=-i_*\delta\bar a$.
- Proof: steps 1.1 and 1.2 prove the two naturality claims; step 1.3 fixes the
  suspension convention; step 2.1 proves unsigned anticommutation; step 3.1
  absorbs the sign and proves stability.
- Choice/boundaries: coefficient lifts use AC through the definition; cone
  cochains are extended canonically by zero, so no second selection occurs.
  Empty/zero/one-point, $m=1$, and degree-zero cases are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: pending the same unrelated global Step 3a scope gate as item 3;
  the intended decision is `repaired`, confidence 1, with the five dependencies
  just listed.
- Open gap: decision receipt only.

Current item: `prop-the-mod-two-bockstein-is-a-derivation`. Next action: reread
the cup-product Leibniz supplier and give the residue-lift calculation, keeping
the general graded sign and then specializing to characteristic two without
spending AC.

### 5. `prop-the-mod-two-bockstein-is-a-derivation` — content complete

- Exact claim/conventions: for the mod-$m$ Bockstein and $x\in H^p$,
  $\beta(x\smile y)=\beta(x)\smile y+(-1)^p x\smile\beta(y)$; when $m=2$
  the sign is invisible.
- Source reread: Hatcher section 3.E, printed pages 303--304, including the
  entire residue-lift calculation of formula (*).
- Dependencies examined: `def-bockstein-connecting-operation` and
  `thm-cup-product-leibniz-identity` with its positive-coboundary sign.
- Proof: canonical lifts give
  $\delta\widetilde\varphi=m\eta$ and
  $\delta\widetilde\psi=m\mu$; Leibniz factors the product coboundary by $m$;
  pulling back and reducing proves the formula.
- Choice/boundaries: canonical least-residue lifts make this special cyclic
  argument choice-free despite the general definition's AC branch. Empty,
  zero-input, $m=1$, characteristic two, and degree-zero cases are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: intended `accept`, confidence 1, with both dependencies examined;
  receipt remains pending the unrelated global Step 3a gate.
- Open gap: decision receipt only.

Current item: `lem-natural-higher-diagonal-approximations-on-singular-chains`.
Next action: read the complete Mosher--Tangora acyclic-model construction and
author the recursive carrier argument, including naturality, the base cases,
and its choice-free explicit cone contraction.

### 6. `lem-natural-higher-diagonal-approximations-on-singular-chains` — content complete

- Exact claim/conventions: over $\mathbb F_2$, natural degree-$i$ maps $D_i$
  have $D_0=\operatorname{AW}\Delta_{\#}$ and
  $dD_i+D_id=(1+T)D_{i-1}$; they preserve subspaces. Coherent uniqueness is
  stated by the exact $K_i$ equation, not by an informal phrase.
- Source read: Mosher--Tangora Chapter 2, the complete Acyclic Carrier Theorem
  and proof on printed pages 14--15 and the cup-$i$ construction on printed
  pages 15--16. The previous manifest/coverage locator `pp.5--13` did not
  contain this result and was repaired to printed pages 14--16.
- Dependencies examined: `def-alexander-whitney-diagonal-approximation` and
  `thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses`.
- Repair/provenance: the source proof says to choose an arbitrary filling for
  every carrier cell. To keep the promised choice-free branch honest, the
  authored proof fixes the finite singular-prism contraction on each standard
  simplex product and transports it through the specified Eilenberg--Zilber
  data. Manifest and item proof provenance are therefore `ai-altered`.
- Proof: step 1.1 constructs the fixed contraction; step 2.1 performs the
  lexicographic recursion and proves the target is a cycle using
  $(1+T)^2=0$; step 3.1 proves naturality/subspace preservation; step 4.1
  repeats the recursion on discrepancies to produce the exact coherent
  homotopy.
- Choice/boundaries: explicit finite contractions spend no choice. Empty,
  zero, one-vertex, degenerate-simplex, $i=0$, and $D_{-1}=0$ cases are
  explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: intended `repaired`, confidence 1, with both dependencies
  examined; receipt remains pending the unrelated global Step 3a gate.
- Open gap: decision receipt only.

Current item: `def-higher-cup-i-products`. Next action: reread the completed
$D_i$ interface and define the grading and evaluation formula, including the
negative-index, degree, relative/subspace, and choice boundaries.

### 7. `def-higher-cup-i-products` — content complete

- Exact claim/conventions: $(a\smile_i b)(c)=(a\otimes b)(D_ic)$ has degree
  $p+q-i$ over $\mathbb F_2$; $\smile_0$ is the existing cup product and the
  operation is zero for $i<0$ or negative target degree. Either relative input
  produces a relative output.
- Source reread: Mosher--Tangora Chapter 2, definition and the beginning of the
  full coboundary calculation, printed pages 15--16. The manifest locator was
  repaired from pages 9--13 to the exact printed pages 15--16; the coverage
  row for the definition/calculation was likewise corrected.
- Dependencies examined: the completed higher-diagonal lemma and
  `def-singular-cup-product-on-cochains`.
- Well-definedness: the degree equation makes $a\otimes b$ evaluate precisely
  on $D_ic$; the carrier property proves both relative variants; the front/back
  order agrees with the published Alexander--Whitney cup product.
- Choice/boundaries: choice-free; empty, zero, one-point, degenerate, $i=0$,
  $i<0$, and negative-target cases are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: intended `repaired`, confidence 1, with both dependencies
  examined, because the source locator was defective; receipt remains pending
  the unrelated global Step 3a gate.
- Open gap: decision receipt only.

Current item: `thm-cup-i-coboundary-identity`. Next action: author the complete
evaluation of the higher-diagonal identity against $a\otimes b$, with the
characteristic-two transposition and all endpoint cases explicit.

### 8. `thm-cup-i-coboundary-identity` — content complete

- Exact claim/conventions: over $\mathbb F_2$,
  $\delta(a\smile_i b)=\delta a\smile_i b+a\smile_i\delta b+
  a\smile_{i-1}b+b\smile_{i-1}a$, with negative indices zero; the relative
  variants obey the same formula.
- Source read: Mosher--Tangora Chapter 2, the complete displayed calculation on
  printed page 16. The manifest locator was repaired from pages 11--13 to the
  exact page 16.
- Dependencies examined: `def-higher-cup-i-products` and the completed natural
  higher-diagonal lemma.
- Proof: evaluation turns cochain coboundary into $D_i d$; the recurrence
  replaces it by $dD_i+(1+T)D_{i-1}$; tensor coboundary and transposition give
  the four terms.
- Choice/boundaries: choice-free after fixing the $D_i$ system. Empty, zero,
  one-point, degenerate-simplex, $i=0$, and negative-index cases are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass after replacing inline-delimiter quotes by exact display-body excerpts.
- Decision: intended `repaired`, confidence 1, with both dependencies examined;
  receipt remains pending the unrelated global Step 3a gate.
- Open gap: decision receipt only.

Current item: `def-steenrod-squares-from-cup-i-products`. Next action: define
$Sq^i[x]=[x\smile_{n-i}x]$ only in the correct degree range, and verify at the
definition boundary that the coboundary identity makes the representative a
cocycle.

### 9. `def-steenrod-squares-from-cup-i-products` — content complete

- Exact claim/conventions: for $x=[a]\in H^n(-;\mathbb F_2)$ and
  $0\leq k\leq n$, $Sq^k(x)=[a\smile_{n-k}a]\in H^{n+k}$; outside this range
  it is zero. The same formula applies relatively.
- Source read: Mosher--Tangora Chapter 2, definition of lower-index squares on
  printed page 17 and conversion to the upper-index convention on printed
  page 18. The manifest locator was repaired from pages 14--17 to exact pages
  17--18.
- Dependencies examined: `def-higher-cup-i-products` and
  `thm-cup-i-coboundary-identity`.
- Well-definedness at this stage: substituting the equal cocycle inputs into
  the coboundary formula makes the two transposed terms cancel in
  characteristic two, so a cohomology class is defined; representative and
  carrier independence remain correctly deferred to the next theorem.
- Choice/boundaries: choice-free for fixed $D_i$; empty, zero, one-point,
  degenerate, $k=0$, $k=n$, and outside-range cases are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: intended `repaired`, confidence 1, with both dependencies examined
  because the exact source locator was corrected; receipt remains pending the
  unrelated global Step 3a gate.
- Open gap: decision receipt only.

Current item: `thm-steenrod-squares-are-well-defined-and-natural`. Next action:
prove representative independence and additivity by explicit polarization
cochains, then use naturality and coherent $K_i$-homotopy for maps, pairs, and
choice of $D_i$.

### 10. `thm-steenrod-squares-are-well-defined-and-natural` — content complete

- Exact claim/conventions: every $Sq^k$ is additive and independent of both
  cocycle representative and coherently carried $D_i$ system, and is natural
  for maps of spaces and pairs.
- Source read: Mosher--Tangora Chapter 2, the complete additivity,
  coboundary-representative, carrier-independence, naturality, and relative
  arguments on printed pages 17--19. The manifest and coverage locators were
  repaired to those actual pages.
- Dependencies examined: the square definition, cup-$i$ coboundary theorem,
  and natural/coherent higher-diagonal lemma.
- Proof: polarization makes the additive cross term a coboundary; the authored
  primitive for $a'=a+\delta h$ differentiates to the complete difference;
  pairing the $K_i$ equation with $a\otimes a$ kills the transposition term;
  naturality and the carrier assertion prove the absolute and relative cases.
- Choice/boundaries: no choices beyond the supplied fixed coherent system.
  Empty, zero, one-point, degenerate, $j=0$, and outside-range cases are
  explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass after adopting dependency-canonical numbering and exact display-body
  citations.
- Decision: intended `repaired`, confidence 1, with all three dependencies
  examined because the exact source locator was corrected; receipt remains
  pending the unrelated global Step 3a gate.
- Open gap: decision receipt only.

Current item: `prop-steenrod-square-normalization-instability-and-top-square`.
Next action: read the remaining Chapter 2 normalization and suspension proof,
then separate the immediate instability/top-square clauses from the nontrivial
$Sq^0$ normalization and cone-pair suspension argument.

### 11. `prop-steenrod-square-normalization-instability-and-top-square` — content complete

- Exact claim/conventions: $Sq^0=\operatorname{id}$, instability above the
  class degree, the top cup-square formula, the relative versions, and
  commutation with the standard reduced cone-pair suspension over
  $\mathbb F_2$.
- Sources read completely: Mosher--Tangora Chapter 2 printed pages 18--20 for
  relative squares, the connector primitive, and suspension, and Chapter 3
  printed pages 23--24 for its proof of $Sq^0$. The latter proof uses real
  projective space, suspension, Hopf--Whitney representability, and skeletal
  injectivity, so it is not admissible in this prerequisite order. I therefore
  also read Medina--Mardones, *New formulas for cup-i products and fast
  computation of Steenrod squares*, Definition 7, Examples 8--9, Theorem 10,
  and the simplicial-set remark on printed pages 6--9 (arXiv:2105.08025v3).
  Its explicit face formula has $D_0=\operatorname{AW}$ and, because the only
  index set for $D_n$ on an $n$-simplex is empty, $D_n(s)=s\otimes s$.
- Scaffold repairs: added the directly used
  `def-steenrod-squares-from-cup-i-products`,
  `thm-cup-i-coboundary-identity`, and
  `def-reduced-cone-suspension-and-cofiber-sequence`; corrected the
  Mosher--Tangora locator to printed pages 18--20 and 23--24; added the exact
  Medina--Mardones locator; and changed proof provenance to `ai-altered`
  because the proof replaces Mosher--Tangora's forward-dependent $Sq^0$
  argument by the explicit normalization and applies its face-only formula to
  the singular simplicial set. Coverage now separates item 10's
  construction/naturality from this item's relative suspension material.
- Dependencies examined: the square definition, higher cup-$i$ definition,
  cup-$i$ coboundary theorem, independence/naturality theorem, reduced
  cone/suspension definition, and the singular-cohomology pair connector.
- Proof: the normalized formula gives
  $(a\smile_n a)(s)=a(s)^2=a(s)$; definition endpoints give instability and
  the top square. For the cone extension $b$ and $j=n-k$, the actual primitive
  $b'=b\smile_{j+1}\delta b+b\smile_jb$ restricts to
  $a\smile_ja$, while the complete cup-$i$ calculation gives
  $\delta b'=\delta b\smile_{j+1}\delta b$. Thus the pair connector, and by
  naturality the reduced suspension, commutes with every square.
- Choice/boundaries: the face formula and extension by zero are explicit, so
  no AC is used. Empty, zero, one-point, degenerate-simplex, $k=0$, $k=n$,
  outside-range, and negative-index cases are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: intended `repaired`, confidence 1, with all six declared
  dependencies examined; receipt remains pending the unrelated global Step 3a
  gate.
- Open gap: decision receipt only.

Current item: `lem-cartan-coherence-for-higher-diagonal-approximations`.
Next action: reread the exact tensor-fourfold carrier construction and author
the coherent comparison used by the Cartan formula, including the relative
carrier, degree recurrence, and choice-free contraction.

### 12. `lem-cartan-coherence-for-higher-diagonal-approximations` — content complete

- Exact claim/conventions: over $\mathbb F_2$, for Alexander--Whitney
  $A$, shuffle $S$, and the fixed $D_i$, the before-AW family
  $L_i=(A\otimes A)D_i^{X\times Y}S$ is coherently homotopic to the
  resolution-diagonal convolution
  $R_i=\sum_{r+s=i}\tau(D_r^X\otimes T^rD_s^Y)$. The exact equation is
  $L_i-R_i=dH_i+H_id+(1+Q)H_{i-1}$, and both one-factor relative carriers are
  preserved.
- Source read: Mosher--Tangora Chapter 3 printed pages 24--25, including the
  complete displayed external Cartan calculation. The scaffold locator
  `Chapter 2 §5, pp.24–29` was wrong: printed page 24 is the start of Chapter
  3's Cartan section, and pages 26--29 concern later applications. The manifest
  and coverage locators were repaired to Chapter 3 printed pages 24--25.
- Scaffold repairs: added the directly used Eilenberg--Zilber/shuffle theorem
  and singular prism theorem. The source merely says the composite is
  suitable; the authored item supplies the actual coherent carrier homotopy,
  so proof provenance was changed to `ai-altered`.
- Dependencies examined: natural higher diagonals, the Alexander--Whitney
  formula, the AW/shuffle chain-homotopy equivalence, and the singular prism
  identity.
- Proof: the finite resolution diagonal
  $\rho(e_i)=\sum_{r+s=i}e_r\otimes T^re_s$ is checked as a chain map by
  cancellation of its shifted interior terms. It assembles $L$ and $R$ into
  equivariant maps with common outer-block action. Explicit affine prism
  contractions are corrected by the written contraction of the unnormalized
  point complex and tensored over four factors. Lexicographic filling of the
  actual discrepancy cycle gives the displayed $H_i$ equation; postcomposition
  proves naturality and both relative assertions.
- Choice/boundaries: the contraction and every resolution sum are explicit and
  finite, so no AC is used. Empty and zero complexes, one-point factors,
  degenerate singular simplices, $i=0$, and $H_{-1}=0$ are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: intended `repaired`, confidence 1, with all four dependencies
  examined; receipt remains pending the unrelated global Step 3a gate.
- Open gap: decision receipt only.

Current item: `thm-cartan-formula-for-steenrod-squares`. Next action: evaluate
the completed coherent comparison on cocycle representatives, track the lower
cup indices against the square exponents, and then pull the external formula
back along the diagonal for the internal cup product.

### 13. `thm-cartan-formula-for-steenrod-squares` — content complete

- Exact claim/conventions: for every integer $k$, both the external and
  internal mod-two Cartan formulas hold, with all outside-range squares zero
  and hence only finitely many nonzero summands.
- Sources read: Mosher--Tangora Chapter 3 printed pages 24--25, including the
  full external calculation and its pullback along the diagonal. I also reused
  the fully read Medina--Mardones Definition 7, Examples 8--9, and Theorem 10,
  printed pages 8--9, to make the vanishing of raw convolution terms beyond a
  simplex's dimension explicit on ordinary singular models.
- Scaffold repairs: added the directly used square definition,
  square-independence/naturality theorem, singular cup/external-product
  comparison, and AW/shuffle equivalence. The proof provenance is `ai-altered`
  because the authored argument spells out the chain-model comparison and
  singular face normalization that the source suppresses.
- Dependencies examined: normalization/instability, Cartan coherence,
  independence/naturality, square definition, AW cup versus diagonal pullback
  of the cross product, and AW/shuffle equivalence.
- Proof: equality is detected after shuffle. Pairing
  $L_\ell-R_\ell=dH_\ell+H_\ell d+(1+Q)H_{\ell-1}$ with
  $a\otimes b\otimes a\otimes b$ kills $dH_\ell$ by cocyclicity and the
  $(1+Q)$ term by repeated factors. Each convolution term is
  $(a\smile_ra)\otimes(b\smile_sb)$; normalized higher diagonals kill $r>p$
  or $s>q$, and $i=p-r$, $j=q-s$ satisfy $i+j=k$. Naturality and
  $x\smile y=\Delta^*(x\times y)$ give the internal formula.
- Choice/boundaries: all maps and sums are fixed and finite, without AC.
  Empty, zero, one-point, degree-zero, degenerate-simplex, negative-$k$, and
  above-total-degree cases are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass.
- Decision: intended `repaired`, confidence 1, with all six dependencies
  examined; receipt remains pending the unrelated global Step 3a gate.
- Open gap: decision receipt only.

Current item: `lem-free-cyclic-resolution-and-transfer-for-power-operations`.
Next action: read Steenrod--Epstein's exact cyclic resolution, diagonal,
cohomology-basis, and transfer arguments in the stated sections; then audit the
scaffold's missing provenance and its finite-coset choice claim before writing
the algebraic proof.

### 14. lem-free-cyclic-resolution-and-transfer-for-power-operations — content complete

- Exact claim/conventions: the alternating \(T-1,N\) complex is an exact
  augmented \(\mathbb F_p[C_p]\)-resolution; its equivariant-Hom cohomology is
  the polynomial algebra at \(p=2\) and the polynomial--exterior algebra at
  odd \(p\). With this library's positive connector,
  \(\beta[w_1]=[w_2]\). Transfer is a cochain map and only
  \(\operatorname{Tr}\operatorname{Res}\), not arbitrary transfer, is asserted
  to vanish when \(p\mid[G:H]\).
- Source read in complete bounded chunks: Steenrod--Epstein Chapter V section
  5, printed pages 67--68 (PDF pages 73--74), including the one-orbit cellular
  resolution, equivariant diagonal, quotient diagonal, ring basis, and
  Bockstein computation; and section 7, printed pages 71--72 (PDF pages
  77--78), including the transfer definition and Lemma 7.1. The scaffold's
  broad locator included unrelated chapters VII--VIII and was repaired to
  these exact pages.
- Scaffold repairs: clarified “its cohomology” as
  \(H^*(\operatorname{Hom}_{\mathbb F_p[C_p]}(W,\mathbb F_p))\), clarified that
  the characteristic-\(p\) vanishing applies to the transfer--restriction
  composite, supplied missing provenance, and marked the proof `ai-altered`.
  The source chooses a transversal; the authored proof instead defines a
  representative-independent summand for each element of \(G/H\), so the
  finite quotient sum is choice-free.
- Dependencies examined: singular cohomology as cocycles modulo coboundaries,
  the canonical-residue clause of the Bockstein definition, and the tensor
  evaluation convention for the additive cross product.
- Proof: \(R=\mathbb F_p[s]/(s^p)\), \(s=T-1\), and \(N=s^{p-1}\);
  \(\ker s=NR\), \(\ker N=sR\), and \(\ker\varepsilon=sR\). Equivariant Hom
  has one zero-differential basis cochain \(w_j\) in every degree. The exact
  quotient-diagonal formulas give
  \(w_1^2=p(p-1)w_2/2\), \(w_2^r=w_{2r}\), and
  \(w_2^rw_1=w_{2r+1}\). For transfer, the coset function
  \(\Phi_{gH}(f)(c)=g f(g^{-1}c)\) is representative-independent,
  \(G\)-equivariant after summing, and commutes with the differential.
- Choice/boundaries: no AC. Canonical cyclic coefficient residues replace the
  general Bockstein lifting choice; no coset transversal is selected. The
  augmentation, \(p=2\), odd primes, \(H=G\), \(H=\{1\}\), zero modules, and
  the absence of a degenerate-simplex quotient are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass. The full contract file also passes for all 14 completed items. A
  batch-wide content-policy run presently reports only the expected 42
  uncreated remaining batch-5 items.
- Decision: intended `repaired`, confidence 1, with all three dependencies
  examined. Current pair scope was refreshed as `sufficient`; the item receipt
  remains pending the unrelated global Step 3a gate.
- Open gap: decision receipt only.

Current item: `lem-equivariant-p-fold-external-power-and-diagonal`. Next
action: reread the complete Chapter VII construction, especially the
independence, Künneth expansion, and transfer-surjectivity argument for
additivity, then audit the finite-regular-complex and general-space clauses
before authoring.

### 15. lem-equivariant-p-fold-external-power-and-diagonal — content complete

- Exact claim/conventions: assuming AC, the external \(p\)-fold power and its
  coefficients \(D_j\) are constructed on the cellular cohomology of a finite
  oriented regular cell complex. Resolution independence means independence
  under the unique equivariant comparison isomorphisms. This item explicitly
  does not yet identify the cellular model with singular cohomology or extend
  it to arbitrary spaces.
- Sources read in complete bounded chunks: Steenrod--Epstein Chapter V
  sections 2--3, printed pages 60--64 (PDF pages 66--70), for equivariant
  acyclic carriers, free-acyclic comparisons, proper maps, subdivisions, and
  the resulting functor; Chapter VII section 2, printed pages 99--101 (PDF
  pages 105--107), for the tensor power, representative and resolution
  independence, fiber, and naturality; section 3, printed pages 103--104 (PDF
  pages 109--110), for the diagonal coefficients; and section 4, printed
  pages 104--105 (PDF pages 110--111), for transfer-based additivity.
- Scaffold repairs: replaced the inapplicable mod-two higher-diagonal
  dependency and premature singular cross-product dependency by the actual
  cellular-chain and AC suppliers; stated the finite-cell model boundary;
  narrowed the source locator; supplied missing provenance and marked the
  proof `ai-altered`. The later cyclic-power item retains the promised
  arbitrary singular-space extension.
- Dependencies examined: the cyclic resolution/basis/transfer lemma, cellular
  boundary definition, cellular square-zero lemma, and AC.
- Proof: \(\varepsilon\otimes c^{\otimes p}\) is equivariant because the cyclic
  Koszul sign is \(1\) for odd \(p\) and in characteristic two. An authored
  orbit-by-orbit acyclic-carrier induction gives representative, comparison,
  and naturality homotopies. On the diagonal,
  \(\operatorname{Hom}_{\mathbb F_p[C_p]}(W\otimes C,\mathbb F_p)\) decomposes
  coordinatewise as \(\bigoplus_j w_j\otimes C^{*-j}\), giving unique \(D_j\).
  Mixed binary tensor words form free cyclic orbits. The explicit alternating
  contraction of the underlying \(W\) makes restriction onto; combined with
  \(\operatorname{Tr}\operatorname{Res}=p=0\), this kills their diagonal
  pullbacks and proves additivity.
- Choice/boundaries: AC is used exactly to select representatives and fillings
  for the set-indexed nonempty carrier-extension problems. The mixed-word
  representatives are lexicographically prescribed in a finite set. Empty and
  zero cellular complexes, a point, \(q=0\), \(p=2\), odd primes, \(j=0,pq\),
  and out-of-range indices are explicit. Singular degeneracies are
  item-specifically inapplicable here and remain an obligation of the later
  singular extension.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass; the complete contract file passes for all 15 completed items.
- Decision: intended `repaired`, confidence 1, with all four dependencies
  examined. Pair scope was refreshed as `sufficient`; the receipt remains
  pending the unrelated global Step 3a gate.
- Open gap: decision receipt only.

Current item: `lem-wreath-double-power-coefficient-symmetry`. Next action:
reread Steenrod--Epstein's complete row--column double-power comparison,
identify the precise two cyclic actions and transposition signs, and check
whether the scaffold's Cartan dependency or its claimed coefficient symmetry
imports any later theorem.

### 16. lem-wreath-double-power-coefficient-symmetry — content complete

- Exact claim/conventions: assuming AC and working on the finite oriented
  regular cellular model, the direct \(p^2\)-fold row--column power and the
  iterated column-then-row power have the same double-diagonal pullback. Its
  unique coefficients have degree \(p^2q-j-k\) and satisfy
  \(D_{j,k}=(-1)^{jk+p(p-1)q/2}D_{k,j}\). No Cartan, Adem, or singular-space
  conclusion is asserted.
- Source read in a complete bounded chunk: Steenrod--Epstein Chapter VIII
  section 1, opening through Lemma 1.3, printed pages 115--118 (PDF pages
  121--124), including the two cyclic actions, the free-acyclic row--column
  model, Lemma 1.1's comparison, the finite-skeleton rigor remark, Corollary
  1.2's common coefficients, and Lemma 1.3's transpose calculation.
- Scaffold repairs: removed the premature Cartan dependency; added the actual
  cyclic-resolution and AC suppliers; restricted the claim to the finite
  cellular construction; added the negative-degree convention and explicit
  nonclaims; narrowed the source locator; and tagged the authored proof
  ai-altered.
- Dependencies examined: the finite cellular \(p\)-fold power and its
  comparison/coordinate theorem, the standard cyclic-resolution basis, and
  AC.
- Proof: \(W_1\otimes W_2^{\otimes p}\) is explicitly shown free and acyclic
  for the commuting row and column translations. A derived finite
  \(N\)-skeleton with \(N>p^2q+1\) makes the iterated input finite regular
  without changing degree-\(p^2q\) cocycles or boundaries. On pure tensors,
  signed regrouping identifies the direct and iterated evaluators; pulling
  back the resolution and space diagonals gives the common class. Successive
  cyclic-basis decompositions define its unique \(D_{j,k}\). Matrix
  transposition contributes \((-1)^{jk}\) from resolution degrees and
  \((-1)^{p(p-1)q/2}\) from its \(p(p-1)/2\) coefficient-factor
  transpositions.
- Choice/boundaries: AC is propagated exactly for the inherited
  equivariant-carrier representative and filling choices. Skeleton bounds,
  regroupings, and permutations are explicit and finite. Empty, zero, point,
  degree-zero, \(p=2\), odd-prime, index-endpoint, and negative-degree cases
  are explicit; singular degeneracies are inapplicable to this cellular-only
  item.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass; full contract file pass for all 16 completed items.
- Decision: intended repaired, confidence 1, with all three dependencies
  examined. The pair scope was refreshed as sufficient. The item receipt
  remains pending because the global Step 3a gate currently reports reopened
  scope for the martingale, stopping-time, and Riemann-curvature pairs.
- Open gap: decision receipt only.

Current item: lem-adem-double-power-comparison. Next action: read the complete
mod-two coefficient extraction in Steenrod--Epstein VIII.1.4--1.5 and the
degree-propagation argument cited by the scaffold, then verify every
binomial-index substitution rather than treating the wreath identity as the
Adem calculation.

### 16a. lem-finite-cellular-cyclic-squares-cartan-and-basis-action — added supplier complete

- Reason added: the item-17 scaffold used Cartan and the formula for squares
  on the cyclic basis, but item 15 supplied only additive finite-cellular
  coefficients and explicitly deferred singular comparison. Citing the
  singular Cartan theorem would not close that model mismatch.
- Exact claim/conventions: for \(p=2\), define
  \(Sq_{\mathrm{cyc}}^i(x)=D_{q-i}(x)\) on finite oriented regular cellular
  cohomology. These operations are additive and natural, satisfy
  \(Sq_{\mathrm{cyc}}^0=\mathrm{id}\), instability, top square, and both
  Cartan formulas, and act by
  \(Sq_{\mathrm{cyc}}^j(t^r)=\binom rj t^{r+j}\) on finite skeleta of
  \(BC_2\). No singular cup-\(i\) identification is claimed.
- Sources read in complete bounded chunks: Steenrod--Epstein Chapter VII
  Lemmas 4.4 and 4.7, printed pages 105--108, section 5 and Theorem 6.7,
  printed pages 108--114 (PDF pages 111--120), plus the standard cyclic
  diagonal in Chapter V section 5, printed pages 67--68 (PDF pages 73--74).
- Supplier-interface repair: item 14's authored proof already contained the
  two quotient-diagonal formulas, but its Statement did not expose them.
  Those exact formulas and their \(p=2\) all-splits consequence are now in the
  item-14 Statement and manifest, so consumers cite a proved interface rather
  than proof internals.
- Dependencies examined: finite cellular cyclic-power naturality,
  independence, fiber and coefficient additivity; both explicit parity
  formulas for the cyclic-resolution diagonal; and AC.
- Proof: pure-tensor regrouping plus the cyclic diagonal gives
  \(D_n(x\times y)=\sum_{a+b=n}D_a(x)\times D_b(y)\). Skeletal injectivity and
  a cocycle-defined map to \(S^q\) reduce \(D_q\) to a scalar and prove
  \(D_n=0\) for \(n>q\). On the two-edge circle, the explicit component
  \(\Phi(e_1\otimes(J_1-J_2))=J_1\otimes J_1+J_2\otimes J_2\) has the required
  boundary and evaluates to one; external convolution propagates the scalar
  to every degree. Reindexing gives Cartan. Finally
  \(Sq_{\mathrm{cyc}}(t)=t+t^2\), so the binomial theorem gives the basis
  action.
- Choice/boundaries: AC is exactly the inherited carrier-comparison choice.
  The sphere maps, circle calculation, resolution diagonal, skeleton cutoff,
  and sums are explicit. Empty, zero, point, degree-zero, negative,
  above-degree, zero-square, top-square, unit, and basis-index endpoints are
  explicit; singular degeneracies are inapplicable to the stated model.
- Checks: item precheck pass; rendercheck pass; strict item contract pass;
  full contract file pass for all 17 completed/added items. Pair scope
  refreshed as sufficient.
- Decision class: this item was created and fully authored during the
  dispatch, so it is intentionally not sent through Step 3 self-review; the
  build engine's post-author certification remains the applicable gate.

Current item: lem-adem-double-power-comparison. Next action: author the exact
two-sum coefficient identity, prove the binary binomial reductions for the
high-degree substitution, and keep descent and singular comparison in the
following theorem.

### 17. lem-adem-double-power-comparison — content complete

- Exact claim/conventions: for the finite-cellular cyclic squares, the
  \((2q-a,2q-\ell)\) double coefficient is the explicit Cartan/basis-action
  sum written in the item, and symmetry equates it to the exchanged sum. For
  \(0<a<2b\), \(2^s>a\), and \(q=2^s-1+b\), this reduces on degree-\(q\)
  classes to the exact Adem-coefficient sum. Degree descent and singular
  cup-\(i\) comparison are explicitly deferred.
- Source read in a complete bounded chunk: Steenrod--Epstein Chapter VIII
  Convention 1.4 and Theorem 1.5 through the high-degree calculation, printed
  pages 118--119 (PDF pages 124--125). The later odd-primary calculation was
  read for boundary awareness but was not imported.
- Scaffold repairs: replaced the mismatched singular Cartan supplier with the
  newly authored finite-cellular cyclic-square supplier; added AC directly;
  rewrote the statement as the exact universal two-sum identity plus its
  high-degree consequence; narrowed the source locator; and marked the
  expanded proof ai-altered.
- Dependencies examined: finite-cellular Cartan and cyclic-basis action,
  row--column coefficient symmetry, and AC.
- Proof: the outer square of
  \(w_{q-i}\times Sq_{\mathrm{cyc}}^i x\) is expanded by Cartan, and its second
  resolution coordinate fixes \(j=q+i-\ell\). Transposition gives the second
  sum. The parity criterion is proved internally from
  \((1+z)^n=\prod_{\nu:n_\nu=1}(1+z^{2^\nu})\). With
  \(\ell=q+b\), digit complementation kills every left term except \(i=b\).
  On the right, complementing the lower binomial index gives \(a-2r\);
  \(r\leq\lfloor a/2\rfloor<b\), and the lowest \(s\) digits yield exactly
  \(\binom{b-r-1}{a-2r}\).
- Choice/boundaries: AC is only the propagated carrier-comparison assumption.
  The least admissible \(s\) is specified. Empty, zero, point, strict
  inequality, both summation endpoints, negative and oversized binomial
  indices, and outside-range operations are explicit; singular degeneracies
  are inapplicable here.
- Checks: item precheck pass; rendercheck pass; strict item contract pass;
  full contract file pass for all 18 current entries.
- Decision: repaired receipt recorded with confidence 1 and all three direct
  dependencies. Immediately afterward a concurrent Riemann-curvature
  manifest change reopened that unrelated pair's scope; this does not
  invalidate the already current item-17 receipt unless its own transitive
  inputs change.
- Open gap: none local.

Current item: thm-adem-relations-for-steenrod-squares. Next action: audit the
scaffold's proposed descent and singular-identification steps against the
actual local cup-\(i\) construction and the complete source extension
argument, then add any missing direct suppliers before stating the global
singular theorem.

### 17a. lem-finite-cellular-cyclic-squares-agree-with-singular-cup-i-squares — added supplier complete

- Reason added: the high-degree double-power lemma is explicitly cellular,
  while the promised Adem theorem concerns the already authored singular
  cup-\(i\) squares. The scaffold named an identification but had no proved
  dependency interface for it.
- Supplier-interface repair: item 15's proof already constructed relative
  equivariant carrier extensions and represented each coefficient by a carried
  diagonal, but its Statement exposed neither fact. Its Statement and manifest
  now expose the exact relative carrier theorem and the cochain formula
  \(z\mapsto c^{\otimes p}\Phi_C(e_j\otimes z)\); its proof and contract were
  adjusted without changing the construction.
- Exact claim/conventions: assuming AC, a cell-carried map
  \(\iota:C_*^{\mathrm{cell}}(K;\mathbb F_2)\to
  C_*^{\mathrm{sing}}(K;\mathbb F_2)\) for a finite oriented regular complex
  induces a cohomology isomorphism and intertwines every singular cup-\(i\)
  square with the corresponding finite-cellular cyclic square. Both
  out-of-range directions and unnormalized singular degeneracies are included;
  no arbitrary-space extension is asserted.
- Sources read in complete bounded chunks: Mosher--Tangora Chapter 2, the
  Acyclic Carrier Theorem, its full proof, the cup-\(i\) construction,
  naturality, and independence, printed pages 14--18 (PDF pages 24--28);
  Steenrod--Epstein Chapter V section 2, carrier statement and proof, printed
  pages 60--61 (PDF pages 66--67), and Chapter VIII section 2's full extension
  argument, printed pages 123--124 (PDF pages 129--130).
- Dependencies examined: finite cellular cyclic-square definition; the
  repaired cellular carrier/coordinate interface; natural singular higher
  diagonals; the singular cup-\(i\) definition; cellular--singular homology
  comparison; Eilenberg--Zilber; homotopy invariance of singular homology; and
  AC.
- Proof: barycentric fundamental chains give the carried comparison and the
  standard homology isomorphism. AC-chosen complements contract its acyclic
  mapping cone, so the dual comparison is a cohomology isomorphism. Packaging
  the two diagonal systems as maps from \(W\otimes C_*^{\mathrm{cell}}(K)\)
  places both in the same augmented-acyclic closed-cell tensor carrier.
  Equivariant carrier uniqueness gives a homotopy; evaluating its
  \(e_{q-i}\)-coordinate on \(a\otimes a\) makes the two square cocycles differ
  by a cellular coboundary.
- Choice/boundaries: AC is spent exactly on the set-indexed equivariant carrier
  fillings and on complements in the generally infinite singular mapping
  cone. The finite subdivision is explicit finite work. Empty, zero, point,
  \(i=0\), \(i=q\), both out-of-range directions, and degenerate singular
  simplices are explicit.
- Checks: repaired item-15 precheck pass; bridge precheck pass; rendercheck pass
  on both files; strict complete batch-5 contract pass for all 19 current
  entries. Manifest and coverage registrations are present.
- Decision class: this supplier was created and fully authored during the
  dispatch, so it is intentionally not sent through Step 3 self-review.

Current item: the necessary finite-cycle detection supplier for the Adem
theorem. Next action: prove that a natural singular-cohomology identity which
vanishes on every finite regular complex vanishes on every space, by realizing
each finite singular cycle on a finite Delta complex, subdividing twice, and
using the cochain evaluation criterion with its exact AC expenditure.

### 17b. lem-natural-singular-cohomology-identities-are-detected-on-finite-regular-complexes — added supplier complete

- Reason added: Steenrod--Epstein's extension through the realization of the
  singular complex uses several absent CW/simplicial-realization interfaces.
  The Adem theorem needs only detection of a natural identity, which admits a
  smaller direct supplier.
- Exact claim/conventions: assuming AC, for fixed nonnegative degrees, any
  natural family \(R_X:H^m(X;\mathbb F_2)\to H^n(X;\mathbb F_2)\) which is
  zero on every finite regular cell complex is zero on every space. No
  additivity or simultaneous finite approximation of all classes is assumed.
- Sources read in complete bounded chunks: Hatcher section 2.1, the geometric
  finite-Delta-complex realization of a singular cycle on printed pages
  108--109 (PDF pages 117--118); the entire barycentric subdivision
  chain-map and chain-homotopy calculation on printed pages 119--124 (PDF
  pages 128--133), especially the explicit
  \(\partial T+T\partial=1-S\) proof on pages 121--123; and Exercise 23's
  second-subdivision statement on printed page 133 (PDF page 142).
  Steenrod--Epstein Chapter VIII section 2's full arbitrary-singular-space
  extension on printed pages 123--124 was also reread to identify the exact
  obligation being replaced.
- Dependencies examined: finite-support singular chains and the homology
  quotient; full singular cochains and their coboundary; contravariant
  cohomology pullback; naturality of the mod-two Kronecker pairing; and AC.
- Proof: pair equal boundary-face occurrences of a finite mod-two singular
  cycle to obtain a finite Delta complex mapping to the target. Twice
  subdividing gives a finite regular simplicial complex, and Hatcher's explicit
  subdivision homotopy preserves the represented homology class. Naturality
  reduces every pairing with \(R_X(x)\) to the finite hypothesis. If a
  cocycle vanishes on every cycle, define its primitive first on boundaries
  by choosing a preimage; well-definedness uses cycle vanishing. AC supplies
  one complement of the boundary subspace, across which this primitive extends
  by zero, proving that the cocycle is a coboundary.
- Choice/boundaries: the finite face pairing is ordered by the displayed
  finite occurrences and needs no choice. AC is used only for the complement
  of the possibly infinite-dimensional boundary subspace. Empty, zero,
  output degree zero, input degree zero, one-vertex, and degenerate-simplex
  cases are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict complete
  batch-5 proof-contract pass for all 20 current entries. Manifest and
  coverage registrations are present.
- Decision class: this supplier was created and fully authored during the
  dispatch, so it is intentionally not sent through Step 3 self-review.

Current item: thm-adem-relations-for-steenrod-squares. Next action: repair its
manifest to consume the finite high-degree calculation, the cellular/singular
comparison, Cartan descent with the circle generator, naturality, finite-cycle
detection, Kunneth injectivity, and AC; then author the complete global proof.

### 18. thm-adem-relations-for-steenrod-squares — content complete

- Exact claim/conventions: assuming AC, for positive integers $0<a<2b$,
  every singular mod-two class satisfies
  $Sq^aSq^b=\sum_{j=0}^{\lfloor a/2\rfloor}
  \binom{b-j-1}{a-2j}Sq^{a+b-j}Sq^j$. Coefficients are reduced modulo two;
  negative and oversized lower binomial indices and outside-range squares are
  zero.
- Sources reread in complete bounded chunks: Steenrod--Epstein Chapter VII
  Lemma 6.8, printed page 114 (the full circle-generator descent), and Chapter
  VIII Convention 1.4 and Theorem 1.5 through its mod-two proof, printed pages
  118--119 (PDF pages 124--125).
- Scaffold repairs: added the finite-cellular/singular comparison and
  finite-cycle detection suppliers; added external Cartan, square
  normalization/naturality, cohomological Kunneth, cellular--singular homology,
  and AC as direct dependencies; changed the proof provenance to ai-altered;
  and propagated AC in the Statement.
- Dependencies examined: the high-degree double-power calculation; the
  cellular/singular square comparison; finite-cycle detection; external
  Cartan; normalization, top square, instability, and naturality; additive
  cohomological Kunneth under finite-free homology; cellular--singular homology;
  and AC.
- Proof: the comparison isomorphism transfers the cyclic identity to singular
  squares in each degree $2^s-1+b$. The boundary-of-a-triangle cellular model
  computes $H_*(S^1;\mathbb F_2)$ and constructs its nonzero degree-one
  cohomology class. External Cartan and instability give
  $P(u\times v)=P(u)\times v$ for every two-square composite in the residual.
  Kunneth makes cross product with $v$ injective, yielding one-degree descent.
  Finite iteration covers every degree on finite regular complexes, and the
  finite-cycle detection supplier extends the natural residual to every space.
- Choice/boundaries: AC is used exactly through the finite cyclic carrier
  calculations, the cellular/singular carrier and mapping-cone comparison,
  the detection complement, and Kunneth additive bijectivity. The circle,
  least high degree, products, and finite descent are prescribed. Empty, zero,
  point, degree-zero, both summation endpoints, binomial conventions,
  outside-range operations, and singular degeneracies are explicit; no iff is
  asserted.
- Checks: item precheck pass; rendercheck pass; strict item contract pass; full
  batch-5 contract pass for all 21 current entries. Content policy remains
  expectedly red only because later batch-5 items are not yet authored.
- Decisions: the Bocksteins pair scope was refreshed as sufficient after the
  supplier additions. A repaired item receipt was recorded with confidence 1
  and all nine direct dependencies.
- Open gap: none local.

Current item: prop-first-steenrod-square-is-the-mod-two-bockstein. Next action:
audit the integral-lift scaffold against the exact cup-$i$ coboundary identity,
then author the cochain comparison without importing the completed Adem
relation.

### 18a. lem-bockstein-square-parity-recurrence — added supplier complete

- Reason added: the existing cup-$i$ supplier is explicitly mod two, whereas
  the proposed $Sq^1=\beta$ lift argument divides an integral coboundary by
  two. Treating the mod-two identity as integral would be invalid.
- Exact claim/conventions: for $x\in H^p(-;\mathbb F_2)$ and
  $0\leq j\leq p$, the mod-two Bockstein satisfies
  $\beta Sq^j=Sq^{j+1}$ for even $j$ and $\beta Sq^j=0$ for odd $j$.
  At $j=p$, $Sq^{p+1}$ is the prescribed zero. The proof is choice-free.
- Source read in a complete bounded chunk: Mosher--Tangora Chapter 2's signed
  integral cup-$i$ construction and full coboundary calculation, printed pages
  15--16 (PDF pages 25--26), and Chapter 3 Lemma 1 with its entire
  divide-by-two parity proof, printed page 23 (PDF page 33).
- Dependencies examined: coherent uniqueness of mod-two higher diagonals,
  cup-$i$ evaluation, the square definition and independence, the mod-two
  cup-$i$ coboundary identity, the canonical cyclic Bockstein lift, and
  Alexander--Whitney/Eilenberg--Zilber.
- Proof: the alternating integral $C_2$ resolution and fixed integral simplex
  contractions construct signed integral higher diagonals. Their chain-map
  equation gives the exact four-term signed cup-$i$ identity. For the
  zero/one lift $c$ with $\delta c=2h$, dividing
  $\delta(c\smile_{p-j}c)$ by two leaves two $h$ terms plus a
  cup-$(p-j-1)$ square exactly when $j$ is even. The $h$ terms are the
  coboundary of $a\smile_{p-j+1}\bar h$ modulo two.
- Choice/boundaries: the contractions and residue lift are prescribed and
  finite on each simplex; no AC is used. Empty, zero, $p=0$, $j=0$, $j=p$,
  both parities, cup-$(-1)$, and degenerate singular simplices are explicit.
- Checks: precheck pass; rendercheck pass; strict item contract pass; complete
  batch-5 contract pass for all 22 current entries. Manifest and coverage
  registrations are present.
- Decision class: created and fully authored during this dispatch; no Step 3
  self-review receipt was made.

Current item: prop-first-steenrod-square-is-the-mod-two-bockstein. Next action:
consume the even case at $j=0$ together with the already proved
$Sq^0=\mathrm{id}$, propagate no unnecessary AC, and author/check the promised
operation equality.

### 19. prop-first-steenrod-square-is-the-mod-two-bockstein — content complete

- Exact claim/conventions: for every space, nonnegative degree, and mod-two
  class, $Sq^1=\beta$ for
  $0\to\mathbb F_2\xrightarrow2\mathbb Z/4\to\mathbb F_2\to0$.
  The statement and proof are choice-free.
- Sources reread: Steenrod--Epstein Chapter VII section 6, Theorem 6.7,
  printed pages 113--114; Mosher--Tangora Chapter 3 Lemma 1 and its $j=0$
  consequence, printed page 23.
- Scaffold repairs: replaced the invalid direct appeal to the mod-two
  cup-$i$ identity with the new signed integral parity supplier; added the
  independent $Sq^0=\mathrm{id}$ normalization; retained the Bockstein
  definition for its exact cyclic lift; changed proof provenance to
  ai-altered.
- Proof: the even case $j=0$ gives
  $\beta Sq^0(x)=Sq^1(x)$, while normalization gives $Sq^0(x)=x$.
- Choice/boundaries: the zero/one cyclic residue lift is canonical. Empty,
  zero, point, degree zero, $j=0$, and singular degeneracies are explicit; no
  iff is asserted.
- Checks: item precheck pass; rendercheck pass; strict item contract pass;
  complete batch-5 contract pass for all 23 current entries.
- Decisions: pair scope refreshed as sufficient; repaired receipt recorded
  with confidence 1 and all three direct dependencies.
- Open gap: none local.

Current item: def-total-steenrod-square. Next action: audit its target grading
and finiteness convention, then author the definition using instability and
Cartan without introducing a completion.

### 20. def-total-steenrod-square — content complete

- Exact claim/conventions: on
  $H^*(X;\mathbb F_2)=\bigoplus_{n\geq0}H^n(X;\mathbb F_2)$,
  $Sq(x)=\sum_iSq^i(x)$ is elementwise finite, natural, additive, unital, and
  multiplicative as an ungraded ring map. It is neither degree-preserving nor
  valued in a completion.
- Source read: Mosher--Tangora Chapter 3, the total-square definition and
  complete ring-homomorphism proof, printed page 25 (PDF page 35); the
  scaffold's Hatcher section 4.L locator was retained.
- Scaffold repair: added the missing additivity/naturality supplier and made
  the ordinary direct-sum target and no-completion convention explicit.
- Proof: instability bounds the inner sum and direct-sum support bounds the
  outer sum. Componentwise naturality/additivity are immediate from the
  component operations. Summing the finite Cartan identities proves
  multiplicativity, while $Sq^0(1)=1$ and positive instability prove unit
  preservation.
- Choice/boundaries: no AC or infinite rearrangement is used. Empty, zero,
  point, zero/one, homogeneous endpoints, finite nonhomogeneous support, and
  singular degeneracies are explicit.
- Checks: item precheck pass; rendercheck pass; strict item contract pass;
  complete batch-5 contract pass for all 24 current entries.
- Decisions: pair scope refreshed as sufficient; repaired receipt recorded
  with confidence 1 and all three direct dependencies.
- Open gap: none local.

Current item: def-wu-classes-of-a-closed-manifold. Next action: inspect the
duality supplier's exact compactness, orientation-system, and AC hypotheses
and state the unique representing classes with degree endpoints explicit.

### 21. def-wu-classes-of-a-closed-manifold — content complete

- Exact claim/conventions: assuming AC, every possibly empty or disconnected
  closed topological $n$-manifold has unique degreewise classes $v_k$ for
  $0\leq k\leq n$ representing
  $x\mapsto\langle Sq^k x,[M]_2\rangle$ under the mod-two cup pairing;
  $v_k=0$ outside that range and $v=\sum_{k=0}^n v_k$. Moreover $v_0=1$
  and instability gives $v_k=0$ when $2k>n$.
- Source repair and complete read: the scaffold's Mosher--Tangora Chapter 4
  locator is false (that chapter is the Steenrod algebra). Replaced it with
  Husemöller--Joachim--Jurčo--Schottenloher, *Basic Bundle Theory and
  K-Cohomology Invariants*, Chapter 11 Definition 5.2 and the entire displayed
  pairing calculation on printed page 132. The fetched 356-page PDF has
  5,870,693 bytes and SHA-256 prefix `c109d02c0bdab419`; coverage records it.
- Scaffold repairs: propagated the perfect-pairing supplier's AC assumption;
  added AC and square normalization/instability as direct dependencies; made
  the empty/disconnected and outside-range conventions explicit; corrected
  proof provenance and source metadata.
- Dependencies examined: canonical mod-two orientation and finite components;
  perfect Poincaré cup pairing; square additivity; normalization/instability;
  and AC.
- Verification: additivity makes evaluation after $Sq^k$ a linear functional.
  The first adjoint of the perfect pairing is an isomorphism, so it has exactly
  one representing class. Normalization identifies $v_0$ with the unit, and
  instability plus pairing injectivity kills every $v_k$ with $2k>n$.
- Choice/boundaries: AC is used exactly through the published perfect-pairing
  supplier and nowhere else. Empty, zero, point, disconnected, degree-zero,
  $k=0,n$, outside-range, high-degree, degenerate-singular-simplex, and both
  non-applicable iff cases are explicit.
- Checks: item precheck pass; rendercheck pass; strict item contract pass; full
  batch-5 contract pass for all 25 current entries. Coverage, manifest, item,
  and contract registrations are present.
- Decisions: pair scope refreshed as sufficient; repaired item receipt recorded
  with confidence 1 and all five direct dependencies.
- Open gap: none local.

Current item: lem-cyclic-p-fold-power-construction. Next action: audit its
existing scaffold against the already authored free-resolution, external-power,
and wreath-symmetry suppliers, then author exactly the residual diagonal,
transfer, coefficient, and normalization interface needed by the odd-primary
operations.

### 21a. finite-detection supplier — repaired for every prime field

- Exact repair: `lem-natural-singular-cohomology-identities-are-detected-on-finite-regular-complexes`
  now fixes an arbitrary prime $p$ and detects natural identities on
  $H^*(-;\mathbb F_p)$, rather than only on mod-two cohomology.
- Defect in the earlier proof: pairing equal boundary-face occurrences uses
  characteristic two and cannot realize a general mod-$p$ cycle.
- Repaired proof: for a finite cycle $z=\sum a_r\sigma_r$, form the finite
  Delta complex generated by its support simplices and every iterated face,
  identify occurrences carrying the same singular-simplex label, and retain
  the coefficients $a_r$. Each lower-cell boundary coefficient is literally
  the corresponding coefficient in $\partial z$, so the weighted top chain
  is a cycle. Two barycentric subdivisions give the finite regular model;
  evaluation detection over the field still uses AC only for one vector-space
  complement.
- Boundaries: arbitrary nonzero vertex weights, zero cycle, $n=0$, input
  degree zero, degenerate singular labels, empty space, and choice use are
  explicit.
- Checks: repaired supplier precheck pass; rendercheck pass; strict supplier
  contract pass; full batch-5 contract pass for all 25 current entries.
- Decisions: because this supplier was created during this dispatch it remains
  outside Step 3 self-review. Pair scope was refreshed as sufficient. Its
  existing mod-two Adem consumer was rechecked and its repaired confidence-1
  receipt refreshed against the stronger current dependency.

Current item: lem-cyclic-p-fold-power-construction. Next action: use the
finite cellular coefficient construction plus the generalized finite-detection
supplier to author the global singular coefficient operations and their exact
range, parity, and top-index normalization.

### 21b. lem-cyclic-p-fold-power-construction — added supplier complete

- Exact claim/conventions: assuming AC, the cyclic resolution gives natural
  additive singular operations
  $D_j:H^q(-;\mathbb F_p)\to H^{pq-j}(-;\mathbb F_p)$, zero for
  $j<0$ or $j>(p-1)q$, with $D_0(x)=x^p$. The item proves the finite
  cellular comparison, the odd-primary normalizer congruences, the external
  product formula, the positive-convention identities
  $\beta D_{2r}=-D_{2r-1}$ and $\beta D_{2r-1}=0$, and
  $D_{(p-1)q}(x)=(-1)^{mq(q+1)/2}(m!)^qx$ for $m=(p-1)/2$; the mod-two top
  scalar is one.
- Source reread after resumption: Steenrod--Epstein Chapter VII sections 2--5,
  printed pages 99--112, including the full construction, transfer, range,
  Bockstein, product, recurrence, and two-edge-circle calculation; and Chapter
  VIII section 2, printed pages 122--124, for the arbitrary-space extension.
  The exact circle locator is VII section 5, Lemmas 5.2--5.3, printed pages
  111--112: at resolution degree $p-1$, the carrier sends
  $e_{p-1}\otimes(J_1-J_2)$ to $m!(J_1^p-J_2^p)$, and evaluation supplies
  the $(-1)^m$ sign.
- Dependencies examined: the local finite equivariant power/carrier theorem;
  cyclic resolution, diagonal, coefficient algebra and transfer; generalized
  finite detection; cellular--singular homology; Alexander--Whitney/shuffle;
  homotopy invariance; additive Kunneth; the cyclic Bockstein definition,
  derivation and naturality; and AC.
- Proof: universal-simplex induction constructs a strictly natural singular
  equivariant diagonal; interval carriers prove representative independence.
  Transfer kills mixed tensor words and proves additivity. An AC-split mapping
  cone compares the singular and cellular models. Skeleton/sphere reduction
  proves the sharp range, the normalizer action proves the permitted indices,
  the cyclic diagonal proves the external formula, and the total-class
  Bockstein calculation fixes the library's sign. The exact circle coefficient
  and Kunneth recurrence give the nonzero top scalar; finite detection extends
  the one-input finite identities to all spaces.
- Choice/boundaries: AC is exposed and used exactly for universal carrier
  fillings, the cellular--singular cone splitting, Kunneth bijectivity, and the
  detector complement. Empty, zero, point, $q=0$, $j=0$, the top index,
  negative/oversized indices, both input and coefficient parities, $r=0$,
  degenerate singular simplices, zero/point product factors, and both finite-sum
  endpoints are explicit; no iff is asserted.
- Checks: direct explicit item precheck pass; rendercheck pass; strict item
  proof-contract pass; strict complete batch-5 proof-contract pass for all 26
  current entries. Manifest and coverage registrations are present, and
  `git diff --check` is clean for the owned item/manifest/contract/coverage
  files.
- Decisions: the pair scope was refreshed as sufficient after the inventory
  addition. This supplier was created and fully authored during the dispatch,
  so it is intentionally not sent through Step 3 self-review.
- Open gap: none local.

Current item: def-mod-p-reduced-power-operations. Next action: audit the
normalizing exponent and inverse factorial against the proved top coefficient
and the source's internally inconsistent printed formula, then author and
check the definition without changing its promised ID or claim.

### 22. def-mod-p-reduced-power-operations — content complete

- Exact claim/conventions: assuming AC and \(p\) odd, for
  \(m=(p-1)/2\) and \(x\in H^q(X;\mathbb F_p)\),
  \(P^i(x)=(-1)^{i+m(q^2+q)/2}(m!)^{-q}
  D_{(q-2i)(p-1)}(x)\) for \(i\geq0\), while negative \(P^i\) and
  \(\beta P^i\) are zero. The positive mod-\(p\) Bockstein defines
  \(\beta P^i\); \(P^0=\mathrm{id}\), and \(P^i(x)=0\) for \(2i>q\).
- Source reread: Steenrod--Epstein VII Definition 6.1 and Lemmas 6.3--6.4,
  printed pages 112--113. The printed Definition 6.1 has the positive
  factorial exponent, but Lemma 6.4 uses the inverse exponent. The correction
  is forced independently by \(p=5,q=1\): the positive exponent would multiply
  the top coefficient by \(2\cdot2=-1\), contradicting \(P^0=\mathrm{id}\).
- Scaffold repairs: created the missing item page; propagated the cyclic
  supplier's AC assumption and added the direct AC dependency; added the
  proved Bockstein-independence prerequisite; made the negative-index,
  strict-instability, top-index, grading, and cyclic positive-Bockstein
  conventions explicit; retained the inverse-factorial owner correction.
- Dependencies examined: the fully authored cyclic \(p\)-fold construction,
  Bockstein definition, Bockstein lift/representative independence, and AC.
- Verification: \(m!\) is a unit because \(1,\ldots,m\) are nonzero modulo
  \(p\); substituting the cyclic index gives output degree
  \(q+2i(p-1)\). At \(i=0\), the inverse factorial and duplicate sign cancel
  the top cyclic coefficient. Negative \(i\) gives an oversized cyclic index;
  \(2i>q\) gives a negative one; and \(2i=q\) is the legitimate \(D_0=x^p\)
  endpoint. The well-defined Bockstein composition raises degree by one.
- Choice/boundaries: no new selection is made; AC is propagated exactly from
  the singular cyclic supplier, while the cyclic Bockstein uses canonical
  residue lifts. Empty, zero, point, zero/one, \(q=0\), \(i<0\), \(i=0\),
  \(2i=q\), \(2i>q\), and degeneracies are explicit; no iff is asserted.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass; strict complete batch-5 contract pass for all 27 current entries;
  `git diff --check` clean for the item, manifest, and contract.
- Decisions: pair scope refreshed as sufficient; repaired confidence-1 item
  receipt recorded with all four direct dependencies.
- Open gap: none local.

Current item:
thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations.
Next action: audit the two odd-primary Adem coefficient formulas against the
full Chapter VIII calculation and then author the promised construction,
normalization, Cartan, and both Adem relations in dependency order.

### 23. thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations — content complete

- Exact claim/conventions: assuming AC and odd prime $p$, the normalized
  $P^i$ and $\beta P^i$ are natural stable additive operations of the stated
  degrees; $P^0=\mathrm{id}$, strict instability and the top power hold, as
  does Cartan. Both odd-primary Adem relations are proved for nonnegative
  $a,b$ under, respectively, $a<pb$ and $a\leq pb$, with lower-index and
  empty-sum conventions explicit.
- Complete source read: Steenrod--Epstein VII sections 4--6, printed pages
  104--114, and VIII sections 1--2, printed pages 115--124. In VIII section 1
  this included the double cyclic construction, row--column transposition
  sign, all four parity rows, Convention 1.4, both high-degree substitutions,
  the base-$p$ coefficient reductions, and Lemmas 1.8--1.9; VIII section 2
  supplied the original arbitrary-space extension context.
- Scaffold repairs: created the missing item page; propagated AC; added the
  cyclic algebra, Bockstein naturality/stability and derivation, mod-$p$
  detector, Kunneth, stable-operation, cone-suspension and pair-sequence
  prerequisites. The manifest now quantifies $a,b$, declares empty sums, and
  records all actual dependencies.
- Proof: finite inverse-pairing proves Wilson and the top-power normalization.
  Full factorial/Koszul sign cancellation proves Cartan. Top power, instability,
  Cartan and $\beta^2v=0$ calculate $P^j,\beta P^j$ on
  $\mathbb F_p[u]\otimes\Lambda(v)$. The normalized total cyclic class is
  expanded into even--even, even--odd, odd--even and odd--odd rows; the wreath
  symmetry gives the two pre-Lucas coefficient identities. Degrees
  $2(1+\cdots+p^{s-1})+2b$ and $2p^s+2b$ yield the first and second relations.
  Circle/Kunneth descent covers every finite input degree, and the mod-$p$
  detector covers arbitrary spaces.
- Stability: the cone-pair suspension pulls back to signed cross product with
  the circle generator; Kunneth makes this pullback injective. External Cartan
  and circle instability prove $P^i\sigma=\sigma P^i$, and Bockstein stability
  gives the composite case.
- Choice/boundaries: AC is used only through the cyclic/wreath carriers,
  finite detector, and additive Kunneth isomorphism. Empty, zero, point,
  zero/one, reduced degree zero, negative operations, $2i=q$, $2i>q$,
  $a=0$, $b=0$, $a=pb$ for the second relation, both sum endpoints, empty
  sums, invalid binomials and degeneracies are explicit; no iff is asserted.
- Checks: direct explicit item precheck pass; rendercheck pass; strict item
  contract pass; strict complete batch-5 proof-contract pass for all 28
  current entries; diff whitespace check pass.
- Decisions: pair scope refreshed as sufficient; repaired confidence-1 item
  receipt recorded with all thirteen direct dependencies.
- Open gap: none local.

Current item: ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space.
Next action: begin the B page in manifest order, audit its cellular integral
and mod-two cochain calculation, and author an explicit witness showing the
Bockstein detects the promised torsion class.

### 24. ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space — content complete

- Exact claim/conventions: assuming AC, for the unique nonzero
  \(a\in H^1(\mathbb {RP}^n;\mathbb F_2)\), with integer \(n\ge2\), the
  integral Bockstein \(\beta_{\mathbb Z}(a)\) generates
  \(H^2(\mathbb {RP}^n;\mathbb Z)=\mathbb Z/2\), while the mod-two
  Bockstein satisfies \(\beta_2(a)=Sq^1(a)=a^2\), the nonzero mod-two
  degree-two class.
- Source reread after resumption: Hatcher, *Algebraic Topology*, section 3.E,
  complete definition and Examples 3E.1--3E.2, printed pages 303--305. The
  passage defines both coefficient Bocksteins, records
  \(\beta_2=\rho\beta_{\mathbb Z}\), computes the odd-to-even Bockstein on
  \(K(\mathbb Z/m,1)\), and derives the lift/product formula.
- Scaffold repair: the original statement quantified an arbitrary \(a\), which
  falsely included zero; it now names the unique nonzero class. The proposed
  cellular-cochain lift had only a cellular-homology supplier and no
  cellular--singular cohomology comparison. It was replaced by a singular
  lift/divide proof using the published integral and mod-two singular
  cohomology computations. AC and Bockstein representative independence were
  added explicitly; the unused cellular-homology edge was removed.
- Dependencies examined: Bockstein definition and independence; integral
  projective-space cohomology from UCT; the mod-two projective-space ring;
  \(Sq^1=\beta_2\); the top-square formula; and AC.
- Verification: for a zero/one integral lift \(\widehat c\) of a cocycle
  representing \(a\), write \(\delta\widehat c=2h\). If \([h]=0\), subtract
  twice an integral primitive; the result is an integral one-cocycle lifting
  \(c\). Since \(H^1(\mathbb {RP}^n;\mathbb Z)=0\), reduction makes \(c\) a
  mod-two coboundary, a contradiction. Thus \([h]\ne0\), and the target
  \(\mathbb Z/2\) makes it a generator. Independently,
  \(\beta_2(a)=Sq^1(a)=a^2\), nonzero by the truncated polynomial ring.
- Choice/boundaries: AC is inherited exactly from the two published
  projective-space cohomology computations; the zero/one residue lift is
  canonical. The proof treats \(n=2\), excludes \(n=0,1\) and the zero input,
  records nonemptiness and singular degeneracies, and asserts no iff.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass; strict complete batch-5 contract pass for all 29 current entries;
  diff whitespace check pass. Coverage, manifest, item, and contract
  registrations are present. The early batch-wide content-policy run reports
  only missing files for the 31 items still unauthored in the combined
  batch-5/6 manifest scope; it will be rerun after those items are authored.
- Decisions: pair scope refreshed as sufficient after the statement and
  dependency repair; repaired item receipt recorded with confidence 1 and all
  seven direct dependencies.
- Open gap: none local.

Current item: ex-steenrod-squares-on-real-projective-space. Next action: audit
the total-square/binomial calculation, including finite truncation and the
degree/index endpoints, then author its explicit expansion.

### 24a. lem-mod-two-cohomology-ring-of-infinite-real-projective-space — added supplier complete

- Exact claim/conventions: assuming AC,
  \(H^*(\mathbb {RP}^{\infty};\mathbb F_2)=\mathbb F_2[a]\), \(|a|=1\).
  Restriction to \(\mathbb {RP}^n\) is an isomorphism through degree \(n\);
  it sends \(a\) to the finite generator for \(n\ge1\) and to zero for
  \(n=0\).
- Complete source read: Hatcher, *Algebraic Topology*, Theorem 3.19 and its
  full proof, printed pages 220--221, including the finite relative-product
  calculation and the final passage to \(\mathbb {RP}^{\infty}\) by skeletal
  restriction isomorphisms.
- Need for supplier: the next preserved example promises a calculation on
  \(\mathbb {RP}^{\infty}\), while the only published ring supplier states
  the finite-\(n\) truncated rings. Treating the infinite ring as already
  supplied would have left a load-bearing gap.
- Dependencies examined: the actual projective CW filtration and mod-two
  boundary calculation; arbitrary-CW cellular--singular homology comparison;
  cellular-map naturality; natural field duality; finite projective-space
  rings; cup-product naturality; and AC.
- Proof: the infinite cellular complex has one \(\mathbb F_2\) in every
  degree and zero differential, and each finite skeletal inclusion is the
  identity in its existing degrees. Natural field duality gives one-dimensional
  cohomology in every degree and restriction isomorphisms. The unique
  degree-one class restricts to every finite generator, so each power is
  detected as nonzero on a sufficiently large finite skeleton. One-dimensional
  graded pieces then make polynomial evaluation bijective.
- Choice/boundaries: AC is propagated only from natural field duality and the
  finite ring supplier. The zero skeleton, unit, zero class, arbitrary high
  degree, lack of a largest skeleton, nonemptiness, singular degeneracies and
  both non-applicable iff cases are explicit.
- Checks: explicit supplier precheck pass; rendercheck pass; strict supplier
  contract pass; strict complete batch-5 contract pass for all 30 current
  entries; diff whitespace check pass. Manifest, coverage, item and contract
  registrations are present.
- Decisions: pair scope refreshed as sufficient after the inventory addition.
  This supplier was created and fully authored during this dispatch, so it is
  intentionally not sent through Step 3 self-review.
- Open gap: none local.

Current item: ex-steenrod-squares-on-real-projective-space. Next action: use
the new infinite-ring supplier, total-square definition, Cartan, normalization
and finite restrictions to derive the coefficient formula and every
finite-truncation case.

### 25. ex-steenrod-squares-on-real-projective-space — content complete

- Exact claim/conventions: assuming AC, for
  \(H^*(\mathbb {RP}^{\infty};\mathbb F_2)=\mathbb F_2[a]\), \(|a|=1\),
  and integers \(i,j\ge0\),
  \(Sq^i(a^j)=\binom ji a^{j+i}\), with the coefficient reduced modulo two.
  On \(\mathbb {RP}^n\) the identical formula holds in
  \(\mathbb F_2[a_n]/(a_n^{n+1})\), so it vanishes when \(i>j\) or
  \(j+i>n\).
- Complete source read: Hatcher, *Algebraic Topology*, section 4.L, the total
  operation discussion, formula (*) and its complete derivation, printed
  pages 490--491. The scaffold's printed-page locator 499--500 was incorrect
  and is repaired in the manifest, item, and coverage.
- Scaffold repairs: added the fully authored infinite-projective-space ring
  supplier, total-square definition, Steenrod naturality, cup-product
  naturality and AC; removed the unused \(Sq^1=\beta\) edge. Quantifiers,
  reduction of binomial coefficients, and finite quotient conventions are
  explicit.
- Dependencies examined: total square; normalization, instability and top
  square; Cartan; Steenrod and cup-product naturality; infinite and finite
  projective-space rings; and AC.
- Calculation: \(Sq(a)=a+a^2\). Summing the finite Cartan identities makes
  the total square multiplicative, so
  \(Sq(a^j)=(a+a^2)^j=\sum_{r=0}^j\binom jr a^{j+r}\). Its degree-\(j+i\)
  component is the promised formula. Pullback to a finite skeleton commutes
  with squares and products, and the quotient relation gives exact
  truncation.
- Choice/boundaries: AC is inherited only from the two ring suppliers. The
  proof checks \(j=0\), \(i=0\), \(i=j\), \(i>j\), \(n=0\), \(j>n\),
  \(j+i=n\) versus \(j+i>n\), zero, point, nonemptiness, singular
  degeneracies, finite sums and both non-applicable iff cases.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass; strict complete batch-5 contract pass for all 31 current entries;
  diff whitespace check pass. Manifest, coverage, item and contract
  registrations are present.
- Decisions: pair scope refreshed as sufficient; repaired item receipt
  recorded with confidence 1 and all eight direct dependencies.
- Open gap: none local.

Current item: ex-steenrod-squares-on-complex-projective-space-mod-two. Next
action: audit its even-generator total-square calculation and finite
truncation, then author the coefficient computation without importing the
odd-primary formula.

### 25a. lem-mod-two-cohomology-rings-of-complex-projective-spaces — added supplier complete

- Exact claim/conventions: assuming AC,
  \(H^*(\mathbb {CP}^n;\mathbb F_2)=
  \mathbb F_2[c_n]/(c_n^{n+1})\), where \(c_n\) is the mod-two reduction
  of the normalized integral degree-two generator, and
  \(H^*(\mathbb {CP}^{\infty};\mathbb F_2)=\mathbb F_2[c]\).
  Odd groups vanish, standard restrictions preserve generators, and
  restriction to \(\mathbb {CP}^n\) is an isomorphism through degree \(2n\).
- Complete source read: Hatcher, *Algebraic Topology*, Theorem 3.19 and its
  full proof, printed pages 220--221, including the complex-projective case
  and passage from finite skeleta to the infinite space.
- Need for supplier: the preserved consumer claims both finite and infinite
  mod-two rings, while its only scaffold supplier was the finite integral
  ring. Neither mod-two coefficient reduction nor the infinite ring was
  supplied.
- Dependencies examined: complex projective cellular homology for arbitrary
  coefficients; arbitrary-CW cellular comparison and cellular-map naturality;
  field duality; the normalized finite integral ring; singular coboundary and
  front/back cup formulas; cup-product naturality; and AC.
- Proof: the infinite even-cell complex has zero differential and finite
  inclusion maps are identities through their dimensions. Field duality gives
  even one-dimensional cohomology and odd vanishing. Valuewise mod-two
  reduction commutes with coboundary and cup product. Since each integral
  \(u_n^k\) evaluates \(+1\) on the standard \(\mathbb {CP}^k\), its
  reduction evaluates \(1\), proving every finite \(c_n^k\) nonzero. Infinite
  powers are detected on finite skeleta.
- Choice/boundaries: AC is inherited only from field duality and the
  published integral ring. The proof treats \(n=0\), \(k=0,n,n+1\),
  unbounded degree, unit, zero, odd groups, nonemptiness, singular
  degeneracies and both non-applicable iff cases.
- Checks: explicit supplier precheck pass; rendercheck pass; strict supplier
  contract pass; strict complete batch-5 contract pass for all 32 current
  entries; diff whitespace check pass. Manifest, coverage, item and contract
  registrations are present.
- Decisions: pair scope refreshed as sufficient after the inventory addition.
  This supplier was created and fully authored during this dispatch, so it is
  intentionally not sent through Step 3 self-review.
- Open gap: none local.

Current item: ex-steenrod-squares-on-complex-projective-space-mod-two. Next
action: derive its total square from the even-degree target groups and the top
square, extract all even components, prove odd components vanish, and restrict
to finite skeleta.

### 26. ex-steenrod-squares-on-complex-projective-space-mod-two — content complete

- Exact claim/conventions: assuming AC, for
  \(H^*(\mathbb {CP}^{\infty};\mathbb F_2)=\mathbb F_2[c]\), \(|c|=2\),
  and integers \(i,j\geq0\),
  \(Sq^{2i}(c^j)=\binom ji c^{j+i}\), with the coefficient reduced modulo
  two; every odd square is zero. The same formulas hold for \(c_n\) in
  \(\mathbb F_2[c_n]/(c_n^{n+1})\), including zero when \(i>j\) or
  \(j+i>n\).
- Complete source read: Hatcher, *Algebraic Topology*, section 4.L, the total
  operation discussion, formula (*) and the projective-space specialization,
  printed pages 490--491. The scaffold locator 499--500 was incorrect and is
  repaired in the manifest, item and coverage.
- Scaffold repairs: added the fully authored mod-two finite/infinite
  complex-projective-space ring supplier, total-square definition, Steenrod
  and cup-product naturality, and AC. Quantifiers, coefficient reduction, odd
  indices and finite quotient conventions are explicit.
- Dependencies examined: total square; normalization, instability and top
  square; Cartan; Steenrod and cup-product naturality; the new mod-two
  projective-space ring supplier; and AC.
- Calculation: odd cohomology vanishing gives \(Sq^1(c)=0\), while
  normalization and the top-square property give \(Sq(c)=c+c^2\). Finite
  total Cartan then gives
  \(Sq(c^j)=(c+c^2)^j=\sum_{q=0}^j\binom jq c^{j+q}\). Comparing
  homogeneous degrees proves every even formula and every odd vanishing
  assertion. Natural restriction to \(\mathbb {CP}^n\) and
  \(c_n^{n+1}=0\) give exact truncation.
- Choice/boundaries: AC is inherited only from the ring supplier. The proof
  treats \(j=0\), \(i=0\), \(i=j\), \(i>j\), odd index one,
  \(n=0\), \(j>n\), the first truncated exponent, zero inputs,
  nonemptiness, singular degeneracies, finite sums and both non-applicable
  iff cases.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass; strict complete batch-5 contract pass for all 33 current entries;
  diff whitespace check pass. Manifest, coverage, item and contract
  registrations are present.
- Decisions: pair scope refreshed as sufficient; repaired item receipt
  recorded with confidence 1 and all seven direct dependencies.
- Open gap: none local.

Current item: inspect the next preserved batch-5 B-page scaffold in manifest
order, reread its exact dependencies and full cited argument, and author it
before advancing.

### 27. ex-adem-relation-sq-one-sq-one-equals-zero — content complete

- Exact claim/conventions: for every space \(X\), integer \(n\geq0\), and
  \(x\in H^n(X;\mathbb F_2)\), \(Sq^1Sq^1(x)=0\). The proof is
  choice-free and deliberately independent of the general Adem theorem.
- Complete source read: Hatcher, *Algebraic Topology*, section 3.E, the
  coefficient-sequence comparison and the complete \(\beta^2=0\) paragraph,
  printed pages 303--305, especially page 305.
- Scaffold repair: the preserved statement now has explicit space and degree
  quantifiers and records its choice status. The strategy is expanded from an
  exactness slogan to the actual cochain calculation.
- Dependencies examined: the definitions of the integral and mod-two
  Bocksteins and the proved identity \(Sq^1=\beta\).
- Calculation: for a zero/one integer lift \(\widehat c\) of a mod-two
  cocycle, \(\delta\widehat c=2h\) and \(\delta h=0\). Interpreting the same
  lift modulo four proves \(\beta=\rho\widetilde\beta\). An integral cocycle
  itself lifts its reduction and has zero coboundary, proving
  \(\widetilde\beta\rho=0\). Thus \(\beta^2=0\), and two substitutions of
  \(Sq^1=\beta\) prove the claim.
- Choice/boundaries: all lifts are canonical residues or an already given
  cocycle. Empty, zero, point/unit, degree zero, torsion-free division,
  singular degeneracies, lack of an upper endpoint and both non-applicable iff
  cases are explicit.
- Checks: explicit item precheck pass; rendercheck pass; strict item contract
  pass; strict complete batch-5 contract pass for all 34 current entries; diff
  whitespace check pass. The full-contract check caught an accidental
  textual edit to the preceding real-projective-space contract; only that
  contract's citations and derivations were regenerated from its unchanged
  item, after which both its focused check and the complete check passed.
- Decisions: pair scope refreshed as sufficient; repaired item receipt
  recorded with confidence 1 and both direct dependencies.
- Open gap: none local.

Current item: ex-wu-classes-of-a-closed-surface. Next action: read the complete
surface Wu-class argument and the exact orientation-local-system suppliers,
then verify whether the promised singular-simplex construction and
orientability biconditional are fully supported before authoring.

### 28. ex-wu-classes-of-a-closed-surface — escalated, not authored

- Exact claim/conventions audited: the preserved scaffold asserts for every
  closed connected topological surface that the degree-one Wu class equals the
  orientation character, vanishes exactly in the orientable case, and has no
  higher positive-degree companions.
- Complete source check: the cited Mosher--Tangora Chapter 4 Section 1 does not
  contain a Wu-class or surface self-intersection calculation. The complete
  chapter is *Application: The Hopf Invariant* (printed pp.33--38), and the
  complete OCR text contains no Wu-class section. Husemoller--Joachim--Jurco--
  Schottenloher, Chapter 11 Section 5, printed pp.132--133, states
  `w(M)=Sq(v)` for closed smooth manifolds but explicitly sends its proof to
  *Fibre Bundles* 18(8.2); it therefore confirms the missing theorem rather
  than supplying a local proof.
- Confirmed scaffold defects: the proposed singular-one-simplex cocycle begins
  by choosing a generator in every orientation fibre, so it requires AC and a
  direct `def-axiom-of-choice` dependency. More importantly, none of the
  declared suppliers proves the load-bearing identity
  `<x^2,[M]_2>=<w_1(M)x,[M]_2>` for all degree-one classes on an arbitrary
  closed topological surface. UCT and the definition of the orientation cover
  do not establish that identity.
- Proposed repair routes: add and fully prove an earlier
  `lem-surface-self-intersection-is-orientation-character`, including its
  triangulation/geometric-intersection input and explicit AC use; or supply the
  general Wu formula, tangent-bundle `w_1`/orientation-cover identification,
  and the topological-surface smoothability bridge. Either route is a
  substantial new prerequisite, so it is owner-held rather than a local
  definition-sized repair.
- Decision/checkpoint: an `escalate` item receipt was recorded with the five
  examined current dependency IDs and the bad locator/missing theorem as
  evidence. No item file or proof contract was fabricated, and no scope or
  completion claim was made.
- Open gap: owner resolution is required before this item can be authored.

Current item: cex-the-top-square-formula-does-not-define-all-lower-squares.
Next action: author explicit suspended-projective and sphere witnesses, prove
their nonzero/zero square calculations from the existing suspension and
cohomology computations, register the repaired dependencies and contract, and
run focused checks.

### 29. cex-the-top-square-formula-does-not-define-all-lower-squares — content complete

- Exact claim/conventions: assuming AC, with reduced cone-pair suspension,
  `x=sigma a` in reduced degree two of the suspension of `RP^2` and the
  nonzero degree-two sphere class `y` satisfy `x^2=y^2=0`, while
  `Sq^1(x)` is nonzero and `Sq^1(y)=0`. Thus equal degrees and equal top-square
  values do not determine a lower square.
- Scaffold repairs: replaced the invalid `ai-original` provenance tags by an
  `ai-generated` counterexample record with its generation risk/search fields;
  made AC explicit; and added the projective ring, sphere homology, field
  duality, and AC dependencies needed for every zero/nonzero assertion.
- Dependencies examined: Steenrod normalization/top square/stability; the
  `RP^2` Bockstein calculation; the finite `RP^2` ring; the Mayer--Vietoris
  sphere homology calculation; field duality; and AC.
- Calculation: the standard cone-pair cohomology suspension is an isomorphism.
  Hence stability sends the nonzero `Sq^1(a)=a^2` to nonzero
  `Sq^1(sigma a)=sigma(a^2)`. The degree-three `RP^2` group and the degree-four
  suspension group vanish; sphere homology plus field duality gives zero
  sphere cohomology in degrees three and four. The top-square identity then
  gives both zero squares.
- Choice/boundaries: AC is inherited exactly from the projective computations
  and field duality. Both witnesses are nonempty and nonzero; zero, unit,
  degenerate-simplex, exact degree endpoint, and both inapplicable iff cases
  are recorded in the proof and contract.
- Checks: focused explicit-path precheck pass; rendercheck pass; strict focused
  proof-contract pass with no warnings; diff whitespace check pass. Manifest,
  coverage, item and contract registrations are present.
- Decisions: pair scope refreshed as sufficient for resolved items while the
  Wu escalation remains explicit; repaired item receipt recorded at confidence
  1 with all six direct dependencies.
- Open gap: none local.

Current item: cex-steenrod-squares-are-not-integral-cohomology-operations.
Next action: repair the false proposed `Sq^1` obstruction by testing `Sq^2` on
`a^3` in `RP^infinity`, calculate the zero integral target by UCT, author its
contract, and run focused checks.

### 30. cex-steenrod-squares-are-not-integral-cohomology-operations — content complete

- Confirmed scaffold defect and repair: the proposed degree-one claim was
  false because the integral Bockstein is a natural integral-valued lift of
  `Sq^1`, and the proposed `RP^2` reduction map is not zero. The preserved
  high-level claim is repaired to the valid assertion that `Sq^2` has no
  integral-valued lift on all spaces; the false route is expressly excluded.
- Exact witness/calculation: for `u=a^3` in
  `H^3(RP^infinity;F_2)`, the proved projective formula gives
  `Sq^2(u)=binom(3,2)a^5=a^5`, nonzero. Integral projective homology gives
  `H_4=0` and `H_5=Z/2`; the degree-five integral UCT has zero Ext and Hom
  ends, hence `H^5(RP^infinity;Z)=0`. Any proposed integral value is zero and
  cannot reduce to `a^5`. Naturality is not needed for the contradiction.
- Complete sources: Hatcher Section 4.L, formula (*) and the projective-space
  specialization, printed pp.490--491; Miller Theorem 27.1 and complete proof,
  printed pp.73--74, through the existing UCT supplier.
- Dependencies examined: the real-projective Steenrod calculation; integral
  homology of infinite real projective space; topological UCT; coefficient-map
  singular cohomology; and AC.
- Choice/boundaries: AC is inherited exactly from the projective square formula
  and UCT. Nonempty, nonzero, unit, degenerate-simplex, exact index/target
  endpoints, both inapplicable iff cases, and the surviving `Sq^1` lift are
  explicit in the item and contract.
- Checks: focused explicit-path precheck pass; rendercheck pass; focused strict
  proof-contract pass with no warnings; diff whitespace check pass. Manifest,
  coverage, item and contract registrations are present.
- Decisions: pair scope refreshed after the dependency repair; repaired item
  receipt recorded at confidence 1 with all five direct dependencies.
- Open gap: none local.

### Bockstein pair aggregate checkpoint

- The A page is authored with all thirty registered A items in manifest order.
  Its prose distinguishes Bocksteins, the cup-i construction, the explicit
  Adem machinery, odd-primary powers, Wu classes, and the exact propagated AC
  uses.
- All thirty-one immutable-baseline items have current item decisions: thirty
  accepted or repaired and the surface Wu example owner-escalated. The six
  fully authored post-baseline suppliers remain in the workflow's special
  addition class and are registered in the manifest, coverage, contracts, and
  item files without a prohibited Step-3 self-review.
- Explicit paths for all thirty-six authored Bockstein item files plus the A
  page passed rendercheck; all thirty-two proof-bearing files passed precheck;
  the complete thirty-six-entry strict proof-contract check passed without
  errors or warnings.
- The B page cannot honestly be authored while
  `ex-wu-classes-of-a-closed-surface` has no sound item file. Its other six
  items are fully authored. Creating a page that silently omitted the promised
  Wu item or linked a nonexistent item would conceal the owner-held blocker.

Current item: wait for and integrate the owner-directed helper results for the
local-coefficients, batch-6, and Brauer pairs. Do not duplicate their assigned
edits; verify their completed claims and run the containing-batch checks after
integration.

## Provisional helper audit checkpoint

The host helpers remain active, so their pair-owned files are read-only to the
lead and none of the following is yet an acceptance decision.

- Helper b-1 has authored the first thirteen local-coefficient A items. Its
  path-order, left-monodromy, right deck-action, and intrinsic first-vertex
  boundary conventions have been checked and are coherent. A confirmed
  choice-sensitive repair remains for
  `def-homology-and-cohomology-with-local-coefficients`: over an arbitrary
  family of components, cohomology of a degreewise product complex cannot be
  identified with the product of the component cohomology groups in ZF merely
  by saying images are componentwise; simultaneously choosing primitives is a
  choice principle. Retain the globally defined intrinsic cochain complex and
  delete that product-cohomology assertion, or state and propagate the needed
  choice. The disconnected universal-cover coordinate paragraph in
  `def-singular-and-cellular-chain-complexes-with-local-coefficients` likewise
  needs to say explicitly that one basepoint per component is supplied. Its
  new supplier
  `lem-canonical-twisted-fundamental-classes-over-compact-subsets` also does
  not yet reproduce the load-bearing fourth step of Hatcher Lemma 3.27
  (printed pp. 236--238): for arbitrary compact `K`, one must separate the
  compact support of a representing cycle's boundary from `K`, cover `K` by
  finitely many closed balls disjoint from that support, and invoke the proved
  finite-union case. The draft instead treats intersections with chart balls
  as if they were convex and does not prove uniqueness. Its local generator
  is additionally mistyped as a double tensor; it should be the oriented
  local generator tensored once with `1`. This supplier must be repaired and
  rechecked before either duality theorem or the proposed Wu-class repair may
  consume it.
- Helper b-2 has completed and locally rendered the spectra pair and begun the
  obstruction pair. The corrected shift signs, stable-sphere grading, unstable
  commutator witness, and direction `Omega BG -> G` are mathematically sound.
  Its proof reflow left visible text defects in several spectra items: misplaced
  `[F1]` tokens, merged numbered steps, no dependency links in Facts blocks,
  and the literal `E_m,qquad g` in
  `prop-a-ring-prespectrum-gives-a-graded-product-on-stable-homotopy-groups`.
  These require post-handoff repair and regenerated exact-citation contracts.
  The new extension assertion in
  `def-homotopy-group-local-system-along-a-cellular-map` also needs a final
  choice audit: extension along the fundamental-groupoid equivalence is sound,
  but either its CW-coordinate construction must be explicit or an extension
  must remain supplied data rather than a choice-free constructed object.
- Helper b-3 has authored through the relative-projectivity vanishing lemma and
  added `lem-integral-mackey-and-higman-for-og-lattices`, which is genuinely
  needed because the published suppliers are for `kG`-modules rather than
  integral lattices. In `thm-krull-schmidt-for-og-lattices`, Step 2.1 currently
  uses the invalid general implication `x^n in J(E) => x in J(E)` for a
  noncommutative ring. The intended conclusion is repairable: if the reduction
  of `x` lies in `J(E/mE)`, then every `1-yx` is a unit modulo `mE`, and units
  lift across `mE subset J(E)`, which is exactly the Jacobson-radical test.
  The final helper handoff must be rechecked after that correction before any
  consumer is certified. A separate confirmed scope defect is owner-held:
  the manifest promises Green indecomposability for every indecomposable
  `ON`-lattice over this library's splitting modular system, but Craven
  Theorem 2.2 assumes **absolute** indecomposability and Oh Theorem 4.1 assumes
  an algebraically closed residue field. The published splitting-system
  definition says only that `K` and `k` split all subgroup algebras; it does
  not say that `k` is algebraically closed or that every lattice is absolutely
  indecomposable. The helper has added algebraic closedness to
  `thm-green-indecomposability-for-index-p-integral-induction` and propagated
  it to its consumers, which is a mathematically plausible proof repair but a
  material weakening of the promised Batch-9 results. Do not integrate that
  change as an author-only repair. Exact remedies for the owner are either
  (a) supply a proved base-change/absolute-indecomposability bridge under the
  current splitting-system hypothesis, or (b) approve algebraic closedness as
  a pair-wide hypothesis and renew scope after propagating it through every
  affected statement, example and contract.

## Open obligations

### Dependency repair checkpoint — real-projective supplier

- `lem-mod-two-cohomology-ring-of-infinite-real-projective-space` no longer
  cites the published B item
  `ex-mod-two-cohomology-ring-of-real-projective-space`. The replacement is a
  local calculation on each finite `RP^n`: complementary coordinate
  `RP^r` and `RP^s` meet in one point; explicit complement retractions and
  pair exact sequences identify their relative generators; excision and
  `lem-local-coordinate-cup-products-generate-top-relative-cohomology` make
  their product the nonzero top class. Induction gives
  `F_2[a_n]/(a_n^(n+1))`, and finite-skeleton detection gives `F_2[a]`.
- Exact dependencies now include the pair sequence and naturality, homotopy
  invariance, excision, the local relative-cup supplier, relative-product
  naturality, cellular comparison, field duality and AC. The Batch-5 manifest
  row and proof contract were regenerated to match.
- Boundary evidence: `n=0`, `n=1`, `k=0`, top and first-vanishing powers,
  infinite detection, zero/nonzero classes, degenerate singular simplices,
  positive complementary dimensions, and exact AC uses are explicit.
- Checks: focused explicit-path precheck pass, rendercheck pass, focused strict
  proof-contract pass with zero errors/warnings, and manifest/content diff
  whitespace check. Open gap: none for this supplier.

Current item: `lem-mod-two-cohomology-rings-of-complex-projective-spaces`.
Next action: remove its two published B prerequisites and derive its finite and
infinite mod-two rings from the standard CW filtration plus the same local
relative-cup mechanism.

### Dependency repair checkpoint — complex-projective supplier

- `lem-mod-two-cohomology-rings-of-complex-projective-spaces` no longer cites
  either `ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space`
  or `ex-integral-cohomology-ring-of-complex-projective-space`. It now constructs
  the one-even-cell filtration by the explicit disk attachment, computes
  integral homology and integral/mod-two cohomology by cellular comparison and
  UCT, and defines `c_n` as reduction of the normalized degree-two evaluator.
- The multiplicative argument is local rather than inherited: complementary
  coordinate `CP^i` and `CP^j`, their explicit complement retractions, pair
  exactness, excision, and the coefficient-one local relative-cup product prove
  that the two complementary-degree generators multiply to the nonzero top
  class. Induction gives every finite truncation and skeletal detection gives
  the infinite polynomial ring.
- Dependencies examined: no-adjacent-cell boundary calculation, oriented
  cellular comparison and naturality, cohomological UCT, pair exactness and
  naturality, homotopy invariance, excision, local and global relative cups,
  coefficient reduction at cochain level, ring naturality, and AC. The Batch-5
  manifest and exact proof contract match those dependencies.
- Boundary evidence: `n=0`, `n=1`, `k=0`, `k=n`, `k=n+1`, all odd/zero groups,
  positive local factor dimensions, homotopy endpoints, degenerate simplices,
  infinite detection, and the exact two inherited AC uses are explicit.
- Checks: focused explicit-path precheck pass, rendercheck pass, focused strict
  proof-contract pass with zero errors/warnings, and diff whitespace check.
  Open gap: none for this supplier.

Current item: helper integration remains pending. Next action: inspect durable
helper handoffs and the latest owner direction; do not touch an active helper's
pair-owned files.

### Local-coefficients handoff repair checkpoints

- `def-singular-and-cellular-chain-complexes-with-local-coefficients`: the
  disconnected universal-cover description now requires a supplied basepoint
  in each component. The intrinsic complex remains available without such a
  family, so no hidden simultaneous choice is made. Rendercheck passes.
- `def-homology-and-cohomology-with-local-coefficients`: removed the false ZF
  assertion that cohomology of an arbitrary degreewise product complex equals
  the product of the component cohomologies. The definition retains the
  product cochain complex and its actual kernel/image quotient, and records
  why a product-of-cohomologies surjectivity argument may require simultaneous
  primitive choices. Rendercheck passes.
- `def-cup-and-cap-products-with-local-coefficient-pairings`: repaired the two
  literal missing TeX commands (`\qquad`, `\ldots`) without changing the typed
  reverse-transport cup convention or forward-transport cap convention.
  Rendercheck passes.
- `lem-canonical-twisted-fundamental-classes-over-compact-subsets`: confirmed
  and repaired the owner-reported arbitrary-compact gap. Its canonical point
  class is now typed as a local integral orientation cycle carrying coefficient
  `o_x tensor 1_R`, equivalently
  `o_x tensor (o_x tensor 1_R)`, so changing orientation negates both factors.
  A local closed-support Mayer--Vietoris sequence is derived at chain level.
  The arbitrary-coordinate case now uses a finite representative, separates
  the compact boundary support, enlarges the target support to finitely many
  closed balls missing that boundary, and uses their pointwise injectivity.
  A separate finite chart-piece induction handles general compact supports.
  Collar-core construction, uniqueness, and the outward-normal-first boundary
  calculation then follow without AC.
- Exact added dependencies for the repaired lemma: intrinsic local chains and
  homology, local functorial homotopy invariance, the closed-support quotient
  pattern, point-local homology, compactness/closedness/connectedness, and
  component maximality. Focused explicit-path precheck passes; rendercheck on
  all four repaired files passes. Boundary evidence includes empty supports,
  zero rings, dimension zero, disconnected supports, degenerate simplices,
  collar endpoints, and absence of infinite choices.

Current item: audit the boundaryless and boundary duality consumers against
the repaired typed fundamental class and Hatcher's one-page correction, then
integrate the local pair's shared manifest and contracts.

### Local-coefficients lead audit checkpoints

- `thm-cellular-cochains-compute-cohomology-with-local-coefficients`: audited
  the skeletal concentration, exact-triple, eventually constant telescope,
  handedness, and naturality arguments. Its numbered reference to step 1.2 is
  valid (the handedness calculation is step 1.2); no content repair was needed.
  Exact item dependencies exceed the stale manifest and remain queued for the
  shared-file reconciliation. Choice-free boundaries include the finite
  backward recursion used to prove surjectivity of the telescope difference
  map.
- `thm-local-systems-on-a-connected-cw-complex-correspond-to-modules-over-its-group-ring`:
  repaired the unsupported parenthetical assertion that a CW complex is
  locally path connected. The proof now derives path connectedness directly:
  each characteristic-disk image lies in one path component, the weak topology
  makes each path component clopen, and connectedness leaves one. Added
  `def-cw-complex-with-closure-finiteness-and-weak-topology`. The unique AC use
  remains the point-indexed path family. Focused precheck and rendering pass.
- `thm-cellular-chains-compute-homology-with-local-coefficients`: replaced the
  unproved compact-cell-support sentence by the exact published choice-free
  supplier `lem-compact-cw-images-have-finite-cell-support-without-choice` and
  added that dependency. The skeletal colimit proof now has an explicit finite
  maximum dimension for each cycle and bounding chain. Focused precheck and
  rendering pass.
- `ex-circle-homology-with-a-module-automorphism`: audited the right-chain/
  left-fiber inversion and repaired only the malformed arrow label. The actual
  differential is `T-1`; focused precheck and rendering pass.
- `cex-constant-coefficients-do-not-compute-a-nontrivial-monodromy-system`:
  removed its forbidden B-page dependency on the preceding circle example and
  repeated the lifted one-cell calculation directly from
  `thm-cellular-chains-compute-homology-with-local-coefficients`. Also repaired
  the literal missing TeX command in the stalk name. Focused precheck and
  rendering pass.
- `cex-the-untwisted-e-two-page-misses-monodromy-in-a-mapping-torus`: removed
  the same forbidden B-page dependency and supplied the local `T-1` calculation
  from the A-page cellular theorem. The reflection gives `T=-1`, hence the
  stated `(Z/2,0)` row. Focused precheck and rendering pass.
- The other four B examples were checked directly: the sign system on
  `RP^n` evaluates `1+(-1)^k g` at `g=-1`; the Mobius boundary loop has core
  degree two; the nonorientable-surface polygon gives twisted `d_2=0` and
  `d_1=-2(1,...,1)`; and all their claimed endpoint groups follow. The surface
  item already uses only A-page dependencies on disk, although its stale
  manifest still points to the projective-space B example. No content repair
  was required in these four files.

Current item: reconcile the complete local-coefficients manifest and coverage,
including the two new A-page suppliers and every dependency change above; then
build exact proof contracts from the audited arguments.

### Local-coefficients integration checkpoint

- The Batch-5 manifest now matches all 21 A items and six B items, including
  `def-orientation-local-system-on-a-manifold-with-boundary` and
  `lem-canonical-twisted-fundamental-classes-over-compact-subsets`.  The two
  locally added suppliers are registered in coverage and the proof-contract
  file; they are post-baseline additions and therefore intentionally receive
  no Step-3 item decision.
- All 27 local-coefficients item contracts pass the focused strict contract
  checker.  Batch-5 author-check and the refreshed frontier-dependency input
  pass; this pair has no unresolved cross-batch dependency.
- All 25 baseline items now have current item decisions, recorded one at a
  time after authoring.  Repairs are recorded for the group-action/path-choice
  theorem, intrinsic chain and cochain definitions, cellular comparison,
  typed cup/cap products, both duality theorems, the circle and Mobius
  calculations, the nonorientable-surface calculation, and both standalone
  counterexamples.  The other audited items are accepted with their exact
  current dependency sets.
- Choice boundary: only the local-system/group-ring equivalence and the two
  duality theorems assume AC.  Each states the assumption, depends on
  `def-axiom-of-choice`, identifies its exact use, and the Poincare--Lefschetz
  consumer propagates it.  The canonical compact-support fundamental classes
  and all finite cellular examples remain choice-free.

Current item: integrate and independently recheck the completed Brauer handoff,
including the owner-approved algebraically-closed residue-field repair and the
explicit induction-counit bridge in the new integral Mackey--Higman supplier.

### Brauer integration checkpoint

- All 19 baseline items and both pages are authored.  The necessary new
  A-level supplier `lem-integral-mackey-and-higman-for-og-lattices` is placed
  immediately after integral Krull--Schmidt and is registered in the Batch-9
  manifest, coverage, page, and proof contracts.
- The new supplier's relative-projectivity implication now starts from F1's
  actual summand definition: for `Y=Ind_Q^H V`, the explicit section
  `h tensor v -> h tensor (1 tensor v)` splits the induction counit; composing
  it with the supplied inclusion and retraction splits the counit for a
  summand `M`.  Only then is the identity-coset coefficient extracted for
  Higman's trace criterion.  Focused precheck and rendercheck pass after this
  repair.
- `thm-krull-schmidt-for-og-lattices` uses the Jacobson unit-lifting test, not
  the invalid implication `x^n in J => x in J`.  Its exchange step now proves
  that the matched summand projects isomorphically to `M_1`, identifies it as
  a graph over `M_1`, and applies the graph-subtraction automorphism before
  cancellation.
- The owner approved and hash-bound the exact scope repair: algebraic
  closedness of the residue field is stated in Green index-`p`
  indecomposability and propagated through character vanishing, Nagao-error
  vanishing, local block projection, Brauer's Second Main Theorem, its column
  corollary, and the two consuming examples.  Nagao decomposition itself
  remains at the original splitting-system generality.
- The generalized-decomposition construction now cites the splitting-system
  definition directly and derives the scalar's `p`-power order from its scalar
  equation, removing the inapplicable algebraically-closed
  characteristic-zero diagonalization theorem.  Integral Mackey/Higman and
  the normal-`p`-core defect supplier replace the two field-module mismatches
  in the Nagao chain.  Both `S_3` examples repeat their calculations locally
  and contain no forbidden external B-page dependency.
- All 19 baseline item decisions are current at confidence 1; the new supplier
  intentionally has no author self-review decision.  Batch-9 author-check
  passes 16 proof-bearing prechecks, 22 renders, content policy, and strict
  contracts (`20/20`, zero errors/warnings).  Coverage reports 47 harvested
  rows with no errors/warnings; citecheck, citation-fidelity, and the
  boundary-template/contradiction audit are clean.

### Batch-6 integration checkpoint

- All 50 baseline spectra/obstruction items and all four pages are authored.
  The locally necessary post-baseline supplier
  `lem-finite-join-models-for-circle-and-two-point-groups` is placed after the
  Milnor join definition and before every finite-stage consumer, and is
  registered in the page, manifest, coverage, and proof-contract inventory.
- Spectra repairs include the correct shift signs, explicit sphere-stability
  inputs, quotient and homotopy functoriality suppliers, and a self-contained
  reduced-word witness for the unstable commutator example.  Its former
  B-page dependency was removed.
- Obstruction/Postnikov repairs expose the local-coefficient suppliers, HEP
  and one-cell realization steps, and exact representability inputs.  The
  simple-stage theorem no longer lists its self-equivalence calculation or
  difference formula as assumed facts: both are proved internally before
  use.  The loop-space item distinguishes the endpoint label from the
  conventionally inverted fibration boundary and declares AC exactly for
  numerable lifting and the Whitehead upgrade.
- The finite-join supplier proves the explicit square-root coordinate
  homeomorphisms, their inverses on positive coordinates, compact-to-Hausdorff
  upgrade, equivariance, quotient identifications, inclusion compatibility,
  zero weights, and both `N=0` cases without choice.
- Source verification correction: the cached 5,870,693-byte Husemoller-family
  PDF is *Basic Bundle Theory*, so it was not used as evidence for the cited
  *Fibre Bundles* locators.  The actual third-edition scan was independently
  fetched (8,849,909 bytes; SHA-256 prefix `46440b2ae7843cfb`; 376 pages), and
  the complete Chapter 4 §§8.3 and 9--12 passages on printed pages 48--58
  were read.  The coverage record now contains that exact recovery evidence.
- Batch-wide explicit-path precheck passes all 33 proof-bearing items, and
  rendercheck passes all four pages plus 51 items.  Strict contracts pass
  `51/51` with zero errors (one nonfatal shotgun-bracket warning on the
  simple-stage theorem, whose uncited later steps use internal calculations,
  not undeclared facts).  Citation fidelity reports 132 exact citations,
  no missing quotes and no widening candidates; coverage reports 51 harvested
  rows and content policy reports 51 scoped items, both clean.

Current item: resolve the remaining Wu-class surface example in the bockstein
pair without overriding its owner-held escalation.  Reread the owner direction,
the Wu repair analysis, the current example, and the completed local-coefficient
duality suppliers before deciding whether the authorized local A-page supplier
closes it or whether the exact gap must remain escalated.

### Wu surface integration checkpoint

- Exact claim/conventions: assuming AC, a nonempty closed connected
  topological surface has `v_0=1`, `v_1=w_1`, and `v_i=0` for `i>1`; the
  orientation-sign cocycle is independent of the chosen stalk-generator
  family, and `v_1=0` iff the surface is orientable.
- Sources reread completely at the load-bearing locators: Ranicki,
  Definition 4.1(iii), Remark 4.2 and Proposition 4.3(ii), printed page 49;
  Hatcher's complete one-page correction to page 335; and Davis--Kirk Chapter
  5 Section 2.2, printed pages 100--103.  Ranicki states the exact
  orientation-character/Sq^1 identity and orientability criterion.  The other
  two passages verify the twisted fundamental class and the typed
  `O_M tensor O_M -> Z` cap interface; the item supplies the chain derivation.
- Independent proof audit: the orientation transport formula gives the stated
  cocycle and generator-change coboundary.  The canonical local class has the
  double orientation factor, so reduction of a finite twisted fundamental
  cycle is `[M]_2`.  With the cohomology-first cap convention, `delta c=2b`
  gives `partial(c cap C)=-2(b cap C)`; setting `W=-b cap C` gives the required
  integral lift-and-divide cycle.  The mod-four cochain Bockstein then yields
  the exact evaluation on `W`, and cap--cup adjunction yields the Wu pairing.
  Both orientability directions and all degree/degenerate/choice cases are
  proved.  No mathematical gap remains in the current item.
- Integration: replaced the false Mosher--Tangora locator and stale scaffold
  strategy; synchronized all thirteen direct dependencies and `ai-altered`
  proof provenance; added exact coverage records; added the B-page
  `forwardRefs` entry to the later local-coefficients A page; and added the
  item-specific proof contract with both iff directions and the direct AC use.
- Checks: explicit-path precheck passes; the focused strict proof contract
  passes with zero errors or warnings.  Real rendering and the complete Batch-5
  checks will be rerun after the four B-leaf dependency repairs below.
- Decision: deliberately not recorded.  The earlier `escalate` receipt remains
  owner-held.  The current owner direction requires the owner to reread the
  stable integrated inputs and record the hash-bound `repaired` receipt; this
  dispatch does not override it.
- Pre-splice obligation: Step 4 must replace the known-wrong AT-9
  Mosher--Tangora Wu locator/strategy with the exact sources and local
  twisted-Bockstein derivation above.

Current item:
`ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space`.
Next action: remove its two forbidden published B-page dependencies and derive
the exact integral groups from the A-level projective cellular calculation and
UCT before refreshing its manifest, contract, checks, and decision.

### B-leaf repair 1: projective-space Bockstein — complete

- Removed the published B-page suppliers
  `ex-integral-cohomology-of-real-projective-space-from-uct` and
  `ex-mod-two-cohomology-ring-of-real-projective-space` from item and manifest.
- Exact replacement proof: the choice-free clause of
  `lem-real-projective-space-cellular-homology-and-pinch-map` gives
  `H_0=Z`, `H_1=Z/2`, and `H_2=0` for every finite `RP^n`, `n>=2`.
  Topological UCT then gives `H^1=0`; in degree two the item computes
  `Ext^1_Z(Z/2,Z)=Z/2` from the two-term free resolution and obtains
  `H^2=Z/2`.  The A-level
  `lem-mod-two-cohomology-ring-of-infinite-real-projective-space` supplies the
  finite truncated ring by its stated skeleton restriction.  The original
  zero/one lift proof then makes the integral Bockstein nonzero and hence its
  unique generator.
- Choice: AC is propagated exactly from UCT and the A-level ring supplier;
  the integral cellular and finite Ext calculations are choice-free.
- Checks: explicit precheck, real rendercheck, strict focused contract, and
  manifest/item dependency equality all pass.
- Decision: `repaired`, confidence 1, recorded against all eight current
  direct dependency IDs.

Current item: `ex-steenrod-squares-on-real-projective-space`.  Next action:
remove its published finite-projective-ring B dependency and use the finite
skeleton clause of the already consumed A-level ring supplier throughout.

### B-leaf repair 2: real-projective Steenrod squares — complete

- Removed `ex-mod-two-cohomology-ring-of-real-projective-space` from the item
  and manifest.
- Exact replacement proof: the A-level projective lemma supplies one cell in
  each degree through `n` and integral incidence coefficients alternating zero
  and two.  The published arbitrary-coefficient incidence-matrix theorem makes
  those coefficients act on `F_2`, hence makes every differential zero;
  cellular comparison and field duality give one cohomology generator in
  degrees zero through `n` and zero above.  Restriction of `a^k` from the
  A-level infinite polynomial-ring supplier is nonzero for `k<=n`, so these
  powers identify the finite ring as `F_2[a_n]/(a_n^(n+1))`.  Naturality then
  restricts the already proved infinite binomial formula.
- Choice: AC is inherited exactly from the infinite ring supplier and field
  duality; the incidence reduction and finite binomial expansion are
  choice-free.
- Checks: explicit precheck, real rendercheck, focused strict contract, and
  manifest/item dependency equality all pass.
- Decision: `repaired`, confidence 1, recorded against all eleven current
  direct dependencies.

Current item: `cex-the-top-square-formula-does-not-define-all-lower-squares`.
Next action: replace its published finite-projective-ring and sphere-example
dependencies with the A-level projective supplier and `cor-homology-of-spheres`,
then reverify both explicit witnesses.

### B-leaf repair 3: top squares do not determine lower squares — complete

- Removed the published B leaves
  `ex-mod-two-cohomology-ring-of-real-projective-space` and
  `ex-mayer-vietoris-computation-of-sphere-homology` from item and manifest.
- Exact witnesses rechecked: restriction of the A-level infinite projective
  generator makes `a^2` nonzero on `RP^2`; the zero-or-two incidence matrix,
  arbitrary-coefficient cellular comparison, and field duality make
  `H^3(RP^2;F_2)=0`.  Hence suspension carries nonzero `Sq^1(a)=a^2` to a
  nonzero first square while its degree-two top square lands in zero reduced
  degree four.  `cor-homology-of-spheres` and field duality give zero sphere
  cohomology in degrees three and four, so the sphere generator has zero first
  and top squares.  Both nonzero degree-two witnesses and failed conclusion
  remain explicit.
- Choice: AC is propagated from the preceding Bockstein witness, the A-level
  infinite ring, and field duality; suspension and the cellular reduction are
  choice-free.
- Checks: explicit precheck, real rendercheck, focused strict contract, and
  manifest/item dependency equality all pass.
- Decision: `repaired`, confidence 1, recorded with all nine current direct
  dependencies.

Current item: `cex-steenrod-squares-are-not-integral-cohomology-operations`.
Next action: replace its published infinite-projective cellular example by an
explicit infinite CW calculation from A-level incidence suppliers, and locally
prove the promised `Sq^1` integral-Bockstein exception.

### B-leaf repair 4: Steenrod squares do not all lift integrally — complete

- Removed
  `ex-cellular-homology-of-an-infinite-dimensional-projective-space` from item
  and manifest.
- Exact replacement obstruction: the standard finite skeleta from the A-level
  projective suppliers have one cell per degree and integral differentials
  alternating two and zero.  The inclusions preserve these cells and each
  degree-`j` differential is already determined on `RP^j`, so the infinite CW
  complex has `d_4=2`, `d_5=0`, `d_6=2`.  Thus `H_4=0`, `H_5=Z/2`, and UCT
  gives `H^5(RP^infinity;Z)=0`; this contradicts reduction to the explicitly
  nonzero `Sq^2(a^3)=a^5`.
- Additional promised-clause repair: the previous item merely asserted the
  valid `Sq^1` exception.  It now proves it.  If
  `delta(c-hat)=2h` for the canonical integer zero/one lift, the integral
  Bockstein is `[h]`, while the same lift modulo four makes the mod-two
  Bockstein `[h mod 2]`.  Hence `rho beta_Z=beta_2=Sq^1`; the declared
  Bockstein naturality supplier makes this an integral-valued natural lift.
- Choice: AC is propagated exactly from the projective-square, UCT, and
  general Bockstein-naturality suppliers.  The cyclic residue lifts and
  cellular calculations are choice-free.
- Checks: explicit precheck, real rendercheck, focused strict contract, and
  manifest/item dependency equality all pass.
- Decision: `repaired`, confidence 1, recorded against all ten current direct
  dependencies.

Current action: run full dependency closure and complete Batch-5 checks; repair
only remaining owned-pair discrepancies, then refresh the shared batch
dependency input without modifying sibling-pair rows.

### Batch-6 spectra decision checkpoint

- Certified the twenty immutable-baseline spectra items in manifest and
  prerequisite order.  Twelve unchanged scaffolds were accepted and eight
  proof-driven repairs were recorded at confidence 1 against their exact live
  dependency lists.
- The repairs are the fat-wedge quotient descent supplier, stable-group
  functoriality supplier, corrected shift signs, exact Freudenthal collapse and
  low-sphere inputs, degree/suspension and based-homotopy inputs for the two
  examples, the corrected shifted-sphere grading, and the self-contained
  reduced-word commutator witness with no published B-page leaf.
- Evidence is item-specific in each receipt.  The completed contracts verify
  zero/point/degenerate cases, legal grading tails and endpoints, and the exact
  absence of choice.  The already recorded Batch-6 gate remains 33 proof
  prechecks, four pages plus 51 item renders, 51 strict contracts, 132 exact
  citations, clean coverage and clean content policy.

Current item:
`lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere`.
Next action: certify the thirty immutable-baseline obstruction/Postnikov/
classifying-space items in their manifest order, leaving the locally created
finite-join supplier in the Step-3 bypass class.

### Batch-6 obstruction/Postnikov/classifying decision checkpoint

- Certified all thirty immutable-baseline items in manifest order: ten sound
  unchanged or owner-repaired scaffolds were accepted and twenty local
  statement/dependency/proof repairs were recorded at confidence 1 with the
  exact current dependency IDs.
- The repaired receipts cover the relative-CW HEP and cell-basis suppliers,
  the typed skeletal local system, cochain realization and representability
  inputs, Postnikov fiber/LES inputs, Milnor support-subordinate numeration,
  the corrected `Omega BG -> G` endpoint/boundary convention and AC use, the
  corrected `CP^infinity = K(Z,2)` legacy-ID claim, the finite-join examples,
  and the explicit long-line nonnumerability witness.
- `cex-cellwise-vanishing-obstructions-with-incompatible-choices-need-not-give-a-global-extension`
  was accepted at its already owner-repaired `ab`/`ab^2` quantifiers: separate
  choices work, while no single skeleton map works; the item also proves that
  literal cellwise vanishing for one fixed map does glue.
- The new
  `lem-finite-join-models-for-circle-and-two-point-groups` remains correctly
  without a Step-3 self-review receipt.  It is registered and fully authored,
  and the engine must certify it from the immutable baseline after this
  dispatch.

Current action: rerun the Batch-6 author gate after the fifty receipts, then
inspect and refresh the Batch-5/6/9 cross-batch inputs and shared frontier
ledger while preserving every sibling row.

## Final handoff

### Completion and decisions

- All 125 immutable-baseline items have current Step-3 decisions: Bockstein 31,
  local coefficients 25, spectra 20, obstruction/Postnikov/classifying 30, and
  Brauer 19.  The eight Bockstein receipts invalidated by later transitive
  supplier edits were reread and refreshed against the final inputs rather
  than left stale.
- The owner independently reread the completed Wu-surface proof and its
  thirteen direct dependencies and recorded the required current hash-bound
  `repaired` receipt.  The earlier author escalation is therefore resolved;
  this dispatch did not override it.
- Ten items were created and fully authored during this dispatch and correctly
  have no Step-3 self-review receipt:
  `lem-finite-cellular-cyclic-squares-cartan-and-basis-action`,
  `lem-finite-cellular-cyclic-squares-agree-with-singular-cup-i-squares`,
  `lem-natural-singular-cohomology-identities-are-detected-on-finite-regular-complexes`,
  `lem-bockstein-square-parity-recurrence`,
  `lem-mod-two-cohomology-ring-of-infinite-real-projective-space`,
  `lem-mod-two-cohomology-rings-of-complex-projective-spaces`,
  `def-orientation-local-system-on-a-manifold-with-boundary`,
  `lem-canonical-twisted-fundamental-classes-over-compact-subsets`,
  `lem-finite-join-models-for-circle-and-two-point-groups`, and
  `lem-integral-mackey-and-higman-for-og-lattices`.  The final Step-3 check's
  only ten open owned rows are exactly these post-baseline additions, so the
  engine must apply the specified auditor-authored certification after this
  successful dispatch.

Completed IDs, in exact manifest and prerequisite order:

- `bocksteins-steenrod-squares-and-cohomology-operations` (30):
  `def-stable-natural-cohomology-operation`,
  `def-bockstein-connecting-operation`,
  `lem-the-bockstein-is-independent-of-lift-and-cocycle-representative`,
  `prop-bocksteins-are-natural-and-commute-with-suspension`,
  `prop-the-mod-two-bockstein-is-a-derivation`,
  `lem-natural-higher-diagonal-approximations-on-singular-chains`,
  `def-higher-cup-i-products`, `thm-cup-i-coboundary-identity`,
  `def-steenrod-squares-from-cup-i-products`,
  `thm-steenrod-squares-are-well-defined-and-natural`,
  `prop-steenrod-square-normalization-instability-and-top-square`,
  `lem-cartan-coherence-for-higher-diagonal-approximations`,
  `thm-cartan-formula-for-steenrod-squares`,
  `lem-free-cyclic-resolution-and-transfer-for-power-operations`,
  `lem-equivariant-p-fold-external-power-and-diagonal`,
  `lem-wreath-double-power-coefficient-symmetry`,
  `lem-finite-cellular-cyclic-squares-cartan-and-basis-action`,
  `lem-adem-double-power-comparison`,
  `lem-finite-cellular-cyclic-squares-agree-with-singular-cup-i-squares`,
  `lem-natural-singular-cohomology-identities-are-detected-on-finite-regular-complexes`,
  `thm-adem-relations-for-steenrod-squares`,
  `lem-bockstein-square-parity-recurrence`,
  `prop-first-steenrod-square-is-the-mod-two-bockstein`,
  `def-total-steenrod-square`, `def-wu-classes-of-a-closed-manifold`,
  `lem-cyclic-p-fold-power-construction`,
  `def-mod-p-reduced-power-operations`,
  `thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations`,
  `lem-mod-two-cohomology-ring-of-infinite-real-projective-space`, and
  `lem-mod-two-cohomology-rings-of-complex-projective-spaces`.
- `bocksteins-steenrod-squares-and-cohomology-operations-examples` (7):
  `ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space`,
  `ex-steenrod-squares-on-real-projective-space`,
  `ex-steenrod-squares-on-complex-projective-space-mod-two`,
  `ex-adem-relation-sq-one-sq-one-equals-zero`,
  `ex-wu-classes-of-a-closed-surface`,
  `cex-the-top-square-formula-does-not-define-all-lower-squares`, and
  `cex-steenrod-squares-are-not-integral-cohomology-operations`.
- `local-coefficients-twisted-homology-and-duality` (21):
  `def-fundamental-groupoid-of-a-space`,
  `prop-the-vertex-group-of-the-fundamental-groupoid-is-the-published-fundamental-group`,
  `def-local-system-of-r-modules-and-its-pullback`,
  `thm-local-systems-on-a-connected-cw-complex-correspond-to-modules-over-its-group-ring`,
  `def-right-group-ring-action-on-the-chains-of-a-universal-cover`,
  `def-singular-and-cellular-chain-complexes-with-local-coefficients`,
  `lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases`,
  `def-homology-and-cohomology-with-local-coefficients`,
  `prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism`,
  `thm-cellular-chains-compute-homology-with-local-coefficients`,
  `thm-pair-long-exact-sequences-with-local-coefficients`,
  `thm-cellular-cochains-compute-cohomology-with-local-coefficients`,
  `thm-excision-and-mayer-vietoris-with-local-coefficients`,
  `def-compactly-supported-cohomology-with-local-coefficients`,
  `prop-the-manifold-orientation-system-is-a-local-system`,
  `def-orientation-local-system-on-a-manifold-with-boundary`,
  `lem-canonical-twisted-fundamental-classes-over-compact-subsets`,
  `def-cup-and-cap-products-with-local-coefficient-pairings`,
  `thm-poincare-duality-with-the-orientation-local-system`,
  `thm-poincare-lefschetz-duality-with-local-coefficients`, and
  `lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems`.
- `local-coefficients-twisted-homology-and-duality-examples` (6):
  `ex-circle-homology-with-a-module-automorphism`,
  `ex-sign-local-system-on-real-projective-space`,
  `ex-the-orientation-system-of-the-mobius-band`,
  `ex-twisted-poincare-duality-for-a-closed-nonorientable-surface`,
  `cex-constant-coefficients-do-not-compute-a-nontrivial-monodromy-system`, and
  `cex-the-untwisted-e-two-page-misses-monodromy-in-a-mapping-torus`.
- `spectra-and-stable-homotopy-groups` (16):
  `def-compactly-generated-based-space-and-well-pointed-object`,
  `def-smash-product-of-based-spaces`,
  `prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms`,
  `def-sequential-prespectrum-spectrum-and-adjoint-structure-maps`,
  `def-suspension-prespectrum-and-sphere-prespectrum`,
  `def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra`,
  `def-stable-homotopy-groups-of-a-sequential-prespectrum`,
  `lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail`,
  `prop-maps-of-prespectra-induce-functorial-maps-on-stable-homotopy-groups`,
  `def-shift-and-suspension-of-a-sequential-prespectrum`,
  `def-stable-stem-of-the-sphere`,
  `lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres`,
  `prop-the-sphere-prespectrum-homotopy-groups-are-the-stable-stems`,
  `def-pairing-and-unital-multiplication-of-sequential-prespectra`,
  `prop-a-ring-prespectrum-gives-a-graded-product-on-stable-homotopy-groups`,
  and
  `rem-positive-stable-stems-brown-representability-and-model-categorical-replacement-are-not-proved-here`.
- `spectra-and-stable-homotopy-groups-examples` (4):
  `ex-the-zero-stem-is-the-integers`,
  `ex-stabilizing-a-map-between-spheres`,
  `ex-suspension-prespectra-of-spheres-are-shifts`, and
  `cex-an-unstable-homotopy-class-need-not-yet-be-stable`.
- `obstruction-theory-postnikov-towers-and-classifying-spaces` (24):
  `lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere`,
  `def-homotopy-group-local-system-along-a-cellular-map`,
  `def-primary-cellular-obstruction-cochain`,
  `thm-the-primary-obstruction-cochain-is-a-cocycle`,
  `def-difference-cochain-between-two-cellular-extensions`,
  `thm-the-primary-obstruction-class-is-independent-of-cellular-choices`,
  `thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton`,
  `thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage`,
  `thm-obstruction-theory-for-lifting-through-a-fibration`,
  `def-eilenberg-maclane-space`,
  `thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces`,
  `thm-eilenberg-maclane-spaces-represent-singular-cohomology`,
  `cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces`,
  `def-postnikov-section-and-postnikov-tower`,
  `thm-postnikov-towers-exist-for-connected-cw-complexes`,
  `def-postnikov-k-invariant`,
  `thm-simple-postnikov-stages-are-classified-by-k-invariants`,
  `def-universal-principal-bundle-and-classifying-space`,
  `def-milnor-infinite-join-model-of-eg`,
  `lem-finite-join-models-for-circle-and-two-point-groups`,
  `thm-milnor-join-model-is-a-contractible-free-g-space`,
  `thm-principal-bundles-are-classified-by-maps-to-bg`,
  `prop-loop-space-of-bg-recovers-g-up-to-homotopy`, and
  `cor-classifying-space-of-a-discrete-group-is-a-k-g-one`.
- `obstruction-theory-postnikov-towers-and-classifying-spaces-examples` (7):
  `ex-primary-obstruction-to-a-nowhere-zero-section-of-a-sphere-fibration`,
  `ex-k-z-one-as-the-infinite-complex-projective-space`,
  `ex-real-projective-infinity-as-b-z-two`,
  `ex-first-postnikov-stage-of-a-simply-connected-space`,
  `ex-trivial-principal-bundle-corresponds-to-a-nullhomotopic-classifying-map`,
  `cex-cellwise-vanishing-obstructions-with-incompatible-choices-need-not-give-a-global-extension`,
  and `cex-principal-bundle-classification-can-fail-without-numerability`.
- `brauers-second-main-theorem` (17):
  `lem-commuting-p-and-p-prime-parts-of-a-finite-group-element`,
  `def-p-section-of-a-p-element`, `def-generalized-decomposition-numbers`,
  `thm-generalized-decomposition-numbers-exist-and-are-unique`,
  `lem-block-idempotents-lift-uniquely-from-kh-to-oh`,
  `def-relative-projectivity-and-vertices-for-og-lattices`,
  `thm-krull-schmidt-for-og-lattices`,
  `lem-integral-mackey-and-higman-for-og-lattices`,
  `thm-green-indecomposability-for-index-p-integral-induction`,
  `lem-central-p-subgroups-lie-in-every-block-defect-group`,
  `def-brauer-subsection`,
  `lem-relative-projectivity-forces-p-section-character-vanishing`,
  `thm-nagao-decomposition-for-restriction-to-a-centralizer`,
  `lem-nagao-error-terms-have-zero-trace-on-the-relevant-p-section`,
  `lem-local-block-projection-controls-generalized-decomposition-support`,
  `thm-brauer-second-main-theorem`, and
  `cor-generalized-decomposition-columns-have-corresponding-block-support`.
- `brauers-second-main-theorem-examples` (3):
  `ex-p-sections-and-brauer-subsections-in-a-small-finite-group`,
  `ex-second-main-theorem-at-u-equals-one`, and
  `ex-second-main-theorem-with-no-inducing-local-block`.

### Checks actually run

- Final author checks all pass.  Batch 5: 52 proof prechecks, 68 real renders,
  64 content-policy items and strict contracts `64/64`, zero warnings.  Batch
  6: 33 proof prechecks, 55 real renders, 51 content-policy items and strict
  contracts `51/51`; the only warning is the nonfatal shotgun-bracket heuristic
  on the simple Postnikov-stage theorem, whose later steps use proved internal
  calculations.  Batch 9: 16 proof prechecks, 22 real renders, 20
  content-policy items and strict contracts `20/20`, zero warnings.
- The combined coverage checklist passes five A pages and 168 harvested
  results with zero errors/warnings.  Its rerun caught and repaired two schema
  labels in the Wu coverage records (`reference-work` and `lecture-notes`);
  the mathematics and source locators were unchanged.  Citation fidelity
  checks 527 exact citations over all 135 authored items, with no missing quote
  and no widening candidate.
- `validate-plan.mjs research/plan-spec.json` exits zero: no unresolved ID,
  cycle, forbidden forward proof edge or B-leaf dependency in the currently
  populated plan.  It emits 3,868 repository-wide redundant-prerequisite
  warnings.  This is pre-splice: all ten owned plan rows still have empty
  inventories, while the manifests contain respectively
  `30/7`, `21/6`, `16/4`, `24/7`, and `17/3` items (135 total).  Every owned
  `requires` array agrees.  Step 4 must splice those exact inventories and
  replace the stale Mosher--Tangora Wu locator/strategy with the current
  Ranicki/Hatcher/Davis--Kirk record and twisted-Bockstein derivation.
- Batch-5 and Batch-9 cross-batch inputs are correctly empty.  All nine Batch-6
  cross-batch rows have been reread against the completed suppliers and are
  `verified`; the unified ledger was refreshed.  The repository-wide
  `--require-reviewed` form still reports seventeen unreviewed edges, all owned
  by consumer Batches 7 or 8, so they were preserved and routed rather than
  edited here.
- Repository-wide `depcheck --quiet` reports five hard B-leaf errors, none in
  Batches 5, 6 or 9: the fundamental-field convention item reaches the
  Heisenberg example; the Riemannian-product curvature example reaches the
  product-metric example; the great-sphere theorem and mean-curvature remark
  reach the great-circle example; and the tautological-one-form definition
  reaches the tangent/cotangent-bundle example.  These are outside this
  dispatch and remain visible for their owners.

### Open obligations

- No local mathematical or authoring gap remains.  Step 4 and the engine must
  perform the pre-splice and auditor-created-item actions just listed.
- The exact published concerns remain the two confirmed high-confidence
  defects and eight medium-confidence possible consumers listed at the top of
  this report.  They were not edited and must be handled by the serial owner;
  the published-consumer-supplier ledger was not touched.

- Author and verify all 125 preserved scaffold items and all ten pages.
- Maintain the owned batch dependency inputs and refresh the unified frontier
  ledger after any actual dependency-input change.
- Run per-batch explicit-path author precheck/rendering, content policy, strict
  proof-contract validation, and `validate-plan` with
  `research/plan-spec.json`.
- Report pre-splice plan mismatches rather than editing shared plan prose.

## Retry closure — dispatch `step3b-b-c023c835fbbf12ae`

This section supersedes the earlier post-baseline classification at final
handoff.  The retry's immutable baseline now includes six of the former
Batch-5 local suppliers, so they require ordinary current item receipts.  Only
`def-orientation-local-system-on-a-manifold-with-boundary`,
`lem-canonical-twisted-fundamental-classes-over-compact-subsets`,
`lem-finite-join-models-for-circle-and-two-point-groups`, and
`lem-integral-mackey-and-higman-for-og-lattices` remain post-baseline additions
for the driver's generated-item certification; no self-review receipt will be
created for those four.

### Retry item 1 — `lem-finite-cellular-cyclic-squares-cartan-and-basis-action`

- Claim and conventions rechecked: the finite-cellular cyclic squares at
  \(p=2\) are additive and natural, have the stated instability and top-square
  endpoints, satisfy external and internal Cartan, and obey
  \(Sq^j_{\mathrm{cyc}}(t^r)=\binom rj t^{r+j}\).  This is still a cellular
  result and does not silently identify the operation with singular cup-\(i\)
  squares.
- Evidence rechecked: the complete current statements of
  `lem-equivariant-p-fold-external-power-and-diagonal` and
  `lem-free-cyclic-resolution-and-transfer-for-power-operations`, and
  Steenrod--Epstein Chapter VII sections 4--6 (printed pages 105--114),
  including the resolution-diagonal, sphere reduction, normalization and
  product calculations.
- Dependencies examined: `lem-equivariant-p-fold-external-power-and-diagonal`,
  `lem-free-cyclic-resolution-and-transfer-for-power-operations`, and
  `def-axiom-of-choice`.  AC remains confined to the inherited equivariant
  carrier choices; the sphere, circle, finite sums and endpoint calculations
  are explicit.
- Checks: focused precheck, real rendercheck and focused strict proof contract
  all pass.  Decision: `repaired`, confidence 1, current receipt recorded.
  Open gap: none.

Next action: recheck the cellular-to-singular comparison supplier, including
its mapping-cone complement, carrier homotopy, degeneracies and both index
endpoints, before recording its retry receipt.

### Retry item 2 — `lem-finite-cellular-cyclic-squares-agree-with-singular-cup-i-squares`

- Claim and conventions rechecked: for a finite oriented regular complex the
  barycentric cellular-to-singular comparison is a cohomology isomorphism and
  intertwines every cellular cyclic square with the singular cup-\(i\) square,
  including both outside-range directions.  It makes no arbitrary-space
  extension.
- Evidence rechecked: Mosher--Tangora Chapter 2, printed pages 14--18, and
  Steenrod--Epstein Chapter V section 2 and Chapter VIII section 2, printed
  pages 60--61 and 123--124, together with every current dependency statement.
- Dependencies examined: the finite-cellular square supplier, equivariant
  external-power carrier, singular higher diagonals and square definition,
  cellular--singular homology comparison, Alexander--Whitney/Eilenberg--Zilber,
  homotopy invariance and `def-axiom-of-choice`.  AC is used exactly for the
  infinite singular mapping-cone complement and set-indexed carrier fillings;
  degenerate singular simplices are retained.
- Checks: focused precheck, real rendercheck and focused strict proof contract
  all pass.  Decision: `repaired`, confidence 1, current receipt recorded.
  Open gap: none.

Next action: recheck finite-cycle realization and evaluation detection before
recording the arbitrary-space detection supplier.

### Retry item 3 — `lem-natural-singular-cohomology-identities-are-detected-on-finite-regular-complexes`

- Claim and conventions rechecked: a natural mod-two cohomology expression
  that vanishes on every finite regular complex vanishes on every space; no
  additivity or simultaneous finite approximation is assumed.
- Evidence rechecked: Hatcher section 2.1, printed pages 108--109 and
  119--124, plus Exercise 23 on printed page 133, including the finite
  singular-cycle realization, subdivision homotopy and second-subdivision
  regularity used here.
- Dependencies examined: finite-support singular chains and homology,
  singular cochains and coboundaries, contravariant pullback, the natural
  Kronecker pairing and `def-axiom-of-choice`.  Face pairing and subdivision
  are finite prescribed work; AC is used only for a complement of the possibly
  infinite-dimensional boundary subspace in the evaluation-injectivity proof.
- Checks: focused precheck, real rendercheck and focused strict proof contract
  all pass.  Decision: `repaired`, confidence 1, current receipt recorded.
  Open gap: none.

Next action: recheck the signed integral cup-\(i\) calculation and parity
endpoints before recording the Bockstein recurrence supplier.

### Retry item 4 — `lem-bockstein-square-parity-recurrence`

- Claim and conventions rechecked: for \(0\leq j\leq p\), the mod-two
  Bockstein sends \(Sq^j x\) to \(Sq^{j+1}x\) when \(j\) is even and to zero
  when \(j\) is odd, with the declared zero at \(j=p\).  The proof is
  choice-free.
- Evidence rechecked: Mosher--Tangora Chapter 2, printed pages 15--16, and
  Chapter 3 Lemma 1, printed page 23, including the signed integral cup-\(i\)
  identity and its full divide-by-two parity calculation.
- Dependencies examined: singular higher diagonals, cup-\(i\) evaluation,
  square definition and independence, the mod-two cup-\(i\) identity, the
  cyclic Bockstein and Alexander--Whitney/Eilenberg--Zilber.  Canonical
  zero/one lifts and fixed simplex contractions introduce no AC; \(j=0\),
  \(j=p\), \(p=0\), both parities and cup-\((-1)\) were checked.
- Checks: focused precheck, real rendercheck and focused strict proof contract
  all pass.  Decision: `repaired`, confidence 1, current receipt recorded.
  Open gap: none.

Next action: recheck the real-projective finite product calculation, its
infinite-skeleton passage and the corrected proof-contract boundaries.

### Retry item 5 — `lem-mod-two-cohomology-ring-of-infinite-real-projective-space`

- Claim and conventions rechecked: under AC,
  \(H^*(\mathbb {RP}^{\infty};\mathbb F_2)=\mathbb F_2[a]\), finite-skeleton
  restrictions are isomorphisms through the skeleton dimension, and each
  finite ring is obtained inside the proof rather than from a published
  B-page example.
- Evidence rechecked: Hatcher Theorem 3.19 and its complete proof, printed
  pages 220--221, including complementary projective subspaces, relative
  products and passage to the infinite union.
- Dependencies examined: projective cellular chains and cellular naturality,
  field duality, pair exactness and naturality, homotopy invariance, excision,
  the local relative-cup supplier, relative and absolute cup naturality, and
  `def-axiom-of-choice`.  The proof checks \(n=0\), \(n=1\), the unit, top
  and first-vanishing powers, positive local factor dimensions, degeneracies
  and the absence of a largest skeleton.  AC occurs exactly in field duality
  and the local relative-product supplier.
- Repair: corrected five stale boundary-evidence entries in the proof contract
  so that they cite steps 6.1--8.1 and the actual local relative-product
  supplier, not obsolete step numbers or the removed published finite-ring
  dependency.
- Checks: focused precheck, real rendercheck and focused strict proof contract
  all pass after the repair.  Decision: `repaired`, confidence 1, current
  receipt recorded.  Open gap: none.

Next action: recheck the complex-projective cellular filtration, coefficient
reduction, local product induction and infinite-skeleton passage.

### Retry item 6 — `lem-mod-two-cohomology-rings-of-complex-projective-spaces`

- Claim and conventions rechecked: under AC, the finite mod-two rings are
  \(\mathbb F_2[c_n]/(c_n^{n+1})\), the infinite ring is
  \(\mathbb F_2[c]\), the generators are reductions of normalized integral
  degree-two evaluators, odd groups vanish, and skeletal restrictions have
  the stated ranges.
- Evidence rechecked: Hatcher Theorem 3.19 and its complete proof, printed
  pages 220--221, including the complex-projective cell filtration, local
  intersection product and passage to the infinite union.
- Dependencies examined: even-cell cellular homology and orientations,
  cellular-map naturality, cohomological UCT, pair exactness and naturality,
  homotopy invariance, excision, the local relative-cup supplier, relative and
  absolute cup naturality, singular cochains and coefficient reduction, and
  `def-axiom-of-choice`.  The proof explicitly covers \(n=0\), \(n=1\),
  \(k=0,n,n+1\), odd and zero groups, positive local dimensions, homotopy
  endpoints, degeneracies and every finite stage used for infinite detection.
  AC is propagated only from UCT and the local relative product.
- Checks: focused precheck, real rendercheck and focused strict proof contract
  all pass.  Decision: `repaired`, confidence 1, current receipt recorded.
  Open gap: none.

Next action: run the three complete batch author checks, revalidate coverage,
the cross-batch ledger and the pre-splice plan, then confirm that only the four
driver-certified additions remain open in the owned scope.

### Retry dispatch validation and handoff

- All fourteen owner-directed Batch-5 baseline refreshes now have current
  `repaired`, confidence-1 receipts.  Eight were already current at retry
  entry; the six item checkpoints above were reread and recorded in
  prerequisite order.  No receipt was created for any of the four
  post-baseline additions reserved for driver certification.
- Complete author checks pass.  Batch 5 fingerprint
  `94c0bae4b67b33bc1bafe814bd9027effb5e11747ccd94391453027c48e90d8a`:
  52 proof prechecks, 68 real renders, 64 content-policy items and strict
  contracts 64/64, with no warning.  Batch 6 fingerprint
  `0e8457e314e5b6849f35513b977730e5ba394da34c13fef8d2c20e4ba3df5cd6`:
  33 proof prechecks, 55 real renders, 51 content-policy items and strict
  contracts 51/51; its sole nonfatal warning is the already-triaged
  shotgun-bracket heuristic on the simple Postnikov-stage theorem.  Batch 9
  fingerprint
  `55f992d9fe0adc673b2a6a3ea6bf98364024f3e27f9aaa7fb88805d83a076fb2`:
  16 proof prechecks, 22 real renders, 20 content-policy items and strict
  contracts 20/20, with no warning.
- The combined coverage checklist passes all five A pages and 168 harvested
  results with zero errors and zero warnings.  Citation fidelity checks 527
  exact citations across all 135 items: zero missing quotes and zero widening
  candidates.
- Batch-5 and Batch-9 dependency inputs remain empty.  The nine Batch-6
  consumer edges remain verified against their completed suppliers, and the
  unified dependency ledger was refreshed without losing sibling rows.
  `--require-reviewed` remains globally open only because sixteen current
  edges consumed by Batches 7 or 8 have no verified review; the owned
  consumer batches have zero unverified edges.
- `validate-plan.mjs research/plan-spec.json` exits zero.  It reports only
  3,868 repository-wide redundant-prerequisite warnings.  All ten owned plan
  rows still have empty pre-splice item inventories while the manifests
  contain 30/7, 21/6, 16/4, 24/7 and 17/3 items; every owned `requires`
  array matches.  Step 4 must splice those exact inventories and replace the
  stale Mosher--Tangora Wu locator/strategy with the current
  Ranicki/Hatcher/Davis--Kirk source record and twisted-Bockstein derivation.
- The current scope gate is closed for all 21 pairs.  The final item gate now
  leaves exactly four owned rows open: the two boundary-orientation suppliers,
  the finite-join supplier and the integral Mackey--Higman supplier listed at
  the start of this retry section.  These are exactly the driver-certified
  post-baseline additions, not unresolved mathematics.
- Repository-wide `depcheck --quiet` currently has two hard B-leaf errors,
  both outside this dispatch: `ex-a-great-sphere-is-totally-geodesic` and
  `rem-mean-curvature-and-minimal-submanifolds` depend on
  `ex-the-euclidean-levi-civita-connection`.  They are preserved for their
  owners.
- No local mathematical, content, dependency, source, rendering, coverage or
  proof-contract obligation remains.  The two confirmed published defects and
  eight possible downstream consumers reported under Published concerns
  remain for serial owner reconciliation; the published-consumer-supplier
  ledger was not edited.

## Post-certification repairs — independent certification received 2026-09-13

This section supersedes the “no local obligation” sentence immediately above.
The later independent certification confirmed two group-b edge-case defects;
both are owner-directed local repair work rather than published-debt findings.

### Independent repair 1 — lem-finite-cellular-cyclic-squares-cartan-and-basis-action

- Confirmed defect: the operation is defined only on finite regular cell
  complexes, but the former basis calculation applied it directly to the
  standard one-cell-per-degree projective skeleta, whose cell structures are
  not regular.
- Exact repaired claim/conventions: for the cross-polytope boundary \(L_N\),
  \(Q_N=(\operatorname{sd}L_N)/(\pm1)\) is proved to be a finite regular
  simplicial complex with \(|Q_N|\cong\mathbb {RP}^N\), compatibly in \(N\).
  For \(N>r+j\), cellular--singular comparison identifies
  \(t_N^d\) with the restriction of \(t^d=[w_d]\) through degree \(r+j\);
  Cartan is then applied on \(Q_N\), giving
  \(Sq_{\mathrm{cyc}}^j(t_N^r)=\binom rj t_N^{r+j}\).  The nonregular
  projective CW structure is used only to compute cohomology and is never an
  input to the cyclic operation.
- Proof evidence and locators: Steenrod--Epstein Chapter V sections 2--5 and
  Chapter VII sections 4--6 for the relative carrier, cyclic resolution and
  Cartan inputs; the published barycentric-subdivision definition and
  homeomorphism theorem; the published projective cellular calculation; and
  the published cellular--singular, field-duality, Alexander--Whitney and cup
  naturality interfaces.  The quotient is checked directly: after fixing the
  maximal face of a subdivided chain up to sign, each lower face-orbit has at
  most one representative inside it.
- Dependencies examined and registered:
  lem-equivariant-p-fold-external-power-and-diagonal,
  lem-free-cyclic-resolution-and-transfer-for-power-operations,
  def-barycentric-subdivision-of-an-abstract-simplicial-complex,
  thm-barycentric-subdivision-realizes-homeomorphically,
  lem-real-projective-space-cellular-homology-and-pinch-map,
  thm-cellular-homology-computes-singular-homology,
  prop-cellular-maps-induce-cellular-chain-maps,
  cor-cohomology-over-a-field-is-dual-to-homology-over-that-field,
  def-singular-cup-product-on-cochains,
  thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses,
  prop-cup-product-is-natural-unital-and-associative, and
  def-axiom-of-choice.
- Choice and boundaries: AC is propagated exactly from equivariant carrier
  comparison and field duality.  The cross-polytope models, orientations and
  finite sums are explicit.  \(Q_0\), zero classes, the unit, negative and
  above-degree indices, \(r=0\), \(j=0\), \(j>r\), the bound \(N>r+j\), and
  unnormalized singular degeneracies used by the ordinary cup comparison are
  checked in the item and contract.
- Records/checks: manifest dependencies and strategy, coverage support, item
  proof and item-specific contract were reconciled.  Focused explicit-path
  precheck, real rendercheck, and strict proof-contract check pass.  Decision:
  repaired, confidence 1, with all twelve direct dependencies recorded.
  Open gap: none in this item.

Next action: repair the \(n=1\) definition, cellular boundary and orientation
comparison in ex-sign-local-system-on-real-projective-space, then run and
record its focused checks before revisiting the cyclic supplier's dependent
receipts.

### Independent repair 2 — ex-sign-local-system-on-real-projective-space

- Confirmed defect: the former statement called \(g\) the nonidentity element
  of \(\pi_1(\mathbb {RP}^n)\) for every \(n\ge1\), used \(S^1\) as though it
  were the universal cover of \(\mathbb {RP}^1\), and consequently treated a
  nontrivial sign system as the orientation system of the oriented circle.
- Exact repaired claim/conventions: for \(n=1\), the degree isomorphism
  \(\pi_1(\mathbb {RP}^1)\cong\mathbb Z\) defines the action
  \(m\mapsto(-1)^m\).  The lifted one-cell in the universal cover
  \(\mathbb R\) has boundary \(g\widetilde v-\widetilde v\) (or the
  inverse-convention variant), which evaluates to \(\pm2\).  Only for
  \(n\ge2\) is \(S^n\to\mathbb {RP}^n\) used as the universal cover, with
  group-ring boundary \(1+(-1)^kg\).  The homology table is unchanged.
- Proof evidence and locators: Davis--Kirk Chapter 5 section 2.1, Exercise 77,
  printed pages 99--100; the complete published circle fundamental-group
  theorem; the published local-cellular-chain theorem; the published
  antipodal-degree calculation; and the published orientation-character
  interface.  The circle identification is the explicit map
  \(t\mapsto[\cos(\pi t):\sin(\pi t)]\).
- Dependencies examined and registered:
  thm-cellular-chains-compute-homology-with-local-coefficients,
  prop-the-manifold-orientation-system-is-a-local-system,
  thm-fundamental-group-of-the-circle, and
  prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps.
- Boundaries and choice: the proof now separates \(n=1\), \(n\ge2\), and the
  outside-range \(n=0\); computes \(k=0\), interior and top degrees; checks
  both directions of the even-\(n\) orientation assertion; and treats
  orientation reversals as harmless chain signs.  All lifts are explicit
  finite data and no AC is used.
- Records/checks: the manifest dependencies and strategy, Hatcher coverage
  support, item proof and item-specific contract were reconciled.  Focused
  explicit-path precheck, real rendercheck, and strict proof-contract check
  pass.  Decision: repaired, confidence 1, with all four direct dependencies
  recorded.  Open gap: none in this item.

Next action: enumerate every receipt made stale by these two repaired items,
reread each affected consumer and contract in dependency order, refresh only
unchanged completed consumers, and then rerun all batch-level gates.

### Dependent refresh 1 — lem-adem-double-power-comparison

- Rechecked claim/use: the double-power coefficient extraction uses the
  cyclic-basis formula on the first projective factor before row--column
  transposition and the binary high-degree calculation.
- Repair: step 1.1 now chooses one \(Q_N\) larger than every nonnegative basis
  degree in the finite extraction and performs external Cartan on the finite
  regular complex \(Q_N\times K\).  Naturality makes the answer independent
  of increasing \(N\); no nonregular one-cell projective skeleton is supplied
  to the operation.  The two coefficient sums and Lucas/Frobenius calculation
  are unchanged.
- Evidence/dependencies: reread the repaired cyclic-square supplier, the
  wreath double-power symmetry supplier and AC, together with
  Steenrod--Epstein Chapter VIII Convention 1.4 and Theorem 1.5 through the
  high-degree calculation, printed pages 118--119.
- Boundaries/choice: the sufficiently large \(Q_N\), every outside-range
  coefficient, \(r=0\), \(r=\lfloor a/2\rfloor\), the strict inequalities and
  least admissible \(s\) remain explicit.  AC is propagated from the carrier
  and field-duality work in the cyclic supplier and the wreath comparison.
- Records/checks: item, manifest strategy and proof contract were reconciled;
  focused precheck, real rendercheck and strict contract pass with no warning.
  Decision: repaired, confidence 1, with the same three direct dependencies.
  Open gap: none.

Next action: recheck the cellular-to-singular cup-\(i\) comparison against the
repaired cyclic supplier and refresh it only if its carried comparison still
closes every degree and endpoint.

### Dependent refresh 2 — lem-finite-cellular-cyclic-squares-agree-with-singular-cup-i-squares

- Claim/use rechecked: the item compares the cyclic coefficient
  \(D_{q-i}\) on an arbitrary finite regular \(K\) with the singular
  cup-\(i\) square through a cell-carried chain map and an equivariant carrier
  homotopy.
- Dependency effect: this consumer uses only the repaired supplier's
  definition and complete index-range formula, neither of which changed.
  It does not use the repaired \(BC_2\) basis calculation and never feeds a
  nonregular projective CW complex to the cyclic construction.
- Evidence/dependencies: reread all eight current dependencies and the full
  item/contract, plus Steenrod--Epstein Chapter V section 2 and Chapter VIII
  section 2, printed pages 60--61 and 123--124, and Mosher--Tangora Chapter 2,
  printed pages 14--18.
- Boundaries/choice: the acyclic mapping-cone complement, equivariant carrier
  fillings, unnormalized degeneracies, \(i=0,q\), both outside-range
  directions, empty/zero/point cases and the exact AC uses remain closed.
- Checks/decision: focused precheck, real rendercheck and strict contract pass
  without warning.  No content or dependency edit was needed.  Decision:
  accept, confidence 1, with all eight direct dependencies recorded.
  Open gap: none.

Next action: reread the complete Adem theorem's high-degree use, degree descent
and finite-detector passage after both refreshed suppliers, then refresh its
receipt and run the complete Batch-5 gates.

### Dependent refresh 3 — thm-adem-relations-for-steenrod-squares

- Claim/use rechecked: the theorem transfers the high-degree cyclic formula
  to singular squares on finite regular complexes, descends one degree at a
  time by external product with the nonzero triangle-circle generator, and
  applies the finite-regular detector separately in each input degree.
- Dependency effect: the refreshed double-power supplier now performs its
  basis calculation on \(Q_N\), and the cellular--singular comparison remains
  unchanged and current.  Injectivity of the comparison, Kunneth injectivity
  on the circle factor and the finite descent still prove every degree.
- Evidence/dependencies: reread all nine direct dependencies, the complete
  theorem and contract, and Steenrod--Epstein Chapter VII Lemma 6.8 and
  Chapter VIII Convention 1.4/Theorem 1.5, printed pages 114 and 118--119.
- Choice/boundaries: updated the AC trace to include the cyclic supplier's
  field duality for the \([w_d]\) basis on finite regular \(Q_N\), in addition
  to cyclic/wreath carriers, the cellular--singular cone/carrier choices,
  finite detection and additive Kunneth.  Empty/zero/point cases, both
  summation endpoints, strict \(0<a<2b\), outside-range operations,
  degeneracies and the least high degree remain checked.
- Checks/decision: focused precheck, real rendercheck and strict contract pass
  without warning.  Decision: repaired, confidence 1, with all nine direct
  dependencies recorded.  Open gap: none.

Next action: confirm that the only remaining owned open rows are the four
driver-certified post-baseline additions, then run the full Batch-5, Batch-6
and Batch-9 author and repository-level validation gates.

## Final post-certification validation and handoff

This section supersedes the validation figures in “Retry dispatch validation
and handoff” above.  The two independent-certification defects and every
receipt invalidated by them are now resolved.

- Complete author checks pass for all three containing batches.  Batch 5 has
  fingerprint
  `0d1b6336bcdb7d646ed198935eaa9f71dabf8d322b0533d73440c9ec4d1d466b`:
  52 explicit proof prechecks, 68 real renders, 64 content-policy items and
  strict contracts 64/64, with no warning.  Batch 6 has fingerprint
  `0e8457e314e5b6849f35513b977730e5ba394da34c13fef8d2c20e4ba3df5cd6`:
  33 proof prechecks, 55 real renders, 51 content-policy items and strict
  contracts 51/51.  Its one nonfatal contract warning remains the previously
  triaged shotgun-bracket heuristic on the simple Postnikov-stage theorem.
  Batch 9 has fingerprint
  `55f992d9fe0adc673b2a6a3ea6bf98364024f3e27f9aaa7fb88805d83a076fb2`:
  16 proof prechecks, 22 real renders, 20 content-policy items and strict
  contracts 20/20, with no warning.
- The combined coverage checklist passes all five A pages and all 168
  harvested results with zero errors and zero warnings.  Citation fidelity
  checks 538 exact citations across the 135 authored items: zero missing
  excerpts and zero widening candidates.
- The Batch-5 and Batch-9 cross-batch inputs remain `[]`.  All nine Batch-6
  consumer rows remain verified against their completed Batch-5 suppliers.
  The unified frontier ledger was refreshed from every batch input without
  dropping sibling rows, and the subsequent `--require-reviewed` refresh now
  exits zero.  The serial published-consumer-supplier ledger was not edited.
- `validate-plan.mjs research/plan-spec.json` exits zero.  Its only diagnostics
  are 3,868 repository-wide `redundant-prereq` warnings; it reports no item
  cycle, forward reference, B-page dependency or unresolved ID among the
  populated plan rows.  The pre-splice mismatches already recorded above
  remain Step-4 work: splice the five owned A/B inventories and replace the
  stale Mosher--Tangora Wu locator/strategy with the current
  Ranicki/Hatcher/Davis--Kirk source record and twisted-Bockstein derivation.
- The scope gate is current and closed for all five owned pairs.  Of 135 owned
  items, 131 have current confidence-1 author receipts or valid driver
  certification.  The only four locally open rows are fully authored
  post-baseline suppliers reserved by the workflow for automatic driver
  certification:
  `def-orientation-local-system-on-a-manifold-with-boundary`,
  `lem-canonical-twisted-fundamental-classes-over-compact-subsets`,
  `lem-finite-join-models-for-circle-and-two-point-groups`, and
  `lem-integral-mackey-and-higman-for-og-lattices`.  They are the local
  suppliers added during this dispatch and are not unresolved mathematical
  obligations.  No self-review receipt was manufactured for them.
- Repository-wide `depcheck --quiet` now exits zero: no hard B-leaf error,
  cycle, unresolved reference or draft item on a published page.  The single
  grandfathered legacy B-leaf warning is outside this dispatch.  Scoped
  `git diff --check` also passes.
- Completed post-certification decision IDs are
  `lem-finite-cellular-cyclic-squares-cartan-and-basis-action` (`repaired`),
  `ex-sign-local-system-on-real-projective-space` (`repaired`),
  `lem-adem-double-power-comparison` (`repaired`),
  `lem-finite-cellular-cyclic-squares-agree-with-singular-cup-i-squares`
  (`accept`), and `thm-adem-relations-for-steenrod-squares` (`repaired`), all
  confidence 1 with their exact direct dependencies recorded.  All remaining
  assigned items retain their current completed decisions documented above.
- No local content, dependency, source, rendering, coverage or proof-contract
  gap remains.  The published concerns recorded earlier in this report remain
  unchanged for serial owner reconciliation: the two confirmed high-confidence
  AC-propagation defects and the eight medium-confidence downstream candidates.
  They are not edited here and do not block the sound new suppliers.

Final next action: the build driver should certify the four post-baseline
additions and Step 4 should perform the recorded serial plan/prose and published
concern reconciliation.  No owner-held local escalation remains.
