# Run `frontier-12` — Alpha step-8c: the fourth objection to `lem-green-type-ii-boundary-identity`

**Alpha:** Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window
(`claude-opus-5[1m]`), `--permission-mode bypassPermissions`.
**Date:** 2026-08-13. **Scope:** the single DeepSeek rejection from the 8b
rejudge, and the thrice-touched escalation question.

**Status: COMPLETE. Adjudication `confirmed_nonfatal`. No edit.** Under R1 the
rejection closes on its exact-hash ledger row with no content, page, frontmatter,
contract, impact or judge mutation. `step8-guard` still passes 3/3 — unchanged,
because I changed nothing. **No rejudge is owed and the rejudge set is now empty.**

**Convergence verdict: converging, and this fourth objection is the first one
that is not a defect licensing an edit.** §4. Do **not** narrow the Statement;
narrowing here would make the library strictly worse. §5.

---

## 1. The objection, and what the cited theorem actually says

`item_sha256` `852a1e5161dcd689…` (judge-ledger normalization) =
`2add89e0604e7296…` (`item-hash.mjs` normalization). Terra PASS
("Verified the oriented boundary calculation, slice identity, and
coordinate-swapped Fubini justification from the cited facts"), DeepSeek REJECT:

> Fact [L4] overstates the cited Newton-Leibniz theorem: it asserts the endpoint
> increment for any interior derivative of a continuous function, but the theorem
> requires the derivative to have a Riemann-integrable extension agreeing with G'
> on the interior. Without that assumption the claim is false.

I opened `thm-newton-leibniz-with-interior-derivative` on disk. Its Statement:

> Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and
> differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is **Riemann integrable**
> and $f(x)=G'(x)$ for $a<x<b$, then $\int_a^b f=G(b)-G(a)$.

Its title says so too, at length: "…and a Riemann-integrable extension of the
interior derivative". The Fact under attack:

> [L4] The integral of an interior derivative of a continuous function is its
> endpoint increment ([[thm-newton-leibniz-with-interior-derivative]]).

**DeepSeek is right on the merits of the restatement.** [L4] omits a hypothesis
the theorem carries, and CLAUDE.md §"Natural mathematical voice and citation
fidelity" forbids exactly that — "no changed domain, quantifier, **hypothesis**,
direction or conclusion". The omission is not nothing: a differentiable function
can have a bounded derivative that is not Riemann integrable, so the short form
is not a harmless abbreviation of a universally valid statement.

That settles that a defect exists. It does not settle fatality, and fatality is
the only question R1 lets me act on.

## 2. The item already discharges the missing hypothesis — twice, in writing

The dispatch asked whether the item establishes the integrable-extension
condition somewhere DeepSeek did not read. **It does, and not by a lucky
accident.**

Step 1.2 applies [L4] in the $x$ variable at fixed $y$ with $G(x)=Q(x,y)$ on
$[\lambda(y),\rho(y)]$. The theorem's four hypotheses:

| hypothesis | supplied by |
|---|---|
| $a<b$, i.e. $\lambda(y)<\rho(y)$ | step 1.2 restricts to this case explicitly and disposes of $\lambda(y)=\rho(y)$ separately (both sides zero) |
| $G$ continuous on $[\lambda(y),\rho(y)]$ | **[given]**: $Q$ is $C^1$ on an open neighbourhood of $D$, and the segment lies in $D$ |
| $G$ differentiable on the interior | **[given]**: same |
| an integrable $f$ agreeing with $G'$ on the interior | $f=\partial_xQ(\cdot,y)$, continuous on the compact interval, hence integrable — **[given] + [L8]** |

**[L8] is a declared Fact of this item**: "Every continuous real function on a
compact Jordan measurable set is Riemann integrable over that set"
([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]). I checked
its Statement on disk: it quantifies over $E\subseteq\mathbb R^m$ for arbitrary
$m$, so $m=1$ and a compact interval are inside it.

So the closure does not require the reader to leave the page, and does not even
require a cross-phase borrow: **[given] and [L8] are both phase-0 material
already available to step 1.2.** The only thing missing is `L8` inside step 1.2's
justification bracket and a clause in [L4].

And the item **writes the inference out anyway**, at step 2.2, for the *same
function on the same interval*:

> the section $\{x:(x,y)\in D\}$ is the compact interval $[\lambda(y),\rho(y)]$,
> whose boundary is at most two points, so it is Jordan measurable in $\mathbb R$;
> the restriction $x\mapsto\partial_xQ(x,y)$ is continuous there, so [L8] makes
> it integrable over that section.

That is verbatim the integrable extension [L4] needs. Step 1.2 cannot *cite* it —
1.2 is phase 1, 2.2 is phase 2, and precheck's canonical stratification put them
there — but the sentence is on the page, forty lines below the step that needs
it, and it is the same claim.

## 3. Fatal or nonfatal — the line, applied honestly, and a falsification test

My step-8 line, which closed 317 rows and which I applied against myself at 8b:

> **NONFATAL** iff the mathematics is correct and complete in substance and the
> defect is in the local citation or justification, **including cases where the
> named route does not work but a correct one is immediate from the item's own
> facts.**

At 8b that "including" clause **failed**: the named route genuinely did not work
(a Type II region is not an instance of the vertical-graph Fubini theorem at all),
and no route existed from the item's declared facts — the reader had to go find
`thm-linear-images-scale-jordan-content-by-absolute-determinant`, which the item
did not cite. That is why I called it fatal, and I still would.

Here the clause **passes, in its strongest form**: the named route *does* work,
the theorem *does* apply, and the missing hypothesis is discharged by two facts
the item already declares. This is nonfatal.

### The falsification test, and it runs the opposite way from 8b

At 8b the asymmetry between the twin lemmas was the tell that the finding was
substantive. Here the same test points the other way, and hard:

- `lem-green-type-i-boundary-identity` carries **[L4] byte-identical** to this
  item's, in the same position, applied the same way in its own step 1.2 (I
  diffed both lines).
- **DeepSeek passed it**, at 03:37:44 — **thirty minutes before** rejecting this
  one at 04:07:17 — with the reason: *"Verified boundary arc orientations and
  signs, **slicewise Newton-Leibniz including endpoint equality cases**, and the
  Fubini substitution are all licensed by the cited facts **under the Type I and
  C1 hypotheses**; no defect found."*

Same lane, same round, same fact, same application, opposite verdict — and in the
passing verdict DeepSeek names "the C1 hypotheses" as what licenses the
Newton–Leibniz step, i.e. it supplied the very inference it now says is missing.
That is the signature of a stochastic resample, not a finding. At 8b the
complaint landed on precisely the one twin where the library's tool did not fit;
here it landed on one of two identical uses.

### The corpus check, which is the useful part

Thirteen items cite `thm-newton-leibniz-with-interior-derivative`. Splitting by
whether the restatement carries the integrability hypothesis:

| restatement | items | status |
|---|---|---|
| **states the hypothesis** (7) | `cor-newton-leibniz-with-finitely-many-exceptional-points`, `ex-bounded-discontinuous-derivative-that-is-riemann-integrable`, `thm-integration-by-parts-with-interior-derivatives`, `thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators`, `thm-substitution-with-riemann-integrable-inner-derivative` | **all published**, one owner-audited today |
| | `thm-gradient-theorem-for-line-integrals`, `thm-poincare-lemma-for-star-shaped-domains` | draft, **batch 4** |
| **omits it** (6) | `cex-the-one-form-y-dx-is-path-dependent`, `ex-constructing-a-potential-on-an-open-rectangle`, `ex-gradient-theorem-for-a-polynomial-potential`, `ex-scalar-line-integral-over-a-unit-semicircle`, `lem-green-type-i-boundary-identity`, `lem-green-type-ii-boundary-identity` | draft, **all six batch 4** |

So: **every published citer states the hypothesis; every short-form citer is a
batch-4 draft of this run**, and batch 4 is internally inconsistent — its Beta
wrote the full form twice and the short form six times.

This is worth having on the record for two reasons. First, it kills the "house
style" defence: the short form is a batch-4 authoring habit, not a library
convention, and DeepSeek found a real one. Second, and decisively for R1, it
means **the correctly-scoped repair is six items, not one.** Editing this item
alone would fork it against five siblings including its byte-identical twin;
editing all six would void `lem-green-type-i-boundary-identity`'s fresh double
PASS at `151305499b220001` — an item no lane has ever faulted on this point — and
force a rejudge of six items and their pair contexts to fix a justification
bracket. That cascade, for a defect that changes no mathematics, is precisely the
"unbounded loop converging on nothing" R1 was written to stop, and precisely why
R1 assigns citation-precision polish to step 6.

**Adjudication row** appended to `research/frontier-12-judge-adjudications.jsonl`
(row 329):

```json
{"id":"lem-green-type-ii-boundary-identity","model":"deepseek-v4-pro",
 "context_sha256":"1a9a26c69218e8c8e…","item_sha256":"2add89e0604e7296…",
 "outcome":"confirmed_nonfatal"}
```

`item_sha256` is the `item-hash.mjs` digest, matching row 328's normalization and
`step8-guard`'s. `context_sha256` is the current frozen context, which I
recomputed rather than copied: `judge.mts --context-hash` returns
`1a9a26c69218e8c8e62e302176fd769c98a7ce2088b46028769bfe24091956f2`, an exact
match, so `level-coverage`'s `judgeOutcomeKey` lookup hits and the item downgrades
from the hard error `judge-adjudication-missing` to the warning
`judge-verdict-adjudicated-nonfatal`. `confirmed_nonfatal` takes no
`defect_type`; that field is fatal-only.

## 4. The escalation answer: converging, and here is the shape of it

| touch | defect | severity | found by |
|---|---|---|---|
| step 6 | Newton–Leibniz applied without discharging the endpoint sections | real gap | reader 3 / refuter-2 |
| step 8 | that repair asserted $\lambda(c)=\rho(c)$ — **false for a square** | **false assertion in the proof** | **both lanes, independently** |
| step 8b | [L3] cited a vertical-graph theorem for a horizontal-graph region — no route from the item's facts | **missing step** | one lane (cross-family) |
| step 8c | [L4] omits a hypothesis **the item discharges from its own declared facts** | citation precision | one lane; **same lane passed the identical fact in the twin 30 min earlier** |

The sequence is not just decreasing in severity, it changes **kind** at the
fourth term. Touches 2 and 3 were defects in the *argument*: one asserted
something false, one had no route to its conclusion. The fourth is a defect in
the *prose of a fact label*, over an inference the item performs in writing
elsewhere on the page. A proof that keeps yielding real fatal defects is
converging or false; this one has stopped yielding them.

Three further reasons I am confident this is convergence and not patching toward
something unlicensable:

1. **The Statement has never changed across four judge rounds and has never been
   challenged by any lane** — not at step 7 (908 verdicts), not at step 8, not at
   8b, not now. Every objection has been to the proof's internals. Nothing about
   the claim is in doubt: Green's theorem for a Type II elementary region is
   standard (Lebl, *Basic Analysis II* §10.6), and it is *true*.
2. **The library licenses it in full.** Every ingredient is published and
   owner-audited: `thm-jordan-fubini-by-sections` with its symmetric-block
   clause, `thm-fubini-over-a-region-between-continuous-graphs`,
   `thm-linear-images-scale-jordan-content-by-absolute-determinant`,
   `thm-continuous-functions-on-compact-jordan-sets-are-integrable`,
   `thm-newton-leibniz-with-interior-derivative`. There is no gap the library
   cannot reach and no external fallback anywhere in the argument. Contrast the
   thing that genuinely *is* out of scope here — the Jordan curve theorem — which
   D2 already walled off and `rem-greens-theorem-jordan-domain-limitation`
   documents. The Type II lemma never approaches it.
3. **The residual surface is now essentially zero.** Steps 1.1, 1.2 and 4.1 have
   survived three independent full readings unchallenged on their mathematics;
   1.3, 2.2 and 3.1 are four exact citations plus one elementary set identity
   ($\sigma\circ\sigma=\mathrm{id}$).

I will also mark a prediction that was on the record *before* this verdict came
in. My 8b report §4 said: *"If a further rejudge faults this text, my expectation
is a citation-precision nitpick on the interval sections — nonfatal, and identical
to something already published upstream."* What arrived was a citation-precision
nitpick on the Newton–Leibniz fact, nonfatal, and identical to wording in five
other items in this batch including the item's own twin. Near-exact. I am not
claiming clairvoyance — I am claiming the defect surface was already
characterized well enough at 8b to predict the shape of the next resample, which
is itself what convergence looks like.

## 5. Why I am *not* narrowing, and what narrowing would cost

The dispatch offers narrowing as an available and correct outcome. It is the
right thing to offer and the wrong thing to do here, and I want the reasoning
explicit rather than a bare refusal.

Narrowing is correct when a claim **cannot be closed honestly**. This one is
closed honestly right now. The three alternatives named in the dispatch:

- **A different proof route** — there is nothing to route around. The route is the
  one the library owns, and Terra has now verified it end to end by name
  ("coordinate-swapped Fubini justification").
- **A narrowed Statement** — narrowing to, say, regions with both descriptions
  would re-break the symmetry with the Type I twin, leave the true general
  statement unproved after the library has assembled every piece of it, and force
  `thm-greens-theorem-for-finite-unions-of-elementary-regions` back onto the
  coincidence that its elementary pieces happen to have Type I descriptions —
  a dependence my 8b repair deliberately *removed*.
- **Deferring the Type II lemma and scoping Green's theorem to Type I plus a
  written transpose** — this is the worst of the three. The transpose *is* the
  content of the Type II lemma; deferring the lemma and writing the transpose
  inline relocates the same argument into a theorem that would then carry it
  undecomposed, against the scaffold-richness rule, and it would strand
  `cor-area-as-a-line-integral-for-elementary-regions`'s $\oint x\,dy$ term.

Consumers, for completeness, since the dispatch asked them to be named:
`thm-greens-theorem-for-finite-unions-of-elementary-regions` (still-licensed),
`cor-area-as-a-line-integral-for-elementary-regions` (not load-bearing on this
lemma), `rem-greens-theorem-jordan-domain-limitation` (still accurate). All three
were read in full at 8b §5 and **none is affected**, because nothing changed. The
`plan_reconciliation` row I wrote at 8b likewise stands: the Statement is
unchanged, so it still matches.

## 6. Gates

No edit was made, so every gate result from 8b §6 stands unchanged. The two that
bear on this adjudication I re-ran:

| gate | result |
|---|---|
| **`step8-guard`** (baseline `pre-step8`) | **OK — 4172 items at baseline, 3 changed, 0 created, 0 deleted; 3/3 licensed by a `confirmed_fatal` adjudication** |
| `judge.mts --context-hash` (row key check) | context `1a9a26c69218e8c8e…` — **exact match** to the adjudication row |

The guard is unchanged at 3/3 rather than 4/4 precisely because a
`confirmed_nonfatal` mutates nothing; a fourth licensed change would have meant I
had broken R1.

## 7. What the orchestrator should do now

1. **Nothing on this item.** The rejudge set is **empty** — my 8b report listed
   `lem-green-type-ii-boundary-identity` as the one item owing a rejudge; that
   rejudge ran, and its single rejection is now adjudicated at the current hash.
2. `apply-judge-stamps` for the three repaired items. All three now have complete
   current pairs: `cor-potentials-differ-by-a-componentwise-constant`
   (`8a659ab4f73c5c05`, both PASS), `lem-green-type-i-boundary-identity`
   (`151305499b220001`, both PASS), and `lem-green-type-ii-boundary-identity`
   (`852a1e5161dcd689`, Terra PASS + DeepSeek adjudicated nonfatal).
3. **The 126 open `plan_reconciliation` rows remain the level's gating blocker**,
   unchanged from 8b §7. That is Beta authorship work, not step-8 work.

**Step 8 is closed.** Every rejection across the sweep, the rejudge and this
second rejudge is adjudicated at an exact hash; every edit is licensed by a
`confirmed_fatal`; no nonfatal row mutated a byte.

## 8. One thing to carry forward

Batch 4's six short-form Newton–Leibniz restatements are a **real** finding of
DeepSeek's, correctly scoped as six items and correctly timed as step-6 work. It
is too late to act on them in this run without paying the R1 cascade for zero
mathematical gain, and they are drafts, so they are not going out as published
error — but they are also not going to fix themselves, and the next run's step 6
is where they belong. The generalizable lesson is narrower than "check citations":
**when a Beta abbreviates one dependency, it tends to abbreviate it the same way
everywhere it uses it**, so a single citation-fidelity hit is worth grepping
across the batch immediately rather than treating as a one-item defect. Had that
grep run at step 6, this would have been eight lines of editing and no judge
rounds at all.
