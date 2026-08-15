## Group C re-check — batches 4, 6

### Batch 4 — order 395, 11 → 14 items (your F4.1)

The page now carries three positive Erdős–Hajnal results. Verified present on
disk by the orchestrator:

```
thm-complete-graph-free-classes-are-erdos-hajnal
thm-p3-free-graphs-have-square-root-homogeneous-sets
cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property
```

**What is verified is that they exist. What is not verified is that they are
correct.** That is your pass:

1. **$K_t$-free $\Rightarrow$ EH** must actually follow from
   `thm-finite-graph-ramsey-binomial-bound` as scaffolded — you read that item and
   confirmed it is the off-diagonal form. Check the exponent the item claims is the
   one Ramsey actually gives, and that the hypothesis is $K_t$-**free** and not
   something weaker.
2. **$P_3$-free $\Rightarrow \hom(G)\ge\sqrt n$**: the argument is that components
   are cliques so $n\le\alpha\omega\le\hom^2$. Check the degenerate cases — the
   empty graph, a single vertex, and whether $\alpha$ and $\omega$ are being taken
   over the right objects.
3. The $\le 3$ vertices corollary must genuinely follow from the other two plus
   complement invariance, with no gap at the small cases.

Also confirm: **both B-page summary drafts are gone** (orchestrator verified 0
remain), `rem-tower-and-wowzer-bounds-in-regularity` now says "tower **upper**
bounds" (verified), the extended Chudnovsky/Zhao ranges gave every newly-covered
heading a disposition including Zhao Ex 2.1.22–2.1.25, and 46 contracts are
populated with real source clauses.

### Batch 6 — two repair passes

The first pass applied F6.1/F6.2/F6.3. The orchestrator then found two residues
and dispatched a second pass:

- **F6.5** — `cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g`
  now says "posets" in its title and invokes **antisymmetry** in its strategy,
  but its only dependency was `def-galois-connection`, titled "…between
  **preorders**". `def-partial-order` is published and already in closure; the
  second pass adds it.
- **F6.6** — the id `ex-the-maximal-subgroupoid-and-fractions-adjoint-triple`
  still named a fractions adjoint and a triple after the item was narrowed to
  "the inclusion of groupoids into categories is left adjoint to the
  maximal-subgroupoid functor". Ids are immutable once on `main`; the second pass
  renames it.

**Confirm both landed, and check for the same shape elsewhere in the batch** — a
Statement, title or id changed by the first repair whose dependencies, contract
input map or coverage row did not move with it. That pattern is the reason this
re-check exists.

Your step-3 conclusions on the Riehl locators, MA-1 item 40, the RAPL split and
the choice wording all stand and need no re-verification.
