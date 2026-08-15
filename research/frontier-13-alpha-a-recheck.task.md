## Group A re-check — batches 1, 2, 5

You are the **lead Alpha**. After this pass you take step 4 (splice and
propagation), and later 6c and 8.

### Batch 1 — `symmetric-polynomials` 26 → 29 items
Repair claims: the missing resultant-definition coverage row added, Conrad's
harvest completed with 12 missing Example/Remark rows, three fully cited proof
contracts added, 73 contracts / 0 empty / 218 citations.
**Re-check F1.1 specifically.** You established from Milne p. 58 that the
resultant is $a^mb^n\prod(\alpha_i-\beta_j)$ and that Prop 4.35(a) and (c) are
proved with no determinant. Confirm the three new items are the ones that follow
from the *product* definition, that they do not smuggle in a Sylvester matrix,
and that the Sylvester decline itself still stands correctly (it does — order 82
determinants are genuinely unavailable at order 58).

### Batch 2 — `primitive-roots-…` 26 → 27 items
Repair claims: `thm-eulers-criterion-for-binomial-congruences` added "preserving
Hackman's primitive-root, coprimality, and positive-exponent hypotheses", §C.III
coverage extended across all headings, the Legendre specialisation deliberately
**not** imported, root lemma rebound to the published polynomial root bound via
the approved R2.1 edge, 66 contracts / 0 empty / 229 citations.
**Check the hypotheses actually survived into the Statement** — this is the run's
most common failure shape. Confirm §C.III's other headings all got dispositions,
not just the one that produced the theorem.

### Batch 5 — `tensor-products-of-modules`, F5.1
The one that matters. Repair claims the two out-of-closure dependencies were
replaced with free-$\mathbb Z$-module machinery and the additive-group
identification made explicit, both deferrals now name licensing pages, 41
contracts / 0 empty / 147 citations.
**Confirm the identification is stated, not assumed.** "A free $\mathbb Z$-module
on a set is a free abelian group on that set" is true and is exactly the kind of
step that gets waved through. The orchestrator has verified the *graph* is clean
(0 out-of-closure deps run-wide); what you are checking is whether the
*mathematics* of the substitution is written out.

### Also yours
Verify the two deferral licensing pages Beta named — `subobject-lattices-…`
(365.017) and `tor-flatness-and-global-dimension` (365.055) — exist in
`research/plan-spec.json` with those ids.
