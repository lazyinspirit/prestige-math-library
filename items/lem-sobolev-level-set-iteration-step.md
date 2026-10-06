---
id: lem-sobolev-level-set-iteration-step
kind: lemma
title: "Sobolev level-set step: energy decay with explicit level gap and radius loss"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [lem-caccioppoli-inequality-for-truncated-subsolutions, lem-positive-part-is-an-admissible-weak-test-by-truncation, def-sobolev-space-wkp-and-its-norm, cor-sobolev-inequality-for-w-one-p-zero, thm-critical-sobolev-embedding-into-every-finite-lq, thm-poincare-inequality-for-w-one-p-zero, thm-chebyshev-markov-inequality-for-the-integral, thm-holder-inequality-for-integrals, def-sobolev-conjugate-exponent, def-ball-average-operator-on-r-n, def-l-p-space-as-a-quotient-by-null-functions, lem-smooth-bump-between-concentric-euclidean-balls, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Lemma 6, inequality (2), and the measure/level-set Lemmi 9-11, printed pp. 1-7 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 17, Lemma 2 and Corollary 1 (the Sobolev inequality with the n=2 substitute), printed pp. 199-210 (read in full)"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge3$, let $B_R\subset\mathbb R^n$ be a ball, and let $u\in H^1(B_R;\mathbb R)$. Suppose there is $C_0\ge1$ such that for every $0<\rho<R$ and every level $k$
$$\int_{B_\rho}|D(u-k)^+|^2dx\le C_0\,(R-\rho)^{-2}\int_{B_R}(u-k)^{+2}dx,$$
i.e. the truncated Caccioppoli estimate of [[lem-caccioppoli-inequality-for-truncated-subsolutions]] holds with $f=0$ on $B_R$. Then there is $C=C(n,C_0)$ such that for all $0<r<R$ and all $h<k$:
$$\int_{B_r}(u-k)^{+2}dx\le C\,(R-r)^{-2}(k-h)^{-4/n}\Bigl(\int_{B_R}(u-h)^{+2}dx\Bigr)^{1+2/n},$$
and consequently, for $u\ge0$ and $h>0$,
$$\bigl|\{u>k\}\cap B_r\bigr|\le C\,(k-h)^{-2}(R-r)^{-2}h^{-4/n}\Bigl(\int_{B_R}u^2\,dx\Bigr)^{1+2/n}.$$
For $n=2$ and each $0<\delta<1$, the same conclusions hold with $1+\delta$ in place of $1+2/n$, $(k-h)^{-2\delta}$ and $h^{-2\delta}$ in place of the powers $-4/n$, and the common factor $(R-r)^{-2}$ replaced by $R^{2-2\delta}(R-r)^{-2}$. Here the constant may also depend on $\delta$. Indeed, the critical Sobolev inequality on $B_R$ has the scaled form $\|v\|_{L^\kappa(B_R)}\le S_\kappa R^{2/\kappa}\|Dv\|_{L^2(B_R)}$ for finite $\kappa>2$, and choosing $\kappa=2/(1-\delta)$ gives $\delta=1-2/\kappa$. Thus the open range $0<\delta<1$ is exactly the range supplied by finite $\kappa$, and the radius factor is the one dictated by dilation ([[thm-critical-sobolev-embedding-into-every-finite-lq]], [[thm-poincare-inequality-for-w-one-p-zero]]).

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; $n\ge2$; a ball $B_R$; a real class $u\in H^1(B_R;\mathbb R)$; a constant $C_0\ge1$ with $\int_{B_\rho}|D(u-k)^+|^2\le C_0(R-\rho)^{-2}\int_{B_R}(u-k)^{+2}$ for every $0<\rho<R$ and every level $k$; radii $0<r<R$ and levels $h<k$.

[F1] Assume Countable Choice. For $k\in\mathbb R$ the class $u_k=(u-k)^+$ lies in $H^1(B_R;\mathbb R)$, and for $\eta\in C_c^\infty(B_R)$ the product $\eta u_k$ lies in $H^1_0(B_R)$ with $D(\eta u_k)=\eta Du_k+u_kD\eta$ almost everywhere ([[lem-positive-part-is-an-admissible-weak-test-by-truncation]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] Assume the Axiom of Choice. Sobolev inequality: for $n\ge3$ there is $S=S(n)<\infty$ with $\|v\|_{L^{2^*}(B_R)}\le S\|Dv\|_{L^2(B_R)}$ for every $v\in H^1_0(B_R)$, where $2^*=2n/(n-2)$ ([[cor-sobolev-inequality-for-w-one-p-zero]], [[def-sobolev-conjugate-exponent]]).

[F3] Assume the Axiom of Choice. On the unit ball in $\mathbb R^2$, the critical embedding into every finite $L^\kappa$, combined with Poincaré's inequality for $H^1_0$, gives $\|v\|_{L^\kappa(B_1)}\le S_\kappa\|Dv\|_{L^2(B_1)}$ for finite $\kappa>2$. Dilation therefore gives $\|v\|_{L^\kappa(B_R)}\le S_\kappa R^{2/\kappa}\|Dv\|_{L^2(B_R)}$ for $v\in H^1_0(B_R)$ ([[thm-critical-sobolev-embedding-into-every-finite-lq]], [[thm-poincare-inequality-for-w-one-p-zero]]).

[F4] Chebyshev's inequality: for a nonnegative measurable $v$ and $t>0$, $|\{v>t\}|\le t^{-2}\int v^2$; and Hölder's inequality gives $\int_E f^2\le|E|^{2/n}\|f\|^2_{L^{2^*}}$ for measurable $E$ of finite measure ([[thm-chebyshev-markov-inequality-for-the-integral]], [[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F5] The radial cutoff used in the ball-form Caccioppoli estimate has a universal gradient constant: for $0<r<\rho$, take $s=(r+\rho)/2$ and $\eta(x)=\sigma((s^2-|x|^2)/(s^2-r^2))$. Then $\eta\in C_c^\infty(B_\rho)$, $0\le\eta\le1$, $\eta=1$ on $B_r$, and $|D\eta|\le C_U/(\rho-r)$ with $C_U=4\|\sigma'\|_\infty$, since on the support $|x|\le s$ and $s-r=(\rho-r)/2$; this is the explicit cutoff calculation in [[lem-caccioppoli-inequality-for-truncated-subsolutions]].

## Proof

**Proof technique:** direct; combine the truncated Caccioppoli estimate with the Sobolev embedding and Chebyshev's inequality, then iterate the resulting measure–energy inequality once.

1.1 Put $w:=(u-k)^+$ and $v:=(u-h)^+$. Since $h<k$ one has $0\le w\le v$, and $\{w>0\}=\{u>k\}=\{v>k-h\}\subseteq\{v>0\}$. Applying Chebyshev's inequality to the nonnegative function $v$ at level $k-h>0$ gives $|\{w>0\}\cap B_r|\le|\{v>k-h\}|\le(k-h)^{-2}\int_{B_R}v^2dx$. [given, F4]

1.2 Choose $\rho:=(R+r)/2\in(r,R)$ and the bump $\eta$ of [F5] with $0\le\eta\le1$, $\eta=1$ on $B_r$, $\operatorname{supp}\eta\subseteq B_\rho$ and $|D\eta|\le C_U/(\rho-r)=2C_U/(R-r)$. By [F1], $\eta w\in H^1_0(B_R)$, and $D(\eta w)=\eta Dw+wD\eta$ almost everywhere, so the Caccioppoli hypothesis at radius $\rho$ and level $k$, together with the elementary bound $(a+b)^2\le2a^2+2b^2$, gives $$\int_{B_R}|D(\eta w)|^2dx\le2\int_{B_\rho}\eta^2|Dw|^2dx+2\int_{B_\rho}w^2|D\eta|^2dx\le\frac{8(C_0+C_U^2)}{(R-r)^2}\int_{B_R}w^2dx.$$ [given, F1, F5, algebra]

2.1 Assume $n\ge3$ and let $2^*=2n/(n-2)$. Applying the Sobolev inequality [F2] to $\eta w\in H^1_0(B_R)$ and then Hölder's inequality [F4] on the support of $\eta w$, which is contained in $\{w>0\}\cap B_\rho$ up to a null set, gives $\int_{B_r}w^2dx\le\int_{B_R}(\eta w)^2dx\le|\{w>0\}\cap B_\rho|^{2/n}S^2\int_{B_R}|D(\eta w)|^2dx$. [step 1.1, F2, F4, algebra]

3.1 Substituting the bound of step 1.2 into step 2.1 and then the Chebyshev bound of step 1.1, and using $\int_{B_R}w^2\le\int_{B_R}v^2$, yields $\int_{B_r}(u-k)^{+2}dx\le C(n,C_0)(R-r)^{-2}(k-h)^{-4/n}\bigl(\int_{B_R}(u-h)^{+2}dx\bigr)^{1+2/n}$, which is the first displayed estimate. [step 1.1, step 1.2, step 2.1, algebra]

3.2 Assume $n=2$ and fix a finite exponent $\kappa>2$, put $\delta:=1-2/\kappa\in(0,1)$, and fix $\eta$ and $w$ as in steps 1.1-1.2. Replacing $2^*$ by $\kappa$ in step 2.1, using the scaled inequality [F3] and Hölder in the form $\int_Ef^2\le|E|^{1-2/\kappa}\|f\|_{L^\kappa}^2$, and inserting steps 1.1 and 1.2 gives $\int_{B_r}(u-k)^{+2}dx\le C(\kappa,C_0)R^{2-2\delta}(R-r)^{-2}(k-h)^{-2\delta}\bigl(\int_{B_R}(u-h)^{+2}dx\bigr)^{1+\delta}$. As finite $\kappa>2$ varies, $\delta=1-2/\kappa$ ranges over exactly $(0,1)$; the factor $R^{2-2\delta}$ is precisely the dilation factor from [F3]. [step 1.1, step 1.2, step 2.1, F3, F4, algebra]

4.1 For the measure clause assume $u\ge0$ and $h>0$. On $\{u>k\}\cap B_r$ one has $(u-h)^+>k-h>0$, so Chebyshev's inequality gives $|\{u>k\}\cap B_r|\le(k-h)^{-2}\int_{B_r}(u-h)^{+2}dx$, and the first estimate applied with levels $0<h$ bounds the integral by the displayed energy expression, since $u\ge0$; multiplying the two bounds gives the displayed measure estimate. For $n=2$ the same argument carries the factor $R^{2-2\delta}(R-r)^{-2}h^{-2\delta}$ from step 3.2. [step 3.1, step 3.2, F4, algebra]

5.1 Both displayed estimates follow from steps 3.1-4.1 with constants depending only on $n$, the Sobolev constants and $C_0$; the hypothesis list uses the Caccioppoli estimate of [[lem-caccioppoli-inequality-for-truncated-subsolutions]] and the declared Countable Choice and Axiom of Choice only, so no further choice principle is used. [step 3.1, step 3.2, step 4.1] ∎ 
