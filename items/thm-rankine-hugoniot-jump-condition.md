---
id: thm-rankine-hugoniot-jump-condition
kind: theorem
title: The Rankine--Hugoniot jump condition in space--time normal form
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-scalar-conservation-law-and-flux, def-distributional-weak-solution-of-a-scalar-conservation-law, def-piecewise-smooth-shock-and-one-sided-traces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-ftc-second-part, thm-chain-rule, lem-schwartz-cutoffs-from-the-standard-smooth-step]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§4.2, Proposition 4.3 and (4.5)--(4.7), pp. 20--23"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.2, Theorem 1 and (2.6)--(2.10), pp. 11--14"
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§1, pp. 217–218"
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

Let $n\ge1$, $T>0$, $f\in C^1(\mathbb R;\mathbb R^n)$
([[def-scalar-conservation-law-and-flux]]), and let $u$ be a piecewise $C^1$
distributional weak solution
([[def-distributional-weak-solution-of-a-scalar-conservation-law]]) with
two-sided $C^1$ interface $\Gamma$ and traces as in
[[def-piecewise-smooth-shock-and-one-sided-traces]]. Orient the unit
space--time normal $\nu=(\nu_t,\nu_x)$ from the minus side to the plus side.
Then at every $\zeta\in\Gamma\subset U$,
$$[u](\zeta)\nu_t(\zeta)+[f](\zeta)\cdot\nu_x(\zeta)=0,$$
where $[u]=u^+-u^-$ and $[f]=f(u^+)-f(u^-)$.

In one space dimension, for a graph $x=s(t)$ with minus side $x<s(t)$ and plus
side $x>s(t)$, $\nu=(-s'(t),1)/\sqrt{1+s'(t)^2}$, so the condition is
$s'(t)[u](t)=[f](t)$ at every graph point. If $[u]\ne0$ in one dimension, then
$s'=[f]/[u]$; if $[u]=0$, then $[f]=0$ and the relation is $0=0$, with no speed
constraint.

## Facts & Assumptions

**Given:** $n\ge1$, a piecewise $C^1$ weak solution $u$ with interface $\Gamma\subset U$ and traces $u^\pm$, a point $\zeta_0\in\Gamma$, and one-sided $C^1$ local extensions $\widetilde u^\pm$ on a neighbourhood $V\subset U$ of $\zeta_0$.

[F1] The weak identity reads $\int_{\Pi_T}(u\varphi_t+f(u)\cdot\nabla_x\varphi)=0$ for every $\varphi\in C_c^\infty(\Pi_T)$, i.e. $\operatorname{div}_{t,x}F(u)=0$ in distributions, where $F(u)=(u,f(u))$ ([[def-distributional-weak-solution-of-a-scalar-conservation-law]], [[def-scalar-conservation-law-and-flux]]).

[F2] Locally about a point of a $C^1$ hypersurface, after permuting coordinates, a patch is a graph $z_k=\gamma(z')$ over the remaining $n$ coordinates $z'$, with $\gamma\in C^1$; the unnormalised normal $N=e_k-\sum_{j\ne k}(\partial_j\gamma)e_j$ points from the region below the graph to the region above it, and the unit normal of [F1]'s orientation is $\nu=\sigma N/|N|$ with $\sigma=1$ if the minus side lies below the graph and $\sigma=-1$ otherwise; also $[F]=([u],[f])$, and a continuous function vanishing against all nonnegative smooth bumps on an open set vanishes there ([[def-piecewise-smooth-shock-and-one-sided-traces]], [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F3] Iterated integration: Fubini's theorem for the product representation, the one-dimensional fundamental theorem of calculus to integrate the $z_k$-derivative across the graph, and the chain rule to differentiate a moving-endpoint integral in the tangential variables ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-ftc-second-part]], [[thm-chain-rule]]).

## Proof

**Proof technique:** direct.

1.1 **Side extensions solve the equation classically.** On each side of $\Gamma$ the function $u$ agrees with a $C^1$ extension $\widetilde u^\pm$; testing away from $t=0$ and against bumps supported in a single side, the weak identity [F1] shows that $\operatorname{div}_{t,x}F(\widetilde u^\pm)$ vanishes as a distribution on that side. Since $F(\widetilde u^\pm)$ is $C^1$, its divergence is continuous, and by [F2] it vanishes pointwise; consequently, for smooth compactly supported $\varphi$ supported in the side, $\operatorname{div}_{t,x}(F(u^\pm)\varphi)=F(u^\pm)\cdot D\varphi$. [F1, F2]


2.1 **Graph computation on one side.** After a permutation of coordinates, write the graph locally as $z_k=\gamma(z')$ and take $\varphi$ supported in a box $B'\times(a,b)$ in which the graph stays in $(a,b)$. With $G_j=F_j(u^L)\varphi$ on the lower side, [F3] gives $\int_{\text{lower}}F(u^L)\cdot D\varphi=\int_{\text{lower}}\operatorname{div}(F(u^L)\varphi)=\int_{B'}G_k^L(z',\gamma(z'))\,dz'-\sum_{j\ne k}\int_{B'}G_j^L(z',\gamma(z'))\partial_j\gamma(z')\,dz'=\int_{B'}G^L(z',\gamma(z'))\cdot N(z')\,dz'$, because the $k$-derivative integrates to the trace at the graph and each tangential derivative of the moving-endpoint integral $A_j(z')=\int_a^{\gamma(z')}G_j(z',r)\,dr$ contributes $-\partial_j\gamma\,G_j$ at the graph, the integral of $\partial_jA_j$ vanishing by compact support. [F3, step 1.1]


3.1 **Upper side and the interface term.** The same computation on the upper side, with the graph as its lower boundary, gives $\int_{\text{upper}}F(u^R)\cdot D\varphi=-\int_{B'}G^R(z',\gamma(z'))\cdot N(z')\,dz'$; adding with step 2.1, and noting that $F(u^+)-F(u^-)=([u],[f])$ with $u^\pm$ the traces from the plus and minus sides, the weak identity becomes $0=\int_{\Pi_T}F(u)\cdot D\varphi=-\sigma\int_{B'}\varphi(z',\gamma(z'))\,[F](z',\gamma(z'))\cdot N(z')\,dz'$ for every $\varphi$ supported in the box. [F2, step 1.1, step 2.1]


4.1 **Continuity and vanishing of the bracket.** The function $z'\mapsto[F](z',\gamma(z'))\cdot N(z')$ is continuous, being a composition of continuous data; if it were nonzero at the point corresponding to $\zeta_0$, it would keep one sign on a smaller patch, and a nonnegative smooth bump supported there and positive at $\zeta_0$ would make the integral of step 3.1 nonzero, a contradiction. Hence $[F]\cdot N=0$ at $\zeta_0$. [F2, step 3.1]


5.1 **Normal form and the one-dimensional case.** Since $\nu=\sigma N/|N|$ with $\sigma=\pm1$ by [F2], $0=[F]\cdot N=[F]\cdot\nu\,\sigma|N|$, and $|N|=|e_k-\sum_{j\ne k}\partial_j\gamma\,e_j|>0$, so $[F]\cdot\nu=[u]\nu_t+[f]\cdot\nu_x=0$ at every point of $\Gamma$. For a one-dimensional graph $x=s(t)$ with minus side $x<s(t)$, the graph function is $\gamma(t)=s(t)$, so $N=(-s'(t),1)$ and $\nu=(-s',1)/\sqrt{1+s'^2}$; the condition becomes $(-s'[u]+[f])/\sqrt{1+s'^2}=0$, that is, $s'[u]=[f]$. If $[u]\ne0$ this determines $s'=[f]/[u]$, and if $[u]=0$ the relation reads $0=[f]$, so $[f]=0$ and no speed is constrained. [step 4.1, F2] ∎
