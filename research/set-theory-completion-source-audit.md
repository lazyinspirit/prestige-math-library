# Set theory completion: four-researcher source audit

Date: 2026-09-07. Four independent `gpt-5.6-terra` researchers at high
reasoning inspected the published Foundations pages, all 22 items on
`deferred-set-theory-beyond-choice`, and authoritative web sources. They made
no corpus edits. This file preserves their actionable reports for the prose
scaffold and future Step-1 source work.

This is not a claim that every linked text has already been harvested into a
future run. It records endpoints verified during planning. The normal full-text
fetch, source-backing, citation-fidelity and liveness gates still apply.

## Sweep A: comprehensive curriculum and foundations gap

### Findings

The published category has a strong undergraduate spine: ZF axioms and set
operations, functions and quotients, naturals, Zorn/AC, ultrafilters, ordinals,
Mostowski collapse, Hartogs, ordinal arithmetic/CNF, alephs/beths, cofinality,
Hessenberg, Tarski and König. The missing graduate core is:

1. coded first-order syntax, satisfaction, derivations, completeness,
   Löwenheim--Skolem, incompleteness and undefinability of truth;
2. well-founded recursion, transitive closure, rank, `V_alpha`, `H_kappa`,
   reflection and absoluteness;
3. the weak-choice spectrum (`AC_omega`, DC, DMC, BPI) with separations;
4. club/stationary sets, Fodor, trees, Delta systems and partition principles;
5. constructibility, forcing and symmetric extensions;
6. descriptive sets/regularity, large cardinals, proper forcing, PCF and
   continuum combinatorics.

The critical metatheoretic warning is that a forcing development over a
countable transitive model does not by itself prove the advertised
`Con(T) -> Con(T+phi)` result. The semantic teaching theorem and the
finite-fragment/syntactic consistency transfer must both be built.

### Verified sources

- [J. Donald Monk, *Lectures on Set Theory*](https://euclid.colorado.edu/~monkd/setth.pdf),
  complete 606-page university text. Its contents independently support the
  full spine: logic, elementary set theory, Boolean forcing, models and CH,
  linear orders/trees/stationary sets, MA, large cardinals, `L`, iterated and
  proper forcing, PCF, `P(omega)/fin`, and continuum consistency results.
- [Andrew Marks, *Set Theory* lecture notes](https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf),
  full university notes for NBG/conservativity, models and absoluteness,
  reflection, `L`, condensation/GCH, forcing and not-CH.
- [UCI Math 281A set theory](https://www.math.uci.edu/~twilson/281A/index.html),
  curriculum cross-check for cardinal arithmetic, rank and `V_alpha`,
  well-founded relations, models, soundness/completeness/incompleteness,
  compactness, Löwenheim--Skolem and truth.
- [Assaf Shani, forcing notes](https://people.math.harvard.edu/~shani/Teaching/145/145B-Notes.pdf),
  models/satisfaction, Lévy hierarchy and absoluteness, names, forcing theorem
  and symmetric models.
- [Rutgers graduate set theory course](https://sites.math.rutgers.edu/~ds2005/Axiomatic%20Set%20Theory-S23),
  verified course sequence from ordinals/cardinals through `L`, Cohen and Levy
  forcing, Prikry forcing, iterations, MA and the Suslin hypothesis.

## Sweep B: constructibility, forcing, CH, MA, and Suslin

### Exact target routes

- Gödel: syntax/relativization -> `Def(X)` -> `L_alpha` -> ZF axiom
  verification -> canonical well-order/AC -> condensation and level-counting/
  GCH -> formal `Con(ZF) -> Con(ZFC+GCH)` transfer.
- Cohen and CH: names/forcing relation/truth -> ccc via Delta systems ->
  preservation -> `Fn(omega_2 x omega,2)` adds `omega_2` distinct reals ->
  nice-name counting under ground GCH -> continuum `aleph_2` -> formal
  relative consistency. AC failure additionally requires symmetry.
- Sierpiński: use the choice-free arbitrary-set formulation of GCH. The aleph
  equation is not a substitute before choice. Hartogs and the local GCH
  comparison for a set and its power sets yield well-orderability.
- MA: Rasiowa--Sikorski -> two-step and finite-support iterations -> ccc
  preservation -> nice-name bookkeeping -> `omega_2` iteration -> MA+not-CH
  and the recorded category/measure/cardinal/ccc consequences.
- Suslin: build trees, lines and algebras and prove Kurepa equivalences; prove
  `MA_aleph1` kills a Suslin tree; prove diamond builds one; give both forcing
  consistency directions and the ccc-square consequence.

### Verified primary and university sources

- [Gödel 1938](https://pmc.ncbi.nlm.nih.gov/articles/PMC1077160/).
- [Cohen 1963](https://pmc.ncbi.nlm.nih.gov/articles/PMC221287/) and
  [Cohen 1964](https://pmc.ncbi.nlm.nih.gov/articles/PMC300611/).
- [Sierpiński 1947, EuDML](https://eudml.org/doc/213113), with the formalized
  local-GCH analysis in
  [Kirst--Rech](https://cicm-conference.org/2015/fm4m/FMM_2015_paper_4.pdf).
- [Itay Neeman, UCLA forcing notes](https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf),
  for forcing, reflection/compactness formalization, CTM caveats and
  preservation.
- [Solovay--Tennenbaum 1971](https://annals.math.princeton.edu/1971/94-2/p01)
  and [iteration notes](https://sites.math.unt.edu/~moliver/fa04s/JacksonNotes/iteration.pdf).
- [Tennenbaum 1968](https://pmc.ncbi.nlm.nih.gov/articles/PMC286001/) and
  [Krueger's Suslin tutorial](https://sites.math.unt.edu/~jkrueger/Krueger_YSTW.pdf).

### Graph cautions

The direct theorem GCH implies AC is not proof-dependent on CH independence.
The `L`/diamond route to a Suslin tree is not proof-dependent on MA. Existing
remark dependencies are narrative edges and must not be copied into the proof
graph.

## Sweep C: permutation and symmetric models

### Exact target routes

- Cohen first model: force `Fn(omega x omega,2)`, form the set of generic
  reals, and use finite index support to exclude an injection from omega while
  separately proving the set infinite.
- Fraenkel socks: in ZFA use atoms partitioned into pairs and finite supports;
  an unsupported swap defeats a choice function. Then prove the Jech--Sochor
  embedding theorem for the bounded statement, or build the direct atom-free
  analogue.
- Feferman--Levy: use bounded initial-stage supports in the symmetric collapse,
  show every symmetric real lies in a countable layer, identify the new
  `omega_1` with ground `aleph_omega`, and compute cofinality omega.
- Halpern--Lévy: the historical proof that BPI holds in the basic Cohen model
  uses Halpern--Läuchli. Repický supplies a shorter modern proof, but it still
  needs the Cohen HOD/symmetry framework and a nontrivial continuity lemma.
- Solovay: collapse an inaccessible, form HOD from countable ordinal sequences,
  verify ZF+DC, then prove measurability, Baire and perfect-set regularity by
  factorization/homogeneity.
- Shelah: sweet ccc forcings, amalgamation and a CH-length iteration yield the
  Baire-property model. The recovered safe lower bound is that measurability of
  all `Sigma^1_3` sets makes `omega_1` inaccessible in `L`.
- Gitik: proper-class forcing from arbitrarily large strongly compact
  cardinals, an intermediate ZF-minus-Power-Set model with Collection, then a
  symmetric submodel with full ZF axiom verification. The strong conclusion is
  that every limit ordinal has cofinality omega.

### Fatal published-description correction

`items/rem-feferman-no-free-ultrafilter-in-zf.md` says a finite-coordinate bit
flip changes a Cohen real on a cofinite set and forces an ultrafilter to contain
both. That is not Feferman's proof and is not a contradiction: a free
ultrafilter is invariant under finite modification. Feferman's Theorem 4.12
uses a definability model and, after isolating finitely many parameters, changes
a tail essentially to its complement modulo finite.

This scaffold-only task does not edit the published item. SET-20 is blocked
from authoring until the correct proof replaces that explanation through the
normal published-content workflow.

### Verified sources

- [Jech, *The Axiom of Choice*, full text](https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf):
  second Fraenkel model, Jech--Sochor, Cohen models and Feferman--Levy.
- [Feferman, primary full text](http://matwbn.icm.edu.pl/ksiazki/fm/fm56/fm56129.pdf),
  Theorem 4.12, pp. 342--343.
- [Repický, BPI in the first Cohen model](https://im.saske.sk/~repicky/-r30.pdf).
- [detailed Blass-model exposition](https://www.impan.pl/shop/publication/transaction/download/product/91097):
  finite-modification classes and the parameter-HOD construction.
- [Solovay, Annals record](https://annals.math.princeton.edu/1970/92-1/p01)
  and [Unger proof account](https://www.math.toronto.edu/sunger/solovay-model.pdf).
- [Shelah 1984, author-hosted primary PDF](https://shelah.logic.at/files/95333/176.pdf),
  especially §§5.1 and 7.14--7.17.
- [Gitik bibliographic record](https://cris.tau.ac.il/en/publications/all-uncountable-cardinals-can-be-singular/)
  and [open detailed thesis reconstruction](https://repositum.tuwien.at/handle/20.500.12708/5394?mode=full).

### Additional citation repairs before authoring

The Solovay and Blass remarks currently lean on Wikipedia for central claims;
replace that backing with the primary/open sources above. Do not identify
Solovay's HOD model with `L(R)`. Do not strengthen Shelah's recovered
`omega_1`-in-`L` result to every `L[r]` without another source.

The constructibility remark's phrase that Gödel II makes the consistency
antecedent impossible to discharge “here or anywhere” is too strong. The
correct internal limitation is self-consistency: stronger metatheories can
prove `Con(ZF)`. SET-3 must supply the exact hypotheses of the second
incompleteness theorem before that remark is amended.

## Sweep D: weak choice and set-theoretic topology

### Baire, Urysohn, Stone and Tychonoff

- Complete-metric BCT is equivalent to DC over ZF; the forward proof uses
  nested balls and the converse is Blair's. Separable complete BCT is a ZF
  theorem when a specified dense sequence supplies least coded choices.
- Compact-Hausdorff BCT is equivalent to DMC. Do not conflate this with the
  statement that arbitrary products of compact Hausdorff spaces are Baire,
  which has different strength.
- Urysohn fails in ZF, in ZF+`AC_omega`, and in a BPI model. DC and DMC each
  suffice. The `AC_omega` proof must include Tachtsis's erratum.
- Stone's metric paracompactness theorem follows from AC, but fails in a model
  of ZF+DC and in a BPI model. Its exact relation to AC remains open; multiple
  choice is not an intermediate ZF principle because MC is equivalent to AC in
  ZF.
- Schechter identifies Kelley's error: in the cofinite topology the original
  `X_i` is not closed. Isolating the added point repairs the AC proof. Compact
  Hausdorff product compactness is BPI; compact `T_1` product compactness is AC.

### NMSC, L/S spaces, and Dowker spaces

- NMSC fails under CH and under MA+not-CH; PMEA implies it; a strongly compact
  gives the classical upper consistency bound; NMSC yields an inner model with
  a measurable cardinal.
- Moore's ZFC L-space proof requires C-sequences, minimal walks, coherent
  finite-to-one maps and oscillation. PFA rules out S-spaces and is consistent
  relative to a supercompact; CH supplies S-spaces.
- Prove Dowker's product characterization, then the Rudin, Balogh and
  Kojman--Shelah ZFC examples separately. The last requires PCF scales.
- The existence of a ZFC Dowker space of size `aleph_1` is a volatile research-
  status statement, not a theorem. Cruz Chapital's 21 April 2025 preprint, §9
  p.25, explicitly calls it open; Step 1 must still refresh the search before
  publishing a present-tense status.

### Unresolved source claim

The deferred Baire remark says DMC is strictly weaker than DC in ZF. The
accessible Fossy--Morillon abstract says whether DMC implies DC was open; a
later Tachtsis slide asserts strictness, but this sweep did not recover the
primary proof. The clause is retained as an explicit source blocker. It must be
proved/sourced or corrected through the fatal-defect workflow, not silently
dropped.

### Verified sources

- [Fossy--Morillon, compact Hausdorff Baire and DMC](https://londmathsoc.onlinelibrary.wiley.com/doi/abs/10.1112/S0024610798005675).
- [Herrlich--Keremedis on products](https://dml.cz/bitstream/handle/10338.dmlcz/119129/CommentatMathUnivCarolRetro_40-1999-4_13.pdf).
- Tachtsis [paper](https://doi.org/10.1090/proc/14590) and
  [erratum](https://doi.org/10.1090/proc/14848).
- [Good--Tree--Watson, Stone under DC](https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf).
- [Corson 2020](https://arxiv.org/abs/2001.06513).
- [Schechter, cofinite products](https://eudml.org/doc/282783) and
  [Kelley original](https://www.impan.pl/en/publishing-house/journals-and-series/fundamenta-mathematicae/all/37/0/93762/en/publishing-house/journals-and-series/fundamenta-mathematicae/all/37).
- [Fleissner, open primary NMSC paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC345971/).
- [Moore, primary L-space PDF](https://pi.math.cornell.edu/~justin/Ftp/Lspace.pdf).
- [Dowker 1951](https://doi.org/10.4153/cjm-1951-026-2).
- [Kojman--Shelah PCF Dowker preprint](https://arxiv.org/abs/math/9512202).
- [Rinot--Shalev--Todorčević, small Dowker hypotheses](https://arxiv.org/abs/2209.10504).
- [Cruz Chapital, 2025 current-status source, §9](https://arxiv.org/pdf/2504.15398).

## Planning dispositions

1. SET-20 carries the Feferman/Blass source correction gate.
2. SET-22 carries the DMC/DC source blocker and both genuine open implication
   records.
3. SET-25 and SET-26 carry exact-source strength restrictions for Shelah and
   Gitik.
4. SET-30 carries a mandatory current-status refresh for the `aleph_1` Dowker
   problem.
5. The clause-level ledger in `plan-set-theory-completion-track.md` is the
   exhaustive completion criterion; item count or page publication alone is
   never enough.
6. SET-2 proves completeness/compactness only for the countable language needed
   by set theory; SET-7 owns arbitrary-language compactness and its BPI cost.
7. SET-9 defines diamond and proves diamond gives a Suslin tree; only SET-12,
   after constructibility, proves `V=L -> diamond`.
8. SET-27 depends on SET-23 before using Laver preparation, supercompactness or
   the relative consistency of PFA. SET-7, SET-10, SET-16, SET-28 and SET-29
   also carry the published topology/measure prerequisites their promised
   proofs actually use.
