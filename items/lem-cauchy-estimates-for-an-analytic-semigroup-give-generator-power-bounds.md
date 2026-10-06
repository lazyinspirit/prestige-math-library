---
id: lem-cauchy-estimates-for-an-analytic-semigroup-give-generator-power-bounds
kind: lemma
title: Cauchy estimates for an analytic semigroup give generator power bounds
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-complex-sector-and-bounded-analytic-semigroup, def-infinitesimal-generator-of-a-c-zero-semigroup, thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions, thm-bounded-operator-space-is-banach, def-banach-space, def-bounded-linear-operator, def-operator-norm, def-unbounded-linear-operator-domain-and-graph, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Theorem 2.25 addendum and its step 5, printed pp. 63-65'
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Theorem 4.6(c),(d) and estimate (4.13), printed pp. 101-104'
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $X$ be a complex Banach space ([[def-banach-space]]) and let
$(T(z))_{z\in\Sigma_\delta\cup\{0\}}$ be a bounded analytic semigroup of angle
$\delta\in(0,\pi/2]$ with generator $A$
([[def-complex-sector-and-bounded-analytic-semigroup]],
[[def-infinitesimal-generator-of-a-c-zero-semigroup]]), and put
$M_{\delta'}:=\sup_{z\in\Sigma_{\delta'}}\|T(z)\|<\infty$ for
$0<\delta'<\delta$. Then for every $t>0$, every $m\ge1$ and every
$0<\delta''<\delta'<\delta$:

1. $T(t)X\subseteq D(A^m)$ and the identity $T^{(m)}(t)=A^mT(t)$ holds as
   bounded operators, where $T^{(m)}$ is the $m$-th norm derivative on
   $(0,\infty)$;
2. $$\bigl\|A^mT(t)\bigr\|=\bigl\|T^{(m)}(t)\bigr\|\le\frac{m!\,M_{\delta'}}{(t\sin\delta'')^{m}}.$$

No choice principle beyond Dependent Choice is used.

## Facts & Assumptions

**Given:** A bounded analytic semigroup $T$ of angle $\delta$ on a complex Banach space $X$ with generator $A$, constants $M_{\delta'}<\infty$ for $\delta'<\delta$, times $t>0$, integers $m\ge1$, and angles $0<\delta''<\delta'<\delta$.

[L1] The family $T:\Sigma_\delta\to\mathcal B(X)$ is norm-holomorphic, $T(0)=I$, $T(z_1+z_2)=T(z_1)T(z_2)$ for $z_1,z_2\in\Sigma_\delta$, $\|T(z)\|\le M_{\delta'}$ for $z\in\Sigma_{\delta'}$, and $\lim_{\Sigma_{\delta'}\ni z\to0}T(z)x=x$ for every $x\in X$ ([[def-complex-sector-and-bounded-analytic-semigroup]]).

[L2] A vector $y\in X$ lies in $D(A)$ exactly when the strong right derivative $\lim_{h\downarrow0}h^{-1}(T(h)y-y)$ exists, and then $Ay$ is that limit; hence for $h>0$ small and $y\in X$ one may test membership of $T(t)y$ in $D(A)$ by this limit ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]).

[L3] For a continuous complex-differentiable $F:U\to Y$ into a complex Banach space $Y$ whose closed disc $\overline{D(z_0,R)}$ lies in $U$, and every $0<r<R$, the $m$-th derivative satisfies $\|F^{(m)}(z_0)\|\le m!\sup_{|w-z_0|=r}\|F(w)\|/r^m$, and all derivatives exist ([[thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions]]).

[L4] Since $X$ is Banach, $\mathcal B(X)$ is Banach in the operator norm ([[thm-bounded-operator-space-is-banach]]); thus [L3] applies to the $\mathcal B(X)$-valued map $T$.



## Proof

**Proof technique:** direct.

1.1 The first-order identity. Fix $t>0$ and $y\in X$. For $h>0$ small, the semigroup law [L1] with $t,t+h\in\Sigma_\delta$ gives $h^{-1}(T(h)-I)T(t)y=h^{-1}(T(t+h)y-T(t)y)$, and the right-hand side converges as $h\downarrow0$ to the complex derivative $T'(t)y$ of the holomorphic map $z\mapsto T(z)y$ at $t$, because that derivative exists in operator norm by [L1]; hence by [L2] $T(t)y\in D(A)$ and $AT(t)y=T'(t)y$. [L1, L2, given, algebra]

2.1 The inductive identity. Assume $T(s)X\subseteq D(A^m)$ and $A^mT(s)=T^{(m)}(s)\in\mathcal B(X)$ for all $s>0$. Fix $t>0$ and $y\in X$, and put $x:=A^mT(t)y=T^{(m)}(t)y$. For $h>0$, the semigroup law [L1] gives $T(h)T(t+s)=T(t+h+s)$ for real $s$ near $0$; differentiating this identity $m$ times in operator norm, justified by [L3, L4], gives $T(h)T^{(m)}(t)y=T^{(m)}(t+h)y$. Therefore $$\frac{T(h)x-x}{h}=\frac{T^{(m)}(t+h)y-T^{(m)}(t)y}{h}\longrightarrow T^{(m+1)}(t)y\qquad(h\downarrow0).$$ By the generator definition [L2], $x\in D(A)$ and $Ax=T^{(m+1)}(t)y$. Since $T(t)y\in D(A^m)$ by the induction hypothesis and $A^mT(t)y=x\in D(A)$, the recursive definition of powers gives $T(t)y\in D(A^{m+1})$ and $A^{m+1}T(t)y=T^{(m+1)}(t)y$. As $y$ was arbitrary, $T(t)X\subseteq D(A^{m+1})$ and $A^{m+1}T(t)=T^{(m+1)}(t)\in\mathcal B(X)$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 Conclusion of the identity. [step 1.1] is the case $m=1$ and [step 2.1] carries every higher $m$, so $T(t)X\subseteq D(A^m)$ and $T^{(m)}(t)=A^mT(t)\in\mathcal B(X)$ for every $t>0$ and $m\ge1$. [step 2.1, given]

4.1 The Cauchy estimate. Fix $t>0$ and $0<\delta''<\delta'<\delta$. Choose $r:=t\sin\delta''$ and $R$ with $r<R<t\sin\delta'$. The closed disc $\overline{D(t,R)}$ lies in $\Sigma_{\delta'}$: its radius is smaller than the distance $t\sin\delta'$ from $t$ to either boundary ray, and $R<t$ keeps it away from the vertex. In particular the circle $|w-t|=r$ lies in $\Sigma_{\delta'}$, where [L1] bounds $\|T(w)\|$ by $M_{\delta'}$. Applying the Cauchy estimate [L3] to the $\mathcal B(X)$-valued holomorphic map $F=T$ at $z_0=t$ gives $\|T^{(m)}(t)\|\le m!\sup_{|w-t|=r}\|T(w)\|/r^m\le m!M_{\delta'}/(t\sin\delta'')^m$, and with [step 3.1] this is $\|A^mT(t)\|\le m!M_{\delta'}/(t\sin\delta'')^m$. [step 3.1, L1, L3, L4, given, algebra] ∎
