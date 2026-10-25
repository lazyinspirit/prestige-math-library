---
id: thm-weak-maximum-principle-for-coercive-divergence-form-equations
kind: theorem
title: "Weak maximum principle for coercive divergence-form equations"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, lem-positive-part-is-an-admissible-weak-test-by-truncation, lem-positive-part-of-a-zero-trace-function-has-zero-trace, lem-nonlinear-geometric-iteration-sequence-converges-to-zero, thm-gagliardo-nirenberg-sobolev-inequality-for-p-one, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, thm-poincare-inequality-for-w-one-p-zero, cor-sobolev-inequality-for-w-one-p-zero, thm-critical-sobolev-embedding-into-every-finite-lq, thm-chebyshev-markov-inequality-for-the-integral, thm-holder-inequality-for-integrals, prop-essential-supremum-is-attained-as-the-least-essential-bound, def-essential-supremum-with-respect-to-a-measure, def-l-p-space-as-a-quotient-by-null-functions, thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-kernel-of-the-trace-is-w-one-p-zero, def-bounded-c-k-domain-and-boundary-charts, def-countable-choice, def-axiom-of-choice]
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
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 13, printed pp. 147-158: the weak maximum principle Theorem 4 for weak subsolutions, its proof via the sets {|Du_k|>0}, Lemma 4 and the boundary conventions (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (author manuscript, version 11 February 2025; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 10, Section 1 (Theorem 10.1 and Lemma 10.2) and Chapter 5, Section 8 (Theorems 5.33-5.34), printed pp. 139-144 and 223-232 (read in full)"
    - title: "Brian Krummel, DeGiorgi-Nash lecture notes (15 March 2016; complete 9-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf"
      locator: "Theorem 1 and the forcing terms (the L^q and L^{q/2} hypotheses with q > n), printed pp. 1-9 (read in full)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice and the Axiom of Choice through the Poincare and Sobolev suppliers below. Let $n\ge2$, let $\Omega\subset\mathbb R^n$ be a bounded $C^1$ domain, and let $L$, $a$ and the real coefficient functions $a^{ij},b^i,c$ be as in [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]], with ellipticity constant $\theta$ and bounds $M_a,M_b,M_c$. Let $f\in L^1_{\mathrm{loc}}(\Omega;\mathbb R)$ and $u\in H^1(\Omega;\mathbb R)$ be a real local weak subsolution of $Lu=f$. Suppose the weak sign condition
$$\int_\Omega\bigl(c\,\zeta+b^iD_i\zeta\bigr)dx\ge0\qquad\text{for every }\zeta\in C_c^\infty(\Omega),\ \zeta\ge0,$$
holds, and assume $c\ge0$ a.e. on $\Omega$. Then:

1. **Homogeneous case.** If $f=0$ a.e., then
$$\operatorname{ess\,sup}_{\Omega}u\le\sup_{\partial\Omega}u^+,$$
with the boundary supremum of [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]. If in addition $b\equiv0$, $c\equiv0$, and $u$ is a weak solution of $Lu=0$, then $\operatorname{ess\,sup}_\Omega u=\sup_{\partial\Omega}u$.

2. **Forcing with signed lower order.** If $b\equiv0$, $c\ge0$ a.e. and $f\in L^q(\Omega)$ for some $q>n/2$ ($q>1$ when $n=2$), then the local inequality extends to all nonnegative $H^1_0(\Omega)$ tests and
$$\operatorname{ess\,sup}_{\Omega}u\le\sup_{\partial\Omega}u^++C\|f^+\|_{L^q(\Omega)},\qquad C=C(n,q,\theta,M_a,M_c,\Omega),$$
where $\Omega$ enters $C$ only through its Poincare constant and volume.

If $u$ is a weak supersolution of $Lu=f$ under either set of hypotheses, apply the corresponding bound to $-u$ for the **same** operator coefficients $(a,b,c)$ and source $-f$. This gives $\operatorname{ess\,inf}_\Omega u\ge-\sup_{\partial\Omega}u^-$ in the homogeneous case and $\operatorname{ess\,inf}_\Omega u\ge-\sup_{\partial\Omega}u^- -C\|f^-\|_{L^q(\Omega)}$ in the forcing case. The maximum-principle conclusions concern real-valued classes and real coefficients.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; a bounded $C^1$ domain $\Omega\subset\mathbb R^n$, $n\ge2$; real coefficients $a^{ij},b^i,c\in L^\infty(\Omega)$ with $\theta|\xi|^2\le\langle A\xi,\xi\rangle$ and $|a^{ij}|\le M_a$, $|b^i|\le M_b$, $|c|\le M_c$ a.e.; $f\in L^q(\Omega)$ with $q>n/2$; and a weak subsolution $u\in H^1(\Omega;\mathbb R)$ satisfying the weak sign condition.

[F1] Assume the Axiom of Choice. Trace, boundary order and truncation: $\sup_{\partial\Omega}u=\operatorname{ess\,sup}_{\partial\Omega}Tu$ and $(u-k)^+\in H^1_0(\Omega)$ if and only if $Tu\le k$ a.e.; moreover $(u-k)^+\in H^1(\Omega)$ with $D(u-k)^+=1_{\{u>k\}}Du$, and for $\eta\in C_c^\infty(\Omega)$ the class $\eta^2(u-k)^+$ is an admissible nonnegative test ([[lem-positive-part-of-a-zero-trace-function-has-zero-trace]], [[lem-positive-part-is-an-admissible-weak-test-by-truncation]], [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[thm-kernel-of-the-trace-is-w-one-p-zero]]).

[F2] Sobolev inputs, all in the stated dimension $n\ge2$. The Gagliardo--Nirenberg--Sobolev inequality is stated for $C_c^\infty(\mathbb R^n)$ ([[thm-gagliardo-nirenberg-sobolev-inequality-for-p-one]]); if $w\in W^{1,1}_0(\Omega)$, approximate it in $W^{1,1}$ by $C_c^\infty(\Omega)$, extend each approximant by zero to $\mathbb R^n$, and pass to the limit to get $\|w\|_{L^{n/(n-1)}(\Omega)}\le C(n)\|Dw\|_{L^1(\Omega)}$. Holder on measurable $E\subseteq\Omega$ then gives $\int_E|w|\,dx\le C(n)|E|^{1/n}\int_\Omega|Dw|\,dx$. The density and zero-extension convention is [[def-wkp-zero-as-a-sobolev-closure]], and the Sobolev norms are those of [[def-sobolev-space-wkp-and-its-norm]]. For $n\ge3$ and $1\le p<n$ there is $S=S(n,p)$ with $\|w\|_{L^{p^*}}\le S\|Dw\|_{L^p}$ for $w\in W^{1,p}_0(\Omega)$, $p^*=np/(n-p)$ ([[cor-sobolev-inequality-for-w-one-p-zero]]); for $n=2$ the embedding $W^{1,2}(\Omega)\hookrightarrow L^\kappa(\Omega)$ holds on bounded extension domains for every finite $\kappa\ge1$ ([[thm-critical-sobolev-embedding-into-every-finite-lq]]). In particular, on the bounded $C^1$ domain $\Omega$, for $n\ge3$ one has $H^1_0(\Omega)\hookrightarrow L^\kappa(\Omega)$ for $2\le\kappa\le2^*$, while for $n=2$ every finite $\kappa\ge2$ is available, with corresponding constants $S_\kappa$. In dimension two these zero-boundary constants require only the volume: for $\kappa>2$, set $p=2\kappa/(\kappa+2)\in(1,2)$, so $p^*=\kappa$. Finite measure makes $H^1_0(\Omega)\subset W^{1,p}_0(\Omega)$ by the same smooth approximants, and the zero-boundary Sobolev inequality gives $\|w\|_\kappa\le C(2,p)\|Dw\|_p\le C(2,p)|\Omega|^{1/\kappa}\|Dw\|_2$. This proves the claimed dependence of the forcing constant on volume and Poincare constant alone.

[F3] Poincare inequality on $W^{1,2}_0(\Omega)$: there is $C_P=C_P(\Omega)$ with $\|w\|_{L^2(\Omega)}\le C_P\|Dw\|_{L^2(\Omega)}$ for every $w\in H^1_0(\Omega)$ ([[thm-poincare-inequality-for-w-one-p-zero]]).

[F4] Chebyshev and Holder: $|\{w>t\}|\le t^{-p}\int w^p$ for nonnegative measurable $w$; and for exponents $1\le r<\kappa$ one has $\|w\|_{L^r(E)}\le|E|^{1/r-1/\kappa}\|w\|_{L^\kappa(E)}$ for measurable $E$ of finite measure ([[thm-chebyshev-markov-inequality-for-the-integral]], [[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-essential-supremum-with-respect-to-a-measure]], [[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F5] Nonlinear iteration: if $Y_{j+1}\le CB^{\,j}Y_j^{\,1+\delta}$ with $C,B\ge1$, $\delta>0$ and $Y_0\le C^{-1/\delta}(2B)^{-1/\delta^2}$, then $Y_j\le Y_0\lambda^j$ with $\lambda=(2B)^{-1/\delta}$ and $Y_j\to0$ ([[lem-nonlinear-geometric-iteration-sequence-converges-to-zero]]).

## Proof

**Proof technique:** use the weak sign condition on the first- and second-order truncation tests for the homogeneous maximum bound; for forcing, combine the energy estimate with a De Giorgi iteration whose finite Sobolev exponent is chosen to make the recurrence superlinear.

1.1 Homogeneous maximum bound. Put $t:=\sup_{\partial\Omega}u^+$. If $t=+\infty$ the bound is immediate. Otherwise $t\ge0$ and $w:=(u-t)^+\in H^1_0(\Omega)$ by [F1]. Since the equation is homogeneous, boundedness of the form and density extend its inequality from nonnegative compactly supported smooth tests to all nonnegative $H^1_0$ tests. For the weak sign condition, choose real $\phi_j\in C_c^\infty(\Omega)$ with $\phi_j\to w$ in $H^1_0$. Then $\phi_j^2\ge0$ and $\phi_j^2\to w^2$ in $W^{1,1}$, since Cauchy--Schwarz gives convergence of both the functions and their gradients. Thus $w^2\in W^{1,1}_0$ with $D(w^2)=2wDw$, and boundedness of $b,c$ makes $\zeta\mapsto\int(c\zeta+b^iD_i\zeta)$ continuous on $W^{1,1}$; the sign condition therefore holds on $w^2$ without asserting $w^2\in H^1_0$. Testing with $w$ and using $u=w+t$ on $\{w>0\}$ gives $$0\ge a(u,w)=\int_\Omega a^{ij}D_jwD_iw+\int_\Omega(cw^2+b^iD_iw\,w)+t\int_\Omega cw.$$ The lower-order quadratic term is $$\int_\Omega(cw^2+b^iD_iw\,w)=\frac12\int_\Omega cw^2+\frac12\int_\Omega(cw^2+b^iD_i(w^2))\ge0,$$ by $c\ge0$ and the extended weak sign condition; the boundary-shift term $t\int cw$ is nonnegative as well. Hence $\theta\|Dw\|_2^2\le0$, and Poincare gives $w=0$. Therefore $\operatorname{ess\,sup}_\Omega u\le t$. [given, F1, F3, algebra]

1.2 Forcing energy bound. Assume $b\equiv0$, $c\ge0$, and $f\in L^q(\Omega)$ with the stated exponent. If $t:=\sup_{\partial\Omega}u^+=+\infty$, the claim is immediate; otherwise set $v:=(u-t)^+\in H^1_0(\Omega)$. Since $q>n/2$, Sobolev and Holder show that $f$ defines a continuous functional on $H^1_0(\Omega)$, so the local subsolution inequality extends to this test. On $\{v>0\}$, $u=v+t$, and testing gives $$\theta\|Dv\|_2^2\le\int_\Omega f^+v\le\|f^+\|_q\|v\|_{q'}.$$ For $n\ge3$ take $\kappa=2^*$; for $n=2$ take any finite $\kappa>q'$. Holder, Poincare and the available Sobolev embedding imply $\|v\|_{q'}\le C\|Dv\|_2$. Thus $\|v\|_{H^1_0}+\|v\|_2\le C_E\|f^+\|_q$, where constants depend only on the parameters in the Statement. [given, F2, F3, F4, algebra]

2.1 The forcing iteration. Write $a:=\|f^+\|_{L^q(\Omega)}$. If $a=0$, step 1.2 gives $v=0$. Otherwise fix $T>0$ and define $k_j=t+T(1-2^{-j})$, $E_j:=\{u>k_j\}$, $Y_j:=\int_{E_j}(u-k_j)^2$, and $B_j:=\int_\Omega|D(u-k_j)^+|^2$. Let $q'$ be conjugate to $q$, and choose $\kappa=2^*$ for $n\ge3$; for $n=2$ choose finite $\kappa>2q'$. Set $\delta:=1-2/\kappa>0$, $\gamma:=1/q'-1/\kappa>0$, and $\beta:=\delta+2\gamma$. For $n\ge3$, $\delta=2/n$ and $q>n/2$ gives $\beta=1+4/n-2/q>1$; for $n=2$, $\beta=1+2/q'-4/\kappa>1$ by the choice of $\kappa$. Testing with $(u-k_j)^+$ and using $c\ge0$, Holder on $E_j$, and Sobolev gives $B_j^{1/2}\le C a|E_j|^\gamma$ (if $B_j=0$, Poincare gives $(u-k_j)^+=0$). Also $|E_{j+1}|\le(T2^{-j-1})^{-2}Y_j$ and Sobolev gives $Y_{j+1}\le C|E_{j+1}|^\delta B_{j+1}$. Consequently $$Y_{j+1}\le C_0a^2T^{-2\beta}2^{2\beta(j+1)}Y_j^\beta.$$ Set $B:=2^{2\beta}$ and $Z_j:=Y_j/T^2$. Choose $T=C_1a$ with $C_1^2\ge C_0B$ and $C_1^2\ge C_E(2B)^{1/(\beta-1)^2}$, where $Y_0\le C_Ea^2$ by step 1.2. Then $Z_{j+1}\le (C_0B/C_1^2)B^jZ_j^\beta\le B^jZ_j^{1+(\beta-1)}$ and $Z_0\le(2B)^{-1/(\beta-1)^2}$. The nonlinear iteration [F5] gives $Z_j\to0$, hence $Y_j\to0$. Since $(u-t-T)^+\le(u-k_j)^+$ and $(u-t-T)^+\in L^2(\Omega)$, this forces $(u-t-T)^+=0$ a.e. on $\Omega$, proving the forcing bound. The finite $\kappa$ choice in dimension two uses the full open range of the critical Sobolev embedding. [step 1.2, F2, F3, F4, F5, algebra]

3.1 Supersolutions and equality. If $u$ is a weak supersolution of $Lu=f$, then $-u$ is a weak subsolution of the same operator with coefficients $(a,b,c)$ and source $-f$, by linearity of the form; applying step 1.1 or step 2.1 yields the stated lower-bound versions with $u^-=(-u)^+$ and $f^-$. If $u$ is a weak solution of $Lu=0$ with $b=c=0$, let $s:=\sup_{\partial\Omega}u$. For every finite a.e. upper bound $t$ on $u$, $(u-t)^+=0$, so [F1] implies $Tu\le t$ a.e.; taking infima gives $s\le\operatorname{ess\,sup}_\Omega u$. If $s=+\infty$, this forces $\operatorname{ess\,sup}_\Omega u=+\infty=s$. If $s$ is finite, $(u-s)^+\in H^1_0(\Omega)$, and density extends the weak identity to this test. Since $b=c=0$, it gives $0=a(u,(u-s)^+)=\int a^{ij}D_j(u-s)^+D_i(u-s)^+$, so $u\le s$ a.e. The reverse trace bound just proved gives $s\le\operatorname{ess\,sup}_\Omega u$, and hence $\operatorname{ess\,sup}_\Omega u=s$. [step 1.1, F1, F3, algebra] ∎

