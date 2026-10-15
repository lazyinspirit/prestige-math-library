---
id: def-tdmath-forward-sector-hypotheses
kind: definition
title: Forward-sector hypotheses for a simple state domain
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: [def-function-space, def-tdmath-tagged-scalable-compound, lem-tdmath-compound-mass-well-defined]
dependency_roles:
  def-function-space: mathematical-premise
  def-tdmath-tagged-scalable-compound: mathematical-premise
  lem-tdmath-compound-mass-well-defined: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§III.A–III.B"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Definition

Let $P$ be a set of primitive type labels. A formal type $\Gamma$ records a finitely supported amount function $\nu_\Gamma:P\to\mathbb R_{\ge0}$, not identically zero. Primitive generators have their unit amount function. Positive scaling, separated product, and thermal-join constructors retain distinct formal tags and obey

$$\nu_{s\Gamma}=s\nu_\Gamma,\qquad \nu_{\Gamma\otimes\Gamma'}=\nu_\Gamma+\nu_{\Gamma'}\qquad(s>0).$$

Separated and joined types are distinct constructors even when their amount functions agree. Permutation, reassociation, and scaled-splitting conventions preserve the amount function. Define the positive **bookkeeping weight** $w_\Gamma:=\sum_{p\in P}\nu_\Gamma(p)$, a finite sum over support. Thus $w_{s\Gamma}=s w_\Gamma$ and every product or join has weight $w_\Gamma+w_{\Gamma'}$. The optional empty unit has zero amount function and weight zero; it is represented only by the empty compound, not as a simple chart. These are formal amounts, not masses in kilograms or an empirical conservation law. The functions and pointwise operations use [[def-function-space]]; their finite-support convention and finite sums are those of [[def-tdmath-tagged-scalable-compound]] and [[lem-tdmath-compound-mass-well-defined]].

For Euclidean vectors use $a\cdot b=\sum_j a_jb_j$ and $\|a\|=(a\cdot a)^{1/2}$. Write $B(a,r)=\{b:\|b-a\|<r\}$. Open means each point has such a ball contained in the set; convex means $(1-t)a+tb$ belongs to the set for all its $a,b$ and $0\le t\le1$. In a subspace or subset, use intersections of these balls for the relative topology. A map $P:D\to\mathbb R^n$ is locally Lipschitz if each $a\in D$ has a relative neighborhood $V$ and finite $L\ge0$ with $\|P(b)-P(c)\|\le L\|b-c\|$ for all $b,c\in V$. A set $D$ is arcwise connected here if each two distinct points are joined by a continuous injective map $\gamma:[0,1]\to D$ with those endpoints; singleton and empty sets satisfy this condition vacuously. Continuity uses the indicated Euclidean relative topology. Let $I$ index the declared family of simple types $\Gamma_i$. For each simple type $\Gamma$ in that family, let $n_\Gamma\ge1$ and let $\Gamma\subset\mathbb R^{n_\Gamma+1}$ be nonempty, open and convex, with coordinates $x=(u,v)$. The notation for a type and its chart is shared, but each state has a distinct raw tag $(\Gamma,x)$. Scaled charts are distinct tagged copies $s\Gamma=\{sx:x\in\Gamma\}$ with coordinate transport $x\mapsto sx$; transported raw tags remain distinct from the original raw tags. Let $e_{(\Gamma,x)}$ be the unit point mass from [[def-tdmath-tagged-scalable-compound]]. The represented state is

$$\mathsf{J}_\Gamma(x):=w_\Gamma e_{(\Gamma,x)},\qquad m(\mathsf{J}_\Gamma(x))=w_\Gamma.$$

Write $\mathsf{J}(x):=\mathsf{J}_\Gamma(x)$ when $x$ already carries its type tag. All state notation in this framework's compound comparisons, including a bare $x$, denotes $\mathsf{J}_\Gamma(x)$; a raw unit point mass is always written $e_{(\Gamma,x)}$. A separated pair is addition of represented states, not a unit product tag. Nonnegative multiples are pointwise and zero terms are omitted. For an encoded compound $c$, its aggregate composition is the finite amount function

$$\nu(c):=\sum_{(\Gamma,x)\in\operatorname{supp}(c)}\frac{c(\Gamma,x)}{w_\Gamma}\nu_\Gamma;\qquad m(c)=\sum_{p\in P}\nu(c)(p).$$

Fix the formal interpretation $\Pi(c)$ as the finite separated preparation whose factor at each nonzero raw tag $(\Gamma,x)$ is the amount $c(\Gamma,x)/w_\Gamma$ of that typed state, using the declared coordinate scaling transport. Let $\mathcal P$ be the set of these formal preparations. Their bookkeeping mass is $\mu(\Pi(c)):=m(c)$; the declared permutation, reassociation, merging and splitting conventions preserve this value. Specify as additional data a relation $Q\subseteq\{(p,q)\in\mathcal P\times\mathcal P:\mu(p)=\mu(q)\}$. Define the coefficient-map accessibility relation by $A\prec B$ exactly when $m(A)=m(B)$ and $(\Pi(A),\Pi(B))\in Q$. The relation $Q$ is a chosen part of the hypotheses, rather than a relation supplied by the coefficient-map construction. Merging or splitting repeated copies of the same preparation is reversible; permutation and reassociation preserve the preparation. Thus $\Pi(\mathsf{J}_{s\Gamma}(sx))$ and $\Pi(s\mathsf{J}_\Gamma(x))$ are the same declared scaled preparation and yield

$$\mathsf{J}_{s\Gamma}(sx)\sim s\mathsf{J}_\Gamma(x),$$

although their raw point masses have different tags and are not equal. This reversible transport commutes with finite composition, nested type constructors, and scaled splitting. It is part of the precise formal scaling interpretation, not a deduction about physical accessibility from coordinate multiplication. A physical use must adopt the stated preparation maps and accessibility assumptions; fixed-composition models compare only preparations with the same $\nu$, while a declared channel model may additionally compare different compositions of equal $m$.

A comparison $A\prec B$ is admitted only on the equal-mass domain specified here; [[def-tdmath-tagged-scalable-compound]] supplies the coefficient maps and their mass, without supplying any comparison relation. Write $A\sim B$ when both directions hold, and $A\prec\prec B$ when only the forward direction holds. On any fixed simple type, dividing every represented state by the same positive constant $w_\Gamma$ gives its unit-point-mass comparison. Positive scaling and its inverse preserve and reflect order; whenever the required CH and reference hypotheses hold, the unit-state entropy theorem applies after that normalization. If $S$ represents unit-point-mass comparisons, the entropy of a represented state is $w_\Gamma S(x)$ and the entropy of a finite sum $\sum_j t_j\mathsf{J}_\Gamma(x_j)$ is $\sum_j t_j w_\Gamma S(x_j)$. No independent rescaling across different types is assumed without a calibrator.

The common relation satisfies A1–A6 on all equal-mass finite compounds: (A1) reflexivity; (A2) transitivity; (A3) if $A\prec B$, then $A+C\prec B+C$ for every compound $C$; (A4) if $A\prec B$, then $tA\prec tB$ for every $t>0$; (A5) $t\mathsf{J}_\Gamma(x)$ is equivalent to $s\mathsf{J}_\Gamma(x)+(t-s)\mathsf{J}_\Gamma(x)$ for $t>0$ and $0<s<t$, with the reversible scaled-copy transport above; (A6) for equal-mass $A,B$, fixed positive equal-mass spectators $Z_0,Z_1$, and every sequence $\epsilon_n>0$ decreasing to zero, $A+\epsilon_n Z_0\prec B+\epsilon_n Z_1$ for all $n$ implies $A\prec B$. These are hypotheses, not conclusions. No comparison hypothesis is included here.

For each $i$ and $x\in\Gamma_i$, define the forward sector $A_x:=\{y\in\Gamma_i:\mathsf{J}_{\Gamma_i}(x)\prec\mathsf{J}_{\Gamma_i}(y)\}$. The simple-domain assumptions are: (A7) for $x,y\in\Gamma_i$ and $0<t<1$, the encoded compound $t\mathsf{J}_{\Gamma_i}(x)+(1-t)\mathsf{J}_{\Gamma_i}(y)$ compares to $\mathsf{J}_{\Gamma_i}(tx+(1-t)y)$; both have bookkeeping mass $w_{\Gamma_i}$, and convexity puts the recombined coordinate in the chart; (S1) each $x$ has a strict successor; (S2) $A_x$ has exactly one supporting hyperplane at $x$, expressible as $u-u_x+P_i(x)\cdot(v-v_x)=0$ with a finite-valued slope map $P_i:\Gamma_i\to\mathbb R^{n_i}$, and $P_i$ is locally Lipschitz; (S3) the boundary of $A_x$ relative to $\Gamma_i$ is arcwise connected. A supporting hyperplane means that $A_x$ lies in one of its closed half-spaces and meets the plane at $x$. The affine hull is the smallest affine subspace containing a set; relative interior is interior in that affine hull. Closure and boundary are taken in the indicated affine hull or in $\Gamma_i$, as named; boundary is closure intersected with closure of the complement in that relative topology.

This definition imposes no physical interpretation, units, or empirical claim. A contact theorem that uses joins must separately assume that each join is a simple domain satisfying these same forward-sector hypotheses.
