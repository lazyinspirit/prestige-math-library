---
id: lem-the-imprimitivity-reconstruction-map-is-isometric-and-intertwining
kind: lemma
title: The imprimitivity reconstruction map is isometric and intertwining
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
local_addition: true
proof_strategy: direct
deps:
  - lem-induced-representations-carry-a-canonical-system-of-imprimitivity
  - lem-spectral-measure-multiplicity-model-for-a-transitive-system
  - lem-borel-cocycle-fields-for-imprimitivity-systems
  - lem-borel-cross-sections-for-closed-subgroups
  - lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary
  - def-covariant-function-model-of-unitary-induction
  - thm-unitary-induction-from-a-closed-subgroup
  - lem-the-induced-action-is-unitary
  - thm-induced-representation-is-independent-of-rho-function-and-measure-representative
  - def-transitive-system-of-imprimitivity
  - def-strongly-continuous-unitary-representation
  - def-axiom-of-choice
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-unitary-equivalence-of-systems-of-imprimitivity
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "V. S. Sunder, Notes on the Imprimitivity Theorem (ISIBangalore/IMSc lecture notes, 22 pp.)"
      url: "https://www.imsc.res.in/~sunder/imp.pdf"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
---

## Statement

Assume AC. In the normalized model of a transitive system $(U,P)$ on $G/H$,
take the Borel unitaries $B$ and the stabilizer representation $\sigma$
supplied by the preceding lemma. Multiplication by $B$ is unitary and
$$(B^{-1}WU_gW^{-1}Bf)(x)=D_g(x)^{1/2}\sigma(s(x)^{-1}gs(g^{-1}x))f(g^{-1}x).$$
This is the canonical induced action of $\operatorname{Ind}_H^G\sigma$.
Moreover $B^{-1}WP(E)W^{-1}B=M_{\mathbf 1_E}$ for all Borel $E$. Hence $(U,P)$
is unitarily equivalent to the canonical induced system by an isometric map
intertwining both $U$ and $P$.

## Facts & Assumptions

**Given:** AC, the normalized transitive system $(U,P)$ with multiplicity model $W$, cocycle fields $\varphi_g$, Borel unitaries $B$ and stabilizer representation $\sigma$.

[F1] The multiplicity-normalized model is $W:H_0\to L^2(G/H,\mu;K)$ with $WP(E)W^{-1}=M_{\mathbf 1_E}$, and the source-variable cocycle fields satisfy $WU_gW^{-1}f(x)=D_g(x)^{1/2}\varphi_g(g^{-1}x)f(g^{-1}x)$, where $D_g(x)=d(L_g)_*\mu/d\mu(x)$ ([[lem-spectral-measure-multiplicity-model-for-a-transitive-system]], [[lem-borel-cocycle-fields-for-imprimitivity-systems]], [[def-direct-integral-of-a-measurable-hilbert-field]]).

[F2] The stabilizer lemma supplies, after the strict normalization, the identity $\varphi_g(x)=B(gx)\sigma(h(g,x))B(x)^{-1}$ for every $g$ and every $x$, with $h(g,x)=s(gx)^{-1}gs(x)$ ([[lem-the-stabilizer-action-on-an-imprimitivity-fiber-is-unitary]], [[lem-borel-cross-sections-for-closed-subgroups]]).

[F3] The canonical induced model of $\sigma$ on the covariant completion with rho-measure $\mu_\rho$ has action $(\Pi(g)F)(x)=D_g(x)^{1/2}F(g^{-1}x)$ on covariant $F$ and is independent of the choice of rho-function and of the equivalent measure representative in the class ([[lem-induced-representations-carry-a-canonical-system-of-imprimitivity]], [[def-covariant-function-model-of-unitary-induction]], [[lem-the-induced-action-is-unitary]], [[thm-unitary-induction-from-a-closed-subgroup]], [[thm-induced-representation-is-independent-of-rho-function-and-measure-representative]]).

[F4] Multiplication by a Borel field of unitary operators is unitary on the direct integral and commutes with every $M_f$; the commutant of the multiplications consists of the decomposable operators ([[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]], [[def-direct-integral-of-a-measurable-hilbert-field]]).

[F5] AC is the standing hypothesis ([[def-axiom-of-choice]], [[def-strongly-continuous-unitary-representation]], [[def-transitive-system-of-imprimitivity]], [[def-unitary-equivalence-of-systems-of-imprimitivity]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the normalized model with $B,\sigma$ and the cocycle fields.

1.1 Multiplication $M_B$ by the Borel unitary field $x\mapsto B_x$ is a unitary of $L^2(G/H,\mu;K)$ by [F4], and it commutes with every $M_f$ because $f(x)I_K$ commutes with the operator $B_x$ in every fibre. [F4]

2.1 Action computation: for $f$ in the model, using [F1] and then the strict factorization [F2] evaluated at the source point $g^{-1}x$, where $h(g,g^{-1}x)=s(x)^{-1}gs(g^{-1}x)$, $$(M_B^{-1}WU_gW^{-1}M_Bf)(x)=B_x^{-1}D_g(x)^{1/2}\bigl(B_x\sigma(h(g,g^{-1}x))B_{g^{-1}x}^{-1}\bigr)B_{g^{-1}x}f(g^{-1}x),$$ so the $B$-factors cancel and the result is $D_g(x)^{1/2}\sigma(s(x)^{-1}gs(g^{-1}x))f(g^{-1}x)$. By [F3] this is exactly the canonical induced action of $\operatorname{Ind}_H^G\sigma$ in section coordinates: identifying a square-integrable section $f$ with the covariant function determined by $F(s(x))=f(x)$ and $F(xh)=\sigma(h)^{-1}F(x)$, one has $F(g^{-1}s(x))=\sigma(h(g,g^{-1}x))F(s(g^{-1}x))$ because $g^{-1}s(x)=s(g^{-1}x)h(g^{-1},x)$ and $h(g^{-1},x)=h(g,g^{-1}x)^{-1}$, so the induced formula $(\Pi(g)F)(x)=D_g(x)^{1/2}F(g^{-1}x)$ becomes the displayed action; the measure $\mu$ lies in the class used by the induced model by [F3]. [F1, F2, F3, step 1.1]

2.2 PVM transport: $M_B$ commutes with $M_{\mathbf 1_E}$, so $M_B^{-1}WP(E)W^{-1}M_B=M_B^{-1}M_{\mathbf 1_E}M_B=M_{\mathbf 1_E}$ for every Borel $E$. [F4, step 1.1]

3.1 Consequently the composite $\Phi:=M_B^{-1}W:H_0\to L^2(G/H,\mu;K)$ is a unitary (a composite of unitaries), and by [step 2.1] and [step 2.2] it intertwines $U_g$ with the canonical induced action and $P(E)$ with multiplication by $\mathbf 1_E$. Being unitary, $\Phi$ is isometric; the target is identified with the induced space of $\sigma$ by [F3]. [step 2.1, step 2.2]

4.1 Thus the transitive system $(U,P)$ is unitarily equivalent to the canonical induced system of $\sigma$ by the isometric intertwiner $\Phi$, which is the reconstruction map of the statement. [step 3.1, F5] ∎ 