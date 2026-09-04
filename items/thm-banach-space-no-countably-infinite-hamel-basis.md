---
id: thm-banach-space-no-countably-infinite-hamel-basis
kind: theorem
title: "A Banach space has no countably infinite Hamel basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-banach-space, cor-finite-dimensional-subspaces-are-closed,
       def-linear-basis, def-dimension, def-countable, thm-rationals-countable,
       rem-baire-category-choice-strength, lem-countable-iff-surjection-from-n,
       thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Paul Howard and Eleftherios Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice"
      url: "https://commons.emich.edu/fac_sch2017/127/"
    - title: "Christopher Heil, A Basis Theory Primer"
      url: "https://heil.math.gatech.edu/papers/bases.pdf"
pipeline_run: frontier-29
---

## Statement

Let $X$ be a Banach space over $\mathbb K\in\{\mathbb R,\mathbb C\}$. Then $X$
has no countably infinite Hamel basis. Equivalently, there is no sequence
$(b_n)_{n\in\mathbb N}$ of pairwise distinct vectors whose image is a basis of
$X$ in the sense of [[def-linear-basis]].

## Facts & Assumptions

**Given:** A Banach space $X$ and, for contradiction, a sequence $(b_n)_{n\in\mathbb N}$ of pairwise distinct vectors whose image is a Hamel basis of $X$.

[L1] A Banach space is complete for its norm metric ([[def-banach-space]]).

[L2] Finite-dimensional normed subspaces are closed ([[cor-finite-dimensional-subspaces-are-closed]]).

[L3] $\mathbb Q$ is countably infinite ([[thm-rationals-countable]], [[def-countable]]).

[L4] The choice-strength ledger records that the separable complete-metric Baire theorem is available in ZF, while the unrestricted complete-metric theorem is strictly stronger ([[rem-baire-category-choice-strength]]).

[L5] A nonempty countable set is a surjective image of $\mathbb N$, and every nonempty subset of $\mathbb N$ has a least element ([[lem-countable-iff-surjection-from-n]], [[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 Let $Q_{\mathbb K}:=\mathbb Q$ in the real case and $Q_{\mathbb K}:=\{a+ib:a,b\in\mathbb Q\}$ in the complex case. In either case $Q_{\mathbb K}$ is countable by [L3], and it is dense in $\mathbb K$. Let $D\subseteq X$ be the set of all finite $Q_{\mathbb K}$-linear combinations of the basis vectors $b_n$. Coding a finite combination by the finite list of its indices together with its coefficient list gives an explicit surjection from a countable set onto $D$, so $D$ is countable. Also $0\in D$, so $D$ is nonempty. [L3, construct]

1.2 For $N\in\mathbb N$ put $$F_N:=\operatorname{span}_{\mathbb R}\{b_0,\dots,b_N\}$$ in the real case, and $$F_N:=\operatorname{span}_{\mathbb R}\{b_0,ib_0,\dots,b_N,ib_N\}$$ in the complex case. In either case $F_N$ is finite-dimensional over $\mathbb R$. It is proper: in the real case $b_{N+1}\notin F_N$ by linear independence of the basis image, and in the complex case a real-linear relation expressing $b_{N+1}$ in terms of $b_0,ib_0,\dots,b_N,ib_N$ would be the same as a complex-linear relation expressing $b_{N+1}$ in terms of $b_0,\dots,b_N$. Thus [L2] makes every $F_N$ closed. Also $X=\bigcup_{N\in\mathbb N}F_N$, because every vector uses only finitely many basis vectors, and in the complex case every complex coefficient splits into real and imaginary parts. [L2, given, algebra]

1.3 Every proper linear subspace of a normed space has empty interior. Indeed, if $W\subsetneq X$ were a linear subspace containing some ball $B(x,r)$, then $B(0,r)\subseteq W$ because $W$ is closed under subtraction, and for any $y\in X\setminus\{0\}$ the vector $(r/(2\|y\|))y$ would lie in $B(0,r)\subseteq W$, forcing $y=(2\|y\|/r)\,(r/(2\|y\|))y\in W$; also $0\in W$. So $W=X$, contradiction. [given, algebra, assume-contra]

2.1 By [L5], fix a surjection $d:\mathbb N\to D$. [step 1.1, L5, choose]

2.2 $D$ is dense in $X$. Indeed, let $x=\sum_{j=0}^m \lambda_j b_{n_j}\in X$ and let $\varepsilon>0$. Choose $q_j\in Q_{\mathbb K}$ with $|\lambda_j-q_j|<\varepsilon/(2(m+1)(1+\sum_{j=0}^m\|b_{n_j}\|))$. Then $$\left\|x-\sum_{j=0}^m q_j b_{n_j}\right\| \le \sum_{j=0}^m |\lambda_j-q_j|\,\|b_{n_j}\|<\varepsilon.$$ So every vector of $X$ lies in the closure of $D$. [step 1.1, algebra, choose]

3.1 We now run the separable-complete Baire argument inside the open unit ball $U_0:=\{x:\|x\|<1\}$. Because $F_0$ is closed with empty interior, the set $U_0\setminus F_0$ is nonempty and open. By step 2.2, the set $$A_0:=\{m\in\mathbb N:d(m)\in U_0\setminus F_0\}$$ is nonempty, so [L5] gives its least element $m_0$. Put $x_0:=d(m_0)$. Since $U_0\setminus F_0$ is open at $x_0$, the set $$B_0:=\left\{k\in\mathbb N_{\ge1}:\overline B\left(x_0,\frac1k\right)\subseteq U_0\setminus F_0\right\}$$ is nonempty; let $k_0$ be its least element and set $r_0:=1/k_0$. Then $\overline B(x_0,r_0)\subseteq U_0\setminus F_0$. [step 2.1, step 2.2, step 1.3, L5, choose, construct]

3.2 Inductively, if closed balls $\overline B(x_n,r_n)\subseteq U_0\setminus F_n$ have been chosen with $\overline B(x_n,r_n)\subseteq B(x_{n-1},r_{n-1}/2)$ for $n\ge1$, then $B(x_n,r_n/2)\setminus F_{n+1}$ is a nonempty open set. By step 2.2, the set $$A_{n+1}:=\{m\in\mathbb N:d(m)\in B(x_n,r_n/2)\setminus F_{n+1}\}$$ is nonempty, so [L5] gives its least element $m_{n+1}$. Put $x_{n+1}:=d(m_{n+1})$. Since $B(x_n,r_n/2)\setminus F_{n+1}$ is open at $x_{n+1}$, the set $$B_{n+1}:=\left\{k\in\mathbb N_{\ge1}:\frac1k<\frac{r_n}2\text{ and }\overline B\left(x_{n+1},\frac1k\right)\subseteq B(x_n,r_n/2)\setminus F_{n+1}\right\}$$ is nonempty; let $k_{n+1}$ be its least element and set $r_{n+1}:=1/k_{n+1}$. Then $$\overline B(x_{n+1},r_{n+1})\subseteq B(x_n,r_n/2)\setminus F_{n+1}\subseteq \overline B(x_n,r_n),$$ and $r_{n+1}<r_n/2$. Hence $r_n\le r_0/2^n$ for every $n$, so $r_n\to0$. [step 2.1, step 2.2, step 1.3, L5, choose, construct]

4.1 For $m>n$, the inclusion from step 3.2 gives $x_m\in B(x_n,r_n/2)$, so $\|x_m-x_n\|<r_n/2$. Hence $(x_n)$ is Cauchy. Since $X$ is Banach, [L1] gives $x_n\to x$ for some $x\in X$. Each $\overline B(x_n,r_n)$ is closed and contains all later $x_m$, so it contains the limit $x$; therefore $x\in \overline B(x_n,r_n)\subseteq X\setminus F_n$ for every $n$. [L1, step 3.1, step 3.2]

5.1 Step 4.1 contradicts $X=\bigcup_N F_N$ from step 1.2. Therefore no countably infinite Hamel basis exists. The foundational point recorded in [L4] is that the proof used only a fixed countable dense set, with both the recurring point selections and the ball radii chosen canonically from $\mathbb N$, and not the unrestricted complete-metric Baire theorem. [L4, step 1.2, step 4.1, discharge-contradiction] ∎

## Remarks

- The proof is written over the underlying real normed space in the complex case, so no separate complex Baire argument is needed.
