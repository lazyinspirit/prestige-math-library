---
id: thm-poisson-nontangential-maximal-bound
kind: theorem
title: "Poisson nontangential maximal function is controlled by circle maximal averages"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-countable-choice, def-circle-maximal-function-and-nontangential-region, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, def-the-one-dimensional-torus-and-normalized-haar-integral, lem-poisson-kernel-properties-on-the-disc, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, thm-total-variation-is-a-measure, thm-sine-cosine-signs-monotonicity-and-ranges, cor-sine-and-cosine-are-one-lipschitz]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "The Fatou Theorem, printed pp. 130-133 (PDF pp. 135-138): the geometry 6.29-6.30 of approach regions and the comparison R[u] <= M[mu] proved for Theorem 6.31 by step-function approximation of the Poisson kernel."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "§§1.2.1-3, printed pp. 35-37: the pointwise domination of the nontangential maximal function by boundary maximal averages."
---

## Statement

Assume [[def-countable-choice|countable choice]]. For every finite regular
complex Borel measure $\mu$ on $\mathbb T$, every $A>1$ and every
$\zeta\in\mathbb T$,
$$N_A\bigl(P[\mu]\bigr)(\zeta)\le(A+1)^2\,M_{\mathbb T}\mu(\zeta).$$
In particular $N_A(P[f])(\zeta)\le(A+1)^2M_{\mathbb T}f(\zeta)$ for every
$f\in L^1(\mathbb T,m)$, where
$P[f]=P[fm]$ and $M_{\mathbb T}f=M_{\mathbb T}(fm)$.

## Facts & Assumptions

**Given:** Countable choice, a finite regular complex Borel measure $\mu$ on $\mathbb T$, a real $A>1$, and a point $\zeta\in\mathbb T$.

[L1] The sets $\Gamma_A(\zeta)=\{z\in\mathbb D:|z-\zeta|<A(1-|z|)\}$ and $N_Av(\zeta)=\sup_{z\in\Gamma_A(\zeta)}|v(z)|$ are the nontangential regions and maximal functions, and $M_{\mathbb T}\mu(\zeta)=\sup_{0<h\le1/2}|\mu|(I_h(\zeta))/m(I_h(\zeta))$ takes values in $[0,+\infty]$; moreover $M_{\mathbb T}f=M_{\mathbb T}(fm)$ and $P[f]=P[fm]$ ([[def-circle-maximal-function-and-nontangential-region]], [[def-poisson-integral-of-finite-boundary-measure]]).

[L2] For $z\in\mathbb D$ and $\eta\in\mathbb T$ the kernel is $P(z,\eta)=(1-|z|^2)/|\eta-z|^2>0$; for $z=r\zeta$ and $\eta=\zeta e^{2\pi i\varepsilon}$ with $|\varepsilon|\le\tfrac12$ one has $|\eta-r\zeta|=|e^{2\pi i\varepsilon}-r|$, so $|\eta-r\zeta|^2=1-2r\cos(2\pi\varepsilon)+r^2$ ([[def-poisson-kernel-on-the-disc]]).

[L3] Cosine is strictly decreasing on $[0,\pi]$, and sine and cosine are continuous (indeed $1$-Lipschitz) ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-sine-and-cosine-are-one-lipschitz]]).

[L4] For every $f\in L^1(\mu)$ the bound $|\int f\,d\mu|\le\int|f|\,d|\mu|$ holds, where $|\mu|$ is a measure with $|\mu|(E)\le|\mu|(\mathbb T)<+\infty$ ([[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]], [[thm-total-variation-is-a-measure]]).

[L5] The normalized Haar measure $m$ is a probability measure with $m(I_h(\zeta))=2h$ for $0<h\le\tfrac12$, and $\int_{\mathbb T}P(z,\eta)\,dm(\eta)=1$ for every $z\in\mathbb D$; equality in the second display of [L1] holds for every arc radius ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-poisson-integral-of-finite-boundary-measure]]).

## Proof

**Proof technique:** direct.

1.1 Let $z\in\Gamma_A(\zeta)$, $r=|z|$, and $\eta\in\mathbb T$. Put $u:=\operatorname{Re}(\overline\zeta z)\le r$. Since $|r\zeta-z|^2=2r^2-2ru$ and $|\zeta-z|^2=1+r^2-2u$, the identity $2r^2-2ru\le 1+r^2-2u$ is equivalent to $(1-r)(1+r-2u)\ge0$, which holds because $1-r>0$ and $2u\le2r\le1+r$; hence $|r\zeta-z|\le|\zeta-z|$. Therefore $$|r\zeta-\eta|\le|r\zeta-z|+|z-\eta|\le|\zeta-z|+|z-\eta|\le A(1-r)+|z-\eta|\le(A+1)|z-\eta|,$$ where the cone condition gives $|\zeta-z|<A(1-r)$ and the reverse triangle inequality gives $|z-\eta|\ge1-|z|=1-r$. The case $z=0$ is included: then $r=0$, $u=0$ and $|r\zeta-\eta|=1\le A+1=(A+1)|z-\eta|$. [given, L1, L2, algebra]

1.2 Fix $z=r\zeta$ with $0<r<1$ and put $g(\delta):=(1-r^2)/(1-2r\cos(2\pi\delta)+r^2)$ for $\delta\in[0,\tfrac12]$. By [L2], $P(z,\eta)=g(d(\zeta,\eta))$ for every $\eta\in\mathbb T$, and by [L3] the function $g$ is continuous and strictly decreasing on $[0,\tfrac12]$. Given $\varepsilon>0$, choose $0=\delta_0<\delta_1<\cdots<\delta_m=\tfrac12$ with $g(\delta_{j-1})-g(\delta_j)\le\varepsilon$ for all $j$ (continuity on a compact interval); put $c_0:=g(\tfrac12)$ and $c_j:=g(\delta_{j-1})-g(\delta_j)\ge0$. Then for every $\delta\in[0,\tfrac12]$ one has $$g(\delta)\le\phi(\delta):=c_0+\sum_{j=1}^m c_j\mathbf 1_{[0,\delta_j)}(\delta)\le g(\delta)+\varepsilon,$$ because on $[\delta_{k-1},\delta_k)$ the function $\phi$ equals $g(\delta_{k-1})$ while $g(\delta_k)\le g(\delta)\le g(\delta_{k-1})$ and $g(\delta_{k-1})-g(\delta_k)=c_k\le\varepsilon$; on the single point $\delta=\tfrac12$ both sides equal $g(\tfrac12)$. Consequently $P(z,\eta)\le c_0+\sum_j c_j\mathbf 1_{\{d(\zeta,\eta)<\delta_j\}}(\eta)$ for every $\eta$, while integrating the two-sided bound against $m$ and using $m(\mathbb T)=1$ together with $\int_{\mathbb T}g(d(\zeta,\eta))\,dm(\eta)=\int_{\mathbb T}P(z,\eta)\,dm(\eta)=1$ gives $$c_0+\sum_{j=1}^m c_j\,m\bigl(\{d(\zeta,\cdot)<\delta_j\}\bigr)\le1+\varepsilon.$$ [given, L2, L3, L5, choose, algebra]

1.3 By definition of $M_{\mathbb T}\mu$ as a supremum over $h\in(0,\tfrac12]$, every arc satisfies $|\mu|(I_h(\zeta))\le M_{\mathbb T}\mu(\zeta)\,m(I_h(\zeta))=2h\,M_{\mathbb T}\mu(\zeta)$; in particular $|\mu|(\mathbb T)=|\mu|(I_{1/2}(\zeta))\le M_{\mathbb T}\mu(\zeta)$. Moreover each set $\{d(\zeta,\cdot)<\delta\}$ with $\delta\in(0,\tfrac12]$ satisfies $m(\{d<\delta\})=2\delta$ and $|\mu|(\{d<\delta\})\le M_{\mathbb T}\mu(\zeta)\,m(\{d<\delta\})$: for $\delta<\tfrac12$ the set is the arc $I_\delta(\zeta)$, and for $\delta=\tfrac12$ it is $\mathbb T$ minus the antipode, whose $m$-measure is $1$ and whose $|\mu|$-measure is at most $|\mu|(\mathbb T)\le M_{\mathbb T}\mu(\zeta)$. [given, L1, L4, L5, algebra]

2.1 Put $M:=M_{\mathbb T}\mu(\zeta)$. If $M=+\infty$, the desired bound is automatic. Assume $M<+\infty$. For $0<r<1$ the pointwise bound of step 1.2 and the estimates of step 1.3 give $$|P[\mu](r\zeta)|\le\int_{\mathbb T}P(r\zeta,\eta)\,d|\mu|(\eta)\le c_0\,|\mu|(\mathbb T)+\sum_{j=1}^m c_j\,|\mu|\bigl(\{d(\zeta,\cdot)<\delta_j\}\bigr)\le M\Bigl(c_0+\sum_{j=1}^m c_j\,m\bigl(\{d(\zeta,\cdot)<\delta_j\}\bigr)\Bigr)\le(1+\varepsilon)M,$$ where [L4] supplies the first inequality. Since $\varepsilon>0$ was arbitrary, $\int_{\mathbb T}P(r\zeta,\eta)\,d|\mu|(\eta)\le M$ and hence $|P[\mu](r\zeta)|\le M$. For $r=0$, $P(0,\eta)=1$ and step 1.3 give $\int_{\mathbb T}P(0,\eta)\,d|\mu|(\eta)=|\mu|(\mathbb T)\le M$, while [L4] gives $|P[\mu](0)|=|\mu(\mathbb T)|\le|\mu|(\mathbb T)$. [step 1.2, step 1.3, L1, L4, algebra]

2.2 For $z\in\Gamma_A(\zeta)$ with $|z|=r$ and every $\eta\in\mathbb T$, step 1.1 gives $|\eta-r\zeta|\le(A+1)|\eta-z|$, hence $$P(z,\eta)=\frac{1-r^2}{|\eta-z|^2}\le(A+1)^2\,\frac{1-r^2}{|\eta-r\zeta|^2}=(A+1)^2P(r\zeta,\eta).$$ [step 1.1, L2, algebra]

3.1 Combining steps 2.1 and 2.2, for every $z\in\Gamma_A(\zeta)$ with $|z|=r$, $$|P[\mu](z)|\le\int_{\mathbb T}P(z,\eta)\,d|\mu|(\eta)\le(A+1)^2\int_{\mathbb T}P(r\zeta,\eta)\,d|\mu|(\eta)\le(A+1)^2M_{\mathbb T}\mu(\zeta),$$ the first inequality by [L4]. Taking the supremum over $z\in\Gamma_A(\zeta)$ gives $N_A(P[\mu])(\zeta)\le(A+1)^2M_{\mathbb T}\mu(\zeta)$. For $f\in L^1(\mathbb T,m)$ the identities $P[f]=P[fm]$ and $M_{\mathbb T}f=M_{\mathbb T}(fm)$ of [L1] give $N_A(P[f])(\zeta)\le(A+1)^2M_{\mathbb T}f(\zeta)$, completing the proof. [step 2.1, step 2.2, L1, L4, algebra] ∎
