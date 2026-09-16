---
id: lem-local-block-projection-controls-generalized-decomposition-support
kind: lemma
title: Local block projection controls p-section character support
status: published
origin: pipeline
deps: [lem-block-idempotents-lift-uniquely-from-kh-to-oh, def-brauer-subsection, thm-nagao-decomposition-for-restriction-to-a-centralizer, lem-nagao-error-terms-have-zero-trace-on-the-relevant-p-section, thm-blocks-partition-ordinary-and-brauer-irreducible-characters, def-algebraically-closed-field, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Craven, The Brauer Correspondence, Lemma 2.21 and Theorem 2.22, pp. 29–30"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
    - title: "Meierfrankenfeld, MTH 912 Class Notes, Lemmas 6.7.8–6.7.14, pp. 164–169"
      url: "https://web.archive.org/web/20220618221643id_/https://users.math.msu.edu/users/meierfra/Classnotes/MTH912F04/912F04master.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(K,\mathcal O,k)$ be a splitting
$p$-modular system for a finite group $G$, with $k$ algebraically closed.
Let $B$ be a block of $kG$, let
$\chi\in\operatorname{Irr}_K(G,B)$, let $u$ be a $p$-element, and put
$H=C_G(u)$. For a block $c$ of $kH$, let
$$ V_c=\widehat c\,\operatorname{Res}_H^G V_\chi$$
and write $\chi_c$ for its ordinary character, where $V_\chi$ is a simple
$KG$-module affording $\chi$. If $c^G\ne B$, then
$$  \chi_c(uv)=0$$
for every $p$-regular $v\in H$.

## Facts & Assumptions

**Given:** AC and the modular system, blocks, character, element, and local component in the Statement.

[F1] Integral block lifts exist uniquely ([[lem-block-idempotents-lift-uniquely-from-kh-to-oh]]), and ordinary irreducibles belong to unique blocks ([[thm-blocks-partition-ordinary-and-brauer-irreducible-characters]]).

[F2] The subsection convention makes every $c^G$ defined ([[def-brauer-subsection]]). Nagao supplies $M=M_{\mathrm{corr}}\oplus M_{\mathrm{err}}$, every indecomposable summand of $M_{\mathrm{corr}}$ belonging to a block $d$ with $d^G=B$, and every indecomposable summand of $M_{\mathrm{err}}$ having no vertex containing $\langle u\rangle$ ([[thm-nagao-decomposition-for-restriction-to-a-centralizer]]).

[F3] Every indecomposable Nagao error summand has zero trace at $uv$ ([[lem-nagao-error-terms-have-zero-trace-on-the-relevant-p-section]]), under the algebraically closed residue-field hypothesis ([[def-algebraically-closed-field]]).

[F4] AC is available ([[def-axiom-of-choice]]) and is used through the AC-stated suppliers F2–F3. The lattice construction and projection below are finite.

## Proof

1.1 Choose a $K$-basis $w_1,\ldots,w_n$ of $V_\chi$ and set $$ M=\sum_{g\in G,\,1\leq i\leq n}\mathcal O\,gw_i. $$ This is a finitely generated, $G$-stable, torsion-free $\mathcal O$-module spanning $V_\chi$ over $K$, hence is finite free because $\mathcal O$ is a DVR. Thus $M$ is an $\mathcal O G$-lattice affording $\chi$. Since $\chi$ belongs to $B$, F1 says that $\widehat B$ acts as the identity on $V_\chi$, and therefore $\widehat BM=M$. [F1, construct]

1.2 Apply Nagao with $D=\langle u\rangle$ and $H=C_G(u)$. Its hypotheses hold because $D$ is central in $H$ and $DC_G(D)=H\leq N_G(D)$. Suppose $c^G\ne B$. Each indecomposable summand of $M_{\mathrm{corr}}$ belongs by F2 to a block $d$ with $d^G=B$. Thus $d\ne c$, so orthogonality of the lifted block idempotents from F1 gives $\widehat cM_{\mathrm{corr}}=0$. Consequently [F1, F2]
$$M_c=\widehat cM=\widehat cM_{\mathrm{err}},$$ which is a direct summand of $M_{\mathrm{err}}$. Decompose $M_c$ into finitely many indecomposable $\mathcal O H$-lattices. Each is therefore an indecomposable summand of $M_{\mathrm{err}}$, so F3 makes its character zero at $uv$. [F3, F4]

2.1 Scalar extension commutes with the idempotent projection: $$ K\otimes_{\mathcal O}M_c \cong \widehat c\,(K\otimes_{\mathcal O}M) =V_c. $$ Adding the finitely many zero traces from step 1.2 proves $\chi_c(uv)=0$. This also shows that the character component is independent of the chosen stable lattice. If $M_c=0$ the character is zero identically; if $u=1$, Nagao has no error part, so the antecedent $c^G\ne B$ forces this zero case. Algebraic closedness and AC are used exactly through F3 and the AC-stated block contracts. [F1, F3, step 1.1, step 1.2] ∎
