# Final-adjudicator evidence: `thm-gibbs-overshoot-at-a-piecewise-c-one-jump`

Disposition: `repaired`.

## Material independently reviewed

I read the current theorem and all four current direct dependencies; the
Fourier A/B pages; the batch-6 manifest, coverage, notes, batch proof contract,
and merged proof contract; the group-c period-one convention, recorded concern,
and impact seam; the high-risk result; both frozen judge rejections; both exact
confirmed-fatal adjudications; and both Alpha repairs.

The initial judge correctly rejected the periodic half-step model and the claim
that subtracting it leaves a continuous remainder when other jumps may remain.
Alpha correctly replaced that route with the exact general piecewise-$C^1$
Gibbs theorem. The second judge correctly observed that resetting only one real
representative of the torus point destroys one-periodicity. Alpha correctly
reset the full congruence class $x_0+\mathbb Z$ and proved it is a countable null
exceptional set before invoking almost-everywhere equality of integrals.

## Authoritative source verification

I opened the full book PDF, not a search snippet:

https://users.math.msu.edu/users/iwenmark/Teaching/MTH994/Numerical-Fourier-Analysis-Birkhauser-2018.pdf

Plonka, Potts, Steidl, and Tasche, *Numerical Fourier Analysis*, Theorem 1.42
(PDF page 63), states for a $2\pi$-periodic piecewise continuously
differentiable function whose value at a jump is reset to the midpoint that

- the right sampling point is $x_0+2\pi/(2N+1)$;
- the limit is the right one-sided value plus
  $(\operatorname{Si}(\pi)/\pi-1/2)$ times the jump; and
- the corresponding left-side formula also holds.

The preceding calculation (PDF pages 61--62) defines the sine integral,
identifies $\operatorname{Si}(\pi)$ as its maximum, gives
$\operatorname{Si}(\pi)\approx1.8519$, and records the overshoot factor as
approximately $0.08949$. These are exactly the nontrivial source facts used in
the item.

## Mathematical and normalization check

The set $x_0+\mathbb Z$ is invariant under translation by an integer, so the
midpoint-reset function remains one-periodic. It is countable and therefore
null under the explicitly assumed Countable Choice and the cited local null-set
proposition. Resetting it changes neither Fourier coefficients nor partial sums
and does not alter the one-sided limits.

For $g(y)=\widetilde f(y/(2\pi))$, the substitution $y=2\pi x$ changes the
source coefficient
$(2\pi)^{-1}\int_0^{2\pi}g(y)e^{-iky}\,dy$ into the library coefficient
$\int_0^1\widetilde f(x)e^{-2\pi ikx}\,dx$. Thus the partial sums agree exactly,
and $2\pi/(2N+1)$ rescales to $1/(2N+1)$. The source theorem therefore yields
the displayed period-one limit and the positive-jump overshoot conclusion.

## Independent repair

The Alpha item was mathematically correct after its second repair, but the live
manifest still carried the discarded three-dependency model proof, both proof
contracts still reset only the single point $x_0$, their boundary rows described
the discarded integral proof, and the high-risk item lacked a completed risk
review. I synchronized the manifest strategy and four dependencies, regenerated
the derivations, replaced the stale boundary rows, added the completed source
and normalization risk review, and merged the contract.

I also repaired an independent zero-boundary defect by assigning
$\sin u/u$ its removable value $1$ at $u=0$, so the displayed integrand is a
function on the closed integration interval. Finally, I corrected the source
attribution to include the book's first author, Gerlind Plonka. No dependency
item was changed, so no owner-prerequisite-repair licence is required.

## Focused checks on final bytes

- Item precheck: pass (`1 checked, 0 failing`).
- Batch and merged strict proof contracts for this id: pass with zero errors and
  warnings.
- Batch and merged high-risk reports with `--require-reviewed`: score 6, zero
  errors.
- Batch manifest dependency check: `16 item(s), 0 normalized, 0 error(s)`.
- Batch content policy: `16 scoped item(s), 0 error(s), 0 warning(s)`.
- Boundary audit: no contradicted dispositions.
- Citation-fidelity check: every recorded quote found; no widening candidate.
- Item and both companion-page render checks: pass under real YAML and KaTeX.
