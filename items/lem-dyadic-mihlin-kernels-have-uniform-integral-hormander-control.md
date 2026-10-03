---
id: lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control
kind: lemma
title: "Dyadic Mihlin pieces: uniform L1 and first-difference bounds"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-locally-integrable-functions-embed-in-distributions, thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions, thm-holder-inequality-for-integrals, def-countable-choice, def-fourier-transform-of-a-tempered-distribution, def-mihlin-symbol-with-more-than-half-dimension-derivatives, def-schwartz-space-and-its-seminorms, lem-schwartz-cutoffs-from-the-standard-smooth-step, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-plancherel]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Proof of Theorem 6.2.7, estimates (6.2.15) and (6.2.16) and derivation (6.2.17)–(6.2.19), printed pp. 446–447"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge1$, put
$n_0:=\lfloor n/2\rfloor+1$, and let $\chi\in C_c^\infty(\mathbb R^n)$ be the
specific radially nonincreasing smooth cutoff constructed in [[lem-schwartz-cutoffs-from-the-standard-smooth-step]], with
$0\le\chi\le1$, $\chi=1$ on $|\xi|\le1$ and $\chi=0$ on $|\xi|\ge2$. Put
$$\zeta(\xi):=\chi(\xi)-\chi(2\xi).$$
Then $\zeta$ is supported in the annulus $1/2\le|\xi|\le2$, satisfies
$0\le\zeta\le1$, and $\sum_{j\in\mathbb Z}\zeta(2^{-j}\xi)=1$ for every
$\xi\ne0$. Let $m$ be a Mihlin symbol with constants $C_\alpha$ as in
[[def-mihlin-symbol-with-more-than-half-dimension-derivatives]], put
$$m_j(\xi):=m(\xi)\,\zeta(2^{-j}\xi),\qquad K_j:=\mathcal F^{-1}\bigl(u_{m_j}\bigr),$$
where $u_{m_j}$ is the regular tempered distribution of $m_j$ and
$\mathcal F^{-1}$ is the inverse Fourier transform of
[[def-fourier-transform-of-a-tempered-distribution]], and let $A$ be any finite
quantity with $A\ge\max\{\|m\|_\infty,\ \max_{|\alpha|\le n_0}C_\alpha\}$. Then
$K_j$ is (the regular distribution of) an $L^2$ function, and there is a
constant $C_n$, depending only on $n$ and on the fixed cutoff $\chi$, such that
$$\sup_{j\in\mathbb Z}\int_{\mathbb R^n}|K_j(x)|\,(1+2^j|x|)^{1/4}\,dx\le C_nA \qquad (1)$$
and
$$\sup_{j\in\mathbb Z}2^{-j}\int_{\mathbb R^n}|\nabla K_j(x)|\,(1+2^j|x|)^{1/4}\,dx\le C_nA. \qquad (2)$$

## Facts & Assumptions

**Given:** Countable Choice; an integer $n\ge1$; the smooth step $\chi$ and the Mihlin symbol $m$ with its constants $C_\alpha$; the derived objects $\zeta$, $m_j$, $K_j$; a finite quantity $A\ge\max\{\|m\|_\infty,\max_{|\alpha|\le n_0}C_\alpha\}$, where $n_0=\lfloor n/2\rfloor+1$.

[F1] $m$ agrees almost everywhere with a function $m_0\in C^{n_0}(\mathbb R^n\setminus\{0\})$ satisfying $|\partial^\alpha m_0(\xi)|\le C_\alpha|\xi|^{-|\alpha|}$ for $|\alpha|\le n_0$ and $\xi\ne0$, and $\|m\|_\infty\le C_0$ ([[def-mihlin-symbol-with-more-than-half-dimension-derivatives]]).

[F2] $\chi\in C_c^\infty(\mathbb R^n)$ obeys $0\le\chi\le1$, $\chi=1$ on $|\xi|\le1$, $\chi=0$ on $|\xi|\ge2$ ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F3] For an $L^2$ class $h$ with corresponding regular distribution $u_h$, the transform $\mathcal F^{-1}(u_h)$ is the regular distribution of the inverse Plancherel transform $\mathcal F_2^{-1}h$, so $\mathcal F^{-1}(u_h)=u_{\mathcal F_2^{-1}h}$ ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]), and Plancherel's isometry gives $\|u_{\mathcal F_2^{-1}h}\|_2=\|h\|_2$ ([[thm-plancherel]]).

[F4] For every tempered distribution $u$ and multi-index $\gamma$, $\mathcal F(x^\gamma u)=(-1/(2\pi i))^{|\gamma|}\,\partial^\gamma\mathcal Fu$ and $\mathcal F(\partial^\gamma u)=(2\pi i\xi)^\gamma\mathcal Fu$ in $\mathcal S'(\mathbb R^n)$ ([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]). The transform conventions are those of [[def-fourier-transform-of-a-tempered-distribution]] and [[def-schwartz-space-and-its-seminorms]].

[F5] Integral Cauchy–Schwarz is the $p=q=2$ case of Hölder: $\int|uv|\le\|u\|_2\|v\|_2$. ([[thm-holder-inequality-for-integrals]])

[F6] Fubini interchanges absolutely integrable complex double integrals; under the assumed Countable Choice, locally integrable functions have equal regular distributions exactly when they agree almost everywhere. Distributional derivatives on Schwartz tests satisfy $\langle\partial^\beta u,\varphi\rangle=(-1)^{|\beta|}\langle u,\partial^\beta\varphi\rangle$. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-locally-integrable-functions-embed-in-distributions]], [[thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions]])

## Proof

**Proof technique:** direct.

1.1 The difference $\zeta=\chi(\xi)-\chi(2\xi)$ vanishes for $|\xi|\le1/2$, since there $\chi(\xi)=\chi(2\xi)=1$, and vanishes for $|\xi|\ge2$, since there $\chi(\xi)=\chi(2\xi)=0$; hence $\zeta$ is supported in the annulus $1/2\le|\xi|\le2$, and $0\le\zeta\le1$ for the fixed smooth-step cutoff: its construction is $\chi(\xi)=\sigma((4-|\xi|^2)/3)$, $\sigma(t)=a(t)/(a(t)+a(1-t))$, with $a(t)=e^{-1/t}$ for $t>0$ and $a(t)=0$ otherwise. On $0<t<1$ one has $\sigma'(t)=(a'(t)a(1-t)+a(t)a'(1-t))/(a(t)+a(1-t))^2\ge0$; on the constant regions its derivative is zero. Thus $\chi$ decreases with radius and $\chi(\xi)\ge\chi(2\xi)$, proving the asserted nonnegativity. For every $N\ge1$ the sum telescopes: $\sum_{j=-N}^{N}\zeta(2^{-j}\xi)=\sum_{j=-N}^{N}\bigl[\chi(2^{-j}\xi)-\chi(2^{1-j}\xi)\bigr]=\chi(2^{-N}\xi)-\chi(2^{N+1}\xi)$. For $\xi\ne0$ one has $2^{-N}|\xi|\le1$ and $2^{N+1}|\xi|\ge2$ for all large $N$, so the last expression equals $1-0=1$ there; this gives the asserted partition of unity. [F2, given, algebra]

1.2 For every $j$ the function $m_j=m\,\zeta(2^{-j}\cdot)$ is supported in the annulus $2^{j-1}\le|\xi|\le2^{j+1}$, where it agrees almost everywhere with $m_0(\xi)\zeta(2^{-j}\xi)$; we use this representative in the derivative estimates. Since $m_0$ is $C^{n_0}$ on that annulus and $\zeta$ is compactly supported and smooth, $m_j$ is represented by a compactly supported $C^{n_0}$ function, so $m_j\in L^1\cap L^2$ and $u_{m_j}$ is a well-defined regular tempered distribution. By [F3] the object $K_j=\mathcal F^{-1}(u_{m_j})$ is the regular distribution of the $L^2$ function $\mathcal F_2^{-1}m_j$; we use $K_j$ to denote that $L^2$ class, so that $\mathcal FK_j=u_{m_j}$ and $\|K_j\|_2\le\|m_j\|_2$. It has the smooth integral representative $G_j(x)=\int m_j(\xi)e^{2\pi ix\cdot\xi}\,d\xi$: for every Schwartz test $\varphi$, Fubini applies with absolute bound $\|m_j\|_1\|\varphi\|_1$, giving $\int G_j\varphi=\int m_j\mathcal F^{-1}\varphi=\langle\mathcal F^{-1}u_{m_j},\varphi\rangle$. Thus [F6] identifies $G_j$ with the $L^2$ class. Every $\xi^\beta m_j$ is integrable on the fixed compact frequency support. Put $G_{j,\beta}(x)=\int(2\pi i\xi)^\beta m_j(\xi)e^{2\pi ix\cdot\xi}\,d\xi$. The bounds $|e^{it}-1|\le|t|$ and $|e^{it}-1-it|\le t^2/2$ give continuity of $G_{j,\beta}$ and a coordinate difference-quotient remainder bounded uniformly in $x$ by $C_{j,\beta}|h|\|m_j\|_1$ as $h\to0$. Hence $\partial_rG_{j,\beta}=G_{j,\beta+e_r}$, proving $G_j\in C^\infty$. These derivatives are bounded; repeated integration by parts against rapidly decaying Schwartz tests therefore has no boundary term and identifies each classical derivative with its regular distributional derivative as defined in [F6]. We henceforth use this smooth representative for $K_j$ and its gradients. [F1, F3, F6, given, construct]

2.1 Claim: for every multi-index $\gamma$ with $|\gamma|\le n_0$, the product $x^\gamma K_j$ is (the regular distribution of) an $L^2$ function and $$\bigl\|x^\gamma K_j\bigr\|_2=(2\pi)^{-|\gamma|}\bigl\|\partial^\gamma m_j\bigr\|_2.$$ Indeed, applying the first identity of [F4] to $u=K_j$ and using $\mathcal FK_j=u_{m_j}$ gives $\mathcal F(x^\gamma K_j)=(-1/(2\pi i))^{|\gamma|}\partial^\gamma u_{m_j}=c_\gamma u_{\partial^\gamma m_j}$ for the scalar $c_\gamma=(-1/(2\pi i))^{|\gamma|}$, the last equality because $\partial^\gamma m_j$ is continuous and compactly supported, hence a regular distribution, and differentiation of a regular distribution of a $C^{|\gamma|}$ function is the regular distribution of its classical derivative. Since $\partial^\gamma m_j\in C_c\subset L^2$, [F3] applied to $h=c_\gamma\partial^\gamma m_j$ identifies $x^\gamma K_j$ with the regular distribution of $\mathcal F_2^{-1}(c_\gamma\partial^\gamma m_j)$, and Plancherel gives $\|x^\gamma K_j\|_2=\|c_\gamma\partial^\gamma m_j\|_2=(2\pi)^{-|\gamma|}\|\partial^\gamma m_j\|_2$. [F3, F4, F6, step 1.2, algebra]

2.2 Claim: there is $C_{n,\chi}$ with $\|\partial^\gamma m_j\|_2\le C_{n,\chi}\,A\,2^{j(n/2-|\gamma|)}$ for all $j\in\mathbb Z$ and all $|\gamma|\le n_0$. Leibniz's rule on $m_j=m_0\,\zeta(2^{-j}\cdot)$ gives $\partial^\gamma m_j=\sum_{\delta\le\gamma}C_{\delta,\gamma}\,\partial^{\gamma-\delta}\bigl(\zeta(2^{-j}\cdot)\bigr)\,\partial^\delta m_0$; the chain rule bounds the factor by $2^{-j|\gamma-\delta|}\|\partial^{\gamma-\delta}\zeta\|_\infty$, and on the support of $m_j$ one has $|\partial^\delta m_0(\xi)|\le C_\delta|\xi|^{-|\delta|}\le C_\delta2^{-j|\delta|}\cdot2^{|\delta|}$ since $|\xi|\ge2^{j-1}$. Taking $L^2$ norms and bounding the support measure by $|S^{n-1}|(2^{n}-2^{-n})2^{jn}$ yields $\|\partial^\gamma m_j\|_2\le\sum_{\delta\le\gamma}C_{\delta,\gamma}2^{-j|\gamma-\delta|}\|\partial^{\gamma-\delta}\zeta\|_\infty C_\delta2^{-j|\delta|}2^{j n/2}\cdot c_n$, that is, $C_{n,\chi}(\max_{|\delta|\le n_0}C_\delta)2^{j(n/2-|\gamma|)}\le C_{n,\chi}A\,2^{j(n/2-|\gamma|)}$, because $|\gamma-\delta|+|\delta|=|\gamma|$ for $\delta\le\gamma$. [F1, step 1.2, algebra]

3.1 Proof of (1). Fix $j$ and write $w(x):=(1+2^j|x|)^{1/4}$, $W(x):=(1+2^j|x|)^{n_0}$. Since $-2n_0+1/2<-n$, the substitution $u=2^jx$ gives $\int_{\mathbb R^n}W(x)^{-2}w(x)^{2}\,dx=\int_{\mathbb R^n}(1+2^j|x|)^{-2n_0+1/2}\,dx=2^{-jn}c_n$ for a constant $c_n=\int(1+|u|)^{-2n_0+1/2}du$. Cauchy–Schwarz and the elementary bound $W(x)\le C(n)\sum_{|\gamma|\le n_0}2^{j|\gamma|}|x^\gamma|$ give $\int|K_j|w\le\bigl(\int W^2|K_j|^2\bigr)^{1/2}\bigl(\int W^{-2}w^2\bigr)^{1/2}\le C(n)\sum_{|\gamma|\le n_0}2^{j|\gamma|}\|x^\gamma K_j\|_2\cdot2^{-jn/2}c_n^{1/2}$. By steps 2.1 and 2.2 this is at most $C_{n,\chi}A\sum_{|\gamma|\le n_0}2^{j|\gamma|}2^{j(n/2-|\gamma|)}2^{-jn/2}=C_{n,\chi}'A$, uniformly in $j$. [F1, F5, given, step 2.1, step 2.2, algebra]

4.1 Proof of (2), one coordinate at a time. Fix $r\le n$ and put $\zeta_r(\xi):=\xi_r\zeta(\xi)$ and $\tilde m_j(\xi):=m(\xi)\zeta_r(2^{-j}\xi)=2^{-j}\xi_r\,m_j(\xi)$, so that $\tilde m_j$ is again compactly supported and $C^{n_0}$. The second identity of [F4] gives $\mathcal F(\partial_rK_j)=(2\pi i\xi_r)\mathcal FK_j=2\pi i\,u_{\xi_rm_j}$, hence $\mathcal F(2^{-j}\partial_rK_j)=2\pi i\,u_{\tilde m_j}$. Identifying $2^{-j}\partial_rK_j$ with the regular distribution of $\mathcal F_2^{-1}(2\pi i\tilde m_j)$ as in step 1.2 and repeating steps 2.1, 2.2 and 3.1 with the fixed cutoff $\zeta_r$ in place of $\zeta$ (whose support and derivatives are again bounded by constants $C_{n,\chi}$) yields $\sup_j\int|2^{-j}\partial_rK_j|w\le C_{n,\chi}A$. Summing these $n$ estimates over $r\le n$ and using $|\nabla K_j|\le\sum_r|\partial_rK_j|$ gives (2). [F4, step 2.1, step 2.2, step 3.1, algebra]

5.1 Steps 3.1 and 4.1 are exactly the two asserted estimates, with constants depending only on $n$ and the fixed cutoff $\chi$; the auxiliary claim of step 1.2 supplies the $L^2$ reading of $K_j$ used throughout. This proves the lemma. [step 3.1, step 4.1] ∎
