# FA terminal evidence — queue b, item 3

Item: `thm-hadamard-lacunary-sets-are-sidon`.
Decision: repaired independently. No direct dependency edit or prerequisite licence needed.

Read the current theorem and the three direct prerequisites (`def-sidon-set-in-the-integer-dual`, `lem-riesz-product-for-a-hadamard-lacunary-set`, `thm-holder-inequality-for-integrals`), plus the Riesz lemma's gap/character conventions, both lacunary A/B pages, batch-6 notes, manifest and coverage entries, contracts (previously no item risk review), reader/refuter evidence, Alpha section 34, and both Terra rejections. Normalized period-one measure, positive increasing integer frequencies, original indices j>=1 and arbitrary complex coefficients are retained.

The final Holder rejection identifies an avoidable scope mismatch. The repaired estimate explicitly applies the real endpoint theorem to |F| and P, after deriving the complex integral triangle bound by rotation and real parts. More seriously, Sol's repair only establishes ratio-three separation within each class. It does not imply zero coefficients at other classes' frequencies, which its pairing equality requires.

Concrete diagnostic: the sequence prefix 100,120,144,173,208,250,300,400 has successive ratios at least 6/5. With r=7, q^r>=3, the first class contains 100 and 400. Its product with phases 1 has coefficient 1/4 at -300, from 100-400. Pairing against a polynomial with a nonzero e_300 coefficient therefore produces an extra term. The old displayed equality omits it. The prefix extends to an infinite lacunary sequence by taking successive ceilings of q times the last integer.

Source verification: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — full 647-page textbook fetched and the complete proof of Theorem 3.6.6 read at printed pp.233–235 / PDF indices 249–251, particularly (3.6.18), (3.6.21), and the support exclusion before (3.6.22). It supplies the missing second condition (q^r-1)^(-1)<1-1/q. PDF screenshot fetch failed, but the full extracted passage including both inequalities and the following support argument was available and read. No snippet or aggregator was used.

Independent repair verification: in a signed product frequency m, let L be the largest contributing class frequency. The geometric sum of smaller terms is strictly less than L/(q^r-1). The new condition puts |m| strictly closer to L than any other original frequency, since those lie below L/q or above qL. Thus only frequencies from the product's own class can pair with F. The unchanged Riesz lemma provides positivity, mass one, and the prescribed class coefficients; its elementary largest-frequency proof was checked. Summing the correct pairings gives 2r. The theorem now advertises this proven sufficient choice of r rather than the unsupported stronger quantitative assertion. Such r always exists. Finite support, empty classes, and zero coefficients are explicitly handled.

Only the queued theorem and its batch-6/merged contract entries were changed. Their derivations, citations, empty boundary, and risk review match the new four-step proof. The manifest and coverage promise the qualitative Sidon theorem, which is preserved; no local dependant requires the former quantitative bound.

Focused validation: precheck pass; strict proof-contract check 1/1 with zero errors/warnings; rendercheck pass, all on final bytes. No judge or pass stamp created. No unresolved obligation. Next action: record exact bytes, then review item 4 after recorder success.
