# Final adjudication — position 17

Disposition repaired; source status familiar.

Inspected the entire example, dependencies, continuous-calculus A/B context,
batch-5 manifest and coverage, contract/risk, Alpha repair and both rejections.
Terra correctly identifies the unsupported clause of A3: the spectrum and
self-adjoint definitions do not supply real-valued functional calculus. Removed
that clause; A3 now uses the defining adjoint pairing, with its exact supplier.
The multiplier pairing explicitly proves self-adjointness in step 1.1.

For z outside [0,1], bounded reciprocal multiplication is a two-sided inverse
(both identities are now written). For interior z choose delta<=min(z,1-z), and
for endpoints use one-sided tents with delta<=1. The integrals of tent squared
and distance squared times tent squared are respectively delta/3,delta^3/30 on
one side and twice these for symmetric tents; division gives delta^2/10 in both
cases. Thus normalized vectors contradict any bounded inverse. Endpoints are
null, with the box supplier licensing the passage from closed-interval Riemann
integrals to L2(0,1). Added the continuous Riemann integrability hypothesis to the
Riemann/Lebesgue bridge's use.

The calculus identification now follows directly from polynomial approximation:
polynomial calculus equals polynomial multiplication, both maps have the stated
uniform norm bound, and approximation gives error at most twice the uniform
polynomial error. This avoids inferring closed range without a completeness
supplier. Isometry and range equality then follow from the already supplied
calculus theorem. The polynomial algebra is unital, self-adjoint on the real
interval and separates points; compactness and Hausdorffness are explicitly
sourced. All hypotheses, including nonzero H and AC, hold.

The computations and uniform-approximation argument are familiar and were
checked directly; no external verification needed. Updated only this item and
its manifest/contract/risk and owning batch dependency records; refreshed ledger.
Focused precheck PASS, strict contract 0 errors/0 warnings, rendercheck PASS.
An execution bug found during the contract check was corrected in this item;
the same bug's earlier affected receipts are being resealed with explicit
correction evidence. No new judgment or supplier edit. Next: ensure earlier
receipts current, record, then position 18.
