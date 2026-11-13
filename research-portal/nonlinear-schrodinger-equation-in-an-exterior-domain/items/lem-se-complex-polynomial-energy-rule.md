---
id: lem-se-complex-polynomial-energy-rule
kind: lemma
domain: mathematics
title: Complex polynomial weak derivatives and zero boundary preservation
status: published
deps:
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-wkp-zero-as-a-sobolev-closure
  - math:lem-weak-product-rule-for-bounded-sobolev-functions
  - math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions
  - math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences
  - math:thm-dominated-convergence
  - math:lem-schwartz-cutoffs-from-the-standard-smooth-step
  - math:def-axiom-of-choice
  - math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
dependency_roles:
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  math:lem-weak-product-rule-for-bounded-sobolev-functions: mathematical-premise
  math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions: mathematical-premise
  math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences: mathematical-premise
  math:thm-dominated-convergence: mathematical-premise
  math:lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, let $m\in\{3,5\}$, and let $\lambda\in\mathbb R$. Set $a=(m+1)/2$, $b=(m-1)/2$, and $g(z)=\lambda z^a\bar z^b=\lambda|z|^{m-1}z$. Write $H^1(\Omega)=W^{1,2}(\Omega;\mathbb C)$, with norm $\|u\|_{H^1}^2=\|u\|_2^2+\sum_{j=1}^n\|D_j u\|_2^2$, and write $H^1_0(\Omega)$ for the closure of $C_c^\infty(\Omega;\mathbb C)$ in this norm. All $L^p$ norms use Lebesgue measure and almost-everywhere classes.

For $u\in H^1(\Omega)\cap L^\infty(\Omega)$, $g(u)\in H^1(\Omega)$ and $D_jg(u)=\lambda\{a u^{a-1}\bar u^bD_ju+b u^a\bar u^{b-1}\overline{D_ju}\}$ almost everywhere. This is the real differential of $g:\mathbb C\simeq\mathbb R^2\to\mathbb C$ applied to $D_ju$. There is a constant $C_m$ depending only on $m$ such that $\|g(u)\|_{H^1}\le C_m|\lambda|\|u\|_\infty^{m-1}\|u\|_{H^1}$.

For $u,v\in H^1(\Omega)\cap L^\infty(\Omega)$, $\|g(v)-g(u)\|_{H^1}\le C_m|\lambda|[(\|u\|_\infty^{m-1}+\|v\|_\infty^{m-1})\|v-u\|_{H^1}+(\|u\|_\infty^{m-2}+\|v\|_\infty^{m-2})(\|u\|_{H^1}+\|v\|_{H^1})\|v-u\|_\infty]$. If additionally $u\in H^1_0(\Omega)$, then $g(u)\in H^1_0(\Omega)$.

## Statement references

[[math:def-sobolev-space-wkp-and-its-norm]]

[[math:def-wkp-zero-as-a-sobolev-closure]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice, open $\Omega\subseteq\mathbb R^n$, $n\ge1$, $m\in\{3,5\}$, $\lambda\in\mathbb R$, and the functions and notation in the statement.

[F1] The Sobolev space consists of $L^2$ classes with $L^2$ weak derivatives, defined by the signed identity against compactly supported smooth tests; the complex convention is componentwise. Its norm is the displayed sum-of-squares norm ([[math:def-sobolev-space-wkp-and-its-norm]]).

[F2] The space $H^1_0(\Omega)$ is the $H^1$ norm closure of $C_c^\infty(\Omega;\mathbb C)$, without assuming a boundary trace theorem ([[math:def-wkp-zero-as-a-sobolev-closure]]).

[F3] Under Choice, if two complex $H^1$ functions are essentially bounded, their product is in $H^1$ and satisfies the weak product rule ([[math:lem-weak-product-rule-for-bounded-sobolev-functions]]).

[F4] Under Choice, a real globally Lipschitz function $F$ with $F(0)=0$ acts on real $H^1$ functions and obeys its weak chain rule, with the stated level-set convention ([[math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]]).

[F5] Under Countable Choice, an $L^2$-convergent sequence has a subsequence converging almost everywhere ([[math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]). The assumed Axiom of Choice implies Countable Choice ([[math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]), supplying the hypotheses of [F1], [F2] and this subsequence result.

[F6] On an arbitrary measure space, almost-everywhere convergence with one integrable dominating function implies convergence of integrals ([[math:thm-dominated-convergence]]).

[F7] There is a smooth compactly supported real cutoff on $\mathbb R$ equal to one on $[-1,1]$ ([[math:lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

## Proof

**Given:** The Axiom of Choice, open $\Omega\subseteq\mathbb R^n$, $n\ge1$, $m\in\{3,5\}$, $\lambda\in\mathbb R$, and the functions and notation in the statement.

[F1] The Sobolev space consists of $L^2$ classes with $L^2$ weak derivatives, defined by the signed identity against compactly supported smooth tests; the complex convention is componentwise. Its norm is the displayed sum-of-squares norm ([[math:def-sobolev-space-wkp-and-its-norm]]).

[F2] The space $H^1_0(\Omega)$ is the $H^1$ norm closure of $C_c^\infty(\Omega;\mathbb C)$, without assuming a boundary trace theorem ([[math:def-wkp-zero-as-a-sobolev-closure]]).

[F3] Under Choice, if two complex $H^1$ functions are essentially bounded, their product is in $H^1$ and satisfies the weak product rule ([[math:lem-weak-product-rule-for-bounded-sobolev-functions]]).

[F4] Under Choice, a real globally Lipschitz function $F$ with $F(0)=0$ acts on real $H^1$ functions and obeys its weak chain rule, with the stated level-set convention ([[math:thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]]).

[F5] Under Countable Choice, an $L^2$-convergent sequence has a subsequence converging almost everywhere ([[math:cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]). The assumed Axiom of Choice implies Countable Choice ([[math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]), supplying the hypotheses of [F1], [F2] and this subsequence result.

[F6] On an arbitrary measure space, almost-everywhere convergence with one integrable dominating function implies convergence of integrals ([[math:thm-dominated-convergence]]).

[F7] There is a smooth compactly supported real cutoff on $\mathbb R$ equal to one on $[-1,1]$ ([[math:lem-schwartz-cutoffs-from-the-standard-smooth-step]]).



**Proof technique:** direct.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 By the weak test identity in [F1], taking complex conjugates shows $D_j\bar u=\overline{D_ju}$: the test functions may be taken real, and the identity then extends by linearity to complex tests. The same applies to $v$. Repeatedly apply [F3] to the bounded factors $u$ and $\bar u$; every intermediate positive-degree product is bounded and lies in $H^1$. This gives the displayed formula for $D_jg(u)$ and $g(u)\in H^1$. The value and derivative satisfy $|g(u)|\le|\lambda||u|^m$ and $|D_jg(u)|\le m|\lambda||u|^{m-1}|D_ju|$. Taking $L^2$ norms proves the first estimate. [F1, F3, given, algebra]

1.2 Suppose now $u\in H^1_0(\Omega)\cap L^\infty(\Omega)$. By [F2] choose $\phi_k\in C_c^\infty(\Omega;\mathbb C)$ converging to $u$ in $H^1$. Choose $R>\|u\|_\infty+1$, take the cutoff $\chi$ from [F7], and put $T(t)=t\chi(t/R)$. Thus $T$ is smooth and globally Lipschitz, $T(0)=0$, $T(t)=t$ and $T'(t)=1$ for $|t|\le R$, and both $T$ and $T'$ are bounded. Define $w_k=T(\operatorname{Re}\phi_k)+iT(\operatorname{Im}\phi_k)$. Each $w_k$ is smooth and compactly supported in $\Omega$, and the sequence is uniformly bounded in $L^\infty$. By [F5], after taking a subsequence, both components of $\phi_k$ converge almost everywhere to the corresponding components of $u$. Since $T$ is Lipschitz and fixes these components almost everywhere, $w_k\to u$ in $L^2$. For either real component $q$ of $u$ and corresponding $q_k$ of $\phi_k$, [F4] gives $D_jT(q_k)=T'(q_k)D_jq_k$ and $D_jT(q)=D_jq$. The difference is $T'(q_k)(D_jq_k-D_jq)+(T'(q_k)-1)D_jq$. The first term tends to zero in $L^2$; the square of the second tends to zero almost everywhere and is dominated by a constant times $|D_jq|^2$, so [F6] makes its $L^2$ norm tend to zero. Consequently $w_k\to u$ in $H^1$. [F2, F4, F5, F6, F7, given, algebra, choose]

2.1 Put $M=\|u\|_\infty+\|v\|_\infty$ and $h=v-u$. Telescoping the $m$ factors in $v^a\bar v^b-u^a\bar u^b$ gives $|g(v)-g(u)|\le m|\lambda|M^{m-1}|h|$. The coefficients of $D_jv$ and $\overline{D_jv}$ in step 1.1 are polynomials of degree $m-1$ in $v,\bar v$; telescoping their factors gives coefficient differences bounded by $C_m|\lambda|M^{m-2}|h|$. Subtract the derivative formulas using $D_jv-D_ju=D_jh$: $|D_jg(v)-D_jg(u)|\le C_m|\lambda|(M^{m-1}|D_jh|+M^{m-2}|h||D_ju|)$. Taking $L^2$ norms, using essential suprema for $u,v,h$, and bounding $M^r$ by a constant depending only on $r$ times $\|u\|_\infty^r+\|v\|_\infty^r$ for $r=m-1,m-2$, yields the stated symmetric estimate after enlarging $C_m$. [F1, step 1.1, given, algebra]

3.1 Each $g(w_k)$ lies in $C_c^\infty(\Omega;\mathbb C)$ because $g$ is a polynomial with $g(0)=0$. The uniform bound on $w_k$ and the almost-everywhere convergence from step 1.2 imply $g(w_k)\to g(u)$ in $L^2$ by the pointwise polynomial difference bound. In the derivative formula of step 1.1, subtract and add the coefficients at $w_k$ multiplying $D_ju$: the terms containing $D_jw_k-D_ju$ tend to zero in $L^2$ by the uniform coefficient bounds and step 1.2. Each remaining coefficient difference tends to zero almost everywhere, is uniformly bounded, and multiplies $D_ju$ or its conjugate; [F6] applied to its squared modulus gives convergence to zero in $L^2$. Hence $g(w_k)\to g(u)$ in $H^1$, and [F2] proves $g(u)\in H^1_0(\Omega)$. This uses no boundary regularity or trace characterization. [F2, F6, step 1.1, step 2.1, step 1.2, algebra] ∎
