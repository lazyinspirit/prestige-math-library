---
id: thm-smith-favored-twist-selmer-rank-distribution
kind: theorem
title: "Smith favored-twist Selmer-rank distribution"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 33
deps: [def-twistable-galois-module-and-favored-twist-family, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-smith-grid-cohomology-comparison, lem-smith-rational-quadratic-grid-symbol-invariance, lem-smith-kummer-section-from-approximate-generator, lem-smith-approximate-generators-after-finite-enlargement, lem-smith-ramification-sections-finite-local-refinement, lem-smith-cross-symbol-reciprocity-common-field, lem-smith-cross-symbol-reciprocity-in-composita, lem-smith-induced-frobenius-orbit-evaluation, lem-smith-unramified-kummer-frobenius-residue-symbol, thm-smith-involution-spin-split-hilbert-product, lem-smith-odd-involution-spin-local-correction, lem-smith-quadratic-diagonal-spin-invariance, lem-smith-diagonal-spin-double-coset-reduction, lem-smith-frobenius-compatible-approximate-generators, lem-smith-ramification-sections-from-unpacked-tuple, lem-smith-independent-kummer-symbol-realization, lem-smith-ramification-section-ray-degree-formula, lem-smith-universal-orbit-symbol-section-equivalence, lem-smith-off-diagonal-kummer-hilbert-comparison, lem-smith-off-diagonal-symbol-section-equivalence, lem-smith-local-unramified-inertia-pairing, lem-smith-global-section-reciprocity-comparison, lem-smith-unpacked-local-kernel-from-duality, lem-smith-ray-frobenius-local-generator-comparison, thm-smith-off-diagonal-symbol-ray-equivalence, thm-smith-off-diagonal-symbol-realization]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, AC_omega, and DC are assumed for the global-field, place, and continuous
  cohomology conventions used by the twist-family definitions. Smith's
  analytic and Selmer estimates add no separate choice branch in the source;
  no local proof of those estimates is supplied here.
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ^∞-Selmer Groups in Degree ℓ Twist Families II, Theorem 2.14 and §§4–10"
      url: "https://arxiv.org/pdf/2207.05143"
      locator: "Theorem 2.14; proof in §§4–10"
    - title: "A. Smith, The Distribution of ℓ^∞-Selmer Groups in Degree ℓ Twist Families I, §4"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§4, twistable modules and Selmer ranks"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K$ be a number field, let $\ell$ be a rational prime, and let $N$ be a twistable module with fixed local conditions at a finite set $V_0$ and a globally represented tuple of local twists. Assume either the non-self-dual hypotheses or the alternating hypotheses in the definition of favored twist families. For sufficiently large $H$, let $X^{\mathrm{fav}}_{K,N}(H;\boldsymbol\chi_{V_0})$ be the nonempty set of favored admissible twists of height at most $H$ whose restrictions to $V_0$ are $\boldsymbol\chi_{V_0}$. Then constants $c,C>0$, depending on $K,N,V_0$, exist such that the following total-variation estimate holds for $H>C$.

For a nonincreasing sequence $r_1\ge r_2\ge\cdots$ of nonnegative integers, define
$$P_{\le H}(r_1,r_2,\ldots)=\frac{\#\{\chi\in X^{\mathrm{fav}}_{K,N}(H;\boldsymbol\chi_{V_0}):r_{\omega^j}(N_\chi)=r_j\text{ for every }j\ge1\}}{\#X^{\mathrm{fav}}_{K,N}(H;\boldsymbol\chi_{V_0})},$$
$$P_{\mathrm{th}}(r_1,r_2,\ldots)=P(r_1\mid\infty)\prod_{j\ge1}P(r_{j+1}\mid r_j).$$
In the non-self-dual case, $P(j\mid n)$ is the probability that a uniformly random $(n-u)\times n$ matrix over $\mathbb F_\ell$ has kernel dimension $j$, where $u=\sum_{v\in V_0}(\dim W_{v,1}(\chi_v)-\dim H^0(G_v,N[\omega]))$; it is zero if $n<u$ or $j<u$, and $P(j\mid\infty)=\lim_{n\to\infty}P(j\mid n)$. In the alternating case, $P(j\mid n)$ is the probability that a uniformly random alternating $n\times n$ matrix over $\mathbb F_2$ has kernel dimension $j$. If $\sigma\mapsto\dim_{\mathbb F_2}H^0(\langle\sigma\rangle,N[\omega])\bmod2$ is a homomorphism and $b$ is the fixed parity of $r_\omega(N_\chi)$ in the prescribed twist family, set $P(j\mid\infty)=\lim_{n\to\infty}P(j\mid2n+b)$; otherwise set $P(j\mid\infty)=\lim_{n\to\infty}\tfrac12(P(j\mid2n)+P(j\mid2n+1))$. Then
$$\sum_{r_1\ge r_2\ge\cdots}\left|P_{\le H}(r_1,r_2,\ldots)-P_{\mathrm{th}}(r_1,r_2,\ldots)\right|\le \exp\!\left(-c(\log\log\log H)^{1/2}\right).$$

## Statement references

[[def-twistable-galois-module-and-favored-twist-family]]

[A. Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families II*, Theorem 2.14](https://arxiv.org/pdf/2207.05143)

[A. Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, §4](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC; a number field $K$; a twistable module $N$; local conditions; and globally represented local twists.

[F1] The admissible and favored character sets, Selmer groups, ranks, and the non-self-dual and alternating cases have the definitions specified in the twist-family definition. [[def-twistable-galois-module-and-favored-twist-family]]

[F2] Given normalized ramification sections, the finite grid cohomology map is an isomorphism and the selected-place Selmer conditions have the displayed local equations. This conditional supplier does not construct the sections or establish invariance under matching grid symbols. [[lem-smith-grid-cohomology-comparison]]

[F3] In the rational quadratic class-group specialization, the section maps and grid-symbol invariance are proved explicitly using quadratic characters and Legendre symbols. This does not establish the general number-field case. [[lem-smith-rational-quadratic-grid-symbol-invariance]]

[F4] Given compatible approximate generators, the Kummer construction produces the natural global ramification sections required by the finite grid map. This conditional fact does not prove that such generators exist. [[lem-smith-kummer-section-from-approximate-generator]]

[F5] After finitely enlarging the auxiliary place set, valuation-normalized approximate generators exist for each prime in every intermediate field. This does not establish compatibility among those generators at the auxiliary places or preservation of the favored-family hypotheses under enlargement. [[lem-smith-approximate-generators-after-finite-enlargement]]

[F6] After finite enlargement, local power classes yield finitely many labels on which the natural sections are locally compatible. This does not identify those labels with the source's grid classes or establish their analytic densities. [[lem-smith-ramification-sections-finite-local-refinement]]

[F7] When both approximate generators lie in one field containing the required roots of unity, the cross-symbol ratio is determined by their auxiliary local classes. This does not prove the general double-coset or involution-spin formulas. [[lem-smith-cross-symbol-reciprocity-common-field]]

[F8] The off-diagonal cross-symbol ratio identity also holds in composita of decomposition fields, under the displayed compatible local generator classes. The diagonal spin and arbitrary double-coset formulas remain separate. [[lem-smith-cross-symbol-reciprocity-in-composita]]

[F9] Away from the ramified prime, the induced Kummer section's Frobenius value has an explicit finite-orbit, equivalently double-coset, evaluation. This does not establish the diagonal spin identity or analytic symbol equidistribution. [[lem-smith-induced-frobenius-orbit-evaluation]]

[F10] An unramified Kummer Frobenius value is the explicit local residue symbol after passing to the relevant root-of-unity coinvariants. [[lem-smith-unramified-kummer-frobenius-residue-symbol]]

[F11] Under the stated quadratic involution hypotheses, the split-place Hilbert product equals one, and the odd-prime spin is exactly the product of its retained dyadic and real corrections. These facts do not identify an unqualified source spin convention. [[thm-smith-involution-spin-split-hilbert-product]] [[lem-smith-odd-involution-spin-local-correction]]

[F12] For normalized generators over a quadratic extension with matching local square classes and distinct split base primes, the diagonal odd spin is invariant. This does not identify the original source grid classes or cover other decomposition configurations. [[lem-smith-quadratic-diagonal-spin-invariance]]

[F13] The self-inverse double-coset case reduces to quadratic spin invariance for normalized generators with matching local-square labels, and the equality transports back to the original double-coset representative. This does not identify those labels with the original source grid classes. [[lem-smith-diagonal-spin-double-coset-reduction]]

[F14] After finite enlargement of the auxiliary set, generators can be chosen with matching local e-power labels when their primes have the same Frobenius in every exponent-e abelian extension unramified outside that enlarged set. This conditional interface uses global class-field existence and does not prove that enlarging the set preserves favored-twist hypotheses or analytic uniformity. [[lem-smith-frobenius-compatible-approximate-generators]]

[F15] For a fixed unpacked starting tuple, the approximate-generator condition for cyclic inert primes supplies compatible generators in all intermediate fields via ideal norms, and hence natural ramification sections with matching auxiliary restrictions under the stated Frobenius agreement. This uses global class-field existence and does not prove grid-symbol invariance or the analytic estimates. [[lem-smith-ramification-sections-from-unpacked-tuple]]

[F16] For Kummer radicals with a diagonal valuation pattern, arbitrary Kummer values occur with a prescribed Frobenius conjugacy class, at the explicit natural density, when the prescribed extension is unramified at the valuation primes. This does not establish the general source orbit/coinvariant symbol realization or uniform estimates. [[lem-smith-independent-kummer-symbol-realization]]

[F17] Given the ramification sections for the constant module, the relative exponent-e ray extension at finitely many outside primes has degree the product of gcd(e,Nq−1), and the selected inertia subgroups generate it. [[lem-smith-ramification-section-ray-degree-formula]]

[F18] For matched decomposition subgroups and Frobenius actions, equality of the off-diagonal Kummer orbit values is equivalent to equality of all finite-module section evaluations; the universal induced module suffices to test it. This is the orbit-value form, not the diagonal-spin or analytic-distribution theorem. [[lem-smith-universal-orbit-symbol-section-equivalence]]

[F19] An off-diagonal Kummer Frobenius value maps to the inverse tame Hilbert symbol under the canonical coinvariant power map. [[lem-smith-off-diagonal-kummer-hilbert-comparison]]

[F20] For matched decomposition subgroups and Frobenius actions, equality of the full off-diagonal Hilbert-symbol functions is equivalent to equality of all finite-module section evaluations; the universal induced module suffices. [[lem-smith-off-diagonal-symbol-section-equivalence]]

[F21] Local tame inertia and unramified dual classes pair by Frobenius evaluation under the stated prime-to-residue hypotheses. [[lem-smith-local-unramified-inertia-pairing]]

[F22] Under matched local generator labels, global finite-module reciprocity identifies local section comparison with dual Frobenius evaluation. [[lem-smith-global-section-reciprocity-comparison]]

[F23] The unpacked ramification classes force an unramified global class locally zero at the auxiliary set to vanish at every place. [[lem-smith-unpacked-local-kernel-from-duality]]

[F24] Under the unpacked assumptions, matching ray Frobenius is equivalent to local agreement of original approximate generators at the selected places. [[lem-smith-ray-frobenius-local-generator-comparison]]

[F25] Under the explicit matched and distinct-prime hypotheses, the off-diagonal symbol, local section, dual section and ray Frobenius criteria are equivalent. [[thm-smith-off-diagonal-symbol-ray-equivalence]]

[F26] Every off-diagonal orbit symbol tuple is realized in a fixed prime class under the stated class-field and unpacked hypotheses. This supplies existence only, not uniform analytic estimates or the favored-twist rank law. [[thm-smith-off-diagonal-symbol-realization]]

[A1] The source's proof of Theorem 2.14 also uses compatibility with the original grid classes, general symbol reciprocity, local Cassels–Tate pairing analysis, favored-twist moment bounds, tail estimates, and the joint distribution argument in Smith II §§4–10. Those intermediate estimates have not been reconstructed as complete local items or proofs in this assigned page. [Smith II, §§4–10](https://arxiv.org/pdf/2207.05143)

## Proof
1.1 The definitions in [F1] determine the empirical law, the finite matrix transition probabilities, and the two limiting transition conventions in the Statement. When normalized ramification sections are supplied, [F2] gives the finite grid cohomology map and its local equations. In the rational quadratic specialization, [F3] supplies section maps and grid-symbol invariance explicitly, while [F4] gives a general section when compatible approximate generators are supplied. The finite-enlargement result [F5] constructs pointwise generators, [F6] makes them locally compatible on a finite refinement, [F7] proves common-field cross-symbol reciprocity, and [F8] extends the off-diagonal ratio identity to decomposition-field composita, and [F9] gives the induced Frobenius orbit evaluation, and [F10] identifies its local Kummer values with residue symbols. The quadratic diagonal calculation [F11] retains its dyadic and real corrections, and [F12] proves spin invariance for compatible normalized generators over distinct split base primes. The self-inverse double-coset reduction [F13] extends that conclusion under its explicit local-label hypotheses. The class-field construction [F14] provides compatible local labels after finite enlargement, conditional on the global existence supplier and the displayed Frobenius condition. Under the unpacked starting-tuple hypothesis, [F15] constructs sections compatible at the original auxiliary places, provided the global class-field existence input is available. The finite Kummer/Chebotarev ingredient [F16] realizes independent radical values under its explicit hypotheses. The finite degree calculation [F17] and universal orbit comparison [F18] supply additional ingredients for symbol realization. The local comparison [F19] and the full off-diagonal symbol equivalence [F20] identify those orbit values with the corresponding Hilbert-symbol functions. The local and global reciprocity arguments [F21]–[F25] provide the fixed-class symbol criterion, and [F26] realizes every off-diagonal tuple. These facts do not establish the full source grid-class or density properties or imply the general total-variation estimate. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, F19, F20, F21, F22, F23, F24, F25, F26, given]

2.1 The source states the estimate as Theorem 2.14, but its proof depends on the unprovided analytic and Selmer estimates listed in [A1]. No complete local argument for those estimates is available in this batch, so the theorem is retained at full strength and escalated. [A1, step 1.1] ∎
