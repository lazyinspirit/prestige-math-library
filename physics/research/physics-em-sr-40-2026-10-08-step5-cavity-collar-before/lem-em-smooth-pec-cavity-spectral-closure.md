---
id: lem-em-smooth-pec-cavity-spectral-closure
kind: lemma
domain: mathematics
title: "Spectral completeness of the curl form in a smooth PEC cavity"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 2
deps: [lem-em-symmetric-coercive-variational-solver, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-extension-theorem-for-bounded-smooth-domains, cor-first-green-identity-on-a-bounded-c-one-domain, def-compact-linear-operator, lem-em-dirichlet-resolvent-h-two-and-smooth-test-density, def-axiom-of-choice, thm-orthogonal-decomposition-by-a-closed-subspace, thm-hilbert-space-fourier-expansion, thm-of-square-roots, thm-sine-and-cosine-derivatives, def-countable-choice, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, thm-ftc-second-part, lem-em-mean-zero-coercivity-on-a-c-one-domain, def-bounded-c-k-domain-and-boundary-charts, cor-cauchy-schwarz-inequality-for-l-two, thm-dominated-convergence, def-laplacian-of-a-c2-function]
dependency_roles:
  lem-em-symmetric-coercive-variational-solver: mathematical-premise
  thm-spectral-theorem-for-compact-self-adjoint-operators: mathematical-premise
  thm-extension-theorem-for-bounded-smooth-domains: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  lem-em-dirichlet-resolvent-h-two-and-smooth-test-density: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  lem-em-mean-zero-coercivity-on-a-c-one-domain: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Dyatlov, Lecture notes for 18.155: distributions, elliptic regularity, and applications (MIT), Chapter 16 (spectral theorem for self-adjoint elliptic operators)"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Chapter 16 (spectral theorem for self-adjoint elliptic operators) as the contextual reference for the compact-resolvent spectral argument; the Gaffney identity, the trace-boundary estimate, the compactness argument and the divergence-preservation route are proved locally through the batch's published suppliers."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, as used by the complete variational, Sobolev-extension and compact-spectral suppliers. Let $\Omega\subset\mathbb R^3$ be a bounded $C^\infty$ domain. Define $H(\operatorname{curl})=\{u\in L^2(\Omega;\mathbb R^3):\operatorname{curl}u\in L^2\}$ and $H(\operatorname{div})=\{u\in L^2:\operatorname{div}u\in L^2\}$ with their graph norms, and let $X$ be the graph-norm closure in $H(\operatorname{curl})\cap H(\operatorname{div})$ of the smooth fields on the closure with $n\times u=0$; this is an explicit weak perfect-electric-conductor boundary class. Put $V=\{u\in X:\operatorname{div}u=0\}$ and $H=\overline{V}^{\,L^2}$. Then the curl form on $V$ has a complete orthonormal $L^2$ eigenbasis with nonnegative eigenvalues $\lambda_j$ of finite multiplicity tending to infinity whenever $H$ is infinite dimensional, and the zero eigenspace is finite dimensional and must be retained when the topology allows it. Each eigenfield $u_j\in V$ satisfies the full graph-class variational identity $\int_\Omega\operatorname{curl}u_j\cdot\operatorname{curl}v=\lambda_j\int_\Omega u_j\cdot v$ for every $v\in X$. The eigen equation is $\operatorname{curl}\operatorname{curl}u_j=\lambda_ju_j$ distributionally with the PEC trace, and for every explicitly chosen mathematical speed $v_{\mathrm{wave}}>0$ and every initial displacement $q_0\in V$ and velocity $q_1\in H$, the associated second-order wave has coefficients $a_j''+v_{\mathrm{wave}}^2\lambda_ja_j=0$ with those initial coefficients. Its displacement lies in $C(\mathbb R;V)$ and its velocity in $C(\mathbb R;H)$; finite modal sums converge respectively in $C(K;V)$ and $C(K;H)$ on every compact time interval $K$. The finite-dimensional $\lambda=0$ sector is retained with $a_j(t)=a_j(0)+ta_j'(0)$. This speed is a positive abstract mathematical parameter, not a physical constant or prerequisite. No identification with every maximal tangential-trace realisation, and no lossy, open or non-smooth-domain spectral claim, is made.

## Facts & Assumptions
**Given:** The Axiom of Choice; a bounded $C^\infty$ domain $\Omega$ with outward normal $n$ and bounded curvature on its compact boundary ([[def-bounded-c-k-domain-and-boundary-charts]]); the graph spaces, the closure $X$, $V$ and $H$ of the Statement.

[F1] **Coordinate integration by parts.** The scalar first Green identity ([[cor-first-green-identity-on-a-bounded-c-one-domain]]) with its solution argument equal to $x_j$ gives $\int_\Omega\partial_jv=\int_{\partial\Omega}v n_j$ for $C^1$ scalar $v$. Applying this to products of components gives the vector identities used below. In particular, for smooth fields on a bounded $C^1$ domain, $\int_\Omega(\operatorname{curl}u\cdot\operatorname{curl}v-u\cdot\operatorname{curl}\operatorname{curl}v)=\int_{\partial\Omega}(u\times\operatorname{curl}v)\cdot n\,dS$ and the analogous divergence identity ([[cor-first-green-identity-on-a-bounded-c-one-domain]]); the curl and divergence are those of the Euclidean cooordinates and $\Delta$ is the Euclidean Laplacian ([[def-laplacian-of-a-c2-function]]).

[F2] **Solver, extensions and mean estimate.** The symmetric coercive variational solver is available under Countable Choice ([[lem-em-symmetric-coercive-variational-solver]]); bounded smooth domains extend $H^1$ functions to a fixed larger box ([[thm-extension-theorem-for-bounded-smooth-domains]]), and the mean-zero coercivity lemma bounds $\|u-\text{mean}\|_{L^2}$ by the gradient norm on bounded domains ([[lem-em-mean-zero-coercivity-on-a-c-one-domain]]).

[F3] **Compact self-adjoint spectral theorem.** The closed span of the nonzero eigenspaces of a compact self-adjoint operator is $(\ker T)^\perp$; its nonzero eigenvalues are real, have finite-dimensional eigenspaces, and have only $0$ as a possible accumulation point. Thus an injective such operator has a complete eigenbasis; no finite-dimensionality of its kernel is asserted; a compact operator is bounded ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[def-compact-linear-operator]]).

[F4] **Dirichlet resolvent and density of gradients.** For every $f\in L^2(\Omega)$ there is a unique $u\in H_0^1\cap H^2$ with $(1-\Delta)u=f$, and the smooth zero-boundary fields $\varphi_j$ with $\varphi_j\to u$ in $H^2$ satisfy $\nabla\varphi_j\to\nabla u$ in the curl/div graph norm, so $\nabla u\in X$ ([[lem-em-dirichlet-resolvent-h-two-and-smooth-test-density]]).

[F5] **Hilbert-space tools.** Orthogonal decomposition by a closed subspace and Fourier expansion in a complete orthonormal system ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[thm-hilbert-space-fourier-expansion]]); Cauchy-Schwarz in $L^2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]); dominated convergence ([[thm-dominated-convergence]]).

[F6] **Calculus and ODE tools.** Square roots, sine and cosine derivatives, chain and algebra rules, the FTC and the zero-derivative-implies-constant corollary ([[thm-of-square-roots]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-ftc-second-part]], [[cor-zero-derivative-implies-constant]]).



## Proof

**Proof technique:** direct.

1.1 Gaffney identity: for smooth $u$ with $n\times u=0$ on $\partial\Omega$, expanding $|\operatorname{curl}u|^2$ and $|\operatorname{div}u|^2$ and integrating by parts with [F1] cancels the interior second derivatives and leaves $\int_\Omega(|\operatorname{curl}u|^2+|\operatorname{div}u|^2-|\nabla u|^2)=\int_{\partial\Omega}(\operatorname{div}n)|u\cdot n|^2dS$, because on the boundary $u=(u\cdot n)n$ and the normal field may be extended by signed distance so that its normal derivative vanishes. [given, F1, algebra]

2.1 Boundary trace bound: in the normal collar of [F1], write $|u(y,0)|^2=|u(y,t)|^2-\int_0^t\partial_s|u(y,s)|^2ds$ and bound $|\partial_s|u|^2|\le2|u||\partial_su|$; averaging $t\in(0,h)$ and using $2ab\le\delta a^2+\delta^{-1}b^2$ with the bounded collar Jacobian and a finite chart partition gives $\|u\|_{L^2(\partial\Omega)}^2\le\delta\|\nabla u\|_2^2+C_\delta\|u\|_2^2$ for every $\delta>0$. [step 1.1, given, F6, algebra]

3.1 Combining steps 1.1 and 2.1 with the bounded curvature term and absorbing the gradient contribution for small $\delta$ gives $\|u\|_{H^1}\le C(\|u\|_2+\|\operatorname{curl}u\|_2+\|\operatorname{div}u\|_2)$ for smooth PEC fields, while conversely the graph norm is bounded by $C\|u\|_{H^1}$; hence the graph completion $X$ is a closed $H^1$-subspace of $H^1(\Omega;\mathbb R^3)$ with zero tangential trace, since the trace is continuous on $H^1$ and vanishes on the dense smooth PEC fields. [step 1.1, step 2.1, algebra]

4.1 The inclusion $X\hookrightarrow L^2$ is compact: extend a bounded family in $X$ to a fixed larger box by [F2], replace each extension by its average $P_hu$ over cubes of side $h$, and use the rectangular mean estimate of [F2] to get $\|u-P_hu\|_2\le Ch\|\nabla u\|_2$ uniformly; $P_h$ has finite-dimensional range and bounded images, so choosing $h$ small and a finite $\varepsilon$-net in that finite-dimensional range gives a finite $\varepsilon$-net for the family; total boundedness in the complete space $L^2$ gives compact closure, so $X\to L^2$ and $V\to H$ are compact inclusions. [step 3.1, F2, F5, algebra]

4.2 On $X$ with the graph norm the shifted form $a(u,v)=\int_\Omega[\operatorname{curl}u\cdot\operatorname{curl}v+\operatorname{div}u\operatorname{div}v+u\cdot v]$ is symmetric, bounded and coercive with $a(u,u)=\|u\|_{H(\operatorname{curl})\cap H(\operatorname{div})}^2$, so the variational solver [F2] gives for every $f\in H$ a unique $K_0f\in X$ with $a(K_0f,v)=\int f\cdot v$ for all $v\in X$; $K_0$ is bounded $H\to X$ and $H\to L^2$; its divergence-free range is proved in steps 5.1–6.1. [step 3.1, F2, algebra]

5.1 Divergence preservation: for $f\in H$ put $q=\operatorname{div}K_0f$; testing the defining identity with the admissible smooth PEC gradients $v=\nabla\varphi$ of zero-trace smooth $\varphi$ (for which $\operatorname{curl}\nabla\varphi=0$, $\operatorname{div}\nabla\varphi=\Delta\varphi$ and $n\times\nabla\varphi=0$) gives $\int_\Omega q(\Delta\varphi-\varphi)=0$ for all such $\varphi$, using $\int f\cdot\nabla\varphi=0$ (each $f\in V$ has zero distributional divergence and the pairing is continuous in $L^2$) and $\int K_0f\cdot\nabla\varphi=-\int q\varphi$. [step 4.2, F5, algebra]

6.1 For the datum $q\in L^2$ the Dirichlet resolvent [F4] gives $\varphi\in H^2\cap H_0^1$ with $(1-\Delta)\varphi=q$ and smooth zero-boundary approximants $\varphi_j\to\varphi$ in $H^2$ whose gradients $\nabla\varphi_j\to\nabla\varphi$ converge in the graph norm, so $\nabla\varphi\in X$; passing the identity of step 5.1 to the limit by $L^2$ continuity gives $\int q(\Delta\varphi-\varphi)=-\|q\|_2^2$, hence $\|q\|_2=0$ and $q=0$; therefore $K_0$ maps $H$ into $V$, and $K=K_0|_H$ is bounded $H\to V$ and compact $H\to H$ by step 4.1. [step 5.1, F4, F5, algebra]

7.1 Self-adjointness and trivial kernel: testing the defining equations of $Kf$ and $Kg$ with $Kg$ and $Kf$ respectively and using symmetry gives $(f,Kg)=a(Kf,Kg)=(Kf,g)$, so $K$ is self-adjoint; $(f,Kf)=\|\operatorname{curl}Kf\|_2^2+\|Kf\|_2^2>0$ for $f\ne0$, because $Kf=0$ would make $f$ orthogonal to the dense subspace $V$ of $H$, so $\ker K=\{0\}$. [step 4.2, step 6.1, F5, algebra]

8.1 By the compact self-adjoint spectral theorem [F3] applied to $K$, $H$ has an orthonormal basis $\{u_j\}$ of eigenfields $Ku_j=\kappa_ju_j$ with positive eigenvalues $\kappa_j$, finite multiplicities and $\kappa_j\to0$ (infinitely many only if $H$ is infinite dimensional, and any zero eigenvalue would contradict the trivial kernel); substituting into the full identity $a(Ku_j,v)=\int u_j\cdot v$ with $v\in X$, and using $\operatorname{div}u_j=0$ since $u_j\in V$, gives $\int\operatorname{curl}u_j\cdot\operatorname{curl}v=(\kappa_j^{-1}-1)\int u_j\cdot v$ for every $v\in X$, so with $\lambda_j=\kappa_j^{-1}-1\ge0$ the eigenfields satisfy the full graph-class variational identity; testing with compactly supported smooth $v$ gives $\operatorname{curl}\operatorname{curl}u_j=\lambda_ju_j$ distributionally with the inherited PEC trace. [step 7.1, F3, F1, algebra]

9.1 The space $V$ with $\|u\|_V^2=\|u\|_2^2+\|\operatorname{curl}u\|_2^2$ is complete, being a closed subspace of the graph completion; the eigenidentity gives $(u,u_j)_V=(1+\lambda_j)(u,u_j)_H$, so $\{u_j/\sqrt{1+\lambda_j}\}$ is orthonormal in $V$ and its orthogonal complement vanishes, because orthogonality in $V$ forces all $H$-coefficients of $u$ to vanish; hence [F5] gives completeness in $V$ and the expansion $\|u\|_V^2=\sum_j(1+\lambda_j)|(u,u_j)_H|^2$. [step 8.1, F5, algebra]

10.1 Wave branch: for $v_{\mathrm{wave}}>0$ and data $q_0\in V$, $q_1\in H$ put $\alpha_j=(q_0,u_j)_H$ and $\gamma_j=(q_1,u_j)_H$; for $\lambda_j>0$ set $a_j(t)=\alpha_j\cos(v_{\mathrm{wave}}\sqrt{\lambda_j}t)+\gamma_j\sin(v_{\mathrm{wave}}\sqrt{\lambda_j}t)/(v_{\mathrm{wave}}\sqrt{\lambda_j})$, and for $\lambda_j=0$ set $a_j(t)=\alpha_j+t\gamma_j$; [F6] verifies the ODE and the initial values, and the positive-mode energy $|a_j'|^2+v_{\mathrm{wave}}^2\lambda_j|a_j|^2=|\gamma_j|^2+v_{\mathrm{wave}}^2\lambda_j|\alpha_j|^2$ is constant by [F6]. [step 9.1, F6, algebra]

11.1 Since only finitely many eigenvalues lie in any bounded set and the zero sector is finite dimensional, the positive eigenvalues are bounded away from zero; the constant-energy identity therefore controls the $V$-displacement tail and the $H$-velocity tail uniformly in time, and the initial $V\times H$ summability of steps 9.1 and 10.1 makes all tails tend to zero, so finite modal sums converge in $C(K;V)$ for displacement and in $C(K;H)$ for velocity on every compact time interval $K$ with the prescribed initial data; the derivative statement passes to the limit by [F6]'s FTC estimate, and the finite equations pass to the variational equation in the distribution-in-time sense by $\|u\|_V$-convergence and density, while uniqueness follows from uniqueness of each scalar ODE and the completeness of the eigenbasis. [step 10.1, F5, F6, algebra] ∎

The abstract speed $v_{\mathrm{wave}}>0$ is a mathematical parameter of this lemma; no physical identification or open-domain spectral claim is made, and no lossy or maximal-trace statement is asserted.
