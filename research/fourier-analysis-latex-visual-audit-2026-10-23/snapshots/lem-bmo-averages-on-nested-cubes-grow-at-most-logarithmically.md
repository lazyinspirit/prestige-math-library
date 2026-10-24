---
id: lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically
kind: lemma
title: "BMO averages on nested cubes grow at most logarithmically"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-bmo-seminorm-and-quotient-by-constants, def-multidimensional-rectangle-and-volume]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Lemma 7.4 (nested cubes with side lengths halving: $|f_{Q_n}-f_{Q_0}|\\le2dn|f|_{\\mathrm{BMO}}$), printed p. 30"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "the telescoping consequence of Lemma 3.2 before Theorem 3.15, printed pp. 44-45"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "the Calderon-Zygmund iteration section, printed p. 13"
---

## Statement

There is $C_n<\infty$ such that for every $b\in\mathrm{BMO}(\mathbb R^n)$ and
all cubes $Q\subseteq R$, writing $\ell(Q)$ for the side length,
$|b_Q-b_R|\le C_n\bigl(1+\log_2(\ell(R)/\ell(Q))\bigr)\|b\|_{\mathrm{BMO}}$.

## Facts & Assumptions

**Given:** $b\in\mathrm{BMO}(\mathbb R^n)$ and cubes $Q\subseteq R$ with side lengths $\ell(Q)\le\ell(R)$, together with the mean $b_E=|E|^{-1}\int_Eb$, the seminorm and the cube and volume conventions of [[def-bmo-seminorm-and-quotient-by-constants]] and [[def-multidimensional-rectangle-and-volume]].

[F1] For every cube $E$, $|E|^{-1}\int_E|b-b_E|\le\|b\|_{\mathrm{BMO}}$, and for cubes $E\subseteq F$ one has $|b_E-b_F|\le|E|^{-1}\int_E|b-b_F|\le(|F|/|E|)\|b\|_{\mathrm{BMO}}$ ([[def-bmo-seminorm-and-quotient-by-constants]]).

[F2] A cube is a nondegenerate axis-parallel cube; the concentric cube with side length $2^k\ell(Q)$ has volume $2^{kn}|Q|$, and a cube whose side length is at most that of $R$ and which is contained in $R$ has volume at most $|R|$ ([[def-multidimensional-rectangle-and-volume]]).

## Proof

**Proof technique:** direct.

1.1 If $Q=R$ the claim is trivial, so assume $Q\subsetneq R$. Let $m\ge0$ be the least integer such that $2^m\ell(Q)\ge2\ell(R)$, and let $R'$ be the cube concentric with $Q$ of side length $2^m\ell(Q)$. The centres of $Q$ and $R$ both lie in $R$, so their coordinatewise distance is at most $\ell(R)/2$; every point of $R$ is therefore within coordinate distance $\ell(R)$ of the centre of $Q$, and $R\subseteq R'$. Since $Q\subsetneq R$, $\ell(Q)<\ell(R)$, so $m\ge1$. Minimality gives $2^{m-1}\ell(Q)<2\ell(R)$ and hence $2^m\ell(Q)<4\ell(R)$. Therefore $|R'|=2^{mn}|Q|<4^n|R|$. [F2, algebra]

2.1 Let $Q=Q_0\subseteq Q_1\subseteq\cdots\subseteq Q_m=R'$ be the concentric cubes of side lengths $2^k\ell(Q)$. Since $|Q_{k+1}|=2^n|Q_k|$, [F1] gives $|b_{Q_k}-b_{Q_{k+1}}|\le|Q_k|^{-1}\int_{Q_k}|b-b_{Q_{k+1}}|\le2^n\|b\|_{\mathrm{BMO}}$ for each $k<m$, and the triangle inequality over the $m$ steps gives $|b_Q-b_{R'}|\le m2^n\|b\|_{\mathrm{BMO}}$. [step 1.1, F1]

2.2 Since $R\subseteq R'$, [F1] and step 1.1 give $|b_{R'}-b_R|\le|R|^{-1}\int_R|b-b_{R'}|\le(|R'|/|R|)\|b\|_{\mathrm{BMO}}\le4^n\|b\|_{\mathrm{BMO}}$. [step 1.1, F1]

3.1 Combining steps 2.1 and 2.2, $|b_Q-b_R|\le(2^nm+4^n)\|b\|_{\mathrm{BMO}}$. From $2^m\ell(Q)<4\ell(R)$ we get $m<2+\log_2(\ell(R)/\ell(Q))$, hence $m\le2+\log_2(\ell(R)/\ell(Q))\le2\bigl(1+\log_2(\ell(R)/\ell(Q))\bigr)$. Therefore $|b_Q-b_R|\le(2^{n+1}+4^n)\bigl(1+\log_2(\ell(R)/\ell(Q))\bigr)\|b\|_{\mathrm{BMO}}$, which is the claim with $C_n=2^{n+1}+4^n$. [step 2.1, step 2.2, algebra] ∎ 
