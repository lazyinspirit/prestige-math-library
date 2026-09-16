---
id: lem-compact-lie-groups-admit-central-continuous-approximate-identities
kind: lemma
title: Central continuous approximate identities
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics, cor-normalized-haar-measure-on-a-compact-lie-group, def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group, thm-c-c-is-dense-in-l-p-for-radon-measures, def-axiom-of-choice, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-integration-against-haar-is-invariant-under-translations-and-conjugation]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, Lemmas 4.17–4.19 (density, strong continuity, and approximate identities)"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix Z §Z.2"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact Lie group with normalized Haar
measure $dg$. Then:

1. $C(G)$ is dense in $L^2(G)$, and both regular representations are strongly
   continuous: $\|L_xH-H\|_2\to0$ and $\|R_xH-H\|_2\to0$ as $x\to e$, for every
   $H\in L^2(G)$;
2. there are nonnegative continuous central functions $k_n\in C(G)$ with
   $\int_Gk_n\,dg=1$ and $k_n(x)=k_n(x^{-1})$, whose supports shrink to $\{e\}$,
   such that $T_{k_n}f\to f$ uniformly for every $f\in C(G)$ and
   $\|T_{k_n}H-H\|_2\to0$ for every $H\in L^2(G)$;
3. $T_kH$ is continuous for every $k\in C(G)$ and $H\in L^2(G)$;
4. every closed subspace of $L^2(G)$ invariant under the left regular
   representation is stable under the operators $T_k$ with $k$ central, and
   stable under conjugation averaging $H\mapsto\int_GH(x^{-1}\cdot x)\,dx$ and
   under inversion when the corresponding symmetries preserve the subspace.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure and bi-invariant metric $d$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar measure and the Hilbert-space theory cited.

[L1] $G$ carries a bi-invariant metric, so $d(gxg^{-1},e)=d(x,e)$ and $d(x^{-1},e)=d(x,e)$; $dg$ is a bi-invariant probability measure ([[prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics]], [[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[L2] $C_c(G)$ is dense in $L^2(G)$ for the Radon measure $dg$, and $C_c(G)=C(G)$ because $G$ is compact; the convolution operator $T_k$ is defined by $(T_kf)(x)=\int_Gk(x^{-1}y)f(y)\,dy=\int_Gk(u)f(xu)\,du$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group]]).

[L3] Haar measure is positive on nonempty open sets; a continuous function on the compact group is uniformly continuous; and the integral is linear, monotone, and translation invariant ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]]).

## Proof

**Proof technique:** direct.

1.1 $C(G)$ is dense in $L^2(G)$ by [L2], because a compact Lie group is a compact LCH space and $C_c(G)=C(G)$ there. [L2]

1.2 For a decreasing sequence $r_n\downarrow0$ put $b_n(x):=\max\{0,1-d(x,e)/r_n\}$; it is continuous, nonnegative, supported in the ball of radius $r_n$, central and inversion invariant by the bi-invariance of $d$, and its integral is positive because it is positive on the nonempty open ball of radius $r_n$; setting $k_n:=b_n/\int_Gb_n$ gives $k_n\ge0$, continuous, central, inversion invariant, of integral one, with support shrinking to $\{e\}$. [L1, L3]

1.3 For $k\in C(G)$ and $H\in L^2(G)$, $T_kH$ is continuous: for $x,x'\in G$ one has $|T_kH(x)-T_kH(x')|\le\|k(x^{-1}\cdot)-k(x'^{-1}\cdot)\|_2\|H\|_2$ by Cauchy–Schwarz, and the first factor tends to $0$ as $x'\to x$ by uniform continuity of $k$. [L2, L3]

2.1 Both regular representations are strongly continuous: given $H\in L^2(G)$ and $\varepsilon>0$, choose $c\in C(G)$ with $\|H-c\|_2<\varepsilon$ by step 1.1; since $c$ is uniformly continuous on $G$ and $G$ is compact, for $x$ close to $e$ one has $|c(x^{-1}y)-c(y)|<\varepsilon$ for all $y$, so $2\varepsilon+\|L_xc-c\|_2\ge\|L_xH-H\|_2$ tends to $0$ as $x\to e$; the same argument applies to $R_x$. [L2, L3, step 1.1]

2.2 For $f\in C(G)$ and $x\in G$, $(T_{k_n}f)(x)-f(x)=\int_Gk_n(u)\bigl(f(xu)-f(x)\bigr)\,du$ because $\int k_n=1$, so $|T_{k_n}f(x)-f(x)|\le\sup_{u\in\operatorname{supp}k_n}|f(xu)-f(x)|\to0$ uniformly in $x$ by uniform continuity of $f$ and the shrinking supports; hence $T_{k_n}f\to f$ uniformly. [L2, L3, step 1.2]

3.1 For $H\in L^2(G)$, $\|T_{k_n}H-H\|_2\le\sup_{u\in\operatorname{supp}k_n}\|R_uH-H\|_2$, again because $T_{k_n}H=\int k_n(u)R_uH\,du$ and $\int k_n=1$; by strong continuity (step 2.1) and the shrinking supports this tends to $0$. [L2, step 2.1, step 1.2]

4.1 Let $V\subseteq L^2(G)$ be closed and invariant under left translations, and let $k$ be central. For $H\in V$, the map $u\mapsto R_uH$ is continuous into $V$ by step 2.1, so $T_kH=\int_Gk(u)R_uH\,du$ is the limit in $L^2$ of its Riemann sums, each a finite linear combination of elements of $V$; closedness of $V$ gives $T_kH\in V$, and centrality of $k$ makes this the conjugation-averaged expression as well. If a closed subspace is moreover invariant under inversion or under conjugation, the same Riemann-sum argument applied to the isometric maps $u\mapsto H(u^{-1}x)$ and $x\mapsto H(gxg^{-1})$ shows stability under the corresponding averages. [A1, L2, step 2.1, step 1.2]∎
