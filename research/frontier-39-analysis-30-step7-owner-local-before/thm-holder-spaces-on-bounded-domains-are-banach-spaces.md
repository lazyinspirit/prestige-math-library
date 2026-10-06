---
id: thm-holder-spaces-on-bounded-domains-are-banach-spaces
kind: theorem
title: The closure Hölder spaces are Banach spaces
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 1
deps: [def-holder-spaces-c-k-alpha-and-their-scaled-norms, def-banach-space, def-complete-metric-space, thm-uniform-cauchy-criterion-real-functions, thm-uniform-limit-continuous-real-functions, thm-uniform-limit-continuous-complex-functions, thm-uniform-derivative-limit-on-a-closed-interval, thm-complete-subspace-iff-closed, cor-mean-value-theorem, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, thm-symmetry-of-higher-mixed-partials]
sources:
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, the spaces $C^{k,\\alpha}(\\Omega)$, $C^{k,\\alpha}(\\bar\\Omega)$ and their seminorm conventions, printed pp. 125-126 (read in full)"
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.1 basic Hölder facts and the compact-embedding/Arzelà–Ascoli context of Exercises 8.4-8.6, printed pp. 140-141 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§1.4.2, the Banach-space setting $C^{2,\\alpha}(\\bar U)$ of the Schauder estimates, printed pp. 36-42 (read in full)"
---

## Statement

Assume Countable Choice. Let $n\ge1$, let $k\ge0$ be an integer, $0<\alpha<1$, $\mathbb K\in\{\mathbb R,\mathbb C\}$ and let $\Omega\subseteq\mathbb R^n$ be open and nonempty. Then $C^{k,\alpha}_b(\Omega;\mathbb K)$ with the norm of [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]] is a Banach space over $\mathbb K$: every Cauchy sequence in $\|\cdot\|_{C^{k,\alpha}(\Omega)}$ converges in that norm to a limit whose $k$-th partial derivatives are $\alpha$-Hölder on $\Omega$. If in addition $\Omega$ is a bounded $C^{k,\alpha}$ domain with nonempty boundary, then the subspace
$$X_0:=\{u\in C^{k,\alpha}_b(\Omega): u\text{ extends continuously to }\bar\Omega\text{ with }u|_{\partial\Omega}=0\}$$
is closed in $C^{k,\alpha}_b(\Omega)$ and hence is a Banach space. Completeness here is for the full finite Hölder norm. A boundary Hölder seminorm alone does not define a norm on this function space, since it vanishes on nonzero constant functions.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge1$, integers $k\ge0$, $0<\alpha<1$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, an open nonempty $\Omega\subseteq\mathbb R^n$, and a Cauchy sequence $(u_j)$ in $C^{k,\alpha}_b(\Omega;\mathbb K)$.

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$, used through the sequential completeness of $\mathbb R$ and $\mathbb C$ and the cited metric-space completeness conventions. No full Axiom of Choice is used. ([[def-countable-choice]])

[F1] The norm is $\|u\|_{C^{k,\alpha}(\Omega)}=\sum_{j=0}^k\sup_\Omega\max_{|\beta|=j}|D^\beta u|+[u]_{k,\alpha;\Omega}$ with $[u]_{k,\alpha;\Omega}=\sum_{|\beta|=k}[D^\beta u]_{0,\alpha;\Omega}$, and $C^{k,\alpha}_b$ consists of the $C^k$ functions with finite norm; $D^\beta$ are the canonical-order derivatives. ([[def-holder-spaces-c-k-alpha-and-their-scaled-norms]], [[def-ck-and-multi-index-notation-in-several-variables]])

[F2] Uniformly Cauchy sequences of real- (or complex-) valued functions converge uniformly; a uniform limit of continuous functions is continuous; and if $g_m\to g$ uniformly on an interval and the derivatives $g_m'$ converge uniformly with $g_m(t_0)\to g(t_0)$ at one point, then $g'=\lim_mg_m'$. ([[thm-uniform-cauchy-criterion-real-functions]], [[thm-uniform-limit-continuous-real-functions]], [[thm-uniform-limit-continuous-complex-functions]], [[thm-uniform-derivative-limit-on-a-closed-interval]])

[F3] A Banach space is a complete normed space; a subspace of a complete metric space is complete if and only if it is closed, under Countable Choice. ([[def-banach-space]], [[def-complete-metric-space]], [[thm-complete-subspace-iff-closed]])

[F4] The real mean value theorem bounds the increment of a differentiable function on a segment by the supremum of its derivative times the length of the segment. ([[cor-mean-value-theorem]])

## Proof

**Proof technique:** direct.

1.1 Uniform limits of the derivative fields. Since $(u_j)$ is Cauchy in $\|\cdot\|_{C^{k,\alpha}(\Omega)}$, for every multi-index $\beta$ with $|\beta|\le k$ the sequence $(D^\beta u_j)$ is uniformly Cauchy on $\Omega$: for $j,l$ and every $x\in\Omega$, $|D^\beta u_j(x)-D^\beta u_l(x)|\le\|u_j-u_l\|_{C^{k,\alpha}(\Omega)}$. By [F2] there is a bounded function $v_\beta$ with $D^\beta u_j\to v_\beta$ uniformly on $\Omega$, and $v_\beta$ is continuous. Moreover $\sup_\Omega|v_\beta|=\lim_j\sup_\Omega|D^\beta u_j|\le\liminf_j\|u_j\|_{C^{k,\alpha}(\Omega)}<\infty$, the last bound holding because a Cauchy sequence is bounded. [given, F1, F2, algebra, A1]

2.1 The limits are Hölder. For $|\beta|=k$ and $x\ne y$ in $\Omega$, $|v_\beta(x)-v_\beta(y)|=\lim_j|D^\beta u_j(x)-D^\beta u_j(y)|\le\liminf_j[D^\beta u_j]_{0,\alpha;\Omega}|x-y|^{\alpha}$; hence $[v_\beta]_{0,\alpha;\Omega}\le\liminf_j[D^\beta u_j]_{0,\alpha;\Omega}\le\liminf_j\|u_j\|_{C^{k,\alpha}(\Omega)}<\infty$ and $v_\beta$ is $\alpha$-Hölder on $\Omega$. Consequently $v_0$ (whose finiteness and continuity is step 1.1, including $k=0$, where no derivative is involved) satisfies $\|v_0\|_{C^{k,\alpha}(\Omega)}\le\liminf_j\|u_j\|_{C^{k,\alpha}(\Omega)}<\infty$ as soon as $v_\beta=D^\beta v_0$ for all $|\beta|\le k$, which is proved next. [step 1.1, F1, algebra]

2.2 Identification of the limits with the derivatives of $v_0$. Proceed by induction on $|\beta|$. For $\beta=0$, $v_0$ is the limit. Suppose $v_\beta=D^\beta v_0$ is known on $\Omega$ for some $|\beta|<k$; fix $i$ and a ball $B\Subset\Omega$ (every point of $\Omega$ lies in such a ball). On $B$, all $u_j$ are $C^k$; for orders at least two, [[thm-symmetry-of-higher-mixed-partials]] identifies their derivative words with the canonical-order fields. Thus $D^\beta u_j\to v_\beta$ uniformly while $D^{\beta+e_i}u_j\to v_{\beta+e_i}$ uniformly; by [F2] applied to the restrictions to each coordinate segment inside $B$ (as in the one-variable theorem on a closed interval, at a fixed base point where $D^\beta u_j$ converges), the limit $v_\beta$ is differentiable in direction $e_i$ with $\partial_iv_\beta=v_{\beta+e_i}$ on $B$; Since every point lies in such a ball, this gives $\partial_iD^\beta v_0=D^{\beta+e_i}v_0=v_{\beta+e_i}$ on $\Omega$. [step 1.1, F1, F2, algebra, F4]

3.1 Convergence in the Hölder norm. Let $\varepsilon>0$ and choose $J$ with $\|u_j-u_l\|_{C^{k,\alpha}(\Omega)}\le\varepsilon$ for $j,l\ge J$. Fixing $l\ge J$ and passing to the limit in the componentwise bounds of steps 1.1 and 2.1 gives $\sup_\Omega|v_\beta-D^\beta u_l|\le\varepsilon$ for all $|\beta|\le k$ and $[v_\beta-D^\beta u_l]_{0,\alpha;\Omega}\le\varepsilon$ for $|\beta|=k$; hence $\|v_0-u_l\|_{C^{k,\alpha}(\Omega)}\le C_k\varepsilon$ for every $l\ge J$ with a dimensional factor $C_k$. So the Cauchy sequence converges in the norm to $v_0\in C^{k,\alpha}_b(\Omega)$, and $C^{k,\alpha}_b(\Omega;\mathbb K)$ is complete: it is a Banach space over $\mathbb K$ (the vector-space operations are the pointwise ones and the norm is by [F1]). The complex case follows from the real case applied to real and imaginary parts, using [F2]'s complex uniform limit statement. [step 2.1, step 2.2, F1, F2, F3, algebra]

4.1 The boundary-condition subspace. Assume now $\Omega$ is a bounded $C^{k,\alpha}$ domain with nonempty boundary, and let $(u_j)$ be a sequence in $X_0$ converging to $u$ in $C^{k,\alpha}_b(\Omega)$. Each $u_j$ has a continuous extension $\bar u_j$ to $\bar\Omega$ with $\bar u_j=0$ on $\partial\Omega$. Since $\bar\Omega$ is compact and the extensions are uniformly Cauchy on the dense set $\Omega$, they are uniformly Cauchy on $\bar\Omega$ (for $x\in\bar\Omega$ and $y\in\Omega$ near $x$, $|\bar u_j(x)-\bar u_l(x)|=\lim_{y\to x}|\bar u_j(y)-\bar u_l(y)|\le\sup_\Omega|u_j-u_l|$); hence $\bar u_j$ converges uniformly on $\bar\Omega$ to a continuous $\bar u$ with $\bar u|_\Omega=u$ and $\bar u=0$ on the closed set $\partial\Omega$, so $u\in X_0$. Thus $X_0$ is closed in the Banach space $C^{k,\alpha}_b(\Omega)$, and [F3] makes it complete, hence a Banach space. No boundary seminorm is introduced; the completeness used is that of the closure norm. [step 3.1, F1, F2, F3, algebra] ∎

## Remarks

- The theorem is stated for arbitrary open nonempty $\Omega$; boundedness and the $C^{k,\alpha}$ boundary are used only in the last step, to make $\bar\Omega$ compact and to give the boundary condition a meaning.
- The local class $C^{k,\alpha}_{\mathrm{loc}}(\Omega)$ may contain functions with infinite full-domain norm; the displayed norm defines a Banach space on its finite-norm class $C^{k,\alpha}(\Omega)=C_b^{k,\alpha}(\Omega)$. No assertion about completeness for a boundary pseudometric is made.
