---
id: lem-picard-restriction-to-generic-fibre-exact-for-abelian-scheme
kind: lemma
title: "Picard restriction for an abelian scheme over a smooth model"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-abelian-scheme
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-cartier-weil-isomorphism-locally-factorial
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-proper-morphism-closed-image
  - thm-flat-going-down
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Bruno Kahn, Démonstration géométrique du théorème de Lang–Néron"
      url: "https://webusers.imj-prg.fr/~bruno.kahn/preprints/Lang-Neron.pdf"
      locator: "Lemma 1, printed pp. 1–2; the divisor argument and split exact sequence below are supplied locally."
---

## Statement

Assume AC. Let $k$ be an algebraically closed field, let $X$ be a smooth integral finite-type $k$-scheme with function field $K$, and let $p:Y\to X$ be an abelian scheme with identity section $e:X\to Y$ and generic fibre $A=Y_K$. Restriction to the generic fibre and pullback along $p$ give a split exact sequence of abelian groups
$$0\longrightarrow\operatorname{Pic}(X)\xrightarrow{p^*}\operatorname{Pic}(Y)\xrightarrow{\operatorname{res}}\operatorname{Pic}(A)\longrightarrow0.$$
The left inverse to $p^*$ is $e^*$. In particular the restriction of $e^*$ to $\ker(\operatorname{res})$ is the inverse of $p^*$. This assertion assumes the abelian-scheme model; it does not construct one or assert finite generation of its Picard or Néron–Severi groups.

## Facts & Assumptions

**Given:** AC, $k$, $X$, $K$, $p:Y\to X$, $e$ and $A$ as in the Statement; write $g$ for the relative dimension of $p$.

[F1] An abelian scheme is smooth and proper with an identity section and geometrically integral fibres of constant dimension $g$. Proper morphisms are closed. [[def-abelian-scheme]] [[thm-proper-morphism-closed-image]]

[F2] A smooth finite-type scheme over a field is locally factorial. On a locally factorial Noetherian integral scheme, Cartier and Weil divisors agree and the resulting map $\operatorname{Pic}\to\operatorname{Cl}$ is an isomorphism. A line bundle and a nonzero rational section are the line bundle of the associated Cartier divisor. [[thm-nonaffine-regular-local-ring-is-ufd]] [[thm-cartier-weil-isomorphism-locally-factorial]] [[thm-line-bundle-rational-section-cartier-divisor]]

[F3] A flat ring homomorphism satisfies going down for prime ideals. [[thm-flat-going-down]]

[A1] AC is assumed as required by [F2] and [F3]. [[def-axiom-of-choice]]

## Proof

1.1 Smoothness of $p$ and of $X/k$ makes $Y/k$ smooth. The map $p$ is flat, and the generic fibre is geometrically integral by [F1]. Every irreducible component of $Y$ dominates $X$: on an affine chart, flatness sends a minimal prime of the source to a minimal prime of the integral base by going-down [F3]. The unique generic-fibre component therefore gives one component of $Y$. Smoothness over a field makes $Y$ reduced, so $Y$ is integral. The schemes $X$, $Y$ and the generic fibre $A$ are Noetherian, integral and smooth over fields; by [F2] they are locally factorial and their Picard groups are their Weil divisor class groups. [A1, F1, F2, F3, given, algebra]

2.1 Let $\mathcal L$ be a line bundle on $A$. Choose one nonzero rational section and write its divisor as a finite sum of prime divisors $\sum_i n_iD_i$ using [F2]. For each $D_i$, its closure $\overline D_i$ in $Y$ has codimension one: on an affine chart meeting the generic point, the generic fibre is localization by the nonzero elements of the base ring, and every prime strictly below a prime disjoint from that multiplicative set is also disjoint from it. Thus localization preserves its height. The finite sum $D=\sum_i n_i\overline D_i$ is a Weil divisor on $Y$, hence Cartier by [F2]. Its line bundle restricts to $\mathcal L$ on $A$, since the restricted divisor is $\operatorname{div}(\mathcal L)$ and [F2] identifies the associated line bundle. Therefore $\operatorname{res}$ is surjective. [F2, step 1.1, given, construct, algebra]

2.2 Let $D$ be a prime divisor of $Y$ not meeting the generic fibre. Its image $Z=p(D)$ is closed and irreducible by properness [F1], and is a proper subset of $X$; equip $Z$ with the reduced induced scheme structure. Let $\eta_D$ be its generic point and $\eta_Z$ its image. Choose affine neighborhoods $\operatorname{Spec}B\subseteq Y$ and $\operatorname{Spec}R\subseteq X$ with the first mapping into the second. The prime $P\subset B$ for $\eta_D$ has height one, while its contraction $Q=P\cap R$ is nonzero because $D$ is vertical. The flat map $R\to B$ satisfies going down by [F3], so any chain below $Q$ lifts to a chain below $P$; hence $\operatorname{ht}(Q)\le1$. Thus $\operatorname{ht}(Q)=1$ and $Z$ is a prime divisor on $X$. If $X$ has dimension zero, no such $Q$ exists. [F1, F3, step 1.1, given, algebra]

3.1 The closed subscheme $Y_Z=Y\times_X Z$ is smooth over the reduced integral scheme $Z$ and has geometrically integral fibres. It is integral: smoothness over a reduced base makes it reduced; flatness forces every irreducible component to dominate $Z$; and the generic fibre is integral, so there is only one component. It contains $D$ as a closed irreducible subset. Its unique irreducible component is a proper closed subset of $Y$, because $Z$ is proper in $X$. Since $D$ has codimension one, there is no strictly larger irreducible proper closed subset containing it; hence $D$ is the whole underlying prime divisor of $Y_Z$. By [F2], $Z$ is Cartier on $X$, and its pullback is the Cartier divisor $Y_Z$ on $Y$. At the generic point of $Y_Z$ that pullback has multiplicity one: locally a uniformizer of the DVR $\mathcal O_{X,\eta_Z}$ cuts out the geometrically integral, hence reduced, smooth fibre. Therefore the Weil pullback of $[Z]$ is exactly $[D]$. Every vertical Weil divisor is consequently the pullback of a Weil divisor on $X$. [F1, F2, F3, step 2.2, algebra]

4.1 Suppose $\mathcal M\in\operatorname{Pic}(Y)$ restricts trivially to $A$. A trivializing nonzero rational section on $A$ is also a rational section on the integral scheme $Y$, whose divisor has no horizontal component. By steps 2.2–3.1, its divisor is $p^*B$ for a Weil divisor $B$ on $X$; [F2] turns $B$ into a Cartier divisor and identifies $\mathcal M$ with the pullback of its associated line bundle. Conversely $p^*\operatorname{Pic}(X)$ restricts trivially to the point $\operatorname{Spec}K$, so this proves $\ker(\operatorname{res})=p^*\operatorname{Pic}(X)$. The identity section satisfies $e^*p^*=\operatorname{id}$, so $p^*$ is injective and the sequence splits. Explicitly, for a line bundle on $A$ choose an extension $\mathcal L$ from step 2.1 and send it to $\mathcal L\otimes p^*(e^*\mathcal L)^{-1}$; the kernel calculation makes this independent of the extension and makes it a homomorphic right inverse to restriction. [F1, F2, step 2.1, step 3.1, given, algebra] ∎
