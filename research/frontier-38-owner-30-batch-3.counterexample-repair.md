# Heat endpoint counterexample repair

Target: `cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm`.
Run `frontier-38-owner-30`, batch3. The same heat scope reviewer owns this repair.
The heat author was terminal before any edit: dispatch receipt ended
2026-10-02T19:47:38.519Z, `process_exit_code:0`, `exit_code:0`, `task_complete`;
state ended likewise and no heat author process remained. Other workers were
not touched. The original author escalation JSON remains historical evidence.

## Mathematical finding and complete repair

The scaffold incorrectly placed `1_[0,infinity)` in every finite Lp. Its
p-th power integral is infinite for every finite p. The author correctly
separated that bounded-only witness from the interval datum `1_[0,1)` but
left the false manifest statement and an owner escalation. The author proof
also relied on one point to discuss the supremum endpoint. A one-point value
does not establish an essential supremum norm bound.

The repair preserves the half-line's exact value `H_tf(0)=1/2`, the failure
of supremum convergence, the finite-p contrast, locally uniform failure at
the jump and the uniform-continuity qualification. It proves these with sound
separate witnesses:

- Half-line: evenness and unit mass give `1/2`. For each `eta<1/2`, continuity
  of `H_tf` gives a positive-length interval to the right of0 on which the
  error exceeds eta. Thus the essential supremum error is at least1/2.
- Interval: `int |f0|^p=1`, so f0 is in every finite Lp and in L-infinity.
  Strict positivity of the Gaussian tail gives `H_tf0(0)<1/2`; write
  `d=1-H_tf0(0)>1/2`, and choose `c=(d+1/2)/2`. Continuity gives an interval
  `(0,delta)` with delta<1 on which the error exceeds c. Its positive measure
  proves essential supremum error at least c>1/2, not just a one-point error.
  The finite-p convergence theorem applies to this datum only.
- Each compact set containing0 has pointwise supremum error at least the
  error at0, so locally uniform convergence fails even if that compact set
  itself has measure zero. This conclusion concerns pointwise uniformity.
- For bounded real data in dimension1, the spatial derivative estimate at
  p=q=infinity makes each positive-time profile globally Lipschitz via the
  scalar mean value theorem. The essential derivative bound is pointwise
  because its derivative is continuous. Actual supremum convergence forces
  the datum to be uniformly continuous by the uniform-limit theorem.
  Essential supremum convergence instead yields a uniformly continuous
  representative of the class: profile differences are continuous, so their
  essential and actual supremum norms agree; they form a uniformly Cauchy
  sequence. Real completeness gives pointwise limits, the Cauchy estimate
  gives uniform convergence, and the norm triangle inequality identifies
  that limit with the datum almost everywhere. This distinction is explicit.

These arguments are fully present in the repaired five-step item proof.
Countable Choice is retained from the measure/convolution/finite-p suppliers;
no extra arbitrary Choice is needed. The scalar completeness supplier is
choice-free. The t=0 kernel is never evaluated.

## Exact supplier and consumer evidence

The target's existing eight dependencies remain. Four actual uses are now
explicit: `thm-spatial-derivative-estimates-for-heat-flow` (n=1,p=q=infinity),
`cor-mean-value-theorem`, `cor-uniform-limit-uniformly-continuous`, and
`thm-reals-cauchy-complete`. The latter three are published, with their exact
statements read; the spatial derivative supplier is the stable authored A item,
whose interface and proof supply positive-time smoothness and the bounded
first derivative. Its explicit profile formula and Young scaling route match
this use. The target level becomes5; local dependency levels have no errors.

Direct consumers were mapped from actual `deps` and `justified_by` declarations
in every item frontmatter and all current run manifests: **none**. The only
page placement is this pair's B page. The statement change therefore opens no
outside item repair or active consumer lane. No published/global ledger edit.

Source backing: the freshly fetched Hunter full242-page PDF recorded in
`batch-3.scope-repair.md` has SHA256
`0dbade1806f7a1ea79cc444a0eecfe19e157b286c964f1f48f2d744c460c12dd`.
Its Theorem5.5, printed p131, explicitly restricts Lp initial convergence to
1≤p<infinity. The Gaussian formula and unit mass supply the local calculations.
MIT's locator is corrected to Definition1.0.1/Lemma1.0.2, pp1–3, for formula
and mass; no source is claimed to contain the exact two-witness computation.
Teschl's original verified full-text record is retained as a continuity cross-check.
No new full-text retrieval or unseen-source reading is invented in this repair.

## Stable artifacts and checks

Changed only the target item; its batch3 manifest statement, strategy, deps,
level and MIT locator; its contract entry; its two coverage dispositions'
explanations; its readiness record; and batch3 repair notes/evidence. Other
item claims and contract entries are mathematically unchanged. The manifest
statement now matches the complete `Statement refuted` section exactly.
The four supplier fact quotes and five derivations were regenerated from
current bytes; target boundary evidence was repaired and anchored to steps.

Actual current checks: explicit target proof-layout1item5steps0defects;
precheckPASS; rendercheckOK; target strict proof-contract0errors0warnings;
target content-policy0errors0warnings; manifest-deps28items0errors;
coverage-checklist2pages64rows0errors0warnings; local dependency levels0errors.
Initial precheck requested a dependency-order canonical form and contract
checker requested step-anchored boundary evidence; both were adopted before
these final passes. No whole-pair proof audit or engine gate success is claimed.

Current hashes and exact deps are in `batch-3.counterexample-repair.json`:
this binds the item raw bytes, transitive item input, current scope and the
prior false scaffold row. The target Step1 readiness record is current.
Parent must integrate the corrected scope, record current owner proceed and
resolve the historical item escalation against stable current hashes. Any
run-wide pre-gate recertification belongs to the supervisor. No owner scope or
item decision was written here. Recommend accepting the corrected target after
that integration: the defect and essential supremum proof gap are repaired.
