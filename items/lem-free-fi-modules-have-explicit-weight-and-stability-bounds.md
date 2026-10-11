---
id: lem-free-fi-modules-have-explicit-weight-and-stability-bounds
kind: lemma
title: "Free FI-modules have computable stability degree and weight"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-free-fi-module-generated-by-an-sm-module,
       def-injectivity-surjectivity-and-stability-degree-of-an-fi-module,
       def-weight-of-a-characteristic-zero-fi-module,
       lem-branching-rule-for-specht-induction-and-coinvariants,
       def-fi-coinvariant-functors-and-transition-maps,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order,
       def-first-row-padding-of-a-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Proposition 3.1.7 with its proof (the orbit decomposition of $\\Phi_aM(W)_n$ and the injectivity and surjectivity bounds), printed pp. 17–18; Propositions 3.2.4 and 3.2.6 (weight and stability degree of $M(\\lambda)$), printed pp. 19–20"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §5, (5.16)–(5.17), printed pp. 73–74: the Pieri rules underlying the horizontal-strip conditions"
---

## Statement

Let $W$ be an FB-module over $k$ and let $M(W)$ be the free FI-module of
[[def-free-fi-module-generated-by-an-sm-module]]. Then
$\operatorname{inj-deg}(M(W))=0$, and if $W_i=0$ for all $i>m$ then
$\operatorname{surj-deg}(M(W))\le m$; in particular
$M(m)=M(k[S_m])$ over a nonzero ring $k$ satisfies $\operatorname{inj-deg}(M(m))=0$ and
$\operatorname{stab-deg}(M(m))=m$
([[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]).
If moreover $k$ is a field of characteristic $0$ and $\lambda$ is a partition,
then $\operatorname{weight}(M(\lambda))=|\lambda|$
([[def-weight-of-a-characteristic-zero-fi-module]]) and
$\operatorname{stab-deg}(M(\lambda))=\lambda_1$. No choice principle is used.

## Facts & Assumptions

**Given:** An FB-module $W$ over $k$; for $M(W)$ the FB-module $k[S_m]$ supported at $m$-element sets (free on bijections $[m]\to T$), and for a partition $\lambda$ with $|\lambda|=m$ the FB-module $S^\lambda_k$ supported on $m$-element sets.

[F1] $M(W)_S=\bigoplus_{T\subseteq S}W(T)$ with transition maps $W(f|_T)$, and $M(k[S_m])_S$ has as $k$-basis the injections $[m]\hookrightarrow S$; for $n\ge m$, $M(S^\lambda_k)_n\cong\operatorname{Ind}^{S_n}_{S_m\times S_{n-m}}(S^\lambda_k\boxtimes k)$ ([[def-free-fi-module-generated-by-an-sm-module]]).

[F2] $\Phi_a(V)_n=(V_{\mathbf a\sqcup n})_{S_n}=k\otimes_{kS_n}V_{\mathbf a\sqcup n}$, and $T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$ is induced by an injection $\mathbf a\sqcup n\to\mathbf a\sqcup n+1$ fixing $\mathbf a$; over a field containing $\mathbb Q$ the coinvariant functor is exact ([[def-fi-coinvariant-functors-and-transition-maps]]).

[F3] Branching rule: for $\mu\vdash N$ and $0\le j\le N$, $(\operatorname{Res}^{S_N}_{S_{N-j}\times S_j}V_\mu)_{S_j}$ is the sum of the irreducibles $V_\nu$, $\nu\vdash N-j$, obtained from $\mu$ by removing one box from each of $j$ different columns (multiplicities at most one); dually, for $r\ge0$, the induction from $S_m\times S_r$ of $S^\rho\boxtimes k$ is the sum of the $S^{\nu}$ over $\nu$ obtained from $\rho$ by adding one box in each of $r$ different columns ([[lem-branching-rule-for-specht-induction-and-coinvariants]]).

[F4] Over a characteristic-zero field, the modules $V(\eta)_N$ with $\eta[N]$ a padded partition are exactly the irreducible $kS_N$-modules, and a horizontal $j$-strip in a partition $\lambda$ (a removal of one box from each of $j$ different columns leaving a partition) exists if and only if $j\le\lambda_1$ ([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]], [[def-first-row-padding-of-a-partition]]).

[F5] The weight of an FI-module over a characteristic-zero field is the supremum of $|\eta|$ over the constituents $V(\eta)_N$ of the values ([[def-weight-of-a-characteristic-zero-fi-module]]), and Maschke splits finite-dimensional semisimple modules into simples when $\operatorname{char}k=0$ ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

## Proof

**Proof technique:** direct.

1.1 The $S_n$-orbits of the subset summands of $M(W)_{\mathbf a\sqcup[n]}$ are indexed by $(U,r)$, where $U\subseteq\mathbf a$ and $0\le r\le n$: take the representative $U\sqcup[r]$ with $[r]$ in the moving block. Its stabilizer is $S_r\times S_{n-r}$, and the second factor acts trivially on $W(U\sqcup[r])$. Transporting the orbit summands to the representative identifies their coinvariants with $(W(U\sqcup[r]))_{S_r}$: different transports differ by a stabilizer element, so they give the same map after quotienting, and the representative inclusion is inverse. Thus $\Phi_aM(W)_n\cong\bigoplus_{U\subseteq\mathbf a}\bigoplus_{r=0}^n(W(U\sqcup[r]))_{S_r}$. Choosing a single bijection $\mathbf b\to U$, with $b=|U|$, identifies this factor with $\Phi_b(W)_r:=(W(\mathbf b\sqcup[r]))_{S_r}$; for an FB-module this denotes only a degreewise quotient, without transition maps. The standard inclusion $[n]\hookrightarrow[n+1]$ fixes every representative with $r\le n$, so $T$ acts as the identity on every existing factor and only adds factors with $r=n+1$. [F1, F2, given]

1.2 Let $k$ have characteristic $0$ and let $|\lambda|=m$. For $n\ge m$ the identification $M(S^\lambda_k)_n\cong\operatorname{Ind}^{S_n}_{S_m\times S_{n-m}}(S^\lambda_k\boxtimes k)$ of [F1] together with the branching rule [F3] shows that the constituents of $M(\lambda)_n$ are the Specht modules $S^{\nu}$ over the partitions $\nu\vdash n$ obtained from $\lambda$ by adding one box in each of $n-m$ different columns; for $n<m$ the value is $0$. For such a $\nu$, the added boxes occupy $n-m$ distinct columns, so $\nu_1\ge n-m$; writing $\nu=\eta[n]$ this gives $|\eta|=n-\nu_1\le m$. Hence every constituent $V(\eta)_n$ of any $M(\lambda)_n$ has $|\eta|\le m$, so $\operatorname{weight}(M(\lambda))\le m$ by [F5]. [F1, F3, F5, given]

2.1 By step 1.1 the map $T\colon\Phi_aM(W)_n\to\Phi_aM(W)_{n+1}$ is injective for all $a,n$, since it is the identity on every direct summand and maps distinct summands to distinct summands; hence $\operatorname{inj-deg}(M(W))=0$. If $W_i=0$ for $i>m$, then $\Phi_{|U|}(W)_r=0$ for $r>m$, so for $n\ge m$ the direct-sum decomposition of step 1.1 is independent of $n$ and $T$ is an isomorphism; hence $\operatorname{surj-deg}(M(W))\le m$. For $M(m)=M(k[S_m])$ the factor $\Phi_0(k[S_m])_m=(k[S_m])_{S_m}\cong k$ is nonzero when $k\ne0$, and it occurs in $\Phi_0(M(m))_n$ only when $n\ge m$; so for $m>0$ the map $T\colon\Phi_0(M(m))_{m-1}\to\Phi_0(M(m))_m$ is not surjective, giving $\operatorname{surj-deg}(M(m))\ge m$ and hence equality, and $\operatorname{stab-deg}(M(m))=m$. For $m=0$ the upper bound already gives equality $0$; no negative degree is used. Over the zero ring all modules vanish, so all these degrees are $0$ instead. [F2, step 1.1]

2.2 Conversely, for $n\ge m+\lambda_1$ the padded partition $\lambda[n]=(n-m,\lambda_1,\lambda_2,\dots)$ is obtained from $\lambda$ by adding one box in each of the first $n-m$ columns, so $V(\lambda)_n$ occurs in $M(\lambda)_n$ by step 1.2; therefore $\operatorname{weight}(M(\lambda))\ge m$, and with step 1.2, $\operatorname{weight}(M(\lambda))=m$. [F3, F5, step 1.2]

2.3 For the stability degree, fix $a\ge0$ and use the decomposition of step 1.1 for $W=S^\lambda_k$: the factor indexed by $U\subseteq\mathbf a$ is $\Phi_{|U|}(S^\lambda_k)_r=(S^\lambda_k)_{S_r}$ when $|U|+r=m$ (and $0$ otherwise), where $S_r$ acts on the last $r$ points. By the branching rule [F3], $(S^\lambda_k)_{S_r}$ is the sum of the Specht modules obtained from $\lambda$ by removing one box from each of $r$ different columns, and by the strip criterion [F4] such a removal exists exactly when $r\le\lambda_1$; hence $(S^\lambda_k)_{S_r}=0$ for  $r>\lambda_1$ and is nonzero for  $r=\lambda_1$ provided $m\ge\lambda_1$. Consequently, for every $n\ge\lambda_1$ all nonzero factors of $\Phi_aM(\lambda)_n$ already occur in $\Phi_aM(\lambda)_{\lambda_1}$, and $T$ acts as the identity on them, so $T$ is surjective for all $n\ge\lambda_1$; thus $\operatorname{surj-deg}(M(\lambda))\le\lambda_1$. [F2, F3, F4, step 1.1]

3.1 Sharpness: if $\lambda_1>0$, take $a=m-\lambda_1\ge0$. The factor with $U=\mathbf a$ and  $r=\lambda_1$ equals $(S^\lambda_k)_{S_{\lambda_1}}\ne0$ and occurs in $\Phi_aM(\lambda)_n$ exactly when $n\ge\lambda_1$; in particular $T\colon\Phi_aM(\lambda)_{\lambda_1-1}\to\Phi_aM(\lambda)_{\lambda_1}$ has a nonzero target summand not met by $T$, so it is not surjective and $\operatorname{surj-deg}(M(\lambda))\ge\lambda_1$. Hence $\operatorname{surj-deg}(M(\lambda))=\lambda_1$, and by step 2.1, which gives injectivity degree $0$, $\operatorname{stab-deg}(M(\lambda))=\lambda_1$. For $\lambda=\varnothing$ we have $m=\lambda_1=0$, $M(\varnothing)=M(k)$ has all transition maps isomorphisms and stability degree $0$. [F2, step 1.1, step 2.1, step 2.3]

4.1 Step 2.1 gives the general injectivity and surjectivity bounds and the exact stability degree of $M(m)$; steps 1.2 and 2.2 give $\operatorname{weight}(M(\lambda))=|\lambda|$; steps 2.3 and 3.1 give $\operatorname{stab-deg}(M(\lambda))=\lambda_1$. [step 2.1, step 1.2, step 2.2, step 2.3, step 3.1] ∎
