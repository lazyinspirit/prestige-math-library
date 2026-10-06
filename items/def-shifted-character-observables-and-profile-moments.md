---
id: def-shifted-character-observables-and-profile-moments
kind: definition
title: "Shifted character observables $p_\\rho^\\#$ and profile moments $\\tilde p_k$"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-plancherel-measure-on-partitions, def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram, def-partition-young-diagram-and-conjugate-partition, cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients, thm-standard-polytabloid-basis, def-factorial-and-falling-factorial, thm-integration-by-parts, def-derivative, prop-basic-value-properties-of-a-complex-character, thm-continuous-implies-integrable, thm-monotone-change-of-variable-for-riemann-integrals]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Def. 4.1, printed p. 19 (the functions $p_\\rho^\\#$); Def. 3.1, p. 15 (the generators $p_k^\\#$); Defs. 2.1, (2.1)-(2.3), Prop. 2.2, Def. 2.10, Prop. 2.11, pp. 9-14 (profile moments and scaling)"
---

## Definition

**(a) Shifted character observables.** For a partition $\rho\vdash r$ ([[def-partition-young-diagram-and-conjugate-partition]]) and $\lambda\vdash n$ set
$$p_\rho^\#(\lambda):=\begin{cases}n^{\downarrow r}\dfrac{\chi^\lambda_{\rho\cup1^{n-r}}}{\dim_{\mathbb C}S^\lambda},&n\ge r,\\[4pt]0,&n<r,\end{cases}$$
where $n^{\downarrow r}=n(n-1)\cdots(n-r+1)$ is the falling factorial of [[def-factorial-and-falling-factorial]], $\rho\cup1^{n-r}=(\rho,1,\dots,1)\vdash n$ is the padded partition, $\chi^\lambda$ is the complex irreducible character of $S_n$ indexed by $\lambda$, and $\dim_{\mathbb C}S^\lambda=\chi^\lambda_{(1^n)}=f^\lambda>0$ by [[thm-standard-polytabloid-basis]]. Character values are the power-sum coefficients, $\chi^\lambda(\mu)=\langle s_\lambda,p_\mu\rangle$ for $\mu\vdash n$ ([[cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients]]). For $n\ge r$ the quotient is a finite real number: a permutation and its inverse have the same cycle type and are conjugate (reverse the order within each cycle), while a complex character satisfies $\chi(g^{-1})=\overline{\chi(g)}$ and is constant on conjugacy classes ([[prop-basic-value-properties-of-a-complex-character]]). Therefore $\chi(g)=\overline{\chi(g)}$. The definition for $n<r$ is consistent with $n^{\downarrow r}=0$: in particular
$$p_1^\#(\lambda)=n^{\downarrow1}\frac{\chi^\lambda_{(1^n)}}{\dim_{\mathbb C}S^\lambda}=n\frac{f^\lambda}{f^\lambda}=n\qquad(\lambda\vdash n,\ n\ge1).$$

**(b) Profile moments.** For $\omega\in D_0$ with profile $\sigma_\omega=\frac12(\omega-|x|)$ ([[def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram]]) and $k\ge2$ define the **profile moment**
$$\tilde p_k[\omega]:=k(k-1)\int_{\mathbb R}x^{k-2}\sigma_\omega(x)\,dx,\qquad\tilde p_1[\omega]:=0 .$$
The integrand is continuous, since $\sigma_\omega$ is Lipschitz, and compactly supported. Its integral is the Riemann integral over any compact interval containing its support, so it exists and is finite by [[thm-continuous-implies-integrable]]. If in addition $\omega$ is piecewise linear with finitely many corners, $\sigma_\omega$ is continuous, compactly supported and piecewise $C^1$, and applying integration by parts on each linear piece and summing (the boundary terms cancel, since $\sigma_\omega$ vanishes at the ends and its values at the interior corners enter twice with opposite signs) gives
$$\tilde p_k[\omega]=-k\int_{\mathbb R}x^{k-1}\sigma_\omega'(x)\,dx\qquad(k\ge2),$$
in agreement with the source's formula (2.2), where $\sigma_\omega'$ exists except at the finitely many corners; this is the form used for the Young-diagram profiles of this page. The convention $\tilde p_1=0$ is the source's.

**(c) Scaling.** For every $s>0$ and $k\ge2$, the substitution $y=sx$ ([[thm-monotone-change-of-variable-for-riemann-integrals]], applied on a compact interval containing the support) in the definition of the $s$-scaling $\omega_s(x)=s^{-1}\omega(sx)$ gives
$$\tilde p_k[\omega_s]=k(k-1)\int_{\mathbb R}x^{k-2}\tfrac12\bigl(s^{-1}\omega(sx)-|x|\bigr)dx=k(k-1)s^{-k}\int_{\mathbb R}y^{k-2}\sigma_\omega(y)\,dy=s^{-k}\tilde p_k[\omega],$$
because $\frac12(s^{-1}|sx|-|x|)=0$; hence for $\lambda\vdash n$, $n\ge1$, the $\sqrt n$-scaled profile $\bar\lambda$ of [[def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram]] satisfies
$$\tilde p_k[\bar\lambda]=n^{-k/2}\tilde p_k[\lambda(\cdot)].$$
No choice principle is used.
