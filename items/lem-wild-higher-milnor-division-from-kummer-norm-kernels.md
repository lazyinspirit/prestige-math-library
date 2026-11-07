---
id: lem-wild-higher-milnor-division-from-kummer-norm-kernels
kind: lemma
title: Conditional wild division in every higher Milnor degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-milnor-k-group-of-a-field
  - lem-milnor-symbol-anticommutativity-and-repeated-entry-identities
  - lem-wild-k3-division-from-kummer-norm-kernels
  - lem-wild-k3-fixed-entry-division-from-k2-norm-kernel
  - lem-all-local-roots-of-unity-annihilate-higher-milnor-classes
  - thm-bass-tate-kato-norm-transfer-for-milnor-k-groups
  - lem-complete-discrete-valuation-extension-degree-and-tame-norm
  - thm-finite-galois-extension-characterizations
justified_by: []
proof_strategy: direct
axiom_use: AC and DC retained for the local transfer and conditional K3 suppliers.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Fesenko and Vostokov, Local Fields and Their Extensions, second edition
      url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
      locator: "IX.4.11, printed pp. 313–315. Conditional adaptation: the K2 norm-kernel input is an explicit hypothesis."
---

## Statement

Assume AC and DC. Let $F$ be a mixed-characteristic nonarchimedean local field with finite residue field of characteristic $p$, and put $L=F(\mu_p)$. Suppose that for every $a\in L^\times$ with $E=L(a^{1/p})\ne L$ and every generator $\sigma$ of $\operatorname{Gal}(E/L)$, the canonical Milnor norm satisfies
$$\ker\bigl(N_{E/L}:K_2^M(E)\to K_2^M(L)\bigr)=(1-\sigma)K_2^M(E).$$
Then multiplication by $p$ is an automorphism of $K_n^M(F)$ for every $n\ge3$, including $p=2$. The norm-kernel equality is an explicit hypothesis of this conditional result.

## Statement references

[[lem-wild-k3-division-from-kummer-norm-kernels]]

[[lem-wild-k3-fixed-entry-division-from-k2-norm-kernel]]

[Fesenko–Vostokov, IX.4.11](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** Exactly $F,p,L$, AC/DC and the norm-kernel hypothesis in the Statement.

[F1] Milnor groups have the multilinear tensor presentation with Steinberg relations for every pair of distinct positions. Symbols anticommute, and products concatenate entries. [[def-milnor-k-group-of-a-field]] [[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

[F2] Under the stated norm-kernel hypothesis, multiplication by $p$ on $K_3^M(L)$ is invertible. For each $a\in L^\times$, with $\alpha^p=a$ and $E=L(\alpha)$, the fixed-entry map sends $u\in K_2^M(L)$ to $N_{E/L}(\{\alpha\}y)$ for any $y$ with $N_{E/L}y=u$, and its multiple by $p$ equals $\{a\}u$. These lifts exist and the map is independent of their choices, also when $E=L$. [[lem-wild-k3-division-from-kummer-norm-kernels]] [[lem-wild-k3-fixed-entry-division-from-k2-norm-kernel]]

[F3] Transfer satisfies projection and $N\operatorname{res}=[E:L]$. Every root of unity $\xi$ in a finite-residue local field $E$ satisfies $\{\xi\}K_j^M(E)=0$ for $j\ge2$. [[thm-bass-tate-kato-norm-transfer-for-milnor-k-groups]] [[lem-all-local-roots-of-unity-annihilate-higher-milnor-classes]]

[F4] Finite extensions remain finite-residue local fields. A splitting field of a separable polynomial is finite Galois. [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]] [[thm-finite-galois-extension-characterizations]]

[A1] AC and DC are retained literally. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

1.1 The polynomial $X^p-1$ is separable in characteristic zero, and $L$ is its splitting field. Choose a primitive root $\zeta$. Since $L=F(\zeta)$, its Galois group embeds by its action on $\zeta$ into $(\mathbb Z/p\mathbb Z)^\times$. Therefore $d=[L:F]$ divides $p-1$, so $\gcd(d,p)=1$. By [F4], $L$ is again a finite-residue local field with residue characteristic $p$, as is each $L(a^{1/p})$. The given hypothesis thus permits [F2] over $L$. [A1, F2, F4, given, choose, algebra]

2.1 Let $D_3$ be the inverse of multiplication by $p$ on $K_3^M(L)$. It is a homomorphism. By uniqueness of a $p$-preimage and [F2], $$D_3\{a,b,c\}=N_{E/L}(\{\alpha\}y),\qquad \alpha^p=a,\quad N_{E/L}y=\{b,c\}.$$ For $n\ge3$ define the multilinear function $$\Phi_n(a_1,\ldots,a_n)=D_3\{a_1,a_2,a_3\}\cdot\{a_4,\ldots,a_n\}.$$ The last factor is $1\in K_0^M(L)$ for $n=3$. This function changes sign under any transposition within its first three positions, because $D_3$ is a homomorphism, and within its last $n-3$ positions by [F1]. No interchange between the two blocks has yet been asserted. [F1, F2, step 1.1, construct, algebra]

3.1 A Steinberg pair entirely within the first three positions makes $\Phi_n$ zero because it makes its $K_3$ input zero. A pair entirely within the last block makes its second factor zero. To treat a pair with one position in each block, use only the within-block transpositions of step 2.1 to bring its entries to positions one and four. It suffices to prove $\Phi_n(a,b,c,1-a,a_5,\ldots,a_n)=0$, where $a\ne1$ and $n\ge4$. [F1, step 2.1, algebra]

4.1 Choose $\alpha^p=a$, put $E=L(\alpha)$, and choose $y\in K_2^M(E)$ with $N_{E/L}y=\{b,c\}$ as in [F2]. Projection expresses the desired value, up to the already accounted sign, as $$N_{E/L}\bigl(\{\alpha\}y\operatorname{res}\{1-a,a_5,\ldots,a_n\}\bigr).$$ In $E$ the identity $1-a=\prod_{i=0}^{p-1}(1-\zeta^i\alpha)$ holds even when $E=L$. All factors are nonzero since $a\ne1$. Multilinearity and Steinberg give $$\{\alpha,1-a\}=-\sum_{i=0}^{p-1}\{\zeta^i,1-\zeta^i\alpha\}.$$ Indeed, expand the second entry using the product identity and apply $\{\zeta^i\alpha,1-\zeta^i\alpha\}=0$ to each term. Moving the degree-two element $y$ past the single entry $1-a$ introduces the sign $(-1)^2=1$. Each resulting summand contains $\{\zeta^i\}$ multiplied by $\{1-\zeta^i\alpha\}y$ and the remaining entries, a class of degree at least three. It is zero by [F3] applied over $E$. Thus the mixed Steinberg relation vanishes, including for trivial $E/L$ and for $p=2$. [F1, F2, F3, step 1.1, step 2.1, step 3.1, choose, algebra]

5.1 The tensor presentation [F1] and steps 2.1–4.1 now yield a homomorphism $D_{n,L}:K_n^M(L)\to K_n^M(L)$ induced by $\Phi_n$. On symbols, $pD_{n,L}=\mathrm{id}$ since $pD_3=\mathrm{id}$. Symbols generate, so the identity holds on the whole group. Additivity gives $D_{n,L}(px)=pD_{n,L}(x)=x$, proving the other inverse identity as well. This proves the required bijection over $L$ without assuming that a quotient of a uniquely divisible group is uniquely divisible. [F1, step 2.1, step 3.1, step 4.1, algebra]

6.1 Choose integers $u,v$ with $ud+vp=1$. On $K_n^M(F)$ define $$T=uN_{L/F}D_{n,L}\operatorname{res}_{L/F}+v\mathrm{id}.$$ By [F3] and step 5.1, $pT=ud\mathrm{id}+vp\mathrm{id}=\mathrm{id}$. As $T$ is a homomorphism, $T(px)=pT(x)=x$ as well. Hence $T$ is a two-sided inverse for multiplication by $p$ over $F$. For $p=2$ one has $L=F$ and $d=1$; no dyadic exception or division by two enters the construction. The norm-kernel hypothesis has been used through [F2], and has not been proved. [F3, step 1.1, step 5.1, construct, algebra] ∎

## Remarks

This research draft addresses the higher-degree Steinberg checks and cyclotomic descent after the integrated conditional degree-three construction. It does not prove the missing root-symbol description of $K_2[p]$, and it does not complete the unconditional higher unique-divisibility theorem. No source claim, supplier acceptance record, or original theorem has been changed.
