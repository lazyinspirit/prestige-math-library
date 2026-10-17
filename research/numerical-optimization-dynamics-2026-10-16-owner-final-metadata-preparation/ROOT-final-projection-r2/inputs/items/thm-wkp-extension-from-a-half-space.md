---
id: thm-wkp-extension-from-a-half-space
kind: theorem
title: Integer-order Sobolev extension from a half-space
status: published
origin: pipeline
deps: [def-sobolev-extension-domain-and-extension-operator, def-sobolev-space-wkp-and-its-norm, thm-acl-characterisation-of-w-one-p, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-tonelli-and-fubini-for-completed-product-measures, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-lebesgue-measure-of-a-box-of-every-kind, thm-holder-inequality-for-integrals, thm-linear-change-of-variables-for-lebesgue-measure, lem-weak-derivative-linearity-locality-and-commutation, def-axiom-of-choice]
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Example 2.39
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 2, Example 2.39 and its proof, printed p. 59
    - title: Sung-Jin Oh, Lecture Notes for Math 222A (2024), §11.3
      url: https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
      locator: §11.3, Proposition 11.13 and Remark 11.14, printed pp. 157–159
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Theorem 3.12 and Corollary 3.13
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.6, Theorem 3.12 and Corollary 3.13, printed pp. 60–62
---

## Statement

Assume the Axiom of Choice and $n\ge1$. In the proof write $e_n$
for the last canonical basis vector $e_{n-1}$. Let
$H=\mathbb R^{n-1}\times(0,\infty)\subseteq\mathbb R^n$ be the upper
half-space, written $x=(x',t)$ with $x'\in\mathbb R^{n-1}$ and $t>0$. For every
$k\in\mathbb N_0$, every $1\le p\le\infty$ and every
$\mathbb K\in\{\mathbb R,\mathbb C\}$ there is a bounded linear extension
operator
$$E_{k,p}:W^{k,p}(H;\mathbb K)\longrightarrow W^{k,p}(\mathbb R^n;\mathbb K),\qquad (E_{k,p}u)|_H=u\ \text{almost everywhere on }H .$$
For $k\ge1$ one may take, with the unique coefficients
$(a_1,\dots,a_k)\in\mathbb R^k$ satisfying
$\sum_{j=1}^k a_j(-j)^m=1$ for $m=0,1,\dots,k-1$,
$$E_{k,p}u(x',t)=u(x',t)\ \ (t>0),\qquad E_{k,p}u(x',t)=\sum_{j=1}^k a_ju(x',-jt)\ \ (t<0),$$
and for $k=0$ one may take the even reflection
$E_{0,p}u(x',t)=u(x',|t|)$. In particular $H$ is a $W^{k,p}$-extension
domain in the sense of [[def-sobolev-extension-domain-and-extension-operator]]
for every $k$ and every $p$, and no density assertion is made or needed.

## Facts & Assumptions

**Given:** the Axiom of Choice; the half-space $H=\mathbb R^{n-1}\times(0,\infty)$; $k\in\mathbb N_0$; $1\le p\le\infty$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; a class $u\in W^{k,p}(H;\mathbb K)$; and a test function $\varphi\in C_c^\infty(\mathbb R^n)$.

[F1] Sobolev classes on an open set: $u\in W^{k,p}(H;\mathbb K)$ means that for every multi-index $\alpha$ with $|\alpha|\le k$ there is a class $D^\alpha u\in L^p(H;\mathbb K)$ satisfying the weak identity $\int_Hu\,D^\alpha\psi=(-1)^{|\alpha|}\int_H(D^\alpha u)\psi$ for all $\psi\in C_c^\infty(H;\mathbb K)$, with $D^0u=u$; the norm is the $\ell^p$ sum over $|\alpha|\le k$, and the maximum of essential bounds for $p=\infty$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] Weak differentiation is local and linear: for open $V\subseteq\mathbb R^n$, $v=D^\alpha u$ weakly on $\mathbb R^n$ implies $v|_V=D^\alpha(u|_V)$ weakly on $V$, and the sum of two weakly differentiable classes is weakly differentiable with the sum of the derivatives ([[lem-weak-derivative-linearity-locality-and-commutation]]).

[F3] Linear changes of variables: for the invertible linear map $T_j(x',t)=(x',-jt)$, whose determinant has absolute value $j$, and every nonnegative measurable $f$, $\int_{\mathbb R^n}f\,d\lambda_n=j\int_{\mathbb R^n}f\circ T_j\,d\lambda_n$; in particular $\int_{\{t<0\}}|w(x',-jt)|^p\,dx'dt=j^{-1}\int_H|w(x',\tau)|^p\,dx'd\tau$ for every measurable $w$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F4] Traces of normal sections. Let $u\in W^{k,p}(H;\mathbb K)$ with $k\ge1$ and $1\le p\le\infty$. For every multi-index $\gamma$ with $|\gamma|\le k-1$ and almost every $x'\in\mathbb R^{n-1}$ the section $s\mapsto D^\gamma u(x',s)$ has a representative that is absolutely continuous on every compact interval $[0,T]$, extends continuously to $s=0$, and satisfies $\frac{d}{ds}D^\gamma u(x',s)=D^{\gamma+e_n}u(x',s)$ for almost every $s$, where $e_n$ is the last unit vector; at $p=\infty$ one first restricts to a finite exponent on compact sets, since $W^{1,\infty}_{\mathrm{loc}}\subseteq W^{1,q}_{\mathrm{loc}}$. The trace $\operatorname{tr}_\gamma(x'):=\lim_{s\to0^+}D^\gamma u(x',s)$ exists for almost every $x'$, is measurable, and satisfies the estimate $|\operatorname{tr}_\gamma(x')|\le\frac2T\int_0^T|D^\gamma u(x',s)|\,ds+\int_0^T|D^{\gamma+e_n}u(x',s)|\,ds$ for every $0<T<\infty$, whose right-hand side is a.e. finite and integrable in $x'$ over compact sets ([[thm-acl-characterisation-of-w-one-p]], [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]], [[thm-holder-inequality-for-integrals]]).

[F5] Half-space integration by parts with traces. Let $u\in W^{k,p}(H;\mathbb K)$, let $\alpha=(\beta,m)$ with $|\alpha|\le k$, and let $\varphi\in C_c^\infty(\mathbb R^n)$. Then $$\int_Hu\,D^\alpha\varphi=(-1)^{|\alpha|}\int_H(D^\alpha u)\,\varphi+\sum_{r=0}^{m-1}(-1)^{r+1}\int_{\mathbb R^{n-1}}\operatorname{tr}_{r e_n}(x')\,\partial_t^{m-1-r}D^\beta\varphi(x',0)\,dx'.$$ For the reflected function $f(x',t)=u(x',-jt)$ on the lower half-space, whose $\alpha$-derivative is $D^\alpha f(x',t)=(-j)^mD^\alpha u(x',-jt)$ and whose traces of the normal derivatives at $t=0^-$ are $(-j)^r\operatorname{tr}_{r e_n}(x')$, and the same formula holds with the boundary signs $(-1)^r$ in place of $(-1)^{r+1}$. In both formulas the boundary term keeps the tangential derivatives on the test function; they are not also applied to the trace. This follows by integrating in the normal variable first, then moving the tangential derivatives in the interior term onto $u$. The one-dimensional integrations are justified by the absolutely continuous representatives of [F4] and assembled with Fubini's theorem ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F6] Vandermonde systems. For $k\ge1$ the matrix $\bigl((-j)^m\bigr)_{0\le m\le k-1,\,1\le j\le k}$ is invertible, because its determinant is the Vandermonde product $\prod_{i<i'}\bigl((-i')-(-i)\bigr)\ne0$ over the distinct nodes $-1,-2,\dots,-k$; hence the moment system $\sum_{j=1}^ka_j(-j)^m=1$, $m=0,\dots,k-1$, has exactly one solution. This is finite linear algebra over $\mathbb R$ and uses no choice.

[F7] Extension domain and operator: $\Omega$ is a $W^{k,p}$-extension domain when there is a bounded linear $E:W^{k,p}(\Omega;\mathbb K)\to W^{k,p}(\mathbb R^n;\mathbb K)$ with $(Eu)|_\Omega=u$ almost everywhere for every class $u$ ([[def-sobolev-extension-domain-and-extension-operator]]).

**Choice use.** The Axiom of Choice is invoked only through the ACL, one-dimensional absolutely-continuous and Fubini interfaces cited in [F4]–[F5]; the Vandermonde coefficients of [F6] and the reflection formula are explicit.

## Proof

**Proof technique:** direct.

1.1 For $k\ge1$ set $J_k=\{1,\dots,k\}$ and let $(a_j)_{j\in J_k}$ be the unique solution of the moment system supplied by [F6]. For $k=0$ set $J_0=\{1\}$ and $a_1=1$, with no moment condition. In either case define $Eu:=u$ on $H$ and $$Eu(x',t):=\sum_{j\in J_k}a_ju(x',-jt)\qquad(t<0).$$ For $k=0$ this is exactly the even reflection $u(x',|t|)$. [F6, given]

1.2 Traces exist as in [F4]: for every $|\gamma|\le k-1$ the trace $\operatorname{tr}_\gamma(x')$ of $D^\gamma u$ at $t=0$ exists for almost every $x'$, is measurable, and obeys the displayed estimate, so each trace is integrable against the compactly supported traces of $D^\beta\varphi$ that appear below. [F4]

2.1 Candidate derivatives. For every multi-index $\alpha=(\beta,m)$ with $|\alpha|\le k$ define $g_\alpha:=D^\alpha u$ on $H$ and $$g_\alpha(x',t):=\sum_{j\in J_k}a_j(-j)^mD^\alpha u(x',-jt)\qquad(t<0).$$ When $k=0$, this gives $g_0=Eu$ on the lower half-space as well. [step 1.1]

3.1 Membership and bounds. By [F3] each reflected summand satisfies $\int_{\{t<0\}}|D^\alpha u(x',-jt)|^p=j^{-1}\int_H|D^\alpha u|^p$ for $p<\infty$, so $$\|g_\alpha\|_{L^p(\mathbb R^n)}\le\Bigl(1+\sum_{j\in J_k}|a_j|j^{m-1/p}\Bigr)\|D^\alpha u\|_{L^p(H)},\qquad \|Eu\|_{L^p(\mathbb R^n)}\le\Bigl(1+\sum_{j\in J_k}|a_j|j^{-1/p}\Bigr)\|u\|_{L^p(H)},$$ with the corresponding essential-supremum bounds $(1+\sum_{j\in J_k}|a_j|j^m)$ and $(1+\sum_{j\in J_k}|a_j|)$ when $p=\infty$; in particular $Eu$ and all $g_\alpha$ lie in $L^p(\mathbb R^n;\mathbb K)$. [F1, F3, step 2.1]

3.2 Interface cancellation. Fix $\varphi\in C_c^\infty(\mathbb R^n)$ and $\alpha=(\beta,m)$. Apply [F5] on $H$ and to each reflected summand on $\{t<0\}$. The tangential derivatives of $\varphi$ remain in the boundary terms; the tangential weak-derivative identity moves them onto the interior terms, giving $$\int_{\mathbb R^n}Eu\,D^\alpha\varphi=(-1)^{|\alpha|}\int_{\mathbb R^n}g_\alpha\varphi+\sum_{r=0}^{m-1}(-1)^r\int_{\mathbb R^{n-1}}\operatorname{tr}_{r e_n}(x')\,\partial_t^{m-1-r}D^\beta\varphi(x',0)\Bigl[(-1)+\sum_{j\in J_k}a_j(-j)^r\Bigr]dx'.$$ If $k\ge1$, every index $r\le m-1\le k-1$ satisfies $\sum_{j\in J_k}a_j(-j)^r=1$ by step 1.1, so each bracket vanishes; if $k=0$, then $m=0$ and the boundary sum is empty. In either case $\int_{\mathbb R^n}Eu\,D^\alpha\varphi=(-1)^{|\alpha|}\int_{\mathbb R^n}g_\alpha\varphi$. The traces in the sum are integrable by step 1.2. [F2, F5, step 1.1, step 1.2, step 2.1]

4.1 Since $\varphi$ was an arbitrary test function, step 3.2 exhibits $g_\alpha$ as the weak $\alpha$-derivative of the $L^p$ class $Eu$ for every $|\alpha|\le k$; with $Eu\in L^p(\mathbb R^n)$ and $g_\alpha\in L^p(\mathbb R^n)$ from step 3.1 and the norm formula of [F1], this gives $Eu\in W^{k,p}(\mathbb R^n;\mathbb K)$ and $\|Eu\|_{W^{k,p}(\mathbb R^n)}\le C_{k,p}\|u\|_{W^{k,p}(H)}$ for the finite constant determined by the coefficients. The map $u\mapsto Eu$ is linear because the reflection formula is linear in $u$ on each half-space, and $(Eu)|_H=u$ holds by construction; hence $E=E_{k,p}$ is a bounded linear extension operator and $H$ is a $W^{k,p}$-extension domain in the sense of [F7]. The case $k=0$ is the even reflection with no interface terms, and the case $n=1$ is the same argument with $\mathbb R^{n-1}$ a single point and the traces taken at $0$. [F1, F2, F7, step 1.1, step 3.1, step 3.2] ∎
