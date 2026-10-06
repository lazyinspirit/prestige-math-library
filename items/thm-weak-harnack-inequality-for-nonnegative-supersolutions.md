---
id: thm-weak-harnack-inequality-for-nonnegative-supersolutions
kind: theorem
title: "Weak Harnack inequality for nonnegative supersolutions"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 11
deps: [lem-moser-iteration-for-positive-supersolutions, lem-logarithmic-caccioppoli-estimate-for-positive-supersolutions, thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions, thm-weak-maximum-principle-for-coercive-divergence-form-equations, def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, def-uniformly-elliptic-divergence-form-operator, lem-elliptic-form-is-well-defined-and-bounded, lem-coercivity-of-the-principal-dirichlet-form, thm-lax-milgram, def-h-minus-one-as-the-dual-of-h-one-zero, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions, lem-weak-leibniz-rule-with-a-smooth-factor, lem-compact-support-zero-extension-in-wkp, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-smooth-bump-between-concentric-euclidean-balls, thm-poincare-inequality-for-w-one-p-zero, cor-sobolev-inequality-for-w-one-p-zero, thm-critical-sobolev-embedding-into-every-finite-lq, thm-holder-inequality-for-integrals, def-ball-average-operator-on-r-n, def-l-p-space-as-a-quotient-by-null-functions, def-essential-supremum-with-respect-to-a-measure, thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-kernel-of-the-trace-is-w-one-p-zero, def-bounded-c-k-domain-and-boundary-charts, def-countable-choice, def-axiom-of-choice, thm-hk-is-a-hilbert-space, thm-dominated-convergence]
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
    - title: "Brian Krummel, DeGiorgi-Nash lecture notes (15 March 2016; complete 9-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf"
      locator: "Theorem 2, the inequalities (7)-(13) and the log-estimate section (14)-(23), printed pp. 1-9 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 17, Theorem 2 and Theorem 1, printed pp. 199-210 (read in full)"
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "Theorem 2 and Corollary 1 with the ball geometry B_R ⊂ B_{2R} ⊂ B_{4R}, printed pp. 1-2 (read in full)"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, let $A$ and $L_0$ be as in [[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]], and let $F\in L^q_{\mathrm{loc}}(\Omega)$ with $q>n/2$. Let $u\in H^1(\Omega;\mathbb R)$ satisfy $u\ge0$ a.e. and
$$a_0(u,\varphi)\ge-\int_\Omega F\,\varphi\,dx\qquad\text{for every nonnegative }\varphi\in C_c^\infty(\Omega;\mathbb R),$$
i.e. $u$ is a nonnegative weak supersolution of $L_0u=-F$. Then for every ball $B_R(x_0)$ with $B_{2R}(x_0)\Subset\Omega$ and every $0<p<n/(n-2)$,
$$R^{-n/p}\|u\|_{L^p(B_R(x_0))}\le C\Bigl(\operatorname{ess\,inf}_{B_{R/2}(x_0)}u+R^{\,2-n/q}\|F\|_{L^q(B_{2R}(x_0))}\Bigr),$$
with $C=C(n,q,\theta,M_a,p)$ independent of $R$ and $x_0$. For $n=2$ every finite $p$ is allowed, with the critical Sobolev embedding in place of the $2^*$ embedding. The forcing term enters additively and cannot be dropped: the exponent range $0<p<n/(n-2)$ and the threshold $q>n/2$ are the ones the iteration actually produces.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; an open set $\Omega\subseteq\mathbb R^n$, $n\ge2$; measurable symmetric uniformly elliptic coefficients $A$ with constants $\theta,M_a$; the principal operator $L_0u=-D_i(a^{ij}D_ju)$ with form $a_0$; a source $F\in L^q_{\mathrm{loc}}(\Omega)$, $q>n/2$; a nonnegative $u\in H^1(\Omega;\mathbb R)$ with $a_0(u,\varphi)\ge-\int_\Omega F\varphi\,dx$ for all nonnegative $\varphi\in C_c^\infty(\Omega;\mathbb R)$; a ball $B_R(x_0)$ with $B_{2R}(x_0)\Subset\Omega$ and $0<p<n/(n-2)$ when $n\ge3$, or any finite $p>0$ when $n=2$.

[F1] Assume the Axiom of Choice. Moser chains for positive supersolutions: if $w\in H^1(B_S;\mathbb R)$ satisfies $w>0$ a.e. and $a_0(w,v)\ge0$ for every nonnegative $v\in H^1_0(B_S)$, then for every $0<\rho<1$ and every $p>0$, $(\frac{1}{|B_S|}\int_{B_S}w^{-p}dx)^{-1/p}\le C_1\operatorname{ess\,inf}_{B_{\rho S}}w$, and for some $p_0=p_0(n,\theta,M_a)>0$ one has $(\frac{1}{|B_{3S/4}|}\int_{B_{3S/4}}w^{p_0}dx)^{1/p_0}\le C_1(\frac{1}{|B_{3S/4}|}\int_{B_{3S/4}}w^{-p_0}dx)^{-1/p_0}$; the constants depend only on their listed arguments ([[lem-moser-iteration-for-positive-supersolutions]], [[def-ball-average-operator-on-r-n]]).

[F2] Assume the Axiom of Choice. Logarithmic estimate: for every positive supersolution $w$ as in [F1] on a ball, every $\eta\in C_c^\infty$ and every $\varepsilon>0$, $\int\eta^2|D\log(w+\varepsilon)|^2dx\le\frac{4M_a^2}{\theta}\int|D\eta|^2dx$ ([[lem-logarithmic-caccioppoli-estimate-for-positive-supersolutions]]).

[F3] Assume the Axiom of Choice. On the reference ball $B_2$, the weak maximum principle for a zero-trace solution of $L_0h=g$ gives $h\ge0$ when $g\ge0$ and $\operatorname{ess\,sup}_{B_2}h\le C\|g^+\|_{L^q(B_2)}$ for $q>n/2$ (and $q>1$ in dimension two). The constant is fixed for this ball, and the estimate applies after scaling $B_{2R}$ to $B_2$ ([[thm-weak-maximum-principle-for-coercive-divergence-form-equations]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-bounded-c-k-domain-and-boundary-charts]]).

[F4] Assume the Axiom of Choice. Lax-Milgram and coercivity on $H^1_0(B_2)$: $H^1(B_2)$ is Hilbert by [[thm-hk-is-a-hilbert-space]]. The closure definition makes $H^1_0(B_2)$ a closed linear subspace; a Cauchy sequence converges in $H^1(B_2)$ and its limit remains in that closure, so the inherited inner product makes it Hilbert. The form $a_0$ is a bounded coercive form there, and every bounded conjugate-linear functional on $H^1_0(B_2)$ is represented by a unique weak Dirichlet solution ([[thm-lax-milgram]], [[lem-coercivity-of-the-principal-dirichlet-form]], [[lem-elliptic-form-is-well-defined-and-bounded]], [[def-h-minus-one-as-the-dual-of-h-one-zero]], [[def-weak-dirichlet-solution-for-a-divergence-form-operator]], [[def-wkp-zero-as-a-sobolev-closure]], [[thm-poincare-inequality-for-w-one-p-zero]]).

[F5] Assume the Axiom of Choice. Embedding and Holder input: for $n\ge3$ and $1\le r<2^*$ there is $C_r$ with $\|v\|_{L^r(B_1)}\le C_r\|v\|_{H^1_0(B_1)}$; in dimension two the same holds for every finite $r$. By dilation this makes $\varphi\mapsto\int_{B_2}F^+\varphi$ bounded on $H^1_0(B_2)$ when $q>n/2$ (and $q>1$ for $n=2$), since the conjugate exponent $q'$ lies in the available Sobolev range. Also, if $z\in H^1(B_2)$, multiplying by a smooth cutoff supported in $B_2$ and equal to one on $B_{3/2}$ gives $z\in L^r(B_{3/2})$ for every $1\le r<2^*$ when $n\ge3$ and every finite $r$ when $n=2$. The Sobolev norms scale as $\|v\|_{L^r(B_R)}\le C_r R^{1+n/r-n/2}\|Dv\|_{L^2(B_R)}$ for $v\in H^1_0(B_R)$, with the corresponding inhomogeneous local estimate after cutoff; Holder's inequality gives $\|g\|_{L^r(E)}\le |E|^{1/r-1/s}\|g\|_{L^s(E)}$ for $1\le r<s\le\infty$ ([[cor-sobolev-inequality-for-w-one-p-zero]], [[thm-critical-sobolev-embedding-into-every-finite-lq]], [[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F6] Assume the Axiom of Choice. For $U=u+\varepsilon\ge\varepsilon>0$ and $0<s<1$, both scalar maps $t\mapsto(\max\{t,0\}+\varepsilon)^{s-1}$ and $t\mapsto(\max\{t,0\}+\varepsilon)^{s/2}$ are globally Lipschitz. Their compositions with $u$ lie in $H^1_{\mathrm{loc}}$; the first, multiplied by a compactly supported smooth cutoff squared, gives an $H^1_0$ test by the product rule, zero extension and smooth density. The second gives $V=U^{s/2}\in H^1_{\mathrm{loc}}$ with $DV=(s/2)U^{s/2-1}Du$ ([[thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[lem-compact-support-zero-extension-in-wkp]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]).

[F7] Assume the Axiom of Choice. Dominated convergence passes integrals with an integrable majorant ([[thm-dominated-convergence]]). Scaling invariance on doubled balls: with $v(y):=u(x_0+Ry)$ and $G(y):=R^2F(x_0+Ry)$, the weak supersolution inequality scales to $B_2$, $\|G\|_{L^q(B_2)}=R^{2-n/q}\|F\|_{L^q(B_{2R}(x_0))}$, and $R^{-n/p}\|u\|_{L^p(B_R(x_0))}=|B_1|^{1/p}\bigl(\frac{1}{|B_1|}\int_{B_1}|v|^p\bigr)^{1/p}$ ([[def-uniformly-elliptic-divergence-form-operator]], [[def-ball-average-operator-on-r-n]], [[thm-poincare-inequality-for-w-one-p-zero]]).

## Proof

**Proof technique:** direct; scale the doubled ball to $B_2$, add a Lax-Milgram barrier there to make the solution a homogeneous supersolution on the full region required by Moser's comparison, derive the positive-integrability transitions using only negative-power tests with exponent $s-1<0$, then undo the scaling.

1.1 Removing the source by a barrier on the doubled ball. After the rescaling of [F7] it suffices to treat $R=1$, $B_2(x_0)\Subset\Omega$, and source norm $\|F\|_{L^q(B_2)}$. Since $F\in L^q(B_2)$ and $q>n/2$, the local supersolution inequality extends by density from nonnegative smooth tests to all nonnegative $H^1_0(B_2)$ tests: the embedding in [F5] puts $H^1_0(B_2)$ in $L^{q'}(B_2)$. The functional $\varphi\mapsto\int_{B_2}F^+\varphi\,dx$ is therefore bounded on $H^1_0(B_2)$, so [F4] gives a unique $h\in H^1_0(B_2)$ with $a_0(h,\varphi)=\int_{B_2}F^+\varphi\,dx$ for all $\varphi\in H^1_0(B_2)$. Since $F^+\ge0$, [F3] gives $h\ge0$; its radius-two estimate gives $\operatorname{ess\,sup}_{B_2}h\le C\|F^+\|_{L^q(B_2)}\le C\|F\|_{L^q(B_2)}$, where the fixed scaling factor $2^{2-n/q}$ is absorbed into $C$. With $w:=u+h$ one has $w\ge0$ and $a_0(w,\varphi)\ge-\int_{B_2}F\varphi+\int_{B_2}F^+\varphi\ge0$ for every nonnegative $\varphi\in H^1_0(B_2)$, so $w$ is a nonnegative homogeneous weak supersolution on the full doubled ball. Also $\|u\|_{L^p(B_1)}\le\|w\|_{L^p(B_1)}$ and $\operatorname{ess\,inf}_{B_{1/2}}w\le\operatorname{ess\,inf}_{B_{1/2}}u+\operatorname{ess\,sup}_{B_2}h$. [given, F3, F4, F5, F7]

1.2 The seed exponent on a compactly contained ball. Let $w\ge0$ be a homogeneous weak supersolution on $B_2$ and set $U:=w+\varepsilon$. The outer ball $B_{7/4}$ is compactly contained in $B_2$, so the comparison clause of [F1], supplied by the logarithmic estimate [F2], gives $(\frac{1}{|B_{21/16}|}\int_{B_{21/16}}U^{p_0})^{1/p_0}\le C_1(\frac{1}{|B_{21/16}|}\int_{B_{21/16}}U^{-p_0})^{-1/p_0}$ for some $p_0=p_0(n,\theta,M_a)>0$. Apply the negative-power chain of [F1] with outer ball $B_{21/16}\Subset B_2$ and ratio $\rho=8/21$; it bounds the reciprocal negative moment on $B_{21/16}$ by $C_2\operatorname{ess\,inf}_{B_{1/2}}U$. Decrease the seed to $s_0:=\min\{p_0,1/2\}<1$; Jensen's inequality on the normalized ball mean gives $(\frac{1}{|B_{21/16}|}\int_{B_{21/16}}U^{s_0})^{1/s_0}\le C_3\operatorname{ess\,inf}_{B_{1/2}}U$. [F1, F2, F5, algebra]

1.3 The positive-integrability transition for input exponents below one. Fix $0<s<1$ and a cutoff $\eta\in C_c^\infty(B_R)$ with $\eta=1$ on $B_r$, $0<r<R\le2$. For $U=w+\varepsilon$, the admissible test $\eta^2U^{s-1}$ of [F6] and the homogeneous supersolution inequality give $$(1-s)\int\eta^2U^{s-2}\langle A Dw,Dw\rangle \le2\int|\eta|U^{s-1}|\langle A Dw,D\eta\rangle|.$$ Cauchy--Schwarz in the $A$-energy bounds the right side by $2M_a(\int\eta^2U^{s-2}\langle A Dw,Dw\rangle)^{1/2}(\int U^s|D\eta|^2)^{1/2}$. Absorbing this energy square root and using ellipticity gives $\int\eta^2U^{s-2}|Dw|^2\le\frac{4M_a^2}{(1-s)^2\theta}\int U^s|D\eta|^2$. With $V:=U^{s/2}$ this becomes $\int\eta^2|DV|^2\le\frac{M_a^2s^2}{(1-s)^2\theta}\int V^2|D\eta|^2$. Applying Sobolev to $\eta V$ and the product rule therefore gives, for $n\ge3$ and every $1<\lambda\le\kappa_*:=n/(n-2)$, or for $n=2$ and every finite $\lambda>1$, $$\|U\|_{L^{s\lambda}(B_r)}\le\Bigl(\frac{C(s,\lambda,n,\theta,M_a)}{R-r}\Bigr)^{2/s}\|U\|_{L^s(B_R)}.$$ The truncation and density in [F6] justify the test; no estimate for an untruncated positive power is assumed. [given, F3, F5, F6, algebra]

2.1 Reaching every exponent in the claimed range. Work on concentric balls between $B_{21/16}$ and $B_1$, using equal positive radius gaps for the finitely many transitions below. If $0<p\le s_0$, Jensen on $B_1\subset B_{21/16}$ and step 1.2 give $(\frac{1}{|B_1|}\int_{B_1}U^p)^{1/p}\le C\operatorname{ess\,inf}_{B_{1/2}}U$. For $s_0<p\le\kappa_*s_0$ when $n\ge3$, use step 1.3 once with $s=s_0$ and $\lambda=p/s_0\le\kappa_*$. If $\kappa_*s_0<p<\kappa_*$, choose an integer $m\ge1$ so large that $a:=(p/(\kappa_*s_0))^{1/m}<\kappa_*$. Apply step 1.3 $m$ times with exponent multiplier $a$, reaching input exponent $s_m=s_0a^m=p/\kappa_*<1$, then once with multiplier $\kappa_*$. Every input exponent is below one, so all tests in step 1.3 are admissible. The constants are finite and depend only on $n,\theta,M_a,p$. In dimension two, for any finite $p>s_0$, a single use of step 1.3 with $s=s_0$ and finite $\lambda=p/s_0$ suffices. In every case this proves $(\frac{1}{|B_1|}\int_{B_1}U^p)^{1/p}\le C\operatorname{ess\,inf}_{B_{1/2}}U$ for the stated range. [step 1.2, step 1.3, F5, algebra]

3.1 Removing regularization in the homogeneous case. Let $\varepsilon\downarrow0$ in step 2.1. The right side tends to $C\operatorname{ess\,inf}_{B_{1/2}}w$, while $U^p\downarrow w^p$ and is dominated by $(w+1)^p$, integrable on $B_{3/2}$ by the cutoff-local Sobolev consequence in [F5] because $p<n/(n-2)<2^*$ for $n\ge3$ and $p$ is finite for $n=2$ (for $p<1$, use $(w+1)^p\le1+w$). Dominated convergence passes the positive-power mean and yields the homogeneous weak Harnack estimate. [step 2.1, F5, F7]

4.1 Conclusion with the source and the radius rescaling. For the barrier supersolution $w=u+h$ of step 1.1, step 3.1 gives $\|w\|_{L^p(B_1)}\le C\operatorname{ess\,inf}_{B_{1/2}}w$. Since $u\le w$ and $\operatorname{ess\,inf}_{B_{1/2}}w\le\operatorname{ess\,inf}_{B_{1/2}}u+\operatorname{ess\,sup}_{B_2}h$, step 1.1 gives $\|u\|_{L^p(B_1)}\le C(\operatorname{ess\,inf}_{B_{1/2}}u+\|F\|_{L^q(B_2)})$. Scaling back by [F7] gives the estimate with additive term $R^{2-n/q}\|F\|_{L^q(B_{2R})}$; the doubled-ball hypothesis supplies the full region used in the barrier and in steps 1.2--2.1. The $n=2$ argument allows every finite $p$, and all constants are independent of $R,x_0$. [step 1.1, step 3.1, F5, F7, algebra] ∎


## Remarks

- **Radius convention.** The quantitative interior form of the weak Harnack inequality controls the mean over $B_R$ by the essential infimum over $B_{R/2}$ and requires the supersolution inequality on the doubled ball $B_{2R}$, exactly as in Theorem 2 of [K1] and Theorem 2 of [K2]; the statement records this explicitly rather than silently enlarging the class of admissible balls.
