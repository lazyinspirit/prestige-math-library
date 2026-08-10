# Beta-freegroups-1-1 — scaffold notes

This is a reasoning and authoring record only.  It is not a prose scaffold and
contains no requested edit to either published page.  The page manifest keeps
all published items in their present positions and appends the proposed items.
In the tables below, **new** means absent from both `items/` and
`research/plan-spec.json` at the time of the collision check.

## 1. What the published pair already proves, and the D6 overlap audit

I read both page files and every listed item in full.  The key overlap
is in `thm-reduced-words-form-the-free-group`, not merely in its title.

That theorem already does all of the following for the **reduced-word model**:

- step 1.1 constructs a stack reduction `red(w)`, proves that it is reduced,
  and proves that it fixes a reduced word;
- step 2.1 proves invariance of `red` under elementary cancellation and reverse
  insertion, proves that a word is freely equivalent to its reduction, and
  concludes that freely equivalent reduced words are literally equal;
- steps 3.1 and 4.1 define reduced concatenation and prove associativity,
  identity, and the reversal-and-inversion formula for inverses;
- steps 4.2 and 5.1 construct the extension of a map from the alphabet and prove
  its uniqueness; and
- step 6.1 concludes that the reduced-word group has the universal property in
  `def-free-group`.

It does **not** prove as separately stated results that free equivalence is an
equivalence relation, that it is a congruence for concatenation, or that the
quotient set of all words is a group.  It does not construct `W(X)/~`, and it
does not use the van der Waerden permutation argument.  Neither generator
injectivity nor the comparison isomorphism between the quotient-of-words and
reduced-word models is a Statement in the published item, although both follow
after the missing quotient model is built.

The proposed D6 spine is therefore model-specific:

1. `prop-free-equivalence-is-an-equivalence-and-a-congruence` proves the two
   prerequisites for quotienting.
2. `def-word-quotient-model-of-the-free-group` defines
   `F_word(X) := W(X)/~` and the operations on classes.
3. `thm-word-quotient-model-is-a-group` proves the group laws directly on
   classes.  Associativity is inherited from literal word concatenation; it
   does not detour through reduced concatenation.
4. `lem-formal-letters-act-by-permutations-on-reduced-words` isolates the van
   der Waerden construction.  A formal letter acts on the set of reduced words
   by adjoining it and cancelling at the seam when necessary; the inverse
   letter gives the inverse permutation.
5. `thm-normal-form-for-the-word-quotient-model` proves that each quotient
   class has exactly one reduced representative.  Existence is length
   reduction; uniqueness is the van der Waerden action argument.
6. `thm-word-quotient-model-is-free` evaluates representatives in an arbitrary
   group, proves invariance under each elementary move, and proves uniqueness
   from the one-letter classes.
7. The corollary pair records generator injectivity and invokes the already
   published uniqueness theorem to identify this model with the published
   reduced-word model.

The normal-form Statement overlaps mathematically with an internal conclusion
of the existing proof, but it is a new Statement about `W(X)/~`, and D6
expressly requires its van der Waerden proof.  I recommend keeping it.  If the
owner treats D5 as forbidding even that model-specific restatement, remove only
`thm-normal-form-for-the-word-quotient-model` and rewrite the injectivity
corollary through the comparison isomorphism; that alternative would not meet
the stated van der Waerden requirement.

## 2. Proposed reading order and gap analysis

### A page, order 60

The first six entries in the manifest are the six published entries, unchanged
and in their current order.  These appended entries are new:

| position | id | kind | purpose |
|---:|---|---|---|
| 7 | `prop-free-equivalence-is-an-equivalence-and-a-congruence` | proposition | quotient well-definedness |
| 8 | `def-word-quotient-model-of-the-free-group` | definition | the all-words quotient model |
| 9 | `thm-word-quotient-model-is-a-group` | theorem | group laws on classes |
| 10 | `lem-formal-letters-act-by-permutations-on-reduced-words` | lemma | van der Waerden engine |
| 11 | `thm-normal-form-for-the-word-quotient-model` | theorem | unique reduced representative |
| 12 | `thm-word-quotient-model-is-free` | theorem | proved universal property |
| 13 | `cor-generators-embed-in-the-word-quotient` | corollary | injective generator map |
| 14 | `cor-word-quotient-and-reduced-word-models-are-uniquely-isomorphic` | corollary | seam between the models |
| 15 | `def-free-basis` | definition | basis vocabulary |
| 16 | `thm-finite-free-bases-have-the-same-cardinality` | theorem | finite rank invariance |
| 17 | `def-rank-of-a-finite-rank-free-group` | definition | honest finite-rank definition |
| 18 | `def-relators-relations-and-finite-presentations` | definition | requested finiteness vocabulary |
| 19 | `prop-normal-closure-is-products-of-conjugates` | proposition | explicit normal closure |
| 20 | `prop-equality-of-words-in-a-presentation` | proposition | equality criterion in a presentation |
| 21 | `thm-von-dyck` | theorem | universal property of a presentation |
| 22 | `cor-every-finite-group-is-finitely-presented` | corollary | multiplication-table presentation |
| 23 | `def-abelianisation-of-a-group` | definition | canonical abelian quotient |
| 24 | `def-free-abelian-group` | definition | abelian universal property |
| 25 | `thm-abelianisation-of-a-free-group-is-free-abelian` | theorem | requested abelianisation result |
| 26 | `def-tietze-transformations` | definition | reversible elementary moves |
| 27 | `prop-tietze-transformations-preserve-presented-groups` | proposition | soundness of each move |
| 28 | `thm-tietze-transformations-connect-finite-presentations` | theorem | finite Tietze theorem |
| 29 | `def-cyclically-reduced-word` | definition | cyclic-reduction vocabulary |
| 30 | `lem-cyclic-reduction-normal-form` | lemma | conjugate cyclically reduced core |
| 31 | `thm-free-groups-are-torsion-free` | theorem | requested structure theorem |
| 32 | `thm-conjugacy-of-cyclically-reduced-words` | theorem | conjugacy normal form |

This closes the requested concrete construction, presentation universal
property, normal-closure description, vocabulary, finite rank, abelianisation,
Tietze, torsion, and conjugacy gaps.  Material not explicitly named in the
brief but worth adding is the equality criterion for words in a presentation
and the multiplication-table proof that every finite group is finitely
presented.  Both are useful, source-backed consequences of the requested
spine, not padding.

### B page, order 61

The first entry in the manifest is the published reduction example, unchanged.
These appended entries are new:

| position | id | kind | purpose |
|---:|---|---|---|
| 2 | `ex-free-group-on-the-empty-set` | example | rank-zero boundary |
| 3 | `ex-free-group-on-one-generator` | example | `F_1` is the infinite cyclic group |
| 4 | `ex-free-group-on-two-generators-is-not-abelian` | example | noncommutativity from distinct normal forms |
| 5 | `ex-presentation-of-a-finite-cyclic-group` | example | cyclic presentation, including `n=1` |
| 6 | `ex-presentation-of-a-dihedral-group` | example | the family `D_n`, with convention stated |
| 7 | `ex-presentation-of-the-klein-four-group` | example | `C_2 x C_2` |
| 8 | `ex-presentation-of-z-squared` | example | free abelian group on two generators |
| 9 | `ex-presentation-of-the-symmetric-group-on-three-letters` | example | Coxeter presentation of `S_3` |
| 10 | `cex-delete-only-relator-rewriting-misses-ba` | counterexample | a stuck trivial word |
| 11 | `cex-delete-only-relator-rewriting-can-require-lengthening` | counterexample | a longer stuck trivial word in `Z^2` |
| 12 | `cex-delete-only-relator-rewriting-is-order-dependent` | counterexample | two deletion orders give different endpoints |

For each deletion counterexample, the Statement must define the same narrow
syntactic operation: at each step one may freely cancel an adjacent inverse
pair or delete a contiguous occurrence of a displayed relator or its inverse;
one may never insert a relator or lengthen the word.  The claims are only about
that operation.  They make no claim about a decision problem.

The witnesses were checked again:

- in `<a,b | ab>`, the relation gives `b=a^{-1}`, hence `ba=e`, but the word
  `ba` contains neither an inverse pair nor `ab` nor `b^{-1}a^{-1}`;
- in `<a,b | aba^{-1}b^{-1}>`, the group is `Z^2`, so
  `a^2 b^2 a^{-2} b^{-2}=e`; the expanded word is freely reduced and contains
  neither the four-letter relator nor its inverse as a contiguous subword; and
- in `<a,b | ab, aba>`, deleting `aba` gives the empty word, while deleting
  the prefix `ab` gives the stuck word `a`; the two relators also force
  `a=b=e`, so both endpoints represent the same group element.

The A page has 32 entries after enrichment and the B page has 12.  Neither is
near the 100-item A-page review ceiling.

## 3. Source ledger — verified URLs and exact support

The getcurious article is not in this ledger and must not appear in any
`sources.references`.  I used the owner's record of it only as a list of topics
to investigate.  Every proposed mathematical Statement was independently
checked against the sources below or was classified as a directly checkable
generated corollary/counterexample.

1. **Nicholas Touikan, University of New Brunswick, _An Introduction to
   Combinatorial and Geometric Group Theory_, §1.2, “The free group.”**
   <https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/reductions.html>

   The live page defines words and elementary insertion/cancellation, defines
   the free group as all words modulo the generated equivalence, explicitly
   raises representative-independence of concatenation, states unique reduced
   form, and derives well-defined multiplication.  It supports the quotient
   definition, congruence obligation, quotient normal form, and group theorem.

2. **Touikan, §1.3, “The universal property of the free group.”**
   <https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/universal.html>

   The live page states the extension-and-uniqueness theorem, gives the word
   evaluation formula and its invariance obligation, and calls a subset with
   this property a basis.  It supports the quotient universal-property proof
   and `def-free-basis`.

3. **Touikan, §1.4, “Generating and presenting groups.”**
   <https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/sec_generation_and_presentation.html>

   Proposition 1.4.2 gives the normal closure as finite products of conjugates
   `c_i^{-1} r_i^{epsilon_i} c_i`, including a zero-length product.  The section
   also states finitely generated vocabulary and explains equality through
   insertion and deletion of relators.  It supports the normal-closure and
   equality items.

4. **Touikan, §1.6, “Homomorphisms and Tietze transformations.”**
   <https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/sec_homs_tietze.html>

   Lemma 1.6.1 is the maps-out-of-a-presentation criterion.  The page lists the
   dictionary, redundant-relator, and renaming moves and their inverse
   restrictions, states that the moves preserve isomorphism type, and states
   Theorem 1.6.2 for finite presentations, with the standard common-intermediate-
   presentation proof hint.  It supports Von Dyck and all three Tietze items.

5. **Richard Elman, UCLA, _Lectures on Abstract Algebra_, §18, pp. 94–96.**
   <https://www.math.ucla.edu/~rse/algebra_book.pdf>

   The current 912-page PDF was opened.  Claim 18.6 constructs the reduced-word
   group with van der Waerden's permutations; Proposition 18.4 states basis
   cardinality invariance; the surrounding text gives the universal property,
   abelianisation route, presentations, and Von Dyck's theorem.  It supports the
   van der Waerden lemma, the finite specialization of rank invariance, the
   abelianisation theorem, and the presentation spine.  Elman assumes a
   nonempty alphabet in the existence theorem; the proposed library proof checks
   the empty alphabet separately.

6. **John McKernan, MIT, “Presentations and Groups of Small Order,” Lecture 12.**
   <https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf>

   The verified PDF states that the one-generator free group is `Z`, the
   two-generator free group is nonabelian, gives the universal property, gives
   `<a | a^n>` for a cyclic group of order `n`, proves the square-symmetry
   presentation, defines the free abelian quotient, and identifies the two-
   generator case with `Z x Z`.  It supports the corresponding examples and the
   free-abelian/abelianisation items.  Its later discussion of computational
   questions was not used and is out of scope by D2.

7. **D. L. Johnson, _Presentations of Groups_, Chapter 4, Cambridge University
   Press.**
   <https://www.cambridge.org/core/books/abs/presentations-of-groups/free-presentations-of-groups/046AC3D3A9D8D8F2802C568A4B536BE2>

   The publisher's chapter page gives the formal quotient definition, calls
   members of `R` defining relators, distinguishes equations `r=e` as defining
   relations, translates `u=v` to a relator, and defines finite presentation.
   It is the controlling source for the terminology item and the reconciliation
   with the published `def-group-presentation`.

8. **Ashot Minasyan, University of Southampton, _MATH6138 Geometric Group
   Theory_, §§2.2–2.3.**
   <https://www.personal.soton.ac.uk/am4x07/rs/MATH6138-notes.pdf>

   The indexed current PDF states and proves Von Dyck's theorem, gives the
   presentation `<sigma,tau | sigma^2,tau^2,(sigma tau)^n>` for the dihedral
   group of order `2n`, and proves from the multiplication table that every
   finite group is finitely presented.  It supports Von Dyck, the dihedral
   example, and the finite-group corollary.  Direct reopening encountered a
   browser cache miss after the indexed text was returned; the URL, title,
   theorem number, and relevant text were nevertheless verified in the search
   result.

9. **Encyclopedia of Mathematics, “Free group.”**
   <https://encyclopediaofmath.org/wiki/Free_group>

   The live entry states the universal property, calls the free generating set
   a basis and its cardinality the rank, and states unique irreducible word form.
   It supports the free-basis and normal-form vocabulary and is a second source
   for the rank Statement.

10. **Encyclopedia of Mathematics, “Presentation.”**
    <https://encyclopediaofmath.org/wiki/Presentation>

    The live entry distinguishes finitely generated and finitely related
    presentations, defines finite presentation, and gives the adjacent-
    transposition presentation of the symmetric groups.  It supports the
    finiteness vocabulary and the `S_3` specialization.

11. **M. Brittenham, University of Nebraska–Lincoln, “Group presentations.”**
    <https://www.math.unl.edu/~mbrittenham2/classwk/872s07/lecnotes/slides.from.class/cls08--presentations.pdf>

    The verified PDF defines relators, reduced words and the universal property,
    and gives the products-of-conjugates description of the normal closure.  It
    independently supports the normal-closure and presentation spine already
    represented by published references.

12. **Wilhelm Magnus, Abraham Karrass, and Donald Solitar, _Combinatorial Group
    Theory_.**
    <https://books.google.co.uk/books?id=QoiBAAAAIAAJ>

    The verified bibliographic page identifies the standard text and indexes
    the relevant free-word, cyclically-reduced, conjugacy, and finite-order
    material.  The cyclic reduction, torsion-free, and cyclic-permutation
    conjugacy statements are standard results from its elementary free-group
    development.  The proposed proofs are written out rather than imported as
    black boxes.

13. **J. Aspnes, Yale, “Group Theory.”**
    <https://www.cs.yale.edu/homes/aspnes/pinewiki/GroupTheory.html>

    The live notes list presentations for `Z`, `Z_m`, the dihedral groups and
    `Z_2 x Z_2`.  They support the small concrete presentation examples and
    confirm the relator convention.

14. **P. J. Cameron, Queen Mary University of London, group-theory revision
    notes.**
    <https://webspace.maths.qmul.ac.uk/p.j.cameron/MTHM024/gtrev.pdf>

    The indexed PDF gives `<a,b | a^2=b^2=1, ab=ba>` for the Klein four-group.
    It supports the Klein example independently of the direct verification.

15. **Alexander Hulpke, Colorado State University, _Notes on Computational
    Group Theory_, Definition III.5 and Lemma III.8.**
    <https://www.math.colostate.edu/~hulpke/CGT/cgtnotes.pdf>

    The indexed PDF distinguishes relators from equations called relations and
   states that every finite group is finitely presented.  Only these algebraic
   statements are used; no computational machinery is imported.

16. **Alexei Myasnikov and Vladimir Shpilrain, _Combinatorics over Free
    Groups_, §2.2.1.**
    <https://web.stevens.edu/algebraic/alexeim/Teaching/Group%20Theory%20627/Sections/book/ALLBOOK.pdf>

    The verified university-hosted PDF defines cyclic reduction and cyclic
    permutation and states in Proposition 2 that cyclically reduced words are
    conjugate exactly when they are cyclic permutations.  It directly supports
    the cyclic-reduction and conjugacy items.  Its immediately following
    decision-problem corollary is not used and is excluded by D2.

## 4. Convention disagreements and seams

- **Words modulo equivalence versus reduced words.**  Both constructions are
  standard.  The published page currently uses reduced words.  D6 requires the
  quotient of all words.  The scaffold keeps both and adds a unique
  generator-compatible isomorphism; it does not silently identify the carrier
  sets.
- **`F(X)` notation.**  During the proof, the new item should write
  `F_word(X)` for `W(X)/~` to prevent ambiguity with the abstract object and the
  published reduced-word carrier.  After the universal property and comparison
  theorem, a remark may say that any of the models is conventionally denoted
  `F(X)`.
- **Relator versus relation.**  Johnson distinguishes an element `r` of the
  free group (a relator) from the equation `r=e` or `u=v` (a relation).  Touikan
  and the current `def-group-presentation` call members of `R` relations.  The
  new vocabulary item must acknowledge this existing looser usage and then fix
  the sharper distinction for the page; it must not imply that the published
  definition was mathematically wrong.
- **Finitely related.**  The most stable meaning here is first a property of a
  presentation (`R` finite), followed by the existence convention for a group.
  Some literature reserves similar language for relation modules.  The item
  must state its convention explicitly.
- **Rank.**  Encyclopedia of Mathematics calls the cardinality of a free basis
  the rank.  Touikan also discusses “rank of a group” as the least size of a
  generating set and warns that this usage varies.  The scaffold defines only
  the rank of a free group admitting a finite free basis, after proving all such
  finite bases have the same size.  It does not define arbitrary group rank.
- **Normal-closure conjugates.**  Sources alternate between `c^{-1}rc` and
  `crc^{-1}`.  They describe the same set as `c` ranges over the group.  The
  item should choose one formula and explicitly note the equivalence.
- **Commutators.**  The library fixes `[g,h]=ghg^{-1}h^{-1}`.  Every new
  commutator relator follows that convention, even where a source uses its
  inverse.
- **Dihedral notation.**  `D_n` and `D_{2n}` are both used for the symmetry
  group of an `n`-gon.  The example defines `D_n` in its Statement as the group
  of order `2n`, realized on `Z/n`, and assumes `n>=3`.  The degenerate
  conventions at `n=1,2` are not silently folded into the family; the Klein
  four-group is handled separately.
- **Tietze moves.**  The classical four-move list and Touikan's three reversible
  move types plus inverses are equivalent packages.  The scaffold uses the
  latter because it makes inverse restrictions explicit.
- **Quotient seam.**  `def-quotient-group` cannot by itself construct
  `W(X)/~`, because raw words under concatenation form a monoid, not a group.
  The new quotient group theorem therefore proves the group laws directly.  It
  does reuse the general quotient-set definition and its well-definedness
  discipline.
- **Abelianisation seam.**  The definition uses the already published
  commutator subgroup, its normality lemma, and the quotient-abelian
  characterization.  It does not mint a second commutator convention or a
  second normal closure.

## 5. Component provenance, item by item

The existing entries retain their published provenance and are not retagged.
Expected values for every new mathematical-content item follow.  “Generated”
below is a positive determination of a directly checkable new corollary or
witness, not a failure to find literature.

### A-page items

| id | statement | proof | rationale |
|---|---|---|---|
| `prop-free-equivalence-is-an-equivalence-and-a-congruence` | `ai-altered` | `ai-generated` | semantic combination of Touikan's generated equivalence and well-defined concatenation; local sequence proof |
| `def-word-quotient-model-of-the-free-group` | `literature-derived` | `not-applicable` | Touikan §1.2 gives this construction |
| `thm-word-quotient-model-is-a-group` | `literature-derived` | `ai-generated` | standard sourced conclusion; proof is recast to expose literal associativity on classes |
| `lem-formal-letters-act-by-permutations-on-reduced-words` | `ai-altered` | `ai-altered` | isolated from Elman's van der Waerden construction |
| `thm-normal-form-for-the-word-quotient-model` | `literature-derived` | `ai-altered` | Touikan's unique normal form; proof adapted to the required van der Waerden route |
| `thm-word-quotient-model-is-free` | `literature-derived` | `ai-altered` | Touikan §1.3 and Elman §18; explicit representative-invariance proof |
| `cor-generators-embed-in-the-word-quotient` | `ai-generated` | `ai-generated` | direct corollary with one-letter normal-form witness; `generation.role: direct-corollary` |
| `cor-word-quotient-and-reduced-word-models-are-uniquely-isomorphic` | `ai-generated` | `ai-generated` | one application of the published uniqueness theorem; `generation.role: direct-corollary` |
| `def-free-basis` | `literature-derived` | `not-applicable` | Touikan §1.3 and EoM |
| `thm-finite-free-bases-have-the-same-cardinality` | `ai-altered` | `ai-generated` | finite specialization of Elman/EoM rank invariance; homomorphism-count proof developed locally |
| `def-rank-of-a-finite-rank-free-group` | `ai-altered` | `not-applicable` | sourced rank convention narrowed to what the preceding theorem licenses |
| `def-relators-relations-and-finite-presentations` | `ai-altered` | `not-applicable` | combines Johnson's exact distinction with EoM finiteness vocabulary and reconciles current usage |
| `prop-normal-closure-is-products-of-conjugates` | `literature-derived` | `ai-generated` | exact Touikan/Brittenham formula; subgroup/minimality proof written locally |
| `prop-equality-of-words-in-a-presentation` | `ai-altered` | `ai-generated` | standard quotient-coset criterion specialized to presentations |
| `thm-von-dyck` | `literature-derived` | `ai-altered` | Minasyan Theorem 2.2.1, with the quotient universal property already published |
| `cor-every-finite-group-is-finitely-presented` | `literature-derived` | `ai-altered` | Minasyan Proposition 2.3.2, multiplication-table proof |
| `def-abelianisation-of-a-group` | `literature-derived` | `not-applicable` | Elman/MIT and standard commutator quotient |
| `def-free-abelian-group` | `literature-derived` | `not-applicable` | Elman exercise and MIT Lemma 12.5 universal property |
| `thm-abelianisation-of-a-free-group-is-free-abelian` | `literature-derived` | `ai-altered` | Elman Proposition 18.4 proof route and MIT Lemma 12.5 |
| `def-tietze-transformations` | `literature-derived` | `not-applicable` | Touikan's three reversible move types |
| `prop-tietze-transformations-preserve-presented-groups` | `literature-derived` | `ai-generated` | source states the result as an exercise; mutual maps are supplied locally |
| `thm-tietze-transformations-connect-finite-presentations` | `literature-derived` | `ai-altered` | Touikan Theorem 1.6.2 and its common-intermediate hint |
| `def-cyclically-reduced-word` | `literature-derived` | `not-applicable` | Magnus–Karrass–Solitar convention |
| `lem-cyclic-reduction-normal-form` | `ai-altered` | `ai-altered` | standard cyclic peeling lemma, specialized to published word notation |
| `thm-free-groups-are-torsion-free` | `literature-derived` | `ai-altered` | standard theorem with cyclic-core proof |
| `thm-conjugacy-of-cyclically-reduced-words` | `literature-derived` | `ai-altered` | standard cyclic-permutation conjugacy theorem with a shortened-conjugator induction |

### B-page items

| id | statement | proof | rationale |
|---|---|---|---|
| `ex-free-group-on-the-empty-set` | `ai-altered` | `ai-generated` | standard rank-zero specialization; only the empty word exists |
| `ex-free-group-on-one-generator` | `literature-derived` | `ai-altered` | explicit in McKernan |
| `ex-free-group-on-two-generators-is-not-abelian` | `literature-derived` | `ai-altered` | explicit in McKernan; normal-form witness `xy != yx` |
| `ex-presentation-of-a-finite-cyclic-group` | `literature-derived` | `ai-altered` | McKernan's exact family; proof expanded through standard representatives |
| `ex-presentation-of-a-dihedral-group` | `literature-derived` | `ai-altered` | Minasyan's family, translated to rotation/reflection generators |
| `ex-presentation-of-the-klein-four-group` | `literature-derived` | `ai-altered` | Cameron/Yale presentation; four normal forms mapped to `C_2 x C_2` |
| `ex-presentation-of-z-squared` | `literature-derived` | `ai-altered` | Touikan exercise and McKernan free-abelian example |
| `ex-presentation-of-the-symmetric-group-on-three-letters` | `ai-altered` | `ai-altered` | `n=3` specialization of the EoM Coxeter presentation; six normal forms |
| `cex-delete-only-relator-rewriting-misses-ba` | `ai-generated` | `ai-generated` | owner-supplied explicit witness rechecked directly; `generation.role: counterexample` |
| `cex-delete-only-relator-rewriting-can-require-lengthening` | `ai-generated` | `ai-generated` | owner-supplied explicit witness rechecked directly; `generation.role: counterexample` |
| `cex-delete-only-relator-rewriting-is-order-dependent` | `ai-generated` | `ai-generated` | owner-supplied explicit witness rechecked directly; `generation.role: counterexample` |

No generated Statement is a dependency target.  The generated corollaries end
their branch, and each generated deletion witness is also a leaf.  The second
deletion witness cites the published definition of a presentation and derives
its identity claim directly from the defining relator; it does not cite the
earlier B-page example.

## 6. Proof decomposition and authoring obligations

The machine-readable proof contracts contain the step-by-step maps.  The
following is the conceptual decomposition that the step-5 author must preserve.

### Quotient and normal-form spine

- Equivalence: empty sequence for reflexivity, reverse a finite move sequence
  for symmetry, concatenate sequences for transitivity.  Congruence: prefix and
  suffix every elementary move, then combine the two changed factors.
- Quotient group: well-defined product from congruence; associativity from
  literal equality `(uv)w=u(vw)` of finite strings; empty word for identity;
  reverse-and-invert a word and cancel successively for both inverse equations.
- Van der Waerden lemma: for each formal letter `a`, define a map on reduced
  words by adjoining `a` and cancelling exactly when the seam is `a^{-1}a`.
  Check directly that the map for `a^{-1}` is its two-sided inverse.  A word
  acts by composing these permutations.  Inserting or deleting `aa^{-1}` does
  not change that permutation.
- Quotient normal form: cancel adjacent inverse pairs to obtain a reduced
  representative.  If reduced `r` and `s` are freely equivalent, their word
  permutations agree.  Apply both permutations to the empty word in the
  orientation fixed by the lemma; the result recovers `r` and `s`, so they are
  equal.  The orientation must be checked explicitly, not waved away.
- Universal property: extend `u(x^{-1})=u(x)^{-1}`, evaluate a word, show a
  single elementary move does not change evaluation, descend to classes, check
  multiplication, and force uniqueness by expressing every class as a product
  of one-letter classes.

### Rank

Let `C_2=Sym({0,1})`, explicitly enumerated as identity and transposition.  For
a finite free basis `B`, restriction and universal extension are inverse
bijections between `Hom(F,C_2)` and the function set `C_2^B`, so the number of
homomorphisms is `2^{|B|}`.  Two finite bases of the same group give
`2^{|B|}=2^{|C|}`.  Use the bridge in `def-nat-power` and strict monotonicity of
real powers with base `2>1` to conclude `|B|=|C|`.  This includes both empty
bases: the unique map from the empty set gives one homomorphism and `2^0=1`.

### Presentations

- Normal closure: call the displayed products `P`; include the empty product;
  prove `P` contains `R`, is closed under product and inverse, and is invariant
  under conjugation; then prove both inclusions using the minimality definition.
- Equality: with `N=<<R>>`, quotient cosets `uN` and `vN` are equal exactly when
  `u^{-1}v in N`.  Both directions of the iff are the published coset criterion.
- Von Dyck: freely extend the generator map to `F(X)`; each relator lies in the
  kernel; normality of the kernel puts `<<R>>` inside it; factor uniquely through
  the quotient.  Prove separately that the induced homomorphism is surjective
  exactly when the chosen images generate the target.
- Finite group: use symbols `x_g` for `g in G` and the finite multiplication-
  table relators `x_g x_h x_{gh}^{-1}`.  Von Dyck gives the map to `G`; in the
  presented group the multiplication relators reduce every nonempty product to
  one `x_g` and the identity symbol represents the identity, giving the inverse
  map and finiteness of both sets.

### Abelianisation

The quotient is abelian because it kills `[F,F]`.  A map from `X` to an abelian
group extends through the free group; its kernel contains every commutator, so
the quotient universal property supplies the extension from `F^{ab}`.  The
surjectivity of the quotient map and uniqueness in the free-group property force
uniqueness of the factor.  Check the empty generating set explicitly.

### Tietze

- Dictionary move: substitution gives mutually inverse homomorphisms.
- Redundant-relator move: equality/normal closure shows the two normal closures
  are identical; the inverse is permitted only when redundancy remains after
  deletion.
- Renaming: the generator bijection and its inverse extend to mutually inverse
  maps.
- Completeness: the forward implication iterates preservation.  For the reverse,
  choose, for each generator in each finite set, a representing word under the
  fixed isomorphism and its inverse.  Add finitely many dictionary generators,
  add the other finite relator set as consequences, pass through the standard
  presentation on `X union Y`, and remove redundant relators and dictionary
  generators in the reverse order.  Every deletion must name the remaining
  relators that make it legal.  Only finite witness choices occur; they can be
  made by finite induction and require no choice axiom.

### Cyclic reduction, torsion, and conjugacy

- Cyclic reduction peels inverse first/last letters from a non-cyclically-
  reduced word.  Length drops by two, so induction terminates at a nonempty
  cyclically reduced core; the peeled letters form `t` and the original literal
  word is `t c t^{-1}` with no hidden cancellation.
- For nontrivial `w=tct^{-1}`, the word `c^n` is reduced and nonempty for every
  positive `n`, because the last letter of `c` is not inverse to its first.
  Hence `w^n=t c^n t^{-1}` cannot represent the identity.  Transport this from
  the reduced-word model to any free group by the published unique isomorphism.
- For cyclically reduced `u,v`, a cyclic permutation is visibly conjugate:
  if `u=pq`, then `p^{-1}up=qp`.  Conversely use a reduced conjugator of minimal
  length.  If neither seam cancels, the reduced conjugate begins and ends with
  inverse letters and is not cyclically reduced.  A seam therefore cancels;
  peel the final conjugator letter, cyclically shift the core word, and apply
  induction to the shorter conjugator.  The empty word is conjugate only to
  itself.

### Concrete presentation examples

- Cyclic: division gives an `a^r` normal form with `0<=r<n`; its image in
  `Z/n` distinguishes the `n` forms.  At `n=1` there is only the identity.
- Dihedral: in the presented group `sr=r^{-1}s`, so every word has a normal form
  `r^i s^epsilon` with `0<=i<n` and `epsilon in {0,1}`.  Map to permutations of
  `Z/n` given by rotation `rho(k)=k+1` and reflection `sigma(k)=-k`.  The `2n`
  images are distinct for `n>=3`; the comparison of the values at `0` and `1`
  is where that boundary is spent.
- Klein four: commute the generators and reduce exponents modulo two to
  `e,a,b,ab`; their images in `(Z/2)^2` are distinct.
- `Z^2`: commute all `a` letters before all `b` letters, giving `a^m b^n`; the
  map to `(m,n)` is a two-sided inverse.
- `S_3`: with `s=(0 1)` and `t=(1 2)`, the relators hold.  An alternating word
  of length at least four shortens using `(st)^3=e`; the braid equality
  `sts=tst` identifies the two length-three forms.  The remaining six forms map
  to the six distinct permutations counted by the published theorem.

### Decomposition and corollary passes

The decomposition pass was performed.  The quotient construction, Tietze
theorem, presentation universal property, and cyclic/conjugacy argument were
split wherever a subclaim carries independent proof weight.  No cosmetic
microlemma was added.

The corollary pass was also performed.  It found generator injectivity, the
model-comparison isomorphism, finite-group finite presentability, and the free-
abelian abelianisation theorem.  I did not add further easy consequences because
they would be restatements or padding.

## 7. Boundary pass

- `X=empty`: the quotient contains only the empty-word class; the universal
  property gives the trivial group; generator injectivity is vacuous; rank is
  zero; free abelianisation is trivial.
- One generator: every reduced word is a pure positive or negative power; the
  one-generator example includes the identity exponent.
- Empty word and identity: all word actions fix the empty word appropriately;
  the normal form is the empty word; the conjugacy theorem treats it separately;
  torsion-freeness asserts only nonidentity elements.
- Empty `R`: the products-of-conjugates set contains the empty product only and
  is the trivial normal subgroup; equality reduces to free equality; Von Dyck
  reduces to the free universal property.
- Zero factors in a normal-closure product: the empty product is the identity.
- Empty finite basis: homomorphism count is `2^0=1`; the rank theorem still
  works.
- Cyclic presentation `n=1`: the group and `Z/1` are both trivial.  The family
  is deliberately stated for `n>=1` because the requested examples are the
  finite cyclic groups.  At `n=0`, the relator `a^0=e` imposes nothing and both
  `<a | a^0>` and `Z/0` are infinite cyclic; that true boundary is outside the
  finite family, not a counterexample to it.
- Dihedral parameters: the family is stated only for `n>=3`; the order-4 Klein
  case is separate.  This avoids both geometric degeneracy and notation drift.
- Tietze: empty generator and relator sets are allowed.  Inverse dictionary and
  relator deletions carry explicit side conditions.  Both directions of the
  finite-presentation iff are mapped.
- Equality in a presentation: both directions use exactly the left-coset
  criterion with `u^{-1}v`.
- Conjugacy: both directions are proved; the empty word and zero-length
  conjugator are base cases.
- Delete-only examples: the procedure allows relators and their inverses but no
  insertions.  Each stuck claim checks every eligible contiguous subword.

## 8. Dropped material and what would license it

The following are deliberately absent from the manifest.

- **Dehn's three decision problems as decision problems.**  Licensing requires
  an earlier formal development of encodings, computations, a machine or
  equivalent model, and the predicates “algorithm”, “decidable”, and
  “solvable”.
- **Novikov–Boone.**  Licensing requires that computability foundation plus the
  construction and reduction machinery used in an undecidability proof.
- **The finitely presented plus residually finite word-problem result.**
  Licensing requires a definition of residual finiteness, effective enumeration
  and computation machinery, and a theorem connecting the enumerations.  An
  external `proved_here:false` item would not repair the self-contained-scope
  defect.
- **Knuth–Bendix completion.**  Licensing requires formal rewriting systems,
  critical pairs, termination/confluence criteria, and computational semantics.
- **Todd–Coxeter enumeration.**  Licensing requires effective procedures and
  formal finite-table machinery with correctness and termination hypotheses.
- **Any unqualified claim that a word problem is solvable or decidable.**  The
  pair has no computability prerequisites.  The three retained examples concern
  only the explicitly defined delete-only syntactic operation.
- **Nielsen–Schreier.**  A proof would require a developed Nielsen-
  transformation method, Schreier transversals with their proof, or covering-
  space machinery.  None is available in the declared prerequisites.  I found
  no restricted form valuable enough to justify building that machinery in
  this pair.
- **Rank invariance for arbitrary infinite free bases.**  Counting maps to a
  two-element group gives equality of powers, which does not recover arbitrary
  infinite cardinalities in ZFC.  A clean proof needs free-abelian-module rank
  invariance or vector spaces over a finite field, together with arbitrary
  cardinal/basis machinery, all below a later reading-order frontier than this
  page.  The scaffold proves and defines finite rank only.

No valuable result in the requested deeper-structure list was otherwise
dropped: torsion-freeness, abelianisation, finite Tietze, and cyclic conjugacy
normal form all have closed proof maps.

## 9. Dependency, id, order, and source-honesty audit

I ran a fixed-string collision check for every proposed id across all of
`items/` and `research/plan-spec.json`; every id printed `clear`.  The exact
command used a shell variable containing the full id list and, for each id,
`rg -q --fixed-strings "$id" items research/plan-spec.json`.

I opened every direct published dependency proposed for a new item and checked
its full Statement or Definition and `status: published`.  In particular, I
checked the general equivalence relation/quotient-set definition; the group,
homomorphism, symmetric-group, subgroup, generated-subgroup, power and order
items; finite cardinality, function counting, natural trichotomy, natural
powers and strict power monotonicity, including the finite Cartesian-product rule; normal closure,
normal subgroup, quotient group, coset equality,
canonical projection and quotient universal property; kernels; commutators and
the abelian quotient criterion; integer division, standard residue
representatives and modular algebra; cyclic classification; external direct
products; the sum rule; the count of finite bijections; and the integer ring.

Every such dependency is on a page of order below 60, except the published
pre-plan foundations `lem-nat-trichotomy`, `thm-induction-principle`, and
`thm-int-comm-ring`; the induction principle is already cited by the current
theorem on the page whose order is 60.
All new same-page edges on the A page point backward in the appended order.  The B additions are leaves:
none is a dependency target and none cites another B item.  There are no
forward references and no cross-batch dependencies.

No `ai-generated` published Statement was introduced as a load-bearing target.
The current published dependencies used by the new spine have
`literature-derived` or `ai-altered` Statements.  The manifest does not cite the
getcurious article, does not cite a planned generated corollary, and does not
use an external fallback.

Because the deliverables are not yet spliced into `plan-spec.json`, the
authoritative `validate-plan` and `depsource` gates belong to the orchestrator.
The completed local checks are:

- both JSON files parse;
- the manifest contains 37 proposed ids, none colliding with `items/` or
  `plan-spec.json`;
- the proof-bearing-kind calculation yields exactly the 29 ids in `scope`, and
  every one has a structurally complete contract with all standard boundary
  dispositions;
- every one of the 45 contract quotations whose source is already published
  occurs in the named source section; the 19 quotations from planned earlier
  items are synchronized as step-5 authoring obligations;
- every dependency resolves to an earlier item on the A page, an A-page item
  from the B page, or a published lower-order/pre-plan item;
- `content-policy.mjs --manifest-only`, applied to the 37 proposed rows rather
  than the deliberately repeated published rows, reports zero errors and zero
  warnings; and
- `prosecheck.mjs` on the deliverables reports zero errors and zero warnings.
- `finite-smoke.mjs` reports zero errors; none of its currently registered
  finite-model check types applies to these group-presentation claims.

The strict proof-contract tool intentionally remains a step-5 gate: it compares
contracts with authored item prose, and those draft item files do not yet exist.

## 10. Recommendations for step-3 adjudication

1. **Approve the model-specific quotient normal-form theorem.**  It overlaps an
   internal result in the published reduced-word proof, but it is the only way
   to satisfy D6's explicit `W(X)/~` and van der Waerden requirements without
   rewriting a published item.  Declining it loses the mandated proof spine.
2. **Approve finite rank only.**  The finite-basis theorem is fully licensed by
   the homomorphism-count proof and covers ranks zero and one.  An unqualified
   infinite-rank definition at order 60 would be underproved.  Declining this
   narrowing either drops rank entirely or forces a prerequisite/reordering
   decision.
3. **Approve the relator/relation reconciliation rather than changing
   `def-group-presentation`.**  The published definition's loose terminology is
   common, while Johnson's sharper distinction is useful.  Declining the new
   vocabulary item leaves all requested finiteness vocabulary absent.
4. **Approve the three-move reversible Tietze convention.**  It is source-
   backed and equivalent to the four elementary moves often listed.  Declining
   it requires selecting a different convention before step 5, because the
   preservation and completeness contracts depend on the move definitions.
5. **Approve `D_n` to mean the symmetry group of an `n`-gon of order `2n`, with
   `n>=3`.**  The Statement makes the convention explicit and handles the
   degenerate Klein case separately.  If the owner prefers `D_{2n}`, only the
   title and notation should change; the proof contract does not.

## 11. Confidence and continuity checkpoint

Confidence is high on the quotient, presentation, normal-closure,
abelianisation, concrete-presentation, torsion, and deletion-witness proof maps.
The most proof-sensitive planned result is the reverse direction of the finite
Tietze theorem; its contract records the common-intermediate construction and
the legality condition for every inverse move.  The conjugacy theorem is the
next most sensitive; its contract forces induction on a shortened conjugator
and handles the no-cancellation contradiction explicitly.

I did not verify any computational or decision-problem claim, because D2 makes
those claims out of scope.  I did not verify Nielsen–Schreier.  I verified the
three deletion witnesses by hand, not by treating a rewriting program as a
mathematical oracle.

**Completion checkpoint (Beta, after context compaction).**  I completed the
prescribed reading, the full pair/item overlap audit, the whole-pool id and
vocabulary search, source research, the direct published-dependency audit, all
three namespaced deliverables, and the local gates recorded in §9.  Disk state
was rechecked after the final dependency repair.  The manifest contains the
unchanged published positions followed by the proposed items; no page, item, or
plan-spec file was changed.
