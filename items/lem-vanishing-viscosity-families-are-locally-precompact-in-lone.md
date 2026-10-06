---
id: lem-vanishing-viscosity-families-are-locally-precompact-in-lone
kind: lemma
title: Vanishing-viscosity families are locally precompact in $L^1$
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
deps: [lem-viscous-scalar-laws-contract-spatial-translates-in-lone, lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds, thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution, thm-frechet-kolmogorov-compactness-criterion-in-lp, def-dependent-choice, def-countable-choice, def-radial-mollifier-family-in-rn, def-metric-ball, thm-heine-borel-rn, thm-compact-implies-the-other-compactness-forms, cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence, thm-dominated-convergence, def-l-p-space-as-a-quotient-by-null-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-riesz-fischer-completeness-of-l-p, lem-euclidean-bump-for-a-compact-set-inside-an-open-set]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§4, Lemmas 4–5 and (4.12)–(4.15), pp. 232–235"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, vanishing-viscosity entropy passage, pp. 48–49; the compactness/time-modulus argument is proved locally"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice. Let $n\ge1$, $T>0$, $u_0\in C_c^\infty(\mathbb R^n)$,
and put $M=\|u_0\|_\infty$. Let $(f_j)_{j\ge1}$ be $C^2$ fluxes
$f_j\colon\mathbb R\to\mathbb R^n$ with $f_j(0)=0$ and
$$\sup_j\sup_{|s|\le M+1}|f_j'(s)|<\infty.$$
For $0<\varepsilon_j\le1$ with $\varepsilon_j\downarrow0$, let $u^j$ be the
global mild classical viscous solution with flux $f_j$ and datum $u_0$, as
supplied by
[[thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution]].
Then every subsequence has a further subsequence converging in $L^1(K)$ for
every compact $K\Subset\Pi_T$ to $u\in L^\infty\cap L^1_{\mathrm{loc}}(\Pi_T)$
with $\|u\|_\infty\le M$; a further subsequence converges almost everywhere on
$\Pi_T$. The limit has a representative in
$C([0,T];L^1_{\mathrm{loc}}(\mathbb R^n))$ with $u(0)=u_0$ in
$L^1_{\mathrm{loc}}$. In particular this applies to a $C^1$-convergent smooth
approximation of one flux. The extraction uses Dependent Choice; energy
dissipation alone does not give this strong compactness
([[def-metric-ball]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Facts & Assumptions

**Given:** Dependent Choice, $n\ge1$, $T>0$, $u_0\in C_c^\infty(\mathbb R^n)$, $M=\|u_0\|_\infty$, $C^2$ fluxes $f_j$ with $f_j(0)=0$ and $L:=\sup_j\sup_{|s|\le M+1}|f_j'(s)|<\infty$, $0<\varepsilon_j\le1$ with $\varepsilon_j\downarrow0$, and the viscous solutions $u^j$ of $u^j_t+\operatorname{div}_x f_j(u^j)=\varepsilon_j\Delta u^j$ on $\Pi_T$ with $u^j(0,\cdot)=u_0$.

[F1] Each $u^j$ is a classical global solution with $u^j\in C([0,T];C_b(\mathbb R^n))\cap C([0,T];L^1(\mathbb R^n))\cap C^{1,2}(\mathbb R^n\times(0,T))$, and $u^j(t,\cdot)\to u_0$ in $L^1(\mathbb R^n)$ as $t\downarrow0$ ([[thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution]]).

[F2] Uniform bounds: $|u^j(t,x)|\le M$ and $\|u^j(t,\cdot)\|_1\le\|u_0\|_1$ for all $j\ge1$ and $t\in[0,T]$ ([[lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds]]).

[F3] Uniform spatial modulus: for all $j$, $t\in[0,T]$ and $z\in\mathbb R^n$, $\|u^j(t,\cdot+z)-u^j(t,\cdot)\|_1\le\|u_0(\cdot+z)-u_0(\cdot)\|_1\le\omega_0(|z|)$, where $\omega_0(r)=\sup_{|z|\le r}\|u_0(\cdot+z)-u_0(\cdot)\|_1\downarrow0$ as $r\downarrow0$ by uniform continuity of the compactly supported $u_0$; the estimate depends on $f_j$ only through the derivative bound $L$ on the range, so it is uniform in $j$ ([[lem-viscous-scalar-laws-contract-spatial-translates-in-lone]]).

[F4] Mollification and cutoffs: for an even mollifier $\varrho_h$ with support in $B_h$ and a bounded compactly supported $F\in L^\infty$, the convolution $g=\varrho_h*F$ is smooth with $\nabla g=(\nabla\varrho_h)*F$, $\Delta g=(\Delta\varrho_h)*F$ (differentiation under the integral sign via difference quotients and dominated convergence) and $\|D^\alpha g\|_\infty\le Ch^{-|\alpha|}$ for $|\alpha|\le2$; Fubini's theorem gives $\int gw=\int F(\varrho_h*w)\,dx$ whenever $w\in L^1_{\mathrm{loc}}$ and $F$ is bounded with compact support, and the mollification error obeys $\|\varrho_h*w-w\|_{L^1(B_{R+\rho/2})}\le\sup_{|y|\le h}\|w(\cdot+y)-w(\cdot)\|_{L^1(B_{R+\rho})}$ ([[def-radial-mollifier-family-in-rn]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-dominated-convergence]]).

[F5] For every $R>0$, $\rho\in(0,1)$ and every compact cylinder there exist smooth cutoffs $0\le\chi\in C_c^\infty(B_{R+\rho/2})$ with $\chi=1$ on $B_R$, and $\psi\in C_c^\infty(\mathbb R^n)$, $\theta\in C_c^\infty((0,T))$ equal to $1$ on the spatial and temporal projections of that cylinder ([[def-metric-ball]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]).

[F6] Fréchet–Kolmogorov criterion: a family in $L^1(\mathbb R^d)$ that is uniformly bounded, has uniformly small tails, and is uniformly translation-continuous is relatively compact, and every sequence in it has a subsequence converging in $L^1(\mathbb R^d)$; the criterion is used with the Axioms of Countable and Dependent Choice, and $L^1$ convergence yields an almost-everywhere convergent subsequence, while each $L^1$ space is complete ([[thm-frechet-kolmogorov-compactness-criterion-in-lp]], [[cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence]], [[thm-riesz-fischer-completeness-of-l-p]], [[def-dependent-choice]], [[def-countable-choice]]).

[F7] Fubini's theorem selects almost every time slice of an $L^1(\Pi_T)$ function, compact subsets of $\Pi_T$ are covered by cylinders $\overline B(0,l)\times[1/l,T-1/l]$ and exhaustion arguments use Heine–Borel and sequential compactness ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-heine-borel-rn]], [[thm-compact-implies-the-other-compactness-forms]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 **Uniform bounds and spatial modulus.** By [F2], $|u^j(t,x)|\le M$ and $\|u^j(t,\cdot)\|_1\le\|u_0\|_1$ for all $j,t$; by [F3], $\|u^j(t,\cdot+z)-u^j(t,\cdot)\|_1\le\omega_0(|z|)$ with $\omega_0(r)\downarrow0$, uniformly in $j$ and $t$. [F2, F3]


1.2 **The local time modulus.** Fix $R>0$, $0<\rho<1$, $j$, and $t,\tau$ with $t,t+\tau\in[0,T]$; put $w=u^j(t+\tau,\cdot)-u^j(t,\cdot)$. Choose $\chi$ as in [F5] and an even mollifier $\varrho_h$ with $0<h<\rho/4$; set $z=\varrho_h*w$ and $g=\varrho_h*(\chi\,\operatorname{sgn}z)\in C_c^\infty(B_{R+\rho})$, so that $\|D^\alpha g\|_\infty\le Ch^{-|\alpha|}$ for $|\alpha|\le2$ and $\int_{\mathbb R^n}gw\,dx=\int_{\mathbb R^n}\chi|z|\,dx$ by [F4]. Assume $\tau>0$; negative increments follow by reversing the two times. Since $u^j$ solves the viscous equation pointwise at positive times and is $C^1$ there, $\frac{d}{ds}\int g\,u^j(t+s,\cdot)\,dx=\int\nabla g\cdot f_j(u^j(t+s,\cdot))\,dx+\varepsilon_j\int\Delta g\,u^j(t+s,\cdot)\,dx$ for $s\in[0,\tau]$; integrating over $s$ and using $\|f_j(v)\|_1\le L\|v\|_1$ for $|v|\le M$ and [F2], $\bigl|\int gw\bigr|\le\int_0^\tau\bigl(\|\nabla g\|_\infty L\|u_0\|_1+\varepsilon_j\|\Delta g\|_\infty\|u_0\|_1\bigr)ds\le C_R\tau h^{-2}$. [F1, F2, F4, F5]


2.1 **The uniform modulus in $L^1_{\mathrm{loc}}$.** With $\chi,w,z$ as in step 1.2 and [F4], $\int_{B_R}|w|\le\int\chi|w|\le\int\chi|z|+\int\chi|w-z|\le C_R\tau h^{-2}+2\omega_0(h)$, because $\int\chi|z|=\bigl|\int gw\bigr|$ and $\|w-z\|_{L^1(B_{R+\rho/2})}\le 2\omega_0(h)$ by [F3] applied at the two times $t$ and $t+\tau$. Taking $h=\tau^{1/3}$ (for $0<\tau<(\rho/4)^3$) gives $\int_{B_R}|u^j(t+\tau)-u^j(t)|\le C_R\bigl(\omega_0(\tau^{1/3})+\tau^{1/3}\bigr)=:\eta_R(\tau)$ with $\eta_R(\tau)\to0$ as $\tau\downarrow0$, uniformly in $j$ and in $t\in[0,T-\tau]$; the endpoint $t=0$ follows by first integrating from a positive time and then using the $L^1$ continuity $u^j(t)\to u_0$. [F3, F4, step 1.2]


3.1 **Relative compactness on cylinders.** Fix $l\ge1$ and cutoffs $\psi_l,\theta_l$ as in [F5] equal to $1$ on the projections of the cylinder $K_l=\overline B(0,l)\times[1/l,T-1/l]$, and set $F_l^j(t,x)=\theta_l(t)\psi_l(x)\,u^j(t,x)$, extended by zero. The family $(F_l^j)_j$ is uniformly bounded in $L^1(\mathbb R^{n+1})$ by $T\|\theta_l\psi_l\|_\infty\|u_0\|_1$, has common compact support (uniform tails), and is uniformly translation-continuous: for a shift $(y,s)$ one has $\|F_l^j(\cdot+(y,s))-F_l^j\|_1\le\|F_l^j(t+s,x+y)-F_l^j(t,x+y)\|_1+\|F_l^j(t,x+y)-F_l^j(t,x)\|_1$, where the spatial part is bounded by $T\|(\theta_l\psi_l)(\cdot+y)-(\theta_l\psi_l)\|_\infty\|u_0\|_1+T\|\theta_l\psi_l\|_\infty\omega_0(|y|)$ and the temporal part by $T\|\theta_l(\cdot+s)-\theta_l\|_\infty\|\psi_l\|_\infty\|u_0\|_1+T\|\theta_l\psi_l\|_\infty\eta_{l'}(|s|)$ for a radius $l'$ containing $\operatorname{supp}\psi_l$, both tending to $0$ as $|(y,s)|\to0$ uniformly in $j$ by step 1.1 and step 2.1. By [F6] every subsequence of $(F_l^j)_j$ has a further subsequence converging in $L^1(\mathbb R^{n+1})$, hence, after diagonal extraction over the countably many $l\ge1$ (Dependent Choice), some subsequence of $(u^j)$ converges in $L^1(K_l)$ for every $l$, and therefore in $L^1(K)$ for every compact $K\Subset\Pi_T$, since each such $K$ lies in some $K_l$. [F5, F6, F7, step 2.1]


3.2 **Continuous representative and the initial trace.** Pass to a further subsequence converging almost everywhere on $\Pi_T$ by [F6]. Since $|u^{j_k}|\le M$, this gives $|u|\le M$ almost everywhere; by Fubini and dominated convergence, there is a common full-measure set $S\subset(0,T)$ on which $u^{j_k}(t)\to u(t)$ in $L^1(B_m)$ for every integer $m\ge1$. Thus $S$ is dense. Fix $m$ and choose an integer $m'>m$. For $s,t\in S$ sufficiently close that step 2.1 applies, lower semicontinuity on the local ball, followed by its time-modulus estimate on the larger ball, gives $$\|u(t)-u(s)\|_{L^1(B_m)}\le\liminf_k\|u^{j_k}(t)-u^{j_k}(s)\|_{L^1(B_m)}\le\eta_{m'}(|t-s|).$$ For $t\in S$ sufficiently close to $0$, the same local comparison with $u^{j_k}(0,\cdot)=u_0$ gives $\|u(t)-u_0\|_{L^1(B_m)}\le\eta_{m'}(t)$. This modulus tending to zero at zero makes the map on $S$ uniformly continuous; completeness of $L^1(B_m)$ extends it uniquely to a continuous map on $[0,T]$, with value $u_0$ at $t=0$. These extensions agree on nested balls because they agree on the dense set $S$. Consequently $u$ has a representative in $C([0,T];L^1_{\mathrm{loc}}(\mathbb R^n))$ with $u(0)=u_0$ in $L^1_{\mathrm{loc}}$. [F6, F7, step 2.1]


4.1 **Limit properties.** The diagonal limit of step 3.1 lies in $L^1_{\mathrm{loc}}(\Pi_T)$ and the selected subsequence converges in $L^1(K)$ for every compact $K\Subset\Pi_T$; the further almost-everywhere subsequence in step 3.2 preserves these convergences and passes the uniform bound $|u^{j_k}|\le M$ to $u$. This establishes the asserted limit and almost-everywhere convergence. [F2, F6, step 3.1, step 3.2]


5.1 **Applicability and hypotheses.** If $f_j\to f$ in $C^1$ on compact sets with $\sup_j\sup_{|s|\le M+1}|f_j'(s)|<\infty$ — a $C^1$-convergent smooth approximation of one flux — then the hypotheses above hold, so the conclusions apply. The extraction used Dependent Choice in the diagonal step 3.1 (and Countable Choice inside [F6]); the uniform energy dissipation $\varepsilon_j\int_0^T\!\!\int|\nabla u^j|^2\le\tfrac12\|u_0\|_2^2$ supplies only a uniform gradient bound and would not by itself give the compactness in $L^1$ obtained from the uniform bounds and translation moduli of steps 1.1 and 2.1. [F2, F6, step 1.1, step 2.1, step 3.1] ∎
