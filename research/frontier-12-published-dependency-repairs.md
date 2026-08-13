# Run `frontier-12` — published-dependency repairs (Alpha)

**Alpha:** Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window
(`claude-opus-5[1m]`), `--permission-mode bypassPermissions`.
Delegation: CLAUDE.md §"Obvious published-dependency repair" (owner, 2026-08-01),
as extended for citation-precision repairs by AUDIT-WORKFLOW.md §2.3.

---

## R1 — `items/ex-rational-function-field-order.md`, Fact `[L2]` (step 9)

**Trigger.** Paired-judge REJECT / REJECT after the D10 wiring forced the item's
first-ever rejudge. Adjudicated `confirmed_fatal` (`dependency_citation`) against
both lanes; ledger rows in `research/frontier-12-judge-adjudications.jsonl`,
context `ba83023774dc…`, pre-edit `item_sha256`
`3f0f776e1e0a22ad35ee8fc663d9fea8c8449b3bad6e5fc09b6a28bdafeae7e6`.
Full adjudication: `research/frontier-12-alpha-step9.md`.

### The error

The published Fact read:

> [L2] A nonzero real polynomial has finitely many real roots, and beyond all of
> them its values have the constant sign of its leading coefficient;
> $\mathbb{R}[t]$ is an integral domain, so
> $\operatorname{lc}(pq) = \operatorname{lc}(p)\operatorname{lc}(q)$ and a product
> of nonzero polynomials is nonzero
> ([[cex-ordered-field-not-archimedean]], [[thm-reals-ordered-field]],
> [[def-field]]).

It asserts four propositions and attributes them to three items, **none of which
states any of them**:

| conjunct | what the three cited items actually say |
|---|---|
| (a) a nonzero real polynomial has finitely many real roots | `cex-ordered-field-not-archimedean` refutes "every ordered field is Archimedean"; `thm-reals-ordered-field` says $\mathbb R$ is a totally ordered field; `def-field` defines a field. None mentions roots. |
| (b) beyond them its values carry the constant sign of the leading coefficient | not stated by any of the three. `cex-ordered-field-not-archimedean` *derives* the eventual sign of a **quotient** $p/q$ inside its own proof step 1.1, but that is a proof step of another item, not its proposition, and a Fact must state the cited definition/theorem (CLAUDE.md §"Natural mathematical voice and citation fidelity"). |
| (c) $\mathbb{R}[t]$ is an integral domain | stated by `cor-rational-function-field-as-a-fraction-field`, which the item lists in `deps` — but which `[L2]` did not cite. |
| (d) $\operatorname{lc}(pq)=\operatorname{lc}(p)\operatorname{lc}(q)$; a product of nonzero polynomials is nonzero | stated by `thm-polynomial-degree-of-a-product-over-a-domain`, which was in neither `[L2]` nor `deps`. |

Secondary precision defect in the same sentence: "beyond all of them" is
ambiguous, and on the reading "off the root set" the claim is **false** —
$p(t)=t$ has lc $1>0$ and $p(x)<0$ for every $x<0$. Only the reading "to the
right of every root" is true, and only that reading is what step 1.1 used.

Conjuncts (a), (b) and (d) were load-bearing: old step 1.1 (the computation rule
$f\in P\iff\operatorname{lc}(p)\operatorname{lc}(q)>0$, on which the whole item
rests) cited `[L2, L3]` and nothing else.

### The replacement

**1. `[L2]` re-cited, each clause quoting a published Statement.**

> [L2] For a commutative ring $R$ and a nonzero $f \in R[x]$, $\deg f$ is the
> largest index carrying a nonzero coefficient and $\operatorname{lc}(f)$ is that
> coefficient ([[def-polynomial-degree-leading-coefficient-and-monic]]). For a field $F$ the
> polynomial ring $F[t]$ is an integral domain
> ([[cor-rational-function-field-as-a-fraction-field]]), and $\mathbb{R}$ is a
> field ([[thm-reals-ordered-field]], [[def-field]]). If $R$ is an integral
> domain and $f, g \in R[x]$ are nonzero, then $fg \ne 0$,
> $\deg(fg) = \deg f + \deg g$ and
> $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$
> ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

**2. New `[L6]`**, supplying the absolute value the new step 1.1 uses:

> [L6] In an ordered field $|u| = u$ when $u \ge 0$ and $|u| = -u$ when $u < 0$
> ([[def-abs-value]]), and $-|u| \le u \le |u|$ for every $u$
> ([[lem-of-abs-value]]); $\mathbb{R}$ is a totally ordered field
> ([[thm-reals-ordered-field]]).

**3. Conjunct (b) becomes a proved step, not a Fact** — a new step 1.1 deriving
the eventual sign with an explicit threshold. That threshold also supplies
"$p(x)\ne0$ for all $x>X_p$" directly, so conjunct (a) is **no longer needed at
all** and `thm-root-bound-for-polynomials-over-a-domain` was deliberately *not*
added as a dependency. The old step 1.1 becomes step 2.1 and now cites step 1.1
for the sign; steps renumber 1.2 / 2.1→2.1 / 3.1 / 3.2 / 4.1 / 4.2 / 5.1 under
precheck's canonical stratification (adopted unchanged — precheck printed no
REPAIR).

**4. `deps` gains four ids, loses none, and no id was renamed or removed:**
`thm-polynomial-degree-of-a-product-over-a-domain`,
`def-polynomial-degree-leading-coefficient-and-monic`, `lem-of-abs-value`,
`def-abs-value`.

Nothing in the Example section, the title, the Remarks, `sources.references` or
any conclusion of the item changed. Steps that consumers cite are byte-identical
apart from their numbers.

### Validation route

This is delegation route **(b)**, a directly checkable elementary derivation,
written out here in full. Route (a) also applies to the *citation* clauses,
whose warrant is the exact published Statement on disk, quoted below.

**Route (a) — the re-cited clauses, verified against disk:**

- `items/thm-polynomial-degree-of-a-product-over-a-domain.md` Statement:
  "If $R$ is an integral domain and $f,g\in R[x]$ are nonzero, then $fg\ne0$ and
  $\deg(fg)=\deg f+\deg g$, $\operatorname{lc}(fg)=\operatorname{lc}(f)\operatorname{lc}(g)$."
  `[L2]` now quotes this verbatim. Home page `polynomial-rings-and-roots`
  (order 52), published, audited 2026-08-11.
- `items/cor-rational-function-field-as-a-fraction-field.md` Statement: "For
  every field $F$, the polynomial ring $F[t]$ is an integral domain, and
  $F(t):=\operatorname{Frac}(F[t])\dots$ In particular
  $\mathbb R(t)=\operatorname{Frac}(\mathbb R[t])$." Carries clause (c).
- `items/def-polynomial-degree-leading-coefficient-and-monic.md` Definition:
  "$\deg f:=\max\{i\in\mathbb N:a_i\ne0\}$, $\operatorname{lc}(f):=a_{\deg f}$."
- `items/lem-of-abs-value.md` Statement includes "$-|x| \le x \le |x|$";
  `items/def-abs-value.md` gives the case definition.

Every one of these is `status: published`, lives on an A page inside the
`requires` closure of `equivalent-forms-of-completeness-examples` (pages 9, 52
and 53.2 are all in it), and sits strictly earlier in reading order than 126 —
so no forward reference and no `b-leaf` exposure is created. `fwdcheck` and
`depcheck` confirm.

**Route (b) — the eventual-sign derivation, in full.** Let $p\in\mathbb R[t]$ be
nonzero, $m=\deg p$, $a=\operatorname{lc}(p)\ne0$, so
$p(x)=ax^m+\sum_{i<m}a_ix^i$.

- $m=0$: $p(x)=a$ for every $x$; take $X_p=0$.
- $m\ge1$: put $C=\sum_{i<m}|a_i|\ge0$. For $x\ge1$ and $i<m$, $0<x^i\le x^{m-1}$;
  with $-|a_i|\le a_i\le|a_i|$ this gives $-|a_i|x^{m-1}\le a_ix^i\le|a_i|x^{m-1}$,
  and adding the $m$ inequalities gives
  $-Cx^{m-1}\le\sum_{i<m}a_ix^i\le Cx^{m-1}$.
  If $a>0$ then for $x>\max(1,C/a)$,
  $p(x)\ge ax^m-Cx^{m-1}=x^{m-1}(ax-C)>0$, since $x^{m-1}>0$ and $ax>C$.
  If $a<0$, apply that to $-p$, whose leading coefficient $-a$ is positive and
  whose $C$ is the same because $|-a_i|=|a_i|$; then $(-p)(x)>0$, i.e. $p(x)<0$,
  for $x>\max(1,C/(-a))$.

Every move is ordered-field arithmetic in $\mathbb R$ ([L6], [L2], [L3]) plus a
finite iteration of the addition of inequalities. **No new theorem, no new item,
no debatable restatement, no deletion, no reading-order change.**

Corroboration, not load-bearing: the same statement is the standard "end
behaviour" fact of elementary algebra
(<https://courses.lumenlearning.com/odessa-collegealgebra/chapter/use-the-degree-and-leading-coefficient-to-describe-end-behavior-of-polynomial-functions/>),
and the library's own published `cex-ordered-field-not-archimedean` derives it
for $p$, $q$ and $p/q$ at its step 1.1 — text that **both lanes passed on this
same sweep**. No URL was added to the item's `sources.references`: the derivation
is now in the item, so an added reference would change the reader-facing source
list without carrying any load.

### Provenance change

**None, and deliberately.**

- `provenance.statement: literature-derived` — untouched. No character of the
  Example section, the title or any conclusion changed.
- `provenance.proof: ai-generated` — unchanged. The proof was materially altered
  and the new step is AI-written; the repair rule says uncertainty must never
  fall toward a sourced label, so it stays `ai-generated` rather than being
  upgraded to `ai-altered` on the strength of the derivation being standard.

### Gates run

| gate | result |
|---|---|
| `precheck.mts` (item) | PASS, `direct`; no REPAIR output — my stratification is already canonical |
| `depcheck.mjs` (repo) | 1 error, `published-unaudited` on this item only; that is the certification this repair is waiting for, and `cited-not-in-deps` does **not** fire on it |
| `fwdcheck.mjs` (repo) | OK |
| `extcheck.mjs` (repo) | OK |
| `citecheck.mjs` (item) | OK |
| `rendercheck.mjs` (item) | OK |
| `prosecheck.mjs` (item) | OK |
| `impact-audit.mjs` | exit 0 against `research/frontier-12-step9-impact.json`, snapshots `pre-step9-l2-repair` → `after-step9-l2-repair-final` |

### Impact closure

Receipt: `research/frontier-12-step9-impact.json`. 1 changed interface, 2
affected items, both dispositioned, queue closed:

- `cex-q-not-dense-in-an-ordered-field` — **still-licensed**. Its `[L2]` cites
  this item for exactly "$0<1/t$, and $1/t<q\cdot1$ for every rational $q>0$";
  both survive verbatim as steps 3.2 and 4.1 (were 2.2 and 3.1).
- `ex-cauchy-complete-not-complete-field` — **not-load-bearing**. A contrast
  mention in a Remark; no Fact of that item cites this one and it is not in its
  `deps`.

### What is still owed, and by whom

1. **Certification by an independent reader.** *No author certifies its own
   repair* — Alpha's is certified by a Step-6 reader (Sol, read-only). Until then
   `depcheck` correctly fails `published-unaudited`. The public stamp to write is
   `verification.verified` with `scope: published-dependency-repair` and
   `delegated_by: owner`. **Alpha has deliberately not written it.**
2. **Paired rejudge of the final text**, both lanes, `--items
   ex-rational-function-field-order`. Post-repair `item_sha256`
   `ab3f55bfd0a7fae27b9077f4acc6b832e4845022a2912d05df6b9a289edf0c9f`.
