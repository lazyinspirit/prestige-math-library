---
id: lem-pa36-partial-flag-twist-product
kind: lemma
title: Partial-flag twist and local product decomposition
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-pa36-flag-tdo-and-module
  - def-weyl-vector-rho-for-a-chosen-positive-system
  - lem-pa36-flag-tdo-pbw-and-twist
  - lem-semisimple-flag-torsor-zariski-charts
  - thm-minimal-parabolic-flag-projection-is-p1-bundle
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§§8.1–8.2, printed pp. 99–100; the parabolic action-algebroid twist and local product chart"
---

## Statement

Let $\alpha$ be a simple root, $P_\alpha$ its minimal parabolic,
$Y=G/P_\alpha$, and $p_\alpha:X=G/B\to Y$. Let
$\kappa\in\mathfrak h^*$ satisfy $\langle\kappa,\alpha^\vee\rangle=0$.
The restriction of $\kappa$ to $\mathfrak p_\alpha$ that is zero on root
spaces is a Lie algebra character. Define the partial-flag TDO
$\mathcal D^{\alpha}_{\kappa-\rho}$ on $Y$ as the action-algebroid quotient
whose isotropy character is this restriction of $\kappa$; the subscript
$\kappa-\rho$ uses the convention that a TDO parameter $\nu$ has isotropy
character $\nu+\rho$. For a quasicoherent left
$\mathcal D^{\alpha}_{\kappa-\rho}$-module $N$, define $p_\alpha^\dagger N$
on a Zariski product chart $p_\alpha^{-1}(U)\cong U\times\mathbb P^1$ to be
the exterior product $\mathcal D_{\mathbb P^1}\boxtimes N|_U$, with its
transition maps induced by changes of the $P_\alpha$-torsor section. Then
these local modules glue to a quasicoherent left
$\mathcal D_{\kappa-\rho}$-module, and tensoring by $\mathcal O_X(\rho)$
turns it into a left $\mathcal D_\kappa$-module. The restriction of
$\mathcal O_X(\rho)$ to each $p_\alpha$-fiber is
$\mathcal O_{\mathbb P^1}(-1)$.

For a torsor section $s:U\to G$, the product chart used below is the
commutative square whose top arrow is $\Phi_s(u,qB)=s(u)qB$:

\begin{center}
\begin{tikzpicture}[>=stealth]
  \node (a) at (0,1.3) {$U\times P_\alpha/B$};
  \node (b) at (4,1.3) {$p_\alpha^{-1}(U)$};
  \node (c) at (0,0) {$U$};
  \node (d) at (4,0) {$U$};
  \draw[->] (a) -- node[above] {$\Phi_s$} (b);
  \draw[->] (a) -- node[left] {$\mathrm{pr}_1$} (c);
  \draw[->] (b) -- node[right] {$p_\alpha$} (d);
  \draw[->] (c) -- node[below] {$\mathrm{id}_U$} (d);
\end{tikzpicture}
\end{center}

The left vertical map is projection, and the bottom map is identity. The
torsor section makes $\Phi_s$ an isomorphism; the equality
$p_\alpha\circ\Phi_s=\mathrm{pr}_1$ verifies commutativity. The diagram
records the local chart only; the PBW and gluing arguments below prove the
TDO identifications.

## Facts & Assumptions

**Given:** The simply connected complex semisimple group, its flag variety,
a simple root $\alpha$, the minimal-parabolic projection $p_\alpha$, and
$\kappa$ with $\langle\kappa,\alpha^\vee\rangle=0$.

[F1] $\rho=\frac12\sum_{\beta\in\Phi^+}\beta$ is an integral weight and
$\langle\rho,\alpha^\vee\rangle=1$
([[def-weyl-vector-rho-for-a-chosen-positive-system]]).

[F2] $G\to Y$ is a Zariski-locally trivial right $P_\alpha$-torsor and
$P_\alpha/B\cong\mathbb P^1$; in the rank-one case $Y$ is a point
([[lem-semisimple-flag-torsor-zariski-charts]],
[[thm-minimal-parabolic-flag-projection-is-p1-bundle]]).

[F3] The action-algebroid quotient construction has the ordered-basis PBW
filtration with associated graded the symmetric tangent algebra, and
tensoring by an integral line bundle changes the TDO parameter by its weight
([[def-pa36-flag-tdo-and-module]],
[[lem-pa36-flag-tdo-pbw-and-twist]]).

## Proof

1.1 The derived algebra $[\mathfrak p_\alpha,\mathfrak p_\alpha]$ is spanned
by positive-root spaces and the rank-one subalgebra
$\langle\mathfrak g_\alpha,\mathfrak g_{-\alpha},\alpha^\vee\rangle$.
The functional $\kappa$ vanishes on the root spaces by its definition and
on $\alpha^\vee$ by the assumed zero pairing. It therefore kills the derived
algebra, so it is a Lie algebra character of $\mathfrak p_\alpha$. Its
transport to the isotropy bundle on $Y$ is well-defined because a character
is invariant under conjugation by the connected group $P_\alpha$. Applying
the PBW quotient construction of [F3] to the action algebroid of $G$ on $Y$
defines $\mathcal D^{\alpha}_{\kappa-\rho}$ with associated graded
$\operatorname{Sym}T_Y$. [F1, F3, given, algebra]

2.1 Choose a Zariski open $U\subseteq Y$ with a section of the
$P_\alpha$-torsor $G\to Y$, as in [F2]. It identifies the pulled-back
$B$-torsor over $p_\alpha^{-1}(U)$ with the product of $U$ and the rank-one
$B$-torsor $P_\alpha\to P_\alpha/B$. Under this product, the action-algebroid
generators from the base and from the fiber have the product bracket: their
cross-brackets vanish, and their separate brackets are the action-algebroid
brackets on $U$ and $P_\alpha/B$. The isotropy character on the base factor
is $\kappa|_{\mathfrak p_\alpha}$, while on the fiber its parameter is
$\langle\kappa-\rho,\alpha^\vee\rangle=-1$. By [F3], the rank-one TDO with
parameter $-\rho_{\mathfrak{sl}_2}$ is
$\operatorname{Diff}(\mathcal O_{\mathbb P^1})$. The PBW normal forms for
the two commuting factors therefore identify
$$\mathcal D_{\kappa-\rho}|_{p_\alpha^{-1}(U)}
\cong\mathcal D_{\mathbb P^1}\boxtimes
\mathcal D^{\alpha}_{\kappa-\rho}|_U.$$
The line bundle $\mathcal O_X(\rho)$ restricts to degree $-1$ on the fiber
because its associated character pairs to $1$ with $\alpha^\vee$; hence its
restriction is $\mathcal O_{\mathbb P^1}(-1)$. [F1, F2, F3, step 1.1,
algebra, construct]

3.1 On overlaps, two torsor sections differ by a regular map into
$P_\alpha$. Its action on the product charts is the associated transition
of the $P_\alpha/B$-bundle and the base action-algebroid transition. Both
preserve the character $\kappa|_{\mathfrak p_\alpha}$, so they intertwine
the displayed product TDOs; the cocycle identity follows from composition
of the torsor transition maps. Thus the local exterior products
$\mathcal D_{\mathbb P^1}\boxtimes N|_U$ glue to $p_\alpha^\dagger N$.
Finally, [F3] identifies $\mathcal O_X(\rho)\otimes p_\alpha^\dagger N$
as a $\mathcal D_\kappa$-module because tensoring by $\mathcal O_X(\rho)$
shifts the parameter from $\kappa-\rho$ to $\kappa$. [F1, F2, F3,
step 2.1, construct] ∎
