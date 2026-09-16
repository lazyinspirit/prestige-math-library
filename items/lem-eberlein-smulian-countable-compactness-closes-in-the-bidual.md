---
id: lem-eberlein-smulian-countable-compactness-closes-in-the-bidual
kind: lemma
title: Countable compactness closes in the bidual
status: published
origin: pipeline
deps: ["def-relative-weak-compactness-and-three-sequential-notions", "def-weak-topology-on-a-normed-space", "def-weak-star-topology", "lem-basic-weak-star-neighborhoods", "thm-banach-alaoglu", "thm-uniform-boundedness-principle", "thm-bounded-operator-space-is-banach", "cor-relative-hahn-banach-bidual-isometry", "def-dependent-choice", "def-hahn-banach-extension-principle-relative", "thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma", "thm-a-compact-hausdorff-space-is-regular-and-normal", "lem-regularity-via-closed-neighbourhoods", "def-product-topology", "thm-heine-borel-rn", "thm-closed-subspace-of-a-compact-space-is-compact", "thm-compact-iff-fip", "thm-closure-characterisation-top", "def-separable-space", "lem-countable-iff-surjection-from-n", "thm-product-of-countable", "thm-of-archimedean", "cor-archimedean-reciprocal", "thm-reals-cauchy-complete", "thm-complex-plane-is-complete", "lem-standard-complete-metric-on-a-countable-product", "thm-metric-hausdorff-separation", "thm-compactness-under-continuous-maps"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Haase, The Functional Analysis of Quantum Information Theory"
      url: "https://fa.ewi.tudelft.nl/~haase/files/EFHN-July2012.pdf"
      locator: "Appendix E, Lemma E.1 and Theorems E.2, E.3, E.14, printed pp. 345–347 and 354–355"
---

## Statement

Assume the ultrafilter lemma, the Axiom of Dependent Choice (DC), and HB.  Let
$X$ be a real or complex Banach space and let $A\subseteq X$ be relatively
weakly countably compact: every sequence in $A$ has a weak cluster point in
$X$.  Then $A$ is norm bounded and

$$\overline{J_X(A)}^{\,w^*}\subseteq J_X(X)\subseteq X^{**}.$$

Here the closure uses $\sigma(X^{**},X^*)$.  The conclusion does not assert
that the cluster point or the representing point belongs to $A$.

## Facts & Assumptions

**Given:** the three stated principles, $X$, and $A$ as in the statement.

[F1] Relative weak countable compactness means that every sequence in the set has a cluster point in the ambient weak space, with "cluster" requiring every neighborhood to contain arbitrarily late terms ([[def-relative-weak-compactness-and-three-sequential-notions]]).

[F2] The weak and weak-star topologies are the initial topologies of their evaluation maps; basic weak-star neighborhoods impose only finitely many evaluation inequalities ([[def-weak-topology-on-a-normed-space]], [[def-weak-star-topology]], [[lem-basic-weak-star-neighborhoods]]).

[F3] Assuming the ultrafilter lemma, the dual unit ball is weak-star compact ([[thm-banach-alaoglu]]), and arbitrary products of compact Hausdorff spaces are compact ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

[F4] Under HB the canonical map $J_X:X\to X^{**}$ is an isometry, for both scalar fields ([[cor-relative-hahn-banach-bidual-isometry]]).  HB is the named relative dominated-extension principle ([[def-hahn-banach-extension-principle-relative]]).

[F5] Assuming DC, a pointwise bounded family of bounded operators on a Banach space is uniformly norm bounded ([[thm-uniform-boundedness-principle]]).  If the target is Banach, the bounded-operator space is Banach ([[thm-bounded-operator-space-is-banach]]).

[F6] DC supplies a sequence following any entire relation from a specified initial state ([[def-dependent-choice]]).

[F7] A compact Hausdorff space is regular, and regularity permits $y\in U$ open to be shrunk to open $V$ with $y\in V\subseteq\overline V\subseteq U$ ([[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[lem-regularity-via-closed-neighbourhoods]]).

[F8] Closed subspaces of compact spaces are compact; in a compact space every family of closed sets with the finite-intersection property has nonempty intersection; and closure is characterized by meeting every neighborhood ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-compact-iff-fip]], [[thm-closure-characterisation-top]]).

[F9] Real intervals and complex Euclidean disks are compact by finite-dimensional Heine–Borel ([[thm-heine-borel-rn]]).

[F10] On the scalar field put $\rho(s,t)=\min\{1,|s-t|\}$.  This bounded metric induces the usual scalar topology, since its balls of radius less than $1$ are the usual balls.  It is complete: a $\rho$-Cauchy sequence is Cauchy for the usual metric by testing tolerances below $1$, and its usual scalar limit is also its $\rho$-limit. The standard weighted metric on a countable product of complete metrics bounded by $1$ therefore applies to copies of $(\mathbb K,\rho)$ and induces the product topology; metric spaces are Hausdorff ([[lem-standard-complete-metric-on-a-countable-product]], [[thm-reals-cauchy-complete]], [[thm-complex-plane-is-complete]], [[thm-metric-hausdorff-separation]], [[def-product-topology]]).

[F11] A continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]], claim 3).

[F12] A nonempty at-most-countable set can be enumerated by a sequence, finite Cartesian products of countable sets are countable, the natural numbers are cofinal in the reals, and $1/n$ is eventually smaller than every positive real ([[lem-countable-iff-surjection-from-n]], [[thm-product-of-countable]], [[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** the Grothendieck pointwise-compactness argument, with each countable selection implemented by DC.

1.1 If $A=\varnothing$, it is norm bounded and $J_X(A)=\varnothing$ has empty weak-star closure, so both conclusions hold.  Hence assume $A\ne\varnothing$. [given]

1.2 Put $K=B_{X^*}$ with its weak-star topology and define $\Phi:X\to\mathbb K^K$ by $\Phi(x)(u)=u(x)$.  Each $\Phi(x)$ is continuous on $K$ by [F2], so $\Phi(X)\subseteq C(K)$.  The space $K$ is compact by [F3] and Hausdorff because distinct members of $X^*$ differ at some $x\in X$, whose evaluation separates them in the Hausdorff scalar field.  By [F4], $\|\Phi(x)\|_\infty=\|x\|$ and $\Phi$ is injective.  Since every $u\in X^*$ is zero or a scalar multiple of a member of $K$, [F2] shows that the pointwise topology on $\Phi(X)$ is exactly the weak topology transported from $X$. [F2, F3, F4]

1.3 For each $u\in X^*$ the scalar set $u(A)$ is bounded.  Otherwise every set $E_n=\{a\in A:|u(a)|>n\}$, $n\ge1$, is nonempty.  Apply DC to finite valid histories, starting with the empty history and extending the $n$th stage by an element of $E_{n+1}$; this gives $(a_n)$ with $|u(a_n)|>n+1$.  Let $a$ be a weak cluster.  The weak neighborhood $|u(x-a)|<1$ contains arbitrarily late $a_n$, while [F12] lets us take such an $n$ with $n+1>|u(a)|+1$.  Then $|u(a_n)|\le |u(a)|+1<n+1$, a contradiction. [F1, F2, F6, F12]

1.4 We shall repeatedly use this choice-free consequence of compactness.  If $(z_n)$ is a sequence in a compact space, then the closed sets $C_N=\overline{\{z_n:n\ge N\}}$ are nonempty, nested, and have the finite-intersection property.  By [F8] some $z$ lies in every $C_N$; by the closure characterization, every neighborhood of $z$ contains terms with arbitrarily large indices.  Thus $z$ is a cluster point of the sequence. [F8]

2.1 Every sequence in $M:=\Phi(A)$ has a pointwise cluster in $\Phi(X)$. Indeed, injectivity gives its unique lift $(a_n)$ in $A$; [F1] gives a weak cluster $a\in X$, and the topology identification in step 1.2 makes $\Phi(a)$ a pointwise cluster. [F1, step 1.2]

2.2 The dual $X^*=\mathcal B(X,\mathbb K)$ is Banach: the real and complex scalar fields are Banach and [F5] applies to the bounded-operator space.  The family $\{J_X(a):a\in A\}\subseteq\mathcal B(X^*,\mathbb K)$ is pointwise bounded by step 1.3, so UBP under the assumed DC gives $R:=\sup_{a\in A}\|J_X(a)\|<\infty$. [F5, step 1.3]

3.1 The HB isometry [F4] gives $\|a\|=\|J_X(a)\|\le R$ for every $a\in A$. Thus $A$, and equivalently $M$ in the supremum norm, is norm bounded. [F4, step 1.2, step 2.2]

4.1 Let $B=\overline M^{\,p}$ be the closure in the full product $\mathbb K^K$.  For each $t\in K$, step 3.1 gives $|h(t)|\le R$ for $h\in M$.  The scalar disk $D_R=\{z:|z|\le R\}$ is compact Hausdorff by [F9], including $R=0$; hence $D_R^K$ is compact by [F3].  It is closed in $\mathbb K^K$, so $B\subseteq D_R^K$, and $B$ is closed in that product.  Therefore $B$ is compact by [F8]. [F3, F8, F9, step 3.1]

5.1 We prove $B\subseteq C(K)$.  Suppose instead that $g\in B$ is discontinuous at $y\in K$.  Then for some $\varepsilon>0$, every neighborhood of $y$ meets $Z=\{z\in K:|g(z)-g(y)|\ge\varepsilon\}$.  This is exactly the negation of continuity at $y$ into the metric scalar field, written with one failed positive tolerance.  Notice $y\notin Z$. [F10, step 4.1, assume-contra]

6.1 Put $U_0=K$ and $\eta_n=\varepsilon/(n+1)$ for $n\ge1$.  DC on finite valid histories constructs $h_n\in M$, open neighborhoods $U_n$ of $y$, and $x_n\in K$ such that $|h_n(y)-g(y)|<\eta_n/2$ and $|h_n(x_m)-g(x_m)|<\eta_n/2$ for $m<n$, while $y\in U_n\subseteq\overline{U_n}\subseteq U_{n-1}\cap\{z:|h_n(z)-h_n(y)|<\eta_n\}$ and $x_n\in U_n\cap Z$.  At stage $n$, the approximation is possible because $g$ is in the pointwise closure of $M$; the set to be shrunk is an open neighborhood of $y$ because $h_n$ is continuous; [F7] supplies $U_n$; and step 5.1 makes $U_n\cap Z$ nonempty.  Thus the relation extending a finite valid history is entire, exactly the hypothesis of DC. [F2, F6, F7, step 5.1, construct]

7.1 By step 2.1, $(h_n)$ has a pointwise cluster $h=\Phi(a)\in\Phi(X)$.  By step 1.4, $(x_n)$ has a cluster $x\in K$.  The nesting in step 6.1 gives $x_m\in U_n$ whenever $m\ge n$, so the closure characterization gives $x\in\overline{U_n}$ for every $n$. [F8, step 1.4, step 2.1, step 6.1]

8.1 Hence $|h_n(x)-h_n(y)|<\eta_n$ and $|h_n(y)-g(y)|<\eta_n/2$.  Since $\eta_n\to0$ by [F12], $h_n(x)\to g(y)$.  But $h$ is a pointwise cluster of $(h_n)$, so $h(x)$ is a cluster of the convergent scalar sequence $(h_n(x))$; scalar Hausdorffness forces $h(x)=g(y)$. [F10, F12, step 6.1, step 7.1]

9.1 For fixed $m$, step 6.1 gives $h_n(x_m)\to g(x_m)$ as $n\to\infty$.  The same cluster-and-uniqueness argument gives $h(x_m)=g(x_m)$.  Since $x_m\in Z$, we therefore have $|h(x_m)-h(x)|=|g(x_m)-g(y)|\ge\varepsilon$ for every $m$. [F10, F12, step 5.1, step 6.1, step 7.1, step 8.1]

10.1 The function $h=\Phi(a)$ is continuous on $K$.  Thus $\{z:|h(z)-h(x)|<\varepsilon/2\}$ is a neighborhood of the cluster $x$ and must contain arbitrarily late $x_m$, contradicting step 9.1.  Therefore every $g\in B$ is continuous and $B\subseteq C(K)$. [F1, F2, step 1.2, step 7.1, step 9.1, discharge-contradiction: step 5.1]

11.1 Fix $g\in B$.  For positive integers $r,s$ and $h\in M$, define $V_h^{r,s}=\{(t_1,\ldots,t_r)\in K^r:|h(t_j)-g(t_j)|<1/s\text{ for }1\le j\le r\}$.  These sets are open because $g,h\in C(K)$ by step 10.1, and they cover $K^r$ because $g$ lies in the pointwise closure of $M$.  The finite power $K^r$ is compact by [F3], so some nonempty finite list of members of $M$ has the corresponding $V_h^{r,s}$ covering $K^r$. [F2, F3, step 4.1, step 10.1]

12.1 Pair the positive integer indices $(r,s)$ using [F12].  Apply DC to finite histories of choices of the finite subcovers from step 11.1; the extension relation is entire.  Thus obtain one finite list $F_{r,s}\subseteq M$ for every pair.  Their union $M_0$ is at most countable: retain the finite-list order, pad each nonempty list by its first term, and enumerate the pairs of natural indices using [F12].  No member of an uncountable family has been selected. [F6, F12, step 11.1]

13.1 The point $g$ lies in the pointwise closure of $M_0$: for finitely many points and tolerance $\delta>0$, repeat points if needed to form a positive-length tuple and choose $s$ with $1/s<\delta$; a member of $F_{r,s}$ gives all the inequalities.  Let $P=\overline{M_0}^{\,p}$.  Then $g\in P\subseteq B$; $P$ is closed in compact $B$, hence compact by [F8], and it is separable because the at-most-countable $M_0$ is dense in it. [F8, F12, step 4.1, step 12.1]

14.1 We record the compact-cluster argument of Haase's Lemma E.1.  Let $(q_n)\subseteq K$, $q\in K$, and let $(v_j)$ be pointwise dense in $P$.  If $v_j(q_n)\to v_j(q)$ for every $j$, then $v(q_n)\to v(q)$ for every $v\in P$.  Indeed, let $C$ be the intersection of the closures of all tails of $(q_n)$; it is nonempty by step 1.4.  For $z\in C$, continuity and the assumed scalar convergence give $v_j(z)=v_j(q)$ for every $j$.  Pointwise density then gives $v(z)=v(q)$ for every $v\in P$: otherwise the two-coordinate neighborhood of $v$ at $z,q$ with radius $|v(z)-v(q)|/3$ would contain no $v_j$.  If $v(q_n)$ failed to converge to $v(q)$, least-index recursion would give a subsequence staying some fixed positive distance away.  Its closed tail closures have a common point $z\in C$ by [F8], while continuity of $v$ at $z$ contradicts both $v(z)=v(q)$ and that fixed separation. [F2, F8, step 1.4, step 10.1, step 13.1]

14.2 The compact separable pointwise space $P$ is nonempty because it contains $g$.  Enumerate a nonempty pointwise-dense subset as $(v_j)$ using [F12].  On the countable product of the bounded scalar metrics $\rho$ use the standard weighted product metric $D$ from [F10], and pull it back along $q\mapsto(v_j(q))_j$ to a continuous pseudometric $d$ on $K$. [F10, F12, step 13.1]

15.1 For each positive integer $n$, the open $d$-balls of radius $1/n$ cover $K$, so compactness gives a nonempty finite list of centers.  DC, applied to finite histories of such lists, chooses one list for each $n$.  Pad every list by its first center and use the countable pairing in [F12] to enumerate the union as $(q_m)$.  For each $q\in K$ and each $n$, take the first center in the $n$th list whose ball contains $q$; the resulting sequence $q_{m_n}$ satisfies $d(q_{m_n},q)<1/n$, hence $v_j(q_{m_n})\to v_j(q)$ for every $j$. [F3, F6, F10, F12, step 14.2]

16.1 The evaluations at $(q_m)$ separate $P$.  If $v,w\in P$ agree at every $q_m$, then for arbitrary $q\in K$ use the sequence from step 15.1.  Step 14.1 gives $v(q_{m_n})\to v(q)$ and $w(q_{m_n})\to w(q)$; equality term by term and scalar Hausdorffness give $v(q)=w(q)$.  Thus $v=w$. [F10, step 14.1, step 15.1]

17.1 The evaluation map $E:P\to\mathbb K^{\mathbb N}$, $E(v)=(v(q_m))_m$, is continuous for the pointwise and product topologies by [F2] and injective by step 16.1.  Its corestriction to $E(P)$ is a continuous bijection from compact $P$ to a metric, hence Hausdorff, space.  By [F11] it is a homeomorphism.  Pulling back the restriction of the weighted metric built from $\rho$ therefore metrizes the pointwise topology of $P$. [F2, F10, F11, step 13.1, step 16.1]

18.1 Enumerate $M_0$ as $(w_k)$, with repetitions allowed.  Since it is dense in the metric space $P$, for each $n\ge1$ there is a $k$ with $d_P(w_k,g)<1/n$; take the least such $k$.  This defines, without choice, a sequence $(w_{k_n})$ in $M_0$ converging to $g$ pointwise. [F12, step 13.1, step 17.1]

19.1 Lift this sequence uniquely to $(a_n)$ in $A$.  By [F1] it has a weak cluster $a\in X$, so $\Phi(a)$ is a pointwise cluster of $(w_{k_n})$ by step 1.2.  Every scalar coordinate of that sequence converges to the corresponding coordinate of $g$ by step 18.1; uniqueness of scalar cluster points gives $g=\Phi(a)$.  Since $g\in B$ was arbitrary, $B\subseteq\Phi(X)$. [F1, F2, F10, step 1.2, step 18.1]

20.1 Let $x^{**}\in\overline{J_X(A)}^{\,w^*}$ and restrict it to $K$: $g(t)=x^{**}(t)$.  Every finite pointwise neighborhood of $g$ on $K$ is the restriction of a basic weak-star neighborhood of $x^{**}$ in $X^{**}$, so it meets $J_X(A)$ by [F2].  Hence $g\in B$, and step 19.1 gives $a\in X$ with $g(t)=t(a)$ for every $t\in K$. [F2, step 1.2, step 4.1, step 19.1]

21.1 For arbitrary $u\in X^*$, the equality is immediate if $u=0$; otherwise $u/\|u\|\in K$, and linearity gives $x^{**}(u)=\|u\|g(u/\|u\|)=u(a)=J_X(a)(u)$.  Thus $x^{**}=J_X(a)\in J_X(X)$.  Together with step 3.1 and the empty case of step 1.1 this proves both assertions.  The ultrafilter lemma is spent in steps 1.2, 4.1 and 11.1 through compactness; HB is spent only in the isometry in steps 1.2 and 3.1; DC is spent in UBP at step 2.2 and in the explicit finite-history constructions of steps 1.3, 6.1, 12.1 and 15.1. [F3, F4, F5, F6, step 1.1, step 3.1, step 20.1] ∎

## Source notes

Haase's Lemma E.1 and Theorems E.2, E.3 and E.14, printed pp. 345–347 and 354–355, supply the complete compact-cluster, metrization, countable-reduction, and pointwise-closure arguments.  The proof above changes Haase's phrase "take $g_x$" to a cover indexed by every available function and uses DC only to choose countably many finite subcovers; this avoids an unrecorded choice over all tuples.  It also supplies the dual-completeness premise needed by UBP and uses closed tail closures, rather than a metric compactness theorem, to obtain cluster points in the possibly nonmetrizable space $K$.
