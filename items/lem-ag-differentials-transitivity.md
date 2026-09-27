---
id: "lem-ag-differentials-transitivity"
kind: "lemma"
title: "Transitivity sequence for differentials"
status: draft
origin: "pipeline"
deps: ["lem-ag-differentials-universal-property", "thm-right-exactness-of-tensor-products", "lem-ag-polynomial-quotient-differentials"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.131.7"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §§22.2.9–11, pp.577–579"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $A\to B\to C$ be homomorphisms of commutative rings. Then the sequence of $C$-modules

$$C\otimes_B\Omega_{B/A}\longrightarrow\Omega_{C/A}\longrightarrow\Omega_{C/B}\longrightarrow0$$

is exact, where the first map is the extension of scalars of $\mathrm{d}_{B/A}$ along $B\to C$ (so that $c\otimes\mathrm{d}b\mapsto c\,\mathrm{d}\bigl(\text{image of }b\bigr)$) and the second is induced by the universal property of $\Omega_{C/A}$ from the $B$-derivation $\mathrm{d}_{C/B}$. The first arrow is not asserted injective, and in general it is not injective.

## Facts & Assumptions

**Given:** Ring homomorphisms $A\to B\to C$ of commutative rings, with universal derivations $\mathrm{d}_{B/A}$ of $\Omega_{B/A}$, $\mathrm{d}_{C/A}$ of $\Omega_{C/A}$ and $\mathrm{d}_{C/B}$ of $\Omega_{C/B}$.

[F1] [[lem-ag-differentials-universal-property]]: for a ring map $R\to S$ and an $S$-module $M$, $g\mapsto g\circ\mathrm{d}_{S/R}$ is an isomorphism $\operatorname{Hom}_S(\Omega_{S/R},M)\cong\operatorname{Der}_R(S,M)$, for the pairs $(A,B)$, $(A,C)$ and $(B,C)$ alike.

[F2] [[thm-right-exactness-of-tensor-products]]: if $A'\to B'\to C'\to0$ is exact, then $A'\otimes_RN\to B'\otimes_RN\to C'\otimes_RN\to0$ is exact; in particular an extension of scalars of a surjection is surjective and $C\otimes_B\Omega_{B/A}$ is generated as a $C$-module by the elements $c\otimes\mathrm{d}b$.

[F3] [[lem-ag-polynomial-quotient-differentials]]: for $P=A[x]$, $\Omega_{P/A}$ is free on $\mathrm{d}x$, and for $B=P/I$ the quotient formula $\Omega_{B/A}\cong(B\otimes_P\Omega_{P/A})/\langle1\otimes\mathrm{d}f:f\in I\rangle$ holds.

## Proof

1.1 The second map exists by [F1]: $\mathrm{d}_{C/B}\colon C\to\Omega_{C/B}$ is in particular an $A$-derivation, so it induces a $C$-linear $\pi\colon\Omega_{C/A}\to\Omega_{C/B}$ with $\pi(\mathrm{d}_{C/A}c)=\mathrm{d}_{C/B}c$. It is surjective because the elements $\mathrm{d}_{C/B}c$ generate $\Omega_{C/B}$. The composite $\pi\circ(\text{first map})$ is zero: on the generators $c\otimes\mathrm{d}b$ of $C\otimes_B\Omega_{B/A}$ the first map sends $c\otimes\mathrm{d}b$ to $c\,\mathrm{d}_{C/A}b$, and $\pi$ sends that to $c\,\mathrm{d}_{C/B}b=0$, since $b$ lies in the image of $B$ so that $b$ is killed by the universal $B$-derivation of $C$. Hence $\operatorname{im}(\text{first map})\subseteq\ker\pi$. [F1, F2, given]

2.1 For the reverse inclusion put $Q:=\operatorname{coker}\bigl(C\otimes_B\Omega_{B/A}\to\Omega_{C/A}\bigr)$, with quotient map $q\colon\Omega_{C/A}\to Q$. The $A$-derivation $C\to Q$, $c\mapsto q(\mathrm{d}_{C/A}c)$, kills $B$, since $q$ kills the image of the first map; hence by [F1] it induces a $C$-linear $\beta\colon\Omega_{C/B}\to Q$ with $\beta(\mathrm{d}_{C/B}c)=q(\mathrm{d}_{C/A}c)$. The map $\pi$ of step 1.1 kills the image of the first map, so it factors as $\pi=\gamma\circ q$ for a $C$-linear $\gamma\colon Q\to\Omega_{C/B}$, and then $\gamma\beta$ is a $C$-linear endomorphism of $\Omega_{C/B}$ fixing the generators $\mathrm{d}_{C/B}c$, so $\gamma\beta=\mathrm{id}_{\Omega_{C/B}}$. Symmetrically $\beta\gamma$ is a $C$-linear endomorphism of $Q$, and the elements $q(\mathrm{d}_{C/A}c)$ generate $Q$ because the elements $\mathrm{d}_{C/A}c$ generate $\Omega_{C/A}$ and $q$ is onto, so from $\beta\gamma(q(\mathrm{d}_{C/A}c))=\beta(\pi(\mathrm{d}_{C/A}c))=\beta(\mathrm{d}_{C/B}c)=q(\mathrm{d}_{C/A}c)$ we get $\beta\gamma=\mathrm{id}_Q$. Thus $\gamma$ is injective, and for $\omega\in\ker\pi$ we get $\gamma(q(\omega))=\pi(\omega)=0$, hence $q(\omega)=0$ and $\omega\in\ker q=\operatorname{im}(\text{first map})$. Hence $\ker\pi\subseteq\operatorname{im}(\text{first map})$ and, with step 1.1, $\ker\pi=\operatorname{im}(\text{first map})$; moreover $Q\cong\Omega_{C/B}$. [step 1.1, F1, algebra]

3.1 The first arrow is not injective in general: take $A=k$ a field, $B=k[x]$, $C=k$ with $x\mapsto0$. By [F3] the source is $C\otimes_B\Omega_{B/A}\cong(k[x]/(x))\otimes_{k[x]}k[x]\,\mathrm{d}x\cong k\,\mathrm{d}x\ne0$, while the target is $\Omega_{C/A}=\Omega_{k/k}=0$, the universal derivation of a ring over itself being zero. So the first map is zero on a nonzero module, and with steps 1.1 and 2.1 the asserted sequence is exact with a noninjective first arrow. [step 2.1, F3, given, algebra] ∎
