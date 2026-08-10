
## Your cluster — `cat-groupoid`: loop-only results applied to endpoint paths

Page: `categories-functors-and-natural-transformations-examples` (B, 25 items).

Two of this page's examples carried fatal defects of the same shape — a
**loop-only** published theorem used for **arbitrary endpoint paths** — plus a
convention error that made a stated group equality literally false. The
independent reader repaired all three and does not certify its own repairs.

**F7-04 — `ex-fundamental-groupoid`.** The dispatched Facts claimed
`thm-composition-respects-homotopy` licensed **concatenation** of endpoint-path
classes; that dependency is about composition of continuous **maps** under
homotopy, which is a different operation. The proof also cited
`thm-fundamental-group-laws` — a statement about **loops at one basepoint** — to
get associativity, identities and inverses for paths with **arbitrary
endpoints**. So well-definedness of composition and all three groupoid laws were
unlicensed in the domain actually needed.

The repair removes the inaccurate dependency, adds the path definition and the
general **finite closed-cover pasting lemma**, proves well-definedness by pasting
endpoint-preserving homotopies, and supplies explicit piecewise-linear
reparameterisations for associativity and identities plus explicit contractions
for a path followed by its reversal in both orders.

Attack it. Open the pasting lemma actually cited and check its hypotheses are met
— the standard statement needs the cover to be **finite and closed** and the maps
to **agree on overlaps**; verify the homotopies being pasted agree on the shared
parameter values, and that the pasted map is continuous **in both variables**, not
just for each fixed time. Check the reparameterisations are genuinely
endpoint-preserving homotopies, not merely bijections of $[0,1]$. Check the
inverse law contraction: $\alpha * \bar\alpha \simeq c_{x}$ needs a homotopy rel
endpoints — is one displayed, and does it work at the boundary parameters?

**F7-27 — the same item asserted a FALSE equality of groups.** The groupoid
composition is $[\beta]\circ[\alpha]=[\alpha*\beta]$ because $\alpha$ is
traversed first. But this page's fundamental-group convention sets
$[\alpha][\beta]=[\alpha*\beta]$, while the one-object-category convention reads
group multiplication as $y\circ x = yx$. So the categorical automorphism group is
the **opposite** of $\pi_1(X,x)$, and the dispatched text asserted literal
equality — false under the library's own explicit conventions. The repair now
states that the identity on loop classes identifies $\mathrm{Aut}_{\Pi_1(X)}(x)$
with $\pi_1(X,x)^{\mathrm{op}}$, and that path reversal gives the canonical
isomorphism onto $\pi_1(X,x)$.

**Verify the repaired direction is the right way round.** Work the composition
order out from first principles yourself, from the two conventions as they are
actually written on disk, and confirm the `op` lands on the side the repair says.
Getting this backwards is easy and would be a second false statement. Also check
`ex-action-groupoid-orbits-and-stabilizers` and
`ex-group-actions-as-functors`, which use the same one-object-category
convention, for the identical opposite-multiplication trap.

**F7-05 — `ex-change-of-basepoint-isomorphism-for-fundamental-groups`.** The
cancellation of an arbitrary connecting path $\gamma$ with its reverse was again
attributed to the loop-only laws and to the unrelated composition-of-maps
theorem. The repair routes it through the now-repaired `ex-fundamental-groupoid`.
**Note this makes one B-page example depend on another B-page example.** Check
on disk how that dependence is expressed: if it is a `deps` edge, it violates the
b-leaf rule (nothing may cite a `-examples` item) and is a real defect; if it is
an inline restatement, check the restatement is faithful. Report exactly what you
find, quoting the frontmatter.

Also adversarially attack the four `provenance.statement: ai-generated`
counterexamples on this page — `cex-functors-need-not-preserve-monomorphisms`,
`cex-a-monomorphism-need-not-split`,
`cex-fully-faithful-need-not-be-essentially-surjective`,
`cex-a-family-of-components-need-not-be-natural` — by trying to construct the
object each claims cannot exist.

Read every one of these in full:

- `ex-fundamental-groupoid`
- `ex-change-of-basepoint-isomorphism-for-fundamental-groups`
- `ex-action-groupoid-orbits-and-stabilizers`
- `ex-group-actions-as-functors`
- `ex-pointed-sets-equivalent-to-sets-and-partial-functions`
- `ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces`
- `ex-determinant-is-a-natural-transformation`
- `cex-functors-need-not-preserve-monomorphisms`
- `cex-a-monomorphism-need-not-split`
- `cex-fully-faithful-need-not-be-essentially-surjective`
- `cex-a-family-of-components-need-not-be-natural`
- `cex-equivalent-categories-need-not-be-isomorphic`
- `fs-every-equivalence-is-an-isomorphism-of-categories`
- `fs-monic-and-epic-implies-isomorphism`
- `fs-one-component-determines-a-natural-transformation`
- `prop-fundamental-group-is-a-functor-on-pointed-spaces`
