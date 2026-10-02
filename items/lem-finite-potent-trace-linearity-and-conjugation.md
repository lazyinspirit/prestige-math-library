---
id: lem-finite-potent-trace-linearity-and-conjugation
kind: lemma
title: "Linearity and conjugation invariance of the finite potent trace"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-every-vector-space-has-a-basis
  - def-axiom-of-choice
  - def-dimension
  - def-linear-map
  - def-trace-of-an-endomorphism
  - def-vector-space
  - def-commensurable-subspaces-and-ideals-of-endomorphisms
  - lem-finite-potent-trace-existence-and-uniqueness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the linear algebra suppliers
([[def-axiom-of-choice]]). Let $k$ be a field and $V$ a $k$-vector space
([[def-vector-space]]), and let $\operatorname{Tr}_V$ be the trace of finite
potent endomorphisms supplied by
[[lem-finite-potent-trace-existence-and-uniqueness]].

**(T4)** Let $F\subseteq\operatorname{End}_k(V)$ be a $k$-subspace that is
*finite potent*, meaning that there is an integer $n\ge0$ such that
$\theta_1\cdots\theta_n(V)$ is finite-dimensional ([[def-dimension]]) for
every choice of elements $\theta_1,\dots,\theta_n\in F$. Then
$\operatorname{Tr}_V$ restricted to $F$ is $k$-linear
([[def-linear-map]]).

**(T5)** If $\varphi\colon V'\to V$ and $\psi\colon V\to V'$ are $k$-linear
and $\psi\varphi$ is finite potent, then $\varphi\psi$ is finite potent and
$$\operatorname{Tr}_V(\varphi\psi)=\operatorname{Tr}_{V'}(\psi\varphi).$$

**(T6)** Let $A\subseteq V$ be a $k$-subspace and let
$E,E_1,E_2,E_0$ be the subspaces of $\operatorname{End}_k(V)$ attached to $A$
in [[def-commensurable-subspaces-and-ideals-of-endomorphisms]].

- **(a)** If $\theta\colon V\to V$ has finite-dimensional image, then for
  every $k$-linear $\sigma\colon V\to V$ the commutator
  $[\theta,\sigma]=\theta\sigma-\sigma\theta$ is finite potent and
  $\operatorname{Tr}_V([\theta,\sigma])=0$.
- **(b)** If $\gamma\in E_0$ and $\psi\in E$, or if $\gamma\in E_1$ and
  $\psi\in E_2$, then $[\gamma,\psi]\in E_0$ and
  $\operatorname{Tr}_V([\gamma,\psi])=0$.

## Facts & Assumptions

**Given:** a field $k$, a $k$-vector space $V$ with the finite potent trace $\operatorname{Tr}_V$; a $k$-subspace $A\subseteq V$ together with the spaces $E,E_1,E_2,E_0$ attached to it as in [[def-commensurable-subspaces-and-ideals-of-endomorphisms]]; and, for the three claims, (i) a finite potent $k$-subspace $F\subseteq\operatorname{End}_k(V)$ with exponent $n$, (ii) $k$-linear maps $\varphi\colon V'\to V$ and $\psi\colon V\to V'$ with $\psi\varphi$ finite potent, (iii) an endomorphism $\theta\colon V\to V$ with finite-dimensional image, a $k$-linear $\sigma\colon V\to V$, and elements $\gamma,\psi$ of $\operatorname{End}_k(V)$ satisfying one of the two membership hypotheses of (T6)(b).

[F1] $V$ is a $k$-vector space, a linear map is additive and $k$-homogeneous, images of subspaces under linear maps are subspaces, composites of linear maps are linear, and $\operatorname{End}_k(V)$ is a $k$-vector space for the pointwise operations, with composition $k$-bilinear. ([[def-vector-space]], [[def-linear-map]])

[F2] Assume the Axiom of Choice: every vector space over a field has a basis; in particular finite-dimensional spaces and their subspaces have finite bases. ([[def-axiom-of-choice]], [[cor-every-vector-space-has-a-basis]])

[F3] A vector space is finite-dimensional exactly when it has a finite basis, and the zero space is finite-dimensional; a space spanned by a finite set is finite-dimensional (a maximal linearly independent subset of that finite set is a finite basis); images of finite-dimensional spaces under linear maps are finite-dimensional; a sum of finitely many finite-dimensional subspaces is finite-dimensional. ([[def-dimension]])

[F4] For a finite-dimensional $V$ and a linear $T\colon V\to V$, the trace $\operatorname{tr}(T)$ is the sum of the diagonal entries of the matrix of $T$ in any ordered basis, independently of that basis; $\operatorname{tr}(T+T')=\operatorname{tr}(T)+\operatorname{tr}(T')$ and $\operatorname{tr}(\lambda T)=\lambda\operatorname{tr}(T)$ for $\lambda\in k$, because diagonal entries of matrices are additive and homogeneous; and $\operatorname{tr}(0)=0$. ([[def-trace-of-an-endomorphism]])

[F5] The finite potent trace of [[lem-finite-potent-trace-existence-and-uniqueness]] exists and is unique: it agrees with the ordinary trace when $V$ is finite-dimensional (T1), is additive over a $\theta$-stable subspace and the corresponding quotient (T2), vanishes for nilpotent $\theta$ (T3), and satisfies $\operatorname{Tr}_V(\theta)=\operatorname{tr}_W(\theta|_W)$ for every finite-dimensional $\theta$-stable subspace $W\subseteq V$ containing $\theta^m(V)$ for some $m\ge0$. ([[lem-finite-potent-trace-existence-and-uniqueness]])

[F6] Commensurability $A<B$ means that $(A+B)/B$ is finite-dimensional, $A\sim B$ means $A<B$ and $B<A$; the relation $<$ is reflexive, transitive, preserved by $k$-linear maps and by finite sums, and unchanged on commensurable subspaces; $E=\{\theta:\theta A<A\}$, $E_1=\{\theta:\theta V<A\}$, $E_2=\{\theta:\theta A\text{ finite-dimensional}\}$ and $E_0=E_1\cap E_2$ are $k$-subspaces of $\operatorname{End}_k(V)$, with $E_0=\{\theta:\theta V<A\text{ and }\theta A\text{ finite-dimensional}\}$, and the $E_i$ depend only on the commensurability class of $A$. ([[def-commensurable-subspaces-and-ideals-of-endomorphisms]])

## Proof

**Proof technique:** direct.

1.1 (Setup; reduction for (T4)) Let $F\subseteq\operatorname{End}_k(V)$ be finite potent with exponent $n$, and let $F_0\subseteq F$ be an arbitrary finite-dimensional $k$-subspace, with a finite basis $\varphi_1,\dots,\varphi_m$; since a map out of $F$ is $k$-linear as soon as it is additive and $k$-homogeneous on every such $F_0$, it suffices to prove that $\operatorname{Tr}_V|_{F_0}$ is linear for this arbitrary $F_0$. [given, F1, F2, F3]

2.1 (A common finite-dimensional space) If $n=0$, the empty-product condition says $V$ is finite-dimensional; set $W:=V$, which is stable under each $\varphi_j$. If $n\ge1$, set $W:=\sum_{i_1,\dots,i_n}\varphi_{i_1}\cdots\varphi_{i_n}(V)$. This is a finite sum of finite-dimensional spaces by finite potency of $F$, so $W$ is finite-dimensional, and it is stable under each $\varphi_j$ because $\varphi_j\varphi_{i_1}\cdots\varphi_{i_n}(V)\subseteq\varphi_j\varphi_{i_1}\cdots\varphi_{i_{n-1}}(V)\subseteq W$. [step 1.1, F1, F3]

3.1 (Traces are computed on $W$) For $\theta=\sum_j\lambda_j\varphi_j\in F_0$ one has $\theta^n(V)\subseteq W$ and $W$ is $\theta$-stable, while $W$ is finite-dimensional and $\theta$ is finite potent, so [F5] gives $\operatorname{Tr}_V(\theta)=\operatorname{tr}_W(\theta|_W)$; in particular $\operatorname{Tr}_V(\varphi_j)=\operatorname{tr}_W(\varphi_j|_W)$ for every $j$. [step 2.1, F5]

4.1 ((T4)) By $k$-linearity of the ordinary trace in the endomorphism, $\operatorname{Tr}_V(\theta)=\operatorname{tr}_W(\theta|_W)=\sum_j\lambda_j\operatorname{tr}_W(\varphi_j|_W)=\sum_j\lambda_j\operatorname{Tr}_V(\varphi_j)$, so $\operatorname{Tr}_V$ is linear on the arbitrary finite-dimensional subspace $F_0\subseteq F$, and (T4) follows for $F$. [step 3.1, F4]

5.1 (Rectangular trace identity) If $W,W'$ are finite-dimensional and $A\colon W'\to W$, $B\colon W\to W'$ are $k$-linear, then $\operatorname{tr}_{W'}(B\circ A)=\operatorname{tr}_W(A\circ B)$: choose ordered bases and let $(a_{ij})$, $(b_{ij})$ be the matrices of $A$ and $B$; the diagonal entries of the two products are the finite sums $\sum_j b_{ij}a_{ji}$ and $\sum_i a_{ij}b_{ji}$, which are rearrangements of one another in the commutative ring $k$. [step 4.1, F1, F2, F4, algebra]

6.1 ((T5), stabilisation) Put $\alpha:=\psi\varphi\colon V'\to V'$ and $\beta:=\varphi\psi\colon V\to V$, and fix $n_0$ with $\alpha^{n_0}(V')$ finite-dimensional; the descending chains $\alpha^k(V')$ for $k\ge n_0$ and, using $\beta^k(V)\subseteq\varphi(\alpha^{k-1}(V'))$, the chains $\beta^k(V)$ for $k\ge n_0+1$ lie inside the finite-dimensional spaces $\alpha^{n_0}(V')$ and $\varphi(\alpha^{n_0}(V'))$, so both stabilise: choose $n$ large enough that $n\ge n_0+1$ and $W':=\alpha^n(V')=\alpha^{n+1}(V')$ and $W:=\beta^n(V)=\beta^{n+1}(V)$, both finite-dimensional; then $\beta$ is finite potent. [step 5.1, F1, F3]

7.1 (The induced maps) The map $\varphi$ sends $W'$ into $W$, since $\varphi(W')=\varphi(\alpha^n(V'))=\beta^n(\varphi(V'))\subseteq\beta^n(V)=W$. Conversely, stabilization gives $W=\beta^n(V)=\beta^{n+1}(V)=\varphi\alpha^n\psi(V)\subseteq\varphi(W')$, so $\varphi(W')=W$. The map $\psi$ sends $W$ into $W'$, since $\psi(W)=\psi(\beta^n(V))=\alpha^n(\psi(V))\subseteq\alpha^n(V')=W'$. Thus the restrictions have the stated domains and codomains, and their composites are $\alpha|_{W'}=\psi|_W\circ\varphi|_{W'}$ and $\beta|_W=\varphi|_{W'}\circ\psi|_W$. [step 6.1, F1]

8.1 ((T5)) Applying [F5] to $\alpha$ on $V'$ and to $\beta$ on $V$, and the rectangular identity to $\varphi|_{W'}\colon W'\to W$ and $\psi|_W\colon W\to W'$, gives $\operatorname{Tr}_{V'}(\psi\varphi)=\operatorname{tr}_{W'}(\alpha|_{W'})=\operatorname{tr}_{W'}(\psi|_W\circ\varphi|_{W'})=\operatorname{tr}_W(\varphi|_{W'}\circ\psi|_W)=\operatorname{tr}_W(\beta|_W)=\operatorname{Tr}_V(\varphi\psi)$, which is (T5); note that $\psi\varphi$ is finite potent by hypothesis and $\varphi\psi$ is finite potent by step 6.1. [step 7.1, step 5.1, F5]

9.1 ((T6)(a), factorisation) Assume $\theta\colon V\to V$ has finite-dimensional image $W:=\theta(V)$, let $i\colon W\hookrightarrow V$ be the inclusion and let $\bar\theta\colon V\to W$ be $\theta$ with restricted codomain, so that $\theta=i\bar\theta$ and $\bar\theta i=\theta|_W$; for any $k$-linear $\sigma\colon V\to V$ the maps $\bar\theta\sigma\colon V\to W$ and $\sigma i\colon W\to V$ are $k$-linear, with $\theta\sigma=i(\bar\theta\sigma)$ and $\sigma\theta=(\sigma i)\bar\theta$. [step 8.1, F1]

10.1 ((T6)(a), traces) Applying (T5) to the pairs $(i,\bar\theta)$, $(i,\bar\theta\sigma)$ and $(\sigma i,\bar\theta)$ is legitimate because in each case the composite in the finite-dimensional space $W$ is finite potent, and yields $\operatorname{Tr}_V(\theta)=\operatorname{Tr}_W(\theta|_W)$, $\operatorname{Tr}_V(\theta\sigma)=\operatorname{Tr}_W(\bar\theta\sigma i)$ and $\operatorname{Tr}_V(\sigma\theta)=\operatorname{Tr}_W(\bar\theta\sigma i)$. [step 9.1, F1, F3]

11.1 ((T6)(a), conclusion) Both $\theta\sigma$ and $\sigma\theta$ have finite-dimensional image, respectively contained in $W$ and $\sigma(W)$. The finite-image endomorphisms form a $k$-subspace: sums have image in the sum of the two finite-dimensional images, and scalar multiples still have finite-dimensional image. This subspace is finite potent with exponent $1$, so (T4) gives $\operatorname{Tr}_V([\theta,\sigma])=\operatorname{Tr}_V(\theta\sigma)-\operatorname{Tr}_V(\sigma\theta)$. Step 10.1 computes both terms as $\operatorname{Tr}_W(\bar\theta\sigma i)$, so their difference is zero. [step 10.1, F3, step 4.1]

12.1 ((T6)(b), first case) Assume $\gamma\in E_0$ and $\psi\in E$. Choose a finite-dimensional subspace $U\subseteq V$ with $\psi A\subseteq A+U$, using $\psi A<A$. Then $(\gamma\psi)(V)\subseteq\gamma(V)<A$, and $(\gamma\psi)(A)\subseteq\gamma(A)+\gamma(U)$ is finite-dimensional because $\gamma A$ is finite-dimensional and $\gamma(U)$ is the image of a finite-dimensional space. Thus $\gamma\psi\in E_0$. Separately choose a finite-dimensional subspace $W\subseteq V$ with $\gamma V\subseteq A+W$, using $\gamma V<A$. Then $(\psi\gamma)(V)\subseteq\psi(A)+\psi(W)\subseteq A+U+\psi(W)$, so $\psi\gamma V<A$; also $(\psi\gamma)(A)\subseteq\psi(\gamma A)$ is finite-dimensional because $\gamma A$ is finite-dimensional. Thus $\psi\gamma\in E_0$. The witnesses $U$ and $W$ serve different containments and need not be equal. [step 11.1, F6]

13.1 (The common finite-potent subspace $E_0$) For any $\rho_1,\rho_2\in E_0$, choose finite-dimensional $W$ with $\rho_2V\subseteq A+W$. Then $\rho_1\rho_2V\subseteq\rho_1A+\rho_1W$, which is finite-dimensional because $\rho_1A$ is finite-dimensional and $\rho_1W$ is the image of a finite-dimensional space. Thus every product of two elements of the subspace $E_0$ has finite-dimensional image, so $E_0$ is finite potent with exponent $2$. In particular every element of $E_0$, including $\gamma\psi$ and $\psi\gamma$ from step 12.1, is finite potent. [step 12.1, F3, F6]

14.1 ((T6)(b), first case concluded) For $\gamma\in E_0$ and $\psi\in E$, step 12.1 puts $\gamma\psi$, $\psi\gamma$ and their difference $[\gamma,\psi]$ in the common finite-potent subspace $E_0$. By (T4) on $E_0$, $\operatorname{Tr}_V([\gamma,\psi])=\operatorname{Tr}_V(\gamma\psi)-\operatorname{Tr}_V(\psi\gamma)$. Apply the domain-correct (T5) with $\varphi=\gamma$ and $\psi=\psi$; its hypothesis $\psi\varphi=\psi\gamma$ is finite potent by step 13.1, and it gives $\operatorname{Tr}_V(\gamma\psi)=\operatorname{Tr}_V(\psi\gamma)$. Hence the commutator trace is zero. [step 12.1, step 13.1, step 4.1, step 8.1, F6]

14.2 ((T6)(b), second case) Assume $\gamma\in E_1$ and $\psi\in E_2$. Then $\gamma\psi\in E_0$ since $(\gamma\psi)(A)=\gamma(\psi A)$ is finite-dimensional and $(\gamma\psi)(V)\subseteq\gamma V<A$. Also $\psi\gamma\in E_0$: choose finite-dimensional $W$ with $\gamma V\subseteq A+W$; then $(\psi\gamma)(V)\subseteq\psi(A)+\psi(W)$ is finite-dimensional because $\psi A$ is finite-dimensional, and $(\psi\gamma)(A)\subseteq(\psi\gamma)(V)$ is finite-dimensional. The difference $[\gamma,\psi]$ lies in $E_0$ as the difference of two elements of that subspace. By (T4) on the common finite-potent subspace $E_0$ from step 13.1, $\operatorname{Tr}_V([\gamma,\psi])=\operatorname{Tr}_V(\gamma\psi)-\operatorname{Tr}_V(\psi\gamma)$. The domain-correct (T5), with $\varphi=\gamma$ and $\psi=\psi$, applies because $\psi\gamma$ is finite potent and gives equality of these two traces. Therefore $\operatorname{Tr}_V([\gamma,\psi])=0$. [step 13.1, step 4.1, step 8.1, F5, F6]

15.1 Combining the steps: (T4) is step 4.1, (T5) is step 8.1, (T6)(a) is step 11.1, and both cases of (T6)(b) are steps 14.1 and 14.2; the only use of the Axiom of Choice is the selection of bases through [F2], in the rectangular identity of step 5.1. [step 4.1, step 8.1, step 11.1, step 14.1, step 14.2, F2] ∎
