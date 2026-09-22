---
id: thm-shelah-inner-model-all-sets-of-reals-have-baire-property
kind: theorem
title: Every real set in the Shelah inner model has the Baire property
status: draft
origin: pipeline
deps: [thm-shelah-inner-model-satisfies-zf-and-dependent-choice, lem-shelah-homogeneous-truth-has-baire-representatives, lem-solovay-borel-code-and-regularity-absoluteness, def-well-founded-borel-evaluation-codes, lem-cantor-and-baire-sequence-coding, cor-baire-sequence-space-is-homeomorphic-to-the-irrationals, thm-rationals-countable, def-property-of-baire-for-subsets, def-shelah-hereditarily-ordinal-sequence-definable-model]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "Robert M. Solovay, A Model of Set-Theory in Which Every Set of Reals Is Lebesgue Measurable", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf", locator: "Part III, Sections 2.8-2.10, p. 52"}
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Theorem 7.16 and 7.17(3), pp. 43-44"}
---

## Statement

$N$ satisfies: every subset of the reals has the property of Baire. Here the
set-theoretic reals are represented first by Cantor space $2^\omega$; the same
assertion for the usual real line follows through comeagre homeomorphic coding
subspaces. Explicitly, for each real set $A\in N$ there are in $N$ an open set
$U$ and a meagre set $M$ in the relevant space such that
$A\mathbin\triangle U\subseteq M$.

## Facts & Assumptions

**Given:** A set $A\subseteq\mathbb R$ with $A\in N$ in the ambient Shelah extension.

[F1] [[def-shelah-hereditarily-ordinal-sequence-definable-model]]: $A$ has a rank-bounded definition from one $s\in S$ and finitely many ordinals; over the constructible ground this is equivalent to definability from one real and finitely many ordinals.

[F2] [[lem-shelah-homogeneous-truth-has-baire-representatives]]: for every formula with a countable ordinal-sequence parameter, the set of binary reals satisfying it differs from a Borel set by a coded meagre set; its proof places the Boolean truth value in the countably generated parameter-and-Cohen algebra by free amalgamation and transports its Borel reading by automorphism extension.

[F3] [[thm-shelah-inner-model-satisfies-zf-and-dependent-choice]]: $N$ is transitive and has the same reals as the ambient extension.

[F4] [[def-property-of-baire-for-subsets]]: the property of Baire is the existence of an open set differing from the given set by a meagre set.

[F5] [[lem-solovay-borel-code-and-regularity-absoluteness]]: from a Borel code one uniformly obtains an open code and a coded sequence of closed nowhere-dense sets covering their symmetric difference. Its stated evaluation-absoluteness interface is restricted to Solovay intermediate models, so the proof below does not apply that clause to $N$.

[F6] [[lem-cantor-and-baire-sequence-coding]] gives a homeomorphism from $\omega^\omega$ onto the subspace $D\subseteq2^\omega$ of sequences with infinitely many $1$s, with countable complement. [[cor-baire-sequence-space-is-homeomorphic-to-the-irrationals]] identifies $\omega^\omega$ with $\mathbb R\setminus\mathbb Q$, and [[thm-rationals-countable]] makes the omitted rational set countable.

[F7] [[def-well-founded-borel-evaluation-codes]]: a Borel code is a real-coded countable labelled tree whose child relation is well-founded, and evaluation proceeds through leaf, complement and countable-union nodes.

## Proof

1.1 First let $A\subseteq2^\omega$ belong to $N$. By [F1], $A$ has a rank-bounded definition from one parameter $s\in S$ and finitely many ordinals. Applying [F2] to that exact defining formula gives a Borel code $c$ and a coded meagre set $E_0$ in the ambient extension with $A\mathbin\triangle C_c\subseteq E_0$. This uses the claim as written; no open set is read directly from the Borel representative. [F1, F2]

1.2 This proves the all-Baire-property assertion for the standard set-theoretic real space $2^\omega$. To compare with the usual real line, let $D\subseteq2^\omega$ be the infinitely-many-$1$s subspace of [F6]. Its complement is explicitly at most countable and hence meagre; likewise $\mathbb Q$ is countable and meagre in $\mathbb R$. Composing the two homeomorphisms in [F6] gives $$h:D\longrightarrow\mathbb R\setminus\mathbb Q.$$ [F3, F6]

2.1 Apply only the uniform construction clause of [F5] to $c$. It yields an open code $u$ and a coded sequence of closed nowhere-dense sets covering $C_c\mathbin\triangle U_u$. Pair the Borel/open code and both meagre-error sequences into finitely many binary reals. By [F3], every such code real belongs to $N$. [F3, F5, step 1.1]

3.1 We verify the needed absoluteness directly, rather than use the Solovay-intermediate-model clause of [F5]. A code from [F7] is a labelled tree on $\omega^{<\omega}$ and hence a real. If its child relation were ill-founded in either of the two transitive same-real models, DC in $N$ (and Choice in the ambient extension) would produce a descending sequence of nodes, itself a real; therefore well-foundedness agrees. For a shared real $x$, if the two evaluations first differed at a node, an $R$-minimal such node would have agreeing child evaluations, and the leaf, complement and union rules would force agreement at that node, a contradiction. Thus $C_c$ and $U_u$ have identical evaluations on the common reals. For a binary tree code, closedness is immediate and nowhere density is the arithmetic finite-cylinder test: every finite word has an extension above which some finite level has no tree node. That test is absolute, so every displayed closed-nowhere-dense code remains such in $N$. [F3, F7, step 2.1]

4.1 Membership in $A\in N$ is absolute between the transitive model $N$ and the ambient extension. Hence the ambient inclusions from steps 1.1 and 2.1, together with step 3.1, give
$$N\models A\mathbin\triangle U_u\subseteq E_0\cup E_c.$$
Dependent Choice in [F3] supplies Countable Choice, and the two actual coded sequences of nowhere-dense sets therefore witness in $N$ that the right side is meagre. [F3, F4, step 1.1, step 2.1, step 3.1]

5.1 Let $A\subseteq\mathbb R$ belong to $N$. The coded set $A^*=h^{-1}[A\cap(\mathbb R\setminus\mathbb Q)]\subseteq D$, viewed as a subset of $2^\omega$ by putting no points outside $D$, belongs to $N$. Step 4.1 gives $A^*\mathbin\triangle U$ meagre in $2^\omega$. Restrict to the dense subspace $D$ and transport by $h$: the image differs from the relatively open set $h[U\cap D]$ by a meagre subset of $\mathbb R\setminus\mathbb Q$. A nowhere-dense subset of a dense subspace is nowhere dense in the whole space after taking ambient closure, so that error is meagre in $\mathbb R$. Write the relatively open image as $W\cap(\mathbb R\setminus\mathbb Q)$ for an open $W\subseteq\mathbb R$. Adding the countable rational set shows $A\mathbin\triangle W$ is meagre in $\mathbb R$. All maps, countable complements and codes used here are the fixed objects of [F6] and belong to $N$. [F3, F4, F6, step 4.1, step 1.2]

6.1 Since $A$ was arbitrary, steps 4.1 and 5.1 prove the assertion for both the set-theoretic and usual-real conventions, with witnesses in $N$. This is the Statement. [F3, step 4.1, step 5.1] ∎
