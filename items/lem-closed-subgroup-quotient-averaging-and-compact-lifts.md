---
id: lem-closed-subgroup-quotient-averaging-and-compact-lifts
kind: lemma
title: "Compact lifts and averaging onto C_c(G/H)"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, lem-compactly-supported-kernels-admit-commuting-radon-integrals]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume AC. If $H$ is closed in a locally compact Hausdorff group $G$, then $X=G/H$ is locally compact Hausdorff and the quotient map $p:G\to X$ is open. Every compact $Q\subseteq X$ lies in $p(K)$ for some compact $K\subseteq G$. For fixed left Haar measure $dh$ on $H$, $T_Hf(xH)=\int_H f(xh)\,dh$ maps $C_c(G)$ onto $C_c(X)$.

## Facts & Assumptions

**Given:** The LCH group $G$, its closed subgroup $H$, and AC.

[F1] AC implies DC, and under DC a compact set inside an open LCH set admits a $C_c$ cutoff ([[thm-choice-implies-dependent-implies-countable-choice]], [[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]).

[F2] For compactly supported continuous kernels on two LCH spaces, the two positive Radon integrations commute and the partial integrals are continuous with compact support ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[A1] AC is the choice-function principle ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The quotient map is open because $p^{-1}(p(O))=OH$ is open whenever $O\subseteq G$ is open. To separate distinct cosets $xH,yH$, note $y^{-1}x\notin H$. Closedness gives an open neighborhood $W$ of $y^{-1}x$ disjoint from $H$. Continuity of $(v,u)\mapsto v^{-1}y^{-1}xu$ gives identity neighborhoods $V,U$ with $V^{-1}y^{-1}xU\subseteq W$; hence $p(xU)$ and $p(yV)$ are disjoint. Thus $X$ is Hausdorff. If $U$ is a relatively compact open neighborhood of $x$, then $p(U)$ is open and its closure lies in the compact, hence closed, set $p(\overline U)$, so $X$ is locally compact. [given, construct]
2.1 For compact $Q\subseteq X$, cover $Q$ by sets $p(U_q)$ where each $U_q$ is relatively compact and open. A finite subcover exists, and the union $K$ of the corresponding finitely many compact closures satisfies $Q\subseteq p(K)$. [step 1.1, choose]
2.2 For each $f\in C_c(G)$, the function $x\mapsto\int_H f(xh)\,dh$ is continuous locally on $G$: around any $x_0$ choose a compact neighborhood $K$; the kernel $(x,h)\mapsto f(xh)$ on $K\times H$ is supported in the compact set $\{(x,h)\in K\times H:xh\in\operatorname{supp}f\}$, so [F2] gives continuity there. Left invariance of $dh$ makes this function right $H$-invariant, and openness of $p$ makes its descended function $T_Hf$ continuous. Its support lies in the compact set $p(\operatorname{supp}f)$, so $T_Hf\in C_c(X)$. [F2, step 1.1, construct]
3.1 Let $\phi\in C_c(X)$ and $Q=\operatorname{supp}\phi$. By [A1], choose a lift $x_q$ of each $q\in Q$. For each lift apply [F1] to the singleton and a relatively compact open neighborhood to obtain a nonnegative $u_q\in C_c(G)$ with $u_q(x_q)=1$. A nonzero left Haar measure has full support: its support is a nonempty closed set invariant under every left translation, hence is all of $H$. Thus $u_q(x_q\cdot)$ has positive integral on $H$, so $T_Hu_q(q)>0$. By continuity from step 2.2, $T_Hu_q$ stays positive on a neighborhood of $q$. A finite subcover of $Q$ gives $u=\sum_i u_{q_i}$ with $T_Hu>0$ on an open neighborhood $W$ of $Q$. The function $\psi=\phi/(T_Hu)$ on $W$, extended by zero, is in $C_c(X)$ because its support is contained in the compact set $Q\subset W$. Set $f=(\psi\circ p)u$. Then $f\in C_c(G)$ and $T_Hf=\psi T_Hu=\phi$, also when $\phi=0$ (use $f=0$). Thus $T_H:C_c(G)\to C_c(X)$ is onto; compact lifts were proved in step 2.1. ∎ [A1, F1, F2, step 1.1, step 2.1, step 2.2, choose, construct]
## Sources

- Bekka, de la Harpe, and Valette, *Kazhdan’s Property (T)*, Appendix B §B.1, Lemma B.1.1 (compact lifts) and Lemma B.1.2 (surjectivity of subgroup averaging), PDF pp. 349–352. Full relevant text was inspected; this proof supplies the local quotient-topology and compact-kernel details.
- Bruhat, *Lectures on Lie Groups and Representations of Locally Compact Groups*, Chapter 7 §3.3, Proposition 2, PDF pp. 72–74. Bruhat writes the opposite coset convention; the displayed formulas here use left cosets $G/H$ and $f(xh)$.
