---
title: Uniform expansion of calibrated finite channels and null branches
status: published
research_item: lem-qec-author-5cb5859376bb-calibrated-channel-expansion
dependency_level: 1
---

## Prerequisites

- [lem-qec-author-5cb5859376bb-amplified-trace-sandwich](item-lem-qec-author-5cb5859376bb-amplified-trace-sandwich)
- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)
- [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)
- [math:cor-operator-norm-submultiplicative-and-t-star-t-identity](https://alphabetamath.cc/item/cor-operator-norm-submultiplicative-and-t-star-t-identity)


## Statement

For every system matrix $V$, define $\operatorname{Ad}_V(X)=VXV^\dagger$. For finite GKSL data $H=H^\dagger,L_a$, put $h=\|H\|$, $j=\sum_a\|L_a\|^2$, $S=\sum_aL_a^\dagger L_a$, $G=-iH-S/2$, and $\mathcal D(X)=\sum_aL_aXL_a^\dagger-\{S,X\}/2$. Let $\mathcal N_\tau=e^{\tau\mathcal L}$, $\mathcal U_\tau=\operatorname{Ad}_{e^{iH\tau}}$ and $\mathcal Z_\tau=\mathcal U_\tau\circ\operatorname{Ad}_{e^{\tau G}}$. Fix $\tau_0>0$, $b=4h+2j$, $K=b^2e^{b\tau_0}/2$. For $0\leq\tau\leq\tau_0$, $\mathcal U_\tau\mathcal N_\tau=I+\tau\mathcal D+\mathcal E_\tau$ and $\mathcal Z_\tau=I-\tau\{S,\cdot\}/2+\mathcal E^0_\tau$, where each remainder obeys $\|\operatorname{id}_R\otimes\mathcal E_\tau(X)\|_1,\|\operatorname{id}_R\otimes\mathcal E^0_\tau(X)\|_1\leq K\tau^2\|X\|_1$ for every finite reference. Constants concern fixed finite parameters, not a uniform large-energy limit.

## Facts & Assumptions

[F1] Sandwich maps have reference-uniform trace-norm bounds on finite complex matrix spaces, using spectral operator norm on matrices and trace norm on inputs. [lem-qec-author-5cb5859376bb-amplified-trace-sandwich](item-lem-qec-author-5cb5859376bb-amplified-trace-sandwich)

[F2] The finite GKSL generator has the displayed Hamiltonian, jump and anticommutator terms and channel exponential. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F3] On a real or complex Banach space, the exponential series of a bounded operator $T$ converges absolutely in induced operator norm, with $\|e^{tT}\|\leq e^{|t|\|T\|}$ and $\|e^{tT}-I-tT\|\leq t^2\|T\|^2e^{|t|\|T\|}/2$. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F4] A real or complex normed space admitting an ordered basis of finite length is Banach. [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

[F5] For compatible linear maps between finite-dimensional real or complex inner product spaces, $\|ST\|\leq\|S\|\|T\|$ and $\|T^\dagger T\|=\|T\|^2$. [math:cor-operator-norm-submultiplicative-and-t-star-t-identity](https://alphabetamath.cc/item/cor-operator-norm-submultiplicative-and-t-star-t-identity)

## Proof

**Given:** The fixed finite matrices and positive horizon $\tau_0$. **Goal:** Bound the two calibrated remainders on every finite reference extension.

1.1 A zero-dimensional reference gives zero input space and trivial inequalities, so fix a reference of dimension $r\geq1$. The system vector space $\mathbb C^d$ has its ordered coordinate basis. The original and reference-extended matrix spaces have ordered matrix-unit bases $E_{pq}$: each matrix is uniquely the sum of its entries times these units, ordered lexicographically. Thus [F4] applies to the system vector space with its Euclidean norm and to those matrix spaces with their trace norms. In particular all spaces on which we use [F3] are Banach. On matrix maps write $\|T\|_{1\to1}=\sup_{\|X\|_1=1}\|T(X)\|_1$, suppressing the subscript below; applying this inequality successively gives $\|PQ\|\leq\|P\|\|Q\|$. Set $A(X)=i[H,X]$, $B_0(X)=GX+XG^\dagger$ and $B_1=\mathcal L$, with identity reference factors suppressed. For any system matrix $T$, conjugating and transposing its entries twice gives $(T^\dagger)^\dagger=T$. By [F5], $\|T^\dagger\|^2=\|TT^\dagger\|\leq\|T\|\|T^\dagger\|$. If $\|T^\dagger\|>0$, division gives $\|T^\dagger\|\leq\|T\|$; the same inequality is immediate if $\|T^\dagger\|=0$. Repeating this argument with $T^\dagger$ gives the reverse inequality, hence $\|T^\dagger\|=\|T\|$. This equality and [F5] give $\|S\|\leq\sum_a\|L_a^\dagger\|\|L_a\|=j$ and $\|G\|\leq h+j/2$. Applying [F1] term by term now yields $\|A\|\leq2h$, $\|B_0\|\leq2h+j$ and $\|B_1\|\leq2h+2j$, independently of $r$. These bounds also establish the boundedness required in [F3]. [given, F1, F2, F4, F5, construct, algebra]

2.1 For a fixed system matrix $D$, left multiplication by $D$ and right multiplication by $D^\dagger$ commute, also with reference factors. Their sum $T_D(X)=DX+XD^\dagger$ is bounded by $2\|D\|$ by [F1]. The finite binomial identity gives $T_D^n(X)=\sum_{p+q=n}\binom{n}{p}D^pX(D^\dagger)^q$. The square partial products of the two matrix exponential series converge to $e^{\tau D}X(e^{\tau D})^\dagger$ by [F3] and the congruence continuity estimate in [F1]; adjointing the finite sums and taking limits identifies the right exponential. Their difference from the total-degree-$N$ triangular sum consists only of terms with $p+q>N$, whose induced trace-norm sum is at most $\sum_{n>N}(2\tau\|D\|)^n/n!$, which tends to zero. The triangular sums are precisely the exponential partial sums of $T_D$ by the binomial identity. Therefore $\operatorname{Ad}_{e^{\tau D}}=e^{\tau T_D}$. Apply this with $D=iH$ and $D=G$ to obtain $\mathcal U_\tau=e^{\tau A}$ and $\operatorname{Ad}_{e^{\tau G}}=e^{\tau B_0}$. Likewise the powers of $B_1=\operatorname{id}_R\otimes\mathcal L$ are the reference extensions of the powers of $\mathcal L$; the exponential series acts on each reference matrix block, giving $e^{\tau B_1}=\operatorname{id}_R\otimes\mathcal N_\tau$. [F1, F2, F3, step 1.1, algebra]

2.2 Let $a=\|A\|$, $c=\|B_i\|$ for either $i\in\{0,1\}$, and $Q_T=e^{\tau T}-I-\tau T$. In addition to the quadratic remainder in [F3], the exponential series gives $\|e^{\tau B_i}-I\|\leq\sum_{n\geq1}(\tau c)^n/n!\leq\tau c e^{\tau c}$, since $n!\geq(n-1)!$. The exact algebraic identity $e^{\tau A}e^{\tau B_i}-I-\tau(A+B_i)=Q_Ae^{\tau B_i}+\tau A(e^{\tau B_i}-I)+Q_{B_i}$ needs no commutation of $A$ and $B_i$. Taking norms and using [F3] bounds its right side by $\tau^2(a^2e^{\tau(a+c)}/2+ac e^{\tau c}+c^2e^{\tau c}/2)\leq\tau^2(a+c)^2e^{\tau(a+c)}/2\leq K\tau^2$, because $a+c\leq b$ and $0\leq\tau\leq\tau_0$. This also covers $b=0$, when the bound is zero. [F3, step 1.1, algebra]

3.1 By the displayed definitions, $A+B_1=\mathcal D$ and $A+B_0=-\{S,\cdot\}/2$, with the identity reference understood. Steps 2.1 and 2.2 therefore give both claimed first-order expansions and a remainder of induced trace norm at most $K\tau^2$ on every reference-extended matrix space. Applying the induced norm bound to an arbitrary $X$ gives each stated inequality. The constants depend only on the fixed finite data and $\tau_0$, as required. [given, F2, step 1.1, step 2.1, step 2.2, algebra] ∎
