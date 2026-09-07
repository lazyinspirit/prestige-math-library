---
id: "prop-yoneda-product-is-composition-in-the-derived-category"
kind: "proposition"
title: "Yoneda product is composition in the derived category"
deps: ["thm-ext-is-hom-in-the-derived-category", "thm-canonical-truncations-fit-a-distinguished-triangle", "thm-higher-yoneda-ext-agrees-with-derived-ext", "thm-long-exact-hom-sequences-of-a-distinguished-triangle"]
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/06XP"
      title: "13.27.4–13.27.6 and following composition paragraphs"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume DC, set-sized extension classes, and enough projectives with supplied resolutions, or dually enough injectives with supplied resolutions. Normalize the image of a short extension to be its connecting arrow in the cone convention of this page, and the image of a higher extension to be the shifted composite of the connecting arrows of its short exact pieces. With this normalization the Yoneda-class bijection is $\operatorname{YExt}^n(M,N)\cong\operatorname{Hom}_D(M,N[n])$ for $n\geq1$. If $\alpha\in\operatorname{YExt}^p(M,L)$ and $\beta\in\operatorname{YExt}^q(L,N)$, their splice corresponds to $\beta[p]\alpha:M\to N[p+q]$; degree-zero maps act by pullback and pushout, with identity units.

In particular, for $e:0\to A\to Z\to B\to0$ and $e':0\to B\xrightarrow u Z'\to C\to0$, the splice is zero in $\operatorname{Ext}^2(C,A)$ if and only if there is an extension $0\to A\to W\to Z'\to0$ whose pullback along $u$ is $e$. Equivalently there is a commutative diagram of these two rows, with vertical maps $1_A,Z\to W,u$, whose middle and right columns are $0\to Z\to W\to C\to0$ and $0\to B\to Z'\to C\to0$.

## Facts & Assumptions

**Given:** The Axiom of Dependent Choice, set-sized extension classes, and either enough projectives with supplied resolutions or enough injectives with supplied resolutions; objects and extension classes as in the statement.

[F1] Classical Ext identifies naturally with derived-category Hom via the chosen one-sided resolutions ([[thm-ext-is-hom-in-the-derived-category]]).

[F2] A short exact sequence of complexes gives a distinguished triangle via its cone-to-quotient map ([[thm-canonical-truncations-fit-a-distinguished-triangle]]).

[F4] Under DC, set-sized extension classes, and the stated one-sided resolution data, higher Yoneda Ext agrees with that classical Ext ([[thm-higher-yoneda-ext-agrees-with-derived-ext]]).

[F5] Both representable Hom sequences of a distinguished triangle are exact ([[thm-long-exact-hom-sequences-of-a-distinguished-triangle]]).

## Proof

1.1 For an extension $0\to N\to E_{n-1}\to\cdots\to E_0\to M\to0$, let $K_0=M$, $K_n=N$, and use its successive images to form short exact sequences $e_j:0\to K_{j+1}\to E_j\to K_j\to0$ for $0\le j<n$. Let $b_j:K_j\to K_{j+1}[1]$ be the connecting arrow from [F2]. Define $\Theta(E)=b_{n-1}[n-1]\cdots b_1[1]b_0$. Naturality of [F2] gives a commuting diagram of these arrows for any map of extensions fixing the endpoints, so $\Theta$ is constant on the generated Yoneda equivalence relation. The same naturality gives endpoint pullback and pushout compatibility. Direct sums of the short exact pieces give direct sums of their arrows; diagonal pullback and codiagonal pushout therefore make $\Theta$ additive for Baer addition. [F2, F4, algebra]

1.2 Here is the degree-one comparison explicitly in the projective lane. For $0\to N\xrightarrow{i}E\to M\to0$, lift $P_0\to M$ to $v:P_0\to E$ and write $v d_1=i c$ with $c:P_1\to N$. The cone of $i$ has $N$ in degree $-1$, $E$ in degree zero, and differential $i$. The map $P\to\operatorname{Cone}(i)$ with components $c,v$ in degrees $-1,0$ is a complex map over $M$. Projection to $N[1]$ gives the cocycle $c$. Thus the connecting arrow is the roof of $c$, and in particular is exactly the degree-one map used to define $\Theta$, without an unproved appeal to the abstract Ext/Hom isomorphism. In the injective lane extend $N\to I^0$ to $w:E\to I^0$ and factor $d w=t q$ through $q:E\to M$. The identity $p\simeq tq$ after mapping $N[1]\to I[1]$ is witnessed on the cone by the homotopy with component $w:E\to I^0$; hence the connecting arrow is represented by $t:M\to I[1]$. This explicit sign is part of our normalization. [F1, F2, F4, algebra]

2.1 We verify bijectivity without assuming that an arbitrary natural Ext/Hom identification preserves products. In the projective lane let $K_j=\Omega^jM$ in the supplied resolution. Exactness of [F5] for $K_1\to P_0\to M\to K_1[1]$ gives $\operatorname{Hom}_D(M,N[1])$ as the quotient of $\operatorname{Hom}(K_1,N)$ by restrictions from $P_0$, because positive Ext from the projective $P_0$ vanishes by [F1]. The quotient map sends $h$ to $h[1]b_0$. By the pushout construction in [F4], this is exactly $\Theta$ of the pushout extension. In degree $n$, that same construction identifies Yoneda classes with $\operatorname{Hom}(K_n,N)$ modulo restrictions from $P_{n-1}$: a resolution cocycle factors through $K_n$, and a coboundary is precisely such a restriction. The degree-one quotient for $0\to K_n\to P_{n-1}\to K_{n-1}\to0$, followed by the connecting isomorphisms $\operatorname{Hom}_D(K_j,N[r])\cong\operatorname{Hom}_D(K_{j-1},N[r+1])$ for $r>0$, identifies this quotient bijectively with $\operatorname{Hom}_D(M,N[n])$. Each isomorphism follows from [F5] and the vanishing of both adjacent positive Hom groups from $P_{j-1}$ by [F1]. Their composite is exactly the formula in step 1.1 for the pushout extension. [F1, F4, F5, step 1.1, step 1.2, algebra]

2.2 In the injective lane put $C^0=N$ and $C^{j+1}=\operatorname{coker}(C^j\to I^j)$ in the supplied coresolution. The dual construction in [F4] identifies degree-$n$ Yoneda classes with $\operatorname{Hom}(M,C^n)$ modulo maps factoring through $I^{n-1}\to C^n$. Apply [F5] to $C^{n-1}\to I^{n-1}\to C^n\to C^{n-1}[1]$ to identify this quotient with $\operatorname{Hom}_D(M,C^{n-1}[1])$. The subsequent connecting isomorphisms identify it with $\operatorname{Hom}_D(M,N[n])$, since both neighboring positive Hom groups into each injective vanish by [F1]. On the pullback extension supplied by [F4], naturality of [F2] makes the composite exactly $\Theta$. Thus the same intrinsic $\Theta$ is bijective in either lane, including when both are available. [F1, F2, F4, F5, step 1.1, algebra]

3.1 The short exact pieces of a splice are the pieces of its two factors in order. The definition in step 1.1 therefore gives $\Theta(\beta\ast\alpha)=\Theta(\beta)[p]\Theta(\alpha)$, using associativity of composition and $[p][q]=[p+q]$. This also shows that the bijection is independent of the resolution used to prove its bijectivity. Degree-zero endpoint maps act by pullback and pushout by step 1.1, and identities act as units. [step 1.1, step 2.1, step 2.2, algebra]

4.1 Apply $\operatorname{Hom}_D(-,A[1])$ to the triangle $B\to Z'\to C\to B[1]$ of $e'$. Its connecting arrow is $\Theta(e')$ by definition and step 1.2. By [F5] the kernel of the map from $\operatorname{Hom}_D(B,A[1])$ to $\operatorname{Hom}_D(C,A[2])$ is the image of restriction from $Z'$; the map is shifted composition with $\Theta(e')$, up to an irrelevant overall rotation sign. By step 3.1 its kernel is precisely the zero-splice condition. Bijectivity and pullback naturality of $\Theta$ give the asserted extension over $Z'$, in both directions. Its pullback middle object is isomorphic to $Z$ by equivalence of short extensions. The kernel of $W\to Z'\to C$ is that pullback and the composite is epic, yielding $0\to Z\to W\to C\to0$. Conversely exactness of the stated diagram identifies $Z$ with this kernel and hence with the pullback. [F2, F5, step 1.2, step 2.1, step 2.2, step 3.1, algebra] ∎
