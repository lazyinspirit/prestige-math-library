---
id: lem-three-case-dedekind-zero-gap-up-to-absolute-constant
kind: lemma
title: The three-case effective Dedekind zero gap up to an absolute constant
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-heilbronn-simple-zero-quadratic-descent-under-choice
- lem-dedekind-zeta-divisibility-for-galois-extensions-positive-strip
- lem-number-field-compositum-discriminant-bound
- lem-dedekind-zeta-sharp-exceptional-zero-rectangle
- thm-effective-real-zero-gap-for-quadratic-dedekind-zeta-functions
- lem-artin-l-meromorphic-continuation-in-positive-half-plane-under-choice
- thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
- thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
- thm-fundamental-theorem-of-finite-galois-theory
- thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- def-absolute-norm-of-an-ideal
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
axiom_use: The actual local zero, Artin, arithmetic and representation interfaces use AC, CC and DC.
sources:
  references:
  - title: H. M. Stark, Some Effective Cases of the Brauer–Siegel Theorem
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0023/PPN356556735_0023.pdf
    locator: Lemmas 8 and 10, Theorem 1′ proof, and Lemmas 12–13, printed pp. 145–148 and 151–152. The bounded proof below is locally reconstructed.
---

## Statement

Assume AC, Countable Choice and DC. Let $E\ne\mathbb Q$ be a number field of degree $m$, let $D_E>1$ be its absolute discriminant, and suppose $\zeta_E$ has a real zero $\beta\in(0,1)$. Define $\nu$ by the first applicable case: $\nu=1$ if $E$ belongs to a tower from $\mathbb Q$ with every successive extension normal; $\nu=m$ if every Artin $L$-function associated to the Galois closure of $E/\mathbb Q$ is holomorphic at $\beta$; and $\nu=m!$ otherwise. Then for an absolute effectively computable $c>0$,
$$1-\beta\ge c\min\left\{\frac1{\nu\log D_E},D_E^{-1/m}\right\}.$$
This supplies the source-supported three cases up to one absolute constant. It does not assert the coefficient-one logarithmic alternative of the earlier Stark formulation.

More precisely, define $\mu$ by the first applicable case: $\mu=4$ if $E/\mathbb Q$ is normal; $\mu=16$ if $E$ is in a normal tower; $\mu=8(m-1)$ if every Artin $L$-function of its Galois closure is holomorphic at $\beta$; and $\mu=4m!$ otherwise. For an absolute effectively computable $c_Q>0$, $$1-\beta>\min\left\{\frac1{\mu\log D_E},c_QD_E^{-1/m}\right\}.$$ This supplies the source-supported exact numerical thresholds. It does not assert the coefficient-one logarithmic alternative of the earlier Stark formulation.

## Facts & Assumptions

**Given:** The field $E$, real zero $\beta$, and choice assumptions in the Statement.

[F2] For any number field with discriminant $D>1$, its zeta has at most one zero, which is real and simple, in the closed rectangle with $\operatorname{Re}s\ge1-(4\log D)^{-1}$ and $|\operatorname{Im}s|\le(4\log D)^{-1}$. [[lem-dedekind-zeta-sharp-exceptional-zero-rectangle]]

[F3] In a finite Galois extension $B/A$, the quotient $\zeta_B/\zeta_A$ is holomorphic in the open critical strip. If $\zeta_B$ has a simple real zero there, that zero descends to a cyclic intermediate $F/A$ of degree at most two; the zeta of an intermediate field vanishes exactly when it contains $F$. [[lem-dedekind-zeta-divisibility-for-galois-extensions-positive-strip]] [[lem-heilbronn-simple-zero-quadratic-descent-under-choice]]

[F4] $D_{KL}\le D_K^{[KL:K]}D_L^{[KL:L]}$, and $D_M\ge D_K^{[M:K]}$ in a number-field tower. [[lem-number-field-compositum-discriminant-bound]] [[thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive]] [[def-absolute-norm-of-an-ideal]]

[F5] Every real Dedekind-zeta zero of a quadratic field $F$ has gap strictly greater than $c_QD_F^{-1/2}$, with absolute effective $c_Q>0$. [[thm-effective-real-zero-gap-for-quadratic-dedekind-zeta-functions]]

[F6] Artin products have positive-half-plane meromorphic continuation, commute with induction and direct sums, and for nontrivial cyclic characters are holomorphic at $\beta$. The permutation representation on cosets of the subgroup fixing a field $M$ has Artin function $\zeta_M$. [[lem-artin-l-meromorphic-continuation-in-positive-half-plane-under-choice]]

[F7] Finite group representations over $\mathbb C$ are semisimple; irreducible characters form an orthonormal basis. The finite Galois correspondence identifies field intersection with generated subgroup and compositum with subgroup intersection. [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]] [[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]] [[thm-fundamental-theorem-of-finite-galois-theory]]

[F8] Dedekind zeta functions are holomorphic in the critical strip and $\zeta_{\mathbb Q}(s)<0$ for real $0<s<1$: the alternating eta series has positive paired terms and equals $(1-2^{1-s})\zeta(s)$ by continuation. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[A1] AC, CC and DC are retained at all used analytic and arithmetic interfaces. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 We first prove a compression principle. Let $K\subseteq L\subseteq M$ be number fields, with $L/K$ and $M/L$ normal. Suppose $\zeta_M(\beta)=0$ and $1-\beta\le(16\log D_M)^{-1}$. By [F2] the zero of $\zeta_M$ is simple. Apply [F3] to $M/L$: the corresponding cyclic field $P$ is either $L$ or quadratic over $L$. If $P=L$, then $\zeta_L(\beta)=0$; [F3] shows this zero is simple because $M/L$ is normal. Applying [F3] to $L/K$ gives a field $N\subseteq L$ equal to $K$ or quadratic over $K$ with $\zeta_N(\beta)=0$. [A1, F2, F3, given, construct, algebra]

1.2 For the Artin-holomorphy case, let $B_0/\mathbb Q$ be the Galois closure of $E$, with group $G$, and suppose every irreducible Artin function is holomorphic at $\beta$. For intermediate fields $M,M'\subseteq B_0$, put $A=M\cap M'$ and $B=MM'$. Their corresponding subgroups $H,H'$ satisfy $H\cap H'=\operatorname{Gal}(B_0/B)$ and $\langle H,H'\rangle=\operatorname{Gal}(B_0/A)$ by [F7]. On the permutation module of functions on $G/(H\cap H')$, the pullbacks from $G/H$ and $G/H'$ are subrepresentations whose intersection consists exactly of the functions pulled back from $G/\langle H,H'\rangle$. Therefore the virtual representation $$\operatorname{Ind}_{H\cap H'}^G1-\operatorname{Ind}_{H}^G1-\operatorname{Ind}_{H'}^G1+\operatorname{Ind}_{\langle H,H'\rangle}^G1$$ is an actual representation: take the orthogonal complement of the sum of those two submodules. By [F6] its Artin function is $\zeta_A\zeta_B/(\zeta_M\zeta_{M'})$ near $\beta$, and semisimplicity [F7] plus the hypothesis makes it holomorphic there. Thus $$\operatorname{ord}_\beta\zeta_A+\operatorname{ord}_\beta\zeta_B\ge\operatorname{ord}_\beta\zeta_M+\operatorname{ord}_\beta\zeta_{M'}.$$ [A1, F6, F7, construct, algebra]

1.3 In the remaining general case, let $B$ be the Galois closure of $E/\mathbb Q$. It is the compositum of at most $m$ conjugates of $E$ and has degree at most $m!$, since its Galois group acts faithfully on the $m$ embeddings. The compositum estimate [F4] gives $\log D_B\le m!\log D_E$. The extension $B/E$ is normal, so [F3] transfers the zero to $\zeta_B$. If $1-\beta\le(4m!\log D_E)^{-1}$, [F2] makes this zero simple. Applying [F3] to $B/\mathbb Q$ yields a quadratic field $F\subseteq E$ with $\zeta_F(\beta)=0$: the zero criterion in [F3] places $F$ inside $E$, and [F8] excludes $F=\mathbb Q$. If the displayed threshold fails, the gap is strictly larger than it. This proves the fourth source threshold, including its equality endpoint. [F2, F3, F4, F8, construct, algebra]

2.1 Otherwise $P/L$ is quadratic, $\zeta_P(\beta)=0$ and $\zeta_L(\beta)\ne0$. We claim $P/K$ is normal. If not, a $K$-conjugate $P'$ differs from $P$; since $L/K$ is normal, $P'/L$ is also quadratic. Let $T=PP'$. Then $T/L$ is biquadratic. The conjugate field $P'$ has the same zeta function as $P$, so $\zeta_{P'}(\beta)=0$. Its two distinct quadratic Artin factors in the decomposition of $\zeta_T$ both vanish at $\beta$, because $\zeta_L(\beta)\ne0$; every other factor is holomorphic there by [F6]. Thus $\zeta_T$ has a zero of multiplicity at least two. But [F4] gives $D_T\le D_P^2D_{P'}^2=D_P^4\le D_M^4$, so $1-\beta\le(4\log D_T)^{-1}$, contradicting [F2]. Hence $P/K$ is normal. Also $M/P$ is normal, so [F3] makes the zero of $\zeta_P$ simple. Apply [F3] to $P/K$: its descended field $N\subseteq P\subseteq M$ is $K$ or quadratic over $K$ and satisfies $\zeta_N(\beta)=0$. This proves the compression principle in both cases. [F2, F3, F4, F6, step 1.1, algebra]

2.2 Suppose $1-\beta\le[8(m-1)\log D_E]^{-1}$ and start with $M=E$. While $M/\mathbb Q$ is not normal, choose a different conjugate $M'$. If $d=[M:\mathbb Q]$, choose a primitive generator $\alpha$ of $M$ whose conjugate generates $M'$. The minimal polynomial of that conjugate over $M$ has degree at most $d-1$, since the same degree-$d$ polynomial already has the root $\alpha$ in $M$ and the conjugate is different. Thus $[MM':M]\le d-1$ and similarly $[MM':M']\le d-1$. By [F4], $D_{MM'}\le D_M^{2(d-1)}\le D_E^{2(m-1)}$. Both $\zeta_M$ and $\zeta_{M'}$ vanish at $\beta$. If $\zeta_{M\cap M'}(\beta)\ne0$, step 1.2 makes $\zeta_{MM'}$ vanish to order at least two, contradicting [F2] and the assumed zero range. Hence $\zeta_{M\cap M'}(\beta)=0$. This intersection is a proper subfield of $M$, so repeating strictly decreases the degree; it remains inside $E$ and $D_M\le D_E$ by [F4]. The process cannot reach $\mathbb Q$ by [F8]. At the first normal field $M$, [F2] makes its zero simple and [F3] supplies a quadratic $F\subseteq M\subseteq E$ with $\zeta_F(\beta)=0$. [F2, F3, F4, F8, step 1.2, construct, algebra]

3.1 Suppose $E$ lies in a tower $\mathbb Q=E_0\subset E_1\subset\cdots\subset E_r=E$ of normal successive extensions and $1-\beta\le(16\log D_E)^{-1}$. If $r\ge2$, apply steps 1.1–2.1 to the last two edges. Replace them by the single normal edge $E_{r-2}\subseteq N$, with $\zeta_N(\beta)=0$. If $N=\mathbb Q$, [F8] gives a contradiction. Otherwise $D_N>1$, and [F4] gives $D_N\le D_E$, so the same inequality holds with $D_N$ in place of $D_E$. Repeat, decreasing the number of edges each time; the final field is quadratic over $\mathbb Q$ and lies in $E$. Thus there is a quadratic $F\subseteq E$ with $\zeta_F(\beta)=0$. If $r=1$, [F2]–[F3] give the same conclusion directly, and $r=0$ is excluded by $E\ne\mathbb Q$. [F2, F3, F4, F8, step 1.1, step 2.1, construct, algebra]

4.1 First suppose $E/\mathbb Q$ is normal. If $1-\beta\le(4\log D_E)^{-1}$, [F2] makes the zero simple and [F3] descends it to a quadratic field $F\subseteq E$; the rational alternative is excluded by [F8]. Otherwise the gap is strictly larger than the displayed threshold. In the normal-tower and Artin cases, steps 3.1 and 2.2 respectively give the same quadratic descent whenever the gap is at most $(16\log D_E)^{-1}$ or $[8(m-1)\log D_E]^{-1}$; otherwise the corresponding strict threshold holds. [F2, F3, F8, step 3.1, step 2.2, algebra]

5.1 In every case where the relevant threshold is met, step 4.1 and step 1.3 produce a quadratic $F\subseteq E$ with $\zeta_F(\beta)=0$. By [F5] and [F4], $$1-\beta>c_QD_F^{-1/2}\ge c_QD_E^{-1/m}.$$ Otherwise the gap is strictly greater than the relevant logarithmic threshold. This proves the displayed strict bound for $\mu$. In each first-applicable original $\nu$ case one has $\mu\le16\nu$, so taking $c=\min\{c_Q,1/16\}$ gives the original weaker three-case estimate as well. All constants are absolute and effective. [F4, F5, step 4.1, step 1.3, algebra] ∎
