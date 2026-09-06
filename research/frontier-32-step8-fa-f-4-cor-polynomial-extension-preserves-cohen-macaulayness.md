# FA terminal evidence — item 4

Disposition: repaired. Source status: verified.

Read the item, its three direct dependencies, the module dimension/parameter theorem and regular-parameter corollary added by this repair, batch-9 manifest and coverage entry for Lemma 10.103.13, depth A/B pages, contract and boundary/risk record, original Terra rejection, Alpha adjudication and replacement argument, and final Terra rejection. The global convention quantifies over all support primes and includes zero modules vacuously.

Source verification: https://stacks.math.columbia.edu/tag/0AAI — opened the complete statement and proof of Lemma 10.103.13. It confirms polynomial extension of Cohen--Macaulay modules and the strategy of adjoining a fibre nonzerodivisor after base parameters. Its proof is phrased at maximal polynomial primes. The local proof here separately handles arbitrary support primes, including the zero fibre prime; it does not import an unsupported flat-local depth equality.

Terra is right that a unit multiple cannot remove a leading coefficient lying in p. The repair chooses a monic generator of the nonzero prime in kappa(p)[X] and lifts its coefficients to R_p. The lift belongs to P' because P' contains pR_p[X] and is the inverse image of its residue prime. Monicity then proves injectivity by highest-coefficient comparison. A finite composition series of the parameter quotient N identifies the support of N[X] localized at P'. At zero fibre prime this quotient already has finite length; at nonzero fibre prime the monic lift leaves a nonzero finite-length quotient, using Nakayama. The least-parameter-length characterization bounds support dimension by the length of the resulting regular tuple. Depth is at least that length and at most support dimension, giving equality without an unstated dimension formula.

The base parameters exist by the module parameter theorem and are regular by the CM parameter corollary. Polynomial faithful flatness and localization preserve regularity, with the nonzero localized final quotient checked explicitly. M=0 and d=0 are covered. Added only local citation edges, exact citation contracts, and concrete boundary entries; aligned the manifest and both contract copies. No dependency body changed, hence no prerequisite licence was needed.

Focused precheck passed; strict batch-9 contracts passed (67/67); depcheck exited successfully with no cycles or unresolved references (475 repository warnings). No judge stamp was created. No unresolved obligation remains. Next: record, then item 5.
