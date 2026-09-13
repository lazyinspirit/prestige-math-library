---
id: lem-nagao-error-terms-have-zero-trace-on-the-relevant-p-section
kind: lemma
title: Nagao error terms have zero trace on the relevant p-section
status: draft
origin: pipeline
deps: [lem-commuting-p-and-p-prime-parts-of-a-finite-group-element, def-p-section-of-a-p-element, lem-relative-projectivity-forces-p-section-character-vanishing, thm-nagao-decomposition-for-restriction-to-a-centralizer, def-algebraically-closed-field, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Craven, The Brauer Correspondence, Lemma 2.21 and proof, p. 29"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, proof of Theorem 5.4, pp. 276–277"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(K,\mathcal O,k)$ be a splitting
$p$-modular system for a finite group $G$, with $k$ algebraically closed.
Let $u\in G$ be a $p$-element and put $H=C_G(u)$. Let $B$ be a block of
$kG$, and let $M$ be a finite-free $\mathcal O G$-lattice satisfying
$\widehat B M=M$. Apply the Nagao decomposition with $D=\langle u\rangle$:
$$  \operatorname{Res}_H^G M=M_{\mathrm{corr}}\oplus M_{\mathrm{err}}.$$
If $\chi$ and $\chi_{\mathrm{corr}}$ are the ordinary characters of
$K\otimes_{\mathcal O}M$ and
$K\otimes_{\mathcal O}M_{\mathrm{corr}}$, then for every $p$-regular
$v\in H$,
$$  \chi(uv)=\chi_{\mathrm{corr}}(uv).$$
More precisely, the ordinary character of every indecomposable summand of
$M_{\mathrm{err}}$ is zero at $uv$.

## Facts & Assumptions

**Given:** AC and the system, element, centralizer, block, lattice, and
characters in the Statement.

[F1] The commuting $p$- and $p'$-parts of a finite-order element are unique
([[lem-commuting-p-and-p-prime-parts-of-a-finite-group-element]]), and their
use here places $uv$ in the $p$-section $S_G(u)$
([[def-p-section-of-a-p-element]]).

[F2] In the Nagao error part for $D=\langle u\rangle$, no vertex of an
indecomposable summand contains $D$
([[thm-nagao-decomposition-for-restriction-to-a-centralizer]]).

[F3] Over the algebraically closed residue field, a relatively
$Q$-projective lattice has zero character at an element whose $p$-part is
not conjugate into $Q$
([[lem-relative-projectivity-forces-p-section-character-vanishing]] and
[[def-algebraically-closed-field]]).

[F4] AC is available ([[def-axiom-of-choice]]) and is used only through the
AC-stated suppliers F2–F3; trace additivity below is finite.

## Proof

1.1 The subgroup $D=\langle u\rangle$ is central in $H$, and $DC_G(D)=C_G(u)=H\leq N_G(D)$, so F2 applies. Decompose the finite-rank lattice $M_{\mathrm{err}}$ into indecomposable $\mathcal O H$-lattices $U_1,\ldots,U_r$. If $u=1$, then $D=1$ and F2 says no vertex of an error summand contains $1$, which is impossible; thus $r=0$ and the result is immediate. [F2]

1.2 Suppose $u\ne1$. For each $U_i$, choose a vertex $Q_i$. By F2, $D\not\leq Q_i$. Since $u$ is central in $H$, every $H$-conjugate of $u$ is $u$ itself; hence $u$ is not $H$-conjugate to an element of $Q_i$. Because $u$ and the $p$-regular element $v$ commute, F1 says that the $p$-part of $uv$ is exactly $u$. Each $U_i$ is relatively $Q_i$-projective by the definition of a vertex, so F3 gives $$ \operatorname{tr}\bigl(uv\mid K\otimes_{\mathcal O}U_i\bigr)=0. $$ [F1, F2, F3, F4]

2.1 Scalar extension preserves the finite direct sum, and trace is additive. Step 1.2 proves the more precise assertion in the Statement. Therefore the character of $M_{\mathrm{err}}$ is zero at $uv$. Taking traces in $M=M_{\mathrm{corr}}\oplus M_{\mathrm{err}}$ gives the required equality. The case $M_{\mathrm{err}}=0$ is the empty finite sum, already covered, and algebraic closedness is used exactly through F3. [step 1.1, step 1.2, algebra] ∎
