---
id: lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable
kind: lemma
title: "Measurability and lower semicontinuity of the smooth maximal functions"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, def-grand-maximal-test-class-of-order-n, def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, def-tempered-distribution, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, thm-tempered-convolution-is-smooth-with-polynomial-growth, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, lem-schwartz-dilations-preserve-schwartz-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "section 2, printed p. 63 (PDF p. 5): 'Clearly, $\\Omega_r$ is open' for $\\Omega_r=\\{M_Nf>2^r\\}$"
    - title: "David Cruz-Uribe SFO, Li-An Daniel Wang, Variable Hardy Spaces, arXiv:1211.6505 (2012)"
      url: "https://arxiv.org/pdf/1211.6505"
      locator: "section 3, printed p. 7 (PDF p. 8): the maximal operators are defined on $\\mathcal S'$ and used through their distribution functions"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $f\in\mathcal S'(\mathbb R^n)$ and
$\varphi\in\mathcal S(\mathbb R^n)$. Then the function
$(y,t)\mapsto(f*\varphi_t)(y)$ is continuous on
$\mathbb R^n\times(0,\infty)$, where
$\varphi_t(x)=t^{-n}\varphi(x/t)$ and the convolution is the distributional
convolution of
[[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]].
If $\int_{\mathbb R^n}\varphi\ne0$, the radial maximal function $M^0_\varphi f$
and every nontangential maximal function $M^{*,a}_\varphi f$ with $a\ge1$
([[def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution]])
are Borel measurable as $[0,\infty]$-valued functions and may be identically
$+\infty$. For every integer $N\ge1$, the grand maximal function $M_Nf$ of
[[def-grand-maximal-test-class-of-order-n]] is also Borel measurable, may be
identically $+\infty$, and its definition imposes no integral condition on the
tests in $\mathcal F_N$. Moreover, when $\int\varphi\ne0$, $M^0_\varphi f$ and
every $M^{*,a}_\varphi f$ are lower semicontinuous, and every $M_Nf$ is lower
semicontinuous for all $N\ge1$. Thus their strict superlevel sets are open;
in particular $\Omega_r=\{M_Nf>2^r\}$, $r\in\mathbb Z$, used in the level
decomposition are open.

## Facts & Assumptions

**Given:** $n\ge1$, $f\in\mathcal S'$, $\varphi\in\mathcal S$ and an integer $N\ge1$. For the radial and nontangential conclusions, also assume $\int\varphi\ne0$ and an aperture $a\ge1$.

[F1] For every fixed $t>0$ the function $x\mapsto(f*\varphi_t)(x)$ is smooth ([[thm-tempered-convolution-is-smooth-with-polynomial-growth]]); the convolution is $ (f*\varphi_t)(x)=\langle f_y,\varphi_t(x-y)\rangle$ ([[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]]).

[F2] Translations and dilations preserve $\mathcal S$ continuously: $h\mapsto h(\cdot-c)$ is continuous in every seminorm for fixed $c$, and the seminorms of $\varphi_t$ are $p_{\alpha\beta}(\varphi_t)=t^{|\alpha|-|\beta|-n}p_{\alpha\beta}(\varphi)$ ([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]], [[lem-schwartz-dilations-preserve-schwartz-space]], [[def-schwartz-space-and-its-seminorms]]).

[F3] A tempered distribution is continuous on $\mathcal S$, so convergence in every seminorm implies convergence of the pairings; this is the definition of tempered distribution and of the Schwartz topology ([[def-tempered-distribution]], [[def-schwartz-topology-and-convergence]]).



**Proof technique:** direct seminorm estimates for the parameter family, then lower semicontinuity of suprema.

## Proof

**Proof technique:** direct.

1.1 Continuity of the parameter family in Schwartz space. Fix $(y_0,t_0)\in\mathbb R^n\times(0,\infty)$ and a compact interval $[a,b]\subseteq(0,\infty)$ containing $t_0$ in its interior. For $h_{y,t}(z)=\varphi_t(y-z)$ and multi-indices $\alpha,\beta$, a first-order Taylor expansion of $\partial^\beta\varphi$ along the segment from $(y_0-z)/t$ to $(y-z)/t$ gives, for $t\in[a,b]$ and $\varepsilon:=|y-y_0|/a\le1$, $$p_{\alpha\beta}(h_{y,t}-h_{y_0,t})\le C_{a,b}(1+|y_0|)^{|\alpha|}\,\frac{|y-y_0|}{a}\sum_{|\gamma|\le|\alpha|}\sum_{|e|=1}p_{\gamma,\beta+e}(\varphi).$$ For the scale variation put $u=(y_0-z)/t$. Differentiating $\partial_z^\beta h_{y_0,t}(z)=(-1)^{|\beta|}t^{-n-|\beta|}\partial^\beta\varphi(u)$ gives $$\partial_t\partial_z^\beta h_{y_0,t}(z)=(-1)^{|\beta|+1}t^{-n-|\beta|-1}\bigl((n+|\beta|)\partial^\beta\varphi(u)+u\cdot\nabla\partial^\beta\varphi(u)\bigr).$$ Since $z=y_0-tu$ and $t\in[a,b]$, $|z|^{|\alpha|}\le C_{a,b,\alpha}(1+|y_0|)^{|\alpha|}(1+|u|)^{|\alpha|}$. The factor $u$ in the scale derivative therefore requires one additional polynomial weight, and the mean-value estimate gives $$p_{\alpha\beta}(h_{y_0,t}-h_{y_0,t_0})\le C_{a,b,n,\alpha,\beta}(1+|y_0|)^{|\alpha|}|t-t_0|\left(\sum_{|\gamma|\le|\alpha|}p_{\gamma,\beta}(\varphi)+\sum_{|\gamma|\le|\alpha|+1}\sum_{|e|=1}p_{\gamma,\beta+e}(\varphi)\right).$$ The two estimates tend to $0$ as $(y,t)\to(y_0,t_0)$; hence $(y,t)\mapsto h_{y,t}$ is continuous from $\mathbb R^n\times(0,\infty)$ into $\mathcal S$. [F2, algebra]

2.1 Joint continuity of the convolution. Since $(f*\varphi_t)(y)=\langle f,h_{y,t}\rangle$ by [F1] and $h_{y,t}\to h_{y_0,t_0}$ in $\mathcal S$ by step 1.1, the continuity of $f$ on $\mathcal S$ [F3] gives $(f*\varphi_t)(y)\to(f*\varphi_{t_0})(y_0)$ as $(y,t)\to(y_0,t_0)$. This proves the first clause, and in particular each function $y\mapsto(f*\varphi_t)(y)$ is continuous on $\mathbb R^n$ for every fixed $t$. [step 1.1, F1, F3]

3.1 Lower semicontinuity. Let $\lambda>0$. For the radial and nontangential functions assume $\int\varphi\ne0$, and suppose $M^{*,a}_\varphi f(x_0)>\lambda$. Since by step 2.1 the function $(y,t)\mapsto|(f*\varphi_t)(y)|$ is continuous and the closed cone $\{|y-x_0|\le at\}$ is the closure of the open cone $\{|y-x_0|<at\}$, the supremum over the open cone equals the supremum over the closed one: a witness in the closed cone with value $>\lambda$ can be moved slightly along the segment towards $x_0$ to a witness with $|y-x_0|<at$ and value still $>\lambda$. Fix such $t>0$, $y$ with $|y-x_0|<at$ and $|(f*\varphi_t)(y)|>\lambda$; by step 2.1 there is a neighbourhood $U$ of $y$ on which $|(f*\varphi_t)|>\lambda$. The set of $x$ with $|y-x|<at$ is open and contains $x_0$, so $U'=\{x:|y-x|<at\}$ is a neighbourhood of $x_0$ on which $M^{*,a}_\varphi f(x)\ge|(f*\varphi_t)(y)|>\lambda$ for every $y\in U\cap$ the ball of radius $at$ centred at $x$: more precisely, for $x\in U'$ choose $y'\in U\subset B(x,at)$ (possible because $U$ is a neighbourhood of $y$ and $|y-x|<at$, so $U\cap B(x,at)\ne\varnothing$), and then $M^{*,a}_\varphi f(x)>\lambda$. Hence $\{M^{*,a}_\varphi f>\lambda\}$ is open and $M^{*,a}_\varphi f$ is lower semicontinuous. The radial case is identical with $y=x$ and the value $|(f*\varphi_t)(x_0)|>\lambda$: step 2.1 gives a neighbourhood of $x_0$ on which $|(f*\varphi_t)|>\lambda$, so $M^0_\varphi f>\lambda$ there. For the grand maximal function, with no integral restriction on $\psi\in\mathcal F_N$, if $M_Nf(x_0)>\lambda$, the direct definition gives $\psi\in\mathcal F_N$, $t>0$ and $y$ with $|y-x_0|\le t$ and $|(f*\psi_t)(y)|>\lambda$. If $|y-x_0|=t$, continuity from step 2.1 lets us move $y$ slightly toward $x_0$ while keeping the value above $\lambda$, so we may assume $|y-x_0|<t$. Then $U=\{x:|y-x|<t\}$ is an open neighbourhood of $x_0$, and for every $x\in U$ the same $\psi,t,y$ is admissible in the defining supremum, giving $M_Nf(x)>\lambda$. Thus $\{M_Nf>\lambda\}$ is open and $M_Nf$ is lower semicontinuous. [step 2.1, given, algebra]

4.1 Measurability. An extended-real lower semicontinuous function is Borel: for each real $\lambda$ the set $\{g>\lambda\}$ is open, hence Borel, and the Borel structure of $[0,\infty]$ is generated by the open (or by the intervals $(\lambda,\infty]$ and $[0,\lambda)$) sets. Applying this to $M^0_\varphi f$, $M^{*,a}_\varphi f$ and $M_Nf$ by step 3.1 gives the stated Borel measurability, with values in $[0,\infty]$; the value $+\infty$ is not excluded, and if it occurs it occurs on a measurable set. This proves the lemma. [step 3.1] ∎
