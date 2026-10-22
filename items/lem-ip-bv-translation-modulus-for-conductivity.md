---
id: lem-ip-bv-translation-modulus-for-conductivity
kind: lemma
title: BV translation modulus for the extended conductivity
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-countable-choice
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-spatial-bv-and-distributional-tv
  - def-translation-of-a-function-on-rn
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - lem-ip-bv-extension-and-translation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Section 3.1, printed pp. 13–14, equations (3.1)–(3.3): the planar logarithmic stability reduction through a uniform integral modulus."
    - title: "Daniel Faraco and Martí Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 1, Definition 1.1 and Theorem 1.6, printed pp. 1–2: integral translation moduli and their quantitative stability role."
---

## Statement

Assume Countable Choice and let $d=2$ with the conductivity class $X_2(R)$ of the Calderón admissible class. For $\gamma\in X_2(R)$ let $\widetilde{\gamma-1}$ be the zero extension of $\gamma-1$ from $\Omega$ to $\mathbb R^2$ and set $\gamma_e:=1+\widetilde{\gamma-1}$. Define $B:=\max\{1,M,m^{-1}\}$. There is a constant $C_1$ depending only on $\Omega,m,M,R$ such that
$$\|\gamma_e(\cdot+h)-\gamma_e\|_{L^1(\mathbb R^2)}\le C_1|h|\qquad(h\in\mathbb R^2).$$
For every finite $p>2B$ there is $C_p<\infty$, depending only on $\Omega,m,M,R,p$, such that
$$\sup_{\gamma\in X_2(R)}\ \sup_{|h|\le t}\|\gamma_e(\cdot+h)-\gamma_e\|_{L^p(\mathbb R^2)}\le C_p t^{1/p}\qquad(t\ge0).$$
The outer supremum is taken in $[0,\infty]$, with $\sup\varnothing=0$. The extension is an almost-everywhere measurable class; no pointwise continuity is asserted.

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The BV class, bounds and measurable background extension.]]

[[def-ip-spatial-bv-and-distributional-tv|The distributional total-variation convention.]]

[[lem-ip-bv-extension-and-translation|The zero-extension variation bound and full-space translation inequality.]]

[[def-translation-of-a-function-on-rn|Pointwise translation and its sign convention.]]

## Facts & Assumptions

**Given:** Countable Choice; $\gamma\in X_2(R)$; $h\in\mathbb R^2$; and $p>2B$.

[F1] $m\le\gamma\le M$ almost everywhere, $\gamma=1$ almost everywhere on $\Omega\setminus\Omega'$, and $TV(\gamma;\Omega)\le R$. ([[def-ip-calderon-admissible-conductivity-class]], [[def-ip-spatial-bv-and-distributional-tv]])

[F2] If $u\in BV(\Omega)$ on a bounded Lipschitz domain, then its zero extension lies in $BV(\mathbb R^2)$ with $\|\widetilde u\|_1+TV(\widetilde u;\mathbb R^2)\le C_\Omega(\|u\|_1+TV(u;\Omega))$, and $\|v(\cdot+h)-v\|_1\le |h|TV(v;\mathbb R^2)$ for $v\in BV(\mathbb R^2)$. ([[lem-ip-bv-extension-and-translation]])

[F3] Translation is defined pointwise by $\tau_h v(x)=v(x-h)$. Translates of Lebesgue measurable sets are measurable and have the same measure; in particular a translate of a null set is null. ([[def-translation-of-a-function-on-rn]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[A1] Countable Choice is assumed for the BV extension and translation supplier. ([[def-countable-choice]])

## Proof

**Given:** Countable Choice and $\gamma\in X_2(R)$.

1.1 Set $u:=\gamma-1$ on $\Omega$. Since constants have zero distributional derivative, [F1] gives $u\in BV(\Omega)$, $TV(u;\Omega)=TV(\gamma;\Omega)\le R$, and $\|u\|_{L^1(\Omega)}\le |\Omega|(M+1)$. The smooth bounded domain $\Omega$ is Lipschitz, so [F2] applies. [F1, F2, given, algebra]

2.1 By the zero-extension part of [F2], $\widetilde u\in BV(\mathbb R^2)$ and $$TV(\widetilde u;\mathbb R^2)\le C_\Omega\bigl(|\Omega|(M+1)+R\bigr)=:V_0.$$ If two representatives differ only on a null set $N$, their values at $x+h$ differ only on $N-h$, which is null by [F3]. Translated classes are therefore well-defined. Choosing $\gamma_e=1+\widetilde u$ pointwise, constants cancel in the difference; the resulting class identity holds for every choice of representatives. Thus $\|\gamma_e(\cdot+h)-\gamma_e\|_1=\|\widetilde u(\cdot+h)-\widetilde u\|_1\le V_0|h|$. Thus the first inequality holds with $C_1=V_0$. [A1, F2, F3, step 1.1, algebra]

3.1 The bound $m\le\gamma\le M$ inside $\Omega$ and the background value $1$ outside show $|\gamma_e|\le B$ almost everywhere; hence $|\gamma_e(\cdot+h)-\gamma_e|\le2B$ almost everywhere. Applying [F3] and step 2.1 yields $$\|\gamma_e(\cdot+h)-\gamma_e\|_p^p\le(2B)^{p-1}V_0|h|.$$ Taking $p$-th roots and then the supremum over $|h|\le t$ gives the second inequality with $C_p=((2B)^{p-1}V_0)^{1/p}$. The bound is uniform in $\gamma$, so taking the outer supremum proves the claim when $X_2(R)$ is nonempty; when it is empty, the stated convention gives zero. At $t=0$ both sides vanish. [F1, F3, step 2.1, algebra] ∎

