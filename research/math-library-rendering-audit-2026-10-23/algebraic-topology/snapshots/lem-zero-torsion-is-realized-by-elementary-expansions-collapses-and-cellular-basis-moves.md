---
id: lem-zero-torsion-is-realized-by-elementary-expansions-collapses-and-cellular-basis-moves
kind: lemma
title: "Zero relative torsion gives a finite relative elementary deformation"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees, lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases, lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices, lem-an-identity-relative-boundary-matrix-allows-cell-cancellation, def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence, thm-composition-and-sum-formulas-for-whitehead-torsion, def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, thm-simple-homotopy-equivalences-have-zero-whitehead-torsion]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cohen, §§7.3–8.5, printed pp.25–33"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§§7.3–8.5, printed pp.25–33"
    - title: "Casson, Theorem 4.7, printed pp.32–34"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassonsimp.pdf"
      locator: "Theorem 4.7 proof, printed pp.32–34"
    - title: "Lück, Theorem 2.21, printed pp.37–38"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Theorem 2.21 proof sketch, printed pp.37–38"
---
## Statement

Let $L\subset K$ be a homotopy-equivalence inclusion of connected finite CW
complexes. If $\tau(L\hookrightarrow K)=0$ in $\operatorname{Wh}(\pi_1K)$,
then $K$ is carried to $L$ by finitely many elementary expansions and
collapses fixing $L$, with only reorderings, orientation reversals and deck-lift
changes of the cellular bases. This is the geometric converse for inclusions.

## Facts & Assumptions

**Given:** The finite homotopy-equivalence inclusion with zero Whitehead torsion.

[F1] Finite relative cell trading fixes $L$, transports torsion and leaves cells only in two degrees $n,n+1$ with $n\ge3$ ([[lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees]]).

[F2] In that two-layer pair the relative cellular differential is an invertible matrix $A$ in the group-ring homotopy bases ([[lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases]]).

[F3] Finite relative elementary moves realize left and right stable elementary matrix operations, identity-block stabilization, and the listed trivial basis changes ([[lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices]]).

[F4] An identity relative homotopy matrix permits cancellation of all relative cells by finite elementary moves ([[lem-an-identity-relative-boundary-matrix-allows-cell-cancellation]]).

[F5] For $R=\mathbb Z[\pi]$, $\operatorname{Wh}(\pi)=GL(R)/(E(R)\langle\pm g:g\in\pi\rangle)$, in additive $K_1$ notation ([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F6] The torsion of a homotopy-equivalence inclusion is the based relative universal-cover chain torsion, and for a two-term complex in degrees $n,n+1$ its class is $(-1)^{n+2}[A]$ in $\operatorname{Wh}(\pi)$ ([[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]]).

[F7] A simple deformation has zero torsion and the composition formula transports inclusion torsion along it ([[thm-simple-homotopy-equivalences-have-zero-whitehead-torsion]], [[thm-composition-and-sum-formulas-for-whitehead-torsion]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to obtain a two-high-layer pair $(K',L)$ and a simple homotopy equivalence $h:K\to K'$ fixing $L$. By [F7], $\tau(L\hookrightarrow K')=h_*\tau(L\hookrightarrow K)=0$; the group isomorphism induced by $h$ transports this equality without selecting a new generator. [F1, F7, given]

2.1 Choose the finite lower and upper lifted-cell bases of [F2]. The cellular differential is $A\in GL_a(R)$, including the empty $0\times0$ matrix when $a=0$. By [F6] its torsion is $(-1)^{n+2}[A]$, so zero torsion implies $[A]=0$ in $\operatorname{Wh}(\pi)$. The parity sign has no effect on vanishing. [F2, F6, step 1.1]

3.1 By the definition of the quotient [F5], there is a finite diagonal block $T=\operatorname{diag}(\epsilon_1g_1,\ldots,\epsilon_bg_b)$ with $\epsilon_j\in\{\pm1\}$ and $g_j\in\pi$, and a stabilization size $m$, such that $\operatorname{diag}(A,I_m)\operatorname{diag}(T^{-1},I)$ lies in the stable elementary subgroup. Equivalently, after a common finite stabilization, $A$ differs from a product of elementary matrices by finitely many trivial units. This uses equality in the direct limit $GL(R)$, so the stabilization is finite; it does not assert that an arbitrary unit of $R$ is trivial. [F5, step 2.1]

4.1 Apply [F3] for the identity-block stabilization and for the finite elementary factors in the inverse order. Absorb each diagonal $\epsilon_jg_j$ by changing the orientation or chosen deck lift of its corresponding cell. The resulting relative boundary matrix is the identity in the transported characteristic bases. Every move is a finite expansion or collapse relative to $L$, and each basis change is merely a change of description of the same cells. [F3, step 3.1]

5.1 Apply [F4] to the resulting identity-matrix pair. It cancels all relative cells by finite elementary moves fixing $L$. Concatenating this deformation with those of steps 1.1 and 4.1 gives the required finite formal deformation of $K$ to $L$. If $a=0$, [F4] is the empty deformation and the same conclusion holds. ∎ [F4, step 1.1, step 4.1]
