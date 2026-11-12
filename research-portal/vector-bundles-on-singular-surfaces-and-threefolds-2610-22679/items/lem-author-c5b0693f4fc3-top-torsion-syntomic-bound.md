---
id: lem-author-c5b0693f4fc3-top-torsion-syntomic-bound
kind: lemma
title: Affine characteristic-p syntomic amplitude without regularity
status: published
domain: mathematics
deps:
  - thm-author-c5b0693f4fc3-top-torsion-em-syntomic
  - math:ex-vector-spaces-over-a-field-as-an-abelian-category
  - math:def-derived-category-of-an-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-quasi-isomorphism
  - math:thm-homology-factors-uniquely-through-the-homotopy-category
  - math:thm-the-cone-long-exact-sequence
dependency_roles:
  thm-author-c5b0693f4fc3-top-torsion-em-syntomic: mathematical-premise
  math:ex-vector-spaces-over-a-field-as-an-abelian-category: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-quasi-isomorphism: mathematical-premise
  math:thm-homology-factors-uniquely-through-the-homotopy-category: mathematical-premise
  math:thm-the-cone-long-exact-sequence: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
formulation_deps:
  - thm-author-c5b0693f4fc3-top-torsion-em-syntomic
  - math:ex-vector-spaces-over-a-field-as-an-abelian-category
  - math:def-derived-category-of-an-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
argument_deps:
  - thm-author-c5b0693f4fc3-top-torsion-em-syntomic
  - math:ex-vector-spaces-over-a-field-as-an-abelian-category
  - math:def-derived-category-of-an-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-quasi-isomorphism
  - math:thm-homology-factors-uniquely-through-the-homotopy-category
  - math:thm-the-cone-long-exact-sequence
---

## Statement
For every $\mathbb F_p$-algebra $A$ and $j\geq0$, $H^i(\mathbb F_p(j)_{\rm syn}(A))=0$ for $i>j+1$. In particular its degree-five group vanishes when $j=3$.

## Facts & Assumptions
[F1] Fix a prime $p$ and write $\mathbb F_p$ for the field with $p$ elements. [[thm-author-c5b0693f4fc3-top-torsion-em-syntomic]] supplies the affine syntomic complex, EM Lemma 4.16's finite filtration in $D(\mathbb F_p)$ for every $\mathbb F_p$-algebra, and the notation $L^a=L\Lambda^aL_{A/\mathbb F_p}$. Its specified simplicial models for these derived exterior powers are concentrated in nonpositive cochain degrees. The $A$-complexes $L^a$ are viewed as $\mathbb F_p$-complexes by restriction of scalars, as in that supplier. Only its affine filtration clause is used, not its motivic-comparison clause or the additional premises for that clause.

[F2] The category of $\mathbb F_p$-vector spaces is abelian by [[math:ex-vector-spaces-over-a-field-as-an-abelian-category]]. Cochains and the conversion $C^\sharp_n=C^{-n}$ to chains are as in [[math:def-cochain-complex-in-an-abelian-category]]. Here $D^{\leq n}$ is simply notation for complexes whose $H^i$ vanish for $i>n$; no t-structure axiom is needed. Use the cochain formulas $C[k]^n=C^{n+k}$, $d_{C[k]}=(-1)^kd_C$, and $H^i(C[k])=H^{i+k}(C)$ from [[math:def-derived-category-of-an-abelian-category]]. We use this supplier's shift and cone conventions only; the derived category containing the filtration is already supplied by [F1].

[F3] A finite filtration means $0=E_0\to E_1\to\cdots\to E_N=C$ with graded pieces $G_r$ in triangles $E_{r-1}\to E_r\to G_r\to E_{r-1}[1]$. A triangle here has the ordinary derived meaning: it is isomorphic to the image of a cochain cone triangle $X\xrightarrow{f}Y\to\operatorname{Cone}(f)\to X[1]$, where $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$ and $d(y,x)=(d_Yy+f(x),-d_Xx)$. This is the interpretation of the imported filtration, using the cone convention in [F2].

[F4] [[math:thm-the-cone-long-exact-sequence]] supplies exactness of $H^i(X)\to H^i(Y)\to H^i(\operatorname{Cone}(f))$ after the chain-to-cochain reindexing in [F2]. [[math:thm-homology-factors-uniquely-through-the-homotopy-category]] supplies functoriality and homotopy invariance of cohomology by the same reindexing. A quasi-isomorphism induces isomorphisms on all these groups by [[math:def-quasi-isomorphism]]. These are complex-level inputs, with no smallness or global derived Hom-set hypothesis.

## Proof
**Given:** Any $\mathbb F_p$-algebra $A$, with no smoothness, reducedness or finite-type hypothesis.

**Goal:** Establish the stated upper bound.

1.1 In [F1] the first block of graded pieces is $L^a[-a-1]$ for $0\leq a\leq j$ and the second block is $L^a[-a]$ for $0\leq a\leq j$. By [F2], for $L\in D^{\leq0}$ and $b\geq0$ one has $H^i(L[-b])=H^{i-b}(L)=0$ when $i>b$. The two blocks therefore have upper bounds $a+1$ and $a$, respectively, both at most $j+1$. Every listed piece lies in $D^{\leq j+1}$. [F1, F2]

2.1 To obtain exactness for a filtration triangle, start with a cone representative from [F3] and the exact three-term cohomology sequence in [F4]. Cohomology transports this sequence across the triangle isomorphism: evaluate a representative finite word of homotopy classes of cochain maps and formal inverses to quasi-isomorphisms by sending each map to its cohomology map and each inverse to the inverse cohomology map. By [F4] this respects homotopy, identities, composition and the inverse relations, so it respects the localization relations and sends inverse triangle maps to inverse linear maps. Thus $H^i(E_{r-1})\to H^i(E_r)\to H^i(G_r)$ is exact. This calculation uses only the supplied triangles and their representatives, not a construction of global derived Hom sets or an application of the size-conditional triangulation theorem. Starting with $E_0=0$, if $i>j+1$ and $H^i(E_{r-1})=0$, then step 1.1 gives $H^i(G_r)=0$, so this exactness forces $H^i(E_r)=0$. Finite induction reaches $E_N=\mathbb F_p(j)_{\rm syn}(A)$, proving the bound. For $j=3$, $5>4$, giving the asserted degree-five vanishing. [F1, F2, F3, F4, step 1.1] ∎
