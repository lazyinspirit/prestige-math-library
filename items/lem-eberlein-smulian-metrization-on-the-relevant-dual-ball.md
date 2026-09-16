---
id: lem-eberlein-smulian-metrization-on-the-relevant-dual-ball
kind: lemma
title: Eberlein–Šmulian metrization on the relevant dual ball
status: published
origin: pipeline
deps: ["def-weak-topology-on-a-normed-space", "def-separable-space", "lem-countable-iff-surjection-from-n", "cor-relative-hahn-banach-dual-norming", "def-countable-choice", "def-hahn-banach-extension-principle-relative", "def-product-topology", "thm-reals-cauchy-complete", "thm-complex-plane-is-complete", "lem-standard-complete-metric-on-a-countable-product", "thm-metric-hausdorff-separation", "thm-compactness-under-continuous-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Haase, The Functional Analysis of Quantum Information Theory"
      url: "https://fa.ewi.tudelft.nl/~haase/files/EFHN-July2012.pdf"
      locator: "Appendix E.1, Theorem E.2, printed pp. 345–347"
    - title: "Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://www.math.utoronto.ca/almut/Brezis.pdf"
      locator: "Hahn–Banach norming corollary, §1.1, pp. 3–4"
---

## Statement

Assume $\mathrm{AC}_\omega$ and HB.  Let $Y$ be a separable real or complex
normed space and let $K\subseteq Y$ be weakly compact.  Then the weak topology
on $K$ is metrizable.  More precisely, there is a sequence $(f_n)$ in the
closed unit ball of $Y^*$ that separates the points of $Y$, and

$$d_K(x,y)=\sum_{n=0}^{\infty}2^{-(n+1)}\min\{1,|f_n(x-y)|\}$$

is a metric on $K$ inducing its relative weak topology.  If $Y=\{0\}$, the
unique metric on each of its two subsets gives the same conclusion.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, HB, a separable real or complex normed space $Y$, and a weakly compact subset $K$.

[F1] Separability means existence of an at most countable dense subset, and each nonempty at most countable set is the image of a surjection from $\mathbb N$ ([[def-separable-space]], [[lem-countable-iff-surjection-from-n]]).

[F2] Under HB, every nonzero vector has a norm-one functional taking that vector to its norm, in both scalar fields ([[cor-relative-hahn-banach-dual-norming]]).

[F3] $\mathrm{AC}_\omega$ supplies a choice function for every sequence of nonempty sets ([[def-countable-choice]]).

[F4] The weak topology is initial for the members of $Y^*$ ([[def-weak-topology-on-a-normed-space]]).

[F5] The real and complex scalar fields are complete for their usual metrics ([[thm-reals-cauchy-complete]], [[thm-complex-plane-is-complete]]).

[F6] The standard weighted sum of bounded complete coordinate metrics is a complete metric inducing the countable product topology ([[lem-standard-complete-metric-on-a-countable-product]]).

[F7] Every metric space is Hausdorff ([[thm-metric-hausdorff-separation]]).

[F8] A continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]], claim 3).

[F9] HB is the named real dominated-extension principle ([[def-hahn-banach-extension-principle-relative]]).

[F10] The product topology is initial for the coordinate projections ([[def-product-topology]]).

## Proof

**Proof technique:** a countable norming family and a compact-to-Hausdorff identification.

1.1 If $Y=\{0\}$, then $K$ is either empty or the singleton $\{0\}$. In either case the zero function $d_K:K\times K\to\mathbb R$ is the unique metric and induces the only topology on $K$, which is its relative weak topology. Hence suppose below that $Y\ne\{0\}$. [given, F4]

1.2 On $\mathbb K$ put $\delta(s,t)=\min\{1,|s-t|\}$. This is a metric bounded by $1$ and induces the usual scalar topology, because its balls of radius below $1$ are the usual metric balls. It is complete: a $\delta$-Cauchy sequence is eventually Cauchy for $|\cdot|$ at every tolerance below $1$, so [F5] gives a usual limit, and $\delta(s,t)\le|s-t|$ gives convergence in $\delta$. [F5, algebra]

2.1 By separability, take an at most countable norm-dense $D\subseteq Y$. It is nonempty because its closure is the nonempty space $Y$. The set $E=\{z/\|z\|:z\in D\setminus\{0\}\}$ is at most countable and nonempty. It is dense in the unit sphere: if $\|u\|=1$ and $\varepsilon>0$, density gives $z\in D$ with $\|z-u\|<\min\{1/2,\varepsilon/2\}$, so $z\ne0$ and $\|z/\|z\|-u\|\le|1-\|z\||+\|z-u\|\le2\|z-u\|<\varepsilon$. By [F1], enumerate $E$ as $(u_n)_{n\in\mathbb N}$, allowing repetitions. [F1, step 1.1, algebra]

2.2 Apply [F6] to countably many copies of $(\mathbb K,\delta)$. The formula $D(a,b)=\sum_{n=0}^{\infty}2^{-(n+1)}\delta(a_n,b_n)$ is a metric on $\mathbb K^{\mathbb N}$ inducing its product topology. Its restriction to every subset is a metric inducing the subspace topology, and that metric topology is Hausdorff by [F7]. [F6, F7, step 1.2]

3.1 For each $n$, let $S_n=\{f\in Y^*:\|f\|=1,\ f(u_n)=1\}$. Each $S_n$ is nonempty by [F2], including in the complex case where the attained value is the positive real number $1$. Apply $\mathrm{AC}_\omega$ once to the sequence $(S_n)$ and obtain $f_n\in S_n$ for every $n$. [F2, F3, step 2.1, choose]

4.1 The family $(f_n)$ separates points of $Y$. If $x\ne y$, put $v=(x-y)/\|x-y\|$ and choose $u_n$ with $\|u_n-v\|<1/2$. Then $|f_n(v)|\ge |f_n(u_n)|-|f_n(v-u_n)|>1-1/2>0$, since $\|f_n\|=1$. Therefore $f_n(x-y)=\|x-y\|f_n(v)\ne0$. [step 2.1, step 3.1, algebra]

5.1 Define $\Phi:K\to\mathbb K^{\mathbb N}$ by $\Phi(x)=(f_n(x))_n$. Every coordinate $f_n$ is weakly continuous, so the initial property of the product topology makes $\Phi$ continuous. Step 4.1 makes it injective. Its corestriction $\Phi_0:K\to\Phi[K]$ is therefore a continuous bijection. [F4, F10, step 3.1, step 4.1]

6.1 The weak space $K$ is compact by hypothesis, and $\Phi[K]$ is Hausdorff by step 2.2. Hence [F8] makes $\Phi_0$ a homeomorphism. Pulling the restricted product metric back along $\Phi_0$ gives exactly $d_K(x,y)=D(\Phi(x),\Phi(y))$, the displayed metric, and its topology is precisely the relative weak topology on $K$. Together with step 1.1 this proves the claim for every $Y$ and for empty as well as nonempty $K$. [F8, step 1.1, step 2.2, step 5.1]

7.1 The only countable selection is step 3.1, where $\mathrm{AC}_\omega$ selects the norming family. HB is used only inside the individual norming-functional supplier [F2]. Enumeration in step 2.1 is obtained from one at-most-countable set by its supplied surjection and uses no choice. The argument metrizes only the supplied weakly compact $K$ in a separable $Y$; it makes no metrizability claim for all of $Y$ or for nonseparable spaces. [F1, F2, F3, F9, step 2.1, step 3.1, step 6.1] ∎

## Source notes

Haase, Theorem E.2, printed pp. 346–347, proves the corresponding compact countable-evaluation metrization pattern for a separable compact subset of a pointwise function space.  Here the HB norming family supplies the separating evaluations, and compact-to-Hausdorff identifies the resulting product topology with the weak topology on $K$.  No part of the unavailable Whitley paper is used.
