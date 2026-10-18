# Compatible logarithmic parameters for the actual lift and slope bounds

Research synthesis, 2026-10-18. This combines completed estimates, not a proof of a global recurrent state or pressure growth. Distinct symbols below prevent confusion between the side-strip height and the neutral-lift collar budget.

Let L=log N, with N eventually fixed sufficiently large. Use tilt delta, angular aperture a, radial-tooth boundary spacing ell, child-radius ratio rho, strip height epsilon_strip, and exterior-star budget epsilon_Q. One concrete choice is

    delta=L^(-200),     a=L^(-300),
    b0=L^(-16),         sigma=L^(-16),
    ell comparable to b0*a/N,
    rho comparable to sigma*ell,
    epsilon_strip dyadic comparable to L^(-2)*ell,
    epsilon_Q=L^(-24).                                  (1)

The angular aperture a is much smaller than the tilt delta. The fan and every protected reserve hole can therefore lie in the single affine wedge of the logarithmic corner lift: epsilon_strip is much smaller than delta, and the upper fan angle is less than 1/4. The reflected template handles the other inward side; a finite alternating orientation choice is required to preserve global alignment, rather than accumulating the tilt at every generation.

## Lift and slope-reset compatibility

The checked logarithmic corner lift gives

    K_log² <= C[1+log(1/epsilon_strip)] <= C L.

The actual outgoing tangential slope inheritance bound has squared relative factor C delta² K_log²/a when the actual intrinsic boundary-state amplitude is supplied. Under (1),

    delta² log(1/epsilon_strip)/a = O(L^(-99)) -> 0,
    delta² log(1/epsilon_strip) << a << delta.             (2)

This calculation removes the former artificial theta^(-1/2) obstruction. It does NOT supply the missing actual intrinsic-state amplitude.

## Geometric count and available branching scale

For aperture a, consecutive long tooth sides have root distance comparable to a/N. Spacing ell=b0*a/N is smaller than that separation. The number of separated attachments in the middle portions of the O(N) long sides is

    B comparable to N/ell = N²/(b0*a).

The total child-container area is comparable to B rho²= sigma²*b0*a. At a child-root attachment, the entire child-box area divided by its parent fan star is O(sigma*b0)=O(L^(-32)), which is smaller than epsilon_Q. For endpoint stars the child-area ratio is even smaller, O(sigma²*b0). Remaining exterior-star area can be reduced to the requested epsilon_Q budget by the explicitly described finite collars; no ancestor area is included.

In two dimensions the formal quarter-order branching weight for a velocity quotient transfer theta is

    B rho^(3/2) theta²
       comparable to sqrt(N) sigma^(3/2) sqrt(b0*a) theta²
       =sqrt(N) L^(-182) theta².                          (3)

Thus every fixed inverse-logarithmic loss in an ACTUAL transfer coefficient is compatible with growth for large N. Equation (3) is parameter bookkeeping, not a proved transfer, observed pressure, or source crossentry.

## Joint neutral lift and guards

With the actual collar construction, the free and inherited velocity columns obey the joint quadratic-form bound with epsilon_Q. The mixed perturbation size in the pressure-only reference norm is O(sqrt(epsilon_Q))=O(L^(-12)); arbitrary inherited pressure forcing remains separate. All collars, macro interfaces and strip patterns are fixed once N is fixed, so the real-parameter boundary strain threshold D_(N,epsilon_Q) is finite and independent of recursion depth. No claim that it is uniform in N is required; its effect on the eventual observation scale must still be retained in the final dynamic argument.

The fine inner-background mesh spacing is O(ell), so the mandatory guard traversal count can be chosen comparable to 1/ell. The old full-mass graph tail gamma^(c/ell) is smaller than every fixed inverse logarithm. This controls the corresponding velocity-only paths under their actual hypotheses; it must not be promoted to a scalar-pressure Schur decay theorem.

More generally take delta=L^(-D), a=L^(-A) with D<A<2D-1, and fixed inverse-logarithmic b0,sigma,epsilon_Q satisfying the child-area budgets. Then (2) holds and the exponent of the slope-reset gain can be made arbitrarily large while (3) still eventually grows. This can absorb any PROVED fixed logarithmic loss. It cannot absorb an unproved state bound or the actual N² weak direction of the shared normal center equations.

The stronger illustrative tilt choice also gives delta << sigma²*b0, since L^(-200) << L^(-48). Thus the additional proposed aggregate-reset cancellation scale is not in conflict with (1)–(3). This comparison does not assert the as-yet-unproved propagation inequality.

## Precise unresolved interface

One must still establish a complete recurrent or summed-energy estimate for the actual intrinsic boundary state, including inherited pressure loads and endpoint/root rows, and then prove a true strain-resolvent source-to-pressure observation. Mass fractional growth alone is insufficient. The fixed smooth solenoidal source, bounded L² divergence observation, and nonlinear/BE realization criterion remain unchanged.
