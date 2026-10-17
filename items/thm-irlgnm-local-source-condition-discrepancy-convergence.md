---
id: thm-irlgnm-local-source-condition-discrepancy-convergence
kind: theorem
title: "Anchored IRGNM local source-condition convergence with ordinary discrepancy stopping"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-anchored-irgnm-with-discrepancy-stopping
  - lem-anchored-irgnm-fixed-reference-error-and-residual
  - lem-real-complex-hilbert-source-powers-and-tikhonov-filter-bounds
  - lem-hilbert-tikhonov-normal-operator-invertible
  - thm-hilbert-adjoint-properties
  - lem-geometric-sequence-null
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Barbara Kaltenbacher, Methods for Inverse Problems: IV. Newton type methods (full lecture); anchored formulation/source-filter context, local constants proved here"
      url: "https://me.aau.at/~bkaltenb/LectureIP_4_Newton"
      locator: "Full 15-page lecture read; pp. 9–13 distinguish anchored IRGNM and spectral source arguments. The exact fixed-reference theorem here is locally derived, not attributed to the slide theorem."
    - title: "Christian Clason, Regularization of Inverse Problems (anchored formulation and spectral-error proof context)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Section 11.3, printed pp. 112–116, full local anchored proof read; that source proves an a-priori theorem, not the direct-discrepancy result authored here."
---

## Statement

Assume AC. Let $X,Y$ be Hilbert spaces over the same field
$\mathbb F\in\{\mathbb R,\mathbb C\}$ and let $F:U\to Y$ be continuously
Fréchet differentiable over $\mathbb F$ on open $U\subseteq X$. In the
complex case, each $F'(x)$ is a bounded complex-linear operator and the
Fréchet remainder is measured over complex increments. Let
$B=\overline B(x^\dagger,\rho)\subseteq U$, with $\rho>0$, and
$y=F(x^\dagger)$. Set $A=F'(x^\dagger)$, $S=A^*A$. Suppose $F'$ is
Lipschitz on $B$ and, for every $x\in B$,
$$F'(x)=(I+R_x)A,\qquad \|R_x\|\le\kappa<1/5,\qquad \kappa\ge0,$$
with bounded linear $R_x:Y\to Y$ and $R_{x^\dagger}=0$. This is an explicit additional weak-nonlinearity hypothesis; it is not inferred from the original tangential-cone/Lipschitz assumptions alone.

Suppose $e_0=x_0-x^\dagger=S^\nu w$, $0<\nu\le1/2$, $\|w\|\le W$, where $W>0$; changing the sign of $w$ gives the original opposite-sign source convention. Let $\alpha_0>0$, $\alpha_0\ge\|A\|^2$, $0<q<1$, and $\alpha_k=\alpha_0q^k$. Define
$$\beta=\nu+1/2,\quad \theta=2\kappa+\kappa^2,\quad d_0=2\kappa(1+\kappa),\quad c_0=1+\kappa,$$
$$a=(1-\theta)^{-1},\quad b=d_0/(1-\theta),\quad c=c_0/(1-\theta),\qquad b<q^\beta,$$
$$D=\max\{1,a/(q^\beta-b)\},\quad E=c/(1-b),\quad C_e=1+D(d_0+\theta q^\beta)/2,\quad N_e=[c_0+(d_0+\theta)E]/2.$$
Require the source-smallness and discrepancy conditions
$$(C_e+N_e)W\alpha_0^\nu<\rho,\qquad \tau>(1+\kappa)(D+E)+1.$$
For each $0<\delta<W\alpha_0^\beta$ and datum $\|y_\delta-y\|\le\delta$, use the **anchored** recurrence of [[alg-anchored-irgnm-with-discrepancy-stopping]]. Its theoretical exact extension, ignoring the stopping tests, is well-defined and lies in $B$ through
$$K_\delta=\min\{k\ge0:W\alpha_k^\beta\le\delta\}.$$
Its first ordinary discrepancy crossing $k_\delta=\min\{k:\|F(x_k^\delta)-y_\delta\|\le\tau\delta\}$ is finite and $k_\delta\le K_\delta$. For the theoretical extension through this comparison index,
$$\|A(x_k^\delta-x^\dagger)\|\le DW\alpha_k^\beta+E\delta,\qquad \|x_{k+1}^\delta-x^\dagger\|\le C_eW\alpha_k^\nu+N_e\delta/\sqrt{\alpha_k}\quad(0\le k<K_\delta).$$
As $\delta\downarrow0$, $x_{k_\delta}^\delta\to x^\dagger$ in norm for every admissible noise sequence. For exact data the extended recurrence converges to $x^\dagger$ as well. A finite actual algorithm returns this first-crossing iterate only if its cap reaches $k_\delta$ and exact calls succeed; shorter caps and uncertified calls retain their explicit failure statuses. No nonlinear rate is asserted, and no injectivity, closed range or finite-dimensional restriction on $A$ is imposed. The retained unanchored LM algorithm is not claimed to satisfy this anchored theorem.

## Facts & Assumptions

**Given:** The field, spaces, ball, nonlinear map, source, constants and noise in the Statement. The extension suppresses algorithmic stopping tests only for proof comparison.

[A1] [[def-axiom-of-choice]]: AC supplies the source-power calculus and inherited Countable Choice used by Hilbert adjoints and integrals.

[F1] [[alg-anchored-irgnm-with-discrepancy-stopping]]: the anchored normal equation, initial state and first-crossing/budget semantics.

[F2] [[lem-anchored-irgnm-fixed-reference-error-and-residual]]: factorization gives the two-sided reference residual bound, the fixed-reference identity and the one-step residual/error inequalities without assuming the next iterate lies in the ball.

[F3] [[lem-real-complex-hilbert-source-powers-and-tikhonov-filter-bounds]]: the stated source powers and filter bounds hold over either field; $S^\nu w\perp\ker A$.

[F4] [[lem-hilbert-tikhonov-normal-operator-invertible]]: each positive-shift normal equation has a unique inverse of norm at most $1/\alpha$.

[F5] [[thm-hilbert-adjoint-properties]]: operator products and adjoints are norm-continuous by the adjoint/product norm laws.

[F6] [[lem-geometric-sequence-null]]: powers of a scalar of modulus less than one tend to zero.

## Proof

1.1 The hypotheses give $\theta<1$, $0\le b<q^\beta<1$, so all constants are finite and positive except possibly $b,d_0,\theta$. By [F3], $\|e_0\|\le W\|A\|^{2\nu}\le W\alpha_0^\nu<\rho$ and $v_0:=\|Ae_0\|\le W\alpha_0^\beta$. If $X=\{0\}$, or $A=0$, the source condition gives $e_0=0$; more generally whenever $e_0=0$ the actual noisy algorithm stops at index zero since its residual is at most $\delta$. Its conclusion is exact. The extended recurrence is still treated by the estimates below, including in these cases, rather than assumed to stop. [A1, F1, F3, given, algebra]

1.2 Suppose a theoretical current iterate lies in $B$ and $v_k\le DW\alpha_k^\beta+E\delta$. The inverse [F4] defines its next exact step in $X$ before any next-domain assertion. The residual inequality [F2] yields $v_{k+1}\le aW\alpha_k^\beta+bv_k+c\delta\le(a+bD)W\alpha_k^\beta+(bE+c)\delta\le DW\alpha_{k+1}^\beta+E\delta$, since $D(q^\beta-b)\ge a$ and $E(1-b)=c$. Here $v_{k+1}=\|A(x_{k+1}-x^\dagger)\|$ is defined even before proving the next state lies in $B$. [A1, F1, F2, F4, given, algebra]

2.1 Under step 1.2's conditions, substitute its bounds for $v_k,v_{k+1}$ into [F2]'s error inequality. As $\beta-1/2=\nu$, this gives $\|e_{k+1}\|\le[1+D(d_0+\theta q^\beta)/2]W\alpha_k^\nu+[c_0+(d_0+\theta)E]\delta/(2\sqrt{\alpha_k})=C_eW\alpha_k^\nu+N_e\delta/\sqrt{\alpha_k}$. Thus the source term has its actual filtered power, not an inverse-shift estimate of the initial norm. [A1, F2, step 1.2, algebra]

3.1 By [F6], $K_\delta$ exists and is positive. For every $j<K_\delta$, $\delta<W\alpha_j^\beta$, so step 2.1 gives $\|e_{j+1}\|\le(C_e+N_e)W\alpha_j^\nu\le(C_e+N_e)W\alpha_0^\nu<\rho$. Start at step 1.1 and induct: at stage $j$ the current state is already in $B$, so [F4] and step 1.2 define the next state and its residual bound, and the displayed estimate places it in $B$. This proves the extension, ball preservation and both stated estimates through $K_\delta$ without any future-ball assumption. For exact data the same induction runs for every $j$ with noise zero, and the error estimate with [F6] gives convergence of the exact extension to $x^\dagger$. [A1, F3, F4, F6, step 1.1, step 1.2, step 2.1, given, induction, algebra]

4.1 The upper residual comparison in [F2] and step 3.1 give $\|F(x_{K_\delta}^\delta)-y_\delta\|\le(1+\kappa)v_{K_\delta}+\delta\le[(1+\kappa)(D+E)+1]\delta<\tau\delta$. Thus the first crossing exists by $K_\delta$. Until its first crossing the actual finite algorithm uses exactly the extended recurrence, so with a sufficient cap and successful exact calls its return equals this crossing. No property of an arbitrary budget-final iterate follows. [F1, F2, step 3.1, given, algebra]

5.1 For $1\le k_\delta\le K_\delta$, minimality of $K_\delta$ gives $W\alpha_{K_\delta-1}^\beta>\delta$ and hence $\delta/\sqrt{\alpha_{k_\delta-1}}\le\delta/\sqrt{\alpha_{K_\delta-1}}<W^{1/(2\beta)}\delta^{1-1/(2\beta)}\to0$, since $\beta>1/2$. Along any sequence with $k_\delta\to\infty$, also $\alpha_{k_\delta-1}^\nu\to0$ by [F6]. The error bound in step 3.1 therefore proves stopped convergence along such sequences. [F6, step 3.1, step 4.1, given, algebra]

5.2 For each fixed index $j$, the extended iterates depend continuously on the datum near $y$. Indeed, the exact states for data $y$ lie strictly inside $B$ by step 3.1. Inductively $F,F'$ and the adjoint/product laws [F5] are continuous there; for fixed positive $\alpha_j$, the inverse identity $B_1^{-1}-B_2^{-1}=B_1^{-1}(B_2-B_1)B_2^{-1}$ and [F4]'s $1/\alpha_j$ bounds prove continuity of each normal inverse. Thus $x_j^\delta\to x_j^0$. If a stopping subsequence has fixed index $j$, its discrepancy bound implies $F(x_j^0)=y$. The lower residual comparison in [F2] then gives $A(x_j^0-x^\dagger)=0$. [A1, F1, F2, F4, F5, step 3.1, step 4.1, given, induction, algebra]

6.1 By [F3], $e_0\perp\ker A$. Testing the anchored error equation $(A_k^*A_k+\alpha_k I)e_{k+1}=\alpha_k e_0+A_k^*(y_\delta-y+t_k)$ against $h\in\ker A$ gives $\langle e_{k+1},h\rangle=\langle e_0,h\rangle=0$, because factorization gives $A_kh=0$. Hence every exact error lies in $(\ker A)^\perp$. The exact error in step 5.2 also lies in $\ker A$, so it is zero. This includes $j=0$ and proves convergence along every bounded-index stopping subsequence by taking a constant-index further subsequence. [A1, F2, F3, step 5.2, given, induction, algebra]

7.1 If stopped convergence failed for some admissible noise sequence, take a sequence of errors bounded away from zero. Its stopping indices have either an unbounded subsequence, along which a further strictly increasing subsequence contradicts step 5.1, or a bounded subsequence, with a constant-index further subsequence contradicting step 6.1. Thus stopped convergence holds for every admissible noise family. This proof never assumes $k_\delta\to\infty$ in all cases. [step 5.1, step 6.1, given, algebra] ∎

## Remarks

The original target coupled the unanchored update to an unmatched source-condition argument and had no proof. This theorem instead uses the separately defined anchored method and the explicit additional factorization/smallness/discrepancy conditions above; it does not assert the original unmatched contract proved or false. The factorization implies the original tangential-cone condition with $2\kappa/(1-\kappa)<1/2$ by [F2], while no closed-range, finite-dimensional or compactness hypothesis was introduced. The original unanchored algorithm, one-step identity and scalar example retain their own valid claims.
