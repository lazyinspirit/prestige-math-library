# r6 source findings: secrecy, privacy and quantum Shannon theory

Wilde's complete substantive text (PDF pages 1–745 of the 774-page second-edition prepublication draft), all of Devetak's private-classical/quantum-capacity preprint, and all of Portmann-Renner's QKD composition paper have been read from their saved PDFs. Exact source metadata, local originals, full extracted text, hashes and actual reading extents are recorded in source-manifest.json and reading-ledger.json.

## Mathematical conventions and existing interfaces

Wilde's book works in finite-dimensional Hilbert spaces for its ordinary Shannon-theory chapters. Entropies use base-2 logarithms, with zero-eigenvalue terms interpreted as zero. Its relative entropy is finite exactly when supp(rho) is contained in supp(sigma), with logarithms evaluated on positive support; it is +infinity otherwise. For a classical distribution this reduces to KL divergence. Quantum conditional entropy can be negative, unlike finite classical conditional entropy; coherent information is the negative conditional entropy.

The current library already supplies finite probability spaces and finite Shannon entropy/KL definitions in natural units through def-qa-35-finite-probability-entropy-and-stochastic-matrices. The general measurable directional KL interface is def-kullback-leibler-divergence. A new base-2 information page can reuse either by the exact conversion log2(t)=ln(t)/ln(2), preserving supports and extended-real values. def-mutual-information-for-finite-hypothesis-testing is intentionally narrower: it defines mutual information for a finite uniform hypothesis experiment, not general discrete Shannon mutual information.

The quantum library fixes density operators as positive trace-one endomorphisms on nonzero finite-dimensional complex spaces, and its inner product is linear in the first argument. Its quantum channel is a complex-linear CPTP map on the full operator space, with complete positivity quantified over every finite ancilla. It is a mathematical definition, not a physical-realization postulate. Finite Kraus, Choi and isometric Stinespring representations, partial trace, POVMs, instruments and branch normalization are already published. A finite Stinespring dilation is an abstract algebraic representation; it makes no claim about a laboratory device.

The repository trace distance is D(rho,sigma)=one-half times the trace norm. Wilde calls the unhalved norm ||rho-sigma||_1 the trace distance and separately identifies one-half of it as the normalized trace distance. Convert constants explicitly. The repository fidelity is root fidelity ||sqrt(rho)sqrt(sigma)||_1; Wilde and Devetak use squared fidelity in several theorems. Translate through F_repo = sqrt(F_source) before importing a fidelity inequality. Wilde and the older QIT papers use the physics inner-product convention; expressions involving bras, transposes, Choi matrices and the dense-coding transpose trick must be translated to the repository's linear-first convention.

## Entropy, divergence, measurement and distinguishability

For a finite ensemble E={p_x,rho_x}, the associated classical-quantum state is omega_XB=sum_x p_x |x><x| tensor rho_x. Its Holevo information is

  chi(E) = S(sum_x p_x rho_x) - sum_x p_x S(rho_x) = I(X;B)_omega.

Accessible information maximizes the ordinary classical I(X;Y) over finite POVMs on B. Quantum data processing applied to the measurement channel gives I(X;Y)<=I(X;B)=chi(E). Equality need not hold: collective decoding can attain the Holevo rate asymptotically even when one-use accessible information is smaller. Neither a POVM nor a channel is interchangeable with the other: a POVM specifies outcome effects/law; an instrument additionally specifies CP branch maps and conditional states.

For equal-prior states rho,sigma, the Helstrom measurement gives optimal success probability (1+D(rho,sigma))/2. Every finite POVM's output total variation is at most D(rho,sigma), and the binary positive-eigenspace measurement attains it. The published QC trace-distance, Helstrom, POVM-variation and channel-contractivity items supply this state-discrimination interface. Contractivity under CPTP maps is proved by pulling an output POVM back through a Kraus representation. It proves trace-distance data processing only; it is not a proof of quantum-relative-entropy data processing.

The current library has no dedicated quantum von Neumann entropy, Umegaki relative entropy, quantum mutual/conditional information, strong subadditivity, Holevo-information or quantum-channel-capacity item. Use finite spectral calculus, trace cyclicity, support arguments and existing finite matrix interfaces locally. Do not use an open-operator or infinite-dimensional theorem to fill these gaps.

For Umegaki relative entropy on finite positive operators, define D(A||B)=Tr[A(log A-log B)] when supp(A) is contained in supp(B), with 0 log 0=0 and the logarithm evaluated spectrally on positive support; set D=+infinity if support inclusion fails. The auditor's independent finite-dimensional proof ladder supplies a rigorous local route:

1. Prove inverse compression for the positive resolvent by its variational formula.
2. Integrate the resolvent representation of -log to prove the specific operator Jensen inequality required.
3. Prove the relative-modular-operator identity by finite eigenoperator calculation.
4. Use an isometry of Hilbert-Schmidt operator spaces to prove joint convexity for positive-definite pairs.
5. Regularize each PSD pair by epsilon I and prove the exact support-limit, including divergence to +infinity when support inclusion fails.
6. Prove unitary invariance and finite partial-trace DPI by averaging over the finite Weyl shift/phase family.
7. Obtain arbitrary finite CPTP DPI from the published finite Stinespring dilation plus partial-trace DPI.

For bit units, multiply the natural-log form by 1/ln(2); this positive scale does not affect joint convexity or DPI. Strong subadditivity follows by applying partial-trace DPI to (rho_ABC, rho_A tensor rho_BC), after proving support inclusion, then expanding finite entropies. The Holevo measurement bound follows by applying finite CPTP DPI to each positive-weight ensemble branch and summing; the cq block entropy identity follows directly from its eigenvalues. The exact supporting contracts, including nonzero dimensions and support conditions, are in audit/independent-proof-notes.md, “Quantum relative-entropy DPI: finite-dimensional resolvent ladder.” This basic route avoids making SSA/DPI depend on Wilde's much stronger recoverability theorem.

Wilde's Chapter 12 theorem is an advanced strengthening. Given finite-dimensional rho, PSD sigma with supp(rho) subset supp(sigma), and CPTP N, it constructs a recovery channel R depending only on sigma,N, exactly recovers sigma, and bounds the fidelity of recovered rho by the loss in relative entropy. The proof uses rotated Petz maps and Stein-Hirschman complex interpolation. It is appropriate as an optional recoverability result after its own support, fidelity-convention and interpolation dependencies are discharged. It should not substitute for the basic finite DPI/SSA proof.

## Classical, private and quantum capacity statements

The operational coding claims below are finite-dimensional, memoryless, asymptotic block-coding theorems. A fixed finite-dimensional channel N is used independently n times. Rates are logarithms of message or code-subspace size divided by n; error tends to zero as n grows. These theorems do not assert computationally efficient code construction or decoding.

| Task | Proven finite-dimensional formula in Wilde | Scope and status |
|---|---|---|
| Classical communication over a quantum channel | C(N)=lim over k of chi(N tensor k)/k | Exact operational formula, generally multi-letter. Hastings' counterexample rules out universal additivity of chi. |
| Entanglement-assisted classical communication | max over pure phi_AA' of I(A;B) after id tensor N | Exact single-letter additive formula with unlimited shared entanglement. |
| Private classical communication / quantum wiretap | P(N)=max over finite cq ensembles of I(X;B)-I(X;E); capacity is lim over k of P(N tensor k)/k | Exact regularized formula, not an open theorem. General single-letterization/evaluation is not known; the private information is additive for degradable channels. |
| Quantum communication | Q(N)=max over input states of coherent information; capacity is lim over k of Q(N tensor k)/k | Exact regularized formula. It single-letterizes on degradable channels; superadditivity and superactivation prevent generic additivity assumptions. |

Here E is the complementary output of a chosen finite Stinespring isometry. Give the entire environment to Eve for the standard strongest channel-privacy model. Different complementary outputs related by environment isometries do not change the entropic expressions. For a finite cq ensemble, the private information I(X;B)-I(X;E) equals coherent information of the average input minus the ensemble-average coherent information. This is Devetak's bridge between classical wiretap privacy and quantum coding. It yields the private-information optimization and supports coherent conversion of a private code into entanglement transmission; it does not make private and quantum capacities equal for arbitrary channels. For degradable channels they coincide and are additive.

The HSW achievability route is a random code over a finite ensemble, typical and conditionally typical subspaces, the square-root measurement/packing bound, derandomization and expurgation; the converse uses a shared-randomness relaxation, entropy continuity and quantum DPI. The general capacity needs optimization over tensor powers because input entanglement across channel uses can increase Holevo information. The entanglement-assisted theorem instead has a one-letter mutual-information formula and a dimension/data-processing converse.

The standard finite quantum wiretap code in Wilde Chapter 23 has a concrete, stronger-than-average operational criterion: Bob's maximal decoding error over messages is at most epsilon, and for every message m Eve's output is within normalized trace distance epsilon of one fixed state sigma_E^n. The encoder chooses a public codebook index m and an independent uniform private randomizer k; Bob decodes both. Packing needs about 2^(n I(X;B)) total codewords and covering needs about 2^(n I(X;E)) randomizers per message, giving private rate I(X;B)-I(X;E). The direct proof constructs one deterministic code with reliability and per-message secrecy simultaneously, then expurgates to maximal error. The converse upgrades private communication to ideal secret-key generation, applies entropy continuity and DPI, and obtains the regularized private information. This is a proved finite-dimensional memoryless wiretap theorem, not an open problem. It is a theorem about an abstract channel and its complement, not a QKD implementation model.

Devetak's 2004 article proves the same regularized private/secret-key capacity and derives the coherent-information quantum-capacity theorem. Its protocol permits an unlimited forward public classical channel; the code tracks public transcript S and bounds both I(K;S) and I(K;E^n|S). This is an asymptotically vanishing mutual-information leakage criterion, not by itself an ideal/real composable trace-distance definition. Wilde's later private-code formulation uses a per-message trace-distance obfuscation criterion. Keep these error models separate.

## Composable QKD security and its limits

Portmann-Renner model QKD as a protocol that consumes an insecure quantum channel and an authentic classical channel and constructs an ideal shared-key resource. Eve may control the insecure channel and the transcript. The ideal resource includes an abort switch controlled by Eve; a simulator reproduces the real communication while deciding only whether the ideal resource outputs a key or aborts. Availability/robustness in the honest-noise setting is separate from adversarial secrecy.

Conditioned on not aborting, let rho_KA KBE be the state of Alice's key, Bob's key and Eve's full quantum side information plus public transcript. With tau_KA KB a perfectly uniform shared key, the abort-weighted ideal/real trace criterion is

  (1-p_abort) D(rho^top_KA KBE, tau_KA KB tensor rho^top_E) <= epsilon.

Equivalently, the security reduction separates correctness, the probability Alice and Bob disagree, and secrecy, the abort-weighted distance of Alice's key and Eve from uniform and independent; a correctly modeled simulator gives total distinguishing error at most epsilon_cor+epsilon_sec. Since D is the optimal unbounded distinguishing advantage, any external protocol that uses part of the key or acts jointly on side information is already represented in the distinguisher. Sequential and parallel composition errors add by the triangle inequality; the paper works through one-time-pad composition, parallel QKD, authentication and recursive key expansion.

This composable QKD statement presumes an authenticated classical channel as a resource; authentication may itself consume a short prior key. It is not a finite-key rate theorem, device-independent or implementation-security proof, nor a claim that a code-capacity theorem supplies an authenticated channel. The paper shows that accessible information, or a low probability of guessing the whole key, is not a composable secrecy criterion; it discusses information locking and proves the trace criterion is tied to distinguishing advantage. Its alternative minimum-over-sigma secrecy metric is within a factor two of the standard criterion, but the paper does not derive that alternative from its composable framework.

## Infinite-dimensional and physical boundaries

The capacity and entropy arguments above use finite-dimensional state/channel spaces. Do not extend them to bosonic, continuous-variable, or infinite-dimensional channels without domains, energy constraints, entropy finiteness/continuity and topology conditions. Wilde's pure-loss bosonic section explicitly leaves quantum optics and infinite-dimensional Hilbert spaces to other sources. It states an energy-constrained trade-off region with mean photon budget N_S; achievability is stated for all transmissivities, while equality of the region for eta at least one half is conditional on Strong Conjecture 2, a minimum-output-entropy conjecture. This is not an unconditional finite theorem and is not a general infinite-dimensional capacity formula.

Finally, channel/Stinespring mathematics does not assume laboratory realizability or a physical no-cloning postulate. No-cloning is motivation for quantum coding; the code theorems themselves are proved from finite CPTP maps, distinguishability and entropy inequalities. Exact dense-coding privacy of an intercepted transmitted subsystem is due to that protocol's message-independent marginal and is not a general composable secrecy theorem.

## Scope handoff

Use the auditor's finite resolvent/joint-convexity ladder for basic relative-entropy DPI, SSA and the Holevo bound. Keep Wilde's recovery theorem as a separate advanced result. Keep Wilde/Devetak wiretap channel capacity and Portmann-Renner composable QKD as separate operational tasks. The current category file library/information-theory/_category.md is still draft; no production items were changed by this source lane.


## Local proof-development supplement

A full finite-dimensional proof supplement is now recorded in [quantum-coding-proof-developments.md](quantum-coding-proof-developments.md). It contains the quantitative typical-projector, gentle-measurement, square-root packing and variance soft-covering arguments; the finite cq HSW direct/converse proof; an explicit spectral-ensemble private-code-to-LSD coherentization and arbitrary-CPTP converse; and the EA type-class/Weyl-twirl reduction plus additive converse. It states the average-error and entanglement-fidelity conventions and the unlimited-prior-entanglement model, separates raw trace norm from normalized trace distance and root from squared fidelity, and identifies the finite entropy/SSA/DPI prerequisites. It does not claim general private-information single-letterization, a generic one-letter quantum capacity, bosonic/infinite-dimensional results, efficient coding, or a physical realization. The initial ready.json certifies source-reading completion; this proof supplement is a separate integration artifact and requires its own review.



A second local proof supplement, [privacy-wiretap-qkd-proof-developments.md](privacy-wiretap-qkd-proof-developments.md), develops arbitrary mixed-ensemble regularized quantum private capacity and converse, degradable-channel quantum/private single-letterization, finite qudit erasure capacities, finite classical channel resolvability and auxiliary wiretap capacity (including the Csiszár telescoping converse and sharp |U|≤|X| support bound), degraded wiretap specialization, and abort/transcript-aware QKD real/ideal composition. Its quantitative finite typicality also uses the published thm-hoeffding-independent-bounded-sums supplier. Its status is separate from the initial source-reading ready receipt and from the HSW/LSD/EA proof supplement.
