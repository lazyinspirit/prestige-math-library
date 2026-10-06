---
id: def-holder-spaces-c-k-alpha-and-their-scaled-norms
kind: definition
title: "Hölder spaces $C^{k,\\alpha}$, closure and interior scaled norms, and $C^{k,\\alpha}$ domains"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
dependency_level: 0
deps: [def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-ck-and-multi-index-notation-in-several-variables, def-bounded-c-k-domain-and-boundary-charts, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-euclidean-spheres-and-closed-balls]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.1, Hölder spaces and Exercise 8.3, printed p. 140 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, Hölder classes $C^{k,\\alpha}(\\Omega)$ and $C^{k,\\alpha}(\\bar\\Omega)$ and the definition of a $C^{k,\\alpha}$ boundary, printed pp. 126 and 134 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§1.4 and §3.5, the $C^{k,\\alpha}$ and $C^{2,\\alpha}(\\bar U)$ notation used for the Schauder estimates, printed pp. 31-42 and 127 (read for notation)"
---

## Definition

Let $n\ge1$ be an integer, let $k\ge0$ be an integer, let $0<\alpha<1$ and let $\mathbb K\in\{\mathbb R,\mathbb C\}$. Fix an open set $\Omega\subseteq\mathbb R^n$ and a function $u\in C^k(\Omega;\mathbb K)$, where $C^k$ and the canonical-order derivatives $D^\beta u$ are those of [[def-ck-and-multi-index-notation-in-several-variables]]. Put
$$[u]_{k,\alpha;\Omega}:=\sum_{|\beta|=k}\ \sup_{\substack{x,y\in\Omega\\ x\ne y}}\frac{|D^\beta u(x)-D^\beta u(y)|}{|x-y|^{\alpha}},\qquad \|u\|_{C^{k,\alpha}(\Omega)}:=\sum_{j=0}^{k}\ \sup_{x\in\Omega}\ \max_{|\beta|=j}|D^\beta u(x)|+[u]_{k,\alpha;\Omega},$$
where the sums and maxima run over the finitely many multi-indices of the stated order. The quantity $[u]_{k,\alpha;\Omega}$ is the **$k$-th order $\alpha$-Hölder seminorm** of $u$ and the quantity $\|u\|_{C^{k,\alpha}(\Omega)}$ the **$C^{k,\alpha}$ norm** of $u$; both are taken in $[0,+\infty]$, so the "norm" may be $+\infty$ and only the class below carries a genuine normed-space structure.

The **local Hölder class** $C^{k,\alpha}_{\mathrm{loc}}(\Omega;\mathbb K)$ consists of the $u\in C^k(\Omega;\mathbb K)$ with $[u]_{k,\alpha;\Omega'}<+\infty$ for every $\Omega'\Subset\Omega$. The **bounded class** $C^{k,\alpha}(\Omega;\mathbb K)=C^{k,\alpha}_b(\Omega;\mathbb K)$ consists of the $u\in C^k(\Omega;\mathbb K)$ with $\|u\|_{C^{k,\alpha}(\Omega)}<+\infty$. Thus $C^{k,\alpha}(\Omega;\mathbb K)\subseteq C^{k,\alpha}_{\mathrm{loc}}(\Omega;\mathbb K)$, and the inclusion may be strict: on $\Omega=\mathbb R^n$ the function $u(x)=\sin(|x|^2)$ lies in the local class (it is $C^1$, hence locally $\alpha$-Hölder on every compact set), while $[u]_{0,\alpha;\mathbb R^n}=+\infty$, because at the points $x_j=\sqrt{2\pi j}\,e_1$ and $y_j=x_j+(2\sqrt{2\pi j})^{-1}e_1$ the difference quotients are $\asymp(2\sqrt{2\pi j})^{\alpha}\to\infty$. On the bounded class the displayed formula is a norm, and the assignment $u\mapsto\|u\|_{C^{k,\alpha}(\Omega)}$ is that norm.

**Scaled interior norm.** For a ball $B_R(x_0)\subseteq\Omega$ of radius $R>0$ and centre $x_0$, write $[v]_{0,\alpha;B}:=\sup\{|v(x)-v(y)|/|x-y|^{\alpha}:x,y\in B,\ x\ne y\}$ for the plain Hölder seminorm on a set $B$, and put
$$\|u\|^{*}_{k,\alpha;B_R(x_0)}:=\sum_{j=0}^{k}R^{j}\max_{|\beta|=j}\ \sup_{B_R(x_0)}|D^\beta u|+R^{k+\alpha}\max_{|\beta|=k}[D^\beta u]_{0,\alpha;B_R(x_0)}.$$
On every ball, $C^{2,\alpha}(B_R(x_0))$ therefore agrees with the finite-scaled-norm class of that dependency. This is the **scaled interior norm** of $u$ on the ball; for $k=2$ it is exactly the scaled quantity of [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]], and it takes values in $[0,+\infty]$ as well. It is read off the open ball alone.

**Bounded $C^{k,\alpha}$ domains.** A **bounded $C^{k,\alpha}$ domain** in $\mathbb R^n$ is a bounded nonempty open set $\Omega\subseteq\mathbb R^n$ with the following local graph property: for every $x\in\partial\Omega$ there are an open neighbourhood $W$ of $x$, a rigid motion $R(p)=Qp+b$ with orthogonal $Q$ and $b\in\mathbb R^n$, an open ball $B\subseteq\mathbb R^{n-1}$ and a function $\varphi\in C^{k,\alpha}(B;\mathbb R)$ such that, after shrinking $W$ so that $R(W)\subseteq B\times\mathbb R$,
$$R(\Omega\cap W)=R(W)\cap\{y=(y',y_n)\in B\times\mathbb R:\ y_n<\varphi(y')\}.$$
This generalises the integer-order notion of [[def-bounded-c-k-domain-and-boundary-charts]] to the Hölder scale, with the same one-sided graph convention; the regularity $\varphi\in C^{k,\alpha}(B)$ is the only strengthening, connectedness is not required, and no boundary seminorm is attached to the interior norms above. In dimension $n=1$ the corresponding sets are finite disjoint unions of bounded open intervals.

**The boundary-extension class.** Let $\Omega$ be bounded and let $u\in C^{k,\alpha}_b(\Omega;\mathbb K)$. Say that $u$ lies in $C^{k,\alpha}(\overline\Omega;\mathbb K)$ when each derivative field $D^\beta u$ with $|\beta|\le k$ extends continuously to $\overline\Omega$. The extension of each field is then unique, since $\Omega$ is dense in $\overline\Omega$, and the sup and Hölder quantities formed with the extended fields and suprema over $\overline\Omega$ agree with those displayed above, formed over $\Omega$: a supremum over the dense subset $\Omega$ already computes the supremum of the extension, and for the seminorm the inequality $[\tilde v]_{0,\alpha;\overline\Omega}\le[v]_{0,\alpha;\Omega}$ follows by approximating a pair in $\overline\Omega$ by pairs in $\Omega$, so the two seminorms are equal. We equip $C^{k,\alpha}(\overline\Omega;\mathbb K)$ with this common norm. This is the Hölder-scale analogue of the interior-up-to-boundary convention for integer order $C^m(\overline\Omega)$ fixed in [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]].

## Remarks

- **Scaling.** If $R>0$, $x_0\in\mathbb R^n$ and $v(z):=u(x_0+Rz)$ on $B_1(0)$, then $D^\beta v(z)=R^{|\beta|}D^\beta u(x_0+Rz)$, and consequently $\|v\|^{*}_{k,\alpha;B_1(0)}=\|u\|^{*}_{k,\alpha;B_R(x_0)}$. The powers $R^{j}$ and $R^{k+\alpha}$ are exactly what makes this identity hold; the same computation with $k=2$ is the one recorded in [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]].
- **Boundary extension.** For $k=0$, every element of $C_b^{0,\alpha}(\Omega)$ is uniformly continuous and extends uniquely to $\overline\Omega$: for any boundary point choose an interior sequence converging to it, use the Hölder bound to make its values Cauchy, and compare two sequences by the same bound. For $k\ge1$, boundedness of the lower-order fields need not give their boundary limits on an arbitrary open set. For example, let $\Omega=((0,1)\times(0,2))\cup((1,2)\times(0,2))$ and let $u$ equal $0$ on the first component and $1$ on the second. All positive-order derivatives vanish, so $\|u\|_{C^{k,\alpha}(\Omega)}=1$ for $k\ge1$, but $u$ has no limit at $(1,1)$. This set fails the one-sided boundary graph condition at the removed interface. The definitions assert no trace theorem, completeness or compactness.
- **Local versus bounded.** The local class tests compactly contained subsets; the bounded class additionally controls all derivative suprema and the global top-order seminorm. On arbitrary bounded open sets, lower-order suprema can also fail: on the disjoint intervals $I_j=(2^{-j},2^{-j}+2^{-j-2})$, the function equal to $j$ on $I_j$ is locally smooth with every positive-order derivative zero, but is unbounded. Thus boundedness of the domain alone does not identify the two classes.
- **Choice.** The definition itself uses no choice principle; later completeness, approximation and embedding statements on this page state their own Countable Choice hypotheses.
