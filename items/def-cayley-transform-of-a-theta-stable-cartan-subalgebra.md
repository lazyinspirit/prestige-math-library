---
id: def-cayley-transform-of-a-theta-stable-cartan-subalgebra
kind: definition
title: Cayley transform of a theta-stable Cartan subalgebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-killing-dual-vector-of-a-root, def-coroot-of-a-lie-algebra-root, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-complexification-of-a-real-lie-algebra, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §7, formulas (6.65)-(6.68) and Proposition 6.69, printed pp. 389-393"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 40, §40.1, and Lecture 41, §41.1, printed pp. 185-191"
landmark: false
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathfrak g_0$ be a
finite-dimensional real semisimple Lie algebra with
Killing form $B_0$ and Cartan involution $\theta$, let
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ be the Cartan decomposition
([[def-cartan-involution-of-a-real-semisimple-lie-algebra]],
[[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]), let
$\mathfrak g=\mathfrak g_0\otimes_{\mathbb R}\mathbb C$ be the complexification
with its Killing form $B$, its conjugation $\sigma$, and the $\mathbb C$-linear
extension of $\theta$, again written $\theta$, so that $\theta\sigma=\sigma\theta$
([[def-complexification-of-a-real-lie-algebra]]). Let $\mathfrak h_0$ be a
$\theta$-stable Cartan subalgebra with
$\mathfrak h_0=\mathfrak t_0\oplus\mathfrak a_0$ and complexification
$\mathfrak h=\mathfrak h_0\oplus i\mathfrak h_0$
([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]]), and let
$\Phi=\Phi(\mathfrak g,\mathfrak h)$ be the root system of $(\mathfrak g,\mathfrak h)$
with root spaces $\mathfrak g_\alpha$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

**Roots of a $\theta$-stable Cartan subalgebra.** For $T\in\mathfrak t_0$ the
operator $\operatorname{ad}_T$ is skew-adjoint and for $A\in\mathfrak a_0$ it is
self-adjoint for the positive definite form $B_\theta$
([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]), so
every root $\alpha\in\Phi$ satisfies $\alpha(\mathfrak t_0)\subseteq i\mathbb R$
and $\alpha(\mathfrak a_0)\subseteq\mathbb R$. By definition
$\theta\alpha:=\alpha\circ\theta^{-1}$, and a root $\alpha$ is

$$\text{real if }\alpha(\mathfrak t_0)=0,\qquad \text{imaginary if }\alpha(\mathfrak a_0)=0,\qquad \text{complex otherwise,}$$

equivalently $\theta\alpha=-\alpha$, $\theta\alpha=\alpha$, or neither. If
$\alpha$ is imaginary then $\theta(\mathfrak g_\alpha)=\mathfrak g_{\theta\alpha}=\mathfrak g_\alpha$,
so $\mathfrak g_\alpha$ is $\theta$-stable; being one-dimensional it satisfies
$\mathfrak g_\alpha\subseteq\mathfrak k$ or $\mathfrak g_\alpha\subseteq\mathfrak p$,
where $\mathfrak k,\mathfrak p$ are the $\pm1$-eigenspaces of $\theta$ in
$\mathfrak g$. The imaginary root $\alpha$ is **compact** in the first case and
**noncompact** in the second.

**The normalizing norm.** Write $\bar Z:=\sigma Z$ and let
$B_\theta(Z,W):=-B(Z,\theta\bar W)$ be the positive definite Hermitian form on
$\mathfrak g$ extending the inner product $B_\theta$ on $\mathfrak g_0$
([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]). Let
$H_\alpha\in\mathfrak h$ be the Killing-dual vector of $\alpha$
([[def-killing-dual-vector-of-a-root]]) and $h_\alpha=2H_\alpha/\alpha(H_\alpha)$
the coroot ([[def-coroot-of-a-lie-algebra-root]]). For a real root
$H_\alpha\in\mathfrak a_0$ and for an imaginary root $H_\alpha\in i\mathfrak t_0$;
in both cases

$$|\alpha|^2:=B_\theta(H_\alpha,H_\alpha)=|B(H_\alpha,H_\alpha)|=|\alpha(H_\alpha)|>0 .$$

**The two Cayley transforms.** Let $\alpha\in\Phi$.

1. *Noncompact imaginary root.* Let $\beta$ be a noncompact imaginary root, so
that $\mathfrak g_\beta\subseteq\mathfrak p$, and choose a nonzero
$E_\beta\in\mathfrak g_\beta$ normalized by

$$B(E_\beta,\sigma E_\beta)=\frac{2}{|\beta|^2}.$$

Such a choice exists: $B(E,\sigma E)=\tfrac12B(E+\sigma E,E+\sigma E)>0$ for
$0\neq E\in\mathfrak g_\beta$ because $E+\sigma E\in\mathfrak p_0\setminus\{0\}$,
and real rescalings $E\mapsto tE$, $t\in\mathbb R^\times$, scale $B(E,\sigma E)$
by $t^2$. The **noncompact-imaginary Cayley transform** of $\mathfrak h_0$
attached to $E_\beta$ is the complex automorphism

$$c_\beta:=\exp\Bigl(\tfrac\pi4\operatorname{ad}(\sigma E_\beta-E_\beta)\Bigr)\in\operatorname{Aut}(\mathfrak g),$$

and the associated subspace is
$c_\beta\langle\mathfrak h_0\rangle:=\mathfrak g_0\cap c_\beta(\mathfrak h)$.

2. *Real root.* Let $\alpha$ be a real root, so that
$\mathfrak g_\alpha$ is $\sigma$-stable, and choose a nonzero
$E_\alpha\in\mathfrak g_\alpha\cap\mathfrak g_0$ normalized by

$$B(E_\alpha,\theta E_\alpha)=-\frac{2}{|\alpha|^2}.$$

Such a choice exists: $\mathfrak g_\alpha\cap\mathfrak g_0\neq0$ because
$\theta\alpha=-\alpha$ gives $\sigma(\mathfrak g_\alpha)=\mathfrak g_\alpha$,
$B(E,\theta E)=\tfrac12B(E+\theta E,E+\theta E)<0$ for
$0\neq E\in\mathfrak g_\alpha\cap\mathfrak g_0$ because
$E+\theta E\in\mathfrak k_0\setminus\{0\}$, and real rescalings scale
$B(E,\theta E)$ by $t^2$. The **real-root Cayley transform** of $\mathfrak h_0$
attached to $E_\alpha$ is the complex automorphism

$$d_\alpha:=\exp\Bigl(i\tfrac\pi4\operatorname{ad}(\theta E_\alpha-E_\alpha)\Bigr)\in\operatorname{Aut}(\mathfrak g),$$

and the associated subspace is
$d_\alpha\langle\mathfrak h_0\rangle:=\mathfrak g_0\cap d_\alpha(\mathfrak h)$.

In both cases the normalizations are exactly the ones that make
$(E,\sigma E,h_\beta)$ for an imaginary root and $(E,-\theta E,h_\alpha)$ for a
real root a root $\mathfrak{sl}_2$-triple: with the identity
$[X,Y]=B(X,Y)H_\alpha$ for $X\in\mathfrak g_\alpha$, $Y\in\mathfrak g_{-\alpha}$
(which follows from invariance of $B$, the nondegeneracy of
$B|_{\mathfrak h}$ and $\alpha(H)=B(H_\alpha,H)$;
[[prop-trace-forms-are-symmetric-and-invariant]],
[[def-killing-form-of-a-finite-dimensional-lie-algebra]]) one gets
$[E_\beta,\sigma E_\beta]=h_\beta$ and $[E_\alpha,-\theta E_\alpha]=h_\alpha$.

**Dependence on the choices.** The transforms depend on the chosen normalized
root vectors $E_\alpha$, and the associated subspaces as well as the two kinds
of transforms are the objects used in
[[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]],
where their geometrical effect is computed for an arbitrary such choice. The
real-root construction and the noncompact-imaginary construction are inverse
to one another in the precise sense recorded there.
