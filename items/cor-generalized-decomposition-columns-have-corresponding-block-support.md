---
id: cor-generalized-decomposition-columns-have-corresponding-block-support
kind: corollary
title: Generalized decomposition columns have corresponding block support
status: draft
origin: pipeline
deps: [thm-brauer-second-main-theorem, thm-blocks-partition-ordinary-and-brauer-irreducible-characters, def-algebraically-closed-field, def-axiom-of-choice]
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
    - title: "Craven, The Brauer Correspondence, Theorem 2.22, pp. 29–30"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
    - title: "Meierfrankenfeld, MTH 912 Class Notes, Theorem 6.7.15, pp. 169–171"
      url: "https://web.archive.org/web/20220618221643id_/https://users.math.msu.edu/users/meierfra/Classnotes/MTH912F04/912F04master.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(K,\mathcal O,k)$ be a splitting
$p$-modular system for a finite group $G$, with $k$ algebraically closed.
Fix a $p$-element $u$, put $H=C_G(u)$, let $c$ be a block of $kH$, and let
$\varphi\in\operatorname{IBr}(H,c)$. If
$\chi\in\operatorname{Irr}_K(G,B)$ for a block $B$ of $kG$, then
$$  d^u_{\chi,\varphi}\ne0\quad\Longrightarrow\quad B=c^G.$$
Thus the generalized-decomposition column indexed by $\varphi$ has nonzero
rows in at most the single global block $c^G$; in particular it cannot have
nonzero entries in two distinct global blocks.

## Facts & Assumptions

**Given:** AC and the modular system, element, centralizer, local block,
Brauer character, and row in the Statement.

[F1] Brauer's Second Main Theorem gives the required block-support
implication for each row ([[thm-brauer-second-main-theorem]]).

[F2] Every ordinary irreducible belongs to one and only one global block
([[thm-blocks-partition-ordinary-and-brauer-irreducible-characters]]).

[F3] The algebraically closed residue-field condition and AC are the
hypotheses of F1 ([[def-algebraically-closed-field]] and
[[def-axiom-of-choice]]).

## Proof

1.1 Apply F1 to the row $\chi\in\operatorname{Irr}_K(G,B)$ and the fixed local character $\varphi\in\operatorname{IBr}(H,c)$. A nonzero entry gives $c^G=B$, proving the displayed implication. [F1, F3]

2.1 By F2 each row has a unique global block. Therefore any two nonzero rows in this column both belong to $c^G$ and cannot lie in distinct blocks. The argument permits the whole column to be zero and does not assert that any allowed entry is nonzero. The row set is finite; AC and algebraic closedness are used only through F1. [F1, F2, F3, step 1.1] ∎

