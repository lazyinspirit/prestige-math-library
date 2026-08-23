# Frontier-17 read-only refutation — risk-review corroboration, algebra/category

You are corroborating (or refuting) two Alpha `risk_review` dispositions already
written to disk. Alpha has completed its own read; your job is an independent
adversarial read, not a summary of Alpha's.

## Items — both mandatory, read in full

1. `items/ex-maximal-subgroups-as-frattini-hyperplanes.md` **[high risk]**
   — contract entry in `research/frontier-17-batch-1.proof-contracts.json`.
2. `items/thm-groups-are-monadic-over-sets.md` **[critical risk]**
   — contract entry in `research/frontier-17-batch-9.proof-contracts.json`.

Also read, in full, every item named in each one's `deps`, before alleging any
cited fact is too weak.

Both items were repaired at step 8 under a `confirmed_fatal` judge adjudication,
so the text you are reading is new. The `risk_review` block in each contract
entry records what Alpha checked — read it AFTER forming your own view.

## What to test

**`ex-maximal-subgroups-as-frattini-hyperplanes`.** The Example asserts *the*
maximal subgroups of the dihedral group of order eight, i.e. a complete list.
Step 1.1 shows each displayed subgroup is maximal; ask whether completeness is
actually delivered, and by what. Verify the three subgroups have order four,
are distinct, and contain $\Phi(D)=\langle r^2\rangle$. Verify the quotient
images are the spans of $(1,0)$, $(0,1)$, $(1,1)$ in the stated basis and that
these are the kernels named. Check whether the `[L2]` restatement's omission of
the cited corollary's "finite $p$-group" hypothesis licenses anything false
here.

**`thm-groups-are-monadic-over-sets`.** The tier comes from step 2.3's induction.
Test it concretely:
- Is the splitting $a(w)=a([x_1^{\epsilon_1}])\cdot a(\text{tail})$ actually
  licensed by $aT(a)=a\mu_A$? Check both that $\mu_A$ of the two-letter word of
  words returns $w$ and that $T(a)$ of it is reduced.
- Are the induction's base cases discharged — the empty word and both
  length-one cases $[x]$ and $[x^{-1}]$?
- Re-derive associativity, the unit laws and the inverse law from the same
  multiplication law yourself. The inverse law is the one place where
  cancellation inside $\mu_A$ does real work; check it is used correctly and not
  assumed.
- Does the proof establish $K$ bijective on objects AND on hom-sets, and does
  "over $\mathbf{Set}$" follow from something cited rather than asserted?
- Is `[L1]` load-bearing, and if the proof needs it, does it say so?
- Does the title "strictly monadic" claim exactly what is proved?

Check every `[F#]`/`[L#]` against the cited item's actual text on disk before
alleging it is too weak, and check each title against what its proof delivers.

## Output

Finding ids `RR-ALG-1`, `RR-ALG-2`, … Each: item id, exact location, what is
wrong, the quoted dependency text or an explicit counterexample, and `fatal` or
`nonfatal`. Fatal first. Accept items explicitly where no specific defect
exists — "no defect in these items, here is what I checked" is the expected
result and a valuable one. Do not manufacture findings. State explicitly
whether you corroborate or contradict each `risk_review`.

Finish with a coverage statement: read in full / sampled / could not check.

Read-only is absolute: do not edit, patch, create or delete any repository file,
and never apply a fix. Alpha is the sole adjudicator.

**NO PERMISSION PROMPTS OF ANY KIND**, including for any segment of a compound
command. If an indispensable read has no escalation-free form, report that exact
blocker instead of prompting.
