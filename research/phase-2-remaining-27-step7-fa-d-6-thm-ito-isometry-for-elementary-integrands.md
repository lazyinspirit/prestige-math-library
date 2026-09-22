# Final adjudication: item 6

Run phase-2-remaining-27, group d, position 6. Disposition repaired; source
status familiar. Item 5 was recorded before this review.

Read the current statement, facts and proof, all declared supplier statements
(reusing those already read for earlier items), the owning manifest entry,
derivations, citation mapping, boundary/risk record, both Terra rows and both
Sol adjudications. The Ito A/B pages and coverage notes were already read.

The original rejection concerned the finite horizon. Sol's constant extension
I_t=I_T for t>=T fixes that issue: adaptation, continuity, and square
integrability persist; conditional identities straddling T reduce to the
finite-horizon identity, and those after T concern an unchanged F_T variable.

The final rejection is correct. The former F4 omitted W in L1 from a formula
containing E[W|G]. The actual taking-out-known supplier assumes this, and
its unbounded-multiplier form also requires the two products to be integrable.
F4 now states those conditions exactly. In the off-diagonal application,
W is a centered Brownian increment and Z is the product of bounded coefficients
and an earlier increment. W is L2 and hence L1; ZW is integrable by
2|ab|<=a^2+b^2; Z E[W|G]=0 is integrable. For diagonal terms the multiplier
is bounded and the squared Brownian increment is L1. These checks are now
explicit in step 2.2.

All other claims follow: refinement inserts s with inherited measurable
coefficients; blocks outside (s,t] vanish, and active blocks begin no earlier
than s. Centering at the left endpoint followed by the tower property gives
the all-pairs martingale identity. Earlier increments and both coefficients
are measurable at the later block's left endpoint, so off-diagonal moments
vanish; diagonal moments are E[xi_k^2] times the truncated block length.
Summing the finitely many terms gives the stated energy identity. For t=0
all terms vanish; for t=T all blocks contribute; zero coefficients and
one-block representations are covered. The already-read representation
lemma proves independence of the class. These are familiar elementary
conditional-expectation calculations; no external source verification was
needed and no new reading of Lawler is claimed.

Initial Terra context:
d846f6d05af0d9aff21470bf9ec8549689a616edf0b876b5bb1665ffa2c37a80.
Final Terra context:
b4830e65816a37371cbef6e6e45d05aa7a29b98a5d560edb532a21eb0557791b.

Updated only this item's F4, application checks, matching derivation and
current supplier quotes/risk notes in the owning and aggregate contracts.
No dependency edge, manifest claim, supplier, page or scope was changed;
the cross-batch record therefore needs no dependency update.

Focused precheck passed (1 checked); focused rendercheck checked 1 with no
errors or warnings. No independent judge verdict or pass stamp was created.
Next action: terminal record, then item 7 only after acceptance.
