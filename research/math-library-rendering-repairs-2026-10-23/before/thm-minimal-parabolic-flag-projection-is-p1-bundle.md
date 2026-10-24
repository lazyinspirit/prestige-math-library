---
id: thm-minimal-parabolic-flag-projection-is-p1-bundle
kind: theorem
title: A minimal-parabolic flag projection is a projective-line bundle
status: published
origin: pipeline
landmark: false
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - lem-semisimple-borel-root-factorization
  - lem-semisimple-minimal-parabolic-root-subgroup
  - lem-semisimple-projective-orbit-flag-quotients
  - lem-semisimple-flag-torsor-zariski-charts
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 17, 21, 23 (parabolics, quotients, Bruhat decomposition)"
    - title: "Michel Brion, Lectures on the Geometry of Flag Varieties"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
      locator: "§§1.2-1.4 and §2.1"
---

## Statement

Assume the Axiom of Choice. Let $G$ be the connected simply connected complex
semisimple affine algebraic group with Borel $B=T\ltimes U$ and Weyl group $W$
of [[def-complex-semisimple-algebraic-group-borel-and-flag-variety]] and
[[lem-semisimple-borel-root-factorization]], and let $\alpha$ be a simple
root with minimal parabolic $P_\alpha=B\sqcup Bn_\alpha B$, root subgroup
$U_{-\alpha}$ and Weyl subgroup $\{1,s_\alpha\}$ as in
[[lem-semisimple-minimal-parabolic-root-subgroup]]. Let
$\pi_B:G\to X_B$ and $\pi_\alpha:G\to X_\alpha$ be the orbit maps of
[[lem-semisimple-projective-orbit-flag-quotients]]. Then:

(i) the induced map $f:X_B\to X_\alpha$, $g[v_B]\mapsto g[v_\alpha]$, is a
surjective morphism of varieties, well defined because $B\subseteq P_\alpha$,
and its fibre over $g[v_\alpha]$ is canonically the coset space
$P_\alpha/B$, which is $\mathbb P^1$ in the two-chart description
$z\mapsto u_{-\alpha}(z)B$, $t\mapsto u_\alpha(t)n_\alpha B$ with $t=z^{-1}$
of [[lem-semisimple-minimal-parabolic-root-subgroup]];

(ii) $f$ is a Zariski-locally trivial fibre bundle with fibre $\mathbb P^1$: over each single $G$-translate $gV$ of the open torsor chart $V=\sigma_\alpha(U^-_\alpha)\subseteq X_\alpha$ from [[lem-semisimple-flag-torsor-zariski-charts]], it becomes the projection $gV\times\mathbb P^1\to gV$. These translates cover $X_\alpha$ and admit a finite subcover. In the rank-one case $G=P_\alpha$, the base is a point and $f$ is the unique map from $\mathbb P^1$ to that point.

## Facts & Assumptions

**Given:** the group $G$, its Borel $B$, the simple root $\alpha$, the minimal parabolic $P_\alpha$, the orbit maps $\pi_B$, $\pi_\alpha$ and the closed orbits $X_B$, $X_\alpha$.

[F1] $P_\alpha$ is a closed connected subgroup containing $B$ and $U_{-\alpha}$ with $P_\alpha=B\sqcup Bn_\alpha B$, $\operatorname{Lie}P_\alpha=\mathfrak b\oplus\mathfrak g_{-\alpha}$ and $\dim P_\alpha=\dim B+1$; the coset space $P_\alpha/B$ is described by the two affine charts $z\mapsto u_{-\alpha}(z)B$ and $t\mapsto u_\alpha(t)n_\alpha B$ glued by $t=z^{-1}$. ([[lem-semisimple-minimal-parabolic-root-subgroup]])

[F2] The stabilizer of $[v_B]$ in $G$ is $B$, the stabilizer of $[v_\alpha]$ is $P_\alpha$, and the fibres of $\pi_B$ and $\pi_\alpha$ are exactly the right cosets of $B$ respectively $P_\alpha$; both orbit maps are surjective onto the closed orbits $X_B=\pi_B(G)$, $X_\alpha=\pi_\alpha(G)$, which are smooth projective of dimensions $|\Phi^+|$ and $|\Phi^+|-1$. ([[lem-semisimple-projective-orbit-flag-quotients]])

[F3] The orbit map $\pi_\alpha:G\to X_\alpha$ is a Zariski-locally trivial right $P_\alpha$-torsor. Its open chart $V=\sigma_\alpha(U^-_\alpha)$ satisfies $\pi_\alpha^{-1}(V)\cong V\times P_\alpha$, and the single $G$-translates $gV$ cover $X_\alpha$, with the product torsor transported to each translate. Likewise $\pi_B$ is a right $B$-torsor and represents the fppf sheaf quotient $G/B$. ([[lem-semisimple-flag-torsor-zariski-charts]])

[F4] The Axiom of Choice is [[def-axiom-of-choice]].

## Proof

1.1 The inclusion $B\subseteq P_\alpha$ makes $g[v_B]\mapsto g[v_\alpha]$ well defined on closed points, and $\pi_\alpha$ is surjective by [F2]. It is a morphism: by [F3] a Zariski cover of $X_B$ admits sections of the $B$-torsor $\pi_B$, so on each chart the proposed map is the composite of a section into $G$ with the morphism $\pi_\alpha$; the expressions agree on overlaps because two sections differ by right multiplication by a $B$-valued function and $B\subseteq P_\alpha$. The local morphisms glue to $f$, and $f\circ\pi_B=\pi_\alpha$ as morphisms. [F1, F2, F3, construct]

1.2 Fix a point $y=g[v_\alpha]\in X_\alpha$. Since $\pi_\alpha^{-1}(y)=gP_\alpha$ by [F2], the fibre of $f$ is the image of $gP_\alpha$ under $\pi_B$. The quotient description in [F3], after choosing the displayed $g$, identifies this fibre as a scheme with $P_\alpha/B$. By [F1] the latter fppf quotient is $\mathbb P^1$ with charts $z\mapsto u_{-\alpha}(z)B$, $t\mapsto u_\alpha(t)n_\alpha B$ and transition $t=z^{-1}$. [F1, F2, F3]

2.1 Local triviality follows by base change of the $P_\alpha$-torsor. Let $V=\sigma_\alpha(U^-_\alpha)$. The product chart of [F3] identifies $\pi_\alpha^{-1}(V)$ with $V\times P_\alpha$, equivariantly for right $P_\alpha$. Quotienting this identity by the right subgroup $B$ gives $f^{-1}(V)\cong(V\times P_\alpha)/B\cong V\times(P_\alpha/B)\cong V\times\mathbb P^1$ as fppf sheaves and hence as schemes by [F1] and [F3]. Under this identification $f$ is the projection to $V$. For every $g\in G$, left translation carries the entire diagram to the single open translate $gV$ and gives the same product description. These translates cover $X_\alpha$ by [F3], and projectivity makes a finite subcover available. [F1, F2, F3, step 1.1, step 1.2, construct]

2.2 The rank-one case. If $G=P_\alpha$ then $B\subseteq P_\alpha=G$ and $X_\alpha=G/P_\alpha$ is a single point while $X_B=G/B=P_\alpha/B$ is $\mathbb P^1$ by [F1] and [F2]; the map $f$ is then the unique morphism $\mathbb P^1\to\{\mathrm{pt}\}$, which is the trivial $\mathbb P^1$-bundle over its one-point base, and both assertions hold without any local section. [F1, F2, step 1.2]

3.1 Steps 1.1–1.2 prove (i), and step 2.1 proves (ii); step 2.2 checks the rank-one endpoint. The Axiom of Choice is inherited through [F1]–[F3] and declared in [F4]. [F1, F2, F3, F4, step 1.1, step 1.2, step 2.1, step 2.2, discharge-construct] ∎
