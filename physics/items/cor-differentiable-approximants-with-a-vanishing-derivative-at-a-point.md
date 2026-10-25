---
id: cor-differentiable-approximants-with-a-vanishing-derivative-at-a-point
kind: corollary
title: "Every continuous function on $[0,1]$ is uniformly approximated by everywhere-differentiable functions whose derivative vanishes at a prescribed point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-derivative, cor-weierstrass-approximation-on-the-unit-interval, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-chain-rule, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, cor-differentiable-implies-continuous, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Proposition 21.2.10"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Statement

Let $c \in (0,1)$, let $f \in C([0,1],\mathbb{R})$ and let $\varepsilon > 0$.
Then there is a function $g : \mathbb{R} \to \mathbb{R}$, differentiable at
every real point ([[def-derivative]]), with

$$g'(c) \;=\; 0 \qquad\text{and}\qquad \sup_{x\in[0,1]}|f(x)-g(x)| \;<\; \varepsilon .$$

Since a function differentiable at every real point is continuous there, the
restrictions to $[0,1]$ of the everywhere-differentiable functions with
vanishing derivative at $c$ are uniformly dense in $C([0,1],\mathbb{R})$.

**The source states this for $c = 1/2$ and for differentiability on $(0,1)$;
the statement above is the altered form** obtained by letting the point be
arbitrary and by producing an approximant differentiable on all of $\mathbb{R}$,
which is what the construction below actually delivers. Nothing in the proof
uses $0 < c < 1$; the restriction to $(0,1)$ is kept only so that $c$ is an
interior point of the interval on which the approximation is measured.

## Facts & Assumptions

**Given:** A point $c \in (0,1)$, a function $f \in C([0,1],\mathbb{R})$ and a real $\varepsilon > 0$.

[L1] For every $f \in C([0,1],\mathbb{R})$ and $\varepsilon > 0$, there is a polynomial $p$ with $\sup_{x\in[0,1]}|p(x)-f(x)| < \varepsilon$ ([[cor-weierstrass-approximation-on-the-unit-interval]]).

[L2] Let $a_0, \dots, a_{n-1}$ be real and let $P : \mathbb{R} \to \mathbb{R}$ be the polynomial function $P(x) = \sum_{j<n} a_jx^{j}$. Then $P$ is differentiable at every $c \in \mathbb{R}$, and $P'(c) = \sum_{1 \le j < n} j\,a_j\,c^{\,j-1}$, the term of index $0$ being $0$ ([[lem-derivative-of-a-power]]).

[L3] Let $A \subseteq \mathbb{R}$, let $c \in A$ be a limit point of $A$, let $u, v : A \to \mathbb{R}$ be differentiable at $c$ and let $\alpha \in \mathbb{R}$. Then $u + v$ is differentiable at $c$ with $(u+v)'(c) = u'(c) + v'(c)$, and $\alpha u$ is differentiable at $c$ with $(\alpha u)'(c) = \alpha u'(c)$ ([[thm-algebra-of-derivatives]]).

[L4] Let $A, B \subseteq \mathbb{R}$, let $v : A \to \mathbb{R}$ with $v[A] \subseteq B$ and let $u : B \to \mathbb{R}$. Let $c \in A$ be a limit point of $A$ at which $v$ is differentiable, put $b := v(c)$, and suppose $b$ is a limit point of $B$ at which $u$ is differentiable. Then $u \circ v$ is differentiable at $c$ and $(u \circ v)'(c) = u'(v(c))\,v'(c)$ ([[thm-chain-rule]]).

[L5] The functions $\sin$ and $\cos$ are differentiable on $\mathbb{R}$, with $(\sin x)' = \cos x$ and $(\cos x)' = -\sin x$; also $\sin 0 = 0$ and $\cos 0 = 1$ ([[thm-sine-and-cosine-derivatives]]).

[L6] For every real $x$, $\sin^{2}x + \cos^{2}x = 1$; consequently $|\sin x| \le 1$ and $|\cos x| \le 1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L7] A function differentiable at a point is continuous at that point ([[cor-differentiable-implies-continuous]]).

[L8] For every $\varepsilon > 0$ in a complete ordered field there is a natural number $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] choose a polynomial $p$ with $\sup_{x\in[0,1]}|p(x)-f(x)| < \varepsilon/3$. [given, L1, choose]

2.1 $p$ is differentiable at every real point; put $a := p'(c)$. Every real point is a limit point of $\mathbb{R}$, so the derivatives below are all defined symbols. [step 1.1, L2]

3.1 **Case $a = 0$.** Put $g := p$. Then $g$ is differentiable at every real point with $g'(c) = a = 0$, and $\sup_{x\in[0,1]}|f(x)-g(x)| < \varepsilon/3 < \varepsilon$, which is the assertion. [step 1.1, step 2.1, algebra]

3.2 **Case $a \ne 0$.** Then $|a| > 0$, so $\varepsilon/(3|a|) > 0$, and by [L8] there is a natural number $\lambda \ge 1$ with $1/\lambda < \varepsilon/(3|a|)$. [step 2.1, L8, choose]

4.1 Define $v : \mathbb{R} \to \mathbb{R}$ by $v(x) = \lambda(x-c)$ and $g : \mathbb{R} \to \mathbb{R}$ by $g(x) = p(x) - (a/\lambda)\sin\bigl(v(x)\bigr)$. [step 3.2, choose]

5.1 $v(x) = \lambda(x-c)$ is the polynomial function with $a_0 = -\lambda c$ and $a_1 = \lambda$, so [L2] makes it differentiable at every real point with $v'(x) = 1\cdot\lambda\cdot x^{0} = \lambda$; substituting $x = c$ gives $v(c) = 0$. [step 4.1, L2, algebra]

5.2 For every $x \in [0,1]$, $|g(x)-p(x)| = (|a|/\lambda)\,|\sin(v(x))| \le |a|/\lambda < \varepsilon/3$, using $|\sin| \le 1$ and step 3.2. [step 3.2, step 4.1, L6, algebra]

6.1 Since $\sin$ is differentiable at every real point and every real point is a limit point of $\mathbb{R}$, the chain rule applies to $\sin \circ\, v$ at every real $x$ and gives $(\sin \circ\, v)'(x) = \cos\bigl(v(x)\bigr)\,\lambda$. [step 5.1, L4, L5]

6.2 For every $x \in [0,1]$, $|f(x)-g(x)| \le |f(x)-p(x)| + |p(x)-g(x)| < \varepsilon/3 + \varepsilon/3 = 2\varepsilon/3$, so $2\varepsilon/3$ is an upper bound for $|f-g|$ on $[0,1]$ and therefore $\sup_{x\in[0,1]}|f(x)-g(x)| \le 2\varepsilon/3 < \varepsilon$. [step 1.1, step 5.2, algebra]

7.1 By [L3], $g$ is differentiable at every real point, with $g'(x) = p'(x) - (a/\lambda)\lambda\cos\bigl(v(x)\bigr) = p'(x) - a\cos\bigl(v(x)\bigr)$. [step 2.1, step 4.1, step 6.1, L3, algebra]

8.1 At $x = c$ we have $v(c) = 0$ and $\cos 0 = 1$, so $g'(c) = p'(c) - a\cdot 1 = a - a = 0$. [step 2.1, step 5.1, step 7.1, L5, algebra]

9.1 In both cases a function $g : \mathbb{R} \to \mathbb{R}$ differentiable at every real point has been produced with $g'(c) = 0$ and $\sup_{x\in[0,1]}|f(x)-g(x)| < \varepsilon$, which is the first assertion. [step 3.1, step 8.1, step 6.2]

10.1 Such a $g$ is continuous at every real point, so its restriction to $[0,1]$ lies in $C([0,1],\mathbb{R})$; since $f \in C([0,1],\mathbb{R})$ and $\varepsilon > 0$ were arbitrary, these restrictions are uniformly dense in $C([0,1],\mathbb{R})$, which is the second assertion. [step 9.1, L7] ∎
