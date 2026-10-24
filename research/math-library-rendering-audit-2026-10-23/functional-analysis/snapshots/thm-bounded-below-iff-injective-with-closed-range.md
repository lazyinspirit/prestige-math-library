---
id: thm-bounded-below-iff-injective-with-closed-range
kind: theorem
title: "Under Dependent Choice, a bounded operator between Banach spaces is bounded below exactly when it is injective with closed range"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-bounded-below-operator, def-banach-space, def-dependent-choice,
       lem-closed-subspace-of-a-banach-space-is-banach,
       thm-baire-category-for-complete-metric-spaces,
       def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]).

Let $X$ and $Y$ be Banach spaces over the same scalar field, and let
$T:X\to Y$ be a bounded linear operator. Then $T$ is bounded below if and only
if it is injective and has closed range.

## Facts & Assumptions

**Given:** Banach spaces $X$ and $Y$, and a bounded linear operator $T:X\to Y$.

[L0] Dependent Choice is assumed ([[def-dependent-choice]]).

[L1] Being bounded below means that some $c>0$ satisfies $\|Tx\| \ge c\|x\|$ for every $x \in X$ ([[def-bounded-below-operator]]).

[L2] A Banach space is complete, and a closed subspace of a Banach space is Banach ([[def-banach-space]], [[lem-closed-subspace-of-a-banach-space-is-banach]]).

[L3] In a nonempty complete metric space, a countable union of closed sets with empty interior cannot be the whole space ([[thm-baire-category-for-complete-metric-spaces]]).

[L4] A map is injective when equal outputs force equal inputs ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Assume $T$ is bounded below, with constant $c>0$ from [L1]. If $Tx=0$, then $0=\|Tx\| \ge c\|x\|$, so $\|x\|=0$ and $x=0$. Thus $T$ is injective. [L1, L4]

1.2 Let $(Tx_n)$ be a sequence in $\operatorname{ran}(T)$ converging to $y \in Y$. Then $\|x_n-x_m\| \le c^{-1}\|Tx_n-Tx_m\|$ by [L1], so $(x_n)$ is Cauchy in $X$ and hence converges to some $x \in X$ by [L2]. If $C$ is any bound for $T$, then $\|Tx_n-Tx\| \le C\|x_n-x\| \to 0$, so $Tx_n \to Tx$. Since limits are unique in normed spaces, $y=Tx$. Therefore $\operatorname{ran}(T)$ is closed. [L1, L2, choose]

1.3 Conversely, assume $T$ is injective and $\operatorname{ran}(T)$ is closed. Then $Z:=\operatorname{ran}(T)$ is Banach by [L2], and $T:X\to Z$ is a bounded linear bijection. [L2, L4]

1.4 Let $B:=\{x \in X:\|x\|<1\}$. Since $Z=\bigcup_{n \ge 1}\overline{T(nB)}$, [L0] and [L3] yield an integer $N \ge 1$ such that $\overline{T(NB)}$ has nonempty interior in $Z$. So there exist $z_0 \in Z$ and $r>0$ with $B_Z(z_0,r) \subseteq \overline{T(NB)}$. Because $0 \in \overline{T(NB)}$ as well, subtraction gives $B_Z(0,r) \subseteq \overline{T(2NB)}$. [L0, L2, L3, choose]

2.1 We claim that every $y \in Z$ with $\|y\|<r$ has a preimage $x$ with $Tx=y$ and $\|x\| \le 4N$. Start with $e_0:=y$. If $\|e_k\|<r\,2^{-k}$, then $\|2^ke_k\|<r$, so step 1.4 gives $v_k \in 2NB$ with $\|2^ke_k-Tv_k\|<r/2$. Put $u_k:=2^{-k}v_k$ and $e_{k+1}:=e_k-Tu_k$. Then $\|u_k\|\le 2N\,2^{-k}$ and $\|e_{k+1}\|<r\,2^{-k-1}$. Inductively this constructs $(u_k)$ with $\|e_k\|<r\,2^{-k}$ for every $k$. The series $\sum_k u_k$ is absolutely convergent because $\sum_k 2N\,2^{-k}<\infty$, so [L2] gives $x:=\sum_k u_k \in X$ with $\|x\| \le 4N$. Also $y-T(\sum_{j< m}u_j)=e_m \to 0$, hence $Tx=y$. [step 1.4, L2, choose, construct]

3.1 Now let $z \in Z$ with $z \ne 0$. Put $\lambda := r/(2\|z\|)$, so $\|\lambda z\| = r/2 < r$. Step 2.1 gives $u \in X$ with $Tu=\lambda z$ and $\|u\| \le 4N$. Then $x:=\lambda^{-1}u$ satisfies $Tx=z$ and $\|x\| \le (8N/r)\|z\|$. The same inequality is trivial at $z=0$, so the inverse $T^{-1}:Z\to X$ is bounded by $8N/r$. [step 2.1, algebra]

4.1 Applying step 3.1 to $z=Tx$ gives $\|x\| \le (8N/r)\|Tx\|$ for every $x \in X$, that is, $\|Tx\| \ge (r/8N)\|x\|$. Therefore $T$ is bounded below. [step 3.1, L1]

5.1 Step 1.2 proves that bounded below implies injective with closed range, and steps 1.3 through 4.1 prove the converse. [step 1.1, step 1.2, step 1.3, step 4.1] ∎
