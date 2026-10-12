# First-order amplitude tail: second-consumer research draft

Research only, 2026-10-11. Sole owning reviewer/integrator: `/root/physics_spectral_repair_successor`. This addresses the exact finding in `second-consumer-scope-request.md`, preserving its distinct-finding cycle1/cap2 continuation, earlier quantum attribution, original exhausted budgets, and all immutable history. No production, mirror, plan, imported supplier, readiness, contract, or native decision was written. Mathematical acceptance and full old/current/alias consumer checking remain with that reviewer.

## Exact binding and confirmed defects

Read/current source `items/prop-nrqm-controlled-dynamics-first-order-amplitude-tail.md` raw SHA-256: `a497da7efc6ed2ececa7e063cec2e167aeeff0d1b37616d0d227c429d5a7972c`. Scope-request raw SHA-256: `56b2d440ab7fa3438eb5c703562db7d5fe349ac36f8a3f09dba8705c3751e225`. Adjacent `second-amplitude-evidence.json` binds other actual reads.

The actual convention is first-variable linear: 〈cx,y〉=c〈x,y〉 and 〈x,cy〉=bar(c)〈x,y〉. Consequently the old backward pairing 〈φ_b,Uφ_a〉 conjugates the physical phase and its coefficient; its prefactor exp(iE_bτ/ħ) does not undo free evolution. The forward pairing 〈Uφ_a,φ_b〉 is the correct amplitude under this convention, and the matrix element is 〈Vφ_a,φ_b〉. The original remainder bound is sound, but proof 2.1's intermediate equality omits an extra factor K: the correct integrated estimate is K²τ²exp(Kτ)/2. Finally a norm bound on V−V₀ does not make an arbitrary selected coefficient of V₀ measurable.

The norm-continuous Dyson and truncation suppliers were read and are not invoked outside their norm-continuous hypotheses. The actual strong-bounded interaction-picture supplier was read; it constructs vector strong integrals, proves operator-norm convergence and factorial tail bounds, and is the valid supplier for the full strong-only perturbation scope here. No norm-Bochner measurability of r↦V_I(r) in B(H) is imposed or asserted. The underlying CC autonomous group construction is the supplier's common-domain proof, not an AC Stone/spectral theorem.

## Explicit counterexamples to the former public formula

Take ħ=1, V=0, τ=π/2 and H₀=I. On the scalar Hilbert space C, 〈z,w〉=z bar(w), φ=1, and U(t,s)φ=e^{-iτ}. The old amplitude is exp(iτ)〈1,e^{-iτ}〉=exp(2iτ)=−1, whereas its old claimed right side is 1 with K=0 and remainder bound 0. This is an exact contradiction, not a numerical test. To satisfy the literal countably infinite eigenbasis hypothesis, take H=ℓ²(N), H₀=I and its fixed coordinate ONB, and use a₀=b₀=0. The identical scalar computation occurs on that coordinate. The corrected amplitude exp(iτ)〈e^{-iτ},1〉 equals 1 as required.

The matrix element correction is separately visible with H₀=0, ħ=1 and V=[[0,i],[-i,0]] on a two-coordinate block, extended by 0 on the remaining coordinates of ℓ²(N). V=V*, V²=I on the block, and U=e^{-iτV}. With φ_a=e₁, φ_b=e₂, the exact forward amplitude is −sin τ, so its first derivative at τ=0 is −1. The corrected first-order coefficient is −i〈Ve₁,e₂〉=−i(−i)=−1. The old ordering gives −i〈e₂,Ve₁〉=−i(i)=+1. Thus correcting only the free phase and keeping the backward matrix element would still fail.

For measurability, the logical requirement is explicit: if an arbitrary family V₀ has a nonmeasurable chosen coefficient, no scalar Lebesgue integral of that coefficient is defined merely because its modulus is bounded. In any setting admitting a non-Lebesgue-measurable A⊂[a,b], V=0 and V₀(r)=1_A(r)I are self-adjoint bounded with ||V−V₀||≤1, but their diagonal coefficient is 1_A. This illustration is conditional on such a set; it does not falsely assert that its existence follows from CC alone. The repair below supplies the actual measurable/integrable coefficient assumption directly.

## Proposed replacement Statement

Keep the original metadata identity, proposition class, mathematical domain, sources, CC contract and exact finite-time/strong-continuity scope. The sole reviewer should reconcile direct dependencies against the actual strong-vector supplier and appropriate scalar integration/inner-product interfaces; the norm-Dyson and norm-truncation suppliers must not be presented as the proof of a strong-only assertion.

Assume Countable Choice. Adopt the hypotheses and notation of `thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture`: H is a complex Hilbert space with first-variable-linear inner product, H₀ is self-adjoint on D(H₀), ħ>0, I=[a,b], V:I→B(H) is strongly continuous with bounded self-adjoint values, v=sup_I||V(r)||<∞, K=v/ħ, E(σ)=exp(−iσH₀/ħ), and U is its mild unitary propagator. Retain the complete ON eigenfamily (φ_n), H₀φ_n=E_nφ_n, E_n real, fixed indices a₀,b₀, s≤t∈I and τ=t−s. Write φ_a=φ_{a₀}, φ_b=φ_{b₀}, E_a=E_{a₀}, E_b=E_{b₀}.

Define

    A_ba(t,s)=exp(iE_bτ/ħ)〈U(t,s)φ_a,φ_b〉.

Then

    A_ba(t,s)=δ_ab−(i/ħ)∫_s^t
       exp(i(E_b−E_a)(r−s)/ħ)〈V(r)φ_a,φ_b〉dr+R_ba(t,s),
    |R_ba(t,s)|≤exp(Kτ)(Kτ)²/2.

Consequently let η:I→R_{≥0} be integrable and let V₀(r) be self-adjoint bounded operators with ||V(r)−V₀(r)||≤η(r). Require the selected scalar function c₀(r)=〈V₀(r)φ_a,φ_b〉 to be Lebesgue measurable (it will then be integrable by the bound below), or directly require it to be integrable. The first-order amplitude computed with c₀ instead of the actual coefficient differs from the exact amplitude by at most

    ħ⁻¹∫_s^t η(r)dr+exp(Kτ)(Kτ)²/2.

No full strong continuity or strong measurability of V₀ is needed for this selected-coefficient comparison, and no exact propagator of V₀ is asserted. The complete eigenbasis and all strong-only V hypotheses are retained. No transition-probability postulate, measurement claim, long-time limit, or full unbounded Schrödinger derivative is introduced.

## Complete proof with the actual strong-vector tail

**Given:** precisely the data in the proposed Statement. Inner products are first-variable linear.

[F1] The actual strong interaction supplier gives E(σ)φ_n=exp(−iσE_n/ħ)φ_n, V_I(r)=E(−r)V(r)E(r), U(t,s)=E(t)U_I(t,s)E(−s), and vector-integral Dyson terms D_n with latest-time-left ordering and ||D_n(t,s)||≤(Kτ)^n/n!. Its series converges in operator norm and its first-order tail obeys ||Σ_{n≥2}D_n||≤exp(Kτ)(Kτ)²/2, without norm continuity of V_I.

[F2] The same supplier's vectorwise mild identity is U(t,s)φ=E(t−s)φ−(i/ħ)∫_s^tE(t−r)V(r)U(r,s)φ dr. Its integrands are continuous H-valued curves. Applying a bounded linear functional commutes with their integrals, first for the defining finite sums and then by continuity. With first-variable-linear pairing, x↦〈x,φ_b〉 is precisely such a functional.

1.1 [Exact scalar expansion and phase] Unitarity and the eigenvector formula give

    A_ba=exp(i(E_a−E_b)s/ħ)〈U_I(t,s)φ_a,φ_b〉.

Indeed 〈E(t)x,φ_b〉=〈x,E(−t)φ_b〉=exp(−iE_b t/ħ)〈x,φ_b〉, whereas E(−s)φ_a=exp(iE_a s/ħ)φ_a contributes its scalar in the first slot without conjugation. The order-zero term is exp(i(E_a−E_b)s/ħ)δ_ab=δ_ab. For the order-one term,

    〈V_I(r)φ_a,φ_b〉
      =〈E(−r)V(r)E(r)φ_a,φ_b〉
      =exp(i(E_b−E_a)r/ħ)〈V(r)φ_a,φ_b〉.

Passing the bounded linear pairing through the vector integral D₁=−(i/ħ)∫V_I and multiplying its prefactor gives exactly the displayed first-order integral. Its coefficient is continuous because V is strongly continuous on the fixed φ_a. No differentiation of H₀ on U(t,s)φ_a has been used. [F1, F2, given, algebra]

2.1 [The actual remainder and its exact bound] Define T₂=Σ_{n≥2}D_n(t,s). The exact remainder is

    R_ba=exp(i(E_a−E_b)s/ħ)〈T₂φ_a,φ_b〉.

Since ||φ_a||=||φ_b||=1 and all E_n are real, Cauchy–Schwarz yields |R_ba|≤||T₂||. The actual strong-vector supplier therefore gives |R_ba|≤exp(Kτ)(Kτ)²/2. Directly, its factorial terms show

    ||T₂||≤Σ_{n≥2}(Kτ)^n/n!=exp(Kτ)−1−Kτ
      ≤exp(Kτ)(Kτ)²/2,

where (j+2)!≥2j! proves the last inequality. This includes K=0 and τ=0. The proof uses uniform operator-norm convergence of operators constructed by vector integrals, not an operator-valued Bochner integral. [step 1.1, F1, given, algebra]

2.2 [Independent check removing the extra K] Subtracting the first-order substitution in [F2] gives the equally exact expression

    R_ba=−(i/ħ)∫_s^t exp(iE_b(r−s)/ħ)
      〈V(r)[U(r,s)−E(r−s)]φ_a,φ_b〉dr.

The supplier's tail after order zero gives ||U(r,s)−E(r−s)||≤exp(K(r−s))−1. Hence

    |R_ba|≤K∫_0^τ[exp(Kx)−1]dx
      ≤K∫_0^τ Kx exp(Kx)dx
      ≤K²τ²exp(Kτ)/2.

For K>0 the first expression equals exp(Kτ)−1−Kτ; for K=0 it is identically zero, so no division by K is needed. The erroneous old intermediate factor K·(Kτ)²/2 has been replaced by K·(Kτ²)/2=(Kτ)²/2. This confirms the retained constant by a second vectorwise argument. [step 1.1, F1, F2, algebra]

3.1 [Comparison using only the measurable selected coefficient] The corrected coefficient c(r)=〈V(r)φ_a,φ_b〉 is continuous, and

    |c(r)−c₀(r)|≤||(V(r)−V₀(r))φ_a||≤η(r),
    |c₀(r)|≤v+η(r).

Thus the explicitly assumed measurable c₀ is integrable on finite I; alternatively direct integrability suffices. Multiplication by the continuous modulus-one phase preserves integrability. The absolute difference of the two first-order scalar expressions is bounded by ħ⁻¹∫_s^tη(r)dr. Adding the exact-versus-first-order remainder from step 2.1 gives the entire claimed comparison bound. This does not infer a propagator, an operator-valued integral, or norm continuity for V₀. [step 1.1, step 2.1, given, algebra] ∎

## Remaining review work and limits

The free scalar/ℓ² example decisively refutes the original phase/pairing. The corrected local argument proves the exact retained remainder and comparison under their explicitly meaningful scalar hypotheses. The public amplitude convention and comparison admissibility condition necessarily change, so the sole reviewer must include every required direct/indirect old/current/alias consumer and refresh exact quotes/contracts. The whole strong interaction supplier's prerequisite closure is not independently accepted by this author. Its current actual vector-tail interface, rather than the norm-only truncation lemma, is the proper source for this proof. No external full-text source reading was performed and no local hash check is mathematical acceptance.
