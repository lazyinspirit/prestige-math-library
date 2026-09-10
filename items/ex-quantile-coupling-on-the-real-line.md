---
id: ex-quantile-coupling-on-the-real-line
kind: example
title: Quantile coupling on the real line
deps: ["thm-probability-law-and-distribution-function-correspondence", "thm-portmanteau-theorem", "thm-froda", "thm-lebesgue-measure-of-a-box-of-every-kind", "prop-countable-subsets-of-rn-are-lebesgue-null", "def-countable-choice", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, Theorem 3.2.8, pp. 118–119
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC. If real probability laws $\mu_n\Rightarrow\mu$ have CDFs $F_n$,F and generalized inverses $Q_n(u)=\inf\{x:F_n(x)\ge u\}$, $Q(u)=\inf\{x:F(x)\ge u\}$ for 0<$u<1$, then on Borel Lebesgue probability (0,1), $Q_n$ and Q have those laws and $Q_n\to Q$ almost surely.

## Facts & Assumptions

[F1] [[thm-probability-law-and-distribution-function-correspondence]]: Assume the Axiom of Countable Choice.

1. Let $X$ be a real random variable, let $\mathbb P_X$ be its law, and let
   $F_X(x)=\mathbb P(X\le x)$. Then $F_X$ is nondecreasing and right-continuous,
   satisfies
   $$\lim_{x\to-\infty}F_X(x)=0,\qquad \lim_{x\to+\infty}F_X(x)=1,$$
   and obeys
   $$\mathbb P_X((a,b])=F_X(b)-F_X(a)\qquad(a<b).$$
2. Conversely, if $F:\mathbb R\to\mathbb R$ is nondecreasing and
   right-continuous with
   $$\lim_{x\to-\infty}F(x)=0,\qquad \lim_{x\to+\infty}F(x)=1,$$
   then there is a unique Borel probability measure $\mu$ on $\mathbb R$ such
   that
   $$\mu((a,b])=F(b)-F(a)\qquad(a<b),$$
   equivalently
   $$F(x)=\mu((-\infty,x])\qquad(x\in\mathbb R).$$

[F2] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: Let $n \ge 1$, **assume the Axiom of Countable Choice**
(def-countable-choice), and let $a_i \le b_i$ be reals for $i<n$. Write

$$R^{\circ} := \{\, x \in \mathbb{R}^n : a_i < x_i < b_i \text{ for every } i<n \,\}, \qquad \overline{R} := [a,b] = \{\, x \in \mathbb{R}^n : a_i \le x_i \le b_i \text{ for every } i<n \,\}$$

(def-multidimensional-rectangle-and-volume). Then $R^{\circ}$ is open and
$\overline{R}$ is closed, so both are Borel and Lebesgue measurable, and **every**
set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue
measurable with

$$\lambda_n(R) \;=\; \prod_{i<n}(b_i-a_i).$$

In particular this covers the four one-dimensional face conventions in each
coordinate — the open box, the closed box $[a,b]$, the half-open box
$B(a,b) = \prod_{i<n}(a_i,b_i]$ of def-half-open-box, and every mixture of
them, in any combination of coordinates — and it gives measure $0$ to all of them
whenever $a_i = b_i$ for some $i<n$. For a half-open box with infinite
parameters the value is already
$\lambda_n(B) = \operatorname{vol}(B)$ (thm-lebesgue-measure-is-a-complete-measure).

[F3] [[thm-froda]]: Let $I \subseteq \mathbb{R}$ be order-convex (def-interval) and let
$f : I \to \mathbb{R}$ be monotone (def-monotone-function). Then the set

$$D \;:=\; \{\, c \in I : f \text{ is discontinuous at } c \,\}$$

(def-classification-of-discontinuities) is **at most countable**
(def-countable).

More precisely, the proof exhibits an injection $J : D \to \mathbb{N}$
(def-injection-surjection-bijection) built from one fixed enumeration of the
rationals: at a discontinuity $c$ interior to $I$ the value $J(c)$ is read off
the **least index** of a rational lying in the gap
$\bigl(\lim_{x \to c^{-}} f(x),\ \lim_{x \to c^{+}} f(x)\bigr)$, which is a
nonempty open interval by thm-monotone-discontinuities-are-jumps. The map
$J$ is therefore determined by $f$ and by the fixed enumeration, and **no choice
principle is used**: least indices are canonical by
thm-well-ordering-principle, and nothing anywhere in the proof is selected
without being determined.

[F4] [[thm-portmanteau-theorem]]: For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

[F5] [[prop-countable-subsets-of-rn-are-lebesgue-null]]: Let $n \ge 1$ and **assume the Axiom of Countable Choice**
(def-countable-choice). Every at most countable subset $E \subseteq \mathbb{R}^n$
(def-countable) is Lebesgue measurable with

$$\lambda_n(E) \;=\; 0,$$

so $E$ is a $\lambda_n$-null set (def-measure-null-set-and-almost-everywhere).
In particular every singleton is null, and on the real line the set
$\mathbb{Q}_{\mathbb{R}}$ of rational reals (lem-rat-embeds-dense) satisfies
$\lambda_1(\mathbb{Q}_{\mathbb{R}}) = 0$.

## Verification

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 AC implies CC by restriction to any countable family. F1 gives right-continuity, monotonicity and the CDF endpoint limits. For 0<$u<1$, the set defining Q(u) is nonempty and bounded below by those limits. For any x, if u<=F(x) then Q(u)<=x. Conversely if Q(u)<=x, for each $h>0$ the infimum property supplies y<x+h with F(y)>=u; thus F(x+h)>=u and right-continuity gives F(x)>=u. Therefore $\{u:Q(u)\le x\}=\{u:u\le F(x)\}$, and the same holds for $Q_n$. [F1]

2.1 The sublevel identity in step 1.1 proves measurability. F2 gives the length of $(0,F(x)]\cap(0,1)$ as F(x), including values zero and one. Thus the CDF of Q on this probability interval equals F; the uniqueness clause of F1 identifies its law as $\mu$, and likewise for every $Q_n$. [F1, F2, step 1.1]

2.2 Fix a continuity point u of the nondecreasing Q and $\varepsilon$>0. Choose v with u<$v<1$ and Q(v)<Q(u)+$\varepsilon$, using continuity at u. Choose a continuity point a of F between Q(u)-$\varepsilon$ and Q(u), and a continuity point b of F between max(Q(u),Q(v)) and Q(u)+$\varepsilon$. Such choices exist because a monotone CDF has only countably many discontinuities by F3. Step 1.1 gives F(a)<u and F(b)>=v>u. F4 at the half-lines with endpoints a,b gives $F_n$(a)->F(a) and $F_n$(b)->F(b). Eventually $F_n$(a)<u<$F_n$(b), whence $a<Q_n(u)\le b$ by step 1.1. Thus $|Q_n(u)-Q(u)|<\varepsilon$ eventually. [F3, F4, step 1.1]

3.1 Q is nondecreasing, since increasing u shrinks the defining set. F3 makes its discontinuity set on (0,1) countable. F5, under CC from step 1.1, makes this set null. Step 2.2 proves convergence elsewhere, so the coupling has the stated almost-sure limit. The excluded $u=0$,1 need no inverse values. [F3, F5, step 1.1] ∎
