## Group C round 2 — batches 4, 6

Round-1 verdicts: 399 `ready-for-splice`; **395 and 365.001 `not-ready`**.

### Batch 4 (order 395)

You found the repair asserted the Erdős–Hajnal property — defined only for
**hereditary** classes — about an $H$-free class in all three new items, none
citing `lem-forbidden-induced-subgraph-classes-are-hereditary`. The second pass
adds it to their `deps` and contract input maps.

**Verify** it landed on every item that asserts the property, including the B-page
instance if it does, and that each cites the lemma at the step where the hereditary
hypothesis is actually used rather than merely listing it.

Your round-1 mathematical verification stands and needs no repeat: the
$\binom{t+s-2}{t-1}$ instantiation, the $s\ge t-2$ condition, $\omega(K_0)=\alpha(K_0)=0$,
the $1/t$ underclaim, and 0 of 15 new dependencies out of closure.

### Batch 6 (order 365.001) — passes three and four

- **F6.7**: the four paraphrased Riehl section names replaced with the printed
  titles (*The unit and counit as universal arrows*, *The calculus of adjunctions*,
  *Contravariant and multivariable adjoint functors*, *Adjunctions, limits, and
  colimits*). Confirm against the PDF you already opened.
- **F6.8**: the rename reached `notes.md`'s provenance table — you found it keyed
  on the dead id while the three JSON artifacts were updated. Confirm the row now
  keys on `ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid` and
  that the author will find a provenance row at step 5.
- **F6.9**: all eight hollow citations replaced. Beta reports them as
  `thm-adjunctions-compose` F1, `thm-mates-…` F1, counit fullness F3,
  abelianisation F1/F2, ideals/varieties F3/F4, preorder example F2. **Confirm each
  now states a proposition rather than a clause's opening words** — that is the
  check no gate performs, and it is the one you invented.

Batch 6 has taken four repair passes, each finding something the previous pass's
*fix* introduced or left behind. Say plainly whether it has converged.
