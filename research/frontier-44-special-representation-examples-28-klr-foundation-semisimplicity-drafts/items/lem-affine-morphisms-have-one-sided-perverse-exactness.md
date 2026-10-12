---
id: lem-affine-morphisms-have-one-sided-perverse-exactness
kind: lemma
title: "Affine morphisms have one-sided perverse exactness"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - lem-artin-affine-vanishing-for-constructible-perverse-sheaves
  - thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes
  - lem-analytic-constructible-sheaves-admit-coherent-six-operations
  - cor-noether-normalisation-module-finiteness
  - thm-affine-domain-dimension-transcendence-degree
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Beilinson, Bernstein and Deligne, Faisceaux pervers, sections 4.1.1–4.1.8"
      url: https://www.numdam.org/item/AST_1982__100__1_0.pdf
---

## Statement

Assume the inherited Axiom of Choice. For an affine morphism $u:X\to Y$ of complex algebraic varieties and finite-dimensional field coefficients, $Ru_*$ sends ${}^pD^{\le0}_c(X)$ into ${}^pD^{\le0}_c(Y)$ and $Ru_!$ sends ${}^pD^{\ge0}_c(X)$ into ${}^pD^{\ge0}_c(Y)$. More precisely a bounded constructible $K$ belongs to ${}^pD^{\le0}_c(Y)$ if and only if $H^q(V,K)=0$ for every affine Zariski open $V\subset Y$ and every $q>0$.

## Facts & Assumptions

**Given:** the complex affine morphism, bounded constructible complexes, coefficient field and choice assumption of the Statement.

[F1] Absolute Artin vanishing, including the ordinary sheaf bound by support dimension, is [[lem-artin-affine-vanishing-for-constructible-perverse-sheaves]]. This is an indispensable prior supplier, not a conclusion assumed from the present relative statement.

[F2] Finite complex algebraic stratifications give finite dimension filtrations $F_i$ with smooth pure-dimensional layers $W_i=F_i\setminus F_{i-1}$, on which all ordinary cohomology sheaves are local systems. The upper perverse support condition on an $i$-dimensional layer is ordinary cohomological degree at most $-i$. Duality exchanges upper and lower perverse aisles and $D Ru_*D=Ru_!$. Ordinary restriction is exact, and support, Čech and bounded hypercohomology spectral sequences have their usual exact triangles ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]], [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]]).

[F3] A nonempty smooth irreducible affine complex variety of dimension $i$ has a finite map to affine $i$-space. This follows from [[cor-noether-normalisation-module-finiteness]] and [[thm-affine-domain-dimension-transcendence-degree]]: finiteness gives an algebraic function-field extension of the normalization polynomial ring, so its number of independent coordinates is $i$. Subtracting the coordinates of one chosen point makes their common zero fiber finite and nonempty.

## Proof

**Given:** the data and exact suppliers of the Statement. We first construct a top-degree detector for nonzero local systems.

1.1 Let $U$ be smooth irreducible affine of dimension $i\ge1$, and let $L$ be a nonzero finite-rank local system. By [F3] choose $i$ functions with finite nonempty common zero set $S$. Local complex orientation and local constancy identify $H_S^{2i}(U,L)$ with $\bigoplus_{s\in S}L_s$, nonzero, while [F1] gives $H^{2i}(U,L)=0$. The support long exact sequence therefore gives $H^{2i-1}(U\setminus S,L)\ne0$. Cover $U\setminus S$ by the $i$ principal opens $D(f_j)$. Every finite intersection is affine, so [F1] bounds its ordinary cohomology by $i$; the Čech index is at most $i-1$. In total degree $2i-1$ only the term $H^i(D(f_1\cdots f_i),L)$ can contribute. It is consequently nonzero. For $i=0$ the detector is simply the nonzero stalk on an isolated point. [F1, F2, F3, construct]

1.2 The forward direction of the affine-open characterization is [F1], applied to each restriction. Conversely suppose all positive $H^q(V,K)$ vanish. Write $U_i=Y\setminus F_{i-1}$ and argue downwards in $i$ that the stalk degrees on $U_i$ obey the upper perverse support bound. Suppose the assertion is established on all larger-dimensional layers. On $U_i$ let $A=\tau_{\le-i}K$ and $Q=\tau_{>-i}K$. The induction hypothesis and the bound at the layer of dimension $i$ make $A$ upper perverse. Thus on each affine $V\subset U_i$, [F1] and the triangle $A\to K\to Q$ give $H^q(V,Q)=0$ for $q>0$. All ordinary cohomology sheaves of $Q$ are supported on the closed smooth layer $W_i\subset U_i$ and are local systems there. [F1, F2, induction, base, ih]

2.1 If $Q$ is nonzero, let $b>-i$ be its largest nonzero cohomological degree and let $L=\mathcal H^b(Q)|_{W_i}$ be nonzero on a connected component. Choose an affine $V_0\subset U_i$ meeting that component and removing the other smooth components if necessary. Then $V_0\cap W_i$ is smooth affine and $L$ is a nonzero local system on it. Step 1.1 supplies a principal open of it with nonzero $H^i(L)$. Since $W_i\cap V_0$ is closed in the affine $V_0$, the defining function lifts from its coordinate-ring quotient to a function on $V_0$; localizing the latter gives an affine $V\subset U_i$ with $H^i(V\cap W_i,L)\ne0$. In the bounded spectral sequence $H^a(V\cap W_i,\mathcal H^t(Q))\Rightarrow H^{a+t}(V,Q)$, [F1] gives $a\le i$ and maximality of $b$ gives $t\le b$. The nonzero term $(i,b)$ has no incoming differential, since those would start at a larger $t$, and no outgoing differential, since those would end at a larger $a$. It is the sole term in its total degree $i+b>0$, contradicting step 1.2. Hence $Q=0$, completing the descending dimension induction and the converse. [F1, F2, step 1.1, step 1.2, induction]

3.1 Let $P\in{}^pD^{\le0}_c(X)$. For every affine open $V\subset Y$, its inverse image under $u$ is affine. Derived composition and [F1] give $H^q(V,Ru_*P)=H^q(u^{-1}V,P)=0$ for $q>0$. The just-proved characterization puts $Ru_*P$ in the upper perverse aisle. For $P$ in the lower aisle, apply this to $DP$ and dualize by [F2] to obtain the claimed lower-aisle preservation by $Ru_!$. All zero and empty cases follow from the same zero triangles. [F1, F2, step 2.1, discharge-induction] ∎

## Proof contract boundary

The local-system detector replaces the arithmetic purity step in BBD 4.1.7 by the explicit relative cohomology of a complex oriented ball. The relative theorem is therefore a complete local deduction from the declared absolute Artin and constructible formalism suppliers. It does not require a separate Stein local-characterization theorem, nor a claim that ordinary direct image commutes with arbitrary nonproper fiber restriction. The unfinished Morse construction remains upstream in [F1].
