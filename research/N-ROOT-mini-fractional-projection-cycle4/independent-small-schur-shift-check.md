# Independent check: actual constrained MINI small fractional shift

2026-10-18. Reviewed the complete new proof in `../numerical-analysis-remaining-71-2026-10-17-ROOT-smooth-pressure-graded-cycle4/actual-constrained-mini-small-fractional-shift.md`, together with the finite-dimensional quantitative openness proof in the companion near-two Lp note. This is a supplier-first review of that new block, not a new claim that the original pressure obligation is resolved.

Outcome: the argument is sound subject to its explicitly named standard Sobolev extension/interpolation inputs and the actual full-MINI Hs stability supplier. It proves some uniform positive exponent alpha only. There is no demonstrated alpha>1/8.

Checked substantive points:

* The pressure-space J_h is one fixed projection at both H^(1-t) and H^(1+t) endpoints. Its higher endpoint proof correctly combines cell-average H^t stability, the piecewise-constant fractional inverse estimate, and local affine fractional approximation. All patches have comparable neighboring sizes and bounded overlap; a global mesh ratio is not inserted.
* Mean adjustment preserves the common retraction and is bounded at both endpoints. Interpolation of this common retraction gives the actual compatible finite-dimensional pressure scale, with uniform equivalence constants.
* The negative-order extension of R_h is the L2-adjoint extension and agrees with the original finite-dimensional moment formula. The Schur endpoint pairing is the original L2 form for discrete pressure gradients, not a replacement form.
* Specifically, differentiation H^(1-t)(D)->(H^t(D))* for 0<t<1/2 follows by choosing a bounded H^(1-t) extension, differentiating on Euclidean space, and testing against bounded zero extension of H^t(D). Below t=1/2, zero extension is bounded and H^t_0(D)=H^t(D), so this gives the actual interior derivative. For the discrete q_h, that derivative is its usual piecewise constant L2 gradient. No boundary delta is inserted.
* Bubble coercivity gives the midpoint inverse with constants independent of the mesh. The reused openness proof uses only strip evaluation/quotient estimates and uniform endpoint/intermediate constants; the finite dimension enters only through equal-dimension injectivity implying surjectivity. Its resulting width is uniform but need not be large.
* The actual mass-Schur representation then yields physical H^t stability of P_Zh on a small interval. The already-proved actual common Z_h retraction supplies the intrinsic A_h scale comparison. The final dual estimate tests all of V_h and does not replace it by Z_h.

Two small presentation clarifications were sent directly to the owner: explicitly choose eta<t0, so every full-projector bound used in the conclusion lies in its proved interval; and include the extension/zero-extension justification above for the negative gradient pairing. Neither changes the theorem's substantive scope.

Remaining obligation: this block does not prove alpha>1/8, a special-defect beta with alpha+beta>1/4, an actual boundary pressure observation theorem, or the full nonlinear instantaneous pressure rate. No canonical content, hashes, runtime controls, tests or gates were changed.
