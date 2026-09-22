---
id: ex-square-integrable-kernel-without-continuous-representative
kind: example
title: A square-integrable kernel without a continuous representative
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-square-integrable-separable-product-kernel, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, def-completed-product-measure, thm-completion-of-a-measure-space, def-measure, thm-lebesgue-measure-of-a-box-of-every-kind, def-multidimensional-rectangle-and-volume, thm-metric-continuity-characterisations, def-metric-continuity, def-metric-convergence, def-metric-ball, def-measurable-rectangle, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, comparison of continuous and L2 kernels, printed pp. 93–96"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis — null sets and continuous representatives, Chapter 7"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mu$ and $\nu$ be the
Lebesgue measures of the intervals $[0,1]$ on the two factors, so that
$\mu([0,1])=\nu([0,1])=1$ and $\mu([0,\tfrac12])=\tfrac12$
([[thm-lebesgue-measure-of-a-box-of-every-kind]],
[[def-multidimensional-rectangle-and-volume]]), and equip $[0,1]^2$ with the
completed product measure
$\overline{\mu\times\nu}$
([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]],
[[def-completed-product-measure]]). Let

$$k(x,y):=\mathbf 1_{[0,1/2]}(x)\qquad\text{for }(x,y)\in[0,1]^2 ,$$

the product kernel $k(x,y)=a(x)\overline{b(y)}$ with
$a=\mathbf 1_{[0,1/2]}$ and $b=\mathbf 1_{[0,1]}$. Then $k$ is a
square-integrable kernel with $\|k\|_2^2=\tfrac12$ and rank-one kernel operator, as an identity of $L^2$ classes,
$(T_kf)(x)=\langle f,\mathbf 1_{[0,1]}\rangle\,\mathbf 1_{[0,1/2]}(x)$, but **no
continuous function $h:[0,1]^2\to\mathbb C$ agrees with $k$ almost everywhere**:
the class of $k$ in $L^2(\overline{\mu\times\nu};\mathbb C)$ has no continuous
representative. This shows that square integrability does not force the
continuity hypotheses used by the earlier continuous-kernel compactness
examples.

## Facts & Assumptions

**Given:** The Axiom of Choice, the factor Lebesgue measures $\mu,\nu$ on $[0,1]$, the completed product $\overline{\mu\times\nu}$ on $[0,1]^2$, the kernel $k=\mathbf 1_{[0,1/2]}\overline{\mathbf 1_{[0,1]}}$, and a continuous $h:[0,1]^2\to\mathbb C$.

[F1] On measurable rectangles the product measure is given by $(\mu\times\nu)(A\times B)=\mu(A)\nu(B)$, and the completion $\overline{\mu\times\nu}$ extends it, agreeing with it on $(\mathcal A\otimes\mathcal B)$-measurable sets ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[def-measurable-rectangle]], [[thm-completion-of-a-measure-space]]).

[F2] Every nondegenerate interval in $[0,1]$, with any combination of included or excluded endpoints, is Lebesgue measurable and has measure equal to its positive length. In particular $\mu([0,1])=\nu([0,1])=1$ and $\mu([0,\tfrac12])=\tfrac12$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-multidimensional-rectangle-and-volume]]).

[F3] The preceding example computes the product kernel: $k$ is square integrable with $\|k\|_2^2=\|a\|_2^2\|b\|_2^2$, its kernel operator satisfies $(T_kf)(x)=a(x)\langle f,b\rangle$ for each $f$ and for $\mu$-almost every $x$, and its range admits an ordered basis of length at most one ([[ex-square-integrable-separable-product-kernel]]).

[F4] Padding a finite disjoint family by empty sets in countable additivity shows that a measure is finitely additive on disjoint measurable sets and takes values in $[0,+\infty]$, so a measurable set containing a measurable subset of positive measure has positive measure ([[def-measure]]).

[F5] A continuous map between metric spaces is sequentially continuous: from $p_j\to p$ it follows that $h(p_j)\to h(p)$ ([[thm-metric-continuity-characterisations]], [[def-metric-continuity]], [[def-metric-convergence]]).

[F6] In $[0,1]^2$ every relative ball $B(p,r)$ with $r>0$ about a point $p$ contains a product $I\times J$ of two nondegenerate intervals in $[0,1]$ (with the boundary faces included when $p$ lies on the boundary). Explicitly, for $p=(u,v)$ choose $0<d<\min(1,r/\sqrt2)$ and take $I=[\max(0,u-d),\min(1,u+d)]$, $J=[\max(0,v-d),\min(1,v+d)]$; both lengths are positive and every point of their product has Euclidean distance at most $\sqrt2d<r$ from $p$. By [F2], $\mu(I)>0$ and $\nu(J)>0$, so this is a measurable rectangle of positive $(\mu\times\nu)$-measure and, by [F1], of the same positive completed measure ([[def-metric-ball]], [[def-measurable-rectangle]]).

[F7] Choice implies Countable Choice ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]), and Countable Choice selects one point from each of countably many nonempty subsets of a metric space ([[def-countable-choice]]).

## Verification

**Proof technique:** direct (contradiction).

**Given:** The objects above, and the null set $N:=\{(x,y)\in[0,1]^2:h(x,y)\ne k(x,y)\}$ of the assumed almost-everywhere agreement, with $\overline{\mu\times\nu}(N)=0$.

1.1 The functions $a=\mathbf 1_{[0,1/2]}$ and $b=\mathbf 1_{[0,1]}$ have $\|a\|_2^2=\mu([0,\tfrac12])=\tfrac12$ and $\|b\|_2^2=\nu([0,1])=1$ by [F2], so [F3] gives that $k$ is square integrable with $\|k\|_2^2=\tfrac12$, that $(T_kf)(x)=\langle f,b\rangle\mathbf 1_{[0,1/2]}(x)$, as an identity of $L^2$ classes. Since $T_kb=a\ne0$ and the range is contained in $\mathbb C a$, its range is exactly this one-dimensional subspace, proving rank one. [F2, F3]

1.2 If $N$ contained a ball $B(p,r)$ with $r>0$, then [F1] and [F6] would produce a measurable rectangle $R\subseteq B(p,r)\subseteq N$ whose completed measure is $\mu(A)\nu(B)>0$, and the disjoint decomposition $N=R\cup(N\setminus R)$, together with the additivity and nonnegativity of [F4], would give $\overline{\mu\times\nu}(N)\ge\overline{\mu\times\nu}(R)>0$, contradicting $\overline{\mu\times\nu}(N)=0$; hence no ball with positive radius is contained in $N$. [F1, F4, F6]

2.1 **Values on the left half.** Let $p=(x,y)$ with $0<x<\tfrac12$ and $0<y<1$. For each $j\ge0$ the ball $B(p,1/(j+1))$ is not contained in $N$ by [step 1.2], so it contains a point $q_j$ of its complement, and by [F7] the countably many points $q_j$ may be chosen simultaneously; then $q_j\to p$ by construction. For $j$ large enough $q_j$ lies in the rectangle $(0,\tfrac12)\times(0,1)$ on which $k=1$, and $q_j\notin N$ gives $h(q_j)=k(q_j)=1$; sequential continuity [F5] therefore forces $h(p)=1$. [step 1.2, F5, F7]

2.2 **Values on the right half.** The same argument with $(0,\tfrac12)$ replaced by $(\tfrac12,1)$, where $k=0$, and with the same null set $N$, gives $h(p)=0$ for every $p=(x,y)$ with $\tfrac12<x<1$ and $0<y<1$. [step 1.2, F5, F7]

3.1 **Contradiction at the interface.** Let $p_0=(\tfrac12,\tfrac12)$ and let $p_j=(\tfrac12-1/(j+3),\tfrac12)$ and $p_j'=(\tfrac12+1/(j+3),\tfrac12)$; both sequences converge to $p_0$ in $[0,1]^2$, [step 2.1] gives $h(p_j)=1$ for every $j$, and [step 2.2] gives $h(p_j')=0$ for every $j$. Sequential continuity [F5] applied to the first sequence gives $h(p_0)=1$ and applied to the second gives $h(p_0)=0$, a contradiction; therefore no continuous $h$ agrees with $k$ almost everywhere. [step 2.1, step 2.2, F5]

4.1 Steps 1.1 and 3.1 establish all the asserted properties: square integrability with $\|k\|_2^2=\tfrac12$, the rank-one form of $T_k$ on the one hand, and the impossibility of a continuous representative on the other. [step 1.1, step 3.1] ∎
