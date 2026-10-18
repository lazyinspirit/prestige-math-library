# PE32 comparison and unconditional convergence: first research packet

This is research-only authoring for the live original frontier
`numerical-analysis-remaining-71-2026-10-17`, batch 71. No canonical item,
manifest, page, contract, readiness record, engine state, gate evidence or hash
was changed. No tests or gates were run. The configured compaction threshold
was inspected: `/home/lazyinspirit/.codex/config.toml` declares
`model_auto_compact_token_limit = 500000` and scope `total`; this inspection
does not claim an existing process was restarted with that setting.

## Defect and controlling scope

The full batch-71 notes explicitly acknowledge that the required local
second-order comparison and unconditional scheme convergence are missing.
The exact PE32 and PE32-B `research/plan-spec.json` descriptions require both,
whereas the fully read PE32 section of
`research/plan-numerical-spatial-track.md` calls this branch optional and holds
comparison until its suppliers exist. The current plan requirement is retained.
No scope waiver, regularity narrowing, frequency restriction or open-problem
classification is proposed.

The model's original Definition remains exactly as written: every $d\ge1$,
finite nonempty controls, bounded periodic jointly Lipschitz $\alpha,b,f$,
$\alpha_j^a\ge\alpha_*>0$, arbitrary continuous periodic initial data. The
comparison theorem covers all bounded USC subsolutions and bounded LSC
supersolutions with ordered relaxed initial traces, including the model's
common continuous datum. It also covers raw ordered trace envelopes even
without a common continuous separator.

## Proposed carriers and exact order

All three complete typed carriers are in `proposed/items/`:

1. `lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities`.
   Its direct dependencies are
   `def-na-second-order-elliptic-semijets-and-closure`,
   `def-na-second-order-parabolic-viscosity-solution`, and
   `def-na-periodic-diagonal-controlled-diffusion-hjb-problem`.
   An ordinary elliptic superjet becomes an actual quadratic $C^{1,2}$
   upper test after adding $\theta I$; continuity and the jet's own witnessing
   sequence give the closed-jet version. The lower-test version is proved
   too. No parabolic-jet equivalence or second smooth-test lemma is needed.
2. `thm-na-periodic-diagonal-hjb-second-order-comparison`.
   Its exact direct dependencies are in its frontmatter: the original model
   and viscosity definition, `thm-na-elliptic-theorem-of-sums`, the new jet
   interface above, semicontinuous extreme value, Heine–Borel,
   finite-dimensional Bolzano–Weierstrass, and `def-axiom-of-choice`.
3. `thm-na-diagonal-diffusion-hjb-scheme-convergence`.
   Its direct dependencies are the comparison theorem, original half-relaxed
   stability theorem and conditional convergence corollary, original model
   and explicit algorithm, half-relaxed definition, Heine–Borel, and AC.
   It discharges the existing conditional implication using the new local
   comparison result. An explicit uniform-grid/time-step sequence satisfies
   both dominance and CFL for every model, so existence is nonvacuous.

The two new theorems explicitly assume full AC in their Statements and
axiom bases. AC is inherited from the analytic supplier chain, and covers
countable maximizing sequences and the existing half-relaxed recovery use.
The elementary jet-interface lemma adds no choice cost.

The full prerequisite order is: local differentiability/null-image/Alexandrov
foundation packet; semijet/sup-convolution/Jensen/elliptic-sums packet; new
jet interface; new comparison; new convergence. The jet interface can in fact
be reviewed immediately after the semijet definition. All original stencil,
consistency, localization, initial-trace and smooth-test suppliers are reused
without duplicate authoring. Neither a generic Barles–Souganidis theorem nor
an unproved CIL theorem is admitted as a logical supplier.

## Comparison details that must survive implementation

- Extend to $t=0$ by the interior upper/lower envelopes; their semicontinuity
  and ordered values are proved locally from the raw trace assumption.
- Given a positive gap before $T$, choose $t_*<S<T$ and
  $P(t)=\eta t+\gamma/(S-t)$ small enough to preserve it. Boundedness keeps
  all positive maximizing points a fixed distance below $S$.
- Spatial doubling uses the flat torus distance. Compactness gives
  $D(x_\varepsilon,y_\varepsilon)\to0$ and
  $D(x_\varepsilon,y_\varepsilon)^2/\varepsilon\to0$, uniformly over
  maximizing points. Initial order excludes $t\to0$.
- Apply the **elliptic** sums theorem to independent $(t,x),(s,y)$ with
  time penalty $(t-s)^2/(2\delta)$. Take $\delta\to0$ first with
  $\varepsilon$ fixed. This makes every time-coefficient error divided by
  $\varepsilon$ vanish, without additional time regularity of $u,v$.
- The full penalty Hessian has no mixed space-time block. Its spatial
  principal block after $A+\varepsilon A^2$ is
  $(3/\varepsilon)\begin{pmatrix}I&-I\\-I&I\end{pmatrix}$, regardless
  of the size of the temporal Hessian or terminal penalty.
- Rationalization gives
  $|\sqrt{\alpha_j^a(z)}-\sqrt{\alpha_j^a(w)}|
  \le L|z-w|/(2\sqrt{\alpha_*})$ (using the sum metric).
  Testing the spatial matrix bound on paired square-root coordinate vectors
  yields the required trace estimate. Choosing one common control in the
  maximum difference bounds the finite Bellman maxima with no optimizer
  regularity assumption.
- The time-gradient difference is $P'(t)\ge\eta>0$. After the ordered limits,
  the right side is $C(D^2/\varepsilon+D)\to0$, a contradiction.

## Existing consumer closure and surgical effects

No original Statement or Definition is changed by this packet. Thus no
original logical consumer requires repair from a changed supplier contract.
The new theorems are additions. The model's final Remarks sentence calling
comparison an outstanding escalation is stale once the continuation has
actually authored and accepted the suppliers; it should then be replaced by
a contextual reference to the new comparison and convergence theorems.
That is a Remarks repair, not a change to its Definition. The existing
conditional corollary is retained verbatim, including its explicitly
conditional Statement; the new theorem is its unconditional consumer.
The full first-order and Howard claims and all five B-page examples are
preserved. The missing two library pages still require the root continuation.

The following actual canonical closure was computed by reading YAML `deps`
for all 34,171 parseable current item carriers; this is an inventory operation,
not a corpus validation or acceptance claim.

For `def-na-periodic-diagonal-controlled-diffusion-hjb-problem`, the seven
direct consumers are:

- `alg-na-explicit-diagonal-diffusion-hjb-grid-step`
- `cor-na-diagonal-diffusion-scheme-converges-under-comparison`
- `def-na-second-order-parabolic-viscosity-solution`
- `ex-na-diagonal-diffusion-manufactured-solution`
- `lem-na-diagonal-diffusion-discrete-initial-trace`
- `lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity`
- `thm-na-diagonal-diffusion-stencil-consistency`

Its complete transitive closure has those seven plus these five:

- `ex-na-compact-control-quantization-hamiltonian-error`
- `ex-na-eikonal-kink-monotone-hjb-updates`
- `lem-na-diagonal-diffusion-stencil-is-monotone`
- `thm-na-diagonal-diffusion-scheme-half-relaxed-limits`
- `thm-na-first-order-hjb-scheme-convergence`

The first-order branch enters this closure only through the shared
smooth-test lemma. For the viscosity definition, direct consumers are the
conditional corollary, shared smooth-test lemma, and diagonal half-relaxed
theorem; its complete transitive closure adds the first-order convergence
theorem and its quantization/kink examples (six total). The diagonal
half-relaxed theorem's sole original direct or indirect consumer is the
conditional corollary; that corollary has no original consumers.

The new direct graph edges are:

- semijet definition → jet-interface lemma;
- elliptic sums → comparison;
- jet-interface lemma → comparison;
- comparison → unconditional convergence;
- original half-relaxed theorem → unconditional convergence;
- original conditional corollary → unconditional convergence.

The original model and viscosity definition also feed the new jet interface
and comparison, and the original model/algorithm feed new convergence.
The analytic foundation chain's new transitive consumers therefore include
comparison and unconditional convergence; they do not acquire any original
first-order or Howard consumer. The final supplier-first review must verify
the composed graph after all three packets are ingested, and the same
reviewer must own any repair if a supplier Statement/Definition changes.

## Source and reading limits

Read fully: repository CLAUDE, README and SCHEMA; the full batch-71 notes;
exact PE32/PE32-B plan-spec entries and PE32 design section; current batch-71
page inventory, original 28 carriers and the relevant half-relaxed supplier
interface. The existing author notes' source-read claims are historical
context, not a claim that this reviewer read those complete books/papers.

Fetched the CIL complete 69-page PDF to `cil.pdf` and extracted its text to
`cil.txt`. Inspected PDF/printed pages 9–13, 17–22, 34–35 and 49–55 for jet
closure, sums interface, doubled-variable compactness, square-root trace
estimate, envelope squeezing and terminal-time penalties. **No full-article
read is claimed here.** Read the complete proposed local semijet definition
and elliptic theorem-of-sums proof from the sums packet; its exact interface
matches this argument. Foundation and sums acceptance remains their own
review duty.

Fetched the complete Barles–Souganidis PDF to `barles-souganidis.pdf`, with
extracted text beside it. Inspected PDF pages 2–3, 5–8 and 11, particularly
Theorem 2.1 and its complete proof on PDF pages 5–6 (printed 275–276).
The convergence draft uses proved local discrete suppliers, not that source
as a substitute for their proof. No full-paper read is claimed.

## Current mathematical status

The three downstream arguments are complete relative to their exact locally
proved supplier interfaces, with no additional comparison hypothesis.
No downstream mathematical gap was found in this first research pass.
This packet does not independently accept the foundational differentiability,
Alexandrov or Jensen proofs, and does not certify the global frontier closed.
The original scope defect is resolved only after the root continuation
actually authors all necessary foundation/sums/comparison/convergence items
and both missing pages, followed by the requested sequential second/final
review. No readiness, acceptance or gate result is asserted here.

## Original batch inventory preserved


A page `monotone-hjb-schemes-and-policy-iteration`:

- `def-na-finite-state-discounted-bellman-system`
- `def-na-periodic-grid-and-tensor-multilinear-interpolation`
- `lem-na-discounted-bellman-policy-matrix-inverse-positive`
- `alg-na-finite-control-howard-policy-iteration`
- `def-na-first-order-hjb-cauchy-problem`
- `def-na-periodic-diagonal-controlled-diffusion-hjb-problem`
- `lem-na-multilinear-interpolation-positive-and-second-order-accurate`
- `alg-na-explicit-diagonal-diffusion-hjb-grid-step`
- `alg-na-positive-interpolation-semilagrangian-hjb-step`
- `alg-na-upwind-hjb-grid-step`
- `def-na-second-order-parabolic-viscosity-solution`
- `lem-na-grid-contact-localization-for-half-relaxed-limits`
- `thm-na-howard-policy-iteration-monotone-improvement-termination`
- `lem-na-diagonal-diffusion-discrete-initial-trace`
- `lem-na-diagonal-diffusion-stencil-is-monotone`
- `lem-na-first-order-hjb-discrete-initial-trace`
- `lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity`
- `thm-na-diagonal-diffusion-stencil-consistency`
- `thm-na-positive-interpolation-hjb-step-monotone-stable-consistent`
- `thm-na-upwind-hjb-grid-step-monotone-stable-consistent`
- `thm-na-diagonal-diffusion-scheme-half-relaxed-limits`
- `thm-na-first-order-hjb-scheme-convergence`
- `cor-na-diagonal-diffusion-scheme-converges-under-comparison`

B page `monotone-hjb-schemes-and-policy-iteration-examples`:

- `cex-na-centered-hjb-update-is-not-monotone`
- `ex-na-discounted-control-switching-policy-iteration`
- `ex-na-diagonal-diffusion-manufactured-solution`
- `ex-na-compact-control-quantization-hamiltonian-error`
- `ex-na-eikonal-kink-monotone-hjb-updates`
