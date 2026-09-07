# Research report — products, stability, and asymptotics

## Agent record

| field | record |
|---|---|
| canonical agent/task name | `/root/symmetric_scaffold/symr_articles_products_asymptotic` |
| model | `gpt-5.6-terra` |
| reasoning effort | `high` |
| exact assignment | Retrieve and inspect complete authoritative articles/notes on outer induction/restriction and symmetric-function Hopf structure, Kronecker coefficients and Murnaghan/reduced stability, FI-modules/character polynomials/representation stability, and Plancherel/asymptotic symmetric-group representation theory; distinguish the two products and identify honest proof and ownership boundaries. |
| start state | Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/beta-scaffold.md`, the commission and report contract, completed reports 1–5, `initial-audit.md`, `ownership-seams.md`, the exact RG-8–RG-11 prose, and RL-8.  RG-8–RG-11 and RL-8 are registered *planned* suppliers with empty inventories, not published library pages. |
| completion state | Six full PDFs were retrieved to the assigned ignored cache, validated, text-extracted, and read in the exact ranges recorded below.  This report is ready for synthesis; it edits no plan, live content, or Git state. |

## Full-text evidence

All originals and their successful MuPDF text extractions are under
`/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/`.
For each PDF, `mutool info` parsed the page tree; `mutool draw -F txt` successfully
extracted selectable text.  I inspected the final reference/end-matter page as well as
the stated mathematical range; none is an abstract, preview, or table of contents.

The exact absolute original paths (and correspondingly named `.txt` extractions) are:

- `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/cefs-fi-modules-2012.pdf`
- `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/briand-orellana-rosas-kronecker-stability-2009.pdf`
- `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/pak-panova-kronecker-bounds-2014.pdf`
- `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/ivanov-olshanski-kerov-clt-2003.pdf`
- `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/aguiar-bergeron-sottile-combinatorial-hopf-algebras-2003.pdf`
- `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/products-asymptotic-articles/muth-graded-skew-specht-2014.pdf`

| id | full bibliographic identity and type | authoritative full-text URL; local original; SHA-256; completeness | actually read |
|---|---|---|---|
| S1 | Thomas Church, Jordan S. Ellenberg, Benson Farb, *FI-modules and stability for representations of symmetric groups*, arXiv:1204.4533v4, 2014 (published article version; source type **article/preprint**) | [arXiv PDF](https://arxiv.org/pdf/1204.4533); `cefs-fi-modules-2012.pdf`; `1ff5dd9de3e3663dfa8ceec86e69c1b97448d02630981b22587994be48746e96`; **54 PDF pages**, final page is the completed bibliography/end matter. | Introduction pp. 2–8; §§2–4, pp. 10–34, especially Defs. 2.3.4, 3.1.1, 3.2.1, Thms. 3.3.4 and 3.4.1; this includes the proof of the finite-generation/stability equivalence. |
| S2 | Emmanuel Briand, Rosa Orellana, Mercedes Rosas, *The stability of the Kronecker product of Schur functions*, arXiv:0907.4652v2, 2009; later *J. Algebra* 331 (2011), 11–27 (source type **preprint/article**) | [arXiv PDF](https://arxiv.org/pdf/0907.4652); `briand-orellana-rosas-kronecker-stability-2009.pdf`; `497b2e2219b85a65067662c6a83aeccb8e440f15332bcb17d3842bcf7010ddb0`; **16 PDF pages**, last page closes the references and author addresses. | Entire article, pp. 1–16: Murnaghan theorem and examples; Thms. 1.1–1.5, Lemma 2.1, Lemma 3.1 and Thm. 3.2, plus the proof architecture of §4. |
| S3 | Igor Pak, Greta Panova, *Bounds on the Kronecker coefficients*, arXiv:1406.2988v2, 2014 (source type **preprint/article**) | [arXiv PDF](https://arxiv.org/pdf/1406.2988); `pak-panova-kronecker-bounds-2014.pdf`; `4bec1c86ca1a740657658eb1ef4998f113eba6661a4f7f4e7b27827013dc6eea`; **18 PDF pages**, final page closes references. | Entire article, pp. 1–18; close reading of §1, §§2.3, 4.1–4.3, and §7.2–7.3, including Thms. 1.1–1.2, 4.1, Cor. 4.2, Reduction Lemma 4.3, Example 4.4. |
| S4 | Vladimir Ivanov, Grigori Olshanski, *Kerov’s central limit theorem for the Plancherel measure on Young diagrams*, arXiv:math/0304010v1, 2003; survey-paper version in *Symmetric Functions 2001*, NATO Science Series II 74 (2002), pp. 93–151 (source type **article/preprint**) | [arXiv PDF](https://arxiv.org/pdf/math/0304010); `ivanov-olshanski-kerov-clt-2003.pdf`; `fc2296c027b3feb0ff6c894f9ab594d35b5d79e489795280ee70315235af1362`; **49 PDF pages**, last page completes references. | Introduction pp. 1–5; §§1–5, pp. 5–28; §§6–8, pp. 29–43; §9 and references pp. 44–49.  In particular the LLN, the character CLT, and diagram CLT proofs, not merely their statements. |
| S5 | Marcelo Aguiar, Nantel Bergeron, Frank Sottile, *Combinatorial Hopf algebras and generalized Dehn–Sommerville relations*, arXiv:math/0310016v1, 2003; *Advances in Mathematics* 191 (2005), 275–348 (source type **article/preprint**) | [arXiv PDF](https://arxiv.org/pdf/math/0310016); `aguiar-bergeron-sottile-combinatorial-hopf-algebras-2003.pdf`; `f495cc5aaa033e4e1b96ee9bc09a1fca86520537daea3ac934f77eb867af4170`; **34 PDF pages**, final page is the completed bibliography and author addresses. | §§1–4, pp. 4–17, and §7, pp. 28–30.  This is a proof-bearing Hopf-algebra check, not a source for the Frobenius characteristic itself. |
| S6 | Robert Muth, *Graded skew Specht modules and cuspidal modules for Khovanov–Lauda–Rouquier algebras of affine type A*, arXiv:1412.7514v2, 2015 (source type **preprint/article**) | [arXiv PDF](https://arxiv.org/pdf/1412.7514); `muth-graded-skew-specht-2014.pdf`; `46c44528549a6152d1ee2781102cb5d430f9db29b4c0f7fddbfa2e76a16ddd36`; **32 PDF pages**, final page completes references and author address. | Introduction pp. 1–2; §§4–6, pp. 12–22, especially Thms. 5.12–5.15 and Remark 5.14.  It is a rigorous graded KLR skew-Specht source and an important convention/boundary check, but is *not* silently substituted for a classical ungraded skew-Specht proof. |

The prior, independently validated full Macdonald cache of researcher 2 was also
consulted as an overlap audit, not counted again here:
`.../symmetric-functions-textbook/macdonald-symmetric-functions-and-hall-polynomials-2e.pdf`;
Macdonald I §§5, 7 and Appendix A §§5–7 prove the symmetric-function/Frobenius
characteristic side of the outer-product interface.  Its report supplies exact pages and
hash.  James §16 and §§21–22 in researcher 1's validated textbook cache independently
support the LR/outer-product and rim-hook routes.  This avoids pretending that S5, a
general Hopf reference, itself proves the symmetric-group characteristic map.

## Conventions, products, and existing ownership

Work over a characteristic-zero splitting field (usually `C`) whenever characters,
Specht irreducibility, semisimple restriction, or the Frobenius characteristic is used.
For `λ ⊢ n`, write `S^λ` and `χ^λ`; write `λ[n]=(n-|λ|,λ_1,λ_2,...)` only when
`n-|λ| ≥ λ_1`.  It is vital to retain these two operations:

| operation | input/output | symmetric-function image | coefficient |
|---|---|---|---|
| **outer induction product** | `R(S_a)⊗R(S_b) → R(S_{a+b})`, `(U,V) ↦ Ind_{S_a×S_b}^{S_{a+b}}(U⊠V)` | ordinary multiplication `s_λs_μ` | LR coefficient `c^ν_{λμ}` |
| **restriction coproduct** | `R(S_n) → ⊕_{a+b=n} R(S_a)⊗R(S_b)` | `Δs_ν=Σ_{λ,μ}c^ν_{λμ}s_λ⊗s_μ` | same LR coefficient |
| **internal/Kronecker product** | `R(S_n)⊗R(S_n) → R(S_n)`, `(U,V) ↦ U⊗V` with diagonal action | `s_λ*s_μ` | `g(λ,μ,ν)` |

Thus LR positivity is an outer, cross-rank theorem; it is not a combinatorial rule for
Kronecker coefficients.  On power sums the decisive separation is
`p_ρ*p_σ=δ_{ρσ}z_ρp_ρ`, whereas outer multiplication concatenates cycle data.  Murnaghan
stability belongs to the latter, same-rank operation after *padding*, not to LR induction.

**Ownership audit.** RG-8 owns diagrams/tableaux and permutation modules; RG-9 owns
complex Specht construction/classification; RG-10 owns one-box branching, Young's rule
and its Schur--Weyl interface; RG-11 owns hooks, hook formula and RSK.  They are planned,
not published.  The new track can inherit them by their intended IDs but must add the
graded all-rank product/coproduct, not duplicate one-box branching or RSK.  RL-8 is also
planned, and owns the stable-rank polynomial-`GL_r` tensor LR theorem.  SYMR instead owns
the `⊕_n R(S_n)` outer product/restriction and the skew-character/Specht consequence;
it should cite rather than replicate RL-8's `def-littlewood-richardson-tableau-and-coefficient`
and `thm-littlewood-richardson-tensor-product-rule`.  Macdonald's Frobenius map makes the
numeric coincidence transparent but does not identify the categories.

## Mathematical harvest

### A. Outer product, coproduct, and the genuine Hopf interface

**S5, §§1–4, especially Definition 2.1, Theorems 1.5, 4.1 and 4.3 (pp. 4–17).**
For a field `k`, a combinatorial Hopf algebra is graded connected, locally finite, and
equipped with a multiplicative character.  S5 proves: each character factors uniquely
as an even times odd character (Thm. 1.5), `(QSym,ζ_Q)` is terminal (Thm. 4.1), and
`(Sym,ζ_S)` is terminal among *cocommutative* combinatorial Hopf algebras (Thm. 4.3).
The proof constructs the unique map by iterating the coproduct and evaluating the
character, checks multiplication by convolution, and checks cocommutativity forces the
image into `Sym`.  §7 computes the even/odd subalgebras of `Sym`; it is a useful check
that this is Hopf structure over a field, not an integral Specht-module assertion.

**Disposition.** This supplies a proof-sized general Hopf vocabulary and an independent
check on the product/coproduct architecture.  It does not prove that the representation
ring maps to `Sym`; the local proof for that must use Macdonald I §7: cycle types and
Frobenius reciprocity prove multiplicativity, `ch(χ^λ)=s_λ`, and restriction gives the
coproduct.  In a proposed SYMR item, prove the characteristic-map identity first and
then use the associativity/coassociativity inherited from induction/restriction (or prove
the Mackey-compatible statement).  The proposed destination is a new all-rank
Frobenius-characteristic/Hopf A-page, dependent on RG-9 characters and the finite
induction/Frobenius reciprocity supplier, not RL-8's `GL_r` tensor page.

**Skew Specht gap and correction.** Macdonald I §5 proves `s_{ν/λ}` and its Hall-adjoint
identity, and I §7 Ex. 3 states the corresponding skew-character/restriction fact; this
is enough for a sourced *character* interface but is not itself a classical integral
skew-Specht construction.  S6 Introduction defines, in semisimple characteristic zero,
`S^{λ/μ}=Hom_{S_{|μ|}}(S^μ,Res S^λ)` and records its standard-skew-tableau basis;
its Theorem 5.13 proves an analogous **graded KLR** restriction filtration with factors
`S^μ ⊠ S^{λ/μ}`.  Crucially, Remark 5.14 gives an explicit positive-characteristic
counterexample to identifying its KLR module with the classical `F S_n` skew Specht:
the former can be irreducible while the latter is regular/reducible.  Therefore:

- Use Macdonald plus the already cached James treatment for the ordinary-character/outer
  LR proof route; label the classical skew Specht module statement as an externally
  sourced interface until a full James--Peel proof is harvested.
- Do **not** use S6 to prove the ungraded classical result or make a KLR page depend on
  this outer-product page; S6 belongs to the existing KLR ownership branch.
- A safe example is `s_{(2,1)}s_{(1)}=s_{(3,1)}+s_{(2,2)}+s_{(2,1,1)}`: it is outer
  induction from `S_3×S_1`, not `(S^{(2,1)}⊗S^{(1)})` (which is not even same rank).

### B. Kronecker coefficients and Murnaghan/reduced stability

**Definition and irreducible-character proof route.** For `λ,μ⊢n`,
`χ^λχ^μ=Σ_{ν⊢n}g(λ,μ,ν)χ^ν`; character orthogonality gives
`g(λ,μ,ν)=⟨χ^λχ^μ,χ^ν⟩_{S_n}`.  Hence nonnegative integrality and `S_3` symmetry
follow from semisimplicity, commutativity of pointwise character multiplication, and
self-duality of `S_n` irreducibles.  This is the correct modest local proof route for a
definition/basic-symmetries item.  It requires `C` (or a splitting field of characteristic
zero), `λ,μ,ν⊢n`, and the RG-9 classification plus the published character-inner-product
supplier.  It says nothing positive-combinatorial about the values.

**S2, Murnaghan theorem and Thms. 1.1–1.2; Lemma 3.1/Thm. 3.2 (pp. 3–10).**
For fixed partitions `α,β`, S2 defines the padded partitions `α[n]` and proves/uses
Murnaghan's expansion
`s_{α[n]}*s_{β[n]}=Σ_γ \bar g^γ_{αβ}s_{γ[n]}` for all sufficiently large `n`, with
finitely many nonzero nonnegative reduced coefficients and triangle inequalities on
`|α|,|β|,|γ|`.  The exact global stabilization threshold in their convention is

`stab(α,β)=|α|+|β|+α_1+β_1`  (S2 Thm. 1.2).

The proof is worth preserving: Lemma 3.1 translates stabilization to
`max{|γ|+γ_1 : \bar g^γ_{αβ}>0}`.  Lemma 2.1 expands a reduced coefficient into
nonnegative Kronecker/LR summands.  LR bounds the maximum from above; the
Murnaghan--Littlewood special case `\bar g^{α+β}_{αβ}=c^{α+β}_{αβ}=1` reaches it.
This gives a proof plan only after the outer LR supplier is explicit.  The recovery formula
in S2 Thm. 1.1 is a signed sum of reduced coefficients; do not call it a positive rule.

**Worked boundary.** S2's `α=β=(2)` example stabilizes at `n=8`, i.e. at
`s_{(6,2)}*s_{(6,2)}`; the threshold formula gives `2+2+2+2=8`.
At small degree Jacobi--Trudi sequences can be zero or signed Schur functions, so one
must not write `α[n]` as a partition before `n≥|α|+α_1`.

**S3, Theorem 4.1/Corollary 4.2/Reduction Lemma 4.3 (pp. 7–9).**
This independently proves a stronger *conditional* stabilization statement.  If
`λ,μ,ν⊢n`, `λ_1≤μ_1≤ν_1`, `s=n-ν_1`, and
`min(λ_k,μ_k)≥max(λ_{k+1},μ_{k+1})+s`, then for every `t≥0`,
`g(λ,μ,ν)=g(λ+(t^k),μ+(t^k),ν+(t^k))`.  The proof applies the Reduction Lemma:
if some row difference exceeds `s`, the coefficient is zero; otherwise a reduction map
produces an equal coefficient of size at most `2sℓ^2`.  Under the displayed separation
condition the reductions of the original and padded triples coincide.  Cor. 4.2 gives the
`k=1` form and identifies the stable value under its stated inequality.  The global
Theorem 1.1 proves `k`-stability: `G_k(t)=g(λ+(t^k),μ+(t^k),ν+(t^k))` is bounded and
monotone increasing, hence eventually constant; it uses Manivel's inequality after the
reduction argument.

**Counterexample/hypothesis test.** S3 Example 4.4 takes
`λ=μ=(2,2)`, `ν=(3,1)`, `n=4`, `k=1`.  The separating condition fails,
`g(λ,μ,ν)=0`, but `g((2+t,2),(2+t,2),(3+t,1))=1` for all `t≥1`.
Thus neither padding nor “eventual stability” licenses a from-the-start equality.

**Disposition.** A Kronecker A-page may include the definition, character scalar-product
formula, symmetries, padded/reduced coefficients, S2's exact `stab(α,β)` theorem and
the S3 conditional/reduction lemma; a B page should calculate the `(2)` or S3 example
and carry the failed-hypothesis counterexample.  It must prominently record:

> There is no known general positive combinatorial rule for all Kronecker coefficients.

S3 itself says they lack a combinatorial interpretation/meaningful positive formula
(Introduction); no source in this portfolio resolves that open problem.  Nor does this
branch solve general modular decomposition numbers.

### C. FI-modules, character polynomials, and stable irreducibles

**S1, Defs. 1.1–1.4 and Thms. 1.5, 1.13, 3.3.4, 3.4.1 (pp. 2–6, 21–25).**
`FI` has finite sets and injections; an FI-module over a commutative ring `k` is a functor
to `k`-modules, so `V_n` is an `S_n`-module.  Finite generation means finitely many
elements across the `V_n` generate the functor.  In characteristic zero, finite generation
is equivalent to uniform representation stability (S1 Thm. 1.13, assuming finite
dimensionality).  If `V` has weight `d` and stability degree `s`, S1 Thm. 3.3.4 gives a
unique character polynomial `P_V∈Q[X_1,X_2,...]`, of weighted degree at most `d`, with
`χ_{V_n}(σ)=P_V(σ)` for every `n≥s+d`; `X_i(σ)` counts `i`-cycles.  Thus
`dim V_n=P_V(n,0,...)` is eventually polynomial.

The proof route is usable locally: the stable decomposition is
`V_n≅⊕_λc_λV(λ)_n`, where `V(λ)_n=V_{λ[n]}`; the weight bounds `|λ|≤d` and stability
degree bounds `λ_1≤s`; each padded irreducible has a character polynomial.  S1 Thm. 1.13
proves finite generation ⇒ stability by presenting `V` as a quotient of a free FI-module,
using the characteristic-zero Noetherian property to finitely generate its kernel and bound
injectivity/surjectivity degrees; the converse uses eventual spanning by transition maps.

**Exact padding boundary and example.** S1 Prop. 3.4.1 constructs `V(λ)` with
`V(λ)_n≅V_{λ[n]}` for `n≥|λ|+λ_1`, zero otherwise; it is generated in that degree,
has stability degree `λ_1`, and weight `|λ|`.  For `λ=(2,1)`, this begins at `n=5`,
not `n=3`; `λ[3]=(0,2,1)` is not a partition.  The introductory permutation module has
character `X_1`, while `Λ^2` of it has `binom(X_1,2)-X_2`; these are concrete stable
character-polynomial checks.

**Disposition.** A separate later SYMR A-page may define FI and generation, prove the
free/padded example, then record (or prove only after an explicit Noetherian supplier)
the general finite-generation theorem.  The full Noetherian theorem is not a short
elementary proof and should be `proved_here: false` unless its entire proof chain is
planned.  It must say characteristic zero for representation stability/character-polynomial
conclusions; S1's introduction separately notes that arbitrary-Noetherian-ring Noetherianity
was proved in a later CEFN paper, not by the displayed theorem.  This branch depends on
ordinary characteristic-zero representations but not on KLR/modular pages.

### D. Plancherel asymptotics: a source-supported endpoint, not a casual proof claim

**S4, §5, Theorems 5.4–5.5 (pp. 25–29).**  Under the Plancherel law
`M_n(λ)=(dim λ)^2/n!` on `λ⊢n`, define the Russian-profile scaling
`\bar λ(x)=n^{-1/2}λ(n^{1/2}x)`.  The paper proves convergence in probability to
the Logan--Shepp/Vershik--Kerov curve
`Ω(x)=2π^{-1}(x arcsin(x/2)+sqrt(4-x^2))` for `|x|≤2` and `|x|` outside.
First it proves polynomial test-moment convergence (Thm. 5.4), then uniform-profile
convergence (Thm. 5.5).  The actual architecture is: identify shifted symmetric functions
with polynomial functions on diagrams; calculate Plancherel expectations of `p^#_ρ`
using the regular character (Prop. 5.1); use filtrations to get multiplicativity; identify
the limiting moments with `Ω`; apply Chebyshev; upgrade weak to uniform using the
1-Lipschitz profile class and tight support (Lemmas 5.6–5.7).

**S4, §§6–7, Theorems 6.1 and 7.1 (pp. 29–38).**  For every fixed finite set of `k≥2`,
the normalized character observables
`p^#_k/n^{k/2}=n^{k/2}χ^λ_{(k,1^{n-k})}/dim λ`
converge jointly to independent Gaussians `sqrt(k)ξ_k`.  The authors prove this by
the method of moments: normalize to `η_k`, obtain Hermite-polynomial leading terms
from the product filtration, and invoke moment determinacy (Prop. 6.4).  The centered
profile fluctuation `Δ_λ=√n(\bar λ-Ω)/2` then has Chebyshev-coordinate limit
`u_k^{(n)} ⇒ ξ_{k+1}/√(k+1)` (Thm. 7.1).  They explicitly invert the transformed
power-sum/character relation (Props. 7.3–7.4) before transferring the CLT.

**Disposition and analytic honesty.** A final asymptotic B page may safely define
Plancherel measure, verify `Σ_λ(dim S^λ)^2=n!` from inherited RG-11/RG-9 regular
representation material, calculate the `S_3` probabilities `(1/6,4/6,1/6)`, and state
the limit-shape/CLT with S4 as an external recorded result.  The source really contains
proofs, but they require shifted-symmetric algebra, filtration estimates, probability
convergence, moment determinacy and profile topology not currently supplied by the
planned core.  It is analytically/algebraically too deep for a short local proof.  Do not
present “Plancherel diagrams converge to Ω” as locally proved merely because the theorem
is celebrated.

## Cross-source agreement, disagreements, and proposed proof sequencing

1. Macdonald's characteristic map is the concrete bridge: outer induction ↔ ordinary
   multiplication and restriction ↔ coproduct.  S5 independently validates why these
   operations should form a Hopf structure but must not be cited as if it proves the bridge.
   This resolves the Macdonald-report gap at the *Hopf* level; a classical skew-Specht
   module construction remains a source-retrieval gap, not a theorem to improvise.
2. S2 gives an exact global `stab(α,β)` using LR; S3 independently gives a row-gap
   reduction criterion and `k`-stability.  They agree on eventual stability but have
   different domains and bounds.  Do not replace S2's `|α|+|β|+α_1+β_1` threshold with
   S3's conditional criterion, or vice versa.
3. S1's padded label `λ[n]=(n-|λ|,λ)` is the same first-row-padding idea as S2 but
   represents an FI sequence of irreducibles.  S2's stability is an internal tensor
   coefficient statement; S1's is categorical representation stability.  They should be
   adjacent only after a convention warning, not conflated.
4. S4's Plancherel law uses dimensions and diagrams already intended for RG-9/RG-11,
   but its RSK/longest-increasing-subsequence consequences are RG-11 territory.  This
   report proposes no duplicate RSK or hook-length item; it consumes them only for the
   probability normalization/example.

## Closing audit

| audit | result |
|---|---|
| complete sources retrieved | 6 complete full texts |
| sources actually read in relevant ranges | 6; exact page/section ranges above |
| retrieval failures/replacements | No counted-source failure.  The original James--Peel classical skew-Specht article was not found as an authoritative complete source in this pass; S6 was retrieved as a rigorous graded boundary source but is not mislabelled as a classical replacement. |
| proof/prerequisite gaps | A full classical skew-Specht filtration proof is still needed if SYMR wants it locally; otherwise make it a recorded external result.  The FI Noetherian theorem and Plancherel LLN/CLT are source-proved but too long/dependent to assert locally without a new supplier chain. |
| explicit open-problem boundary | No general positive combinatorial Kronecker rule is claimed; no general modular decomposition-number problem is claimed solved. |
| recommended independent proof checks | Macdonald I §§5,7 and Appendix A for the characteristic map/Hopf dictionary; James §16 for outer LR and §§21–22 for rim-hook use; a complete James--Peel source for a classical skew-Specht filtration; a later FI-Noetherian source for positive/integral coefficients. |
| tracked file to integrate | `research/symmetric-group-planning/agent-7-articles-products-asymptotic.md` only |
