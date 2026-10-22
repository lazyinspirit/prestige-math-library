from pathlib import Path

RUN = 'inverse-problems-knot-theory-all-109-2026-10-19'
BASE = Path('research') / (RUN + '-owner-open-frontiers-round1')

def write(old, new, title, statement, facts, proof, disposition):
    source = (BASE/'before/items'/(old+'.md')).read_text()
    original = source.split('## Open problem\n',1)[1].split('\n## Open problem references',1)[0].strip()
    refs = source.split('## Open problem references\n',1)[1].split('\n## Status',1)[0].strip()
    sources = source.split('sources:\n',1)[1].split('\n---',1)[0]
    front = f'''---
id: {new}
kind: example
title: "{title}"
status: draft
origin: pipeline
pipeline_run: {RUN}
dependency_level: 0
deps: []
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: "No additional choice axiom is used; the laws, finite predictors and explicit constructions are supplied."
sources:
{sources}
---
'''
    body = '\n## Example\n\n'+statement+'\n\n## Example references\n\n'+refs+'\n\n## Original question\n\n'+original+'\n\n## Facts & Assumptions\n\n'+facts+'\n\n## Verification\n\n'+proof+'\n\n## Scope of the resolution\n\n'+disposition+'\n'
    (BASE/'item-donors'/(new+'.md')).write_text(front+body)

write('op-ip-calibration-under-score-and-solver-error',
'ex-ip-integrated-score-error-misses-euler-grid-times',
'Integrated score error can miss every Euler evaluation',
r'''In the finite-dimensional Gaussian credible-ball question reproduced below, choose $d=n=1$, $R=1$, $\sigma=1$, $T=1$, $\beta(t)=1$, and $\gamma=1/4$, with arbitrary positive $p,s,a$. Take the numerical operator equal to the true operator, so $\delta_A=0$. For every integer $K\ge1$ there is a jointly Borel finite score field with integrated score error exactly zero, whose Euler terminal law is $N(1,K^{-1})$ for every observation. With $M=K$ independent terminal draws, the resulting empirical ball has frequentist coverage tending to zero at truth $\theta=0$, although the stated uniform boundary-margin condition holds with exponent $\kappa=1$. The exact credible-ball baseline satisfies $\delta^0_{1,1/4}<3/4$. Consequently no bound in that question can have $\Phi\to0$ uniformly over its original score class as $(\delta_A,\varepsilon_s,K^{-1},M^{-1/2})\to(0,0,0,0)$. The original formulation is retained verbatim under Original question.''',
r'''**Given:** The scalar parameter choices in the Example and the original score-error, Euler and empirical-ball definitions reproduced below it.

[A1] Write $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ and $\Phi(x)=\int_{-\infty}^x\phi(z)\,dz$. A standard Gaussian has density $\phi$, mean zero, variance one and tail probability tending to zero at infinity.

[A2] Let $q=3/4$ and let $r>0$ solve $P\{|G|\le\sqrt2r\}=q$ for a standard Gaussian $G$. Continuity and strict positivity of $\phi$ give existence and uniqueness of $r$.''',
r'''**Given:** The scalar model and [A1]–[A2].

1.1 Completing the square in $e^{-u^2/2}e^{-(Y-u)^2/2}$ gives posterior $N(Y/2,1/2)$, so its exact credible interval is $[Y/2-r,Y/2+r]$. Under truth $\theta\in[-1,1]$, $Y=\theta+G$ and the exact coverage is $c(\theta)=P\{|\theta/2-G/2|\le r\}$. This is a continuous strictly positive function of $\theta$, and is at most one. By compactness of $[-1,1]$ it has a positive minimum $c_*>0$. Therefore $\delta^0_{1,1/4}\le\max\{q-c_*,1-q\}<q$. [A1, A2, algebra]

1.2 The variable $\theta/2-G/2$ has a density bounded by $2/\sqrt{2\pi}$ uniformly in $\theta$. The event $\bigl||\theta/2-G/2|-r\bigr|\le u$ is contained in two intervals of total length at most $4u$. Thus its probability is at most $8u/\sqrt{2\pi}$. The required margin holds, for example with $\kappa=1$, $u_0=1$ and $C_{\mathrm{ac}}=8/\sqrt{2\pi}$. [A1, step 1.1, algebra]

2.1 Put $h=1/K$ and let $\mathcal G_K=\{1-kh:0\le k<K\}$. Away from this finite set of times, use the exact noised-posterior score. At each $t\in\mathcal G_K$ set $s_t^Y(x)=(1-x)/h-x/2$. This finite-valued jointly Borel field has zero integrated score error: its discrepancy from the exact score is supported on the finite, Lebesgue-null set $\mathcal G_K$ in time. The noised posterior has mean $e^{-t/2}Y/2$ and variance $1-e^{-t}/2$: the integrating-factor solution of the linear forward equation is $e^{-t/2}X_0+e^{-t/2}\int_0^te^{u/2}\,dW_u$, whose independent Gaussian integral has variance $1-e^{-t}$ (use dyadic Brownian-increment sums and pass their Gaussian characteristic functions to the mean-square limit). Its exact score is therefore affine in $x$, so the inner Gaussian error integral is finite at every time. The zero-error conclusion holds for every observation and hence uniformly over all truths. [given, step 1.1, construct, algebra]

2.2 At every Euler step the deterministic update becomes $x+h(x/2+s_t^Y(x))=1$. Thus each new state is $1+\sqrt h\,\zeta_k$, independently of its input and of $Y$, and the terminal law is $N(1,h)$. For $M=K$, write the independent terminal draws as $1+K^{-1/2}G_i$. If $V_K=\max_{i\le K}|G_i|$, then the empirical center differs from one by at most $K^{-1/2}V_K$ and every empirical distance to that center is at most $2K^{-1/2}V_K$. Hence the empirical radius has that same upper bound. [A1, step 2.1, construct, algebra]

3.1 The Gaussian density gives $P\{|G|>v\}\le2e^{-v^2/2}$ for $v\ge1$: integrate $x\phi(x)/v$ on $[v,\infty)$ and use $1/(v\sqrt{2\pi})\le1$. The union bound then gives $P\{V_K>K^{1/4}\}\le2K e^{-\sqrt K/2}\to0$. On the complementary event the center is at least $1-K^{-1/4}$ and the radius at most $2K^{-1/4}$, so for all sufficiently large $K$ the empirical interval excludes truth zero. Its coverage therefore tends to zero, and its deviation from $q$ tends to $q>\delta^0_{1,1/4}$. Since both error norms are zero and $K^{-1},M^{-1/2}\to0$, a uniformly vanishing $\Phi$ would contradict this strict gap. [A1, step 1.1, step 1.2, step 2.2, algebra] ∎''',
'This resolves the requested uniformly vanishing-error guarantee negatively under the original score hypothesis. Time-integrated error does not control pointwise values at a deterministic solver grid. A constant worst-case coverage bound remains possible; no impossibility of all numerical functions is asserted. No Bayesian calibration claim is imported from a conformal theorem.')

write('op-ip-finite-compute-multimodal-posterior-fidelity',
'ex-ip-ideal-score-error-allows-unbounded-euler-wasserstein',
'Ideal-marginal score error allows unbounded finite-Euler Wasserstein error',
r'''For the separated-mixture question reproduced below, there are admissible fixed one-dimensional parameters with $L=2$, fixed positive score-error allowance $\varepsilon_s$, and every fixed integer $J\ge2$, for which the supremum of the displayed expected fidelity loss over the original finite-valued Borel score class is $+\infty$, for every finite $M\ge1$. Each individual field in the construction has a finite-first-moment Euler chain and obeys the required score bound at every time. Thus the original ideal-marginal $L^2$ hypothesis supplies no finite uniform bound for the requested loss, however large the fixed budget $JM$ is. The original question is retained verbatim under Original question.''',
r'''**Given:** Choose $d=1$, $\pi=(N(-a,v)+N(a,v))/2$ with $a,v>0$ and $2a\ge8\sqrt v$. Choose $L=2$, $w_{\min}=1/2$, $M_0=a$, $\Delta=2a$, $v_{\min}=v_{\max}=v$, $T>0$, $\beta=1$, $\varepsilon_s>0$, $J\ge2$ and $h=T/J$. The extraneous positive parameter called $\sigma$ in the original formulation may be arbitrary; it is not used by its displayed sampler.

[A1] The integrating factor $e^{t/2}$ in the scalar forward equation gives $X_t=e^{-t/2}X_0+e^{-t/2}\int_0^t e^{u/2}\,dW_u$. The stochastic integral is the mean-square limit of deterministic dyadic sums of independent Gaussian increments; these sums are centered Gaussian, with variances tending to $\int_0^te^u\,du=e^t-1$, and are independent of $X_0$. The limit is therefore Gaussian with that variance and independent of $X_0$, as follows by taking limits of its Gaussian characteristic functions. At time $t$, the noised target is the symmetric Gaussian mixture with means $\pm e^{-t/2}a$ and common variance $v_t=e^{-t}v+1-e^{-t}>0$. Its exact score is a posterior-weighted average of $-(x-e^{-t/2}a)/v_t$ and $-(x+e^{-t/2}a)/v_t$, so $|s_t(x)|\le(|x|+a)/\min\{v,1\}$ and is continuous. These formulas follow directly by differentiating the sum of the two Gaussian densities.

[A2] A convolution with a nondegenerate Gaussian has a strictly positive continuous density: continuity follows from the bounded Gaussian derivative, and positivity from its positive kernel. Gaussian densities have finite first moments and exponentially decaying tails.''',
r'''**Given:** The fixed parameters and Gaussian identities in [A1]–[A2].

1.1 Use the exact score at all grid times before the last two updates. All those states have finite first moment because each exact-score drift has linear growth by [A1]. Let $U$ be the state before the penultimate update, corresponding to ideal time $2h$. Its law has a strictly positive continuous density $\rho$: for $J=2$ it is exactly $p_T$, and otherwise the last preceding nondegenerate Euler noise gives [A2]. Since $p_{2h}$ is also positive and continuous, the density ratio $\rho/p_{2h}$ has positive minimum $c$ and finite maximum $C$ on $[-1,1]$. [A1, A2, construct]

1.2 For every sufficiently small $q>0$, choose the centered interval $A_q\subseteq[-1,1]$ with $\int_{A_q}p_{2h}(x)\,dx=q$. Such an interval exists by continuity and positivity of that density. Then $cq\le P\{U\in A_q\}\le Cq$. Put $b_q=\varepsilon_s/(2\sqrt q)$ and add $b_q\mathbf1_{A_q}$ to the score at time $2h$. Its squared ideal-marginal error is exactly $\varepsilon_s^2/4$. Set $f(x)=(1+h/2)x+hs_{2h}(x)$ and $H=\sup_{|x|\le1}|f(x)|<\infty$. After this update the state is $V=f(U)+hb_q\mathbf1_{A_q}(U)+\sqrt h\,G$. [A1, step 1.1, construct, algebra]

2.1 Let $I_q=[hb_q-H-\sqrt h,hb_q+H+\sqrt h]$, and let $r_q=\int_{I_q}p_h(x)\,dx>0$. On $\{U\in A_q,|G|\le1\}$ the state $V$ lies in $I_q$, so $P\{V\in I_q\}\ge cqP\{|G|\le1\}$. The ideal density $p_h$ is a fixed Gaussian mixture. Since the interval width is constant and its center $hb_q$ tends to infinity, its Gaussian density formula gives constants $C_1,c_1>0$, independent of small $q$, such that $r_q\le C_1e^{-c_1b_q^2}$. For example, once $hb_q\ge2(H+\sqrt h+a)$, every point of the interval is at distance at least $hb_q/2$ from either component mean; use the largest fixed variance in its Gaussian exponent and the constant interval length. [A1, A2, step 1.2, algebra]

2.2 At the final evaluation time $h$ add $d_q\mathbf1_{I_q}$ to the exact score, where $d_q=\varepsilon_s/(2\sqrt{r_q})$. This second squared ideal-marginal error is also $\varepsilon_s^2/4$. At all other times use the exact score. These modifications at two distinct times define a jointly Borel finite-valued field with the original supremum-in-time score bound. Every individual field has finite first moments at all Euler steps: it is an affine-growth exact score plus two bounded, finite-amplitude additions. [A1, step 1.2, step 2.1, construct, algebra]

3.1 The first moment of $V$ is bounded uniformly as $q\downarrow0$: the added term has expectation at most $hb_qCq= hC\varepsilon_s\sqrt q/2$, while $E|f(U)|$ and $E|\sqrt hG|$ are fixed and finite. The terminal state is $X=(1+h/2)V+hs_h(V)+hd_q\mathbf1_{I_q}(V)+\sqrt hG'$. By [A1] the absolute expectation of the first two terms is uniformly bounded; $EG'=0$. Therefore $EX\ge h\varepsilon_scqP\{|G|\le1\}/(2\sqrt{r_q})-C_2\to+\infty$, because $b_q^2=\varepsilon_s^2/(4q)$ and the exponential bound in step 2.1 dominates every power of $q$. [A1, step 1.2, step 2.1, step 2.2, algebra]

4.1 Every coupling of two finite-first-moment probabilities satisfies $|EX-EY|\le E|X-Y|$ by the integral triangle inequality. Thus $W_1(\widehat\pi_{J,M},\pi)\ge|M^{-1}\sum_iX^{(i)}|$ because the target mean is zero. Taking expectations gives $EW_1\ge|EX|$, which tends to infinity by step 3.1 for every finite $M$. The other two terms in the requested fidelity loss are nonnegative. Its supremum is consequently infinite despite fixed positive score-error allowance and fixed admissible target parameters. [given, step 2.2, step 3.1, algebra] ∎''',
'The negative answer concerns every positive error allowance and every finite J>=2. It does not assert the same obstruction at J=1 or at exactly zero error. The mechanism is mismatch between ideal marginal mass and actual chain mass, not merely missing a mode by iid sampling. No numerical observation or source-specific failure experiment is used as the proof.')

write('op-ip-distributionally-robust-inversion-under-operator-shift',
'ex-ip-robust-ellipsoid-minimax-shift-rate',
'Worst-law ellipsoid recovery has no training-size rate',
r'''For the robust minimax value $\mathfrak R_N(\rho_X,\rho_A)$ in the original question reproduced below, fix $p,s>0$, $R,\sigma>0$, $N\ge1$, $\rho_X\ge0$ and $0\le\rho_A<1/2$. Put
$$Q_{p,s}(R,\sigma)=R^2\min\left\{1,(\sigma/R)^{4s/(2s+2p+1)}\right\}.$$
There is $c_{p,s}>0$, depending only on $p,s$, such that
$$c_{p,s}\bigl(Q_{p,s}(R,\sigma)+R^2\rho_A^2\bigr)\le\mathfrak R_N(\rho_X,\rho_A)\le\min\left\{R^2,2Q_{p,s}(R,\sigma)+R^2\rho_A^2\right\}.$$
These bounds hold for every training size and truth-law shift radius. For fixed positive $p,s,R$, along any sequence of the remaining parameters the risk tends to zero if and only if both $\sigma\to0$ and $\rho_A\to0$. In particular, increasing $N$ with fixed positive noise does not force the worst-law risk to zero. The original question, including both distinct shift classes, is retained verbatim under Original question.''',
r'''**Given:** All data spaces, training laws, test laws, learners and shift classes in the original question. Let $e_j$ denote the jth coordinate vector. Let $\Phi$ be the standard normal distribution function and put $b=\Phi(-1)>0$.

[A1] A scalar observation $V=\delta U+\sigma G$ with $U$ uniform on $\{-1,1\}$ and independent standard Gaussian $G$ has minimum sign-testing error $\Phi(-\delta/\sigma)$ for $\delta>0$: the two Gaussian densities cross at zero, and choosing the larger density pointwise minimizes the error integral. Their ratio is $\exp(2\delta V/\sigma^2)$.

[A2] For vectors $x,a,b$ in a real Hilbert space, $\|x-a\|^2+\|x-b\|^2=2\|x-(a+b)/2\|^2+\|a-b\|^2/2$. This identity follows by expansion of the squares.''',
r'''**Given:** The original robust minimax model and [A1]–[A2].

1.1 The zero estimator gives risk at most $R^2$ for every allowed law and operator. If $\sigma<R$, put $t=(R/\sigma)^{2/(2s+2p+1)}>1$ and $k=\lfloor t\rfloor\ge1$. Use the Borel finite-coordinate estimator $\widehat\theta_j=j^pY_j$ for $j\le k$ and zero otherwise; it ignores the training data. Under any test truth its retained error is $P_kE\theta+(\sigma j^p\xi_j)_{j\le k}$ and its omitted error is $-(I-P_k)\theta$. These components are orthogonal, and the centered noise is independent of the truth. Hence its expected squared error is at most $R^2\rho_A^2+R^2(k+1)^{-2s}+\sigma^2\sum_{j=1}^k j^{2p}$. Because $k+1>t$ and $\sum_{j\le k}j^{2p}\le k^{2p+1}\le t^{2p+1}$, the last two terms are at most $2R^2t^{-2s}=2Q_{p,s}$. If $\sigma\ge R$, $Q_{p,s}=R^2$ and the zero estimator already gives the asserted upper bound. Taking the better of the zero and cutoff rules proves the displayed upper bound uniformly over both shift classes. [given, construct, algebra]

2.1 For the noise lower bound first suppose $\sigma\ge R$. Set $E=0$ and $\mu=\mu_0=(\delta_{Re_1}+\delta_{-Re_1})/2$. These laws have Wasserstein distance zero and are admissible at every $\rho_X$. The training sample is independent of the fresh test sign, and all other test coordinates are independent pure noise. Given those ancillary variables, testing the fresh sign reduces to [A1] with $\delta=R$. Thus any prediction of its first coordinate has squared error at least $R^2$ whenever its induced sign test is wrong, and its integrated risk is at least $R^2\Phi(-R/\sigma)\ge bR^2=bQ_{p,s}$. At a zero predicted coordinate, choose either sign; the squared error is still $R^2$. [A1, given, construct, algebra]

2.2 If $\sigma<R$, use $t$ from step 1.1 and $k=\lceil t\rceil\le2t$. On the coordinate block $k\le j<2k$, put $a=2^{-s-1}Rk^{-s-1/2}$ and let $\mu_0=\mu$ be the uniform law on the $2^k$ vectors having independent coordinates $\theta_j=\pm a$ on this block and zero elsewhere. Each such vector lies in the ellipsoid because $\sum_jj^{2s}\theta_j^2\le k(2k)^{2s}a^2=R^2/4$. Again choose $E=0$. For every block coordinate, its test sign is independent of the whole training sample and of all other test coordinates. Its signal amplitude is $j^{-p}a\le k^{-p}a\le\sigma$, by the definition of $t$ and $k\ge t$. Applying the density-crossing argument in [A1], conditional on all ancillary data, gives sign error at least $b$. Summing the coordinate squared errors gives risk at least $bka^2=b2^{-2s-2}R^2k^{-2s}\ge b2^{-4s-2}Q_{p,s}$. Finite averaging over the sign prior and integration over the independent ancillary observations suffice; no choice of an unknown prior by the learner is being assumed. [A1, step 1.1, construct, algebra]

3.1 Put $r=\rho_A$. If $r>0$, define $a=R/(1+r)$, $b_0=R$ and take the same source and test law $\mu_0=\mu=(\delta_{ae_1}+\delta_{b_0e_1})/2$. Compare the two allowed operators $E_1=0$ and $E_2=-r(1+r)^{-1}P_1$, whose norms are at most $r$. In the first world, the test truth $ae_1$ has observation mean $ae_1$; in the second, truth $b_0e_1$ has the same mean because $(I+E_2)b_0e_1=ae_1$. The joint law of the full training sample and this conditional test observation is identical in the two cases, including every noisy coordinate. Calling that common law $H$, the corresponding two full test risks satisfy $R_1\ge\tfrac12E_H\|G-ae_1\|^2$ and $R_2\ge\tfrac12E_H\|G-b_0e_1\|^2$. Therefore [A2] gives $\max(R_1,R_2)\ge(b_0-a)^2/8=R^2r^2/[8(1+r)^2]\ge R^2r^2/18$. This holds for every Borel learner and all training sizes. If $r=0$, the asserted zero operator lower bound is immediate. [A2, given, construct, algebra]

4.1 Steps 2.1–2.2 give $\mathfrak R_N\ge c_0Q_{p,s}$ with $c_0=b\min\{1,2^{-4s-2}\}>0$, and step 3.1 gives $\mathfrak R_N\ge R^2\rho_A^2/18$. The maximum of these bounds is at least $\tfrac12\min\{c_0,1/18\}(Q_{p,s}+R^2\rho_A^2)$, proving the lower bound with that explicit positive $c_{p,s}$. For fixed $p,s,R>0$, the upper bound tends to zero when $\sigma,\rho_A\to0$, and the lower bound forces both limits whenever the risk tends to zero. Both lower constructions have $\mu=\mu_0$, so they remain admissible even at zero truth-law shift; the upper construction ignores the training law entirely. This explains why $N$ and $\rho_X$ do not enter the matching-order rate for this worst-law formulation. [step 1.1, step 2.1, step 2.2, step 3.1, algebra] ∎''',
'This gives matching-order upper and lower bounds for the exact original worst-law problem, including simultaneous unknown relative-operator shift and truth-law Wasserstein shift. It neither identifies the exact minimax constant nor says that finite-sample distribution learning is unimportant for a fixed restricted prior family. The source paper\'s conditional-law DRO bound is adjacent context; the two shift mechanisms and finite sign-prior proofs above are local and do not substitute its finite-dimensional hypotheses.')

write('op-ip-neural-operator-sample-complexity-for-inverse-maps',
'ex-ip-coordinate-free-fno-inverse-risk-obstruction',
'Coordinate-free Fourier inverse maps have an odd-mesh risk floor',
r'''Consider the complete original Fourier architecture and diagonal inverse question reproduced below. For every odd integer $m\ge3$, every $N\ge1$, and every admissible bounded parameter class with a measurable empirical minimizer, its risk satisfies
$$\mathfrak R^{\mathrm{ERM}}_{N,m}(S,B)\ge\frac{R^2(3^p-2^p)^2}{4\,3^{2(p+s)}}>0.$$
The same bound holds for every measurable learner whose realized predictor belongs to the stated coordinate-free Fourier class, whether or not it minimizes empirical risk. On the other hand, the unrestricted risk tends to zero as $m\to\infty$ for fixed $p,s,R,\sigma>0$, independently of $N$. Thus no growth of $N,S,B$ can make this original architecture attain the vanishing unrestricted risk along an odd-mesh subsequence. This is a partial resolution: no complete joint bounded-class rate, or corresponding fixed positive even-mesh floor, is asserted. The original question is retained verbatim under Original question.''',
r'''**Given:** The original real Fourier basis $\phi_1=1$, $\phi_2=\sqrt2\cos z$, $\phi_3=\sqrt2\sin z$ and all higher complete cosine/sine pairs; the architecture has only constant pointwise channel weights and biases, Fourier multipliers and a scalar pointwise Lipschitz activation. Its parameters may depend on all training data but are fixed during test evaluation.

[A1] Translation $T_\alpha u(z)=u(z-\alpha)$ is an isometry of $L^2(\mathbb T)$, sends $\phi_2$ to $\phi_3$ for $\alpha=\pi/2$, and preserves each full two-dimensional cosine/sine frequency pair. The first-m-coordinate subspace is translation-invariant when $m$ is odd.

[A2] A vector with distribution $N(0,\tau^2I_m)$ is invariant under every orthogonal matrix: its density is a constant times $e^{-\|x\|^2/(2\tau^2)}$, and orthogonal changes of variables preserve norm and volume.

[A3] $\|x-a\|^2+\|x-b\|^2\ge\|a-b\|^2/2$ by completing the square.''',
r'''**Given:** The original architecture, training and test model, and [A1]–[A3].

1.1 Each Fourier multiplier commutes with translation because the kth translated Fourier coefficient is multiplied by the scalar $e^{-ik\alpha}$, which commutes with its channel matrix. Every constant channel matrix, constant bias and coordinatewise scalar activation also commutes with translation. By induction through the lift, all layers and output map, the realized scalar output field is translation-equivariant. The layer fields are in $L^2$: a globally Lipschitz activation has linear growth, the pointwise weights are finite and the finite Fourier multipliers are bounded. For odd $m$, projection onto the first m coefficients commutes with translation by [A1]. Hence the zero-extended output map $F=I_m\Psi_m$ satisfies $F(U_\alpha x)=T_\alpha F(x)$, where $U_\alpha$ is the orthogonal translation matrix on the retained coefficients. This holds for every individual parameter array, also after data-dependent selection. [A1, given, construct, algebra]

2.1 Put $a=R3^{-(p+s)}$, choose $\theta_c=a2^pe_2$ and $\theta_s=a3^pe_3$, and let $\mu=(\delta_{\theta_c}+\delta_{\theta_s})/2$. These truths lie in the ellipsoid because their weighted squared norms are at most $a^23^{2(p+s)}=R^2$. Their forward coefficient vectors are respectively $ae_2$ and $ae_3$, related by $U=U_{\pi/2}$. Conditional on any training sample, the test truth is still an independent equal-probability draw from these two values. Couple the corresponding test noises as $\eta$ and $U\eta$; by [A2] both have the required $N(0,\sigma^2m^{-1}I_m)$ law. [A1, A2, given, construct, algebra]

2.2 For fixed training data, let $F$ be its selected predictor. By step 1.1, $F(ae_3+U\eta)=T_{\pi/2}F(ae_2+\eta)$. Translating the first output and truth preserves their norm. Consequently the conditional average of the two squared risks is $\tfrac12E[\|T_{\pi/2}F(ae_2+\eta)-T_{\pi/2}\theta_c\|^2+\|T_{\pi/2}F(ae_2+\eta)-\theta_s\|^2]$, which is at least $\|T_{\pi/2}\theta_c-\theta_s\|^2/4=a^2(3^p-2^p)^2/4$ by [A3]. This lower bound is independent of the training sample. Integrating over it, taking the worst law and then the infimum over selectors proves the stated floor. [A1, A3, step 1.1, step 2.1, algebra]

3.1 To see unrestricted vanishing without training, put $k_m=\min\{m,\max\{1,\lfloor m^{1/(2(2p+1))}\rfloor\}\}$. Output $j^pX_{m,j}$ for $j\le k_m$ and zero otherwise. Its risk for every truth is at most $\sigma^2m^{-1}\sum_{j\le k_m}j^{2p}+R^2(k_m+1)^{-2s}\le\sigma^2m^{-1}k_m^{2p+1}+R^2(k_m+1)^{-2s}\to0$. It is a Borel predictor and is allowed in the unrestricted class. This proves the contrast with the positive odd-mesh architecture floor. [given, construct, algebra]

4.1 The mismatch arises because the diagonal inverse rescales the first cosine and sine by different factors $2^p$ and $3^p$, while the coordinate-free architecture must respect translation between them. It is independent of finite training or parameter-size limitations. The proof deliberately uses odd $m$ so both the input noise law and retained output subspace are translation-invariant; it supplies no identical assertion for even $m$, whose last frequency pair is incomplete. [step 1.1, step 2.2, step 3.1, algebra] ∎''',
'The odd-mesh consistency subquestion is answered negatively, and the unrestricted vanishing comparison is proved. The full requested joint N,m,S,B minimax rate is not resolved here; in particular even meshes break the complete-pair symmetry used by the lower bound, and different activations/parameter budgets may have distinct approximation behavior. This is not the EIT question: the generalized EIT architecture has coordinate/chart lifting, so this coordinate-free translation obstruction is not transferred to it.')
