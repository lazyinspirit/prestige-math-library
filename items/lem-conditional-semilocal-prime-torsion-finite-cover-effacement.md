---
id: lem-conditional-semilocal-prime-torsion-finite-cover-effacement
kind: lemma
title: "Conditional semilocal finite-cover effacement of prime torsion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-pointed-smooth-affine-elementary-curve-fibration
  - lem-semilocal-etale-multisection-of-smooth-curve-family
  - lem-open-smooth-curve-r1-prime-to-characteristic-is-lisse
  - lem-affine-curve-prime-to-characteristic-torsion-cohomology
  - lem-prime-to-characteristic-kummer-torsor-compactifies-relatively
  - lem-conditional-open-curve-r2-vanishing-from-affine-line
  - lem-finite-locally-constant-etale-sheaves-represent-finite-etale-covers
  - thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
justified_by: []
proof_strategy: induction
axiom_use: "AC/DC are inherited from the geometric and curve-cohomology suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 4, Exposé XI, sections 3–4, good neighborhoods and cohomological effacement"
      url: "https://grothendiecksga.com/read/sga4/en/XI-4.html"
      locator: "The semilocal prime-torsion induction is reconstructed below, with affine-line degree-two vanishing explicitly assumed."
verification: {}
---

## Statement

Assume AC and DC. Let $k$ be algebraically closed, $\ell\ne\operatorname{char}k$, $r\geq1$, and $n=\ell^r$. Suppose that for every smooth finite-type $k$-scheme $T$, the projection $g:\mathbb A^1_T\to T$ has $R^2g_*\mu_n=0$. Let $X$ be a smooth integral affine finite-type $k$-scheme, $F\subset X(k)$ finite and nonempty, and $\alpha\in H^2_{\mathrm{et}}(X,\mu_n)$. Then there are an open neighborhood $U$ of $F$ and a finite étale surjection $Y\to U$ which kills $\alpha|_U$. The affine-line degree-two hypothesis is not proved here.

## Facts & Assumptions

**Given:** The algebraically closed field, prime power, affine-line degree-two hypothesis, smooth integral affine scheme, marked set and class in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] A smooth integral affine variety has an elementary curve fibration near a finite marked set. [[lem-pointed-smooth-affine-elementary-curve-fibration]]

[F2] A smooth projective curve family over an affine base admits a finite étale multisection on one affine neighborhood of all marked fibres. [[lem-semilocal-etale-multisection-of-smooth-curve-family]]

[F3] For an elementary curve fibration over a smooth base, the prime-to-characteristic $R^1$ is finite locally constant and commutes with smooth base change. [[lem-open-smooth-curve-r1-prime-to-characteristic-is-lisse]]

[F4] The first prime-power cohomology of a smooth affine geometric curve is a finite free module, and its degree-two cohomology vanishes. [[lem-affine-curve-prime-to-characteristic-torsion-cohomology]]

[F5] A fibrewise connected prime-to-characteristic Kummer torsor compactifies to a smooth projective curve family with finite étale boundary. [[lem-prime-to-characteristic-kummer-torsor-compactifies-relatively]]

[F6] Under the affine-line hypothesis, the degree-two direct image of an elementary curve fibration over a smooth base vanishes. [[lem-conditional-open-curve-r2-vanishing-from-affine-line]]

[F7] Finite locally constant sheaves of sets are represented by finite étale covers. [[lem-finite-locally-constant-etale-sheaves-represent-finite-etale-covers]]

[F8] Grothendieck abelian sheaf categories have injective resolutions under AC. [[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]

## Proof

**Proof technique:** semilocal induction on dimension using basis torsors and the Leray filtration.

1.1 Base case: if $\dim X=0$, the integral finite-type scheme over the algebraically closed field is $\operatorname{Spec}k$. Its positive étale cohomology with finite coefficients is zero, so the identity cover suffices. [given, base, algebra]

1.2 Induction hypothesis: let $d=\dim X\geq1$ and assume the claim in all smaller dimensions. By [F1], after replacing $X$ by an open neighborhood of $F$ there is an elementary curve fibration $f:X\to S$ with $S$ smooth affine of dimension $d-1$. The total space is a nonempty open of an integral scheme and hence connected; since $f$ is surjective, $S$ is connected and therefore integral. The finite set $f(F)$ consists of $k$-points. [A1, F1, ih, given, construct, algebra]

2.1 By [F2] shrink $S$ to one affine neighborhood of $f(F)$ and make a finite étale surjective base change $S_1\to S$ after which the curve has a section. By [F3] and [F4], its $R^1$ is finite locally constant with finite free geometric fibres: the boundary-residue exact sequence in [F3] identifies its geometric stalks with the fibre cohomology calculated in [F4]. After another finite étale surjection, using [F7], choose a basis on every connected component of $S_1$. Since $S_1$ is finite over an affine smooth base, each component is smooth integral affine of dimension $d-1$. Fix a primitive $n$th root in $k$ to identify $\mu_n$ with $A=\mathbb Z/n$. [A1, F2, F3, F4, F7, step 1.2, choose, construct, algebra]

3.1 Work on a connected component of $S_1$. The Leray spectral sequence exists by [F8]. The section splits $H^2(S_1,A)\to H^2(X_{S_1},A)$, so its five-term sequence lifts each basis vector of $R^1f_*A$ to an $A$-torsor on the open curve. Form their fibre product successively. On every geometric fibre the basis gives independent characters of the fundamental group, so each partial product is connected: the induced map to $A^m$ is onto because a proper subgroup has a nonzero annihilating character. By [F5], each successive torsor admits a smooth projective compactification with finite étale boundary; the final product $T\to X_{S_1}$ does too. [A1, F5, F8, step 2.1, choose, construct, algebra]

4.1 The product kills the chosen basis on every geometric fibre. The boundary-residue sequence of [F3], together with proper base change, identifies its $R^1$ stalks with geometric-fibre cohomology, so the pullback map $R^1f_*A\to R^1(fT)_*A$ is zero. The original and compactified-product families satisfy $R^2=0$ by [F6] and the given affine-line hypothesis. Their $R^0$ is $A$ because their fibres are connected. In the degree-two Leray filtration, the pullback of $\alpha$ to $T$ therefore comes from some $\beta\in H^2(S_1,A)$. [A1, F3, F6, F8, step 3.1, given, algebra]

5.1 The finite étale scheme $S_1$ has finitely many connected components, each integral affine of dimension $d-1$. On each component, apply the induction hypothesis to $\beta$ and to the finite nonempty set of all points above $f(F)$; each component maps surjectively to the connected base. This gives open neighborhoods of those points and finite étale covers killing $\beta$. Their union $W\subset S_1$ contains the whole fibre over $f(F)$. The image in $S$ of the closed complement $S_1\setminus W$ is closed because $S_1\to S$ is finite, and misses $f(F)$. Remove that image and pull the covers back: the resulting finite étale surjection of an open neighborhood of $F$ in $X$ kills $\alpha$. This completes the induction. [A1, step 4.1, discharge-induction, choose, construct, algebra] ∎
