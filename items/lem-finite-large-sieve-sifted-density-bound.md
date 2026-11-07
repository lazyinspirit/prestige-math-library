---
dependency_level: 1
id: lem-finite-large-sieve-sifted-density-bound
kind: lemma
title: "Finite large-sieve bound for a sifted set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-abstract-large-sieve-setting
  - thm-bessel-inequality-and-finite-parseval-identity
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
aliases: []
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "Chapter 2, Proposition 2.3 and Lemma 2.7, printed pp. 12, 15–17"
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 15"
      url: "https://kskedlaya.org/ant/chap-largesieve.html"
      locator: "§15.2, Lemma 15.4 and Theorem 15.5"
verification:
  precheck: pass
---

## Statement

Let $X$ be a finite set with weights $\mu(x)\ge0$ and $\mu(X)>0$. Let
$\Lambda$ be finite. For each $\ell\in\Lambda$, let $Y_\ell$ be finite,
$\nu_\ell:Y_\ell\to(0,1]$ a probability mass function, and
$F_\ell:X\to Y_\ell$. Equip functions on $Y_\ell$ with
$$\langle f,h\rangle_\ell:=\sum_{y\in Y_\ell}\nu_\ell(y)f(y)\overline{h(y)}.$$
Let $B_\ell$ be an orthonormal basis for this space containing the constant
function $1$, and put $B_\ell^\circ:=B_\ell\setminus\{1\}$. Let
$\mathcal L$ be a nonempty finite family of subsets of $\Lambda$. For
$m\in\mathcal L$, index the product family by tuples
$(\phi_\ell)_{\ell\in m}\in\prod_{\ell\in m}B_\ell^\circ$ and associate the
function
$$\phi_{m,(\phi_\ell)}(x):=\prod_{\ell\in m}\phi_\ell(F_\ell(x)).$$
For $m=\varnothing$ the sole tuple is the empty tuple and its function is $1$.
Let $\Delta$ be the optimal large-sieve constant of this indexed family on
$(X,\mu)$.

For each $\ell\in\Lambda$, let $C_\ell\subseteq Y_\ell$ satisfy
$0<\nu_\ell(C_\ell)<1$, and define
$$S:=\{x\in X:F_\ell(x)\notin C_\ell\text{ for every }\ell\in\Lambda\}, \qquad H:=\sum_{m\in\mathcal L}\prod_{\ell\in m} \frac{\nu_\ell(C_\ell)}{1-\nu_\ell(C_\ell)}.$$
Then $\mu(S)\le\Delta/H$.

## Statement references

[[def-abstract-large-sieve-setting]]

[[thm-bessel-inequality-and-finite-parseval-identity]]

[[thm-cauchy-schwarz-in-an-inner-product-space]]

[Kowalski, Chapter 2, Proposition 2.3 and Lemma 2.7, full text](https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf)

## Facts & Assumptions

**Given:** Finite data $X,\mu,\Lambda,(Y_\ell,\nu_\ell,F_\ell,B_\ell)$,
support $\mathcal L$, and forbidden subsets $C_\ell$ as in the Statement.

[F1] The optimal large-sieve constant is the least constant in the indexed
second-moment inequality on $(X,\mu)$ ([[def-abstract-large-sieve-setting]]).

[F2] A finite orthonormal basis gives Parseval's identity:
the sum of squared inner products with the basis equals the squared norm
([[thm-bessel-inequality-and-finite-parseval-identity]]).

[F3] For vectors $u,v$ in a real or complex inner-product space,
$|\langle u,v\rangle|\le\|u\|\|v\|$
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

1.1 Fix $\ell\in\Lambda$ and any complex weights $\alpha(x)$ supported on $S$. For $y\in Y_\ell$, put $U_y:=\sum_{x:F_\ell(x)=y}\mu(x)\alpha(x)$ and $M_\alpha:=\sum_x\mu(x)\alpha(x)$. Since $\alpha$ is supported on $S$, $U_y=0$ for $y\in C_\ell$ and $M_\alpha=\sum_{y\notin C_\ell}U_y$. [given, construct]

2.1 Write $M_\alpha=\sum_{y\notin C_\ell}\sqrt{\nu_\ell(y)}\, U_y/\sqrt{\nu_\ell(y)}$. Cauchy–Schwarz [F3] gives $|M_\alpha|^2\le(1-\nu_\ell(C_\ell)) \sum_{y\in Y_\ell}\frac{|U_y|^2}{\nu_\ell(y)}.$ Parseval [F2] identifies the last sum with $\sum_{\phi\in B_\ell}|\sum_x\mu(x)\alpha(x) \overline{\phi(F_\ell(x))}|^2$. [F2, F3, step 1.1]

3.1 The constant basis vector contributes $|M_\alpha|^2$ to step 2.1. Subtracting $(1-\nu_\ell(C_\ell))|M_\alpha|^2$ and dividing by the positive number $1-\nu_\ell(C_\ell)$ yields $\sum_{\phi\in B_\ell^\circ} \left|\sum_x\mu(x)\alpha(x)\overline{\phi(F_\ell(x))}\right|^2 \ge \frac{\nu_\ell(C_\ell)}{1-\nu_\ell(C_\ell)}|M_\alpha|^2.$ [step 2.1, algebra]

4.1 For every finite $m\subseteq\Lambda$, induction on $|m|$ gives $\sum_{(\phi_\ell)\in\prod_{\ell\in m}B_\ell^\circ} \left|\sum_x\mu(x)\alpha(x) \overline{\prod_{\ell\in m}\phi_\ell(F_\ell(x))}\right|^2 \ge |M_\alpha|^2\prod_{\ell\in m} \frac{\nu_\ell(C_\ell)}{1-\nu_\ell(C_\ell)}.$ The empty case is equality. For a nonempty $m$, fix $\ell\in m$, group the left sum by the tuple on $m\setminus\{\ell\}$, and apply step 3.1 to the supported weights $\alpha(x)\overline{\prod_{r\in m\setminus\{\ell\}}\phi_r(F_r(x))}$. The induction hypothesis supplies the product over $m\setminus\{\ell\}$, giving the displayed inequality. [step 3.1, induction, algebra]

5.1 Take $\alpha=1_S$ in step 4.1 and sum over $m\in\mathcal L$. The lower bound is $H\mu(S)^2$, while [F1] bounds the same sum above by $\Delta\sum_x\mu(x)|1_S(x)|^2=\Delta\mu(S)$. If $\mu(S)=0$ the conclusion is immediate; otherwise divide by $H\mu(S)>0$ to obtain $\mu(S)\le\Delta/H$. [F1, step 4.1, given, algebra] ∎
