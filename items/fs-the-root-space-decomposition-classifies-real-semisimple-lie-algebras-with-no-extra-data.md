---
id: fs-the-root-space-decomposition-classifies-real-semisimple-lie-algebras-with-no-extra-data
kind: false-statement
title: The root-space decomposition classifies real semisimple Lie algebras with no extra data
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-special-linear-lie-algebra-sl-two, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-semisimple-and-nilpotent-endomorphisms, def-simple-semisimple-and-reductive-lie-algebras, def-derivation-of-a-lie-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §6 (real forms and restricted roots)"
landmark: false
proof_strategy: direct
---

## Statement

The root-space decomposition of the complexification of a real semisimple Lie
algebra determines that real Lie algebra up to isomorphism, with no further
data.

## Facts & Assumptions

**Given:** The complexification of a real Lie algebra $\mathfrak g_0$ is $\mathfrak g_0\otimes_{\mathbb R}\mathbb C$ with the complex-bilinear bracket; an element $x$ is nilpotent when $\operatorname{ad}_x$ is a nilpotent endomorphism, as in [[def-semisimple-and-nilpotent-endomorphisms]] with $\operatorname{ad}_x(y)=[x,y]$ from [[def-derivation-of-a-lie-algebra]]; a real Lie algebra is semisimple when its radical vanishes ([[def-simple-semisimple-and-reductive-lie-algebras]]); and $\mathfrak{sl}_2(\mathbb C)$ is the algebra of [[def-special-linear-lie-algebra-sl-two]], whose root-space decomposition over the Cartan subalgebra $\mathbb Ch$ is the one supplied by [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]].

## Refutation

**Proof technique:** explicit witness.

1.1 Define the two real Lie algebras $\mathfrak{sl}_2(\mathbb R)=\{A\in M_2(\mathbb R):\operatorname{tr}A=0\}$ and $\mathfrak{su}_2=\{A\in M_2(\mathbb C):A^*=-A,\ \operatorname{tr}A=0\}$, each under the commutator bracket. Both are closed under the bracket and are three-dimensional over $\mathbb R$: $\mathfrak{sl}_2(\mathbb R)$ has basis $e,f,h$ as in the special linear case, while the general element of $\mathfrak{su}_2$ is $\begin{pmatrix}i\alpha&\beta\\-\overline\beta&-i\alpha\end{pmatrix}$ with $\alpha\in\mathbb R$, $\beta\in\mathbb C$. [given, algebra]

2.1 Both complexify to $\mathfrak{sl}_2(\mathbb C)$. For $\mathfrak{sl}_2(\mathbb R)$ this is clear from the real basis $e,f,h$. For $\mathfrak{su}_2$, the three real matrices $\begin{pmatrix}i&0\\0&-i\end{pmatrix}$, $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $\begin{pmatrix}0&i\\i&0\end{pmatrix}$ belong to $\mathfrak{su}_2$ and are linearly independent over $\mathbb C$, so the complex span of $\mathfrak{su}_2$ is the three-dimensional space of traceless complex matrices. Hence both real algebras have the same complexification and therefore the same root-space decomposition over $\mathbb Ch$. [given, step 1.1, algebra]

2.2 They are not isomorphic: an isomorphism of real Lie algebras preserves nilpotent elements, since it conjugates adjoint operators. The element $e=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ is a nonzero nilpotent element of $\mathfrak{sl}_2(\mathbb R)$, because $\operatorname{ad}_e$ is nilpotent and nonzero. On the other hand $\mathfrak{su}_2$ has no nonzero nilpotent element: every $A\in\mathfrak{su}_2$ is normal, hence diagonalisable over $\mathbb C$ with purely imaginary eigenvalues $i\theta_1,i\theta_2$, and the eigenvalues of $\operatorname{ad}_A$ on the complexification are the differences $i(\theta_j-\theta_k)$; if all of them vanished then $\theta_1=\theta_2$, so $A$ would be a scalar multiple of the identity and then $\operatorname{tr}A=0$ forces $A=0$. [given, step 1.1, algebra]

3.1 Consequently the common complexification and its root-space decomposition do not determine the real semisimple Lie algebra: $\mathfrak{sl}_2(\mathbb R)$ and $\mathfrak{su}_2$ are non-isomorphic real Lie algebras with the same complexification $\mathfrak{sl}_2(\mathbb C)$, whose root decomposition is that of the previous facts. Real forms therefore require extra data, and the statement is false. [given, step 2.1, step 2.2, algebra] ∎
