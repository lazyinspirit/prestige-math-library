---
id: thm-local-field-k2-moore-sequence-and-divisible-kernel
kind: theorem
title: "Moore exact sequence for K2 of a finite-residue local field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-milnor-k-group-of-a-field
  - lem-local-hilbert-symbol-is-well-defined-and-bilinear
  - thm-local-hilbert-symbol-cup-product-norm-criterion
  - thm-local-hilbert-symbol-nondegenerate-pairing
  - thm-local-artin-reciprocity-and-norm-index
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-prime-to-residue-characteristic-milnor-k-quotients
  - lem-local-roots-of-unity-and-hilbert-milnor-bridge
  - lem-local-field-milnor-k2-quotient-by-the-residue-prime
justified_by: []
proof_strategy: direct
axiom_use: >-
  The original AC/DC assumptions are retained. They supply the canonical
  Artin finite norm kernels, the fully proved local Hilbert nondegeneracy
  interface, and the canonical Milnor norm in the equal-characteristic
  residue-prime calculation. The intrinsic finite unit-filtration argument
  itself is choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, 2nd ed., Chapter IX, §§4.1–4.4"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Printed pp. 304–308, complete proof of Theorem (4.3) and the preceding local K2 quotient calculations."
    - title: "John Milnor, Introduction to Algebraic K-Theory, Chapter 15"
      url: "https://www.math.uchicago.edu/~may/REU2015/REUPapers/Milnor.pdf"
      locator: "Moore's local K2 sequence and Hilbert-symbol description."
verification: {}
---

## Statement

Assume AC and DC. Let $F$ be a nonarchimedean local field with finite residue field and let
$\mu(F)$ be the finite torsion subgroup of $F^\times$, of order $m$. The
$m$th local Hilbert symbol induces a surjective homomorphism
$$
H_m:K_2^M(F)\longrightarrow\mu(F)
$$
whose kernel is exactly $mK_2^M(F)$. The subgroup $mK_2^M(F)$ is divisible,
and the exact sequence
$$ 0\longrightarrow mK_2^M(F)\longrightarrow K_2^M(F)\xrightarrow{\,H_m\,}\mu(F)\longrightarrow1 $$
splits as a sequence of abelian groups.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-milnor-k-group-of-a-field]]

[[lem-local-hilbert-symbol-is-well-defined-and-bilinear]]

[[thm-local-hilbert-symbol-cup-product-norm-criterion]]

[[thm-local-hilbert-symbol-nondegenerate-pairing]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[Fesenko–Vostokov, *Local Fields and Their Extensions*, 2nd ed., IX §4](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[John Milnor, *Introduction to Algebraic K-Theory*, Chapter 15](https://www.math.uchicago.edu/~may/REU2015/REUPapers/Milnor.pdf)

## Facts & Assumptions

**Given:** Exactly the local field and AC/DC assumptions in the unchanged Statement. Put $G=K_2^M(F)$ and $q=|k_F|$, $p=\operatorname{char}(k_F)$.

[F1] For every integer $s\ge1$ prime to $p$, $G/sG$ is cyclic of order $\gcd(s,q-1)$. [[lem-prime-to-residue-characteristic-milnor-k-quotients]]

[F2] The actual root group is finite cyclic of order $m=p^r(q-1)$, and the literal canonical Hilbert symbol induces a surjection $H_s:G\to\mu_s$ whenever $s$ is prime to $\operatorname{char}F$ and $\mu_s\subset F$. Its Steinberg descent and all norm-kernel hypotheses are proved explicitly. [[lem-local-roots-of-unity-and-hilbert-milnor-bridge]]

[F3] The quotient $G/pG$ is zero when $\mu_p$ is trivial and cyclic of order $p$ otherwise; this includes $p=2$ and both field characteristics. [[lem-local-field-milnor-k2-quotient-by-the-residue-prime]]

[F4] Under the exact canonical Artin finite norm-kernel hypotheses and AC/DC, the Hilbert pairing on $F^\times/F^{\times p}$ is nondegenerate when $\operatorname{char}F\ne p$ and $\mu_p\subset F$. Its complete finite Hom-cardinality proof is part of this reconstruction. [[thm-local-hilbert-symbol-nondegenerate-pairing]]

[F5] Milnor symbols are bilinear, so an entry killed by an integer kills the same multiple of its symbol. [[def-milnor-k-group-of-a-field]]

[A1] AC and DC are exactly the original hypotheses, carried through [F2]–[F4]. No choice-free canonical-map existence or residue-characteristic torsion classification is asserted. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** prove the residue-prime stabilization from the local mod-$p$ quotient, combine it with the tame quotient, and split the resulting divisible-kernel sequence.

**Given:** The data above.

1.1 By [F2], write $h=q-1$ and $m=p^r h$. The characteristic does not divide $m$, since $r=0$ in characteristic $p$; the cyclic group $\mu(F)$ already contains $m$ distinct $m$th roots, so it is exactly $\mu_m$. If $r=0$, there is no nontrivial $p$th root in $F$, so [F3] gives $G=pG$. If $r>0$, the characteristic is zero and a primitive $p^r$th root $\zeta$ is not a $p$th power in $F$: a $p$th root of it would be a primitive $p^{r+1}$th root, contradicting maximality of $r$. By [F4], choose $a$ with $(\zeta,a)_{F,p}\ne1$. Then $z=\{\zeta,a\}$ has nonzero image under $H_p$ from [F2]. Since $G/pG$ has order $p$ by [F3], its class generates that quotient; and $p^rz=0$ by [F5]. Thus $G=\langle z\rangle+pG$. [A1, F2, F3, F4, F5, given, choose, algebra]

2.1 In the case $r>0$, iterating the last equality finitely gives $G=\langle z\rangle+p^sG$ for every $s\ge1$: substitute a new expression for the remainder at each step, and combine the resulting multiples of $z$. Multiplying $G=\langle z\rangle+pG$ by $p^r$, and using $p^rz=0$, gives $p^rG=p^{r+1}G$. Hence $p^rG$ is $p$-divisible. Also $G/p^rG$ is cyclic generated by $z$, of order at most $p^r$. The onto map $H_{p^r}$ of [F2] is killed by $p^r$, so that order is at least $p^r$, and hence exactly $p^r$. For $r=0$, use the trivial quotient $G/G$ and $G=pG$ from step 1.1 instead. No assertion about the subgroup of $p$-torsion was needed. [F2, F3, F5, step 1.1, algebra]

3.1 By [F1], $G/hG$ is cyclic of order $h$. Since $h$ and $p^r$ are coprime, Bezout gives $hG+p^rG=G$ and $hG\cap p^rG=hp^rG$: if $x=hu=p^rv$ and $\alpha h+\beta p^r=1$, then $x=hp^r(\alpha v+\beta u)$. These identities prove the natural isomorphism $G/mG\cong G/hG\oplus G/p^rG$. Surjectivity can also be seen by the same Bezout coefficients applied to representatives of the two quotient classes. Step 2.1 therefore makes $G/mG$ cyclic of order $m$, including a trivial factor when $h=1$ or $r=0$. The surjection $H_m$ in [F2] is killed by $m$, so it induces an onto map between two groups of order $m$, and is an isomorphism. Consequently $\ker H_m=mG$. This uses no orientation-sensitive identification of the tame symbol with the Hilbert symbol. [F1, F2, step 2.1, algebra]

4.1 Put $D=mG$. It is $p$-divisible by step 2.1 (or by $G=pG$ when $r=0$), followed by multiplication by $h$. If a prime $\ell\ne p$, the quotients $G/h\ell G$ and $G/hG$ both have order $h$ by [F1], and their natural surjection is therefore an isomorphism. Its kernel is $hG/h\ell G$, so $hG=h\ell G$. Multiplying by $p^r$ proves $D=\ell D$. Each positive integer is a finite product of primes; successively taking these prime divisions proves that $D$ is divisible. This proves full divisibility rather than only prime-to-$p$ divisibility. [F1, step 2.1, step 3.1, algebra]

5.1 Choose $x\in G$ mapping to a generator $\xi$ of the cyclic group $\mu(F)$ by the surjection in step 3.1. Then $mx\in D$, so step 4.1 supplies $y\in D$ with $my=mx$. The element $x-y$ is killed by $m$ and still maps to $\xi$. Thus $\xi^j\mapsto j(x-y)$ is a well-defined group-homomorphic section, proving the stated split exact sequence. If $m=1$, the quotient is trivial, $D=G$ and its unique section gives the same result. All original claims hold under their literal AC/DC assumptions; this does not say that the divisible kernel is torsion-free. [A1, F2, step 3.1, step 4.1, choose, algebra] ∎


## Remarks

The full local quotient and divisible-kernel sequence are proved here. The separate mixed-characteristic Tate assertion that an element killed by $p$ is a root-of-unity symbol, and the associated higher-Milnor cyclic norm-kernel and unique-divisibility chain, are not consequences of computing $G/pG$ and remain separate obligations. No omitted assertion in Fesenko–Vostokov IX.4.5 or source exercise has been adopted as a proof.
