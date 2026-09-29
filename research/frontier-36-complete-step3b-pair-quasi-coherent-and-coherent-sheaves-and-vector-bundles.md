# Step 3b — scaffold audit and authoring, pair `quasi-coherent-and-coherent-sheaves-and-vector-bundles`

- Run: `frontier-36-complete`; batch 7 (alpha group `a`).
- A page: `quasi-coherent-and-coherent-sheaves-and-vector-bundles` (37 items, levels 0–10).
- B page: `quasi-coherent-and-coherent-sheaves-and-vector-bundles-examples` (10 items, levels 3–10).
- Output manifest: `research/frontier-36-complete-batch-7.pages.json`.
- Scope decision (Step 3a, `sufficient`) held: `research/frontier-36-complete-step3a-review-quasi-coherent-and-coherent-sheaves-and-vector-bundles.json`.
- Working contract pipeline: per-item entries in `scratchpad/b7/contracts/`, assembled by `scratchpad/b7/assemble.mjs` into `research/frontier-36-complete-batch-7.proof-contracts.json`.

## Checkpoint (per-item progress, in dispatch order)

Legend: `authored` = item file written and precheck/rendercheck clean; `contract` = per-item proof contract written and green; `decision` = Step 3b item receipt recorded.

| # | level | item | state | notes |
|---|-------|------|-------|-------|
| 1 | 0 | def-associated-sheaf-module-affine-scheme | authored, contract, decision | distinguished-open data, restriction maps via universal property |
| 2 | 0 | def-fibre-of-module-at-point | authored, contract, decision | fibre = stalk mod maximal ideal |
| 3 | 0 | def-support-module-sheaf | authored, contract, decision | support by stalks |
| 4 | 0 | lem-fitting-ideals-presentation-independent | authored, contract, decision | shear/augmentation proof, choice-free |
| 5 | 0 | lem-principal-affine-module-descent | authored, contract, decision | finite principal cover equalizer |

(Further rows appended as each item closes.)

## Open obligations at start of this session (historical; superseded by final status below)

- Batch-5 in-run suppliers used by this pair (`lem-relative-spec-glues-affine-algebras`, `thm-affine-morphism-relative-spec-characterization`, `lem-closed-immersion-affine-quotient-and-base-change`, `def-affine-local-quasi-coherent-algebra`) are draft on disk and must be verified before the consuming items close.
- Page prerequisite `flat-smooth-and-etale-morphisms` (batch 6) is in flight; its scope review is not yet recorded on disk.
| 12 | 3 | lem-associated-sheaf-restriction-affine-open | authored, contract, decision | basis comparison on distinguished opens inside W; basis-gluing step proved in-item |
| 13 | 3 | def-fitting-ideal-sheaf | authored, contract, decision | repaired boundary values: I_r nesting gives Fitt_{k-1} ⊆ Fitt_k; Fitt_k(0)=O_X, free rank r gives 0 for k<r |
| 14 | 3 | def-internal-hom-qc-sheaves | authored, contract, decision | sections = Hom_OU; no QC claim for arbitrary F |
| 15 | 3 | def-invertible-sheaf | authored, contract, decision | locally free rank exactly one; generator reformulation |
| 16 | 3 | def-coherent-module-scheme | authored, contract, decision | kernel condition + non-Noetherian O_X example (finitely presented, not coherent) |
| 17 | 3 | lem-sheaf-nakayama-fibre-detects-generation | authored, contract, decision | fibre vanishing spreads to basic open; cokernel Nakayama for generation |
| 18 | 3 | lem-dual-locally-free-and-base-change | authored, contract, decision | dual locally free same rank, ev iso, canonical f*(E^v)=(f*E)^v; pullback of free modules proved in-item |
| 19 | 3 | thm-support-finite-type-qc-closed | authored, contract, decision | affine V(Ann M); closedness by all-charts cover |
| 20 | 3 | cex-stalk-versus-fibre-module (B) | authored, contract, decision | Spec k[t] at (t): stalk k[t]_(t) vs fibre k |
| 21 | 3 | ex-associated-sheaf-localized-module (B) | authored, contract, decision | Spec A_f = D(f); sections M_{fa} = (M_f)_{a/1} |
| 11 | 3 | lem-associated-sheaf-restriction-affine-open | authored, contract, decision | (M~)|W = (C tensor M)~ for arbitrary affine open W |
| 22 | 4 | lem-invertible-sheaf-dual-tensor-inverse | authored, contract, decision | evaluation iso via chart multiplication; dual transitions u_ij^{-1}; canonical, no choice |
| 23 | 4 | thm-affine-quasi-coherent-equivalence | authored, contract, decision | unit + counit over finite principal cover; Gamma(X,F) = descent module via sheaf equalizer; full faithfulness by determination on basics; AC accounted, zero ring covered |
| 24 | 4 | thm-fitting-ideals-control-rank-loci | authored, contract, decision | fibre dim = n - rank of presentation matrix; V(Fitt_r)={dim>r}; converse by unit-minor block reduction; k[eps]/eps^2 sharpness example |
| 25 | 4 | thm-locally-free-locus-finite-presentation-open | authored, contract, decision | lift basis + Nakayama -> epi O^r->F; kernel f.g. by finite presentation; localize to kill kernel; fibre-dim sharpness example |
| 26 | 4 | ex-associated-sheaf-quotient-module (B) | authored, contract, decision | (A/I)~ = O_X/I~ on distinguished opens; support V(I); extremes I=0, I=A |
| 27 | 5 | cor-affine-qc-sheaf-determined-global-sections | authored, contract, decision | counit iso + naturality/full faithfulness => morphisms determined by global sections |
| 28 | 5 | lem-internal-hom-fp-qc | authored, contract, decision | Hom(M,N)_f = Hom_{A_f}(M_f,N_f) via localization-of-Hom; internal Hom is Hom_A(M,N)~ on charts |
| 29 | 5 | thm-qc-ideal-closed-subscheme-correspondence-complete | authored, contract, ESCALATED | forward: I -> (V(I), O_X/I) globally defined ringed space; converse uses unfinished batch-5 supplier lem-closed-immersion-affine-quotient-and-base-change in step 1.2; awaiting supplier verification |
| 30 | 5 | thm-quasi-coherence-check-affine-cover | authored, contract, decision | iff from pointwise locality + affine equivalence kappa_U; compatibility square via naturality of (M~)|_W=(C⊗_A M)~; steps 1.1,1.2,2.1,3.1; choice accounted |
| 31 | 5 | ex-fitting-ideal-two-by-two-presentation (B) | authored, contract, decision | diag(x,y): Fitt_0=(xy), Fitt_1=(x,y), Fitt_2=A; fibre dim [x∈p]+[y∈p] = 2 at origin, 1 on punctured axes, 0 off; not locally free; steps 1.1,2.1,2.2,3.1,4.1,5.1,6.1 |
| 32 | 5 | ex-line-bundle-projective-line-transition (B) | authored, contract, decision | two-affine P^1: O(n)^v≅O(-n) (dual transition t^{-n}), O(n)⊗O(m)≅O(n+m) (transition t^{n+m}) via uniqueness of glued sheaves; O(0)=O_X; steps 1.1,2.1,2.2,3.1 |
| 33 | 6 | lem-pullback-qc-module-quasi-coherent | authored, contract, decision | affine comparison delta via distinguished-open maps, stalkwise B_q⊗_{A_p}M_p; f*F|_U≅(B⊗_A M)~; global by all-admissible affine cover; steps 1.1,1.2,2.1,3.1,4.1,5.1 |
| 34 | 6 | lem-tensor-qc-modules-quasi-coherent | authored, contract, decision | (M~⊗N~)≅(M⊗_A N)~ via distinguished-open delta and stalkwise M_p⊗N_p; global by affine cover criterion; no selection; steps 1.1,2.1,3.1,4.1,5.1 |
| 35 | 6 | thm-kernels-cokernels-qc-modules | authored, contract, decision | affine: ker/im/coker of u~ are (ker u)~,(im u)~,(coker u)~ via stalkwise exactness of localisation; global by affine cover; QCoh abelian subcategory (biproducts too); no quasi-separatedness; steps 1.1,2.1,3.1,4.1,5.1,6.1 |
| 36 | 6 | cex-qc-sheaf-global-sections-not-determine-nonaffine (B) | authored, contract, decision | P^1_k: global section of O(-1) is pair (a(t)e_0,b(u)e_inf) with ub(u)=a(u^{-1}); u^d coefficient comparison forces a=b=0, so Gamma(O(-1))=0, while O(-1) nonzero (free rank 1 frame e_0 on U_0); Gamma does not determine the sheaf; 0->O(-1) invisible on sections; P^1_k not affine; steps 1.1,2.1,3.1,4.1,4.2,5.1 |
| 37 | 7 | thm-coherent-sheaves-abelian-noetherian-scheme | authored, contract, decision | locally Noetherian: (1) coherent iff finite type, converse via charts D(f) Noetherian and ker psi f.g. [F4]; finite type detected on every affine chart (steps 1.1-1.2); (2) kernels/images/cokernels and finite direct sums coherent (steps 3.1, 4.1); (3) extensions coherent via exact Gamma(V,-) on affine charts: 0->M->P->N->0 with M,N f.g. gives P f.g. (step 3.2); AC inherited (step 5.1) |
| 38 | 7 | thm-pushforward-qc-under-qcqs-morphism | authored, contract, decision | affine model: g_*G = N~_R via fraction comparison chi_r: N_r -> N_{psi(r)} on the D(r) basis (steps 1.1, 2.1, 3.1); covering data from qc/qs: finite affine U_i and finite affine covers U_ijk of the overlaps (step 1.2); d: sum (f|U_i)_* -> sum (f|U_ijk)_* has objectwise kernel F(f^{-1}W) = ((f_*F)|_U)(W) (step 5.1); kernel of QC morphism is QC (step 6.1); finite selections only (step 7.1) |
| 39 | 8 | lem-symmetric-algebra-qc-and-base-change | authored, contract, decision | affine universal property via sheaf-level universal property + affine equivalence; beta: B⊗Sym_A(M) = Sym_B(B⊗M) by functor-of-points comparison, graded and compatible with A→B→C (steps 1.1, 2.1); restriction Sym(F)|_W = Sym(F|_W) by gluing chart models (step 3.1); pullback f*Sym(F) = Sym(f*F) via affine pullback + beta + gluing (step 3.2); QC/graded/O[T_1..T_r] (step 3.3); canonical, F=0, X=∅ (step 4.1). NOTE scaffold dep thm-localisation-of-modules-commutes-with-quotients-and-sums dropped (actual proof uses universal-property/base-change route) — report for Step 4 |
| 40 | 8 | rem-coherent-needs-noetherian-or-coherent-ring-care | authored, contract, decision | locally-Noetherian hypothesis essential; non-Noetherian example A=k[x,y_i]/(xy_i,y_iy_j): A free rank 1, ker(.-x)=Ann_A(x) not f.g.; consumer bullets; decision recorded |
| 41 | 8 | cex-finite-type-module-not-locally-free (B) | authored, contract, decision | Spec k[x], F=(k[x]/(x))~ coherent finite type; fibres k at (x) (dim 1) and 0 at eta=(0); generic point in every nonempty open (closure{(0)}=X); free chart F|V=O_V^r has fibre kappa(y)^r; fibre 0 at eta forces r=0, dim-1 fibre at (x) forces r=1, contradiction; steps 1.1-4.1 + 5.1 AC; canonicalised |
| 42 | 8 | cex-pushforward-qc-needs-quasi-separated (B) | authored, contract, decision | Stacks 110.30: A=k[t,z,x_i]/(t^n x_n^n z); X=two copies of Spec A glued along V=union D(x_n); I=k-span of divisible monomials (step 1.1); t^m z not in I; A->prod A_{x_n} injective via monomial test (step 2.3); z dies in each A_{tx_n}; V not qc via prime (t-1,z,x_i:i!=j) with A/p=k[x_j] (step 1.2); f qc (1.3) not qs (2.4); Gamma=A diagonal (3.1), (z,0) not in image of A_t (3.2/4.1) so f_*O_X not QC; steps canonicalised 1.1-6.1 |
| 43 | 8 | ex-skyscraper-coherent-closed-point (B) | authored, contract, decision | Noetherian A, maximal m: F=(A/m)~ coherent (1.1); stalks A/m at m and 0 elsewhere (1.2-1.3); fibre A/m at m (2.1); F(D(f)) = k or 0 exactly as m in D(f) (1.4); gluing over the distinguished-open basis with identity localisation restrictions on k gives F(U)=k iff m in U and 0 otherwise, compatibly with restrictions (2.2), so F = i_*(A/m) (3.1); only inherited AC (4.1); step 2.2 tightened to state injectivity of the restrictions explicitly |
| 44 | 9 | def-vector-bundle-scheme | authored, contract, decision | geometric vector bundle = affine X-scheme + normalised grading on pi_*O_V, locally graded-free Sym(O_U^r); rank = rk(A_1) well defined via IBN; transitions automatically Sym(theta) by degree-one generation; V(E)=Spec_X Sym(E^vee) verified affine-locally module-associated; V(0)=X, V(O^r)=A^r_X; morphisms = X-morphisms with graded comorphism; deps extended with def-symmetric-algebra-qc-module, def-quasi-coherent-module-scheme, def-affine-morphism-schemes, def-scheme-over-base, def-direct-image-sheaf, def-morphism-of-schemes (noted for Step 4) |
| 45 | 10 | thm-vector-bundles-locally-free-sheaves-equivalence | authored, contract, decision | full proof of the equivalence: chartwise relative-Spec adjunction (steps 2.1/3.1, gluing morphisms over a cover of the source, affine anti-equivalence on charts); functor V on morphisms alpha->Sym(alpha^vee) (4.1); Phi=A_1^vee and functoriality (1.3); unit Psi(mu) iso + naturality (4.2); counit ev^{-1} (5.1); equivalence (6.1), full faithfulness (6.2); contravariant convention W(F)=V(F^vee), F=Sym^1 (5.2); 24 citations, 12 derivations, 8/8 boundaries; no escalation needed — all suppliers current |
| 46 | 10 | ex-rank-zero-locally-free-sheaf (B) | authored, contract, decision | zero module is O_X^0 finite locally free rank 0 (1.1); Sym(0)=O_X since degree-one part vanishes (1.2); V(0)=Spec_X O_X=X identity X-scheme via chartwise Spec Gamma(U,O_X)=U (1.3); rank 0 (1.4); fibres: preimage of x is one point, module fibre 0(x)=0 (2.1); no choice beyond inherited (3.1); ai-generated statement with generation.role example |

## Completion checkpoint — rows not previously tabulated

The seven items below were authored but never added to the table above; row
numbers are dispatch order. The earlier table lists
`lem-associated-sheaf-restriction-affine-open` twice (rows 12 and 11); it is
one item. With these seven rows every one of the 47 items has a checkpoint row.

| # | level | item | state | notes |
|---|-------|------|-------|-------|
| 6 | 1 | def-quasi-coherent-module-scheme | authored, contract, decision | chartwise definition: every point has an affine open on which F is isomorphic to an associated sheaf; stable under restriction to affine opens; zero sheaf and empty scheme allowed; no Noetherian hypothesis |
| 7 | 1 | thm-associated-module-sheaf-exists | authored, contract, decision | distinguished-open data form a basis sheaf with sections M_f including D(0)=empty; unique extension with O-action; AC used exactly through finite distinguished refinements and prime existence |
| 8 | 2 | def-finite-type-finite-presentation-module-sheaf | authored, contract, decision | local surjections O^n→F and local finite presentations O^m→O^n→F→0; on sufficiently small affine charts these are finite/finitely presented modules; no Noetherian hypothesis |
| 9 | 2 | def-locally-free-sheaf-finite-rank | authored, contract, decision | E|U is isomorphic to O_U^r on a neighbourhood; finite locally free = locally some finite rank, possibly varying by component; rank 0 is the zero sheaf; states finite locally free implies quasi-coherent (discharges Step 3a scope note 2) |
| 10 | 2 | lem-associated-sheaf-sections-basic-open | authored, contract, decision | Gamma(D(f),tilde M)=M_f naturally in M and f; restrictions are further localisations |
| 11 | 2 | lem-associated-sheaf-stalk-localization | authored, contract, decision | canonical stalk map (tilde M)_p→M_p is an A_p-linear isomorphism, natural in M |
| 37 | 7 | def-symmetric-algebra-qc-module | authored, contract, decision | T(F)/(sections v⊗w−w⊗v), graded with degree zero O_X and degree one F; on Spec A it is the associated sheaf of Sym_A(M) |

## Final status (handoff)

### Inventory and decisions

- All 47 items (37 A + 10 B) are authored, each has a proof-contract entry
  (`research/frontier-36-complete-batch-7.proof-contracts.json`, 47/47), and
  each has a current Step 3b item receipt: 46 x `accept`, 1 x owner-held
  `escalate` (`thm-qc-ideal-closed-subscheme-correspondence-complete`).
- No item ID was added to the manifest during authoring: the 37/10 inventory
  matches the Step 3a receipt. The six scaffolder support items
  (`lem-principal-affine-module-descent`,
  `lem-associated-sheaf-restriction-affine-open`, `lem-internal-hom-fp-qc`,
  `def-symmetric-algebra-qc-module`,
  `lem-symmetric-algebra-qc-and-base-change`,
  `lem-fitting-ideals-presentation-independent`) were already in the
  scaffold and are authored; no local supplier additions were needed beyond
  them. All are registered in the manifest, coverage (47 harvested rows),
  contracts and the two page files.
- Decision refresh 2026-09-29: 18 receipts were invalidated by a shared
  upstream change (published `def-exactness-at-a-node` gained the dependency
  `def-subobject-and-quotient-object`; its statement and proof body are
  unchanged) together with other groups' in-flight plan-spec metadata edits.
  A modification-time scan of each affected transitive input closure found no
  changed item file except that one dependency edge, and no cited published
  item file changed. After re-running precheck, rendercheck and the strict
  contract on the unchanged items, the 18 were re-recorded as `accept` with
  the same examined dependency lists and a reason stating the delta.
  `thm-vector-bundles-locally-free-sheaves-equivalence` and
  `ex-rank-zero-locally-free-sheaf` were recorded after the change and stay
  current.
- Behaviour-preserving repair 2026-09-29:
  `thm-qc-ideal-closed-subscheme-correspondence-complete` cited the B-page
  item `ex-associated-sheaf-quotient-module` in Facts [F2], which repo-wide
  depcheck rejected (`b-leaf-content`, plus the induced A/B `page-cycle`).
  The citation was replaced by the A/published suppliers
  `thm-localisation-of-modules-commutes-with-quotients-and-sums`,
  `lem-associated-sheaf-stalk-localization` and `def-support-module-sheaf`;
  the theorem statement, fact labels and every proof step are unchanged, and
  the three new citations were added to the proof contract with exact quotes.
  depcheck now reports nothing for this pair. The item's escalated decision
  is unchanged and remains owner-held. Sibling consumers of this item in other
  batches (for example batch 9's `lem-schematic-closure-and-dense-agreement`)
  may need their own Step 3b receipts refreshed by their owners after this
  edit; no batch-7 item depends on it.

### Page files written

- `library/scheme-theory/quasi-coherent-and-coherent-sheaves-and-vector-bundles.md`
  (`status: draft`): the seven manifest `requires`, all 37 A items in
  manifest order, and overview prose covering the affine construction and
  equivalence, quasi-coherence closure properties, finite type/presentation
  and the coherence convention (finite presentation is not coherence over
  non-Noetherian bases; the locally Noetherian abelian theorem), internal
  Hom, locally free/invertible/dual, symmetric algebras, the vector-bundle
  dictionary with both conventions and rank 0 allowed, support/fibre/
  Nakayama/Fitting tools, the replacement closed-subscheme correspondence,
  and AC and degenerate-case accounting with no implicit Noetherian
  hypothesis.
- `library/scheme-theory/quasi-coherent-and-coherent-sheaves-and-vector-bundles-examples.md`
  (`status: draft`): all 10 B items in manifest order and prose for the
  quotient/support and localization examples, the coherent skyscraper, the
  two-chart O(n) twists, the global-sections non-determination, the non-qc
  pushforward, finite type without local freeness, the diag(x,y) Fitting
  computation, the rank-zero bundle and stalk-versus-fibre.
- Both files pass rendercheck (YAML, KaTeX, multiline-display and wikilink
  checks).

### Checks actually run (2026-09-29, on the current tree)

- `node tools/tsx-run.mjs tools/precheck.mts <47 explicit item paths>`:
  34 proof-bearing items checked, 0 failing (definition/remark/example items
  without phase bodies are skipped by the tool).
- `node tools/rendercheck.mjs --quiet <47 items + both page files>`:
  OK, 49 files.
- `node tools/content-policy.mjs research/frontier-36-complete-batch-7.pages.json`:
  47 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-36-complete-batch-7.proof-contracts.json --strict`:
  0 errors, 0 warnings, 47/47 items checked.
- `node tools/item-dependency-levels.mjs check --run frontier-36-complete`:
  948 items across 60 pages, maximum level 18, exit 0.
- `node tools/validate-plan.mjs research/plan-spec.json`: OK (acyclic and
  consistent declared page order; no item-level cycles, forward references,
  B-page dependencies or unresolved ids; 378 pages still carry no item list,
  warning only).
- `node tools/depcheck.mjs`: this pair clean; the only remaining hard error
  repo-wide is the unrelated page cycle
  `jacobi-fields-conjugate-points-and-the-cut-locus-examples ->
  jacobi-fields-conjugate-points-and-the-cut-locus -> ...`, owned by another
  group.
- `node tools/coverage-checklist.mjs research/frontier-36-complete-batch-7.coverage.json`:
  1 page, 47 harvested results, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-36-complete --phase final`:
  exit 1 because the run-wide work list is dominated by other pairs' open
  items (328 at the final check, 621 items accepted run-wide); the only open
  work item for this pair is the owner-held escalation.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-36-complete`:
  refreshed and deduplicated after this pair's 10 cross-batch input rows were
  updated.

### Cross-batch dependency input

`research/frontier-36-complete-batch-7.cross-batch-dependencies.json` now
covers all 10 declared cross-batch edges of this pair (the scaffold file had
4): 8 `verified`, 2 `open`.

- verified: `def-vector-bundle-scheme` from `def-affine-local-quasi-coherent-algebra`,
  `lem-relative-spec-glues-affine-algebras`,
  `thm-affine-morphism-relative-spec-characterization` (batch 5; statements
  reread, receipts current: repaired 2026-09-27T22:07:01Z, repaired
  2026-09-28T02:11:12Z, accept 2026-09-28T09:34:34Z).
- verified: `thm-vector-bundles-locally-free-sheaves-equivalence` from the
  same three batch-5 items.
- verified: `ex-rank-zero-locally-free-sheaf` from
  `lem-relative-spec-glues-affine-algebras` and
  `thm-affine-morphism-relative-spec-characterization`.
- open: `thm-qc-ideal-closed-subscheme-correspondence-complete` from
  `lem-closed-immersion-affine-quotient-and-base-change` (supplier statement
  matches the step 1.2/[F6] use, but its Step 3b receipt is stale; see open
  obligations).
- open: page `quasi-coherent-and-coherent-sheaves-and-vector-bundles` from
  `flat-smooth-and-etale-morphisms` (batch 6 unfinished).

### Open obligations

1. Owner-held escalation `thm-qc-ideal-closed-subscheme-correspondence-complete`:
   it consumes the batch-5 in-run supplier
   `lem-closed-immersion-affine-quotient-and-base-change` in step 1.2 (and
   Fact [F6]) for the affine quotient description of a closed immersion,
   including the empty case I=A. The supplier is authored and its statement
   matches the use exactly, but its receipt (`repaired`, 2026-09-27T20:09:04Z)
   is currently stale ("current item audit required" in the Step 3b final
   work list) after the shared upstream hash change; batch-5's owner must
   refresh it. The consumer decision stays `escalate`: the owner must
   reconcile the exact use after the supplier's receipt is current. The
   published defective `thm-quasi-coherent-ideal-closed-subscheme-correspondence`
   and `thm-affine-closed-immersions-quotient-rings` are deliberately unused,
   and the replacement theorem's forward direction is independent of the
   supplier.
2. Page prerequisite `flat-smooth-and-etale-morphisms` (batch 6): not
   verifiable at check time. Its manifest holds 63 items; 50 have Step 3b
   receipts (46 accept, 1 repaired, 3 escalate) and 13 have none, and its
   A-page library file has not been written. No batch-7 item cites a batch-6
   item, so only the declared page order is affected; batch 6's owner owns
   completion, and the edge must be rechecked before Step 8.
3. Published concern `def-quasi-coherent-ideal-sheaf` (suspicion, high
   confidence, metadata defect): it is used by `def-fitting-ideal-sheaf` and
   `thm-qc-ideal-closed-subscheme-correspondence-complete` for its definition
   only. Its frontmatter declares only `def-ideal-sheaf` and
   `def-affine-open-subscheme`, while its definition invokes the
   associated-module construction (confirmed by direct read; recorded in the
   Step 3a review). Repair strategy: the owner/serial reconciler adds the
   missing associated-sheaf dependency; do not edit
   `published-consumer-supplier-ledger.md` from this dispatch.
4. Published concerns `thm-affine-closed-immersions-quotient-rings` and
   `thm-quasi-coherent-ideal-closed-subscheme-correspondence` (A-P,
   owner/Step-5 held): not used anywhere in this pair (grep-verified). The
   pair's replacement route is the escalated batch-7 theorem above; until the
   escalation clears, no accepted in-run replacement exists.
5. `lem-intersection-affine-opens-covered-principal-opens`: owner-repaired
   (A-R per Step 3a) and not used by this pair (grep-verified); no remaining
   exposure here, recheck at Step 8.
6. Unrelated repo-wide failure: the depcheck page cycle
   `jacobi-fields-conjugate-points-and-the-cut-locus` (another group's batch;
   not touched by this dispatch).

### Step 4 notes (pre-splice plan mismatches)

- `research/plan-spec.json` currently has `items: []` for both pages; the
  splice will copy the 37/10 manifest items.
- `lem-symmetric-algebra-qc-and-base-change` still carries the scaffold
  dependency `thm-localisation-of-modules-commutes-with-quotients-and-sums`
  in the manifest, but the authored item and its proof do not use it (the
  proof routes through the universal property and base change), so the
  spliced plan will carry an unused dependency edge.
- `thm-vector-bundles-locally-free-sheaves-equivalence` similarly keeps the
  scaffold dependency `thm-gluing-sheaves` in the manifest while the authored
  item does not declare or use it.
- `def-vector-bundle-scheme`'s item file declares seven dependencies beyond
  the manifest entry (`def-affine-local-quasi-coherent-algebra`,
  `def-affine-morphism-schemes`, `def-direct-image-sheaf`,
  `def-morphism-of-schemes`, `def-quasi-coherent-module-scheme`,
  `def-scheme-over-base`, `def-symmetric-algebra-qc-module`); the manifest
  entry does not carry them, and neither does
  `thm-vector-bundles-locally-free-sheaves-equivalence` carry its item-file
  batch-5 dependencies. These are report-only for the serial Step 4
  reconciliation.
- The A page's `requires` in the manifest match `plan-spec.json` exactly
  (Step 3a check, re-read when the page file was written).

### Discharged Step 3a obligations

- Scope note 2 ("finite locally free implies quasi-coherent" used when
  forming Sym(E^vee)) is discharged inside `def-locally-free-sheaf-finite-rank`
  (the local model O_U^r satisfies the affine-module condition of
  `def-quasi-coherent-module-scheme`), and `def-vector-bundle-scheme` uses
  that when forming Sym(E^vee).
- The quasi-coherent-ideal/closed-subscheme correspondence is re-proved
  locally as `thm-qc-ideal-closed-subscheme-correspondence-complete` rather
  than cited from the defective published theorem (escalation above).
- Exterior powers and determinants of finite locally free sheaves (scope
  note 1) remain a batch-16 consumer-side obligation; no batch-7 item needs
  them.
