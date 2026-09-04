---
id: thm-riesz-thorin-interpolation
kind: theorem
title: "Riesz-Thorin interpolation theorem"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-l-p-norm-recovery-by-unit-l-q-pairings, thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p, thm-riesz-fischer-completeness-of-l-p]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 6.27"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 24.2"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be measure spaces. Let
$1\le p_0,p_1<\infty$, let $1<q_0,q_1<\infty$, let $0<\theta<1$, and define
$$\frac1{p_\theta}:=\frac{1-\theta}{p_0}+\frac{\theta}{p_1}, \qquad \frac1{q_\theta}:=\frac{1-\theta}{q_0}+\frac{\theta}{q_1},$$
with the convention $1/\infty:=0$.

Suppose $T$ is a linear operator on the finite simple functions of finite
measure support on $X$, and suppose
$$\|Tf\|_{q_0}\le M_0\|f\|_{p_0}, \qquad \|Tf\|_{q_1}\le M_1\|f\|_{p_1}$$
for every such $f$. Then $T$ extends uniquely to a bounded linear operator
$$\widetilde T:L^{p_\theta}(\mu)\to L^{q_\theta}(\nu)$$
satisfying
$$\|\widetilde T f\|_{q_\theta}\le M_0^{1-\theta}M_1^\theta\|f\|_{p_\theta} \qquad(f\in L^{p_\theta}(\mu)).$$

## Facts & Assumptions

**Given:** The operator $T$ on finite simple functions of finite measure support, endpoint bounds with constants $M_0,M_1$, and a parameter $0<\theta<1$.

[L1] For finite $p$, simple functions with finite-measure support are dense in $L^p$. ([[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]])

[L2] For $1\le q<\infty$, the $L^q$ norm is the supremum of pairings against unit $L^{q'}$ functions. ([[cor-l-p-norm-recovery-by-unit-l-q-pairings]])

[L3] Each $L^q$ with $1\le q\le\infty$ is complete. ([[thm-riesz-fischer-completeness-of-l-p]])

## Proof

**Proof technique:** direct.

1.1 First assume that $f$ and $g$ are finite simple functions of finite support [L1, L2, given, choose] on $X$ and $Y$, respectively, with $g$ chosen from $L^{q_\theta'}(\nu)$ and $\|g\|_{q_\theta'}=1$. Write $$f=\sum_{j=1}^m a_j\mathbf{1}_{E_j}, \qquad g=\sum_{k=1}^\ell b_k\mathbf{1}_{F_k},$$ with the sets $E_j,F_k$ pairwise disjoint and of finite measure. [L1, L2, given, choose]

2.1 Define the analytic families [step 1.1, construct, algebra] $$f_z:=\sum_{j=1}^m \alpha_j\,|a_j|^{p_\theta((1-z)/p_0+z/p_1)}\mathbf{1}_{E_j},$$ $$g_z:=\sum_{k=1}^\ell \beta_k\,|b_k|^{q_\theta'((1-z)/q_0'+z/q_1')}\mathbf{1}_{F_k},$$ where $\alpha_j=a_j/|a_j|$ and $\beta_k=b_k/|b_k|$ when the coefficient is nonzero and $0$ otherwise. Then $f_\theta=f$ and $g_\theta=g$. For real $t$, direct calculation on each simple coefficient gives $$\|f_{it}\|_{p_0}=\|f\|_{p_\theta}^{p_\theta/p_0}, \qquad \|f_{1+it}\|_{p_1}=\|f\|_{p_\theta}^{p_\theta/p_1},$$ and likewise $$\|g_{it}\|_{q_0'}=\|g\|_{q_\theta'}^{q_\theta'/q_0'}=1, \qquad \|g_{1+it}\|_{q_1'}=\|g\|_{q_\theta'}^{q_\theta'/q_1'}=1.$$ [step 1.1, construct, algebra]

3.1 Put [step 2.1, given, algebra] $$\Phi(z):=\int_Y (Tf_z)(y)\,g_z(y)\,d\nu(y).$$ Because $f_z$ and $g_z$ are finite linear combinations of exponentials in $z$, $\Phi$ is continuous on the closed strip $S=\{z\in\mathbb C:0\le\operatorname{Re}z\le1\}$ and holomorphic on its interior. For real $t$, the endpoint bounds and Holder give $$|\Phi(it)|\le M_0\|f_{it}\|_{p_0}\|g_{it}\|_{q_0'} \le M_0\|f\|_{p_\theta},$$ $$|\Phi(1+it)|\le M_1\|f_{1+it}\|_{p_1}\|g_{1+it}\|_{q_1'} \le M_1\|f\|_{p_\theta}.$$ [step 2.1, given, algebra]

4.1 Fix $\delta>0$ and define [step 3.1, construct, algebra] $$\Psi_\delta(z):=\Phi(z)(M_0+\delta)^{z-1}(M_1+\delta)^{-z}.$$ By step 3.1, $|\Psi_\delta|$ is at most $1$ on the two boundary lines of the strip. Multiplying once more by $$\exp(\varepsilon(z^2-1))$$ and applying the maximum-modulus principle on large rectangles inside the strip shows that $|\Psi_\delta(z)|\le1$ throughout $S$. Evaluating at $z=\theta$ and letting first $\varepsilon\downarrow0$ and then $\delta\downarrow0$ yields $$|\Phi(\theta)|\le M_0^{1-\theta}M_1^\theta\|f\|_{p_\theta}.$$ [step 3.1, construct, algebra]

5.1 Since $\Phi(\theta)=\int (Tf)g\,d\nu$, step 4.1 gives [L1, L2, step 4.1, algebra] $$\left|\int (Tf)g\,d\nu\right| \le M_0^{1-\theta}M_1^\theta\|f\|_{p_\theta}$$ for every unit $g\in L^{q_\theta'}(\nu)$ that is finite simple with finite support. By density [L1] and norm recovery [L2], it follows that $$\|Tf\|_{q_\theta}\le M_0^{1-\theta}M_1^\theta\|f\|_{p_\theta}$$ for every finite simple $f$ of finite support. [L1, L2, step 4.1, algebra]

6.1 Now let $f\in L^{p_\theta}(\mu)$. By [L1], choose finite simple functions [L1, L3, step 5.1, algebra] $f_n$ of finite support with $f_n\to f$ in $L^{p_\theta}(\mu)$. Step 5.1 makes $(Tf_n)$ Cauchy in $L^{q_\theta}(\nu)$, so [L3] gives a limit $h\in L^{q_\theta}(\nu)$ with $$\|h-Tf_n\|_{q_\theta}\to0.$$ If $(g_n)$ is another such approximating sequence for $f$, then step 5.1 applied to $f_n-g_n$ shows $$\|Tf_n-Tg_n\|_{q_\theta}\le M_0^{1-\theta}M_1^\theta\|f_n-g_n\|_{p_\theta}\to0,$$ so the limit $h$ is independent of the chosen approximation. Define $$\widetilde T f:=h.$$ Passing to the limit in step 5.1 yields $$\|\widetilde T f\|_{q_\theta}\le M_0^{1-\theta}M_1^\theta\|f\|_{p_\theta}.$$ [L1, L3, step 5.1, algebra]

7.1 The definition in step 6.1 extends $T$, because a constant approximating [step 6.1, algebra] sequence may be used when $f$ is already finite simple of finite support. Applying step 6.1 to $f+g$ and to $cf$ shows that $\widetilde T$ is linear, since linearity holds termwise on every approximating sequence. If $S$ is any other bounded linear extension of $T$ to $L^{p_\theta}(\mu)$, then for every $f\in L^{p_\theta}(\mu)$ and every approximating sequence $(f_n)$ from step 6.1, $$\|Sf-\widetilde T f\|_{q_\theta}\le \|S(f-f_n)\|_{q_\theta} +\|\widetilde T(f_n-f)\|_{q_\theta}\to0,$$ so $S=\widetilde T$. [step 6.1, algebra]

8.1 Steps 5.1, 6.1, and 7.1 prove the interpolated bounded extension theorem. [step 5.1, step 6.1, step 7.1] ∎
