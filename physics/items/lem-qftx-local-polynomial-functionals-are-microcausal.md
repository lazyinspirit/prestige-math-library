---
id: lem-qftx-local-polynomial-functionals-are-microcausal
kind: lemma
title: Local polynomial functionals are microcausal
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-qftx-off-shell-local-polynomial-functionals
  - def-qftx-local-wavefront-set
  - def-qftx-wavefront-hadamard
  - def-qftx-polynomial-microcausal-functionals
dependency_roles:
  def-qftx-off-shell-local-polynomial-functionals: mathematical-premise
  def-qftx-local-wavefront-set: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
  def-qftx-polynomial-microcausal-functionals: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, full lecture notes
      url: https://arxiv.org/html/1208.1428
      locator: Section 4, equations (23)–(24), and Section 5.1, equations (52)–(53); the local Fourier proof for the finite-jet polynomial subclass is supplied here.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Section 2.1, printed pp. 7–9, wavefront covectors of local functionals and the future/past cone exclusion.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

For every $F\in\mathcal F_{\mathrm{loc}}^{\mathrm{poly}}(\mathbb M)$, every $\phi\in C^\infty(\mathbb M;\mathbb R)$ and every $r\ge1$, the kernel $F^{(r)}(\phi)$ satisfies
$$\operatorname{WF}(F^{(r)}(\phi))\subseteq N^*\Delta_r\setminus0,$$
where $\Delta_r=\{(x,\ldots,x):x\in\mathbb M\}$ and
$$N^*\Delta_r=\{(x,\ldots,x;\xi_1,\ldots,\xi_r):\xi_1+\cdots+\xi_r=0\}.$$
Consequently $F^{(r)}(\phi)$ avoids the all-future and all-past causal cotangent cones and $F$ belongs to $\mathcal F_{\mu c}^{\mathrm{poly}}(\mathbb M)$.

## Statement references

[[def-qftx-off-shell-local-polynomial-functionals]]

[[def-qftx-polynomial-microcausal-functionals]]

## Facts & Assumptions

**Given:** $F\in\mathcal F_{\mathrm{loc}}^{\mathrm{poly}}(\mathbb M)$, its finite-jet derivative kernels, and the $(-,+,+,+)$ metric and future time orientation.

[F1] [[def-qftx-off-shell-local-polynomial-functionals]]: each $F^{(r)}(\phi)$ is obtained by differentiating a finite polynomial in finitely many derivatives of $\phi$, with compactly supported smooth coefficients.

[F2] [[def-qftx-local-wavefront-set]]: a localized Fourier transform that is rapidly decreasing in some conic neighborhood of a cotangent direction excludes that direction from the wavefront set.

[F3] [[def-qftx-polynomial-microcausal-functionals]]: microcausality requires the wavefront set of every derivative kernel to avoid tuples all of whose entries are future causal, and tuples all of whose entries are past causal; zero entries are allowed but the tuple itself is nonzero.

[F4] [[def-qftx-wavefront-hadamard]]: the global wavefront set is the union of the local Fourier wavefront sets over all smooth charts, with covectors transported by the transpose chart differential. Future and past causal covectors are defined by metric duality from the two time-oriented causal cones for signature $(-,+,+,+)$.

## Proof

**Proof technique:** finite diagonal kernels and direct nonstationary-phase estimates in every ambient chart.

**Given:** [F1]–[F4].

1.1 Expand the finite polynomial in the definition of $F$ after substituting $\phi+\sum_jt_jh_j$ and take the coefficient of $t_1\cdots t_r$. Each resulting term is $\int a(x)\prod_{j=1}^{r}\partial^{\alpha_j}h_j(x)\,d^4x$, with $a\in C_c^\infty(\mathbb M)$. Write $X=(x_1,\ldots,x_r)$, $i(x)=(x,\ldots,x)$ and $A=\sum_j|\alpha_j|$. Its kernel is $u=(-1)^A\partial_{x_1}^{\alpha_1}\cdots\partial_{x_r}^{\alpha_r}[a(x_r)\prod_{j<r}\delta(x_j-x_r)]$: pairing it with a product test and using distributional differentiation gives the displayed integral. More generally its value on $v(X)|dX|$ is $\int a(x)(\partial_{x_1}^{\alpha_1}\cdots\partial_{x_r}^{\alpha_r}v)(i(x))\,d^4x$. Thus the complete kernel is a finite sum of finite derivatives of smooth compact diagonal distributions, supported on $\Delta_r$. This includes $r=1$, with the empty delta product equal to $1$, and gives the zero kernel above the finite polynomial degree. Derivatives of the relative deltas are retained; they cannot in general all be transferred to $a$. [F1, construct, algebra]

2.1 Fix an arbitrary smooth ambient chart $\psi:O\to V\subseteq\mathbb R^{4r}$, a point $q=i(x_0)\in O$, and a nonzero chart covector $\eta_0$ with $D(\psi\circ i)(x_0)^T\eta_0\ne0$. Put $f=\psi\circ i$ on $i^{-1}(O)$. By continuity, there are a relatively compact neighborhood $B$ of $x_0$, an open cone $\mathcal C$ about $\eta_0$, and $c>0$ such that $|Df(x)^T\eta|\ge c|\eta|$ on $\overline B\times\mathcal C$. Indeed the left side divided by $|\eta|$ is continuous in $x$ and $\eta/|\eta|$ and positive at $(x_0,\eta_0/|\eta_0|)$; restrict to a small closed ball and a small closed spherical cap contained in that positive neighborhood. Choose $\chi\in C_c^\infty(V)$ equal to one near $\psi(q)$, with $i^{-1}(\psi^{-1}(\operatorname{supp}\chi))\subset B$. Such a localization is obtained by taking a sufficiently small chart ball inside $\psi(O\cap\{X:x_r\in B\})$. Smooth plateaus in nested balls follow explicitly from $H(t)=0$ for $t\le0$, $H(t)=e^{-1/t}$ for $t>0$: for radii $0<b<R$, the ratio $H(R^2-|y-y_0|^2)/(H(R^2-|y-y_0|^2)+H(|y-y_0|^2-b^2))$ is one on the smaller ball and zero outside the larger, and is smooth because all derivatives of $H$ at zero vanish. No family of charts or localizations is selected. In the test-density convention underlying [F1]–[F2], put $J_\psi(X)=|\det D\psi(X)|$. For a summand $u$ from step 1.1 its chart Fourier pairing is
$$\langle u_\psi,\chi(y)e^{-2\pi i y\cdot\eta}|dy|\rangle=\int a(x)\left.\partial_X^\alpha\!\left[J_\psi(X)\chi(\psi(X))e^{-2\pi i\eta\cdot\psi(X)}\right]\right|_{X=i(x)}d^4x.$$
Here $\partial_X^\alpha$ denotes the finite ambient derivative from step 1.1. The absolute Jacobian is smooth since the chart determinant never vanishes. Repeated product and chain rules make this a finite sum $\int A_\beta(x,\eta)e^{-2\pi i\eta\cdot f(x)}d^4x$, where each amplitude is a polynomial in $\eta$ of degree at most $m:=|\alpha|$, with smooth coefficients supported in one compact $K\subset B$. The coefficients include every derivative of the Jacobian, localization and chart map. Consequently, for every integer $k\ge0$, their derivatives satisfy $\max_{|\gamma|\le k}\sup_x|\partial_x^\gamma A_\beta(x,\eta)|\le C_k(1+|\eta|)^m$. This follows by bounding the finitely many coefficient derivatives on $K$; no bound on a varying test function is asserted. [F1, F2, step 1.1, construct, algebra]

3.1 For $\eta\in\mathcal C$, $|\eta|\ge1$, set $\Phi_\eta(x)=\eta\cdot f(x)$, $b_\eta=\nabla\Phi_\eta/|\nabla\Phi_\eta|^2$, and $L_\eta=-(2\pi i)^{-1}b_\eta\cdot\nabla_x$. Then $L_\eta e^{-2\pi i\Phi_\eta}=e^{-2\pi i\Phi_\eta}$. Every derivative of $\nabla\Phi_\eta$ is bounded by a constant times $|\eta|$ on $\overline B$, while its squared norm is at least $c^2|\eta|^2$. Differentiating the quotient therefore gives $\sup_{\overline B}|\partial_x^\gamma b_\eta|\le C_\gamma|\eta|^{-1}$: equivalently write $b_\eta=|\eta|^{-1}b_{\eta/|\eta|}$, and differentiate the smooth rational expression on the compact base ball and closed spherical cap where its denominator is bounded below. The transpose for the bilinear integral is $L_\eta^t A=(2\pi i)^{-1}\operatorname{div}(b_\eta A)$. Compact support of each amplitude eliminates boundary terms, so $N$ integrations by parts give
$$\int A_\beta e^{-2\pi i\Phi_\eta}\,dx=\int (L_\eta^t)^N A_\beta\,e^{-2\pi i\Phi_\eta}\,dx,\qquad \left|\int A_\beta e^{-2\pi i\Phi_\eta}\,dx\right|\le C_N|\eta|^{m-N}.$$
For completeness, induction on $N$ expands $(L_\eta^t)^N A_\beta$ into finitely many terms, each a derivative of $A_\beta$ of order at most $N$ times $N$ factors that are derivatives of components of $b_\eta$ of orders at most $N$. The bounds of step 2.1 and the preceding quotient bounds give the estimate, and integration over a fixed rectangle containing $K$ supplies its finite volume factor. Integration by parts itself follows componentwise from the ordinary product rule and the fundamental theorem on that rectangle, with zero boundary products. For $|\eta|\le1$ the original finite polynomial amplitudes give a uniform integral bound directly. Given any requested decay power $p$, choose a finite integer $N\ge p+\max|\alpha|$ over the finitely many kernel terms; the finite sum of all kernel terms then has $(1+|\eta|)^p$ times its localized Fourier pairing bounded throughout $\mathcal C$. [F2, step 2.1, algebra]

4.1 If $q\notin\Delta_r$, a localization disjoint from the closed diagonal makes the kernel zero by step 1.1. At a diagonal point, steps 2.1–3.1 exclude every chart direction for which $Df(x_0)^T\eta\ne0$. The intrinsic covector represented by $\eta$ is $\xi=D\psi_q^T\eta$; the ordinary chain rule gives $Df(x_0)^T\eta=Di_{x_0}^T\xi=\sum_j\xi_j$. Thus, in every arbitrary ambient chart, the only possible singular directions annihilate the tangent to the diagonal. Taking the all-chart union in [F4]'s wavefront convention therefore proves precisely $\operatorname{WF}(F^{(r)}(\phi))\subseteq N^*\Delta_r\setminus0$. No chart-invariance theorem is invoked. For $r=1$, $i$ is the identity and $D\psi$ is invertible, so every nonzero direction has been excluded and the wavefront set is empty. [F2, F4, step 1.1, step 3.1, algebra]

5.1 At a diagonal point, if $\xi_1,\ldots,\xi_r$ are all future causal, their metric-dual time components have the same weak sign, and each nonzero causal covector has a strictly nonzero time component. Hence $\sum_j\xi_j=0$ forces every $\xi_j=0$; the same holds for the past cone. Step 4.1 therefore excludes every nonzero tuple in the forbidden cones of [F3]. The finite Taylor expansion of the original polynomial at $\phi=0$ gives its symmetric compact coefficient kernels $f_m=F^{(m)}(0)/m!$ (and its constant term), so it is also a polynomial functional in the kernel sense of [F3]. Its derivative kernels have the conormal bound just proved for every smooth $\phi$ and every $r\ge1$. This proves the asserted membership in $\mathcal F_{\mu c}^{\mathrm{poly}}(\mathbb M)$. All localizations, finite expansions and integrations above were constructed for a fixed chart and direction; this proof adds no choice principle. [F1, F3, F4, step 4.1, algebra] ∎

## Remarks

The proof uses the thin-diagonal support of local functional derivatives and the pointedness of each Minkowski causal cone. It does not impose the free field equation on $\phi$.
