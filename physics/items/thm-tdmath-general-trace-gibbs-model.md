---
id: thm-tdmath-general-trace-gibbs-model
kind: theorem
title: "Trace-class Gibbs normalization for a semibounded self-adjoint operator"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: ["cor-exponential-is-a-bijection-onto-positive-reals","cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator","def-absolute-value-and-singular-values-of-a-compact-operator","def-axiom-of-choice","def-integral-of-a-nonnegative-simple-function","def-integral-of-a-simple-function-against-a-pvm","def-natural-logarithm","def-nonnegative-lebesgue-integral","def-projection-valued-measure","def-real-and-complex-inner-product-space","def-real-exponential-function-and-e","def-tdmath-countable-canonical-model","def-trace-class-operator","lem-finite-rank-operators-are-compact","lem-scalar-and-complex-measures-from-a-pvm","prop-order-and-scalar-rules-for-the-nonnegative-integral","prop-the-nonnegative-integral-agrees-with-the-simple-integral","thm-bounded-borel-pvm-integral","thm-cauchy-schwarz-in-an-inner-product-space","thm-cyclicity-of-the-trace","thm-derivative-of-exponential","thm-exponential-is-strictly-increasing","thm-logarithm-derivative-and-integral","thm-norm-limit-of-compact-operators-is-compact","thm-parseval-equivalences-for-a-complete-orthonormal-family","thm-spectral-theorem-for-compact-self-adjoint-operators","thm-spectral-theorem-for-unbounded-self-adjoint-operators","thm-tdmath-summable-canonical-differentiation","thm-trace-class-is-a-two-sided-banach-operator-ideal","thm-trace-is-absolutely-convergent-and-basis-independent","thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues"]
justified_by: []
dependency_roles: {"cor-exponential-is-a-bijection-onto-positive-reals":"mathematical-premise","cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator":"mathematical-premise","def-absolute-value-and-singular-values-of-a-compact-operator":"mathematical-premise","def-axiom-of-choice":"mathematical-premise","def-integral-of-a-nonnegative-simple-function":"mathematical-premise","def-integral-of-a-simple-function-against-a-pvm":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-nonnegative-lebesgue-integral":"mathematical-premise","def-projection-valued-measure":"mathematical-premise","def-real-and-complex-inner-product-space":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-tdmath-countable-canonical-model":"mathematical-premise","def-trace-class-operator":"mathematical-premise","lem-finite-rank-operators-are-compact":"mathematical-premise","lem-scalar-and-complex-measures-from-a-pvm":"mathematical-premise","prop-order-and-scalar-rules-for-the-nonnegative-integral":"mathematical-premise","prop-the-nonnegative-integral-agrees-with-the-simple-integral":"mathematical-premise","thm-bounded-borel-pvm-integral":"mathematical-premise","thm-cauchy-schwarz-in-an-inner-product-space":"mathematical-premise","thm-cyclicity-of-the-trace":"mathematical-premise","thm-derivative-of-exponential":"mathematical-premise","thm-exponential-is-strictly-increasing":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-norm-limit-of-compact-operators-is-compact":"mathematical-premise","thm-parseval-equivalences-for-a-complete-orthonormal-family":"mathematical-premise","thm-spectral-theorem-for-compact-self-adjoint-operators":"mathematical-premise","thm-spectral-theorem-for-unbounded-self-adjoint-operators":"mathematical-premise","thm-tdmath-summable-canonical-differentiation":"mathematical-premise","thm-trace-class-is-a-two-sided-banach-operator-ideal":"mathematical-premise","thm-trace-is-absolutely-convergent-and-basis-independent":"mathematical-premise","thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement


Assume the Axiom of Choice. Let $\mathcal H\ne\{0\}$ be a complex Hilbert space and let $A$ be self-adjoint with regular Borel projection-valued measure $E$ from [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], with $E((-\infty,a))=0$ for finite $a\in\mathbb R$. For each $\gamma>0$, define the bounded Gibbs operator $K_\gamma:=\Phi_E(f_\gamma)$ using the bounded Borel PVM integral of [[thm-bounded-borel-pvm-integral]], where $f_\gamma(\lambda)=e^{-\gamma\lambda}$ for $\lambda\ge a$ and $f_\gamma(\lambda)=e^{-\gamma a}$ for $\lambda<a$. Fix $\beta>0$ and suppose $K_\beta$ is trace class in the sense of [[def-trace-class-operator]]. Then $K_\beta$ is injective and has a finite or countable orthonormal basis $(u_j)$ of $\mathcal H$ with $Au_j=E_ju_j$, $E_j\ge a$, and $K_\beta u_j=e^{-\beta E_j}u_j$. Its partition function $Z_\beta:=\operatorname{Tr}K_\beta=\sum_j e^{-\beta E_j}$ is positive and finite, and $\rho_\beta:=K_\beta/Z_\beta$ is positive with $\operatorname{Tr}\rho_\beta=1$. For every $B\in\mathcal B(\mathcal H)$, $\operatorname{Tr}(\rho_\beta B)=\sum_j(e^{-\beta E_j}/Z_\beta)\langle Bu_j,u_j\rangle$ absolutely. Further, let $J\subset(0,\infty)$ be open and suppose that for every compact $C\subset J$ there is a summable family $a_j\ge0$ with $(1+|E_j|^2)e^{-\gamma E_j}\le a_j$ for all $j$ and $\gamma\in C$. Then for each $\gamma\in J$, $K_\gamma$ is trace class with partition function $Z_\gamma:=\operatorname{Tr}K_\gamma=\sum_j e^{-\gamma E_j}$. With $p_j(\gamma):=e^{-\gamma E_j}/Z_\gamma$, define $\bar E_\gamma:=\sum_jp_j(\gamma)E_j$, $\operatorname{Var}_\gamma(E):=\sum_jp_j(\gamma)(E_j-\bar E_\gamma)^2$, and $S_\gamma:=-\sum_jp_j(\gamma)\log p_j(\gamma)$. These quantities are finite and satisfy $-\partial_\gamma\log Z_\gamma=\bar E_\gamma$, $\partial_\gamma^2\log Z_\gamma=\operatorname{Var}_\gamma(E)$, and $S_\gamma=\log Z_\gamma+\gamma\bar E_\gamma$ as in [[thm-tdmath-summable-canonical-differentiation]]. Countable nonnegative sums use the finite-subsum supremum convention of [[def-tdmath-countable-canonical-model]].

## Facts & Assumptions


**Given:** AC, a nonzero complex Hilbert space, a self-adjoint semibounded operator, the specified Borel functional calculus, trace-class $K_\beta$, and a bounded operator $B$.

[A1] The Hilbert space is nonzero; $A$ is self-adjoint with spectral support in $[a,\infty)$; AC is adopted; $\beta>0$; and $K_\beta$ is trace class. For the interval clause, the same list $(E_j)$ has the local summable moment envelope stated in the theorem.

[A2] $B$ is a bounded operator on $\mathcal H$.

[F1] [[def-axiom-of-choice]] and [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]: under AC a self-adjoint $A$ has a regular PVM $E$, domain $D(A)=\{x:\int\lambda^2dE_x<\infty\}$, and $Ax=\int\lambda dE(\lambda)x$.

[F2] [[thm-bounded-borel-pvm-integral]]: for bounded Borel $f$, $K=\Phi_E(f)$ satisfies $\|Kx\|^2=\int|f|^2dE_x$ and nonnegative $f$ gives a positive operator.

[F3] [[thm-spectral-theorem-for-compact-self-adjoint-operators]] and [[cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator]]: compact self-adjoint operators have finite-dimensional nonzero eigenspaces whose closed span is $(\ker K)^\perp$; under AC their union has a complete orthonormal eigenbasis when $\ker K=0$.

[F4] [[def-trace-class-operator]] and [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]: positive trace-class operators are compact and their trace is the sum of their nonnegative eigenvalues with multiplicity.

[F5] [[thm-trace-is-absolutely-convergent-and-basis-independent]] and [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]: the trace is basis-independent and linear in trace-class operators, and multiplying a trace-class operator by a bounded operator preserves trace class.

[F6] [[def-tdmath-countable-canonical-model]] and [[thm-tdmath-summable-canonical-differentiation]]: nonnegative countable sums are suprema of finite subsums, and the stated local moment envelope gives a finite partition sum, finite mean and variance, and the canonical derivative and entropy identities.

[F7] [[thm-cyclicity-of-the-trace]]: for trace-class $S$ and bounded $B$, $\operatorname{Tr}(SB)=\operatorname{Tr}(BS)$.

[F8] [[def-real-and-complex-inner-product-space]]: the inner product is linear in the first argument and conjugate-linear in the second.

[F9] [[def-absolute-value-and-singular-values-of-a-compact-operator]]: for compact $T$, its positive singular values are the positive eigenvalues of the positive operator $|T|=(T^*T)^{1/2}$ counted with multiplicity. In particular, if $T$ is positive then its absolute value equals $T$.

[F10] [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]: a complete orthonormal family has Parseval equality and its finite-coordinate projections converge in norm to each vector.

[F11] [[cor-exponential-is-a-bijection-onto-positive-reals]] and [[thm-exponential-is-strictly-increasing]]: the real exponential is continuous, positive, injective, and strictly increasing.

[F12] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real $y$ satisfying $e^y=x$, so $\exp(\log x)=x$ and $\log(\exp y)=y$.

[F13] [[def-integral-of-a-simple-function-against-a-pvm]], [[def-projection-valued-measure]], and [[lem-scalar-and-complex-measures-from-a-pvm]]: for a simple function $s=\sum_kc_k\mathbf1_{D_k}$ in disjoint normal form, $\int s\,dE=\sum_kc_kE(D_k)$; the PVM satisfies $E(B\cap C)=E(B)E(C)$ and $E(\mathbb R)=I$, each $E(D_k)$ is self-adjoint with $\langle E(D_k)x,x\rangle=\|E(D_k)x\|^2\ge0$, and $E_x(B)=\langle E(B)x,x\rangle$ is a positive countably additive measure with $E_x(\mathbb R)=\|x\|^2$.

[F14] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\,\|y\|$, so inner products are continuous under norm convergence.

[F15] [[lem-finite-rank-operators-are-compact]] and [[thm-norm-limit-of-compact-operators-is-compact]]: bounded finite-rank operators are compact, and under AC a norm limit of compact operators into the Hilbert space $\mathcal H$ is compact.

[F16] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], and [[def-integral-of-a-nonnegative-simple-function]]: the nonnegative integral is monotone and homogeneous for positive scalars, and $\int\mathbf1_C\,d\mu=\mu(C)$ for measurable $C$.



## Proof

**Given:** AC, a nonzero complex Hilbert space, self-adjoint semibounded $A$, its spectral PVM, a parameter $\beta>0$, and trace-class $K_\beta$.

1.1 Since $\beta>0$, $-\beta\lambda\le-\beta a$ for $\lambda\ge a$; strict increase and positivity from [F11] show that $f_\beta$ is bounded and strictly positive. Each branch is continuous and their values agree at $a$, so $f_\beta$ is Borel. For each $n$, partition its bounded range into finitely many intervals of length at most $1/n$ and take their Borel preimages; choosing a nonnegative value in each interval gives a nonnegative real simple $s_n$ converging uniformly to $f_\beta$. By [F13], $T_n:=\int s_n\,dE$ is a finite real linear combination of self-adjoint projections, hence self-adjoint and has nonnegative quadratic form. By [F2], $T_n\to K_\beta$ in operator norm. Therefore $\langle K_\beta x,y\rangle=\langle x,K_\beta y\rangle$ and $\langle K_\beta x,x\rangle\ge0$ by [F14] and passage to the limit, so $K_\beta$ is self-adjoint and positive. If $K_\beta x=0$, [F2] gives $\int f_\beta^2dE_x=0$. For each $n\ge1$, $f_\beta\ge1/n$ on $C_n:=\{\lambda:f_\beta(\lambda)\ge1/n\}$; [F16] gives $0=\int f_\beta^2dE_x\ge n^{-2}E_x(C_n)$, so $E_x(C_n)=0$. The sets $C_n$ increase to $\mathbb R$; set $D_1=C_1$ and $D_n=C_n\setminus C_{n-1}$ for $n>1$. They are disjoint, cover $\mathbb R$, and satisfy $E_x(D_n)\le E_x(C_n)=0$. Countable additivity in [F13] gives $E_x(\mathbb R)=\sum_nE_x(D_n)=0$, hence $\|x\|=0$ and $K_\beta$ is injective. [A1, F1, F2, F11, F13, F14, F16]

2.1 By the trace-class definition [F4], $K_\beta$ is compact; together with step 1.1 it is compact self-adjoint and positive. Apply [F3]: its nonzero eigenspaces have finite multiplicity and span $(\ker K_\beta)^\perp=\mathcal H$, so AC supplies a finite or countable complete orthonormal family $(u_j)$ of eigenvectors with eigenvalues $\kappa_j>0$. By [F4], $Z_\beta=\operatorname{Tr}K_\beta=\sum_j\kappa_j<\infty$; because $\mathcal H\ne0$ and $K_\beta$ is injective, this sum is positive. [A1, F3, F4, step 1.1]

3.1 Fix $j$. To justify the constant shift in the calculus, choose bounded simple $s_n\to f_\beta$ uniformly. By [F13], $\int(s_n-\kappa_j)\,dE=\int s_n\,dE-\kappa_jI$; [F2] passes both uniform limits, so $\Phi_E(f_\beta-\kappa_j)=K_\beta-\kappa_jI$. Applying the norm identity in [F2] to this difference and the eigenvector gives $\int|f_\beta-\kappa_j|^2dE_{u_j}=\|(K_\beta-\kappa_jI)u_j\|^2=0$. For every $n$, [F16] shows that the set where $|f_\beta-\kappa_j|\ge1/n$ has zero $E_{u_j}$-measure; their union is the complement of the level set. Hence $E_{u_j}$ is supported on $f_\beta^{-1}(\kappa_j)\cap[a,\infty)=\{E_j\}$: injectivity of the exponential gives uniqueness, and [F12] gives $E_j=-\beta^{-1}\log\kappa_j\ge a$. Thus $\int\lambda^2dE_{u_j}=E_j^2<\infty$ and [F1] yields $u_j\in D(A)$ and $Au_j=E_ju_j$. [A1, F1, F2, F3, F4, F11, F12, F13, F16, step 2.1]

4.1 The spectral measure of each $u_j$ is the unit mass at $E_j$ by step 3.1. Hence $\|(I-E(\{E_j\}))u_j\|^2=E_{u_j}(\mathbb R\setminus\{E_j\})=0$, so $E(\{E_j\})u_j=u_j$; for Borel $D$ not containing $E_j$, $E(D)u_j=E(D)E(\{E_j\})u_j=E(\varnothing)u_j=0$ by [F13]. For every $\gamma>0$, choose nonnegative simple $s_n\to f_\gamma$ uniformly as in step 1.1. In each disjoint normal form, [F13] then gives $(\int s_n\,dE)u_j=s_n(E_j)u_j$; the uniform-limit clause of [F2] yields $K_\gamma u_j=f_\gamma(E_j)u_j=e^{-\gamma E_j}u_j$. Fix $\gamma\in J$ and enumerate that basis; let $P_N$ project onto its first $N$ vectors, taking $P_N=I$ once a finite basis is exhausted. Parseval gives $\|P_Nx\|\le\|x\|$, so $K_\gamma P_N$ is bounded and finite rank. Fix the summable envelope $a_j$ for $\{\gamma\}\subset J$; every finite subsum of $t_j:=e^{-\gamma E_j}$ is at most the corresponding sum of $a_j$, hence $S:=\sum_jt_j<\infty$ by the finite-subsum definition [F6]. This sum is positive because the basis is nonempty and every term is positive. For $\varepsilon>0$, choose a finite set $F$ with $S-\varepsilon<\sum_{j\in F}t_j$; once $N$ contains $F$, every finite tail subsum is at most $S-\sum_{j\in F}t_j<\varepsilon$, so $\sum_{j>N}t_j\to0$. Again by Parseval, $$\|(K_\gamma-K_\gamma P_N)x\|^2=\sum_{j>N}e^{-2\gamma E_j}|\langle x,u_j\rangle|^2\le\Bigl(\sum_{j>N}e^{-\gamma E_j}\Bigr)^2\|x\|^2,$$ so $K_\gamma P_N$ converges to $K_\gamma$ in operator norm. For $t_j=e^{-\gamma E_j}$ its finite diagonal expansion is $K_\gamma P_Nx=\sum_{j\le N}t_j\langle x,u_j\rangle u_j$; orthonormality and [F8] give $\langle K_\gamma P_Nx,y\rangle=\langle x,K_\gamma P_Ny\rangle$ and $\langle K_\gamma P_Nx,x\rangle=\sum_{j\le N}t_j|\langle x,u_j\rangle|^2\ge0$. Thus each truncation is self-adjoint and positive, and [F14] plus operator-norm convergence preserves both properties. It is compact by [F15], since the truncations are bounded finite-rank operators and $\mathcal H$ is Banach. Thus $K_\gamma$ is compact self-adjoint and positive. Its absolute value is $K_\gamma$, by the unique positive square-root definition in [F9]. If $K_\gamma x=\lambda x$, taking coordinates in the complete basis gives $(t_j-\lambda)\langle x,u_j\rangle=0$ for every $j$; thus its eigenvalues and their multiplicities are exactly the diagonal values $t_j$. Hence [F9] identifies its positive singular values, with multiplicity, as the list $(t_j)$. Their finite subsums are bounded by $\sum_j a_j$, so the trace-class definition [F4] applies and gives $\operatorname{Tr}K_\gamma=\sum_j t_j$. [A1, F1, F2, F4, F6, F8, F9, F10, F13, F14, F15, step 1.1, step 3.1]

5.1 At the fixed $\beta$, $\rho_\beta=K_\beta/Z_\beta$ is positive trace class and [F5] gives $\operatorname{Tr}\rho_\beta=Z_\beta^{-1}\operatorname{Tr}K_\beta=1$. For each $\gamma\in J$, $\rho_\gamma=K_\gamma/Z_\gamma$ likewise has trace one; its eigenvalues $p_j=e^{-\gamma E_j}/Z_\gamma$ form the canonical law, so [F6] gives the finite mean, variance, and identity $-\sum_jp_j\log p_j=\log Z_\gamma+\gamma\sum_jp_jE_j$. [A1, F5, F6, step 2.1, step 4.1]

6.1 For bounded $B$, [F5] makes $\rho_\beta B$ and $B\rho_\beta$ trace class and [F7] gives $\operatorname{Tr}(\rho_\beta B)=\operatorname{Tr}(B\rho_\beta)$. Evaluate the second trace in the complete basis $(u_j)$: $\operatorname{Tr}(B\rho_\beta)=\sum_j\langle B\rho_\beta u_j,u_j\rangle=\sum_jp_j\langle Bu_j,u_j\rangle$, where [F8] and real $p_j$ justify pulling the scalar out. This series is absolutely convergent since $|\langle Bu_j,u_j\rangle|\le\|B\|$ and $\sum_jp_j=1$. [A1, A2, F3, F5, F7, F8, step 5.1] ∎
