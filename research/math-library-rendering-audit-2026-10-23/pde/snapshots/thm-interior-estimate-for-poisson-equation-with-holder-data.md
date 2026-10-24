---
id: thm-interior-estimate-for-poisson-equation-with-holder-data
kind: theorem
title: Interior estimate for the Poisson equation with Hölder data
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [cor-mean-value-theorem, def-countable-choice, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-newtonian-potential, lem-smooth-bump-between-concentric-euclidean-balls, lem-sphere-and-ball-measures-scale, thm-chain-rule-for-total-derivatives, thm-interior-derivative-estimates-for-harmonic-functions, thm-newtonian-potential-for-holder-data-is-classical]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4, printed pp. 28–34, and §§8.1–8.3, printed pp. 139–146, local Schauder route via the Newtonian potential"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 44–50, Green representation and interior regularity"
verification:
  audited: 2026-10-02
---

## Statement

Assume Countable Choice, $n\ge2$ and $0<\alpha<1$. Let $u\in C^2(B_r(a))\cap L^\infty(B_r(a))$ and let $f\in C^{0,\alpha}(B_r(a))$ have finite Hölder seminorm, with $-\Delta u=f$ pointwise on $B_r(a)$. Then $u\in C^{2,\alpha}(B_{r/2}(a))$ and
$$\|u\|^*_{2,\alpha;B_{r/2}(a)}\le C_{n,\alpha}\Bigl(\|u\|_{\infty;B_r(a)}+r^2\|f\|_{\infty;B_r(a)}+r^{2+\alpha}[f]_{0,\alpha;B_r(a)}\Bigr),$$
with $C_{n,\alpha}$ independent of $r$, $a$, $u$ and $f$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, $0<\alpha<1$, a centre $a\in\mathbb R^n$, a radius $r>0$, a function $u\in C^2(B_r(a))\cap L^\infty(B_r(a))$ and $f\in C^{0,\alpha}(B_r(a))$ with $-\Delta u=f$ pointwise and $\|f\|_{0,\alpha;B_r(a)}^*<\infty$.

[F1] The local Hölder and scaled $C^{2,\alpha}$ quantities are $[f]_{0,\alpha;B}:=\sup_{x\ne y}|f(x)-f(y)|/|x-y|^\alpha$ and $\|w\|^*_{2,\alpha;B}=\sum_{j=0}^2\rho^j\max_{|\gamma|=j}\sup_B|D^\gamma w|+\rho^{2+\alpha}\max_{|\gamma|=2}[D^\gamma w]_{0,\alpha;B}$ on a ball $B$ of radius $\rho$; under the scaling $v(z)=w(a+\rho z)$ one has $\|v\|^*_{2,\alpha;B_1(0)}=\|w\|^*_{2,\alpha;B_\rho(a)}$ ([[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]).

[F2] The Newtonian potential is $N G(x)=\int_{\mathbb R^n}\Phi(x-y)G(y)dy$ ([[def-newtonian-potential]]).

[F3] For $0<\alpha<1$ and $G\in C_c^{0,\alpha}(\mathbb R^n;\mathbb C)$ with finite global seminorm, the Newtonian potential $w=N G$ is $C^2$ with $-\Delta w=G$, its second derivatives are locally $\alpha$-Hölder, and for every compact $K$ the $C^{2,\alpha}$ size of $w$ on $K$ is bounded by a constant times $\|G\|_{C^{0,\alpha}}=\sup|G|+[G]_{\alpha;\mathbb R^n}$ ([[thm-newtonian-potential-for-holder-data-is-classical]]).

[F4] For $0<\rho<R$ there is a smooth $\eta:\mathbb R^n\to[0,1]$ with $\eta=1$ on $\overline B_\rho(0)$ and $\operatorname{supp}\eta\subseteq B_R(0)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F5] If $u$ is harmonic on an open set containing $\overline{B_R(y)}$, then $|D^\gamma u(y)|\le C_{n,\gamma}R^{-n-|\gamma|}\int_{B_R(y)}|u|$ for every multi-index $\gamma$ ([[thm-interior-derivative-estimates-for-harmonic-functions]]).

[F6] $|B_\rho|=\omega_{n-1}\rho^n/n$ ([[lem-sphere-and-ball-measures-scale]]).

[F7] The Laplacian is $\Delta=\sum_i\partial_i\partial_i$ ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F8] The chain rule computes derivatives of compositions ([[thm-chain-rule-for-total-derivatives]]).

[F9] The real mean value theorem applies to a real-valued function continuous on a segment and differentiable in its interior ([[cor-mean-value-theorem]]).

[F10] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F10]. Rescale to the unit ball: put $v(z):=u(a+rz)$ and $F(z):=r^2f(a+rz)$ for $z\in B_1(0)$. Differentiating twice with the chain rule [F8] and Laplacian convention [F7] gives $\Delta v(z)=r^2(\Delta u)(a+rz)=-r^2f(a+rz)=-F(z)$, so $-\Delta v=F$ pointwise on $B_1(0)$; moreover $\|v\|_{\infty;B_1(0)}=\|u\|_{\infty;B_r(a)}$, $\|F\|_{\infty;B_1(0)}=r^2\|f\|_{\infty;B_r(a)}$ and $[F]_{0,\alpha;B_1(0)}=r^{2+\alpha}[f]_{0,\alpha;B_r(a)}$ by [F1]. [given, F1, F7, F8, algebra]

2.1 Cutoff. By [F4] fix a smooth $\eta:\mathbb R^n\to[0,1]$ with $\eta=1$ on $\overline B_{3/4}(0)$ and $\operatorname{supp}\eta\subseteq B_{7/8}(0)$, and let $G:=\eta F$ on $B_{7/8}(0)$, extended by $0$ to all of $\mathbb R^n$. Then $G$ is continuous and compactly supported, and its global Hölder seminorm satisfies $[G]_{\alpha;\mathbb R^n}\le C_{n,\alpha}\bigl(\|F\|_{\infty;B_1(0)}+[F]_{0,\alpha;B_1(0)}\bigr)$: for $x,y$ in the support one uses $|G(x)-G(y)|\le|\eta(x)||F(x)-F(y)|+|\eta(x)-\eta(y)||F(y)|$ and the smoothness of the fixed cutoff, while if one point lies outside the support the estimate follows from $|G|\le\|F\|_\infty$, the vanishing of $\eta$ at the support boundary and $|x-y|^\alpha\ge|x-y|$ for $|x-y|\le1$; the constant depends only on the fixed cutoff, hence only on $n$ and $\alpha$. [step 1.1, F4, algebra]

3.1 The Newtonian potential. Put $w:=N G$ using [F2]; by [F3] the potential is $C^2$ on $\mathbb R^n$ with $-\Delta w=G$, and on the compact set $K:=\overline B_{3/4}(0)$ its size is controlled: $\sum_{j=0}^2\max_{|\gamma|=j}\sup_K|D^\gamma w|+\max_{|\gamma|=2}[D^\gamma w]_{0,\alpha;K}\le C_{n,\alpha}(\|G\|_\infty+[G]_{\alpha;\mathbb R^n})\le C'_{n,\alpha}\bigl(\|F\|_{\infty;B_1(0)}+[F]_{0,\alpha;B_1(0)}\bigr)$ by step 2.1 and the size bounds on $\eta$. [step 2.1, F2, F3, algebra]

4.1 The remainder is harmonic. Since $\eta=1$ on $\overline B_{3/4}(0)$, we have $G=F$ on $B_{3/4}(0)$, so $-\Delta(v-w)=-F+G=0$ there by steps 1.1 and 3.1; thus $h:=v-w$ is harmonic on $B_{3/4}(0)$. Moreover $\|h\|_{\infty;B_{3/4}(0)}\le\|v\|_{\infty;B_1(0)}+\|w\|_{\infty;B_{3/4}(0)}\le\|u\|_{\infty;B_r(a)}+C'_{n,\alpha}\bigl(\|F\|_{\infty;B_1}+[F]_{0,\alpha;B_1}\bigr)$ by step 3.1. [step 1.1, step 3.1, F7, algebra]

5.1 Estimates for the harmonic part. For every $y\in B_{1/2}(0)$, the closed ball $\overline B_{1/8}(y)$ lies in $B_{5/8}(0)\subset B_{3/4}(0)$, where $h$ is harmonic. Applying [F5] with radius $1/8$ gives, for every multi-index $\gamma$ with $|\gamma|\le3$, $|D^\gamma h(y)|\le C_{n,\gamma}8^{n+|\gamma|}\int_{B_{1/8}(y)}|h|\le C''_n\|h\|_{\infty;B_{3/4}}$, using [F6] to bound the ball's volume. If $|\gamma|=2$ and $x,y\in B_{1/2}(0)$, their segment stays in $B_{1/2}(0)$. Apply the real mean value theorem [F9] separately to the real and imaginary parts of $t\mapsto D^\gamma h(x+t(y-x))$ on $[0,1]$ (only the real part is needed when $h$ is real); the chain rule [F8] and the bounds just obtained for derivatives of order three then give $|D^\gamma h(x)-D^\gamma h(y)|\le C''_n|x-y|\,\|h\|_{\infty;B_{3/4}}$. Since $0<|x-y|<1$ implies $|x-y|\le|x-y|^\alpha$ for $0<\alpha<1$, this bounds $[D^\gamma h]_{0,\alpha;B_{1/2}}$ by $C''_n\|h\|_{\infty;B_{3/4}}$; the radius factors for the scaled norm on $B_{1/2}$ only change the constant. [step 4.1, F5, F6, F8, F9, algebra]

6.1 Combining on the half ball. By step 3.1 the derivatives of $w$ through order two are bounded on $\overline B_{1/2}(0)\subset K$ by $C'_{n,\alpha}(\|F\|_\infty+[F]_{0,\alpha})$, and its second derivatives have $\alpha$-Hölder seminorm on $\overline B_{1/2}(0)$ bounded by the same quantity; step 5.1 gives the corresponding bounds for $h$ by $C''_n\|h\|_{\infty;B_{3/4}}$, which step 4.1 bounds by $\|u\|_{\infty;B_r(a)}+C'_{n,\alpha}(\|F\|_\infty+[F]_{0,\alpha})$; summing, $\|v\|^*_{2,\alpha;B_{1/2}(0)}\le C_{n,\alpha}\bigl(\|u\|_{\infty;B_r(a)}+\|F\|_{\infty;B_1(0)}+[F]_{0,\alpha;B_1(0)}\bigr)$. [step 3.1, step 4.1, step 5.1, algebra]

7.1 Undoing the scaling. The scaling identity of [F1] applied to the sub-ball of radius $1/2$ gives $\|u\|^*_{2,\alpha;B_{r/2}(a)}=\|v\|^*_{2,\alpha;B_{1/2}(0)}$, and step 1.1 converts $\|F\|_\infty+[F]_{0,\alpha}$ into $r^2\|f\|_{\infty;B_r(a)}+r^{2+\alpha}[f]_{0,\alpha;B_r(a)}$; hence step 6.1 gives exactly the displayed estimate with a constant depending only on $n$ and $\alpha$. In particular $\|u\|^*_{2,\alpha;B_{r/2}(a)}<\infty$, so $u\in C^{2,\alpha}(B_{r/2}(a))$. [step 1.1, step 6.1, F1, algebra]

8.1 The quantitative estimate for the potential and the identity $-\Delta w=G$ come from [F3], and the estimate for the harmonic remainder comes from [F5]. Although [F3] also gives a cancellation formula for the singular Hessian, the proof uses its stated $C^{2,\alpha}$ bound and does not differentiate $F$; neither the weak maximum principle nor a ball Dirichlet theorem is needed. [step 2.1, step 3.1, step 4.1, F3, F5] ∎
