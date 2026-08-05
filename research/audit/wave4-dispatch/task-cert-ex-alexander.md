## Item to certify (1)

### `items/ex-the-alexander-subbase-lemma-applied-to-a-closed-interval.md`

**What was repaired, and by whom.** `[L4]` read "The order of $\mathbb{R}$ is
total, and $0 \le t \le 1$ for every $t \in L$ ([[def-real-order]],
[[def-interval]])."

Claude Sonnet 5, judging at A7, rejected the item because `def-real-order`
defines the relation and then **expressly defers** the totality property [L4]
asserted: its Remarks say "Independence of the representative, **trichotomy**,
and compatibility with the field operations: [[thm-reals-ordered-field]]".
Step 4.1 spends totality on its dichotomy ("a point $u \in L$ has $u < b$, or
else $u \ge b > a$").

Alpha (`claude-opus-5`) adjudicated that `confirmed_fatal` (dependency_citation)
at A8, restated `[L4]` to cite `thm-reals-ordered-field` for totality, and added
`thm-reals-ordered-field` to `deps`.

**Check specifically:** open `items/def-real-order.md` and
`items/thm-reals-ordered-field.md` and quote what each actually states; verify
the new `[L4]` says exactly what its cited targets state and no more; verify
`thm-reals-ordered-field` is a legal backward dependency for this item (it must
be published and reachable, not a forward reference); and verify every step that
cites `[L4]` — 1.2, 2.1, 3.1, 4.1 — is still licensed by the restated fact.
Also check `[L3]`, `[L1]` and `[L2]` against their targets while you are here,
and read the three Remarks with a numbered step's suspicion.
