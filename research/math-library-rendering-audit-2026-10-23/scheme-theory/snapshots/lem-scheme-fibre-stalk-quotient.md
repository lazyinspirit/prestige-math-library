---
id: "lem-scheme-fibre-stalk-quotient"
kind: "lemma"
title: "Stalks of the scheme-theoretic fibre"
status: published
origin: "pipeline"
deps: ["lem-points-of-fibre-primes-over-point", "thm-affine-fibre-coordinate-ring", "thm-stalk-structure-sheaf-prime-localization"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 26.18.6"
      url: "https://stacks.math.columbia.edu/tag/01JW"
proof_strategy: direct
---

## Statement

For $f:X\to S$ and $x\in X$ with $s=f(x)$, use the corresponding point of $X_s$. There are canonical local-ring isomorphisms
$$\mathcal O_{X_s,x}\cong\mathcal O_{X,x}/\mathfrak m_s\mathcal O_{X,x}\cong\mathcal O_{X,x}\otimes_{\mathcal O_{S,s}}\kappa(s).$$

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] For $f:X\to S$ and $s\in S$, the projection $X_s\to X$ is a homeomorphism onto $f^{-1}(s)$ with the subspace topology and preserves the residue field at every point. In compatible affine charts $A\to B$, $s=\mathfrak p$, its points correspond exactly to primes $\mathfrak q\subset B$ contracting to $\mathfrak p$; no extra embedding choice occurs. Also $X\times_S\operatorname{Spec}\mathcal O_{S,s}\to X$ is a homeomorphism onto the inverse image of the set of generalizations of $s$. ([[lem-points-of-fibre-primes-over-point]])

[F2] Let $A\to B$ be a ring map, $\mathfrak p\in\operatorname{Spec}A$, and $M=A\setminus\mathfrak p$, acting on $B$ through the ring map. The fibre over $\mathfrak p$ is canonically $$\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))\cong\operatorname{Spec}(M^{-1}B/\mathfrak pM^{-1}B).$$ The residue field is $\kappa(\mathfrak p)=A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}$. No reduction of the tensor ring is taken. ([[thm-affine-fibre-coordinate-ring]])

[F3] For $\mathfrak p\in\operatorname{Spec}A$, there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$. ([[thm-stalk-structure-sheaf-prime-localization]])

## Proof

1.1 Choose compatible affine neighbourhoods $A\to B$, with primes $\mathfrak p,\mathfrak q$ representing $s,x$. F1 identifies the relevant fibre point, and F2 gives the ring $(A\setminus\mathfrak p)^{-1}B/\mathfrak p(A\setminus\mathfrak p)^{-1}B$. [given, F1, F2]

2.1 Localize at that point, using F3. All elements of $A\setminus\mathfrak p$ are already units in $B_{\mathfrak q}$, so the result is $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$. Under the stalk identifications, the extended ideal is exactly $\mathfrak m_s\mathcal O_{X,x}$. [F3, step 1.1]

3.1 For any ring map $R\to H$ and ideal $J$, the maps $h\otimes\overline r\mapsto hr\bmod JH$ and $h\bmod JH\mapsto h\otimes1$ are well-defined inverse ring maps $H\otimes_RR/J\cong H/JH$. Apply this with $R=\mathcal O_{S,s}$, $H=\mathcal O_{X,x}$ and $J=\mathfrak m_s$. The ideal is contained in $\mathfrak m_x$, so this stalk is nonzero; if there is no point over $s$, the assertion has no instance. Nilpotents are not removed, and $J=0$ gives the unchanged stalk. [step 2.1, algebra] ∎
