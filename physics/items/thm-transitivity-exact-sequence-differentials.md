---
id: "thm-transitivity-exact-sequence-differentials"
kind: "theorem"
title: "Transitivity sequence for differential modules"
status: published
origin: "pipeline"
deps: ["thm-kahler-differentials-existence-presentation", "cor-derivations-represented-by-differentials", "def-derivation-algebra"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.131.7"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil 22.2.9–11, pp.578–579"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Let $A\to B\to C$ be homomorphisms of commutative rings. Then the sequence of
$C$-modules

$$C\otimes_{B}\Omega_{B/A}\longrightarrow\Omega_{C/A}\longrightarrow\Omega_{C/B}\longrightarrow0$$

is exact, where the first map sends $c\otimes\mathrm{d}b$ to
$c\,\mathrm{d}_{C/A}(b)$ and the second is induced by $\mathrm{d}_{C/B}$. The
first arrow is **not** asserted to be injective, and it fails to be injective in
general; exactness on the left is not part of the statement.

## Facts & Assumptions

**Given:** Ring homomorphisms $A\to B\to C$ of commutative rings.

[F1] [[cor-derivations-represented-by-differentials]]: for every ring map $R\to S$ with Kähler differential module $(\Omega_{S/R},\mathrm{d})$ and every $S$-module $N$, composition with $\mathrm{d}$ is a natural $S$-module isomorphism $\operatorname{Hom}_S(\Omega_{S/R},N)\cong\operatorname{Der}_R(S,N)$.

[F2] [[thm-kahler-differentials-existence-presentation]]: a Kähler differential module exists for every ring map, and it is generated as a module by the elements $\mathrm{d}s$.

[F3] [[def-derivation-algebra]]: an $A$-derivation is additive, $A$-constant and satisfies the Leibniz rule; an $A$-derivation $D:C\to M$ that kills the image of $B$ is a $B$-derivation, since $D(bc)=bD(c)+cD(b)=bD(c)$.

## Proof

1.1 The first map. The composite $B\to C\xrightarrow{\mathrm{d}_{C/A}}\Omega_{C/A}$ is an $A$-derivation of $B$ into the $C$-module $\Omega_{C/A}$; by [F1] it corresponds to a $B$-linear map $\Omega_{B/A}\to\Omega_{C/A}$ with $\mathrm{d}b\mapsto\mathrm{d}_{C/A}(b)$. Its extension of scalars along $B\to C$ is the $C$-linear map $\gamma\colon C\otimes_{B}\Omega_{B/A}\to\Omega_{C/A}$ with $\gamma(c\otimes\mathrm{d}b)=c\,\mathrm{d}_{C/A}(b)$. [F1, F3]

1.2 The second map. The universal $B$-derivation $\mathrm{d}_{C/B}\colon C\to\Omega_{C/B}$ is also an $A$-derivation, so [F1] applied to $A\to C$ gives a $C$-linear map $\delta\colon\Omega_{C/A}\to\Omega_{C/B}$ with $\delta(\mathrm{d}_{C/A}(c))=\mathrm{d}_{C/B}(c)$. It is surjective because the elements $\mathrm{d}_{C/B}(c)$ generate $\Omega_{C/B}$ over $C$ by [F2]. [F1, F2]

2.1 The composite vanishes. For $c\in C$ and $b\in B$, $\delta(\gamma(c\otimes\mathrm{d}b))=c\,\mathrm{d}_{C/B}(b)=0$, since $\mathrm{d}_{C/B}$ is $B$-constant: $b$ is the image of an element of $B$, so $\mathrm{d}_{C/B}(b)=0$ in the definition of a $B$-derivation of $C$. Hence there is an induced $C$-linear map $\bar\delta\colon Q\to\Omega_{C/B}$ out of $Q:=\operatorname{coker}\gamma$, and it is surjective by step 1.2. [step 1.1, step 1.2, F3]

3.1 A left inverse for $\bar\delta$. The map $D\colon C\to Q$ sending $c$ to the class of $\mathrm{d}_{C/A}(c)$ is the composite of the $A$-derivation $\mathrm{d}_{C/A}$ with the $C$-linear quotient map, hence an $A$-derivation, and it kills $B$ because $\mathrm{d}_{C/A}(b)$ is the class of $\gamma(1\otimes\mathrm{d}b)$, which is zero in $Q$. As $D$ is $A$-linear and kills $B$, it satisfies $D(bc)=b\,D(c)$ for $b\in B$, $c\in C$ by the Leibniz rule, so $D$ is a $B$-derivation; [F1] applied to the ring map $B\to C$ gives a $C$-linear map $\ell\colon\Omega_{C/B}\to Q$ with $\ell(\mathrm{d}_{C/B}(c))=[\mathrm{d}_{C/A}(c)]$. [step 2.1, F1, F3]

4.1 $\ell$ is inverse to $\bar\delta$. For all $c\in C$ we have $\bar\delta(\ell(\mathrm{d}_{C/B}(c)))=\bar\delta([\mathrm{d}_{C/A}(c)])=\mathrm{d}_{C/B}(c)$ and $\ell(\bar\delta([\mathrm{d}_{C/A}(c)]))=\ell(\mathrm{d}_{C/B}(c))=[\mathrm{d}_{C/A}(c)]$ by the defining property of $\ell$ in step 3.1. The elements $\mathrm{d}_{C/B}(c)$ generate $\Omega_{C/B}$ and the classes $[\mathrm{d}_{C/A}(c)]$ generate $Q$ over $C$ by [F2], so $\bar\delta\circ\ell=\mathrm{id}$ and $\ell\circ\bar\delta=\mathrm{id}$. Hence $\bar\delta$ is an isomorphism, $\ker\delta=\operatorname{im}\gamma$, and with $\delta$ surjective the displayed sequence is exact. [step 2.1, step 3.1, F2] ∎
