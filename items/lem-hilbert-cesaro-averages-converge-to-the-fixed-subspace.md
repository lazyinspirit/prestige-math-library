---
id: "lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace"
kind: "lemma"
title: "Hilbert cesaro averages converge to the fixed subspace"
deps: ["lem-closed-l-two-subspaces-have-orthogonal-projections", "def-l-two-operator-conventions-for-weak-mixing", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "thm-complex-lp-completeness-and-almost-everywhere-subsequences", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Sarig Theorem 2.1 pp.35–36
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
    - title: Axler 8.37–8.40 projection route
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $U$ be a linear isometry on a closed complex $L^2$ subspace $H$, and put $F=\ker(I-U)$. For each $f\in H$,
$$A_Nf=\frac1N\sum_{n=0}^{N-1}U^nf\longrightarrow P_Ff\quad\text{in norm as }N\to\infty.$$
Also $R=U(H)$ is closed, and $V=U^{-1}P_R$ is a linear contraction satisfying $\langle Uf,g\rangle=\langle f,Vg\rangle$ and $VU=I$. Here $U^{-1}$ means the inverse from $R$ to $H$, not a surjectivity assumption on $U$.

## Facts & Assumptions

[F1] Closed subspaces have unique orthogonal projections and orthogonal decompositions under AC [[lem-closed-l-two-subspaces-have-orthogonal-projections]].

[F2] Isometries preserve the pairing and the norm; adjoint and invariant-subspace conventions are fixed locally [[def-l-two-operator-conventions-for-weak-mixing]].

[F3] The complex pairing is sesquilinear and satisfies Cauchy–Schwarz [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F4] Assume AC [[def-axiom-of-choice]], as required for the projections and completeness used in their proof.

[F5] Under countable choice, complex $L^2$ is complete [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]].

## Proof

**Given:** $H$, $U$ and AC as stated; $N$ is a positive integer.

1.1 F5 and AC make the ambient complex $L^2$ complete. Hence its closed subspace $H$ is complete: an $H$-valued Cauchy sequence converges in the ambient space by F5, and closedness puts its limit in $H$. If $Uf_n$ converges in $H$, then $\|f_n-f_m\|=\|Uf_n-Uf_m\|$ makes $(f_n)$ Cauchy. Its limit $f\in H$ satisfies $Uf_n\to Uf$ by isometry, so $R$ is closed. Isometry makes $U$ injective; its inverse on $R$ is linear and isometric. The projection $P_R$ therefore defines the linear contraction $V=U^{-1}P_R$. [F1, F2, F4, F5]

1.2 Let $M=\overline{(I-U)H}$. This is a closed subspace: sums and scalar multiples of limits remain limits by the norm inequalities. If $h\perp M$, then $\langle h,h-Uh\rangle=0$, whence $\langle h,Uh\rangle=\|h\|^2$. Expansion and isometry give $\|h-Uh\|^2=2\|h\|^2-2\operatorname{Re}\langle h,Uh\rangle=0$, so $Uh=h$. Conversely, if $Uh=h$, then for each $g\in H$, $\langle h,Ug\rangle=\langle Uh,Ug\rangle=\langle h,g\rangle$. Thus $h$ is orthogonal to $(I-U)H$, and Cauchy–Schwarz extends orthogonality to its closure. Consequently $M^\perp=F$. [F2, F3]

2.1 Write $P_Rg=Uh$. Orthogonality gives $\langle Uf,g\rangle=\langle Uf,Uh\rangle=\langle f,h\rangle=\langle f,Vg\rangle$. Since $P_RUf=Uf$, we have $VUf=f$. This proves the adjoint identity without a representation theorem or an inverse of $U$ on all of $H$. [F1, F2, step 1.1]

2.2 By orthogonal decomposition, $H=M\oplus F$. The subspace $F$ is closed, either as $M^\perp$ or directly by continuity of $I-U$. In the decomposition $f=m+h$, $m\in M$, $h\in F$, the vector $m$ is orthogonal to $F$, so uniqueness of projection gives $h=P_Ff$. [F1, step 1.2]

2.3 Isometry and the triangle inequality give $\|A_N\|\le1$. For $g\in H$, cancellation of the finite sum gives $A_N(I-U)g=(g-U^Ng)/N$, of norm at most $2\|g\|/N$. For $m\in M$ and $\varepsilon>0$, choose one $g$ with $\|m-(I-U)g\|<\varepsilon$. Hence $\limsup_N\|A_Nm\|\le\varepsilon$. As $\varepsilon$ is arbitrary, $A_Nm\to0$. No sequence of such approximants is needed. [F2, step 1.2]

3.1 For $h\in F$, every $U^nh=h$, so $A_Nh=h$. Applying this and the previous limit to $f=m+h$ gives $A_Nf\to h=P_Ff$. For $N=1$ the average is the identity; zero vectors and $H=\{0\}$ obey every formula without division by a vector norm. AC is inherited from the projection/completeness argument in step 1.1 and the projections in step 2.2. [F4, step 1.1, step 2.2, step 2.3] ∎
