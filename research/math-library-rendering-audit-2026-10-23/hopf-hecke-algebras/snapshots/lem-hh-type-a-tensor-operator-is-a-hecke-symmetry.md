---
id: lem-hh-type-a-tensor-operator-is-a-hecke-symmetry
kind: lemma
title: "The ordered-basis operator is a Hecke symmetry"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 1
deps: [def-hh-hecke-symmetry-and-ordered-basis-operator, def-hh-scalar-and-tensor-conventions, thm-tensor-product-basis-from-bases]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexei Davydov and Alexander Molev, A categorical approach to classical and quantum Schur–Weyl duality"
      url: "https://arxiv.org/pdf/1008.3739"
      locator: "§4.2, pp. 15–16, equations (4.2)–(4.3); the braid and quadratic checks below are supplied locally"
---

## Statement

For every $N\ge1$, the operator $T$ of [[def-hh-hecke-symmetry-and-ordered-basis-operator]] is invertible, satisfies $(T-qI)(T+q^{-1}I)=0$, and satisfies the adjacent braid identity $T_1T_2T_1=T_2T_1T_2$ on $V_N^{\otimes3}$. Its inverse is $T^{-1}=T-cI$, where $c=q-q^{-1}$. If $S=qT$ and $Q=q^2$, then $(S-QI)(S+I)=0$ and $S_1S_2S_1=S_2S_1S_2$. At $q=1$, $T$ specializes to the ordinary flip; at $q=-1$ its quadratic relation specializes to $T^2=I$, but the operator itself is not the ordinary flip.

## Facts & Assumptions

**Given:** $F=\mathbb Q(q)$, the ordered basis $e_1<\cdots<e_N$, the operator $T$ and $c=q-q^{-1}$ from [[def-hh-hecke-symmetry-and-ordered-basis-operator]].

[F1] The formula for $T$ on each ordered basis pair is the three-case formula in [[def-hh-hecke-symmetry-and-ordered-basis-operator]].

[F2] The elementary tensors $e_a\otimes e_b$ and $e_a\otimes e_b\otimes e_d$ form bases of the corresponding finite tensor powers, so equality on these vectors proves equality of linear maps ([[def-hh-scalar-and-tensor-conventions]], [[thm-tensor-product-basis-from-bases]]).

## Proof

**Given:** The data in [F1]–[F2].

1.1 For $a<b$, the span of $e_a\otimes e_b,e_b\otimes e_a$ is $T$-invariant and, in that ordered basis, $T$ has matrix $\begin{pmatrix}0&1\\1&c\end{pmatrix}$; hence $T^2=cT+I$ there. On $e_a\otimes e_a$ one has $T=qI$ and $q^2=cq+1$. These subspaces partition the basis of $V_N\otimes V_N$, so $T^2-cT-I=0$ on the whole space. Since $T(T-cI)=(T-cI)T=I$, it is invertible with inverse $T-cI$, and $T^2-cT-I=(T-qI)(T+q^{-1}I)$ by expansion. [given, F1, F2, algebra]

1.2 Write $abc$ for $e_a\otimes e_b\otimes e_c$. For distinct letters assume $a<b<c$, and for two letters assume $a<b$. Applying the three-case rule [F1] gives the same value for $T_1T_2T_1$ and $T_2T_1T_2$ in all thirteen weak-order patterns: $aaa\mapsto q^3aaa$; $aab\mapsto qbaa$; $aba\mapsto qaba+qc\,baa$; $baa\mapsto qaab+qc\,aba+q^2c\,baa$; $abb\mapsto qbba$; $bab\mapsto qbab+qc\,bba$; $bba\mapsto qabb+qc\,bab+q^2c\,bba$; $abc\mapsto cba$; $acb\mapsto bca+c\,cba$; $bac\mapsto cab+c\,cba$; $bca\mapsto acb+c\,bca+c\,cab+c^2cba$; $cab\mapsto bac+c\,bca+c\,cab+c^2cba$; and $cba\mapsto abc+c\,acb+c\,bac+c^2bca+c^2cab+(c+c^3)cba$. The first seven entries cover one or two distinct labels, and the last six cover all orders of three distinct labels. Thus the two braid composites agree on the tensor basis [F2] and hence on the whole tensor cube. [given, F1, F2, algebra]

2.1 The normalized quadratic relation in step 1.1 gives $(qT-q^2I)(qT+I)=q^2(T-qI)(T+q^{-1}I)=0$; multiplying the braid identity of step 1.2 by $q^3$ on both sides gives the braid identity for $S=qT$. At $q=1$, $c=0$ and each branch of the formula is the flip, including the equal-label branch. At $q=-1$, $c=0$ and the quadratic relation is $T^2=I$, while $T(e_a\otimes e_a)=-e_a\otimes e_a$, so it is not the ordinary flip. [step 1.1, step 1.2, algebra] ∎
