---
id: lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function
kind: lemma
title: "If $(U_r)_{r \\in D}$ are open with $\\overline{U_r} \\subseteq U_s$ whenever $r < s$ and $U_1 = X$, then $x \\mapsto \\inf\\{ r \\in D : x \\in U_r \\}$ is a continuous map $X \\to [0,1]$, and no choice principle is used"
status: draft
origin: session
deps: [def-the-dyadic-rationals-of-the-unit-interval, def-topological-space,
       def-continuous-map-top, thm-continuity-characterisations-top,
       def-topology-basis-subbasis, thm-basis-criterion, def-subspace-topology-top,
       def-interval, def-infimum, thm-infimum-property,
       def-interior-closure-boundary-top, lem-real-line-is-a-metric-space,
       def-metrizable-space]
justified_by: []
aliases: [lem-dyadic-scale-continuous]
landmark: true
short: "a dyadic open scale defines a continuous function"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$D$ be the dyadic rationals of $[0,1]$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).
Let $(U_r)_{r \in D}$ be a family of open subsets of $X$ such that

$$\overline{U_r} \subseteq U_s \quad \text{whenever } r < s \text{ in } D, \qquad \text{and} \qquad U_1 = X.$$

Then

$$f(x) \;:=\; \inf\big(\{\, r \in D : x \in U_r \,\} \cup \{1\}\big)$$

defines a map $f : X \to [0,1]$, and $f$ is continuous.

**No choice principle is used in passing from the family $(U_r)_{r \in D}$ to
$f$.** Every existential instantiation in the proof below is a single choice
from a single nonempty set of reals, never a simultaneous selection over an
infinite index; where the family $(U_r)_{r \in D}$ itself is later built by a
choice-consuming recursion, that cost is incurred in producing the family, not
in this lemma.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the dyadic rationals $D$ of $[0,1]$, and a family $(U_r)_{r \in D}$ of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$.

[A1] Shrinking hypothesis: for $r < s$ in $D$, $\overline{U_r} \subseteq U_s$.

[A2] $U_1 = X$.

[L1] $D \subseteq [0,1]$, and $D$ is dense in $[0,1]$: for every $x \in [0,1]$ and every real $\varepsilon > 0$ there is $r \in D$ with $|x-r| < \varepsilon$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L2] Infimum: a nonempty $S \subseteq \mathbb{R}$ bounded below has $\inf S \in \mathbb{R}$ ([[thm-infimum-property]]), which is a lower bound of $S$ and is $\ge$ every other lower bound of $S$ ([[def-infimum]]). Consequently, for a real $a$: (i) if some $s \in S$ has $s < a$ then $\inf S \le s < a$; (ii) if $\inf S < a$ then some $s \in S$ has $s < a$, since otherwise $a$ would be a lower bound of $S$ forcing $a \le \inf S$; (iii) if $r < \inf S$ then $r < s$ for every $s \in S$, since $\inf S$ is itself a lower bound of $S$.

[L3] The traces on $[0,1]$ of the order rays, $[0,a) := (-\infty,a) \cap [0,1]$ and $(a,1] := (a,\infty) \cap [0,1]$ for $a \in \mathbb{R}$, form a subbasis for the subspace topology of $[0,1]$ ([[def-subspace-topology-top]]). Indeed each ray $(-\infty,a)$, $(a,\infty)$ is a union of bounded open intervals of $\mathbb{R}$, hence open in the usual topology ([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]), so the topology the rays generate is contained in the usual topology of $\mathbb{R}$; and every bounded open interval $(a,b)$ is the intersection $(a,\infty) \cap (-\infty,b)$ of two rays, so by [[thm-basis-criterion]] the finite intersections of the rays already form a basis containing every bounded open interval, hence the rays generate at least the usual topology. The two inclusions make the rays a subbasis for the usual topology of $\mathbb{R}$ ([[def-topology-basis-subbasis]]), and tracing a subbasis onto a subspace gives a subbasis for the subspace topology ([[def-subspace-topology-top]]).

[L4] Checking preimages of a fixed subbasis suffices for continuity ([[thm-continuity-characterisations-top]], clause (d)$\Leftrightarrow$(a)).

[L5] $A \subseteq \overline{A}$ for every $A \subseteq X$, and $X \setminus \overline{A}$ is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 For $x \in X$ put $S_x := \{\, r \in D : x \in U_r \,\} \cup \{1\}$; then $S_x$ is a nonempty subset of $[0,1]$, since $1 \in S_x$ and $D \subseteq [0,1]$ by [L1], so $S_x$ is bounded below by $0$ and above by $1$. [given, L1]

2.1 By step 1.1 and [L2], $\inf S_x$ exists in $\mathbb{R}$ for every $x \in X$, lies in $[0,1]$ since $0$ is a lower bound of $S_x$ and $\inf S_x \le 1$ as $1 \in S_x$; define $f : X \to [0,1]$ by $f(x) := \inf S_x$. [step 1.1, L2, construct]

3.1 For every $x \in X$ and real $a$ with $0 < a \le 1$: if there is $r \in D$ with $r < a$ and $x \in U_r$, then $r \in S_x$, so $f(x) \le r < a$ by [L2](i). [step 2.1, L2]

3.2 For every $x \in X$ and real $a$ with $0 < a \le 1$: if $f(x) < a$, then by [L2](ii) some $s \in S_x$ has $s < a \le 1$, so $s \ne 1$, hence $s \in D$ and $x \in U_s$, with $s < a$. [step 2.1, L2]

3.3 For real $a \le 0$: $\{x : f(x) < a\} = \varnothing$, since $f(x) \ge 0$ always by step 2.1; for real $a > 1$: $\{x : f(x) < a\} = X$, since $f(x) \le 1 < a$ always by step 2.1; both open. [step 2.1]

3.4 For every $x \in X$ and real $a$ with $0 \le a < 1$: if $f(x) > a$, put $x_0 := (a+f(x))/2 \in (a,f(x)) \subseteq [0,1]$ and $\delta := (f(x)-a)/2 > 0$; by [L1] fix $r_1 \in D$ with $|x_0 - r_1| < \delta$, so $r_1 \in (a,f(x))$. [step 2.1, L1, choose]

3.5 For every $x \in X$, real $a$ with $0 \le a < 1$, and $r \in D$ with $r > a$: if $x \notin \overline{U_r}$, then $r$ is a lower bound of $S_x$. Indeed, for $s = 1 \in S_x$: $r \le 1 = s$, since $r \in D \subseteq [0,1]$ by [L1]; for $s \in D$ with $x \in U_s$: if $s < r$ then [A1] gives $\overline{U_s} \subseteq U_r$, so $x \in U_s \subseteq \overline{U_s} \subseteq U_r \subseteq \overline{U_r}$ by [L5], contradicting $x \notin \overline{U_r}$, so $s \ge r$. [step 2.1, A1, L1, L5]

3.6 For real $a < 0$: $\{x : f(x) > a\} = X$, since $f(x) \ge 0 > a$ always by step 2.1; for real $a \ge 1$: $\{x : f(x) > a\} = \varnothing$, since $f(x) \le 1 \le a$ always. [step 2.1]

4.1 For real $a$ with $0 < a \le 1$: $\{\, x \in X : f(x) < a \,\} = \bigcup_{r \in D,\, r<a} U_r$, by steps 3.1 and 3.2 giving the two inclusions; a union of open sets, hence open. [step 3.1, step 3.2]

4.2 Continuing under the hypothesis of step 3.4: since $a < r_1$, by [L1] fix $r_2 \in D$ with $|(a+r_1)/2 - r_2| < (r_1-a)/2$, so $r_2 \in (a,r_1)$. [step 3.4, L1, choose]

4.3 Continuing under the hypothesis of step 3.5: since $r$ is a lower bound of $S_x$ by step 3.5, [L2] gives $r \le \inf S_x = f(x)$; combined with $r > a$, $f(x) > a$. [step 3.5, step 2.1, L2]

5.1 Continuing, with $r_1, r_2$ as in step 4.2: since $r_1 < f(x) = \inf S_x$, [L2](iii) gives $r_1 < s$ for every $s \in S_x$; in particular $r_1 \ne 1$, since $r_1 < f(x) \le 1$, so $r_1 \notin S_x$ forces $x \notin U_{r_1}$, as otherwise $r_1$ itself would lie in $S_x$. [step 3.4, step 2.1, L2]

6.1 Continuing: since $r_2 < r_1$ in $D$, [A1] gives $\overline{U_{r_2}} \subseteq U_{r_1}$; if $x \in \overline{U_{r_2}}$ then $x \in U_{r_1}$, contradicting step 5.1; so $x \notin \overline{U_{r_2}}$, and $r_2 > a$. [step 4.2, step 5.1, A1]

7.1 For real $a$ with $0 \le a < 1$: $\{\, x \in X : f(x) > a \,\} = \bigcup_{r \in D,\, r>a} \big(X \setminus \overline{U_r}\big)$. A point of the left side has, by steps 3.4 and 6.1, some $r = r_2 \in D$ with $r > a$ and $x \in X \setminus \overline{U_r}$; a point $x$ of the right side lies in $X \setminus \overline{U_r}$ for some such $r$, hence $x \notin \overline{U_r}$, giving $f(x) > a$ by step 4.3. Each $X \setminus \overline{U_r}$ is open by [L5], so the union is open. [step 6.1, step 4.3, L5]

8.1 By [L3], the sets $[0,a)$ and $(a,1]$, $a \in \mathbb{R}$, form a subbasis for the subspace topology of $[0,1]$; and $f^{-1}(\,[0,a)\,) = \{x : f(x) < a\}$, $f^{-1}(\,(a,1]\,) = \{x : f(x) > a\}$ are open in $X$ for every real $a$, by steps 4.1, 3.3, 7.1 and 3.6. [step 4.1, step 3.3, step 7.1, step 3.6, L3]

9.1 By [L4], since the preimage of every member of that subbasis is open, $f$ is continuous as a map $X \to [0,1]$; together with step 2.1 this proves the statement. [step 8.1, step 2.1, L4] ∎

## Remarks

- **Why the $\cup\{1\}$ in the definition of $f$.** It is what makes $S_x$ manifestly nonempty and bounded above by $1$ without first invoking $U_1 = X$; under that hypothesis $1 \in D$ already forces $1 \in S_x$ on its own (since every $x \in X = U_1$), so the union is not strictly necessary here, but it keeps well-definedness visible from the definition of $S_x$ alone, which matters when this lemma is quoted with a family for which the reader has not yet checked $U_1 = X$ line by line.

- **Where density of $D$ is spent, and only there.** The forward half of the "$f(x) > a$" characterisation (steps 3.4, 4.2, 5.1 and 6.1) is the only place two dyadic points strictly between $a$ and $f(x)$ are extracted; the "$f(x) < a$" half needs no density at all, only the defining property of an infimum. This asymmetry mirrors the asymmetry of the hypothesis: the shrinking clause $\overline{U_r} \subseteq U_s$ supplies a *closed* set inside an *open* one, and closing the resulting gap is what the second dyadic point is for.

- **The subbasis fact (Fact [L3]) has no home elsewhere in this library** at this point in the reading order: no earlier item states that the order rays generate the usual topology of $\mathbb{R}$, so it is derived here from the basis criterion rather than cited as a single fact.
