---
id: lem-james-space-dual-and-bidual-identification
kind: lemma
title: "Dual and bidual models for James space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-james-space, lem-james-formula-defines-a-norm, thm-james-space-is-complete-and-separable, cor-ell-p-duality-by-counting-measure]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Lemmas 2.79-2.80 and Theorem 2.81, Steps 1-6, printed pp.98-106"
pipeline_run: phase-2-next-18
---

## Statement

Assume Countable Choice. Use the positive coordinate labels fixed in
[[def-james-space]], and use the same relabeling for the underlying
$\ell^2(\mathbb N)$ and $\ell^\infty(\mathbb N)$ coordinates. Under the pairing
$\langle y,x\rangle=\sum_{n\ge1}y_nx_n$,

$$J^*=\left\{y\in\ell^2: \|y\|_{J^*}:=\sup_{0\ne x\in\ell^2} \frac{|\langle y,x\rangle|}{\|x\|_J}<\infty\right\},$$

and finite-support sequences are norm dense in $J^*$. For a bounded real
sequence $z$ and a nonempty positive tuple $p=(p_1<\cdots<p_k)$, let $q_p(z)$
be the cyclic expression in [[def-james-space]] (the same finite formula makes
sense without assuming $z\in c_0$), and define the endpoint variation by

$$r_p(z)^2:=\frac12\left(|z_{p_1}|^2+\sum_{j=1}^{k-1}|z_{p_j}-z_{p_{j+1}}|^2+|z_{p_k}|^2\right).$$

For $k=1$ this gives $r_{(p_1)}(z)=|z_{p_1}|$. Then

$$J^{**}=\left\{z\in\ell^\infty: \|z\|_{J^{**}}:=\sup_p\max\{q_p(z),r_p(z)\}<\infty\right\}$$

isometrically. Every such $z$ has a unique representation
$z=x+\lambda\mathbf1$ with $x\in J$ and $\lambda\in\mathbb R$, and the
canonical image of $J$ is the summand with $\lambda=0$.

## Facts & Assumptions

[A1] Countable Choice holds ([[def-countable-choice]]).

[L1] $J$ is Banach, $c_{00}$ is dense, and its coordinate truncations and
tails are contractions converging strongly to the identity
([[thm-james-space-is-complete-and-separable]]).

[L2] The defining James formula contains $\ell^2$ and satisfies
$\|x\|_J\le\sqrt2\|x\|_2$ for every $x\in\ell^2$
([[lem-james-formula-defines-a-norm]]).

[L3] The real dual of $\ell^2$ is represented uniquely by $\ell^2$ sequences
under the series pairing ([[cor-ell-p-duality-by-counting-measure]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 If $\Lambda\in J^*$, then [L2] makes $\Lambda|_{\ell^2}$ bounded on
$\ell^2$ because $|\Lambda(x)|\le\|\Lambda\|\|x\|_J\le
\sqrt2\|\Lambda\|\|x\|_2$. [given, L1, L2, L3]
By [L3] it is pairing with a unique $y\in\ell^2$. Density of $\ell^2$ in
$J$ makes $y$ determine $\Lambda$, and the displayed supremum is exactly its
operator norm. Conversely, any $y$ with finite displayed supremum extends by
continuity from dense $\ell^2$ to $J$. [L1, L2, L3, continuous extension]

2.1 Dual coordinate truncation is pairing with $\Pi_Nx$. The two contraction [given, L1, step 1.1]
estimates in [L1] therefore give
$\|\Pi_Ny\|_{J^*}\le\|y\|_{J^*}$ and
$\|y-\Pi_Ny\|_{J^*}\le\|y\|_{J^*}$. The coordinate interpretation follows
directly from the series pairing. [L1, step 1.1]

3.1 We prove the latter tails tend to zero. If instead their decreasing norms [given, A1, L1, step 2.1]
stay above $\varepsilon>0$, then [A1] is used exactly here to choose, for each
$N$, a finite-support $u^{(N)}\in J$ with
$\Pi_Nu^{(N)}=0$, $\|u^{(N)}\|_J=1$, and
$\langle y,u^{(N)}\rangle>\varepsilon$ (change sign if needed). Starting at
$N_1=1$, put $N_{j+1}=\max\operatorname{supp}u^{(N_j)}$. [A1, L1, step 2.1]

4.1 Form $\xi\in c_0$ by placing $j^{-1}u^{(N_j)}$ on the coordinate block [given, L1, step 3.1]
$(N_j,N_{j+1}]$. To verify $\xi\in J$, split any finite increasing tuple into
its intersections with these blocks. Each within-block endpoint variation is
at most $1/j$, and $|a-b|^2\le2|a|^2+2|b|^2$ bounds every transition between
blocks by the two adjacent endpoint terms. Consequently

$$R(\xi)^2\le2\sum_{j\ge1}j^{-2}<\infty,$$

where $R=\sup_pr_p$; the equivalence in [L1]'s proof gives $\xi\in J$.
But
$\langle y,\Pi_{N_k}\xi\rangle
\ge\varepsilon\sum_{j<k}j^{-1}$ is unbounded, whereas [L1] makes
$\|\Pi_{N_k}\xi\|_J\le\|\xi\|_J$. This contradicts $y\in J^*$, proving
$\Pi_Ny\to y$. [L1, step 3.1, block calculation]

5.1 Let $\Lambda\in J^{**}$ and set $z_n=\Lambda(e_n)$. Since [given, step 4.1]
$\|e_n\|_{J^*}=1$, $z$ is bounded. By step 4.1,

$$\Lambda(y)=\lim_N\Lambda(\Pi_Ny) =\lim_N\sum_{n\le N}y_nz_n.$$

For each $p$, the gradients of the finite Euclidean seminorms $q_p$ and $r_p$
are explicit finite-support functionals of $J^*$ of norm at most one (because
$q_p(x),r_p(x)\le\|x\|_J$). Evaluating them on $z$ gives
$q_p(z),r_p(z)\le\|\Lambda\|$. Hence
$\sup_p\max\{q_p(z),r_p(z)\}\le\|\Lambda\|$. [step 4.1, finite Euclidean
duality]

6.1 Conversely, suppose bounded $z$ has [given, step 5.1]
$B:=\sup_p\max\{q_p(z),r_p(z)\}<\infty$. It is Cauchy: otherwise some
$\varepsilon>0$ permits recursively choosing the lexicographically least
$p_1<q_1<p_2<q_2<\cdots$ with $|z_{p_j}-z_{q_j}|\ge\varepsilon$; then the
cyclic variation on the first $2k$ indices is at least
$\varepsilon\sqrt{k/2}$, contradicting $B<\infty$. Let
$\lambda=\lim_nz_n$ and $x=z-\lambda\mathbf1$. Then $x\in c_0$ and
$q_p(x)=q_p(z)$, so $x\in J$. [finite coding, completeness of $\mathbb R$]

7.1 For $y\in J^*$, the partial-sum functionals [given, step 4.1, step 6.1]
$h_N(y)=\sum_{n\le N}y_n=\langle y,\mathbf1_{\{1,\ldots,N\}}\rangle$
have norm at most one because that initial-block vector has James norm one.
They converge on dense $c_{00}$, and the uniform bound plus step 4.1 makes
$h_N(y)$ converge for every $y\in J^*$. Hence

$$\Lambda_z(y):=\langle y,x\rangle+\lambda\lim_Nh_N(y) =\lim_N\langle y,\Pi_Nz\rangle$$

is well-defined and linear. A tuple crossing the truncation point turns its
cyclic variation into $r_{p'}(z)$, while a tuple on one side gives either zero
or $q_p(z)$; therefore $\|\Pi_Nz\|_J\le B$. Taking limits yields
$|\Lambda_z(y)|\le B\|y\|_{J^*}$. [step 4.1, step 6.1, truncation cases]

8.1 Step 5.1 applied to $\Lambda_z$ gives the reverse norm inequality, so [given, step 5.1, step 6.1, step 7.1]
$\|\Lambda_z\|=B$. Steps 5.1 and 7.1 are inverse constructions and prove the
isometric bidual model. Step 6.1 gives the unique splitting
$z=(z-\lambda\mathbf1)+\lambda\mathbf1$; since elements of $J$ tend to zero,
the canonical image is exactly $\lambda=0$. [steps 5.1, 6.1, 7.1] ∎
