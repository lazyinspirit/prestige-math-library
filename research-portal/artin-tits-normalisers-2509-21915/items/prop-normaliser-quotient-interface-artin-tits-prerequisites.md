---
id: prop-normaliser-quotient-interface-artin-tits-prerequisites
kind: proposition
title: Normalizer quotients, kernels and conditional surjectivity
status: draft
domain: mathematics
origin: pipeline
deps:
  - math:def-normalizer-of-a-subgroup
  - math:lem-centralizers-and-normalizers-are-subgroups
  - math:def-quotient-group
  - math:thm-first-isomorphism-theorem-groups
  - math:thm-splitting-lemma-for-group-extensions
  - math:def-group-homomorphism
  - math:lem-group-homomorphism-basic-properties
  - math:def-kernel-and-image-of-group-homomorphism
  - math:def-normal-subgroup
  - math:thm-image-subgroup-and-kernel-normal
  - math:def-group
  - math:def-subgroup
  - math:def-group-isomorphism-and-automorphism
  - math:def-external-semidirect-product
  - math:def-split-extension-of-groups
  - math:lem-inverse-of-bijective-group-homomorphism
  - math:def-coset
  - math:def-injection-surjection-bijection
  - math:def-action-by-automorphisms
dependency_roles:
  math:def-normalizer-of-a-subgroup: mathematical-premise
  math:lem-centralizers-and-normalizers-are-subgroups: mathematical-premise
  math:def-quotient-group: mathematical-premise
  math:thm-first-isomorphism-theorem-groups: mathematical-premise
  math:thm-splitting-lemma-for-group-extensions: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:lem-group-homomorphism-basic-properties: mathematical-premise
  math:def-kernel-and-image-of-group-homomorphism: mathematical-premise
  math:def-normal-subgroup: mathematical-premise
  math:thm-image-subgroup-and-kernel-normal: mathematical-premise
  math:def-group: mathematical-premise
  math:def-subgroup: mathematical-premise
  math:def-group-isomorphism-and-automorphism: mathematical-premise
  math:def-external-semidirect-product: mathematical-premise
  math:def-split-extension-of-groups: mathematical-premise
  math:lem-inverse-of-bijective-group-homomorphism: mathematical-premise
  math:def-coset: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
  math:def-action-by-automorphisms: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Let $H$ be a subgroup of a group $G$. Its normalizer is $N_G(H)=\{g\in G:gHg^{-1}=H\}$. Then $H$ is normal in $N_G(H)$, so the quotient group $N_G(H)/H$ exists.

Let $p:G\to Q$ be a group homomorphism and put $K=p(H)$. The rule $\bar p(gH)=p(g)K$ defines a homomorphism from $N_G(H)/H$ to $N_Q(K)/K$. Its kernel is $\{aH:a\in\ker p\cap N_G(H)\}$, and its image is $p(N_G(H))/K$. In particular, $\bar p$ is surjective if and only if $p(N_G(H))=N_Q(K)$.

More generally, if $\pi:E\to B$ is a surjective group homomorphism with kernel $M$ and $C\leq E$, then $\pi|_C:C\to B$ is an isomorphism exactly when $E=MC$ and $M\cap C=\{1\}$. Under these conditions $E$ is isomorphic to $M\rtimes B$ by a map compatible with the inclusion of $M$ and the quotient map, with action induced by conjugation through $(\pi|_C)^{-1}$.

## Statement references

[[math:def-normalizer-of-a-subgroup]]

[[math:lem-centralizers-and-normalizers-are-subgroups]]

[[math:def-quotient-group]]

[[math:thm-first-isomorphism-theorem-groups]]

[[math:thm-splitting-lemma-for-group-extensions]]

[[math:def-group-homomorphism]]

[[math:lem-group-homomorphism-basic-properties]]

[[math:def-kernel-and-image-of-group-homomorphism]]

[[math:def-normal-subgroup]]

[[math:thm-image-subgroup-and-kernel-normal]]

[[math:def-group]]

[[math:def-subgroup]]

[[math:def-group-isomorphism-and-automorphism]]

[[math:def-external-semidirect-product]]

[[math:def-split-extension-of-groups]]

[[math:lem-inverse-of-bijective-group-homomorphism]]

[[math:def-coset]]

[[math:def-injection-surjection-bijection]]

[[math:def-action-by-automorphisms]]

## Facts & Assumptions

[F1] The normalizer consists of precisely the elements that conjugate the subgroup onto itself; it is a subgroup. ([[math:def-normalizer-of-a-subgroup]], [[math:lem-centralizers-and-normalizers-are-subgroups]])

[F2] A left coset is $gH=\{gh:h\in H\}$. For a normal subgroup, quotient elements are cosets and their product is $(gH)(hH)=ghH$. ([[math:def-coset]], [[math:def-quotient-group]])

[F3] A group homomorphism induces an isomorphism from its quotient by its kernel onto its image. ([[math:thm-first-isomorphism-theorem-groups]])

[F4] For a surjective group homomorphism, a complement to its kernel yields a compatible semidirect-product decomposition, with the quotient acting by conjugation through the corresponding section. A complement $C$ satisfies $E=MC$ and $M\cap C=\{1\}$. ([[math:thm-splitting-lemma-for-group-extensions]])

[F5] A group homomorphism preserves products, the identity and inverses. Its restriction to a subgroup is a homomorphism because the same product identity holds on the subgroup. ([[math:def-group-homomorphism]], [[math:lem-group-homomorphism-basic-properties]])

[F6] For a homomorphism $f:X\to Y$, its kernel is $\{x\in X:f(x)=1_Y\}$ and its image is $\{f(x):x\in X\}$; it is surjective precisely when its image is $Y$. ([[math:def-kernel-and-image-of-group-homomorphism]], [[math:def-injection-surjection-bijection]])

[F7] A subgroup $L\leq X$ is normal in $X$ precisely when $xLx^{-1}=L$ for every $x\in X$. ([[math:def-normal-subgroup]])

[F8] The image of a group homomorphism is a subgroup of its codomain, and its kernel is normal in its domain. ([[math:thm-image-subgroup-and-kernel-normal]])

[F9] Groups obey associativity, identity and inverse laws. A subgroup contains the identity and is closed under products and inverses, with the inherited group structure. ([[math:def-group]], [[math:def-subgroup]])

[F10] A map is injective if equal images imply equal inputs, surjective if every target element has a preimage, and bijective if both conditions hold. An isomorphism is a bijective group homomorphism, and its inverse is a group homomorphism. ([[math:def-injection-surjection-bijection]], [[math:def-group-isomorphism-and-automorphism]], [[math:lem-inverse-of-bijective-group-homomorphism]])

[F11] A short exact sequence consists of an injective homomorphism followed by a surjective homomorphism whose kernel is the image of the first. A section $s:B\to E$ is a homomorphism with $\pi\circ s=\operatorname{id}_B$; a complement $C$ satisfies $E=(\ker\pi)C$ and $(\ker\pi)\cap C=\{1\}$. ([[math:def-split-extension-of-groups]], [[math:def-injection-surjection-bijection]])

[F12] An action by automorphisms is a homomorphism $\alpha:B\to\operatorname{Aut}(M)$. For such an action, the external semidirect product $M\rtimes_\alpha B$ has underlying set $M\times B$ and product $(m,b)(m^{\prime},b^{\prime})=(m\alpha_b(m^{\prime}),bb^{\prime})$. ([[math:def-action-by-automorphisms]], [[math:def-external-semidirect-product]])

## Proof
**Given:** Groups $G,Q$, a subgroup $H\leq G$, and a homomorphism $p:G\to Q$, with $K=p(H)$. Also given are a surjective homomorphism $\pi:E\to B$, its kernel $M$, and a subgroup $C\leq E$.

**Goal:** Establish the quotient map, its kernel and image, and the stated splitting criterion.


1.1 By [F5], $p|_H:H\to Q$ is a homomorphism, so [F8] gives $K=p(H)\leq Q$. Every $h\in H$ conjugates $H$ onto itself, so $H\leq N_G(H)$. By [F1], every element of $N_G(H)$ conjugates $H$ onto itself; hence $H$ is normal there by [F7]. The same reasoning applies to the subgroup $K\leq Q$, so both quotient groups exist by [F2]. For $g\in N_G(H)$, preservation of products and inverses in [F5] gives $p(g)Kp(g)^{-1}=p(gHg^{-1})=K$, and therefore $p(g)\in N_Q(K)$. [given, F1, F2, F5, F7, F8, F9]

1.2 The restriction $\pi|_C$ is a homomorphism by [F5]; its kernel is $M\cap C$, and its image is $\pi(C)$ by [F6]. By [F3], the restriction is an isomorphism onto $B$ exactly when $M\cap C=\{1\}$ and $\pi(C)=B$. The latter equality is equivalent to $E=MC$: if $\pi(C)=B$, then for each $e\in E$ choose $c\in C$ with $\pi(c)=\pi(e)$; [F5] gives $\pi(ec^{-1})=1_B$, so $ec^{-1}\in M$ and $e\in MC$. Conversely, applying $\pi$ to $E=MC$ gives $B=\pi(E)=\pi(C)$ because $\pi(M)=\{1_B\}$. [given, F3, F5, F6, F9, F10]

2.1 Define $\bar p(gH)=p(g)K$. If $gH=g'H$, then $g'=gh$ for some $h\in H$, and $p(g')K=p(g)p(h)K=p(g)K$ by [F5]. Thus the rule is well defined; the coset product in [F2] and preservation of products show that it is a homomorphism. By [F5] and [F8] applied to $p|_{N_G(H)}$, the image $p(N_G(H))$ is a subgroup of $N_Q(K)$. Since $K=p(H)\leq p(N_G(H))$ and $K$ is normal in $N_Q(K)$, it is normal in this image subgroup by [F7]. The image of $\bar p$ is therefore the quotient group $p(N_G(H))/K$. [step 1.1, F2, F5, F6, F7, F8, given]

3.1 If $a\in\ker p\cap N_G(H)$, then $aH\in\ker\bar p$ by [F6]. Conversely, if $gH\in\ker\bar p$, then $p(g)\in K=p(H)$; choose $h\in H$ with $p(h)=p(g)$. By [F5], $a=gh^{-1}$ has $p(a)=1_Q$ and lies in $\ker p\cap N_G(H)$, with $aH=gH$. This proves the kernel formula. Since $K\leq p(N_G(H))\leq N_Q(K)$, equality of the two quotient groups $p(N_G(H))/K$ and $N_Q(K)/K$ is equivalent to equality of their numerator subgroups: if their coset sets agree, every $n\in N_Q(K)$ has $nK=xK$ for some $x\in p(N_G(H))$, and then $n\in xK\subseteq p(N_G(H))$. The image calculation and [F6] therefore give the stated equivalence for surjectivity. [step 1.1, step 2.1, given, F2, F5, F6]

4.1 Under the equivalent conditions of step 1.2, $C$ is a complement to $M$ in the sense of [F11]. By [F8], $M=\ker\pi$ is normal in $E$. The inclusion $M\hookrightarrow E$ is an injective homomorphism with image $\ker\pi$, and $\pi$ is surjective, so these maps form a short exact sequence by [F11]. By [F10], $(\pi|_C)^{-1}:B\to C$ is a homomorphism; composing it with the subgroup inclusion gives a homomorphism $s:B\to E$ by [F5]. Since $\pi\circ s=\operatorname{id}_B$, it is a section by [F11]. Applying [F4] gives the compatible isomorphism $M\rtimes B\cong E$, using the external product of [F12] with action $\alpha_b(m)=s(b)ms(b)^{-1}$. This completes the proof. [step 1.2, F4, F5, F8, F9, F10, F11, F12, given] ∎

## Remarks

Surjectivity of the original map $p$ alone does not assert the normalizer-lifting equality. Its verification in any particular Artin–Coxeter application requires the hypotheses of that application.
