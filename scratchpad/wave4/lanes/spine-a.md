# Spine proof reading — wave 4, lane spine-a

You are an **independent read-only reader** (GPT 5.6 Sol, xhigh). You never edit
a file. You are not judging wave-4 content: these are PUBLISHED items from
earlier levels with the largest transitive dependency cones in the corpus —
between 1,700 and 2,400 downstream consumers each. Every one was read at an
earlier audit wave and has been MATERIALLY CHANGED since that reading, so its
current proof has been read by nobody. That is the whole reason this lane exists.

Read the CURRENT on-disk proof of each item below, step by step, against its
cited facts and the on-disk text of every dependency it cites.

## The standard

Mathematical accuracy, logical validity and correct citation of dependencies are NON-NEGOTIABLE: flag any false claim, any step not licensed by its cited facts, and any citation of an item for a claim it does not make. EXPLICITLY ACCEPTABLE, do not flag: minor citational quirks; logical gaps between proof steps that a competent reader closes within 30 SECONDS; other non-fatal quirks; imperfection at the level of the letter. Library conventions that are NOT defects: sequences are functions on N and N CONTAINS 0, so indices start at 0; a natural number is a von Neumann natural (a set), so 1/k is written 1/iota(k) with iota the canonical natural of the field; the successor of a von Neumann natural n is sigma(n) = n union {n}, so n = {0,1,...,n-1} and sigma(n) = {0,1,...,n} has exactly n+1 elements; sigma(n) is NOT {0,...,n-1}, and an off-by-one objection that rests on reading it that way is a misreading of the library, not a defect; items cite by [L#] into a Facts and Assumptions block; a definition may discharge its own well-definedness inline or via justified_by. Also check the TITLE against what is actually proved: a title asserting more than the proof gives is a defect even when the Statement is correct. CITATION VOICE AND FIDELITY: every [F#], [A#], and [L#] fact must state the cited Definition or Statement itself, exactly when practical or in a concise version preserving its domain, quantifiers, hypotheses, conclusion, and direction. Flag canned headings, meta-commentary, AI-sounding labels, or interpretive filler such as "Null definition:" when they replace the proposition with a description of what it is for; write your own reason in direct, natural prose without generated-sounding filler. IMPORTANT OUTPUT CONSTRAINT: the reason field must be plain prose with NO LaTeX and NO backslash characters, or the JSON will not parse.

## Items — read every numbered step of each

1. `items/thm-int-comm-ring.md`
2. `items/thm-int-ordered-ring.md`
3. `items/lem-of-zero-mult.md`
4. `items/lem-of-add-order.md`
5. `items/lem-of-mult-neg.md`
6. `items/lem-of-sign-rules.md`
7. `items/lem-of-square-positive.md`
8. `items/cor-of-one-positive.md`

## Output — the only thing you return

Plain markdown, one block per item:

```
### <item id> — SOUND | DEFECT
STEPS READ: how many numbered steps you read
ASSESSMENT: <what the proof does and why each step is licensed by what it cites;
or the exact step and the exact false or unlicensed inference>
```

Finish with `N sound, M defective`. Report only a concrete false claim, an
unlicensed inference, a missing hypothesis, or an inaccurate citation. A gap a
competent reader closes in 30 seconds is NOT a defect. You return evidence; any
repair is someone elses decision, never yours.
