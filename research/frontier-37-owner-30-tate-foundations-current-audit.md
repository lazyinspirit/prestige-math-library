# B8 Tate foundations: current report-only audit

Audit date: 2026-10-01. This review covers only the eight B8 targets named below. I read each complete current body and followed the proof routes through the actual load-bearing local suppliers. This is a mathematical/source-interface report only: no item, manifest, contract, coverage, decision, receipt, or gate was changed.

## Current state and hashes

The B8 pair `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` is **not currently scope-closed**. Its current scope hash is `29bb0eef7a2628dcf0c446a1b249e237282b73753cf48e7e8c3b4221745dae80`; `scopeDecision` returns “current scope review required.” All eight target `itemDecision` rows currently require a current item audit. The run status also shows stage 3a scope gates have not run. These facts mean this report does not release ordinary item receipts.

The hashes below are the current raw SHA-256 of each item body and the current Step 3 `itemHash`, computed with the current manifest dependencies. The coefficient-residue input hash differs from the earlier snapshot (`544162…`); its current value is authoritative for this report.

| Target | Raw body SHA-256 | Current Step 3 itemHash |
|---|---|---|
| `def-commensurable-subspaces-and-ideals-of-endomorphisms` | `c62338f250cc01d1156c3f7dd1a453d7b25165c211a57066525d318714282343` | `3297da48742a1c2e6c61b1c198eb9f5c06938050bb72f241a2cc9559e74dac62` |
| `lem-finite-potent-trace-linearity-and-conjugation` | `d4aa6a60edd2698d03c91444291cfc86f000c2a5e5f1f3152ff7ff3887502906` | `1dde4e97f9233b8fc429d2bd56a06c1e19479261d911c4022c0b601c1bc5f792` |
| `lem-e-ideals-and-commutator-trace` | `db614225ac0c26651e79e5da9846c06eb9a6ea518fb807c8b58b0a5e599b00a6` | `4e10c685af3223384c5875053bc326624bfd3ccd19a60dbd7ecd424d5033fd96` |
| `thm-abstract-residue-exists-unique` | `2098bb63eb52de1ea42a083e96c7e8ce4ab770689635544150e90da421e20e2d` | `1c870697784385dda8660b9592d5840f5b5800c99b1a6647a9fe411248ee3899` |
| `lem-abstract-residue-basic-properties` | `60a9e1570fcee804884722dcb72bf8569189e6f8ed4e290c71fee27f9346a5f0` | `77d5b7f9041b4f99eb30f0efc4721c7bffdad968d670dce32deed6c7db25b6e0` |
| `lem-abstract-residue-additivity` | `66826c99fc3bf0970eda0be9ea116c947ef0f294d94e1b4ffcbd6bd5f86c8f67` | `19ea5394c3237d7b3de423ae6aceb9e9c0f91eb95e59df1cccb194d9f8273a19` |
| `lem-abstract-residue-trace-under-finite-free-extension` | `4ede1aeb9cca001a7cb37917c005befbe547e449d4e3166ac9f1a7d74cbfcb3a` | `4701ebbf2ca387ad948647601add4e459ec6c4794265f01fe8f306d0b4958353` |
| `cor-coefficient-trace-residue-agreement` | `9b441274cec87eea468fde3e19f9bc5270f3ef0d36d102e18965a62338629851` | `2555f8502017c5cf4f7a0bf90af7041730cc8d02355d0a172ed75d5fe7195e7d` |

The current B8 manifest SHA-256 is `43afcf6022a94e90949b639dff268345eed8db6f5c3f2035650b8b5fcac22126`.

## Mathematical audit

### Commensurability and finite-potent trace

`def-commensurable-subspaces-and-ideals-of-endomorphisms` has the right quotient convention: `A < B` is equivalent to `A` being contained in `B` plus a finite-dimensional error. The finite-sum, map, transitivity, equivalence, and commensurability-invariance rules follow from that convention. Its `E`, `E_1`, `E_2`, and `E_0` descriptions are consistent. In particular, an element of `E_0` has finite-potent square, and the **subspace** `E_0` is finite potent with exponent 2: if `ρ₂(V) ⊂ A+W`, then `ρ₁ρ₂(V) ⊂ ρ₁(A)+ρ₁(W)`, a sum of finite-dimensional spaces. This proves finite potency; it does not assert that each such endomorphism has finite-rank image.

The full proof of `lem-finite-potent-trace-existence-and-uniqueness` supports the uses audited here. It computes the trace on a finite-dimensional stable image, proves independence by applying finite-dimensional trace additivity and killing a nilpotent quotient, and proves the stable-subspace quotient formula. No finite-rank/finite-potent conflation was found there.

In `lem-finite-potent-trace-linearity-and-conjugation`, (T4) correctly reduces linearity on any finite-dimensional subspace of the family to a common finite-dimensional stable space formed from all words of the fixed exponent. (T5) correctly stabilizes the two finite-dimensional descending image chains and uses the rectangular trace identity. (T6)(a) is specifically a finite-rank commutator statement: both products have finite-dimensional image, and their span is a finite-potent family of exponent 1. Its proof does not extend this claim to arbitrary finite-potent endomorphisms.

There is one concrete gap in (T6)(b), first case, step 12.1. For `γ ∈ E_0` and `ψ ∈ E`, the text chooses finite-dimensional `W` with `γ(V) ⊂ A+W` and then bounds `γψ(A)` by `γ(A)+γ(W)`. That bound would require `ψ(A) ⊂ A+W`; the chosen `W` says nothing about `ψ(A)`. The missing membership `γψ ∈ E_0` is therefore not proved as written. The full repair is local: choose finite-dimensional `U` with `ψ(A) ⊂ A+U`, using `ψ∈E`; then `γψ(A) ⊂ γ(A)+γ(U)`, finite dimensional because `γ∈E_0`. Separately choose finite-dimensional `W` with `γ(V) ⊂ A+W`; then `ψγ(V) ⊂ ψ(A)+ψ(W) ⊂ A+U+ψ(W)`, so `ψγ(V)<A`, and `ψγ(A) ⊂ ψ(γ(A))` is finite dimensional. Thus both products lie in `E_0`. Since `E_0` is a common finite-potent subspace of exponent 2, (T4) makes the trace additive on the two products; (T5), applied with the order of maps as stated in step 14.1, makes their traces equal. This proves the intended zero commutator trace without changing its conclusion.

`lem-e-ideals-and-commutator-trace` has a sound algebra/ideal/projection decomposition proof, but its claim 4 imports this defective first case of (T6)(b). Its exponent-2 proof of finite potency of `E_0` is sound. The second case `γ ∈ E_1`, `ψ ∈ E_2` in (T6)(b) is separately proved correctly by showing both products lie in `E_0` and using (T5).

### Abstract residue and its basic properties

The construction in `thm-abstract-residue-exists-unique` is valid once the commutator-trace supplier is repaired. The `E_1+E_2` decomposition supplies lifts; lift changes reduce to the `E_1`/`E_2` zero-trace case; the commutator identity gives the Leibniz relation; and the displayed quotient of the free symbol space is identified with `Ω¹_{K/k}` by the universal property of Kähler differentials. The uniqueness argument is sound because the set of elements `f dg`, with both `f` and `g` ranging over all of `K`, already contains every `K`-multiple of a differential and hence spans `Ω¹_{K/k}` as a `k`-vector space. The proof requires a commutative `K`-action and has no characteristic restriction.

The direct computations in `lem-abstract-residue-basic-properties` are sound on their stated hypotheses. In particular, the continuity calculation makes `[πf,g]` vanish on `A+gA`, hence square to zero; the negative-power case follows from `d(f f⁻¹)=0`; and the two-term logarithmic trace formula correctly passes to `(A+gA)/(A∩gA)` and computes the two diagonal blocks. Each abstract-residue use remains downstream of the (T6)(b) repair through `lem-e-ideals-and-commutator-trace`.

`lem-abstract-residue-additivity` does **not** use the invalid shortcut that sums of arbitrary finite-potent subspaces are finite potent. It constructs two separate families. For `span{γ_A,γ_{A+B}}`, the common bounds send `V` into `A+B` plus finite error, then `A` plus finite error, then into a finite-dimensional space, giving exponent 3. For `span{γ_{A∩B},γ_B}`, the bounds send `V` into `A+B` plus finite error, then `B` plus finite error, then `A∩B` plus finite error, then into a finite-dimensional space, giving exponent 4. Because each family has only the two displayed generators, images of the fixed error spaces under every linear combination remain in a fixed finite-dimensional sum. Separate (T4) applications then justify each trace difference and the projection identity proves the operator equality. This route is valid and is also downstream of the abstract-residue supplier.

### Finite-free extension and coefficient comparison

The matrix argument in `lem-abstract-residue-trace-under-finite-free-extension` is mathematically sound. A matrix family with entries in a single finite-potent subspace `F` is finite potent with the same positive exponent: each product entry is a finite sum of length-`e` products from `F`, whose images are finite dimensional. No common space `F^eV` or uniform dimension bound is assumed. Strict upper and lower triangular block matrices are nilpotent; the diagonal blocks are evaluated with finite-potent trace additivity and (T5). The application to the coefficient algebra uses one common `E_0(A)` family, so it does not require closure of unrelated finite-potent families under sums.

Two source-interface details in this general lemma need an explicit local proof route. First, the cited `def-trace-of-an-endomorphism` defines trace for finite-dimensional vector spaces over a field. The lemma permits an arbitrary commutative `k`-algebra `K` and a finite free `K`-module `K'`; the trace of multiplication there is not supplied by that field-only definition. Define it as the diagonal sum of the multiplication matrix in a finite free basis. It is `K`-linear, and it is basis independent: for matrices over commutative `K`, the finite sums give `tr(XY)=tr(YX)`, so `tr(P⁻¹MP)=tr(M)` for every invertible change-of-basis matrix `P`. This gives the needed `Tr_{K'/K}` in the full generality of the statement. In the later coefficient application `K=k((t))` is a field, so `def-field-norm-and-trace` supplies the usual field trace directly.

Second, `def-tensor-product-of-modules-by-generators-and-relations` defines the tensor product as an abelian group and does not itself state the `K'`-module structure or the direct-sum coordinate identification asserted in Facts [F2]. Both are proved from its balancing relations: define `a'·(y⊗v)=(a'y)⊗v`; multiplication preserves the relation `yr⊗v=y⊗rv`, and additivity, the unit law, and associativity follow from those in `K'`. If `K'` has basis `x_1,…,x_n`, the coordinate maps `c_i:K'→K` are `K`-linear. The map `(v_i)↦Σ_i x_i⊗v_i` from `V^n` to `K'⊗_K V` has inverse `Σ_j y_j⊗v_j ↦ (Σ_j c_i(y_j)v_j)_i`; the inverse is well-defined by the same balancing relation. This proves the direct-sum description and hence the block-matrix calculation without a new library supplier.

The coefficient comparison uses the correct finite-field-extension trace after specializing the base to `k((t))`. The full Laurent-series argument uses algebraic Kähler differentials rather than claiming `Ω¹_{k((t))/k}=k((t))dt`; it proves the formula by truncation and the abstract-residue continuity property. For the closed point, a finite-type affine chart makes the closed point maximal; `lem-finite-type-jacobson-residue-extension` reduces its residue-field finiteness to Zariski's lemma, and perfectness then gives separability. The finite basis of `κ(p)/k` yields coefficientwise field trace.

There is a choice-scope overstatement in the upstream supplier `thm-local-ring-smooth-curve-dvr`: its statement says Choice is used “exactly” through the one-dimensional regular-local-ring DVR criterion, while its Fact [F3] also invokes `lem-affine-local-dimension-residue-transcendence`, whose statement assumes Choice. This does not undermine the present coefficient comparison under its stated Axiom of Choice, but the supplier does not establish the narrower claim that the DVR criterion is the only Choice-dependent route. Any narrower-choice certification must retain the dimension-formula dependency or supply a different proof.

## Supplier text actually checked

In addition to the eight complete B8 bodies, I read the complete current bodies of `lem-finite-potent-trace-existence-and-uniqueness`, `lem-finite-type-jacobson-residue-extension`, `cor-field-finite-type-over-a-field-is-a-finite-extension`, `lem-affine-local-dimension-residue-transcendence`, `thm-local-ring-smooth-curve-dvr`, `def-residue-rational-differential-curve-point`, `lem-uniformizer-differential-is-a-basis`, `def-field-norm-and-trace`, `def-trace-of-an-endomorphism`, `def-tensor-product-of-modules-by-generators-and-relations`, `def-kahler-differentials-algebra`, and `cor-derivations-represented-by-differentials`, along with the commensurability, linear algebra, trace, perfectness, and finite-free items discussed above. I did not fetch the cited Tate PDF; the audit findings below follow from the complete local proof texts and the explicit algebraic arguments given here, and do not claim independent source-page verification.

## Readiness

The eight mathematical bodies are unchanged by this report. The principal blocking mathematical defect is the first case of (T6)(b) in `lem-finite-potent-trace-linearity-and-conjugation`, which is consumed by `lem-e-ideals-and-commutator-trace` and therefore by the abstract-residue family. The finite-free lemma also needs the two local interface arguments recorded above to support its stated generality. The downstream coefficient comparison is valid under the stated Choice/perfect-field assumptions once those foundations are repaired and its current inputs are stable. Current pair scope is open, so no ordinary item acceptance or integration readiness is claimed.

## Released item repairs: 2026-10-01

This addendum records the later, narrowly released repairs to exactly two items. It supersedes the blocker/readiness wording above for these two items only; the earlier audit findings for the other six targets and the open B8 scope state remain unchanged.

In `lem-finite-potent-trace-linearity-and-conjugation`, T6(b), step 12.1 now chooses a finite-dimensional `U` from `ψ(A) ⊂ A+U`, and a separate finite-dimensional `W` from `γ(V) ⊂ A+W`. It uses `γψ(A) ⊂ γ(A)+γ(U)` and `ψγ(V) ⊂ A+U+ψ(W)`, with `ψγ(A) ⊂ ψ(γ(A))` finite dimensional. Thus both products lie in `E_0`; the existing exponent-2 proof for the common `E_0` family, T4 linearity, and domain-correct T5 comparison prove the unchanged commutator conclusion. No other T4/T5/T6 case or statement was altered.

In `lem-abstract-residue-trace-under-finite-free-extension`, Facts [F2] now derive the `K'` action from the tensor balancing relation and exhibit inverse maps `Φ:V^n→K'⊗_K V` and `Ψ:K'⊗_K V→V^n` using the `K`-basis coordinate maps. This proves the direct-sum decomposition and block-matrix representation used in the proof. Facts [F3] now define the finite-free trace as a diagonal sum over the commutative ring `K`, prove `tr(XY)=tr(YX)` by finite sums, derive basis independence under conjugation, and prove `K`-linearity for multiplication. The rank-zero empty-sum convention is retained. This supports the original arbitrary commutative `K`-algebra statement without attributing that generality to the field-only trace definition. No statement, conclusion, direct dependency, rank-zero case, or separate finite-potent-family route was changed.

The current `## Statement` section hashes are `25accdb167e5be4877a985eae046aac1ff22d7348398afde88bf956caf92d4da` for the finite-potent lemma and `e28ddb38b4d8898c943241b3e3e5981390bce45ec2950733cf282c1627a3ecbd` for the finite-free extension lemma. The direct dependency lists remain unchanged from the manifest. Current body and Step 3 input hashes are:

| Item | Raw body SHA-256 | Current Step 3 itemHash |
|---|---|---|
| `lem-finite-potent-trace-linearity-and-conjugation` | `6f1d43bf0f96da2c7fb4e6b412939e0cee959395c40feb6d1ab3c94e7a170f8e` | `f3fdcfbd324ccd203fe38134589783f7f98dbf45ccb0bbe90171f83483e6b77e` |
| `lem-abstract-residue-trace-under-finite-free-extension` | `0310f6bbf6ef00eb5fcf582324c1d392899659c00dc8b1a4cd4a9e23564cb66d` | `30b78bdd8aa28d126e82b35aa43e0e36d7cca0a68abceea27a5f96d4035974c8` |

Targeted validation after the final text edit passed:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-finite-potent-trace-linearity-and-conjugation.md items/lem-abstract-residue-trace-under-finite-free-extension.md` — both passed.
- `node tools/rendercheck.mjs items/lem-finite-potent-trace-linearity-and-conjugation.md items/lem-abstract-residue-trace-under-finite-free-extension.md` — both parsed, including frontmatter and KaTeX spans.

No carrier or receipt was changed. At this recheck the pair scope still requires a current scope review (scope hash `29bb0eef7a2628dcf0c446a1b249e237282b73753cf48e7e8c3b4221745dae80`), and both item-decision rows still require ordinary review. Root retains integration and any later receipt authority.
