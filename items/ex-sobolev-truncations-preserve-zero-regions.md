---
id: ex-sobolev-truncations-preserve-zero-regions
kind: example
title: A clipped affine function keeps its zero region
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-sobolev-space-wkp-and-its-norm, lem-classical-derivatives-are-weak-derivatives, cor-positive-negative-part-and-truncation-calculus-in-w-one-p, def-ck-and-multi-index-notation-in-several-variables, def-directional-and-partial-derivatives, lem-standard-basis-of-f-n, lem-product-topology-on-rn, thm-product-universal-property, thm-metric-continuity-characterisations, def-vector-valued-functions-limits-and-continuity, def-function-limit, thm-lebesgue-measure-of-a-box-of-every-kind, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, prop-essential-supremum-is-attained-as-the-least-essential-bound, def-l-infinity-on-a-measure-space, cor-continuous-functions-are-borel-measurable, thm-borel-sets-are-lebesgue-measurable, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-composition-with-borel-functions-preserves-measurability, lem-weak-derivative-is-independent-of-lp-representatives, lem-of-abs-value, def-max-min, def-ordered-field, def-positive-and-negative-parts-of-a-function]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §§1.1–1.2 (weak derivative and W^{1,p}); Chapter 2 §2.2, the truncation paragraph and Theorem 2.3 with the following proof, printed pp. 29–31 (u^±, |u| and the level-set behaviour, by smooth approximation and dominated convergence, for 1≤p<∞)
    - title: John K. Hunter, Notes on Partial Differential Equations (2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §§3.1–3.2 and §3.5 (weak-derivative integration by parts, Examples 3.3–3.5, the W^{1,p} and H^k conventions)
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011)
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
      locator: Chapter 8 §8.2, Examples (ii) and the following sentence, printed pp. 202–203 (truncation stated as an exercise, without proof)
verification:
  precheck: pass
  audited: 2026-09-30
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §§1.1–1.2 for the weak
  derivative and the definition of $W^{1,p}$, and Chapter 2 §2.2, the
  truncation paragraph and Theorem 2.3 with its proof, printed pp. 29–31,
  where $u^+$, $u^-$ and $|u|$ are shown to lie in $W^{1,p}(\Omega)$ for
  $1\le p<\infty$ by cutting the corner maps at scale $\varepsilon$ and
  passing to the limit with dominated convergence, including the stated
  behaviour on the level sets. That proof is a one-dimensional corner
  approximation and states nothing at $p=\infty$; the argument below does
  not import it but applies the library's own truncation calculus of this
  page, which already covers $1\le p\le\infty$ under the Axiom of Choice.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3
  §§3.1–3.2 and §3.5, for the weak-derivative integration-by-parts
  convention, the examples of corner and step functions, and the $W^{1,p}$
  and $H^k$ conventions used on this page.
- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential
  Equations*, Chapter 8 §8.2, Examples (ii) and the sentence following it,
  printed pp. 202–203, where truncation of a $W^{1,p}$ function is stated as
  an exercise for $1\le p\le\infty$. Brezis gives no proof, and the
  calculation below is carried out from the library interfaces cited in the
  Facts block.

## Statement

Assume the Axiom of Choice. Let $M>0$, let $n\ge1$, and let
$$Q:=(-2M,2M)^n=\{\,x\in\mathbb R^n:-2M<x_i<2M\text{ for }i=1,\dots,n\,\}$$
be the open cube of side $4M$. Define $w:\mathbb R^n\to\mathbb R$ by
$$w(x):=\min\{M,\max\{0,x_1\}\}.$$
Then:

1. $w\in W^{1,p}(Q)$ for every $1\le p\le\infty$.
2. Pointwise, $w=0$ on $\{x_1\le0\}$, $w(x)=x_1$ on $\{0<x_1<M\}$, and
   $w=M$ on $\{x_1\ge M\}$.
3. The weak gradient of $w$ on $Q$ is represented by the vector field $g$
   with $g(x)=e_1$ for $0<x_1<M$ and $g(x)=0$ otherwise: that is,
   $D_1w$ is the class of $\mathbf 1_{\{0<x_1<M\}}$ and $D_iw=0$ for
   $i\ge2$, so the weak gradient is $e_1$ on the middle slab and $0$
   elsewhere. The interface pieces $Q\cap\{x_1=0\}$ and $Q\cap\{x_1=M\}$
   are Lebesgue-null, so a representative of the gradient class may be
   changed on them; the interface values are irrelevant.

The identities of clause 2 are pointwise statements about the displayed
function $w$, and the derivative statements of clause 3 are
almost-everywhere statements about classes; no pointwise derivative of an
arbitrary representative of $w$ is claimed.

## Facts & Assumptions

**Given:** The Axiom of Choice; the numbers $M>0$ and $n\ge1$; the open cube $Q=(-2M,2M)^n$; the function $w(x)=\min\{M,\max\{0,x_1\}\}$; and the first coordinate function $f(x)=x_1$.

[F1] The Axiom of Choice asserts a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[F2] In ZF the Axiom of Choice implies Countable Choice and the prescribed-start form of Dependent Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F3] $W^{1,p}(\Omega;\mathbb K)$ is the set of classes $u\in L^p(\Omega;\mathbb K)$ such that for every first-order multi-index there is an $L^p$ class with a locally integrable representative satisfying the signed test identity for every test function; each such derivative determines one class $D^\alpha u$, and $D^0u=u$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F4] Assume Countable Choice. If $u:\Omega\to\mathbb C$ has real and imaginary parts of class $C^k$ on the open $\Omega\subseteq\mathbb R^n$, then for every multi-index $\alpha$ with $|\alpha|\le k$ the componentwise classical derivative $\partial^\alpha u$ is locally integrable and is the weak derivative $D^\alpha u$ ([[lem-classical-derivatives-are-weak-derivatives]]).

[F5] Assume the Axiom of Choice. For a real class $u\in W^{1,p}(\Omega;\mathbb R)$ and every $1\le p\le\infty$, the positive part $u^+=\max\{u,0\}$ and the truncation $T_Mu=\min\{M,\max\{-M,u\}\}$ lie in $W^{1,p}(\Omega)$, with $D_iu^+=1_{\{u>0\}}D_iu$ and $D_iT_Mu=1_{\{|u|<M\}}D_iu$ almost everywhere on $\Omega$; moreover $D_iT_Mu$ vanishes almost everywhere on $\{u=M\}$ and on $\{u=-M\}$, so the two indicator conventions for $T_Mu$ agree ([[cor-positive-negative-part-and-truncation-calculus-in-w-one-p]]).

[F6] For $k\in\mathbb N$, a function $f$ is of class $C^k$ on the open $U$ when for every word $(i_1,\dots,i_r)$ of coordinate indices with $0\le r\le k$ the iterated derivative $\partial_{i_r}\cdots\partial_{i_1}f$ exists and is continuous on $U$; the word of length $0$ denotes $f$, and the multi-index conventions are those fixed there ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F7] If the line map $t\mapsto f(a+tv)$ is defined near $0$, its derivative at $0$ is the directional derivative $D_vf(a)=\lim_{t\to0}\frac{f(a+tv)-f(a)}{t}$; for a standard basis vector $e_j$ the number $D_{e_j}f(a)$ is the $j$th partial derivative, written $\partial_jf(a)$ ([[def-directional-and-partial-derivatives]]).

[F8] We use the owning page's coordinate labels $1,\ldots,n$: for the canonical function $x:\{0,\ldots,n-1\}\to\mathbb R$, the notation $x_i$ here means $x(i-1)$. Likewise $e_i$ here is the canonical standard vector with index $i-1$, so $e_i(i-1)=1$ and $e_i(j-1)=0$ for $1\le j\le n$, $j\ne i$. Thus $(e_i)_j=\delta_{ij}$ in the page notation, including $n=1$. Partial and weak derivative labels use the same relabeling. Finite sums in the function space are pointwise ([[lem-standard-basis-of-f-n]]).

[F9] On $\mathbb R^n$ with $n\ge1$ the product topology of the $n$ copies of
$\mathbb R$ is the metric topology of $d_2$, hence the Euclidean topology, so
"open in $\mathbb R^n$" has one meaning ([[lem-product-topology-on-rn]]); and
the projections of a product are continuous for the product topology
([[thm-product-universal-property]]).

[F10] A map of metric spaces is continuous at every point in the $\varepsilon$-$\delta$ sense if and only if preimages of open sets are open; these conditions are equivalent without choice ([[thm-metric-continuity-characterisations]]).

[F11] For a metric space $A\subseteq\mathbb R^n$ and $f:A\to\mathbb R^m$, continuity at $a\in A$ is the condition that for every $\varepsilon>0$ there is $\delta>0$ with $d(x,a)<\delta\Rightarrow\lVert f(x)-f(a)\rVert_2<\varepsilon$, and this is verbatim the metric notion of continuity ([[def-vector-valued-functions-limits-and-continuity]]).

[F12] The limit $\lim_{x\to c}g(x)=L$ of a real function means that for every $\varepsilon>0$ there is $\delta>0$ with $0<|x-c|<\delta\Rightarrow|g(x)-L|<\varepsilon$ ([[def-function-limit]]).

[F13] Assume Countable Choice. Let $a_i\le b_i$ be reals and put $R^\circ=\{x:a_i<x_i<b_i\text{ for every }i\}$. Then $R^\circ$ is open and every set $R$ with $R^\circ\subseteq R\subseteq\overline R$ is Lebesgue measurable with $\lambda_n(R)=\prod_i(b_i-a_i)$; in particular $\lambda_n$ gives measure $0$ to such a box whenever $a_i=b_i$ for some coordinate ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F14] If $\mu(X)<\infty$, $1\le p<\infty$ and $f\in L^\infty(\mu)$, then $f\in\mathcal L^p(\mu)$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

[F15] If $f$ is measurable with $\|f\|_\infty<\infty$ then $|f|\le\|f\|_\infty$ almost everywhere; and if $M\ge0$ and $|f|\le M$ almost everywhere then $\|f\|_\infty\le M$ ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F16] $L^\infty(\mu)$ is the space of essentially bounded measurable real functions, with size measured by the essential supremum ([[def-l-infinity-on-a-measure-space]]).

[F17] Assume Countable Choice. Every continuous map $\mathbb R^n\to\mathbb R^m$ is Borel measurable ([[cor-continuous-functions-are-borel-measurable]]), and every Borel subset of $\mathbb R^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[F18] Pointwise maxima, minima, absolute values, sums and products of measurable functions are measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]), and the composition of a measurable function with a Borel measurable map is measurable ([[thm-composition-with-borel-functions-preserves-measurability]]).

[F19] Assume Countable Choice. Changing locally integrable representatives on a null set preserves the weak-derivative relation, and $L^p$ objects are almost-everywhere classes, so a weak-derivative class is unchanged when its representative is modified on a null set ([[lem-weak-derivative-is-independent-of-lp-representatives]]).

[F20] For $c>0$ one has $|x|<c$ if and only if $-c<x<c$ ([[lem-of-abs-value]]).

[F21] If $S\subseteq\mathbb R$ then $m$ is a maximum of $S$ when $m\in S$ and $s\le m$ for every $s\in S$, and a minimum of $S$ when $m\in S$ and $m\le s$ for every $s\in S$; maxima and minima are unique ([[def-max-min]]).

[F22] An ordered field has trichotomy and closure of its positive cone, with $a<b$ meaning $b-a\in P$ and $a\le b$ meaning $a<b$ or $a=b$ ([[def-ordered-field]]).

[F23] The positive part of a function is $f^+=\max\{f,0\}$ ([[def-positive-and-negative-parts-of-a-function]]).

**Choice accounting.** The declared principle is the Axiom of Choice [F1]. By [F2] it supplies Countable Choice for the classical-derivative lemma [F4], the box-measure theorem [F13], the Borel and Lebesgue measurability of continuous maps [F17] and the representative-independence lemma [F19], and it is the hypothesis of the truncation calculus [F5]. No representative is selected anywhere below: the functions used are displayed explicitly, and the only selections in the proof are finite ones (the choice of test point and direction inside an arbitrary-point argument). No Dependent Choice and no countable selection is used.

## Proof

**Proof technique:** direct: identify the clipping as the truncation $T_M$ of the positive part of the first coordinate function, verify the $C^1$ calculus of that affine function, and apply the positive-part and truncation rules of the preceding corollary.

1.1 The declared assumption is the Axiom of Choice [F1]; by [F2] Countable Choice holds, so the choice hypotheses of [F4], [F13], [F17] and [F19] are in force, while [F5] is stated under the declared Axiom of Choice itself. Since $M>0$, the cube is nonempty: $-2M<0<2M$, so $0\in Q$. No representative is selected in this proof. [F1, F2, given]

1.2 Elementary clipping identities. For every real $t$ one has $\max\{0,t\}=0$ for $t\le0$ and $\max\{0,t\}=t$ for $t\ge0$ by [F21] and [F22]; consequently, for $M>0$, $\min\{M,\max\{0,t\}\}=0$ for $t\le0$, $=t$ for $0<t<M$, and $=M$ for $t\ge M$. Moreover $\max\{-M,\max\{0,t\}\}=\max\{0,t\}$ for every $t$: with $u:=\max\{0,t\}$ one has $u\ge0$ and $-M<0\le u$ by [F22], so $u$ is the larger of the two arguments [F21]. Hence the truncation of [F5] satisfies $T_M(\max\{0,t\})=\min\{M,\max\{-M,\max\{0,t\}\}\}=\min\{M,\max\{0,t\}\}$ for every $t$. [F5, F21, F22, F23]

1.3 The coordinate function $f(x):=x_1$ is of class $C^1$ on $Q$, with $\partial_1f\equiv1$ and $\partial_jf\equiv0$ for $j\ge2$. Fix $a\in Q$ and a coordinate index $j$. For real $t\ne0$, [F8] and the pointwise operations give $f(a+te_j)=(a+te_j)_1=a_1+t\,(e_j)_1$, so the difference quotient of [F7] is $$\frac{f(a+te_j)-f(a)}{t}=\frac{a_1+t\,(e_j)_1-a_1}{t}=(e_j)_1$$ for every $t\ne0$ by [F22]; this is the constant function $t\mapsto(e_j)_1$ on $\mathbb R\setminus\{0\}$. For every $\varepsilon>0$ the choice $\delta:=1$ gives $|(e_j)_1-(e_j)_1|=0<\varepsilon$ whenever $0<|t|<\delta$, so the limit of the difference quotient at $0$ is $(e_j)_1$ in the sense of [F12], and $\partial_jf(a)=(e_j)_1$ exists by [F7]; by [F8] this value is $1$ for $j=1$ and $0$ for $j\ge2$. The function $f$ is the first coordinate projection, hence continuous on $Q$ by [F9], which is the $\varepsilon$-$\delta$ notion by [F10] and [F11]; and each $\partial_jf$ is a constant function on $Q$, hence continuous by the $\varepsilon$-$\delta$ condition of [F11], any $\delta>0$ serving at every point. Therefore every word of length at most $1$ in the sense of [F6] has an existing continuous iterated derivative, that is, $f\in C^1(Q)$. [F6, F7, F8, F9, F10, F11, F12, F22, given]

2.1 Bounds and $L^p$ membership of $f$ and its first partials. The cube $Q$ is the box $R^\circ$ of [F13] with $a_i=-2M$ and $b_i=2M$, so it is open and $\lambda_n(Q)=(4M)^n<\infty$, and for $x\in Q$ the inequalities $-2M<x_1<2M$ give $|x_1|<2M$ by [F20]. Hence $|f|\le2M$ on $Q$, while $|\partial_1f|=1$ and $\partial_jf=0$ on $Q$ by step 1.3. The functions $f$, $\partial_1f$ and $\partial_jf$ are continuous on $Q$ by step 1.3, hence Borel measurable and Lebesgue measurable under Countable Choice by [F17]. Therefore $\|f\|_\infty\le2M$ and $\|\partial_jf\|_\infty\le1$ by [F15], so the classes of $f$ and of each $\partial_jf$ lie in $L^\infty(Q)$ by [F16], and in $\mathcal L^p(Q)$ for every $1\le p<\infty$ by [F14] applied to the finite measure $\lambda_n(Q)$; for $p=\infty$ the membership is the $L^\infty$ statement itself. [F13, F14, F15, F16, F17, F20, step 1.3, given]

2.2 Region values (clause 2 of the Statement). By step 1.2 applied at $t=x_1$, the function $w(x)=\min\{M,\max\{0,x_1\}\}$ vanishes for $x_1\le0$, equals $x_1$ for $0<x_1<M$, and equals $M$ for $x_1\ge M$; these are pointwise identities on all of $\mathbb R^n$. [step 1.2, given]

3.1 Classical derivatives are weak derivatives here: by [F4] applied with $k=1$ to the real-valued $C^1$ function $f$ of step 1.3, the classical derivatives $\partial^\alpha f$ for $|\alpha|\le1$ are locally integrable and are the weak derivatives $D^\alpha f$; for $\alpha=0$ this says $D^0f=f$, and for $\alpha=e_j$ it says $D_jf=\partial_jf$ weakly. By step 2.1 the classes $[f]$ and $[\partial_jf]$ lie in $L^p(Q)$ for every $1\le p\le\infty$, so the definition [F3] gives $[f]\in W^{1,p}(Q;\mathbb R)$ with $D_1[f]=[1]$ and $D_j[f]=[0]$ for $j\ge2$, the classes of the constant functions $1$ and $0$ on $Q$. [F3, F4, step 1.3, step 2.1, given]

4.1 The positive part. Let $u:=f^+$ be the positive part of the real class $[f]$ of step 3.1, as in [F23]; it is represented by the continuous function $\max\{0,x_1\}$ on $Q$. By [F5] applied to $[f]$ one has $u\in W^{1,p}(Q)$ with $D_ju=1_{\{f>0\}}D_jf$ almost everywhere on $Q$. Substituting the representatives of step 3.1 and the pointwise identity $\{f>0\}=\{x_1>0\}$, this says $D_1u=[\mathbf 1_{\{x_1>0\}}]$ and $D_ju=[0]$ for $j\ge2$ almost everywhere on $Q$. [F5, F23, step 3.1, given]

5.1 The truncation. Apply [F5] again, now to the real class $u\in W^{1,p}(Q;\mathbb R)$ of step 4.1 and the same level $M>0$: the truncation $T_Mu$ lies in $W^{1,p}(Q)$ with $D_jT_Mu=1_{\{|u|<M\}}D_ju$ almost everywhere on $Q$. By step 1.2 the representative $\max\{0,x_1\}$ of $u$ satisfies $T_M(\max\{0,x_1\})=\min\{M,\max\{0,x_1\}\}=w$ pointwise on $Q$ (indeed on $\mathbb R^n$), and $w$ is measurable: it is obtained from the measurable function $\max\{0,x_1\}$ by composition with the continuous, hence Borel, map $t\mapsto\min\{M,\max\{-M,t\}\}$ [F18]. So $w$ is a representative of the class $T_Mu$, and hence $[w]=T_Mu\in W^{1,p}(Q)$ for every $1\le p\le\infty$. This proves clause 1 of the Statement. [F5, F18, step 1.2, step 4.1, given]

6.1 Derivative computation. On $Q$ the level set of $u$ is $\{|u|<M\}=\{x_1<M\}$: since $u=\max\{0,x_1\}\ge0$, the inequality $u<M$ holds when $x_1\le0$ because then $u=0<M$, and when $x_1>0$ it reads $x_1<M$; conversely $x_1<M$ gives $u<M$. Consequently $\mathbf 1_{\{|u|<M\}}=\mathbf 1_{\{x_1<M\}}$ pointwise on $Q$, and multiplying the representatives of step 4.1 gives $\mathbf 1_{\{x_1<M\}}\mathbf 1_{\{x_1>0\}}=\mathbf 1_{\{0<x_1<M\}}$ and $\mathbf 1_{\{x_1<M\}}\cdot0=0$ pointwise on $Q$ by [F21], [F22]; the two indicators are measurable because each threshold set is Borel and its indicator is Borel measurable (every inverse image is empty, the whole line, the threshold set, or its complement); composition with the measurable coordinate function and multiplication preserve measurability by [F18], so the displayed functions are legitimate representatives of the corresponding $L^p$ classes. Therefore $D_1[w]=[\mathbf 1_{\{0<x_1<M\}}]$ and $D_j[w]=[0]$ for $j\ge2$, all equalities almost everywhere on $Q$: the weak gradient of $w$ is represented by the vector field $g$ with $g(x)=e_1$ on the middle slab $\{0<x_1<M\}$ and $g(x)=0$ for $x_1\le0$ and for $x_1\ge M$. [F5, F18, F21, F22, step 4.1, step 5.1, given]

7.1 Interface irrelevance (clause 3 of the Statement). The pieces $Q\cap\{x_1=0\}$ and $Q\cap\{x_1=M\}$ are boxes with a degenerate side: in the terminology of [F13] each is contained in the closed box $\overline R$ with the first pair of endpoints both equal to $0$, respectively both equal to $M$, and the other pairs $(-2M,2M)$. For either box $R^\circ=\varnothing$, and $R^\circ\subseteq Q\cap\{x_1=c\}\subseteq\overline R$ for the corresponding $c=0$ or $M$; hence [F13] gives measurability and measure zero. By [F19], modifying a locally integrable representative on a null set neither changes the weak-derivative relation nor the $L^p$ class of the derivative. Consequently any function that agrees with $\mathbf 1_{\{0<x_1<M\}}$ off the two interface hyperplanes represents the same class $D_1[w]$, and any function that agrees with $0$ off them represents $D_j[w]$ for $j\ge2$: the interface values are irrelevant, and the same conclusion is recorded by the level-set clause of [F5] at $\{u=M\}$. [F5, F13, F19, step 6.1, given]

8.1 Degenerate cases and accounting. The one-dimensional case $n=1$ is included: no step uses more than one coordinate direction, and $e_1$ is then the single standard basis vector. The exponent endpoints $p=1$ and $p=\infty$ are included: steps 2.1 and 3.1 give $L^p$ membership of $f$ and its first partials at both endpoints, and [F5] is stated for every $1\le p\le\infty$. The level is fixed at $M>0$, so $Q$ has side $4M>0$ and is nonempty by step 1.1; no limiting case $M\to0$ or $M=\infty$ is claimed, and clause 1 concerns the fixed cube $Q$. The only choice principle used is the Axiom of Choice, through [F2] for the classical-derivative lemma, the box-measure theorem, Borel-to-Lebesgue measurability and representative independence, and directly as the hypothesis of [F5]; no representative is selected, the argument at a general point selects only finitely many objects, and no Countable Choice beyond [F2] and no Dependent Choice is invoked. ∎ [F1, F2, F4, F5, F13, F17, F19, step 1.1, step 2.1, step 3.1, step 5.1]
