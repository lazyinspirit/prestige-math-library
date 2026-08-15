## Batch 2 — step-5 repair: 26 B-page ids are listed on your A page files

Your authoring is otherwise accepted (77 items, scoped gates all clean, the late
binomial-congruence corollary complete with its input map, both provenance axes
and the Hackman C.III.1 linkage). Your batch-scoped gates could not see this —
`multi-home` is a cross-page check that only the repo-wide `depcheck` performs,
and it could not run cleanly until every batch had landed.

### The defect

**Both of your A page files list their B page's items in addition to their own.**
`depcheck` reports 26 `multi-home` errors:

```
[multi-home] "ex-dihedral-group-of-order-six-is-s-three" appears on both
             semidirect-products-and-automorphism-groups-examples
         and semidirect-products-and-automorphism-groups
```

**Your manifest is correct** — `research/frontier-13-batch-2.pages.json` homes
every one of these on the B page, `kind: "B"`. The authored page file is what
disagrees. So this is a page-file edit only: **no item file changes, no manifest
change, no `plan-spec.json` change, and no id is renamed or removed.**

### Exactly what to remove

From `library/number-theory/primitive-roots-and-unit-groups-modulo-n.md` — 11 ids:

```
ex-primitive-roots-modulo-seventeen
ex-index-table-modulo-seventeen
ex-primitive-root-modulo-thirteen-by-prime-divisor-tests
ex-lifting-a-primitive-root-through-powers-of-five
ex-unit-group-modulo-two-hundred-forty
ex-carmichael-function-of-five-hundred-sixty-one
ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine
cex-unit-group-modulo-fifteen-is-not-cyclic
cex-euler-totient-need-not-be-the-unit-group-exponent
ex-square-roots-of-one-modulo-one-hundred-twenty-eight
ex-moduli-below-twenty-with-primitive-roots
```

From `library/abstract-algebra/semidirect-products-and-automorphism-groups.md` —
15 ids:

```
ex-dihedral-group-of-order-six-is-s-three
ex-affine-group-of-the-real-line
ex-symmetric-group-splits-over-the-alternating-group
ex-generalized-dihedral-group-of-the-klein-four-group
ex-affine-group-modulo-eight-as-a-holomorph
ex-automorphism-group-of-the-cyclic-group-of-order-eight
ex-two-automorphisms-of-z-squared
ex-s-four-as-the-holomorph-of-the-klein-four-group
ex-nonabelian-group-of-order-twenty-one
cex-cyclic-prime-square-extension-does-not-split
cex-a-complement-in-a-semidirect-product-need-not-be-normal
cex-a-subgroup-of-an-abelian-group-need-not-be-characteristic
fs-every-short-exact-sequence-of-groups-splits
fs-kernel-and-quotient-determine-a-group-extension
fs-an-abelian-group-has-an-abelian-automorphism-group
```

Each must remain listed on its `-examples` page, exactly once. **Confirm the B
page still lists all of them after your edit** — the failure mode of this repair
is removing an id from both pages and orphaning it.

### Then check the A-page summary and body still make sense

If either A page's prose refers to those examples as being *on this page*, adjust
the wording. The summary is the lead Alpha's binding text — if the correction
requires a summary change, **do not rewrite it yourself: record it and report
it**, and I will route it back to the lead Alpha.

### Re-run and report

```
node tools/depcheck.mjs
node tools/tsx-run.mjs tools/precheck.mts
node tools/rendercheck.mjs
node tools/content-policy.mjs research/frontier-13-batch-2.pages.json
```

Report the `multi-home` count for your two pages (expect 0) and confirm both B
pages still carry all 26. **`depcheck` will still fail overall** — there are 154
pre-existing errors in this worktree from uncommitted work outside this run, plus
batch 6's. Report only your own pages' status; do not touch anything else.
