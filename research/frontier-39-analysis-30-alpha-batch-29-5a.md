# Batch 29 Step 5a adjudication

Run: frontier-39-analysis-30. Group: batch-29. Scope: batch 29 only. No judges, stamps, or engine transitions invoked.

## def-full-rank-lattice-covolume-and-dual-lattice

Reviewed the current full definition and all 18 supplier claim sections. For B=AU, integrality of U and its inverse forces determinant ±1; both dual inclusions follow by testing basis columns, and transpose/inverse determinant laws give reciprocal covolume. The character claim is explicitly restricted to exponential characters, with injectivity tested on all real x. n≥1 excludes zero-dimensional ambiguity; zero vectors and n=1 are included. Algebra uses no Choice. Silberman §1 and Elkies §2 are corroborating references; the local derivations establish the definition.

Disposition: risk review only; no routed decision. Risk review complete. Next: continue in generated dependency order.

## def-normalized-sinc-function

Reviewed the current definition and all ten supplier claim sections. The denominator is nonzero off 0; substitution u=πt meets the composition-limit caveat, and sin(u)/u tends to 1. Oddness yields even sinc including 0, the sine zero set yields all nonzero integer zeros, and the Lipschitz/Pythagorean bounds give |sinc|≤1 and the inverse-linear tail. No L2 self-transform claim is made and no Choice is used.

Disposition: risk review only; no routed decision. Risk review complete. Next: continue in generated dependency order.

## lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval

Accepted the reader correction to the half-open circular spectrum and endpoint/null-set treatment. Reviewed all four proof steps and twelve exact supplier claim sections: finite band measure gives L1, inversion/agreement gives the continuous representative, reflection and the two substitutions on [0,1) yield h^(1/2)f(hk), and Riesz–Fischer plus Plancherel yields the sample norm h^(-1)||f||². Jacobian h cancels h^(-1) in the norm; endpoint changes and representative changes preserve the torus class. h>0 and Countable Choice cover all cited measure/L2 interfaces. Current item hash equals post-reader and differs from pre-reader; no further item edit.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## lem-invertible-linear-substitutions-preserve-schwartz-space

Accepted the reader correction after reviewing the entire current proof and fifteen supplier interfaces. Ordered chain-rule words can be grouped by multi-index only after smooth mixed-partial symmetry, applied to both real components. For (1+Σ|x_i|)^N the corrected coefficient is N!/((N−|δ|)!δ!), including N=0. Invertibility bounds y=A^(-1)x; the finite seminorm maximum yields continuity and replacing A by its inverse yields both inverse identities. This is a finite, choice-free argument. Current bytes match the post-reader hash and differ from pre-reader.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## cex-undersampling-identifies-two-distinct-pure-frequencies

Accepted the corrected title and source attribution. Checked both proof steps and the exact exponential addition, kernel and Euler interfaces: m≠0 makes ξ+m/h distinct; at every hk the quotient is exp(2πimk)=1, whereas at h/(2m) it is −1. h>0 prevents division by zero. Constant-modulus functions are outside L2(R), so this does not refute Shannon. The witness itself needs no Choice although Countable Choice is assumed. The title now states reciprocal-shift equality rather than an unsupported above-rate claim; current bytes match the post-reader hash.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis

Accepted the explicit t>0 and inherited Countable Choice qualifications. Read the current recorded pointer and the exact published Gaussian example, including its two verification steps. The supplier states θ(t)=t^(-1/2)θ(1/t) only for real t>0; at t=0 its series diverges. The pointer creates no cross-examples dependency and correctly leaves the proof with its existing owner. Source locators are Sutherland §16.1/16.1.1 and Laugesen Example 23.7. Current bytes equal the post-reader hash.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## lem-lattice-fundamental-parallelotope-partitions-euclidean-space

Accepted the correction that both volume suppliers assume Countable Choice. Read all three proof steps and eight supplier interfaces. The unique coordinate split t=m+s with s∈(0,1] gives exact disjointness, including integer endpoints and x=0 (m=−1 in every coordinate). A is injective; the half-open box has measure one, and linear change of variables gives |det A|, with no singular case claimed. The decomposition is choice-free; only the volume proof inherits ACω. Current bytes match the post-reader hash.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable

Accepted the reader additions of derivative closure, mixed-partial symmetry and uniform-limit continuity, and the corrected Silberman Exercise 4 locator (PDF p.2, read directly). Checked all four proof steps and thirteen suppliers. For g=(∂γh)∘A the unit-lattice convergence clause transfers by A^(-1) on compact sets; translating g gives absolute convergence at each x. Uniform derivative convergence on the closed coordinate interval applies separately to both real parts at the interior point 0. Induction along ordered words gives smoothness before multi-index grouping, and absolute convergence licenses periodic reindexing. ACω is inherited from the unit Poisson convergence supplier. Current bytes match post-reader.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## thm-shannon-sampling-for-bandlimited-ltwo-functions

Reviewed five proof steps and all eighteen supplier claim sections. The h-rescaling converts the reflected torus spectrum to h f(hk) exp(−2πihkξ)1_B. The complex primitive yields h^(-1)sinc((x+hk)/h), including u=0, and reflected inversion gives the required minus shift. Unitary inversion gives L2 convergence. An ℓ1 sample family majorizes the series uniformly; a subsequence plus positivity of interval measure upgrades equality of continuous representatives from almost everywhere to everywhere. ACω is explicit; zero input and endpoints are harmless. Item bytes are unchanged pre/post; the routed change is contract citation/derivation enrichment, not a mathematical defect.

Disposition: reviewed_no_defect. Risk review complete. Next: continue in generated dependency order.

## ex-dual-lattice-and-covolume-for-a-diagonal-scaling

Reviewed the entire two-step verification and four supplier interfaces. The identity permutation is the only nonzero Leibniz term; the diagonal reciprocal is both a left and right inverse, and transpose fixes it. Thus covolume is Π|a_i|, not Πa_i or its reciprocal. Negative a_i are allowed and no division by zero occurs. The n=1 sampling specialization requires h>0 and yields (hZ)*=h^(-1)Z. Item bytes are unchanged pre/post; routed changes are audit enrichment of exact citation evidence.

Disposition: reviewed_no_defect. Risk review complete. Next: continue in generated dependency order.

## lem-character-orthogonality-on-a-lattice-fundamental-domain

Confirmed flagged:29:3 as nonfatal: the original [F2] supplies nonnegative substitution, while step 1.1 uses a complex character. Explicitly applied it and the null-integral clause to the positive/negative parts of real/imaginary components; unit modulus and finite volume ensure finiteness. This completes the extension without altering the Statement or dependencies. Checked all three proof steps and sixteen exact supplier interfaces: c=A^T(λ*−η*) is integral and zero iff the characters coincide; Fubini and the primitive give each factor 0 or 1; |det A| cancels. ACω and null tilted boundaries are covered. Contract derivation d-1.1 now reproduces the corrected step. Current item differs from both raw pre/post hashes.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## lem-fourier-coefficients-of-lattice-periodisation

Read all three proof steps and thirteen exact supplier interfaces. Tonelli on the countable lattice×F gives Σ∫F|f(x+λ)|=||f||1, so complex Fubini applies. Translation y=x+λ preserves measure and the phase because λ*·λ is integral; exact half-open tiling identifies the sum with the whole-space transform. Normalized Haar coefficients have factor covol(Λ)^(-1), including λ*=0. ACω is explicit, and zero input is harmless. Item bytes are identical in pre/post: the routed change enriches citation and derivation evidence; no mathematical defect.

Disposition: reviewed_no_defect. Risk review complete. Next: continue in generated dependency order.

## lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients

Accepted the reader correction supplying compact-image boundedness and tilted-boundary nullity. Checked both proof steps and sixteen interfaces: h∘A is continuous and Z^n-periodic; the negative character becomes A^(-T)k under substitution and gives zero coefficients. The closed cube is compact, h is bounded on its image, and finite null faces stay null under invertible A. Thus the closed-cube coefficients meet the exact published unit-lattice uniqueness statement. Surjectivity of A yields everywhere zero and taking differences yields uniqueness. ACω is explicit; no L1-to-pointwise uniqueness overreach occurs. Current bytes match post-reader.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## ex-shannon-reconstruction-of-a-sinc-function

Accepted removal of the false self-transform claim and correction of the Silberman locator. Read both verification steps and ten exact supplier interfaces. The indicator is in L1∩L2; its complex primitive gives sinc, and agreement plus F2²=reflection gives F2(sinc)=indicator. The bounds |sinc|≤min(1,1/(π|t|)) are square integrable by splitting at |t|=1. Integer samples are δk0, so the Shannon series has one term and ℓ1 norm one. Endpoint assignments do not change L2 classes. Directly read Silberman PDF pp.4–5: Exercise 12(3) is exp(−|x|); Exercise 16(7) is L2 inversion. Read Laugesen Theorem 22.3 and complete proof pp.131–133. Current bytes match post-reader.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## thm-poisson-summation-for-a-full-rank-lattice

Accepted the added uniform-limit continuity interfaces. Read all four proof steps and seventeen exact supplier claims, and the integrability supplier proof for its weight estimate. Schwartz radial bounds also follow directly by expanding (1+Σ|ξj|)^N into finitely many seminorms. Lattice ball growth O(r^n) and N>n+1 give absolute dual summability; the zero shell is finite. The resulting series is continuous and periodic; orthogonality gives the coefficient fhat(η*) with precisely c^(-1), matching the periodisation coefficients. Continuous Fourier uniqueness gives equality everywhere and evaluation at 0. ACω is retained, and the unit-lattice case reduces to the published normalization. Current bytes match post-reader.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## thm-poisson-summation-under-two-sided-polynomial-decay

Accepted the named compact-boundedness and translation-substitution interfaces. Read all four proof steps and twenty exact supplier claim sections, and Laugesen Theorem 23.5 with the complete proof (printed pp.137–138). The local proof correctly uses dyadic annuli: O(2^(jn)) points times O(2^(−j(n+ε))) gives a geometric 2^(−jε) tail, requiring ε>0 rather than ε>1. Uniformity on compact x sets follows after 2^j≥2R; finitely many remaining translates are continuous. Tonelli and complex translation substitution identify coefficients; dual decay gives a globally uniformly convergent Fourier series and uniqueness yields everywhere equality. Both sufficient bounds, continuity, ACω and covolume c^(-1) are preserved. Current bytes match post-reader.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb

Accepted the reader repair extending the seminorm decay estimate to every real lattice point. Checked all three proof steps and thirteen interfaces. Expanding (1+Σ|xj|)^L gives a finite-seminorm bound for all real x; with integer L>n+1, O((1+m)^n) shell growth gives absolute summability and a continuous complex-linear functional. Apply Poisson to Fφ, use the bilinear definition <Fu,φ>=<u,Fφ> and F²φ=φ(−·), and reindex the symmetric dual lattice. The resulting coefficient is c^(-1); no conjugation appears. The unit-comb item is only a normalization cross-check. ACω is explicit. Current bytes match post-reader.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation

Accepted the reader correction of the boundary double-counting account and amended the remaining external_dependency.necessity text, which still called the particular decay bounds essential. Read the complete recorded warning, three cited interfaces, and Laugesen Example 23.2/Lemma 23.3 (printed pp.135–136) plus Theorem 23.5/proof (pp.137–138). At 0 exactly one translate contributes: Pe(f)(0)=2π, with one-sided limits 4π and 2π; rescaled piecewise-C1 midpoint convergence gives 3π. Half-open cells are disjoint. The example refutes bare L1 with assigned values, not all alternatives to polynomial decay. ACω is explicit. It remains a recorded, not-proved-here warning, and no new theorem or dependency is introduced.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## lem-sampling-produces-periodisation-in-frequency

Reviewed all three proof steps and eleven supplier interfaces. Multiplication by the Schwartz f preserves tests and transposes to f·comb, whose pairing is Σf(λ)ψ(λ) with absolute convergence. The product-transform theorem permits precisely a Schwartz function times a tempered distribution; its convolution notation is explicitly distribution-first. Comb duality therefore gives c^(-1)(comb_dual*fhat)(x)=c^(-1)Σfhat(x−λ*); no arbitrary distribution product or convolution is used. hI has c=h^n and dual h^(-1)Z^n, so the frequency periodization has h^(−n). ACω is retained and zero input is valid. Item bytes are unchanged pre/post; contract enrichment is the routed change.

Disposition: reviewed_no_defect. Risk review complete. Next: continue in generated dependency order.

## cor-nyquist-no-aliasing-condition

Accepted the reader correction distinguishing measurable no-overlap, the Schwartz-only distributional identity and centered Shannon reconstruction. Checked all three steps and nine exact supplier interfaces. Distinct translates of a containing interval of length 1/h meet in at most one point, hence a null set; translation and countable subadditivity handle representative exceptions and all pairwise overlaps together. Off that null union Q has at most one nonzero term and equals fhat on E. The empty/null E and zero signal are valid. The centered closed-band endpoints remain a.e. disjoint. No arbitrary-L2 sampling-distribution theorem is claimed; ACω is retained. Current bytes match post-reader.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## rem-aliasing-above-the-nyquist-rate

Confirmed flagged:29:4 as fatal and amended the title to require positive-measure overlap. E=[0,1], h=1 gives only the null singleton E∩(E+1)={1}, so bare overlap cannot support a nonzero L2 witness. Reviewed the complete current witness and twelve exact supplier interfaces. A bounded half-open cell shorter than |m|/h selects positive finite-measure D⊂E∩(E+m/h); D and D−m/h are disjoint and both in E. Thus g=1_D−1_(D−m/h) is nonzero in L1∩L2. Unitary inversion gives a nonzero continuous signal, and its samples have factor 1−exp(−2πimk)=0. Both signs of m work. The disconnected example has disjoint fractional parts and correctly refutes mere excessive enclosing width. ACω is explicit and the Schwartz-only sampling identity is not extended. The reader witness repair is retained; only the title changes now.

Disposition: amended_repair. Risk review complete. Next: continue in generated dependency order.

## Page obligations and ledger dispositions

A page: Accepted the reader corrections after reading the entire A page and every listed carrier: the transform convention is negative-sign 2π-normalized, reciprocal bands are disjoint only up to null sets, and aliasing requires positive-measure overlap. The page correctly distinguishes Schwartz distributions from the L2 centered-band reconstruction and inherits at most ACω. Its item order keeps each local supplier before its consumers. Current page raw hash matches the post-reader snapshot; no A-page edit by Alpha.

B-page reader:29:1 / flagged:29:1: Confirmed the original page self-transform claim as fatal. The current example proves F2(sinc)=1_[−1/2,1/2], and at 3/2 sinc=−2/(3π) on a nonzero neighborhood while the indicator is zero. Replaced the B-page claim with the indicator/sinc Fourier pair; samples and single-term reconstruction remain unchanged.

B-page reader:29:2 / flagged:29:2: Confirmed the original page boundary/necessity account as fatal. Exact half-open tiling is disjoint; Laugesen Example 23.2 has one contributing translate at 0, Pe(f)(0)=2π and one-sided limits 4π and 2π, so the piecewise-C1 Fourier series converges to 3π. Replaced the account by the jump versus assigned value and stated that the particular polynomial decay bounds are sufficient rather than necessary for each function.

Flagged:29:3 is confirmed_nonfatal, and flagged:29:4 is confirmed_fatal, with their evidence above. Duplicate reader/refuter observations map to one closed row per defect and explicit same_defect_as bindings. All completed repairs have repair_confidence 1.

The four unchanged item carriers with enriched audit contracts (Shannon, diagonal example, periodisation coefficients and sampling periodisation) receive reviewed_no_defect, change_kind audit_enrichment and no defect rows. Definitions have risk reviews only. Remaining reader corrections are retained; synchronization of stale manifest metadata/claims makes their carrier verdict amended_repair. The A-page verdict remains accepted_repair.

Ledger rows (22 distinct defects):

- `f39-b29-5a-bandlimited-samples-are-fourier-coefficients-on-the-band-interval-01`: lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval; nonfatal; The reader replaced a closed-interval periodic representative by a half-open representative and supplied class-independence/null-endpoint justification; the current norm and coefficient identities are independently checked.
- `f39-b29-5a-invertible-linear-substitutions-preserve-schwartz-space-01`: lem-invertible-linear-substitutions-preserve-schwartz-space; nonfatal; Ordered chain-rule derivatives require smooth mixed-partial symmetry before grouping by multi-index; the reader supplies the exact interface.
- `f39-b29-5a-invertible-linear-substitutions-preserve-schwartz-space-02`: lem-invertible-linear-substitutions-preserve-schwartz-space; fatal; The correct coefficient in (1+Σ|xi|)^N is N!/((N−|δ|)!δ!), including the constant-term exponent; the corrected reader computation yields the stated finite seminorm estimate.
- `f39-b29-5a-undersampling-identifies-two-distinct-pure-frequencies-01`: cex-undersampling-identifies-two-distinct-pure-frequencies; fatal; The original above-sampling-rate title asserted a rate restriction absent from ξ and m/h; the reader title now describes exactly the reciprocal-shift witness.
- `f39-b29-5a-undersampling-identifies-two-distinct-pure-frequencies-02`: cex-undersampling-identifies-two-distinct-pure-frequencies; nonfatal; Laugesen Remark 22.4 discusses proportional rate and sinc zeros, not the attributed pure-frequency failure theorem; the source description now identifies the locally computed witness.
- `f39-b29-5a-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis-01`: rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis; fatal; The recorded theta pointer must specify t>0 and the published supplier’s Countable Choice hypothesis; t=0 produces a divergent series. The reader supplies both.
- `f39-b29-5a-lattice-fundamental-parallelotope-partitions-euclidean-space-01`: lem-lattice-fundamental-parallelotope-partitions-euclidean-space; nonfatal; The box-measure and linear-volume suppliers both assume ACω; the reader corrected the earlier attribution to linear change of variables alone. The geometric unique decomposition remains choice-free.
- `f39-b29-5a-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable-01`: lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable; nonfatal; The reader supplies derivative closure, ordered-word induction/mixed-partial symmetry and componentwise uniform-limit continuity used to establish smoothness.
- `f39-b29-5a-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable-02`: lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable; nonfatal; Silberman Exercise 4 is on PDF p.2; the reader corrected its locator, independently checked from the downloaded author PDF.
- `f39-b29-5a-character-orthogonality-on-a-lattice-fundamental-domain-01`: lem-character-orthogonality-on-a-lattice-fundamental-domain; nonfatal; Step 1.1 applied nonnegative substitution to a complex character. The local correction applies it to the four nonnegative real/imaginary parts; boundedness on finite-volume F makes recombination valid.
- `f39-b29-5a-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients-01`: lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients; nonfatal; The reader supplies compactness/boundedness and linear-image boundary nullity before substituting an integrable continuous function and using the closed-cube uniqueness interface.
- `f39-b29-5a-shannon-reconstruction-of-a-sinc-function-01`: ex-shannon-reconstruction-of-a-sinc-function; fatal; The reader removed the false sinc self-transform assertion in Verification 2.1; the actual pair is F2(sinc)=1_[−1/2,1/2], as independently established by the primitive and F2²=R.
- `f39-b29-5a-shannon-reconstruction-of-a-sinc-function-02`: ex-shannon-reconstruction-of-a-sinc-function; nonfatal; Silberman Exercise 12(3) is exp(−|x|), not an interval indicator. The reader source locator now cites the convention and L2 inversion, with the pair proved locally.
- `f39-b29-5a-poisson-summation-for-a-full-rank-lattice-01`: thm-poisson-summation-for-a-full-rank-lattice; nonfatal; The reader names the real uniform-limit and componentwise continuity suppliers used for the continuous Fourier-series sum.
- `f39-b29-5a-poisson-summation-under-two-sided-polynomial-decay-01`: thm-poisson-summation-under-two-sided-polynomial-decay; nonfatal; Translation substitution does not follow from Fubini/Tonelli alone. The reader names translation invariance and the L1 change-of-variables interface, and names compact boundedness.
- `f39-b29-5a-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb-01`: lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb; nonfatal; The unit-comb bound was stated only at integer points; the reader gives the finite multinomial seminorm bound at every real point, which the arbitrary-lattice shell proof uses.
- `f39-b29-5a-lone-integrability-alone-does-not-license-pointwise-poisson-summation-01`: rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation; fatal; The reader replaces boundary double-counting by the jump/assigned-value discrepancy and distinguishes sufficient decay from necessity. Alpha also corrects the residual external_dependency.necessity overclaim.
- `f39-b29-5a-nyquist-no-aliasing-condition-01`: cor-nyquist-no-aliasing-condition; fatal; The reader separates general L2 a.e. support disjointness from the Schwartz-only sampling-distribution identity and the centered-band Shannon condition, preventing an unsupported arbitrary-L2 identity.
- `f39-b29-5a-aliasing-above-the-nyquist-rate-01`: rem-aliasing-above-the-nyquist-rate; fatal; The reader removed the reversed rate terminology and proved the positive-measure overlap witness; Alpha corrects the residual title’s missing positive-measure qualification. E=[0,1], h=1 only touches at {1} and cannot support an L2 alias witness.
- `f39-b29-5a-poisson-summation-sampling-and-lattice-duality-01`: poisson-summation-sampling-and-lattice-duality; fatal; The reader corrected the false 2π-free convention label and the unqualified overlap/no-overlap rate summary; the current summary matches the independently reviewed item interfaces.
- `f39-b29-5a-poisson-summation-sampling-and-lattice-duality-examples-01`: poisson-summation-sampling-and-lattice-duality-examples; fatal; Confirmed the original page self-transform claim as fatal. The current example proves F2(sinc)=1_[−1/2,1/2], and at 3/2 sinc=−2/(3π) on a nonzero neighborhood while the indicator is zero. Replaced the B-page claim with the indicator/sinc Fourier pair; samples and single-term reconstruction remain unchanged.
- `f39-b29-5a-poisson-summation-sampling-and-lattice-duality-examples-02`: poisson-summation-sampling-and-lattice-duality-examples; fatal; Confirmed the original page boundary/necessity account as fatal. Exact half-open tiling is disjoint; Laugesen Example 23.2 has one contributing translate at 0, Pe(f)(0)=2π and one-sided limits 4π and 2π, so the piecewise-C1 Fourier series converges to 3π. Replaced the account by the jump versus assigned value and stated that the particular polynomial decay bounds are sufficient rather than necessary for each function.

## Sources consulted and limits

Authoritative sources actually read:

- [Laugesen, Harmonic Analysis Lecture Notes](https://arxiv.org/pdf/0903.3845): Theorem 14.2, printed p.80; Theorem 22.3 and full proof (22.1)–(22.2), pp.131–133; Definition 23.1, Example 23.2 and Lemma 23.3, pp.135–136; Theorem 23.5 and full proof, pp.137–138; theta functional equation/proof, p.140. Its frequency convention has no 2π in the exponent and the inverse has (2π)^(-d); our primitive and coefficient calculations check the conversion to the library convention. Its sampling theorem supplies more uniform convergence than this page promises; the owned claim only needs the proved L2 and additional ℓ1 conclusions.
- [Silberman, Fourier series and the Poisson summation formula](https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf): all five PDF pages, especially Exercises 1–2 and 5–6 (lattice, dual, covolume), Exercise 4 (smooth periodisation, p.2), Exercises 7–11 (characters, orthogonality, inverse map), Exercise 13 (coefficient factor c^(-1), p.4) and Exercise 16(7) (L2 isometry/reflection, p.5). Exercise 12(3) is the exponential absolute-value example, not an indicator transform. The local exact half-open tiling and sums are proved directly rather than adopting source shorthand for boundaries or “absolute” L2 series convergence.
- [Elkies, Theta functions and weighted theta functions of Euclidean lattices](https://people.math.harvard.edu/~elkies/aws09.pdf): Theorem 2 and the complete Poisson argument (25)–(32), printed pp.9–11, read through the web PDF text. The source uses the positive Fourier sign and disc(L)^(-1/2); the local symmetric dual lattice permits sign reindexing and disc(L)=covol(L)^2 gives c^(-1).
- [Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf): §7, printed pp.71–73, including (7.1), (7.11)–(7.18); rectangular periodisation and the Gaussian/Jacobi instance corroborate the described context.
- [Sutherland, MIT 18.785 Lecture 16](https://math.mit.edu/classes/18.785/2015fa/LectureNotes16.pdf): PDF pp.1–3, including Definitions 16.1–16.2, Theorem 16.3/proof, Lemma 16.4, and the complete theta Lemma 16.6/proof. The theta assertion explicitly has y>0. The recorded pointer uses that positive-parameter instance, not a negative-parameter reading of the source’s Corollary 16.5 shorthand.

The exact dependency Statement/Definition interfaces were read from the current item files, with repeated suppliers read once. Used quotes are retained in `research/frontier-39-analysis-30-batch-29.proof-contracts.json`; the strict local check confirms their current fidelity. This is a complete review of the routed authored arguments and their actual prerequisite uses, not a recursive certification of the entire published dependency corpus. The published Gaussian example was also read with its complete two-step verification. No defective published item was identified, so the published-consumer ledger and its lock were not touched.

The hash comparison used the task’s immutable pre/post item, contract, manifest and page fingerprints. All 22 current item raw hashes initially matched post-reader; 14 item hashes differed from pre-reader, and five further touched item carriers differed only in their contracts. Historical edit descriptions are evidence from the reader report and manifest, not a claim to have recovered every historical pre-reader byte. Current mathematical validity was independently checked. No prior batch-29 escalation was cleared and no owner authorization was invented. Alpha made three item edits: orthogonality step 1.1, the overlap title and the residual L1-warning necessity metadata. It also repaired the routed B-page prose and synchronized affected current manifest metadata/claims. The complete final decisions preserve that distinction.

## Consumer impact and cross-batch records

Actual direct dependency/reference uses of reader-edited claims were checked with a targeted item/page search:

- Bandlimited coefficient lemma: Shannon Proof 1.1 uses the corrected circular class and h^(1/2) coefficient; the sinc example F4/Verification 2.1 uses h=1. Both uses are sound and preserve endpoint class independence.
- Tiling lemma: orthogonality, periodisation coefficients, Fourier uniqueness, both Poisson theorems and the A-page summary use its exact disjoint tiling and covolume volume, with ACω already assumed. No consumer needs a stronger boundary assertion.
- Nyquist corollary and aliasing remark: only the owned A-page summary is an actual reference consumer; it already states a.e. disjointness and positive-measure overlap. The B-page pure-frequency explanation is consistent and explicitly outside L2.
- The sinc example and the L1/Gaussian recorded remarks: their owned B-page summaries are the actual reference uses. The two defective B paragraphs are now repaired; the Gaussian pointer retains published ownership.

No outside-batch item/reference consumer was found for these changed interfaces, so no outside repair alert is necessary. The two entries in `research/frontier-39-analysis-30-batch-29.cross-batch-dependencies.json` remain verified page-context edges to `pontryagin-duality-for-locally-compact-abelian-groups` and `finite-fourier-analysis-and-the-fast-fourier-transform`. Their page interfaces were opened; no batch-29 proof cites an item on either page. No new edge was introduced, no withdrawal proposed or removed, and no shared unified input was regenerated. The Step-5b lead still owns computed edge reconciliation and impact-window closure.

## Local checks and handoff

All commands exited 0 unless noted below:

- `node tools/tsx-run.mjs tools/reflow.mts` on the three explicitly changed item paths: all unchanged by reflow.
- `node tools/tsx-run.mjs tools/precheck.mts` on those paths: one proof-bearing item checked, zero failing; both prose remarks are inapplicable.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-29.proof-contracts.json --strict`: 22/22 items, zero errors or warnings.
- `node tools/rendercheck.mjs` on the three changed items and the B page, with `--quiet`: four files passed, with real KaTeX and YAML parsing.
- `node tools/risk-report.mjs research/frontier-39-analysis-30-batch-29.proof-contracts.json` was run before review and again before closing, then with `--require-reviewed`: zero errors, 22 routed items; all 19 HIGH/CRITICAL entries have specific complete risk reviews.
- After all item edits and reflow, exactly one final batched `node tools/proof-layout.mjs items/lem-character-orthogonality-on-a-lattice-fundamental-domain.md items/rem-aliasing-above-the-nyquist-rate.md items/rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation.md`: three items, three numbered steps, zero defects.
- `node tools/defect-ledger.mjs append --file /tmp/b29-defects.json`: 22 distinct closed rows appended and the canonical generated view refreshed under the tool’s append lock.

Temporary local inspection issues were corrected: the first Python command used the unavailable `python` alias; one helper encountered an empty deps list; an initial PDF download returned 403 for two sources (Elkies was read through the web tool and Sutherland through curl); and an artifact-reference script initially failed on blank ledger lines, then was corrected to filter them. These are mechanical inspection failures and have no defect rows. No mathematical check failure is hidden.

There are exactly 26 owed decisions, including both reader and all four refuter findings. The decisions JSON contains one per obligation. Local reference/shape checks confirm all referenced rows are closed and owned by the correct subject. No item had a judge record to invalidate; no judge, stamp, self-certification, dispatch, gate battery or engine transition was run. Remaining blockers: none in this dispatch. Next action: engine stamps current decision carriers and runs its gates; Step 5b reconciles cross-group obligations.
