---
id: lem-conditional-curve-fibration-finite-cover-effacement
kind: lemma
title: "Conditional finite-cover effacement for affine curve fibrations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-smooth-projective-curves-have-local-finite-etale-multisections
  - lem-finite-locally-constant-etale-sheaves-represent-finite-etale-covers
  - thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
justified_by: []
proof_strategy: direct
axiom_use: "AC/DC are assumed for finite étale covers, torsor choices and derived functors."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 4, Exposé XI, section 4, Lemma 4.5 and Variant 4.6"
      url: "https://grothendiecksga.com/read/sga4/en/XI-4.html"
      locator: "The Leray effacement pattern is adapted below to explicit finite étale and cohomological hypotheses."
verification: {}
---

## Statement

Assume AC and DC. Let $k$ be algebraically closed, $\ell\ne\operatorname{char}k$, $r\geq1$, and $A=\mathbb Z/\ell^r\mathbb Z$. Let $f:X\to S$ be the complement of a finite étale surjective boundary in a smooth projective curve with geometrically connected nonempty fibres, where $S$ is a finite-type $k$-scheme. Fix $x\in X(k)$ over $s\in S(k)$. Suppose that, after a Zariski shrink about $s$, all of the following hold:

1. For every finite étale base change and every cover of its total curve obtained as a finite fibre product of $A$-torsors, including the empty product, formation of $R^1$ with coefficients $\underline A$ commutes with geometric base change, and $R^2=0$; for such covers with geometrically connected fibres, $R^0=\underline A$.
2. $R^1f_*\underline A$ is finite locally constant and each geometric fibre is free of finite rank over $A$.
3. For every open $W\subseteq S$ containing $s$, every finite étale scheme $S'\to W$, and every class in $H^2(S',\underline A)$, there is an open $W'\subseteq S'$ containing the whole fibre over $s$ and a finite étale surjection of $W'$ that kills the restricted class.

Then every class in $H^2(X,\underline A)$ becomes zero after a finite étale surjection of $X_V$ for some open neighborhood $V$ of $s$. The hypotheses are conditional: this lemma does not establish the relative $R^1$, $R^2$, base-effacement or boundary calculations.

## Facts & Assumptions

**Given:** The curve fibration, point, coefficient ring and three explicit hypotheses in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] A smooth projective curve family has a finite étale multisection through the specified open point after shrinking the base. [[lem-smooth-projective-curves-have-local-finite-etale-multisections]]

[F2] Finite locally constant étale sheaves of sets are represented by finite étale covers. [[lem-finite-locally-constant-etale-sheaves-represent-finite-etale-covers]]

[F3] Grothendieck abelian categories have injective resolutions under AC. [[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]

## Proof

**Proof technique:** lift a basis of fibre torsors using a section, then use the two-row Leray filtration.

1.1 Shrink about $s$ as allowed in the hypotheses. By [F1] there is a finite étale surjection $S_1\to S$ on a further neighborhood such that $X_1=X\times_S S_1$ has a section. By [F2], after a further finite étale surjection and treating its finitely many connected components separately, the finite locally constant module $R^1f_{1*}\underline A$ becomes constant and free with a chosen basis. Denote the resulting base again by $S_1$. The composite $X_1\to X$ is finite étale surjective over the chosen neighborhood. [A1, F1, F2, given, choose, construct, algebra]

2.1 For $f_1:X_1\to S_1$, the injective resolutions in [F3] give the functorial Leray spectral sequence: inverse image is exact, so direct image preserves injectives, and composition computes global sections. Its five-term sequence contains $H^1(X_1,A)\to H^0(S_1,R^1f_{1*}A)\to H^2(S_1,A)\to H^2(X_1,A)$. The section makes the last map injective; hence each basis vector lifts to an $A$-torsor on $X_1$. Form their fibre product $T\to X_1$, a finite étale surjection. On each geometric fibre, the basis identifies the corresponding characters of its étale fundamental group; their joint map to $A^m$ is surjective, since every proper subgroup of the finite module $A^m$ is annihilated by a nonzero character. Thus the geometric fibres of $T\to S_1$ are connected, and every basis class restricts to zero on $T$. [A1, F3, step 1.1, choose, construct, algebra]

3.1 By the given base-change hypothesis, the morphism $R^1f_{1*}A\to R^1(f_1T)_*A$ is zero: its geometric stalks kill the basis. The degree-two direct images vanish for both maps, and the new degree-zero direct image is $\underline A$ because its geometric fibres are connected. Functoriality of the degree-two Leray filtration therefore puts the pullback of a given $\alpha\in H^2(X_1,A)$ in the image of $H^2(S_1,A)$. By the third hypothesis choose an open $W_1\subset S_1$ containing the entire fibre over $s$ and a finite étale surjection of $W_1$ killing a preimage. The image in $S$ of the closed complement $S_1\setminus W_1$ is closed because $S_1\to S$ is finite, and misses $s$. Shrink $S$ away from it; the finite étale base change $S_1$ is then contained in $W_1$. The resulting composite finite étale surjection of $X$ over that neighborhood kills $\alpha$. For rank zero take $T=X_1$; the same filtration argument applies. [A1, F3, step 2.1, given, choose, construct, algebra] ∎
