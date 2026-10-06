---
id: lem-mixed-boundary-hyperbolic-passage-has-uniform-endpoint-derivative-bounds
kind: lemma
title: Mixed boundary hyperbolic passage has uniform endpoint derivative bounds
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-banach-fixed-point, thm-implicit-function-theorem-for-banach-spaces]
proof_strategy: direct
sources:
  references:
    - title: "Abbondandolo and Majer, Lectures on the Morse Complex, Section 1.5 (hyperbolic fixed-point construction)"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Let $A_s$ and $A_u$ be self-adjoint matrices whose eigenvalues are respectively negative and positive. Suppose the smooth vector field near the origin in $\mathbb R^{l}\times\mathbb R^{k}$ is
$$s'=A_ss+R_s(s,u),\qquad u'=A_uu+R_u(s,u),$$
where $R(0)=DR(0)=0$ and the coordinate axes are invariant:
$$R_s(0,u)=0,\qquad R_u(s,0)=0.$$
There are $r>0$ and $\beta>0$, independent of $T>0$, such that for every $|a|,|b|<2r$ there is a unique solution on $[0,T]$ staying in $|s|,|u|\le4r$ with mixed boundary values $s(0)=a$, $u(T)=b$. It depends smoothly on $(T,a,b)$ for $T>0$. The endpoint maps
$$\alpha_T(a,b)=u(0),\qquad \zeta_T(a,b)=s(T)$$
satisfy
$$|\alpha_T(a,b)|+|\zeta_T(a,b)|\le (|a|+|b|)e^{-\beta T}.$$
For each nonnegative integer $N$ there is a constant $C_N$, independent of $T,a,b$, such that every coordinate derivative of total order at most $N$ in $(T,a,b)$ of either endpoint map has norm at most $C_Ne^{-\beta T}$. In particular the first boundary-data derivatives satisfy the corresponding operator-norm bound. The enlarged boundary-data ball permits sections with $|a|$ or $|b|$ near $r$.

Consequently the maps
$$\widehat\alpha(\rho,a,b)=\alpha_{1/\rho}(a,b),\qquad \widehat\zeta(\rho,a,b)=\zeta_{1/\rho}(a,b)\qquad(\rho>0)$$
extend by zero to smooth maps for $\rho\ge0$, and are flat along $\rho=0$: every derivative, including mixed derivatives in $(\rho,a,b)$, vanishes there. These assertions concern invariant-axis passage coordinates; they do not by themselves assert a moduli-space collar chart.

## Facts & Assumptions

**Given:** The smooth field and invariant-axis conditions in the statement.

[F1] The spectral theorem gives $\lambda>0$ such that $\|e^{tA_s}\|,\|e^{-tA_u}\|\le e^{-\lambda t}$ for $t\ge0$ ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F2] A contraction on a complete metric space has a unique fixed point ([[thm-banach-fixed-point]]). A smooth fixed-point equation with invertible derivative has smooth parameter dependence ([[thm-implicit-function-theorem-for-banach-spaces]]).

## Proof

**Proof technique:** direct, by mixed boundary integral equations, weighted induction on derivatives, and a flat change of parameter.

1.1 Work in the product norm $\max(|s|,|u|)$. Choose $\varepsilon<\lambda/16$. Shrink a coordinate ball and multiply $R$ by a smooth cutoff equal to one on $|s|,|u|\le4r$ and supported in a larger coordinate ball. The extension preserves the axes and can have all four first-derivative blocks bounded by $\varepsilon$, since $R(0)=DR(0)=0$. Its second derivative is bounded by a constant $K$ independent of sufficiently small $r$: the cutoff derivatives are controlled by $|R(x)|=O(|x|^2)$ and $|DR(x)|=O(|x|)$. Each higher derivative has a finite bound once the cutoff is fixed; these higher bounds need not be uniform as $r$ shrinks. Axis invariance gives $\|D_uR_s(s,u)\|\le K|s|$ and $\|D_sR_u(s,u)\|\le K|u|$. Choose $r$ so small that $2Kr/\lambda<1/8$, and set $\beta=\lambda/2$, $\beta_0=\lambda-\varepsilon$. [given, construct, algebra]

1.2 On continuous paths over $[0,T]$, define $$\mathcal T_s(s,u)(t)=e^{tA_s}a+\int_0^t e^{(t-v)A_s}R_s(s(v),u(v))\,dv,$$ $$\mathcal T_u(s,u)(t)=e^{(t-T)A_u}b-\int_t^T e^{(t-v)A_u}R_u(s(v),u(v))\,dv.$$ Their supremum product norm Lipschitz constant is at most $2\varepsilon/\lambda<1/8$, uniformly in $T$. The closed path ball of radius $4r$ maps into itself for $|a|,|b|<2r$: each integral has norm at most $8\varepsilon r/\lambda<r/2$, so each output component is smaller than $5r/2$. By [F2] there is a unique fixed point in that ball. Differentiating its integral equations gives the required solution. Every solution staying in the ball satisfies the same equations, so uniqueness holds in the asserted class, where the cutoff equals the original field. Invariance gives $|R_s(s,u)|\le\varepsilon|s|$ and $|R_u(s,u)|\le\varepsilon|u|$. Iterating the resulting scalar integral inequalities, or summing their exponential series, yields $$|s(t)|\le |a|e^{-\beta_0t},\qquad |u(t)|\le |b|e^{-\beta_0(T-t)}.$$ This proves the value estimate, since $\beta_0>\beta$. [F1, F2, step 1.1, construct, algebra]

2.1 For fixed $T$, the path derivative of $\mathcal T$ has norm below $1/8$, so the Neumann series for $I-D\mathcal T$ and [F2] give smooth dependence on $(a,b)$. Joint smoothness for $T>0$ follows on the fixed path space $C^0([0,1])$ after rescaling $t=T\theta$: the integral kernels define a smooth map in $T,a,b$ and the same invertibility applies at each positive $T$. The differential equation then gives joint smoothness also in physical time $t$. Derivatives at $t=0,T$ are interpreted using the local extension of this solution by the smooth cutoff field, so the ordinary chain rule is available at moving endpoints. [F2, step 1.1, step 1.2, algebra]

2.2 We first prove a uniform estimate for the linear mixed-boundary problem along this solution. Write $B_{ss}=D_sR_s$, $B_{su}=D_uR_s$, $B_{us}=D_sR_u$, $B_{uu}=D_uR_u$, evaluated along $(s(t),u(t))$. For $$\sigma'=A_s\sigma+B_{ss}\sigma+B_{su}\upsilon+g_s,\qquad \upsilon'=A_u\upsilon+B_{us}\sigma+B_{uu}\upsilon+g_u,$$ with $\sigma(0)=c_s$, $\upsilon(T)=c_u$, put $$P=\sup_{0\le t\le T}e^{\beta t}|\sigma(t)|,\quad Q=\sup_{0\le t\le T}e^{\beta(T-t)}|\upsilon(t)|,\quad G_s=\sup e^{\beta t}|g_s(t)|,\quad G_u=\sup e^{\beta(T-t)}|g_u(t)|.$$ Variation of constants bounds a diagonal contribution by $\varepsilon P/(\lambda-\beta)$ or $\varepsilon Q/(\lambda-\beta)$. For the stable cross contribution, steps 1.1--1.2 give $|B_{su}\upsilon|\le K|a|Qe^{-\beta T}e^{-(\beta_0-\beta)t}$. Multiplying its stable convolution by $e^{\beta t}$ bounds it by $K|a|Q/\lambda$: both $e^{-\beta(T-t)}$ and $e^{-(\beta_0-\beta)v}$ are at most one in the integral. Reverse time to bound the unstable cross contribution by $K|b|P/\lambda$. The forced integrals contribute $G_s/(\lambda-\beta)$ and $G_u/(\lambda-\beta)$. Hence $$P+Q\le |c_s|+|c_u|+\left(\frac{\varepsilon}{\lambda-\beta}+\frac{2Kr}{\lambda}\right)(P+Q)+\frac{G_s+G_u}{\lambda-\beta}.$$ The parenthesized coefficient is below $1/2$. The associated integral operator is therefore a contraction in the weighted sum norm, giving a unique solution and $$P+Q\le2\left(|c_s|+|c_u|+\frac{G_s+G_u}{\lambda-\beta}\right).$$ This estimate is uniform in $T,a,b$. [F1, F2, step 1.1, step 1.2, construct, algebra]

3.1 We prove by induction on $n$ that every jet $\partial_t^j\partial_T^m\partial_z^\nu(s,u)$ of total order $j+m+|\nu|\le n$, where $z=(a,b)$, has stable component bounded by $H_ne^{-\beta t}$ and unstable component bounded by $H_ne^{-\beta(T-t)}$, with $H_n$ independent of $T,z$. Order zero is step 1.2. Here is the axis estimate needed at every higher order. For each $h\ge1$, the multilinear derivative of $R_s$ restricted to $h$ unstable inputs vanishes at $s=0$, so its norm at $(s,u)$ is at most $K_h|s|$, where $K_h$ is a finite bound for the next derivative of the fixed cutoff. Every other stable-output block has at least one stable input. Thus when the inputs are lower-order jets having the inductive weights, each corresponding stable-output product is bounded by a constant times $e^{-\beta t}$: either a stable jet supplies that factor, or the coefficient $K_h|s|$ supplies it. The remaining factors are uniformly bounded because both exponential weights are at most one. The unstable-output products satisfy the reversed estimate by $R_u(s,0)=0$. Finite sums and the diagonal linear parts preserve these weights. [step 1.1, step 1.2, algebra]

3.2 Assume all jets of total order at most $n-1$ have these bounds. Establish first the jets of order $n$ containing a time derivative: differentiate $(s,u)'=X(s,u)$ by the remaining $n-1$ derivatives. Repeated chain and product rules express the result as a finite sum of $D^hX$ applied to jets whose total orders sum to $n-1$, hence all are already bounded. Step 3.1 gives the required weights, with constants depending only on $n$ and the fixed field. Next take a pure parameter derivative $W=\partial_T^m\partial_z^\nu(s,u)$ of order $m+|\nu|=n$. Its differentiated equation has the linear operator of step 2.2 applied to $W$ and a forcing consisting of the chain-rule terms with at least two input jets, each of order at most $n-1$. Step 3.1 bounds the weighted norms of this forcing independently of $T,z$. For $n=1$ the forcing is zero. The stable boundary value is $W_s(0)=\partial_T^m\partial_z^\nu a$, a constant of norm at most one or zero. Differentiating $u(T;T,z)=b$ gives the unstable boundary equation $$W_u(T)=\partial_T^m\partial_z^\nu b-\sum_{h=1}^{m}\binom{m}{h}\,\partial_t^h\partial_T^{m-h}\partial_z^\nu u(T;T,z).$$ For $m=0$ the sum is empty. Each term in the sum has total order $n$ and contains a time derivative, so was bounded in the first part of this step; at $t=T$ its unstable weight is one. The remaining boundary term is a constant of norm at most one or zero. Applying step 2.2 therefore bounds the weighted norm of $W$ by a constant independent of $T,z$. Increasing $H_n$ to cover the finitely many coordinate jets completes the induction. [step 2.1, step 2.2, step 3.1, algebra]

4.1 A coordinate derivative $\partial_T^m\partial_z^\nu\alpha_T$ is the unstable component of the pure parameter jet at $t=0$, so step 3.2 bounds it by $H_{m+|\nu|}e^{-\beta T}$. For $\zeta_T=s(T;T,z)$ the moving-endpoint rule gives $$\partial_T^m\partial_z^\nu\zeta_T=\sum_{h=0}^{m}\binom{m}{h}\,\partial_t^h\partial_T^{m-h}\partial_z^\nu s(T;T,z).$$ Every term has the stable endpoint weight $e^{-\beta T}$. There are finitely many terms and finitely many coordinate derivatives of order at most $N$, so enlarging a constant $C_N$ proves all asserted endpoint derivative estimates. Summing coordinate estimates also proves the first boundary-data operator-norm estimate. [step 3.2, algebra]

4.2 Under $T=1/\rho$, the chain rule uses $\partial_\rho=-\rho^{-2}\partial_T$. For $m\ge1$, its $m$-fold iteration is a finite sum of terms $c_{m,h}\rho^{-(m+h)}\partial_T^h$, with $1\le h\le m$; this follows by differentiating each such term once. Therefore every mixed derivative in $(\rho,z)$ of either transformed endpoint map is bounded by a finite sum of powers of $\rho^{-1}$ times $C_Ne^{-\beta/\rho}$. These bounds tend to zero uniformly in $z$ as $\rho\downarrow0$. Define both maps to be zero also for $\rho\le0$. Their derivatives from the positive side extend continuously by zero at every order. To see these are the derivatives of the extended maps, induct on order: for a $\rho$ derivative the difference quotient of the preceding derivative tends to zero by the same bound divided by $\rho$, and derivatives tangent to the $z$ variables at $\rho=0$ are derivatives of the identically zero boundary function. The extended derivatives are continuous uniformly in a neighbourhood of every boundary-data point. This proves smoothness and flatness, including all mixed derivatives. [step 4.1, algebra] ∎
