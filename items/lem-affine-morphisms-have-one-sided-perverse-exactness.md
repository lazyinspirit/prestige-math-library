---
id: lem-affine-morphisms-have-one-sided-perverse-exactness
kind: lemma
title: "Affine morphisms have one-sided perverse exactness"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-axiom-of-choice, lem-artin-affine-vanishing-for-constructible-perverse-sheaves,
       thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
       lem-analytic-constructible-sheaves-admit-coherent-six-operations,
       cor-noether-normalisation-module-finiteness,
       thm-affine-domain-dimension-transcendence-degree,
       def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-canonical-t-structure-on-a-derived-category]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "§4.1.1-4.1.8 (affine morphisms are t-exact on one side; the affine-open characterization of the upper perverse aisle)"
---

## Statement

Assume the inherited Axiom of Choice. For an affine morphism $u:X\to Y$ of complex algebraic varieties and finite-dimensional field coefficients, $Ru_*$ sends ${}^pD^{\le0}_c(X)$ into ${}^pD^{\le0}_c(Y)$ and $Ru_!$ sends ${}^pD^{\ge0}_c(X)$ into ${}^pD^{\ge0}_c(Y)$. More precisely a bounded constructible $K$ belongs to ${}^pD^{\le0}_c(Y)$ if and only if $H^q(V,K)=0$ for every affine Zariski open $V\subset Y$ and every $q>0$.

## Facts & Assumptions

**Given:** the affine morphism $u:X\to Y$, the bounded constructible complex or its coefficients, and the inherited choice assumption.

[F1] Absolute Artin vanishing, including the sharpening of the dimension bound to the dimension of the closure of the support, is [[lem-artin-affine-vanishing-for-constructible-perverse-sheaves]]. This is an indispensable prior supplier, not a conclusion assumed from the present relative statement.

[F2] Finite complex algebraic Whitney stratifications give finite dimension filtrations $F_i$ with smooth pure-dimensional layers $W_i=F_i\setminus F_{i-1}$ on which all ordinary cohomology sheaves are local systems ([[def-algebraically-constructible-complex-of-analytic-field-sheaves]] and [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]). The upper perverse support condition on an $i$-dimensional layer is ordinary cohomological degree at most $-i$, duality exchanges the upper and lower perverse aisles, $D Ru_*D=Ru_!$, ordinary restriction is exact, and support, Čech and bounded hypercohomology spectral sequences have their usual exact triangles ([[lem-analytic-constructible-sheaves-admit-coherent-six-operations]], [[def-canonical-t-structure-on-a-derived-category]]); the Axiom of Choice is assumed as in [[def-axiom-of-choice]].

[F3] A nonempty smooth irreducible affine complex variety of dimension $i$ has a finite map to affine $i$-space: Noether normalization gives algebraically independent $z_1,\dots,z_d$ with the coordinate ring module-finite over the polynomial ring ([[cor-noether-normalisation-module-finiteness]]) and the affine dimension theorem identifies $d=i$ as the transcendence degree of the function field ([[thm-affine-domain-dimension-transcendence-degree]]). Subtracting the coordinates of one chosen point makes their common zero fiber finite and nonempty.

## Proof

**Given:** the data and exact suppliers of the Statement. We first construct a top-degree detector for nonzero local systems.

1.1 Let $U$ be smooth irreducible affine of dimension $i\ge1$ and let $L$ be a nonzero finite-rank local system. By [F3] choose $i$ functions with finite nonempty common zero set $S$. Local complex orientation and local constancy identify $H_S^{2i}(U,L)$ with $\bigoplus_{s\in S}L_s$, which is nonzero, while [F1] gives $H^{2i}(U,L)=0$. The support long exact sequence therefore gives $H^{2i-1}(U\setminus S,L)\ne0$. Cover $U\setminus S$ by the $i$ principal opens $D(f_j)$. Every finite intersection is affine, so [F1] bounds its ordinary cohomology by $i$; the Čech index is at most $i-1$. In total degree $2i-1$ only the term $H^i(D(f_1\cdots f_i),L)$ can contribute, and nonvanishing of the total group forces it to be nonzero. For $i=0$ the detector is simply the nonzero stalk on an isolated point. [F1, F2, F3, construct]

1.2 The forward direction of the affine-open characterization is [F1], applied to each restriction. Conversely suppose all positive $H^q(V,K)$ vanish. Write $U_i=Y\setminus F_{i-1}$ and argue downwards in $i$ that the stalk degrees on $U_i$ obey the upper perverse support bound. Suppose the assertion is established on all larger-dimensional layers. On $U_i$ let $A=\tau_{\le-i}K$ and $Q=\tau_{>-i}K$. On higher-dimensional layers the induction hypothesis already gives the upper perverse stalk bound, preserved by ordinary truncation; on $W_i$ truncation makes the degree at most $-i$. These are exactly the upper perverse bounds for $A$ on $U_i$, without any claim that $U_i$ has dimension $i$. Thus on each affine $V\subset U_i$, [F1] and the triangle $A\to K\to Q$ give $H^q(V,Q)=0$ for $q>0$. All ordinary cohomology sheaves of $Q$ are supported on the closed smooth layer $W_i\subset U_i$ and are local systems there. [F1, F2, induction, base, ih]

2.1 If $Q$ is nonzero, let $b>-i$ be its largest nonzero cohomological degree and let $L=\mathcal H^b(Q)|_{W_i}$ be nonzero on a connected component. The finitely many smooth irreducible components of $W_i$ are disjoint and closed in $U_i$; remove the components where $L$ is zero and all but one nonzero component, and choose an affine open $V_0\subset U_i$ in the resulting open, meeting the retained component. Then $V_0\cap W_i$ is smooth affine and $L$ is a nonzero local system on it. Step 1.1 supplies a principal open of it with nonzero $H^i(L)$. Since $W_i\cap V_0$ is closed in the affine $V_0$, the defining function lifts from its coordinate-ring quotient to a function on $V_0$; localizing the latter gives an affine $V\subset U_i$ with $H^i(V\cap W_i,L)\ne0$. The closed embedding $e:V\cap W_i\hookrightarrow V$ has exact pushforward, and $Q|_V=e_*e^*Q|_V$ because all its cohomology is supported there. Thus $H^a(V,\mathcal H^t(Q))=H^a(V\cap W_i,\mathcal H^t(Q)|_{W_i})$. In the bounded spectral sequence $H^a(V\cap W_i,\mathcal H^t(Q)|_{W_i})\Rightarrow H^{a+t}(V,Q)$, [F1] gives $a\le i$ and maximality of $b$ gives $t\le b$. The nonzero term $(i,b)$ has no incoming differential, since those would start at a larger $t$, and no outgoing differential, since those would end at a larger $a$. It is the sole term in its total degree $i+b>0$, contradicting step 1.2. Hence $Q=0$, completing the descending dimension induction and the converse. [F1, F2, step 1.1, step 1.2, induction]

3.1 Let $P\in{}^pD^{\le0}_c(X)$. For every affine Zariski open $V\subset Y$ its inverse image under the affine morphism $u$ is affine, and derived composition with [F1] gives $H^q(V,Ru_*P)=H^q(u^{-1}V,P)=0$ for $q>0$; the characterization proved in step 2.1 therefore puts $Ru_*P$ in the upper perverse aisle. For $P$ in the lower aisle, apply this to $DP$ and dualize by [F2] to obtain the claimed lower-aisle preservation by $Ru_!$. All zero and empty cases follow from the same zero triangles. [F1, F2, step 2.1, algebra, discharge-induction] ∎

## Remarks

The local-system detector replaces the arithmetic-purity step in BBD 4.1.7-4.1.8 by the explicit relative cohomology of a complex-oriented ball, and the converse needs only the sharpened support-dimension form of absolute Artin vanishing. The relative theorem is therefore a complete local deduction from the declared absolute Artin and constructible-formalism suppliers; it does not require a separate Stein local-characterization theorem, nor a claim that ordinary direct image commutes with arbitrary nonproper fiber restriction.
