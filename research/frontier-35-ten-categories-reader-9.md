# Step 5a Reader Report — batch 9

Run: `frontier-35-ten-categories`  
Role: independent reader  
Current run status checked: active, stage `5a-read`; no stage completion or judge record was written.

## Opened inventory

Opened the batch manifest `research/frontier-35-ten-categories-batch-9.pages.json`, then all four assigned page carriers:

- A — `library/representation-theory/projective-extensions-and-the-little-group-method.md`
- B — `library/representation-theory/projective-extensions-and-the-little-group-method-examples.md`
- A — `library/representation-theory/monomial-characters-and-m-groups.md`
- B — `library/representation-theory/monomial-characters-and-m-groups-examples.md`

Opened all 30 manifest-listed item files:

- Projective extensions A: `def-projective-representation-and-factor-set`; `lem-factor-set-is-a-normalized-two-cocycle`; `lem-rephasing-changes-the-factor-set-by-a-coboundary`; `def-twisted-group-algebra-for-a-factor-set`; `lem-projective-representations-are-twisted-group-algebra-modules`; `lem-invariant-irrep-produces-a-projective-inertia-extension`; `def-clifford-obstruction-class`; `thm-extension-exists-iff-the-clifford-obstruction-vanishes`; `lem-cocycle-central-extension-is-a-group`; `lem-central-extension-linearizes-a-projective-representation`; `thm-projective-clifford-correspondence`; `thm-little-group-method-for-a-split-abelian-normal-subgroup`.
- Projective examples B: `ex-q8-as-a-central-extension-of-c2-times-c2`; `cex-invariant-character-need-not-extend-linearly`; `ex-little-groups-for-a-finite-dihedral-group`; `ex-coboundary-rephasing-of-a-projective-representation`.
- Monomial characters A: `def-monomial-representation-and-m-group`; `lem-monomial-representation-has-a-monomial-matrix-model`; `lem-faithful-irrep-with-a-noncentral-abelian-normal-subgroup-is-properly-induced`; `lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup`; `lem-induction-commutes-with-inflation`; `thm-supersolvable-groups-are-m-groups`; `thm-monomial-induction-for-virtual-characters`; `lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup`; `cor-m-groups-are-solvable`; `rem-m-group-converses-and-boundary`.
- Monomial examples B: `ex-dihedral-groups-are-m-groups`; `ex-unitriangular-group-of-order-p-cubed-is-an-m-group`; `cex-solvable-group-need-not-be-an-m-group`; `ex-one-dimensional-and-trivial-monomial-boundaries`.

Opened dependency statements needed for the projective Clifford arguments, twisted-algebra semisimplicity, induction conventions, Clifford/Gallagher correspondences, supersolvability, Brauer induction, Taketa's theorem, induced-kernel computation, and the explicit quaternion, Heisenberg, and dihedral computations. This included `def-normalized-two-cocycle-and-two-coboundary`, `def-second-cohomology-by-factor-sets`, `def-conjugate-representation-and-inertia-group`, `def-conjugate-representation-and-conjugate-character`, `def-extension-of-an-irreducible-normal-subgroup-representation`, `lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces`, `thm-clifford-correspondence`, `thm-clifford-homogeneous-restriction-formula`, `lem-inducing-an-irreducible-inertia-module-is-irreducible`, `lem-induction-from-the-inertia-group-recovers-the-module`, `thm-gallagher-correspondence-for-an-extendible-character`, the covariant-function induction definition and left-transversal decomposition proposition, the finite-dimensional representation and irreducibility definitions, and the finite-length semisimplicity characterization. For the monomial arguments I opened the supersolvable and p-elementary definitions, subgroup closure and supersolvability results, induction-ideal definitions/results, elementary-detection lemma, and induction transitivity result. I also opened the quaternion and Heisenberg definitions/results, the dihedral semidirect-product result, roots-of-unity and finite-field facts, the regular-character degree-sum formula, and induced-dimension result. The complete proofs of `lem-elementary-detection-at-a-fixed-element`, `lem-p-primary-character-value-congruence`, and `lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup` were read.

## Source checks

- Britta Späth, *Reduction theorems for some global-local conjectures*: Definition 1.4 and Remark 1.5 (factor sets, rephasing, twisted algebra), Definition 1.7 and Lemma 1.8 (associated projective inertia operators and their quotient factor set), Proposition 1.11/Theorem 1.12/Corollary 1.13 (cocycle central extensions and corresponding character sets), and Theorem 1.15 (projective Clifford correspondence), PDF [pp. 2–6](https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf).
- Tammo tom Dieck, *Representation Theory*: §§4.2.5–4.2.7, §§4.3.1–4.3.4, and §§4.6.2–4.6.5, printed [pp. 56–58 and 63–64](https://www.uni-math.gwdg.de/tammo/d01.pdf). These state the Clifford/little-group results, the supersolvable M-group theorem and its preparation, and monomial induction.
- Wen-Wei Li, *Yanqi Lake Lectures on Algebra I*: Lemma 12.5.2 and Theorem 12.5.6, printed [pp. 146–148](https://www.wwli.asia/downloads/YAlg1.pdf); Theorem 14.3.1 and Corollary 14.3.2, printed [pp. 162–163](https://www.wwli.asia/downloads/YAlg1.pdf). The latter explicitly gives integral combinations of monomial characters induced from p-elementary subgroups.
- SLMath, *Character Theory of Finite Groups*, Chapter 9: the induced-kernel lemma and Taketa argument, PDF [pp. 387–403](https://www.slmath.org/ckeditor_assets/attachments/500/characters.pdf).
- Paul Garrett, *Heisenberg groups over finite fields*, §2, PDF [pp. 1–3](https://www-users.cse.umn.edu/~garrett/m/repns/notes_2014-15/05_finite_heisenberg_ssw.pdf). The displayed classification there assumes the field has odd cardinality; the assigned `UT_3(F_p)` example proves its p=2 case directly and its elementary computation covers every prime.
- János Kramár, *Artin's and Brauer's Theorems on Induced Characters*: Lemma 4 (PDF p. 4) and Lemma 5 (PDF pp. 5–6), [source](https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf). These match the p-primary congruence and p-elementary detection statements used by the virtual-character theorem.

## Page verdicts

1. `projective-extensions-and-the-little-group-method` (A): sound after the title repair below. The proof contracts and statements consistently use the normalized multiplicative cocycle convention; the obstruction criterion, inverse multiplier in the multiplicity space, split abelian little-group construction, and degenerate cases check out.
2. `projective-extensions-and-the-little-group-method-examples` (B): sound. The Q8 cocycle table gives a nonsymmetric factor set on the abelian quotient, so it cannot be a coboundary; the central extension, nonextension example, dihedral orbit count, and C2 rephasing calculations check out.
3. `monomial-characters-and-m-groups` (A): sound. The supersolvable induction proof, distinction between virtual induction and the M-group property, induced-kernel lemma use, and Taketa conclusion preserve their hypotheses and conclusions.
4. `monomial-characters-and-m-groups-examples` (B): sound. The dihedral cases include n=1,2; the UT3 orbit and degree count works also at p=2; and the binary tetrahedral witness has the stated order, solvability, irreducible degree-two representation, and absence of index-two subgroups.

## Edit and validation

- In `items/thm-projective-clifford-correspondence.md`, changed the title from “The Clifford correspondence for a type whose obstruction is nontrivial” to “The projective Clifford correspondence for an invariant irreducible representation.” The statement and proof apply to every invariant irreducible type; they explicitly include both `I=N` and trivializable obstruction cases, so the old title did not accurately describe the theorem's scope.
- Synchronized the same title in the assigned batch-9 item contract in `research/frontier-35-ten-categories-batch-9.pages.json`. The statement contract and proof were unchanged. The item had no `verification.judge` record to remove.
- Ran `node tools/tsx-run.mjs tools/reflow.mts items/thm-projective-clifford-correspondence.md`: unchanged. Ran `node tools/tsx-run.mjs tools/precheck.mts items/thm-projective-clifford-correspondence.md` after reflow: PASS (direct).
- No other files were edited.

## Uneditable defects and blockers

None found. No proposed withdrawal was identified. No blocker remains for this reader pass.

## Coverage limitation

All four assigned pages and all 30 assigned items were opened. I did not independently audit the complete proofs of every transitive background dependency outside batch 9; for routine group, ring, and character-theory facts I checked the needed dependency statements or closed the step by elementary derivation. The Garrett citation is qualified as noted above; the p=2 claim rests on the assigned item's direct proof, not on Garrett's odd-field argument.
