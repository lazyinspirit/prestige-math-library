---
id: thm-holomorphic-germ-ring-is-a-ufd
kind: theorem
title: "The ring of holomorphic germs is a UFD"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unique-factorisation-domain, def-field-of-fractions, thm-polynomial-ring-over-a-field-is-a-ufd, lem-gauss-lemma-over-a-ufd, lem-prepared-factorizations-and-irreducibility, lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular, thm-weierstrass-preparation-theorem, thm-zero-order-factorization-holomorphic-function, prop-units-in-the-holomorphic-germ-ring, thm-identity-theorem-in-several-complex-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Theorem 6.4.2"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Theorem 4.5.6"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

For every integer $m\ge1$, the holomorphic germ ring $\mathcal O_{m,0}$ is a
unique factorisation domain.

## Facts & Assumptions

**Given:** A fixed dimension $m\ge1$.

[L1] A UFD is an integral domain in which every nonzero nonunit factors into irreducibles uniquely up to order and associates ([[def-unique-factorisation-domain]]).

[L2] If $R$ is a domain, its field of fractions is $\operatorname{Frac}(R)$, and for every field $F$ the polynomial ring $F[x]$ is a UFD ([[def-field-of-fractions]], [[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L3] Over a UFD, primitive products stay primitive and primitive irreducibility is the same over the coefficient ring and its field of fractions ([[lem-gauss-lemma-over-a-ufd]]).

[L4] Regular germs prepare to Weierstrass polynomials, and those polynomial factorizations correspond exactly to germ factorizations ([[thm-weierstrass-preparation-theorem]], [[lem-prepared-factorizations-and-irreducibility]]).

[L5] Every nonzero germ becomes regular after a linear coordinate change, and one-variable holomorphic germs factor by zero order ([[lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular]], [[thm-zero-order-factorization-holomorphic-function]]).

[L6] Units are exactly the nonvanishing germs ([[prop-units-in-the-holomorphic-germ-ring]]).

[L7] A holomorphic function on a connected neighbourhood that vanishes on a nonempty open subset vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 The proof is by induction on $m$. For $m=1$, every nonzero nonunit germ has the form $z_1^d u$ with $d\ge1$ and $u$ a unit by [L5]. Thus the only irreducible germs are the associates of $z_1$, and every factorization is determined uniquely by the zero order. So $\mathcal O_{1,0}$ is a UFD. [L1, L5, L6]

1.2 Assume $m>1$ and that $R:=\mathcal O_{m-1,0}$ is a UFD. Then $R$ is a domain by [L1], so its field of fractions $K=\operatorname{Frac}(R)$ exists by [L2], and $K[z_m]$ is a UFD by [L2]. Using [L3], every primitive polynomial in $R[z_m]$ is irreducible there exactly when it is irreducible in $K[z_m]$, and products of primitive polynomials remain primitive. Therefore every nonzero polynomial in $R[z_m]$ factors uniquely, up to order and associates, by first factoring in $K[z_m]$ and then clearing denominators. Hence $R[z_m]$ is a UFD. [L1, L2, L3]

2.1 Let $f\in\mathcal O_{m,0}$ be a nonzero nonunit. By [L5], after a complex-linear coordinate change $T$ the pulled-back germ $T^\ast f=f\circ T$ is regular in $z_m$. By [L4], write $$T^\ast f=uW$$ with $u$ a unit and $W\in R[z_m]$ a Weierstrass polynomial. Since $R[z_m]$ is a UFD by step 1.2, factor $$W=P_1\cdots P_s$$ into irreducible polynomials. The correspondence in [L4] turns this into an irreducible factorization of $T^\ast f$, and applying $T^{-1}$ gives an irreducible factorization of $f$. [step 1.2, L4, L5, L6]

3.1 For uniqueness, let $$f=q_1\cdots q_t$$ be any factorization of $f$ into irreducible germs. Applying $T^\ast$ gives a factorization of $T^\ast f$. Since $T^\ast f$ is regular, [L4] makes each $T^\ast q_j$ regular and gives prepared polynomials $Q_j\in R[z_m]$ whose product is $W$. Step 1.2 gives uniqueness of the factorization of $W$ in $R[z_m]$, so after reordering each $Q_j$ is associate to one of the $P_i$. Then [L4] makes the corresponding germs $T^\ast q_j$ associate to the prepared factor coming from $P_i$, and applying $T^{-1}$ returns uniqueness for the original factorization of $f$. [step 2.1, step 1.2, L4]

4.1 It remains to check that $\mathcal O_{m,0}$ is a domain. Suppose $ab=0$ as germs on a connected polydisc. If $a$ were nonzero, the set where $a\ne0$ would be a nonempty open subset, and on it $b=0$; [L7] would force $b=0$ on the whole polydisc. Thus $ab=0$ implies $a=0$ or $b=0$. For $m>1$, steps 2.1, 3.1, and 4.1 therefore give existence, uniqueness, and the domain property required by [L1]; together with the base case in step 1.1, this completes the induction. [L1, L7, step 1.1, step 2.1, step 3.1] ∎
