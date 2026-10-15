---
id: thm-tdmath-fenchel-attainment
kind: theorem
title: "A coercive Fenchel tilt attains its minimum and conjugate supremum"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - def-complete-ordered-field
  - def-euclidean-inner-product
  - def-infimum
  - def-metric-topology
  - def-tdmath-extended-convex-function
  - def-tdmath-fenchel-transform-and-subgradient
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - lem-finite-set-has-max
  - lem-inf-epsilon
  - thm-compact-iff-finite-intersection-property
  - thm-heine-borel-rn
  - thm-infimum-property
  - lem-tdmath-extended-convex-epigraph-equivalence
  - lem-tdmath-fenchel-young-equality
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-infimum: mathematical-premise
  def-metric-topology: mathematical-premise
  def-tdmath-extended-convex-function: mathematical-premise
  def-tdmath-fenchel-transform-and-subgradient: mathematical-premise
  lem-euclidean-linear-maps-have-matrices-and-are-bounded: mathematical-premise
  lem-finite-set-has-max: mathematical-premise
  lem-inf-epsilon: mathematical-premise
  thm-compact-iff-finite-intersection-property: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-infimum-property: mathematical-premise
  lem-tdmath-extended-convex-epigraph-equivalence: mathematical-premise
  lem-tdmath-fenchel-young-equality: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, §§12, 23, and 27"
      url: "https://djvu.online/file/68u51YEBQaqiP"
    - title: "P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §§1.5 and 2.3"
      url: "https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf"
verification:
  precheck: n/a
---

## Statement

Let $d\ge1$ be an integer, let $f:\mathbb R^d\to\overline{\mathbb R}$ be closed, proper, and convex, and let $p\in\mathbb R^d$. Define $g(x)=f(x)-\langle p,x\rangle$. Assume $g$ is **coercive**, meaning that for every $M\in\mathbb R$ there is $R>0$ such that $\|x\|_2\ge R$ implies $g(x)>M$. Then $g$ has a finite global minimum at some $x_*\in\operatorname{dom}f$. The supremum defining $f^*(p)$ is finite and attained at $x_*$, and $p\in\partial f(x_*)$. No uniqueness is asserted.

## Facts & Assumptions

**Given:** The function conventions of [[def-tdmath-extended-convex-function]], the Fenchel definitions of [[def-tdmath-fenchel-transform-and-subgradient]], and the coercivity condition in the Statement.

[L1] [[lem-tdmath-extended-convex-epigraph-equivalence]]: the epigraph is closed if and only if every weak sublevel set is closed, equivalently if and only if the function is lower semicontinuous.

[L2] [[def-euclidean-inner-product]] makes the shear $T(x,r)=(x,r+\langle p,x\rangle)$ linear, and [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]] supplies $K\ge0$ such that $\|Tz-Tz'\|_2\le K\|z-z'\|_2$ for all $z,z'\in\mathbb R^{d+1}$.

[L3] [[thm-heine-borel-rn]]: closed bounded Euclidean sets are compact.

[L4] [[thm-compact-iff-finite-intersection-property]]: a family of closed subsets of a compact metric space with the finite intersection property has nonempty intersection.

[L5] [[thm-infimum-property]] and [[def-infimum]]: every nonempty real set bounded below has an infimum; [[lem-inf-epsilon]] gives a point below $m+\varepsilon$ for every $\varepsilon>0$.

[L6] [[lem-finite-set-has-max]]: every nonempty finite set of real numbers has a maximum.

[L7] [[lem-tdmath-fenchel-young-equality]]: equality in Fenchel's inequality at a finite point is equivalent to the subgradient inequality.

## Proof

**Proof technique:** direct.

1.1 Since $f$ is proper, choose $x_0\in\operatorname{dom}f$ and put $c=g(x_0)\in\mathbb R$. By coercivity, first choose a radius $R_0>0$ such that $g(x)>c+1$ whenever $\|x\|_2\ge R_0$, then enlarge it to $R>\max\{R_0,\|x_0\|_2\}$; the same implication holds for this $R$. Let $K=\{x:\|x\|_2\le R\}$; it is nonempty, closed, bounded, and therefore compact by [L3]. [given, L3, choose]

1.2 The epigraph of $g$ is $T^{-1}(\operatorname{epi}f)$, because $g(x)\le r$ exactly when $f(x)\le r+\langle p,x\rangle$. By [L1], $\operatorname{epi}f$ is closed. Fix $z\notin T^{-1}(\operatorname{epi}f)$; openness of the complement of $\operatorname{epi}f$ gives $\varepsilon>0$ such that the Euclidean ball of radius $\varepsilon$ around $Tz$ misses $\operatorname{epi}f$. Set $\rho=\varepsilon/(K+1)>0$. If $\|z'-z\|_2<\rho$, [L2] gives $\|Tz'-Tz\|_2\le K\|z'-z\|_2<\varepsilon$, so $Tz'$ also lies outside $\operatorname{epi}f$. Thus the complement of $T^{-1}(\operatorname{epi}f)$ is open and $\operatorname{epi}g$ is closed. By [L1], $g$ is lower semicontinuous. [L1, L2, given, algebra]

2.1 For each real $r>0$, $U_r=\{x\in K:g(x)>-r\}$ is relatively open in $K$, since its complement is the weak sublevel $K\cap\{g\le-r\}$. These sets cover $K$ because $g(x)\in\mathbb R\cup\{+\infty\}$ for every $x$ (properness excludes $-\infty$ and the tilt is finite). Compactness gives a finite subcover, and [L6] supplies a largest real index $r_*$ among its finitely many indices. Since the $U_r$ are nested, $U_{r_*}=K$, so every finite value of $g$ on $K$ is greater than $-r_*$. [L1, L3, L6, given, step 1.1, algebra]

3.1 Let $S:=\{g(x):x\in K,\ g(x)<+\infty\}$. It is nonempty because $x_0\in K$ and $g(x_0)=c$, and it is a real set bounded below by $-r_*$ by step 2.1. It therefore has a real infimum $m$. For every $\varepsilon>0$, [L5] gives $s\in S$ with $s<m+\varepsilon$; choosing $x\in K$ with $g(x)=s$ shows $F_\varepsilon:=K\cap\{x:g(x)\le m+\varepsilon\}$ is nonempty. It is closed in $K$ by [L1]. Any nonempty finite subfamily has nonempty intersection, because the member with least positive $\varepsilon$ is contained in all the others; the empty subfamily has intersection $K\ne\emptyset$. [L1, L4, L5, step 1.1, step 2.1, choose]

4.1 Applying [L4] to the family $(F_\varepsilon)_{\varepsilon>0}$ gives $x_*\in\bigcap_{\varepsilon>0}F_\varepsilon$. The bound $g(x_*)\le m+1$ makes $g(x_*)$ finite, so $g(x_*)\in S$ and $m\le g(x_*)$. If $g(x_*)>m$, choose $\varepsilon=(g(x_*)-m)/2>0$; then $x_*\in F_\varepsilon$ would give $g(x_*)\le m+\varepsilon<g(x_*)$, a contradiction. Thus $g(x_*)=m$. [L4, step 3.1, algebra, choose]

5.1 For $x\notin K$, step 1.1 gives $g(x)>c+1\ge m+1$, because $x_0\in K$ implies $m\le c$. Thus $x_*$ is a global minimizer over $\mathbb R^d$, and its value $m$ is finite. [step 1.1, step 4.1, algebra]

6.1 On $\operatorname{dom}f$, $-g(x)=\langle p,x\rangle-f(x)$, and outside this domain $g(x)=+\infty$. The global minimum $m$ is attained at $x_*\in\operatorname{dom}f$, so the supremum in the definition of $f^*(p)$ is finite, equals $-m$, and is attained at $x_*$. Therefore $f^*(p)=\langle p,x_*\rangle-f(x_*)$; [L7] yields $p\in\partial f(x_*)$. [given, L7, step 5.1, algebra] ∎
