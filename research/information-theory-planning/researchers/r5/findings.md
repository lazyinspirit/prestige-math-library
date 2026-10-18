# r5 findings: multiterminal and network information theory

This handoff is based on the complete historical El Gamal–Kim author lecture notes arXiv:1001.3404v3 (22 March 2010), the 13 author-hosted Stanford EE376B slide decks, and complete reads of three primary research articles: Etkin–Tse–Wang on the Gaussian interference channel, Wagner–Tavildar–Viswanath on the quadratic-Gaussian two-encoder source-coding problem, and Lim–Kim–El Gamal–Chung on noisy network coding. The source manifest distinguishes the full v1–v3 manuscript PDFs from the one-page v5 notice. The v3 manuscript is a historical 2010 text, not the expanded Cambridge book; v4 exists but was not retrieved or read. The Stanford decks are current hosted author supplements, not proof-complete replacements for the manuscript.

The main editorial finding is that network information theory is organized around many separate operational models. A rate formula is meaningful only after specifying source/channel alphabets, memory and feedback assumptions, encoders, decoder side information, message laws, cost constraints, error criterion, auxiliary factorization and closure. A cited paper or a “standard coding argument” cannot replace the local proof obligations in the library.

## Shared conventions and proof interfaces

For the finite-alphabet theorems below, a DMS is an i.i.d. process on a finite alphabet; a DM channel is a finite-alphabet memoryless stochastic kernel. Information rates in the El Gamal–Kim course use base-2 logarithms. Source information is in bits per source symbol and channel information is in bits per channel use. State the base explicitly because the existing general KL and finite-entropy suppliers use natural logarithms. If those suppliers are used, convert by dividing nats by `ln 2` before comparing with operational bit rates.

A standard two-sender DM-MAC code has independent uniform messages, separate encoders `x_1^n(m_1)` and `x_2^n(m_2)`, a joint decoder, and average block error `P{(Mhat_1,Mhat_2) != (M_1,M_2)}`. Its capacity region is the closure of achievable rate pairs. Random codebooks are an achievability proof device: average error over the ensemble tending to zero implies existence of deterministic codebooks with the required average error. This does not give free shared randomness. A public time-sharing variable `Q` represents a schedule or coded time-sharing sequence known to all terminals and independent of the messages. It is distinct from a private random seed or common randomness source.

The relay code model has a source encoder and a causal relay mapping `x_{2i}=f_i(y_2^{i-1})`; a relay with noncausal access to its whole observation is a different channel. NNC nodes likewise use local message plus past local outputs. For a feedback or two-way channel, retain the causal factorization at each time. Replacing a feedback law by a product input distribution, or replacing directed information by ordinary mutual information, is not valid without proof.

For finite alphabets, define strong typicality on the support of the law. The weak law applied to the finitely many indicator variables proves that i.i.d. sequences are typical with probability tending to one. The type-count estimates used in the full notes give, up to a term `delta(epsilon) -> 0`, `|T_epsilon^n(X)| <= 2^{n(H(X)+delta)}` and `|T_epsilon^n(X|y^n)| <= 2^{n(H(X|Y)+delta)}` for typical `y^n`. If a codeword is drawn independently of a typical observation, the joint-typicality packing bound has exponent `I(X;Y)`; conditioned on a cloud center `U`, it has exponent `I(X;Y|U)`. Thus `2^{nR}` wrong codewords are excluded when `R < I - delta`. Covering uses the dual count: independently generated conditional reproduction codewords hit the jointly typical set with probability at least `2^{-n(I(X;Xhat|U)+delta)}` each, so the no-hit probability is at most `exp(-2^{n(R-I-delta)})` when `R > I(X;Xhat|U)+delta`. Random binning bounds collision counts by the number of jointly typical candidates divided by the number of bins. Each use requires the relevant empirical frequencies, support conditions and independence/factorization to be stated; continuous Gaussian models require a separate weak-typicality/density or discretization argument, not finite-alphabet strong typicality by fiat.

Achievability proofs first use strict inequalities with a positive slack and then pass to the operational region by closure. Time sharing convexifies rate regions. Auxiliary cardinality reductions require a separate support-lemma/convex-geometric argument that preserves each entropy or mutual-information coordinate; a generic appeal to “Carathéodory” without listing the preserved coordinates is insufficient. Cost-constrained models must state whether the cost is per-codeword, maximal, or averaged over messages and time. Average-error and maximal-error regions can differ for multiuser channels; the course gives Dueck’s example for the DM-MAC.

## Distributed lossless coding and common information

For finite jointly distributed DMSs `(X_1,...,X_k)`, encoder `j` sees only `X_j^n`, sends a fixed-length index at rate `R_j`, and one decoder reconstructs all source sequences with joint block error tending to zero. The Slepian–Wolf achievable region is the closed polyhedron

`sum_{j in S} R_j >= H(X_S | X_{S^c})` for every nonempty `S subseteq [k]`.

For two sources this is `R_1 >= H(X_1|X_2)`, `R_2 >= H(X_2|X_1)`, and `R_1+R_2 >= H(X_1,X_2)`. The random-binning achievability uses independent assignments of typical sequences to bins at each encoder. The joint decoder seeks a unique jointly typical tuple matching all received bin indices. For an error in subset `S`, the conditional type count contributes exponent `H(X_S|X_{S^c})`, while bin collisions contribute `sum_{j in S}R_j`; the union over the finitely many nonempty subsets vanishes under the displayed inequalities with slack. The converse applies Fano to each subset, conditions on the correctly decoded complementary sources, expands the message entropy and single-letters by memorylessness. This model has no time-sharing variable in its exact polyhedral characterization. Do not confuse it with multiple-access-channel capacity: the entropy inequalities are lower bounds on source rates, while MAC inequalities are upper bounds on channel rates.

For a finite pair `(X_1,X_2)`, the Gács–Körner common part is a maximal deterministic common variable `U_0=g_1(X_1)=g_2(X_2)` almost surely, obtained from connected components of the bipartite graph of positive-probability source pairs. It is not mutual information. Wyner common information is the distinct optimization `min I(X_1,X_2;U)` subject to `X_1` and `X_2` conditionally independent given `U`; it need not equal the entropy of a deterministic common part. The full notes use the common part to construct a three-index source/channel separation scheme and then a correlated-source MAC inner bound. That joint source–channel theorem is a sufficient condition, not a general capacity theorem. The Cover–El Gamal–Salehi binary example shows why separation can fail: correlated sources can be sent error-free uncoded over a binary adder/erasure MAC even though the Slepian–Wolf region and independent-input MAC region do not intersect.

## Multiple-access channels

For a two-sender DM-MAC with the independent-message, no-feedback model above, the exact capacity region is

`R_1 <= I(X_1;Y|X_2,Q)`,
`R_2 <= I(X_2;Y|X_1,Q)`,
`R_1+R_2 <= I(X_1,X_2;Y|Q)`,

for some finite `p(q)p(x_1|q)p(x_2|q)`. The conditional product is essential: absent feedback or cooperation, the two channel inputs are independent given the public schedule. The achievable proof draws independent i.i.d. codebooks conditional on the schedule. Successive cancellation reaches corner points; simultaneous joint-typical decoding yields all points in each pentagon without time-sharing inside it. The error split has four cases (both correct, only sender 1 wrong, only sender 2 wrong, both wrong); the three packing exponents are the two conditional mutual informations and the joint mutual information. The converse uses Fano for each message and for the pair, the memoryless channel Markov chain, and `Q` uniform on the time coordinate. The course proves `|Q|<=2` for two senders and `|Q|<=k` for `k` senders using the geometry/support argument. For `k` senders, impose `sum_{j in S} R_j <= I(X_S;Y|X_{S^c},Q)` for every nonempty subset, with conditional product inputs. Additional cost coordinates can change cardinality bounds.

For the real AWGN MAC with independent users, gains `g_j`, power constraints `P_j`, and noise variance `N_0`, the exact region has the subset inequalities `sum_{j in S}R_j <= (1/2)log_2(1 + sum_{j in S}g_j^2P_j/N_0)`. Gaussian inputs achieve it and no additional time-sharing is needed. A Gaussian input proof must handle the power constraints and differential entropy; the discrete typicality proof is not itself a continuous-alphabet proof.

## Broadcast and interference channels

For a two-receiver DM-BC with private messages only, the physically degraded law is `p(y_1,y_2|x)=p(y_1|x)p(y_2|y_1)`; the stochastically degraded case has the same capacity region because error probability at each receiver depends only on its marginal channel. Under `U -> X -> Y_1 -> Y_2`, the exact capacity region is the closure of

`R_1 <= I(X;Y_1|U)`, `R_2 <= I(U;Y_2)`,

with `|U| <= min{|X|,|Y_1|,|Y_2|}+1`. Superposition codebooks choose a cloud center `U^n` for the weaker receiver and conditional satellite `X^n` for the stronger receiver. The converse takes `U_i=(M_2,Y_1^{i-1})` on an equivalent physically degraded channel, Fano, and a time-sharing coordinate. The Markov structure is required for the second receiver bound. More-capable and less-noisy classes have further exact formulas in the notes; the general private-message broadcast capacity region remains unknown. The general-BC Marton formula is an inner bound, and Nair–El Gamal-style outer bounds are outer bounds; they are not a general equality.

For a two-user DM interference channel (independent messages, separate encoders, average block error), general capacity is unknown. Under strong interference, for every product input law the inequalities `I(X_1;Y_1|X_2) <= I(X_1;Y_2|X_2)` and `I(X_2;Y_2|X_1) <= I(X_2;Y_1|X_1)` hold. Each receiver can then decode both messages, and the exact region is the intersection of the two MAC regions: the two individual conditional-MI bounds and `R_1+R_2 <= min{I(X_1,X_2;Y_1|Q), I(X_1,X_2;Y_2|Q)}`, for product `p(q)p(x_1|q)p(x_2|q)` (the notes give `|Q|<=4`). Very strong interference strengthens the conditions so that decoding the interfering message first costs no rate; the region reduces to the single-user bounds. These are proved special cases, not a general solution.

Etkin–Tse–Wang (complete arXiv cs/0702045v2) proves an approximate capacity theorem for the two-user Gaussian IC. In its weak-interference theorem a fixed Han–Kobayashi split puts each private signal at no more than the noise level at the unintended receiver (`INR_p,j=min{1,INR_j}`); the achievable region is within one bit per user of the capacity region. Its mixed-interference theorem makes the stronger cross-link message common and uses the same noise-level private split on the other link, again within one bit per user. The proof combines genie-aided outer bounds with the corresponding HK inner regions. The strong-interference region is exact, and the very-strong special case reduces to the two single-user capacities. The symmetric weak-regime approximations and generalized degrees of freedom are high-SNR conclusions with fixed SNR/INR exponent; they are not finite-SNR exact capacities. Keep “within one bit per user” attached to the stated Gaussian two-user model and do not promote it to a general IC capacity formula.

## Relay and multihop networks

A DM relay channel has source input `X_1`, relay input `X_2`, relay observation `Y_2`, destination output `Y_3`, and memoryless kernel `p(y_2,y_3|x_1,x_2)`. The relay input is causal in its past observations. The general capacity is unknown. The cutset bound is

`C <= max_{p(x_1,x_2)} min{ I(X_1,X_2;Y_3), I(X_1;Y_2,Y_3|X_2) }`.

Decode-forward gives the lower bound `max_{p(x_1,x_2)} min{I(X_1,X_2;Y_3), I(X_1;Y_2|X_2)}`; partial decode-forward adds a message-splitting auxiliary; compress-forward uses `p(x_1)p(x_2)p(yhat_2|y_2,x_2)` and the equivalent lower bound

`max min{ I(X_1;Y_3,Yhat_2|X_2), I(X_1,X_2;Y_3)-I(Y_2;Yhat_2|X_1,X_2,Y_3) }`.

The second term charges for describing the relay observation. Do not omit the test-channel factorization or call the cutset bound capacity. The notes prove exactness for physically degraded, reversely degraded/direct, semideterministic, orthogonal-component and other specified classes; otherwise retain the bounds.

For a general DMN with `N` nodes, each node may send an independent uniform message to its destination set and act as a causal relay. The cutset outer bound uses an arbitrary joint `p(x^N)`. Noisy network coding (NNC) is an inner bound that restricts to product inputs conditional on public `Q` and local test channels `p(yhat_k|y_k,x_k,q)`. For multicast, each nonempty cut `S` separating a source from a destination must satisfy

`R(S) < min_{d in S^c intersect D} [ I(X(S);Yhat(S^c),Y_d|X(S^c),Q) - I(Y(S);Yhat(S)|X^N,Yhat(S^c),Y_d,Q) ]`.

The penalty term and the product-input constraint distinguish this from the cutset bound. The full Lim–Kim–El Gamal–Chung proof uses message repetition across independent block codebooks, conditional typicality covering at each relay, and simultaneous nonunique joint-typical decoding without requiring explicit compression-index recovery. It extends to general destinations by interference-channel decoding and includes a treat-interference-as-noise variant. For the general DMN, NNC does not equal the cutset bound in general. The article proves equality for noiseless multicast, specified erasure networks and deterministic networks when the optimizing product law attains the cutset. The March 2010 arXiv v2 states the exact cut-dependent Gaussian RHS difference `|S|/2 + min{|S|,|S^c|}/2 log_2(2|S|)`, with worst scalar RHS allowance at most `(N/4)log_2(2N)` for `N>3`; its displayed proof compares RHSs but does not establish its stronger simultaneous vector wording. The final IEEE 2011 article changes Theorem 4 to a global per-coordinate `0.63N` gap, adds a matrix lemma and Appendix D, and explicitly constructs a common signed rate shift. Its printed statement omits clipping at zero. The local proof note gives the corrected positive-part vector using the active-message NNC error analysis; this establishes the final per-user gap but does not establish the preprint's sharper cut-dependent vector guarantee. The earlier course slide’s looser `(N/2)log_2 6` statement should not replace the complete article's exact per-cut RHS result.

For noiseless single-source unicast, max-flow equals min-cut. For noiseless multicast, the cutset value is achievable by network coding (linear codes over a sufficiently large finite field give a construction). This does not solve general multiple-unicast networks: the cutset bound and simple routing need not characterize the region.

## Distributed lossy coding and source–channel interfaces

For finite-alphabet lossy source coding with per-letter distortions, the two-terminal Berger–Tung inner bound uses independent test channels `p(u_1|x_1)p(u_2|x_2)` and reconstructions `xhat_j=g_j(u_1,u_2)` meeting each expected distortion target. Its rate inequalities are `R_1>=I(X_1;U_1|U_2)`, `R_2>=I(X_2;U_2|U_1)`, and `R_1+R_2>=I(X_1,X_2;U_1,U_2)`. This is an inner bound; the general multiterminal lossy rate region is not known.

The complete Wagner–Tavildar–Viswanath article proves an exact region for two scalar jointly Gaussian observations normalized to unit variance, correlation `0<rho<1`, two separate encoders and separate expected squared-error targets `d_1,d_2>0`. With base-2 logs, define `beta=1+sqrt(1+4 rho^2 d_1 d_2/(1-rho^2)^2)` and `log^+(z)=max{0,log_2 z}`. The exact closed region is the intersection of

`R_1 >= (1/2)log^+( (1/d_1)(1-rho^2+rho^2 2^{-2R_2}) )`,
`R_2 >= (1/2)log^+( (1/d_2)(1-rho^2+rho^2 2^{-2R_1}) )`,
`R_1+R_2 >= (1/2)log^+( (1-rho^2) beta/(2 d_1 d_2) )`.

The achievable scheme uses distributed Gaussian test channels followed by Slepian–Wolf compression. The converse first lower-bounds the rate by the determinant of the reconstruction-error covariance, then couples the source to a quadratic-Gaussian CEO problem for a second sum-rate bound; the two bounds meet at the Gaussian test-channel covariance. Exactness here does not imply a generic Gaussian extremal theorem for arbitrary multiterminal sources. The paper’s extensions cover a constrained two-source M-sums problem and the equal-distortion sum rate for exchangeable equally correlated Gaussian sources, not arbitrary `k`-source rate regions.

For a point-to-point DMS and DMC, Shannon separation is exact under the usual memoryless/expected-distortion model: lossless source rate `H(U)` or lossy rate `R(D)` must fit below channel capacity. This does not extend to separate source and channel coding over a multiuser MAC. Cover–El Gamal–Salehi’s correlated-source theorem is a joint source-channel inner condition with `p(q)p(x_1|u_1,q)p(x_2|u_2,q)` and conditional mutual-information bounds; it is not a general capacity characterization. Treat source distortion, message loss, side information, and channel average error as separate operational contracts.

## Feedback and directed information

Perfect causal output feedback does not increase the capacity of a memoryless point-to-point DMC. It can enlarge multiuser regions. For the two-user real AWGN MAC, Ozarow’s feedback capacity is exact: for some correlation parameter `rho_f in [0,1]`,

`R_1 <= (1/2)log_2(1+(1-rho_f^2)S_1)`,
`R_2 <= (1/2)log_2(1+(1-rho_f^2)S_2)`,
`R_1+R_2 <= (1/2)log_2(1+S_1+S_2+2rho_f sqrt(S_1 S_2))`.

This dependence is generated by causal feedback coding, not by preshared common randomness. For general DM-MAC feedback, Cover–Leung is an inner bound and the capacity is unknown; it is exact in named subclasses. Physically degraded DM-BC feedback does not enlarge capacity. A DM relay channel with noiseless output feedback has cutset capacity via decode-forward, but this is a feedback model and does not give the no-feedback relay capacity.

For a DM two-way channel, node `j` chooses `X_{ji}` from its own message and `Y_j^{i-1}`. Directed information is `I(X^n -> Y^n)=sum_i I(X^i;Y_i|Y^{i-1})`, with causal conditioning defined as `sum_i I(X^i;Y_i|Y^{i-1},Z^i)`. The common-output DM-TWC has an exact multi-letter characterization by a union over blocklength `k` and causal input laws `p(x_1^k||y^{k-1})p(x_2^k||y^{k-1})`; rates are bounded by `k^{-1}I(X_1^k->Y^k||X_2^k)` and its counterpart. This is exact but not a single-letter solution; the general TWC capacity remains unknown. Causal probability kernels and their domains must be defined before this interface is used.

## Boundaries and open general problems

The sources establish exact single-letter regions for the independent-message DM-MAC, degraded DM-BC, strong-interference DM-IC, and exact results for the named relay/network and Gaussian source-coding cases above. They establish inner and outer bounds, not a capacity formula, for general broadcast, interference, relay, noisy multihop and multiterminal lossy source coding. A course slide or paper abstract saying “capacity remains open” is date-stamped evidence; it is not by itself a 2026 literature search. The scaffold should phrase unresolved questions at the appropriate generality and attach current authoritative sources before minting open-problem items.

Common failure modes to block in review:

- using a product input law for a feedback channel or allowing arbitrary joint inputs in a no-cooperation MAC without a derivation;
- treating a common time-sharing variable, a common part of sources, and free common randomness as interchangeable;
- calling a Berger–Tung, Han–Kobayashi, decode-forward, compress-forward, or NNC expression a capacity region outside its proved equality cases;
- suppressing the relay quantization penalty or the `Yhat`/product-input restriction in NNC;
- using a strict inner-bound inequality as a closed capacity-region statement without taking closure;
- converting a Gaussian constant-gap, high-SNR or generalized-degrees-of-freedom claim into an exact finite-SNR formula;
- omitting the average-vs-maximal error distinction or the message-independence hypothesis;
- applying finite-alphabet strong typicality to Gaussian alphabets without a separate argument.
