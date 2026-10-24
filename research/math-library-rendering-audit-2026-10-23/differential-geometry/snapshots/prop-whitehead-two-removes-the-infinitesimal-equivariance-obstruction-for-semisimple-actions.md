---
id: prop-whitehead-two-removes-the-infinitesimal-equivariance-obstruction-for-semisimple-actions
kind: proposition
title: Whitehead's second lemma removes the infinitesimal equivariance obstruction for semisimple actions
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle, prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity, thm-second-whitehead-lemma, def-lie-algebra-cohomology, def-chevalley-eilenberg-differential, def-simple-semisimple-and-reductive-lie-algebras, def-moment-map-and-component-hamiltonian, def-poisson-bracket-on-a-symplectic-manifold, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 26, proof of Theorem 26.2 and Theorem 26.3, printed pages 166--167
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Remark 7.16, printed pages 85--86
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume $\mathrm{AC}_\omega$, connected $G$, connected $M$, and suppose an
infinitesimal moment map $\mu:M\to\mathfrak g^*$ is supplied for the action:
that is, each closed one-form $-\iota_{\xi_M}\omega$ has a chosen Hamiltonian
function $\mu^\xi$, depending linearly on $\xi$. If $\mathfrak g$ is
finite-dimensional real semisimple, then there is a covector
$b\in\mathfrak g^*$ such that

$$\mu-b:\ M\longrightarrow\mathfrak g^*,\qquad (\mu-b)^\xi=\mu^\xi-b(\xi),$$

is a coadjoint-equivariant moment map. Thus constants can be added to a
supplied infinitesimal moment map to make it equivariant. The argument
assumes the linear choice of Hamiltonians and does not prove that the
component one-forms $\iota_{\xi_M}\omega$ are exact; it removes only the
obstruction to equivariance.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, connected $G$ and $M$, an infinitesimal moment map $\mu$ for the action, and a finite-dimensional real semisimple $\mathfrak g$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used through the moment-map, defect, and equivariance interfaces cited in [F1], [F2], and [F6].

[F1] The components satisfy $d\mu^\xi=-\iota_{\xi_M}\omega$ for all $\xi$. [[def-moment-map-and-component-hamiltonian]].

[F2] The nonequivariance defect $c(\xi,\eta)=\{\mu^\xi,\mu^\eta\}-\mu^{[\xi,\eta]}$ is a constant on $M$ and is a Chevalley--Eilenberg two-cocycle with trivial coefficients. [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]].

[F3] For a finite-dimensional semisimple $\mathfrak g$ over a characteristic-zero field, $H^2(\mathfrak g,M)=0$ for every finite-dimensional module $M$, in particular $H^2(\mathfrak g,\mathbb R)=0$ for the trivial module. [[thm-second-whitehead-lemma]], [[def-lie-algebra-cohomology]], [[def-simple-semisimple-and-reductive-lie-algebras]].

[F4] With the zero-based convention, the Chevalley--Eilenberg differential of a one-cochain $b$ is $(db)(\xi,\eta)=-b([\xi,\eta])$; hence $c=db$ means $c(\xi,\eta)=-b([\xi,\eta])$. [[def-chevalley-eilenberg-differential]].

[F5] Constants are Poisson-central: adding a constant to a function changes no Hamiltonian vector field and the Poisson bracket of a constant with any function vanishes. [[def-poisson-bracket-on-a-symplectic-manifold]].

[F6] The defect vanishes identically on the connected manifold $M$ if and only if $\mu$ is coadjoint equivariant, and for connected $G$ the bracket identity is equivalent to equivariance. [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]], [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]].

## Proof

**Proof technique:** direct.

1.1 By [F1] the map $\mu$ is an infinitesimal moment map, so its defect $c$ from [F2] is a constant two-cocycle with trivial coefficients; identifying the trivial module with $\mathbb R$, [F3] gives $H^2(\mathfrak g,\mathbb R)=0$. [F1, F2, F3, given]

2.1 Since $c$ represents the zero class and $c$ is a two-cocycle, it is a coboundary $c=db$ for some one-cochain $b\in C^1=\mathfrak g^*$, so $c(\xi,\eta)=-b([\xi,\eta])$ for all $\xi,\eta$ by [F4]. [step 1.1, F4]

3.1 Define $\mu':=\mu-b$, that is $\mu'^\xi=\mu^\xi-b(\xi)$. Its components differ from those of $\mu$ by constants, so by [F5] the Poisson bracket is unchanged and the defect of $\mu'$ is $$c'(\xi,\eta)=\{\mu^\xi,\mu^\eta\}-\bigl(\mu^{[\xi,\eta]}-b([\xi,\eta])\bigr)=c(\xi,\eta)+b([\xi,\eta])=c(\xi,\eta)-(db)(\xi,\eta)=0.$$ [step 2.1, F4, F5]

4.1 The component moment equations hold for $\mu'$ as well, because the components differ from those of $\mu$ by constants, which have zero differential. [step 3.1, F1, F5]

5.1 Since $c'\equiv0$ on the connected manifold $M$ and $G$ is connected, [F6] shows that $\mu'$ is coadjoint equivariant; combined with step 4.1, $\mu'$ is an equivariant moment map. [step 3.1, step 4.1, F6, A1] ∎
