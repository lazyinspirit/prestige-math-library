# frontier-13 — Step 8: Alpha adjudication of the paired-judge rejections

Lead Alpha, sole adjudicator (owner, 2026-07-31). Fatal-only under R1 (owner,
2026-08-03). Every rejection was adjudicated from disk: the item was opened, and
so was every dependency the judge named.

## Counts

308 rejection rows over 218 items — 90 items rejected by both lanes (180 rows)
and 128 by one lane. All 308 have a ledger row in
`research/frontier-13-judge-adjudications.jsonl`.

| outcome | rows | gpt-5.6-terra | deepseek-v4-pro |
|---|---:|---:|---:|
| `confirmed_fatal` | 20 | 8 | 12 |
| `confirmed_nonfatal` | 287 | 165 | 122 |
| `false_positive` | 1 | 0 | 1 |

By defect type — all rows: `dependency_citation` 237, `other` 39, `logic` 32.
Fatal rows only: `dependency_citation` 9, `other` 9, `logic` 2.

**Conversion.** 13 of 218 items carried a real fatal defect — **6.0%**, or 6.5%
of rows. The agreed rejections converted far better than the splits:

| | items | fatal | rate |
|---|---:|---:|---:|
| both lanes rejected | 90 | 9 | **10.0%** |
| one lane rejected | 128 | 4 | 3.1% |

That is a higher rate than this project's measured 2.7%, and it is worth
flagging rather than explaining away: the excess is concentrated in two places —
the regularity page, where three of the four most serious defects live, and
worked examples, whose `ai-generated` statements produced the two false
enumeration/interpretation claims. Both are places step 6 had already found and
repaired defects of exactly the same kind.

The agreement signal held up. Both-rejected items were three times likelier to
carry a real defect, and the two lanes were not redundant: deepseek supplied 12
of the 20 fatal rows, including all three regularity findings and the false
remark, while terra supplied the two false-citation findings in number theory.
The single false positive was deepseek's.

## The 13 items repaired

Each entry names the defect, then the change.

### False as written — a claim the reader would carry away wrong

1. **`prop-carmichael-function-as-maximal-order`** (both) — `[L4]` read "For
   $a,b\in\mathbb Z$, $\operatorname{lcm}(a,b)$ is the least positive common
   multiple". False at $a=0$ or $b=0$, where published `def-lcm` proves $0$ is
   the *only* common multiple and sets $\operatorname{lcm}=0$. Replaced with the
   case-split wording published `thm-gcd-lcm-product` already uses. Every use in
   the proof is on orders $r_s\ge1$, so no step changed.

2. **`thm-carmichael-function-formula`** (deepseek only) — the identical false
   `[L4]`; same repair. Terra kept this item, so the lanes split on a real defect.

3. **`ex-lifting-a-primitive-root-through-powers-of-five`** (both) — `[L1]`
   dropped the cited lemma's "odd prime $p$" and "$k\ge1$". Both judges gave the
   same witness: $p=2$, $u=1$, $k=3$, where $3$ has order $2$ mod $8$, not $4$.
   Restated with the lemma's own hypotheses.

4. **`ex-frobenius-on-f-four`** (both) — `[L1]` asserted Frobenius is an
   automorphism in every characteristic-2 field. The source says "is an injective
   field endomorphism. If $F$ is finite, it is an automorphism." Terra's witness
   $\mathbb F_2(t)$ is correct. Restated in the source's two-clause form.

5. **`ex-f-eight-as-a-polynomial-quotient`** (deepseek) — the Example displayed
   $a^3,\dots,a^7$ and then said "Together with $0$, the displayed powers are all
   eight elements". Those five equations name five values; with $0$ that is six.
   $a$ and $a^2$ are never displayed, and step 3.1 repeated the miscount. The
   power table is right — I recomputed it — so the repair names $a^0,a^1,a^2$
   alongside the displayed powers in both places.

6. **`cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field`** (both) —
   the Statement closed with "the evaluated equality alone does not determine
   $Q$". At $n=0$ both polynomial rings are $R$, the evaluated equality reads
   $P=Q$, and it *does* determine $Q$; step 3.1's "polynomial vanishing at the
   tuple" does not exist over the empty tuple. Nothing excluded $n=0$, and this
   page's own `def-monic-resultant` and `thm-monic-resultant-…` both treat it.
   The claim now carries $n\ge1$ in the Statement and in step 3.1, with the
   $n=0$ case stated and the witness $T_1+a_1$ named.

7. **`ex-symmetric-reduction-in-two-variables`** (both) — the Given said "over an
   arbitrary commutative ring", and in that scope step 1.1's "leading monomial of
   $f$ is $x^3$" fails in the zero ring and step 2.1's "leading multidegree
   smaller than $(3,0)$" fails in characteristic 2, where the remainder
   $-2e_1e_2$ is zero and has no multidegree. The identity itself holds over
   $\mathbb Z$ and specialises. Given narrowed to $\mathbb Z$; step 3.1 now states
   the specialisation and the characteristic-2 degeneration explicitly.

8. **`thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares`**
   (both) — `[L1]` was **ill-typed**. With the Given's $a:c\to c'$ and $u:Fc\to d$,
   the composite $u\circ F(a)$ is undefined, and the subscripts were reversed.
   The cited theorem says only "natural in $c$ and $d$" without a formula, so
   `[L1]` was this item's own transcription. The Statement itself type-checks and
   steps 1.1–1.2 use only the two correct special cases. `[L1]` now reads, for
   $a:c\to c'$, $b:d\to d'$, $v:Fc'\to d$,
   $\Phi_{c,d'}(b\circ v\circ F(a))=G(b)\circ\Phi_{c',d}(v)\circ a$ — which I
   checked licenses both uses exactly ($a=\mathrm{id}$ and $b=\mathrm{id}$).

### Title and Statement asserting more than the proof gives

9. **`lem-typical-degrees-in-a-regular-pair`** (deepseek) — a **title defect, off
   by a factor of two**, and the class the judges structurally cannot see. The
   Statement correctly gives two *separate* one-sided bounds, each below
   $\epsilon|X|$; the title said "All but fewer than $\epsilon|X|$ vertices have
   typical degree", and the atypical set is their union, up to $2\epsilon|X|$.
   Title rewritten to state the two one-sided bounds. It had already propagated —
   see 10.

10. **`thm-triangle-counting-lemma-for-regular-triples`** (deepseek) — two
    defects. `[L1]` restated the *title* of 9, i.e. the false union bound;
    repaired to the lemma's two actual clauses. And the Statement said "When
    $c<\epsilon$, the right side is negative": at $\epsilon=1/2$, $a=b=1$ (every
    pair is $1/2$-regular) the factor $1-2\epsilon$ vanishes and the right side is
    $0$. Step 4.1 of the same proof already says "nonpositive"; the Statement now
    matches it.

11. **`ex-gram-determinant-of-two-vectors`** (terra) — the title claimed the Gram
    determinant "measures the squared planar area", the Example called $4$ "the
    square of the parallelogram area", and step 2.1 concluded "the ordinary
    determinant … is $2$, so its squared area is $4$". I grepped the corpus: the
    library has **no** determinant–area theorem anywhere, and this item's
    `provenance.statement` is `ai-generated`. Narrowed: the area claim is gone
    from the title, the Example and step 2.1, leaving the identity
    $\det G=\lVert u\rVert^2\lVert v\rVert^2-|\langle u,v\rangle|^2$ and the
    dependence test, which `[L1]` and `[L2]` do license. No item depends on it.

12. **`rem-tower-and-wowzer-bounds-in-regularity`** (deepseek) — a **false
    remark**, and a `rem-` item is its prose. I traced the parameter chain:
    `thm-induced-graph-removal-lemma` step 1.1 applies
    `thm-self-regular-representative-subsets` with a regularity sequence "small
    enough for `[L2]`", and `[L2]` is `thm-induced-counting-lemma-for-regular-pairs`,
    whose $\gamma=\gamma(H,\eta)$ depends only on the pattern and the density
    threshold — a **constant**. With a constant sequence the strong-regularity
    nesting collapses to boundedly many applications at one fixed parameter,
    composing to a tower, not a wowzer. So "For the parameter sequences used in
    induced removal, this nested iteration gives a wowzer-type upper bound" was
    false about this library's own development. Title and body repaired to
    attribute the wowzer bound to part-count-dependent sequences and to state
    that induced removal needs only a constant one. Nothing depends on this remark.

### A wrong estimate

13. **`thm-counting-lemma-for-a-fixed-graph`** (both) — **the most serious defect
    step 8 found.** Step 4.1 bounded the union of the $h$ exceptional sets by
    $h\gamma|C_{r+1}|$, a fraction of the *candidate* set — but `[L1]` bounds each
    exceptional set by $\gamma|W_{r+1}|$, a fraction of the *host* set, and
    candidate sets are smaller by up to $(\eta/2)^h$. The derived constant
    $c=(1-h\gamma)^h(\eta/2)^e$ therefore did not follow. Deepseek reached the
    same conclusion by a second correct route, through the slicing lemma's
    inflated parameter.

    Repaired by fixing the bookkeeping, not the theorem. $\gamma$ is now chosen
    with $\gamma\le(\eta/2)^h/(2h)$; `[L1]` is applied to the **original**
    $\gamma$-regular pair with the candidate set $C_j$ as its large subset, which
    is admissible because $|C_j|\ge(\eta/2)^h|W_j|\ge\gamma|W_j|$, so no reslicing
    is needed; the union bound is $h\gamma|W_{r+1}|\le\frac12|C_{r+1}|$; and
    $c=2^{-h}(\eta/2)^e$. I checked the surviving-fraction product: vertex $v$ is
    chosen from at least $\frac12(\eta/2)^{d_{v-1}(v)}|W_v|$ and
    $\sum_v d_{v-1}(v)=e$, each edge counted once at its later endpoint. The
    Statement is unchanged, its constants remain existentially quantified, and
    nothing downstream uses the formula for $c$.

## Two repairs I made and then reverted

I initially repaired `ex-depressed-cubic-discriminant` (the root-product formula
used at step 1.1, with `thm-monic-resultant-root-product-and-common-root-criterion`
neither in `deps` nor cited anywhere) and `cor-monic-resultant-is-unchanged-modulo-f`
(`[L2]` attributing "evaluation is a ring homomorphism" to a definition that
supplies only the value and the notion of root).

Both findings are correct. But when I checked whether they were item-level
defects, I found the same shape across the level — see the systemic finding
below — and a systemic step-6 residue is not a step-8 fatal. Under R1 I reverted
both edits, **byte-exact to the pre-step8 baseline** (verified against the frozen
hashes), and recorded them `confirmed_nonfatal`. Their ledger notes say so
explicitly.

## Rejudge targets

13 items, exactly those repaired. Their unedited page-mates are spared (owner,
2026-08-06).

```
prop-carmichael-function-as-maximal-order
thm-carmichael-function-formula
ex-lifting-a-primitive-root-through-powers-of-five
cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field
ex-symmetric-reduction-in-two-variables
ex-gram-determinant-of-two-vectors
ex-frobenius-on-f-four
ex-f-eight-as-a-polynomial-quotient
thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares
thm-counting-lemma-for-a-fixed-graph
lem-typical-degrees-in-a-regular-pair
thm-triangle-counting-lemma-for-regular-triples
rem-tower-and-wowzer-bounds-in-regularity
```

## The one false positive

**`ex-polynomial-projections-for-three-eigenvalues`** (deepseek) — the objection
needs the reading "among $T$'s eigenvalues are these three", so that a fourth
eigenvalue $\mu$ could exist and $e_i(T)$ need not vanish on $E_\mu$. The item's
own Given fixes the other reading: "A diagonalisable $T$ with **the three**
displayed distinct eigenvalues", and the title says "**the** three eigenspace
projections". Under that reading `[L1]`'s direct sum is over exactly those three
eigenspaces, the Lagrange nodes are the full eigenvalue list, and
$\sum_i E_i=I$ follows.

## What the 287 nonfatal rows actually are — three systemic findings

The rejections were overwhelmingly real observations about text that is
nonetheless mathematically sound. They cluster, and the clusters are step-6
findings the owner should see at step 10.

**1. Undeclared but library-proved dependencies — by far the largest class.**
A load-bearing definition or theorem is used, exists in this library, and is
absent from the item's `deps` and from every `[[link]]`, so `citecheck` and
`depcheck` cannot see it. Measured instances:

- ~15 items on the inner-product page use the inner-product axioms (first-slot
  linearity, conjugate symmetry, positive definiteness) without declaring
  `def-inner-product-space`. I checked all 20 flagged items: only 3 declare it.
- 4 minimal-polynomial items compute $\mu_J$ from an annihilator without
  `thm-minimal-polynomial-is-well-defined-and-controls-annihilators`.
- 7 of 10 tensor items restate the universal property as producing an
  **$R$-linear** map from a **bilinear** one, where
  `thm-universal-property-of-module-tensor-products` gives a **group
  homomorphism** from a **balanced** map; the upgrade is
  `thm-commutative-ring-module-structure-on-a-tensor-product`, undeclared in 7.
- 3 flatness items attribute the injection criterion to `def-flat…`, which
  explicitly says that formulation "is proved separately" — in
  `thm-flatness-criteria-by-injections-and-ideals`, undeclared in all 3.
- 5 field-theory items use the uniqueness clause of
  `thm-evaluation-kernel-and-minimal-polynomial` uncited.
- The adjunction pages repeatedly conclude an adjunction from a natural hom-set
  bijection without declaring `thm-the-adjunction-hom-set-bijection-under-local-smallness`,
  which states that equivalence in its own Statement.

This is one defect repeated, not sixty defects, and it wants a scoped pass with
gate support — not sixty step-8 rewrites.

**2. Naturality and functoriality asserted without the data.** Six items:
`thm-currying-is-an-adjunction-in-set` and `ex-frobenius-reciprocity-for-group-representations`
(the functor's action on morphisms is never defined),
`thm-associativity-of-balanced-tensor-products`, `cor-tensor-product-with-a-quotient-ring`,
`thm-symmetry-and-associativity-over-a-commutative-ring`, and
`thm-mates-under-a-pair-of-adjunctions`. In each the omitted data is canonical
and the check is one line on generators, which is why none is fatal.

**3. Restatement fidelity.** Two recurring styles the house rules already ban:
meta-commentary in place of a proposition ("The triangle counting lemma requires
regularity in addition to positive pair densities"), in
`cex-positive-pair-densities-alone-do-not-force-a-triangle`,
`cex-unit-group-modulo-fifteen-is-not-cyclic`, `ex-unit-group-modulo-two-hundred-forty`,
`cex-a-rational-recurrence-may-need-a-proper-splitting-field`; and dropped
hypotheses that the item's own Given happens to supply.

## Three things I did not repair but want on the owner's desk

- **`thm-mates-under-a-pair-of-adjunctions`** — "Mates respect typed vertical and
  horizontal pasting" is discharged by "expand the displayed formulas;
  interchange identifies the expansion with the corresponding pasting of the
  mates". That is a gesture. I kept it nonfatal on the merits — the claim is true
  standard mate calculus and step 2.1 of the same proof exhibits the exact
  technique — and note that narrowing it would strand
  `rem-conjugates-preserve-isomorphisms-but-arbitrary-mates-need-not`, which
  leans on the clause and carries no rejection of its own, so R1 forbids the
  coordinated edit here. **Recommend** a later level either writes the pasting
  proof out or narrows both items in one pass.
- **`thm-szemeredi-regularity-lemma-with-tower-bound`** — the title's trailing
  "for graphs of order at least $m_0$" sits awkwardly against a Statement
  requiring $n\ge M$. Ambiguous rather than false, and the missing range is
  covered in one line by the singleton partition. Worth a title cleanup.
- **Convention drift**: `fs-every-tensor-is-an-elementary-tensor` names $e_1,e_2$
  the standard basis of $F^2$ where `lem-standard-basis-of-f-n` indexes from $0$;
  `ex-induced-path-counting-from-three-pure-pairs` labels $P_3$ by $1,2,3$ where
  the cited definition uses $0,1,2$.

## Gate output

`precheck` on all 13 repaired items (the `rem-` item has no proof section):

```
12 checked, 0 failing — all clean
```

Repairs to `[L#]` text and step tags invalidated four proof-contract entries and,
through the `thm-triangle-counting-lemma-for-regular-triples` Statement change,
two downstream citation quotes. Regenerated with `regen-contract-entries.mjs` in
batches 1, 2, 3, 4 and 6, re-merged, and re-checked:

```
proof-contract: 0 error(s), 0 warning(s), 352/352 item(s) checked
finite-smoke: 0 error(s), 12 check(s)
risk-report: 0 error(s), 352 item(s) routed
depcheck: OK — no cycles, all references resolve, no draft items on published pages
```

`depcheck` and `citecheck` report no finding against any of the 13 repaired items.

One trap worth recording: my first `[L1]` rewrite in
`thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares` put the
citation on its own line after a `$$` display, which orphaned the `[[link]]` into
a separate paragraph and failed `proof-contract` as
`citation-source-not-in-fact`. Rewritten with inline math on one line.

### `node tools/step8-guard.mjs`, verbatim

```
step8-guard: baseline "pre-step8" (2026-08-15T08:33:49.285Z) vs working tree
  4642 item(s) at baseline; 13 changed, 0 created, 0 deleted
  13/13 change(s) licensed by a confirmed_fatal adjudication

OK — every step-8 edit is licensed by a confirmed fatal defect
```

Window closed so the gate stays re-runnable once step 9 edits (`LEVELS.md`
§"Step 8"): `touchlog.mjs snap … "after-step8-alpha"` recorded, and the guard
re-verified against that label rather than the live tree, with the same result.

## Blockers

None.
