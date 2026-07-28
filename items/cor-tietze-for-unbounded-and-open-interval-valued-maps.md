---
id: cor-tietze-for-unbounded-and-open-interval-valued-maps
kind: corollary
title: "Under dependent choice, a continuous real-valued map on a closed subspace of a normal space extends to the whole space, and a map into an open interval extends into that same open interval"
status: published
origin: session
deps: [thm-tietze-extension-theorem, thm-urysohn-lemma, def-normal-and-t4-spaces,
       def-subspace-topology-top, def-continuous-map-top, thm-algebra-of-continuous-functions,
       def-continuity-real, lem-real-and-metric-notions-agree, def-interval,
       def-dependent-choice, def-ordered-field, lem-continuity-is-local-and-pastes,
       lem-of-abs-value, thm-continuity-characterisations-top, def-metrizable-space]
justified_by: []
aliases: []
landmark: true
short: "Tietze into $\\mathbb{R}$ and into an open interval"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
    - title: "J. Munkres, Topology, 2nd ed., §35"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X,\mathcal{T})$ be normal ([[def-normal-and-t4-spaces]]) and let
$A \subseteq X$ be closed ([[def-subspace-topology-top]]).

1. Every continuous $f : A \to \mathbb{R}$ extends to a continuous
   $F : X \to \mathbb{R}$ with $F|_A = f$.
2. For reals $a<b$, every continuous $f : A \to (a,b)$ extends to a continuous
   $F : X \to (a,b)$ with $F|_A = f$.

**Scope.** The two one-sided open interval forms of [[def-interval]],
$(a,\infty)$ and $(-\infty,b)$, are not treated by clause 2 above; extending it to them would
need an explicit order-homeomorphism between a ray and $\mathbb{R}$, which is
not built here.

## Facts & Assumptions

**Given:** Dependent choice, a normal $(X,\mathcal{T})$, a closed $A \subseteq X$; for clause 1, continuous $f : A \to \mathbb{R}$; for clause 2, reals $a<b$ and continuous $f : A \to (a,b)$.

[L1] Tietze's extension theorem, clause 1: assuming DC, if $X$ is normal, $A$ closed and $p \le q$ reals, every continuous $h : A \to [p,q]$ extends to continuous $H : X \to [p,q]$ with $H|_A = h$ ([[thm-tietze-extension-theorem]]).

[L2] Urysohn's lemma, clause 1: assuming DC, disjoint closed $P,Q \subseteq X$ admit continuous $\varphi : X \to [0,1]$ with $P \subseteq \varphi^{-1}(\{0\})$, $Q \subseteq \varphi^{-1}(\{1\})$ ([[thm-urysohn-lemma]]).

[L3] Product of two continuous real-valued maps on $X$ is continuous: for continuous $g,h:X\to\mathbb{R}$ and $x_0 \in X$, fix (continuity of $g$) open $U_0 \ni x_0$ with $|g(x)-g(x_0)|<1$ on $U_0$, so $|g(x)| < |g(x_0)|+1 =: B$ there; for real $\varepsilon>0$ fix open $U_1 \ni x_0$ with $|g(x)-g(x_0)| < \varepsilon/(2(|h(x_0)|+1))$ and open $U_2 \ni x_0$ with $|h(x)-h(x_0)|<\varepsilon/(2B)$; on $U_0 \cap U_1 \cap U_2$, $|g(x)h(x)-g(x_0)h(x_0)| \le |g(x)||h(x)-h(x_0)| + |h(x_0)||g(x)-g(x_0)| < B \cdot \varepsilon/(2B) + |h(x_0)|\cdot \varepsilon/(2(|h(x_0)|+1)) < \varepsilon$, so $gh$ is continuous at $x_0$ ([[def-continuous-map-top]], [[lem-of-abs-value]]).

[L4] Algebra of continuous real functions on $A \subseteq \mathbb{R}$: sums, scalar multiples, products, absolute values and quotients with nonvanishing denominator of continuous functions are continuous, as are constants and the identity ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L5] For $S,T \subseteq \mathbb{R}$, a map $h : S \to T$ is continuous in the sense of [[def-continuity-real]] if and only if it is continuous as a map of topological spaces (subspace topologies of $\mathbb{R}$), by [[lem-real-and-metric-notions-agree]] clause 1 (real $\Leftrightarrow$ metric continuity) together with [[def-metrizable-space]] (metric $\Leftrightarrow$ topological continuity for a metrizable space).

[L6] Preimages of closed (open) sets under a continuous map are closed (open) ([[thm-continuity-characterisations-top]]).

[L7] Composites of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]], clause 1).

## Proof

**Proof technique:** constructive.

1.1 Fix reals $a<b$. Define $\alpha : (a,b) \to (-1,1)$ by $\alpha(t) := (2t-a-b)/(b-a)$ and $\beta : (-1,1) \to (a,b)$ by $\beta(s) := ((b-a)s+a+b)/2$; both are continuous real functions by [L4], the denominators $b-a$ and $2$ being nonzero. Direct substitution gives $\beta(\alpha(t))=t$ for $t\in(a,b)$ and $\alpha(\beta(s))=s$ for $s\in(-1,1)$. [given, L4, algebra, construct]

1.2 Let $g : A \to (-1,1)$ be continuous, regarded as a map $A \to [-1,1]$; by [L1] with $p=-1,q=1$ fix continuous $G : X \to [-1,1]$ with $G|_A = g$. [given, L1, choose, construct]

1.3 Define $\psi : (-1,1) \to \mathbb{R}$ by $\psi(t) := t/(1-|t|)$ and $\chi : \mathbb{R} \to (-1,1)$ by $\chi(s) := s/(1+|s|)$; both are continuous real functions by [L4], the denominators $1-|t|$ (on $(-1,1)$) and $1+|s|$ (everywhere) being positive. For $t \ge 0$ in $(-1,1)$: $\psi(t)=t/(1-t) \ge 0$ and $\chi(\psi(t)) = \frac{t/(1-t)}{1+t/(1-t)} = \frac{t/(1-t)}{1/(1-t)} = t$; for $t<0$ the same computation with $|t|=-t$ gives $\chi(\psi(t))=t$. Likewise $\psi(\chi(s))=s$ for every real $s$, splitting on the sign of $s$. [given, L4, algebra, construct]

2.1 By [L5], $\alpha$ and $\beta$ of step 1.1 are continuous as maps of topological spaces $(a,b) \to (-1,1)$ and $(-1,1) \to (a,b)$. [step 1.1, L5]

2.2 Put $D := G^{-1}(\{-1,1\})$, closed by [L6]; $D \cap A = \varnothing$, since $G|_A = g$ takes values in $(-1,1)$. By [L2], fix continuous $\varphi : X \to [0,1]$ with $D \subseteq \varphi^{-1}(\{0\})$ and $A \subseteq \varphi^{-1}(\{1\})$. [step 1.2, L2, L6, choose]

2.3 By [L5], $\psi$ and $\chi$ of step 1.3 are continuous as maps of topological spaces $(-1,1) \to \mathbb{R}$ and $\mathbb{R} \to (-1,1)$. [step 1.3, L5]

3.1 Define $\tilde{G} : X \to \mathbb{R}$ by $\tilde{G}(x) := \varphi(x)G(x)$, continuous by [L3]. For $x \in A$: $\varphi(x)=1$, so $\tilde G(x)=G(x)=g(x)$. For $x \notin D$: $|G(x)|<1$ and $\varphi(x)\in[0,1]$, so $|\tilde G(x)| = \varphi(x)|G(x)| \le |G(x)| < 1$. For $x \in D$: $\varphi(x)=0$, so $\tilde G(x)=0$. So $\tilde G : X \to (-1,1)$ and $\tilde G|_A = g$. [step 2.2, step 1.2, L3, construct]

4.1 [Clause 2.] With $\alpha,\beta$ as in steps 1.1–2.1: $g := \alpha \circ f : A \to (-1,1)$ is continuous by [L7]; by step 3.1 fix continuous $\tilde G : X \to (-1,1)$ with $\tilde G|_A = g$; define $F := \beta \circ \tilde G : X \to (a,b)$, continuous by [L7]. For $x \in A$: $F(x) = \beta(\tilde G(x)) = \beta(g(x)) = \beta(\alpha(f(x))) = f(x)$ by step 1.1. So $F$ extends $f$ into $(a,b)$. [step 2.1, step 3.1, step 1.1, L7, algebra, construct]

4.2 [Clause 1.] Let $f : A \to \mathbb{R}$ be continuous. With $\psi,\chi$ as in steps 1.3 and 2.3: $g := \chi \circ f : A \to (-1,1)$ is continuous by [L7]; by step 3.1 fix continuous $\tilde G : X \to (-1,1)$ with $\tilde G|_A = g$; define $F := \psi \circ \tilde G : X \to \mathbb{R}$, continuous by [L7]. For $x \in A$: $F(x) = \psi(\tilde G(x)) = \psi(g(x)) = \psi(\chi(f(x))) = f(x)$ by step 1.3. So $F$ extends $f$ into $\mathbb{R}$. [step 2.3, step 3.1, step 1.3, L7, algebra, construct]

5.1 Steps 4.1 and 4.2 establish clauses 2 and 1 respectively. [step 4.1, step 4.2, discharge-construct] ∎

## Remarks

- **The affine maps of step 1.1 and the rational maps of step 1.3 play the same role**: each turns a target interval into $(-1,1)$ or back, so that the single boundary-avoidance construction of steps 1.2, 2.2 and 3.1 need be proved once and reused for both clauses. Neither clause repeats that construction.

- **The product fact [L3] is the only piece of "algebra of continuous functions" this page needs for a map out of a general topological space**; the sum and scalar-multiple facts used elsewhere on this page are proved where they are first needed, by the same style of argument.

- **Choice is spent only through [L1] and [L2]**, that is, only through the two cited results; nothing in steps 1.1–5.1 performs a further selection from an infinite family.
