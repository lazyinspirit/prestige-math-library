# Heat pair scope repair — batch 3

Run `frontier-38-owner-30`; reviewer/repairer assigned by the supervisor.
This is a scaffold proof-readiness review, not approval of authored items,
independent final proof certification, an owner decision, or an engine receipt.
No item files were written. All original 20 statement strings are preserved.

## Inventory and authority

The authoritative additive overlay is `research/plan-pde-track.md` §12.4,
PDE-7 additions, lines3474–3485. All eight exact IDs were absent. Preserve the
14 A/6 B base inventory and add six A/two B rows: **20 A/8 B**, below100/page.
Standing owner direction permits preserving commissioned claims and constructing
necessary local prerequisites. The supervisor owns plan integration and scope
proceed; the original insufficient scope JSON remains intact as historical evidence.

| Exact addition | Dependencies and proof use | Size |
|---|---|---|
| `lem-first-and-second-moments-of-the-heat-kernel` | normalisation; Tonelli; oddness via reflection; integration by parts; Gaussian boundary decay | small |
| `lem-gaussian-kernels-form-an-approximate-identity` | normalisation; change of variables; dominated convergence; published approximate-identity definition | small |
| `lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time` | normalisation derivative bounds; differentiation-under-integral theorem; Hölder; mixed partials; Gaussian majorants | substantive prerequisite exposition |
| `thm-uniqueness-of-lp-mild-heat-solutions-in-the-convolution-class` | finite-p Cauchy theorem with contraction/semigroup/initial limit | small |
| `lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data` | joint differentiation; scalar integration by parts and Fubini; finite-p approximate identity; scalar Newton–Leibniz; Minkowski; Tonelli | moderate |
| `thm-positive-time-spatial-analyticity-of-heat-kernel-solutions` | joint differentiation; published exponential series, multi-indexed power series, analytic-germ definition and power-series differentiation; Hölder; Tonelli; Gaussian integrability | substantial proof, completed locally below |
| `ex-heat-evolution-of-affine-and-quadratic-polynomials` | moments and normalisation; translation/reflection of integral | small |
| `ex-heat-lp-to-lq-time-exponent-is-forced-by-parabolic-scaling` | scaling; heat-evolution definition; Lp→Lq bound; change of variables | small |

Source provenance is `ai-altered` for the local exact claims/proofs, with
verified literature references to the underlying Gaussian result. No citation
claims to be a source proof of all the refined interfaces. Local examples
remain source-backed planned rows, rather than newly generated supplier claims.

## Complete local analyticity argument

Fix `n≥1`, `t>0`, `1≤p≤∞`, `f∈Lp`, and a real centre `a`. Countable Choice
is retained from the measure-theoretic suppliers. Let `p'` be the Hölder dual,
including the endpoint conventions, and put `w=a-y`. The Gaussian identity is

$$\Gamma(w+h,t)=\Gamma(w,t)\prod_{i=1}^n\exp(-w_ih_i/(2t))\exp(-h_i^2/(4t)).$$

Initially take real `h`. Expand each exponential by its published absolutely
convergent series. For a multi-index `α`, the coefficient of `h^α` is the finite
sum

$$b_\alpha(w)=\Gamma(w,t)\prod_{i=1}^n\left(\sum_{m_i+2\ell_i=\alpha_i}\frac{(-w_i/(2t))^{m_i}}{m_i!}\frac{(-1/(4t))^{\ell_i}}{\ell_i!}\right).$$

Absolute convergence permits the finite products and regrouping. For every
`r>0`, summing the absolute coefficients weighted by `r^{|α|}` is bounded by

$$B_r(w):=\Gamma(w,t)\exp\left(\frac r{2t}\sum_i|w_i|+\frac{nr^2}{4t}\right).$$

Indeed, before regrouping the nonnegative product series sums exactly to this
majorant. It belongs to every `L^{p'}`, including `L1` and `L∞`: use
`r Σ|w_i|≤r√n|w|` and complete the square, or absorb the linear term into
`|w|²/(8t)` and a finite constant. Hence Hölder bounds
`∫ B_r(a-y)|f(y)|dy≤||B_r||p' ||f||p`, uniformly in `a` by translation
invariance. Tonelli applied to the absolute coefficient series now gives

$$\sum_\alpha r^{|\alpha|}\int|b_\alpha(a-y)f(y)|\,dy\le\|B_r\|_{p'}\|f\|_p.$$

Every coefficient is integrable; define `c_α(a)=∫b_α(a-y)f(y)dy`. The preceding
summable bound permits termwise integration, gives absolute/uniform convergence
on the real closed box `|h_i|≤r`, and proves that the sum equals `H_tf(a+h)`.
This uses dominated convergence on partial sums, with the integrable majorant
`B_r(a-y)|f(y)|`; it does not presume analyticity.

The same coefficient series converges absolutely/uniformly for **complex**
`h` with `|h_i|≤r`, since only absolute monomials entered the bound. Thus it
defines a holomorphic extension on each open polydisc by the published
`thm-power-series-define-holomorphic-functions-in-several-variables`, whose
hypothesis `|c_α|≤M r^{-|α|}` follows from the bound just proved. Apply that
theorem on a larger radius when discussing a closed box. Its iterated derivative
formula gives `D^αH_tf(a)=α!c_α(a)` on the real slice, so

$$|D^\alpha H_tf(a)|\le\alpha!r^{-|\alpha|}\|B_r\|_{p'}\|f\|_p.$$

For real data the coefficients are real, giving the published real analytic
germ at every centre. For complex data apply the argument to the real and
imaginary parts. As `r` is arbitrary, the Taylor series equals the function
for every real displacement, not merely a small neighborhood. Compact complex
neighborhoods are contained in such boxes, so the preceding domination covers
them too; the proof does not need an unproved theorem about parameter integrals
of holomorphic functions. Finally put `r=√t` and rescale `w=√t z`: the `p'` norm
of `B_r` is `C_{n,p}t^{-n/(2p)}`, with the same endpoint conventions. This gives
the stated factorial Gaussian derivative bound, uniformly in the spatial centre.

## Other proof routes checked

- Moments: `x_i Γ_t` and `x_ix_j Γ_t` are integrable by Gaussian decay. Odd
  factors vanish by reflection; the diagonal integration-by-parts boundary
  term `R exp(-R²/(4t))` tends to zero, giving `2t` times unit mass. Product
  factorisation then gives covariance `2tI` and trace `2nt`.
- Joint derivatives: kernel heat equation and commutation give
  `∂t^k D^αΓ=Δ^kD^αΓ`, a finite sum of spatial derivatives of order `|α|+2k`.
  For `|x|≤R`, `τ≤t≤T`, `|x-y|²≥|y|²/2-R²` gives a majorant
  `C exp(-|y|²/(16T))`. Hölder with `|f|` gives an integrable majorant for
  every finite collection of derivatives. The differentiation-under-integral
  theorem iterates on compact space/time neighborhoods. A lower time bound
  alone on an unbounded interval is not asserted to give this fixed majorant.
- Mild uniqueness: the explicit contraction estimate in the manifest tends
  to zero by `u(s)→f` and `H_sf→f`. Restrict to `p<∞`; unrestricted classical
  uniqueness and all-L∞ strong continuity are not claimed.
- Generator: integrate `∂sH_sφ=H_sΔφ` on `[ε,t]`, then let `ε→0`.
  Two scalar spatial integrations by parts and Fubini work in every dimension, including n=1 (the published Green identity starts at n=2). Scalar FTC gives the pointwise identity; bounded smooth compactly supported
  data justify its initial limit. Minkowski and contraction justify the Lp
  identity and bound by `t^{-1}∫_0^t||H_sΔφ-Δφ||p ds`. Approximate-identity
  convergence makes this bound tend to zero. Compact support kills the
  spatial integration-by-parts boundary terms; no future Sobolev page is used.
- Polynomial example: use the moment lemma on `y=x-z`; nonconstant polynomial
  inputs are explicitly outside the bounded/Lp definition and the direct
  moment integral is stated separately.
- Scaling example: choose `f=1_{B1}`, so its p norm is finite/nonzero for all
  `p` under consideration. The heat Lp→Lq theorem makes `||H1f||q` finite;
  positivity makes it nonzero (pointwise positive, and positive on a set of
  positive measure for finite q). Scaling at `t=λ^{-2}` forces the proposed
  exponent to equal `n(1/p-1/q)/2` by taking both λ limits. This concerns one
  uniform estimate for all positive times, not a best constant claim.

## Existing strategy repairs and source evidence

The causal fundamental-solution statement is unchanged. Its old strategy
incorrectly took separate dominated-convergence limits of `∂tΓ` and `ΔΓ`
near zero using bounds of order `1/t`. The repaired strategy cancels the
interior terms on `[ε,∞)` first; only bounded test-function derivatives times
the unit-mass kernel are integrated to zero time. The omitted slab is `O(ε)`;
the boundary term tends to `φ(0,0)`. No altered supplier interface therefore
triggers a published-consumer repair. Existing Gaussian example now declares
the moment supplier; spatial derivative estimates declare joint domination;
Gaussian norm computation and kernel smoothness declare their actually used
published suppliers. No original statement changes.

Verified full text: Hunter PDF fetched2026-10-03,1597256bytes,
SHA256 `0dbade1806f7a1ea79cc444a0eecfe19e157b286c964f1f48f2d744c460c12dd`,
242pages, entire text extracted with `mutool`. Read printed129–131 and137:
(5.6) explicit kernel; (5.8)–(5.9) approximate identity; Theorem5.5 finite-p
initial convergence; after Proposition5.14 on **p137**, spatial analyticity
is explicitly stated in the Hs setting and cites [9]. It supplies no complete
analyticity proof there. The earlier scope report was correct that Teschl
Chapter6 did not supply analyticity. Evans remains unread; no Evans retrieval
or proof is claimed. MIT Lecture5 full text available and inspected for kernel
and mass; its original fetch hash is retained in coverage. Existing four-source
coverage remains; eight overlay rows are added as local Gaussian consequences.

No further source recovery is needed for analyticity: the verified alternative
Hunter text confirms the claim, and the complete local argument above closes
the extended data classes. Confidence in this local argument is high; normal
independent authored-item review and gates remain necessary.
