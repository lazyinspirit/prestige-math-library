---
id: lem-emg-fx-dirichlet-holder-inverse
kind: lemma
title: Dirichlet Hölder inverse required by the constraint branch
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - def-emg-fx-dirichlet-constraint-problem
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - def-weak-dirichlet-solution-for-a-divergence-form-operator
  - def-countable-choice
  - def-axiom-of-choice
  - cor-cauchy-schwarz-inequality-for-l-two
  - lem-w-one-two-is-a-hilbert-space
  - thm-lax-milgram
  - thm-weak-maximum-principle-for-the-laplacian
  - lem-emg-fx-dirichlet-energy-and-trace
  - lem-emg-fx-global-dirichlet-holder-estimate
  - cor-smooth-weak-dirichlet-solutions-are-classical
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - cor-real-and-euclidean-vector-valued-ascoli-arzela
  - thm-holder-spaces-on-bounded-domains-are-banach-spaces
dependency_roles:
  def-emg-fx-dirichlet-constraint-problem: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  def-weak-dirichlet-solution-for-a-divergence-form-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  lem-w-one-two-is-a-hilbert-space: mathematical-premise
  thm-lax-milgram: mathematical-premise
  thm-weak-maximum-principle-for-the-laplacian: mathematical-premise
  lem-emg-fx-dirichlet-energy-and-trace: mathematical-premise
  lem-emg-fx-global-dirichlet-holder-estimate: mathematical-premise
  cor-smooth-weak-dirichlet-solutions-are-classical: mathematical-premise
  thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign: mathematical-premise
  cor-real-and-euclidean-vector-valued-ascoli-arzela: mathematical-premise
  thm-holder-spaces-on-bounded-domains-are-banach-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Gilbarg and Neil S. Trudinger, Elliptic Partial Differential Equations of Second Order (2001)"
      url: "https://djvu.online/file/jxRRleAzbYjsl"
      locator: "Chapter 4, Theorems 4.6 and 4.8 on Poisson Hölder estimates; Chapter 6, Lemma 6.18 and Theorem 6.19, printed pp. 111-112."
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.8, Theorem 8.28, and §8.9, Theorem 8.30, printed pp. 151-153; §8.8 states the boundary estimate and refers to Gilbarg-Trudinger for the flattening proof."
    - title: "Xu-Jia Wang, Schauder Estimates for Elliptic and Parabolic Equations (Australian National University, 2006; complete 7-page note)"
      url: "https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf"
      locator: "§1, Theorem 1 and Theorem 1-prime, printed pp. 1-3; the half-ball theorem starts with a classical solution. The local lifting and reflection details are proved in the owned helpers."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice and Countable Choice. For the domain $\Omega$ and exponent $\alpha$ of *Bounded-domain charged conformal problem*, let $X=\{u\in C^{2,\alpha}(\overline\Omega):u|_{\partial\Omega}=0\}$ and $Y=C^{0,\alpha}(\overline\Omega)$ with the full norms specified there; the zero subscript denotes zero boundary restriction, not compact support. Then

$$-\Delta:X\longrightarrow Y$$

is a bounded linear isomorphism. Consequently $A:=-8\Delta:X\to Y$ is a bounded linear isomorphism and its inverse obeys $\|A^{-1}f\|_{C^{2,\alpha}}\leq C(\Omega,\alpha)\|f\|_{C^{0,\alpha}}$.

## Statement references

[[def-emg-fx-dirichlet-constraint-problem]]

[[lem-emg-fx-global-dirichlet-holder-estimate]]

[[lem-emg-fx-dirichlet-energy-and-trace]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, the bounded smooth domain $\Omega\subset\mathbb R^3$, $0<\alpha<1$, and the real Hölder spaces $X,Y$ defined in [[def-emg-fx-dirichlet-constraint-problem]].

[A1] The Sobolev, smooth-approximation and compactness suppliers retain the Axiom of Choice and Countable Choice. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] [[def-emg-fx-dirichlet-constraint-problem]]: $X$ is the zero-boundary subspace of $C^{2,\alpha}(\overline\Omega)$, $Y=C^{0,\alpha}(\overline\Omega)$, and both use the displayed full Hölder norms.

[F2] [[def-sobolev-space-wkp-and-its-norm]] and [[def-wkp-zero-as-a-sobolev-closure]]: $H^1(\Omega)=W^{1,2}(\Omega)$ consists of square-integrable functions with square-integrable weak first derivatives, and $H^1_0(\Omega)$ is the closure of $C^\infty_c(\Omega)$ in that norm. [[lem-w-one-two-is-a-hilbert-space]]: $H^1_0(\Omega)$ is a real Hilbert space for the norm $\|v\|_{H^1}^2=\|v\|_{L^2}^2+\|\nabla v\|_{L^2}^2$.

[F3] [[cor-cauchy-schwarz-inequality-for-l-two]]: $\left|\int_\Omega f v\right|\leq\|f\|_{L^2}\|v\|_{L^2}$.

[F4] [[lem-emg-fx-dirichlet-energy-and-trace]]: on the bounded smooth domain, $\|v\|_2\le C_P\|\nabla v\|_2$ for every $v\in H^1_0$; for a $C^1$ representative, membership in that closure is equivalent to zero classical boundary values. Both assertions are proved locally by coordinate integration, cutoffs and graph-chart trace bounds.

[F5] [[thm-lax-milgram]]: on a real Hilbert space, a bounded coercive bilinear form and a bounded linear functional determine a unique weak solution.

[F6] [[lem-emg-fx-global-dirichlet-holder-estimate]]: on this bounded smooth three-dimensional domain, every zero-boundary $C^{2,\alpha}$ function obeys $\|u\|_{C^{2,\alpha}}\le C(\|\Delta u\|_{C^{0,\alpha}}+\|u\|_\infty)$. Its local proof supplies the Newtonian kernel estimate, normal-jet lifting before reflection, finite-chart flattening and coefficient absorption; it does not assume weak Schauder regularity.

[F7] [[thm-weak-maximum-principle-for-the-laplacian]]: if $w\in C^2(\Omega)\cap C(\overline\Omega)$ and $\Delta w\geq0$, then $\max_{\overline\Omega}w=\max_{\partial\Omega}w$.

[F8] [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]: for the Laplacian, the weak zero-boundary equation is $\int_\Omega\nabla u\cdot\nabla w=\int_\Omega(f/8)w$ for every $w\in H^1_0(\Omega)$.

[F9] [[cor-smooth-weak-dirichlet-solutions-are-classical]]: on a bounded smooth domain with smoothly extending coefficients and forcing, the zero-boundary weak solution has a smooth representative up to the boundary. Its proof uses higher-order boundary Sobolev induction and embedding, not a Schauder estimate.

[F10] [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]: convolution with a smooth compactly supported mollifier is smooth and differentiates under the integral sign.

[F11] [[cor-real-and-euclidean-vector-valued-ascoli-arzela]]: a uniformly bounded equicontinuous finite list of continuous derivative fields on a compact metric space has a uniformly convergent subsequence.

[F12] [[thm-holder-spaces-on-bounded-domains-are-banach-spaces]]: $X$ is a closed Banach subspace of $C^{2,\alpha}(\overline\Omega)$, and $Y=C^{0,\alpha}(\overline\Omega)$ is Banach.

## Proof

**Given:** The hypotheses above and an arbitrary $f\in Y$.

1.1 Weak construction. Put $H=H^1_0(\Omega)$, $a(v,w)=\int_\Omega\nabla v\cdot\nabla w$, and $\ell_f(w)=\frac18\int_\Omega f w$. Boundedness of $\Omega$ gives $f\in L^2$. By [F3] and the locally proved [F4], $|\ell_f(w)|\le C_P\|f\|_2\|w\|_{H^1}/8$. Also $|a(v,w)|\le\|v\|_{H^1}\|w\|_{H^1}$ and $\|w\|_{H^1}^2\le(1+C_P^2)a(w,w)$. By [F2] and [F5] there is exactly one $u_f\in H$ with $a(u_f,w)=\ell_f(w)$ for every $w\in H$; [F8] identifies its equation as $-\Delta u_f=f/8$. When $f=0$ this solution is zero. [given, A1, F2, F3, F4, F5, F8, algebra]

2.1 Smooth approximation without assuming density in the full Hölder norm. Set $F=f/8$. For real data extend $F$ from $\overline\Omega$ by $\inf_{z\in\overline\Omega}(F(z)+[F]_\alpha|x-z|^\alpha)$, clamp to $[-\|F\|_\infty,\|F\|_\infty]$, and multiply by a fixed smooth cutoff equal to one near $\overline\Omega$. The Hölder inequality for $F$ proves equality on the closure, and $(a+b)^\alpha\le a^\alpha+b^\alpha$ proves the global Hölder bound. Convolve this compact extension with mollifiers of radii tending to zero. By [F10] the resulting $F_m$ are smooth on a neighborhood of the closure; direct averaging gives $\sup_m\|F_m\|_{C^{0,\alpha}}\le C\|F\|_{C^{0,\alpha}}$ and $F_m\to F$ uniformly. Convergence in the full $C^{0,\alpha}$ norm is neither needed nor asserted. Apply step 1.1 with datum $8F_m$ to obtain $u_m\in H^1_0$ solving $-\Delta u_m=F_m$. By [F9] these have smooth representatives up to the boundary, and [F4] identifies their zero classical boundary values. [given, A1, F4, F9, F10, step 1.1, construct, algebra]

3.1 Uniform local-to-global Schauder control. Choose $B_R(x_0)$ containing $\overline\Omega$, set $M_m=\|F_m\|_\infty$ and $q_m(x)=M_m(R^2-|x-x_0|^2)/6$. Then $q_m\ge0$, $\Delta q_m=-M_m$, and $\Delta(u_m-q_m)=M_m-F_m\ge0$, $\Delta(-u_m-q_m)=M_m+F_m\ge0$. Their boundary values are $-q_m\le0$, so [F7] gives $|u_m|\le q_m$. Apply the locally proved finite-chart estimate [F6] to $u_m$. It follows that $\|u_m\|_{C^{2,\alpha}}\le C(\|F_m\|_{C^{0,\alpha}}+\|u_m\|_\infty)\le C'\|f\|_{C^{0,\alpha}}/8$, uniformly in $m$. No quoted global Schauder theorem or boundary regularity theorem has supplied this estimate. [F6, F7, step 2.1, algebra]

4.1 Closing the approximation and identifying the weak solution. Apply [F11] to $(u_m,Du_m,D^2u_m)$ on the compact closure. Uniform bounds and equicontinuity follow from step 3.1 and the finite smooth atlas, so a subsequence converges uniformly to $(u,G,H)$. On each interior ball the fundamental theorem of calculus on coordinate segments gives $Du=G$ and $DG=H$. These fields are continuous on the closure, and passing to every Hessian difference quotient gives $[D^2u]_\alpha\le\liminf_m[D^2u_m]_\alpha$. Thus $u\in C^{2,\alpha}(\overline\Omega)$ with the uniform estimate. Uniform convergence of $F_m$ and $D^2u_m$ gives $-\Delta u=F$, while $u=0$ on the boundary. The local closure result [F4] gives $u\in H^1_0$. Integrating against compactly supported smooth tests and passing to their $H^1$ closure extends the weak identity to every $H^1_0$ test. Uniqueness in step 1.1 identifies $u=u_f$. Therefore $Au_f=f$ for $A=-8\Delta$, with $\|u_f\|_{C^{2,\alpha}}\le C\|f\|_{C^{0,\alpha}}$. [F1, F4, F8, F11, step 1.1, step 2.1, step 3.1, algebra]

5.1 Boundedness and uniqueness. The full norm gives $\|\Delta w\|_{C^{0,\alpha}}\le C\|w\|_{C^{2,\alpha}}$, so $A:X\to Y$ is bounded and linear. If $Aw=0$, then $\Delta w=0$ and $w=0$ on the boundary. Apply [F7] to $w$ and $-w$ to obtain $w=0$. Thus step 4.1 gives a bounded linear inverse. Since $A=8(-\Delta)$, $-\Delta$ is also a bounded linear isomorphism. [F1, F7, step 4.1, algebra]

6.1 Uniform estimates for an explicit continuation family. To record the continuation step, put $A_t=-8\Delta+tI:X\to Y$, $0\le t\le1$. Choose $q=(R^2-|x-x_0|^2)/24>0$ on the closure, so $A_tq=2+tq\ge2$. At an interior positive maximum of $w$, $-8\Delta w+tw\ge0$. Applying this to $u-\|A_tu\|_\infty q$ and its negative counterpart excludes a positive maximum because their $A_t$ images are strictly negative when that norm is nonzero; for zero norm use an arbitrarily small positive multiple of $q$ and pass to zero. Thus $\|u\|_\infty\le C\|A_tu\|_\infty$ uniformly in $t$. For every $\eta>0$, $\|u\|_{C^{0,\alpha}}\le\eta\|u\|_{C^{2,\alpha}}+C_\eta\|u\|_\infty$: sufficiently close points in one boundary chart or interior ball can be joined inside that patch by a path of length at most $C|x-y|$, giving $|u(x)-u(y)|\le C\|Du\|_\infty|x-y|$; split pairs at a fixed small distance $\delta$ and choose $C\delta^{1-\alpha}\le\eta$. Use [F6] with $\Delta u=(tu-A_tu)/8$, absorb the small multiple, and use the supremum bound to obtain $\|u\|_X\le M\|A_tu\|_Y$ uniformly for $t\in[0,1]$. [F1, F6, step 5.1, algebra]

7.1 Open and closed continuation. By [F12], $X,Y$ are Banach, and step 5.1 supplies the bijective base $A_0$. If $A_s$ is bijective, then for $|t-s|\,\|A_s^{-1}I\|<1$ the convergent geometric operator series in $-(t-s)A_s^{-1}I$ inverts $I+(t-s)A_s^{-1}I$, so $A_t$ is bijective. For closedness let $t_j\to t$ with $A_{t_j}$ bijective. Given $f\in Y$, put $v_j=A_{t_j}^{-1}f$. The uniform estimate of step 6.1 gives $\|v_j\|_X\le M\|f\|_Y$ and $\|v_j-v_k\|_X\le M|t_j-t_k|\,\|v_k\|_Y\le C M^2|t_j-t_k|\,\|f\|_Y$. Hence $v_j$ converges in $X$ and its limit solves $A_tv=f$. Injectivity follows from the same uniform estimate. The solvability set is nonempty, open and closed in $[0,1]$, so equals that interval. This continuation is based on the locally constructed Laplace inverse, not an assumed Schauder solvability result. [F12, step 5.1, step 6.1, construct, algebra]

8.1 Steps 1.1--5.1 prove precisely the isomorphisms and inverse bound in the Statement. Steps 6.1--7.1 give the explicit continuation argument with uniformly controlled norms. The boundary estimate used in closing the weak construction is locally proved from trace/density, Newtonian Hölder cancellation, normal-jet lifting, reflection, finite flattened charts and coefficient absorption. No infinite-domain or stronger boundary-data assertion is made. [F1, F4, F6, step 4.1, step 5.1, step 7.1] ∎

## Remarks

Smooth approximants are justified by the existing higher-order Sobolev boundary induction and embedding, not by assuming the target Hölder inverse or quoting a global Schauder theorem. The Hölder norm of the mollified forcing stays bounded, while its uniform convergence suffices for the derivative compactness argument; full-norm density is not presumed. The continuation family is an auxiliary verification of the analytic route and does not enlarge the charged branch's public claim.

## Remarks references

[[lem-emg-fx-dirichlet-energy-and-trace]]

[[lem-emg-fx-newtonian-holder-potential]]

[[lem-emg-fx-flat-dirichlet-holder-estimate]]

[[lem-emg-fx-global-dirichlet-holder-estimate]]

[[cor-smooth-weak-dirichlet-solutions-are-classical]]
