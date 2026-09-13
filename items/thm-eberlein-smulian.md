---
id: thm-eberlein-smulian
kind: theorem
title: Eberlein–Šmulian theorem
status: published
origin: pipeline
deps: ["def-relative-weak-compactness-and-three-sequential-notions", "def-weak-topology-on-a-normed-space", "def-weak-star-topology", "lem-eberlein-smulian-separable-reduction", "lem-eberlein-smulian-metrization-on-the-relevant-dual-ball", "lem-eberlein-smulian-countable-compactness-closes-in-the-bidual", "thm-banach-alaoglu", "cor-relative-hahn-banach-bidual-isometry", "def-dependent-choice", "def-countable-choice", "def-hahn-banach-extension-principle-relative", "thm-closed-subspace-of-a-compact-space-is-compact", "thm-compact-implies-the-other-compactness-forms", "thm-compactness-under-continuous-maps", "lem-index-map-grows"]
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
      locator: "Appendix E, Theorems E.2–E.3, E.14 and E.17, printed pp. 345–347 and 354–356"
---

## Statement

Assume the ultrafilter lemma, the Axiom of Dependent Choice (DC), and HB.  For
every subset $A$ of a real or complex Banach space $X$, the following are
equivalent:

1. $A$ is relatively weakly compact;
2. $A$ is relatively weakly sequentially compact;
3. $A$ is relatively weakly countably compact.

All closures, limits, cluster points, and compactness assertions use the weak
topology $\sigma(X,X^*)$ and the ambient space $X$.

## Facts & Assumptions

**Given:** the ultrafilter lemma, DC, HB, a real or complex Banach space $X$,
and $A\subseteq X$.

[F1] Relative weak compactness means compactness of the weak closure; relative
weak sequential compactness gives a weakly convergent subsequence with ambient
limit; relative weak countable compactness gives an ambient weak cluster point
with arbitrarily late terms in every neighborhood
([[def-relative-weak-compactness-and-three-sequential-notions]]).

[F2] Under HB, the closed scalar span of one sequence in $X$ is a separable
Banach subspace, is weakly closed in $X$, and its intrinsic weak topology is
the relative ambient weak topology
([[lem-eberlein-smulian-separable-reduction]]).

[F3] Assuming $\mathrm{AC}_\omega$ and HB, every weakly compact subset of a
separable normed space is weakly metrizable
([[lem-eberlein-smulian-metrization-on-the-relevant-dual-ball]]).

[F4] DC gives a chain through every entire relation from a prescribed initial
state, whereas $\mathrm{AC}_\omega$ is a choice function for each supplied
sequence of nonempty sets ([[def-dependent-choice]],
[[def-countable-choice]]).

[F5] In a metric space, compactness implies sequential compactness without any
choice principle, by least-index recursion
([[thm-compact-implies-the-other-compactness-forms]], claims 1 and 3).

[F6] Under the ultrafilter lemma, DC and HB, a relatively weakly countably
compact $A$ is norm bounded and satisfies
$\overline{J_X(A)}^{\,w^*}\subseteq J_X(X)$
([[lem-eberlein-smulian-countable-compactness-closes-in-the-bidual]]).

[F7] Under the ultrafilter lemma, the closed unit ball of the dual of any
normed space is weak-star compact ([[thm-banach-alaoglu]]).

[F8] The weak and weak-star topologies are initial for their scalar
evaluations, and under HB the canonical map $J_X:X\to X^{**}$ is scalar-linear
and isometric ([[def-weak-topology-on-a-normed-space]],
[[def-weak-star-topology]], [[cor-relative-hahn-banach-bidual-isometry]]).

[F9] A closed subset of a compact space is compact, and continuous images of
compact spaces are compact ([[thm-closed-subspace-of-a-compact-space-is-compact]],
[[thm-compactness-under-continuous-maps]], claim 1).

[F10] Strictly increasing natural-number indices satisfy $n_k\ge k$
([[lem-index-map-grows]]), and HB is the named dominated-extension principle
([[def-hahn-banach-extension-principle-relative]]).

## Proof

**Proof technique:** prove the cycle compact $\Rightarrow$ sequential
$\Rightarrow$ countable $\Rightarrow$ compact.

1.1 We first derive the exact choice fragment needed by [F3], rather than citing the unproved remark that DC implies $\mathrm{AC}_\omega$.  Given any sequence $(E_n)_{n\in\mathbb N}$ of nonempty sets, let $S$ be the set of all finite histories $s$ with domain $n$ for some $n$ and $s(k)\in E_k$ for $k<n$.  The empty history belongs to $S$.  Relate $s$ to $t$ when $t$ extends $s$ by exactly one value from $E_{\operatorname{dom}s}$.  The relation is entire because that next set is nonempty.  DC from the empty history gives a chain $(s_n)$ with $s_n$ of length $n$ and $s_{n+1}$ extending $s_n$; its union is a function $f$ on $\mathbb N$ with $f(n)\in E_n$.  Thus the assumed DC proves the instance of $\mathrm{AC}_\omega$ required below. [F4, construct]

1.2 If $A=\varnothing$, its weak closure is empty and compact and there is no sequence in $A$, so all three conditions hold.  If $X=\{0\}$ and $A\ne\varnothing$, then $A=\{0\}$, its weak topology is the singleton topology, and every sequence is constant, so again all three conditions hold.  Hence the remaining implications may be proved without special conventions for these cases. [F1, F8, algebra]

1.3 The evaluation identity $J_Xx(u)=u(x)$ shows from [F8] that $J_X:(X,\sigma(X,X^*))\to(J_X(X),\sigma(X^{**},X^*)|_{J_X(X)})$ is continuous and that its inverse is continuous: every subbasic evaluation on either side pulls back to the corresponding evaluation on the other.  HB makes $J_X$ injective through its isometry, so it is a homeomorphism onto its image. [F8, F10]

1.4 Assume $A$ is relatively weakly compact and let $(a_n)$ be a sequence in $A$.  Put $C=\overline A^{\,w}$ and let $Y$ be the norm-closed scalar span of the sequence.  By [F1], $C$ is weakly compact, and by [F2], $Y$ is a separable Banach subspace, weakly closed in $X$, with its intrinsic weak topology equal to the relative ambient weak topology.  Set $K=C\cap Y$, which contains every $a_n$. [F1, F2]

1.5 Assume $A$ is relatively weakly sequentially compact and let $(a_n)$ be any sequence in $A$.  Take strictly increasing indices $(n_k)$ and $x\in X$ with $a_{n_k}\to x$ weakly.  Given a weak neighborhood $U$ of $x$ and $N\in\mathbb N$, convergence gives $k_0$ with $a_{n_k}\in U$ for $k\ge k_0$; for $k\ge\max\{k_0,N\}$, [F10] gives $n_k\ge k\ge N$.  Thus $U$ contains an arbitrarily late term of the original sequence, so $x$ is its weak cluster point and $A$ is relatively weakly countably compact. [F1, F10]

1.6 Assume $A$ is relatively weakly countably compact.  By [F6], choose $R\ge0$ with $\|a\|\le R$ for every $a\in A$ and put $D=\overline{J_X(A)}^{\,w^*}\subseteq X^{**}$; then $D\subseteq J_X(X)$. [F6]

2.1 In the situation of step 1.4, $K$ is weakly closed in the compact space $C$, because $Y$ is weakly closed in $X$.  Hence [F9] makes $K$ compact, and [F2] identifies this topology with its intrinsic relative weak topology as a subset of the separable space $Y$. [F2, F9, step 1.4]

2.2 In the situation of step 1.6, apply [F7] to the normed space $X^*$: its dual unit ball $B_{X^{**}}$ is weak-star compact.  Fixed scalar multiplication $S_R(z)=Rz$ is weak-star continuous by [F8], since every evaluation of $S_Rz$ is $R$ times the corresponding evaluation of $z$.  Therefore [F9] makes $R B_{X^{**}}=S_R[B_{X^{**}}]$ weak-star compact, including $R=0$, when it is the singleton $\{0\}$. [F7, F8, F9, step 1.6]

3.1 By step 1.1 the assumptions of [F3] hold, so step 2.1 makes $K$ a compact metric space in its weak topology.  The choice-free implication [F5] gives a subsequence of $(a_n)$ converging to a point of $K$ in that metric, hence weakly in $Y$ and, by [F2], weakly in $X$.  Since the original sequence was arbitrary, $A$ is relatively weakly sequentially compact. [F2, F3, F5, step 1.1, step 2.1]

3.2 The set $D$ from step 1.6 lies in $R B_{X^{**}}$.  Indeed, for $z\in D$, $u\in X^*$ and $\varepsilon>0$, the weak-star neighborhood $\{w:|(w-z)(u)|<\varepsilon\}$ meets $J_X(A)$, so some $a\in A$ satisfies $|z(u)|<|u(a)|+\varepsilon\le R\|u\|+\varepsilon$.  If $|z(u)|>R\|u\|$, taking half the positive gap as $\varepsilon$ is a contradiction; hence $|z(u)|\le R\|u\|$ for every $u$, including $u=0$, and $\|z\|\le R$.  The closure $D$ is weak-star closed in $X^{**}$, so it is closed in the compact subspace $R B_{X^{**}}$ and therefore compact by [F9]. [F8, F9, step 1.6, step 2.2]

4.1 Since step 1.6 gives $D\subseteq J_X(X)$, the weak-star closure of $J_X(A)$ in $X^{**}$ equals its closure in the subspace $J_X(X)$: an ambient neighborhood and its trace meet $J_X(A)$ in exactly the same way at points of $J_X(X)$.  The homeomorphism in step 1.3 carries weak closure to subspace weak-star closure, so $D=J_X(\overline A^{\,w})$.  Its inverse restricted to the compact set $D$ is continuous, and [F9] makes $\overline A^{\,w}=J_X^{-1}[D]$ weakly compact.  Thus $A$ is relatively weakly compact. [F1, F6, F9, step 1.3, step 1.6, step 3.2]

5.1 Step 3.1 proves relative weak compactness implies relative weak sequential compactness, step 1.5 proves sequential compactness implies countable compactness, and step 4.1 proves countable compactness implies compactness.  Together with the empty and zero-space cases in step 1.2, this proves all three conditions equivalent over both scalar fields.  The ultrafilter lemma is spent in steps 1.6 and 2.2 through [F6] and Alaoglu; DC is spent in [F6] and locally at step 1.1; HB is spent in [F2], [F3], [F6] and the canonical isometry in step 1.3. [F1, F2, F3, F4, F6, F7, F8, F10, step 1.2, step 1.5, step 3.1, step 4.1] ∎

## Source notes

Haase's Theorem E.17, printed pp. 355–356, gives the canonical embedding into
$C_p(B_{X^*})$ and the compact/sequential equivalence; Theorems E.2–E.3 and
E.14 on printed pp. 345–347 and 354–355 supply its complete pointwise-
compactness route.  The local lemma [F6] contains that argument with BPI, DC
and HB exposed.  The proof here additionally derives DC $\Rightarrow$
$\mathrm{AC}_\omega$ from finite histories before using [F3], rather than
consuming the unproved bibliographic remark in the choice definitions.
