---
id: lem-ip-gaussian-shift-small-ball-ratio
kind: lemma
title: Small-ball ratios for Cameron–Martin translates of a Banach Gaussian
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-hahn-banach-extension-principle-relative
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-banach-gaussian-covariance-operator-and-rkhs
  - thm-banach-gaussian-covariance-rkhs-is-well-defined
  - thm-cameron-martin-translation-for-separable-banach-gaussian-law
  - thm-support-of-banach-gaussian-is-closure-of-rkhs
  - lem-ip-banach-gaussian-cm-shift-ball-bound
  - lem-separable-banach-has-countable-norming-family
  - def-polish-space
  - thm-every-borel-probability-on-a-polish-space-is-tight
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Dashti, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems"
      url: "https://arxiv.org/pdf/1303.4795"
      locator: "§3, Theorem 3.2 and complete proof; its proof invokes the Gaussian small-ball ratio rather than proving it."
    - title: "E. Kekkonen and P. Korolev, Inverse Problems, lecture notes"
      url: "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf"
      locator: "§7.4, Theorem 7.5.3 and its stated Cameron–Martin ratio; the local argument supplies the ratio proof."
axiom_use: "AC is required by the stated Gaussian Cameron–Martin and support interfaces. The approximation and limiting argument adds no stronger choice principle."
---

## Statement

Assume the Axiom of Choice, the Hahn–Banach theorem, and countable choice. Let $B$ be a real separable Banach space, and let $W$ be a centered Borel Gaussian random element with law $\mu$. Define its covariance by $C\ell=\mathbb E[\ell(W)W]$ for $\ell\in B^*$, let $N=\{\ell:\mathbb E[\ell(W)^2]=0\}$, and let $E$ be the completion of $B^*/N$ with inner product $\langle[\ell],[m]\rangle_E=\mathbb E[\ell(W)m(W)]$. Let $i:E\to B$ be the canonical injection extending $[\ell]\mapsto C\ell$. For $z\in B$ and $r>0$, write $\overline B_B(z,r)=\{x\in B:\|x-z\|_B\le r\}$. Then for any $h_1,h_2\in E$,
$$ \frac{\mu(\overline B_B(ih_1,r))}{\mu(\overline B_B(ih_2,r))} \longrightarrow \exp\!\left(\frac{\|h_2\|_E^2-\|h_1\|_E^2}{2}\right) \qquad(r\downarrow0). $$
The denominator is positive for every $r>0$.

## Statement references

[[def-borel-gaussian-random-element-on-a-separable-banach-space|a centered Borel Gaussian random element has centered normal continuous-linear projections]]

[[def-banach-gaussian-covariance-operator-and-rkhs|the covariance-induced Cameron–Martin Hilbert space]]

[[thm-cameron-martin-translation-for-separable-banach-gaussian-law|the Cameron–Martin change-of-measure formula]]

[[thm-support-of-banach-gaussian-is-closure-of-rkhs|the support is the Banach closure of the Cameron–Martin space]]

## Facts & Assumptions

**Given:** AC, HB, countable choice, a real separable Banach space $B$, a centered Borel Gaussian random element $W$ with law $\mu$, and its covariance-induced Cameron–Martin Hilbert space $E$ with canonical injection $i$.

[A1] AC is assumed by the Cameron–Martin and support interfaces below. [[def-axiom-of-choice]]

[A2] HB and countable choice are assumed for the norming-family interface used to justify symmetry on the centered ball. [[def-hahn-banach-extension-principle-relative]], [[def-countable-choice]]

[F1] $W$ is Borel measurable, and every $\ell\in B^*$ applied to $W$ is a centered real normal variable. [[def-borel-gaussian-random-element-on-a-separable-banach-space]]

[F2] The Cameron–Martin space is the completion of the covariance quotient, its canonical injection is continuous and injective, and the range of the covariance quotient is dense in $E$. [[def-banach-gaussian-covariance-operator-and-rkhs]], [[thm-banach-gaussian-covariance-rkhs-is-well-defined]]

[F3] For each $h\in E$, the law of $W+ih$ has density $\exp(z_h-\|h\|_E^2/2)$ with respect to $\mu$, where $h\mapsto z_h\in L^2(\mu)$ is linear and isometric, $z_h$ is centered normal with variance $\|h\|_E^2$, and $z_{C\ell}=\ell(W)$ almost surely. Since the covariance range is dense in $E$, this also makes $z_h$ an $L^2$ limit of continuous-linear Gaussian coordinates. [[thm-cameron-martin-translation-for-separable-banach-gaussian-law]], [[def-multivariate-normal-law]], [[def-standard-normal-and-normal-laws]]

[F4] A separable Banach space is Polish, every Borel probability on a Polish space is tight, and the support of a centered tight Borel Gaussian is $\overline{iE}$ in $B$. Thus $0$ belongs to the support and every open ball about $0$ has positive $\mu$-mass. [[def-polish-space]], [[thm-every-borel-probability-on-a-polish-space-is-tight]], [[thm-support-of-banach-gaussian-is-closure-of-rkhs]]

[F5] For every $h\in E$ and $r>0$, $\mu(\overline B_B(ih,r))\le\mu(\overline B_B(0,r))$. [[lem-ip-banach-gaussian-cm-shift-ball-bound]]

[F6] A real separable Banach space has a countable family $(\ell_j)$ with $\|x\|_B=\sup_j|\ell_j(x)|$. [[lem-separable-banach-has-countable-norming-family]]

## Proof

**Proof technique:** use the Cameron–Martin formula on a centered ball, approximate each Cameron–Martin coordinate by a continuous linear functional, and control the residual exponential by the shift-ball bound.

1.1 Put $A_r=\overline B_B(0,r)$. By [F4], $\mu(A_r)>0$ because it contains the open ball of radius $r$ about the support point $0$. Let $(\ell_j)$ be the norming family from [F6], and define $A_{r,n}=\bigcap_{j\le n}\{|\ell_j(W)|\le r\}$. The sets decrease to $A_r$. For fixed $n$, the vector $(z_s,\ell_1(W),\ldots,\ell_n(W))$ is centered Gaussian: [F3] makes $z_s$ an $L^2$ limit of continuous-linear Gaussian coordinates, so adjoining the finitely many displayed coordinates gives a centered Gaussian limit. Its law is invariant under simultaneous sign reversal, and $A_{r,n}$ is invariant under that reversal. Hence $$ \mathbb E[e^{z_s}\mathbf1_{A_{r,n}}]=\mathbb E[e^{-z_s}\mathbf1_{A_{r,n}}], \qquad \mathbb E[z_s\mathbf1_{A_{r,n}}]=0. $$ The variables $e^{\pm z_s}$ are integrable by the Gaussian moment formula in [F3]. Dominated convergence as $n\to\infty$ therefore gives conditional symmetry and conditional mean zero on $A_r$. Thus $$ 1\le \mathbb E_\mu[e^{-z_s}\mid A_r]\le e^{\|s\|_E^2/2}. $$ For the lower bound, conditional Jensen applies. For the upper bound, [F3] applied to $-s$ gives $$ \mathbb E_\mu[e^{-z_s}\mathbf 1_{A_r}] =e^{\|s\|_E^2/2}\,\mu(\overline B_B(is,r)), $$ and [F5] bounds the last probability by $\mu(A_r)$. [A1, A2, F1, F3, F4, F5, F6, given, algebra]

2.1 For any $h\in E$, choose $\ell_n\in B^*$ with $h_n:=C\ell_n\to h$ in $E$, possible by the completion in [F2], and put $s_n=h-h_n$. The Cameron–Martin formula [F3], applied to the translate by $-h$, gives $$ \frac{\mu(\overline B_B(ih,r))}{\mu(A_r)} =e^{-\|h\|_E^2/2}\,\mathbb E_\mu[e^{-z_h}\mid A_r]. $$ Since $z_{h_n}=\ell_n(W)$ almost surely and $z_h=z_{h_n}+z_{s_n}$, the bound $|\ell_n(W)|\le r\|\ell_n\|_{B^*}$ on $A_r$ and step 1.1 imply $$ e^{-r\|\ell_n\|_{B^*}} \le \mathbb E_\mu[e^{-z_h}\mid A_r] \le e^{r\|\ell_n\|_{B^*}}e^{\|s_n\|_E^2/2}. $$ For fixed $n$, let $r\downarrow0$; then let $n\to\infty$, so $\|s_n\|_E\to0$. The two bounds show $\mathbb E_\mu[e^{-z_h}\mid A_r]\to1$. [F2, F3, step 1.1, given, choose, algebra]

3.1 Applying step 2.1 separately to $h_1$ and $h_2$ yields $$ \frac{\mu(\overline B_B(ih_1,r))}{\mu(\overline B_B(ih_2,r))} =e^{(\|h_2\|_E^2-\|h_1\|_E^2)/2} \frac{\mathbb E[e^{-z_{h_1}}\mid A_r]}{\mathbb E[e^{-z_{h_2}}\mid A_r]}. $$ Both conditional expectations tend to $1$, so the ratio has the stated limit. Positivity of the denominator follows from [F4], since each closed ball contains the corresponding open neighborhood of a support point. [F4, step 2.1, given, algebra] ∎

