---
id: lem-cauchy-complete-and-archimedean-imply-mct
kind: lemma
title: "Cauchy completeness plus the Archimedean property imply the monotone convergence property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, thm-recursion, thm-well-ordering-principle, thm-induction-principle, thm-nat-linear-order, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, lem-of-naturals-positive, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "J. Lebl, Basic Analysis I, §2.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) with Cauchy
completeness (CC). Then $F$ has the monotone convergence property (MCT) of
[[def-completeness-properties]]: every nondecreasing sequence in $F$ that is
bounded above converges in $F$.

The Archimedean hypothesis is not decoration. Without it the implication is
false: $\mathbb{R}((t^{-1}))$ has (CC) ([[thm-laurent-cauchy-complete]]) and
fails (MCT), since (MCT) would force it to be Archimedean
([[lem-mct-implies-archimedean]]) and it is not
([[lem-laurent-non-archimedean]]).

## Facts & Assumptions

**Given:** An Archimedean ordered field $F$ with (CC), and a nondecreasing sequence $(x_k)$ in $F$ with $x_k \le B$ for every $k$ and some $B \in F$.

[L1] The properties (MCT) and (CC) of [[def-completeness-properties]].

[L2] Sequences in an ordered field: $(x_k)$ is nondecreasing when $x_j \le x_k$ for all $j \le k$; it is Cauchy in $F$ when for every $\varepsilon > 0$ in $F$ there is $N$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge N$; convergence in $F$ is as fixed there ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: for every $z \in F$ there is a natural $n \ge 1$ with $z < n \cdot 1_F$ ([[def-archimedean-field]]); the canonical naturals satisfy $n \cdot 1_F > 0$ for $n \ge 1$ and $(m+n)\cdot 1_F = m \cdot 1_F + n \cdot 1_F$, with $0 \cdot 1_F = 0$ ([[lem-of-naturals-positive]]).

[L4] Recursion theorem ([[thm-recursion]]); well-ordering principle, every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]); induction principle ([[thm-induction-principle]]); the order on $\mathbb{N}$ is total ([[thm-nat-linear-order]]).

[L5] Absolute value: $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]).

[L6] Order arithmetic: adding a constant preserves the strict order and strict inequalities add ([[lem-of-add-order]]), the nonstrict forms following with the equality cases; for $c > 0$ one has $a < b$ if and only if $ac < bc$ ([[lem-of-sign-rules]]); a positive element is invertible with positive inverse ([[lem-of-inverse-positive]]); the order is total and transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $(x_k)$ is not Cauchy in $F$: there is $\varepsilon > 0$ in $F$ such that for every $N \in \mathbb{N}$ there are $k, l \ge N$ with $|x_k - x_l| \ge \varepsilon$. [L2, assume-contra]

2.1 For every $n \in \mathbb{N}$ there is $k > n$ with $x_k - x_n \ge \varepsilon$: apply step 1.1 with $N := n + 1$ to get $k, l \ge n+1$ with $|x_k - x_l| \ge \varepsilon$, name them so that $l \le k$, note that monotonicity gives $x_l \le x_k$ and hence $|x_k - x_l| = x_k - x_l \ge \varepsilon$, and note that $n < l$ gives $x_n \le x_l$, so $x_k - x_n \ge x_k - x_l \ge \varepsilon$ with $k \ge n+1 > n$. [step 1.1, L2, L4, L5, L6]

3.1 For each $n$ the set $\{\, k \in \mathbb{N} : k > n \text{ and } x_k - x_n \ge \varepsilon \,\}$ is therefore nonempty and has a least element, so $f(n) := \min\{k : k > n, \ x_k - x_n \ge \varepsilon\}$ is a total function $\mathbb{N} \to \mathbb{N}$; the recursion theorem applied to $\mathbb{N}$, the element $0$ and $f$ gives indices $k_0 = 0$ and $k_{j+1} = f(k_j)$, with $k_j < k_{j+1}$ and $x_{k_{j+1}} - x_{k_j} \ge \varepsilon$ for every $j$. [step 2.1, L4]

4.1 By induction on $j$, $x_{k_j} - x_{k_0} \ge (j \cdot 1_F)\,\varepsilon$ for every $j$: at $j = 0$ both sides are $0$, and adding $x_{k_{j+1}} - x_{k_j} \ge \varepsilon$ to the inductive inequality gives $x_{k_{j+1}} - x_{k_0} \ge (j \cdot 1_F)\varepsilon + \varepsilon = ((j+1)\cdot 1_F)\,\varepsilon$. [step 3.1, L3, L4, L6]

5.1 Since $\varepsilon > 0$ is invertible with $\varepsilon^{-1} > 0$, the Archimedean property supplies $j \ge 1$ with $(B - x_{k_0})\varepsilon^{-1} < j \cdot 1_F$, hence $B - x_{k_0} < (j \cdot 1_F)\varepsilon$ and $x_{k_j} \ge x_{k_0} + (j \cdot 1_F)\varepsilon > B$, contradicting the hypothesis that $B$ bounds every term of $(x_k)$. [step 4.1, L3, L6]

6.1 The assumption of step 1.1 is therefore untenable, so $(x_k)$ is Cauchy in $F$ and (CC) makes it converge in $F$; as $(x_k)$ was an arbitrary nondecreasing sequence bounded above, $F$ has (MCT). [step 5.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **What the Archimedean property does here.** It is used exactly once, in the
  final estimate, to say that a fixed positive $\varepsilon$ added to itself
  often enough exceeds a given element. In a non-Archimedean field the increments
  $\varepsilon$ of the recursion can be infinitesimal relative to $B - x_{k_0}$, and
  the sequence $(x_{k_j})$ climbs forever without ever passing $B$; that is
  exactly how (CC) survives while (MCT) fails.

- **No choice is used:** the recursion takes the *least* admissible index,
  supplied by [[thm-well-ordering-principle]], and it is [[thm-recursion]]
  applied to a function defined outright.
