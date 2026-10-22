# Step 3a Reader Report — Batch 23

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-23`)  
Scope: batch `23`

## Inventory opened

Assigned pages:

- `library/einstein-maxwell-models-mathematics/emg-fx08.md`
- `library/einstein-maxwell-models-mathematics/emg-fx08-examples.md`

Assigned items, reviewed in consumer order after their relevant suppliers:

- `items/def-emg-fx-charged-radial-scattering.md`
- `items/lem-emg-fx-charged-radial-equation.md`
- `items/prop-emg-fx-superradiant-wronskian.md`
- `items/cex-emg-fx-neutral-no-amplification.md`

Supplier and page context opened to check the assigned claims:

- `items/def-emg-xs-rn-data.md`, `items/def-euclidean-spheres-and-closed-balls.md`, `items/def-gr-schwarzschild-exterior-model.md`, and `items/ex-the-round-metric-on-the-sphere-as-an-induced-metric.md` for the RN metric, sphere topology, atlas, and round metric.
- `items/prop-emg-xs-rn-horizon-data.md` for the subextremal roots and their local horizon interpretation.
- `items/lem-emg-fx-rn-scalar-wave-potential.md`, the current draft supplier from batch 21, for the exact tortoise coordinate and supplied-harmonic convention. Its proof dependencies used in the review were `items/def-emg-fx-wave-currents.md`, `items/lem-gr-metric-divergence-and-density-formula.md`, `items/thm-emg-fx-coupled-potential-energy.md`, `items/def-countable-choice.md`, `items/cor-primitives-of-a-continuous-function.md`, and `items/lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space.md`.
- Required page context: `library/einstein-maxwell-models-mathematics/emg-fx06.md`, `library/einstein-maxwell-models-mathematics/emg-ms02.md`, and `library/einstein-maxwell-models-mathematics/emg-ms01.md`.
- Downstream consumers in current-run batch 28, inspected for interface propagation: `items/lem-emg-fx-asymptotic-scalar-energy-flux.md`, `items/post-emg-fx-test-field-regime.md`, and `items/pthm-emg-fx-conditional-model-flux.md`. The batch-28 manifest places all three on A page `emg-fx13`.

The source passages checked were Brito, Cardoso, and Pani, *Superradiance — the 2020 Edition*, §4.4, Eq. (4.53), and §4.6.1, Eqs. (4.55)–(4.57), [arXiv HTML](https://ar5iv.labs.arxiv.org/html/1501.06570); Balakumar, *Aspects of quantum charged scalar field theory in curved spacetime*, Chapter 3, §§3.1–3.3.4, especially Eqs. (3.11), (3.36)–(3.59), and (3.76)–(3.84), [thesis PDF](https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0); and Lee, *Introduction to Smooth Manifolds*, Proposition 13.9, p. 331, and Example 13.16, p. 333, [text](https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html).

## Review and edits

The charged radial equation follows from the stated gauge convention (A_t=-Q/r), (D_t=\partial_t+ieQ/r), and the separated ansatz. Its coefficient is real for real parameters. The Wronskian calculation uses the differentiated asymptotics and gives the stated identity, including at ω_H = 0. The neutral-mode Volterra construction has an integrable real potential, yields a bounded solution with the required asymptotics, and its normalization and flux comparison are valid. These are deductions in a specified mathematical model; the items make no empirical claim that the model describes a physical black hole.

I repaired `items/def-emg-fx-charged-radial-scattering.md`:

- Replaced evaluations (A_t(r_+)) and (A_t(\infty)), whose points are outside the stated exterior, with the corresponding one-sided limits and computed their difference as (Q/r_+).
- Qualified the inner-end branch interpretation: for ω_H ≠ 0 the displayed exponential is the selected branch; when ω_H = 0 the phases coincide, so the boundary condition does not distinguish ingoing and outgoing directions.
- Made the gauge-frequency statement exact. With (D=\partial-ieA), the shift (A_t'=A_t+C), (\psi'=e^{ieCt}\psi) changes the coordinate mode label to ω' = ω − eC. The asymptotic kinetic frequency (\omega_\infty=\omega+e\lim_{r\to\infty}A_t(r)) and the potential difference are invariant; the threshold is (\omega_\infty-e\Phi_H), reducing to the item's (\omega_H=\omega-e\Phi_H) in the fixed gauge (A_t(\infty)=0).
- Specified the scalar field as a smooth map on the trivial complex line bundle and the normalized radial function as (u\in C^\infty(\mathbb R;\mathbb C)).
- Qualified the excluded massive-field comparison by defining the scalar mass parameter μ, its units, and the propagating condition ω > μ; replaced the unsupported non-self-adjoint characterization with the narrower statement that other complex-frequency boundary problems are outside this identity.

The source verifies the sign in ((\omega-eQ/r)^2), the horizon frequency shift, and the Wronskian reflectivity formula. The cited sources use their own mode normalizations and leading asymptotics; the assigned local proof supplies the exact unit-incoming normalization and the long-range Coulomb phase. The phase derivative and its (1/r) term agree by direct differentiation.

I updated `research/physics-non-fluid-129-2026-10-21-r2-batch-23.proof-contracts.json` with the current definition excerpts in the definition boundary rows and consumer citations/supplier excerpts, and made the existing endpoint evidence reflect the one-sided limits and zero-frequency qualification. No stale `verification.judge` record was present on the repaired item. The unchanged counterexample worksheet hash still matches its carrier.

The direct and indirect consumers were reviewed against the corrected definition. `lem-emg-fx-charged-radial-equation` uses the same field operator and mode parameters; `prop-emg-fx-superradiant-wronskian` uses the unchanged asymptotic conditions and remains valid when ω_H = 0; and `cex-emg-fx-neutral-no-amplification` has ω_H = ω > 0 in its neutral case. No repair was needed for these batch-23 consumers. The batch-21 scalar-potential supplier was reviewed independently at its current statement and proof; no defect was found and no independent acceptance is inferred.

The three batch-28 consumers were also checked. The scalar-energy-flux lemma uses the unchanged limit \(\Theta'\to\omega\). The postulate at `items/post-emg-fx-test-field-regime.md:65` and the theorem fact at `items/pthm-emg-fx-conditional-model-flux.md:73` write \(A_t(\infty)-A_t(r_+)\) as an endpoint evaluation even though their stated exterior has domain \(r>r_+\). The displayed value \(Q/r_+\) is correct when these symbols mean the corresponding limits, but the two carriers do not say that; both are reported as nonfatal `ill-formed` findings. They remain unedited because batch 28 is outside this assignment.

Required repair checks for the changed item:

- `reflow.mts`: unchanged.
- `precheck.mts`: exit 0, `0 checked, 0 failing` (the item has no proof steps).
- Final `proof-layout.mjs`: `1 items, 0 steps, 0 defects`.

No TikZ or tikzcd diagrams occur in the assigned pages or items.

## Page verdicts

- `emg-fx08`: pass. Its frontmatter-only A-page placement, category, required pages, and three item IDs agree with the assigned manifest. It has no prose summary to adjudicate.
- `emg-fx08-examples`: pass. Its frontmatter-only B-page companion relation and counterexample placement agree with the assigned manifest. It has no prose summary to adjudicate.

## Unedited defects and blockers

- `post-emg-fx-test-field-regime`, Postulate at line 65: endpoint evaluations of (A_t) are outside the stated open exterior; specify the limits or reuse the exact earlier definition of Φ_H.
- `pthm-emg-fx-conditional-model-flux`, Facts & Assumptions [F1] at line 73: the same endpoint-evaluation shorthand is repeated in the supplier summary; replace it with the exact limit definition or Φ_H=Q/r_+.

Both items are draft members of batch 28 and outside this reader's write scope. They do not block completion of the batch-23 report, but need the owning batch's disposition.

## Coverage note

All four assigned items and both assigned pages were opened. The directly used suppliers, the additional mathematical results needed to check the tortoise-coordinate and energy arguments, three downstream batch-28 consumers, the required page context, and the cited source passages listed above were inspected. I did not audit unrelated mathematical-library content or nonassigned page diagrams. This batch contains no experiment reports, measured inputs, or empirical premises, so no statistical inference is asserted.
