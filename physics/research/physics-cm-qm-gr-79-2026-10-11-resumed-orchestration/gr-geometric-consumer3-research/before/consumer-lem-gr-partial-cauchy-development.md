---
id: lem-gr-partial-cauchy-development
kind: lemma
title: "The causal domain of dependence of a partial Cauchy hypersurface is an open causally convex manifold on which the hypersurface is Cauchy"
status: draft
origin: session
domain: mathematics
dependency_level: 20
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, lem-gr-causal-curve-conventions, lem-gr-push-up-rule, lem-gr-chronology-openness, def-continuity-real, def-interval]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Definition 3.1 and Remark 3.2 (domains of dependence for causal and timelike curves), Proposition 3.10 and its proof (closedness of the timelike domains and their equality with the closures of the causal ones for closed S), Lemma 3.8 (S equals D+ cap D- for achronal S), Corollary 3.36 and Proposition 3.43 (openness and causal convexity of the domain of dependence of a partial Cauchy hypersurface), Definitions 2.130-2.132 and Corollary 2.145 (edge and causal convexity of an acausal edgeless set), printed pp. 76, 84-98"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): domains of dependence of achronal hypersurfaces, Corollary 2.9.8 with the transversality remark, Theorem 2.9.9 and Lemma 2.9.11, printed pp. 45-50"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pending
---

## Statement

Let $(W,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$S\subseteq W$ be a **partial Cauchy hypersurface**: a closed, acausal,
edgeless embedded topological hypersurface of codimension one
([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]], the edge being defined as
in the cited source). Write $I^\pm(S)$, $J^\pm(S)$ for the chronological and
causal future and past of $S$ in $W$
([[def-gr-causal-curves-and-reachability]]) and let
$$D^\pm(S):=\{p\in W:\ \text{every past- (respectively future-) inextendible causal curve in }W\text{ through }p\text{ meets }S\},\qquad D(S):=D^+(S)\cup D^-(S)$$
be the **causal domains of dependence of $S$ in $W$**. Then:

**(a)** $D(S)$ is open in $W$ and $S\subseteq D(S)$; moreover
$D^\pm(S)\setminus S\subseteq I^\pm(S)$, so every point of $D(S)\setminus S$
lies on one of the two chronological sides of $S$;

**(b)** $D(S)$ is **causally convex**: every causal curve in $W$ whose
endpoints lie in $D(S)$ is contained in $D(S)$;

**(c)** $S$ is a Cauchy set of the open submanifold $(D(S),g|_{D(S)})$: every
causal curve in $D(S)$ that is inextendible in $D(S)$ meets $S$ in exactly one
parameter value.

## Facts & Assumptions

**Given:** a time-oriented smooth Lorentzian four-manifold $(W,g,N)$, a partial Cauchy hypersurface $S\subseteq W$, and the sets $D^\pm(S),D(S)$ as in the statement.

[L1] The **timelike** domains of dependence $\widetilde D^\pm(S):=\{p:\text{every past- (future-) inextendible timelike curve in }W\text{ through }p\text{ meets }S\}$ satisfy $S\subseteq D^\pm(S)\subseteq\widetilde D^\pm(S)$; for closed $S$ one has $D^\pm(S)=\widetilde D^\pm(S)$ and each $\widetilde D^\pm(S)$ is closed; if $S$ is achronal then $\widetilde D^+(S)\cap\widetilde D^-(S)=S$. These are the quoted published statements disposed of in Step 1.1; no other property of $\widetilde D^\pm$ is used.

[L2] Causality and chronology: $I^\pm(S)$ are open; an acausal $S$ admits no causal curve between two distinct of its points, and then $I^+(S)\cap I^-(S)=\varnothing$; push-up: $x\le y\ll z$ implies $x\ll z$; consequently the nondegenerate segment of a timelike curve between two of its points is a timelike curve between those points, so those points are chronologically related ([[lem-gr-chronology-openness]], [[lem-gr-push-up-rule]], [[def-gr-causal-curves-and-reachability]]).

[L3] Causal curves extend: every causal curve in $W$ is contained in a causal curve in $W$ that is inextendible in $W$; and a causal curve inextendible in $W$ does not converge to any point of $W$ at either end of its interval ([[lem-gr-causal-curve-conventions]]; [[def-continuity-real]], [[def-interval]]).

No choice principle is used in this item.

## Proof

**Proof technique:** direct. The three source statements external to this library are quoted in Step 1.1 and then used; everything else is proved from the definitions and from [L2]-[L3].

1.1 (External structural facts, quoted.) The following published statements about causal and timelike curves as in [[def-gr-causal-curves-and-reachability]] are used. (i) *Equality of the causal and timelike domains for closed $S$.* [Minguzzi, Section 3: "Let $S$ be a closed set then $D^+(S)=\widetilde D^+(S)$, $\operatorname{Int}\widetilde D^+(S)=\operatorname{Int}D^+(S)$ and $\dot{\widetilde D^+}(S)=\dot D^+(S)$", the proof establishing that $\widetilde D^+(S)$ is closed; and the achronality identity "If $S$ is achronal, $\widetilde D^+(S)\cap\widetilde D^-(S)=D^+(S)\cap D^-(S)=S$".] (ii) *Openness for partial Cauchy hypersurfaces.* [Minguzzi, Section 3: "Let $S$ be a partial Cauchy hypersurface, then $D(S)\cap H(S)=\varnothing$, in particular $D(S)$ is open and $H^\pm(S)\subset I^\pm(S)$".] Here $H(S)$ is the Cauchy horizon of $S$, the part of the boundary of the domain of dependence other than $S$; since $D(S)$ is closed ([L1] with [L1]'s equality for the closed set $S$), its boundary contains no point of $D(S)\setminus S$ (else that point would lie in $H(S)$ and in $D(S)$, contradicting $D(S)\cap H(S)=\varnothing$), so $D(S)$ is open around every point of $D(S)\setminus S$; at points of $S$ it is open because the boundary satisfies $\partial D(S)\cap S=\varnothing$: indeed the source's identity $H^\pm(S)\cap S=\mathrm{edge}(S)=\varnothing$ holds as $S$ is edgeless, and $\partial D(S)\setminus S\subseteq H(S)$. (iii) *Causal convexity.* [Minguzzi, Section 3: "Let $S$ be closed and achronal. The sets $\operatorname{Int}D(S)$, $\operatorname{Int}D^+(S)$ and $\operatorname{Int}D^-(S)$ are all causally convex", i.e. for $p,q\in\operatorname{Int}D(S)$ one has $J^+(p)\cap J^-(q)\subseteq\operatorname{Int}D(S)$.] Since $D(S)=\operatorname{Int}D(S)$ by (ii), this is clause (b). [given, algebra]

2.1 (The chronological-side property, proved from the definition.) Let $p\in D^+(S)\setminus S$. Choose a past-directed timelike geodesic segment $\beta_0:[0,1]\to W$ with $\beta_0(0)=p$ (in a chart at $p$, a small past- directed timelike geodesic exists by the time-orientation, [[def-gr-causal-curves-and-reachability]], [[def-gr-smooth-lorentzian-objects]]). By [L3] let $\beta$ extend $\beta_0$ to a past-directed causal curve in $W$ that is past-inextendible in $W$ with $\beta(0)=p$; passing to the subcurve containing $\beta_0$ keeps the curve timelike on a nondegenerate interval, so $\beta$ is a past-directed past-inextendible **timelike** curve through $p$. Since $p\in D^+(S)$, $\beta$ meets $S$; at some parameter $t_s\le 0$. The subcurve of $\beta$ between $t_s$ and $0$ is a nondegenerate segment of a timelike curve joining $s:=\beta(t_s)\in S$ to $p$; if $s=p$ then $p\in S\cap(D^+(S)\setminus S)=\varnothing$, impossible, so $s\ne p$ and the segment is nondegenerate; by [L2] $s\ll p$, hence $p\in I^+(S)$. The time reverse gives $D^-(S)\setminus S\subseteq I^-(S)$. This proves the "moreover" part of clause (a). [step 1.1, L2, L3, algebra]

3.1 (Disjointness of the chronological sides.) $S$ acausal implies $S$ achronal, and then $I^+(S)\cap I^-(S)=\varnothing$: points $s_1\ll x\ll s_2$ with $s_1,s_2\in S$ give $s_1\ll s_2$ by push-up [L2], contradicting achronality, and conversely every point of the intersection yields such a pair. [step 2.1, L2, algebra]

4.1 (Consequences for curves in $D(S)$.) Let $\gamma:I\to D(S)$ be a causal curve with $\gamma\cap S=\varnothing$. By step 2.1 every value of $\gamma$ lies in $I^+(S)\cup I^-(S)$, which by step 3.1 is a disjoint union of two open sets; by continuity of $\gamma$ on the interval $I$ ([[def-gr-causal-curves-and-reachability]], [[def-continuity-real]], [[def-interval]]) its image is connected, so the image lies entirely in one of the two sides. [step 2.1, step 3.1, L2, algebra]

5.1 (Proof of clause (c): every curve in $D(S)$ inextendible in $D(S)$ meets $S$.) Suppose, for contradiction, that $\gamma:I\to D(S)$ is a causal curve inextendible in $D(S)$ with $\gamma\cap S=\varnothing$. By step 4.1 we may assume $\gamma\subseteq I^-(S)$ (the other case is the time reverse, with the roles of $D^+$ and $D^-$ interchanged). Since $D^+(S)\setminus S\subseteq I^+(S)$ by step 2.1, no value of $\gamma$ lies in $D^+(S)\setminus S$, and no value lies in $S$; hence $\gamma\subseteq D^-(S)$. [step 2.1, step 4.1, algebra]

6.1 (An extension past the future end.) Fix $t_0\in I$ and put $p:=\gamma(t_0)\in D^-(S)$. By [L3] extend $\gamma$ to a causal curve $\beta:J\to W$ that is future-inextendible in $W$, with $J\supseteq I$ an interval. By the definition of $D^-(S)$, the future-directed future-inextendible causal curve $\beta$ from $p$ meets $S$: there is $\tau\in J$, $\tau\ge t_0$, with $\beta(\tau)\in S$. [step 5.1, L3, algebra]

7.1 (The meeting cannot lie beyond $I$; exclusion of $y\in S$.) Suppose $\tau\notin I$; since $\tau\ge t_0\in I$ and $I$ is an interval, this means $\tau>b:=\sup I$, and $b<+\infty$. Since $J$ is an interval containing $I$ and $\tau$, it contains $b$; put $y:=\beta(b)\in W$, so that $\gamma(t)\to y$ as $t\to b^-$ by continuity of $\beta$. Moreover $y\notin S$: if $y\in S$, then either $b\in I$, in which case $y=\gamma(b)\in S$ contradicts $\gamma\cap S=\varnothing$, or $b\notin I$, in which case adjoining the value $y\in S\subseteq D(S)$ at the parameter $b$ exhibits a causal curve in $D(S)$, on the strictly larger interval $I\cup\{b\}$, extending $\gamma$ (continuous, with causal velocity almost everywhere), contradicting inextendibility of $\gamma$ in $D(S)$. [step 6.1, L3, contradiction]

8.1 (The limit point lies in the timelike past domain.) Each $\gamma(t)$ lies in $D^-(S)\subseteq\widetilde D^-(S)$, and $\widetilde D^-(S)$ is closed by [L1]. Since $\gamma(t)\to y$, we get $y\in\widetilde D^-(S)$. [step 6.1, step 7.1, L1, algebra]

9.1 (The limit point lies in $D^-(S)$.) Suppose $y\notin D^-(S)$: then there is a future-directed causal curve $\alpha:[0,c)\to W$ with $\alpha(0)=y$, future-inextendible in $W$, whose image misses $S$. Choose $s_0\in I$ with $s_0<b$. The concatenation $\delta:=\beta|_{[s_0,b]}\cup\alpha$, glued at the common value $y$, is a future-directed causal curve in $W$ starting at $\gamma(s_0)$ that is future-inextendible in $W$ (its future end agrees with that of $\alpha$) and whose image misses $S$: the $\beta$-part consists of values of $\gamma$, which misses $S$ by hypothesis; the joint value $y$ is not in $S$ by step 7.1; and the $\alpha$-part misses $S$ by construction. But $\gamma(s_0)\in D^-(S)$, and by definition every future-directed future-inextendible causal curve in $W$ from a point of $D^-(S)$ meets $S$. This contradiction proves $y\in D^-(S)\subseteq D(S)$. [step 6.1, step 7.1, step 8.1, L3, contradiction]

10.1 (The final contradiction.) By step 9.1, $y\in D(S)$; by step 6.1, $\sigma:=\beta(\tau)\in S\subseteq D(S)$. The segment $\beta|_{[b,\tau]}$ is a causal curve with both endpoints in $D(S)$, so by clause (b) (Step 1.1(iii)) its image is contained in $D(S)$. Hence the concatenation $\gamma\cup\beta|_{[b,\tau]}$ is a causal curve on the strictly larger interval $I\cup[b,\tau]$, contained in $D(S)$, extending $\gamma$. This contradicts inextendibility of $\gamma$ in $D(S)$. Therefore every causal curve in $D(S)$ inextendible in $D(S)$ meets $S$. [step 6.1, step 9.1, step 1.1, contradiction]

11.1 (Exactly once.) By step 10.1 such a curve meets $S$ at least once. If it met $S$ at two distinct parameter values $t_1<t_2$, the subcurve on $[t_1,t_2]$ would be a causal curve in $W$ from $\gamma(t_1)\in S$ to the distinct point $\gamma(t_2)\in S$, contradicting acausality of $S$ [L2]. Hence the meeting is unique, which completes clause (c). [step 10.1, L2, algebra] ∎

## Remarks

Clause (c) is the statement that a partial Cauchy hypersurface is a Cauchy set of its own domain of dependence; combined with [[thm-gr-cauchy-surface-implies-globally-hyperbolic]] it exhibits $(D(S),g|_{D(S)})$ as a globally hyperbolic development of $S$, which is how the item is used in [[lem-gr-no-corresponding-boundary-points]]. The three quoted statements of Step 1.1 are the standard structural theory of domains of dependence; everything else is proved from the definitions together with the extension lemma [L3]. The acausality hypothesis on $S$ is essential for uniqueness, and clause (b) is the only place where the causal convexity part of the standard theory enters.
