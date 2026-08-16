# frontier-14 — Alpha group **b**, step 6b adjudication (batches 4, 5, 6)

Adjudicator: build Alpha (Claude Opus 5, `xhigh`, 1M window).
Scope: reader findings **R4-1…R4-15, R5-1…R5-10, R6-1…R6-38 — 63 findings.**
Every verdict was taken from disk: the citing item **and** the cited item were
both opened, and every counterexample and numerical witness was recomputed.

## Counts

| | fatal | nonfatal | false positive |
|---|---|---|---|
| batch 4 (reader 4) | 7 | 8 | 0 |
| batch 5 (reader 5) | 1 | 9 | 0 |
| batch 6 (reader 6) | 19 | 19 | 0 |
| **reader total** | **27** | **36** | **0** |
| refuters (7 of 7 returned) | 7 repaired + 3 referred | 10 | 0 |

**No reader finding was refuted.** In every case the reader's claim about what
the cited Statement does and does not contain was accurate when checked against
disk. I did downgrade **two** of reader 6's fatals (R6-7, R6-9) to nonfatal on
the load-bearing test below; both were repaired anyway.

**The test I applied to the dominant class.** An inflated `[F#]`/`[L#]`
restatement is **fatal** when a numbered step actually leans on the inflated
part, and **nonfatal** when the added clause is real but unused. R6-7 attributes
"identities are both monic and epic" to `def-monomorphism-and-epimorphism`, and
R6-9 attributes "the empty limit is a terminal object" to
`def-limit-and-colimit-of-a-diagram`; both additions are true, neither is the
cited clause, and in both cases the proof never uses the addition — reflexivity
needs only `m = m ∘ 1`, and the empty case needs only the greatest-subobject
property. Repaired at step 6, where it is free.

**61 items changed, all inside batches 4/5/6.** The working tree also carries 101
changed items belonging to groups a and c; I touched none of them, nor
`plan-spec.json`, nor any published item.

---

## Batch 4 — `triangularisation-and-jordan-canonical-form` (+ examples)

| id | item | verdict | what changed |
|---|---|---|---|
| R4-1 | `prop-quotient-vector-space-operations-and-projection` | **confirmed_fatal** | [L1] claimed the coset-equality biconditional and attributed it to `def-quotient-vector-space-and-canonical-projection`, which defines only `v+W:={v+w:w∈W}` and the two operations. Repaired at source: the criterion is now **proved** here (new step 1.1, from (W1)–(W3) of `def-linear-subspace`, added as a dep) and **stated** in the Statement; [L1] restates only the definition. Steps renumbered 1.1/2.1/3.1; title updated to match. |
| R4-2 | `prop-induced-quotient-operator-is-well-defined` | **confirmed_fatal** | [L2] attributed the coset criterion to the proposition above, whose Statement did not contain it. [L2] now restates that Statement exactly — faithful after the R4-1 repair. New [L3] carries the operation formulas; step 2.1 uses them explicitly. |
| R4-3 | `thm-quotient-vector-space-universal-property` | **confirmed_fatal** | Same inflated citation. [L1] restates the repaired Statement; new [L3] supplies the operation formulas; step 1.1 spells out well-definedness and linearity instead of "the quotient operation formulas". |
| R4-4 | `thm-nilpotent-endomorphism-characterisations` | **confirmed_fatal** | The Statement asserted that on the zero space "all four readings hold in their empty forms". Condition 2 is `μ_N=x^r` with `1≤r≤n`; at `n=0` no such `r` exists, and the exponent `0` is not the index `1`. The Statement now says exactly which conditions hold (1, 3, 4), that condition 2 **fails**, and why the equivalence is stated for `n>0`. Step 3.1 rewritten to match. |
| R4-5 | `thm-power-ranks-determine-nilpotent-jordan-blocks` | **confirmed_fatal** | [L2] said the kernel/rank sequences are "eventually stabilising"; the cited lemma gives monotonicity plus stabilisation **conditional** on an equality occurring. [L2] now quotes both clauses, and step 3.1 first *establishes* the hypothesis — beyond the largest block size `m*`, step 1.1 gives `d_k=dim V`, so `ker N^{m*}=ker N^{m*+1}` — and only then applies it. |
| R4-6 | `prop-generalised-eigenspaces-and-algebraic-multiplicity` | **confirmed_fatal** | [L2] attributed "the restriction to the λ-summand has minimal polynomial `(x−λ)^{e_λ}`" to `cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`, whose Statement gives only the direct sum and the stabilisation clause. [L2] now restates that corollary exactly; the extra clause is cited from `thm-primary-decomposition-for-an-endomorphism` (published, added as a dep), which states it verbatim. |
| R4-7 | `prop-generalised-eigenspaces-and-algebraic-multiplicity` | **confirmed_fatal** | The old [L3] dropped the cited theorem's **nonzero**-space hypothesis and was false at `m=0`. Now [L5], with the hypothesis restored. Step 2.1 proves `G_λ ≠ 0` first (λ is an eigenvalue, so `ker(T−λI) ≠ 0 ⊆ G_λ` since `e_λ ≥ 1`). |
| R4-8 | `ex-a-cyclic-companion-operator` | **confirmed_nonfatal**, repaired | [L1]/[L2] now quote their sources; new [L3] carries "χ_A is monic of degree n". Verification split 1.1/2.1/3.1: `f(C)e_1=0` plus commutation gives `f(C)=0` on the power basis; cyclicity + [L2] + [L3] force `μ_C` monic of degree 3 dividing `f`, hence `μ_C=χ_C=f`. |
| R4-9 | `prop-polynomial-calculus-on-restrictions-and-quotients` | **confirmed_nonfatal**, repaired | `\bar T^{,k}` → `\bar T^k`. |
| R4-10 | `ex-first-isomorphism-theorem-for-a-coordinate-map` | **confirmed_nonfatal**, repaired | `F^2,qquad` → `F^2,\qquad`. |
| R4-11 | `ex-jordan-form-with-two-eigenvalues-from-power-ranks` | **confirmed_nonfatal**, repaired | `\ldots,qquad` → `\ldots,\qquad`; rank sequences recomputed and correct. |
| R4-12 | `ex-jordan-chevalley-decomposition-from-jordan-blocks` | **confirmed_nonfatal**, repaired | `3T^2-2T^3,qquad` → `,\qquad`; identity checked, including characteristics 2 and 3. |
| R4-13 | `ex-quotient-of-f-three-by-a-line-and-canonical-projection` | **confirmed_nonfatal**, repaired | Contract `one` and `nonempty-choice` rows described `W` with basis `e_3` and representatives `(a,b,0)`; the item uses `W=F(1,0,0)` and `(0,y,z)`. Both rewritten. The item's proof is correct — re-derived. Its [L1] was also a loose summary and now restates the R4-1 Statement exactly. |
| R4-14 | `ex-an-invariant-flag-producing-upper-triangular-form` | **confirmed_nonfatal**, repaired | Contract `zero`/`one`/`degenerate` rows discussed parameters `λ`, `μ` absent from the item. `zero` and `one` re-anchored on step 1.1 and the real images; `degenerate` is now an honest `not_applicable` — the operator is fixed with distinct entries 2, 3, 4 and has no parameter that can degenerate. |
| R4-15 | `fs-jordan-canonical-form-is-a-unique-matrix` | **confirmed_nonfatal**, repaired | Contract `zero`/`one` rows said both blocks have eigenvalue 0 and a `J_1(0)` block moves; the item uses `A=J_2(0)⊕J_1(1)`, `B=J_1(1)⊕J_2(0)`. Rewritten to the real witness. The refutation is valid: diagonal sequences `(0,0,1)` and `(1,0,0)` differ. |

**Detector cross-check, not in the reader's list.** Rather than trust the
reader's sample of the display-typo class, I scanned all 131 scoped items in
batches 4/5/6 for bare LaTeX macros. It found exactly the five the readers
reported (R4-9…R4-12, R6-1) and no others; after repair the scan is clean. Here
the hand-read sample genuinely *was* the whole class, and that is now evidence
rather than hope.

---

## Batch 5 — `quadratic-residues-and-the-legendre-symbol` (+ examples)

| id | item | verdict | what changed |
|---|---|---|---|
| R5-10 | `cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning` | **confirmed_fatal** | [L4] said `(gh)^n=g^nh^n` "**requires**" `g` and `h` to commute. `lem-group-power-laws` states the *sufficiency* — "if `gh=hg` then …" — plus a note that it can fail without the hypothesis. Necessity is an invented converse, false at `n=0` and `n=1`. [L4] now quotes the clause and the failure note; step 2.1 drops the necessity framing and exhibits `ρτ=(1 3 2) ≠ (1 2 3)=τρ`. |
| R5-5 | `lem-gauss-half-system-permutation` | **confirmed_nonfatal**, repaired | The title asserted that multiplication permutes the signed half-system with no hypothesis; at `a=0` every `aj≡0` and no signed representative exists. I record this as nonfatal rather than fatal because the Statement itself is correct and carries `p ∤ a`, so a reader who opens the item closes it at once. Repaired anyway — step 6 is the last free moment for a title. Now: "Multiplication by `$a$` with `$p\nmid a$` permutes an odd prime's signed half-system up to sign". |
| R5-1 | `prop-quadratic-residue-is-representative-independent` | **confirmed_nonfatal**, repaired | Step 3.1 invoked [L1] without establishing `gcd(a,n)=1`; it now derives it — `u` a unit makes `u²=[a]_n` a unit by [L4]/[L5], and [L3] converts that to coprimality. |
| R5-2 | `thm-count-of-quadratic-residues-modulo-prime` | **confirmed_nonfatal**, repaired | [L1] dropped the identification of the residue classes with `((Z/p)^×)²`, which is what licenses "the complement consists of the nonresidues". [L1] now carries it and step 1.1 uses it. |
| R5-3 | `prop-legendre-symbol-on-units-is-homomorphism` | **confirmed_nonfatal**, repaired | Neither [L1] nor [L2] said which sign the symbol takes on `Q`. New [L7] quotes the defining clause of `def-legendre-symbol` (added as a dep); step 1.1 assigns values from it. |
| R5-4 | `prop-legendre-symbol-on-units-is-homomorphism` | **confirmed_nonfatal**, repaired | Step 3.1 used `χ_p(g^n)=(−1)^n` without `g ∉ Q`. It now argues that `g ∈ Q` would give `G=⟨g⟩ ⊆ Q`, contradicting index two. |
| R5-6 | `thm-gauss-quadratic-residue-lemma` | **confirmed_nonfatal**, repaired | Primality-to-coprimality was unstated; new [L6] cites `lem-prime-not-dividing-is-coprime`. |
| R5-7 | `thm-gauss-quadratic-residue-lemma` | **confirmed_nonfatal**, repaired | Step 4.1 turned a congruence into integer equality with no input for the symbol's range. New [L7] carries the unit branch of `def-legendre-symbol`; the step now argues two values in `{1,−1}` differ by at most `2 < p`. |
| R5-8 | `thm-first-supplement-to-quadratic-reciprocity` | **confirmed_nonfatal**, repaired | Same missing range input; new [L4], step 1.1 rewritten the same way. |
| R5-9 | `ex-quadratic-congruence-from-its-discriminant` | **confirmed_nonfatal**, repaired | Step 1.1 now gets `(Δ/11)=1` from the defining clause plus `2²=4`; step 3.1 factors `((6x+4)−2)((6x+4)+2)≡0` and cites `thm-z-mod-p-is-a-field` for the absence of zero divisors. Roots `x=7`, `x=10` recomputed. |

---

## Batch 6 — `reflective-subcategories-and-the-adjoint-functor-theorems` (+ examples)

### The one false Statement

| id | item | verdict | what changed |
|---|---|---|---|
| R6-15 | `thm-special-adjoint-functor-theorem-objectwise-form` | **confirmed_fatal — false Statement** | Branch 2 did not require `U` to preserve all small limits, yet step 2.1 concluded the comma category is complete via [L4], which creates only limits `U` preserves. I recomputed the counterexample and it stands: `A=C=Set`, `U` constant at `2`, `C=1`. `Set` is complete and locally small, `{2}` is a small coseparating set, every subobject collection has an intersection, and `U` carries each wide pullback of monos to a limit cone (connected diagram, constant functor) — so the branch-2 data is supplied. But `(1↓U)` is the disjoint union of two copies of `Set`, one per map `1→2`, with no initial object. **Repaired by narrowing, not patching:** preservation of all small limits is now a hypothesis of *both* branches; the Statement says explicitly that branch 2 is not a weakening of it and records the counterexample; step 1.3 no longer suggests the branch replaces continuity; step 2.1 derives completeness of the comma category from the hypothesis. |
| R6-16 | `rem-choice-ledger-for-the-adjoint-functor-theorems` | **confirmed_fatal** | The remark said the direct branch "instead assumes" the class intersections and their preservation, repeating the false theorem-level claim. Rewritten: both branches require preservation of all small limits and neither replaces it. |

**Blast radius of R6-15, checked item by item.**
`thm-special-adjoint-functor-theorem-functor-form`,
`cor-…-saft-intersections-is-cocomplete`,
`cor-a-continuous-functor-to-set-…-is-representable`,
`thm-saft-yields-the-stone-cech-adjunction` and
`prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses`
all either defer to "either branch of the objectwise theorem" or establish
continuity explicitly, so they become correct automatically once the objectwise
Statement carries the hypothesis. The A-page summary sentence "with local
smallness and every smallness or preservation hypothesis stated rather than
treated as background" is **true after this repair** and needed no edit.

### Dropped hypotheses, false titles, unsupported Givens

| id | item | verdict | what changed |
|---|---|---|---|
| R6-22 | `thm-saft-yields-the-stone-cech-adjunction` | **confirmed_fatal** | The title asserted the reflection unconditionally; the Statement gives the adjoint only *if* the initial comma objects are supplied for all `X`. Title now names the supplied family. |
| R6-25 | `thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces` | **confirmed_fatal** | The Statement claimed reflectivity from the ultrafilter lemma and dependent choice alone, while step 1.1 used the conditional adjunction, which needs the family supplied over the proper class of all spaces. That family is now explicit in the Statement, the Given and the title; [L1] restates the cited Statement with its condition intact; two boundary rows rewritten. |
| R6-24 | `cor-gaft-recovers-the-free-group-and-abelianisation-adjoints` | **confirmed_fatal** | The Given imported "the standard complete locally small categories and continuous functors" with nothing establishing them. Repaired by **building, not narrowing** — the library already has the results: new [L4] `thm-grp-is-complete-and-cocomplete`, [L5] `prop-groups-and-homomorphisms-form-category-grp`, [L6] `thm-right-adjoints-preserve-limits` (all published). New step 1.1 discharges GAFT's hypotheses, `U` being continuous as a right adjoint; step 3.1 notes the abelian branch needs only the functor form. |

### Inflated dependency restatements

| id | item | verdict | what changed |
|---|---|---|---|
| R6-3 | `thm-the-counit-of-a-reflection-is-an-isomorphism` | **confirmed_fatal** | "A full inclusion is fully faithful" attributed to a definition that only defines full/faithful via hom-maps. [L1] now quotes it; new [L4] cites `def-subcategory-and-full-subcategory`; step 1.1 derives fully-faithfulness and uses surjectivity and injectivity separately. |
| R6-4 | `thm-an-object-lies-in-a-reflective-subcategory-…-invertible` | **confirmed_fatal** | [L1] added a triangle identity to a theorem asserting only that each `ε_A` is iso; [L2] added closure under composition to a definition stating only the two-sided inverse. Both now restate their sources; new [L3] carries the componentwise triangle identities; step 2.1 derives `η_{I(A)}=I(ε_A)^{-1}` and proves the composite-of-isomorphisms fact inline. |
| R6-8 | `thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections` | **confirmed_fatal** | [L2] gave the partial-order axioms while citing `def-preorder`, which says a preorder *need not* be antisymmetric. Now cites `def-partial-order`; `def-preorder` removed from deps. |
| R6-11 | `thm-a-separating-set-is-equivalently-a-jointly-faithful-family-of-representables` | **confirmed_fatal** | The definition of *joint* faithfulness — the Statement's key term — was attributed to a definition covering single functors. Repaired at the right level: the Statement now defines it, and [L3] restates the cited definition exactly while saying plainly that joint faithfulness is this item's own. |
| R6-12 | `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-…` | **confirmed_fatal** | "Equalizers are monic" and "a monic split epi is an isomorphism" attributed to definitions stating neither. [L5] now quotes the equalizer universal property, [L6] cites the published `cor-equalizers-are-monic-and-coequalizers-are-epic`, [L7] quotes the iso and mono definitions, and step 4.1 proves the split-epi/mono argument inline. |
| R6-13 | `thm-general-adjoint-functor-theorem-objectwise-form` | **confirmed_fatal** | [L1] stated completeness *and* continuity while citing only the completeness definition. Split: [L1] completeness, new [L6] `def-preservation-reflection-creation-continuity-and-cocontinuity`. |
| R6-14 | `thm-a-complete-locally-small-…-all-subobject-intersections-…` | **confirmed_fatal** | [L4] widened the intersection definition from a **set**-indexed family to "the stated collection", which the proof allows to be proper; [L5] attributed three mono-closure results to two definitions stating none. [L4] now quotes the set-indexed definition and says the extension to proper collections is *this theorem's own hypothesis*; the three facts cite the three published items that state them. |
| R6-17 | `cor-…-saft-intersections-is-cocomplete` | **confirmed_fatal** | [L3] identified a colimit with an initial object of `(D↓Δ)`; the definition gives an initial object of the **cocone** category. [L3] now quotes it; step 2.1 supplies the identification explicitly. |
| R6-19 | `cor-a-continuous-functor-to-set-…-is-representable` | **confirmed_fatal** | Hom-set bijections attributed to the unit/counit definition, which contains none. Now cites `thm-the-adjunction-hom-set-bijection-under-local-smallness`. |
| R6-20 | `thm-freyd-representability-theorem` | **confirmed_fatal** | [L3] said a universal element *determines* the natural isomorphism, citing a definition that only defines representability. [L3] now quotes the definition; new [L5] cites `thm-universal-elements-and-universal-factorisations`, and step 3.1 adds the naturality check. |
| R6-23 | `thm-the-solution-set-for-the-underlying-set-functor-on-groups` | **confirmed_fatal** | "Kernels are normal subgroups" cited to `def-normal-subgroup`, which defines normality by conjugation invariance only. [L3] now quotes the definition; new [L5] cites the published `thm-image-subgroup-and-kernel-normal`. |
| R6-27 | `thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups` | **confirmed_fatal** | [L3] claimed the universal-arrow equivalence while citing `def-reflective-subcategory-and-reflector`, which explicitly declines to assert it. Now [L3] quotes the definition and new [L4] cites the scoped theorem that proves the equivalence. |
| R6-28 | `fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint` | **confirmed_fatal** | [L4] attributed "the union of a set of ordinals is its supremum" to `lem-ordinal-basics`, which says only that the union *is an ordinal*; [L5] attributed hom-set bijections to the unit/counit definition. [L4] now quotes clauses (b), (c), (e), (f), and step 1.1 derives the least-upper-bound property while step 3.1 derives `β<β⁺` from `α ∉ α`. [L5] cites the hom-set bijection theorem. |
| R6-37 | `ex-torsion-free-reflection-computed` | **confirmed_fatal** | [L3] attributed the unique-factorisation clause to a Statement that gives only reflectivity, the reflector and the unit. [L3] now restates that Statement; new [L4] supplies the universal-arrow equivalence. |
| R6-7 | `thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence` | **confirmed_nonfatal**, repaired | "Identities are both monic and epic" is not in `def-monomorphism-and-epimorphism` — but the proof never uses it (reflexivity needs only `m = m ∘ 1`). Downgraded from the reader's fatal on the load-bearing test; [L1] now quotes only the two cancellation clauses. |
| R6-9 | `lem-wide-pullbacks-compute-intersections-…` | **confirmed_nonfatal**, repaired | "The empty limit is a terminal object" is not in the limit definition — and step 1.1 never needed it. Downgraded on the same test; [L1] now states only the limit universal property and step 1.1 argues the empty case from the greatest-subobject property. |

### Nonfatal bridges, all repaired here

R6-1 (`def-coreflective-subcategory-and-coreflector`, bare `qquad`);
R6-2 (`thm-a-full-subcategory-is-reflective-…`, step 1.1 now cites its own [L3]);
R6-5 (`thm-a-reflective-inclusion-creates-all-limits`, unit-universality now [L5]);
R6-6 (`thm-a-reflective-subcategory-has-every-colimit-…`, the counit was composed
in the **wrong direction** — now precomposed with `ε_{D_j}^{-1}`);
R6-10 (`lem-wide-pullbacks-…`, step 2.1 now cites the mutual-factorisation theorem);
R6-18 (`cor-…-is-cocomplete`, pointwise limits now from
`cor-functor-categories-inherit-completeness-and-cocompleteness`);
R6-21 (`prop-compact-hausdorff-spaces-satisfy-…`, five bridges supplied: small
limits from products and equalizers, the equalizer closed via the diagonal, monos
in `CompHaus` injective via the one-point space, compact subsets closed, and [L4]
restated to include the continuous-image clause the proof actually uses);
R6-26 (`thm-commutative-rings-are-reflective-in-rings`, kernel-is-an-ideal now cited);
R6-29/30/32 (three items used a hom-set bijection as an adjunction — all now go
through the converse clause of `thm-the-adjunction-hom-set-bijection-under-local-smallness`);
R6-31/34/36 (injective ⇔ monic in **Set**, now proved inline);
R6-33 (monos in `Ab` injective, proved inline from the kernel test);
R6-35 (kernel-normality and quotient factorisation made explicit; step numbering
adopted from precheck's canonical stratification and the `one` boundary row
re-anchored);
R6-38 (surjectivity of the first projection and injectivity of the induced map
now both shown).

---

## Proof-refuter subagents

Seven read-only refuters (GPT 5.6 Sol, `--sandbox read-only`, cap 8) covering
**every** scoped item in batches 4/5/6, split by topic. Brief:
`research/frontier-14-brief-refuter.md`; tasks
`research/frontier-14-refuter-<label>.task.md`.

**Three completed and adjudicated; four still running.**

**`refuter-b4-quotients`** (14 items + 16 external dependencies, read in full) —
**no fatal finding.** One nonfatal: the `empty` and `one` boundary rows for
`thm-simultaneous-triangularisation-of-commuting-operators` said step 1.1 handles
the empty family and `dim V = 1`. **Confirmed from disk** — step 1.1 covers only
`dim V = 0`; the empty and all-scalar branches are step 1.2, and step 3.1 records
that the lifted basis covers them. Mathematics unaffected; both rows rewritten.

**`refuter-b5-all`** (25 items, 32 dependencies, both page files, all 101 cited
clauses, every numerical witness independently recomputed including the primality
of `726377359` and all 29 repeated-squaring rows) — **no fatal finding.** One
nonfatal: the `iff-forward`/`iff-reverse` rows for
`ex-power-residues-modulo-seventeen` were `not_applicable` although [L1] is an
"exactly when" criterion the verification spends in both directions. **Confirmed**;
both rows rewritten.

**`refuter-b6-aft`** (15 items, 30 dependencies) — **three fatal, two nonfatal.**

- **A real fatal the readers missed, in a landmark theorem.**
  `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object`,
  step 3.1: it concluded `p_S r = p_S` from "both `p_S r` and `p_S` are cones", but
  the limit universal property gives a *unique mediator per cone*, not equality of
  two cones — and `r` is a cone endomorphism only *after* `p_S r = p_S` is known,
  so the argument is circular. **Confirmed fatal from disk**; the refuter's witness
  settles the invoked rule — in `Set`, for the identity diagram at `X={0,1}` the
  limit cone is `(X, 1_X)`, yet `1_X` and any nonidentity `r: X→X` are both cone
  legs from apex `X` and are unequal. This theorem is the backbone of the
  objectwise GAFT and of Freyd representability, so `r = 1_L`, invertibility of the
  equalizer and uniqueness of maps out of `L` were all unproved.
  **Repaired with Freyd's argument, which the item's own cited sources (Leinster
  Lemma A.1, Riehl 4.7.5) actually use:** local smallness makes `𝒞(L,L)` a set, so
  by completeness the joint equalizer `j: I → L` of that set exists; the cone
  condition gives `α∘j = j` for every endomorphism `α`, and `j` is monic. For
  `f,g: I ⇉ C` with equalizer `m: K → I` and `u: L → K` from weak initiality,
  `j∘m∘u` is an endomorphism of `L`, so `(j m u)∘j = j`; cancelling the monic `j`
  gives `m u j = 1_I`, making `m` a split epi as well as monic, hence iso, so
  `f = g` and `I` is initial. New steps 2.2, 3.1, 4.1; the "no class-indexed
  choice" claim in the Statement survives, since the joint equalizer is a small
  limit and one witness is still used per fixed target.
  *(The first draft of this repair put a standalone display inside step 2.2 and
  precheck's stratification scrambled it — the PREVENTIONS A6 hazard, reproduced
  in a repair exactly as the note warns. Rewritten with the equation inline.)*
- `cor-a-continuous-functor-to-set-…-is-representable` — **confirmed fatal**, same
  class as R6-22/R6-25: the title promised representability from the
  chosen-well-powered SAFT hypotheses alone, while the Statement and step 1.1 also
  require a supplied family of objectwise universal arrows. Title now names it.
- `cor-functor-categories-inherit-completeness-and-cocompleteness` — **confirmed,
  but out of my scope and NOT repaired.** Its title asserts completeness of
  `[𝒜,𝒞]` with no choice hypothesis while its Statement begins "Assume Choice" and
  step 1.1 selects pointwise limits simultaneously. The item is **published** and
  outside my batches, and correcting a title on a choice-scope question is a
  debatable restatement rather than the unambiguous falsehood the
  obvious-published-dependency delegation licenses. **Referred to the lead Alpha
  at 6c / the owner**, per the rule that a debatable restatement is reported, not
  applied.
- `cor-…-saft-intersections-is-cocomplete` — **confirmed nonfatal.** Step 1.1
  invoked that Choice-assuming corollary although this corollary assumes no
  Choice. Continuity of the diagonal is now derived directly — each component
  mediator is unique, so nothing is selected — and both the Choice-assuming fact
  and its dependency were removed. The false `nonempty-choice` row was rewritten.
- `thm-freyd-representability-theorem` — **confirmed nonfatal.** Its `one` row said
  no singleton occurs, while step 2.1 identifies the category of elements with
  `(1↓F)` for a singleton. Row rewritten; the mathematics was already correct.

**`refuter-b4-jordan`** (16 items, all dependencies) — **one fatal, three nonfatal.**

- `cor-nilpotent-similarity-classified-by-power-ranks` — **confirmed fatal.** The
  Statement said "two finite-dimensional nilpotent endomorphisms are similar iff
  their power ranks agree" while the Given silently added "over the same field".
  Rank sequences are integers and compare across fields; similarity does not. The
  zero endomorphisms of the one-dimensional spaces over `F₂` and `F₃` have rank 1
  at `k=0` and 0 thereafter, with no linear isomorphism between them at all. The
  common field, and the meaning of similarity as an `F`-linear conjugation
  `M = φNφ⁻¹`, are now in the Statement, with the cross-field counterexample
  recorded; step 1.2 now constructs `φ` from the two Jordan bases instead of
  asserting similarity from equal block matrices.
- **A defect in my own R4-5 repair.** Step 3.1 as I rewrote it chose "the largest
  block size `m*`", which does not exist on the zero space — the boundary hazard
  reproduced inside the repair. `V=0` is now disposed of first, and the `empty`
  boundary row rewritten to say so. **Confirmed nonfatal**, and a direct hit on
  work I had already gated clean.
- `cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form` —
  **confirmed nonfatal.** The induction was declared on `deg χ_T` but applied to a
  factor `q` not shown to be a characteristic polynomial; the induction is now
  stated over arbitrary nonzero polynomials, which is what the argument uses.
- `lem-independent-initial-vectors-give-independent-jordan-strings` — **confirmed
  nonfatal.** The empty family has no maximum string length, so "if the maximum
  string length is zero" did not formally cover it; the induction now runs on a
  natural bound, `0` for the empty family.

**`refuter-b4-cyclic-and-examples`** (23 items, 30 dependencies) — **two fatal,
three nonfatal.**

- `def-cyclic-subspace-vector-and-vector-annihilator` — **confirmed fatal, missing
  hypothesis in a Definition.** It asserted that `Ann_T(v)` always has a unique
  monic generator, with no finite-dimensionality, while the proposition it cites
  for existence is expressly finite-dimensional. On `V = ⊕_{n≥0} F e_n` with the
  shift `T(e_n)=e_{n+1}` and `v=e_0`, every nonzero `p` has `p(T)v ≠ 0`, so
  `Ann_T(v) = (0)` and no monic generator exists. The definition now scopes the
  generator clause to finite-dimensional `V` and records that counterexample.
- `prop-vector-annihilator-is-well-defined` — **confirmed fatal, false title.**
  "A vector annihilator is a unique monic divisor of the minimal polynomial" scopes
  uniqueness wrongly: the Statement gives the unique monic *generator* of
  `Ann_T(v)`, which divides `μ_T`. For `T=J_2(0)`, `m_{T,0}=1`, `m_{T,e₁}=x` and
  `m_{T,e₂}=x²` are three distinct annihilators dividing `μ_T=x²`. Title corrected.
- Nonfatal, all repaired: `thm-cyclic-subspace-power-basis-and-companion-matrix`'s
  [L1] omitted the cited proposition's finite-dimensionality (a domain inflation);
  and the `iff` boundary rows of `prop-vector-annihilator-is-well-defined` and
  `thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials` were
  `not_applicable` or anchored on the wrong steps for genuine biconditionals.

**`refuter-b6-reflective`** (16 items) — **one finding, referred not repaired.**
It argues that `def-subobject-and-quotient-object`,
`thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections` and
`def-well-powered-and-co-well-powered-category` treat equivalence classes drawn
from a proper class of monomorphisms as entities forming a further collection,
which the repo's own class convention (`rem-category-theory-class-and-size-conventions`:
a class is a formula, "not an additional set") does not supply, with no universe,
Scott coding or representative encoding given. Its witness — the chaotic groupoid
on the ordinals, where every subobject class of a fixed object is a proper class
yet `{1_C}` is a set-indexed representative family — is correct as far as it goes.

**Adjudication: one part repaired, the rest referred.** The concrete citation
defect is real and mine: `[L2]` applies `def-partial-order`, which begins "Let `P`
be a set", to possibly proper collections — and I introduced that citation in the
R6-8 repair. `[L2]` now says so explicitly and records that the item verifies the
three conditions clause by clause without asserting the collections are sets. The
deeper foundational point is **not** something I should apply: fixing it means
choosing an encoding convention across several definitions, at least one of them
published, which is exactly the "debatable restatement" the delegation reserves
for the owner. **Referred to the lead Alpha at 6c.**

**`refuter-b6-applications-and-examples`** (22 items) — **two fatal.**

- `cor-gaft-recovers-the-free-group-and-abelianisation-adjoints` — **confirmed
  fatal, and a defect in my own R6-24 repair.** My step 3.1 asserted that the
  abelian branch "needs no completeness or continuity hypothesis" while citing the
  GAFT **functor form**, whose Statement opens "Let `U:𝒜→𝒞`, where `𝒜` is complete
  and locally small and `U` is continuous". Claiming those hypotheses unnecessary
  while citing a theorem that requires them is precisely the inflated-citation
  class I spent this dispatch removing — reintroduced by me. Repaired properly:
  the abelian branch now cites the published
  `thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object`
  (new [L7]), which assembles a supplied family into a left adjoint and genuinely
  carries no completeness or continuity hypothesis; the Statement and step 3.1 both
  now say that the GAFT functor form is *not* invoked for that branch and why. The
  false `one` and `empty` boundary rows were rewritten.
- `cex-a-complete-category-whose-coseparating-sets-are-never-small` — **confirmed,
  referred not repaired.** Its objects are families indexed by *every* ordinal with
  coordinatewise morphisms, but under the repo's ZFC convention a function is a set
  of ordered pairs, so a proper-class-indexed family is only a definable
  class-function schema; no set encoding (set support with default coordinates, or
  similar) is supplied, so strictly no category meeting the stated convention has
  been defined and the local-smallness and completeness conclusions do not follow.
  This is the **same foundational question** as the `b6-reflective` finding and
  wants one consistent decision — an encoding convention, or dropping the item —
  rather than two ad-hoc patches. **Referred to the lead Alpha at 6c**, noting that
  unlike its sibling this one is a draft in my own batch and can be repaired or
  dropped there.

**The refuters earned their dispatch.** All seven returned, and between them
they found **five confirmed fatal defects that the independent readers and my
own pass over 63 findings had missed** — a circular inference in a landmark
theorem three scoped items rest on, a missing common-field hypothesis, a missing
finite-dimensionality hypothesis that makes a defined object nonexistent, and a
false title. They also caught a boundary defect I introduced while repairing R4-5.

**A dispatch failure worth recording (PREVENTIONS B6).** My first launch of all
seven produced prompt files and no results: the launcher ran as a backgrounded
shell task and the refuters were killed with its process group. `nohup` did not
save them. I caught it by checking liveness — `ps` showed only *other* groups'
refuters — rather than by tabling seven agents as "dispatched". Relaunched from a
foreground call; all seven confirmed alive. Had I trusted the launch, this report
would have claimed a refuter pass that never ran.

---

## Risk reviews

`risk-report` routes **86 high/critical items** across my batches (33 in batch 4,
19 in batch 5, 34 in batch 6). All 86 now carry a complete `risk_review`
(`status: complete`, reviewer `alpha-b`), and all three batches pass
`risk-report --require-reviewed` with 0 errors.

The 86 are **not** uniform, and the records say which is which:

- **43** rest on my own full reading of the item during adjudication. Each names
  the finding id, what the reading established, and how the routed signal was
  discharged — e.g. for `thm-special-adjoint-functor-theorem-objectwise-form`,
  that I recomputed the counterexample and that preservation is now hypothesised
  in both branches.
- **43** were routed on structural signals alone (dependency and fact counts,
  boundary/biconditional language triggers), raised no reader finding, and turned
  up nothing in my pass. Their records say exactly that, and say plainly that the
  additional refuter reading a high/critical item requires **was still
  outstanding**. They record the state of the evidence, not a refuter clearance.
  Those 43 should be revisited when the six outstanding refuters land.

---

## Harvest faithfulness

`coverage-checklist` is structural and passes on all three batches (134 / 70 / 64
harvested results, 0 errors). I checked **faithfulness** separately, by
extracting text — not by HTTP status.

- `url-sweep --recover --fail-on-dead`: **11/11 live, 0 dead, 0 needing recovery.**
- Locators verified by extracting PDF text with pypdf in a venv:
  - **Batch 4, Axler** — cites results by number (3.95–3.107, 5.35). `3.95` is on
    PDF p. 112, `3.107` on p. 116, both inside Section 3E (pp. 110–117); `5.35` on
    p. 168. **Faithful**, and citing result numbers rather than page ranges is the
    more robust form.
  - **Batch 5, Stein** — claimed PDF pp. 76–83 through SAGE Example 4.3.2;
    `4.3.2` is on pp. 82–83, quadratic-reciprocity material spans 76–82.
    **Faithful.** **Gorodnik** — Lecture 9 §1, pp. 1–3: "Legendre", "quadratic
    residue" and "Euler" all present. **Faithful.**
  - **Batch 6 — four ranges, every one off by one at the top end, each excluding
    the very result it names.** Riehl 4.5.11→4.5.15 claimed PDF 180–183 but
    `4.5.15` is on p. 184; Riehl 4.7.1→4.7.15 claimed 194–199 but `4.7.15` is on
    p. 200; Leinster 6.3.6→6.3.14 claimed 166–171 but `6.3.14` is on p. 172;
    Leinster Appendix→Lemma A.2 claimed 178–180 but the heading is on p. 179 and
    `A.2` on pp. 180–181. The printed-page numbers are consistent with the text
    (Riehl offset is exactly 20), so the PDF numbers were the error. **All four
    corrected** in `frontier-14-batch-6.coverage.json`.
  - **Not checked:** the Mac Lane range (batch 6, PDF pp. 140–143), a
    Wayback-hosted scan I did not extract. Recorded as unverified rather than
    passed.

---

## Gates after repair

| gate | batch 4 | batch 5 | batch 6 |
|---|---|---|---|
| `precheck` | PASS | PASS | PASS (131 scoped items, 112 with proofs, 0 failing) |
| `proof-contract --strict` | 0 errors, 46/46 | 0 errors, 23/23 | 0 errors, 43/43 |
| `boundary-audit` | 368 rows, no reuse, **0 contradicted** | 184 rows, 0 contradicted | 344 rows, 0 contradicted |
| `citation-fidelity` | 130 citations, 0 missing quote, 0 widening | 101 citations, clean | 176 citations, clean |
| `finite-smoke` | **0 checks** | 1 check, PASS (1010 instances) | **0 checks** |
| `risk-report --require-reviewed` | 0 errors | 0 errors | 0 errors |
| `coverage-checklist` | 0 errors | 0 errors | 0 errors |
| `url-sweep --recover --fail-on-dead` | 11/11 live across the three batches | | |

`boundary-audit` earned its keep twice, both times on rows *my own repairs*
invalidated: the `iff-forward`/`iff-reverse` rows for the quotient proposition
once I put a biconditional in its Statement, and the `empty` row for the
CompHaus reflectivity theorem once I put a supplied family in its Given. Both
rewritten.

---

## Three mechanism findings

These are not mathematics, but they change what the gates are worth.

**1. `citation-fidelity` did not detect a single instance of the class it was
built for.** It reported 0 widening candidates over 407 citations in my three
batches, while the readers confirmed — and I verified from disk — **15 genuine
inflated restatements** in that same text. The reason is structural: it compares
the contract's recorded `quote` against the cited item (catching a fabricated
quote), then runs two narrow syntactic heuristics (an explicit two-argument
restriction generalised to a family; a dropped numeric lower bound). The shape
that actually occurs in this corpus — *the fact line appends a true conclusion
the cited Statement does not contain* — is not one of its detectors. It is a
quote-integrity checker, not an inflation detector, and a green result from it
must not be read as evidence that A1 is absent.

**2. `boundary-audit`'s template detector is defeated by the template this run
used.** Its `normalise` strips the item **id** and the **case** before clustering,
but this run's boilerplate embeds the item's **title** — "No empty indexing family
or empty object enters the authored proof about *\<title\>*" — so every row is
textually unique and no cluster ever forms. It reported "no reuse at or above 3
members" while **240 of batch 6's 248 `not_applicable` rows are that template**
(72% of all its boundary rows are `not_applicable`, against 37% in batch 4 and
45% in batch 5). I re-clustered after normalising the title away; the top stems
recur 105, 37, 34, 25, 24 and 15 times.

I then ran a wider contradiction scan over batch 6 (`zero`, `one`, `iff-*` rows
against the item's own text) and hand-checked the hits: they are **candidates,
not confirmed false rows** — `\b1_` matches identity morphisms rather than a
one-valued parameter, "initial object" is the *subject* of these theorems rather
than a numeric-zero axis, and the `iff` hits sit in fact lines (several of them
lines I added) rather than in the items' own claims. So beyond the two rows I
fixed, I did not confirm a false disposition in batch 6.

That leaves a real, bounded conclusion rather than an alarm: **batch 6's boundary
dispositions are overwhelmingly boilerplate, no gate fails on them, and the
detector built to catch exactly this cannot see them.** Rewriting 240 rows as
genuine dispositions is batch-6 Beta work, and I am flagging it rather than
silently accepting a green gate. The one-line tool fix is to strip the item title
in `normalise` alongside the id and case.

**3. `finite-smoke` reports "0 error(s), 0 check(s)" on batches 4 and 6.** That
is the vacuous-pass shape: green while checking nothing. `gate-liveness` did not
catch it either, because it reads a merged contract that does not exist yet and
reported `finite-smoke` as *skipped — inputs not present*. Batch 5's single check
did run live (1010 solvable instances). I am recording batches 4 and 6 as
**unchecked by finite smoke**, not as passing it.

---

## Per-page verdicts

- **`triangularisation-and-jordan-canonical-form`** — 7 fatal findings confirmed
  and repaired, 1 nonfatal polished. No false title found. **Ready for step 6c.**
- **`triangularisation-and-jordan-canonical-form-examples`** — no fatal
  mathematical defect; 3 display typos and 3 false contract boundary blocks
  repaired, every witness recomputed. **Ready.**
- **`quadratic-residues-and-the-legendre-symbol`** — 1 title corrected, 6
  definitional bridges closed. Numerical witnesses recomputed and correct.
  **Ready.**
- **`quadratic-residues-and-the-legendre-symbol-examples`** — 1 fatal
  (invented converse) confirmed and repaired, 1 bridge closed. **Ready.**
- **`reflective-subcategories-and-the-adjoint-functor-theorems`** — 17 fatal
  confirmed and repaired, including one **false Statement** with a verified
  counterexample, two dropped hypotheses and one false title. **Ready**, with the
  boundary-disposition defect above flagged for its Beta.
- **`reflective-subcategories-and-the-adjoint-functor-theorems-examples`** — 2
  fatal confirmed and repaired, 6 bridges closed. **Ready.**

## What I could not check

1. **Three findings are referred, not repaired.** The title of the **published**
   `cor-functor-categories-inherit-completeness-and-cocompleteness`, which omits
   the Choice hypothesis its own Statement carries; and the proper-class treatment
   of subobject collections across `def-subobject-and-quotient-object`,
   `def-well-powered-and-co-well-powered-category` and the ordered-collections
   theorem. Both need a decision I am not licensed to take alone — a published-item
   restatement and a foundational encoding convention respectively. The third is
   `cex-a-complete-category-whose-coseparating-sets-are-never-small`, the same
   encoding question inside my own batch.
2. **All seven refuters returned and were adjudicated.** Nothing in the refuter
   channel is outstanding.
3. **The Mac Lane locator** (batch 6, PDF pp. 140–143) — not text-extracted.
4. **Batch 4 and batch 6 have no live finite-smoke coverage** (0 checks each).
5. **Batch 6's 240 templated boundary rows** are flagged, not rewritten; I
   confirmed only that no *further* row is contradicted by its item's own text on
   the axes the detector checks.
