# Final adjudication: item 4

Run phase-2-remaining-27, group d, position 4. Proposed disposition repaired;
source status verified. Item 3 was recorded before this substantive review.

## Independent basis

Terra correctly identified that a cylinder Gamma in the infinite path product
cannot be evaluated on a k-vector. The repaired Phi_Gamma evaluates Gamma on
the entire path t -> u(t)-u(0). Each coordinate is measurable, so this is a
bounded product-measurable functional. Translating u=x+w cancels x, and
w(0)=0 Wiener-almost surely gives exactly the cylinder probability required
by assertion 1. The law is the pushforward j_*mu under inclusion of continuous
paths into the product, not a purported restriction of a measure to sets on
a different underlying space.

I also checked the complete argument, not only the rejected line. On a common
grid containing arbitrary finite past times, s, and finite future times,
independent increments and B_0=0 almost surely give finite past/future
independence. The pi-system independence theorem then extends the past to
F_s^0. The known-state/independent-noise lemma supplies the cylinder conditional
identity. Translation is measurable coordinate by coordinate, and the constant
Wiener probability kernel supplies measurability of Psi.

The raw lambda-system argument now explicitly uses disjoint countable unions:
sum the event-integral identities for finite partial unions and apply monotone
convergence. Complement closure and increasing-union closure alone were not
a sufficient stated justification. Pi-lambda followed by simple approximation
therefore gives all bounded product-measurable functionals.

For the augmented past, set u_n=s+1/n. Every A in F_s belongs to each completed
raw F^0_{u_n}; the repaired definition from item 2 supplies a raw representative
with identical bounded event integrals. Continuous cylinder integrands converge
on the common full-measure continuity event. The fixed bound on G dominates
both probability integrals, so dominated convergence justifies the limit and
the continuity of Psi. Explicit functions max(0,1-m max(x-c,0)) decrease to
the closed-half-line indicator; their finite products generate half-line
cylinders. A second event-integral pi-lambda argument proves the augmented
claim without using the tower property in reverse.

The manifest's continuous-path formulation is retained explicitly, rather
than silently identifying an only almost-surely continuous process with a
path-valued map on every outcome. On a common measurable continuity event
A_* take the actual future path; off it take the zero path. The coordinate
generation lemma makes this a Borel C-valued random element. Its cylinder
evaluations agree almost surely with the original future. Step 8.2 carries
the established cylinder identities through the same pi-lambda argument on
C. The conditional answer uses the original adapted B_s; no adaptedness of
the normalized path coordinates is asserted. Changing A_* changes paths only
on a common null event. This restores precisely the original manifest claim.

The t_1=0 coordinate is deterministic zero for increments; the empty cylinder
and constant functionals, and s=0, are covered. AC is inherited from the
Brownian/Wiener, completion and conditional-expectation interfaces; no additional
pathwise selection is made. No mathematics remains unresolved in this item.

## Inputs and source verification

Read the current statement, all proof rows and facts, all declared dependency
statements, the complete item-specific contract (including the initially
truncated citation portion), risk record and manifest entry. A/B page and
coverage context were already read for item 2. Both Terra rows and both Alpha
records were inspected. Initial rejection context:
ce7671883645929726e57aec1cefb004f361af8e07b8c31dfd897cf695d938a7.
Final Terra context:
a610e493d3bee50c48688b2f81b6bce0ac9df6d7b861b912d0425052e1d4f001.
Sol's explicit product-cylinder definition resolves its original finite-product
citation mismatch, but not the final type error; the current repair resolves both.

http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf

Read Theorem 6.12 and its complete proof on printed/PDF p. 55 of the downloaded
author-hosted notes, reusing the successful retrieval from item 2. It proves
future-increment independence from the raw right-limit past by decreasing
deterministic times, continuous finite-dimensional test functions, and dominated
convergence. It does not itself perform the item's terminal-null completion
step; that is independently justified by the repaired local supplier.

The dominated-convergence supplier's full statement was also read: the bound
is integrable on each probability space and convergence is almost sure, exactly
as required. No reading of all of Durrett is claimed.

## Scope, metadata and checks

Added the existing dominated-convergence and generated-sigma-algebra suppliers;
no supplier was edited and no new item was introduced. Updated this item's
manifest dependencies and strategy, derivations, source quotes (including the
current item-2 completion interface), boundaries and risk notes in its owning
and aggregate contracts. The consumer-batch-7 frontier input remains empty:
these added suppliers are published outside the frontier. Refreshed the unified
ledger normally, without inserting orphaned cross-batch reviews.

Focused precheck: 1 checked, 0 failing. Focused rendercheck: 1 checked, no
errors or warnings. The final small clarification of the finite-past grid is
included in the final checks before recording. These are local checks, not a
judge verdict. No pass stamp was created.

Next action: record the final bytes; do not review item 5 before acceptance.
