# Step 3a reader report — batch 118

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `118`

## Inventory opened

Assigned pages: [tgrx-gaussian-wedge](../library/thermodynamics-and-general-relativity/tgrx-gaussian-wedge.md) and [tgrx-gaussian-wedge-examples](../library/thermodynamics-and-general-relativity/tgrx-gaussian-wedge-examples.md). Their required page context was [qsmx-modular-equilibrium](../library/quantum-statistical-mechanics/qsmx-modular-equilibrium.md), [tgr-phs02](../library/thermodynamics-and-general-relativity/tgr-phs02.md), [qft-f01](../library/quantum-field-theory/qft-f01.md), and [tgr-et03](../library/thermodynamics-and-general-relativity-mathematics/tgr-et03.md).

Assigned items, read in supplier order: `lem-tgrx-modular-kms-time-rescaling`, `post-tgrx-wedge-modular-model`, `pthm-tgrx-wedge-unruh-clock`, and `ex-tgrx-wedge-typeiii-warning`. I read the batch manifest and the assigned proof contracts as review evidence.

The relevant supplier inventory opened was: `def-axiom-of-choice`, `def-countable-choice`, `def-qft-framework-units`, `def-qft-scalar-mass-shell`, `def-qft-fock-and-test-spaces`, `post-qft-free-field-model`, `def-qft-free-field-observables`, `lem-qft-scalar-poincare-action`, `lem-qft-smeared-free-scalar`, `def-qsmx-von-neumann-algebra`, `def-qsmx-standard-modular-data`, `def-qsmx-von-neumann-kms-state`, `lem-qsmx-von-neumann-predual`, `lem-qsmx-tomita-operator-involution`, `lem-qsmx-modular-strip-analyticity`, `lem-qsmx-modular-unitary-strong-continuity`, `lem-qsmx-modular-resolvent-core`, `lem-qsmx-trace-class-duality`, `thm-qsmx-tomita-takesaki`, and `def-tgr-framework-units`.

## Review and dispositions

### `lem-tgrx-modular-kms-time-rescaling`

The statement uses the upper-strip convention defined by `def-qsmx-von-neumann-kms-state`: lower boundary `ω(A α_t(B))`, upper boundary `ω(α_t(B) A)`. The proof reparameterizes the same boundary functions by `G(z)=F(z/λ)`. For `λ>0`, this maps the closed strip of width `λθ` bijectively onto the original strip, preserves holomorphy, and sends both boundary lines to the stated expressions. The composition argument also preserves point-ultraweak continuity. I found no omitted hypothesis or sign error.

### `post-tgrx-wedge-modular-model`

This is an adopted model postulate, not a derivation of the Bisognano–Wichmann bridge. It specifies the massive shell, measure, Minkowski metric and length coordinates, scalar Fock space and vacuum, smeared Weyl generators, right wedge algebra, pairing conversion, cyclic/separating assumption, and the assumed identity `Δ_W^{it}=U(Λ_W(-2πt))`. The selected scope and exclusions are explicit. The suppliers provide the operator and shell constructions used by the formulation. No observation, detector response, continuum tensor factorization, or density-matrix claim is made.

### `pthm-tgrx-wedge-unruh-clock`

The postulate supplies the hypotheses for the abstract Tomita–Takesaki result: a nonzero concrete wedge von Neumann algebra, a unit cyclic/separating vector, and the modular data. With the adopted negative-rapidity modular identity and `α_t=σ_{-t}`, the proof obtains the future boost with rapidity `2πt`. Differentiating `γ_a` gives a future timelike curve with `η(γ̇,γ̇)=-c²` and acceleration magnitude `a`. Rescaling to proper time gives width `2πc/a` seconds; the unit definition converts that width to `β_U=2πc/(aℏ)` and `T_U=ℏa/(2πc k_B)`. The units are respectively `J⁻¹` and kelvins. These are conditional KMS parameters; the statement explicitly excludes detector and empirical claims.

I checked the convention against Hiai, §2.2, Definition 2.11 and Theorem 2.14 (Hiai uses the lower strip and `β=-1` for the modular convention), and Naaijkens, §3.4, Definition 3.4.4, which places the physical-time KMS upper boundary at `iℏβ`. The local proof itself supplies the conversion and does not import detector physics. Source locators: [Hiai](https://arxiv.org/pdf/2004.02383), [Naaijkens](https://arxiv.org/pdf/1311.2717).

For the model bridge's scope, Bisognano–Wichmann, §II and §IV, Theorem 1, states wedge conclusions under its Wightman assumptions; the assigned postulate labels its bridge as an adopted input instead of silently importing those assumptions. Guido, §§3.1–3.3, and Hollands–Wald, §2.2(a), support the stated modular/boost and Rindler-KMS context. These sources do not turn the adopted bridge into a proof or an empirical temperature claim. Sources: [Bisognano–Wichmann](https://denebola.if.usp.br/~jbarata/leituras-recomendadas/BisognanoWichmann-01-DualityConditionHermitianScalarField_985_1_online.pdf), [Guido](https://arxiv.org/pdf/0812.1511), [Hollands–Wald](https://arxiv.org/pdf/1401.2026).

### `ex-tgrx-wedge-typeiii-warning`

The geometric series converges in the product Hilbert space for `0<z<1` and gives a unit vector. The coefficient formula gives the diagonal eigenvalues `(1-z)zⁿ`; their sum is one. The geometric-series derivative and the displayed convergence argument justify the finite entropy formula. The TikZ diagram's nodes and arrows have the declared domains and codomains (`χ_z`, `r_z`, `R_z`), and the verified equation `R_z(P_z)=ρ_R` makes it commute. The adjacent array represents the same three maps. The example keeps its conclusion limited to the two-oscillator construction and does not infer a continuum wedge factorization.

No diagram repair, item edit, contract edit, or verification-stamp change was needed. Because no item changed, I did not run reflow, precheck, or proof-layout.

## Page verdicts

- `tgrx-gaussian-wedge` — **pass**. The draft A-page inventory matches its three items; its required pages are present, and the page has the frontmatter-only layout specified for this run.
- `tgrx-gaussian-wedge-examples` — **pass**. Its companion and prerequisite point to the A page, its example inventory matches the assigned example item, and the draft status is consistent.

## Uneditable defects and blocker

No confirmed or suspected defect remains in an uneditable item or page. No blocker prevents the batch review.

The lemma's manifest `reference` names `research/physics-non-fluid-129-2026-10-21-r2.notes.md#local-mathematical-prerequisite`; that file is absent at the named path. I relied on the current item, its direct suppliers, the assigned proof contract, and the source checks recorded above. This did not leave an unresolved claim in the assigned batch.
