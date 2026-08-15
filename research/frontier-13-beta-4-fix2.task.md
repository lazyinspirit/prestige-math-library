## Batch 4 second pass — one defect your repair introduced

Your repair is otherwise confirmed correct, and Alpha checked the arguments rather
than their presence:

- **$K_t$-free ⟹ EH**: your $\binom{t+s-2}{t-1}$ is the published
  $\binom{s+t-2}{s-1}$ under $(s,t)\mapsto(t,s)$ — not transposed. The condition
  $s\ge t-2$ is stated and used exactly where $(t+s-2)\le 2s$ needs it. Your
  claimed exponent $1/t$ is **below** what Ramsey delivers ($\approx 1/(t-1)$) — an
  underclaim, which is the right direction to err.
- **$P_3$-free**: the empty graph closes for a real reason —
  `def-clique-stable-set-and-numbers` publishes $\omega(K_0)=\alpha(K_0)=0$ — and
  $\alpha,\omega$ are correctly taken over $G$ rather than over components.
- **$\le 3$ vertices**: $K_0$ explicitly flagged, enumeration correct.
- 46/46 contracts, every published quote verbatim, **0 hollow**. 0 of 15 new
  dependencies out of closure.

### F4.5 — the hereditary hypothesis is used but never cited

All three new items assert the **Erdős–Hajnal property**, which
`def-erdos-hajnal-property-and-constant` defines only for **hereditary** classes,
about an $H$-free class. None of them cites
`lem-forbidden-induced-subgraph-classes-are-hereditary` — the lemma that licenses
treating an $H$-free class as hereditary.

That lemma is **published, in this page's closure, and already cited by two
pre-existing items on this very page for exactly this step**, so the fix is
mechanical: add it to the `deps` of the three new items (and the fourth if the
B-page instance also asserts the property), and cite it at the corresponding step
in each proof contract's input map.

**This is the same shape as the defect the batch-6 repair produced**: a Statement
that moved while its dependency set stayed put. It is worth naming because it is
what this re-check pass exists to catch — a repair is not finished when the claim
is right, only when its obligations are discharged too.

### Re-run and report

The three gates plus your dependency-closure audit; report the items whose `deps`
gained the lemma and the contract steps that now cite it.
