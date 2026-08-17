# Step-9 risk refutation — run `frontier-15`

Step 9 (the scope-denial sweep) overturned four declines whose recorded reason
was false of disk or was "it would have cost a lemma we did not write". The lead
Alpha authored the recovered results and they are **new, unjudged text**.
`risk-report.mjs` puts each of them at `high` or `critical`, so each needs an
independent adversarial read before it can ship.

You are read-only. Report evidence; the lead Alpha adjudicates and is the only
writer.

## Your items

Read each item file in full, then open **every** id in its `deps` and check the
`[L#]` restatement against the cited item's own Statement or Definition.

| item | source it claims to follow |
|---|---|
| `items/thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group.md` | Craven, *Finite Group Theory*, Theorem 2.13 (Philip Hall), printed p. 30–31 of <https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf> |
| `items/lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup.md` | the claim opening Craven's proof of that same Theorem 2.13 |
| `items/prop-complement-and-disjoint-union-axioms-for-a-lambda-system.md` | Dembo, *Probability Theory* lecture notes, Definition 1.1.36 and the Remark after it, <https://adembo.su.domains/stat-310b/lnotes.pdf> |
| `items/ex-the-group-action-monad-and-its-algebras.md` | Mac Lane, *CWM* §VI.2 "Group actions", printed p. 141, <https://math.mit.edu/~hrm/palestine/maclane-categories.pdf> |

Their proof contracts — citations, per-step input maps and the eight boundary
dispositions — are in `research/frontier-15-batch-2.proof-contracts.json`
(the two group-theory items), `research/frontier-15-batch-4.proof-contracts.json`
(the lambda-system proposition) and
`research/frontier-15-batch-7.proof-contracts.json` (the monad example).

## What the lead Alpha most wants tested

1. **`thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group`
   is the one to break if it can be broken.** Its Statement was *narrowed*
   against the source: Craven says "Let $G$ be a soluble group", the item says
   "finite solvable", because the library's `def-fitting-subgroup-of-a-finite-group`
   defines $F(G)$ only for finite $G$. Its `provenance.statement` is `ai-altered`
   for exactly that reason. Check the narrowing is faithful and that no step
   silently needs more than finiteness and solvability.
2. **Step 7.1 applies the Dedekind modular law with a variable clash.** The item
   substitutes the lemma's $A:=F$, $B:=C$, $C:=A$. Verify the lemma's own
   hypothesis $A\le C$ (i.e. $F\le A$) and "$AB$ is a subgroup" (i.e. $FC$) are
   both actually discharged, and that $FC\cap A=A$ follows.
3. **Step 9.1 concludes nilpotency from $Z_2(D)=D$.** The library defines
   nilpotence by the *upper* central series. Check the step does not quietly
   assume the upper/lower equivalence.
4. **The lambda-system proposition corrects its source.** Dembo's Remark offers
   complements *in place of* relative differences while keeping increasing
   limits; that is **not** an equivalent axiom system — $\{\emptyset,\{1\},\{1,2\},\{3,4\},\{2,3,4\},X\}$
   on $X=\{1,2,3,4\}$ satisfies it and is not a lambda-system. The item therefore
   states the complement-**and-countable-disjoint-union** form. Confirm that form
   IS equivalent, in both directions, and that the counterexample above is right.
5. **The monad example's algebra correspondence.** Check that step 3.1's reading
   of the two $T$-algebra laws really is the two action axioms and not a weaker
   pair, and that step 5.1's homomorphism condition is equivariance in the
   library's sense.
6. **The eight boundary dispositions on each item.** These are the class that hid
   confirmed-fatal defects on `frontier-13` and `frontier-14`. Instantiate the
   empty set, the trivial group, $n=0$, $n=1$, a degenerate parameter, and both
   directions of every iff, and say whether each recorded disposition is TRUE.

## Output

You cannot write. Put the complete report in your final message: per finding, the
item id, the exact location, what is wrong, the disk evidence or counterexample,
and `fatal` / `nonfatal`. If you find nothing, say what you checked. Do not
manufacture a finding.

**No permission prompts of any kind**, including inside an `&&` chain.
