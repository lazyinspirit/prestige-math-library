# Independent proof donor: the sparse degenerate regime

This is research evidence for the owner, not an edited item, contracted supplier, or acceptance. It was derived independently and checked by the same owner after the native batch10 writer drained. It closes the mathematical sharp-profile argument for lambda≤0, including lambda=0. It does not close the Gaussian sparse regime or authorize source changes. Significance is denoted by ell to avoid the carrier's overloaded alpha.

Write a=alpha>0, b=beta>0, 0<q<2, e=2b-q(a+b)≥0. For the actual alternative, sum_i i^{q(a+b)}|eta_i|^q≤1 and sum_i i^{2b}eta_i²≥r². Observations are Y_i=eta_i+epsilon G_i with independent standard normals. Set n=r^{-1/a}, m=r^{(a+b)/a}, A=m/epsilon and D=A-sqrt(2 log n). All asymptotics concern r→0 and epsilon→0.

## Exact deterministic maximum

Every alternative has an index i≤floor(n) with |eta_i|≥m. To prove this, put w_i=i^{q(a+b)}|eta_i|^q. For a nonzero coordinate,

    i^{2b}eta_i² = w_i i^e |eta_i|^{2-q}.

If i≤n and |eta_i|<m, the multiplier is strictly below n^e m^{2-q}=r². If i>n, the termwise constraint |eta_i|≤i^{-(a+b)} bounds it by i^{-2a}<r². If all coordinates i≤floor(n) had amplitude below m, summing gives energy strictly below r²: the weights sum to at most1 and at least one positive weight has a strictly positive deficit. This contradicts the alternative. The argument includes e=0.

## Sharp upper bounds

Let N=floor(n), t=sqrt(2 log N), and R=1{max_{i≤N}|Y_i|/epsilon>t}. Eventually N≥2. For a standard normal density phi, integration over x≥t gives

    P(G>t) ≤ phi(t)/t,

because x/t≥1 and integral_t^infinity x phi(x) dx=phi(t). Thus p0=E0 R≤2N phi(t)/t=O(1/t)→0. The exact maximum bound supplies an absolute mean at least A. Its probability of falling in [-t,t] is at most Phi(t-A), so uniformly over alternatives,

    P_eta(R=0) ≤ Phi(t-A) = Phi(-D)+o(1).

The last o(1) is uniform in A since t-sqrt(2 log n)→0 and Phi has bounded derivative. Hence total minimax error is at most Phi(-D)+o(1). For a fixed ell∈(0,1), put rho=(ell-p0)/(1-p0), eventually in[0,1], and psi=rho+(1-rho)R. Its size is exactly ell and its maximal type-II error is at most (1-ell)Phi(-D)+o(1).

## Matching lower bounds for bounded D

Along a sequence D→d∈R, set M=floor(n/(log n)²) and I={floor(n)-M+1,...,floor(n)}. Mix uniformly over these M indices and independent signs, using eta_i=±r i^{-b}, zero elsewhere. Each point has weighted energy r² and q-budget (r i^a)^q≤1, and has finite support. Finite Gaussian coordinate density calculations and equality on finite cylinders identify the mixture law on the whole product-Borel experiment.

Set T=sqrt(2 log M), mu_i=r/(epsilon i^b). Uniformly on I, mu_i=T+d+o(1). Indeed M/n=O((log n)^{-2}), A=sqrt(2 log n)+O(1), and T-sqrt(2 log n)=O(log log n/sqrt(log n))→0.

Under the null the likelihood ratio is

    L=(1/M) sum_{i∈I} f_i(G_i),
    f_i(x)=exp(-mu_i²/2) cosh(mu_i x).

Define Ltilde by multiplying each summand by 1{|G_i|≤T}. Completing the square gives

    E[f_i(G)1{|G|≤T}] = Phi(T-mu_i)-Phi(-T-mu_i) → c=Phi(-d),

uniformly in i. Using cosh²(x)=(cosh(2x)+1)/2 gives

    E[f_i(G)²1{|G|≤T}]
      ≤ (1/2)exp(mu_i²)Phi(T-2mu_i)+(1/2)exp(-mu_i²).

Since 2mu_i-T=T+O(1)>0, the Mills bound and the exact identity

    mu_i²-(2mu_i-T)²/2-log M = -(mu_i-T)²

show that this second moment divided by M is O(1/T). Independence gives Var(Ltilde)=O(1/T)→0; its mean tends to c. Consequently E|Ltilde-c|→0. Moreover P(L≠Ltilde)≤2M P(G>T)=O(1/T)→0, so L→c in null probability. Uniform integrability of L is not asserted; its escaping mass is precisely the degenerate limit.

For any randomized test psi, since L≥Ltilde,

    E_pi(1-psi) ≥ E0[Ltilde(1-psi)]
                 ≥ c(1-E0 psi)-E0|Ltilde-c|.

This is the uniform fixed-level lower bound c(1-ell)-o(1). Also

    E0 psi + E_pi(1-psi) ≥ E0 min(1,L) → c,

by bounded convergence in probability. Thus both sharp formulas hold when D has a finite limit.

## Endpoint sequences

If D→+infinity, the upper bounds tend to0, settling both profiles. For D→-infinity, fix K>0. The function

    f_epsilon(r)=epsilon^{-1}r^{(a+b)/a}-sqrt((2/a)log(1/r))

is strictly increasing on(0,1), tends to-infinity at0 and is positive at1. It has a unique solution r_{epsilon,K} with f_epsilon(r_{epsilon,K})=-K; this solution tends to0 as epsilon→0. Eventually r<r_{epsilon,K}, so inclusion of alternatives gives lower limits at least Phi(K) for total error and (1-ell)Phi(K) for type-II error. Let K→infinity. Passing to subsequences in the extended real line proves, for arbitrary r→0,

    beta_epsilon(Theta_q(r),ell)=(1-ell)Phi(-D)+o(1),
    gamma_epsilon(Theta_q(r))=Phi(-D)+o(1).

## Sharp normalization

Let p=(a+b)/a. For

    r_star=Lambda epsilon^{a/(a+b)}(log epsilon^{-1})^{a/[2(a+b)]},
    Lambda=(2/(a+b))^{a/[2(a+b)]},

we have Lambda^p=sqrt(2/(a+b)). For every fixed c>0,

    D(c r_star)=(c^p-1)sqrt(2 log(epsilon^{-1})/(a+b))+o(1).

The error from the log-log term is O(log log(epsilon^{-1})/sqrt(log(epsilon^{-1})))→0. Therefore D(r_star)→0, fixed multiplicative constants above/below1 give the sharp transition, and the required zero/infinite ratio separation conclusions follow by monotonicity. All arguments use the actual sequence model and finite mixtures; no unread external proof is used as a logical supplier.
