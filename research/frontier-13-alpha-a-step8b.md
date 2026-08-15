# frontier-13 — Step 8b: Alpha adjudication of the two both-lane post-repair rejections

Lead Alpha, sole adjudicator (owner, 2026-07-31). Fatal-only under R1 (owner,
2026-08-03). Baseline `pre-step8b`. Both items were opened from disk, and so was
every dependency and every consumer named below.

**Result: 4 rejection rows, all four `confirmed_fatal`, both items repaired.**
The judges were right on all four counts, and two of the four refute my own
step-8 repair rather than the original text. The both-lane signal held again:
100% conversion on these two, against 10.0% for both-lane rows in the main sweep.

---

## 1. `cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field`

Pre-step8b `item_sha256`: `e1c5947d1e4e8bfa1c60cd3f35f0eb9db7cb3354929a12a1277893d87b19c729`

### 1a. deepseek — `confirmed_fatal`, `other`

**The counterexample stands, and it refutes my step-8 repair.** Verified by
computation before deciding anything:

```
n=0, R=Z, S=Z/2, f=1, P=0, Q=2
  (a) P=Q in R        : False
  (b) images equal in S: True
  two conditions coincide? False
```

$f(t)=t^0=1$ is monic of degree $0$ and splits as the empty product, so $n=0$ is
a case the Statement permits. My step-8 sentence said "when $n=0$ there are no
variables, both polynomial rings are $R$, and the two conditions coincide," on
the reasoning — recorded verbatim in my step-8 ledger note — that "the evaluated
equality reads $P=Q$."

It does not. The roots live in the commutative $R$-algebra $S$, so the evaluated
equality is an equation **in $S$**; the item's own "this value lies in the image
of $R$" fixes that reading, and for $n\ge1$ no other reading type-checks. The
representing identity $P=Q(e_1,\ldots,e_n)$ is an equation **in $R$**. Those
differ exactly when $R\to S$ is not injective, and $\mathbb Z\to\mathbb Z/2$ is
deepseek's witness.

No repair to the proof saves the sentence. **Removed** from the Statement and
from step 3.1. The main assertion is untouched and still holds at $n=0$: [L1] at
$n=0$ gives $P=Q$ in $R$, whose image in $S$ is the displayed equality.

### 1b. terra — `confirmed_fatal`, `other`

The other half of the same sentence. I asserted for **every** $n\ge1$ that the
evaluated equality alone does not determine $Q$, with $T_1+a_1$ as witness. Over
the zero ring $R=0$, the ring $R[T_1,\ldots,T_n]$ has a single element, $T_1+a_1$
*is* that element, and $Q$ is trivially determined. The universal claim is false.

**Repaired** by carrying the hypothesis and by justifying the witness instead of
asserting it. Verified numerically at $R=\mathbb Z$, $n=2$, roots $2,3$
($f=t^2-5t+6$), $P=x_1^2+x_2^2$, $Q=T_1^2-2T_2$:

```
Vieta: e1 == -a1 ? True   e2 == a2 ? True
P(alpha) = 13 ;  Q(tuple) = 13 ;  Q+(T1+a1)(tuple) = 13
same evaluation: True ;  Q != Q+(T1+a1) as polynomials: True
```

### What changed

Statement, final sentence — the two false clauses replaced by one true one:

> The uniqueness asserted is uniqueness of the representing identity
> $P=Q(e_1,\ldots,e_n)$, not uniqueness of a $Q$ satisfying the displayed
> evaluated equality: when $n\ge1$ and $R$ is not the zero ring, $T_1+a_1$ is a
> nonzero polynomial vanishing at $(-a_1,a_2,\ldots,(-1)^na_n)$, so
> $Q+(T_1+a_1)$ has the same value there as $Q$.

Step 3.1 — same narrowing, plus the derivation the old text asserted: $T_1+a_1$
has $T_1$-coefficient $1$ hence is nonzero, and the tuple sends it to
$-a_1+a_1=0$. The $n=0$ clause is gone.

---

## 2. `thm-counting-lemma-for-a-fixed-graph`

Pre-step8b `item_sha256`: `95abbe27f5e102b75526eb7ce579a4ba0968e73c366ea72206d69290bf415411`

### 2a. terra — `confirmed_fatal`, `logic`

Right, and I missed it at step 8. The Statement says "a finite simple graph on
labelled vertices $[h]$" and excludes nothing, so $h=0$ is a stated case; step
1.1 then asserted "since $h\ge1$" and chose $\gamma\le(\eta/2)^h/(2h)$, dividing
by zero at $h=0$.

**The theorem is true at $h=0$** — exactly one map $\emptyset\to V(G)$, injective
and vacuously edge-preserving, against an empty product of $1$ — so the honest
repair proves that case rather than narrowing.

**I checked both consumers before deciding, and narrowing was the wrong move.**
`thm-graph-removal-lemma` ("for every finite simple graph $H$") and
`thm-induced-counting-lemma-for-regular-pairs` ("a graph on labelled vertices
$[h]$") both admit $h=0$. Adding $h\ge1$ upstream would have opened the identical
hole in two items I hold no fatal row against — an unlicensed edit under R1 if I
fixed them, an exported defect if I did not.

**Repaired** in step 1.1: dispose of $h=0$ first with $\gamma=c=1/2$, $N=1$, then
assume $h\ge1$ before the division. Statement, title and `deps` byte-identical.

### 2b. deepseek — `confirmed_fatal`, `dependency_citation`

Right, and it is the run's dominant class. `[L1]` read:

> In a regular pair, all but a small fraction of the vertices have the expected
> degree into every candidate set above the regularity threshold.

That is a **uniform** bound — one exceptional set serving all candidate sets at
once. `lem-typical-degrees-in-a-regular-pair` gives no such thing: it fixes
**one** subset $Y'\subseteq Y$ with $|Y'|\ge\epsilon|Y|$ and bounds the
exceptional set for that $Y'$. It was also a synthetic summary of what the lemma
is *for*, which the house citation rule bans outright.

The proof never needed the uniform form — step 3.1 applies it once per neighbour
$j$, and step 4.1 unions the at most $h$ exceptional sets. So this is an inflated
restatement sitting over a sound argument, and the repair is the faithful
restatement, not a strategy change.

**Repaired**: `[L1]` now quotes the lemma's actual two-clause Statement. Step 3.1
names the pair's density $d\ge\eta$, applies `[L1]` to the single subset $C_j$,
derives $(d-\gamma)|C_j|\ge(\eta-\gamma)|C_j|\ge(\eta/2)|C_j|$ from
$\gamma\le\eta/2$, and says the bound is for that one subset.

One mechanical note: my first draft of step 3.1 ended "step 4.1 takes the union
over the neighbours," which `precheck` rejected as `forward-ref-4.1`. Reworded to
state the per-candidate scope without citing a later step.

---

## 3. Boundary re-check across all thirteen step-8 items

The dispatch was right that both repairs skipped the boundary pass. **The
`boundaries` contract row did not merely go unread — it was false on both items,
and it is template-generated.**

Every batch's boundary rows are one sentence per case with the item id
substituted in. `thm-counting-lemma-for-a-fixed-graph` carried
`empty: not_applicable — "no optional empty family or construction beyond the
domain fixed in its hypotheses"` while its own domain is $[h]$ with $h$
unrestricted. `cor-symmetric-polynomial-values-…` carried
`zero: not_applicable — "does not admit a separate zero boundary case"` while its
own Statement discussed $n=0$ in the sentence that was wrong. **And
`regen-contract-entries.mjs` re-emits these rows verbatim** — I ran it on both
items and the boilerplate came back unchanged, so regenerating a contract after a
repair does not re-examine boundaries. I corrected the six affected rows by hand
against disk.

I then did the check myself, reading each item rather than its contract.

| # | item | boundaries that exist | verdict |
|---|---|---|---|
| 1 | `prop-carmichael-function-as-maximal-order` | $n=1$; empty lcm $\ell_0=1$; $r_s\ge1$ so `def-lcm`'s zero case never fires | **clean** — step 3.1 states the $n=1$ identity case, step 1.2 the empty base |
| 2 | `thm-carmichael-function-formula` | $n=1$; $k=1,2,\ge3$ split at $p=2$ | **clean** — empty lcm is $1$ in the Statement; $\lambda(2^k)$ covers all three ranges |
| 3 | `ex-lifting-a-primitive-root-through-powers-of-five` | $k=1$ | **clean** — step 1.1 settles $k=1$, step 1.2 opens at $k\ge2$. Recomputed: ord$(16)=5$ mod $25$, ord$(2)=20$ mod $25$ |
| 4 | `cor-symmetric-polynomial-values-…` | $n=0$; zero ring; non-injective $R\to S$ | **DEFECTIVE** — §1 |
| 5 | `ex-symmetric-reduction-in-two-variables` | char $2$; zero ring | **clean** — step 3.1 states both after the step-8 narrowing to $\mathbb Z$ |
| 6 | `ex-gram-determinant-of-two-vectors` | $u=0$ or $v=0$ | **clean** — the zero list is dependent, $\det G=0$, consistent with `[L1]` |
| 7 | `ex-frobenius-on-f-four` | none | **clean** — recomputed $(a+1)^2=a^2+1=a$ |
| 8 | `ex-f-eight-as-a-polynomial-quotient` | none | **clean** — recomputed $a^3\ldots a^7$; the eight elements listed are eight distinct values |
| 9 | `thm-naturality-of-the-adjunction-…` | identity cases of `[L1]` | **clean** — re-derived both uses: $a=\mathrm{id}_c$ and $b=\mathrm{id}_{d'}$ each type-check against the repaired `[L1]` |
| 10 | `thm-counting-lemma-for-a-fixed-graph` | $h=0$; $e=0$; $h=1$ | **DEFECTIVE** at $h=0$ — §2. $e=0$ and $h=1$ are sound |
| 11 | `lem-typical-degrees-in-a-regular-pair` | $X=\emptyset$; $\epsilon=0$ | **clean** — `def-epsilon-regular-pair` requires $X,Y$ nonempty and $\epsilon>0$, naming $0$-regular separately, so "fewer than $\epsilon\lvert X\rvert$" is never a vacuous impossibility |
| 12 | `thm-triangle-counting-lemma-for-regular-triples` | $c<\epsilon$; $1-2\epsilon=0$ | **clean** — both stated, the step-8 repair |
| 13 | `rem-tower-and-wowzer-bounds-in-regularity` | none — prose remark, no contract entry | **clean** |

**Two of thirteen carried the gap, and they are exactly the two the judges
named.** The other eleven hold up. I looked for the pattern beyond the judges'
reach and did not find it — item 11 was the closest call and the definition
closes it.

---

## 4. Consumers and impact

`thm-counting-lemma-for-a-fixed-graph`'s Statement, title and `deps` are
byte-identical across this window; only `[L1]` and steps 1.1/3.1 changed. The
corollary's Statement changed only in the trailing sentence naming *which*
uniqueness is asserted. `impact-audit` still flags both, correctly, and all ten
consumers are disposed `still-licensed` in
`research/frontier-13-step8b-impact.json`:

```
impact-audit: 2 changed public interface(s), 10 affected item(s)
  cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field: 5 logical, 1 direct citation consumer(s)
  thm-counting-lemma-for-a-fixed-graph: 5 logical, 2 direct citation consumer(s)
errors 0 warnings 0
```

Two dispositions are worth reading rather than skimming:

- `def-discriminant-of-a-monic-polynomial` draws its uniqueness of $D_n$ from
  `thm-fundamental-theorem-of-symmetric-polynomials`, and it is exactly
  uniqueness of the representing identity — which the repaired sentence now
  states correctly. It is **better** supported after the repair.
- `cex-edge-deletion-alone-cannot-prove-induced-removal` instantiates the empty
  graph on **three** vertices: $h=3$, $e=0$, not $h=0$. Unaffected, and $e=0$ is
  now recorded in the contract's zero-boundary row.

---

## 5. Gate output

`precheck` on the two repaired items:

```
PASS items/thm-counting-lemma-for-a-fixed-graph.md (direct)
PASS items/cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field.md (direct)

2 checked, 0 failing — all clean
```

Contracts regenerated in batches 1 and 4, boundary rows hand-corrected, re-merged
and re-checked:

```
proof-contract: 0 error(s), 0 warning(s), 393/393 item(s) checked
finite-smoke: 0 error(s), 16 check(s)
risk-report: 0 error(s), 393 item(s) routed
content-policy: 142 scoped item(s), 0 error(s), 0 warning(s)   [batches 1 and 4]
depcheck: OK — no cycles, all references resolve, no draft items on published pages
fwdcheck: OK — every forward reference is declared, points strictly forward, …
extcheck: OK — every recorded-not-proved statement is a cited remark …
```

`depcheck` and `citecheck` report no finding against either repaired item.

**A gate that was passing under-covered.** Step 8 reported
`proof-contract … 352/352` and `risk-report … 352 item(s) routed`. The seven
batch contracts hold 73+69+76+46+41+50+38 = **393** entries, and
$393-352=41$ is exactly `frontier-13-batch-5.proof-contracts.json`. The step-8
merge omitted that batch file, so both gates ran green over 41 items they never
saw. This run's merge names all seven explicitly and the counts above are the
full level. Nothing in batch 5 was repaired at step 8 or 8b, so no adjudication
rests on the short merge — but the step-8 gate receipt should be read as
352-of-393, and this belongs at step 10.

### `step8-guard --baseline pre-step8b`, verbatim

Against the live tree:

```
step8-guard: baseline "pre-step8b" (2026-08-15T11:34:36.826Z) vs working tree
  4646 item(s) at baseline; 2 changed, 0 created, 0 deleted
  2/2 change(s) licensed by a confirmed_fatal adjudication

OK — every step-8 edit is licensed by a confirmed fatal defect
```

Window closed so the gate stays re-runnable once step 9 edits:
`touchlog.mjs snap … "after-step8b-alpha"` recorded, and the guard re-verified
against that label:

```
step8-guard: baseline "pre-step8b" (2026-08-15T11:34:36.826Z) vs after-step8b-alpha
  4646 item(s) at baseline; 2 changed, 0 created, 0 deleted
  2/2 change(s) licensed by a confirmed_fatal adjudication

OK — every step-8 edit is licensed by a confirmed fatal defect
```

The snapshot also reported `NOTE: 2 item(s) now repaired more than once` — both
of these, repaired at step 8 and again here. The twice-touched escalation is
advisory at step 8 (owner, 2026-08-03); recorded for step 10, and in both cases
the second repair fixed a defect the first one introduced or left, not a
recurrence of the same defect.

---

## 6. Rejudge targets

Two items, exactly those repaired. Their unedited page-mates are spared
(owner, 2026-08-06).

```
cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field
thm-counting-lemma-for-a-fixed-graph
```

## 7. For the owner at step 10

1. **Templated boundary contracts.** The `boundaries` row exists to catch exactly
   these two defects and instead asserted their absence, in generated prose, on
   both items. `regen-contract-entries.mjs` reproduces the boilerplate rather than
   re-deriving it. This is the `gates-that-pass-vacuously` shape, and it is a
   mechanism finding, not thirteen item findings.
2. **The batch-5 merge gap** in §5.
3. **`[L2]` of `thm-counting-lemma-for-a-fixed-graph`** — "Restricting a regular
   pair to sufficiently large subsets preserves regularity, with a controlled new
   parameter and density loss" is a synthetic summary of the same kind deepseek
   caught in `[L1]`, and step 3.1 explicitly says no reslicing is needed for the
   bound it uses. I checked the claim and it is **true** as stated — with
   $\alpha=\beta=(\eta/2)^h\ge\gamma$ the slicing lemma gives $\epsilon'$-regular
   restricted pairs — so it is not a fatal defect, and R1 forbids the cosmetic
   edit here. It wants a step-6 restatement or removal in a later pass.

## Blockers

None.
