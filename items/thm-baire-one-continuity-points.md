---
id: thm-baire-one-continuity-points
kind: theorem
title: "Baire's theorem: a Baire class one function on a closed bounded interval $[a,b]$ is continuous at the points of a dense subset of $[a,b]$ that is the trace of a $G_\\delta$ set, so its set of discontinuities is meager"
status: published
origin: session
deps: [def-baire-class-one, def-oscillation, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, thm-discontinuity-set-is-f-sigma, lem-baire-category-in-a-closed-interval, def-nowhere-dense-meager, def-f-sigma-g-delta, def-open-and-closed-in-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, thm-open-set-algebra-r, thm-continuity-preimage-characterisation, thm-algebra-of-continuous-functions, def-continuity-real, def-interval, cor-archimedean-reciprocal, def-real-limit, def-sequence, lem-of-abs-value, def-max-min, def-neighbourhood-r, def-canonical-natural, lem-of-naturals-positive, def-limit-point-r]
justified_by: []
aliases: [thm-baire-one-dense-continuity]
landmark: true
short: "Baire class one: continuity on a dense $G_\\delta$"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Baire function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_function"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a < b$ and let $f : [a,b] \to \mathbb{R}$ be of
Baire class one ([[def-baire-class-one]]). Write

$$D \;:=\; \{\, x \in [a,b] : f \text{ is discontinuous at } x \,\}, \qquad C := [a,b] \setminus D$$

([[def-continuity-real]]). Then:

1. for every real $\varepsilon > 0$ the set
   $D_\varepsilon := \{\, x \in [a,b] : \omega_f(x) \ge \varepsilon \,\}$
   ([[def-oscillation]]) is a closed subset of $\mathbb{R}$ containing **no**
   nondegenerate closed interval, hence nowhere dense
   ([[def-nowhere-dense-meager]]);
2. $D$ is meager, being the union of the sequence
   $(D_{1/\iota(n+1)})_{n \in \mathbb{N}}$ of nowhere dense sets;
3. $C$ is dense in $[a,b]$: for every $x \in [a,b]$ and every real $\rho > 0$
   the set $[a,b] \cap N_\rho(x)$ contains a point of $C$;
4. $C = [a,b] \cap V$ for a $G_\delta$ subset $V \subseteq \mathbb{R}$
   ([[def-f-sigma-g-delta]]).

**On the phrase "dense $G_\delta$".** Claims 3 and 4 together are what the
classical statement calls a *dense $G_\delta$ subset of $[a,b]$*: the continuity
set is dense in $[a,b]$ and it is the trace on $[a,b]$ of a $G_\delta$ subset of
$\mathbb{R}$. It is not claimed that $C$ is $G_\delta$ as a subset of
$\mathbb{R}$, nor that it is dense in $\mathbb{R}$; neither is true in general,
since $C \subseteq [a,b]$.

## Facts & Assumptions

**Given:** Reals $a < b$, a function $f : [a,b] \to \mathbb{R}$ of Baire class one, and a sequence $(f_k)_{k \in \mathbb{N}}$ of continuous functions on $[a,b]$ converging pointwise to $f$.

[L1] $f$ of Baire class one on $[a,b]$ means: there are continuous $f_k : [a,b] \to \mathbb{R}$ with $f_k(x) \to f(x)$ for every $x \in [a,b]$ ([[def-baire-class-one]], [[def-continuity-real]], [[def-real-limit]], [[def-sequence]]).

[L2] $\omega_f(S) = \sup\{|f(x)-f(y)| : x,y \in S\}$; $\omega_f(x) = \inf\{\omega_f([a,b] \cap N_\delta(x)) : \delta > 0\}$; $\omega_f$ is monotone under inclusion and $\omega_f(x) \ge 0$ ([[def-oscillation]]).

[L3] $f$ is continuous at $x \in [a,b]$ if and only if $\omega_f(x) = 0$ ([[thm-continuity-iff-oscillation-zero]]).

[L4] For every real $\varepsilon > 0$ there is a closed $G \subseteq \mathbb{R}$ with $\{x \in [a,b] : \omega_f(x) \ge \varepsilon\} = [a,b] \cap G$ ([[lem-oscillation-superlevel-sets-are-closed]]).

[L5] If $a < b$, $(F_n)$ are closed and $[a,b] \subseteq \bigcup_n F_n$, then some $F_n \cap [a,b]$ contains a nondegenerate closed interval ([[lem-baire-category-in-a-closed-interval]]).

[L6] $[a,b]$ and every $[c,d]$ with $c \le d$ are closed; an intersection of a nonempty family of closed sets is closed; a set is closed exactly when its complement is open ([[thm-open-set-algebra-r]], claim 3, [[def-open-and-closed-in-r]], [[def-interval]]).

[L7] For a continuous $h$ on $[a,b]$ and a closed $F \subseteq \mathbb{R}$, the preimage $\{x \in [a,b] : h(x) \in F\}$ is $G \cap [a,b]$ for some closed $G$ ([[thm-continuity-preimage-characterisation]]); differences and absolute values of continuous functions are continuous ([[thm-algebra-of-continuous-functions]]).

[L8] A closed set with empty interior is nowhere dense, and a union of a sequence of nowhere dense sets is meager ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] The set of continuity points of $f : A \to \mathbb{R}$ is $A \cap V$ for a $G_\delta$ set $V \subseteq \mathbb{R}$, and the discontinuity set is $\{x \in A : \omega_f(x) > 0\} = \bigcup_{n \in \mathbb{N}} \{x \in A : \omega_f(x) \ge 1/\iota(n+1)\}$ ([[thm-discontinuity-set-is-f-sigma]], claims 1 and 2, [[def-f-sigma-g-delta]]).

[L10] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$; $\iota$ is positive on the naturals $\ge 1$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L11] $|u - w| \le |u - v| + |v - w|$, $|u| \ge 0$, and a real that is $\le \eta$ for every real $\eta > 0$ and $\ge 0$ is $0$ ([[lem-of-abs-value]]).

[L12] $\max$ and $\min$ of two reals exist; $N_\rho(x) = (x-\rho, x+\rho)$; a point interior to a set has a neighbourhood inside it ([[def-max-min]], [[def-neighbourhood-r]], [[def-interior-closure-boundary-r]], [[def-limit-point-r]]).

## Proof

**Proof technique:** direct.

1.1 **Refinement claim.** Let $[c,d] \subseteq [a,b]$ with $c < d$ and let $\varepsilon > 0$ be real. For $N \in \mathbb{N}$ put $E_{N} := \{\, x \in [c,d] : |f_{n}(x) - f_{m}(x)| \le \varepsilon/4 \ \text{for all } n, m \ge N \,\}$. [L1, construct]

1.2 Claim 1. Fix a real $\varepsilon > 0$ and let $D_{\varepsilon} := \{x \in [a,b] : \omega_{f}(x) \ge \varepsilon\}$. It is closed in $\mathbb{R}$, being $[a,b] \cap G$ with $G$ closed and $[a,b]$ closed. [L4, L6]

1.3 Claim 4. The set of continuity points of $f$ on the domain $[a,b]$ is $[a,b] \cap V$ for a $G_\delta$ subset $V \subseteq \mathbb{R}$. [L9]

1.4 Claim 3. Let $x \in [a,b]$ and let $\rho > 0$ be real. The set $[a,b] \cap N_{\rho}(x)$ contains a nondegenerate closed interval $[c,d]$ with $c < d$, because $a < b$: taking $c := \max\{a,\ x - \rho/2\}$ and $d := \min\{b,\ x + \rho/2\}$ gives $[c,d] \subseteq [a,b] \cap N_{\rho}(x)$ and $c < d$: if $x = a$ then $c = a$ and $d = \min\{b, a + \rho/2\} > a$; if $x = b$ then $d = b$ and $c = \max\{a, b - \rho/2\} < b$; and if $a < x < b$ then $c < x < d$. [L12]

2.1 Each $E_{N}$ is closed: for fixed $n, m$ the set $\{x \in [c,d] : |f_{n}(x) - f_{m}(x)| \le \varepsilon/4\}$ is the preimage under the continuous function $|f_{n} - f_{m}|$ of the closed set $\{y : y \le \varepsilon/4\}$, hence of the form $G \cap [c,d]$ with $G$ closed, hence closed since $[c,d]$ is; and $E_{N}$ is the intersection of that nonempty family of closed sets over the pairs $n, m \ge N$. [step 1.1, L6, L7]

2.2 $[c,d] = \bigcup_{N \in \mathbb{N}} E_{N}$: for $x \in [c,d]$ the sequence $(f_{k}(x))$ converges to $f(x)$, so there is $N$ with $|f_{k}(x) - f(x)| < \varepsilon/8$ for all $k \ge N$, and then $|f_{n}(x) - f_{m}(x)| \le |f_{n}(x) - f(x)| + |f(x) - f_{m}(x)| < \varepsilon/4$ for all $n, m \ge N$. [step 1.1, L1, L11]

3.1 By the interval form of Baire category applied to $[c,d]$ and the sequence $(E_{N})$, there are $N \in \mathbb{N}$ and reals $u' < v'$ with $[u',v'] \subseteq E_{N} \cap [c,d] = E_{N}$. [step 1.1, step 2.1, step 2.2, L5]

4.1 For every $x \in [u',v']$ one has $|f_{N}(x) - f(x)| \le \varepsilon/4$. Indeed, let $\eta > 0$ be real; since $f_{m}(x) \to f(x)$ there is $m \ge N$ with $|f_{m}(x) - f(x)| < \eta$, and then $|f_{N}(x) - f(x)| \le |f_{N}(x) - f_{m}(x)| + |f_{m}(x) - f(x)| < \varepsilon/4 + \eta$; as $\eta > 0$ was arbitrary this gives $|f_{N}(x) - f(x)| \le \varepsilon/4$. [step 1.1, step 3.1, L1, L11]

4.2 Put $x_{0} := (u'+v')/2$, so $u' < x_{0} < v'$. Since $f_{N}$ is continuous at $x_{0}$ there is a real $\delta > 0$ with $|f_{N}(x) - f_{N}(x_{0})| < \varepsilon/4$ for every $x \in [a,b]$ with $|x - x_{0}| < \delta$. Put $u := \max\{u',\ x_{0} - \delta/2\}$ and $v := \min\{v',\ x_{0} + \delta/2\}$, so that $u < x_{0} < v$ and $[u,v] \subseteq [u',v']$ with $|x - x_{0}| < \delta$ for every $x \in [u,v]$. [step 3.1, L1, L12]

5.1 For $x, y \in [u,v]$: $|f(x) - f(y)| \le |f(x) - f_{N}(x)| + |f_{N}(x) - f_{N}(x_{0})| + |f_{N}(x_{0}) - f_{N}(y)| + |f_{N}(y) - f(y)| \le \varepsilon/4 + \varepsilon/4 + \varepsilon/4 + \varepsilon/4 = \varepsilon$. Hence $\omega_{f}([u,v]) \le \varepsilon$, $\varepsilon$ being an upper bound of the set whose supremum that is. [step 4.1, step 4.2, L2, L11]

6.1 **The refinement claim is proved:** for every $[c,d] \subseteq [a,b]$ with $c < d$ and every real $\varepsilon > 0$ there are $u < v$ with $[u,v] \subseteq [c,d]$ and $\omega_{f}([u,v]) \le \varepsilon$. Moreover every $x$ with $u < x < v$ satisfies $\omega_{f}(x) \le \varepsilon$, since $[a,b] \cap N_{\rho}(x) \subseteq [u,v]$ for $\rho := \min\{x-u,\ v-x\} > 0$ and $\omega_{f}$ is monotone under inclusion. [step 4.2, step 5.1, L2, L12]

7.1 $D_{\varepsilon}$ contains no nondegenerate closed interval. Were $[c,d] \subseteq D_{\varepsilon}$ with $c < d$, the refinement claim applied to $[c,d]$ and to the positive real $\varepsilon/2$ would give $u < v$ with $[u,v] \subseteq [c,d]$ and $\omega_{f}(x) \le \varepsilon/2 < \varepsilon$ for every $x$ with $u < x < v$; such an $x$ lies in $[c,d] \subseteq D_{\varepsilon}$ and so satisfies $\omega_{f}(x) \ge \varepsilon$, which is impossible. [step 6.1, step 1.2]

8.1 Hence $D_{\varepsilon}$ is nowhere dense: it is closed, so it equals its own closure, and its interior is empty, since an interior point would have a neighbourhood $N_{\rho}(x) \subseteq D_{\varepsilon}$ and then $[x - \rho/2,\ x + \rho/2]$ would be a nondegenerate closed interval inside $D_{\varepsilon}$. [step 1.2, step 7.1, L8, L12]

9.1 Claim 2. $D = \bigcup_{n \in \mathbb{N}} D_{1/\iota(n+1)}$, and each $D_{1/\iota(n+1)}$ is nowhere dense by step 8.1, so $D$ is a union of a sequence of nowhere dense sets, that is, meager. [step 8.1, L8, L9, L10]

10.1 Suppose $[c,d] \subseteq D$ with $c < d$ as in step 1.4. Then $[c,d]$ is covered by the sequence $(D_{1/\iota(n+1)})$ of closed sets, so by the interval form of Baire category some $D_{1/\iota(n+1)} \cap [c,d]$ contains a nondegenerate closed interval, contradicting step 7.1. So $[c,d] \not\subseteq D$, and any point of $[c,d] \setminus D$ is a point of $C$ inside $[a,b] \cap N_{\rho}(x)$. [step 7.1, step 9.1, step 1.4, L5, L6]

11.1 Claims 1, 2, 3 and 4 are therefore proved: claim 1 by steps 1.2, 7.1 and 8.1, claim 2 by step 9.1, claim 3 by steps 1.4 and 10.1, and claim 4 by step 1.3. [step 8.1, step 9.1, step 1.3, step 10.1] ∎

## Remarks

- **Where the hypothesis of Baire class one is used.** Only in steps 1.3 and 2.2, and only through the Cauchy-style estimate: pointwise convergence makes the sets $E_{N}$ exhaust $[c,d]$, and category then produces an interval on which one single continuous $f_{N}$ approximates $f$ uniformly to within $\varepsilon/4$. Everything after step 4.1 is about oscillation and category and would apply to any function satisfying the refinement claim.

- **The conclusion is sharp in the sense that "meager" cannot be improved to "at most countable".** The theorem constrains the discontinuity set by category, not by cardinality. Nothing above bounds the size of $D$; a meager set can be uncountable, the Cantor set being one ([[thm-cantor-set-properties]]), so the theorem leaves open how large a discontinuity set a Baire class one function may have. What it does exclude outright is a Baire class one function on $[0,1]$ that is nowhere continuous, and the companion page spends exactly that on the Dirichlet function.

- **The dense set is not claimed to be uncountable, and no measure statement is made.** Meagerness is a statement about category alone ([[def-nowhere-dense-meager]]); nothing above bears on the measure of $D$, and the two notions of smallness are independent, as [[cor-q-is-meager-and-not-g-delta]] and the fat Cantor set already record.
