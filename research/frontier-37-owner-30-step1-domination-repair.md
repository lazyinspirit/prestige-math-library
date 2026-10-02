# Step 1 repair review — `thm-principle-of-descent-and-domination`

## Scope and live state

I read the repository instructions and required documents, then inspected the batch 24 manifest, notes, coverage, the target's escalated Step 1 record, its direct in-run prerequisites, and the published prerequisite contracts used by the Riesz route. I did not edit the manifest, decision, plan, or run state.

The recomputed `frontier-37-owner-30` status is held at `1-scaffold`. Its current `stage-stalemate` failure names batches 13, 24, and 26 as covered but artifact-incomplete and no longer running. Batch 24's target remains escalated. The target's four declared dependencies all have current `ready` decisions; the energy lower-semicontinuity result already proves the descent clause. The batch notes correctly say not to use this theorem to justify Frostman or Fekete.

The manifested statement is the joint claim that (i) weak convergence gives the pointwise and energy descent inequalities, and (ii) for compactly supported positive finite measures, `ν(ℂ) ≤ μ(ℂ)`, `I(μ) < ∞`, and `U^μ ≤ U^ν+c` μ-a.e. imply the same inequality everywhere. The escalation concerns clause (ii).

## Statement correction required

The statement as written needs `μ(ℂ)>0`, unless “positive measure” is deliberately defined to mean nonzero. With the usual nonnegative-measure convention, `μ=ν=0` and any `c<0` satisfy the mass and energy conditions, while the μ-a.e. hypothesis is vacuous and the conclusion `0 ≤ c` is false. State `μ(ℂ)>0`; alternatively handle the zero case separately by requiring `c≥0` when `μ=0`.

## Full-text source audit

- E. B. Saff, [*Logarithmic Potential Theory with Applications to Approximation Theory*](https://arxiv.org/pdf/1010.3760), Theorem 2.8, printed pp. 182–183, gives the exact compact-support statement. Its proof is only an idea: set `U=min(U^ν+c,U^μ)`, take its Riesz measure, and “argue that λ must equal μ”; Saff explicitly sends the details to Saff–Totik. This alone does not resolve the escalated step. The run coverage already records a complete 36-page fetch; I independently inspected the theorem text.
- R. Orive, J. Sánchez Lara, and F. Wielonsky, [arXiv:1805.01679](https://arxiv.org/pdf/1805.01679), Theorem 4.10, printed pp. 32–34, proves an extension to unbounded supports. In Case 1.a it inverts to compact supports and invokes the compact version of the same principle, so it is not an independent proof of this compact base case.
- T. Bloom and N. Levenberg, [*Pluripotential Energy*](https://arxiv.org/pdf/1007.2391), Proposition 5.9 and Corollary 5.10, printed pp. 21–23, give a full ε-maximum proof. The exact hypothesis of Proposition 5.9 is asymmetric: `ψ∈PSH(X,ω)` is arbitrary, while only the dominated potential `φ` must belong to the full-mass class `E(X,ω)`; the assumption is `ψ≤φ` almost everywhere for `(ddcφ+ω)^n`. Thus the source does **not** require both potentials to have finite energy. Its proof handles the μ-a.e.-to-everywhere passage by the strict-contact measure comparison, decreasing-ε convergence, equality of total masses, and uniqueness. The authors explicitly note that the n=1 case generalizes Saff–Totik, Chapter II, Theorem 3.2. Corollary 5.10 is stated for two functions in the Lelong class, so Proposition 5.9 is the relevant citation when the second potential has smaller logarithmic growth.
- V. Guedj and A. Zeriahi, [*The Weighted Monge–Ampère Energy of Quasi-Plurisubharmonic Functions*](https://arxiv.org/pdf/math/0612630), §1.1, Theorem 1.3, Proposition 1.6, and Corollary 1.7, printed pp. 3–8, supply the precise contact-set step. In dimension one, `E(X,ω)` consists exactly of the ω-subharmonic potentials whose Laplacian measure does not charge polar sets (p. 4). Proposition 1.6 permits the maximum of `φ∈E` with an arbitrary `ψ∈PSH`; Corollary 1.7 proves, by canonical truncations, the strict-branch identity
  `1_{φ>ψ}(ω+ddcφ) = 1_{φ>ψ}(ω+ddc max(φ,ψ))`.
  Consequently arbitrary singularities of `ψ`, including the logarithmic poles produced by atoms of ν and infinite logarithmic energy of ν, are allowed. This is exactly the required locality after compactifying the plane to the Riemann sphere; no extra finite-energy hypothesis on ν is needed.

I fetched and read the complete PDFs for Orive et al. (37 pages; SHA-256 prefix `b308c414dc44ee6c`), Bloom–Levenberg (26 pages; `16662416a8e0ce1e`), and Guedj–Zeriahi (34 pages; `ae4d8e07329d7191`). The Saff full-text fetch and SHA-256 prefix (`cfbeaad8cf695fc1`) match the run's recorded coverage verification.

## Proof route for the corrected positive-mass statement

Keep the descent clause as-is; it follows from the ready truncated-kernel lower-semicontinuity result. For domination, the following sign-normalized route makes the measure comparison explicit.

1. Assume `μ(ℂ)=M>0`; write `ℓ_η(z)=∫log|z−w|dη(w)=−U^η(z)`, `u=ℓ_μ/M`, and `v=(ℓ_ν−c)/M`. The desired hypothesis becomes `v≤u` μ-a.e. Compact support gives `u(z)=log|z|+o(1)` and `v(z)=a log|z|−c/M+o(1)` as `|z|→∞`, where `a=ν(ℂ)/M≤1`.
2. Since `I(μ)<∞`, `U^μ` (and hence `u`) is finite μ-a.e. For each `ε>0`, let `A_ε={u+ε>v}` and `w_ε=max(u+ε,v)`. The a.e. hypothesis gives `μ(A_ε)=M`; points where `v=−∞` cause no exception.
3. The contact lemma applies with the exact hypotheses, even when ν has atoms or infinite energy. Choose the Fubini–Study form `ω` on `P¹`, normalized to total mass one, with chart potential `q(z)=0.5 log(1+|z|²)=log|z|+o(1)` at infinity. Set `φ=u−q` and `ψ=v−q` on the affine chart. Since `u−q→0` at infinity, `φ` extends across infinity and its compactified measure `ω+ddcφ` is exactly `μ/M` (there is no atom at infinity). The finite-energy measure `μ/M` charges no polar set: otherwise its positive-mass restriction to a polar set would have infinite logarithmic energy, contradicting `I(μ)<∞` (the kernel's negative part is bounded on the compact support). In dimension one, this is exactly the condition `φ∈E(P¹,ω)`. The function `ψ` extends as an arbitrary ω-subharmonic function on `P¹`: when `a<1`, it has a permissible logarithmic pole of coefficient `1−a` at infinity; no energy condition on it is needed. Apply Guedj–Zeriahi Corollary 1.7 to `φ+ε` and `ψ`. In the original plane notation it yields the strict-contact identity
   `λ_ε|_{A_ε} = (μ/M)|_{A_ε}`,
   which in particular implies the inequality used by the domination argument. Because `μ(A_ε^c)=0` and `λ_ε` is positive, `λ_ε≥μ/M` on all of `ℂ`. Bloom–Levenberg Proposition 5.9 verifies that this is the contact-set step in a complete domination proof with arbitrary ψ, rather than a result restricted to two finite-energy potentials.
4. The asymptotics in step 1 give `w_ε(z)=log|z|+C_ε+o(1)`: for `a<1`, `C_ε=ε`; for `a=1`, `C_ε=max(ε,−c/M)`. Let `m(r)` be the circular mean of `w_ε` on `|z|=r`. Jensen's formula for the Riesz measure `λ_ε=(2π)^{-1}Δw_ε` gives
   `lim_{r→∞} m(r)/log r = λ_ε(ℂ)`
   (with the limit infinite if the total mass is infinite). Since the displayed asymptotic makes the left side one, `λ_ε(ℂ)=1`. As `μ/M` also has mass one, the measure inequality is equality: `λ_ε=μ/M`. This verifies the total-mass-at-infinity step without assuming that ν has finite energy.
5. Therefore `Δ(w_ε−u)=0` distributionally. Weyl's lemma makes the difference an entire harmonic function; its asymptotics above show it is bounded at infinity (and give its limit there), so Liouville's theorem makes it constant. On a set of full, positive μ-measure, `w_ε−u=ε`, so the constant is `ε`. More precisely, `w_ε=u+ε` almost everywhere as locally integrable functions, hence everywhere as their canonical subharmonic representatives; therefore `v≤u+ε` everywhere, including points where one potential is singular. Let `ε↓0` and undo the sign normalization.

This closes the μ-a.e. to everywhere gap for `M>0`, including singular potentials of ν. The finite-energy assumption makes `u` finite μ-a.e. and places its compactification in `E(P¹,ω)` by ensuring that μ charges no polar set. One must not replace these points by “μ has no atoms”: in dimension one a Riesz measure can charge a polar set without atoms.

## Dependency and choice accounting

The current target strategy says only to compare a minimum and assert its Riesz measure equals μ. Replace that outline with the ε-maximum route and cite the exact source hypotheses: Bloom–Levenberg Proposition 5.9 allows arbitrary `ψ∈PSH`, and Guedj–Zeriahi Corollary 1.7 supplies the strict-contact identity when the first potential is in `E`. State the bridge from `I(μ)<∞` to the compactified potential being in `E` (finite-energy measures charge no polar sets), and state the Jensen/Riesz mass-at-infinity calculation; none is the same as the existing compact-potential maximum principle. The target's current `def-polar-set-and-quasi-everywhere` is only a definition and does not establish finite-energy measures' polar-set behavior, so cite or prove the energy-capacity fact rather than treating that definition as a supplier.

The declared `thm-riesz-decomposition-subharmonic-plane` prerequisite explicitly assumes Dependent Choice, as do the current Riesz-representation and Weyl routes in its dependency closure. If the target keeps and uses that route, state DC for the theorem and list `def-dependent-choice` directly. The distributional logarithmic-kernel item separately assumes Countable Choice, which DC implies. No use of full AC is needed. The descent clause itself is choice-free, so it may be labeled separately if the item format is revised.

### Finding

There is a complete source-backed proof route for the intended domination claim once the nonzero-mass condition is made explicit. The present escalation was justified: the existing one-line contact-measure outline is incomplete, and the manifested zero-measure case is false. The repair must fix that statement edge case and put the strict-contact measure and infinity-mass steps into the proof or their declared suppliers before the readiness decision is cleared.
