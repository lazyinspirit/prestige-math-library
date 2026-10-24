---
id: lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points
kind: lemma
title: "Smooth relative isotopy extension for finite disk arc systems"
status: published
origin: pipeline
landmark: true
deps: [def-countable-choice,
       def-time-dependent-vector-field-and-evolution-operator,
       def-embedded-submanifold-and-slice-chart,
       lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed,
       thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set,
       thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval,
       thm-time-dependent-vector-fields-have-local-smooth-evolution-operators,
       ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, section 1.2.7 and the discussion of Proposition 1.11, printed pp. 35-38"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the countable axiom of choice $\mathrm{AC}_\omega$. Let
$D^2=\overline B_2(0,1)\subseteq\mathbb R^2$ be the closed unit disc and let
$F:[0,1]\times[0,1]\to D^2$, $(u,s)\mapsto F(u,s)$, be a smooth map such that:

1. for every $s\in[0,1]$ the map $u\mapsto F(u,s)$ is a smooth embedding of the
   compact interval $[0,1]$; the endpoints $p_0:=F(0,0)$ and $p_1:=F(1,0)$ lie
   on $\partial D^2$ and are fixed, that is $F(0,s)=p_0$ and $F(1,s)=p_1$ for
   every $s\in[0,1]$; and the interior of the arc stays inside the disc,
   $F\bigl((0,1)\times[0,1]\bigr)\subseteq\operatorname{int}D^2$;
2. the isotopy is stationary on collars of its endpoints: there is
   $\delta\in(0,\tfrac12)$ with $F(u,s)=F(u,0)$ for all
   $u\in[0,\delta]\cup[1-\delta,1]$ and all $s\in[0,1]$;
3. there are a finite set $P\subseteq\operatorname{int}D^2$ and a closed set
   $C\subseteq D^2$ whose union is avoided by the moving part,
   $F\bigl([\delta,1-\delta]\times[0,1]\bigr)\cap(P\cup C)=\varnothing$.

Then there is a smooth map $\Phi:D^2\times[0,1]\to D^2$, with
$\Phi_s:=\Phi(-,s)$, such that $\Phi_0=\operatorname{id}_{D^2}$, every
$\Phi_s$ is a homeomorphism of $D^2$ fixing $\partial D^2$, $P$ and $C$
pointwise, and

$$\Phi_s\bigl(F(u,0)\bigr)=F(u,s)\qquad\text{for all }(u,s)\in[0,1]\times[0,1].$$

Moreover, if $F^{(1)},\dots,F^{(m)}$ are finitely many such data in succession,
where the moving part of the $k$-th datum avoids $P$ and the images of all arcs
produced by the earlier stages, then the composite of the corresponding ambient
isotopies realizes the finite sequence and still fixes $P$ pointwise.

## Facts & Assumptions

**Given:** The countable axiom of choice, the closed unit disc $D^2$ with its standard smooth structure, and a smooth arc isotopy $F$ satisfying the three displayed hypotheses.

[L1] Assume $\mathrm{AC}_\omega$: for an embedded submanifold $S$ of a smooth manifold $M$ and a smooth vector field $Y$ along $S$ there are an open neighbourhood $U$ of $S$ in $M$ and a smooth field $\widetilde Y$ on $U$ with $\widetilde Y|_S=Y$; when $S$ is closed in $M$ the extension may be taken on all of $M$ ([[lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed]]).

[L2] Assume $\mathrm{AC}_\omega$: a closed subset $A$ of a smooth manifold $M$ contained in an open set $U$ admits a smooth $f:M\to[0,1]$ that equals $1$ on a neighbourhood of $A$ and has $\operatorname{supp}(f)\subseteq U$ ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]).

[L3] If $J$ is a compact interval and $X_t$ is a smooth time-dependent vector field on $M$ whose supports over $t\in J$ lie in a common compact set, then there is a global evolution operator $\Psi_{t,s}:M\to M$ for all $s,t\in J$ ([[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]]).

[L4] Under $\mathrm{AC}_\omega$ a time-dependent vector field on $M$ over an interval $I$ is a smooth map $X:I\times M\to TM$ with $X(t,p)\in T_pM$, and an evolution operator satisfies $\frac{d}{dr}\Psi_{r,s}(p)=X_r(\Psi_{r,s}(p))$ with $\Psi_{s,s}(p)=p$ ([[def-time-dependent-vector-field-and-evolution-operator]]).

[L5] For a smooth time-dependent field on an open interval and every $(s,p)$ there is a local evolution operator near $(s,p)$ and $t\mapsto\Psi_{t,s}(q)$ is the *unique* solution of the ordinary differential equation with its prescribed initial value ([[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]).

[L6] An embedded submanifold $S\subseteq M$ is read through slice charts $\varphi$ with $\varphi(S\cap U)=\varphi(U)\cap(\mathbb R^k\times\{0\})$, and carries the subspace topology ([[def-embedded-submanifold-and-slice-chart]]).

[L7] For every $n\ge0$ the Euclidean space $\mathbb R^n$ is a smooth $n$-manifold with the identity as global chart, and open subsets carry the restricted structure ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]]).

[L8] $\mathrm{AC}_\omega$ selects one element from each member of an at most countable family of nonempty sets ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 *Extend the track and cut off its velocity.* Since $F$ is smooth on the compact square, extend it as an $\mathbb R^2$-valued smooth map $\bar F$ to an open rectangle containing $[0,1]^2$. Shrink the rectangle so that each slice $u\mapsto\bar F(u,s)$ remains an embedding on a slightly larger closed interval for $s$ in a neighborhood of $[0,1]$; this follows from $\partial_uF\ne0$ on the compact square and uniform separation of pairs of arc parameters away from the diagonal. Then $\widehat F(u,s):=(\bar F(u,s),s)$ is an injective immersion on that open rectangle. On a smaller compact rectangle it is a continuous injection into the Hausdorff space $\mathbb R^2\times\mathbb R$, hence an embedding; its restriction to the interior is an embedded surface $\Sigma$ without boundary. Define the smooth field along it by $W(\widehat F(u,s)):=(\partial_s\bar F(u,s),0)$. The compact set $K_0:=\widehat F([\delta,1-\delta]\times[0,1])$ is disjoint from the closed set $B:=(\partial D^2\cup P\cup C)\times\mathbb R$, by hypotheses 1 and 3. The extension lemma [L1] gives an open neighborhood $N$ of $\Sigma$ and a smooth field $\widetilde W$ on $N$ restricting to $W$. Choose an open $U_0$ with compact closure contained in $N\setminus B$ and containing $K_0$. By [L2] choose a smooth $\rho:\mathbb R^2\times\mathbb R\to[0,1]$ equal to $1$ near $K_0$ and supported in $U_0$. The field $V:=\rho\widetilde W$ on $N$, extended by zero outside $N$, is smooth and compactly supported. Its spatial component $X_s(x):=\operatorname{pr}_{\mathbb R^2}V(x,s)$ is a smooth time-dependent field on $\mathbb R^2$ whose support over $s\in[0,1]$ lies in a common compact subset of $\operatorname{int}D^2\setminus(P\cup C)$. [L1, L2, L4, L6, L7, L8]

2.1 *The stationary collars are fixed.* Hypothesis 2 gives $\partial_sF(u,s)=0$ for $u\in[0,\delta]\cup[1-\delta,1]$ and $s\in[0,1]$. At each such track point $\widetilde W=W=0$, so $X_s(F(u,s))=0$. The constant curve at $F(u,0)$ therefore solves the flow equation; uniqueness gives $\Psi_{s,0}(F(u,0))=F(u,0)=F(u,s)$ on both endpoint collars. [L4, L5, given, step 1.1]

2.2 *The flow fixes the required sets and preserves the disc.* The support of $X$ lies in a compact subset of $\operatorname{int}D^2\setminus(P\cup C)$, so $X$ vanishes on a neighborhood of $\partial D^2\cup P\cup C$. Uniqueness makes each of these points stationary under the flow, and no flow line crosses the boundary; thus every flow map carries $D^2$ onto itself and fixes $\partial D^2$, $P$, and $C$ pointwise. Each $\Psi_{s,0}$ is smooth with inverse $\Psi_{0,s}$, hence a diffeomorphism of $D^2$; it is the identity for $s=0$. [L2, L3, L4, L5, step 1.1]

3.1 *The flow realizes the moving part.* Let $\Psi_{s,0}$ be the global evolution operator of $X$ over $[0,1]$, which exists since its supports lie in a common compact set. Fix $u\in[\delta,1-\delta]$ and put $\gamma(s):=F(u,s)$. At $\widehat F(u,s)\in K_0$ one has $\rho=1$, so the spatial component satisfies $X_s(\gamma(s))=\partial_sF(u,s)=\gamma'(s)$ for every $s\in[0,1]$. Thus $\gamma$ solves the flow equation with $\gamma(0)=F(u,0)$, and uniqueness gives $\Psi_{s,0}(F(u,0))=F(u,s)$. For $u$ outside this interval step 2.1 gives the same equality. Hence $\Psi_{s,0}(F(u,0))=F(u,s)$ for all $u\in[0,1]$. [L3, L4, L5, step 1.1, step 2.1]

4.1 *Conclusion and finite composition.* Setting $\Phi_s:=\Psi_{s,0}|_{D^2}$ gives the smooth isotopy $\Phi:D^2\times[0,1]\to D^2$ of the statement with $\Phi_0=\operatorname{id}$, the pointwise stabilisations of step 2.2, and $\Phi_s(F(u,0))=F(u,s)$ for every admissible pair by step 3.1. Moreover step 3.1 makes the whole construction available for each member of a finite sequence of such data, and the map $(s,x)\mapsto\Psi_{s,0}(x)$ is smooth by [L3] and [L4]; a finite composite of these smooth isotopies again begins at the identity, fixes $\partial D^2$, $P$ and $C$ pointwise at every time, and realizes the finite sequence of moves, which proves the final clause as well. [L3, L4, step 2.2, step 3.1] ∎

## Remarks

- No Schoenflies-type or topological-taming assertion is made: the arc is smooth and embedded from the outset, and only the smooth vector-field extension along its space-time track is used.
- Only $\mathrm{AC}_\omega$ is spent, through the two published suppliers [L1] and [L2]; the flow theorem [L3] is applied to a compactly supported field, and the finite composition uses no choice at all.
- The stationary collars make the prescribed endpoint portions of the arc constant, so the ambient field vanishes on them and the flow fixes them pointwise.
