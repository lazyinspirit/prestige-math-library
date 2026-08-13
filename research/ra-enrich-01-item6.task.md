# ra-enrich-01 — author item 6 only, on an AMENDED dependency contract

Author exactly one item: **`thm-analytic-sine-cosine-agree-with-right-triangle-ratios`**.
The other six are already authored and on disk; do not touch them.

## Why you are being dispatched

A previous authoring lane correctly **refused** to write this item. Its finding
was right and is preserved in `research/ra-enrich-01-author-report.md` §6: the
approved dependency list proved only that $(A/H,O/H)$ is a first-quadrant point
of the unit circle. It did **not** license the existence and uniqueness of
$\theta\in(0,\pi/2)$ with $(\cos\theta,\sin\theta)=(A/H,O/H)$, because
`thm-sine-cosine-signs-monotonicity-and-ranges` gives monotonicity and the global
range $[-1,1]$, and **global range plus monotonicity does not imply restricted
surjectivity onto the first-quadrant arc.**

That was a defect in the plan's dependency contract, not in the statement. The
orchestrator has amended the contract; the statement is unchanged.

## The amended dependency contract

Every interface below is `status: published` today — verified from disk on
2026-08-14. Open each one before you cite it.

| dependency | what it supplies |
|---|---|
| `def-radian-angle-by-unit-circle-arc-length` | authored in this run; the arc-length reading of $\theta$ |
| `thm-sine-and-cosine-derivatives` | $\cos' = -\sin$, $\sin' = \cos$ |
| `cor-differentiable-implies-continuous` | continuity of $\cos$ and $\sin$, needed for IVT |
| `thm-intermediate-value` | surjectivity of $\cos$ onto $[0,1]$ over $[0,\pi/2]$ |
| `def-pi-via-first-positive-cosine-zero` | $\pi/2$ **is** the smallest positive zero of $\cos$, so $\cos(\pi/2)=0$ |
| `lem-sine-positive-and-cosine-decreasing-on-zero-two` | $\sin>0$ and $\cos$ strictly decreasing on $(0,2)$, and $\cos 2 \le -1/3$ |
| `cor-trigonometric-parity-and-pythagorean-identity` | $\cos^2+\sin^2=1$, and $\cos 0 = 1$ |
| `def-p-norms-on-rn`, `thm-of-square-roots` | $H=\sqrt{A^2+O^2}$ is well defined and positive |

## The proof route this contract licenses

You are not obliged to follow it, but it closes, and any route you take must
close as honestly:

1. $\pi/2$ is the smallest positive zero of $\cos$, and $\cos 2 \le -1/3 < 0$,
   so **$\pi/2 < 2$**. Hence $[0,\pi/2] \subset [0,2)$ and the monotonicity lemma
   applies on the whole interval — state this containment explicitly rather than
   assuming it.
2. $\cos$ is continuous on $[0,\pi/2]$, $\cos 0 = 1$, $\cos(\pi/2)=0$. By the
   intermediate value theorem $\cos$ attains every value in $[0,1]$ there.
3. $\cos$ is **strictly** decreasing on $(0,2) \supseteq (0,\pi/2)$, so that
   value is attained exactly once — this is what gives **uniqueness**, and it is
   the step the previous lane could not license.
4. For $A,O>0$: $H>0$ and $(A/H)^2+(O/H)^2=1$ with $0<A/H<1$, so there is a
   unique $\theta\in(0,\pi/2)$ with $\cos\theta = A/H$. Then
   $\sin^2\theta = 1-(A/H)^2 = (O/H)^2$, and $\sin\theta>0$ on $(0,2)$ with
   $O/H>0$, so $\sin\theta = O/H$.
5. By `def-radian-angle-by-unit-circle-arc-length`, the unit-circle arc from
   $(1,0)$ to $(A/H,O/H)$ has radian measure $\theta$. The coordinate right
   triangle $(0,0),(A,0),(A,O)$ therefore has $\cos\theta = A/H$ and
   $\sin\theta = O/H$.

## Binding constraints, unchanged from the approved plan

- **Acute-angle only.** $A,O>0$ strictly. Axis and quadrantal cases are
  unit-circle values, not nondegenerate right triangles — note that explicitly
  rather than forcing an undefined side-ratio convention.
- `provenance.statement: literature-derived` (Lebl §11.4.3, OpenStax §§7.2–7.3),
  `provenance.proof: ai-altered`, with a recorded rationale.
- `status: draft`. Do not edit `library/`, `research/plan-spec.json`, or any
  other item. Do not write `verification.judge` or `verification.audited`.
- Run `node tools/tsx-run.mjs tools/precheck.mts` on your file and adopt the
  printed stratification until clean; record `verification.precheck: pass`.
- **If this still does not close honestly, stop and say so.** The previous lane
  was right to refuse, and a second refusal with a concrete reason is a better
  outcome than a proof that papers over the gap.

Append your rationale to `research/ra-enrich-01-author-report.md` under a clearly
marked item-6 section; do not rewrite the existing report.
