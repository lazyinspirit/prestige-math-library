---
id: ex-mollification-of-the-absolute-value
kind: example
title: Mollifying the absolute-value corner
status: draft
origin: pipeline
deps: [thm-local-smooth-approximation-in-wkp, lem-mollification-commutes-with-weak-derivatives-in-the-interior, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, lem-classical-derivatives-are-weak-derivatives, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Lemma 1.14 and Lemma 1.18
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.3–§1.4, printed pp. 10–16
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Proposition 3.7
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.4, Proposition 3.7, printed pp. 57–58
---

## Example

Assume Countable Choice. Let $u(x)=|x|$ on $\mathbb R$, let
$\rho\in C_c^\infty(\mathbb R)$ be nonnegative, even and of unit mass, and put
$u_\varepsilon=\rho_\varepsilon*u$ for
$\rho_\varepsilon(x)=\varepsilon^{-1}\rho(x/\varepsilon)$. Then:

1. $u\in W^{1,\infty}_{\mathrm{loc}}(\mathbb R)$, and its restriction to every bounded open interval belongs to $W^{1,\infty}$, with weak derivative
   $u'=\operatorname{sgn}$, where
   $\operatorname{sgn}(x)=1_{(0,\infty)}(x)-1_{(-\infty,0)}(x)$.
2. Each $u_\varepsilon$ is smooth on $\mathbb R$ and
   $u_\varepsilon'=\rho_\varepsilon*\operatorname{sgn}$.
3. $u_\varepsilon\to u$ in $W^{1,p}(I)$ for every bounded open interval $I$ and
   every $1\le p<\infty$.
4. $u_\varepsilon\not\to u$ in $W^{1,\infty}(I)$ for every bounded open interval $I$
   containing $0$ in its interior: the derivative error satisfies
   $\|u_\varepsilon'-u'\|_{L^\infty(I)}\ge1/2$ for every $\varepsilon>0$.

The example separates the finite exponents from the endpoint: local
approximation converges in every finite $W^{1,p}$ while the corner costs a
uniform derivative error of size at least one half.

## Facts & Assumptions

**Given:** Countable Choice; the locally integrable function $u(x)=|x|$ on $\mathbb R$; a nonnegative even unit-mass $\rho\in C_c^\infty(\mathbb R)$; the mollifications $u_\varepsilon=\rho_\varepsilon*u$; a bounded open interval $I$; and $1\le p<\infty$.

[F1] Under Countable Choice, complex $C^1$ functions on $[a,b]$ satisfy $\int_a^b f\varphi^{\prime}=f(b)\varphi(b)-f(a)\varphi(a)-\int_a^b f^{\prime}\varphi$ ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F2] A locally integrable function has weak derivative $g$ when $\int v\varphi'= -\int g\varphi$ for every smooth compactly supported test function ([[def-weak-derivative-of-a-locally-integrable-function]]). Classical derivatives of smooth functions are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F3] Mollifier family: $\rho_\varepsilon(x)=\varepsilon^{-1}\rho(x/\varepsilon)$ for a unit-mass $\rho\in C_c^\infty(\mathbb R)$, and the family has unit mass at every scale; a compactly supported $\rho$ is supported in some $\overline B_R(0)$ ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]).

[F4] Interior commutation: for $w\in W^{k,p}(J)$ on an open interval $J$ and a unit-mass mollifier supported in $[-1,1]$, the mollification is smooth where the distance to $\mathbb R\setminus J$ exceeds its scale, and $D^\alpha(\rho_\varepsilon*w)=\rho_\varepsilon*(D^\alpha w)$ there for $|\alpha|\le k$ ([[lem-mollification-commutes-with-weak-derivatives-in-the-interior]]).

[F5] Local approximation: the interior mollifications converge, $u_\varepsilon\to u$ in $W^{k,p}(U)$ for every open $U$ with $\overline U$ compact inside the domain, for $1\le p<\infty$ ([[thm-local-smooth-approximation-in-wkp]]).

[F6] For any smooth $g$ on $(-1,1)$, $\|g^{\prime}-\operatorname{sgn}\|_{L^\infty(-1,1)}\ge1/2$. Indeed, a smaller essential bound would give $g^{\prime}>1/2$ almost everywhere on $(0,1)$ and $g^{\prime}<-1/2$ almost everywhere on $(-1,0)$. Continuity gives the respective weak inequalities everywhere on those intervals, hence $g^{\prime}(0)\ge1/2$ and $g^{\prime}(0)\le-1/2$, a contradiction. Classical derivatives are weak derivatives, so this also excludes convergence of smooth approximants in $W^{1,\infty}$ ([[lem-classical-derivatives-are-weak-derivatives]], [[def-sobolev-space-wkp-and-its-norm]]).

[F7] Norm convention: $\|w\|_{W^{1,p}(I)}=(\|w\|_{L^p(I)}^p+\|w'\|_{L^p(I)}^p)^{1/p}$ for $1\le p<\infty$ and $\|w\|_{W^{1,\infty}(I)}=\max\{\|w\|_{L^\infty(I)},\|w'\|_{L^\infty(I)}\}$ ([[def-sobolev-space-wkp-and-its-norm]]).

**Choice use.** Countable Choice is assumed through the Sobolev, weak-derivative, integration-by-parts and mollification interfaces. The integration by parts, kernel rescaling and interval enlargements below are explicit.

## Verification

**Proof technique:** direct.

1.1 For every $\varphi\in C_c^\infty(\mathbb R)$, integration by parts on the two half-lines gives $$\int_{\mathbb R}|x|\varphi'(x)\,dx=\int_{-\infty}^0(-x)\varphi'(x)\,dx+\int_0^\infty x\varphi'(x)\,dx=\int_{-\infty}^0\varphi(x)\,dx-\int_0^\infty\varphi(x)\,dx=-\int_{\mathbb R}\operatorname{sgn}(x)\varphi(x)\,dx.$$ The boundary terms vanish at infinity by compact support and at $0$ because $|0|=0$. Thus $u'=\operatorname{sgn}$ weakly; both $u$ and $u'$ are bounded on every bounded open interval $J$, so $u|_J\in W^{1,\infty}(J)$ and $u\in W^{1,\infty}_{\mathrm{loc}}(\mathbb R)$. Globally $u\notin L^\infty(\mathbb R)$. [F1, F2, F7, given]

2.1 Fix $R>0$ with $\operatorname{supp}\rho\subseteq[-R,R]$ and set $\widetilde\rho(x)=R\rho(Rx)$. This is a nonnegative even unit-mass kernel supported in $[-1,1]$, with $\widetilde\rho_{R\varepsilon}=\rho_\varepsilon$. For any fixed $\varepsilon>0$ and bounded open interval $I$, enlarge $I$ to a bounded open interval $J$ with $\operatorname{dist}(\overline I,\mathbb R\setminus J)>R\varepsilon$. Apply [F4] to $u|_J\in W^{1,\infty}(J)$ and $\widetilde\rho$ at scale $R\varepsilon$: on $I$ its convolution agrees with the globally defined $u_\varepsilon$, since the kernel only samples $J$. Thus $u_\varepsilon$ is smooth on $I$ and $u_\varepsilon'=\rho_\varepsilon*\operatorname{sgn}$ there. Since $I$ was arbitrary, both assertions hold on $\mathbb R$. [F3, F4, step 1.1]

3.1 For finite $p$, fix a bounded open interval $J$ with $\overline I\subset J$. Step 1.1 gives $u|_J\in W^{1,p}(J)$, since $J$ has finite length. Apply [F5] to this restriction and the unit-support kernel $\widetilde\rho$ at scale $R\varepsilon$. For all sufficiently small $\varepsilon$, the interior mollification agrees with $u_\varepsilon$ on $I$, so $\|u_\varepsilon-u\|_{W^{1,p}(I)}\to0$. [F3, F5, F7, step 1.1, step 2.1, given]

3.2 Evenness at the corner: because $\rho$ is even, so is $\rho_\varepsilon$, and the change of variable $y\mapsto-y$ gives $$u_\varepsilon'(0)=\int_{\mathbb R}\rho_\varepsilon(-y)\operatorname{sgn}(y)\,dy=\int_{\mathbb R}\rho_\varepsilon(y)\operatorname{sgn}(y)\,dy=0,$$ the last integral vanishing because $y\mapsto\rho_\varepsilon(y)\operatorname{sgn}(y)$ is odd and integrable. [F3, step 2.1]

4.1 The derivative $u_\varepsilon'$ is continuous on $\mathbb R$ with $u_\varepsilon'(0)=0$ by step 3.2, so there is $\delta>0$ with $|u_\varepsilon'(x)|<1/2$ for $|x|<\delta$; on $(0,\delta)$ one therefore has $\operatorname{sgn}=1$ and $|u_\varepsilon'(x)-\operatorname{sgn}(x)|=1-u_\varepsilon'(x)>1/2$. If the interval $I$ contains $0$ in its interior, then either $(0,\delta)\cap I$ or $(-\delta,0)\cap I$ has positive length, so the essential supremum defining $\|u_\varepsilon'-\operatorname{sgn}\|_{L^\infty(I)}$ is at least $1/2$; by the norm convention of [F7], $\|u_\varepsilon-u\|_{W^{1,\infty}(I)}\ge\|u_\varepsilon'-\operatorname{sgn}\|_{L^\infty(I)}\ge1/2$ for every $\varepsilon>0$, and $u_\varepsilon\not\to u$ in $W^{1,\infty}(I)$. [F7, step 1.1, step 2.1, step 3.2]

5.1 Thus the mollifications of $|x|$ converge in $W^{1,p}(I)$ for every finite $p$ but never in $W^{1,\infty}(I)$ across the corner; the failure is not an artefact of this sequence, by the continuity argument of [F6] for arbitrary smooth approximants. [F6, step 3.1, step 4.1] ∎
