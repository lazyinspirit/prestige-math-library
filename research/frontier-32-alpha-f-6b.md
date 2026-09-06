# Frontier 32 — group f Step 6b adjudication

Run: `frontier-32`  
Role: group Alpha  
Owned batches: 9, 11, 12

## Outcome

Group f closes all 94 routed obligations: 15 `accepted_repair`, 5
`amended_repair`, 72 `confirmed_fatal`, and 2 `confirmed_nonfatal`. The exact
obligation-to-verdict and unique defect-row mapping is in
`research/frontier-32-alpha-f-6b-decisions.json`. All 94 corresponding rows
were appended through `tools/defect-ledger.mjs`; none remains open.

The Step-5 completion claim in `research/frontier-32-batch-9.notes.md` was
stale evidence, not a verdict. All 67 proof-bearing batch-9 carriers still
contained strategy scaffolds when adjudication began, and the examples page
still described mathematical tests that its items did not perform. The 68
refuter findings are therefore confirmed fatal. Every carrier now has an
explicit quantified claim and a tagged proof or verification, and the two page
summaries describe the live content.

## Batch 9

The three reader-authored definitions are accepted. The A-page repair is
amended because Alpha completed the mathematical development after the reader
accurately marked it unfinished. The 67 item findings and one examples-page
finding are confirmed fatal and repaired.

The repaired chain now includes:

- the `IM=M` and zero-module depth convention, finite associated-prime and
  prime-avoidance criteria, maximal regular sequences, and Ext
  characterization;
- radical invariance, regular quotients, the powered-quotient associated-prime
  construction, and localization;
- all three Depth Lemma inequalities and their strict-depth equalities;
- the Koszul first-cohomology/last-homology characterization and the support
  dimension bound;
- Cohen--Macaulay regular quotients, associated-prime unmixedness, parameter
  systems, localization, polynomial extension, completion, and flat-local
  depth additivity; and
- thirteen explicit examples, including the non-Cohen--Macaulay ring
  $k\llbracket x,y\rrbracket/(x^2,xy)$, the Cohen--Macaulay hypersurface
  $k\llbracket x,y\rrbracket/(xy)$, a nonfree maximal Cohen--Macaulay module,
  the union of two coordinate planes, sharp Depth Lemma sequences, parameter
  success and failure, and completion.

Alpha found and repaired two additional mathematical gaps while checking the
routed scaffolds. First, the regular-element existence biconditional requires
$IM\ne M$ under this repository's definition, because a regular sequence must
leave a nonzero quotient. Second, the Artin--Rees quotient proof now uses
$(\mathfrak p,x^n)\subseteq\operatorname{ann}(L)\subseteq(\mathfrak p,x)$;
the common radical is what makes every prime minimal over
$\mathfrak p+(x)$ associated to the powered quotient. The Koszul proof also
records its depth-zero associated element, null-homotopic generator
adjoining, regular-element shift, and self-dual index reversal.

The checked source interfaces were Stacks, Algebra §10.72 for depth, Ext, the
Depth Lemma, quotients, associated primes, and localization; §10.103 for
Cohen--Macaulay modules and parameter systems; §10.163 for flat-local depth;
and the current published dependencies for regular sequences, associated
primes, finite prime avoidance, Artin--Rees, parameters, completion, Ext, and
Koszul complexes. Completion statements retain the choice convention of
`thm-completion-preserves-dimension-and-hilbert-samuel-data`.

## Batch 11

All five touched A carriers are accepted. The topology finding is confirmed
nonfatal in both its reader and refuter obligations: the old diagonal-point
argument showed only empty interior, while the current proof fixes an infinite
field and shows that every cofinite basic neighbourhood of an off-diagonal
point meets the diagonal. The incidence endpoint finding is confirmed fatal in
both obligations: for $n=0$, $a_0x_0\ne0$, so the incidence locus and both
fibres are empty, not one point.

The product, Segre, Plücker, Grassmannian, and incidence claims were checked
against Milne Proposition 5.20 and Proposition 6.29 and MIT 18.725 Lecture 7,
including nonempty pivots and the $r=0,n$ and $n=0$ endpoints.

## Batch 12

Five reader repairs and both page repairs are accepted. Four touched carriers
are amended because their live carriers also contain Alpha's required risk
review or mathematical repair:
`cex-finite-type-not-finite-presentation-nonnoetherian-base`,
`ex-scheme-theoretic-image-dense-open-immersion`,
`thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`,
and `thm-scheme-theoretic-image-quasi-compact-morphism`.

Both refuter findings are confirmed fatal. Milne Definition 5.2 requires a
classical prevariety to be quasi-compact; the live definition now says this is
equivalent to a finite affine-algebraic cover. The comparison theorem now uses
that finite cover to obtain a finite-type scheme and, conversely, uses
quasi-compactness of a finite-type scheme to choose a finite affine cover.
This excludes the refuter's non-quasi-compact directed-union example and makes
the categorical equivalence well formed.

The reduction and scheme-theoretic-image arguments were checked against Stacks
tags 01J3 and 01R5, including nilpotent germs versus globally nilpotent
sections, the empty inverse image, finite affine subcovers, localization of the
kernel on principal opens, minimality, arbitrary-open restriction, and the
dense open immersion without a quasi-compactness assumption. The finite-type
counterexample now uses the explicit non-Noetherian ring
$k[x_1,x_2,\ldots]$ and the non-finitely-generated ideal
$(x_1,x_2,\ldots)$.

## Risk review

Batch 11 has no HIGH or CRITICAL contract. Batch 9 has thirteen HIGH and two
CRITICAL contracts after the repaired claims are analyzed; batch 12 has five
HIGH contracts. Every one has a specific
`risk_review: {status: complete, reviewer: group-alpha-f, notes: ...}` entry
describing the actual mathematical risk and its resolution. The final
`--require-reviewed` reports are clean for all three batches.

## Validation

- Reflow and focused precheck: 69 proof-bearing repaired items checked, zero
  failures; the definitions and incidence prose are non-proof carriers.
- Rendercheck: 71 repaired item carriers and four owned page carriers checked
  with real KaTeX and renderer YAML, zero errors.
- Strict proof contracts: batch 9, 67/67; batch 11, 19/19; batch 12, 16/16;
  zero errors and warnings.
- Content policy: 70, 33, and 80 scoped items respectively; zero errors and
  warnings.
- Manifest dependencies: 70, 33, and 80 items respectively; zero errors and
  zero normalizations.
- Risk report with `--require-reviewed`: 67, 19, and 16 proof carriers;
  zero errors.
- `step6-scope.mjs check --phase adjudicate --batch 9`, `--batch 11`, and
  `--batch 12`: 72, 9, and 13 obligations; zero errors.
- `git diff --check`: pass.

No mathematical, citation, ownership, or gate blocker remains in group f.

## Gate repair cycle 1 — `step6-routing-adjudicate`

Reread the seven live group-f items across batches 11 and 12, their scheme and
classical-variety conventions, direct dependencies, reader/refuter evidence,
frozen carriers, and later retry records. Six current items and all seven
manifest rows retain their reader repairs while `contract-audit-8` changed the
six proof-contract components. The affine-overlap definition instead changed
only when rendercheck repair 3 normalized the repaired tensor-product display;
its map and mathematical meaning are unchanged. All seven touched decisions
are now `amended_repair`, with seven `route: gate` supplemental decisions and
matching rows in `frontier-32-alpha-f-6b-gate-ledger-rows.json`. No new
mathematical defect was found.

The full primary gate now reports 717 routed items, 359 adjudication
obligations, and zero errors. Run-wide defect-ledger validation checks 394
`frontier-32` rows with zero errors.
