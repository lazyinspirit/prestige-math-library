---
id: def-complex-semisimple-algebraic-group-borel-and-flag-variety
kind: definition
title: Complex semisimple algebraic group, Borel, and flag variety
status: draft
origin: pipeline
landmark: false
deps:
  - def-root-and-root-space-relative-to-a-cartan-subalgebra
  - def-positive-system-and-base-of-simple-roots
  - def-weyl-group-of-a-root-system
  - def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra
  - def-axiom-of-choice
forward_refs:
  - def-compositions-partial-flags-and-standard-parabolics
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (2022)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 17, 20-23, especially 7.18, 17.3, 20.32, 21.68-21.91, 22.17-22.27, 23.59"
    - title: "Brian Conrad, Reductive Group Schemes"
      url: https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf
      locator: "§§1.2, 1.4, especially Theorems 1.2.7, 1.4.12, Proposition 1.4.7 and Corollary 1.4.13"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Throughout this page,
**$G$ is a connected simply connected complex semisimple affine algebraic
group**: an affine group scheme $G$ of finite type over $\mathbb C$ whose
underlying scheme is connected and smooth, whose Lie algebra
$\mathfrak g=\operatorname{Lie}G$ is a semisimple complex Lie algebra, and
which is simply connected in the sense that every central isogeny
$G'\to G$ of connected affine algebraic groups over $\mathbb C$ with finite
kernel is an isomorphism. These conditions are hypotheses on $G$, fixed once
and for all; the local construction of the root subgroups, of $B$ and of $G/B$
below is where they are used.

**Maximal torus, roots, positive roots.** Fix a maximal torus $T\subseteq G$,
that is, a closed subgroup isomorphic to a product of copies of
$\mathbb G_m$ which is maximal for this property. Its Lie algebra
$\mathfrak h=\operatorname{Lie}T$ is a Cartan subalgebra of $\mathfrak g$ and
$\mathfrak g$ decomposes as
$\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$
with $\mathfrak g_\alpha$ the root space of the root $\alpha\in\mathfrak h^*$
in the sense of [[def-root-and-root-space-relative-to-a-cartan-subalgebra]].
We write $\Phi=\Phi(G,T)\subseteq\mathfrak h^*$ for this root set, a reduced
crystallographic root system in the real span of $\Phi$, and we fix once and
for all a positive system $\Phi^+$ with simple roots $\Delta$, in the sense of
[[def-positive-system-and-base-of-simple-roots]]. Define the nilpotent Lie
subalgebras
$$\mathfrak n^\pm=\bigoplus_{\alpha\in\Phi^\pm}\mathfrak g_\alpha,\qquad \mathfrak b=\mathfrak h\oplus\mathfrak n^+.$$
Here $\mathfrak b$ is the Borel subalgebra of
[[def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]].

**Borel subgroup and unipotent radical.** Reserve $B\subseteq G$ for the
closed connected subgroup with $\operatorname{Lie}B=\mathfrak b$ constructed
in [[lem-semisimple-borel-root-factorization]], and $U\subseteq B$ for its
unipotent radical. That lemma proves $B=T\ltimes U$ and identifies $U$ with
the product of the positive-root subgroups. Reserve $U_\alpha$ for the closed
one-parameter subgroup with $\operatorname{Lie}U_\alpha=\mathfrak g_\alpha$
constructed, with its $T$-equivariance, in
[[lem-semisimple-root-exponential-algebraic-subgroups]]. These symbols name
the later constructions; this definition does not establish their existence.

**Weyl group.** Let $N_G(T)$ be the normalizer subgroup scheme of $T$ in $G$,
and put
$$W=N_G(T)/T .$$
Here the quotient means the fppf quotient sheaf. Its identification with the
constant algebraic group of the abstract Weyl group
$W(\Phi)=\langle s_\alpha:\alpha\in\Phi\rangle$
of [[def-weyl-group-of-a-root-system]] remains a proof obligation for the
later root-representative and Bruhat constructions. Until then $W$ has its
action on $\mathfrak h$ and on $X^*(T)$ by conjugation. The formula does not
identify $W(R)$ with $N_G(T)(R)/T(R)$ for an arbitrary test algebra $R$.

**Flag variety.** Reserve $X=G/B$ for the projective homogeneous
$G$-variety constructed in [[lem-semisimple-projective-orbit-flag-quotients]]
as the orbit of the highest-weight line
$v_B=\wedge^{\dim\mathfrak b}\mathfrak b$ in the Plücker representation
$\wedge^{\dim\mathfrak b}\mathfrak g$. Once constructed, $X(R)$ is the
set of $R$-points of that closed orbit for a $\mathbb C$-algebra $R$. The
represented quotient functor is the fppf sheafification of the presheaf
$R\mapsto G(R)/B(R)$; a given $R$-point lifts to $G(R)$ precisely when its
pulled-back $B$-torsor is trivial. The quotient identification and Zariski
local sections of $G\to X$ are established in
[[lem-semisimple-flag-torsor-zariski-charts]] and
[[thm-semisimple-flag-variety-smooth-projective]].

**Minimal parabolic.** For a simple root $\alpha\in\Delta$, reserve
$P_\alpha$ for the subgroup generated by $B$ and the negative root subgroup
$U_{-\alpha}$. The later lemma
[[lem-semisimple-minimal-parabolic-root-subgroup]] proves that it is closed,
contains $B$ and $U_{-\alpha}$, has
$\operatorname{Lie}P_\alpha=\mathfrak b\oplus\mathfrak g_{-\alpha}$,
and satisfies $P_\alpha=B\sqcup Bn_\alpha B$ with $n_\alpha$ a Weyl
representative of $s_\alpha$. That lemma and
[[thm-minimal-parabolic-flag-projection-is-p1-bundle]] prove
$P_\alpha/B\cong\mathbb P^1$ and that $G/B\to G/P_\alpha$ is a Zariski
locally trivial $\mathbb P^1$-bundle.

**Conventions.** All schemes and algebraic groups in this definition and in
every item that depends on it are over $\mathbb C$. The Axiom of Choice is
assumed and is used only through the published Lie-theoretic suppliers of the
root data and through the injective-resolution and sheaf-cohomology supplies
named by the individual items; the finite-type affine-group lemma
[[lem-affine-algebraic-group-faithful-rational-representation]] is choice-free.

## Remarks

This is the **minimal** parabolic strictly containing $B$, rather than the
maximal-parabolic convention of
[[def-compositions-partial-flags-and-standard-parabolics]]. The later
construction gives $\dim(G/P_\alpha)=|\Phi^+|-1$.
