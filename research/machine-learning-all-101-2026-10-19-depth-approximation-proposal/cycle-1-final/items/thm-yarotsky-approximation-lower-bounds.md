---
id: thm-yarotsky-approximation-lower-bounds
kind: theorem
title: "Approximation lower bounds under distinct selection assumptions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-relu-network, lem-univariate-relu-affine-interval-count, def-sobolev-space-wkp-and-its-norm, thm-w-one-infinity-functions-have-lipschitz-representatives, def-axiom-of-choice, thm-sobolev-continuous-nonlinear-width-lower-bound, lem-relu-network-vc-dimension-bound, def-countable-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, Theorems 3, 4, and 6 and complete proofs"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "§§4.1–4.2 and 4.4, printed pp. 19–27."
    - title: "Ronald DeVore, Ralph Howard, and Charles Micchelli, Optimal nonlinear approximation, Theorems 3.1 and 4.2 and proofs"
      url: "https://gwern.net/doc/cs/algorithm/1989-devore.pdf"
      locator: "Theorem 3.1 proof (continuous nonlinear widths) and Theorem 4.2 Sobolev bump construction, pp. 472–477."
    - title: "Matus Telgarsky, Deep Learning Theory, §§5.3 and 17.3"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.3, lower-bound context; §17.3, ReLU VC argument and explicit Warren-theorem citation."
---

## Statement

Assume the Axiom of Choice. Let $F_{d,n}$ be the unit ball of $W^{n,\infty}((0,1)^d)$ for the maximum weak-derivative norm, identified with its continuous representatives on $[0,1]^d$. The following lower bounds have distinct hypotheses. (i) Let $W\ge1$, let $\eta:\mathbb R^W\to C([0,1]^d)$ be an approximation map, and suppose a parameter-selection map $M:F_{d,n}\to\mathbb R^W$, continuous for the uniform norm on $F_{d,n}$, satisfies $\|f-\eta(M(f))\|_\infty\le\varepsilon$ for every $f\in F_{d,n}$. Then $W\ge c\varepsilon^{-d/n}$. (ii) If one fixed ReLU architecture with $W$ weights approximates every $f\in F_{d,n}$ within $\varepsilon$, with no continuity assumption on weight selection, then $W\ge c\varepsilon^{-d/(2n)}$; if its depth is at most $c_1(\log(1/\varepsilon))^p$ for fixed $p\ge0$ and $c_1>0$, then $W\ge c_2\varepsilon^{-d/n}(\log(1/\varepsilon))^{-2p-1}$ for sufficiently small $\varepsilon$. (iii) If $L\ge3$ is fixed and $f\in C^2([0,1]^d)$ is nonlinear, then every depth-$L$ ReLU network approximating $f$ uniformly within $\varepsilon$ has at least $c(f,L)\varepsilon^{-1/(2(L-2))}$ weights and computation units for sufficiently small $\varepsilon$. All constants may depend only on the indicated fixed parameters.

## Statement references

[Yarotsky, Theorems 3, 4, and 6: approximation lower bounds](https://arxiv.org/pdf/1610.01145)

[DeVore, Howard, and Micchelli, Theorems 3.1 and 4.2: continuous nonlinear widths and Sobolev bump spaces](https://gwern.net/doc/cs/algorithm/1989-devore.pdf)

[Telgarsky lecture notes, §§5.3 and 17.3: lower-bound context and VC dimension](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The Axiom of Choice, integers $d,n\ge1$, the class $F_{d,n}$, the parameter-selection hypotheses for clauses (i)–(ii), and the depth and smoothness hypotheses for clause (iii).

[F1] A scalar-input ReLU network with hidden widths $n_1,\ldots,n_H$ has at most $\prod_{\ell=1}^H(n_\ell+1)$ affine intervals ([[lem-univariate-relu-affine-interval-count]]).

[F2] Under AC, a uniform-norm continuous selector into $\mathbb R^W$ and arbitrary decoder on the stated Sobolev ball have worst-case error at least $c_{d,n}(W+1)^{-n/d}$ ([[thm-sobolev-continuous-nonlinear-width-lower-bound]]).

[F3] For a fixed scalar-output ReLU architecture with $W$ weights, including biases, and depth $L$, threshold classifiers have VC dimension at most $CW^2$ and at most $CL^2W\log(2W)$ ([[lem-relu-network-vc-dimension-bound]]).

## Proof

1.1 By [F2], the hypotheses of clause (i) imply $\varepsilon\ge c_{d,n}(W+1)^{-n/d}$. Since $W\ge1$, we have $W+1\le2W$, hence $W\ge\tfrac12 c_{d,n}^{d/n}\varepsilon^{-d/n}$. The decoder needs no continuity; exactly the selector topology in the statement is used. [given, F2, algebra]

1.2 For clause (ii), write $p(t)=(4t(1-t))^{n+1}$ on $[0,1]$, extended by zero, and $\psi(x)=\prod_{r=1}^d p(x_r)$. The polynomial has endpoint zeros of order $n+1$, so its zero extension is $C^n$. Put $B=\max_{|\alpha|\le n}\|D^\alpha\psi\|_\infty\ge1$. Partition the cube into $K^d$ cubes of side $1/K$, with lower vertices $v_j$, and define $\phi_j(x)=B^{-1}K^{-n}\psi(K(x-v_j))$. All derivatives through order $n$ vanish at support boundaries, so the weak derivatives of these finite sums are their classical derivatives, as follows by integration by parts with zero boundary terms. Disjoint support interiors imply that every $f_\sigma=\sum_{j=1}^{K^d}\sigma_j\phi_j$, $\sigma_j\in\{-1,1\}$, belongs to $F_{d,n}$, since $\|D^\alpha f_\sigma\|_\infty\le K^{|\alpha|-n}\le1$ for $|\alpha|\le n$. At the center $x_j$ of cube $j$, $f_\sigma(x_j)=\sigma_jB^{-1}K^{-n}$. [given, construct, algebra]

1.3 For clause (iii), nonlinearity of $f$ implies that its Hessian is nonzero at an interior point; otherwise all first derivatives are constant on the connected cube and $f$ is affine. A symmetric nonzero Hessian has a direction with nonzero second directional derivative. By continuity choose a short interior segment and parameterize it by $t\in[0,1]$, so $g(t)=f(a+tv)$ has either $g''\ge c_0>0$ throughout or $g''\le-c_0<0$ throughout. The approximating network restricts to a scalar-input network of at most the same depth and unit count. [given, choose, construct]

2.1 For sufficiently small $\varepsilon>0$, choose $K=\lfloor(1/(4B\varepsilon))^{1/n}\rfloor\ge\tfrac12(1/(4B\varepsilon))^{1/n}$. Then the center amplitude $B^{-1}K^{-n}$ is at least $4\varepsilon$. Every approximant to $f_\sigma$ within $\varepsilon$ has positive output at centers with $\sigma_j=1$ and negative output at centers with $\sigma_j=-1$. Thus the threshold classifiers from the one fixed architecture shatter these $K^d\ge c_{d,n}\varepsilon^{-d/n}$ centers. [step 1.2, construct, algebra]

3.1 Combining step 2.1 with the first bound in [F3] gives $c_{d,n}\varepsilon^{-d/n}\le CW^2$, hence $W\ge c\varepsilon^{-d/(2n)}$. Shrinking the constant covers the remaining non-small accuracies, because any scalar-output architecture has $W\ge1$. [F3, step 2.1, algebra]

3.2 If $L\le c_1(\log(1/\varepsilon))^p$, the second bound in [F3] gives $c_{d,n}\varepsilon^{-d/n}\le Cc_1^2W(\log(1/\varepsilon))^{2p}\log(2W)$. For sufficiently small $\varepsilon$, if $W\ge\varepsilon^{-d/n}$ the desired conclusion follows directly since $\log(1/\varepsilon)\ge1$. Otherwise $\log(2W)\le\log2+(d/n)\log(1/\varepsilon)\le C_{d,n}\log(1/\varepsilon)$, and rearrangement gives $W\ge c_2\varepsilon^{-d/n}(\log(1/\varepsilon))^{-2p-1}$. No assumption on continuity of the targetwise weight choices was made in either shattering argument. [F3, step 2.1, algebra]

4.1 Write $H=L-2$ and let $U$ be its hidden unit count. Pad missing layers by empty layers if necessary. By [F1] and AM–GM, the restricted network has at most $M\le\prod_{\ell=1}^{H}(n_\ell+1)\le(1+U/H)^H$ affine intervals. One has length $h\ge1/M$. On this interval the network output $r$ is affine. If $g''\ge c_0$, midpoint convexity applied to $g(t)-c_0t^2/2$ gives $g(a)+g(b)-2g((a+b)/2)\ge c_0h^2/4$; in the other case apply this to $-g$. The affine second difference of $r$ is zero; the three uniform errors bound the absolute second difference of $g$ by $4\varepsilon$. Thus $\varepsilon\ge c_0/(16M^2)$. Rearranging gives $U\ge c(f,L)\varepsilon^{-1/(2H)}$ for small $\varepsilon$. Each hidden unit has a counted bias parameter, so the number of weights is at least $U$, proving clause (iii). AC and its countable-choice consequence are inherited through the stated Sobolev representative and width suppliers; the finite sign and segment constructions require no additional choice. [F1, step 1.3, algebra] ∎

