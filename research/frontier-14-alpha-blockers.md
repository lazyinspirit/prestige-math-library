# frontier-14 — authoring Alpha, blocker repair pass (step-8d)

**Date:** 2026-08-16
**Agent:** authoring Alpha, Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token context (`claude-opus-5[1m]`)
**Scope, as instructed by the owner on 2026-08-16:** *"repair and close the remaining two items, do NOT rejudge and audit anything else"*

Two items, both on `complete-metrizability-and-baire` (batch 3):

- `thm-cech-complete-spaces-are-baire`
- `thm-simple-continued-fractions-parametrise-the-irrationals`

Nothing else was adjudicated, read for defects, or edited. No other batch's
findings were opened. No neighbouring defect is reported below because none was
looked for; the two items' declared dependencies were opened and read, and
nothing in them looked wrong.

---

## 1. Blocker 1 — `thm-cech-complete-spaces-are-baire`

### 1.1 The countermodel, reproduced

The lead Alpha's countermodel is correct and decisive. Reproduced in full:

Let $K=[0,1]$ with its usual topology, which is compact Hausdorff, and let
$Y\subseteq K$ be the set of irrational points of $[0,1]$ with the subspace
topology, with $i$ the inclusion. Then $(K,i)$ is a Hausdorff compactification of
$Y$: $Y$ is dense in $[0,1]$ and $i$ is an embedding. And $Y$ is a $G_\delta$ in
$K$, because $K\setminus Y=\mathbb Q\cap[0,1]$ is countable, so
$Y=\bigcap_{q\in\mathbb Q\cap[0,1]}\big([0,1]\setminus\{q\}\big)$ is a countable
intersection of open sets. So $Y$ is Čech-complete via this compactification.

Now take every dense open $U_n$ equal to $Y$ itself, which is open and dense in
$Y$. The old step 2.1 asked for a nonempty **ambient** open set — a nonempty
member of the topology of $K$ — lying inside the next dense open set, i.e. inside
$Y$. Every nonempty open subset of $[0,1]$ contains an interval of positive
length and hence contains a rational, so **no** nonempty ambient open set is
contained in $Y$; equivalently $Y$ has empty interior in $K$. The nested
construction as written could not produce even its first term.

The claim itself is true, so this is a defective proof of a true theorem, and
the repair is a rewrite rather than a correction.

### 1.2 Strategy chosen, and why

The lead Alpha's recorded repair direction — run the construction inside the
compactification on ambient opens that *meet* $X$ — is the right one, and I
verified it rather than assuming it. The rewrite has seven phases:

1. Fix the compactification $(K,i)$, write $Y:=i[X]$, and fix the $G_\delta$
   sequence $Y=\bigcap_n G_n$, so $Y\subseteq G_n$ for every $n$.
2. Reduce the Baire condition to: given dense open $(U_n)$ in $X$ and nonempty
   open $V\subseteq X$, produce a point of $V$ lying in every $U_n$.
3. Transport to $Y$ through the embedding, and replace each relatively open
   $i[U_n]$ by an **ambient** $W_n$ with $W_n\cap Y=i[U_n]$; get the closure form
   of regularity in $K$.
4. Build the chain: membership of the dependent-choice carrier set is
   *"$O$ is open in $K$ and $O\cap Y\ne\varnothing$"* — the meeting condition,
   never containment — and the successor step shrinks with
   $\overline{O'}\subseteq O\cap W_{n+1}\cap G_{n+1}$.
5. Apply DC, then the finite intersection property in the compact $K$ to the
   decreasing nonempty closed family $\{\overline{O_n}\}$.
6. The resulting point lies in every $G_n$, hence in $Y$; and in every $W_n$ and
   in $W$, hence in every $i[U_n]$ and in $i[V]$. Pull it back through $i$.

The load-bearing change is at 3 and 4. The old proof needed
$O\subseteq i[U_n]$, which the countermodel forbids; the new proof needs only
$O\cap Y\ne\varnothing$, which survives because $i[U_{n+1}]$ is dense **in $Y$**
and the shrinking is done with the closure form of regularity in $K$. Nothing in
the argument asks for $Y$ to have interior, and the countermodel now runs through
it without complaint.

### 1.3 A choice-principle trap that the rewrite closes

Passing from the relatively open $i[U_n]$ to an ambient $W_n$ for **all $n$ at
once** looks like a countable choice, and on an item whose Statement opens
"Assume Dependent Choice" that would be a real defect. It is avoided:
`def-subspace-topology-top` supplies the canonical tracing set
$U'=\bigcup\{U\in\mathcal T:U\cap S\subseteq W\}$, so $W_n$ is *defined by a
formula in $n$* rather than selected. Step 2.1 says so explicitly. DC is then used
exactly once, at step 4.1, where it is genuinely needed; the $G_n$ arrive as a
sequence from the $G_\delta$ definition; and the two individual points are single
existential instantiations. This is recorded in the item's second Remark.

### 1.4 Dependencies

Added (all **published**, none newly built):

| dependency | status | what it supplies |
|---|---|---|
| `def-compactification-of-a-tychonoff-space` | published | $K$ compact Hausdorff, $i$ an embedding with dense image |
| `def-homeomorphism-and-open-maps` | published | what *embedding* means: injective, corestriction a homeomorphism onto the image with the subspace topology |
| `def-subspace-topology-top` | published | traces, and the **canonical** tracing set that avoids countable choice |
| `def-dense-top` | published | dense $\iff$ meets every nonempty open set |
| `lem-regularity-via-closed-neighbourhoods` | published | clause (b): $x\in V\subseteq\overline V\subseteq U$ — the working form of regularity |
| `thm-closure-characterisation-top` | published | claim 2: $\overline A$ is closed and contains $A$ |

Removed: `thm-the-separation-implication-chain`. The old proof cited it for
regularity of the ambient space, but the ambient space is compact Hausdorff and
its regularity comes from `thm-a-compact-hausdorff-space-is-regular-and-normal`;
the separation chain does not state that implication, and the old step 2.1 said so
itself. It is now cited nowhere and is not a logical dependency.

Retained: `def-cech-complete-space`, `def-dependent-choice`, `thm-compact-iff-fip`,
`def-baire-space`, `thm-a-compact-hausdorff-space-is-regular-and-normal`,
`def-g-delta-and-f-sigma-in-a-topological-space`.

**No new item was built.** Everything the proof needs was already published.

---

## 2. Blocker 2 — `thm-simple-continued-fractions-parametrise-the-irrationals`

### 2.1 What was missing

DeepSeek's rejection F25 named two one-line gestures, and both were real:

- old step 3.1 asserted that the floor-and-reciprocal algorithm "recovers the
  original number" without the tail identity, which is the whole content of the
  inverse argument;
- old step 4.1 asserted both continuity directions in a single sentence with no
  cylinder/preimage comparison.

### 2.2 Strategy chosen, and why

Everything is driven by one object that the old proof never introduced: the
Möbius map attached to a prefix,
$$M_n(t)=\frac{p_nt+p_{n-1}}{q_nt+q_{n-1}},$$
built from the convergent recurrences already proved in
`lem-simple-continued-fraction-convergents-and-cylinders`. Three facts about it
carry the entire theorem, and each is elementary algebra from the cited lemma:

- **Endpoints.** $M_{n-1}(a_n)=p_n/q_n$ and
  $M_{n-1}(a_n+1)=(p_n+p_{n-1})/(q_n+q_{n-1})$, so the prefix interval
  $J(a_0,\dots,a_n)$ is exactly the closed interval with endpoints
  $M_{n-1}(a_n)$ and $M_{n-1}(a_n+1)$ — and $M_{n-1}$ depends only on the first
  $n$ digits.
- **Interiority.** $M_n(t)-p_n/q_n=(-1)^n/\big(q_n(q_nt+q_{n-1})\big)$, so for
  $t>1$ the value has the same sign as at $t=1$ and strictly smaller modulus,
  hence lies **strictly** between the two endpoints.
- **Monotonicity.**
  $M_n(s)-M_n(t)=(s-t)(p_nq_{n-1}-p_{n-1}q_n)/\big((q_ns+q_{n-1})(q_nt+q_{n-1})\big)$,
  and the determinant is $\pm1$, so $M_n$ is strictly monotone on its domain.

From these:

- **Tail identity** ($x=M_n(x_{n+1})$, by induction, base case computed
  explicitly). With $x_{n+1}>1$, interiority puts $x$ strictly inside every
  prefix interval of its own code, so $x$ is the single point of their
  intersection: **surjectivity**.
- **Prefix separation.** If two codes first differ at index $m$ they share
  $M:=M_{m-1}$, and their two $m$-th prefix intervals are the closed intervals
  with endpoint pairs $\{M(a_m),M(a_m+1)\}$ and $\{M(b_m),M(b_m+1)\}$. With
  $a_m<b_m$ integers, $a_m+1\le b_m$, so strict monotonicity separates them: the
  two intervals share at most one point, and that point is a common **endpoint**,
  hence rational. Since every code value is irrational, this gives
  **injectivity** at once.
- **Continuity of the coding map** from the diameter estimate against the
  cylinder basis. **Continuity of the inverse** from interiority (the value is
  irrational, the endpoints rational, so the value is interior) plus prefix
  separation, exhibiting the image of a cylinder as a trace of an open set.

I chose this route over the more familiar shift-conjugation
$J(a_0,\dots,a_n)=a_0+1/J(a_1,\dots,a_n)$ because the conjugation needs an extra
induction relating a code's convergents to the shifted code's, and buys nothing:
the single formula $J(a_0,\dots,a_n)=$ *the closed interval with endpoints*
$M_{n-1}(a_n),M_{n-1}(a_n+1)$ delivers separation, injectivity and interiority
together, with no surjectivity-onto-an-image argument and hence no intermediate
value theorem.

### 2.3 Dependencies

Added (all **published** except `def-baire-sequence-space`, which is a draft
**earlier in the same page's reading order**, item 20 against this item's 25):

| dependency | status | what it supplies |
|---|---|---|
| `thm-nested-interval-property` | published | nested closed bounded intervals: nonempty intersection, single point iff lengths tend to zero |
| `def-baire-sequence-space` | draft, same page, earlier | the cylinders of $\mathbb N^{\mathbb N}$ form a basis |
| `def-subspace-topology-top` | published | the subspace topology on $\mathbb R\setminus\mathbb Q$ |
| `lem-real-line-is-a-metric-space` | published | claims 1–3: the usual topology of $\mathbb R$ and its open-interval criterion |

Removed: `def-rat-operations`. It is no longer cited: the proof works in
$\mathbb R$ throughout, and the rationality of the interval endpoints is asserted
by `lem-simple-continued-fraction-convergents-and-cylinders` itself.

`thm-nested-interval-property` deserves a note. gpt-5.6-terra separately rejected
this item because old step 2.1 inferred a single-point intersection while citing
only nestedness and vanishing diameters; that rejection was adjudicated
`confirmed_nonfatal` at step 8 under the 30-second rule and correctly left
unrepaired there. The rewrite discharges it anyway, since the citation is now
present and used.

**No new item was built.** Consistent with the owner's scope limit, the
decomposition lemmas this proof would otherwise deserve — the Möbius endpoint
identity, interiority, prefix separation — are kept **inline** as steps 2.2, 3.1
and 3.3 rather than minted as new page items. Minting them would change the page
manifest, the coverage harvest and the batch scope, which is outside this pass.
If the owner later wants the page to carry them as first-class lemmas, that is a
clean step-6 refactor of one item into four, not a correctness issue.

---

## 3. Boundary pass

Written honestly into the contract entries, replacing the templated
`not_applicable` rows the brief warns about. Seven of the eight rows on the first
item are `checked` with anchored evidence and all eight are on the second; the one
remaining `not_applicable` carries a specific reason, not a template.

**`thm-cech-complete-spaces-are-baire`**

| case | disposition |
|---|---|
| empty | `checked` — the empty space is a legitimate instance and is disposed of in step 1.2's own text; the empty subfamily at step 5.1 has intersection $K$, nonempty because $\overline{O_0}$ is |
| zero | `checked` — the relation only makes successors, so the chain's first term is built by hand at step 3.1 and every later use of $\overline{O_0}$ cites step 3.1, not the relation; both indexed families start at $0$ |
| one | `checked` — constant $(G_n)$ (i.e. $Y$ open in $K$) and constant $(U_n)$ are admitted; nothing requires strict shrinking. A one-point $X$ runs |
| degenerate | `checked` — $X$ already compact ($Y=K$) runs; $U_n=X$ is exactly the countermodel configuration, and is why the construction requires *meeting* $Y$ |
| endpoints | `not_applicable` — **specific reason:** no interval, path, ordered parameter or boundary point occurs; the only index set is $\mathbb N$, whose least element is the `zero` row and which has no greatest |
| nonempty-choice | `checked` — all three selections are from sets proved nonempty first; membership of the carrier set *carries* the nonemptiness condition, so entireness never faces an empty candidate set |
| iff-forward / iff-reverse | `checked` — the Statement is a single implication; the two biconditional facts are each used in one direction only, named; the density equivalence is the one used both ways, at steps 2.1 and 7.1 |

**`thm-simple-continued-fractions-parametrise-the-irrationals`**

| case | disposition |
|---|---|
| empty | `checked` — the only empty object in range is the empty prefix, and the proof never uses it: length-$\ge1$ cylinders already cover the code space |
| zero | `checked` — indices $-1,-2,0$ are handled explicitly, not by the general formula: the two exceptional Möbius maps at step 1.2, the determinant at index $-1$ by hand at step 2.1 (the cited lemma states it only from $0$ up), and the tail-identity base case at step 3.2. $a_0$ ranges over all of $\mathbb Z$, which is why $M_{-1}$ must be defined on the whole line |
| one | `checked` — the comparison with $1$ is strict and load-bearing: interiority holds only for $t>1$, and step 2.3 gets that strictness from irrationality. A remainder equal to $1$ would land on an endpoint |
| degenerate | `checked` — no prefix interval degenerates (positive diameter, recorded at step 2.2); no degenerate division (remainder minus its floor is nonzero; Möbius denominators positive) |
| endpoints | `checked` — **this is the case the theorem turns on.** Endpoints are rational, values are irrational, so no value is ever an endpoint; that gives interiority, and it is why the at-most-one shared point of step 3.3 is harmless |
| nonempty-choice | `checked` — every selection is a single existential instantiation or a unique object; $T$ and the union of cylinders are defined by formulas, so no choice principle is used |
| iff-forward | `checked` — surjectivity and injectivity are proved separately and neither is inferred from the other |
| iff-reverse | `checked` — the two continuity directions are proved by different arguments; a continuous bijection is never assumed to be a homeomorphism |

---

## 4. Ledger rows written

Appended to `research/frontier-14-judge-adjudications.jsonl`, `stage: "step8d-repair"`,
`outcome: "confirmed_fatal"`, `defect_type: "logic"`, `item_sha256` = the
**pre-repair** hash (which matches the existing open row byte for byte):

| id | model | pre-repair `item_sha256` | post-repair hash (in the note) |
|---|---|---|---|
| `thm-cech-complete-spaces-are-baire` | `gpt-5.6-terra` | `6e3b36f4…342c89e7` | `d1a5b235…a876eae7` |
| `thm-simple-continued-fractions-parametrise-the-irrationals` | `deepseek-v4-pro` | `74bc0425…f867a49ba`* | `66ee6201…2003ae53` |

\* full value `74bc04254a0700809dc31873cafc98e82987e68f3d65680011dbc70f867a49ba`.

**One correction to the dispatch brief.** It named `deepseek-v4-pro` as the
rejecting lane for *both* items. That is right for the continued-fractions item,
but not for the Čech item: `research/frontier-14-judge.jsonl` records
`gpt-5.6-terra` rejecting it (`keep:false`) and `deepseek-v4-pro` **passing** it
(`keep:true`), and the existing open adjudication row is against terra. My row
therefore closes the terra rejection. The distinction matters if anyone later
reconciles model-only rejections at step 10.

---

## 5. No rejudge, and no judge stamp

Per the owner's instruction, no rejudge was requested, run, or waited for.
**Neither repaired item carries a `verification.judge` block, and none should be
written for it.** Both items' `verification:` blocks contain `precheck: pass` and
nothing else. That is the correct and honest record: no judge has read either
new proof. The pre-existing `confirmed_fatal` rows remain on the ledger as the
record of the defect; the new rows are the record of the repair.

Both Statements are **byte-identical** to their pre-repair text (verified by
diffing against `HEAD`), so every consumer citation still quotes them exactly:

- `fs-every-metrizable-space-is-cech-complete` quotes the Čech–Baire Statement verbatim in its `[F2]`;
- `ex-baire-sequence-space-and-the-irrationals` quotes the continued-fraction Statement verbatim in its `[F3]`;
- `cor-baire-sequence-space-is-homeomorphic-to-the-irrationals` quotes it verbatim in its `[F2]`;
- `def-simple-continued-fraction-coding` and `lem-simple-continued-fraction-convergents-and-cylinders` make pointer remarks only.

No consumer cites a proof step of either item, so no consumer needed a change.

---

## 6. Gates run, all clean

| gate | result |
|---|---|
| `precheck.mts` (both items) | PASS, PASS — 2 checked, 0 failing. The stratification I authored is already canonical, so no REPAIR renumbering ran and no in-prose step reference was disturbed |
| `depcheck.mjs` | no cycles, all references resolve, no draft items on published pages; neither item appears in the `cited-not-in-deps` warning list |
| `citecheck.mjs` | every recognised elementary move cites a home that states it |
| `rendercheck.mjs` | KaTeX and frontmatter parse |
| `prosecheck.mjs` | 0 errors, 0 warnings |
| `regen-contract-entries.mjs` | both entries regenerated from disk; boundaries and `risk_review` preserved |
| `citation-fidelity.mjs` (batch 3) | every recorded quote appears in its cited item; no widening candidates |
| `merge-proof-contracts.mjs` | dry-run diffed first: **only these two entries change**, 291/291 scope unchanged, then installed |
| `proof-contract.mjs --strict` (merged) | 0 errors, 0 warnings, 291/291 items |
| `risk-report.mjs --require-reviewed` | 0 errors, 291 items routed |
| `finite-smoke.mjs` | 0 errors |
| `content-policy.mjs` (batch 3) | 86 scoped items, 0 errors, 0 warnings |
| `step8-guard.mjs` (`pre-step8` baseline) | 25/25 changes licensed by a confirmed-fatal adjudication. The two `step8-creation` warnings are pre-existing and are not mine |

The `risk_review` note on each entry was extended to say that the disposition now
covers the rewritten text and that the rewrite is unjudged; the previous wording
claimed to cover "the current text on disk", which the rewrite would have made
stale.

---

## 7. Honest remaining gaps

1. **Both proofs are unjudged.** Stated above; it is the instructed outcome, not
   an oversight. Neither has been read by DeepSeek V4 Pro or GPT 5.6 Terra, and
   neither has been read by a proof-refuter subagent: dispatching refuters was
   not part of this scope and would have been a second reading pass, not a
   repair.
2. **Single-reader risk.** These two proofs carry my reading only. Both are long,
   and the continued-fractions one in particular concentrates a lot of elementary
   algebra into steps 1.3, 2.1, 2.2 and 3.2. I checked every identity by hand,
   including the sign conventions at the negative seed indices, and I would
   defend each to a skeptical refuter — but one reader is one reader.
3. **The continued-fractions proof is dense.** It would read better as one theorem
   plus three short lemmas. That is a page-shape improvement, not a defect, and it
   is outside this pass's scope (§2.3).
4. **Nothing else was examined**, per the owner's instruction, so this report makes
   no claim about the rest of the run.
