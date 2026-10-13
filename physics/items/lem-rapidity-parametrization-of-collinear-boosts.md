---
id: lem-rapidity-parametrization-of-collinear-boosts
kind: lemma
title: Rapidity parametrization of collinear boosts
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 9
deps: [def-lorentz-boost, lem-collinear-boost-composition-and-velocity-addition,
       lem-boost-is-proper-orthochronous-with-inverse,
       def-real-exponential-function-and-e, thm-exponential-addition-formula,
       cor-exponential-is-a-bijection-onto-positive-reals,
       thm-exponential-is-strictly-increasing, def-natural-logarithm,
       def-rational-power, lem-rational-power-laws,
       def-inertial-frame-and-inertial-chart]
dependency_roles:
  def-lorentz-boost: mathematical-premise
  lem-collinear-boost-composition-and-velocity-addition: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  cor-exponential-is-a-bijection-onto-positive-reals: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement

For $\beta\in(-1,1)$ define
$r(\beta):=\tfrac12\log\!\Bigl(\dfrac{1+\beta}{1-\beta}\Bigr)$, where $\log$ is
the natural logarithm ([[def-natural-logarithm]]); the argument is positive
because $1+\beta>0$ and $1-\beta>0$. Then $r$ is a strictly increasing
bijection of $(-1,1)$ onto $\mathbb R$. Writing
$\sinh(r):=(e^r-e^{-r})/2$, $\cosh(r):=(e^r+e^{-r})/2$ and
$\tanh(r):=\sinh(r)/\cosh(r)$ ([[def-real-exponential-function-and-e]]), one
has $\cosh^2(r)-\sinh^2(r)=1$, where
$e^x:=\exp(x)$ for real $x$,
$\beta=\tanh(r(\beta))$,
$(1-\tanh(r)^2)^{-1/2}=\cosh(r)$, and
$\sinh(r)=\tanh(r)\cosh(r)=\beta\gamma(\beta)$ at $\beta=\tanh(r)$.
Consequently, fix an inertial frame $(o;e_0,e_1,e_2,e_3)$ and a unit spatial
vector $e=\sum_{i=1}^3 n_i e_i$ with coordinate column
$n=(n_1,n_2,n_3)\in\mathbb R^3$, $|n|=1$. Here and below
$B(\beta e)$ means $B(\beta n)$ of [[def-lorentz-boost]], so its parameter
is a coordinate column, while $e$ is a vector of $V$. The passive boost acts, in the
ordered pair of directions $(e_0,e)$, as the $2\times2$ matrix
$\begin{pmatrix}\cosh r&-\sinh r\\ -\sinh r&\cosh r\end{pmatrix}$ and as the
identity on the perpendicular complement of the plane
$\operatorname{span}(e_0,e)$. Finally, collinear rapidities add: for all
$r,s\in\mathbb R$,
$B(\tanh(r)e)\,B(\tanh(s)e)=B(\tanh(r+s)e)$, consistent with
[[lem-collinear-boost-composition-and-velocity-addition]].

## Facts & Assumptions

**Given:** The real exponential $\exp$, the natural logarithm, a parameter $\beta\in(-1,1)$, and a unit spatial vector $e=\sum_i n_i e_i$ with coordinate column $n\in\mathbb R^3$, $|n|=1$; $B(\beta e):=B(\beta n)$.

[L1] $\exp(x)=\sum_{n\ge0}x^n/n!$, $e:=\exp(1)$, and no logarithm or power enters the definition ([[def-real-exponential-function-and-e]]); $\exp$ is continuous and strictly increasing on $\mathbb R$ ([[thm-exponential-is-strictly-increasing]]) and $\exp:\mathbb R\to(0,\infty)$ is a bijection ([[cor-exponential-is-a-bijection-onto-positive-reals]]).

[L2] $\exp(x+y)=\exp(x)\exp(y)$ for all real $x,y$ ([[thm-exponential-addition-formula]]).

[L3] For $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$; thus $\log(\exp y)=y$ for all $y$ and $\exp(\log x)=x$ for all $x>0$ ([[def-natural-logarithm]]).

[L4] For a positive real base $a$ and rational exponents, $a^{uv}=(a^u)^v$ and $a^{-1}=1/a$ ([[def-rational-power]], [[lem-rational-power-laws]]); these are the rules used for the power $(1-\tanh(r)^2)^{-1/2}$.

[L5] For $0<|\boldsymbol\beta|<1$ the passive boost acts in the frame's coordinates by $x'^0=\gamma(x^0-\boldsymbol\beta\cdot x_{\mathrm{vec}})$ and $x'_{\mathrm{vec}}=x_{\mathrm{vec}}+\frac{\gamma-1}{|\boldsymbol\beta|^2}(\boldsymbol\beta\cdot x_{\mathrm{vec}})\boldsymbol\beta-\gamma\boldsymbol\beta x^0$, with $\gamma(\boldsymbol\beta)=(1-|\boldsymbol\beta|^2)^{-1/2}$; for $\boldsymbol\beta=\mathbf0$ one defines $B(\mathbf0)=\operatorname{id}_V$ and $\gamma(\mathbf0)=1$ ([[def-lorentz-boost]]).

[L6] $B(\beta_1e)B(\beta_2e)=B\bigl(\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}e\bigr)$ for a common unit direction $e$ and $\beta_1,\beta_2\in(-1,1)$ ([[lem-collinear-boost-composition-and-velocity-addition]]).

[L7] $B(\boldsymbol\beta)$ is a proper orthochronous Lorentz map with $B(\boldsymbol\beta)^{-1}=B(-\boldsymbol\beta)$ ([[lem-boost-is-proper-orthochronous-with-inverse]]).

[L8] In an inertial frame, $\eta(e_0,e_0)=-1$, $\eta(e_0,e_i)=0$ and $\eta(e_i,e_j)=\delta_{ij}$ on the spatial basis, and the spatial coordinates carry the standard Euclidean structure in which the coordinate column $n$ of the unit spatial vector $e$ has $|n|=1$ ([[def-inertial-frame-and-inertial-chart]]).



## Proof

**Proof technique:** direct.

1.1 For every real $x$, set $a_x:=\exp(x)$. By [L2] with $y=-x$, $a_xa_{-x}=\exp(0)$; applying [L2] with $x=y=0$ gives $\exp(0)=\exp(0)^2$, and $\exp(0)\neq0$ because the codomain of $\exp$ is $(0,\infty)$ by [L1], so $\exp(0)=1$ and $a_{-x}=a_x^{-1}$. Also $a_x=(a_{x/2})^2>0$ because $a_{x/2}>0$ by [L1]. Consequently $\cosh^2(r)-\sinh^2(r)=\frac{(a_r+a_{-r})^2-(a_r-a_{-r})^2}{4}=a_ra_{-r}=1$ for every $r$, and $\cosh(r)=\frac{a_r+a_r^{-1}}2>0$. [L1, L2, algebra]

1.2 Multiplying numerator and denominator by $a_r$ gives $\tanh(r)=\frac{a_r-a_r^{-1}}{a_r+a_r^{-1}}=\frac{a_r^2-1}{a_r^2+1}=\frac{e^{2r}-1}{e^{2r}+1}$ by [L2], since $e^{2r}=a_r^2$. Since $e^{2r}>0$, the numerator $e^{2r}-1$ is strictly smaller in absolute value than the denominator $e^{2r}+1$, so $-1<\tanh(r)<1$; thus $\tanh$ maps $\mathbb R$ into $(-1,1)$. For $0<u<v$ one computes $\frac{v-1}{v+1}-\frac{u-1}{u+1}=\frac{(v-1)(u+1)-(u-1)(v+1)}{(v+1)(u+1)}=\frac{2(v-u)}{(v+1)(u+1)}>0$, so $u\mapsto\frac{u-1}{u+1}$ is strictly increasing on $(0,\infty)$; since $r\mapsto e^{2r}=\exp(2r)$ is strictly increasing by [L1], the composition $\tanh$ is strictly increasing on $\mathbb R$. [L1, L2, algebra]

2.1 Let $\beta\in(-1,1)$ and put $u:=\frac{1+\beta}{1-\beta}>0$, the denominator being positive. By [L1] there is a real $t$ with $e^t=u$; put $s:=t/2$, so $e^{2s}=(e^s)^2=e^t=u$ by [L2]. Then step 1.2 gives $\tanh(s)=\frac{u-1}{u+1}=\frac{(1+\beta)-(1-\beta)}{(1+\beta)+(1-\beta)}=\frac{2\beta}{2}=\beta$. Hence $\tanh:\mathbb R\to(-1,1)$ is surjective, and with step 1.2 it is a strictly increasing bijection; its inverse $\tanh^{-1}:(-1,1)\to\mathbb R$ is strictly increasing and onto. [L1, L2, step 1.2, algebra]

2.2 For $r,s\in\mathbb R$ put $\beta_1:=\tanh(r)$ and $\beta_2:=\tanh(s)$. Both lie in $(-1,1)$, so $1+\beta_1\beta_2>0$. Writing $u:=e^{2r}$, $v:=e^{2s}$, step 1.2 gives $\beta_1=(u-1)/(u+1)$ and $\beta_2=(v-1)/(v+1)$, while [L2] gives $e^{2(r+s)}=uv$. Hence $\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}=\frac{(u-1)(v+1)+(v-1)(u+1)}{(u+1)(v+1)+(u-1)(v-1)}=\frac{2uv-2}{2uv+2}=\tanh(r+s)$. This checks the parameter identity of the collinear composition law; the map equality will follow from the boost plane matrices. [L2, step 1.2, algebra]

3.1 For $\beta\in(-1,1)$, put $q:=\frac{1+\beta}{1-\beta}>0$ and $r:=r(\beta)=\tfrac12\log q$, so $2r=\log q$. By [L3], $e^{2r}=\exp(\log q)=q$. Then step 1.2 gives $\tanh(r(\beta))=\frac{q-1}{q+1}=\frac{(1+\beta)-(1-\beta)}{(1+\beta)+(1-\beta)}=\beta$. Thus $\tanh\circ r=\operatorname{id}_{(-1,1)}$; composing with the bijection $\tanh$ of step 2.1 gives $r=\tanh^{-1}$, so $r$ is a strictly increasing bijection of $(-1,1)$ onto $\mathbb R$, and in particular $\beta=\tanh(r(\beta))$ for every $\beta$. [L3, step 1.2, step 2.1, algebra]

4.1 Let $r\in\mathbb R$ and put $\beta:=\tanh(r)\in(-1,1)$, so that $r=r(\beta)$ by step 3.1. By step 1.1, $1-\tanh(r)^2=\frac{\cosh^2r-\sinh^2r}{\cosh^2r}=\cosh(r)^{-2}$; since $\cosh(r)>0$ by step 1.1, the rational power laws [L4] give $(1-\tanh(r)^2)^{-1/2}=(\cosh(r)^{-2})^{-1/2}=\cosh(r)$. Multiplying the definition $\tanh r=\sinh r/\cosh r$ by $\cosh r$ gives $\sinh(r)=\tanh(r)\cosh(r)=\beta\gamma(\beta)$, because $\gamma(\beta)=(1-\beta^2)^{-1/2}=(1-\tanh(r)^2)^{-1/2}=\cosh(r)$ by [L5]. [L4, L5, step 1.1, step 3.1, algebra]

5.1 Fix $e$ and its column $n$, and define $J(a):=\sum_{i=1}^3 a_i e_i$ for $a\in\mathbb R^3$. By [L8], $J(n)=e$ and $\eta(J(a),J(d))=a\cdot d$. Write $x=x^0e_0+se+y$ with $s:=n\cdot x_{\mathrm{vec}}$, $y_{\mathrm{vec}}:=x_{\mathrm{vec}}-sn$, and $y:=J(y_{\mathrm{vec}})$; then $n\cdot y_{\mathrm{vec}}=\eta(e,y)=0$. Set $\beta:=\tanh(r)$ and $\boldsymbol\beta:=\beta n\in\mathbb R^3$, so $|\boldsymbol\beta|=|\beta|<1$ and $\boldsymbol\beta\cdot x_{\mathrm{vec}}=\beta s$. If $\beta=0$, step 4.1 gives $\cosh r=1$, $\sinh r=0$, and [L5] gives $B(0)=I$. If $\beta\ne0$, [L5] gives $(B(\beta n)x)^0=\gamma(x^0-\beta s)$ and $(B(\beta n)x)_{\mathrm{vec}}=sn+y_{\mathrm{vec}}+(\gamma-1)sn-\gamma\beta x^0n=(\cosh r\,s-\sinh r\,x^0)n+y_{\mathrm{vec}}$ by step 4.1. Thus in both cases the action in directions $(e_0,e)$ is $\begin{pmatrix}\cosh r&-\sinh r\\-\sinh r&\cosh r\end{pmatrix}$, with the identity on the Lorentz-orthogonal complement of their plane, namely $\{J(a):n\cdot a=0\}$. [L5, L8, step 4.1, algebra]

6.1 By [L2] and the exponential definitions, expansion gives $\cosh(r+s)=\cosh r\cosh s+\sinh r\sinh s$ and $\sinh(r+s)=\sinh r\cosh s+\cosh r\sinh s$. The product of the two plane matrices from step 5.1 therefore has diagonal entries $\cosh(r+s)$ and off-diagonal entries $-\sinh(r+s)$; each map is the identity on the same transverse space. The direct-sum decomposition in step 5.1 then gives $B(\tanh(r)e)B(\tanh(s)e)=B(\tanh(r+s)e)$ on all of $V$, including zero rapidities. Together with step 2.2 this proves the collinear composition law stated in [L6], with additive rapidity. [L2, L6, step 2.2, step 5.1, algebra]

7.1 Step 3.1 proves that $r$ is a strictly increasing bijection of $(-1,1)$ onto $\mathbb R$ with $\beta=\tanh(r(\beta))$; step 1.1 gives $\cosh^2-\sinh^2=1$; step 4.1 gives $(1-\tanh^2r)^{-1/2}=\cosh r$ and $\sinh r=\tanh r\cosh r=\beta\gamma(\beta)$; step 5.1 gives the matrix display and the identity on the perpendicular complement; and step 6.1 gives the addition of rapidities. This proves every clause of the statement; the characterisation $B(\tanh r e)^{-1}=B(-\tanh r e)$ used implicitly is [L7]. [step 1.1, step 3.1, step 4.1, step 5.1, step 6.1, L7] ∎
