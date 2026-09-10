# Connections: two exact local holds resolved

2026-09-11 Australia/Sydney. Operator scaffold reconciliation only. No new
pair or item is added, no source fetch is attempted, and no published file is
edited. Prior contracts and decisions are retained in the adjacent
`connection-prior-local-holds.json` and `connection-prior-local-decisions.json`
receipts with the `phase-2-next-20-` prefix.

## thm-every-smooth-vector-bundle-admits-a-connection

Assume AC. Every finite-rank smooth real vector bundle over a smooth manifold, with boundary allowed, admits a smooth connection.

Use full AC explicitly for the arbitrary indexed choices in the published subordinate-coordinate-ball/shrinking route and for the choices of local frames and bump data. The published partition argument is used with that stronger assumption, not as a proof of its advertised AC_omega bound. Choose a locally finite smooth partition (rho_i) subordinate to bundle trivializations and the flat derivative nabla^(i) in each chosen frame. For a section s, extend rho_i nabla^(i)s by zero; this is smooth since the support of rho_i lies inside its trivializing open set. The locally finite sum defines a smooth E-valued one-form operator. R-linearity is immediate, and the Leibniz rule is sum_i rho_i (df tensor s+f nabla^(i)s)=df tensor s+f nabla s because sum_i rho_i=1. The weights multiply derivatives and are not differentiated. This proves existence, not canonicity or a minimal choice bound. Results that start with a given connection do not inherit this existence assumption.

## fs-torsion-free-means-curvature-free

For an affine connection put R(X,Y)Z=nabla_X nabla_Y Z-nabla_Y nabla_X Z-nabla_[X,Y] Z; curvature-free here means R=0. The assertion that torsion-free implies curvature-free is false, even for a Levi–Civita connection on the plane.

First supply the local meaning and invariance of R, rather than cite the later DG-21 curvature theory. The displayed commutator uses intrinsic covariant derivatives and the Lie bracket. In R(fX,Y)Z, the -(Yf)nabla_X Z from differentiating f cancels the +(Yf)nabla_X Z from [fX,Y]=f[X,Y]-(Yf)X; hence it equals fR(X,Y)Z. Skew symmetry gives linearity in Y. Expanding the two iterated derivatives on fZ gives second-derivative term (X(Yf)-Y(Xf))Z=[X,Y](f)Z, canceled by the bracket derivative, while the two cross first-derivative terms cancel pairwise. Thus R(X,Y)(fZ)=fR(X,Y)Z. Additivity and real linearity follow from the connection laws. In local smooth frames these identities express R through smooth coefficients and pointwise components of X,Y,Z, so it is an intrinsic smooth tensor and its vanishing is frame-independent. Now take g=exp(2x^2)(dx^2+dy^2) on R^2. Its Levi–Civita coefficients from the preceding formula are Gamma^x_xx=2x, Gamma^x_yy=-2x, Gamma^y_xy=Gamma^y_yx=2x, and the other coefficients are zero. They are symmetric in the lower indices, so torsion vanishes. Since coordinate fields commute, nabla_x nabla_y partial_y=(-2-4x^2)partial_x, whereas nabla_y nabla_x partial_y=-4x^2 partial_x. Consequently R(partial_x,partial_y)partial_y=-2partial_x, in particular nonzero at x=0. No Gauss–Bonnet, holonomy theorem, Bianchi identity or later curvature supplier is used; DG-21 retains the full curvature development.

## Scope and outstanding work

The operator read the current local directional connection laws, torsion
criterion and Christoffel formula, and the complete published Lie-bracket
Leibniz proof. Expanding the connection commutator directly supplies tensoriality;
the displayed Christoffel calculation verifies the counterexample without any
later curvature supplier. The full general curvature theory remains DG-21.

The partition proof’s exact arbitrary-choice debt was already identified in
the original beta’s full supplier read and canonical ledger. The new theorem
now states full AC, so it does not rely on the published proof’s overstated
countable-choice bound. This does not repair that published contract or propagate
AC into the independent Koszul construction from a given metric.

The two item decisions remain escalated because the connection chain still
has source-reading/coverage and remaining proof-review obligations. No byte
receipt has been represented as proof reading. The source attempts and
unread Merry harvest remain unchanged. Step 3 must independently review the
fully authored arguments when the run reaches it.

Validation: single-batch manifest policy reports only two existing cohomology
edges supplied by original batch8. The combined original-plus-Fourier
600-item check reports the twelve known finite-Weyl missing edges and two
Fourier mint collisions because its author had begun creating files before
Step4 plan splicing; neither is caused by these connection edits. No new
connection policy error was reported. Whitespace diff check passes. This
live-snapshot check is not represented as a full engine-gate pass.
