# Weighted covariance route: initial source audit (superseded by explicit proof)

**Same-round update:** The gap described below was subsequently resolved for the sufficient one-sided largest-eigenvalue bound. See `explicit-one-sided-covariance-proof.md`, proving constants C1=5/2+sqrt(2) and C2=3/2 using only real Gaussian comparison plus a real/imaginary decomposition. The following audit records the earlier unsuccessful direct-source route; its conclusion is not the final state of this helper.

The desired statement is

E ||S(G M G* - tr(M) I)S*|| <= C1 ||M||F ||S||op ||S||F + C2 ||M||op ||S||F^2,

for normalized circular complex iid G, fixed M>=0, and arbitrary fixed S. No complete proof with the requested explicit constants was obtained in this helper round. No canonical content was edited.

## Authoritative full-text source actually retrieved and inspected

Vladimir Koltchinskii and Karim Lounici, *Concentration Inequalities and Moment Bounds for Sample Covariance Operators*, arXiv:1405.2468v3 (2014), https://arxiv.org/pdf/1405.2468. PDF and complete extracted text are adjacent. The complete expectation upper-bound proof is Theorem 4, pp. 7--8; the full theorem's proof ends on p. 11. The concentration proof is on pp. 12--22.

Theorem 4 gives E||hatSigma-Sigma|| <= C ||Sigma|| max(sqrt(r(Sigma)/n),r(Sigma)/n), with an unspecified universal constant C. Its actual upper proof applies Theorem 3 (Mendelson's quadratic empirical-process inequality), replaces its psi norms by L2 norms using unspecified equivalence constants, and applies Theorem 2 (Talagrand's majorizing-measure lower bound) with another unspecified constant. Neither the displayed theorem nor the full proof supplies constants C1 near 5.4 and C2 below 1.85. Theorem 4 assumes iid observations and hence corresponds to M proportional to identity; a general weighted-column extension must also be proved. Theorem 5 and its later proof concentrate around an already known expectation/median and do not repair this expectation-constant gap. The end-of-paper Gordon--Chevet remark concerns an alternative proof of concentration and is attributed to a personal communication, not a supplied explicit-constant weighted expectation proof.

Thus this source certifies the correct order in the iid case, but citing its theorem does not certify the coefficient-sensitive weighted supplier sought here.

## Exact valid complex-to-real reduction, with an explicit loss

By deterministic left/right unitary invariance and singular-value reduction, take S=D diagonal nonnegative and M diagonal nonnegative. Set G=(X+iY)/sqrt(2), where X,Y are independent iid standard real matrices. Define B=[DX;DY] and J=[0,-I;I,0]. If R denotes realification of a Hermitian matrix, direct block multiplication gives

R[D(G M G* - tr(M)I)D] = (B M B^T + J B M B^T J^T)/2 - tr(M) diag(D^2,D^2).

Consequently convexity and orthogonal invariance give

E ||D(G M G* - tr(M)I)D|| <= E ||B M B^T - tr(M) diag(D^2,D^2)||.

The identical assertion holds with lambda_max instead of norm. This is a legitimate reduction without any complex phase comparison. However its real covariance has operator parameter ||D|| and Frobenius parameter sqrt(2)||D||F. Even if a real weighted covariance theorem with constants (2,1) were available, this reduction would produce complex constants (2sqrt(2),2). The second constant 2 exceeds the present requested budget. The factor cannot simply be dropped from this reduction.

For M=I, the same identity is a direct valid reduction to a real Gaussian covariance matrix in twice the output dimension. It does not show domination by a real covariance matrix in the original dimension.

## Precise remaining obligation

Provide an explicit-constant weighted complex Gaussian covariance theorem or its complete proof, with the constants and normalization verified; or provide a direct rangefinder proof that bypasses it. A real theorem with doubled effective dimension, an unnamed generic-chaining constant, or an assumed complex real-part Slepian ordering does not meet that obligation. The source audit gives no counterexample to the desired theorem.
