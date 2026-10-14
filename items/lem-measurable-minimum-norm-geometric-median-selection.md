---
id: lem-measurable-minimum-norm-geometric-median-selection
kind: lemma
title: "Measurable minimum-norm geometric-median selection"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [alg-geometric-median-of-block-means, def-hilbert-space, def-countable-choice, def-separable-space, lem-countable-iff-surjection-from-n, thm-projection-onto-a-nonempty-closed-convex-set, thm-heine-borel-rn, thm-cauchy-schwarz-in-an-inner-product-space, thm-extreme-value-metric, thm-compact-iff-finite-intersection-property, def-borel-sigma-algebra, def-measurable-function-between-measurable-spaces, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Stanislav Minsker, Geometric Median and Robust Estimation in Banach Spaces, §2 and §4.1"
      url: "https://arxiv.org/pdf/1308.1334"
      locator: "PDF pp. 3–5, 8; geometric-median objective and Hilbert-space existence context."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §3"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 4–5; the finite-dimensional block-mean geometric median."
---

## Statement

Fix a separable real Hilbert space $H$ and an integer $k\ge1$. The rule in [[alg-geometric-median-of-block-means]] defines a single-valued Borel map $H^k\to H$: for every tuple $(m_1,\ldots,m_k)$ the function $F_m(z)=\sum_{j=1}^k\|z-m_j\|$ has a nonempty closed convex minimizer set, and that set has a unique point of minimum norm. The choice-free Borel construction below does not use weak compactness or reflexivity. Countable Choice is used only for the published Hilbert projection supplier that identifies the minimum-norm point.

## Facts & Assumptions

**Given:** A separable real Hilbert space $H$, an integer $k\ge1$, and a tuple $m=(m_1,\ldots,m_k)\in H^k$.

[F1] The geometric-median objective is $F_m(z)=\sum_{j=1}^k\|z-m_j\|$; the algorithm selects the minimum-norm point among its minimizers ([[alg-geometric-median-of-block-means]]).

[F2] In a Hilbert space, a nonempty closed convex set has a unique nearest point to $0$ under Countable Choice ([[thm-projection-onto-a-nonempty-closed-convex-set]], [[def-countable-choice]]).

[F3] A closed bounded subset of $\mathbb R^d$ is compact for finite $d\ge1$ ([[thm-heine-borel-rn]]).

[F4] Cauchy–Schwarz implies $|\langle x,y\rangle|\le\|x\|\|y\|$ in a Hilbert space ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F5] A continuous real-valued function on a nonempty compact metric space attains a minimum and maximum ([[thm-extreme-value-metric]]).

[F6] In a compact metric space, every family of closed sets with the finite-intersection property has nonempty intersection ([[thm-compact-iff-finite-intersection-property]]).

[F7] Borel sets form a sigma-algebra, a map is Borel when inverse images of Borel sets are Borel, countable infima of Borel real maps are Borel, and pointwise limits of Borel real maps are Borel ([[def-borel-sigma-algebra]], [[def-measurable-function-between-measurable-spaces]], [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[F8] Separability means there is an at-most-countable dense subset; since $H$ is nonempty, [[lem-countable-iff-surjection-from-n]] enumerates it by a sequence ([[def-separable-space]]).

## Proof

**Proof technique:** direct.

**Given:** A separable real Hilbert space $H$, an integer $k\ge1$, and a tuple $m=(m_1,\ldots,m_k)\in H^k$.

1.1 Let $V=\operatorname{span}\{m_1,\ldots,m_k\}$. In the given center order, Gram–Schmidt replaces $m_j$ by $r_j=m_j-\sum_{\ell<j}\langle m_j,e_\ell\rangle e_\ell$ using the previously retained orthonormal vectors; if $r_j=0$ it is skipped, and otherwise $e=r_j/\|r_j\|$ is appended. Induction on the finite list shows the retained vectors are orthonormal and span $V$. For $d=\dim V>0$, if $v_n=\sum_{\ell=1}^d a_{n\ell}e_\ell\in V$ converges in $H$ to $v$, then [F4] gives $a_{n\ell}=\langle v_n,e_\ell\rangle\to\langle v,e_\ell\rangle$ for each $\ell$; the finite sums converge to $\sum_\ell\langle v,e_\ell\rangle e_\ell=v$, so $V$ is closed. If $d=0$, all centers are zero and $F_m(z)=k\|z\|$ has the unique minimizer $0$. For $d>0$, set $P_Vz=\sum_\ell\langle z,e_\ell\rangle e_\ell$; its residual is orthogonal to $V$. Pythagoras gives $\|z-m_j\|^2=\|P_Vz-m_j\|^2+\|z-P_Vz\|^2$, so $F_m(P_Vz)<F_m(z)$ whenever $z\notin V$. Thus every minimizer lies in $V$. The function $F_m$ is continuous and coercive because $F_m(z)\ge k\|z\|-\sum_j\|m_j\|$; its sublevel set $\{z\in V:F_m(z)\le F_m(0)\}$ is nonempty, closed and bounded in the finite-dimensional coordinate space $\mathbb R^d$, hence compact by [F3]. By [F5], $F_m$ attains a minimum there; the full minimizer set $C_m$ is nonempty, closed, bounded and compact, and it is convex because $F_m$ is convex. [F1, F3, F4, F5, algebra]

1.2 By [F2], $C_m$ has a unique point $z_*(m)$ nearest to $0$, its unique minimum-norm point. If $H=\{0\}$, the selection is the constant zero map; otherwise fix a unit vector $e$ and a countable dense sequence $(d_a)_{a\ge1}$ in $H$, whose existence is given by [F8]. The countable set $D=\{\langle d_a,e\rangle:a\ge1\}$ is dense in $\mathbb R$: for each $t\in\mathbb R$, density gives $d_{a_j}\to te$, and [F4] gives $\langle d_{a_j},e\rangle\to t$. For $\lambda>0$, $G_{\lambda,m}(z)=F_m(z)+\lambda\|z\|^2$ is continuous, coercive and strictly convex. Projection to $V$ cannot increase $F_m$ and strictly decreases the squared norm off $V$, so every minimizer lies in $V$; if $d=0$ the single candidate is $0$. For $d>0$, a closed bounded sublevel set in $V$ is compact by [F3], so [F5] gives a unique minimizer $z_\lambda(m)$. By continuity and density, $h_\lambda(m)=\inf_aG_{\lambda,m}(d_a)=G_{\lambda,m}(z_\lambda(m))$. Each map $m\mapsto G_{\lambda,m}(d_a)$ is continuous, so [F7] makes their countable infimum $h_\lambda$ Borel. For $s\ge1$, set $A_{a,s}=\{m:G_{\lambda,m}(d_a)<h_\lambda(m)+1/s\}$. The countable dense set $D$ gives $A_{a,s}=\bigcup_{q\in D}\{m:G_{\lambda,m}(d_a)<q\}\cap\{m:h_\lambda(m)>q-1/s\}$ so $A_{a,s}$ is Borel; density ensures at least one such $a$ for each $m$. The least such $a$ is a Borel, countably-valued map because its level set at $a$ is $A_{a,s}\setminus\bigcup_{b<a}A_{b,s}$, and the selected point map is Borel since each open-set preimage is the union of its Borel level sets whose values lie in that open set. The selected point is within $(\lambda s)^{-1/2}$ of $z_\lambda(m)$: convexity of $F_m$ and $\|(1-t)z+ty\|^2=(1-t)\|z\|^2+t\|y\|^2-t(1-t)\|y-z\|^2$, applied at the minimizer and followed by $t\downarrow0$, give $G_{\lambda,m}(y)-G_{\lambda,m}(z_\lambda)\ge\lambda\|y-z_\lambda\|^2$. Hence the selected maps converge pointwise to $z_\lambda$. Since they are countably valued with Borel level sets, their distances to each $d_a$ are Borel and converge to $\|z_\lambda-d_a\|$; [F7] makes these limits Borel. Balls with centers $d_a$ and positive rational radii form a countable basis of the separable metric space $H$: every open neighborhood of a point contains such a ball around a sufficiently close dense center. Thus inverse images of open sets are countable unions of Borel inverse images of these balls, proving $m\mapsto z_\lambda(m)$ is Borel. [F1, F2, F3, F4, F5, F7, F8, construct]

2.1 For every $s\ge1$, comparison with $z_*(m)$ in the minimization of $F_m+s^{-1}\|\cdot\|^2$ gives $\|z_{1/s}\|\le\|z_*\|$ and $F_m(z_{1/s})\le F_m(z_*)+s^{-1}\|z_*\|^2$. If $d=0$ then both points are $0$. Otherwise all $z_{1/s}$ lie in the compact ball $B_V(0,\|z_*\|)$ by [F3]. The closed tail sets $C_n=\overline{\{z_{1/s}:s\ge n\}}$ inside this ball are nonempty, nested and have the finite-intersection property, so [F6] gives $c\in\bigcap_n C_n$. For every $n$, continuity of $F_m$ and the tail bounds imply $F_m(c)\le F_m(z_*)+\|z_*\|^2/n$, while $\|c\|\le\|z_*\|$; letting $n\to\infty$ shows $c\in C_m$ is a minimum-norm minimizer, hence $c=z_*$. If the sequence did not converge to $z_*$, some $\rho>0$ would leave arbitrarily late terms at distance at least $\rho$; the closed tail closures of those terms are nonempty nested subsets of the same compact ball, so [F6] gives a point in their intersection. It lies in every $C_n$, hence equals $z_*$, but its distance from $z_*$ is at least $\rho$, a contradiction. Thus $z_{1/s}\to z_*$. By [F7] and the separable-metric basis argument of step 1.2, the pointwise limit of the Borel maps $z_{1/s}$ is Borel. [F3, F6, F7, step 1.2, algebra]

3.1 The minimizer set is nonempty, closed and convex by step 1.1, its minimum-norm point is unique by step 1.2, and step 2.1 proves the selected map is Borel. The only choice principle used is Countable Choice in [F2]; the dense sequence is supplied by separability and all subsequent approximations use least-index rules. [F1, F2, step 1.1, step 1.2, step 2.1] ∎

