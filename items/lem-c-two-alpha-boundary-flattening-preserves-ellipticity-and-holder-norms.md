---
id: lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms
kind: lemma
title: "$C^{2,\\alpha}$ boundary flattening preserves the nondivergence structure, ellipticity and Hölder norms"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 2
deps: [def-holder-spaces-c-k-alpha-and-their-scaled-norms, def-uniformly-elliptic-nondivergence-operator, def-bounded-c-k-domain-and-boundary-charts, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-ck-and-multi-index-notation-in-several-variables, cor-regular-level-set-local-graph-theorem]
sources:
  references:
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§3.1.1, the boundary flattening and the transformed coefficient matrix in the Schauder boundary estimate, printed pp. 92-93 and 105-107 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, the flattening of a $C^{k,\\alpha}$ boundary and the transformed operator, printed pp. 134-136 (read in full)"
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.8, the transformation of the operator under boundary charts, printed p. 151 (read in full)"
---

## Statement

Let $n\ge2$, $0<\alpha<1$ and let $\Omega$ be a bounded $C^{2,\alpha}$ domain. For every $x_0\in\partial\Omega$, after a rigid motion and possibly reversing the last coordinate, there are $r>0$ and $\varphi\in C^{2,\alpha}(Q'_r)$, $Q'_r=(-r,r)^{n-1}$, with $\varphi(0)=0$, $D\varphi(0)=0$, such that for $Q_r=Q'_r\times(-r,r)$ the shear $\Psi(y',y_n)=(y',y_n+\varphi(y'))$ is a diffeomorphism onto the patch $U:=\Psi(Q_r)$ and
$$\Psi(Q_r^+)=U\cap\Omega,\qquad \Psi(Q'_r\times\{0\})=U\cap\partial\Omega,$$
where $Q_r^+=Q'_r\times(0,r)$. In particular the chart is stated on its actual image patch; no equality with the intersection of a Euclidean ball and $\Omega$ is asserted. Composition with $\Psi$ gives equivalent $C^{2,\alpha}$ norms on the closures of $U\cap\Omega$ and $Q_r^+$, with constants depending on the chart. If $L=a^{ij}\partial_i\partial_j+b^i\partial_i+c$ has $C^{0,\alpha}$ coefficients on $U$, then its pullback under $v=u\circ\Psi$ is again nondivergence form with $C^{0,\alpha}$ coefficients. Its principal matrix is
$$\widetilde A(y)=D\Psi(y)^{-1}A(\Psi(y))D\Psi(y)^{-T},$$
so its ellipticity constants may be taken as $\lambda\|D\Psi\|_\infty^{-2}$ and $\Lambda\|D\Psi^{-1}\|_\infty^2$; the lower-order coefficients are given by the chain rule and have Hölder bounds controlled by the chart and original coefficient norms.

## Facts & Assumptions

**Given:** $n\ge2$, $0<\alpha<1$, a bounded $C^{2,\alpha}$ domain $\Omega$ in the graph sense, a boundary point $x_0\in\partial\Omega$, and a uniformly elliptic operator $L=a^{ij}\partial_i\partial_j+b^i\partial_i+c$ with $C^{0,\alpha}$ coefficients on a neighbourhood of $x_0$.

[F1] There are a rigid motion $R(p)=Qp+b$, a ball $B\subseteq\mathbb R^{n-1}$ and $h\in C^{2,\alpha}(B)$ with $R(\Omega\cap W)=R(W)\cap\{s<h(y)\}$ for a neighbourhood $W$ of $x_0$. For $F(y,s)=s-h(y)$ the gradient $(-Dh,1)$ is nonzero. The graph theorem [[cor-regular-level-set-local-graph-theorem]] reparametrizes its zero set over the tangent hyperplane; its derivative formula, followed by one differentiation, expresses the new first and second derivatives using those of $h$ and the inverse of a nonvanishing normal derivative. On a smaller compact patch that denominator is bounded away from zero. Products, inversion of the scalar denominator, and Lipschitz composition preserve the $\alpha$-Hölder bound of $D^2h$, so the new graph is $C^{2,\alpha}$. After translating and rotating the coordinates (a rigid motion), we may assume $x_0=0$, the graph passes through the origin and is tangent to $\{s=0\}$ there; the one-sided subgraph convention and the regularity class are unchanged. ([[def-bounded-c-k-domain-and-boundary-charts]], [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]])

[F2] A shear $\Psi(y',y_n)=(y',y_n+\varphi(y'))$ with $\varphi\in C^{2,\alpha}$ satisfies $J:=D\Psi=\begin{pmatrix}I&0\\D\varphi&1\end{pmatrix}$, $\det J=1$, and $J^{-1}=D\Psi^{-1}=\begin{pmatrix}I&0\\-D\varphi&1\end{pmatrix}$; it is a $C^{2,\alpha}$ diffeomorphism onto its image and its inverse has the same shear form with $-\varphi$. ([[def-ck-and-multi-index-notation-in-several-variables]], [[thm-chain-rule-for-total-derivatives]])

[F3] The chain rule gives, for $v=u\circ\Psi$, $\partial_jv(y)=\sum_k\partial_ku(\Psi(y))\partial_j\Psi_k(y)$ and $\partial_i\partial_jv(y)=\sum_{k,l}\partial_k\partial_lu(\Psi(y))\partial_i\Psi_k\partial_j\Psi_l+\sum_k\partial_ku(\Psi(y))\partial_i\partial_j\Psi_k$; for bounded $\alpha$-Hölder factors, subtracting the product values gives $[fg]_{0,\alpha}\le\|f\|_\infty[g]_{0,\alpha}+\|g\|_\infty[f]_{0,\alpha}$. Composition with a Lipschitz inner map $G$ gives $[f\circ G]_{0,\alpha}\le[f]_{0,\alpha}\operatorname{Lip}(G)^\alpha$, directly from $|G(x)-G(y)|\le\operatorname{Lip}(G)|x-y|$. Boundedness is preserved by composition and products. The shears here and their inverses are Lipschitz on their patches: bounded $D\varphi$ controls the difference of $\varphi$ at any two points of the convex base box. ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]])

[F4] $L$ is uniformly elliptic with constants $\lambda\le\Lambda$, that is $\lambda|\xi|^2\le a^{ij}(x)\xi_i\xi_j\le\Lambda|\xi|^2$ for all $\xi$ and almost every $x$; for a real matrix $T$, $|T\eta|\le\|T\||\eta|$ and $|T\eta|\ge\|T^{-1}\|^{-1}|\eta|$ whenever $T$ is invertible. ([[def-uniformly-elliptic-nondivergence-operator]])

## Proof

**Proof technique:** direct.

1.1 Straightening the boundary. By [F1] there is a rigid motion carrying $x_0$ to $0$ and the boundary near $x_0$ to a graph $s=h(y')$ over a ball $B$, with $\Omega$ on the side $s<h(y')$, $h(0)=0$ and $Dh(0)=0$; choose $r>0$ small enough that $\overline{Q'_r}\subset B$ and $\Psi(\overline{Q_r})\subset W$. All derivatives of the graph are then bounded and have the stated Hölder bounds on this smaller patch. Reverse the last coordinate, $z_n=-s$; then $\Omega$ is locally $\{z_n>-h(y')\}$, and with $\varphi:=-h$, $\varphi(0)=0$, $D\varphi(0)=0$ and $\varphi\in C^{2,\alpha}(B_r)$: the domain is locally the region above the graph of $\varphi$. [F1, algebra]

2.1 The shear is the chart. Let $\Psi(y',y_n)=(y',y_n+\varphi(y'))$; by [F2] it is a $C^{2,\alpha}$ diffeomorphism with $D\Psi=\left(\begin{smallmatrix}I&0\\D\varphi&1\end{smallmatrix}\right)$, $\det D\Psi=1$, $D\Psi^{-1}=\left(\begin{smallmatrix}I&0\\-D\varphi&1\end{smallmatrix}\right)$. For $(y',y_n)\in Q_r^+$ the image point has last coordinate $y_n+\varphi(y')>\varphi(y')$, hence lies above the graph and therefore in $\Omega$; conversely, if a point $(y',s)$ of the chart lies in $\Omega$, then $s>\varphi(y')$, so $y_n:=s-\varphi(y')\in(0,r)$ for $s$ in the chart box, and $(y',s)=\Psi(y',y_n)$. Hence $\Psi(Q_r^+)=U\cap\Omega$, and $y_n=0$ gives exactly the graph points, so $\Psi(Q'_r\times\{0\})=U\cap\partial\Omega$. [step 1.1, F1, F2, algebra]

3.1 Norm equivalence. By [F3], the chain rule expresses each derivative of $v=u\circ\Psi$ of order at most two as a finite sum of products of derivatives of $u\circ\Psi$ and derivatives of $\Psi$. For the top-order seminorm, $[D^2u\circ\Psi]_{0,\alpha;Q_r^+}\le [D^2u]_{0,\alpha;U\cap\Omega}\operatorname{Lip}(\Psi)^\alpha$, while the lower-order factor obeys $[Du\circ\Psi]_{0,\alpha;Q_r^+}\le \operatorname{diam}(Q_r^+)^{1-\alpha}\|D_y(Du\circ\Psi)\|_{L^\infty(Q_r^+)}\le C_\Psi\|D^2u\|_{L^\infty(U\cap\Omega)}$; the corresponding bound for $u\circ\Psi$ follows from $\|Du\|_\infty$. The derivatives $D\Psi$ are Lipschitz with constants controlled by $\|D^2\Psi\|_\infty$, and $D^2\Psi$ is $C^{0,\alpha}$, so the product seminorms are bounded by $C_\Psi\|u\|_{C^{2,\alpha}(U\cap\Omega)}$. Applying the same estimates to $\Psi^{-1}$ gives the reverse norm inequality. Thus the $C^{2,\alpha}$ norms on $U\cap\Omega$ and $Q_r^+$ are equivalent, with constants depending only on the chart. [step 2.1, F2, F3, algebra]

3.2 Pullback of the operator. Let $J:=D\Psi$, $u$ be $C^2$ on $U\cap\Omega$, and $v=u\circ\Psi$. The chain rule gives $D_yv=J^TD_xu$ and $D_y^2v=J^T(D_x^2u)J+\sum_k u_{x_k}(\Psi(y))D_y^2\Psi_k(y).$ Thus $D_xu=J^{-T}D_yv$ and $D_x^2u=J^{-T}\!\left(D_y^2v-\sum_k(J^{-T}D_yv)_kD_y^2\Psi_k\right)J^{-1}.$ Writing $A(y):=(a^{ij}(\Psi(y)))$, substitution into $Lu(\Psi(y))$ yields the transformed principal matrix $\widetilde A=J^{-1}AJ^{-T}$. More explicitly, the coefficient of $\partial_{y_m}v$ is $\widetilde b^m=\sum_i b^i(\Psi)(J^{-1})_{mi}-\sum_{a,b,k}\widetilde a^{ab}(J^{-T})_{km}\partial_{y_a y_b}\Psi_k,$ and the zero-order coefficient is $\widetilde c=c\circ\Psi$; the minus sign is the one from solving the Hessian identity for $D_x^2u$. By [F3] these coefficients are $C^{0,\alpha}$ on the compact patch with Hölder norms bounded in terms of the chart and the original coefficient norms, since $J^{-1}$ is $C^{1,\alpha}$ and $D^2\Psi$ is $C^{0,\alpha}$. [step 2.1, F2, F3, algebra]

4.1 Ellipticity. For $ξ\in\mathbb R^n$, set $\zeta=J^{-T}\xi$. Then $\widetilde A\xi\cdot\xi=A(\Psi)\zeta\cdot\zeta$. Since $|\zeta|\ge\|J\|_\infty^{-1}|\xi|$ and $|\zeta|\le\|J^{-1}\|_\infty|\xi|$, uniform ellipticity of $A$ gives $\lambda\|J\|_\infty^{-2}|\xi|^2\le\widetilde A\xi\cdot\xi\le\Lambda\|J^{-1}\|_\infty^2|\xi|^2.$ The matrix $\widetilde A=J^{-1}AJ^{-T}$ is symmetric because $A$ is symmetric. Hence the pullback is uniformly elliptic and the chart maps the boundary problem on $U\cap\Omega$ to a half-box problem on $Q_r^+$ without changing the nondivergence structure. [step 3.2, F2, F4, algebra] ∎

## Remarks

- The determinant of the shear is one, so the chart is volume preserving; the metric distortion is entirely in the coefficient transformation $\widetilde A$ and in the equivalent norms of step 3.1.
- The shear is defined on the box $Q_r$ and the identities in step 2.1 use only the local graph representation; no global parametrisation of $\partial\Omega$ is asserted.
