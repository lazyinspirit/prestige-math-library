---
id: thm-de-giorgi-nash-interior-holder-regularity
kind: theorem
title: "De Giorgi-Nash interior Holder regularity for divergence-form equations"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [lem-de-giorgi-oscillation-reduction, thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-holder-spaces-c-k-alpha-and-their-scaled-norms, thm-almost-every-point-is-a-lebesgue-point, def-lebesgue-point-and-lebesgue-set, def-ball-average-operator-on-r-n, def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, def-uniformly-elliptic-divergence-form-operator, def-l-p-space-as-a-quotient-by-null-functions, def-essential-supremum-with-respect-to-a-measure, def-complete-metric-space, thm-uniformly-continuous-extension-from-dense, cor-positive-negative-part-and-truncation-calculus-in-w-one-p, lem-positive-part-is-an-admissible-weak-test-by-truncation, thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions, lem-weak-leibniz-rule-with-a-smooth-factor, lem-elliptic-form-is-well-defined-and-bounded, def-wkp-zero-as-a-sobolev-closure, def-countable-choice, def-axiom-of-choice, thm-reals-cauchy-complete]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "Theorems 3-5, Corollaries 1-3 and the oscillation inequality (7), printed pp. 1-7 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 18, Theorem 3 and its proof via the sup/inf iteration of Lecture 17, printed pp. 213-215 (read in full)"
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Teorema 1 and Proposizione 11 with the oscillation lemma, printed pp. 1-7 (read in full)"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, and let $A$, $L_0$ be as in [[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]], with measurable symmetric uniformly elliptic coefficients and constants $\theta,M_a$. Let $u\in H^1(\Omega;\mathbb R)$ be a weak solution of $L_0u=0$ on $\Omega$.
Then there are $\alpha=\alpha(n,\theta,M_a)\in(0,1)$ and, for every $\alpha'\in(0,\alpha)$, a class $u^*\in C^{0,\alpha'}_{\mathrm{loc}}(\Omega)$ ([[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]], [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]]) with $u^*=u$ a.e. on $\Omega$, and for every ball $B_{R_0}(x_0)\Subset\Omega$,
$$[u^*]_{0,\alpha';B_{R_0/2}(x_0)}\le C(n,\theta,M_a,\alpha')\,R_0^{-\alpha'}\Bigl(\frac{1}{|B_{R_0}(x_0)|}\int_{B_{R_0}(x_0)}u^2\,dx\Bigr)^{1/2},$$
and $\|u^*\|_{L^\infty(B_{R_0/2}(x_0))}\le C R_0^{-n/2}\|u\|_{L^2(B_{R_0}(x_0))}$. In particular every real weak solution of the homogeneous scalar equation with the symmetric bounded measurable uniformly elliptic principal coefficients specified above has a locally Holder continuous representative, and the representative is unique up to equality everywhere on $\Omega$.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; an open $\Omega\subseteq\mathbb R^n$, $n\ge2$; measurable symmetric uniformly elliptic coefficients $A$ with constants $\theta,M_a$; the principal operator $L_0u=-D_i(a^{ij}D_ju)$ with form $a_0$; a real weak solution $u\in H^1(\Omega;\mathbb R)$; and a ball $B_{R_0}(x_0)\Subset\Omega$.

[F1] One-step oscillation reduction: there is $\eta=\eta(n,\theta,M_a)\in(0,1)$ such that for each ball $B_R(x)$ with $B_{2R}(x)\Subset\Omega$, $\operatorname{ess\,osc}_{B_{R/2}(x)}u\le\eta\operatorname{ess\,osc}_{B_R(x)}u$ ([[lem-de-giorgi-oscillation-reduction]]).

[F2] Local boundedness for a nonnegative subsolution: for every nonnegative weak subsolution $w$ of $L_0w=0$ and every ball $B_R(x)\Subset\Omega$, $0<\rho<1$ and $p>0$, $\operatorname{ess\,sup}_{B_{\rho R}(x)}w\le C(n,\theta,M_a,\rho,p)(\frac{1}{|B_R(x)|}\int_{B_R(x)}w^p)^{1/p}$ ([[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]]).

[F3] Extend $u\in L^2(\Omega)$ by zero off $\Omega$. The extension lies in $L^2(\mathbb R^n)$ and hence $L^1_{\mathrm{loc}}(\mathbb R^n)$ by Holder on bounded sets. The cited Lebesgue-point theorem applies to this extension; restriction back to $\Omega$ gives a full-measure Lebesgue set, dense because every nonempty open subset has positive measure ([[thm-almost-every-point-is-a-lebesgue-point]], [[def-lebesgue-point-and-lebesgue-set]], [[def-ball-average-operator-on-r-n]]).

[F4] The target $\mathbb R$ is complete by [[thm-reals-cauchy-complete]]. Apply the dense-set extension theorem on each smaller ball, where the local Holder bound gives uniform continuity; the extensions agree on overlaps because they agree on the dense Lebesgue set. This gives a unique continuous extension on the ambient open set and passes the local Holder bounds to it ([[thm-uniformly-continuous-extension-from-dense]], [[def-complete-metric-space]]).

[F5] For continuous functions, pointwise supremum and infimum on an open ball equal the essential supremum and infimum of the corresponding almost-everywhere class; the Holder seminorm and norm are those of [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]] and [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]] ([[def-essential-supremum-with-respect-to-a-measure]]).

[F6] Positive parts of a real weak solution of the homogeneous equation are weak subsolutions. For $v=u$ or $v=-u$, the zero-source identity extends from $C_c^\infty$ tests to $H^1_0$ by density and boundedness of the form ([[def-wkp-zero-as-a-sobolev-closure]], [[lem-elliptic-form-is-well-defined-and-bounded]]). Thus test with the nonnegative $H^1_0$ function $\phi\chi_\epsilon(v)$, where $\phi\in C_c^\infty(\Omega)$ is nonnegative and $\chi_\epsilon(t)=\min\{1,t^+/\epsilon\}$. The chain and product rules give $a_0(v,\phi\chi_\epsilon(v))=\int\chi_\epsilon(v)A Dv\cdot D\phi+\int\phi\chi_\epsilon'(v)A Dv\cdot Dv=0$; the second term is nonnegative. Dominated convergence in the first term as $\epsilon\downarrow0$ gives $a_0(v^+,\phi)\le0$ ([[thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[lem-positive-part-is-an-admissible-weak-test-by-truncation]]).

## Proof

**Proof technique:** iterate the one-step oscillation reduction on smaller interior balls, transfer its dyadic decay to Lebesgue values, extend those values continuously, and use local boundedness of the positive and negative parts for the quantitative norm estimate.

1.1 Local boundedness of the positive and negative parts. For $v=u$ and $v=-u$, [F6] shows that $v^+$ is a nonnegative weak subsolution. Given any ball $B_S(x)\Subset\Omega$, choose $S'>S$ with $B_{S'}(x)\Subset\Omega$ and apply [F2] on $B_{S'}(x)$ with inner ratio $S/S'$ and exponent $p=2$. Since $v^+\in H^1(\Omega)$, its $L^2(B_{S'})$ mean is finite, so both $u^+$ and $(-u)^+$ are essentially bounded on $B_S(x)$. Consequently $u$ has finite essential oscillation on every compactly contained ball. [given, F2, F6]

2.1 Geometric oscillation decay. Fix $B_R(x_0)\Subset\Omega$. By [F1], applying the one-step estimate first with outer ball $B_{R/2}$ and then with successive dyadic outer balls gives $\operatorname{ess\,osc}_{B_{R/2^{k+1}}(x_0)}u\le\eta^k\operatorname{ess\,osc}_{B_R(x_0)}u$ for every integer $k\ge0$. By monotonicity of essential oscillation, if $0<r\le R/4$, choosing $k$ so that $R/2^{k+2}<r\le R/2^{k+1}$ gives $$\operatorname{ess\,osc}_{B_r(x_0)}u\le C_0(r/R)^{\alpha_0}\operatorname{ess\,osc}_{B_R(x_0)}u,\qquad \alpha_0:=\frac{\log(1/\eta)}{\log2}>0,$$ with $C_0=4^{\alpha_0}$; for $R/4<r\le R$ the same inequality follows from monotonicity and this choice of $C_0$. This argument applies to any ball compactly contained in $\Omega$, and all oscillations are finite by step 1.1. [step 1.1, F1, algebra]

3.1 Holder modulus at Lebesgue points. Fix $0<\rho<1$ and $x,y\in B_{\rho R}(x_0)$ that are Lebesgue points of $u$. Put $m:=(1-\rho)R/2$ and $d:=|x-y|$. If $0<d<m/4$, then $B_{2d}(x)\subset B_{2m}(x)\Subset B_R(x_0)$. The decay of step 2.1 applied to $B_{2m}(x)$ gives $$\operatorname{ess\,osc}_{B_{2d}(x)}u\le C_0(d/m)^{\alpha_0}\operatorname{ess\,osc}_{B_R(x_0)}u.$$ For sufficiently small $s>0$, both $B_s(x)$ and $B_s(y)$ lie in $B_{2d}(x)$; their averages lie between its essential infimum and supremum. Passing to the Lebesgue limits gives $|u^*(x)-u^*(y)|\le\operatorname{ess\,osc}_{B_{2d}(x)}u$. If instead $d\ge m/4$, the bound $|u^*(x)-u^*(y)|\le\operatorname{ess\,osc}_{B_R(x_0)}u$ suffices. In either case, $$|u^*(x)-u^*(y)|\le C_\rho(d/R)^{\alpha_0}\operatorname{ess\,osc}_{B_R(x_0)}u,$$ where $C_\rho$ depends only on $\eta,\rho$. [step 2.1, F3, algebra]

4.1 The continuous representative. The Lebesgue set of $u$ is dense by [F3]. Step 3.1 makes the Lebesgue representative locally Holder on its intersection with each smaller ball $B_{\rho R}(x_0)$. The extension theorem [F4] gives a unique continuous extension on $\Omega$, still denoted $u^*$, which agrees with $u$ a.e. and retains these local Holder bounds. [step 3.1, F3, F4]

5.1 Holder and supremum estimates. Let $R:=R_0$ and apply step 3.1 on the outer ball $B_{3R/4}(x_0)$ with inner ratio $2/3$. Applying [F2] with $p=2$ and outer ball $B_R$ to the positive parts $u^+$ and $(-u)^+$ from step 1.1 gives $$\operatorname{ess\,sup}_{B_{3R/4}}|u|\le C(\frac{1}{|B_R|}\int_{B_R}u^2)^{1/2}.$$ Hence $\operatorname{ess\,osc}_{B_{3R/4}}u\le2C(\frac{1}{|B_R|}\int_{B_R}u^2)^{1/2}$. Steps 3.1 and 4.1 give the corresponding increment bound with exponent $\alpha_0$. Set $\alpha:=\min\{\alpha_0,1/2\}\in(0,1)$; weakening the exponent to $\alpha$ preserves the estimate. For $0<\alpha'<\alpha$, interpolate that Holder increment with the supremum bound: $\min\{C M(|x-y|/R)^{\alpha},2M\}\le C'(\alpha')M(|x-y|/R)^{\alpha'}$, where $M=(\frac{1}{|B_R|}\int_{B_R}u^2)^{1/2}$. Thus $$[u^*]_{0,\alpha';B_{R/2}}\le C R^{-\alpha'}(\frac{1}{|B_R|}\int_{B_R}u^2)^{1/2},\qquad \|u^*\|_{L^\infty(B_{R/2})}\le C R^{-n/2}\|u\|_{L^2(B_R)}.$$ The constants depend only on $n,\theta,M_a,\alpha'$. [step 3.1, step 4.1, F2, F5, algebra]

6.1 Uniqueness. If two continuous representatives agree with $u$ a.e., they agree on a full-measure, hence dense, subset of $\Omega$; continuity makes them equal everywhere. All arguments use only the declared choice principles. [F3, F4] ∎

