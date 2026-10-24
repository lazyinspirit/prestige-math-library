---
id: "lem-points-of-fibre-primes-over-point"
kind: "lemma"
title: "Points and topology of a fibre"
status: published
origin: "pipeline"
deps: ["thm-affine-fibre-coordinate-ring", "lem-fibre-product-open-restriction", "lem-localisation-spectrum-map-homeomorphism-onto-image", "thm-prime-spectrum-of-a-quotient-bijection"]
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
    - title: "Stacks 26.18.5; Vakil 10.3.B"
      url: "https://stacks.math.columbia.edu/tag/01JW"
proof_strategy: direct
---

## Statement

For $f:X\to S$ and $s\in S$, the projection $X_s\to X$ is a homeomorphism onto $f^{-1}(s)$ with the subspace topology and preserves the residue field at every point. In compatible affine charts $A\to B$, $s=\mathfrak p$, its points correspond exactly to primes $\mathfrak q\subset B$ contracting to $\mathfrak p$; no extra embedding choice occurs. Also $X\times_S\operatorname{Spec}\mathcal O_{S,s}\to X$ is a homeomorphism onto the inverse image of the set of generalizations of $s$.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Let $A\to B$ be a ring map, $\mathfrak p\in\operatorname{Spec}A$, and $M=A\setminus\mathfrak p$, acting on $B$ through the ring map. The fibre over $\mathfrak p$ is canonically $$\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))\cong\operatorname{Spec}(M^{-1}B/\mathfrak pM^{-1}B).$$ The residue field is $\kappa(\mathfrak p)=A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}$. No reduction of the tensor ring is taken. ([[thm-affine-fibre-coordinate-ring]])

[F2] Suppose $P=X\times_S Y$ exists, with projections $p,q$. If opens $V\subseteq X$, $W\subseteq Y$ map into an open $U\subseteq S$, then the open subscheme $Q=p^{-1}(V)\cap q^{-1}(W)$ represents $V\times_U W$, and also $V\times_S W$. Independently, for $f:X\to S$ and an open $U\subseteq S$, the open subscheme $f^{-1}(U)$ represents $X\times_S U$. ([[lem-fibre-product-open-restriction]])

[F3] Let $R$ be a commutative ring, let $S\subseteq R$ be multiplicative, and let $\lambda:R\to S^{-1}R$ be the localisation map. Then contraction along $\lambda$ is a homeomorphism from $\operatorname{Spec}(S^{-1}R)$ onto the subspace $$ X:=\{\mathfrak p\in\operatorname{Spec}(R):\mathfrak p\cap S=\varnothing\}. $$ ([[lem-localisation-spectrum-map-homeomorphism-onto-image]])

[F4] Let $R$ be a commutative ring, let $I\trianglelefteq R$ be an ideal, and let $\pi:R\to R/I$ be the quotient map. Then contraction along $\pi$ induces an inclusion-preserving bijection $\operatorname{Spec}(R/I)\to V(I)$, sending $\mathfrak q$ to $\pi^{-1}(\mathfrak q)$. Its inverse sends a prime ideal $\mathfrak p\supseteq I$ to $\mathfrak p/I$. ([[thm-prime-spectrum-of-a-quotient-bijection]])

## Proof

1.1 On compatible affine charts put $M=A\setminus\mathfrak p$. F1 gives the fibre ring $D=M^{-1}B/\mathfrak pM^{-1}B$. By F3 and F4 its primes are exactly primes $\mathfrak q$ of $B$ disjoint from $M$ and containing $\mathfrak pB$. These two requirements say precisely $\mathfrak q\cap A=\mathfrak p$. Extension followed by quotient and contraction are inverse. [given, F1, F3, F4]

2.1 The basic open $D_D(\overline{b/m})$ corresponds to $D_B(b)\cap f^{-1}(\mathfrak p)$, since $m$ is already a unit. Such opens form a basis on both sides, proving the subspace topology assertion, not merely a bijection. Localizing $D$ at this prime and then taking its residue field gives $\operatorname{Frac}(B/\mathfrak q)$, the original residue field. [step 1.1, algebra]

3.1 F2 restricts the fibre to the same affine opens, so these identifications agree on overlaps by contraction and glue to the global homeomorphism. Empty affine fibres contribute no primes. Without the quotient by $\mathfrak p$, F3 identifies the local-base pullback with primes whose contractions are contained in $\mathfrak p$, exactly the generalizations of $s$. The same basic-open calculation and gluing prove the last assertion. This includes generic and closed points. [F2, F3, step 1.1, step 2.1] ∎
