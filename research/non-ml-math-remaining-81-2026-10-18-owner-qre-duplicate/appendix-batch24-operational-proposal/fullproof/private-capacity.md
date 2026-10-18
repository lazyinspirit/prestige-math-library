# Private capacity: strong-secrecy direct code and converse

Isolated construction. The operational definition uses uniform messages, arbitrary mixed input states, average decoding error and unnormalized Holevo leakage to the complementary output. It does not require maximal error or per-message secrecy; no such stronger condition is assumed in this proof.

## Finite-ensemble wiretap direct code

Fix a finite input ensemble $(p_x,\rho_x)$ for a channel $\mathcal N$, with receiver states $\beta_x=\mathcal N(\rho_x)$ and complementary states $\epsilon_x=\mathcal N^c(\rho_x)$. Write $\chi_B,\chi_E$ for the two Holevo informations. Every $0<R<\chi_B-\chi_E$ is privately achievable, with average error and unnormalized Holevo leakage both tending to zero exponentially up to a polynomial factor.

Choose $r$ with $\chi_E<r$ and $R+r<\chi_B$, and then choose $\eta>0$ so $r>\chi_E+2\eta$ and $R+r<\chi_B-2\eta$. Take $M_n=\lfloor e^{nR}\rfloor$, $L_n=\lceil e^{nr}\rceil$ and draw $M_nL_n$ independent words $X^n(m,l)$ with law $p^{\otimes n}$. For message $m$, the encoder inputs the mixed state
$$\rho_{m,n}=\frac1{L_n}\sum_{l=1}^{L_n}\bigotimes_{i=1}^n\rho_{X_i(m,l)}.$$
This is a legitimate finite private randomization of the operational input state; the realized codebook is public.

For Bob use the global and conditional spectral projectors $P,Q_{x^n}$ from finite-estimates.md, for the receiver ensemble. Put $\Gamma_{m,l}=P Q_{X^n(m,l)}P$, form the square-root POVM from all $\Gamma_{m,l}$, and assign its kernel/failure outcome to one message. The existing finite Hayashi–Nagaoka operator inequality bounds each pair-decoding error by twice its own projector failure plus four times its interference sum. The estimate is valid without a uniform per-word projector-acceptance hypothesis: only its average is needed here. Specifically,
$$\mathbb E[1-\operatorname{tr}(\Gamma_{m,l}\beta_{X^n(m,l)})]\le\varepsilon_n+2\sqrt{\varepsilon_n},$$
where $\varepsilon_n\le Ce^{-cn}$ bounds both averaged projector failures. This follows by $\operatorname{tr}(Q_xP\beta_xP)\ge\operatorname{tr}(Q_x\beta_x)-\|P\beta_xP-\beta_x\|_1$ and the actual gentle-measurement bound followed by Jensen. For two different independent codewords, the spectral eigenvalue and rank bounds give
$$\mathbb E\operatorname{tr}(\Gamma_j\beta_{X_i^n})
=\operatorname{tr}[(P\mathbb E Q_{X_j^n}P)(P\bar\beta^{\otimes n}P)]
\le e^{-n(S(\bar\beta)-\eta)}e^{n(\sum_xp_xS(\beta_x)+\eta)}
=e^{-n(\chi_B-2\eta)}.$$
The equality uses the support of the first factor; the inequality uses positivity of the operator-order difference, not commutation of the two factors. Thus expected pair-error is at most
$$2(\varepsilon_n+2\sqrt{\varepsilon_n})+4M_nL_ne^{-n(\chi_B-2\eta)},$$
which decays exponentially. Coarsening the pair POVM to its message label cannot increase message error.

For Eve let $P,Q_{x^n}$ denote the spectral projectors for her ensemble, put $s_E=\sum_xp_xS(\epsilon_x)$, and define
$$\xi_{x^n}=P Q_{x^n}\epsilon_{x^n}Q_{x^n}P,\qquad\theta=\mathbb E\xi_{X^n}.$$
These operators satisfy $0\preceq\xi_{x^n}\preceq e^{-n(s_E-\eta)}P$, $\operatorname{tr}\xi_{x^n}\le1$, and $\operatorname{rank}P\le e^{n(S(\bar\epsilon)+\eta)}$. Their average truncation error obeys
$$\mathbb E\|\epsilon_{X^n}-\xi_{X^n}\|_1\le\zeta_n:=\varepsilon_n+2\sqrt{\varepsilon_n}.$$
Indeed the conditional projector commutes with its state, so its trace-norm loss equals its failure probability. Its subnormalized output $A$ satisfies $0\preceq A\preceq\epsilon_{x^n}$, and the global-projection loss is at most $2\sqrt{\operatorname{tr}[(I-P)A]}\le2\sqrt{\operatorname{tr}[(I-P)\epsilon_{x^n}]}$. The subnormalized gentle estimate follows by applying the normalized lemma to $A/\operatorname{tr}A$ and multiplying back (the zero operator is immediate). Jensen gives the stated averaged bound.

For the $L_n$ independent words of a fixed message, centered Hilbert–Schmidt variance gives
$$\mathbb E\operatorname{tr}\left[\left(\frac1{L_n}\sum_l\xi_{X^n(m,l)}-\theta\right)^2\right]
=\frac1{L_n}\{\mathbb E\operatorname{tr}(\xi_{X^n}^2)-\operatorname{tr}(\theta^2)\}
\le\frac{e^{-n(s_E-\eta)}}{L_n}.$$
All cross terms have zero expectation by independence. The difference is supported in $P$. Cauchy–Schwarz on singular values and Jensen imply
$$\mathbb E\left\|\frac1{L_n}\sum_l\xi_{X^n(m,l)}-\theta\right\|_1\le\sqrt{\frac{e^{n(\chi_E+2\eta)}}{L_n}}.$$
Together with $\|\theta-\bar\epsilon^{\otimes n}\|_1\le\zeta_n$, this proves
$$\mathbb E\left\|\tau_{m,n}-\bar\epsilon^{\otimes n}\right\|_1\le2\zeta_n+\sqrt{\frac{e^{n(\chi_E+2\eta)}}{L_n}},\qquad\tau_{m,n}=(\mathcal N^c)^{\otimes n}(\rho_{m,n}).$$
The right side decays exponentially and is independent of $m$. Consequently the expectation of the sum of average decoding error and average half-trace distance from this target decays exponentially. The codebook sample space is finite, so order the finite word/codebook alphabet and select its first deterministic codebook whose sum is at most twice its expectation (or zero if that expectation vanishes). This defines a sequence without countable choices. For that codebook let $a_n=M_n^{-1}\sum_m T(\tau_{m,n},\bar\epsilon^{\otimes n})$. The proved quantitative entropy estimate yields
$$\ell_n\le2a_n n\ln\dim E+2g(a_n)\longrightarrow0.$$
This establishes the required unnormalized Holevo strong secrecy; a mere limit of trace distance without this dimension/error-rate estimate would not suffice. The average decoding error also tends to zero, while $n^{-1}\ln M_n\to R$. If the ensemble's private information is nonpositive it gives no positive lower bound; rate zero remains achievable with one message.

## Arbitrary block ensembles and regularization

Apply the construction to any finite ensemble of inputs for a fixed block channel $\mathcal N^{\otimes j}$. Each code uses a finite average of tensor products of those possibly mixed block inputs, permitted by the operational model. Group its blocks and pad fewer than $j$ leftover original-channel uses with a fixed state. The extra complementary state is independent of the message, so leakage is unchanged by tensoring it; the decoder discards the extra receiver output. Hence $P(\mathcal N)\ge p_j/j$ for every $j$: approximate the finite-ensemble supremum first, then take an arbitrary rate strictly below its private information. The native Fekete argument gives the entire regularized direct bound.

## Finite-block strong-secrecy converse

For any actual uniform $M$-message code, let $\widehat M$ be Bob's decoded message and $e$ its average error. The finite Fano inequality gives $H(M\mid\widehat M)\le h(e)+e\ln(M-1)\le h(e)+e\ln M$ for $M\ge2$. The Holevo measurement bound, applied to the actual finite receiver ensemble, gives $I(M;\widehat M)\le\chi_B$. Therefore
$$(1-e)\ln M\le\chi_B+h(e).$$
The uniform input ensemble $\{M^{-1},\rho_{m,n}\}$ is among those defining $p_n$, and its private information is $\chi_B-\ell_n$. Thus
$$(1-e)\ln M\le p_n+\ell_n+h(e).$$
For $M=1$, the desired asymptotic bound is trivial. For a reliable strongly secret sequence, divide by $n$; since $p_n/n$ is bounded and $e_n\to0$, the displayed inequality itself bounds $\ln M_n/n$, even though no dimension-based bound on the number of repeated classical messages was assumed. The terms $\ell_n/n$ and $h(e_n)/n$ vanish. This proves the converse for the native liminf-achievable rate convention and the retained full equality $P=\lim_n p_n/n=\sup_n p_n/n$.
