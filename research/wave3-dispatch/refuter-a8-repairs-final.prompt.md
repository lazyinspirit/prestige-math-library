# Independent certification of three Audit-Alpha repairs — wave 3, step A8

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on you.** Use
> commands already allowed inside the workspace sandbox; choose non-escalated
> forms and never ask the owner to approve a shell command. If an indispensable
> operation has no escalation-free form, report a blocker instead of prompting.

You are a **read-only independent reader** in repository
`/root/Projects/prestige-math-library`. You are GPT 5.6 Sol. You write nothing:
you return a verdict and evidence in your final message.

Audit-Alpha (`claude-opus-5`) authored three repairs at step A8 of the wave-3
published-page audit. **No author certifies its own repair**, so you certify them
from the current text on disk — not from this description, which you must treat
as a claim to be checked.

## What to check, per item

Read each item file in full, and read every dependency you need to judge the
claim. Then answer, for each: **is the repaired text true, is it faithful to the
item it cites, and did the repair break anything else in the item?**

### 1. `items/lem-rational-power-laws.md` — Fact `[L6]`

Before: `[L6]` read "$0^{t} = 0$ for every rational $t > 0$, and $0^{t}$ is left
undefined for $t \le 0$."
After: it reads "$0^{t} = 0$ for every rational $t > 0$, while $0^{t}$ is left
undefined for rational $t < 0$ and the convention $0^{0} = 1$ of
[[def-integer-power]] is untouched."

Alleged defect: the old text contradicted its own cited `def-rational-power`,
which sets $0^0 = 1$. Check that against `items/def-rational-power.md` and
`items/def-integer-power.md`. Then check that the new `[L6]` is faithful to
both, and that steps 3.4 and 4.1 — the only steps citing `[L6]` — are still
licensed by it (they use $t > 0$ only; verify that).

### 2. `items/def-rational-power.md` — the third bullet of `## Remarks`

The sentence "There is no $a^{x}$ for irrational $x$ in this library" was
deleted; the bullet now says only that nothing **on this page** is a limit, a
series or a continuous function, and points at `rem-real-exponents-deferred` for
the deferral and for where the library later defines $a^x$ for real $x$.

Alleged defect: published-claim decay. Verify from disk that
`items/rem-real-exponents-deferred.md` does record `def-real-power` and
`thm-real-power-laws` as published, and that `items/def-real-power.md` exists
and defines $a^x$ for real $x$. Then check the replacement bullet asserts
nothing false and still tells the reader what the old one told them about this
page.

### 3. `items/rem-connectedness-conventions.md` — numbered section 3

Before, section 3 said: "Dropping the word *open* from $V$ gives a weaker
condition at a point, called *connectedness im kleinen* in the literature."
After, it distinguishes two things: asking for a connected $V \subseteq U$ that
is a **neighbourhood** of $x$ (the real connectedness im kleinen), versus
dropping *open* outright, which it now says asks nothing at all because $\{x\}$
always qualifies.

Check independently: (a) is the old sentence really vacuous as written — does
$V=\{x\}$ satisfy it for every $x$ and every open $U \ni x$ under
`items/def-connected-space.md` and `items/def-locally-connected.md`? (b) is the
new sentence the standard definition of connectedness im kleinen? (c) is the
weaker condition genuinely weaker than local connectedness at a point, so that
the surrounding sentences still hold? (d) does the item's own inherited
convention ("A neighbourhood need not be open") make the new wording coherent?

## Also check, for all three

- The stale `verification.judge` and `verification.verified` blocks were deleted
  from all three items. Confirm from disk that neither is present, so no stamp
  claims a reading of text that no longer exists.
- Nothing else in the three files changed. `git diff` the three paths and say so.
- No id, no `deps` entry and no reading order changed.

## Return

Your final message must be, on its own line, `VERDICT: certify` or
`VERDICT: refute`, followed by per-item evidence: what you checked, the exact
text you relied on, and for a refutation the concrete false claim or unlicensed
inference. If you certify some and refute others, say `VERDICT: refute` and name
which. Do not edit any file.

### 3b. `items/rem-connectedness-conventions.md` — numbered section 2 (SECOND repair)

After the first repair, a judge lane rejected the item over **section 2**, and
Audit-Alpha upheld that finding and repaired it too. Before, section 2 said
"disjoint open sets in a subspace need not be separated in the ambient space".
After, it says the ambient open sets witnessing a separation of a subspace need
not be disjoint in $X$, being required to be disjoint only *on* the subspace.

Check independently: (a) is the OLD claim really false — if $U,V \subseteq S$
are disjoint and both open in $S$, must they be separated in $X$? Prove or
disprove it yourself; do not take Alpha's word. (b) is the NEW sentence a
correct account of what `items/def-connected-space.md` says, and is the quoted
clause verbatim from that item? (c) does the paragraph still say something true
and useful about why both vocabularies are kept?
