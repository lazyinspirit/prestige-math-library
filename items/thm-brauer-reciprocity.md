---
id: thm-brauer-reciprocity
kind: theorem
title: "Brauer reciprocity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-splitting-p-modular-system-for-a-finite-group, def-decomposition-numbers-and-decomposition-matrix, lem-decomposition-numbers-are-nonnegative-integers, def-projective-indecomposable-characters-and-cartan-invariants]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Sections 7.3 and 9.4"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

Let $\varphi$ be an irreducible Brauer character. Its projective cover
$P_\varphi$ has a projective $\mathcal O G$-lattice lift
$\widehat P_\varphi$, unique up to the ordinary character it affords. If that
character is $\Phi_\varphi$, then for every ordinary irreducible character
$\chi$ the multiplicity of $\chi$ in $\Phi_\varphi$ equals the decomposition
number $d_{\chi\varphi}$.

## Facts & Assumptions

**Given:** An ordinary irreducible character $\chi$ and an irreducible Brauer character $\varphi$.

[F1] The decomposition number $d_{\chi\varphi}$ is the multiplicity of the simple module $S_\varphi$ in the reduction of a stable lattice affording $\chi$ ([[def-decomposition-numbers-and-decomposition-matrix]]).

[L1] Those multiplicities are nonnegative integers ([[lem-decomposition-numbers-are-nonnegative-integers]]).

[F2] Projective covers and projective indecomposable characters are attached to the simple $kG$-modules as in [[def-projective-indecomposable-characters-and-cartan-invariants]].

[F3] In a splitting $p$-modular system, $\mathcal O$ is a complete discrete valuation ring ([[def-splitting-p-modular-system-for-a-finite-group]]).

## Proof

**Proof technique:** direct.

1.1 Write $P_\varphi$ as the image of an idempotent matrix over $kG$. Because $\mathcal O$ is complete by [F3], idempotents lift through the ideal $\mathfrak mM_n(\mathcal O G)$. A lifted idempotent has image a projective $\mathcal O G$-lattice $\widehat P_\varphi$ whose reduction is $P_\varphi$. [F2, F3, given, construct]

2.1 Let $L_\chi$ be a stable lattice affording $\chi$. Since $\widehat P_\varphi$ is projective, formation of $\operatorname{Hom}$ from it commutes with extension to $K$ and reduction to $k$. Hence $$\dim_K\operatorname{Hom}_{KG}(K\otimes\widehat P_\varphi,V_\chi)=\dim_k\operatorname{Hom}_{kG}(P_\varphi,L_\chi/\mathfrak mL_\chi).$$ The left side is the multiplicity of $V_\chi$ in the split semisimple module $K\otimes\widehat P_\varphi$. [step 1.1, algebra]

3.1 The functor $\operatorname{Hom}_{kG}(P_\varphi,-)$ is exact, and on a simple module $S_\psi$ it has dimension $1$ for $\psi=\varphi$ and $0$ otherwise, because every map from $P_\varphi$ to a simple module factors through its head $S_\varphi$. The right side of step 2.1 is therefore the composition multiplicity of $S_\varphi$ in $L_\chi/\mathfrak mL_\chi$, namely $d_{\chi\varphi}$ by [F1]. [F1, F2, step 2.1]

4.1 Thus the multiplicity of every $\chi$ in the ordinary character of $K\otimes\widehat P_\varphi$ is $d_{\chi\varphi}$. These coefficients depend only on $P_\varphi$, so the character is independent of the chosen lift and equals $\Phi_\varphi=\sum_\chi d_{\chi\varphi}\chi$. [L1, step 3.1] ∎
