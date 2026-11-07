---
id: lem-quotient-class-formation-primary-invariants
kind: lemma
title: Primary invariants of a quotient of a class formation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-class-formation
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
proof_strategy: direct
axiom_use: AC and DC are explicit for the supplied continuous Hochschild–Serre cochain convention and compact profinite constructions.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed."
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Chapter I §1, Generalization, printed p.25, and §4 Proposition 4.2, printed p.50; the closed-subgroup and exact-image arguments are supplied below."
verification: {}
---

## Statement

Assume AC and DC. Let $(G,C,(\operatorname{inv}_U)_U)$ be a class formation, let $H\trianglelefteq G$ be closed, and set $\bar G=G/H$. For each open subgroup $U$ of $G$ containing $H$, put $\bar U=U/H$ and define
$$D_U=\{a\in\mathbb Q/\mathbb Z:[U:V]a=0\text{ for some open }V\text{ with }H\subseteq V\subseteq U\}.$$
Then $H^1(\bar U,C^H)=0$, and the actual degree-two inflation followed by $\operatorname{inv}_U$ is an injection with image exactly $D_U$. Restriction from $\bar U$ to $\bar V$ multiplies this invariant by $[U:V]$. If $V\trianglelefteq U$ is open and contains $H$, the finite relative group $H^2(U/V,C^V)$ is identified by inflation and $\operatorname{inv}_U$ with $[U:V]^{-1}\mathbb Z/\mathbb Z$.

Let $P$ be the set of primes whose powers divide the supernatural order of $G/H$ without bound. For every open $U\supseteq H$ and every $\ell\in P$, the invariant image contains all of $(\mathbb Q/\mathbb Z)(\ell)$. Outside $P$ it may be bounded or zero. These statements use the actual natural inflation and restriction maps and do not assert a full class formation when $P$ omits primes.

## Facts & Assumptions

**Given:** The class formation, closed normal subgroup, and explicit AC and DC in the Statement.

[A1] AC and DC are assumed for the cited continuous cohomology construction. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] In a class formation, $H^1(V,C)=0$ and $\operatorname{inv}_V$ identifies $H^2(V,C)$ with $\mathbb Q/\mathbb Z$ for each open $V$, with restriction multiplying invariants by the index. [[def-class-formation]]

[F2] The continuous Hochschild–Serre sequence for a closed normal subgroup supplies the natural degree-one injection and degree-two inflation injection with restriction-kernel image when the subgroup's first cohomology vanishes. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

## Proof

**Proof technique:** finite-quotient cochains and the actual inflation–restriction maps.

1.1 Let $H$ be any closed subgroup of a profinite group $U$ and let $C$ be a discrete continuous module. Restriction identifies $H^r(H,C)$ with the filtered limit of $H^r(V,C)$ over open $V\supseteq H$. A normalized continuous cochain on compact $H^r$ has finite image and factors through a finite quotient. Choose an open normal $N\trianglelefteq U$ fixing all its values and small enough that it factors through $(H/(H\cap N))^r$. The isomorphism $HN/N\cong H/(H\cap N)$ extends the cochain to $HN$ with values in $C^N$. A cocycle equation valid on the finite quotient then holds on $HN$. If a restricted cocycle becomes a coboundary on $H$, extend a finite-image primitive in the same way and shrink $N$ until the equality holds on the finite quotient; it is then a coboundary at a later open stage. This proves both surjectivity and injectivity of the colimit map, including degree zero. [A1, given, choose, construct]

2.1 By [F1], $H^1(V,C)=0$ for every open $V$ containing $H$, so step 1.1 gives $H^1(H,C)=0$. For each open $U\supseteq H$, [F2] then injects $H^1(U/H,C^H)$ into $H^1(U,C)=0$ and injects $H^2(U/H,C^H)$ into $H^2(U,C)$ with image the restriction kernel to $H$. [F1, F2, step 1.1, algebra]

3.1 By step 1.1, a class of $H^2(U,C)$ restricts to zero on $H$ exactly when its restriction vanishes on some open $V$ between $H$ and $U$. By [F1] the latter restriction multiplies its invariant by $[U:V]$. Thus step 2.1 identifies the quotient's invariant image exactly with $D_U$. This construction uses the actual inflation and invariant, and naturality of restriction proves the asserted index scaling. [F1, F2, step 1.1, step 2.1, algebra]

4.1 The set $D_U$ is a subgroup: classes killed on $V$ and $W$ are both killed after restriction to their open intersection, which contains $H$. Its $\ell$-primary part is all of $(\mathbb Q/\mathbb Z)(\ell)$ exactly when the $\ell$-valuations of $[U:V]$ are unbounded. The indices measured in $G/H$ differ from those in $U/H$ by the fixed finite factor $[G:U]$, so this condition is exactly $\ell\in P$ and is independent of $U$. For other primes the image is allowed to be bounded or zero. [step 3.1, algebra]

5.1 Let $V\trianglelefteq U$ be open and contain $H$. By [F1] and [F2], inflation identifies $H^2(U/V,C^V)$ with the kernel of $H^2(U,C)\to H^2(V,C)$, hence with $[U:V]^{-1}\mathbb Z/\mathbb Z$ under $\operatorname{inv}_U$. Since $(C^H)^{V/H}=C^V$ and $(U/H)/(V/H)=U/V$, this is exactly the finite relative invariant for the quotient. Steps 2.1–4.1 give all remaining asserted primary properties. If $G/H$ is trivial then every $D_U=0$ and $P=\varnothing$, so the same formula applies. [F1, F2, step 2.1, step 3.1, step 4.1, algebra] ∎
