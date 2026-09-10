# Set theory completion track: foundations, independence, and choiceless mathematics

Owner commission 2026-09-07: extend the published `foundations` category into
a comprehensive set-theory sequence and supply an honest proof route for every
mathematical result currently recorded on
`deferred-set-theory-beyond-choice`.

This is a **prose scaffold**, not authored mathematics. Relative labels
`SET-1`, `SET-2`, ... give dependency order; absolute order is owned by
`research/plan-spec.json`. Every A page has a leaf B companion named
`<A-page-id>-examples`. Item ids below are provisional until Step 1, but every
named result is binding: an author may split an item, not erase a claim or turn
its proof into a citation.

The word *comprehensive* means the standard graduate spine represented across
Jech, Kunen/Marks, Monk, and modern forcing courses: logic and models, rank and
reflection, weak choice, infinite combinatorics, constructibility, forcing,
symmetric models, descriptive set theory, large cardinals, forcing axioms,
PCF, and continuum combinatorics. It does not mean that every research
speciality is finite. Extender mice, core-model induction, Woodin-cardinal
determinacy, saturated ideals, and class-forcing geology are named in the final
boundary and are not silently presented as already covered.

---

## 0. Published baseline and non-negotiable boundary

The existing Foundations pathway is the bootstrap base for this commission.
Published orientation-only dependencies were repaired in September 2026 so
that this base no longer reaches the deferred Set Theory catalogue through
either page prerequisites or authored logical dependencies. It includes:

- ZFC axioms and basic constructions; relations, functions, quotients and
  indexed products;
- the von Neumann naturals and recursion;
- Bourbaki--Witt, Zorn, AC and their equivalences;
- filters, ultrafilters and the ultrafilter lemma;
- well-orders, ordinals, Mostowski collapse, Hartogs, transfinite induction and
  recursion;
- ordinal arithmetic, Cantor normal form and `omega_1`;
- cardinal arithmetic, alephs/beths, cofinality, Hessenberg, Tarski and König.

The new track cites these results and begins where they stop. It does not
redefine set, function, ordinal, cardinal, filter, or forcing filter as though
the last were an ordinary set-theoretic filter.

No Foundations page may directly or transitively require
`deferred-set-theory-beyond-choice`, and no Foundations item may reach one of
that page's items through `deps`, `justified_by`, or a load-bearing forward
reference. The catalogue is a target ledger, never a supplier. A page may prove
the same conclusion from earlier local machinery; that is the purpose of this
track.

No page may claim that ZF, ZFC, or a large-cardinal theory is consistent.
Internal theorems, semantic model constructions, proof-theoretic
interpretations, and relative-consistency metatheorems are different item
kinds. The classroom assumption “let `M` be a countable transitive model” is
strictly stronger than `Con(ZFC)` and never discharges a published
`Con(T) -> Con(T + phi)` statement by itself.

## 1. Summary and genuine dependency graph

All 31 pairs are registered in `plan-spec.json` as category `foundations`.
The graph preserves genuine parallel roots; it does not serialize independent
mathematics merely to control frontier selection.

| label | A-page id | direct same-category prerequisites |
|---|---|---|
| SET-1 | `formal-set-theoretic-syntax-structures-and-satisfaction` | published naturals (which already reaches relations/functions) |
| SET-2 | `deduction-soundness-completeness-and-compactness` | SET-1; published `countability-and-uncountability` and `cardinal-arithmetic-and-cofinality` (including ordinal recursion) |
| SET-3 | `arithmetization-incompleteness-and-relative-consistency` | SET-2 |
| SET-4 | `well-founded-relations-rank-and-the-cumulative-hierarchy` | published ordinals/transfinite recursion |
| SET-5 | `reflection-absoluteness-and-elementary-submodels` | SET-2, SET-4 |
| SET-6 | `weak-choice-principles-and-sierpinskis-theorem` | SET-4; published cardinal arithmetic, filters/ultrafilters and `countability-and-uncountability`; the new earlier `dependent-choice-and-the-complete-metric-baire-theorem` A page |

**Dependent Choice rehome reconciliation (2026-09-08).** Before SET-6 is
built, Phase 3 must rehome the already-published `def-dependent-choice` from
`compactness-in-metric-spaces` to `countability-and-uncountability`, immediately
after `def-countable-choice`. Replace its inapplicable `def-sequence`
dependency and both matching body links with `def-function`: the former defines
only real-valued sequences and cannot type a map from the naturals into an
arbitrary set. This removes metric compactness from SET-6's prerequisite seam.
The binding Phase-2 cut in §7.9 now places a clean, newly named total-relation
DC interface before SET-6; SET-6 requires and cites that interface rather than
defining DC again. The stable published `def-dependent-choice` rehome remains
a Phase-3 consumer repair, not a prerequisite for Phase 2.
| SET-7 | `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` | SET-2; published compactness (whose closure contains filters/ultrafilters) |
| SET-8 | `club-stationary-sets-and-pressing-down` | SET-1; published cardinal arithmetic/cofinality |
| SET-9 | `set-theoretic-trees-delta-systems-and-diamond` | SET-8; published `filters-and-ultrafilters` for the explicitly ZFC finite-petals route |
| SET-10 | `borel-analytic-sets-perfect-sets-and-determinacy` | SET-4; published complete metrizability and Lebesgue measure (both already reach countability) |
| SET-11 | `the-constructible-hierarchy-and-inner-models` | SET-5 |
| SET-12 | `condensation-gch-and-diamond-in-l` | SET-11, SET-9, SET-3 |
| SET-13 | `forcing-orders-names-and-generic-extensions` | SET-5, SET-7 |
| SET-14 | `the-forcing-theorem-and-formal-consistency-transfer` | SET-13, SET-3 |
| SET-15 | `preservation-cohen-forcing-and-the-continuum` | SET-14, SET-9 |
| SET-16 | `finite-support-iterations-and-martins-axiom` | SET-15; published Baire/category and Lebesgue-measure pages |
| SET-17 | `suslin-trees-lines-algebras-and-independence` | SET-16, SET-12 (SET-16's topology closure supplies countability/cardinal functions) |
| SET-18 | `permutation-models-and-transfer-to-zf` | SET-14, SET-6 |
| SET-19 | `symmetric-extensions-and-basic-choice-failure-models` | SET-18, SET-12 |
| SET-20 | `symmetric-collapse-and-ultrafilter-free-models` | SET-19, SET-15 |
| SET-21 | `halpern-lauchli-and-bpi-without-choice` | SET-20; the new earlier `boolean-prime-ideal-theorem-in-the-basic-cohen-model` A page |
| SET-22 | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | SET-21; the new earlier `dependent-choice-and-the-complete-metric-baire-theorem` A page |
| SET-23 | `large-cardinals-measures-and-elementary-embeddings` | SET-5, SET-7, SET-8, SET-9 |
| SET-24 | `solovays-model-and-regularity-of-all-sets-of-reals` | SET-23, SET-20, SET-10 |
| SET-25 | `shelahs-baire-property-model-and-inner-model-lower-bounds` | SET-24, SET-16 |
| SET-26 | `prikry-forcing-and-gitiks-singular-cardinal-model` | SET-23, SET-20 |
| SET-27 | `proper-forcing-countable-support-iterations-and-pfa` | SET-16, SET-23 |
| SET-28 | `normal-moore-spaces-pmea-and-consistency-strength` | SET-27, SET-25, SET-22; published product measure |
| SET-29 | `minimal-walks-oscillation-and-l-and-s-spaces` | SET-27, SET-12 (SET-27 already reaches the needed topology pages) |
| SET-30 | `pcf-scales-and-zfc-dowker-spaces` | SET-8; published paracompactness, deduction/elementary-submodel, and cumulative-hierarchy pages |
| SET-31 | `eastons-theorem-and-cardinal-invariants-of-the-continuum` | SET-16 |

No B page is a dependency target. `SET-1`, `SET-4`, `SET-6` and `SET-8` are
genuinely independent roots over published Foundations. SET-7 waits for the
countable completeness machinery it generalizes; SET-10 waits for SET-4
because its tree ranks use the cumulative hierarchy.

### B-companion contract

Each companion proves concrete instances and failure modes; it is not a second
theory page. Step 1 must keep at least the following witnesses.

| pair | required B-page focus |
|---|---|
| SET-1--3 | parse/substitution computations; a nonstandard model; CTM-versus-consistency counterexample |
| SET-4--5 | ranks and `V_alpha` computed; a nontransitive elementary submodel and its collapse |
| SET-6--7 | proved implication diagram; finite Boolean algebras and Stone spaces (model-theoretic nonimplications wait for SET-18--21) |
| SET-8--9 | club diagonal intersection, pressing down, Aronszajn/Suslin tree examples, Delta systems |
| SET-10 | Borel codes, a closed-set tree, an analytic non-Borel set, determined open games |
| SET-11--12 | early `L_alpha` stages, canonical constructible well-order, diamond prediction |
| SET-13--15 | Cohen-name valuation, dense-set meeting, ccc/nice-name and collapse computations |
| SET-16--17 | a finite iteration, MA applications, tree/line/algebra translations |
| SET-18--21 | explicit supports, socks, Dedekind-finite reals, collapse layers, ultrafilter and BPI witnesses |
| SET-22 | one worked proof/countermodel interface for every Baire/Urysohn/Stone/Tychonoff strength row |
| SET-23--26 | ultrapower calculation, Solovay factorization, sweet-forcing amalgamation, Prikry sequence |
| SET-27--29 | master condition, PFA application, Moore development, minimal walk and oscillation computation |
| SET-30 | shrinking criterion, Rudin subspace slice, a PCF scale used in the Kojman--Shelah space |
| SET-31 | one Easton function and forcing, sample cardinal-invariant separations, Cichoń diagram |

## 2. Axiom and metatheory ledger

| block | declared base | binding qualification |
|---|---|---|
| SET-1--5 | classical first-order metatheory; object theory ZF unless stated | satisfaction only for set-sized structures; no truth predicate for `V` |
| SET-4--5, 8--10 | ZF or explicitly ZFC | each use of choice is named locally |
| SET-6--7, 18--22 | ZF plus exactly the displayed weak-choice principle | AC, `AC_omega`, DC, DMC and BPI are never interchanged |
| SET-11--12 | ZF internally | conclusion is `L |= ZFC + GCH`, then a separate relative-consistency metatheorem |
| SET-13--17, 27, 31 | ZFC ground model | semantic CTM theorem and formal `Con` transfer are separate |
| SET-18 | ZFA for permutation models, then ZF by a proved transfer theorem | atoms never survive as an unstated endpoint |
| SET-19--21 | ZF symmetric inner models of ZFC forcing extensions | Replacement, Power Set and Foundation are verified, not inherited by assertion |
| SET-23--29 | ZFC plus the named large cardinal or forcing axiom | every consistency claim retains its antecedent |
| SET-10, 24--25 | ZF/DC as printed | measurability, Baire property and perfect-set property are distinct |

NBG is optional notation, not a hidden axiom. If used for class recursion or
forcing, the conservative-interpretation theorem is proved and Global Choice
is stated separately.

Because the existing literature uses “UL” for two different principles, this
scaffold never does: `UFL` means the ultrafilter lemma and `URY` means Urysohn's
lemma.

## 3. Global proof contracts

1. Every recursively defined syntax, hierarchy, name valuation, iteration, or
   inner model has an existence, uniqueness, and closure item before use.
2. Relativization and absoluteness print the formula class (`Delta_0`,
   `Sigma_1`, etc.) and all transitivity hypotheses.
3. A forcing proof contains definability of forcing, the truth lemma, ground
   model embedding, ordinal preservation, and axiom verification.
4. Preservation claims state whether they preserve ordinals, cofinalities,
   cardinals, chain conditions, DC, or full choice; none substitutes for another.
5. Every independence item has two proof destinations when two consistency
   directions are asserted.
6. Symmetric-model arguments name the group, normal filter, support notion,
   canonical names, symmetry lemma, and the exact name excluded.
7. Large-cardinal statements use the precise hierarchy and distinguish an
   internal implication, equiconsistency, and an inner-model lower bound.
8. “Open” and “not known” are dated literature-status remarks. They receive a
   source-refresh gate, never a theorem proof contract.
9. Full primary text is mandatory for the Feferman, Blass, Halpern--Lévy,
   Shelah, Gitik, Fleissner, Moore, Rudin, Balogh and Kojman--Shelah proofs.
   An abstract or current remark is not enough to author the proof.
10. The published deferred remark is removed or rewritten only after every
    mathematical clause it owns has a proved destination and the owner approves
    the publication edit.
11. Neither a page-level `requires` closure nor an item-level logical dependency
    closure may reach the deferred Set Theory catalogue. This is a fatal gate,
    not a prose convention.

---

# I. Logic, hierarchy, choice, and combinatorics

## SET-1. Formal Set-Theoretic Syntax, Structures, and Satisfaction

**Items, in proof order.** Terms and formulas as finite codes; unique parsing;
free/bound variables and substitution; structures and assignments; term
evaluation; satisfaction by structural recursion; coincidence and substitution
lemmas; theories, models and semantic consequence; relativization to a set or
definable class; satisfaction for a set-sized structure is a set; Tarski's
truth-definition interface; `fs-v-has-a-definable-truth-predicate`.

**Proof spine.** Code syntax using published naturals and finite sequences,
prove recursion is well-defined, then prove the substitution and relativization
lemmas by induction on formulas. This page defines no satisfaction predicate
for the universe.

## SET-2. Deduction, Soundness, Completeness, and Compactness

**Items.** Formal derivations; proof from a theory; consistency; deduction
theorem and soundness for set-sized languages; for **countable languages**,
Henkin constants and term models, Lindenbaum completion, the term-model truth
lemma, Gödel completeness, compactness, and upward/downward Löwenheim--Skolem;
elementary embeddings and the Tarski--Vaught test; countable Skolem hulls;
nonstandard models; `fs-categorical-first-order-zf`.

**Binding calculus (primitive-syntax repair, 2026-09-08).** Keep SET-1's
primitive negation, conjunction and existential quantifier; universal
quantification abbreviates negated existential negation. The Hilbert system
has Boolean tautology instances, free-for universal instantiation, restricted
universal distribution, free-for existential introduction, reflexive equality
and free-for formula substitution for equality. Its rules are MP, universal
generalization, and existential elimination from phi→psi to exists x phi→psi
when x is not free in psi. Do not try to derive primitive existential
introduction from universal instantiation alone. Source: Moschovakis §1H.1–1H.2,
printed pp34–35, https://www.math.ucla.edu/~ynm/lectures/lnl.pdf.

Finite-support and proof-transformation arguments handle all three rules.
The deduction induction's existential case commutes sigma→(phi→psi) to
phi→(sigma→psi), eliminates x, then commutes back; x is not free in sigma
or psi. For open-assumption discharge, guard both quantifier rules, not only
generalization. Soundness checks the new axiom by a witness and the new rule
under an x-varied assignment. Fresh-constant replacement preserves free-for
and eigenvariable restrictions. Derive existential monotonicity and quantified
double-negation replacement explicitly before the Henkin truth rules; do not
use semantic completeness to prove its own syntactic prerequisites. The
existing item inventory supplies these obligations; no new A/B pair is needed.

**Proof spine.** The countable-language Henkin construction is coded and its
choices are canonical least natural-number codes. This is sufficient for the
language of set theory. Arbitrary well-orderable languages require an explicit
well-order/choice hypothesis; arbitrary-language compactness and its BPI
strength are proved only on SET-7. Compactness and Löwenheim--Skolem are
corollaries only after the applicable model-existence theorem.

## SET-3. Arithmetization, Incompleteness, and Relative Consistency

**Local prerequisite closure, 2026-09-09.** Keep the original 24 pairs. Replace A609's six draft arithmetic/coding suppliers with the already published `def-bounded-arithmetic-formula` (complete initial-function and parameter-recursion definition) and the local lemma below. The page requires `the-arithmetical-hierarchy-and-posts-theorem` in addition to deduction/completeness; only the cited published definition and its proved natural-number recursion prerequisites are consumed, not co-resident hierarchy results. A609 retains its draft files and future scope, but is no longer an actual supplier of this pair. No choice axiom is required. These are proposed contracts pending independent Step 3.

`def-effective-theory-and-certified-godel-numbering` includes this exact coding: For a binary word w set c(w)=1^{|w|}0w. With bin(0)=0 and otherwise canonical binary numerals, encode (a0,...,a{k-1}) by the natural number with binary word 1 1^k 0 c(bin(a0))...c(bin(a{k-1})). The empty code is 2. Invalid numerical words have validity false and length/entries zero; out-of-range coordinates return zero. These operations, fixed-arity encoding, append and finite histories are supplied by the following local lemma. Well-definedness is justified by `lem-certified-syntax-coding-operations-are-primitive-recursive`.

**Local supplier `lem-certified-syntax-coding-operations-are-primitive-recursive` (lemma).** In ZF, the specified sentinel sequence coding is injective. Its validity predicate, total length and coordinate functions (zero on invalid inputs or out-of-range coordinates), append and concatenation operations, and each fixed-arity encoder are primitive recursive. Fixed finite-state numerical recursions and recursions recording their finite histories are primitive recursive. No A609, choice axiom, unbounded minimization, universal PR evaluator or general Turing/PR equivalence is assumed.

Dependencies: `def-effective-theory-and-certified-godel-numbering`, `def-bounded-arithmetic-formula`, `lem-bounded-quantifiers-preserve-primitive-recursiveness`.

**Complete proof strategy.** Arithmetic closure is proved from the published initial-function/recursion definition. Addition and multiplication use a+0=a, a+S n=S(a+n), a·0=0 and a·S n=a·n+a. Define pred(0)=0, pred(S n)=n; truncated subtraction sub(a,0)=a and sub(a,S n)=pred(sub(a,n)); zero test z(0)=1,z(S n)=0. Equality is z(sub(a,b)+sub(b,a)), and a≤b is z(sub(a,b)). Boolean conjunction/product and complement 1−r give all finite tests; a case split is rg+(1−r)h. Bounded sums/products start at 0/1 and append one term. These are explicit primitive recursions. For a 0–1 predicate r, the least j<N satisfying r(j), or N if none, equals Σ_{j<N} Π_{i≤j}(1−r(i)); hence bounded minimization with any PR bound is PR. Exponentiation pow(b,0)=1,pow(b,S n)=b·pow(b,n). For d>0 the quotient of a by d is Σ_{q=1}^a [dq≤a], and the remainder is a−d·quotient; set both to zero for d=0. The natural-number division property follows directly by maximality and (q+1)d>a.

A fixed tuple of state registers can be stored by iterating P(u,v)=(u+v)^2+u. For fixed sum t its codes lie in [t²,t²+t], before the next interval [(t+1)²,...], and within it the u coordinate is distinct. Thus P is injective, and u,v≤P(u,v) for every pair. Its range test and inverse coordinates, returning zero off-range, are bounded searches u,v≤code. Therefore a simultaneous update of a fixed finite number of registers with PR coordinate updates reduces to one ordinary primitive recursion; no prior sequence-coding or loop theorem is used here. Updates may have arbitrarily large values; only the number of iterations must have a PR bound.

For s>0 its binary width is ell(s)=1+Σ_{j=1}^s [2^j≤s], and ell(0)=1. The jth left-to-right bit, for j<ell(s), is rem(quot(s,2^{ell(s)-1-j}),2); elsewhere use zero. Horner iteration v↦2v+b evaluates a payload. All are PR by the preceding formulas; powers of two increase and eventually exceed s by induction, so these formulas give the canonical binary word without a logarithm oracle.

The parser first checks s>0 and leading bit 1. Starting at position 1 it counts the consecutive 1s before the first 0; that 0 must exist, and its count k is the list length. Starting just after it, repeat k block parses. At a block start p, find the first following zero with bounded search below ell(s). Let m be its distance from p; require m≥1, the delimiter to exist, and m payload bits to fit after it. Require either m=1 or the first payload bit to be 1 (canonical numerals, with 0 permitted only as a one-bit payload). Horner evaluation gives that entry. Advance p by 2m+1. After exactly k blocks require p=ell(s). All position calculations are total, bounded-search failure sets a persistent invalid flag, and later iterations in invalid state do nothing. Counters, position, flag and the requested coordinate form finitely many registers; perform at most ell(s)+1 iterations per scan/block and at most ell(s)+1 block iterations. Nested bounded loops are compositions of the fixed-state recursion just proved. Thus validity, length and entries are PR, with an explicit final validity check resetting outputs to zero. The empty code 2 has k=0 and succeeds with no payload. Conversely deterministic delimiter lengths recover the unique original list, proving injectivity and correctness; no appeal to effective prefix coding is needed.

For construction keep a word as its value v together with its width L. Concatenating a width-M word of value w sends (v,L) to (v·2^M+w,L+M). Start the header at (2^{k+2}−2,k+2), which is precisely 1 1^k 0, including k=0. For an entry a of width m=ell(a), its block has width 2m+1 and value (2^m−1)·2^{m+1}+a. Iteratively concatenate these blocks; fixed-arity encoding is PR. For append or concatenation, use the validated input length(s) as the iteration bound, read each entry and add a block under the enlarged header. Default invalid inputs to the empty code 2. These definitions give PR operations and their intended effect by induction on the number of copied entries.

A numerical recursion that needs previous entries stores the entire current list code as its one state. If its initial value and next-value map are PR, combine next-value computation with the PR append operation, then invoke ordinary parameter recursion. Reading the last coordinate returns the requested output. This proves the needed history/course-of-values closure without a universal PR evaluation claim. For syntax operations every fixed-signature scanning instruction and each specified finite certificate transition is a combination of these arithmetic, list, case and iteration operations; the existing syntax lemma must still state its own bounds and correctness invariants.

Sources: Klaus Sutner, Primitive Recursion, https://www.cs.cmu.edu/~cdm/resources/00-primrec.pdf (Printed slides 13–38, 42–59; bounded-search exercise supplied by the local formula); Klaus Sutner, Coding Functions, https://www.cs.cmu.edu/~cdm/resources/02-coding.pdf (Printed slides 9–35; coding/state recursion framework, with the sentinel variant proved locally). Relevant complete arguments read; exercises and the changed sentinel convention are proved locally. `lem-primitive-recursive-syntax-and-proof-checking` uses this lemma, not either draft PR theorem.

**Items.** Effective theories and Gödel numbering; primitive-recursive syntax
predicates; representability; diagonal lemma; first incompleteness theorem;
derivability conditions; second incompleteness theorem; Tarski undefinability;
models versus consistency; interpretation and conservative extension;
finite-fragment/reflection transfer; semantic CTM theorem versus formal
relative-consistency theorem; `fs-con-zfc-implies-a-transitive-model-of-zfc`.

**Proof spine.** Every later `Con(T) -> Con(T+phi)` cites the last two transfer
items. No proof appeals to the consistency it is meant to establish.

Interpretation translates an open theorem phi to G_FV(phi) -> phi^I, with
one domain guard for each free variable. Sentence translations are unchanged.
The existing interpretation definition specifies domain-valued term witnesses,
E-invariance and functional graphs, not logical theorem preservation. The
existing derivation-translation lemma supplies value/substitution inductions,
all six logical axiom cases and all three rule cases in the published Hilbert
calculus. Remove surplus guards using domain nonemptiness and restricted
existential elimination. Check fresh variables when discharging assumptions;
use derived quantified double-negation, not syntactic equality, for universal
abbreviations. Finite proof assembly works in ZF. A formal Con implication
still requires its separately verified total proof-code map. These helpers
are already published on the prerequisite deduction page; no new pair is needed.
For conservative explicit definitions, use the full domain and actual equality.
Prove V_t(z) iff z=t for old terms, then phi^I iff phi for old formulas.
The witness-expanded translation is provably equivalent to the original,
not literally identical. Defining graphs must be uniquely total; finite proof
assembly supplies conservativity without AC or completeness.

## SET-4. Well-Founded Relations, Rank, and the Cumulative Hierarchy

**Items.** Accessible pointed graphs; well-founded induction and recursion;
transitive closure; rank of a set; `V_alpha`; recursion and continuity of the
cumulative hierarchy; transitivity of `V_alpha`; `x subset V_rank(x)`;
`V = union Ord V_alpha` as a class theorem; Foundation equivalent forms;
Mostowski collapse for well-founded extensional relations; hereditary size and
`H_kappa`; Grothendieck-universe orientation; `fs-v-is-a-set`.

**Axiom audit.** State the exact uses of Foundation, Replacement, Separation,
Union and Power Set. Class notation is eliminable shorthand in ZF.

## SET-5. Reflection, Absoluteness, and Elementary Submodels

**Items.** `Delta_0` and Lévy hierarchy; transitive-model absoluteness;
absoluteness of ordinals, rank and `omega`; `Sigma_1` upward absoluteness;
Montague--Lévy reflection for finite formula sets; set models of finite ZF
fragments; collapse of elementary submodels; elementary chains and unions;
Mostowski collapse of countable elementary submodels; condensation interface;
Shoenfield-absoluteness orientation; `fs-a-countable-elementary-submodel-is-a-transitive-subset`.

**Trap.** Reflection does not produce a set model of all ZF in ZF. Collapse
changes membership representatives and must precede transitive-model language.
For the fixed finite ZFC-fragment corollary, declare AC and use it precisely
when the reflected fragment contains Choice. The ZF branch and reflection
construction remain choice-free; neither branch asserts uniform internal
model existence for every coded fragment.

## SET-6. Weak Choice Principles and Sierpiński's Theorem

**Items.** `AC_omega`, choice for pairs, multiple choice and DMC; the precise
DC principle and its prescribed-start equivalence are cited from the earlier
Phase-2 replacement page in §7.9 rather than redefined here; implications AC
=> DC => `AC_omega`; BPI equivalent to the ultrafilter lemma
is deferred to SET-7, where Boolean algebras exist; finite-character/Tukey
forms; Dedekind-infinite versus
having a countable subset; countable unions of countable sets; Hartogs bounds
for arbitrary sets; Specker's two-local-GCH lemma; Sierpiński's theorem that
the arbitrary-set GCH implies AC in ZF;
`fs-gch-on-alephs-is-a-choice-free-formulation`. Reverse-implication and
nonimplication claims are not recorded here; SET-18--21 must prove their model
constructions before those claims enter Foundations.

**Target.** This page proves every internal clause of
`rem-gch-implies-ac`. The proof uses GCH on arbitrary sets and iterated power
sets, not the aleph equation that presupposes well-orderability.

## SET-7. Boolean Algebras, Stone Duality, and BPI

Binding Step-3 amendment, 2026-09-09: the canonical 27 A/3 B inventory
includes `thm-stone-completeness-iff-extremal-disconnectedness` and
`thm-order-continuous-homomorphisms-extend-to-boolean-completions` after
the regular-open completion and before forcing. Completeness makes the
closure of an open union of basic clopens clopen; conversely extremal
disconnectedness identifies regular opens with clopens. Preserve BPI for
Stone representation and explicit AC for the extension proof.

For extension, order partial homomorphisms by graph inclusion; chain unions
preserve the finite Boolean operations. To extend across x, choose in the
complete codomain v=sup{h(a):a in the domain,a<=x}. Define the extension on
(a meet x) join (b meet not-x) by the same formula with h(a),h(b),v.
Differences of two first components are disjoint from x, so their image
difference is disjoint from v; differences of the second components lie
below x, hence map below v. This proves well-definedness; componentwise
formulas prove preservation of complements and joins. Zorn now gives a
total extension. For any family with supremum1, the dense original algebra's
elements below its members also have supremum1; original order continuity
therefore forces the image supremum1. Apply this to T union {not-sup T}
to prove arbitrary-supremum preservation; complements give infima. Density
then forces the unique extension formula. Do not cite Zorn as if it alone
were a Boolean extension theorem.

Root read Fremlin312N/O pp.15–16,314K pp.35–36 and314S/T pp.40–41 in the
complete recovered chapter PDF (SHA256
`ee8c5b3625b286989d868db32dae760a27c8e6130ac2b2824b343d000bb9db87`).
The full local strategy is in canonical plan and batch15; independent
Step-3 recheck remains required. No Recorded item supplies these proofs.

**Items.** Boolean algebras, ideals and filters; prime and maximal ideals;
homomorphisms and quotients; Boolean completion and regular-open algebra;
Stone space of ultrafilters; clopen representation; Stone duality; BPI
equivalent forms; compactness of Stone spaces; compact Hausdorff Tychonoff
equivalent to BPI; arbitrary-language compactness from BPI and the converse
coding, with countable-language completeness cited from SET-2; forcing
preorders, separative quotients and complete Boolean algebras.

**Proof spine.** Algebraic filters and forcing filters remain distinct. The
Stone representation gives the exact bridge later used by Boolean-valued
forcing and the Halpern--Lévy model.
Prime ideals must be proper; the whole Boolean algebra is not prime.
Forcing filters must be nonempty as well as upward closed and internally
downward directed. Vacuous closure tests do not supply these requirements.

**Placement repair, 2026-09-09.** `fs-bpi-is-ac` belongs to
`boolean-prime-ideal-theorem-in-the-basic-cohen-model-examples` (§7.9), after
the relative consistency proof. It is not an early SET-7 refutation or a
forward premise. Retain the complete result there; no SET-7 proof needs it.

## SET-8. Club, Stationary Sets, and Pressing Down

**Items.** Closed unbounded subsets of a regular cardinal; club filter;
diagonal intersection; stationary and nonstationary ideals; Fodor's lemma;
normal filters; stationary partitions; cofinality strata; normal functions and
fixed points; trace and reflection; square/club-guessing orientation; elementary
submodel characterizations; `fs-countable-intersections-of-clubs-are-always-club`.

**Axiom audit.** The baseline is ZFC. Any weaker-choice version is a separate
item; regularity of the ambient cardinal is never omitted.

## SET-9. Set-Theoretic Trees, Delta Systems, and Diamond

**Items.** Trees, height, levels, branches and antichains; `kappa`-trees;
König's lemma; Aronszajn and Suslin trees; tree property; normal and splitting
trees; Delta-system lemma; ccc products and specialization; definitions of
diamond, clubsuit and square; diamond builds a Suslin tree; Kurepa line/tree
interface; partition relations, infinite Ramsey and general-cardinal Erdős--Rado;
Halpern--Läuchli finite-tree statement; `fs-every-omega-one-tree-has-a-cofinal-branch`.

**Dependency boundary.** This page does **not** prove `V=L -> diamond`.
SET-12 proves that implication from constructibility and may then cite this
page's earlier theorem `diamond ->` “a Suslin tree exists.”

**Erdős--Rado proof spine.** Before the orientation remark add
`def-finite-beth-iteration-above-a-cardinal`,
`lem-erdos-rado-pattern-closure-and-end-homogeneity`, and
`thm-general-cardinal-erdos-rado`. Prove
`beth_n(kappa)^+ -> (kappa^+)^(n+1)_kappa` for every infinite kappa and finite
n, including zero. The closure construction uses only earlier cardinal
exponent laws, absorption, successor regularity and recursion. The full
arbitrary-cardinal argument is in
`phase-2-set-blocker-resolution-2026-09-08.md`; Monk 9.9 states only the
countable-color version. The current 41-item A inventory fits this page;
no later large-cardinal page or recorded item is a prerequisite.

## SET-10. Borel and Analytic Sets, Perfect Sets, and Determinacy

For the closed-payoff unraveling cover, preserve the input strategy at every
history of length below k, including histories inconsistent with that strategy.
Use fixed legal defaults after inconsistent own moves or losing short lifts
only at lengths at least k. This preserves the required k-identity on total
strategies. The finite-box measurable-envelope construction uses (-j,j]^n,
matching its published box-measure supplier. These are the batch16 direct6B
repairs; they add no prerequisite, pair or choice assumption.

Borel evaluation codes explicitly depend on the published well-founded
relation definition; absence of a branch is not substituted for that contract.
Tree-space Polishness declares AC through the closed-subspace supplier, while
ordinal rank recursion itself remains choice-free. Preserve the explicit
rank-zero convention for both the empty tree and the root-only tree.

**Items.** Baire and Cantor spaces; trees coding closed sets; Borel hierarchy
and Borel codes; analytic sets as projections and tree projections; Souslin
operation; separation and boundedness; perfect-set theorem for analytic sets;
Borel regularity for measure and category; infinite games and strategies;
Gale--Stewart open determinacy; Borel determinacy with its transfinite rank
spine; AD, DC and regularity consequences as conditional theorems; Vitali,
Bernstein and Hamel pathologies under choice; `fs-every-set-of-reals-is-borel`.

**Scaffold reconciliation, 2026-09-09 (phase-2-catchup-24, batch 16).**
The canonical SET-10 inventory is synchronized with the batch's 51 A and
5 B contracts. This is a blocked scaffold, not publication or proof approval.
All prior Borel/determinacy/perfect-set contracts are retained. No new pair
or run-scope change is made. Two missing regularity contracts follow the
Baire-property definition and sigma-algebra lemma:

- `thm-souslin-operation-preserves-the-baire-property`: Assume AC. In a topological space X with a specified countable basis, every subset A has a Baire-property envelope H containing A such that H minus D is meagre for every Baire-property D containing A. The Souslin operation on any scheme of Baire-property sets has the Baire property. Consequently every analytic subset of a Polish space has the Baire property. Prerequisites: `lem-baire-property-sigma-algebra-and-borel-regularity`, `def-souslin-operation-on-set-schemes`, `thm-analytic-sets-are-souslin-operations-on-closed-sets`, `def-axiom-of-choice`. Source: https://homepages.math.uic.edu/~marker/math512/dst.pdf — Lemma 4.21, Theorem 4.22 and Corollary 4.23, printed pp39–40; complete proofs reread 2026-09-09.

  Complete local proof: Assume AC, used to select countably many meagre witnesses and envelopes, never deduced from AD. For arbitrary A let U be the union of all basic opens V for which A intersect V is meagre. Its countable basis gives A intersect U meagre. Put F=X minus U and H=A union F. Then H differs from closed F by a meagre set, so H has the Baire property. If D has that property and contains A, put C=H minus D, which also has the property and lies in F. If C were nonmeagre, choose open O with C symmetric-difference O meagre. O must be nonmeagre. Since O minus C is meagre and C is disjoint from A, A intersect O is meagre. Every basic V contained in O therefore occurs in U, so O is contained in U, disjoint from C. This makes O=O minus C meagre, contradiction. Thus H is an envelope. This argument does not assume X itself is a Baire space.

  For a scheme normalize by finite prefix intersections, retaining the empty-prefix term. Write E_s for the union of branch intersections over branches extending s; E_s is contained in A_s and E_s=union_k E_{s concatenated k}. Choose envelopes H_s of E_s. Set B_s=A_s intersect intersection_{t prefix s} H_t. Then E_s is contained in B_s, B_s is Baire-property, decreases along extensions, and remains an envelope of E_s since B_s is contained in H_s. The set C_s=B_s minus union_k B_{s concatenated k} is meagre by the envelope property. Hence C=union_s C_s is meagre. If x lies in B_empty minus C, choose recursively the least k with x in the next B_{s concatenated k}; the choice exists since x is outside C_s. This explicitly defines a branch f, without a dependent-choice step, and x belongs to every A_{f|n}, hence to S(A). Conversely S(A)=E_empty is contained in B_empty. Thus B_empty minus S(A) is a subset of C and is meagre, so S(A) has the Baire property. Empty X and empty schemes' values obey the same argument. Apply the earlier closed-scheme characterization to analytic sets; closed sets have the Baire property.

- `thm-souslin-operation-preserves-lebesgue-measurability`: Assume AC and n>=1. Every A subset R^n has a measurable envelope H containing A such that H minus D is null for every Lebesgue measurable D containing A. The Souslin operation on a scheme of Lebesgue measurable subsets of R^n is Lebesgue measurable. Every analytic subset of R^n is therefore Lebesgue measurable. Prerequisites: `def-souslin-operation-on-set-schemes`, `thm-analytic-sets-are-souslin-operations-on-closed-sets`, `cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-borel-sets-are-lebesgue-measurable`, `def-caratheodory-measurable-set`, `def-axiom-of-choice`. Source: https://homepages.math.uic.edu/~marker/math512/dst.pdf — Exercise 4.24 and Theorem 4.25, printed pp40–41; complete relevant text reread 2026-09-09. The source leaves the proof as an exercise; the finite-box envelope and full branch argument here are supplied locally. Correct the printed containment typo: D contains A.

  Complete local proof: AC supplies the countably many hulls below and the inherited countable-choice hypotheses of the Lebesgue measure results. Cover R^n by Q_j=(-j,j]^n for positive integers j, each measurable of finite volume. For E_j=A intersect Q_j use the published hull theorem to choose a measurable G_j containing E_j with lambda(G_j)=lambda*(E_j)<infinity, and put H_j=G_j intersect Q_j. Monotonicity gives lambda(H_j)=lambda*(E_j). If D is measurable and contains A, then E_j is contained in H_j intersect D, so lambda(H_j intersect D)>=lambda*(E_j)=lambda(H_j). Splitting the finite-measure H_j into H_j intersect D and H_j minus D gives lambda(H_j minus D)=0. H=union_j H_j contains A and H minus D is null by countable subadditivity. This avoids subtracting two infinite measures; the infinite-mass hull alone is inadequate.

  For a scheme (A_s), first replace values by finite prefix intersections. Let E_s be its branch tail union at s, so E_s subset A_s and E_s=union_k E_{s concatenated k}. Choose measurable envelopes H_s, and put B_s=A_s intersect intersection_{t prefix s} H_t. These are decreasing measurable envelopes of E_s. Since union_k B_{s concatenated k} is a measurable superset of E_s, C_s=B_s minus union_k B_{s concatenated k} is null. C=union_s C_s is null. Every x in B_empty minus C yields a branch by choosing the least child index k retaining x, and hence belongs to S(A). Thus S(A) is contained in B_empty and differs from it by a subset of C. Completeness of Lebesgue measure proves measurability, including empty values. Closed subsets of R^n are Borel and measurable by the published theorem, so the earlier closed-scheme representation proves the analytic consequence. No AD conclusion follows from this AC-based proof.

Borel measure regularity reuses published
`thm-borel-sets-are-lebesgue-measurable` under its countable-choice hypothesis,
from the already required Euclidean measure page. These AC-based arguments
must not be used to prove the AD conditional regularity clauses. Those
clauses and the complete Vitali/Bernstein/Hamel pathology interfaces remain
binding unfinished scope; the source/read and dependency obligations remain
in the owning coverage and notes. No recorded-not-proved item is a supplier.

**Reconcile-4 category closure (2026-09-09).** The A inventory now has 54 contracts (B remains 5). These are proposed proofs, not published suppliers. The following items follow the earlier Baire-property definition and AD countable-real-choice theorem. The category clause is supplied; the AD/DC measure clause remains blocked.

- `def-banach-mazur-category-game` (definition): In ZF, let X be N^N, 2^N, or R, and A subset X. Fix a natural-number coding of finite strings or rational-endpoint bounded open intervals. In the sequence cases players alternately choose strictly increasing finite prefixes, the first nonempty; V_n is the cylinder of the nth prefix. For R choose nonempty rational open intervals V_n with closure(V_(n+1)) subset V_n and length(V_n)<1/(n+1). A fixed initial basic open V may be imposed by requiring closure(V_0) subset V in R, or V_0 subset V for cylinders. I wins exactly when the resulting point lies in A. In a coded natural-number game the first illegal move loses, regardless of later moves. There is always a legal extension. Prerequisites: `def-baire-sequence-space`, `def-cantor-sequence-space-for-descriptive-set-theory`, `def-gale-stewart-games-on-pruned-trees`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `thm-nested-interval-property`. Source: https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf — Definition 7.7, printed p23; natural-number coding in Theorem 7.8, p24; complete relevant proof read 2026-09-09. Rational-interval version proved locally.

  Complete argument: Finite strings are coded by length and repeated pairing (pair i,j by (i+j)(i+j+1)/2+j); rational pairs are coded using the published enumeration. Legal extension sets are subsets of N, so least legal moves exist without choice. In sequence spaces the union of strictly extending strings defines one point. In R the closures are nonempty nested bounded closed intervals with lengths tending to zero, so the nested-interval theorem gives a unique point; it lies in each V_n because the next closure lies inside V_n. Rational density provides arbitrarily small legal intervals. Adding the set of plays whose first illegal move belongs to II to the legal winning payoff defines a subset of N^N. A winning coded strategy cannot make a first illegal move against legal play: the opponent can extend legally using least moves. Restriction therefore gives a legal winning strategy. This uses the AD definition only when determinacy is later assumed, not any AC-based determinacy theorem.

- `lem-banach-mazur-game-category-characterization` (lemma): In ZF, for X=N^N, 2^N or R, II wins the category game with target A iff A is meagre in X. I wins iff A is comeagre in some nonempty basic open subset of X. Both statements hold relative to a fixed initial basic open set. Each winning strategy yields a specified sequence of closed nowhere dense witnesses. No determinacy assumption, AC or DC is used. Prerequisites: `def-banach-mazur-category-game`, `def-nowhere-dense-meagre-and-residual-subsets`, `thm-recursion`. Source: https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf — complete three claims following Definition 7.7, pp23–24; Proposition 7.1 p21; complete relevant proof read 2026-09-09. Rational-interval version proved locally.

  Complete argument: First, a specified sequence of nowhere dense witnesses may be replaced by its closures. If A is covered by (F_n), at turn n II chooses the least legal refinement disjoint from F_n. The resulting point avoids all F_n. Conversely let tau win for II. For each even-length legal history p consistent with tau, let V_p be its last open (X at the empty history). Put D_p=(X minus closure(V_p)) union the union of all response opens tau(p followed by W), for W a legal next move. This is open and dense: any open meeting V_p has a basic refinement W with closure inside that intersection in R (a proper cylinder refinement in sequence spaces), small enough for the current bound, and tau responds inside W. An open not meeting V_p either meets X minus closure(V_p), or would lie in its boundary; the latter has empty interior. Thus F_p=X minus D_p is closed nowhere dense. Enumerate all finite histories by their natural codes, inserting the empty set for irrelevant codes. If x avoids every F_p, recursively at the empty history and each subsequent tau-history choose the least next-move code W whose response contains x. Such a W exists from x in D_p and x in V_p. This constructs a full play with outcome x, so x is outside A. Hence A is covered by the explicit F_p sequence. This argument uses no assertion that every dense G_delta is nonempty.

  For the I direction, let V_0 be I's first move under a winning strategy sigma. Thereafter reverse player names: old II moves first and old I responds, with target V_0 minus A. Apply the preceding response-open proof relative to V_0. The turn-dependent shrinking bound is shifted by one; the proof only requires arbitrarily small legal refinements and a bound tending to zero, so it applies verbatim. Thus V_0 minus A is meagre in V_0. Conversely, if A is comeagre in a basic V, first choose a legal basic V_0 inside V and then use the least refinements avoiding the successive closed witnesses on each I turn; the play ends in A. Meagreness in an open subspace transfers to the ambient space: a relatively nowhere dense subset N of V is nowhere dense in X, since every open meeting V has an open refinement in V avoiding its relative closure, while every open missing V misses N; points of closure(N) outside V lie in the boundary of V. The reverse restriction is immediate. Finally no nonempty basic open is meagre: against a purported sequence of closed nowhere dense witnesses choose least nested refinements avoiding them with the same length/diameter conditions; the resulting point remains in the initial open and avoids all witnesses. This is a direct ZF construction and supplies the nonemptiness needed for the next theorem.

- `thm-ad-implies-baire-property` (theorem): In ZF+AD, every subset of N^N, 2^N, or R has the Baire property. The proof uses countable choice only for sets of codes in N^N, obtained from AD, and does not assume AC or infer unrestricted DC. Prerequisites: `lem-banach-mazur-game-category-characterization`, `thm-ad-implies-countable-choice-for-baire-space`, `def-property-of-baire-for-subsets`. Source: https://homepages.math.uic.edu/~shac/determinacy/determinacy2015.pdf — Theorem 7.8 and its preceding local-to-global claim, p24; weak-choice witness selection supplied explicitly here; complete relevant proof read 2026-09-09. Rational-interval version proved locally.

  Complete argument: Fix A and let U be the union of all basic opens V on which A is comeagre. There are countably many such V. A closed set F is coded uniquely by the set of basic opens disjoint from F: its complement is their union. Thus a sequence of closed nowhere dense sets can be encoded by a binary array and then one Baire real using the explicit pairing from the game definition. For each basic V contributing to U, the set of codes of sequences covering V minus A is nonempty by the characterization and open-subspace transfer. For every other basic V use the singleton code of the all-empty sequence. Apply thm-ad-implies-countable-choice-for-baire-space to these sets of codes, and interleave the selected sequences by the fixed pairing. This gives an actual nowhere dense covering sequence for U minus A, rather than an unsupported countable union of existentially meagre sets.

  Put E=A minus U. AD applied to the explicitly coded legal category game makes it determined. I cannot win: the characterization would make E comeagre in a nonempty basic V; then A is comeagre there, so V subset U, but E intersect V is empty. That would make V meagre in itself, contradicting the direct least-refinement Baire argument. Therefore II wins, and the explicit strategy-to-witness construction makes E meagre. Interleave this witness sequence with the one for U minus A. Their union covers A symmetric-difference U, proving the claim by the definition. Exactly the same coded-open argument works for rational intervals, so no unproved transfer homeomorphism from sequence space to R is invoked.

**Reconcile-4 pathology closure (2026-09-09).** A now has 56 contracts; B remains 5. Add the existing earlier `non-measurable-sets-and-the-cost-of-choice` page (288.009, published) and `measurable-functions-and-simple-approximation` to SET-10 requires. The latter supplies `def-borel-and-lebesgue-measurable-function-on-rn`, used for the Hamel kernel consequence. Reuse `thm-vitali-sets-exist-under-choice-on-r-over-q` and `thm-a-vitali-set-is-not-lebesgue-measurable`, both published, for the Vitali construction and disjoint-rational-translate proof, retaining AC. No duplicate Vitali theorem or new pair is needed. The existing B-page Hamel example is comparison only, never a prerequisite. The original non-Borel false statement remains selected.

- `thm-choice-bernstein-set-pathology`: Assume AC. There exists a Bernstein B subset R. Both B and its complement are uncountable, contain no nonempty perfect subset, have no Baire property, are not Lebesgue measurable and are not Borel. B has inner measure zero and has full outer measure in every nondegenerate bounded interval. Existence alone requires only a wellordering of R; the measure consequences here use the explicitly stronger AC hypothesis. Prerequisites: `def-axiom-of-choice`, `thm-well-ordering-theorem`, `thm-bernstein-sets-exist-under-a-well-ordering-of-r`, `def-bernstein-set-on-r`, `cor-a-bernstein-set-is-not-lebesgue-measurable`, `thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval`, `lem-baire-property-sigma-algebra-and-borel-regularity`, `thm-nested-interval-property`, `lem-rat-embeds-dense`, `thm-rationals-countable`, `def-perfect-set-r`, `cor-archimedean-reciprocal`, `thm-recursion`. Sources: https://community.wvu.edu/~kciesiel/ProfessionalStuff/Other/ElectronicReprints/B2IntSetThe.pdf — complete Theorems 6.3.6–6.3.8, printed pp102–103, read 2026-09-09; the shrinking rational-interval proof here supplies category closure directly.; https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf — Proposition 10.13 p101; use existing real-line supplier rather than duplicate its existence proof.

  Complete proof: AC supplies a wellordering of R and countable choice (apply a choice function to the range of a sequence of nonempty sets and compose with the sequence). Apply the existing published real-line Bernstein existence theorem, which recursively picks least fresh points from continuum-sized perfect sets; no regularity of continuum is needed. By the Bernstein definition neither side contains a nonempty perfect set, and both sides are Bernstein. The existing published inner/outer-measure theorem and its nonmeasurability corollary now apply under countable choice to both sides. No sequence-space transfer or new existence theorem is assumed.

  Here is the missing category argument, including its supporting perfect-set construction. Given a nonempty real open interval J and a specified sequence (F_n) of closed nowhere dense sets, construct a binary tree of rational open intervals: start with a bounded rational interval whose closure lies in J minus F_0; at each level choose the least rational quadruple yielding two nonempty child intervals with disjoint closures inside the parent minus F_(n+1), each of length <1/(n+2). Such a quadruple exists by nowhere density and rational density. Recursion with least codes requires no further choice. Let K be the intersection over levels of the finite unions of closed intervals. It is closed and bounded. Every binary branch has a unique limit by the nested-interval theorem and the reciprocal bound, and disjoint siblings give distinct limits. Every point of K determines such a branch uniquely; following a different sibling at arbitrarily large depth gives another K point arbitrarily near it. Thus K is a nonempty perfect set contained in J and avoiding every F_n. This proves a local Cantor-avoidance lemma rather than citing a later perfect-set theorem.

  A meagre Bernstein B is impossible: close its nowhere dense witnesses and construct such K in (0,1) outside B. If B had the Baire property, write B symmetric-difference U subset union_n F_n with U open and F_n closed nowhere dense. If U is empty B would be meagre. Otherwise choose an interval J inside U; the same construction gives a perfect K subset J minus union_n F_n subset B, again impossible. The same proof applies to the complement. A countable subset is meagre by a singleton covering (a finite or empty set is padded), so both sides are uncountable. Finally every Borel subset of R has the Baire property by the earlier local sigma-algebra contract, whose countable witness choice is available from AC; hence neither side is Borel. AC is used for the initial wellorder and to cover the published measure/category choice hypotheses, not claimed to follow from AD.

- `thm-choice-hamel-basis-pathology`: Assume AC. Fix a Hamel basis B of R over Q and b in B. The coefficient map f=Lambda_b:R->Q subset R is additive, has dense graph, and is unbounded above and below on every nondegenerate interval and continuous nowhere. Its kernel W is not Lebesgue measurable; therefore f is not Lebesgue measurable. No assertion that every Hamel basis itself is nonmeasurable is made. Prerequisites: `lem-hamel-basis-exists`, `def-axiom-of-choice`, `lem-rat-embeds-dense`, `thm-rationals-countable`, `thm-of-archimedean`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-measure`, `def-borel-and-lebesgue-measurable-function-on-rn`, `def-borel-sigma-algebra`, `def-linear-subspace`, `def-continuity-real`. Sources: https://community.wvu.edu/~kciesiel/ProfessionalStuff/Other/ElectronicReprints/B2IntSetThe.pdf — full Proposition 7.3.1, Theorem 7.3.2, Corollary 7.3.3, printed pp111–112, read 2026-09-09. Nonmeasurable-kernel consequence is a local disjoint-translate argument from the explicit published measure dependencies.

  Complete proof: The published Hamel lemma supplies B, the unique additive Q-linear coefficient f, f(b)=1, its rational range, and a nonzero w in its kernel W. AC is used through that lemma's vector-space-basis/Zorn argument and to supply countable choice for Lebesgue measure. The subgroup Qw is dense: for any u<v pick a rational strictly between min(u/w,v/w) and max(u/w,v/w). Multiplication by w puts its multiple in (u,v), with order reversed when w<0. For rational q the fiber f^{-1}{q}=qb+W therefore meets every real interval. Every open rectangle (u,v) times (c,d) contains a graph point: choose rational q in (c,d) and then a point of qb+W in (u,v). Thus the graph is dense. Taking vertical intervals arbitrarily high or low proves unboundedness on each nondegenerate interval. For any x_0 and any delta>0, the rectangle (x_0-delta,x_0+delta) times (f(x_0)+2,f(x_0)+3) contains a graph point, contradicting the epsilon=1 continuity condition at x_0. This argument uses the existing coefficient supplier, not the B-page example as a dependency.

  Suppose W measurable, and let W_m=W intersect [-m,m] for positive integers m. For distinct rational q,r the cosets qb+W and rb+W are disjoint, since f((q-r)b)=q-r. Enumerate the infinitely many rationals with |qb|<1 by retaining them from a fixed rational enumeration. Infinitude follows from rational density on (-1/|b|,1/|b|); b is nonzero since f(b)=1. All translates W_m+qb are disjoint and contained in [-m-1,m+1]. If lambda(W_m)=a>0, its finite value follows from the enclosing box; Archimedean choose N with Na>2m+2. The first N translates have measure Na by finite additivity and translation invariance, contradiction. Thus every W_m is null. Their union W is null by countable subadditivity, derived from countable additivity by disjointizing. But R is the countable union of the null cosets qb+W as q runs over Q, again impossible since [0,1] has measure one. Hence W is nonmeasurable. The singleton {0} is closed and Borel, so if f were Lebesgue measurable its inverse image W would be measurable, contradiction. This proves the claimed measure consequence locally without a Steinhaus or measurable-Cauchy supplier.

**Reconcile-4 measure closure (2026-09-09).** A now has 60 contracts, exactly the existing limit; B remains 5. DC is an explicit separate hypothesis. No extra pair, Phase-2 count change or outside-run build is needed for these proposed local contracts. They follow the category/pathology contracts and are not published suppliers.

- `lem-dyadic-coding-coin-measure-and-lebesgue-transfer` (lemma): In ZF there is an injective binary coding b:[0,1)->C=2^N whose cylinder inverse images are dyadic half-open intervals. Assuming DC for the measure clauses, on Borel D subset C put nu(D)=lambda(b^{-1}(D)); this is a probability measure with nu(N_s)=2^{-|s|}. For arbitrary E subset C define nu_in(E)=sup{nu(K):K closed, K subset E} and nu_out(E)=inf{nu(O):O open, E subset O}. Then 0<=nu_in(E)<=nu_out(E)<=1 and nu_out(E)=1-nu_in(C minus E). Equality nu_in(E)=nu_out(E) implies b^{-1}(E) is Lebesgue measurable. Already in ZF, a compact Cantor copy contained in b[A], A subset [0,1), transfers to a compact Cantor copy in A. No product-measure existence theorem or AC is used. Prerequisites: `def-dependent-choice`, `def-countable-choice`, `lem-cantor-and-baire-sequence-coding`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-borel-sets-are-lebesgue-measurable`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-continuity-from-above-for-measures`, `thm-continuity-from-below-for-measures`, `def-borel-sigma-algebra`, `def-measure`, `thm-recursion`, `cor-archimedean-reciprocal`, `thm-nested-interval-property`, `def-continuous-map-top`, `def-compact-space`. Source: https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf — opening coin-measure convention p393; local construction supplies its previously missing prerequisites; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally.

  Complete argument: DC supplies countable choice explicitly: for a sequence (X_n) of nonempty sets take the set of all finite selections f with domain n and f(i) in X_i. The relation extending by one coordinate is entire; the empty selection is a starting point. DC gives a chain whose nth term has length n; its union chooses from every X_n. This licenses exactly the countable-choice hypotheses of the published Lebesgue measure and Borel measurability results.

  For binary word s of length n, recursively set I_empty=[0,1), and split each I_s=[a,a+2^{-n}) into its left/right halves I_(s0),I_(s1), always left-closed/right-open. These partition their parent. For x in [0,1), unique membership at each level defines b(x) by recursion, and b^{-1}(N_s)=I_s. If b(x)=b(y) then |x-y|<2^{-n} for every n, so x=y; the reciprocal/Archimedean bound proves 2^{-n}->0 since 2^n>=n+1. Open subsets of C are the union of their basic cylinders, a countably coded family, so their inverse images are Borel. The family of D with Borel inverse image is a sigma-algebra (inverse images commute with complements and countable unions), hence contains every Borel D. Restrict Lebesgue measure to these inverse images to define nu. Countable additivity follows directly by taking inverse images of disjoint sequences. Cylinder values are the lengths of I_s; in particular nu(C)=1. Continuity from above applies since the first set has measure at most one; continuity from below follows from the actual measure theorem. No countability of an arbitrary family of reals is being inferred.

  The inner/outer definitions use nonempty bounded sets of values: empty K and O=C are admissible. Monotonicity proves the inequalities. Complementation bijects closed K subset C minus E with open O containing E, and nu(C minus K)=1-nu(K), proving the complement identity. If both bounds equal t, for each n choose closed K_n subset E and open O_n superset E with nu(O_n)-nu(K_n)<2^{-n}, using countable choice on the set of such pairs; endpoints t=0 or1 allow K_n empty or O_n=C. Put K=union K_n, O=intersection O_n. Both are Borel, K subset E subset O, and nu(O minus K)<=nu(O_n minus K_n)<2^{-n} for every n, so nu(O minus K)=0. Thus b^{-1}(E) lies between Borel b^{-1}(K) and b^{-1}(O) with null difference. Completeness of Lebesgue measure proves it measurable. This proves the needed transfer directly, without presupposing a completed coin-measure theorem.

  For the last clause define pi:C->[0,1] by the unique point in the nested closures of the dyadic I_s. Equivalently it is the limit of the nondecreasing bounded dyadic left endpoints; existence uses real completeness, and the widths force uniqueness. If two inputs agree through n, their images differ by at most 2^{-n}, proving continuity. For every x, pi(b(x))=x. Hence pi is injective on b[A]. On a compact Cantor copy K subset b[A], pi is a continuous injection to R. It is a homeomorphism onto its image: compactness makes images of closed subsets compact, and compact subsets of a metric space are closed, by the finite-subcover separation argument. Therefore pi(K) is a compact Cantor copy in A. No inverse-continuity claim on all of C, nor unique binary expansion for dyadic endpoints, is used.

- `def-rational-determinacy-measure-game` (definition): For E subset C and rational 0<v<=1, start v_empty=v. At each round I chooses a rational pair (h_0,h_1) in [0,1]^2 with (h_0+h_1)/2>=v_current; II chooses e in {0,1} with h_e>0, and the next bound is h_e. I wins exactly when the resulting bit sequence belongs to E. First illegal move loses. Fixed rational-pair codes and bit codes make this an ordinary game on N. All legal positions have legal continuations. Prerequisites: `def-cantor-sequence-space-for-descriptive-set-theory`, `def-gale-stewart-games-on-pruned-trees`, `thm-rationals-countable`. Source: https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf — game definition pp393–394 and rational-move paragraph p396; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally.

  Complete argument: Pair the rational codes by the natural diagonal pairing. I may always choose (1,1); every legal I pair has a positive coordinate because v_current>0, so II has a legal response. Illegal pairs, illegal bits and nonpositive selected values are detected at their first occurrence. The subset of N^N declaring the first illegal II move or a legal E outcome to be a win for I defines the total payoff. A winning coded strategy restricts to a legal one since the opponent can always continue legally using least codes. This definition assumes neither AD nor AC.

- `lem-determinacy-measure-game-inner-outer-comparison` (lemma): In ZF+DC, for every E subset C and rational 0<v<=1, a winning I strategy in the rational measure game yields nu_in(E)>=v, and a winning II strategy yields nu_out(E)<=v. Inner and outer values are precisely the closed/open envelope values in the dyadic coding lemma. Prerequisites: `def-rational-determinacy-measure-game`, `lem-dyadic-coding-coin-measure-and-lebesgue-transfer`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `thm-recursion`. Source: https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf — complete Lemmas 1–2 pp394–396; nonnegative rational approximation and least-code selection expanded locally; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally.

  Complete argument: For I strategy sigma, a finite bit string p is acceptable iff all its bits are positive responses when sigma is followed; the complete game history psi(p) is uniquely reconstructed. At an acceptable p define f(p) to be the current bound; at other strings set f(p)=0. The game inequality gives (f(p0)+f(p1))/2>=f(p) for every p, including unacceptable strings and their extensions. Induction gives sum_{|p|=n}2^{-n}f(p)>=v. Since 0<=f<=1 and f vanishes off the acceptable tree, the clopen union C_n of acceptable length-n cylinders has measure at least v. The C_n decrease, so the closed set C=intersection C_n has measure at least v by continuity from above. Every branch in C reconstructs a legal full sigma-play and lies in E. Thus nu_in(E)>=v.

  For II strategy tau fix rational delta>0. Recursively build an acceptable bit tree and consistent histories psi(p), starting with the empty history. At an acceptable p with current rational bound v_p, let u_e be the infimum of h_e over legal rational pairs h for which tau(psi(p) followed by h)=e; set inf empty=1. Then (u_0+u_1)/2<=v_p. To prove this carefully, suppose the inequality failed. Choose rational h_e with 0<=h_e<u_e whenever u_e>0, and h_e=0 if u_e=0, close enough from below that their average still exceeds v_p. This is a legal pair in [0,1]^2. Tau must select a positive coordinate e; hence u_e>0 and h_e<u_e, contradicting the defining infimum. This repairs the unchecked subtraction u_e-epsilon at a zero coordinate in the printed argument.

  Declare pe acceptable exactly when p is acceptable and u_e<1. For such e the defining set is nonempty, and choose the least code of a legal rational pair h^{p,e} producing response e and satisfying h^{p,e}_e<u_e+delta*2^{-(|p|+1)}. Such a pair exists by the infimum property. Define psi(pe) by that actual pair and response. Every chosen response is positive by legality. No arbitrary choice of a real move is used; least rational codes make the recursive rule single-valued. At acceptable p set f(p)=v_p; at other p set f(p)=1. For excluded children u_e=1, so f(pe)=1<=u_e+delta*2^{-(|p|+1)}. Hence at length n the average child value is <=f(p)+delta*2^{-(n+1)}; for an unacceptable p both children have f=1 and the same inequality holds. Induction gives sum_{|p|=n}2^{-n}f(p)<=v+delta*(1-2^{-n}). The clopen union U_n of unacceptable length-n cylinders therefore has measure <=v+delta*(1-2^{-n}), since f is nonnegative and equals one there. These U_n increase. Every branch outside their union reconstructs an infinite tau-play and lies outside E. Thus U=union U_n is an open superset of E with nu(U)<=v+delta by continuity from below. It follows nu_out(E)<=v+delta for every positive rational delta, hence <=v. All uses of nu and continuity are supplied by the previous lemma under DC; no regularity theorem for arbitrary E was assumed.

- `thm-ad-and-dc-imply-lebesgue-measurability` (theorem): In ZF+AD+DC every subset of R is Lebesgue measurable. DC is separately assumed, not deduced from AD; no AC-based theorem of determinacy, analytic regularity, or recorded-not-proved result is consumed. Prerequisites: `def-axiom-of-determinacy-for-natural-number-games`, `def-dependent-choice`, `lem-determinacy-measure-game-inner-outer-comparison`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-of-archimedean`. Source: https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf — rational-move and AD conclusion p396; complete local real-line transfer from the new dyadic interface; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally.

  Complete argument: For E subset C, AD determines each rational measure game by its explicit natural-number coding. If nu_in(E)<nu_out(E), rational density gives v strictly between them with 0<v<=1. I winning would imply nu_in(E)>=v and II winning would imply nu_out(E)<=v; both contradict the choice of v. Thus the two values agree. The dyadic transfer lemma implies b^{-1}(E) is Lebesgue measurable.

  For arbitrary A subset [0,1), take E=b[A]. The coding b is injective, so b^{-1}(E)=A. Thus every subset of [0,1) is measurable. For any A subset R, the translates A_m=(A intersect [m,m+1)) minus m, m integer, lie in [0,1) and are measurable. Translation invariance gives measurability of A_m+m. Enumerate the integers explicitly as 0,1,-1,2,-2,...; their union is A because the Archimedean property puts every real in one such unit interval. The Lebesgue sigma-algebra, available from DC's countable choice in the interface lemma, is closed under this sequence of unions. Hence A is measurable. This uses a defined family, not choices of per-interval measures or sets.

**Real-line perfect-set reconciliation (2026-09-09).** Move the existing `thm-ad-implies-perfect-set-property-for-sequence-spaces` after the dyadic interface, retaining its ID and original sequence-space claims. Its statement now also covers R in ZF+AD. Additional prerequisites: `lem-dyadic-coding-coin-measure-and-lebesgue-transfer` (ZF coding clause only), `thm-ad-implies-countable-choice-for-baire-space`, `thm-of-archimedean`. Full added argument: For A subset R, put A_m=(A intersect [m,m+1)) minus m, using an explicit integer enumeration. Apply the C result to b[A_m]. If some b[A_m] contains a compact Cantor copy K, the ZF coding/continuous-evaluation clause of lem-dyadic-coding-coin-measure-and-lebesgue-transfer sends K homeomorphically into A_m, and translation gives a compact Cantor copy in A. Only that lemma's ZF clause is used, not its DC measure clauses. If every b[A_m] is at most countable, then every nonempty b[A_m] has a surjective enumeration by N (invert an injection into N on its range and fill omitted indices with the value of the least used index). A sequence of binary sequences is coded by one binary sequence via the fixed pairing. For each nonempty b[A_m], its nonempty set of enumeration codes is a set of Baire reals; for an empty one use the singleton all-zero code and record that interval as empty. AD countable-real-choice selects these codes simultaneously. Decode, apply pi and translate by m, and interleave by the same pairing over nonempty intervals. If A is nonempty fill empty slots with one fixed a in A; otherwise use its empty injection. This yields a surjection from N onto A when nonempty. Assign each a its least enumeration index to get an injection A->N. Thus no unrestricted countable choice or DC is used to prove the real-line perfect-set alternative.

**Boundary.** Projective determinacy and its Woodin-cardinal strength are an
advanced continuation, not smuggled into the Solovay proof.

---

# II. Constructibility and forcing

## SET-11. The Constructible Hierarchy and Inner Models

**Items.** Definable subsets of a set-sized structure; absoluteness of `Def`;
the hierarchy `L_alpha`; transitivity and monotonicity; `L` contains all
ordinals; constructible rank; `L` satisfies Extensionality, Foundation,
Pairing, Union, Infinity, Separation and Power Set internally; definability
lemma; Replacement in `L`; canonical definable global well-order; `L |= AC`;
minimality of `L`; HOD comparison; semantic and formal inner-model theorem.

**Target part.** This closes the AC half of
`rem-godel-constructible-universe`, but GCH waits for SET-12.

## SET-12. Condensation, GCH, and Diamond in L

**Items.** Skolem hulls in `L_alpha`; condensation lemma; fine counting of
definable subsets; constructible power sets appear before the next cardinal;
covering of constructible subsets by levels; `L |= GCH`; `V=L` implies diamond;
diamond builds Suslin trees; formal interpretation yielding
`Con(ZF) -> Con(ZFC+GCH)`; positive CH/GCH consistency corollaries;
`fs-l-equals-v-in-zf`.

**Targets.** Completes `rem-godel-constructible-universe` and the positive
halves of `rem-independence-of-ch-and-gch`; supplies the `L` direction of
`rem-suslin-hypothesis-independent`.

## SET-13. Forcing Orders, Names, and Generic Extensions

**Items.** Forcing conventions and compatibility; dense/open dense sets;
generic filters over a model; Rasiowa--Sikorski; names and rank of names;
check names and canonical generic name; valuation; transitivity of `M[G]`;
ground-model embedding; reconstruction of `G`; names for ordered pairs,
functions and ordinals; Boolean-valued semantics; existence of generics for
countable models; `fs-a-generic-filter-belongs-to-the-ground-model`.

## SET-14. The Forcing Theorem and Formal Consistency Transfer

**Items.** Recursive definition of forcing for atomic formulas; definability
lemma; monotonicity and density lemmas; truth lemma; forcing theorem;
`M[G]` satisfies ZF/ZFC; preservation of ordinals; forcing equivalence and
Boolean completion; intermediate model orientation; semantic theorem for a
countable transitive model; finite-fragment/Boolean-valued formalization;
proof-theoretic `Con` transfer; `fs-the-ctm-presentation-proves-con-zfc`.

**Proof trap.** The final formal item, not the CTM narrative, licenses every
relative-consistency conclusion below.

## SET-15. Preservation, Cohen Forcing, and the Continuum

**Items.** Closure and distributivity preservation; chain conditions and
antichains; nice names; Delta-system ccc proof; cardinal/cofinality preservation;
Cohen, collapse and Levy-collapse posets; mutually generic Cohen reals;
forcing `2^aleph_0 >= aleph_2`; name counting under ground GCH; exact continuum
`aleph_2`; `Con(ZFC)->Con(ZFC+not CH)`; a forcing violating GCH at a higher
regular cardinal; `Con(ZFC)->Con(ZFC+not GCH)`; Easton-support orientation;
`fs-ccc-means-countably-closed`.

**Target.** Supplies the negative halves of
`rem-independence-of-ch-and-gch`. AC failure does not appear here: ordinary
forcing over a ZFC ground model still satisfies AC.

## SET-16. Finite-Support Iterations and Martin's Axiom

**Items.** Two-step iterations; finite-support iteration and name bookkeeping;
ccc preservation at successor and limit stages; nice-name capture; definition
of `MA(kappa)` and MA; Rasiowa--Sikorski gives `MA(aleph_0)`; CH implies MA;
the `omega_2` bookkeeping iteration; preservation and continuum computation;
`Con(ZFC)->Con(ZFC+MA+not CH)`; MA consequences for null/meagre unions,
cardinal exponentiation and ccc products; `fs-ma-implies-ch`.

**Target.** Every clause in `rem-martins-axiom` receives an internal proof or
formal relative-consistency destination here.

## SET-17. Suslin Trees, Lines, Algebras, and Independence

**Items.** Suslin line/tree/algebra definitions; Kurepa equivalences in both
directions; Suslin tree yields nonproductive ccc; `MA_aleph1` destroys Suslin
trees; `MA+not CH -> SH`; forcing a Suslin tree; specializing/killing a Suslin
tree; finite-support iteration kills all named Suslin trees; consistency of SH;
diamond and `L` give a Suslin tree; consistency of not-SH; exact conditional
independence summary; `fs-sh-is-ch`.

**Kurepa prerequisites.** Prove pruning and normal-tree reduction, the
first-difference rule for branch lexicographic order, countable-order
embedding in Q, rational specialization from a countable antichain cover,
the separable-interval quotient, existence and uniqueness of order completion,
and the order-density/completion lemma
before the equivalence. Monk 9.12–9.18 and 9.36–9.37 have been read in full;
the necessary history-tree normalization (before selecting splitting levels),
indexing and convex-class corrections are recorded in
`phase-2-set-blocker-resolution-2026-09-08.md`. The SET-9 orientation is
not a supplier for either implication.

**Target.** Proves every mathematical clause of
`rem-suslin-hypothesis-independent`, including the ccc-square consequence.

## SET-31. Easton's Theorem and Cardinal Invariants of the Continuum

**Items.** Continuum function constraints; Easton functions; Easton-support
products and iterations; preservation and continuum calculation; Easton's
theorem for regular cardinals; singular-cardinal caveat; `P(omega)/fin`;
almost-inclusion and towers; `p`, `t`, `b`, `d`, `s`, `r`, add/cov/non/cof of
null and meagre ideals; Cichoń diagram inequalities; forcing computations;
`p=t` proof architecture; `fs-zfc-determines-the-continuum-function`.

This page completes the standard continuum-combinatorics branch; it is not a
prerequisite for the older deferred catalogue.

---

# III. Choice failure and symmetric models

## SET-18. Permutation Models and Transfer to ZF

**Items.** ZFA and atoms; permutation groups, stabilizers and supports;
normal filters of subgroups; symmetric/hereditarily symmetric sets; Fraenkel--
Mostowski model theorem; basic and ordered Mostowski models; boundable formulas;
Jech--Sochor first embedding theorem; Pincus transfer interfaces; preservation
limits of transfer; the second Fraenkel socks model; transfer of “a countable
family of pairs has no choice function”; `fs-a-zfa-model-is-a-zf-model`.

**Target.** Proves `rem-fraenkel-socks-model`, including the atom-to-ZF step.
The Jech--Sochor proof uses the forcing theorem from SET-14; it is not inferred
from permutation-model syntax alone.

## SET-19. Symmetric Extensions and Basic Choice-Failure Models

**Items.** Automorphisms of forcing and names; symmetric systems; supports;
hereditarily symmetric names; symmetry lemma; transitivity of the symmetric
inner model; verification of every ZF axiom; canonical name theorem; basic
Cohen model; the set of generic reals exists but its enumeration does not;
infinite Dedekind-finite set of reals; equivalence here of no countably infinite
subset, no injection from omega and no bijection with a proper subset; failure
of well-orderability and AC;
formal `Con(ZF)->Con(ZF+not AC)` transfer; atom-free socks model;
`fs-every-symmetric-submodel-satisfies-choice`.

**Targets.** Proves `rem-cohen-forcing-ac-independent`,
`rem-cohen-first-model`, and the direct symmetric-model version of
`rem-fraenkel-socks-model`.

## SET-20. Symmetric Collapse and Ultrafilter-Free Models

**Items.** Symmetric Levy collapse; finite-support layer analysis;
Feferman--Levy inner model; each layer of reals is countable; reals are a
countable union of countable sets but remain uncountable; new `omega_1` is the
old `aleph_omega`; `cf(omega_1)=omega`; failure of countable-union and
regularity principles; Feferman's definability model `M*(S_0,S_1,...)`;
tail-complement automorphism lemma; every prime ideal of `P(omega)` is
principal; no free ultrafilter on `omega`; Blass's finite-modification classes,
parameter-HOD model and proof that all ultrafilters on all sets are principal;
UFL and BPI are therefore not ZF theorems; formal consistency corollaries.

**Mandatory correction before authoring.** The published Feferman remark's
finite-bit-flip explanation is false: a free ultrafilter is invariant under
finite modification. Author from Feferman's Theorem 4.12, where a tail is
changed essentially to its complement after the finite parameter set is
isolated. The Blass proof requires the full later exposition, not the current
remark's method-free sentence.

**Targets.** Proves `rem-feferman-levy-model`,
`rem-feferman-no-free-ultrafilter-in-zf`, and
`rem-blass-model-without-ultrafilters`.

## SET-21. Halpern--Läuchli and BPI without Choice

**Items.** Finite products of finitely branching trees; level products and
dense matrices; Halpern--Läuchli partition theorem; automorphism analysis of
the basic Cohen model; symmetric-name support reduction for Boolean algebras;
extension of finite partial prime ideals; compactness tree; BPI in the basic
Cohen model; failure of AC there; `Con(ZF)->Con(ZF+BPI+not AC)`; BPI equivalent
to the ultrafilter lemma; combination with SET-20 giving strict relative
placement over ZF; `fs-bpi-well-orders-every-set`.

**Finite-product proof spine.** Include the finite word-calculus rearrangement
lemma, soundness of the three rule classes, monotonicity under shrinking
universal sets, and finite density-preserving thinning before the matrix
theorem. Monk 29.28, printed pp.661–670, was read in full. In the complement
case extend the finitely many cone roots to the common height h=max n_i,
then restrict the p=h+k dense sets to those cones; this proves the required
(h,k)-matrix assertion. Do not identify full products with level products or
claim that this ZFC proof supplies the later symmetric-model support analysis.

**Target.** Proves every clause of `rem-halpern-levy-bpi-not-ac`.

## SET-22. Choice Strength in Baire, Urysohn, Stone, and Tychonoff

**Items.** Choice-free Baire theorem for separable complete metric spaces;
`DC ->` complete-metric Baire and Blair's converse; DMC tree formulation;
compact-Hausdorff Baire equivalent to DMC; products-of-compact-Hausdorff Baire
distinguished from individual spaces; dyadic Urysohn construction under DC and
DMC; Läuchli countermodel and transfer; Tachtsis `AC_omega+not URY` model and
erratum; BPI-not-URY model and transfer; Stone's metric paracompactness theorem
under AC; Good--Tree--Watson `ZF+DC` countermodel; Corson BPI countermodel;
effective-metacompactness implication to multiple choice/AC; Kelley's cofinite
argument failure; Schechter's exact BPI result; isolated-point repair;
compact-Hausdorff products iff BPI; compact `T_1` products iff AC; open-status
items for `URY -> DMC?` and exact Stone-versus-AC strength; DC implies DMC;
BPI does not imply DMC; DMC is not a ZF theorem; the sourced DMC-versus-MC/AC
and ZFA qualifications; arbitrary compact products are compact iff AC.

**Source blockers.** The currently recorded assertion “DMC is strictly weaker
than DC in ZF” remains a required target but is **unverified**: the accessible
Fossy--Morillon abstract says the reversal was open, while a later slide asserts
strictness without the primary proof recovered. Step 1 must recover the proof
and source or record a fatal correction; it may not silently weaken the claim.

**Targets.** Proves all supported clauses in
`rem-baire-category-choice-strength`, `rem-urysohn-lemma-not-a-zf-theorem`,
`rem-stone-theorem-choice-strength`, and
`rem-schechter-kelley-tychonoff`. The two explicitly open implications remain
dated status remarks, not fake theorems.

---

# IV. Large cardinals, regularity, forcing axioms, and topology

## SET-23. Large Cardinals, Measures, and Elementary Embeddings

2026-09-11 actual-interface reconciliation: SET-9 supplies the kappa-tree
and partition-arrow definitions used in the weak-compactness and Henkin
arguments. This existing published prerequisite is explicit in the plan.
The ultrapower critical-point lemma also uses the earlier local inaccessible
rank-size bound; ultraproduct/Scott definitions name their following
well-definedness lemmas. These declaration fixes do not clear the outstanding
preparation/PMEA placement or mathematical/source escalations.

**Items.** Inaccessible, Mahlo, weakly compact, measurable, strongly compact
and supercompact cardinals; implication diagram; normal measures and ultrapowers;
Łoś theorem; well-foundedness and collapse of ultrapowers; elementary-embedding
characterizations; weak compactness and tree/partition properties; compactness
for infinitary logic; fine ultrafilters; strong compactness and product-measure
extension interface; supercompact preparation/interface; consistency-strength
ledger; `fs-zfc-proves-there-is-an-inaccessible-cardinal`.

## SET-24. Solovay's Model and Regularity of All Sets of Reals

**Items.** Levy collapse of an inaccessible; homogeneity and intermediate real
models; hereditarily real/ordinal-definable inner model versus `L(R)`;
verification of ZF and DC; every set of reals has a real/ordinal definition;
Lebesgue measurability; Baire property; perfect-set property for uncountable
sets; absence of Vitali/Bernstein sets and Hamel bases; failure of full AC;
no discontinuous additive solution of Cauchy's equation obtained from a Hamel
basis and no Banach--Tarski decomposition;
formal relative-consistency theorem from an inaccessible; distinction of the
two standard inner models; `fs-solovays-model-proves-an-inaccessible-exists`.

**Target.** Proves every positive and negative consequence recorded in
`rem-solovay-model` with the inaccessible hypothesis retained.

## SET-25. Shelah's Baire-Property Model and Inner-Model Lower Bounds

**Items.** Sweet ccc forcings and amalgamation; the CH-length iteration;
preservation and coding; `HOD(real,ordinal)` model; ZF+DC verification; every
set of reals has the Baire property; formal equiconsistency with ZFC/ZF as in
Shelah §§7.16--7.17; Solovay random-real analysis; `Sigma^1_3` measurability
implies `omega_1` inaccessible in `L`; derivation of the inaccessible lower
bound for “all sets measurable”; exact equiconsistency formulation; separation
of Baire property from measurability; `fs-the-baire-property-model-needs-an-inaccessible`.

**Source discipline.** Do not strengthen the recovered `omega_1`-in-`L`
conclusion to “inaccessible in every `L[r]`” without a separate source.

**Target.** Proves `rem-shelah-inaccessible-and-the-baire-property`.

## SET-26. Prikry Forcing and Gitik's Singular-Cardinal Model

**Items.** Prikry forcing from a normal measure; Prikry property; no new bounded
subsets; cofinality change and cardinal preservation; Magidor/extender
orientation; strongly compact ultrafilters; proper-class forcing theorem used
by Gitik; intermediate `ZF^- + Collection` model in which all sets are
countable; symmetric submodel definition; Separation, Replacement, Power Set
and Foundation verification; every limit ordinal has cofinality omega; hence
every uncountable cardinal is singular of cofinality omega; formal consistency
transfer from arbitrarily large/proper-class strongly compact cardinals;
`fs-prikry-forcing-is-ccc`.

**Target.** Proves the exact strong form behind
`rem-gitik-all-uncountable-cardinals-singular`. “Iterated Prikry-style forcing”
is not accepted as a proof substitute.

## SET-27. Proper Forcing, Countable-Support Iterations, and PFA

**Items.** Proper posets via countable elementary submodels; master conditions;
properness preserves `omega_1`; countable-support iteration theorem;
specialization and preservation examples; definition of PFA; Laver preparation
interface; supercompact bookkeeping iteration; formal consistency of PFA from
a supercompact; PFA consequences for trees, reflection and topology; PFA
implies no S-spaces; comparison with MA; `fs-ccc-and-proper-are-equivalent`.

## SET-28. Normal Moore Spaces, PMEA, and Consistency Strength

**Items.** Moore developments and normal Moore spaces; collectionwise
normality/metrizability bridge; CH construction of a normal nonmetrizable Moore
space; `V=L` consequence; MA+not-CH counterexamples via uncountable Q-sets;
product measure extension axiom; PMEA implies the normal Moore conjecture;
forcing PMEA from a strongly compact cardinal; covering-lemma/core-model
interface; NMSC implies an inner model with a measurable cardinal; upper and
lower relative-consistency statements; modern `omega_1`-strongly-compact
refinement as a sourced remark; `fs-nmsc-is-a-zfc-theorem`.

**Target.** Proves every mathematical clause of
`rem-normal-moore-space-conjecture`; the conclusion is relative to the named
large-cardinal hypotheses, never unconditional “independence.”

## SET-29. Minimal Walks, Oscillation, and L- and S-Spaces

**Items.** C-sequences on `omega_1`; traces and minimal walks; coherent
finite-to-one functions; oscillation maps and coloring lemmas; Moore's topology
on a subspace of `T^{omega_1}`; hereditary Lindelöf proof; nonseparability;
ZFC L-space theorem; CH construction of an S-space; PFA reflection lemma;
PFA implies no S-spaces; formal consistency from a supercompact; exact
asymmetry summary; `fs-l-and-s-space-existence-are-dual-zfc-theorems`.

**Target.** Proves every clause of `rem-l-spaces-and-s-spaces`.

## SET-30. PCF Scales and ZFC Dowker Spaces

**Author dependency reconciliation — 2026-09-10.** Use the current exact
item-level supplier lists in the canonical plan, reconciled from the completed
author checkpoints and recorded in
`phase-2-catchup-24-step5-dependency-reconciliation.md`. In particular, PCF
cutoffs and universal sequences explicitly use ultrafilter characterization;
maximum-PCF and generator restriction use the ultrafilter lemma. Rudin's
internal domination uses the already proved bounded-cofinality hull lemma,
not a second implicit model-construction argument. Retain the direct ordinal
sum/product, regularity, recursion, rank-transitivity and cardinal-absorption
suppliers used by the completed topological proofs. The reduced-product and
Rudin definitions name their local well-definedness lemmas. These updates
preserve all statements and scope; they are not Step6B approvals.

**Binding local-closure organization — 2026-09-09.** The owner retains the
original 24 pairs and does not authorize the five extra pairs proposed by
the Step-3 reviewer. No such pair is admitted. Preserve every commissioned
conclusion by completing this pair locally, in proof order; do not treat an
obligations remark as a theorem. The live scaffold now contains 60 A items and four B examples: the prior
33 A contracts minus the obligations-only remark, plus ten general-PCF,
eight Balogh and ten small-Dowker contracts. The two numerical-invariant
contracts are retained, not counted twice. These are proposed complete local
proofs, not independent approval. If review finds a gap, retain an explicit
insufficient verdict rather than weaken the conclusion.

Prove compact-factor closed projection and increasing-cover refinement inside
the existing topology lemmas before any Dowker construction. Add the two
exact contracts `lem-cofinal-aleph-product-cardinality` (both injections,
AC explicit) and `thm-kojman-shelah-space-weight-and-character` (actual base
and local-base bounds). The direct countable scale route does not depend on
general generators, Balogh or the small-space constructions; keep that
noncircular distinction.

The ten general-PCF units cover progressive products, cofinality ideals,
general directed-product chains, ideal-directedness/cofinality cutoffs,
maximum possible cofinality, universal sequences, strengthened universal
sequences, generators, restriction/finite-generation/true-cofinality
consequences, and no-holes for progressive intervals. Generalize the existing
bounding-projection/exact-bound lemmas only with full ideal-based proofs,
retaining their countable specializations. Abraham–Magidor §§2–4 supplies
the relevant arguments; changing notation alone is not a proof.

Keep the eight proposed Balogh units: finite restriction data, restriction
enumeration, combinatorial map, topology, basis, hereditary normality,
shrinking obstruction and the continuum-sized theorem. Solve Hart §5.2's
construction exercises with corrected domains/indices, rather than importing
them. The ten small-space units combine precise vocabulary in one definition,
then CH-to-Luzin, Luzin-to-coloring, coloring-to-AD-guessing, stick-to-AD,
ladder topology, normality, shrinking obstruction, and the conditional theorem
with exact diamond/club implication checks. Include all retained implications;
distinguish ordinary diamond, diamond(b), Ostaszewski club, parameterized
AD-guessing and ordinary club guessing.

The integrated source readings and local proofs include the omega1 specializations of RST Fact3.2
(coherent coloring from LHR23 Lemma3.31) and Fact4.2 (strengthened stick from
CGW20 §3). Rinot–Shalev §3 pp16–19 supplies the ladder normality/shrinking
proof; prove the needed countable local almost-P0 disjointification explicitly.
Here the small-space parameter is kappa=omega_1 and E consists of its
countable-cofinality ordinals, not the preceding Balogh continuum parameter.
The local disjoint-tail coloring works for omega colors, not only two.
Supply the pressing-down instance from diagonal intersection of clubs in the
coloring-to-AD proof; it is not an undeclared prerequisite.
No forcing/MA theorem is supplied by a citation or by the page allocation.
Research, exact source receipts and remaining independent-review gates are in
`phase-2-catchup-24-set30-staged.notes.md` and the three imported local
PCF/Balogh/small-Dowker reports. Their Step5 arguments are now authored;
they remain draft and require Step6B review and later certification.
Current source routes are Abraham–Magidor, Hart §5.2, Rinot–Shalev paper48,
and Rinot–Shalev–Todorcevic arXiv2209.10504v1 (September21,2022).
The last source's Theorem3.3 is on pp6–10 and Theorem4.3 on pp11–12;
do not reuse the December22 author-version Corollary3.6 locator for this
edition. Helper handoffs record fresh readings and the complete local walk,
stationary-splitting and closed-expansion arguments. Countable-space and
rational-density suppliers used by those arguments are explicit in the plan.

**Rudin tail prerequisites.** Include
`lem-rudin-internal-hull-tail-domination` and
`lem-rudin-neighborhoods-of-initial-top-slices-contain-tails` before the
shrinking obstruction. The first constructs an internally increasing
aleph_k-length elementary chain in V_theta using the published parameterized
downward LS and Tarski–Vaught theorems, rank bounds and successor regularity.
The second handles all finite sets of coordinates at their top ordinal:
choose neighborhoods of every corresponding finite modification of the hull
supremum, combine their countably many lower bounds off those coordinates,
and transfer the resulting internal tail assertion by elementarity. State
AC and its hull/neighborhood choices. Do not infer u<=x merely from u in M;
do not assume V_theta models ZFC. These local lemmas require no new Phase-2
pair or unpublished reflection theorem. Also include
`lem-rudin-bounded-cofinality-hull-transfer` and
`lem-rudin-discrete-families-have-discrete-ambient-closures` before
collectionwise normality. Use one cofinal-sequence index for each of the
finitely many low cofinality levels, and an internal hull function on the
remaining coordinates. Prove indexed discreteness first on each stratum,
then use countable closure unions and intersections in the ambient P-space
to obtain discreteness of the full family. Pairwise disjointness alone is
insufficient. These four local contracts await independent review. PCF
scale existence now has the local proof chain below, also pending review.

**2026-09-09 normalization reconciliation.**
`lem-normalizing-a-scale-at-existing-least-upper-bounds` retains its local
`thm-pcf-aleph-omega-plus-one-scale` edge. Add the published AC clause of
`thm-regularity-of-the-alephs` and `thm-cofinality-basics` to its dependencies.
At a limit stage, strictness is immediate from
f_gamma <* f_(gamma+1) <=* h; it does not need a countable-coordinate
leastness argument. Regularity bounds the earlier indices into the original
scale; successor stages above the current original index ensure cofinality.
AC selects least-upper-bound representatives, and `thm-transfinite-recursion`
defines the construction. The scale supplier is now scaffolded locally by
the seven contracts below, not imported from an outside-run pair. Abraham
and Magidor's countable-cofinality exercise is expanded through exact upper
bounds and club guessing for uncountable regular cardinals only. No general
generator, no-holes or recorded theorem is a premise. This closes the proposed
scale prerequisite chain, not independent proof review. General generators,
no-holes, Balogh and small-Dowker coverage obligations remain binding and
must not be silently removed just because this narrower scale proof suffices.

**Local scale prerequisite inventory — 2026-09-09.** All seven contracts assume AC; each proof records its selections. They are scaffolded, not published. Source: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf (precise locators below).

- `def-strong-increase-and-bounding-projections-for-countable-products` — Work in ZFC on a countably infinite index set A. A sequence (f_alpha) is strongly increasing if finite sets Z_alpha satisfy f_alpha(a)<f_beta(a) whenever alpha<beta and a is outside Z_alpha union Z_beta. For regular lambda and kappa<=lambda, property star_kappa says every unbounded U subset lambda has an order-type-kappa strongly increasing subsequence. For nonempty ordinal sets S(a), the ceiling projection of f at a is min{s in S(a):f(a)<=s}, whenever this exists. The bounding projection property for kappa says that if |S(a)|<kappa and f_alpha<*sup S for every alpha, some projected f_alpha is a strict eventual upper bound of the sequence. Exceptional coordinates may be set to a fixed fallback value; all assertions are modulo finite sets. An exact upper bound h is an eventual upper bound such that every g<*h is <* some f_alpha. Dependencies: `def-reduced-ordinal-products-and-scales`, `thm-cofinality-basics`, `def-axiom-of-choice`. Source: Definitions 2.4, 2.8, 2.10 and exact-upper-bound definitions, pp11–16.

  Proof strategy: Define all relations explicitly, including the difference between <=* and <*. The projection is the least eligible ordinal, so exists wherever f(a)<sup S(a); exceptional finite coordinates do not change eventual comparisons. Use a common pointwise strict bound H for the entire set-sized sequence whenever a projection construction needs values at every coordinate. Explain that a strict increasing sequence has f_alpha<*h for every eventual upper bound h by inserting alpha+1. Exactness implies leastness: if u is an upper bound and h exceeds u on an infinite set P, use g=u on P and 0 elsewhere, with the finitely many zero coordinates of h discarded, to contradict exactness. This convention is used only where h is eventually positive.

- `lem-strong-increase-gives-bounding-projections` — Assume AC. Let A be countably infinite, lambda regular uncountable, and (f_alpha)_{alpha<lambda} strictly increasing modulo finite sets. If star_kappa holds for an uncountable regular kappa<=lambda, then the bounding projection property holds for kappa. Dependencies: `def-strong-increase-and-bounding-projections-for-countable-products`, `thm-cofinality-basics`, `thm-transfinite-recursion`, `def-axiom-of-choice`. Source: Lemma 2.12, p16.

  Proof strategy: Suppose every ceiling p_alpha fails to strictly bound the sequence. Choose a later beta with {a:p_alpha(a)<f_beta(a)} infinite: failure first gives <= on an infinite set; going one more step makes the inequality strict outside a finite set. Recursively thin lambda to an unbounded U so that this holds for every earlier/later pair in U; regularity bounds the previous witness indices at each step. Apply star_kappa. For each index i in its order-type-kappa enumeration, choose a_i where p_i<f_{i+1} outside the two finite exceptional sets. Since kappa is regular uncountable and A countable, one coordinate a is chosen kappa times. At these indices the projection values in S(a) are strictly increasing: p_i(a)<f_{i+1}(a)<=f_j(a)<=p_j(a) for i<j. This contradicts |S(a)|<kappa. AC is used for recursive witnesses and the stated cardinal pigeonhole argument; finite modifications of the f_alpha merely enlarge their individual finite exceptional sets.

- `lem-bounding-projections-give-exact-upper-bounds` — Assume AC. For a countable A and regular lambda>aleph_1, a strictly eventual increasing lambda-sequence satisfying the bounding projection property for aleph_1 has an exact upper bound h. If it also has that property for an uncountable regular kappa, then cf(h(a))>=kappa outside a finite set. The exact bound is unique modulo finite equality. Dependencies: `def-strong-increase-and-bounding-projections-for-countable-products`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion`, `def-axiom-of-choice`. Source: Theorem 2.13, Lemma 2.14 and Theorem 2.15 implication 2 to 3, pp17–19.

  Proof strategy: Fix a pointwise strict bound H(a)=sup_alpha(f_alpha(a)+1)+1. If there is no minimal eventual upper bound below H, recursively for eta<omega_1 form countable S_eta(a) containing H(a), increasing by inclusion and by union at limits. The projection property gives an index alpha_eta such that h_eta=proj(f_alpha_eta,S_eta) is an upper bound. For every beta>=alpha_eta, proj(f_beta,S_eta)=*h_eta: f_alpha_eta<=*f_beta<*h_eta and h_eta is itself a value of S_eta. Choose an upper bound u_eta<=h_eta pointwise which is smaller on infinitely many coordinates (take a pointwise minimum if needed), and adjoin u_eta(a) to S_eta(a). Choose beta<lambda above all alpha_eta. Then H_eta=proj(f_beta,S_eta) decreases pointwise, and H_{eta+1}<H_eta on an infinite set for each eta, since both projections eventually equal h_eta and u_eta respectively. Some fixed coordinate decreases infinitely often, impossible for ordinals. Thus a minimal bound h exists. It is eventually positive and limit-valued: zeros contradict f_1> * f_0>=0, and replacing successor values by predecessors on infinitely many coordinates preserves upper-boundedness while strictly lowering h, a contradiction. Modify finitely many coordinates to nonzero limits. For g<*h, project onto {g(a),h(a)} off its finite exceptional set. A bounding projection below h must equal h eventually by minimality, which forces g<*f_alpha. This proves exactness and leastness, hence uniqueness. For the final clause, if P={a:cf(h(a))<kappa} is infinite, AC selects cofinal S(a) subset h(a) of size <kappa on P and uses {h(a)} elsewhere. The projection property would give an upper bound below h on all of P, contradicting minimality. This also proves the clause for all kappa when the same sequence has several bounding projection properties.

- `lem-uncountable-club-guessing-at-a-double-successor` — Assume AC. If kappa is uncountable regular and theta=kappa^{++}, there are clubs C_delta subset delta of order type kappa for every delta in E^theta_kappa such that each club E subset theta contains some C_delta. Dependencies: `thm-small-intersections-of-clubs`, `thm-regular-cofinality-strata-are-stationary`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion`, `def-axiom-of-choice`. Source: Theorem 2.17, complete uncountable-case proof pp20–21.

  Proof strategy: AC selects initial clubs C_delta of order type kappa. For a club E, restrict to delta in E' and replace C_delta by C_delta intersect E; because cf(delta)=kappa>omega, the intersection of these two clubs of delta is club and still has order type kappa. If no such restriction guesses every club, recursively choose a club D_eta missed by the current restriction and put E_{eta+1}=(E_eta intersect D_eta)', starting with E_0=theta and taking intersections at limits, for eta<kappa^+. Here E' denotes nonzero accumulation points; it is club by a countable increasing construction inside E and closure. All intersections, including E=intersection_{eta<kappa^+}E_eta, are club since kappa^+<cf(theta). Choose delta in E intersect E^theta_kappa. The decreasing sets C_delta intersect E_eta stabilize by some eta<kappa^+: each removed point has a first removal stage and C_delta has only kappa points, so regularity bounds all such stages. But delta belongs to E_{eta+1}, while the missed-club choice forces a point of C_delta intersect E_eta outside E_{eta+1}, a contradiction. Extend the successful restricted sequence to the remaining stationary-stratum indices using the initial clubs. No countable-cofinality club-guessing theorem, diamond or square is used.

- `lem-club-continuity-produces-strongly-increasing-subsequences` — Assume AC. Let kappa be uncountable regular, lambda regular with kappa^{++}<lambda, and f a strictly eventual increasing sequence of countable-coordinate ordinal functions of length lambda. Suppose every delta<lambda of cofinality kappa^{++} has a club E_delta subset delta for which the pointwise supremum of {f_alpha:alpha in E_delta} is <* some f_beta. Then star_kappa holds. Dependencies: `def-strong-increase-and-bounding-projections-for-countable-products`, `lem-uncountable-club-guessing-at-a-double-successor`, `thm-small-intersections-of-clubs`, `thm-cofinality-basics`, `thm-transfinite-recursion`, `def-axiom-of-choice`. Source: Lemma 2.19 pp21–23 and Lemma 2.7 pp14–15.

  Proof strategy: Given unbounded U subset lambda, fix the preceding club-guessing sequence C_eta on theta=kappa^{++}. Recursively choose a continuous strictly increasing xi:theta->lambda. At stage i, for each eta form h_eta=sup{f_xi(j): j in C_eta, j<=i}; if some later f bounds h_eta strictly eventually, record its least index. Choose xi(i+1) in U above all recorded indices, possible by theta<lambda and regularity. Put delta=sup range(xi); cf(delta)=theta, as follows by pulling any purported shorter cofinal sequence back along xi. By hypothesis take E_delta and its common strict eventual bound. The inverse image {i:xi(i) in E_delta} is club in theta; club guessing gives C_eta contained in it. Thus every prefix supremum along this C_eta has a bound, and the recursive choices give sup{f_xi(k):k in C_eta,k<=i}<*f_xi(j) for i<j in C_eta. At nonaccumulation points j of C_eta, put into Z_j the finite set where the supremum through its predecessor in C_eta is not strictly below f_xi(j). These Z_j witness strong increase of the nonaccumulation subsequence, of order type kappa. Replace each term f_xi(j) by f_xi(j+1), whose index is in U. It lies strictly above that term and <=* the next nonaccumulation term. Enlarge each exceptional set by those of the two sandwich comparisons and the next term; outside the two enlarged sets, the inequalities compose to strict increase. This proves the sandwich argument explicitly and yields the required subsequence in U. AC selects clubs and witnesses; least ordinal choices are otherwise specified.

- `lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain` — Assume AC. Put mu=aleph_omega, lambda=mu^+, A={2,3,...}, and a_n=aleph_n. The product of the a_n is lambda-directed under <*. It has a strictly increasing lambda-sequence satisfying star_kappa for every uncountable regular kappa<mu. Dependencies: `lem-club-continuity-produces-strongly-increasing-subsequences`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion`, `def-axiom-of-choice`. Source: Theorem 2.21 pp23–24; directedness in Theorem 2.23 p24; Exercise 2.25/Theorem 2.26 hint p25, specialized and expanded locally.

  Proof strategy: A family F of size rho<mu has strict eventual bound b(n)=sup{f(n)+1:f in F} when a_n>rho, and b(n)=0 at the finitely many remaining coordinates. Regularity places b(n)<a_n. For |F|=mu, use AC to partition/enumerate F into a countable union of subfamilies of size <mu, bound each, and bound that countable family of bounds by the same argument. Thus every <lambda family has a strict eventual bound. Recursively build f_delta. At successors take a bound above the previous functions. At limits take a bound u_delta above all previous functions. If cf(delta)=kappa^{++} for an uncountable regular kappa<mu, choose a club E_delta of that order type and set v_delta(n)=sup_{alpha in E_delta} f_alpha(n) when a_n>kappa^{++}, and 0 at the remaining finitely many coordinates. Put f_delta(n)=max(u_delta(n),v_delta(n))+1, which is below a_n. At other limits use u_delta. The club supremum is strictly below f_delta eventually. Every uncountable regular below aleph_omega is a finite successor aleph, so its double successor is still below mu<lambda. The preceding lemma applies to every such kappa simultaneously; the limit rule is unambiguous since the double-successor cardinals are distinct. AC is used for family enumerations and a fixed wellorder choosing product bounds and clubs throughout the recursion.

- `thm-pcf-aleph-omega-plus-one-scale` — Assume AC. There is an infinite B subset omega minus {0,1} and a sequence (s_alpha)_{alpha<aleph_{omega+1}} in product_{n in B} aleph_n which is strictly increasing and cofinal modulo finite sets. Dependencies: `lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain`, `lem-strong-increase-gives-bounding-projections`, `lem-bounding-projections-give-exact-upper-bounds`, `def-reduced-ordinal-products-and-scales`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion`, `def-axiom-of-choice`. Source: Lemma 2.3 pp12–13 and Exercise 2.25/Theorem 2.26 p25; complete local expansion using the preceding proved-contract chain.

  Proof strategy: Take the preceding lambda-chain f in product a_n. Its star properties give all uncountable-regular bounding projection properties. Obtain one exact upper bound h; for each uncountable regular kappa<mu, cf(h(n))>=kappa eventually. Since (a_n) is an upper bound, leastness lets us replace h by min(h,a_n) without changing its eventual class; discard finitely many coordinates so that h is limit-valued and c(n)=cf(h(n))>omega_1. Then c(n)<=a_n<mu and c(n) tends to mu: for each finite aleph_k, use the bound for aleph_{k+1}. AC chooses increasing cofinal enumerations e_n:c(n)->h(n). Their coordinatewise images are cofinal in product h, and ceiling projections preserve <=*. To avoid assuming ceilings preserve strictness, prove the following transfer directly: a poset with a strict cofinal lambda-chain is lambda-directed, by bounding the <lambda many chosen chain indices; any cofinal embedded subposet inherits this directedness and a cofinal set of size <=lambda. Recursively bound earlier choices and one element of that cofinal set at every stage to obtain its strict cofinal lambda-chain. Applying this to the image of product c gives true cofinality lambda. Restriction of f into product h is legitimate after its individual finite exceptions are reset to zero; strictness and cofinality are unchanged. Now let D=range(c). Each fibre of c is finite, since c(n) tends to mu. For t in product c, define T(d)=sup{t(n)+1:c(n)=d}<d, using regularity of d and the countable index set. The repetition embedding u->u composed with c from product D into product c is cofinal. It preserves and reflects eventual equality and strict order: the inverse image of a finite set is finite, whereas that of an infinite subset of D is infinite. Thus the same directedness/cofinal-chain transfer gives a lambda-scale on D modulo finite sets. Every d in D is aleph_k for a unique finite k>=2, and D is unbounded in mu, so reindex by the infinite B of those k. A shorter cofinal family would give a <lambda bound contradicting strict cofinality, so the true cofinality is exactly lambda. This is the complete countable-cofinality exercise argument; it assumes neither a pcf generator theorem nor any Recorded result. AC is explicit in cofinal enumerations, product choices and recursion.

**Binding complete inventory — integrated 2026-09-09.** This proof order and the full statements, strategies and exact dependency lists in the canonical plan and live batch15 replace the obligations-only placeholder. The seven countable-scale contracts above remain specializations: the strong-increase, projection, exact-bound and club-continuity contracts also prove their stated arbitrary-proper-ideal versions. No singleton-nullity or general smooth/transitive generator theorem is assumed. Require the existing earlier pages `set-theoretic-trees-delta-systems-and-diamond` and `complete-metrizability-and-baire` for the ordinary diamond and classical Luzin interfaces. The staged notes give all exact source locators and the 901-ID bounded structural scan; that scan is not a semantic audit of every supplier proof.

| Order | Item | Contract |
|---|---|---|
| 1 | `def-countable-paracompactness-and-dowker-space` | Countably paracompact means every countable open cover has a locally finite open refinement that covers X. Countable includes finite; the empty noncover is not a witness. A Dowker space is T1, normal and not countably paracompact. |
| 2 | `thm-countable-paracompactness-shrinking-criterion` | Assume AC. Countable paracompactness is equivalent to closed refinements F_n of increasing covers U_n whose interiors cover X, and to open expansions of decreasing closed sequences with empty intersection whose closures have empty intersection. For normal X, empty intersection of the expansions alone suffices. |
| 3 | `thm-dowker-product-characterization` | Assume AC. For a T1 space X, X times [0,1] is normal iff X is normal and countably paracompact. |
| 4 | `def-reduced-ordinal-products-and-scales` | Assume AC. For an ideal J on I, f<=_J g iff {i:f(i)>g(i)} belongs to J; strict f<_J g uses {i:f(i)>=g(i)}. Distinguish these relations. True cofinality is the regular length of a strictly increasing cofinal sequence when such a sequence exists. A scale is such a sequence. Eventually means modulo finite sets. |
| 5 | `lem-progressive-products-and-true-cofinality-transfers` | Assume AC. For nonempty progressive sets A of infinite regular cardinals, pcf(A) is the set of regular cofinalities of ultraproducts of product A. It contains A, is monotone, preserves finite unions, and equals A for finite A. True cofinality transfers through cofinal order embeddings, coordinate cofinal enumerations, and repeated-cardinal range reduction under \|A\|<min range(c). A scale modulo a proper ideal yields a pcf witness by ultrafilter extension. Strict order uses {a:f(a)>=g(a)} in the ideal, not merely quotient inequality; arbitrary proper ideals need not contain singletons. |
| 6 | `lem-pcf-cofinality-ideals-and-cutoff-conventions` | Assume AC. Put J_<lambda[A]={X subset A:pcf(X) subset lambda} and J_<=lambda=J_<lambda^+[A], with pcf(empty)=empty. These are possibly improper increasing ideals, restrict to subsets by intersection, and contain {a} when a<lambda. J_<lambda is proper for lambda in pcf(A). Its dual filter is the intersection of the ultrafilters of product cofinality at least lambda. Membership of X means every ultrafilter supported on X has cofinality below lambda. |
| 7 | `def-strong-increase-and-bounding-projections-for-countable-products` | Work in ZFC on a countably infinite index set A. A sequence (f_alpha) is strongly increasing if finite sets Z_alpha satisfy f_alpha(a)<f_beta(a) whenever alpha<beta and a is outside Z_alpha union Z_beta. For regular lambda and kappa<=lambda, property star_kappa says every unbounded U subset lambda has an order-type-kappa strongly increasing subsequence. For nonempty ordinal sets S(a), the ceiling projection of f at a is min{s in S(a):f(a)<=s}, whenever this exists. The bounding projection property for kappa says that if \|S(a)\|<kappa and f_alpha<*sup S for every alpha, some projected f_alpha is a strict eventual upper bound of the sequence. Exceptional coordinates may be set to a fixed fallback value; all assertions are modulo finite sets. An exact upper bound h is an eventual upper bound such that every g<*h is <* some f_alpha. General clause: replace finite sets by members of any proper ideal I on an infinite A, tau=\|A\|, with the same star and projection definitions. Ideal strictness, nonempty projection sets and fallbacks are exactly as in lem-progressive-products-and-true-cofinality-transfers. |
| 8 | `lem-strong-increase-gives-bounding-projections` | Assume AC. Let A be countably infinite, lambda regular uncountable, and (f_alpha)_{alpha<lambda} strictly increasing modulo finite sets. If star_kappa holds for an uncountable regular kappa<=lambda, then the bounding projection property holds for kappa. More generally, for a proper ideal I on an infinite A, tau=\|A\|, and regular tau<kappa<=lambda, star_kappa implies the kappa bounding-projection property modulo I. |
| 9 | `lem-bounding-projections-give-exact-upper-bounds` | Assume AC. For a countable A and regular lambda>aleph_1, a strictly eventual increasing lambda-sequence satisfying the bounding projection property for aleph_1 has an exact upper bound h. If it also has that property for an uncountable regular kappa, then cf(h(a))>=kappa outside a finite set. The exact bound is unique modulo finite equality. More generally, for any proper ideal I on infinite A with tau=\|A\| and regular lambda>tau^+, the tau^+ bounding-projection property gives a unique exact bound modulo I. The kappa property gives {a:cf(h(a))<kappa} in I for regular kappa>=tau^+. Exactness restricts to positive supports and passes to larger proper ideals; normalize positive limit representatives. |
| 10 | `lem-uncountable-club-guessing-at-a-double-successor` | Assume AC. If kappa is uncountable regular and theta=kappa^{++}, there are clubs C_delta subset delta of order type kappa for every delta in E^theta_kappa such that each club E subset theta contains some C_delta. |
| 11 | `lem-club-continuity-produces-strongly-increasing-subsequences` | Assume AC. Let kappa be uncountable regular, lambda regular with kappa^{++}<lambda, and f a strictly eventual increasing sequence of countable-coordinate ordinal functions of length lambda. Suppose every delta<lambda of cofinality kappa^{++} has a club E_delta subset delta for which the pointwise supremum of {f_alpha:alpha in E_delta} is <* some f_beta. Then star_kappa holds. The same assertion holds for functions on any infinite set A modulo an arbitrary proper ideal I; no completeness or singleton-membership assumption on I is needed. |
| 12 | `lem-directed-progressive-products-have-club-continuous-chains` | Assume AC. If product A/I is lambda-directed, I proper, lambda regular and A a set of infinite regular cardinals, any prescribed lambda-family is pointwise dominated at successor stages by a strict I-increasing lambda-chain. For every uncountable regular kappa with kappa^{++}<lambda and {a:a<=kappa^{++}} in I, the chain has star_kappa. The generalized bounding projection and exact-bound conclusions follow when their stated cardinal hypotheses hold. |
| 13 | `thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs` | Assume AC. For progressive A and every cardinal lambda, product A/J_<lambda[A] is lambda-directed (weak directedness only for an improper ideal). For every ultrafilter D on A, cf(product A/D)<lambda iff D meets J_<lambda[A]; equality to lambda iff D avoids J_<lambda and meets J_<=lambda. Include finite A, small lambda and singular lambda. |
| 14 | `thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals` | Assume AC. Every nonempty progressive A has max pcf(A), \|pcf(A)\|<=2^{\|A\|}, and for every nonzero cardinal lambda, J_<lambda[A]=union_(theta<lambda) J_<=theta[A], theta ranging over cardinals. Handle the empty subset separately; do not assert the union formula at lambda=0. |
| 15 | `thm-progressive-pcf-has-universally-cofinal-sequences` | Assume AC. For progressive A and lambda in pcf(A), there is a strict J_<lambda-increasing sequence (f_alpha)_(alpha<lambda) cofinal in every ultraproduct of cofinality lambda. Preserve finite/principal lambda=min A exceptions explicitly; no assumption that J contains every singleton. |
| 16 | `lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds` | Assume AC. For progressive A and lambda in pcf(A), let mu be the least ordinal with A intersect mu not in J_<lambda. There is a universally cofinal lambda-sequence with star_kappa for every infinite regular kappa<mu and an exact upper bound h, capped at the coordinate identity modulo J_<lambda. If mu=lambda+1 the principal-coordinate construction proves exactness directly. Otherwise mu is singular and mu<lambda, so the general exact-bound theorem applies. |
| 17 | `thm-pcf-cofinality-ideals-have-single-generators` | Assume AC. For progressive A and lambda in pcf(A), there exists B_lambda subset A with J_<=lambda=J_<lambda+B_lambda, uniquely modulo J_<lambda. A simultaneous generating sequence exists by AC; neither smoothness nor transitivity is asserted. |
| 18 | `thm-pcf-generators-restrict-finitely-cover-and-carry-scales` | Assume AC. Basic progressive-PCF generators restrict to subsets modulo the smaller ideal; every X subset A is covered by finitely many B_mu with mu in pcf(X); J_<lambda consists of subsets of finite unions of generators indexed below lambda. Universal lambda-sequences restrict to true-cofinality-lambda scales on B_lambda/J_<lambda. For a proper filter F, tcf(product A/F)=lambda iff F contains B_lambda and J_<lambda*, equivalently all extending ultrafilters have cofinality lambda. A product ultrafilter has cofinality equal to the least generator index it contains. Finally the ordinary cofinality of product A is max pcf(A). |
| 19 | `thm-pcf-has-no-holes-for-progressive-intervals` | Assume AC. If A is a nonempty progressive interval of infinite regular cardinals, pcf(A)={lambda regular:min A<=lambda<=max pcf(A)}. The local directed no-holes lemma assumes this interval hypothesis, lambda>sup A regular, and a proper I with lambda-directed product. No no-holes assertion is made for arbitrary progressive sets; finite sets and infinite intervals with finite terminal tails are treated explicitly. |
| 20 | `lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain` | Assume AC. Put mu=aleph_omega, lambda=mu^+, A={2,3,...}, and a_n=aleph_n. The product of the a_n is lambda-directed under <*. It has a strictly increasing lambda-sequence satisfying star_kappa for every uncountable regular kappa<mu. |
| 21 | `thm-pcf-aleph-omega-plus-one-scale` | Assume AC. There is an infinite B subset omega minus {0,1} and a sequence (s_alpha)_{alpha<aleph_{omega+1}} in product_{n in B} aleph_n which is strictly increasing and cofinal modulo finite sets. |
| 22 | `lem-normalizing-a-scale-at-existing-least-upper-bounds` | Assume AC. On an infinite B subset of omega minus {0,1}, an aleph_(omega+1) scale in product_{n in B} aleph_n can be chosen so that at every delta of uncountable cofinality, if the initial segment has a least upper bound in that product modulo finite, f_delta is such a bound. |
| 23 | `lem-scale-tail-suprema-have-prescribed-cofinality` | Assume AC. If 1<=m<=k, alpha_zeta strictly increases for zeta<aleph_m, each g_zeta belongs to the product of aleph_n over n in B above k, and g_zeta is pointwise strictly increasing on B above k and equals f_alpha_zeta eventually, then its pointwise supremum g is in the tail product, cf(g(n))=aleph_m there, and g equals f_delta eventually for delta=sup alpha_zeta. |
| 24 | `def-rudin-ordinal-box-space` | Assume AC. For infinite B subset of omega minus {0,1}, use the box topology on product_{n in B}(aleph_n+1). X_R(B) consists of h with omega<cf(h(n))<aleph_m for every n, for one finite m. Basic sets are (f,g] intersect X_R(B). This is not the product topology. |
| 25 | `def-rudin-ambient-ordinal-box-space` | Assume AC. For the same infinite B subset of omega minus {0,1}, put P_B=product_{n in B}(aleph_n+1), t(n)=aleph_n, and Y_B={h in P_B: cf(h(n))>omega for every n in B}, with the relative box topology. Thus X_R(B) is a subspace of Y_B. For ordinal bounds a<b write (a,b]_Y={h in Y_B: a(n)<h(n)<=b(n) for every n}. The upper bound b need not belong to Y_B. |
| 26 | `lem-rudin-box-space-basic-neighborhoods-and-p-space` | Assume AC. In both Y_B and X_R(B), intervals (f,h] relative to the space, with f<h, form a clopen local base at h. Every countable intersection of open sets is open in either space. |
| 27 | `lem-rudin-disjoint-box-refinement` | Assume AC. Assuming AC, every open cover of Y_B has a refinement which is a partition of Y_B into open boxes (a,b]_Y. In particular Y_B is ultraparacompact. No claim of hereditary ultraparacompactness is made. |
| 28 | `lem-rudin-bounded-cofinality-hull-transfer` | Assume AC. Given x in Y_B, finite m>=1, kappa=aleph_m and finitely many set parameters, choose a sufficiently large regular theta. There are a size-kappa M elementary in (V_theta,in) containing the parameters, x and every ordinal below kappa, and a point xhat in X_R(B), as follows. Where cf(x(n))<=kappa put xhat(n)=x(n); elsewhere put xhat(n)=sup(M intersect x(n)), which has cofinality kappa and is below x(n). For every v<xhat there is z in M intersect P_B with v<z<xhat. If u is in M intersect P_B, u<=x, and all cf(u(n))<=kappa, then u<=xhat. |
| 29 | `lem-rudin-discrete-families-have-discrete-ambient-closures` | Assume AC. If (F_j)_(j in J) is an indexed discrete family of closed subsets of X_R(B), then (closure_(Y_B) F_j)_(j in J) is indexed discrete in Y_B. Discrete means that each point has a neighborhood meeting at most one member, not merely that distinct closures are disjoint. |
| 30 | `thm-rudin-box-space-is-collectionwise-normal` | Assume AC. X_R(B) is collectionwise normal and Hausdorff for every infinite B as above. |
| 31 | `lem-rudin-internal-hull-tail-domination` | Assume AC. Let k>=2 be finite, B an infinite subset of omega minus {0,1}, and let A be a finite set of parameters including B, P_B, X_R(B), and the function n maps to aleph_n on B. Choose a regular uncountable cardinal theta greater than aleph_k and sufficiently above the ranks of these parameters. There is M elementary in (V_theta,in), containing A as a subset and every ordinal below kappa=aleph_k, of size kappa. Put x(n)=aleph_n for n<=k and x(n)=sup(M intersect aleph_n) for n>k. Each tail x(n) has cofinality kappa and is strictly below aleph_n; hence x is in X_R(B) and in its initial-top slice F_k. For every external b<x there is z in M intersect P_B with b<z<x. Moreover u in M intersect P_B satisfies u(n)<x(n) whenever n>k and u(n)<aleph_n. |
| 32 | `lem-rudin-neighborhoods-of-initial-top-slices-contain-tails` | Assume AC. Let k be finite and U open in X_R(B), containing F_k={u in X_R(B): u(n)=aleph_n for all n in B with n<=k}. There is z in product_(n in B) aleph_n such that every u in X_R(B) with z<u belongs to U. This is a tail of the entire Rudin space, not merely the cofinality-omega_1 stratum. |
| 33 | `thm-rudin-tail-neighborhood-obstruction` | Assume AC. For F_k={h in X_R(B):h(n)=aleph_n for n in B with n<=k}, the F_k decrease to empty, are closed, and every open U_k containing F_k has intersection containing a final pointwise tail of X_R(B). |
| 34 | `lem-cofinal-aleph-product-cardinality` | Assume AC. If B is an infinite subset of omega minus {0,1}, then \|product_(n in B) aleph_n\|=aleph_omega^aleph_0. |
| 35 | `thm-rudin-dowker-space-and-cardinality` | Assume AC. X_R(B) is a ZFC Dowker space of cardinality aleph_omega^aleph_0. |
| 36 | `def-kojman-shelah-scale-subspace` | Assume AC. For a normalized scale on B set X={h in X_R(B):h equals f_alpha modulo finite for some alpha<aleph_(omega+1)}. Some equivalence classes can be empty; do not assert every scale term belongs to X_R(B). |
| 37 | `lem-kojman-shelah-tail-supremum-closure` | Assume AC. For 1<=m<=k<omega, let (h_xi)_(xi<aleph_m) be points of X strictly increasing at every n in B above k. Its coordinate supremum g agrees at every n>k with some h in X, hence h=*g. The associated scale indices strictly increase; regularity bounds their supremum below aleph_(omega+1). Tail cofinalities are aleph_m; filling the finite prefix by top ordinals gives a uniform cofinality bound aleph_(k+1). |
| 38 | `lem-kojman-shelah-subspace-is-closed` | Assume AC. X is closed in X_R(B). Use the least infinite cofinality stratum m>=1 and k>=m beyond all lower strata and the finite equality pattern. The recursion is strictly increasing on the tail. Reset the finite prefix of its supremum to t before invoking the equality-set trichotomy, so the resulting X point is <=t. |
| 39 | `lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size` | Assume AC. X is pointwise cofinal above every f in product_B aleph_n and has cardinality aleph_(omega+1). Construct strict omega_1-long product representatives and apply the preceding scale-tail lemma at m=k=1, not X-closure: the representatives need not already lie in X. The B-page tail-supremum example uses this same route with AC explicit. |
| 40 | `thm-kojman-shelah-space-weight-and-character` | Assume AC. For the Kojman-Shelah scale subspace X, w(X)=aleph_(omega+1) and chi(X)=aleph_omega. |
| 41 | `thm-kojman-shelah-zfc-dowker-space` | Assume AC. The scale subspace is a closed cofinal Dowker subspace of X_R(B), of cardinality aleph_(omega+1). Lift a discrete closed family from closed X to the ambient space and restrict its disjoint neighborhoods. Lift the shrinking neighborhoods by adjoining X_R(B) minus X, then use the ambient tail obstruction and pointwise cofinality. |
| 42 | `def-balogh-finite-restriction-data` | Assume AC. Put kappa=2^{aleph_0}, C={}^kappa2 and fix a sufficiently large V_theta. Define the realizable typed tuple T=(a,A,B,p,q,r) from countable M in N elementary in (V_theta,in), with a=M intersect kappa, A=N intersect kappa, B={c\|A:c in C intersect M}, p=f\|A, q(alpha)={c\|A:c in g(alpha)}, r=h\|A. Define the countable root-triple system (n,E,e), E finite subset B, H_T and I_T, with chosen infinite constant-root families K_T. Restriction to A is injective on C intersect N, not on all C; for c in C intersect N, c\|A in B iff c in M. The complete types and checks are specified in the strategy. |
| 43 | `lem-balogh-countable-restriction-enumeration` | Assume AC. The realizable restriction data have size at most kappa and can be injectively assigned labels beta<kappa with A_beta subset beta. There are J_beta subset A_beta and pairwise disjoint finite petals u_beta(gamma) such that every eligible root triple has infinitely many witnessing gamma in J_beta with u_beta(gamma)=q_beta(gamma) minus its root. Set J_beta empty when I_beta is empty. |
| 44 | `lem-balogh-combinatorial-map` | Assume AC. There is D:C->C, D(c)=d_c, such that for every f:kappa->omega, g:kappa->[C]^{<omega}, h:kappa->[kappa]^{<omega}, there are alpha<beta<kappa with f(alpha)=f(beta), beta notin h(alpha), and d_c(beta)=c(alpha) for all c in g(alpha). |
| 45 | `def-balogh-continuum-topology` | Assume AC and fix the preceding map. For alpha<kappa, finite s subset C and finite a subset kappa, define F(alpha,s,a)={beta: d_c(beta)=c(alpha) for all c in s} minus a. On X=kappa times omega declare U open when every (alpha,n+1) in U has F(alpha,s,a) times {n} subset U for some s,a. These possibly improper finite-intersection families define a topology; empty F is allowed. Put U_n=kappa times [0,n] and L_n=kappa times {n}. |
| 46 | `lem-balogh-neighborhood-basis` | Assume AC. The finite-height recursive neighborhoods in the strategy form a neighborhood basis for the Balogh topology. The space is T1, U_n is open, L_n is relatively discrete, and a neighborhood at height n may be chosen inside U_n. Each family F is closed under finite intersections and can omit any prescribed finite set; no nonemptiness assertion is imposed on every F. |
| 47 | `lem-balogh-hereditary-normality` | Assume AC. The Balogh continuum topology is hereditarily normal: every two separated subsets have disjoint open neighborhoods. The proof includes same-level partition separation, different-level extension and countable finite-closure-removal assembly. |
| 48 | `lem-balogh-failure-of-countable-shrinking` | Assume AC. The increasing open cover U_n of the Balogh space admits no closed shrinking covering X. In fact each bottom trace of a closed subset of U_n is a union of n+1 separated sets, whereas kappa is not a countable union of separated sets. Hence X is not countably paracompact. |
| 49 | `thm-balogh-continuum-sized-zfc-dowker-space` | Assume AC. There exists a Hausdorff hereditarily normal Dowker space of cardinality 2^{aleph_0}; its product with [0,1] is not normal. No CH is needed. |
| 50 | `def-small-dowker-luzin-stick-and-ad-principles` | In ZFC define classical Luzin sets in Baire space and R, the omega_1-Luzin cylinder property, stick, the finite-target AD guessing array on a stationary partition of E^omega_1_omega, its strong diagonal finite-intersection strengthening, and single-ladder two-target AD systems. Their exact quantifiers are given in the strategy. No existence is asserted here. Distinguish ordinary diamond and Ostaszewski clubsuit from ordinary club guessing, parameterized diamond(b), and AD guessing. |
| 51 | `def-small-dowker-tight-strongly-unbounded-coloring` | In ZFC, for c:omega times omega_1->omega define T_c as the trees of finite strings whose column set is uncountable. Tight means cf(T_c,supseteq)<=omega_1. Strongly unbounded means every uncountable set of columns has a common finite prefix above which one coordinate has unbounded values. Use the exact quantifiers in the strategy. |
| 52 | `lem-small-dowker-ch-gives-luzin-set` | Assume AC. CH implies an omega_1-sized classical Luzin set in Baire space, hence the omega_1-Luzin cylinder property. Every uncountable classical Luzin set in Baire space or R has an omega_1-sized subset giving that cylinder property. |
| 53 | `lem-small-dowker-luzin-gives-tight-coloring` | Assume AC. An omega_1-sized set with the Luzin cylinder property gives an injective-column tight strongly unbounded coloring c:omega times omega_1->omega. Its T_c has a countable downward cofinal family. |
| 54 | `lem-small-dowker-coloring-gives-ad-guessing` | Assume AC. A tight strongly unbounded coloring c:omega times omega_1->omega gives an AD guessing array for every stationary partition P of E^omega_1_omega, with all rows cofinal, pairwise disjoint within a row, bounded cross-index intersections, and simultaneous stationary guessing of every finite nonempty list of uncountable targets on each part of P. |
| 55 | `lem-small-dowker-stick-gives-ad-guessing` | Assume AC. Stick on omega_1 gives the strong diagonal AD property for every stationary partition P of E^omega_1_omega: all cross-row intersections are finite, and each omega_1-sequence of uncountable targets is guessed simultaneously below alpha, stationarily often on every part. |
| 56 | `def-small-dowker-ladder-topology` | Assume AC and a single-ladder two-target AD system on countably many stationary levels S_n, n>=1. Define S_0 as their complement, W_n as the union of the first n+1 levels, and L_alpha=A_alpha intersect W_(n(alpha)-1) if that set is cofinal, empty otherwise. U is open iff each active alpha in U has L_alpha minus U bounded in alpha. This defines a topology on omega_1 with the closedness test and simultaneous two-target stationary accumulation property in the strategy. The sets {alpha} union (L_alpha minus epsilon) are weak neighborhood tests, not asserted to be an open basis. |
| 57 | `lem-small-dowker-ladder-normality` | Assume AC. The preceding ladder topology is normal Hausdorff. Countable local disjointification gives the almost-P0 tail-coloring property, and every disjoint closed pair has a bounded member. No MA, uniformization or nonreflection theorem is assumed. |
| 58 | `lem-small-dowker-ladder-shrinking-obstruction` | Assume AC. The ladder space has cardinality aleph_1 and is not countably paracompact. Its decreasing closed complements of W_n have empty intersection, while every open expansion sequence has nonempty intersection. Its product with [0,1] is therefore not normal. |
| 59 | `thm-small-dowker-conditional-aleph-one-constructions` | Assume AC. Each of CH, an uncountable classical Luzin set in R or Baire space, the omega_1-Luzin cylinder property, a tight strongly unbounded omega_1-coloring, stick, Ostaszewski clubsuit, ordinary diamond, or the specified two-target AD system separately suffices for a normal Hausdorff Dowker space of cardinality aleph_1. The proof includes ordinary diamond implies CH and Ostaszewski clubsuit implies stick, and constructs the needed stationary partition locally. No parameterized diamond(b), ordinary club-guessing-only, or unconditional ZFC aleph_1 conclusion is asserted. |
| 60 | `rem-aleph-one-dowker-status-dated-audit` | Cruz Chapital, arXiv:2504.15398v1, dated 2025-04-21, Section 9 (current PDF printed p.26), calls the ZFC aleph-one problem open. Searches on 2026-09-09 found that statement and the 2024 conditional constructions, not a verified resolution. This is a dated literature report, not a theorem of nonexistence. |

**Remaining proof review.** Independently recheck finite/principal ideal exceptions and positive-support changes; Balogh's reflected finite roots and model domains; the explicit coherent-coloring/stick guesses; ladder normality and decreasing-closed-set obstruction; and all four Kojman–Shelah weight/character bounds. The general PCF, Balogh and small-space results are not premises of the separate direct countable-scale proof. The Balogh original remains genuinely unrecovered, with a documented alternate-proof source decision; never describe it as read. The dated open-status remark is retained, not promoted into an unconditional aleph-one theorem. These local contracts supply the eventual repair of `rem-dowker-spaces`; they do not themselves close that published catalogue debt.

**Items.** Cofinality of posets and reduced products; ideals and true
cofinality; scales; generators and basic PCF theorem; no-holes/possible
cofinalities needed by the construction; countable paracompactness and
shrinkings; Dowker's product characterization; Rudin's ordinal-product Dowker
space and cardinality; Balogh's continuum-sized ZFC construction; scale normalization at existing least upper bounds for the
construction of Kojman--Shelah; closed cofinal subspace proof and
`aleph_(omega+1)` cardinality; CH/club/diamond/Luzin/stick sufficient conditions
for `aleph_1` examples; dated literature-status item for the ZFC `aleph_1`
problem; `fs-normality-is-preserved-by-product-with-the-unit-interval`.

**Open boundary.** Whether ZFC proves an `aleph_1`-sized Dowker space is not a
mathematical result available for proof. Cruz Chapital's 21 April 2025 preprint,
§9 p.25, explicitly calls this an open problem, so the safe planning statement
is **open as of 2025-04-21**. Step 1 must refresh that search before authoring;
the clause remains a dated research-status remark, not a proof contract. The
old wording “only three constructions are known” may not be published without
a date and a current source.

**Target.** Proves the Dowker characterization and all constructions in
`rem-dowker-spaces`; preserves the final question as an explicit open-status
obligation.

---

## 4. Exhaustive deferred-result closure ledger

The ledger is clause-level. “Status only” means the clause is an open problem,
not permission to omit it.

| deferred item | every owned mathematical clause | proof destination |
|---|---|---|
| `rem-godel-constructible-universe` | `L` is an inner model of ZFC+GCH; `Con(ZF)->Con(ZFC+GCH)`; ZF cannot refute AC and ZFC cannot refute GCH, conditionally | SET-11--12; formal transfer SET-3/14 |
| `rem-cohen-forcing-ac-independent` | symmetric model satisfies ZF and not-AC; conditional independence of AC | SET-19; formal transfer SET-14 |
| `rem-independence-of-ch-and-gch` | consistency of CH, not-CH, GCH and not-GCH over ZFC; cardinal-preserving Cohen witness | SET-12 and SET-15 |
| `rem-gch-implies-ac` | arbitrary-set GCH implies every set well-orderable and hence AC in ZF | SET-6 |
| `rem-cohen-first-model` | infinite Dedekind-finite set of reals; no countably infinite subset; no proper-subset bijection; conditional consistency | SET-19 |
| `rem-fraenkel-socks-model` | countable family of pairs without a choice function in ZFA; Jech--Sochor transfer; atom-free analogue | SET-18--19 |
| `rem-feferman-levy-model` | reals countable union of countable sets; `cf(omega_1)=omega`; countable-union theorem and regularity fail; reals still uncountable | SET-20 |
| `rem-feferman-no-free-ultrafilter-in-zf` | every ultrafilter on omega principal in Feferman's model; UFL/BPI not ZF theorems | SET-20, using corrected original proof |
| `rem-blass-model-without-ultrafilters` | every ultrafilter on every set principal, conditionally | SET-20, full-source gate |
| `rem-halpern-levy-bpi-not-ac` | BPI=UFL over ZF; basic Cohen model satisfies BPI+not-AC; strict relative placement | SET-21 |
| `rem-solovay-model` | ZF+DC model; all sets of reals measurable, Baire, and perfect-set regular; no named choice pathologies; inaccessible-relative consistency | SET-24 |
| `rem-shelah-inaccessible-and-the-baire-property` | Baire-property model from Con(ZF/ZFC) without inaccessible; measurability has inaccessible inner-model lower bound/equiconsistency | SET-25 |
| `rem-gitik-all-uncountable-cardinals-singular` | every limit ordinal, hence every uncountable cardinal, has cofinality omega in a ZF model from the stated strongly compact hypothesis | SET-26 |
| `rem-baire-category-choice-strength` | metric BCT iff DC; separable complete BCT in ZF; compact Hausdorff BCT iff DMC; supported separations; disputed DMC<DC clause retained for source recovery | SET-22 |
| `rem-urysohn-lemma-not-a-zf-theorem` | failure in ZF and ZF+`AC_omega`; DC and DMC sufficiency; BPI insufficiency; Tietze consequence; `URY->DMC?` status only | SET-22 |
| `rem-stone-theorem-choice-strength` | Stone theorem under AC; failure with DC and with BPI; effective strengthening implies MC=AC; exact-strength question status only | SET-22 |
| `rem-schechter-kelley-tychonoff` | Kelley's topological error; cofinite product=BPI; isolated-point repair; compact Hausdorff product=BPI and compact `T_1` product=AC | SET-7 and SET-22 |
| `rem-martins-axiom` | `MA(aleph_0)`; CH=>MA; conditional consistency MA+not-CH; every listed measure/category/cardinal/ccc consequence | SET-16 |
| `rem-suslin-hypothesis-independent` | line/tree/algebra equivalence; consistency SH and not-SH; MA+not-CH=>SH; diamond/L=>not-SH; ccc nonproductivity | SET-17 |
| `rem-normal-moore-space-conjecture` | CH and MA+not-CH counterexamples; PMEA=>NMSC; strongly compact upper consistency bound; measurable-inner-model lower bound | SET-28 |
| `rem-l-spaces-and-s-spaces` | ZFC L-space; PFA no S-spaces; supercompact-relative consistency; CH S-space | SET-29 |
| `rem-dowker-spaces` | Dowker theorem; Rudin, Balogh, Kojman--Shelah ZFC examples and sizes; extra-hypothesis `aleph_1` examples; current ZFC `aleph_1` question status only | SET-30 |

### Mechanical closure check required before un-deferral

At Step 1, expand each row into atomic item ids and write a machine-readable
claim-to-item map. Before publication, require:

1. every non-status clause maps to a proof-bearing item on a published page;
2. every mapped item passes proof, source, dependency and axiom-strength gates;
3. every status-only clause has a dated primary-source audit;
4. no Foundations page or item has any direct or transitive prerequisite path
   to the deferred catalogue or one of its items; historical published paths
   receive no exemption; and
5. owner approval governs removal/rewording of the published deferred page.

## 5. Source-correction prerequisites already discovered

1. **Feferman ultrafilter model:** replace the published finite-bit-flip story
   with the actual finite-parameter/tail-complement argument from Feferman's
   Theorem 4.12. The current explanation is mathematically invalid.
2. **Blass model:** recover and use the construction by finite-modification
   classes and parameter-HOD; the current item admits it has no full method.
3. **DMC versus DC:** the strictness claim is not presently supported by the
   recovered primary source. It remains a named blocker, not a deleted clause.
4. **Urysohn under `AC_omega`:** author from Tachtsis's paper **and erratum**.
5. **Shelah:** retain only the exact recovered equiconsistency and
   `omega_1`-in-`L` lower bound unless stronger wording is separately proved.
6. **Gitik:** author the proper-class forcing and ZF-axiom verification; the
   phrase “iterated Prikry-style forcing” is not a proof skeleton.
7. **Dowker `aleph_1`:** openness is verified through Cruz Chapital's
   2025-04-21 preprint, but must be refreshed at author time; a status claim is
   never converted into a promised mathematical proof.
8. **Stone and Urysohn open implications:** preserve them as open-status
   records. A plan cannot prove what the literature has not settled.
9. **Gödel II wording:** `rem-godel-constructible-universe` says the consistency
   antecedent cannot be discharged “here or anywhere.” Replace that with the
   precise claim that a consistent sufficiently strong effective theory cannot
   prove its **own** consistency; a stronger metatheory may prove `Con(ZF)`.

## 6. Scope boundary after this completion

This track is comprehensive at graduate-text level and exceptionally deep where
the 22 deferred items demand it. Further independent tracks would be needed for
fine-structural core models above the measurable level, extender iterations,
Woodin-cardinal determinacy and `P_max`, saturated ideals, forcing geology,
class-forcing preservation in general, infinitary model theory beyond compactness,
and the full modern singular-cardinal program. None is needed as a hidden lemma
for a promised item above.

---

# 7. Binding published audit and completion-track reconciliation (2026-09-08)

This section supersedes any earlier sentence describing all 31 pairs as future
work. This file is the canonical prose authority for the completion sequence,
the replacements for `deferred-set-theory-beyond-choice`, and the Phase-3
repairs below. `plan-topology-set-theory-track.md` remains historical design
authority only for the published ST-1 `ordinal-arithmetic` and ST-2
`cardinal-arithmetic-and-cofinality` pairs, subject to its 2026-09-08 binding
amendment. Published Markdown is read-only evidence; `plan-spec.json` is the
owner-amended machine plan.

SET-1, SET-4, SET-6 and SET-8 and their B companions are now published;
SET-2--3, SET-5, SET-7 and SET-9--31 remain planned. The older spine has six
further published pairs (ZFC constructions; relations/functions/quotients;
order/Zorn/choice; filters/ultrafilters; ordinal arithmetic; cardinal
arithmetic/cofinality). Two legacy A pages also live in `library/foundations`:
`construction-of-the-natural-numbers` (spec category `published`) and
`ordinals-and-transfinite-recursion` (its registered B row is empty and has no
live Markdown). The read-only audit covered 22 live pages, ten complete pairs,
the two singleton A pages, and 402 live item/example memberships.

## 7.1 Recorded-Not-Proved closure and prose defects

The 402-item published Foundations graph has **zero direct and zero transitive**
`deps`/`justified_by` paths to the 22 deferred catalogue items; zero published-
to-draft dependencies; and zero cross-page forward dependencies. The only
nonempty well-definedness fields are legitimate same-page forward justifiers:
`def-filter-base -> lem-filter-base-generates`,
`def-first-uncountable-ordinal ->
thm-omega-one-is-the-least-uncountable-ordinal`, and
`def-cofinality -> thm-cofinality-basics`.

The prose scan nevertheless found three direct catalogue uses. These are
defects, not exemptions:

| published item | forbidden use | exact deferred repair |
|---|---|---|
| `def-well-order` | `external_refs: [rem-cohen-first-model]` plus the Dedekind-finite-model paragraph | remove the ref and paragraph; retain only the positive definition and locally proved well-order facts |
| `def-ultrafilter` | `external_refs: [rem-feferman-no-free-ultrafilter-in-zf, rem-blass-model-without-ultrafilters]` plus both model paragraphs | remove both refs and both quoted conclusions; retain the definition and locally proved principal/free distinction |
| `fs-every-ultrafilter-principal` | `external_refs` cites both `rem-blass-model-without-ultrafilters` and the Recorded-Not-Proved `rem-sierpinski-ultrafilter-not-measurable`; its remarks quote both | remove the entire `external_refs` field and both model/regularity paragraphs; its refutation already closes from `thm-ultrafilter-lemma` |

Do not repoint these definitions to late SET-19/20 results: that would make the
entire downstream library consume late consistency machinery. The later
theorems remain separate destinations with zero current published consumers.

The catalogue may not be laundered through another category or orientation
ledger. The following non-catalogue-ID model claims are also exact deferred
repairs:

- `def-countable-choice`: delete both `external_refs` and its Cohen,
  Feferman--Levy and DC-separation paragraphs; keep definitions and locally
  proved implication directions.
- `thm-ultrafilter-lemma`: delete the unproved claims that UFL is unprovable in
  ZF and strictly weaker than AC; `rem-choice-strengths` remains the honest
  proved upper-bound ledger.
- `fs-transfinite-induction-needs-choice`: delete the unproved final DC
  separation claims; the refutation itself is choice free.
- `thm-countable-subsets-of-omega-one-are-bounded` and
  `cex-omega-one-has-no-at-most-countable-cofinal-subset`: retain their explicit
  `AC_omega` hypothesis but delete the unproved Feferman--Levy sharpness claim.
  `rem-omega-one-and-the-cost-of-choice` may record only the positive cost of
  the written proof.
- `thm-omega-one-is-the-least-uncountable-ordinal`: remove the CH-independence
  sentence; say only that no continuum comparison is proved.
- `lem-omega-least-limit-ordinal`: replace consistency wording by the internal
  implication that a limit ordinal supplies an inductive set, hence implies
  Infinity over the remaining axioms.
- `def-axiom-schema-of-separation`: replace “keeps the schema consistent” by
  the internal fact that bounded separation blocks Russell's displayed
  contradiction.

No future item may use any of these claims through `deps`, `justified_by`,
well-definedness, or a load-bearing forward reference. Section 4 is only a
target specification.

## 7.2 Page prerequisites, DC, and B-leaf repairs

The owner must make these exact machine-plan amendments:

1. Add `countability-and-uncountability` and
   `linear-independence-bases-and-dimension` to
   `ordinals-and-transfinite-recursion.requires`. The first supplies
   `lem-nat-order-is-membership`, `lem-pigeonhole`, `def-countable-choice` and
   the corrected DC home; the second supplies
   `thm-every-independent-set-extends-to-a-basis` and
   `cor-every-vector-space-has-a-basis`, all already consumed by the page.
2. Preserve the commissioned `def-dependent-choice` repair: move it from
   `compactness-in-metric-spaces` to `countability-and-uncountability`
   immediately after `def-countable-choice`; replace its inapplicable
   real-valued `def-sequence` dependency and both body links by `def-function`.
   In SET-6, replace the prerequisite `compactness-in-metric-spaces` by
   `countability-and-uncountability`. Do not add metric compactness to the
   ordinal page.
3. Move `cantor-set-baire-and-measure-zero` from the B page
   `cardinal-arithmetic-and-cofinality-examples.requires` to its A companion;
   the B must require only `cardinal-arithmetic-and-cofinality`.
4. The B item `ex-the-cardinality-of-the-continuum` is consumed externally by
   `ex-cardinal-functions-of-the-lower-limit-line`. Add the A supplier
   `thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero` immediately
   before the companion, using the same ZF bijection proof, and repoint only
   that external topology dependency. The three local B consumers may remain.

Every other published and planned Foundations B row requires only its A
companion, and no other B-homed item is a dependency target outside its B.

## 7.3 Exact supplier-consumer impact

`def-dependent-choice` has 83 direct published consumers. The exact sorted set
is: `cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous`,
`cor-a-compact-hausdorff-space-is-tychonoff`, `cor-bolzano-weierstrass-in-rn`,
`cor-categories-of-models-for-algebraic-theories-are-complete-and-cocomplete`,
`cor-countable-independent-copies-exist`,
`cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence`,
`cor-euclidean-compactness-equivalence-chart`,
`cor-radical-ideals-as-intersections-of-minimal-primes-noetherian`,
`cor-separated-uniformizable-iff-tychonoff`,
`cor-tietze-for-unbounded-and-open-interval-valued-maps`,
`cor-topological-groups-are-completely-regular`,
`cor-urysohns-lemma-closes-the-separation-chain`,
`def-multiple-and-dependent-multiple-choice`,
`ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set`,
`ex-distance-functions-form-a-compact-family-in-c01`,
`ex-iid-sequence-with-a-prescribed-law`, `ex-infinite-coin-toss-space`,
`ex-integration-by-parts-for-absolutely-continuous-functions`,
`ex-the-metric-urysohn-function-costs-no-choice`,
`lem-bounded-above-complexes-admit-projective-replacements`,
`lem-bounded-below-complexes-admit-injective-replacements`,
`lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition`,
`lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice`,
`lem-countable-product-cylinder-premeasure-is-countably-additive`,
`lem-dependent-choice-along-a-sequence-of-relations`,
`lem-dependent-choice-riesz-separated-unit-sequence`,
`lem-finitary-monad-algebras-have-coequalizers-under-dependent-choice`,
`lem-finite-refining-small-diameter-covers-of-compact-metric-spaces`,
`lem-noetherian-ring-maximal-element-annihilator-exists`,
`lem-normal-sequences-of-entourages`,
`lem-parameter-power-series-map-injective-by-dimension`,
`lem-parameter-power-series-subring-makes-ring-finite`,
`lem-samuel-uniformity-preserves-the-induced-topology-under-dependent-choice`,
`lem-starting-point-free-dependent-choice`,
`lem-totally-bounded-uniformities-equal-their-samuel-uniformity`,
`lem-uniformizable-spaces-are-completely-regular`, `rem-choice-ledger`,
`rem-compactness-choice-ledger-metric`,
`rem-compactness-conventions-and-choice-ledger`,
`rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`,
`thm-a-bounded-above-complex-of-projectives-is-homotopically-projective`,
`thm-a-bounded-below-complex-of-injectives-is-homotopically-injective`,
`thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras`,
`thm-a-locally-compact-hausdorff-space-is-completely-regular`,
`thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set`,
`thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant`,
`thm-baire-category-for-complete-metric-spaces`,
`thm-baire-category-locally-compact-hausdorff`,
`thm-bounded-below-iff-injective-with-closed-range`,
`thm-bounded-left-inverse-iff-range-is-complemented`,
`thm-bounded-right-inverse-iff-kernel-is-complemented`,
`thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space`,
`thm-cech-complete-spaces-are-baire`,
`thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis`,
`thm-change-of-variables-for-an-increasing-absolutely-continuous-function`,
`thm-choice-implies-dependent-implies-countable-choice`,
`thm-closability-sequential-criterion`, `thm-compactness-variants-hierarchy`,
`thm-complete-nakayama-lemma`,
`thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta`,
`thm-countable-product-of-probability-spaces`,
`thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity`,
`thm-dependent-choice-detects-non-well-orders`,
`thm-entourage-uniformities-are-generated-by-gauges`,
`thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space`,
`thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`,
`thm-horseshoe-lemma-for-projective-resolutions`,
`thm-integration-by-parts-for-absolutely-continuous-functions`,
`thm-lasker-noether-primary-decomposition`,
`thm-lipschitz-characterisation-within-absolutely-continuous-functions`,
`thm-metric-compactness-equivalences`,
`thm-mini-vitali-fine-cover-characterisation-of-null-sets`,
`thm-projective-comparison-map-exists`,
`thm-projective-comparison-maps-are-unique-up-to-chain-homotopy`,
`thm-sequentially-compact-implies-totally-bounded`,
`thm-sokal-gliding-hump-uniform-boundedness`,
`thm-subordinate-partitions-of-unity-exist`,
`thm-three-definitions-of-uniform-space-are-equivalent`,
`thm-tietze-extension-theorem`,
`thm-total-variation-function-of-an-absolutely-continuous-function`,
`thm-uniformizable-iff-completely-regular`, `thm-urysohn-lemma`, and
`thm-vitali-covering-theorem-for-fine-covers-on-the-line`.

Its complete transitive published closure is 3,522 items grouped over 297 page
homes, plus 24 currently unhomed published items. Since the repair changes only
the home and spelling of the definition dependency, no consumer edge changes.
The exact closure is therefore the reverse `deps + justified_by` reachability
set of the 83 IDs above; the sorted `page-id<TAB>item-id` serialization has
SHA-256 `088790f25754324deb44aa4c3b6d3f21ebf58a5864a5beeb9c43b52352eb7346`.
The root list, grouping rule, cardinalities and digest are the binding exact map
without embedding a generated 3,522-row appendix in prose.

The new continuum A theorem has the exact direct published consumer
`ex-cardinal-functions-of-the-lower-limit-line`. Its complete published closure,
all on `countability-axioms-and-cardinal-functions-examples`, is that item plus
`ex-countability-profile-of-the-lower-limit-plane`,
`cex-lindelofness-is-not-productive-worked`, and
`cex-separability-is-not-hereditary-worked`.

Exactly three deferred catalogue roots have a published non-catalogue YAML
consumer. They are Phase-2 roots, though none of their consumers is Foundations-
homed:

| exact planned supplier | direct published consumers | complete published impact by home |
|---|---|---|
| `thm-basic-cohen-symmetric-model-satisfies-bpi-and-not-ac` (SET-21) | `rem-choice-strength-of-hahn-banach` | `the-analytic-hahn-banach-theorem`: that item; its B: `rem-hahn-banach-open-choice-questions` |
| `thm-complete-metric-baire-is-equivalent-to-dependent-choice-over-zf` (SET-22) | `thm-banach-space-no-countably-infinite-hamel-basis`, `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost` | `finite-dimensional-normed-spaces-and-riesz-lemma`: those two; its B: `cex-polynomial-space-admits-no-complete-norm` |
| `thm-suslin-hypothesis-is-independent-relative-to-zfc` (SET-17) | `rem-suslin-line-non-ccc-square-unverified` | `open-problems-and-research-frontier`: that item only |

Every other deferred-target supplier has **zero direct and zero transitive
published consumers**. Fix these exact planned IDs now:
`thm-l-is-an-inner-model-of-zfc-and-gch`,
`thm-relative-consistency-of-ac-and-not-ac-over-zf`,
`thm-relative-independence-of-ch-and-gch-over-zfc`,
`thm-arbitrary-set-gch-implies-choice-over-zf`,
`thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals`,
`thm-fraenkel-socks-model-and-jech-sochor-transfer`,
`thm-feferman-levy-model-has-singular-omega-one-and-a-countable-union-of-countable-reals`,
`thm-feferman-model-has-no-free-ultrafilter-on-omega`,
`thm-blass-model-has-only-principal-ultrafilters`,
`thm-solovay-model-regularity-relative-to-an-inaccessible`,
`thm-shelah-baire-property-model-and-inner-model-lower-bound`,
`thm-gitik-model-has-all-uncountable-cardinals-singular`,
`thm-urysohn-choice-strength-bounds-and-separations`,
`thm-stone-paracompactness-choice-strength-bounds-and-separations`,
`thm-tychonoff-product-forms-and-their-choice-strengths`,
`thm-martins-axiom-relative-consistency-and-standard-consequences`,
`thm-normal-moore-space-conjecture-consistency-bounds`,
`thm-l-spaces-and-s-spaces-zfc-and-pfa-results`, and
`thm-dowker-space-existence-and-size-results`.

These zero-consumer items must not be wired into published definitions or
orientation remarks merely to manufacture replacement links.

## 7.4 Published metadata snapshot amendments

For every registered published Foundations item, the owner must set the spec
`deps` array to the current item-frontmatter `deps` array, preserving order.
There are 149 such mismatches, grouped exactly as follows:

| page | dependency-array replacements | title replacements |
|---|---:|---:|
| `the-zfc-axioms-and-basic-set-constructions` | 11 | 0 |
| its B companion | 5 | 0 |
| `relations-functions-and-quotients` | 16 | 4 |
| its B companion | 8 | 0 |
| `order-zorn-and-the-axiom-of-choice` | 10 | 0 |
| its B companion | 8 | 0 |
| `filters-and-ultrafilters` | 11 | 0 |
| its B companion | 0 | 2 |
| `ordinals-and-transfinite-recursion` | 14 | 0 |
| `ordinal-arithmetic` | 20 | 0 |
| its B companion | 8 | 1 |
| `cardinal-arithmetic-and-cofinality` | 25 | 10 |
| its B companion | 8 | 7 |
| `formal-set-theoretic-syntax-structures-and-satisfaction` | 1 | 0 |
| `well-founded-relations-rank-and-the-cumulative-hierarchy` | 4 | 0 |

The 24 exact title-replacement IDs are
`thm-reflexive-and-irreflexive-orders-correspond`,
`cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse`,
`def-product-of-an-indexed-family`, `prop-products-over-small-index-sets`,
`ex-frechet-filter`, `ex-free-ultrafilter-on-naturals`,
`ex-an-increasing-sequence-in-omega-one-has-a-countable-supremum`,
`lem-cardinal-operations-are-well-defined`, `lem-cardinal-arithmetic-basic-laws`,
`thm-cardinal-arithmetic-agrees-with-finite-counting`,
`thm-cardinal-power-set-and-cantor`, `lem-successor-cardinal-exists`,
`cor-the-aleph-and-beth-hierarchies-are-well-defined`, `thm-tarski-square`,
`thm-cofinality-basics`, `thm-konig`, `cor-cofinality-of-a-cardinal-power`,
`ex-cardinal-absorption-computed`, `ex-the-cardinality-of-the-continuum`,
`ex-aleph-one-is-at-most-the-continuum`,
`ex-a-singular-cardinal-of-uncountable-cofinality`, `ex-an-aleph-fixed-point`,
`ex-the-beth-hierarchy-computed`, and
`ex-counting-functions-and-subsets-of-the-continuum`.

The dependency replacement is exact by value, not merely by count: the source
of truth for each of the 149 values is that same ID's published frontmatter at
the audit commit. This prevents copying a second stale array into prose.
`construction-of-the-natural-numbers` remains a legacy empty spec inventory
despite 34 live A items and five displayed example items. Do not silently
change its category or breach the 30-item ceiling; the owner must grant an
explicit legacy exception or split/register a companion before populating it.

## 7.5 Cross-category ownership seams

- Category Theory owns accessible/presentable categories and accessibility
  machinery. SET-4's “accessible pointed graph” is only the membership-graph
  notion. Its Grothendieck-universe items neither assert an inaccessible exists
  nor supply a category-theoretic universe-change theorem.
- Abstract Algebra owns rings, ideals, quotients and homomorphism algebra.
  SET-7 defines Boolean algebras and Boolean ideals for Stone/BPI and must prove
  its bridge explicitly; a commutative-ring prime-ideal theorem is not BPI.
  Algebraic Geometry owns `Spec` and schemes; Stone spectrum is not scheme
  spectrum.
- `fs-ordinals-form-a-set` has exactly two direct and transitive published
  consumers, both on
  `reflective-subcategories-and-the-adjoint-functor-theorems-examples`:
  `cex-a-category-that-is-not-well-powered` and
  `cex-a-complete-category-whose-coseparating-sets-are-never-small`.
  `fs-every-ultrafilter-principal` has exactly one direct/transitive consumer,
  `ex-the-ultrafilter-monad-on-a-finite-set`, on
  `monads-comonads-and-their-algebras-examples`. These suppliers are A-homed in
  the canonical spec and therefore do not violate B-leaf discipline.
- The real-analysis home of DC and the topology continuum repair are binding
  interfaces. A missing A input must never be patched by adding it directly to
  a Foundations B page.

## 7.6 Full-text evidence and source blockers

- S. Feferman, *Some applications of the notions of forcing and generic sets*,
  Fundamenta Mathematicae 56 (1964/65), 325--345, DOI
  `10.4064/fm-56-3-325-345`: the full publisher scan was recovered. Theorem
  4.12 and proof, printed pp. 343--344, use finitely many generic-set parameters
  and a tail-complement transform of the next generic set to contradict a
  supposed nonprincipal prime ideal. This is the authoritative correction to
  the invalid finite-bit-flip summary.
- M. Morillon, *The power of DMC*, full author PDF, p. 6, records that DMC plus
  countable choice for finite sets implies DC. The full Japanese note *On
  dependent choice*, Definition and Propositions 6--7, PDF pp. 4--5, confirms
  the finite-level formulation and prescribed-start equivalence. The published
  SET-6 proof supplies the easy converse directions directly.
- A. Blass, *A model without ultrafilters*, Bull. Acad. Polon. Sci. 25 (1977),
  329--331: bibliographic identity and a later primary-author confirmation were
  recovered, but no authoritative full text of the proof was accessible.
  `thm-blass-model-has-only-principal-ultrafilters` remains **blocked**;
  secondary summaries are not proof sources.
- Andretta--Notaro, *Does DC imply AC_omega uniformly?*, JSL (2024), full
  Cambridge PDF, §5.2, printed pp. 1560--1561, confirms the Feferman--Levy
  consequence used for orientation but does not replace the required original
  symmetric-model construction. SET-20 remains gated on full construction.

## 7.7 Validation gate

Before any remaining pair is authored, rerun spec validation; ID collision and
ownership checks; direct/transitive deferred-catalogue closure over `deps` and
`justified_by`; a prose-link scan for all 22 catalogue IDs; published-to-draft
and forward-edge checks; A-prerequisite coverage; and B dependency-target
checks. Any catalogue closure or external B target blocks publication.
Relative-consistency items must separately type the antecedent, object theory,
metatheory, semantic model construction and formal transfer.

## 7.8 Topology reconciliation (2026-09-08)

Topology's audit confirms that `def-dependent-choice` keeps its stable ID but
moves to `countability-and-uncountability` after `def-countable-choice` and
uses `def-function`. Its 33 direct Topology consumers remain part of the exact
83-consumer global DC ledger. Foundations also owns
`thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero`; it replaces the
Topology B-example supplier for `ex-cardinal-functions-of-the-lower-limit-line`
and its exact four-item Topology impact cone already recorded in §7.3.

Topology must remove all eight `external_refs` to the recorded catalogue from
seven published items and delete any sharp independence/lower-bound prose not
proved in the library. The internal Tychonoff, Baire, and Urysohn proofs may
state only their actual sufficient hypotheses. No catalogue item becomes a
dependency, justification, or proof source.

## 7.9 Phase-2 replacement cut for the SET-21/22 consumer roots (2026-09-08)

This subsection is binding over the two Phase-2 classifications in §7.3.  The
old SET-21 root reaches source-blocked SET-20, and the old SET-22 root reaches
SET-21/20 while sharing a page with the unresolved `DMC < DC` assertion.  They
are therefore **not** Phase-2 supplier roots.  The cheapest adequate cut is two
new pairs, because the two interfaces have disjoint mathematics and forcing
the Baire theorem through the Cohen-model proof would create a gratuitous
dependency.  These pairs prove only the interfaces required by the published
consumers and have no dependency, justification, or proof link to the recorded
catalogue.

### Exact machine-plan page objects

The following four fractional orders and every page/item id below were unused
before integration.  At the final validation pass, the shared live plan has
1,616 pages and contains exactly these four empty shells; this audit did not
edit `plan-spec.json`.  The DC pair is placed after SET-5 B (664) and before
SET-6 A (665); the BPI pair is placed after SET-19 B (692) and before SET-20 A
(693).

```json
[
  {
    "id": "boolean-prime-ideal-theorem-in-the-basic-cohen-model",
    "title": "The Boolean Prime Ideal Theorem in the Basic Cohen Model",
    "order": 692.1,
    "kind": "A",
    "category": "foundations",
    "requires": ["symmetric-extensions-and-basic-choice-failure-models"],
    "companion": "boolean-prime-ideal-theorem-in-the-basic-cohen-model-examples",
    "items": []
  },
  {
    "id": "boolean-prime-ideal-theorem-in-the-basic-cohen-model-examples",
    "title": "The Boolean Prime Ideal Theorem in the Basic Cohen Model — Examples",
    "order": 692.2,
    "kind": "B",
    "category": "foundations",
    "requires": ["boolean-prime-ideal-theorem-in-the-basic-cohen-model"],
    "companion": "boolean-prime-ideal-theorem-in-the-basic-cohen-model",
    "items": []
  },
  {
    "id": "dependent-choice-and-the-complete-metric-baire-theorem",
    "title": "Dependent Choice and the Complete-Metric Baire Theorem",
    "order": 664.1,
    "kind": "A",
    "category": "foundations",
    "requires": [
      "relations-functions-and-quotients",
      "completeness-and-uniform-continuity"
    ],
    "companion": "dependent-choice-and-the-complete-metric-baire-theorem-examples",
    "items": []
  },
  {
    "id": "dependent-choice-and-the-complete-metric-baire-theorem-examples",
    "title": "Dependent Choice and the Complete-Metric Baire Theorem — Examples",
    "order": 664.2,
    "kind": "B",
    "category": "foundations",
    "requires": ["dependent-choice-and-the-complete-metric-baire-theorem"],
    "companion": "dependent-choice-and-the-complete-metric-baire-theorem",
    "items": []
  }
]
```

The plan integration step has added only these four empty `items: []` shells.  The
item ids in the next table are the binding hydration inventory for authorship,
not pre-hydrated plan records.

Both A prerequisite lists contain only strictly earlier A pages.  SET-19's
closure supplies SET-7 Boolean algebra/BPI vocabulary, forcing and symmetric-
model machinery, the failure of AC in the basic Cohen model, and SET-14's
formal consistency transfer.  The DC/Baire page uses only the clean published
relations/functions A page and `completeness-and-uniform-continuity`; it locally
states the Baire and DC principles and proves both directions, so it has no
edge to SET-6, SET-20/21/22, or the published
`complete-metrizability-and-baire` page with its unrepaired Recorded
orientation links.  Each B page has the singleton requirement consisting of
its A companion and is a dependency leaf.

### Exact item titles and proof order

| order | id | kind | exact title | adequate earlier inputs |
|---:|---|---|---|---|
| 1 | `lem-basic-cohen-model-schema-of-continuity` | lemma | Schema of continuity in the basic Cohen model | SET-19 forcing automorphisms, finite supports, symmetry lemma and canonical Cohen names |
| 2 | `cor-basic-cohen-model-finite-set-continuity` | corollary | Finite parameter sets admit disjoint clopen supports | preceding continuity lemma |
| 3 | `lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model` | lemma | A supported Boolean algebra has an ordinal-definable maximal proper ideal | SET-7 Boolean ideals and SET-19 finite-parameter HOD representation |
| 4 | `lem-basic-cohen-continuity-forces-the-maximal-ideal-to-be-prime` | lemma | Continuity forces the supported maximal ideal to be prime | preceding corollary and maximal-ideal lemma |
| 5 | `thm-basic-cohen-model-satisfies-bpi-and-fails-choice` | theorem | The basic Cohen model satisfies BPI and fails Choice | preceding primeness lemma plus SET-19's proved Dedekind-finite generic set |
| 6 | `cor-relative-consistency-of-bpi-without-choice-over-zf` | corollary | Relative consistency of BPI without Choice over ZF | preceding semantic theorem plus SET-14's formal finite-fragment transfer through SET-19; explicitly prove `Con(ZF) -> Con(ZF+BPI+not AC)` rather than inferring it from a CTM |
| B1 | `ex-continuity-contradiction-for-a-supported-boolean-algebra` | example | The finite Boolean expansion contradiction in the supported-ideal proof | companion A only; zero consumers |
| B2 | `fs-bpi-is-ac` | false-statement | BPI does not imply AC over ZF, assuming Con(ZF) | `def-boolean-prime-ideal-principle` through the A closure and `cor-relative-consistency-of-bpi-without-choice-over-zf`; explicitly assume Con(ZF), derive consistency of ZF+BPI+not AC, and hence nonprovability of BPI -> AC over ZF. Do not replace formal consistency transfer by the stronger existence of a countable transitive model. Rehomed from SET-7 B; no incoming current-run dependency. |
| 1 | `def-serial-relation-dependent-choice-principle-over-zf` | definition | The serial-relation Dependent Choice principle over ZF | published relation and function definitions only |
| 2 | `lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf` | lemma | Prescribed-start and starting-point-free serial choice are equivalent in ZF | preceding definition; use tagged finite paths for the prescribed start |
| 3 | `def-complete-metric-baire-principle-over-zf` | definition | The complete-metric Baire principle over ZF | published metric-space and completeness definitions; locally define nowhere dense, meagre and Baire |
| 4 | `lem-open-dense-and-closed-nowhere-dense-baire-forms-are-equivalent-in-zf` | lemma | Open-dense and closed-nowhere-dense Baire forms are equivalent in ZF | preceding Baire definition and indexed De Morgan laws from relations/functions closure |
| 5 | `thm-serial-dependent-choice-implies-complete-metric-baire-over-zf` | theorem | Serial Dependent Choice implies the complete-metric Baire principle over ZF | preceding DC and Baire items; give the nested closed-ball construction locally |
| 6 | `lem-discrete-sequence-spaces-are-complete-in-zf` | lemma | Discrete sequence spaces are complete in ZF | published completeness plus local Baire definition; define each limiting coordinate from the least stabilization stage, using no choice |
| 7 | `lem-serial-relation-successor-sets-are-open-dense` | lemma | Successor-occurrence sets of a serial relation are open and dense | preceding discrete sequence-space lemma |
| 8 | `thm-complete-metric-baire-principle-implies-dependent-choice-over-zf` | theorem | The complete-metric Baire principle implies Dependent Choice over ZF | preceding open-dense lemma and local starting-point equivalence; choose successors from the countable range by least indices |
| 9 | `thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf` | theorem | Dependent Choice is equivalent to the complete-metric Baire principle over ZF | the two preceding implication theorems |
| B1 | `ex-blair-sequence-space-for-a-serial-relation` | example | Blair's sequence space for a serial relation | companion A only; zero consumers |

The Baire pair contains no DMC item or claim.  In particular, the unresolved
strict `DMC < DC` assertion cannot enter this pair through prose, dependency,
`justified_by`, or `external_refs`.

### Old-root cutover and exact published impact

- Old `thm-basic-cohen-symmetric-model-satisfies-bpi-and-not-ac` maps to
  `thm-basic-cohen-model-satisfies-bpi-and-fails-choice` for the semantic model
  statement and to `cor-relative-consistency-of-bpi-without-choice-over-zf`
  for the published consistency wording.  In Phase 3,
  `rem-choice-strength-of-hahn-banach` replaces both its dependency and body
  link to `rem-halpern-levy-bpi-not-ac` by the new consistency corollary.  Its
  exact direct published consumer is that remark; the complete published
  closure is `the-analytic-hahn-banach-theorem`:
  `rem-choice-strength-of-hahn-banach`, and its B companion:
  `rem-hahn-banach-open-choice-questions`.
- Old `thm-complete-metric-baire-is-equivalent-to-dependent-choice-over-zf`
  maps to `thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf`.
  In Phase 3, both `thm-banach-space-no-countably-infinite-hamel-basis` and
  `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost`
  replace their dependency/body links to `rem-baire-category-choice-strength`
  by the new theorem.  The exact direct published consumers are those two
  items.  The complete published closure is
  `finite-dimensional-normed-spaces-and-riesz-lemma`: those two items, and its
  B companion: `cex-polynomial-space-admits-no-complete-norm`.

For the BPI pair, each of the first five A items has **zero direct published
consumers** and the same two-item transitive published impact through the
consistency corollary; the corollary has one direct published consumer and a
two-item total published closure (one additional transitive consumer).  Its B
item has zero direct and zero transitive published consumers.  For the Baire
pair, each of the first eight A items has **zero direct published consumers**
and the same three-item total published impact through the equivalence theorem;
the equivalence theorem has two direct published consumers and a three-item
total published closure (one additional transitive consumer).  Its B item has
zero direct and zero transitive published consumers.

After this cutover, the old SET-21 and SET-22 roots are planned-only/Phase-3
cleanup, with zero published impact; they are not Phase-2 work.  SET-21 may
retain its full Halpern--Läuchli enrichment and SET-22 may retain its supported
Urysohn/Stone/Tychonoff/DMC program, but neither page may be used to unblock a
published consumer.  SET-20's missing Blass full proof and SET-22's unresolved
`DMC < DC` claim remain blockers only for those planned enrichment pages.

The exact later-page prerequisite amendments are also binding, but are not
part of the four-shell Phase-2 integration patch.  SET-6 is published and
strictly read-only: its requirement/body cutover is Phase 3.  The exact target
arrays are:

```text
SET-6.requires = [cardinal-arithmetic-and-cofinality,
  filters-and-ultrafilters, countability-and-uncountability,
  well-founded-relations-rank-and-the-cumulative-hierarchy,
  dependent-choice-and-the-complete-metric-baire-theorem]
SET-21.requires = [symmetric-collapse-and-ultrafilter-free-models,
  boolean-prime-ideal-theorem-in-the-basic-cohen-model]
SET-22.requires = [halpern-lauchli-and-bpi-without-choice,
  dependent-choice-and-the-complete-metric-baire-theorem]
```

SET-6 then cites the new serial-DC definition/equivalence rather than minting
another DC definition.  SET-21 retains SET-20 only for planned strict-
separation enrichment.  SET-22 no longer requires the broad published
`complete-metrizability-and-baire` page and retains SET-21 only for its planned
non-Baire choice-strength rows.

### Authoritative full-text basis and closure result

- Miroslav Repický, *A proof of the independence of the Axiom of Choice from
  the Boolean Prime Ideal Theorem*, CMUC 56 (2015), 543--546, full four-page
  journal PDF, DOI `10.14712/1213-7243.2015.138`: Lemma 2 and Corollary 3 on
  pp. 543--545 prove the continuity/support reductions; pp. 545--546 prove that
  the supported maximal proper ideal is prime and hence prove BPI in the model.
- Alessandro Andretta and Lorenzo Notaro, *Does DC imply AC_omega uniformly?*,
  JSL 90 (2025), 1538--1562, full open-access publisher text, DOI
  `10.1017/jsl.2024.33`: §3, Theorem 3.2 and Proposition 3.3 give the symmetric-
  extension theorem, the exact first-Cohen-model system and its infinite
  Dedekind-finite set.  These are the authoritative inputs already assigned to
  SET-19.
- Arnold W. Miller, *Axiom of Choice* course notes (15 February 2008), full
  26-page University of Wisconsin PDF, Proposition 5.4, printed pp. 10--11,
  proves in ZF both `DC -> Baire` and Blair's sequence-space converse, including
  the complete discrete-product metric and the open dense successor sets.

All three full texts were retrieved and the cited proof ranges inspected.  The
two new A closures terminate in the earlier A pages named above and have
**zero direct or transitive route** to `deferred-set-theory-beyond-choice` or
any of its 22 items.  There is no full-text blocker for either replacement
pair.
# Step-5 dependency/source synchronization, 2026-09-09

Completed batch16's Baire-property theorem explicitly declares the AD
definition; its AD+DC Lebesgue-measurability theorem declares the earlier
dyadic coding/measure-transfer lemma and rational density. These three edges
are synchronized with the canonical plan. They do not import AC into the
AD argument or use a Recorded catalogue supplier. All65 items remain draft.

Batch14's actual collapse-chain non-inclusion witness explicitly declares
`thm-countable-elementary-submodels-and-transitive-collapses`, `thm-hartogs`
and `def-axiom-of-choice`, now synchronized with the canonical plan.
Its eleven-item source-reading handoff uses the independently read Moschovakis
passages and local arguments recorded in
`phase-2-catchup-24-step5-logic-source-reconciliation.md`; no fresh Avigad
reading is claimed. New logic suppliers remain draft pending Step6 and
publication; no Recorded catalogue supplier or new pair is introduced.
