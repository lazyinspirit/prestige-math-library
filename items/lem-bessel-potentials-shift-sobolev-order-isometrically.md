---
id: lem-bessel-potentials-shift-sobolev-order-isometrically
kind: lemma
title: "Bessel potentials shift Sobolev order"
status: draft
origin: pipeline
deps:
  - thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - def-japanese-bracket-bessel-potential-operator
  - lem-japanese-bracket-powers-preserve-schwartz-space
  - lem-weak-derivatives-are-polynomial-fourier-multipliers
  - lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
  - def-regular-distribution-from-a-locally-integrable-function
  - lem-complex-lp-completeness-density-and-inner-product
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - lem-euclidean-bump-for-a-compact-set-inside-an-open-set
  - lem-test-function-inclusion-in-schwartz-space-is-continuous
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - def-real-power
  - thm-exponential-is-strictly-increasing
  - thm-logarithm-derivative-and-integral
  - def-countable-choice
  - lem-schwartz-functions-and-all-derivatives-are-integrable
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "§12.1.2, properties (1)-(3) and the Japanese bracket, printed pp. 140-141"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§6.2, Definition 6.5 and the multiplier discussion, printed p. 25; the source normalization is converted to the 2 pi convention"
---

## Statement

Assume Countable Choice. Let $n\ge1$, $s,t\in\mathbb R$, let
$E_\sigma:H^\sigma(\mathbb R^n)\to\mathcal S'(\mathbb R^n)$ be the canonical
embedding of the real-order Bessel-potential completion, and let
$\langle D\rangle^t$ and $(I-\Delta)^{t/2}$ be the distributional Fourier
multipliers of [[def-japanese-bracket-bessel-potential-operator]]. For
$U\in H^s$ let $g=\langle\xi\rangle^s\mathcal F(E_sU)\in L^2(\mathbb R^n)$ be
its weighted Fourier class, so that $\|U\|_{H^s}=\|g\|_2$
([[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).
Then:

1. **The bracket operator shifts order isometrically.**
   $$\Phi_t(U):=E_{s-t}^{-1}\bigl(\langle D\rangle^tE_sU\bigr),\qquad U\in H^s,$$
   defines a surjective complex-linear isometry
   $\Phi_t:H^s(\mathbb R^n)\to H^{s-t}(\mathbb R^n)$ with
   $\|\Phi_t(U)\|_{H^{s-t}}=\|U\|_{H^s}$ for every $U$, whose weighted
   Fourier class in $H^{s-t}$ is again $g$; its inverse is $\Phi_{-t}$.
2. **The Laplacian operator shifts order with equivalent norms.** With
$$r_t(\xi)=\Bigl(\frac{1+4\pi^2|\xi|^2}{1+|\xi|^2}\Bigr)^{t/2}, \qquad c_t=\min\bigl(1,(2\pi)^t\bigr),\qquad C_t=\max\bigl(1,(2\pi)^t\bigr),$$
   the map $\Psi_t(U):=E_{s-t}^{-1}\bigl((I-\Delta)^{t/2}E_sU\bigr)$ defines a
   bounded complex-linear bijection $H^s(\mathbb R^n)\to H^{s-t}(\mathbb R^n)$
   whose weighted Fourier class is $r_tg$, with
$$c_t\|U\|_{H^s}\le\|\Psi_t(U)\|_{H^{s-t}}\le C_t\|U\|_{H^s} \qquad(U\in H^s).$$
   For every $t\ne0$ this map is **not** an isometry: there exists
   $U\in H^s$ with $\|\Psi_t(U)\|_{H^{s-t}}\ne\|U\|_{H^s}$.
3. **Contractive inclusion.** If $s\ge r$, then
   $\kappa(U):=E_r^{-1}(E_sU)$ defines an injective complex-linear contraction
   $\kappa:H^s(\mathbb R^n)\to H^r(\mathbb R^n)$ with
   $\|\kappa(U)\|_{H^r}\le\|U\|_{H^s}$ for every $U$; the weighted class in
   $H^r$ is $\langle\xi\rangle^{r-s}g$.
4. **Derivatives lose one order.** For every $j\in\{1,\dots,n\}$ and
   $U\in H^{s+1}$, the distributional derivative
   $\Theta_j(U):=E_s^{-1}\bigl(\partial_jE_{s+1}U\bigr)$ is well defined in
   $H^s$, the map $\Theta_j$ is complex-linear, its weighted class in $H^s$ is
   $2\pi i\xi_j\langle\xi\rangle^{-1}g_{s+1}$, where
   $g_{s+1}=\langle\xi\rangle^{s+1}\mathcal F(E_{s+1}U)\in L^2$ is the
   weighted Fourier class at order $s+1$, and
   $$\|\Theta_j(U)\|_{H^s}\le2\pi\|U\|_{H^{s+1}} .$$

Thus $\langle D\rangle^t$ shifts the Sobolev order exactly and isometrically,
while $(I-\Delta)^{t/2}$ shifts it only up to the bounded factor $r_t$, which
equals $1$ at $\xi=0$ and tends to $(2\pi)^t$ at high frequency; no isometry of
$(I-\Delta)^{t/2}$ for the bracket norm is asserted when $t\ne0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $s,t\in\mathbb R$, the completion $H^s$ with canonical embedding $E_s$, and the bracket $\langle\xi\rangle\ge1$.

[A1] Countable Choice permits one selection from each nonempty set in a countable family ([[def-countable-choice]]).

[F1] $E_\sigma:H^\sigma\to\mathcal W_\sigma$ is a bijection onto the tempered distributions $u$ with $\langle\xi\rangle^\sigma\mathcal Fu=u_G$ for a unique $G\in L^2$, and then $\|U\|_{H^\sigma}=\|G\|_2$ ([[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[F2] $\langle D\rangle^t$ and $(I-\Delta)^{t/2}$ are continuous invertible Fourier multipliers on $\mathcal S'(\mathbb R^n)$ with symbols $\langle\xi\rangle^t$ and $a_t(\xi)=(1+4\pi^2|\xi|^2)^{t/2}$, and $\langle D\rangle^{-t}$, $(I-\Delta)^{-t/2}$ are their inverses ([[def-japanese-bracket-bessel-potential-operator]]).

[F3] A smooth symbol with every derivative polynomially bounded preserves
$\mathcal S$ and acts on $\mathcal S'$ by
$\langle au,\varphi\rangle=\langle u,a\varphi\rangle$
([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).
For the regular distributions used below, write $h=bG$ with $G\in L^2$ and
$b$ such a smooth multiplier (in particular, a bracket weight or its product
with a polynomial or a Laplacian weight). Then
$\langle u_h,\varphi\rangle=\int G(b\varphi)$ converges and is continuous
by Cauchy–Schwarz and the continuous maps
$\mathcal S\xrightarrow{b}\mathcal S\hookrightarrow L^2$ ([F5],
[[lem-schwartz-functions-and-all-derivatives-are-integrable]]).
It agrees on compact tests with the regular functional of
[[def-regular-distribution-from-a-locally-integrable-function]].
For another such multiplier $a$, $\int G(ba\varphi)=\int(ah)\varphi$,
so $au_h=u_{ah}$. This assertion uses weighted $L^2$ densities, not arbitrary
locally integrable functions.

[F4] For every tempered $u$ and multi-index $\alpha$, $\mathcal F(D^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ in $\mathcal S'(\mathbb R^n)$ ([[lem-weak-derivatives-are-polynomial-fourier-multipliers]]).

[F5] Every $L^2$ class is locally integrable: for compact $K$, $\int_K|g|\le|K|^{1/2}\|g\|_2<\infty$ by Cauchy–Schwarz and finiteness of the measure of bounded sets ([[lem-complex-lp-completeness-density-and-inner-product]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F6] $\mathcal S(\mathbb R^n)$ is invariant under $\mathcal F$ and its inverse ([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F7] A smooth compactly supported $\chi$ belongs to $\mathcal S$, and the inclusion $C_c^\infty(\mathbb R^n)\to\mathcal S(\mathbb R^n)$ is continuous; furthermore for $0<r_1<r_2$ there is a smooth bump equal to $1$ on the closed ball of radius $r_1$ and supported in the open ball of radius $r_2$ ([[lem-test-function-inclusion-in-schwartz-space-is-continuous]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]).

[F8] $x^{u}=\exp(u\log x)$ for $x>0$ ([[def-real-power]]); the logarithm satisfies $\log'(x)=1/x>0$ on $(0,\infty)$ and is therefore strictly increasing ([[thm-logarithm-derivative-and-integral]]), and $\exp$ is strictly increasing ([[thm-exponential-is-strictly-increasing]]), so $x\mapsto x^{u}$ is strictly increasing for $u>0$ and strictly decreasing for $u<0$.

## Proof

**Proof technique:** transport the two Fourier multipliers through the canonical identifications $H^\sigma\cong\mathcal W_\sigma$ and compare the resulting frequency weights.

1.1 The bracket transfer. Let $U\in H^s$ with class $g=\langle\xi\rangle^s\mathcal F(E_sU)$ as in [F1] and put $u:=E_sU$, so $\mathcal Fu=u_{\langle\xi\rangle^{-s}g}$ by [F1] and [F3]. Since $\langle\xi\rangle^{-s}g$ is locally integrable by [F5], [F3] applied to the smooth symbol $\langle\xi\rangle^t$ and to the symbol $\langle\xi\rangle^{s-t}$ gives $$\mathcal F\bigl(\langle D\rangle^t u\bigr) =\langle\xi\rangle^t\mathcal Fu =u_{\langle\xi\rangle^{t-s}g},\qquad \langle\xi\rangle^{s-t}\mathcal F\bigl(\langle D\rangle^t u\bigr) =u_{\langle\xi\rangle^{s-t}\langle\xi\rangle^{t-s}g}=u_g .$$ Hence $\langle D\rangle^tu\in\mathcal W_{s-t}$ with weighted class $g$ and, by [F1], $\langle D\rangle^tu=E_{s-t}V$ for a unique $V\in H^{s-t}$ with $\|V\|_{H^{s-t}}=\|g\|_2=\|U\|_{H^s}$. The assignment $U\mapsto V=\Phi_t(U)$ is linear because $E_s$, $\langle D\rangle^t$ and $E_{s-t}^{-1}$ are linear on their domains [F1], [F2]; it preserves the norm and is therefore injective. [F1, F2, F3, F5, given]

1.2 The Laplacian weight ratio. Put $\rho(u)=(1+4\pi^2u)/(1+u)$ for $u\ge0$; then $\rho'(u)=(4\pi^2-1)/(1+u)^2>0$, so $\rho$ is increasing with $\rho(0)=1$ and $\lim_{u\to\infty}\rho(u)=4\pi^2$. Writing $r_t(\xi)=\rho(|\xi|^2)^{t/2}$ and using [F8], for $t>0$ the factor $r_t(\xi)$ is increasing in $|\xi|$ with values in $[1,(2\pi)^t]$, and for $t<0$ it is decreasing in $|\xi|$ with values in $[(2\pi)^t,1]$; in both cases $$c_t\le r_t(\xi)\le C_t,\qquad c_t=\min(1,(2\pi)^t),\quad C_t=\max(1,(2\pi)^t).$$ [F8, algebra]

1.3 Contractive inclusion. Let $s\ge r$ and $U\in H^s$ with class $g=\langle\xi\rangle^s\mathcal F(E_sU)\in L^2$. Since $\langle\xi\rangle^{r-s}\le1$ and $g$ is locally integrable [F5], [F3] gives $\langle\xi\rangle^r\mathcal F(E_sU)=u_{\langle\xi\rangle^{r-s}g}$, and $\langle\xi\rangle^{r-s}g\in L^2$ with $\|\langle\xi\rangle^{r-s}g\|_2\le\|g\|_2$. Hence $E_sU\in\mathcal W_r$, so $\kappa(U):=E_r^{-1}(E_sU)$ is defined, has weighted class $\langle\xi\rangle^{r-s}g$, and satisfies $\|\kappa(U)\|_{H^r}=\|\langle\xi\rangle^{r-s}g\|_2\le\|g\|_2=\|U\|_{H^s}$. The map $\kappa$ is linear by [F1], and it is injective: $\kappa(U)=0$ forces $\langle\xi\rangle^{r-s}g=0$ almost everywhere and hence $g=0$ and $U=0$. [F1, F3, F5, given]

1.4 Derivative bound. Let $U\in H^{s+1}$ with weighted class $g_{s+1}=\langle\xi\rangle^{s+1}\mathcal F(E_{s+1}U)$ and $u:=E_{s+1}U$, so $\mathcal Fu=u_{\langle\xi\rangle^{-(s+1)}g_{s+1}}$ and $\|U\|_{H^{s+1}}=\|g_{s+1}\|_2$ [F1]. By [F4], $\mathcal F(\partial_ju)=2\pi i\xi_j\mathcal Fu$, and $\langle\xi\rangle^{-(s+1)}g_{s+1}$ is locally integrable [F5], so [F3] gives $$\mathcal F(\partial_ju)=u_{2\pi i\xi_j\langle\xi\rangle^{-(s+1)}g_{s+1}},\qquad \langle\xi\rangle^{s}\mathcal F(\partial_ju) =u_{2\pi i\xi_j\langle\xi\rangle^{-1}g_{s+1}}.$$ Since $|2\pi\xi_j\langle\xi\rangle^{-1}|\le2\pi$, the class $2\pi i\xi_j\langle\xi\rangle^{-1}g_{s+1}$ lies in $L^2$ with $\|2\pi i\xi_j\langle\xi\rangle^{-1}g_{s+1}\|_2\le2\pi\|g_{s+1}\|_2$. Hence $\partial_ju\in\mathcal W_s$, so $\Theta_j(U):=E_s^{-1}(\partial_jE_{s+1}U)$ is well defined, linear by [F1] and [F4], and $\|\Theta_j(U)\|_{H^s}=\|2\pi i\xi_j\langle\xi\rangle^{-1}g_{s+1}\|_2 \le2\pi\|g_{s+1}\|_2=2\pi\|U\|_{H^{s+1}}$, with weighted class $2\pi i\xi_j\langle\xi\rangle^{-1}g_{s+1}$. [F1, F3, F4, F5]

2.1 Surjectivity and inverse of the bracket shift. Let $V\in H^{s-t}$ with class $h=\langle\xi\rangle^{s-t}\mathcal F(E_{s-t}V)$, and set $g:=h$; because $h$ is locally integrable by [F5], the distribution $u:=\mathcal F^{-1}(u_{\langle\xi\rangle^{-s}h})$ satisfies $\langle\xi\rangle^s\mathcal Fu=u_h$, so $u\in\mathcal W_s$ and $u=E_sU$ for some $U\in H^s$ with class $g=h$ and $\|U\|_{H^s}=\|h\|_2=\|V\|_{H^{s-t}}$ [F1]. Since $\mathcal F(\langle D\rangle^tu)=u_{\langle\xi\rangle^{t-s}h}$ and $\mathcal F(E_{s-t}V)=u_{\langle\xi\rangle^{t-s}h}$ by [F2], [F1] and [F3], injectivity of $\mathcal F$ on $\mathcal S'$ [F2] gives $\langle D\rangle^tE_sU=E_{s-t}V$, that is, $\Phi_t(U)=V$. Hence $\Phi_t$ is surjective, and step 1.1 makes it additive, so $\Phi_t$ is a complex-linear bijection. Finally $\Phi_{-t}(\Phi_t(U))=E_s^{-1}\langle D\rangle^{-t}E_{s-t} E_{s-t}^{-1}\langle D\rangle^tE_sU=E_s^{-1}E_sU=U$ by the inverse laws [F2], so $\Phi_{-t}$ is the inverse of $\Phi_t$. [F1, F2, F3, F5, step 1.1]

2.2 The Laplacian transfer. Let $U\in H^s$ with class $g$ and $u=E_sU$ as in step 1.1. Since $\langle\xi\rangle^{-s}g$ is locally integrable [F5], [F3] gives $$\mathcal F\bigl((I-\Delta)^{t/2}u\bigr)=a_t\mathcal Fu =u_{a_t\langle\xi\rangle^{-s}g},\qquad \langle\xi\rangle^{s-t}\mathcal F\bigl((I-\Delta)^{t/2}u\bigr) =u_{r_tg},$$ using $a_t\langle\xi\rangle^{s-t}\langle\xi\rangle^{-s} =\langle\xi\rangle^{-t}a_t=r_t$. Hence $(I-\Delta)^{t/2}u\in\mathcal W_{s-t}$ with class $r_tg$, so $\Psi_t(U):=E_{s-t}^{-1}((I-\Delta)^{t/2}E_sU)$ is well defined, linear by [F1] and [F2], and by [F1] and step 1.2 $$c_t\|U\|_{H^s}=c_t\|g\|_2\le\|r_tg\|_2=\|\Psi_t(U)\|_{H^{s-t}} \le C_t\|g\|_2=C_t\|U\|_{H^s}.$$ Conversely, for $V\in H^{s-t}$ with class $h$ put $g:=r_t^{-1}h$; step 1.2 gives $|g|\le c_t^{-1}|h|$, so $g\in L^2$, and $u:=\mathcal F^{-1}(u_{\langle\xi\rangle^{-s}g})$ lies in $\mathcal W_s$ [F5], [F3]; then $\langle\xi\rangle^{s-t}\mathcal F((I-\Delta)^{t/2}u)=u_{r_tg}=u_h$, so $(I-\Delta)^{t/2}u=E_{s-t}V$ and $\Psi_t$ is onto. Thus $\Psi_t$ is a bounded complex-linear bijection with the displayed two-sided bounds. [F1, F2, F3, F5, step 1.1, step 1.2]

3.1 The Laplacian shift is not isometric for $t\ne0$. Fix $t\ne0$ and choose $R\ge1$ with $r_t(\xi)>1$ for all $|\xi|\ge R$ if $t>0$, respectively $r_t(\xi)<1$ for all $|\xi|\ge R$ if $t<0$; this is possible because $r_t(\xi)\to(2\pi)^t$ as $|\xi|\to\infty$ and $(2\pi)^t>1$ for $t>0$, $(2\pi)^t<1$ for $t<0$, while $r_t$ is monotone in $|\xi|$ by step 1.2. By [F7] with $K=\{2Re_1\}$ and the open ball $V=B(2Re_1,R/2)\subseteq\{|\xi|>R\}$, there is a smooth bump $\chi$ equal to $1$ on $K$ and supported in $V$. Thus $\chi\ne0$, and $\chi\in\mathcal S$ by [F7]. Set $\varphi:=\mathcal F^{-1}\chi\in\mathcal S$ [F6] and $G:=\langle\xi\rangle^s\chi$, which lies in $L^2$ because $\chi$ has compact support and $\langle\xi\rangle^s$ is bounded there; let $U:=E_s^{-1}(u_\varphi)$ be the canonical class of $\varphi$, whose weighted class is $G$ by [F1], [F3]: $\|U\|_{H^s}=\|G\|_2>0$. By step 2.2 the class of $\Psi_t(U)$ is $r_tG$, so $$\|\Psi_t(U)\|_{H^{s-t}}^2=\int|\chi|^2r_t^2\langle\xi\rangle^{2s}\,d\xi \;\begin{cases}>\\<\end{cases}\;\int|\chi|^2\langle\xi\rangle^{2s}\,d\xi =\|U\|_{H^s}^2,$$ with the strict inequality $>$ when $t>0$ and $<$ when $t<0$, because $r_t^2>1$ respectively $r_t^2<1$ on $\operatorname{supp}\chi$ and $\chi\ne0$ there. Hence $\Psi_t$ is not an isometry for any $t\ne0$. [F1, F3, F6, F7, step 1.2, step 2.2]

4.1 Conclusion. Step 1.1 and step 2.1 give the surjective isometry $\Phi_t:H^s\to H^{s-t}$ with inverse $\Phi_{-t}$; step 1.2 and step 2.2 give the bounded bijection $\Psi_t$ with the two-sided bounds; step 3.1 produces, for every $t\ne0$, an explicit frequency-localized witness showing that $\Psi_t$ is not an isometry; step 1.3 gives the contractive inclusion for $s\ge r$; and step 1.4 gives the derivative bound with constant $2\pi$. This proves statements 1-4 for arbitrary $n\ge1$ and $s,t\in\mathbb R$. Countable Choice is used exactly through the cited completion and characterization interfaces, which carry it as their hypothesis. [A1, F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 1.2, step 2.2, step 3.1, step 1.3, step 1.4] ∎
