# Step 3a reader report — batch 52

Run: advanced-qft-supersymmetry-build-2026-10-23  
Role: reader  
Scope: batch 52

## Opened inventory

Assigned pages:

- `qftx-bps-solitons-monopoles` — `library/advanced-qft-and-supersymmetry/qftx-bps-solitons-monopoles.md`
- `qftx-bps-solitons-monopoles-examples` — `library/advanced-qft-and-supersymmetry/qftx-bps-solitons-monopoles-examples.md`

Assigned items reviewed substantively in supplier/consumer order:

- `def-qftx-adjoint-higgs-monopole-sector`
- `pthm-qftx-su2-monopole-flux-quantization`
- `pthm-qftx-bogomolny-monopole-energy-bound`
- `ex-qftx-su2-bps-monopole`

I initially opened the definition carrier to resolve its actual edges before opening the supplier files; after that, I completed the claim review in supplier-to-consumer order.

Direct item suppliers opened for the definitions and proof steps used:

- `def-countable-choice`
- `def-qftx-nonabelian-gauge-data`
- `def-qftx-principal-connection-form`
- `def-qftx-lie-algebra-valued-form-bracket`
- `def-qftx-associated-covariant-derivative`
- `prop-adjoint-is-a-smooth-lie-group-representation`
- `lem-qftx-su2-compact-nonabelian-invariant-form`
- `lem-nrqmx-c1-stokes-compact-surface`
- `lem-qftx-principal-curvature-cartan-bianchi`
- `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`

The seven distinct page prerequisites were also opened: `qftx-susy-algebra-and-multiplets`, `qftx-nonabelian-yang-mills-model`, `qftx-gauge-geometry`, `nrqmx-adiabatic-holonomy`, `countability-and-uncountability`, `lie-groups-invariant-fields-and-the-exponential-map`, and `euclidean-surface-measure-divergence-and-green-identities`. I consulted the current batch manifest, proof contracts, cross-batch dependency record, source-coverage record, and the earlier batch-52 scope-review/repair reports as context, not as verdicts.

For source checking, I opened the relevant passages in Tong, *TASI Lectures on Solitons*, §§2.1.1–2.1.3, and Harvey, *Magnetic Monopoles, Duality, and Supersymmetry*, §§1.4, 2.1–2.2. These are the cited arXiv PDFs: [Tong](https://arxiv.org/pdf/hep-th/0509216) and [Harvey](https://arxiv.org/pdf/hep-th/9603086). I checked the actual source conventions and the relevant equations; I did not read either PDF cover to cover.

## Review

The two theorem arguments establish the stated classical consequences once their mathematical model and boundary hypotheses are interpreted as intended. The flux proof has the correct right-action transition sign, and the uniform fixed-frame limits justify passing the surface integral to the hemisphere curvature integrals. The energy proof correctly uses the Bianchi identity, the divergence theorem on balls, finite-energy integrability of the cross term, and positivity for all three charge-sign cases. The example's radial identities, origin regularity, asymptotic energy integrability, and surface-flux computation check in the stated `B_i=+\tfrac12\epsilon_{ijk}F_{jk}` convention.

I found the following uneditable defects:

1. In `def-qftx-adjoint-higgs-monopole-sector`, the fields are defined only on the spatial slice `R^3`, but the Definition then uses `partial_t A_i`, `partial_t Phi`, and `A_0`. No spacetime field maps or time interval were introduced, so those expressions are undefined. The model needs either spacetime fields with an explicit domain and regularity plus the static and `A_0=0` conditions, or a precise definition of their time-independent spacetime extensions.

2. In the same Definition, “the limiting tangential covariant derivative” and “the limiting magnetic field” are not defined as maps or limits. The boundary data do not specify the finite-radius adapted connection whose limit defines the tangential derivative, or whether the magnetic field limit is unscaled or uses the monopole's `R^2` radial scaling. Define the adapted connection and its limit, give the covariant derivative formula on `S^2`, and define the scaled radial magnetic limit (or remove the clause if it is not part of the model).

3. `pthm-qftx-su2-monopole-flux-quantization` repeats `B_infty` in its Statement without defining it or identifying it with the coefficient of the separately defined limiting angular curvature. The uniform `mathcal F_{alpha,R}` limit does not by itself specify which radial magnetic-field quantity is meant by `B_infty`. This leaves a Statement hypothesis ill-formed.

4. `pthm-qftx-bogomolny-monopole-energy-bound` likewise requires that “the limiting magnetic field lies in its stabilizer algebra,” without a defined limiting field. This is an undefined condition in the public Statement, even though the proof does not use it; define it precisely or remove it after confirming it is redundant.

5. In `ex-qftx-su2-bps-monopole`, Verification 4.2 says to choose smooth lifts `u_N,u_S` of `omega -> -omega_a T_a` through `u -> Ad_u T_3`, but supplies neither explicit lifts nor a cited/proved existence result. The flux theorem requires these lifts and their transition. Give smooth formulas on neighborhoods of both closed hemispheres or prove the required local-section property of this Hopf map.

6. In `pthm-qftx-bogomolny-monopole-energy-bound`, the Tong normalization note in `sources.references[0].locator` and `Remarks` says `g^2=e^2/2`. Tong's §2.1.2 equation (2.16) places `1/e^2` outside the matrix trace and `2/e^2` on the traced surface term; Tong's generator convention has `Tr(T_a T_b)=delta_ab/2` (§1.1). With the item's `kappa=-2 Tr_2` anti-Hermitian normalization, these coefficients match the item's `1/(2g^2) kappa` energy and `m/g^2` surface term at `g^2=e^2`, not `e^2/2`. The local energy proof is independent of this source-note error, so this citation defect is nonfatal.

## Edits

No item or page was edited. This reader assignment is read-only. The six findings above remain for owner disposition. I created this report and the required findings JSON. Because no item was changed, I did not run reflow, precheck, or proof-layout.

## Diagram review

The TikZcd square in `pthm-qftx-su2-monopole-flux-quantization` correctly depicts the two local lifts and the Hopf map `p(u)=Ad_u T_3`; it commutes because the transition is in the stabilizer of `T_3`. The proof does not rely on the diagram. No other TikZ/tikzcd diagrams occur in the assigned carriers, and I found no exposition here that requires another diagram.

## Page verdicts

- `qftx-bps-solitons-monopoles`: the page carrier passes its metadata and presentation checks. It is the draft physics A page, has the reciprocal examples companion, lists the three assigned items, has no Markdown body, and retains `page_layout: compact-v1`. Its definition and theorem items have the findings above.
- `qftx-bps-solitons-monopoles-examples`: the page carrier passes its metadata and presentation checks. It is the draft physics B page at the same planned order as its reciprocal A companion, lists the example in `examples`, has no Markdown body, and retains `page_layout: compact-v1`. The example has the lift-existence finding above.

## Blocker and coverage limit

There is no operational blocker. The reported defects need owner disposition because the reader cannot edit this assignment. I checked all four assigned items, both assigned pages, the ten direct item suppliers, the seven declared required-page carriers, the relevant proof-contract steps, and the cited source passages. The first concatenated supplier read was truncated in the returned output, so I reopened several suppliers to retrieve the omitted relevant sections; this did not change the source bytes. I did not independently audit every transitive ancestor of those supplier items; I checked the exact supplier statements and proof portions needed for the assigned claims. No empirical observation or statistical inference is asserted in this batch.
