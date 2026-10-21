---
id: thm-ip-gaussian-small-ball-map-functional
kind: theorem
title: Gaussian posterior small-ball ratios and the Onsager–Machlup functional
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-hahn-banach-extension-principle-relative
  - def-ip-prior-on-a-forward-domain
  - def-ip-misfit-evidence-and-posterior-law
  - thm-ip-function-space-posterior-propriety
  - def-ip-small-ball-map-estimator
  - lem-ip-gaussian-shift-small-ball-ratio
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-banach-gaussian-covariance-operator-and-rkhs
  - thm-banach-gaussian-covariance-rkhs-is-well-defined
  - def-polish-space
  - thm-every-borel-probability-on-a-polish-space-is-tight
  - thm-support-of-banach-gaussian-is-closure-of-rkhs
  - lem-banach-gaussian-rkhs-unit-ball-is-compact
  - thm-fernique-integrability-for-separable-banach-gaussian-law
  - thm-bolzano-weierstrass
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Dashti, K. J. H. Law, A. M. Stuart, and J. Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems"
      url: "https://arxiv.org/pdf/1303.4795"
      locator: "§2, Assumption 2.1; §3, Definition 3.1, Theorem 3.2 and proof, Theorem 3.5 and Corollary 3.10 with proofs."
    - title: "H. Kekkonen and Y. Korolev, Inverse Problems, lecture notes"
      url: "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf"
      locator: "§7.5, Theorems 7.5.2–7.5.3 and their proofs/statements, and Theorem 7.5.6 with its compact-embedding minimizer proof."
axiom_use: "AC supplies the Gaussian, compactness, and Fernique interfaces. HB and countable choice are hypotheses of the finite-projection ratio proof. The compactness-based minimizer argument uses a real bounded-sequence subsequence only; no global strong MAP is inferred from the pairwise ratio theorem."
---

## Statement

Assume the Axiom of Choice, the Hahn–Banach theorem, and countable choice. Let $B$ be a real separable Banach space, and let $W$ be a centered Borel Gaussian random element in $B$ with law $\mu$. Define its covariance by $C\ell=\mathbb E[\ell(W)W]$ for $\ell\in B^*$, let $N=\{\ell:\mathbb E[\ell(W)^2]=0\}$, and let $E$ be the completion of $B^*/N$ with inner product $\langle[\ell],[m]\rangle_E=\mathbb E[\ell(W)m(W)]$. Write $i:E\to B$ for the canonical injection extending $[\ell]\mapsto C\ell$. Under AC, the image of the closed $E$-unit ball is compact in the $B$ norm. Let $\Phi:B\to\mathbb R$ be Borel measurable, locally bounded above, and locally Lipschitz. Suppose that for every $\varepsilon>0$ there is $M_\varepsilon\in\mathbb R$ such that
$$ \Phi(u)\ge M_\varepsilon-\varepsilon\|u\|_B^2\qquad(u\in B). $$
Define the evidence $Z=\int_B e^{-\Phi(u)}\,\mu(du)$ and, when $0<Z<\infty$, the posterior $\Pi(du)=Z^{-1}e^{-\Phi(u)}\mu(du)$. Then $0<Z<\infty$. For $h\in E$, define
$$ I(ih)=\Phi(ih)+\frac12\|h\|_E^2, \qquad I(u)=+\infty\quad(u\notin iE). $$
The functional $I$ attains a finite minimum on $iE$, and for every fixed $h_1,h_2\in E$,
$$ \frac{\Pi(\overline B_B(ih_1,r))}{\Pi(\overline B_B(ih_2,r))} \longrightarrow \exp\!\bigl(I(ih_2)-I(ih_1)\bigr) \qquad(r\downarrow0). $$
Its minimizers are exactly the Cameron–Martin ratio modes. This pairwise result makes no claim of a global strong small-ball MAP.

## Statement references

[[def-ip-prior-on-a-forward-domain|a Borel probability prior is concentrated on its declared forward domain]]

[[def-ip-misfit-evidence-and-posterior-law|the fixed-data posterior is the normalized potential-weighted prior]]

[[def-ip-small-ball-map-estimator|strong small-ball MAP and Cameron–Martin ratio-mode conventions]]

[[def-banach-gaussian-covariance-operator-and-rkhs|the Cameron–Martin norm and canonical injection]]

## Facts & Assumptions

**Given:** AC, HB, countable choice, a real separable Banach space $B$, a centered Borel Gaussian random element $W$ with law $\mu$ and Cameron–Martin space $E$, and a Borel locally bounded-above locally Lipschitz potential $\Phi$ satisfying the displayed lower bound.

[A1] AC is required by the Gaussian, Cameron–Martin support, compactness, and Fernique interfaces used here. [[def-axiom-of-choice]]

[A2] HB and countable choice are assumed by the finite-projection Gaussian ratio result. [[def-hahn-banach-extension-principle-relative]], [[def-countable-choice]]

[F1] A prior is a Borel probability with full mass on its declared domain; the fixed-data posterior is the normalized measure with density proportional to $e^{-\Phi}$ on that domain. We specialize to $D=B$. [[def-ip-prior-on-a-forward-domain]], [[def-ip-misfit-evidence-and-posterior-law]]

[F2] If a finite continuous potential on a Borel-prior domain has a common integrable lower envelope, then its evidence is finite and positive and the normalized update is a probability. [[thm-ip-function-space-posterior-propriety]]

[F3] For some $a>0$, $\int_B e^{a\|u\|_B^2}\,\mu(du)<\infty$. [[thm-fernique-integrability-for-separable-banach-gaussian-law]]

[F4] Since $B$ is Polish and $\mu$ is a Borel probability, it is tight; the support theorem then gives $\operatorname{supp}\mu=\overline{iE}$, so $0$ is a support point. [[def-polish-space]], [[thm-every-borel-probability-on-a-polish-space-is-tight]], [[thm-support-of-banach-gaussian-is-closure-of-rkhs]]

[F5] The Cameron–Martin space is a Hilbert completion with continuous canonical injection and $\ell(ih)=\langle h,[\ell]\rangle_E$ for $\ell\in B^*$. [[def-banach-gaussian-covariance-operator-and-rkhs]], [[thm-banach-gaussian-covariance-rkhs-is-well-defined]]

[F6] The closed unit ball of $E$ has compact image in $B$. [[lem-banach-gaussian-rkhs-unit-ball-is-compact]]

[F7] The Gaussian prior's fixed-center ball ratios converge to $\exp((\|h_2\|_E^2-\|h_1\|_E^2)/2)$. [[lem-ip-gaussian-shift-small-ball-ratio]]

[F8] A Cameron–Martin ratio mode compares every fixed pair of Cameron–Martin ball probabilities by a limit at least $1$. [[def-ip-small-ball-map-estimator]]

[F9] Every bounded sequence of real numbers has a convergent subsequence. [[thm-bolzano-weierstrass]]

## Proof

**Proof technique:** establish posterior propriety using Fernique's exponential-square moment, transfer the Gaussian ball-ratio limit through the locally Lipschitz likelihood, and apply the direct method using the compact Cameron–Martin unit ball.

1.1 Choose $0<\varepsilon<a$ with $a$ from [F3]. The lower bound gives $\Phi(u)\ge M_\varepsilon-\varepsilon\|u\|_B^2$. Define the nonnegative Borel function $M_1(t)=\max\{0,\varepsilon t^2-M_\varepsilon\}$. Then $\Phi(u)\ge-M_1(\|u\|_B)$ and $$ e^{M_1(\|u\|_B)} \le 1+e^{-M_\varepsilon}e^{\varepsilon\|u\|_B^2}. $$ The right side is $\mu$-integrable by [F3]. Since $\Phi$ is locally Lipschitz it is finite and continuous on $B$. Apply [F2] with the single datum and $D=B$; the prior definition in [F1] makes $\mu$ a prior on $B$. Thus $0<Z<\infty$ and $\Pi$ is a probability. [A1, F1, F2, F3, given, construct]

1.2 Let $C_i=\|i:E\to B\|$. If $E=\{0\}$, $I$ has the sole candidate $0$ and is minimized there. Otherwise $C_i>0$. Choose $\varepsilon<1/(4C_i^2)$ and use the potential lower bound to obtain, for every $h\in E$, $$ I(ih)\ge M_\varepsilon+\frac12\|h\|_E^2-\varepsilon\|ih\|_B^2 \ge M_\varepsilon+\frac14\|h\|_E^2. $$ Since $I(0)=\Phi(0)$ is finite, $\inf_E I$ is finite and any minimizing sequence is bounded in $E$. [F5, given, choose, algebra]

2.1 Fix $h\in E$. Local Lipschitz continuity at $ih$ supplies constants $L_h<\infty$ and $\rho_h>0$ such that $|\Phi(u)-\Phi(ih)|\le L_h r$ whenever $\|u-ih\|_B\le r<\rho_h$. Therefore $$ e^{-\Phi(ih)-L_hr}\mu(\overline B_B(ih,r)) \le \int_{\overline B_B(ih,r)}e^{-\Phi(u)}\,\mu(du) \le e^{-\Phi(ih)+L_hr}\mu(\overline B_B(ih,r)). $$ For fixed $h_1,h_2\in E$, divide the two integral bounds and cancel the common normalizer $Z$ in [F1]. The factors from the Lipschitz errors tend to $1$, and [F7] gives $$ \frac{\Pi(\overline B_B(ih_1,r))}{\Pi(\overline B_B(ih_2,r))} \longrightarrow e^{\Phi(ih_2)-\Phi(ih_1)} e^{(\|h_2\|_E^2-\|h_1\|_E^2)/2} =e^{I(ih_2)-I(ih_1)}. $$ The denominator is positive for small $r$: [F4] gives positive prior mass to every open ball about $ih_2$ (since $ih_2\in iE$), and the likelihood is strictly positive and continuous there. [A2, F1, F4, F7, given, step 1.1, algebra]

2.2 Choose a minimizing sequence $(h_n)$ in $E$ and, by [F9], pass to a subsequence for which $\|h_n\|_E\to L$. Its images lie in a fixed multiple of the closed $E$-unit ball, whose image is compact in $B$ by [F6]. Pass to a further subsequence with $ih_n\to v$ in $B$; compactness means $v=ih$ for some $h\in E$. For each $\ell\in B^*$, [F5] gives $$ |\ell(ih)|=\lim_n|\ell(ih_n)| =\lim_n|\langle h_n,[\ell]\rangle_E| \le L\|[\ell]\|_E. $$ The classes $[\ell]$ are dense in $E$ by [F5]. For every unit $g\in E$, choose nonzero classes $[\ell_n]\to g$ and normalize them; then $[\ell_n]/\|[\ell_n]\|_E\to g$. Thus the normalized covariance classes are dense in the unit sphere, and the supremum of $|\langle h,[\ell]\rangle_E|$ over them is $\|h\|_E$. The displayed bound gives $\|h\|_E\le L$. Local Lipschitz continuity gives $\Phi(ih_n)\to\Phi(ih)$, and therefore $$ I(ih)\le\lim_n\left(\Phi(ih_n)+\frac12\|h_n\|_E^2\right)=\inf_E I. $$ Thus $I$ attains its finite minimum. [F5, F6, F9, step 1.2, given, choose, algebra]

3.1 By [F7], the posterior ball ratio for fixed $ih,ik\in iE$ is $e^{I(ik)-I(ih)}$. This limit is at least $1$ for every $k\in E$ exactly when $I(ih)\le I(ik)$ for every $k\in E$. By [F8], those points are precisely the Cameron–Martin ratio modes. The comparison is only over fixed centers in $iE$; no supremum over all $B$ centers has been controlled, so it does not establish a global strong small-ball MAP. [F7, F8, step 2.1, step 2.2, given, algebra] ∎

