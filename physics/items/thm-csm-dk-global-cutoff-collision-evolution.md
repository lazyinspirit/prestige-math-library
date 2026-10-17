---
id: thm-csm-dk-global-cutoff-collision-evolution
kind: theorem
title: "Global finite-energy cutoff collision evolution"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-dk-reflection-collision-gain
  - lem-csm-dk-reflection-measure-and-gain-identities
  - lem-csm-dk-gaussian-mixture-regularity
  - def-countable-choice
  - thm-banach-fixed-point
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
dependency_roles:
  def-csm-dk-reflection-collision-gain: mathematical-premise
  lem-csm-dk-reflection-measure-and-gain-identities: mathematical-premise
  lem-csm-dk-gaussian-mixture-regularity: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: "https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html"
---

## Statement

Assume $\mathrm{AC}_\omega$. Fix a reference speed $v_0>0$, a rate $\lambda>0$, and the weighted space $X=L^1(\mathbb R^3,w_0\,dv)$ with $w_0(v)=1+|v|^2/v_0^2$, as in [[def-csm-dk-reflection-collision-gain]]. Let $f_0\in X$ be nonnegative with $\int f_0\,dv=1$, first moment $m_1=\int vf_0(v)\,dv$, and finite second moment $E_2=\int |v|^2f_0(v)\,dv$. Put

$$K:=\{g\in X:g\ge0\text{ a.e.},\ \int g\,dv=1,\ \int vg\,dv=m_1,\ \int|v|^2g\,dv=E_2\}.$$

Then there is a unique $f\in C([0,\infty),K)$, with continuity in the $X$ norm, satisfying

$$f_t=e^{-\lambda t}f_0+\lambda\int_0^t e^{-\lambda(t-s)}\mathcal G(f_s,f_s)\,ds,$$

where the time integral is the norm limit of Riemann sums in $X$. For all $t\ge0$, $f_t\ge0$, $\int f_t\,dv=1$, $\int vf_t\,dv=\int vf_0\,dv$, and $\int |v|^2f_t\,dv=E_2$. If $f_0>0$ almost everywhere, then $f_t\ge e^{-\lambda t}f_0$ almost everywhere.

If in addition $f_0\in\mathcal M_{u,a,b}$ for some $u\in\mathbb R^3$ and $0<a<b$, with $\mathcal M_{u,a,b}$ as in [[lem-csm-dk-gaussian-mixture-regularity]], then each $f_t$ has a positive $C^\infty$ velocity representative with the Gaussian bounds in that lemma; these representatives depend continuously on $t$ locally uniformly in velocity, are $C^1$ in $t$, and satisfy $\partial_t f_t=\lambda(\mathcal G(f_t,f_t)-f_t)$ pointwise.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $v_0>0$, $\lambda>0$, and $f_0\in X$ with the nonnegativity, normalization, and finite-second-moment hypotheses of the Statement.

[A1] Assume the Axiom of Countable Choice ([[def-countable-choice]]) for the completed Lebesgue measure suppliers in the collision-operator construction.

[F1] [[def-csm-dk-reflection-collision-gain]]: $X$ has norm $\|f\|_{1,w_0}=\int(1+|v|^2/v_0^2)|f(v)|\,dv$, and $\mathcal G$ is the elastic-reflection gain.

[F2] [[lem-csm-dk-reflection-measure-and-gain-identities]]: $\mathcal G$ maps $X\times X$ bilinearly to $X$ with $\|\mathcal G(f,g)\|_{1,w_0}\le2\|f\|_{1,w_0}\|g\|_{1,w_0}$, and for mass-one $f$ its gain has the same mass, first moment, and second moment as $f$.

[F3] [[lem-csm-dk-gaussian-mixture-regularity]]: the closed convex class $\mathcal M_{u,a,b}$ is invariant under $\mathcal G$, and its elements have common positive Gaussian lower bounds and smooth Gaussian derivative envelopes.

[F4] [[thm-banach-fixed-point]]: a contraction of a nonempty complete metric space into itself has a unique fixed point.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable functions on a sigma-finite product have measurable sections and equal iterated integrals.

[F6] [[thm-dominated-convergence]]: pointwise almost-everywhere convergence dominated by one integrable function permits passage of limits through the Lebesgue integral.

## Proof

**Given:** [A1], $v_0>0$, $\lambda>0$, $f_0\in X$, and [F1]–[F6].

**Proof technique:** direct.

1.1 The weighted measure $w_0\,dv$ is sigma-finite because $w_0$ is bounded on every bounded ball. To prove $X$ complete, let $(g_n)$ be Cauchy in its norm and choose a subsequence $(g_{n_j})$ with $\|g_{n_{j+1}}-g_{n_j}\|_{1,w_0}\le2^{-j}$. By [F5], the nonnegative series $\sum_j w_0|g_{n_{j+1}}-g_{n_j}|$ is finite almost everywhere and has finite integral. Hence $g_{n_j}$ converges pointwise almost everywhere to a measurable $g$, and the integral of each tail is bounded by $\sum_{j\ge J}2^{-j}$, so $g_{n_j}\to g$ in $X$. The same estimates give $\|g\|_{1,w_0}<\infty$. Since the original sequence was Cauchy, it converges to the same $g$. Thus $X$ is complete. [A1, F5, construct]

2.1 Put $m_1=\int vf_0\,dv$ and $E_2=\int|v|^2f_0\,dv$, and let $K$ be the subset of $X$ of nonnegative functions with mass $1$, first moment $m_1$, and second moment $E_2$. It is nonempty because $f_0\in K$. It is closed: if $g_n\to g$ in $X$, then $\int|g_n-g|\le\|g_n-g\|_{1,w_0}$, $\int|v||g_n-g|\le(v_0/2)\|g_n-g\|_{1,w_0}$, and $\int|v|^2|g_n-g|\le v_0^2\|g_n-g\|_{1,w_0}$; also the negative part of $g$ is bounded by $|g-g_n|$ whenever $g_n\ge0$. Thus all constraints pass to the limit, and $K$ is complete. The continuous path space $C([0,T],K)$ with the supremum metric is complete: a uniformly Cauchy sequence has pointwise limits in $K$, converges uniformly, and the triangle inequality with one continuous approximant proves continuity of the limit. [F1, step 1.1, algebra]

2.2 Let $M_0=1+E_2/v_0^2$; every $g\in K$ has $\|g\|_{1,w_0}=M_0$. On $C([0,T],K)$ define $$\Phi(g)_t=e^{-\lambda t}f_0+\lambda\int_0^t e^{-\lambda(t-s)}\mathcal G(g_s,g_s)\,ds.$$ The integrand is norm-continuous because $s\mapsto g_s$ is continuous and [F2] bounds the bilinear map. Its Riemann sums are Cauchy in $X$ by uniform continuity on $[0,T]$ and completeness from step 1.1. The gain identities in [F2] show that $\Phi(g)_t$ has mass $1$, first moment $m_1$, and second moment $E_2$, since $e^{-\lambda t}+\lambda\int_0^t e^{-\lambda(t-s)}ds=1$; nonnegativity is preserved as well. Therefore $\Phi$ maps this path space into itself. [F1, F2, step 1.1, algebra]

3.1 Bilinearity and [F2] give $$\|\mathcal G(g_s,g_s)-\mathcal G(h_s,h_s)\|_{1,w_0}\le2\|g_s-h_s\|_{1,w_0}(\|g_s\|_{1,w_0}+\|h_s\|_{1,w_0})=4M_0\|g_s-h_s\|_{1,w_0}.$$ Hence $\|\Phi(g)-\Phi(h)\|_{C([0,T],X)}\le4\lambda M_0T\|g-h\|_{C([0,T],X)}$. Choose $T=(8\lambda M_0)^{-1}$, so this constant is $1/2$. The nonempty complete path space from step 2.1 and [F4] yield a unique fixed point on $[0,T]$. Differentiating its norm-continuous mild integral gives $f'_t=\lambda(\mathcal G(f_t,f_t)-f_t)$ in $X$. [F2, F4, step 2.1, step 2.2, algebra]

3.2 Suppose $f_0\in\mathcal M_{u,a,b}$. The class is closed and convex by definition. If a path takes values in this class, [F3] puts every gain value in the class. For a partition $0=s_0<\cdots<s_N=t$, assign each subinterval $I_j=[s_{j-1},s_j]$ the exact nonnegative weight $\lambda\int_{I_j}e^{-\lambda(t-s)}\,ds$ and evaluate the gain at one point of that interval; these weights sum to $1-e^{-\lambda t}$. Adding the weight $e^{-\lambda t}$ on $f_0$ gives convex combinations in the class. As the mesh tends to zero, the Riemann sums converge in $X$ to $\Phi(g)_t$, so closedness puts $\Phi(g)_t$ in the class. Thus Picard iteration of $\Phi$ starting at the constant path $f_0$ remains in $\mathcal M_{u,a,b}$, and [F4] makes its uniform limit the fixed point. Therefore every $f_t$ lies in this class and has the smooth positive representative and Gaussian envelopes from [F3]. [F3, F4, step 2.2]

4.1 At $t=T$ the solution is again in $K$. Restart the same construction with initial value $f_T$; the same $M_0$ gives the same positive interval length. Iterating constructs a solution on every $[0,kT]$, and uniqueness on overlaps makes the concatenation a unique global mild solution. Substituting the restarted mild formula into the preceding interval gives the displayed global formula. Since the gain is nonnegative, the formula also gives $f_t\ge e^{-\lambda t}f_0$ almost everywhere. [F2, step 3.1, algebra]

5.1 On any compact time interval, the uniform spatial derivative bounds from [F3] make the family of representatives locally relatively compact in $C^\infty$. If $t_j\to t$, continuity in $X$ gives $f_{t_j}\to f_t$ in weighted $L^1$. Every subsequence has a further locally uniformly convergent subsequence by [F3]; its limit equals almost everywhere the continuous representative of $f_t$, hence equals it everywhere. A subsequence on which local uniform convergence failed would contradict this property, so $t\mapsto f_t$ is locally uniformly continuous in velocity. For $v$ in a compact velocity set, the gain integrand $f_s(v')f_s(w')$ is continuous in $(s,v)$, and pair-energy preservation gives the integrable majorant $C e^{-|w-u|^2/(2b)}$, uniform on that compact set and compact time intervals. Dominated convergence [F6] therefore makes the pointwise gain integral finite and jointly continuous in $(s,v)$; it is a continuous representative of the $X$-class gain. In particular, for fixed $v$ this supplies the integrable majorant $$C(v)e^{-|w-u|^2/(2b)}$$ uniformly on compact time intervals. [F3, F6, step 1.1, step 4.1, algebra]

6.1 For each fixed $t$, the Riemann sums defining the mild integral converge in $X$; their pointwise limits are the ordinary time integral because the gain is continuous in time by step 5.1. Choose a subsequence whose successive $X$-norm differences are summable; the Tonelli argument in step 1.1, using [F5], shows it converges almost everywhere to the $X$-class limit. Hence the pointwise time integral represents the mild right-hand side. It is continuous in velocity by the same compact-velocity Gaussian majorant in step 5.1. The left side has the smooth representative from step 3.2. Since these continuous representatives agree as $X$ classes, they agree everywhere; a continuous function vanishing almost everywhere vanishes everywhere. The ordinary fundamental theorem of calculus applied to the pointwise mild integral gives $\partial_t f_t(v)=\lambda(\mathcal G(f_t,f_t)(v)-f_t(v))$. This proves the stated pointwise $C^1$ time regularity. [F3, F5, F6, step 1.1, step 3.2, step 5.1, algebra] ∎
