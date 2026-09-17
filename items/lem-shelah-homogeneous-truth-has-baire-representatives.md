---
id: lem-shelah-homogeneous-truth-has-baire-representatives
kind: lemma
title: Strongly homogeneous truth has Baire representatives
status: draft
origin: pipeline
deps: [thm-shelah-ch-omega-one-sweet-construction, lem-shelah-real-name-capture-and-coded-meagre-unions, thm-forcing-theorem, def-property-of-baire-for-subsets, lem-solovay-borel-code-and-regularity-absoluteness, thm-shelah-sweet-partial-isomorphism-extension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Main Lemma 7.14(b)-(c), p. 42"}
    - {title: "Robert M. Solovay, A Model of Set-Theory in Which Every Set of Reals Is Lebesgue Measurable", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf", locator: "Part III, Sections 1.3-1.6, pp. 41-42"}
---

## Statement

Let $B$ be the final Boolean algebra of the Shelah construction. For every formula
$\varphi(x,s,\vec\gamma)$ with a countable ordinal-sequence parameter $s$ and
finitely many ordinal parameters $\vec\gamma$, the set of reals $x$ for which the
$B$-generic extension satisfies $\varphi(x,s,\vec\gamma)$ differs from a Borel
set by a meagre set. In particular this holds for real-and-ordinal parameters.
The Borel code and meagre-error code belong to the final extension.

## Facts & Assumptions

**Given:** The final algebra $B$ of the CH-length construction with generic $G$, a formula $\varphi$, a countable ordinal-sequence parameter $s$, ordinal parameters $\vec\gamma$, and the set $A=\{x:\varphi(x,s,\vec\gamma)\text{ holds in }V[G]\}$.

[F1] [[lem-shelah-real-name-capture-and-coded-meagre-unions]]: $s$ and $\vec\gamma$ are captured over a countably generated complete subalgebra $B_0\subseteq B$ built from their deciding antichains.

[F2] [[thm-shelah-ch-omega-one-sweet-construction]] with [[thm-shelah-sweet-partial-isomorphism-extension]]: every complete isomorphism between countably generated complete subalgebras of $B$ extends to an automorphism of $B$, and every free-amalgamation task of the construction is answered at a later stage, so the automorphism group of $B$ over $B_0$ acts transitively on the Cohen conditions over $B_0$.

[F3] [[def-property-of-baire-for-subsets]]: a set has the Baire property when it differs from an open set by a meagre set.

[F4] [[lem-solovay-borel-code-and-regularity-absoluteness]]: Borel codes evaluate identically on shared reals and coded category witnesses transfer between models with the same reals.

[F5] [[thm-forcing-theorem]]: truth and forcing agree for generic filters, so the Cohen-generic points determine the truth value of $\varphi$ at the canonical Cohen name.

## Proof

1.1 Let $B_0\subseteq B$ be a countably generated complete subalgebra capturing $s$, the ordinal parameters and the Boolean value of the statement $\varphi(\dot c,s,\vec\gamma)$ for the canonical Cohen name $\dot c$ over $B_0$: this is possible by [F1], since the value and the parameters are determined by countably many antichains, and the complete subalgebra they generate is countably generated. [F1]

1.2 Let $\mathbb C$ be the Cohen algebra over $B_0$ of finite binary strings, with generic real $c$. If two complete embeddings $e_1,e_2$ of $B_0*\mathbb C$ into $B$ agree on $B_0$, then their ranges are countably generated complete subalgebras of $B$ and $e_2\circ e_1^{-1}$ is a complete isomorphism between them, which the isomorphism-extension clause of [F2] extends to an automorphism of $B$. Consequently the automorphism group of $B$ fixing $B_0$ acts transitively on the conditions of $\mathbb C$ above any fixed finite condition, and the truth value of $\varphi(\dot c,s,\vec\gamma)$ is invariant under that group. [F2]

2.1 Let $U=\bigcup\{[p]:p\in\mathbb C\text{ and }p\Vdash\varphi(\dot c,s,\vec\gamma)\}$, an open subset of Cantor space, where $[p]$ is the clopen cylinder of reals extending the finite string $p$. By step 1.2 the Boolean value of the statement depends only on the corresponding Cohen condition, so $U$ is exactly the set of reals whose finite initial segments force $\varphi$; $U$ is open and has a Borel code definable from the ground-model data of the construction. [F2, F5, step 1.2]

3.1 The error is meagre: $A\setminus U$ consists of reals that are not Cohen-generic over the model $V[s]$ containing the parameters. Indeed, if $x$ is Cohen-generic over $V[s]$ with corresponding generic filter $H\subseteq\mathbb C$, then the truth lemma gives $V[G]\models\varphi(x,s,\vec\gamma)$ if and only if some $p\in H$ forces $\varphi(\dot c,s,\vec\gamma)$; by step 2.1 that is equivalent to $x\in U$, because the cylinders form a basis and $H$ meets exactly the conditions compatible with $x$. Hence $A\mathbin\triangle U$ is contained in the set $M$ of reals that are not Cohen-generic over $V[s]$. [F5, step 2.1]

4.1 The set $M$ is meagre and its code belongs to $V[s]$: for each dense subset $D$ of $\mathbb C$ lying in $V[s]$, the set of reals avoiding all cylinders $[p]$ with $p\in D$ is closed nowhere dense, and a real is Cohen-generic over $V[s]$ exactly when it avoids the union of these sets over a countable family of dense sets in $V[s]$; a canonical countable family is supplied by the definability of $\mathbb C$ over $V[s]$. Thus $M$ is a countable union of closed nowhere-dense sets, hence meagre, and its code together with the code of $U$ lies in the final extension. Since $A=U\mathbin\triangle(A\mathbin\triangle U)$ and $A\mathbin\triangle U\subseteq M$, the set $A$ differs from the Borel set $U$ by a meagre set. [F3, F4, step 3.1]

5.1 Real-and-ordinal parameters are the special case in which $s$ is the binary sequence of a real: a real is a countable sequence of ordinals, so the preceding argument applies verbatim, and the same Borel and meagre codes are obtained. [F1, step 4.1]

6.1 The steps above exhibit a Borel set $U$ and a coded meagre set $M$ in the final extension with $A\mathbin\triangle U\subseteq M$, for every formula with a countable ordinal-sequence parameter; this is the Statement. [step 4.1, step 5.1] ∎
