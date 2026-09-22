# Final adjudication: item 9 — escalation

Run: phase-2-remaining-27. Group d. Queue position 9.
Outcome: escalate; no terminal acceptance or repair record.
Current item SHA-256: `79254d3060f559cdb4e318906b3863dc5716ba57d40b93e55e919bddf0701c49`.

## Independent finding

Terra's final rejection is correct: density does not provide a countable
enumeration of all elementary integrands. F1, F8 and steps 1.1/7.1 falsely
claim such an enumeration. The already declared AC and probability choice
bridge can supply the countably many approximants. Sol's earlier repair of
the horizon indexing, using max(1,ceil(t)), fixes the initial rejection.

However, the current uniqueness assertion has a separate fatal obstruction
under the fixed library conventions. Standing hypothesis (H) in
`def-elementary-predictable-brownian-integrand` allows an incomplete ambient
probability space. Clause 5 of
`def-continuous-time-adapted-process-and-martingale` requires continuity only
on a measurable event of probability one. The published
`def-law-modification-and-indistinguishability-of-processes` requires the
actual all-times equality set to be measurable, not merely to contain a
measurable event of probability one. Steps 6.1 and 7.1 prove only the latter.

## Counterexample within (H)

Let W be canonical continuous Brownian path space with its Borel sigma-algebra
G, Wiener probability mu, coordinate Brownian motion b, and raw natural
filtration G_t. Take a disjoint copy I of (0,1), and set

    Omega = W disjoint-union I,
    F = {A disjoint-union C : A in G, C Borel in I},
    P(A disjoint-union C) = mu(A),
    F_t = {A disjoint-union C : A in G_t, C Borel in I}.

These are sigma-algebras and P is a countably additive probability measure.
I is a measurable null set. Define B_t=b_t on W and B_t=0 on I. This process
is adapted and has continuous paths everywhere. Its increments have the
Brownian Gaussian laws. For E=A disjoint-union C in F_s and any Borel D,

    P(E intersect {B_t-B_s in D})
      = mu(A intersect {b_t-b_s in D})
      = mu(A) mu(b_t-b_s in D)
      = P(E) P(B_t-B_s in D).

Thus (H) holds, including independence from the whole F_s. Adjoining the
null component has not changed any Brownian finite-dimensional law.

Choose a non-Borel subset S of I. Such a subset exists under the declared AC:
there are only continuum many Borel subsets of an interval and strictly more
subsets by Cantor's theorem. Let M_t=0 everywhere. For t in S let N_t be the
indicator of the singleton {t} in the I component; for t not in S let N_t=0.
This defines a real process for every t>=0, with N_0=0. Each individual N_t
is F_0-measurable because it is either zero or a Borel singleton indicator.
Each N_t is zero almost surely. Consequently N is adapted, square-integrable,
and an all-pairs martingale: its conditional-expectation classes and each
N_s are the zero class. Every path on the measurable probability-one set W
is identically zero and hence continuous. Both M and N therefore have
continuous paths in the exact sense of clause 5.

For the predictable integrand H=0, the defining constant zero elementary
sequence gives integral class zero at every deterministic time. Both M and N
are therefore versions satisfying every existence and moment condition of
the queued statement. But

    {omega : M_t(omega)=N_t(omega) for every t>=0}
       = W disjoint-union (I minus S)

is not in F, because I minus S is not Borel. M and N are not
indistinguishable according to the cited published definition. This is an
explicit counterexample, not an unresolved appeal to path measurability.

## Source verification

Read the author-hosted source
https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf,
Section 4.1, printed pages 32–33 (PDF pages 37–38, zero-based), and the
complete argument for Theorem 5.26(i)–(iii), printed pages 57–58 (PDF pages
62–63). Section 4.1 imposes ambient completeness and the usual filtration
conditions. Theorem 5.26 obtains the continuous version using maximal
convergence of elementary integrals. Those standing assumptions cannot be
silently imported into (H). The counterexample above is my direct argument;
it is not attributed to the source. I did not independently verify Lawler's
separate reference for this escalation.

## Context and remaining proof obligations

Inspected the current item, its declared dependency statements/interfaces,
the Ito-integral A/B pages, the batch-8 manifest entry and coverage section,
and the item's proof-contract citations, derivations, boundaries and risk
record. The contract repeats the invalid least-index argument and treats
H=0 only for the constructed zero representative, missing the uniqueness
counterexample. The manifest expressly promises uniqueness up to
indistinguishability. The rendered group-d bundle has empty item-evidence
sections; the actual judge and Alpha records were used instead.

Initial Terra context:
`e6aa9b74fe213e8ff01e4fba942186ffd1cdc4ada7c032939da1fe7a40f309ab`.
Final Terra context:
`40b6659ebb35e6549ea878acd8b98596aae42e134df4b4cdd7cc5f866256597f`.
Read both judge rows and the two Alpha adjudication rows for this item in
the run JSONL evidence. The current item hash equals the final rejected hash.

Other local proof details would also need correction in an authorized repair:
use measurable countable-grid suprema rather than assuming full uncountable
suprema measurable from almost-sure continuity alone; intersect the uniform
convergence event with the elementary continuity event; define finite
pointwise limits with a measurable fallback where a finite limit fails to
exist; and justify the L1 passage using fixed-time L2 convergence, rather
than citing almost-sure convergence alone. These corrections do not resolve
the uniqueness counterexample.

## Scope boundary and stop

No dependency lemma can prove this false uniqueness statement under (H).
Requiring ambient completeness would restrict the manifest's theorem scope;
changing indistinguishability to equality on a measurable probability-one
event would change an existing published supplier; requiring everywhere
continuous representatives would change the fixed path convention. The
dispatch requires escalation for supplier edits or other scope changes.
An owner decision on these incompatible requirements is needed before a
repair can be completed. No such change has been made.

Item 9 and its contracts remain unchanged. No repaired-item focused checks
or terminal recorder were run for it, since there is no completed repair to
certify. This file records the counterexample and source verification only;
it creates no judge verdict, pass stamp or terminal acceptance. No dependency
repair occurred at item 9, so there is no consumer-ledger change for it.
The published-defect ledger was not used for this draft-item escalation.

Items 1–8 already have sequential terminal records (seven repaired and one
accepted-after-review). Stop at item 9. Do not begin item 10 or any later
substantive review, reopen a settled item, or launch another review wave.
