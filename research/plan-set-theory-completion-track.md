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
| SET-2 | `deduction-soundness-completeness-and-compactness` | SET-1 |
| SET-3 | `arithmetization-incompleteness-and-relative-consistency` | SET-2 |
| SET-4 | `well-founded-relations-rank-and-the-cumulative-hierarchy` | published ordinals/transfinite recursion |
| SET-5 | `reflection-absoluteness-and-elementary-submodels` | SET-2, SET-4 |
| SET-6 | `weak-choice-principles-and-sierpinskis-theorem` | SET-4; published cardinal arithmetic, filters/ultrafilters, and metric compactness (for the already-homed DC interface) |
| SET-7 | `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` | SET-2; published compactness (whose closure contains filters/ultrafilters) |
| SET-8 | `club-stationary-sets-and-pressing-down` | SET-1; published cardinal arithmetic/cofinality |
| SET-9 | `set-theoretic-trees-delta-systems-and-diamond` | SET-8 |
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
| SET-21 | `halpern-lauchli-and-bpi-without-choice` | SET-20 |
| SET-22 | `choice-strength-in-baire-urysohn-stone-and-tychonoff` | SET-21; published complete-metrizability/Baire page (whose closure includes compactness, Urysohn and paracompactness) |
| SET-23 | `large-cardinals-measures-and-elementary-embeddings` | SET-5, SET-7, SET-8 |
| SET-24 | `solovays-model-and-regularity-of-all-sets-of-reals` | SET-23, SET-20, SET-10 |
| SET-25 | `shelahs-baire-property-model-and-inner-model-lower-bounds` | SET-24, SET-16 |
| SET-26 | `prikry-forcing-and-gitiks-singular-cardinal-model` | SET-23, SET-20 |
| SET-27 | `proper-forcing-countable-support-iterations-and-pfa` | SET-16, SET-23 |
| SET-28 | `normal-moore-spaces-pmea-and-consistency-strength` | SET-27, SET-25, SET-22; published product measure |
| SET-29 | `minimal-walks-oscillation-and-l-and-s-spaces` | SET-27, SET-12 (SET-27 already reaches the needed topology pages) |
| SET-30 | `pcf-scales-and-zfc-dowker-spaces` | SET-8; published paracompactness page (whose closure includes productive separation) |
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

**Proof spine.** The countable-language Henkin construction is coded and its
choices are canonical least natural-number codes. This is sufficient for the
language of set theory. Arbitrary well-orderable languages require an explicit
well-order/choice hypothesis; arbitrary-language compactness and its BPI
strength are proved only on SET-7. Compactness and Löwenheim--Skolem are
corollaries only after the applicable model-existence theorem.

## SET-3. Arithmetization, Incompleteness, and Relative Consistency

**Items.** Effective theories and Gödel numbering; primitive-recursive syntax
predicates; representability; diagonal lemma; first incompleteness theorem;
derivability conditions; second incompleteness theorem; Tarski undefinability;
models versus consistency; interpretation and conservative extension;
finite-fragment/reflection transfer; semantic CTM theorem versus formal
relative-consistency theorem; `fs-con-zfc-implies-a-transitive-model-of-zfc`.

**Proof spine.** Every later `Con(T) -> Con(T+phi)` cites the last two transfer
items. No proof appeals to the consistency it is meant to establish.

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

## SET-6. Weak Choice Principles and Sierpiński's Theorem

**Items.** `AC_omega`, choice for pairs, DC, multiple choice and DMC;
implications AC => DC => `AC_omega`; BPI equivalent to the ultrafilter lemma
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

**Items.** Boolean algebras, ideals and filters; prime and maximal ideals;
homomorphisms and quotients; Boolean completion and regular-open algebra;
Stone space of ultrafilters; clopen representation; Stone duality; BPI
equivalent forms; compactness of Stone spaces; compact Hausdorff Tychonoff
equivalent to BPI; arbitrary-language compactness from BPI and the converse
coding, with countable-language completeness cited from SET-2; forcing
preorders, separative quotients and complete Boolean algebras; `fs-bpi-is-ac`.

**Proof spine.** Algebraic filters and forcing filters remain distinct. The
Stone representation gives the exact bridge later used by Boolean-valued
forcing and the Halpern--Lévy model.

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
interface; partition relations and Ramsey/Erdős--Rado orientation;
Halpern--Läuchli finite-tree statement; `fs-every-omega-one-tree-has-a-cofinal-branch`.

**Dependency boundary.** This page does **not** prove `V=L -> diamond`.
SET-12 proves that implication from constructibility and may then cite this
page's earlier theorem `diamond ->` “a Suslin tree exists.”

## SET-10. Borel and Analytic Sets, Perfect Sets, and Determinacy

**Items.** Baire and Cantor spaces; trees coding closed sets; Borel hierarchy
and Borel codes; analytic sets as projections and tree projections; Souslin
operation; separation and boundedness; perfect-set theorem for analytic sets;
Borel regularity for measure and category; infinite games and strategies;
Gale--Stewart open determinacy; Borel determinacy with its transfinite rank
spine; AD, DC and regularity consequences as conditional theorems; Vitali,
Bernstein and Hamel pathologies under choice; `fs-every-set-of-reals-is-borel`.

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

**Items.** Cofinality of posets and reduced products; ideals and true
cofinality; scales; generators and basic PCF theorem; no-holes/possible
cofinalities needed by the construction; countable paracompactness and
shrinkings; Dowker's product characterization; Rudin's ordinal-product Dowker
space and cardinality; Balogh's continuum-sized ZFC construction; good-scale
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
