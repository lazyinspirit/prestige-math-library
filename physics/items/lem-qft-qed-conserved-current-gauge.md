---
id: lem-qft-qed-conserved-current-gauge
kind: lemma
title: Gauge-longitudinal kernel decoupling for explicit tree currents
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - lem-qft-qed-tree-ward
dependency_roles:
  lem-qft-qed-tree-ward: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, §6.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; explicit tree-level cancellation of longitudinal covariant-gauge propagator terms by on-shell Dirac currents.
    - title: Mark Srednicki, Quantum Field Theory, §§67–68
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete author-hosted draft; external-photon Ward identities and exact vertex relation, printed pp. 400–404. The present claim is only finite tree algebra.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Use $h=-\eta=\operatorname{diag}(1,-1,-1,-1)$ from [[lem-qft-qed-tree-ward]] for contractions: for $w\in\mathbb C^4$, set $w_a=\sum_{b=0}^3h_{ab}w^b$, and sum repeated component indices over $0,1,2,3$. Let $p_1,p_1',p_2,p_2'$ be future-shell momenta for the same $\mu>0$ convention as that lemma, and suppose $k=p_1-p_1'=p_2'-p_2$. Define
$$ J_1^\mu:=\bar u(p_1')\gamma^\mu u(p_1),\qquad J_2^\nu:=\bar u(p_2')\gamma^\nu u(p_2), $$
with the on-shell Dirac equations in [[lem-qft-qed-tree-ward]]. If a finite rational covariant-gauge kernel changes by $\Delta D_{\mu\nu}(k)=c(k)k_\mu k_\nu$, where $c(k)\in\mathbb C$ is finite at the chosen $k$, then
$$ J_1^\mu\Delta D_{\mu\nu}(k)J_2^\nu=0. $$
Likewise, let $J^a=\bar u(p')\gamma^a u(p)$ with transfer $\ell=p-p'$, or $J^a=\bar v(q)\gamma^a u(p)$ with transfer $\ell=p+q$, under the respective future-shell and Dirac-equation hypotheses of [[lem-qft-qed-tree-ward]]. If $k=\ell$ or $k=-\ell$, then for $\epsilon\in\mathbb C^4$ and a finite $\alpha\in\mathbb C$, the contraction $\epsilon_aJ^a$ is unchanged by $\epsilon^a\mapsto\epsilon^a+\alpha k^a$. These statements concern only the displayed finite tree-current contractions; they assert no gauge independence for arbitrary loop diagrams or renormalization schemes.

## Facts & Assumptions

**Given:** The four future-shell spinors and momenta in the Statement, with transfers $k$ and $-k$ on the two fermion lines.

[F1] [[lem-qft-qed-tree-ward]]: for each stated on-shell Dirac current, contraction with its momentum transfer is zero; the proof uses the fixed $h=-\eta$ slash convention.

[A1] $\mu>0$; each displayed momentum lies on the future shell $h(p,p)=\mu^2$; the two kernel currents' spinors satisfy the positive-energy Dirac equations in the cited tree lemma; $k=p_1-p_1'=p_2'-p_2$; and $c(k)\in\mathbb C$ is finite at the selected $k$. In the separate polarization clause, the chosen current satisfies the respective positive- or negative-energy equations of that lemma, its transfer $\ell$ equals $k$ or $-k$, and $\epsilon\in\mathbb C^4$ and $\alpha\in\mathbb C$ are finite data. All contractions use $h$ as specified in the Statement.

## Proof

1.1 The first line has transfer $p_1-p_1'=k$, so [F1] gives $k_\mu J_1^\mu=0$. The second line has transfer $p_2-p_2'=-k$, so $(-k)_\nu J_2^\nu=0$, hence $k_\nu J_2^\nu=0$. [A1, F1, algebra]

2.1 Contracting the longitudinal kernel gives
$$ J_1^\mu\Delta D_{\mu\nu}(k)J_2^\nu =c(k)(k_\mu J_1^\mu)(k_\nu J_2^\nu)=0 $$
by [step 1.1]. [A1, step 1.1, algebra]

3.1 For either polarization-current form in the Statement, [F1] gives $\ell_aJ^a=0$. Since [A1] requires $k=\ell$ or $k=-\ell$, it follows that $k_aJ^a=0$. Lowering the shifted polarization with $h$, the change in its contraction is $\alpha k_aJ^a=0$. This proves the polarization claim for both explicit current types, including the transfer $-k$ of the second kernel current. [A1, F1, algebra] ∎
