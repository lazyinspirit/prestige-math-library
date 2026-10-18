---
id: alg-certified-gamma-loggamma-evaluation
kind: algorithm
title: Finite certified evaluation of Gamma and a continued log-Gamma branch
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-certified-evaluation-result-contract, def-loggamma-right-halfplane-branch, def-loggamma-slit-plane-branch, lem-loggamma-series-convergence-and-gamma-identity, lem-loggamma-product-tail-bound, lem-loggamma-shift-independent, lem-sectorial-stirling-explicit-remainder-bound, lem-explicit-euler-constant-enclosure, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.11, asymptotic expansions
      url: https://dlmf.nist.gov/5.11
    - title: DLMF, §5.5, functional relations
      url: https://dlmf.nist.gov/5.5
    - title: DLMF, §§5.5, 5.8, and 5.11
      url: https://dlmf.nist.gov/5.8
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

Input: a finite dyadic complex rectangle $Z$ wholly contained in
$\Omega=\mathbb C\setminus(-\infty,0]$, a target choice of $\Gamma$ or the
continued branch $\ell$ from [[def-loggamma-slit-plane-branch]], positive
absolute tolerance, optional positive relative tolerance, finite work and
precision caps, and the fixed format/truncation parameters of the interval
backend. The procedure encloses the range of the selected function on $Z$.
It uses the Weierstrass log-Gamma series with its finite tail bound and a
finite harmonic enclosure for Euler's constant; on its right-half-plane shift
it may instead use the explicit sectorial Stirling remainder. It returns
`success`, `inconclusive`, `domain`, or `range` under
[[def-certified-evaluation-result-contract]].

The branch formula is applied only when every translated rectangle used by a
principal logarithm remains in its slit-plane domain. A rectangle crossing
the cut returns `domain`; finite work caps make no universal success claim.

## Facts & Assumptions

**Given:** The exact target value lies in $Z$, with all domain and finite
budget conditions in the statement.

[A1] [[def-outward-rounded-interval-and-ball-operations]] and
[[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite
interval arithmetic expression DAG encloses its exact range, and non-finite
statuses make no finite claim. [[thm-real-elementary-range-enclosures]] and
[[thm-complex-elementary-range-enclosures]]: required real elementary and
complex exponential/logarithm ranges are enclosed whenever those evaluations
return finite results.

[F1] [[def-certified-evaluation-result-contract]]: `success` requires a
containing enclosure with radius at most the requested absolute tolerance;
relative certification is valid only when zero is excluded and the relative
radius test passes.

[F2] [[def-loggamma-right-halfplane-branch]] and
[[lem-loggamma-series-convergence-and-gamma-identity]]: for
$\operatorname{Re}w>0$,
$$\ell_+(w)=-\operatorname{Log}w-\gamma_Ew+ \sum_{n\ge1}\left(w/n-\operatorname{Log}(1+w/n)\right), \qquad e^{\ell_+(w)}=\Gamma(w).$$

[F3] [[lem-loggamma-product-tail-bound]]: after $N>2|w|$ summands, the
remaining product-series tail has modulus at most
$|w|^2/[2N(1-|w|/(N+1))]$.

[F4] [[lem-loggamma-shift-independent]] and
[[def-loggamma-slit-plane-branch]]: if $m\ge0$ and
$\operatorname{Re}(z+m)>0$, then
$$\ell(z)=\ell_+(z+m)-\sum_{j=0}^{m-1}\operatorname{Log}(z+j), \qquad e^{\ell(z)}=\Gamma(z).$$

[F5] [[lem-explicit-euler-constant-enclosure]]: for $M\ge1$,
$H_M-\log M-1/M\le\gamma_E\le H_M-\log M$.

[F6] [[lem-sectorial-stirling-explicit-remainder-bound]]: on the right
half-plane, the branch $\ell_+$ satisfies
$$\ell_+(w)=(w-\tfrac12)\operatorname{Log}w-w+\tfrac12\log(2\pi)+R(w), \qquad |R(w)|\le1/(4|w|).$$

[F7] [[lem-trigonometric-identities-machin-and-range-reduction]]: the
Machin identity and arctangent tail give a finite certified enclosure of
$\pi$; [A1] then encloses $\log(2\pi)$ by the real elementary evaluator.

## Proof
1.1 Let $a=\inf\operatorname{Re}Z$. The procedure chooses the least integer $m\ge0$ for which $a+m>0$ and sets $W=Z+m$. Such an $m$ exists, and every $w\in W$ has positive real part. The procedure checks that each $Z+j$, $0\le j<m$, avoids the principal-logarithm cut; otherwise it returns `domain`. [given, F2, F4, algebra]

1.2 For the product branch, let $R_W$ be an outward upper bound for $\sup_{w\in W}|w|$ and try permitted integers $N$ until $N>2R_W$ or the finite cap is reached. The input rectangles $W/n$ and $1+W/n$ remain in their Log domains automatically from $\operatorname{Re}W>0$. If $N>2R_W$, evaluate the finite series for $\ell_+$ over $W$ by [A1], enclose $\gamma_E$ by [F5], and enlarge by $$T_N=\frac{R_W^2}{2N(1-R_W/(N+1))}.$$ The pointwise tail bound [F3] holds uniformly for every $w\in W$ with this choice of $R_W$. If no permitted $N$ passes the condition, this branch returns `inconclusive`. Subtracting the outward enclosures of the shift-log ranges from [F4] therefore gives a rectangle containing $\ell(Z)$. [A1, F2, F3, F4, F5]

2.1 For the Stirling branch, put $a_W=\inf\operatorname{Re}W>0$. Every $w\in W$ lies in the closed sector $|\arg w|\le\pi/2$, and $|w|\ge a_W$. By [F6] with $\delta=\pi/2$, its remainder has modulus at most $1/(4a_W)$. The procedure encloses the main term over $W$ using [A1], enlarges by this common radius, and subtracts the same shift-log enclosures from [F4]. Since $W=Z+m$ and [F4] uses $\ell_+(z+m)$, this also contains $\ell(Z)$. The constant $\log(2\pi)$ is enclosed using [F7] and [A1]. [A1, F4, F6, F7, step 1.1]

3.1 For a log-Gamma request, the procedure tests either valid candidate directly against [F1]. For a Gamma request, it applies the complex exponential range enclosure in [A1]; [F4] gives $e^{\ell(z)}=\Gamma(z)$ at every point $z\in Z$. It returns `success` only after the absolute-radius and applicable relative-radius tests pass. If no finite candidate passes within the caps it returns `inconclusive`; an outward operation that overflows gives `range`. Every successful enclosure is sound by steps 1.2 and 2.1. [A1, F1, F4, step 1.2, step 2.1] ∎