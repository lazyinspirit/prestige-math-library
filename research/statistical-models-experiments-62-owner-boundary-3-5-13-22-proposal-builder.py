from pathlib import Path
import json,hashlib,datetime
R='statistical-models-experiments-62'
S=f'research/{R}-owner-boundary-3-5-13-22'
H=lambda b:hashlib.sha256(b).hexdigest()
def NA(reason): return {'status':'not_applicable','reason':reason}
def OK(evidence):return {'status':'checked','evidence':evidence}
# Each entry below records this owner's actual claim/proof/case inspection.
B5={
'def-wishart-law':('Definition fixes integers p,m>=1; its m Gaussian outer products never form an empty sum and Sym_p has positive dimension. Singular scale is allowed but does not change the number of factors.','Definition identifies the pushforward by the continuous outer-product sum with the law of that same sum of independent Gaussian vectors.','checked'),
'lem-standard-normal-matrix-has-full-row-rank-almost-surely':('Statement requires 1<=p<=m; step1.1 starts with a first standard-normal column and step2.1 uses the first p columns, so no zero-column case is claimed.','Statement proves independence of the first p columns almost surely and consequent positive definiteness of GG^T; step2.1 proves only this implication, with no characterization of non-Gaussian matrices.','not_applicable'),
'def-multivariate-normal-sample-model-and-statistics':('Definition sets n>=2,p>=1. The coordinate tuple and sums run from1 through n, and both denominators n and n-1 are positive; n=0 has no defined sample mean here.','Definition specifies a product experiment and the three continuous statistics R/(n-1),R/n and sample mean; it does not equate a property with a necessary-and-sufficient model condition.','not_applicable'),
'lem-standard-wishart-independent-normal-quadratic-form-is-f':('Statement assumes m>=p>=1, giving p positive numerator degrees and m-p+1 positive denominator degrees; an empty Gaussian matrix or zero-dimensional quadratic form is outside that domain.','Statement is the Fisher distribution conclusion for independent W and Z. Steps1.1 through4.1 establish that law under the stated hypotheses and assert no converse from an F-distributed scalar to independence or Wishart marginals.','not_applicable'),
 'thm-multivariate-normal-sample-mean-scatter-independence-and-wishart':('Statement requires n>=2,p>=1. Step4.1 retains n-1 residual normal vectors, so the scatter has at least one outer-product summand even when it is singular.','Statement gives the mean law, mean/scatter independence and Wishart scatter jointly; step5.1 adds positive definiteness when n>p, without asserting the converse of the Gaussian sampling assumption.','not_applicable'),
 'thm-covariance-likelihood-ratio-asymptotic-chi-square':('Statement fixes p>=1 and n>p; step3.1 needs the positive definite R/n and step4.1 its log determinant. These are positive sample sizes, not a zero-observation extension.','Statement supplies the likelihood-ratio identity and a fixed-dimensional limit. Step3.1 also proves the equality criterion for its log-likelihood bound: equality forces all eigenvalues of B to be1 and conversely Sigma=M makes B=I.','checked'),
 'thm-hotelling-t2-exact-f-distribution':('Statement assumes n>p>=1, hence n>=2 and n-p>=1. Steps2.1 and3.1 use n-1 Wishart degrees and a nonempty p-dimensional whitened vector.','Statement is an implication from the Gaussian null mu=mu0 to the scaled F law; steps1.1–3.1 do not infer the null or Gaussian model from a scalar distribution.','not_applicable'),
 'thm-wishart-trace-statistic-is-chi-square':('Statement permits singular scatter but requires p>=1,n>=2. Step1.1 has m=n-1>=1 and step3.1 counts pm>=1 independent squares; no empty trace-sum convention is needed.','Statement identifies an exact trace distribution, not a characterization of covariance equality; steps2.1–3.1 derive the sum of squares under the null without a reverse statistical implication.','not_applicable'),
 'cor-exact-hotelling-one-sample-test':('Statement fixes n>p>=1 and a specified mu0; step1.2 shows both parameter hypotheses nonempty, while step2.1 takes size over the nonempty positive-definite null covariances.','Statement describes an exact-size rejection test under the Gaussian null. Steps1.2–2.1 give its probability and supremum; acceptance of one observation is not asserted equivalent to the null being true.','not_applicable'),
 'ex-sample-covariance-singular-when-sample-size-not-exceeding-dimension':('Example quantifies over datasets with 2<=n<=p; step3.1 separately excludes even n=1 because n-1 vanishes. A dataset with zero vectors is outside the declared sample-size domain.','Example proves singularity for 2<=n<=p, using im(VV^T) contained in im(V) in step2.1. It does not assert singularity only when n<=p; collinear larger datasets may also be singular.','not_applicable'),
 'ex-exact-wishart-trace-and-asymptotic-covariance-lrt-differ':('Example fixes exactly four scalar observations, p=1 and positive null variance1; step1.1 computes R=3,S=1,M=3/4. No operation is defined on an absent sample.','Example compares trace3 with the logarithmic likelihood-ratio value about0.1507. Step3.1 explicitly keeps asymptotic calibration, so it gives neither a converse distribution characterization nor an equivalence of these statistics.','not_applicable'),
 'ex-hotelling-t2-two-dimensional-exact-test':('Example specifies four displayed vectors and p=2; step1.1 gives positive definite S=(2/3)I2. Deleting every observation would change the given numerical problem.','Example states rejection precisely when4 exceeds the F22 upper quantile. Step3.1 applies the deterministic rejection rule to the statistic4 computed in step2.1.','checked'),
}
B13={
'def-randomized-complete-block-design':('Definition makes a block complete exactly by assigning each of the t treatments once; the finite unit-to-treatment map is a permutation in S_t, in both directions.','Definition fixes t>=2,b>=1 and specifies independent uniform permutations on (S_t)^b, not a continuously indexed interval or a limiting treatment probability.'),
'lem-rcbd-nested-contrast-model-and-projection':('Statement identifies W_U perpendicular with the zero-row-and-column-sum arrays E. Step3.1 proves double-centered arrays orthogonal to the additive directions and conversely uses orthogonality to G,T,B to force every row and column sum zero.','Statement bounds the integer contrast rank by1<=q<=t-1; step1.1 handles q=t-1 with a zero-dimensional restricted treatment space, and step2.1 retains the constant/block directions. Both allowed q endpoints are included.'),
'def-randomized-latin-square-design':('Definition requires bijections in every row and column; because each has t entries into t treatments, this is equivalent to each treatment appearing once in each row and column, not an implication about arbitrary RCBD assignments.','Definition permits the order endpoint t=1: R_t has one residue, L0(0,0)=0 is the unique allocation. The comparison with independent RCBD permutations is explicitly restricted to t>=2.'),
'thm-paired-randomization-contrast-moments':('Statement derives the expectation and variance of the two assigned contrasts. Steps2.2 and3.1 compute these moments from equal weights; it asserts no converse identifying a potential-outcome schedule from its moments.','Statement fixes exactly two units and binary treatment labels0,1; steps1.1 and2.1 explicitly extend the contrast to the zero-weight assignments(0,0),(1,1). There is no variable confidence level or time interval.'),
'lem-randomly-selected-unit-effect-moments':('Statement gives two moments of the selected unit effect and says it is not observed-data measurable. Step1.1 varies an unobserved baseline while keeping observed outcomes fixed; the moment identities do not characterize the schedule conversely.','The selected label has exactly two equiprobable possibilities. Steps2.1–3.1 allow any real fixed effects, including equal effects and zero variance, without a varying probability endpoint.'),
'prop-rcbd-treatment-block-interaction-confounded-with-residual':('Statement asserts failure of a unique algebraic decomposition for unrestricted interaction/error vectors. Step2.1 exhibits arbitrary h shifts, and step3.1 computes saturated degrees of freedom; it explicitly disclaims a characterization under every extra stochastic model.','Statement sets t,b>=2 and one response per cell; step3.1 includes the smallest t=b=2 residual dimension1. The zero pure-error degrees after saturation are an asserted result, not an excluded endpoint.'),
'thm-rcbd-treatment-contrast-f-law':('Statement gives the central F law under the contrast null and separately imposed conditional Gaussian errors. Steps1.1–4.1 derive that implication, without inferring Gaussianity or a null mean from a realized statistic.','Statement includes q=1 and q=t-1 with nu=(t-1)(b-1)>0; step1.1 verifies all numerator and denominator degrees. Steps2.1–3.1 also retain the RSS_U=0 branch on its null-probability set.'),
'ex-missing-treatment-is-not-a-complete-block':('Example only exhibits a specific incomplete assignment: step1.1 checks its image{A,C} misses B, and step2.1 excludes it from permutations. It states no converse classifying every possible three-treatment block.','Example fixes three treatment labels and one block with two assigned units; step1.1 tests surjectivity to that fixed three-element set, not an endpoint of a varying interval.'),
'ex-latin-square-assignment-is-restricted':('Example separates two specific arrays, not equivalent design laws: step1.1 verifies the cyclic array and step1.2 shows the repeated-row array is RCBD but not Latin. No reverse relation between all square and RCBD outcomes is claimed.','At the probability endpoint zero, step2.1 assigns the repeated-row array Latin-square probability0, while its RCBD probability is1/216. The positive finite count6^3 and excluded allocation support are computed explicitly.'),
'ex-paired-randomization-contrast-with-heterogeneous-effects':('Example computes contrasts4,2, mean3 and variance1 for one fixed schedule. Steps1.1–2.1 establish those numbers and do not reconstruct the schedule from a variance value.','The binary assignment endpoints are the two treatment permutations in step1.1; they both have weight1/2, and step2.1 evaluates both squared deviations. No probability parameter tends to0 or1.'),
'ex-rcbd-interaction-shares-the-residual-subspace':('Example provides two distinct interaction/error pairs summing to R. Step2.1 proves both yield the same residual; it does not assert these are the only possible decompositions.','Example fixes a2-by2 array with entries+1,-1. Step2.1 explicitly includes zero interaction and zero projected error as alternate component endpoints, both within the double-centered subspace.'),
'cex-observed-paired-contrast-variance-is-not-effect-heterogeneity':('Statement refuted is a proposed universal variance equality, not an iff characterization. Steps2.1–3.1 distinguish observed variance90.25 from selected-effect variance1/4 at the displayed schedule.','Counterexample has fixed unit effects1 and0; step1.1 includes the zero effect and the two equally weighted contrasts-9,10. There is no confidence-probability interval whose endpoints require extension.'),
}
# IV rows use distinct factual context from each complete source, followed by
# this axis's own calculation or exclusion; these are not generic templates.
B22={
'def-instrumental-variable-potential-outcomes':{
'empty':NA('Definition starts with a probability space and real-valued random variables for units; P(Omega)=1 excludes an empty population carrier, while its two assignment events are explicitly positive.'),
'zero':OK('Definition permits zero potential outcomes and binary treatment0, but event-conditioned E[X|B] is explicitly restricted to P(B)>0. Thus no value is assigned by the displayed quotient at an empty or null B.'),
'one':OK('Definition includes treatment and instrument level1, while0<P(Z=1)<1 excludes an instrument that is surely1. A potential treatment A(z) identically1 remains an allowed binary measurable variable.'),
'degenerate':OK('Definition permits deterministic potential treatment/outcome schedules; its four model assumptions are stated as distinct conditions, so a constant A need not be relevant. A constant instrument is excluded by the two positive assignment atoms.'),
'endpoints':OK('Definition uses the closed binary state set{0,1} for A,Z and potential treatments, but the assignment probability is strictly between0 and1. Its conditioned-mean formula applies to either positive instrument atom without any endpoint extension.'),
'iff-forward':OK('Definition states the independence equivalence under exclusion. Projecting the full tuple onto A0,A1,Y(0,0),Y(1,0) yields the collapsed tuple, so independence of the full tuple and Z implies independence of the collapse by the independence definition.'),
'iff-reverse':OK('Definition under exclusion makes the full outcome array an almost-sure measurable duplication of Y0,Y1. Independence of Z and the collapsed tuple therefore implies independence of its duplicated full tuple; a.s. equality preserves every joint event probability.'),
'nonempty-choice':NA('Definition supplies the unit probability space and all potential variables, rather than choosing representatives from an indexed family. Its event mean is a fixed integral ratio on B of positive probability, not a choice operation.'),
},
'def-principal-strata-and-late':{
'empty':NA('Definition places the four strata inside the supplied unit probability space. The population carrier has mass1; an individual principal stratum may be empty, which is treated by the P(C)>0 condition rather than a population-empty extension.'),
'zero':OK('Definition defines LATE only if P(C)>0, so an empty or null complier stratum has no conditioned effect value. The unrestricted ATE remains an integrable expectation and may itself equal0.'),
'one':OK('Definition allows P(C)=1; then every unit is a complier almost surely and E[tau|C]=E[tau]. This follows directly from its conditioned-mean definition with denominator1.'),
'degenerate':OK('Definition enumerates all four binary treatment pairs and permits one stratum to have total mass1. ATE exists whenever Y0,Y1 are integrable; LATE exists for the all-complier case, but not for a degenerate all-never or all-always population.'),
'endpoints':OK('Definition includes complier probability1 and excludes probability0 only from the LATE quotient. The four pair conditions use equality at binary treatment values0 and1; no intermediate treatment endpoint is omitted.'),
'iff-forward':NA('Definition names strata by the four potential-treatment pairs and defines ATE/LATE expectations. It gives no theorem asserting that a Wald equality characterizes monotonicity or that LATE equals ATE.'),
'iff-reverse':NA('Definition warns that monotonicity does not assert equality of LATE and ATE. Nothing in the ATE or positive-complier conditional-mean definitions infers monotonicity from an effect equality.'),
'nonempty-choice':NA('Definition labels the four already specified pair events and computes expectation on a positive-mass C; it selects no unit from C and no version of a conditional distribution.'),
},
'def-wald-ratio':{
'empty':NA('Definition uses the observed contrasts from an already supplied IV probability law. No empty dataset or empirical sample average enters this population functional; both instrument atoms remain positive by the referenced setup.'),
'zero':OK('Definition explicitly requires Delta_A!=0. It permits Delta_Y=0 with nonzero first stage, producing psi_W=0, but assigns no quotient when relevance fails at Delta_A=0.'),
'one':OK('Definition permits a first stage of1 because both A means lie in[0,1]; then its denominator is1 and the ratio equals Delta_Y. Instrument assignment probability1 remains excluded by the inherited setup.'),
'degenerate':OK('Definition can have equal outcome means and thus a zero Wald ratio. It cannot define a ratio for deterministic equal treatment receipt across arms, since that makes Delta_A=0.'),
'endpoints':OK('Definition includes the binary-receipt first-stage endpoints+1 and-1 whenever nonzero, but excludes the zero denominator. Both arm means use the strict positive assignment-atom convention from the IV setup.'),
'iff-forward':NA('Definition supplies psi_W=Delta_Y/Delta_A as an observed-law functional. Its final sentence expressly makes no implication that the ratio equals a causal treatment effect, much less an equivalence.'),
'iff-reverse':NA('Definition contains no inference from an observed quotient value back to exclusion or independence; it only names the ratio on laws with nonzero treatment contrast.'),
'nonempty-choice':NA('Definition computes two specified conditional means and one quotient. These are unique integral values at positive assignment atoms, without choosing latent principal-stratum members.'),
},
}
B22.update({
'lem-iv-observed-contrasts-equal-potential-outcome-contrasts':{
'empty':NA('Statement assumes an IV setup with two positive instrument atoms. Step2.1 divides by each P(Z=z)>0, so an absent probability carrier or zero-mass instrument arm is outside the domain.'),
'zero':OK('Statement expressly needs no relevance. Steps3.1–4.1 subtract the two arm identities even when E[A1-A0]=0 or E[(A1-A0)tau]=0; there is no division by either contrast.'),
'one':OK('Step3.1 separately applies consistency at z=1 as well as z=0. If A1=1,A0=0 almost surely, step4.1 gives first stage1 and reduced form E[tau]; both are included without a stratum conditioning quotient.'),
'degenerate':OK('Steps1.1–2.1 require only integrability of the binary-weighted outcomes, so constant potential outcomes or deterministic A0,A1 are admitted. Equal A0,A1 give zero contrasts directly in step4.1.'),
'endpoints':OK('Steps2.1–3.1 cover the binary arm endpoints z=0,1 with positive masses; step4.1 allows signed treatment difference-1,0,1. No monotonicity removes the defier endpoint-1 in this lemma.'),
'iff-forward':NA('Statement asserts two observed-to-potential contrast identities under three core assumptions. Step4.1 derives both; it does not assert that those two numerical equalities imply the core assumptions.'),
'iff-reverse':NA('The identities may hold by cancellation without joint independence or exclusion. This lemma claims only their derivation from the supplied model in steps1.1–4.1, not a reverse test of validity.'),
'nonempty-choice':NA('Step1.1 forms fixed measurable algebraic functions of the supplied potential tuple and steps2.1–4.1 integrate them. No element, basis or conditional-law version is selected from a family.'),
},
'lem-binary-monotonicity-excludes-defiers':{
'empty':NA('Statement partitions the supplied Omega of a binary IV probability model. It allows an empty one of the three retained strata, but the full carrier cannot be empty under probability mass1.'),
'zero':OK('Steps1.1–2.1 explicitly remove defier probability to0 under almost-sure monotonicity. Any of never/always/complier events may also be null without invalidating the three-event partition.'),
'one':OK('Step1.1 includes pair(1,1), the always-taker endpoint, and pair(0,1), the complier endpoint. Step2.1 allows either event to have probability1; disjointness is unaffected when the other two have mass0.'),
'degenerate':OK('Step2.1 proves a partition up to a null exceptional set, not strict positivity of every stratum. An all-never, all-always or all-complier population still lies in exactly one listed event almost surely.'),
'endpoints':OK('Step1.1 exhausts all four binary pairs, including(0,0) and(1,1), and excludes only(1,0) almost surely. The endpoint values are used directly rather than inferred from an interior treatment argument.'),
'iff-forward':NA('Statement uses monotonicity to conclude a null defier event and a three-stratum partition. Steps1.1–2.1 prove that direction; no separate converse theorem is asserted even though the finite pair descriptions characterize each event.'),
'iff-reverse':NA('No reverse implication is part of the stated partition theorem: it assumes A1>=A0 before enumerating the retained pairs. Boundary metadata should not add a statistical converse beyond that claim.'),
'nonempty-choice':NA('The proof enumerates four fixed ordered pairs and uses event disjointness in step2.1. It chooses no representative unit from a stratum, whether or not that event is nonempty.'),
},
'lem-iv-first-stage-is-complier-proportion':{
'empty':NA('Statement is in the binary IV probability setup, and step2.1 explicitly uses positive instrument atom probabilities. An empty principal event is allowed but an empty target population is not.'),
'zero':OK('Steps1.1–2.1 prove Delta_A=P(C) without using relevance[A1], hence include P(C)=0 and Delta_A=0. Only step3.1, corresponding to the conditional relevance clause of the Statement, excludes this case and defines LATE.'),
'one':OK('Step1.1 identifies A1-A0 with1_C; if P(C)=1, step2.1 gives first stage1. This is the all-complier endpoint, not a violation of the positive instrument assignment probabilities.'),
'degenerate':OK('Statement first gives the identity and only then an if-relevant clause. Deterministic equal A0,A1 yield P(C)=0 in steps1.1–2.1, while the extra relevance premise cannot hold for that schedule.'),
'endpoints':OK('Steps1.1–2.1 allow P(C) across the closed interval[0,1]; step3.1 restricts only the relevance/LATE conclusion to positive mass. Binary monotonicity prevents a negative first stage without excluding the positive endpoint1.'),
'iff-forward':NA('Statement asserts an equality of first stage and complier mass and a conditional positivity conclusion under relevance. Steps2.1–3.1 prove those claims; it does not characterize independence by a first-stage equality.'),
'iff-reverse':NA('A observed first-stage value alone does not recover the latent treatment pair law. The source only establishes its identity with P(C) under consistency, independence and monotonicity in step2.1.'),
'nonempty-choice':NA('Step2.1 computes a product of event probabilities from independence of already supplied random elements. Step3.1 defines a positive-event conditional mean by its unique integral, without selecting a complier.'),
},
'lem-iv-reduced-form-is-complier-effect':{
'empty':NA('Statement takes expectations under a binary IV setup. Step2.1 explicitly treats a null C, but an empty probability carrier cannot supply the two arm expectations from the setup.'),
'zero':OK('Step2.1 expressly handles P(C)=0:1_C=0 almost surely makes the reduced form0, and E[tau|C] is not asserted. If C has positive mass but its mean effect is0, the factored reduced form is also0.'),
'one':OK('If P(C)=1, step2.1 factors the reduced form as1 times E[tau|C]=E[tau]. The event-conditioned mean then coincides with the unconditional effect mean, with no division by0.'),
'degenerate':OK('Step1.1 replaces the monotone receipt difference by the indicator of C and is valid for deterministic potential schedules. Step2.1 distinguishes an absent complier stratum from a present stratum with zero effect rather than conflating the two.'),
'endpoints':OK('The probability endpoints P(C)=0 and1 are both covered by step2.1: the first uses the null indicator and omits LATE; the second uses a denominator1 conditional mean. Instrument arms remain positive by the model.'),
'iff-forward':NA('Statement gives a reduced-form identity and its positive-complier factorization. Steps1.1–2.1 derive these from monotonicity and the core IV assumptions, without asserting that a factorization implies those assumptions.'),
'iff-reverse':NA('No reverse criterion is claimed for the observed reduced form: cancellations can yield the same number. The only conditional clause in the source is the explicitly positive P(C) needed for the conditioned effect formula.'),
'nonempty-choice':NA('Steps1.1–2.1 substitute an a.s. indicator identity and rearrange the given conditioned-mean quotient. They neither select outcome versions nor choose a unit from the positive-mass complier event.'),
},
 'thm-wald-identifies-a-homogeneous-effect':{
'empty':NA('Statement explicitly requires a nonempty full-data-law set Theta. Step4.1 considers pairs of its parameters, and step3.1 has a nonzero first stage, so no empty statistical model extension is claimed.'),
'zero':OK('Homogeneous tau0=0 is allowed by the Statement: step2.1 makes the reduced form0, and step3.1 divides by the still nonzero relevant first stage to identify ATE0. A zero first stage is excluded by relevance, not handled by a0/0 convention.'),
'one':OK('Step3.1 identifies any real tau0, including1. Under an all-complier schedule the first stage can also equal1; steps1.1–3.1 still divide a valid nonzero contrast, without requiring monotonicity in general.'),
'degenerate':OK('The individual effect is intentionally a degenerate constant by[A1]. Steps2.1–3.1 use that constant while allowing heterogeneous receipt types; only a treatment contrast of0 is outside relevance.'),
'endpoints':OK('Statement allows every real homogeneous effect and any nonzero binary-receipt first stage, including+1 or-1. Steps1.1–3.1 never use a positive sign assumption; assignment-probability endpoints0,1 stay excluded by the IV setup.'),
'iff-forward':NA('Statement concludes homogeneous-effect Wald equality and then identifiability. Step4.1 proves equal observed laws imply equal ATEs; it does not state identifiability only if all unit effects are constant.'),
'iff-reverse':NA('Homogeneity is a sufficient restriction in this theorem, not a necessary characterization of ATE identifiability. No reverse direction from a Wald value to constant unit effects is present in steps1.1–4.1.'),
'nonempty-choice':NA('Theta and its full-data laws are supplied. Step4.1 fixes arbitrary theta,eta with equal observed laws, uses the already defined ratio, and establishes equality of target values without choosing parameters from a family.'),
},
 'thm-wald-identifies-the-complier-average-effect':{
'empty':NA('Statement requires a nonempty class Theta and relevance. Step1.1 gives P(C)>0, hence this theorem excludes an empty complier event as well as an empty class of full-data laws.'),
'zero':OK('Step1.1 forces first stage P(C)>0, so zero denominator is outside the theorem. A zero complier effect remains allowed: then Delta_Y=0 and step2.1 identifies the zero LATE by a well-defined quotient.'),
'one':OK('Step1.1 permits P(C)=1; step2.1 then identifies the Wald ratio with the whole-population mean effect. It does not exclude an effect value1 or assume the complier mass is strictly below1.'),
'degenerate':OK('All-complier populations and constant or zero potential effects are allowed as long as the relevant first stage persists. Steps1.1–2.1 require positive mass, not within-C effect variability; all-always or all-never schedules violate relevance.'),
'endpoints':OK('Complier mass belongs to(0,1] here: step1.1 excludes0 by relevance but includes1. The instrument assignment law remains strictly inside(0,1), and step2.1 divides only by the proved positive complier mass.'),
'iff-forward':NA('Statement proves Wald=LATE and observed-law identifiability under all five IV conditions. Step3.1 is the equal-observed-law implication in the identifiability definition, not an iff between assumptions and observed ratios.'),
'iff-reverse':NA('The theorem does not infer monotonicity or exclusion from an equality of two effect values. Step2.1 uses these assumed model restrictions through the first-stage and reduced-form suppliers, only in the sufficient direction.'),
'nonempty-choice':NA('Step3.1 fixes any two supplied full-data laws with equal observed distributions and compares their uniquely defined contrasts. Neither the positive C event nor the nonempty Theta is used to make a selection.'),
},
})
E22={
'ex-randomized-encouragement-late-calculation':{
'empty':NA('Example gives four equally weighted types and a fair independent instrument; step1.1 constructs their nonempty eight-atom product. It never varies the type count down to0.'),
'zero':OK('Step2.1 includes treatment0 in both arms and nonreceipt outcomes fixed by the displayed types, and computes the nonzero first stage1/2 and reduced form1. It does not assert a Wald value for first stage0.'),
'one':OK('Step2.1 evaluates the Z=1 endpoint: treatment rate3/4 and outcome mean2, paired with the Z=0 rate1/4 and mean1. The two compliers effects1,3 have conditional mean2 in step1.1.'),
'endpoints':OK('Step1.1 assigns both binary instrument endpoints weight1/2 and includes the always pair(1,1) and never pair(0,0). Step2.1 computes means separately at those instrument values; no limiting assignment probability is used.'),
'degenerate':NA('Example fixes the mixture with complier mass1/2 and nonconstant effects1,3,4; step1.1 computes LATE2 and ATE3 for that law. It claims no extension to a one-type or zero-complier population.'),
'nonempty-choice':NA('Step1.1 explicitly takes a finite product of the four given types and a fair binary assignment. All means in step2.1 are finite sums, so no choice of conditional-law versions or units is made.'),
'iff-forward':NA('Example verifies one heterogeneous model with Wald2,LATE2,ATE3. Step2.1 is a numerical application of the LATE theorem, not a claim that Wald=LATE characterizes valid IV models.'),
'iff-reverse':NA('No model conditions are reconstructed from the calculated ratio2. The four type schedules and their independent assignment are fixed first in step1.1 and the agreement with LATE is only a computed consequence.'),
},
'ex-weak-first-stage-wald-ratio-sensitivity':{
'empty':NA('Example fixes two hypothetical ordered pairs of mean contrasts, each with denominator0.02. It has no observation-space or type-mixture construction to extend to an empty family; step1.1 evaluates both displayed pairs.'),
'one':NA('Example concerns two scalar contrast pairs, not a family indexed by sample size or dimension1. Step1.1 computes3 and3.5 from the fixed nonunit denominator0.02; no assertion at first stage1 is part of the problem.'),
'endpoints':NA('Example holds Delta_A=0.02 fixed and compares Delta_Y0.06 with0.07. Step2.1 computes change0.5 from these numbers; it makes no limiting claim as Delta_A approaches0 or a binary endpoint.'),
'degenerate':NA('Example expressly claims arithmetic only and no sampling distribution or causal validity. Its two nonzero-denominator pairs are fixed, so no degenerate random law or zero-variance limiting case is asserted in steps1.1–2.1.'),
'nonempty-choice':NA('The two contrast pairs are explicitly specified. Steps1.1–2.1 perform decimal divisions and subtraction, with no probability-law construction or choice principle.'),
'iff-forward':NA('Example states an arithmetic sensitivity calculation, not an inferential condition: step2.1 explicitly excludes sampling or causal conclusions. No forward implication of a statistical equivalence is asserted.'),
'iff-reverse':NA('Ratios3 and3.5 in step1.1 do not characterize a model; the source expressly declines any causal or sampling claim. There is consequently no reverse identification or validity statement to prove.'),
},
'ex-exclusion-violation-distorts-wald-ratio':{
'empty':NA('Example fixes two equally likely types c,n and a fair independent Z; step1.1 uses their four-atom product. Its exhibited exclusion violation is not claimed on an empty population.'),
'zero':OK('Step1.1 evaluates Z=0: both types have A=0 and Y=0, so both means vanish in that arm. The contrast denominator remains1/2, and step2.1 never divides by0.'),
'one':OK('Step1.1 evaluates Z=1 with half the types treated and outcomes3,1; this arm mean is2. The structural equation also covers treatment a=1 for both z endpoints in step2.1.'),
'endpoints':OK('Y(a,z)=2a+z is supplied on all four binary pairs. Step1.1 computes arms z=0,1 and step2.1 verifies the treatment difference2 at each fixed z, so endpoint direct effects are retained explicitly.'),
'degenerate':NA('The Example fixes a half-complier, half-never population with common fixed-z effect2. It illustrates a direct instrument effect, not a universal limit as the type law becomes a point mass or the first stage vanishes.'),
'nonempty-choice':NA('The two type schedules are defined by the same explicit formula2a+z. Step1.1 forms a finite product assignment and computes its means; no schedule or conditional version is chosen implicitly.'),
'iff-forward':NA('Example shows that one exclusion-violating model gives ratio4 while every fixed-z treatment effect is2. Step2.1 is a discrepancy witness, not an equivalence between exclusion and a ratio equality.'),
'iff-reverse':NA('The discrepancy does not claim every violation must distort the ratio. The source computes only the supplied direct-effect formula and its resulting Wald4 in steps1.1–2.1.'),
},
'ex-defiers-break-the-late-ratio':{
'empty':NA('Example has four named types with positive masses0.2,0.3,0.4,0.1 summing to1. Step1.1 uses both compliers and defiers; no empty-type population is included in its numerical claim.'),
'zero':OK('Y0=0 for every type and Y1=0 for always/never types; step1.1 explicitly notes their zero contributions to both weighted contrasts. The resulting denominator0.3 is nonzero.'),
'one':OK('The complier treatment effect equals1 and step2.1 compares it to Wald1/3. Binary treatment level1 appears in every listed receipt pair, including the defier pair(1,0), not just monotone pairs.'),
'endpoints':OK('Step1.1 uses the negative receipt difference-1 for defiers and+1 for compliers, giving0.4-0.1 in the denominator and0.4*1-0.1*3 in the numerator. The endpoint signs are essential to the discrepancy.'),
'degenerate':NA('The four fixed positive stratum masses are part of the Example. Its Wald1/3 computation does not assert a value when compliers and defiers cancel to a zero first stage or when all mass is in one type.'),
'nonempty-choice':NA('Given type probabilities and finite outcome values determine every mean in step1.1. Step2.1 divides0.1 by0.3; no element is selected from a stratum or external family.'),
'iff-forward':NA('Example computes a counterexample to using the LATE conclusion without monotonicity. Step2.1 does not assert that every defier population necessarily gives Wald unequal to LATE.'),
'iff-reverse':NA('A Wald/LATE discrepancy in this model is not presented as a characterization of the defier mass. The given positive defier probability0.1 precedes, rather than follows from, the calculation.'),
},
'ex-heterogeneous-effects-late-differs-from-ate':{
'empty':NA('Example uses four equally weighted types and two positive-probability instrument arms. Step1.1 conditions on the two complier types of total mass1/2, so there is no empty-complier quotient.'),
'zero':OK('All baseline potential outcomes Y0 are0 in the Example. Step2.1 correctly removes unchanged always/never outcomes from the reduced-form difference, leaving the nonzero complier contribution1 and first stage1/2.'),
'one':OK('One complier effect is1 while the other is3; step1.1 averages them to LATE2. Step2.1 includes instrument level1 and obtains the stated ratio without assuming every unit effect equals1.'),
'endpoints':OK('The fixed receipt types include always(1,1), never(0,0) and complier(0,1), and Z is fair. Step2.1 subtracts the two instrument endpoint means, retaining only effects of the two compliers.'),
'degenerate':NA('Example deliberately fixes heterogeneous effects4,4,1,3 and complier mass1/2. It claims LATE2 differs from ATE3 for this mixture, not for degenerate homogeneous effects or an all-complier law.'),
'nonempty-choice':NA('Step1.1 computes ordinary finite averages over the four given effects; step2.1 weights the two known complier effects by1/4 each. No selection or conditional-distribution existence is needed.'),
'iff-forward':NA('Example establishes LATE2 unequal to ATE3 in one valid monotone IV model. It is not an equivalence saying heterogeneous effects always produce different ATE and LATE values.'),
'iff-reverse':NA('Step1.1 gives the explicit unequal averages and step2.1 identifies Wald2; no conclusion about necessary heterogeneity is drawn from an observed equality or inequality in an arbitrary model.'),
},
'cex-valid-iv-does-not-identify-ate-without-further-restrictions':{
'empty':NA('Counterexample supplies two explicit full-data laws M0,M1, each with a four-type probability law and fair assignment. Step2.1 compares two nonempty observed laws, not an empty statistical-model class.'),
'degenerate':NA('The witness fixes nonzero type masses and first stage0.3. Step3.1 only needs the two exhibited ATEs1.7 and2.7 with common observed law; it does not assert these values for a zero-first-stage or one-type degeneration.'),
'nonempty-choice':NA('The potential-outcome pairs in both models are explicitly listed. Step2.1 checks observed values type by type and step3.1 sums four weights; constructing the witness requires no unrecorded choice of laws.'),
'iff-forward':NA('Statement refuted is the sufficiency of four core IV conditions for ATE identification. Steps1.1–3.1 refute that implication with two laws; they do not propose a necessary-and-sufficient characterization instead.'),
'iff-reverse':NA('Counterexample denies a universal identification implication using equal observed laws and unequal ATEs in step3.1. It asserts no reverse inference from nonidentifiability to failure of any named core condition.'),
},
}
B22.update(E22)
# Current root canonical phase numbering is used in the only affected target.
a,b,c=B5['lem-standard-wishart-independent-normal-quadratic-form-is-f']
B5['lem-standard-wishart-independent-normal-quadratic-form-is-f']=(a,b.replace('1.1 through4.1','1.1 through5.1'),c)
now=datetime.datetime.now(datetime.timezone.utc).isoformat(); before=Path(S+'-before');before.mkdir(exist_ok=False)
flagdocs={n:json.loads(Path(f'.autopilot/{R}/owner-step2-gate-repair/boundary-batch-{n}.json').read_text()) for n in[3,5,13,22]}
ids=list(dict.fromkeys(r['id'] for d in flagdocs.values() for r in d['template_rows']+d['contradicted']))
paths=[f'items/{i}.md' for i in ids]+[f'research/{R}-batch-{n}.{ext}.json' for n in[3,5,13,22] for ext in['pages','proof-contracts']]+[f'.autopilot/{R}/owner-step2-gate-repair/boundary-batch-{n}.json' for n in[3,5,13,22]]+['tools/boundary-audit.mjs',f'.autopilot/{R}/owner-step2-source-format/phases/receipt.json','items/def-independent-random-elements.md','items/lem-measurable-functions-preserve-independence.md']
bindings=[]
for k,p in enumerate(paths):
 b=Path(p).read_bytes();dest=before/f'{k:03d}-{Path(p).name}.before';dest.write_bytes(b);bindings.append({'path':p,'raw_sha256':H(b),'archive':str(dest)})
(before/'index.json').write_text(json.dumps(bindings,indent=2)+'\n')
by_path={r['path']:r for r in bindings};out=[]
for n,d in flagdocs.items():
 contracts=json.loads(Path(f'research/{R}-batch-{n}.proof-contracts.json').read_text())['contracts'];rows=[]
 for id,case in dict.fromkeys((r['id'],r['case']) for r in d['template_rows']+d['contradicted']):
  old=next(r for r in contracts[id]['boundaries'] if r['case']==case)
  if n==3:
   new=OK('Statement explicitly permits the empty reduced design when q=p. In step1.2, W_R={0} has dimension0, its orthonormal basis is empty, W_U=W_R direct-sum A still has dim A=p=q, and the F law retains positive degrees q and nu=n-p. The indexed Gaussian parameter family itself is nonempty because1<=p<n and sigma²>0.')
  elif n==5:
   empty,iff,status=B5[id]
   if case=='empty':
    new=NA(empty)
    if id in['def-wishart-law','def-multivariate-normal-sample-model-and-statistics']:
     new['reviewed']={'upheld':True,'by':'owner-focused-boundary-review','reason':empty+' The detector matched an indexed finite sum, but its explicitly positive fixed index count cannot be0 under this Definition.'}
   elif status=='checked':
    direction='forward' if case=='iff-forward' else 'reverse'
    extra={
      'def-wishart-law':{'forward':'A tuple distributed by the finite Gaussian product pushes forward to the stated Wishart measure under its sum map.','reverse':'Independent Gaussian vectors have that product joint law; applying the same measurable sum map yields exactly the defining pushforward.'},
      'thm-covariance-likelihood-ratio-asymptotic-chi-square':{'forward':'For equality in step3.1, each nonnegative eigenvalue term must vanish; its unique zero is at1, so B=I and Sigma=M.','reverse':'For Sigma=M, B=I and every eigenvalue contribution in step3.1 is0, attaining the displayed likelihood bound.'},
      'ex-hotelling-t2-two-dimensional-exact-test':{'forward':'If this observation is rejected, the rule in step3.1 and the statistic4 in step2.1 imply4>F22^{-1}(1-alpha).','reverse':'If4>F22^{-1}(1-alpha), substituting the statistic computed in step2.1 into the rule in step3.1 gives rejection.'},
    }[id][direction]
    new=OK(iff+' '+extra)
   else:new=NA(iff)
  elif n==13:
   iff,endpoint=B13[id]
   if case=='endpoints':
    new=OK(endpoint) if id in['lem-rcbd-nested-contrast-model-and-projection','def-randomized-latin-square-design','prop-rcbd-treatment-block-interaction-confounded-with-residual','thm-rcbd-treatment-contrast-f-law','ex-latin-square-assignment-is-restricted','ex-rcbd-interaction-shares-the-residual-subspace'] else NA(endpoint)
   elif id in['def-randomized-complete-block-design','lem-rcbd-nested-contrast-model-and-projection','def-randomized-latin-square-design']:
    extra={
     'def-randomized-complete-block-design':{'iff-forward':'Completeness gives one occurrence of each label among exactly t units, so the map is bijective.','iff-reverse':'A permutation hits every treatment exactly once and therefore is a complete block by the Definition.'},
     'lem-rcbd-nested-contrast-model-and-projection':{'iff-forward':'For v perpendicular to W_U, step3.1 uses orthogonality to treatment, block and constant directions to force each row and column sum0.','iff-reverse':'For v with row and column sums0, its inner product with each additive array is0; this is the E subset W_U-perpendicular direction of step3.1.'},
     'def-randomized-latin-square-design':{'iff-forward':'Each specified row/column bijection visits every residue exactly once, giving the occurrence criterion in the Definition.','iff-reverse':'One occurrence per treatment in each row/column gives a bijection of each finite t-element row/column to R_t, hence the defined allocation.'},
    }[id][case]
    new=OK(iff+' '+extra)
   else:new=NA(iff)
  else:new=B22[id][case]
  row={'case':case,**new}
  rows.append({'subject':id,'source_raw_sha256':by_path[f'items/{id}.md']['raw_sha256'],'case':case,'old':old,'replacement':row,'flags':[{'kind':kind,**r} for kind,key in [('template','template_rows'),('contradicted','contradicted')] for r in d[key] if r['id']==id and r['case']==case]})
 out.append({'batch':n,'contract_path':f'research/{R}-batch-{n}.proof-contracts.json','contract_hash_at_inspection':by_path[f'research/{R}-batch-{n}.proof-contracts.json']['raw_sha256'],'replacement_rows':rows})
proposal={'version':1,'run':R,'status':'proposed focused boundary dispositions only; root applies canonical metadata','batches':out,'guard_policy':'Apply only after checking original row/source binding; root owns after-formatter guards and current source hashes. Earlier native reports, plans, acceptance stamps and readiness records remain unchanged.','phase_mapping_path':f'.autopilot/{R}/owner-step2-source-format/phases/receipt.json','phase_mapping_note':'Among these40 subjects only the Wishart inverse quadratic-form lemma is in current phase mappings:1.1->1.1,1.2->2.1,2.1->3.1,3.1->4.1,4.1->5.1. Proposal evidence refers to its current1.1–5.1 proof.','coverage':{'flagged_appearances':sum(len(d['template_rows'])+len(d['contradicted']) for d in flagdocs.values()),'unique_subject_case_rows':sum(len(b['replacement_rows']) for b in out),'subjects':len(ids)},'no_source_math_edit':True}
Path(S+'-proposals.json').write_text(json.dumps(proposal,indent=2)+'\n')
res={'version':1,'run':R,'recorded_at':now,'scope':'Every actual flagged template/contradicted row in batches3,5,13,22; separate from preserved earlier finite-smoke resolution.','before_index':str(before/'index.json'),'current_source_guards':[by_path[f'items/{i}.md'] for i in ids],'other_current_guards':[r for r in bindings if not r['path'].startswith('items/')],'coverage':proposal['coverage'],'consultation':'Read complete current claim/definition, Facts and every proof/verification/counterexample step for all40 subjects. Source preimages in before index contain exact consulted passages. Additionally read full independent-random-elements Definition and measurable-map independence lemma for the IV Definition equivalence. Read actual boundary-audit contradiction and template-review mechanics. No external reading or generic native acceptance is claimed.','focused_dispositions':{'batch3':'Change empty to checked: actual q=p reduced space and empty basis permitted/proved1.2, while Gaussian parameter set nonempty.','batch5':'Replace all36 generic rows with specific dimension/domain and implication evidence. Preserve two true positive-index exclusions with truthful reviewed.upheld for sum-detector false positives. Record actual Wishart construction equivalence, covariance likelihood-bound equality criterion, and numerical Hotelling rejection equivalence in both directions.','batch13':'Replace all36 rows. Check actual complete-block/permutation and Latin occurrence conventions and both directions of residual-space equality. Include t=1 Latin, q endpoints, saturated zero degrees, piecewise zero RSS, zero probability excluded allocation and zero residual-component cases; distinguish fixed numeric examples from varying-parameter claims.','batch22':'Replace all116 rows with explicit mass/conditioning/denominator/endpoint/effect checks and case-specific exclusions. In particular null C reduced form0 has no defined LATE; relevance excludes Delta_A0 only where assumed; all-complier endpoint remains; homogeneous zero effect remains; numerical fixed law claims do not acquire unproved limiting scope. Under exclusion the IV tuple independence equivalence uses projection and a.s. measurable duplication in the two directions.'},'mathematical_source_defects':'No new mathematical proof gap found in the focused claim/case arguments. Metadata was generic and in several places misclassified actual claim obligations; all source mathematics is preserved.','proposals_path':S+'-proposals.json','proposals_raw_sha256':H(Path(S+'-proposals.json').read_bytes()),'cycle':1,'maximum_cycles':2,'canonical_writes':'None by this task: no items, tool registry, contracts/manifests, sourceplan, levels, readiness, state, recertification, native reports, published files or commits changed. Official defect append is separate.','validation':'Manual mathematical claim/proof/case review only. No tests/gates executed; no item source edit so no proof-layout invocation required. Root integration and fresh full gates pending.'}
Path(S+'-resolution.json').write_text(json.dumps(res,indent=2)+'\n')
rows=[]
for i,id in enumerate(ids):
 affected=[{'batch':b['batch'],'case':r['case']} for b in out for r in b['replacement_rows'] if r['subject']==id]
 rows.append({'defect_id':f'{R}-owner-boundary-3-5-13-22-{id}','run':R,'at':now,'class':'accuracy','subclass':'false-boundary-disposition' if id in['thm-exact-gaussian-linear-regression-inference','def-instrumental-variable-potential-outcomes','def-wishart-law','thm-covariance-likelihood-ratio-asymptotic-chi-square','ex-hotelling-t2-two-dimensional-exact-test','lem-rcbd-nested-contrast-model-and-projection'] else 'contract-mismatch','severity':'fatal','location':'contract-row','subject':id,'caught_at_stage':'2-scope-review','caught_by_role':'orchestrator','disposition':'open','repair_cost':'contract-sync','source':S+'-resolution.json','evidence':[{'path':S+'-proposals.json','note':'Source-specific replacements supplied for '+', '.join(r['case'] for r in affected)+'. Native generic rows did not document the actual domain/case/direction arguments. Exact source and original rows archived; canonical metadata integration pending.'}],'note':'Focused actual-source inspection complete; no mathematical source editing or passing gate claimed. Preserve any genuinely necessary exclusions, and apply the proposed actual checked cases rather than hiding them with a template review stamp.'})
Path(S+'-defect-rows.json').write_text(json.dumps(rows,indent=2)+'\n')
print(json.dumps({'resolution':S+'-resolution.json','proposals':S+'-proposals.json','coverage':proposal['coverage'],'beforeimages':len(bindings),'defect_rows':len(rows)},indent=2))
