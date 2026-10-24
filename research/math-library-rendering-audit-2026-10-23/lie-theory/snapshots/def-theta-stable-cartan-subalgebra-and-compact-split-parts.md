---
id: def-theta-stable-cartan-subalgebra-and-compact-split-parts
kind: definition
title: Theta-stable Cartan subalgebras and their compact and split parts
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-cartan-subalgebra-of-a-lie-algebra, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, thm-sylvesters-law-of-inertia]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §6, discussion following Proposition 6.59 and the remarks after Proposition 6.60, printed pp. 386-387"
landmark: false
verification:
  audited: 2026-09-22
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

Let $\mathfrak h_0$ be a $\theta$-stable Cartan subalgebra. The restriction
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
noncompact dimension is maximal. Whenever the collection of $\theta$-stable
Cartan subalgebras is nonempty, both maxima exist because
$0\le\dim_{\mathbb R}\mathfrak t_0\le\dim_{\mathbb R}\mathfrak k_0$ and
$0\le\dim_{\mathbb R}\mathfrak a_0\le\dim_{\mathbb R}\mathfrak p_0$ for every
$\theta$-stable Cartan subalgebra, the two dimensions being nonnegative
integers bounded by the fixed dimensions of the summands of the Cartan
decomposition. In particular, once a $\theta$-stable Cartan subalgebra has
been specified, the collection is nonempty and each of these bounded sets of
integer dimensions has a largest member. This conditional attainment argument
does not assert the existence of a Cartan subalgebra.

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
$\mathfrak h_0'=\mathfrak t_0'\oplus\mathfrak a_0'$. Every Lie-algebra
automorphism preserves the Killing form, so $\alpha|_{\mathfrak h_0}$ is an
isometry from $B|_{\mathfrak h_0}$ to $B|_{\mathfrak h_0'}$. The displayed
orthogonal decompositions show that the negative and positive inertia indices
of these two restrictions are respectively
$(\dim\mathfrak t_0,\dim\mathfrak a_0)$ and
$(\dim\mathfrak t_0',\dim\mathfrak a_0')$. Sylvester's law of inertia
([[thm-sylvesters-law-of-inertia]]) therefore gives
$\dim\mathfrak t_0=\dim\mathfrak t_0'$ and
$\dim\mathfrak a_0=\dim\mathfrak a_0'$. Thus the compact and noncompact
dimensions are invariants of the conjugacy class of $\mathfrak h_0$. This is
the sense in which the compact and noncompact dimensions are used in the
classification of the $\theta$-stable Cartan subalgebras.
