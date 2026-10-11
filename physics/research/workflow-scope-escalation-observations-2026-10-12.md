# Preserve consumer observations in escalating scope reviews

The CM/QM/GR run's genuine initial Batch 11 review escalated typed measurement,
calibration and covariance obligations and reported seven actual consumer
observations. The collector previously required its consumer list to equal the
preceding native repair's list, which is empty on an initial review. That would
reject the complete escalating report instead of recording its owner hold.

The physics collector now permits additional known consumers only for a
nonaccepting (`escalate` or `repair`) decision. Every required consumer remains mandatory, IDs must be
unique, and additional observations must name carriers from the review's actual
before inventory. Acceptance retains the exact-list requirement. The original
report is retained unchanged; this records a hold, not review acceptance, and
does not refund a review or repair round.

Batch 35's subsequent genuine local-repair request also contained known
consumer observations about the previously corrected generator sign. These are
retained with its repair request and do not grant acceptance or waive the five
newly reported defects.

Validation: all 22 tests in
`tools/physics-autopilot/test/construction-scope-workflow.test.mts` passed,
including new cases for preserving a genuine escalation and local repair request, refusing unknown or
duplicate consumers, and refusing extra acceptance coverage. Scoped diff checks
passed. Activation requires a drained controller restart; live review reports
and counters remain unchanged.
