## Selection reasons

- critical risk (13): 13 declared dependencies; 12 cited facts; 16 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function`

Normalized current SHA-256: `4aa5c449753f83809437c1fbe843af38299b637cdeea483c09cb58b67694e924`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function
kind: lemma
title: "If $(U_r)_{r \\in D}$ are open with $\\overline{U_r} \\subseteq U_s$ whenever $r < s$ and $U_1 = X$, then $x \\mapsto \\inf\\{ r \\in D : x \\in U_r \\}$ is a continuous map $X \\to [0,1]$, and no choice principle is used"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
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
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Bernard Badzioch, MTH 427 Topology I, Notes 10"
      url: "https://www.math.buffalo.edu/~badzioch/MTH427/_static/mth427_notes_10.pdf"
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
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Urysohn%27s_lemma",
    "https://www.math.buffalo.edu/~badzioch/MTH427/_static/mth427_notes_10.pdf"
  ],
  "rationale": "Standard Urysohn proofs define the separator as an infimum of a nested rational or dyadic open-set scale; the library isolates that construction and its ZF cost.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-the-dyadic-rationals-of-the-unit-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\iota$ is the canonical natural of $\\mathbb{R}$ ([[def-canonical-natural]]),\nand as is standard $\\iota(k)$ is abbreviated to $k$ once no ambiguity results\n([[cor-archimedean-reciprocal]]). For $m, n \\in \\mathbb{N}$, $m^n \\in \\mathbb{N}$ is the\nnatural-number power of [[def-nat-power]], distinct from but agreeing with the\nreal (integer) power $a^n$ of [[def-integer-power]] by that item's clause (d):\n$\\iota(m^n) = \\iota(m)^n$. Writing $2$ for $\\iota(2)$ as just agreed, this lets\n$2^n$ be read as a natural number **or** as the real $\\iota(2)^n$ interchangeably.\n\nFor $n \\in \\mathbb{N}$ put\n\n$$D_n \\;:=\\; \\Big\\{\\, \\frac{k}{2^n} \\;:\\; k \\in \\mathbb{N},\\ k \\le 2^n \\,\\Big\\} \\;\\subseteq\\; [0,1],$$\n\nthe order $\\le$ on the naturals $k$ and $2^n$ being that of [[def-nat-order]].\nEach $D_n$ is\na finite subset of $[0,1]$ ([[def-interval]]) with $0, 1 \\in D_n$ (the cases\n$k=0$ and $k=2^n$); it has at most $2^n+1$ elements, so is finite in the sense\nof [[def-countable]]. The **dyadic rationals of $[0,1]$** are\n\n$$D \\;:=\\; \\bigcup_{n \\in \\mathbb{N}} D_n \\;\\subseteq\\; [0,1],$$\n\na countable union of finite sets. Each **level** $D_n$ is nested in the next:\nif $k \\le 2^n$ then $2k \\le 2^{n+1}$ (multiplying the natural inequality by $2$),\nand $\\dfrac{k}{2^n} = \\dfrac{2k}{2^{n+1}}$ in $\\mathbb{R}$ (clearing the common\nfactor $\\iota(2)$, licensed by [[def-ordered-field]]), so every element of $D_n$\nis exhibited as an element of $D_{n+1}$; hence $D_0 \\subseteq D_1 \\subseteq\nD_2 \\subseteq \\cdots$ and $D = \\bigcup_n D_n$ is genuinely increasing, not\nmerely a union.\n\n**The level decomposition, stated and discharged here because the recursion of\n[[thm-urysohn-lemma]] consumes it.** For $n \\in \\mathbb{N}$,\n\n$$D_{n+1} \\;=\\; D_n \\,\\cup\\, \\Big\\{\\, t_j := \\frac{2j+1}{2^{n+1}} \\;:\\; j \\in \\mathbb{N},\\ j < 2^n \\,\\Big\\},$$\n\nand the new points $t_j$ are pairwise distinct, none lies in $D_n$, and each\nlies strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and\n$s_j := (j+1)/2^n$. *Strict betweenness:* $2j < 2j+1 < 2j+2$, and dividing by\nthe positive $2^{n+1}$ preserves strict order ([[def-ordered-field]]), so\n$r_j = 2j/2^{n+1} < t_j < (2j+2)/2^{n+1} = s_j$. *Distinctness:* $j \\mapsto\n2j+1$ is injective. *Disjointness from $D_n$:* $t_j = k/2^n$ with\n$k \\le 2^n$ would give $2j+1 = 2k$ after clearing the positive factor\n$1/2^{n+1}$ and applying injectivity of $\\iota$; but $k \\le j$ gives\n$2k \\le 2j < 2j+1$, and $k \\ge j+1$ gives $2k \\ge 2j+2 > 2j+1$, so no such $k$\nexists. *The union is all of $D_{n+1}$:* given $k/2^{n+1}$ with\n$k \\le 2^{n+1}$, the set $\\{\\, i \\in \\mathbb{N} : 2i > k \\,\\}$ is nonempty\n($2(k+1) = 2k+2 > k$), so by [[thm-well-ordering-principle]] it has a least\nelement $i_0$, and $i_0 \\ge 1$ since $2 \\cdot 0 = 0 \\le k$; writing\n$i_0 = j+1$ ([[lem-nat-nonzero-is-successor]]) gives $2j \\le k < 2j+2$, so\n$k = 2j$ or $k = 2j+1$. In the first case $k/2^{n+1} = j/2^n \\in D_n$ (with\n$j \\le 2^n$ since $2j \\le 2^{n+1}$); in the second it is $t_j$ (with $j < 2^n$\nsince $2j+1 \\le 2^{n+1}$ forces $2j < 2^{n+1}$). Finally, **any two elements of\n$D$ lie together in a common level**: one lies in some $D_m$ and the other in\nsome $D_{m'}$, and both then lie in $D_{\\max(m,m')}$ by the nesting just\nproved.\n\n**$D$ is dense in $[0,1]$: for every $x \\in [0,1]$ and every real\n$\\varepsilon > 0$ there is $r \\in D$ with $|x - r| < \\varepsilon$.** First, a\ngrowth fact about natural-number powers, proved by induction on $n$\n([[thm-induction-principle]]): $2^n \\ge n+1$ for every $n \\in \\mathbb{N}$. At\n$n=0$, $2^0 = 1 = 0+1$. If $2^n \\ge n+1$, then $2^{n+1} = 2^n \\cdot 2 = 2^n + 2^n\n\\ge (n+1) + (n+1) = 2n+2 \\ge n+2 = (n+1)+1$, the middle inequality adding the\ninductive hypothesis to itself and the last holding since $n \\ge 0$; both steps\nuse only that the order of $\\mathbb{N}$ is compatible with addition\n([[def-nat-order]]). Transporting the inequality into $\\mathbb{R}$ by the\norder-preserving $\\iota$ ([[lem-of-naturals-positive]]) gives $\\iota(2^n) \\ge\n\\iota(n+1) = \\iota(n)+1$ for every $n$.\n\nNow fix $x \\in [0,1]$ and a real $\\varepsilon > 0$. By\n[[cor-archimedean-reciprocal]] fix a natural $m \\ge 1$ with $1/m < \\varepsilon$.\nPut $n := m$; then $\\iota(2^n) \\ge \\iota(n)+1 = \\iota(m)+1 > \\iota(m) > 0$, so by\n[[lem-of-inverse-positive]] $0 < 1/2^n < 1/m < \\varepsilon$. Consider\n$S := \\{\\, k \\in \\mathbb{N} : x \\le k/2^n \\,\\}$. It is nonempty, since $k=2^n$\nsatisfies $x \\le 1 = 2^n/2^n$ because $x \\in [0,1]$; so by\n[[thm-well-ordering-principle]] $S$ has a least element $k_0$, and $k_0 \\le 2^n$\nbecause $2^n \\in S$. If $k_0 = 0$ then $x \\le 0$, and $x \\ge 0$ since $x \\in\n[0,1]$, so $x = 0 = 0/2^n \\in D_n \\subseteq D$, within distance $0 < \\varepsilon$\nof itself. If $k_0 \\ge 1$ then $k_0 - 1 \\in \\mathbb{N}$ and, by minimality of\n$k_0$, $k_0 - 1 \\notin S$, that is $x > (k_0-1)/2^n = k_0/2^n - 1/2^n$; combined\nwith $x \\le k_0/2^n$ this gives $|x - k_0/2^n| \\le 1/2^n < \\varepsilon$, and\n$r := k_0/2^n \\in D_n \\subseteq D$ since $k_0 \\le 2^n$. Either way some $r \\in D$\nsatisfies $|x-r| < \\varepsilon$.",
      "uses": [
        "1.1",
        "3.4",
        "3.5",
        "4.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-infimum-property",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below. Then $S$ has a\ngreatest lower bound in $\\mathbb{R}$ ([[def-infimum]]), and it is given by\n\n$$\\inf S = -\\sup(-S), \\qquad \\text{where } -S = \\{-s : s \\in S\\}.$$\n\nIn particular the complete ordered field $\\mathbb{R}$ has the\ngreatest-lower-bound property, which is therefore not an extra axiom: it is a\nconsequence of the least-upper-bound property.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "4.3",
        "5.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-infimum",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $\\ell \\in \\mathbb{R}$. Then $\\ell$ is a\n**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:\n\n- $\\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\\ell \\le s$ for\n  every $s \\in S$;\n- $\\ell' \\le \\ell$ for every lower bound $\\ell'$ of $S$.\n\nWritten out in one line:\n\n$$\\ell \\text{ is an infimum of } S \\iff \\big[(\\forall s \\in S)\\, \\ell \\le s\\big] \\text{ and } \\big[(\\forall \\ell' \\in \\mathbb{R})\\, \\big((\\forall s \\in S)\\, \\ell' \\le s\\big) \\Rightarrow \\ell' \\le \\ell\\big].$$\n\nAn infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write\n$\\inf S$ for it.",
      "uses": [
        "2.1",
        "3.1",
        "3.2",
        "4.3",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is\n\n$$\\mathcal{T}_S := \\{\\, U \\cap S : U \\in \\mathcal{T} \\,\\},$$\n\nthe family of **traces** on $S$ of the open sets of $X$. The pair\n$(S, \\mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in\n$\\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the\nambient space needs emphasis.\n\n**$\\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):\n$\\varnothing = \\varnothing \\cap S$ and $S = X \\cap S$ are traces. (T2): if\n$\\mathcal{S}' \\subseteq \\mathcal{T}_S$, choose for each member a set of\n$\\mathcal{T}$ tracing to it — no choice principle is needed, since\n$U' := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\cap S \\subseteq W \\,\\}$ is a canonical\nsuch set for $W \\in \\mathcal{T}_S$, being open by (T2) in $X$ and satisfying\n$U' \\cap S = W$ — and then\n$\\bigcup_i (U_i \\cap S) = (\\bigcup_i U_i) \\cap S \\in \\mathcal{T}_S$ by (T2) in\n$X$. (T3): $(U \\cap S) \\cap (V \\cap S) = (U \\cap V) \\cap S \\in \\mathcal{T}_S$ by\n(T3) in $X$.\n\n**Closed sets of a subspace are the traces of the closed sets.** A set\n$C \\subseteq S$ is closed in $S$ if and only if $C = F \\cap S$ for some closed\n$F \\subseteq X$. Indeed $S \\setminus (U \\cap S) = (X \\setminus U) \\cap S$ and\n$S \\setminus (F \\cap S) = (X \\setminus F) \\cap S$, so complementation inside $S$\nmatches complementation inside $X$ under tracing.\n\n**Bases and subbases trace as well.** If $\\mathcal{B}$ is a basis for\n$\\mathcal{T}$ ([[def-topology-basis-subbasis]]) then\n$\\mathcal{B}_S := \\{\\, B \\cap S : B \\in \\mathcal{B} \\,\\}$ is a basis for\n$\\mathcal{T}_S$: its members are open in $S$, and for $W = U \\cap S$ open in $S$\nand $x \\in W$ there is $B \\in \\mathcal{B}$ with $x \\in B \\subseteq U$, whence\n$x \\in B \\cap S \\subseteq W$. The same computation with a subbasis $\\mathcal{S}$\nshows that $\\{\\, S_0 \\cap S : S_0 \\in \\mathcal{S} \\,\\}$ is a subbasis for\n$\\mathcal{T}_S$, since tracing commutes with finite intersections and with\nunions.\n\n**The inclusion is continuous.** The inclusion map $\\iota : S \\to X$,\n$\\iota(s) = s$, satisfies $\\iota^{-1}[U] = U \\cap S$ for every $U \\subseteq X$,\nso preimages of open sets are open and $\\iota$ is continuous\n([[thm-continuity-characterisations-top]], clause (b)). Moreover\n$\\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\\iota$ continuous: any\ntopology on $S$ for which $\\iota$ is continuous must contain every\n$\\iota^{-1}[U] = U \\cap S$, hence contain $\\mathcal{T}_S$.\n\n**Characteristic property of a map into a subspace.** Let $(Z, \\mathcal{T}_Z)$ be\na topological space and let $g : Z \\to S$ be a function. Then\n\n$$g \\text{ is continuous as a map } Z \\to (S,\\mathcal{T}_S) \\iff \\iota \\circ g \\text{ is continuous as a map } Z \\to (X,\\mathcal{T}) .$$\n\n*Proof.* For $U \\in \\mathcal{T}$ one has\n$(\\iota \\circ g)^{-1}[U] = g^{-1}[\\iota^{-1}[U]] = g^{-1}[U \\cap S]$. If $g$ is\ncontinuous then each $g^{-1}[U \\cap S]$ is open, so $\\iota \\circ g$ is continuous;\nconversely if $\\iota \\circ g$ is continuous then for any $W = U \\cap S$ open in\n$S$ the set $g^{-1}[W] = (\\iota \\circ g)^{-1}[U]$ is open, so $g$ is continuous.\nBoth directions use only clause (b) of [[thm-continuity-characterisations-top]].\n\n**Restriction of a continuous map.** If $f : X \\to Y$ is continuous and\n$S \\subseteq X$, then $f|_S : S \\to Y$ is continuous, since\n$(f|_S)^{-1}[V] = f^{-1}[V] \\cap S$ is open in $S$ for every open $V \\subseteq Y$\n([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).\n\n**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$\nis open in $S$ if and only if it is open in $X$: a trace $U \\cap S$ is then an\nintersection of two open sets of $X$, and conversely an open subset of $X$\ncontained in $S$ is its own trace. The same statement with \"closed\" throughout\nholds when $S$ is closed in $X$. Both are used in the pasting lemma of the next\nitem, and both fail without the hypothesis: $S$ itself is always open and closed\nin $S$, and need be neither in $X$.",
      "uses": [
        "8.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-real-line-is-a-metric-space",
      "source_section": "Statement",
      "quote": "Define $d_{\\mathbb{R}} : \\mathbb{R} \\times \\mathbb{R} \\to \\mathbb{R}$ by\n$d_{\\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:\n\n1. $d_{\\mathbb{R}}$ is a metric on $\\mathbb{R}$ ([[def-metric-space]]); it is\n   called the **usual metric** of $\\mathbb{R}$.\n2. For $x \\in \\mathbb{R}$ and $r > 0$ the open ball is the bounded open interval\n   ([[def-interval]], [[def-metric-ball]])\n   $$B(x,r) = (x-r,\\ x+r),$$\n   and the closed ball is $\\bar B(x,r) = [x-r,\\ x+r]$.\n3. Consequently $U \\subseteq \\mathbb{R}$ is open in the metric topology of\n   $d_{\\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \\in U$\n   there is $r > 0$ with $(x-r, x+r) \\subseteq U$. This topology is called the\n   **usual topology** of $\\mathbb{R}$.\n4. $(\\mathbb{R}, d_{\\mathbb{R}})$ is not a bounded metric space\n   ([[def-metric-bounded-diameter]]): no ball contains $\\mathbb{R}$, so\n   $\\operatorname{diam}(\\mathbb{R})$ is not defined.",
      "uses": [
        "8.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metrizable-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is\n**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose\nmetric topology is $\\mathcal{T}$, that is $\\mathcal{T} = \\mathcal{T}_d$\n([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**\n$\\mathcal{T}$.\n\n**The definition presupposes that $\\mathcal{T}_d$ is a topology in the sense of\n[[def-topological-space]], and it is.** By [[def-metric-topology]] both\n$\\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by\n[[thm-metric-open-set-algebra]] the family $\\mathcal{T}_d$ is closed under\narbitrary unions, which is (T2), and under intersections of $n \\ge 1$ members,\nwhich contains (T3). So every metric space is a topological space, and the\nmetric-space development of this library is a special case of the present one.\n\n**The standard local notions in the two developments agree after translating\ntheir neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the\ntopology $\\mathcal{T}_d$.\n\n- *Neighbourhoods and balls.* [[def-metric-topology]] uses \"neighbourhood\" for\n  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a\n  non-open superset of such a set. Thus the two collections are not literally\n  equal, but the open metric neighbourhoods are cofinal in the broader\n  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are\n  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:\n  any neighbourhood $N$ contains an open $U \\ni x$, hence a ball around $x$ by\n  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice\n  ([[lem-metric-ball-neighbourhood-base]]).\n- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines\n  them by the same conditions with balls in place of neighbourhoods, and the\n  previous bullet makes the two conditions equivalent; the metric closure is the\n  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the\n  definition used here ([[def-interior-closure-boundary-top]]). So the two\n  closures, the two interiors and the two boundaries are the same three\n  operations.\n- *Convergence.* $x_k \\to p$ in the sense of [[def-sequence-convergence-top]] is\n  \"eventually in every neighbourhood of $p$\", and by the first bullet this is\n  \"eventually in every ball around $p$\", which is [[def-metric-convergence]].\n- *Continuity.* $\\varepsilon$-$\\delta$ continuity at $a$\n  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball\n  around $a$ mapped into it, which by the first bullet is continuity at $a$ in\n  the sense of [[def-continuous-map-top]].\n\n- *Subspaces.* For $A \\subseteq X$ the subspace topology\n  $\\{\\, U \\cap A : U \\in \\mathcal{T}_d \\,\\}$ of [[def-subspace-topology-top]] is\n  exactly the metric topology of the subspace metric $d_A$\n  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase\n  *subspace topology* in this library name one thing. Indeed\n  $B_A(a,r) = B_X(a,r) \\cap A$: a trace $U \\cap A$ is $d_A$-open, since each of\n  its points $a$ has $B_X(a,r) \\subseteq U$ and hence $B_A(a,r) \\subseteq U \\cap A$;\n  and a $d_A$-open $W$ is the trace of\n  $U := \\bigcup \\{\\, B_X(a,r) : a \\in W,\\ r > 0,\\ B_X(a,r) \\cap A \\subseteq W \\,\\}$,\n  which is $d_X$-open, satisfies $U \\cap A = W$, and involves no choice principle,\n  the union being taken over a set of pairs rather than over a selection.\n\nConsequently the metric-space notions of interior, closure, boundary, density,\nconvergence, continuity and subspace agree with the topological notions here,\nand statements about them transfer once a metric is named. For neighbourhoods\nthe transfer uses the explicit convention change above: a metric-page\nneighbourhood is an open topological neighbourhood, while every topological\nneighbourhood contains one.\n\n**Metrizability is a topological property; the metric is not part of it.** If\n$h : X \\to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$\nmetrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on\n$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and\n$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\\mathcal{T}_d$ to a\nbasis of $\\mathcal{T}_{d'}$ and $\\mathcal{T}_{d'} = h[\\mathcal{T}_d] = \\mathcal{T}_Y$.\nHence $Y$ is metrizable. The metric itself, however, is **not** determined by the\ntopology: two metrics on one set may induce the same topology without agreeing,\nwhich is exactly topological equivalence ([[def-equivalent-metrics]]), and\nproperties of a metric that are not properties of its topology, boundedness among\nthem, are therefore not properties of a metrizable space.\n\n**Two things every metrizable space has.** It is **Hausdorff**: distinct points\nhave disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied\nto any metric inducing the topology. And it is **first countable**\n([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either\nfailure is therefore an obstruction to metrizability, and this page uses the\nfirst of them to exhibit a topology induced by no metric.\n\n**Sequential limits in a metrizable space are unique, so the notation\n$\\lim_k x_k$ is available there.** In a metric space a sequence has at most one\nlimit ([[lem-metric-limits-unique]]), and by the agreement of convergence above\nthat uniqueness is a statement about the topology alone; so within a metrizable\nspace, and only there, this page writes $\\lim_k x_k$ in the ordinary way. In a\ngeneral space the symbol is unavailable ([[def-sequence-convergence-top]]).\n\n**The usual topology of $\\mathbb{R}$.** The absolute value makes $\\mathbb{R}$ a\nmetric space under $d_{\\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded\nopen intervals, and the resulting metric topology is what claim 3 of\n[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\\mathbb{R}$.\nThat is the topology meant by the phrase throughout these two pages, and\n$\\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on\nthese two pages is proved from the metric $d_{\\mathbb{R}}$ and the bridge above,\nand no example re-derives any of it.",
      "uses": [
        "8.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-basis-criterion",
      "source_section": "Statement",
      "quote": "Let $X$ be a set, and for $\\mathcal{B} \\subseteq \\mathcal{P}(X)$ write\n\n$$\\mathcal{T}_{\\mathcal{B}} := \\{\\, U \\subseteq X : \\text{for every } x \\in U \\text{ there is } B \\in \\mathcal{B} \\text{ with } x \\in B \\subseteq U \\,\\} .$$\n\n1. $\\mathcal{B}$ is a basis for some topology on $X$ ([[def-topology-basis-subbasis]])\n   if and only if\n\n   - **(B1)** $\\bigcup \\mathcal{B} = X$, and\n   - **(B2)** for all $B_1, B_2 \\in \\mathcal{B}$ and every $x \\in B_1 \\cap B_2$\n     there is $B_3 \\in \\mathcal{B}$ with $x \\in B_3 \\subseteq B_1 \\cap B_2$.\n\n   When (B1) and (B2) hold, that topology is **unique**: it is\n   $\\mathcal{T}_{\\mathcal{B}}$, which is also exactly the family of all unions of\n   subfamilies of $\\mathcal{B}$.\n\n2. Let $\\mathcal{S} \\subseteq \\mathcal{P}(X)$ be an arbitrary family and let\n   $\\mathcal{B}_{\\mathcal{S}}$ be the family of intersections of finitely many\n   members of $\\mathcal{S}$. Then $\\mathcal{B}_{\\mathcal{S}}$ satisfies (B1) and\n   (B2), and $\\mathcal{T}_{\\mathcal{B}_{\\mathcal{S}}} = \\langle \\mathcal{S} \\rangle$,\n   the topology generated by $\\mathcal{S}$. So the finite intersections of any\n   subbasis form a basis for the topology it generates.\n\n**The nullary intersection: this library takes the empty intersection to be $X$.**\nIn claim 2 the phrase \"finitely many\" includes **none**, and the intersection of\nthe empty subfamily of $\\mathcal{S}$ is $X$, because the defining condition \"lies\nin every member of the empty family\" holds of every point of $X$. Hence\n$X \\in \\mathcal{B}_{\\mathcal{S}}$ for every $\\mathcal{S}$, including\n$\\mathcal{S} = \\varnothing$, and **no covering hypothesis is imposed on a\nsubbasis**. The competing convention takes only nonempty finite intersections and\ncompensates by requiring $\\bigcup \\mathcal{S} = X$; under it claim 2 holds\nverbatim once that hypothesis is added, and the two conventions differ only in\nwhich of the two devices supplies (B1). The choice made here is recorded again\namong this page's conventions, and it is the reason\n$\\langle \\varnothing \\rangle$ comes out as the indiscrete topology\n$\\{\\varnothing, X\\}$ rather than being undefined.",
      "uses": [
        "8.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-topology-basis-subbasis",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\nA family $\\mathcal{B} \\subseteq \\mathcal{T}$ is a **basis for $\\mathcal{T}$** if\nevery open set is a union of members of $\\mathcal{B}$: for every\n$U \\in \\mathcal{T}$ there is $\\mathcal{B}_U \\subseteq \\mathcal{B}$ with\n$U = \\bigcup \\mathcal{B}_U$. Equivalently, and this is the form used in proofs,\n\n$$\\text{for every } U \\in \\mathcal{T} \\text{ and every } x \\in U \\text{ there is } B \\in \\mathcal{B} \\text{ with } x \\in B \\subseteq U .$$\n\n*The two forms say the same thing.* If every open $U$ is such a union and\n$x \\in U$, then $x$ lies in one of the sets united, which is a member of\n$\\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then\n$U = \\bigcup \\{\\, B \\in \\mathcal{B} : B \\subseteq U \\,\\}$, since each such $B$ is\ncontained in $U$ and each $x \\in U$ lies in one of them. Note that\n$\\bigcup \\varnothing = \\varnothing$, so the empty open set is covered by the empty\nsubfamily and needs no member of $\\mathcal{B}$. The members of a basis are called\n**basic open sets**.\n\n**The topology generated by a family.** Let $\\mathcal{S} \\subseteq \\mathcal{P}(X)$\nbe *any* family of subsets of $X$. Then\n\n$$\\langle \\mathcal{S} \\rangle := \\bigcap \\{\\, \\mathcal{T}' : \\mathcal{T}' \\text{ is a topology on } X \\text{ with } \\mathcal{S} \\subseteq \\mathcal{T}' \\,\\}$$\n\nis a topology on $X$, it contains $\\mathcal{S}$, and it is contained in every\ntopology on $X$ that contains $\\mathcal{S}$. It is called the **topology\ngenerated by $\\mathcal{S}$**, and $\\mathcal{S}$ is a **subbasis** for a topology\n$\\mathcal{T}$ when $\\mathcal{T} = \\langle \\mathcal{S} \\rangle$.\n\n*This is well posed, and the obligation is discharged here.* The collection being\nintersected is nonempty, because $\\mathcal{P}(X)$ is a topology on $X$ containing\n$\\mathcal{S}$; so the intersection is an intersection of a nonempty family of\nsubsets of $\\mathcal{P}(X)$ and is a set. It is a topology: $\\varnothing$ and $X$\nlie in every topology on $X$, hence in the intersection, which is (T1); if\n$\\mathcal{S}' \\subseteq \\langle \\mathcal{S} \\rangle$ then $\\mathcal{S}'$ is a\nsubfamily of each $\\mathcal{T}'$ in the collection, so $\\bigcup \\mathcal{S}'$ lies\nin each $\\mathcal{T}'$ and hence in the intersection, which is (T2); and the same\nargument with $U \\cap V$ gives (T3). It contains $\\mathcal{S}$ because every\n$\\mathcal{T}'$ in the collection does, and it is contained in each such\n$\\mathcal{T}'$ because an intersection is contained in each of its members. So\n$\\langle \\mathcal{S} \\rangle$ is the coarsest topology on $X$ containing\n$\\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely\ndetermined by $\\mathcal{S}$.\n\n**Neither notion is intrinsic to the family alone.** \"$\\mathcal{B}$ is a basis\nfor $\\mathcal{T}$\" and \"$\\mathcal{S}$ is a subbasis for $\\mathcal{T}$\" are\nrelations between a family and a topology, not properties of the family. The\nquestion of which families are a basis *for some* topology, and how the topology\ngenerated by a subbasis is computed from it, is settled by the next item.",
      "uses": [
        "8.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-continuity-characterisations-top",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T}_X)$ and $(Y, \\mathcal{T}_Y)$ be topological spaces, let\n$f : X \\to Y$ be a function, and let $\\mathcal{S}$ be a subbasis for\n$\\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions\nare equivalent.\n\n- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).\n- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \\subseteq Y$.\n- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \\subseteq Y$.\n- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \\in \\mathcal{S}$.\n- **(e)** $f[\\overline{A}] \\subseteq \\overline{f[A]}$ for every $A \\subseteq X$,\n  closures being taken in $X$ and in $Y$ respectively\n  ([[def-interior-closure-boundary-top]]).\n\nCondition (d) is what makes continuity checkable against a generating family\nrather than against every open set, and it holds for a *basis* as well, a basis\nbeing in particular a subbasis for the topology it generates.",
      "uses": [
        "9.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-interior-closure-boundary-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]), let\n$A \\subseteq X$ and let $x \\in X$. Neighbourhoods are as in\n[[def-neighbourhood-top]], so a neighbourhood need not be open.\n\n- The **interior** of $A$ is\n  $\\operatorname{int}(A) := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\subseteq A \\,\\}$.\n- The **closure** of $A$ is\n  $\\overline{A} := \\bigcap \\{\\, F \\subseteq X : F \\text{ closed and } A \\subseteq F \\,\\}$.\n- The **exterior** of $A$ is $\\operatorname{ext}(A) := \\operatorname{int}(X \\setminus A)$.\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus \\operatorname{int}(A)$.\n- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$\n  of $x$ satisfies $N \\cap (A \\setminus \\{x\\}) \\ne \\varnothing$. The set of limit\n  points of $A$ is the **derived set** $A'$.\n- $x$ is an **isolated point of $A$** if $x \\in A$ and some neighbourhood $N$ of\n  $x$ satisfies $N \\cap A = \\{x\\}$.\n\n**Both operators are well posed, and the two names are justified rather than\nasserted.** The interior is a union of open sets, hence open by (T2), it is\ncontained in $A$, and it contains every open $U \\subseteq A$: so\n$\\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being\nintersected in the definition of $\\overline{A}$ is nonempty, since $X$ is closed\nand contains $A$, so the intersection is a set; it is closed by (C2) of\n[[def-topological-space]], it contains $A$, and it is contained in every closed\n$F \\supseteq A$: so $\\overline{A}$ is *the smallest closed superset of $A$*. In\nparticular\n\n$$\\operatorname{int}(A) \\subseteq A \\subseteq \\overline{A},$$\n\nand $A$ is open if and only if $A = \\operatorname{int}(A)$, and closed if and\nonly if $A = \\overline{A}$, in each case because one inclusion is automatic and\nthe other says exactly that $A$ belongs to the family in question.\n\n**Interior and closure are exchanged by complementation.** For every\n$A \\subseteq X$,\n\n$$X \\setminus \\operatorname{int}(A) = \\overline{X \\setminus A}, \\qquad X \\setminus \\overline{A} = \\operatorname{int}(X \\setminus A) = \\operatorname{ext}(A).$$\n\nIndeed $U \\mapsto X \\setminus U$ is a bijection between the open subsets of $A$\nand the closed supersets of $X \\setminus A$, and it turns unions into\nintersections ([[def-topological-space]]); applying complementation to the first\nidentity gives the second. So $\\operatorname{ext}(A) = X \\setminus \\overline{A}$,\nand every statement about interiors has a mirror statement about closures.\n\n**The pointwise description of the interior.** $x \\in \\operatorname{int}(A)$ if\nand only if $A$ is a neighbourhood of $x$. If $x \\in \\operatorname{int}(A)$ then\n$\\operatorname{int}(A)$ is an open set with $x \\in \\operatorname{int}(A) \\subseteq A$;\nconversely a neighbourhood relation $x \\in U \\subseteq A$ with $U$ open puts $x$\nin the union defining $\\operatorname{int}(A)$. The corresponding description of\nthe closure is proved as the next item, because it is the statement that does the\nwork in every later proof.\n\n**$X$ is the disjoint union of the three regions.** Since\n$\\operatorname{int}(A) \\subseteq \\overline{A}$, the three sets\n$\\operatorname{int}(A)$, $\\partial A = \\overline{A} \\setminus \\operatorname{int}(A)$\nand $\\operatorname{ext}(A) = X \\setminus \\overline{A}$ are pairwise disjoint and\ntheir union is $X$. This is recorded again, with the identities for interior and\nclosure of unions and intersections, in the lemma two items below.",
      "uses": [
        "3.5",
        "7.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-topological-space",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and write $\\mathcal{P}(X)$ for its power set. A **topology** on\n$X$ is a family $\\mathcal{T} \\subseteq \\mathcal{P}(X)$ such that\n\n- **(T1)** $\\varnothing \\in \\mathcal{T}$ and $X \\in \\mathcal{T}$;\n- **(T2)** $\\bigcup \\mathcal{S} \\in \\mathcal{T}$ for every $\\mathcal{S} \\subseteq \\mathcal{T}$;\n- **(T3)** $U \\cap V \\in \\mathcal{T}$ for all $U, V \\in \\mathcal{T}$.\n\nA **topological space** is a pair $(X, \\mathcal{T})$ consisting of a set $X$ and\na topology $\\mathcal{T}$ on it; the elements of $X$ are its **points**. When only\none topology is in play we write $X$ for the pair; when several are, the topology\nis always named.\n\nThe members of $\\mathcal{T}$ are the **open** sets of $(X,\\mathcal{T})$. A subset\n$F \\subseteq X$ is **closed** when its complement $X \\setminus F$ is open, and\n**clopen** when it is both open and closed. By (T1) both $\\varnothing$ and $X$\nare clopen. *Open and closed are not opposites*: a set may be neither, and it may\nbe both, so \"not open\" is never a synonym for \"closed\".\n\n**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets\nbecause that is all that is ever needed: if $n \\ge 1$ and\n$U_1, \\dots, U_n \\in \\mathcal{T}$, then $U_1 \\cap \\dots \\cap U_n \\in \\mathcal{T}$\nfollows by iterating (T3) $n-1$ times. The intersection of the **empty** family\nof subsets of $X$ is $X$, since the condition \"lies in every member of the empty\nfamily\" is vacuous; that case is covered by (T1) rather than by (T3), which is\none of the two reasons $X \\in \\mathcal{T}$ is demanded outright. The other is\nthat (T2) alone gives only $\\bigcup \\varnothing = \\varnothing$.\n\n**The closed sets, and the dual axiomatisation.** Put\n$\\mathcal{C} := \\{\\, X \\setminus U : U \\in \\mathcal{T} \\,\\}$, the family of closed\nsets. Then\n\n- **(C1)** $\\varnothing \\in \\mathcal{C}$ and $X \\in \\mathcal{C}$;\n- **(C2)** $\\bigcap \\mathcal{D} \\in \\mathcal{C}$ for every **nonempty**\n  $\\mathcal{D} \\subseteq \\mathcal{C}$;\n- **(C3)** $C \\cup D \\in \\mathcal{C}$ for all $C, D \\in \\mathcal{C}$.\n\nConversely, if a family $\\mathcal{C} \\subseteq \\mathcal{P}(X)$ satisfies (C1),\n(C2) and (C3), then $\\mathcal{T} := \\{\\, X \\setminus C : C \\in \\mathcal{C} \\,\\}$\nis a topology on $X$ whose closed sets are exactly the members of $\\mathcal{C}$.\nSo a topology may be presented equally well by its open sets or by its closed\nsets, and this library uses whichever is shorter.\n\n*Both directions are one computation, and it is carried out here rather than\nassumed.* The map $U \\mapsto X \\setminus U$ is an involution of\n$\\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities\n\n$$X \\setminus \\bigcup_{i \\in I} A_i = \\bigcap_{i \\in I} (X \\setminus A_i) \\quad (I \\ne \\varnothing), \\qquad X \\setminus \\bigcap_{i \\in I} A_i = \\bigcup_{i \\in I} (X \\setminus A_i) \\quad (I \\ne \\varnothing)$$\n\nterm by term into each other. Given (T1)–(T3): $\\varnothing = X \\setminus X$ and\n$X = X \\setminus \\varnothing$ lie in $\\mathcal{C}$, which is (C1); for nonempty\n$\\mathcal{D} \\subseteq \\mathcal{C}$ the family\n$\\mathcal{S} = \\{\\, X \\setminus C : C \\in \\mathcal{D} \\,\\}$ lies in $\\mathcal{T}$\nand $\\bigcap \\mathcal{D} = X \\setminus \\bigcup \\mathcal{S}$ is closed by (T2),\nwhich is (C2); and $C \\cup D = X \\setminus ((X \\setminus C) \\cap (X \\setminus D))$\nis closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run\nbackwards, the empty-union case $\\bigcup \\varnothing = \\varnothing$ being supplied\nby (C1) rather than by (C2); and $\\{\\, X \\setminus C : C \\in \\mathcal{C} \\,\\}$ has\n$\\mathcal{C}$ as its family of complements because complementation is an\ninvolution.\n\n**Comparison of topologies.** If $\\mathcal{T}_1$ and $\\mathcal{T}_2$ are\ntopologies on the same set $X$ and $\\mathcal{T}_1 \\subseteq \\mathcal{T}_2$, then\n$\\mathcal{T}_1$ is **coarser** than $\\mathcal{T}_2$ and $\\mathcal{T}_2$ is\n**finer** than $\\mathcal{T}_1$; the comparison is **strict** when the inclusion\nis. Inclusion is a partial order on the set of topologies on $X$\n([[def-partial-order]]), and it is not a total one: two topologies on the same\nset may be incomparable.",
      "uses": [
        "3.5",
        "7.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For $x \\in X$ put $S_x := \\{\\, r \\in D : x \\in U_r \\,\\} \\cup \\{1\\}$; then $S_x$ is a nonempty subset of $[0,1]$, since $1 \\in S_x$ and $D \\subseteq [0,1]$ by [L1], so $S_x$ is bounded below by $0$ and above by $1$. [given, L1]",
      "step": "1.1",
      "inputs": [
        "given",
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By step 1.1 and [L2], $\\inf S_x$ exists in $\\mathbb{R}$ for every $x \\in X$, lies in $[0,1]$ since $0$ is a lower bound of $S_x$ and $\\inf S_x \\le 1$ as $1 \\in S_x$; define $f : X \\to [0,1]$ by $f(x) := \\inf S_x$. [step 1.1, L2, construct]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L2",
        "construct",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "For every $x \\in X$ and real $a$ with $0 < a \\le 1$: if there is $r \\in D$ with $r < a$ and $x \\in U_r$, then $r \\in S_x$, so $f(x) \\le r < a$ by [L2](i). [step 2.1, L2]",
      "step": "3.1",
      "inputs": [
        "step 2.1",
        "L2",
        "2.1"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "For every $x \\in X$ and real $a$ with $0 < a \\le 1$: if $f(x) < a$, then by [L2](ii) some $s \\in S_x$ has $s < a \\le 1$, so $s \\ne 1$, hence $s \\in D$ and $x \\in U_s$, with $s < a$. [step 2.1, L2]",
      "step": "3.2",
      "inputs": [
        "step 2.1",
        "L2",
        "2.1"
      ]
    },
    {
      "id": "step-3.3",
      "claim": "For real $a \\le 0$: $\\{x : f(x) < a\\} = \\varnothing$, since $f(x) \\ge 0$ always by step 2.1; for real $a > 1$: $\\{x : f(x) < a\\} = X$, since $f(x) \\le 1 < a$ always by step 2.1; both open. [step 2.1]",
      "step": "3.3",
      "inputs": [
        "step 2.1",
        "2.1"
      ]
    },
    {
      "id": "step-3.4",
      "claim": "For every $x \\in X$ and real $a$ with $0 \\le a < 1$: if $f(x) > a$, put $x_0 := (a+f(x))/2 \\in (a,f(x)) \\subseteq [0,1]$ and $\\delta := (f(x)-a)/2 > 0$; by [L1] fix $r_1 \\in D$ with $|x_0 - r_1| < \\delta$, so $r_1 \\in (a,f(x))$. [step 2.1, L1, choose]",
      "step": "3.4",
      "inputs": [
        "step 2.1",
        "L1",
        "choose",
        "2.1"
      ]
    },
    {
      "id": "step-3.5",
      "claim": "For every $x \\in X$, real $a$ with $0 \\le a < 1$, and $r \\in D$ with $r > a$: if $x \\notin \\overline{U_r}$, then $r$ is a lower bound of $S_x$. Indeed, for $s = 1 \\in S_x$: $r \\le 1 = s$, since $r \\in D \\subseteq [0,1]$ by [L1]; for $s \\in D$ with $x \\in U_s$: if $s < r$ then [A1] gives $\\overline{U_s} \\subseteq U_r$, so $x \\in U_s \\subseteq \\overline{U_s} \\subseteq U_r \\subseteq \\overline{U_r}$ by [L5], contradicting $x \\notin \\overline{U_r}$, so $s \\ge r$. [step 2.1, A1, L1, L5]",
      "step": "3.5",
      "inputs": [
        "step 2.1",
        "A1",
        "L1",
        "L5",
        "2.1"
      ]
    },
    {
      "id": "step-3.6",
      "claim": "For real $a < 0$: $\\{x : f(x) > a\\} = X$, since $f(x) \\ge 0 > a$ always by step 2.1; for real $a \\ge 1$: $\\{x : f(x) > a\\} = \\varnothing$, since $f(x) \\le 1 \\le a$ always. [step 2.1]",
      "step": "3.6",
      "inputs": [
        "step 2.1",
        "2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "For real $a$ with $0 < a \\le 1$: $\\{\\, x \\in X : f(x) < a \\,\\} = \\bigcup_{r \\in D,\\, r<a} U_r$, by steps 3.1 and 3.2 giving the two inclusions; a union of open sets, hence open. [step 3.1, step 3.2]",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "step 3.2",
        "3.1",
        "3.2"
      ]
    },
    {
      "id": "step-4.2",
      "claim": "Continuing under the hypothesis of step 3.4: since $a < r_1$, by [L1] fix $r_2 \\in D$ with $|(a+r_1)/2 - r_2| < (r_1-a)/2$, so $r_2 \\in (a,r_1)$. [step 3.4, L1, choose]",
      "step": "4.2",
      "inputs": [
        "step 3.4",
        "L1",
        "choose",
        "3.4"
      ]
    },
    {
      "id": "step-4.3",
      "claim": "Continuing under the hypothesis of step 3.5: since $r$ is a lower bound of $S_x$ by step 3.5, [L2] gives $r \\le \\inf S_x = f(x)$; combined with $r > a$, $f(x) > a$. [step 3.5, step 2.1, L2]",
      "step": "4.3",
      "inputs": [
        "step 3.5",
        "step 2.1",
        "L2",
        "3.5",
        "2.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "Continuing, with $r_1, r_2$ as in step 4.2: since $r_1 < f(x) = \\inf S_x$, [L2](iii) gives $r_1 < s$ for every $s \\in S_x$; in particular $r_1 \\ne 1$, since $r_1 < f(x) \\le 1$, so $r_1 \\notin S_x$ forces $x \\notin U_{r_1}$, as otherwise $r_1$ itself would lie in $S_x$. [step 3.4, step 2.1, L2]",
      "step": "5.1",
      "inputs": [
        "step 3.4",
        "step 2.1",
        "L2",
        "4.2",
        "3.4",
        "2.1"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "Continuing: since $r_2 < r_1$ in $D$, [A1] gives $\\overline{U_{r_2}} \\subseteq U_{r_1}$; if $x \\in \\overline{U_{r_2}}$ then $x \\in U_{r_1}$, contradicting step 5.1; so $x \\notin \\overline{U_{r_2}}$, and $r_2 > a$. [step 4.2, step 5.1, A1]",
      "step": "6.1",
      "inputs": [
        "step 4.2",
        "step 5.1",
        "A1",
        "5.1",
        "4.2"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "For real $a$ with $0 \\le a < 1$: $\\{\\, x \\in X : f(x) > a \\,\\} = \\bigcup_{r \\in D,\\, r>a} \\big(X \\setminus \\overline{U_r}\\big)$. A point of the left side has, by steps 3.4 and 6.1, some $r = r_2 \\in D$ with $r > a$ and $x \\in X \\setminus \\overline{U_r}$; a point $x$ of the right side lies in $X \\setminus \\overline{U_r}$ for some such $r$, hence $x \\notin \\overline{U_r}$, giving $f(x) > a$ by step 4.3. Each $X \\setminus \\overline{U_r}$ is open by [L5], so the union is open. [step 6.1, step 4.3, L5]",
      "step": "7.1",
      "inputs": [
        "step 6.1",
        "step 4.3",
        "L5",
        "3.4",
        "6.1",
        "4.3"
      ]
    },
    {
      "id": "step-8.1",
      "claim": "By [L3], the sets $[0,a)$ and $(a,1]$, $a \\in \\mathbb{R}$, form a subbasis for the subspace topology of $[0,1]$; and $f^{-1}(\\,[0,a)\\,) = \\{x : f(x) < a\\}$, $f^{-1}(\\,(a,1]\\,) = \\{x : f(x) > a\\}$ are open in $X$ for every real $a$, by steps 4.1, 3.3, 7.1 and 3.6. [step 4.1, step 3.3, step 7.1, step 3.6, L3]",
      "step": "8.1",
      "inputs": [
        "step 4.1",
        "step 3.3",
        "step 7.1",
        "step 3.6",
        "L3",
        "4.1",
        "3.3",
        "7.1",
        "3.6"
      ]
    },
    {
      "id": "step-9.1",
      "claim": "By [L4], since the preimage of every member of that subbasis is open, $f$ is continuous as a map $X \\to [0,1]$; together with step 2.1 this proves the statement. [step 8.1, step 2.1, L4] ∎",
      "step": "9.1",
      "inputs": [
        "step 8.1",
        "step 2.1",
        "L4",
        "2.1",
        "8.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.1: zero or base-value case was inspected under the displayed definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 1.1: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (13): 13 declared dependencies; 12 cited facts; 16 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The proof explicitly handles boundary values of the parameter a (a ≤ 0, a ≥ 1, a = 0, a = 1) via steps 3.3, 3.6, 4.1, and 7.1. The empty space X = ∅ yields the empty function, which is continuous vacuously; the construction with Sx = {r ∈ D : x ∈ Ur} ∪ {1} keeps Sx nonempty even without U₁ = X, so no undefined infimum arises. The dense set D of dyadic rationals allows the choices in steps 3.4 and 4.2 for any a < f(x). The codomain [0,1] is respected. No counterexample to the claim was found under any degenerate or limit case. Checked surface: The title, the public statement, every numbered step (1.1 through 9.1), and all Remarks were read and verified. The reasoning is logically valid, the premises are sufficient, and the conclusion matches the statement. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function--f2abb667493d55aa.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-the-dyadic-rationals-of-the-unit-interval",
    "declared_target": "def-the-dyadic-rationals-of-the-unit-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-topological-space",
    "declared_target": "def-topological-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-continuous-map-top",
    "declared_target": "def-continuous-map-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-continuity-characterisations-top",
    "declared_target": "thm-continuity-characterisations-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-topology-basis-subbasis",
    "declared_target": "def-topology-basis-subbasis",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-basis-criterion",
    "declared_target": "thm-basis-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-infimum",
    "declared_target": "def-infimum",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-infimum-property",
    "declared_target": "thm-infimum-property",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-interior-closure-boundary-top",
    "declared_target": "def-interior-closure-boundary-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-real-line-is-a-metric-space",
    "declared_target": "lem-real-line-is-a-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-metrizable-space",
    "declared_target": "def-metrizable-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (13)

### `def-continuous-map-top`

````markdown
---
id: def-continuous-map-top
kind: definition
title: "Continuity of a map of topological spaces at a point and globally"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-injection-surjection-bijection]
justified_by: []
aliases: [def-continuity-top]
landmark: true
short: "continuous map of spaces"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

## Remarks

- **This is the metric definition when both topologies are metric topologies.**
  For metric spaces, $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, and the balls around a point are a neighbourhood
  base there; the identification is carried out where metrizable spaces are
  defined later on this page. Nothing about a metric survives in the definition
  above: continuity is a relation between two topologies and a function, and it
  is meaningless to ask whether a function between bare sets is continuous.

- **Continuity depends on both topologies, and coarsening the target or refining
  the source only helps.** If $f$ is continuous and $\mathcal{T}_X$ is replaced
  by a finer topology, or $\mathcal{T}_Y$ by a coarser one, $f$ remains
  continuous, since each condition to be verified is weakened and each
  neighbourhood available in the source is still available. In particular every
  map out of a discrete space and every map into an indiscrete space is
  continuous ([[def-standard-topologies]]).

- **Continuity at a point is strictly weaker than continuity.** A function may be
  continuous at exactly one point, and the definition above is deliberately local
  so that the sequential criteria proved later can be stated pointwise.
````

### `def-infimum`

````markdown
---
id: def-infimum
kind: definition
title: "Greatest lower bound (infimum)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-set]
justified_by: [lem-sup-unique]
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $\ell \in \mathbb{R}$. Then $\ell$ is a
**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:

- $\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\ell \le s$ for
  every $s \in S$;
- $\ell' \le \ell$ for every lower bound $\ell'$ of $S$.

Written out in one line:

$$\ell \text{ is an infimum of } S \iff \big[(\forall s \in S)\, \ell \le s\big] \text{ and } \big[(\forall \ell' \in \mathbb{R})\, \big((\forall s \in S)\, \ell' \le s\big) \Rightarrow \ell' \le \ell\big].$$

An infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write
$\inf S$ for it.

## Remarks

- This is the exact dual of the least upper bound (supremum) of
  [[def-complete-ordered-field]]: reverse every inequality and swap "least" for
  "greatest". The two notions are related by reflection through $0$
  ([[lem-reflection]]).
- Existence is deliberately *not* part of the definition. That every nonempty
  subset of $\mathbb{R}$ which is bounded below actually has an infimum is a
  theorem, [[thm-infimum-property]], derived from the least-upper-bound property;
  it is not an axiom and it is not free.
- As with a supremum, an infimum need not belong to $S$; when it does, it is the
  minimum of $S$ ([[def-max-min]]).
- The usable form of the definition in later arguments is the epsilon
  characterisation [[lem-inf-epsilon]]: $\ell = \inf S$ exactly when $\ell$ is a
  lower bound that cannot be raised by any positive amount without losing that
  property.
````

### `def-interior-closure-boundary-top`

````markdown
---
id: def-interior-closure-boundary-top
kind: definition
title: "Interior, closure, boundary, exterior, derived set and isolated point in a topological space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top]
justified_by: []
aliases: [def-closure-top, def-interior-top, def-boundary-top, def-derived-set-top]
landmark: true
short: "interior, closure, boundary, derived set"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$A \subseteq X$ and let $x \in X$. Neighbourhoods are as in
[[def-neighbourhood-top]], so a neighbourhood need not be open.

- The **interior** of $A$ is
  $\operatorname{int}(A) := \bigcup \{\, U \in \mathcal{T} : U \subseteq A \,\}$.
- The **closure** of $A$ is
  $\overline{A} := \bigcap \{\, F \subseteq X : F \text{ closed and } A \subseteq F \,\}$.
- The **exterior** of $A$ is $\operatorname{ext}(A) := \operatorname{int}(X \setminus A)$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$
  of $x$ satisfies $N \cap (A \setminus \{x\}) \ne \varnothing$. The set of limit
  points of $A$ is the **derived set** $A'$.
- $x$ is an **isolated point of $A$** if $x \in A$ and some neighbourhood $N$ of
  $x$ satisfies $N \cap A = \{x\}$.

**Both operators are well posed, and the two names are justified rather than
asserted.** The interior is a union of open sets, hence open by (T2), it is
contained in $A$, and it contains every open $U \subseteq A$: so
$\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being
intersected in the definition of $\overline{A}$ is nonempty, since $X$ is closed
and contains $A$, so the intersection is a set; it is closed by (C2) of
[[def-topological-space]], it contains $A$, and it is contained in every closed
$F \supseteq A$: so $\overline{A}$ is *the smallest closed superset of $A$*. In
particular

$$\operatorname{int}(A) \subseteq A \subseteq \overline{A},$$

and $A$ is open if and only if $A = \operatorname{int}(A)$, and closed if and
only if $A = \overline{A}$, in each case because one inclusion is automatic and
the other says exactly that $A$ belongs to the family in question.

**Interior and closure are exchanged by complementation.** For every
$A \subseteq X$,

$$X \setminus \operatorname{int}(A) = \overline{X \setminus A}, \qquad X \setminus \overline{A} = \operatorname{int}(X \setminus A) = \operatorname{ext}(A).$$

Indeed $U \mapsto X \setminus U$ is a bijection between the open subsets of $A$
and the closed supersets of $X \setminus A$, and it turns unions into
intersections ([[def-topological-space]]); applying complementation to the first
identity gives the second. So $\operatorname{ext}(A) = X \setminus \overline{A}$,
and every statement about interiors has a mirror statement about closures.

**The pointwise description of the interior.** $x \in \operatorname{int}(A)$ if
and only if $A$ is a neighbourhood of $x$. If $x \in \operatorname{int}(A)$ then
$\operatorname{int}(A)$ is an open set with $x \in \operatorname{int}(A) \subseteq A$;
conversely a neighbourhood relation $x \in U \subseteq A$ with $U$ open puts $x$
in the union defining $\operatorname{int}(A)$. The corresponding description of
the closure is proved as the next item, because it is the statement that does the
work in every later proof.

**$X$ is the disjoint union of the three regions.** Since
$\operatorname{int}(A) \subseteq \overline{A}$, the three sets
$\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$
and $\operatorname{ext}(A) = X \setminus \overline{A}$ are pairwise disjoint and
their union is $X$. This is recorded again, with the identities for interior and
closure of unions and intersections, in the lemma two items below.

## Remarks

- **The boundary is symmetric in $A$ and its complement**:
  $\partial A = \overline{A} \cap \overline{X \setminus A}$, because
  $\overline{A} \setminus \operatorname{int}(A) = \overline{A} \cap (X \setminus \operatorname{int}(A)) = \overline{A} \cap \overline{X \setminus A}$
  by the complementation identity above. Hence $\partial A = \partial(X \setminus A)$,
  and $\partial A$ is closed, being an intersection of two closed sets.

- **A limit point of $A$ need not lie in $A$, and a point of $A$ need not be a
  limit point of $A$.** The points of $A$ that are not limit points of $A$ are
  exactly its isolated points, directly from the two definitions. The relation
  $\overline{A} = A \cup A'$ is a theorem, proved next, not a restatement.

- **These are the metric notions when the topology is a metric topology.** For a
  metric space the definitions of [[def-metric-interior-closure-boundary]] are
  stated with balls in place of neighbourhoods, and the balls around $x$ are a
  neighbourhood base at $x$; the identification is carried out where metrizable
  spaces are defined, later on this page, and it is what allows metric examples
  to be quoted here without reproof.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-metrizable-space`

````markdown
---
id: def-metrizable-space
kind: definition
title: "Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-metric-topology, def-metric-space, thm-metric-open-set-algebra, def-equivalent-metrics,
       def-subspace-topology-top, def-isometry-and-metric-embedding,
       def-metric-ball, def-neighbourhood-top, def-interior-closure-boundary-top, def-continuous-map-top,
       def-sequence-convergence-top, def-homeomorphism-and-open-maps, def-first-countable-top,
       lem-metric-ball-neighbourhood-base, thm-metric-hausdorff-separation, def-metric-convergence,
       def-metric-continuity, thm-metric-closure-characterisation, def-metric-interior-closure-boundary,
       lem-metric-limits-unique, lem-real-line-is-a-metric-space]
justified_by: []
aliases: [def-metrizable, def-usual-topology-of-r]
landmark: true
short: "metrizable space; the usual topology of $\\mathbb{R}$"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 481fc46dfb5166d1c7254e753d62020d03b9c022b265f7afd686ea1f9dd7ff0a
    item_sha256: 36f4a57f6ea43198decefdca5ecb7883fa754f6a0fa1ef34d13dc55d3704c788
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose
metric topology is $\mathcal{T}$, that is $\mathcal{T} = \mathcal{T}_d$
([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**
$\mathcal{T}$.

**The definition presupposes that $\mathcal{T}_d$ is a topology in the sense of
[[def-topological-space]], and it is.** By [[def-metric-topology]] both
$\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by
[[thm-metric-open-set-algebra]] the family $\mathcal{T}_d$ is closed under
arbitrary unions, which is (T2), and under intersections of $n \ge 1$ members,
which contains (T3). So every metric space is a topological space, and the
metric-space development of this library is a special case of the present one.

**The standard local notions in the two developments agree after translating
their neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the
topology $\mathcal{T}_d$.

- *Neighbourhoods and balls.* [[def-metric-topology]] uses "neighbourhood" for
  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a
  non-open superset of such a set. Thus the two collections are not literally
  equal, but the open metric neighbourhoods are cofinal in the broader
  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are
  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:
  any neighbourhood $N$ contains an open $U \ni x$, hence a ball around $x$ by
  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice
  ([[lem-metric-ball-neighbourhood-base]]).
- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines
  them by the same conditions with balls in place of neighbourhoods, and the
  previous bullet makes the two conditions equivalent; the metric closure is the
  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the
  definition used here ([[def-interior-closure-boundary-top]]). So the two
  closures, the two interiors and the two boundaries are the same three
  operations.
- *Convergence.* $x_k \to p$ in the sense of [[def-sequence-convergence-top]] is
  "eventually in every neighbourhood of $p$", and by the first bullet this is
  "eventually in every ball around $p$", which is [[def-metric-convergence]].
- *Continuity.* $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, which by the first bullet is continuity at $a$ in
  the sense of [[def-continuous-map-top]].

- *Subspaces.* For $A \subseteq X$ the subspace topology
  $\{\, U \cap A : U \in \mathcal{T}_d \,\}$ of [[def-subspace-topology-top]] is
  exactly the metric topology of the subspace metric $d_A$
  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase
  *subspace topology* in this library name one thing. Indeed
  $B_A(a,r) = B_X(a,r) \cap A$: a trace $U \cap A$ is $d_A$-open, since each of
  its points $a$ has $B_X(a,r) \subseteq U$ and hence $B_A(a,r) \subseteq U \cap A$;
  and a $d_A$-open $W$ is the trace of
  $U := \bigcup \{\, B_X(a,r) : a \in W,\ r > 0,\ B_X(a,r) \cap A \subseteq W \,\}$,
  which is $d_X$-open, satisfies $U \cap A = W$, and involves no choice principle,
  the union being taken over a set of pairs rather than over a selection.

Consequently the metric-space notions of interior, closure, boundary, density,
convergence, continuity and subspace agree with the topological notions here,
and statements about them transfer once a metric is named. For neighbourhoods
the transfer uses the explicit convention change above: a metric-page
neighbourhood is an open topological neighbourhood, while every topological
neighbourhood contains one.

**Metrizability is a topological property; the metric is not part of it.** If
$h : X \to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$
metrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on
$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and
$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\mathcal{T}_d$ to a
basis of $\mathcal{T}_{d'}$ and $\mathcal{T}_{d'} = h[\mathcal{T}_d] = \mathcal{T}_Y$.
Hence $Y$ is metrizable. The metric itself, however, is **not** determined by the
topology: two metrics on one set may induce the same topology without agreeing,
which is exactly topological equivalence ([[def-equivalent-metrics]]), and
properties of a metric that are not properties of its topology, boundedness among
them, are therefore not properties of a metrizable space.

**Two things every metrizable space has.** It is **Hausdorff**: distinct points
have disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied
to any metric inducing the topology. And it is **first countable**
([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either
failure is therefore an obstruction to metrizability, and this page uses the
first of them to exhibit a topology induced by no metric.

**Sequential limits in a metrizable space are unique, so the notation
$\lim_k x_k$ is available there.** In a metric space a sequence has at most one
limit ([[lem-metric-limits-unique]]), and by the agreement of convergence above
that uniqueness is a statement about the topology alone; so within a metrizable
space, and only there, this page writes $\lim_k x_k$ in the ordinary way. In a
general space the symbol is unavailable ([[def-sequence-convergence-top]]).

**The usual topology of $\mathbb{R}$.** The absolute value makes $\mathbb{R}$ a
metric space under $d_{\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded
open intervals, and the resulting metric topology is what claim 3 of
[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\mathbb{R}$.
That is the topology meant by the phrase throughout these two pages, and
$\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on
these two pages is proved from the metric $d_{\mathbb{R}}$ and the bridge above,
and no example re-derives any of it.

## Remarks

- **The usual topology of $\mathbb{R}$ is not a second notion alongside the
  order-native development built earlier in this library.**
  [[rem-r-native-topology-scope]] records that the two collections of open subsets
  of $\mathbb{R}$ — the one defined from balls and the one defined from
  order-neighbourhoods — are literally the same collection, and hence that
  interior, closure, boundary, limit point, density and sequential convergence
  agree on the two sides. That identification is quoted here for orientation only;
  the order-topology example on the companion page is where the order-native
  description is used.

- **A metrizable space comes with many metrics and no canonical one.** The
  statement "$X$ is metrizable" asserts existence, and every argument that uses a
  metric must name one first. Where two metrics are compared, the vocabulary is
  that of [[def-equivalent-metrics]]: Lipschitz, uniform and topological
  equivalence, of which only the last is visible to the topology.

- **Metrization theorems are not proved here.** Necessary conditions are easy —
  Hausdorff, first countable — and sufficient ones require separation and
  countability axioms that this page does not develop. Nothing below asserts that
  a space *is* metrizable except by exhibiting a metric.

- **Not every topology is metrizable**, and the cheapest witness is the
  indiscrete topology on a two-point set, which is not Hausdorff. That is
  recorded on this page as a false statement and witnessed on the companion page.
````

### `def-subspace-topology-top`

````markdown
---
id: def-subspace-topology-top
kind: definition
title: "Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis, def-continuous-map-top, thm-continuity-characterisations-top]
justified_by: []
aliases: [def-subspace-top, def-relative-topology]
landmark: true
short: "subspace topology"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## Remarks

- **The subspace topology is what makes a subset a space.** Before it, a statement
  such as "the restriction of $f$ to $C$ is continuous" has no meaning, because
  $C$ carries no topology. Every restriction below is taken with respect to the
  subspace topology and with no other convention available.

- **Openness and closedness are not absolute.** $[0,1)$ is open in $[0,2)$ and is
  neither open nor closed in $\mathbb{R}$; the interval $(0,1)$ is closed in
  itself. A sentence of the form "$A$ is open" is incomplete unless the space is
  named, and this library names it whenever more than one is in play.

- **Transitivity.** If $S \subseteq T \subseteq X$ then the subspace topology $S$
  inherits from $(T, \mathcal{T}_T)$ is the subspace topology it inherits from
  $X$, since $(U \cap T) \cap S = U \cap S$ for $U \in \mathcal{T}$. So no
  ambiguity arises from the route by which a subset is reached.
````

### `def-the-dyadic-rationals-of-the-unit-interval`

````markdown
---
id: def-the-dyadic-rationals-of-the-unit-interval
kind: definition
title: "The dyadic rationals of $[0,1]$, their finite levels $D_n$, and their density in $[0,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval, def-integer-power, def-canonical-natural, def-nat-power,
       cor-archimedean-reciprocal, def-ordered-field, def-natural-numbers,
       def-nat-order, thm-induction-principle, thm-well-ordering-principle,
       lem-of-naturals-positive, lem-of-inverse-positive, def-countable,
       lem-nat-nonzero-is-successor]
justified_by: []
aliases: [def-dyadic-rationals]
landmark: true
short: "dyadic rationals of $[0,1]$"
verification:
  precheck: n/a
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
    - title: "Dyadic rational (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dyadic_rational"
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Throughout, $\iota$ is the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]),
and as is standard $\iota(k)$ is abbreviated to $k$ once no ambiguity results
([[cor-archimedean-reciprocal]]). For $m, n \in \mathbb{N}$, $m^n \in \mathbb{N}$ is the
natural-number power of [[def-nat-power]], distinct from but agreeing with the
real (integer) power $a^n$ of [[def-integer-power]] by that item's clause (d):
$\iota(m^n) = \iota(m)^n$. Writing $2$ for $\iota(2)$ as just agreed, this lets
$2^n$ be read as a natural number **or** as the real $\iota(2)^n$ interchangeably.

For $n \in \mathbb{N}$ put

$$D_n \;:=\; \Big\{\, \frac{k}{2^n} \;:\; k \in \mathbb{N},\ k \le 2^n \,\Big\} \;\subseteq\; [0,1],$$

the order $\le$ on the naturals $k$ and $2^n$ being that of [[def-nat-order]].
Each $D_n$ is
a finite subset of $[0,1]$ ([[def-interval]]) with $0, 1 \in D_n$ (the cases
$k=0$ and $k=2^n$); it has at most $2^n+1$ elements, so is finite in the sense
of [[def-countable]]. The **dyadic rationals of $[0,1]$** are

$$D \;:=\; \bigcup_{n \in \mathbb{N}} D_n \;\subseteq\; [0,1],$$

a countable union of finite sets. Each **level** $D_n$ is nested in the next:
if $k \le 2^n$ then $2k \le 2^{n+1}$ (multiplying the natural inequality by $2$),
and $\dfrac{k}{2^n} = \dfrac{2k}{2^{n+1}}$ in $\mathbb{R}$ (clearing the common
factor $\iota(2)$, licensed by [[def-ordered-field]]), so every element of $D_n$
is exhibited as an element of $D_{n+1}$; hence $D_0 \subseteq D_1 \subseteq
D_2 \subseteq \cdots$ and $D = \bigcup_n D_n$ is genuinely increasing, not
merely a union.

**The level decomposition, stated and discharged here because the recursion of
[[thm-urysohn-lemma]] consumes it.** For $n \in \mathbb{N}$,

$$D_{n+1} \;=\; D_n \,\cup\, \Big\{\, t_j := \frac{2j+1}{2^{n+1}} \;:\; j \in \mathbb{N},\ j < 2^n \,\Big\},$$

and the new points $t_j$ are pairwise distinct, none lies in $D_n$, and each
lies strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and
$s_j := (j+1)/2^n$. *Strict betweenness:* $2j < 2j+1 < 2j+2$, and dividing by
the positive $2^{n+1}$ preserves strict order ([[def-ordered-field]]), so
$r_j = 2j/2^{n+1} < t_j < (2j+2)/2^{n+1} = s_j$. *Distinctness:* $j \mapsto
2j+1$ is injective. *Disjointness from $D_n$:* $t_j = k/2^n$ with
$k \le 2^n$ would give $2j+1 = 2k$ after clearing the positive factor
$1/2^{n+1}$ and applying injectivity of $\iota$; but $k \le j$ gives
$2k \le 2j < 2j+1$, and $k \ge j+1$ gives $2k \ge 2j+2 > 2j+1$, so no such $k$
exists. *The union is all of $D_{n+1}$:* given $k/2^{n+1}$ with
$k \le 2^{n+1}$, the set $\{\, i \in \mathbb{N} : 2i > k \,\}$ is nonempty
($2(k+1) = 2k+2 > k$), so by [[thm-well-ordering-principle]] it has a least
element $i_0$, and $i_0 \ge 1$ since $2 \cdot 0 = 0 \le k$; writing
$i_0 = j+1$ ([[lem-nat-nonzero-is-successor]]) gives $2j \le k < 2j+2$, so
$k = 2j$ or $k = 2j+1$. In the first case $k/2^{n+1} = j/2^n \in D_n$ (with
$j \le 2^n$ since $2j \le 2^{n+1}$); in the second it is $t_j$ (with $j < 2^n$
since $2j+1 \le 2^{n+1}$ forces $2j < 2^{n+1}$). Finally, **any two elements of
$D$ lie together in a common level**: one lies in some $D_m$ and the other in
some $D_{m'}$, and both then lie in $D_{\max(m,m')}$ by the nesting just
proved.

**$D$ is dense in $[0,1]$: for every $x \in [0,1]$ and every real
$\varepsilon > 0$ there is $r \in D$ with $|x - r| < \varepsilon$.** First, a
growth fact about natural-number powers, proved by induction on $n$
([[thm-induction-principle]]): $2^n \ge n+1$ for every $n \in \mathbb{N}$. At
$n=0$, $2^0 = 1 = 0+1$. If $2^n \ge n+1$, then $2^{n+1} = 2^n \cdot 2 = 2^n + 2^n
\ge (n+1) + (n+1) = 2n+2 \ge n+2 = (n+1)+1$, the middle inequality adding the
inductive hypothesis to itself and the last holding since $n \ge 0$; both steps
use only that the order of $\mathbb{N}$ is compatible with addition
([[def-nat-order]]). Transporting the inequality into $\mathbb{R}$ by the
order-preserving $\iota$ ([[lem-of-naturals-positive]]) gives $\iota(2^n) \ge
\iota(n+1) = \iota(n)+1$ for every $n$.

Now fix $x \in [0,1]$ and a real $\varepsilon > 0$. By
[[cor-archimedean-reciprocal]] fix a natural $m \ge 1$ with $1/m < \varepsilon$.
Put $n := m$; then $\iota(2^n) \ge \iota(n)+1 = \iota(m)+1 > \iota(m) > 0$, so by
[[lem-of-inverse-positive]] $0 < 1/2^n < 1/m < \varepsilon$. Consider
$S := \{\, k \in \mathbb{N} : x \le k/2^n \,\}$. It is nonempty, since $k=2^n$
satisfies $x \le 1 = 2^n/2^n$ because $x \in [0,1]$; so by
[[thm-well-ordering-principle]] $S$ has a least element $k_0$, and $k_0 \le 2^n$
because $2^n \in S$. If $k_0 = 0$ then $x \le 0$, and $x \ge 0$ since $x \in
[0,1]$, so $x = 0 = 0/2^n \in D_n \subseteq D$, within distance $0 < \varepsilon$
of itself. If $k_0 \ge 1$ then $k_0 - 1 \in \mathbb{N}$ and, by minimality of
$k_0$, $k_0 - 1 \notin S$, that is $x > (k_0-1)/2^n = k_0/2^n - 1/2^n$; combined
with $x \le k_0/2^n$ this gives $|x - k_0/2^n| \le 1/2^n < \varepsilon$, and
$r := k_0/2^n \in D_n \subseteq D$ since $k_0 \le 2^n$. Either way some $r \in D$
satisfies $|x-r| < \varepsilon$.

## Remarks

- **Every dyadic rational of $[0,1]$ other than $0$ and $1$ lies strictly
  between them**, since $0 < k/2^n < 1$ exactly when $0 < k < 2^n$.

- **The finite levels, not $D$ itself, are what the construction of Urysohn's
  lemma recurses on.** $D$ is presented here as the increasing union
  $\bigcup_n D_n$ precisely so that a family indexed by $D$ can be built one
  finite level at a time, each level adding only finitely many new indices to
  the one before.
````

### `def-topological-space`

````markdown
---
id: def-topological-space
kind: definition
title: "Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: [def-topology, def-open-set-top, def-closed-set-top]
landmark: true
short: "topology, open, closed, clopen"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Topological space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topological_space"
    - title: "Comparison of topologies (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Comparison_of_topologies"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

## Remarks

- **The topology is part of the data.** Two different topologies on one set are
  two different topological spaces, exactly as two different metrics on one set
  are two different metric spaces. Every statement below that says "the space
  $X$" has a topology fixed in advance.

- **Nothing is assumed beyond (T1)–(T3).** In particular no separation property
  is built into the word *space* here: distinct points need not lie in disjoint
  open sets, singletons need not be closed, and both failures occur in the
  standard topologies defined on the next item. Where a separation property is
  used it is stated as a hypothesis.

- **This library always writes *coarser* and *finer*.** The synonyms
  *smaller/larger* are unambiguous, but *weaker/stronger* is used in both
  directions in the literature and is avoided here entirely.

- **Why "arbitrary unions, finite intersections" and not the reverse.** The
  asymmetry is not a convention: it is what makes the metric notion of open set
  ([[def-metric-topology]]) an instance, and an arbitrary intersection of open
  sets genuinely need not be open. The failure is recorded on this page as a
  false statement, with witnesses in two different spaces.
````

### `def-topology-basis-subbasis`

````markdown
---
id: def-topology-basis-subbasis
kind: definition
title: "Basis and subbasis for a topology, and the topology generated by a family of sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space]
justified_by: []
aliases: [def-basis-top, def-subbasis-top, def-generated-topology]
landmark: true
short: "basis, subbasis, generated topology"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Base (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Base_(topology)"
    - title: "Subbase (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subbase"
    - title: "J. Munkres, Topology, 2nd ed., §13"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

## Remarks

- **Every topology is a basis for itself**, so a basis always exists; the point
  of a basis is to be smaller and more explicit than $\mathcal{T}$, and the point
  of a subbasis is to be smaller still at the cost of one round of finite
  intersections.

- **Two extremes of the generated topology.** $\langle \varnothing \rangle$ is
  the indiscrete topology, since $\{\varnothing, X\}$ is a topology containing the
  empty family and is contained in every topology. At the other end,
  $\langle \mathcal{P}(X) \rangle = \mathcal{P}(X)$ is the discrete topology.

- **Generation is monotone and idempotent.** If
  $\mathcal{S}_1 \subseteq \mathcal{S}_2$ then every topology containing
  $\mathcal{S}_2$ contains $\mathcal{S}_1$, so
  $\langle \mathcal{S}_1 \rangle \subseteq \langle \mathcal{S}_2 \rangle$; and
  $\langle \langle \mathcal{S} \rangle \rangle = \langle \mathcal{S} \rangle$
  because $\langle \mathcal{S} \rangle$ is itself a topology containing
  $\mathcal{S}$. Both are used silently below.
````

### `lem-real-line-is-a-metric-space`

````markdown
---
id: lem-real-line-is-a-metric-space
kind: lemma
title: "The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-ball, def-metric-topology, def-metric-bounded-diameter,
       def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-interval,
       thm-of-archimedean, def-complete-ordered-field, def-ordered-field,
       lem-of-add-order, lem-of-naturals-positive]
justified_by: []
aliases: [def-usual-metric-on-r]
landmark: true
short: "$(\\mathbb{R}, |x-y|)$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Real line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Real_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]) with its absolute value ([[def-abs-value]]), and the function $d_{\mathbb{R}}(x,y) = |x-y|$; points $x, y, z \in \mathbb{R}$ and a real $r > 0$.

[L1] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and for $c > 0$ one has $|u| < c$ if and only if $-c < u < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L2] Triangle inequality in an ordered field: $|u + v| \le |u| + |v|$ ([[lem-of-triangle-inequality]]).

[L3] Intervals: $(a,b) = \{t : a < t < b\}$ and $[a,b] = \{t : a \le t \le b\}$ ([[def-interval]]).

[L4] Archimedean property: for every $w \in \mathbb{R}$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Adding a constant to an inequality, in strict and nonstrict form: the strict form is [[lem-of-add-order]] and the nonstrict form is that together with the case of equality, the order being total ([[def-ordered-field]]).

[L6] Trichotomy: for reals $a,b$ exactly one of $a < b$, $a = b$, $b < a$ holds ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Separation (M1): $d_{\mathbb{R}}(x,y) = |x-y| = 0$ holds if and only if $x - y = 0$, that is if and only if $x = y$. [L1]

1.2 Symmetry (M2): $d_{\mathbb{R}}(y,x) = |y-x| = |-(x-y)| = |x-y| = d_{\mathbb{R}}(x,y)$. [L1]

1.3 Triangle inequality (M3): $d_{\mathbb{R}}(x,z) = |x - z| = |(x-y) + (y-z)| \le |x-y| + |y-z| = d_{\mathbb{R}}(x,y) + d_{\mathbb{R}}(y,z)$. [L2]

1.4 For $y \in \mathbb{R}$ and $r > 0$: $y \in B(x,r)$ means $|x - y| < r$, which by [L1] holds if and only if $-r < x - y < r$, and adding $y - r$ respectively $y + r$ to the two halves shows this is equivalent to $x - r < y < x + r$. [L1, L5]

1.5 For $y \in \mathbb{R}$ and $r > 0$: $y \in \bar B(x,r)$ means $|x-y| \le r$, which by the same equivalence read with $\le$ in place of $<$ holds if and only if $x - r \le y \le x + r$. [L1, L5]

1.6 Let $x_0 \in \mathbb{R}$ and $r > 0$ be arbitrary, and use [L4] to fix a natural $n \ge 1$ with $x_0 + r < n \cdot 1_{\mathbb{R}}$; write $w := n \cdot 1_{\mathbb{R}}$. [L4, choose]

2.1 By steps 1.1, 1.2 and 1.3 the function $d_{\mathbb{R}}$ satisfies (M1), (M2) and (M3), so it is a metric on $\mathbb{R}$, which is claim 1. [step 1.1, step 1.2, step 1.3]

2.2 By step 1.4 and [L3] the set $B(x,r)$ has exactly the elements of $(x-r,x+r)$, and by step 1.5 and [L3] the set $\bar B(x,r)$ has exactly the elements of $[x-r,x+r]$; this is claim 2. [step 1.4, step 1.5, L3]

2.3 Since $r > 0$ we have $x_0 < x_0 + r < w$, so $w - x_0 > r > 0$ and hence $d_{\mathbb{R}}(x_0, w) = |x_0 - w| = |-(w - x_0)| = w - x_0 > r$; therefore $w \notin B(x_0,r)$. [step 1.6, L1, L5, L6]

3.1 Substituting claim 2 into the definition of open in the metric topology gives claim 3: $U$ is open exactly when every $x \in U$ admits $r > 0$ with $(x-r,x+r) = B(x,r) \subseteq U$. [step 2.2]

4.1 Since $x_0$ and $r$ were arbitrary, step 2.3 exhibits for every ball $B(x_0,r)$ a real not in it, so no ball contains $\mathbb{R}$; hence $\mathbb{R}$ is not a bounded subset of itself and $\operatorname{diam}(\mathbb{R})$ is not defined, which is claim 4. [step 2.1, step 2.3] ∎

## Remarks

- **This is the metric every later ceiling rests on.** Every real-line example on the companion page, and every subspace of $\mathbb{R}$ used there, takes its metric from $d_{\mathbb{R}}$ through the subspace construction of [[def-isometry-and-metric-embedding]].
- **Unboundedness needs no Archimedean input, and no completeness either.** No ordered field is bounded under $d(u,v) = |u-v|$, and the reason is a single element rather than any cofinality property: given a centre $c$ and a radius $r > 0$, the element $c + r + 1$ satisfies $d(c,\, c + r + 1) = |{-(r+1)}| = r + 1 > r$, because $1 > 0$ and $r + 1 > 0$ ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]]); so it lies outside $B(c,r)$ and no ball contains the field. Step 1.6 above chooses its witness with [[thm-of-archimedean]] instead, which is a convenience and not a necessity: it delivers a witness that is a canonical natural, and claim 4 needs no such thing. Claim 4 therefore holds verbatim in every ordered field with this $d$, Archimedean or not. Note also that a radius is an element of $\mathbb{R}$, so "a ball of infinite radius" is not something that can be written here.
- **The claim that $\operatorname{diam}(\mathbb{R})$ is "not defined" is a claim about the conventions of this development** ([[rem-sup-conventions]], [[def-metric-bounded-diameter]]): suprema here are real numbers and the extended real line, which is introduced on a later page, is not used for them, so an unbounded set has no diameter at all rather than a diameter $+\infty$.
````

### `thm-basis-criterion`

````markdown
---
id: thm-basis-criterion
kind: theorem
title: "A family is a basis for a unique topology iff it covers the set and every point of an intersection of two members lies in a member inside that intersection; finite intersections of any subbasis form a basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-topology-basis-subbasis, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "basis criterion; subbasis generates"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Base (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Base_(topology)"
    - title: "Subbase (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subbase"
    - title: "J. Munkres, Topology, 2nd ed., §13"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ be a set, and for $\mathcal{B} \subseteq \mathcal{P}(X)$ write

$$\mathcal{T}_{\mathcal{B}} := \{\, U \subseteq X : \text{for every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U \,\} .$$

1. $\mathcal{B}$ is a basis for some topology on $X$ ([[def-topology-basis-subbasis]])
   if and only if

   - **(B1)** $\bigcup \mathcal{B} = X$, and
   - **(B2)** for all $B_1, B_2 \in \mathcal{B}$ and every $x \in B_1 \cap B_2$
     there is $B_3 \in \mathcal{B}$ with $x \in B_3 \subseteq B_1 \cap B_2$.

   When (B1) and (B2) hold, that topology is **unique**: it is
   $\mathcal{T}_{\mathcal{B}}$, which is also exactly the family of all unions of
   subfamilies of $\mathcal{B}$.

2. Let $\mathcal{S} \subseteq \mathcal{P}(X)$ be an arbitrary family and let
   $\mathcal{B}_{\mathcal{S}}$ be the family of intersections of finitely many
   members of $\mathcal{S}$. Then $\mathcal{B}_{\mathcal{S}}$ satisfies (B1) and
   (B2), and $\mathcal{T}_{\mathcal{B}_{\mathcal{S}}} = \langle \mathcal{S} \rangle$,
   the topology generated by $\mathcal{S}$. So the finite intersections of any
   subbasis form a basis for the topology it generates.

**The nullary intersection: this library takes the empty intersection to be $X$.**
In claim 2 the phrase "finitely many" includes **none**, and the intersection of
the empty subfamily of $\mathcal{S}$ is $X$, because the defining condition "lies
in every member of the empty family" holds of every point of $X$. Hence
$X \in \mathcal{B}_{\mathcal{S}}$ for every $\mathcal{S}$, including
$\mathcal{S} = \varnothing$, and **no covering hypothesis is imposed on a
subbasis**. The competing convention takes only nonempty finite intersections and
compensates by requiring $\bigcup \mathcal{S} = X$; under it claim 2 holds
verbatim once that hypothesis is added, and the two conventions differ only in
which of the two devices supplies (B1). The choice made here is recorded again
among this page's conventions, and it is the reason
$\langle \varnothing \rangle$ comes out as the indiscrete topology
$\{\varnothing, X\}$ rather than being undefined.

## Facts & Assumptions

**Given:** A set $X$; a family $\mathcal{B} \subseteq \mathcal{P}(X)$ and the family $\mathcal{T}_{\mathcal{B}}$ displayed above; a family $\mathcal{S} \subseteq \mathcal{P}(X)$ and the family $\mathcal{B}_{\mathcal{S}} := \{\, S_1 \cap \dots \cap S_n : n \in \mathbb{N},\ S_1, \dots, S_n \in \mathcal{S} \,\}$, where the value at $n = 0$ is the empty intersection $X$.

[L1] Topology axioms (T1) $\varnothing, X \in \mathcal{T}$, (T2) closure under arbitrary unions, (T3) closure under binary intersections, and the fact that (T3) iterated gives every intersection of $n \ge 1$ open sets ([[def-topological-space]]).

[L2] $\mathcal{B}$ is a basis for $\mathcal{T}$ when $\mathcal{B} \subseteq \mathcal{T}$ and every $U \in \mathcal{T}$ is a union of members of $\mathcal{B}$; equivalently, when for every $U \in \mathcal{T}$ and $x \in U$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$ ([[def-topology-basis-subbasis]]).

[L3] $\langle \mathcal{S} \rangle$ is a topology on $X$, contains $\mathcal{S}$, and is contained in every topology on $X$ that contains $\mathcal{S}$ ([[def-topology-basis-subbasis]]).

## Proof

**Proof technique:** direct.

1.1 Assume (B1) and (B2). [assume-hyp]

1.2 Assume instead that $\mathcal{B}$ is a basis for some topology $\mathcal{T}$ on $X$. [assume-hyp]

1.3 $X \in \mathcal{B}_{\mathcal{S}}$, being the value of the empty intersection, and $\mathcal{S} \subseteq \mathcal{B}_{\mathcal{S}}$, each $S \in \mathcal{S}$ being the intersection of the one-term list $S$. [given]

1.4 $\mathcal{B}_{\mathcal{S}}$ is closed under binary intersections: the intersection of $S_1 \cap \dots \cap S_n$ with $S'_1 \cap \dots \cap S'_m$ is the intersection of the concatenated list, again a list of finitely many members of $\mathcal{S}$. [given]

1.5 $\mathcal{B} \subseteq \mathcal{T}_{\mathcal{B}}$ always, since for $B \in \mathcal{B}$ and $x \in B$ the set $B$ itself witnesses the defining condition; and every $U \in \mathcal{T}_{\mathcal{B}}$ equals $\bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ lies in $U$ and each $x \in U$ lies in one of them. [given, L2]

2.1 Under the assumption of step 1.1: $\varnothing \in \mathcal{T}_{\mathcal{B}}$, the defining condition being vacuous, and $X \in \mathcal{T}_{\mathcal{B}}$, since by (B1) every $x \in X$ lies in some $B \in \mathcal{B}$ and every subset of $X$ satisfies $B \subseteq X$; so (T1) holds for $\mathcal{T}_{\mathcal{B}}$. [step 1.1, L1]

2.2 Under the assumption of step 1.1: if $\mathcal{S}' \subseteq \mathcal{T}_{\mathcal{B}}$ and $x \in \bigcup \mathcal{S}'$, then $x \in U$ for some $U \in \mathcal{S}'$, and membership of $U$ supplies $B \in \mathcal{B}$ with $x \in B \subseteq U \subseteq \bigcup \mathcal{S}'$; so $\bigcup \mathcal{S}' \in \mathcal{T}_{\mathcal{B}}$ and (T2) holds. [step 1.1, L1]

2.3 Under the assumption of step 1.1: if $U, V \in \mathcal{T}_{\mathcal{B}}$ and $x \in U \cap V$, fix $B_1, B_2 \in \mathcal{B}$ with $x \in B_1 \subseteq U$ and $x \in B_2 \subseteq V$; then $x \in B_1 \cap B_2$, and (B2) supplies $B_3 \in \mathcal{B}$ with $x \in B_3 \subseteq B_1 \cap B_2 \subseteq U \cap V$, so $U \cap V \in \mathcal{T}_{\mathcal{B}}$ and (T3) holds. [step 1.1, L1, choose]

2.4 Under the assumption of step 1.2: $X \in \mathcal{T}$ by (T1), so [L2] gives for each $x \in X$ a member $B \in \mathcal{B}$ with $x \in B \subseteq X$, whence $\bigcup \mathcal{B} = X$, which is (B1); and for $B_1, B_2 \in \mathcal{B} \subseteq \mathcal{T}$ the set $B_1 \cap B_2$ is open by (T3), so [L2] gives for each $x \in B_1 \cap B_2$ a member $B_3 \in \mathcal{B}$ with $x \in B_3 \subseteq B_1 \cap B_2$, which is (B2). [step 1.2, L1, L2]

2.5 Under the assumption of step 1.2: $\mathcal{T} = \mathcal{T}_{\mathcal{B}}$. Indeed $U \in \mathcal{T}$ implies $U \in \mathcal{T}_{\mathcal{B}}$ by the second form of [L2]; and conversely $U \in \mathcal{T}_{\mathcal{B}}$ makes $U$ a union of members of $\mathcal{B} \subseteq \mathcal{T}$ by step 1.5, hence open by (T2). [step 1.2, step 1.5, L1, L2]

2.6 By steps 1.3 and 1.4, $\mathcal{B}_{\mathcal{S}}$ satisfies (B1), since $X \in \mathcal{B}_{\mathcal{S}}$ forces $\bigcup \mathcal{B}_{\mathcal{S}} = X$, and (B2), since $B_1 \cap B_2 \in \mathcal{B}_{\mathcal{S}}$ may be taken as $B_3$. [step 1.3, step 1.4]

3.1 Steps 2.1, 2.2 and 2.3 make $\mathcal{T}_{\mathcal{B}}$ a topology on $X$ whenever (B1) and (B2) hold, and step 1.5 then makes $\mathcal{B}$ a basis for it and identifies $\mathcal{T}_{\mathcal{B}}$ with the family of unions of subfamilies of $\mathcal{B}$; so (B1) and (B2) are sufficient. [step 2.1, step 2.2, step 2.3, step 1.5, L1, L2]

4.1 Step 2.4 shows (B1) and (B2) are necessary, and step 2.5 shows that any topology having $\mathcal{B}$ as a basis equals $\mathcal{T}_{\mathcal{B}}$, which is the asserted uniqueness; with step 3.1 this proves claim 1. [step 2.4, step 2.5, step 3.1]

4.2 By step 2.6 and step 3.1 applied to $\mathcal{B}_{\mathcal{S}}$, the family $\mathcal{T}_{\mathcal{B}_{\mathcal{S}}}$ is a topology on $X$ with basis $\mathcal{B}_{\mathcal{S}}$, and it contains $\mathcal{S}$ by step 1.3 and step 1.5. [step 1.3, step 1.5, step 2.6, step 3.1]

5.1 Let $\mathcal{T}'$ be any topology on $X$ with $\mathcal{S} \subseteq \mathcal{T}'$; then $\mathcal{B}_{\mathcal{S}} \subseteq \mathcal{T}'$, because $X \in \mathcal{T}'$ by (T1) covers the empty intersection and (T3) iterated covers the intersections of $n \ge 1$ members of $\mathcal{S}$, and hence $\mathcal{T}_{\mathcal{B}_{\mathcal{S}}} \subseteq \mathcal{T}'$ by (T2), every member of the former being a union of members of $\mathcal{B}_{\mathcal{S}}$. [step 1.5, step 4.2, L1]

6.1 By steps 4.2 and 5.1 the topology $\mathcal{T}_{\mathcal{B}_{\mathcal{S}}}$ contains $\mathcal{S}$ and is contained in every topology containing $\mathcal{S}$, so it is the coarsest such topology, that is $\mathcal{T}_{\mathcal{B}_{\mathcal{S}}} = \langle \mathcal{S} \rangle$; with step 2.6 this proves claim 2. [step 2.6, step 4.2, step 5.1, L3] ∎

## Remarks

- **What (B1) and (B2) are not.** (B2) does not say that $\mathcal{B}$ is closed under intersections; it says only that the intersection of two members is a union of members. The basis of open intervals of $\mathbb{R}$ satisfies (B2) outright, since an intersection of two open intervals is an open interval or empty, whereas the basis of half-open intervals of the Sorgenfrey line uses the same closure property; a basis of open balls in a metric space uses the weaker form in an essential way.

- **The subbasis clause is what makes generation computable.** The definition of $\langle \mathcal{S} \rangle$ as an intersection of topologies says nothing about what its members look like; claim 2 says they are exactly the unions of finite intersections of members of $\mathcal{S}$, which is how every generated topology in this library is actually described.

- **A family may be a basis for at most one topology, but it is a subbasis for at most one as well**, and the two roles differ: $\mathcal{S}$ is a subbasis for $\langle \mathcal{S} \rangle$ and a basis for it exactly when $\mathcal{S}$ already satisfies (B1) and (B2).
````

### `thm-continuity-characterisations-top`

````markdown
---
id: thm-continuity-characterisations-top
kind: theorem
title: "For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-continuous-map-top, thm-closure-characterisation-top, def-topology-basis-subbasis, thm-basis-criterion, def-interior-closure-boundary-top, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "five equivalent forms of continuity"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Munkres, Topology, 2nd ed., §18"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

## Facts & Assumptions

**Given:** Topological spaces $(X,\mathcal{T}_X)$ and $(Y,\mathcal{T}_Y)$, a function $f : X \to Y$, a subbasis $\mathcal{S}$ for $\mathcal{T}_Y$, subsets $A \subseteq X$ and $V, F \subseteq Y$. Preimages satisfy $f^{-1}[Y \setminus W] = X \setminus f^{-1}[W]$, $f^{-1}[\bigcup_i W_i] = \bigcup_i f^{-1}[W_i]$ and $f^{-1}[\bigcap_i W_i] = \bigcap_i f^{-1}[W_i]$ for every family, with $f^{-1}[Y] = X$ for the empty intersection.

[A1] $f$ is continuous at $x$ when for every open $V \ni f(x)$ there is an open $U \ni x$ with $f[U] \subseteq V$ ([[def-continuous-map-top]]).

[A2] A set is closed exactly when its complement is open; a set is open exactly when it is a union of open sets containing each of its points ([[def-topological-space]]).

[L1] The topology generated by $\mathcal{S}$ has as a basis the family $\mathcal{B}_{\mathcal{S}}$ of intersections of finitely many members of $\mathcal{S}$, the empty intersection being $Y$; every open set is a union of members of $\mathcal{B}_{\mathcal{S}}$ ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[L2] $x \in \overline{A}$ if and only if every open set containing $x$ meets $A$ ([[thm-closure-characterisation-top]], clause (c)).

[L3] $\overline{A}$ is the smallest closed superset of $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): let $V \subseteq Y$ be open and let $x \in f^{-1}[V]$, so $f(x) \in V$; continuity at $x$ gives an open $U \ni x$ with $f[U] \subseteq V$, that is $U \subseteq f^{-1}[V]$. As $x$ was arbitrary, $f^{-1}[V]$ is a union of open sets, hence open. [A1, A2]

1.2 (b) implies (a): let $x \in X$ and let $V$ be open with $f(x) \in V$; then $U := f^{-1}[V]$ is open, contains $x$, and satisfies $f[U] \subseteq V$. [A1]

1.3 (b) and (c) are equivalent: $F \subseteq Y$ is closed exactly when $Y \setminus F$ is open, and $f^{-1}[Y \setminus F] = X \setminus f^{-1}[F]$, so $f^{-1}[F]$ is closed exactly when $f^{-1}[Y \setminus F]$ is open; as $F$ ranges over the closed sets, $Y \setminus F$ ranges over the open sets. [given, A2]

1.4 (b) implies (d): every $S \in \mathcal{S}$ is open, $\mathcal{S}$ being contained in the topology it generates. [L1]

1.5 (d) implies (b): let $V \subseteq Y$ be open; by [L1] $V$ is a union of sets of the form $S_1 \cap \dots \cap S_n$ with $n \ge 0$ and $S_i \in \mathcal{S}$, and $f^{-1}$ turns unions into unions and intersections into intersections, with $f^{-1}[Y] = X$ for $n = 0$; so $f^{-1}[V]$ is a union of finite intersections of the open sets $f^{-1}[S_i]$ together with $X$, hence open. [given, L1, A2]

1.6 (e) implies (c): let $F \subseteq Y$ be closed and put $A := f^{-1}[F]$; then $f[A] \subseteq F$, so $f[\overline{A}] \subseteq \overline{f[A]} \subseteq \overline{F} = F$ by (e), monotonicity of the closure and [L3]; hence $\overline{A} \subseteq f^{-1}[F] = A$, and with $A \subseteq \overline{A}$ this gives $A = \overline{A}$, so $A$ is closed. [L3]

2.1 (b) implies (e): let $A \subseteq X$ and $x \in \overline{A}$, and let $V$ be open with $f(x) \in V$; then $f^{-1}[V]$ is open and contains $x$, so it meets $A$ by [L2], say at $a$; then $f(a) \in V \cap f[A]$, so $V$ meets $f[A]$. As $V$ was arbitrary, $f(x) \in \overline{f[A]}$ by [L2]. [step 1.1, L2]

3.1 Steps 1.1 and 1.2 make (a) and (b) equivalent; step 1.3 makes (b) and (c) equivalent; steps 1.4 and 1.5 make (b) and (d) equivalent; step 2.1 gives (b) implies (e) and step 1.6 gives (e) implies (c), which closes the cycle through (c) and (b). Hence all five conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1, step 1.6] ∎

## Remarks

- **Only (a) is pointwise.** Conditions (b) to (e) are global, and none of them has a pointwise version that is equivalent to continuity at a single point: the preimage of an open set containing $f(x)$ can fail to be open while still being a neighbourhood of $x$, which is exactly what continuity at $x$ asserts.

- **The inclusion in (e) may be strict for a continuous map.** For the inclusion of $(0,1)$ into $\mathbb{R}$ and $A = (0,1)$, the image of the closure is $(0,1)$ while the closure of the image is $[0,1]$. Equality for all $A$ is a strictly stronger condition, equivalent to $f$ being a closed map, and closed maps are defined three items below. Note that no map into a **discrete** space can witness strictness: there every subset is closed, so $f[\overline{A}] = f[A] = \overline{f[A]}$ always.

- **What the theorem does not say.** It says nothing about images of open sets: a continuous map need not carry open sets to open sets, and the failure is exactly what separates a continuous bijection from a homeomorphism. That separation is recorded on this page as a false statement with an explicit two-point witness.
````

### `thm-infimum-property`

````markdown
---
id: thm-infimum-property
kind: theorem
title: "Every nonempty set bounded below has an infimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-reflection, def-infimum, lem-sup-unique, def-complete-ordered-field,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: true
short: "greatest-lower-bound property"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "MIT 18.100A, Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below. Then $S$ has a
greatest lower bound in $\mathbb{R}$ ([[def-infimum]]), and it is given by

$$\inf S = -\sup(-S), \qquad \text{where } -S = \{-s : s \in S\}.$$

In particular the complete ordered field $\mathbb{R}$ has the
greatest-lower-bound property, which is therefore not an extra axiom: it is a
consequence of the least-upper-bound property.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, and its reflection $-S = \{-s : s \in S\}$.

[L1] The least-upper-bound property of $\mathbb{R}$: every nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound in $\mathbb{R}$, namely an upper bound that is $\le$ every upper bound ([[def-complete-ordered-field]]).

[L2] Reflection: $-(-S) = S$; $S$ is nonempty exactly when $-S$ is; $u$ is an upper bound of a set $X$ exactly when $-u$ is a lower bound of $-X$; and $\ell$ is a lower bound of $X$ exactly when $-\ell$ is an upper bound of $-X$ ([[lem-reflection]]).

[L3] Greatest lower bound (infimum): $\ell$ is one for $S$ when $\ell$ is a lower bound of $S$ and $\ell' \le \ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

[L4] A least upper bound and a greatest lower bound are unique when they exist, so the notations $\sup$ and $\inf$ are unambiguous ([[lem-sup-unique]]).

[L5] Negation reverses the order, elementwise: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a \le b$ if and only if $-b \le -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns $-b < -a$ back into $a < b$, while $a = b$ holds exactly when $-a = -b$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** direct.

1.1 By hypothesis $S \ne \emptyset$ and $S$ is bounded below; fix a lower bound $\ell_0$ of $S$, so $\ell_0 \le s$ for every $s \in S$. [given, choose]

1.2 Let $\ell'$ be an arbitrary lower bound of $S$; then $-\ell'$ is an upper bound of $-S$. [assume-hyp, L2]

2.1 Since $S$ is nonempty, so is $-S$, and since $\ell_0$ is a lower bound of $S$, its negative $-\ell_0$ is an upper bound of $-S$; hence $-S$ is a nonempty subset of $\mathbb{R}$ that is bounded above. [step 1.1, L2]

3.1 By the least-upper-bound property, $-S$ has a least upper bound in $\mathbb{R}$; write $u := \sup(-S)$, which is well defined by uniqueness. [step 2.1, L1, L4]

4.1 Define $\ell := -u$. [step 3.1, construct]

4.2 The element $u$ is the least of the upper bounds of $-S$ and $-\ell'$ is one of them, hence $u \le -\ell'$. [step 1.2, step 3.1, L1]

5.1 Apply the reflection fact to the set $-S$: since $u$ is an upper bound of $-S$, its negative $-u$ is a lower bound of $-(-S)$, and $-(-S) = S$; so $\ell = -u$ is a lower bound of $S$. [step 4.1, step 3.1, L2]

5.2 Negating the inequality $u \le -\ell'$ reverses it, giving $-(-\ell') \le -u$, that is $\ell' \le \ell$. [step 4.2, step 4.1, L5]

6.1 Thus $\ell$ is a lower bound of $S$ satisfying $\ell' \le \ell$ for every lower bound $\ell'$ of $S$, so $\ell$ is a greatest lower bound of $S$; it is the only one, so $\inf S$ exists and $\inf S = \ell = -\sup(-S)$. [step 5.1, step 5.2, L3, L4] ∎

## Remarks

- The theorem is not a restatement of the least-upper-bound property: it is proved from it, by transporting the problem across the order-reversing bijection $x \mapsto -x$ of [[lem-reflection]]. Nothing about $\mathbb{R}$ beyond the complete-ordered-field axioms is used.
- The hypotheses are both needed. The empty set is bounded below by every real and has no greatest lower bound, and a set unbounded below has no lower bound at all; the dual failures for suprema are recorded in [[fs-every-set-has-sup]].
- The identity $\inf S = -\sup(-S)$ is the standard device for turning any statement about suprema into its dual; [[lem-inf-epsilon]] is the first application on this page.
````

