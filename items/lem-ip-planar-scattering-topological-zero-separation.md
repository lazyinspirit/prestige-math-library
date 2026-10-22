---
id: lem-ip-planar-scattering-topological-zero-separation
kind: lemma
title: Logarithmic zero separation for perturbed scattering phase equations
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-planar-cauchy-beurling-and-near-two-inversion
  - lem-local-holder-cauchy-transform-estimate
  - thm-weyl-lemma-for-the-laplacian
  - thm-argument-principle-as-image-winding-number
  - thm-minimum-modulus-principle
  - cor-winding-number-classifies-loops-in-the-punctured-plane
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Faraco and Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 5.2, equation (5.7), Lemmas 5.6–5.7, Proposition 5.8 and the zero-exclusion argument, printed pp. 34–40. For a power modulus the proof here uses the minimum modulus of the holomorphic quotient F(k)/k directly."
dependency_level: 1
---

## Statement

Assume the Axiom of Choice and Countable Choice. Fix $B,C>0$, $0<b<1$, and a parameter $0<\delta\le1/2$. Let $g\in C^1(\mathbb C;\mathbb C)$ and $\ell\in\mathbb C\setminus\{0\}$, and suppose $g(0)=0$ and
$$|g(k)-\ell k|\le C|k|^{1-b}\qquad(|k|\ge1).$$
Suppose distributionally $\bar\partial g=\sigma g+E$, where $\sigma$ is measurable, $\|\sigma\|_\infty\le B$ and $E\in C^1$, and for every $k\in\mathbb C$,
$$|E(k)|\le C\delta e^{C|k|},\qquad |\nabla E(k)|\le C e^{C(1+|k|)}.$$
There exist $D>0$ and $\delta_0\in(0,1/2)$, depending only on $B,C,b$, such that
$$|\ell|\ge D[\log(1/\delta)]^{-b},\quad0<\delta<\delta_0\quad\Longrightarrow\quad g(k)\ne0\text{ for every }k\ne0.$$
If $E=0$, the same conclusion holds for every $\ell\ne0$, without a threshold condition.

## Statement references

[[lem-ip-planar-cauchy-beurling-and-near-two-inversion|Cauchy gauges and their one-half Hölder bounds for L4 data.]]

[[lem-local-holder-cauchy-transform-estimate|Cauchy derivatives of compactly supported Hölder data.]]

[[thm-argument-principle-as-image-winding-number|Counting zeros from a boundary winding number.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice and the functions and constants in the statement.

[F1] A compactly supported bounded coefficient has a Cauchy transform with the stated distributional derivative and one-half Hölder regularity; the transform of compactly supported one-half Hölder data has bounded first derivatives. The constants for a support disk of radius $R\ge1$ grow at most as a fixed power of $R$, by dilation to a fixed disk. ([[lem-ip-planar-cauchy-beurling-and-near-two-inversion]], [[lem-local-holder-cauchy-transform-estimate]])

[F2] A distribution with zero $\bar\partial$ derivative is holomorphic: applying $\partial$ makes it harmonic, so Weyl regularity applies and the Cauchy–Riemann equation concludes. A holomorphic function's boundary winding counts its zeros with multiplicity; winding is invariant under nonvanishing homotopy. A nonvanishing holomorphic function satisfies the minimum-modulus principle. ([[thm-weyl-lemma-for-the-laplacian]], [[thm-argument-principle-as-image-winding-number]], [[cor-winding-number-classifies-loops-in-the-punctured-plane]], [[thm-minimum-modulus-principle]])

[A1] The Axiom of Choice and Countable Choice are assumed through [F1]–[F2]. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Set $\lambda=|\ell|$ and choose $R=\max\{1,(8C/\lambda)^{1/b}\}$. Then for $|k|\ge R$, $|g(k)-\ell k|\le(\lambda/8)|k|$, so $g$ is nonzero there and its restriction to $|k|=R$ has winding one, by the straight homotopy to $\ell k$. Choose a smooth real cutoff $\chi_R$ equal to $1$ on $D_R$, supported in $D_{2R}$, with derivative bounded by $C/R$, and set $s=\mathcal C(\sigma\chi_R)$. Direct integration of its kernel gives $\|s\|_\infty\le C_B R$. The $L^4$ Cauchy estimate in [F1] gives a one-half Hölder bound at most $C_B R^{1/2}$. These estimates hold independently of the regularity of $\sigma$. [A1, F1, F2, given, algebra]

2.1 Put $H=e^{-s}E\chi_R$ and $S=\mathcal CH-\mathcal CH(0)$. On $D_{2R}$ the hypotheses give $\|E\|_\infty\le C\delta e^{2CR}$ and $\operatorname{Lip}(E)\le Ce^{C(1+2R)}$. The elementary estimate $|E(x)-E(y)|\le\min\{2\|E\|_\infty,\operatorname{Lip}(E)|x-y|\}$ implies $[E]_{C^{0,1/2}}\le C\delta^{1/2}e^{C'R}$ on that disk. Combine this with step 1.1 and the cutoff product estimate to get $\|H\|_{C^{0,1/2}(\mathbb C)}\le C\delta^{1/2}e^{C'R}$; the smooth cutoff vanishes before leaving $D_{2R}$, so extension by zero retains this bound after increasing the constant. By [F1] and dilation, $\|\nabla S\|_\infty\le C\delta^{1/2}e^{C_1R}$, absorbing polynomial powers of $R$ into the exponential. Also $S(0)=0$, so $|S(k)|\le C\delta^{1/2}e^{C_1R}|k|$. If $E=0$, take $S=0$ and these bounds hold with zero right side. [F1, step 1.1, algebra]

3.1 Define $F=e^{-s}g-S$. The distributional product rule, justified by the locally Sobolev Cauchy gauge and smooth approximation, gives $\bar\partial F=e^{-s}(1-\chi_R)(\sigma g+E)$, hence $F$ is holomorphic on $D_R$ by [F2], and $F(0)=0$. Suppose $C\delta^{1/2}e^{(C_1+C_B)R}\le\lambda/8$. On $|k|=R$, step 1.1 gives $|e^{-s}g|\ge(7/8)\lambda R e^{-C_BR}$ and step 2.1 makes $|S|\le(1/8)\lambda R e^{-C_BR}$. Thus $F$ is nonzero on that boundary, has $|F|\ge(3/4)\lambda R e^{-C_BR}$ there, and is homotopic there to $e^{-s}g$, whose winding is one: $e^{-s}$ has a continuous logarithm on the disk, so contributes winding zero. Since $F$ is continuous on $\overline D_R$, this positive boundary lower bound and compactness of the circle give a zero-free inner collar: choose $\rho<R$ so $F$ is nonzero on $\{\rho\le|k|\le R\}$. The circles $\partial D_\rho$ and $\partial D_R$ are homotopic through this collar in $\mathbb C\setminus\{0\}$, so $F|_{\partial D_\rho}$ also has winding one. The function $F$ is holomorphic on a neighborhood of $\overline D_\rho$, and [F2] applied to this inner circle gives exactly one zero counted with multiplicity in $D_\rho$. The collar has no zeros, so this is the full zero count in $D_R$. Since $F(0)=0$, it is simple and there are no others. Consequently $H(k):=F(k)/k$, with its holomorphic value at $0$, is nonvanishing on $D_R$ and continuous and nonvanishing on $\overline D_R$. Its modulus attains a minimum on the compact closed disk. If that minimum occurs in the interior, the minimum-modulus principle [F2] makes $H$ constant; otherwise it occurs on the boundary. In either case the boundary lower bound gives $|H(k)|\ge(3/4)\lambda e^{-C_BR}$ throughout $D_R$. Step 2.1 now yields $|F(k)+S(k)|\ge(5/8)\lambda e^{-C_BR}|k|$ for $0<|k|<R$. Hence $g=e^s(F+S)$ has no zero except zero inside this disk, and step 1.1 excludes all the exterior zeros. If $E=0$, the same proof works for every $\lambda>0$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 It remains to ensure the displayed smallness condition. Write $L=\log(1/\delta)$. If $\lambda\ge DL^{-b}$, then $R\le1+(8C/D)^{1/b}L$. Choose $D$ large enough that $(C_1+C_B)(8C/D)^{1/b}\le1/4$. For large $L$, the left side of the smallness condition is at most $C'e^{-L/4}$, while its right side is at least $(D/8)L^{-b}$. Since $e^{-L/4}L^b\to0$, there is a fixed $L_0$ for which the condition holds whenever $L\ge L_0$. Put $\delta_0=\min\{1/4,e^{-L_0}\}$. Step 3.1 then proves the asserted implication and its zero-error version. [step 3.1, algebra] ∎
