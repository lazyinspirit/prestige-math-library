# frontier-32 — reader report, batch 14

## Scope opened

Read the current batch manifest
`research/frontier-32-batch-14.pages.json`, its proof contract and coverage
record, the PDE-3 design section in `research/plan-pde-track.md`, the matching
current `research/plan-spec.json` records, and both draft page shells:

- A: `library/pde/harmonic-functions-and-mean-values-in-rn.md`.
- B: `library/pde/harmonic-functions-and-mean-values-in-rn-examples.md`.

Read every assigned item: the sixteen A items
`def-distributional-harmonicity-and-poisson-equation-in-rn`,
`def-spherical-averages-and-local-ball-means-in-rn`,
`lem-sphere-and-ball-measures-scale`,
`lem-radial-derivative-of-a-spherical-average`,
`thm-spherical-mean-value-property-for-harmonic-functions`,
`cor-ball-mean-value-property-for-harmonic-functions`,
`def-radial-mollifier-family-in-rn`,
`lem-radial-mollification-fixes-local-mean-value-functions`,
`thm-continuous-mean-value-functions-are-harmonic`,
`cor-local-mean-value-property-is-enough`,
`lem-distributional-laplacian-commutes-with-mollification`,
`thm-weyl-lemma-for-the-laplacian`,
`cor-locally-integrable-weakly-harmonic-functions-are-smooth`,
`lem-derivatives-of-harmonic-functions-are-harmonic`,
`thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic`, and
`rem-plane-harmonic-theory-is-owned-by-complex-analysis`; and the six B items
`ex-affine-and-harmonic-polynomial-functions`,
`ex-real-and-imaginary-parts-of-holomorphic-monomials`,
`ex-radial-harmonic-functions-away-from-the-origin`,
`cex-harmonic-on-a-punctured-domain-need-not-extend`,
`cex-one-centred-ball-mean-identity-does-not-force-harmonicity`, and
`ex-distributional-harmonicity-removes-an-apparent-corner`.

Opened the direct published dependencies needed to check those arguments:
`def-laplacian-of-a-c2-function`,
`def-ball-average-operator-on-r-n`,
`def-polar-surface-measure-on-the-unit-sphere`,
`thm-polar-coordinates-formula-for-lebesgue-measure`,
`def-mollifier-family-generated-by-a-unit-mass-smooth-bump`,
`cor-second-order-taylor-expansion-with-the-hessian`,
`thm-complex-polynomials-and-rational-functions-are-holomorphic`, and
`thm-c2-holomorphic-components-are-harmonic`.

Read the current coverage evidence as supporting, not replacing, this audit:
John K. Hunter, *Notes on Partial Differential Equations*,
https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf, §§1.6, 1.9, 2.1 and
3.3–3.4 (the exact printed/PDF locators are recorded in
`research/frontier-32-batch-14.coverage.json`); and Armin Schikorra, *Partial
Differential Equations*, https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf,
§§I.2, I.2.2 and I.2.4 at the coverage record's printed/PDF locators.

## Review and repair

The polar normalization, radial derivative identity, ball-moment coefficient
$r^2\Delta u/(2(n+2))$, the radial singular families, and the one-centred
quartic computation check out, including $n=1$, $n=2$, and $n\ge3$ cases as
applicable. The Weyl argument has the needed nested-domain double-convolution
route; the short support and associativity steps are immediately closable from
the stated compact support margins.

Repaired A item
`lem-distributional-laplacian-commutes-with-mollification`: its statement and
proof used $\Omega_\varepsilon$ without defining it. The statement now sets
$\Omega_\varepsilon=\{x\in\Omega:B_\varepsilon(x)\Subset\Omega\}$.
Updated that item's proof-contract boundary evidence accordingly. There was no
stale `verification.judge` record to remove.

The B item `ex-distributional-harmonicity-removes-an-apparent-corner` retains
one uneditable, nonfatal wording defect, recorded in
`research/frontier-32-reader-findings-14.json`: Weyl supplies a smooth
representative, not pointwise smoothness of every locally integrable
representative. The computed distributional Laplacian of $|x_1|$ itself is
correct.

## Page verdicts

- A page: pass after the local-domain notation repair; no remaining reader
  finding.
- B page: mathematical examples and calculations otherwise pass, with one
  nonfatal uneditable overstatement in the distributional-corner example.

## Checks and blocker

- Reflow: unchanged for the repaired item.
- Focused precheck: pass for the repaired item.
- Assigned-item precheck: 18 proof-bearing items checked, 0 failing.
- Batch proof contract: strict pass, 18/18, 0 errors and 0 warnings.
- Batch manifest dependencies: 22 items, 0 normalized, 0 errors.
- Scoped whitespace check: clean.

`node tools/content-policy.mjs --manifest-only
research/frontier-32-batch-14.pages.json` reports 22
`batch-item-already-exists` errors. This is a lifecycle-state blocker, not a
batch-content defect: current `.autopilot` status is `frontier-23`, while the
frontier-32 items already exist as untracked drafts, so the policy tool treats
the supplied frontier-32 manifest as a future minting request.
