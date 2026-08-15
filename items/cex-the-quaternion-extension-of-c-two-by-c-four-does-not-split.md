---
id: cex-the-quaternion-extension-of-c-two-by-c-four-does-not-split
kind: counterexample
title: '$1\to\langle i\rangle\to Q_8\to Q_8/\langle i\rangle\to1$ does not split, with nonabelian middle group'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quaternion-group-of-order-eight, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, def-split-extension-of-groups, thm-index-two-subgroup-is-normal, cor-order-of-a-quotient-group, def-order-in-a-group, def-group-power, lem-group-homomorphism-basic-properties, thm-image-subgroup-and-kernel-normal, cor-groups-of-order-p-squared-are-abelian, cor-order-of-element-divides-group-order, def-quotient-group, thm-quotient-group-laws, cor-prime-order-group-is-cyclic, thm-lagrange, def-kernel-and-image-of-group-homomorphism, thm-quaternions-form-a-division-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
sources:
  scraped: []
  references:
    - title: 'J. S. Milne, Group Theory, Example 3.9(c)'
      url: 'https://www.jmilne.org/math/CourseNotes/GT.pdf'
verification:
  precheck: pass
pipeline_run: null
---

## Statement refuted

Every short exact sequence of groups with cyclic kernel and cyclic quotient splits.

Let $Q_8=\{\pm1,\pm i,\pm j,\pm k\}$ be the quaternion group
([[def-quaternion-group-of-order-eight]]) and $\langle i\rangle=\{1,i,-1,-i\}$.
Then

$$1\longrightarrow\langle i\rangle\overset{\subseteq}{\longrightarrow}Q_8\overset{\pi}{\longrightarrow}Q_8/\langle i\rangle\longrightarrow1$$

is a short exact sequence whose kernel is cyclic of order $4$ and whose quotient
is cyclic of order $2$, and it is a counterexample: it has no section. Its middle
group $Q_8$ is nonabelian, whereas the middle group of the cyclic witness
$1\to C_p\to C_{p^2}\to C_p\to1$ has order $p^{2}$ and so is abelian; the two
witnesses are therefore distinct.

## Facts & Assumptions

**Given:** The quaternion group $Q_8\le\mathbb{H}^{\times}$ of [[def-quaternion-group-of-order-eight]], with identity $1$.

[L1] For $Q_8=\{1,-1,i,-i,j,-j,k,-k\}\subseteq\mathbb{H}^{\times}$: $Q_8$ is a subgroup of $\mathbb{H}^{\times}$ with $|Q_8|=8$; $1$ is its only element of order $1$, $-1$ its only element of order $2$, and each of $\pm i,\pm j,\pm k$ has order $4$; and $\langle i\rangle=\{1,i,-1,-i\}$ is a subgroup of order $4$ containing $-1$ ([[prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]]).

[L2] A short exact sequence $1\to N\overset{\varphi}{\to}G\overset{\pi}{\to}H\to1$ consists of group homomorphisms with $\varphi$ injective, $\pi$ surjective and $\operatorname{im}\varphi=\ker\pi$; a section is a homomorphism $s:H\to G$ with $\pi\circ s=\operatorname{id}_H$, and the extension splits when it has a section ([[def-split-extension-of-groups]], [[def-kernel-and-image-of-group-homomorphism]]).

[L3] If $H\le G$ and $[G:H]=2$, then $H\trianglelefteq G$ ([[thm-index-two-subgroup-is-normal]]).

[L4] For $N\trianglelefteq G$ with $[G:N]$ finite, the quotient group $G/N$ is finite with $|G/N|=[G:N]$; in particular $|G/N|=|G|/|N|$ when $G$ is finite ([[cor-order-of-a-quotient-group]]).

[L5] If $H\le G$ with $G$ finite, then $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L6] If $G$ is a finite group whose order is prime, then every $g\ne e$ has order $|G|$ and generates $G$; in particular $G$ is cyclic ([[cor-prime-order-group-is-cyclic]]).

[L7] The order $\operatorname{ord}(g)$ of an element $g$ of a group is the least natural $m\ge1$ with $g^{m}=e$ when such an $m$ exists, and $\infty$ otherwise ([[def-order-in-a-group]], [[def-group-power]]); and a group homomorphism $f$ satisfies $f(e)=e'$ ([[lem-group-homomorphism-basic-properties]]); the image of a group homomorphism is a subgroup of the codomain and its kernel is a normal subgroup of the domain ([[thm-image-subgroup-and-kernel-normal]]).

[L8] $ij=k$ and $ji=-k$, and $k\ne-k$; so multiplication in $\mathbb{H}$ is not commutative ([[thm-quaternions-form-a-division-ring]]).

[L11] If $G$ is finite and $g\in G$, then $g$ has finite order and $\operatorname{ord}(g)$ divides $|G|$ ([[cor-order-of-element-divides-group-order]]).

[L10] Every group of order $p^{2}$, with $p$ prime, is abelian ([[cor-groups-of-order-p-squared-are-abelian]]).

[L9] For $N\trianglelefteq G$ the quotient group $G/N$ has the left cosets $gN$ as elements with product $(gN)(hN)=ghN$; the cosets form a group under it, whose identity is $N=eN$ and in which the inverse of $gN$ is $g^{-1}N$ ([[def-quotient-group]], [[thm-quotient-group-laws]]).

## Counterexample

**Proof technique:** contradiction.

1.1 $\langle i\rangle\trianglelefteq Q_8$ and $|Q_8/\langle i\rangle|=2$. By [L1] and [L5], $[Q_8:\langle i\rangle]=8/4=2$, so [L3] makes $\langle i\rangle$ normal and [L4] gives $|Q_8/\langle i\rangle|=2$. [L1, L3, L4, L5]

1.2 The middle group $Q_8$ is nonabelian: $ij=k$ and $ji=-k$ with $k\ne-k$ by [L8], and $i,j,k,-k$ all lie in $Q_8$ by [L1]. The middle group of the cyclic witness $1\to C_p\to C_{p^2}\to C_p\to1$ has order $p^{2}$ and is therefore abelian by [L10], so the refutation below is not a restatement of that one. [L1, L8, L10]

2.1 The projection $\pi:Q_8\to Q_8/\langle i\rangle$, $\pi(g)=g\langle i\rangle$, is a surjective homomorphism with $\ker\pi=\langle i\rangle$. It is defined because $\langle i\rangle$ is normal by step 1.1, it is a homomorphism because [L9] gives $(g\langle i\rangle)(h\langle i\rangle)=gh\langle i\rangle$, it is surjective because every element of $Q_8/\langle i\rangle$ is a coset $g\langle i\rangle$ by [L9], and its kernel is $\{g:g\langle i\rangle=\langle i\rangle\}=\langle i\rangle$, the identity of the quotient being $\langle i\rangle$ itself by [L9]. [step 1.1, L9, algebra]

2.2 Suppose, for contradiction, that a section $s:Q_8/\langle i\rangle\to Q_8$ existed. Since $\pi\circ s=\operatorname{id}$, the map $s$ is injective, so its image $K=s(Q_8/\langle i\rangle)$ is a subgroup of $Q_8$ by [L7], of the same size as $Q_8/\langle i\rangle$, hence $|K|=2$ by step 1.1. Writing $K=\{1,x\}$ with $x\ne1$, [L11] applied to the finite group $K$ gives that $\operatorname{ord}(x)$ divides $|K|=2$, so $\operatorname{ord}(x)$ is $1$ or $2$; it is not $1$, since by [L7] that would make $x=x^{1}=1$. Hence $\operatorname{ord}(x)=2$. [step 1.1, L2, L7, L11, assume-contra]

3.1 The sequence is short exact. Write $\varphi:\langle i\rangle\to Q_8$ for the inclusion; it is an injective homomorphism with $\operatorname{im}\varphi=\langle i\rangle$, and step 2.1 gives $\ker\pi=\langle i\rangle$, so $\operatorname{im}\varphi=\ker\pi$ as [L2] requires. The kernel is $\langle i\rangle$, cyclic of order $4$ because it is generated by $i$; the quotient has order $2$ by step 1.1, and $2$ is prime, so [L6] makes it cyclic. [step 1.1, step 2.1, L1, L2, L6]

3.2 By [L1] the only element of $Q_8$ of order $2$ is $-1$, so $x=-1$. But $-1\in\langle i\rangle=\ker\pi$ by [L1] and step 2.1, hence $\pi(x)$ is the identity of $Q_8/\langle i\rangle$. [step 2.1, step 2.2, L1, L2]

4.1 On the other hand $x=s(h)$ for the unique non-identity $h\in Q_8/\langle i\rangle$, because $s$ is injective and $s$ sends the identity to the identity by [L7]; and then $\pi(x)=\pi(s(h))=h\ne1$, contradicting step 3.2. Hence no section exists and the extension does not split. [step 2.2, step 3.2, L2, L7, discharge-contradiction] $\blacksquare$
