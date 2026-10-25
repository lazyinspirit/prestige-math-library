---
id: lem-two-dimensional-tame-symbol-reciprocity
kind: lemma
title: "Tame symbol reciprocity in dimension two (the Key Lemma)"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps:
  - cor-length-is-additive-in-short-exact-sequences
  - def-axiom-of-choice
  - lem-order-function-one-dimensional-local-domain
  - lem-proper-pushforward-of-cycles-well-defined
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-integral-closure-finite-finite-type-domain-over-field
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.2-42.6 (periodic complexes, Herbrand quotients, tame symbols; Key Lemma tag 0EAX)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.2-42.6: two-periodic complexes, the invariant e(M,a,b), and the Key Lemma 42.6.3 (tag 0EAX)"
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.27-42.30 (the Gysin map for divisors)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.27-42.30: orders of Cartier intersections and the tame-symbol computation"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. Let $A$ be a
two-dimensional local domain essentially of finite type over a field and
$f,g\in\operatorname{Frac}(A)^\times$. For each height-one prime $q$, define
$\partial_q(f,g)$ by normalization and norms of the DVR symbols
$(-1)^{v(f)v(g)}f^{v(g)}/g^{v(f)}$ reduced in the residue fields. Then
$\sum_q\operatorname{ord}_{A/q}(\partial_q(f,g))=0$. The difference between two
orders of rational-section intersection is consequently a sum of divisors
of these symbols; for two section zero schemes the relations can be chosen
on their common intersection. This proves
well-definedness of first Chern operators and Cartier Gysin on rational
equivalence and commutation of two Cartier Gysins.

## Facts & Assumptions

**Given:** the Axiom of Choice; a two-dimensional local domain $A$, essentially of finite type over a field, with fraction field $K=\operatorname{Frac}(A)$, maximal ideal $\mathfrak m$, and nonzero $f,g\in K^\times$; for each height-one prime $q\subseteq A$ the one-dimensional local domain $A/q$ with fraction field $\kappa(q)$.

[F1] A two-dimensional local domain essentially of finite type over a field is Noetherian, and its normalization $B$ is a finite $A$-module and a semilocal normal domain; every local ring of a normal one-dimensional Noetherian domain at a height-one prime is a discrete valuation ring ([[thm-integral-closure-finite-finite-type-domain-over-field]], [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]).

[F2] The order function of a one-dimensional Noetherian local domain is multiplicative, additive and computed by lengths; it agrees with the normalized valuation on a discrete valuation ring ([[lem-order-function-one-dimensional-local-domain]]). Length is additive in short exact sequences, and the invariant of a two-periodic complex is defined whenever its two homology modules have finite length ([[cor-length-is-additive-in-short-exact-sequences]]).

[F3] For a finite extension of one-dimensional local domains, the norm-order formula computes the order of a norm, with residue-field degree weights ([[lem-proper-pushforward-of-cycles-well-defined]]).

## Proof

**Proof technique:** direct; introduce the two-periodic invariant $e(M,a,b)$, compute it on finite-length and nilpotent modules, identify it with the order of the tame symbol on a lattice, and sum over height-one primes using normalization.

1.1 The invariant and its basic properties. For a module $M$ over a commutative ring with commuting endomorphisms $a,b$ satisfying $abM=b aM=0$, whose two-periodic complex has finite-length homology, set $e(M,a,b)=\ell(\ker a/bM)-\ell(\ker b/aM)$, where the lengths are taken over the ring acting; both terms are finite by [F2] and the finite-homology hypothesis. If $0\to M'\to M\to M''\to0$ is a short exact sequence of such complexes, the long exact homology sequence together with additivity of length shows $e(M,a,b)=e(M',a,b)+e(M'',a,b)$. If $M$ has finite length, then $\ell\ker a=\ell M-\ell(aM)$ and $\ell\ker b=\ell M-\ell(bM)$ by [F2], and substitution gives $e(M,a,b)=0$. [F2, given, algebra]

2.1 The nilpotent identity. Let $t$ be an endomorphism of $M$ with $t^NM=0$ for some $N\ge1$ and assume $\ker(t)/t^{N-1}M$ has finite length; consider the pair $(a,b)=(t^i,t^{N-i})$ for $0\le i\le N$, so that $ab=0$. Put $K_i=\ker t^i$ and let $a_i=\ell(K_i/t^{N-i}M)$, $b_i=\ell(K_i/tK_{i+1})$, $c_i=\ell(K_1/t^iK_{i+1})$, lengths over the ring acting. The quotients $K_1/t^iK_{i+1}$ have finite length, since $t^{N-1}M\subseteq t^iK_{i+1}$. The identities $K_i\cap t^jM=t^jK_{i+j}$ produce the two exact sequences $0\to K_1/t^{N-i-1}K_{N-i}\to K_{i+1}/t^{N-i-1}M\xrightarrow{t}K_i/t^{N-i}M\to K_i/tK_{i+1}\to0$ and $0\to K_i/tK_{i+1}\to K_{i+1}/tK_{i+2}\xrightarrow{t^i}K_1/t^{i+1}K_{i+2}\to K_1/t^iK_{i+1}\to0$; these sequences inductively show that all $a_i,b_i$ are finite (starting with $a_1=\ell(K_1/t^{N-1}M)$), and length additivity gives $c_{N-i-1}-a_{i+1}+a_i-b_i=0$ and $b_i-b_{i+1}+c_{i+1}-c_i=0$, and with $b_0=c_0=0$ the second relation gives $b_i=c_i$ for all $i$, whence $a_{i+1}-a_i=b_{N-i-1}-b_i$ by the first; summing over $i$ yields $a_i=a_{N-i}$, which is exactly $e(M,t^i,t^{N-i})=0$. [F2, step 1.1, algebra]

3.1 Multiplier identities. Let $M$ be a finite module over a Noetherian local ring, with commuting endomorphisms $a,b,x$, $abM=0$, finite-length $x$-power torsion, and $M/xM$ supported at the closed point. Removing that torsion leaves $x$ injective, so $\ker(xa)=\ker a$ and the exact sequence $0\to aM/xaM\to\ker b/xaM\to\ker b/aM\to0$ gives $e(M,xa,b)=e(M,a,b)-e(aM,0,x)$; the same argument gives $e(M,a,xb)=e(M,a,b)+e(bM,0,x)$. If $N$ is supported at the closed point and a height-one prime $q$ of a two-dimensional local domain $R$, with $x\notin q$, then $$e_R(N,0,x)=\ell_{R_q}(N_q)\operatorname{ord}_{R/q}(x).$$ Indeed, additivity and a finite filtration by powers of $q$ reduce to a finite module over the one-dimensional local domain $R/q$; its finite-length torsion contributes zero by step 1.1. The torsion-free quotient is a full lattice of rank $h=\ell_{R_q}(N_q)$, and there $e(N,0,x)=\ell(N/xN)=\operatorname{ord}_{R/q}(\det(x\operatorname{id}))=h\operatorname{ord}_{R/q}(x)$ by the lattice-index calculation in [F3]. Now let $M$ also satisfy $M_q\cong R_q/(\pi^{e+f})$ and $a=u\pi^e$, $b=v\pi^f$ in $R_q$, with $\pi$ a uniformizer and $u,v$ units. The nilpotent identity gives $e(M,\pi^e,\pi^f)=0$, while $\pi^eM$ and $\pi^fM$ have generic lengths $f$ and $e$. If $\pi,u,v\in R$, the multiplier identities yield $$e_R(M,a,b)=-f\operatorname{ord}_{R/q}(u)+e\operatorname{ord}_{R/q}(v)=-\operatorname{ord}_{R/q}((-1)^{ef}u^fv^{-e}).$$ For parameters initially in $R_q$, first replace $\pi,u,v$ by $c\pi,c^{-e}u,c^{-f}v$ for some $c\in R\setminus q$ so $c\pi\in R$, then choose $d\in R\setminus q$ with $du,dv\in R$ and apply the formula to $da,db$. The multiplier identities account for the factors $e_R(aM,0,d)$ and $e_R(bM,0,d)$, whose generic lengths are $f$ and $e$; these are exactly the order correction from scaling the tame symbol by $d^{f-e}$. Thus the formula also holds for the original $a,b\in R$. [F2, F3, step 1.1, step 2.1, algebra]

4.1 The normal case. Suppose first that $A$ is normal, so each height-one localization $A_q$ is a discrete valuation ring by [F1]. Let $q_1,\ldots,q_t$ be the height-one primes containing $ab$. Set $M=A/(ab)$ and let $M_i$ be the image of $M$ in $M_{q_i}=A_{q_i}/(ab)$. The kernel and cokernel of $M\to\bigoplus_i M_i$ are supported only at the maximal ideal, hence have finite length. Since $a,b$ are nonzerodivisors on $A$, cancellation gives $\ker(a:M\to M)=bM$ and $\ker(b:M\to M)=aM$, so $e_A(M,a,b)=0$. Step 1.1 and additivity therefore give $\sum_i e_A(M_i,a,b)=0$. Write $a=u_i\pi_i^{e_i}$ and $b=v_i\pi_i^{f_i}$ in $A_{q_i}$, with $\pi_i$ a uniformizer and $u_i,v_i$ units. The module $M_i$ has generic length $e_i+f_i$ at $q_i$; the modules $\pi_i^{e_i}M_i$ and $\pi_i^{f_i}M_i$ have generic lengths $f_i$ and $e_i$, respectively. Here $\pi_i^{e_i+f_i}$ annihilates $M_i$, and $\ker(\pi_i)/\pi_i^{e_i+f_i-1}M_i$ is supported only at the maximal ideal, hence has finite length: its localization at $q_i$ is zero by the DVR computation and $M_i$ has no other height-one support. Thus the nilpotent identity of step 2.1 applies. The multiplier identities of step 3.1 then give $$e_A(M_i,a,b)=-f_i\operatorname{ord}_{A/q_i}(u_i)+e_i\operatorname{ord}_{A/q_i}(v_i)=-\operatorname{ord}_{A/q_i}(\partial_{A_{q_i}}(a,b)),$$ because $\partial_{A_{q_i}}(a,b)=(-1)^{e_if_i}u_i^{f_i}/v_i^{e_i}$ in $\operatorname{Frac}(A/q_i)$ and the sign is a unit. Summing over $i$ proves $\sum_q\operatorname{ord}_{A/q}(\partial_{A_q}(a,b))=0$ for normal $A$ and $a,b\in A$. [F1, F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 The non-normal case. For general $A$, let $B$ be the finite normalization of $A$, a semilocal normal Noetherian domain by [F1], with maximal ideals $\mathfrak n$ and residue fields $\kappa(\mathfrak n)$ finite over $\kappa(\mathfrak m)$. By step 4.1 applied to each local factor $B_{\mathfrak n}$, $\sum_{Q\subseteq\mathfrak n}\operatorname{ord}_{(B/Q)_{\mathfrak n}}(\partial_Q(f,g))=0$ for the height-one primes $Q$ of $B$ inside $\mathfrak n$; multiplying by $[\kappa(\mathfrak n):\kappa(\mathfrak m)]$ and summing over $\mathfrak n$, the norm-order formula of [F3] identifies the sum over the height-one primes $Q$ above a fixed height-one prime $q$ of $A$ with $\operatorname{ord}_{A/q}\bigl(\prod_{Q\mid q}N_{\kappa(Q)/\kappa(q)}\partial_Q(f,g)\bigr)$, which is the normalizing definition of $\partial_q(f,g)$. Hence the weighted sum of the local identities is exactly $\sum_q\operatorname{ord}_{A/q}(\partial_q(f,g))=0$. Since $\partial_q$ and $\operatorname{ord}_{A/q}$ are bimultiplicative in $f$ and $g$, writing $f$ and $g$ as quotients of elements of $A$ extends the identity from elements to arbitrary $f,g\in K^\times$. [F1, F3, step 4.1, algebra]

6.1 The rational-section key formula. On an integral scheme $W$ of dimension $n$ locally of finite type over the field, let $s,t$ be nonzero rational sections of invertible sheaves $L,M$. Choose a locally finite family of prime divisors $Z_i$ outside whose union both sections are generators. At the generic point of $Z_i$, put $B_i=\mathcal O_{W,Z_i}$, choose local generators $s_i,t_i$, and write $s=f_i s_i$, $t=g_i t_i$. Representatives of the two iterated first Chern cycles differ by the cycle $$\sum_i\left(\operatorname{ord}_{B_i}(f_i)\operatorname{div}_{M|_{Z_i}}(t_i|_{Z_i})-\operatorname{ord}_{B_i}(g_i)\operatorname{div}_{L|_{Z_i}}(s_i|_{Z_i})\right)=\sum_i\operatorname{div}_{Z_i}(\partial_{B_i}(f_i,g_i)),$$ with all terms pushed to $W$. To verify this equality, compare coefficients at a codimension-two point and trivialize $L,M$ there. Rescaling $s_i$ by a unit $u_i$ replaces $f_i$ by $u_i^{-1}f_i$: both sides change by $-\operatorname{ord}_{B_i}(g_i)\operatorname{div}(u_i|_{Z_i})$, since the normalized DVR symbol satisfies $\partial(u_i^{-1},g_i)=\bar u_i^{-\operatorname{ord}_{B_i}(g_i)}$; norms give the same identity for nonnormal $B_i$ by the finite norm-order computation in [[lem-proper-pushforward-of-cycles-well-defined]]. The analogous rescaling of $t_i$ also preserves the equality. We may therefore take the generators to be these trivializations, when the left side is zero and the right coefficient is zero by step 5.1. This proves the key formula without restricting a section that vanishes identically on $Z_i$. [F2, F3, step 5.1, algebra]

7.1 First Chern descent and commutation. The right side of the key formula is a locally finite sum of principal divisors, so the two iterated first Chern classes on $[W]$ agree in $A_{n-2}(W)$. Taking $M=\mathcal O_W$ and $t=r\in k(W)^*$ gives $c_1(L)\cap\operatorname{div}_W(r)=c_1(\mathcal O_W)\cap\operatorname{div}_L(s)=0$: the section $1$ of the trivial bundle has zero divisor on every integral cycle. Thus first Chern operators annihilate each rational-equivalence generator and commute on Chow groups. Pushforward along integral closed subschemes and linear extension give the same conclusions on arbitrary locally finite type schemes. [step 6.1, F2, F3, algebra]

8.1 Cartier Gysin descent with support. Let $D=Z(s)$ for a global section of $L$, and test on an integral $W$. If $W\subseteq D$, its Gysin is the first Chern operator on $W$, which descends by step 7.1. Otherwise $D|_W$ is Cartier. For a rational section $t$ of $M|_W$, apply step 6.1, including the components of $D|_W$ among the $Z_i$, and choose $s_i=s|_W$ when $Z_i\not\subseteq D$. Then $f_i=1$ for these indices, so their tame symbols are $1$. The remaining principal divisors are on $Z_i\subseteq D$, and therefore give a rational equivalence on $D\cap W$, proving $$D^!\operatorname{div}_{M|_W}(t)=c_1(M|_{D\cap W})\cap[D\cap W].$$ For $M=\mathcal O_W$ and $t=r$ the right side is zero. Hence Cartier Gysin annihilates principal-divisor relations in its target Chow group, including after base change when the pulled-back section is not Cartier. Proper compatibility used to push these computations to the ambient zero scheme is the norm-order formula in [F3] when a cycle is not contained in $D$, and the same formula applied to rational sections when it is contained. [F3, step 6.1, step 7.1, algebra]

9.1 Two Cartier Gysins. For zero schemes $D=Z(s)$ and $D'=Z(t)$, choose rational sections on $W$ equal to the given sections whenever $W$ is not contained in their zero scheme; if it is contained, choose any nonzero rational section of the corresponding restricted line bundle. Choose local generators $s_i=s$ outside $D$ and $t_i=t$ outside $D'$. The two sides of the key formula represent the two iterated Gysins. Its right side has no term outside $D\cap D'$, because there $f_i=1$ or $g_i=1$. Thus the principal-divisor relations occur on subvarieties of $D\cap D'\cap W$, proving commutation in the required target Chow group, including cycles contained in either divisor. [step 6.1, step 8.1, algebra] ∎
