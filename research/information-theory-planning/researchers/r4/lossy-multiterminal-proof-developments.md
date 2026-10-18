# Finite-memoryless lossy multiterminal proof developments

This note supplies finite-alphabet proof detail for the Wyner–Ziv decoder-side-information formula and the finite-source Berger–Tung inner bound. The statements below are fixed-length, asymptotic, expected-average-distortion statements. Logarithms and rates are in bits. The proofs use finite-alphabet type estimates and random codebooks/bins; they do not establish a general multiterminal converse. All distortions below are finite and nonnegative, hence bounded on the stated finite alphabets.

## Model and elementary typical-sequence estimates

Let \((X_1,\ldots,X_k)\) be a finite-alphabet memoryless source with one-letter law \(p(x_1,\ldots,x_k)\). A separated \(k\)-encoder lossy code of blocklength \(n\) consists of maps \(f_i:\mathcal X_i^n\to[M_i]\), one for each encoder, and a joint decoder \(g:[M_1]\times\cdots\times[M_k]\to\prod_i\widehat{\mathcal X}_i^n\). Encoder \(i\) sees only \(X_i^n\); the decoder sees all indices. For bounded single-letter distortions \(d_i:\mathcal X_i\times\widehat{\mathcal X}_i\to[0,d_{i,\max}]\), use

\[
\bar d_i=\frac1n\sum_{t=1}^n\mathbb E d_i(X_{i,t},\widehat X_{i,t}),
\qquad R_i^{(n)}=\frac1n\log_2 M_i.
\]

A tuple \((R_1,\ldots,R_k,D_1,\ldots,D_k)\) is achievable if for every \(\epsilon>0\), for all sufficiently large \(n\) there is a code with \(R_i^{(n)}\le R_i+\epsilon\) and \(\bar d_i\le D_i+\epsilon\). The rate-distortion region is the closure of achievable rate vectors for the requested distortion vector. The same definitions with one source \(X\), side information \(Y\), one message \(W=f(X^n)\), and decoder \(\widehat X^n=g(W,Y^n)\) give the Wyner–Ziv model. In that model the encoder does not see \(Y^n\), and the distortion is a function \(d(x,\hat x)\) independent of \(y\).

Use strong typical sets on the positive-probability support of each finite law. For each fixed finite alphabet and target law, tolerances can be nested so that the following estimates hold for all sufficiently large \(n\); write \(\alpha(\epsilon)\downarrow0\) for constants tending to zero with the typicality tolerance.

1. If \(x^n\) is sufficiently typical for \(P_X\), its conditional type class satisfies

   \[
   2^{n(H(U\mid X)-\alpha)}\le |T_\epsilon(U\mid x^n)|\le 2^{n(H(U\mid X)+\alpha)}.
   \]

   Every \(u^n\in T_\epsilon(U\mid x^n)\) has \(P_U^n(u^n)\) between \(2^{-n(H(U)+\alpha)}\) and \(2^{-n(H(U)-\alpha)}\). Thus

   \[
   2^{-n(I(X;U)+2\alpha)}\le P_U^n\{U^n\in T_\epsilon(U\mid x^n)\}\le 2^{-n(I(X;U)-2\alpha)}.
   \]

   These inequalities follow by counting conditional types and using \(P_U^n(u^n)=2^{-n(H(U)+o_\epsilon(1))}\) on each conditional typical set; the polynomial number of types is absorbed into \(2^{n\alpha}\).

2. If \(A^n\) and \(B^n\) are independent with laws \(P_A^n\) and \(P_B^n\), then

   \[
   P\{(A^n,B^n)\in T_\epsilon(P_{AB})\}\le 2^{-n(I(A;B)-\alpha)}.
   \]

   On the joint typical set the likelihood ratio \(P_{AB}^n/P_A^nP_B^n\) is at least \(2^{n(I(A;B)-\alpha)}\). Integrating its reciprocal under \(P_{AB}^n\) proves the bound. The same argument conditional on a fixed typical \(b^n\) gives \(P_A^n\{(A^n,b^n)\in T_\epsilon\}\le2^{-n(I(A;B)-\alpha)}\).

3. If \(X-Y-Z\) is a finite-alphabet Markov chain, \((x^n,y^n)\) is sufficiently typical, and a conditional law \(Q_n(z^n\mid y^n)\) has probability tending to one on \(T_\epsilon(Z\mid y^n)\) and, on that set,

   \[
   2^{-n(H(Z\mid Y)+\alpha)}\le Q_n(z^n\mid y^n)\le 2^{-n(H(Z\mid Y)-\alpha)},
   \]

   then \(P_{Q_n}\{(x^n,y^n,Z^n)\notin T_{\epsilon'}(P_{XYZ})\}\to0\) whenever \(\epsilon\) and \(\alpha\) are chosen sufficiently small relative to \(\epsilon'\). To see this directly, restrict to \(z^n\in T_\epsilon(Z\mid y^n)\), whose complement has vanishing probability. For any conditional type \(V(z\mid x,y)\) that induces a triple type outside \(T_{\epsilon'}(P_{XYZ})\), compactness of the finite-dimensional type simplex gives a constant \(c>0\) such that \(H_V(Z\mid X,Y)\le H_P(Z\mid Y)-c\), provided the \((X,Y)\) and \((Y,Z)\) marginals are sufficiently close to their target marginals. Otherwise a convergent sequence of bad types would limit to a non-target coupling with those marginals and \(I(X;Z\mid Y)=0\), contradicting the Markov factorization, whose unique such coupling is \(P_{XY}P_{Z\mid Y}\). There are at most \((n+1)^{|\mathcal X||\mathcal Y||\mathcal Z|}\) conditional types, and each type class has at most \(2^{nH_V(Z\mid X,Y)}\) sequences. Multiplying by the point-mass bound \(2^{-n(H_P(Z\mid Y)-\alpha)}\) makes the total bad-type probability at most a polynomial in \(n\) times \(2^{-n(c-\alpha)}\), which tends to zero when \(\alpha<c\). This proves the finite Markov typicality assertion without assuming the selected sequence is an exact product-kernel draw.

The random covering construction has a useful exact selection formula. Fix typical \(x^n\), put \(A=T_\epsilon(U\mid x^n)\), \(p=P_U^n(A)\), generate \(L\) independent \(P_U^n\) codewords, and let \(J\) be the first index with \(U^n(J)\in A\). Then

\[
P(J\text{ does not exist}\mid x^n)=(1-p)^L\le e^{-Lp}.
\]

Conditional on success, \(U^n(J)\) has law \(P_U^n(\cdot\mid A)\): for \(u^n\in A\), summing \(P(U^n(j)=u^n,J=j)=(1-p)^{j-1}P_U^n(u^n)\) over \(j\) and normalizing by \(1-(1-p)^L\) gives \(P_U^n(u^n)/p\). By the first typical estimate, each such point mass is between \(2^{-n(H(U\mid X)+3\alpha)}\) and \(2^{-n(H(U\mid X)-3\alpha)}\). The selected sequence is therefore conditionally typical with the point-mass bounds required by the Markov lemma.

For use in joint decoding, let \(J\) be the first covering index above, and count zero candidates on covering failure. Conditional on fixed typical \(x^n\), for any set \(B\subseteq\mathcal U^n\), the expected number of nonselected codewords in \(B\) on covering success obeys

\[
\mathbb E\left[\#\{\ell\ne J:U^n(\ell)\in B\}\mid x^n\right]
\le \left(L+\frac1p\right)P_U^n(B).
\tag{1}
\]

Indeed, indices after \(J\) are independent of the event defining \(J\), so their total contribution is at most \(LP_U^n(B)\). For an index \(j<J\), its contribution is at most

\[
P_U^n(B\cap A^c)(1-p)^{j-1}.
\]

Summing the geometric series over \(j\) is at most \(P_U^n(B)/p\). On typical \(x^n\), \(p\ge2^{-n(I(X;U)+2\alpha)}\), so if \(L=2^{n\widetilde R}\) and \(\widetilde R>I(X;U)+3\alpha\), the factor in parentheses in (1) is at most \(2^{n(\widetilde R+\alpha)}\). This bound includes codewords before the selected index, which are conditionally truncated by the failed-covering event.

## Wyner–Ziv region

Let \((X,Y)\sim P_{XY}\) be finite, let \(d:\mathcal X\times\widehat{\mathcal X}\to[0,d_{\max}]\), and use i.i.d. repetitions. The encoder sees only \(X^n\); the decoder sees \(W=f(X^n)\) and \(Y^n\). Extend \(P_{Y\mid X}(\cdot\mid x)\) arbitrarily at symbols with \(P_X(x)=0\); such symbols have zero mass in every posterior used below. Define

\[
R_{WZ}(D)=\min_{P_{U\mid X},\;g:\mathcal Y\times\mathcal U\to\widehat{\mathcal X}:\;\mathbb E d(X,g(Y,U))\le D} I(X;U\mid Y),
\qquad U-X-Y.
\tag{2}
\]

The minimum over an empty feasible set is defined as \(+\infty\). The minimum is attained whenever the constraint is feasible.

Because \(U-X-Y\), the chain rule gives \(I(X;U\mid Y)=I(X;U)-I(Y;U)\). The encoder side information is absent from this model. In particular, (2) is not the conditional RDF with \(Y\) available to both terminals.

**Auxiliary cardinality and attainment.** Write \(m=|\mathcal X|\). For a posterior \(q\in\Delta(\mathcal X)\), let

\[
h(q)=H_q(X\mid Y),\qquad
a(q)=\min_{g:\mathcal Y\to\widehat{\mathcal X}}\sum_{x,y}q(x)P(y\mid x)d(x,g(y)).
\]

Both functions are continuous: conditional entropy is continuous on the finite simplex, and \(a(q)\) is the minimum of finitely many linear functions. Replacing each decoder \(g(\cdot,u)\) by a posterior-wise minimizer does not change \(I(X;U\mid Y)\) and cannot increase distortion. If \(q_u=P_{X\mid U=u}\) and \(\lambda_u=P_U(u)\), then \(\sum_u\lambda_uq_u=P_X\), distortion is \(\sum_u\lambda_u a(q_u)\), and

\[
I(X;U\mid Y)=H(X\mid Y)-\sum_u\lambda_u h(q_u).
\]

Thus it suffices to preserve convex combinations of the points

\[
s(q)=(q(1),\ldots,q(m-1),h(q),a(q))\in\mathbb R^{m+1}.
\]

Here is a local path-connected support reduction proving \(|\mathcal U|\le m+1\), with no unproved cardinality shortcut. The simplex is path-connected and \(s\) is continuous, so its image \(S\subset\mathbb R^{m+1}\) is path-connected. Any point in \(\operatorname{conv}S\) is a finite convex combination; if it uses more than \(d+1\) points in \(\mathbb R^d\), their affine dependence gives coefficients \(c_i\), not all zero, with \(\sum c_i=0\) and \(\sum c_is_i=0\). Moving the mixture weights along \(c_i\) until the first weight reaches zero reduces support; repetition gives at most \(d+1=m+2\) points. If this representation has a zero weight or affine dependence, the same elimination already reduces it to at most \(d\); otherwise it has \(d+1\) affinely independent points with positive weights. Translate the represented point to zero and call the points \(v_0,\ldots,v_d\), where \(d=m+1\). Then \(v_1,\ldots,v_d\) are linearly independent and \(v_0\) lies in the interior of the simplicial cone \(K=\{-\sum_{i=1}^d a_iv_i:a_i\ge0\}\). Also \(v_1\notin K\), since otherwise the \(v_i\) would be linearly dependent. Move \(v_0\) along a continuous path in \(S\) to \(v_1\) and take the first point \(w\) on the boundary of \(K\). There are coefficients \(a_i\ge0\), at least one zero, with \(w+\sum_i a_iv_i=0\). Normalizing these coefficients gives a convex representation of zero using \(w\) and at most \(d-1\) of the old points, hence at most \(d=m+1\) points. Finally, any retained mixture \((\lambda_u,q_u)\) defines a valid test channel by \(P(u\mid x)=\lambda_uq_u(x)/P_X(x)\) on the positive support of \(P_X\); for zero-mass source symbols choose the conditional kernel arbitrarily. The mixture identity forces every retained posterior to vanish on those symbols. This proves the bound.

The feasible set with at most \(m+1\) auxiliaries is compact: it is a finite union over decoder maps of closed subsets of a product of simplices. Distortion and mutual information are continuous. Therefore the minimum in (2) is attained whenever the constraint is feasible. This argument also supplies endpoint continuity of the value function: for \(D_n\downarrow D\), take convergent subsequences of optimal finite-dimensional kernels; the limit is feasible at \(D\), while monotonicity gives the reverse inequality. Thus no unattained-infimum premise is hidden in the theorem.

**Achievability.** Fix a finite \(P_{U\mid X}\), a decoder \(g\), and a target distortion above \(\mathbb E d(X,g(Y,U))\) by a small slack. Fix nested typicality tolerances. Generate

\[
L=\left\lceil2^{n(I(X;U)+\eta)}\right\rceil
\]

independent codewords \(U^n(\ell)\sim P_U^n\), and independently assign each index uniformly to one of

\[
B=\left\lceil2^{n(I(X;U)-I(Y;U)+4\eta)}\right\rceil
\]

bins. The encoder picks the first \(\ell\) with \((X^n,U^n(\ell))\) typical and sends its bin; if none exists, it sends bin 1. For a typical \(x^n\), the covering probability is at least \(2^{-n(I(X;U)+2\alpha)}\), so the covering failure probability is at most \(\exp[-2^{n(\eta-2\alpha)}]\). Atypical \(X^n\) has probability tending to zero.

The decoder finds the unique codeword in the received bin jointly typical with \(Y^n\), and applies \(g\) symbolwise. By the selected-word point-mass bound and the Markov lemma for \(U-X-Y\), the selected \((X^n,Y^n,U^n)\) is jointly typical with probability tending to one. Since \(d\) is bounded and the reconstruction is a deterministic symbolwise function, the empirical distortion on this event differs from its expectation by a quantity tending to zero.

For packing, if the true index is \(\ell\), a decoding competitor \(\ell'\ne\ell\) must satisfy both \((X^n,U^n(\ell))\) typical and \((Y^n,U^n(\ell'))\) typical, and the two indices must share a bin. Bin collision has probability \(1/B\), independent of the source and codewords. For typical \((x^n,y^n)\), the two codewords are independent and the conditional typicality bounds above give

\[
P\{(x^n,U^n(\ell))\text{ typical},(y^n,U^n(\ell'))\text{ typical}\}
\le 2^{-n(I(X;U)+I(Y;U)-2\alpha)}.
\]

Union over at most \(L^2\) ordered pairs gives

\[
P(\text{packing error})\le o(1)+\frac{L^2}{B}2^{-n(I(X;U)+I(Y;U)-2\alpha)}.
\]

With \(\widetilde R=n^{-1}\log L\) and \(R_B=n^{-1}\log B\), the exponent is \(2\widetilde R-R_B-I(X;U)-I(Y;U)+2\alpha\). The displayed choices give an exponent at most \(-2\eta+2\alpha+o(1)<0\) when \(\alpha<\eta/2\). Letting \(\eta\downarrow0\) gives the WZ bin rate \(I(X;U)-I(Y;U)\). The expected distortion is at most the typical-event distortion plus \(d_{\max}\) times the total error probability. Averaging over codebooks and bins therefore gives one deterministic code with the asserted rate and distortion. Letting the slack tend to zero by a diagonal sequence proves achievability of the closure of (2).

**Converse.** For any block code let \(W=f(X^n)\) and \(\widehat X_i=g_i(W,Y^n)\). For each coordinate put

\[
U_i=(W,Y^{i-1},Y_{i+1}^n,X^{i-1}).
\]

The memoryless pair law implies \(U_i-X_i-Y_i\): conditional on \(X_i\), the random variable \(Y_i\) is independent of all other source pairs and of \(W=f(X^n)\). Also \(\widehat X_i\) is a deterministic function of \((U_i,Y_i)\). Since \(W\) has at most \(2^{nR}\) values,

\[
nR\ge H(W)\ge H(W\mid Y^n)\ge I(X^n;W\mid Y^n).
\]

The source pairs are i.i.d., so the chain rule gives the exact identity

\[
I(X^n;W\mid Y^n)=\sum_{i=1}^n\left[H(X_i\mid Y_i)-H(X_i\mid W,Y^n,X^{i-1})\right]
=\sum_{i=1}^n I(X_i;U_i\mid Y_i).
\]

Let \(J\) be uniform on \([n]\), independent of the source, and set \((X,Y,U,\widehat X)=(X_J,Y_J,(U_J,J),\widehat X_J)\). Then \((X,Y)\sim P_{XY}\), \(U-X-Y\), the decoder is a function of \((Y,U)\), and

\[
I(X;U\mid Y)=\frac1n\sum_iI(X_i;U_i\mid Y_i),\qquad
\mathbb E d(X,\widehat X)=\frac1n\sum_i\mathbb E d(X_i,\widehat X_i).
\]

Thus any block code induces a feasible single-letter WZ auxiliary at no greater rate. If the operational distortion constraint holds only in the limsup, use the compact \(|\mathcal U|\le m+1\) reduction and a convergent subsequence to pass to the limit. This proves the converse without Fano's inequality; finite distortion enters the achievability/endpoint passage, not the algebraic converse.

## Decoder-only side information versus conditional rate-distortion

When both terminals know \(Y\), the conditional RDF is

\[
R_{X\mid Y}(D)=\min_{P_{\widehat X\mid X,Y}:\;\mathbb E d(X,\widehat X)\le D}I(X;\widehat X\mid Y).
\]

For finite alphabets and finite distortion, the conditional channel set is a compact product of simplices, the distortion constraint is closed, and finite-alphabet conditional mutual information is continuous. Thus the conditional-RDF minimum is attained whenever its constraint is feasible.

For every WZ-feasible \(U,g\), the chain rule and \(\widehat X=g(Y,U)\) give

\[
I(X;U\mid Y)=I(X;\widehat X\mid Y)+I(X;U\mid\widehat X,Y)\ge R_{X\mid Y}(D).
\tag{3}
\]

The gap is meaningful because the conditional-RDF encoder sees \(Y\), whereas the WZ encoder does not.

A fully stated sufficient no-rate-loss condition at distortion \(D\) is: a conditional-RDF optimizer \(P^*_{\widehat X\mid X,Y}\) exists, and there are a finite \(U\), a kernel \(P_{U\mid X}\), and a deterministic \(g\) such that

\[
P_{X,Y,U,\widehat X}(x,y,u,\hat x)
=P_{XY}(x,y)P_{U\mid X}(u\mid x)\mathbf1\{\hat x=g(y,u)\},
\quad P_{X,Y,\widehat X}=P^*_{X,Y,\widehat X},
\quad I(X;U\mid\widehat X,Y)=0.
\tag{4}
\]

The first factorization is the exact encoder restriction \(U-X-Y\); it is not the generally false chain \(U-X-(Y,\widehat X)\), because \(\widehat X\) depends on \(U\). Under (4), the WZ-feasible auxiliary has distortion at most \(D\) and

\[
I(X;U\mid Y)=I(X;\widehat X\mid Y)+I(X;U\mid\widehat X,Y)=R_{X\mid Y}(D).
\]

Together with (3), this proves \(R_{WZ}(D)=R_{X\mid Y}(D)\). This is a sufficient condition; it is not asserted to be necessary.

**Finite example.** Let \(X\sim\mathrm{Bernoulli}(1/2)\), let \(Y\) be independent of \(X\), use Hamming distortion, and take \(0\le D\le1/2\). For each fixed \(y\), if \(D_y=P\{X\ne\widehat X\mid Y=y\}\), then

\[
I(X;\widehat X\mid Y=y)=1-H(X\mid\widehat X,Y=y)
\ge1-H(X\oplus\widehat X\mid Y=y)\ge1-h_2(D_y).
\]

Average over \(Y\) and use concavity of \(h_2\): every both-terminal test channel with average distortion at most \(D\) has \(I(X;\widehat X\mid Y)\ge1-h_2(D)\). The BSC test channel \(\widehat X=X\oplus N\), \(N\sim\mathrm{Bernoulli}(D)\) independent, attains this value, so \(R_{X\mid Y}(D)=1-h_2(D)\). It is also WZ-feasible with \(U=\widehat X\), decoder \(g(y,u)=u\), and \(I(X;U\mid\widehat X,Y)=0\). Thus \(R_{WZ}(D)=R_{X\mid Y}(D)=1-h_2(D)\). This equality here follows from the independence and the explicit test channel; it does not identify decoder-only side information with conditional RDF in general.

**Gaussian single-letter example, with its continuous-alphabet scope stated.** Let \(X\sim N(0,\sigma_X^2)\), \(Y=X+N\), and \(N\sim N(0,\sigma_N^2)\) independent of \(X\); let distortion be squared error and side information be decoder-only. Put \(v=\operatorname{Var}(X\mid Y)=\sigma_X^2\sigma_N^2/(\sigma_X^2+\sigma_N^2)\). The both-terminal conditional RDF is \(\frac12\log_2^+(v/D)\): condition on \(Y\), apply \(h(X\mid Y)=\frac12\log_2(2\pi e v)\) and \(h(X\mid\widehat X,Y)\le\frac12\log_2(2\pi eD)\) for the converse. For achievability when \(0<D<v\), conditionally on \(Y\), write \(X=m(Y)+V+Z_0\) with independent \(V\sim N(0,v-D)\), \(Z_0\sim N(0,D)\), and set \(\widehat X=m(Y)+V\). Equivalently, \(\widehat X\mid X,Y\) is Gaussian with mean \(m(Y)+\frac{v-D}{v}(X-m(Y))\) and variance \(D(v-D)/v\). This has MSE \(D\) and mutual information \(\frac12\log_2(v/D)\); for \(D\ge v\), use \(\widehat X=m(Y)\). For the decoder-only single-letter auxiliary, take \(U=X+Z\), with independent \(Z\sim N(0,\tau^2)\), \(\tau^2=vD/(v-D)\), and reconstruct \(\widehat X=\mathbb E[X\mid Y,U]\). Then \(\operatorname{Var}(X\mid Y,U)=D\), \(I(X;U\mid Y)=\frac12\log_2(v/D)\), and, given \(Y\), \(\widehat X\) is an invertible affine function of \(U\), so \(I(X;U\mid\widehat X,Y)=0\); also \(I(X;\widehat X\mid Y)=I(X;U\mid Y)\), so this is the conditional-RDF optimizer. For \(D\ge v\), take constant \(U\) and \(\widehat X=\mathbb E[X\mid Y]\). At \(D=0\), the conditional RDF is \(+\infty\); for \(D<0\) the constraint is infeasible. Thus the Gaussian auxiliary satisfies the single-letter no-rate-loss condition wherever the rate is finite. To conclude an operational continuous-alphabet WZ theorem one also needs the corresponding continuous-source coding theorem; that theorem is not inferred from the finite proof above.

## Berger–Tung inner bound for k finite memoryless sources

Let \(X^k=(X_1,\ldots,X_k)\) be a finite-alphabet memoryless source, with separate encoder \(i\) observing \(X_i^n\), one joint decoder, finite reproduction alphabets, and bounded per-letter distortions \(d_i(X_i,\widehat X_i)\). Choose finite auxiliaries and the product test-channel factorization

\[
P_Q(q)P_{X^k}(x^k)\prod_{i=1}^kP_{U_i\mid X_i,Q}(u_i\mid x_i,q),
\qquad \widehat X_i=g_i(U_1,\ldots,U_k,Q),
\tag{5}
\]

where \(Q\) is finite and independent of \(X^k\). Conditional on \(Q\), (5) gives \(U_i-X_i-(X_{-i},U_{-i})\) for each \(i\), and the auxiliaries are conditionally independent given \((X^k,Q)\). If \(\mathbb E d_i(X_i,\widehat X_i)\le D_i\), the Berger–Tung inner region contains every rate vector satisfying, for every nonempty \(S\subseteq[k]\),

\[
\sum_{i\in S}R_i\ge I(X_S;U_S\mid U_{S^c},Q).
\tag{6}
\]

The region is the closure of the union over finite \(Q,U_1,\ldots,U_k\), product kernels (5), and distortion-feasible reconstructions. It is an inner bound only; this note proves no general matching converse. No small cardinality bound on \(U_i\) is asserted. Finite auxiliaries suffice for each point in the union; any additional support-lemma reduction must be proved separately. Finite time-sharing is part of the definition; no numerical bound on \(|Q|\) is claimed here.

The proof for \(Q\) constant gives all subset inequalities explicitly. Choose covering codebook size \(L_i=\lceil2^{n\widetilde R_i}\rceil\), with \(\widetilde R_i>I(X_i;U_i)+\eta\), and independently generate each codeword in encoder \(i\)'s book according to \(P_{U_i}^n\). Independently assign each index of encoder \(i\) uniformly to \(B_i=\lceil2^{nR_i}\rceil\) bins. Given \(x_i^n\), encoder \(i\) sends the bin of the first codeword jointly typical with \(x_i^n\); if none exists, it sends bin 1. The decoder searches for the unique index tuple in the received bins whose codewords are jointly typical with \(P_{U^k}\), then applies each \(g_i\); on nonuniqueness/failure it outputs a fixed reproduction sequence.

For each encoder, the covering probability bound above gives

\[
P(E_{\mathrm{cover},i})\le P\{X_i^n\text{ atypical}\}+\exp[-2^{n(\widetilde R_i-I(X_i;U_i)-2\alpha)}]\to0.
\]

On covering success the selected \(U_i^n\mid X_i^n\) is supported on the conditional typical set and has point masses \(2^{-n(H(U_i\mid X_i)\pm3\alpha)}\). Starting with the typical source tuple, apply the Markov typicality lemma successively for \(U_1,\ldots,U_k\): at step \(i\), conditional on \(X^k\) and already selected \(U_1,\ldots,U_{i-1}\), the independent codebook for encoder \(i\) depends on the other coordinates only through \(X_i^n\), exactly as required by (5). The selected tuple \((X^k,U^k)\) is jointly typical with probability tending to one. The deterministic reconstruction functions then make every empirical distortion approach its single-letter expectation. Boundedness controls the contribution of all error events.

Here are explicit packing estimates for every error subset. Fix a nonempty set \(S\) of encoders whose decoded indices differ from the selected indices; indices in \(S^c\) equal the selected indices. Conditional on the source sequences, codebook families are independent. For each \(i\in S\), bound the expected counting measure of nonselected codewords by (1), with \(C_i=L_i+1/p_i\le2^{n(\widetilde R_i+\alpha)}\). On the event the true complementary codeword tuple \(u_{S^c}^n\) is typical, the independent product law of candidate codewords in \(S\) obeys

\[
\left(\prod_{i\in S}P_{U_i}^n\right)
\{u_S^n:(u_S^n,u_{S^c}^n)\text{ jointly typical}\}
\le2^{-n(J_S-\alpha)},
\]

where

\[
J_S=D\!\left(P_{U^k}\middle\|\Big(\prod_{i\in S}P_{U_i}\Big)P_{U_{S^c}}\right)
=\sum_{i\in S}H(U_i)-H(U_S\mid U_{S^c}).
\]

The probability bound follows by the same typical likelihood-ratio argument as item 2 above, now conditioning on \(u_{S^c}^n\). Independent bin assignments put a fixed competing tuple in all the selected bins with probability \(\prod_{i\in S}B_i^{-1}\). Hence

\[
P(E_S\cap E_{\mathrm{good}})
\le 2^{-n\sum_{i\in S}R_i}\Big(\prod_{i\in S}C_i\Big)2^{-n(J_S-\alpha)}
\le 2^{-n[\sum_{i\in S}R_i-\sum_{i\in S}\widetilde R_i+J_S-o_\eta(1)]}.
\tag{7}
\]

The product counting bound is valid even though indices before a selected index are conditionally truncated: (1) already includes the factor \(1/p_i\); conditional on the source tuple, the encoder codebooks are independent across \(i\), so the counting measures multiply. From (5),

\[
H(U_S\mid X_S,U_{S^c})=\sum_{i\in S}H(U_i\mid X_i),
\]

because given \(X_S,Q\), \(U_S\) is independent of \(U_{S^c}\) and has product conditional law. Consequently

\[
\sum_{i\in S}I(X_i;U_i)-J_S
=H(U_S\mid U_{S^c})-\sum_{i\in S}H(U_i\mid X_i)
=I(X_S;U_S\mid U_{S^c}).
\tag{8}
\]

Choose each \(\widetilde R_i\) arbitrarily close above \(I(X_i;U_i)\). If every inequality (6) is strict by a positive margin, (7) decays exponentially for each nonempty \(S\); there are only \(2^k-1\) such subsets, so a union bound makes the decoder error probability vanish. In particular, for \(k=2\) the three events are: only \(U_1\) wrong, only \(U_2\) wrong, and both wrong. Their exponents reduce respectively to the three familiar bounds

\[
R_1>I(X_1;U_1\mid U_2),\quad R_2>I(X_2;U_2\mid U_1),\quad
R_1+R_2>I(X_1,X_2;U_1,U_2).
\]

Taking expectation over codebooks and bins shows the sum of bounded distortion excesses and decoding error tends to zero; at least one deterministic code design has this property. Rates/distortions on boundary follow by diagonalizing the strict-slack construction: for each \(j\), choose typicality and rate slack below \(1/j\), then a blocklength threshold after which the bounds hold, and let \(j\to\infty\) slowly with \(n\). This proves the closure statement rather than claiming exact finite-block inequalities.

For finite \(Q\), fix a deterministic public schedule \(q^n\) with \(n^{-1}|\{t:q_t=q\}|\to P_Q(q)\), and generate each encoder's random codewords with law \(\prod_tP_{U_i\mid Q=q_t}\). On each positive-probability schedule class, the source coordinates are iid \(P_{X^k}\); by the law of large numbers, with probability tending to one every class subsequence is typical. Conditional type counts factor over these classes, so their logarithms add: the covering exponent is \(I(X_i;U_i\mid Q)\), the selected point masses have exponent \(H(U_i\mid X_i,Q)\), and the conditional Markov-typicality proof applies within each class. For a fixed typical complementary tuple, the candidate product law has packing exponent
\[
J_S(Q)=\sum_{i\in S}H(U_i\mid Q)-H(U_S\mid U_{S^c},Q).
\]
The counting-measure argument (1) applies separately to each encoder with \(C_i\le 2^{n(\widetilde R_i+\alpha)}\). Thus the exponent in (7) becomes \(\sum_{i\in S}R_i-\sum_{i\in S}\widetilde R_i+J_S(Q)\), and conditional independence in (5) gives
\[
\sum_{i\in S}I(X_i;U_i\mid Q)-J_S(Q)=I(X_S;U_S\mid U_{S^c},Q).
\]
These estimates prove the same strict-rate achievability and diagonal closure for (6). The schedule is fixed and known to both terminals, so it is not free random common information. No cardinality reduction for \(Q\) or the \(U_i\) is claimed.

## Gaussian and successive-refinement statements not to conflate

The finite Berger–Tung proof above assumes finite alphabets and bounded distortions. A scalar jointly Gaussian two-encoder example has an exact region under stronger, specific hypotheses, but that exactness is not a consequence of the inner-bound proof. Wagner–Tavildar–Viswanath's exact model is \(X_1,X_2\) jointly Gaussian with unit variances and correlation \(0<\rho<1\), separate encoders, one decoder, and separate expected MSE targets \(d_1,d_2>0\). In bits, set

\[
\beta=1+\sqrt{1+\frac{4\rho^2d_1d_2}{(1-\rho^2)^2}},\qquad \log^+z=\max(0,\log_2z).
\]

The exact region is the intersection

\[
R_1\ge\frac12\log^+\!\frac{1-\rho^2+\rho^2 2^{-2R_2}}{d_1},\quad
R_2\ge\frac12\log^+\!\frac{1-\rho^2+\rho^2 2^{-2R_1}}{d_2},\quad
R_1+R_2\ge\frac12\log^+\!\frac{(1-\rho^2)\beta}{2d_1d_2}.
\]

The general Berger–Tung argument supplies its Gaussian test-channel achievability after replacing finite type counting with the paper's Gaussian random-coding argument; WTV's Gaussian extremal converse is a separate theorem. Do not infer exactness for arbitrary jointly Gaussian vectors, arbitrary numbers of terminals, or non-MSE distortions. The complete WTV source and converse proof are documented in the r5 lane.

Equitz–Cover's successive-refinement condition is also a different interface from Wyner–Ziv: for an i.i.d. source, two distortion levels \(D_1\ge D_2\), and the paper's common per-letter distortion, two individually RDF-optimal reconstructions can be simultaneously attained iff an optimal pair can be coupled as \(X\to\widehat X_2\to\widehat X_1\). Their full proof and examples are recorded in the r4 source findings. This Markov compatibility condition concerns nested descriptions, not decoder side information or equality of WZ and conditional RDFs.

## Proof-source locators and remaining scope

The finite WZ model, formula, converse and direct theorem were checked against the complete Wyner–Ziv article (IEEE TIT 22(1), 1976, pp. 1-10), especially its model/theorem pages 1-3 and converse/direct proofs on pp. 6-9. The finite conditional-RDF distinctions and operational expected-distortion arguments also use the complete MIT OCW 6.441 S16 Chapter 24 read recorded in `reading-ledger.json`.

For Berger–Tung, I focused-read the relevant extracted spans in El Gamal–Kim, *Network Information Theory*, arXiv:1001.3404v3, Lecture Notes 13 pages 1-12 (operational model, independent test channels, codebooks, bins, decoder, covering/packing and rate elimination) and Appendix pages 44-50 (Markov typicality and selected-covering-word mass). The r5 lane reports the complete 641-page manuscript read; r4 did not reread that entire book. The present note spells out the finite type estimates and subset packing bounds used here rather than treating a “covering plus binning” citation as a proof.

The WTV Gaussian two-encoder exact region stated above is fully developed in the separate complete WTV source and r5 research lane. This note does not prove its Gaussian extremal converse, does not claim the general Berger–Tung inner bound is tight, and does not extend its exactness to more terminals or arbitrary Gaussian models. The Gaussian WZ paragraph proves a single-letter no-rate-loss construction and the conditional RDF; an operational continuous-alphabet WZ theorem requires its own coding theorem.

