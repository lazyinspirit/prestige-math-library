# Frontier-17 read-only refutation — risk-review corroboration, content and volume

You are corroborating (or refuting) two Alpha `risk_review` dispositions already
written to disk. Alpha has completed its own read; your job is an independent
adversarial read, not a summary of Alpha's.

## Items — both mandatory, read in full

1. `items/ex-volume-of-a-solid-of-revolution-by-cylindrical-shells.md`
   **[critical risk]**
2. `items/cor-unit-n-ball-volume-is-maximal-in-dimension-five.md`
   **[critical risk]**

Both contract entries are in
`research/frontier-17-batch-5.proof-contracts.json`. Also read, in full, every
item named in each one's `deps` before alleging any cited fact is too weak.

Both were repaired at step 8 under a `confirmed_fatal` judge adjudication, so
the text you are reading is new. The `risk_review` block in each contract entry
records what Alpha checked — read it AFTER forming your own view.

## What to test

**`ex-volume-of-a-solid-of-revolution-by-cylindrical-shells`.** The load-bearing
subtlety is that the cap region $f_2(x)\le y\le f_1(x)$ is **not** of the graph
form $0\le y\le f(x)$ to which `[F1]` applies. Test:
- Is `[F1]` ever applied to a region it does not cover? Trace exactly which sets
  `[F1]` is applied to and confirm each is of the graph form.
- Is $S\cup S_2=S_1$ and $S\cap S_2=\{y=f_2(\rho)\}$ correct as sets? Write both
  out explicitly.
- Is $\partial S\subseteq\partial S_1\cup\partial S_2$ true? Compute $\partial S$
  yourself; a false containment here is a fatal defect.
- `[F5]` is a biconditional used in **both** directions in step 2.1. Check each
  orientation is the one the cited theorem supplies.
- Is $S\cap S_2$ really the graph of a continuous function on a compact set, and
  in the coordinate order `[F4]` requires?
- Recompute every number: $2\pi\int_0^2 x\,dx$, $2\pi\int_0^2 x(x-1)^2dx$, the
  washer radii at height $y$, the annulus area, $\int_0^1 4\pi\sqrt y\,dy$, and
  the shell integral $2\pi\int_0^2 x(1-(x-1)^2)dx$.
- Does step 1.1's appeal to `[F1]` for "compact and Jordan measurable" exceed
  what the `[F1]` line states, and does the cited theorem supply it?

**`cor-unit-n-ball-volume-is-maximal-in-dimension-five`** asserts a **unique**
maximum, so every comparison must be strict and the rational bounds on $\pi$
must be tight enough. Test:
- Recompute the Gregory–Leibniz partial sums through $N=7$ and $N=18$ as exact
  fractions. Do they equal the two displayed fractions **exactly**?
- Is each remainder's **sign** as claimed, and does the sign give the
  inequality in the direction used?
- Derive $V_{n+2}/V_n=2\pi/(n+2)$ yourself from `[F1]` and `[F3]`.
- For each parity chain, state exactly which inequality on $\pi$ the turning
  point needs, and check $3<\pi<16/5$ supplies it. Is any needed inequality
  non-strict or outside the bracket?
- Verify $\Gamma(7/2)=(15/8)\sqrt\pi$ and $\Gamma(4)=6$, hence $V_5=8\pi^2/15$
  and $V_6=\pi^3/6$, and that $V_5>V_6$ needs exactly $\pi<16/5$.
- Does anything establish there is no tie?

Check every `[F#]`/`[L#]` against the cited item's actual text on disk before
alleging it is too weak, and check each title against what its proof delivers.

## Output

Finding ids `RR-VOL-1`, `RR-VOL-2`, … Each: item id, exact location, what is
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
