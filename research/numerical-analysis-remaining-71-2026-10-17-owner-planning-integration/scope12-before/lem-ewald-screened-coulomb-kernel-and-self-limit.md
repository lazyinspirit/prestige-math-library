---
id: lem-ewald-screened-coulomb-kernel-and-self-limit
kind: lemma
title: "Gaussian screened Coulomb kernel and its self limit"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [cor-c-one-change-of-variables-for-l-one-functions, def-countable-choice, thm-chain-rule, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-ftc-first-part, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-gaussian-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hark Lee and Wei Cai, Ewald Summation for Coulomb Interactions in a Periodic Supercell (2009 lecture notes)"
      url: "https://warwick.ac.uk/fac/sci/moac/degreescopy/degrees-copy/modules/ch926/lectures/molsim/ewaldsummationnotes.pdf"
      locator: "§§3–4, equations (13)–(25), printed pp. 3–5: Gaussian screening, erf/erfc radial potentials, and the self limit."
    - title: "Cameron F. Abrams, Modern Molecular Simulations (CHE T580, 2021 lecture notes)"
      url: "https://research.coe.drexel.edu/cbe/abramsgroup/msim2/CHE_T580_Lecture_Notes.pdf"
      locator: "Chapter 7, equations (242)–(248), printed pp. 86–87: the Gaussian potential, its self value, and the screened real-space term."
---

## Statement

Assume Countable Choice. For $\alpha>0$, define
$$g_\alpha(x)=\frac{\alpha^3}{\pi^{3/2}}e^{-\alpha^2|x|^2},\quad \operatorname{erf}(s)=\frac2{\sqrt\pi}\int_0^s e^{-t^2}\,dt,\quad \operatorname{erfc}(s)=1-\operatorname{erf}(s).$$
Here $\Delta=\sum_{j=1}^3\partial_{x_j}^2$, $\delta_0$ is the distribution
$\langle\delta_0,\varphi\rangle=\varphi(0)$, and a test function is a smooth
compactly supported function $\varphi$.
For $r=|x|>0$ put $\phi_\ell(r)=\operatorname{erf}(\alpha r)/r$ and
$\phi_s(r)=\operatorname{erfc}(\alpha r)/r$. Then $\phi_\ell$ extends
continuously to $r=0$, $-\Delta\phi_\ell=4\pi g_\alpha$ distributionally on
$\mathbb R^3$, and $-\Delta\phi_s=4\pi\delta_0-4\pi g_\alpha$. Moreover,
for every $s\ge0$,
$$\operatorname{erfc}(s)=\frac2{\sqrt\pi}\int_s^\infty e^{-t^2}\,dt,$$
$$\phi_s(r)=\frac1r-\frac{2\alpha}{\sqrt\pi}+O(r^2)\quad(r\downarrow0),$$
and for every $r>0$,
$$0\le\phi_s(r)\le\frac{e^{-\alpha^2r^2}}{\sqrt\pi\alpha r^2},\qquad |\phi_s'(r)|\le\frac{2\alpha}{\sqrt\pi}\frac{e^{-\alpha^2r^2}}r+ \frac{e^{-\alpha^2r^2}}{\sqrt\pi\alpha r^3}.$$

## Facts & Assumptions

**Given:** Countable Choice, $\alpha>0$, a point $x\in\mathbb R^3$, $r=|x|$, and an arbitrary $\varphi\in C_c^\infty(\mathbb R^3)$.

[A1] Countable Choice is assumed in the local divergence theorem and its volume interfaces ([[def-countable-choice]]).

[F1] The bounded $C^1$ divergence theorem applies to punctured balls and smooth vector fields on their closures ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F2] The integral function of a continuous integrand has derivative equal to that integrand ([[thm-ftc-first-part]]).

[F3] $\int_{-\infty}^{\infty}e^{-t^2}\,dt=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F4] Absolutely integrable products may be integrated by successive coordinates ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] The chain rule differentiates $r\mapsto\operatorname{erf}(\alpha r)$ using its derivative and $r\mapsto\alpha r$ ([[thm-chain-rule]]).

[F6] The substitution $y=\alpha x$ in a nonnegative Lebesgue integral has Jacobian $\alpha$ in one dimension ([[cor-c-one-change-of-variables-for-l-one-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], $\operatorname{erf}'(s)=2e^{-s^2}/\sqrt\pi$, and [F5] gives $h'(r)=2\alpha e^{-\alpha^2r^2}/\sqrt\pi$ for $h(r)=\operatorname{erf}(\alpha r)$. Differentiating again gives $h''(r)=-4\alpha^3r e^{-\alpha^2r^2}/\sqrt\pi$. Since $|e^{-s^2}-1|=\int_0^{s^2}e^{-v}dv\le s^2$, the integral definition yields $h(r)=2\alpha r/\sqrt\pi+O(r^3)$, and the derivative formula yields $h'(r)=2\alpha/\sqrt\pi+O(r^2)$. Thus $h(r)/r\to2\alpha/\sqrt\pi$ and $(h'(r)r-h(r))/r^2=O(r)$ as $r\downarrow0$. For $r>0$, the radial Laplacian formula $\Delta f(|x|)=(rf(r))''/r$ follows by differentiating $\partial_{x_j}f=f'(r)x_j/r$ and summing $j=1,2,3$. Applying it to $f=\phi_\ell=h/r$ gives $-\Delta\phi_\ell=4\alpha^3e^{-\alpha^2r^2}/\sqrt\pi=4\pi g_\alpha$ away from the origin. [given, F2, F5, algebra]

2.1 Let $F_\varepsilon=\varphi\nabla\phi_\ell-\phi_\ell\nabla\varphi$ on the punctured ball $B_R\setminus\overline B_\varepsilon$, where $R$ is outside the support of $\varphi$. The product rule gives $\operatorname{div}F_\varepsilon=\varphi\Delta\phi_\ell-\phi_\ell\Delta\varphi$. By [F1] its integral is the boundary flux. The outer flux is zero; at the inner sphere both $\phi_\ell$ and $\nabla\phi_\ell$ are bounded, and its area is $\int_0^{2\pi}\int_0^\pi\varepsilon^2\sin\theta\,d\theta d\phi=4\pi\varepsilon^2$, so the flux tends to zero. Taking $\varepsilon\downarrow0$ proves $\int\phi_\ell(-\Delta\varphi)=\int\varphi(-\Delta\phi_\ell)=4\pi\int\varphi g_\alpha$, using step 1.1. By [F3], [F4], and [F6], applied coordinatewise and with $y=\alpha x$, $\int_{\mathbb R^3}g_\alpha=1$. [step 1.1, A1, F1, F3, F4, F6]

2.2 Step 1.1 gives $\operatorname{erf}(\alpha r)=2\alpha r/\sqrt\pi+O(r^3)$, so $\operatorname{erfc}(\alpha r)/r=1/r-2\alpha/\sqrt\pi+O(r^2)$. By [F3] and evenness, $\operatorname{erfc}(s)=(2/\sqrt\pi)\int_s^\infty e^{-t^2}dt\ge0$. For $s>0$, $\int_s^\infty e^{-t^2}dt\le s^{-1}\int_s^\infty t e^{-t^2}dt=e^{-s^2}/(2s)$; multiplying by $2/\sqrt\pi$ gives $\operatorname{erfc}(s)\le e^{-s^2}/(\sqrt\pi s)$. This proves the bound for $\phi_s$. [step 1.1, F3, algebra]

3.1 On the punctured ball $\Delta(1/r)=0$. Put $G_\varepsilon=\varphi\nabla(1/r)-(1/r)\nabla\varphi$. The product rule gives $\operatorname{div}G_\varepsilon=-(1/r)\Delta\varphi$, so [F1] makes the integral of $(1/r)(-\Delta\varphi)$ equal to its boundary flux. The outer flux is zero. The inner outward normal is $-x/r$, hence $\partial_n(1/r)=\varepsilon^{-2}$; the flux is $\int_{|x|=\varepsilon}(\varphi\varepsilon^{-2}-(1/\varepsilon)\partial_n\varphi)\,dS$. Since $dS=\varepsilon^2\sin\theta\,d\theta d\phi$, its first term tends to $4\pi\varphi(0)$ and the second is bounded by $4\pi\varepsilon\sup|\nabla\varphi|$, hence tends to zero. Therefore $-\Delta(1/r)=4\pi\delta_0$ distributionally. Subtracting step 2.1 proves $-\Delta\phi_s=4\pi\delta_0-4\pi g_\alpha$. [A1, F1, step 2.1, algebra]

4.1 Differentiating $\phi_s$ for $r>0$ gives $\phi_s'(r)=-2\alpha e^{-\alpha^2r^2}/(\sqrt\pi r)-\operatorname{erfc}(\alpha r)/r^2$. Apply step 2.2 with $s=\alpha r$ to its second term to obtain the displayed derivative bound. [step 2.2, algebra] ∎

## Remarks

- The distributional delta is in the unscreened Coulomb part. The smooth Gaussian term has no delta mass.
- The self expansion is the source of the Ewald energy correction $-\alpha\sum_iq_i^2/\sqrt\pi$ after the potential is multiplied by $q_i/2$.
