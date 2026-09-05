# Final-adjudicator evidence: `thm-increasing-functions-split-uniquely-as-jump-plus-continuous`

Disposition: `repaired`.

## Material independently reviewed

I read the current theorem and all five direct dependencies; the measure-theory
A/B pages; the batch-3 manifest, coverage and notes; both proof contracts; the
high-risk record; the group-c load-bearing and impact records; both frozen judge
rejections; both confirmed-fatal adjudications; and both Alpha repairs.

The first judge correctly found that the defining jump function includes the
left jump at $b$, while the old formula and determining data omitted it. Alpha
correctly added that term and handled $a=b$. The second judge correctly found
that a repeating enumeration would count a discontinuity more than once. Alpha
correctly required a repetition-free indexing.

## Authoritative source verification

I verified the standard decomposition in Terence Tao, *An Introduction to
Measure Theory*, Lemma 1.6.31 and its proof (PDF pages 176--178):

https://www.stat.rice.edu/~dobelman/courses/texts/qualify/Measure.Theory.Tao.pdf

The source supports the facts that a bounded nondecreasing function is a sum of
a continuous nondecreasing part and an absolutely convergent jump function;
that the total jump intervals are disjoint in the range; that the jump part has
the same value fraction at each jump; and that the increment of the jump part
between two arguments is bounded by the corresponding increment of the
original function. The library's separate left- and right-jump terms implement
the source's jump fraction for arbitrary point values. The compact-interval
endpoint conventions are library-specific and were checked directly from the
local definition.

## Independent mathematical repair

Alpha's endpoint and repetition repairs are correct, but step 2.1 still split
the new right-jump indices as $(x,y)$. This omits a right jump at $x$: such a
jump is absent from $J_F(x)$ but present in $J_F(y)$. The displayed conclusion
$J_F(y)-J_F(x)\le F(y)-F(x)$ therefore did not follow from the written split.

I repaired the proof by splitting every finite pair admissible at $y$ into an
old part $S_0\subseteq(a,x]$, $T_0\subseteq(a,x)$ and a new part
$S_1\subseteq(x,y]$, $T_1\subseteq[x,y)$. The old contribution is bounded by
$J_F(x)$; the ordered new value intervals, including
$F(x^+)-F(x)$ when present, telescope inside $[F(x),F(y)]$. For $x=a$, the
endpoint defect $F(a^+)-F(a)$ is included first, giving
$J_F(y)-\beta_a\le F(y)-F(a^+)$. These estimates prove that $C_F=F-J_F$ is
nondecreasing on the whole compact interval.

The repetition-free series then shows that $J_F$ has exactly the left and right
jumps of $F$. Consequently $C_F$ has no interior jump and is continuous there;
the explicit estimates at $a$ and the final-left-jump term at $b$ prove endpoint
continuity. The formula fixes the canonical jump function pointwise and then
forces the remainder.

I also synchronized the manifest title, strategy, and missing `thm-froda`
dependency; regenerated both contract derivations; corrected their zero,
degenerate, endpoint, and no-choice rows; and replaced the risk review with the
full final argument. No direct dependency item was changed, so no
owner-prerequisite-repair licence is required.

Because this theorem is a direct dependency of queue item 1, I reran item 1's
focused checks and recorded its terminal context again before recording this
item. Its used interface did not change.

## Focused checks on final bytes

- Item precheck: pass (`1 checked, 0 failing`).
- Batch and merged strict proof contracts for this id: pass with zero errors and
  warnings.
- Batch and merged high-risk reports with `--require-reviewed`: score 7, zero
  errors.
- Batch manifest dependency check: `33 item(s), 0 normalized, 0 error(s)`.
- Batch content policy: `33 scoped item(s), 0 error(s), 0 warning(s)`.
- Boundary audit: no contradicted dispositions.
- Item and both companion-page render checks: pass under real YAML and KaTeX.
- Queue-item-1 precheck and both strict contract checks after this repair: pass.
