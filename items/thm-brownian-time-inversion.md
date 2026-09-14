---
id: thm-brownian-time-inversion
kind: theorem
title: "Brownian time inversion"
status: draft
origin: pipeline
deps: [def-brownian-motion, def-gaussian-process, lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments, lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws, def-coordinate-maps-and-cylinder-sigma-algebra, lem-finite-coordinate-cylinders-form-a-pi-system, def-random-element-and-real-random-variable, lem-law-of-a-random-element-is-a-probability-measure, def-lambda-system, thm-continuity-from-below-for-measures, thm-dynkin-pi-lambda, thm-rationals-countable, lem-rat-embeds-dense, cor-archimedean-reciprocal, lem-probability-measure-basic-identities, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Theorem 6.7"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Nobuo Yoshida, Probability Theory, Proposition 6.1.5 and Lemmas 6.1.6--6.1.7"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
---

## Statement

Assume the Axiom of Choice. If $B=(B_t)_{t\ge0}$ is standard Brownian motion,
then
$$Y_0=0,\qquad Y_t=tB_{1/t}\quad(t>0)$$
defines another standard Brownian motion. In particular, its continuity at
$t=0$ is part of the conclusion, not an inference from its finite-dimensional
laws alone.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$ with one probability-one continuity event $A$.

[F1] Brownian motion is centered Gaussian with covariance $\min(s,t)$ and a common continuity event; conversely a centered Gaussian process with this covariance and such continuity is Brownian. [[def-brownian-motion]] [[def-gaussian-process]] [[lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments]]

[F2] Two Gaussian processes with the same mean and covariance functions have equal finite-dimensional laws, including singular vectors and repeated indices. [[lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws]]

[F3] On an arbitrary product measurable space, finite-coordinate cylinders generate the cylinder sigma-algebra and form a pi-system. A measurable random element has a probability law. [[def-coordinate-maps-and-cylinder-sigma-algebra]] [[lem-finite-coordinate-cylinders-form-a-pi-system]] [[def-random-element-and-real-random-variable]] [[lem-law-of-a-random-element-is-a-probability-measure]]

[F4] A lambda-system is closed under nested relative differences and increasing unions; measures are continuous from below; a lambda-system containing a pi-system contains its generated sigma-algebra. [[def-lambda-system]] [[thm-continuity-from-below-for-measures]] [[thm-dynkin-pi-lambda]]

[F5] The positive rationals are countable and dense, and for every $\varepsilon>0$ there is $m\ge1$ with $1/m<\varepsilon$. [[thm-rationals-countable]] [[lem-rat-embeds-dense]] [[cor-archimedean-reciprocal]]

[F6] The intersection of two probability-one events has probability one. [[lem-probability-measure-basic-identities]]

[F7] AC is inherited through the Gaussian and Brownian interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For any finite positive times $t_1,\ldots,t_n$ and coefficients $u_j$, the linear combination $$\sum_{j=1}^nu_jY_{t_j}=\sum_{j=1}^nu_jt_jB_{1/t_j}$$ is normal by [F1]. Appending any occurrences of $t=0$ only appends deterministic zero coordinates. Hence $Y$ is a centered Gaussian process, including repeated-time and singular finite vectors. [F1, algebra]

2.1 For $0<s\le t$, $$\operatorname{Cov}(Y_s,Y_t)=st\operatorname{Cov}(B_{1/s},B_{1/t})=st\min(1/s,1/t)=s.$$ If $s=0$, both sides of the required identity are zero. Thus $\operatorname{Cov}(Y_s,Y_t)=\min(s,t)$ for all $s,t\ge0$. By [F2], $Y$ and $B$ have the same finite-dimensional laws. [F1, F2, step 1.1, algebra]

3.1 Let $I=\mathbb Q\cap(0,\infty)$ and define $\Phi_B,\Phi_Y:\Omega\to\mathbb R^I$ by their coordinates. Each map is measurable for the cylinder sigma-algebra: the sets whose inverse images are measurable form a sigma-algebra containing every coordinate inverse image, hence all finite-coordinate cylinders and their generated sigma-algebra. Their pushforward laws $\lambda_B,\lambda_Y$ are therefore probabilities by [F3]. Step 2.1 makes them equal on every finite-coordinate cylinder. The class of cylinder-measurable sets on which they agree is a lambda-system by normalization, nested finite differences, and continuity from below; [F3]--[F4] therefore give $\lambda_B=\lambda_Y$. [F3, F4, step 2.1]

4.1 In $\mathbb R^I$ put $$H=\bigcap_{m\ge1}\bigcup_{N\ge1}\bigcap_{q\in I,\ 0<q<1/N}\{x:|x(q)|<1/m\}.$$ This is cylinder-measurable because all three index sets are countable by [F5]. The event $A_0=A\cap\{B_0=0\}$ has probability one by [F1] and [F6]. On $A_0$, continuity of $B$ at zero gives $\Phi_B\in H$, so $\lambda_B(H)=1$. Equality from step 3.1 gives $P(\Phi_Y\in H)=\lambda_Y(H)=1$. [F1, F3, F5, F6, step 3.1]

5.1 On $A$, $t\mapsto Y_t=tB_{1/t}$ is continuous for every $t>0$. Fix $\omega\in A$ with $\Phi_Y(\omega)\in H$ and $\varepsilon>0$. Choose $m$ with $1/m<\varepsilon$ by [F5], and then $N$ from the definition of $H$. For every $t\in(0,1/N)$, fix an enumeration of the rationals and, for each integer $k\ge1$, let $q_k$ be its least-indexed member of $I\cap(0,1/N)$ within $1/k$ of $t$; density in [F5] makes this canonical sequence converge to $t$. Continuity gives $Y_{q_k}(\omega)\to Y_t(\omega)$. Since $|Y_{q_k}(\omega)|<1/m$ for all $k\ge1$, we get $|Y_t(\omega)|\le1/m<\varepsilon$. Therefore $Y_t(\omega)\to0=Y_0(\omega)$ as $t\downarrow0$. By [F6], the set of such $\omega$ has probability one, so $Y$ has one common continuity event on $[0,\infty)$. [F5, F6, step 4.1]

6.1 Steps 1.1--2.1 give the centered Gaussian covariance characterization, and step 5.1 gives path continuity; [F1] therefore makes $Y$ standard Brownian motion. The formula at $t=0$ is separately defined because $1/t$ is unavailable there. Empty finite lists are vacuous, singleton and repeated-time laws were included in step 1.1, and AC is used only through [F1]--[F2], not in the fixed countable rational argument. [F1, F2, F7, step 1.1, step 2.1, step 5.1] ∎

## Source notes

Sousi Theorem 6.7 and Yoshida Proposition 6.1.5 use equality of the rational finite-dimensional laws and positive-time continuity to obtain continuity at zero. Steps 3.1--5.1 spell out the intervening cylinder-law and measurable-event arguments.
