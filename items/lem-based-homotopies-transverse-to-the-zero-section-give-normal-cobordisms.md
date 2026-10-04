---
id: lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms
kind: lemma
title: "Transverse based homotopies give normal cobordisms"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["prop-transverse-preimage-carries-a-pulled-back-normal-structure", "thm-relative-whitney-approximation-for-manifold-valued-maps", "thm-relative-whitney-approximation-for-euclidean-valued-maps", "lem-manifold-bump-for-a-compact-set-inside-an-open-set", "lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family", "thm-parametric-transversality", "prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold", "lem-continuity-is-local-and-pastes", "thm-weak-whitney-proper-embedding-theorem", "cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction", "def-axiom-of-choice"]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford Math 215B notes, Lectures 14–15, Theorems 138–139"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "printed pp.44–46; collapse pullback, compact-support duality and Thom normalization"
    - title: "Marco Gualtieri, Topology I, Part10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
      locator: "printed pp.36–37, Theorem3.26, Corollary3.27 and Theorem3.29; parameter-map submersivity and relative cutoff perturbation"
    - title: "Lee, Introduction to Smooth Manifolds, tubular neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
      locator: "Tubular Neighborhoods; normal quotient identification"
---

## Statement

Assume AC ([[def-axiom-of-choice]]) and let $E\to B$ be a smooth real vector bundle of rank $r\ge0$. Let $X$ be a compact smooth manifold without boundary and $H:X\times I\to\operatorname{Th}(E)$ a based homotopy constant in the time variable on neighbourhoods of $t=0$ and $t=1$.

(a) If $H$ is smooth on an open neighbourhood of its zero-section preimage $W=H^{-1}(0_B)$ and transverse to the zero section there, then $W$ is a compact neat embedded submanifold of $X\times I$ with $\partial W=W_0\sqcup W_1$, where $W_i=H_i^{-1}(0_B)$, and the normal bundle of $W$ in $X\times I$ is identified with the pullback of $E$ along the base-coordinate map of $H$; thus $W$ is a compact normal cobordism between $W_0$ and $W_1$.

(b) If $H$ is merely continuous with $H_0,H_1$ smooth and transverse to the zero section near their zero preimages, then for every closed $F\subseteq X\times I$ with $F\cap W=\varnothing$ there is a based homotopy from $H_0$ to $H_1$, fixed on $X\times\{0\}$ and $X\times\{1\}$ and pointwise on $F$, which is smooth and transverse to the zero section near its own zero preimage; only a neighbourhood of the zero section is smoothed or perturbed, and the Thom basepoint need not be smooth.

## Facts & Assumptions

**Given:** The compact source, the smooth rank-$r$ bundle with $r\ge0$, and the homotopy as in (a) or (b).

[F1] [[prop-transverse-preimage-carries-a-pulled-back-normal-structure]] gives the preimage, its normal structure and its boundary behaviour for a map smooth and transverse near the zero preimage of a boundaryless target stratum, including the neat-boundary case.

[F2] [[thm-relative-whitney-approximation-for-manifold-valued-maps]] supplies, under countable choice, a smoothing of a continuous map that is smooth near a closed set, and a homotopy to it fixed on a neighbourhood of that set.

[F3] [[thm-relative-whitney-approximation-for-euclidean-valued-maps]] supplies Euclidean approximations of a continuous map with arbitrarily small prescribed pointwise error.

[F4] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] supplies a smooth bump equal to $1$ on a compact set and supported in a prescribed open neighbourhood.

[F5] A smooth map $f:M\to N$ between boundaryless manifolds admits a smooth finite-dimensional family $\mathcal F:M\times B\to N$, $B$ an open ball containing0, with $\mathcal F_0=f$ and each parameter map $a\mapsto\mathcal F(p,a)$ a submersion ([[lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family]]).

[F6] Under countable choice, the parameters of a family whose evaluation map is transverse to an embedded submanifold for which the slice fails to be transverse form a null subset of the ball ([[thm-parametric-transversality]]), and a null subset of a positive-dimensional ball has dense complement ([[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

[F7] Continuity is local on any open cover; maps on a finite closed cover agreeing on overlaps also paste to a continuous map ([[lem-continuity-is-local-and-pastes]]).

[F8] Under countable choice, [[thm-weak-whitney-proper-embedding-theorem]] gives a proper smooth Euclidean embedding of any smooth manifold, and [[cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction]] gives a smooth retraction of an open neighbourhood of its closed image.

[A1] AC is [[def-axiom-of-choice]]; it is used through [F1] for the smooth normal-bundle structure, and through [F2], [F3], [F5], [F6] and [F8], all of which require only countable choice.



## Proof

**Proof technique:** direct.

1.1 In case (a), [F1](iv) makes $W$ closed and compact for every rank. The collars are constant in time. At their zero points the fibre differential has zero time component, so surjectivity of the full fibre differential is exactly surjectivity on the $X$ directions; hence the boundary restrictions are transverse as well. Apply [F1](iii) to the smooth neighbourhood of $W$ in $X\times I$: $W$ is neat, $\partial W=W_0\sqcup W_1$, and its specified normal isomorphism is the pullback of $E$ and restricts to the endpoint normal isomorphisms. This is the asserted compact normal cobordism. [F1, given]

1.2 For case (b), if $W=\varnothing$, retain $H$; smoothness and transversality near the empty zero preimage are vacuous and $F$ is untouched. If $r=0$, the zero stratum $B$ is clopen in $B_+$ by [F1](iv). For each $x$, the inverse image of $B$ under the continuous time path is clopen in the connected interval, so it is either all of $I$ or empty. Thus $W=W_0\times I$, with $W_0$ clopen in compact $X$, and $F$ lies in its complement. Extend $H|_{W_0\times I}$ constantly past both endpoints to $W_0\times(-1,2)\to B$. This map is smooth on endpoint time collars because $H_0,H_1$ are smooth near their whole zero preimages $W_0$. Apply [F2] relative to the closed union of smaller extended endpoint collars to obtain a smooth map into $B$ and a homotopy fixed there. Restrict to $W_0\times I$ and paste with the unchanged basepoint map on the clopen complement, using [F7]. This gives (b), fixes $F$ pointwise and all original basepoint values, and stays constant on smaller endpoint collars. Transversality to the rank-zero zero section, the entire smooth stratum, is automatic. This includes $W_0=X$ and $W_0=\varnothing$; empty $B$ was already covered by $W=\varnothing$. [F1, F2, F7, A1, given, construct]

1.3 Now assume $r>0$ and $W\ne\varnothing$. Choose $0<\delta<1/4$ so $H$ is constant in time on $[0,\delta]$ and $[1-\delta,1]$. Choose open neighbourhoods $O_i$ of $W_i$ in $X$ where $H_i$ is smooth with values in $E$. On the boundaryless source $X\times(0,1)$ choose an open set $U$ containing its part of $W$, disjoint from $F$, with $H(U)\subseteq E$, and such that $U\cap\{t\le\delta/2\}\subseteq O_0\times(0,\delta)$ and $U\cap\{t\ge1-\delta/2\}\subseteq O_1\times(1-\delta,1)$. Such $U$ is obtained by intersecting $H^{-1}(E)\setminus F$ with the open collar/central unions; it contains the interior zeros since collar zeros lie in $O_i$. Set $J=[\delta/4,1-\delta/4]$. The set $K=W\cap(X\times J)$ is compact, unlike the entire interior part of $W$. Choose a compact neighbourhood $C$ of $K$ and open $V$ with $K\subseteq\operatorname{int}C\subseteq C\subseteq V$ and $\overline V\subseteq U$ compact. The bump in [F4] gives a smooth $\lambda$ equal to one on a neighbourhood of $C$, supported in $V$. Its zero extension is smooth and vanishes near the endpoints and on $F$. [F1, F4, given, construct]

2.1 Apply [F8] to the smooth total space $E$ to obtain a proper embedding $j:E\hookrightarrow\mathbb R^d$. Its image $j(E)$ is closed, so [F8] supplies a smooth retraction $\rho:T\to j(E)$ on an open neighbourhood $T$; set $R=j^{-1}\rho:T\to E$, with $Rj=\operatorname{id}$. The relative approximation [F3] is applied on $U$ to $jH$ with closed protected set $A=U\cap(\{t\le\delta/3\}\cup\{t\ge1-\delta/3\})$. It is smooth near $A$ by step 1.3. Define the compact relevant buffer $Q=(\overline V\setminus\operatorname{int}C)\cap(X\times J)$. It misses $W$ because $K\subseteq\operatorname{int}C$; thus $jH(Q)$ lies in the open set $T_0=R^{-1}(E\setminus0_B)$. Choose a positive continuous error function on $U$ smaller than half the distance of $jH(p)$ to $\mathbb R^d\setminus T$, and uniformly small enough that every error ball over $Q$ lies in $T_0$; compactness of $jH(Q)$ supplies this uniform bound. Empty complements or empty $Q$ require only any fixed positive bound. Then [F3] gives smooth $\Psi$ with this error, equal to $jH$ on a neighbourhood of $A$. [F1, F3, F8, step 1.3, choose]

3.1 On $U$ set $\chi_s(p)=jH(p)+s\lambda(p)(\Psi(p)-jH(p))$ for $0\le s\le1$. Its distance from $jH(p)$ is bounded by the prescribed error, so the whole segment stays in $T$; over $Q$ it stays in $T_0$. Define the alteration by $R\chi_s$ on $U$ and $H$ off $\operatorname{supp}\lambda$. These are an open cover and agree on overlaps, so [F7] gives a continuous homotopy. It fixes $F$, the endpoints and every original basepoint value, since the compact support lies in $U$ and away from them. Put $\widehat H=R\chi_1$ on $U$ with the same extension. It is smooth on a neighbourhood of $C$, where $\lambda=1$, and has no zeros in $Q$. Every zero of $\widehat H$ with time in $J$ therefore lies in $\operatorname{int}C$: outside $V$ it is an original zero in $K$, and inside the buffer it is excluded. For times outside $J$, the approximation equals $jH$ wherever it acts by the protected set $A$, so $\widehat H=H$ there and collar zeros remain smooth and transverse. No claim that all interior-time zeros form a compact set was used. [F3, F7, F8, step 1.3, step 2.1, construct]

4.1 The compact set $\widehat K=\widehat H^{-1}(0_B)\cap(X\times J)$ lies in $M=\operatorname{int}C$. If it is empty, $\widehat H$ is already transverse near every zero, all of which are protected collar zeros. Otherwise choose a compact neighbourhood $L$ of $\widehat K$ inside $M$ and choose an open $V_1$ with $L\subseteq V_1\subseteq\overline V_1\subseteq M$ and $\overline V_1$ compact, and use [F4] to obtain a smooth $\eta:M\to[0,1]$ equal to one near $L$, supported in $V_1$. Its support $S$ is consequently compact and contained in $M$. Choose an open $O$ containing $\widehat K$ with $\overline O\subseteq\operatorname{int}L$. Apply [F5] to the smooth $\widehat H:M\to E$ to obtain $\mathcal F:M\times B_{\mathrm{par}}\to E$, with $\mathcal F(p,0)=\widehat H(p)$ and each parameter map submersive. Shrink its ball to one centred at zero. Since $M\ne\varnothing$ and $\dim E\ge r>0$, parameter submersivity forces positive parameter dimension. [F1, F4, F5, step 3.1, choose]

5.1 Set $G(p,a)=\mathcal F(p,\eta(p)a)$ on $M\times B_{\mathrm{par}}$. It is smooth even at $\eta=0$. On $\{\eta>0\}$ its derivative in parameter directions is $\eta(p)D_a\mathcal F(p,\eta(p)a)$, surjective by the actual parameter-map assertion of [F5]; thus its evaluation is submersive and transverse to $0_B$. The compact central buffer $D=(S\setminus O)\cap(X\times J)$ contains no zero of $\widehat H$. By continuity of the family and compactness of $D$, there is a ball $B_{\mathrm{small}}$ about0 within $B_{\mathrm{par}}$ such that $G(p,a)\notin0_B$ for every $p\in D$ and $a\in B_{\mathrm{small}}$; if $D$ is empty any sufficiently small ball suffices. This bound also holds along $sa$ for $0\le s\le1$. The old buffer $Q$ is unchanged since $\eta$ is supported inside $C$. [F1, F5, step 4.1, algebra, construct]

6.1 Apply [F6] to $G|_{\{\eta>0\}\times B_{\mathrm{par}}}$. Its bad parameters form a null set, whose complement is dense in the positive-dimensional ball. Hence choose a good parameter $a$ inside the genuinely small ball $B_{\mathrm{small}}$, not merely somewhere in $B_{\mathrm{par}}$. Define $H'(p)=G(p,a)$ on all of $M$ and $\widehat H$ on the open complement of $S$; the formulas agree because $\eta=0$ there. Near the support boundary inside $M$ both formulas are the same smooth formula; near the boundary of $M$ the compact containment $S\subseteq M$ leaves an open region where the map is exactly $\widehat H$. This proves continuity and smooth extension where needed, without inferring smoothness merely from a limiting equality. [F5, F6, F7, step 4.1, step 5.1, choose]

7.1 On $\{\eta>0\}$, the good slice is smooth and transverse. Every central zero lies in $O$, since $D$ is zero-free and off $S$ the only central zeros were in $\widehat K\subseteq O$; here $\eta=1$. A zero with $\eta=0$ lies outside $J$ and is an unchanged collar zero, smooth and transverse. Thus $H'$ is smooth and transverse near its entire zero preimage. The family $G(p,sa)$, extended by $\widehat H$ off $S$, gives a homotopy fixed on $F$, endpoints and all original basepoint values, with support compactly contained in the interior-time smooth stratum. Concatenate it with step 3.1; [F7] on the two closed auxiliary-parameter halves gives the asserted alteration from $H$. Constant endpoint collars persist after shrinking them to miss the compact supports. [F6, F7, step 3.1, step 4.1, step 5.1, step 6.1, construct]

8.1 The preceding construction proves case (b) for all ranks, including empty zero preimages, empty bases and the rank-zero clopen branch. No compactness of $B$ was assumed: all safety bounds concerned images of fixed compact source subsets, and approximation and perturbation suppliers apply to arbitrary smooth targets. Step 1.1 then supplies the normal cobordism. AC is inherited exactly through the countable-choice smoothing, family and transversality suppliers [A1]; finite compact-neighbourhood and bump arguments add no further choice. The Thom basepoint was never treated as a smooth target point. [F1, A1, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1] ∎
