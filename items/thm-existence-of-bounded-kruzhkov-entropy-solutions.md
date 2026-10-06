---
id: thm-existence-of-bounded-kruzhkov-entropy-solutions
kind: theorem
title: Existence of bounded Kruzhkov entropy solutions
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
deps: [lem-vanishing-viscosity-families-are-locally-precompact-in-lone, lem-viscous-scalar-laws-contract-spatial-translates-in-lone, lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds, thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution, def-kruzhkov-entropy-solution, prop-viscous-entropy-dissipation-identity, cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions, cor-global-lone-contraction-from-the-local-kruzhkov-estimate, prop-mollifier-families-are-l-one-approximate-identities, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, def-countable-choice, def-dependent-choice, def-l-p-space-as-a-quotient-by-null-functions, def-scalar-conservation-law-and-flux, thm-riesz-fischer-completeness-of-l-p, thm-l-one-approximate-identities-converge-in-l-p, lem-euclidean-bump-for-a-compact-set-inside-an-open-set]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§4, Theorems 4–5, pp. 229–239"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§§5.5–6, pp. 45–52"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§8, pp. 57–60"
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the heat-kernel, $L^1$ completeness and
vanishing-viscosity extraction interfaces used below. Let $n\ge1$, $T>0$, let
$f\colon\mathbb R\to\mathbb R^n$ be locally Lipschitz and $C^1$, and let
$u_0\in L^\infty(\mathbb R^n)\cap L^1(\mathbb R^n)$. Then there exists a
Kruzhkov entropy solution
$u\in L^\infty(\Pi_T)\cap C^0([0,T];L^1_{\mathrm{loc}}(\mathbb R^n))$ of
$u_t+\operatorname{div}_x f(u)=0$ with $u(\cdot,0)=u_0$ in the strong
$L^1_{\mathrm{loc}}$ sense, satisfying $\|u(t,\cdot)\|_\infty\le\|u_0\|_\infty$
for every $t$. By
[[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]] this
solution is unique. The route is vanishing viscosity, and the compactness comes
from the translation lemmas, not from the energy dissipation alone
([[def-scalar-conservation-law-and-flux]], [[def-kruzhkov-entropy-solution]]).

## Facts & Assumptions

**Given:** Countable and Dependent Choice, $n\ge1$, $T>0$, a locally Lipschitz $C^1$ flux $f$, and $u_0\in L^\infty(\mathbb R^n)\cap L^1(\mathbb R^n)$ with $M=\|u_0\|_\infty$.

[F1] The weak formulation: $u$ is a distributional weak solution of $u_t+\operatorname{div}_xf(u)=0$ on $\Pi_T$ iff $\int_{\Pi_T}(u\varphi_t+f(u)\cdot\nabla\varphi)=0$ for every $\varphi\in C_c^\infty(\Pi_T)$; subtracting the constant $f(0)$ from the flux changes neither the divergence term nor the Kruzhkov fluxes $\operatorname{sgn}(u-k)(f(u)-f(k))$, so all existence and entropy statements may be proved for the normalized flux $\widetilde f=f-f(0)$ and transferred back ([[def-scalar-conservation-law-and-flux]], [[def-kruzhkov-entropy-solution]]).

[F2] Viscous solutions: for every $C^2$ flux $g$ with $g(0)=0$, every $\varepsilon\in(0,1]$ and every datum in $C_c^\infty$, there is a global classical solution of $u_t+\operatorname{div}_xg(u)=\varepsilon\Delta u$ with $u\in C([0,T];C_b)\cap C([0,T];L^1)\cap C^{1,2}(\mathbb R^n\times(0,T))$, range contained in the initial range, and $\|u(t,\cdot)\|_1\le\|u_0\|_1$ ([[thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution]], [[lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds]]).

[F3] Viscous entropy balance: for every convex $C^2$ entropy $\eta$ with flux $q'=\eta'g'$, $\partial_t\eta(u)+\operatorname{div}_xq(u)=\varepsilon\Delta\eta(u)-\varepsilon\eta''(u)|\nabla u|^2$ pointwise, and the Laplacian term integrates by parts against compactly supported tests ([[prop-viscous-entropy-dissipation-identity]]).

[F4] Mollification: convolving a locally integrable function with a radial mollifier gives a smooth function; the mollified derivatives are the convolutions of the derivatives, and on compact sets the mollified flux and its derivative converge uniformly to the original for $C^1$ data; approximate identities converge in $L^1$, and the classes of $L^p$ are equivalence classes ([[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[def-l-p-space-as-a-quotient-by-null-functions]]). The norm convergence assertion is [[thm-l-one-approximate-identities-converge-in-l-p]]; the compact cutoffs are [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]].

[F5] Vanishing-viscosity compactness: for smooth compactly supported data, $C^2$ fluxes $f_m$ with $f_m(0)=0$ and uniformly bounded derivatives on the range $[-M-1,M+1]$, and $0<\varepsilon_m\le1$, $\varepsilon_m\downarrow0$, the viscous solutions have a subsequence converging in $L^1(K)$ for every compact $K\Subset\Pi_T$ and almost everywhere on $\Pi_T$ to $u\in L^\infty\cap L^1_{\mathrm{loc}}(\Pi_T)$ with $\|u\|_\infty\le M$, having a representative in $C([0,T];L^1_{\mathrm{loc}})$ with $u(0)=u_0$ in $L^1_{\mathrm{loc}}$; the extraction uses Dependent Choice ([[lem-vanishing-viscosity-families-are-locally-precompact-in-lone]]).

[F6] Contraction and uniqueness: for data in $L^1\cap L^\infty$ the global $L^1$ difference of two entropy solutions is bounded by the $L^1$ difference of their data, at every time if the representatives are $L^1_{\mathrm{loc}}$-continuous; two bounded Kruzhkov entropy solutions with the same data coincide almost everywhere ([[cor-global-lone-contraction-from-the-local-kruzhkov-estimate]], [[cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions]]).

[F7] Limits and completeness: dominated and monotone convergence for integrals over fixed compact sets with uniformly bounded integrands, and completeness of $L^1(K)$ for compact $K$ ([[thm-dominated-convergence]], [[thm-monotone-convergence-for-the-integral]], [[thm-riesz-fischer-completeness-of-l-p]]).

## Proof

**Proof technique:** direct.

1.1 **Normalization and smooth flux approximation.** By [F1] it suffices to treat $\widetilde f=f-f(0)$. Choose a radial mollifier and, for $m\ge1$, set $f_m(s)=\chi(s)\,(\widetilde f*\rho_{1/m})(s)-(\widetilde f*\rho_{1/m})(0)$, where $\chi\in C_c^\infty$ equals $1$ on $[-M-\tfrac12,M+\tfrac12]$ and is supported in $[-M-1,M+1]$. Then each $f_m$ is $C^\infty$ (hence $C^2$), $f_m(0)=0$, and on $[-M-\tfrac12,M+\tfrac12]$ one has $f_m\to\widetilde f$ and $f_m'=\widetilde f'*\rho_{1/m}\to\widetilde f'$ uniformly by [F4]; in particular $\sup_m\sup_{|s|\le M+1}|f_m'(s)|<\infty$. [F1, F4]


1.2 **Smooth-datum case: extraction.** Let $u_0\in C_c^\infty(\mathbb R^n)$ with $\|u_0\|_\infty=M$, choose $\varepsilon_m\downarrow0$ with $0<\varepsilon_m\le1$, and let $u^m$ be the global classical solution with flux $f_m$ and datum $u_0$ given by [F2]. Then $|u^m(t,x)|\le\|u_0\|_\infty=M$ by the range bound of [F2], so the hypotheses of [F5] are met; passing to a subsequence (relabelled) there is $u\in L^\infty\cap L^1_{\mathrm{loc}}(\Pi_T)$ with $\|u\|_\infty\le M$, $u^m\to u$ in $L^1(K)$ for every compact $K\Subset\Pi_T$ and almost everywhere, and $u$ has a representative in $C([0,T];L^1_{\mathrm{loc}})$ with $u(0)=u_0$ in $L^1_{\mathrm{loc}}$. At every time $t$ this representative obeys $|u(t,\cdot)|\le M$ almost everywhere: for $t$ in the full-measure set where the construction of [F5] passes the bound, slicewise almost-everywhere convergence preserves it, and general $t$ follows by $L^1_{\mathrm{loc}}$-continuity. [F2, F5]


2.1 **The weak equation passes to the limit.** For $\varphi\in C_c^\infty(\Pi_T)$, testing the pointwise viscous equation of $u^m$ gives $\int_{\Pi_T}\bigl(u^m\varphi_t+f_m(u^m)\cdot\nabla\varphi\bigr)=-\varepsilon_m\int_{\Pi_T}u^m\Delta\varphi$, whose right side is bounded by $\varepsilon_mM\|\Delta\varphi\|_1\to0$. The left side converges to $\int_{\Pi_T}(u\varphi_t+\widetilde f(u)\cdot\nabla\varphi)$ by [F7], because $u^m\to u$ almost everywhere with uniform bounds and $f_m\to\widetilde f$ uniformly on $[-M,M]$; hence $u$ is a weak solution for $\widetilde f$, and therefore for $f$ by [F1]. [F1, F7, step 1.1, step 1.2]


2.2 **Entropy inequalities for $|k|\le M$.** Fix $k\in[-M,M]$ and $\delta>0$, and put $\eta_\delta(r)=\sqrt{r^2+\delta^2}-\delta$, a convex $C^2$ function with $0\le\eta_\delta\le|\cdot|$, $|\eta_\delta(r)-|r||\le\delta$, and $\eta_\delta''\ge0$; let $q_{\delta,k,m}(s)=\int_k^s\eta_\delta'(r-k)f_m'(r)\,dr$, so $q_{\delta,k,m}'=\eta_\delta'(\cdot-k)f_m'$. Let $\varphi\in C_c^\infty(\mathbb R^n\times[0,T))$ be nonnegative. Multiplying the exact viscous balance [F3] for the pair $(\eta_\delta(\cdot-k),q_{\delta,k,m})$ by $\varphi$, integrating over $\Pi_T$ and integrating the Laplacian by parts gives $$I_{m,\delta}:=\int_{\Pi_T}\bigl(\eta_\delta(u^m-k)\varphi_t+q_{\delta,k,m}(u^m)\cdot\nabla\varphi\bigr)+\int_{\mathbb R^n}\eta_\delta(u_0-k)\varphi(x,0)\,dx=-\varepsilon_m\int_{\Pi_T}\eta_\delta(u^m-k)\Delta\varphi+\varepsilon_m\int_{\Pi_T}\eta_\delta''(u^m-k)|\nabla u^m|^2\varphi$$ — the only boundary term is the one at $t=0$, displayed with the initial datum; the last term is nonnegative and the first is bounded by $\varepsilon_m\cdot2M\|\Delta\varphi\|_1\to0$, so $\liminf_mI_{m,\delta}\ge0$. On the other hand $I_{m,\delta}$ converges by [F7]: $u^m\to u$ almost everywhere, $|\eta_\delta(u^m-k)|\le2M$, and $q_{\delta,k,m}\to q_{\delta,k}$ uniformly on $[-M,M]$, where $q_{\delta,k}(s)=\int_k^s\eta_\delta'(r-k)\widetilde f'(r)\,dr$, so the limit obeys $I_\delta=\int_{\Pi_T}\bigl(\eta_\delta(u-k)\varphi_t+q_{\delta,k}(u)\cdot\nabla\varphi\bigr)+\int_{\mathbb R^n}\eta_\delta(u_0-k)\varphi(x,0)\,dx\ge0$. [F3, F4, F7, step 1.1, step 1.2]


3.1 **The Kruzhkov inequalities.** Letting $\delta\downarrow0$ in step 2.2, $\eta_\delta(r-k)\to|r-k|$ uniformly on $[-M,M]$ and $q_{\delta,k}(s)\to\int_k^s\operatorname{sgn}(r-k)\widetilde f'(r)\,dr=\operatorname{sgn}(s-k)(\widetilde f(s)-\widetilde f(k))=q_k(s)$ uniformly on $[-M,M]$ by dominated convergence, since $|\eta_\delta'|\le1$ and $\widetilde f'$ is continuous there; hence dominated convergence gives $\int_{\Pi_T}\bigl(|u-k|\varphi_t+q_k(u)\cdot\nabla\varphi\bigr)+\int|u_0-k|\varphi(x,0)\,dx\ge0$ for every nonnegative $\varphi\in C_c^\infty(\mathbb R^n\times[0,T))$ and every $k\in[-M,M]$. If $k>M$, then $u-k<0$ almost everywhere, $\eta_k$ is affine on the range $[-M,M]$, and $q_k(s)=\widetilde f(k)-\widetilde f(s)$, so the identity $\partial_t\eta_k(u)+\operatorname{div}_xq_k(u)=-(u_t+\operatorname{div}_x\widetilde f(u))=0$ holds by step 2.1, and similarly for $k<-M$; thus all Kruzhkov inequalities hold and, with the trace of step 1.2, $u$ is a bounded Kruzhkov entropy solution with datum $u_0$. [F7, step 2.1, step 2.2]


4.1 **General datum: approximation and Cauchy property.** Now let $u_0\in L^\infty\cap L^1$ be arbitrary. By [F4] choose $u_0^r\in C_c^\infty$ with $\|u_0^r\|_\infty\le\|u_0\|_\infty$ and $u_0^r\to u_0$ in $L^1$ (truncate $u_0$ to a large ball and mollify). Steps 1.1–3.1 applied to each smooth datum $u_0^r$ give bounded Kruzhkov entropy solutions $u^r$ for the flux $f$, with $L^1_{\mathrm{loc}}$-continuous representatives and $\|u^r(t,\cdot)\|_\infty\le\|u_0^r\|_\infty\le M$. By [F6], for every $t\in[0,T]$, $\|u^r(t)-u^\ell(t)\|_1\le\|u_0^r-u_0^\ell\|_1$, so $\sup_{t\in[0,T]}\|u^r(t)-u^\ell(t)\|_{L^1(K)}\le\|u_0^r-u_0^\ell\|_1$ for every compact $K$, and the right side tends to $0$ as $r,\ell\to\infty$. [F4, F6, step 2.1, step 2.2, step 3.1]


5.1 **The limit for general datum.** By completeness of $L^1(K)$ [F7] and the uniform-in-time contraction in step 4.1, $u^r$ converges in $C([0,T];L^1(K))$ for each compact ball $K$, consistently on nested balls, to $u\in C([0,T];L^1_{\mathrm{loc}}(\mathbb R^n))$. Since $u^r(0)=u_0^r\to u_0$ in $L^1$, this representative has initial trace $u_0$. For every $t$ and ball $K$, the inequality $(|u(t)|-M)_+\le|u(t)-u^r(t)|+(|u^r(t)|-M)_+$ and $\|u^r(t)\|_\infty\le M$ show, after integration on $K$ and passage to the $L^1(K)$ limit, that $(|u(t)|-M)_+=0$ almost everywhere there. Thus $\|u(t)\|_\infty\le M$ for every $t$. The weak equation passes to the limit because $f$ is Lipschitz on $[-M,M]$ and $u^r\to u$ in local $L^1$. For each fixed $k\in\mathbb R$, $s\mapsto|s-k|$ is $1$-Lipschitz and $q_k(s)=\operatorname{sgn}(s-k)(f(s)-f(k))$ is Lipschitz on $[-M,M]$ with constant at most $\sup_{|s|\le M}|f'(s)|$. Therefore the entropy and flux terms in the inequality of step 3.1 converge in $L^1$ on every test support; the initial entropy term converges by $u_0^r\to u_0$ in $L^1$ and the same Lipschitz bound for $|\cdot-k|$. Passing to the limit proves every Kruzhkov inequality without requiring an almost-everywhere subsequence for the general-data approximation. Hence $u$ is a bounded Kruzhkov entropy solution with datum $u_0$. [F7, step 3.1, step 4.1]


6.1 **Uniqueness and conclusion.** If $v$ is another bounded Kruzhkov entropy solution with the same datum $u_0$, then $u=v$ almost everywhere on $\Pi_T$ by [F6], so the constructed solution is the unique bounded Kruzhkov entropy solution with this datum; this completes the proof. [F6, step 1.2, step 5.1] ∎
