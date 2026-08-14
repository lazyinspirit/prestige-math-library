# subjects-01 reconciliation report

Scope: the thirteen tracks in `subjects-01-SEAMS.md` §2. I read every
`research/plan-*.md`; the routing table below covers the amendment blocks owned
by those thirteen tracks. A location is a line in the present disk version, not
an immutable locator. `stale` means the requested state is already present in a
later subjects-01 scaffold, or that a later section of the same track expressly
supersedes the request. No amendment is applied here.

## 1. Amendments owed — routing table

### Measure theory

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| measure-theory | functional-analysis | Do not re-mint measure/integration/$L^p$/RN/RMK; add Banach, $L^p$-dual and Hilbert-projection agreement dictionaries; use $L^2$ as the motivating Hilbert example; preserve the Banach-space RNP and $L^\infty$ catalogue distinctions. | `plan-measure-theory-track.md` §8A.1, lines 699–728 | `stale` — FA §§2–5 does exactly this, including `rem-lp-duality-in-abstract-language` and the MT-23/FA-13 projection agreement. |
| measure-theory | complex-analysis | Reconsider the seven measure-blocked scope rows: use standard USC subharmonicity, admit the Hardy/F. and M. Riesz and Hartogs consequences, and repoint the Fourier/distribution blockers to FA. | same, §8A.2, lines 730–745 | `stale` — the CA enrichment explicitly retires the old continuous convention and partial Hartogs/Hardy denials and consumes MT/FA. |
| measure-theory | complex-analysis | Add Riesz–Thorin beside CA's three-lines theorem, with MT-17 Marcinkiewicz as the real-variable companion. | same, §8A.2, lines 747–752 | `apply` — no Riesz–Thorin item appears in the CA scaffold; it remains expressly deferred in MT. |
| measure-theory | probability-theory | Cite MT for the measure base, finite products and Birkhoff; own Kolmogorov extension and conditional expectation; recognize MT-23's limit as the conditional expectation on the invariant sigma-algebra; do not rebuild finite probability. | same, §8A.3, lines 754–788 | `stale` — PT-3, PT-10 and PT-17 implement this exact division, including the invariant-sigma-algebra conclusion. |
| measure-theory | pde | Build Sobolev/potential theory on MT-8/11/14/15 without returning any definition to MT. | same, §8A.4, lines 790–795 | `stale` — PDE consumes those pages and mints Sobolev/weak-solution material locally. |
| measure-theory | differential-geometry / measure-theory | Say whether DG needs the general $C^1$ Lebesgue change-of-variables theorem; if so, add it to MT-11 rather than duplicating it. | same, §8A.5, lines 797–808 | `apply` — DG §9.5 confirms the need and assigns it back to MT; MT-11 already has a conditional scaffold awaiting the ruling. |
| measure-theory | orchestrator | Choose the measure-theory category value and the fate of the empty nested category directory. | same, §8A.6a, lines 810–825 | `owner` — this is a taxonomy/home decision and includes a possible directory deletion. |
| measure-theory | orchestrator | Flip `_category.md` from draft when the first measure page is published. | same, §8A.6b, lines 826–827 | `apply` — mechanical publication-time housekeeping. |
| measure-theory | orchestrator | Preserve the spec/disk-inventory warning in the successor seam record. | same, §8A.6c, lines 828–830 | `apply` — the algebra audit independently confirms the divergence. |
| measure-theory | owner / DEFERRED.md | Remove discharged deferred rows at publication. | same, §8A.7, lines 832–834 | `owner` — it entails deletions from the owner-maintained catalogue. |

### Abstract algebra

The early expansion-file §8 is retained in the table because it is itself an
amendment block. All six rows were consumed or superseded by the later Part II
reconciliation.

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| abstract-algebra | abstract-algebra main scaffold | Add the quotient-group universal property. | `plan-algebra-track-expansion.md` §8.1, lines 609–617 | `stale` — the later algebra scaffold mints `thm-quotient-group-universal-property`. |
| abstract-algebra | abstract-algebra main scaffold | Add namespaced quotient-ring and quotient-vector-space universal properties. | same, §8.2, lines 618–623 | `stale` — both are in the later algebra item lists. |
| abstract-algebra | abstract-algebra main scaffold | Add the field of fractions or use MOD-5's alternative proof. | same, §8.3, lines 624–636 | `stale` — the field-of-fractions/localisation page is now published and cited. |
| abstract-algebra | abstract-algebra main scaffold | Add formal derivative and repeated-root/separability criteria. | same, §8.4, lines 637–643 | `stale` — those items are now published and the later expansion withdraws AL-D6. |
| abstract-algebra | abstract-algebra main scaffold | Decide whether AA-7 or AG-1 owns conjugacy in $S_n$ by cycle type. | same, §8.5, lines 644–649 | `stale` — the later AG-1 plan takes it and records one home. |
| abstract-algebra | orchestrator | Recompute obsolete absolute orders. | same, §8.6, lines 650–652 | `stale` — subjects-01 forbids using those orders and Part II declares the old renumber table dead. |
| abstract-algebra | orchestrator / plan-spec | Repoint X-1's `requires` to solvability-by-radicals, Sylow and continuity. | `plan-algebra-track.md` §II.13.1, lines 4549–4553 | `apply` — a mechanical dependency correction. |
| abstract-algebra | orchestrator / plan-spec | Remove the inner-product page from RT-3's `requires`. | same, §II.13.2, lines 4554–4555 | `apply` — the adopted character pairing is bilinear, not Hermitian. |
| abstract-algebra | orchestrator | Give the Galois development four A/B pairs, using fractional placements for the extra two. | same, §II.13.3, lines 4556–4558 | `owner` — it changes page placement/reading order. |
| abstract-algebra | orchestrator | Stop treating `plan-spec.json`'s item arrays as a complete inventory of authored pages. | same, §II.13.4, lines 4559–4561 | `apply` — verified independently in the expansion-file disk audit. |
| abstract-algebra | commutative-algebra | Cite the three chain-condition ids and MOD-4 integrality results; do not re-mint them. | same, §II.13.5, lines 4563–4573 | `stale` — the commutative-algebra scaffold declares them prerequisites. |
| abstract-algebra | functional-analysis | Cite finite-dimensional spectral/SVD/positive-square-root material; separately discharge the infinite-dimensional deferred remarks and add Jordan–von Neumann. | same, §II.13.6, lines 4575–4586 | `stale` — FA distinguishes the finite results and includes `thm-jordan-von-neumann-polarization`. |
| abstract-algebra | number-theory | Identify the quadratic subfield of $\mathbb Q(\zeta_p)$ by Gauss sums. | same, §II.13.7, lines 4588–4593 | `stale` — NT includes `thm-quadratic-subfield-of-a-prime-cyclotomic-field`. |
| abstract-algebra | number-theory | Decide whether to include Kronecker–Weber. | same, §II.13.8, line 4594 | `owner` — it is an expressly optional scope expansion and no NT item currently takes it. |
| abstract-algebra | number-theory | Add the Möbius closed formula for the number of monic irreducibles over $\mathbb F_q$. | same, §II.13.9, lines 4595–4597 | `apply` — NT does not currently scaffold the formula. |
| abstract-algebra | combinatorics | No change; record that classical Möbius inversion is later and therefore unavailable to the Galois block. | same, §II.13.10, lines 4599–4603 | `stale` — this is an already-correct no-conflict record. |
| abstract-algebra | group-theory | Build beyond the enriched Sylow/nilpotency/Fitting spine and take Schur–Zassenhaus. | same, §II.13.11, lines 4605–4611 | `stale` — GT-9 includes both Schur–Zassenhaus forms and cites the earlier group structure. |
| abstract-algebra | group-theory | Cite AG-3's `def-dihedral-group` with the $D_n$-of-order-$2n$ convention. | same, §II.13.12, lines 4612–4614 | `stale` — group theory uses dihedral groups but does not mint the definition. |
| abstract-algebra | monoidal-abelian-categories | Cite MOD-3's concrete tensor product and `def-bimodule`, and the published module diagram lemmas. | same, §II.13.13, lines 4616–4622 | `stale` — MA makes the tensor example contingent on that supplier and does not mint it. |
| abstract-algebra | differential-geometry | Keep the whole Lie block in DG; make only finite-dimensional Jordan–Chevalley available. | same, §II.13.14, lines 4624–4629 | `stale` — DG owns the Lie block, and neither algebra nor group theory opens it. |
| abstract-algebra | owner | Decide whether GA-1 retains algebraic closure. | same, unresolved seam 15, lines 4631–4638 | `owner` — the row expressly contemplates deleting a planned block. |
| abstract-algebra | owner | Keep the concrete insoluble quintic with X-1 if the Galois/X-1 order changes. | same, unresolved seam 16, lines 4639–4642 | `owner` — a reading-order/pairing decision. |
| abstract-algebra | abstract-algebra builder | Obtain a second treatment for X-2 interlacing/Weyl, or record the drop. | same, unresolved seam 17, lines 4643–4644 | `apply` — a source-verification obligation, not a cross-track ownership change. |
| abstract-algebra | orchestrator | Withdraw/narrow the obsolete Part I decisions and denials. | `plan-algebra-track-expansion.md` §II.8.1, lines 2750–2767 | `stale` — the changes are already incorporated into the companion Part II scaffold. |
| abstract-algebra | abstract-algebra main scaffold | Move the integrality block from MOD-2 to MOD-4 and repoint RT-4. | same, §II.8.2, lines 2768–2771 | `stale` — Part II already makes MOD-4 the supplier. |
| abstract-algebra | abstract-algebra main scaffold | Rehome every MOD-1/MOD-2 shortfall across MOD-3/4/5. | same, §II.8.3, lines 2772–2777 | `stale` — the later item inventories implement the table. |
| abstract-algebra | orchestrator / future builders | Replace Wikipedia-primary backing with the later source harvest. | same, §II.8.4, lines 2778–2783 | `stale` — the companion §II.12 records the completed harvest. |

### Combinatorics

The file's opening banner says its old §10 is stale in the CB/GT portions; the
authoritative subjects-01 requests are §28. The five §16.1 requests are also
listed because they still target prerequisite scaffolds used by the retained
Erdős–Hajnal block.

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| combinatorics | owner | Rehome five published graph items to their earliest legal pages. | `plan-combinatorics-and-categories.md` §28 A1, line 9241 | `owner` — published-item rehomes and reading-order changes are owner-only. |
| combinatorics | abstract-algebra | Mint Cauchy–Binet on the determinant pages rather than on GT-7a. | same, A2, line 9242 | `apply` — the algebra scaffold still has no Cauchy–Binet item; the current GT fallback would put a core linear-algebra identity in the wrong subject. |
| combinatorics | abstract-algebra | Mint Courant–Fischer and Cauchy interlacing on X-2. | same, A3, line 9243 | `stale` — X-2 now includes both. |
| combinatorics | abstract-algebra | Withdraw the obsolete request for cofactors/minors/adjugate/Cramer's rule. | same, A4, line 9244 | `stale` — the row is itself a withdrawal and the material is published. |
| combinatorics | number-theory | Mint Lagrange's four-square theorem. | same, A5, line 9245 | `stale` — NT MT-5 now supplies `thm-lagrange-four-square-theorem`. |
| combinatorics | number-theory | Mint Dirichlet's theorem on primes in arithmetic progressions. | same, A6, line 9246 | `stale` — NT includes `thm-dirichlet-primes-arithmetic-progressions`. Placement of GT-20's use is a separate §4 issue below. |
| combinatorics | number-theory | Extend geometry of numbers through successive minima and Minkowski's second theorem for full Freiman. | same, A7, line 9247 | `apply` — NT supplies Blichfeldt and Minkowski's first theorem, but not successive minima or the second theorem. |
| combinatorics | abstract-algebra | Mint prime subfields and finite-field characteristic apparatus. | same, A8, line 9248 | `stale` — the algebra finite-field block now mints these. |
| combinatorics | abstract-algebra | Mint Wedderburn's little theorem. | same, A9, line 9249 | `stale` — GA-3 now includes it. |
| combinatorics | orchestrator / abstract-algebra | Decide whether CB-27 or abstract-algebra RT mints finite-abelian-group characters and orthogonality. | same, A10, line 9250 | `conflicts` — CB proposes minting locally, while seam-contract §4 assigns finite-group characters to abstract algebra. The existing RT block is earlier than the combinatorics band, so the contract can be obeyed by citation. |
| combinatorics | its retained §16 | Make the Erdős–Hajnal block cite GT-19's ordinary regularity lemma. | same, A11, line 9251 | `apply` — the old block predates GT-19 and has no reconciliation note. |
| combinatorics | its retained CB-21 | Add one explicit agreement pointer between lattice FKG and CB-29's probabilistic reading. | same, A12, line 9252 | `apply` — either page can carry it; the current prose still presents the two developments separately. |
| combinatorics | probability-theory | Cite, rather than rebuild, finite probability, Azuma–Hoeffding, McDiarmid and finite exposure martingales. | same, A13, line 9253 | `stale` — probability explicitly reserves the finite theory to combinatorics. |
| combinatorics | monoidal-abelian-categories | Supply only the already-authored category prerequisites for species. | same, A14, line 9254 | `stale` — no additional categorical mint is requested or needed. |
| combinatorics | graph prerequisites | Enrich GT-1 with the basic graph dictionary and an A-page handshake theorem. | same file, §16.1, lines 3838–3844 | `stale` — the relevant graph definitions and `thm-handshake-lemma-for-finite-simple-graphs` are now authored. |
| combinatorics | graph-colouring | Add the greedy stable-set/chromatic lower bound. | same, §16.1, lines 3845–3846 | `stale` — the published `thm-clique-independence-chromatic-bounds` supplies the needed bound. |
| combinatorics | Ramsey theory | Add the power-form finite Ramsey corollary used by Erdős–Hajnal. | same, §16.1, lines 3847–3848 | `apply` — no exact polynomial-stable-set corollary is exposed in the present Ramsey inventory. |
| combinatorics | finite probability | Add Erdős's finite $G(n,1/2)$ construction with no clique or stable set of size $2\log_2n$. | same, §16.1, lines 3849–3850 | `apply` — the finite-probability pages contain the base method, but not this requested asymptotic construction as an authored item. |
| combinatorics | real analysis | Add real floor/ceiling, finite geometric sums and elementary power/exponential estimates. | same, §16.1, lines 3851–3854 | `apply` — only the natural-quotient ceiling and integer-part infrastructure are currently available. |
| combinatorics | real analysis | Replace local binomial/multi-index mints by citations to CB-1. | same, old §10.1, lines 1016–1022 | `stale` — the file banner supersedes this old CB/GT amendment block, and the published counting supplier is already visible to the later analysis plans. |
| combinatorics | real analysis | Add Stirling's formula no earlier than the logarithm/general-powers page. | same, old §10.2, lines 1023–1038 | `stale` — this pre-subjects-01 location proposal is superseded; the current Gamma/Stirling supplier is CA-21 and NT cites it. |
| combinatorics | abstract-algebra | Make symmetric groups cite CB-1 for $|S_n|=n!$. | same, old §10.3, lines 1039–1042 | `stale` — superseded old CB/GT routing; current algebra consumes published finite counting. |
| combinatorics | abstract-algebra | Decide whether AA-6 or CB-10 owns Burnside/Cauchy–Frobenius. | same, old §10.4, lines 1043–1046 | `stale` — `thm-cauchy-frobenius-orbit-counting` is now published and cited. |
| combinatorics | abstract-algebra | Ensure the multivariate polynomial ring has one supplier. | same, old §10.5, lines 1047–1051 | `stale` — algebra now mints `def-multivariate-polynomial-ring-by-iteration`, and combinatorics cites it. |
| combinatorics | number-theory | Choose inclusion–exclusion or CRT as the totient-product proof and label any second proof. | same, old §10.6, lines 1052–1056 | `stale` — this is a pre-subjects-01 proof-route offer, not an outstanding cross-track ownership request. |
| combinatorics | topology | Decide whether topology or GT-8 owns polygonal Jordan curve. | same, old §10.7, lines 1057–1063 | `stale` — the polygonal case is now part of the graph/planarity development; the general JCT remains separately deferred. |
| combinatorics | old module scaffolder | Resolve the historical M5/M6 module interface. | same, old §10.8, lines 1064–1065 | `stale` — the subjects-01 algebra and HA tensor/module interfaces supersede it. |
| combinatorics | owner / deferred catalogue | Amend, but do not delete, the general-JCT deferred row when the polygonal case lands. | same, old §10.9, lines 1066–1069 | `stale` — a historical owner warning; the current topology/CA plans already distinguish polygonal from general Jordan correspondence. |

### Monoidal and abelian categories

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| monoidal-abelian-categories | abstract-algebra | Supply module/abelian-group tensor products, natural associativity/unit/symmetry, tensor–Hom adjunction and right exactness before MA-12. | `plan-category-theory-track.md` Amendment 1, lines 4064–4097 | `stale` — MOD-3's enrichment includes this payload and its placement is earlier. |
| monoidal-abelian-categories | combinatorics/orchestrator | Mark the prior CT/AB/MO category sections superseded and stop using their stale orders. | same, Amendment 2, lines 4099–4113 | `apply` — the old combined file has no category-supersession pointer to the new file. |
| monoidal-abelian-categories | abstract-algebra / group-theory | Optionally take the Coxeter presentation of $S_n$ and the Artin presentation of $B_n$; otherwise MA-15 mints both. | same, Amendment 3, lines 4115–4133 | `stale` — neither algebraic track takes them, and MA-15 explicitly mints both as the documented fallback. |
| monoidal-abelian-categories | homological-algebra | Cite MA's abelian/exact/projective/injective/diagram machinery; mint complexes, resolutions, Ext/Tor and spectral sequences in HA. | same, Amendment 4, lines 4135–4169 | `stale` — HA follows the requested ownership division. |
| monoidal-abelian-categories | orchestrator / plan-spec | Repoint the stale chain-complex dependency to MA-11's actual diagram-lemma page. | same, Amendment 4, lines 4171–4178 | `apply` — HA §27.1 independently records the same splice-time repair. |
| monoidal-abelian-categories | future Grothendieck-category track | Take the Freyd–Mitchell proof, enough injectives in a Grothendieck category, and set-sized Yoneda Ext. | same, Amendment 5, lines 4180–4187 | `owner` — no current track owns this proposed new page/block. |
| monoidal-abelian-categories | combined legacy scaffold | Reverse its old “not denied” stance on accessible categories; the denial is by subject size, not missing regular-cardinal vocabulary. | same, Amendment 6, lines 4189–4200 | `apply` — the old category prose remains unreconciled. |
| monoidal-abelian-categories | future real floor/ceiling owner | Once real floor and ceiling exist, expose the adjunction example to MA-1. | same, Amendment 7, lines 4202–4208 | `owner` — the supplier/home is not assigned. |
| monoidal-abelian-categories | orchestrator / SCHEMA.md | Reconcile SCHEMA's 100-item text with the enforced and owner-directed 60-item ceiling. | same, Amendment 8, lines 4210–4217 | `apply` — `SCHEMA.md` lines 378–382 still say 100 while `validate-plan.mjs` defaults to 60. |
| monoidal-abelian-categories | future authors | Qualify “Cat-enriched = strict 2-category” by small hom-categories; do not edit the published definition. | same, Amendment 9, lines 4219–4230 | `stale` — MA-17 already carries the smallness hypothesis and requests no external mutation. |

### Functional analysis

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| functional-analysis | topology | Build complex self-adjoint Stone–Weierstrass before FA-18. | `plan-functional-analysis-track.md` §10.1.1, lines 2037–2039 | `apply` — the topology page remains planned/empty. |
| functional-analysis | owner / deferred catalogue | Reconcile discharged FA remarks without deleting or renaming immutable ids. | same, §10.1.2, lines 2040–2044 | `owner` — it involves catalogue deletion/rehoming policy. |
| functional-analysis | topology | Retain Nagata, Gerlits–Nagy and linear Dugundji in topology. | same, §10.1.3, lines 2045–2047 | `stale` — FA does not take them. |
| functional-analysis | topology | Do not mint weak/weak-star topology, Stone duality, Banach–Stone or Gelfand–Kolmogorov in topology. | same, §10.1.4, lines 2048–2050 | `stale` — no competing mint appears in the topology scaffolds. |
| functional-analysis | measure-theory | Add reciprocal agreement links for Riesz–Fischer/Banach, $L^p$ duality, and the MT-23/FA-13 projection theorem. | same, §10.2.1, lines 2054–2058 | `stale` — MT §8 and FA's item prose already record all three interfaces. |
| functional-analysis | measure-theory | Link MT-20 RMK to FA-9/18/20 uses. | same, §10.2.2, lines 2059–2061 | `apply` — the later FA destinations could not be named in MT's original item inventories. |
| functional-analysis | measure-theory / FA | Keep scalar convolution/approximate identities in MT-15 and only Fourier consequences in FA-22. | same, §10.2.3, lines 2062–2064 | `stale` — both scaffolds comply. |
| functional-analysis | pde | Put Lax–Milgram and every Sobolev space in PDE, citing FA-13. | same, §10.3.1, lines 2068–2071 | `stale` — PDE-11 onward follows this ownership. |
| functional-analysis | pde | Cite FA-23–25 but do not ask FA to mint weak solutions, Sobolev estimates or traces. | same, §10.3.2, lines 2072–2075 | `stale` — PDE complies. |
| functional-analysis | functional-analysis | Replace unnamed PDE orientation notes with final PDE page ids. | same, §10.3.3, lines 2076–2078 | `apply` — the PDE ids now exist in prose. |
| functional-analysis | complex-analysis | Build/wait for the five scalar Cauchy/contour pages before FA-17. | same, §10.4.1, lines 2082–2087 | `stale` as content, but see placement §4 — CA scaffolds the pages; their order relative to FA-17 is still illegal under a literal block splice. |
| functional-analysis | algebra / topology | Reuse existing complexification, polynomial, quotient-algebra, Boolean-algebra and ultrafilter ids. | same, §10.4.2, lines 2088–2090 | `stale` — FA consistently cites them. |

### Commutative algebra

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| commutative-algebra | abstract-algebra | Enrich the thin PID/UFD page with factorisation, Bézout/gcd, localisation and integrally-closed consequences. | `plan-commutative-algebra-track.md` §7.3.1, lines 1488–1496 | `stale` — the current algebra scaffold includes these enrichments. |
| commutative-algebra | abstract-algebra | Preserve exact noetherian/artinian/flat/integrality ids and cite them. | same, §7.3.2, lines 1497–1502 | `conflicts` — the noetherian/artinian/integrality part matches §4, but `def-flat-module` is planned on abstract algebra's MOD-3 although §4 assigns flatness to commutative algebra. Resolve the owner before preserving that id. |
| commutative-algebra | orchestrator | Place CA-15 after topology and compactness. | same, §7.3.3, lines 1503–1505 | `owner` — a reading-order change. |
| commutative-algebra | homological-algebra | Expose stable complex/homology/cone/LES/resolution/Ext/Tor/dimension ids. | same, §7.3.4, lines 1506–1509 | `stale` — HA's item inventories provide them. |
| commutative-algebra | number-theory | Cite CA-8/9 for DVR, Dedekind and class-group foundations; retain arithmetic results in NT. | same, §7.3.5, lines 1510–1512 | `stale` — NT follows this split. |

### Group theory

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| group-theory | abstract-algebra | Expose stable AG-3 group-extension/semidirect-product ids. | `plan-group-theory-track.md` §26.1, lines 3326–3329 | `stale` — AG-3 scaffolds the concepts and GT-9 consumes them. |
| group-theory | abstract-algebra | Add Frattini-lifting/Fitting consequences to AG-4. | same, §26.2, lines 3330–3333 | `apply` — those named Craven consequences do not appear in the current algebra item lists. |
| group-theory | abstract-algebra | Generalize RT-1's group ring, augmentation and action/module dictionary to arbitrary groups over a commutative ring. | same, §26.3, lines 3334–3337 | `apply` — RT-1 is still framed as finite-group representation theory; HA-12 needs the arbitrary-group supplier. |
| group-theory | homological-algebra | Cite RT-1/GT-9/GT-21–23 and retain derived definitions, adding low-degree agreement only after GT. | same, §26.4, lines 3338–3342 | `stale` — HA adopts exactly this division; it remains blocked only on the RT-1 amendment above. |
| group-theory | commutative-algebra | Make CA-13B's p-adic inverse-limit example cite GT-17 and prove only the adic-completion agreement. | same, §26.5, lines 3343–3346 | `apply` — CA-13B currently says “construct” the inverse limit, duplicating GT-17's compatible-residue construction. |
| group-theory | combinatorics | State that the published spanning-tree page is finite; leave the arbitrary simplicial-tree bridge to GT-14. | same, §26.6, lines 3347–3350 | `apply` — the mathematical division is sound, but the requested scope note is not exposed in the current combined scaffold. |
| group-theory | orchestrator / plan-spec | Harvest the 32 authored free-group components into the live page summary without renaming. | same, §26.7, lines 3351–3353 | `apply` — mechanical spec reconciliation. |
| group-theory | orchestrator / page summary | Preserve the AC dependence of arbitrary free-product transversals. | same, §26.8, lines 3354–3356 | `apply` — a mechanical choice-ledger retention. |
| group-theory | future topology | Treat covering/van Kampen alternatives as agreement proofs only. | same, §26.9, lines 3357–3361 | `stale` — the current GT routes remain independently load-bearing and no competing topology proof is scaffolded. |
| group-theory | differential-geometry | Treat groups “of Lie type” as labels only; transfer no Lie structure. | same, §26.10, lines 3362–3364 | `stale` — GT-20 does so and DG owns all Lie structure. |

### Homological algebra

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| homological-algebra | orchestrator / plan-spec | Repoint HA-1 and HA-4 to the actual MA exactness/diagram-lemma pages. | `plan-homological-algebra-track.md` §27.1, lines 4319–4324 | `apply` — mechanical dependency repair. |
| homological-algebra | owner / orchestrator | Retire two empty omnibus page ids and splice HA-1–17 in the new order. | same, §27.2, lines 4326–4332 | `owner` — deletion of page ids and a reading-order change. |
| homological-algebra | abstract-algebra | Supply tensor/bimodule/flat/right-exact/Hom–tensor ids; HA cites them. | same, §27.3, lines 4334–4340 | `conflicts` — all but flatness match §4; §4 assigns flatness to commutative algebra, not abstract algebra. |
| homological-algebra | abstract-algebra | Generalize RT-1's group ring/augmentation/action dictionary to arbitrary groups. | same, §27.4, lines 4342–4347 | `apply` — this supplier payload is still missing. |
| homological-algebra | group-theory | Cite GT-9 for extensions and divide derived $H^n$ from the low-degree $H^1/H^2$/Schur interpretations. | same, §27.4, lines 4347–4356 | `stale` — HA and GT both implement the division. |
| homological-algebra | differential-geometry / orchestrator | Move DG's anchor to HA-17's final companion and keep de Rham geometric. | same, §27.5, lines 4358–4366 | `owner` for the anchor — a reading-order change; the content split is already obeyed. |
| homological-algebra | commutative-algebra | Substitute HA stable ids into CA-16–18 while leaving minimal resolutions to CA. | same, §27.6, lines 4368–4381 | `stale` — CA's post-HA block does exactly this. |
| homological-algebra | combined legacy scaffold | Add a supersession pointer from its old HA sections to the dedicated HA file. | same, §27.7, lines 4383–4385 | `apply` — the pointer is absent. |
| homological-algebra | homological-algebra builder | Preserve MA's projective/injective-object and connecting-arrow ids. | same, §27.8, lines 4387–4391 | `stale` — HA's consumed-seam ledger already does so. |
| homological-algebra | orchestrator | Apply the summary/two-paragraph/60-item/B-leaf sweep at splice. | same, §27.9, lines 4393–4395 | `apply` — mechanical splice work. |
| homological-algebra | abstract-algebra | Give semisimplicity equivalences stable ids before HA. | same, §27.10, lines 4397–4401 | `apply` — the concepts are scaffolded, but exact stable supplier ids remain unresolved. |

### Probability theory

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| probability-theory | measure-theory | Add orientation from MT Borel–Cantelli, finite products and RN to PT-2/3/10. | `plan-probability-track.md` §9A, lines 1683–1689 | `apply` — these reverse links postdate the MT scaffold. |
| probability-theory | functional-analysis | Record the characteristic-function/Fourier normalization and PT-9's finite-dimensional use of positive square root. | same, lines 1691–1697 | `apply` — mathematically mechanical convention links. |
| probability-theory | combinatorics | Add reverse orientation from the authored finite-probability pages to PT-1/2. | same, lines 1699–1704 | `apply` — probability cites them, but the finite pages do not yet point forward. |
| probability-theory | topology | Preserve topology's ownership of Polish space and mention the PT consumers. | same, lines 1706–1711 | `apply` — the topology page remains empty and will need the stable id/consumer note. |
| probability-theory | future stochastic-process work | Preserve PT-3/11/14/15/18–22 as prerequisites and do not broaden the Brownian integral retroactively. | same, lines 1713–1716 | `stale` — a correctly recorded reservation, with no current target scaffold. |

### PDE

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| pde | functional-analysis | Keep FA's existing PDE seam and do not add Lax–Milgram there. | `plan-pde-track.md` §9.1, lines 2120–2125 | `stale` — FA and PDE comply. |
| pde | measure-theory / future GMT | Add an agreement dictionary between chart surface integration and Hausdorff measure. | same, §9.2, lines 2126–2131 | `apply` — the two constructions are both scaffolded, and the agreement remains only a future note. |
| pde | complex-analysis | Add plane/$n=2$ cross-links but do not claim CA proves general $\mathbb R^n$ Harnack/Green theory. | same, §9.3, lines 2132–2136 | `conflicts` — CA asks PDE to cite and not redo the 2-D theory, while PDE-3/4 and PDE-5 items 7–8 are dimension-free and explicitly include $n=2$. The planar Perron/Poisson carve-out is respected, but the contract's broader “does not redo” sentence is not. |
| pde | differential-geometry | Let general manifold Stokes subsume, but not become a prerequisite of, the earlier Euclidean divergence/Green formulas. | same, §9.4, lines 2137–2143 | `stale` — DG supplies general Stokes and does not duplicate PDE's chart proof as a separate Euclidean theorem. |
| pde | calculus | No enrichment is needed merely because the IFT page is thin. | same, §9.5, lines 2144–2149 | `stale` — a no-change finding. DG's separate request for useful IFT corollaries is compatible because it is not a PDE prerequisite. |

### Number theory

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| number-theory | complex-analysis | Expose stable CA-18 ids for Jensen, order, Hadamard factorisation and logarithmic derivative. | `plan-number-theory-track.md` §11.1, lines 2636–2640 | `stale` — the enriched CA-18 now proposes exact ids for all four. |
| number-theory | complex-analysis | Preserve the CA-21/22 ids and keep the zero-free-line theorem qualitative. | same, §11.2, lines 2641–2645 | `stale` — CA-22 does exactly this. |
| number-theory | functional-analysis | Supply Gaussian Fourier transform, Dirac comb and its invariance with the same normalization. | same, §11.3, lines 2646–2650 | `stale` — FA-23/25 contain all three exact ids. |
| number-theory | group-theory | Keep the compatible-residue/topology/completeness/dense-$\mathbb Z$ construction of $\mathbb Z_p$ in GT-17, but not $\mathbb Q_p$. | same, §11.4, lines 2651–2655 | `stale` — GT-17 follows the requested boundary. |
| number-theory | abstract-algebra | Keep cyclotomic Galois and finite-character orthogonality abstract; leave cyclotomic arithmetic/Frobenius to NT. | same, §11.5, lines 2656–2659 | `stale` — both scaffolds comply. |
| number-theory | future quadratic-order track | Take form–ideal correspondence, Gauss composition, narrow/nonmaximal class groups and indefinite cycles. | same, §11.6, lines 2660–2664 | `owner` — no current track/home is assigned. |

### Differential geometry

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| differential-geometry | multivariable calculus | Add useful local-inverse/parameterized-IFT consequences, but leave constant rank to DG. | `plan-differential-geometry-track.md` §9.1, lines 10646–10659 | `apply` — these are absent; PDE's “no enrichment needed for my prerequisites” is not a contrary mathematical claim. |
| differential-geometry | orchestrator / HA | Repoint DG's anchor to HA-17's final companion. | same, §9.2.1, lines 10663–10666 | `owner` — reading-order change. |
| differential-geometry | homological-algebra | Supply stable cochain/cohomology/LES/five-lemma ids to DG-15–17. | same, §9.2.2, lines 10667–10674 | `stale` — HA scaffolds them and DG cites them. |
| differential-geometry | homological-algebra | Do not absorb singular geometric machinery or Lie-algebra cohomology into HA. | same, §9.2.3–4, lines 10675–10681 | `stale` — HA explicitly denies Lie-algebra cohomology and DG keeps both geometric complexes. |
| differential-geometry | topology | Build covering/lifting/deck/universal-cover/classification infrastructure with exact hypotheses. | same, §9.3, lines 10683–10694 | `apply` — `covering-spaces-and-lifting` remains empty. |
| differential-geometry | topology / orchestrator | Preserve the topology partition page's choice ledger through smoothing. | same, §9.3, lines 10696–10699 | `apply` — a splice-time choice annotation. |
| differential-geometry | abstract-algebra | Extend the tensor supplier through tensor algebra and functorial algebra maps for PBW/UEA. | same, §9.4, lines 10701–10710 | `apply` — MOD-3 supplies module tensors and tensor products of algebras, but no explicit tensor-algebra universal object. |
| differential-geometry | orchestrator / abstract-algebra | If the earlier Jordan–Chevalley page lands, replace DG-30's duplicate fallback items. | same, §9.4, lines 10712–10717 | `owner` — it removes planned items and changes their dependency/home; X-2 now supplies the theorem. |
| differential-geometry | measure-theory | Add the general $C^1$ Lebesgue change-of-variables theorem to MT-11. | same, §9.5.1, lines 10721–10724 | `apply` — this closes MT's explicitly conditional seam. |
| differential-geometry | measure-theory / DG | Use MT-20 for Radon/RMK and MT-22 for recurrence; retain Haar invariance and the geometric applications in DG. | same, §9.5.2–3, lines 10725–10729 | `stale` — the current item plans follow this split. |
| differential-geometry | orchestrator | Preserve the Riemann-vs-Lebesgue distinction in manifold integration. | same, §9.5.4, lines 10730–10733 | `apply` — a mechanical splice/build annotation. |
| differential-geometry | functional-analysis | Supply Hilbert/compact-operator inputs to Peter–Weyl without taking compact Lie theory. | same, §9.6, lines 10737–10742 | `stale` — DG keeps the Lie theorem and declares the FA inputs. |
| differential-geometry | future Hodge/PDE work | Leave elliptic harmonic/Hodge decomposition to a later analytic sequel citing DG and PDE/FA. | same, §9.6, lines 10744–10754 | `stale` — a clean scope boundary, not a current amendment. |

### Complex analysis

| From track | To track | What it asks for | Exact location | Assessment |
|---|---|---|---|---|
| complex-analysis | real analysis / owner | Choose one owner for the $\mathbb C\cong\mathbb R^2$ analytic dictionary; the other page cites it. | `plan-complex-analysis-track.md` amendment 1, lines 586–595 | `owner` — it decides a definition's home and possible item placement. |
| complex-analysis | real analysis | Add `field-extensions-and-the-complex-numbers` to RA-33's prerequisites. | same, amendment 2, lines 596–598 | `apply` — a mechanical missing dependency. |
| complex-analysis | real analysis / owner | Move the two branch-law examples needed by CA from the B page to an A page, or let CA rebuild with agreement. | same, amendment 3, lines 599–607 | `owner` — it is an item rehome/reading-order decision. |
| complex-analysis | abstract-algebra | Keep X-1's FTA trap reading-relative. | same, amendment 4, lines 608–614 | `stale` — Part II explicitly explains that the analytic proof is unavailable at X-1's point in the order, not absent from the library. |
| complex-analysis | topology | No change to one-point compactification/compact-to-Hausdorff. | same, amendment 5, lines 615–619 | `stale` — no-change finding. |
| complex-analysis | topology-set-theory | Keep HT-7's winding dictionary non-load-bearing and point back from CA-7. | same, amendment 6, lines 620–626 | `stale` — the topology scaffold already treats the winding reference as orientation only. |
| complex-analysis | owner / deferred catalogue | Reconcile the orphan `rem-riemann-surface-of-log` through the immutable-id un-deferral procedure. | same, amendment 7, lines 627–631 | `owner` — id aliasing/rehoming and possible catalogue deletion are owner actions. |
| complex-analysis | pde | Keep general $\mathbb R^n$ harmonic theory in PDE but cite CA for all plane-specific theory. | same, amendment 8, lines 632–635 | `conflicts` — CA reads §4 strictly (“PDE does not redo 2-D”), while PDE includes $n=2$ in its all-dimensional mean-value, maximum/Harnack and fundamental-solution statements. |
| complex-analysis | number-theory | Cite CA-22's function-theoretic $\zeta$ supplier and do not assume a quantitative zero-free region. | same, amendment 9, lines 636–640 | `stale` — NT cites every promised zeta id and supplies only arithmetic refinements. |
| complex-analysis | topology / conformal consumers | Require closure-homeomorphic extension for pointwise boundary transport; otherwise declare prime ends forward/out of scope. | same, amendment 10, lines 641–645 | `apply` — a sound unsupplied topology seam. |
| complex-analysis | orchestrator / plan-spec | Replace stale CA page metadata with the enriched stable supplier lists. | same, amendment 11, lines 646–652 | `apply` — mechanical future-splice work. |

## 2. Unresolved seams

This table consolidates the same object when several tracks report it. “Silent”
means §4 does not allocate the object; “contradiction” means the present prose
does not follow the allocation. Purely bibliographic/source-access checks (for
example category S-2/S-3/S-5/S-7/S-9 and algebra's second-source check) are not
cross-track mathematical seams and are therefore not duplicated here.

| Mathematical object | Tracks touching it | What seam-contract §4 says | Did the tracks comply? |
|---|---|---|---|
| Birkhoff limit as conditional expectation on the invariant sigma-algebra | measure-theory MT-23; probability PT-10/PT-17 | MT owns Birkhoff; probability owns conditional expectation and cites MT for stationary sequences. | **Yes.** MT states the RN characterising property without stealing the term; PT mints conditional expectation and PT-17 identifies the limit. This named seam is clean. |
| Classical Euclidean divergence/Green formulas versus Stokes on manifolds | PDE-5; DG-14 | DG owns Stokes and manifold integration; §4 is silent about the earlier Euclidean divergence theorem. | **Yes.** PDE proves the chart/FTC special case under the name “divergence theorem”; DG proves general Stokes and records subsumption, not a reverse dependency. |
| Harmonic theory in the plane versus $\mathbb R^n$ | CA-13/14/HM/PT; PDE-3–6 | PDE owns $\mathbb R^n$ harmonic theory; CA owns the plane theory; PDE “cites and does not redo the 2-D theory.” | **Partial contradiction.** PDE correctly leaves disc Poisson, planar Perron/subharmonic and conformal invariance to CA, but its all-$n$ mean-value, maximum/Harnack, Green/fundamental-solution statements include $n=2$. PDE-6 restricts only items 1–6 to $n\ge3$ and expressly leaves items 7–12 valid in $n=2$; PDE-5 also defines the logarithmic $n=2$ fundamental solution. The owner must clarify whether “does not redo” means no plane-specific proof (PDE's reading) or no theorem instance at $n=2$ (CA's reading). |
| $\Gamma$/$\zeta$ function-theoretic supplier | CA-21/22; NT analytic block | CA owns zeta as a function-theoretic object; NT owns analytic-number-theory consequences and cites CA. | **Yes.** CA mints Gamma/Stirling, zeta, Euler product, continuation, functional equation, xi/zeros and qualitative nonvanishing; NT cites those exact ids and owns the quantitative zero-free region/PNT error. |
| Lie groups, Lie algebras and all abstract Lie structure | DG-24–33; group theory; abstract algebra | The whole block belongs to DG; algebra and group theory do not open it. | **Yes.** Group theory uses “Lie type” only as classification labels, and abstract algebra opens only single-operator Jordan–Chevalley. No competing Lie definition exists. |
| Scalar $L^p$, completeness, density, convolution and duality | MT-14–16; FA-1/7/10/22; probability/PDE consumers | All scalar $L^p$, explicitly including duality, belongs to MT; FA owns abstract Banach/dual language. | **Yes.** FA cites MT and adds only abstract dictionaries/consequences. The early lack of the words “Banach” and “dual space” is a vocabulary-order seam, not a second construction. |
| The phrase “Banach space” on MT-14 | measure theory; functional analysis FA-1 | FA owns normed/Banach spaces. | **Yes.** MT proves “complete normed space” without minting the term; FA-1 later names $L^p$ as a Banach example and cites Riesz–Fischer. This is MT unresolved seam 1, cleanly resolved by delayed vocabulary. |
| The notation “dual space $(L^p)^*$” on MT-16 | measure theory; functional analysis FA-7 | MT owns the concrete duality theorem, while FA owns dual-space vocabulary. | **Yes.** MT states the full representation theorem concretely; FA supplies only the isometric-isomorphism restatement. This resolves the apparent tension in MT seam 2 without moving either theorem. |
| Complex normed-space vocabulary | measure theory; functional analysis | FA owns the abstraction; the published normed-space definition is real-only. | **Yes.** MT treats complex functions/measures componentwise and does not mint a complex normed space; FA generalizes the scalar field once and records agreement. |
| De Rham complex versus homological machinery | DG-15–17; HA-1/2/4 | DG owns the de Rham complex/theorem; HA owns general complexes, homotopy, cohomology and LES machinery. | **Yes.** DG mints `def-de-rham-cochain-complex` and geometric comparison maps while citing `def-cochain-complex-in-an-abelian-category` and HA's LES. |
| Flat modules and flatness | abstract algebra MOD-3; commutative algebra CA-12; HA-10/11 | §4 assigns “flatness” to commutative algebra, while assigning tensor products of modules to abstract algebra. | **Contradiction.** MOD-3's prose mints “flat module”; CA-12 and HA both expect its exact `def-flat-module`. There is only one planned definition, but it is owned by the wrong track. Either amend §4 narrowly (“module flatness” to abstract, commutative flat descent to CA) or move the definition/main theorem to CA and let MOD-3 cite it; do not leave the discrepancy implicit. |
| Finite-abelian-group characters and orthogonality | combinatorics CB-27/31/14c; abstract algebra RT | §4 assigns finite-group representation theory, including characters, to abstract algebra. | **Not compliant yet.** CB proposes minting `def-character-of-a-finite-abelian-group`. Because RT is earlier than the combinatorics band, citation is available; local minting would contradict §4 unless the owner amends the contract. |
| $p$-adic integers as compatible residues versus adic completion | group GT-17; commutative CA-13B; NT metric completion | §4 is silent. | **Reported, not yet compliant.** GT-17 mints compatible residues/topology; CA-13B still says it constructs the inverse limit. Apply GT §26.5 so CA cites GT and proves only completion agreement. This is a conceptual double construction even though the exact example id is unique. |
| General $C^1$ Lebesgue change of variables | MT-11; DG-18; PDE/manifold-volume consumers | §4 is silent. | **Dangerous silent seam, now caught.** MT originally and DG could each have assumed the other supplied it. Both final scaffolds now agree MT should own it, but the MT items remain conditional. Apply the ruling before build. |
| Surface measure on $C^1$ hypersurfaces versus Hausdorff measure | PDE-5/13; MT Hausdorff measure; future GMT | §4 is silent. | **Compliant but unresolved.** PDE locally constructs the chart measure and explicitly asks for a later agreement theorem; neither track calls the constructions identical without proof. |
| Arbitrary-group group ring and action/module dictionary | abstract RT-1; HA-12; group theory | §4 gives finite-group representation theory/group algebra to abstract algebra and derived cohomology to HA; it is silent on arbitrary-group scope. | **Partial.** HA correctly cites rather than mints; RT-1 still needs its scope broadened to arbitrary groups. No double mint exists. |
| Derived group cohomology versus $H^1/H^2$/Schur-multiplier interpretations | HA-12/17; GT-21–23 | HA owns $H^n$ as a derived functor; group theory owns low-degree interpretations. | **Yes.** Both tracks state the boundary and add agreement rather than competing definitions. |
| Profinite inverse limits versus categorical limits | group GT-16; monoidal/category limit pages | §4 is silent; general category limits are already authored/planned outside group theory. | **Yes, with a later agreement owed.** GT keeps compatible tuples load-bearing because the categorical limit page is later, and asks only for an agreement theorem. It does not mint a second general limit notion. |
| Modular representation prerequisites (complete DVRs and splitting systems) | group GT-18/19; commutative algebra CA-8/13; abstract RT | Group owns modular/Brauer extensions; CA owns DVR/completion; abstract owns ordinary finite representations. | **Compliant but placement-blocked.** GT names the complete-DVR/splitting system as supplied data and must be spliced after both CA pages; it does not duplicate them. |
| Noetherian/artinian definitions and integrality | abstract MOD-4; commutative CA-1/2/6/12 | The three exact ids are minted by abstract algebra; commutative algebra cites them. | **Yes.** CA uses the finite-generation convention and treats ACC/DCC with the recorded choice cost. |
| Tensor products and bimodules | abstract MOD-3; MA monoidal examples; HA Tor; DG PBW | Concrete module tensor belongs to abstract algebra; MA/HA cite it. | **Yes for module tensors/bimodules.** The remaining tensor-algebra object needed by DG is an unallocated extension and should be added to the same supplier. |
| Chain complexes versus exact sequences in an abelian category | MA-10/11; HA-1 onward | MA owns abelian exactness/diagram lemmas; HA owns chain complexes and homology. | **Yes.** MA explicitly refuses to mint `def-chain-complex`; HA uses the namespaced abelian-category definition. The bare `def-chain-complex` candidate has no actual mint. |
| Projective/injective modules versus projective/injective objects/resolutions | abstract algebra; MA-9; HA-5–7 | MA owns categorical object notions; HA owns resolutions; module instances are earlier algebra. | **Yes.** HA cites both layers and does not redefine lifting/extension properties. |
| Finite probability versus measure-theoretic probability | combinatorics; probability | Finite probability stays in combinatorics; probability cites and does not rebuild it. | **Yes.** PT-1/2 give specialization/agreement and begin new theory at sigma-additive/infinite settings. |
| Polish space versus standard Borel space | topology; probability PT-3/7/11/18 | The “already planned” clause forbids re-minting topology; §4 otherwise does not name Polish space. | **Yes, conditionally.** Probability reserves `def-polish-space` to topology and mints only standard Borel. Build is blocked until the empty topology page supplies the exact id. |
| Finite-dimensional spectral/positive-square-root results versus operator spectral theory | abstract X-2; FA-16–21; probability PT-9 | Abstract algebra owns finite-dimensional spectral/SVD; FA owns bounded/unbounded operator theory. | **Yes.** FA cites the finite theorem and PT uses FA's general positive square root only in finite dimension. |
| Dedekind/class-group definitions versus arithmetic finiteness/splitting | commutative CA-8/9; NT-19–24 | Commutative algebra owns Dedekind foundations; NT owns rings of integers, finiteness, units and arithmetic splitting. | **Yes.** Exact class-group/Hensel/fractional-ideal ids are cited by NT rather than re-minted. |
| Formal power series versus Cohen structure | published/planned formal-power-series page; commutative CA-14/18 | §4 is silent about the elementary formal-series supplier; commutative algebra owns completion/Cohen theory. | **Yes, conditionally.** CA-14 cites the immutable formal-power-series construction and adds Cohen structure only after it. Mixed-characteristic Cohen rings remain honestly deferred. |
| Minimal free resolutions and their uniqueness | commutative CA-18; HA-5/9/10 | HA owns general resolutions/comparison homotopy; CA owns local-ring minimality and Auslander–Buchsbaum. | **Yes.** CA mints the local minimal theorem and cites HA comparison uniqueness; HA refuses to invent a ring-free minimality theorem. |
| Riesz–Thorin interpolation | measure theory; complex analysis; functional analysis | §4 is silent; MT owns $L^p$, CA owns three-lines, FA denies general interpolation. | **Uncovered.** MT explicitly offers it to CA, CA never accepts it, and FA deliberately excludes interpolation. This is the clearest “each side assumes another home” gap: apply the MT amendment or name a new harmonic-analysis owner. |
| Coxeter presentation of $S_n$ and Artin braid group | MA-15; abstract algebra; group theory | §4 is silent. | **Contained.** Neither algebraic track takes the offer, so MA-15 mints both under its stated fallback. No duplicate appears. |
| Real floor and ceiling | combinatorics/Erdős–Hajnal; MA adjunction example; real analysis | §4 is silent. | **Unowned.** Two tracks request the same supplier, and neither mints it. This is the other silent gap: assign a real-analysis home once, then both cite. |
| $\mathbb C\cong\mathbb R^2$ analytic dictionary | real analysis RA-33; complex analysis CA-1; published algebraic complex numbers | §4 is silent, while the algebraic complex-number object is already published. | **Unresolved.** Both analytic pages offer to own the topology/metric dictionary “if authored first.” That is precisely a two-sides-waiting seam: choose one A-page home and make the other cite it. |
| Geometry of numbers through successive minima | NT MT-22; combinatorics CB-32 | Number theory owns arithmetic/geometry-of-numbers applications by subject implication, but §4 does not expressly list geometry of numbers. | **Partial.** NT supplies lattices, Blichfeldt and Minkowski's first theorem; combinatorics needs the second theorem/successive minima for full Freiman and records a bounded-exponent fallback. |
| Algebraic closure in the Galois block | abstract algebra; commutative algebra and NT consumers | Galois theory belongs to abstract algebra; §4 does not separately name algebraic closure. | **Compliant if retained.** No competing mint exists; owner deletion would force the ambient-normal-extension hypotheses recorded in algebra §II.13.15. |
| Covering spaces/lifting used by DG and CA | topology; DG-20/23/26/29/34; CA surfaces | Topology is in the “already planned—nobody re-mints” layer; §4 is otherwise silent. | **Compliant but blocked.** Consumers declare forward seams and do not reconstruct the general theory; the topology page is empty. |
| General Grothendieck-category theorems | MA; HA; future category work | §4 gives abelian categories to MA and derived machinery to HA, but is silent on a Grothendieck-category sequel. | **Unowned, safely denied.** No current item depends on the Freyd–Mitchell proof/enough-injectives/Yoneda-set results. An owner must be named before they are opened. |
| Jordan–Chevalley single-operator theorem in DG | abstract X-2; DG-30 | §4 gives finite-dimensional linear algebra to abstract algebra and Lie structure to DG. | **Potential duplicate.** X-2 now supplies the operator theorem; DG's fallback should be replaced by citation before build, leaving Lie-algebra Jordan decomposition in DG. |
| Peter–Weyl analytic inputs versus compact Lie theory | FA; DG-33 | FA owns Hilbert/compact-operator theory; DG owns all Lie groups. | **Yes.** DG imports projection/basis/spectral arguments and retains Haar, convolution and Lie representation structure. |
| Boundary transport under conformal maps | CA; topology | §4 is silent. | **Compliant but unresolved.** CA requires a homeomorphic extension to closures and refuses to smuggle in prime ends/Carathéodory correspondence. |
| Skorokhod topology on $D[0,1]$ | probability PT future Donsker work; topology | §4 is silent. | **Safely unowned.** The present probability block needs only continuous path space and explicitly reserves $D[0,1]$ for a future Donsker track; no current theorem assumes it exists. |

## 3. Duplicate-id triage

Regeneration rule: exact backticked item ids appearing in at least two of the
fourteen owned plan files (the abstract-algebra track has two files), absent
from `items/`. This regenerates 41 candidates, not merely the 15 supplied in the
brief. Mentions in inventories, amendment ledgers and “must not mint” traps were
read as claims, not treated as mints by grep alone.

| Id | MINTS it | Merely cites/mentions it | §4 and verdict |
|---|---|---|---|
| `def-additive-functor` | monoidal-abelian-categories MA-7 | HA consumed-seam ledger | Category owns additive-category machinery. `ok-mint-and-cite`. |
| `def-artinian-module` | abstract algebra MOD-4 | commutative algebra | Exact §4 assignment. `ok-mint-and-cite`. |
| `def-banach-space` | functional analysis FA-1 | MT's rejected alternative/forward vocabulary seam | FA owns Banach spaces. `ok-mint-and-cite`. |
| `def-bimodule` | abstract algebra MOD-3 | HA | Concrete tensor/module machinery belongs to abstract algebra. `ok-mint-and-cite`. |
| `def-borel-sigma-algebra` | measure theory MT-1 | probability prerequisite inventory | MT owns sigma-algebra/measurability. `ok-mint-and-cite`. |
| `def-chain-complex` | nobody in the current subjects-01 scaffolds | old combined-file absence inventory; MA-10 trap says it must not mint it | HA instead mints the namespaced abelian-category definition. The bare id has no claimant despite the grep hit. `unclear` — either deliberately retire the bare name or assign it as an alias at build. |
| `def-cochain-complex-in-an-abelian-category` | homological algebra HA-1 | DG de Rham prerequisites | Exact HA/DG split. `ok-mint-and-cite`. |
| `def-cohomology-object-of-a-cochain-complex` | homological algebra HA-1 | DG de Rham prerequisites | Exact HA/DG split. `ok-mint-and-cite`. |
| `def-dihedral-group` | abstract algebra AG-3 | the companion algebra file/main amendment; group theory uses the concept without a new id | Same track owns all mint occurrences; group theory cites the supplier. `ok-mint-and-cite`. |
| `def-dirac-comb` | functional analysis FA-25 | number theory supplier request | Fourier/distribution object belongs to FA. `ok-mint-and-cite`. |
| `def-field-norm-and-trace` | abstract algebra Galois/field-extension block | number theory | Algebra supplies the field notion; NT uses arithmetic refinements. `ok-mint-and-cite`. |
| `def-finite-set` | nobody here; it is recorded as an alias of published `def-countable` | abstract algebra and combinatorics both cite the alias | No unpublished mint exists. `ok-mint-and-cite` (false-positive candidate). |
| `def-flat-module` | abstract algebra MOD-3 in prose (the id is referenced by CA/HA) | commutative algebra CA-12 and HA-10 | Only one intended mint, but it contradicts §4's assignment of flatness to commutative algebra. `unclear` pending the ownership ruling; not a double mint yet. |
| `def-fractional-ideal` | commutative algebra CA-9 | number theory MT-21/22 | Dedekind foundation in CA, arithmetic use in NT. `ok-mint-and-cite`. |
| `def-generated-sigma-algebra` | measure theory MT-1 | probability prerequisite inventory | Exact MT ownership. `ok-mint-and-cite`. |
| `def-group-cohomology-as-a-derived-functor` | homological algebra HA-12 | group theory | Exact §4 assignment. `ok-mint-and-cite`. |
| `def-hausdorff-dimension` | measure theory | abstract algebra uses the name only to explain namespacing of linear dimension | §4 is silent, but there is one coherent mint and algebra explicitly does not scaffold it. `ok-mint-and-cite`. |
| `def-ideal-class-group-of-a-domain` | commutative algebra CA-9 | number theory MT-22 | Exact foundation/arithmetic split. `ok-mint-and-cite`. |
| `def-measurable-function` | measure theory MT-7 | probability prerequisite inventory | Exact MT ownership. `ok-mint-and-cite`. |
| `def-measurable-space` | measure theory MT-1 | probability prerequisite inventory | Exact MT ownership. `ok-mint-and-cite`. |
| `def-measure` | measure theory MT-2 | probability prerequisite inventory | Exact MT ownership. `ok-mint-and-cite`. |
| `def-measure-space` | measure theory MT-2 | probability prerequisite inventory | Exact MT ownership. `ok-mint-and-cite`. |
| `def-module` | abstract algebra MOD-1 | category's module-as-additive-functor theorem; old combined-file absence inventory | Exact concrete-algebra supplier. `ok-mint-and-cite`. |
| `def-noetherian-module` | abstract algebra MOD-4 | commutative algebra | Exact §4 assignment. `ok-mint-and-cite`. |
| `def-noetherian-ring` | abstract algebra MOD-4 | commutative algebra | Exact §4 assignment. `ok-mint-and-cite`. |
| `def-pi-system` | measure theory MT-1 | probability prerequisite inventory | Exact MT ownership. `ok-mint-and-cite`. |
| `def-riemann-zeta-function` | complex analysis CA-22 | number theory analytic block | Exact §4 assignment. `ok-mint-and-cite`. |
| `def-sigma-algebra` | measure theory MT-1 | probability prerequisite inventory | Exact MT ownership. `ok-mint-and-cite`. |
| `ex-p-adic-integers-as-an-inverse-limit` | commutative algebra CA-13B | group theory mentions the exact id only in an amendment requesting a citation to GT-17 | The exact id is not double-minted, but its current “construct” wording repeats GT-17's object. `unclear` until §26.5 is applied. |
| `lem-fourier-transform-of-a-gaussian` | functional analysis FA-23 | number theory MT-14 request/citation | Exact FA supplier. `ok-mint-and-cite`. |
| `lem-ideal-class-group-well-defined` | commutative algebra CA-9 | number theory MT-22 | Exact CA supplier. `ok-mint-and-cite`. |
| `thm-dirac-comb-is-fourier-invariant` | functional analysis FA-25 | number theory MT-14 request/citation | Exact FA supplier. `ok-mint-and-cite`. |
| `thm-euler-product-for-riemann-zeta` | complex analysis CA-22 | number theory MT-13 | Exact CA supplier contract. `ok-mint-and-cite`. |
| `thm-hensels-lemma-for-complete-adic-pairs` | commutative algebra CA-13 | number theory MT-17 | CA supplies complete-adic algebra; NT applies it. `ok-mint-and-cite`. |
| `thm-long-exact-sequence-in-cohomology` | homological algebra HA-4 | DG de Rham/Mayer–Vietoris | Exact HA/DG split. `ok-mint-and-cite`. |
| `thm-positive-square-root` | functional analysis FA-19 | probability PT-9 | FA owns operator spectral theory. `ok-mint-and-cite`. |
| `thm-quotient-space-universal-property` | abstract algebra LA-3 | the expansion-file amendment and later algebra section, all within the same track | One track, one item. `ok-mint-and-cite`. |
| `thm-radon-nikodym` | measure theory MT-13 | probability PT-10 | Exact MT ownership. `ok-mint-and-cite`. |
| `thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane` | complex analysis CA-22 | number theory MT-16 and amendment | CA owns the qualitative line; NT owns quantitative regions. `ok-mint-and-cite`. |
| `thm-riemann-zeta-meromorphic-continuation` | complex analysis CA-22 | number theory MT-16 | Exact CA supplier. `ok-mint-and-cite`. |
| `thm-stirling-formula-gamma` | complex analysis CA-21 | number theory MT-15 | Gamma asymptotics are supplied function-theoretically and cited arithmetically. `ok-mint-and-cite`. |

No regenerated id is a present exact `DOUBLE-MINT`. Two of the three `unclear`
rows (`def-flat-module` and the p-adic example) are ownership/construction
problems that exact-id grep alone would miss; `def-chain-complex` is the opposite
kind of false positive, where grep suggests a claimant but close reading finds
none.

## 4. Placement conflicts

Anchors are treated as insertion points only, per the brief; this section does
not assign numeric orders.

| Blocks/tracks | Why a literal anchor splice is illegal or awkward | Reconciliation constraint |
|---|---|---|
| functional-analysis ↔ complex-analysis | FA is anchored after MT and therefore before the in-place CA band, but FA-17's holomorphic functional calculus requires scalar CA power-series/Cauchy/contour pages. Conversely CA-22 requires FA-23/FA-25 theta–Poisson suppliers. | Interleave at least three segments: scalar CA core before FA-17; FA-17–25 before CA-22; then the dependent CA zeta/advanced pages. A single whole-FA followed by whole-CA splice creates a forward spine dependency. |
| complex-analysis ↔ differential-geometry / homological-algebra | CA is declared “in place” at 303–356, yet SC-5 and CA-RS-2/3 require HA-1 and DG-2/5/11–15, which are anchored much later. | Split the CA enrichment. Keep the scalar/plane/Hardy/zeta suppliers in the early CA band; place the Riemann-surface/$\bar\partial$ segments that truly require HA/DG after those suppliers. Do not drag the entire CA block upward. |
| homological-algebra ↔ differential-geometry | The contract's original DG anchor, `spectral-sequences-examples`, is now internal to the expanded HA block; HA-16/17 follow it. | Repoint DG to `grothendieck-spectral-sequences-and-computations-examples`, the final HA companion. Otherwise DG splits HA and any later HA dependency points forward. |
| commutative-algebra ↔ topology / formal power series / homological algebra | CA has one headline anchor after modules, but CA-14 must follow formal power series, CA-15 must follow topology/compactness, and CA-16–18 must follow HA. | Preserve CA as several splice segments. A single contiguous CA block at the headline anchor is impossible. |
| group-theory ↔ abstract algebra / topology / commutative algebra / HA | §3 lists structure and geometric anchors only, while the scaffold correctly adds a modular block after RT-4 plus complete-DVR/completion material, and cohomological blocks after HA-12/17. | Preserve the four logical GT segments. Do not force GT-18–23 next to the early structure anchor merely to keep the subject contiguous. |
| combinatorics CB-14c ↔ CB-27 / GT-7a | MacWilliams needs additive-character orthogonality from CB-27, and CB-14c also needs simultaneous diagonalisation from GT-7a, but the declared design block currently precedes those suppliers. | Move the orthogonality lemma down, move CB-14c after both suppliers, or use the permitted consequence-only forward reference. The preferred contract-preserving solution is to cite the earlier abstract-algebra character block and place CB-14c after GT-7a. |
| combinatorics GT-20 ↔ number-theory analytic block | GT-20's Legendre-symbol Rado-graph construction asks for Dirichlet primes in AP. The NT analytic block is anchored after CA, later than the in-place combinatorics band. | GT-20 may not cite it as a load-bearing predecessor at its current anchor. Keep the already-scaffolded non-load-bearing remark/fallback, or move that construction/page after analytic NT. |
| combinatorics GT-7b ↔ abstract-algebra RT | Nonabelian Cayley spectra need finite-group representation/Wedderburn theory. | The current abstract RT block appears earlier than combinatorics and can be cited once authored. Verify this after the algebra splice; if RT is moved later, defer the nonabelian portion rather than forward-citing on a spine theorem. |
| number-theory's three blocks | Elementary, algebraic and analytic number theory have distinct anchors by contract. | Clean if spliced separately: elementary after splitting fields, algebraic after commutative algebra's last page, analytic after the complex-analysis zeta supplier. Do not concatenate them into one subject block. |
| PDE ↔ complex-analysis plane harmonic pages | PDE is after probability and thus can cite the early CA plane pages, but only if CA-HM/CA-PT remain in the early CA/analysis segment rather than being swept with the later DG-dependent enrichment. | Keep the plane harmonic supplier before PDE. This also makes a strict resolution of the 2-D ownership seam possible. |
| monoidal categories ↔ abstract tensor product | MA-12/14/15/17 require the concrete tensor page, and MA is fixed in the category band. | Clean under the current algebra placement: ensure MOD-3 stays earlier than MA. No interleaving is needed. |
| DG Peter–Weyl ↔ FA | DG-33 needs FA Hilbert/compact-operator machinery. | Clean under the MT→FA→probability→PDE band: FA is earlier than DG. Keep the dependency; do not move Peter–Weyl into FA. |

The placement audit therefore rejects any “one anchor means one contiguous
subject block” splice for functional/complex analysis, commutative algebra,
group theory, number theory, or the DG-dependent complex enrichment. The clean
anchors are still useful; they identify the first legal segment, not a mandate
to keep all later material adjacent.
