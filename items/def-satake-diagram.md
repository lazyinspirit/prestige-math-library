---
id: def-satake-diagram
kind: definition
title: Satake diagram
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-maximal-split-abelian-subspace-and-real-rank, def-cayley-transform-of-a-theta-stable-cartan-subalgebra, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification, def-positive-system-and-base-of-simple-roots, def-restricted-root-and-restricted-root-space, thm-restricted-root-space-decomposition, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-vogan-diagram]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI §12, Problem 7(a)-(e), printed p.427: compatible positivity and the white-root involution modulo imaginary simple roots; pairing proof supplied below"
landmark: false
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $\mathfrak g_0$ be a finite-dimensional real semisimple Lie algebra with
Cartan involution $\theta$ and Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$
([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]]). Let
$\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ be a $\theta$-stable Cartan
subalgebra of $\mathfrak g_0$ whose split part $\mathfrak a_0$ is a maximal
abelian subspace of $\mathfrak p_0$; such an $\mathfrak h_0$ is
**maximally split**, or maximally noncompact
([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]],
[[def-maximal-split-abelian-subspace-and-real-rank]]). Write
$\mathfrak h=\mathfrak h_0\oplus i\mathfrak h_0$ for the complexification,
$\mathfrak t=\mathfrak t_0\oplus i\mathfrak t_0$ and
$\mathfrak a=\mathfrak a_0\oplus i\mathfrak a_0$, so that
$\mathfrak h=\mathfrak t\oplus\mathfrak a$, and let
$\Phi=\Phi(\mathfrak g,\mathfrak h)$ be the root system of
$(\mathfrak g,\mathfrak h)$, with root spaces $\mathfrak g_\alpha$; the
$\mathbb C$-linear extension of $\theta$ is again written $\theta$.

**Root types.** By
[[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]] every root
$\alpha\in\Phi$ satisfies $\alpha(\mathfrak t_0)\subseteq i\mathbb R$ and
$\alpha(\mathfrak a_0)\subseteq\mathbb R$, and $\alpha$ is
$$\text{real if }\alpha|_{\mathfrak t_0}=0,\qquad \text{imaginary if }\alpha|_{\mathfrak a_0}=0,\qquad \text{complex otherwise};$$
equivalently $\theta\alpha=-\alpha$, $\theta\alpha=\alpha$, or neither, where
$\theta\alpha=\alpha\circ\theta^{-1}$. In particular an imaginary root is
exactly a root whose restriction to $\mathfrak a_0$ vanishes, and $\theta$
permutes the three classes of roots. An imaginary root has $\theta$-stable
root space $\mathfrak g_\alpha$, which is one-dimensional
([[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]]),
so it lies either
in the $+1$-eigenspace $\mathfrak k$ of $\theta$ or in the $-1$-eigenspace
$\mathfrak p$; the imaginary root is **compact** in the first case and
**noncompact** in the second. Because $\mathfrak h_0$ is maximally split, no
noncompact imaginary root of $(\mathfrak g,\mathfrak h)$ exists: a noncompact
imaginary root admits a noncompact-imaginary Cayley transform, which produces
a $\theta$-stable Cartan subalgebra whose noncompact dimension is larger by
one ([[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]],
assertion 2).

**Compatible positive systems.** A positive system $\Phi^{+}$ of $\Phi$ and
its base $\Delta$ are as in
[[def-positive-system-and-base-of-simple-roots]]. Let
$\Sigma=\Sigma(\mathfrak g_0,\mathfrak a_0)$ be the finite set of restricted
roots ([[def-restricted-root-and-restricted-root-space]],
[[thm-restricted-root-space-decomposition]]). A restricted positive system
means $\Sigma^+=\{\lambda\in\Sigma:\lambda(H)>0\}$ for a regular
$H\in\mathfrak a_0$, with $\lambda(H)\ne0$ for all $\lambda\in\Sigma$.
This definition also applies when the restricted root system is nonreduced.
The nonzero restrictions of complex roots are exactly $\Sigma$: restriction
of the complex root decomposition groups its weight spaces according to
$\alpha|_{\mathfrak a_0}$, while complexification of a real restricted-weight
space gives the same joint eigenspace, since its eigenvalue equations have
real coefficients
([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]],
[[def-restricted-root-and-restricted-root-space]]).

A positive system $\Phi^+$ is **compatible** with $\Sigma^+$ if
$$\alpha\in\Phi^+,\quad\alpha|_{\mathfrak a_0}\ne0\quad\Longrightarrow\quad\alpha|_{\mathfrak a_0}\in\Sigma^+.$$
Given the specified $\Sigma^+$, take a regular $H$ defining it. Choose
$T\in\mathfrak t_0$ with $\alpha(T)\ne0$ for every imaginary root; the
finite-union lemma gives such a $T$ because those restrictions are nonzero
([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).
Use lexicographic positivity of
$(\alpha(H),\operatorname{Im}\alpha(T))$.
To see that this is a positive system in the stated Euclidean sense, choose
$\epsilon>0$ so small that
$|\epsilon\operatorname{Im}\alpha(T)|<|\alpha(H)|$ for every root with
$\alpha(H)\ne0$. There are only finitely many such inequalities, so they can
all hold. The regular vector $H-i\epsilon T\in\mathfrak a_0\oplus i\mathfrak t_0$
then gives exactly those signs, since
$\alpha(H-i\epsilon T)=\alpha(H)+\epsilon\operatorname{Im}\alpha(T)$.
The real positive Killing space here is justified in step 2.1 of
[[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]].
If a relevant root family is empty, choose the corresponding vector to be
zero and omit its inequalities.

**The Satake diagram.** Let $\Phi^{+}$ be a positive system of $\Phi$
compatible with a positive system $\Sigma^{+}$ of $\Sigma$, with base $\Delta$.
The **Satake diagram** of the quadruple
$(\mathfrak g_0,\mathfrak h_0,\Sigma^{+},\Phi^{+})$ is the Dynkin diagram of
$\Phi$ relative to $\Delta$
([[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]) together
with the following two decorations of its vertices:

- **Colouring.** A vertex $\alpha\in\Delta$ is **black** if it is an
  imaginary simple root, that is, if $\alpha|_{\mathfrak a_0}=0$, and
  **white** otherwise, that is, if $\alpha|_{\mathfrak a_0}\ne0$. Since
  $\mathfrak h_0$ is maximally split, every imaginary root of
  $(\mathfrak g,\mathfrak h)$ is compact, so the black vertices are exactly
  the compact imaginary simple roots.
- **Arrows.** Two distinct white vertices $\alpha,\beta\in\Delta$ are joined
  by a **Satake arrow** when their restrictions to $\mathfrak a_0$ agree:
  $$\alpha|_{\mathfrak a_0}=\beta|_{\mathfrak a_0}\,\bigl(\ne0\bigr).$$
  In the standard drawing a Satake arrow is curved or drawn in a distinct
  style, so that it is not confused with the arrows attached to multiple
  edges of the underlying Dynkin diagram.

Here the equal-restriction relation really is a pairing. We give the
linear-algebra verification. Put $\Delta_0=\{\delta\in\Delta:\delta|_{\mathfrak a_0}=0\}$,
$V_0=\operatorname{span}_{\mathbb R}\Delta_0$, and $s=-\theta$ on the real
root space. The map $s$ is a root-system involution, acts as minus identity
on $V_0$, and preserves restrictions to $\mathfrak a_0$. For a white simple
root $\alpha$, $s\alpha$ is positive, since its nonzero restriction is the
same positive restricted root as that of $\alpha$. The simple-root
expansion theorem
([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]])
therefore makes the induced matrix of $s$ on the quotient by $V_0$
nonnegative integral in the basis of white simple-root classes. Its inverse
is itself and is also nonnegative. Such an invertible matrix permutes the
extreme rays of the nonnegative coordinate cone: those rays are exactly the
coordinate axes, since a vector with two positive coordinates splits into two
nonproportional nonnegative vectors. Thus the matrix permutes axes up to
positive scalars. The matrix and its inverse are integral, so each scalar
and its reciprocal are positive integers, forcing the scalar to be one.
Consequently there is an involution $\alpha\mapsto\alpha'$ of the white
simple roots such that $s\alpha-\alpha'\in V_0$.

It follows that $\alpha'$ and $\alpha$ have equal restriction. Conversely,
if white $\alpha,\beta$ have equal restriction, then
$\alpha+s\alpha=\beta+s\beta$: half of either sum is the corresponding
functional on $\mathfrak a_0$, extended by zero on $i\mathfrak t_0$.
Modulo $V_0$, equality reads
$[\alpha]+[\alpha']=[\beta]+[\beta']$ in the basis of white classes.
This forces the two unordered orbits, with repetitions for a fixed point,
to be the same. Hence a nonzero restriction is shared by at most two white
simple roots, and the distinct pair is precisely a two-element orbit of
this involution. This proves the assertion behind the arrow drawing, without
identifying the pairing with the possibly base-nonpreserving map $-\theta$
itself.

**Isomorphism and equivalence.** Two Satake diagrams are **equivalent** if
they are isomorphic as decorated Dynkin diagrams: a vertex bijection
preserves edge multiplicities, edge arrows, black and white colors, and
Satake pairs. In based-root-system language the isomorphism preserves roots
and Cartan integers; arbitrary absolute length scales on separate components
are not part of these data.

A formally colored and paired finite-type Dynkin diagram is called
**admissible Satake data** if it occurs from a quadruple as above; the word
Satake diagram is reserved here for these admissible data. This definition
does not assert that arbitrary black subsets and pairings are realizable.
In particular the admissibility condition for Satake data differs from the
unrestricted fixed-vertex painting in an abstract Vogan diagram
([[def-vogan-diagram]]).

A change of compatible positive system on a realized quadruple requires
recomputing colors and pairs using the actual restriction map. It is not an
operation specified by an arbitrary abstract decoration. Independence of the
resulting equivalence class from the choices, and its relation to the Vogan
classification, are the assertions of
[[thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications]].
They are not assumed in this definition. For $\mathfrak a_0=0$ all vertices
are black and no Satake arrows occur; for the zero algebra the whole diagram
is empty.
