---
dependency_level: 22
id: lem-all-local-roots-of-unity-annihilate-higher-milnor-classes
kind: lemma
title: All local roots of unity annihilate higher Milnor classes
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-milnor-k-group-of-a-field
- lem-milnor-symbol-anticommutativity-and-repeated-entry-identities
- thm-local-field-k2-moore-sequence-and-divisible-kernel
- lem-local-roots-of-unity-and-hilbert-milnor-bridge
- thm-local-hilbert-symbol-nondegenerate-pairing
- lem-local-root-of-unity-symbols-annihilate-higher-milnor-classes
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
axiom_use: Literal AC and DC for accepted canonical Milnor transfer, finite local
  extensions and the distinguished canonical Hilbert pairing. No torsion classification
  or wild injectivity is assumed.
sources:
  references:
  - title: Fesenko–Vostokov, Local Fields and Their Extensions, second edition, Chapter
      IX; local reconstruction
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Printed pp.312–314, especially IX4.10; the finite prime-power extension
      of that argument is proved here. IX4.5 omitted torsion and general Hilbert90
      are not premises.
verification: {}
---

## Statement

Assume AC and DC. Let $F$ be a nonarchimedean local field with finite residue field, let $\xi\in F^\times$ be any root of unity, and let $j\ge2$. Then
$$\{\xi\}\cdot K_j^M(F)=0\quad\text{in }K_{j+1}^M(F).$$
All finite root orders, including every dyadic prime power, and both characteristics of $F$ are included.

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-milnor-k-group-of-a-field]]

[[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

[[thm-local-field-k2-moore-sequence-and-divisible-kernel]]

[[lem-local-roots-of-unity-and-hilbert-milnor-bridge]]

[[thm-local-hilbert-symbol-nondegenerate-pairing]]

[[lem-local-root-of-unity-symbols-annihilate-higher-milnor-classes]]

## Facts & Assumptions

**Given:** Exactly the field, root, degree and choice hypotheses in the Statement.

[F1] Milnor symbols are multilinear and anticommute, with $\{a,a\}=\{a,-1\}$ and $\{a,-a\}=0$. Higher symbols are products of a degree-two symbol with remaining entries. [[def-milnor-k-group-of-a-field]] [[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

[F2] The full root group $\mu(F)$ is finite cyclic. The Moore map has quotient $\mu(F)$ and divisible kernel; it does not assert that this kernel is torsion-free. [[thm-local-field-k2-moore-sequence-and-divisible-kernel]] [[lem-local-roots-of-unity-and-hilbert-milnor-bridge]]

[F3] For every $m\ge1$ invertible in $F$ with $\mu_m\subset F$, the actual canonical Hilbert pairing has trivial left radical on $F^\times/F^{\times m}$, and its Steinberg map $H_m:K_2^M(F)\to\mu_m$ is onto. [[thm-local-hilbert-symbol-nondegenerate-pairing]] [[lem-local-roots-of-unity-and-hilbert-milnor-bridge]]

[F4] A root of prime order $\ell$ annihilates $K_j^M(F)$ for $j\ge2$, including $\ell=2$ and its finite quadratic norm-descent case. [[lem-local-root-of-unity-symbols-annihilate-higher-milnor-classes]]

[A1] AC and DC are the literal hypotheses for the canonical Hilbert/Moore and prime-root branches above. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Given:** The data above; write $G=K_2^M(F)$.

1.1 It suffices first to annihilate $G$ by each maximal primary root $\zeta$ of order $m=\ell^s$, $s\ge1$: the finite cyclic root group is the product of its primary components, and every root is a finite product of powers of these generators. There are no nontrivial $\ell$-primary roots when $\operatorname{char}F=\ell$, since $X^{\ell^s}-1=(X-1)^{\ell^s}$. Thus every nontrivial primary case has $\ell\ne\operatorname{char}F$ and falls under [F3]. The identity root gives the zero degree-one class directly. [A1, F1, F2, F3, given, construct, algebra]

2.1 Let $D$ be the divisible Moore kernel. Since $D=mD\subset mG$, quotienting $G/D\simeq\mu(F)$ by $m$ gives $G/mG\simeq\mu(F)/\mu(F)^m$, cyclic of order $m$. The map $H_m$ kills $mG$ and is onto $\mu_m$, also of order $m$, so it identifies this quotient with $\mu_m$. The class of $\zeta$ has order $m$ in $F^\times/F^{\times m}$. Indeed, if $\zeta^a=c^m$ and $v_\ell(a)=v<s$, then $c^{\ell^{2s}}=1$ and $c$ has order $\ell^{2s-v}>\ell^s$, contrary to maximality. By left nondegeneracy, the character $b\mapsto(\zeta,b)_{F,m}$ therefore has order $m$: its $a$th power being trivial would put $\zeta^a$ in $F^{\times m}$. Its image is a subgroup of the cyclic $\mu_m$, so some $b$ has primitive image. This uses the actual public nondegeneracy, without a cardinality or perfect-pairing upgrade. [A1, F1, F2, F3, step 1.1, algebra]

3.1 Suppose $\ell$ is odd. Since $-1=(-1)^m$, the class of $-\zeta$ modulo $m$th powers also has order $m$. The character argument of step 2.1 chooses $b$ such that $z=\{-\zeta,b\}$ has primitive $H_m$ image, hence generates $G/mG$. The exact identity $\{\zeta,-\zeta\}=0$ gives $\{\zeta\}z=0$, and multilinearity gives $\{\zeta\}mG=0$. Every element of $G$ is an integer multiple of $z$ modulo $mG$, so $\{\zeta\}G=0$. [A1, F1, F3, step 2.1, choose, algebra]

3.2 Suppose $\ell=2$ and $s\ge2$. Put $g=\{\zeta,\zeta\}=\{\zeta,-1\}$. Then $2g=0$, while $-1=\zeta^{2^{s-1}}$ gives $g=2^{s-1}g=0$, since $2^{s-1}$ is even. Step 2.1 chooses $b$ such that $z=\{\zeta,b\}$ generates $G/2^sG$. Consequently $\{\zeta\}z=g\{b\}=0$, and $\{\zeta\}2^sG=0$, proving $\{\zeta\}G=0$. For $\ell=2,s=1$, the generator is $-1$ and [F4] already proves its annihilation of $G$; its residue-two case is included. Characteristic two has no nontrivial dyadic root and was disposed of in step 1.1. [A1, F1, F4, step 1.1, step 2.1, choose, algebra]

4.1 Finite primary decomposition and multilinearity now give $\{\xi\}G=0$ for every root $\xi$. Every generator in degree $j\ge2$ is a degree-two symbol multiplied by the remaining $j-2$ entries. Associativity therefore gives $\{\xi\}K_j^M(F)=0$ for all $j\ge2$, with an empty remaining product when $j=2$. No torsion subgroup of $K_2$ has been classified, and no torsion-freeness of a divisible kernel was used. [F1, F2, step 1.1, step 3.1, step 3.2, algebra] ∎
