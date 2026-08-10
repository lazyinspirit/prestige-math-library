
## Your cluster — `titles`: every title in the run, against what its proof gives

**This cluster is different from the others. You are not tracing proofs step by
step — you are hunting one specific fatal class across the whole run.**

`LEVELS.md` step 6 makes it fatal for a title or Statement to assert more than
the proof delivers, and the reason is mechanical: **the step-7 judges receive the
item's Statement and proof but cannot see the title at all.** A false title is
invisible to every downstream check. It is caught here or it ships.

This run has already produced one confirmed instance. `thm-r-three-three-equals-six`
was titled *"The first exact Ramsey number is $R(3,3)=6$."* Exact Ramsey values
with a target of 1, and the elementary family $R(2,t)=t$, both precede it — and
the proof establishes only $R(3,3)=6$, never a claim about being first. The
independent reader retitled it *"The Ramsey number $R(3,3)=6$"*. Confirm that
repair landed on disk, then find the others.

### What to do

Read the `title:` frontmatter field and the Statement/Definition/Example of every
item on your assigned pages, and for each ask: **does the proof below actually
deliver what the title claims?** You do not need to verify the proof is correct —
that is other refuters' job. You need to check the title's *scope* against the
proof's *scope*.

The specific failures to hunt:

- **"The" where only "a" was proved** — a uniqueness claim in the title that the
  proof never establishes.
- **"Every" / "any" where only a special case was handled** — a title dropping a
  finiteness, connectedness, commutativity, characteristic, or dimension
  hypothesis that the Statement carries and the proof needs.
- **A superlative or ordinal claim** — "the first", "the smallest", "the only",
  "the canonical", "the unique" — which requires comparison against things the
  proof never mentions. This is the class that already fired.
- **An isomorphism claimed where the proof gives a surjection, injection, or
  bijection of underlying sets** — especially in group and ring items.
- **An equality claimed where the proof gives an isomorphism** — and the reverse.
  Batch 7 had exactly this: a group equality that was really an isomorphism onto
  an opposite group.
- **A named-theorem attribution the proof does not earn** — a title saying
  "Cauchy's theorem", "Fubini's theorem", "the fundamental theorem of X" for a
  weaker or differently-hypothesised statement than the one that bears that name.
- **A title asserting a converse or biconditional where the proof gives one
  direction.**
- **A quantifier scope error** — "for all $n$" where the proof needs $n\ge1$, or
  a claim about all rings where the proof uses a domain or a field.

Also check the **Statement against the proof** for the same defects, and check
the `landmark: true` items especially closely — they are the flowchart nodes and
the most-read text on each page.

### Your assigned scope — all A pages in the run

Read the `items:` list of each of these page files in `library/`, then read the
title and Statement of every item on them:

- `symmetric-groups-and-the-sign-homomorphism`
- `matrices-and-the-matrix-of-a-linear-map`
- `the-structure-of-finite-abelian-groups`
- `free-products-and-amalgamation`
- `polynomial-rings-and-roots`
- `bounded-variation-and-riemann-stieltjes`
- `improper-integrals`
- `fubini-and-change-of-variables`
- `ramsey-theory`
- `plane-graphs-euler-and-the-five-colour-theorem`
- `categories-functors-and-natural-transformations`
- `gaussian-elimination-and-row-reduction`
- `determinants-of-matrices-over-a-commutative-ring`

and the 31 draft items on the enrichment page `group-actions-and-cayleys-theorem`
(only the items whose `status:` is `draft` are in this run; the 6 already
published ones are out of scope).

Then do the same for the `-examples` B page of each pair, where the analogous
failure is an example titled as though it proves a general phenomenon when it
exhibits one witness, or a counterexample titled as refuting more than it
refutes.

This is a large scope and you should prioritise: **theorems and corollaries with
named attributions, superlatives, or biconditionals first**; then landmarks; then
everything else. If you run short, say exactly which pages you covered and which
you did not — a partial report with an honest boundary is far more useful than a
complete-sounding one.

Report every title you judge overstated, with the title text, the Statement text,
and the specific clause of the proof that falls short.
