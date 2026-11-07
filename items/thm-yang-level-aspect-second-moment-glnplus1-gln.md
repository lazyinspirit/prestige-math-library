---
dependency_level: 9
id: thm-yang-level-aspect-second-moment-glnplus1-gln
kind: theorem
title: "Yang Level-Aspect Second Moment for GL(n+1) × GL(n)"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-supplied
deps:
  - thm-yang-relative-trace-formula-glnplus1-gln
  - thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), §§9.1.1–9.1.3"
      url: "https://arxiv.org/pdf/2303.02225v1"
    - title: "Adrian Diaconu, Paul Garrett, and Dorian Goldfeld, Moments for L-functions for GL(r) × GL(r−1), §§1, 3–4 (related methodology; different averaging family)"
      url: "https://www.math.columbia.edu/~goldfeld/GLnMoments.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Use Yang’s central-character normalization: all specified central characters are trivial on the positive real split center. Level spaces use the nebentypus character $\kappa$ defined with the test class, so they mean isotypic spaces when the central character is ramified.

Let $F$ be a number field, $n\geq2$, $G=\mathrm{GL}_{n+1}$, $G'=\mathrm{GL}_n$, and let $r_2$ be the number of complex places of $F$. Write $\mathcal A_0([G'],\omega')$ for the unitary cuspidal generic automorphic representations of $G'$ with central character $\omega'$. Let $\mathfrak N\subsetneq\mathcal O_F$ be an integral ideal and let $\omega$ be a unitary Hecke character of finite conductor dividing $\mathfrak N$. Fix $\pi'\in\mathcal A_0([G'],\omega')$ that is unramified at every finite place and spherical at every archimedean place, and choose its normalized new vector $\phi'$ with global Whittaker function $W'(I_n)=1$. Take $f=f_\infty\otimes f_{\mathrm{fin}}\in\mathcal F_{\Sigma_{F,\infty}}(\mathfrak N,\omega^{-1})$ with $f_\infty$ bi-$K_\infty$-invariant, where $K_\infty$ is the product of the archimedean maximal compact subgroups. Let $\mathcal G^{\mathrm{gen}}(\mathfrak N,\omega)$ be the full generic unitary automorphic spectrum at level $\mathfrak N$ and central character $\omega$, including proper-Levi Eisenstein and residual data; let $B_\pi$ be the finite orthonormal basis of the spherical-archimedean, $(K_0(\mathfrak N),\kappa)$-isotypic level subspace used in the spectral expansion, and let $d\mu_\pi$ be its automorphic Plancherel measure.

Here $\mathcal F_{\Sigma_{F,\infty}}(\mathfrak N,\omega^{-1})$ is the finite linear span of factorizable functions with these local factors. If $v\mid\mathfrak N$, write $K_v=K_0(\mathfrak p_v^{e_v(\mathfrak N)})$, where $K_0(\mathfrak p_v^e)$ consists of $k\in\mathrm{GL}_{n+1}(\mathcal O_v)$ whose last-row entries in columns $1,\ldots,n$ lie in $\mathfrak p_v^e$. For $z\in F_v^\times$ and $k\in K_v$, set
$$f_v(zk)=\operatorname{Vol}(K_v)^{-1}\omega_v(z)^{-1}\omega_v(k_{n+1,n+1})^{-1},$$
and set $f_v=0$ off $Z(F_v)K_v$. If $v\nmid\mathfrak N$, then
$$f_v(g)=\int_{F_v^\times}\widetilde f_v(zg)\omega_v(z)\,d^\times z,$$
where $\widetilde f_v$ is smooth and compactly supported when $v\mid\infty$, and equals $\operatorname{Vol}(K_v)^{-1}\mathbf1_{K_v}$ when $v$ is finite; here $K_v=\mathrm{GL}_{n+1}(\mathcal O_v)$ at finite places and is maximal compact at archimedean places. The basis $B_\pi$ is an orthonormal basis of the $(K_0(\mathfrak N),\kappa)$-isotypic level subspace of the constituent $\pi$.

For a generic spectral constituent written as the isobaric sum $\pi=\pi_1\boxplus\cdots\boxplus\pi_m$ of unitary cuspidal constituents $\pi_j$, put

$$L(\pi)=\prod_{j=1}^m\Lambda(1,\pi_j,\mathrm{Ad})\prod_{1\leq j_1<j_2\leq m}|\Lambda(1,\pi_{j_1}\times\widetilde\pi_{j_2})|^2.$$

Here $\mathrm{Ad}$ is the adjoint representation of the dual general linear group on trace-zero endomorphisms, and $\Lambda(s,\pi,\mathrm{Ad})$ is the completed adjoint $L$-function.

For $\phi\in B_\pi$, let $W_\phi=\otimes_vW_{\phi,v}$ be its global Whittaker function. Define

$$\alpha_{\phi,\mathfrak N}=\prod_{v\mid\mathfrak N}\frac{\zeta_v(n+1)}{L_v(\pi_v)}\int_{N_n(F_v)\backslash G'(F_v)}|W_{\phi,v}(\iota(x_v))|^2\,dx_v,$$

and

$$\beta_{\phi,\mathfrak N}=\lim_{s\to0}\prod_{v\mid\mathfrak N}\frac{1}{L_v(1/2+s,\pi_v\times\pi'_v)}\int_{N_n(F_v)\backslash G'(F_v)}W_{\phi,v}(\iota(x_v))W'_v(x_v)|\det x_v|_{F_v}^{s}\,dx_v.$$

Let $H_{f_\infty}(\lambda_{\pi_\infty})$ be the scalar by which convolution with $f_\infty$ acts on the spherical Whittaker vector normalized by $W_\infty(I_{n+1})=1$ in an unramified archimedean representation with Langlands parameter $\lambda_{\pi_\infty}$. Let $H^\heartsuit_{f_\infty}(\lambda_{\pi'_\infty})$ be the scalar characterized by

$$\int_{G'(F_\infty)}f_\infty(\iota(y_\infty))W'_{\infty}(x_\infty y_\infty)\,dy_\infty=H^\heartsuit_{f_\infty}(\lambda_{\pi'_\infty})W'_{\infty}(x_\infty)$$

for the spherical Whittaker function of $\pi'_\infty$. Then

$$\int_{\mathcal G^{\mathrm{gen}}(\mathfrak N,\omega)}\sum_{\phi\in B_\pi}\frac{|\beta_{\phi,\mathfrak N}|^2}{\alpha_{\phi,\mathfrak N}}\frac{|\Lambda(1/2,\pi\times\pi')|^2}{L(\pi)}H_{f_\infty}(\lambda_{\pi_\infty})\,d\mu_\pi =c_{F,f_\infty}H^\heartsuit_{f_\infty}(\lambda_{\pi'_\infty})\Lambda(1,\pi',\mathrm{Ad})|\mathfrak N|^n\log|\mathfrak N|+O_{F,\pi',f_\infty}(|\mathfrak N|^n),$$

where $\Lambda$ denotes the completed Rankin–Selberg or adjoint $L$-function, $L_v(\pi_v)$ is the finite local factor of the displayed adjoint-and-cross-product normalization $L(\pi)$, rather than the standard degree-$(n+1)$ local factor, $\zeta_v(s)=(1-q_v^{-s})^{-1}$ is the local Dedekind zeta factor with $q_v$ the residue-field cardinality, $\zeta_F(s)$ is the Dedekind zeta function of $F$, $|\mathfrak N|$ is the absolute ideal norm, and $D_F$ is the absolute discriminant of $F$.

$$c_{F,f_\infty}=n(n+1)2^{r_2(n-1)}\pi^{-r_2}|D_F|^{n/2}\operatorname*{Res}_{s=1}\zeta_F(s).$$

The implied constant in the error term depends on $F$, $\pi'$, and $f_\infty$.

## Statement references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, Theorem 9.1, §§9.1.1–9.1.3](https://arxiv.org/pdf/2303.02225v1)

[Adrian Diaconu, Paul Garrett, and Dorian Goldfeld, *Moments for L-functions for GL(r) × GL(r−1)*, §§1, 3–4 (related methodology; different averaging family)](https://www.math.columbia.edu/~goldfeld/GLnMoments.pdf)

## Current proof boundary

This full moment is still unproved locally. Its proof needs the regularized trace formula, proper-Levi normalizations, the precise Whittaker norm/period identities and the geometric asymptotic with its local volume factors. The elementary congruence-index computation does not cancel those factors or supply an asymptotic. The source Corollary9.4 changes the spectral point to $1$ and is not deduced here from this central moment.
