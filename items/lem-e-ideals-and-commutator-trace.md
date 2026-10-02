---
id: lem-e-ideals-and-commutator-trace
kind: lemma
title: "E is a k-algebra, the E_i are ideals, and commutator traces vanish"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-commensurable-subspaces-and-ideals-of-endomorphisms
  - def-linear-map
  - def-vector-space
  - lem-finite-potent-trace-existence-and-uniqueness
  - lem-finite-potent-trace-linearity-and-conjugation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Keep the notation of [[def-commensurable-subspaces-and-ideals-of-endomorphisms]]:
$k$ is a field, $V$ a $k$-vector space ([[def-vector-space]]), $A\subseteq V$ a
$k$-subspace, $K$ a commutative $k$-algebra acting on $V$ with $fA<A$ for all
$f\in K$, and $E,E_1,E_2,E_0$ are the $k$-subspaces of
$\operatorname{End}_k(V)$ attached to $A$. Assume the Axiom of Choice as
inherited from the linear algebra suppliers ([[def-axiom-of-choice]]). Then:

1. $E$ is a $k$-subalgebra of $\operatorname{End}_k(V)$ containing the image
   of $K$, and $E_1,E_2$ are two-sided ideals of $E$;
2. $E_1+E_2=E$ and $E_1\cap E_2=E_0$;
3. $E_0$ is a finite potent subspace of $\operatorname{End}_k(V)$ in the sense
   of [[lem-finite-potent-trace-linearity-and-conjugation]], so the trace
   $\operatorname{Tr}_V$ of
   [[lem-finite-potent-trace-existence-and-uniqueness]] is defined on $E_0$
   and is $k$-linear there ([[def-linear-map]]);
4. if $\gamma\in E_0$ and $\psi\in E$, or if $\gamma\in E_1$ and
   $\psi\in E_2$, then the commutator
   $[\gamma,\psi]=\gamma\psi-\psi\gamma$ lies in $E_0$ and
   $\operatorname{Tr}_V([\gamma,\psi])=0$.

## Facts & Assumptions

**Given:** a field $k$, a $k$-vector space $V$, a $k$-subspace $A\subseteq V$, a commutative $k$-algebra $K$ acting on $V$ with $fA<A$ for every $f\in K$, and the associated $k$-subspaces $E,E_1,E_2,E_0\subseteq\operatorname{End}_k(V)$; also elements $\gamma,\psi\in\operatorname{End}_k(V)$ satisfying one of the two membership hypotheses of claim 4 whenever that claim is invoked.

[F1] $V$ is a $k$-vector space, linear maps are additive and $k$-homogeneous, composites and finite linear combinations of linear maps are linear, and $\operatorname{End}_k(V)$ is a $k$-vector space under pointwise operations with composition $k$-bilinear. ([[def-vector-space]], [[def-linear-map]])

[F2] Assume the Axiom of Choice. A linear map defined on a subspace of a vector space extends to a linear map on the whole space, and there is a $k$-linear projection $\pi\colon V\to A$ with $\pi(a)=a$ for all $a\in A$: extend a basis of $A$ to a basis of $V$ and let $\pi$ send the added basis vectors to $0$. ([[def-axiom-of-choice]])

[F3] For every finite potent endomorphism $\theta$ of $V$ the trace $\operatorname{Tr}_V(\theta)$ exists, is unique, and for every finite-dimensional $\theta$-stable subspace $W\subseteq V$ containing $\theta^m(V)$ for some $m\ge0$ equals $\operatorname{tr}_W(\theta|_W)$. ([[lem-finite-potent-trace-existence-and-uniqueness]])

[F4] (T4)-(T6) of [[lem-finite-potent-trace-linearity-and-conjugation]]: $\operatorname{Tr}_V$ is $k$-linear on every finite potent subspace $F\subseteq\operatorname{End}_k(V)$; if $\varphi\colon V'\to V$ and $\psi\colon V\to V'$ are $k$-linear with $\psi\varphi$ finite potent, then $\varphi\psi$ is finite potent with $\operatorname{Tr}_V(\varphi\psi)=\operatorname{Tr}_{V'}(\psi\varphi)$; and if $\gamma\in E_0$, $\psi\in E$, or $\gamma\in E_1$, $\psi\in E_2$, then $[\gamma,\psi]\in E_0$ with $\operatorname{Tr}_V([\gamma,\psi])=0$.

[F5] $A<B$ means that $(A+B)/B$ is finite-dimensional and $A\sim B$ means $A<B$ and $B<A$; the relation $<$ is reflexive, transitive, preserved by $k$-linear maps and by finite sums, and unchanged on commensurable subspaces; $E=\{\theta:\theta A<A\}$, $E_1=\{\theta:\theta V<A\}$, $E_2=\{\theta:\theta A\text{ finite-dimensional}\}$, $E_0=E_1\cap E_2=\{\theta:\theta V<A\text{ and }\theta A\text{ finite-dimensional}\}$, and $E,E_1,E_2$ are $k$-subspaces while $E_0=E_1\cap E_2$; the image of $K$ is contained in $E$ by the assumed $fA<A$. ([[def-commensurable-subspaces-and-ideals-of-endomorphisms]])

## Proof

**Proof technique:** direct.

1.1 (Setup) We verify the four numbered claims with $E,E_1,E_2,E_0$ as in [F5], noting that $E_0=E_1\cap E_2$ by definition, that the image of $K$ lies in $E$ by hypothesis, and that all statements are statements about the linear endomorphisms $\theta\in\operatorname{End}_k(V)$ and their images of $A$ and $V$. [given, F1, F5]

2.1 (Claim 1: $E$ is a $k$-subalgebra) Since $\mathrm{id}_V(A)=A$ gives $\mathrm{id}_V\in E$ and finite sums and scalar multiples of elements of $E$ lie in $E$ by [F5], it remains to check composition: for $\theta,\theta'\in E$ one has $\theta\theta'(A)=\theta(\theta'(A))$, and $\theta'(A)<A$ gives $\theta(\theta'(A))<\theta(A)<A$ by the linear-map rule and transitivity, so $\theta\theta'\in E$; hence $E$ is a $k$-subalgebra of $\operatorname{End}_k(V)$ containing the image of $K$. [step 1.1, F1, F5]

3.1 (Claim 1: $E_1$ and $E_2$ are $k$-subspaces) If $\theta_1,\theta_2\in E_1$ then $(\theta_1+\theta_2)(V)\subseteq\theta_1(V)+\theta_2(V)<A+A=A$ and $\lambda\theta_1\in E_1$, so $E_1$ is a $k$-subspace by [F5]; and $E_2$ is a $k$-subspace because $(\theta_1+\theta_2)(A)\subseteq\theta_1(A)+\theta_2(A)$ is a sum of two finite-dimensional spaces, hence finite-dimensional. [step 2.1, F5, algebra]

4.1 (Claim 1: $E_1$ is a two-sided ideal) For $\theta\in E$ and $\eta\in E_1$ we have $(\theta\eta)(V)=\theta(\eta V)<\theta(A)<A$ by the linear-map rule, so $\theta\eta\in E_1$, while $(\eta\theta)(V)\subseteq\eta(V)<A$, so $\eta\theta\in E_1$; hence $E_1$ is a two-sided ideal of $E$. [step 3.1, F5]

5.1 (Claim 1: $E_2$ is a two-sided ideal) For $\theta\in E$ and $\eta\in E_2$ we have $(\theta\eta)(A)=\theta(\eta A)$, an image of the finite-dimensional space $\eta A$ under a linear map, hence finite-dimensional, so $\theta\eta\in E_2$; and choosing a finite-dimensional $W$ with $\theta A\subseteq A+W$, we get $(\eta\theta)(A)\subseteq\eta(A+W)=\eta A+\eta W$, a sum of two finite-dimensional spaces, hence finite-dimensional, so $\eta\theta\in E_2$. [step 4.1, F5, algebra]

6.1 (Claim 2: a projection is available) By [F2] fix a $k$-linear projection $\pi\colon V\to A$ with $\pi|_A=\mathrm{id}_A$; then $\pi(V)=A<A$, so $\pi\in E_1$, and $(1-\pi)(A)=0$ is finite-dimensional, so $1-\pi\in E_2$ and also $1-\pi\in E$. [step 5.1, F2, F5]

7.1 (Claim 2: $E_1+E_2=E$) If $\theta\in E$, then $\theta=\pi\theta+(1-\pi)\theta$ with $\pi\theta\in E_1$ and $(1-\pi)\theta\in E_2$ because $E_1$ and $E_2$ are two-sided ideals of $E$ and $\pi,1-\pi\in E$; conversely $\eta\in E_1$ satisfies $\eta(A)\subseteq\eta(V)<A$, and $\eta\in E_2$ has $\eta(A)$ finite-dimensional, whence $\eta(A)<A$ by monotonicity, so both $E_1$ and $E_2$ are contained in $E$; hence $E_1+E_2=E$. [step 6.1, F5]

8.1 (Claim 2: the intersection) Since $E_0:=E_1\cap E_2$ by definition, the second half of claim 2 holds; combining with step 7.1 gives $E_1+E_2=E$ and $E_1\cap E_2=E_0$. [step 7.1, F5]

9.1 (Claim 3: $E_0$ is finite potent) Let $\theta_1,\theta_2\in E_0$; then $\theta_1(V)<A$ and $\theta_2(V)<A$, so with finite-dimensional $W$ such that $\theta_2(V)\subseteq A+W$ we get $\theta_1\theta_2(V)\subseteq\theta_1(A)+\theta_1(W)$, which is a sum of two finite-dimensional spaces because $\theta_1(A)$ is finite-dimensional and $\theta_1(W)$ is an image of a finite-dimensional space; thus every product of two elements of $E_0$ has finite-dimensional image, i.e. $E_0$ is a finite potent subspace with exponent $2$. [step 8.1, F5, algebra]

10.1 (Claim 3: linearity of the trace) By (T4) of [F4] applied to the finite potent subspace $E_0$, the trace $\operatorname{Tr}_V$ is defined and $k$-linear on $E_0$. [step 9.1, F3, F4]

11.1 (Claim 4) If $\gamma\in E_0$ and $\psi\in E$, or if $\gamma\in E_1$ and $\psi\in E_2$, then claim (T6)(b) of [F4] gives $[\gamma,\psi]\in E_0$ and $\operatorname{Tr}_V([\gamma,\psi])=0$, which is claim 4. [step 10.1, F4]

12.1 All four claims are established: claim 1 in steps 2.1, 4.1 and 5.1, claim 2 in steps 7.1 and 8.1, claim 3 in steps 9.1 and 10.1, and claim 4 in step 11.1; the Axiom of Choice was used only through [F2], to extend a basis of $A$ to all of $V$. [step 2.1, step 4.1, step 5.1, step 7.1, step 8.1, step 9.1, step 10.1, step 11.1, F2] ∎
