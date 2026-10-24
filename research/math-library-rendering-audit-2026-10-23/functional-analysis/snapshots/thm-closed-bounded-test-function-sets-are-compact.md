---
id: "thm-closed-bounded-test-function-sets-are-compact"
kind: "theorem"
title: "Closed bounded test function sets are compact"
deps: ["lem-bounded-test-function-sets-have-common-compact-support", "lem-fixed-support-test-function-spaces-are-complete", "thm-arzela-ascoli-for-real-ck", "def-countable-choice", "def-dependent-choice", "thm-metric-compactness-equivalences", "lem-test-function-lf-topology-universal-property", "thm-mean-value-inequality"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Razvan Gelca, Functional Analysis; complete Chapter 7 reading recorded in batch coverage"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume Countable Choice and Dependent Choice. Every closed bounded subset $B$ of $\mathcal D(\Omega)$ is compact in its LF topology.

## Facts & Assumptions

[F1] Bounded tests have a common compact support and uniform bounds on every derivative seminorm ([[lem-bounded-test-function-sets-have-common-compact-support]]).

[F2] The fixed-support space $\mathcal D_K$ is complete for $d(f,g)=\sum_{m\ge0}2^{-m-1}\min(1,p_m(f-g))$ ([[lem-fixed-support-test-function-spaces-are-complete]]).

[F3] Under the stated choice assumptions, equicontinuous pointwise-bounded real families on a nonempty compact metric space have compact sup-norm closure ([[thm-arzela-ascoli-for-real-ck]]).

[F4] Under these assumptions a complete totally bounded metric space is compact, and compact metric spaces are totally bounded ([[thm-metric-compactness-equivalences]]).

[F5] The stage inclusion $\mathcal D_K\to\mathcal D(\Omega)$ is continuous ([[lem-test-function-lf-topology-universal-property]]).

[F6] The mean-value inequality bounds increments along line segments by a uniform derivative bound ([[thm-mean-value-inequality]]).

[F7] Assume [[def-countable-choice]] and [[def-dependent-choice]]. They supply F3 and F4; no assertion of their necessity is made.

## Proof

**Given:** a closed bounded $B$ and F7.

1.1 Empty $B$ is compact. Otherwise F1 gives compact $K\subseteq\Omega$ containing all supports, with $M_m=\sup_{f\in B}p_m(f)<\infty$. Regard the tests as globally smooth zero extensions and choose a nondegenerate closed box $Q$ whose interior contains $K$. For every multi-index $\alpha$, the real and imaginary parts of $\partial^\alpha f|_Q$, $f\in B$, are uniformly bounded by $M_{|\alpha|}$. Their segment derivatives have norm at most $\sqrt n M_{|\alpha|+1}$ times the segment direction norm. F6 therefore gives a common Lipschitz bound on $Q$, proving equicontinuity. F3 applies to each real family. [given, F1, F3, F6, F7]

2.1 Fix $\varepsilon>0$ and choose $N$ with $\sum_{m>N}2^{-m-1}<\varepsilon/2$. For each of the finitely many real and imaginary derivative families through order $N$, F3 and F4 give a finite sup-norm $\delta$-net, with $0<\delta<\varepsilon/8$. Assign each $f\in B$ the first net center within $\delta$ for each coordinate, using fixed finite listings. There are finitely many joint labels. Choose one member of each nonempty label class. If $f,g$ have the same label, their real and imaginary derivative differences through order $N$ are each less than $2\delta$, so $p_N(f-g)<4\delta<\varepsilon/2$. F2's metric then gives $d(f,g)<\varepsilon$. The finitely many representatives form an $\varepsilon$-net for $B$, proving total boundedness without an infinite diagonal selection. [step 1.1, F2, F3, F4]

3.1 By F5 the inverse image of the LF-closed set $B$ in $\mathcal D_K$ is closed; it is just $B$. A Cauchy sequence in $B$ converges in $\mathcal D_K$ by F2 and its limit belongs to $B$ by closedness. Thus $B$ is complete. F4 and step 2.1 imply metric compactness in $\mathcal D_K$. For any LF-open cover of $B$, inverse images under F5 give a stage-open cover; a finite subcover there is a finite subcover in the LF space. This proves the required compactness. If $K$ has empty interior, all its tests vanish and $B$ is a subset of the singleton zero space. F7 is used through F3 and F4, with no stronger choice. $\square$ [step 2.1, F2, F4, F5, F7]
