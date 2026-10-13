---
id: lem-collinear-boost-composition-and-velocity-addition
kind: lemma
title: Collinear boost composition and the relativistic velocity-addition law
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 8
deps: [def-lorentz-boost, lem-boost-is-proper-orthochronous-with-inverse,
       def-spatial-rotation-of-an-inertial-frame, def-euclidean-inner-product,
       def-rational-power, lem-rational-power-laws,
       def-matrix-product-and-identity-matrix, def-real-order,
       lem-of-abs-value, lem-of-square-monotone]
dependency_roles:
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-spatial-rotation-of-an-inertial-frame: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-real-order: mathematical-premise
  lem-of-abs-value: mathematical-premise
  lem-of-square-monotone: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $S=\operatorname{span}(e_1,e_2,e_3)$ be the spatial three-space of a frame
$(o;e_0,e_1,e_2,e_3)$ with its Euclidean structure $\delta$
([[def-spatial-rotation-of-an-inertial-frame]]), and let $e\in S$ be a unit
vector, $\delta(e,e)=1$. Define $J:\mathbb R^3\to S$ by
$J(a):=\sum_{i=1}^3a_i e_i$, where $a_i:=a(i-1)$ relabels the coordinates
$0,1,2$ of [[def-euclidean-inner-product]]. Let $n:=J^{-1}(e)$; then
$|n|=1$, since $\delta(J(a),J(b))=a\cdot b$ by orthonormality.
For $t\in(-1,1)$, the notation $B(te)$ means $B(tn)$, whose parameter
belongs to $\mathbb R^3$, while $e$ belongs to $V$.
Let $\beta_1,\beta_2\in(-1,1)$ be real parameters and
let $B(\beta_1e)$ and $B(\beta_2e)$ be the corresponding passive boosts
([[def-lorentz-boost]]). Then

$$B(\beta_1e)\,B(\beta_2e)=B(\beta e),\qquad \beta:=\frac{\beta_1+\beta_2}{1+\beta_1\beta_2},$$

and $|\beta|<1$. In particular the two collinear boosts commute,
$B(\beta_1e)B(\beta_2e)=B(\beta_2e)B(\beta_1e)$, and

$$B(\beta_1e)\,B(-\beta_2e)=B\!\left(\frac{\beta_1-\beta_2}{1-\beta_1\beta_2}\,e\right).$$

The composed parameter $\beta$ is the displayed rational expression, which
generally differs from $\beta_1+\beta_2$; this algebraic law is conventionally
called velocity addition. In particular,
no composition of two boosts in a common direction leaves the open interval
$(-1,1)$: the composed parameter always satisfies $|\beta|<1$.

## Facts & Assumptions

**Given:** A frame $(o;e_0,e_1,e_2,e_3)$ with spatial three-space $S$ and Euclidean structure $\delta$, a unit vector $e\in S$, real parameters $\beta_1,\beta_2\in(-1,1)$, and the passive boosts $B_1:=B(\beta_1e)$, $B_2:=B(\beta_2e)$.

[L1] For $\boldsymbol\beta\in\mathbb R^3$ with $|\boldsymbol\beta|<1$ the passive boost is the linear map given in the frame's coordinates by $x'^0=\gamma(x^0-\boldsymbol\beta\cdot x_{\mathrm{vec}})$ and $x'_{\mathrm{vec}}=x_{\mathrm{vec}} +\frac{\gamma-1}{|\boldsymbol\beta|^2}(\boldsymbol\beta\cdot x_{\mathrm{vec}})\boldsymbol\beta -\gamma\boldsymbol\beta x^0$ when $\boldsymbol\beta\neq\mathbf 0$, and $B(\mathbf 0)=\operatorname{id}_V$; here $\gamma(\boldsymbol\beta)=(1-|\boldsymbol\beta|^2)^{-1/2}$ is the rational power of the positive base $1-|\boldsymbol\beta|^2$ ([[def-lorentz-boost]]).

[L2] The spatial three-space of the frame is $S=\operatorname{span}(e_1,e_2,e_3)=\{w\in V:\eta(e_0,w)=0\}$, the form $\delta:=\eta|_{S\times S}$ is a positive-definite symmetric bilinear form on $S$ with $\delta$-orthonormal ordered basis $(e_1,e_2,e_3)$, and $V=S\oplus\operatorname{span}(e_0)$; for the unit vector $e$ one has $\delta(e,e)=1$ and every $x_s\in S$ decomposes as $x_s=s\,e+y$ with $s:=\delta(e,x_s)$ and $\delta(e,y)=0$ ([[def-spatial-rotation-of-an-inertial-frame]]).

[L3] For coordinate columns $a,b\in\mathbb R^3$, use $a_i:=a(i-1)$ and $b_i:=b(i-1)$, $i=1,2,3$. The Euclidean inner product is $a\cdot b=\sum_{i=1}^3a_i b_i$ and $|a|^2=\sum_{i=1}^3a_i^2$ ([[def-euclidean-inner-product]]). With $J$ and $n$ as in the Statement, orthonormality in [L2] gives $\delta(J(a),J(b))=a\cdot b$ and $|n|=1$. Thus for $\boldsymbol\beta=tn$ and $x_{\mathrm{vec}}\in\mathbb R^3$ one has $|\boldsymbol\beta|^2=t^2$ and $\boldsymbol\beta\cdot x_{\mathrm{vec}}=t\,\delta(e,J(x_{\mathrm{vec}}))$.

[L4] For a positive real base $a$ the rational power $a^{-1/2}$ is positive and satisfies $\bigl(a^{-1/2}\bigr)^2=a^{-1}=1/a$ ([[def-rational-power]], [[lem-rational-power-laws]]); hence for $|\beta|<1$ the number $\gamma(\beta)=(1-\beta^2)^{-1/2}$ is positive with $\gamma(\beta)^2(1-\beta^2)=1$.

[L5] Matrix multiplication has entries $(AB)_{ik}=\sum_ja_{ij}b_{jk}$ and the identity matrix has diagonal entries $1$; two matrices with the same entries are equal, and two linear maps with the same matrix in a fixed ordered basis are equal ([[def-matrix-product-and-identity-matrix]]).

[L6] The real numbers form an ordered field: a product of two positive reals is positive, and an inequality may be multiplied on both sides by a positive real; in particular $u>0$ gives $u^2>0$, and $|u|<1$ together with $|u|\ge0$ gives $u<1$ ([[def-real-order]]).

[L7] For real $x,y$ one has $|x|\ge0$, $|xy|=|x|\,|y|$, and, for $c>0$, $|x|<c$ if and only if $-c<x<c$ ([[lem-of-abs-value]]).

[L8] For reals $a,b\ge0$ one has $a<b$ if and only if $a^2<b^2$; more generally $a^2<b^2$ if and only if $|a|<|b|$ ([[lem-of-square-monotone]]).



## Proof

**Proof technique:** direct.

1.1 Let $P:=\operatorname{span}(e_0,e)$ and $P^{\perp}:=\{y\in S:\delta(e,y)=0\}$. By [L2], every $x\in V$ has a unique decomposition $x=x^0e_0+s\,e+y$ with $y\in P^{\perp}$, so $V=P\oplus P^{\perp}$. Put $a:=J^{-1}(y)$; its spatial coordinate column is $x_{\mathrm{vec}}=sn+a$ and $n\cdot a=\delta(e,y)=0$ by [L3]. For $\boldsymbol\beta=\beta_i n$, therefore, $|\boldsymbol\beta|^2=\beta_i^2$ and $\boldsymbol\beta\cdot x_{\mathrm{vec}}=\beta_i s$. If $\beta_i\ne0$, [L1] gives $(B_i x)^0=\gamma_i(x^0-\beta_i s)$ and $(B_i x)_{\mathrm{vec}}=sn+a+(\gamma_i-1)sn-\gamma_i\beta_i x^0n=(\gamma_i s-\gamma_i\beta_i x^0)n+a$. Applying $J$ to this last column gives $B_i x=\gamma_i(x^0-\beta_i s)e_0+(\gamma_i s-\gamma_i\beta_i x^0)e+y$. For $\beta_i=0$, the same formula follows from $B_i=\operatorname{id}_V$ and $\gamma_i=1$. Thus the action on $P$ in the ordered basis $(e_0,e)$ is $\begin{pmatrix}\gamma_i&-\gamma_i\beta_i\\ -\gamma_i\beta_i&\gamma_i\end{pmatrix}$ and the action on $P^{\perp}$ is the identity. [L1, L2, L3, L5, algebra]

2.1 By the product rule [L5], the $2\times2$ blocks of $B_1B_2$ multiply to $\begin{pmatrix}\gamma_1&-\gamma_1\beta_1\\ -\gamma_1\beta_1&\gamma_1\end{pmatrix} \begin{pmatrix}\gamma_2&-\gamma_2\beta_2\\ -\gamma_2\beta_2&\gamma_2\end{pmatrix} =\begin{pmatrix}\gamma_1\gamma_2(1+\beta_1\beta_2)&-\gamma_1\gamma_2(\beta_1+\beta_2)\\ -\gamma_1\gamma_2(\beta_1+\beta_2)&\gamma_1\gamma_2(1+\beta_1\beta_2)\end{pmatrix}$, because the $(0,0)$ entry is $\gamma_1\gamma_2+\gamma_1\beta_1\gamma_2\beta_2$ and the $(0,1)$ entry is $-\gamma_1\gamma_2\beta_2-\gamma_1\beta_1\gamma_2$, the other two entries being the same by symmetry; the $P^{\perp}$ block of $B_1B_2$ is the identity. Since $|\beta_1\beta_2|=|\beta_1|\,|\beta_2|<1\cdot1=1$ by [L7], [L6] gives $-1<\beta_1\beta_2$, hence $1+\beta_1\beta_2>0$; the scalar $\gamma_1\gamma_2(1+\beta_1\beta_2)$ is the product of the positive numbers $\gamma_1,\gamma_2,1+\beta_1\beta_2$ and is therefore positive, so the block may be factored by it. [step 1.1, L4, L5, L6, L7, algebra]

3.1 Define $\beta:=(\beta_1+\beta_2)/(1+\beta_1\beta_2)$. Expanding the numerator of $1-\beta^2$ with the common denominator $(1+\beta_1\beta_2)^2$ gives $1-\beta^2=\frac{(1+\beta_1\beta_2)^2-(\beta_1+\beta_2)^2}{(1+\beta_1\beta_2)^2} =\frac{(1-\beta_1^2)(1-\beta_2^2)}{(1+\beta_1\beta_2)^2} =\frac{1}{\gamma_1^2\gamma_2^2(1+\beta_1\beta_2)^2}$, where the last step uses $\gamma_i^2(1-\beta_i^2)=1$ from [L4]. The right-hand side is positive, so $1-\beta^2>0$ and $|\beta|<1$; moreover $\gamma(\beta)^2=1/(1-\beta^2)=\gamma_1^2\gamma_2^2(1+\beta_1\beta_2)^2$ by [L4], and $\gamma(\beta)$ and $\gamma_1\gamma_2(1+\beta_1\beta_2)$ are both positive, so their equal squares force them to be equal (a positive real has exactly one positive square root); consequently $\gamma(\beta)\beta=\gamma_1\gamma_2(\beta_1+\beta_2)$. For the positivity of the numerator in the second display, note that $|\beta_i|<1=|1|$, so [L8] gives $\beta_i^2<1$, hence $1-\beta_i^2>0$ and, by [L6], $(1-\beta_1^2)(1-\beta_2^2)>0$; together with $(1+\beta_1\beta_2)^2>0$ from [L6] this gives $1-\beta^2>0$ and, by [L8] applied to $\beta^2<1$, the bound $|\beta|<1$. [step 2.1, L4, L6, L7, L8, algebra]

4.1 Substituting the two displays of step 3.1 into the product of step 2.1 and comparing with the block action of $B(\beta e)$ established in step 1.1 (including $\beta=0$, when the block is $I_2$) gives that $B_1B_2$ and $B(\beta e)$ have the same action on $P$ in $(e_0,e)$, namely the $2\times2$ matrix $\begin{pmatrix}\gamma(\beta)&-\gamma(\beta)\beta\\ -\gamma(\beta)\beta&\gamma(\beta)\end{pmatrix}$ and both fix $P^{\perp}$ pointwise; since $V=P\oplus P^{\perp}$, [L5] gives equality of the two linear maps, so $B(\beta_1e)B(\beta_2e)=B(\beta e)$ with $|\beta|<1$. [step 1.1, step 2.1, step 3.1, L1, L5, algebra]

5.1 Replacing $\beta_2$ by $-\beta_2$ in steps 2.1 and 3.1 (the hypothesis $|-\beta_2|<1$ holds and $|\beta_1\beta_2|<1$ gives $1-\beta_1\beta_2>0$ by [L6], [L7]) gives the product $\gamma_1\gamma_2(1-\beta_1\beta_2) \begin{pmatrix}1&-\frac{\beta_1-\beta_2}{1-\beta_1\beta_2}\\ -\frac{\beta_1-\beta_2}{1-\beta_1\beta_2}&1\end{pmatrix}$, the identity on $P^{\perp}$, and the identity $(1-\beta_1^2)(1-\beta_2^2)=(1-\beta_1\beta_2)^2\bigl(1-\bigl(\frac{\beta_1-\beta_2}{1-\beta_1\beta_2}\bigr)^2\bigr)$; hence $\beta':=\frac{\beta_1-\beta_2}{1-\beta_1\beta_2}$ satisfies $|\beta'|<1$ and, by the same comparison as step 4.1, $B(\beta_1e)B(-\beta_2e)=B(\beta'e)$. [step 2.1, step 3.1, step 4.1, L1, L6, L7, L8, algebra]

5.2 The displays of steps 3.1 and 4.1 are symmetric under the exchange of $(\beta_1,\gamma_1)$ with $(\beta_2,\gamma_2)$: the scalar $\beta$ and the factor $\gamma_1\gamma_2(1+\beta_1\beta_2)$ are unchanged by that exchange. Applying the same computation with the roles of $B_1$ and $B_2$ interchanged therefore gives $B(\beta_2e)B(\beta_1e)=B(\beta e)=B(\beta_1e)B(\beta_2e)$: the two collinear boosts commute. [step 3.1, step 4.1, algebra, L5]

6.1 Step 4.1 proves the composition law and the bound $|\beta|<1$ for equal directions, step 5.1 proves the opposite-sign composition law, and step 5.2 proves commutativity; every composition of two boosts in the common direction $e$ therefore has parameter in $(-1,1)$ and never leaves the open interval. This proves every clause of the statement. [step 4.1, step 5.1, step 5.2, L4] ∎
