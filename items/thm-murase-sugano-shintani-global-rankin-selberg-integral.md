---
id: thm-murase-sugano-shintani-global-rankin-selberg-integral
kind: theorem
title: "Murase–Sugano Global Shintani Integral for a GL(n) × GL(n−1) Pair"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-local-rankin-selberg-integral-for-gln-times-glm
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks
  - thm-murase-sugano-local-class-one-shintani-function-dimension-one
dependency_level: 6
sources:
  scraped: []
  references:
    - title: "Atsushi Murase and Takashi Sugano, Shintani Functions and Automorphic L-Functions for GL(n), Tohoku Math. J. 48 (1996), §§8–9"
      url: "https://www.jstage.jst.go.jp/article/tmj1949/48/2/48_2_165/_pdf"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lectures 2–3"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $E$ be a number field with adele ring $\mathbb A_E$, let $n\geq2$, and put $G=\mathrm{GL}_n$ and $G_0=\mathrm{GL}_{n-1}$, embedded by $x\mapsto\operatorname{diag}(x,1)$. Let $f$ be a square-integrable class-one automorphic Hecke eigenform on $G_0(\mathbb A_E)$, and let $F$ be a cuspidal class-one automorphic Hecke eigenform on $G(\mathbb A_E)$, with central characters $\omega$ and $\Omega$ unramified at every finite place. Class-one means fixed by the standard maximal compact subgroup at each place: $\mathrm{GL}_m(\mathcal O_v)$ at finite places, $O(m)$ at real places, and $U(m)$ at complex places. At finite places assume $f$ and $F$ are simultaneous eigenfunctions for the spherical Hecke algebras. Define the global Shintani function, initially in its half-plane of absolute convergence, by

$$W_{f,F}(g;s)=\int_{G_0(E)\backslash G_0(\mathbb A_E)}f(x)F(\operatorname{diag}(x,1)g)|\det x|_{\mathbb A_E}^{s}\,dx.$$

Let $P$ and $Q$ be the standard maximal parabolic subgroups of $G$ of block types $(n-1,1)$ and $(1,n-1)$, and let $K_G$ be the product of the standard maximal compact subgroups. For $g=\begin{pmatrix}g_0&*\\0&t\end{pmatrix}k\in P(\mathbb A_E)K_G$ and $g=\begin{pmatrix}t&*\\0&g_0\end{pmatrix}k\in Q(\mathbb A_E)K_G$, respectively, use the standard sections

$$\phi_P(g;s;f,\Omega^{-1})=(\omega\Omega)^{-1}(t)f(g_0)\delta_P(g)^{s/n+1/2},\qquad \phi_Q(g;s;1)=\delta_Q(g)^{s/n+1/2},$$

where $\delta_P,\delta_Q$ are the parabolic modulus characters. Let $E_P(g;s;f,\Omega^{-1})$ and $E_Q(g;s;1)$ be the corresponding Eisenstein series, obtained by summing these sections over $P(E)\backslash G(E)$ and $Q(E)\backslash G(E)$. Normalize them by

$$E_P^*(g;s;f,\Omega^{-1})=\xi(\Omega\otimes f;s+1)E_P(g;s;f,\Omega^{-1}),\qquad E_Q^*(g;s;1)=\xi_E(s+n/2)E_Q(g;s;1),$$

where $\xi_E$ is the completed Dedekind zeta function of $E$, and $\xi(\Omega\otimes f;u)$ is the completed standard $L$-function of the twist of $f$ by $\Omega$, in the source normalization. Define

$$Z^*_{f,F}(s_1,s_2)=\int_{Z_G(\mathbb A_E)G(E)\backslash G(\mathbb A_E)}F(g)E_P^*(g;s_1;f,\Omega^{-1})E_Q^*(g;s_2;1)\,dg,$$

where $Z_G$ is the center of $G$. Then the integral is absolutely convergent when $\operatorname{Re}(s_1)$ and $\operatorname{Re}(s_2)$ are sufficiently large and has an entire continuation to $\mathbb C^2$. In the source normalization it satisfies

$$Z^*_{f,F}(s_1,s_2)=|d_E|^{-1}\,\xi\!\left(\Omega\otimes\widetilde F;\frac{n-1}{n}s_1+\frac1n s_2+\frac12\right)W_{f,F}\!\left(1;\frac{s_1-s_2}{n}\right),$$

where $d_E$ is the discriminant of $E$, $\widetilde F(g)=F({}^tg^{-1})$, and $\xi(\Omega\otimes\widetilde F;u)$ is the completed standard $L$-function of the twist of the contragredient of $F$ by $\Omega$, in the source's completed normalization. If the global Whittaker coefficient of $f$ for a nontrivial additive character $\psi:E\backslash\mathbb A_E\to\mathbb C^\times$ is nonzero, let $W_{f,v}$ and $W_{F,v}$ be the local Whittaker functions for $\psi_v^{-1}$ and $\psi_v$, respectively. The related Euler product for the global Shintani function is $W_{f,F}(1;s)=Z_\infty(f\otimes F;s)L(f\otimes F;s+\tfrac12)$, where $L(f\otimes F;u)$ is the global tensor-product Rankin–Selberg $L$-function and

$$Z_\infty(f\otimes F;s)=\prod_{v\mid\infty}\int_{N_{n-1}(E_v)\backslash G_0(E_v)}W_{f,v}(x)W_{F,v}(\operatorname{diag}(x,1))|\det x|_{E_v}^{s}\,dx$$

is the product of the archimedean local Shintani integrals for the local Whittaker functions of $f$ and $F$.

## Statement references

[Atsushi Murase and Takashi Sugano, *Shintani Functions and Automorphic L-Functions for GL(n)*, §§8–9, especially equations (8.10)–(8.11) and Theorem 9.4](https://www.jstage.jst.go.jp/article/tmj1949/48/2/48_2_165/_pdf)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lectures 2–3](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
