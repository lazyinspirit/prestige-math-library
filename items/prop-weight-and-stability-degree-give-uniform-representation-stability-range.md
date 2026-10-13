---
id: prop-weight-and-stability-degree-give-uniform-representation-stability-range
kind: proposition
title: "Weight and stability degree give a uniform representation-stability range"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-uniform-representation-stability-for-consistent-sn-sequences,
       def-weight-of-a-characteristic-zero-fi-module,
       def-injectivity-surjectivity-and-stability-degree-of-an-fi-module,
       lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight,
       prop-specht-constituents-of-an-fi-module-have-bounded-first-row,
       def-fi-coinvariant-functors-and-transition-maps,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order,
       def-coinvariants-functor-of-a-group-module]
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
      locator: "Proposition 3.3.3 with its complete proof, printed pp. 21–22: the consistent sequence of an FI-module of weight $d$ and stability degree $s$ is uniformly representation stable with stable range $n\\ge d+s$, proved through the kernel and cokernel of $\\varphi_n$ and the two factorizations of $T$"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "§1, printed pp. 1–2: the same stability-range statement in the Noetherian-rings context"
---

## Statement

Let $k$ be a field of characteristic $0$ and let $V$ be an FI-module over $k$
with finite-dimensional values, weight $d:=\operatorname{weight}(V)<\infty$ and
stability degree $s:=\operatorname{stab-deg}(V)<\infty$
([[def-weight-of-a-characteristic-zero-fi-module]],
[[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]). Let
$(V_n,\varphi_n)$ be the consistent sequence determined by $V$
([[def-uniform-representation-stability-for-consistent-sn-sequences]]). Then
$(V_n,\varphi_n)$ is uniformly representation stable with stable range
$n\ge d+s$: the maps $\varphi_n$ are injective for all $n\ge d+s$, the
$S_{n+1}$-span of $\varphi_n(V_n)$ is all of $V_{n+1}$ for all $n\ge d+s$, and
for every partition $\lambda$ the multiplicity $c_{\lambda,n}$ of $V(\lambda)_n$
in $V_n$ is independent of $n$ for all $n\ge d+s$. No choice principle is
used.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$, an FI-module $V$ over $k$ with finite-dimensional values, $d=\operatorname{weight}(V)<\infty$ and $s=\operatorname{stab-deg}(V)<\infty$, and the consistent sequence $(V_n,\varphi_n)$ with $\varphi_n$ induced by the standard inclusion $[n]\hookrightarrow[n+1]$ ([[def-uniform-representation-stability-for-consistent-sn-sequences]]); for $n\ge|\lambda|+\lambda_1$, $V(\lambda)_n$ is the irreducible $kS_n$-module with label $\lambda[n]$, of multiplicity $c_{\lambda,n}$ in $V_n$ ([[def-weight-of-a-characteristic-zero-fi-module]], [[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]).

[F1] A consistent sequence is uniformly representation stable with stable range $n\ge N$ when (I) $\varphi_n$ is injective for all $n\ge N$, (II) the $S_{n+1}$-span of $\varphi_n(V_n)$ is $V_{n+1}$ for all $n\ge N$, and (III) for every partition $\lambda$ the multiplicity $c_{\lambda,n}$ is independent of $n$ for all $n\ge N$ ([[def-uniform-representation-stability-for-consistent-sn-sequences]]).

[F2] $\operatorname{stab-deg}(V)=\max(\operatorname{inj-deg}(V),\operatorname{surj-deg}(V))$, so for every $a\ge0$ the transition map $T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$ is an isomorphism for all $n\ge s$ ([[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]], [[def-fi-coinvariant-functors-and-transition-maps]]).

[F3] $\operatorname{weight}(V)=d$ means that no irreducible of label $\lambda$ with $|\lambda|>d$ occurs as a constituent of $V_n$ for any $n\ge|\lambda|+\lambda_1$; hence $c_{\lambda,n}=0$ whenever $|\lambda|>d$ and $c_{\lambda,n}$ is defined ([[def-weight-of-a-characteristic-zero-fi-module]]).

[F4] For $\mu=\lambda[n]\vdash n$ and $a\le n$: (i) $(V_\mu)_{S_{n-a}}=0\iff a<|\lambda|$; (ii) if $a=|\lambda|$, then $(V_\mu)_{S_{n-a}}\cong V_\lambda$; (iii) for fixed $\lambda$ and $a\ge|\lambda|$, $(V(\lambda)_n)_{S_{n-a}}\cong\operatorname{Ind}_{S_{|\lambda|}\times S_{a-|\lambda|}}^{S_a}(V_\lambda\boxtimes k)$ for all $n\ge a+\lambda_1$; (iv) if an FI-module $U$ over a characteristic-zero field has $\operatorname{weight}(U)\le a$, then, for every $n\ge a$, every subquotient $W_n$ of $U_n$ satisfies $W_n=0\iff(W_n)_{S_{n-a}}=0$ ([[lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight]]).

[F5] Every constituent $V(\lambda)_n$ of $V_n$ satisfies $\lambda_1\le s$ ([[prop-specht-constituents-of-an-fi-module-have-bounded-first-row]]).

[F6] $\Phi_a(U)_n=(U_{\mathbf a\sqcup n})_{S_n}$ with transition map $T$ induced by an injection $\mathbf a\sqcup n\to\mathbf a\sqcup n+1$ fixing $\mathbf a$; $\Phi_a$ is a functor, it is exact when $k$ contains $\mathbb Q$, and it preserves finite direct sums, so $(U\oplus U')_{S_n}\cong U_{S_n}\oplus U'_{S_n}$ ([[def-fi-coinvariant-functors-and-transition-maps]], [[def-coinvariants-functor-of-a-group-module]]).

[F7] Over the characteristic-zero field $k$, every finite-dimensional $kS_n$-module is a direct sum of copies of the pairwise non-isomorphic irreducibles $V(\lambda)_n$ ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]], [[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]).

## Proof

**Proof technique:** direct.

1.1 The commuting $S_a$-action on $\Phi_a(V)$ makes every $T$ $S_a$-equivariant by [[def-fi-coinvariant-functors-and-transition-maps]], so the isomorphisms used below preserve representation types. Let $K_n:=\ker\varphi_n\subseteq V_n$ and let $\varphi'_n:=\operatorname{Ind}_{S_n}^{S_{n+1}}\varphi_n\colon\operatorname{Ind}_{S_n}^{S_{n+1}}V_n\to V_{n+1}$ with cokernel $C_{n+1}$, so that $C_{n+1}$ is a quotient of $V_{n+1}$. The image of $\varphi'_n$ is the $S_{n+1}$-span of $\varphi_n(V_n)$, since $\varphi'_n(\sigma\otimes v)=\sigma\cdot\varphi_n(v)$; hence condition (I) is $K_n=0$ for all $n\ge N$ and condition (II) is $C_{n+1}=0$ for all $n\ge N$. [F1, F6, given]

2.1 If $|\lambda|>d$, then $c_{\lambda,n}=0$ for every $n$ for which $c_{\lambda,n}$ is defined, so condition (III) is automatic for such $\lambda$; it remains to treat $|\lambda|\le d$. [F3, step 1.1]

2.2 Vanishing criteria: for $n\ge d$ one has $K_n=0\iff(K_n)_{S_{n-d}}=0$, and for $n+1\ge d$ one has $C_{n+1}=0\iff(C_{n+1})_{S_{n+1-d}}=0$. Indeed $K_n$ is a submodule of $V_n$ and $C_{n+1}$ is a quotient of $V_{n+1}$, both are subquotients of modules of weight $d$ ([[def-weight-of-a-characteristic-zero-fi-module]]), and [F4](iv) applies with $a=d$. [F3, F4, step 1.1]

2.3 Factorization: for $n\ge d$, identify $\Phi_d(V)_{n-d}$ with $(V_n)_{S_{n-d}}$ and $\Phi_d(V)_{n+1-d}$ with $(V_{n+1})_{S_{n+1-d}}$ along the standard identifications of $\mathbf d\sqcup(n-d)$ with $[n]$ and of $\mathbf d\sqcup(n+1-d)$ with $[n+1]$. The transition map $T\colon(V_n)_{S_{n-d}}\to(V_{n+1})_{S_{n+1-d}}$ factors in two ways: $T=q\circ(\varphi_n)_{S_{n-d}}$, where $q$ is the quotient map onto coinvariants of the larger subgroup $S_{n+1-d}\ge S_{n-d}$, and $T=(\varphi'_n)_{S_{n+1-d}}\circ\psi$, where $\psi$ is induced by $v\mapsto1\otimes v$. Exactness of coinvariants over $k$ gives $(K_n)_{S_{n-d}}=\ker\bigl((\varphi_n)_{S_{n-d}}\bigr)$ and $(C_{n+1})_{S_{n+1-d}}=\operatorname{coker}\bigl((\varphi'_n)_{S_{n+1-d}}\bigr)$. [F6, given, step 1.1]

3.1 We prove (III) by induction on $m=|\lambda|$ in the range $m\le d$. Fix $m\le d$, let $n\ge s+d$ (so $n-m\ge s\ge0$), and assume the multiplicities $c_{\mu,n'}$ are independent of $n'$ in the range for all $|\mu|<m$. Since $n-m\ge s$, the transition maps give isomorphisms $\Phi_m(V)_{n-m}\cong\Phi_m(V)_i$ for all $i\ge s$, so the isomorphism class of $(V_n)_{S_{n-m}}=\Phi_m(V)_{n-m}$ is independent of $n$. By [F7] $V_n=\bigoplus_\lambda c_{\lambda,n}V(\lambda)_n$ is a finite direct sum of irreducibles, and [F6] gives $(V_n)_{S_{n-m}}=\bigoplus_\lambda c_{\lambda,n}(V(\lambda)_n)_{S_{n-m}}$; by [F4](i) with $a=m$ only the labels with $|\lambda|\le m$ contribute, and by [F4](ii) with $a=m$ those with $|\lambda|=m$ contribute $(V(\lambda)_n)_{S_{n-m}}\cong V_\lambda$. For $|\lambda|<m$, [F4](iii) gives $(V(\lambda)_n)_{S_{n-m}}\cong\operatorname{Ind}_{S_{|\lambda|}\times S_{m-|\lambda|}}^{S_m}(V_\lambda\boxtimes k)$, independent of $n$, provided $n\ge m+\lambda_1$; this holds because $\lambda_1\le s$ for every occurring constituent by [F5] and $m+\lambda_1\le d+s\le n$. Hence in the decomposition $(V_n)_{S_{n-m}}=\bigoplus_{|\lambda|<m}c_{\lambda,n}(V(\lambda)_n)_{S_{n-m}}\oplus\bigoplus_{|\lambda|=m}c_{\lambda,n}V_\lambda$ the first summand has an isomorphism class independent of $n$ (each factor is independent of $n$ and each multiplicity is constant by the induction hypothesis), and the total has an isomorphism class independent of $n$, so the second summand does too; as the $V_\lambda$ with $|\lambda|=m$ are pairwise non-isomorphic, every multiplicity $c_{\lambda,n}$ with $|\lambda|=m$ is independent of $n$ in the range. This proves (III) for all $\lambda$ with $|\lambda|\le d$ and hence, with step 2.1, for all $\lambda$. [F2, F4, F5, F6, F7, step 2.1]

3.2 Let $n\ge s+d$, so that $n-d\ge s$ and $T\colon\Phi_d(V)_{n-d}\to\Phi_d(V)_{n+1-d}$ is an isomorphism by [F2]. The first factorization in step 2.3 then forces $(\varphi_n)_{S_{n-d}}$ to be injective, and the second forces $(\varphi'_n)_{S_{n+1-d}}$ to be surjective; by the exactness identifications in step 2.3 and the criteria in step 2.2, $K_n=0$ and $C_{n+1}=0$. By step 1.1, conditions (I) and (II) hold for all $n\ge s+d$. [F2, step 1.1, step 2.2, step 2.3]

4.1 Steps 2.1 and 3.1 give condition (III) for $n\ge d+s$ and steps 2.2, 2.3 and 3.2 give conditions (I) and (II) for $n\ge d+s$; hence the consistent sequence $(V_n,\varphi_n)$ is uniformly representation stable with stable range $n\ge d+s$. [step 2.1, step 3.1, step 2.2, step 2.3, step 3.2] ∎
