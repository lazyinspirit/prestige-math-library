---
id: def-theta-stable-cartan-subalgebra-and-compact-split-parts
kind: definition
title: Theta-stable Cartan subalgebras and their compact and split parts
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-cartan-subalgebra-of-a-lie-algebra, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §6, discussion following Proposition 6.59 and the remarks after Proposition 6.60, printed pp. 386-387"
landmark: false
---

## Definition

Let $\mathfrak g_0$ be a finite-dimensional real semisimple Lie algebra with
Cartan involution $\theta$ and Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$
([[def-cartan-involution-of-a-real-semisimple-lie-algebra]],
[[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]). A Cartan
subalgebra $\mathfrak h_0\subseteq\mathfrak g_0$
([[def-cartan-subalgebra-of-a-lie-algebra]]) is **$\theta$-stable** if
$\theta(\mathfrak h_0)\subseteq\mathfrak h_0$; since $\theta$ is an
involution, this is equivalent to $\theta(\mathfrak h_0)=\mathfrak h_0$.

Let $\mathfrak h_0$ be a $\theta$-stable Cartan subalgebra. The restrictions
of $\theta$ to $\mathfrak h_0$ is an involutive linear map of $\mathfrak h_0$
preserving the bracket, so the two subspaces

$$\mathfrak t_0:=\mathfrak h_0\cap\mathfrak k_0=\{X\in\mathfrak h_0:\theta X=X\},\qquad \mathfrak a_0:=\mathfrak h_0\cap\mathfrak p_0=\{X\in\mathfrak h_0:\theta X=-X\}$$

are the $+1$- and $-1$-eigenspaces of $\theta|_{\mathfrak h_0}$ and

$$\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$$

because every $X\in\mathfrak h_0$ decomposes as
$X=\tfrac12(X+\theta X)+\tfrac12(X-\theta X)$ with both summands in
$\mathfrak h_0$. Here $\mathfrak t_0$ is the **compact part** and
$\mathfrak a_0$ the **split part** of $\mathfrak h_0$; the dimensions
$\dim_{\mathbb R}\mathfrak t_0$ and $\dim_{\mathbb R}\mathfrak a_0$ are the
**compact dimension** and the **noncompact dimension** of $\mathfrak h_0$.
The Cartan subalgebra $\mathfrak h_0$ is **maximally compact** if its compact
dimension is maximal among the $\theta$-stable Cartan subalgebras of
$\mathfrak g_0$, and **maximally noncompact**, or **maximally split**, if its
noncompact dimension is maximal. Both maxima exist because
$0\le\dim_{\mathbb R}\mathfrak t_0\le\dim_{\mathbb R}\mathfrak k_0$ and
$0\le\dim_{\mathbb R}\mathfrak a_0\le\dim_{\mathbb R}\mathfrak p_0$ for every
$\theta$-stable Cartan subalgebra, the two dimensions being nonnegative
integers bounded by the fixed dimensions of the summands of the Cartan
decomposition; the set of $\theta$-stable Cartan subalgebras is nonempty,
since every Cartan subalgebra of $\mathfrak g_0$ is conjugate to a
$\theta$-stable one.

The decomposition is compatible with the bracket in the following sense.
Since $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$,
$[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$ and
$[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$
([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]) and
since $\mathfrak h_0$ is closed under brackets, one has

$$[\mathfrak t_0,\mathfrak t_0]\subseteq\mathfrak t_0,\qquad [\mathfrak t_0,\mathfrak a_0]\subseteq\mathfrak a_0,\qquad [\mathfrak a_0,\mathfrak a_0]\subseteq\mathfrak t_0 .$$

Moreover the two summands are orthogonal for the Killing form $B$, and the
restriction of $B$ is negative definite on $\mathfrak t_0$ and positive
definite on $\mathfrak a_0$
([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]), so
$B_\theta(X,Y)=-B(X,\theta Y)$ is a positive definite inner product on
$\mathfrak h_0$ for which $\mathfrak t_0$ and $\mathfrak a_0$ are orthogonal.

The integers $\dim_{\mathbb R}\mathfrak t_0$ and
$\dim_{\mathbb R}\mathfrak a_0$ are invariants of the conjugacy class of
$\mathfrak h_0$. Indeed, let an automorphism $\alpha$ of $\mathfrak g_0$ carry
$\mathfrak h_0$ onto another $\theta$-stable Cartan subalgebra
$\mathfrak h_0'=\mathfrak t_0'\oplus\mathfrak a_0'$, and for $X\in\mathfrak h_0$
write $\alpha X=Y+Z$ with $Y\in\mathfrak t_0'$, $Z\in\mathfrak a_0'$. Since
$B$ is preserved by $\alpha$ and is $\theta$-invariant, while
$\mathfrak t_0'$ and $\mathfrak a_0'$ are $\theta$-eigenspaces for the
eigenvalues $+1$ and $-1$, the two summands are orthogonal, so
$B(\alpha X,\alpha X)=B(X,X)=B(Y,Y)+B(Z,Z)$ with $B(Y,Y)\le0$ and
$B(Z,Z)\ge0$. If $X\in\mathfrak t_0$ then $B(X,X)\le0$, and
$B(Z,Z)\ge0$ then forces $B(Z,Z)=0$, that is $Z=0$: hence
$\alpha(\mathfrak t_0)\subseteq\mathfrak t_0'$. The same argument applied to
$\alpha^{-1}$ gives $\alpha^{-1}(\mathfrak t_0')\subseteq\mathfrak t_0$, so
$\dim\mathfrak t_0=\dim\mathfrak t_0'$ and $\alpha(\mathfrak t_0)=\mathfrak t_0'$.
If now $X\in\mathfrak a_0$, then $B(\alpha X,\alpha(\mathfrak t_0))=B(X,\mathfrak t_0)=0$
because $\mathfrak k_0$ and $\mathfrak p_0$ are orthogonal for $B$ and
$\alpha(\mathfrak t_0)=\mathfrak t_0'$; with $\alpha X=Y+Z$ as above and
$B(\mathfrak t_0',\mathfrak a_0')=0$ this gives $B(Y,\mathfrak t_0')=0$, so
$Y=0$ by the negative definiteness of $B$ on $\mathfrak t_0'$ and
$\alpha(\mathfrak a_0)\subseteq\mathfrak a_0'$. Applying the last step to
$\alpha^{-1}$ as well gives $\dim\mathfrak a_0=\dim\mathfrak a_0'$ and
$\alpha(\mathfrak a_0)=\mathfrak a_0'$; thus the compact and noncompact
dimensions are invariants of the conjugacy class of $\mathfrak h_0$. This is the sense in which the
compact and noncompact dimensions are used in the classification of the
$\theta$-stable Cartan subalgebras. The maximality criteria in terms of the
roots of $(\mathfrak g,\mathfrak h)$ and in terms of maximal abelian
subspaces of $\mathfrak k_0$ and $\mathfrak p_0$ are established in
[[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]].
