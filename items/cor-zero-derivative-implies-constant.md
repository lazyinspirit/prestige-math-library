---
id: cor-zero-derivative-implies-constant
kind: corollary
title: "A function continuous on an interval $I$ whose derivative vanishes at every interior point of $I$ is constant on $I$; consequently two such functions with the same derivative differ by a constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-mean-value-theorem, def-derivative, def-continuity-real, def-interval, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, def-interior-closure-boundary-r, def-neighbourhood-r, def-limit-point-r]
justified_by: []
aliases: [cor-antiderivatives-differ-by-a-constant]
landmark: true
short: "zero derivative gives a constant"
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
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Lebl, Basic Analysis I, Mean Value Theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
differentiable at every point of $I$ that is interior to $I$
([[def-interior-closure-boundary-r]], [[def-derivative]]), with

$$f'(x) = 0 \qquad \text{at every interior point } x \text{ of } I .$$

Then $f$ is constant on $I$: there is a real $k$ with $f(x) = k$ for every
$x \in I$.

Consequently, if $f, g : I \to \mathbb{R}$ are both continuous on $I$ and both
differentiable at every interior point of $I$, with $f'(x) = g'(x)$ at every
interior point $x$, then there is a real $k$ with

$$f(x) \;=\; g(x) + k \qquad \text{for every } x \in I .$$

**Order-convexity of $I$ is essential and is not a convenience.** The
conclusion is false on a domain that falls into separate pieces, since a
function may be constant on each piece with different constants; nothing in the
proof would survive, because the mean value theorem is applied to the segment
joining two points of the domain and that segment must lie in the domain.

**The hypothesis is imposed only at interior points.** At an endpoint of $I$
nothing is asked at all: $f$ need not be differentiable there, and the proof
never evaluates a difference quotient at an endpoint, since it applies the mean
value theorem on a segment $[u,v] \subseteq I$ and uses the derivative only at
points of $(u,v)$, all of which are interior to $I$. What is *not* meant is that
the derivative at an endpoint is free to be nonzero: once $f$ is known to be
constant its difference quotient at an endpoint is constantly $0$, so wherever
$f'$ exists at an endpoint it is $0$ too. That is a consequence of the theorem,
not a hypothesis of it.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a function $f : I \to \mathbb{R}$, continuous on $I$ and differentiable with vanishing derivative at every interior point of $I$; for the second claim also a second such function $g$ with $f' = g'$ at every interior point.

[L1] Mean value theorem ([[cor-mean-value-theorem]]): for $u < v$ and $h : [u,v] \to \mathbb{R}$ continuous on $[u,v]$ and differentiable at every point of $(u,v)$, there is $c \in (u,v)$ with $h(v) - h(u) = h'(c)(v-u)$.

[L2] Order-convexity ([[def-interval]]): if $u, v \in I$ and $u \le z \le v$ then $z \in I$; so $u, v \in I$ with $u \le v$ gives $[u,v] \subseteq I$.

[L3] For $u < v$ in $I$ and $x \in (u,v)$, the point $x$ is interior to $I$: put $\varepsilon := \min\{x - u,\ v - x\}$, a positive real; every $y$ with $|y - x| < \varepsilon$ satisfies $u < y < v$, so $N_{\varepsilon}(x) \subseteq (u,v) \subseteq [u,v] \subseteq I$ ([[def-neighbourhood-r]], [[def-interior-closure-boundary-r]], [[def-interval]]).

[L4] Restriction of the domain ([[def-derivative]]): if $B \subseteq A$, if $p \in B$ is a limit point of $B$ and if $h : A \to \mathbb{R}$ is differentiable at $p$, then $h|_B$ is differentiable at $p$ with $(h|_B)'(p) = h'(p)$. Moreover every point of an order-convex subset of $\mathbb{R}$ with at least two elements is a limit point of it ([[def-derivative]], [[def-limit-point-r]]).

[L5] Continuity passes to a subset of the domain: if $B \subseteq A$ and $h : A \to \mathbb{R}$ is continuous at $p \in B$, then $h|_B$ is continuous at $p$ ([[def-continuity-real]]).

[L6] Algebra ([[thm-algebra-of-continuous-functions]], claim 1, and [[thm-algebra-of-derivatives]], claims 1 and 2): sums and scalar multiples of functions continuous at a point are continuous there, and sums and scalar multiples of functions differentiable at a limit point of the common domain are differentiable there, with the corresponding derivatives.

## Proof

**Proof technique:** direct.

1.1 If $I$ has at most one element then $f$ is constant on $I$ and there is nothing to prove, the second claim following likewise. So assume $I$ has at least two elements and let $u, v \in I$ with $u < v$ be arbitrary. [given, L2]

2.1 By [L2] the segment $[u,v]$ is contained in $I$, and $u < v$, so $[u,v]$ is a nondegenerate interval. The restriction $f|_{[u,v]}$ is continuous on $[u,v]$ by [L5]. [step 1.1, L2, L5]

2.2 Let $x \in (u,v)$. By [L3] the point $x$ is interior to $I$, so $f$ is differentiable at $x$ with $f'(x) = 0$ by hypothesis. By [L4] the point $x$ is a limit point of $[u,v]$, so $f|_{[u,v]}$ is differentiable at $x$ with $(f|_{[u,v]})'(x) = f'(x) = 0$. [step 1.1, L3, L4]

3.1 By steps 2.1 and 2.2 the function $f|_{[u,v]}$ satisfies the hypotheses of [L1] on $[u,v]$, so there is $c \in (u,v)$ with $f(v) - f(u) = (f|_{[u,v]})'(c)\,(v-u) = 0 \cdot (v-u) = 0$. Hence $f(u) = f(v)$. [step 2.1, step 2.2, L1]

4.1 Any two distinct points of $I$ can be named $u$ and $v$ with $u < v$, and step 3.1 then gives $f(u) = f(v)$; at a single point the equality is trivial. So $f$ takes one and the same value at every point of $I$, and $f$ is constant on $I$. [step 1.1, step 3.1]

5.1 **Second claim.** Put $h := f + (-1)g$, so $h(x) = f(x) - g(x)$ on $I$. By [L6] the function $h$ is continuous on $I$. If $I$ has at most one element the claim is trivial; otherwise every point of $I$ is a limit point of $I$ by [L4], so at every interior point $x$ of $I$ the sum rule of [L6] applies and gives that $h$ is differentiable at $x$ with $h'(x) = f'(x) - g'(x) = 0$. By step 4.1, applied to $h$ in place of $f$, the function $h$ is constant on $I$; writing $k$ for its value, $f(x) = g(x) + k$ for every $x \in I$. [step 4.1, L4, L6] ∎

## Remarks

- **What is really being used.** Only that any two points of $I$ are joined by a segment inside $I$, and that on such a segment the mean value theorem turns a vanishing derivative into a vanishing increment. Both facts are about $I$, not about $f$, which is why order-convexity is the hypothesis and not, say, openness or connectedness in some other sense.

- **The second claim is the uniqueness half of antidifferentiation.** It says that a function on an interval is determined by its derivative up to one additive constant. It says nothing about existence: that some given function *is* a derivative is a separate question, settled by different machinery, and this page does not address it.

- **A vanishing derivative at every interior point is far stronger than a vanishing derivative somewhere.** The theorem consumes the hypothesis at every point of a segment at once; a single stationary point carries no information about $f$ anywhere else, which is what [[thm-fermat-interior-extremum]] already made clear from the other side.
