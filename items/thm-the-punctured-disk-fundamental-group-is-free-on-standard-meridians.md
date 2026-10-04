---
id: thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians
kind: theorem
title: "The punctured-disk fundamental group is free on the standard meridians"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 2
deps: [def-standard-meridians-of-a-punctured-disk, lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis, prop-retracts-inject-fundamental-groups, def-free-group, thm-reduced-words-form-the-free-group, thm-free-groups-unique-up-to-unique-isomorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10 (pi_1(D_n) = F_n with free generators x_1,...,x_n)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, printed p. 111 (the free group of the punctured disk)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Statement

Let $F_n=\langle x_1,\dots,x_n\rangle$ be the free group of
[[def-free-group]] on $n$ letters. The assignment $x_i\mapsto[x_i]$ extends to
a group isomorphism $F_n\to\pi_1(D^2\setminus Q_n,d)$; equivalently, the
classes $[x_1],\dots,[x_n]$ of the standard meridians of
[[def-standard-meridians-of-a-punctured-disk]] form a free basis of
$\pi_1(D^2\setminus Q_n,d)$.

## Facts & Assumptions

**Given:** $n\in\mathbb N$, the punctured disk $X=D^2\setminus Q_n$, the
basepoint $d$, the standard meridians $x_i$ and the flower $W$ of
[[def-standard-meridians-of-a-punctured-disk]].

[F1] $W$ is a deformation retract of $X$ with retraction fixing $d$, and
$\pi_1(W,d)$ is free with basis $[x_1],\dots,[x_n]$
([[lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis]]).

[F2] A deformation retraction onto a subspace $A$ containing the basepoint
induces, through inclusion and retraction, mutually inverse isomorphisms
between $\pi_1(A,a)$ and $\pi_1(X,a)$
([[prop-retracts-inject-fundamental-groups]]).

[F3] The free group $F_n$ on the set $\{x_1,\dots,x_n\}$ has the universal
property: for every group $G$ and every function $u:\{x_1,\dots,x_n\}\to G$
there is a unique homomorphism $\widehat u:F_n\to G$ with
$\widehat u(x_i)=u(x_i)$; reduced words form such a free group
([[def-free-group]], [[thm-reduced-words-form-the-free-group]]). Free groups on
the same set are uniquely isomorphic over the set
([[thm-free-groups-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 *The universal-property map.* Let $u:\{x_1,\dots,x_n\}\to\pi_1(X,d)$, $u(x_i):=[x_i]$. By [F3] there is a unique homomorphism $\widehat u:F_n\to\pi_1(X,d)$ with $\widehat u(x_i)=[x_i]$. The inclusion $i:W\hookrightarrow X$ and the retraction $\rho:X\to W$ of [F1] are based at $d$, and by [F2] the induced maps $i_*:\pi_1(W,d)\to\pi_1(X,d)$ and $\rho_*$ are mutually inverse isomorphisms. [F1, F2, F3]

1.2 *The basis map.* By [F1], $\pi_1(W,d)$ is free on the classes $[x_1],\dots,[x_n]$, so the assignment $x_i\mapsto[x_i]\in\pi_1(W,d)$ extends by [F3] to an isomorphism $\phi:F_n\to\pi_1(W,d)$: it is the unique homomorphism with $\phi(x_i)=[x_i]$, and the universal property applied to the inverses shows it is bijective (equivalently, $F_n$ and $\pi_1(W,d)$ are free on the same set, so [F3]'s uniqueness clause gives the isomorphism). [F1, F3]

1.3 *The case $n=0$.* For $n=0$ the configuration is empty, $D^2\setminus Q_0=D^2$ is contractible (the straight-line homotopy to the origin), the empty basis is a basis of the trivial group, and the unique map from the trivial free group is an isomorphism; the argument above also covers this case with empty index sets. [F2, F3]

2.1 *Comparison.* The composite $i_*\circ\phi:F_n\to\pi_1(X,d)$ is a homomorphism with $x_i\mapsto i_*[x_i]=[x_i]$, since $i$ is the inclusion of the subspace containing the loops $x_i$. By the uniqueness clause of [F3] applied to $u$, $i_*\circ\phi=\widehat u$. Since $i_*$ and $\phi$ are bijections, $\widehat u$ is a group isomorphism. [step 1.1, step 1.2, F2, F3]


3.1 *Conclusion.* Steps 1.1, 1.2 and 2.1 exhibit the isomorphism $\widehat u:F_n\to\pi_1(D^2\setminus Q_n,d)$ with $x_i\mapsto[x_i]$, and step 1.3 covers the empty case; hence $[x_1],\dots,[x_n]$ is a free basis of $\pi_1(D^2\setminus Q_n,d)$. [step 2.1, step 1.3] ∎

## Remarks

- The identification is the one fixed on the whole page: the letters
  $x_1,\dots,x_n$ of $F_n$ are from now on identified with the classes of the
  standard meridian loops, and every braid automorphism is computed on this
  basis.
- Asphericity is a separate clause of the flower lemma. The free-basis theorem uses the based deformation retraction and the finite tether-tree collapse; the boundary-product and action calculations use compact cut-disk geometry.
