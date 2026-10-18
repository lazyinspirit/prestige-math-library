# Local proof: exact quadratic-Gaussian two-encoder region

This note fills the Gaussian CEO converse step that Wagner–Tavildar–Viswanath (WTV) cite to the CEO literature without proving. It also records a Gaussian test-channel achievability argument and the scalar-face and sum-rate algebra needed for the exact region. The CEO distortion inequality below is proved locally from message likelihoods, a Gaussian entropy bound, and the Bayesian Cramér–Rao inequality; it is not imported as an unproved CEO theorem.

All rates and logarithms are in bits. Write \(\log^+_2 x=\max(0,\log_2 x)\).

## Theorem and exact scope

Let \((Y_1(t),Y_2(t))_{t\ge1}\) be iid zero-mean jointly Gaussian with
\[
K=\begin{pmatrix}1&\rho\\ \rho&1\end{pmatrix},\qquad 0<\rho<1,\qquad q=1-\rho^2.
\]
Encoder \(j\) observes \(Y_j^n\), sends one of \(M_j\) finite messages to a common decoder, and the decoder produces \(\widehat Y_1^n,\widehat Y_2^n\). The constraints are expected per-coordinate squared errors
\[
\frac1n\sum_{t=1}^n\mathbb E(Y_j(t)-\widehat Y_j(t))^2\le d_j,\qquad d_j>0.
\]
Rates are \((1/n)\log_2 M_j\); the operational rate region is the closure of such finite-block rate-distortion tuples. Define
\[
\beta(d_1,d_2)=1+\sqrt{1+\frac{4\rho^2d_1d_2}{q^2}}.
\]
For \(d_1,d_2>0\), the exact region is
\[
\begin{aligned}
R_1&\ge \frac12\log_2^+\!\left(\frac{q+\rho^2 2^{-2R_2}}{d_1}\right),\\
R_2&\ge \frac12\log_2^+\!\left(\frac{q+\rho^2 2^{-2R_1}}{d_2}\right),\\
R_1+R_2&\ge \frac12\log_2^+\!\left(\frac{q\,\beta(d_1,d_2)}{2d_1d_2}\right).
\end{aligned}
\tag{1}
\]
The theorem is for \(0<\rho<1\), positive distortion targets, separate encoders, one joint decoder, and expected MSE. Scaling handles unequal positive source variances; changing the sign of one source handles negative correlation. The degenerate cases \(\rho=0,1\), zero distortion, excess-distortion criteria, and arbitrary Gaussian vector sources are not claimed here.

## Gaussian test channels and their coding region

For \(\lambda_1,\lambda_2\ge0\), let
\[
U_j=Y_j+Q_j,\qquad Q_j\sim N(0,\lambda_j^{-1}),
\]
with independent \(Q_1,Q_2,Y_1,Y_2\); \(\lambda_j=0\) means \(U_j\) is constant. Set
\[
t(\lambda_1,\lambda_2)=1+\lambda_1+\lambda_2+q\lambda_1\lambda_2,\qquad
D(\lambda)=\left(K^{-1}+\operatorname{diag}(\lambda_1,\lambda_2)\right)^{-1}.
\]
Direct inversion and Gaussian entropy calculations give
\[
D_{11}=\frac{1+q\lambda_2}{t},\quad
D_{22}=\frac{1+q\lambda_1}{t},\quad
D_{12}=\frac{\rho}{t},
\tag{2}
\]
and
\[
\begin{aligned}
r_1(\lambda)&=I(Y_1;U_1\mid U_2)=\tfrac12\log_2\frac{t}{1+\lambda_2},\\
r_2(\lambda)&=I(Y_2;U_2\mid U_1)=\tfrac12\log_2\frac{t}{1+\lambda_1},\\
s(\lambda)&=I(Y_1,Y_2;U_1,U_2)=\tfrac12\log_2 t.
\end{aligned}
\tag{3}
\]
Thus this test channel achieves every rate pair in the contra-polymatroid
\[
R_1\ge r_1(\lambda),\qquad R_2\ge r_2(\lambda),\qquad R_1+R_2\ge s(\lambda),
\tag{4}
\]
with distortions \(D_{11},D_{22}\).

Here is a reduction that justifies using (4) for continuous Gaussian sources rather than assuming a finite-alphabet Berger–Tung theorem applies to them. Fix a Gaussian test channel and strict rate slack. Choose nested increasing finite clipped grids whose sigma-fields generate the Borel sigma-field and whose quantizers satisfy \(X_j^{(m)}=Q_m(Y_j)\to Y_j\) in \(L^2\). Fix nested finite output partitions \(V_j^{(\ell)}=Q_\ell(U_j)\) generating the output Borel sigma-field, and define a finite kernel by averaging the Gaussian transition:
\[
P_m(v\mid x)=\mathbb E[P(Q_\ell(U_j)=v\mid Y_j)\mid Q_m(Y_j)=x].
\]
Use independent randomization for the two finite kernels. For fixed \(\ell\), \(P_m(v\mid X_j^{(m)})=\mathbb E[P(V_j^{(\ell)}=v\mid Y_j)\mid X_j^{(m)}]\) converges in \(L^1\) to \(P(V_j^{(\ell)}=v\mid Y_j)\) by conditional-expectation martingale convergence. Since the output alphabets are finite, the joint output probabilities and their entropies converge. Product factorization gives
\[
I(X_1^{(m)};V_1^{(\ell)}\mid V_2^{(\ell)})
=H(V_1^{(\ell)}\mid V_2^{(\ell)})-H(V_1^{(\ell)}\mid X_1^{(m)}),
\]
with the symmetric formula for encoder 2 and
\[
I(X_1^{(m)},X_2^{(m)};V_1^{(\ell)},V_2^{(\ell)})
=H(V_1^{(\ell)},V_2^{(\ell)})-\sum_j H(V_j^{(\ell)}\mid X_j^{(m)}).
\]
Thus the finite Berger–Tung quantities converge to those of \((Y_1,Y_2,V_1^{(\ell)},V_2^{(\ell)})\). Refining nested output partitions gives the Gaussian mutual informations in (3), by convergence of relative entropy along generating finite partitions; these Gaussian mutual informations are finite. The finite decoder can use the finite-valued reconstruction \(g_j(V_1^{(\ell)},V_2^{(\ell)})=\mathbb E[Y_j\mid V_1^{(\ell)},V_2^{(\ell)}]\); these conditional means converge in \(L^2\) to \(\mathbb E[Y_j\mid U_1,U_2]\). For each fixed grid and output partition, the resulting source and reproduction alphabets are finite and the squared-error distortion is bounded, so the finite-alphabet coding argument in [the local Berger–Tung proof note](lossy-multiterminal-proof-developments.md) applies.

For fixed output partitions, the actual finite-source test channel has conditional output kernel
\[
k_m(v\mid y_1,y_2)=\prod_{i=1}^2\mathbb E[P(V_i=v_i\mid Y_i)\mid X_i^{(m)}],
\qquad
k(v\mid y_1,y_2)=\prod_{i=1}^2P(V_i=v_i\mid Y_i),
\]
for each output pair \(v=(v_1,v_2)\). The factors are in \([0,1]\), so the per-coordinate \(L^1\) convergence already proved and \(|ab-cd|\le|a-c|+|b-d|\) imply \(\mathbb E|k_m(v\mid Y)-k(v\mid Y)|\to0\). Since the output alphabet is finite, all output probabilities converge. The fixed reconstruction \(g_j(v)\) is bounded over that finite alphabet. For its source cross moment, for every \(L>0\),
\[
\left|\mathbb E\!\left[Y_j(k_m(v\mid Y)-k(v\mid Y))\right]\right|
\le L\,\mathbb E|k_m(v\mid Y)-k(v\mid Y)|
+\mathbb E[|Y_j|\mathbf1_{\{|Y_j|>L\}}],
\]
which tends to zero by first taking \(m\to\infty\), then \(L\to\infty\). The remaining quantization part of the cross moment obeys
\[
\left|\mathbb E[(X_j^{(m)}-Y_j)k_m(v\mid Y)]\right|
\le\mathbb E|X_j^{(m)}-Y_j|\to0.
\]
Also \(\mathbb E[(X_j^{(m)})^2]\to\mathbb E[Y_j^2]\) by \(L^2\) quantizer convergence. Summing over the finite output alphabet shows
\(\mathbb E[(X_j^{(m)}-g_j(V_1,V_2))^2]\to\mathbb E[(Y_j-g_j(V_1,V_2))^2]\); this explicitly controls the source/reconstruction cross term with unbounded Gaussian \(Y_j\).

To pass from the quantized source criterion to actual \(Y_j\), use
\[
(Y_j-\widehat Y_j)^2\le(1+\epsilon)(X_j^{(m)}-\widehat Y_j)^2+
(1+\epsilon^{-1})(Y_j-X_j^{(m)})^2.
\]
The second term tends to zero in expectation as the clipped grid is refined. Choosing the grid/output partitions after the rate slack, then taking a diagonal sequence, proves Gaussian test-channel achievability under expected MSE. This uses finite Berger–Tung coding only after a finite-source approximation and explicitly controls the unbounded Gaussian tails.

## Scalar face converses and matching Gaussian points

The analytic input for the faces is the entropy-power inequality with an independent Gaussian summand. For an \(n\)-vector \(A\), write
\[
N(A)=\frac{1}{2\pi e}\,2^{2h(A)/n}.
\]
Here \(h\) is differential entropy in bits. We prove the needed inequality for every posterior of a standard Gaussian vector given a positive-probability finite-message cell. Such a posterior has density \(f(x)=\phi_n(x)\mathbf1_C(x)/p\), where \(p=P\{G_0\in C\}>0\) and \(G_0\sim N(0,I_n)\); in particular it has finite second moment and finite differential entropy. The scaling identity \(N(cA)=c^2N(A)\) then gives the result for isotropic nonsingular Gaussian priors as well.

**Gaussian-summand entropy-power inequality.** Let \(J(f)=\int f\|\nabla\ln f\|^2\) be total Fisher information, using natural logarithms in the score. First suppose \(A\) has a smooth positive density and finite Fisher information. For independent smooth vectors \(B,C\) with finite Fisher information, differentiating the convolution shows
\[
\nabla\ln f_{B+C}(b+c)=\mathbb E[\nabla\ln f_B(B)\mid B+C=b+c]
=\mathbb E[\nabla\ln f_C(C)\mid B+C=b+c].
\]
Thus for any real \(\alpha\), the sum score is the conditional expectation of \(\alpha\nabla\ln f_B(B)+(1-\alpha)\nabla\ln f_C(C)\). Conditional Jensen, independence, and the zero mean of each score give
\[
J(B+C)\le\alpha^2J(B)+(1-\alpha)^2J(C).
\]
Minimizing over \(\alpha\) proves Stam’s reciprocal-Fisher inequality \(J(B+C)^{-1}\ge J(B)^{-1}+J(C)^{-1}\). Since \(J(N(0,tI_n))=n/t\), it follows that
\[
J(A+\sqrt tZ)\le\frac{nJ(A)}{n+tJ(A)},\qquad Z\sim N(0,I_n).
\tag{5a}
\]

For \(A_t=A+\sqrt tZ\), the heat equation is \(\partial_t f_t=\frac12\Delta f_t\). Differentiating entropy in bits and integrating by parts gives de Bruijn’s identity
\[
\frac{d}{dt}h(A_t)=\frac{J(A_t)}{2\ln 2}.
\tag{5b}
\]
For the posteriors under consideration these operations are justified for every \(t>0\): \(f\le p^{-1}\phi_n\), and a bounded positive-measure subset of \(C\) gives a lower bound \(f_t(x)\ge c_t\exp[-C_t(1+\|x\|^2)]\). Convolving the Gaussian upper envelope bounds \(f_t\) and its first two derivatives by a polynomial times a Gaussian. Hence \(|\ln f_t|\) grows at most quadratically, the score is square-integrable (indeed \(J(A_t)\le n/t\) by the conditional-score identity and Jensen), and cutoff integration by parts has vanishing boundary terms. Differentiation under the entropy integral follows from the same bounds, locally uniformly on compact positive \(t\)-intervals.

Apply the reciprocal-Fisher bound and integrate (5b). For a smooth input with finite \(J(A)\),
\[
h(A+\sqrt TZ)-h(A)\le\frac n2\log_2\!\left(1+\frac{TJ(A)}n\right).
\]
As \(T\to\infty\), \(h(A+\sqrt TZ)=\frac n2\log_2(2\pi eT)+o(1)\). The lower bound follows from \(h(A+\sqrt TZ)\ge h(\sqrt TZ)\), since their difference is a nonnegative mutual information; the upper bound is the Gaussian maximum-entropy bound with covariance \(TI_n+\operatorname{Cov}(A)\), using \(\det(TI_n+\operatorname{Cov}(A))\le(T+\operatorname{tr}\operatorname{Cov}(A)/n)^n\). Exponentiating the integrated bound gives \(2^{2h(A+\sqrt TZ)/n}\le2^{2h(A)/n}(1+TJ(A)/n)\). Divide by \(2\pi eT\) and let \(T\to\infty\) to obtain the entropy-Fisher inequality \(N(A)J(A)\ge n\).

For an arbitrary cell posterior, smooth first: \(A_\epsilon=A+\sqrt\epsilon Z\) has finite Fisher information by the conditional-score identity and Jensen. The entropy-Fisher inequality applies to every \(A_t\), \(t>0\), so (5b) gives
\[
\frac{d}{dt}N(A_t)=\frac{N(A_t)J(A_t)}n\ge1.
\]
Consequently \(N(A_{\epsilon+v})\ge N(A_\epsilon)+v\). To pass to \(\epsilon\downarrow0\), let \(\gamma=N(0,I_n)\). The posterior has \(D(f\|\gamma)=\ln(1/p)<\infty\). For the Gaussian convolution channel, the output likelihood ratio relative to \(\gamma_{1+\epsilon}\) is \(\mathbb E_\gamma[f(A)/\gamma(A)\mid A+\sqrt\epsilon Z]\); conditional Jensen for \(u\mapsto u\ln u\) therefore gives \(D(f_\epsilon\|\gamma_{1+\epsilon})\le D(f\|\gamma)\). Also
\[
D(f_\epsilon\|\gamma)=D(f_\epsilon\|\gamma_{1+\epsilon})-\frac n2\ln(1+\epsilon)+\frac{\epsilon\,\mathbb E\|A_\epsilon\|^2}{2(1+\epsilon)}.
\]
The last two terms tend to zero. For this cell posterior, the needed lower semicontinuity follows from
\[
D(P\|\gamma)=\sup_{\psi\in C_b(\mathbb R^n)}
\left\{\mathbb E_P\psi-\ln\mathbb E_\gamma e^\psi\right\}.
\]
Gibbs’ inequality proves that every expression in braces is at most \(D(P\|\gamma)\). Conversely, for \(dP/d\gamma=\mathbf1_C/p\), the bounded measurable functions \(\psi_t=\ln(((dP/d\gamma)\vee e^{-t})\wedge e^t)\) make the expressions tend to \(\ln(1/p)\); regularity of finite Borel measures approximates each \(\psi_t\) by bounded continuous functions in \(L^1(P+\gamma)\), preserving both terms. Each expression is continuous in \(P\) under weak convergence, so their supremum is lower semicontinuous. Thus weak convergence \(f_\epsilon\Rightarrow f\) and the preceding upper bound imply \(D(f_\epsilon\|\gamma)\to D(f\|\gamma)\). The second moments also converge, and \(h(f)=\frac n2\ln(2\pi)+\frac12\mathbb E\|A\|^2-D(f\|\gamma)\), in nats, proves entropy continuity at zero. De Bruijn’s identity gives continuity at every positive smoothing time. Taking the limit gives, for \(G\sim N(0,vI_n)\) independent of \(A\),
\[
N(A+G)\ge N(A)+v.
\]

For finite \(M\), define \(N(A\mid M)=(2\pi e)^{-1}2^{2h(A\mid M)/n}\), where conditional differential entropy averages over \(M\). If \(M\) is independent of \(G\) jointly with \(A\), apply the scalar inequality conditional on each positive-probability \(M=m\). Writing \(N_m=N(A\mid M=m)\), this gives
\[
\ln N(A+G\mid M)=\mathbb E[\ln N(A+G\mid M=m)]
\ge\mathbb E[\ln(v+N_m)]
\ge\ln\!\left(v+\exp\mathbb E[\ln N_m]\right),
\]
by Jensen for the convex function \(x\mapsto\ln(v+e^x)\). Exponentiating yields
\[
N(A+G\mid M)\ge N(A\mid M)+v.
\tag{5}
\]
In applying (5) to the face converse, \(A=\rho Y_2^n\), \(G=Z^n\). Equivalently apply the proved standard-prior case to \(Y_2^n\) and the independent Gaussian \(Z^n/\rho\), then multiply by \(\rho^2\).

Let \(M_j=f_j(Y_j^n)\) be any block code. Since \(Y_1^n=\rho Y_2^n+Z^n\), with \(Z^n\sim N(0,qI_n)\) independent of \((Y_2^n,M_2)\), (5) and
\[
h(Y_2^n\mid M_2)=h(Y_2^n)-H(M_2)\ge \frac n2\log_2(2\pi e)-nR_2
\]
imply
\[
h(Y_1^n\mid M_2)\ge \frac n2\log_2\!\left(2\pi e\,[q+\rho^2 2^{-2R_2}]\right).
\tag{6}
\]
The decoder estimate \(\widehat Y_1^n\) is a function of \((M_1,M_2)\). Translation by that function, conditioning, and the Gaussian maximum-entropy bound give
\[
h(Y_1^n\mid M_1,M_2)\le h(Y_1^n-\widehat Y_1^n)
\le \frac n2\log_2(2\pi e\,d_1).
\]
Also \(nR_1\ge H(M_1\mid M_2)\ge I(Y_1^n;M_1\mid M_2)\). Subtracting the two conditional entropies yields the first inequality of (1), with \(\log^+\) because rates are nonnegative. Interchanging indices proves the second inequality.

The same calculations give a Gaussian point attaining each scalar-face boundary. Assume \(0<d_1<1\), put \(X=2^{2R_1}\), and let
\[
R_{1,\min}=\tfrac12\log_2^+(q/d_1),\qquad R_{1,\max}=\tfrac12\log_2(1/d_1).
\]
For a finite feasible boundary rate \(R_{1,\min}<R_1\le R_{1,\max}\), set
\[
\lambda_2=\frac{1-d_1X}{d_1X-q},\qquad
\lambda_1=\frac{(1-d_1)+(q-d_1)\lambda_2}{d_1(1+q\lambda_2)}.
\tag{7}
\]
These are nonnegative: \(\lambda_2\ge0\) on the stated interval; if \(d_1\le q\), the numerator of \(\lambda_1\) is nonnegative for every \(\lambda_2\), while if \(d_1>q\), the rate range implies \(\lambda_2\le(1-d_1)/(d_1-q)\). For \(d_1>q\), the same formula also applies at the finite endpoint \(R_1=0=R_{1,\min}\). Equation (2) gives \(D_{11}=d_1\). Equation (3) gives \(r_1=R_1\), while the left corner of (4) has
\[
R_2=s-r_1=\tfrac12\log_2(1+\lambda_2)
=\tfrac12\log_2\frac{\rho^2}{d_1X-q},
\]
exactly the nonzero part of the first face boundary. If \(d_1X\ge1\), that face is zero and the endpoint \(\lambda_2=0,\lambda_1=d_1^{-1}-1\) suffices. The limiting endpoint \(R_1=R_{1,\min}\) when \(d_1\le q\) requires \(R_2\to\infty\), so it is not a finite-rate point. Thus every finite point above the scalar face is achievable whenever its companion distortion constraint is met. The symmetric formula handles the other face.

## The locally proved Gaussian CEO extremal converse

We now prove the CEO inequality required for the sum converse. Let
\[
X^n\sim N(0,I_n),\qquad Y_j^n=a_jX^n+N_j^n,
\]
where \(N_j^n\sim N(0,\sigma_j^2I_n)\) are mutually independent and independent of \(X^n\); \(a_j>0\), \(\sigma_j^2>0\). Let \(M_j=f_j(Y_j^n)\) be finite messages with message alphabet \(\mathcal M_j\), and let \(\widehat X^n=\psi(M_1,M_2)\) have per-coordinate MSE \(\delta\). Define
\[
r_j=\frac1n H(M_j\mid X^n),\qquad \operatorname{snr}_j=\frac{a_j^2}{\sigma_j^2}.
\]
Then
\[
\delta\ge
\left[1+\sum_{j=1}^2\operatorname{snr}_j(1-2^{-2r_j})\right]^{-1}
\tag{8}
\]
and
\[
\frac1n\log_2(|\mathcal M_1||\mathcal M_2|)
\ge \frac12\log_2^+(1/\delta)+r_1+r_2.
\tag{9}
\]

**Proof of (8), including the missing extremal lemma.** For a message value \(m\), the likelihood is the Gaussian convolution
\[
p_j(m\mid x)=\int_{\{y:f_j(y)=m\}}\phi_{\sigma_j}(y-a_jx)\,dy.
\]
It is positive for nonempty cells and differentiable under the integral. Its score is
\[
\nabla_x\log p_j(M_j\mid X^n)
=\frac{a_j}{\sigma_j^2}\,\mathbb E[N_j^n\mid X^n,M_j].
\]
Let \(J_j\) be the expected Fisher-information matrix of this likelihood. Then
\[
\operatorname{tr}J_j
=\frac{a_j^2}{\sigma_j^4}\mathbb E\|\mathbb E[N_j^n\mid X^n,M_j]\|^2.
\tag{10}
\]
Because \(M_j\) is a deterministic function of \(a_jX^n+N_j^n\),
\[
h(N_j^n\mid X^n,M_j)=\frac n2\log_2(2\pi e\sigma_j^2)-H(M_j\mid X^n)
=\frac n2\log_2(2\pi e\sigma_j^2)-nr_j.
\tag{11}
\]
Conditional maximum entropy, followed by Jensen over \((X^n,M_j)\), gives
\[
h(N_j^n\mid X^n,M_j)
\le\frac n2\log_2\!\left(
2\pi e\,\frac1n\mathbb E\|N_j^n-\mathbb E[N_j^n\mid X^n,M_j]\|^2
\right).
\]
Combining with (11) yields
\[
\frac1n\mathbb E\|N_j^n-\mathbb E[N_j^n\mid X^n,M_j]\|^2
\ge \sigma_j^2 2^{-2r_j}.
\]
The orthogonal-projection identity and (10) therefore show
\[
\operatorname{tr}J_j\le n\,\operatorname{snr}_j(1-2^{-2r_j}).
\tag{12}
\]

Given \(X^n\), the messages are independent, so their likelihood scores add and their Fisher matrices add. The joint prior-message score \(S=\nabla_x\log p(X^n,M_1,M_2)\) has information matrix
\[
F=\mathbb E[SS^T]=I_n+J_1+J_2.
\]
The cross terms vanish because each conditional likelihood score has conditional mean zero. For completeness, the Bayesian Cramér–Rao step follows by integration by parts: for \(e=X^n-\widehat X^n(M_1,M_2)\), Gaussian decay of the prior and smoothness of the convolved likelihood give \(\mathbb E[eS^T]=-I_n\). Hence
\[
0\preceq\mathbb E[(e+F^{-1}S)(e+F^{-1}S)^T]
=\mathbb E[ee^T]-F^{-1},
\]
so \(\mathbb E[ee^T]\succeq F^{-1}\). If \(\eta_1,\ldots,\eta_n\) are the eigenvalues of \(J_1+J_2\succeq0\), convexity of \(u\mapsto(1+u)^{-1}\) implies
\[
\delta=\frac1n\operatorname{tr}\mathbb E[ee^T]
\ge\frac1n\operatorname{tr}F^{-1}
=\frac1n\sum_{\ell=1}^n\frac1{1+\eta_\ell}
\ge\frac1{1+\operatorname{tr}(J_1+J_2)/n}.
\]
Use (12) to obtain (8).

**Proof of (9) and sharpness of the CEO bound.** Put \(M=(M_1,M_2)\). Since \(M\) is a deterministic function of \((Y_1^n,Y_2^n)\), and the observations are conditionally independent given \(X^n\),
\[
\begin{aligned}
\log_2(|\mathcal M_1||\mathcal M_2|)
&\ge H(M_1,M_2)\\
&=I(Y_1^n,Y_2^n;M)\\
&=I(X^n;M)+H(M_1\mid X^n)+H(M_2\mid X^n).
\end{aligned}
\tag{13}
\]
The Gaussian entropy bound with the decoder estimate gives
\[
I(X^n;M)\ge \frac n2\log_2^+(1/\delta).
\]
Together these prove (9). If \(\delta\le d\), (8) forces
\[
1+\sum_j\operatorname{snr}_j(1-2^{-2r_j})\ge 1/d.
\tag{14}
\]
Thus every CEO code obeys the lower bound obtained by minimizing the right side of (9) over \(r_1,r_2\ge0\) subject to (14).

The infimum is finite exactly when d>(1+sum_j snr_j)^(-1), the error with unquantized observations; at equality its value is infinite, and below it (14) has no feasible r and no decoder can meet the target. For every finite feasible target, the lower bound is sharp and equals the Gaussian product-test-channel sum-rate infimum. For any \(r_j\ge0\), choose \(U_j=Y_j+Q_j\) with independent Gaussian \(Q_j\) such that \(I(Y_j;U_j\mid X)=r_j\); for \(r_j=0\), use a constant. The effective observation SNR about \(X\) is
\[
\operatorname{snr}_j(1-2^{-2r_j}),
\]
so \(\operatorname{Var}(X\mid U_1,U_2)\) is the reciprocal in (14). The identity
\[
I(Y_1,Y_2;U_1,U_2)=I(X;U_1,U_2)+\sum_jI(Y_j;U_j\mid X)
\]
shows that when \(d<1\), the minimum is attained with \(\operatorname{Var}(X\mid U_1,U_2)=d\), and its value is the objective in (9). Indeed, a feasible point with strict slack in (14) can reduce a positive \(r_j\) and lower the objective until equality. For \(d\ge1\), constant auxiliaries achieve zero. Conversely every
\[
D\in\mathcal D_G:=\{(K^{-1}+\operatorname{diag}\lambda)^{-1}:\lambda_1,\lambda_2\ge0\}
\tag{15}
\]
is the posterior error covariance of such independent Gaussian test channels. If \(X=\kappa\mu^TY+Z\) with \(Z\) independent of \(Y\) and variance \(\gamma\), then \(\operatorname{Var}(X\mid U)=\gamma+\kappa^2\mu^TD\mu\). Consequently the exact CEO sum lower bound for target \(\delta_0=\gamma+\kappa^2d\) equals
\[
\inf_{\substack{D\in\mathcal D_G\\\mu^TD\mu\le d}}
\frac12\log_2^+\frac{|K|}{|D|}.
\tag{16}
\]
This derives the needed CEO sum result rather than citing it.

## Sum-rate converse

First consider an arbitrary block code for the original source. Replace its decoder by coordinatewise conditional-mean estimates given \(M_1,M_2\); this cannot increase either distortion. Let
\[
\widehat D=\frac1n\sum_{t=1}^n
\mathbb E[(Y(t)-\widehat Y(t))(Y(t)-\widehat Y(t))^T]
=\begin{pmatrix}\widehat d_1&c\\c&\widehat d_2\end{pmatrix},
\]
so \(\widehat d_j\le d_j\). The finite message pair is a function of \(Y^n\), hence
\[
n(R_1+R_2)\ge H(M_1,M_2)=h(Y^n)-h(Y^n\mid M_1,M_2).
\]
Chain rule, translation by the decoder estimate, conditional-entropy reduction, Gaussian maximum entropy, and concavity of \(\log\det\) yield
\[
h(Y^n\mid M_1,M_2)
\le \frac n2\log_2\big((2\pi e)^2|\widehat D|\big),
\]
and therefore
\[
R_1+R_2\ge\frac12\log_2^+\frac{|K|}{|\widehat D|}.
\tag{17}
\]
The conditional distributions of a nonsingular Gaussian source on positive-probability finite-message cells have full-dimensional densities, so \(\widehat D\) is positive definite.

Let
\[
\phi=\frac{c}{\sqrt{d_1d_2}},\qquad
D_\phi=\begin{pmatrix}d_1&\phi\sqrt{d_1d_2}\\
\phi\sqrt{d_1d_2}&d_2\end{pmatrix}.
\]
Because \(\widehat d_j\le d_j\), \(D_\phi-\widehat D\) is diagonal positive semidefinite, so \(|\widehat D|\le|D_\phi|\). Equation (17) gives the cooperative lower bound
\[
R_1+R_2\ge R_{\rm coop}(\phi)
:=\frac12\log_2^+\frac{q}{(1-\phi^2)d_1d_2}.
\tag{18}
\]

Now fix \(\mu=(\sqrt{d_2},\sqrt{d_1})^T\). For any \(\mu\) with positive coordinates, scale it by \(\kappa>0\) so that
\[
\kappa^2(\mu_1+\rho\mu_2)(\rho\mu_1+\mu_2)=\rho.
\]
Set \(X=\kappa\mu^TY+Z\), where \(Z\) is independent Gaussian with variance \(\gamma=1-\kappa^2\mu^TK\mu>0\). Indeed,
\[
(\mu_1+\rho\mu_2)(\rho\mu_1+\mu_2)-\rho\mu^TK\mu=q\mu_1\mu_2>0,
\]
so \(\gamma>0\). Then \(X\sim N(0,1)\), \(\mathbb E[X\mid Y]=\kappa\mu^TY\), and
\[
\operatorname{Cov}(Y_1,Y_2\mid X)
=\rho-\kappa^2(\mu_1+\rho\mu_2)(\rho\mu_1+\mu_2)=0.
\]
Thus \(Y_j=a_jX+N_j\) with independent Gaussian \(N_1,N_2,X\), exactly the CEO model above. For the decoder estimate \(\widehat X=\kappa\mu^T\widehat Y\),
\[
\mathbb E(X-\widehat X)^2
=\gamma+\kappa^2\mu^T\widehat D\mu
\le \gamma+\kappa^2\mu^TD_\phi\mu.
\]
Apply (16) to get a second lower bound \(R_{\rm sum}(\phi)\), the Gaussian CEO minimum at scalar error target \(\gamma+\kappa^2\mu^TD_\phi\mu\).

It remains to evaluate the min-max of (18) and this CEO bound. Suppose a matrix \(D_*\in\mathcal D_G\) has diagonal \((d_1,d_2)\), and write
\[
D_*=\begin{pmatrix}d_1&c_*\\c_*&d_2\end{pmatrix}.
\]
Every \(D\in\mathcal D_G\) has positive off-diagonal \(c\) and, with \(p=D_{11}D_{22}\), the off-diagonal inverse identity gives
\[
\frac{c}{p-c^2}=\frac{\rho}{q},\qquad
c=c(p)=\frac{-q+\sqrt{q^2+4\rho^2p}}{2\rho}.
\tag{19}
\]
Thus \(c(p)\) is increasing and \(|D|=p-c(p)^2=(q/\rho)c(p)\) is also increasing in \(p\). For \(\mu=(\sqrt{d_2},\sqrt{d_1})\),
\[
\mu^TD\mu=d_2D_{11}+d_1D_{22}+2\sqrt{d_1d_2}\,c(p)
\ge2\sqrt{d_1d_2}\,[\sqrt p+c(p)].
\tag{20}
\]
The right side increases strictly in \(p\), with equality at \(D_*\). Therefore \(D_*\) minimizes \(\frac12\log_2(|K|/|D|)\) over all \(D\in\mathcal D_G\) satisfying \(\mu^TD\mu\le\mu^TD_*\mu\). This proves the needed supporting-\(\mu\) lemma directly.

Let \(\theta_*=c_*/\sqrt{d_1d_2}>0\). At \(\phi=\theta_*\), (18) and (16) both equal
\[
\frac12\log_2\frac{|K|}{|D_*|}.
\]
If \(\phi\ge\theta_*\), \(R_{\rm coop}(\phi)\ge R_{\rm coop}(\theta_*)\). If \(\phi\le\theta_*\), then \(\mu^TD_\phi\mu=2d_1d_2(1+\phi)\le\mu^TD_*\mu\), so the feasible set in the CEO minimization is smaller and \(R_{\rm sum}(\phi)\ge R_{\rm sum}(\theta_*)\). Hence every code has sum rate at least \(\frac12\log_2(|K|/|D_*|)\) whenever \(D_*\) exists.

For \(D_*\) with prescribed diagonal, the off-diagonal inverse equation is
\[
\frac{\theta_*}{(1-\theta_*^2)\sqrt{d_1d_2}}=\frac{\rho}{q}.
\]
It has the unique positive solution
\[
\theta_*=\frac{\sqrt{q^2+4\rho^2d_1d_2}-q}{2\rho\sqrt{d_1d_2}},
\quad
1-\theta_*^2=\frac{2}{\beta(d_1,d_2)},
\quad
|D_*|=\frac{2d_1d_2}{\beta(d_1,d_2)}.
\tag{21}
\]
Thus the lower bound is exactly the third inequality in (1).

The matrix \(D_*\) belongs to \(\mathcal D_G\) exactly when, after relabeling so \(d_1\le d_2\),
\[
d_2\le1,\qquad d_2\le q+\rho^2d_1.
\tag{22}
\]
Indeed, the diagonal precisions are
\[
\lambda_1^*=\frac{\beta}{2d_1}-\frac1q,\qquad
\lambda_2^*=\frac{\beta}{2d_2}-\frac1q;
\]
\(\lambda_2^*\ge0\) is equivalent, after squaring nonnegative sides, to \(d_2\le q+\rho^2d_1\), and \(\lambda_1^*\ge\lambda_2^*\). Condition (22) is precisely the diagonal region in which the CEO/covariance argument is needed.

If \(d_1\le d_2\), \(d_1<1\), and \(d_2>q+\rho^2d_1\), the sum constraint in (1) is redundant. At the threshold \(b=q+\rho^2d_1\),
\[
\frac{q\,\beta(d_1,b)}{2d_1b}=\frac1{d_1}.
\]
The function \(d\mapsto [1+\sqrt{1+4\rho^2d_1d/q^2}]/d\) is decreasing for \(d>0\): differentiating gives a negative numerator proportional to \(-(\sqrt{1+4\rho^2d_1d/q^2}+1)^2\). Hence the sum-rate lower bound in (1) is at most \(\frac12\log_2(1/d_1)\). The first face inequality itself implies \(R_1+R_2\ge\frac12\log_2(1/d_1)\): writing \(x=2^{-2R_1}\), \(y=2^{-2R_2}\), either its logarithm is active and \(x\le d_1/(q+\rho^2y)\), or it is inactive and \(d_1\ge q+\rho^2y\ge y\); in both cases \(xy\le d_1\). If \(\min(d_1,d_2)\ge1\), the sum bound is zero because \(q[1+\sqrt{1+4\rho^2p/q^2}]/(2p)\) is decreasing for \(p=d_1d_2\ge1\) and equals one at \(p=1\). Constant reconstructions attain zero rate. This completes the sum converse for every positive distortion pair.

## Exact-region achievability

The Gaussian product test channels (2) and coding region (4) achieve the whole intersection (1).

If \(\min(d_1,d_2)\ge1\), constant zero estimates suffice. Otherwise relabel so \(0<d_1\le d_2\) and \(d_1<1\).

If \(d_2>q+\rho^2d_1\), the sum constraint is redundant by the preceding calculation. The first scalar face is achievable by (7); its companion distortion obeys
\[
D_{22}(\lambda)=\frac{q+\rho^2d_1+q^2\lambda_2}{(1+q\lambda_2)^2}
\le q+\rho^2d_1<d_2.
\tag{23}
\]
The inequality follows by differentiating: the derivative is
\[
\frac{q[q-2(q+\rho^2d_1)-q^2\lambda_2]}{(1+q\lambda_2)^3}<0,
\]
and the value at \(\lambda_2=0\) is \(q+\rho^2d_1\). Hence every point satisfying the first face is achievable with both distortion constraints; the first-face converse shows this is exactly the region.

It remains to consider \(d_2\le q+\rho^2d_1\). Then (22) holds. Construct \(D_*\) and \(\lambda^*\) by (21)–(22); the test channel \(U^*\) has distortions exactly \(d_1,d_2\), and rates
\[
r_1^*=\frac12\log_2\frac{t(\lambda^*)}{1+\lambda_2^*},\quad
r_2^*=\frac12\log_2\frac{t(\lambda^*)}{1+\lambda_1^*},\quad
s^*=\frac12\log_2\frac{q}{|D_*|}.
\tag{24}
\]
Its coding region includes every pair with \(R_1\ge r_1^*,R_2\ge r_2^*,R_1+R_2\ge s^*\).

Take any pair in (1). If \(R_1\ge r_1^*\) and \(R_2\ge r_2^*\), its sum inequality and (24) put it in this test channel’s coding region. If \(R_1<r_1^*\), the first face inequality requires \(R_1\ge R_{1,\min}\) and \(R_2\) at least its face-boundary value. Formula (7) produces that boundary point. As \(R_1\) decreases, its \(\lambda_2\) increases because
\[
2^{2R_1}=\frac{1+q\lambda_2}{d_1(1+\lambda_2)}
\]
is strictly decreasing in \(\lambda_2\). Since \(r_1^*\) corresponds to \(\lambda_2^*\), this gives \(\lambda_2\ge\lambda_2^*\); (23) and its strict monotonicity show \(D_{22}(\lambda)\le D_{22}(\lambda^*)=d_2\). Thus this point of the first face is achieved under both distortion constraints, and any larger \(R_2\) is achieved by rate enlargement. The case \(R_2<r_2^*\) is symmetric. These cases cover every point in (1), proving achievability.

All achievability statements first use strict rate slack and finite partitions; closure and diagonalization give the boundaries. Conversely, the face and sum inequalities hold for each finite code, and their right sides are continuous in the positive \(d_j\), so they pass to the operational closure.

## Source audit and scope control

The actual source read for this supplement is Wagner, Tavildar, and Viswanath, “Rate Region of the Quadratic Gaussian Two-Encoder Source-Coding Problem,” author preprint arXiv:cs/0510095v3, local PDF and extraction recorded in the r5 source manifest. I read the complete relevant source sections: the model and Theorem 1 (§2); direct Gaussian test-channel/Slepian–Wolf discussion (§3); diagonal Gaussian test-channel set, scalar-face interface, and \(\mu\)-sum setup (§4); error-covariance and min-max proof (§5); and Appendices B–E, including the original CEO appeal (Appendix C), the supporting-\(\mu\) argument (Appendix D), and test-channel achievability geometry (Appendix E). The source itself gives only a high-level random-coding achievability outline in §3 and appeals to prior CEO results in Appendix C. This note supplies a finite-approximation coding justification and replaces the CEO appeal with the explicit Fisher-information/Van-Trees proof above. No exactness claim is extended beyond the model stated at the start.
