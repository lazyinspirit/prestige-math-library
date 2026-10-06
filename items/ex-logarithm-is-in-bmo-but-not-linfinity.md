---
id: ex-logarithm-is-in-bmo-but-not-linfinity
kind: example
title: "The logarithm is in BMO but not in L-infinity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-bmo-seminorm-and-quotient-by-constants, cor-linfinity-embeds-continuously-into-bmo, def-multidimensional-rectangle-and-volume]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Example 7.3 (log$|x|\\in$BMO; reduce by $\\log|rx|=\\log|x|+\\log r$), printed p. 30"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Examples 3.5(2), printed pp. 37-38"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Problem 3.2, printed p. 11"
---

## Example

Define $b:\mathbb R^n\to\mathbb R$ by $b(x)=\log|x|$ for $x\ne0$ and $b(0)=0$
(any finite value at the origin gives the same class). Then
$b\in\mathrm{BMO}(\mathbb R^n)$ with a seminorm depending only on $n$, and $b$
is unbounded on every neighbourhood of $0$; in particular no bounded
representative exists, so the continuous injection
$L^\infty/\mathbb C\to\mathrm{BMO}/\mathbb C$ of the A page is not surjective.

## Facts & Assumptions

**Given:** The function $b(x)=\log|x|$ for $x\ne0$ and $b(0)=0$, a cube $Q$ with centre $x_Q$ and side length $r=\ell(Q)$, and the conventions of [[def-bmo-seminorm-and-quotient-by-constants]] and [[def-multidimensional-rectangle-and-volume]].

[L1] The mean is optimal up to the factor $2$: $|Q|^{-1}\int_Q|b-b_Q|\le2|Q|^{-1}\int_Q|b-c|$ for every constant $c$, and $\|b\|_{\mathrm{BMO}}=\sup_Q|Q|^{-1}\int_Q|b-b_Q|$ ([[def-bmo-seminorm-and-quotient-by-constants]]).

[L2] The logarithm satisfies $\log|rw|=\log r+\log|w|$ for $r>0$, $w\ne0$; on the shell $2^{-j-1}<|z|\le2^{-j}$ one has $|\log|z||\le(j+1)\log2$, and that shell is contained in the cube $[-2^{-j},2^{-j}]^n$ of volume $2^{(1-j)n}$ ([[def-multidimensional-rectangle-and-volume]]).

[L3] The bounded functions form $L^\infty(\mathbb R^n)$ with $\|g\|_{L^\infty}<\infty$, and the class map $L^\infty(\mathbb R^n)/\mathbb C\to\mathrm{BMO}(\mathbb R^n)/\mathbb C$ is injective ([[cor-linfinity-embeds-continuously-into-bmo]]).

## Verification

**Proof technique:** direct.

1.1 Local integrability and the scaling reduction. For every $R<\infty$ the shell bound of [L2] gives $\int_{|z|\le R}|\log|z||\,dz<\infty$, because $\{|z|\le1\}$ is covered by the shells $j\ge0$ with total $\sum_j2^{(1-j)n}(j+1)\log2<\infty$, while on $\{1<|z|\le R\}$ one has $|\log|z||\le\log R$ and the enclosing cube $[-R,R]^n$ has volume $(2R)^n$; hence $b\in L^1_{\mathrm{loc}}(\mathbb R^n)$. For a cube $Q$ write $x=x_Q+ry$ with $y\in[-\tfrac12,\tfrac12]^n$, so that $|Q|=r^n$ and, by [L2], $|Q|^{-1}\int_Q|b-c|=\int_{[-\frac12,\frac12]^n}\bigl|\log r+\log|\xi+y|-c\bigr|\,dy$ with $\xi:=x_Q/r$; choosing $c=\log r+c_\xi$ shows that it suffices to bound $A(\xi):=\int_{[-\frac12,\frac12]^n}|\log|\xi+y|-c_\xi|\,dy$ uniformly in $\xi$, and then [L1] gives $|Q|^{-1}\int_Q|b-b_Q|\le2A(\xi)$. [L1, L2, algebra]

1.2 The regular case $|\xi|>2\sqrt n$. With $c_\xi=\log|\xi|$, for $y\in[-\tfrac12,\tfrac12]^n$ and $t\in[0,1]$ one has $|\xi+ty|\ge|\xi|-\tfrac12\sqrt n>\tfrac32\sqrt n$, so $\log|z|$ is differentiable along the segment and $\bigl|\log|\xi+y|-\log|\xi|\bigr|\le\int_0^1\frac{|y|}{|\xi+ty|}\,dt\le\frac{\sqrt n/2}{3\sqrt n/2}=\tfrac13$; hence $A(\xi)\le\tfrac13$. [L2, algebra]

2.1 The singular case $|\xi|\le2\sqrt n$. With $c_\xi=0$ the shifted cube lies in $\{|z|\le2\sqrt n+\tfrac12\sqrt n\}\subseteq\{|z|\le3\sqrt n\}$, so $A(\xi)\le\int_{|z|\le3\sqrt n}|\log|z||\,dz\le C_n$ by the estimates of step 1.1 with $R=3\sqrt n$. [step 1.1, L2]

3.1 Combining steps 2.1 and 1.2, $\sup_\xi A(\xi)\le C_n<\infty$, so [L1] and step 1.1 give $\|b\|_{\mathrm{BMO}}\le2C_n$: the seminorm depends only on $n$ and $b\in\mathrm{BMO}(\mathbb R^n)$. [step 1.1, step 2.1, step 1.2, L1]

4.1 Unboundedness. As $x\to0$ one has $\log|x|\to-\infty$, so $b$ is unbounded on every ball $B(0,\varepsilon)$, hence on every neighbourhood of $0$. If $g\in L^\infty(\mathbb R^n)$ satisfied $g=b$ almost everywhere, then for every $M>\|g\|_{L^\infty}$ the set $\{x:|b(x)|>M\}$ would have positive measure (it contains $B(0,\varepsilon)\setminus\{0\}$ for $\varepsilon=e^{-M}$, which has positive measure because the ball contains a nondegenerate cube and a singleton has measure zero) while $\{|g|>M\}$ is null, contradicting almost-everywhere equality; so no bounded function represents the class of $b$. If the class of $b$ were the image of $[g]$ with $g\in L^\infty$, then $b=g+c$ almost everywhere for a constant $c$, and $g+c$ would be a bounded representative, which is impossible. Thus the class of $b$ is not in the image of $L^\infty/\mathbb C$, and the continuous injection is not surjective. [L3, algebra] ∎ 
