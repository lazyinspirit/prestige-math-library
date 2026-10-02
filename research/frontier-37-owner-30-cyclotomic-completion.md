# Frontier 37, batch 4 cyclotomic completion

Date: 2026-10-01  
Run: `frontier-37-owner-30`  
Scope: batch 4, all 31 manifest items; math edits limited to five carriers explicitly released by root.

## Current evidence state

At the start of this completion, root reported that 0/31 batch-4 items were closed. The former Step 3b review receipts were historical: the earlier `justified_by: null` to `[]` normalization changed all 31 item hashes, so their accepts did not certify the current contents. The five proof repairs below changed their carriers again. The current review update is recorded at the end of this report.

The existing full-text retrieval records in `frontier-37-owner-30-batch-4.coverage.json` were reused. They record complete PDFs and inspected arguments for Milne, Conrad–Landesman, and Shurman. No new fetch or recovery attempt was needed. The published supplier `thm-number-field-integral-ideal-factorisation-in-zf` currently has raw SHA256 `626959101a86491f5fca50994f7ca77984fc1c358b91c66f86a102426c459c81`.

## Authorized proof repairs

### Monogenic prime factorisation

In `lem-monogenic-prime-factorisation-by-polynomial-reduction`, the previous proof treated `(p,g_i(α)^a_i)` as the ideal power `P_i^a_i`; its quotient computation instead describes a polynomial-generated ideal and did not establish the asserted ideal-power equality. Its final “contains a generator” argument also did not prove the needed ideal inclusion.

The replacement proof identifies the primes over `p` and their residue fields from `O_K/pO_K ≅ F_p[t]/(F̄)` and polynomial CRT. It then applies the repaired published choice-free ideal-factorisation theorem to `pO_K=∏ Q_i^{e_i}`, matches the `Q_i` with the CRT primes `P_i`, and localizes at each `P_i`. The supplier theorem’s proved local calculation gives nilpotency index `e_i` for the maximal ideal modulo `p` and one-dimensional residue-field layers. The localized polynomial quotient is `F_p[t]_(g_i)/(g_i^{a_i})`, whose nilpotency index is exactly `a_i` and whose layers have `F_p`-dimension `deg(g_i)`. Comparing the indices yields `e_i=a_i`, including repeated factors. The remarks and batch coverage now accurately state that this proof uses the published ideal-theory supplier.

### Arithmetic Frobenius

In `lem-arithmetic-frobenius-on-a-cyclotomic-field`, the degree of `Φ_f` is now `φ(f)`, and the roots theorem is used with the exact condition `char ∤ f`. To establish the order of the reduced root in the residue field, the proof embeds that field into a splitting field of `t^f−1`; injectivity transfers the exact order back. For each prime `P`, it writes `Frob_P=σ_b`, compares `ζ̄^b=ζ̄^ell`, and uses `ord(ζ̄)=f` to conclude `b≡ell (mod f)`. This avoids applying `σ_ell^{-1}` modulo a prime before showing that the prime is stable. The `f=1` case remains explicit.

### Coprime-discriminant compositum

In `lem-coprime-discriminant-compositum-integral-basis`, Step 2.1 now sets `V=Σ_i Lα_i`, uses the rational-basis structure constants to prove it is a finite-dimensional `L`-subalgebra of `KL`, and shows it is a field because multiplication by a nonzero element is injective and hence surjective on finite-dimensional `V`. Thus `V=KL` and the `α_i` form an `L`-basis; the symmetric argument handles the `β_j`.

The denominator argument now uses repeated integer Bézout: the reduced common denominator satisfies `gcd(r,(a_ij))=1`, and `r | d_K a_ij` for every coefficient implies `r | d_K`. Regrouping the same coefficients gives the symmetric `r | d_L a_ij` argument, hence `r | d_L` and `r=1`. The discriminant step orders rows and columns explicitly. `K_2` is block diagonal in first-index-slow order; `K_1` is evaluated after a separate matching perfect shuffle of its rows and columns. Thus the two matrices need not share a reordering to calculate their determinants.

### Signed discriminant of a cyclotomic field

In `thm-discriminant-of-a-cyclotomic-field`, Step 4.1 combines the sign and absolute-value calculations only for the given case `f>1`. Step 1.4 treats the separate `f=1` statement directly: `K=Q`, the integral basis is `(1)`, and the trace Gram matrix is `[Tr_Q/Q(1·1)]=[1]`; the discriminant definition therefore gives `d_Q=1`. The sign expression is never evaluated at `f=1`.

### Conductor of a full cyclotomic field

In `thm-conductor-of-a-full-cyclotomic-field`, for each `p|r` the proof chooses a prime `Q` above `p` in the upper field using its factorisation theorem and defines `P=Q∩O_L` in the lower field. The inclusion of rings makes `P` the inverse image of a prime, so `P` is prime; `p∈P` makes it nonzero; and transitivity of contraction gives `P∩Z=Q∩Z=(p)`. The cited prime-above definition therefore identifies `P` as above `p`. These constructed primes are used in the inertia tower sequence to compare ramification exponents. The new definition dependency is present in both the item and manifest.

## Matching artifacts

The frontmatter dependencies, batch manifest rows, and proof-contract entries were aligned with those five proofs. The two new proof-contract entries were regenerated from the current facts and numbered steps; the discriminant boundary records now point to the separate `f=1` step. The Milne Theorem 3.41 coverage row describes the actual published ideal-factorisation supplier and local comparison route. The historical notes mark old accepts and checks as stale and record this handoff.

Root retains control of current review decisions, evidence refresh, gates, consumer reconciliation, and run state.

## Report-only source-boundary recommendations

The two source rows marked `out-of-scope` remain outside this batch's 31 claims and are not prerequisites for any current item:

- Conrad–Landesman, Remark 24.2 (Chebotarev direction), p. 123: keep Chebotarev existence and density out of the current cyclotomic pair, which starts with a specified rational prime and identifies its Frobenius. If a later plan covers prime-distribution or Chebotarev theory, consider this remark there alongside a complete proof source. This recommendation does not expand the current pair.
- Shurman, §4 (analytic sign of the Gauss sum under a fixed embedding), p. 8: keep the general analytic sign theorem out of the current pair; its proof requires a fixed complex embedding and convention. If a later plan includes analytic Gauss-sum evaluation, place the theorem there with its embedding convention. The current computations at p=3 and p=5 remain examples and do not claim the general sign theorem. This recommendation does not expand the current pair.

## Current Step 3 item review

After the five carrier repairs and scoped local checks passed, all 31 current batch-4 items were reviewed against their proofs and declared direct dependencies. The 26 unchanged items have nonowner `accept` receipts; the five repaired carriers have nonowner `repaired` receipts. All 31 receipts record confidence 1 and their direct dependency IDs. The cyclotomic pair's existing scope receipt remains current. Before and after receipt writing, all 31 mathematical input hashes matched the pre-review snapshot exactly.

No owner decisions, certificates, gate results, autopilot state, shared scope decisions, publication status, or run transitions were changed. These item reviews do not close the run-wide Step 3 check; other pairs remain outside this assigned batch review.
