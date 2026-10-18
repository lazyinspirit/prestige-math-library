# Finite feedback and relay network proof notes

Status: local draft proof supplement for the r2 lane, written at root's request for the bounded network obligations in `audit/scientific-gap-matrix.md`. These are finite-alphabet proofs and interfaces for scaffold integration. They are not production items, proof-review stamps, or new claims that an open network-capacity problem has been solved.

All logarithms are base two. Alphabets are finite and nonempty. A channel is a stochastic kernel and is used memorylessly unless stated otherwise. Typical sets are strong typical sets on the positive support of the target law; nested tolerances are fixed before taking blocklength limits. Error means average block error over independent uniform messages and channel randomness. A strict rate inequality below has positive slack. Boundary points are included only after taking closure.

## Reading scope and source limits

The principal read-only manuscript is Abbas El Gamal and Young-Han Kim, *Lecture Notes on Network Information Theory*, arXiv:1001.3404v3 (22 March 2010), a 641-page historical author lecture-note manuscript, not the later expanded Cambridge book. The r5 source manifest records the manuscript identity, PDF/text hashes, complete extraction, and r5's whole-document reading. I did **not** read the whole manuscript. I read the extracted text consecutively across these target sections and checked the central statement pages in the PDF where glyphs or signs mattered:

- Lecture Notes 6, printed pp. 1–14: strong interference definition, capacity statement, simultaneous-decoding reference, converse and tensorization lemma statement.
- Lecture Notes 15, printed pp. 7–18: full no-common-part correlated-source proof, common-part definition, and the CES theorem and its achievability outline.
- Lecture Notes 17, printed pp. 18–25 and 39–45: full decode-forward backward-decoding proof and compress-forward theorem, code construction, receiver analysis, and final bound.
- Lecture Notes 18, printed pp. 19–22 and 45–55: feedback DM-MAC model and Cover–Leung statement, then the DM-TWC model, directed-information definitions, and common-output multiletter theorem.

I visually inspected PDF pages 130, 364–365, 414, 416–417, 451, and 468 for the displayed strong-interference, CES, compress-forward, Cover–Leung, and TWC formulas. The v3 sections give no Cover–Leung proof, no TWC proof, and only an outline for CES. The relay compress-forward proof leaves one joint packing step as “check!” and prints a plus sign in the wrong-message packing threshold; the finite proof below supplies the omitted exponent and uses the required minus-slack form. The v3 compress-forward statement also gives `|hat Y_r|<=|X_r||Y_r|+1`; this note proves the rate bound for each finite test channel but does not establish that optional support reduction. The source's strong-interference tensorization proof is only an induction pointer; a complete hybrid-output proof is supplied below. The source writes the TWC capacity region as an unclosed union although its operational definition is closed; the exact operational statement below uses the closure of that union.

For finite type-counting interfaces I independently checked r5's read-only `network-coding-proof-developments.md` §§1.1–1.4, 2.1–2.4 and 5.1–5.4. In §5 I independently specialized the relay packing/cut calculation to one sender and one relay. I use its conditional packing and path-connected support-reduction interfaces only within their stated finite-alphabet, average-error scope. The selected-codeword and post-covering Markov interfaces in the shared draft `proof-developments.md` are proposal-level scaffold lemmas (`lem-it-selected-covering-codeword-counting-bound` and `lem-it-finite-markov-typicality-after-covering`), not published production suppliers; their exact finite applications are also spelled out here.

## Finite-alphabet estimates used in the proofs

For a fixed finite joint law, the empirical frequency of each symbol tuple is an average of bounded indicators. The finite weak law and a union bound therefore imply that an i.i.d. true tuple is strongly typical with probability tending to one. If a candidate sequence is drawn independently with conditional law ∏_i p(v_i|u_i), and the tested base tuple `(u^n,z^n)` is typical, conditional type counting gives

`P{(u^n,V^n,z^n) is jointly typical} <= 2^{-n(I(V;Z|U)-delta)}`,

for a tolerance-dependent `delta -> 0`. Indeed there are at most `2^{n(H(V|U,Z)+delta)}` candidates in the relevant conditional type class, and each has probability at most `2^{-n(H(V|U)-delta)}`. Repeating the count for multiple independently generated candidate sequences gives the corresponding sum of mutual-information exponents. A union over `2^{nR}` wrong candidates vanishes when the relevant mutual information exceeds `R` with positive slack. Each use below checks that the false candidate codeword is independent of the actual observation, conditionally on the displayed cloud/input sequence. No such estimate is applied to a codeword selected by feedback as if it were independent.

For covering, fix a typical base `(y_r^n,x_r^n)` and draw `L=ceil(2^{nRhat})` independent words from `p(hat y_r|x_r)^n`. The conditional typical set has mass at least `2^{-n(I(Y_r;hat Y_r|X_r)+delta)}`. Hence

`P{no jointly typical word} <= exp(-2^{n(Rhat-I(Y_r;hat Y_r|X_r)-delta)})`,

which tends to zero when `Rhat>I(Y_r;hat Y_r|X_r)+delta`. Select the first successful index. Conditional on success its word is supported on the required conditional-typical set; its point masses there are at most `2^{-n(H(hat Y_r|Y_r,X_r)-delta)}` by dividing the product-kernel point-mass bound by the conditional-typical-set mass. The finite Markov type-counting argument then applies to

`(X_s,Y_d) - (Y_r,X_r) - hat Y_r`.

For completeness, the Markov step is this: outside any fixed enlarged joint-typical set, a conditional type of `hat Y_r` given `(X_s,Y_d,Y_r,X_r)` with the correct nearby `(Y_r,X_r,hat Y_r)` marginal has conditional entropy at least a fixed positive amount below `H(hat Y_r|Y_r,X_r)`. Otherwise compactness of the finite type simplex gives a limiting non-target coupling with `I((X_s,Y_d);hat Y_r|Y_r,X_r)=0`; the target Markov law is the unique zero-conditional-information coupling with those marginals. There are polynomially many conditional types, so the upper point-mass bound times the type-class count makes the bad probability tend to zero. Thus the selected compression word is jointly typical with the true source, relay, and destination variables with probability tending to one.

We also use the following finite support fact, whose proof is included because several cited cardinalities are sharper than generic Carathéodory. If `G` is path-connected in `R^d`, each point of `conv(G)` is a convex combination of at most `d` points of `G`. Carathéodory first gives at most `d+1`. If a minimal representation has `d+1` affinely independent points, translate the represented point to zero and write its vertices as `v_0,...,v_d`; the facet opposite `v_0` avoids zero, so `v_1,...,v_d` are a linear basis and `v_0=-sum_i a_i v_i` with every `a_i>0`. The cone `K={-sum_i b_i v_i:b_i>=0}` has `v_0` in its interior and `v_1` outside. A path in `G` from `v_0` to `v_1` first meets the boundary of `K` at a point `w=-sum_i b_i v_i` with some `b_j=0`. Then zero is a convex combination of `w` and the at most `d-1` vertices `v_i`, `i != j`; if all `b_i=0`, zero is itself in `G`. This reduces the support to at most `d`.

## Cover–Leung feedback DM-MAC inner bound

Let `W(y|x1,x2)` be a finite DM-MAC. At time `i`, sender `j` uses a deterministic causal map `x_ji=f_ji(M_j,Y^{i-1})`; both senders receive the same noiseless output feedback. Messages `M1,M2` are independent uniform variables, and the receiver must decode both. For a law `p(u)p(x1|u)p(x2|u)`, every strict rate pair satisfying

`R1 < I(X1;Y|X2,U)`,

`R2 < I(X2;Y|X1,U)`,

`R1+R2 < I(X1,X2;Y)`

is achievable. This is an inner bound in general, not the feedback capacity region. The v3 statement gives `|U| <= min{|X1||X2|+1, |Y|+2}`.

Fix a block length `n` and a number `B` of blocks. There are `B-1` independent new messages `M_{j,b}` per sender, each uniform on `[1:2^{nR_j}]`; put dummy pair `(1,1)` before block 1 and in block B. Generate a cloud word `u^n(m_1',m_2')` i.i.d. `p_U` for every old message pair. For each old pair, generate sender-1 satellites `x_1^n(m_1|m_1',m_2')` conditionally i.i.d. `p(x_1|u)` and sender-2 satellites `x_2^n(m_2|m_1',m_2')` conditionally i.i.d. `p(x_2|u)`, independently given the cloud. The codebooks are public and then fixed; there is no run-time shared randomness.

In block `b`, sender `j` transmits `x_j^n(M_{j,b}|M_{1,b-1},M_{2,b-1})`. After block `b`, sender 1 knows its own new message and the full feedback block, and decodes `M_{2,b}` by the unique conditional-typicality test using the known `u^n`, `x_1^n`, candidate `x_2^n`, and `y^n`. Sender 2 symmetrically decodes `M_{1,b}`. If the previous pair is correct, the true tuple is typical. For sender 1, each wrong `x_2^n` is independent of the received output conditionally on `(u^n,x_1^n)`; the packing exponent is `I(X2;Y|X1,U)`. Thus its decoding error tends to zero if `R2<I(X2;Y|X1,U)-delta`. Sender 2 has exponent `I(X1;Y|X2,U)` and succeeds if `R1` is below it. These are the two individual constraints; the encoders need not decode an unknown pair jointly, so no conditional sum-rate constraint is imposed on them. By induction and a union bound over fixed `B`, all old pairs used by the encoders are correct with probability tending to one.

The destination decodes backwards. Starting from the dummy pair in block `B`, if it knows the new pair `(M_{1,b},M_{2,b})`, it uses `Y^n(b)` to find the unique previous pair `(m_1',m_2')=(M_{1,b-1},M_{2,b-1})` for which

`(x_1^n(M_{1,b}|m_1',m_2'), x_2^n(M_{2,b}|m_1',m_2'), Y^n(b))`

is typical for the *marginal* law `p(x1,x2,y)=sum_u p(u)p(x1|u)p(x2|u)W(y|x1,x2)`. It does not test or decode `U` separately. The true tuple is typical. For every false old pair, the candidate satellite pair has the marginal product-over-time law `p(x1,x2)^n` and is independent of the received output; this remains true when one coordinate of the message pair happens to equal the true coordinate, because the codebooks are indexed by the full old pair. The packing exponent is `I(X1,X2;Y)`, and there are at most `2^{n(R1+R2)}` candidate pairs. The backward decoding error therefore tends to zero if `R1+R2<I(X1,X2;Y)-delta`. Induction from the dummy terminal pair bounds the destination's total error by a sum of `B` terms tending to zero.

The code sends `B-1` source message blocks in `B` channel blocks, so its per-use rates are multiplied by `(B-1)/B`. Choose `B` large and then `n` large; closure gives every boundary pair in the displayed region.

For the stated auxiliary bound, map each product input law at `u` to either (i) all but one coordinate of `p(x1,x2|u)` and `H(Y|X1,u),H(Y|X2,u)`, or (ii) all but one coordinate of `p(y|u)` and `H(Y|X1,u),H(Y|X2,u),H(Y|X1,X2,u)`. The first image is path-connected in dimension `|X1||X2|+1`; the second is path-connected in dimension `|Y|+2`. Preserving their averages preserves the two conditional mutual informations and the unconditional sum mutual information. The finite support fact above gives respectively `|U|<=|X1||X2|+1` and `|U|<=|Y|+2`.

## Cover–El Gamal–Salehi correlated sources over a DM-MAC

Let `(U1,U2)` be a finite-alphabet i.i.d. source pair with one-letter law `p(u1,u2)`, and let `W(y|x1,x2)` be a finite DM-MAC. The common part `U0` is the component label of the bipartite support graph with left vertices `u1`, right vertices `u2`, and an edge exactly when `p(u1,u2)>0`. Equivalently `U0=g1(U1)=g2(U2)` a.s. and is the finest such common deterministic function. The source is sent losslessly at one source symbol per channel use if, for some finite `W` independent of `(U1,U2)` and

`p(w)p(x1|u1,w)p(x2|u2,w)`,

the four strict inequalities hold:

`H(U1|U2) < I(X1;Y|X2,U2,W)`,

`H(U2|U1) < I(X2;Y|X1,U1,W)`,

`H(U1,U2|U0) < I(X1,X2;Y|U0,W)`,

`H(U1,U2) < I(X1,X2;Y)`.

Here `U0` is the source common part; `W` is an independent auxiliary indexing the random cloud codewords that let the encoders coordinate; it is not preshared correlation between the sources. An independent time-sharing variable `Q` is unnecessary: if `p(q)p(w|q)` and conditional kernels are introduced, replacing `W` by `(Q,W)` yields the same factorization and preserves its independence from `U0`.

For each possible source sequence `u_0^n`, generate a cloud word `w^n(u_0^n)` with law `p_W^n`. For each `u_1^n` (whose common part is `u_0^n`), generate `x_1^n(u_1^n|w^n(u_0^n))` with product conditional law `p(x_1|u_1,w)`. Generate the sender-2 codewords analogously and independently conditional on the cloud. Given its observed source sequence, each sender computes its common-part sequence and sends its indexed input word. Decode the unique source pair `(u_1^n,u_2^n)` whose common-part sequences agree and for which

`(u_1^n,u_2^n,u_0^n,w^n(u_0^n),x_1^n,x_2^n,y^n)`

is jointly typical for the induced law. A source pair with inconsistent common-part sequences is never a candidate.

The true tuple is typical with probability tending to one by successive finite conditional typicality: first the i.i.d. source tuple, then its independently generated cloud word, the two conditionally independent input codewords, and finally the memoryless channel output. Consider the remaining error classes.

- If only `u_1^n` is wrong, consistency forces it to have the true `u_0^n`. For a typical fixed `u_2^n`, there are at most `2^{n(H(U1|U2)+delta)}` candidate source sequences. For each candidate `u_1^n` distinct from the true sequence, its `x_1^n` codeword is generated independently of the true output conditional on `(u_1^n,u_2^n,x_2^n,w^n)`. A conditional type count first charges the candidate source label for matching the output, with exponent `I(U1;Y|U2,X2,W)`, and then charges its independent channel-input codeword, with exponent `I(X1;Y|U1,U2,X2,W)`. Thus the per-candidate probability is at most

  `2^{-n(I(U1;Y|U2,X2,W)+I(X1;Y|U1,U2,X2,W)-delta)}`

  `= 2^{-n(I(U1,X1;Y|U2,X2,W)-delta)} = 2^{-n(I(X1;Y|U2,X2,W)-delta)}`.

  The equality is the Markov relation `U1-X1-Y` conditional on `(U2,X2,W)`. To account for the condition that the candidate is not the true source word, fix a typical candidate `\tilde u_1^n`: conditional on `u_2^n`, the actual source word has law `p(u_1^n|u_2^n)` with that one atom removed and renormalized. For every event of the output this changes the unconditioned marginal bound by at most the factor `1/(1-p(\tilde u_1^n|u_2^n))`. If `H(U1|U2)>0`, strong typicality makes this atom exponentially small; if the conditional entropy is zero, there is no distinct positive-support conditional-typical candidate. The union bound makes this class vanish under the first inequality. The class with only `u_2^n` wrong is symmetric and gives the second inequality.

- If both source sequences are wrong but have the same `u_0^n` as the true pair, there are at most `2^{n(H(U1,U2|U0)+delta)}` candidates. For a fixed candidate `(\tilde u_1^n,\tilde u_2^n)`, both coordinate sequences differ from the true sequences; this is needed because each candidate input word must come from an independent satellite-codebook family. Condition the true source pair, given `u_0^n`, on both `U_1^n\ne\tilde u_1^n` and `U_2^n\ne\tilde u_2^n`. Relative to its unconditioned law this changes any output-event bound by at most the factor

  `1/[1-p(\tilde u_1^n|u_0^n)-p(\tilde u_2^n|u_0^n)]`.

  When both `H(U1|U0)>0` and `H(U2|U0)>0`, the two probabilities are exponentially small for conditional-typical candidates, so this factor tends to one. If either conditional entropy is zero, no both-coordinate-wrong candidate can be conditional-typical with the same common-part sequence, and this error class is empty. For a nonempty class, first count the chance that its source labels match the actual output under the source/channel joint type, then count its two independently generated input words; their exponent sum is `I(U1,U2,X1,X2;Y|U0,W)=I(X1,X2;Y|U0,W)`. The equality uses the channel Markov factorization through `(X1,X2)`. The third inequality makes this class vanish.

- If both source sequences are wrong and their `u_0^n` differs from the true sequence, there are at most `2^{n(H(U1,U2)+delta)}` candidates. For a fixed candidate common-part sequence `\tilde u_0^n`, restrict the true source to `U_0^n\ne\tilde u_0^n`; conditioning changes an output-event bound by at most `1/[1-p(\tilde u_0^n)]`. If `H(U0)>0`, this factor tends to one for typical candidates; if `H(U0)=0`, there is no different-common-part candidate. The candidate cloud and input codewords then belong to codebook families independent of the true output. Counting the tested joint type gives exponent `I(U0,U1,U2,W,X1,X2;Y)=I(X1,X2;Y)`, again by the channel Markov factorization. The fourth inequality makes this class vanish.

For each error class the random codebook average tends to zero; hence at each blocklength some deterministic public codebook has no larger average error. This proves the sufficient condition. It is an inner bound for correlated source transmission, not a general MAC capacity theorem. It is stronger than the no-common-part construction because it separately controls errors within a common-part class and errors across classes.

## Relay decode-forward lower bound

Let a finite DM relay channel have sender input `X_s`, relay input `X_r`, destination output `Y_d`, relay observation `Y_r`, and kernel `W(y_d,y_r|x_s,x_r)`. The sender's encoder depends on its message only. The relay is strictly causal: its symbol at time `i` is a function of `Y_r^{i-1}`. The decode-forward lower bound is

`R < max_{p(x_s,x_r)} min{ I(X_s,X_r;Y_d), I(X_s;Y_r|X_r) }`.

Fix a joint law `p(x_s,x_r)=p(x_r)p(x_s|x_r)` and an interior rate. Use `B` blocks, with `B-1` independent messages `M_b in [1:2^{nR}]` and dummy `M_0=M_B=1`. For each block independently generate relay codewords `x_r^n(m')` i.i.d. `p(x_r)` and source satellites `x_s^n(m|m')` with product law `p(x_s|x_r^n(m'))`.

In block `b`, the source sends `x_s^n(M_b|M_{b-1})`; the relay sends `x_r^n(\tilde M_{b-1})`, its previous estimate. At the end of block `b`, assuming the previous estimate is correct, the relay declares the unique `m` for which `(x_s^n(m|M_{b-1}),x_r^n(M_{b-1}),y_r^n(b))` is typical. The true tuple is typical; each wrong satellite is conditionally independent of the relay observation given the known relay word, with packing exponent `I(X_s;Y_r|X_r)`. Thus relay error vanishes if `R<I(X_s;Y_r|X_r)-delta`.

The destination decodes backwards. Starting from dummy `M_B`, if it knows the new message `M_b`, it uses `y_d^n(b)` to find the unique previous message `m'=M_{b-1}` such that `(x_s^n(M_b|m'),x_r^n(m'),y_d^n(b))` is typical for `p(x_s,x_r,y_d)`. The true triple is typical. A wrong candidate pair is generated as a joint `p(x_r)p(x_s|x_r)` word and is independent of the actual output, so its packing exponent is `I(X_s,X_r;Y_d)`. The union over `2^{nR}` messages vanishes if `R<I(X_s,X_r;Y_d)-delta`. Induct backward from the terminal dummy; union bounds over fixed `B` combine with the relay's forward induction. Since `(B-1)/B` of the channel blocks carry messages, first choose large `B`, then large `n`, and take closure. This is a lower bound; no relay-capacity converse is asserted here.

## Relay compress-forward lower bound

Use the same DM relay model and abbreviate the source, relay and outputs as `X_s,X_r,Y_d,Y_r`. Fix a finite test channel

`p(x_s)p(x_r)W(y_d,y_r|x_s,x_r)p(hat y_r|y_r,x_r)`.

For every such law, every rate strictly below

`min{ I(X_s;Y_d,hat Y_r|X_r), I(X_s,X_r;Y_d)-I(Y_r;hat Y_r|X_s,X_r,Y_d) }`

is achievable. This is a relay inner bound; it is not a capacity formula for a general relay channel. The universal proof below is the one-relay specialization of noisy network coding (NNC), which uses covering and nonunique decoding without binning. The classical Wyner–Ziv binning proof is also recorded, with the additional condition needed by its separate-bin decoder.

Choose auxiliary rates `R_b` (bin/channel rate) and `Rhat` satisfying

`Rhat > I(hat Y_r;Y_r|X_r)`,

`R_b < I(X_r;Y_d)`,

`R < I(X_s;Y_d,hat Y_r|X_r)`,

`R+Rhat-R_b < I(X_s;Y_d|X_r)+I(hat Y_r;X_s,Y_d|X_r)`.

When `I(X_r;Y_d)>0`, these constraints are feasible exactly when `R` is below the displayed minimum, with positive slack. This is the classical separately-decoded-bin realization. Use `B` blocks for `B-1` independent source messages. In each block generate `2^{nR}` source words i.i.d. `p(x_s)`, `2^{nR_b}` relay words i.i.d. `p(x_r)`, and for every relay word `x_r^n(l)` generate `2^{nRhat}` compression words with law `p(hat y_r|x_r)^n`. Assign every compression index independently and uniformly to one of `2^{nR_b}` bins, independently of all words. The codebook and bin assignment are fixed publicly.

The sender transmits the codeword for the current message. At the end of block `b`, the relay knows the previously sent relay bin `l_{b-1}`, observes `y_r^n(b)`, and selects the first compression index `k_b` for which `(hat y_r^n(k_b|l_{b-1}),y_r^n(b),x_r^n(l_{b-1}))` is typical. If none exists it declares an error and uses a fixed default. It sends the bin `l_b` of `k_b` through `x_r^n(l_b)` in block `b+1`. The covering estimate and post-covering Markov estimate above show that the covering failure and true-tuple atypicality probabilities tend to zero.

The destination decodes in one-block delay. From `y_d^n(b+1)`, it first decodes the relay bin `l_b` by the unique typical relay word `x_r^n(l_b)`; this error vanishes for `R_b<I(X_r;Y_d)`. Having `l_{b-1}` and `l_b`, it declares the unique source message `m` for which there exists a compression index `k` in bin `l_b` with

`(x_s^n(m),x_r^n(l_{b-1}),hat y_r^n(k|l_{b-1}),y_d^n(b))`

jointly typical. The true message and selected compression index pass this test with probability tending to one.

There are two false-message classes. For a wrong message with the **true** compression index `k_b`, the candidate `X_s^n(m)` is independent of `(X_r^n,hat Y_r^n,Y_d^n)`; conditional packing gives exponent `I(X_s;Y_d,hat Y_r|X_r)`. This class vanishes under the third inequality. For a wrong message and a wrong compression index in the decoded bin, first condition on all codewords, source/channel outcomes, and the selected index. The independent random bin assignment puts any fixed `k != k_b` in the same bin as `k_b` with probability exactly `2^{-nR_b}`. Upper-bound the number of such events by summing over all wrong messages and all compression words, dropping the restriction `k != k_b` only after the collision indicator has been applied. For each fixed candidate pair of codewords, before selection it is independent of the true `Y_d^n`; conditional on a typical `x_r^n`, its proposal law is

`p(x_s)^n p(hat y_r|x_r)^n p(y_d|x_r)^n`,

whereas the tested target is `p(x_s,hat y_r,y_d|x_r)^n`. Its type-counting exponent is

`D(P_{X_s,hat Y_r,Y_d|X_r} || P_{X_s}P_{hat Y_r|X_r}P_{Y_d|X_r})`

`= I(X_s;Y_d|X_r)+I(hat Y_r;X_s,Y_d|X_r)`.

The expected union bound is therefore at most a subexponential factor times

`2^{n(R+Rhat-R_b-I(X_s;Y_d|X_r)-I(hat Y_r;X_s,Y_d|X_r)+delta)}`,

which tends to zero under the fourth inequality. This argument is why the false-bin class uses the *sum* of the two mutual-information exponents, not just a generic one-codeword packing lemma. The channel error is handled by an induction over blocks and a union bound for fixed `B`; the dummy first/last blocks cost the factor `(B-1)/B`.

Finally, use the Markov factorization `hat Y_r-(Y_r,X_r)-(X_s,Y_d)` to eliminate the auxiliary rates. The fourth constraint with `Rhat` decreasing to `I(hat Y_r;Y_r|X_r)` and `R_b` increasing to `I(X_r;Y_d)` yields

`R < I(X_r;Y_d)+I(X_s;Y_d|X_r)+I(hat Y_r;X_s,Y_d|X_r)-I(hat Y_r;Y_r|X_r)`

`= I(X_s,X_r;Y_d)-I(Y_r;hat Y_r|X_s,X_r,Y_d)`.

Together with the third constraint this is the claimed minimum whenever `I(X_r;Y_d)>0`. The v3 proof prints `+delta` in the wrong-message bound for its one-codeword event; the packing estimate requires `R<I(X_s;Y_d,hat Y_r|X_r)-delta`, as used here. It also leaves the two-wrong-index type count as “check!”; the divergence calculation above supplies that missing step. No support-size reduction for `hat Y_r` is used in this proof.

The separate-bin method just described is not by itself a proof for every test channel: if `I(X_r;Y_d)=0`, it cannot send a positive bin rate, and the min formula can still be positive when the channel has joint-input information. The following no-binning proof closes that case and establishes the displayed lower bound for every finite test channel.

### No-binning one-relay NNC proof (valid for every finite test channel)

Use `B` independent length-`n` block codebooks and repeat the **same** message `M in [1:2^{nBR}]` in every block. For each block `j`, generate source codewords `x_s^n(m)` i.i.d. `p(x_s)` and relay codewords `x_r^n(l_{j-1})` i.i.d. `p(x_r)`, independently over messages, indices and blocks. For every relay codeword generate `2^{nRhat}` quantization words `hat y_r^n(k_j|l_{j-1})` conditionally i.i.d. according to `p(hat y_r|x_r)^n`, the marginal of the fixed test channel after averaging `Y_r`. Set `l_0=1`.

In block `j`, the source sends `x_s^n(M)` and the relay sends `x_r^n(l_{j-1})`. At the end of the block, the relay selects uniformly among all indices `k_j` for which `(x_r^n(l_{j-1}),y_r^n(j),hat y_r^n(k_j|l_{j-1}))` is typical; if none exists it selects a fixed default. It sends the selected index as `l_j` through the relay codebook in block `j+1`. If

`Rhat > I(Y_r;hat Y_r|X_r)+delta`,

the covering estimate above and the finite Markov estimate show that the correct message and the relay's actual index path generate jointly typical block tuples with probability tending to one for fixed `B`.

The destination searches for the unique message `m` for which there exists a sequence of relay indices `l_1,...,l_B` such that each block tuple

`(x_s^n(m),x_r^n(l_{j-1}),hat y_r^n(l_j|l_{j-1}),y_d^n(j))`

is jointly typical. It need not identify the relay indices uniquely. For a false message, the finite NNC packing argument has two candidate-index classes, corresponding to the cuts `S={s}` and `S={s,r}`. For `S={s}`, reveal the actual relay input, selected quantization word and destination output. The false source codeword remains independent of them; the exponent is

`I_1=I(X_s;hat Y_r,Y_d|X_r)`.

For `S={s,r}`, the false source/relay codeword group and its quantizer group are independent of the actual destination output. Their product proposal, conditional on the displayed `X_r` coordinate inside the test channel, differs from the target joint type by the divergence

`D(P_{X_s,X_r,hat Y_r,Y_d} || P_{X_s}P_{X_r}P_{hat Y_r|X_r}P_{Y_d})`

`= I(X_s,X_r;Y_d)+I(hat Y_r;X_s,Y_d|X_r)`.

This is the second packing exponent before subtracting the `Rhat` bits per block needed to search quantization indices. More explicitly, the one-relay specialization of the finite type bound in r5 `network-coding-proof-developments.md` §5.4 gives, for fixed `B`, a wrong-message error exponent governed by

`R < ((B-1)/B) min{ I_1, I_2-Rhat-delta } - Rhat/B`,

where `I_2=I(X_s,X_r;Y_d)+I(hat Y_r;X_s,Y_d|X_r)`. The first/last boundary blocks account for the factors `(B-1)/B` and `1/B`; no relay-index uniqueness is used. Choose `Rhat>I(Y_r;hat Y_r|X_r)+delta`, let `n` tend to infinity with `B` fixed, and then let `B` tend to infinity. This proves every rate below

`min{ I(X_s;Y_d,hat Y_r|X_r), I(X_s,X_r;Y_d)+I(hat Y_r;X_s,Y_d|X_r)-I(Y_r;hat Y_r|X_r) }`.

Finally, the Markov factorization `hat Y_r-(Y_r,X_r)-(X_s,Y_d)` gives

`I(hat Y_r;Y_r|X_r)-I(hat Y_r;X_s,Y_d|X_r) = I(Y_r;hat Y_r|X_s,X_r,Y_d)`,

so the second term is the claimed `I(X_s,X_r;Y_d)-I(Y_r;hat Y_r|X_s,X_r,Y_d)`. This one-relay specialization establishes the theorem for all finite test channels. It is the NNC/no-binning proof; the preceding random-bin proof records the classical Wyner–Ziv constraints where the separate-bin decoder applies.

As a finite edge-case check, take binary inputs, `Y_d=X_s XOR X_r`, `Y_r=X_s`, independent uniform `X_s,X_r`, and `hat Y_r=Y_r`. Then `I(X_r;Y_d)=0`, but both terms of the CF/NNC minimum equal one bit: `I(X_s;Y_d,hat Y_r|X_r)=1` and `I(X_s,X_r;Y_d)-I(Y_r;hat Y_r|X_s,X_r,Y_d)=1`. The separate forward bin decoder cannot transmit a positive bin rate under this law; the nonunique NNC decoder supplies the missing case.

## Common-output two-way channel and directed information

Let `W(y|x1,x2)` be a finite DM-TWC with a common output: both nodes observe the same `Y_i` at every use. Independent uniform messages `M1,M2` are sent in opposite directions. At time `i`, `X_ji=f_ji(M_j,Y^{i-1})`, and node 1 decodes `M2` from `(M1,Y^n)` while node 2 decodes `M1` from `(M2,Y^n)`. The channel is memoryless. For causal input laws define

`p(x_j^k || y^{k-1}) := product_{i=1}^k p(x_{ji}|x_j^{i-1},y^{i-1})`,

and

`I(X_j^k -> Y^k || X_l^k) := sum_{i=1}^k I(X_j^i;Y_i|Y^{i-1},X_l^i)`.

For each `k>=1`, let `C_k` consist of the nonnegative rate pairs satisfying

`R1 <= k^{-1} I(X1^k -> Y^k || X2^k)`,

`R2 <= k^{-1} I(X2^k -> Y^k || X1^k)`

for some product causal law `p(x1^k||y^{k-1})p(x2^k||y^{k-1})`, with the outputs generated by `W^k`. Then the operational capacity region is

`C = closure(union_{k>=1} C_k)`.

The closure matches the operational definition of capacity. The v3 lecture writes the union without a closure but gives no proof that this union is closed; the arguments below establish the closure equality.

For the converse, Fano gives `nR1 <= I(M1;Y^n|M2)+n epsilon_n` and symmetrically for `R2`, with `epsilon_n->0`. Fix `i`. Given a history `y^{i-1}` and the second user's input history/current action `x_2^i`, the posterior on message pairs factors: the likelihood of `y^{i-1}` is a product of channel terms whose dependence on `M2` is only through `x_2^{i-1}`, and the additional condition `x_2^i=f_2^i(M2,y^{i-1})` restricts only `M2`. Since the prior messages are independent, `M1` and `M2` are conditionally independent under this conditioning. The current channel output depends on `M1` only through `X_{1i}` and on `M2` only through the already conditioned `X_{2i}`. Therefore

`I(M1;Y_i|Y^{i-1},M2) = I(X_{1i};Y_i|Y^{i-1},X_2^i) = I(X_1^i;Y_i|Y^{i-1},X_2^i)`.

The last equality holds because, by memorylessness, past input coordinates add no information about `Y_i` after current inputs and the output history are fixed. Summing gives

`nR1 <= I(X1^n -> Y^n || X2^n) + n epsilon_n`,

and the symmetric inequality.

The code induces a product causal law, not an ordinary posterior product given the realized output. To see it, fix an output history path `y^{n-1}`. Averaging the deterministic encoder actions over each user's independent message gives separate causal policy kernels `p(x_{ji}|x_j^{i-1},y^{i-1})`; for a fixed output path the two message-indexed action paths are independent. The actual path probability is this product, multiplied by `product_i W(y_i|x_{1i},x_{2i})`. This is precisely the causal-product law in the theorem. Consequently Fano gives `(R1-epsilon_n)^+ <= n^{-1}I(X1^n->Y^n||X2^n)` and the symmetric bound for the same induced law, with `epsilon_n->0`. Thus points approaching every achievable pair lie in `union_n C_n`; taking the achievable-rate closure proves the outer containment.

For achievability, any finite causal kernel `p(x_j^k||y^{k-1})` can be represented by a finite random deterministic causal strategy `S_j`: before transmission, independently sample an action for every possible history `(x_j^{i-1},y^{i-1})` according to its specified kernel. The strategy table is then a deterministic function of the current history. Independent `S_1,S_2` induce exactly the desired causal-product law. Regard each length-`k` pair of strategies as one input symbol of a finite memoryless superchannel whose output is `Y^k`. Across superchannel uses choose independent random codewords of strategies for each user's message. Each receiver knows its own strategy codeword and decodes the other by joint typicality. The wrong codeword is independent of its known own codeword and the actual output; ordinary finite packing gives the two rates

`R1 < k^{-1}I(S1;Y^k|S2)`, `R2 < k^{-1}I(S2;Y^k|S1)`.

For the induced causal-product law,

`I(S1;Y^k|S2)=sum_i I(S1;Y_i|Y^{i-1},S2)=sum_i I(X_1^i;Y_i|Y^{i-1},X_2^i)`.

The equality follows by the same posterior factorization: given `(Y^{i-1},X_2^i)`, the independent strategy tables remain conditionally independent, and the channel at time `i` depends only on the current actions. The right side is the defined directed information. The symmetric identity is identical. Thus every strict pair in `C_k` is achievable; closure includes its boundary and the union. This establishes the multiletter characterization. It does not assert a single-letter formula or that the `k=1` Shannon inner bound is exact.

## Exact capacity under strong interference

Let a finite DM-IC have joint memoryless kernel `W(y1,y2|x1,x2)`, independent uniform messages, separate deterministic no-feedback encoders, and receiver `j` required to recover `M_j`. Its strong-interference hypotheses are, for **every** product input law `p(x1)p(x2)`,

`I(X1;Y1|X2) <= I(X1;Y2|X2)`,

`I(X2;Y2|X1) <= I(X2;Y1|X1)`.

Under these hypotheses the average-error capacity region is the union over finite `p(q)p(x1|q)p(x2|q)` of

`R1 <= I(X1;Y1|X2,Q)`,

`R2 <= I(X2;Y2|X1,Q)`,

`R1+R2 <= min{I(X1,X2;Y1|Q), I(X1,X2;Y2|Q)}`,

and it suffices to take `|Q|<=4`. No claim is made for maximal error or for channels not satisfying both product-input hypotheses.

For achievability, generate independent user codebooks with a public deterministic time-sharing sequence for `Q`. At each receiver jointly decode the two messages by the finite MAC typicality decoder. The receiver-1 error classes (wrong user 1 only, wrong user 2 only, both wrong) have packing exponents `I(X1;Y1|X2,Q)`, `I(X2;Y1|X1,Q)`, and `I(X1,X2;Y1|Q)`. The receiver-2 exponents are the corresponding quantities with `Y2`. The first strong-interference inequality makes the stated `R1` bound sufficient for both receivers' user-1 constraints; the second makes the stated `R2` bound sufficient for both user-2 constraints. The two explicit sum constraints control the both-wrong events at both receivers. The union bound on the two receiver errors proves reliable decoding of both messages, hence in particular each receiver's intended message. Strict rates and closure give the displayed region.

For the converse, Fano and the separate independent encoders first give

`nR1 <= I(X1^n;Y1^n)+n epsilon_n <= I(X1^n;Y1^n|X2^n)+n epsilon_n`,

and symmetrically for `R2`. The second inequality follows from independence: `I(X1^n;Y1^n|X2^n)-I(X1^n;Y1^n)=I(X1^n;X2^n|Y1^n)>=0`. Memorylessness and entropy subadditivity then give

`I(X1^n;Y1^n|X2^n) <= sum_i I(X1_i;Y1_i|X2_i)`,

with the symmetric bound for sender 2.

The sum converse uses the tensorized strong-interference inequality

`I(X1^n;Y1^n|X2^n) <= I(X1^n;Y2^n|X2^n)`

for every independent block-input law `p(x1^n)p(x2^n)`. Here is a full proof. The single-letter hypothesis with `p(x2)` concentrated at any fixed `x2` implies, for every auxiliary `A` and every `p(a)p(x1|a)`,

`I(X1;Y1|X2=x2,A) <= I(X1;Y2|X2=x2,A)`,

by applying the original hypothesis separately at each `a` and averaging. For arbitrary independent vectors, define the hybrid conditioning variable

`A_i=(X2^n,Y2^{i-1},Y1_{i+1}^n)`.

Telescoping `H(Y2^n|X2^n)-H(Y1^n|X2^n)` by replacing one output coordinate at a time, and using memorylessness for the entropies conditioned on `(X1^n,X2^n)`, gives

`I(X1^n;Y2^n|X2^n)-I(X1^n;Y1^n|X2^n)`

`= sum_i [I(X1_i;Y2_i|A_i)-I(X1_i;Y1_i|A_i)]`.

Given `A_i`, `X2_i` is fixed; outputs at time `i` are conditionally independent of all other-time variables given `(X1_i,X2_i)`. Each summand is nonnegative by the conditional single-letter inequality. This proves tensorization without assuming the stronger less-noisy order. The other-user tensorization follows symmetrically.

Now Fano, tensorization and the deterministic encoders imply

`n(R1+R2) <= I(M1;Y1^n)+I(M2;Y2^n)+n epsilon_n`

`<= I(M1;Y2^n|M2)+I(M2;Y2^n)+n epsilon_n`

`= I(M1,M2;Y2^n)+n epsilon_n`

`<= sum_i I(X1_i,X2_i;Y2_i)+n epsilon_n`.

The first inequality on the second line is the tensorized strong condition and the Markov identity `I(M1;Y2^n|M2)=I(X1^n;Y2^n|X2^n)`. By symmetry the same sum rate is bounded using `Y1^n`. With `Q` uniform over `[1:n]`, independent of the messages, `(X1_Q,X2_Q)` has product law conditional on `Q`, and the three inequalities become exactly the stated single-letter bounds. Let `n` grow and take closure.

For `|Q|<=4`, each product input law contributes the vector

`(I(X1;Y1|X2), I(X2;Y2|X1), I(X1,X2;Y1), I(X1,X2;Y2)) in R^4`.

Its image is path-connected because the product of the two input simplexes is path-connected and all four coordinates vary continuously. The finite support fact reduces any time-sharing average vector to at most four image points while preserving all four region bounds.

## Exact local repairs and handoff boundaries

- The Cover–Leung v3 section supplies the statement and model only. The two-block-indexed cloud/satellite construction and its sender-feedback and backward destination packing events are supplied locally above.
- The CES v3 section gives the theorem and a short outline after the full simpler proof. The two one-source-wrong and two both-wrong common-part error classes, including the separate same/different-`U0` exponents, are supplied above.
- The DF proof is source-aligned with v3's block-Markov/backward-decoding argument; it explicitly states which message is known at each destination step and the two independent packing exponents.
- The CF proof converts v3's deterministic bins to independent random bin assignments so that the collision probability is exactly `2^{-nR_b}`. It repairs the printed `+delta` packing sign and fills its “check!” two-index counting step by the product-proposal divergence.
- The TWC proof states the causal-product law as a strategy law and proves the posterior factorization used in both directions. The capacity statement is closed as required by the operational definition.
- The strong-interference tensorization lemma is proved by hybrid outputs, not by the lecture's unstated induction. The source's simultaneous-decoding achievability pointer is expanded into its three error events at each receiver.

The current supplier boundary, as checked in r5's supplier map, is:

- `items/def-finite-probability-space-and-event.md` and `items/def-independent-random-elements.md` / `items/def-independence-of-finite-random-variables.md` are published and supply finite probability and independence definitions. `items/def-identically-distributed-and-iid-random-variables.md` and `items/cor-iid-finite-variance-weak-law.md` are published and supply the i.i.d. and bounded-indicator weak-law interfaces used for typicality.
- `items/def-qa-35-finite-probability-entropy-and-stochastic-matrices.md` is published and defines finite entropy and stochastic matrices using natural logarithms; the scaffold must explicitly convert to bits. `items/def-mutual-information-for-finite-hypothesis-testing.md` is published but is narrower than general dependent finite-variable or conditional mutual information. `items/thm-fano-packing.md` is published but does not directly supply ordinary message-decoding Fano or Shannon random-coding packing.
- None of these suppliers defines the DM-MAC/relay/TWC/DM-IC operational models, conditional-MI chain rules and Markov identities, strong typicality, covering, joint packing, random binning, causal strategies, directed information, or any of the network theorems proved here. Those definitions and proof interfaces remain local scaffold work; this file itself is a research proof note, not a production supplier.

These notes do not certify that the scaffolder's proposed items or contracts are complete. No current library item was edited.
