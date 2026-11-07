---
id: lem-finite-local-character-extension-obstruction-under-choice
kind: lemma
title: "Finite local character extension and its local-power obstruction under Choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - lem-global-idele-class-norm-one-is-compact
  - thm-product-formula-for-number-fields
  - thm-finiteness-of-the-number-field-class-group
  - thm-local-valuation-ring-compact-open
  - thm-tychonoff
  - thm-global-class-field-existence-number-field
  - thm-global-artin-reciprocity-and-norm-index
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, Chapter VIII"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §2, printed p. 232, Theorem 2.4: extension of local characters and its order issue. The exact local-power kernel criterion below is derived locally, not asserted by that source."
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $K$ be a number field, $S$ a finite set of its places, $m\ge1$, and for each $v\in S$ let $\chi_v:K_v^\times\to\mu_m$ be a continuous character. Put
$$P(m,S)=\{a\in K^\times:a\in(K_v^\times)^m\text{ for every }v\notin S\}.$$
There is a continuous character $\chi:C_K=\mathbb A_K^\times/K^\times\to\mu_m$ whose restriction to each $K_v^\times$ is $\chi_v$ if and only if
$$\prod_{v\in S}\chi_v(a)=1\qquad(a\in P(m,S)).$$
The image of such a character is finite, and global class-field theory realizes it as a character of a finite abelian Galois extension. No classification of the $2$-primary obstruction is asserted.

## Facts & Assumptions

**Given:** AC, Countable Choice and DC, and the number field, finite set, exponent and local characters in the Statement.

[F1] Idèles form the restricted product of local multiplicative groups, and the idèle-class group has the quotient topology. The product formula makes every principal idèle have absolute norm one. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]] [[thm-product-formula-for-number-fields]]

[F2] The norm-one idèle-class group is compact; the ideal class group of a number field is finite. [[lem-global-idele-class-norm-one-is-compact]] [[thm-finiteness-of-the-number-field-class-group]]

[F3] Every finite-place unit group is compact and its principal-unit congruence subgroups are open. Its residue quotients are finite and those congruence subgroups form a neighborhood basis by the valuation topology. Arbitrary products of compact spaces are compact under AC. [[thm-local-valuation-ring-compact-open]] [[thm-tychonoff]]

[F4] Global class-field existence realizes an open finite-index idèle-class subgroup as a norm subgroup, and global Artin reciprocity identifies the corresponding quotient with the Galois group. [[thm-global-class-field-existence-number-field]] [[thm-global-artin-reciprocity-and-norm-index]]

[A1] The displayed choice hypotheses are those of the compactness and global class-field suppliers. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 For a finite place $v$, write $e=v(m)$. If $v(y-1)>2e$, Newton iteration for $X^m-y$ starting at $1$ stays in the unit group: the derivative at each iterate has valuation $e$, the correction has valuation greater than $e$, and the new error valuation is at least twice the previous error valuation minus $2e$. Completeness gives an $m$th root. Thus the $m$th powers contain an open unit neighborhood. By [F3] the unit group is compact, so its quotient by this open subgroup is finite; the valuation quotient is $\mathbb Z/m\mathbb Z$. At a real place the quotient by $m$th powers has at most two elements, and at a complex place it is trivial. Therefore $T=\prod_{v\in S}K_v^\times/(K_v^\times)^m$ is finite. [A1, F3, given, construct, algebra]

2.1 The norm map on $C_K$ has kernel $C_K^1$, compact by [F2]. Scaling at one archimedean place gives a continuous section of its surjection to $\mathbb R_{>0}$, so $C_K\cong C_K^1\times\mathbb R_{>0}$ as topological groups. The latter factor is $m$-divisible, and $(C_K^1)^m$ is compact as a continuous image. Hence $C_K^m$ is closed and $Q=C_K/C_K^m$ is a compact Hausdorff abelian group of exponent dividing $m$. [F1, F2, step 1.1, given, construct, algebra]

3.1 Let $U=\prod_{v<\infty}\mathcal O_v^\times$. It is compact by [F3], and its image $U'$ in $Q$ is a closed subgroup. It has finite index: finite ideal-class representatives reduce all finite valuations, and the archimedean positive-real and complex factors are $m$-divisible, leaving only finitely many real signs. A closed finite-index subgroup is open. The finite residue quotients and congruence-neighborhood basis in [F3] make $U$ profinite: the natural map to their inverse limit is injective and has dense image, while compactness makes its image closed. Its quotient $U'$ has finite quotients separating points: for a closed kernel $J$ and $u\notin J$, a finite-index open subgroup $N$ of $U$ can be chosen with $uN\cap J=\varnothing$, so the finite quotient by $JN$ separates the image of $u$. Thus for any finite subgroup $H\le Q$, intersect finitely many open subgroups of $U'$ to obtain an open subgroup $O\le U'$ disjoint from $H\setminus\{1\}$. Then $O$ is open in $Q$, $Q/O$ is finite, and $H$ injects into it. [A1, F2, F3, step 2.1, construct, algebra]

4.1 Map $T$ to $Q$ by placing its local factors at $S$ and $1$ elsewhere. Its kernel consists exactly of the local $m$-power classes of elements of $P(m,S)$. If $a\in P(m,S)$, choose an $m$th root of $a$ at every place outside $S$. Outside finitely many places $a$ is a unit, and every such root is a unit, so these roots form an idèle and the $S$-tuple of $a$ is zero in $Q$. Conversely, if an $S$-tuple $t$ maps to zero, then $t=a b^m$ for $a\in K^\times$ and an idèle $b$. At every place outside $S$, $a$ is an $m$th power; at each place in $S$, $t$ and $a$ have the same local power class. This proves the kernel description without asserting that $P(m,S)/K^{\times m}$ injects into $T$. [A1, F1, step 1.1, step 2.1, step 3.1, given, choose, algebra]

5.1 The product of the local characters gives a character $\lambda:T\to\mu_m$. The stated condition is exactly that it annihilate the kernel in step 4.1, so it descends to a character of the finite subgroup $H=\operatorname{im}(T\to Q)$. By step 3.1, embed $H$ in a finite quotient $B=Q/O$. A character of a subgroup of a finite abelian group of exponent dividing $m$ extends to $B$: adjoining one element $b$, let $k$ be the order of its coset modulo the current subgroup. Then $k\mid m$, and if $u$ is the value assigned to $kb$, $u^{m/k}=1$. The map $z\mapsto z^k$ on $\mu_m$ has image $\mu_{m/k}$, so choose a root $z$ of $u$ and assign $b\mapsto z$. Iterating finitely extends the character. Composing $C_K\to Q\to B\to\mu_m$ gives a continuous global character with all prescribed local restrictions. Conversely, its value on every principal idèle is one, and the factors outside $S$ are one for $a\in P(m,S)$, giving the condition. [A1, step 3.1, step 4.1, given, construct, algebra]

6.1 The global character has finite image, hence its kernel is an open finite-index subgroup of $C_K$. By [F4] it is a norm subgroup of a finite abelian extension and reciprocity identifies the quotient with the extension's Galois group; the induced quotient character realizes the same idèle-class character. This does not assert its image has order exactly $m$. [F4, step 5.1, algebra] ∎
