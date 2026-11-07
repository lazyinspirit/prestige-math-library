---
id: thm-cen-pair-count-proposition-3-1
kind: theorem
title: Cen Pair-Count Proposition 3.1
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
- thm-cen-degree-five-vinogradov-mean-value-bound
- thm-robert-sargos-three-dimensional-monomial-spacing-estimate
- lem-robert-sargos-near-diagonal-pair-count
- def-countable-choice
- lem-weighted-two-sided-double-large-sieve
justified_by: []
axiom_use: The original public Statement is retained without an added choice assumption.
  The currently reconstructed local analytic branch uses Countable Choice through
  the degree-five VMVT and weighted two-sided double-sieve suppliers. This conditional
  branch does not establish the full unqualified public claim; its choice-scope gap
  and remaining spacing inputs keep readiness held.
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
  - title: Xi Cen, Xitao Gao, Cheng Zhang, and Junyong Zhang, “A New Bound for the
      Gauss Circle Problem”
    url: https://arxiv.org/pdf/2610.21730v1
    locator: §3.1, equations (3.1)–(3.5), and Proposition 3.1
  - title: Olivier Robert and Patrick Sargos, “Three-dimensional Exponential Sums
      with Monomials”
    url: https://perso.univ-st-etienne.fr/rool6510/robert-2006-crelle.pdf
    locator: Primary Theorem 2 and §6.1 equation (6.4), identified through Cen §4.16;
      primary text not recovered. Cen §4.17 uses Robert–Sargos Lemma 8 as a double-large-sieve
      input, not as the near-diagonal pair-count statement.
verification:
  precheck: n/a
---

## Statement

Let T≥2, H≥1, 1≤M≤T^{1/2}, and α∈ℝ satisfy |α|≤1/4. Put ρ=HT/M, U=HT/M², and s=123/1340, and assume T^{42/67}≤ρ≤T^{43/67} and H≥T^s. The assertion is uniform for all sufficiently large T in this parameter range. Set J=⌈T^{36/67}/M⌉ and ω=Mα. For i=1,…,6 and h,q>0 define A_i(h,q)=binom(1/2,i)√T h q^{1/2−i}−ω·1_{i=1}, where binom(1/2,i)=\frac{1}{i!}∏_{j=0}^{i−1}(1/2−j) and 1_{i=1} is 1 if i=1 and 0 otherwise. Let Ω=([H,2H)∩ℤ)×([U/100,2U]∩ℤ), and let B count ordered pairs ((h,q),(h′,q′))∈Ω² for which ||A₄(h′,q′)−A₄(h,q)||≤C₀J^{-4} and |A_i(h′,q′)−A_i(h,q)|≤C₀J^{-i} for i=5,6, with ||x||=min_{n∈ℤ}|x−n|. Here C₀≥1 is the sufficiently large absolute constant fixed in the source. Cen, Gao, Zhang, and Zhang’s Proposition 3.1 asserts that B≪_ε H U T^ε for every ε>0.

## Statement references

[Xi Cen, Xitao Gao, Cheng Zhang, and Junyong Zhang, “A New Bound for the Gauss Circle Problem”](https://arxiv.org/pdf/2610.21730v1)

[Olivier Robert and Patrick Sargos, “Three-dimensional Exponential Sums with Monomials”](https://perso.univ-st-etienne.fr/rool6510/robert-2006-crelle.pdf)

## Facts & Assumptions

**Given:** The full unqualified source claim in the Statement. The partial local analytic branch below additionally assumes Countable Choice; this extra assumption is not claimed as a hypothesis of the public Statement.

[A1] [[def-countable-choice]]: Countable Choice asserts that every at most countable family of nonempty sets has a choice function.

[F2] [[lem-weighted-two-sided-double-large-sieve]]: Assuming Countable Choice, finite indexed families in coordinate boxes with unit-bounded complex coefficients satisfy the two-sided double-large-sieve estimate with both ordered index-pair counts; repeated coordinates retain their multiplicities.

## Proof status

The full unqualified Statement remains held. Only a conditional local branch assuming Countable Choice is supplied by the existing degree-five VMVT bridge and the now-proved weighted two-sided double-sieve lemma [F2]. Their extra choice assumption does not establish the unqualified public claim, and no narrower replacement claim is substituted.

The actual source inputs in Cen §4.16 are distinct: Robert–Sargos §6.1 equation (6.4) supplies the monomial near-diagonal count for exponents $2,7$, while their Theorem 2 supplies the four-term monomial spacing estimate with exponent $-1/8$. Cen §4.17 then invokes Robert–Sargos Lemma 8 as a double-large-sieve inequality. The existing `lem-robert-sargos-near-diagonal-pair-count` ID retains its intended pair-count obligation; its older Lemma-8 identification is not evidence for the actual pair-count formula. The primary equation (6.4) and Theorem2 proofs have not been read. The required normalized exponents-$2,7$ near-diagonal count is now independently proved in [[lem-robert-sargos-near-diagonal-pair-count]] by reduced-fraction height separation. On the source fixed positive intervals it gives $B_x\ll_\varepsilon T^\varepsilon(ZK+(ZK)^2/Y)$, since the scales are bounded by fixed powers of $T$. If a scale is below $1$, a nonempty fixed-range integer interval bounds it below by a fixed positive constant, so replacing that scale by $1$ changes the bound only by a fixed factor. Robert–Sargos Theorem2, the remaining transformations, and the original choice-scope obligation remain held.

The double-sieve step itself has a complete local replacement under Countable Choice. With Cen's normalized coordinates $x_{n,k},y_{v,t}$ and phase $\kappa Yx_{n,k}y_{v,t}$, where $\kappa$ is a fixed nonzero constant, apply [F2] to left coordinates $x_{n,k}$ and right coordinates $\kappa Yy_{v,t}$. Their coordinate bounds give $\prod_i(1+D_iE_i)\ll Y$ in this one-dimensional use, since $Y\ge1$; its two pair counts are the source's $O(Y^{-1})$ normalized-coordinate counts, with fixed gap constants handled by finite adjacent-cell counting. The resulting bilinear main sum is $O(\sqrt{YB_xB_y})$. The separated stationary-phase amplitude contributes $H/\sqrt Y$ and the endpoint-restriction separation in Cen Lemma A.1 contributes its logarithmic factor. Thus this step gives $O(H\log T\sqrt{B_xB_y})$, without invoking the old Bourgain–Watt fixed-polynomial $q>2$ claim. This identifies the conditional sieve step only; it does not supply either missing spacing estimate, the rest of the transformation proof, or the full proposition.

For the local phase convention $\sum_v c_v\Sigma_v$, linearizing $\sum_v|\Sigma_v|$ requires $c_v=\overline{\Sigma_v}/|\Sigma_v|$ when $\Sigma_v\ne0$, and $c_v=0$ otherwise. This makes $c_v\Sigma_v=|\Sigma_v|$ term by term. The unconjugated coefficient printed after the source's equation (4.17) would require conjugating the multiplied sum instead. The local convention above fixes that phase calculation while preserving all source parameters and exponent targets.
