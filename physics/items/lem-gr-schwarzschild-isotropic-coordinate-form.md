---
id: lem-gr-schwarzschild-isotropic-coordinate-form
kind: lemma
title: "The isotropic coordinate form of the Schwarzschild exterior metric and the isothermal radius shift"
status: published
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-christoffel-symbols, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-c-r-and-smooth-maps-between-smooth-manifolds, def-derivative, thm-chain-rule, thm-algebra-of-derivatives, thm-real-power-continuity-and-derivatives, thm-real-power-agrees-with-rational-exponent, def-rational-power, def-interval, cor-intermediate-value-theorem-topological, thm-connected-subsets-of-r-are-intervals, def-countable-choice, cor-mean-value-theorem]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-christoffel-symbols: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-real-power-agrees-with-rational-exponent: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
  cor-intermediate-value-theorem-topological: mathematical-premise
  thm-connected-subsets-of-r-are-intervals: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
sources:
  references:
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3.3 (2.60): the Schwarzschild metric in isotropic coordinates ds^2 = -[(1-M/2rho)/(1+M/2rho)]^2 dt^2 + (1+M/2rho)^4 (drho^2 + rho^2 dOmega^2) and the statement that the t = const hypersurfaces are conformally flat, printed p. 25"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7: the Schwarzschild metric in the coordinates (7.29) and the reduction of the spatial part to conformally flat form by the redefinition r = rho(1+GM/2rho)^2, printed pp. 169-172 (PDF pp. 176-179)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1: the Schwarzschild metric (6.1) valid for r > 2GM, printed pp. 232-233 (PDF pp. 239-240); section 5.1.1: the warning that coefficients of the Newtonian limit must be compared in one and the same coordinate system, printed p. 210 (PDF p. 217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be the Schwarzschild exterior datum with Schwarzschild radius
$s>0$ and $f(r)=1-s/r$
([[def-gr-schwarzschild-exterior-model]]). Define

$$R:(s/4,\infty)\to(s,\infty),\qquad R(\rho):=\rho\Bigl(1+\frac{s}{4\rho}\Bigr)^{2},$$

and define the **isotropic radius** of a point $p\in M$ by
$\rho(p):=\rho_0(r(p))$, where $\rho_0:(s,\infty)\to(s/4,\infty)$ is the
inverse of $R$. Write $a:=s/(4\rho)$. Then:

**(a) The coordinate change.** $R$ is a smooth bijection with smooth inverse
and $R'(\rho)=1-\frac{s^2}{16\rho^2}>0$; its inverse is the smooth function

$$\rho_0(r)=\frac{(r-\tfrac{s}{2})+\sqrt{r(r-s)}}{2},$$

and the identity $R(\rho)=\rho+\frac{s}{2}+\frac{s^2}{16\rho}$ holds on
$(s/4,\infty)$.

**(b) The metric in isotropic coordinates.** In the chart
$(x^0,\rho,\vartheta,\varphi)$ obtained by replacing the coordinate $r$ by
$\rho(p)$ (so that $r=R(\rho)$ in the chart), the metric of the datum has the
components

$$g=-\Bigl(\frac{1-a}{1+a}\Bigr)^2 d(x^0)^2+(1+a)^4\bigl(d\rho^2+\rho^2(d\vartheta^2+\sin^2\vartheta\,d\varphi^2)\bigr),$$

that is, $g_{00}=-(1-a)^2/(1+a)^2$, $g_{\rho\rho}=(1+a)^4$,
$g_{\vartheta\vartheta}=(1+a)^4\rho^2$,
$g_{\varphi\varphi}=(1+a)^4\rho^2\sin^2\vartheta$ and all other components
zero.

**(c) Conformal flatness and the large-radius expansion.** On the region
where $(\rho,\vartheta,\varphi)$ are the standard spherical coordinates of
$\mathbb R^3\setminus\{0\}$, the spatial part of $g$ is the conformally flat
metric $(1+a)^4\,\delta$, with $\delta=d\rho^2+\rho^2(d\vartheta^2+\sin^2\vartheta\,d\varphi^2)$
in Cartesian coordinates $y=\rho\,\hat\omega$,
$\lvert y\rvert=\rho$. Moreover, for every lower bound $\rho_*>s/4$ there is
a constant $C(\rho_*)$ with

$$\Bigl|\bigl(1+\frac{s}{4\rho}\bigr)^4-1-\frac{s}{\rho}\Bigr|\le\frac{C(\rho_*)s^2}{\rho^2}\qquad\text{for }\rho\ge\rho_*,$$

and $\rho_0(r)=r-\frac{s}{2}-\frac{s^2}{16r}+O(s^3/r^2)$ as $r/s\to\infty$
with fixed $s>0$; in particular $\rho$ is
not equal to the areal radius $r$.

**(d) The comparison warning.** The areal-radius coefficient
$f(r)^{-1}=(1-s/r)^{-1}=1+s/r+O(r^{-2})$ and the isotropic coefficient
$(1+s/(4\rho))^4=1+s/\rho+O(\rho^{-2})$ agree at leading order but differ at
next order when one substitutes $\rho=r$; consequently any comparison of the
Schwarzschild coefficients with weak-field coefficients stated in another
chart must first convert to a single chart by the explicit map $R$ and must
carry the resulting error terms. Matching coefficient functions in two
different radial coordinates without the conversion is not a valid
identification.

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum with $s>0$, the functions $R$ and $a$ of the statement, and a spherical-polar product chart of the datum.

[L1] The function $f(r)=1-s/r$ is smooth and positive on $(s,\infty)$, and in a spherical-polar product chart the metric components are $g_{00}=-f$, $g_{11}=f^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$ ([[def-gr-schwarzschild-exterior-model]], [[lem-gr-schwarzschild-metric-properties]]).

[L2] The function $x\mapsto x^{1/2}$ agrees with the positive square root on $[0,\infty)$ and is smooth with derivative $\tfrac12x^{-1/2}$ on $(0,\infty)$; consequently $\sqrt{r(r-s)}$ is smooth on $(s,\infty)$ because $r(r-s)$ is smooth and strictly positive there. For $h(t):=(1-t)^{1/2}$ on $[0,1/2]$, $h(0)=1$, $h'(0)=-1/2$, $h''(0)=-1/4$, and $|h'''(t)|=\frac38(1-t)^{-5/2}\le\frac38 2^{5/2}$. Set $R_3(t):=h(t)-1+t/2+t^2/8$. For fixed $0<t\le1/2$, the function $G(u):=R_3(u)-u^3R_3(t)/t^3$ has $G(0)=G'(0)=G''(0)=G(t)=0$. Three applications of Rolle's theorem, which follows from the mean value theorem, give $\xi\in(0,t)$ with $G'''(\xi)=0$, hence $R_3(t)=h'''(\xi)t^3/6$. Therefore
$$h(t)=1-\frac t2-\frac{t^2}{8}+R_3(t),\qquad |R_3(t)|\le \frac{(3/8)2^{5/2}}{6}t^3\quad(0\le t\le1/2).$$
Sums, compositions and quotients of smooth functions are smooth ([[thm-real-power-agrees-with-rational-exponent]], [[thm-real-power-continuity-and-derivatives]], [[def-rational-power]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[cor-mean-value-theorem]]).

[L3] Derivative rules: $(R)'=1-\frac{s^2}{16\rho^2}$ for the function $R(\rho)=\rho\bigl(1+\frac{s}{4\rho}\bigr)^2$, obtained by expanding $R(\rho)=\rho+\frac{s}{2}+\frac{s^2}{16\rho}$ and differentiating termwise; the derivative is continuous on $(s/4,\infty)$ and strictly positive there because $16\rho^2>s^2$ precisely when $\rho>s/4$ ([[def-derivative]], [[thm-algebra-of-derivatives]], [[def-rational-power]], [[def-interval]]).

[L4] A continuous strictly monotone function on an interval has an inverse on its image, and a continuous function on an interval whose one-sided limits at the endpoints are $s$ and $+\infty$ attains every intermediate value; the intervals $(s/4,\infty)$ and $(s,\infty)$ are connected ([[cor-intermediate-value-theorem-topological]], [[thm-connected-subsets-of-r-are-intervals]], [[def-interval]]).

[L5] For a map that is a diffeomorphism onto its image, the components of a tensor field pull back by the chain rule; in particular replacing the coordinate $r$ by $\rho$ with $r=R(\rho)$ multiplies $dr$ by $R'(\rho)$ ([[thm-chain-rule]], [[def-gr-smooth-covariant-two-tensor-field]]).

## Proof

**Proof technique:** verify the explicit inverse and positivity of $R'$, substitute $r=R(\rho)$ in the metric components, and expand the resulting coefficients.

1.1 (The coordinate change and its inverse.) Expanding $R(\rho)=\rho\bigl(1+\frac{s}{4\rho}\bigr)^2=\rho+\frac{s}{2}+\frac{s^2}{16\rho}$ gives the algebraic identity of clause (a), and differentiating termwise gives $R'(\rho)=1-\frac{s^2}{16\rho^2}=(16\rho^2-s^2)/(16\rho^2)>0$ for $\rho>s/4$ by [L3]. Hence $R$ is strictly increasing and continuous on the interval $(s/4,\infty)$ and $R(\rho)\to s$ as $\rho\downarrow s/4$, while $R(\rho)\to+\infty$ as $\rho\to\infty$; by [L4] the image of $R$ is the whole interval $(s,\infty)$ and $R$ is a bijection onto it. For the displayed inverse, substitution gives $2\rho_0(r)-r+\tfrac{s}{2}=\sqrt{r(r-s)}$, so $\rho_0(r)$ satisfies the quadratic identity $\rho_0(r)^2-\rho_0(r)(r-\tfrac{s}{2})+\tfrac{s^2}{16}=0$; dividing this identity by $\rho_0(r)>0$ gives $\rho_0(r)+\frac{s^2}{16\rho_0(r)}=r-\tfrac{s}{2}$, hence $R(\rho_0(r))=\rho_0(r)+\tfrac{s}{2}+\frac{s^2}{16\rho_0(r)}=r$. Thus $\rho_0$ is a left inverse of $R$, hence the inverse of the bijection $R$; it is smooth on $(s,\infty)$ by [L2], and $\rho_0(r)>s/4$ because $2\rho_0(r)=r-\tfrac{s}{2}+\sqrt{r(r-s)}>\tfrac{s}{2}$ for $r>s$. [L2, L3, L4, algebra]

1.2 (Metric coefficients in the new chart.) In the chart with coordinates $(x^0,\rho,\vartheta,\varphi)$, where $r=R(\rho)$, the components of $g$ are determined by the transformation $r\mapsto\rho$: the coefficient of $d\rho^2$ is $g_{11}(R'(\rho))^2$ and the angular coefficient $\rho^2$ acquires the factor $(R/\rho)^2$ in addition to $g_{22}$ and $g_{33}$, because $r^2=R(\rho)^2=\rho^2\bigl(1+\frac{s}{4\rho}\bigr)^4$; the time component $g_{00}$ is unchanged since $x^0$ is not transformed. Writing $a=s/(4\rho)$, i.e. $R=\rho(1+a)^2$ and $R'=1-a^2$ by [L3], we obtain $1-f(R)=s/R=4a/(1+a)^2$, hence $f(R)=1-\frac{4a}{(1+a)^2}=\frac{(1-a)^2}{(1+a)^2},\qquad \frac{R'^2}{f(R)}=\frac{(1-a^2)^2(1+a)^2}{(1-a)^2}=(1+a)^4 .$ Thus $g_{00}=-(1-a)^2/(1+a)^2$, $g_{\rho\rho}=(1+a)^4$ and the angular components are $R^2\gamma_{ij}=(1+a)^4\rho^2\gamma_{ij}$ with $\gamma_{22}=1$, $\gamma_{33}=\sin^2\vartheta$. All off-diagonal components remain zero. This is clause (b). [L1, L3, L5, algebra]

2.1 (Conformal flatness and the expansion.) Setting $\Phi:=(1+a)^4$, the spatial metric is $\Phi\,\delta$, whose Cartesian components are $\Phi\,\delta_{ij}$; in $(\rho,\vartheta,\varphi)$ it is conformal to $\delta=d\rho^2+\rho^2(d\vartheta^2+\sin^2\vartheta\,d\varphi^2)$ in spherical coordinates on $\mathbb R^3$; this is the conformally flat form of clause (c). By the binomial identity,
$\bigl(1+\frac{s}{4\rho}\bigr)^4=1+\frac{s}{\rho}+\frac{3s^2}{8\rho^2}+\frac{s^3}{16\rho^3}+\frac{s^4}{256\rho^4},$
so the stated inequality holds with $C(\rho_*)=\frac38+\frac{s}{16\rho_*}+\frac{s^2}{256\rho_*^2}$. For $r\ge2s$ set $t=s/r\in[0,1/2]$. The explicit inverse in clause (a) and the estimate in [L2] give
$\rho_0(r)=\frac{r-s/2+r h(t)}2=r-\frac{s}{2}-\frac{s^2}{16r}+\frac r2R_3(t).$
The displayed bound on $R_3$ implies $|rR_3(t)/2|\le C s^3/r^2$ for a constant $C$ independent of $r$; this proves the expansion in clause (c) as $r/s\to\infty$ with fixed $s$. [L2, step 1.1, algebra]

3.1 (The comparison warning.) The areal coefficient is $f(r)^{-1}=(1-s/r)^{-1}=1+\frac{s}{r}+\frac{(s/r)^2}{1-s/r}$, an exact identity whose last term is $O(r^{-2})$, while the isotropic coefficient has the exact expansion $\Phi=1+\frac{s}{\rho}+O(\rho^{-2})$ of step 2.1; the two expressions are both $1+s/(\text{radius})$ at leading order but involve different radial coordinates related by $\rho=r-\tfrac{s}{2}+O(1/r)$. Substituting $\rho=r$ in the first-order terms would replace $s/r$ by $s/\rho=s/(r-\tfrac{s}{2}+\dots)=s/r+O(r^{-2})$, so the mismatch appears at relative order $(s/r)^2$; the comparison of coefficients must therefore be performed after the conversion $r=R(\rho)$ (or $\rho=\rho_0(r)$) with the error terms retained. This is clause (d); no statement is made here about the numerical size of $s$ or about any observed system. [step 2.1, L1, algebra] ∎

## Remarks

- **What the lemma is for.** The isotropic form is the coordinate system in
  which the spatial part of the Schwarzschild metric is conformally flat and
  decays to the Euclidean metric as $\rho\to\infty$; it is used to compare
  with weak-field ansätze whose spatial part is written as a conformal factor
  times the Euclidean metric. The warning of clause (d) is the exact content
  of the source's remark (cited above) that the comparison must be made in
  one and the same coordinate system; the coordinates $r$ and $\rho$ differ
  by the isothermal shift at order $s$.
