---
id: lem-block-induction-exists-under-centralizer-containment
kind: lemma
title: Centralizer containment makes block induction well-defined
deps: ["def-induced-block-from-a-subgroup", "lem-group-algebra-bimodule-is-induced-from-the-diagonal", "lem-relative-projectivity-mackey-intersections-for-finite-modules", "thm-block-bimodule-has-a-diagonal-vertex", "def-defect-group-and-numerical-defect-of-a-block", "prop-central-idempotents-under-the-brauer-homomorphism", "thm-modular-block-central-characters-correspond-to-blocks", "def-block-bimodule-for-the-double-group", "prop-normal-p-subgroups-act-trivially-on-simple-modules", "thm-krull-schmidt-for-finite-dimensional-kg-modules"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Proposition
        40.3(iii), §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
    - title: Martínez, Representation Theory of Finite Groups, Theorem 4.5, pp. 24–25
      url: https://www.uv.es/jomimar8/pdfs/course%20notes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let $b=kHe$ be a block of $kH$ with defect group $D$, where $k$ comes from a splitting $p$-modular system for finite $G$. If $C_G(D)\le H\le G$, then $b^G$ is defined. If also $H\le N_G(D)$, then on every $z\in Z(kG)$, and in particular on class sums,
$$\lambda_{b^G}(z)=\lambda_b(\operatorname{Br}_D(z)).$$
In this formula the Brauer projection lands in $kC_G(D)\subseteq kH$ and is central in $kH$.

## Facts & Assumptions

**Given:** The stated groups, field and nonzero block $b$.

[F1] [[def-induced-block-from-a-subgroup]] defines induction and proves that distinct block bimodules are nonisomorphic.

[F2] The group algebra's double action and its permutation-module realization are [[lem-group-algebra-bimodule-is-induced-from-the-diagonal]].

[F3] Mackey, vertex containment and finite summand extraction are [[lem-relative-projectivity-mackey-intersections-for-finite-modules]].

[F4] Diagonal block vertices are [[thm-block-bimodule-has-a-diagonal-vertex]].

[F5] The Brauer projection deletes coefficients outside $C_G(D)$ and is multiplicative on the fixed algebra, as used in [[prop-central-idempotents-under-the-brauer-homomorphism]].

[F6] [[thm-modular-block-central-characters-correspond-to-blocks]] gives $\lambda_b$ and each global $\lambda_B$. The block-center identification $\operatorname{End}_{H\times H}(b)=Z(b)$ and its unique nilpotent maximal ideal are supplied separately by [[def-block-bimodule-for-the-double-group]]. Since $\lambda_b$ is a unital map to $k$, its kernel is a maximal ideal and therefore is that unique nilpotent ideal.

[F7] Normal $p$-subgroups act trivially on simple modules by [[prop-normal-p-subgroups-act-trivially-on-simple-modules]].

[F8] Finite decompositions, cancellation and local endomorphism rings are [[thm-krull-schmidt-for-finite-dimensional-kg-modules]].

[F9] By [[def-defect-group-and-numerical-defect-of-a-block]], saying that $D$ is a defect group of $b$ means exactly that $\Delta D$ is a vertex of the block bimodule $b$.

## Proof

1.1 By F2, as an $H\times H$-module $M=kG$ splits over its double-coset orbits into $kH\oplus\bigoplus_{t\notin H}k[HtH]$. Each orbit module is induced from its point stabilizer: the map from stabilizer cosets to orbit points is a bijection, exactly as in F2. If an indecomposable summand of $k[HtH]$ had a vertex containing an $(H\times H)$-conjugate of $\Delta D$, F3 would place that diagonal conjugate in a conjugate of the point stabilizer. Equivalently $\Delta D$ would fix some point $t'\in HtH$, so $dt'=t'd$ for every $d\in D$. This puts $t'\in C_G(D)\le H$, impossible when $t\notin H$. The same argument proves the exclusion for any $p$-subgroup $Q\le H$ with $C_G(Q)\le H$, replacing $D$ by $Q$. [F2, F3, algebra]

2.1 The identity orbit $kH$ contains $b$ exactly once in its block decomposition, by F1. By F4, F9 and step 1.1 no other orbit contains an isomorphic summand. Thus $b$ has multiplicity one in $M$. Decomposing $M=kG$ into global blocks and applying F8 shows exactly one global block $B$ has $b$ as a restriction summand. By F1 this is $b^G$. This proves existence without the extra normalizer assumption. [F1, F4, F8, F9, step 1.1, algebra]

3.1 We identify its central character carefully. Use the decomposition $M=b\oplus X$, where the projection onto $b$ is $r(a)=e\pi_H(a)$ and $\pi_H$ deletes coefficients outside $H$. Decompose $X$ into indecomposables $X_j$ by F8; none is isomorphic to $b$ by step 2.1. Any composite $b\to X_j\to b$ is a nonunit in $\operatorname{End}_{H\times H}(b)$: if invertible it would split $b$ from $X_j$, forcing an isomorphism by indecomposability. This endomorphism ring is $Z(b)$, as in F6's block-center construction; its nonunits form the nilpotent ideal $J_b$. Therefore for $T\in\operatorname{End}_{H\times H}(M)$ the function $\chi(T)=\lambda_b(rT|_b)$ is a unital algebra homomorphism: in the corner of a composite, all cross-composites through the $X_j$ vanish modulo $J_b$, leaving the product of the two corners. [F6, F8, step 2.1, algebra]

4.1 Let $E_C$ be projection of $M$ onto a global block $C$. If $C\ne B$, decompose its restriction into indecomposables, none isomorphic to $b$, and step 3.1 gives $\chi(E_C)=0$. Since the projections sum to the identity, $\chi(E_B)=1$. For $z\in Z(kG)$ let $L_z$ be multiplication by $z$. On $B$, multiplication by $z-\lambda_B(z)$ is nilpotent by F6. Hence $(L_z-\lambda_B(z))E_B$ is nilpotent on $M$, and applying the field-valued homomorphism $\chi$ gives $\chi(L_z)=\lambda_B(z)$. But its corner on the explicit $b\subset kH$ is multiplication by $e\pi_H(z)$, because $\pi_H$ is an $H$-bimodule projection. Thus $$\lambda_B(z)=\lambda_b(\pi_H(z)).$$ Centrality of $z$ makes $\pi_H(z)\in Z(kH)$. [F6, step 2.1, step 3.1, algebra]

5.1 Now assume $H\le N_G(D)$, so $D\trianglelefteq H$. Let $S$ be a simple $b$-module, whose existence and scalar character are proved in F6. F7 says every $d\in D$ acts trivially on $S$. Expand $\pi_H(z)$ in group elements and partition $H\setminus C_G(D)$ into conjugation orbits of $D$. Each orbit has size a power of $p$ greater than one; its coefficients in $z$ are constant. All conjugate elements have the same operator on $S$, so its orbit sum acts as zero in characteristic $p$. The remaining terms are precisely $\operatorname{Br}_D(z)$ by F5. Since $H$ normalizes $D$, it preserves $C_G(D)$ and this projection is central in $kH$. Consequently the two central elements have the same scalar on $S$, giving $\lambda_b(\pi_H(z))=\lambda_b(\operatorname{Br}_D(z))$. Combine with step 4.1 to prove the formula. [F5, F6, F7, step 4.1, algebra]

6.1 For $D=1$, the containment assumption forces $H=G$ and all projections in the formula are identity. For $H=G$ induction is already the identity by F1. Empty off-identity double-coset families and empty noncentralizing orbit families simply contribute zero in the above sums. Every decomposition and orbit calculation is finite; no AC is added. The extra normalizer assumption was used only in step 5.1, so the formula has not been asserted outside its stated domain. [F1, step 1.1, step 2.1, step 5.1, algebra] ∎
