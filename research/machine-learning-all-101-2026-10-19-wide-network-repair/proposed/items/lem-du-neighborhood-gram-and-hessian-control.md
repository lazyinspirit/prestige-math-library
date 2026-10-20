---
id: lem-du-neighborhood-gram-and-hessian-control
kind: lemma
title: "Parameter-ball control of the last-layer Gram and loss Hessian"
status: draft
origin: pipeline
dependency_level: 2
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-du-overparameterized-network-architectures-and-gram-kernels, thm-shared-parameter-backpropagation-gradient-formula, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-axiom-of-choice, def-dependent-choice, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "This deterministic estimate assumes fixed real parameters and bounds, and constructs no probability law; it is choice-free."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Du, Lee, Li, Wang and Zhai, Gradient Descent Finds Global Minima of Deep Neural Networks, Appendices B, C, E and G"
      url: "https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf"
---

## Statement

Fix finite real parameters obeying either Du architecture recurrence, with all parameters equipped with the Euclidean norm (Frobenius norm on each matrix block). At a fixed initialization assume all hidden feature norms are at most $B_x$, all matrices $W^{(h)}(0)$ with $h\ge2$ have operator norm at most $B_w\sqrt m$, $\|a(0)\|_2\le B_a\sqrt m$, $\|a(0)\|_4\le B_4m^{1/4}$, and all backward feature derivatives $b_{i,h}(0)=\nabla_{x_i^{(h)}}f_i$ have coordinate maxima at most $B_bM$, where $M\ge1$. For fully connected networks allow $B_x,B_b\le A_0^H$ for a fixed $A_0\ge2$, while $B_w,B_a,B_4$ are fixed independent of $H$. There are $A\ge2,C\ge1$ depending only on $A_0$, these fixed bounds and the activation, with the following bounds; write $T=A^H$. In the residual case the constants depend also on fixed $c_{\rm res}$, and every $T$ below is replaced by a fixed $C$ independent of $H$. Uniformly on any parameter ball $\|\theta-\theta_0\|\le D$ with $D/\sqrt m\le c/T$ (fully connected) or $D/\sqrt m\le c$ (residual),

$$\max_{i,h}\|x_i^{(h)}(\theta)-x_i^{(h)}(\theta_0)\|\le TD/\sqrt m,\qquad \|J(\theta)\|_{\rm op}\le T\sqrt n,$$

$$\max_i\|\nabla^2 f_i(\theta)\|_{\rm op}\le \frac{TM(1+D)}{\sqrt m},\qquad \|J_H(\theta)J_H(\theta)^T-J_H(\theta_0)J_H(\theta_0)^T\|_{\rm op}\le\frac{TnD}{\sqrt m}.$$

In the residual last inequality the upper bound is $CnD/(H^2\sqrt m)$ for $H\ge2$. The residual first-layer and output-vector derivatives are bounded without a factor $1/H$. Consequently, if $r_0=u(\theta_0)-y$ and $L=\frac12\|u-y\|^2$, the loss Hessian on the ball satisfies

$$\|\nabla^2L\|_{\rm op}\le Tn+\frac{T\sqrt n\,(\|r_0\|+T\sqrt nD)M(1+D)}{\sqrt m}.$$

The constants in this last bound can again be fixed independent of $H$ for residual networks. For any segment from $\theta$ to $\theta+h$ contained in the ball, its output Taylor remainder satisfies

$$\|u(\theta+h)-u(\theta)-J(\theta)h\|\le \frac{T\sqrt n M(1+D)}{2\sqrt m}\|h\|^2,$$

with $T$ replaced by fixed $C$ in the residual case.

## Statement references

[Du et al., parameter perturbation and gradient arguments B.3–B.7 and C.3–C.7](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf)

## Facts & Assumptions

**Given:** The deterministic initialization bounds, the architecture, the parameter ball, and fixed activation constants $|\sigma(0)|\le B$, $|\sigma'|\le L$, $|\sigma''|\le\beta$.

[F1] The architectures and scalings are defined locally. [[def-du-overparameterized-network-architectures-and-gram-kernels]]

[F2] The chain rule gives the forward variations and backward feature derivatives of the finite network. [[thm-shared-parameter-backpropagation-gradient-formula]]

## Proof

1.1 Write $z_h=W_hx_{h-1}$ and $s_1=\sqrt{c_\sigma}$ in both architectures, $s_h=\sqrt{c_\sigma}$ for fully connected $h\ge2$, and $s_h=c_{\rm res}/H$ for residual $h\ge2$. A layer has feature Jacobian $P_h=(s_h/\sqrt m)\operatorname{diag}(\sigma'(z_h))W_h$ in the fully connected case, and $P_h=I+(s_h/\sqrt m)\operatorname{diag}(\sigma'(z_h))W_h$ in residual layers $h\ge2$. Within the stated ball, $\|W_h\|\le(B_w+D/\sqrt m)\sqrt m$. Products of consecutive $P_h$, $h\ge2$, therefore have norm at most $A^H$ in the fully connected case and $\prod_h(1+C/H)\le e^C$ in the residual case. All estimates below use only $h\ge2$ for matrix operator norms; the input is fixed. [F1, F2, given, algebra]

2.1 Let $e_h=\|x_h(\theta)-x_h(\theta_0)\|$. Lipschitz continuity gives $e_1\le\sqrt{c_\sigma}LD/\sqrt m$. For fully connected layers, $e_h\le C e_{h-1}+CA_0^H D/\sqrt m$; for residual layers it gives $e_h\le(1+C/H)e_{h-1}+CD/(H\sqrt m)$, using the fixed upper feature bound in the residual case and the initial exponential envelope in the fully connected case. Summing the geometric recurrences gives $e_h\le TD/\sqrt m$ in the first case and $e_h\le CD/\sqrt m$ in the second. The imposed smallness of $D/\sqrt m$ keeps all feature norms in the required bounds and justifies the recurrences successively. Also $\|z_h(\theta)-z_h(\theta_0)\|\le TD$ or $CD$, since it is bounded by $\|W_h(\theta)\|e_{h-1}+D\|x_{h-1}(\theta_0)\|$ for $h\ge2$, and by $D$ for $h=1$. [F1, step 1.1, algebra]

3.1 For a unit parameter direction $v$, let $\xi_h=D x_h[v]$. At the first layer $\|\xi_1\|\le C\|v_{W_1}\|/\sqrt m$. Subsequent layers obey $\xi_h=P_h\xi_{h-1}+(s_h/\sqrt m)\operatorname{diag}(\sigma'(z_h))v_{W_h}x_{h-1}$. The product bounds in step 1.1, the feature bounds in step 2.1, and Cauchy–Schwarz over layer blocks give $\max_h\|\xi_h\|\le T/\sqrt m$ or $C/\sqrt m$. For the residual case use $\sum_{h\ge2}s_h\|v_{W_h}\|\le c_{\rm res}(\sum_{h\ge2}\|v_{W_h}\|^2)^{1/2}/\sqrt H\le C$, retaining the separate first-layer term. Thus $\|D z_h[v]\|\le T$ or $C$, uniformly in $h$. Since $Df_i[v]=v_a^Tx_H+a^T\xi_H$ and $\|a\|\le C\sqrt m$, each output gradient has norm at most $T$ or $C$, proving $\|J\|\le T\sqrt n$ or $C\sqrt n$. This explicitly retains the output and first-layer terms with no $1/H$ bound. [F1, F2, step 1.1, step 2.1, algebra]

3.2 Put $d_h=b_h(\theta)-b_h(\theta_0)$. The backward recurrence is $b_{h-1}=P_h^Tb_h$, with $d_H=a-a_0$. Decompose its difference as $P_h(\theta)^Td_h+(P_h(\theta)-P_h(\theta_0))^Tb_h(\theta_0)$. The latter is the sum of a weight-difference term bounded by $Ts_hD$ (respectively $Cs_hD$) and a gate-difference term bounded by $Cs_h B_bM\|z_h(\theta)-z_h(\theta_0)\|$, because $\|\operatorname{diag}(\sigma'(z_h)-\sigma'(z_{h,0}))b_{h,0}\|\le\beta B_bM\|z_h-z_{h,0}\|$. Summing the backward recurrence with the product bounds gives $\|d_h\|\le TM D$ or $CM D$. Hence $\|b_h(\theta)\|_\infty\le TM(1+D)$ or $CM(1+D)$. The crude $\ell_2$ bound $\|b_h(\theta)\|_2\le T\sqrt m$ or $C\sqrt m$ follows separately from step 1.1 and $\|a\|_2\le C\sqrt m$. [F2, step 1.1, step 2.1, algebra]

3.3 For the last-hidden-layer Gram, put $X_i=x_i^{(H-1)}$, $Z_i=W_HX_i$ and $\gamma=c_\sigma$ or $c_{\rm res}^2/H^2$. Direct differentiation gives $G_{H,ij}=\gamma\langle X_i,X_j\rangle m^{-1}\sum_ra_r^2\sigma'(Z_{i,r})\sigma'(Z_{j,r})$. Subtract its initialized version in three parts: feature-inner-product change, derivative-gate change with $a_0^2$, and output-weight-square change. Step 2.1 bounds the first part by $T D/\sqrt m$ or $CD/\sqrt m$ before multiplying by $\gamma$. For the second part, Cauchy–Schwarz gives $m^{-1}\sum_ra_{0,r}^2|\Delta Z_{i,r}|\le m^{-1}\|a_0\|_4^2\|\Delta Z_i\|_2\le C\|\Delta Z_i\|_2/\sqrt m$; multiply by $\beta L$, and use step 2.1. For the third part, $m^{-1}\sum_r|a_r^2-a_{0,r}^2|\le m^{-1}\|a-a_0\|_2(\|a\|_2+\|a_0\|_2)\le CD/\sqrt m$. Feature norms and $|\sigma'|\le L$ bound all remaining factors. The entry error is consequently at most $TD/\sqrt m$ or $CD/(H^2\sqrt m)$. The operator norm is at most $n$ times this entry bound. [F1, F2, step 2.1, algebra]

4.1 For two unit parameter directions $v,w$, twice differentiating the output gives the mixed output-weight terms $v_a^TDx_H[w]+w_a^TDx_H[v]$, and the sum over layers of $\frac{s_h}{\sqrt m}b_h^T\left(\operatorname{diag}(\sigma''(z_h))(Dz_h[v]\odot Dz_h[w])+\operatorname{diag}(\sigma'(z_h))(v_{W_h}Dx_{h-1}[w]+w_{W_h}Dx_{h-1}[v])\right).$ This identity follows by differentiating every primitive twice and propagating each resulting second-order term through its downstream Jacobians; the linear skip has zero second derivative. The coordinate-product inequality $\|p\odot q\|_1\le\|p\|_2\|q\|_2$, steps 3.1–3.2, and $\sum_hs_h\le CH$ or $C$ bound the first part by $TM(1+D)/\sqrt m$ or $CM(1+D)/\sqrt m$. The terms involving $v_{W_h}Dx_{h-1}[w]$ use the $\ell_2$ backward bound and $\|Dx_{h-1}[w]\|\le T/\sqrt m$ or $C/\sqrt m$; summing with Cauchy–Schwarz over matrix blocks gives the same bound. The output-weight mixed terms are at most $T/\sqrt m$ or $C/\sqrt m$. This proves the output-Hessian bound, with polynomial factors in $H$ absorbed into $A^H$ only for the fully connected case. [F1, F2, step 3.1, step 3.2, algebra]

5.1 The identity $\nabla^2L=J^TJ+\sum_i r_i\nabla^2f_i$ gives $\|\nabla^2L\|\le\|J\|^2+\sqrt n\|r\|\max_i\|\nabla^2f_i\|$. Integrating the Jacobian along the straight segment to initialization gives $\|r\|\le\|r_0\|+T\sqrt nD$ or $\|r_0\|+C\sqrt nD$. Substitution of steps 3.1 and 4.1 proves the claimed loss-Hessian bound, after enlarging $A,C$ to absorb squares of fixed exponential envelopes. For each coordinate the integral Taylor formula is $f_i(\theta+h)-f_i(\theta)-Df_i(\theta)h=\int_0^1(1-t)D^2f_i(\theta+th)[h,h]\,dt$. Step 4.1 bounds its absolute value by $TM(1+D)\|h\|^2/(2\sqrt m)$ or the corresponding residual constant. Summing coordinate squares gives the stated vector Taylor bound. [step 3.1, step 4.1, algebra] ∎  