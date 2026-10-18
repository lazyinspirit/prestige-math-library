# Direct complex expectation route: rigorous partial coverage

Research only. This note neither supplies a complete proof of the approved all-parameter theorem nor authorizes canonical changes.

Let `l=k+p`, let `Omega_1` be `k x l` normalized complex Gaussian, and let `Omega_2` be its independent lower block. Write `s=sigma_(k+1)` and `F=(sum_(j>k) sigma_j^2)^(1/2)`. The deterministic rangefinder estimate gives

`R <= (s^2 + ||Sigma_2 Omega_2 Omega_1^dagger||_op^2)^(1/2)`.

For a fixed matrix `T`, direct entrywise covariance gives

`E ||Sigma_2 Omega_2 T||_F^2 = ||Sigma_2||_F^2 ||T||_F^2`.

Indeed, writing `D=Sigma_2^* Sigma_2`, the left side is the trace of `T^* E(Omega_2^* D Omega_2) T`, and the expectation in parentheses is `tr(D) I_l`. By independence and the established complex inverse-Wishart Frobenius identity,

`E ||Sigma_2 Omega_2 Omega_1^dagger||_F^2 = (k/p) F^2`.

Operator norm bounded by Frobenius norm and concavity of square root therefore prove, without any complex product comparison,

`E R <= (s^2 + (k/p) F^2)^(1/2) <= s + sqrt(k/p) F`.

Consequently this proves the exact approved bound whenever

`k p <= e^2 (k+p)`,

because that condition is precisely `sqrt(k/p) <= e sqrt(k+p)/p`, and the approved coefficient of `s` is at least one. In particular all integer `2 <= p <= 7` are covered, for every `k >= 2`.

This is partial parameter coverage, not a replacement theorem. For `k p > e^2(k+p)`, it does not prove the required result for arbitrary tail rank: with `r=F^2/s^2` arbitrarily large, the coefficient of `sqrt(r)` in the square-root estimate exceeds the approved tail coefficient. The additional approved term `sqrt(k/(p-1)) s` cannot absorb that difference uniformly in `r`.

The unconditional matrix-t representation `Omega_2 Omega_1^dagger =_d G W^(-1/2)` (independent normalized complex `G` and complex Wishart `W=Omega_1 Omega_1^*`) does not alone close the gap. Conditioning on `W` returns exactly the weighted complex Gaussian product obligation; replacing `W^(-1/2)` by its operator norm loses the needed Frobenius contribution in the leading coefficient. Neither step should be reported as an independent proof.

No complete direct complex random-subspace/Wishart proof was obtained in this scoped investigation. This is an unresolved local proof obligation, not a claim that the mathematical statement is an open problem.

## Targeted continuation: matrix-t transpose duality

There is an exact useful symmetry when the lower block has `m` rows. Put `X=Omega_2 Omega_1^dagger`, so `X` is `m x k`. Conditional on `W=Omega_1 Omega_1^*`, `X` has the same distribution as `G W^(-1/2)`, where `G` is independent normalized complex Gaussian of size `m x k`, and `W` is complex Wishart of dimension `k` with `k+p` degrees of freedom.

The density of `X` with respect to complex Lebesgue measure is proportional to

`det(I_k+X^*X)^(-(k+p+m))`.

To verify this, multiply the Wishart density `exp(-tr W) det(W)^p` by the conditional Gaussian density `det(W)^m exp(-tr W X^*X)`, and integrate over positive Hermitian `W`. The complex Hermitian change of variables `W=B^(-1/2) V B^(-1/2)`, with `B=I_k+X^*X`, has Jacobian `det(B)^(-k)`, and contributes total power `-(p+m+k)`.

Using `det(I_k+X^*X)=det(I_m+XX^*)`, the adjoint `X^*` consequently has the matrix-t distribution obtained from a normalized complex Gaussian `k x m` matrix and an independent complex Wishart matrix of dimension `m` with `m+p` degrees of freedom. Thus the distribution swaps `m` and `k` while preserving `p`.

This can help when actual tail rank `m` is small relative to `p`. It does not itself yield an effective-rank weighted bound: multiplication by `Sigma_2` changes the relevant inverse-Wishart factor to `Sigma_2 W_m^(-1/2)`, whose spectral norm is precisely the remaining weighted inverse-covariance question. Replacing this by `||Sigma_2||op ||W_m^(-1/2)||op` depends on actual tail rank, and can fail to capture arbitrarily many tiny singular values with bounded `||Sigma_2||F/||Sigma_2||op`.

No real-versus-complex operator-norm comparison with constant `pi/(2 sqrt(2))` or `4/pi` was proved here. The first number is the exact ratio of scalar complex and real Gaussian mean absolute values, but the scalar calculation does not establish the matrix comparison.

Finally, a uniform comparison constant `c>1` multiplying both terms of the product estimate cannot automatically be absorbed by replacing the inverse Frobenius second-moment estimate with its mean. In the regime of large dimensions with fixed aspect ratio `k/(k+p)=gamma`, the inverse Frobenius norm concentrates at `sqrt(k/p)`; taking `gamma` subsequently near one leaves no fixed multiplicative saving. Likewise, the standard smallest-singular-value edge predicts the inverse spectral mean on scale `sqrt(k+p)/p` with coefficient `1+sqrt(gamma)`, tending to two as `gamma` approaches one. Thus the crude `sqrt(2)` product coefficient would require a uniform inverse coefficient at most `e/sqrt(2)<2`, which is incompatible with that edge regime. These asymptotic observations diagnose why the proposed absorption cannot be a uniform proof; they are not being used as suppliers for any canonical result.
