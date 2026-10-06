---
id: lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation
kind: lemma
title: "A first saddle lobe admits a collar-fixed center-saddle cancellation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: [lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar, prop-morse-cancellation-criterion-via-a-unique-connecting-orbit, lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood, def-countable-choice-principle-for-foliation-pair, thm-euclidean-inverse-function-theorem, thm-existence-and-uniqueness-of-a-maximal-ode-solution, lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 6
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Brittenham, Foliations and the Topology of 3-manifolds, class 11, author-hosted lecture notes"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11, PDF pp. 2-3 (simple-lobe picture and pictorial surgery); the exact C² scalar cancellation relative to the entire disk collar remains unproved here"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ cooriented codimension-one foliation of a smooth $3$-manifold and let $f:D^2\to M$ be a $C^2$ disk map with a regular outer collar. Suppose the characteristic foliation of $f$ has a compact embedded disk lobe $\Omega\Subset\operatorname{int}(D^2)$ whose regular leaves are the full nested circles about one nondegenerate center $p$. Suppose its frontier is one embedded piecewise-$C^2$ separatrix circuit $\Gamma$ with one nondegenerate saddle $q$ and otherwise regular arcs; there are no other characteristic critical points in a neighborhood of $\overline{\Omega}\cup\{q\}$. Let $u_0$ be the cooriented $C^2$ first integral on the full circle annulus, continued across the center/saddle block and its regular collar. For the standard Euclidean metric on the source disk, assume $-\nabla u_0$ has exactly one unstable half-trajectory from $q$ entering $\Omega$ with forward limit $p$, while its other unstable half-trajectory exits through a regular transverse section before any other singularity. Assume $f(\Gamma)$ lies in one ambient leaf $L$ and fix a leafwise smoothing collar from the saddle corner to a regular loop $\gamma\subset L$, together with one compact $C^2$ filling of $\gamma$ in $L$. After flattening the fixed collars, the leafwise cap has outer boundary exactly $f(\Gamma)$. Then one can choose a compact regular-neighborhood block $W\Subset\operatorname{int}(D^2)$ containing the lobe and saddle and construct a replacement map $f_{\mathrm{new}}:D^2\to M$ with the same outer boundary map, equal to the original map on an open collar of $\partial W$ and outside $W$, and with no characteristic critical points in $W$; all characteristic singularities outside $W$ are unchanged, so exactly one center and one saddle are removed. No homotopy from the original map on the interior of $W$ is asserted.

## Facts & Assumptions

**Given:** The disk map $f$ and data of the statement, with a lobe $\Omega$, saddle $q$, center $p$, first integral $u_0$, the prescribed exit section and fixed cap data.

[F1] The Morse cancellation criterion for a compact collared surface triad cancels an index-zero/index-one pair when the descending sphere of the saddle meets the belt circle of the minimum in exactly one transverse point along a unique connecting orbit ([[prop-morse-cancellation-criterion-via-a-unique-connecting-orbit]]).

[F2] The cancellation field can be modified inside any chosen open neighbourhood of the compactified connecting orbit and the two critical points. The replacement scalar agrees with the original scalar near the two slab faces, but need not agree outside that neighbourhood ([[lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood]]).

[F3] [[lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar]] constructs a jointly $C^2$ transverse product over a fixed leafwise cap; [[lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots]] gives pointwise collar equality when the cap and trace use the same short transverse-flow segments. The uniform transverse interval is chosen before checking the actual collar section range.

[F4] If the derivative of a $C^2$ map is invertible at a point, it is a local $C^1$ diffeomorphism, and a $C^2$ equation with nonzero normal derivative has a unique local $C^2$ root ([[thm-euclidean-inverse-function-theorem]]); a $C^1$ time-dependent field has local solutions unique through each point ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct reduction to an unresolved scalar cancellation lemma.

The proof of the Statement is **not supplied**. The steps below identify the missing scalar assertion and prove the cap-product conclusion conditional on that assertion. The vector-field support conclusion in [F2] does not establish it.

1.1 The required local scalar assertion is the following: for the $C^2$ simple lobe, center, saddle and exit data of the Statement, and for the actual transported section $t_C$ on a sufficiently thin regular exterior collar of the fixed enlarged cap, there is a compact disk block $W$ containing the lobe and saddle and a $C^2$ function $v:W\to\mathbb R$ such that $dv$ is nowhere zero and $v=t_C$ on an open collar of $\partial W$. The block must lie in the enlarged cap domain and its exterior collar must have section range compactly contained in the cap's already fixed transverse interval. This assertion requires equality of scalar germs on the entire boundary collar of a disk; equality near the two level faces of an auxiliary triad is insufficient. No support of $v-u_0$ inside an arbitrarily prescribed trajectory neighbourhood is required. [given, construct]

2.1 The unique descending branch into the center supplies one attaching-belt intersection after a valid compact-triad construction, so [F1] and [F2] explain the Morse cancellation mechanism. However, [F2] localizes only the field and supplies a scalar relative to two slab faces. Cutting its scalar back to $W$ does not preserve the other parts of the boundary collar. Brittenham's Class 11, PDF pp. 2–3, describes replacing the center disk by the leafwise filling and smoothing it in concentric arcs, identical away from a neighbourhood of that disk; it gives neither a $C^2$ formula nor exact scalar collar estimates. Thus neither cited route proves the assertion in step 1.1. [F1, F2, step 1.1]

2.2 Conditional on step 1.1, use the prescribed filling and smoothing collar to form the fixed enlarged cap $B:\widehat W\to L$ before choosing the final block. The exterior collar cap is the plaque projection of $f$ along one fixed positively transverse field, so it and the trace use the same short transverse-flow segments. Apply [F3] to obtain a uniform interval $J$ and a jointly $C^2$ map $P:\widehat W\times J\to M$ with $dP^{-1}(TF)=\ker(dt)$. Its actual section satisfies $t_C=0$ on $\Gamma$; compactness and continuity give an exterior collar with compact section range $S\Subset J$. For the block and scalar promised in step 1.1 choose an open interval $I=(a,b)$ with $S\Subset I\Subset J$. On its open boundary collar one then has the exact equality $P(x,v(x))=P(x,t_C(x))=f(x)$. [given, F3, step 1.1, construct]

3.1 The range adjustment requires no closeness estimate for the cancelled function. Choose $c<d$ in $I$ with $S\subset(c,d)$, and positive numbers $\epsilon_-,\epsilon_+$ smaller than $c-a$ and $b-d$, respectively. Construct a positive smooth function $h$ on $\mathbb R$ equal to $1$ on a neighbourhood of $[c,d]$ and with $\int_{-\infty}^{c}h<\epsilon_-$ and $\int_d^{\infty}h<\epsilon_+$. For example, on each tail smoothly join the value $1$ to a positive exponential tail inside an arbitrarily short interval; the integral of that transition is bounded by its length, and the amplitude and decay of the remaining tail make its integral arbitrarily small. Set $\vartheta(s)=c+\int_c^s h(r)\,dr$. Then $\vartheta'=h>0$, $\vartheta(s)=s$ on $[c,d]$, and the two integral bounds give $\vartheta(\mathbb R)\subset(a,b)=I$. Thus $w=\vartheta\circ v$ is $C^2$, $dw=h(v)dv$ is nowhere zero, and $w=t_C$ on the open boundary collar. [step 1.1, step 2.2, construct, algebra]

4.1 Define $f_{\mathrm{new}}(x)=P(x,w(x))$ on $W$ and $f_{\mathrm{new}}=f$ outside $W$. Step 3.1 and the exact equality in step 2.2 make the two formulas agree on an open boundary collar, so the map is $C^2$. For the graph $x\mapsto(x,w(x))$, the pullback of $\ker(dt)$ is $\ker(dw)$; by [F3] this is precisely its characteristic tangent distribution. Since $dw\ne0$, the replacement has no characteristic critical point in $W$. Outside $W$ the map and all its characteristic singularities are unchanged. The boundary map is unchanged because $W\Subset\operatorname{int}(D^2)$. Therefore the exact scalar assertion in step 1.1 would prove the full Statement, without an interior homotopy and without any choice beyond [F5]; that assertion remains the unresolved prerequisite. [F3, F5, step 2.2, step 3.1] ∎

## Remarks

A cutoff does not repair the unresolved assertion without quantitative input. On a regular collar, for $X=\nabla u_0/|\nabla u_0|^2$ and $v_\rho=(1-\rho)u_0+\rho\bar v$, one has $dv_\rho(X)=1-\rho+\rho\,d\bar v(X)+d\rho(X)(\bar v-u_0)$. Neither $d\bar v(X)>1/2$ nor a bound making the last term smaller than $1/4$ follows from [F2]. Smoothing $u_0$ before cancellation does not bound the change made by cancellation afterward. A future supplier must prove the exact scalar assertion in step 1.1, or supply estimates on the actual cancelled scalar sufficient to establish it; a localized nonzero vector field alone is not that supplier.
