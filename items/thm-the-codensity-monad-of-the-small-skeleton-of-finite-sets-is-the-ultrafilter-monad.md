---
id: thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad
kind: theorem
title: "The codensity monad of the small skeleton of finite sets is the ultrafilter monad"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-codensity-monad, thm-the-codensity-construction-satisfies-the-monad-laws, thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, thm-existence-of-pointwise-kan-extensions, thm-set-has-all-small-limits, prop-sets-and-functions-form-category-set, def-ultrafilter, def-filter, lem-ultrafilter-prime, thm-ultrafilter-characterisation, def-the-ultrafilter-endofunctor-unit-and-multiplication, thm-the-ultrafilter-monad-is-a-monad]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 6.5.14"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Codensity and the ultrafilter monad, §§2-3"
      url: "https://arxiv.org/pdf/1209.3606"
pipeline_run: null
---

## Statement

Let $\mathbf{FinOrd}$ be the full subcategory of $\mathbf{Set}$ on the
standard finite ordinals $[n]=\{0,\dots,n-1\}$, and let
$J:\mathbf{FinOrd}\hookrightarrow\mathbf{Set}$ be the inclusion functor.

Then the codensity monad of $J$ exists and is naturally isomorphic to the
ultrafilter monad $\beta$ of
[[def-the-ultrafilter-endofunctor-unit-and-multiplication]]. Concretely, for a
set $X$ the codensity value consists of coherent finite-valued choice operators

$$\alpha_f\in[n]\qquad(f:X\to[n])$$

satisfying $\alpha_{h\circ f}=h(\alpha_f)$ for every map $h:[n]\to[m]$, and
these operators are in natural bijection with the ultrafilters on $X$.

Under this bijection, the codensity unit and multiplication agree with the
principal unit and flattening multiplication of the ultrafilter monad.

## Facts & Assumptions

**Given:** The inclusion $J:\mathbf{FinOrd}\hookrightarrow\mathbf{Set}$, with $\mathbf{FinOrd}$ the full subcategory on the standard finite ordinals.

[L1] Because $\mathbf{FinOrd}$ is small and $\mathbf{Set}$ is locally small and has all small limits, the pointwise right Kan extension of $J$ along itself exists; at a set $X$, the comma-category formula identifies its value with the limit of the diagram $(X\downarrow J)\to\mathbf{FinOrd}\to\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]], [[thm-existence-of-pointwise-kan-extensions]], [[thm-set-has-all-small-limits]], [[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]).

[L2] A proper filter is an ultrafilter if and only if for each $A\subseteq X$ exactly one of $A$ and $X\setminus A$ lies in it; moreover, if a finite union lies in an ultrafilter then one member of that union lies in the ultrafilter ([[def-ultrafilter]], [[def-filter]], [[thm-ultrafilter-characterisation]], [[lem-ultrafilter-prime]]).

[L3] The codensity construction gives a monad ([[def-codensity-monad]], [[thm-the-codensity-construction-satisfies-the-monad-laws]]).

[L4] The ultrafilter endofunctor with principal unit and flattening multiplication is a monad ([[def-the-ultrafilter-endofunctor-unit-and-multiplication]], [[thm-the-ultrafilter-monad-is-a-monad]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], an element of $\operatorname{Ran}_J J(X)$ is exactly a cone over the diagram $(X\downarrow J)\to\mathbf{FinOrd}\to\mathbf{Set}$. Since an object of $(X\downarrow J)$ is a map $f:X\to[n]$, such a cone is exactly a family of chosen elements $\alpha_f\in[n]$, one for each $f:X\to[n]$, satisfying the compatibility condition $\alpha_{h\circ f}=h(\alpha_f)$ for every map $h:[n]\to[m]$. [L1]

2.1 Given such a coherent family $\alpha$, define $\mathcal U_\alpha:=\{A\subseteq X:\alpha_{\chi_A}=1\}$, where $\chi_A:X\to[2]$ is the characteristic function of $A$. Let $!:X\to[1]$ be the unique map, and let $c_0,c_1:[1]\to[2]$ be the constant maps with values $0$ and $1$. Since $\chi_\emptyset=c_0\circ !$ and $\chi_X=c_1\circ !$, coherence gives $\alpha_{\chi_\emptyset}=0$ and $\alpha_{\chi_X}=1$, so $\emptyset\notin\mathcal U_\alpha$ and $X\in\mathcal U_\alpha$. If $\tau:[2]\to[2]$ swaps $0$ and $1$, then $\chi_{X\setminus A}=\tau\circ\chi_A$, so exactly one of $A$ and $X\setminus A$ lies in $\mathcal U_\alpha$ for every $A\subseteq X$. If $A,B\in\mathcal U_\alpha$, define $g:X\to[4]$ by $g(x)=2\chi_A(x)+\chi_B(x)$, let $p,q:[4]\to[2]$ recover the first and second bits, and let $m:[4]\to[2]$ send only $3$ to $1$. Then $p\circ g=\chi_A$, $q\circ g=\chi_B$, and $m\circ g=\chi_{A\cap B}$, so coherence gives $p(\alpha_g)=q(\alpha_g)=1$ and hence $\alpha_{\chi_{A\cap B}}=m(\alpha_g)=1$. Thus $A\cap B\in\mathcal U_\alpha$. Finally, if $A\in\mathcal U_\alpha$, $A\subseteq B$, and $B\notin\mathcal U_\alpha$, then $X\setminus B\in\mathcal U_\alpha$, so $A\cap(X\setminus B)=\emptyset$ lies in $\mathcal U_\alpha$, contradicting $\emptyset\notin\mathcal U_\alpha$. Therefore $\mathcal U_\alpha$ is a filter deciding every subset, hence an ultrafilter by [L2]. [L2, step 1.1]

2.2 Conversely, let $\mathcal U$ be an ultrafilter on $X$. For each map $f:X\to[n]$, the fibres $f^{-1}(i)$ form a finite partition of $X$, so [L2] gives a unique index $\alpha^\mathcal U_f\in[n]$ with $f^{-1}(\alpha^\mathcal U_f)\in\mathcal U$. If $h:[n]\to[m]$, then $f^{-1}(\alpha^\mathcal U_f)\subseteq(h\circ f)^{-1}(h(\alpha^\mathcal U_f))$, so upward closure of the ultrafilter puts $(h\circ f)^{-1}(h(\alpha^\mathcal U_f))$ into $\mathcal U$; uniqueness of the selected partition cell therefore gives $\alpha^\mathcal U_{h\circ f}=h(\alpha^\mathcal U_f)$. Thus $\alpha^\mathcal U$ is a coherent family of the kind described in step 1.1. [L2]

3.1 The two constructions are inverse. Starting from $\alpha$, let $\chi_i:[n]\to[2]$ be the characteristic function of $\{i\}$. Then for any $f:X\to[n]$ and any $i\in[n]$, one has $f^{-1}(i)\in\mathcal U_\alpha$ exactly when $\alpha_{\chi_i\circ f}=1$, which by coherence is exactly when $\chi_i(\alpha_f)=1$, that is, when $i=\alpha_f$; so the ultrafilter $\mathcal U_\alpha$ selects precisely the fibre of $\alpha_f$, and step 2.2 recovers $\alpha_f$. Starting from an ultrafilter $\mathcal U$, the definition of $\mathcal U_{\alpha^\mathcal U}$ says $A\in\mathcal U_{\alpha^\mathcal U}$ exactly when the fibre $A$ is the cell selected by $\mathcal U$ in the partition $\{A,X\setminus A\}$, which is exactly the condition $A\in\mathcal U$. Hence $\operatorname{Ran}_J J(X)\cong\beta X$ naturally in $X$. [step 2.1, step 2.2]

4.1 For $x\in X$, the family $\alpha^x_f:=f(x)$ is coherent, and the assignment $x\mapsto\alpha^x$ is natural in $X$. On a finite ordinal $[n]$ and an element $i\in[n]$, the counit of the right Kan extension evaluates $\alpha^i$ at the identity map of $[n]$, so it returns $i$; the defining equation $1_J=\varepsilon\circ(\eta J)$ in [L3] therefore forces the codensity unit to be $x\mapsto\alpha^x$. Under step 3.1 this corresponds to the principal ultrafilter at $x$, since $A\in\mathcal U_{\alpha^x}$ exactly when $\chi_A(x)=1$. [L3, step 3.1]

5.1 Now let $\mathbb W$ be an ultrafilter on $\beta X$, and let $\Omega$ be its coherent family from step 2.2. For each $f:X\to[n]$, define $\widehat f:\beta X\to[n]$ by sending $\mathcal U$ to the unique index $i$ with $f^{-1}(i)\in\mathcal U$; step 2.2 guarantees that this is well-defined. For the flattened ultrafilter of [L4], one has $f^{-1}(i)\in\mu_X(\mathbb W)$ if and only if $\widehat f^{-1}(i)\in\mathbb W$, so the coherent family attached to $\mu_X(\mathbb W)$ by step 2.2 takes the value $\Omega_{\widehat f}$ at $f$. But $\Omega_{\widehat f}$ is exactly the finite-set value produced by $T\varepsilon$ in the defining equation $\varepsilon\circ(\mu J)=\varepsilon\circ(T\varepsilon)$ of [L3]. Hence the codensity multiplication is identified with ultrafilter flattening. Therefore step 3.1 matches both the codensity unit and multiplication with the principal unit and flattening multiplication of [L4], so the codensity monad of $J$ is the ultrafilter monad. [L3, L4, step 2.2, step 3.1] ∎
