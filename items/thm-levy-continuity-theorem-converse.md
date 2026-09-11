---
id: "thm-levy-continuity-theorem-converse"
kind: "theorem"
title: "Levy continuity theorem converse"
deps: ["thm-tightness-from-characteristic-function-equicontinuity-at-zero", "lem-basic-properties-of-characteristic-functions", "thm-levy-continuity-theorem-forward-direction", "thm-uniqueness-of-a-law-from-its-characteristic-function", "thm-prokhorov-tightness-theorem-on-polish-spaces", "thm-dominated-convergence", "def-axiom-of-choice", "def-weak-convergence-of-borel-probability-measures", "thm-continuity-from-below-for-measures", "thm-euclidean-space-complete", "def-polish-space", "thm-rationals-countable", "lem-rat-embeds-dense", "thm-heine-borel-rn", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $\mu_n$ be Borel probability laws on $\mathbb R$ with characteristic functions $\varphi_n$. If $\varphi_n(t)\to\psi(t)$ at every real $t$ and $\psi$ is continuous at zero, there is a unique Borel probability law $\mu$ with characteristic function $\psi$, and $\mu_n\Rightarrow\mu$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The triangular weight has mass one and bounds each law tail. [[thm-tightness-from-characteristic-function-equicontinuity-at-zero]].

[F2] Characteristic functions are continuous, normalized at zero and bounded by one. [[lem-basic-properties-of-characteristic-functions]].

[F3] Weak limits have pointwise limiting characteristic functions. [[thm-levy-continuity-theorem-forward-direction]].

[F4] Under AC a characteristic function determines at most one Borel law. [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

[F5] Under AC tight families on Polish spaces are relatively sequentially weakly compact. [[thm-prokhorov-tightness-theorem-on-polish-spaces]].

[F6] A fixed integrable majorant allows passage through the integral. [[thm-dominated-convergence]].

[F7] AC covers Prokhorov, Fourier uniqueness and the triangular-kernel integration bridge. [[def-axiom-of-choice]].

[F8] Weak convergence means convergence of every bounded continuous real test. [[def-weak-convergence-of-borel-probability-measures]].

[F9] An increasing exhaustion recovers the total mass. [[thm-continuity-from-below-for-measures]].

[F10] The usual real metric is complete. [[thm-euclidean-space-complete]].

[F11] A separable completely metrizable space is Polish. [[def-polish-space]].

[F12] The rationals form a countable set. [[thm-rationals-countable]].

[F13] The rationals are dense in the real line. [[lem-rat-embeds-dense]].

[F14] Closed bounded real intervals are compact. [[thm-heine-borel-rn]].

[F15] Real pointwise limits of measurable functions are measurable. [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]].

## Proof

**Proof technique:** direct.

1.1 Normalization and the pointwise limit give $\psi(0)=1$ and $|\psi|\le1$. Its real and imaginary parts are Borel as pointwise limits of continuous real functions. For a fixed $\delta>0$, put $I_n(\delta)=\int w_\delta(1-\operatorname{Re}\varphi_n)$ and $I(\delta)=\int w_\delta(1-\operatorname{Re}\psi)$. The integrands converge pointwise and lie between zero and $2w_\delta$, an integrable majorant of integral two. Hence $I_n(\delta)\to I(\delta)$. Given $\varepsilon>0$, continuity at zero permits $\delta>0$ so small that $|1-\psi(t)|<3\varepsilon/16$ on $[-\delta,\delta]$. Then $I(\delta)\le3\varepsilon/16$, and for every sufficiently large $n$, $I_n(\delta)<3\varepsilon/8$. The quantitative tail bound gives $\mu_n\{|x|\ge4/\delta\}<\varepsilon/2$ for those $n$. No equicontinuity of the sequence has been assumed. [F1, F2, F6, F15]

2.1 For each of the finitely many earlier indices, $\mu_n([-m,m])\uparrow1$ as $m\to\infty$. Taking the maximum of $4/\delta$ and finitely many radii therefore gives $R$ with $\mu_n(\mathbb R\setminus[-R,R])<\varepsilon$ for every $n$. This interval is compact, so the whole sequence is tight. The argument also covers the case of no exceptional early indices. The real line is complete, and its countable dense rational subset makes it Polish. Prokhorov now provides a subsequence $\mu_{n_j}\Rightarrow\mu$, with $\mu$ a Borel probability law. [step 1.1, F5, F9, F10, F11, F12, F13, F14]

3.1 For each real $t$, forward continuity gives $\varphi_\mu(t)=\lim_j\varphi_{n_j}(t)=\psi(t)$. Uniqueness of laws with a given characteristic function shows that this $\mu$ is unique. Every subsequence of the original sequence is tight by the same compact bounds and hence has a further weakly convergent subsequence; its limit has characteristic function $\psi$ by exactly the preceding equality and therefore equals $\mu$. [step 2.1, F3, F4, F5]

4.1 Fix a bounded continuous real $f$. If $\int f\,d\mu_n$ failed to converge to $\int f\,d\mu$, there would be $a>0$ and infinitely many indices whose errors are at least $a$. Enumerate them in increasing order, taking the least next index at every stage. Step 3.1 gives a further subsequence converging weakly to $\mu$, contradicting this fixed error bound for $f$. Thus every such test converges and $\mu_n\Rightarrow\mu$. At frequency zero all characteristic functions and $\psi$ equal one, so a zero-mass limit is excluded. Constant sequences and point masses need no separate nondegeneracy condition. AC here is inherited from Prokhorov (compact selections and its subsequence supplier), Fourier uniqueness, and the integration bridge; the least-index test argument uses no additional choice. [step 3.1, F7, F8] ∎
