---
id: cor-brownian-paths-are-locally-holder-of-every-order-below-one-half
kind: corollary
title: "Brownian paths are locally Holder below one half"
status: published
origin: pipeline
deps: [def-brownian-motion, thm-kolmogorov-continuity-criterion-one-parameter, lem-gaussian-even-moment-bound-for-brownian-increments, thm-rationals-countable, lem-rat-embeds-dense, thm-finite-and-countable-subadditivity-of-measures, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal, thm-of-archimedean, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Section 6.2"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Nobuaki Yoshida, Probability Theory, Section 6.1"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
---

## Statement

Assume the Axiom of Choice. If $B$ is a standard Brownian motion, then there is
one event $H$ of probability one such that, for every $\omega\in H$, every
$T>0$, and every $0<\gamma<1/2$, there is a finite constant
$K=K(\omega,T,\gamma)$ satisfying
$$|B_t(\omega)-B_s(\omega)|\le K|t-s|^\gamma \qquad(0\le s,t\le T).$$
Thus the assertion holds for the given continuous Brownian version, not merely
for some unrelated modification.

## Facts & Assumptions

**Given:** A standard Brownian motion $B$.

[F1] Brownian increments have law $N(0,|t-s|)$, and the Brownian definition supplies one probability-one event of continuous paths. [[def-brownian-motion]]

[F2] For each integer $m\ge2$, Brownian increments satisfy the Kolmogorov moment bound with exponent threshold $(m-1)/(2m)$. [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] The continuity criterion gives a continuous modification which is locally Hölder for every exponent below its threshold, simultaneously. [[thm-kolmogorov-continuity-criterion-one-parameter]]

[F4] The rationals are countable and dense; a countable union of null events is null. [[thm-rationals-countable]] [[lem-rat-embeds-dense]] [[thm-finite-and-countable-subadditivity-of-measures]]

[F5] Two continuous real-valued maps agreeing on a dense subset are equal. [[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]

[F6] The natural numbers are cofinal in the reals. [[thm-of-archimedean]]

[F7] AC is available to select the countable family of modifications furnished by [F3]. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For each integer $m\ge2$, [F1]--[F3] give a continuous modification $Y^{(m)}$ of $B$ and a probability-one event $H_m$ on which its paths are locally Hölder for every exponent below $(m-1)/(2m)$. Use [F7] to select one such pair for each $m$. [given, F1, F2, F3, F7]

2.1 Let $C$ be the probability-one continuity event for $B$ from [F1]. For each $m$ and nonnegative rational $q$, modification gives $P(B_q=Y^{(m)}_q)=1$. By countability and subadditivity in [F4], the intersection $$H=C\cap\bigcap_{m\ge2}H_m\cap\bigcap_{m\ge2}\bigcap_{q\in\mathbb Q_{\ge0}}\{B_q=Y^{(m)}_q\}$$ has probability one. [step 1.1, F1, F4]

3.1 Fix $\omega\in H$ and $m\ge2$. On every interval $[0,N]$, the two real functions $t\mapsto B_t(\omega)$ and $t\mapsto Y^{(m)}_t(\omega)$ are continuous and agree on the dense rational subset. By [F4]--[F5] they agree everywhere on $[0,N]$, hence on $[0,\infty)$. Therefore $B(\omega)$ inherits all local Hölder exponents below $(m-1)/(2m)$. [step 2.1, F4, F5]

4.1 Given $0<\gamma<1/2$, [F6] supplies an integer $m\ge2$ so large that $1/(2m)<1/2-\gamma$, equivalently $\gamma<(m-1)/(2m)$. Step 3.1 then gives the displayed Hölder bound on every $[0,T]$, with its constant allowed to depend on $\omega,T,\gamma$. The same event $H$ works for all uncountably many $\gamma$, because only the countable integer family was intersected. AC is used exactly at step 1.1 and through the normal-law content of [F1]--[F2]. [step 1.1, step 3.1, F1, F2, F6, algebra] ∎

## Source notes

Sousi and Yoshida give the Brownian Hölder conclusion below one half from even normal moments and Kolmogorov continuity. Steps 2.1--3.1 supply the explicit dense-set indistinguishability argument that transfers the property back to the given continuous Brownian version.
