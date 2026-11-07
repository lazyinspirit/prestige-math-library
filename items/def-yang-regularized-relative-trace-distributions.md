---
dependency_level: 3
id: def-yang-regularized-relative-trace-distributions
kind: definition
title: "Yang's Truncated and Regularized Relative Trace Distributions"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - lem-gln-last-row-congruence-subgroup-index
  - def-glnplus1-gln-period-and-relative-trace-kernel
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), §§2.2–2.5"
      url: "https://arxiv.org/pdf/2303.02225v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Use the groups, normalized central characters, embedding, measures and kernel from the preceding definition. Let $P$ be the standard parabolic of type $(n,1)$, consisting of block matrices $\begin{pmatrix}A&b\\0&d\end{pmatrix}$ with $A\in\mathrm{GL}_n$ and $d\ne0$. Let $P_0$ be its mirabolic subgroup with $d=1$, so $P=ZP_0$. If $w_n$ exchanges the last two standard basis vectors, the two parabolic Bruhat cells are $P$ and $Pw_nP$, and $G(F)=P(F)\sqcup P(F)w_nP(F)$. Define

$$K_{f,\mathrm{Small}}(g_1,g_2)=\sum_{\gamma\in Z(F)\backslash P(F)}f(g_1^{-1}\gamma g_2),\qquad K_{f,\mathrm{Big}}(g_1,g_2)=\sum_{\gamma\in Z(F)\backslash P(F)w_nP(F)}f(g_1^{-1}\gamma g_2).$$

This is a decomposition after the rational central quotient; it is not a two-double-coset assertion for the mirabolic subgroup alone.

For $1\leq k\leq n$, put

$$N_{(k,1,\ldots,1)}=\left\{\begin{pmatrix}I_k&B\\0&D\end{pmatrix}:B\in\mathrm{Mat}_{k\times(n+1-k)},\ D\in N_{n+1-k}\right\},\quad R_k=\left\{\begin{pmatrix}A&C\\0&B\end{pmatrix}:A\in\mathrm{GL}_k,\ C\in\mathrm{Mat}_{k\times(n+1-k)},\ B\in N_{n+1-k}\right\}.$$

For $u\in N_{n+1}(\mathbb A_F)$ and $\alpha=(\alpha_1,\ldots,\alpha_n)\in F^n$, set $\psi_\alpha(u)=\psi(\sum_{j=1}^n\alpha_j u_{j,j+1})$. For $0\leq r\leq n$, let $\psi_r$ be the character whose coefficient vector has $n-r$ initial zeros and then $r$ ones. For $1\leq i,j\leq n$, define

$$F_iF_jK_f(g_1,g_2)=\sum_{\alpha_i\in R_{n+1-i}(F)\backslash R_n(F)}\sum_{\beta_j\in R_{n+1-j}(F)\backslash R_n(F)}\int_{[N_{(n+1-i,1,\ldots,1)}]}\int_{[N_{(n+1-j,1,\ldots,1)}]}K_f(u\alpha_i g_1,v\beta_j g_2)\overline{\psi_{i-1}(u)}\psi_{j-1}(v)\,du\,dv.$$

Set $F_0F_0K_f=K_f$; define $F_iF_0K_f$ and $F_0F_jK_f$ by omitting the absent sum and integral in the second and first variable, respectively. Apply the same operations to $K_{f,\mathrm{Small}}$, $K_{f,\mathrm{Big}}$, and to the noncuspidal kernel $K_{f,\mathrm{Eis}}+K_{f,\mathrm{Res}}$.

For $T>0$ let $[Z'_T]=\{z=aI_n\in Z'(F)\backslash Z'(\mathbb A_F):T^{-1}\leq|a|_{\mathbb A_F}\leq T\}$. If $\pi'_i$ has central character $\omega'_i$, put $\omega'=\omega'_1\overline{\omega'_2}$. Define the noncuspidal double Whittaker coefficient

$$K^\theta_{f,\mathrm{Eis}}(g_1,g_2)=\int_{[N_{n+1}]}\int_{[N_{n+1}]}(K_{f,\mathrm{Eis}}+K_{f,\mathrm{Res}})(ug_1,vg_2)\overline{\theta_{n+1}(u)}\theta_{n+1}(v)\,du\,dv.$$

Define $J^T_0(f,s)$, $J^T_{\mathrm{Geo}}(f,s)$, and $J^T_{\mathrm{Eis}}(f,s)$ by integrating, respectively, the cuspidal kernel $K_{f,0}$, the full kernel $K_f$, and $K^\theta_{f,\mathrm{Eis}}$ at $(\iota(z_1x),\iota(z_1z_2y))$ over $[Z'_T]^2\times[\overline{G'}]^2$, with weight

$$\phi'_1(x)\overline{\phi'_2(y)}\,\omega'(z_1)\overline{\omega'_2(z_2)}|\det(z_1x)|^{s_1}|\det(z_1z_2y)|^{s_2}\,dx\,dy\,d^\times z_1\,d^\times z_2.$$

For the level-aspect theorem, let $S$ be a finite set of places containing the archimedean places and every place where either $\pi'_i$ is ramified. Let $\mathfrak N\subsetneq\mathcal O_F$ be an integral ideal supported outside $S$, and let $\omega$ be an idele-class character whose finite conductor divides $\mathfrak N$. For $v\mid\mathfrak N$, put $K_v=K_0(\mathfrak p_v^{e_v(\mathfrak N)})$, the subgroup of $\mathrm{GL}_{n+1}(\mathcal O_v)$ whose last row is congruent modulo $\mathfrak p_v^{e_v(\mathfrak N)}$ to $(0,\ldots,0,*)$. For finite $v\nmid\mathfrak N$, put $K_v=\mathrm{GL}_{n+1}(\mathcal O_v)$, and at archimedean $v$ choose a maximal compact subgroup $K_v$. Let $K_0(\mathfrak N)=\prod_vK_v$. At finite $v\mid\mathfrak N$ put $\kappa_v(k)=\omega_v(k_{n+1,n+1})$, and outside the level put $\kappa_v=1$. These are characters because the conductor exponent is no larger than the congruence exponent. A level vector means $\pi(k)v=\kappa(k)v$, with $\kappa=\prod_{v<\infty}\kappa_v$, rather than literal invariance when $\omega$ is ramified. The test class $\mathcal F_S(\mathfrak N,\omega^{-1})$ consists of finite linear combinations of factorizable functions $f=\otimes_v f_v$ with the following local factors: for $v\mid\mathfrak N$, $f_v(z_vk_v)=\operatorname{Vol}(K_v)^{-1}\omega_v(z_v)^{-1}\omega_v(E_{n+1,n+1}(k_v))^{-1}$ on $Z(F_v)K_v$ and zero outside it; for $v\nmid\mathfrak N$, $f_v(g_v)=\int_{Z(F_v)}\widetilde f_v(z_vg_v)\omega_v(z_v)\,d^\times z_v$, where $\widetilde f_v$ is compactly supported and smooth when $v\in S$, and is also left- and right-$K_v$-finite at archimedean places, and $\widetilde f_v=\operatorname{Vol}(K_v)^{-1}\mathbf1_{K_v}$ when $v\notin S$.

Put $J^{\mathrm{Reg},T}_{\mathrm{Spec}}=J^T_0+J^T_{\mathrm{Eis}}$. For $X\in\{\mathrm{Small},\mathrm{Big}\}$, define

$$J^{\mathrm{Reg},T}_{\mathrm{Geo},X}=\int_{[Z'_T]^2\times[\overline{G'}]^2}(F_0F_0-F_1F_0-F_0F_1+F_1F_1)K_{f,X}(\iota(z_1x),\iota(z_1z_2y))$$

with the same cusp-form, central-character, determinant, and Haar-measure weight displayed above, and put $J^{\mathrm{Reg},T}_{\mathrm{Geo}}=J^{\mathrm{Reg},T}_{\mathrm{Geo},\mathrm{Small}}+J^{\mathrm{Reg},T}_{\mathrm{Geo},\mathrm{Big}}$. The untruncated symbols $J^{\mathrm{Reg}}_{\mathrm{Spec}}$ and $J^{\mathrm{Reg}}_{\mathrm{Geo}}$ denote the corresponding limits as $T\to\infty$ wherever those limits exist; existence and analytic continuation are theorem claims, not part of this definition.

## Definition references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, §§2.2–2.5](https://arxiv.org/pdf/2303.02225v1)

The two unipotent integrals are over rational unipotent quotients $[U]=U(F)\backslash U(\mathbb A_F)$. The $[\overline{G'}]$ integrals use determinant-norm-one representatives with the central variables split off in the outer integrations. Changing such representatives by norm-one central ideles is absorbed by changing $z_1,z_2$; the displayed central-character weights compensate the cusp-form factors, and the norm cutoffs are unchanged. Thus these combined integrations, rather than bare cusp forms viewed as functions on a central quotient, are the defining expressions. No convergence or spectral decomposition is asserted by this convention.

All displayed kernel sums and integrals are definitions on their domains of absolute convergence; no unproved convergence is part of this definition.

[[lem-gln-last-row-congruence-subgroup-index|Exact local index and nebentypus projector]] supplies these elementary local assertions. The global identification of Yang’s spectral level spaces with this precise character convention remains part of the held analytic interface.

The source test class is compact-type finite at infinity. Extension to arbitrary smooth archimedean test functions requires a separate approximation/convergence theorem, which is not part of this definition.
