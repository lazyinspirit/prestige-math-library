# Bounded-vector KMT: Gaussian anchors and nonsmooth removal

Research authoring note, 2026-10-15. This is a complete smoothing/removal interface proof, conditional on the separately authored smooth conditional-density/quantile lemma and stopped dyadic assembly. It does not cite the multivariate KMT theorem or assert conditional regularity of raw atomic laws.

## 1. Gaussian anchors give the required smooth coarse distributions

Let `X` be centered in `R^d`, `d≤2`, with covariance `I` and `|X|≤B`, `B≥1`. Let `G~N(0,I)`. A mixed row has independent entries, each distributed either as `X` or as `G`. In a replacement round put raw variables in its even slots and Gaussian variables in its odd slots. Thus every aligned dyadic halfblock of size at least two has exactly half Gaussian slots.

All such mixed sums satisfy the analytic cumulant condition `A_d(τ)` with `τ=C_*B`: the bounded raw laws have that condition by the separate bounded-cumulant lemma, Gaussian laws have zero third derivatives of their log mgf, and log mgfs add under convolution. Linear coordinate projections and the sum/difference map have uniformly bounded operator norms in dimension at most four; enlarge `C_*` once. Covariances are exactly the scalar block size times the identity (or half that scalar under normalized sum/difference conventions).

Their Bernstein bound is uniform:

`P(|Σ_{i=1}^s Z_i|>C_d(√(s t)+Bt))≤2d e^{-t}`, `t≥1`.  (B)

For completeness, for each raw coordinate `EZ_j=0`, `EZ_j²=1`, and `E|Z_j|^k≤B^{k-2}` for `k≥2`, so exponential-series expansion gives `log E exp(hZ_j)≤h²/[2(1-B|h|)]` for `B|h|<1`. Gaussian coordinates have log mgf `h²/2`, which satisfies the same inequality. Multiply these bounds, optimize Chernoff with `h=u/(s+Bu)`, and union bound coordinates and signs to obtain (B). Bounded anchors are therefore unnecessary.

Now take a mixed block of size `s` with at least `s/4` Gaussian slots. Tilt its law by any real vector `h` in the cumulant domain. Exponential tilting preserves independence; it changes `N(0,I)` into `N(h,I)`, whose characteristic modulus is exactly `exp(-|t|²/2)`. Every other tilted characteristic factor has modulus at most one. Hence

`|Fhat_h(t)|≤exp(-s|t|²/8)`.

For a full bridge vector `(L+R,L-R)` whose two halves each have at least `s/8` Gaussian entries, the Gaussian factors give

`|Fhat_h(t,u)|≤exp[-s(|t+u|²+|t-u|²)/16]=exp[-s(|t|²+|u|²)/8]`.

This bound is independent of the tilt. It also holds for every coordinate prefix or marginal, because its characteristic function is obtained by setting omitted dual coordinates to zero. In each dimension `j≤4`, after absorbing fixed normalization constants,

`∫_{|t|≥c_1/B}|t|^k|Fhat_h(t)|dt ≤ C_k s^{-(j+k)/2}exp(-c_2s/B²)`, `k=0,1`, `s≥CB²`.  (F)

To prove (F), scale `v=√s t` and integrate the Gaussian tail in polar coordinates. Its fixed-degree polynomial factor is absorbed by decreasing the positive exponential constant. This proves full smoothness, all tilted Fourier-tail estimates, and their first weighted versions directly; no regularity of `X` is needed.

In the exact source notation put `D=sI_j`, `σ²=s`, `τ=C_*B`, and `T={4τj|t|≥1}`. For sufficiently large fixed cutoff constant in `s≥Cτ²`, (F) gives

`(2π)^(-j)∫_T|Fhat_h(t)|dt ≤ τ²j²/[s(2π)^{j/2}sqrt(det D)]`,

and, for every vector `v`,

`(2π)^(-j)∫_T|<t,v>Fhat_h(t)|dt ≤ sqrt(v^TD^(-1)v)/[4(2π)^{j/2}sqrt(det D)]`.

Indeed `exp(-cx)≤C/x` for the first inequality, and `|<t,v>|≤|t||v|` together with an arbitrarily small fixed exponential tail for the second. These are precisely the `A_d^*(τ,4,4)` tail requirements supplied by the quantile author, uniformly over all roots, sum/difference pairs, prefixes, and real tilts `|h|τ<1`. Taking block size `s≥C_A B²log(eN)` supplies all the margins needed by a union bound.

## 2. One replacement round

Suppose an iid Gaussian row of length `m` already exists. Specify an independent mixed row with even entries of raw law `X` and odd entries Gaussian. Above dyadic stopping size `m_0≈C_AB²L`, with `L=log(eN)` for the original full horizon, every bridge half has enough Gaussian anchors. Section 1 verifies every smooth hypothesis of the ordinary single-law conditional-quantile lemma. Couple the mixed row directly to an iid Gaussian row by the stopped dyadic construction. The existing Gaussian row can be used as that row: disintegrate the coupling conditional on its Gaussian marginal, and sample using fresh randomness.

Only coarse root/bridge conditional quantiles are used. The Gaussian bridge is independent of the Gaussian parent and has independent coordinates; its conditional quantile therefore ignores the discrepancy between the two parent values. There is no need for a matched-third-moment two-law conditional comparison. The local quantile bound in terms of the actual mixed parent/split values, followed by the dyadic author's Bernstein union bound, gives a total coarse error `C_ABL²` with failure probability at most `N^{-A-3}`.

At the stopping blocks, reconstruct entries by their product-law regular conditional distribution given the block sums. These kernels exist on Euclidean spaces, and recover the prescribed independent mixed row. No quantile estimate is used at raw leaves. Unconditionally, both the mixed and Gaussian marginal rows satisfy (B), so all their within-block residual partial sums are at most

`C_A(√(m_0 L)+BL)≤C_ABL`

with the same failure budget. Conditional Bernstein bounds are unnecessary: the union bound is under the recovered product marginal law. Thus the whole round has prefix error at most `C_ABL²` except on probability `N^{-A-3}`.

If the active row has length `m<C_AB²L`, replace its entire Gaussian row by an independent raw row. Applying (B) to the raw and Gaussian row marginal partial sums bounds the discrepancy by `C_A(√(mL)+BL)≤C_ABL`, with failure at most `N^{-A-3}`. This handles all terminal short rows and arbitrarily large `B`.

## 3. Recursive removal and independence

Start with an iid Gaussian row of dyadic length `n≤2N`. In the first round replace its even slots by raw variables, retain the Gaussian odd slots, and freeze the even slots. The output mixed marginal is a product law, so the retained Gaussian row is independent of every frozen raw variable. Apply the same coupling kernel to that retained Gaussian subsequence, using fresh randomness independent of the frozen variables. Continue. Its output product marginal preserves independence within the new row and from previously frozen variables. After at most `ceil(log_2n)` rounds, or earlier when the terminal criterion above applies, every slot has raw law and the entire row is independent.

For each prefix of the original row, the slots involved in one round form a prefix of the active subsequence. Its change is therefore bounded by that round's maximal partial-sum discrepancy. Triangle inequality across at most `log_2n+1` rounds gives

`P(max_{j≤n}|Σ_{i≤j}(X_i-G_i)|>C_ABlog³(en))≤n^{-A}`.

Use the original horizon in `L` and in every per-round failure budget; late short subsequences do not weaken the probability estimate. Restrict to the first `N` slots. This supplies arbitrary bounded nonsingular laws, including atomic ones, with a fixed logarithmic power and constants linear in `B`.

## Dependency boundary

The Gaussian-anchor smoothing, Bernstein estimate, disintegration/composition, and nonsmooth removal are proved here. The two remaining mathematical suppliers are (i) the local smooth root/bridge conditional-quantile estimate, proved by the density and quantile authors under the Fourier/cumulant conditions verified in Section 1, and (ii) the stopped dyadic assembly in `bayesian-computational-statistics-62-owner-mcmc-clt-kmt-dyadic-proof.md`. This note does not by itself certify those separate proofs.

## Optional source comparison

The 68-page English Zaitsev (1998) PDF `https://www.numdam.org/item/PS_1998__2__41_0.pdf` was visually inspected at PDF pp. 29–31 (printed 69–71: Lemma 6.1, Definition 6.3, Theorem 6.4) and PDF pp. 47–48 (printed 87–88: sparse-anchor schedule). His bounded smooth surrogate is `Y=μX+K`, with `μ=2` of probability `1/8` and otherwise zero, and fixed smooth independent-coordinate `K` of covariance `I/2`; it preserves all moments through order three and is bounded by `4B`. His sparse-anchor comparison uses this matching for sharper logarithmic dependence. Here a fixed extra logarithmic factor is permitted, so Gaussian anchors and half replacement avoid both the surrogate construction and the matched-third-moment comparison. No claim is made that his precise sharp theorem follows from the simplified schedule.
