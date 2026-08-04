# Wave 3 — published-dependency repair record

One repair, authorised by the owner in session on 2026-08-04 after the
orchestrator reported the defect and the closed impact queue. Protocol:
`CLAUDE.md` §"Obvious published-dependency repair".

Dedicated touch baseline: `research/audit/wave3-touches.json`, snapshot
**`pre-realpower-repair`**, taken before the first edit; `post-realpower-repair`
after.

## R1 — `def-real-power-by-rational-supremum` had a spurious reciprocal

**Page:** `library/real-analysis/the-logarithm-and-general-powers.md` (published,
outside wave-3 audit scope — both items already carry component provenance).

**Found by:** Audit-Alpha (`claude-opus-5`) at A6, while checking a wave-3
citation from `rem-real-exponents-deferred` into this page. Alpha repaired the
in-scope side (removed the reference and the `forward_refs` entry) and
**correctly declined the out-of-scope repair**, reporting it for the owner
because `CLAUDE.md` bars a partial public repair when consumers sit in an
unresolved impact queue. The orchestrator then measured the queue, found it one
item deep and closing, and put it to the owner, who authorised the repair.

### The old error

For $0<a<1$ the Definition read

    a^{[x]} := 1/(a^{-1})^{[-x]}

Since $a^{-1}>1$, the inner value is $(a^{-1})^{-x}=a^{x}$, so the definition
yields $a^{-x}$. **Numerical witness:** $a=\tfrac12$, $x=1$ gives
$1/\bigl(2^{[-1]}\bigr)=1/\tfrac12=2$, whereas $a^{x}=\tfrac12$. Two reciprocals
where one was intended.

**Consequence:** `thm-rational-supremum-power-agrees-with-exp` — "for every $a>0$
and $x\in\mathbb R$, $a^{[x]}=a^{x}$" — was **false for every base in $(0,1)$**.
The theorem's own step 3.1 reproduced the error.

### The replacement

`def-real-power-by-rational-supremum`

- subunit clause → $a^{[x]}:=1/\bigl((a^{-1})^{[x]}\bigr)$. Explicit parentheses
  were added because the original `1/(a^{-1})^{[-x]}` is ambiguous under
  ordinary precedence and one of the two readings is self-referential.
- the existence paragraph now cites `lem-rat-embeds-dense`, `thm-of-archimedean`,
  `lem-rational-power-monotone`, `def-complete-ordered-field` and
  `def-upper-bound` at the exact points they are used, and records that the
  supremum is **strictly positive** — which is what makes the reciprocal legal.

`thm-rational-supremum-power-agrees-with-exp`

- `[L1]` now reproduces all three defining equations verbatim, replacing the
  synthetic summary "subunit bases are defined through reciprocals and base one
  is constant" — the exact construction the owner's citation-fidelity rule
  (2026-07-30) forbids.
- new `[L4]` cites `thm-real-power-laws` for $a^{r+s}=a^ra^s$, $(ab)^r=a^rb^r$,
  $(a/b)^r=a^r/b^r$, $(a^r)^s=a^{rs}$; `thm-real-power-laws` added to `deps`.
  It is on the same page and earlier in reading order, so the edge is legal.
- step 3.1 now derives the subunit case: step 2.1 at base $a^{-1}>1$ and the same
  exponent $x$ gives $(a^{-1})^{[x]}=(a^{-1})^{x}$; `[L4]` with $r=-1,s=x$ gives
  $(a^{-1})^{x}=a^{-x}$; `[L4]` again gives $a^{-x}a^{x}=a^{0}=1$, hence
  $1/a^{-x}=a^{x}$.

### Validation route

Elementary and directly checkable: the correction is verified by substitution
($a=\tfrac12$, $x=1$ gives $1/(2^{[1]})=\tfrac12$; $x=0$ gives $1/1=1$; $x=-1$
gives $1/(2^{[-1]})=2$), and by the exponent laws already published on the same
page. No new theorem, no deletion, no id change, no reading-order change.

### Judges — three rounds, each rejection closed by a real fix

| round | target | DeepSeek V4 Pro | GPT 5.6 Terra |
|---|---|---|---|
| 1 | theorem | reject — step 3.1 uses the real-power laws with no fact supplying them | reject — same, independently |
| 1 | definition | reject — completeness not cited | reject — supremum not shown nonzero |
| 2 | theorem | **pass** | reject — `[L1]` omits the defining equation, so step 3.1 is not licensed by its cited fact |
| 2 | definition | reject — completeness | **pass** |
| 3 | theorem (final context) | **pass** | **pass** |

Both lanes independently found the missing `thm-real-power-laws` dependency in
round 1 — a defect the orchestrator introduced while making step 3.1 explicit.
Terra's round-2 rejection produced the `[L1]` fidelity fix. Every rejection was
closed by adding a citation the proof actually needs, never by argument.

**One rejection is open and is NOT adjudicated here.** DeepSeek continues to
reject the definition: citing `def-complete-ordered-field` supplies the
definition of completeness but no theorem establishing that $\mathbb R$ is
complete. **Alpha is the sole adjudicator of a paired-judge rejection (owner,
2026-07-31), and the orchestrator authored this repair, so it adjudicates
nothing here.** Routed to Alpha at A8 with the observation — not the finding —
that in this library $\mathbb R$ is introduced as a complete ordered field, so
the definition may be the license rather than a placeholder for one.

Consequently **no `verification.judge` stamp is written for the definition**: the
honesty rule is that a stamp records a two-lane pass, and this is not one.

### Impact closure, from the dedicated baseline

`impact-audit --from pre-realpower-repair --to post-realpower-repair`:
**1 changed public interface, 3 affected items.** The theorem's proof change is
correctly not a public-interface change — its Statement is untouched.

| consumer | disposition | evidence |
|---|---|---|
| `thm-rational-supremum-power-agrees-with-exp` | **repaired** | step 3.1 rewritten and `[L1]`/`[L4]` corrected; both lanes pass the final text |
| `cor-real-power-as-rational-limit` | **still-licensed** | its `[L1]` cites only the theorem's Statement, which is unchanged. Its own claim that the limit "equals the rational-supremum value $a^{[x]}$" was **false for $0<a<1$ by inheritance before this repair and is true after it** — the repair strengthens it, and no edit is needed |
| `ex-two-to-sqrt-two-by-two-real-power-constructions` | **still-licensed** | same `[L1]` route; its base is $2>1$, so the subunit clause never applied to it |

### Independent certification — CERTIFIED

A **GPT 5.6 Sol** reader, a different family from the `claude-opus-5` orchestrator
that authored the repair, read the final text of both items from disk and
returned `VERDICT: certify`. An earlier certifier was killed mid-run because the
text changed under it after Terra's round-2 finding; certifying text that no
longer exists is worse than no certification, so it was re-dispatched on the
final text.

What it verified independently, not by deferring to the lanes:

- The corrected clause is right for every $0<a<1$ and every real $x$, checked at
  $x=0$, $x<0$ and $x>0$, via $b=a^{-1}>1$ and
  $a^{[x]}=1/b^{[x]}=1/b^{x}=1/a^{-x}=a^{x}$.
- The denominator is nonzero because the $b>1$ supremum is proved strictly
  positive, and each of the nonemptiness, upper-bound, existence and positivity
  claims has an on-disk citation.
- The Remark and the title's promise of "the reciprocal convention below base
  one" both agree with the corrected formula.
- `[L4]` matches the Statement of `thm-real-power-laws` exactly, and that theorem
  is in `deps` and earlier on the same page.
- Step 3.1 closes, including the $a=1$ case.
- Both consumers are `still-licensed`, with the route named in each case.

**It refuted DeepSeek's open rejection, with evidence.** `def-complete-ordered-field`
states exactly the least-upper-bound axiom being invoked, and
`library/real-analysis/foundations-of-the-real-numbers.md` adopts the
complete-ordered-field abstraction *after* establishing that the library's two
real constructions satisfy it. Within that standing convention the citation
identifies the applicable axiom rather than trying to prove completeness from a
definition. **This is evidence for Alpha, not an adjudication** — the
adjudication is still Alpha's to make at A8.

It also located three independent sources for the subunit convention, including
Zakon's $a^r = 1/(1/a)^r$ and a lecture-note form $a^x=(1/a)^{-x}$, both
equivalent to the corrected clause.

### Provenance and stamps

`provenance.statement` was already `ai-altered` on both items and stays so; the
theorem's `provenance.proof` was already `ai-generated` and stays so (an
already-generated component remains generated). The obsolete
`verification.audited: 2026-08-02` was removed from both. **No
`verification.audited` is written** — that field is the owner's alone.
`verification.verified` with `scope: published-dependency-repair` and
`delegated_by: owner` is now written on both items, naming the certifying Sol
reader as `model` — not the orchestrator that authored the repair.

**No `verification.judge` stamp is written on either item.** The theorem earned a
genuine two-lane pass on its final context, but these items are not in the wave-3
manifests, so `apply-judge-stamps` has no receipt to validate against and a
hand-written stamp would be an unverifiable claim. The verdicts live in the table
above instead, which is the honest record. The definition has no two-lane pass at
all and must not be stamped under any circumstances.

### Gates

`precheck` PASS · `reflow` unchanged · `rendercheck`, `citecheck`, `fwdcheck`,
`extcheck`, `prosecheck`, `depsource` all exit 0 · **`depcheck` now returns "OK —
no cycles, all references resolve, no draft items on published pages"**, the
`published-unaudited` class empty again.
