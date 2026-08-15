## Batch 2 fix task — `primitive-roots-and-unit-groups-modulo-n` (57.001) · `semidirect-products-and-automorphism-groups` (68)

Alpha verdicts: order 57.001 **insufficient**; order 68 **sufficient**. No split
on either page.

### F2.1 — a skipped subsection hides this page's missing theorem (must fix)

Your Hackman locator excludes §C.III. **§C.III is "Binomial Congruences" and
contains C.III.1, Euler's Criterion in general form:** for general $m$ and general
$n$, $x^m\equiv a$ is solvable iff

$$a^{\varphi(n)/(\varphi(n),m)}\equiv 1 .$$

Its proof is exactly the index calculus this page already builds. Because the
subsection is outside your stated read range, the result appears in **no source's
contents and no coverage row** — the harvest is structurally complete and still
silently missing the page's natural capstone.

Add it. The $m=2$ Legendre-symbol specialisation correctly belongs to
`quadratic-residues-and-the-legendre-symbol` (57.003) and must **not** be pulled
here — but the general criterion belongs on this page. Extend the stated locator
to cover §C.III and give every heading in it a disposition.

### F2.2 — R2.1 has been applied to the spec; use it

The orchestrator added `polynomial-rings-and-roots` (order 52) to order 68's
`requires` on Alpha's recommendation (verified: 0 seams across all 11 pairs,
closure 26 → 31, no new `redundant-prereq` warning). **Update the root-bound lemma
to cite the published theorem instead of re-deriving coefficient arrays inline.**
Do not edit `plan-spec.json` yourself; the edge is already there.

### Confirmed — leave alone

Alpha verified your hard seam is genuinely closed: `thm-automorphisms-of-a-finite-cyclic-group`
closes locally — `thm-unit-criterion-modulo-n` supplies $b$ with $ab\equiv1$ so
$(g^a)^b=g$, and the converse uses `lem-order-characterisation` — and never needs
Pair A's power-order lemma, which was the illegal edge. Your dedicated notes
section on that seam is exactly the right disposition. Your proof-contract
citations (65 contracts, 0 empty, 222 citations) are the run's standard.
