# Frontier 17 — Alpha group b step-3 recheck

Scope: batches 3, 7, and 9. I re-read each Step-3 fix-pass entry and checked
the claimed disposition against the current manifest and coverage ledger.

- B3-1 — **confirmed** — `research/frontier-17-batch-3.pages.json` contains no false two-normal/four-nonnormal count; `ex-s-three-galois-correspondence-for-x-cubed-minus-two` instead distinguishes the one normal strict intermediate field from the three nonnormal cubic fields.
- B3-2 — **confirmed** — `research/frontier-17-batch-3.coverage.json` narrows Conrad to §§4–5, ending at PDF p. 24, and dispositions the additional named §4–5 results; §6 is no longer inside the claimed locator.
- B3-3 — **confirmed** — `thm-principal-ideal-domains-are-unique-factorisation-domains` now cites `thm-equivalent-characterizations-of-noetherian-modules` and uses its maximal-condition clause in a maximal-bad-principal-ideal argument, with no local recursive factor choice.
- B3-4 — **confirmed** — `prop-abelian-groups-are-z-modules` now precedes the specialization and supplies the object, morphism, subobject, generation, cyclicity, finite-generation, and quotient dictionary; the specialization separately cites `thm-int-comm-ring`, `lem-int-cancellation`, `lem-subgroups-of-z-are-cyclic`, and `def-principal-ideal-domain` for the integer-domain/PID bridge.
- B3-5 — **confirmed** — the Brussel record now has 73 dispositions over its declared ranges, including Remark 1.0.2, Example 2.1.3, §2.1.4, Definition 2.1.5, and Corollary 3.4.1.
- B7-1 — **confirmed** — `thm-plane-not-homeomorphic-to-other-euclidean-spaces` claims only the dimension-two slice and its strategy treats natural-number cases $n=0$, $n=1$, and $n\ge3$; it neither cites nor claims the stronger general invariance remark.
- B7-2 — **confirmed** — `research/frontier-17-batch-7.pages.json` contains Brouwer's disk theorem and no proposed boundary-moving false statement; the sole false statement concerns the Hawaiian earring.
- B9-1 — **confirmed** — `thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras` says the canonical splittings need not be algebra homomorphisms, and its strategy explicitly disclaims failure for every monad.
- B9-2 — **confirmed** — the Mehrle record in `research/frontier-17-batch-9.coverage.json` now dispositions Example 5.18(e) as included in `fs-the-forgetful-functor-from-topological-spaces-is-monadic` and Exercise 5.22 as inline in `lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets`.

## Pair verdicts

- `the-galois-correspondence` — **ready for splice**.
- `modules-over-a-pid-and-canonical-forms` — **ready for splice**.
- `applications-of-the-fundamental-group` — **ready for splice**.
- `monadicity-and-becks-theorem` — **ready for splice**.

No finding remains open, and no Beta pushback required a separate acceptance or
rejection.
