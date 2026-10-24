# R3: Arithmetic geometry and Diophantine interfaces

**Status: planning scaffold only.** This report, its pair fragment, and its
proposed inventories specify future interfaces. They are not library pages or
proofs. The machine-readable files are
[`r3-sources/pair-fragment.json`](r3-sources/pair-fragment.json) and
[`r3-sources/proposed-inventories.json`](r3-sources/proposed-inventories.json).
The source and reading ledger is
[`r3-sources/README.md`](r3-sources/README.md).

## Scope and ownership

R3 owns the arithmetic spine over global fields: algebraic Jacobians as used
arithmetically; Weil and canonical heights; Mordell–Weil, Selmer and
Tate–Shafarevich groups; rational and integral points; Brauer–Manin and descent
obstructions; arithmetic Chow groups and heights; Faltings/Shafarevich/Mordell
finiteness; transcendence inputs for effective Diophantine bounds; and a bounded arithmetic-dynamics interface spanning number fields, finite-constant
function fields, and polarized higher-dimensional systems. R3 also supplies a
source-backed affine-curve anabelian reconstruction theorem and records the
proper section conjecture as an open problem.

Core scheme and curve foundations, abelian schemes, polarizations, Néron models,
divisors, étale covers, and generic group cohomology remain with published
library pages. In particular, the current algebraic Jacobian items concern
compact Riemann surfaces and do not supply the algebraic Jacobian construction
over a field. R3 therefore adds that finite supplier interface and uses the
existing algebraic curve, Picard, and abelian-variety pages.

R2 owns global and local fields, adeles/ideles, class formations, reciprocity,
Brauer invariants, and general finite-flat duality. R3 depends on R2's planned
`global-fields-and-function-fields`, `adeles-ideles-and-approximation`,
`brauer-groups-and-hasse-invariants`,
`poitou-tate-duality-and-local-global-obstructions`, and
`flat-cohomology-and-finite-flat-duality` pages and their exact items. These
are planned, unpublished suppliers in this run. R4 owns Galois representations
and étale/l-adic cohomology. R3 references R4's planned continuous l-adic
representation and Frobenius-polynomial APIs in the Faltings chain; those are
not substitutes for Faltings' theorem. The affine reconstruction pair consumes
the published étale fundamental-group/fibre-functor interface. R3 does not
consume R4's Deligne trace bounds or Hasse–Weil curve-counting theorem. Analytic R5 owns Schanuel's projective
point-counting theorem; it consumes R3's absolute projective height definition
downstream.

The pair fragment deliberately contains `items: []`; all future item contracts
are listed only in the R3-specific proposed inventory. No combined plan-spec or
combined inventory was edited by R3. The inventory has 21 reciprocal A/B pairs
(42 page rows); the proposed item rows include theorem, definition, example,
remark, and open-problem contracts, but do not assert that any planned item has
been authored or proved in the library.

## Ordered pair plan

The order below follows prerequisites. Exact item IDs, `kind`, and item-level
dependency edges are in the JSON inventory.

| Order | A/B pair | Contract and boundary | Main proof or source gate |
|---:|---|---|---|
| 1 | `algebraic-jacobians-and-canonical-polarizations` | Algebraic Jacobian of a smooth proper geometrically connected curve; representability of Picard zero and the Abel–Jacobi universal property with a rational base point; canonical principal polarization; `Pic¹` as a Jacobian torsor; finite-field Lang vanishing. The `Pic¹` item is a Picard-scheme torsor statement and does not identify a rational Picard-scheme point with a line bundle. | Milne, *Abelian Varieties* III §§1–6; Poonen 5.12.19(a). For curves without a rational point, retain the Picard-functor/descent caveat. |
| 2 | `weil-heights-and-northcott-finiteness` | For a number field K of degree N, with finite local factors `|a|_p=N(p)^−ord_p(a)` and ordinary complex moduli weighted by 2, set `H_K([x])=N((x_i))^−1 ∏_{σ real} max_i|σ(x_i)| ∏_{τ complex up to conjugation} max_i|τ(x_i)|²` and `H_abs=H_K^(1/N)`. Include absolute-height field invariance, Northcott for fixed K, and the Weil height machine with its exact bounded-error scope. | Poonen 2.6.4; Schanuel pp. 435–447 for normalization and constants; Silverman slides for height-machine overview only. The general height-machine proof needs a complete source/proof pass. |
| 3 | `canonical-heights-and-mordell-weil` | For an abelian variety A/K over a number field and a symmetric ample line bundle, define the Néron–Tate height as the quadratic limit; state quadraticity, functoriality, Northcott, and the zero/torsion criterion. State weak and full Mordell–Weil finite generation separately. | Milne, *Elliptic Curves* IV §§1–8 proves the elliptic/Q route in detail and discusses the number-field generalization; full general-abelian-variety proof obligations remain explicit. |
| 4 | `fppf-kummer-sequences-and-torsors` | For A/K of dimension g and n≥2, `[n]:A→A` is finite flat of degree n^(2g); derive the short exact fppf Kummer sequence and its cohomology sequence. State the étale/Galois version only when n is invertible; retain finite-flat duality for p-primary cases. | Milne, *Abelian Varieties* I §7. Consumes R2's generic finite-flat group-scheme and flat-duality contracts; this is the abelian-specific Kummer specialization. |
| 5 | `global-function-field-lang-neron-and-trace` | For a regular function-field extension K/k and an abelian variety A/K, define the K/k-trace and state finite generation of `A(K)/Tr_{K/k}(A)(k)`. | Milne AV I.15.5–15.8; Kahn 2007 proof note plus Kahn 2006 §3 Theorem 3, Néron–Severi theorem, and Appendices A–B. The imported class-group lemma is now source-read; its own inputs (classical Mordell–Weil, Néron–Severi, resolution/alteration results) remain explicit upstream obligations. |
| 6 | `global-function-field-mordell-and-isotriviality` | Over a function field K/k, for a regular projective geometrically integral curve of genus >1, infinite K-points force the curve to be constant in characteristic 0 or isotrivial in characteristic p, with the theorem's genus and constant-field conditions stated. Include Frobenius counterexamples over finite constant fields. | Poonen 9.5.2, pp. 287–288 states and proves the reduction while citing Grauert/Samuel/Voloch. Do not infer a number-field-style finiteness theorem for all function-field curves. |
| 7 | `selmer-groups-and-tate-shafarevich` | For a global field K, A/K, and n≥2, define Sel_n as the subgroup of `H¹(K,A[n])` whose localization lies in each local Kummer image; define `Sha(A/K)=ker(H¹(K,A)→∏_v H¹(K_v,A))`; state `0→A(K)/nA(K)→Sel_n(A/K)→Sha(A/K)[n]→0`. State finite Selmer and the Cassels–Tate pairing between A and A^t with maximal divisible kernels. | Milne EC IV §§1–8; Milne ADT I §6; Poonen–Stoll §§1–8. Generic flat duality is R2-owned. A self-pairing/alternation statement requires a polarization, and alternation requires the source's divisor hypothesis. |
| 8 | `rational-points-and-local-global-obstructions` | Define weak approximation, Brauer–Manin sets, descent/Selmer sets, and the containment of rational points in the Brauer–Manin set. State comparisons of descent and Brauer–Manin sets only with hypotheses explicit. Use the already-published Selmer cubic item on B; add source-backed Châtelet and obstruction-insufficiency examples. | Poonen Ch. 8 §§8.1–8.6. The full Brauer exactness/duality chain consumes R2; no current library étale-cohomology or Brauer supplier is silently assumed. |
| 9 | `arithmetic-chow-groups-and-intersection-pairings` | Define arithmetic varieties and arithmetic Chow groups with Green currents; state the intersection product and arithmetic degree for regular arithmetic varieties with the required projectivity/generic-fibre hypotheses. Include the height of a rank-one normed `O_K`-module used in the Faltings construction: for nonzero `m∈M`, `H(M)=[M:O_Km]/∏_{v|∞}||m||_v^{ε_v}`, with `ε_v=1` real and 2 complex, and `h(M)=[K:Q]⁻¹log H(M)`; product formula gives independence of m. Distinguish the rational Chow product from the integral product, whose hypotheses are stronger (smooth over the Dedekind base). | Gillet–Soulé §§1.1–1.4, 2.1, 3.1–3.6, and 4.1–4.5; normed-module formula from Milne AV IV §6. Section 5.1 is deferred. |
| 10 | `faltings-heights-and-isogeny-finiteness` | Build the coarse moduli and height interfaces for polarized abelian varieties; define stable Faltings height from the determinant of invariant differentials on the Néron model with its archimedean norms; state height comparison, bounded-height finiteness, Tate homomorphism, semisimplicity, and isogeny-class finiteness as separate items. Include Chebotarev/Frobenius contracts. | Full Faltings 1983 §§1–7 and the original 1984 erratum p.381 were read, along with Faltings–Wüstholz *Rational Points* Ch. IV and Ch. V §§1–5. The erratum changes a stationarity step in the bounded-height proof; the A-page must preserve that correction. This closes the primary-text reading gate, while local theorem authoring and source-to-item proof auditing remain required. |
| 11 | `shafarevich-finiteness-for-abelian-varieties` | For fixed number field K, dimension g and finite S, finitely many K-isomorphism classes of g-dimensional abelian varieties with good reduction outside S. | Downstream of Faltings isogeny finiteness; the primary proof chain and 1984 correction are read and recorded above. |
| 12 | `shafarevich-finiteness-for-curves` | For fixed K, genus g≥2 and finite S, finitely many K-isomorphism classes of smooth proper genus-g curves with good reduction outside S. State the Jacobian/Torelli and Kodaira–Parshin inputs. | Milne AV IV §4 and Faltings–Wüstholz Ch. V proof chain; the algebraic Jacobian supplier and Faltings theorem are separate prerequisites. |
| 13 | `mordell-faltings-rational-points-on-curves` | A smooth proper geometrically connected curve C/K of genus at least two over a number field has finite C(K). Keep the ineffective theorem statement distinct from any algorithm for listing points. | Full Faltings–Wüstholz *Rational Points* Ch. V §§4–5 read for the Mordell proof via the Parshin construction and the Faltings finiteness input; Faltings 1983 §§6–7 read as the primary proof. Milne AV IV §5 and Poonen 9.5.1 provide statement/dependency context. No algorithm for listing all points follows. |
| 14 | `linear-forms-in-logarithms-and-effective-diophantine-bounds` | Separate Baker’s general inhomogeneous bound from Waldschmidt’s proved explicit homogeneous bound. Evertse Theorem 5.2 recalls the former for `Λ=γ+Σβᵢ log αᵢ≠0`: degrees at most `d`, primitive-minimal-polynomial coefficient heights `H(αᵢ)≤A`, `H(γ),H(βᵢ)≤B`, arbitrary chosen logarithms, and `|Λ|≥(eB)^(−C)` for effectively computable `C=C(m,d,A,log choices)`; its primary proof remains source-gated. The homogeneous theorem uses absolute projective heights and the printed Theorem 10.1 constant. Use that proved version in Evertse’s effective unit-equation/Thue chain; it does not prove the general additive-γ theorem. | Waldschmidt, IMSc Report 116, Chapters III–IV and VII–X were read; Theorems 7.1 and 10.1 proofs give explicit homogeneous bounds. Evertse Ch. 5 §§5.1–5.3 was read. Its general inhomogeneous Baker theorem is recalled without proof, so retain that separate item as source-gated and do not wire it into the effective subchain. |
| 15 | `siegel-integral-points-and-effective-bounds` | For a number field K and finite S, state finiteness of `Y(O_{K,S})` when `Y=X\D`, X is smooth projective, and either `genus(X)>0` or `#D(\bar K)≥3`; separate the effective unit-equation and Thue subcases. | Faltings–Wüstholz *Rational Points* Ch. V §5, Theorem 5.1 and full proof, printed pp.198–200: the statement is for arbitrary finite S and the proof uses covers plus Mordell–Faltings after a finite extension independent of the integral point. This proof route does not use Roth. The theorem remains ineffective; the effective special cases do not give a general point-listing algorithm. |
| 16 | `arithmetic-dynamics-heights-and-preperiodic-points` | Degree-at-least-two maps of P¹ over a number field: height growth, canonical-height limit and functional equation, zero height iff preperiodic, and Northcott finiteness. Retain Morton–Silverman, Dynamical Lehmer, and the source-exact Q-form Dynamical Lang statements as open items. | Call–Silverman 1993 §1 Theorem 1.1 and Corollary 1.1.1 were read with proof; Silverman Arizona 2010 §§4.1–4.2, 5.1–5.3 supply definitions and conjecture formulations. |
| 17 | `polarized-dynamical-heights-in-higher-dimension` | For a polarized self-map `f*L≅L^⊗d`, `d>1`, define the canonical height, prove its functional equation and the ample number-field zero-height/preperiodic criterion; separately state Carney’s function-field rigidity theorem for zero loci and its finite-constant preperiodic corollary. | Call–Silverman 1993 §1; Carney 2019/2020 §§4–5. The latter gives a theorem about the common zero locus on the Zariski closure and explicitly limits the preperiodic interpretation when constants are infinite. |
| 18 | `function-field-arithmetic-dynamics-and-isotriviality` | Over a one-variable function field, define the P¹ height, rational-map isotriviality after finite extension, and canonical height. State Baker’s positive gap/finiteness theorem under non-isotriviality after every finite extension and its zero-height/preperiodic corollary. Retain the strictly weaker `not isotrivial over K` hypothesis and higher-dimensional positive-gap questions as open items. | Baker 2006 §§1–4 and Appendix A, with the complete proof of its average Green-function input from Baker 2005 §§1–3; selected Berkovich background from Baker–Rumely 2004; Carney §§4–5 for higher-dimensional rigidity. |
| 19 | `manin-peyre-heights-and-tamagawa-constants` | Supply smooth-Fano, base and geometric Picard-rank, effective-cone, adelic anticanonical-height, Peyre `α`, `β`, `τ_H`, leading-constant, and thin-set definitions. State α with the dual effective cone and Picard-lattice Haar normalization; β as `#H¹(K,Pic(X̄))`; and τ by Peyre’s discriminant- and Picard-L-function-normalized adelic measure. | Peyre 2003 §§2–4, especially Definitions 2.3, 3.1, 4.6, 4.8 and pp.334–335; its §1 Definition 1.3 defines the thin-set notion in projective space. The 2024 BBDG §1.1 and §9.2 were read for the thin-set correction and the scope of the proved spherical-Fano families. |
| 20 | `anabelian-reconstruction-and-section-conjecture` | State the arithmetic π₁ extension and affine-hyperbolic type; include Tamagawa’s finite-field affine reconstruction, tame specialization criterion, and relative affine-curve reconstruction over a fixed finitely generated field. Separately state the proper hyperbolic section conjecture for number fields as an open problem. | Tamagawa 1997 Introduction, §§1–6 and §7.A were read; the relative Theorem 6.3/7.2 is sourced without relying on the absolute version’s unread Pop input. Stix’s arXiv 0802.4125 manuscript (internal date 19 Nov 2021) §§1–7 and Appendices A–B give a dated formulation. Carlson–Stix 2026 introduction is a distinction/status locator for étale-topos reconstruction, not evidence that the Galois section conjecture is solved. |
| 21 | `arithmetic-geometry-open-problems-and-frontiers` | Separate open-problem A/B pair for abc, Szpiro, Vojta, Bombieri–Lang, BSD, Sha finiteness, Manin–Peyre, general effective Siegel, and dynamical frontiers. Open items may depend on established formulations but never supply theorem dependencies. | Formulations, dates, proof claims, and exact source limits are recorded below and in the source ledger. No conjecture or claimed proof supplies an item. |

The B-page item `ex-relative-versus-absolute-height-exponents` is strictly the
threshold calculation: for `K/ℚ` with `N=[K:ℚ]` and `B≥1`,
`H_abs([x])≤B` if and only if `H_K([x])≤B^N`. It has no point-count or
asymptotic clause; Schanuel’s counting result is owned by analytic R5.

## Cross-track contracts and exact reuse

* **Global fields:** R2's planned `def-global-field`, `def-place-of-a-global-field`, `def-completion-of-a-global-field-at-a-place`, `thm-product-formula-for-function-fields`, and `thm-weak-approximation-for-global-fields`; reuse published `thm-product-formula-for-number-fields`. R3 separates `H_abs` as `def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field` from `h_abs=log H_abs` as `def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field`; both use the number-field normalization stated above. The published `thm-product-formula-for-number-fields` explicitly assumes `def-axiom-of-choice`, so the height page requires the ZFC/Choice page and its definition, log-height, Northcott, and canonical-height consumers carry AC where they use this route. R5’s Schanuel theorem must inherit that same AC dependency. The planned function-field product formula is not conflated with the published number-field formula.
* **Picard/Jacobian and finite fields:** R3 adds `def-picard-degree-one-torsor-under-jacobian` and `thm-lang-vanishing-for-smooth-connected-group-over-finite-field`. The latter is Poonen 5.12.19(a), whose full proof was read. R2 may use these exact IDs to derive a rational point on Pic¹; R2 separately owns `thm-brauer-group-finite-field-is-zero` and the theorem that turns a rational Picard point into an actual degree-one line bundle. The distinction is mandatory.
* **Flat duality/Kummer:** R3 adds only `thm-fppf-kummer-exact-sequence-for-abelian-variety` and its global cohomology consequence. R2's planned `def-finite-flat-group-scheme-and-cartier-dual`, `def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings`, `thm-local-flat-duality-for-finite-flat-group-schemes`, `thm-global-flat-duality-number-field-finite-sheaves`, and `thm-global-flat-duality-finite-constant-field-curves` supply general duality. Published `def-fppf-sheaf-and-sheafification` and `lem-multiplication-by-n-on-abelian-scheme` are reused.
* **Local/global obstructions:** R3 consumes R2's planned `thm-global-brauer-hasse-noether-exact-sequence-number-field`, `thm-global-function-field-brauer-hasse-sequence`, local invariant maps, and `poitou-tate-duality-and-local-global-obstructions`. The published counterexample `cex-local-global-fails-for-a-cubic-curve` is reused and is not redeclared in R3's inventory. The published étale-π₁ items `def-etale-fundamental-group-and-fibre-functor` and `thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets` support finite étale descent terminology but do not supply étale cohomology.
* **Faltings/Frobenius:** R3's `faltings-heights-and-isogeny-finiteness` plans `thm-faltings-tate-hom-isomorphism` and `thm-faltings-semisimplicity-of-tate-module`. These are not supplied by R4's planned generic Galois definitions. R4's exact `def-continuous-l-adic-galois-representation`, `def-unramified-galois-representation-at-a-place`, and `thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial` are only representation/Frobenius APIs; they do not prove Faltings's Tate theorem. R2's Chebotarev pair remains an explicit prerequisite.
* **Manin–Peyre constants:** `def-peyre-beta-factor` consumes R2’s planned `def-absolute-galois-group-of-a-global-field` and published `def-group-cohomology-as-a-derived-functor`; `def-peyre-tamagawa-measure` consumes the published `def-arithmetic-frobenius-coset` and `thm-unramified-frobenius-element-exists-uniquely` for the local Picard L-factors. These supply definitions of the Galois module and Frobenius factors; they do not assert the conjectural point-count.
* **R3 threshold example:** For `K/ℚ` of degree `N` and real `B≥1`, the B item records only `H_abs([x])≤B ⇔ H_K([x])≤B^N`, using `H_abs=H_K^(1/N)`. It makes no counting, asymptotic, or error-term assertion and depends only on R3's multiplicative-height definition.
* **Projective-height count (R5):** R5’s `projective-height-counting-over-number-fields` A page owns `thm-schanuel-height-counting-in-projective-space-over-a-number-field` and the constant definition. Its fixed-K contract is `#P^{m−1}(K)(H_K≤X)=C_{K,m}X^m+O(X^{m−1/N})`, `C_{K,m}=h_K κ_{K,m}/ζ_K(m)`, `κ_{K,m}=((2^{r₁}(2π)^{r₂})/√|D_K|)^m m^{r₁+r₂−1}R_K/w_K`, with `(m,N)=(2,1)` error `O(X log X)`. Substitution `X=B^N` belongs to R5’s theorem/example contract, not the R3 B item.

## Open problems, status dates, and excluded proof claims

The Manin A-pair makes every symbol in the conjectural constant an explicit
contract. For a number field K, a smooth Fano variety is smooth, projective,
geometrically integral, with ample anticanonical bundle. The height comes from
an adelic metric on an ample line bundle, using Peyre’s product-formula
normalization. Write `ρ=rank Pic(X)` for the base Picard rank in the exponent,
`C_eff^1(X)⊂Pic(X)⊗R` for the closed effective cone, and
`C_eff^1(X)^∨⊂Pic(X)^∨⊗R` for its dual. Under Peyre’s stated convergence
hypotheses, the alpha factor is

`α(X)=1/(ρ−1)! ∫_{C_eff^1(X)^∨} exp(−⟨−K_X,y⟩) dy`,

where `dy` is Haar measure normalized so the dual Picard lattice has covolume
one. The beta factor is `β(X)=#H¹(K,Pic(X̄))`. For the local factors, take
`λ_v=L_v(1,Pic(X̄))` at finite places outside a finite bad set and `λ_v=1`
otherwise; Peyre’s measure is

`ω_H = lim_{s→1}(s−1)^ρ L_S(s,Pic(X̄)) |D_K|^(−dim(X)/2) ∏_v λ_v^(−1) ω_{H,v}`,

with `ω_{H,v}` the local measure from the anticanonical metric. Then
`τ_H(X)=ω_H(closure(X(K)) in X(A_K))` and Peyre’s constant is
`c_H=α(X)β(X)τ_H(X)`. The finite union definition of a thin set
separates type I proper closed subsets and type II images of dominant
generically finite covers of degree at least two with no rational section; it
is a definition item, not an open-problem dependency. These formulas follow
Peyre 2003 Definitions 2.3, 4.6, 4.8 and pp.334–335; the exact hypotheses
from §§3.3 and 4.5 must travel with the eventual item statements.

The open-problem inventory contains exact formulations, not logical suppliers:

* **abc:** for coprime integers `a+b+c=0`, `log max{|a|,|b|,|c|} ≤ (1+ε)∑_{p|abc}log p + O_ε(1)` for every ε>0. Vojta §22 and Scholze–Stix §1.1 were read for formulations. Scholze–Stix §2.2 records one 2018 objection to the IUT proof proposal and the report also records dissent; this is not an accepted proof or a complete October 2026 survey.
* **Szpiro:** Masser's exact form is `|D_min(E)|≤C(ε)N(E)^(6+ε)` for E/Q. Pasten's 15 September 2026 preprint proves the weaker unconditional Faltings-height bound `h(E)≪N log log N`, and `h(E)≪_S N` for curves semistable outside fixed S. It labels the conjecture as conjectural. This is dated progress, not proof of Szpiro. Recheck status before using a current-status label.
* **Vojta:** Conjecture 14.6 over a number field, with the source's smooth projective X, normal-crossings D, canonical K, ample A, finite S, proximity term `m_S(D,x)`, and exact height inequalities: on a generic subset `Σ⊂X(k)\Supp D`, `m_S(D,x)+h_K(x)≤O(log⁺h_A(x))`; and, for every ε>0, outside a proper closed Z depending on X,D,A,ε, `m_S(D,x)+h_K(x)≤εh_A(x)+C` for almost all rational x. Do not replace this contract with an unqualified shorthand inequality.
* **Bombieri–Lang:** Poonen 9.5.3's non-density conjecture for positive-dimensional geometrically integral varieties of general type over number fields, plus stronger Lang finiteness only as a separately named strengthening.
* **BSD:** for E/Q, Milne EC IV §10.5 predicts `ord_{s=1}L(E,s)=r=rank E(Q)` and `lim_{s→1} L(E,s)/(s−1)^r = Ω_E · Reg(E/Q) · #Sha(E/Q) · ∏_{p bad}c_p / #E(Q)_tors²`, with the usual finite-Sha premise for the leading-term expression, real period Ω_E, Néron–Tate regulator, and local Tamagawa numbers `c_p`. Its 2006 status is not claimed to be current.
* **Sha finiteness:** the conjecture that `Sha(A/K)` is finite, distinct from finiteness of each `Sha[n]` or each Selmer group. A finite-level theorem does not imply this conjecture.
* **Manin–Peyre:** the R3 Manin pair now supplies the smooth-Fano, Picard-rank, effective-cone, adelic anticanonical height, α, β, Tamagawa measure, leading constant, and thin-set definitions as separate contracts. The open item states the thin-set form for smooth Fano varieties over Q with Zariski-dense rational points: for a suitable dense open U and thin exceptional set Z, `N(U(Q)\Z,H;B) ∼ α(X)β(X)τ_H(X) B(log B)^(ρ−1)`, with `ρ=rank Pic(X)` in the stated normalization. Peyre 2003 supplies the normalization; BBDG 2024 §1.1 and §9.2 record the correction and prove only its stated smooth spherical-Fano cases. Their result is not generalized beyond its hypotheses.
* **Dynamical conjectures:** `Morton–Silverman` bounds preperiodic points for fixed projective dimension n, map degree d, and field degree `[K:Q]≤D`; `Dynamical Lehmer` states `\hat h_φ(β)≥C(φ)/[K(β):K]` for a wandering `β∈P¹(K̄)` when `φ∈K(z)` has degree at least two; `Dynamical Lang` is included only in the source-exact Q/minimal-map formulation, with `\hat h_φ(β)≥C(d)h(φ)` for wandering `β∈P¹(Q)`. The 2010 notes are a formulation source, not a present-day status review.
* **General effective Siegel:** the finiteness theorem and effective unit/Thue special cases are distinct. No item claims an algorithm deciding or listing all integral points on an arbitrary hyperbolic curve.

The anabelian pair distinguishes three interfaces: Tamagawa’s established
relative reconstruction theorem for affine hyperbolic curves over a fixed
finitely generated field, the separate proper section conjecture over number
fields, and 2026 étale-topos reconstruction. The latter reconstructs schemes
from étale topoi up to universal homeomorphism in its stated settings; it is
not the Galois section conjecture. The absolute affine reconstruction statement
in Tamagawa’s 1997 paper uses Pop’s birational theorem, whose full source was
not read here, so that absolute extension is not claimed as source-complete.

The exact affine suppliers are restricted to smooth affine hyperbolic curves
`U_i/k_i` (genus `g_i`, `n_i>0` punctures, `2−2g_i−n_i<0`). Tamagawa’s
finite-field theorem identifies `Isom(U_1,U_2)` with the isomorphisms of
profinite arithmetic fundamental groups modulo inner automorphisms of the
geometric group when the fields `k_i` are finite. The relative Theorem 6.3/7.2
gives the corresponding bijection for `G_k`-equivariant isomorphisms when both
curves are over one fixed field `k` finitely generated over `ℚ`. Theorem 5.7
is a separate tame-specialization criterion: for an open normal subgroup `H`
of the tame arithmetic group, it contains the geometric specialization kernel
exactly when its image contains inertia `I` and the image of `I` in
`Out(\bar H^{p′})` is trivial, where
`\bar H=H∩π_1(U_{k^sep})`; the quotient is the maximal prime-to-p quotient.
The item must retain its strictly henselian trait and hyperbolicity assumptions.
The proper section-conjecture item states that for a proper hyperbolic curve
`X/K` with `K` a number field, the map from `X(K)` to conjugacy classes of
splittings of `1→π_1(X_{\bar K})→π_1(X)→G_K→1` is bijective. Stix’s read
manuscript states that formulation and a dated status; it does not supply a
2026 status audit.

Function-field dynamics is split by dimension and constants. Baker’s P¹ theorem
requires the map not be isotrivial after any finite extension; his Remark 1.7(i)
explicitly leaves the weaker “not isotrivial over K” condition unresolved.
Carney’s higher-dimensional theorem proves rigidity of canonical-height-zero
sets on the common Zariski closure; for two polarized systems on the same
projective variety over a transcendence-degree-one function field, the zero
loci agree on the Zariski closure of their intersection. Over finite constant
fields the theorem gives the corresponding preperiodic-locus corollary. Over
infinite constants, height zero need not mean preperiodic, and no general
higher-dimensional positive-height-gap theorem is asserted.

For `φ∈K(z)` of degree at least two over a one-variable function field, Baker’s
Theorem 1.6 states that if `φ` is not isotrivial after any finite extension,
then some `ε(φ,K)>0` has only finitely many `P∈P¹(K)` with
`\hat h_φ(P)≤ε`; Corollary 1.8 gives `\hat h_φ(P)=0` iff `P` is preperiodic
for `P∈P¹(\bar K)`. Baker’s Remark 1.7(i) explicitly leaves the weaker
condition “not isotrivial over K” unresolved in that source. This exact gap is
an `op-` item, not a theorem dependency.

## Computation versus proof

The inventory separates the effective procedures from their correctness
statements. `alg-enumerate-solutions-of-two-variable-number-field-unit-equation`
takes a represented number field and fixed nonzero coefficients `α,β`, returns
all unit pairs solving `αx+βy=1`, and uses the explicit homogeneous logarithmic
bound plus the computed unit lattice to derive a finite search region. Its
separate theorem item records termination, exact substitution for soundness,
and the Baker-derived bound for completeness. The Thue algorithm takes a binary
form with at least three distinct roots and nonzero right side, reduces through
the source proof to finitely many unit equations, and has its own soundness and
completeness theorem. This is a high-level algorithm contract, not a claim that
a particular code implementation or complexity analysis has been supplied.
The general additive-γ Baker bound is separate and not a hidden prerequisite.
General Siegel finiteness remains ineffective. Numerical searches,
height-bounded enumeration without an explicit bound, and conjectural rank/Sha
computations do not prove completeness.

## Current validation snapshot

R3's unique fragment has 21 reciprocal A/B pairs. Its unique item inventory has
matching entries for all 42 pages and 167 planned item contracts. The inventory
is a proposed DAG projection only. It does not validate mathematics, source
completion, or publication readiness; the report records outstanding imports
and source-to-item authoring obligations separately.
