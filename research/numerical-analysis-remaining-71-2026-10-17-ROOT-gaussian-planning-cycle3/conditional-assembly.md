# Exact conditional expected-error and power assembly

**Research only.** The complex premise below is not proved or authored by this file. No canonical theorem may be marked complete from this conditional argument. The existing complete real branch and both-field inverse-mean items remain intact.

## Minimal admissible supplier interface, inside NA08 A

The previously proposed general product supplier is sufficient but not logically necessary. Either complete interface below suffices, with the actual full proof supplied by the original complex reviewer before root declares/creates it:

**P — matrix-specific scaled product.** For positive integers a,r,s,b, fixed S∈C^{a×r}, T∈C^{s×b}, and G∈C^{r×s} with iid normalized complex Gaussian entries z=(X+iY)/sqrt2, E|z|²=1,

E||SGT||₂ ≤ ||S||₂||T||_F + ||S||_F||T||₂.

This is a matrix/operator-norm statement, not an assertion of a general complex Banach Gordon–Chevet theorem. A proof over broader Banach spaces is not required. Existing real Gaussian comparison is not a complex proof.

**B — exact rangefinder block expectation.** For k≥2,p≥2,ℓ=k+p and independent normalized complex Ω₁∈C^{k×ℓ}, Ω₂∈C^{d×ℓ}, and every fixed compatible S∈C^{c×d}, prove at least

E||S Ω₂ Ω₁†||₂ ≤ sqrt(k/(p−1))||S||₂ + (e sqrtℓ/p)||S||_F.

The stronger leading coefficient sqrt(k/p) also suffices. Ω₁† is its Moore–Penrose inverse, defined on all draws; rank loss is null. If a tailored proof covers only diagonal rectangular S after a fixed unitary singular-value transform, that is still sufficient because the application has S=Σ₂. State the exact admissible dimensions and normalization. An exact direct expected-rangefinder theorem is another valid endpoint, but merely a conditional F-law estimate or a restricted kp/p range is not sufficient for the original target.

Any new substantial scalar/matrix-F/Wishart comparison prerequisites required by either proof need their own complete typed proof proposals and native creation in the same A page. No new pair is required just because the old general product route failed. This document creates no placeholder supplier ID or manifest entry.

## Base theorem assembly under interface P

Retain the entire original Statement of `thm-gaussian-rangefinder-expected-spectral-error`, including both fields and original constants. Keep its completed real supplier F1. Add actual local logical dependencies for whichever complete complex supplier is eventually authored, and for the already present invariance/full-row-rank/Frobenius-moment/SVD/Jensen/Tonelli/Gaussian-law inputs used below; root alone updates metadata/contracts/levels after proof completion.

1. For F=R the complete `thm-real-gaussian-rangefinder-expected-spectral-error` gives the exact original formula, including its Countable Choice convention and exact-arithmetic output. This real proof is not replaced by a new proof route.

2. For F=C, take an SVD A=UΣV*. The joint density π^{-nℓ}exp(−||Ω||_F²) and real Jacobian modulus1 under unitary V* show V*Ω has the same independent entries. The actual invariance lemma therefore supplies independent Ω₁ (k×ℓ) and Ω₂ ((n−k)×ℓ). By the actual full-row-rank lemma, Ω₁ has row rank k almost surely. The existing deterministic partition theorem, which needs no inverse of Σ₁, yields

||A−QQ*A||₂ ≤ σ_{k+1} + ||Σ₂ Ω₂ Ω₁†||₂

outside a null event. The approximation projector is a Borel function by the finite-scan algorithm, and its error is bounded by ||A||₂ on every draw. Thus the exceptional event does not affect expectation, including when rank(A)<k or A=0.

3. For each fixed Ω₁ on that full-row-rank event, apply proved interface P with S=Σ₂, G=Ω₂, T=Ω₁†. This is legitimate because Ω₂ is independent of Ω₁ and retains its iid normalized complex law. Nonnegative Tonelli integration yields

E||Σ₂ Ω₂ Ω₁†||₂ ≤ ||Σ₂||₂ E||Ω₁†||_F + ||Σ₂||_F E||Ω₁†||₂.

The right side is finite by the existing inverse moments. These are finite-density integrals under the Gaussian-law Definition, carrying its Countable Choice; no regular conditional distribution theorem or random measurable eigenvector selection is needed.

4. The exact complex Frobenius second moment is k/p, so Cauchy–Schwarz/Jensen gives E||Ω₁†||_F≤sqrt(k/p). The completed both-field spectral-moment item gives E||Ω₁†||₂≤e sqrtℓ/p. With ||Σ₂||₂=σ_{k+1} and ||Σ₂||_F=(sum_{j>k}σ_j²)^{1/2}, the result is actually

E||A−QQ*A||₂ ≤ (1+sqrt(k/p))σ_{k+1} + (e sqrtℓ/p)(sum_{j>k}σ_j²)^{1/2}.

Since p≥2, sqrt(k/p)≤sqrt(k/(p−1)), proving the unchanged original displayed formula over C. Both p=2 and ℓ=min(m,n) are included. Neither an almost-sure deterministic error bound with these constants nor a high-probability claim follows from this expectation.

Under interface B instead of P, replace steps3–4 by the proved block expectation with S=Σ₂; step2 plus that interface proves the unchanged original formula. The inverse-moment items remain sound, but do not assert they alone prove B.

## Power theorem assembly after the base is complete

Retain the entire original Statement of `thm-gaussian-power-rangefinder-expected-error`. Retain the real branch by its complete real power supplier. For F=C put B=(AA*)^qA. It is a fixed m×n complex matrix satisfying the same k,p,ℓ dimension conditions as A. An SVD gives

B=UΣ^{2q+1}V*,  σ_j(B)=σ_j(A)^{2q+1},

with zero singular values retained. The exact reorthogonalized algorithm's range equals Ran(BΩ), and its selected projector P=QQ* is measurable by its actual finite scan. Apply the now-complete shared-field base theorem to B, giving

E||(I−P)B||₂ ≤ (1+sqrt(k/(p−1)))σ_{k+1}^{2q+1}
+ (e sqrtℓ/p)(sum_{j>k}σ_j^{2(2q+1)})^{1/2} =: H.

H is finite because all matrices are finite. Thus all assumptions of the existing `thm-randomized-power-rangefinder-error-transfer` hold. It yields

E||(I−P)A||₂ ≤ (E||(I−P)B||₂)^{1/(2q+1)} ≤ H^{1/(2q+1)},

which is exactly the original displayed power bound. The transfer already proves the pointwise projector inequality and the concave-power Jensen step, including q=0. For q=0 the assertion reduces to the completed base theorem. If A=0, rank(A)<k, or an intermediate range is empty, the actual-range algorithm and zero singular-value conventions cover the case. There is no rounding/stability result in this argument; the toy dyadic example remains separate.

## Consumer and page follow-through once proof is genuine

After the supplier's full proof is delivered and root coordinates its native creation, this same reviewer must compare the actual native carrier and repair only the existing two held theorem proofs and obsolete Construction escalation/page warning text. Their Statements/Definitions can remain unchanged. Read the current new supplier's exact assumptions/normalization rather than presuming it matches P/B. Any actual original interface change triggers the same reviewer’s union of old/current consumer checks, already inventoried in REPORT/current JSONs; update that inventory if new edges arise.

Current actual shared-field expectation closure is exactly base→power, with no external item consuming either. The wider NA08 closure contains only19 own items plus the separate squared-norm tail/OSE items, which use unchanged law and unitary invariance. Page-level HIER/SKETCH holds are consumer-owned evidence, not new mathematical dependencies. Only root may reconcile their current readiness/metadata after all actual mathematical holds close. Never replace an independent OSE proof or deterministic HIER/FMM/BEM/PML error ledger by this expected bound.
