---
id: lem-zero-set-ultrafilters-and-stone-cech-points
kind: lemma
title: Zero set ultrafilters and Stone-Cech points
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-zero-set-filter-and-zero-set-ultrafilter, thm-stone-cech-evaluation-closure-universal-property, def-completely-regular-and-tychonoff-spaces, thm-urysohn-lemma, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "L. Gillman, M. Henriksen and M. Jerison, On a Theorem of Gelfand and Kolmogoroff Concerning Maximal Ideals in Rings of Continuous Functions (1954) — §2, Theorem 1 proof, pp. 448–449. This endpoint was inaccessible in the current run; the complete local alternative and failed recovery record are in the Batch 4 coverage ledger."
      url: "https://scispace.com/pdf/on-a-theorem-of-gelfand-and-kolmogoroff-concerning-maximal-25sdibbtka.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), so that the ultrafilter
lemma and Dependent Choice are available. Let $X$ be a
Tychonoff space ([[def-completely-regular-and-tychonoff-spaces]]) and let
$(\beta X, e)$ be its Stone–Čech compactification as supplied by the evaluation
theorem ([[thm-stone-cech-evaluation-closure-universal-property]]); identify
$X$ with $e[X] \subseteq \beta X$. Then the map

$$p \;\longmapsto\; \mathcal U_p := \{\,Z \in \mathcal Z(X) : p \in \overline{Z}^{\,\beta X}\,\}$$

is a **bijection** from $\beta X$ onto the set of z-ultrafilters on $X$
([[def-zero-set-filter-and-zero-set-ultrafilter]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, a Tychonoff space $X$, its Stone–Čech compactification $\beta X$ with embedding $e$, and the family $\mathcal Z(X)$ of zero sets of continuous real functions on $X$.

[L1] $\mathcal Z(X)$ is closed under finite intersections, $Z(f) \cap Z(g) = Z(f^2+g^2)$, and $X = Z(0)$, $\emptyset = Z(1)$; z-filters and z-ultrafilters are as defined in [[def-zero-set-filter-and-zero-set-ultrafilter]] ([[def-completely-regular-and-tychonoff-spaces]] for Tychonoffness).

[L2] $\beta X$ is a compact Hausdorff space, $e : X \to \beta X$ is an embedding with dense image, and every continuous $u : X \to [0,1]$ has a unique continuous extension $\bar u : \beta X \to [0,1]$; the compactification is realised as the closure of $X$ in a cube, so points of $\beta X$ are separated by the coordinate functions $\bar u$ ([[thm-stone-cech-evaluation-closure-universal-property]], [[def-axiom-of-choice]]).

[L3] A family of closed subsets of a compact space has nonempty intersection whenever every finite subfamily has nonempty intersection: otherwise the complements form an open cover and a finite subcover exhibits a finite subfamily with empty intersection.

[L4] If $Z_i=Z(f_i)$ and
$\tilde f_i:=\min(1,|f_i|)\in C(X,[0,1])$, then
$Z(\tilde f_i)=Z_i$. If $u\in C(X,[0,1])$ vanishes on $Z_1\cap Z_2$, define
$$
u_i=\frac{u\,\tilde f_i}{\tilde f_1+\tilde f_2}\quad\text{off }Z_1\cap Z_2,\qquad u_i=0\quad\text{on }Z_1\cap Z_2.
$$
Each $u_i$ is continuous: away from the common zero this is a quotient of
continuous functions, while at a common zero $|u_i|\le |u|\to0$. Moreover
$u_1+u_2=u$, $u_i$ is $[0,1]$-valued, and $u_i$ vanishes on $Z_i$.
This is the decomposition used in [step 3.1]. [algebra]

## Proof

**Proof technique:** direct.

1.1 For $p \in \beta X$ define $\rho_p(u) := \bar u(p)$ for $u \in C(X,[0,1])$; then $|\rho_p(u)| \le 1$ and $\rho_p$ is **additive, positively homogeneous, multiplicative and lattice-preserving**: for $u,v \in C(X,[0,1])$ and real $\lambda,\mu \ge 0$ with $\lambda u + \mu v$ again $[0,1]$-valued, $\rho_p(\lambda u + \mu v) = \lambda\rho_p(u) + \mu\rho_p(v)$, $\rho_p(uv) = \rho_p(u)\rho_p(v)$, and $\rho_p(\max(u,v)) = \max(\rho_p(u),\rho_p(v))$; more generally every polynomial identity with nonnegative coefficients valid on $X$ passes to $\rho_p$. [L2, algebra]

1.2 If $(x_\alpha)$ is a net in $X$ with $e(x_\alpha) \to p$ in $\beta X$, then $\rho_p(u) = \lim_\alpha u(x_\alpha)$ for every $u \in C(X,[0,1])$: this is continuity of $\bar u$ at $p$ together with $\bar u \circ e = u$. [L2, algebra]

2.1 **Characterisation of closure points.** For $A \subseteq X$ one has $p \in \overline{e[A]}^{\,\beta X}$ if and only if $\rho_p(u) = 0$ for every $u \in C(X,[0,1])$ with $u|_A = 0$. If $p \in \overline{e[A]}$ choose a net $a_\alpha \in A$ with $e(a_\alpha) \to p$ and use [step 1.2]. Conversely, if $p \notin \overline{e[A]}$ take a basic neighbourhood $N = \{q : |q(u_i) - \rho_p(u_i)| < \varepsilon,\ i \le n\}$ of $p$ in the cube with $N \cap e[A] = \emptyset$ and put $w := \max\bigl(0,\ 1 - \varepsilon^{-2}\sum_{i\le n}(u_i - \rho_p(u_i))^2\bigr) \in C(X,[0,1])$; then $\rho_p(w) = \max(0, 1 - 0) = 1$ by [step 1.1], while $w(a) = 0$ for every $a \in A$, since $e(a) \notin N$ means $\sum_i(u_i(a)-\rho_p(u_i))^2 \ge \varepsilon^2$. [step 1.1, step 1.2, L2, algebra]

3.1 For $p \in \beta X$, the family $\mathcal U_p$ is a z-filter: it contains $X$ because $e[X]$ is dense in $\beta X$; it omits $\emptyset$ because $\rho_p(1) = 1 \ne 0$ and $1$ vanishes on $\emptyset$; it is upward closed because $Z \subseteq Z'$ implies $\overline{e[Z]} \subseteq \overline{e[Z']}$; and it is closed under finite intersections: if $Z_i = Z(f_i)$ with $p \in \overline{e[Z_i]}$ for $i=1,2$, take $u \in C(X,[0,1])$ vanishing on $Z_1 \cap Z_2$ and write $u = u_1 + u_2$ with $u_1, u_2 \in C(X,[0,1])$ vanishing on $Z_1$, respectively $Z_2$, by the construction of [L4]; then $\rho_p(u_i) = 0$ by [step 2.1] and $\rho_p(u) = 0$ by [step 1.1], so $p \in \overline{e[Z_1 \cap Z_2]}$ by [step 2.1] again. [step 1.1, step 2.1, L1, L4]

3.2 **Injectivity.** For $u \in C(X,[0,1])$ and real $c$ one has $p \in \overline{e[\{u \le c\}]}$ whenever $c > \rho_p(u)$: for a net $x_\alpha$ with $e(x_\alpha) \to p$ one has $u(x_\alpha) \to \rho_p(u) < c$ by [step 1.2], so eventually $x_\alpha \in \{u \le c\}$. Conversely, if $c < \rho_p(u)$ then $p \notin \overline{e[\{u \le c\}]}$: with $v := \min(1, (u-c)^+)$ one has $\rho_p(v) = \min(1, \rho_p(u) - c) > 0$ by [step 1.1] and $v$ vanishes on $\{u \le c\}$, so [step 2.1] applies. Hence $\rho_p(u) = \inf\{c \in \mathbb R : Z((u-c)^+) \in \mathcal U_p\}$ depends only on $\mathcal U_p$, and since the coordinates $\rho_p(u)$ over $u \in C(X,[0,1])$ determine the point $p$ of the cube by [L2], the equality $\mathcal U_p = \mathcal U_q$ forces $p = q$. [step 1.1, step 1.2, step 2.1, L2]

4.1 For $p \in \beta X$ the z-filter $\mathcal U_p$ is maximal. Let $\mathcal W \supseteq \mathcal U_p$ be a z-filter and let $Z \in \mathcal Z(X)$ with $Z \in \mathcal W$; if $Z \notin \mathcal U_p$, then $p \notin \overline{e[Z]}$ and [step 2.1] provides $u \in C(X,[0,1])$ vanishing on $Z$ with $t := \rho_p(u) > 0$; the zero set $Z_1 := Z((t/2-u)^+)$ is disjoint from $Z$, because $u=0$ on $Z$ makes $(t/2-u)^+=t/2$ there, and belongs to $\mathcal U_p$, because for any net $x_\alpha \in X$ with $e(x_\alpha) \to p$ one has $u(x_\alpha) \to t > t/2$ by [step 1.2], so eventually $(t/2-u(x_\alpha))^+=0$, that is, $x_\alpha \in Z_1$, whence $p \in \overline{e[Z_1]}$; but then $Z, Z_1 \in \mathcal W$ give $\emptyset = Z \cap Z_1 \in \mathcal W$, contradicting that $\mathcal W$ is a z-filter. Hence $Z \in \mathcal U_p$, and $\mathcal U_p$ is a z-ultrafilter. [step 1.2, step 2.1, step 3.1, L1, algebra]

5.1 **Surjectivity.** Let $\mathcal U$ be a z-ultrafilter. The family $\{\overline{e[Z]} : Z \in \mathcal U\}$ consists of closed subsets of the compact space $\beta X$ and has the finite intersection property, because the intersection of finitely many such closures contains $\overline{e[Z_1 \cap \cdots \cap Z_n]}$ with $Z_1 \cap \cdots \cap Z_n \in \mathcal U$ nonempty; by [L3] there is $p$ in the intersection, so $p \in \overline{e[Z]}$ for every $Z \in \mathcal U$, that is, $\mathcal U \subseteq \mathcal U_p$; both are z-filters and $\mathcal U$ is maximal, so $\mathcal U = \mathcal U_p$ by [step 4.1]. [step 4.1, L1, L3]

6.1 By [step 4.1] every $\mathcal U_p$ is a z-ultrafilter, by [step 5.1] the map $p \mapsto \mathcal U_p$ is surjective, and by [step 3.2] it is injective; hence it is a bijection onto the set of z-ultrafilters. [step 3.2, step 4.1, step 5.1] ∎

## Remarks

- **The functional $\rho_p$ is the bridge.** It is multiplicative even though a point of the cube is not a multiplicative functional on all of $C_b(X)$ by definition; multiplicativity is obtained from [step 1.2], because all coordinates converge along a single net converging to $p$.
- **No new choice principle is hidden.** The single point selected in [step 5.1] comes from the nonemptiness of one intersection, not from a family of nonempty sets; the extension of functions to $\beta X$ is inherited from the Stone–Čech universal property, whose assumptions (ultrafilter lemma and Dependent Choice) are declared.
