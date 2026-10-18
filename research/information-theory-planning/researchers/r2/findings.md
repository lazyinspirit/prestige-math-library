# r2 findings: lossless source coding, source limits, and universal compression

## Scope and source corrections

The complete MacKay book gives a useful first map of the subject, but its coding chapters do not cover the same theorem regimes. Chapter 4, “The Source Coding Theorem,” is a finite-alphabet IID typical-set theorem for fixed-error block compression. Chapter 5 is finite-alphabet symbol coding. Chapter 6 gives ideal real-interval arithmetic coding and an introductory LZ78-like parse. It does not prove a finite-register coder correct, nor does it prove a general stationary-ergodic Lempel-Ziv theorem.

The two corrections needed before using that material are:

- “Ergodic” means invariant events have probability zero or one for the shift-invariant path law. It does not mean “memoryless on sufficiently long timescales.” A stationary two-state Markov chain with transition probability 0.1 in either direction is irreducible, aperiodic, and ergodic, yet has dependence at every adjacent pair: its marginal entropy is 1 bit while its entropy rate is \(H_2(0.1)\), about 0.469 bits.
- Lossless code length, fixed-error typical-set compression, and lossy rate-distortion are different tasks. MacKay’s Chapter 4 result must not be used as if it were the finite-symbol uniquely-decodable coding theorem or the stationary-ergodic Shannon-McMillan-Breiman theorem.

## Definitions and conventions

Let \(A\) be a nonempty finite alphabet. A probability mass function \(p\) is a map \(A\to[0,1]\) with \(\sum_{a\in A}p(a)=1\). Its Shannon entropy in bits is
\[
H_2(p)=-\sum_{a:p(a)>0}p(a)\log_2 p(a),
\]
with \(0\log_2 0=0\). For a finite-valued random variable \(X\), write \(H_2(X)=H_2(P_X)\). Gray’s ergodic chapter uses natural logarithms and entropy in nats; divide by \(\ln 2\) to convert those rates to bits. The rate unit must be kept explicit.

A binary symbol code on the positive-probability support \(S=\{a\in A:p(a)>0\}\) is a map \(C:S\to\{0,1\}^+\), with nonempty finite codewords. Its extension to a finite source string is concatenation:
\(C^*(a_1\cdots a_n)=C(a_1)\cdots C(a_n)\).
The code is uniquely decodable (UD) if this extension is injective on \(S^+\). It is prefix-free if no codeword is a proper prefix of another. A prefix-free code is UD and admits left-to-right instantaneous decoding; a UD code need not be prefix-free. For codeword lengths \(\ell(a)=|C(a)|\), expected length is
\(L(C,p)=\sum_a p(a)\ell(a)\).
When an application requires codewords for zero-probability symbols in the larger declared alphabet \(A\), those symbols must also be included in a valid code allocation; they cannot always be added to a support-optimal complete prefix code without changing its positive-symbol lengths. The entropy lower bound applies to the positive support, while the usual \(H+1\) Shannon-length construction below is for that support.

For a stationary process \(X=(X_i)_{i\in\mathbb Z}\) on a finite alphabet, write
\(H_n=H_2(X_1,\ldots,X_n)\) and \(H_0=0\).
Stationarity and the entropy chain rule give \(H_{m+n}\le H_m+H_n\); the elementary subadditive-sequence argument therefore gives
\(h(X)=\lim_n H_n/n=\inf_n H_n/n\).
For the limit argument, fix \(k\), write \(n=qk+r\) with \(0\le r<k\), and use \(H_n\le qH_k+H_r\); this gives \(\limsup_n H_n/n\le H_k/k\), while \(H_n/n\ge\inf_j H_j/j\). The chain rule and stationarity also write \(H_n/n\) as the Cesàro mean of \(H(X_0\mid X_{-j+1}^{-1})\), taking the \(j=1\) context to be empty; hence \(h(X)=\lim_{j\to\infty}H(X_0\mid X_{-j}^{-1})\). For finite alphabets, reverse-martingale convergence of conditional symbol probabilities and bounded continuity of finite entropy identify this limit with \(H(X_0\mid X_{-\infty}^{-1})\).
In bits, \(0\le h(X)\le\log_2|A|\). In the stationary ergodic finite-alphabet setting, the Shannon-McMillan-Breiman theorem gives the stronger sample statement
\[
-\frac1n\log_2 P(X_1^n)\longrightarrow h(X)
\quad\text{almost surely and in }L^1.
\]
For stationary nonergodic sources the almost-sure limit is the entropy rate \(h(\psi(x))\) of the ergodic component selected by the path, not necessarily the single mean \(h(X)\).

## Kraft-McMillan, entropy lower bound, and length allocation

For a finite binary UD code on its positive support with lengths \(\ell_i\), Kraft-McMillan says
\(\sum_i2^{-\ell_i}\le1\). Here is a finite-alphabet proof route that exposes the UD premise. For \(k\) source symbols, UD makes the \(|S|^k\) concatenated bitstrings distinct. Let \(a_n\) be the number with total bit length \(n\). Then \(a_n\le2^n\), and
\[
\left(\sum_i2^{-\ell_i}\right)^k
=\sum_n a_n2^{-n}
\le k(\ell_{\max}-\ell_{\min})+1.
\]
The right side grows only linearly in \(k\), so taking \(k\)-th roots and letting \(k\to\infty\) yields the inequality. For a countable code, apply the finite result to each finite subset and then take the increasing supremum.

Conversely, any finite list of positive integer lengths with sum \(2^{-\ell_i}\le1\) can be assigned a prefix-free set. A direct canonical construction sorts lengths nondecreasingly and assigns the \(i\)-th codeword the \(\ell_i\)-bit representation of
\(c_i=2^{\ell_i}\sum_{j<i}2^{-\ell_j}\).
The Kraft sum ensures \(c_i<2^{\ell_i}\), and the sorted intervals
\([c_i2^{-\ell_i},(c_i+1)2^{-\ell_i})\) are disjoint and nonoverlapping under the binary-tree prefix order. A zero length can occur only for a singleton request under Kraft; the empty word is not a valid UD symbol code on \(A^+\), so the symbol-code theorem uses positive lengths and treats a singleton support separately.

Entropy lower bound. For \(p_i>0\), set \(K=\sum_i2^{-\ell_i}\) and \(q_i=2^{-\ell_i}/K\). Nonnegativity of finite relative entropy gives
\(0\le D_2(p\|q)=-H_2(p)+L(C,p)+\log_2K\), hence
\(L(C,p)\ge H_2(p)-\log_2K\ge H_2(p)\).
For Shannon lengths \(\ell_i=\lceil-\log_2p_i\rceil\), one has \(2^{-\ell_i}\le p_i\), so Kraft constructs a prefix code, and
\(H_2(p)\le L(C,p)<H_2(p)+1\) when the support has at least two symbols. If the support is a singleton and nonempty codewords are required, use the one-bit code 0; its length 1 is the correct operational minimum under that convention, though the entropy is 0.

The necessary inequality is not a test that a particular assignment is UD. For example, on source symbols \(a,b\), the codewords \(C(a)=0\) and \(C(b)=00\) have Kraft sum \(1/2+1/4\le1\) but are not UD because \(C^*(aa)=00=C(b)\). Prefix-free is sufficient, not necessary, for UD.

## Huffman coding

Input is a finite positive-probability support \(S\subseteq A\) with weights \(p_i>0\), and the objective is expected binary code length. If \(|S|=1\), assign codeword 0 under the nonempty-word convention. Otherwise repeatedly remove two least-weight roots \(u,v\), create a parent with weight \(p_u+p_v\), and attach \(u,v\) as its 0/1 children. Continue until one root remains; root-to-leaf words are the code.

Termination is exact: each merge reduces the number of roots by one, so there are \(|S|-1\) merges. Any deterministic tie rule is valid; ties can change tree shape and symbol assignments but not the optimum expected length. With a binary min-heap, initialization and all \(|S|-1\) extract/insert operations cost \(O(|S|\log |S|)\) comparisons and \(O(|S|)\) tree/heap records in a unit-cost comparison model; if probabilities are long exact rationals, each comparison/addition has its own bit cost and is not unit cost.

Correctness route (exchange plus induction). In an optimal full binary tree, two deepest leaves are siblings; move the two least-probable symbols to those leaves by swapping with any symbols there. Since the least probabilities receive the longest lengths, each swap does not increase weighted path length. Contract those sibling leaves to one symbol of weight \(p_u+p_v\), reducing the optimal tree problem to a smaller Huffman problem. Induction proves the merge algorithm optimal among binary prefix trees. The Kraft converse gives a prefix tree for any feasible length vector, so this is also optimal among binary UD codes.

Worked example: for probabilities \(1/2,1/4,1/8,1/8\), merge the two \(1/8\) leaves, then the two \(1/4\) roots, then the two \(1/2\) roots. The lengths are \(1,2,3,3\), giving expected length \(1.75\) bits, equal to entropy. With four equiprobable symbols any tie order yields four leaves at depth two and expected length two bits. Zero-probability symbols are excluded before the algorithm; otherwise arbitrary tie decisions on zeros can produce unbounded code lengths without improving expected length.

## AEP and stationary-source coding limits

IID finite alphabet. Let \(X_i\) be IID with law \(p\), and on its positive support let \(Y_i=-\log_2p(X_i)\). Then \(E Y_i=H_2(p)\); because the support is finite, \(Y_i\) has finite variance. Chebyshev applied to the independent sum gives
\(P(|n^{-1}\sum_iY_i-H_2(p)|\ge\epsilon)\le\operatorname{Var}(Y_1)/(n\epsilon^2)\).
Thus the weak AEP holds. This is the route in MacKay Chapter 4; finite variance is used. For a countable alphabet, finite entropy alone does not imply finite information variance, so this particular Chebyshev proof does not transfer unchanged.

Stationary ergodic finite alphabet. Gray’s corrected author edition states the SMB limit for a stationary ergodic source and finite-alphabet extensions to stationary nonergodic and AMS sources. The proof route for the stationary ergodic case is as follows. Let \(h(x)=\liminf_n[-n^{-1}\ln m(x_1^n)]\). Cylinder marginalization gives \(h(x)\ge h(Tx)\); stationarity makes the integrals equal, so \(h=h\circ T\) almost surely, and ergodicity makes it a finite constant. Fix \(\epsilon>0\) and choose \(0<\delta<1/2\) with \(\delta\ln|A|<\epsilon\) and binary entropy \(h_2(\delta)<\epsilon\). Define \(n(x)\) as the first block length at least \(M\) with sample entropy at most \(h+\epsilon\); the liminf makes this finite a.s. Set \(M\ge3/\delta\), and choose \(N\) so the event \(n(x)\ge N\) has probability at most \(\delta/6\). Define the bad length-\(N\) prefix set by absence of an acceptable block of any length \(M\le\ell<N\). Parse a finite word by testing starts \(k<L-N\): use the first good block when \(M\le n(T^k x)<N\), otherwise make a singleton gap; after every good block force one singleton separator. Treat all remaining positions at starts \(k\ge L-N\) as boundary gaps. If \(L\ge3N/\delta\), the type-1 separators, type-2 bad-test gaps, and type-3 boundary gaps each number at most \(\delta L/3\): the type-2 bound follows from Birkhoff since the bad-prefix probability is at most \(\delta/6\), and the other bounds follow from \(M\ge3/\delta\) and the boundary length \(N\). Thus there are at most \(\delta L\) gaps. The gap mask has at most \(e^{Lh_2(\delta)}\) possibilities; each gap has at most \(|A|\) symbols; and a good block of length \(\ell\) has at most \(e^{\ell(h+\epsilon)}\) possible values since each has probability at least \(e^{-\ell(h+\epsilon)}\). Because the forced separator makes the non-gap runs determine the good-block partition, the set \(G_L\) of parsed words has size at most \(e^{L(h+3\epsilon)}\). Words in \(G_L\) with sample entropy at least \(h+5\epsilon\) have total probability at most \(e^{-\epsilon L}\); Borel-Cantelli and the fact that almost every path lies in \(G_L\) eventually imply limsup sample entropy at most \(h+5\epsilon\). Let \(\epsilon\downarrow0\), then use uniform integrability of finite-alphabet sample self-information for L1 convergence and equality with the entropy rate.

Proof corrections recorded from the complete source read. Gray’s 2023 corrected chapter says the earlier proof omitted two constraints: a minimum good-block length sufficient to bound separator frequency and a one-symbol gap after each good block. The actual corrected text is internally inconsistent at several displayed boundaries. Printed p. 53 gives \(M\ge\delta/3\), but p. 57's count requires \(M\ge3/\delta\); p. 54 defines the bad-prefix set by testing lengths \(1,\ldots,N-1\), although \(n(x)\) searches only lengths at least \(M\); and p. 55 includes \(\ell=N\) in a good block although p. 56 and the bad-prefix definition require \(\ell<N\). Also, p. 54 chooses \(m(n(x)\ge N)\le\delta/2\), whereas p. 57 requires eventual frequency at most \(\delta/3\) to count type-2 gaps as \(\le\delta L/3\). The local route above uses the consistent choices \(M\ge3/\delta\), bad-prefix tests only at lengths \(M\le\ell<N\), accepts only those good lengths, tests starts \(k<L-N\), treats the remaining \(N\) positions as boundary gaps, and strengthens the tail choice to \(m(n(x)\ge N)\le\delta/6\). All are possible under the stated finite-alphabet stationary-ergodic hypotheses and make the counting and Borel-Cantelli route close. The separator and intended minimum-length constraints are the author's reported correction to the earlier editions; the displayed boundary and probability-margin fixes above are additional local repairs needed to use the 2023 text as printed.

The AEP typical set for fixed \(\epsilon>0\) is
\(T_n(\epsilon)=\{x^n:2^{-n(h+\epsilon)}\le P(x^n)\le2^{-n(h-\epsilon)}\}\).
For a stationary ergodic finite-alphabet source, \(P(T_n)\to1\), and
\((1-o(1))2^{n(h-\epsilon)}\le |T_n|\le2^{n(h+\epsilon)}\).
The upper cardinality bound follows because every typical word has probability at least \(2^{-n(h+\epsilon)}\); the lower bound follows from total typical probability and the upper per-word probability. This is a high-probability set statement, not a claim that all words have nearly equal probability.

Lossless fixed-length source coding consequence. Enumerate \(T_n\), assign each typical word a distinct fixed-length index of \(\lceil\log_2(|T_n|+1)\rceil\) bits, and reserve one index for an error/default output. The block error is \(P(X^n\notin T_n)\to0\), and rate is at most \(h+\epsilon+o(1)\). Conversely, if a fixed-length block code has \(M_n\le2^{nR}\) reconstructions and error event probability tending to zero, then for any \(\epsilon>0\) with \(R<h-\epsilon\),
\[
P(\text{correct})\le P(X^n\notin T_n)+M_n\,2^{-n(h-\epsilon)}\to0,
\]
contradicting vanishing error. Therefore its asymptotic rate cannot be below \(h\). This is a lossless fixed-length, vanishing-block-error theorem under stationary ergodicity; it is not the zero-error fixed-block or lossy rate-distortion theorem.

Nonergodic counterexample. Let the stationary law be an equal mixture of the deterministic all-zero sequence and IID fair bits. Its entropy rate is \(1/2\) bit per symbol, but the normalized sample self-information tends to 0 on the all-zero component and to 1 on the fair-coin component, each with probability \(1/2\). Thus replacing stationary ergodicity by stationarity does not give a single almost-sure AEP constant. The nonergodic Gray theorem instead identifies the random limit with the ergodic-component entropy.

## Finite-precision arithmetic coding

Ideal-real model. A shared model gives a conditional distribution for the next symbol (including a termination symbol for variable messages). Start with interval \([0,1)\); partition it into half-open subintervals in a fixed symbol order with lengths equal to the conditional probabilities; replace the interval by the observed symbol’s subinterval. After the complete message plus EOS, transmit a binary prefix whose dyadic interval is contained in the final interval. A decoder with the same model and EOS convention reconstructs the same nested subintervals. This ideal model gives a length within a constant (MacKay states 2 bits) of negative log model probability. It assumes exact real intervals and is not an executable fixed-precision algorithm.

Moffat-Neal-Witten integer model. Fix register width \(b\) and frequency precision \(f\le b-2\). Let \(L,R\) be nonnegative integers with
\(2^{b-2}<R\le2^{b-1}\), \(0\le L<2^b-2^{b-2}\), and \(L+R\le2^b\).
A model context supplies integer cumulative counts \(0\le l<h\le t\le2^f\). Each source symbol that may occur must have positive integer frequency, so its interval is nonempty. Use floor division and set \(r=\lfloor R/t\rfloor\); then \(r\ge1\) because \(t\le2^f\le2^{b-2}<R\).

Encoder update:
- \(L\gets L+rl\).
- If \(h<t\), set \(R\gets r(h-l)\).
- If \(h=t\), set \(R\gets R-rl\).

Decoder keeps \(D=V-L\), the offset of the current code register \(V\) into the current interval. Set
\(\mathrm{target}=\min(t-1,\lfloor D/r\rfloor)\).
The statistics/model layer selects the unique interval with \(l_s\le\mathrm{target}<h_s\); then update
\(D\gets D-rl_s\), and set \(R\gets r(h_s-l_s)\) unless \(h_s=t\), in which case \(R\gets R-rl_s\).
The target is clamped to \(t-1\) because the final symbol receives the unused tail created by \(rt\le R\). Exact cumulative boundaries are assigned to the following half-open symbol interval. This floor/clamp convention is deterministic and is required for encoder-decoder agreement.

State and no-underflow proof. Since \(r\ge1\) and \(h-l\ge1\), the nonfinal new range is at least one. In the final-symbol case,
\(R-rl\ge rt-rl=r(t-l)\ge1\).
For \(h<t\), the updated upper endpoint is \(L+rh\le L+rt\le L+R\); for \(h=t\), \(L+rl+(R-rl)=L+R\). Thus \(R>0\) and \(L+R\le2^b\) are preserved by coding. Renormalization repeats while \(R\le2^{b-2}\); each iteration doubles the new range, so it exits in at most \(b-1\) iterations from \(R\ge1\). The three encoder cases are: output 0 if \(L+R\le2^{b-1}\); output 1 and subtract \(2^{b-1}\) from \(L\) if \(2^{b-1}\le L\); otherwise the interval straddles the midpoint, so increment bits_outstanding, subtract \(2^{b-2}\) from \(L\), then double \(L,R\). Each branch is the same affine rescaling of the half-open interval, preserving its symbol-path identity. The decoder mirrors the branch, shifts one input bit into its window, and updates \(D,R\) in the same rescaled coordinates.

The decoder offset invariant can be checked directly. Assume \(0\le D<R\) before a symbol. Positive integer counts partition targets \(0,\ldots,t-1\) into unique half-open count intervals. If a nonfinal symbol is selected, then \(rl\le D<rh\), so \(0\le D-rl<r(h-l)=R_{new}\). If the final symbol is selected, then \(D\ge rl\) and \(D<R\), so \(0\le D-rl<R-rl=R_{new}\). Thus the offset remains in range; the floor and final-symbol clamp assign every boundary/tail value deterministically. Endpoint tests such as \(L+R\) use a widened \((b+1)\)-bit temporary or an equivalent overflow-safe comparison; stored \(L,R\) and renormalized values fit the stated registers. In the underflow branch, \(R\le2^{b-2}\), and failure of the lower/upper-half tests implies \(2^{b-2}\le L\) and \(L+R\le3\cdot2^{b-2}\), so subtract-quarter-and-double keeps both endpoints in range.

Overflow proof obligations. Products \(rl,rh\) are at most \(rt\le R\le2^{b-1}\); the updated interval endpoints stay within the invariant. The implementation must use widened or checked intermediates for endpoint sums such as \(L+R\); the paper's register proof is not a license to let an unsigned machine addition wrap. Adaptive counts must be scaled before a coder update is presented with \(t>2^f\); after an increment crosses the threshold, deterministically rescale before the next coder update. Moffat’s procedure halves each stored count but keeps every active count at least one, updates the context total, and changes the common increment to \(\lfloor(\mathrm{increment}+1)/2\rfloor\). Model updates, escape handling, symbol order, initial contexts and EOS must be identical at encoder and decoder. A zero-frequency observed symbol is invalid unless the model first sends an escape and supplies a positive-frequency continuation code.

Termination. Moffat’s fully printed simple method sets \(R=2^{b-1}\), \(L=0\), and bits_outstanding=0 at start. At finish, call bit_plus_follow on the b bits of current L; delayed opposite-polarity bits are flushed. The decoder starts with \(R=2^{b-1},D=0\), reads b bits into D, and decodes until the shared model’s EOS or known block length. Since L is the included left endpoint and \(R>0\), this b-bit L selects a value in the final half-open interval. This method permits a subsequent compressed/uncompressed stream without pushing unread bits back. Its cost may be as high as b-1 redundant bits. The paper also describes a frugal 1-3-bit finishing method, but delegates exact code to its source archive and requires the decoder to restore residual lookahead bits; this handoff uses the fully specified b-bit method.

Counter limitation. The pending opposite-bit counter bits_outstanding is separate from L,R. The article notes that a static three-symbol model and a very long run of the middle symbol can grow this counter without emitting a bit; a fixed 32-bit counter can overflow on a sufficiently long input. The coder must guard/abort, use an adequately wide counter under a stated input-length bound, or synchronize and reset both sides before overflow. Without this policy no arbitrary-input termination guarantee is made.

Quantization and complexity. The coder’s integer interval lengths are approximate: floor(R/t) discards a remainder, which is assigned to the top symbol. Under the paper's model-matched symbol probabilities, the expected per-symbol excess for top-symbol probability \(p\) and \(r=\lfloor R/t\rfloor\) is
\[
E(p,r)=p\log_2\!\frac{p(r+1)}{1+pr}+(1-p)\log_2\!\frac{r+1}{r}.
\]
For the stated register/frequency bounds, the smallest possible \(r\) is \(r^*=2^{b-f-2}\); the limiting excess as \(p\downarrow0\) is \(E^*=\log_2((r^*+1)/r^*)\). The paper's table gives limiting worst-case/average-case excess in bits per symbol for \(b-f=2,4,6,8,10\), respectively: \((1,.500),(.322,.130),(.087,.033),(.022,.008),(.006,.002)\). Its recommended ordering puts a most-probable symbol last, with a deterministic tie rule, so the remainder is assigned where it costs least. These are the paper's per-step model-matched quantization analysis, not a guarantee for a misspecified adaptive model. For fixed \(b,f\), one improved multisymbol update uses a constant number of word multiplications/divisions; the paper’s shift-add alternative uses \(O(b-f)\) additions/shifts, while the included general decoder computes a full \(f\)-bit target. A Fenwick cumulative-frequency table supports alphabet prefix-sum queries and point updates in \(O(\log q)\) word operations and \(O(q)\) words for \(q\) active symbols. If \(q,b\) or \(f\) are part of input, bit costs of arithmetic and model operations must be counted separately. The code registers alone use \(O(1)\) words; the adaptive model storage is \(O(q)\) words plus any dynamic-vocabulary structure. The paper’s reported speed/compression figures are platform-specific experiments, not asymptotic guarantees.

Worked finite-register example. Let b=8, f=6, R=101, t=5, and ordered counts (2,1,2), so cumulative boundaries are 0,2,3,5 and r=floor(101/5)=20. The first symbol gets width 40; the middle gets width 20; the last gets width 41 because \(R-rt=1\) unused unit goes to the last interval. Decoder offsets D=39, 40, 60, and 100 produce targets 1, 2, 3, and clamp(5,4)=4, respectively; these land in the first, second, third, and third symbol intervals. This example checks exact boundary tie and upper-tail behavior.

## Lempel-Ziv and universal expected-rate theorem

Operational LZ78. For a finite source word \(x^n\) over a known finite alphabet A, form an augmented alphabet \(A\cup\{\mathrm{EOS}\}\) and append one reserved EOS symbol. Start a dictionary with the empty phrase. At each step choose the shortest phrase not previously in the dictionary; equivalently, take the longest existing dictionary phrase that matches the unread prefix and add its next source symbol. Include the final phrase containing EOS. Encode each phrase as its parent dictionary index and its final symbol. If the dictionary currently has d nonempty entries, the parent index is in \(\{0,\ldots,d\}\); encode it in \(\lceil\log_2(d+1)\rceil\) bits (zero bits is permitted when d=0 because decoder state then forces index 0), followed by a fixed \(\lceil\log_2(|A|+1)\rceil\)-bit symbol identifier. Decoder and encoder update the same dictionary after each pair and stop on EOS. Thus no side-channel source length is needed. The reserved symbol ensures the final unfinished phrase is represented and is novel; without EOS, known n or an explicit terminal convention is needed to decode a finite block.

This finite code is injective and prefix-free as a set of finite messages: after each decoded pair, the decoder knows the dictionary size and hence the next pointer width; fixed symbol width determines each pair boundary, and EOS is outside A and ends decoding. Reject parent indices outside the current dictionary range and other malformed fields. A proper-prefix relation between two valid streams would force the shorter stream's terminal EOS pair to occur inside the longer valid stream, which is impossible. On a finite input, each phrase consumes at least one source symbol or the single EOS, so the algorithm terminates in at most n+1 phrases. For fixed q=|A|, a trie implementation scans each source symbol once, inserts at most n+1 nodes, and uses O(n) nodes/edge operations; dense child arrays cost O(qn) space, while maps have their own lookup cost. Encoding the parent indices has output length at most
\(\sum_{j=0}^{K-1}\lceil\log_2(j+1)\rceil+K\lceil\log_2(q+1)\rceil\),
where K is the number of phrases. A simple dynamic trie implementation therefore takes O(n+L) bit-output steps plus dictionary operations for output length L; it is not a claim about every practical LZ implementation.

Example: for source alphabet \(A=\{a,b\}\) with fixed identifiers \(a=00,b=01,\mathrm{EOS}=10\), input \(aab\) followed by EOS parses as \(a,ab,\mathrm{EOS}\). The pairs are \((0,a),(1,b),(0,\mathrm{EOS})\); their pointer widths are 0, 1, and 2 bits, so the binary output is \(00\mid101\mid0010\). The final EOS pair is what lets the decoder stop without a side-channel block length.

Universal-rate claim and proof route. The Stanford note’s fully developed theorem is: for every stationary finite-alphabet source (not assumed ergodic), expected LZ78 length per symbol tends to entropy rate:
\(\lim_n n^{-1}E[\ell_{\mathrm{LZ78}}(X^n)]=h(X)\).
For each fixed Markov order k, the phrase-count inequality compares
\(n^{-1}K_n\log_2K_n\) with the best order-k Markov negative log likelihood plus a deterministic error tending to zero uniformly over words. Its proof groups distinct parsed phrases by their length and preceding k-context. For each group with c phrases, Jensen for log gives
\(\sum_{i=1}^c\log Q(y_i|u)\le c\log(c^{-1}\sum_iQ(y_i|u))\le-c\log c\),
because the phrases are distinct and the conditional probabilities of distinct continuations sum to at most one. Summing yields the finite-state Markov comparison.

The missing exercise details close as follows. The empirical order-k conditional likelihood is minimized independently at each context by its empirical next-symbol frequencies; the minimized cross entropy is \(H_k(x^n)\). The phrase count \(K\) satisfies \(K/n\to0\): for \(q\ge2\), at most \(\sum_{j<m}q^j\) distinct phrases have length below \(m\); for large \(K\), choosing \(m=\lfloor\log_q(K/2)\rfloor\) leaves at least \(K/2\) phrases of length at least \(m\), so \(K\log K=O(n)\) and \(K/n\to0\). For \(q=1\), all but possibly a final truncated phrase have successive lengths \(1,2,\ldots\), so \(K=O(\sqrt n)\). For the stationary-source expectation bound, use the actual preceding \(k\) source symbols as the initial context, so all context/symbol windows have their stationary law. The empirical joint law of (phrase length, preceding \(k\)-context) has mean phrase length \(\mu=n/K\). For a nonnegative integer \(L\) with mean \(\mu\), the geometric law maximizes entropy, giving \(H(L)\le(\mu+1)\log_2(\mu+1)-\mu\log_2\mu\le\log_2(e(1+\mu))\). Thus, with \(x=K/n\to0\),
\(K H(L,U^k)/n\le x\log_2(e(1+1/x))+xk\log_2q\to0\) for fixed \(k\). This makes the phrase-count approximation error vanish. Stationarity plus concavity of finite conditional entropy gives \(E H_k(X^n)\le H(X_0|X_{-k}^{-1})\): the empirical block law is an average of shifted indicator laws, whose expectation is the stationary block law. Let \(k\) increase; conditional probabilities given the growing finite past converge by reverse martingale convergence, and bounded finite-alphabet entropy then gives \(H(X_0|X_{-k}^{-1})\downarrow h(X)\). Finally, any lossless UD binary code has expected length at least \(H(X^n)\), so the liminf rate is at least \(h\). For the EOS implementation, the final phrase can differ from the no-EOS parse by at most one phrase and a parent index of at most \(O(\log n)\) bits. With \(K\) phrases the explicit code uses at most \(\sum_{j=0}^{K-1}\lceil\log_2(j+1)\rceil+K\lceil\log_2(q+1)\rceil\le K\log_2K+O(K)\) bits. Since \(K/n\to0\), fixed-width symbol fields contribute only \(o(n)\), and the operational implementation has the same expected asymptotic rate.

## Individual-sequence LZ78 and stationary-ergodic LZ77 match lengths

The full Ziv–Lempel 1978 article supplies a second LZ78 theorem, separate from the expected-rate theorem above. It defines a finite-state encoder \(E=(S,A,B,g,f)\), with finite state set \(S\), input alphabet \(A\), binary output, transition/output maps, and prescribed initial state. An information-lossless (IL) encoder requires that the final state and emitted string uniquely determine the consumed input block; ILF additionally fixes a block length so the initial state and output determine each input symbol. For \(q=|A|\ge2\), define the normalized block compression ratio as output bits divided by \(n\log_2q\), minimize over IL encoders with at most \(s\) states, take the limsup in \(n\), and then the limit as \(s\to\infty\). This is the finite-state compressibility of the individual infinite sequence.

For the incremental Lempel–Ziv parse, let \(c(x_1^n)\) be the largest number of distinct phrases whose concatenation is \(x_1^n\). Ziv–Lempel Theorem 1 gives a finite-state IL converse: every \(s\)-state encoder has normalized block rate bounded below by
\[
\frac{c(x_1^n)+s^2}{n\log_2q}\log_2\!\left(\frac{c(x_1^n)+s^2}{4s^2}\right)+\frac{2s^2}{n\log_2q}.
\]
Its proof counts at most \(s^2\) state-pair labels for each fixed output word and combines this with the distinct phrase parse. Theorem 2 constructs a finite-state ILF block-to-variable encoder. For phrase \(j\), encode its parent dictionary index \(\pi(j)<j\) and final input symbol as the integer \(\pi(j)q+I_A(a_j)\) in \(\lceil\log_2(jq)\rceil\) bits; the decoder reconstructs the same dictionary, resets at the known block boundary, and truncates the final phrase at block length \(n\). For \(p\) phrases, the total output length is less than \((p+1)(\log_2(p+1)+\log_2(2q))\). These lower and upper bounds yield the paper’s Theorem 3: for every individual sequence, Lempel–Ziv compressibility equals its normalized asymptotic empirical block entropy. Theorem 4 then states that for a stationary ergodic source over \(q\) symbols this normalized limit is \(h/\log_2q\) almost surely, where \(h\) is the entropy rate in bits per symbol; for a stationary source its expectation equals the normalized entropy rate. The source is the complete seven-page article; its later pages are scans, so formulas were checked visually rather than trusted from OCR. This theorem concerns the paper’s finite-state IL/ILF model. It does not establish that any arbitrary modern LZ78 bitstream framing has the same finite-block cost or decoder contract.

For the sliding-window result, use the exact recurrence convention in Kontoyiannis 1998. Let \(X=(X_i)_{i\in\mathbb Z}\) have a finite alphabet and a stationary ergodic law \(P\). For a sample \(x\), let \(P(x_1^n)\) denote the cylinder probability, and define the backward recurrence distance
\[
R_n(x)=\inf\{k\ge1:x_{-k+1}^{-k+n}=x_1^n\}.
\]
The \(n\)-word at a candidate start can overlap the current word when \(k<n\). With all logs base 2, the complete paper’s Theorem 1 says that every nonnegative sequence \(c_n\) satisfying \(\sum_n n2^{-c_n}<\infty\) obeys, eventually almost surely,
\[
\log_2[R_nP(X_1^n)]\le c_n,
\qquad
\log_2[R_nP(X_1^n\mid X_{-\infty}^{0})]\ge-c_n.
\]
For \(c_n=\epsilon n\), the first inequality bounds \(\log R_n\) above by the unconditional self-information plus \(\epsilon n\), and the second bounds it below by the infinite-past conditional self-information minus \(\epsilon n\). Unconditional and conditional finite-alphabet SMB limits both equal \(h\) under stationarity and ergodicity. Taking a countable sequence of positive rational \(\epsilon\) decreasing to zero gives \(n^{-1}\log_2R_n\to h\) almost surely. The article’s proof of Theorem 1(i) uses Kac’s return-time expectation and Markov’s inequality, followed by Borel–Cantelli. Part (ii) conditions on the infinite past, sums conditional word probabilities weighted by reciprocal first-return distances, bounds the sum by a harmonic series over at most one word per return distance, and applies Borel–Cantelli. The theorem’s recurrence bounds themselves need stationarity; ergodicity enters through the constant SMB limit.

The same paper defines the sliding-window match length
\[
L_m(x)=\inf\{n\ge1:x_1^n\ne x_{-j+1}^{-j+n}\text{ for every }j=1,\ldots,m\}.
\]
Thus the candidate match begins at one of the \(m\) previous positions and, when \(j<n\), may overlap the phrase being matched. The exact event identity is \(\{R_n>m\}=\{L_m\le n\}\). Inverting \(n^{-1}\log_2R_n\to h\) gives \(\log_2m/L_m\to h\) almost surely, with \(L_m=+\infty\) allowed and \(\log m/(+\infty)=0\). For \(h>0\), this is equivalently \(L_m/\log_2m\to1/h\): for each \(0<\epsilon<1/h\), take \(n_-=\lfloor(1/h-\epsilon)\log_2m\rfloor\) and \(n_+=\lceil(1/h+\epsilon)\log_2m\rceil\). Then \(R_{n_-}\le m<R_{n_+}\) eventually, so \(n_-<L_m\le n_+\). For \(h=0\), the reciprocal statement is not defined; instead, for any \(\epsilon>0\) take \(n_m=\lfloor\log_2m/(2\epsilon)\rfloor\). The recurrence limit gives \(R_{n_m}\le2^{\epsilon n_m}\le\sqrt m\le m\) eventually, hence \(L_m>n_m\), so \(\limsup\log_2m/L_m\le2\epsilon\), and then the limit is 0. For the deterministic all-zero stationary source, h=0 and L_m=+∞ for every m, so the positive-entropy reciprocal limit would be false as written. This recurrence/match-length theorem does not by itself specify LZ77 pointer/length bit fields, EOF framing, or a finite-window implementation’s output overhead; those remain separate algorithm claims.

The Kontoyiannis proof contains one harmless overstatement in its lower-bound counting step: it says that for every \(j\) exactly one candidate word has first-return distance \(j\), while at most one is needed and is always true. Replacing “exactly one” by “at most one” preserves the harmonic upper bound and the proof. The complete 16-page author-hosted manuscript was visually inspected because its embedded font map makes some extracted formulas unreliable.

## MDL and Bayesian inference connection

For a discrete model H with proper model probability P(H), and a proper data law P(D|H), ideal codelengths are \(L(H)=-\log_2P(H)\) and \(L(D|H)=-\log_2P(D|H)\), up to the constant-size overhead of the chosen prefix/arithmetic coder. The ideal unrounded two-part criterion \(-\log_2P(H)-\log_2P(D|H)\) is MAP model selection; integer-length rounding can alter ties or decisions by bounded overhead. Bayesian model comparison instead uses \(-\log_2P(D)\), where \(P(D)=\sum_HP(H)P(D|H)\), so it averages models and is not generally identical to minimum two-part length. With parameters, evidence integrates \(P(D|w,H)P(w|H)\); a code for real-valued parameters also needs an explicit quantization/precision convention or a density-volume term. MacKay’s Chapter 28 gives these distinctions, describes on-line predictive codelength decomposition, and shows how a bits-back construction can reclaim part of a posterior parameter-message cost. These are modeling connections, not a source-coding proof that arbitrary likelihood densities define finite bit strings without a precision contract.

## Current implementation boundary

The source-supported theory ready for a new category includes finite-symbol UD/prefix coding, finite-alphabet entropy/Shannon/Huffman results, the IID fixed-error typical-set theorem, finite-alphabet stationary-ergodic SMB/AEP and its fixed-length vanishing-error consequence, the explicit Moffat finite-register coder under its counter guard, expected-rate LZ78 universality for stationary finite-alphabet sources, individual-sequence LZ78 compressibility relative to finite-state IL encoders, and the stationary-ergodic LZ77 sliding-window match-length limit under the overlapping-reference convention above.

The following remain outside verified r2 scope: countable-alphabet entropy/SMB hypotheses; bit-rate optimality and overhead for a fully specified LZ77 pointer/length/EOF implementation; a source-code theorem for nonergodic fixed-length vanishing-error rates; adaptive arithmetic-model optimality; arbitrary-integer-width arithmetic-coder overflow guarantees without a counter policy; and exact MDL coding for continuous parameters. Each added claim still needs its own statement, proof, and algorithm contract.

