# Run `frontier-12` — Step-6 independent certification of `ex-rational-function-field-order`

**Reader:** GPT 5.6 Sol through the Codex subscription, independent of Alpha and
of both judge lanes. **Date:** 2026-08-13. **Scope:** the Alpha-authored
published-dependency repair recorded in
`research/frontier-12-published-dependency-repairs.md` §R1.

## Verdict: certify

The `[L2]` repair is sound. Its three mathematical clauses now match the cited
items on disk: `def-polynomial-degree-leading-coefficient-and-monic` defines
degree and leading coefficient only for a nonzero polynomial;
`cor-rational-function-field-as-a-fraction-field` states that $F[t]$ is an
integral domain for a field $F$; and
`thm-polynomial-degree-of-a-product-over-a-domain` states nonvanishing,
degree-additivity, and multiplicativity of leading coefficients for products of
nonzero polynomials over a domain. `thm-reals-ordered-field` supplies the ordered
field structure on $\mathbb R$. The corollary's current `status: draft` is the
declared whole-level pre-publication state and is not a certification defect.

The new step 1.1 proves the removed eventual-sign clause directly. For $m=0$ the
polynomial is its nonzero leading coefficient. For $m\ge1$, the bound
$\left|\sum_{i<m}a_ix^i\right|\le Cx^{m-1}$ for $x\ge1$ follows term by term;
when $a>0$, $x>\max(1,C/a)$ makes
$x^{m-1}(ax-C)>0$, and when $a<0$ the same estimate applied to $-p$ gives the
negative conclusion. Thus an explicit right-hand threshold exists in every
case, and the old ambiguous phrase “beyond all roots” is gone.

Terra's step-3.1 objection does not invalidate the order test. The clause is
byte-identical to the published pre-repair step 2.1 apart from its step number
and internal references. At equality, the difference is $0$: `def-ordered-field`
(O1), cited through `[L1]` and `[L4]`, separates equality from either strict-order
case, while $P$ itself requires $f\ne0$. The right-hand prose says that the
numerator and denominator *have* leading coefficients with positive product;
the zero numerator has no leading coefficient, so that predicate is false rather
than an instruction to evaluate $\operatorname{lc}(0)$. Step 2.1 is explicitly
restricted to nonzero numerator and denominator, and every later use applies it
to a visibly nonzero numerator. Alpha's `confirmed_nonfatal` disposition is
therefore supported; no fatal equality-case defect remains.

The repair is minimal in the relevant sense: `git diff` shows the Example, $P$,
title, conclusions, Remarks, sources, and provenance unchanged. Four exact
dependencies, the re-cited `[L2]`, `[L6]`, and the local eventual-sign derivation
were added; the remaining proof was only renumbered or had internal step
references updated. The item now carries the owner-delegated
`published-dependency-repair` verification stamp.

## Nonfatal findings

### `ex-rational-function-field-order`

1. **Fact `[L3]` — inaccurate citation precision (nonfatal).** The Fact says a
   product of two nonzero reals is positive *exactly when* the factors have the
   same sign, but `lem-of-sign-rules` states the three forward sign cases rather
   than that biconditional verbatim. The converse follows immediately by
   trichotomy and those three cases, so the mathematics is correct and the gap is
   comfortably within the owner's 30-second threshold; nevertheless the Fact
   turns an immediate consequence into the cited proposition itself.

2. **Step 1.2 — implicit nonzero scope (nonfatal).** Read as a standalone
   universal sentence, “If $p/q=p'/q'$” permits the zero function and then writes
   leading coefficients for zero numerators. In context the step proves
   representative independence of the computation rule stated for a nonzero
   rational function: one representative has nonzero numerator, and the domain
   equality $pq'=p'q$ forces every other numerator to be nonzero. Adding that
   scope explicitly would close the wording gap, but the existing route is
   immediate and no actual proof use reaches $\operatorname{lc}(0)$.

3. **Historical proof contract — stale after the material repair (nonfatal
   process defect).** The current frontier-12 batch contract correctly has no
   entry for this legacy published item, and its relevant new corollary entry
   passes strict checking. The item's earlier audit contract at
   `research/audit/wave7-proof-contracts.json`, however, still quotes the old
   `[L2]`, maps the old step numbers, omits `[L6]` and the new dependencies, and
   gives stale zero-boundary evidence. Running `proof-contract.mjs --strict
   --items ex-rational-function-field-order` against that artifact returns 57
   errors. The live proof is sound, but that durable historical contract no
   longer describes it and should be refreshed by the owning audit/orchestration
   lane rather than by this certifier.

## Coverage

Read fully: `ex-rational-function-field-order`; all 14 ids in its current
`deps`; the §R1 repair record; `frontier-12-alpha-step9.md`;
`frontier-12-alpha-step9b.md` §§1–3; the normative schema, exemplar, step-3
decisions and scaffold review; batch 1 notes; and the relevant batch-1 proof
contract entry for `cor-rational-function-field-as-a-fraction-field`. I also
checked the target's historical wave-7 proof contract and the exact git diffs.
Nothing in the assigned mathematical surface was sampled, and nothing required
for questions (a) or (b) was unavailable.
