# Alpha impact-close-1 — run `frontier-15`

Lead Alpha (Claude Opus 5, `xhigh`, 1,000,000-token window), 2026-08-17.

## What was red

`impact-receipt` on stage `9-close`. The mechanical repair had refreshed
`research/frontier-15-impact.json` from the `pre-author → post-step9` window,
which widened `required_review` from the 6c-era scope to 351 items and appended
four `pending` rows — the step-9 builds and one interface the wider window
surfaced. `pending` is not a valid status, so the gate stayed red exactly until
the dispositions were written.

Window reproduced verbatim from the task file, and it matches the engine's own
`latestSnapshotLabel` resolution (`post-step9` is the newest label in
`research/frontier-15-touches.json`):

```
node tools/impact-audit.mjs --touches research/frontier-15-touches.json \
  --from pre-author --to post-step9 --receipt research/frontier-15-impact.json
```

## The four rows

Each is one read: the consumer opened on disk, every step citing a changed
interface traced against that interface's **current** text. The full notes are
in the receipt; the findings are below.

### 1. `ex-the-group-action-monad-and-its-algebras` — `still-licensed`

Four changed interfaces in its logical closure, three cited directly.

- `[L1]` reproduces `def-monad`'s componentwise display
  $\mu_A\circ T(\mu_A)=\mu_A\circ\mu_{TA}$, $\mu_A\circ T(\eta_A)=1_{TA}=\mu_A\circ\eta_{TA}$
  verbatim; steps 2.1 and 2.2 discharge exactly those two laws.
- `[L2]` reproduces `def-t-algebra-and-algebra-homomorphism`'s algebra laws
  $a\circ\eta_A=1_A$, $a\circ T(a)=a\circ\mu_A$ and its homomorphism condition
  $f\circ a=b\circ T(f)$ verbatim; steps 3.1, 4.1 and 5.1 use only those.
- `[L6]` reproduces the first sentence of `def-eilenberg-moore-category`
  (objects the $T$-algebras, morphisms the $T$-algebra homomorphisms), which is
  all step 6.1 uses — it does not reach that definition's forgetful-functor
  clause.
- `thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition`
  enters only transitively, through `def-eilenberg-moore-category`'s `deps`; no
  `[L#]` and no step of this item cites it.

### 2. `lem-centralizer-of-a-normal-subgroup-is-normal` — `still-licensed`

One changed interface, `def-centralizer-of-a-subgroup`, cited at `[L1]`. Both
clauses of `[L1]` are current definition text: the membership criterion is the
definition's display instantiated at $H:=N$, and "it is a subgroup of $G$" is
what its *Why it is a subgroup* paragraph proves. The definition's standing
hypothesis is $H\le G$; $N\trianglelefteq G$ gives $N\le G$, so the
instantiation is licensed. Steps 1.1 and 2.1 use only the membership criterion;
step 3.1 uses normality via `[L2]` (`def-normal-subgroup`, unchanged in this
window).

### 3. `prop-complement-and-disjoint-union-axioms-for-a-lambda-system` — `still-licensed`

One changed interface, `def-lambda-system`, cited at `[L1]`. Its three clauses
are the definition's numbered clauses 1–3 verbatim, same quantifiers, same
direction. The proof consumes exactly those — relative difference at steps 1.1
and 2.1, increasing union at step 3.1 — and the reverse direction derives both
back from the proposition's own clauses rather than importing an axiom the
definition does not state; in particular $\emptyset\in\mathcal D$ is derived at
step 1.2 from the proposition's clauses 1 and 2, never from `[L1]`.

### 4. `thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group` — `still-licensed`

Fifteen changed interfaces in its logical closure; five cited directly, each
citing step read against current text.

| fact | interface | check |
|---|---|---|
| `[L1]` | `def-fitting-subgroup-of-a-finite-group` | both clauses current — $F(G)=\prod_{p\mid\lvert G\rvert}O_p(G)$, and "if $A,B\trianglelefteq G$ then $AB$ is a subgroup, is normal, and $AB=BA$". Step 3.1 uses only the product clause, at $A:=C$, $B:=F$, both normal by steps 2.1 and 1.1 |
| `[L2]` | `thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup` | verbatim its Statement; step 1.1 takes normality and maximality, step 10.1 maximality at the normal nilpotent $D$ |
| `[L3]` | `def-centralizer-of-a-subgroup` | membership criterion plus subgroup, both current; step 7.2 uses only that $D\le C_G(F)$ makes every element of $D$ commute with every element of $F$ |
| `[L4]` | `lem-centralizer-of-a-normal-subgroup-is-normal` | verbatim its Statement; step 2.1's instantiation $N:=F$ is licensed by step 1.1 |
| `[L7]` | `lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup` | verbatim its Statement, carrying no finiteness hypothesis; step 5.1 applies it at $Q:=G/F$ (solvable by `[L5]`) and $N:=CF/F\ne1$ (step 4.1) — exactly the lemma's hypotheses |

The remaining ten — `def-number-of-sylow-p-subgroups`,
`def-p-core-of-a-finite-group`, `def-sylow-p-subgroup`,
`lem-distinct-normal-sylow-subgroups-commute`,
`lem-finite-nilpotence-via-normal-sylow-subgroups`,
`lem-wielandt-sylow-binomial-valuation`,
`thm-normalizer-condition-for-finite-nilpotent-groups`,
`thm-normalizer-of-a-sylow-normalizer`, `thm-sylow-first-theorem`,
`thm-sylow-second-theorem` — enter only transitively through the two Fitting
items and are cited by no `[L#]` and no step of this item; their wording is
carried by their own direct consumers' rows.

## Outcome

No consumer was broken by an interface change, so **no repair, no defect-ledger
row, and no rejudge is owed by this stage**. No item, page, frontmatter,
contract or judge block was touched; the only writes are the four dispositions.

Two non-disposition metadata fields were corrected in the same act, neither
validated by the gate: `source.to` now reads `post-step9` (the `--refresh-receipt`
path recomputes scopes but leaves `source` at the window the receipt was first
written against, so it still claimed `post-6b`), and `reviewer` now names this
round alongside the 6c author. No previously written disposition was modified.

Gate, from the repo root: `impact-audit … --receipt` exits **0**, 398 changed
interfaces, 351 affected items, 346 `still-licensed` / 5 `repaired`, zero errors
and zero warnings. `splice-plan --verify` re-run alongside it: 16 pages across 7
manifests, plan and manifests agree.
