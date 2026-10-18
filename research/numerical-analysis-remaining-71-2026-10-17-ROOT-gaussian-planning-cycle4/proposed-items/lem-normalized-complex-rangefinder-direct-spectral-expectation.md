---
id: lem-normalized-complex-rangefinder-direct-spectral-expectation
kind: lemma
title: Direct expected spectral bound for the normalized complex range finder
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [lem-normalized-complex-gaussian-block-affine-spectral-second-moments, alg-gaussian-randomized-range-finder, lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence, lem-wide-gaussian-matrix-has-full-row-rank-almost-surely, lem-wide-gaussian-pseudoinverse-frobenius-moments, thm-singular-value-decomposition, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-operator-norm-is-the-largest-singular-value, thm-jensen-inequality-for-expectation, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Theorems 9.1 and 10.6; the present complex rank-shift argument is derived locally"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $A\in\mathbb C^{m\times n}$ be fixed, let $k\ge2$, $p\ge2$ be integers
with $\ell=k+p\le\min(m,n)$, and draw $\Omega\in\mathbb C^{n\times\ell}$
with iid normalized complex Gaussian entries, $\mathbb E|g|^2=1$. If $Q$ is
the exact range-finder basis of $\operatorname{Ran}(A\Omega)$, then
$$\mathbb E\|(I-QQ^*)A\|_2\le\sqrt{\frac{k+p}{p}}\,\sigma_{k+1}+\frac{e\sqrt{k+p}}p\left(\sum_{j>k}\sigma_j^2\right)^{1/2}.$$
In particular the original bound with leading coefficient
$1+\sqrt{k/(p-1)}$ follows. The algorithm and sketch width are unchanged;
only the analysis may use a larger SVD partition rank.

## Facts & Assumptions

**Given:** Countable Choice, a fixed complex matrix, the stated $k,p,\ell$, normalized complex Gaussian sketch, and exact range-finder output.

[F1] The exact finite-scan range finder returns a measurable orthogonal projector onto $\operatorname{Ran}(A\Omega)$ and handles actual-rank or empty ranges ([[alg-gaussian-randomized-range-finder]]).

[F2] Fixed unitary SVD coordinates preserve the iid law and make disjoint row blocks independent ([[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]).

[F3] A wide Gaussian block has full row rank almost surely; on that event its pseudoinverse is $G^*(GG^*)^{-1}$ and $GG^\dagger=I$ ([[lem-wide-gaussian-matrix-has-full-row-rank-almost-surely]], [[lem-wide-gaussian-pseudoinverse-frobenius-moments]]).

[F4] For independent normalized complex blocks with top size $a\times\ell$, oversampling $r=\ell-a\ge2$, and fixed trailing $S$, writing $C=2\sqrt2e$, the two bounds are $\mathbb E\|S\Omega_2\Omega_1^\dagger\|_2^2\le C\ell r^{-2}(\|S\|_F^2+(r/4)\|S\|_2^2)$ and $\mathbb E\|S\Omega_2\Omega_1^\dagger\|_2^2\le e^2\ell r^{-2}(\|S\|_F^2+(r/2)\|S\|_2^2)$ ([[lem-normalized-complex-gaussian-block-affine-spectral-second-moments]]).

[F5] An SVD exists; the spectral norm is its largest singular value and the unit-vector maximum ([[thm-singular-value-decomposition]], [[thm-operator-norm-is-the-largest-singular-value]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F6] Jensen gives $\mathbb EX\le\sqrt{\mathbb EX^2}$ for nonnegative $X$ with finite second moment ([[thm-jensen-inequality-for-expectation]]).

[A1] Countable Choice supplies the finite-dimensional Gaussian probability laws ([[def-countable-choice]]).

## Proof

1.1 Choose an SVD $A=U\Sigma V^*$ and write $P=QQ^*$ and $E=\|(I-P)A\|_2$. For any analysis rank $1\le a<\ell$, split $V^*\Omega$ into its first $a$ rows $\Omega_1$ and remaining rows $\Omega_2$. By [F2]–[F3] these are independent Gaussian blocks and $\Omega_1$ has full row rank almost surely. In SVD coordinates put $Y=\Sigma V^*\Omega$ and $D=Y\Omega_1^\dagger[I_a\ 0]$. Its range lies in $\operatorname{Ran}(Y)$, and the first $a$ rows of $\Sigma-D$ vanish; the remaining block is $[-\Sigma_{>a}\Omega_2\Omega_1^\dagger\ \ \Sigma_{>a}]$. Since $(I-U^*PU)D=0$ and the orthogonal projector is a contraction, [F5] gives $E^2\le\sigma_{a+1}^2+\|\Sigma_{>a}\Omega_2\Omega_1^\dagger\|_2^2$. The horizontal block inequality follows from $\|[B\ D]\|_2^2=\|BB^*+DD^*\|_2\le\|B\|_2^2+\|D\|_2^2$. This takes no inverse of a leading singular-value block. On every draw $E\le\|A\|_2$; by [F1] it is measurable, so null exceptions do not affect expectation. [given, F1, F2, F3, F5, A1, choose, algebra]

1.2 Put $\sigma=\sigma_{k+1}$ and $R=\sum_{j>k}\sigma_j^2$. If $\sigma=0$, then $R=0$ and step 1.1 at $a=k$ gives $E=0$ almost surely. Otherwise set $x=R/(p\sigma^2)>0$ and $b=\sigma\sqrt{\ell/p}$. It suffices to prove $\mathbb EE\le b(1+e\sqrt x)$, since its right side is the displayed bound. By [F6], $\mathbb EE\le\sqrt{\mathbb EE^2}$. The second moment is finite because $E\le\|A\|_2$. [step 1.1, F6, algebra]

2.1 If $x\ge1$, apply the second bound [F4] in step 1.1 at $a=k$. Then $\mathbb EE^2/b^2\le p/\ell+e^2(x+1/2)\le1+e^2x+e^2/2\le(1+e\sqrt x)^2$, since $e<4$ and $x\ge1$. This proves the required estimate in this region. [step 1.1, step 1.2, F4, algebra]

2.2 Suppose $1/7\le x\le1$. The first bound [F4] gives $\mathbb EE^2/b^2\le1+C(x+1/4)$. Set $y=\sqrt x$ and $a_0=2\sqrt2-e>0$. The difference $(1+e\sqrt x)^2-[1+C(x+1/4)]$, divided by $e$, is $f(y)=2y-a_0y^2-1/\sqrt2$. It is concave, so its minimum on $[1/\sqrt7,1]$ occurs at an endpoint. The elementary bounds $27/10<e<68/25$, $7/5<\sqrt2<17/12$, and $\sqrt7<8/3$ give $0<a_0<2/15$, $1/\sqrt2<5/7$, and $2/\sqrt7>3/4$. Thus $f(1/\sqrt7)>3/4-2/105-5/7=1/60>0$ and $f(1)>2-2/15-5/7=121/105>0$. Hence the desired estimate holds throughout this region. The bounds on $e$ follow from its series: the partial sum through $1/5!$ exceeds $27/10$, and the sum through $1/4!$ plus the geometric tail $(1/5!)/(1-1/6)$ equals $1631/600<68/25$. The square-root bounds follow by squaring positive rational numbers. [step 1.1, step 1.2, F4, algebra]

3.1 Suppose $0<x\le1/7$. Set $s=\lfloor p/4\rfloor$, $p'=p-s$ and $a=k+s$. Then $p'\ge\lceil3p/4\rceil\ge2$, $s+1>p/4$, and $a+p'=\ell$. This changes only the analysis partition, not the algorithm, sketch, or projector. Write $\sigma'=\sigma_{k+s+1}$ and $R'=\sum_{j>k+s}\sigma_j^2$. Since the first $s+1$ entries of the original tail are at least $\sigma'$, one has $(\sigma')^2\le R/(s+1)$ and $R'\le R$. Apply step 1.1 at this $a$ and the first bound [F4] with oversampling $p'$ to get $\mathbb EE^2\le(\sigma')^2+C\ell(p')^{-2}(R'+(p'/4)(\sigma')^2)$. Dividing by $b^2$ gives $\mathbb EE^2/b^2\le x[p^2/(\ell(s+1))+Cp^2/(p')^2+Cp^2/(4p'(s+1))]\le x[4+(16/9)C+(4/3)C]=xK^2$, where $K^2=4+(28/9)C$. The estimates use $\ell\ge p$, $p'\ge3p/4$ and $s+1>p/4$, including $p=2,3$ with $s=0$. [step 1.1, step 1.2, F4, algebra]

3.2 Since $\sqrt2<99/70$ and $e<68/25$, $C<6732/875<77/10$, so $K^2<4+(28/9)(77/10)=1258/45<28$. Also $\sqrt7>21/8$ and $e>27/10$ imply $\sqrt7+e>213/40>\sqrt{28}$. Consequently $K<\sqrt7+e$, and for $x\le1/7$, $K\sqrt x\le(\sqrt7+e)\sqrt x\le1+e\sqrt x$. Together with step 3.1 this proves the desired estimate in the last region. All numerical comparisons here are between explicit rational squares and the elementary bounds established in step 2.2. [step 2.2, step 3.1, algebra]

4.1 The three regions exhaust $x>0$; the zero-tail case was handled in step 1.2. Taking square roots in steps 2.1, 2.2 and 3.2 therefore gives $\mathbb EE\le b(1+e\sqrt x)=\sqrt{\ell/p}\,\sigma+(e\sqrt\ell/p)\sqrt R$. Finally $(1+\sqrt{k/(p-1)})^2\ge1+k/p=\ell/p$, so the original approved leading coefficient follows without altering its parameters or field. [step 1.2, step 2.1, step 2.2, step 3.2, algebra] ∎
