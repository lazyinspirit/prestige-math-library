---
id: thm-brownian-zero-set-has-no-isolated-points
kind: theorem
title: "The Brownian zero set has no isolated points"
status: draft
origin: pipeline
deps: [def-brownian-zero-set, def-germ-sigma-algebra-at-zero, thm-blumenthal-zero-one-law, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, cor-one-dimensional-brownian-motion-is-recurrent, def-continuous-time-stopping-time, thm-strong-markov-property-of-brownian-motion, def-wiener-measure-on-continuous-path-space, lem-brownian-motion-has-a-jointly-measurable-continuous-version, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Theorem 6.39, printed p. 71"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.4.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $B$ be a standard Brownian motion and let $Z$ be its zero set
[[def-brownian-zero-set]]. Almost surely every $t\in Z$ is a limit point of
$Z\setminus\{t\}$; equivalently, almost surely $Z$ is a closed subset of
$[0,\infty)$ with no isolated points.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, its all-path continuous version $\widehat B$ and zero set $Z$, and a rational $q\ge0$.

[F1] $Z=\{t\ge0:\widehat B_t=0\}$ is closed and contains $0$, every path of $\widehat B$ is continuous, and almost-sure statements about $Z$ transfer to the zero set of $B$. [[def-brownian-zero-set]] [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F2] The germ sigma-algebra at zero is $\mathcal F^0_{0+}=\bigcap_{u>0}\sigma(B_s:0\le s\le u)$. [[def-germ-sigma-algebra-at-zero]]

[F3] Blumenthal's zero-one law: every event of the germ sigma-algebra at zero has probability $0$ or $1$. [[thm-blumenthal-zero-one-law]]

[F4] For $t>0$ the law $N(0,t)$ is symmetric and atomless, so $P(\widehat B_t>0)=P(\widehat B_t<0)=\tfrac12$. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F5] Almost surely the set of times at which the path lies in a given nonempty open interval is unbounded. [[cor-one-dimensional-brownian-motion-is-recurrent]]

[F6] For a continuous-time filtration, $\tau$ is a stopping time when $\{\tau\le t\}\in\mathcal F_t$ for every $t\ge0$. [[def-continuous-time-stopping-time]]

[F7] Strong Markov: for an almost surely finite stopping time $\tau$ of the usual augmentation and every bounded Borel functional $\Phi$ on $\mathbb R^{[0,\infty)}$, $E[\Phi((B_{\tau+t})_{t\ge0})\mid\mathcal F_\tau]=\Psi_\Phi(B_\tau)$ almost surely, where $\Psi_\Phi(x)=\int\Phi(x+w)\,\mu(dw)$ and $\mu$ is Wiener measure. [[thm-strong-markov-property-of-brownian-motion]] [[def-wiener-measure-on-continuous-path-space]]

[F8] AC is the ambient assumption of the Brownian, conditional-expectation and strong-Markov interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For $t\ge q$ one has $\{\tau_q\le t\}=\{Z\cap[q,t]\ne\emptyset\}=\bigcap_{m\ge1}\bigcup_{r\in\mathbb Q\cap[q,t]}\{|\widehat B_r|<1/m\}$, where $\tau_q:=\inf\{s\ge q:\widehat B_s=0\}$ and the empty set has infimum $+\infty$: if $\tau_q\le t$ then zeros lie arbitrarily close above $\tau_q\ge q$ and closedness of $Z$ gives $\widehat B_{\tau_q}=0$, so $Z\cap[q,t]\ne\emptyset$; conversely a zero in $[q,t]$ bounds $\tau_q$ by $t$; and the last equality follows from continuity of every path and density of the rationals. [F1, F6, given]

1.2 The events $E_+:=\{\exists\varepsilon>0:\widehat B_t>0\ \text{for all }t\in(0,\varepsilon]\}$ and $E_-:=\{\exists\varepsilon>0:\widehat B_t<0\ \text{for all }t\in(0,\varepsilon]\}$ lie in the germ sigma-algebra $\mathcal F^0_{0+}$: $E_+=\bigcup_{n\ge1}\bigcap_{r\in\mathbb Q\cap(0,1/n]}\{\widehat B_r>0\}$, the inner event lies in $\sigma(\widehat B_r:r\le1/n)$, and for every $u>0$ the tail of the union over $n>1/u$ already equals $E_+$ and lies in $\sigma(\widehat B_r:r\le u)$; the same argument applies to $E_-$. [F2, given]

2.1 Hence $\tau_q$ is a stopping time for the raw filtration, and therefore for the usual augmentation: each set in the displayed intersection of [step 1.1] is in $\sigma(\widehat B_r:r\le t)$, and $\{\tau_q\le t\}=\emptyset$ for $t<q$. [step 1.1, F6]

2.2 By [F3] and [step 1.2], $P(E_+)\in\{0,1\}$; on the other hand $E_+\subseteq\{\widehat B_{1/(2n)}>0\}$ for every $n\ge1$, so $P(E_+)\le P(\widehat B_{1/(2n)}>0)=\tfrac12$ by [F4], and hence $P(E_+)=0$; the same reasoning with $E_-\subseteq\{\widehat B_{1/(2n)}<0\}$ gives $P(E_-)=0$. [step 1.2, F3, F4]

3.1 Almost surely $\tau_q<\infty$ and $\widehat B_{\tau_q}=0$: if $\tau_q=\infty$ then $\widehat B$ vanishes nowhere on $[q,\infty)$, so by continuity its sign is constant there and the set of times at which $|\widehat B_t|<1$ is bounded, contradicting [F5] applied to the interval $(-1,1)$; finiteness and closedness of $Z$ then give $\widehat B_{\tau_q}=0$. [step 2.1, F1, F5]

3.2 Consequently, almost surely neither $E_+$ nor $E_-$ occurs, so for every $\varepsilon>0$ there are $s,t\in(0,\varepsilon]$ with $\widehat B_s\ge0\ge\widehat B_t$; by the intermediate value theorem applied to the continuous path, $Z\cap(0,\varepsilon]\ne\emptyset$ for every $\varepsilon>0$, that is, zeros accumulate at $0$ from the right. [step 2.2, F1]

4.1 Let $\Phi$ be the indicator of $\{w:\exists r_m\downarrow0,\ r_m>0,\ w(r_m)=0\}=\bigcap_{m\ge1}\bigcup_{r\in\mathbb Q\cap(0,1/m)}\{w(r)=0\}$; it is a bounded Borel functional of the path, and $\mu(\Phi)=1$ and $\mu(\{w:x+w\in\Phi\})=0$ for every $x\ne0$, because $\mu$-almost every path is continuous and starts at $0$, while for $x=0$ the assertion is [step 3.2] applied to the coordinate process under Wiener measure. [step 3.2, F7]

5.1 Applying [F7] to the almost surely finite stopping time $\tau_q$ of [step 2.1] and [step 3.1] and to the functional $\Phi$ of [step 4.1], and using $\widehat B_{\tau_q}=0$ almost surely, gives $E[\Phi((\widehat B_{\tau_q+t})_{t\ge0})\mid\mathcal F_{\tau_q}]=\Psi_\Phi(\widehat B_{\tau_q})=1$ almost surely, hence almost surely the post-$\tau_q$ path has zeros accumulating at $\tau_q$ from the right. [step 3.1, step 4.1, F7]

6.1 Intersecting the probability-one events of [step 3.1] and [step 5.1] over the countably many rationals $q\ge0$, we obtain a probability-one event on which, for every rational $q\ge0$, the time $\tau_q$ is a zero of $\widehat B$ and zeros of $\widehat B$ accumulate at $\tau_q$ from the right. [step 3.1, step 5.1, F8]

7.1 On that event every zero $t\in Z$ is a limit point of $Z$: if $t=\tau_q$ for some rational $q$ this is [step 6.1]; otherwise $t=0$ gives $t=\tau_0$, and for $t>0$ one chooses rationals $q_n\uparrow t$ with $q_n<t$, for which $\tau_{q_n}\in Z$ satisfies $q_n\le\tau_{q_n}\le t$ and $\tau_{q_n}\ne t$, so $\tau_{q_n}<t$ and $\tau_{q_n}\to t$ exhibits zeros approaching $t$ from the left. [step 6.1, F1]

8.1 The boundary and degeneracy cases are covered: the time $t=0$ is the specific case $q=0$ of [step 7.1], where $0$ is approached from the right; the case of countably many rationals $q$ is exactly the family intersected in [step 6.1], with no uncountable intersection of null events; the empty-infimum convention $\tau_q=+\infty$ is used only in [step 1.1] and is ruled out almost surely in [step 3.1]; AC enters through [F8]; and the conclusion is transferred from $\widehat B$ to the original $B$ by indistinguishability from [F1]. [step 3.1, step 7.1, F1, F8, given] ∎

## Source notes

Sousi's Theorem 6.39 proves the statement with exactly this stopping-time architecture: for each rational $q$, the first zero $\tau_q$ after $q$ is an almost surely finite stopping time, the strong Markov property transports the immediate-return property of the germ to $\tau_q$, and the remaining zeros are limits of the $\tau_{q_n}$ from the left as $q_n\uparrow t$. Durrett, Section 7.4.1, gives the same argument in one paragraph. The immediate-return input is proved here from Blumenthal's zero-one law and the atomless symmetric law of $\widehat B_t$ at a single time, so no separate symmetry statement about the process is needed.
