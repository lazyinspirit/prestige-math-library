---
id: thm-fd-smooth-periodic-incompressible-ivp
kind: theorem
title: "Local smooth periodic Euler and Navier–Stokes"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-fd-periodic-leray-pressure-maps
  - lem-fd-periodic-fourier-embedding-products
  - lem-fd-periodic-tame-transport-commutator
  - thm-fd-periodic-pressure-recovery
  - def-countable-choice
  - thm-picard-lindelof-local-existence-and-uniqueness
  - lem-fd-polynomial-ode-continuation
  - thm-bolzano-weierstrass
  - lem-fd-given-smooth-solutions-difference-energy
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-fd-periodic-leray-pressure-maps: mathematical-premise
  lem-fd-periodic-fourier-embedding-products: mathematical-premise
  lem-fd-periodic-tame-transport-commutator: mathematical-premise
  thm-fd-periodic-pressure-recovery: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  lem-fd-polynomial-ode-continuation: mathematical-premise
  thm-bolzano-weierstrass: mathematical-premise
  lem-fd-given-smooth-solutions-difference-energy: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brian F. Morton, Local-in-Time Well-Posedness of the Incompressible Euler and Navier–Stokes Equations, §§7.1–7.3"
      url: "https://brianfmorton.github.io/Notes/Local_in_Time_Well_Posedness_of_the_Incompressible_Euler_and_Navier_Stokes_Equations.pdf"
    - title: "Emil Wiedemann, Lecture Notes: Navier–Stokes Equations, §4.3"
      url: "https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Let $d\in\{1,2,3\}$, let $s\ge4$ be an integer, let $\nu\ge0$, and let $u_0:\mathbb T^d\to\mathbb R^d$ be smooth, real, and divergence-free, where $\mathbb T^d=(\mathbb R/2\pi\mathbb Z)^d$ has normalized Lebesgue measure and divergence-free means $\sum_{j=1}^d\partial_j(u_0)_j=0$. For a smooth periodic $f$, set $\widehat f(k)=(2\pi)^{-d}\int_{[0,2\pi]^d}f(x)e^{-ik\cdot x}\,dx$, $w_k=(1+|k|^2)^{1/2}$, and $\|f\|_{H^m}^2=\sum_{k\in\mathbb Z^d}w_k^{2m}|\widehat f(k)|^2$. Define the Leray multiplier by $P_0=I$ and $P_k=I-kk^{\mathsf T}/|k|^2$ for $k\ne0$. Then there is $T>0$, depending only on $d$, $s$, and $\|u_0\|_{H^s}$ and independent of $\nu$ and all higher Sobolev norms of $u_0$, and a unique smooth real field $u:[0,T]\times\mathbb T^d\to\mathbb R^d$ satisfying
$$u(0,\cdot)=u_0,\qquad \partial_tu+P((u\cdot\nabla)u)=\nu\Delta u,\qquad \operatorname{div}u=0.$$
The same time $T$ works for every integer Sobolev order $m\ge s$, and $\sup_{0\le t\le T}\|u(t)\|_{H^m}<\infty$ for each such $m$. Quantitatively, constants $C_{d,s}\ge1$ and $C_{d,m,s}\ge1$ can be fixed independently of the datum and of $\nu$, with the former depending only on $d,s$ and the latter only on $d,m,s$, so that, putting $M=\|u_0\|_{H^s}$ and $M_1=\max\{1,M\}$, one may take $T=(2C_{d,s}M_1)^{-1}$ and obtain $\sup_{0\le t\le T}\|u(t)\|_{H^s}\le2M$ and $\sup_{0\le t\le T}\|u(t)\|_{H^m}\le\|u_0\|_{H^m}\exp(2C_{d,m,s}MT)$ for every integer $m\ge s$. There is a unique smooth mean-zero scalar field $\pi$ for which the equivalent full equation $\partial_tu+(u\cdot\nabla)u=-\nabla\pi+\nu\Delta u$ holds.

## Statement references

[[def-fd-periodic-fourier-sobolev-spaces]]

[[def-fd-periodic-leray-pressure-maps]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice and $d,s,\nu,u_0$ as in the Statement; all Fourier and Sobolev conventions are exactly those displayed there.

[L1] The current batch-17 manifest contains the fd-s01 A page with eleven item carriers and its B page with two carriers. I inspected the current statements, hypotheses, and complete proofs of the six FD-S01 suppliers used here; the interfaces below match those actual carriers. The current `step1Decision` query for each supplier returns `ready` with a current hash. These are authoring-readiness records and do not replace later independent proof review.

[F1] The Fourier-space definition uses normalized measure $(2\pi)^{-d}dx$, coefficients $\widehat q(k)=\int q(x)e^{-ik\cdot x}\,d\mu(x)$, conjugate symmetry for real fields, and the weighted coefficient completion; for $m\ge0$ it has the coefficient-isometry $L^2$ representative ([[def-fd-periodic-fourier-sobolev-spaces]]).

[F2] On the unit torus, the Fourier coefficient map is a surjective isometry onto $\ell^2(\mathbb Z^d)$ and Parseval holds; the change of variables $x=2\pi y$ gives the coefficient and Parseval conventions on this $2\pi$-periodic torus ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

[F3] The Leray map has $P_0=I$, $P_k=I-kk^{\mathsf T}/|k|^2$ for $k\ne0$, is a real-preserving orthogonal projection bounded on each $H^m$, and commutes with spatial derivatives; its multiplier formula also gives commutation with $\Lambda^m$ ([[def-fd-periodic-leray-pressure-maps]]).

[F4] Under Countable Choice, for $d\le3$ and every integer $j\ge0$, $H^\sigma\hookrightarrow C^j$ when $\sigma>j+d/2$; for $\sigma>d/2$ pointwise multiplication extends continuously to $H^\sigma\times H^\sigma\to H^\sigma$ ([[lem-fd-periodic-fourier-embedding-products]]).

[F5] Under Countable Choice, for $d\le3$, integers $m\ge s_0\ge4$, smooth periodic scalar $f,g$, and each coordinate $j$, $\|[\Lambda^m,f]\partial_jg\|_{L^2}\le C_{d,m,s_0}(\|f\|_{H^m}\|g\|_{H^{s_0}}+\|f\|_{H^{s_0}}\|g\|_{H^m})$ ([[lem-fd-periodic-tame-transport-commutator]]).

[F6] Picard–Lindelöf: a continuous vector field locally Lipschitz in the state variable has a unique local solution through each point ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F7] A bounded finite-dimensional polynomial ODE trajectory extends past any finite right endpoint ([[lem-fd-polynomial-ode-continuation]]).

[F8] Every bounded real sequence has a convergent subsequence ([[thm-bolzano-weierstrass]]); applying it to finitely many real and imaginary coefficient coordinates uses only finite choice.

[F9] Under Countable Choice, if $s_0>d/2+1$ and divergence-free $u\in H^{s_0}$, the mean-zero pressure $\pi=Q(u\otimes u)$ belongs to $H^{s_0}$ and $P(u\cdot\nabla u)=u\cdot\nabla u+\nabla\pi$ in $H^{s_0-1}$; among mean-zero periodic distributions satisfying this identity it is unique ([[thm-fd-periodic-pressure-recovery]]).

[F10] Under Countable Choice, for already-given smooth divergence-free solutions $u,v$ of the periodic projected incompressible equation with the same $\nu\ge0$, $\|u(t)-v(t)\|_2^2\le\|u(0)-v(0)\|_2^2\exp(2\int_0^t\|\nabla v(\tau)\|_\infty d\tau)$; this is conditional on given solutions and asserts no existence theorem ([[lem-fd-given-smooth-solutions-difference-energy]]).

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ says every countable family of nonempty sets has a choice function. It is retained for the analytic Fourier and Sobolev suppliers [F1]–[F5] and [F9]; the explicit coefficient diagonal below makes no additional selection and uses no dependent choice ([[def-countable-choice]]).

## Proof

**Proof technique:** Fourier Galerkin construction and compact limit using the actual inspected FD-S01 interfaces [F1], [F3]–[F5], [F9], and [F10], whose current authoring-readiness records are recorded in [L1].

1.1 Let $S_N$ be the orthogonal Fourier cutoff to modes $|k|_\infty\le N$, and let $X_N$ be its finite-dimensional real divergence-free range. On $X_N$ solve $\partial_tu_N+S_NP((u_N\cdot\nabla)u_N)=\nu\Delta u_N$, $u_N(0)=S_Nu_0$. The coefficient vector field is polynomial, hence locally Lipschitz by the finite-monomial estimate in the proof of [[lem-fd-polynomial-ode-continuation]]; [F6] gives a unique local real solution, and its right-hand side preserves $X_N$. [given, F1, F3, F6]

1.2 Put $\Lambda$ for the Fourier multiplier $w_k$. Pair the Galerkin equation with $\Lambda^{2m}u_N$; self-adjointness of $S_N,P$, their commutation with $\Lambda$, and $Pu_N=S_Nu_N=u_N$ remove the projections. The principal transport term is $\int_{\mathbb T^d}(\Lambda^mu_N)\cdot(u_N\cdot\nabla\Lambda^mu_N)\,dx=\frac12\int u_N\cdot\nabla|\Lambda^mu_N|^2\,dx=0$ by periodicity and $\operatorname{div}u_N=0$. The remaining commutator is bounded by [F5], while viscosity contributes $-\nu\|\nabla u_N\|_{H^m}^2$, giving $\frac12\frac d{dt}\|u_N\|_{H^m}^2+\nu\|\nabla u_N\|_{H^m}^2\le C_m\|u_N\|_{H^s}\|u_N\|_{H^m}^2$. [given, F1, F2, F3, F5, algebra]

2.1 Enlarge the energy constants in step 1.2 so that $C_s=C_{d,s}\ge1$ and $C_m=C_{d,m,s}\ge1$. Put $M=\|u_0\|_{H^s}$, $M_1=\max\{1,M\}$, and $T=(2C_sM_1)^{-1}$. At $m=s$, set $Y_N=\|u_N\|_{H^s}$. When $Y_N>0$, step 1.2 gives $Y_N^\prime\le C_sY_N^2$. If $Y_N(0)=0$, uniqueness of the finite-dimensional ODE makes $u_N\equiv0$. Otherwise, integrating $(1/Y_N)^\prime\ge-C_s$ gives $Y_N(t)\le M/(1-C_sMt)\le2M$ on $[0,T]$. These bounds and the chosen time do not use $\nu$ or higher norms. [given, step 1.2, F6, algebra]

3.1 For every integer $m\ge s$, step 1.2 and step 2.1 give $(\|u_N\|_{H^m}^2)'\le4C_m\|u_0\|_{H^s}\|u_N\|_{H^m}^2$. Multiplying by $e^{-4C_m\|u_0\|_{H^s}t}$ and differentiating proves $\|u_N(t)\|_{H^m}\le\|u_0\|_{H^m}e^{2C_m\|u_0\|_{H^s}T}$ on the same interval. Parseval [F2] and the $H^s$ bound control the Euclidean coefficient norm of $u_N$; [F7] therefore extends each finite-dimensional solution through $[0,T]$, even though the constants $C_m$ may depend on $m$. [step 1.2, step 2.1, F2, F7, algebra]

4.1 For every integer $m\ge s+2$, the product estimate [F4] and the bounds in step 3.1 give a uniform bound on $\partial_tu_N=-S_NP(u_N\cdot\nabla u_N)+\nu\Delta u_N$ in $C([0,T],H^{m-2})$. Thus each fixed Fourier coefficient is uniformly bounded and equicontinuous in time. [step 3.1, F3, F4]

5.1 Define a canonical extraction $E$ for a bounded real sequence $(b_n)_{n\ge1}$. Let $B\ge1$ be the least integer with $|b_n|\le B$ for every $n$, and put $I_0=[-B,B]$. Having defined $I_\ell$, bisect it into its two closed halves and define $I_{\ell+1}$ to be the left half if that half contains $b_n$ for infinitely many indices $n$, and the right half otherwise. At least one half contains infinitely many such indices, so this rule is defined and unique. Set $e_0=0$ and let $e_\ell$ be the least $n>e_{\ell-1}$ with $b_n\in I_\ell$. These minima exist because the corresponding index sets are infinite. Then $E(b)(\ell)=e_\ell$ is strictly increasing and $(b_{e_\ell})$ is Cauchy: for $p,q\ge\ell$, both values lie in $I_\ell$, whose length is $2B2^{-\ell}$. It converges, since [F8] gives a convergent subsequence of this bounded Cauchy sequence and the Cauchy inequality forces the entire sequence to have the same limit. All intervals and indices are uniquely specified; this defines a function $E$ without any choice principle. [given, F8, construct, algebra]

5.2 Enumerate the real and imaginary coefficient coordinates, Fourier modes, and rational times in $[0,T]$ by a fixed explicit integer-height and lexicographic enumeration; denote the resulting bounded real sequences in the approximation index $N$ by $b^1,b^2,\ldots$. Starting with $h_0(n)=n$, define recursively $h_i=h_{i-1}\circ E(b^i\circ h_{i-1})$ and put $N_\ell=h_\ell(\ell)$. The successor in this recursion is a specified function of $h_{i-1}$, so this is ordinary recursion, not a succession of unspecified dependent selections. Each $h_i$ is strictly increasing and its range is contained in every preceding range. Moreover $N_{\ell+1}=h_\ell(E(b^{\ell+1}\circ h_\ell)(\ell+1))\ge h_\ell(\ell+1)>N_\ell$. For each fixed $i$, the tail $(N_\ell)_{\ell\ge i}$ is an increasing subsequence of the range of $h_i$, on which $b^i$ converges. Thus this one subsequence converges at every enumerated coefficient-time coordinate. Countable Choice remains the standing analytic Fourier assumption; the diagonal construction itself does not require dependent choice. [step 4.1, step 5.1, construct, algebra]

5.3 The equicontinuity from step 4.1 upgrades convergence at rational times to uniform-in-time convergence of each fixed Fourier coefficient. Given $\varepsilon>0$, choose a finite rational time grid so that every time is close enough to a grid point to make each of the two equicontinuity errors below $\varepsilon/3$; choose the subsequence indices large enough that the finitely many grid values differ by less than $\varepsilon/3$. The triangle inequality makes each coordinate uniformly Cauchy, and scalar completeness supplies its uniform limit. [step 4.1, step 5.2, F8, algebra]

6.1 For each integer $m\ge s$, Parseval [F2] and the uniform $H^{m+1}$ bound give $\|(I-S_K)u_N(t)\|_{H^m}\le K^{-1}\|u_N(t)\|_{H^{m+1}}$ for $K\ge1$. The right side tends to zero uniformly in $N,t$ as $K\to\infty$. Combining this tail estimate with the finite-mode uniform convergence in step 5.3 proves that the diagonal subsequence is Cauchy in $C([0,T],H^m)$ for every integer $m\ge s$. Completeness of the coefficient space [F1] yields a limit $u\in\bigcap_{m\ge s}C([0,T],H^m)$; finite sums show $\sup_t\|u(t)\|_{H^m}\le\sup_N\sup_t\|u_N(t)\|_{H^m}$, and coefficientwise limits preserve reality, divergence-free constraints, and $u(0)=u_0$. [step 5.3, step 3.1, F1, F2]

7.1 Fix integer $m\ge s$. Product convergence follows from $u_N\to u$ in $C_tH^m$ and [F4]: $(u_N\cdot\nabla)u_N-(u\cdot\nabla)u=(u_N-u)\cdot\nabla u_N+u\cdot\nabla(u_N-u)\to0$ in $C_tH^{m-1}$. Also $\Delta u_N\to\Delta u$ in $C_tH^{m-2}$. [step 6.1, F4]

8.1 The Fourier cutoff converges uniformly on the compact time image of the continuous curve $t\mapsto P((u\cdot\nabla)u)(t)$ in $H^{m-2}$: choose a finite $\varepsilon$-net of that image, use strong Fourier-tail convergence at each net point, and use $\|S_N\|\le1$ to control every point by its net representative. Together with step 7.1 and $\|P\|\le1$ from [F3], this gives $S_NP((u_N\cdot\nabla)u_N)\to P((u\cdot\nabla)u)$ uniformly in $H^{m-2}$. [step 7.1, F2, F3]

9.1 Each finite-dimensional curve satisfies its integrated ODE. The right-hand sides converge uniformly in $H^{m-2}$ by the product-convergence and uniform cutoff-convergence arguments above, and $S_Nu_0\to u_0$ by the Fourier tail of the smooth datum. A continuous curve into the complete coefficient Hilbert space has a Riemann integral: uniform continuity makes its Riemann sums Cauchy and completeness gives their limit; the triangle inequality on the sums gives $\|\int_0^tG_N-\int_0^tG\|_{H^{m-2}}\le T\sup_s\|G_N(s)-G(s)\|_{H^{m-2}}$. Passing to the limit therefore yields $u(t)=u_0+\int_0^t[-P((u\cdot\nabla)u)+\nu\Delta u](s)\,ds$. [step 6.1, step 7.1, step 8.1, F1]

10.1 The integrand in step 9.1 is continuous in $H^{m-2}$. For its integral $U(t)$, the difference quotient error satisfies $\|[U(t+h)-U(t)]/h-G(t)\|\le\sup_{s\text{ between }t\text{ and }t+h}\|G(s)-G(t)\|\to0$ by continuity. Hence $u_t=-P((u\cdot\nabla)u)+\nu\Delta u$ in $C([0,T],H^{m-2})$. Since $m\ge s$ was arbitrary, the equation holds at every spatial Sobolev order covered by the Statement. [step 9.1, F1]

11.1 The bounds $u\in C_tH^m$ for every integer $m$ and the embeddings in [F4] give continuous spatial derivatives of every order. Since step 10.1 holds in $H^{m-2}$ for arbitrary $m$, $u_t$ is continuous in every $H^r$ by choosing $m\ge r+2$, so $u\in C^1_tH^r$ for every $r$. If $u$ has $j$ continuous time derivatives in every Sobolev order, differentiating the right side $-P((u\cdot\nabla)u)+\nu\Delta u$ $j$ times produces a finite sum of products of spatial derivatives of those time derivatives; [F4] makes each product continuous in every lower Sobolev order. Induction on $j$ therefore gives all mixed derivatives continuously to the endpoints, hence $u\in C^\infty([0,T]\times\mathbb T^d)$. [step 6.1, step 10.1, F4]

12.1 Since $d\le3$ and $s\ge4$, we have $s>d/2+1$. The pressure recovery statement [F9] therefore applies to the smooth divergence-free field from step 11.1 and yields the unique mean-zero $\pi=Q(u\otimes u)$ with $P(u\cdot\nabla u)=u\cdot\nabla u+\nabla\pi$. Substitution into the projected equation gives $u_t+(u\cdot\nabla)u=-\nabla\pi+\nu\Delta u$. [given, step 11.1, F9, algebra]

12.2 Let $u,v$ be any two smooth solutions with the same initial datum and viscosity. They satisfy the hypotheses of [F10], so $\|u(t)-v(t)\|_2^2\le0\cdot\exp(2\int_0^t\|\nabla v(s)\|_\infty ds)=0$ for each $t\in[0,T]$. Thus $u=v$ throughout the interval. This proves uniqueness conditional on the actual smooth-solution difference-energy input. [given, F10, step 11.1, algebra]

13.1 The construction, regularity, pressure recovery, and uniqueness arguments above establish the claimed smooth solution and same-interval all-order bounds. The existence time was chosen in step 2.1 solely from $d$, $s$, and $\|u_0\|_{H^s}$ and was independent of $\nu$ and higher norms. [step 2.1, step 3.1, step 10.1, step 11.1, step 12.1, step 12.2] ∎

