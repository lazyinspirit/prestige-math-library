# Step 1 owner repair research: polar sets and the Green function

## Records inspected

Run `frontier-37-owner-30` is still at the Step 1 scaffold hold. Its current blocker names batch 24 as covered but artifact-incomplete; the run state is live and has no completed Step 1 gate. The pair manifest is `research/frontier-37-owner-30-batch-24.pages.json`; the authored item carriers do not yet exist under `items/`, so this review checks the manifest statements and their current Step 1 decision records.

The pair note is `research/frontier-37-owner-30-batch-24.notes.md`, especially its two escalations at “Step 1 outcomes requiring owner review.” The records below have matching manifest statements and current dependency lists; the escalated decisions were not changed.

| Item | Manifest dependencies | Current Step 1 record |
|---|---|---|
| `lem-compact-polar-sets-and-subharmonic-minus-infinity-loci` | `def-polar-set-and-quasi-everywhere`, `thm-riesz-decomposition-subharmonic-plane`, `def-countable-choice`, `thm-plane-subharmonic-functions-are-locally-integrable` | `escalated`, SHA `c6a65613…`; asks for the Evans construction and convergence, noting Riesz decomposition imports DC while the statement only names Countable Choice for the Fσ extension. |
| `thm-green-function-from-equilibrium-potential` | `def-axiom-of-choice`, `def-green-function-with-pole-at-infinity`, `thm-equilibrium-measure-existence-and-uniqueness`, `thm-frostman-equilibrium-theorem`, `lem-logarithmic-potential-distributional-laplacian`, the polar lemma above | `escalated`, SHA `11ae5902…`; identifies the q.e. exceptional-boundary uniqueness gap and expressly rejects weakening to regular-boundary-only uniqueness. |

The directly relevant ready records were also checked: `def-polar-set-and-quasi-everywhere`, `thm-riesz-decomposition-subharmonic-plane`, `thm-frostman-equilibrium-theorem`, `def-green-function-with-pole-at-infinity`, and `lem-logarithmic-potential-maximum-principle`. The Riesz record explicitly assumes Dependent Choice. The Frostman record explicitly inherits Choice from equilibrium-measure existence. The infinity-pole definition requires local boundedness near each finite boundary point and zero boundary limit quasi-everywhere; it keeps this distinct from the published finite-pole definition. The existing local maximum-principle statement is pointwise on the support, which is enough for the converse route below.

There is a third batch-24 escalation, for the domination theorem; it is outside this repair memo.

## Full texts consulted

1. Wolfhard Hansen and Ivan Netuka, [“On Evans’ and Choquet’s Theorems for Polar Sets”](https://arxiv.org/pdf/2002.08091), *Potential Analysis* 56 (2022), 423–435; DOI [10.1007/s11118-020-09890-0](https://doi.org/10.1007/s11118-020-09890-0). I retrieved and read the complete 13-page arXiv PDF. Theorem 1.1 is on printed p. 2; its proof, using Lemma 2.1’s shell-sweeping construction, is in §2.1 on printed pp. 3–4. The general local-triangle-kernel reduction is §3, pp. 9–10. Theorem 1.3 and its proof for polar Gδ sets are in §2.3 and §3, pp. 5–10. The related Perron–Wiener–Brelot results are Theorem 4.1 and Corollary 4.3, pp. 10–11; Remark 4.4 on irregular boundary sets is p. 11.

   The paper assumes a locally compact second-countable space and a positive Borel kernel that blows up on the diagonal, is bounded away from the diagonal, and has the local triangle property. It defines `c*(A)` by the least mass of a measure whose potential is at least 1 on `A`. Its Theorem 1.1 says that if an Fσ set `P` has `c*(P)=0`, then a finite positive measure carried by `P` has potential `+∞` at every point of `P`. In §1 it identifies the classical polar/outer-capacity-zero condition with `c*=0`, citing Armitage–Gardiner, Corollary 5.5.7. Its proof explicitly constructs the measure; this is the full Evans-potential argument missing from Saff’s definition and the previously consulted notes. The proof uses countable choices when selecting the successive measures and summing them.

2. E. B. Saff, [*Logarithmic Potential Theory with Applications to Approximation Theory*](https://arxiv.org/pdf/1010.3760), complete 36-page arXiv PDF. Definition 1.8, printed p. 172, defines logarithmic capacity through the Robin constant. Theorem 1.12 (Frostman), printed pp. 174–175, gives the global bound and q.e. equality for the equilibrium potential. Theorem 3.2 and Definition 3.3, printed p. 184, identify regular boundary points with equality of the equilibrium potential and note that irregular points have capacity zero. Definition 3.4, printed pp. 184–185, gives the infinity-pole formula and says its three conditions uniquely characterize it: harmonicity with boundedness off an infinity neighborhood, logarithmic normalization at infinity, and zero limit q.e. on the boundary. Saff states the uniqueness claim but does not prove it there; the barrier proof below supplies the missing argument under the local-boundedness condition in this run’s definition.

3. D. H. Armitage and S. J. Gardiner, [*Classical Potential Theory*, Chapter 5, “Polar Sets and Capacity”](https://link.springer.com/chapter/10.1007/978-1-4471-0233-5_5), DOI [10.1007/978-1-4471-0233-5_5](https://doi.org/10.1007/978-1-4471-0233-5_5). Hansen–Netuka cite Corollary 5.5.7 for the classical capacity/polar identification. Springer’s accessible preview exposed the chapter opening and Definition 5.1.1, which defines polar sets through a superharmonic `+∞` locus, but not the full corollary proof. I therefore do not claim to have read that proof. This reference is the exact classical capacity interface used by Hansen–Netuka; the converse below is also given directly from this run’s ready local Riesz and maximum-principle suppliers.

The previously recorded Saff, Khoruzhenko, and Kuehn sources remain as in the batch note: their cited definitions or sketches did not themselves furnish the missing Evans construction. No source-fetch stamp or Step 1 decision is claimed by this memo.

## Exact local route for the compact-polar lemma

Let `E` be compact and choose a bounded open neighborhood `X` of `E` with compact closure. Choose `R > diam(closure X)` and on `X × X` use

`G_R(z,w) = log(R/|z-w|)`.

This kernel is positive, Borel, tends to `+∞` on the diagonal, and is bounded away from the diagonal. It has the local triangle property: `max(|x-z|,|y-z|) ≥ |x-y|/2`, so

`min(G_R(x,z),G_R(y,z)) ≤ G_R(x,y)+log 2 ≤ C G_R(x,y)`

for `C = 1 + log(2)/log(R/diam X)`. The zero sets of this shifted logarithmic kernel’s classical capacity agree with those of logarithmic energy capacity; Hansen–Netuka §1 gives the classical `c*=0`/polar interface and cites Armitage–Gardiner, Corollary 5.5.7.

If `cap(E)=0`, the direct truncated-kernel construction in the addendum below supplies a finite positive measure `μ` carried by `E` with `G_R μ=+∞` at each point of `E`; in particular it proves `c*(E)=0`, so Hansen–Netuka Theorem 1.1 also applies. Then

`u(z) = ∫ log|z-w| dμ(w) = μ(E)log R − G_R μ(z)`

is subharmonic on `X` and equals `−∞` on `E`. It is not identically `−∞`: the logarithmic kernel is locally integrable uniformly for `w` in a fixed compact set, so Tonelli gives `u∈L¹_loc(X)`. This direct direction uses Countable Choice for minimizer selection and Dependent Choice for weak subsequence/Riesz representation. For a specified Fσ union of compact zero-capacity sets, combine the compact Evans measures with the logarithmic-moment weights in the final addendum below; this gives one global witness even when the union is unbounded. No arbitrary-set equivalence follows.

For the converse, assume the run’s local Riesz decomposition (thus DC) and suppose a nontrivial subharmonic `u` on a domain `Ω` satisfies `u=−∞` on compact `E⊂Ω`. It suffices to work on finitely many relatively compact disks covering `E`; logarithmic capacity is finitely subadditive, so if `cap(E)>0`, one compact piece `E₀` in one such disk has positive capacity. On a disk `D⊂⊂Ω` containing `E₀`, the ready Riesz theorem gives a finite positive compactly supported measure `σ` and harmonic `h` with `u=h−U^σ`; hence `U^σ=+∞` on `E₀`.

Choose `R>diam(closure D)` and let `\widetilde U^λ=U^λ+λ(\mathbb C)log R`, the nonnegative shifted-kernel potential. Positive capacity gives a probability `μ` on `E₀` with finite energy, so `\widetilde U^μ<∞` μ-a.e. For some `M`, the closed set `F={z∈E₀: \widetilde U^μ(z)≤M}` has `m=μ(F)>0`. Normalize `ν=μ|F/m`. Nonnegativity of the shifted kernel gives `\widetilde U^ν≤M/m` on `supp ν`. Apply the ready maximum principle to the unshifted `U^ν` and then add `log R` back; it follows that `\widetilde U^ν≤M/m` on all of `\mathbb C`. Tonelli now yields

`+∞ = ∫ \widetilde U^σ dν = ∫ \widetilde U^ν dσ ≤ (M/m) σ(D) < +∞`,

a contradiction. Thus every compact subset of the `−∞` locus has zero capacity. For a specified Fσ union, apply the compact statement to each compact piece; Countable Choice is the explicit axiom for selecting/summing witnesses. This proof uses DC through the ready Riesz decomposition, but it does not need the AC-dependent Frostman theorem. A proof statement should therefore make DC explicit for the full equivalence; the Fσ extension has a countable-selection role as well. The local argument concerns compact sets and the specified Fσ extension only, as the current polar definition requires.

## Exact local route for Green uniqueness with an irregular boundary

Let `K` be compact and nonpolar, `Ω` the unbounded component of `\mathbb C\K`, `g=V_K−U^{μ_K}`, and `\tilde g` any other candidate satisfying the run’s infinity normalization, local boundedness near every finite boundary point, and zero boundary limit q.e. Put `h=\tilde g−g`. The normalization cancels the logarithmic pole, so `h` extends harmonically across infinity with value zero. The local boundary-boundedness condition, compactness of `∂Ω`, and boundedness near infinity imply that `h` is bounded on `Ω∪{∞}`.

Let `P_h={ξ∈∂Ω: limsup_{Ω∋z→ξ}|h(z)|>0}`. For each `n`, the set where this upper cluster limit is at least `1/n` is closed in `∂Ω`; hence `P_h` is Fσ. Since the boundary limit of `h` is zero q.e., `P_h` is capacity-polar. Apply the compact-polar construction above to obtain a finite nonzero measure `μ` carried by `P_h` whose shifted logarithmic potential `q(z)=∫log(R/|z−ξ|)dμ(ξ)` is `+∞` on `P_h`; take `R` large enough that `q≥0` in a neighborhood of `K`. Write `m=μ(\mathbb C)>0`.

The function `q` is harmonic on `Ω` because its measure is carried by `∂Ω`; at infinity,

`q(z)=−m log|z|+m log R+o(1)`.

Since `g(z)=log|z|+V_K+o(1)`, `q+mg` extends harmonically across infinity. It is bounded below on the spherical domain `Ω∪{∞}`: it is nonnegative near the finite boundary, extends continuously at infinity, and is continuous on the remaining compact interior region. Add a constant `C` so `Q=q+mg+C≥0` everywhere. At `P_h`, lower semicontinuity and `q=+∞` force `q(z)→+∞`; off `P_h`, `h(z)→0` and `Q≥0`. Thus `h−εQ` has boundary limsup at most zero everywhere and is harmonic and bounded above on the spherical domain. The maximum principle gives `h≤εQ`; apply the same argument to `−h`, then let `ε↓0` at each interior point (where `Q` is finite) to get `h=0`.

This proves uniqueness for the stated q.e. boundary convention even when irregular boundary points occur; it does not assume the boundary is regular. Local boundedness near finite boundary points is essential to this route and is present in `def-green-function-with-pole-at-infinity`. The direct statement of Definition 3.4 in Saff supplies the same uniqueness target but only asserts, rather than proves, uniqueness. The verified derivation above uses the explicit Evans measure and the ordinary maximum principle. Frostman’s ready theorem (and its AC assumption) supplies existence of `g`, its positivity, its far-field constant, its zero limit at regular points, and the q.e. boundary limit: `U^{μ_K}≤V_K` everywhere and equals `V_K` q.e. on `K`; at an equality point lower semicontinuity plus the global upper bound gives continuity and hence zero limit for `g`.

## Reconciliation points

- Keep the compact-polar lemma and general Green theorem as separate claims. The Green proof consumes the compact-polar result only to produce a barrier on the polar boundary cluster set.
- Make the lemma’s DC assumption explicit: the converse uses the ready Riesz decomposition, and the direct compact Evans construction uses weak sequential compactness of probabilities and Riesz representation under DC. Countable Choice is used for the truncated-kernel minimizers and Fσ witness family. The direct route avoids adding the AC-dependent Frostman theorem to the polar lemma.
- Preserve `def-green-function-with-pole-at-infinity`’s local-boundedness condition and q.e. boundary convention. Do not weaken the theorem to regular boundaries.
- This memo is a proof-route/source report only. It does not change the manifest, any decision record, plan, item, or run state and does not certify the Step 1 gate.

## Addendum: direct shifted-kernel Evans measure and the `c*=0` bridge

The Armitage–Gardiner proof cited by Hansen–Netuka remains unavailable in the Springer preview, but that interface is not needed. The following direct construction proves `cap(E)=0 ⇒ c*(E)=0` for the shifted logarithmic kernel and, more strongly, gives the finite Evans measure itself.

**Source locator and conventions.** Saff’s complete arXiv PDF, [*Logarithmic Potential Theory with Applications to Approximation Theory*](https://arxiv.org/pdf/1010.3760), defines the Robin constant as the infimum of logarithmic energy over probability measures and `cap(E)=exp(−V_E)` in Definition 1.8, printed p. 172; the energy and probability-measure conventions are in (1.8)–(1.10), printed pp. 171–172. Thus `cap(E)=0` means every probability measure on compact `E` has infinite logarithmic energy. Hansen–Netuka, [“On Evans’ and Choquet’s Theorems for Polar Sets”](https://arxiv.org/pdf/2002.08091), defines `c*` and records the elementary equivalence “`c*(A)=0` iff some finite measure has infinite potential on `A`” in §1, printed p. 2. The construction below proves that condition directly, rather than relying on the classical capacity identification cited there.

**Weak subsequences under the available axioms.** The only compactness input is sequential weak compactness of probability measures on compact metric `E`, available here under Countable Choice plus Dependent Choice. To expose the axiom cost: Countable Choice selects a finite `1/j`-net for each `j`, giving a countable dense subset of `E`; finite rational Lipschitz-minimum formulas on that set give a countable uniformly dense family in `C(E)`. For any sequence of probabilities, boundedness of the integrals against each test and Bolzano–Weierstrass give nested convergent subsequences; Dependent Choice selects the successive subsequences, and diagonalization makes all test integrals converge. Uniform density extends the limit to a positive norm-one functional on `C(E)`, and the positive-functional Riesz representation under Dependent Choice gives a probability measure and hence a weakly convergent subsequence. The same diagonal-functional proof appears in the local catalog as `lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences`; its current record assumes AC. Here it is rederived under CC+DC as above and does **not** import that AC premise. No Banach–Alaoglu, ultrafilter lemma, Frostman theorem, or AC-dependent equilibrium-measure theorem is used.

**Construction.** Assume `E` is nonempty compact with `cap(E)=0`; the empty case is immediate. Choose a bounded open disk `X` containing `E`, choose `R>diam(closure X)`, and set

`G_R(z,w)=log(R/|z−w|)`.

This kernel is nonnegative on `X×X`, and for every probability `ν` on `E` its energy is `I_R(ν)=I(ν)+log R`. For each positive integer `n`, define the continuous bounded kernel on `E×E`

`G_n(z,w)=min(G_R(z,w),n)`

with value `n` on the diagonal, and let

`e_n=min_{ν∈P(E)} I_n(ν)`, where `I_n(ν)=∫∫G_n(z,w)dν(z)dν(w)`.

The minimum is attained: `P(E)` is sequentially weakly compact by the preceding CC+DC argument, and `I_n` is weakly continuous because `G_n` is continuous on compact `E×E` (finite sums `f(z)g(w)` are uniformly dense, and their integrals factor). For each fixed `n`, Countable Choice supplies an approximating sequence for the infimum and sequential compactness gives a minimizer; Countable Choice then selects one minimizer for each `n`. The sequence `e_n` is nondecreasing. It tends to `+∞`: otherwise take minimizers `μ_n`, pass to a weakly convergent subsequence `μ_{n_j}⇒μ`, and let `L` bound `e_n`. For every fixed `m`, eventually `n_j≥m`, so `I_m(μ_{n_j})≤e_{n_j}≤L`; continuity gives `I_m(μ)≤L`. Since `G_m↑G_R`, monotone convergence gives `I_R(μ)=lim_m I_m(μ)≤L`, contradicting `cap(E)=0`, which makes the shifted energy of every probability on `E` infinite.

For every minimizer `μ_n` and every `x∈E`, first variation toward the point mass `δ_x` yields `G_n μ_n(x)≥e_n`. Explicitly, for `λ_t=(1−t)μ_n+tδ_x`, the right derivative at `t=0` of `I_n(λ_t)−e_n` is `2(G_n μ_n(x)−e_n)` and is nonnegative by minimality. Choose strictly increasing indices `n_k` with `e_{n_k}≥k^3` (take the least eligible index at each stage), and use Countable Choice to select one minimizer `μ_{n_k}` for each `k`. The finite positive measure

`σ=Σ_{k≥1} k^(−2) μ_{n_k}`

is carried by `E`, has mass `Σ k^(−2)<∞`, and, because `G_R≥G_{n_k}`, satisfies at every `z∈E`

`G_R σ(z) = Σ_{k≥1} k^(−2) G_R μ_{n_k}(z) ≥ Σ_{k≥1} k^(−2)e_{n_k} ≥ Σ_{k≥1}k = +∞`.

Therefore every positive scalar multiple of `σ` still has potential `+∞` on `E`, while its mass can be made arbitrarily small. This is exactly `c*_{X,G_R}(E)=0`. It also supplies the Evans witness directly; if the polar lemma is routed through Hansen–Netuka Theorem 1.1 instead, this verifies its `c*=0` hypothesis under the shifted logarithmic kernel. The resulting logarithmic witness is `u(z)=∫log|z−w|dσ(w)=σ(E)log R−G_Rσ(z)`, which is subharmonic and `−∞` on `E`; Tonelli and uniform local integrability of `log|z−w|` for `w∈E` give `u∈L¹_loc`, so it is not identically `−∞`.

This direct bridge uses Countable Choice for the countable minimizer selections and the measure sum, and Dependent Choice for the weak subsequence/Riesz representation step. It removes the remaining dependence on the inaccessible proof of Armitage–Gardiner Corollary 5.5.7; it does not claim that the classical corollary itself was accessed.

## Addendum: specified unbounded Fσ unions

Let `E=∪_{j≥1}E_j`, where each `E_j⊂C` is a specified compact set of logarithmic capacity zero; the union need not be bounded. For each nonempty `E_j`, the preceding construction with its own bounded disk and shifted kernel gives a finite positive measure `σ_j` supported on `E_j` such that

`∫ log|z−w| dσ_j(w)=−∞` for every `z∈E_j`.

Write `m_j=σ_j(C)>0` and `r_j=max_{w∈E_j}|w|`. By Countable Choice select one such compact witness for each nonempty piece. Set

`a_j = 2^(−j)/(1+m_j(1+log(1+r_j)))`, `σ=Σ_{j≥1}a_jσ_j`.

Then

`σ(C)=Σ a_jm_j<∞` and `∫log(1+|w|)dσ(w)≤Σ 2^(−j)<∞`.

These two bounds give convergence on the whole plane, not just on each bounded exhaustion set. For every compact `Q⊂C` there is a finite constant `C_Q` with

`∫_Q |log|z−w|| dA(z) ≤ C_Q(1+log(1+|w|))` for all `w∈C`.

For `w` in a fixed bounded set this follows from local integrability of the logarithmic singularity uniformly under translation; for large `|w|`, `|z−w|` is comparable to `|w|` uniformly on `Q`, giving the displayed logarithmic bound. Tonelli and the finite logarithmic moment therefore imply

`∫_Q ∫ |log|z−w||dσ(w)dA(z)<∞`.

Consequently `u(z)=∫log|z−w|dσ(w)` is locally integrable on `C`. Its positive part is finite at each point because `log^+|z−w|≤log(1+|z|)+log(1+|w|)` and `σ` has finite mass and logarithmic moment. The integral is upper semicontinuous by reverse Fatou on compact z-sets with the same integrable upper bound; integrating the submean inequality for `log|z−w|` shows that `u` is subharmonic. At every `z∈E_j`, the `a_jσ_j` term gives infinite negative logarithmic part while the total positive part is finite, so `u(z)=−∞`. Since `u∈L¹_loc(C)`, it is not identically `−∞`. Thus `u` is a single global witness on the neighborhood `C` of the entire, possibly unbounded, Fσ union.

The converse for a specified union is componentwise: if a nontrivial subharmonic function on an open neighborhood of `E` is `−∞` on `E`, then its restriction to each compact `E_j` satisfies the compact converse proved above, hence `cap(E_j)=0`. The global forward construction uses Countable Choice for the family of compact witnesses and the sum. Its per-piece construction uses Countable Choice to select truncated-kernel minimizers and Dependent Choice for weak subsequences and Riesz representation; these are exactly the axiom costs stated in the preceding addendum. No uniform bound on the locations or diameters of the compact pieces is assumed, because the logarithmic-moment weights ensure convergence on every compact subset of the plane.
