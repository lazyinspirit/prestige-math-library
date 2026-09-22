---
id: def-roots-of-a-compact-connected-lie-group
kind: definition
title: Roots of a compact connected Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, def-character-and-cocharacter-lattices-of-a-torus, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-surjects-onto-the-punctured-plane, prop-adjoint-is-a-smooth-lie-group-representation, thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, thm-continuous-homomorphisms-between-lie-groups-are-smooth, thm-the-differential-of-adjoint-is-ad, prop-exponential-map-is-natural-for-lie-group-homomorphisms, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, prop-adjoint-exponential-identity, thm-conjugacy-of-maximal-tori]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §6, the root system Φ(g,t) and the real form t_R = i t_0"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§§20–21 and Appendix R"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be a compact
connected Lie group with maximal torus $T$, and put $\mathfrak g=\operatorname{Lie}G$,
$\mathfrak t=\operatorname{Lie}T$. Complexification is over $\mathbb R$.

**Circle convention.** The lattice definition
[[def-character-and-cocharacter-lattices-of-a-torus]] uses $\mathbb R/\mathbb Z$.
Here its character values are transported to the multiplicative complex circle
$\mathbb U=\{z\in\mathbb C:|z|=1\}$ by
$$E:\mathbb R/\mathbb Z\longrightarrow\mathbb U,\qquad [r]\longmapsto e^{2\pi i r}.$$
The exponential addition law makes $E$ a homomorphism
([[thm-complex-exponential-addition-and-real-extension]]), and its kernel is
trivial by [[thm-kernel-and-fibres-of-complex-exponential]]. The modulus formula
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] and
surjectivity of the complex exponential
[[thm-complex-exponential-surjects-onto-the-punctured-plane]] show that its image
is all of $\mathbb U$: a logarithm of a unit-modulus number has real part zero.
Thus $E$ is a continuous bijection from a compact circle to a Hausdorff circle,
with continuous inverse. It identifies addition in $\mathbb R/\mathbb Z$ with
multiplication in $\mathbb U$. All scalar character values below use this
identification; they are not elements of the additive group $\mathbb C$.

The smooth adjoint representation of $G$
([[prop-adjoint-is-a-smooth-lie-group-representation]]) extends complex-linearly
to $\mathfrak g_{\mathbb C}$. A **root** of $(G,T)$ is a **nontrivial** continuous
character $\alpha:T\to\mathbb U$ whose weight space
$$\mathfrak g_\alpha=\{v\in\mathfrak g_{\mathbb C}:\operatorname{Ad}(t)v=\alpha(t)v\text{ for every }t\in T\}$$
is nonzero. This is a character in $X^*(T)$ via $E^{-1}$. Write $\Phi(G,T)$
for the set of roots. The trivial character is denoted $1$, and its weight space
is denoted $\mathfrak g_0$ to agree with additive weight notation:
$$\mathfrak g_0=\{v:\operatorname{Ad}(t)v=v\text{ for every }t\in T\}.$$
The trivial character is not a root.

There is a finite direct sum decomposition
$$\mathfrak g_{\mathbb C}=\mathfrak g_0\oplus\bigoplus_{\alpha\in\Phi(G,T)}\mathfrak g_\alpha.$$
Indeed, unitarizability under AC
([[thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable]])
makes the commuting operators $\operatorname{Ad}(t)$ normal. The complex spectral
theorem and simultaneous diagonalization
([[thm-complex-spectral-theorem-for-normal-endomorphisms]],
[[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]])
give a common eigenbasis. For a nonzero common eigenvector $v$, its eigenvalue
function is $\alpha(t)=\langle\operatorname{Ad}(t)v,v\rangle/\langle v,v\rangle$,
with inner product linear in the first argument, so is continuous. The
representation law makes it multiplicative and unitarity gives $|\alpha(t)|=1$.
Only finitely many joint eigenvalue functions occur. Separating the trivial
one gives exactly the displayed sum.

**Differential convention.** Continuous Lie-group homomorphisms are smooth
under countable choice
([[thm-continuous-homomorphisms-between-lie-groups-are-smooth]]), which follows
from the assumed AC. For $H\in\mathfrak t$ define
$$d\alpha(H)=\left.\frac{d}{ds}\right|_{s=0}\alpha(\exp_G(sH))\in i\mathbb R,$$
and extend this real-linear differential complex-linearly to
$\mathfrak t_{\mathbb C}$. The displayed derivative is taken only for real
$H\in\mathfrak t$; no exponential in the real group is applied to a general
complex tangent vector. If $a=E^{-1}\circ\alpha$ is the additive circle-valued
character and $da_e:\mathfrak t\to\mathbb R$, then $d\alpha=2\pi i\,da_e$ on
$\mathfrak t$. We often also denote $d\alpha$ by $\alpha$, explicitly switching
from the group character to its differential.

Differentiating the weight equation and using
[[thm-the-differential-of-adjoint-is-ad]] gives
$[H,v]=d\alpha(H)v$, first for real $H$, then by complex linearity for
$H\in\mathfrak t_{\mathbb C}$. Restricted to the real form
$\mathfrak t_{\mathbb R}=i\mathfrak t$, this functional is real-valued since
$d\alpha(iH)=i\,d\alpha(H)$.
It is nonzero for a root: naturality of the exponential
([[prop-exponential-map-is-natural-for-lie-group-homomorphisms]]) shows that
a character with zero differential is trivial on an exponential identity
neighborhood, using
[[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]]. Its kernel is
then an open subgroup of connected $T$, hence all of $T$. Applying this to the
quotient of two characters also shows that their differentials determine
them uniquely. No global torus lattice classification is needed here.

## Remarks

- The zero weight space is the centralizer of $\mathfrak t_{\mathbb C}$:
  one direction follows by differentiation; in the other direction
  [[prop-adjoint-exponential-identity]] makes all $\exp_G(H)$, $H\in\mathfrak t$,
  act trivially on the vector, and these generate $T$ by local invertibility
  and connectedness. Every root character is trivial on $T\cap Z(G)$,
  since conjugation by such an element is the identity, and its differential
  vanishes on $\mathfrak t\cap\mathfrak z(\mathfrak g)$ by the bracket formula.
- If $G$ is a torus, its adjoint action is trivial and $\Phi(G,T)$ is empty.
  A trivial maximal torus also has no nontrivial characters, so the root set
  is empty. These cases do not introduce a zero root.
- For $T'=gTg^{-1}$, the map $\operatorname{Ad}_g$ sends $\mathfrak g_\alpha$
  to the weight space for $\alpha\circ C_{g^{-1}}|_{T'}$, by the representation
  law. Conjugacy of maximal tori ([[thm-conjugacy-of-maximal-tori]]) therefore
  identifies these root sets and weight spaces for different maximal tori.
