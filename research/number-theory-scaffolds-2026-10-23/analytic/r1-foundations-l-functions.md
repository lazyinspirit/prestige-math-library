# R1 analytic number theory foundations and L-functions

**Research date:** 2026-10-23. **Owner:** analytic number theory R1.
**Artifact scope:** proposed analytic-number-theory A/B pairs and supplier
contracts only. The machine-readable R1-owned fragments are
[`r1-sources/pair-fragment.json`](r1-sources/pair-fragment.json) and
[`r1-sources/proposed-inventories.json`](r1-sources/proposed-inventories.json).
The full-text acquisition, exact URLs, local source paths, page ranges, and
source-by-source read log are in [`r1-sources/README.md`](r1-sources/README.md).

No item is asserted to be authored by this planning note. A source citation is
not a substitute for its proof: the build obligations below identify the local
proof chain and the cases where that chain remains gated.

## Scope, ownership, and reuse

R1 covers multiplicative/analytic foundations, general Dedekind zeta and
finite-order Hecke L-functions, Dirichlet and Hecke zero-free/density
estimates, explicit formulae, effective and natural-density Chebotarev,
short-interval zeta results, and rigorous numerical zero verification.
The new page category is `analytic-number-theory`.

Existing suppliers are reused without duplicate item IDs:

- `number-theory/dirichlet-series-and-euler-products` supplies Dirichlet
  series/Euler products, Landau's theorem, and
  `thm-von-mangoldt-logarithmic-derivative-zeta`.
- `number-theory/arithmetic-functions-and-dirichlet-convolution`,
  `number-theory/average-orders-divisor-sums-and-representation-counts`, and
  `number-theory/chebyshev-bounds-and-mertens-theorems` supply arithmetic
  functions, convolution, and elementary prime estimates.
- `number-theory/dirichlet-characters-l-functions-and-primes-in-progressions`
  supplies character orthogonality, `def-natural-and-dirichlet-density`,
  `thm-dirichlet-l-nonzero-at-one`, and the fixed-modulus AP theorem.
  `number-theory/primitive-dirichlet-l-functions-and-functional-equations`
  supplies primitive/induced characters, Gauss sums, and primitive Dirichlet
  L continuation and functional equations.
- `number-theory/perron-inversion-and-the-explicit-formula` supplies Perron,
  the zeta zero-counting function, Riemann–von Mangoldt, and the zeta-only
  smoothed/truncated explicit formulae. The new character and Hecke formulae
  are separate extensions.
- `number-theory/classical-zero-free-region-and-the-prime-number-theorem`
  supplies the zeta zero-free region and PNT; its fixed-modulus AP result does
  not supply growing-modulus Siegel–Walfisz.
- `number-theory/prime-ideal-decomposition-ramification-and-the-different`,
  `number-theory/decomposition-inertia-and-frobenius`,
  `number-theory/number-fields-rings-of-integers-and-discriminants`,
  `number-theory/minkowski-theory-and-number-field-class-groups`, and
  `number-theory/dirichlets-unit-theorem-regulators-and-s-units` supply the
  algebraic inputs named in the page requirements.
- The full-rank lattice Poisson item is
  `fourier-analysis/poisson-summation-sampling-and-lattice-duality` /
  `thm-poisson-summation-for-a-full-rank-lattice`; the gamma factors use
  `complex-analysis/the-gamma-function`. The zero-count pages also use
  `complex-analysis/the-argument-principle-and-rouche` and
  `complex-analysis/goursat-and-cauchys-theorem-in-a-convex-domain`.
- Brauer induction, representation characters, and Frobenius conjugacy reuse
  `representation-theory/brauer-induction-and-elementary-subgroups`,
  `abstract-algebra/characters-and-the-orthogonality-relations`,
  `abstract-algebra/induced-representations-and-frobenius-reciprocity`, and
  the existing Frobenius items listed in the inventories.

ANT R2 owns the shared item `def-chebotarev-prime-ideal-counting-function`
and `thm-chebotarev-dirichlet-density` on
`chebotarev-density-and-frobenius-equidistribution`. R1 does not redeclare the
definition. The Dirichlet-density Chebotarev theorem consumes R1's
`thm-ray-class-primes-dirichlet-density`. The completely split theorem below
is instead proved directly from the Dedekind zeta Euler product, so its proof
does not depend on that later general Chebotarev result.

ANT R2 owns the global CFT page
`global-class-field-theory-and-artin-reciprocity`, including ray-class
existence/Artin isomorphisms and the proposed conductor–discriminant item.
The latter currently has no local proof: Milne CFT V.3 states it while
explicitly omitting proof as a local-field result. Consequently LO and
Thorner–Zaman effective Chebotarev edges that use the conductor–discriminant
formula are **proof-gated** until the local conductor/discriminant argument is
provided. The Hecke L(1) nonvanishing and ray-class Dirichlet-density route
does not use that formula.

R2 owns Siegel–Walfisz, Bombieri–Vinogradov, and the other AP/sieve pages.
Their SW A page should depend on the four R1 A pages
`dirichlet-l-zero-free-region-and-exceptional-zero`,
`landau-page-and-siegel-bounds-for-dirichlet-l-functions`,
`explicit-formula-for-dirichlet-character-von-mangoldt-sums`, and
`truncated-explicit-formula-dirichlet-l-functions`. In particular, its
explicit zero-sum input is
`thm-truncated-explicit-formula-for-dirichlet-character-von-mangoldt-sums`.
That item treats a single primitive-character von Mangoldt sum. The separate
Siegel–Walfisz verification for the Heath–Brown coefficient sequences in
R2's Stadlmann proof is not supplied by it and remains a local R2 obligation.
R2's BV proof can be built from its large sieve, SW, and Vaughan-identity
inputs; R1 zero-density estimates are not asserted as a BV prerequisite.

R3 owns the finite-field trace-function/exponential-sum analytic contracts,
including Deligne bounds. ANT R4 owns the étale-cohomology proof prerequisites
that the actual Deligne theorem requires. R1 supplies no finite-field
cohomology theorem and does not treat a citation to Deligne as a proof.

## Proposed finite A/B pair boundaries

All theorem suppliers are on A pages; B pages contain worked examples,
parameter checks, or explanatory remarks. The only proposed open problem is
on its A page, points only to the generic one-separated Dirichlet-polynomial
definition for notation, and has no theorem consumer.

| A page / B companion | Planned contract and principal local proof obligations |
|---|---|
| `dedekind-zeta-and-split-prime-density` / `dedekind-zeta-and-split-prime-density-examples` | Define `ζ_K(s)=Σ_{0≠a⊂O_K}(N a)^{-s}` for `Re(s)>1`; prove the ideal Euler product; analytic continuation, completed functional equation, simple pole at `s=1`, and analytic class-number residue. Prove density `1/[M:K]` for prime ideals of `K` splitting completely in a finite Galois extension `M/K` directly from `log ζ_M(s)`: split primes contribute `[M:K](N p)^{-s}`, all nonsplit unramified prime-ideal contributions and prime powers are summable at `s=1`, and `log ζ_M(s)=log(1/(s−1))+O(1)`. Requires the zeta, ideal, unit, regulator, gamma, Poisson, density-definition, and Frobenius suppliers. |
| `ray-class-hecke-l-functions-and-density` / `ray-class-hecke-l-functions-and-density-examples` | Define finite-order characters of a ray class group and their Hecke L-series, Euler products, primitive continuation/functional equation, abelian Artin factorization and Artin–Hecke equality (with ramified Euler factors explicitly removed), nontrivial `L(1,χ)≠0`, and equal Dirichlet density `1/|Cl_m(K)|` for each ray-class coset among prime ideals coprime to the modulus. Proof chain: analytic class-number pole + CFT ray-class existence/isomorphism + Artin factorization/compatibility + character orthogonality + Hecke L continuation. This supplies ANT R2's Chebotarev Dirichlet-density theorem. |
| `hecke-l-zero-free-regions-and-exceptional-zeros` / `…-examples` | Define multiplicity-counting zero functions. Include Weiss's field-uniform Landau–Page zero-free region/at-most-one real simple exceptional zero; Stark's effective Dedekind-zeta exceptional-zero bound; and T–Z's relative Hecke exceptional-zero conversion. State number-field, degree, discriminant, conductor, congruence-group, height, and exceptional-zero conditions explicitly. The relative conversion that invokes the conductor–discriminant item is proof-gated as noted above. |
| `dirichlet-l-zero-free-region-and-exceptional-zero` / `…-examples` | For primitive `χ (mod q)`, state the classical region `Re(s)>1−c/log(q(|Im(s)|+3))`, with at most a real simple exceptional zero for a real character; distinguish this per-character statement from a common-cutoff Landau–Page uniqueness statement. Derive from the Hecke-family region by specializing to `K=Q`, alongside the primitive Dirichlet functional equation. |
| `landau-page-and-siegel-bounds-for-dirichlet-l-functions` / `…-examples` | State common-cutoff Landau–Page uniqueness for primitive characters with conductor `q≤Q`, the ineffective Siegel lower bound `L(1,χ)≫_ε q^{−ε}` for every real primitive nonprincipal `χ`, and the resulting exceptional-zero distance `1−β≫_ε q^{−ε}`. Include Pólya–Vinogradov and a uniform near-one derivative estimate so the value lower bound implies the zero-distance bound. The lower bound is for all real primitive characters: `χ=χ_D` for either sign of a fundamental discriminant `D`, not just imaginary quadratic fields. |
| `explicit-formula-for-dirichlet-character-von-mangoldt-sums` / `…-examples` | For primitive `χ`, define `ψ(x,χ)=Σ_{n≤x}Λ(n)χ(n)` and the Mellin-smoothed sum. Prove the fixed-rectangle Mellin contour identity: the trivial-character pole contributes `x·Ŵ(1)`, each nontrivial zero contributes `−x^ρ Ŵ(ρ)` with multiplicity, trivial zeros contribute their residue terms, and the two horizontal/left-edge integrals are retained as explicit contour remainders. This fixes the conductor, parity, zero, and pole conventions without hiding them in a schematic “error”. |
| `truncated-explicit-formula-dirichlet-l-functions` / `…-examples` | First prove a primitive Dirichlet Riemann–von Mangoldt count `N_χ(T)=T/(2π)log(qT/(2πe))+O(log(q(T+2)))`, with positive ordinates and multiplicity. For primitive `χ (mod q)`, `x≥2` a half-integer, and a zero-separated height `2≤T≤x`, state `ψ(x,χ)=δ_χ x−Σ_{|γ|≤T}x^ρ/ρ+O(xT^{-1}log²(qxT)+log²(qxT))`; here `ψ=Σ_{n≤x}Λ(n)χ(n)`, `ρ` ranges over nontrivial zeros with multiplicity, and `δ_χ=1` only for the trivial primitive character modulo one. The proof uses truncated Perron, the local zero count to select `T` away from ordinates, and contour truncation. Endpoint/near-integer variants must state their distance-to-jump term. This is the explicit zero-sum supplier R2's SW proof needs. |
| `large-values-of-dirichlet-polynomials` / `…-examples` | Define `D(s)=Σ_{n≤N}a_n n^{-s}`, a 1-separated ordinate set `t_r∈[0,T]`, and `G=Σ_{n≤N}|a_n|²`. Include both the basic mean-square bound `Σ_r|D(it_r)|²≪(N+T)G` and Vaughan Ch.27 Thm. 27.3, `Σ_r|D(it_r)|²≪(N+R T^{1/2}log T)G`. Ch.27 Thm. 27.4 then gives unconditionally `R≪NG/V²+NTG³(log T)²/V⁶` when `|D(it_r)|≥V>0`. Preserve the theorem's coefficient norm, separation, and height range; do not turn this proved estimate into a record claim. |
| `dirichlet-l-zero-density-estimates` / `…-examples` | Define individual and aggregate primitive-character zero counts with multiplicity. Include Vaughan Ch.28 Ingham–Huxley `N_2` estimates and corollaries, Heath–Brown's full 1979 estimates, and the log-free density/Deuring–Heilbronn results selected in the inventory. Every formula keeps its `σ`, `Q`, `T`, primitive-character sum, and epsilon range. |
| `hecke-explicit-formula-for-prime-ideal-sums` / `…-examples` | Define the prime-ideal von Mangoldt sum weighted by a finite-order Hecke character/Frobenius class. The Mellin identity has the principal-character pole, the nontrivial Hecke zero sum, trivial-zero/gamma residues, and an explicit shifted-contour remainder. Character orthogonality then recovers abelian Frobenius prime-ideal sums; prime powers and ramified ideals are separately bounded/removed. |
| `hecke-l-log-free-zero-density-and-zero-repulsion` / `…-examples` | Include Weiss's smoothed Selberg-sieve mean-square estimate, the finite Turán power-sum lemma, Weiss Thm. 4.3 field-uniform density, T–Z 2017 Thm. 3.2 explicit density improvement, T–Z 2019 Thm. 3.2 exceptional-sensitive factor, and the separate Hecke Deuring–Heilbronn bound. Keep the uniform degree/discriminant/conductor/height range and exceptional factor `B₁` in the theorem, not just in a note. |
| `effective-chebotarev-and-natural-density` / `…-examples` | Use ANT R2's definition of `π_C(x;L/F)` and shared Dirichlet-density theorem. Include LO Thm. 1.1 under GRH for `ζ_L`, LO Thm. 1.3 unconditionally with its possible exceptional-zero term, Stark Thm. 1.4 bound, the natural-density corollary from the unconditional asymptotic, and the stronger separate T–Z 2019 Thm. 1.1/1.4. Do not make the unconditional LO item depend on its conditional sibling or T–Z depend on LO. Conductor–discriminant use is a proof gate. |
| `certified-zero-counting-for-degree-one-l-functions` / `…-examples` | Separate interval-arithmetic and Turing/argument-principle algorithms from the soundness theorem for a submitted certificate. Include Platt–Trudgian's dated finite zeta result through `3,000,175,332,800`; this is a proved finite range, not a present record claim. |
| `finite-dirichlet-l-zero-verifications` / `…-examples` | Separate Platt's interval/Turing verification procedure from its finite conclusion. Thm. 7.1 verifies primitive Dirichlet L zeros for `q≤400,000`: even `q`, `T=max(10^8/q,7.5·10^7/q+200)`; odd `q`, `T=max(10^8/q,3.75·10^7/q+200)`. Thm. 7.2 separately gives central nonvanishing through `q≤2,000,000`. These are certified bounded computations, not a GRH hypothesis. The local folder does not contain the complete run output or replay certificate, so the independent-build item is data-gated until it does. |
| `guth-maynard-zero-density-and-primes-in-short-intervals` / `…-examples` | State Guth–Maynard 2026 Thm. 1.1, the zeta density Thm. 1.2, the combined `30/13` exponent, Cor. 1.3 for `y∈[x^{17/30+ε},x^{0.99}]`, and Cor. 1.4 for almost all intervals `y∈[X^{2/15+ε},X^{0.99}]`. The companion has parameter substitutions only. A-page open problem `op-montgomery-large-value-conjecture` records exactly the source's Conj. 1.5; its only dependency is the one-separated sample definition, and no theorem consumes it. |
| `exponent-pairs-and-classical-voronoi-summation` / `…-examples` | Define the two squared-radius discrepancy functions (reusing the existing `r₂` item), record Kolesnik's A/B-process contracts, the endpoint-averaged pointwise divisor Voronoï identity proved by Meurman, and the smooth-test two-square Poisson formula. Miller–Schmid §6 supplies a complete Poisson proof of the circle `Oε(X^{1/3+ε})` bound. The broader arbitrary-test `K₀/Y₀` divisor formula remains proof-gated; see the R3 source review `r3-sources/divisor-voronoi-source-review.md` (current SHA-256 `24a14e13b9e8de57d354fec87325bb55927440bfee94d219584083b3b80071be`). GL3/Kuznetsov pages do not supply these GL1 formulas. |
| `dirichlet-divisor-and-gauss-circle-discrepancy` / `…-examples` | Reuse the existing elementary `O(√x)` average-order bounds. Record Li–Yang's dated 2023 preprint theorem statement `Δ(X),R(X)=Oε(X^{θ*+ε})`, `θ*=0.3144831759741…`, with its final-reduction proof gate; Cen–Gao–Zhang–Zhang's dated 2026 arXiv v1 claim `E(X)=Oε(X^{209/670+ε})`, `X≥4`, with the Robert–Sargos and Watt upstream gates; Lamzouri's published signed Ω lower bounds; and the exact `1/4+ε` conjecture. The item graph exposes the read Guth–Maldague and Bourgain–Watt §5 inputs, while Huxley03, Robert–Sargos, and Watt's upstream sources remain specifically gated. The 2026 source table makes no exhaustive current-record claim. |

The Guth–Maynard large-value contract in this inventory is: for `|b_n|≤1`,
`N<n≤2N`, a 1-separated set `t_r∈[0,T]`, and
`|Σ_{N<n≤2N}b_n n^{it_r}|≥V` for every `r`,
`R≤T^{o(1)}(N²V⁻²+N^{18/5}V⁻⁴+TN^{12/5}V⁻⁴)` (source Thm. 1.1).
Their zero-density bound is `N(σ,T)≤T^{15(1−σ)/(3+5σ)+o(1)}` (Thm. 1.2); using
Ingham for `σ≤7/10` gives the stated combined exponent `30/13`.

The Dirichlet-character explicit-formula items are local contour proofs from
the stated prerequisites, not theorem claims borrowed from a zeta-only
formula: Green's complete Ch. 7 proof is the zeta contour model, while Evertse
Ch. 6 Thm. 6.3.1 is also zeta-only and explicitly refers to Davenport Ch. 17
for its proof. Neither is represented here as a full character-formula
proof. The new truncated character item therefore includes its own
primitive-L zero count, Perron truncation, height-selection argument, and
residue/error terms.

## Proof chains and exact theorem statements

### Dedekind zeta, Hecke nonvanishing, and ray-class density

The proof supplier is Neukirch, *Algebraic Number Theory*, English translation,
Ch. VII §5, printed pp. 457–468, especially Thm. 5.9 and Cor. 5.10–5.11;
the complete section is in
`algebraic/sources/neukirch-algebraic-number-theory.pdf/.txt` (Springer DOI
<https://doi.org/10.1007/978-3-662-03983-0>). The proof is locally complete,
not a citation back to Lang: §§3–4 establish the lattice theta/Poisson and
gamma inputs, §5 obtains the completed zeta functional equation and simple
pole/residue, and §6–8 give finite-order Hecke characters, their theta
transformations, analytic continuation, and functional equation. The unit
fundamental domain is obtained using the number-field unit theorem and the
regulator. The current source contract assumes the existing full-rank Poisson
theorem's Countable Choice and the unit theorem's full Axiom of Choice
strength; those assumptions must remain visible in the resulting suppliers.

For a nontrivial ray-class character, Neukirch VII §13 Lemma 13.3 proves
`L(1,χ)≠0`. Its complete chain is: take the ray-class field from CFT; use
VII §10 Cor. 10.5 to factor the abelian Dedekind zeta quotient into the
nontrivial characters; use VII §10 Thm. 10.6 to identify the Artin factor
with the Hecke L-function away from the finitely many ramified Euler factors;
use §5's simple poles of both Dedekind zeta functions and §8's holomorphy at
one. Their quotient has a finite nonzero limit, so each of the holomorphic
nontrivial factors is nonzero at one. Character orthogonality and the Euler
product logarithm then give equal Dirichlet density `1/|Cl_m(K)|` for each
ray-class coset. Neukirch VII §13 Thm. 13.2 is the direct ray-density locator.
This is Dirichlet density, not natural density.

For complete splitting in a finite extension `L/K` with normal closure
`M/K`, complete splitting in `L` is equivalent to trivial Frobenius in the
faithful permutation action, hence to complete splitting in `M`. The build
proof is elementary once the pole is known. In `log ζ_M(s)`, an unramified prime of `K` splitting
completely gives `[M:K]` prime ideals of norm `N p`; a nonsplit prime has
residue degree at least two, and all such terms plus higher prime powers
converge at `s=1`. Comparing with
`log ζ_M(s)=log(1/(s−1))+O(1)` gives numerator coefficient
`1/[M:K]`; the same argument for `ζ_K` gives the denominator coefficient
one. Ramified primes are a finite set. Thus the proposed item states density `1/[M:K]` for primes splitting
completely in `L/K`, with `M` its normal closure. This is distinct from the
set of primes having merely one degree-one prime divisor in `L`; Neukirch
VII Cor. 13.6 gives a lower bound and a separate Galois equality for that
larger set.

Milne CFT VI §2 pp. 183–191, VI §4 Thms. 4.8–4.10 pp. 197–200, and III
Thm. 3.23/Rem. 3.26(d) p. 164 were read as cross-checks. Milne's proof of
Hecke nonvanishing uses class-field existence, but its general Chebotarev
discussion supplies Dirichlet density only; it explicitly does not prove the
natural-density implication. Neukirch's §13.4 general Chebotarev result is
also Dirichlet-density-only.

### LO, Stark, and T–Z Chebotarev contracts

The full LO source is the nine-section 41-page re-typesetting of “Effective
Versions of the Chebotarev Density Theorem,” printed in Fröhlich's 1977
*Algebraic Number Fields: L-functions and Galois Properties*, pp. 409–464.
Exact retrieved PDF URL:
<https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf>;
the complete local PDF/text are
`analytic/r1-sources/lagarias-odlyzko-effective-chebotarev-1977.{pdf,txt}`.
The local object is a full re-typesetting, not the publisher scan. All nine
sections and the bibliography were read.

Let `L/F` be finite Galois, `G=Gal(L/F)`, `C⊆G` a conjugacy class,
`n_L=[L:Q]`, `Δ_L=|disc(L/Q)|`; let `π_C(x;L/F)` count unramified prime
ideals `p` of `F` with absolute norm `N_{F/Q}p≤x` and arithmetic Frobenius
conjugacy class `C`.

- **LO Thm. 1.1 (conditional).** If GRH holds for the Dedekind zeta function
  `ζ_L`, then for every `x>2`,
  `|π_C(x;L/F)−(|C|/|G|)Li(x)| ≤ c₁[(|C|/|G|)x^{1/2}log(Δ_L x^{n_L})+log Δ_L]`,
  with an effectively computable absolute `c₁`. This is GRH for `ζ_L`, not a
  vague GRH assumption for every Hecke/Artin factor.
- **LO Thm. 1.3 (unconditional).** If `n_L>1`, `ζ_L` has at most one zero
  in `1−(4log Δ_L)^{-1}≤σ≤1`, `|t|≤(4log Δ_L)^{-1}`. If it exists it is
  real/simple and denoted `β₀`. For
  `x≥exp(10 n_L(log Δ_L)^2)`,
  `|π_C−(|C|/|G|)Li(x)|≤(|C|/|G|)Li(x^{β₀})+c₃x exp(−c₄ n_L^{-1/2}√log x)`,
  omitting the first term when `β₀` does not exist. `c₃,c₄` are effective
  absolute constants. The exceptional term is not silently erased.
- **LO Thm. 1.4 (Stark).** There is an effective absolute `c₅` such that
  `β₀<max{1−(m_L log Δ_L)^{-1},1−(c₅Δ_L^{1/n_L})^{-1}}`, where `m_L=4`
  for `L/Q` normal, `m_L=16` for a tower of successive normal extensions
  from `Q`, and `m_L=4n_L!` otherwise. Stark's full proof is separately
  read, not inherited from LO's quotation.

The proof obligations in LO §§2–7 and 9 are the prime-ideal Frobenius
counting definition; class-function/character orthogonality and Brauer
induction to reduce a conjugacy indicator to induced abelian characters;
CFT/Artin compatibility and the conductor–discriminant comparison for
conductors; the Hecke explicit formula/Perron contour shift; a GRH zero sum
for Thm. 1.1 or the zero-free/zero-density and exceptional-zero analysis for
Thm. 1.3; removal of prime powers and ramified primes. These branches have
separate theorem items and no GRH→unconditional edge. **The conductor–
discriminant local proof is not staged yet**, so the LO effective theorem
proof edges that need it stay proof-gated.

For context and a stronger, genuinely separate uniform theorem, the complete
published T–Z article is *Algebra & Number Theory* 13(5) (2019), 1039–1068,
DOI <https://doi.org/10.2140/ant.2019.13.1039>, full publisher PDF
<https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf>. R2 owns the retrieved
full file `algebraic/r2-sources/thorner-zaman-unified-chebotarev.pdf(.txt)`;
the entire article, §§1–7 and Appendix A, was read. Define
`Q=max_χ N_{K/Q} f_χ` over the relevant characters of an abelian subgroup,
`Qbar=D_K Q n_K^{n_K}`. Its Theorem 3.1 supplies a zero-free region
`Re(s)>1−Δ(|Im(s)|+3)`, with
`Δ(t)≥c₄/log(Qbar t n_K)`, and at most one real simple exceptional zero.
Theorem 3.2 counts zeros with multiplicity
`N(σ,T,χ)=#{ρ=β+iγ: L(ρ,χ)=0, σ<β<1, |γ|≤T}` and proves
`Σ_χ N(σ,T,χ)≪B₁(Qbar T n_K)^{c₅(1−σ)}` for `0<σ<1`, `T≥1`, where
`B₁=min{1,(1−β₁)log(Qbar T n_K)}` when the exceptional zero exists and
the factor is interpreted as one otherwise. Theorem 3.3 gives
`β₁=1−λ₁/log Qbar`, `λ₁≫Qbar^{-2}`, by Stark.

- **T–Z Thm. 1.1.** For `L/F` Galois with `L≠Q`, `x≥(D_L n_L^{n_L})^{c₂}`,
  `π_C=(|C|/|G|)(Li(x)−θ₁Li(x^{β₁}))`
  `·(1+O(exp(−c₃log x/log(D_L n_L^{n_L}))`
  `+exp(−√(c₃log x/n_L))))`; `β₁` is the Landau–Siegel zero of `ζ_L` if
  it exists and `θ₁∈{−1,0,1}`, with `θ₁=0` iff it does not exist.
- **T–Z Thm. 1.4.** Let `H⊆G` be abelian with `H∩C≠∅`, put `K=L^H`,
  choose `g_C∈C∩H`, and let `Q=max_{χ∈Ĥ}N_{K/Q}f_χ`. If
  `x≥(D_K Q n_K^{n_K})^{c₂}`, the same asymptotic holds with `D_L,n_L`
  replaced by `D_K Q,n_K`, `β₁` a real Hecke-character exceptional zero
  `1−λ₁/log(D_K Q n_K^{n_K})` (`0<λ₁<1/8` when present), and
  `θ₁=χ₁(g_C)` when that zero exists, otherwise zero.

T–Z Thm. 3.2's proof expressly uses T–Z 2017 Thm. 3.2, Weiss 1983
Thm. 4.3, and Stark; Thm. 3.1 is supplied from Weiss 1983 Thm. 1.9.
T–Z's full article does not prove those by citation alone, so they remain
separate input items. The new T–Z asymptotic is not a logical consumer of
LO. Its relative Hecke/conductor conversion also remains gated on the local
conductor–discriminant proof.

The Weiss supplier underneath that theorem is also read in full: A. R. Weiss,
“The least prime ideal,” *J. reine angew. Math.* 338 (1983), 56–94,
complete article §§1–4, printed pp. 56–84, including the full Thm. 4.3 proof
(image scan at
<https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf>;
local complete-volume scan `analytic/r1-sources/weiss-least-prime-1983-volume-338.pdf`).
With `ℒ=log(QT^{n_K})`, `T≫1`, `c₆≤α≤1−c₇/ℒ`, `H` a congruence class
group, `d(H)≤Q`, `q(H)=n_K²h_Hd(H)`, and
`Q_H=max(q(H)^{1/2},Q)`, Thm. 4.3 states
`N_H^*(α,Q,T)≪Δ_*(Q_H T^{n_K})^{c₈(1−α)}`. Here `N_H^*` counts with
multiplicity zeros `ρ≠ρ_*` of primitive Hecke characters trivial on `H`,
`Re ρ≥α`, `|Im ρ|≤T`; `Δ_*=(1−β_*)ℒ` for the possible unique exceptional
real simple zero and an absolute constant otherwise. Its proof uses Weiss
Thm. 1.9 (family Landau–Page), §2 ideal sums, Thm. 3.7 (smoothed
Selberg-sieve mean square), and §4 zero detection. §§5–6 are least-prime
applications, deferred from R1.

The complete T–Z 2017 source (Thorner–Zaman, *Algebra & Number Theory*
11(5) (2017), 1135–1197, full publisher PDF
<https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf>, §§1–8) supplies its
own explicit field-uniform input. For a number field `K` of degree `n_K`,
absolute discriminant `D_K`, a congruence class group `H`, the maximum
absolute norm `Q=max_{χ mod H}N_{K/Q}f_χ`, and
`N(σ,T,χ)=#{ρ=β+iγ:L(ρ,χ)=0, σ<β<1, |γ|≤T}` counted with multiplicity,
T–Z Thm. 3.2 states, for `1/2≤σ<1` and
`T≥max{n_K^{5/6}(D_K^{4/3}Q^{4/9})^{-1/n_K},1}`,
`Σ_{χ mod H}N(σ,T,χ)≪{e^{O(n_K)}D_K²Q T^{n_K+2}}^{81(1−σ)}`.
For `1−10^{-3}≤σ<1`, the exponent `81` may be replaced by `73.5`.
The proof extends Weiss's bound to the needed `T` range by Turán power sums,
a Hecke zero detector, Weiss's smoothed Selberg-sieve mean square, and the
field-uniform ideal large sieve; the source develops the required ideal
estimates and their smoothing range locally. T–Z Thm. 3.3 is a separate
Deuring–Heilbronn theorem. If a real Hecke character has real zero `β₁`, then
for every `ε>0`, `T≥1`, and every zero `β₀+iγ₀` of any Hecke character in
the family with `1/2≤β₀<1`, `|γ₀|≤T`,
`β₀≤1−log(c_ε/((1−β₁)log(D_K Q T^{n_K}e^{O_ε(n_K)}))) /`
`(b₁log D_K+b₂log Q+b₃n_Klog T+O_ε(n_K))`, with effective `c_ε>0`;
`(b₁,b₂,b₃)=(48+ε,60+ε,24+ε)` for a quadratic exceptional character
and `(24+ε,12+ε,12+ε)` for a trivial exceptional character. These
hypotheses and alternatives must remain attached to that distinct repulsion
item; it is not a generic zero-free statement.

The unconditional LO asymptotic implies natural density: for a fixed
extension the exceptional term is `o(Li(x))` because `β₀<1`, and its
exponential error is also `o(Li(x))`; hence
`π_C(x;L/F)∼(|C|/|G|)Li(x)`. Apply the same theorem to every conjugacy class
and sum over the finitely many classes; the denominator, the count of
unramified prime ideals of `F`, is then asymptotic to `Li(x)` (the ramified
ideals are finite). The ratio is `|C|/|G|`. This is the R1 natural-density
proof; it is not inferred from the Dirichlet-density theorem.

### Zero-density, explicit zero computations, and Goldbach interface

The full Vaughan course text is `analytic/r1-sources/vaughan-mnt3-571s25.pdf`
from <https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf>. The read ranges
are Ch. 27 pp. 148–183 (large values), Ch. 28 pp. 184–251 (zero density),
and Ch. 29 pp. 252–305 (short intervals). Chapter 28 defines `N`, `N₁`,
`N₂`; Theorem 28.6 gives, for `1/2≤σ≤1`,
`N₂(σ,Q,T)≪(Q²T)^{3(1−σ)/(2−σ)}(log(2QT))^6`, and for `η>0`,
`2/3≤σ≤1`,
`N₂≪_η(log(2QT))^{C(η)}[(QT)^{(2+η)(1−σ)}+(Q²T)^{3(1−σ)/(3σ−1)}]`;
Cor. 28.7 gives the `(12/5)(1−σ)` bound up to logarithms. Thm. 28.14
and Cor. 28.15 provide log-free density and Deuring–Heilbronn inputs.
Ch. 29's historical short-interval method is context; it does not displace
the full Guth–Maynard 2026 proof.

Heath-Brown's complete 1979 paper (*Canadian Journal of Mathematics* 31(2),
231–240, DOI <https://doi.org/10.4153/CJM-1979-024-0>) supplies all three
theorems. With primitive-character zero count `N(σ,T,χ)` including
multiplicity and `Σ(Q)=Σ_{q≤Q}Σ^*_{χ mod q}N(σ,T,χ)`, Thm. 1 gives
`Σ(Q)≪(Q²T)^{2(1−σ)+ε}` for `11/14≤σ≤1`; Thm. 2 gives its stated
`α=6/5`, `A(σ)=5/(3−σ)` alternative; Thm. 3 gives exponent `2(1−σ)` for
`129/167≤σ≤1`. At `Q=1`, Thm. 1 yields
`N(σ,T)≪T^{2(1−σ)+ε}`. The complete proofs, not a table or survey, were read.

The primary Guth–Maynard article is the complete accepted 52-page text at
<https://ora.ox.ac.uk/objects/uuid%3Aad11b8bf-ad2b-4ebf-a627-647f023c378f/files/s73666708v>,
published *Annals of Mathematics* 203(2) (2026), 623–675, DOI
<https://doi.org/10.4007/annals.2026.203.2.6>, official issue page
<https://annals.math.princeton.edu/2026/203-2/p06>. Sections 1–11 and
appendices were read fully. Thm. 1.1 is the exact large-values inequality
above; Thm. 1.2 gives the zero-density exponent; Cor. 1.3 gives the prime
asymptotic for `x^{17/30+ε}≤y≤x^{0.99}`, and Cor. 1.4 gives it for almost all
`x∈[X,2X]` when `X^{2/15+ε}≤y≤X^{0.99}`, with the source's exceptional-set
and error terms retained in the item. Conj. 1.5 is included only as the
source's Montgomery large-value open problem. No “best known” or exhaustive
frontier claim is made. The full July 2026 Turnage-Butterbaugh survey was
read, sections 1–7, but it is secondary context only; its mentions are not
used to prove or certify a current-record claim.

### Platt verification is a finite computation, not a hypothesis

Platt, “Numerical Computations Concerning the GRH,” full accepted article,
*Mathematics of Computation* 85(302) (2016), 3009–3027,
<https://arxiv.org/abs/1305.3087v1>, was read in full, §§2–7. Its Thm. 7.1
proves the bounded Dirichlet-L zero range recorded above; Thm. 7.2 separately
proves central nonvanishing through `q≤2,000,000`. Platt's algorithms, interval
bounds, Turing integral, and the finite theorem are separate planned items.
The article states that the q≤400,000 verification involved `29,565,923,837`
primitive Dirichlet L-functions, about `3.8·10^13` isolated zeros (not
counting those used by Turing's method), and approximately `400,000` core
hours. It reports using the small-q/Booker method through q≈10,400 and the
DFT method above, interval arithmetic throughout, an initial sample step
`5/64`, and up-sampling factors 8, 32, 128, and 512 for ambiguous cases.

The author's full 2011 thesis, *Computing Degree 1 L-Functions Rigorously*,
September 2011, is also retrieved from the author page at
<https://people.maths.bris.ac.uk/~madjp/thesis5.pdf>; the complete local PDF
and extracted text are
`analytic/r1-sources/platt-computing-degree1-l-functions-thesis.{pdf,txt}`.
I read all of Ch. 7 §§7.1–7.6 (printed pp. 80–96), Ch. 2 §§2.5–2.6
(pp. 10–14), Ch. 3 §§3.1–3.2 (pp. 15–31), Ch. 4 §§4.1–4.8 as method
context, and all of Ch. 8 (pp. 97–99). The thesis's Thm. 7.4.1 is the
earlier, distinct verification `q≤100,000`, `qT=100,000,000`; it is not the
later q≤400,000 run. It provides full algorithm/proof context for interval
arithmetic, DFT, up-sampling, and Turing counting, but includes no source-code
repository or per-character output. Its Ch. 8 explicitly identifies size and
precision loss as obstacles to extending the computation.

The author homepage <https://people.maths.bris.ac.uk/~madjp/> links the thesis
and a dataset page. The retrieved full `Datasets/Datasets.html`
(`analytic/r1-sources/platt-datasets-index.html`,
<https://people.maths.bris.ac.uk/~madjp/Datasets/Datasets.html>) contains one
dataset link, for Selberg zeta zeros on `PSL(2,Z)\\H`, not Dirichlet L zeros.
The full arXiv v1 source package for the 2016 paper was downloaded from
<https://export.arxiv.org/src/1305.3087v1> and inspected. Its complete archive
contains only `platt-grh.tex` and `platt-grh.bbl`—the typeset article source and
bibliography—with no code, sign list, Turing values, or certificate data. The
author page and an Internet Archive CDX inventory of its public files were
also checked; the archived list includes the thesis, teaching files, and
Selberg dataset but no GRH output or code bundle. This is a scoped search of
the identified primary public repositories, not a claim that a private or
unindexed copy cannot exist. The file hashes are: 2016 paper PDF
`8fd109aa21345bc3feac4fde2faa7dfb51b4ef1fc9a430f643323612a39ef417`;
paper text `7f9a6c2b9fce4dc8f0b78b9a3836c86919273cbc7c6c07c615c238e22e71fb7a`;
2011 thesis PDF
`459998faf72c2cb1a34eac15f6bfbeca62d68edfadd9e1a9b687490aef133cbf`;
arXiv TeX/bib archive
`a9fde0b0d27f424a028e426893438e6f531f47a5d48a358b0869bdbf5af28f4e`;
homepage `4f4e1df2821af5731dc6b57340b8f8c1a056b71406ba53beb66d2c004f85a942`;
dataset index `d54b766f7b06a357274bc1ea61dd936edcd3d9c8f4ebc1f1da1a97414abf933f`;
saved CDX rows `5551d60c2c59d98a3c7efbf4ecb6bcdd499edd9818bbf6583d7043d572899f5d`.

For independent replay of the published finite theorem, the required input
and evidence are now explicit. Enumerate every primitive character for each
integer modulus `1≤q≤400,000`, with parity and root-number conventions fixed;
set `T_q=max(10^8/q,7.5·10^7/q+200)` for even q and
`T_q=max(10^8/q,3.75·10^7/q+200)` for odd q. For each χ, certify the
completed-L evaluation intervals and signs on the sampling lattice through
`T_q`, all high-precision follow-ups for intervals whose sign was initially
indeterminate, and the Turing-method zero-count enclosure with nonzero
endpoints. Platt's Thm. 3.2 uses the completed gamma/root-number terms, the
integrals of `S_χ(t)=π^{-1}Im∫_{1/2}^{∞}L'_χ/L_χ(σ+it)dσ`, and the staircase
counts between chosen heights; those interval bounds must prove that the
total number of nontrivial zeros in the strip equals the number of certified
critical-line zeros. A replayable run must provide either those per-character
certificates or executable source plus deterministic parameters and all
intermediate outputs sufficient to independently check these inequalities.
The paper gives the algorithms and global theorem statement, not this
per-character certificate package. I do not launch the roughly 400,000-core-
hour computation. The local independent-build theorem therefore remains
data-gated, while the published bounded theorem itself is recorded as a
rigorous computed result rather than as GRH assumed axiomatically.

The exact consumer is Helfgott, “Major arcs for Goldbach's problem,”
arXiv:1305.2897, §4.6 (source read from the full local R3 PDF/text
`analytic/r3-sources/helf-major-arcs-goldbach-arxiv-2013.{pdf,txt}`). In
§§4.6 and its subsequent application of Propositions 4.6/4.8 and Corollary
4.9, Helfgott uses odd `q≤300,000`, `T=10^8/q`, and even
`q≤300,000`, `T=max(10^8/q,200+7.5·10^7/q)`. The odd Platt bound is
`max(10^8/q,200+3.75·10^7/q)`; for `q≤300,000`,
`200+3.75·10^7/q≤10^8/q` (threshold `312,500`), so Helfgott's odd range is
inside it. The even bound agrees exactly. R3's ternary Goldbach chain can
therefore cite `finite-dirichlet-l-zero-verifications` /
`thm-platt-bounded-grh-for-primitive-dirichlet-l-functions`, with the local
run-output gate preserved.

## Full-text reading and disposition map

This is the compact heading/result map; exact complete local paths and all
URLs/page ranges are duplicated in `r1-sources/README.md`.

| Full text actually retrieved/read | Result/headings included, reused, or deferred |
|---|---|
| Green, *The Prime Number Theorem*, all Chs. 1–10 and Apps. A–B, full Oxford PDF, 77 physical pages | Reuse existing arithmetic/zeta/PNT/Perron/Tauberian suppliers; Ch. 7's smoothed explicit formula is the contour-proof model for the new character/Hecke formulas; Ch. 10 sieve belongs R2; RH corollaries remain conditional. |
| Evertse, *Analytic Number Theory: Prime Number Theory*, complete author-hosted Chs. 1–6, printed pp. 61–178 | Chs. 2–5 are foundational overlap/reuse; Ch. 6 fixed-modulus AP is already published and SW/BV go to R2. Its Landau–Page/Siegel/SW/BV statements are context only where proof is referred to elsewhere; the deep zero results use complete Weiss/Siegel sources. Historical least-prime record statements are not current-status evidence. |
| Montgomery–Vaughan, *Multiplicative Number Theory III*, complete Ch. 24 §§24.1–24.3 pp. 40–71 and Chs. 27–29 pp. 148–305 | Ch. 24.1–24.3 proves the approximate Vinogradov mean-value and higher-derivative estimates and the Korobov–Vinogradov zeta/Dirichlet zero-free regions; the generic log-derivative lemma is separately sourced. Ch. 27 large values, Ch. 28 all definitions/density theorems/Linnik/Maier/repulsion, Ch. 29 short intervals: selected estimates included; Linnik/Maier and historical short interval statements are context/deferred; Guth–Maynard primary source supplies the 2026 theorem. |
| Heath-Brown 1979, entire 10-page paper | Thms. 1–3 and every proof included as primitive-character density suppliers. |
| Guth–Maynard 2026, entire 52-page accepted/published paper | Thm. 1.1 large values, Thm. 1.2 density, Cor. 1.3–1.4 short intervals, and Conj. 1.5 open problem included; all sections/proofs read. Not used to claim exhaustive current frontier. |
| Turnage-Butterbaugh 2026, complete 21-page survey, §§1–7 | Secondary history/method context; every claimed proof/status result is checked against a primary source; no theorem supplier is taken from a survey mention. |
| T–Z 2017, *ANT* 11(5), full article §§1–8 | Thms. 3.2–3.3 and full density/repulsion proof chain included; §§9–12 least-prime applications deferred. |
| T–Z 2018, arXiv:1606.09238v2, entire 26 pages | Thm. 4.5 is identified as a restatement of T–Z 2017 Thm. 3.2; reuse only as a cross-check, no duplicate item. Applications are not R1 carriers. |
| T–Z 2019, *ANT* 13(5), complete article §§1–7 and App. A | Thms. 1.1/1.4 and 3.1–3.3 included only after their Weiss/T–Z 2017/Stark inputs are separately supplied; all proof citations are mapped. Not a proof of its own cited inputs. |
| Zaman 2017 thesis, complete Ch. 5, printed pp. 115–138 | Proof-context cross-check for explicit field-uniform density; no separate theorem duplicate. |
| Weiss 1983, entire article §§1–4, printed pp. 56–84, including all of Thm. 4.3 proof | §1 completed Hecke L/log derivative, Stark/Landau–Page Thms. 1.7/1.9; §2 ideal sums; §3 Thm. 3.7 Selberg-sieve mean square; §4 zero detection/Thm. 4.3 density included. §§5–6 least-prime applications deferred. Full image scan was visually read; no OCR/snippet substituted. |
| Stark 1974, complete article, printed pp. 135–152 | §4 proof of Thm. 1′ and its effective exceptional-zero bound included; §§2–3 supporting log derivative/zero/residue estimates read; §5 consequences are context. LO's quotation is not used as the proof. |
| Lagarias–Odlyzko 1977, complete nine sections and references | Thms. 1.1/1.3/1.4 and proof sections 2–7, 9 included. Exact full source is the disclosed complete re-typesetting, not a publisher scan. |
| Platt–Trudgian 2021, complete article | Dated finite zeta-RH theorem and its interval/Turing proof included; no claim about a later/current record. |
| Platt 2017, complete accepted article, §§3–4, Thm. 5.1, Apps. A–C | Interval/FFT/Poisson error and zeta zero certificates included as algorithmic context; finite result dated. |
| Platt 2016, complete accepted article, §§2–7 | Dirichlet-L interval/Turing procedure, Thms. 7.1–7.2 included as bounded computed theorems, with missing replay-output gate stated. |
| Trudgian 2011 and 2016, both complete articles | Explicit `S(t)`/Turing integral estimates included only as algorithmic ingredients; no theorem is conflated with a verified finite conclusion. |
| FLINT official docs, both locally captured complete pages | Implementation/API context only; generated docs are not analytic theorem proof. |
| Neukirch, complete Ch. VII §§1–8, §10 through Thm. 10.6, and all §13 | §§1–2 Mellin/zeta basics; §§3–4 lattice Poisson/theta/gamma; §5 Dedekind zeta simple pole/residue; §§6–8 Hecke character/continuation/FE; §10 Artin factorization/Hecke compatibility; §13 Thms. 13.2–13.4 ray/Hecke/Chebotarev Dirichlet density and Cor. 13.6–13.7 splitting consequences. These are full proof sources for the stated scope. §9 special values and §11 onward were not read/used by R1. |
| Milne, CFT VI §2 pp. 183–191, VI §4 Thms. 4.8–4.10 pp. 197–200, III Thm. 3.23/Rem. 3.26(d) p. 164 | Cross-check only. VI §2 contains a Lang ideal-counting reference; VI §4.10 nonvanishing is checked against Neukirch. The natural-density discussion is not a proof. |
| Siegel 1935, complete printed pp. 83–86 and adjacent scan context | Ineffective class-number proof read visually. It treats both negative and positive fundamental discriminants; the real-character lower bound is not restricted to imaginary quadratic discriminants. |

## Build gates and nonclaims

1. `thm-conductor-discriminant-formula-for-abelian-extensions` is proposed
   upstream by ANT R2 but presently stated without a local proof. Any LO or
   T–Z effective Chebotarev theorem that needs it is not yet a closed proof
   path. Do not report it as proved from Milne's omitted-proof statement.
2. Platt's finite Dirichlet-L theorem is a rigorous published finite
   verification, but the replay data are absent from the staged source
   folder. Keep the independent-build gate visible, especially on the R3
   Goldbach dependency.
3. Do not infer natural density from Dirichlet density. R1's natural density
   uses the unconditional LO asymptotic; ray-class and Neukirch/Milne
   Chebotarev suppliers remain explicitly Dirichlet-density statements.
4. Do not use an ineffective Siegel constant as an effective numerical
   parameter. Do not call fixed-modulus AP PNT a uniform AP theorem. Do not
   call an algorithm an executed certificate.
5. No best-known or fully closed 2026 zero-density/short-interval frontier is
   claimed. Guth–Maynard's dated published results and the fully read survey
   provide precise source/status context only.
6. The finite-field/trace-function/Deligne branch is R3's analytical
   ownership with R4's étale proof prerequisites, not a missing R1 supplier.
7. The A-page open problems are `op-montgomery-large-value-conjecture` and
   `op-hardys-divisor-and-circle-exponent-one-fourth`. The first states
   Guth–Maynard Conjecture 1.5 and depends only on the generic sample
   definition; the second states the divisor/circle `1/4+ε` upper-bound
   conjecture and depends only on the two error-term definitions. No theorem
   consumes either open problem. Other prospective improvements are described
   as directions only unless a complete status source has been read.

## Divisor and circle discrepancy: exact terms, proved bounds, and gates

This is a new two-pair branch extending the existing number-theory average
orders. It uses the squared-radius variable `x`, so a circle of radius
`√x` is counted. Reuse the published arithmetic inputs
`def-two-square-representation-function`, `thm-two-square-representation-count`,
`cor-average-order-of-two-square-representations`, and
`thm-divisor-counting-summatory-estimate`; do not create duplicate versions of
their `r₂` divisor formula or their elementary `O(√x)` summatory estimates.

The canonical local definitions are

```text
d(n) = # { positive divisors of n }
Δ(x) = Σ_{1≤n≤x} d(n) − x log x − (2γ−1)x                    (x≥1)
r₂(n) = # {(a,b)∈Z² : a²+b²=n}                              (n≥1)
P(x) = Σ_{1≤n≤x} r₂(n) + 1 − πx
     = # {(a,b)∈Z² : a²+b²≤x} − πx                         (x≥0).
```

The `+1` is the origin, omitted by the existing arithmetic function's
positive-integer convention. `P` is the usual circle error using squared
radius; it avoids confusing the radius-`R` normalization with the `x=R²`
normalization. The A-page open problem states the conjecture that for every
`ε>0`, both `Δ(x)=Oε(x^{1/4+ε})` and `P(x)=Oε(x^{1/4+ε})`; the source-backed
hardy-scale lower bounds show that an `O(x^{1/4})` bound with no epsilon
cannot hold.

The planned pair boundaries are:

1. `exponent-pairs-and-classical-voronoi-summation` with companion
   `exponent-pairs-and-classical-voronoi-summation-examples`. The A page owns
   the discrepancy definitions, Kolesnik's exact exponent-pair conventions
   and A/B processes, the endpoint-averaged pointwise divisor Voronoï
   identity, and the smooth-test two-square Poisson identity. It
   includes the independently proved circle bound
   `P(x)=Oε(x^{1/3+ε})` from Miller–Schmid §6. The Voronoï kernel formulas
   preserve test-function regularity, endpoint averaging, and Bessel
   normalization exactly. Meurman's full source closes the pointwise formula
   for every positive x, but only for its endpoint-averaged sum with an
   integral kernel. The distinct weighted K₀/Y₀ test-function formula is
   still proof-gated: Miller–Schmid explicitly refers away for its proof, and
   the full Ivić/Hejhal readings do not give a self-contained proof of the
   arbitrary-test formula.
2. `dirichlet-divisor-and-gauss-circle-discrepancy` with companion
   `dirichlet-divisor-and-gauss-circle-discrepancy-examples`. The A page
   consumes the two discrepancy definitions and states each modern theorem
   with its source version, exact epsilon/range convention, and the proof
   prerequisites actually used. The examples/status B page may substitute
   parameters and distinguish source dates, but contains no new theorem or
   open-problem item.

The machine inventories specify this ordering. Pair 1 defines
`def-dirichlet-divisor-error-term` and `def-gauss-circle-error-term`, proves
`thm-divisor-function-subpolynomial-bound`, states Kolesnik's
`def-kolesnik-exponent-pair-framework` and the separate
`thm-kolesnik-a-process-for-exponent-pairs` /
`thm-kolesnik-b-process-for-exponent-pairs`, includes the smooth radial
two-square Poisson identity and Meurman's locally sourced
`thm-gauss-circle-error-bound-one-third-epsilon`, and uses
`thm-voronoi-divisor-summation-formula` for the endpoint-averaged pointwise
identity. The separate
`thm-voronoi-divisor-weighted-k0-y0-summation-formula` is **proof-gated**.
Pair 2 proposes
the full-source theorem items
`thm-balasubramanian-ramachandra-multiplicative-coefficient-count`,
`thm-li-yang-joint-divisor-circle-error-bound`,
`thm-cen-gauss-circle-error-bound-209-over-670`, and
`thm-lamzouri-signed-omega-results-divisor-circle`; the lower-bound item
depends on Voronoï, the B–R coefficient count, and the exact nonvanishing
input. `op-hardys-divisor-and-circle-exponent-one-fourth` depends only on the
two definitions and has no theorem consumers. The B–R theorem depends on the
Korobov–Vinogradov zeta supplier added to the existing A page
`dirichlet-l-zero-free-region-and-exceptional-zero`.

The 2017 Bourgain–Watt source is retained only as a **withdrawn claim**. Its
v1 paper printed Theorem 2 with exponent `517/1648≈0.3137136` for the divisor
and circle errors; the v2 arXiv record (last revised 2023-07-16) marks the
paper withdrawn and states that gaps/faults in Propositions 2 and 3, and a
similar problem in the proof of Proposition 1′ concerning its implicit
Bourgain–Guth reduction, make Theorems 1, 2, and 3 lose theorem status. The
R1 companion includes only the
nonlogical remark `rem-bourgain-watt-2017-preprint-theorem-claims-withdrawn-in-v2`.
No `517/1648` theorem, Huxley input, or §7 sawtooth bound is a supplier or
theorem in the pair inventory. Li–Yang's item does not depend on this
withdrawn theorem; it cites the paper for method input.

For exact statement support of the B–R zero-free prerequisite,
Montgomery–Vaughan MNT III Theorem 24.18, printed pp. 69–70, states that for
an absolute `C>0`, `τ=|t|+4`, and
`σ>1−1/(C(log τ)^{2/3}(log log τ)^{1/3})`, `ζ(σ+it)≠0`; it also gives
logarithmic-derivative, logarithm, and reciprocal bounds in that region.
The proof chain checked in the locally read text is Theorem 24.5 (printed
pp. 46–51), Theorem 24.13 (pp. 62–64), Theorem 24.15/Corollary 24.16
(pp. 66–68), Lemma 24.17 (p. 69), and Theorem 24.18 (pp. 69–70). Theorem
24.17's source proof refers to an earlier general logarithmic-derivative
lemma; the proposed local `lem-log-derivative-bound-from-disc-zero-factorization`
is to prove that exact disc estimate from Poisson–Jensen/Jensen and Cauchy,
not to treat the citation as a supplier. The stronger Dirichlet-L version
is MNT III Theorem 24.19, printed pp. 70–72; it is distinct from the
zero-free theorem used by SW and keeps the possible unique real
quadratic-character zero explicit.

The source result contracts are:

- **Existing baseline:** `Δ(x)=O(√x)` for `x≥1` and
  `P(x)=O(√x)` for `x≥1` are already published locally. They are only the
  elementary starting estimates, not the frontier target.
- **Miller–Schmid:** their §6 proof gives `P(x)=Oε(x^{1/3+ε})` for `x>1`.
  It smooths a radius-`√x` disc by a compact radial mollifier at scale
  `δ=x^{-1/6}`, applies two-dimensional Poisson to the resulting Schwartz
  function, bounds nonzero dual frequencies through the Fourier/Bessel
  transform and `r₂(n)=Oε(n^ε)`, then removes smoothing. The paper also states
  `P(x)=O(x^{1/3})` as Voronoï's earlier result, but only its own
  `Oε(x^{1/3+ε})` derivation is locally proved in this source.
- **Meurman (Astérisque 209, 1992):** R3 has read the complete article,
  §§1–8, printed pp. 265–274. It proves for every `x>0` the endpoint-averaged
  pointwise identity
  `Δ_M(x)=(2/π)Σ_{m≥1}(d(m)/m)∫₀∞cos(2πu)sin(2πmx/u)du`, where
  `Δ_M(x)=Σ_{n<x}d(n)+d(x)/2−x(log x+2γ−1)−1/4` and `d(x)=0` off the positive
  integers. The series is boundedly convergent on compact positive-x
  intervals and uniformly convergent away from integers. At an integer
  endpoint the half-weight is part of the statement. Meurman states that the
  inner integral equals
  `−√(mx)(K₁(4π√(mx))+(π/2)Y₁(4π√(mx)))` by Watson, but does not prove that
  Bessel identification in the article; the planned item uses the integral
  kernel formula actually proved there. For the unstarred library sum,
  `Δ_M(x)=Δ(x)−1/4` when `x` is nonintegral, and
  `Δ_M(x)=Δ(x)−d(x)/2−1/4` when `x` is a positive integer. Therefore the
  endpoint-convention difference is `Oε(x^ε)` by
  `thm-divisor-function-subpolynomial-bound`. This does not by itself prove
  the broader arbitrary-test `K₀/Y₀` weighted transform.
- **Li–Yang (arXiv v2, 2023-09-14):** with exactly the `Δ` and `R` above,
  Theorem 1.2 states `Δ(X),R(X)=Oε(X^{θ*+ε})` for each `ε>0`, where
  `θ*=0.3144831759741…` is the unique value defined in Definition 1.1 by
  equation (1.4). No peer-reviewed publication status is inferred from this
  arXiv version. The paper gives proofs of its first-spacing proposition and
  Bombieri–Iwaniec estimate. The first-spacing proof uses Guth–Maldague's
  small-cap cone estimate; §4 uses Huxley's second-spacing result and the
  Bourgain–Watt 1505.04161v1 §5 double-large-sieve inequality. That complete
  source section is planned as the distinct item
  `thm-bourgain-watt-variant-double-large-sieve`. The Huxley 2003 primary
  proof remains inaccessible and is explicitly gated. Specifically, after
  equation (5.3) the
  paper says that error bounds and other reductions are deferred to [6, §7],
  which is arXiv:1709.04340v1 (withdrawn in v2). Until that step is
  reconstructed locally from valid sources, this remains a fully read
  source theorem statement with an open local proof gate, not a closed
  theorem supplier. The inventory names Li–Yang's first-spacing,
  second-spacing, and final-reduction items; the Huxley, Guth–Maldague, and
  Bourgain–Watt §5 inputs are separate suppliers. R3's source audit gives
  exact read locators and parameter contracts. Huxley remains source-gated;
  the final reduction remains proof-gated because its BW17 §7 source chain
  was withdrawn.
- **Bourgain–Watt (arXiv v1/v2):** R3 read the relevant proof path in the
  23-page v1 paper
  *Mean square of zeta function, circle problem and divisor problem
  revisited*, arXiv:1709.04340v1. Its Theorem 2 in §7 printed the claim that
  both errors are `Oε(X^{517/1648+ε})`, with
  `Δ_BW(X)=½#{(m,n)∈Z²:0<mn<X}−X log X−(2γ−1)X` and
  `R(X)=#{(m,n)∈Z²:m²+n²≤X}−πX`. But the arXiv v2 record
  <https://arxiv.org/abs/1709.04340v2>, revised 2023-07-16, labels the paper
  withdrawn and gives the authors' comment: gaps/faults in the proofs of
  Propositions 2 and 3 and a problem in Proposition 1′'s implicit
  Bourgain–Guth reduction mean “Theorems 1, 2 and 3 lose their status as
  theorems.” The full v2 status page is locally captured as
  `analytic/r1-sources/bourgain-watt-arxiv-1709.04340v2-abs.html`; its SHA-256
  is `00e5d67539b63a10d73c141d584065592b859d930cc634fa7116ea9937710024`.
  The v1 statement is therefore retained only as withdrawn-source context;
  it supplies no theorem or dependency in the plan. Huxley 2003 appears in
  the withdrawn v1 proof, but is not treated as a BW-based supplier.
- **Cen–Gao–Zhang–Zhang (arXiv v1, 2026-10-15):** with
  `E(X)=# {(a,b)∈Z²:a²+b²≤X}−πX`, Theorem 1.1 proves
  `|E(X)|≲ε X^{209/670+ε}` for every `ε>0` and real `X≥4`.
  `209/670 = 0.311940…`, below the Li–Yang exponent. It is a full preprint
  proof, whose proof dependencies include the Guth–Maldague cone estimate,
  Vinogradov mean-value theorem, Robert–Sargos and Watt spacing inputs, and
  the article's local double-large-sieve/pair-count lemmas. The inventory
  names each imported theorem separately; until the exact full-text
  statements and proof ranges are verified in the source audit, these edges
  stay explicit gates. The planned item must not list Li–Yang's theorem as a
  dependency: Cen et al. cite its prior exponent in the introduction, but
  their own proof is separate.
  More specifically, Cen et al. cite Guth–Maldague Theorem 2 for the
  amplitude-dependent cone estimate (their §6/Theorem 6.1),
  Bourgain–Demeter–Guth Theorem 1.1 for the critical degree-five mean value
  `J_{15,5}(J)≪εJ^{15+ε}` (Appendix B), Robert–Sargos Theorem 2 and Lemma 8
  (their proof references §§5 and 6.1), and Watt Lemma 8.2. The B–D–G
  moment-curve decoupling supplier is already present on R3's
  `sharp-l2-decoupling-for-the-moment-curve` A page, but the Guth–Maldague
  cone-envelope input is distinct and must remain a separate supplier.
  Huxley's second-spacing input also remains its own source theorem; none of
  these is supplied by R4's GL3/Kuznetsov pages.

The exact Guth–Maldague contract cited by Cen is: if `f` is Schwartz on
`R³` with Fourier support in the `R^{-1}`-neighborhood of the truncated cone
`Γ`, then for each `α>0`,
`α⁴ |{x:|f(x)|>α}| ≲ε R^ε Σ_{R^{-1/2}<s<1 dyadic} Σ_{τ∈S_s}
Σ_{U∈G_τ(α)} |U|^{-1} ||S_U f||₂⁴`, where
`G_τ(α)={U∥U_{τ,R}: CεR^ε|U|^{-1}||S_Uf||₂² ≥ α²/(#τ)²}` and
`#τ=#{τ∈S_s:f_τ\not\equiv0}`. Its exact wave-envelope and box definitions
are those in Guth–Maldague §§1, 5–6. R3's source review records the read
proof in §§5–9 and Appendix §11.1, Lemmas 19–20; those appendix lemmas give
the support-containment/multiplicity facts that the proof earlier cites from
GWZ20, so they are proved locally in the source and do not create a GWZ20
supplier edge. The standard-cone normalization/local-arc specialization must
be retained. This cone estimate is distinct from the moment-curve decoupling
theorem, which supplies only the critical VMVT input.
- **Lamzouri (published 2026-10-15):** Theorem 1.1 proves the signed
  `Ω⁺` divisor and `Ω⁻` circle lower bounds with respective scale functions
  `(x log x)^{1/4}(log₂x)^{(3/4)(2^{4/3}−1)}` and
  `(x log x)^{1/4}(log₂x)^{(3/4)(2^{1/3}−1)}`. They are unbounded-sequence
  lower bounds; they do not imply the conjectured pointwise upper bounds.
  The proof uses Voronoï and the Balasubramanian–Ramachandra estimate in §3.
- **Balasubramanian–Ramachandra (full source, 1988):** Theorem 1 proves
  `#{n≥1: n g(n)≤x}∼c x(log x)^{λ−1}` for positive multiplicative `g` with
  `g(p)=1/λ` and `g(n)≫n^{-1/16}`. Lamzouri uses it with
  `g(n)=d(n)^{-4/3}`, `λ=2^{4/3}`, and proves a separate circle analogue
  using `ζ(s)L(s,χ₄)`. The six-page source's contour argument is complete
  except that its Lemma 1 expressly cites Montgomery/Walfisz for the
  Vinogradov–Korobov zeta zero-free region. Montgomery–Vaughan MNT III
  Theorem 24.18 supplies that zero-free result; its generic rescaled
  log-derivative lemma remains an explicit local proof prerequisite.

### Frontier wording and source-date conflict

The full Lamzouri article's introduction says Huxley's `131/416` is the
current best upper bound. That sentence is not carried forward as a status
claim: it predates the Li–Yang v2 joint theorem and the later Cen et al. circle
preprint. Bourgain–Watt arXiv:1709.04340v1 printed a smaller `517/1648`
exponent, but the arXiv v2 withdrawal record explicitly says Theorems 1–3
lose theorem status after proof gaps were found. Thus that v1 statement is
not counted as an established upper bound. Cen et al. §1.2 gives the
`209/670≈0.3119403` circle exponent; omissions from a historical table are
not source evidence about proof validity. This dossier records individually
read theorem statements, versions, and withdrawals; it is not an exhaustive
survey of all publication/preprint activity or proof acceptance on
2026-10-23. The library should not label any one result the global “current
best” from this source sample alone.

### Reading map and proof gates for new pairs

| Source | Exact scope used | Build disposition |
|---|---|---|
| Miller–Schmid, arXiv:math/0304187v1, full 22 pp. | Entire §§1–6; formulas (1.3)–(1.7); full direct proof in §6 | Include the Poisson-derived circle `1/3+ε` bound. Formula (1.6) divisor Voronoï proof is referred to Huxley; Meurman separately proves the endpoint-averaged pointwise identity, while the broad weighted formula remains gated. GL3 sections do not supply classical GL1. |
| Kolesnik, *Acta Arith.* 45 (1985), 115–143, complete 15-page scan | Entire paper; §§1–6 and proofs pp. 120–141 visually checked | Include exact theorem/operator statements only with their derivative and nondegeneracy hypotheses. No classical DDP conclusion is inferred from the title or abstract. |
| Bourgain–Watt, arXiv:1709.04340v1, 23 pp.; arXiv v2 withdrawal page | R3 read §1, §3, the Theorem 3 statement in §4, §§5–6, and §7; §§2 and 8 were not included in the proof-path read. The v2 status/comment was retrieved locally. | v1 states `517/1648`, but v2 explicitly withdraws Theorems 1–3 after proof gaps. Include only the B-page status remark; create no theorem or Huxley dependency from the invalid proof. |
| Bourgain–Watt, arXiv:1505.04161v1, 59 pp. | R3 read all of §5 (variant double large sieve) and §10 (second-spacing context); other sections are not claimed as read. PDF SHA `968e5bc1…c44cffa`, text SHA `0ee5a768…393e5f`. | Include the exact proved (5.5) double-large-sieve inequality as `thm-bourgain-watt-variant-double-large-sieve`; it is a direct input to Li–Yang §4 (the (5.12) citation). It does not supply Huxley's second-spacing theorem. |
| Li–Yang, arXiv:2308.14859v2, 32 pp. | R1 read §§1–5 and proofs. R3 checked §3.1–3.2, §§4.1–4.2, and §5 in its input-source audit. | Record Theorem 1.2 as a dated source statement; §5 refers to withdrawn BW17 §7 for the error/reduction bound, so the local theorem remains proof-gated until reconstructed. Its first-spacing, BW15 double-large-sieve, Huxley second-spacing, and final-reduction interfaces are separate items. |
| Meurman, *Astérisque* 209 (1992), pp. 265–274 | R3 records the complete article read, §§1–8 | Include the endpoint-averaged pointwise divisor identity with its integral kernel. Meurman cites, but does not prove, the Bessel K₁/Y₁ evaluation; do not extend this to the arbitrary-test K₀/Y₀ transform. |
| Lamzouri, arXiv:2605.21476v1 / PLMS 133(4), full 14 pp. | Entire §§1–3, proof of Theorem 1.1, and references; TeX checked | Include the signed omega theorem, not as upper-bound evidence. §3 uses Voronoï and Balasubramanian–Ramachandra; exact imported result remains explicit. |
| Balasubramanian–Ramachandra, *Acta Arith.* 49 (1988), pp. 313–322, complete publisher scan | Entire paper visually read; Theorem 1, Lemmas 1–14 and Theorems 2–4 included | Include the multiplicative coefficient-count theorem. Lemma 1 defers the Korobov–Vinogradov zero-free region; the exact MNT III Ch. 24 supplier is read, while the generic log-derivative sublemma remains a local prerequisite. |
| Cen–Gao–Zhang–Zhang, arXiv:2610.21730v1, full 34 pp. | R1 read §§1.1–1.7, §§2–6, Apps. A–B, and references. R3 checked §3.2, §4.16–4.17, §§5.1–5.4, and §§6.1–6.2 for its input-source audit. | Record Theorem 1.1 as a dated preprint claim; Guth–Maldague and BDG are separate read suppliers, while Robert–Sargos's primary proof and Watt's cited Huxley/Huxley–Watt prerequisites remain explicit gates. No implication from R4 GL3/Kuznetsov. |
| Guth–Maldague, arXiv:2206.01093v2, 46 pp. | §1 Theorem 2 context; §§2–3 theorem context/proof path; complete proof §§5–9; Appendix §11.1 Lemmas 19–20. §4, §10, and Appendix §§11.2 onward were not read. | Include the amplitude-dependent cone estimate with its exact selected-sector and wave-envelope definitions. The GWZ20 facts cited in §7 are proved in the source appendix; the standard-cone normalization remains a proof obligation. |
| Bourgain–Demeter–Guth, 2016, 50 pp. | Theorem 1.1 p. 633, §§1–4, Theorem 6.6 and §§6–9 read; §5 was not separately read. | Include the degree-five `s=15` VMVT consequence for Cen; this is separate from Guth–Maldague. |
| Watt, 2004, 97 pp. | Theorem-1 setup and definitions, §§2–4, and complete §8 (Lemmas 8.1–8.2 and proofs, printed pp. 379–385); §§5–7 not claimed read. | Keep Watt Lemma 8.2's exact Cen application as a distinct item; its upstream Huxley 1996 §§14–16 and Huxley–Watt 2000 Lemma 5.3 imports remain proof-gated. |
| Robert–Sargos 2006 and Huxley 2003 | R3 checked source records and exact Cen/Li–Yang citations and hypotheses, but could not retrieve/read either complete primary text. | Keep the exact R–S Theorem 2/Lemma 8 and Huxley second-spacing interfaces source-gated; no snippets or withdrawn BW17 restatements close these proofs. |

R3's current source review is
[`r3-sources/divisor-voronoi-source-review.md`](r3-sources/divisor-voronoi-source-review.md)
(SHA-256 `24a14e13b9e8de57d354fec87325bb55927440bfee94d219584083b3b80071be`).
It identifies K. Chandrasekharan, *Arithmetical Functions*, Ch. VIII,
“Dirichlet's divisor problem,” printed pp. 194–228, DOI
<https://doi.org/10.1007/978-3-642-50026-8_8>, as the exact book locator,
but reports that Springer supplied only a two-page pp. 194–195 preview and
Internet Archive marks the scan access-restricted. R3 also checked Huxley
(OUP 403), Heath-Brown (OUP 403), Titchmarsh (subscription metadata), and
Nasim (AMS PDF challenge); none yielded full text. This is an enumerated
access-limited search, not proof that no copy exists. Meurman's complete
article, read by R3, closes the endpoint-averaged pointwise identity. It does
not close the broader weighted K₀/Y₀ formula; that remains gated. The R1
full-text sources establish the Poisson circle proof and exact modern theorem
statements, while imported spacing and decoupling inputs remain mapped to
exact suppliers or explicit gates.

### Exact Bourgain–Watt double-large-sieve supplier

R3's full-text source audit is
[`r3-sources/li-yang-cen-import-source-review.md`](../r3-sources/li-yang-cen-import-source-review.md)
(SHA-256 `f537f83c9b9a22e3c10b2d0e9f8ec6dda44a1519175ea647aa0830de2606ec5c`).
For Li–Yang's §4 use, R3 read all of §5 and §10 of Bourgain–Watt,
*Decoupling for Perturbed Cones and the Mean Square of |ζ(1/2+it)|*,
arXiv:1505.04161v1, <https://arxiv.org/pdf/1505.04161v1>, printed (5.1)–(5.5),
§5 pp. 13–14. The local full PDF/text are owned by R3 at
`analytic/r3-sources/bourgain-watt-perturbed-cones-arxiv-1505.04161v1.pdf/.txt`;
PDF SHA-256 `968e5bc1dca05f367fb144b1e616e331962da5ee6b8674e02ad91a0edc44cffa`,
text SHA-256 `0ee5a7688c577b0936bc2240dddd34fb6c1944d02ada1693e11d7d19a8393e5f`.

The planned theorem `thm-bourgain-watt-variant-double-large-sieve` has this
contract. Let `d≥1`, let `X,Y⊂R^d` be finite bounded sets, and take positive
`U_i,V_i` such that `|x_i|<U_i` for `x∈X` and `|y_i|<V_i` for `y∈Y`.
For every `2<q<∞`, with `e(t)=exp(2πit)` and
`B_U=∏_{i=1}^d[-U_i,U_i]`, equation (5.5) states
`|Σ_{x∈X}Σ_{y∈Y}e(x·y)| ≲ (∏_{i=1}^d(1+U_iV_i)^{1/q}) |X|^{1−2/q} P_V(X)^{1/q} (⨍_{B_U}|Σ_{y∈Y}e(z·y)|^q dz)^{1/q}`,
where `P_V(X)=#{(x,x′)∈X×X: |x_i−x′_i|<V_i^{-1} for every i}` and `⨍`
is normalized Lebesgue average. The proof defines the discrete measure
`ν=Σ_{x∈X}δ_x`, takes its conditional expectation at coordinate scales
`min(U_i,V_i^{-1})`, applies Hölder and the `L^1`–`L^2` interpolation bound,
and computes the squared `L^2` norm as pair count (5.4). In Li–Yang
arXiv:2308.14859v2 §4, the triple-sum estimate immediately before Lemma 4.4
quotes [6, (5.12)] and says it employs this [5, §5] inequality. The inventory
therefore makes it a direct dependency of the Li–Yang §4 B–I item, not of
Huxley's second-spacing theorem. The latter remains independently
source-gated: R3 could not obtain the full primary 2003 article.
