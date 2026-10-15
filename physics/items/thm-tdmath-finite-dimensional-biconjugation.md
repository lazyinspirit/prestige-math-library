---
id: thm-tdmath-finite-dimensional-biconjugation
kind: theorem
title: "Finite-dimensional Fenchel-Moreau biconjugation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - def-complete-ordered-field
  - def-euclidean-inner-product
  - def-tdmath-extended-convex-function
  - def-tdmath-fenchel-transform-and-subgradient
  - lem-tdmath-closed-convex-separation
  - lem-tdmath-extended-convex-epigraph-equivalence
  - thm-of-archimedean
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-tdmath-extended-convex-function: mathematical-premise
  def-tdmath-fenchel-transform-and-subgradient: mathematical-premise
  lem-tdmath-closed-convex-separation: mathematical-premise
  lem-tdmath-extended-convex-epigraph-equivalence: mathematical-premise
  thm-of-archimedean: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, §12, Theorems 12.1 and 12.2"
      url: "https://djvu.online/file/68u51YEBQaqiP"
    - title: "P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §2.2, Theorem 2.5"
      url: "https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf"
    - title: "D. P. Bertsekas, A. Nedić, and A. E. Ozdaglar, MIT 6.253 complete lecture notes, Lecture 7"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
    - title: "Zhiyuan Li, Lecture 4: Convex Conjugates and Marginal Duality, Theorem 4.3"
      url: "https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-4___-Convex-Conjugates___-and-Marginal-Duality/"
verification:
  precheck: n/a
---

## Statement

Let $d\ge1$ and let $f:\mathbb R^d\to\overline{\mathbb R}$ be closed, proper, and convex in the sense of [[def-tdmath-extended-convex-function]]. With the Fenchel conjugate and biconjugate of [[def-tdmath-fenchel-transform-and-subgradient]], one has

$$f^{**}(x)=f(x)\qquad(x\in\mathbb R^d).$$

## Facts & Assumptions

**Given:** The closed proper convex function and conjugates in the Statement.

[F1] [[def-tdmath-extended-convex-function]]: proper means $\operatorname{dom}f\ne\varnothing$ and $f>-\infty$; convexity is the extended chord inequality; lower semicontinuity means closed weak sublevel sets.

[F2] [[lem-tdmath-extended-convex-epigraph-equivalence]]: under [F1], $\operatorname{epi}f$ is nonempty, closed, and convex.

[F3] [[lem-tdmath-closed-convex-separation]]: a point outside a nonempty closed convex subset of $\mathbb R^{d+1}$ has a strict linear separator.

[F4] [[def-tdmath-fenchel-transform-and-subgradient]]: $f^*(p)$ and $f^{**}(x)$ are the stated extended suprema over the effective domain and finite conjugate domain.

[L1] [[thm-of-archimedean]]: the canonical natural numbers are cofinal in $\mathbb R$; for every $q\in\mathbb R$ there is a positive integer $k$ with $q<k$.

## Proof

**Proof technique:** direct.

1.1 For any $x$ with $f(x)<+\infty$ and any $p$ with $f^*(p)<+\infty$, the defining supremum gives $f^*(p)\ge\langle p,x\rangle-f(x)$, hence $\langle p,x\rangle-f^*(p)\le f(x)$; taking the supremum over $p$ yields $f^{**}(x)\le f(x)$. If $f(x)=+\infty$, the same upper bound is automatic. [F4, given, algebra]

1.2 Fix $x\in\operatorname{dom}f$ and a real $t<f(x)$. Apply [F3] to $(x,t)$ and the nonempty closed convex set $\operatorname{epi}f$, and negate the resulting separator to write $\langle a,y\rangle+bs\ge c>\langle a,x\rangle+bt$ for all $(y,s)\in\operatorname{epi}f$. Upward closure forces $b\ge0$. If $b=0$, the inequality at $(x,f(x))\in\operatorname{epi}f$ would give $\langle a,x\rangle\ge c>\langle a,x\rangle$, impossible. Thus $b>0$. [F2, F3, given, algebra]

1.3 Now fix $x\notin\operatorname{dom}f$ and $t\in\mathbb R$. Apply [F3] to $(x,t)$ and negate the separator to obtain $\langle a,y\rangle+bs\ge c>\langle a,x\rangle+bt$ for all $(y,s)\in\operatorname{epi}f$. If $b>0$, then $f(y)\ge-\langle a/b,y\rangle+c/b$ for every $y\in\operatorname{dom}f$, so with $p=-a/b$ one has $f^*(p)\le-c/b<+\infty$ and $f^{**}(x)\ge\langle p,x\rangle-f^*(p)\ge(c-\langle a,x\rangle)/b>t$. [F2, F3, F4, algebra]

2.1 Substituting $(y,f(y))$ for every $y\in\operatorname{dom}f$ gives the affine minorant $\ell(y)=-\langle a/b,y\rangle+c/b\le f(y)$. With $p=-a/b$, [F4] gives $f^*(p)\le-c/b$, hence $f^{**}(x)\ge\langle p,x\rangle-f^*(p)\ge\ell(x)>t$. Since this holds for every $t<f(x)$, $f^{**}(x)\ge f(x)$ on $\operatorname{dom}f$. [F4, step 1.2, algebra]

2.2 In the $b=0$ case of step 1.3, the separator gives $\langle a,y\rangle\ge c>\langle a,x\rangle$ for every $y\in\operatorname{dom}f$. Choose $y_0\in\operatorname{dom}f$ and a finite $t_0<f(y_0)$. Apply [F3] to $(y_0,t_0)$ and $\operatorname{epi}f$, reversing the separator orientation to obtain $\langle a_0,y\rangle+b_0s\ge c_0>\langle a_0,y_0\rangle+b_0t_0$ for every $(y,s)\in\operatorname{epi}f$. Upward closure gives $b_0\ge0$, and $b_0=0$ contradicts the inequality at $(y_0,f(y_0))$, so $b_0>0$. Set $p_0=-a_0/b_0$ and $r_0=c_0/b_0$; substituting $(y,f(y))$ gives the affine minorant $\ell_0(y)=\langle p_0,y\rangle+r_0\le f(y)$ on $\operatorname{dom}f$, so [F4] gives $f^*(p_0)\le-r_0$. For each positive integer $k$, define $\ell_k(y)=\ell_0(y)+k(c-\langle a,y\rangle)=\langle p_0-ka,y\rangle+(r_0+kc)$. Since $c-\langle a,y\rangle\le0$ on $\operatorname{dom}f$, this is still a minorant; [F4] gives $f^*(p_0-ka)\le-(r_0+kc)<+\infty$ and hence $f^{**}(x)\ge\ell_k(x)=\ell_0(x)+k\delta$, where $\delta:=c-\langle a,x\rangle>0$ by step 1.3. For any prescribed $B\in\mathbb R$, apply [L1] to $q=(B-\ell_0(x))/\delta$ to choose a positive integer $k$ with $q<k$; multiplying by $\delta>0$ gives $\ell_0(x)+k\delta>B$. Hence $f^{**}(x)$ exceeds every real bound, so $f^{**}(x)=+\infty=f(x)$. [F1, F2, F3, F4, L1, step 1.3, choose, algebra]

3.1 The upper bound from step 1.1 and the lower bounds from steps 2.1 and 2.2 cover respectively finite and infinite values of $f(x)$, proving equality everywhere. [step 1.1, step 2.1, step 2.2] ∎
