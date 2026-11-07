---
dependency_level: 0
id: lem-choice-free-derivative-sublevel-estimate-on-cubes
kind: lemma
title: "Choice-free derivative sublevel estimate on Euclidean cubes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-rolle
  - def-cardinal-polynomial-interpolation
  - lem-taylor-lagrange-remainder-from-mean-value
  - thm-heine-borel-rn
proof_strategy: induction
sources:
  references:
    - title: "Kleinbock–Margulis, Flows on homogeneous spaces and Diophantine approximation on manifolds"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "Lemmas 3.1–3.3 and their sublemmas; constants below are deliberately enlarged"
---

## Statement

Fix integers $d,j\ge1$ and $A_1\ge A_2>0$. There is an explicit constant $K_j(A_1/A_2)\ge1$ with the following property. If $f$ is real $C^j$ on an open neighbourhood of a nondegenerate cube $Q\subset\mathbb R^d$, all mixed derivatives of orders1 through $j$ have modulus at most $A_1$, and $|\partial_i^j f|\ge A_2$ for every coordinate $i$, then for every $\varepsilon>0$,
$$|\{x\in Q:|f(x)|<\varepsilon\}|\le dK_j(A_1/A_2)\left(\frac{\varepsilon}{\sup_Q|f|}\right)^{1/(dj)}|Q|.$$
The same estimate holds for any cube contained in an open set on which these derivative inequalities hold. One may take $K_1(R)=\max(2,4R)$. For $j\ge2$, set $H=1+R(2j)^j/j!$ and take
$$K_j(R)=(2j+1)\max\left\{1,\ 2j(2R/j!)^{1/j},\ 2j(2H)^{1/(j-1)}\right\}.$$

## Statement references

[Kleinbock–Margulis, Lemmas 3.1–3.3](https://arxiv.org/pdf/math/9810036v1) — derivative sublevel bounds and dimension induction.

## Facts & Assumptions

**Given:** $d,j,A_1,A_2,f,Q,\varepsilon$ as stated. Lebesgue measure is denoted by absolute bars.

[F1] Repeated Rolle's theorem implies that $j+1$ distinct zeros of a $C^j$ function force a zero of its $j$-th derivative. [[thm-rolle]]

[F2] The explicit Lagrange cardinal formula interpolates any values at distinct nodes. [[def-cardinal-polynomial-interpolation]] For $j+1$ nodes, subtracting its degree-at-most-$j$ polynomial from $f$ and applying F1 to the zeros gives $f^{(j)}(\xi)=P^{(j)}$, which is $j!$ times its leading coefficient. Taylor's degree-$(j-1)$ remainder is bounded by the supremum of the $j$-th derivative times the displacement to the power $j$, divided by $j!$. [[lem-taylor-lagrange-remainder-from-mean-value]]

[F3] A closed bounded Euclidean cube is compact. [[thm-heine-borel-rn]] The elementary finite-union volume formula for axis-parallel boxes follows by a common finite subdivision; the volume of a closed box equals the product of its side lengths, by the definition of Lebesgue outer measure and compactness. These finite statements do not use Countable Choice.

## Proof

**Proof technique:** a one-dimensional interpolation estimate followed by induction on $d$.

1.1 First let $d=1$, write $I$ for an interval of length $b$, and put $s=\sup_I|f|$. The case $\varepsilon\ge s$ is immediate. For $j=1$ the derivative has constant sign and modulus at least $A_2$, so the sublevel interval has length at most $2\varepsilon/A_2$. If it is nonempty and $\varepsilon<s/2$, the derivative upper bound gives $s\le\varepsilon+A_1b< s/2+A_1b$, hence $s<2A_1b$. The relative length is then at most $4(A_1/A_2)\varepsilon/s$. If $\varepsilon\ge s/2$, the trivial relative bound1 is at most $2\varepsilon/s$. This proves the stated $K_1$. [given, F1, algebra]

1.2 Suppose $j\ge2$. If the sublevel set is empty its measure bound is immediate. Otherwise each of the equations $f=\varepsilon$ and $f=-\varepsilon$ has at most $j$ solutions by F1. Consequently the open sublevel set has at most $2j+1$ interval components. Let $r$ be the supremum of their lengths. Take a compact subinterval of length $r'<r$ in a component, with endpoints $a,a+r'$. Interpolation at the $j+1$ equally spaced nodes bounds the modulus of the interpolating polynomial's $j$-th derivative by $\varepsilon(2j/r')^j$: indeed the sum of reciprocal factorial denominators is $\sum_{i=0}^j1/(i!(j-i)!)=2^j/j!$. F2 therefore gives $A_2\le\varepsilon(2j/r')^j$. Letting $r'\uparrow r$ gives $r\le2j(\varepsilon/A_2)^{1/j}$. [F1, F2, algebra]

1.3 We first establish the particular open-set volume approximation needed below, without invoking general Fubini or countable choice. Let $E$ be open inside the interior of a bounded cube $Q$. Subdivide $Q$ into its canonical dyadic closed cubes. At each depth take all closed cubes contained in $E$, and call their union $E_m$. These are finite nested unions. Their volumes tend to $|E|$: the union of all such cubes is $E$, because every point has a sufficiently small dyadic cube containing it and contained in $E$. Enumerate only the maximal contained dyadic cubes in the fixed depth-and-lexicographic order. They cover $E$ and have disjoint interiors. Their explicit countable list supplies a cover whose sum of volumes equals $\lim_m|E_m|$ by finite box subdivision, giving the outer-measure upper bound. The opposite bound follows from finite additivity and monotonicity. This uses no selection from a countable family. [F3, construct, algebra]

2.1 If $s\le2A_1b^j/j!$, step 1.2 directly gives $r/b\le2j(2A_1/(j!A_2))^{1/j}(\varepsilon/s)^{1/j}$. In the opposite case take the degree-$(j-1)$ Taylor polynomial $P$ at $a$. On $[a,a+r']$ it has modulus at most $\varepsilon+A_1(r')^j/j!\le H\varepsilon$, by step 1.2. Interpolating $P$ at $j$ equally spaced nodes in this subinterval bounds its supremum on the full interval by $H\varepsilon(2jb/r')^{j-1}$: every numerator difference is at most $b$ and summing the factorial denominators gives $2^{j-1}/(j-1)!$. Its Taylor error on the full interval is at most $A_1b^j/j!<s/2$, so $s/2\le H\varepsilon(2jb/r')^{j-1}$. Let $r'\uparrow r$ and use $\varepsilon/s<1$ to obtain $r/b\le2j(2H)^{1/(j-1)}(\varepsilon/s)^{1/j}$. Multiply either bound by the number of components. This proves the one-dimensional estimate with $K=K_j(A_1/A_2)$. [step 1.2, F2, algebra, base]

3.1 The same one-dimensional estimate holds for a supremum $g(t)=\sup_y|f(t,y)|$ over a compact family of slices, with the same $K$: choose a slice whose supremum approaches $\sup_t g(t)$; the set $\{g<v\}$ lies in that slice's sublevel set. Applying the estimate to this slice and taking the approximation limit gives $|\{g<v\}|/b\le K(v/\sup g)^{1/j}$. In the applications the first derivative bound gives $|g(t)-g(t')|\le A_1|t-t'|$, so this set is measurable. Compact subinterval exhaustion proves all the one-dimensional assertions for open intervals as well. [step 1.1, step 2.1, algebra]

4.1 Induct on $d$, with $d=1$ already proved. Write $Q=I\times Q'$ and its side length as $b$, set $s=\sup_Q|f|$, and let $E$ be the open sublevel set in the interior of $Q$. At depth $m$ let $E_m$ be the finite union in step 1.3 and write $\sigma_m=|E_m|/b^d$. Partition $I$ into the $2^m$ dyadic intervals. For each such interval $J$ the product cubes comprising $E_m$ have the same collection of $(d-1)$-dimensional dyadic cubes over the interior of $J$; let $a_J$ be their total volume divided by $b^{d-1}$. Fix $0<\lambda<1$ and call $J$ large when $a_J\ge\lambda$. Finite averaging gives $\sigma_m\le\lambda+L_m/b$, where $L_m$ is the total length of large $J$. At the midpoint $t_J$ of any large interval, its disjoint subcubes lie in the fibre sublevel set. The Induction hypothesis (IH) therefore yields $g(t_J)\le[((d-1)K)/\lambda]^{(d-1)j}\varepsilon$, where $g(t)=\sup_{y\in Q'}|f(t,y)|$ and $K=K_j(A_1/A_2)$. Since $g$ is $A_1$-Lipschitz, the whole interval $J$ lies in the open set $\{g<v+A_1 b2^{-m}\}$ for any $v$ strictly larger than that right side. By step 3.1 the total length of all these intervals is at most $bK((v+A_1 b2^{-m})/s)^{1/j}$, with the trivial bound used when the ratio exceeds1. Let $m\to\infty$ and then $v$ decrease to the displayed threshold. Using step 1.3 gives $\sigma-\lambda\le K\left[((d-1)K)/\lambda\right]^{d-1}(\varepsilon/s)^{1/j},\quad \sigma=|E|/b^d.$ All choices here are finite or made by the fixed dyadic ordering. [F3, step 3.1, step 1.3, ih, algebra]

5.1 If $\sigma=0$ there is nothing to prove. Otherwise take $\lambda=(d-1)\sigma/d$ to obtain $\sigma^d\le d^dK^d(\varepsilon/s)^{1/j}$, which is the claimed estimate. An arbitrary contained open cube follows by nested compact subcubes, the explicit dyadic exhaustion of step 1.3 and monotone convergence of their suprema to the full supremum. Thus no regularity at an unprovided cube boundary is assumed. [step 1.3, step 3.1, step 4.1, algebra, discharge-induction] ∎

