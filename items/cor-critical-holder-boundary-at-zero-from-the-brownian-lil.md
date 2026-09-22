---
id: cor-critical-holder-boundary-at-zero-from-the-brownian-lil
kind: corollary
title: "The critical Hölder boundary at zero"
status: draft
origin: pipeline
deps: [cor-brownian-law-of-the-iterated-logarithm-at-zero, cor-brownian-paths-are-locally-holder-of-every-order-below-one-half, lem-rat-embeds-dense, def-axiom-of-choice, def-brownian-motion]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nobuo Yoshida, Probability Theory, Section 6.3 (subcritical Hölder regularity and the critical-boundary remark)"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 8.5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion [[def-brownian-motion]]. Almost surely
both of the following hold.

1. For every exponent $0<\alpha<1/2$ and every $T>0$ the path is
   $\alpha$-Hölder on $[0,T]$, that is, locally below the critical exponent.
2. The path is not one-half Hölder at zero: there is no finite constant $C$
   and no $\delta>0$ with $|B_t|\le C\sqrt t$ for all $0<t<\delta$. In fact
   $|B_t|/\sqrt t$ is unbounded as $t\downarrow0$.

The second assertion concerns the critical exponent at the single point $0$;
the first concerns uniform subcritical Hölder bounds on each compact interval.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] There is a probability-one event on which, for every $T>0$ and every $0<\gamma<1/2$, a finite $K=K(\omega,T,\gamma)$ satisfies $|B_t-B_s|\le K|t-s|^\gamma$ for all $0\le s,t\le T$. [[cor-brownian-paths-are-locally-holder-of-every-order-below-one-half]]

[F2] Almost surely $\limsup_{t\downarrow0}\frac{B_t}{\sqrt{2t\log\log(1/t)}}=1$ and $\liminf_{t\downarrow0}\frac{B_t}{\sqrt{2t\log\log(1/t)}}=-1$. [[cor-brownian-law-of-the-iterated-logarithm-at-zero]]

[F3] The rationals are dense in $\mathbb R$. [[lem-rat-embeds-dense]]

[F4] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 On the probability-one event of [F1], for every $T>0$ and every $0<\gamma<1/2$ there is a finite constant $K$ with $|B_t-B_s|\le K|t-s|^\gamma$ on $[0,T]$; since $[0,T]$ contains $0$ and the exponents are ordered, this is precisely assertion 1. [F1, given]

1.2 On the probability-one event of [F2], put $r(t)=B_t/\sqrt{2t\log\log(1/t)}$ for $0<t<e^{-1}$. For every $\varepsilon>0$ the limsup and liminf bounds imply $-1-\varepsilon<r(t)<1+\varepsilon$ for all sufficiently small $t$, and $r(t)>1-\varepsilon$ occurs at arbitrarily small positive times. Hence $\limsup_{t\downarrow0}|r(t)|=1$; in particular $|r(t)|>1/2$ at arbitrarily small positive times. [F2]

2.1 Fix any finite $C\ge0$ and $\delta>0$. Since $\sqrt{2\log\log(1/t)}\to\infty$, choose $\eta>0$ smaller than $\delta$ and $e^{-1}$ such that this factor exceeds $2C$ whenever $0<t<\eta$. Step 1.2 supplies such a $t$ with $|r(t)|>1/2$. Then $|B_t|/\sqrt t=\sqrt{2\log\log(1/t)}\,|r(t)|>C$. As this works for every $C$ and $\delta$, the ratio is unbounded in every right neighborhood of zero and assertion 2 follows. A negative $C$ cannot bound the nonnegative ratio either. [step 1.2]

3.1 Intersect the events in steps 1.1 and 1.2 with $\{B_0=0\}$, also of probability one by the Brownian definition. Both assertions then hold simultaneously; since $B_0=0$, the critical bound written with $|B_t|$ is precisely the pointwise Hölder bound at zero. The correct exponent comparison is downward: for any $0<\alpha<1/2$, choose a rational $q$ with $\alpha<q<1/2$ using [F3] and an integer $N\ge\max(1,T)$. A bound with exponent $q$ on $[0,N]$ implies $|B_t-B_s|\le K N^{q-\alpha}|t-s|^\alpha$ on $[0,T]$, since $|t-s|^{q-\alpha}\le N^{q-\alpha}$; the diagonal is immediate. Thus rational exponents above each desired exponent suffice, not exponents below it. In this proof [F1] already supplies the single event for every exponent and horizon, so no further uncountable intersection is made. The normalizer in step 1.2 is used only at positive $t<e^{-1}$. AC is inherited through [F4] and the two Brownian suppliers; the arbitrarily-small-time argument requires no selected sequence of times. [step 1.1, step 1.2, step 2.1, F3, F4, given] ∎

## Source notes

The local Hölder supplier gives one full-measure event for all subcritical positive exponents and compact horizons. The zero-time LIL supplier gives arbitrarily small times at which its normalized absolute value exceeds one half. The proof combines these interfaces and gives the explicit downward power comparison.
