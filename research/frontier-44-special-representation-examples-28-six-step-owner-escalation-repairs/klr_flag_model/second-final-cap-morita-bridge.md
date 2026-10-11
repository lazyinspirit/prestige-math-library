# Second/final construction: cap transport and remaining canonical inverse

This continues the inherited bounded repair pass, without resetting source
or round history. It is research evidence, not full model acceptance.
The physical source change in this pass is only the authorized correction
of the triple-dot sum in Proof 5.1 from -1 to -2. The original Statement
and the single-curl sum -1 are unchanged.

The final typed Definition was read fully, with raw SHA-256
`e373cebfb29a80e9536e72fa83344f81ac1ed6fa10a33e4b58660bdae1be01ae`,
confirmed by its owner. Its corrected literal cancellation sum is -2;
the former same-region vacuum inconsistency in the earlier progress note
is historical and has been resolved by the full fake-bubble dictionary.

## Explicit flag corner maps

Work with universal monic p of degree N over Z and then base change.
Write T_r for its monic r-factor ring, V_r for the first-block polynomial
Artin module over T_r, and H_r=End_(T_r)(V_r). Use the native rank-one
idempotent f_r=partial_(w_r) X_1^(r-1)...X_(r-1), the projection onto the
constant Artin vector. Its image on the r+1 polynomial module is precisely
the polynomials invariant in the first r roots. These form

    B=T_r[z]/b_(N-r)(z)
      =T_(r+1)[z]/c_(r+1)(z).

Thus f_r H_(r+1) f_(r+1) is B as a column, whereas
f_(r+1) H_(r+1) f_r is Hom_(T_(r+1))(B,T_(r+1)). Identify the latter
with B by g -> [v -> tau_new(gv)]. This is an explicit isomorphism:
tau_new is the perfect monic power-basis pairing. It contributes degree
-2dr, which is exactly the basic induction shift in the model.
The canonical matrix-algebra evaluation and coevaluation are consequently
the tau_new cap and its dual-power-basis Casimir. This proves the first
adjunction transport, rather than inferring it from matching dimensions.

## Exact normalization of the second cap

Let I_r:T_r->S be the positive parabolic form: its generic-root expression
is the sum over r-subsets J of

    f(x_J)/product_(a in J,b notin J)(x_a-x_b).

The normalized parabolic divided difference gives a polynomial integral
form with precisely this expression. Its perfection follows from the
two monic Artin pairings as proved in the first progress note. There is
no division by factorials. Generic roots are used here only to compare
two already integral polynomial maps between finite free modules.

For every f in B, the two composed flag forms satisfy

    I_r(tau_old(f)) = (-1)^r I_(r+1)(tau_new(f)).

Here is the coefficientwise comparison. Both sides sum over pairs (J,z)
where J is an r-subset and z is a root outside J. On the left the
denominator is

    product_(a in J,b notin J)(x_a-x_b)
      times product_(b notin J,b!=z)(z-x_b).

On the right the denominator is

    product_(a in J union {z},b notin J union {z})(x_a-x_b)
      times product_(a in J)(z-x_a).

All factors agree except the r factors x_a-z versus z-x_a. Their ratio
is (-1)^r. This proves the equality over the generic fraction field;
freeness and integrality of the defined maps prove the equality over
the universal integral ring and every specialization.

The ordered-residue form in the allocated source has scalar

    t_r = s_r I_r Tr_r,
    s_r=(-1)^[r(N-r)+r(r-1)/2].

Indeed, sum the ordered-root Vandermonde numerator by r-subsets.
The alternating determinant gives Delta_r^2, and the internal factors
of product p'(x_a) give (-1)^[r(r-1)/2] Delta_r^2. Cancelling leaves
exactly the above parabolic denominator. The source's additional
(-1)^[r(N-r)] gives s_r. Both sides are integral polynomial maps, so
this comparison does not assert descent of an undefined rational map.

Let epsilon_r:H_(r+1)->H_r be the bilinear relative form determined by
t_r epsilon_r=t_(r+1), and normalize it by
epsilon_hat_r=(-1)^(N+1)epsilon_r. Under the above corner maps, a
rank-one operator has the form

    R_(f,g):v -> f tau_new(gv),
    Tr_(r+1)(R_(f,g))=tau_new(gf).

The required normalized relative-cap equation on this operator is

    s_r I_r(tau_old(gf))
        =(-1)^(N+1)s_(r+1) I_(r+1)(tau_new(gf)).

It follows from the preceding flag-form identity, because
s_(r+1)/s_r=(-1)^(N-r-1), and thus
(-1)^(N+1)s_(r+1)/s_r=(-1)^r. Testing also after multiplication by
an arbitrary element of T_r and using perfection identifies the
transported cap with tau_old. Matrix units and these rank-one
operators span the corner, so this is an actual cap identification,
not just its value on a dot monomial. The dual unit is its unique
dual-power-basis Casimir; both triangle equations follow by contraction.

With this normalization installed, the relative-cap test from the first
progress note gives the exact integral mixed constant t_ij. It uses
t_r^(pq)(j_r z)=(-1)^(rA)t_ij^r t_r^p(z), perfection, and bilinearity;
the normalized relative cap cancels the remaining (-1)^A. This does
not yet check every typed mixed-mate orientation in the full model.

## Remaining exact inverse obligation

The corrected Definition fixes more than the existence of some rho
inverse. At positive height it prescribes

    rho=(-T,C), sigma=(S,R),
    R_k=sum_(a+j=h-1-k) A_j epsilon' x^a,
    -ST=1, RT=0, SC=0, RC=1, -TS+CR=1.

At negative height it prescribes the corresponding (R^-,C^-) blocks
with the H coefficients. The independently repaired commutator proves
the monomial source-crossing rho with its first-adjunction unit columns
or dotted multiplication rows is an isomorphism. Universal graded
freeness can lift an actual canonical rho and supply a matrix inverse.
An adjugate/power-basis inverse, however, must still be proved equal
to the *specified* opposite second-adjunction mate S and the finite
coefficient-convolution blocks. Neither matching ranks nor the first
adjunction transport proves these five component equations.

That is the smallest remaining same-color bridge. The current source
Proof 4.1 only says to subtract a section and invert a transfer; it
does not construct or identify these fixed inverse components. Proof
5.1 then invokes that unproved inverse to claim the curls/cancellations.
The cap normalization derivation above is useful progress, but is not
a proof of those component equations. No unproved paragraph was
installed as a completed carrier.

## Hold and scoped change

The model realization, PBW normal-form and cap-off consumers remain
held on the actual canonical inverse identification and its typed
curl/mixed-mate checks. The earlier formal typing obstruction has been
resolved, rather than carried forward as a current blocker.

Only the literal correction was installed. Current model raw SHA-256 is
`68533eb078fa6a568f44acc5af6c0ff9d14872419b24bba28a9fd7a15e07db44`.
Exact one-file precheck, rendering and proof-layout all pass; these
mechanical results confer no mathematical acceptance. No new helper
or aggregate proposal is needed for that literal-only change.
