# Step 6 Alpha group reader — read-only digest — group **i**, run `physics-em-sr-40-2026-10-08`

- You are the read-only Step 6 Alpha group reader for batches **19**, **20**, **21**: 3 A/B pair(s), 6 page(s), 12 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/physics-support/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 19 | `em-causal-response-and-radiation-prerequisites` | A | classical-electromagnetism-mathematics | 315 | `em-wave-equation-prerequisites`, `the-lebesgue-and-riemann-integrals-compared` |
| 19 | `em-causal-response-and-radiation-prerequisites-examples` | B | classical-electromagnetism-mathematics | 316 | `em-causal-response-and-radiation-prerequisites` |
| 20 | `em-experiment-analysis-prerequisites` | A | classical-electromagnetism-mathematics | 317 | `em-expanded-analysis-prerequisites`, `limits-of-real-functions` |
| 20 | `em-experiment-analysis-prerequisites-examples` | B | classical-electromagnetism-mathematics | 318 | `em-experiment-analysis-prerequisites` |
| 21 | `em-causal-wave-kernel-prerequisites` | A | classical-electromagnetism-mathematics | 321 | `em-wave-equation-prerequisites`, `density-separability-and-convolution-in-lp`, `fubini-and-change-of-variables`, `the-topology-of-euclidean-space` |
| 21 | `em-causal-wave-kernel-prerequisites-examples` | B | classical-electromagnetism-mathematics | 322 | `em-causal-wave-kernel-prerequisites` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-causal-response-and-radiation-prerequisites` — Em Causal Response And Radiation Prerequisites (2 item(s))

- `thm-em-causal-dispersive-response` · theorem — Causal convolution response, transfer function and dispersion relations
- `thm-em-radiation-asymptotic-flux` · theorem — Uniform far-zone asymptotics and retarded-time flux limit for compact conserved smooth sources

### `em-causal-response-and-radiation-prerequisites-examples` — Em Causal Response And Radiation Prerequisites — Examples (1 item(s))

- `ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries` · example — Hypothesis boundaries: a causal response without passivity, and the fixed-retarded-time flux limit

### `em-experiment-analysis-prerequisites` — Em Experiment Analysis Prerequisites (1 item(s))

- `thm-em-uncertainty-analysis` · theorem — Uncertainty analysis: bounded-error data confine the parameter of a $C^1$ prediction along a declared unit direction in $\mathbb R^n$

### `em-experiment-analysis-prerequisites-examples` — Em Experiment Analysis Prerequisites — Examples (1 item(s))

- `ex-em-experiment-analysis-prerequisites-hypothesis-boundaries` · example — Sharpness of the bounded-error uncertainty bound for a linear prediction, and failure once the response lower bound is dropped

### `em-causal-wave-kernel-prerequisites` — Causal kernels, gauge and point fields after wave existence (6 item(s))

- `def-em-potential-gauge-and-field-conventions` · definition — Scalar-vector potential pairs, gauge transformation, Lorenz divergence and the wave expression
- `lem-em-retarded-wave-kernel` · lemma — The retarded wave kernel is a distribution supported on the cone, solves the point-wave equation, and convolves to the retarded solution
- `lem-em-gauge-wave-reachability` · lemma — Every smooth potential pair on a slab can be put in Lorenz gauge by a wave-equation gauge function, without changing the fields
- `lem-em-smooth-forced-maxwell-cauchy-system` · lemma — The smooth forced Maxwell Cauchy system on a slab: existence, uniqueness, Gauss constraints and the c-cone of dependence
- `lem-em-point-retarded-potential-and-fields` · lemma — Retarded Liénard-Wiechert potentials and fields of a uniformly subluminal smooth point source
- `thm-em-retarded-point-distributional-maxwell` · theorem — The proper retarded point-history pair solves the distributional wave and Maxwell equations

### `em-causal-wave-kernel-prerequisites-examples` — Causal kernels, gauge and point fields after wave existence — Examples (1 item(s))

- `ex-em-causal-wave-kernel-prerequisites-explicit-checks` · example — Explicit checks of the retarded kernel, the static Liénard-Wiechert specialization and an explicit Lorenz-gauge transformation

## Your seams

Your pages depend on another group's:

- `em-causal-response-and-radiation-prerequisites` requires `em-wave-equation-prerequisites` (group h, batch 17)
- `em-experiment-analysis-prerequisites` requires `em-expanded-analysis-prerequisites` (group h, batch 16)
- `em-causal-wave-kernel-prerequisites` requires `em-wave-equation-prerequisites` (group h, batch 17)

Another group's pages depend on yours:

- `em-material-response` (group c) requires your `em-causal-response-and-radiation-prerequisites`
- `em-potentials-and-gauge` (group c) requires your `em-causal-wave-kernel-prerequisites`
- `em-retarded-fields-and-radiation` (group e) requires your `em-causal-response-and-radiation-prerequisites`
- `em-empirical-tests-and-scope` (group f) requires your `em-experiment-analysis-prerequisites`
- `em-retarded-point-prerequisites` (group j) requires your `em-causal-wave-kernel-prerequisites`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Step 6 Alpha group reader — read-only digest, `physics-em-sr-40-2026-10-08`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
