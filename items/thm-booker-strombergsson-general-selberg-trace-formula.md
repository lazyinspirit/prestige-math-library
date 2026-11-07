---
id: thm-booker-strombergsson-general-selberg-trace-formula
kind: theorem
title: Booker–Strömbergsson General Cofinite Trace Formula
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-maass-spectral-parameter
  - def-booker-strombergsson-general-trace-formula-notation
  - lem-booker-strombergsson-centralizer-generator-for-nonelliptic-classes
  - thm-booker-strombergsson-cusp-scattering-and-maass-selberg-identities
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "A. Booker and A. Strömbergsson, Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture"
      url: "https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf"
      locator: "§2.1, Theorem 2 and equation (2.37): general finite-area isometry-group trace formula."
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "§2.1: exact statement of the BS07 general trace formula used as the input to the arbitrary-conductor computation."
---

## Statement

Let $\Gamma<G=\operatorname{PGL}_2(\mathbb R)$ and $\chi$ be as in the
preceding trace-formula notation definition; in particular $\Gamma$ is
discrete of finite hyperbolic area and
$\Gamma^+=\Gamma\cap\operatorname{PSL}_2(\mathbb R)$ has index two in
$\Gamma$. On the space of square-integrable functions satisfying
$f(\gamma z)=\chi(\gamma)f(z)$, use
$\Delta=-y^2(\partial_x^2+\partial_y^2)$. Let $\{\phi_j\}$ be an
orthonormal basis of its discrete spectrum, with
$\Delta\phi_j=\lambda_j\phi_j$ and trace parameters $r_j$ as defined there.
Let $h$ be even, holomorphic on $|\operatorname{Im}r|\le1/2+\delta$ for some
$\delta>0$, and satisfy
$|h(r)|\le A(1+|\operatorname{Re}r|)^{-2-\delta}$ on that strip. Put
$$g(u)=\frac1{2\pi}\int_{\mathbb R}h(r)e^{-iru}\,dr.$$
For each nonelliptic conjugacy class in $\mathcal M$, choose $T_0$ using the
preceding centralizer lemma, and use the meromorphic scattering
continuations established by the preceding cusp-scattering theorem. Then the
full cofinite trace identity is
\begin{align*}
\sum_j h(r_j)={}&
\frac{\operatorname{area}(\Gamma\backslash\mathbb H)}{4\pi}
\int_{\mathbb R}rh(r)\tanh(\pi r)\,dr\\
&+\sum_{\substack{\{T\}\subset\mathcal M\\T\ \mathrm{nonelliptic}}}
\frac{\log N(T_0)}{[Z_\Gamma(T):[T_0]]}
\frac{\chi(T)g(\log N(T))}
{N(T)^{1/2}-\operatorname{sgn}(\det T)N(T)^{-1/2}}\\
&+\sum_{\substack{\{T\}\subset\mathcal M\\T\ \mathrm{elliptic}}}
\frac{\chi(T)}{2|Z_\Gamma(T)|}\sin\theta(T)
\int_{\mathbb R}\frac{e^{-2\theta(T)r}}{1+e^{-2\pi r}}h(r)\,dr\\
&+\left(\sum_{\substack{j\in\mathcal C_{\Gamma,\chi}\\k(j)=j}}
\chi(T_{j0})\right)
\left\{\frac18h(0)+\frac1{4\pi}\int_{\mathbb R}h(r)
\left(\frac{\Gamma'(1/2+ir)}{\Gamma(1/2+ir)}-
\frac{\Gamma'(1+ir)}{\Gamma(1+ir)}\right)dr\right\}\\
&+\frac{g(0)}4\sum_{(j,v)\in\mathcal H}\chi(T_{jv})\log c_{jv}
+\frac{g(0)}2\sum_{j\notin\mathcal C_{\Gamma,\chi}}
\log\frac1{|1-\chi(T_j)|}\\
&+\frac{|\mathcal C_{\Gamma,\chi}|}{2}
\left\{\frac14h(0)-g(0)\log2-
\frac1{2\pi}\int_{\mathbb R}h(r)\frac{\Gamma'(1+ir)}{\Gamma(1+ir)}\,dr\right\}\\
&+\frac1{4\pi}\int_{\mathbb R}h(r)
\frac{\varphi_\Gamma'(1/2+ir)}{\varphi_\Gamma(1/2+ir)}\,dr
-\frac14h(0)\operatorname{Tr}\Phi_\Gamma(1/2).
\end{align*}
The conjugacy sums are over distinct $\Gamma$-conjugacy classes; the
nonelliptic sum includes hyperbolic elements, reflections, and glide
reflections. If $\mathcal R_{\Gamma,\chi}=\varnothing$, the final scattering
line is omitted. All sums and integrals converge absolutely.

## Statement references

[A. Booker and A. Strömbergsson, *Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture*](https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf)

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

## Proof status

The cited source proves the full identity, but this batch has no local
reconstruction of its orbital-term formulas or their trace-class and spectral
decomposition argument. The current Maass spectral supplier covers congruence
surfaces and does not establish the general cofinite, possibly
orientation-reversing case. The theorem is retained with its full source scope
and escalated; the citations do not close the proof.
