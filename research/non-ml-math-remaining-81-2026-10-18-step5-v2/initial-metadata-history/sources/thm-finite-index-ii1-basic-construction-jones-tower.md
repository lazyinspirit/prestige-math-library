---
id: thm-finite-index-ii1-basic-construction-jones-tower
kind: theorem
title: Ordinary finite-index II1 inclusions give the full Jones tower and Temperley–Lieb relations
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
- def-extremal-finite-index-ii1-subfactor-data
- lem-finite-right-n-module-frame-from-projection-model
- lem-finite-index-bounded-vector-pull-down
- lem-tracial-standard-form-and-normal-functional-vectors
- lem-finite-factor-projection-comparison-and-normalized-trace
- def-temperley-lieb-generator-presentation
- thm-temperley-lieb-presentation-isomorphism
- thm-temperley-lieb-generator-normal-form
- lem-temperley-lieb-closure-trace-is-cyclic-and-markov
- def-axiom-of-choice
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
axiom_use: 'AC is inherited from the ordinary-index module and tracial foundations: maximal orthogonal families, finite projection comparison, Hilbert adjoints and compactness selections. The subsequent dual frames and Jones-relation calculations are explicit finite sums.'
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Vaughan F. R. Jones, Planar Algebras, I
    url: https://arxiv.org/pdf/math/9909027
    locator: '§4.1, printed pp. 81–92: finite-index basic construction, module traces and Jones projections. The first-stage frame calculation is given directly below.'
  - title: David Penneys, Exercises in Quantum Algebra
    url: https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf
    locator: '§§3.2.1–3.2.2, PDF pp. 20–22, and §4.2.1, PDF pp. 31–32: conditional expectation as orthogonal projection, finite module projection, and tower setting.'
---

## Statement

Let $N\subseteq M$ be an ordinary finite-index II1 inclusion as in [[def-extremal-finite-index-ii1-subfactor-data]], with $\lambda=[M:N]<\infty$ and $\delta=\sqrt\lambda>0$. Set $M_{-1}=N$, $M_0=M$, and recursively let $e_i$ be projection $L^2(M_{i-1})\to L^2(M_{i-2})$ and $M_i=W^*(M_{i-1},e_i)$ for $i\ge1$. Every $M_i$ is a II1 factor; every adjacent inclusion has index $\lambda$ and a bounded finite right-module Parseval frame. Its normalized trace extends the earlier trace and satisfies
$$\tau_i(xe_i y)=\lambda^{-1}\tau_{i-1}(yx)\qquad(x,y\in M_{i-1}).$$
If $N\subseteq M$ is extremal in the specified right-action sense, every adjacent inclusion is extremal. The projections satisfy
$$e_i^2=e_i=e_i^*,\qquad e_i e_{i+1}e_i=\lambda^{-1}e_i,\qquad e_{i+1}e_i e_{i+1}=\lambda^{-1}e_{i+1},\qquad [e_i,e_j]=0\quad(|i-j|\ge2).$$
Consequently $U_i=\delta e_i$ define compatible unital $*$-representations of the finite diagram Temperley–Lieb tower $\mathrm{TL}_n(\mathbb C,\delta)\to M_{n-1}$, whose pulled-back traces are the normalized closure traces. Neither surjectivity onto $M_{n-1}$ nor identification with its full relative commutant is asserted. These conclusions include the index-one inclusion $N=M$.

## Facts & Assumptions

[A1] AC is inherited from the stated tracial and Hilbert-module foundations. ([[def-extremal-finite-index-ii1-subfactor-data]])

[F1] The ordinary index is $\dim_N L^2(M)$, $E_N$ is the unique trace-preserving expectation, and extremality compares $\tau_M(a)$ with $\tau_B(R_a)$ for $a\in N'\cap M$. ([[def-extremal-finite-index-ii1-subfactor-data]])

[F2] Ordinary finite index supplies bounded $u_1,\ldots,u_k\in M$ with $\sum_j u_j e_Nu_j^*=1$, $x=\sum_j u_j E_N(u_j^*x)$, $\sum_j\tau_M(u_j^*u_j)=\lambda$, and the complete projection model $M\cong pN^k$, whose Hilbert-space completion is $L^2(M)\cong pL^2(N)^k$. Every bounded right-$N$ Hilbert-space endomorphism is a matrix in $pM_k(N)p$ and hence preserves $M$. ([[lem-finite-right-n-module-frame-from-projection-model]])

[F3] $B=\operatorname{End}_N L^2(M)=W^*(M,e_N)$ is a II1 factor, its normalized module trace satisfies $\tau_B(xe_Ny)=\lambda^{-1}\tau_M(yx)$, and its trace-preserving expectation $F:B\to M$ satisfies $F(xe_Ny)=\lambda^{-1}xy$. ([[lem-finite-index-bounded-vector-pull-down]])

[F4] Every finite tracial inclusion has the unique normal faithful trace-preserving bimodule expectation; standard commutants on $L^2(A)$ are $L(A)'=R(A)$ and $R(A)'=L(A)$. ([[lem-tracial-standard-form-and-normal-functional-vectors]])

[F5] Normalized traces on II1 factors are unique, and nonzero finite matrix corners over II1 factors are II1 factors. ([[lem-finite-factor-projection-comparison-and-normalized-trace]])

[F6] The generator presentation has relations $U_i^2=\delta U_i$, $U_iU_{i\pm1}U_i=U_i$, and distant commutation, and equals the finite diagram algebra. ([[def-temperley-lieb-generator-presentation]], [[thm-temperley-lieb-presentation-isomorphism]])

[F7] Jones normal-form words span and use the highest generator at most once, so $\mathrm{TL}_{n+1}=\mathrm{TL}_n+\mathrm{TL}_nU_n\mathrm{TL}_n$. The normalized diagram closure trace is cyclic, restricts compatibly, and has the Markov value $\delta^{-1}$. ([[thm-temperley-lieb-generator-normal-form]], [[lem-temperley-lieb-closure-trace-is-cyclic-and-markov]])

## Proof

**Given:** AC and the ordinary finite-index inclusion, with [F1]–[F7]. No bounded frame is assumed in the input.

1.1 On dense vectors $x\in M$, trace preservation gives $\langle n,E_N(x)\rangle_{L^2}=\langle n,x\rangle_{L^2}$ for $n\in N$, so $e_N$ is the Hilbert projection and $e_Nxe_N=E_N(x)e_N$. By [F2], every right-module endomorphism has the finite expression $T=\sum_jT(u_j)e_Nu_j^*$, since in the finite Hilbert-space model $T$ is a matrix with entries in $N$, so $T(u_j)\in M$; its adjointable module bound also makes it bounded on $L^2(M)$. Hence the first algebra is precisely the finite corner $M_1=B\cong pM_k(N)p$. [A1, F1, F2, F3, given, construct]

2.1 The corner trace is $\tau_1=\lambda^{-1}(\operatorname{Tr}_k\otimes\tau_N)$, faithful and normal, and in the coordinate frame its unnormalized value is $\sum_j\tau_N(E_N(u_j^*T(u_j)))$. For $T=xe_Ny$, the adjoint of the frame identity for $y^*$ gives $\sum_jE_N(yu_j)u_j^*=y$, whence $\lambda\tau_1(xe_Ny)=\tau_M(yx)$. By uniqueness [F5], $\tau_1|_M=\tau_M$. The expectation $F$ of [F3] is therefore for these normalized traces. Applying $F$ to $1=\sum_j u_j e_Nu_j^*$ gives $\sum_j u_ju_j^*=\lambda1$. [F2, F3, F5, step 1.1, algebra]

3.1 Put $v_j=\sqrt\lambda\,u_j e_N\in M_1$. For $T=xe_Ny$, [F3] gives $\sum_jv_j F(v_j^*T)=\sum_j u_j e_N E_N(u_j^*x)y=xe_Ny$. Every element of $M_1$ is a finite sum of such terms by step 1.1, so this is a Parseval frame on all of $M_1$. Its projection matrix $q_{ij}=F(v_i^*v_j)$ gives an onto $M$-valued inner-product isometry $T\mapsto(F(v_j^*T))_j$ from $M_1$ to $qM^k$, with inverse $(a_j)\mapsto\sum_jv_ja_j$. Its Hilbert-space completion is $qL^2(M)^k$. Moreover $\sum_j\tau_M(F(v_j^*v_j))=\lambda\sum_j\tau_1(e_Nu_j^*u_je_N)=\sum_j\tau_M(u_j^*u_j)=\lambda$. Thus the ordinary index of $M\subseteq M_1$ is $\lambda$, and [F3]–[F5] apply again. [F2, F3, F4, F5, step 1.1, step 2.1, construct]

4.1 Suppose the initial inclusion is extremal. On $H=L^2(M)$, $M'\cap M_1=R(M)\cap R(N)'=\{R_a:a\in N'\cap M\}$ by [F4]. For such $a$, $E_N(a)\in Z(N)$ by bimodularity, so trace preservation gives $E_N(a)=\tau_M(a)1$; hence for $c=R_a$ one has $e_Nce_N=\tau_M(a)e_N$. Let $M_2=\operatorname{End}_M L^2(M_1)$ with the trace from the frame in step 3.1. The right-action module trace is
$$\tau_2(R_c)=\lambda^{-1}\sum_j\tau_1(v_j^*v_jc)=\sum_j\tau_1(e_Nu_j^*u_je_Nc)=\tau_M(a)\sum_j\tau_1(e_Nu_j^*u_je_N)=\tau_M(a).$$
In the middle equality one may insert a final $e_N$: if $A=e_NAe_N$, traciality gives $\tau_1(Ac)=\tau_1(Ace_N)$. The last sum is $\lambda^{-1}\sum_j\tau_M(u_j^*u_j)=1$. Initial extremality states $\tau_1(c)=\tau_M(a)$, so $\tau_2(R_c)=\tau_1(c)$ for every $c\in M'\cap M_1$, which is exactly extremality of $M\subseteq M_1$. [F1, F2, F3, F4, step 2.1, step 3.1, algebra]

5.1 Iterate steps 1.1–3.1. Each new finite corner is a II1 factor by [F5], its trace restricts to the previous factor trace by uniqueness, and step 3.1 supplies a bounded finite frame of the same ordinary index $\lambda$. If extremality holds initially, step 4.1 propagates it. This constructs every finite stage of the asserted tower; no common finite frame length for all stages is required. [F3, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1, construct]

6.1 To verify both adjacent relations independently, work first on $L^2(M_1)$ and put $e=e_N$, $f=e_2$. The compression identity is $fTf=F(T)f$ for $T\in M_1$, so $fef=F(e)f=\lambda^{-1}f$. For the reverse order evaluate on the dense vectors $T=xe y\in M_1$: $efe(T)=eF(exey)=\lambda^{-1}eE_N(x)y=\lambda^{-1}E_N(x)ey=\lambda^{-1}e(T)$. These vectors span $M_1$ by step 1.1, and all operators are bounded; hence $efe=\lambda^{-1}e$. Apply the same two calculations at each adjacent inclusion from step 5.1. Every $e_i$ is a self-adjoint projection by definition. [F1, F3, F4, step 1.1, step 5.1, algebra]

7.1 For $j\ge i+2$, the projection $e_j$ commutes with $M_{j-2}$ by its bimodule projection formula, and $e_i\in M_i\subseteq M_{j-2}$; thus $e_ie_j=e_je_i$. Setting $U_i=\delta e_i$, the square and both adjacent identities become the relations in [F6], since $\delta^2=\lambda$. Reflection is the $*$-operation on the real-parameter diagram algebra, so its presentation yields compatible unital $*$-representations $\mathrm{TL}_n(\mathbb C,\delta)\to M_{n-1}$. [F4, F6, step 5.1, step 6.1, algebra]

8.1 The traces normalize the unit and restrict compatibly. For $x$ in the earlier algebra the Markov formula of step 2.1 at stage $i$ gives $\tau_i(xU_i)=\delta\lambda^{-1}\tau_{i-1}(x)=\delta^{-1}\tau_{i-1}(x)$. To compare with normalized diagram closure, use [F7]: each element at rank $n+1$ is a sum of an earlier-rank element and terms $xU_ny$. Restriction fixes the first term, while cyclicity forces the value on $xU_ny$ to be $\delta^{-1}\tau_n(yx)$. Induction from rank zero therefore determines at most one compatible normalized Markov trace. Closure satisfies these same rules by [F7], so it is the pulled-back trace, which is positive because it comes from a positive trace on a II1 factor. Finally $\lambda\ge1$ follows from $\tau_1(e_1)=\lambda^{-1}\le1$. If $\lambda=1$, faithfulness gives $e_1=1$, so $M=N$ and the subsequent inclusions and projections are identities; all the same formulas hold. No zero or empty frame occurs, since its rank operators sum to the identity. This proves all claims. [F1, F3, F7, step 2.1, step 5.1, step 6.1, step 7.1, algebra] ∎
