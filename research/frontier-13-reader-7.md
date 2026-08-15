# frontier-13 — Step 6a independent reader 7

## Scope and coverage

I opened and read all 47 assigned item files: 32/32 on
`linear-recurrences-and-rational-generating-functions` and 15/15 on
`linear-recurrences-and-rational-generating-functions-examples`. I also opened
both page files and all 38 distinct published dependency items cited by the
batch; dependency-item opens are not included in the assigned-item count.

I checked all 153 numbered proof/verification/refutation steps and all 119
proof-contract citation records against the current item text and the cited
items on disk. The strict proof-contract check, scoped content-policy check,
47-item citation check, 38-proof precheck and 49-file render check all pass.
The A-page summary has exactly two nonempty paragraphs under 150 words each,
and the B page has no authored body.

Every assigned mathematical-content item has both `provenance.statement` and
`provenance.proof`. The three items with an AI-generated Statement or
Construction — `ex-binary-words-avoiding-101`,
`cex-a-rational-recurrence-may-need-a-proper-splitting-field`, and
`cex-factorial-generating-series-is-not-rational` — have no dependency
consumers. I found no counterexample to any of them: exhaustive enumeration of
binary words through length 12 gives
`1,2,4,7,12,21,37,65,114,200,351,616,1081`, agreeing with the stated rational
series; the proper-splitting-field formula agrees with the recurrence through
the first 13 terms; and the factorial-series contradiction reduces to the
stated nonzero monic polynomial with infinitely many rational roots. A separate
small-case check of 4,840 nonzero bi-infinite recurrences also agreed with every
endpoint formula in `prop-reciprocity-for-biinfinite-linear-recurrences`.

## Findings

### 1. `thm-closed-form-for-a-linear-recurrence-over-a-splitting-field`

- **Exact location:** `items/thm-closed-form-for-a-linear-recurrence-over-a-splitting-field.md`, [L7] and Proof step 1.2, lines 57 and 65.
- **What is wrong:** [L7] cites a theorem about natural-number binomial coefficients, but step 1.2 immediately writes the expression
  $z\mapsto\binom{z+j-1}{j-1}$ as a polynomial in $E[z]$. The cited theorem does not define a binomial coefficient with an indeterminate or field element in its upper slot.
- **Why:** The intended bridge is elementary but absent: define
  $q_j(z)=((z+1)\cdots(z+j-1))/(j-1)!$ (with $q_1=1$), use characteristic zero to invert $(j-1)!$, and then use [L7] after evaluating at natural $n$. This gives the required degrees and leading coefficients.
- **Severity:** **polish** — a sub-30-second missing algebraic bridge; the theorem and its converse remain correct.

### 2. `thm-words-avoiding-finitely-many-factors-have-rational-generating-functions`

- **Exact location:** `items/thm-words-avoiding-finitely-many-factors-have-rational-generating-functions.md`, Proof step 2.1, line 55.
- **What is wrong:** The sentence “it is therefore also a factor of $sa$” does not follow merely from the new forbidden factor ending at the appended letter. It also needs the longest-suffix invariant from step 1.2 to show that the state $s$ retains a long enough suffix of $w$.
- **Why:** If the new forbidden suffix is $b$, then its proper prefix obtained by deleting the last letter is a suffix of $w$, avoids $B$, and is a proper prefix of a forbidden word; hence it lies in $S_B$. The longest state $s$ therefore has that prefix as a suffix, so $b$ is a factor of $sa$. Writing this one bridge licenses the exact-rejection claim.
- **Severity:** **polish** — a sub-30-second omitted invariant argument.

### 3. `ex-fibonacci-companion-matrix`

- **Exact location:** `items/ex-fibonacci-companion-matrix.md`, [L2] and Verification step 1.1, lines 45 and 53.
- **What is wrong:** [L2] faithfully states that a companion matrix advances state vectors, but step 1.1 also uses it to derive the displayed entries of $C$. The cited proposition assumes that $C$ is the row-shift companion matrix; its Statement does not define those entries.
- **Why:** The displayed matrix follows immediately from
  `def-companion-matrix-of-a-linear-recurrence`, but that definition is absent
  from this item's dependencies and Facts & Assumptions. Adding the direct
  definition fact, or treating the displayed matrix as an explicitly checked
  unfolding of that definition, closes the input map.
- **Severity:** **polish** — a sub-30-second missing definition bridge, not a false matrix formula.

### 4. `cex-factorial-generating-series-is-not-rational`

- **Exact location:** `items/cex-factorial-generating-series-is-not-rational.md`, Counterexample step 1.1, line 43.
- **What is wrong:** [L1] permits an eventual recurrence of order zero, whereas step 1.1 passes directly from rationality to an order $d\ge1$ recurrence.
- **Why:** One sentence is missing: the sequence $n!$ is never zero in $\mathbb Q$, so it is not eventually zero and cannot satisfy the order-zero alternative. The subsequent positive-order polynomial argument is correct.
- **Severity:** **polish** — a sub-30-second omitted boundary branch.

### 5. `fs-transfer-matrix-inversion-needs-a-spectral-radius-hypothesis`

- **Exact location:** `items/fs-transfer-matrix-inversion-needs-a-spectral-radius-hypothesis.md`, Given/[L2] and Refutation step 3.1, lines 31, 35 and 45.
- **What is wrong:** The Given allows an arbitrary square matrix, including size zero, while the cited cofactor theorem [L2] applies only to a positive-sized transfer matrix of a weighted digraph. Step 3.1 applies [L2] without supplying either restriction or a graph realizing the arbitrary matrix.
- **Why:** For $p\ge1$, any $A\in M_p(R)$ can be realized as a transfer matrix by placing one edge of weight $A_{uv}$ from $u$ to $v$, after which [L2] applies. For $p=0$, the formal inverse identity is already proved by [L1], but the cofactor formula is outside its stated domain. Alternatively, step 3.1 can be restricted to the actual transfer-matrix setting.
- **Severity:** **polish** — the formal refutation is already complete in steps 1.1–2.1; this is a sub-30-second domain bridge in the supplementary cofactor sentence.

## Page verdicts

- **`linear-recurrences-and-rational-generating-functions`: PASS WITH POLISH.** Opened 32/32 items. Two polish findings, no fatal or nonfatal defects. I found no false or overstrong title or Statement, no inaccurate load-bearing dependency restatement, and no unresolved boundary failure. The other 30 items read cleanly.
- **`linear-recurrences-and-rational-generating-functions-examples`: PASS WITH POLISH.** Opened 15/15 items. Three polish findings, no fatal or nonfatal defects. All generated witnesses are correct under the checks described above and remain non-load-bearing. The other 12 items read cleanly.

**Total assigned items actually opened: 47/47.**
