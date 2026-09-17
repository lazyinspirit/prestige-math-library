---
id: thm-brownian-filtration-martingale-representation
kind: theorem
title: "Brownian-filtration martingale representation"
status: draft
origin: pipeline
deps: [def-natural-and-usual-augmented-brownian-filtrations, def-brownian-motion, def-continuous-time-adapted-process-and-martingale, def-continuous-time-filtration-and-all-pairs-martingale, def-continuous-time-stopping-time, def-conditional-expectation-as-an-ae-class, thm-tower-property-of-conditional-expectation, lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t, thm-ito-formula-one-dimensional, cor-exponential-brownian-martingale, def-elementary-predictable-brownian-integrand, def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, thm-localized-ito-integral, thm-stopping-an-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, thm-doob-maximal-bound-for-the-ito-integral, thm-doob-l1-maximal-inequality, thm-doob-lp-maximal-inequality, lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two, thm-riesz-fischer-completeness-of-l-p, thm-almost-sure-subsequence-from-convergence-in-probability, cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms, def-standard-normal-and-normal-laws, thm-dynkin-pi-lambda, def-convergence-in-probability, def-law-modification-and-indistinguishability-of-processes, def-partition-and-refinement, def-locally-square-integrable-predictable-brownian-integrand, lem-adapted-continuous-processes-are-progressively-measurable, def-progressively-measurable-and-predictable-process, thm-heine-cantor-r, thm-dominated-convergence, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, cor-absolute-value-and-powers-of-a-martingale-are-submartingales, thm-levy-downward-convergence-of-conditional-expectations, thm-blumenthal-zero-one-law, def-germ-sigma-algebra-at-zero, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-wiener-measure-on-continuous-path-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Theorem 6.6"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 5.7"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion with raw
natural filtration $(\mathcal F^0_t)$ and usual augmentation $(\mathcal F_t)$
[[def-natural-and-usual-augmented-brownian-filtrations]].

1. **Fixed-horizon $L^2$ representation.** For every $T>0$ and every
   $Z\in L^2(\mathcal F_T)$ there is a predictable process $H$ on $[0,T]$ with
   $E\int_0^TH_s^2\,ds<\infty$ such that
   $$Z=EZ+\int_0^TH_s\,dB_s\qquad\text{almost surely},$$
   and then $E[Z\mid\mathcal F_t]=EZ+\int_0^tH_s\,dB_s$ for every $t\le T$, up
   to indistinguishability of the right-hand continuous version. $H$ is unique
   modulo $(\mathrm dt\otimes P)$-null sets on $[0,T]$.
2. **Cadlag local martingales.** Every local martingale $M$ relative to
   $(\mathcal F_t)$ whose paths are right-continuous with left limits on one
   event of probability one satisfies, up to indistinguishability,
   $$M_t=M_0+\int_0^tH_s\,dB_s,\qquad t\ge0,$$
   for a predictable process $H$ that is locally square-integrable,
   $\int_0^tH_s^2\,ds<\infty$ almost surely for every $t$. If
   $M_0+\int H\,dB=M_0+\int K\,dB$ up to indistinguishability for two such
   predictable integrands, then $H=K$ $(\mathrm dt\otimes P)$-almost everywhere
   on $[0,t]$ for every $t$. In particular such an $M$ has a continuous
   version.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ with raw natural filtration $(\mathcal F^0_t)$ and usual augmentation $(\mathcal F_t)$, a horizon $T>0$, and (for clause 2) a local martingale $M$ with cadlag paths and localizing sequence $(\tau_n)$.
 
[F1] **Integral and isometry interfaces.** For predictable $H$ with finite energy $E\int_0^TH^2ds$, the integral $\int_0^TH\,dB$ is an $L^2(P)$ class, the map $H\mapsto\int_0^TH\,dB$ is an isometry with $E(\int_0^TH\,dB)^2=E\int_0^TH^2ds$, its image in $L^2(P)$ is a closed subspace, and it takes values in the mean-zero subspace. For locally square-integrable $H$ the localized integral exists and is unique up to indistinguishability, and the stopping identity identifies stopped integrals with integrals of $H1_{[0,\sigma]}$. [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[def-locally-square-integrable-predictable-brownian-integrand]] [[def-elementary-predictable-brownian-integrand]] [[def-ito-integral-for-square-integrable-predictable-processes]]
 
[F2] **One-dimensional Ito formula for deterministic step integrals.** If $h=\sum_j\lambda_j1_{(t_{j-1},t_j]}$ is a deterministic step function on $[0,T]$, $q(t)=\int_0^th^2ds$ and $X_t=\int_0^th\,dB$, then $\exp(iX_t+\tfrac12q(t))=1+i\int_0^t\exp(iX_s+\tfrac12q(s))h_s\,dB_s$ up to indistinguishability: apply the one-dimensional Ito formula to the real and imaginary parts $e^{q(t)/2}\cos x$ and $e^{q(t)/2}\sin x$ along the class process $X$, whose drift is $0$ and whose diffusion coefficient is $h$, and note the cancellation $\partial_t\phi+\tfrac12h^2\partial^2_x\phi=0$ for both functions. In particular $\exp(iX_T+\tfrac12q(T))-1\in R_T$, the range of terminal integrals. [[thm-ito-formula-one-dimensional]] [[def-ito-integral-of-an-elementary-predictable-process]] [[def-elementary-predictable-brownian-integrand]]
 
[F3] **Conditional expectation and martingale closure.** For integrable $Y$ and $A\in\mathcal F_t$ one has $E[1_AY\mid\mathcal F_t]=1_AE[Y\mid\mathcal F_t]$ and $E[1_AE[Y\mid\mathcal F_t]]=E[1_AY]$; if two martingales agree at $T$ almost surely and are a.s. continuous, they agree at every $t\le T$ up to indistinguishability; and for a bounded martingale $N$ the identity $N_t=E[N_T\mid\mathcal F_t]$ is the martingale property itself. [[def-conditional-expectation-as-an-ae-class]] [[thm-tower-property-of-conditional-expectation]] [[def-continuous-time-adapted-process-and-martingale]] [[def-law-modification-and-indistinguishability-of-processes]]
 
[F4] **Completion and the right-continuous filtration.** Every set in $\overline{\mathcal F}{}^0_u$ differs from a raw $\mathcal F^0_u$-set by a subset of a null set; consequently every $\sigma(\mathcal F^0_u\cup\mathcal N)$-measurable integrable random variable is almost surely equal to an $\mathcal F^0_u$-measurable one, and the usual augmentation satisfies $\mathcal F_t=\bigcap_{u>t}\mathcal F_u=\bigcap_{u>t}\sigma(\mathcal F^0_u\cup\mathcal N)$, an intersection that may be computed over the countable set $u=t+1/m$. [[def-natural-and-usual-augmented-brownian-filtrations]] [[def-conditional-expectation-as-an-ae-class]] [[thm-dominated-convergence]]
 
[F5] **Fourier uniqueness and pi-lambda.** Finite Borel measures on $\mathbb R^n$ with equal Fourier transforms are equal, and a pi-system generating a sigma-algebra determines it by the Dynkin pi-lambda theorem, in the form that a finite signed measure vanishing on a generating pi-system vanishes on the generated sigma-algebra. [[cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms]] [[thm-dynkin-pi-lambda]] [[def-standard-normal-and-normal-laws]]
 
[F6] **Closed subspaces of $L^2$.** A closed linear subspace of $L^2(P)$ with trivial orthogonal complement is all of $L^2(P)$. [[lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two]] [[thm-riesz-fischer-completeness-of-l-p]]
 
[F7] **Almost-sure subsequences.** Convergence in probability yields an almost-surely convergent subsequence, and a sequence converging uniformly in probability along a subsequence may be identified with its continuous limit up to indistinguishability. [[thm-almost-sure-subsequence-from-convergence-in-probability]] [[def-convergence-in-probability]] [[def-law-modification-and-indistinguishability-of-processes]]
 
[F8] **AC bookkeeping.** Choice is declared for the conditional-expectation and $L^2$-completeness interfaces; all stopping levels, grids and subsequences below are canonical (least indices, dyadic grids, energy thresholds). [[def-axiom-of-choice]]

[F9] **Shifted process.** For every $T\ge0$ the process $\widetilde B_h:=B_{T+h}-B_T$ ($h\ge0$) is a standard Brownian motion independent of the raw past $\mathcal F^0_T$, and $\mathcal F^0_{T+h}=\sigma\bigl(\mathcal F^0_T\cup\sigma(\widetilde B_u:u\le h)\bigr)$ for every $h\ge0$, because the path up to time $T+h$ determines and is determined by the past path and the shifted increments; in particular the map $\omega\mapsto\bigl((B_s(\omega))_{s\le T},(\widetilde B_h(\omega))_{h\ge0}\bigr)$ identifies $P$ with the product of the law of the past path and Wiener measure. [[def-brownian-motion]] [[def-wiener-measure-on-continuous-path-space]]

[F10] **Downward convergence of conditional expectations.** If $(\mathcal G_m)$ is a decreasing sequence of sigma-algebras with intersection $\mathcal G$ and $X$ is integrable, then $E[X\mid\mathcal G_m]\to E[X\mid\mathcal G]$ almost surely and in $L^1$. [[thm-levy-downward-convergence-of-conditional-expectations]]

[F11] **Blumenthal's zero-one law.** For a standard Brownian motion $W$, every event of the germ sigma-algebra $\mathcal F^0_{0+}=\bigcap_{u>0}\sigma(W_s:s\le u)$ of its raw filtration has probability $0$ or $1$. [[thm-blumenthal-zero-one-law]] [[def-germ-sigma-algebra-at-zero]]

[F12] **Sections and the product measure.** For the product of two probability measures, sets of the product sigma-algebra have measurable sections and the Fubini theorem identifies the product integral of an integrable function with the iterated integral. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 The range of terminal integrals: let $R_T:=\{\int_0^TH\,dB:H\text{ predictable},E\int_0^TH^2ds<\infty\}\subseteq L^2(P)$. By [F1], $R_T$ is a closed linear subspace contained in the mean-zero subspace, and each of its elements is $\mathcal F_T$-measurable because elementary terminal integrals are finite combinations of Brownian increments and the $L^2$ limit of $\mathcal F_T$-measurable random variables is $\mathcal F_T$-measurable; hence $R_T\subseteq\{Z\in L^2(\mathcal F_T):EZ=0\}$. [F1, F3]
 
1.2 Orthogonality forces vanishing, step one: let $Z\in L^2(\mathcal F_T)$ with $EZ=0$ and $Z\perp R_T$. For every deterministic step function $h=\sum_j\lambda_j1_{(t_{j-1},t_j]}$ the random variable $E_T:=\exp(iX_T+\tfrac12q(T))$ with $X_T=\int_0^Th\,dB$ satisfies $E_T-1\in R_T$ by [F2] (the integrand $\exp(iX_s+\tfrac12q(s))h_s$ is bounded and predictable, hence of finite energy), so $0=E[Z(E_T-1)]=E[ZE_T]-EZ=E[ZE_T]$; equivalently $E\bigl[Z\exp(i\sum_j\lambda_j(B_{t_j}-B_{t_{j-1}}))\bigr]=0$ for all real $\lambda_j$. [F1, F2]
 
1.3 Localization of a cadlag local martingale: for each $n$ the stopped process $M^{\tau_n}$ is a martingale by the definition of a local martingale, with $M^{\tau_n}_T=M_{T\wedge\tau_n}\in L^1$; for each $m$ put $\rho_m:=\inf\{t\ge0:|M^{\tau_n}_t|>m\}\wedge m$ and $N:=M^{\tau_n\wedge\rho_m}$, a bounded martingale: $N$ is a martingale by [F2]-type stability of localization under stopping, and $|N_t|\le m$ for all $t$ because $\rho_m$ is a stopping time (its event $\{\rho_m<t\}=\bigcup_{q\in\mathbb Q,\,q<t}\{|M^{\tau_n}_q|>m\}$ lies in $\mathcal F_t$, and right-continuity of $(\mathcal F_t)$ handles the closure) and the path is stopped before exceeding $m$. [F1, F3, given]
 
2.1 Step two, cylinder Fourier transforms: fix $0\le t_1<\dots<t_n\le T$ and define the finite signed measure $\nu$ on $\mathbb R^n$ as the pushforward of the signed measure $Z\,dP$ under $\omega\mapsto(B_{t_1}(\omega),\dots,B_{t_n}(\omega))$. Its Fourier transform at $\lambda\in\mathbb R^n$ equals $E[Z\exp(i\sum_j\lambda_jB_{t_j})]$, which is a finite linear combination, with constant coefficients depending only on $\lambda$ and the times, of the quantities $E[Z\exp(i\sum_j\mu_j(B_{t_j}-B_{t_{j-1}}))]$ of step 1.2; hence it vanishes. By Fourier uniqueness [F5], $\nu=0$, that is $\int_AZ\,dP=0$ for every cylinder rectangle $A=\{B_{t_1}\in\Gamma_1,\dots,B_{t_n}\in\Gamma_n\}$ with $t_j\le T$. [F6, step 1.2]
 
3.1 Step three, pi-lambda: the cylinder rectangles with all times $\le T$ form a pi-system generating $\sigma(B_s:s\le T)=\mathcal F^0_T$, and $A\mapsto\int_AZ\,dP$ is a finite signed measure vanishing there; the class of sets on which it vanishes is closed under complements, proper differences and increasing countable unions (continuity from below), so by the Dynkin pi-lambda theorem [F5] it vanishes on all of $\mathcal F^0_T$. Hence $E[Z\mid\mathcal F^0_T]=0$ almost surely. [F6, step 2.1]
 
4.1 Step four, the completion. Write $H:=\mathcal F^0_T$ and, for $m\ge1$, $G_m:=\sigma(\widetilde B_h:0\le h\le1/m)$ for the shifted process $\widetilde B$ of [F9], so that $\mathcal F^0_{T+1/m}=\sigma(H\cup G_m)$ by [F9]; since $\mathcal F_T=\bigcap_m\sigma(\mathcal F^0_{T+1/m}\cup\mathcal N)$ by [F4], for each $m$ the $\mathcal F_T$-measurable $Z$ is $\sigma(\mathcal F^0_{T+1/m}\cup\mathcal N)$-measurable and hence, by [F4], almost surely equal to an $\mathcal F^0_{T+1/m}$-measurable random variable $Z_m$; therefore $W_m:=E[Z\mid\mathcal F^0_{T+1/m}]=E[Z_m\mid\mathcal F^0_{T+1/m}]=Z_m=Z$ almost surely for every $m$. The sigma-algebras $\mathcal F^0_{T+1/m}$ decrease and intersect in $\mathcal F^0_{T+}=\bigcap_m\mathcal F^0_{T+1/m}$, so [F10] gives $E[Z\mid\mathcal F^0_{T+}]=\lim_mW_m=Z$ almost surely: $Z$ has an almost surely equal $\mathcal F^0_{T+}$-measurable version $Z^*$. It remains to see that the germ adds nothing beyond $H$ up to null sets. Put $G:=\bigcap_mG_m$ and let $A\in\mathcal F^0_{T+}=\bigcap_m\sigma(H\cup G_m)$. Since $1_A$ is $\sigma(H\cup G_m)$-measurable for every $m$, [F10] applied to the decreasing sigma-algebras $\sigma(H\cup G_m)$ gives $1_A=E[1_A\mid\bigcap_m\sigma(H\cup G_m)]$ almost surely, so $A$ differs by a null set from a set of $\bigcap_m\sigma(H\cup G_m)$. Under the product identification of [F9], with $\kappa$ the law of the past path and $\mu$ Wiener measure, a set $B$ of $\sigma(H\cup G_m)$ has every section $B_x=\{\widetilde\omega:(x,\widetilde\omega)\in B\}$ in $G_m$, so a set of $\bigcap_m\sigma(H\cup G_m)$ has all its sections in $\bigcap_mG_m=G$; by [F11] applied to the standard Brownian motion $\widetilde B$, every $G$-set has $\mu$-measure $0$ or $1$, so $\mu(A_x)\in\{0,1\}$ for every $x$ and [F12] exhibits $A$ as differing by a null set from the $H$-measurable set $\{x:\mu(A_x)=1\}$. Applying this to the countably many events $\{Z^*>c\}$ with $c\in\mathbb Q$ shows that $Z$ is almost surely equal to the $H$-measurable random variable $E[Z\mid H]$. By step 3.1, $E[Z1_A]=0$ for every $A\in H$, so $E[Z\mid H]=0$ almost surely and therefore $Z=0$. [F4, F9, F10, F11, F12, step 3.1]
 
5.1 Conclusion of the $L^2$ stage: steps 1.2, 2.1, 3.1 and 4.1 show that a mean-zero $Z\in L^2(\mathcal F_T)$ orthogonal to $R_T$ must vanish, so the orthogonal complement of $R_T$ inside the closed subspace $\{Z\in L^2(\mathcal F_T):EZ=0\}$ is trivial; by [F6] $R_T=\{Z\in L^2(\mathcal F_T):EZ=0\}$. Hence for every $Z\in L^2(\mathcal F_T)$ there is a predictable finite-energy $H$ on $[0,T]$ with $Z-EZ=\int_0^TH\,dB$; the process identity $E[Z\mid\mathcal F_t]=EZ+\int_0^tH\,dB$ follows because both sides are continuous-or-martingale processes agreeing at $T$: the conditional-expectation process is a martingale by the tower property and the integral is a continuous martingale by [F1], so they agree at every $t\le T$ up to indistinguishability by [F3]; uniqueness of $H$ is the isometry: if $\int_0^T(H-K)dB=0$ almost surely then $E\int_0^T(H-K)^2ds=0$. This proves clause 1. [F1, F3, F7, step 4.1]
 
6.1 Bounded pieces are represented: the bounded martingale $N=M^{\tau_n\wedge\rho_m}$ has $N_T\in L^\infty\subseteq L^2(\mathcal F_T)$ and $N_t=E[N_T\mid\mathcal F_t]$ by the martingale property [F3], so clause 1 gives a predictable finite-energy $H^{(n,m)}$ on $[0,T]$ with $N_t=N_0+\int_0^tH^{(n,m)}dB$ up to indistinguishability. [F1, F3, step 5.1]
 
7.1 Agreement on overlaps: if $\rho\le\rho'$ are stopping times such that $M^{\rho}$ and $M^{\rho'}$ are bounded martingales with representations $H,H'$ on $[0,T]$, then $H1_{[0,\rho]}=H'1_{[0,\rho]}$ $(\mathrm dt\otimes P)$-a.e.: on $\{t\le\rho\}$ the two stopped martingales coincide, so $\int_0^T(H-H')1_{[0,\rho]}dB$ is the zero continuous process, and its terminal value has zero $L^2$ norm, which by the isometry equals $E\int_0^T(H-H')^21_{[0,\rho]}ds$. [F1, step 6.1]
 
8.1 Passing to the limit in $m$: for fixed $n$ and $m<m'$ one has $\rho_m\le\rho_{m'}$ and both pieces bounded, so step 7.1 gives $H^{(n,m')}=H^{(n,m)}$ a.e. on the predictable set $\{t\le\rho_m\}$; the canonical patch $$H^{(n)}:=H^{(n,1)}1_{[0,\rho_1]}+H^{(n,2)}1_{(\rho_1,\rho_2]}+H^{(n,3)}1_{(\rho_2,\rho_3]}+\cdots$$ is a predictable locally square-integrable process (indicators of stopping intervals are predictable and products of predictable processes are predictable; on $\{t\le\sigma_N\}$ for the energy thresholds $\sigma_N$ of $H^{(n)}$ only finitely many terms contribute), and $\int_0^tH^{(n)}dB$ agrees with the representation of each bounded piece on $\{t\le\rho_m\}$; letting $m\to\infty$ along the events $\{\rho_m\ge t\}$ of probability tending to $1$ gives $M^{\tau_n}_t=M_0+\int_0^tH^{(n)}dB$ up to indistinguishability, and $H^{(n)}$ is locally square-integrable because on each energy threshold it has finite energy. [F1, F8, step 6.1, step 7.1]
 
9.1 Passing to the limit in $n$: for $n\le n'$ the stopped martingales $M^{\tau_n}$ and $M^{\tau_{n'}}$ coincide on $[0,\tau_n]$, so step 7.1 applied to the representations $H^{(n)},H^{(n')}$ gives agreement a.e. on $\{t\le\tau_n\}$; the same canonical patching as in step 8.1 along the increasing sequence $(\tau_n)$ produces a predictable locally square-integrable $H$ with $M_t=M_0+\int_0^tH\,dB$ up to indistinguishability, because for each $t$ the event $\{\tau_n\ge t\}$ has probability tending to $1$. [F1, F8, step 8.1]
 
10.1 Uniqueness: if $H,K$ are two predictable locally square-integrable integrands with $\int H\,dB=\int K\,dB$ up to indistinguishability, then for each horizon $T$ and each level $N$ the canonical energy stopping time $\sigma_N:=\inf\{t:\int_0^t(H-K)^2ds\ge N\}\wedge T\wedge N$ gives a finite-energy integrand $(H-K)1_{(0,\sigma_N]}$ whose integral is the zero continuous martingale; the isometry gives $E\int_0^{\sigma_N}(H-K)^2ds=E\bigl(\int_0^T(H-K)1_{(0,\sigma_N]}dB\bigr)^2=0$, so $(H-K)1_{(0,\sigma_N]}=0$ a.e. for every $N$, and since $\sigma_N\uparrow\infty$ almost surely, $H=K$ $(\mathrm dt\otimes P)$-a.e. on $[0,T]$. Continuity of the representation gives clause 2's version statement. [F1, step 9.1]
 
11.1 Boundary and consistency cases: for $T=0$ the space $L^2(\mathcal F_0)$ consists of constants almost surely for the augmented Brownian filtration by the Blumenthal zero-one law, and clause 1 is trivial with $H=0$; for $Z$ deterministic of the form $\phi$ a bounded measurable function of $B_{t_1},\dots,B_{t_n}$ the representation is the sum of the associated conditional Gaussian projections; for $M_t=B_t$ clause 2 gives $H\equiv1$; for $M$ constant, $H=0$; for a martingale with a jump, clause 2 forces the jump to be absent because the representation is continuous, so a cadlag local martingale in the usual Brownian filtration has a continuous version; the choice cost is exactly that of the conditional-expectation interface and the canonical least-index selections of steps 4.1, 8.1 and 9.1, and no maximal orthonormal family or arbitrary representative is selected; AC enters through [F8]. [F1, F8, given] ∎

## Source notes

Van der Vaart, Theorem 6.6, proves the representation for the usual filtration of Brownian motion in the three stages used above: the closed range of the terminal integral, the characteristic-exponential orthogonality with Fourier uniqueness and completion, and the localization and patching of the integrands along stopping times. Lawler, Section 5.7, states the result in the $L^2$-terminal form and explicitly omits the continuous-time proof, proving a random-walk analogue instead; the proof above therefore follows the van der Vaart argument, with the $L^1$-truncation of the terminal variable replaced by the bounded-piece patching of steps 6.1 through 9.1 so that only the martingale property, not optional sampling for unbounded stopping times, is used.
