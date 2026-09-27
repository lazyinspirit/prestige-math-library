---
id: lem-null-meagre-tukey-inequalities
kind: lemma
title: Null-to-meagre Tukey inequalities
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-null-meagre-ideal-transfer-cantor-real, lem-ideal-tukey-morphism-controls-add-and-cof, lem-null-master-codes-and-summable-slaloms-are-tukey-equivalent, lem-meagre-master-codes-below-summable-slaloms, lem-null-meagre-master-codes-are-cofinal, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszyński, Invariants of Measure and Category, Theorem 3.12 and Lemmas 3.13–3.15, printed pp.8–11"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  precheck: pending
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

In ZFC, $\operatorname{add}(\mathcal N)\le
\operatorname{add}(\mathcal M)$ and
$\operatorname{cof}(\mathcal M)\le\operatorname{cof}(\mathcal N)$ for the
Lebesgue-null and meagre ideals on $\mathbb R$.

## Facts & Assumptions

**Given:** The two ideals and the indicated ZFC background.

[F1] The special good-clopen meagre family is inclusion-cofinal, and there
are Borel maps $u_M,v_M$ witnessing $\mathcal M_0\preceq\mathbb S$.
([[lem-meagre-master-codes-below-summable-slaloms]])

[F2] There are Borel maps $u_N,v_N$ witnessing
$\mathbb S\preceq\mathcal N_0$, where $\mathcal N_0$ is an
inclusion-cofinal null master family.
([[lem-null-master-codes-and-summable-slaloms-are-tukey-equivalent]],
[[lem-null-meagre-master-codes-are-cofinal]])

[F3] If $\mathcal I_0\preceq\mathcal J_0$ for inclusion-cofinal ideal
subfamilies, then $\operatorname{add}(\mathcal J)\le
\operatorname{add}(\mathcal I)$ and
$\operatorname{cof}(\mathcal I)\le\operatorname{cof}(\mathcal J)$;
extending from cofinal families and selecting one code for each distinct coded set uses AC. ([[lem-ideal-tukey-morphism-controls-add-and-cof]],
[[def-axiom-of-choice]])

[F4] The four null and meagre ideal invariants agree between Cantor space
and the real line. ([[lem-null-meagre-ideal-transfer-cantor-real]])

## Proof

**Proof technique:** composition of the coded morphisms.

1.1 For each distinct $A\in\mathcal M_0$, use [F3] to choose one special meagre code $f_A$ with $A=M_{f_A}^\mathrm{good}$; for each distinct $B\in\mathcal N_0$, choose one null master code $g_B$ with $B=N_{g_B}$. Define maps on the actual cofinal set families by $U(A)=N_{u_N(u_M(f_A))}$ and $V(B)=M_{v_M(v_N(g_B))}^\mathrm{good}$. If $U(A)\subseteq B$, then $N_{u_N(u_M(f_A))}\subseteq N_{g_B}$, so [F2] gives $u_M(f_A)\subseteq^*v_N(g_B)$; [F1] then gives $A=M_{f_A}^\mathrm{good}\subseteq M_{v_M(v_N(g_B))}^\mathrm{good}=V(B)$. Thus $U,V$ witness $\mathcal M_0\preceq\mathcal N_0$ for the actual inclusion-cofinal ideal subfamilies in the direction required by [F3]. Duplicate codes cause no ambiguity because the representatives were fixed once by AC. [F1, F2, F3]
2.1 Apply [F3] on Cantor space, using the cofinality in [F1] and [F2]. It gives $\operatorname{add}(\mathcal N_{2^\omega})\le \operatorname{add}(\mathcal M_{2^\omega})$ and $\operatorname{cof}(\mathcal M_{2^\omega})\le \operatorname{cof}(\mathcal N_{2^\omega})$. AC selects the code representatives in step 1.1 and the cofinal master covers in the extension step of [F3]; the underlying coded maps remain Borel and use fixed least-code choices. Transfer both values to $\mathbb R$ by [F4]. ∎ [step 1.1, F3, F4]
