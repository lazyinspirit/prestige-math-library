---
id: lem-de-giorgi-oscillation-reduction
kind: lemma
title: "De Giorgi oscillation reduction: one half-level set is small"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [def-local-weak-solution-for-a-divergence-form-operator, def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, lem-positive-part-is-an-admissible-weak-test-by-truncation, thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions, lem-caccioppoli-inequality-for-truncated-subsolutions, lem-sobolev-level-set-iteration-step, lem-nonlinear-geometric-iteration-sequence-converges-to-zero, def-ball-average-operator-on-r-n, thm-chebyshev-markov-inequality-for-the-integral, prop-essential-supremum-is-attained-as-the-least-essential-bound, def-essential-supremum-with-respect-to-a-measure, def-l-p-space-as-a-quotient-by-null-functions, thm-smooth-up-to-the-boundary-density-on-smooth-domains, thm-fatou-lemma, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "Lemma 9, Proposizione 11 and Lemma 12 with its Steps 1-2 and the L^2-L^infinity conclusion, printed pp. 1-7 (read in full)"
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "Theorem 5 and the oscillation inequality (7), printed pp. 1-7 (read in full)"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, let $A$ and $L_0$ be as in [[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]], and let $u\in H^1(\Omega;\mathbb R)$ be a weak solution of $L_0u=0$ on $\Omega$. Write $M:=\operatorname{ess\,sup}_{B_R(x_0)}u$, $m:=\operatorname{ess\,inf}_{B_R(x_0)}u$ and $\operatorname{osc}_{B_R(x_0)}u:=M-m$ for balls $B_R(x_0)\Subset\Omega$.
Then the two half-level sets cannot both be large, and one of them is small enough to reduce the oscillation:
1. **(dichotomy)** at least one of $|\{u>(M+m)/2\}\cap B_R(x_0)|$ and $|\{u<(M+m)/2\}\cap B_R(x_0)|$ is at most $\tfrac12|B_R(x_0)|$;
2. **(quantitative reduction)** there are constants $\eta=\eta(n,\theta,M_a)\in(0,1)$ and $C=C(n,\theta,M_a)$ such that for every $B_R(x_0)$ with $B_{2R}(x_0)\Subset\Omega$,
$$\operatorname{ess\,osc}_{B_{R/2}(x_0)}u\le\eta\,\operatorname{ess\,osc}_{B_R(x_0)}u .$$
Moreover the constant $\eta$ may be chosen as $1-\eta_0/2$ where $\eta_0>0$ depends only on $n,\theta,M_a$; the proof uses localized truncated Caccioppoli estimates and applies the local boundedness estimate [[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]] to a nonnegative truncation on the inner ball.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; an open $\Omega\subseteq\mathbb R^n$, $n\ge2$; a measurable symmetric coefficient field $A$ with $\theta|\xi|^2\le\langle A\xi,\xi\rangle\le M_a^2|\xi|^2$ a.e.; a weak solution $u\in H^1(\Omega;\mathbb R)$ of $L_0u=0$; and a ball $B_{2R}(x_0)\Subset\Omega$.

[F1] Assume Countable Choice and the Axiom of Choice. Local boundedness: every nonnegative weak subsolution $w$ of $L_0w=0$ on an open set satisfies $\operatorname{ess\,sup}_{B_{\rho r}(y)}w\le C_1(\rho)\bigl(\frac{1}{|B_r(y)|}\int_{B_r(y)}w^2\bigr)^{1/2}$ for every $B_r(y)\Subset\Omega$ and every $0<\rho<1$, with $C_1(\rho)=C_1(n,\theta,M_a,\rho)$ ([[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]]).

[F2] Truncated Caccioppoli estimate and truncation subsolution property. For a solution $u$ of $L_0u=0$ and any $k$, choose smooth nondecreasing $\chi_\epsilon$ with $\chi_\epsilon=0$ on $(-\infty,0]$, $\chi_\epsilon=1$ on $[\epsilon,\infty)$, and $\chi_\epsilon\ge0$. Testing the local equation with $\varphi\chi_\epsilon(u-k)$ for nonnegative $\varphi\in C_c^\infty$ is justified by $H^1_0$ density; expansion gives $0=\int\chi_\epsilon(u-k)A Du\cdot D\varphi+\int\varphi\chi_\epsilon'(u-k)A Du\cdot Du$, so the first integral is nonpositive. Letting $\epsilon\downarrow0$, the Sobolev chain rule and $Du=0$ a.e. on $\{u=k\}$ give $a_0((u-k)^+,\varphi)\le0$. Thus $(u-k)^+$ is a nonnegative local weak subsolution. Also, for $B_r\Subset B_R$, $\int_{B_r}|D(u-k)^+|^2\le C_0(R-r)^{-2}\int_{B_R}(u-k)^{+2}$ with $C_0=C_0(\theta,M_a)$ ([[def-local-weak-solution-for-a-divergence-form-operator]], [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]], [[lem-positive-part-is-an-admissible-weak-test-by-truncation]], [[lem-caccioppoli-inequality-for-truncated-subsolutions]], [[lem-sobolev-level-set-iteration-step]]).

[F3] Assume the Axiom of Choice. Smooth functions on the closed ball are dense in $H^1(B_R)$, and $H^1(B_R)$ is the closure of $C^\infty(\overline B_R)$ under the Sobolev norm; a.e. convergence and $L^2$ convergence of the gradients may be assumed along a subsequence ([[thm-smooth-up-to-the-boundary-density-on-smooth-domains]]).

[F4] Measure conventions: $\operatorname{ess\,sup}$ and $\operatorname{ess\,inf}$ are the least essential upper and greatest essential lower bounds, and $|\cdot|$ denotes Lebesgue measure. The signed-extrema convention is [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]; [[prop-essential-supremum-is-attained-as-the-least-essential-bound]] and [[def-essential-supremum-with-respect-to-a-measure]] concern the corresponding absolute essential bound.

[F5] Fatou's lemma: if nonnegative indicators have pointwise lower limit at least the indicator of a limiting set, then the measure of that set is at most the lower limit of the approximating measures ([[thm-fatou-lemma]]).

## Proof

**Proof technique:** direct; after normalisation the measure of the level sets is driven down by a telescoping De Giorgi iteration, and the local boundedness estimate turns the small measure of the top level set into a sup bound.

1.1 Dichotomy and normalisation. For any $B_R(x_0)\Subset\Omega$, local boundedness applied to $u^+$ and $(-u)^+$ on slightly larger interior balls gives finite $M,m$; these truncations are subsolutions by [F2]. The strict sets $\{u>(M+m)/2\}\cap B_R$ and $\{u<(M+m)/2\}\cap B_R$ are disjoint, so at least one has measure at most $|B_R|/2$, proving claim 1. For claim 2 assume now $B_{2R}(x_0)\Subset\Omega$. If $L:=(M-m)/2=0$, then $u$ is constant a.e. on $B_R$ and the reduction is immediate. Otherwise define $v(y):=(u(x_0+Ry)-(M+m)/2)/L$ on $B_2(0)$. It solves the homogeneous equation with rescaled coefficients $A(x_0+Ry)$ and the same bounds $\theta,M_a$, with essential extrema $1,-1$ on $B_1$. Oscillations scale by $L$, so it remains to prove $\operatorname{ess\,osc}_{B_{1/2}}v\le2-\eta_0$ for a universal $\eta_0>0$. The dichotomy gives the required half-level measure bound on $B_1$. [given, F1, F2, F4, algebra]

1.2 The measure estimate. Let $w\in H^1(B_R)$ and $t<T$. Then $|\{w\le t\}\cap B_R|\,|\{w\ge T\}\cap B_R|^{1-1/n}\le\frac{C_n}{T-t}|B_R|\int_{B_R}|Dw|dx$. For smooth $w$, fix $y$ with $w(y)\ge T$ and write $x=y+r\omega$ for $x$ with $w(x)\le t$. Along the segment, $T-t\le w(y)-w(x)\le\int_0^r|Dw(y+s\omega)|ds$. Integrating over the low set in polar coordinates, interchanging the radial integrals, and using $r\le2R$ gives $$|\{w\le t\}\cap B_R|\le\frac{C_n|B_R|}{T-t}\int_{B_R}\frac{|Dw(z)|}{|z-y|^{n-1}}dz.$$ Integrate this in $y$ over $H:=\{w\ge T\}\cap B_R$. For every measurable $E$ of finite measure, splitting the kernel integral at radius $|E|^{1/n}$ gives $\sup_z\int_E|z-y|^{1-n}dy\le C_n|E|^{1/n}$; hence the asserted inequality follows after division by $|H|^{1/n}$ (the cases $|H|=0$ or $|\{w\le t\}|=0$ are immediate). For general $w$, choose $w_j\in C^\infty(\overline B_R)$ converging strongly in $H^1$ and a subsequence converging a.e. Given $0<\epsilon<(T-t)/2$, apply the smooth inequality to $w_j$ at levels $t+\epsilon,T-\epsilon$. Pointwise lower limits of the indicators dominate those of $\{w\le t\}$ and $\{w\ge T\}$; [F5] passes the left side to the limit, while strong $L^2$ convergence of gradients gives convergence of $\int|Dw_j|$. Letting $\epsilon\downarrow0$ proves the claim. For its transition-set form, apply it to $z:=\min\{(w-t)^+,T-t\}$ at levels $0,T-t$. Then $\{z\le0\}=\{w\le t\}$, $\{z\ge T-t\}=\{w\ge T\}$, and $Dz=\mathbf1_{\{t<w<T\}}Dw$ a.e. Thus if $|\{w\le t\}\cap B_R|\ge\gamma|B_R|$, then Cauchy--Schwarz gives $$|\{w\ge T\}\cap B_R|^{1-1/n}\le\frac{C_n}{\gamma(T-t)}|\{t<w<T\}\cap B_R|^{1/2}\Bigl(\int_{B_R}|D(w-t)^+|^2\Bigr)^{1/2}.$$ The Sobolev truncation chain rule also gives $Dw=0$ a.e. on the endpoint level sets. [given, F3, F4, F5, algebra]

2.1 The telescoping iteration. Work with the normalised $v$ of step 1.1 on $B_1$ and suppose first $|\{v>0\}\cap B_1|\le\tfrac12|B_1|$. Set $s:=(3/4)^{1/n}$, so $|B_s|=\tfrac34|B_1|$, and put $T_k:=1-2^{-k-1}$, $E_k:=\{v>T_k\}\cap B_s$, and $M_k:=|E_k|$. Since $\{v\le0\}\cap B_1=B_1\setminus(\{v>0\}\cap B_1)$ has measure at least $\tfrac12|B_1|$ and $T_k>0$, it follows that $|\{v\le T_k\}\cap B_s|\ge\tfrac12|B_1|-|B_1\setminus B_s|=\tfrac14|B_1|=\tfrac13|B_s|$ for every $k$. The truncated Caccioppoli estimate of [F2], applied with outer radius $1$ and inner radius $s$, gives $\int_{B_s}|D(v-T_k)^+|^2\le C(n,\theta,M_a)(1-T_k)^2|B_1|$, since $v\le1$ a.e. on $B_1$. Apply the transition-set inequality of step 1.2 on $B_s$ with $t=T_k$, $T=T_{k+1}$, and $\gamma=1/3$. As $T_{k+1}-T_k=(1-T_k)/2$, the level gap cancels the Caccioppoli factor and yields $$M_{k+1}^{1-1/n}\le C(n,\theta,M_a)|B_1|^{1/2}(M_k-M_{k+1})^{1/2},\qquad M_{k+1}^{2-2/n}\le C(n,\theta,M_a)(M_k-M_{k+1}).$$ The constant absorbs the fixed volume $|B_1|$. [step 1.2, F2, algebra]

3.1 Summation. Summing the inequalities of step 2.1 over $k=0,\dots,N-1$ and using $M_{k+1}\ge M_N$ gives $N M_N^{2-2/n}\le C\sum_{k=0}^{N-1}(M_k-M_{k+1})=C(M_0-M_N)\le C|B_1|$, hence $M_N\le C(n,\theta,M_a)N^{-n/(2n-2)}|B_1|$ for every $N\ge1$. [step 2.1, algebra]

4.1 The top level set is finally small. By [F2], $v_N:=(v-T_N)^+$ is a nonnegative subsolution of $L_0w=0$. Apply the local boundedness estimate [F1] on outer ball $B_s$ with inner ratio $(2s)^{-1}$; since $B_{1/2}\subset B_s$ and $\int_{B_s}v_N^2\le M_N(1-T_N)^2$, this gives $$\operatorname{ess\,sup}_{B_{1/2}}v_N\le C_1(n,\theta,M_a)(|B_s|^{-1}M_N)^{1/2}(1-T_N)\le C_2N^{-n/(4n-4)}(1-T_N)$$ by step 3.1. Choose $N=N(n,\theta,M_a)\ge1$ so large that $C_2N^{-n/(4n-4)}\le\tfrac12$; then $v\le T_N+\tfrac12(1-T_N)=1-\eta_0$ on $B_{1/2}$ with $\eta_0:=\tfrac12(1-T_N)>0$. [step 3.1, F1, F2, algebra]

5.1 Conclusion of the reduction. If instead $|\{v<0\}\cap B_1|\le\tfrac12|B_1|$, steps 2.1-4.1 apply verbatim to $-v$ (which is again a solution of the homogeneous equation) and give $v\ge-1+\eta_0$ on $B_{1/2}$. In the first case $\operatorname{ess\,sup}_{B_{1/2}}v\le1-\eta_0$ and $\operatorname{ess\,inf}_{B_{1/2}}v\ge-1$, in the second $\operatorname{ess\,sup}_{B_{1/2}}v\le1$ and $\operatorname{ess\,inf}_{B_{1/2}}v\ge-1+\eta_0$; in both cases $\operatorname{ess\,osc}_{B_{1/2}}v\le2-\eta_0$. Undoing the affine normalisation of step 1.1 multiplies both oscillations by $L$ and preserves the radius ratio, so $\operatorname{ess\,osc}_{B_{R/2}(x_0)}u\le(1-\eta_0/2)\operatorname{ess\,osc}_{B_R(x_0)}u$, which is claim 2 with $\eta:=1-\eta_0/2\in(0,1)$ and with $\eta_0$, hence $\eta$, depending only on $n,\theta,M_a$. [step 1.1, step 4.1, algebra] ∎ 
