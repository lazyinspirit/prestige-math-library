## Batch 2 third pass — one item that was never dispatched to you

Alpha's F2.1 named **two** results. My fix brief said "Add it", singular, and only
one arrived. Your work is not at fault: Alpha confirms there is no second-pass
record in your notes, so this is **unattempted, not failed**. My error.

Order 68 is `ready-for-splice` and untouched by this — do not edit it.

### F2.3 — add `cor-number-of-solutions-of-a-binomial-congruence`

Currently **zero occurrences** across all four of your artifacts; the A page is at
27 items, not 28.

**Position:** immediately after `thm-eulers-criterion-for-binomial-congruences`
(position 12).

**Statement:** when $x^m\equiv a\pmod n$ is solvable under the hypotheses of the
preceding theorem — $n$ admits a primitive root, $\gcd(a,n)=1$, $m\ge1$ — the
number of solutions modulo $n$ is exactly $\gcd(\varphi(n),m)$.

**Deps** — all already on the page or already cited by the theorem it follows, so
**no new `requires` edge and no new published dependency**:

```
thm-eulers-criterion-for-binomial-congruences
prop-index-calculus-modulo-n
def-index-of-a-unit-relative-to-a-primitive-root
thm-linear-congruence-solvability-and-solution-count   (published; already a
    declared dependency of the theorem above it, and it supplies the count as
    well as the solvability)
```

**Obligations that must move with it** — this is the exact shape this run has
dropped four times, so treat it as part of the item, not follow-up:

- a proof-contract entry whose input map covers its numbered steps, with citations
  quoting the **proposition** of each cited item, never a clause's opening words;
- component provenance on **both** axes with a rationale in your notes —
  `literature-derived` statement from Hackman C.III.1's count, `ai-altered` proof
  if you reorganise the route around the local index calculus;
- the **Hackman C.III.1 coverage row updated to name both items**: one row
  currently disposes a heading that yields two results.

**Why it matters mathematically.** Your page already carries
`cor-power-congruence-solution-count-modulo-a-prime` — the $a=1$, prime-$n$
**count**. Without this corollary the page states a general **solvability**
criterion and a narrower **count**, so the special case says more than the general
one. That is a real gap in the page's logic, not bookkeeping. One corollary at
scaffold cost now; after the step-4 splice it is a rewrite.

### Re-run and report

The three gates plus your closure audit; report the new item count (expect 28),
its deps, its provenance pair, and the updated Hackman row.
