# Batch 17 authoring notes — `fd-s01`

Run: `fluid-dynamics-all-47-2026-10-23`  
Pair: `fd-s01` / `fd-s01-examples`  
Scope: the 13 items listed below, these two pages, and batch 17 evidence only.

## Design precedence and current plan

- No `research/fluid-dynamics-all-47-2026-10-23-owner-authoring-direction.md`
  is present.
- The controlling design is `research/plan-fluid-dynamics-refresh-track.md`
  § “Periodic fluid Fourier Sobolev spaces” (L550–610): it is the dated
  2026-10-18 owner refresh. Its 2026-10-23 correction adds the published
  `thm-fourier-basis-and-parseval-on-the-n-torus` and preserves
  `def-countable-choice`; it supplies the exact unit-torus to (2\pi)-torus
  normalization, real symmetry, and negative-order limitation.
- Historical `research/plan-fluid-dynamics-track.md` § “Periodic fluid Fourier
  Sobolev spaces” (L508–542) is superseded: it omits
  `orthonormal-bases-parseval-and-fourier-series` from the page prerequisites
  and predates the finite-torus correction.
- Current `research/plan-spec.json` rows for `fd-s01` and
  `fd-s01-examples` match the controlling refresh and the current batch 17
  manifest. A’s five page prerequisites are
  `countability-and-uncountability`,
  `hilbert-space-geometry-and-riesz-representation`,
  `orthonormal-bases-parseval-and-fourier-series`,
  `relations-functions-and-quotients`, and
  `weak-derivatives-and-sobolev-spaces`; B requires A.
- The owner Fourier review says its minimal repair was a proposal “not yet
  applied.” That status is historical: the current refresh, plan spec, and
  batch manifest now contain the correction. No shared plan or engine file is
  being edited here.
- `research/fluid-dynamics-all-47-2026-10-23-batch-dependency-levels.json`
  puts batch 17 at page dependency level 0 with no in-run page suppliers.
  The current manifest inventory is empty. All item dependencies below are
  therefore computed from the controlling S01 inventory plus explicit
  assumptions required by each use; same-batch edges are ordered locally.

## Item inventory, dependencies, and levels

Level 0 suppliers are authored before their consumers. External published
inputs do not increase an item’s level.

| Item | Side | Direct dependencies | Level |
|---|---|---|---:|
| `def-fd-periodic-fourier-sobolev-spaces` | A | `def-countable-choice`; `def-the-one-dimensional-torus-and-normalized-haar-integral`; `def-fourier-coefficients-and-trigonometric-polynomials`; `thm-fourier-basis-and-parseval-on-the-n-torus` | 0 |
| `def-fd-projected-no-slip-stokes-space` | A | `def-sobolev-space-wkp-and-its-norm`; `thm-sobolev-spaces-are-banach-spaces`; `def-axiom-of-choice`; `def-real-and-complex-inner-product-space`; `def-hilbert-space` | 0 |
| `lem-fd-rectangular-test-divergence-inverse` | A | none | 0 |
| `lem-fd-periodic-fourier-embedding-products` | A | `def-fd-periodic-fourier-sobolev-spaces`; `def-countable-choice` | 1 |
| `def-fd-periodic-leray-pressure-maps` | A | `def-fd-periodic-fourier-sobolev-spaces`; `def-countable-choice` | 1 |
| `lem-fd-zero-trace-directional-poincare` | A | `def-fd-projected-no-slip-stokes-space`; `def-axiom-of-choice` | 1 |
| `lem-fd-periodic-tame-transport-commutator` | A | `def-fd-periodic-fourier-sobolev-spaces`; `lem-fd-periodic-fourier-embedding-products`; `def-countable-choice` | 2 |
| `thm-fd-periodic-pressure-recovery` | A | `def-fd-periodic-fourier-sobolev-spaces`; `def-fd-periodic-leray-pressure-maps`; `lem-fd-periodic-fourier-embedding-products`; `def-countable-choice` | 2 |
| `lem-fd-given-smooth-solutions-difference-energy` | A | `def-fd-periodic-fourier-sobolev-spaces`; `lem-fd-periodic-fourier-embedding-products`; `def-fd-periodic-leray-pressure-maps`; `def-countable-choice` | 2 |
| `thm-fd-projected-stationary-stokes` | A | `def-fd-projected-no-slip-stokes-space`; `lem-fd-zero-trace-directional-poincare`; `thm-riesz-representation-for-hilbert-space`; `def-axiom-of-choice` | 2 |
| `thm-fd-rectangular-no-slip-stokes-velocity-pressure` | A | `def-fd-projected-no-slip-stokes-space`; `thm-fd-projected-stationary-stokes`; `lem-fd-rectangular-test-divergence-inverse`; `def-axiom-of-choice` | 3 |
| `ex-fd-single-mode-pressure` | B | `def-fd-periodic-fourier-sobolev-spaces`; `thm-fd-periodic-pressure-recovery`; `def-countable-choice` | 3 |
| `rem-fd-stokes-pressure-prerequisite` | B | `def-fd-projected-no-slip-stokes-space`; `thm-fd-projected-stationary-stokes`; `thm-fd-rectangular-no-slip-stokes-velocity-pressure`; `def-axiom-of-choice` | 4 |

The direct Countable Choice edges keep the owner’s explicit assumption visible
through each periodic Fourier consumer. Direct torus/Fourier definitions are
included where the authored item states their interfaces. The full Axiom of Choice remains
explicit for the Stokes branch: the Sobolev completeness supplier has that
stated hypothesis, and the Hilbert Riesz supplier requires Countable Choice.
Step 1.2 proves directly that full AC implies Countable Choice by applying its
choice function to the range of an arbitrary sequence of nonempty sets; this
avoids an additional Banach-integration page prerequisite.

## Supplier interfaces and readiness check

- The imported
  `thm-fourier-basis-and-parseval-on-the-n-torus` item is published, assumes
  Countable Choice, and states for every (n\ge1) that the coordinate
  characters are a basis of complex (L^2(\mathbb T^n)), that Fourier
  synthesis and Parseval hold in the finite-subset-net sense, and that the
  coefficient map is a surjective isometry to
  (\ell^2(\mathbb Z^n,\mathbb C)). Its complete current proof and its direct
  facts were inspected in the imported carrier; the read-only root original
  and imported bytes match (SHA-256
  `6d017415a6b810647e7c94b874eeaf15f46699e548ad6957fc16aad60600d968`).
- The theorem’s direct proof inputs inspected were the normalized torus and
  Fourier coefficient definitions, one-dimensional character orthogonality,
  Fubini, finite-torus compactness/character separation, complex
  Stone–Weierstrass, continuous density in (L^2), the complex (L^2) Hilbert
  pairing, the Hilbert basis expansion/isometry results, and Countable Choice.
  The imported theorem needs no tensor-product identification and supplies no
  estimates for products, commutators, or bounded-domain pressure.
- The imported `thm-sobolev-spaces-are-banach-spaces` proof was read in full:
  it assumes full AC to invoke its stated Countable-Choice (L^p) interfaces.
  `thm-riesz-representation-for-hilbert-space` was read in full and assumes
  Countable Choice. The helper lemma was inspected but is not used: Step 1.2
  derives Countable Choice directly from full AC by applying its choice function
  to the range of an arbitrary sequence of nonempty sets. The Riesz interface
  then matches the local Stokes use without an extra page prerequisite.
- `loadStep1Record` and `step1Decision` were applied to the seven external
  published inputs listed above. Each reports `Readiness record missing` for
  this run. These suppliers are outside this run’s manifests; no missing local
  authoring prerequisite follows from that result. Their actual published
  statements and proofs were inspected; no supplier escalation is currently
  indicated.

## Source reading and dispositions

| Source and locator | Reading observed | Supported items / disposition |
|---|---|---|
| Gerald Teschl, *Topics in Real and Functional Analysis*, version 2017, §2.5, pp. 63–68, [full PDF](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf) | Read the Fourier coefficient conventions, orthogonality, (L^2) Fourier/Parseval theorem, and Fejér route to completeness. Its displayed treatment is one-dimensional; Theorem 2.17 points to Fejér/Stone–Weierstrass for completeness rather than reconstructing the argument there. It does not replace the current (n)-torus supplier or our proofs. | `def-fd-periodic-fourier-sobolev-spaces`; disposition: supports the Fourier conventions and (L^2) context, not the local (d)-dimensional estimates. |
| Theo Bühler and Dietmar Salamon, *Functional Analysis*, §2.3.6, Example 2.66, pp. 87–88; §5.3.1, pp. 233–237, [full PDF](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf) | Read the Fourier example and the complex Hilbert-space convention. The example states completeness and points to Fejér’s theorem; its complex inner product is anti-linear in the first variable, so our coefficient convention is matched by using the corresponding coefficient placement. | `def-fd-periodic-fourier-sobolev-spaces`; disposition: independent Hilbert/Fourier treatment; convention difference recorded, not used as a proof shortcut. |
| Terence Tao, *254A Notes 1: Local well-posedness of the Navier–Stokes equations* (2018), periodic pressure/Leray discussion and Sobolev Proposition 35 / Exercise 36, [full text](https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/) | Read the periodic pressure decomposition, multiplier formula, (H^s) norm, and stated product/embedding results. The embedding is an exercise and the product proof is deferred to the Littlewood–Paley appendix; neither is imported as a proof premise. Tao’s torus has unit period, so the (2\pi) scaling is handled explicitly. | `def-fd-periodic-fourier-sobolev-spaces`; `lem-fd-periodic-fourier-embedding-products`; `def-fd-periodic-leray-pressure-maps`; `thm-fd-periodic-pressure-recovery`; disposition: independent periodic PDE treatment; local proofs remain load-bearing. |
| Erick Schulz, *Introduction to the Navier–Stokes Equations*, McGill MATH 595 notes (2014), §§2.1.1–2.1.2, §2.1.5.2, §4.1.1, pp. 5–6, 6–8, 14–15, 31–32, [full lecture notes](https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf) | Read the (2\pi)-periodic (L^2) Fourier synthesis/Parseval argument, Fourier weak-derivative convention, the discrete-convolution/Young proof of the (H^s) algebra estimate, and Leray multiplier/projection properties. The source uses unnormalized Lebesgue integrals and a homogeneous-frequency estimate in the multiplication calculation; our normalized measure and inhomogeneous weight, including the zero mode, are stated and proved locally. | `def-fd-periodic-fourier-sobolev-spaces`; `lem-fd-periodic-fourier-embedding-products`; `def-fd-periodic-leray-pressure-maps`; `thm-fd-periodic-pressure-recovery`; `lem-fd-periodic-tame-transport-commutator`; disposition: independent full-lecture treatment; local proof supplies the assigned exact hypotheses and inequalities. |
| Martin Vohralík, *A posteriori error estimates for efficiency and error control in numerical simulations*, UPMC Course NM497 lecture notes (2010–2011), Chapter 6 §6.1, PDF pp. 55–56; Chapter 3 §3.7, PDF pp. 29–30; Chapter 4 §4.1, PDF p. 31, [full lecture notes](https://www.ljll.fr/MathModel/enseignement/polycopies/vohralik.pdf) | Downloaded the full 84-page PDF (1,334,257 bytes) by curl and inspected the complete Stokes variational formulation and inf–sup discussion in §6.1, the global Friedrichs inequality in §3.7, and the Riesz/Lax–Milgram Dirichlet formulation in §4.1. Section 6.1 states well-posedness from an inf–sup condition but cites its source rather than proving that condition; our Stokes and rectangle pressure proofs remain local and load-bearing. The mandatory Node fetch checker received a 1,592-character HTML response on six attempts, so this source is recorded as dropped from active stamped coverage with full local proof alternatives; the source remains in item reading references. | `def-fd-projected-no-slip-stokes-space`; `lem-fd-zero-trace-directional-poincare`; `lem-fd-rectangular-test-divergence-inverse`; `thm-fd-projected-stationary-stokes`; `thm-fd-rectangular-no-slip-stokes-velocity-pressure`; `rem-fd-stokes-pressure-prerequisite`; disposition: independently read Stokes context, not a logical supplier. |

One exploratory Teschl author-site URL
`https://www.mat.univie.ac.at/~gerald/ftp/book-fa/fa.pdf` returned 404. The
search found the same November 2017 full text at the UOM PDF above; that copy
was inspected and is the active fetched Teschl source. The earlier G&R 1979
full scan was retrieved locally and visually inspected, but its citation URL
then failed the fetch checker with ENOTFOUND on the initial request plus five
retries. Searches located the full Vohralík note as a Stokes context
alternative; it too was downloaded and read, but the mandated Node checker
received short HTML on six attempts. Both retrieval histories and per-item
local proof alternatives are preserved in the coverage `source_resolution`
records. They are not mathematical prerequisite gaps: all 13 arguments are
complete, and Teschl, Bühler–Salamon, Tao and Schulz remain four active
fetch-stamped full texts on A, with Tao and Schulz active on B.

## Authoring checkpoint and batch interfaces

The finished 13 carriers are in `items/`; A/B frontmatter is in
`library/fluid-dynamics-mathematics/fd-s01.md` and
`fd-s01-examples.md`. Both pages have YAML only and no Markdown body. The A
page retains the five required pages. The batch manifest has 11 A items and 2
B items; the cross-batch dependency file is the required JSON array `[]`.

| Item | Exact claim/convention checkpoint | Direct deps; level | Source/disposition |
|---|---|---|---|
| `def-fd-periodic-fourier-sobolev-spaces` | $d=1,2,3$, $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$, normalized push-forward measure, conjugate symmetry, weighted coefficient completion; $s\ge0$ has a unique $L^2$ representative and $s<0$ has no such claim. | Countable Choice; one-dimensional torus/Haar; Fourier coefficient definition; finite-torus basis/Parseval theorem. Level 0. | Teschl §2.5 pp. 63–68 and Bühler–Salamon Example 2.66 pp. 87–88; local rescaling and completion proof. |
| `def-fd-projected-no-slip-stokes-space` | Full AC; bounded open $\Omega\subset(-R,R)^d$; divergence-free $H_0^1$ closure is a real Hilbert space; no arbitrary-domain trace equivalence. | Sobolev norm; Sobolev completeness; AC; real inner product; Hilbert definition. Level 0. | Bühler–Salamon §5.3.1 and Vohralík §6.1; local closed-kernel proof. |
| `lem-fd-rectangular-test-divergence-inverse` | Finite rectangle; compactly supported mean-zero scalar tests have a compactly supported smooth vector right inverse, continuous on each fixed-support test space. | None. Level 0. | Vohralík §6.1 context only; full recursive bump/Fubini construction locally proved. |
| `lem-fd-periodic-fourier-embedding-products` | $H^\sigma\to C^j$ for $\sigma>j+d/2$; $H^\sigma$ algebra for $\sigma>d/2$, normalized inhomogeneous weights. | Fourier Sobolev definition; Countable Choice. Level 1. | Schulz §2.1.5.2 and Tao Prop. 35/Exercise 36; Tao’s product proof is deferred, so local convolution proof is load-bearing. |
| `def-fd-periodic-leray-pressure-maps` | $P_0=I$, $P_k=I-kk^{\mathsf T}/|k|^2$; mean-zero $Q$ tensor multiplier; bounded real maps and signed gradient identity. | Fourier Sobolev definition; Countable Choice. Level 1. | Schulz §4.1.1 and Tao periodic pressure discussion; local mode calculation. |
| `lem-fd-periodic-tame-transport-commutator` | Integers $m\ge s\ge4$, $d\le3$; stated two-factor commutator estimate for the inhomogeneous $w_k^m$ multiplier. | Fourier Sobolev definition; embedding/product lemma; Countable Choice. Level 2. | Schulz §2.1.5.2; local mean-value, convolution and Cauchy–Schwarz proof. |
| `thm-fd-periodic-pressure-recovery` | Divergence-free $u\in H^s$, $s>d/2+1$; $\pi=Q(u\otimes u)\in H^s$; projected identity in $H^{s-1}$; uniqueness only among mean-zero pressures. | Fourier definition; Leray/pressure maps; embedding/products; Countable Choice. Level 2. | Tao periodic pressure and Schulz §4.1.1; local product-rule and mode proof. |
| `lem-fd-zero-trace-directional-poincare` | Full AC; $\Omega\subset(-R,R)^d$; $\|v\|_2\le2R\|\partial_1v\|_2\le2R\|\nabla v\|_2$ for $H_0^1$. | Projected no-slip space; AC. Level 1. | Vohralík §3.7, pp. 29–30; local zero-extension/FTC proof. |
| `thm-fd-projected-stationary-stokes` | Full AC, $\mu>0$, $f\in L^2$; unique variational velocity and $2R/\mu$ bound; no pressure conclusion. | Projected space; Poincaré lemma; Hilbert Riesz theorem; full AC, with CC derived locally. Level 2. | Bühler–Salamon §5.3.1; Vohralík §4.1/§6.1 context; local completeness, functional bound and Riesz proof. |
| `lem-fd-given-smooth-solutions-difference-energy` | Two conditional branches: same-$\nu$ projected smooth incompressible solutions and given smooth symmetric linear systems; $L^2$ Grönwall plus weighted Fourier interpolation, with explicit $2M$ factor. | Fourier definition; embedding/products; Leray maps; Countable Choice. Level 2. | Schulz §§2.1.1–2.1.2, §2.1.5.2, §4.1.1; local energy integrations and coefficient Hölder proof. |
| `thm-fd-rectangular-no-slip-stokes-velocity-pressure` | Full AC, finite rectangle, $\mu>0$, arbitrary $L^2$ forcing; unique velocity plus $H^{-1}$ pressure modulo constants and bounded map; no $L^2$/corner claim. | Projected space; projected stationary theorem; rectangle divergence inverse; AC. Level 3. | Vohralík §6.1 context only; full pressure functional, $H^1$ right-inverse bound, distribution identity and constant-uniqueness proof local. |
| `ex-fd-single-mode-pressure` | $u=A\sin x_2e_1$, $d=2,3$; divergence and convection vanish; unique mean-zero recovered pressure is zero; no viscous solution claim. | Fourier definition; periodic pressure recovery; Countable Choice. Level 3. | Tao pressure discussion and Schulz §4.1.1; direct derivative verification. |
| `rem-fd-stokes-pressure-prerequisite` | Projected theorem provides velocity only; rectangle theorem separately supplies $H^{-1}$ pressure; no general-domain/$L^2$ claim. | Projected space; projected Stokes theorem; rectangle theorem; AC. Level 4. | Vohralík §6.1 comparison; exact supplier interfaces inspected and scope-only verification. |

Readiness disposition: all 13 assigned items have complete local proofs and current supplier interfaces; none waits on a same-run prerequisite. All 13 native Step 1 records are `ready`, `owner: false`, and hash-current. `status: draft`, pending precheck, and missing independent approval on external published suppliers are not prerequisite gaps; later review gates remain separate.

### Final validation and remaining scope

- Batch-scoped item dependency levels pass: 13 items, zero errors, with levels 0/1/2/3/4 exactly as recorded in the manifest. The focused dependency checker, depcheck, content-policy, rendercheck (15 files), strict proof contracts (13/13), and explicit-item `proof-layout.mjs` (39 steps, zero defects) all pass. The statement-first scan found 13 uninterrupted formulations with immediate reference sections; both page bodies are empty.
- `coverage-checklist` passes for both pages (39 harvested entries, zero warnings/errors). `source-fetch-check --stamp` exits 0: six source entries are stamped and two documented source-resolution records carry complete local proof alternatives; all 8/8 entries are resolved. `sourceResolutionErrors` returns zero for both drop records. The four active A sources are full books/lecture notes; B has two active treatments.
- Native Step 1 readiness recheck closes all 13/13 assigned records with current hashes. No `--owner` flag was used.
- The unscoped run-wide `item-dependency-levels.mjs check --run fluid-dynamics-all-47-2026-10-23` exits 1 on 42 out-of-batch errors: 34 empty scaffold inventories (`fd-f03`, `fd-f03-examples`, `fd-px01`, `fd-px01-examples`, `fd-px02`, `fd-px02-examples`, `fd-px03`, `fd-px03-examples`, `fd-s03`, `fd-s03-examples`, `fd-ps01`, `fd-ps01-examples`, `fd-ps02`, `fd-ps02-examples`, `fd-w02`, `fd-w02-examples`, `fd-pn01`, `fd-pn01-examples`, `fd-pn02`, `fd-pn02-examples`, `fd-pda01`, `fd-pda01-examples`, `fd-ples01`, `fd-ples01-examples`, `fd-pg01`, `fd-pg01-examples`, `fd-pmp01`, `fd-pmp01-examples`, `fd-l01`, `fd-l01-examples`, `fd-bl01`, `fd-bl01-examples`, `fd-pbl01`, `fd-pbl01-examples`) and 8 stale declared levels on `post-fd-boundary-data`, `pthm-fd-cauchy-momentum-angular`, `pthm-fd-control-volume-balances`, `pthm-fd-energy-decomposition`, `post-fd-weak-balances`, `pthm-fd-conservation-jump-laws`, `ex-fd-conduction-energy-entropy`, and `cex-fd-vacuum-velocity-determination`. None is assigned here; the batch-scoped graph has no errors and the assigned IDs are absent from the run-wide error list. These other batches remain untouched.
