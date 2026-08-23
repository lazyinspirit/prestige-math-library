# Alpha — impact-receipt closure, run `frontier-17` (`impact-close-1`)

Gate: `impact-receipt` at stage `9-close`. **Now green — exit 0.**

## The window

The task file's command names `--to post-step9`. **No snapshot carries that
label.** The ledger holds `pre-author`, `post-6b`, `pre-step8` (twice),
`post-step8`, and the tool dies with `touch ledger has no snapshot labelled
"post-step9"`. The engine's own gate does not use that label: it computes
`latestSnapshotLabel(ctx)`, which resolves to `post-step8` here. So the window I
validated, and the one the gate runs, is

```
node tools/impact-audit.mjs --touches research/frontier-17-touches.json \
  --from pre-author --to post-step8 --receipt research/frontier-17-impact.json
```

440 changed interfaces, 371 items in the required-review set, 371 dispositions.
368 were already written at 6c and I did not touch them. Three were `pending`,
added by the mechanical refresh — exactly the three items step 9 built.

I refreshed `source.to` from the stale `post-6b` to `post-step8` so the receipt
records the window its dispositions were actually cast against, and extended
`reviewer` to name this round. The tool validates neither field; both were
wrong-in-fact and are now right.

## The three dispositions — all `still-licensed`

Each is a step-9 item, so each was authored *after* the interfaces moved. That
is a reason to check, not a reason to assume: I opened every changed interface
each one cites and read the citing step against its current text.

**`ex-orthogonal-group-is-a-regular-level-set`** — cites four changed
interfaces. `[L3]` against current `def-euclidean-submersions-and-immersions`
("submersion at $a$ when $Df(a)$ is surjective") and
`def-regular-critical-points-values-and-level-sets` ("$c$ regular when every
$a\in f^{-1}(\{c\})$ is a regular point"): exact. Both definitions' standing
hypotheses hold — $m,n\ge1$, and the submersion-point condition $n\le m$ reads
$n(n+1)/2\le n^2$, true for $n\ge1$ with equality at $n=1$, which step 8.1
works out explicitly rather than waving at. `[L4]` against current
`cor-regular-level-set-local-graph-theorem` ($C^k$, $k\ge1$, regular value:
locally a $C^k$ graph over $\ker Df(a)$ of dimension $m-n$) and
`def-tangent-space-to-a-regular-level-set` ($T_a(f^{-1}(c)):=\ker Df(a)$):
steps 5.1 and 6.1 use exactly $n^2-n(n+1)/2$ and $\ker Df(A)$, and regularity
of $I_n$ is established at 4.1 *before* `[L4]` is invoked.

**`ex-lagrange-multipliers-with-two-constraints`** — cites three. `[L3]`
against current `thm-lagrange-multipliers-for-regular-level-set-constraints`:
hypotheses, the *uniqueness* of $\lambda$, and the explicit "necessary, not
sufficient" clause all match, and steps 3.2/5.1 use it only in the necessary
direction — the item's whole point is that the multiplier equation does not
decide global from local. `[L2]` against current
`lem-matrix-rank-detected-by-nonzero-minors` ("$\operatorname{rank}A\ge r$ iff
some $r$-rowed minor is nonzero", $1\le r\le\min\{m,n\}$): applied at $r=2$ on
the $2\times3$ Jacobian, where $\min\{2,3\}=2$, with the minors $2x$ and $2y$
exhibited.

**`cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant`** —
cites four. `[F2]` against current `thm-smith-normal-form-existence-over-a-pid`
and `def-matrix-equivalence-and-smith-normal-form-over-a-pid`: step 1.1 invokes
it at $m=n$ over the PID $\mathbb Z$ and concludes $P,Q\in\operatorname{GL}_n(\mathbb Z)$,
which is precisely what the current definition of equivalence licenses — and
that invertibility is what step 1.2 converts into $\det P,\det Q\in\{1,-1\}$.
`[F5]` against current `thm-simultaneous-basis-theorem-for-pid-submodules`:
step 5.1 uses the aligned basis with $r\le n$ and claims no uniqueness the
theorem does not assert. `[F1]` against current `prop-abelian-groups-are-z-modules`:
only the subgroup/submodule and quotient-group/quotient-module identifications
it states.

No consumer was broken by an interface change. **No repair, no rejudge, no
defect-ledger row** — there is no defect to record, and a ledger row written to
look thorough is the boundary-row defect in a different file.

## One finding for the engine, not for this gate

`latestSnapshotLabel` (`tools/autopilot/stages/mathlib.mts:301`) prefers the
label `post-step9`. **Nothing ever writes that label**: stage `10-snapshot-v2`
(line 1994) snapshots as `post-step9-v2`. The preference list can therefore
never match it, so once step 10's snapshot exists the impact window still ends
at `post-step8` and would silently exclude step-9 and step-10 edits. It is
latent today — the only gate using `latestSnapshotLabel` is `9-close`, which
runs before that snapshot is taken, and the 6c gate is pinned to `post-6b`. It
stops being latent the moment any post-10 stage uses that helper. The
per-run task-file template hardcodes the same non-existent label, which is why
the command it prints cannot be run as written. I did not change either: this
is a mechanism, `ARCHITECTURE.md` governs it, and altering it is outside this
dispatch.
