# FA terminal evidence — item 7

Decision: repaired. Read the lemma, all four original dependencies in full,
added xi definition, published Stirling and von-Mangoldt logarithmic-derivative
theorems, Perron A/B pages and batch-7 conventions, manifest/coverage/notes,
contract and risk_review, reader evidence and exact initial/Sol/final Terra
records. The unit-interval corollary supplies the count but cannot by itself
bound a harmonic tail, as the final rejection correctly observes.

Subtract the xi logarithmic derivatives at s and s0=2+it. The constants and
canonical corrections cancel. Each nonlocal difference is bounded by
3/|t-gamma|^2, and the unit-band count gives a convergent sum of
log(|t|+k+3)/k^2 = O(log(|t|+2)). Local subtracted terms are at most one each
because 0<beta<1, and there are O(log(|t|+2)) of them. The reference value
is O(log(|t|+2)) by the absolutely convergent zeta logarithmic-derivative series
at real part 2 and differentiated sectorial Stirling. Cauchy estimates in a
slightly larger sector justify differentiating the analytic Stirling remainder.

Independently found that the old all-height statement is false near s=1:
the zeta logarithmic derivative has principal part -1/(s-1), which cannot be
absorbed in O(log(|t|+2)). The final statement retains that term explicitly.
Writing xi=(s-1) pi^(-s/2) Gamma(1+s/2) zeta also removes the apparent Gamma
singularity at zero. Its Gamma argument has real part at least 1/2, so compact
heights are controlled. For |t|>=2 the correction is bounded and the originally
intended contour formula is recovered. Multiplicities and strict unit cutoff
are unchanged.

Verified authoritative source sections:
https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf
Andersen, complete Lemma 11.1 and proof, printed pp. 41–42: reference-point
subtraction, inverse-square difference estimate and large-height domain t>=2.
https://kskedlaya.org/ant/chapter-10.html
Kedlaya, section 10.3, Lemmas 10.3–10.4: local zero-count and contour use.
The bounded-height pole correction is derived independently from the exact
xi identity; it is not attributed to a source asserting an all-height formula.

Updated this item's manifest dependencies, proof derivations, source list and
boundary/risk contract. No dependency file changed; no prerequisite licence.
Focused precheck/rendercheck and strict batch-7 contracts pass (43/43).
No judge call/stamp. No open obligation. Next: record item 7, then Dedekind-Kummer.
