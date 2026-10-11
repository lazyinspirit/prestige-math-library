---
id: lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis
kind: lemma
title: "Right-descent Soergel bimodules descend to simple invariants under the character hypothesis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, def-the-deformed-lefschetz-operator-on-b-x-b-s, lem-type-a-soergel-generators-are-finite-free-on-both-sides, thm-kazhdan-lusztig-basis-multiplication-formula]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Theorem 6.19, displays (6.5)-(6.6), including the explicit four-entry matrix; Section 3.5 End^0(B_x)=R under S(x). Local counit/twisted-counit proof supplies the descent seam under S(x)."
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 1.5, display (4), and Proposition 2.11(2): degree-zero Hom under S(x), descent hard Lefschetz"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** An element $x\in S_n$ and a simple reflection $s$ with $xs<x$ (a right descent), the indecomposable $M=B_x^R$, the generator $B_s^R=S\otimes_{S^s}S(1)$, the hypothesis $\mathrm{S}(x)$ (so $\operatorname{ch}(M)=\underline H_x$), and the deformed operator $L_\zeta$ on $MB_s$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]).

[F1] Under $\mathrm{S}(x)$ the comparison lemma gives $\operatorname{End}^0(M)=\mathbb R$, the decomposition $MB_s=M(1)\oplus M(-1)$ with no other summands, and the following structure of $M$: its lowest degree $-\ell(x)$ is one-dimensional, $M$ is finite free as a right $S$-module, and $M$ is self-dual ([[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F2] In the decomposition $S=S^s\oplus(\alpha_s/2)S^s$ the four maps $\iota_1(r)=r$, $\iota_2(r)=(\alpha_s r)/2$, $\pi_1(r)=(r+s(r))/2$, $\pi_2(r)=\partial_s(r)$ satisfy $\pi_a\circ\iota_b=\delta_{ab}$ and give the inclusions and projections of an $S^s$-bimodule decomposition of $S$; moreover $\alpha_s$ acts on $S$ by an injective map and $s(\alpha_s)=-\alpha_s$ ([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]], [[def-the-deformed-lefschetz-operator-on-b-x-b-s]]).

[F3] In the Hecke algebra the right-descent multiplication is $\underline H_x\underline H_s=(v+v^{-1})\underline H_x$ when $xs<x$, and the character of $B_s$ is $\underline H_s$ ([[thm-kazhdan-lusztig-basis-multiplication-formula]]).

## Statement

Let $M=B_x^R$ over $S$ and let $s$ be a right descent, $xs<x$. Assume $\mathrm{S}(x)$. Then there is a graded $(S,S^s)$-bimodule $N$ and an isomorphism $M\cong N\otimes_{S^s}S$. Consequently $MB_s=M(1)\oplus M(-1)$; choosing the decomposition $S=S^s\oplus(\alpha_s/2)S^s$ in the middle tensor factor, the reduced operator $L_\zeta$ has, with respect to the resulting identification $MB_s=M(1)\oplus M(-1)$, the matrix
$$L_\zeta=\begin{pmatrix}\rho\cdot(-)&0\\ \zeta\rho(\alpha_s^\vee)&\rho\cdot(-)\end{pmatrix},$$
where the scalar off-diagonal entry is a degree-two map $M(1)\to M(-1)$. The construction requires no singular-category classification or character conjecture beyond $\mathrm{S}(x)$. If $\mathrm{hL}(x)$ also holds and $\zeta>0$, this matrix satisfies centered hard Lefschetz; at $\zeta=0$ it fails centered hard Lefschetz.

## Proof

**Proof technique:** construct the descent isomorphism from a split counit, then compute the matrix and the Lefschetz strings.

1.1 **A split counit.** Put $U:=M\otimes_{S^s}S$, so that $MB_s=M\otimes_S(S\otimes_{S^s}S(1))=U(1)$. The multiplication counit $c:U\to M$, $c(b\otimes r):=br$, is a degree-zero left $S$-linear map and is surjective because $b\otimes1\mapsto b$. By the $S^s$-decomposition $S=S^s\oplus(\alpha_s/2)S^s$ the module $U$ is $M\oplus M(\alpha_s/2)$ as a right $S^s$-module, and the lowest degree of $U$ is the one-dimensional space $M^{-\ell(x)}\otimes1$; the counit restricts to the identity there and to zero on the $\alpha_s$-summand in the lowest degree. Since the lowest degree of $M$ is one-dimensional by [F1], the restriction of $c$ to the first summand is a nonzero scalar endomorphism of the line $M^{-\ell(x)}$ and is therefore invertible. [given, F1, F2]

2.1 **The section and the twisted counit.** Rescaling the inclusion of the first summand by the inverse scalar of step 1.1 gives a degree-zero $S$-linear section $\sigma:M\to U$ with $c\circ\sigma=\mathrm{id}_M$; it is automatically left $S$-linear and embeds $M$ as a direct summand of $U$. Define the twisted counit $c_s:U\to M_s$ by $c_s(b\otimes r):=b\,s(r)$. It is balanced over $S^s$, left $S$-linear, and right $S$-semilinear in the sense $c_s(u r)=c_s(u)\,s(r)$; in particular the composite $t:=c_s\circ\sigma:M\to M$ is a degree-zero, left $S$-linear, right-$s$-semilinear endomorphism. On the lowest degree $\sigma(b)=b\otimes1$ for $b$ in the bottom line, so $t(b)=b\,s(1)=b$ there. [step 1.1, F1, F2]

3.1 **The involution property of $t$.** Since $t$ is right-$s$-semilinear and degree zero, $t^2$ is an ordinary degree-zero $S$-bimodule endomorphism of $M$, hence a scalar by $\operatorname{End}^0(M)=\mathbb R$; its scalar is $1$ because $t^2$ acts as the identity on the one-dimensional bottom degree by step 2.1. Hence $t^2=\mathrm{id}_M$. [step 2.1, F1]

4.1 **The descent isomorphism.** For $u\in U$ one has $c_s(u)-c(u)\in M\alpha_s$, because $s(r)-r\in\alpha_s S$ for every $r\in S$; consequently $t(m)-m\in M\alpha_s$ for every $m\in M$. Define $N:=\{m\in M: t(m)=m\}$. Every $m$ splits as $m=\tfrac12(m+t(m))+\tfrac12(m-t(m))$ into an invariant and an anti-invariant part, and an anti-invariant $m$ (that is, $t(m)=-m$) lies in $M\alpha_s$, say $m=n\alpha_s$; since right multiplication by $\alpha_s$ is injective by [F2] and $t(m)=-m$ with $s(\alpha_s)=-\alpha_s$ gives $t(n\alpha_s)=t(n)s(\alpha_s)=-t(n)\alpha_s$ and hence $t(n)=n$, we get $n\in N$ and the anti-invariant part of $m$ is $N\alpha_s$. Therefore $M=N\oplus N\alpha_s$ as $(S,S^s)$-bimodules, and the multiplication map induces an isomorphism $N\otimes_{S^s}S\to M$; this proves the descent isomorphism. [step 2.1, step 3.1, F1, F2]

5.1 **The matrix of $L_\zeta$.** Fix the isomorphism $MB_s=U(1)\cong(M\oplus M(-2))(1)=M(1)\oplus M(-1)$ induced by $S=S^s\oplus(\alpha_s/2)S^s$, with structure maps $\iota_1,\iota_2,\pi_1,\pi_2$ of [F2] satisfying $\pi_a\iota_b=\delta_{ab}$. In this basis, middle multiplication by $\rho$ has entries $\pi_1(\rho)$, $\pi_1(\alpha_s\rho)/2$, $\rho(\alpha_s^\vee)$ and $\partial_s(\alpha_s\rho)/2$, and the operators of multiplication by $\rho$ on the two outer factors contribute the same diagonal $\rho\cdot(-)$ on $M(1)$ and $M(-1)$. All entries except the off-diagonal $\rho(\alpha_s^\vee)$ have positive polynomial degree in $\rho$ and vanish after the right reduction; the off-diagonal entry has the constant term $\rho(\alpha_s^\vee)$ and contributes the degree-two map $\zeta\rho(\alpha_s^\vee):M(1)\to M(-1)$; hence, after reduction, $L_\zeta$ is the displayed matrix. [step 1.1, step 2.1, step 4.1, F2, algebra]

6.1 **Hard Lefschetz for $\zeta>0$.** Assume $\mathrm{hL}(x)$, so the reduced module $\overline M$ is a direct sum of centered $\rho$-strings $u_0,\ldots,u_m$ with $\deg u_j=j$ and $\rho u_j=u_{j+1}$; on each string, left multiplication by $\rho$ is the standard nilpotent Jordan block. In the two-dimensional middle factor with basis $v_-,v_+$ of degrees $-1,+1$ and $e(v_-)=\zeta\rho(\alpha_s^\vee)v_+$, $e(v_+)=0$, the operator $e=L_\zeta$ on the string tensor $\bigoplus_j u_j\otimes\{v_-,v_+\}$ acts by $e^k(u_jv_-)=u_{j+k}v_-+k\,u_{j+k-1}v_+$ and $e^k(u_jv_+)=u_{j+k}v_+$ (indices out of range zero), after normalizing the nonzero scalar $\zeta\rho(\alpha_s^\vee)$ to $1$ by rescaling $v_+$; in centered degree $-k$ with $0\le k\le m+1$ the source basis $u_{(m+1-k)/2}v_-,\,u_{(m-1-k)/2}v_+$ and the corresponding target basis exhibit $e^k$ as a matrix with diagonal entries $1$ and $1$, lower-left entry $k$, and upper-right entry $0$, which is invertible; at $k=m+1$ the map sends $u_0v_-$ to $(m+1)u_mv_+$, nonzero by the normalization $\zeta\rho(\alpha_s^\vee)>0$. The operator on each string is thus an isomorphism in every centered degree, and $L_\zeta$ on the direct sum of strings satisfies hL. Positivity of $\zeta\rho(\alpha_s^\vee)$ uses $\zeta>0$ and strict dominance of $\rho$. [step 5.1, F1, algebra]

7.1 **Failure at $\zeta=0$ and conclusion.** At $\zeta=0$ the matrix of step 5.1 is diagonal with respect to the decomposition $MB_s=M(1)\oplus M(-1)$. The bottom class $b\in\overline M^{-\ell(x)}$ sits in the first summand in degree $-\ell(x)-1$ and satisfies $\rho^{\ell(x)+1}b=0$ because $\overline M^{-\ell(x)-1}=0$; the opposite class in $M(1)$ of degree $\ell(x)+1$ is nonzero by self-duality and dimension symmetry. Hence $\rho^{\ell(x)+1}$ is not injective on $\overline{MB_s}$ in the centered grading and centered hL fails at $\zeta=0$, even though the two individual shifted copies of $\overline M$ have their own strings centered at $\pm1$. Steps 1.1-5.1 prove the descent isomorphism and the matrix, step 6.1 the positive-parameter hard Lefschetz, and this step the failure at zero; no singular-category classification or character conjecture beyond $\mathrm{S}(x)$ is used. [step 5.1, step 6.1, F1, F3] ∎

## Remarks

- The section $\sigma$ is obtained from the non-degeneracy of the bottom degree, so the construction is genuinely a consequence of $\mathrm{S}(x)$ through the comparison lemma, not of an imported singular-descent theorem.
- The off-diagonal entry is a scalar $\zeta\rho(\alpha_s^\vee)$ because the middle tensor factor is two-dimensional with a one-dimensional off-diagonal block; no further structure of $N$ enters the computation of the matrix.
