# FA terminal evidence — queue d, position 14

Item: `thm-nondeterministic-time-hierarchy`. Decision: repaired.

Independently read the item, all four direct dependencies, batch-21 contract,
risk and coverage records, time-hierarchy A/B pages and manifest, Alpha report
and adjudication, initial Terra rejection and final rejudge. Terra correctly
identifies the citation error: the invoked Theorem 1 does not supply the
nondeterministic-versus-nondeterministic separation. Alpha's change therefore
left the central inference unsupported.

Source verification:
https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes
This is the full original SFM article uploaded by coauthor Albert R. Meyer,
not a search snippet or an aggregator's explanation. Inspected original p.147
for machine/acceptance/running-time conventions and Theorem 1, pp.149–152 for
the simulation and padding lemmas, and the complete Theorem 4 proof through
Corollary 4.1 on p.155. The corollary supplies the needed separating language
against all acceptance-time bounds with the one-length little-o slack.
The originally linked Citeseer copy timed out; its availability is not used
as evidence. The repaired source record links the readable original article.

https://theory.cs.princeton.edu/complexity/book.pdf
Section 3.3, printed p.67, Theorem 3.3 and its illustrative lazy-diagonal proof:
independent corroboration of the displayed hierarchy condition. Section 3.1
fixes the unary-output constructibility convention. This source's illustrative
polynomial proof is not substituted for SFM's general-function result.

The repair derives the convention bridge explicitly. Reading unary input,
running the local binary-output constructor, and decrementing its value gives
an exact runtime T=Theta(g). Binary decrements and head returns cost linear
total time by the geometric bit-flip count. This clock is fixed and interleaved
directly with the fixed source acceptor, ensuring all-branch halting in O(g).
For exclusion, a hypothetical local O(f) decider belongs to the source class
with bound max(n,Cf(n),C). A fixed C handles finite exceptions, and the eventual
linear floor makes its shifted bound little-o of T. Monotonicity gives inclusion.
The statement now explicitly records the page's eventual linear clock floors.
No nonexistent universal linear deterministic simulation is assumed.

Updated this item's own contracts. No dependency item was changed; no prerequisite
licence is needed. Focused precheck, rendercheck, and strict contract validation
passed. Earlier sibling receipts are refreshed for the explicit linear-floor
interface, which is compatible with their uses (in particular polynomial bounds
in position 12). No judge call or pass stamp was created.

Unresolved obligations: none. Next: record position 14, then review position 15.

Final risk-routing check: the expanded proof now crosses the mechanical high-risk threshold. Added an explicit final-adjudicator risk_review to this item's own batch/consolidated contract, documenting the already completed independent analysis above. This is metadata, not an Alpha adjudication or a judge verdict.
